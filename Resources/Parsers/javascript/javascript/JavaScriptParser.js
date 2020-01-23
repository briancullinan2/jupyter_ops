"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/javascript/javascript/JavaScriptParser.g4 by ANTLR 4.7.3-SNAPSHOT
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
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var JavaScriptParser = /** @class */ (function (_super) {
    __extends(JavaScriptParser, _super);
    function JavaScriptParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(JavaScriptParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(JavaScriptParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return JavaScriptParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JavaScriptParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "JavaScriptParser.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JavaScriptParser.prototype, "ruleNames", {
        // @Override
        get: function () { return JavaScriptParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JavaScriptParser.prototype, "serializedATN", {
        // @Override
        get: function () { return JavaScriptParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    JavaScriptParser.prototype.program = function () {
        var _localctx = new ProgramContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, JavaScriptParser.RULE_program);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 147;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                    case 1:
                        {
                            this.state = 146;
                            this.match(JavaScriptParser.HashBangLine);
                        }
                        break;
                }
                this.state = 150;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                    case 1:
                        {
                            this.state = 149;
                            this.sourceElements();
                        }
                        break;
                }
                this.state = 152;
                this.match(JavaScriptParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.sourceElement = function () {
        var _localctx = new SourceElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, JavaScriptParser.RULE_sourceElement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 154;
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
    JavaScriptParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, JavaScriptParser.RULE_statement);
        try {
            this.state = 176;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 156;
                        this.block();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 157;
                        this.variableStatement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 158;
                        this.importStatement();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 159;
                        this.exportStatement();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 160;
                        this.emptyStatement();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 161;
                        this.classDeclaration();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 162;
                        this.expressionStatement();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 163;
                        this.ifStatement();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 164;
                        this.iterationStatement();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 165;
                        this.continueStatement();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 166;
                        this.breakStatement();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 167;
                        this.returnStatement();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 168;
                        this.yieldStatement();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 169;
                        this.withStatement();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 170;
                        this.labelledStatement();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 171;
                        this.switchStatement();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 172;
                        this.throwStatement();
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 173;
                        this.tryStatement();
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 174;
                        this.debuggerStatement();
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 175;
                        this.functionDeclaration();
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
    JavaScriptParser.prototype.block = function () {
        var _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, JavaScriptParser.RULE_block);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 178;
                this.match(JavaScriptParser.OpenBrace);
                this.state = 180;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                    case 1:
                        {
                            this.state = 179;
                            this.statementList();
                        }
                        break;
                }
                this.state = 182;
                this.match(JavaScriptParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.statementList = function () {
        var _localctx = new StatementListContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, JavaScriptParser.RULE_statementList);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 185;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 184;
                                    this.statement();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 187;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.importStatement = function () {
        var _localctx = new ImportStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, JavaScriptParser.RULE_importStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 189;
                this.match(JavaScriptParser.Import);
                this.state = 190;
                this.importFromBlock();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.importFromBlock = function () {
        var _localctx = new ImportFromBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, JavaScriptParser.RULE_importFromBlock);
        var _la;
        try {
            this.state = 204;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaScriptParser.OpenBrace:
                case JavaScriptParser.Multiply:
                case JavaScriptParser.NullLiteral:
                case JavaScriptParser.BooleanLiteral:
                case JavaScriptParser.Break:
                case JavaScriptParser.Do:
                case JavaScriptParser.Instanceof:
                case JavaScriptParser.Typeof:
                case JavaScriptParser.Case:
                case JavaScriptParser.Else:
                case JavaScriptParser.New:
                case JavaScriptParser.Var:
                case JavaScriptParser.Catch:
                case JavaScriptParser.Finally:
                case JavaScriptParser.Return:
                case JavaScriptParser.Void:
                case JavaScriptParser.Continue:
                case JavaScriptParser.For:
                case JavaScriptParser.Switch:
                case JavaScriptParser.While:
                case JavaScriptParser.Debugger:
                case JavaScriptParser.Function:
                case JavaScriptParser.This:
                case JavaScriptParser.With:
                case JavaScriptParser.Default:
                case JavaScriptParser.If:
                case JavaScriptParser.Throw:
                case JavaScriptParser.Delete:
                case JavaScriptParser.In:
                case JavaScriptParser.Try:
                case JavaScriptParser.As:
                case JavaScriptParser.From:
                case JavaScriptParser.Class:
                case JavaScriptParser.Enum:
                case JavaScriptParser.Extends:
                case JavaScriptParser.Super:
                case JavaScriptParser.Const:
                case JavaScriptParser.Export:
                case JavaScriptParser.Import:
                case JavaScriptParser.Async:
                case JavaScriptParser.Await:
                case JavaScriptParser.Implements:
                case JavaScriptParser.Let:
                case JavaScriptParser.Private:
                case JavaScriptParser.Public:
                case JavaScriptParser.Interface:
                case JavaScriptParser.Package:
                case JavaScriptParser.Protected:
                case JavaScriptParser.Static:
                case JavaScriptParser.Yield:
                case JavaScriptParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 193;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (JavaScriptParser.NullLiteral - 59)) | (1 << (JavaScriptParser.BooleanLiteral - 59)) | (1 << (JavaScriptParser.Break - 59)) | (1 << (JavaScriptParser.Do - 59)) | (1 << (JavaScriptParser.Instanceof - 59)) | (1 << (JavaScriptParser.Typeof - 59)) | (1 << (JavaScriptParser.Case - 59)) | (1 << (JavaScriptParser.Else - 59)) | (1 << (JavaScriptParser.New - 59)) | (1 << (JavaScriptParser.Var - 59)) | (1 << (JavaScriptParser.Catch - 59)) | (1 << (JavaScriptParser.Finally - 59)) | (1 << (JavaScriptParser.Return - 59)) | (1 << (JavaScriptParser.Void - 59)) | (1 << (JavaScriptParser.Continue - 59)) | (1 << (JavaScriptParser.For - 59)) | (1 << (JavaScriptParser.Switch - 59)) | (1 << (JavaScriptParser.While - 59)) | (1 << (JavaScriptParser.Debugger - 59)) | (1 << (JavaScriptParser.Function - 59)) | (1 << (JavaScriptParser.This - 59)) | (1 << (JavaScriptParser.With - 59)) | (1 << (JavaScriptParser.Default - 59)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (JavaScriptParser.If - 91)) | (1 << (JavaScriptParser.Throw - 91)) | (1 << (JavaScriptParser.Delete - 91)) | (1 << (JavaScriptParser.In - 91)) | (1 << (JavaScriptParser.Try - 91)) | (1 << (JavaScriptParser.As - 91)) | (1 << (JavaScriptParser.From - 91)) | (1 << (JavaScriptParser.Class - 91)) | (1 << (JavaScriptParser.Enum - 91)) | (1 << (JavaScriptParser.Extends - 91)) | (1 << (JavaScriptParser.Super - 91)) | (1 << (JavaScriptParser.Const - 91)) | (1 << (JavaScriptParser.Export - 91)) | (1 << (JavaScriptParser.Import - 91)) | (1 << (JavaScriptParser.Async - 91)) | (1 << (JavaScriptParser.Await - 91)) | (1 << (JavaScriptParser.Implements - 91)) | (1 << (JavaScriptParser.Let - 91)) | (1 << (JavaScriptParser.Private - 91)) | (1 << (JavaScriptParser.Public - 91)) | (1 << (JavaScriptParser.Interface - 91)) | (1 << (JavaScriptParser.Package - 91)) | (1 << (JavaScriptParser.Protected - 91)) | (1 << (JavaScriptParser.Static - 91)) | (1 << (JavaScriptParser.Yield - 91)) | (1 << (JavaScriptParser.Identifier - 91)))) !== 0)) {
                            {
                                this.state = 192;
                                this.importDefault();
                            }
                        }
                        this.state = 197;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JavaScriptParser.Multiply:
                                {
                                    this.state = 195;
                                    this.importNamespace();
                                }
                                break;
                            case JavaScriptParser.OpenBrace:
                                {
                                    this.state = 196;
                                    this.moduleItems();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 199;
                        this.importFrom();
                        this.state = 200;
                        this.eos();
                    }
                    break;
                case JavaScriptParser.StringLiteral:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 202;
                        this.match(JavaScriptParser.StringLiteral);
                        this.state = 203;
                        this.eos();
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
    JavaScriptParser.prototype.moduleItems = function () {
        var _localctx = new ModuleItemsContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, JavaScriptParser.RULE_moduleItems);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 206;
                this.match(JavaScriptParser.OpenBrace);
                this.state = 212;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 207;
                                this.aliasName();
                                this.state = 208;
                                this.match(JavaScriptParser.Comma);
                            }
                        }
                    }
                    this.state = 214;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                }
                this.state = 219;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (JavaScriptParser.NullLiteral - 59)) | (1 << (JavaScriptParser.BooleanLiteral - 59)) | (1 << (JavaScriptParser.Break - 59)) | (1 << (JavaScriptParser.Do - 59)) | (1 << (JavaScriptParser.Instanceof - 59)) | (1 << (JavaScriptParser.Typeof - 59)) | (1 << (JavaScriptParser.Case - 59)) | (1 << (JavaScriptParser.Else - 59)) | (1 << (JavaScriptParser.New - 59)) | (1 << (JavaScriptParser.Var - 59)) | (1 << (JavaScriptParser.Catch - 59)) | (1 << (JavaScriptParser.Finally - 59)) | (1 << (JavaScriptParser.Return - 59)) | (1 << (JavaScriptParser.Void - 59)) | (1 << (JavaScriptParser.Continue - 59)) | (1 << (JavaScriptParser.For - 59)) | (1 << (JavaScriptParser.Switch - 59)) | (1 << (JavaScriptParser.While - 59)) | (1 << (JavaScriptParser.Debugger - 59)) | (1 << (JavaScriptParser.Function - 59)) | (1 << (JavaScriptParser.This - 59)) | (1 << (JavaScriptParser.With - 59)) | (1 << (JavaScriptParser.Default - 59)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (JavaScriptParser.If - 91)) | (1 << (JavaScriptParser.Throw - 91)) | (1 << (JavaScriptParser.Delete - 91)) | (1 << (JavaScriptParser.In - 91)) | (1 << (JavaScriptParser.Try - 91)) | (1 << (JavaScriptParser.As - 91)) | (1 << (JavaScriptParser.From - 91)) | (1 << (JavaScriptParser.Class - 91)) | (1 << (JavaScriptParser.Enum - 91)) | (1 << (JavaScriptParser.Extends - 91)) | (1 << (JavaScriptParser.Super - 91)) | (1 << (JavaScriptParser.Const - 91)) | (1 << (JavaScriptParser.Export - 91)) | (1 << (JavaScriptParser.Import - 91)) | (1 << (JavaScriptParser.Async - 91)) | (1 << (JavaScriptParser.Await - 91)) | (1 << (JavaScriptParser.Implements - 91)) | (1 << (JavaScriptParser.Let - 91)) | (1 << (JavaScriptParser.Private - 91)) | (1 << (JavaScriptParser.Public - 91)) | (1 << (JavaScriptParser.Interface - 91)) | (1 << (JavaScriptParser.Package - 91)) | (1 << (JavaScriptParser.Protected - 91)) | (1 << (JavaScriptParser.Static - 91)) | (1 << (JavaScriptParser.Yield - 91)) | (1 << (JavaScriptParser.Identifier - 91)))) !== 0)) {
                    {
                        this.state = 215;
                        this.aliasName();
                        this.state = 217;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaScriptParser.Comma) {
                            {
                                this.state = 216;
                                this.match(JavaScriptParser.Comma);
                            }
                        }
                    }
                }
                this.state = 221;
                this.match(JavaScriptParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.importDefault = function () {
        var _localctx = new ImportDefaultContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, JavaScriptParser.RULE_importDefault);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 223;
                this.aliasName();
                this.state = 224;
                this.match(JavaScriptParser.Comma);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.importNamespace = function () {
        var _localctx = new ImportNamespaceContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, JavaScriptParser.RULE_importNamespace);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 226;
                this.match(JavaScriptParser.Multiply);
                this.state = 229;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaScriptParser.As) {
                    {
                        this.state = 227;
                        this.match(JavaScriptParser.As);
                        this.state = 228;
                        this.identifierName();
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
    JavaScriptParser.prototype.importFrom = function () {
        var _localctx = new ImportFromContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, JavaScriptParser.RULE_importFrom);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 231;
                this.match(JavaScriptParser.From);
                this.state = 232;
                this.match(JavaScriptParser.StringLiteral);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.aliasName = function () {
        var _localctx = new AliasNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, JavaScriptParser.RULE_aliasName);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 234;
                this.identifierName();
                this.state = 237;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaScriptParser.As) {
                    {
                        this.state = 235;
                        this.match(JavaScriptParser.As);
                        this.state = 236;
                        this.identifierName();
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
    JavaScriptParser.prototype.exportStatement = function () {
        var _localctx = new ExportStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, JavaScriptParser.RULE_exportStatement);
        try {
            this.state = 251;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                case 1:
                    _localctx = new ExportDeclarationContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 239;
                        this.match(JavaScriptParser.Export);
                        this.state = 242;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JavaScriptParser.OpenBrace:
                            case JavaScriptParser.Multiply:
                                {
                                    this.state = 240;
                                    this.exportFromBlock();
                                }
                                break;
                            case JavaScriptParser.Var:
                            case JavaScriptParser.Function:
                            case JavaScriptParser.Class:
                            case JavaScriptParser.Const:
                            case JavaScriptParser.Async:
                            case JavaScriptParser.Let:
                                {
                                    this.state = 241;
                                    this.declaration();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 244;
                        this.eos();
                    }
                    break;
                case 2:
                    _localctx = new ExportDefaultDeclarationContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 246;
                        this.match(JavaScriptParser.Export);
                        this.state = 247;
                        this.match(JavaScriptParser.Default);
                        this.state = 248;
                        this.singleExpression(0);
                        this.state = 249;
                        this.eos();
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
    JavaScriptParser.prototype.exportFromBlock = function () {
        var _localctx = new ExportFromBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, JavaScriptParser.RULE_exportFromBlock);
        try {
            this.state = 263;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaScriptParser.Multiply:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 253;
                        this.importNamespace();
                        this.state = 254;
                        this.importFrom();
                        this.state = 255;
                        this.eos();
                    }
                    break;
                case JavaScriptParser.OpenBrace:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 257;
                        this.moduleItems();
                        this.state = 259;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                            case 1:
                                {
                                    this.state = 258;
                                    this.importFrom();
                                }
                                break;
                        }
                        this.state = 261;
                        this.eos();
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
    JavaScriptParser.prototype.declaration = function () {
        var _localctx = new DeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, JavaScriptParser.RULE_declaration);
        try {
            this.state = 268;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaScriptParser.Var:
                case JavaScriptParser.Const:
                case JavaScriptParser.Let:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 265;
                        this.variableStatement();
                    }
                    break;
                case JavaScriptParser.Class:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 266;
                        this.classDeclaration();
                    }
                    break;
                case JavaScriptParser.Function:
                case JavaScriptParser.Async:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 267;
                        this.functionDeclaration();
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
    JavaScriptParser.prototype.variableStatement = function () {
        var _localctx = new VariableStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, JavaScriptParser.RULE_variableStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 270;
                this.varModifier();
                this.state = 271;
                this.variableDeclarationList();
                this.state = 272;
                this.eos();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.variableDeclarationList = function () {
        var _localctx = new VariableDeclarationListContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, JavaScriptParser.RULE_variableDeclarationList);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 274;
                this.variableDeclaration();
                this.state = 279;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 275;
                                this.match(JavaScriptParser.Comma);
                                this.state = 276;
                                this.variableDeclaration();
                            }
                        }
                    }
                    this.state = 281;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
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
    JavaScriptParser.prototype.variableDeclaration = function () {
        var _localctx = new VariableDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, JavaScriptParser.RULE_variableDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 282;
                this.assignable();
                this.state = 285;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                    case 1:
                        {
                            this.state = 283;
                            this.match(JavaScriptParser.Assign);
                            this.state = 284;
                            this.singleExpression(0);
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
    JavaScriptParser.prototype.emptyStatement = function () {
        var _localctx = new EmptyStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, JavaScriptParser.RULE_emptyStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 287;
                this.match(JavaScriptParser.SemiColon);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.expressionStatement = function () {
        var _localctx = new ExpressionStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, JavaScriptParser.RULE_expressionStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 289;
                if (!(this.notOpenBraceAndNotFunction())) {
                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.notOpenBraceAndNotFunction()");
                }
                this.state = 290;
                this.expressionSequence();
                this.state = 291;
                this.eos();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.ifStatement = function () {
        var _localctx = new IfStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, JavaScriptParser.RULE_ifStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 293;
                this.match(JavaScriptParser.If);
                this.state = 294;
                this.match(JavaScriptParser.OpenParen);
                this.state = 295;
                this.expressionSequence();
                this.state = 296;
                this.match(JavaScriptParser.CloseParen);
                this.state = 297;
                this.statement();
                this.state = 300;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 20, this._ctx)) {
                    case 1:
                        {
                            this.state = 298;
                            this.match(JavaScriptParser.Else);
                            this.state = 299;
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
    JavaScriptParser.prototype.iterationStatement = function () {
        var _localctx = new IterationStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, JavaScriptParser.RULE_iterationStatement);
        var _la;
        try {
            this.state = 358;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                case 1:
                    _localctx = new DoStatementContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 302;
                        this.match(JavaScriptParser.Do);
                        this.state = 303;
                        this.statement();
                        this.state = 304;
                        this.match(JavaScriptParser.While);
                        this.state = 305;
                        this.match(JavaScriptParser.OpenParen);
                        this.state = 306;
                        this.expressionSequence();
                        this.state = 307;
                        this.match(JavaScriptParser.CloseParen);
                        this.state = 308;
                        this.eos();
                    }
                    break;
                case 2:
                    _localctx = new WhileStatementContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 310;
                        this.match(JavaScriptParser.While);
                        this.state = 311;
                        this.match(JavaScriptParser.OpenParen);
                        this.state = 312;
                        this.expressionSequence();
                        this.state = 313;
                        this.match(JavaScriptParser.CloseParen);
                        this.state = 314;
                        this.statement();
                    }
                    break;
                case 3:
                    _localctx = new ForStatementContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 316;
                        this.match(JavaScriptParser.For);
                        this.state = 317;
                        this.match(JavaScriptParser.OpenParen);
                        this.state = 320;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JavaScriptParser.RegularExpressionLiteral:
                            case JavaScriptParser.OpenBracket:
                            case JavaScriptParser.OpenParen:
                            case JavaScriptParser.OpenBrace:
                            case JavaScriptParser.PlusPlus:
                            case JavaScriptParser.MinusMinus:
                            case JavaScriptParser.Plus:
                            case JavaScriptParser.Minus:
                            case JavaScriptParser.BitNot:
                            case JavaScriptParser.Not:
                            case JavaScriptParser.NullLiteral:
                            case JavaScriptParser.BooleanLiteral:
                            case JavaScriptParser.DecimalLiteral:
                            case JavaScriptParser.HexIntegerLiteral:
                            case JavaScriptParser.OctalIntegerLiteral:
                            case JavaScriptParser.OctalIntegerLiteral2:
                            case JavaScriptParser.BinaryIntegerLiteral:
                            case JavaScriptParser.BigHexIntegerLiteral:
                            case JavaScriptParser.BigOctalIntegerLiteral:
                            case JavaScriptParser.BigBinaryIntegerLiteral:
                            case JavaScriptParser.BigDecimalIntegerLiteral:
                            case JavaScriptParser.Typeof:
                            case JavaScriptParser.New:
                            case JavaScriptParser.Void:
                            case JavaScriptParser.Function:
                            case JavaScriptParser.This:
                            case JavaScriptParser.Delete:
                            case JavaScriptParser.Class:
                            case JavaScriptParser.Super:
                            case JavaScriptParser.Import:
                            case JavaScriptParser.Async:
                            case JavaScriptParser.Await:
                            case JavaScriptParser.Yield:
                            case JavaScriptParser.Identifier:
                            case JavaScriptParser.StringLiteral:
                            case JavaScriptParser.TemplateStringLiteral:
                                {
                                    this.state = 318;
                                    this.expressionSequence();
                                }
                                break;
                            case JavaScriptParser.Var:
                            case JavaScriptParser.Const:
                            case JavaScriptParser.Let:
                                {
                                    this.state = 319;
                                    this.variableStatement();
                                }
                                break;
                            case JavaScriptParser.SemiColon:
                                break;
                            default:
                                break;
                        }
                        this.state = 322;
                        this.match(JavaScriptParser.SemiColon);
                        this.state = 324;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.RegularExpressionLiteral) | (1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenParen) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.PlusPlus) | (1 << JavaScriptParser.MinusMinus) | (1 << JavaScriptParser.Plus) | (1 << JavaScriptParser.Minus) | (1 << JavaScriptParser.BitNot) | (1 << JavaScriptParser.Not))) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (JavaScriptParser.NullLiteral - 59)) | (1 << (JavaScriptParser.BooleanLiteral - 59)) | (1 << (JavaScriptParser.DecimalLiteral - 59)) | (1 << (JavaScriptParser.HexIntegerLiteral - 59)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 59)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 59)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigHexIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigOctalIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigBinaryIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigDecimalIntegerLiteral - 59)) | (1 << (JavaScriptParser.Typeof - 59)) | (1 << (JavaScriptParser.New - 59)) | (1 << (JavaScriptParser.Void - 59)) | (1 << (JavaScriptParser.Function - 59)) | (1 << (JavaScriptParser.This - 59)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (JavaScriptParser.Delete - 93)) | (1 << (JavaScriptParser.Class - 93)) | (1 << (JavaScriptParser.Super - 93)) | (1 << (JavaScriptParser.Import - 93)) | (1 << (JavaScriptParser.Async - 93)) | (1 << (JavaScriptParser.Await - 93)) | (1 << (JavaScriptParser.Yield - 93)) | (1 << (JavaScriptParser.Identifier - 93)) | (1 << (JavaScriptParser.StringLiteral - 93)) | (1 << (JavaScriptParser.TemplateStringLiteral - 93)))) !== 0)) {
                            {
                                this.state = 323;
                                this.expressionSequence();
                            }
                        }
                        this.state = 326;
                        this.match(JavaScriptParser.SemiColon);
                        this.state = 328;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.RegularExpressionLiteral) | (1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenParen) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.PlusPlus) | (1 << JavaScriptParser.MinusMinus) | (1 << JavaScriptParser.Plus) | (1 << JavaScriptParser.Minus) | (1 << JavaScriptParser.BitNot) | (1 << JavaScriptParser.Not))) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (JavaScriptParser.NullLiteral - 59)) | (1 << (JavaScriptParser.BooleanLiteral - 59)) | (1 << (JavaScriptParser.DecimalLiteral - 59)) | (1 << (JavaScriptParser.HexIntegerLiteral - 59)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 59)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 59)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigHexIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigOctalIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigBinaryIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigDecimalIntegerLiteral - 59)) | (1 << (JavaScriptParser.Typeof - 59)) | (1 << (JavaScriptParser.New - 59)) | (1 << (JavaScriptParser.Void - 59)) | (1 << (JavaScriptParser.Function - 59)) | (1 << (JavaScriptParser.This - 59)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (JavaScriptParser.Delete - 93)) | (1 << (JavaScriptParser.Class - 93)) | (1 << (JavaScriptParser.Super - 93)) | (1 << (JavaScriptParser.Import - 93)) | (1 << (JavaScriptParser.Async - 93)) | (1 << (JavaScriptParser.Await - 93)) | (1 << (JavaScriptParser.Yield - 93)) | (1 << (JavaScriptParser.Identifier - 93)) | (1 << (JavaScriptParser.StringLiteral - 93)) | (1 << (JavaScriptParser.TemplateStringLiteral - 93)))) !== 0)) {
                            {
                                this.state = 327;
                                this.expressionSequence();
                            }
                        }
                        this.state = 330;
                        this.match(JavaScriptParser.CloseParen);
                        this.state = 331;
                        this.statement();
                    }
                    break;
                case 4:
                    _localctx = new ForInStatementContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 332;
                        this.match(JavaScriptParser.For);
                        this.state = 333;
                        this.match(JavaScriptParser.OpenParen);
                        this.state = 336;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JavaScriptParser.RegularExpressionLiteral:
                            case JavaScriptParser.OpenBracket:
                            case JavaScriptParser.OpenParen:
                            case JavaScriptParser.OpenBrace:
                            case JavaScriptParser.PlusPlus:
                            case JavaScriptParser.MinusMinus:
                            case JavaScriptParser.Plus:
                            case JavaScriptParser.Minus:
                            case JavaScriptParser.BitNot:
                            case JavaScriptParser.Not:
                            case JavaScriptParser.NullLiteral:
                            case JavaScriptParser.BooleanLiteral:
                            case JavaScriptParser.DecimalLiteral:
                            case JavaScriptParser.HexIntegerLiteral:
                            case JavaScriptParser.OctalIntegerLiteral:
                            case JavaScriptParser.OctalIntegerLiteral2:
                            case JavaScriptParser.BinaryIntegerLiteral:
                            case JavaScriptParser.BigHexIntegerLiteral:
                            case JavaScriptParser.BigOctalIntegerLiteral:
                            case JavaScriptParser.BigBinaryIntegerLiteral:
                            case JavaScriptParser.BigDecimalIntegerLiteral:
                            case JavaScriptParser.Typeof:
                            case JavaScriptParser.New:
                            case JavaScriptParser.Void:
                            case JavaScriptParser.Function:
                            case JavaScriptParser.This:
                            case JavaScriptParser.Delete:
                            case JavaScriptParser.Class:
                            case JavaScriptParser.Super:
                            case JavaScriptParser.Import:
                            case JavaScriptParser.Async:
                            case JavaScriptParser.Await:
                            case JavaScriptParser.Yield:
                            case JavaScriptParser.Identifier:
                            case JavaScriptParser.StringLiteral:
                            case JavaScriptParser.TemplateStringLiteral:
                                {
                                    this.state = 334;
                                    this.singleExpression(0);
                                }
                                break;
                            case JavaScriptParser.Var:
                            case JavaScriptParser.Const:
                            case JavaScriptParser.Let:
                                {
                                    this.state = 335;
                                    this.variableStatement();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 338;
                        this.match(JavaScriptParser.In);
                        this.state = 339;
                        this.expressionSequence();
                        this.state = 340;
                        this.match(JavaScriptParser.CloseParen);
                        this.state = 341;
                        this.statement();
                    }
                    break;
                case 5:
                    _localctx = new ForOfStatementContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 343;
                        this.match(JavaScriptParser.For);
                        this.state = 345;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaScriptParser.Await) {
                            {
                                this.state = 344;
                                this.match(JavaScriptParser.Await);
                            }
                        }
                        this.state = 347;
                        this.match(JavaScriptParser.OpenParen);
                        this.state = 350;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JavaScriptParser.RegularExpressionLiteral:
                            case JavaScriptParser.OpenBracket:
                            case JavaScriptParser.OpenParen:
                            case JavaScriptParser.OpenBrace:
                            case JavaScriptParser.PlusPlus:
                            case JavaScriptParser.MinusMinus:
                            case JavaScriptParser.Plus:
                            case JavaScriptParser.Minus:
                            case JavaScriptParser.BitNot:
                            case JavaScriptParser.Not:
                            case JavaScriptParser.NullLiteral:
                            case JavaScriptParser.BooleanLiteral:
                            case JavaScriptParser.DecimalLiteral:
                            case JavaScriptParser.HexIntegerLiteral:
                            case JavaScriptParser.OctalIntegerLiteral:
                            case JavaScriptParser.OctalIntegerLiteral2:
                            case JavaScriptParser.BinaryIntegerLiteral:
                            case JavaScriptParser.BigHexIntegerLiteral:
                            case JavaScriptParser.BigOctalIntegerLiteral:
                            case JavaScriptParser.BigBinaryIntegerLiteral:
                            case JavaScriptParser.BigDecimalIntegerLiteral:
                            case JavaScriptParser.Typeof:
                            case JavaScriptParser.New:
                            case JavaScriptParser.Void:
                            case JavaScriptParser.Function:
                            case JavaScriptParser.This:
                            case JavaScriptParser.Delete:
                            case JavaScriptParser.Class:
                            case JavaScriptParser.Super:
                            case JavaScriptParser.Import:
                            case JavaScriptParser.Async:
                            case JavaScriptParser.Await:
                            case JavaScriptParser.Yield:
                            case JavaScriptParser.Identifier:
                            case JavaScriptParser.StringLiteral:
                            case JavaScriptParser.TemplateStringLiteral:
                                {
                                    this.state = 348;
                                    this.singleExpression(0);
                                }
                                break;
                            case JavaScriptParser.Var:
                            case JavaScriptParser.Const:
                            case JavaScriptParser.Let:
                                {
                                    this.state = 349;
                                    this.variableStatement();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 352;
                        this.match(JavaScriptParser.Identifier);
                        this.state = 353;
                        if (!(this.p("of"))) {
                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.p(\"of\")");
                        }
                        this.state = 354;
                        this.expressionSequence();
                        this.state = 355;
                        this.match(JavaScriptParser.CloseParen);
                        this.state = 356;
                        this.statement();
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
    JavaScriptParser.prototype.varModifier = function () {
        var _localctx = new VarModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, JavaScriptParser.RULE_varModifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 360;
                _la = this._input.LA(1);
                if (!(((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (JavaScriptParser.Var - 77)) | (1 << (JavaScriptParser.Const - 77)) | (1 << (JavaScriptParser.Let - 77)))) !== 0))) {
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
    JavaScriptParser.prototype.continueStatement = function () {
        var _localctx = new ContinueStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, JavaScriptParser.RULE_continueStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 362;
                this.match(JavaScriptParser.Continue);
                this.state = 365;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                    case 1:
                        {
                            this.state = 363;
                            if (!(this.notLineTerminator())) {
                                throw new FailedPredicateException_1.FailedPredicateException(this, "this.notLineTerminator()");
                            }
                            this.state = 364;
                            this.match(JavaScriptParser.Identifier);
                        }
                        break;
                }
                this.state = 367;
                this.eos();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.breakStatement = function () {
        var _localctx = new BreakStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, JavaScriptParser.RULE_breakStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 369;
                this.match(JavaScriptParser.Break);
                this.state = 372;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
                    case 1:
                        {
                            this.state = 370;
                            if (!(this.notLineTerminator())) {
                                throw new FailedPredicateException_1.FailedPredicateException(this, "this.notLineTerminator()");
                            }
                            this.state = 371;
                            this.match(JavaScriptParser.Identifier);
                        }
                        break;
                }
                this.state = 374;
                this.eos();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.returnStatement = function () {
        var _localctx = new ReturnStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, JavaScriptParser.RULE_returnStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 376;
                this.match(JavaScriptParser.Return);
                this.state = 379;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
                    case 1:
                        {
                            this.state = 377;
                            if (!(this.notLineTerminator())) {
                                throw new FailedPredicateException_1.FailedPredicateException(this, "this.notLineTerminator()");
                            }
                            this.state = 378;
                            this.expressionSequence();
                        }
                        break;
                }
                this.state = 381;
                this.eos();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.yieldStatement = function () {
        var _localctx = new YieldStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, JavaScriptParser.RULE_yieldStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 383;
                this.match(JavaScriptParser.Yield);
                this.state = 386;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 31, this._ctx)) {
                    case 1:
                        {
                            this.state = 384;
                            if (!(this.notLineTerminator())) {
                                throw new FailedPredicateException_1.FailedPredicateException(this, "this.notLineTerminator()");
                            }
                            this.state = 385;
                            this.expressionSequence();
                        }
                        break;
                }
                this.state = 388;
                this.eos();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.withStatement = function () {
        var _localctx = new WithStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, JavaScriptParser.RULE_withStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 390;
                this.match(JavaScriptParser.With);
                this.state = 391;
                this.match(JavaScriptParser.OpenParen);
                this.state = 392;
                this.expressionSequence();
                this.state = 393;
                this.match(JavaScriptParser.CloseParen);
                this.state = 394;
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
    JavaScriptParser.prototype.switchStatement = function () {
        var _localctx = new SwitchStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, JavaScriptParser.RULE_switchStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 396;
                this.match(JavaScriptParser.Switch);
                this.state = 397;
                this.match(JavaScriptParser.OpenParen);
                this.state = 398;
                this.expressionSequence();
                this.state = 399;
                this.match(JavaScriptParser.CloseParen);
                this.state = 400;
                this.caseBlock();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.caseBlock = function () {
        var _localctx = new CaseBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, JavaScriptParser.RULE_caseBlock);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 402;
                this.match(JavaScriptParser.OpenBrace);
                this.state = 404;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaScriptParser.Case) {
                    {
                        this.state = 403;
                        this.caseClauses();
                    }
                }
                this.state = 410;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaScriptParser.Default) {
                    {
                        this.state = 406;
                        this.defaultClause();
                        this.state = 408;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaScriptParser.Case) {
                            {
                                this.state = 407;
                                this.caseClauses();
                            }
                        }
                    }
                }
                this.state = 412;
                this.match(JavaScriptParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.caseClauses = function () {
        var _localctx = new CaseClausesContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, JavaScriptParser.RULE_caseClauses);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 415;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 414;
                            this.caseClause();
                        }
                    }
                    this.state = 417;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === JavaScriptParser.Case);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.caseClause = function () {
        var _localctx = new CaseClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, JavaScriptParser.RULE_caseClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 419;
                this.match(JavaScriptParser.Case);
                this.state = 420;
                this.expressionSequence();
                this.state = 421;
                this.match(JavaScriptParser.Colon);
                this.state = 423;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
                    case 1:
                        {
                            this.state = 422;
                            this.statementList();
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
    JavaScriptParser.prototype.defaultClause = function () {
        var _localctx = new DefaultClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, JavaScriptParser.RULE_defaultClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 425;
                this.match(JavaScriptParser.Default);
                this.state = 426;
                this.match(JavaScriptParser.Colon);
                this.state = 428;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
                    case 1:
                        {
                            this.state = 427;
                            this.statementList();
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
    JavaScriptParser.prototype.labelledStatement = function () {
        var _localctx = new LabelledStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, JavaScriptParser.RULE_labelledStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 430;
                this.match(JavaScriptParser.Identifier);
                this.state = 431;
                this.match(JavaScriptParser.Colon);
                this.state = 432;
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
    JavaScriptParser.prototype.throwStatement = function () {
        var _localctx = new ThrowStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, JavaScriptParser.RULE_throwStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 434;
                this.match(JavaScriptParser.Throw);
                this.state = 435;
                if (!(this.notLineTerminator())) {
                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.notLineTerminator()");
                }
                this.state = 436;
                this.expressionSequence();
                this.state = 437;
                this.eos();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.tryStatement = function () {
        var _localctx = new TryStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, JavaScriptParser.RULE_tryStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 439;
                this.match(JavaScriptParser.Try);
                this.state = 440;
                this.block();
                this.state = 446;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case JavaScriptParser.Catch:
                        {
                            this.state = 441;
                            this.catchProduction();
                            this.state = 443;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 442;
                                        this.finallyProduction();
                                    }
                                    break;
                            }
                        }
                        break;
                    case JavaScriptParser.Finally:
                        {
                            this.state = 445;
                            this.finallyProduction();
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
    JavaScriptParser.prototype.catchProduction = function () {
        var _localctx = new CatchProductionContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, JavaScriptParser.RULE_catchProduction);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 448;
                this.match(JavaScriptParser.Catch);
                this.state = 454;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaScriptParser.OpenParen) {
                    {
                        this.state = 449;
                        this.match(JavaScriptParser.OpenParen);
                        this.state = 451;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaScriptParser.OpenBracket || _la === JavaScriptParser.OpenBrace || _la === JavaScriptParser.Identifier) {
                            {
                                this.state = 450;
                                this.assignable();
                            }
                        }
                        this.state = 453;
                        this.match(JavaScriptParser.CloseParen);
                    }
                }
                this.state = 456;
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
    JavaScriptParser.prototype.finallyProduction = function () {
        var _localctx = new FinallyProductionContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, JavaScriptParser.RULE_finallyProduction);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 458;
                this.match(JavaScriptParser.Finally);
                this.state = 459;
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
    JavaScriptParser.prototype.debuggerStatement = function () {
        var _localctx = new DebuggerStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, JavaScriptParser.RULE_debuggerStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 461;
                this.match(JavaScriptParser.Debugger);
                this.state = 462;
                this.eos();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.functionDeclaration = function () {
        var _localctx = new FunctionDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, JavaScriptParser.RULE_functionDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 465;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaScriptParser.Async) {
                    {
                        this.state = 464;
                        this.match(JavaScriptParser.Async);
                    }
                }
                this.state = 467;
                this.match(JavaScriptParser.Function);
                this.state = 469;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaScriptParser.Multiply) {
                    {
                        this.state = 468;
                        this.match(JavaScriptParser.Multiply);
                    }
                }
                this.state = 471;
                this.match(JavaScriptParser.Identifier);
                this.state = 472;
                this.match(JavaScriptParser.OpenParen);
                this.state = 474;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || _la === JavaScriptParser.Identifier) {
                    {
                        this.state = 473;
                        this.formalParameterList();
                    }
                }
                this.state = 476;
                this.match(JavaScriptParser.CloseParen);
                this.state = 477;
                this.match(JavaScriptParser.OpenBrace);
                this.state = 478;
                this.functionBody();
                this.state = 479;
                this.match(JavaScriptParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.classDeclaration = function () {
        var _localctx = new ClassDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, JavaScriptParser.RULE_classDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 481;
                this.match(JavaScriptParser.Class);
                this.state = 482;
                this.match(JavaScriptParser.Identifier);
                this.state = 483;
                this.classTail();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.classTail = function () {
        var _localctx = new ClassTailContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, JavaScriptParser.RULE_classTail);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 487;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaScriptParser.Extends) {
                    {
                        this.state = 485;
                        this.match(JavaScriptParser.Extends);
                        this.state = 486;
                        this.singleExpression(0);
                    }
                }
                this.state = 489;
                this.match(JavaScriptParser.OpenBrace);
                this.state = 493;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 490;
                                this.classElement();
                            }
                        }
                    }
                    this.state = 495;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
                }
                this.state = 496;
                this.match(JavaScriptParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.classElement = function () {
        var _localctx = new ClassElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, JavaScriptParser.RULE_classElement);
        var _la;
        try {
            var _alt = void 0;
            this.state = 516;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 504;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    this.state = 502;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 47, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 498;
                                                this.match(JavaScriptParser.Static);
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 499;
                                                if (!(this.n("static"))) {
                                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.n(\"static\")");
                                                }
                                                this.state = 500;
                                                this.match(JavaScriptParser.Identifier);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 501;
                                                this.match(JavaScriptParser.Async);
                                            }
                                            break;
                                    }
                                }
                            }
                            this.state = 506;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
                        }
                        this.state = 507;
                        this.methodDefinition();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 508;
                        this.emptyStatement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 510;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaScriptParser.Hashtag) {
                            {
                                this.state = 509;
                                this.match(JavaScriptParser.Hashtag);
                            }
                        }
                        this.state = 512;
                        this.propertyName();
                        this.state = 513;
                        this.match(JavaScriptParser.Assign);
                        this.state = 514;
                        this.singleExpression(0);
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
    JavaScriptParser.prototype.methodDefinition = function () {
        var _localctx = new MethodDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, JavaScriptParser.RULE_methodDefinition);
        var _la;
        try {
            this.state = 563;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 59, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 519;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaScriptParser.Multiply) {
                            {
                                this.state = 518;
                                this.match(JavaScriptParser.Multiply);
                            }
                        }
                        this.state = 522;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaScriptParser.Hashtag) {
                            {
                                this.state = 521;
                                this.match(JavaScriptParser.Hashtag);
                            }
                        }
                        this.state = 524;
                        this.propertyName();
                        this.state = 525;
                        this.match(JavaScriptParser.OpenParen);
                        this.state = 527;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || _la === JavaScriptParser.Identifier) {
                            {
                                this.state = 526;
                                this.formalParameterList();
                            }
                        }
                        this.state = 529;
                        this.match(JavaScriptParser.CloseParen);
                        this.state = 530;
                        this.match(JavaScriptParser.OpenBrace);
                        this.state = 531;
                        this.functionBody();
                        this.state = 532;
                        this.match(JavaScriptParser.CloseBrace);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 535;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaScriptParser.Multiply) {
                            {
                                this.state = 534;
                                this.match(JavaScriptParser.Multiply);
                            }
                        }
                        this.state = 538;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaScriptParser.Hashtag) {
                            {
                                this.state = 537;
                                this.match(JavaScriptParser.Hashtag);
                            }
                        }
                        this.state = 540;
                        this.getter();
                        this.state = 541;
                        this.match(JavaScriptParser.OpenParen);
                        this.state = 542;
                        this.match(JavaScriptParser.CloseParen);
                        this.state = 543;
                        this.match(JavaScriptParser.OpenBrace);
                        this.state = 544;
                        this.functionBody();
                        this.state = 545;
                        this.match(JavaScriptParser.CloseBrace);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 548;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaScriptParser.Multiply) {
                            {
                                this.state = 547;
                                this.match(JavaScriptParser.Multiply);
                            }
                        }
                        this.state = 551;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaScriptParser.Hashtag) {
                            {
                                this.state = 550;
                                this.match(JavaScriptParser.Hashtag);
                            }
                        }
                        this.state = 553;
                        this.setter();
                        this.state = 554;
                        this.match(JavaScriptParser.OpenParen);
                        this.state = 556;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || _la === JavaScriptParser.Identifier) {
                            {
                                this.state = 555;
                                this.formalParameterList();
                            }
                        }
                        this.state = 558;
                        this.match(JavaScriptParser.CloseParen);
                        this.state = 559;
                        this.match(JavaScriptParser.OpenBrace);
                        this.state = 560;
                        this.functionBody();
                        this.state = 561;
                        this.match(JavaScriptParser.CloseBrace);
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
    JavaScriptParser.prototype.formalParameterList = function () {
        var _localctx = new FormalParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, JavaScriptParser.RULE_formalParameterList);
        var _la;
        try {
            var _alt = void 0;
            this.state = 578;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaScriptParser.OpenBracket:
                case JavaScriptParser.OpenBrace:
                case JavaScriptParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 565;
                        this.formalParameterArg();
                        this.state = 570;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 566;
                                        this.match(JavaScriptParser.Comma);
                                        this.state = 567;
                                        this.formalParameterArg();
                                    }
                                }
                            }
                            this.state = 572;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
                        }
                        this.state = 575;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaScriptParser.Comma) {
                            {
                                this.state = 573;
                                this.match(JavaScriptParser.Comma);
                                this.state = 574;
                                this.lastFormalParameterArg();
                            }
                        }
                    }
                    break;
                case JavaScriptParser.Ellipsis:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 577;
                        this.lastFormalParameterArg();
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
    JavaScriptParser.prototype.formalParameterArg = function () {
        var _localctx = new FormalParameterArgContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, JavaScriptParser.RULE_formalParameterArg);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 580;
                this.assignable();
                this.state = 583;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaScriptParser.Assign) {
                    {
                        this.state = 581;
                        this.match(JavaScriptParser.Assign);
                        this.state = 582;
                        this.singleExpression(0);
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
    JavaScriptParser.prototype.lastFormalParameterArg = function () {
        var _localctx = new LastFormalParameterArgContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, JavaScriptParser.RULE_lastFormalParameterArg);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 585;
                this.match(JavaScriptParser.Ellipsis);
                this.state = 586;
                this.singleExpression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.functionBody = function () {
        var _localctx = new FunctionBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, JavaScriptParser.RULE_functionBody);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 589;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 64, this._ctx)) {
                    case 1:
                        {
                            this.state = 588;
                            this.sourceElements();
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
    JavaScriptParser.prototype.sourceElements = function () {
        var _localctx = new SourceElementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, JavaScriptParser.RULE_sourceElements);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 592;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 591;
                                    this.sourceElement();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 594;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.arrayLiteral = function () {
        var _localctx = new ArrayLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, JavaScriptParser.RULE_arrayLiteral);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 596;
                    this.match(JavaScriptParser.OpenBracket);
                    this.state = 597;
                    this.elementList();
                    this.state = 598;
                    this.match(JavaScriptParser.CloseBracket);
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
    JavaScriptParser.prototype.elementList = function () {
        var _localctx = new ElementListContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, JavaScriptParser.RULE_elementList);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 603;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 600;
                                this.match(JavaScriptParser.Comma);
                            }
                        }
                    }
                    this.state = 605;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
                }
                this.state = 607;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.RegularExpressionLiteral) | (1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenParen) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis) | (1 << JavaScriptParser.PlusPlus) | (1 << JavaScriptParser.MinusMinus) | (1 << JavaScriptParser.Plus) | (1 << JavaScriptParser.Minus) | (1 << JavaScriptParser.BitNot) | (1 << JavaScriptParser.Not))) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (JavaScriptParser.NullLiteral - 59)) | (1 << (JavaScriptParser.BooleanLiteral - 59)) | (1 << (JavaScriptParser.DecimalLiteral - 59)) | (1 << (JavaScriptParser.HexIntegerLiteral - 59)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 59)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 59)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigHexIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigOctalIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigBinaryIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigDecimalIntegerLiteral - 59)) | (1 << (JavaScriptParser.Typeof - 59)) | (1 << (JavaScriptParser.New - 59)) | (1 << (JavaScriptParser.Void - 59)) | (1 << (JavaScriptParser.Function - 59)) | (1 << (JavaScriptParser.This - 59)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (JavaScriptParser.Delete - 93)) | (1 << (JavaScriptParser.Class - 93)) | (1 << (JavaScriptParser.Super - 93)) | (1 << (JavaScriptParser.Import - 93)) | (1 << (JavaScriptParser.Async - 93)) | (1 << (JavaScriptParser.Await - 93)) | (1 << (JavaScriptParser.Yield - 93)) | (1 << (JavaScriptParser.Identifier - 93)) | (1 << (JavaScriptParser.StringLiteral - 93)) | (1 << (JavaScriptParser.TemplateStringLiteral - 93)))) !== 0)) {
                    {
                        this.state = 606;
                        this.arrayElement();
                    }
                }
                this.state = 617;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 610;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                do {
                                    {
                                        {
                                            this.state = 609;
                                            this.match(JavaScriptParser.Comma);
                                        }
                                    }
                                    this.state = 612;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                } while (_la === JavaScriptParser.Comma);
                                this.state = 614;
                                this.arrayElement();
                            }
                        }
                    }
                    this.state = 619;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
                }
                this.state = 623;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaScriptParser.Comma) {
                    {
                        {
                            this.state = 620;
                            this.match(JavaScriptParser.Comma);
                        }
                    }
                    this.state = 625;
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
    JavaScriptParser.prototype.arrayElement = function () {
        var _localctx = new ArrayElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, JavaScriptParser.RULE_arrayElement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 627;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaScriptParser.Ellipsis) {
                    {
                        this.state = 626;
                        this.match(JavaScriptParser.Ellipsis);
                    }
                }
                this.state = 629;
                this.singleExpression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.objectLiteral = function () {
        var _localctx = new ObjectLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, JavaScriptParser.RULE_objectLiteral);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 631;
                this.match(JavaScriptParser.OpenBrace);
                this.state = 640;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.RegularExpressionLiteral) | (1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenParen) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis) | (1 << JavaScriptParser.PlusPlus) | (1 << JavaScriptParser.MinusMinus) | (1 << JavaScriptParser.Plus) | (1 << JavaScriptParser.Minus) | (1 << JavaScriptParser.BitNot) | (1 << JavaScriptParser.Not) | (1 << JavaScriptParser.Multiply))) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (JavaScriptParser.NullLiteral - 59)) | (1 << (JavaScriptParser.BooleanLiteral - 59)) | (1 << (JavaScriptParser.DecimalLiteral - 59)) | (1 << (JavaScriptParser.HexIntegerLiteral - 59)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 59)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 59)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigHexIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigOctalIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigBinaryIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigDecimalIntegerLiteral - 59)) | (1 << (JavaScriptParser.Break - 59)) | (1 << (JavaScriptParser.Do - 59)) | (1 << (JavaScriptParser.Instanceof - 59)) | (1 << (JavaScriptParser.Typeof - 59)) | (1 << (JavaScriptParser.Case - 59)) | (1 << (JavaScriptParser.Else - 59)) | (1 << (JavaScriptParser.New - 59)) | (1 << (JavaScriptParser.Var - 59)) | (1 << (JavaScriptParser.Catch - 59)) | (1 << (JavaScriptParser.Finally - 59)) | (1 << (JavaScriptParser.Return - 59)) | (1 << (JavaScriptParser.Void - 59)) | (1 << (JavaScriptParser.Continue - 59)) | (1 << (JavaScriptParser.For - 59)) | (1 << (JavaScriptParser.Switch - 59)) | (1 << (JavaScriptParser.While - 59)) | (1 << (JavaScriptParser.Debugger - 59)) | (1 << (JavaScriptParser.Function - 59)) | (1 << (JavaScriptParser.This - 59)) | (1 << (JavaScriptParser.With - 59)) | (1 << (JavaScriptParser.Default - 59)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (JavaScriptParser.If - 91)) | (1 << (JavaScriptParser.Throw - 91)) | (1 << (JavaScriptParser.Delete - 91)) | (1 << (JavaScriptParser.In - 91)) | (1 << (JavaScriptParser.Try - 91)) | (1 << (JavaScriptParser.As - 91)) | (1 << (JavaScriptParser.From - 91)) | (1 << (JavaScriptParser.Class - 91)) | (1 << (JavaScriptParser.Enum - 91)) | (1 << (JavaScriptParser.Extends - 91)) | (1 << (JavaScriptParser.Super - 91)) | (1 << (JavaScriptParser.Const - 91)) | (1 << (JavaScriptParser.Export - 91)) | (1 << (JavaScriptParser.Import - 91)) | (1 << (JavaScriptParser.Async - 91)) | (1 << (JavaScriptParser.Await - 91)) | (1 << (JavaScriptParser.Implements - 91)) | (1 << (JavaScriptParser.Let - 91)) | (1 << (JavaScriptParser.Private - 91)) | (1 << (JavaScriptParser.Public - 91)) | (1 << (JavaScriptParser.Interface - 91)) | (1 << (JavaScriptParser.Package - 91)) | (1 << (JavaScriptParser.Protected - 91)) | (1 << (JavaScriptParser.Static - 91)) | (1 << (JavaScriptParser.Yield - 91)) | (1 << (JavaScriptParser.Identifier - 91)) | (1 << (JavaScriptParser.StringLiteral - 91)) | (1 << (JavaScriptParser.TemplateStringLiteral - 91)))) !== 0)) {
                    {
                        this.state = 632;
                        this.propertyAssignment();
                        this.state = 637;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 633;
                                        this.match(JavaScriptParser.Comma);
                                        this.state = 634;
                                        this.propertyAssignment();
                                    }
                                }
                            }
                            this.state = 639;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
                        }
                    }
                }
                this.state = 643;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaScriptParser.Comma) {
                    {
                        this.state = 642;
                        this.match(JavaScriptParser.Comma);
                    }
                }
                this.state = 645;
                this.match(JavaScriptParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.propertyAssignment = function () {
        var _localctx = new PropertyAssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, JavaScriptParser.RULE_propertyAssignment);
        var _la;
        try {
            this.state = 692;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 79, this._ctx)) {
                case 1:
                    _localctx = new PropertyExpressionAssignmentContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 647;
                        this.propertyName();
                        this.state = 648;
                        this.match(JavaScriptParser.Colon);
                        this.state = 649;
                        this.singleExpression(0);
                    }
                    break;
                case 2:
                    _localctx = new ComputedPropertyExpressionAssignmentContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 651;
                        this.match(JavaScriptParser.OpenBracket);
                        this.state = 652;
                        this.singleExpression(0);
                        this.state = 653;
                        this.match(JavaScriptParser.CloseBracket);
                        this.state = 654;
                        this.match(JavaScriptParser.Colon);
                        this.state = 655;
                        this.singleExpression(0);
                    }
                    break;
                case 3:
                    _localctx = new FunctionPropertyContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 658;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 75, this._ctx)) {
                            case 1:
                                {
                                    this.state = 657;
                                    this.match(JavaScriptParser.Async);
                                }
                                break;
                        }
                        this.state = 661;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaScriptParser.Multiply) {
                            {
                                this.state = 660;
                                this.match(JavaScriptParser.Multiply);
                            }
                        }
                        this.state = 663;
                        this.propertyName();
                        this.state = 664;
                        this.match(JavaScriptParser.OpenParen);
                        this.state = 666;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || _la === JavaScriptParser.Identifier) {
                            {
                                this.state = 665;
                                this.formalParameterList();
                            }
                        }
                        this.state = 668;
                        this.match(JavaScriptParser.CloseParen);
                        this.state = 669;
                        this.match(JavaScriptParser.OpenBrace);
                        this.state = 670;
                        this.functionBody();
                        this.state = 671;
                        this.match(JavaScriptParser.CloseBrace);
                    }
                    break;
                case 4:
                    _localctx = new PropertyGetterContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 673;
                        this.getter();
                        this.state = 674;
                        this.match(JavaScriptParser.OpenParen);
                        this.state = 675;
                        this.match(JavaScriptParser.CloseParen);
                        this.state = 676;
                        this.match(JavaScriptParser.OpenBrace);
                        this.state = 677;
                        this.functionBody();
                        this.state = 678;
                        this.match(JavaScriptParser.CloseBrace);
                    }
                    break;
                case 5:
                    _localctx = new PropertySetterContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 680;
                        this.setter();
                        this.state = 681;
                        this.match(JavaScriptParser.OpenParen);
                        this.state = 682;
                        this.formalParameterArg();
                        this.state = 683;
                        this.match(JavaScriptParser.CloseParen);
                        this.state = 684;
                        this.match(JavaScriptParser.OpenBrace);
                        this.state = 685;
                        this.functionBody();
                        this.state = 686;
                        this.match(JavaScriptParser.CloseBrace);
                    }
                    break;
                case 6:
                    _localctx = new PropertyShorthandContext(_localctx);
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 689;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaScriptParser.Ellipsis) {
                            {
                                this.state = 688;
                                this.match(JavaScriptParser.Ellipsis);
                            }
                        }
                        this.state = 691;
                        this.singleExpression(0);
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
    JavaScriptParser.prototype.propertyName = function () {
        var _localctx = new PropertyNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, JavaScriptParser.RULE_propertyName);
        try {
            this.state = 701;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaScriptParser.NullLiteral:
                case JavaScriptParser.BooleanLiteral:
                case JavaScriptParser.Break:
                case JavaScriptParser.Do:
                case JavaScriptParser.Instanceof:
                case JavaScriptParser.Typeof:
                case JavaScriptParser.Case:
                case JavaScriptParser.Else:
                case JavaScriptParser.New:
                case JavaScriptParser.Var:
                case JavaScriptParser.Catch:
                case JavaScriptParser.Finally:
                case JavaScriptParser.Return:
                case JavaScriptParser.Void:
                case JavaScriptParser.Continue:
                case JavaScriptParser.For:
                case JavaScriptParser.Switch:
                case JavaScriptParser.While:
                case JavaScriptParser.Debugger:
                case JavaScriptParser.Function:
                case JavaScriptParser.This:
                case JavaScriptParser.With:
                case JavaScriptParser.Default:
                case JavaScriptParser.If:
                case JavaScriptParser.Throw:
                case JavaScriptParser.Delete:
                case JavaScriptParser.In:
                case JavaScriptParser.Try:
                case JavaScriptParser.As:
                case JavaScriptParser.From:
                case JavaScriptParser.Class:
                case JavaScriptParser.Enum:
                case JavaScriptParser.Extends:
                case JavaScriptParser.Super:
                case JavaScriptParser.Const:
                case JavaScriptParser.Export:
                case JavaScriptParser.Import:
                case JavaScriptParser.Async:
                case JavaScriptParser.Await:
                case JavaScriptParser.Implements:
                case JavaScriptParser.Let:
                case JavaScriptParser.Private:
                case JavaScriptParser.Public:
                case JavaScriptParser.Interface:
                case JavaScriptParser.Package:
                case JavaScriptParser.Protected:
                case JavaScriptParser.Static:
                case JavaScriptParser.Yield:
                case JavaScriptParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 694;
                        this.identifierName();
                    }
                    break;
                case JavaScriptParser.StringLiteral:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 695;
                        this.match(JavaScriptParser.StringLiteral);
                    }
                    break;
                case JavaScriptParser.DecimalLiteral:
                case JavaScriptParser.HexIntegerLiteral:
                case JavaScriptParser.OctalIntegerLiteral:
                case JavaScriptParser.OctalIntegerLiteral2:
                case JavaScriptParser.BinaryIntegerLiteral:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 696;
                        this.numericLiteral();
                    }
                    break;
                case JavaScriptParser.OpenBracket:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 697;
                        this.match(JavaScriptParser.OpenBracket);
                        this.state = 698;
                        this.singleExpression(0);
                        this.state = 699;
                        this.match(JavaScriptParser.CloseBracket);
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
    JavaScriptParser.prototype.arguments = function () {
        var _localctx = new ArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, JavaScriptParser.RULE_arguments);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 703;
                this.match(JavaScriptParser.OpenParen);
                this.state = 715;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.RegularExpressionLiteral) | (1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenParen) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis) | (1 << JavaScriptParser.PlusPlus) | (1 << JavaScriptParser.MinusMinus) | (1 << JavaScriptParser.Plus) | (1 << JavaScriptParser.Minus) | (1 << JavaScriptParser.BitNot) | (1 << JavaScriptParser.Not))) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (JavaScriptParser.NullLiteral - 59)) | (1 << (JavaScriptParser.BooleanLiteral - 59)) | (1 << (JavaScriptParser.DecimalLiteral - 59)) | (1 << (JavaScriptParser.HexIntegerLiteral - 59)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 59)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 59)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigHexIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigOctalIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigBinaryIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigDecimalIntegerLiteral - 59)) | (1 << (JavaScriptParser.Typeof - 59)) | (1 << (JavaScriptParser.New - 59)) | (1 << (JavaScriptParser.Void - 59)) | (1 << (JavaScriptParser.Function - 59)) | (1 << (JavaScriptParser.This - 59)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (JavaScriptParser.Delete - 93)) | (1 << (JavaScriptParser.Class - 93)) | (1 << (JavaScriptParser.Super - 93)) | (1 << (JavaScriptParser.Import - 93)) | (1 << (JavaScriptParser.Async - 93)) | (1 << (JavaScriptParser.Await - 93)) | (1 << (JavaScriptParser.Yield - 93)) | (1 << (JavaScriptParser.Identifier - 93)) | (1 << (JavaScriptParser.StringLiteral - 93)) | (1 << (JavaScriptParser.TemplateStringLiteral - 93)))) !== 0)) {
                    {
                        this.state = 704;
                        this.argument();
                        this.state = 709;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 705;
                                        this.match(JavaScriptParser.Comma);
                                        this.state = 706;
                                        this.argument();
                                    }
                                }
                            }
                            this.state = 711;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
                        }
                        this.state = 713;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaScriptParser.Comma) {
                            {
                                this.state = 712;
                                this.match(JavaScriptParser.Comma);
                            }
                        }
                    }
                }
                this.state = 717;
                this.match(JavaScriptParser.CloseParen);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.argument = function () {
        var _localctx = new ArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, JavaScriptParser.RULE_argument);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 720;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaScriptParser.Ellipsis) {
                    {
                        this.state = 719;
                        this.match(JavaScriptParser.Ellipsis);
                    }
                }
                this.state = 724;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 85, this._ctx)) {
                    case 1:
                        {
                            this.state = 722;
                            this.singleExpression(0);
                        }
                        break;
                    case 2:
                        {
                            this.state = 723;
                            this.match(JavaScriptParser.Identifier);
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
    JavaScriptParser.prototype.expressionSequence = function () {
        var _localctx = new ExpressionSequenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, JavaScriptParser.RULE_expressionSequence);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 726;
                this.singleExpression(0);
                this.state = 731;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 727;
                                this.match(JavaScriptParser.Comma);
                                this.state = 728;
                                this.singleExpression(0);
                            }
                        }
                    }
                    this.state = 733;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
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
    JavaScriptParser.prototype.singleExpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new SingleExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 116;
        this.enterRecursionRule(_localctx, 116, JavaScriptParser.RULE_singleExpression, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 785;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 89, this._ctx)) {
                    case 1:
                        {
                            _localctx = new FunctionExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 735;
                            this.anoymousFunction();
                        }
                        break;
                    case 2:
                        {
                            _localctx = new ClassExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 736;
                            this.match(JavaScriptParser.Class);
                            this.state = 738;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === JavaScriptParser.Identifier) {
                                {
                                    this.state = 737;
                                    this.match(JavaScriptParser.Identifier);
                                }
                            }
                            this.state = 740;
                            this.classTail();
                        }
                        break;
                    case 3:
                        {
                            _localctx = new NewExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 741;
                            this.match(JavaScriptParser.New);
                            this.state = 742;
                            this.singleExpression(0);
                            this.state = 744;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 88, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 743;
                                        this.arguments();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 4:
                        {
                            _localctx = new MetaExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 746;
                            this.match(JavaScriptParser.New);
                            this.state = 747;
                            this.match(JavaScriptParser.Dot);
                            this.state = 748;
                            this.match(JavaScriptParser.Identifier);
                        }
                        break;
                    case 5:
                        {
                            _localctx = new DeleteExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 749;
                            this.match(JavaScriptParser.Delete);
                            this.state = 750;
                            this.singleExpression(37);
                        }
                        break;
                    case 6:
                        {
                            _localctx = new VoidExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 751;
                            this.match(JavaScriptParser.Void);
                            this.state = 752;
                            this.singleExpression(36);
                        }
                        break;
                    case 7:
                        {
                            _localctx = new TypeofExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 753;
                            this.match(JavaScriptParser.Typeof);
                            this.state = 754;
                            this.singleExpression(35);
                        }
                        break;
                    case 8:
                        {
                            _localctx = new PreIncrementExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 755;
                            this.match(JavaScriptParser.PlusPlus);
                            this.state = 756;
                            this.singleExpression(34);
                        }
                        break;
                    case 9:
                        {
                            _localctx = new PreDecreaseExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 757;
                            this.match(JavaScriptParser.MinusMinus);
                            this.state = 758;
                            this.singleExpression(33);
                        }
                        break;
                    case 10:
                        {
                            _localctx = new UnaryPlusExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 759;
                            this.match(JavaScriptParser.Plus);
                            this.state = 760;
                            this.singleExpression(32);
                        }
                        break;
                    case 11:
                        {
                            _localctx = new UnaryMinusExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 761;
                            this.match(JavaScriptParser.Minus);
                            this.state = 762;
                            this.singleExpression(31);
                        }
                        break;
                    case 12:
                        {
                            _localctx = new BitNotExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 763;
                            this.match(JavaScriptParser.BitNot);
                            this.state = 764;
                            this.singleExpression(30);
                        }
                        break;
                    case 13:
                        {
                            _localctx = new NotExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 765;
                            this.match(JavaScriptParser.Not);
                            this.state = 766;
                            this.singleExpression(29);
                        }
                        break;
                    case 14:
                        {
                            _localctx = new AwaitExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 767;
                            this.match(JavaScriptParser.Await);
                            this.state = 768;
                            this.singleExpression(28);
                        }
                        break;
                    case 15:
                        {
                            _localctx = new ImportExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 769;
                            this.match(JavaScriptParser.Import);
                            this.state = 770;
                            this.match(JavaScriptParser.OpenParen);
                            this.state = 771;
                            this.singleExpression(0);
                            this.state = 772;
                            this.match(JavaScriptParser.CloseParen);
                        }
                        break;
                    case 16:
                        {
                            _localctx = new YieldExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 774;
                            this.yieldStatement();
                        }
                        break;
                    case 17:
                        {
                            _localctx = new ThisExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 775;
                            this.match(JavaScriptParser.This);
                        }
                        break;
                    case 18:
                        {
                            _localctx = new IdentifierExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 776;
                            this.match(JavaScriptParser.Identifier);
                        }
                        break;
                    case 19:
                        {
                            _localctx = new SuperExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 777;
                            this.match(JavaScriptParser.Super);
                        }
                        break;
                    case 20:
                        {
                            _localctx = new LiteralExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 778;
                            this.literal();
                        }
                        break;
                    case 21:
                        {
                            _localctx = new ArrayLiteralExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 779;
                            this.arrayLiteral();
                        }
                        break;
                    case 22:
                        {
                            _localctx = new ObjectLiteralExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 780;
                            this.objectLiteral();
                        }
                        break;
                    case 23:
                        {
                            _localctx = new ParenthesizedExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 781;
                            this.match(JavaScriptParser.OpenParen);
                            this.state = 782;
                            this.expressionSequence();
                            this.state = 783;
                            this.match(JavaScriptParser.CloseParen);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 868;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 866;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 92, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new PowerExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
                                        this.state = 787;
                                        if (!(this.precpred(this._ctx, 27))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 27)");
                                        }
                                        this.state = 788;
                                        this.match(JavaScriptParser.Power);
                                        this.state = 789;
                                        this.singleExpression(27);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new MultiplicativeExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
                                        this.state = 790;
                                        if (!(this.precpred(this._ctx, 26))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 26)");
                                        }
                                        this.state = 791;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.Multiply) | (1 << JavaScriptParser.Divide) | (1 << JavaScriptParser.Modulus))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 792;
                                        this.singleExpression(27);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new AdditiveExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
                                        this.state = 793;
                                        if (!(this.precpred(this._ctx, 25))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
                                        }
                                        this.state = 794;
                                        _la = this._input.LA(1);
                                        if (!(_la === JavaScriptParser.Plus || _la === JavaScriptParser.Minus)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 795;
                                        this.singleExpression(26);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new CoalesceExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
                                        this.state = 796;
                                        if (!(this.precpred(this._ctx, 24))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 24)");
                                        }
                                        this.state = 797;
                                        this.match(JavaScriptParser.NullCoalesce);
                                        this.state = 798;
                                        this.singleExpression(25);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new BitShiftExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
                                        this.state = 799;
                                        if (!(this.precpred(this._ctx, 23))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 23)");
                                        }
                                        this.state = 800;
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (JavaScriptParser.RightShiftArithmetic - 30)) | (1 << (JavaScriptParser.LeftShiftArithmetic - 30)) | (1 << (JavaScriptParser.RightShiftLogical - 30)))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 801;
                                        this.singleExpression(24);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new RelationalExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
                                        this.state = 802;
                                        if (!(this.precpred(this._ctx, 22))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
                                        }
                                        this.state = 803;
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaScriptParser.LessThan - 33)) | (1 << (JavaScriptParser.MoreThan - 33)) | (1 << (JavaScriptParser.LessThanEquals - 33)) | (1 << (JavaScriptParser.GreaterThanEquals - 33)))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 804;
                                        this.singleExpression(23);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new InstanceofExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
                                        this.state = 805;
                                        if (!(this.precpred(this._ctx, 21))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
                                        }
                                        this.state = 806;
                                        this.match(JavaScriptParser.Instanceof);
                                        this.state = 807;
                                        this.singleExpression(22);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new InExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
                                        this.state = 808;
                                        if (!(this.precpred(this._ctx, 20))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
                                        }
                                        this.state = 809;
                                        this.match(JavaScriptParser.In);
                                        this.state = 810;
                                        this.singleExpression(21);
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new EqualityExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
                                        this.state = 811;
                                        if (!(this.precpred(this._ctx, 19))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                                        }
                                        this.state = 812;
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaScriptParser.Equals_ - 37)) | (1 << (JavaScriptParser.NotEquals - 37)) | (1 << (JavaScriptParser.IdentityEquals - 37)) | (1 << (JavaScriptParser.IdentityNotEquals - 37)))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 813;
                                        this.singleExpression(20);
                                    }
                                    break;
                                case 10:
                                    {
                                        _localctx = new BitAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
                                        this.state = 814;
                                        if (!(this.precpred(this._ctx, 18))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                                        }
                                        this.state = 815;
                                        this.match(JavaScriptParser.BitAnd);
                                        this.state = 816;
                                        this.singleExpression(19);
                                    }
                                    break;
                                case 11:
                                    {
                                        _localctx = new BitXOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
                                        this.state = 817;
                                        if (!(this.precpred(this._ctx, 17))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                                        }
                                        this.state = 818;
                                        this.match(JavaScriptParser.BitXOr);
                                        this.state = 819;
                                        this.singleExpression(18);
                                    }
                                    break;
                                case 12:
                                    {
                                        _localctx = new BitOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
                                        this.state = 820;
                                        if (!(this.precpred(this._ctx, 16))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                                        }
                                        this.state = 821;
                                        this.match(JavaScriptParser.BitOr);
                                        this.state = 822;
                                        this.singleExpression(17);
                                    }
                                    break;
                                case 13:
                                    {
                                        _localctx = new LogicalAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
                                        this.state = 823;
                                        if (!(this.precpred(this._ctx, 15))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                                        }
                                        this.state = 824;
                                        this.match(JavaScriptParser.And);
                                        this.state = 825;
                                        this.singleExpression(16);
                                    }
                                    break;
                                case 14:
                                    {
                                        _localctx = new LogicalOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
                                        this.state = 826;
                                        if (!(this.precpred(this._ctx, 14))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                                        }
                                        this.state = 827;
                                        this.match(JavaScriptParser.Or);
                                        this.state = 828;
                                        this.singleExpression(15);
                                    }
                                    break;
                                case 15:
                                    {
                                        _localctx = new TernaryExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
                                        this.state = 829;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 830;
                                        this.match(JavaScriptParser.QuestionMark);
                                        this.state = 831;
                                        this.singleExpression(0);
                                        this.state = 832;
                                        this.match(JavaScriptParser.Colon);
                                        this.state = 833;
                                        this.singleExpression(14);
                                    }
                                    break;
                                case 16:
                                    {
                                        _localctx = new AssignmentExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
                                        this.state = 835;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 836;
                                        this.match(JavaScriptParser.Assign);
                                        this.state = 837;
                                        this.singleExpression(12);
                                    }
                                    break;
                                case 17:
                                    {
                                        _localctx = new AssignmentOperatorExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
                                        this.state = 838;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 839;
                                        this.assignmentOperator();
                                        this.state = 840;
                                        this.singleExpression(11);
                                    }
                                    break;
                                case 18:
                                    {
                                        _localctx = new MemberIndexExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
                                        this.state = 842;
                                        if (!(this.precpred(this._ctx, 44))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 44)");
                                        }
                                        this.state = 843;
                                        this.match(JavaScriptParser.OpenBracket);
                                        this.state = 844;
                                        this.expressionSequence();
                                        this.state = 845;
                                        this.match(JavaScriptParser.CloseBracket);
                                    }
                                    break;
                                case 19:
                                    {
                                        _localctx = new MemberDotExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
                                        this.state = 847;
                                        if (!(this.precpred(this._ctx, 43))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 43)");
                                        }
                                        this.state = 849;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === JavaScriptParser.QuestionMark) {
                                            {
                                                this.state = 848;
                                                this.match(JavaScriptParser.QuestionMark);
                                            }
                                        }
                                        this.state = 851;
                                        this.match(JavaScriptParser.Dot);
                                        this.state = 853;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === JavaScriptParser.Hashtag) {
                                            {
                                                this.state = 852;
                                                this.match(JavaScriptParser.Hashtag);
                                            }
                                        }
                                        this.state = 855;
                                        this.identifierName();
                                    }
                                    break;
                                case 20:
                                    {
                                        _localctx = new ArgumentsExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
                                        this.state = 856;
                                        if (!(this.precpred(this._ctx, 42))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 42)");
                                        }
                                        this.state = 857;
                                        this.arguments();
                                    }
                                    break;
                                case 21:
                                    {
                                        _localctx = new PostIncrementExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
                                        this.state = 858;
                                        if (!(this.precpred(this._ctx, 39))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 39)");
                                        }
                                        this.state = 859;
                                        if (!(this.notLineTerminator())) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.notLineTerminator()");
                                        }
                                        this.state = 860;
                                        this.match(JavaScriptParser.PlusPlus);
                                    }
                                    break;
                                case 22:
                                    {
                                        _localctx = new PostDecreaseExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
                                        this.state = 861;
                                        if (!(this.precpred(this._ctx, 38))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 38)");
                                        }
                                        this.state = 862;
                                        if (!(this.notLineTerminator())) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.notLineTerminator()");
                                        }
                                        this.state = 863;
                                        this.match(JavaScriptParser.MinusMinus);
                                    }
                                    break;
                                case 23:
                                    {
                                        _localctx = new TemplateStringExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
                                        this.state = 864;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 865;
                                        this.match(JavaScriptParser.TemplateStringLiteral);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 870;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
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
    JavaScriptParser.prototype.assignable = function () {
        var _localctx = new AssignableContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, JavaScriptParser.RULE_assignable);
        try {
            this.state = 874;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaScriptParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 871;
                        this.match(JavaScriptParser.Identifier);
                    }
                    break;
                case JavaScriptParser.OpenBracket:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 872;
                        this.arrayLiteral();
                    }
                    break;
                case JavaScriptParser.OpenBrace:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 873;
                        this.objectLiteral();
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
    JavaScriptParser.prototype.anoymousFunction = function () {
        var _localctx = new AnoymousFunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, JavaScriptParser.RULE_anoymousFunction);
        var _la;
        try {
            this.state = 900;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 99, this._ctx)) {
                case 1:
                    _localctx = new FunctionDeclContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 876;
                        this.functionDeclaration();
                    }
                    break;
                case 2:
                    _localctx = new AnoymousFunctionDeclContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 878;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaScriptParser.Async) {
                            {
                                this.state = 877;
                                this.match(JavaScriptParser.Async);
                            }
                        }
                        this.state = 880;
                        this.match(JavaScriptParser.Function);
                        this.state = 882;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaScriptParser.Multiply) {
                            {
                                this.state = 881;
                                this.match(JavaScriptParser.Multiply);
                            }
                        }
                        this.state = 884;
                        this.match(JavaScriptParser.OpenParen);
                        this.state = 886;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || _la === JavaScriptParser.Identifier) {
                            {
                                this.state = 885;
                                this.formalParameterList();
                            }
                        }
                        this.state = 888;
                        this.match(JavaScriptParser.CloseParen);
                        this.state = 889;
                        this.match(JavaScriptParser.OpenBrace);
                        this.state = 890;
                        this.functionBody();
                        this.state = 891;
                        this.match(JavaScriptParser.CloseBrace);
                    }
                    break;
                case 3:
                    _localctx = new ArrowFunctionContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 894;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaScriptParser.Async) {
                            {
                                this.state = 893;
                                this.match(JavaScriptParser.Async);
                            }
                        }
                        this.state = 896;
                        this.arrowFunctionParameters();
                        this.state = 897;
                        this.match(JavaScriptParser.ARROW);
                        this.state = 898;
                        this.arrowFunctionBody();
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
    JavaScriptParser.prototype.arrowFunctionParameters = function () {
        var _localctx = new ArrowFunctionParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, JavaScriptParser.RULE_arrowFunctionParameters);
        var _la;
        try {
            this.state = 908;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaScriptParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 902;
                        this.match(JavaScriptParser.Identifier);
                    }
                    break;
                case JavaScriptParser.OpenParen:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 903;
                        this.match(JavaScriptParser.OpenParen);
                        this.state = 905;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || _la === JavaScriptParser.Identifier) {
                            {
                                this.state = 904;
                                this.formalParameterList();
                            }
                        }
                        this.state = 907;
                        this.match(JavaScriptParser.CloseParen);
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
    JavaScriptParser.prototype.arrowFunctionBody = function () {
        var _localctx = new ArrowFunctionBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, JavaScriptParser.RULE_arrowFunctionBody);
        try {
            this.state = 915;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 102, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 910;
                        this.singleExpression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 911;
                        this.match(JavaScriptParser.OpenBrace);
                        this.state = 912;
                        this.functionBody();
                        this.state = 913;
                        this.match(JavaScriptParser.CloseBrace);
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
    JavaScriptParser.prototype.assignmentOperator = function () {
        var _localctx = new AssignmentOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, JavaScriptParser.RULE_assignmentOperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 917;
                _la = this._input.LA(1);
                if (!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (JavaScriptParser.MultiplyAssign - 46)) | (1 << (JavaScriptParser.DivideAssign - 46)) | (1 << (JavaScriptParser.ModulusAssign - 46)) | (1 << (JavaScriptParser.PlusAssign - 46)) | (1 << (JavaScriptParser.MinusAssign - 46)) | (1 << (JavaScriptParser.LeftShiftArithmeticAssign - 46)) | (1 << (JavaScriptParser.RightShiftArithmeticAssign - 46)) | (1 << (JavaScriptParser.RightShiftLogicalAssign - 46)) | (1 << (JavaScriptParser.BitAndAssign - 46)) | (1 << (JavaScriptParser.BitXorAssign - 46)) | (1 << (JavaScriptParser.BitOrAssign - 46)) | (1 << (JavaScriptParser.PowerAssign - 46)))) !== 0))) {
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
    JavaScriptParser.prototype.literal = function () {
        var _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, JavaScriptParser.RULE_literal);
        try {
            this.state = 926;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaScriptParser.NullLiteral:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 919;
                        this.match(JavaScriptParser.NullLiteral);
                    }
                    break;
                case JavaScriptParser.BooleanLiteral:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 920;
                        this.match(JavaScriptParser.BooleanLiteral);
                    }
                    break;
                case JavaScriptParser.StringLiteral:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 921;
                        this.match(JavaScriptParser.StringLiteral);
                    }
                    break;
                case JavaScriptParser.TemplateStringLiteral:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 922;
                        this.match(JavaScriptParser.TemplateStringLiteral);
                    }
                    break;
                case JavaScriptParser.RegularExpressionLiteral:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 923;
                        this.match(JavaScriptParser.RegularExpressionLiteral);
                    }
                    break;
                case JavaScriptParser.DecimalLiteral:
                case JavaScriptParser.HexIntegerLiteral:
                case JavaScriptParser.OctalIntegerLiteral:
                case JavaScriptParser.OctalIntegerLiteral2:
                case JavaScriptParser.BinaryIntegerLiteral:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 924;
                        this.numericLiteral();
                    }
                    break;
                case JavaScriptParser.BigHexIntegerLiteral:
                case JavaScriptParser.BigOctalIntegerLiteral:
                case JavaScriptParser.BigBinaryIntegerLiteral:
                case JavaScriptParser.BigDecimalIntegerLiteral:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 925;
                        this.bigintLiteral();
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
    JavaScriptParser.prototype.numericLiteral = function () {
        var _localctx = new NumericLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, JavaScriptParser.RULE_numericLiteral);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 928;
                _la = this._input.LA(1);
                if (!(((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (JavaScriptParser.DecimalLiteral - 61)) | (1 << (JavaScriptParser.HexIntegerLiteral - 61)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 61)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 61)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 61)))) !== 0))) {
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
    JavaScriptParser.prototype.bigintLiteral = function () {
        var _localctx = new BigintLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, JavaScriptParser.RULE_bigintLiteral);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 930;
                _la = this._input.LA(1);
                if (!(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (JavaScriptParser.BigHexIntegerLiteral - 66)) | (1 << (JavaScriptParser.BigOctalIntegerLiteral - 66)) | (1 << (JavaScriptParser.BigBinaryIntegerLiteral - 66)) | (1 << (JavaScriptParser.BigDecimalIntegerLiteral - 66)))) !== 0))) {
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
    JavaScriptParser.prototype.identifierName = function () {
        var _localctx = new IdentifierNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, JavaScriptParser.RULE_identifierName);
        try {
            this.state = 934;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaScriptParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 932;
                        this.match(JavaScriptParser.Identifier);
                    }
                    break;
                case JavaScriptParser.NullLiteral:
                case JavaScriptParser.BooleanLiteral:
                case JavaScriptParser.Break:
                case JavaScriptParser.Do:
                case JavaScriptParser.Instanceof:
                case JavaScriptParser.Typeof:
                case JavaScriptParser.Case:
                case JavaScriptParser.Else:
                case JavaScriptParser.New:
                case JavaScriptParser.Var:
                case JavaScriptParser.Catch:
                case JavaScriptParser.Finally:
                case JavaScriptParser.Return:
                case JavaScriptParser.Void:
                case JavaScriptParser.Continue:
                case JavaScriptParser.For:
                case JavaScriptParser.Switch:
                case JavaScriptParser.While:
                case JavaScriptParser.Debugger:
                case JavaScriptParser.Function:
                case JavaScriptParser.This:
                case JavaScriptParser.With:
                case JavaScriptParser.Default:
                case JavaScriptParser.If:
                case JavaScriptParser.Throw:
                case JavaScriptParser.Delete:
                case JavaScriptParser.In:
                case JavaScriptParser.Try:
                case JavaScriptParser.As:
                case JavaScriptParser.From:
                case JavaScriptParser.Class:
                case JavaScriptParser.Enum:
                case JavaScriptParser.Extends:
                case JavaScriptParser.Super:
                case JavaScriptParser.Const:
                case JavaScriptParser.Export:
                case JavaScriptParser.Import:
                case JavaScriptParser.Async:
                case JavaScriptParser.Await:
                case JavaScriptParser.Implements:
                case JavaScriptParser.Let:
                case JavaScriptParser.Private:
                case JavaScriptParser.Public:
                case JavaScriptParser.Interface:
                case JavaScriptParser.Package:
                case JavaScriptParser.Protected:
                case JavaScriptParser.Static:
                case JavaScriptParser.Yield:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 933;
                        this.reservedWord();
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
    JavaScriptParser.prototype.reservedWord = function () {
        var _localctx = new ReservedWordContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, JavaScriptParser.RULE_reservedWord);
        try {
            this.state = 939;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaScriptParser.Break:
                case JavaScriptParser.Do:
                case JavaScriptParser.Instanceof:
                case JavaScriptParser.Typeof:
                case JavaScriptParser.Case:
                case JavaScriptParser.Else:
                case JavaScriptParser.New:
                case JavaScriptParser.Var:
                case JavaScriptParser.Catch:
                case JavaScriptParser.Finally:
                case JavaScriptParser.Return:
                case JavaScriptParser.Void:
                case JavaScriptParser.Continue:
                case JavaScriptParser.For:
                case JavaScriptParser.Switch:
                case JavaScriptParser.While:
                case JavaScriptParser.Debugger:
                case JavaScriptParser.Function:
                case JavaScriptParser.This:
                case JavaScriptParser.With:
                case JavaScriptParser.Default:
                case JavaScriptParser.If:
                case JavaScriptParser.Throw:
                case JavaScriptParser.Delete:
                case JavaScriptParser.In:
                case JavaScriptParser.Try:
                case JavaScriptParser.As:
                case JavaScriptParser.From:
                case JavaScriptParser.Class:
                case JavaScriptParser.Enum:
                case JavaScriptParser.Extends:
                case JavaScriptParser.Super:
                case JavaScriptParser.Const:
                case JavaScriptParser.Export:
                case JavaScriptParser.Import:
                case JavaScriptParser.Async:
                case JavaScriptParser.Await:
                case JavaScriptParser.Implements:
                case JavaScriptParser.Let:
                case JavaScriptParser.Private:
                case JavaScriptParser.Public:
                case JavaScriptParser.Interface:
                case JavaScriptParser.Package:
                case JavaScriptParser.Protected:
                case JavaScriptParser.Static:
                case JavaScriptParser.Yield:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 936;
                        this.keyword();
                    }
                    break;
                case JavaScriptParser.NullLiteral:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 937;
                        this.match(JavaScriptParser.NullLiteral);
                    }
                    break;
                case JavaScriptParser.BooleanLiteral:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 938;
                        this.match(JavaScriptParser.BooleanLiteral);
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
    JavaScriptParser.prototype.keyword = function () {
        var _localctx = new KeywordContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, JavaScriptParser.RULE_keyword);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 941;
                _la = this._input.LA(1);
                if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JavaScriptParser.Break - 70)) | (1 << (JavaScriptParser.Do - 70)) | (1 << (JavaScriptParser.Instanceof - 70)) | (1 << (JavaScriptParser.Typeof - 70)) | (1 << (JavaScriptParser.Case - 70)) | (1 << (JavaScriptParser.Else - 70)) | (1 << (JavaScriptParser.New - 70)) | (1 << (JavaScriptParser.Var - 70)) | (1 << (JavaScriptParser.Catch - 70)) | (1 << (JavaScriptParser.Finally - 70)) | (1 << (JavaScriptParser.Return - 70)) | (1 << (JavaScriptParser.Void - 70)) | (1 << (JavaScriptParser.Continue - 70)) | (1 << (JavaScriptParser.For - 70)) | (1 << (JavaScriptParser.Switch - 70)) | (1 << (JavaScriptParser.While - 70)) | (1 << (JavaScriptParser.Debugger - 70)) | (1 << (JavaScriptParser.Function - 70)) | (1 << (JavaScriptParser.This - 70)) | (1 << (JavaScriptParser.With - 70)) | (1 << (JavaScriptParser.Default - 70)) | (1 << (JavaScriptParser.If - 70)) | (1 << (JavaScriptParser.Throw - 70)) | (1 << (JavaScriptParser.Delete - 70)) | (1 << (JavaScriptParser.In - 70)) | (1 << (JavaScriptParser.Try - 70)) | (1 << (JavaScriptParser.As - 70)) | (1 << (JavaScriptParser.From - 70)) | (1 << (JavaScriptParser.Class - 70)) | (1 << (JavaScriptParser.Enum - 70)) | (1 << (JavaScriptParser.Extends - 70)) | (1 << (JavaScriptParser.Super - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (JavaScriptParser.Const - 102)) | (1 << (JavaScriptParser.Export - 102)) | (1 << (JavaScriptParser.Import - 102)) | (1 << (JavaScriptParser.Async - 102)) | (1 << (JavaScriptParser.Await - 102)) | (1 << (JavaScriptParser.Implements - 102)) | (1 << (JavaScriptParser.Let - 102)) | (1 << (JavaScriptParser.Private - 102)) | (1 << (JavaScriptParser.Public - 102)) | (1 << (JavaScriptParser.Interface - 102)) | (1 << (JavaScriptParser.Package - 102)) | (1 << (JavaScriptParser.Protected - 102)) | (1 << (JavaScriptParser.Static - 102)) | (1 << (JavaScriptParser.Yield - 102)))) !== 0))) {
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
    JavaScriptParser.prototype.getter = function () {
        var _localctx = new GetterContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, JavaScriptParser.RULE_getter);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 943;
                this.match(JavaScriptParser.Identifier);
                this.state = 944;
                if (!(this.p("get"))) {
                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.p(\"get\")");
                }
                this.state = 945;
                this.propertyName();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.setter = function () {
        var _localctx = new SetterContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, JavaScriptParser.RULE_setter);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 947;
                this.match(JavaScriptParser.Identifier);
                this.state = 948;
                if (!(this.p("set"))) {
                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.p(\"set\")");
                }
                this.state = 949;
                this.propertyName();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JavaScriptParser.prototype.eos = function () {
        var _localctx = new EosContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, JavaScriptParser.RULE_eos);
        try {
            this.state = 955;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 106, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 951;
                        this.match(JavaScriptParser.SemiColon);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 952;
                        this.match(JavaScriptParser.EOF);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 953;
                        if (!(this.lineTerminatorAhead())) {
                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.lineTerminatorAhead()");
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 954;
                        if (!(this.closeBrace())) {
                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.closeBrace()");
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
    JavaScriptParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 19:
                return this.expressionStatement_sempred(_localctx, predIndex);
            case 21:
                return this.iterationStatement_sempred(_localctx, predIndex);
            case 23:
                return this.continueStatement_sempred(_localctx, predIndex);
            case 24:
                return this.breakStatement_sempred(_localctx, predIndex);
            case 25:
                return this.returnStatement_sempred(_localctx, predIndex);
            case 26:
                return this.yieldStatement_sempred(_localctx, predIndex);
            case 34:
                return this.throwStatement_sempred(_localctx, predIndex);
            case 42:
                return this.classElement_sempred(_localctx, predIndex);
            case 58:
                return this.singleExpression_sempred(_localctx, predIndex);
            case 70:
                return this.getter_sempred(_localctx, predIndex);
            case 71:
                return this.setter_sempred(_localctx, predIndex);
            case 72:
                return this.eos_sempred(_localctx, predIndex);
        }
        return true;
    };
    JavaScriptParser.prototype.expressionStatement_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.notOpenBraceAndNotFunction();
        }
        return true;
    };
    JavaScriptParser.prototype.iterationStatement_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 1:
                return this.p("of");
        }
        return true;
    };
    JavaScriptParser.prototype.continueStatement_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 2:
                return this.notLineTerminator();
        }
        return true;
    };
    JavaScriptParser.prototype.breakStatement_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 3:
                return this.notLineTerminator();
        }
        return true;
    };
    JavaScriptParser.prototype.returnStatement_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 4:
                return this.notLineTerminator();
        }
        return true;
    };
    JavaScriptParser.prototype.yieldStatement_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 5:
                return this.notLineTerminator();
        }
        return true;
    };
    JavaScriptParser.prototype.throwStatement_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 6:
                return this.notLineTerminator();
        }
        return true;
    };
    JavaScriptParser.prototype.classElement_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 7:
                return this.n("static");
        }
        return true;
    };
    JavaScriptParser.prototype.singleExpression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 8:
                return this.precpred(this._ctx, 27);
            case 9:
                return this.precpred(this._ctx, 26);
            case 10:
                return this.precpred(this._ctx, 25);
            case 11:
                return this.precpred(this._ctx, 24);
            case 12:
                return this.precpred(this._ctx, 23);
            case 13:
                return this.precpred(this._ctx, 22);
            case 14:
                return this.precpred(this._ctx, 21);
            case 15:
                return this.precpred(this._ctx, 20);
            case 16:
                return this.precpred(this._ctx, 19);
            case 17:
                return this.precpred(this._ctx, 18);
            case 18:
                return this.precpred(this._ctx, 17);
            case 19:
                return this.precpred(this._ctx, 16);
            case 20:
                return this.precpred(this._ctx, 15);
            case 21:
                return this.precpred(this._ctx, 14);
            case 22:
                return this.precpred(this._ctx, 13);
            case 23:
                return this.precpred(this._ctx, 12);
            case 24:
                return this.precpred(this._ctx, 11);
            case 25:
                return this.precpred(this._ctx, 44);
            case 26:
                return this.precpred(this._ctx, 43);
            case 27:
                return this.precpred(this._ctx, 42);
            case 28:
                return this.precpred(this._ctx, 39);
            case 29:
                return this.notLineTerminator();
            case 30:
                return this.precpred(this._ctx, 38);
            case 31:
                return this.notLineTerminator();
            case 32:
                return this.precpred(this._ctx, 9);
        }
        return true;
    };
    JavaScriptParser.prototype.getter_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 33:
                return this.p("get");
        }
        return true;
    };
    JavaScriptParser.prototype.setter_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 34:
                return this.p("set");
        }
        return true;
    };
    JavaScriptParser.prototype.eos_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 35:
                return this.lineTerminatorAhead();
            case 36:
                return this.closeBrace();
        }
        return true;
    };
    Object.defineProperty(JavaScriptParser, "_ATN", {
        get: function () {
            if (!JavaScriptParser.__ATN) {
                JavaScriptParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(JavaScriptParser._serializedATN));
            }
            return JavaScriptParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    JavaScriptParser.HashBangLine = 1;
    JavaScriptParser.MultiLineComment = 2;
    JavaScriptParser.SingleLineComment = 3;
    JavaScriptParser.RegularExpressionLiteral = 4;
    JavaScriptParser.OpenBracket = 5;
    JavaScriptParser.CloseBracket = 6;
    JavaScriptParser.OpenParen = 7;
    JavaScriptParser.CloseParen = 8;
    JavaScriptParser.OpenBrace = 9;
    JavaScriptParser.CloseBrace = 10;
    JavaScriptParser.SemiColon = 11;
    JavaScriptParser.Comma = 12;
    JavaScriptParser.Assign = 13;
    JavaScriptParser.QuestionMark = 14;
    JavaScriptParser.Colon = 15;
    JavaScriptParser.Ellipsis = 16;
    JavaScriptParser.Dot = 17;
    JavaScriptParser.PlusPlus = 18;
    JavaScriptParser.MinusMinus = 19;
    JavaScriptParser.Plus = 20;
    JavaScriptParser.Minus = 21;
    JavaScriptParser.BitNot = 22;
    JavaScriptParser.Not = 23;
    JavaScriptParser.Multiply = 24;
    JavaScriptParser.Divide = 25;
    JavaScriptParser.Modulus = 26;
    JavaScriptParser.Power = 27;
    JavaScriptParser.NullCoalesce = 28;
    JavaScriptParser.Hashtag = 29;
    JavaScriptParser.RightShiftArithmetic = 30;
    JavaScriptParser.LeftShiftArithmetic = 31;
    JavaScriptParser.RightShiftLogical = 32;
    JavaScriptParser.LessThan = 33;
    JavaScriptParser.MoreThan = 34;
    JavaScriptParser.LessThanEquals = 35;
    JavaScriptParser.GreaterThanEquals = 36;
    JavaScriptParser.Equals_ = 37;
    JavaScriptParser.NotEquals = 38;
    JavaScriptParser.IdentityEquals = 39;
    JavaScriptParser.IdentityNotEquals = 40;
    JavaScriptParser.BitAnd = 41;
    JavaScriptParser.BitXOr = 42;
    JavaScriptParser.BitOr = 43;
    JavaScriptParser.And = 44;
    JavaScriptParser.Or = 45;
    JavaScriptParser.MultiplyAssign = 46;
    JavaScriptParser.DivideAssign = 47;
    JavaScriptParser.ModulusAssign = 48;
    JavaScriptParser.PlusAssign = 49;
    JavaScriptParser.MinusAssign = 50;
    JavaScriptParser.LeftShiftArithmeticAssign = 51;
    JavaScriptParser.RightShiftArithmeticAssign = 52;
    JavaScriptParser.RightShiftLogicalAssign = 53;
    JavaScriptParser.BitAndAssign = 54;
    JavaScriptParser.BitXorAssign = 55;
    JavaScriptParser.BitOrAssign = 56;
    JavaScriptParser.PowerAssign = 57;
    JavaScriptParser.ARROW = 58;
    JavaScriptParser.NullLiteral = 59;
    JavaScriptParser.BooleanLiteral = 60;
    JavaScriptParser.DecimalLiteral = 61;
    JavaScriptParser.HexIntegerLiteral = 62;
    JavaScriptParser.OctalIntegerLiteral = 63;
    JavaScriptParser.OctalIntegerLiteral2 = 64;
    JavaScriptParser.BinaryIntegerLiteral = 65;
    JavaScriptParser.BigHexIntegerLiteral = 66;
    JavaScriptParser.BigOctalIntegerLiteral = 67;
    JavaScriptParser.BigBinaryIntegerLiteral = 68;
    JavaScriptParser.BigDecimalIntegerLiteral = 69;
    JavaScriptParser.Break = 70;
    JavaScriptParser.Do = 71;
    JavaScriptParser.Instanceof = 72;
    JavaScriptParser.Typeof = 73;
    JavaScriptParser.Case = 74;
    JavaScriptParser.Else = 75;
    JavaScriptParser.New = 76;
    JavaScriptParser.Var = 77;
    JavaScriptParser.Catch = 78;
    JavaScriptParser.Finally = 79;
    JavaScriptParser.Return = 80;
    JavaScriptParser.Void = 81;
    JavaScriptParser.Continue = 82;
    JavaScriptParser.For = 83;
    JavaScriptParser.Switch = 84;
    JavaScriptParser.While = 85;
    JavaScriptParser.Debugger = 86;
    JavaScriptParser.Function = 87;
    JavaScriptParser.This = 88;
    JavaScriptParser.With = 89;
    JavaScriptParser.Default = 90;
    JavaScriptParser.If = 91;
    JavaScriptParser.Throw = 92;
    JavaScriptParser.Delete = 93;
    JavaScriptParser.In = 94;
    JavaScriptParser.Try = 95;
    JavaScriptParser.As = 96;
    JavaScriptParser.From = 97;
    JavaScriptParser.Class = 98;
    JavaScriptParser.Enum = 99;
    JavaScriptParser.Extends = 100;
    JavaScriptParser.Super = 101;
    JavaScriptParser.Const = 102;
    JavaScriptParser.Export = 103;
    JavaScriptParser.Import = 104;
    JavaScriptParser.Async = 105;
    JavaScriptParser.Await = 106;
    JavaScriptParser.Implements = 107;
    JavaScriptParser.Let = 108;
    JavaScriptParser.Private = 109;
    JavaScriptParser.Public = 110;
    JavaScriptParser.Interface = 111;
    JavaScriptParser.Package = 112;
    JavaScriptParser.Protected = 113;
    JavaScriptParser.Static = 114;
    JavaScriptParser.Yield = 115;
    JavaScriptParser.Identifier = 116;
    JavaScriptParser.StringLiteral = 117;
    JavaScriptParser.TemplateStringLiteral = 118;
    JavaScriptParser.WhiteSpaces = 119;
    JavaScriptParser.LineTerminator = 120;
    JavaScriptParser.HtmlComment = 121;
    JavaScriptParser.CDataComment = 122;
    JavaScriptParser.UnexpectedCharacter = 123;
    JavaScriptParser.RULE_program = 0;
    JavaScriptParser.RULE_sourceElement = 1;
    JavaScriptParser.RULE_statement = 2;
    JavaScriptParser.RULE_block = 3;
    JavaScriptParser.RULE_statementList = 4;
    JavaScriptParser.RULE_importStatement = 5;
    JavaScriptParser.RULE_importFromBlock = 6;
    JavaScriptParser.RULE_moduleItems = 7;
    JavaScriptParser.RULE_importDefault = 8;
    JavaScriptParser.RULE_importNamespace = 9;
    JavaScriptParser.RULE_importFrom = 10;
    JavaScriptParser.RULE_aliasName = 11;
    JavaScriptParser.RULE_exportStatement = 12;
    JavaScriptParser.RULE_exportFromBlock = 13;
    JavaScriptParser.RULE_declaration = 14;
    JavaScriptParser.RULE_variableStatement = 15;
    JavaScriptParser.RULE_variableDeclarationList = 16;
    JavaScriptParser.RULE_variableDeclaration = 17;
    JavaScriptParser.RULE_emptyStatement = 18;
    JavaScriptParser.RULE_expressionStatement = 19;
    JavaScriptParser.RULE_ifStatement = 20;
    JavaScriptParser.RULE_iterationStatement = 21;
    JavaScriptParser.RULE_varModifier = 22;
    JavaScriptParser.RULE_continueStatement = 23;
    JavaScriptParser.RULE_breakStatement = 24;
    JavaScriptParser.RULE_returnStatement = 25;
    JavaScriptParser.RULE_yieldStatement = 26;
    JavaScriptParser.RULE_withStatement = 27;
    JavaScriptParser.RULE_switchStatement = 28;
    JavaScriptParser.RULE_caseBlock = 29;
    JavaScriptParser.RULE_caseClauses = 30;
    JavaScriptParser.RULE_caseClause = 31;
    JavaScriptParser.RULE_defaultClause = 32;
    JavaScriptParser.RULE_labelledStatement = 33;
    JavaScriptParser.RULE_throwStatement = 34;
    JavaScriptParser.RULE_tryStatement = 35;
    JavaScriptParser.RULE_catchProduction = 36;
    JavaScriptParser.RULE_finallyProduction = 37;
    JavaScriptParser.RULE_debuggerStatement = 38;
    JavaScriptParser.RULE_functionDeclaration = 39;
    JavaScriptParser.RULE_classDeclaration = 40;
    JavaScriptParser.RULE_classTail = 41;
    JavaScriptParser.RULE_classElement = 42;
    JavaScriptParser.RULE_methodDefinition = 43;
    JavaScriptParser.RULE_formalParameterList = 44;
    JavaScriptParser.RULE_formalParameterArg = 45;
    JavaScriptParser.RULE_lastFormalParameterArg = 46;
    JavaScriptParser.RULE_functionBody = 47;
    JavaScriptParser.RULE_sourceElements = 48;
    JavaScriptParser.RULE_arrayLiteral = 49;
    JavaScriptParser.RULE_elementList = 50;
    JavaScriptParser.RULE_arrayElement = 51;
    JavaScriptParser.RULE_objectLiteral = 52;
    JavaScriptParser.RULE_propertyAssignment = 53;
    JavaScriptParser.RULE_propertyName = 54;
    JavaScriptParser.RULE_arguments = 55;
    JavaScriptParser.RULE_argument = 56;
    JavaScriptParser.RULE_expressionSequence = 57;
    JavaScriptParser.RULE_singleExpression = 58;
    JavaScriptParser.RULE_assignable = 59;
    JavaScriptParser.RULE_anoymousFunction = 60;
    JavaScriptParser.RULE_arrowFunctionParameters = 61;
    JavaScriptParser.RULE_arrowFunctionBody = 62;
    JavaScriptParser.RULE_assignmentOperator = 63;
    JavaScriptParser.RULE_literal = 64;
    JavaScriptParser.RULE_numericLiteral = 65;
    JavaScriptParser.RULE_bigintLiteral = 66;
    JavaScriptParser.RULE_identifierName = 67;
    JavaScriptParser.RULE_reservedWord = 68;
    JavaScriptParser.RULE_keyword = 69;
    JavaScriptParser.RULE_getter = 70;
    JavaScriptParser.RULE_setter = 71;
    JavaScriptParser.RULE_eos = 72;
    // tslint:disable:no-trailing-whitespace
    JavaScriptParser.ruleNames = [
        "program", "sourceElement", "statement", "block", "statementList", "importStatement",
        "importFromBlock", "moduleItems", "importDefault", "importNamespace",
        "importFrom", "aliasName", "exportStatement", "exportFromBlock", "declaration",
        "variableStatement", "variableDeclarationList", "variableDeclaration",
        "emptyStatement", "expressionStatement", "ifStatement", "iterationStatement",
        "varModifier", "continueStatement", "breakStatement", "returnStatement",
        "yieldStatement", "withStatement", "switchStatement", "caseBlock", "caseClauses",
        "caseClause", "defaultClause", "labelledStatement", "throwStatement",
        "tryStatement", "catchProduction", "finallyProduction", "debuggerStatement",
        "functionDeclaration", "classDeclaration", "classTail", "classElement",
        "methodDefinition", "formalParameterList", "formalParameterArg", "lastFormalParameterArg",
        "functionBody", "sourceElements", "arrayLiteral", "elementList", "arrayElement",
        "objectLiteral", "propertyAssignment", "propertyName", "arguments", "argument",
        "expressionSequence", "singleExpression", "assignable", "anoymousFunction",
        "arrowFunctionParameters", "arrowFunctionBody", "assignmentOperator",
        "literal", "numericLiteral", "bigintLiteral", "identifierName", "reservedWord",
        "keyword", "getter", "setter", "eos",
    ];
    JavaScriptParser._LITERAL_NAMES = [
        undefined, undefined, undefined, undefined, undefined, "'['", "']'", "'('",
        "')'", "'{'", "'}'", "';'", "','", "'='", "'?'", "':'", "'...'", "'.'",
        "'++'", "'--'", "'+'", "'-'", "'~'", "'!'", "'*'", "'/'", "'%'", "'**'",
        "'??'", "'#'", "'>>'", "'<<'", "'>>>'", "'<'", "'>'", "'<='", "'>='",
        "'=='", "'!='", "'==='", "'!=='", "'&'", "'^'", "'|'", "'&&'", "'||'",
        "'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='", "'>>>='", "'&='",
        "'^='", "'|='", "'**='", "'=>'", "'null'", undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        "'break'", "'do'", "'instanceof'", "'typeof'", "'case'", "'else'", "'new'",
        "'var'", "'catch'", "'finally'", "'return'", "'void'", "'continue'", "'for'",
        "'switch'", "'while'", "'debugger'", "'function'", "'this'", "'with'",
        "'default'", "'if'", "'throw'", "'delete'", "'in'", "'try'", "'as'", "'from'",
        "'class'", "'enum'", "'extends'", "'super'", "'const'", "'export'", "'import'",
        "'async'", "'await'", "'implements'", "'let'", "'private'", "'public'",
        "'interface'", "'package'", "'protected'", "'static'", "'yield'",
    ];
    JavaScriptParser._SYMBOLIC_NAMES = [
        undefined, "HashBangLine", "MultiLineComment", "SingleLineComment", "RegularExpressionLiteral",
        "OpenBracket", "CloseBracket", "OpenParen", "CloseParen", "OpenBrace",
        "CloseBrace", "SemiColon", "Comma", "Assign", "QuestionMark", "Colon",
        "Ellipsis", "Dot", "PlusPlus", "MinusMinus", "Plus", "Minus", "BitNot",
        "Not", "Multiply", "Divide", "Modulus", "Power", "NullCoalesce", "Hashtag",
        "RightShiftArithmetic", "LeftShiftArithmetic", "RightShiftLogical", "LessThan",
        "MoreThan", "LessThanEquals", "GreaterThanEquals", "Equals_", "NotEquals",
        "IdentityEquals", "IdentityNotEquals", "BitAnd", "BitXOr", "BitOr", "And",
        "Or", "MultiplyAssign", "DivideAssign", "ModulusAssign", "PlusAssign",
        "MinusAssign", "LeftShiftArithmeticAssign", "RightShiftArithmeticAssign",
        "RightShiftLogicalAssign", "BitAndAssign", "BitXorAssign", "BitOrAssign",
        "PowerAssign", "ARROW", "NullLiteral", "BooleanLiteral", "DecimalLiteral",
        "HexIntegerLiteral", "OctalIntegerLiteral", "OctalIntegerLiteral2", "BinaryIntegerLiteral",
        "BigHexIntegerLiteral", "BigOctalIntegerLiteral", "BigBinaryIntegerLiteral",
        "BigDecimalIntegerLiteral", "Break", "Do", "Instanceof", "Typeof", "Case",
        "Else", "New", "Var", "Catch", "Finally", "Return", "Void", "Continue",
        "For", "Switch", "While", "Debugger", "Function", "This", "With", "Default",
        "If", "Throw", "Delete", "In", "Try", "As", "From", "Class", "Enum", "Extends",
        "Super", "Const", "Export", "Import", "Async", "Await", "Implements",
        "Let", "Private", "Public", "Interface", "Package", "Protected", "Static",
        "Yield", "Identifier", "StringLiteral", "TemplateStringLiteral", "WhiteSpaces",
        "LineTerminator", "HtmlComment", "CDataComment", "UnexpectedCharacter",
    ];
    JavaScriptParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(JavaScriptParser._LITERAL_NAMES, JavaScriptParser._SYMBOLIC_NAMES, []);
    JavaScriptParser._serializedATNSegments = 2;
    JavaScriptParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03}\u03C0\x04\x02" +
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
        "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x03\x02\x05\x02\x96\n\x02\x03\x02" +
        "\x05\x02\x99\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05" +
        "\x04\xB3\n\x04\x03\x05\x03\x05\x05\x05\xB7\n\x05\x03\x05\x03\x05\x03\x06" +
        "\x06\x06\xBC\n\x06\r\x06\x0E\x06\xBD\x03\x07\x03\x07\x03\x07\x03\b\x05" +
        "\b\xC4\n\b\x03\b\x03\b\x05\b\xC8\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05" +
        "\b\xCF\n\b\x03\t\x03\t\x03\t\x03\t\x07\t\xD5\n\t\f\t\x0E\t\xD8\v\t\x03" +
        "\t\x03\t\x05\t\xDC\n\t\x05\t\xDE\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
        "\v\x03\v\x03\v\x05\v\xE8\n\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x05\r" +
        "\xF0\n\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xF5\n\x0E\x03\x0E\x03\x0E\x03" +
        "\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xFE\n\x0E\x03\x0F\x03\x0F" +
        "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0106\n\x0F\x03\x0F\x03\x0F\x05" +
        "\x0F\u010A\n\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u010F\n\x10\x03\x11\x03" +
        "\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x07\x12\u0118\n\x12\f\x12" +
        "\x0E\x12\u011B\v\x12\x03\x13\x03\x13\x03\x13\x05\x13\u0120\n\x13\x03\x14" +
        "\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16" +
        "\x03\x16\x03\x16\x03\x16\x05\x16\u012F\n\x16\x03\x17\x03\x17\x03\x17\x03" +
        "\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
        "\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0143\n\x17\x03\x17" +
        "\x03\x17\x05\x17\u0147\n\x17\x03\x17\x03\x17\x05\x17\u014B\n\x17\x03\x17" +
        "\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0153\n\x17\x03\x17\x03" +
        "\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u015C\n\x17\x03\x17" +
        "\x03\x17\x03\x17\x05\x17\u0161\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
        "\x17\x03\x17\x05\x17\u0169\n\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19" +
        "\x05\x19\u0170\n\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0177" +
        "\n\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u017E\n\x1B\x03" +
        "\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0185\n\x1C\x03\x1C\x03\x1C" +
        "\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E" +
        "\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x05\x1F\u0197\n\x1F\x03\x1F\x03" +
        "\x1F\x05\x1F\u019B\n\x1F\x05\x1F\u019D\n\x1F\x03\x1F\x03\x1F\x03 \x06" +
        " \u01A2\n \r \x0E \u01A3\x03!\x03!\x03!\x03!\x05!\u01AA\n!\x03\"\x03\"" +
        "\x03\"\x05\"\u01AF\n\"\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03" +
        "%\x03%\x03%\x03%\x05%\u01BE\n%\x03%\x05%\u01C1\n%\x03&\x03&\x03&\x05&" +
        "\u01C6\n&\x03&\x05&\u01C9\n&\x03&\x03&\x03\'\x03\'\x03\'\x03(\x03(\x03" +
        "(\x03)\x05)\u01D4\n)\x03)\x03)\x05)\u01D8\n)\x03)\x03)\x03)\x05)\u01DD" +
        "\n)\x03)\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03+\x03+\x05+\u01EA" +
        "\n+\x03+\x03+\x07+\u01EE\n+\f+\x0E+\u01F1\v+\x03+\x03+\x03,\x03,\x03," +
        "\x03,\x07,\u01F9\n,\f,\x0E,\u01FC\v,\x03,\x03,\x03,\x05,\u0201\n,\x03" +
        ",\x03,\x03,\x03,\x05,\u0207\n,\x03-\x05-\u020A\n-\x03-\x05-\u020D\n-\x03" +
        "-\x03-\x03-\x05-\u0212\n-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u021A\n-" +
        "\x03-\x05-\u021D\n-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u0227" +
        "\n-\x03-\x05-\u022A\n-\x03-\x03-\x03-\x05-\u022F\n-\x03-\x03-\x03-\x03" +
        "-\x03-\x05-\u0236\n-\x03.\x03.\x03.\x07.\u023B\n.\f.\x0E.\u023E\v.\x03" +
        ".\x03.\x05.\u0242\n.\x03.\x05.\u0245\n.\x03/\x03/\x03/\x05/\u024A\n/\x03" +
        "0\x030\x030\x031\x051\u0250\n1\x032\x062\u0253\n2\r2\x0E2\u0254\x033\x03" +
        "3\x033\x033\x034\x074\u025C\n4\f4\x0E4\u025F\v4\x034\x054\u0262\n4\x03" +
        "4\x064\u0265\n4\r4\x0E4\u0266\x034\x074\u026A\n4\f4\x0E4\u026D\v4\x03" +
        "4\x074\u0270\n4\f4\x0E4\u0273\v4\x035\x055\u0276\n5\x035\x035\x036\x03" +
        "6\x036\x036\x076\u027E\n6\f6\x0E6\u0281\v6\x056\u0283\n6\x036\x056\u0286" +
        "\n6\x036\x036\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x05" +
        "7\u0295\n7\x037\x057\u0298\n7\x037\x037\x037\x057\u029D\n7\x037\x037\x03" +
        "7\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x03" +
        "7\x037\x037\x037\x037\x057\u02B4\n7\x037\x057\u02B7\n7\x038\x038\x038" +
        "\x038\x038\x038\x038\x058\u02C0\n8\x039\x039\x039\x039\x079\u02C6\n9\f" +
        "9\x0E9\u02C9\v9\x039\x059\u02CC\n9\x059\u02CE\n9\x039\x039\x03:\x05:\u02D3" +
        "\n:\x03:\x03:\x05:\u02D7\n:\x03;\x03;\x03;\x07;\u02DC\n;\f;\x0E;\u02DF" +
        "\v;\x03<\x03<\x03<\x03<\x05<\u02E5\n<\x03<\x03<\x03<\x03<\x05<\u02EB\n" +
        "<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03" +
        "<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03" +
        "<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x05<\u0314\n" +
        "<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03" +
        "<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03" +
        "<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03" +
        "<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03" +
        "<\x03<\x03<\x03<\x03<\x03<\x03<\x05<\u0354\n<\x03<\x03<\x05<\u0358\n<" +
        "\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x07<\u0365\n<" +
        "\f<\x0E<\u0368\v<\x03=\x03=\x03=\x05=\u036D\n=\x03>\x03>\x05>\u0371\n" +
        ">\x03>\x03>\x05>\u0375\n>\x03>\x03>\x05>\u0379\n>\x03>\x03>\x03>\x03>" +
        "\x03>\x03>\x05>\u0381\n>\x03>\x03>\x03>\x03>\x05>\u0387\n>\x03?\x03?\x03" +
        "?\x05?\u038C\n?\x03?\x05?\u038F\n?\x03@\x03@\x03@\x03@\x03@\x05@\u0396" +
        "\n@\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x05B\u03A1\nB\x03C\x03" +
        "C\x03D\x03D\x03E\x03E\x05E\u03A9\nE\x03F\x03F\x03F\x05F\u03AE\nF\x03G" +
        "\x03G\x03H\x03H\x03H\x03H\x03I\x03I\x03I\x03I\x03J\x03J\x03J\x03J\x05" +
        "J\u03BE\nJ\x03J\x02\x02\x03vK\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
        "\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
        " \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
        "<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
        "X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
        "t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
        "\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x02\f\x05\x02OOhhnn\x03\x02\x1A" +
        "\x1C\x03\x02\x16\x17\x03\x02 \"\x03\x02#&\x03\x02\'*\x03\x020;\x03\x02" +
        "?C\x03\x02DG\x03\x02Hu\x02\u0435\x02\x95\x03\x02\x02\x02\x04\x9C\x03\x02" +
        "\x02\x02\x06\xB2\x03\x02\x02\x02\b\xB4\x03\x02\x02\x02\n\xBB\x03\x02\x02" +
        "\x02\f\xBF\x03\x02\x02\x02\x0E\xCE\x03\x02\x02\x02\x10\xD0\x03\x02\x02" +
        "\x02\x12\xE1\x03\x02\x02\x02\x14\xE4\x03\x02\x02\x02\x16\xE9\x03\x02\x02" +
        "\x02\x18\xEC\x03\x02\x02\x02\x1A\xFD\x03\x02\x02\x02\x1C\u0109\x03\x02" +
        "\x02\x02\x1E\u010E\x03\x02\x02\x02 \u0110\x03\x02\x02\x02\"\u0114\x03" +
        "\x02\x02\x02$\u011C\x03\x02\x02\x02&\u0121\x03\x02\x02\x02(\u0123\x03" +
        "\x02\x02\x02*\u0127\x03\x02\x02\x02,\u0168\x03\x02\x02\x02.\u016A\x03" +
        "\x02\x02\x020\u016C\x03\x02\x02\x022\u0173\x03\x02\x02\x024\u017A\x03" +
        "\x02\x02\x026\u0181\x03\x02\x02\x028\u0188\x03\x02\x02\x02:\u018E\x03" +
        "\x02\x02\x02<\u0194\x03\x02\x02\x02>\u01A1\x03\x02\x02\x02@\u01A5\x03" +
        "\x02\x02\x02B\u01AB\x03\x02\x02\x02D\u01B0\x03\x02\x02\x02F\u01B4\x03" +
        "\x02\x02\x02H\u01B9\x03\x02\x02\x02J\u01C2\x03\x02\x02\x02L\u01CC\x03" +
        "\x02\x02\x02N\u01CF\x03\x02\x02\x02P\u01D3\x03\x02\x02\x02R\u01E3\x03" +
        "\x02\x02\x02T\u01E9\x03\x02\x02\x02V\u0206\x03\x02\x02\x02X\u0235\x03" +
        "\x02\x02\x02Z\u0244\x03\x02\x02\x02\\\u0246\x03\x02\x02\x02^\u024B\x03" +
        "\x02\x02\x02`\u024F\x03\x02\x02\x02b\u0252\x03\x02\x02\x02d\u0256\x03" +
        "\x02\x02\x02f\u025D\x03\x02\x02\x02h\u0275\x03\x02\x02\x02j\u0279\x03" +
        "\x02\x02\x02l\u02B6\x03\x02\x02\x02n\u02BF\x03\x02\x02\x02p\u02C1\x03" +
        "\x02\x02\x02r\u02D2\x03\x02\x02\x02t\u02D8\x03\x02\x02\x02v\u0313\x03" +
        "\x02\x02\x02x\u036C\x03\x02\x02\x02z\u0386\x03\x02\x02\x02|\u038E\x03" +
        "\x02\x02\x02~\u0395\x03\x02\x02\x02\x80\u0397\x03\x02\x02\x02\x82\u03A0" +
        "\x03\x02\x02\x02\x84\u03A2\x03\x02\x02\x02\x86\u03A4\x03\x02\x02\x02\x88" +
        "\u03A8\x03\x02\x02\x02\x8A\u03AD\x03\x02\x02\x02\x8C\u03AF\x03\x02\x02" +
        "\x02\x8E\u03B1\x03\x02\x02\x02\x90\u03B5\x03\x02\x02\x02\x92\u03BD\x03" +
        "\x02\x02\x02\x94\x96\x07\x03\x02\x02\x95\x94\x03\x02\x02\x02\x95\x96\x03" +
        "\x02\x02\x02\x96\x98\x03\x02\x02\x02\x97\x99\x05b2\x02\x98\x97\x03\x02" +
        "\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9B\x07\x02" +
        "\x02\x03\x9B\x03\x03\x02\x02\x02\x9C\x9D\x05\x06\x04\x02\x9D\x05\x03\x02" +
        "\x02\x02\x9E\xB3\x05\b\x05\x02\x9F\xB3\x05 \x11\x02\xA0\xB3\x05\f\x07" +
        "\x02\xA1\xB3\x05\x1A\x0E\x02\xA2\xB3\x05&\x14\x02\xA3\xB3\x05R*\x02\xA4" +
        "\xB3\x05(\x15\x02\xA5\xB3\x05*\x16\x02\xA6\xB3\x05,\x17\x02\xA7\xB3\x05" +
        "0\x19\x02\xA8\xB3\x052\x1A\x02\xA9\xB3\x054\x1B\x02\xAA\xB3\x056\x1C\x02" +
        "\xAB\xB3\x058\x1D\x02\xAC\xB3\x05D#\x02\xAD\xB3\x05:\x1E\x02\xAE\xB3\x05" +
        "F$\x02\xAF\xB3\x05H%\x02\xB0\xB3\x05N(\x02\xB1\xB3\x05P)\x02\xB2\x9E\x03" +
        "\x02\x02\x02\xB2\x9F\x03\x02\x02\x02\xB2\xA0\x03\x02\x02\x02\xB2\xA1\x03" +
        "\x02\x02\x02\xB2\xA2\x03\x02\x02\x02\xB2\xA3\x03\x02\x02\x02\xB2\xA4\x03" +
        "\x02\x02\x02\xB2\xA5\x03\x02\x02\x02\xB2\xA6\x03\x02\x02\x02\xB2\xA7\x03" +
        "\x02\x02\x02\xB2\xA8\x03\x02\x02\x02\xB2\xA9\x03\x02\x02\x02\xB2\xAA\x03" +
        "\x02\x02\x02\xB2\xAB\x03\x02\x02\x02\xB2\xAC\x03\x02\x02\x02\xB2\xAD\x03" +
        "\x02\x02\x02\xB2\xAE\x03\x02\x02\x02\xB2\xAF\x03\x02\x02\x02\xB2\xB0\x03" +
        "\x02\x02\x02\xB2\xB1\x03\x02\x02\x02\xB3\x07\x03\x02\x02\x02\xB4\xB6\x07" +
        "\v\x02\x02\xB5\xB7\x05\n\x06\x02\xB6\xB5\x03\x02\x02\x02\xB6\xB7\x03\x02" +
        "\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB9\x07\f\x02\x02\xB9\t\x03\x02\x02" +
        "\x02\xBA\xBC\x05\x06\x04\x02\xBB\xBA\x03\x02\x02\x02\xBC\xBD\x03\x02\x02" +
        "\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\v\x03\x02\x02" +
        "\x02\xBF\xC0\x07j\x02\x02\xC0\xC1\x05\x0E\b\x02\xC1\r\x03\x02\x02\x02" +
        "\xC2\xC4\x05\x12\n\x02\xC3\xC2\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02" +
        "\xC4\xC7\x03\x02\x02\x02\xC5\xC8\x05\x14\v\x02\xC6\xC8\x05\x10\t\x02\xC7" +
        "\xC5\x03\x02\x02\x02\xC7\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9" +
        "\xCA\x05\x16\f\x02\xCA\xCB\x05\x92J\x02\xCB\xCF\x03\x02\x02\x02\xCC\xCD" +
        "\x07w\x02\x02\xCD\xCF\x05\x92J\x02\xCE\xC3\x03\x02\x02\x02\xCE\xCC\x03" +
        "\x02\x02\x02\xCF\x0F\x03\x02\x02\x02\xD0\xD6\x07\v\x02\x02\xD1\xD2\x05" +
        "\x18\r\x02\xD2\xD3\x07\x0E\x02\x02\xD3\xD5\x03\x02\x02\x02\xD4\xD1\x03" +
        "\x02\x02\x02\xD5\xD8\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD6\xD7\x03" +
        "\x02\x02\x02\xD7\xDD\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD9\xDB\x05" +
        "\x18\r\x02\xDA\xDC\x07\x0E\x02\x02\xDB\xDA\x03\x02\x02\x02\xDB\xDC\x03" +
        "\x02\x02\x02\xDC\xDE\x03\x02\x02\x02\xDD\xD9\x03\x02\x02\x02\xDD\xDE\x03" +
        "\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE0\x07\f\x02\x02\xE0\x11\x03" +
        "\x02\x02\x02\xE1\xE2\x05\x18\r\x02\xE2\xE3\x07\x0E\x02\x02\xE3\x13\x03" +
        "\x02\x02\x02\xE4\xE7\x07\x1A\x02\x02\xE5\xE6\x07b\x02\x02\xE6\xE8\x05" +
        "\x88E\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\x15\x03" +
        "\x02\x02\x02\xE9\xEA\x07c\x02\x02\xEA\xEB\x07w\x02\x02\xEB\x17\x03\x02" +
        "\x02\x02\xEC\xEF\x05\x88E\x02\xED\xEE\x07b\x02\x02\xEE\xF0\x05\x88E\x02" +
        "\xEF\xED\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\x19\x03\x02\x02\x02" +
        "\xF1\xF4\x07i\x02\x02\xF2\xF5\x05\x1C\x0F\x02\xF3\xF5\x05\x1E\x10\x02" +
        "\xF4\xF2\x03\x02\x02\x02\xF4\xF3\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02" +
        "\xF6\xF7\x05\x92J\x02\xF7\xFE\x03\x02\x02\x02\xF8\xF9\x07i\x02\x02\xF9" +
        "\xFA\x07\\\x02\x02\xFA\xFB\x05v<\x02\xFB\xFC\x05\x92J\x02\xFC\xFE\x03" +
        "\x02\x02\x02\xFD\xF1\x03\x02\x02\x02\xFD\xF8\x03\x02\x02\x02\xFE\x1B\x03" +
        "\x02\x02\x02\xFF\u0100\x05\x14\v\x02\u0100\u0101\x05\x16\f\x02\u0101\u0102" +
        "\x05\x92J\x02\u0102\u010A\x03\x02\x02\x02\u0103\u0105\x05\x10\t\x02\u0104" +
        "\u0106\x05\x16\f\x02\u0105\u0104\x03\x02\x02\x02\u0105\u0106\x03\x02\x02" +
        "\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0108\x05\x92J\x02\u0108\u010A" +
        "\x03\x02\x02\x02\u0109\xFF\x03\x02\x02\x02\u0109\u0103\x03\x02\x02\x02" +
        "\u010A\x1D\x03\x02\x02\x02\u010B\u010F\x05 \x11\x02\u010C\u010F\x05R*" +
        "\x02\u010D\u010F\x05P)\x02\u010E\u010B\x03\x02\x02\x02\u010E\u010C\x03" +
        "\x02\x02\x02\u010E\u010D\x03\x02\x02\x02\u010F\x1F\x03\x02\x02\x02\u0110" +
        "\u0111\x05.\x18\x02\u0111\u0112\x05\"\x12\x02\u0112\u0113\x05\x92J\x02" +
        "\u0113!\x03\x02\x02\x02\u0114\u0119\x05$\x13\x02\u0115\u0116\x07\x0E\x02" +
        "\x02\u0116\u0118\x05$\x13\x02\u0117\u0115\x03\x02\x02\x02\u0118\u011B" +
        "\x03\x02\x02\x02\u0119\u0117\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02" +
        "\u011A#\x03\x02\x02\x02\u011B\u0119\x03\x02\x02\x02\u011C\u011F\x05x=" +
        "\x02\u011D\u011E\x07\x0F\x02\x02\u011E\u0120\x05v<\x02\u011F\u011D\x03" +
        "\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120%\x03\x02\x02\x02\u0121" +
        "\u0122\x07\r\x02\x02\u0122\'\x03\x02\x02\x02\u0123\u0124\x06\x15\x02\x02" +
        "\u0124\u0125\x05t;\x02\u0125\u0126\x05\x92J\x02\u0126)\x03\x02\x02\x02" +
        "\u0127\u0128\x07]\x02\x02\u0128\u0129\x07\t\x02\x02\u0129\u012A\x05t;" +
        "\x02\u012A\u012B\x07\n\x02\x02\u012B\u012E\x05\x06\x04\x02\u012C\u012D" +
        "\x07M\x02\x02\u012D\u012F\x05\x06\x04\x02\u012E\u012C\x03\x02\x02\x02" +
        "\u012E\u012F\x03\x02\x02\x02\u012F+\x03\x02\x02\x02\u0130\u0131\x07I\x02" +
        "\x02\u0131\u0132\x05\x06\x04\x02\u0132\u0133\x07W\x02\x02\u0133\u0134" +
        "\x07\t\x02\x02\u0134\u0135\x05t;\x02\u0135\u0136\x07\n\x02\x02\u0136\u0137" +
        "\x05\x92J\x02\u0137\u0169\x03\x02\x02\x02\u0138\u0139\x07W\x02\x02\u0139" +
        "\u013A\x07\t\x02\x02\u013A\u013B\x05t;\x02\u013B\u013C\x07\n\x02\x02\u013C" +
        "\u013D\x05\x06\x04\x02\u013D\u0169\x03\x02\x02\x02\u013E\u013F\x07U\x02" +
        "\x02\u013F\u0142\x07\t\x02\x02\u0140\u0143\x05t;\x02\u0141\u0143\x05 " +
        "\x11\x02\u0142\u0140\x03\x02\x02\x02\u0142\u0141\x03\x02\x02\x02\u0142" +
        "\u0143\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\u0146\x07\r\x02" +
        "\x02\u0145\u0147\x05t;\x02\u0146\u0145\x03\x02\x02\x02\u0146\u0147\x03" +
        "\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u014A\x07\r\x02\x02\u0149" +
        "\u014B\x05t;\x02\u014A\u0149\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02" +
        "\u014B\u014C\x03\x02\x02\x02\u014C\u014D\x07\n\x02\x02\u014D\u0169\x05" +
        "\x06\x04\x02\u014E\u014F\x07U\x02\x02\u014F\u0152\x07\t\x02\x02\u0150" +
        "\u0153\x05v<\x02\u0151\u0153\x05 \x11\x02\u0152\u0150\x03\x02\x02\x02" +
        "\u0152\u0151\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0155\x07" +
        "`\x02\x02\u0155\u0156\x05t;\x02\u0156\u0157\x07\n\x02\x02\u0157\u0158" +
        "\x05\x06\x04\x02\u0158\u0169\x03\x02\x02\x02\u0159\u015B\x07U\x02\x02" +
        "\u015A\u015C\x07l\x02\x02\u015B\u015A\x03\x02\x02\x02\u015B\u015C\x03" +
        "\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D\u0160\x07\t\x02\x02\u015E" +
        "\u0161\x05v<\x02\u015F\u0161\x05 \x11\x02\u0160\u015E\x03\x02\x02\x02" +
        "\u0160\u015F\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162\u0163\x07" +
        "v\x02\x02\u0163\u0164\x06\x17\x03\x02\u0164\u0165\x05t;\x02\u0165\u0166" +
        "\x07\n\x02\x02\u0166\u0167\x05\x06\x04\x02\u0167\u0169\x03\x02\x02\x02" +
        "\u0168\u0130\x03\x02\x02\x02\u0168\u0138\x03\x02\x02\x02\u0168\u013E\x03" +
        "\x02\x02\x02\u0168\u014E\x03\x02\x02\x02\u0168\u0159\x03\x02\x02\x02\u0169" +
        "-\x03\x02\x02\x02\u016A\u016B\t\x02\x02\x02\u016B/\x03\x02\x02\x02\u016C" +
        "\u016F\x07T\x02\x02\u016D\u016E\x06\x19\x04\x02\u016E\u0170\x07v\x02\x02" +
        "\u016F\u016D\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\u0171\x03" +
        "\x02\x02\x02\u0171\u0172\x05\x92J\x02\u01721\x03\x02\x02\x02\u0173\u0176" +
        "\x07H\x02\x02\u0174\u0175\x06\x1A\x05\x02\u0175\u0177\x07v\x02\x02\u0176" +
        "\u0174\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0178\x03\x02" +
        "\x02\x02\u0178\u0179\x05\x92J\x02\u01793\x03\x02\x02\x02\u017A\u017D\x07" +
        "R\x02\x02\u017B\u017C\x06\x1B\x06\x02\u017C\u017E\x05t;\x02\u017D\u017B" +
        "\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02" +
        "\u017F\u0180\x05\x92J\x02\u01805\x03\x02\x02\x02\u0181\u0184\x07u\x02" +
        "\x02\u0182\u0183\x06\x1C\x07\x02\u0183\u0185\x05t;\x02\u0184\u0182\x03" +
        "\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186" +
        "\u0187\x05\x92J\x02\u01877\x03\x02\x02\x02\u0188\u0189\x07[\x02\x02\u0189" +
        "\u018A\x07\t\x02\x02\u018A\u018B\x05t;\x02\u018B\u018C\x07\n\x02\x02\u018C" +
        "\u018D\x05\x06\x04\x02\u018D9\x03\x02\x02\x02\u018E\u018F\x07V\x02\x02" +
        "\u018F\u0190\x07\t\x02\x02\u0190\u0191\x05t;\x02\u0191\u0192\x07\n\x02" +
        "\x02\u0192\u0193\x05<\x1F\x02\u0193;\x03\x02\x02\x02\u0194\u0196\x07\v" +
        "\x02\x02\u0195\u0197\x05> \x02\u0196\u0195\x03\x02\x02\x02\u0196\u0197" +
        "\x03\x02\x02\x02\u0197\u019C\x03\x02\x02\x02\u0198\u019A\x05B\"\x02\u0199" +
        "\u019B\x05> \x02\u019A\u0199\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02" +
        "\u019B\u019D\x03\x02\x02\x02\u019C\u0198\x03\x02\x02\x02\u019C\u019D\x03" +
        "\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\u019F\x07\f\x02\x02\u019F" +
        "=\x03\x02\x02\x02\u01A0\u01A2\x05@!\x02\u01A1\u01A0\x03\x02\x02\x02\u01A2" +
        "\u01A3\x03\x02\x02\x02\u01A3\u01A1\x03\x02\x02\x02\u01A3\u01A4\x03\x02" +
        "\x02\x02\u01A4?\x03\x02\x02\x02\u01A5\u01A6\x07L\x02\x02\u01A6\u01A7\x05" +
        "t;\x02\u01A7\u01A9\x07\x11\x02\x02\u01A8\u01AA\x05\n\x06\x02\u01A9\u01A8" +
        "\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AAA\x03\x02\x02\x02\u01AB" +
        "\u01AC\x07\\\x02\x02\u01AC\u01AE\x07\x11\x02\x02\u01AD\u01AF\x05\n\x06" +
        "\x02\u01AE\u01AD\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AFC\x03" +
        "\x02\x02\x02\u01B0\u01B1\x07v\x02\x02\u01B1\u01B2\x07\x11\x02\x02\u01B2" +
        "\u01B3\x05\x06\x04\x02\u01B3E\x03\x02\x02\x02\u01B4\u01B5\x07^\x02\x02" +
        "\u01B5\u01B6\x06$\b\x02\u01B6\u01B7\x05t;\x02\u01B7\u01B8\x05\x92J\x02" +
        "\u01B8G\x03\x02\x02\x02\u01B9\u01BA\x07a\x02\x02\u01BA\u01C0\x05\b\x05" +
        "\x02\u01BB\u01BD\x05J&\x02\u01BC\u01BE\x05L\'\x02\u01BD\u01BC\x03\x02" +
        "\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE\u01C1\x03\x02\x02\x02\u01BF" +
        "\u01C1\x05L\'\x02\u01C0\u01BB\x03\x02\x02\x02\u01C0\u01BF\x03\x02\x02" +
        "\x02\u01C1I\x03\x02\x02\x02\u01C2\u01C8\x07P\x02\x02\u01C3\u01C5\x07\t" +
        "\x02\x02\u01C4\u01C6\x05x=\x02\u01C5\u01C4\x03\x02\x02\x02\u01C5\u01C6" +
        "\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7\u01C9\x07\n\x02\x02" +
        "\u01C8\u01C3\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CA\x03" +
        "\x02\x02\x02\u01CA\u01CB\x05\b\x05\x02\u01CBK\x03\x02\x02\x02\u01CC\u01CD" +
        "\x07Q\x02\x02\u01CD\u01CE\x05\b\x05\x02\u01CEM\x03\x02\x02\x02\u01CF\u01D0" +
        "\x07X\x02\x02\u01D0\u01D1\x05\x92J\x02\u01D1O\x03\x02\x02\x02\u01D2\u01D4" +
        "\x07k\x02\x02\u01D3\u01D2\x03\x02\x02\x02\u01D3\u01D4\x03\x02";
    JavaScriptParser._serializedATNSegment1 = "\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D7\x07Y\x02\x02\u01D6\u01D8" +
        "\x07\x1A\x02\x02\u01D7\u01D6\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02" +
        "\u01D8\u01D9\x03\x02\x02\x02\u01D9\u01DA\x07v\x02\x02\u01DA\u01DC\x07" +
        "\t\x02\x02\u01DB\u01DD\x05Z.\x02\u01DC\u01DB\x03\x02\x02\x02\u01DC\u01DD" +
        "\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01DF\x07\n\x02\x02" +
        "\u01DF\u01E0\x07\v\x02\x02\u01E0\u01E1\x05`1\x02\u01E1\u01E2\x07\f\x02" +
        "\x02\u01E2Q\x03\x02\x02\x02\u01E3\u01E4\x07d\x02\x02\u01E4\u01E5\x07v" +
        "\x02\x02\u01E5\u01E6\x05T+\x02\u01E6S\x03\x02\x02\x02\u01E7\u01E8\x07" +
        "f\x02\x02\u01E8\u01EA\x05v<\x02\u01E9\u01E7\x03\x02\x02\x02\u01E9\u01EA" +
        "\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01EF\x07\v\x02\x02" +
        "\u01EC\u01EE\x05V,\x02\u01ED\u01EC\x03\x02\x02\x02\u01EE\u01F1\x03\x02" +
        "\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0" +
        "\u01F2\x03\x02\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F2\u01F3\x07\f\x02" +
        "\x02\u01F3U\x03\x02\x02\x02\u01F4\u01F9\x07t\x02\x02\u01F5\u01F6\x06," +
        "\t\x02\u01F6\u01F9\x07v\x02\x02\u01F7\u01F9\x07k\x02\x02\u01F8\u01F4\x03" +
        "\x02\x02\x02\u01F8\u01F5\x03\x02\x02\x02\u01F8\u01F7\x03\x02\x02\x02\u01F9" +
        "\u01FC\x03\x02\x02\x02\u01FA\u01F8\x03\x02\x02\x02\u01FA\u01FB\x03\x02" +
        "\x02\x02\u01FB\u01FD\x03\x02\x02\x02\u01FC\u01FA\x03\x02\x02\x02\u01FD" +
        "\u0207\x05X-\x02\u01FE\u0207\x05&\x14\x02\u01FF\u0201\x07\x1F\x02\x02" +
        "\u0200\u01FF\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\u0202\x03" +
        "\x02\x02\x02\u0202\u0203\x05n8\x02\u0203\u0204\x07\x0F\x02\x02\u0204\u0205" +
        "\x05v<\x02\u0205\u0207\x03\x02\x02\x02\u0206\u01FA\x03\x02\x02\x02\u0206" +
        "\u01FE\x03\x02\x02\x02\u0206\u0200\x03\x02\x02\x02\u0207W\x03\x02\x02" +
        "\x02\u0208\u020A\x07\x1A\x02\x02\u0209\u0208\x03\x02\x02\x02\u0209\u020A" +
        "\x03\x02\x02\x02\u020A\u020C\x03\x02\x02\x02\u020B\u020D\x07\x1F\x02\x02" +
        "\u020C\u020B\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02\u020D\u020E\x03" +
        "\x02\x02\x02\u020E\u020F\x05n8\x02\u020F\u0211\x07\t\x02\x02\u0210\u0212" +
        "\x05Z.\x02\u0211\u0210\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212" +
        "\u0213\x03\x02\x02\x02\u0213\u0214\x07\n\x02\x02\u0214\u0215\x07\v\x02" +
        "\x02\u0215\u0216\x05`1\x02\u0216\u0217\x07\f\x02\x02\u0217\u0236\x03\x02" +
        "\x02\x02\u0218\u021A\x07\x1A\x02\x02\u0219\u0218\x03\x02\x02\x02\u0219" +
        "\u021A\x03\x02\x02\x02\u021A\u021C\x03\x02\x02\x02\u021B\u021D\x07\x1F" +
        "\x02\x02\u021C\u021B\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D" +
        "\u021E\x03\x02\x02\x02\u021E\u021F\x05\x8EH\x02\u021F\u0220\x07\t\x02" +
        "\x02\u0220\u0221\x07\n\x02\x02\u0221\u0222\x07\v\x02\x02\u0222\u0223\x05" +
        "`1\x02\u0223\u0224\x07\f\x02\x02\u0224\u0236\x03\x02\x02\x02\u0225\u0227" +
        "\x07\x1A\x02\x02\u0226\u0225\x03\x02\x02\x02\u0226\u0227\x03\x02\x02\x02" +
        "\u0227\u0229\x03\x02\x02\x02\u0228\u022A\x07\x1F\x02\x02\u0229\u0228\x03" +
        "\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B" +
        "\u022C\x05\x90I\x02\u022C\u022E\x07\t\x02\x02\u022D\u022F\x05Z.\x02\u022E" +
        "\u022D\x03\x02\x02\x02\u022E\u022F\x03\x02\x02\x02\u022F\u0230\x03\x02" +
        "\x02\x02\u0230\u0231\x07\n\x02\x02\u0231\u0232\x07\v\x02\x02\u0232\u0233" +
        "\x05`1\x02\u0233\u0234\x07\f\x02\x02\u0234\u0236\x03\x02\x02\x02\u0235" +
        "\u0209\x03\x02\x02\x02\u0235\u0219\x03\x02\x02\x02\u0235\u0226\x03\x02" +
        "\x02\x02\u0236Y\x03\x02\x02\x02\u0237\u023C\x05\\/\x02\u0238\u0239\x07" +
        "\x0E\x02\x02\u0239\u023B\x05\\/\x02\u023A\u0238\x03\x02\x02\x02\u023B" +
        "\u023E\x03\x02\x02\x02\u023C\u023A\x03\x02\x02\x02\u023C\u023D\x03\x02" +
        "\x02\x02\u023D\u0241\x03\x02\x02\x02\u023E\u023C\x03\x02\x02\x02\u023F" +
        "\u0240\x07\x0E\x02\x02\u0240\u0242\x05^0\x02\u0241\u023F\x03\x02\x02\x02" +
        "\u0241\u0242\x03\x02\x02\x02\u0242\u0245\x03\x02\x02\x02\u0243\u0245\x05" +
        "^0\x02\u0244\u0237\x03\x02\x02\x02\u0244\u0243\x03\x02\x02\x02\u0245[" +
        "\x03\x02\x02\x02\u0246\u0249\x05x=\x02\u0247\u0248\x07\x0F\x02\x02\u0248" +
        "\u024A\x05v<\x02\u0249\u0247\x03\x02\x02\x02\u0249\u024A\x03\x02\x02\x02" +
        "\u024A]\x03\x02\x02\x02\u024B\u024C\x07\x12\x02\x02\u024C\u024D\x05v<" +
        "\x02\u024D_\x03\x02\x02\x02\u024E\u0250\x05b2\x02\u024F\u024E\x03\x02" +
        "\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250a\x03\x02\x02\x02\u0251\u0253" +
        "\x05\x04\x03\x02\u0252\u0251\x03\x02\x02\x02\u0253\u0254\x03\x02\x02\x02" +
        "\u0254\u0252\x03\x02\x02\x02\u0254\u0255\x03\x02\x02\x02\u0255c\x03\x02" +
        "\x02\x02\u0256\u0257\x07\x07\x02\x02\u0257\u0258\x05f4\x02\u0258\u0259" +
        "\x07\b\x02\x02\u0259e\x03\x02\x02\x02\u025A\u025C\x07\x0E\x02\x02\u025B" +
        "\u025A\x03\x02\x02\x02\u025C\u025F\x03\x02\x02\x02\u025D\u025B\x03\x02" +
        "\x02\x02\u025D\u025E\x03\x02\x02\x02\u025E\u0261\x03\x02\x02\x02\u025F" +
        "\u025D\x03\x02\x02\x02\u0260\u0262\x05h5\x02\u0261\u0260\x03\x02\x02\x02" +
        "\u0261\u0262\x03\x02\x02\x02\u0262\u026B\x03\x02\x02\x02\u0263\u0265\x07" +
        "\x0E\x02\x02\u0264\u0263\x03\x02\x02\x02\u0265\u0266\x03\x02\x02\x02\u0266" +
        "\u0264\x03\x02\x02\x02\u0266\u0267\x03\x02\x02\x02\u0267\u0268\x03\x02" +
        "\x02\x02\u0268\u026A\x05h5\x02\u0269\u0264\x03\x02\x02\x02\u026A\u026D" +
        "\x03\x02\x02\x02\u026B\u0269\x03\x02\x02\x02\u026B\u026C\x03\x02\x02\x02" +
        "\u026C\u0271\x03\x02\x02\x02\u026D\u026B\x03\x02\x02\x02\u026E\u0270\x07" +
        "\x0E\x02\x02\u026F\u026E\x03\x02\x02\x02\u0270\u0273\x03\x02\x02\x02\u0271" +
        "\u026F\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272g\x03\x02\x02" +
        "\x02\u0273\u0271\x03\x02\x02\x02\u0274\u0276\x07\x12\x02\x02\u0275\u0274" +
        "\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0277\x03\x02\x02\x02" +
        "\u0277\u0278\x05v<\x02\u0278i\x03\x02\x02\x02\u0279\u0282\x07\v\x02\x02" +
        "\u027A\u027F\x05l7\x02\u027B\u027C\x07\x0E\x02\x02\u027C\u027E\x05l7\x02" +
        "\u027D\u027B\x03\x02\x02\x02\u027E\u0281\x03\x02\x02\x02\u027F\u027D\x03" +
        "\x02\x02\x02\u027F\u0280\x03\x02\x02\x02\u0280\u0283\x03\x02\x02\x02\u0281" +
        "\u027F\x03\x02\x02\x02\u0282\u027A\x03\x02\x02\x02\u0282\u0283\x03\x02" +
        "\x02\x02\u0283\u0285\x03\x02\x02\x02\u0284\u0286\x07\x0E\x02\x02\u0285" +
        "\u0284\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286\u0287\x03\x02" +
        "\x02\x02\u0287\u0288\x07\f\x02\x02\u0288k\x03\x02\x02\x02\u0289\u028A" +
        "\x05n8\x02\u028A\u028B\x07\x11\x02\x02\u028B\u028C\x05v<\x02\u028C\u02B7" +
        "\x03\x02\x02\x02\u028D\u028E\x07\x07\x02\x02\u028E\u028F\x05v<\x02\u028F" +
        "\u0290\x07\b\x02\x02\u0290\u0291\x07\x11\x02\x02\u0291\u0292\x05v<\x02" +
        "\u0292\u02B7\x03\x02\x02\x02\u0293\u0295\x07k\x02\x02\u0294\u0293\x03" +
        "\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295\u0297\x03\x02\x02\x02\u0296" +
        "\u0298\x07\x1A\x02\x02\u0297\u0296\x03\x02\x02\x02\u0297\u0298\x03\x02" +
        "\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299\u029A\x05n8\x02\u029A\u029C" +
        "\x07\t\x02\x02\u029B\u029D\x05Z.\x02\u029C\u029B\x03\x02\x02\x02\u029C" +
        "\u029D\x03\x02\x02\x02\u029D\u029E\x03\x02\x02\x02\u029E\u029F\x07\n\x02" +
        "\x02\u029F\u02A0\x07\v\x02\x02\u02A0\u02A1\x05`1\x02\u02A1\u02A2\x07\f" +
        "\x02\x02\u02A2\u02B7\x03\x02\x02\x02\u02A3\u02A4\x05\x8EH\x02\u02A4\u02A5" +
        "\x07\t\x02\x02\u02A5\u02A6\x07\n\x02\x02\u02A6\u02A7\x07\v\x02\x02\u02A7" +
        "\u02A8\x05`1\x02\u02A8\u02A9\x07\f\x02\x02\u02A9\u02B7\x03\x02\x02\x02" +
        "\u02AA\u02AB\x05\x90I\x02\u02AB\u02AC\x07\t\x02\x02\u02AC\u02AD\x05\\" +
        "/\x02\u02AD\u02AE\x07\n\x02\x02\u02AE\u02AF\x07\v\x02\x02\u02AF\u02B0" +
        "\x05`1\x02\u02B0\u02B1\x07\f\x02\x02\u02B1\u02B7\x03\x02\x02\x02\u02B2" +
        "\u02B4\x07\x12\x02\x02\u02B3\u02B2\x03\x02\x02\x02\u02B3\u02B4\x03\x02" +
        "\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02B7\x05v<\x02\u02B6\u0289" +
        "\x03\x02\x02\x02\u02B6\u028D\x03\x02\x02\x02\u02B6\u0294\x03\x02\x02\x02" +
        "\u02B6\u02A3\x03\x02\x02\x02\u02B6\u02AA\x03\x02\x02\x02\u02B6\u02B3\x03" +
        "\x02\x02\x02\u02B7m\x03\x02\x02\x02\u02B8\u02C0\x05\x88E\x02\u02B9\u02C0" +
        "\x07w\x02\x02\u02BA\u02C0\x05\x84C\x02\u02BB\u02BC\x07\x07\x02\x02\u02BC" +
        "\u02BD\x05v<\x02\u02BD\u02BE\x07\b\x02\x02\u02BE\u02C0\x03\x02\x02\x02" +
        "\u02BF\u02B8\x03\x02\x02\x02\u02BF\u02B9\x03\x02\x02\x02\u02BF\u02BA\x03" +
        "\x02\x02\x02\u02BF\u02BB\x03\x02\x02\x02\u02C0o\x03\x02\x02\x02\u02C1" +
        "\u02CD\x07\t\x02\x02\u02C2\u02C7\x05r:\x02\u02C3\u02C4\x07\x0E\x02\x02" +
        "\u02C4\u02C6\x05r:\x02\u02C5\u02C3\x03\x02\x02\x02\u02C6\u02C9\x03\x02" +
        "\x02\x02\u02C7\u02C5\x03\x02\x02\x02\u02C7\u02C8\x03\x02\x02\x02\u02C8" +
        "\u02CB\x03\x02\x02\x02\u02C9\u02C7\x03\x02\x02\x02\u02CA\u02CC\x07\x0E" +
        "\x02\x02\u02CB\u02CA\x03\x02\x02\x02\u02CB\u02CC\x03\x02\x02\x02\u02CC" +
        "\u02CE\x03\x02\x02\x02\u02CD\u02C2\x03\x02\x02\x02\u02CD\u02CE\x03\x02" +
        "\x02\x02\u02CE\u02CF\x03\x02\x02\x02\u02CF\u02D0\x07\n\x02\x02\u02D0q" +
        "\x03\x02\x02\x02\u02D1\u02D3\x07\x12\x02\x02\u02D2\u02D1\x03\x02\x02\x02" +
        "\u02D2\u02D3\x03\x02\x02\x02\u02D3\u02D6\x03\x02\x02\x02\u02D4\u02D7\x05" +
        "v<\x02\u02D5\u02D7\x07v\x02\x02\u02D6\u02D4\x03\x02\x02\x02\u02D6\u02D5" +
        "\x03\x02\x02\x02\u02D7s\x03\x02\x02\x02\u02D8\u02DD\x05v<\x02\u02D9\u02DA" +
        "\x07\x0E\x02\x02\u02DA\u02DC\x05v<\x02\u02DB\u02D9\x03\x02\x02\x02\u02DC" +
        "\u02DF\x03\x02\x02\x02\u02DD\u02DB\x03\x02\x02\x02\u02DD\u02DE\x03\x02" +
        "\x02\x02\u02DEu\x03\x02\x02\x02\u02DF\u02DD\x03\x02\x02\x02\u02E0\u02E1" +
        "\b<\x01\x02\u02E1\u0314\x05z>\x02\u02E2\u02E4\x07d\x02\x02\u02E3\u02E5" +
        "\x07v\x02\x02\u02E4\u02E3\x03\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02" +
        "\u02E5\u02E6\x03\x02\x02\x02\u02E6\u0314\x05T+\x02\u02E7\u02E8\x07N\x02" +
        "\x02\u02E8\u02EA\x05v<\x02\u02E9\u02EB\x05p9\x02\u02EA\u02E9\x03\x02\x02" +
        "\x02\u02EA\u02EB\x03\x02\x02\x02\u02EB\u0314\x03\x02\x02\x02\u02EC\u02ED" +
        "\x07N\x02\x02\u02ED\u02EE\x07\x13\x02\x02\u02EE\u0314\x07v\x02\x02\u02EF" +
        "\u02F0\x07_\x02\x02\u02F0\u0314\x05v<\'\u02F1\u02F2\x07S\x02\x02\u02F2" +
        "\u0314\x05v<&\u02F3\u02F4\x07K\x02\x02\u02F4\u0314\x05v<%\u02F5\u02F6" +
        "\x07\x14\x02\x02\u02F6\u0314\x05v<$\u02F7\u02F8\x07\x15\x02\x02\u02F8" +
        "\u0314\x05v<#\u02F9\u02FA\x07\x16\x02\x02\u02FA\u0314\x05v<\"\u02FB\u02FC" +
        "\x07\x17\x02\x02\u02FC\u0314\x05v<!\u02FD\u02FE\x07\x18\x02\x02\u02FE" +
        "\u0314\x05v< \u02FF\u0300\x07\x19\x02\x02\u0300\u0314\x05v<\x1F\u0301" +
        "\u0302\x07l\x02\x02\u0302\u0314\x05v<\x1E\u0303\u0304\x07j\x02\x02\u0304" +
        "\u0305\x07\t\x02\x02\u0305\u0306\x05v<\x02\u0306\u0307\x07\n\x02\x02\u0307" +
        "\u0314\x03\x02\x02\x02\u0308\u0314\x056\x1C\x02\u0309\u0314\x07Z\x02\x02" +
        "\u030A\u0314\x07v\x02\x02\u030B\u0314\x07g\x02\x02\u030C\u0314\x05\x82" +
        "B\x02\u030D\u0314\x05d3\x02\u030E\u0314\x05j6\x02\u030F\u0310\x07\t\x02" +
        "\x02\u0310\u0311\x05t;\x02\u0311\u0312\x07\n\x02\x02\u0312\u0314\x03\x02" +
        "\x02\x02\u0313\u02E0\x03\x02\x02\x02\u0313\u02E2\x03\x02\x02\x02\u0313" +
        "\u02E7\x03\x02\x02\x02\u0313\u02EC\x03\x02\x02\x02\u0313\u02EF\x03\x02" +
        "\x02\x02\u0313\u02F1\x03\x02\x02\x02\u0313\u02F3\x03\x02\x02\x02\u0313" +
        "\u02F5\x03\x02\x02\x02\u0313\u02F7\x03\x02\x02\x02\u0313\u02F9\x03\x02" +
        "\x02\x02\u0313\u02FB\x03\x02\x02\x02\u0313\u02FD\x03\x02\x02\x02\u0313" +
        "\u02FF\x03\x02\x02\x02\u0313\u0301\x03\x02\x02\x02\u0313\u0303\x03\x02" +
        "\x02\x02\u0313\u0308\x03\x02\x02\x02\u0313\u0309\x03\x02\x02\x02\u0313" +
        "\u030A\x03\x02\x02\x02\u0313\u030B\x03\x02\x02\x02\u0313\u030C\x03\x02" +
        "\x02\x02\u0313\u030D\x03\x02\x02\x02\u0313\u030E\x03\x02\x02\x02\u0313" +
        "\u030F\x03\x02\x02\x02\u0314\u0366\x03\x02\x02\x02\u0315\u0316\f\x1D\x02" +
        "\x02\u0316\u0317\x07\x1D\x02\x02\u0317\u0365\x05v<\x1D\u0318\u0319\f\x1C" +
        "\x02\x02\u0319\u031A\t\x03\x02\x02\u031A\u0365\x05v<\x1D\u031B\u031C\f" +
        "\x1B\x02\x02\u031C\u031D\t\x04\x02\x02\u031D\u0365\x05v<\x1C\u031E\u031F" +
        "\f\x1A\x02\x02\u031F\u0320\x07\x1E\x02\x02\u0320\u0365\x05v<\x1B\u0321" +
        "\u0322\f\x19\x02\x02\u0322\u0323\t\x05\x02\x02\u0323\u0365\x05v<\x1A\u0324" +
        "\u0325\f\x18\x02\x02\u0325\u0326\t\x06\x02\x02\u0326\u0365\x05v<\x19\u0327" +
        "\u0328\f\x17\x02\x02\u0328\u0329\x07J\x02\x02\u0329\u0365\x05v<\x18\u032A" +
        "\u032B\f\x16\x02\x02\u032B\u032C\x07`\x02\x02\u032C\u0365\x05v<\x17\u032D" +
        "\u032E\f\x15\x02\x02\u032E\u032F\t\x07\x02\x02\u032F\u0365\x05v<\x16\u0330" +
        "\u0331\f\x14\x02\x02\u0331\u0332\x07+\x02\x02\u0332\u0365\x05v<\x15\u0333" +
        "\u0334\f\x13\x02\x02\u0334\u0335\x07,\x02\x02\u0335\u0365\x05v<\x14\u0336" +
        "\u0337\f\x12\x02\x02\u0337\u0338\x07-\x02\x02\u0338\u0365\x05v<\x13\u0339" +
        "\u033A\f\x11\x02\x02\u033A\u033B\x07.\x02\x02\u033B\u0365\x05v<\x12\u033C" +
        "\u033D\f\x10\x02\x02\u033D\u033E\x07/\x02\x02\u033E\u0365\x05v<\x11\u033F" +
        "\u0340\f\x0F\x02\x02\u0340\u0341\x07\x10\x02\x02\u0341\u0342\x05v<\x02" +
        "\u0342\u0343\x07\x11\x02\x02\u0343\u0344\x05v<\x10\u0344\u0365\x03\x02" +
        "\x02\x02\u0345\u0346\f\x0E\x02\x02\u0346\u0347\x07\x0F\x02\x02\u0347\u0365" +
        "\x05v<\x0E\u0348\u0349\f\r\x02\x02\u0349\u034A\x05\x80A\x02\u034A\u034B" +
        "\x05v<\r\u034B\u0365\x03\x02\x02\x02\u034C\u034D\f.\x02\x02\u034D\u034E" +
        "\x07\x07\x02\x02\u034E\u034F\x05t;\x02\u034F\u0350\x07\b\x02\x02\u0350" +
        "\u0365\x03\x02\x02\x02\u0351\u0353\f-\x02\x02\u0352\u0354\x07\x10\x02" +
        "\x02\u0353\u0352\x03\x02\x02\x02\u0353\u0354\x03\x02\x02\x02\u0354\u0355" +
        "\x03\x02\x02\x02\u0355\u0357\x07\x13\x02\x02\u0356\u0358\x07\x1F\x02\x02" +
        "\u0357\u0356\x03\x02\x02\x02\u0357\u0358\x03\x02\x02\x02\u0358\u0359\x03" +
        "\x02\x02\x02\u0359\u0365\x05\x88E\x02\u035A\u035B\f,\x02\x02\u035B\u0365" +
        "\x05p9\x02\u035C\u035D\f)\x02\x02\u035D\u035E\x06<\x1F\x02\u035E\u0365" +
        "\x07\x14\x02\x02\u035F\u0360\f(\x02\x02\u0360\u0361\x06<!\x02\u0361\u0365" +
        "\x07\x15\x02\x02\u0362\u0363\f\v\x02\x02\u0363\u0365\x07x\x02\x02\u0364" +
        "\u0315\x03\x02\x02\x02\u0364\u0318\x03\x02\x02\x02\u0364\u031B\x03\x02" +
        "\x02\x02\u0364\u031E\x03\x02\x02\x02\u0364\u0321\x03\x02\x02\x02\u0364" +
        "\u0324\x03\x02\x02\x02\u0364\u0327\x03\x02\x02\x02\u0364\u032A\x03\x02" +
        "\x02\x02\u0364\u032D\x03\x02\x02\x02\u0364\u0330\x03\x02\x02\x02\u0364" +
        "\u0333\x03\x02\x02\x02\u0364\u0336\x03\x02\x02\x02\u0364\u0339\x03\x02" +
        "\x02\x02\u0364\u033C\x03\x02\x02\x02\u0364\u033F\x03\x02\x02\x02\u0364" +
        "\u0345\x03\x02\x02\x02\u0364\u0348\x03\x02\x02\x02\u0364\u034C\x03\x02" +
        "\x02\x02\u0364\u0351\x03\x02\x02\x02\u0364\u035A\x03\x02\x02\x02\u0364" +
        "\u035C\x03\x02\x02\x02\u0364\u035F\x03\x02\x02\x02\u0364\u0362\x03\x02" +
        "\x02\x02\u0365\u0368\x03\x02\x02\x02\u0366\u0364\x03\x02\x02\x02\u0366" +
        "\u0367\x03\x02\x02\x02\u0367w\x03\x02\x02\x02\u0368\u0366\x03\x02\x02" +
        "\x02\u0369\u036D\x07v\x02\x02\u036A\u036D\x05d3\x02\u036B\u036D\x05j6" +
        "\x02\u036C\u0369\x03\x02\x02\x02\u036C\u036A\x03\x02\x02\x02\u036C\u036B" +
        "\x03\x02\x02\x02\u036Dy\x03\x02\x02\x02\u036E\u0387\x05P)\x02\u036F\u0371" +
        "\x07k\x02\x02\u0370\u036F\x03\x02\x02\x02\u0370\u0371\x03\x02\x02\x02" +
        "\u0371\u0372\x03\x02\x02\x02\u0372\u0374\x07Y\x02\x02\u0373\u0375\x07" +
        "\x1A\x02\x02\u0374\u0373\x03\x02\x02\x02\u0374\u0375\x03\x02\x02\x02\u0375" +
        "\u0376\x03\x02\x02\x02\u0376\u0378\x07\t\x02\x02\u0377\u0379\x05Z.\x02" +
        "\u0378\u0377\x03\x02\x02\x02\u0378\u0379\x03\x02\x02\x02\u0379\u037A\x03" +
        "\x02\x02\x02\u037A\u037B\x07\n\x02\x02\u037B\u037C\x07\v\x02\x02\u037C" +
        "\u037D\x05`1\x02\u037D\u037E\x07\f\x02\x02\u037E\u0387\x03\x02\x02\x02" +
        "\u037F\u0381\x07k\x02\x02\u0380\u037F\x03\x02\x02\x02\u0380\u0381\x03" +
        "\x02\x02\x02\u0381\u0382\x03\x02\x02\x02\u0382\u0383\x05|?\x02\u0383\u0384" +
        "\x07<\x02\x02\u0384\u0385\x05~@\x02\u0385\u0387\x03\x02\x02\x02\u0386" +
        "\u036E\x03\x02\x02\x02\u0386\u0370\x03\x02\x02\x02\u0386\u0380\x03\x02" +
        "\x02\x02\u0387{\x03\x02\x02\x02\u0388\u038F\x07v\x02\x02\u0389\u038B\x07" +
        "\t\x02\x02\u038A\u038C\x05Z.\x02\u038B\u038A\x03\x02\x02\x02\u038B\u038C" +
        "\x03\x02\x02\x02\u038C\u038D\x03\x02\x02\x02\u038D\u038F\x07\n\x02\x02" +
        "\u038E\u0388\x03\x02\x02\x02\u038E\u0389\x03\x02\x02\x02\u038F}\x03\x02" +
        "\x02\x02\u0390\u0396\x05v<\x02\u0391\u0392\x07\v\x02\x02\u0392\u0393\x05" +
        "`1\x02\u0393\u0394\x07\f\x02\x02\u0394\u0396\x03\x02\x02\x02\u0395\u0390" +
        "\x03\x02\x02\x02\u0395\u0391\x03\x02\x02\x02\u0396\x7F\x03\x02\x02\x02" +
        "\u0397\u0398\t\b\x02\x02\u0398\x81\x03\x02\x02\x02\u0399\u03A1\x07=\x02" +
        "\x02\u039A\u03A1\x07>\x02\x02\u039B\u03A1\x07w\x02\x02\u039C\u03A1\x07" +
        "x\x02\x02\u039D\u03A1\x07\x06\x02\x02\u039E\u03A1\x05\x84C\x02\u039F\u03A1" +
        "\x05\x86D\x02\u03A0\u0399\x03\x02\x02\x02\u03A0\u039A\x03\x02\x02\x02" +
        "\u03A0\u039B\x03\x02\x02\x02\u03A0\u039C\x03\x02\x02\x02\u03A0\u039D\x03" +
        "\x02\x02\x02\u03A0\u039E\x03\x02\x02\x02\u03A0\u039F\x03\x02\x02\x02\u03A1" +
        "\x83\x03\x02\x02\x02\u03A2\u03A3\t\t\x02\x02\u03A3\x85\x03\x02\x02\x02" +
        "\u03A4\u03A5\t\n\x02\x02\u03A5\x87\x03\x02\x02\x02\u03A6\u03A9\x07v\x02" +
        "\x02\u03A7\u03A9\x05\x8AF\x02\u03A8\u03A6\x03\x02\x02\x02\u03A8\u03A7" +
        "\x03\x02\x02\x02\u03A9\x89\x03\x02\x02\x02\u03AA\u03AE\x05\x8CG\x02\u03AB" +
        "\u03AE\x07=\x02\x02\u03AC\u03AE\x07>\x02\x02\u03AD\u03AA\x03\x02\x02\x02" +
        "\u03AD\u03AB\x03\x02\x02\x02\u03AD\u03AC\x03\x02\x02\x02\u03AE\x8B\x03" +
        "\x02\x02\x02\u03AF\u03B0\t\v\x02\x02\u03B0\x8D\x03\x02\x02\x02\u03B1\u03B2" +
        "\x07v\x02\x02\u03B2\u03B3\x06H#\x02\u03B3\u03B4\x05n8\x02\u03B4\x8F\x03" +
        "\x02\x02\x02\u03B5\u03B6\x07v\x02\x02\u03B6\u03B7\x06I$\x02\u03B7\u03B8" +
        "\x05n8\x02\u03B8\x91\x03\x02\x02\x02\u03B9\u03BE\x07\r\x02\x02\u03BA\u03BE" +
        "\x07\x02\x02\x03\u03BB\u03BE\x06J%\x02\u03BC\u03BE\x06J&\x02\u03BD\u03B9" +
        "\x03\x02\x02\x02\u03BD\u03BA\x03\x02\x02\x02\u03BD\u03BB\x03\x02\x02\x02" +
        "\u03BD\u03BC\x03\x02\x02\x02\u03BE\x93\x03\x02\x02\x02m\x95\x98\xB2\xB6" +
        "\xBD\xC3\xC7\xCE\xD6\xDB\xDD\xE7\xEF\xF4\xFD\u0105\u0109\u010E\u0119\u011F" +
        "\u012E\u0142\u0146\u014A\u0152\u015B\u0160\u0168\u016F\u0176\u017D\u0184" +
        "\u0196\u019A\u019C\u01A3\u01A9\u01AE\u01BD\u01C0\u01C5\u01C8\u01D3\u01D7" +
        "\u01DC\u01E9\u01EF\u01F8\u01FA\u0200\u0206\u0209\u020C\u0211\u0219\u021C" +
        "\u0226\u0229\u022E\u0235\u023C\u0241\u0244\u0249\u024F\u0254\u025D\u0261" +
        "\u0266\u026B\u0271\u0275\u027F\u0282\u0285\u0294\u0297\u029C\u02B3\u02B6" +
        "\u02BF\u02C7\u02CB\u02CD\u02D2\u02D6\u02DD\u02E4\u02EA\u0313\u0353\u0357" +
        "\u0364\u0366\u036C\u0370\u0374\u0378\u0380\u0386\u038B\u038E\u0395\u03A0" +
        "\u03A8\u03AD\u03BD";
    JavaScriptParser._serializedATN = Utils.join([
        JavaScriptParser._serializedATNSegment0,
        JavaScriptParser._serializedATNSegment1,
    ], "");
    return JavaScriptParser;
}(JavaScriptBaseParser));
exports.JavaScriptParser = JavaScriptParser;
var ProgramContext = /** @class */ (function (_super) {
    __extends(ProgramContext, _super);
    function ProgramContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgramContext.prototype.EOF = function () { return this.getToken(JavaScriptParser.EOF, 0); };
    ProgramContext.prototype.HashBangLine = function () { return this.tryGetToken(JavaScriptParser.HashBangLine, 0); };
    ProgramContext.prototype.sourceElements = function () {
        return this.tryGetRuleContext(0, SourceElementsContext);
    };
    Object.defineProperty(ProgramContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_program; },
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
var SourceElementContext = /** @class */ (function (_super) {
    __extends(SourceElementContext, _super);
    function SourceElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SourceElementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    Object.defineProperty(SourceElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_sourceElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SourceElementContext.prototype.enterRule = function (listener) {
        if (listener.enterSourceElement) {
            listener.enterSourceElement(this);
        }
    };
    // @Override
    SourceElementContext.prototype.exitRule = function (listener) {
        if (listener.exitSourceElement) {
            listener.exitSourceElement(this);
        }
    };
    // @Override
    SourceElementContext.prototype.accept = function (visitor) {
        if (visitor.visitSourceElement) {
            return visitor.visitSourceElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SourceElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SourceElementContext = SourceElementContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    StatementContext.prototype.variableStatement = function () {
        return this.tryGetRuleContext(0, VariableStatementContext);
    };
    StatementContext.prototype.importStatement = function () {
        return this.tryGetRuleContext(0, ImportStatementContext);
    };
    StatementContext.prototype.exportStatement = function () {
        return this.tryGetRuleContext(0, ExportStatementContext);
    };
    StatementContext.prototype.emptyStatement = function () {
        return this.tryGetRuleContext(0, EmptyStatementContext);
    };
    StatementContext.prototype.classDeclaration = function () {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    };
    StatementContext.prototype.expressionStatement = function () {
        return this.tryGetRuleContext(0, ExpressionStatementContext);
    };
    StatementContext.prototype.ifStatement = function () {
        return this.tryGetRuleContext(0, IfStatementContext);
    };
    StatementContext.prototype.iterationStatement = function () {
        return this.tryGetRuleContext(0, IterationStatementContext);
    };
    StatementContext.prototype.continueStatement = function () {
        return this.tryGetRuleContext(0, ContinueStatementContext);
    };
    StatementContext.prototype.breakStatement = function () {
        return this.tryGetRuleContext(0, BreakStatementContext);
    };
    StatementContext.prototype.returnStatement = function () {
        return this.tryGetRuleContext(0, ReturnStatementContext);
    };
    StatementContext.prototype.yieldStatement = function () {
        return this.tryGetRuleContext(0, YieldStatementContext);
    };
    StatementContext.prototype.withStatement = function () {
        return this.tryGetRuleContext(0, WithStatementContext);
    };
    StatementContext.prototype.labelledStatement = function () {
        return this.tryGetRuleContext(0, LabelledStatementContext);
    };
    StatementContext.prototype.switchStatement = function () {
        return this.tryGetRuleContext(0, SwitchStatementContext);
    };
    StatementContext.prototype.throwStatement = function () {
        return this.tryGetRuleContext(0, ThrowStatementContext);
    };
    StatementContext.prototype.tryStatement = function () {
        return this.tryGetRuleContext(0, TryStatementContext);
    };
    StatementContext.prototype.debuggerStatement = function () {
        return this.tryGetRuleContext(0, DebuggerStatementContext);
    };
    StatementContext.prototype.functionDeclaration = function () {
        return this.tryGetRuleContext(0, FunctionDeclarationContext);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_statement; },
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
var BlockContext = /** @class */ (function (_super) {
    __extends(BlockContext, _super);
    function BlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockContext.prototype.OpenBrace = function () { return this.getToken(JavaScriptParser.OpenBrace, 0); };
    BlockContext.prototype.CloseBrace = function () { return this.getToken(JavaScriptParser.CloseBrace, 0); };
    BlockContext.prototype.statementList = function () {
        return this.tryGetRuleContext(0, StatementListContext);
    };
    Object.defineProperty(BlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_block; },
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
    Object.defineProperty(StatementListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_statementList; },
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
var ImportStatementContext = /** @class */ (function (_super) {
    __extends(ImportStatementContext, _super);
    function ImportStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportStatementContext.prototype.Import = function () { return this.getToken(JavaScriptParser.Import, 0); };
    ImportStatementContext.prototype.importFromBlock = function () {
        return this.getRuleContext(0, ImportFromBlockContext);
    };
    Object.defineProperty(ImportStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_importStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterImportStatement) {
            listener.enterImportStatement(this);
        }
    };
    // @Override
    ImportStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitImportStatement) {
            listener.exitImportStatement(this);
        }
    };
    // @Override
    ImportStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitImportStatement) {
            return visitor.visitImportStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportStatementContext = ImportStatementContext;
var ImportFromBlockContext = /** @class */ (function (_super) {
    __extends(ImportFromBlockContext, _super);
    function ImportFromBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportFromBlockContext.prototype.importFrom = function () {
        return this.tryGetRuleContext(0, ImportFromContext);
    };
    ImportFromBlockContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    ImportFromBlockContext.prototype.importNamespace = function () {
        return this.tryGetRuleContext(0, ImportNamespaceContext);
    };
    ImportFromBlockContext.prototype.moduleItems = function () {
        return this.tryGetRuleContext(0, ModuleItemsContext);
    };
    ImportFromBlockContext.prototype.importDefault = function () {
        return this.tryGetRuleContext(0, ImportDefaultContext);
    };
    ImportFromBlockContext.prototype.StringLiteral = function () { return this.tryGetToken(JavaScriptParser.StringLiteral, 0); };
    Object.defineProperty(ImportFromBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_importFromBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportFromBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterImportFromBlock) {
            listener.enterImportFromBlock(this);
        }
    };
    // @Override
    ImportFromBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitImportFromBlock) {
            listener.exitImportFromBlock(this);
        }
    };
    // @Override
    ImportFromBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitImportFromBlock) {
            return visitor.visitImportFromBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportFromBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportFromBlockContext = ImportFromBlockContext;
var ModuleItemsContext = /** @class */ (function (_super) {
    __extends(ModuleItemsContext, _super);
    function ModuleItemsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ModuleItemsContext.prototype.OpenBrace = function () { return this.getToken(JavaScriptParser.OpenBrace, 0); };
    ModuleItemsContext.prototype.CloseBrace = function () { return this.getToken(JavaScriptParser.CloseBrace, 0); };
    ModuleItemsContext.prototype.aliasName = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AliasNameContext);
        }
        else {
            return this.getRuleContext(i, AliasNameContext);
        }
    };
    ModuleItemsContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaScriptParser.Comma);
        }
        else {
            return this.getToken(JavaScriptParser.Comma, i);
        }
    };
    Object.defineProperty(ModuleItemsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_moduleItems; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModuleItemsContext.prototype.enterRule = function (listener) {
        if (listener.enterModuleItems) {
            listener.enterModuleItems(this);
        }
    };
    // @Override
    ModuleItemsContext.prototype.exitRule = function (listener) {
        if (listener.exitModuleItems) {
            listener.exitModuleItems(this);
        }
    };
    // @Override
    ModuleItemsContext.prototype.accept = function (visitor) {
        if (visitor.visitModuleItems) {
            return visitor.visitModuleItems(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModuleItemsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModuleItemsContext = ModuleItemsContext;
var ImportDefaultContext = /** @class */ (function (_super) {
    __extends(ImportDefaultContext, _super);
    function ImportDefaultContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportDefaultContext.prototype.aliasName = function () {
        return this.getRuleContext(0, AliasNameContext);
    };
    ImportDefaultContext.prototype.Comma = function () { return this.getToken(JavaScriptParser.Comma, 0); };
    Object.defineProperty(ImportDefaultContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_importDefault; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportDefaultContext.prototype.enterRule = function (listener) {
        if (listener.enterImportDefault) {
            listener.enterImportDefault(this);
        }
    };
    // @Override
    ImportDefaultContext.prototype.exitRule = function (listener) {
        if (listener.exitImportDefault) {
            listener.exitImportDefault(this);
        }
    };
    // @Override
    ImportDefaultContext.prototype.accept = function (visitor) {
        if (visitor.visitImportDefault) {
            return visitor.visitImportDefault(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportDefaultContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportDefaultContext = ImportDefaultContext;
var ImportNamespaceContext = /** @class */ (function (_super) {
    __extends(ImportNamespaceContext, _super);
    function ImportNamespaceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportNamespaceContext.prototype.Multiply = function () { return this.getToken(JavaScriptParser.Multiply, 0); };
    ImportNamespaceContext.prototype.As = function () { return this.tryGetToken(JavaScriptParser.As, 0); };
    ImportNamespaceContext.prototype.identifierName = function () {
        return this.tryGetRuleContext(0, IdentifierNameContext);
    };
    Object.defineProperty(ImportNamespaceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_importNamespace; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportNamespaceContext.prototype.enterRule = function (listener) {
        if (listener.enterImportNamespace) {
            listener.enterImportNamespace(this);
        }
    };
    // @Override
    ImportNamespaceContext.prototype.exitRule = function (listener) {
        if (listener.exitImportNamespace) {
            listener.exitImportNamespace(this);
        }
    };
    // @Override
    ImportNamespaceContext.prototype.accept = function (visitor) {
        if (visitor.visitImportNamespace) {
            return visitor.visitImportNamespace(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportNamespaceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportNamespaceContext = ImportNamespaceContext;
var ImportFromContext = /** @class */ (function (_super) {
    __extends(ImportFromContext, _super);
    function ImportFromContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportFromContext.prototype.From = function () { return this.getToken(JavaScriptParser.From, 0); };
    ImportFromContext.prototype.StringLiteral = function () { return this.getToken(JavaScriptParser.StringLiteral, 0); };
    Object.defineProperty(ImportFromContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_importFrom; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportFromContext.prototype.enterRule = function (listener) {
        if (listener.enterImportFrom) {
            listener.enterImportFrom(this);
        }
    };
    // @Override
    ImportFromContext.prototype.exitRule = function (listener) {
        if (listener.exitImportFrom) {
            listener.exitImportFrom(this);
        }
    };
    // @Override
    ImportFromContext.prototype.accept = function (visitor) {
        if (visitor.visitImportFrom) {
            return visitor.visitImportFrom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportFromContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportFromContext = ImportFromContext;
var AliasNameContext = /** @class */ (function (_super) {
    __extends(AliasNameContext, _super);
    function AliasNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AliasNameContext.prototype.identifierName = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierNameContext);
        }
        else {
            return this.getRuleContext(i, IdentifierNameContext);
        }
    };
    AliasNameContext.prototype.As = function () { return this.tryGetToken(JavaScriptParser.As, 0); };
    Object.defineProperty(AliasNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_aliasName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AliasNameContext.prototype.enterRule = function (listener) {
        if (listener.enterAliasName) {
            listener.enterAliasName(this);
        }
    };
    // @Override
    AliasNameContext.prototype.exitRule = function (listener) {
        if (listener.exitAliasName) {
            listener.exitAliasName(this);
        }
    };
    // @Override
    AliasNameContext.prototype.accept = function (visitor) {
        if (visitor.visitAliasName) {
            return visitor.visitAliasName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AliasNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AliasNameContext = AliasNameContext;
var ExportStatementContext = /** @class */ (function (_super) {
    __extends(ExportStatementContext, _super);
    function ExportStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ExportStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_exportStatement; },
        enumerable: true,
        configurable: true
    });
    ExportStatementContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return ExportStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExportStatementContext = ExportStatementContext;
var ExportDeclarationContext = /** @class */ (function (_super) {
    __extends(ExportDeclarationContext, _super);
    function ExportDeclarationContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ExportDeclarationContext.prototype.Export = function () { return this.getToken(JavaScriptParser.Export, 0); };
    ExportDeclarationContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    ExportDeclarationContext.prototype.exportFromBlock = function () {
        return this.tryGetRuleContext(0, ExportFromBlockContext);
    };
    ExportDeclarationContext.prototype.declaration = function () {
        return this.tryGetRuleContext(0, DeclarationContext);
    };
    // @Override
    ExportDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterExportDeclaration) {
            listener.enterExportDeclaration(this);
        }
    };
    // @Override
    ExportDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitExportDeclaration) {
            listener.exitExportDeclaration(this);
        }
    };
    // @Override
    ExportDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitExportDeclaration) {
            return visitor.visitExportDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExportDeclarationContext;
}(ExportStatementContext));
exports.ExportDeclarationContext = ExportDeclarationContext;
var ExportDefaultDeclarationContext = /** @class */ (function (_super) {
    __extends(ExportDefaultDeclarationContext, _super);
    function ExportDefaultDeclarationContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ExportDefaultDeclarationContext.prototype.Export = function () { return this.getToken(JavaScriptParser.Export, 0); };
    ExportDefaultDeclarationContext.prototype.Default = function () { return this.getToken(JavaScriptParser.Default, 0); };
    ExportDefaultDeclarationContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    ExportDefaultDeclarationContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    // @Override
    ExportDefaultDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterExportDefaultDeclaration) {
            listener.enterExportDefaultDeclaration(this);
        }
    };
    // @Override
    ExportDefaultDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitExportDefaultDeclaration) {
            listener.exitExportDefaultDeclaration(this);
        }
    };
    // @Override
    ExportDefaultDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitExportDefaultDeclaration) {
            return visitor.visitExportDefaultDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExportDefaultDeclarationContext;
}(ExportStatementContext));
exports.ExportDefaultDeclarationContext = ExportDefaultDeclarationContext;
var ExportFromBlockContext = /** @class */ (function (_super) {
    __extends(ExportFromBlockContext, _super);
    function ExportFromBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExportFromBlockContext.prototype.importNamespace = function () {
        return this.tryGetRuleContext(0, ImportNamespaceContext);
    };
    ExportFromBlockContext.prototype.importFrom = function () {
        return this.tryGetRuleContext(0, ImportFromContext);
    };
    ExportFromBlockContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    ExportFromBlockContext.prototype.moduleItems = function () {
        return this.tryGetRuleContext(0, ModuleItemsContext);
    };
    Object.defineProperty(ExportFromBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_exportFromBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExportFromBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterExportFromBlock) {
            listener.enterExportFromBlock(this);
        }
    };
    // @Override
    ExportFromBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitExportFromBlock) {
            listener.exitExportFromBlock(this);
        }
    };
    // @Override
    ExportFromBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitExportFromBlock) {
            return visitor.visitExportFromBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExportFromBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExportFromBlockContext = ExportFromBlockContext;
var DeclarationContext = /** @class */ (function (_super) {
    __extends(DeclarationContext, _super);
    function DeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationContext.prototype.variableStatement = function () {
        return this.tryGetRuleContext(0, VariableStatementContext);
    };
    DeclarationContext.prototype.classDeclaration = function () {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    };
    DeclarationContext.prototype.functionDeclaration = function () {
        return this.tryGetRuleContext(0, FunctionDeclarationContext);
    };
    Object.defineProperty(DeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_declaration; },
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
var VariableStatementContext = /** @class */ (function (_super) {
    __extends(VariableStatementContext, _super);
    function VariableStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableStatementContext.prototype.varModifier = function () {
        return this.getRuleContext(0, VarModifierContext);
    };
    VariableStatementContext.prototype.variableDeclarationList = function () {
        return this.getRuleContext(0, VariableDeclarationListContext);
    };
    VariableStatementContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    Object.defineProperty(VariableStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_variableStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableStatement) {
            listener.enterVariableStatement(this);
        }
    };
    // @Override
    VariableStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableStatement) {
            listener.exitVariableStatement(this);
        }
    };
    // @Override
    VariableStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableStatement) {
            return visitor.visitVariableStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableStatementContext = VariableStatementContext;
var VariableDeclarationListContext = /** @class */ (function (_super) {
    __extends(VariableDeclarationListContext, _super);
    function VariableDeclarationListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableDeclarationListContext.prototype.variableDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableDeclarationContext);
        }
        else {
            return this.getRuleContext(i, VariableDeclarationContext);
        }
    };
    VariableDeclarationListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaScriptParser.Comma);
        }
        else {
            return this.getToken(JavaScriptParser.Comma, i);
        }
    };
    Object.defineProperty(VariableDeclarationListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_variableDeclarationList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableDeclarationListContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableDeclarationList) {
            listener.enterVariableDeclarationList(this);
        }
    };
    // @Override
    VariableDeclarationListContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableDeclarationList) {
            listener.exitVariableDeclarationList(this);
        }
    };
    // @Override
    VariableDeclarationListContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableDeclarationList) {
            return visitor.visitVariableDeclarationList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableDeclarationListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableDeclarationListContext = VariableDeclarationListContext;
var VariableDeclarationContext = /** @class */ (function (_super) {
    __extends(VariableDeclarationContext, _super);
    function VariableDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableDeclarationContext.prototype.assignable = function () {
        return this.getRuleContext(0, AssignableContext);
    };
    VariableDeclarationContext.prototype.Assign = function () { return this.tryGetToken(JavaScriptParser.Assign, 0); };
    VariableDeclarationContext.prototype.singleExpression = function () {
        return this.tryGetRuleContext(0, SingleExpressionContext);
    };
    Object.defineProperty(VariableDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_variableDeclaration; },
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
var EmptyStatementContext = /** @class */ (function (_super) {
    __extends(EmptyStatementContext, _super);
    function EmptyStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EmptyStatementContext.prototype.SemiColon = function () { return this.getToken(JavaScriptParser.SemiColon, 0); };
    Object.defineProperty(EmptyStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_emptyStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EmptyStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterEmptyStatement) {
            listener.enterEmptyStatement(this);
        }
    };
    // @Override
    EmptyStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitEmptyStatement) {
            listener.exitEmptyStatement(this);
        }
    };
    // @Override
    EmptyStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitEmptyStatement) {
            return visitor.visitEmptyStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EmptyStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EmptyStatementContext = EmptyStatementContext;
var ExpressionStatementContext = /** @class */ (function (_super) {
    __extends(ExpressionStatementContext, _super);
    function ExpressionStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionStatementContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    ExpressionStatementContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    Object.defineProperty(ExpressionStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_expressionStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpressionStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterExpressionStatement) {
            listener.enterExpressionStatement(this);
        }
    };
    // @Override
    ExpressionStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitExpressionStatement) {
            listener.exitExpressionStatement(this);
        }
    };
    // @Override
    ExpressionStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitExpressionStatement) {
            return visitor.visitExpressionStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpressionStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionStatementContext = ExpressionStatementContext;
var IfStatementContext = /** @class */ (function (_super) {
    __extends(IfStatementContext, _super);
    function IfStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfStatementContext.prototype.If = function () { return this.getToken(JavaScriptParser.If, 0); };
    IfStatementContext.prototype.OpenParen = function () { return this.getToken(JavaScriptParser.OpenParen, 0); };
    IfStatementContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    IfStatementContext.prototype.CloseParen = function () { return this.getToken(JavaScriptParser.CloseParen, 0); };
    IfStatementContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    IfStatementContext.prototype.Else = function () { return this.tryGetToken(JavaScriptParser.Else, 0); };
    Object.defineProperty(IfStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_ifStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IfStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterIfStatement) {
            listener.enterIfStatement(this);
        }
    };
    // @Override
    IfStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitIfStatement) {
            listener.exitIfStatement(this);
        }
    };
    // @Override
    IfStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitIfStatement) {
            return visitor.visitIfStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IfStatementContext = IfStatementContext;
var IterationStatementContext = /** @class */ (function (_super) {
    __extends(IterationStatementContext, _super);
    function IterationStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(IterationStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_iterationStatement; },
        enumerable: true,
        configurable: true
    });
    IterationStatementContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return IterationStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IterationStatementContext = IterationStatementContext;
var DoStatementContext = /** @class */ (function (_super) {
    __extends(DoStatementContext, _super);
    function DoStatementContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    DoStatementContext.prototype.Do = function () { return this.getToken(JavaScriptParser.Do, 0); };
    DoStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    DoStatementContext.prototype.While = function () { return this.getToken(JavaScriptParser.While, 0); };
    DoStatementContext.prototype.OpenParen = function () { return this.getToken(JavaScriptParser.OpenParen, 0); };
    DoStatementContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    DoStatementContext.prototype.CloseParen = function () { return this.getToken(JavaScriptParser.CloseParen, 0); };
    DoStatementContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    // @Override
    DoStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterDoStatement) {
            listener.enterDoStatement(this);
        }
    };
    // @Override
    DoStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitDoStatement) {
            listener.exitDoStatement(this);
        }
    };
    // @Override
    DoStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitDoStatement) {
            return visitor.visitDoStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DoStatementContext;
}(IterationStatementContext));
exports.DoStatementContext = DoStatementContext;
var WhileStatementContext = /** @class */ (function (_super) {
    __extends(WhileStatementContext, _super);
    function WhileStatementContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    WhileStatementContext.prototype.While = function () { return this.getToken(JavaScriptParser.While, 0); };
    WhileStatementContext.prototype.OpenParen = function () { return this.getToken(JavaScriptParser.OpenParen, 0); };
    WhileStatementContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    WhileStatementContext.prototype.CloseParen = function () { return this.getToken(JavaScriptParser.CloseParen, 0); };
    WhileStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    // @Override
    WhileStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterWhileStatement) {
            listener.enterWhileStatement(this);
        }
    };
    // @Override
    WhileStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitWhileStatement) {
            listener.exitWhileStatement(this);
        }
    };
    // @Override
    WhileStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitWhileStatement) {
            return visitor.visitWhileStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WhileStatementContext;
}(IterationStatementContext));
exports.WhileStatementContext = WhileStatementContext;
var ForStatementContext = /** @class */ (function (_super) {
    __extends(ForStatementContext, _super);
    function ForStatementContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ForStatementContext.prototype.For = function () { return this.getToken(JavaScriptParser.For, 0); };
    ForStatementContext.prototype.OpenParen = function () { return this.getToken(JavaScriptParser.OpenParen, 0); };
    ForStatementContext.prototype.SemiColon = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaScriptParser.SemiColon);
        }
        else {
            return this.getToken(JavaScriptParser.SemiColon, i);
        }
    };
    ForStatementContext.prototype.CloseParen = function () { return this.getToken(JavaScriptParser.CloseParen, 0); };
    ForStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    ForStatementContext.prototype.expressionSequence = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionSequenceContext);
        }
        else {
            return this.getRuleContext(i, ExpressionSequenceContext);
        }
    };
    ForStatementContext.prototype.variableStatement = function () {
        return this.tryGetRuleContext(0, VariableStatementContext);
    };
    // @Override
    ForStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterForStatement) {
            listener.enterForStatement(this);
        }
    };
    // @Override
    ForStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitForStatement) {
            listener.exitForStatement(this);
        }
    };
    // @Override
    ForStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitForStatement) {
            return visitor.visitForStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForStatementContext;
}(IterationStatementContext));
exports.ForStatementContext = ForStatementContext;
var ForInStatementContext = /** @class */ (function (_super) {
    __extends(ForInStatementContext, _super);
    function ForInStatementContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ForInStatementContext.prototype.For = function () { return this.getToken(JavaScriptParser.For, 0); };
    ForInStatementContext.prototype.OpenParen = function () { return this.getToken(JavaScriptParser.OpenParen, 0); };
    ForInStatementContext.prototype.In = function () { return this.getToken(JavaScriptParser.In, 0); };
    ForInStatementContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    ForInStatementContext.prototype.CloseParen = function () { return this.getToken(JavaScriptParser.CloseParen, 0); };
    ForInStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    ForInStatementContext.prototype.singleExpression = function () {
        return this.tryGetRuleContext(0, SingleExpressionContext);
    };
    ForInStatementContext.prototype.variableStatement = function () {
        return this.tryGetRuleContext(0, VariableStatementContext);
    };
    // @Override
    ForInStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterForInStatement) {
            listener.enterForInStatement(this);
        }
    };
    // @Override
    ForInStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitForInStatement) {
            listener.exitForInStatement(this);
        }
    };
    // @Override
    ForInStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitForInStatement) {
            return visitor.visitForInStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForInStatementContext;
}(IterationStatementContext));
exports.ForInStatementContext = ForInStatementContext;
var ForOfStatementContext = /** @class */ (function (_super) {
    __extends(ForOfStatementContext, _super);
    function ForOfStatementContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ForOfStatementContext.prototype.For = function () { return this.getToken(JavaScriptParser.For, 0); };
    ForOfStatementContext.prototype.OpenParen = function () { return this.getToken(JavaScriptParser.OpenParen, 0); };
    ForOfStatementContext.prototype.Identifier = function () { return this.getToken(JavaScriptParser.Identifier, 0); };
    ForOfStatementContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    ForOfStatementContext.prototype.CloseParen = function () { return this.getToken(JavaScriptParser.CloseParen, 0); };
    ForOfStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    ForOfStatementContext.prototype.singleExpression = function () {
        return this.tryGetRuleContext(0, SingleExpressionContext);
    };
    ForOfStatementContext.prototype.variableStatement = function () {
        return this.tryGetRuleContext(0, VariableStatementContext);
    };
    ForOfStatementContext.prototype.Await = function () { return this.tryGetToken(JavaScriptParser.Await, 0); };
    // @Override
    ForOfStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterForOfStatement) {
            listener.enterForOfStatement(this);
        }
    };
    // @Override
    ForOfStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitForOfStatement) {
            listener.exitForOfStatement(this);
        }
    };
    // @Override
    ForOfStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitForOfStatement) {
            return visitor.visitForOfStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForOfStatementContext;
}(IterationStatementContext));
exports.ForOfStatementContext = ForOfStatementContext;
var VarModifierContext = /** @class */ (function (_super) {
    __extends(VarModifierContext, _super);
    function VarModifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VarModifierContext.prototype.Var = function () { return this.tryGetToken(JavaScriptParser.Var, 0); };
    VarModifierContext.prototype.Let = function () { return this.tryGetToken(JavaScriptParser.Let, 0); };
    VarModifierContext.prototype.Const = function () { return this.tryGetToken(JavaScriptParser.Const, 0); };
    Object.defineProperty(VarModifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_varModifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VarModifierContext.prototype.enterRule = function (listener) {
        if (listener.enterVarModifier) {
            listener.enterVarModifier(this);
        }
    };
    // @Override
    VarModifierContext.prototype.exitRule = function (listener) {
        if (listener.exitVarModifier) {
            listener.exitVarModifier(this);
        }
    };
    // @Override
    VarModifierContext.prototype.accept = function (visitor) {
        if (visitor.visitVarModifier) {
            return visitor.visitVarModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VarModifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VarModifierContext = VarModifierContext;
var ContinueStatementContext = /** @class */ (function (_super) {
    __extends(ContinueStatementContext, _super);
    function ContinueStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ContinueStatementContext.prototype.Continue = function () { return this.getToken(JavaScriptParser.Continue, 0); };
    ContinueStatementContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    ContinueStatementContext.prototype.Identifier = function () { return this.tryGetToken(JavaScriptParser.Identifier, 0); };
    Object.defineProperty(ContinueStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_continueStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ContinueStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterContinueStatement) {
            listener.enterContinueStatement(this);
        }
    };
    // @Override
    ContinueStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitContinueStatement) {
            listener.exitContinueStatement(this);
        }
    };
    // @Override
    ContinueStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitContinueStatement) {
            return visitor.visitContinueStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ContinueStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ContinueStatementContext = ContinueStatementContext;
var BreakStatementContext = /** @class */ (function (_super) {
    __extends(BreakStatementContext, _super);
    function BreakStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BreakStatementContext.prototype.Break = function () { return this.getToken(JavaScriptParser.Break, 0); };
    BreakStatementContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    BreakStatementContext.prototype.Identifier = function () { return this.tryGetToken(JavaScriptParser.Identifier, 0); };
    Object.defineProperty(BreakStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_breakStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BreakStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterBreakStatement) {
            listener.enterBreakStatement(this);
        }
    };
    // @Override
    BreakStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitBreakStatement) {
            listener.exitBreakStatement(this);
        }
    };
    // @Override
    BreakStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitBreakStatement) {
            return visitor.visitBreakStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BreakStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BreakStatementContext = BreakStatementContext;
var ReturnStatementContext = /** @class */ (function (_super) {
    __extends(ReturnStatementContext, _super);
    function ReturnStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReturnStatementContext.prototype.Return = function () { return this.getToken(JavaScriptParser.Return, 0); };
    ReturnStatementContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    ReturnStatementContext.prototype.expressionSequence = function () {
        return this.tryGetRuleContext(0, ExpressionSequenceContext);
    };
    Object.defineProperty(ReturnStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_returnStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReturnStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterReturnStatement) {
            listener.enterReturnStatement(this);
        }
    };
    // @Override
    ReturnStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitReturnStatement) {
            listener.exitReturnStatement(this);
        }
    };
    // @Override
    ReturnStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitReturnStatement) {
            return visitor.visitReturnStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReturnStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReturnStatementContext = ReturnStatementContext;
var YieldStatementContext = /** @class */ (function (_super) {
    __extends(YieldStatementContext, _super);
    function YieldStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    YieldStatementContext.prototype.Yield = function () { return this.getToken(JavaScriptParser.Yield, 0); };
    YieldStatementContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    YieldStatementContext.prototype.expressionSequence = function () {
        return this.tryGetRuleContext(0, ExpressionSequenceContext);
    };
    Object.defineProperty(YieldStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_yieldStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    YieldStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterYieldStatement) {
            listener.enterYieldStatement(this);
        }
    };
    // @Override
    YieldStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitYieldStatement) {
            listener.exitYieldStatement(this);
        }
    };
    // @Override
    YieldStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitYieldStatement) {
            return visitor.visitYieldStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return YieldStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.YieldStatementContext = YieldStatementContext;
var WithStatementContext = /** @class */ (function (_super) {
    __extends(WithStatementContext, _super);
    function WithStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WithStatementContext.prototype.With = function () { return this.getToken(JavaScriptParser.With, 0); };
    WithStatementContext.prototype.OpenParen = function () { return this.getToken(JavaScriptParser.OpenParen, 0); };
    WithStatementContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    WithStatementContext.prototype.CloseParen = function () { return this.getToken(JavaScriptParser.CloseParen, 0); };
    WithStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    Object.defineProperty(WithStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_withStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WithStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterWithStatement) {
            listener.enterWithStatement(this);
        }
    };
    // @Override
    WithStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitWithStatement) {
            listener.exitWithStatement(this);
        }
    };
    // @Override
    WithStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitWithStatement) {
            return visitor.visitWithStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WithStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WithStatementContext = WithStatementContext;
var SwitchStatementContext = /** @class */ (function (_super) {
    __extends(SwitchStatementContext, _super);
    function SwitchStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SwitchStatementContext.prototype.Switch = function () { return this.getToken(JavaScriptParser.Switch, 0); };
    SwitchStatementContext.prototype.OpenParen = function () { return this.getToken(JavaScriptParser.OpenParen, 0); };
    SwitchStatementContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    SwitchStatementContext.prototype.CloseParen = function () { return this.getToken(JavaScriptParser.CloseParen, 0); };
    SwitchStatementContext.prototype.caseBlock = function () {
        return this.getRuleContext(0, CaseBlockContext);
    };
    Object.defineProperty(SwitchStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_switchStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SwitchStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterSwitchStatement) {
            listener.enterSwitchStatement(this);
        }
    };
    // @Override
    SwitchStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitSwitchStatement) {
            listener.exitSwitchStatement(this);
        }
    };
    // @Override
    SwitchStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitSwitchStatement) {
            return visitor.visitSwitchStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SwitchStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SwitchStatementContext = SwitchStatementContext;
var CaseBlockContext = /** @class */ (function (_super) {
    __extends(CaseBlockContext, _super);
    function CaseBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CaseBlockContext.prototype.OpenBrace = function () { return this.getToken(JavaScriptParser.OpenBrace, 0); };
    CaseBlockContext.prototype.CloseBrace = function () { return this.getToken(JavaScriptParser.CloseBrace, 0); };
    CaseBlockContext.prototype.caseClauses = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CaseClausesContext);
        }
        else {
            return this.getRuleContext(i, CaseClausesContext);
        }
    };
    CaseBlockContext.prototype.defaultClause = function () {
        return this.tryGetRuleContext(0, DefaultClauseContext);
    };
    Object.defineProperty(CaseBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_caseBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CaseBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterCaseBlock) {
            listener.enterCaseBlock(this);
        }
    };
    // @Override
    CaseBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitCaseBlock) {
            listener.exitCaseBlock(this);
        }
    };
    // @Override
    CaseBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitCaseBlock) {
            return visitor.visitCaseBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CaseBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CaseBlockContext = CaseBlockContext;
var CaseClausesContext = /** @class */ (function (_super) {
    __extends(CaseClausesContext, _super);
    function CaseClausesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CaseClausesContext.prototype.caseClause = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CaseClauseContext);
        }
        else {
            return this.getRuleContext(i, CaseClauseContext);
        }
    };
    Object.defineProperty(CaseClausesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_caseClauses; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CaseClausesContext.prototype.enterRule = function (listener) {
        if (listener.enterCaseClauses) {
            listener.enterCaseClauses(this);
        }
    };
    // @Override
    CaseClausesContext.prototype.exitRule = function (listener) {
        if (listener.exitCaseClauses) {
            listener.exitCaseClauses(this);
        }
    };
    // @Override
    CaseClausesContext.prototype.accept = function (visitor) {
        if (visitor.visitCaseClauses) {
            return visitor.visitCaseClauses(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CaseClausesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CaseClausesContext = CaseClausesContext;
var CaseClauseContext = /** @class */ (function (_super) {
    __extends(CaseClauseContext, _super);
    function CaseClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CaseClauseContext.prototype.Case = function () { return this.getToken(JavaScriptParser.Case, 0); };
    CaseClauseContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    CaseClauseContext.prototype.Colon = function () { return this.getToken(JavaScriptParser.Colon, 0); };
    CaseClauseContext.prototype.statementList = function () {
        return this.tryGetRuleContext(0, StatementListContext);
    };
    Object.defineProperty(CaseClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_caseClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CaseClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterCaseClause) {
            listener.enterCaseClause(this);
        }
    };
    // @Override
    CaseClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitCaseClause) {
            listener.exitCaseClause(this);
        }
    };
    // @Override
    CaseClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitCaseClause) {
            return visitor.visitCaseClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CaseClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CaseClauseContext = CaseClauseContext;
var DefaultClauseContext = /** @class */ (function (_super) {
    __extends(DefaultClauseContext, _super);
    function DefaultClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefaultClauseContext.prototype.Default = function () { return this.getToken(JavaScriptParser.Default, 0); };
    DefaultClauseContext.prototype.Colon = function () { return this.getToken(JavaScriptParser.Colon, 0); };
    DefaultClauseContext.prototype.statementList = function () {
        return this.tryGetRuleContext(0, StatementListContext);
    };
    Object.defineProperty(DefaultClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_defaultClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefaultClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterDefaultClause) {
            listener.enterDefaultClause(this);
        }
    };
    // @Override
    DefaultClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitDefaultClause) {
            listener.exitDefaultClause(this);
        }
    };
    // @Override
    DefaultClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitDefaultClause) {
            return visitor.visitDefaultClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefaultClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefaultClauseContext = DefaultClauseContext;
var LabelledStatementContext = /** @class */ (function (_super) {
    __extends(LabelledStatementContext, _super);
    function LabelledStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LabelledStatementContext.prototype.Identifier = function () { return this.getToken(JavaScriptParser.Identifier, 0); };
    LabelledStatementContext.prototype.Colon = function () { return this.getToken(JavaScriptParser.Colon, 0); };
    LabelledStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    Object.defineProperty(LabelledStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_labelledStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LabelledStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterLabelledStatement) {
            listener.enterLabelledStatement(this);
        }
    };
    // @Override
    LabelledStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitLabelledStatement) {
            listener.exitLabelledStatement(this);
        }
    };
    // @Override
    LabelledStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitLabelledStatement) {
            return visitor.visitLabelledStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LabelledStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LabelledStatementContext = LabelledStatementContext;
var ThrowStatementContext = /** @class */ (function (_super) {
    __extends(ThrowStatementContext, _super);
    function ThrowStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ThrowStatementContext.prototype.Throw = function () { return this.getToken(JavaScriptParser.Throw, 0); };
    ThrowStatementContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    ThrowStatementContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    Object.defineProperty(ThrowStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_throwStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ThrowStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterThrowStatement) {
            listener.enterThrowStatement(this);
        }
    };
    // @Override
    ThrowStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitThrowStatement) {
            listener.exitThrowStatement(this);
        }
    };
    // @Override
    ThrowStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitThrowStatement) {
            return visitor.visitThrowStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ThrowStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ThrowStatementContext = ThrowStatementContext;
var TryStatementContext = /** @class */ (function (_super) {
    __extends(TryStatementContext, _super);
    function TryStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TryStatementContext.prototype.Try = function () { return this.getToken(JavaScriptParser.Try, 0); };
    TryStatementContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    TryStatementContext.prototype.catchProduction = function () {
        return this.tryGetRuleContext(0, CatchProductionContext);
    };
    TryStatementContext.prototype.finallyProduction = function () {
        return this.tryGetRuleContext(0, FinallyProductionContext);
    };
    Object.defineProperty(TryStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_tryStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TryStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterTryStatement) {
            listener.enterTryStatement(this);
        }
    };
    // @Override
    TryStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitTryStatement) {
            listener.exitTryStatement(this);
        }
    };
    // @Override
    TryStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitTryStatement) {
            return visitor.visitTryStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TryStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TryStatementContext = TryStatementContext;
var CatchProductionContext = /** @class */ (function (_super) {
    __extends(CatchProductionContext, _super);
    function CatchProductionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CatchProductionContext.prototype.Catch = function () { return this.getToken(JavaScriptParser.Catch, 0); };
    CatchProductionContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    CatchProductionContext.prototype.OpenParen = function () { return this.tryGetToken(JavaScriptParser.OpenParen, 0); };
    CatchProductionContext.prototype.CloseParen = function () { return this.tryGetToken(JavaScriptParser.CloseParen, 0); };
    CatchProductionContext.prototype.assignable = function () {
        return this.tryGetRuleContext(0, AssignableContext);
    };
    Object.defineProperty(CatchProductionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_catchProduction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CatchProductionContext.prototype.enterRule = function (listener) {
        if (listener.enterCatchProduction) {
            listener.enterCatchProduction(this);
        }
    };
    // @Override
    CatchProductionContext.prototype.exitRule = function (listener) {
        if (listener.exitCatchProduction) {
            listener.exitCatchProduction(this);
        }
    };
    // @Override
    CatchProductionContext.prototype.accept = function (visitor) {
        if (visitor.visitCatchProduction) {
            return visitor.visitCatchProduction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CatchProductionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CatchProductionContext = CatchProductionContext;
var FinallyProductionContext = /** @class */ (function (_super) {
    __extends(FinallyProductionContext, _super);
    function FinallyProductionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FinallyProductionContext.prototype.Finally = function () { return this.getToken(JavaScriptParser.Finally, 0); };
    FinallyProductionContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    Object.defineProperty(FinallyProductionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_finallyProduction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FinallyProductionContext.prototype.enterRule = function (listener) {
        if (listener.enterFinallyProduction) {
            listener.enterFinallyProduction(this);
        }
    };
    // @Override
    FinallyProductionContext.prototype.exitRule = function (listener) {
        if (listener.exitFinallyProduction) {
            listener.exitFinallyProduction(this);
        }
    };
    // @Override
    FinallyProductionContext.prototype.accept = function (visitor) {
        if (visitor.visitFinallyProduction) {
            return visitor.visitFinallyProduction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FinallyProductionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FinallyProductionContext = FinallyProductionContext;
var DebuggerStatementContext = /** @class */ (function (_super) {
    __extends(DebuggerStatementContext, _super);
    function DebuggerStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DebuggerStatementContext.prototype.Debugger = function () { return this.getToken(JavaScriptParser.Debugger, 0); };
    DebuggerStatementContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    Object.defineProperty(DebuggerStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_debuggerStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DebuggerStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterDebuggerStatement) {
            listener.enterDebuggerStatement(this);
        }
    };
    // @Override
    DebuggerStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitDebuggerStatement) {
            listener.exitDebuggerStatement(this);
        }
    };
    // @Override
    DebuggerStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitDebuggerStatement) {
            return visitor.visitDebuggerStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DebuggerStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DebuggerStatementContext = DebuggerStatementContext;
var FunctionDeclarationContext = /** @class */ (function (_super) {
    __extends(FunctionDeclarationContext, _super);
    function FunctionDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionDeclarationContext.prototype.Function = function () { return this.getToken(JavaScriptParser.Function, 0); };
    FunctionDeclarationContext.prototype.Identifier = function () { return this.getToken(JavaScriptParser.Identifier, 0); };
    FunctionDeclarationContext.prototype.OpenParen = function () { return this.getToken(JavaScriptParser.OpenParen, 0); };
    FunctionDeclarationContext.prototype.CloseParen = function () { return this.getToken(JavaScriptParser.CloseParen, 0); };
    FunctionDeclarationContext.prototype.OpenBrace = function () { return this.getToken(JavaScriptParser.OpenBrace, 0); };
    FunctionDeclarationContext.prototype.functionBody = function () {
        return this.getRuleContext(0, FunctionBodyContext);
    };
    FunctionDeclarationContext.prototype.CloseBrace = function () { return this.getToken(JavaScriptParser.CloseBrace, 0); };
    FunctionDeclarationContext.prototype.Async = function () { return this.tryGetToken(JavaScriptParser.Async, 0); };
    FunctionDeclarationContext.prototype.Multiply = function () { return this.tryGetToken(JavaScriptParser.Multiply, 0); };
    FunctionDeclarationContext.prototype.formalParameterList = function () {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    };
    Object.defineProperty(FunctionDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_functionDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionDeclaration) {
            listener.enterFunctionDeclaration(this);
        }
    };
    // @Override
    FunctionDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionDeclaration) {
            listener.exitFunctionDeclaration(this);
        }
    };
    // @Override
    FunctionDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionDeclaration) {
            return visitor.visitFunctionDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionDeclarationContext = FunctionDeclarationContext;
var ClassDeclarationContext = /** @class */ (function (_super) {
    __extends(ClassDeclarationContext, _super);
    function ClassDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassDeclarationContext.prototype.Class = function () { return this.getToken(JavaScriptParser.Class, 0); };
    ClassDeclarationContext.prototype.Identifier = function () { return this.getToken(JavaScriptParser.Identifier, 0); };
    ClassDeclarationContext.prototype.classTail = function () {
        return this.getRuleContext(0, ClassTailContext);
    };
    Object.defineProperty(ClassDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_classDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterClassDeclaration) {
            listener.enterClassDeclaration(this);
        }
    };
    // @Override
    ClassDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitClassDeclaration) {
            listener.exitClassDeclaration(this);
        }
    };
    // @Override
    ClassDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitClassDeclaration) {
            return visitor.visitClassDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassDeclarationContext = ClassDeclarationContext;
var ClassTailContext = /** @class */ (function (_super) {
    __extends(ClassTailContext, _super);
    function ClassTailContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassTailContext.prototype.OpenBrace = function () { return this.getToken(JavaScriptParser.OpenBrace, 0); };
    ClassTailContext.prototype.CloseBrace = function () { return this.getToken(JavaScriptParser.CloseBrace, 0); };
    ClassTailContext.prototype.Extends = function () { return this.tryGetToken(JavaScriptParser.Extends, 0); };
    ClassTailContext.prototype.singleExpression = function () {
        return this.tryGetRuleContext(0, SingleExpressionContext);
    };
    ClassTailContext.prototype.classElement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassElementContext);
        }
        else {
            return this.getRuleContext(i, ClassElementContext);
        }
    };
    Object.defineProperty(ClassTailContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_classTail; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassTailContext.prototype.enterRule = function (listener) {
        if (listener.enterClassTail) {
            listener.enterClassTail(this);
        }
    };
    // @Override
    ClassTailContext.prototype.exitRule = function (listener) {
        if (listener.exitClassTail) {
            listener.exitClassTail(this);
        }
    };
    // @Override
    ClassTailContext.prototype.accept = function (visitor) {
        if (visitor.visitClassTail) {
            return visitor.visitClassTail(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassTailContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassTailContext = ClassTailContext;
var ClassElementContext = /** @class */ (function (_super) {
    __extends(ClassElementContext, _super);
    function ClassElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassElementContext.prototype.methodDefinition = function () {
        return this.tryGetRuleContext(0, MethodDefinitionContext);
    };
    ClassElementContext.prototype.Static = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaScriptParser.Static);
        }
        else {
            return this.getToken(JavaScriptParser.Static, i);
        }
    };
    ClassElementContext.prototype.Identifier = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaScriptParser.Identifier);
        }
        else {
            return this.getToken(JavaScriptParser.Identifier, i);
        }
    };
    ClassElementContext.prototype.Async = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaScriptParser.Async);
        }
        else {
            return this.getToken(JavaScriptParser.Async, i);
        }
    };
    ClassElementContext.prototype.emptyStatement = function () {
        return this.tryGetRuleContext(0, EmptyStatementContext);
    };
    ClassElementContext.prototype.propertyName = function () {
        return this.tryGetRuleContext(0, PropertyNameContext);
    };
    ClassElementContext.prototype.Assign = function () { return this.tryGetToken(JavaScriptParser.Assign, 0); };
    ClassElementContext.prototype.singleExpression = function () {
        return this.tryGetRuleContext(0, SingleExpressionContext);
    };
    ClassElementContext.prototype.Hashtag = function () { return this.tryGetToken(JavaScriptParser.Hashtag, 0); };
    Object.defineProperty(ClassElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_classElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassElementContext.prototype.enterRule = function (listener) {
        if (listener.enterClassElement) {
            listener.enterClassElement(this);
        }
    };
    // @Override
    ClassElementContext.prototype.exitRule = function (listener) {
        if (listener.exitClassElement) {
            listener.exitClassElement(this);
        }
    };
    // @Override
    ClassElementContext.prototype.accept = function (visitor) {
        if (visitor.visitClassElement) {
            return visitor.visitClassElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassElementContext = ClassElementContext;
var MethodDefinitionContext = /** @class */ (function (_super) {
    __extends(MethodDefinitionContext, _super);
    function MethodDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MethodDefinitionContext.prototype.propertyName = function () {
        return this.tryGetRuleContext(0, PropertyNameContext);
    };
    MethodDefinitionContext.prototype.OpenParen = function () { return this.getToken(JavaScriptParser.OpenParen, 0); };
    MethodDefinitionContext.prototype.CloseParen = function () { return this.getToken(JavaScriptParser.CloseParen, 0); };
    MethodDefinitionContext.prototype.OpenBrace = function () { return this.getToken(JavaScriptParser.OpenBrace, 0); };
    MethodDefinitionContext.prototype.functionBody = function () {
        return this.getRuleContext(0, FunctionBodyContext);
    };
    MethodDefinitionContext.prototype.CloseBrace = function () { return this.getToken(JavaScriptParser.CloseBrace, 0); };
    MethodDefinitionContext.prototype.Multiply = function () { return this.tryGetToken(JavaScriptParser.Multiply, 0); };
    MethodDefinitionContext.prototype.Hashtag = function () { return this.tryGetToken(JavaScriptParser.Hashtag, 0); };
    MethodDefinitionContext.prototype.formalParameterList = function () {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    };
    MethodDefinitionContext.prototype.getter = function () {
        return this.tryGetRuleContext(0, GetterContext);
    };
    MethodDefinitionContext.prototype.setter = function () {
        return this.tryGetRuleContext(0, SetterContext);
    };
    Object.defineProperty(MethodDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_methodDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MethodDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterMethodDefinition) {
            listener.enterMethodDefinition(this);
        }
    };
    // @Override
    MethodDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitMethodDefinition) {
            listener.exitMethodDefinition(this);
        }
    };
    // @Override
    MethodDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitMethodDefinition) {
            return visitor.visitMethodDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MethodDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MethodDefinitionContext = MethodDefinitionContext;
var FormalParameterListContext = /** @class */ (function (_super) {
    __extends(FormalParameterListContext, _super);
    function FormalParameterListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormalParameterListContext.prototype.formalParameterArg = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FormalParameterArgContext);
        }
        else {
            return this.getRuleContext(i, FormalParameterArgContext);
        }
    };
    FormalParameterListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaScriptParser.Comma);
        }
        else {
            return this.getToken(JavaScriptParser.Comma, i);
        }
    };
    FormalParameterListContext.prototype.lastFormalParameterArg = function () {
        return this.tryGetRuleContext(0, LastFormalParameterArgContext);
    };
    Object.defineProperty(FormalParameterListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_formalParameterList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormalParameterListContext.prototype.enterRule = function (listener) {
        if (listener.enterFormalParameterList) {
            listener.enterFormalParameterList(this);
        }
    };
    // @Override
    FormalParameterListContext.prototype.exitRule = function (listener) {
        if (listener.exitFormalParameterList) {
            listener.exitFormalParameterList(this);
        }
    };
    // @Override
    FormalParameterListContext.prototype.accept = function (visitor) {
        if (visitor.visitFormalParameterList) {
            return visitor.visitFormalParameterList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormalParameterListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormalParameterListContext = FormalParameterListContext;
var FormalParameterArgContext = /** @class */ (function (_super) {
    __extends(FormalParameterArgContext, _super);
    function FormalParameterArgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormalParameterArgContext.prototype.assignable = function () {
        return this.getRuleContext(0, AssignableContext);
    };
    FormalParameterArgContext.prototype.Assign = function () { return this.tryGetToken(JavaScriptParser.Assign, 0); };
    FormalParameterArgContext.prototype.singleExpression = function () {
        return this.tryGetRuleContext(0, SingleExpressionContext);
    };
    Object.defineProperty(FormalParameterArgContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_formalParameterArg; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormalParameterArgContext.prototype.enterRule = function (listener) {
        if (listener.enterFormalParameterArg) {
            listener.enterFormalParameterArg(this);
        }
    };
    // @Override
    FormalParameterArgContext.prototype.exitRule = function (listener) {
        if (listener.exitFormalParameterArg) {
            listener.exitFormalParameterArg(this);
        }
    };
    // @Override
    FormalParameterArgContext.prototype.accept = function (visitor) {
        if (visitor.visitFormalParameterArg) {
            return visitor.visitFormalParameterArg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormalParameterArgContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormalParameterArgContext = FormalParameterArgContext;
var LastFormalParameterArgContext = /** @class */ (function (_super) {
    __extends(LastFormalParameterArgContext, _super);
    function LastFormalParameterArgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LastFormalParameterArgContext.prototype.Ellipsis = function () { return this.getToken(JavaScriptParser.Ellipsis, 0); };
    LastFormalParameterArgContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    Object.defineProperty(LastFormalParameterArgContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_lastFormalParameterArg; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LastFormalParameterArgContext.prototype.enterRule = function (listener) {
        if (listener.enterLastFormalParameterArg) {
            listener.enterLastFormalParameterArg(this);
        }
    };
    // @Override
    LastFormalParameterArgContext.prototype.exitRule = function (listener) {
        if (listener.exitLastFormalParameterArg) {
            listener.exitLastFormalParameterArg(this);
        }
    };
    // @Override
    LastFormalParameterArgContext.prototype.accept = function (visitor) {
        if (visitor.visitLastFormalParameterArg) {
            return visitor.visitLastFormalParameterArg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LastFormalParameterArgContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LastFormalParameterArgContext = LastFormalParameterArgContext;
var FunctionBodyContext = /** @class */ (function (_super) {
    __extends(FunctionBodyContext, _super);
    function FunctionBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionBodyContext.prototype.sourceElements = function () {
        return this.tryGetRuleContext(0, SourceElementsContext);
    };
    Object.defineProperty(FunctionBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_functionBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionBody) {
            listener.enterFunctionBody(this);
        }
    };
    // @Override
    FunctionBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionBody) {
            listener.exitFunctionBody(this);
        }
    };
    // @Override
    FunctionBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionBody) {
            return visitor.visitFunctionBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionBodyContext = FunctionBodyContext;
var SourceElementsContext = /** @class */ (function (_super) {
    __extends(SourceElementsContext, _super);
    function SourceElementsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SourceElementsContext.prototype.sourceElement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SourceElementContext);
        }
        else {
            return this.getRuleContext(i, SourceElementContext);
        }
    };
    Object.defineProperty(SourceElementsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_sourceElements; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SourceElementsContext.prototype.enterRule = function (listener) {
        if (listener.enterSourceElements) {
            listener.enterSourceElements(this);
        }
    };
    // @Override
    SourceElementsContext.prototype.exitRule = function (listener) {
        if (listener.exitSourceElements) {
            listener.exitSourceElements(this);
        }
    };
    // @Override
    SourceElementsContext.prototype.accept = function (visitor) {
        if (visitor.visitSourceElements) {
            return visitor.visitSourceElements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SourceElementsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SourceElementsContext = SourceElementsContext;
var ArrayLiteralContext = /** @class */ (function (_super) {
    __extends(ArrayLiteralContext, _super);
    function ArrayLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayLiteralContext.prototype.OpenBracket = function () { return this.tryGetToken(JavaScriptParser.OpenBracket, 0); };
    ArrayLiteralContext.prototype.elementList = function () {
        return this.tryGetRuleContext(0, ElementListContext);
    };
    ArrayLiteralContext.prototype.CloseBracket = function () { return this.tryGetToken(JavaScriptParser.CloseBracket, 0); };
    Object.defineProperty(ArrayLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_arrayLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrayLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayLiteral) {
            listener.enterArrayLiteral(this);
        }
    };
    // @Override
    ArrayLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayLiteral) {
            listener.exitArrayLiteral(this);
        }
    };
    // @Override
    ArrayLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayLiteral) {
            return visitor.visitArrayLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrayLiteralContext = ArrayLiteralContext;
var ElementListContext = /** @class */ (function (_super) {
    __extends(ElementListContext, _super);
    function ElementListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaScriptParser.Comma);
        }
        else {
            return this.getToken(JavaScriptParser.Comma, i);
        }
    };
    ElementListContext.prototype.arrayElement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ArrayElementContext);
        }
        else {
            return this.getRuleContext(i, ArrayElementContext);
        }
    };
    Object.defineProperty(ElementListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_elementList; },
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
var ArrayElementContext = /** @class */ (function (_super) {
    __extends(ArrayElementContext, _super);
    function ArrayElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayElementContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    ArrayElementContext.prototype.Ellipsis = function () { return this.tryGetToken(JavaScriptParser.Ellipsis, 0); };
    Object.defineProperty(ArrayElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_arrayElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrayElementContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayElement) {
            listener.enterArrayElement(this);
        }
    };
    // @Override
    ArrayElementContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayElement) {
            listener.exitArrayElement(this);
        }
    };
    // @Override
    ArrayElementContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayElement) {
            return visitor.visitArrayElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrayElementContext = ArrayElementContext;
var ObjectLiteralContext = /** @class */ (function (_super) {
    __extends(ObjectLiteralContext, _super);
    function ObjectLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectLiteralContext.prototype.OpenBrace = function () { return this.getToken(JavaScriptParser.OpenBrace, 0); };
    ObjectLiteralContext.prototype.CloseBrace = function () { return this.getToken(JavaScriptParser.CloseBrace, 0); };
    ObjectLiteralContext.prototype.propertyAssignment = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PropertyAssignmentContext);
        }
        else {
            return this.getRuleContext(i, PropertyAssignmentContext);
        }
    };
    ObjectLiteralContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaScriptParser.Comma);
        }
        else {
            return this.getToken(JavaScriptParser.Comma, i);
        }
    };
    Object.defineProperty(ObjectLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_objectLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectLiteral) {
            listener.enterObjectLiteral(this);
        }
    };
    // @Override
    ObjectLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectLiteral) {
            listener.exitObjectLiteral(this);
        }
    };
    // @Override
    ObjectLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectLiteral) {
            return visitor.visitObjectLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectLiteralContext = ObjectLiteralContext;
var PropertyAssignmentContext = /** @class */ (function (_super) {
    __extends(PropertyAssignmentContext, _super);
    function PropertyAssignmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(PropertyAssignmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_propertyAssignment; },
        enumerable: true,
        configurable: true
    });
    PropertyAssignmentContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return PropertyAssignmentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertyAssignmentContext = PropertyAssignmentContext;
var PropertyExpressionAssignmentContext = /** @class */ (function (_super) {
    __extends(PropertyExpressionAssignmentContext, _super);
    function PropertyExpressionAssignmentContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PropertyExpressionAssignmentContext.prototype.propertyName = function () {
        return this.getRuleContext(0, PropertyNameContext);
    };
    PropertyExpressionAssignmentContext.prototype.Colon = function () { return this.getToken(JavaScriptParser.Colon, 0); };
    PropertyExpressionAssignmentContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    PropertyExpressionAssignmentContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertyExpressionAssignment) {
            listener.enterPropertyExpressionAssignment(this);
        }
    };
    // @Override
    PropertyExpressionAssignmentContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertyExpressionAssignment) {
            listener.exitPropertyExpressionAssignment(this);
        }
    };
    // @Override
    PropertyExpressionAssignmentContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertyExpressionAssignment) {
            return visitor.visitPropertyExpressionAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertyExpressionAssignmentContext;
}(PropertyAssignmentContext));
exports.PropertyExpressionAssignmentContext = PropertyExpressionAssignmentContext;
var ComputedPropertyExpressionAssignmentContext = /** @class */ (function (_super) {
    __extends(ComputedPropertyExpressionAssignmentContext, _super);
    function ComputedPropertyExpressionAssignmentContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ComputedPropertyExpressionAssignmentContext.prototype.OpenBracket = function () { return this.getToken(JavaScriptParser.OpenBracket, 0); };
    ComputedPropertyExpressionAssignmentContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    ComputedPropertyExpressionAssignmentContext.prototype.CloseBracket = function () { return this.getToken(JavaScriptParser.CloseBracket, 0); };
    ComputedPropertyExpressionAssignmentContext.prototype.Colon = function () { return this.getToken(JavaScriptParser.Colon, 0); };
    // @Override
    ComputedPropertyExpressionAssignmentContext.prototype.enterRule = function (listener) {
        if (listener.enterComputedPropertyExpressionAssignment) {
            listener.enterComputedPropertyExpressionAssignment(this);
        }
    };
    // @Override
    ComputedPropertyExpressionAssignmentContext.prototype.exitRule = function (listener) {
        if (listener.exitComputedPropertyExpressionAssignment) {
            listener.exitComputedPropertyExpressionAssignment(this);
        }
    };
    // @Override
    ComputedPropertyExpressionAssignmentContext.prototype.accept = function (visitor) {
        if (visitor.visitComputedPropertyExpressionAssignment) {
            return visitor.visitComputedPropertyExpressionAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ComputedPropertyExpressionAssignmentContext;
}(PropertyAssignmentContext));
exports.ComputedPropertyExpressionAssignmentContext = ComputedPropertyExpressionAssignmentContext;
var FunctionPropertyContext = /** @class */ (function (_super) {
    __extends(FunctionPropertyContext, _super);
    function FunctionPropertyContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    FunctionPropertyContext.prototype.propertyName = function () {
        return this.getRuleContext(0, PropertyNameContext);
    };
    FunctionPropertyContext.prototype.OpenParen = function () { return this.getToken(JavaScriptParser.OpenParen, 0); };
    FunctionPropertyContext.prototype.CloseParen = function () { return this.getToken(JavaScriptParser.CloseParen, 0); };
    FunctionPropertyContext.prototype.OpenBrace = function () { return this.getToken(JavaScriptParser.OpenBrace, 0); };
    FunctionPropertyContext.prototype.functionBody = function () {
        return this.getRuleContext(0, FunctionBodyContext);
    };
    FunctionPropertyContext.prototype.CloseBrace = function () { return this.getToken(JavaScriptParser.CloseBrace, 0); };
    FunctionPropertyContext.prototype.Async = function () { return this.tryGetToken(JavaScriptParser.Async, 0); };
    FunctionPropertyContext.prototype.Multiply = function () { return this.tryGetToken(JavaScriptParser.Multiply, 0); };
    FunctionPropertyContext.prototype.formalParameterList = function () {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    };
    // @Override
    FunctionPropertyContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionProperty) {
            listener.enterFunctionProperty(this);
        }
    };
    // @Override
    FunctionPropertyContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionProperty) {
            listener.exitFunctionProperty(this);
        }
    };
    // @Override
    FunctionPropertyContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionProperty) {
            return visitor.visitFunctionProperty(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionPropertyContext;
}(PropertyAssignmentContext));
exports.FunctionPropertyContext = FunctionPropertyContext;
var PropertyGetterContext = /** @class */ (function (_super) {
    __extends(PropertyGetterContext, _super);
    function PropertyGetterContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PropertyGetterContext.prototype.getter = function () {
        return this.getRuleContext(0, GetterContext);
    };
    PropertyGetterContext.prototype.OpenParen = function () { return this.getToken(JavaScriptParser.OpenParen, 0); };
    PropertyGetterContext.prototype.CloseParen = function () { return this.getToken(JavaScriptParser.CloseParen, 0); };
    PropertyGetterContext.prototype.OpenBrace = function () { return this.getToken(JavaScriptParser.OpenBrace, 0); };
    PropertyGetterContext.prototype.functionBody = function () {
        return this.getRuleContext(0, FunctionBodyContext);
    };
    PropertyGetterContext.prototype.CloseBrace = function () { return this.getToken(JavaScriptParser.CloseBrace, 0); };
    // @Override
    PropertyGetterContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertyGetter) {
            listener.enterPropertyGetter(this);
        }
    };
    // @Override
    PropertyGetterContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertyGetter) {
            listener.exitPropertyGetter(this);
        }
    };
    // @Override
    PropertyGetterContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertyGetter) {
            return visitor.visitPropertyGetter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertyGetterContext;
}(PropertyAssignmentContext));
exports.PropertyGetterContext = PropertyGetterContext;
var PropertySetterContext = /** @class */ (function (_super) {
    __extends(PropertySetterContext, _super);
    function PropertySetterContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PropertySetterContext.prototype.setter = function () {
        return this.getRuleContext(0, SetterContext);
    };
    PropertySetterContext.prototype.OpenParen = function () { return this.getToken(JavaScriptParser.OpenParen, 0); };
    PropertySetterContext.prototype.formalParameterArg = function () {
        return this.getRuleContext(0, FormalParameterArgContext);
    };
    PropertySetterContext.prototype.CloseParen = function () { return this.getToken(JavaScriptParser.CloseParen, 0); };
    PropertySetterContext.prototype.OpenBrace = function () { return this.getToken(JavaScriptParser.OpenBrace, 0); };
    PropertySetterContext.prototype.functionBody = function () {
        return this.getRuleContext(0, FunctionBodyContext);
    };
    PropertySetterContext.prototype.CloseBrace = function () { return this.getToken(JavaScriptParser.CloseBrace, 0); };
    // @Override
    PropertySetterContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertySetter) {
            listener.enterPropertySetter(this);
        }
    };
    // @Override
    PropertySetterContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertySetter) {
            listener.exitPropertySetter(this);
        }
    };
    // @Override
    PropertySetterContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertySetter) {
            return visitor.visitPropertySetter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertySetterContext;
}(PropertyAssignmentContext));
exports.PropertySetterContext = PropertySetterContext;
var PropertyShorthandContext = /** @class */ (function (_super) {
    __extends(PropertyShorthandContext, _super);
    function PropertyShorthandContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PropertyShorthandContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    PropertyShorthandContext.prototype.Ellipsis = function () { return this.tryGetToken(JavaScriptParser.Ellipsis, 0); };
    // @Override
    PropertyShorthandContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertyShorthand) {
            listener.enterPropertyShorthand(this);
        }
    };
    // @Override
    PropertyShorthandContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertyShorthand) {
            listener.exitPropertyShorthand(this);
        }
    };
    // @Override
    PropertyShorthandContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertyShorthand) {
            return visitor.visitPropertyShorthand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertyShorthandContext;
}(PropertyAssignmentContext));
exports.PropertyShorthandContext = PropertyShorthandContext;
var PropertyNameContext = /** @class */ (function (_super) {
    __extends(PropertyNameContext, _super);
    function PropertyNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropertyNameContext.prototype.identifierName = function () {
        return this.tryGetRuleContext(0, IdentifierNameContext);
    };
    PropertyNameContext.prototype.StringLiteral = function () { return this.tryGetToken(JavaScriptParser.StringLiteral, 0); };
    PropertyNameContext.prototype.numericLiteral = function () {
        return this.tryGetRuleContext(0, NumericLiteralContext);
    };
    PropertyNameContext.prototype.OpenBracket = function () { return this.tryGetToken(JavaScriptParser.OpenBracket, 0); };
    PropertyNameContext.prototype.singleExpression = function () {
        return this.tryGetRuleContext(0, SingleExpressionContext);
    };
    PropertyNameContext.prototype.CloseBracket = function () { return this.tryGetToken(JavaScriptParser.CloseBracket, 0); };
    Object.defineProperty(PropertyNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_propertyName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PropertyNameContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertyName) {
            listener.enterPropertyName(this);
        }
    };
    // @Override
    PropertyNameContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertyName) {
            listener.exitPropertyName(this);
        }
    };
    // @Override
    PropertyNameContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertyName) {
            return visitor.visitPropertyName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertyNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertyNameContext = PropertyNameContext;
var ArgumentsContext = /** @class */ (function (_super) {
    __extends(ArgumentsContext, _super);
    function ArgumentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentsContext.prototype.OpenParen = function () { return this.getToken(JavaScriptParser.OpenParen, 0); };
    ArgumentsContext.prototype.CloseParen = function () { return this.getToken(JavaScriptParser.CloseParen, 0); };
    ArgumentsContext.prototype.argument = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentContext);
        }
        else {
            return this.getRuleContext(i, ArgumentContext);
        }
    };
    ArgumentsContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaScriptParser.Comma);
        }
        else {
            return this.getToken(JavaScriptParser.Comma, i);
        }
    };
    Object.defineProperty(ArgumentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_arguments; },
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
var ArgumentContext = /** @class */ (function (_super) {
    __extends(ArgumentContext, _super);
    function ArgumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentContext.prototype.singleExpression = function () {
        return this.tryGetRuleContext(0, SingleExpressionContext);
    };
    ArgumentContext.prototype.Identifier = function () { return this.tryGetToken(JavaScriptParser.Identifier, 0); };
    ArgumentContext.prototype.Ellipsis = function () { return this.tryGetToken(JavaScriptParser.Ellipsis, 0); };
    Object.defineProperty(ArgumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_argument; },
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
var ExpressionSequenceContext = /** @class */ (function (_super) {
    __extends(ExpressionSequenceContext, _super);
    function ExpressionSequenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionSequenceContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    ExpressionSequenceContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(JavaScriptParser.Comma);
        }
        else {
            return this.getToken(JavaScriptParser.Comma, i);
        }
    };
    Object.defineProperty(ExpressionSequenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_expressionSequence; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpressionSequenceContext.prototype.enterRule = function (listener) {
        if (listener.enterExpressionSequence) {
            listener.enterExpressionSequence(this);
        }
    };
    // @Override
    ExpressionSequenceContext.prototype.exitRule = function (listener) {
        if (listener.exitExpressionSequence) {
            listener.exitExpressionSequence(this);
        }
    };
    // @Override
    ExpressionSequenceContext.prototype.accept = function (visitor) {
        if (visitor.visitExpressionSequence) {
            return visitor.visitExpressionSequence(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpressionSequenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionSequenceContext = ExpressionSequenceContext;
var SingleExpressionContext = /** @class */ (function (_super) {
    __extends(SingleExpressionContext, _super);
    function SingleExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(SingleExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_singleExpression; },
        enumerable: true,
        configurable: true
    });
    SingleExpressionContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return SingleExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SingleExpressionContext = SingleExpressionContext;
var FunctionExpressionContext = /** @class */ (function (_super) {
    __extends(FunctionExpressionContext, _super);
    function FunctionExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    FunctionExpressionContext.prototype.anoymousFunction = function () {
        return this.getRuleContext(0, AnoymousFunctionContext);
    };
    // @Override
    FunctionExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionExpression) {
            listener.enterFunctionExpression(this);
        }
    };
    // @Override
    FunctionExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionExpression) {
            listener.exitFunctionExpression(this);
        }
    };
    // @Override
    FunctionExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionExpression) {
            return visitor.visitFunctionExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionExpressionContext;
}(SingleExpressionContext));
exports.FunctionExpressionContext = FunctionExpressionContext;
var ClassExpressionContext = /** @class */ (function (_super) {
    __extends(ClassExpressionContext, _super);
    function ClassExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ClassExpressionContext.prototype.Class = function () { return this.getToken(JavaScriptParser.Class, 0); };
    ClassExpressionContext.prototype.classTail = function () {
        return this.getRuleContext(0, ClassTailContext);
    };
    ClassExpressionContext.prototype.Identifier = function () { return this.tryGetToken(JavaScriptParser.Identifier, 0); };
    // @Override
    ClassExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterClassExpression) {
            listener.enterClassExpression(this);
        }
    };
    // @Override
    ClassExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitClassExpression) {
            listener.exitClassExpression(this);
        }
    };
    // @Override
    ClassExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitClassExpression) {
            return visitor.visitClassExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassExpressionContext;
}(SingleExpressionContext));
exports.ClassExpressionContext = ClassExpressionContext;
var MemberIndexExpressionContext = /** @class */ (function (_super) {
    __extends(MemberIndexExpressionContext, _super);
    function MemberIndexExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    MemberIndexExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    MemberIndexExpressionContext.prototype.OpenBracket = function () { return this.getToken(JavaScriptParser.OpenBracket, 0); };
    MemberIndexExpressionContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    MemberIndexExpressionContext.prototype.CloseBracket = function () { return this.getToken(JavaScriptParser.CloseBracket, 0); };
    // @Override
    MemberIndexExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterMemberIndexExpression) {
            listener.enterMemberIndexExpression(this);
        }
    };
    // @Override
    MemberIndexExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitMemberIndexExpression) {
            listener.exitMemberIndexExpression(this);
        }
    };
    // @Override
    MemberIndexExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitMemberIndexExpression) {
            return visitor.visitMemberIndexExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MemberIndexExpressionContext;
}(SingleExpressionContext));
exports.MemberIndexExpressionContext = MemberIndexExpressionContext;
var MemberDotExpressionContext = /** @class */ (function (_super) {
    __extends(MemberDotExpressionContext, _super);
    function MemberDotExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    MemberDotExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    MemberDotExpressionContext.prototype.Dot = function () { return this.getToken(JavaScriptParser.Dot, 0); };
    MemberDotExpressionContext.prototype.identifierName = function () {
        return this.getRuleContext(0, IdentifierNameContext);
    };
    MemberDotExpressionContext.prototype.QuestionMark = function () { return this.tryGetToken(JavaScriptParser.QuestionMark, 0); };
    MemberDotExpressionContext.prototype.Hashtag = function () { return this.tryGetToken(JavaScriptParser.Hashtag, 0); };
    // @Override
    MemberDotExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterMemberDotExpression) {
            listener.enterMemberDotExpression(this);
        }
    };
    // @Override
    MemberDotExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitMemberDotExpression) {
            listener.exitMemberDotExpression(this);
        }
    };
    // @Override
    MemberDotExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitMemberDotExpression) {
            return visitor.visitMemberDotExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MemberDotExpressionContext;
}(SingleExpressionContext));
exports.MemberDotExpressionContext = MemberDotExpressionContext;
var ArgumentsExpressionContext = /** @class */ (function (_super) {
    __extends(ArgumentsExpressionContext, _super);
    function ArgumentsExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ArgumentsExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    ArgumentsExpressionContext.prototype.arguments = function () {
        return this.getRuleContext(0, ArgumentsContext);
    };
    // @Override
    ArgumentsExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterArgumentsExpression) {
            listener.enterArgumentsExpression(this);
        }
    };
    // @Override
    ArgumentsExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitArgumentsExpression) {
            listener.exitArgumentsExpression(this);
        }
    };
    // @Override
    ArgumentsExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitArgumentsExpression) {
            return visitor.visitArgumentsExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgumentsExpressionContext;
}(SingleExpressionContext));
exports.ArgumentsExpressionContext = ArgumentsExpressionContext;
var NewExpressionContext = /** @class */ (function (_super) {
    __extends(NewExpressionContext, _super);
    function NewExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    NewExpressionContext.prototype.New = function () { return this.getToken(JavaScriptParser.New, 0); };
    NewExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    NewExpressionContext.prototype.arguments = function () {
        return this.tryGetRuleContext(0, ArgumentsContext);
    };
    // @Override
    NewExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterNewExpression) {
            listener.enterNewExpression(this);
        }
    };
    // @Override
    NewExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitNewExpression) {
            listener.exitNewExpression(this);
        }
    };
    // @Override
    NewExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitNewExpression) {
            return visitor.visitNewExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NewExpressionContext;
}(SingleExpressionContext));
exports.NewExpressionContext = NewExpressionContext;
var MetaExpressionContext = /** @class */ (function (_super) {
    __extends(MetaExpressionContext, _super);
    function MetaExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    MetaExpressionContext.prototype.New = function () { return this.getToken(JavaScriptParser.New, 0); };
    MetaExpressionContext.prototype.Dot = function () { return this.getToken(JavaScriptParser.Dot, 0); };
    MetaExpressionContext.prototype.Identifier = function () { return this.getToken(JavaScriptParser.Identifier, 0); };
    // @Override
    MetaExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterMetaExpression) {
            listener.enterMetaExpression(this);
        }
    };
    // @Override
    MetaExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitMetaExpression) {
            listener.exitMetaExpression(this);
        }
    };
    // @Override
    MetaExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitMetaExpression) {
            return visitor.visitMetaExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MetaExpressionContext;
}(SingleExpressionContext));
exports.MetaExpressionContext = MetaExpressionContext;
var PostIncrementExpressionContext = /** @class */ (function (_super) {
    __extends(PostIncrementExpressionContext, _super);
    function PostIncrementExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PostIncrementExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    PostIncrementExpressionContext.prototype.PlusPlus = function () { return this.getToken(JavaScriptParser.PlusPlus, 0); };
    // @Override
    PostIncrementExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPostIncrementExpression) {
            listener.enterPostIncrementExpression(this);
        }
    };
    // @Override
    PostIncrementExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPostIncrementExpression) {
            listener.exitPostIncrementExpression(this);
        }
    };
    // @Override
    PostIncrementExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPostIncrementExpression) {
            return visitor.visitPostIncrementExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PostIncrementExpressionContext;
}(SingleExpressionContext));
exports.PostIncrementExpressionContext = PostIncrementExpressionContext;
var PostDecreaseExpressionContext = /** @class */ (function (_super) {
    __extends(PostDecreaseExpressionContext, _super);
    function PostDecreaseExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PostDecreaseExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    PostDecreaseExpressionContext.prototype.MinusMinus = function () { return this.getToken(JavaScriptParser.MinusMinus, 0); };
    // @Override
    PostDecreaseExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPostDecreaseExpression) {
            listener.enterPostDecreaseExpression(this);
        }
    };
    // @Override
    PostDecreaseExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPostDecreaseExpression) {
            listener.exitPostDecreaseExpression(this);
        }
    };
    // @Override
    PostDecreaseExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPostDecreaseExpression) {
            return visitor.visitPostDecreaseExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PostDecreaseExpressionContext;
}(SingleExpressionContext));
exports.PostDecreaseExpressionContext = PostDecreaseExpressionContext;
var DeleteExpressionContext = /** @class */ (function (_super) {
    __extends(DeleteExpressionContext, _super);
    function DeleteExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    DeleteExpressionContext.prototype.Delete = function () { return this.getToken(JavaScriptParser.Delete, 0); };
    DeleteExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    DeleteExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterDeleteExpression) {
            listener.enterDeleteExpression(this);
        }
    };
    // @Override
    DeleteExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitDeleteExpression) {
            listener.exitDeleteExpression(this);
        }
    };
    // @Override
    DeleteExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitDeleteExpression) {
            return visitor.visitDeleteExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeleteExpressionContext;
}(SingleExpressionContext));
exports.DeleteExpressionContext = DeleteExpressionContext;
var VoidExpressionContext = /** @class */ (function (_super) {
    __extends(VoidExpressionContext, _super);
    function VoidExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    VoidExpressionContext.prototype.Void = function () { return this.getToken(JavaScriptParser.Void, 0); };
    VoidExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    VoidExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterVoidExpression) {
            listener.enterVoidExpression(this);
        }
    };
    // @Override
    VoidExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitVoidExpression) {
            listener.exitVoidExpression(this);
        }
    };
    // @Override
    VoidExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitVoidExpression) {
            return visitor.visitVoidExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VoidExpressionContext;
}(SingleExpressionContext));
exports.VoidExpressionContext = VoidExpressionContext;
var TypeofExpressionContext = /** @class */ (function (_super) {
    __extends(TypeofExpressionContext, _super);
    function TypeofExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    TypeofExpressionContext.prototype.Typeof = function () { return this.getToken(JavaScriptParser.Typeof, 0); };
    TypeofExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    TypeofExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeofExpression) {
            listener.enterTypeofExpression(this);
        }
    };
    // @Override
    TypeofExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeofExpression) {
            listener.exitTypeofExpression(this);
        }
    };
    // @Override
    TypeofExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeofExpression) {
            return visitor.visitTypeofExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeofExpressionContext;
}(SingleExpressionContext));
exports.TypeofExpressionContext = TypeofExpressionContext;
var PreIncrementExpressionContext = /** @class */ (function (_super) {
    __extends(PreIncrementExpressionContext, _super);
    function PreIncrementExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreIncrementExpressionContext.prototype.PlusPlus = function () { return this.getToken(JavaScriptParser.PlusPlus, 0); };
    PreIncrementExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    PreIncrementExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPreIncrementExpression) {
            listener.enterPreIncrementExpression(this);
        }
    };
    // @Override
    PreIncrementExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPreIncrementExpression) {
            listener.exitPreIncrementExpression(this);
        }
    };
    // @Override
    PreIncrementExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPreIncrementExpression) {
            return visitor.visitPreIncrementExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PreIncrementExpressionContext;
}(SingleExpressionContext));
exports.PreIncrementExpressionContext = PreIncrementExpressionContext;
var PreDecreaseExpressionContext = /** @class */ (function (_super) {
    __extends(PreDecreaseExpressionContext, _super);
    function PreDecreaseExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreDecreaseExpressionContext.prototype.MinusMinus = function () { return this.getToken(JavaScriptParser.MinusMinus, 0); };
    PreDecreaseExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    PreDecreaseExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPreDecreaseExpression) {
            listener.enterPreDecreaseExpression(this);
        }
    };
    // @Override
    PreDecreaseExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPreDecreaseExpression) {
            listener.exitPreDecreaseExpression(this);
        }
    };
    // @Override
    PreDecreaseExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPreDecreaseExpression) {
            return visitor.visitPreDecreaseExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PreDecreaseExpressionContext;
}(SingleExpressionContext));
exports.PreDecreaseExpressionContext = PreDecreaseExpressionContext;
var UnaryPlusExpressionContext = /** @class */ (function (_super) {
    __extends(UnaryPlusExpressionContext, _super);
    function UnaryPlusExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    UnaryPlusExpressionContext.prototype.Plus = function () { return this.getToken(JavaScriptParser.Plus, 0); };
    UnaryPlusExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    UnaryPlusExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterUnaryPlusExpression) {
            listener.enterUnaryPlusExpression(this);
        }
    };
    // @Override
    UnaryPlusExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitUnaryPlusExpression) {
            listener.exitUnaryPlusExpression(this);
        }
    };
    // @Override
    UnaryPlusExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitUnaryPlusExpression) {
            return visitor.visitUnaryPlusExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnaryPlusExpressionContext;
}(SingleExpressionContext));
exports.UnaryPlusExpressionContext = UnaryPlusExpressionContext;
var UnaryMinusExpressionContext = /** @class */ (function (_super) {
    __extends(UnaryMinusExpressionContext, _super);
    function UnaryMinusExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    UnaryMinusExpressionContext.prototype.Minus = function () { return this.getToken(JavaScriptParser.Minus, 0); };
    UnaryMinusExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    UnaryMinusExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterUnaryMinusExpression) {
            listener.enterUnaryMinusExpression(this);
        }
    };
    // @Override
    UnaryMinusExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitUnaryMinusExpression) {
            listener.exitUnaryMinusExpression(this);
        }
    };
    // @Override
    UnaryMinusExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitUnaryMinusExpression) {
            return visitor.visitUnaryMinusExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnaryMinusExpressionContext;
}(SingleExpressionContext));
exports.UnaryMinusExpressionContext = UnaryMinusExpressionContext;
var BitNotExpressionContext = /** @class */ (function (_super) {
    __extends(BitNotExpressionContext, _super);
    function BitNotExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BitNotExpressionContext.prototype.BitNot = function () { return this.getToken(JavaScriptParser.BitNot, 0); };
    BitNotExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    BitNotExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterBitNotExpression) {
            listener.enterBitNotExpression(this);
        }
    };
    // @Override
    BitNotExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitBitNotExpression) {
            listener.exitBitNotExpression(this);
        }
    };
    // @Override
    BitNotExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitBitNotExpression) {
            return visitor.visitBitNotExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BitNotExpressionContext;
}(SingleExpressionContext));
exports.BitNotExpressionContext = BitNotExpressionContext;
var NotExpressionContext = /** @class */ (function (_super) {
    __extends(NotExpressionContext, _super);
    function NotExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    NotExpressionContext.prototype.Not = function () { return this.getToken(JavaScriptParser.Not, 0); };
    NotExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    NotExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterNotExpression) {
            listener.enterNotExpression(this);
        }
    };
    // @Override
    NotExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitNotExpression) {
            listener.exitNotExpression(this);
        }
    };
    // @Override
    NotExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitNotExpression) {
            return visitor.visitNotExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NotExpressionContext;
}(SingleExpressionContext));
exports.NotExpressionContext = NotExpressionContext;
var AwaitExpressionContext = /** @class */ (function (_super) {
    __extends(AwaitExpressionContext, _super);
    function AwaitExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    AwaitExpressionContext.prototype.Await = function () { return this.getToken(JavaScriptParser.Await, 0); };
    AwaitExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    AwaitExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAwaitExpression) {
            listener.enterAwaitExpression(this);
        }
    };
    // @Override
    AwaitExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAwaitExpression) {
            listener.exitAwaitExpression(this);
        }
    };
    // @Override
    AwaitExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAwaitExpression) {
            return visitor.visitAwaitExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AwaitExpressionContext;
}(SingleExpressionContext));
exports.AwaitExpressionContext = AwaitExpressionContext;
var PowerExpressionContext = /** @class */ (function (_super) {
    __extends(PowerExpressionContext, _super);
    function PowerExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PowerExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    PowerExpressionContext.prototype.Power = function () { return this.getToken(JavaScriptParser.Power, 0); };
    // @Override
    PowerExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPowerExpression) {
            listener.enterPowerExpression(this);
        }
    };
    // @Override
    PowerExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPowerExpression) {
            listener.exitPowerExpression(this);
        }
    };
    // @Override
    PowerExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPowerExpression) {
            return visitor.visitPowerExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PowerExpressionContext;
}(SingleExpressionContext));
exports.PowerExpressionContext = PowerExpressionContext;
var MultiplicativeExpressionContext = /** @class */ (function (_super) {
    __extends(MultiplicativeExpressionContext, _super);
    function MultiplicativeExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    MultiplicativeExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    MultiplicativeExpressionContext.prototype.Multiply = function () { return this.tryGetToken(JavaScriptParser.Multiply, 0); };
    MultiplicativeExpressionContext.prototype.Divide = function () { return this.tryGetToken(JavaScriptParser.Divide, 0); };
    MultiplicativeExpressionContext.prototype.Modulus = function () { return this.tryGetToken(JavaScriptParser.Modulus, 0); };
    // @Override
    MultiplicativeExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiplicativeExpression) {
            listener.enterMultiplicativeExpression(this);
        }
    };
    // @Override
    MultiplicativeExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiplicativeExpression) {
            listener.exitMultiplicativeExpression(this);
        }
    };
    // @Override
    MultiplicativeExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiplicativeExpression) {
            return visitor.visitMultiplicativeExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiplicativeExpressionContext;
}(SingleExpressionContext));
exports.MultiplicativeExpressionContext = MultiplicativeExpressionContext;
var AdditiveExpressionContext = /** @class */ (function (_super) {
    __extends(AdditiveExpressionContext, _super);
    function AdditiveExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    AdditiveExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    AdditiveExpressionContext.prototype.Plus = function () { return this.tryGetToken(JavaScriptParser.Plus, 0); };
    AdditiveExpressionContext.prototype.Minus = function () { return this.tryGetToken(JavaScriptParser.Minus, 0); };
    // @Override
    AdditiveExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAdditiveExpression) {
            listener.enterAdditiveExpression(this);
        }
    };
    // @Override
    AdditiveExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAdditiveExpression) {
            listener.exitAdditiveExpression(this);
        }
    };
    // @Override
    AdditiveExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAdditiveExpression) {
            return visitor.visitAdditiveExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AdditiveExpressionContext;
}(SingleExpressionContext));
exports.AdditiveExpressionContext = AdditiveExpressionContext;
var CoalesceExpressionContext = /** @class */ (function (_super) {
    __extends(CoalesceExpressionContext, _super);
    function CoalesceExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    CoalesceExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    CoalesceExpressionContext.prototype.NullCoalesce = function () { return this.getToken(JavaScriptParser.NullCoalesce, 0); };
    // @Override
    CoalesceExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterCoalesceExpression) {
            listener.enterCoalesceExpression(this);
        }
    };
    // @Override
    CoalesceExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitCoalesceExpression) {
            listener.exitCoalesceExpression(this);
        }
    };
    // @Override
    CoalesceExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitCoalesceExpression) {
            return visitor.visitCoalesceExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CoalesceExpressionContext;
}(SingleExpressionContext));
exports.CoalesceExpressionContext = CoalesceExpressionContext;
var BitShiftExpressionContext = /** @class */ (function (_super) {
    __extends(BitShiftExpressionContext, _super);
    function BitShiftExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BitShiftExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    BitShiftExpressionContext.prototype.LeftShiftArithmetic = function () { return this.tryGetToken(JavaScriptParser.LeftShiftArithmetic, 0); };
    BitShiftExpressionContext.prototype.RightShiftArithmetic = function () { return this.tryGetToken(JavaScriptParser.RightShiftArithmetic, 0); };
    BitShiftExpressionContext.prototype.RightShiftLogical = function () { return this.tryGetToken(JavaScriptParser.RightShiftLogical, 0); };
    // @Override
    BitShiftExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterBitShiftExpression) {
            listener.enterBitShiftExpression(this);
        }
    };
    // @Override
    BitShiftExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitBitShiftExpression) {
            listener.exitBitShiftExpression(this);
        }
    };
    // @Override
    BitShiftExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitBitShiftExpression) {
            return visitor.visitBitShiftExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BitShiftExpressionContext;
}(SingleExpressionContext));
exports.BitShiftExpressionContext = BitShiftExpressionContext;
var RelationalExpressionContext = /** @class */ (function (_super) {
    __extends(RelationalExpressionContext, _super);
    function RelationalExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    RelationalExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    RelationalExpressionContext.prototype.LessThan = function () { return this.tryGetToken(JavaScriptParser.LessThan, 0); };
    RelationalExpressionContext.prototype.MoreThan = function () { return this.tryGetToken(JavaScriptParser.MoreThan, 0); };
    RelationalExpressionContext.prototype.LessThanEquals = function () { return this.tryGetToken(JavaScriptParser.LessThanEquals, 0); };
    RelationalExpressionContext.prototype.GreaterThanEquals = function () { return this.tryGetToken(JavaScriptParser.GreaterThanEquals, 0); };
    // @Override
    RelationalExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterRelationalExpression) {
            listener.enterRelationalExpression(this);
        }
    };
    // @Override
    RelationalExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitRelationalExpression) {
            listener.exitRelationalExpression(this);
        }
    };
    // @Override
    RelationalExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitRelationalExpression) {
            return visitor.visitRelationalExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RelationalExpressionContext;
}(SingleExpressionContext));
exports.RelationalExpressionContext = RelationalExpressionContext;
var InstanceofExpressionContext = /** @class */ (function (_super) {
    __extends(InstanceofExpressionContext, _super);
    function InstanceofExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    InstanceofExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    InstanceofExpressionContext.prototype.Instanceof = function () { return this.getToken(JavaScriptParser.Instanceof, 0); };
    // @Override
    InstanceofExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterInstanceofExpression) {
            listener.enterInstanceofExpression(this);
        }
    };
    // @Override
    InstanceofExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitInstanceofExpression) {
            listener.exitInstanceofExpression(this);
        }
    };
    // @Override
    InstanceofExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitInstanceofExpression) {
            return visitor.visitInstanceofExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InstanceofExpressionContext;
}(SingleExpressionContext));
exports.InstanceofExpressionContext = InstanceofExpressionContext;
var InExpressionContext = /** @class */ (function (_super) {
    __extends(InExpressionContext, _super);
    function InExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    InExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    InExpressionContext.prototype.In = function () { return this.getToken(JavaScriptParser.In, 0); };
    // @Override
    InExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterInExpression) {
            listener.enterInExpression(this);
        }
    };
    // @Override
    InExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitInExpression) {
            listener.exitInExpression(this);
        }
    };
    // @Override
    InExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitInExpression) {
            return visitor.visitInExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InExpressionContext;
}(SingleExpressionContext));
exports.InExpressionContext = InExpressionContext;
var EqualityExpressionContext = /** @class */ (function (_super) {
    __extends(EqualityExpressionContext, _super);
    function EqualityExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    EqualityExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    EqualityExpressionContext.prototype.Equals_ = function () { return this.tryGetToken(JavaScriptParser.Equals_, 0); };
    EqualityExpressionContext.prototype.NotEquals = function () { return this.tryGetToken(JavaScriptParser.NotEquals, 0); };
    EqualityExpressionContext.prototype.IdentityEquals = function () { return this.tryGetToken(JavaScriptParser.IdentityEquals, 0); };
    EqualityExpressionContext.prototype.IdentityNotEquals = function () { return this.tryGetToken(JavaScriptParser.IdentityNotEquals, 0); };
    // @Override
    EqualityExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterEqualityExpression) {
            listener.enterEqualityExpression(this);
        }
    };
    // @Override
    EqualityExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitEqualityExpression) {
            listener.exitEqualityExpression(this);
        }
    };
    // @Override
    EqualityExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitEqualityExpression) {
            return visitor.visitEqualityExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EqualityExpressionContext;
}(SingleExpressionContext));
exports.EqualityExpressionContext = EqualityExpressionContext;
var BitAndExpressionContext = /** @class */ (function (_super) {
    __extends(BitAndExpressionContext, _super);
    function BitAndExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BitAndExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    BitAndExpressionContext.prototype.BitAnd = function () { return this.getToken(JavaScriptParser.BitAnd, 0); };
    // @Override
    BitAndExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterBitAndExpression) {
            listener.enterBitAndExpression(this);
        }
    };
    // @Override
    BitAndExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitBitAndExpression) {
            listener.exitBitAndExpression(this);
        }
    };
    // @Override
    BitAndExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitBitAndExpression) {
            return visitor.visitBitAndExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BitAndExpressionContext;
}(SingleExpressionContext));
exports.BitAndExpressionContext = BitAndExpressionContext;
var BitXOrExpressionContext = /** @class */ (function (_super) {
    __extends(BitXOrExpressionContext, _super);
    function BitXOrExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BitXOrExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    BitXOrExpressionContext.prototype.BitXOr = function () { return this.getToken(JavaScriptParser.BitXOr, 0); };
    // @Override
    BitXOrExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterBitXOrExpression) {
            listener.enterBitXOrExpression(this);
        }
    };
    // @Override
    BitXOrExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitBitXOrExpression) {
            listener.exitBitXOrExpression(this);
        }
    };
    // @Override
    BitXOrExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitBitXOrExpression) {
            return visitor.visitBitXOrExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BitXOrExpressionContext;
}(SingleExpressionContext));
exports.BitXOrExpressionContext = BitXOrExpressionContext;
var BitOrExpressionContext = /** @class */ (function (_super) {
    __extends(BitOrExpressionContext, _super);
    function BitOrExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BitOrExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    BitOrExpressionContext.prototype.BitOr = function () { return this.getToken(JavaScriptParser.BitOr, 0); };
    // @Override
    BitOrExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterBitOrExpression) {
            listener.enterBitOrExpression(this);
        }
    };
    // @Override
    BitOrExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitBitOrExpression) {
            listener.exitBitOrExpression(this);
        }
    };
    // @Override
    BitOrExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitBitOrExpression) {
            return visitor.visitBitOrExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BitOrExpressionContext;
}(SingleExpressionContext));
exports.BitOrExpressionContext = BitOrExpressionContext;
var LogicalAndExpressionContext = /** @class */ (function (_super) {
    __extends(LogicalAndExpressionContext, _super);
    function LogicalAndExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    LogicalAndExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    LogicalAndExpressionContext.prototype.And = function () { return this.getToken(JavaScriptParser.And, 0); };
    // @Override
    LogicalAndExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterLogicalAndExpression) {
            listener.enterLogicalAndExpression(this);
        }
    };
    // @Override
    LogicalAndExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitLogicalAndExpression) {
            listener.exitLogicalAndExpression(this);
        }
    };
    // @Override
    LogicalAndExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitLogicalAndExpression) {
            return visitor.visitLogicalAndExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LogicalAndExpressionContext;
}(SingleExpressionContext));
exports.LogicalAndExpressionContext = LogicalAndExpressionContext;
var LogicalOrExpressionContext = /** @class */ (function (_super) {
    __extends(LogicalOrExpressionContext, _super);
    function LogicalOrExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    LogicalOrExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    LogicalOrExpressionContext.prototype.Or = function () { return this.getToken(JavaScriptParser.Or, 0); };
    // @Override
    LogicalOrExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterLogicalOrExpression) {
            listener.enterLogicalOrExpression(this);
        }
    };
    // @Override
    LogicalOrExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitLogicalOrExpression) {
            listener.exitLogicalOrExpression(this);
        }
    };
    // @Override
    LogicalOrExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitLogicalOrExpression) {
            return visitor.visitLogicalOrExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LogicalOrExpressionContext;
}(SingleExpressionContext));
exports.LogicalOrExpressionContext = LogicalOrExpressionContext;
var TernaryExpressionContext = /** @class */ (function (_super) {
    __extends(TernaryExpressionContext, _super);
    function TernaryExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    TernaryExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    TernaryExpressionContext.prototype.QuestionMark = function () { return this.getToken(JavaScriptParser.QuestionMark, 0); };
    TernaryExpressionContext.prototype.Colon = function () { return this.getToken(JavaScriptParser.Colon, 0); };
    // @Override
    TernaryExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterTernaryExpression) {
            listener.enterTernaryExpression(this);
        }
    };
    // @Override
    TernaryExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitTernaryExpression) {
            listener.exitTernaryExpression(this);
        }
    };
    // @Override
    TernaryExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitTernaryExpression) {
            return visitor.visitTernaryExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TernaryExpressionContext;
}(SingleExpressionContext));
exports.TernaryExpressionContext = TernaryExpressionContext;
var AssignmentExpressionContext = /** @class */ (function (_super) {
    __extends(AssignmentExpressionContext, _super);
    function AssignmentExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    AssignmentExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    AssignmentExpressionContext.prototype.Assign = function () { return this.getToken(JavaScriptParser.Assign, 0); };
    // @Override
    AssignmentExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignmentExpression) {
            listener.enterAssignmentExpression(this);
        }
    };
    // @Override
    AssignmentExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignmentExpression) {
            listener.exitAssignmentExpression(this);
        }
    };
    // @Override
    AssignmentExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignmentExpression) {
            return visitor.visitAssignmentExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentExpressionContext;
}(SingleExpressionContext));
exports.AssignmentExpressionContext = AssignmentExpressionContext;
var AssignmentOperatorExpressionContext = /** @class */ (function (_super) {
    __extends(AssignmentOperatorExpressionContext, _super);
    function AssignmentOperatorExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    AssignmentOperatorExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    AssignmentOperatorExpressionContext.prototype.assignmentOperator = function () {
        return this.getRuleContext(0, AssignmentOperatorContext);
    };
    // @Override
    AssignmentOperatorExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignmentOperatorExpression) {
            listener.enterAssignmentOperatorExpression(this);
        }
    };
    // @Override
    AssignmentOperatorExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignmentOperatorExpression) {
            listener.exitAssignmentOperatorExpression(this);
        }
    };
    // @Override
    AssignmentOperatorExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignmentOperatorExpression) {
            return visitor.visitAssignmentOperatorExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentOperatorExpressionContext;
}(SingleExpressionContext));
exports.AssignmentOperatorExpressionContext = AssignmentOperatorExpressionContext;
var ImportExpressionContext = /** @class */ (function (_super) {
    __extends(ImportExpressionContext, _super);
    function ImportExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ImportExpressionContext.prototype.Import = function () { return this.getToken(JavaScriptParser.Import, 0); };
    ImportExpressionContext.prototype.OpenParen = function () { return this.getToken(JavaScriptParser.OpenParen, 0); };
    ImportExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    ImportExpressionContext.prototype.CloseParen = function () { return this.getToken(JavaScriptParser.CloseParen, 0); };
    // @Override
    ImportExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterImportExpression) {
            listener.enterImportExpression(this);
        }
    };
    // @Override
    ImportExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitImportExpression) {
            listener.exitImportExpression(this);
        }
    };
    // @Override
    ImportExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitImportExpression) {
            return visitor.visitImportExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportExpressionContext;
}(SingleExpressionContext));
exports.ImportExpressionContext = ImportExpressionContext;
var TemplateStringExpressionContext = /** @class */ (function (_super) {
    __extends(TemplateStringExpressionContext, _super);
    function TemplateStringExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    TemplateStringExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    TemplateStringExpressionContext.prototype.TemplateStringLiteral = function () { return this.getToken(JavaScriptParser.TemplateStringLiteral, 0); };
    // @Override
    TemplateStringExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterTemplateStringExpression) {
            listener.enterTemplateStringExpression(this);
        }
    };
    // @Override
    TemplateStringExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitTemplateStringExpression) {
            listener.exitTemplateStringExpression(this);
        }
    };
    // @Override
    TemplateStringExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitTemplateStringExpression) {
            return visitor.visitTemplateStringExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TemplateStringExpressionContext;
}(SingleExpressionContext));
exports.TemplateStringExpressionContext = TemplateStringExpressionContext;
var YieldExpressionContext = /** @class */ (function (_super) {
    __extends(YieldExpressionContext, _super);
    function YieldExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    YieldExpressionContext.prototype.yieldStatement = function () {
        return this.getRuleContext(0, YieldStatementContext);
    };
    // @Override
    YieldExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterYieldExpression) {
            listener.enterYieldExpression(this);
        }
    };
    // @Override
    YieldExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitYieldExpression) {
            listener.exitYieldExpression(this);
        }
    };
    // @Override
    YieldExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitYieldExpression) {
            return visitor.visitYieldExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return YieldExpressionContext;
}(SingleExpressionContext));
exports.YieldExpressionContext = YieldExpressionContext;
var ThisExpressionContext = /** @class */ (function (_super) {
    __extends(ThisExpressionContext, _super);
    function ThisExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ThisExpressionContext.prototype.This = function () { return this.getToken(JavaScriptParser.This, 0); };
    // @Override
    ThisExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterThisExpression) {
            listener.enterThisExpression(this);
        }
    };
    // @Override
    ThisExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitThisExpression) {
            listener.exitThisExpression(this);
        }
    };
    // @Override
    ThisExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitThisExpression) {
            return visitor.visitThisExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ThisExpressionContext;
}(SingleExpressionContext));
exports.ThisExpressionContext = ThisExpressionContext;
var IdentifierExpressionContext = /** @class */ (function (_super) {
    __extends(IdentifierExpressionContext, _super);
    function IdentifierExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    IdentifierExpressionContext.prototype.Identifier = function () { return this.getToken(JavaScriptParser.Identifier, 0); };
    // @Override
    IdentifierExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifierExpression) {
            listener.enterIdentifierExpression(this);
        }
    };
    // @Override
    IdentifierExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifierExpression) {
            listener.exitIdentifierExpression(this);
        }
    };
    // @Override
    IdentifierExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifierExpression) {
            return visitor.visitIdentifierExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentifierExpressionContext;
}(SingleExpressionContext));
exports.IdentifierExpressionContext = IdentifierExpressionContext;
var SuperExpressionContext = /** @class */ (function (_super) {
    __extends(SuperExpressionContext, _super);
    function SuperExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    SuperExpressionContext.prototype.Super = function () { return this.getToken(JavaScriptParser.Super, 0); };
    // @Override
    SuperExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterSuperExpression) {
            listener.enterSuperExpression(this);
        }
    };
    // @Override
    SuperExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitSuperExpression) {
            listener.exitSuperExpression(this);
        }
    };
    // @Override
    SuperExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitSuperExpression) {
            return visitor.visitSuperExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SuperExpressionContext;
}(SingleExpressionContext));
exports.SuperExpressionContext = SuperExpressionContext;
var LiteralExpressionContext = /** @class */ (function (_super) {
    __extends(LiteralExpressionContext, _super);
    function LiteralExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    LiteralExpressionContext.prototype.literal = function () {
        return this.getRuleContext(0, LiteralContext);
    };
    // @Override
    LiteralExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterLiteralExpression) {
            listener.enterLiteralExpression(this);
        }
    };
    // @Override
    LiteralExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitLiteralExpression) {
            listener.exitLiteralExpression(this);
        }
    };
    // @Override
    LiteralExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitLiteralExpression) {
            return visitor.visitLiteralExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LiteralExpressionContext;
}(SingleExpressionContext));
exports.LiteralExpressionContext = LiteralExpressionContext;
var ArrayLiteralExpressionContext = /** @class */ (function (_super) {
    __extends(ArrayLiteralExpressionContext, _super);
    function ArrayLiteralExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ArrayLiteralExpressionContext.prototype.arrayLiteral = function () {
        return this.getRuleContext(0, ArrayLiteralContext);
    };
    // @Override
    ArrayLiteralExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayLiteralExpression) {
            listener.enterArrayLiteralExpression(this);
        }
    };
    // @Override
    ArrayLiteralExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayLiteralExpression) {
            listener.exitArrayLiteralExpression(this);
        }
    };
    // @Override
    ArrayLiteralExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayLiteralExpression) {
            return visitor.visitArrayLiteralExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayLiteralExpressionContext;
}(SingleExpressionContext));
exports.ArrayLiteralExpressionContext = ArrayLiteralExpressionContext;
var ObjectLiteralExpressionContext = /** @class */ (function (_super) {
    __extends(ObjectLiteralExpressionContext, _super);
    function ObjectLiteralExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ObjectLiteralExpressionContext.prototype.objectLiteral = function () {
        return this.getRuleContext(0, ObjectLiteralContext);
    };
    // @Override
    ObjectLiteralExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectLiteralExpression) {
            listener.enterObjectLiteralExpression(this);
        }
    };
    // @Override
    ObjectLiteralExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectLiteralExpression) {
            listener.exitObjectLiteralExpression(this);
        }
    };
    // @Override
    ObjectLiteralExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectLiteralExpression) {
            return visitor.visitObjectLiteralExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectLiteralExpressionContext;
}(SingleExpressionContext));
exports.ObjectLiteralExpressionContext = ObjectLiteralExpressionContext;
var ParenthesizedExpressionContext = /** @class */ (function (_super) {
    __extends(ParenthesizedExpressionContext, _super);
    function ParenthesizedExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ParenthesizedExpressionContext.prototype.OpenParen = function () { return this.getToken(JavaScriptParser.OpenParen, 0); };
    ParenthesizedExpressionContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    ParenthesizedExpressionContext.prototype.CloseParen = function () { return this.getToken(JavaScriptParser.CloseParen, 0); };
    // @Override
    ParenthesizedExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterParenthesizedExpression) {
            listener.enterParenthesizedExpression(this);
        }
    };
    // @Override
    ParenthesizedExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitParenthesizedExpression) {
            listener.exitParenthesizedExpression(this);
        }
    };
    // @Override
    ParenthesizedExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitParenthesizedExpression) {
            return visitor.visitParenthesizedExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParenthesizedExpressionContext;
}(SingleExpressionContext));
exports.ParenthesizedExpressionContext = ParenthesizedExpressionContext;
var AssignableContext = /** @class */ (function (_super) {
    __extends(AssignableContext, _super);
    function AssignableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignableContext.prototype.Identifier = function () { return this.tryGetToken(JavaScriptParser.Identifier, 0); };
    AssignableContext.prototype.arrayLiteral = function () {
        return this.tryGetRuleContext(0, ArrayLiteralContext);
    };
    AssignableContext.prototype.objectLiteral = function () {
        return this.tryGetRuleContext(0, ObjectLiteralContext);
    };
    Object.defineProperty(AssignableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_assignable; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignableContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignable) {
            listener.enterAssignable(this);
        }
    };
    // @Override
    AssignableContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignable) {
            listener.exitAssignable(this);
        }
    };
    // @Override
    AssignableContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignable) {
            return visitor.visitAssignable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignableContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignableContext = AssignableContext;
var AnoymousFunctionContext = /** @class */ (function (_super) {
    __extends(AnoymousFunctionContext, _super);
    function AnoymousFunctionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(AnoymousFunctionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_anoymousFunction; },
        enumerable: true,
        configurable: true
    });
    AnoymousFunctionContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return AnoymousFunctionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AnoymousFunctionContext = AnoymousFunctionContext;
var FunctionDeclContext = /** @class */ (function (_super) {
    __extends(FunctionDeclContext, _super);
    function FunctionDeclContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    FunctionDeclContext.prototype.functionDeclaration = function () {
        return this.getRuleContext(0, FunctionDeclarationContext);
    };
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
}(AnoymousFunctionContext));
exports.FunctionDeclContext = FunctionDeclContext;
var AnoymousFunctionDeclContext = /** @class */ (function (_super) {
    __extends(AnoymousFunctionDeclContext, _super);
    function AnoymousFunctionDeclContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    AnoymousFunctionDeclContext.prototype.Function = function () { return this.getToken(JavaScriptParser.Function, 0); };
    AnoymousFunctionDeclContext.prototype.OpenParen = function () { return this.getToken(JavaScriptParser.OpenParen, 0); };
    AnoymousFunctionDeclContext.prototype.CloseParen = function () { return this.getToken(JavaScriptParser.CloseParen, 0); };
    AnoymousFunctionDeclContext.prototype.OpenBrace = function () { return this.getToken(JavaScriptParser.OpenBrace, 0); };
    AnoymousFunctionDeclContext.prototype.functionBody = function () {
        return this.getRuleContext(0, FunctionBodyContext);
    };
    AnoymousFunctionDeclContext.prototype.CloseBrace = function () { return this.getToken(JavaScriptParser.CloseBrace, 0); };
    AnoymousFunctionDeclContext.prototype.Async = function () { return this.tryGetToken(JavaScriptParser.Async, 0); };
    AnoymousFunctionDeclContext.prototype.Multiply = function () { return this.tryGetToken(JavaScriptParser.Multiply, 0); };
    AnoymousFunctionDeclContext.prototype.formalParameterList = function () {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    };
    // @Override
    AnoymousFunctionDeclContext.prototype.enterRule = function (listener) {
        if (listener.enterAnoymousFunctionDecl) {
            listener.enterAnoymousFunctionDecl(this);
        }
    };
    // @Override
    AnoymousFunctionDeclContext.prototype.exitRule = function (listener) {
        if (listener.exitAnoymousFunctionDecl) {
            listener.exitAnoymousFunctionDecl(this);
        }
    };
    // @Override
    AnoymousFunctionDeclContext.prototype.accept = function (visitor) {
        if (visitor.visitAnoymousFunctionDecl) {
            return visitor.visitAnoymousFunctionDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AnoymousFunctionDeclContext;
}(AnoymousFunctionContext));
exports.AnoymousFunctionDeclContext = AnoymousFunctionDeclContext;
var ArrowFunctionContext = /** @class */ (function (_super) {
    __extends(ArrowFunctionContext, _super);
    function ArrowFunctionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ArrowFunctionContext.prototype.arrowFunctionParameters = function () {
        return this.getRuleContext(0, ArrowFunctionParametersContext);
    };
    ArrowFunctionContext.prototype.ARROW = function () { return this.getToken(JavaScriptParser.ARROW, 0); };
    ArrowFunctionContext.prototype.arrowFunctionBody = function () {
        return this.getRuleContext(0, ArrowFunctionBodyContext);
    };
    ArrowFunctionContext.prototype.Async = function () { return this.tryGetToken(JavaScriptParser.Async, 0); };
    // @Override
    ArrowFunctionContext.prototype.enterRule = function (listener) {
        if (listener.enterArrowFunction) {
            listener.enterArrowFunction(this);
        }
    };
    // @Override
    ArrowFunctionContext.prototype.exitRule = function (listener) {
        if (listener.exitArrowFunction) {
            listener.exitArrowFunction(this);
        }
    };
    // @Override
    ArrowFunctionContext.prototype.accept = function (visitor) {
        if (visitor.visitArrowFunction) {
            return visitor.visitArrowFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrowFunctionContext;
}(AnoymousFunctionContext));
exports.ArrowFunctionContext = ArrowFunctionContext;
var ArrowFunctionParametersContext = /** @class */ (function (_super) {
    __extends(ArrowFunctionParametersContext, _super);
    function ArrowFunctionParametersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrowFunctionParametersContext.prototype.Identifier = function () { return this.tryGetToken(JavaScriptParser.Identifier, 0); };
    ArrowFunctionParametersContext.prototype.OpenParen = function () { return this.tryGetToken(JavaScriptParser.OpenParen, 0); };
    ArrowFunctionParametersContext.prototype.CloseParen = function () { return this.tryGetToken(JavaScriptParser.CloseParen, 0); };
    ArrowFunctionParametersContext.prototype.formalParameterList = function () {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    };
    Object.defineProperty(ArrowFunctionParametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_arrowFunctionParameters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrowFunctionParametersContext.prototype.enterRule = function (listener) {
        if (listener.enterArrowFunctionParameters) {
            listener.enterArrowFunctionParameters(this);
        }
    };
    // @Override
    ArrowFunctionParametersContext.prototype.exitRule = function (listener) {
        if (listener.exitArrowFunctionParameters) {
            listener.exitArrowFunctionParameters(this);
        }
    };
    // @Override
    ArrowFunctionParametersContext.prototype.accept = function (visitor) {
        if (visitor.visitArrowFunctionParameters) {
            return visitor.visitArrowFunctionParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrowFunctionParametersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrowFunctionParametersContext = ArrowFunctionParametersContext;
var ArrowFunctionBodyContext = /** @class */ (function (_super) {
    __extends(ArrowFunctionBodyContext, _super);
    function ArrowFunctionBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrowFunctionBodyContext.prototype.singleExpression = function () {
        return this.tryGetRuleContext(0, SingleExpressionContext);
    };
    ArrowFunctionBodyContext.prototype.OpenBrace = function () { return this.tryGetToken(JavaScriptParser.OpenBrace, 0); };
    ArrowFunctionBodyContext.prototype.functionBody = function () {
        return this.tryGetRuleContext(0, FunctionBodyContext);
    };
    ArrowFunctionBodyContext.prototype.CloseBrace = function () { return this.tryGetToken(JavaScriptParser.CloseBrace, 0); };
    Object.defineProperty(ArrowFunctionBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_arrowFunctionBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrowFunctionBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterArrowFunctionBody) {
            listener.enterArrowFunctionBody(this);
        }
    };
    // @Override
    ArrowFunctionBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitArrowFunctionBody) {
            listener.exitArrowFunctionBody(this);
        }
    };
    // @Override
    ArrowFunctionBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitArrowFunctionBody) {
            return visitor.visitArrowFunctionBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrowFunctionBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrowFunctionBodyContext = ArrowFunctionBodyContext;
var AssignmentOperatorContext = /** @class */ (function (_super) {
    __extends(AssignmentOperatorContext, _super);
    function AssignmentOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentOperatorContext.prototype.MultiplyAssign = function () { return this.tryGetToken(JavaScriptParser.MultiplyAssign, 0); };
    AssignmentOperatorContext.prototype.DivideAssign = function () { return this.tryGetToken(JavaScriptParser.DivideAssign, 0); };
    AssignmentOperatorContext.prototype.ModulusAssign = function () { return this.tryGetToken(JavaScriptParser.ModulusAssign, 0); };
    AssignmentOperatorContext.prototype.PlusAssign = function () { return this.tryGetToken(JavaScriptParser.PlusAssign, 0); };
    AssignmentOperatorContext.prototype.MinusAssign = function () { return this.tryGetToken(JavaScriptParser.MinusAssign, 0); };
    AssignmentOperatorContext.prototype.LeftShiftArithmeticAssign = function () { return this.tryGetToken(JavaScriptParser.LeftShiftArithmeticAssign, 0); };
    AssignmentOperatorContext.prototype.RightShiftArithmeticAssign = function () { return this.tryGetToken(JavaScriptParser.RightShiftArithmeticAssign, 0); };
    AssignmentOperatorContext.prototype.RightShiftLogicalAssign = function () { return this.tryGetToken(JavaScriptParser.RightShiftLogicalAssign, 0); };
    AssignmentOperatorContext.prototype.BitAndAssign = function () { return this.tryGetToken(JavaScriptParser.BitAndAssign, 0); };
    AssignmentOperatorContext.prototype.BitXorAssign = function () { return this.tryGetToken(JavaScriptParser.BitXorAssign, 0); };
    AssignmentOperatorContext.prototype.BitOrAssign = function () { return this.tryGetToken(JavaScriptParser.BitOrAssign, 0); };
    AssignmentOperatorContext.prototype.PowerAssign = function () { return this.tryGetToken(JavaScriptParser.PowerAssign, 0); };
    Object.defineProperty(AssignmentOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_assignmentOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignmentOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignmentOperator) {
            listener.enterAssignmentOperator(this);
        }
    };
    // @Override
    AssignmentOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignmentOperator) {
            listener.exitAssignmentOperator(this);
        }
    };
    // @Override
    AssignmentOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignmentOperator) {
            return visitor.visitAssignmentOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignmentOperatorContext = AssignmentOperatorContext;
var LiteralContext = /** @class */ (function (_super) {
    __extends(LiteralContext, _super);
    function LiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LiteralContext.prototype.NullLiteral = function () { return this.tryGetToken(JavaScriptParser.NullLiteral, 0); };
    LiteralContext.prototype.BooleanLiteral = function () { return this.tryGetToken(JavaScriptParser.BooleanLiteral, 0); };
    LiteralContext.prototype.StringLiteral = function () { return this.tryGetToken(JavaScriptParser.StringLiteral, 0); };
    LiteralContext.prototype.TemplateStringLiteral = function () { return this.tryGetToken(JavaScriptParser.TemplateStringLiteral, 0); };
    LiteralContext.prototype.RegularExpressionLiteral = function () { return this.tryGetToken(JavaScriptParser.RegularExpressionLiteral, 0); };
    LiteralContext.prototype.numericLiteral = function () {
        return this.tryGetRuleContext(0, NumericLiteralContext);
    };
    LiteralContext.prototype.bigintLiteral = function () {
        return this.tryGetRuleContext(0, BigintLiteralContext);
    };
    Object.defineProperty(LiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_literal; },
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
var NumericLiteralContext = /** @class */ (function (_super) {
    __extends(NumericLiteralContext, _super);
    function NumericLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumericLiteralContext.prototype.DecimalLiteral = function () { return this.tryGetToken(JavaScriptParser.DecimalLiteral, 0); };
    NumericLiteralContext.prototype.HexIntegerLiteral = function () { return this.tryGetToken(JavaScriptParser.HexIntegerLiteral, 0); };
    NumericLiteralContext.prototype.OctalIntegerLiteral = function () { return this.tryGetToken(JavaScriptParser.OctalIntegerLiteral, 0); };
    NumericLiteralContext.prototype.OctalIntegerLiteral2 = function () { return this.tryGetToken(JavaScriptParser.OctalIntegerLiteral2, 0); };
    NumericLiteralContext.prototype.BinaryIntegerLiteral = function () { return this.tryGetToken(JavaScriptParser.BinaryIntegerLiteral, 0); };
    Object.defineProperty(NumericLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_numericLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NumericLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterNumericLiteral) {
            listener.enterNumericLiteral(this);
        }
    };
    // @Override
    NumericLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitNumericLiteral) {
            listener.exitNumericLiteral(this);
        }
    };
    // @Override
    NumericLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitNumericLiteral) {
            return visitor.visitNumericLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumericLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NumericLiteralContext = NumericLiteralContext;
var BigintLiteralContext = /** @class */ (function (_super) {
    __extends(BigintLiteralContext, _super);
    function BigintLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BigintLiteralContext.prototype.BigDecimalIntegerLiteral = function () { return this.tryGetToken(JavaScriptParser.BigDecimalIntegerLiteral, 0); };
    BigintLiteralContext.prototype.BigHexIntegerLiteral = function () { return this.tryGetToken(JavaScriptParser.BigHexIntegerLiteral, 0); };
    BigintLiteralContext.prototype.BigOctalIntegerLiteral = function () { return this.tryGetToken(JavaScriptParser.BigOctalIntegerLiteral, 0); };
    BigintLiteralContext.prototype.BigBinaryIntegerLiteral = function () { return this.tryGetToken(JavaScriptParser.BigBinaryIntegerLiteral, 0); };
    Object.defineProperty(BigintLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_bigintLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BigintLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterBigintLiteral) {
            listener.enterBigintLiteral(this);
        }
    };
    // @Override
    BigintLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitBigintLiteral) {
            listener.exitBigintLiteral(this);
        }
    };
    // @Override
    BigintLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitBigintLiteral) {
            return visitor.visitBigintLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BigintLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BigintLiteralContext = BigintLiteralContext;
var IdentifierNameContext = /** @class */ (function (_super) {
    __extends(IdentifierNameContext, _super);
    function IdentifierNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierNameContext.prototype.Identifier = function () { return this.tryGetToken(JavaScriptParser.Identifier, 0); };
    IdentifierNameContext.prototype.reservedWord = function () {
        return this.tryGetRuleContext(0, ReservedWordContext);
    };
    Object.defineProperty(IdentifierNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_identifierName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdentifierNameContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifierName) {
            listener.enterIdentifierName(this);
        }
    };
    // @Override
    IdentifierNameContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifierName) {
            listener.exitIdentifierName(this);
        }
    };
    // @Override
    IdentifierNameContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifierName) {
            return visitor.visitIdentifierName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentifierNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdentifierNameContext = IdentifierNameContext;
var ReservedWordContext = /** @class */ (function (_super) {
    __extends(ReservedWordContext, _super);
    function ReservedWordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReservedWordContext.prototype.keyword = function () {
        return this.tryGetRuleContext(0, KeywordContext);
    };
    ReservedWordContext.prototype.NullLiteral = function () { return this.tryGetToken(JavaScriptParser.NullLiteral, 0); };
    ReservedWordContext.prototype.BooleanLiteral = function () { return this.tryGetToken(JavaScriptParser.BooleanLiteral, 0); };
    Object.defineProperty(ReservedWordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_reservedWord; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReservedWordContext.prototype.enterRule = function (listener) {
        if (listener.enterReservedWord) {
            listener.enterReservedWord(this);
        }
    };
    // @Override
    ReservedWordContext.prototype.exitRule = function (listener) {
        if (listener.exitReservedWord) {
            listener.exitReservedWord(this);
        }
    };
    // @Override
    ReservedWordContext.prototype.accept = function (visitor) {
        if (visitor.visitReservedWord) {
            return visitor.visitReservedWord(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReservedWordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReservedWordContext = ReservedWordContext;
var KeywordContext = /** @class */ (function (_super) {
    __extends(KeywordContext, _super);
    function KeywordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeywordContext.prototype.Break = function () { return this.tryGetToken(JavaScriptParser.Break, 0); };
    KeywordContext.prototype.Do = function () { return this.tryGetToken(JavaScriptParser.Do, 0); };
    KeywordContext.prototype.Instanceof = function () { return this.tryGetToken(JavaScriptParser.Instanceof, 0); };
    KeywordContext.prototype.Typeof = function () { return this.tryGetToken(JavaScriptParser.Typeof, 0); };
    KeywordContext.prototype.Case = function () { return this.tryGetToken(JavaScriptParser.Case, 0); };
    KeywordContext.prototype.Else = function () { return this.tryGetToken(JavaScriptParser.Else, 0); };
    KeywordContext.prototype.New = function () { return this.tryGetToken(JavaScriptParser.New, 0); };
    KeywordContext.prototype.Var = function () { return this.tryGetToken(JavaScriptParser.Var, 0); };
    KeywordContext.prototype.Catch = function () { return this.tryGetToken(JavaScriptParser.Catch, 0); };
    KeywordContext.prototype.Finally = function () { return this.tryGetToken(JavaScriptParser.Finally, 0); };
    KeywordContext.prototype.Return = function () { return this.tryGetToken(JavaScriptParser.Return, 0); };
    KeywordContext.prototype.Void = function () { return this.tryGetToken(JavaScriptParser.Void, 0); };
    KeywordContext.prototype.Continue = function () { return this.tryGetToken(JavaScriptParser.Continue, 0); };
    KeywordContext.prototype.For = function () { return this.tryGetToken(JavaScriptParser.For, 0); };
    KeywordContext.prototype.Switch = function () { return this.tryGetToken(JavaScriptParser.Switch, 0); };
    KeywordContext.prototype.While = function () { return this.tryGetToken(JavaScriptParser.While, 0); };
    KeywordContext.prototype.Debugger = function () { return this.tryGetToken(JavaScriptParser.Debugger, 0); };
    KeywordContext.prototype.Function = function () { return this.tryGetToken(JavaScriptParser.Function, 0); };
    KeywordContext.prototype.This = function () { return this.tryGetToken(JavaScriptParser.This, 0); };
    KeywordContext.prototype.With = function () { return this.tryGetToken(JavaScriptParser.With, 0); };
    KeywordContext.prototype.Default = function () { return this.tryGetToken(JavaScriptParser.Default, 0); };
    KeywordContext.prototype.If = function () { return this.tryGetToken(JavaScriptParser.If, 0); };
    KeywordContext.prototype.Throw = function () { return this.tryGetToken(JavaScriptParser.Throw, 0); };
    KeywordContext.prototype.Delete = function () { return this.tryGetToken(JavaScriptParser.Delete, 0); };
    KeywordContext.prototype.In = function () { return this.tryGetToken(JavaScriptParser.In, 0); };
    KeywordContext.prototype.Try = function () { return this.tryGetToken(JavaScriptParser.Try, 0); };
    KeywordContext.prototype.Class = function () { return this.tryGetToken(JavaScriptParser.Class, 0); };
    KeywordContext.prototype.Enum = function () { return this.tryGetToken(JavaScriptParser.Enum, 0); };
    KeywordContext.prototype.Extends = function () { return this.tryGetToken(JavaScriptParser.Extends, 0); };
    KeywordContext.prototype.Super = function () { return this.tryGetToken(JavaScriptParser.Super, 0); };
    KeywordContext.prototype.Const = function () { return this.tryGetToken(JavaScriptParser.Const, 0); };
    KeywordContext.prototype.Export = function () { return this.tryGetToken(JavaScriptParser.Export, 0); };
    KeywordContext.prototype.Import = function () { return this.tryGetToken(JavaScriptParser.Import, 0); };
    KeywordContext.prototype.Implements = function () { return this.tryGetToken(JavaScriptParser.Implements, 0); };
    KeywordContext.prototype.Let = function () { return this.tryGetToken(JavaScriptParser.Let, 0); };
    KeywordContext.prototype.Private = function () { return this.tryGetToken(JavaScriptParser.Private, 0); };
    KeywordContext.prototype.Public = function () { return this.tryGetToken(JavaScriptParser.Public, 0); };
    KeywordContext.prototype.Interface = function () { return this.tryGetToken(JavaScriptParser.Interface, 0); };
    KeywordContext.prototype.Package = function () { return this.tryGetToken(JavaScriptParser.Package, 0); };
    KeywordContext.prototype.Protected = function () { return this.tryGetToken(JavaScriptParser.Protected, 0); };
    KeywordContext.prototype.Static = function () { return this.tryGetToken(JavaScriptParser.Static, 0); };
    KeywordContext.prototype.Yield = function () { return this.tryGetToken(JavaScriptParser.Yield, 0); };
    KeywordContext.prototype.Async = function () { return this.tryGetToken(JavaScriptParser.Async, 0); };
    KeywordContext.prototype.Await = function () { return this.tryGetToken(JavaScriptParser.Await, 0); };
    KeywordContext.prototype.From = function () { return this.tryGetToken(JavaScriptParser.From, 0); };
    KeywordContext.prototype.As = function () { return this.tryGetToken(JavaScriptParser.As, 0); };
    Object.defineProperty(KeywordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_keyword; },
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
var GetterContext = /** @class */ (function (_super) {
    __extends(GetterContext, _super);
    function GetterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GetterContext.prototype.Identifier = function () { return this.getToken(JavaScriptParser.Identifier, 0); };
    GetterContext.prototype.propertyName = function () {
        return this.getRuleContext(0, PropertyNameContext);
    };
    Object.defineProperty(GetterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_getter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GetterContext.prototype.enterRule = function (listener) {
        if (listener.enterGetter) {
            listener.enterGetter(this);
        }
    };
    // @Override
    GetterContext.prototype.exitRule = function (listener) {
        if (listener.exitGetter) {
            listener.exitGetter(this);
        }
    };
    // @Override
    GetterContext.prototype.accept = function (visitor) {
        if (visitor.visitGetter) {
            return visitor.visitGetter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GetterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GetterContext = GetterContext;
var SetterContext = /** @class */ (function (_super) {
    __extends(SetterContext, _super);
    function SetterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SetterContext.prototype.Identifier = function () { return this.getToken(JavaScriptParser.Identifier, 0); };
    SetterContext.prototype.propertyName = function () {
        return this.getRuleContext(0, PropertyNameContext);
    };
    Object.defineProperty(SetterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_setter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SetterContext.prototype.enterRule = function (listener) {
        if (listener.enterSetter) {
            listener.enterSetter(this);
        }
    };
    // @Override
    SetterContext.prototype.exitRule = function (listener) {
        if (listener.exitSetter) {
            listener.exitSetter(this);
        }
    };
    // @Override
    SetterContext.prototype.accept = function (visitor) {
        if (visitor.visitSetter) {
            return visitor.visitSetter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SetterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SetterContext = SetterContext;
var EosContext = /** @class */ (function (_super) {
    __extends(EosContext, _super);
    function EosContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EosContext.prototype.SemiColon = function () { return this.tryGetToken(JavaScriptParser.SemiColon, 0); };
    EosContext.prototype.EOF = function () { return this.tryGetToken(JavaScriptParser.EOF, 0); };
    Object.defineProperty(EosContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavaScriptParser.RULE_eos; },
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
