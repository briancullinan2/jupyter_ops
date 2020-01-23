"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/erlang/Erlang.g4 by ANTLR 4.7.3-SNAPSHOT
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
var ErlangParser = /** @class */ (function (_super) {
    __extends(ErlangParser, _super);
    function ErlangParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(ErlangParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(ErlangParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return ErlangParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErlangParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "Erlang.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErlangParser.prototype, "ruleNames", {
        // @Override
        get: function () { return ErlangParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErlangParser.prototype, "serializedATN", {
        // @Override
        get: function () { return ErlangParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    ErlangParser.prototype.forms = function () {
        var _localctx = new FormsContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, ErlangParser.RULE_forms);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 203;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 202;
                            this.form();
                        }
                    }
                    this.state = 205;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === ErlangParser.T__1 || _la === ErlangParser.TokAtom || _la === ErlangParser.AttrName);
                this.state = 207;
                this.match(ErlangParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.form = function () {
        var _localctx = new FormContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, ErlangParser.RULE_form);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 212;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                    case 1:
                        {
                            this.state = 209;
                            this.attribute();
                        }
                        break;
                    case 2:
                        {
                            this.state = 210;
                            this.function();
                        }
                        break;
                    case 3:
                        {
                            this.state = 211;
                            this.ruleClauses();
                        }
                        break;
                }
                this.state = 214;
                this.match(ErlangParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.tokAtom = function () {
        var _localctx = new TokAtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, ErlangParser.RULE_tokAtom);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 216;
                this.match(ErlangParser.TokAtom);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.tokVar = function () {
        var _localctx = new TokVarContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, ErlangParser.RULE_tokVar);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 218;
                this.match(ErlangParser.TokVar);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.tokFloat = function () {
        var _localctx = new TokFloatContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, ErlangParser.RULE_tokFloat);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 220;
                this.match(ErlangParser.TokFloat);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.tokInteger = function () {
        var _localctx = new TokIntegerContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, ErlangParser.RULE_tokInteger);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 222;
                this.match(ErlangParser.TokInteger);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.tokChar = function () {
        var _localctx = new TokCharContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, ErlangParser.RULE_tokChar);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 224;
                this.match(ErlangParser.TokChar);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.tokString = function () {
        var _localctx = new TokStringContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, ErlangParser.RULE_tokString);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 226;
                this.match(ErlangParser.TokString);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.attribute = function () {
        var _localctx = new AttributeContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, ErlangParser.RULE_attribute);
        try {
            this.state = 244;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 228;
                        this.match(ErlangParser.T__1);
                        this.state = 229;
                        this.tokAtom();
                        this.state = 230;
                        this.attrVal();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 232;
                        this.match(ErlangParser.T__1);
                        this.state = 233;
                        this.tokAtom();
                        this.state = 234;
                        this.typedAttrVal();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 236;
                        this.match(ErlangParser.T__1);
                        this.state = 237;
                        this.tokAtom();
                        this.state = 238;
                        this.match(ErlangParser.T__2);
                        this.state = 239;
                        this.typedAttrVal();
                        this.state = 240;
                        this.match(ErlangParser.T__3);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 242;
                        this.match(ErlangParser.AttrName);
                        this.state = 243;
                        this.typeSpec();
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
    ErlangParser.prototype.typeSpec = function () {
        var _localctx = new TypeSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, ErlangParser.RULE_typeSpec);
        try {
            this.state = 254;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ErlangParser.TokAtom:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 246;
                        this.specFun();
                        this.state = 247;
                        this.typeSigs();
                    }
                    break;
                case ErlangParser.T__2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 249;
                        this.match(ErlangParser.T__2);
                        this.state = 250;
                        this.specFun();
                        this.state = 251;
                        this.typeSigs();
                        this.state = 252;
                        this.match(ErlangParser.T__3);
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
    ErlangParser.prototype.specFun = function () {
        var _localctx = new SpecFunContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, ErlangParser.RULE_specFun);
        try {
            this.state = 273;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 256;
                        this.tokAtom();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 257;
                        this.tokAtom();
                        this.state = 258;
                        this.match(ErlangParser.T__4);
                        this.state = 259;
                        this.tokAtom();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 261;
                        this.tokAtom();
                        this.state = 262;
                        this.match(ErlangParser.T__5);
                        this.state = 263;
                        this.tokInteger();
                        this.state = 264;
                        this.match(ErlangParser.T__6);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 266;
                        this.tokAtom();
                        this.state = 267;
                        this.match(ErlangParser.T__4);
                        this.state = 268;
                        this.tokAtom();
                        this.state = 269;
                        this.match(ErlangParser.T__5);
                        this.state = 270;
                        this.tokInteger();
                        this.state = 271;
                        this.match(ErlangParser.T__6);
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
    ErlangParser.prototype.typedAttrVal = function () {
        var _localctx = new TypedAttrValContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, ErlangParser.RULE_typedAttrVal);
        try {
            this.state = 283;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 275;
                        this.expr();
                        this.state = 276;
                        this.match(ErlangParser.T__7);
                        this.state = 277;
                        this.typedRecordFields();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 279;
                        this.expr();
                        this.state = 280;
                        this.match(ErlangParser.T__6);
                        this.state = 281;
                        this.topType();
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
    ErlangParser.prototype.typedRecordFields = function () {
        var _localctx = new TypedRecordFieldsContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, ErlangParser.RULE_typedRecordFields);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 285;
                this.match(ErlangParser.T__8);
                this.state = 286;
                this.typedExprs();
                this.state = 287;
                this.match(ErlangParser.T__9);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.typedExprs = function () {
        var _localctx = new TypedExprsContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, ErlangParser.RULE_typedExprs);
        try {
            this.state = 302;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 289;
                        this.typedExpr();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 290;
                        this.typedExpr();
                        this.state = 291;
                        this.match(ErlangParser.T__7);
                        this.state = 292;
                        this.typedExprs();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 294;
                        this.expr();
                        this.state = 295;
                        this.match(ErlangParser.T__7);
                        this.state = 296;
                        this.typedExprs();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 298;
                        this.typedExpr();
                        this.state = 299;
                        this.match(ErlangParser.T__7);
                        this.state = 300;
                        this.exprs();
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
    ErlangParser.prototype.typedExpr = function () {
        var _localctx = new TypedExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, ErlangParser.RULE_typedExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 304;
                this.expr();
                this.state = 305;
                this.match(ErlangParser.T__6);
                this.state = 306;
                this.topType();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.typeSigs = function () {
        var _localctx = new TypeSigsContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, ErlangParser.RULE_typeSigs);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 308;
                this.typeSig();
                this.state = 313;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ErlangParser.T__10) {
                    {
                        {
                            this.state = 309;
                            this.match(ErlangParser.T__10);
                            this.state = 310;
                            this.typeSig();
                        }
                    }
                    this.state = 315;
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
    ErlangParser.prototype.typeSig = function () {
        var _localctx = new TypeSigContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, ErlangParser.RULE_typeSig);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 316;
                this.funType();
                this.state = 319;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ErlangParser.T__11) {
                    {
                        this.state = 317;
                        this.match(ErlangParser.T__11);
                        this.state = 318;
                        this.typeGuards();
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
    ErlangParser.prototype.typeGuards = function () {
        var _localctx = new TypeGuardsContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, ErlangParser.RULE_typeGuards);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 321;
                this.typeGuard();
                this.state = 326;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ErlangParser.T__7) {
                    {
                        {
                            this.state = 322;
                            this.match(ErlangParser.T__7);
                            this.state = 323;
                            this.typeGuard();
                        }
                    }
                    this.state = 328;
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
    ErlangParser.prototype.typeGuard = function () {
        var _localctx = new TypeGuardContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, ErlangParser.RULE_typeGuard);
        try {
            this.state = 338;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ErlangParser.TokAtom:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 329;
                        this.tokAtom();
                        this.state = 330;
                        this.match(ErlangParser.T__2);
                        this.state = 331;
                        this.topTypes();
                        this.state = 332;
                        this.match(ErlangParser.T__3);
                    }
                    break;
                case ErlangParser.TokVar:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 334;
                        this.tokVar();
                        this.state = 335;
                        this.match(ErlangParser.T__6);
                        this.state = 336;
                        this.topType();
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
    ErlangParser.prototype.topTypes = function () {
        var _localctx = new TopTypesContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, ErlangParser.RULE_topTypes);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 340;
                this.topType();
                this.state = 345;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ErlangParser.T__7) {
                    {
                        {
                            this.state = 341;
                            this.match(ErlangParser.T__7);
                            this.state = 342;
                            this.topType();
                        }
                    }
                    this.state = 347;
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
    ErlangParser.prototype.topType = function () {
        var _localctx = new TopTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, ErlangParser.RULE_topType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 351;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                    case 1:
                        {
                            this.state = 348;
                            this.tokVar();
                            this.state = 349;
                            this.match(ErlangParser.T__6);
                        }
                        break;
                }
                this.state = 353;
                this.topType100();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.topType100 = function () {
        var _localctx = new TopType100Context(this._ctx, this.state);
        this.enterRule(_localctx, 42, ErlangParser.RULE_topType100);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 355;
                this.type200();
                this.state = 358;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ErlangParser.T__12) {
                    {
                        this.state = 356;
                        this.match(ErlangParser.T__12);
                        this.state = 357;
                        this.topType100();
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
    ErlangParser.prototype.type200 = function () {
        var _localctx = new Type200Context(this._ctx, this.state);
        this.enterRule(_localctx, 44, ErlangParser.RULE_type200);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 360;
                this.type300(0);
                this.state = 363;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ErlangParser.T__13) {
                    {
                        this.state = 361;
                        this.match(ErlangParser.T__13);
                        this.state = 362;
                        this.type300(0);
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
    ErlangParser.prototype.type300 = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Type300Context(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 46;
        this.enterRecursionRule(_localctx, 46, ErlangParser.RULE_type300, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 366;
                    this.type400(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 374;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new Type300Context(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, ErlangParser.RULE_type300);
                                this.state = 368;
                                if (!(this.precpred(this._ctx, 2))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                }
                                this.state = 369;
                                this.addOp();
                                this.state = 370;
                                this.type400(0);
                            }
                        }
                    }
                    this.state = 376;
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.type400 = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Type400Context(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 48;
        this.enterRecursionRule(_localctx, 48, ErlangParser.RULE_type400, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 378;
                    this.type500();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 386;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new Type400Context(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, ErlangParser.RULE_type400);
                                this.state = 380;
                                if (!(this.precpred(this._ctx, 2))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                }
                                this.state = 381;
                                this.multOp();
                                this.state = 382;
                                this.type500();
                            }
                        }
                    }
                    this.state = 388;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
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
    ErlangParser.prototype.type500 = function () {
        var _localctx = new Type500Context(this._ctx, this.state);
        this.enterRule(_localctx, 50, ErlangParser.RULE_type500);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 390;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ErlangParser.T__1 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ErlangParser.T__39 - 40)) | (1 << (ErlangParser.T__40 - 40)) | (1 << (ErlangParser.T__41 - 40)))) !== 0)) {
                    {
                        this.state = 389;
                        this.prefixOp();
                    }
                }
                this.state = 392;
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
    ErlangParser.prototype.type = function () {
        var _localctx = new TypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, ErlangParser.RULE_type);
        try {
            this.state = 461;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 394;
                        this.match(ErlangParser.T__2);
                        this.state = 395;
                        this.topType();
                        this.state = 396;
                        this.match(ErlangParser.T__3);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 398;
                        this.tokVar();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 399;
                        this.tokAtom();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 400;
                        this.tokAtom();
                        this.state = 401;
                        this.match(ErlangParser.T__2);
                        this.state = 402;
                        this.match(ErlangParser.T__3);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 404;
                        this.tokAtom();
                        this.state = 405;
                        this.match(ErlangParser.T__2);
                        this.state = 406;
                        this.topTypes();
                        this.state = 407;
                        this.match(ErlangParser.T__3);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 409;
                        this.tokAtom();
                        this.state = 410;
                        this.match(ErlangParser.T__4);
                        this.state = 411;
                        this.tokAtom();
                        this.state = 412;
                        this.match(ErlangParser.T__2);
                        this.state = 413;
                        this.match(ErlangParser.T__3);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 415;
                        this.tokAtom();
                        this.state = 416;
                        this.match(ErlangParser.T__4);
                        this.state = 417;
                        this.tokAtom();
                        this.state = 418;
                        this.match(ErlangParser.T__2);
                        this.state = 419;
                        this.topTypes();
                        this.state = 420;
                        this.match(ErlangParser.T__3);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 422;
                        this.match(ErlangParser.T__14);
                        this.state = 423;
                        this.match(ErlangParser.T__15);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 424;
                        this.match(ErlangParser.T__14);
                        this.state = 425;
                        this.topType();
                        this.state = 426;
                        this.match(ErlangParser.T__15);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 428;
                        this.match(ErlangParser.T__14);
                        this.state = 429;
                        this.topType();
                        this.state = 430;
                        this.match(ErlangParser.T__7);
                        this.state = 431;
                        this.match(ErlangParser.T__16);
                        this.state = 432;
                        this.match(ErlangParser.T__15);
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 434;
                        this.match(ErlangParser.T__8);
                        this.state = 435;
                        this.match(ErlangParser.T__9);
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 436;
                        this.match(ErlangParser.T__8);
                        this.state = 437;
                        this.topTypes();
                        this.state = 438;
                        this.match(ErlangParser.T__9);
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 440;
                        this.match(ErlangParser.T__17);
                        this.state = 441;
                        this.tokAtom();
                        this.state = 442;
                        this.match(ErlangParser.T__8);
                        this.state = 443;
                        this.match(ErlangParser.T__9);
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 445;
                        this.match(ErlangParser.T__17);
                        this.state = 446;
                        this.tokAtom();
                        this.state = 447;
                        this.match(ErlangParser.T__8);
                        this.state = 448;
                        this.fieldTypes();
                        this.state = 449;
                        this.match(ErlangParser.T__9);
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 451;
                        this.binaryType();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 452;
                        this.tokInteger();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 453;
                        this.match(ErlangParser.T__18);
                        this.state = 454;
                        this.match(ErlangParser.T__2);
                        this.state = 455;
                        this.match(ErlangParser.T__3);
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 456;
                        this.match(ErlangParser.T__18);
                        this.state = 457;
                        this.match(ErlangParser.T__2);
                        this.state = 458;
                        this.funType100();
                        this.state = 459;
                        this.match(ErlangParser.T__3);
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
    ErlangParser.prototype.funType100 = function () {
        var _localctx = new FunType100Context(this._ctx, this.state);
        this.enterRule(_localctx, 54, ErlangParser.RULE_funType100);
        try {
            this.state = 469;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 463;
                        this.match(ErlangParser.T__2);
                        this.state = 464;
                        this.match(ErlangParser.T__16);
                        this.state = 465;
                        this.match(ErlangParser.T__3);
                        this.state = 466;
                        this.match(ErlangParser.T__19);
                        this.state = 467;
                        this.topType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 468;
                        this.funType();
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
    ErlangParser.prototype.funType = function () {
        var _localctx = new FunTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, ErlangParser.RULE_funType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 471;
                this.match(ErlangParser.T__2);
                this.state = 473;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ErlangParser.T__1) | (1 << ErlangParser.T__2) | (1 << ErlangParser.T__8) | (1 << ErlangParser.T__14) | (1 << ErlangParser.T__17) | (1 << ErlangParser.T__18) | (1 << ErlangParser.T__20))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ErlangParser.T__39 - 40)) | (1 << (ErlangParser.T__40 - 40)) | (1 << (ErlangParser.T__41 - 40)) | (1 << (ErlangParser.TokAtom - 40)) | (1 << (ErlangParser.TokVar - 40)) | (1 << (ErlangParser.TokInteger - 40)))) !== 0)) {
                    {
                        this.state = 472;
                        this.topTypes();
                    }
                }
                this.state = 475;
                this.match(ErlangParser.T__3);
                this.state = 476;
                this.match(ErlangParser.T__19);
                this.state = 477;
                this.topType();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.fieldTypes = function () {
        var _localctx = new FieldTypesContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, ErlangParser.RULE_fieldTypes);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 479;
                this.fieldType();
                this.state = 484;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ErlangParser.T__7) {
                    {
                        {
                            this.state = 480;
                            this.match(ErlangParser.T__7);
                            this.state = 481;
                            this.fieldType();
                        }
                    }
                    this.state = 486;
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
    ErlangParser.prototype.fieldType = function () {
        var _localctx = new FieldTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, ErlangParser.RULE_fieldType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 487;
                this.tokAtom();
                this.state = 488;
                this.match(ErlangParser.T__6);
                this.state = 489;
                this.topType();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.binaryType = function () {
        var _localctx = new BinaryTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, ErlangParser.RULE_binaryType);
        try {
            this.state = 507;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 491;
                        this.match(ErlangParser.T__20);
                        this.state = 492;
                        this.match(ErlangParser.T__21);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 493;
                        this.match(ErlangParser.T__20);
                        this.state = 494;
                        this.binBaseType();
                        this.state = 495;
                        this.match(ErlangParser.T__21);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 497;
                        this.match(ErlangParser.T__20);
                        this.state = 498;
                        this.binUnitType();
                        this.state = 499;
                        this.match(ErlangParser.T__21);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 501;
                        this.match(ErlangParser.T__20);
                        this.state = 502;
                        this.binBaseType();
                        this.state = 503;
                        this.match(ErlangParser.T__7);
                        this.state = 504;
                        this.binUnitType();
                        this.state = 505;
                        this.match(ErlangParser.T__21);
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
    ErlangParser.prototype.binBaseType = function () {
        var _localctx = new BinBaseTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, ErlangParser.RULE_binBaseType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 509;
                this.tokVar();
                this.state = 510;
                this.match(ErlangParser.T__4);
                this.state = 511;
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
    ErlangParser.prototype.binUnitType = function () {
        var _localctx = new BinUnitTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, ErlangParser.RULE_binUnitType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 513;
                this.tokVar();
                this.state = 514;
                this.match(ErlangParser.T__4);
                this.state = 515;
                this.tokVar();
                this.state = 516;
                this.match(ErlangParser.T__22);
                this.state = 517;
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
    ErlangParser.prototype.attrVal = function () {
        var _localctx = new AttrValContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, ErlangParser.RULE_attrVal);
        try {
            this.state = 534;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 23, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 519;
                        this.expr();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 520;
                        this.match(ErlangParser.T__2);
                        this.state = 521;
                        this.expr();
                        this.state = 522;
                        this.match(ErlangParser.T__3);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 524;
                        this.expr();
                        this.state = 525;
                        this.match(ErlangParser.T__7);
                        this.state = 526;
                        this.exprs();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 528;
                        this.match(ErlangParser.T__2);
                        this.state = 529;
                        this.expr();
                        this.state = 530;
                        this.match(ErlangParser.T__7);
                        this.state = 531;
                        this.exprs();
                        this.state = 532;
                        this.match(ErlangParser.T__3);
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
    ErlangParser.prototype.function = function () {
        var _localctx = new FunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, ErlangParser.RULE_function);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 536;
                this.functionClause();
                this.state = 541;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ErlangParser.T__10) {
                    {
                        {
                            this.state = 537;
                            this.match(ErlangParser.T__10);
                            this.state = 538;
                            this.functionClause();
                        }
                    }
                    this.state = 543;
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
    ErlangParser.prototype.functionClause = function () {
        var _localctx = new FunctionClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, ErlangParser.RULE_functionClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 544;
                this.tokAtom();
                this.state = 545;
                this.clauseArgs();
                this.state = 546;
                this.clauseGuard();
                this.state = 547;
                this.clauseBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.clauseArgs = function () {
        var _localctx = new ClauseArgsContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, ErlangParser.RULE_clauseArgs);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 549;
                this.argumentList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.clauseGuard = function () {
        var _localctx = new ClauseGuardContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, ErlangParser.RULE_clauseGuard);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 553;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ErlangParser.T__11) {
                    {
                        this.state = 551;
                        this.match(ErlangParser.T__11);
                        this.state = 552;
                        this.guard();
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
    ErlangParser.prototype.clauseBody = function () {
        var _localctx = new ClauseBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, ErlangParser.RULE_clauseBody);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 555;
                this.match(ErlangParser.T__19);
                this.state = 556;
                this.exprs();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.expr = function () {
        var _localctx = new ExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, ErlangParser.RULE_expr);
        try {
            this.state = 561;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ErlangParser.T__23:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 558;
                        this.match(ErlangParser.T__23);
                        this.state = 559;
                        this.expr();
                    }
                    break;
                case ErlangParser.T__1:
                case ErlangParser.T__2:
                case ErlangParser.T__8:
                case ErlangParser.T__14:
                case ErlangParser.T__17:
                case ErlangParser.T__18:
                case ErlangParser.T__20:
                case ErlangParser.T__28:
                case ErlangParser.T__33:
                case ErlangParser.T__34:
                case ErlangParser.T__36:
                case ErlangParser.T__38:
                case ErlangParser.T__39:
                case ErlangParser.T__40:
                case ErlangParser.T__41:
                case ErlangParser.TokAtom:
                case ErlangParser.TokVar:
                case ErlangParser.TokFloat:
                case ErlangParser.TokInteger:
                case ErlangParser.TokChar:
                case ErlangParser.TokString:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 560;
                        this.expr100();
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
    ErlangParser.prototype.expr100 = function () {
        var _localctx = new Expr100Context(this._ctx, this.state);
        this.enterRule(_localctx, 82, ErlangParser.RULE_expr100);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 563;
                this.expr150();
                this.state = 568;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ErlangParser.T__24 || _la === ErlangParser.T__25) {
                    {
                        {
                            this.state = 564;
                            _la = this._input.LA(1);
                            if (!(_la === ErlangParser.T__24 || _la === ErlangParser.T__25)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 565;
                            this.expr150();
                        }
                    }
                    this.state = 570;
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
    ErlangParser.prototype.expr150 = function () {
        var _localctx = new Expr150Context(this._ctx, this.state);
        this.enterRule(_localctx, 84, ErlangParser.RULE_expr150);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 571;
                this.expr160();
                this.state = 576;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ErlangParser.T__26) {
                    {
                        {
                            this.state = 572;
                            this.match(ErlangParser.T__26);
                            this.state = 573;
                            this.expr160();
                        }
                    }
                    this.state = 578;
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
    ErlangParser.prototype.expr160 = function () {
        var _localctx = new Expr160Context(this._ctx, this.state);
        this.enterRule(_localctx, 86, ErlangParser.RULE_expr160);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 579;
                this.expr200();
                this.state = 584;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ErlangParser.T__27) {
                    {
                        {
                            this.state = 580;
                            this.match(ErlangParser.T__27);
                            this.state = 581;
                            this.expr200();
                        }
                    }
                    this.state = 586;
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
    ErlangParser.prototype.expr200 = function () {
        var _localctx = new Expr200Context(this._ctx, this.state);
        this.enterRule(_localctx, 88, ErlangParser.RULE_expr200);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 587;
                this.expr300();
                this.state = 591;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (ErlangParser.T__54 - 55)) | (1 << (ErlangParser.T__55 - 55)) | (1 << (ErlangParser.T__56 - 55)) | (1 << (ErlangParser.T__57 - 55)) | (1 << (ErlangParser.T__58 - 55)) | (1 << (ErlangParser.T__59 - 55)) | (1 << (ErlangParser.T__60 - 55)) | (1 << (ErlangParser.T__61 - 55)))) !== 0)) {
                    {
                        this.state = 588;
                        this.compOp();
                        this.state = 589;
                        this.expr300();
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
    ErlangParser.prototype.expr300 = function () {
        var _localctx = new Expr300Context(this._ctx, this.state);
        this.enterRule(_localctx, 90, ErlangParser.RULE_expr300);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 593;
                this.expr400();
                this.state = 599;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ErlangParser.T__52 || _la === ErlangParser.T__53) {
                    {
                        {
                            this.state = 594;
                            this.listOp();
                            this.state = 595;
                            this.expr400();
                        }
                    }
                    this.state = 601;
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
    ErlangParser.prototype.expr400 = function () {
        var _localctx = new Expr400Context(this._ctx, this.state);
        this.enterRule(_localctx, 92, ErlangParser.RULE_expr400);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 602;
                this.expr500();
                this.state = 608;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ErlangParser.T__1 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ErlangParser.T__39 - 40)) | (1 << (ErlangParser.T__46 - 40)) | (1 << (ErlangParser.T__47 - 40)) | (1 << (ErlangParser.T__48 - 40)) | (1 << (ErlangParser.T__49 - 40)) | (1 << (ErlangParser.T__50 - 40)) | (1 << (ErlangParser.T__51 - 40)))) !== 0)) {
                    {
                        {
                            this.state = 603;
                            this.addOp();
                            this.state = 604;
                            this.expr500();
                        }
                    }
                    this.state = 610;
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
    ErlangParser.prototype.expr500 = function () {
        var _localctx = new Expr500Context(this._ctx, this.state);
        this.enterRule(_localctx, 94, ErlangParser.RULE_expr500);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 611;
                this.expr600();
                this.state = 617;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ErlangParser.T__5 || _la === ErlangParser.T__22 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (ErlangParser.T__42 - 43)) | (1 << (ErlangParser.T__43 - 43)) | (1 << (ErlangParser.T__44 - 43)) | (1 << (ErlangParser.T__45 - 43)))) !== 0)) {
                    {
                        {
                            this.state = 612;
                            this.multOp();
                            this.state = 613;
                            this.expr600();
                        }
                    }
                    this.state = 619;
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
    ErlangParser.prototype.expr600 = function () {
        var _localctx = new Expr600Context(this._ctx, this.state);
        this.enterRule(_localctx, 96, ErlangParser.RULE_expr600);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 621;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ErlangParser.T__1 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ErlangParser.T__39 - 40)) | (1 << (ErlangParser.T__40 - 40)) | (1 << (ErlangParser.T__41 - 40)))) !== 0)) {
                    {
                        this.state = 620;
                        this.prefixOp();
                    }
                }
                this.state = 623;
                this.expr700();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.expr700 = function () {
        var _localctx = new Expr700Context(this._ctx, this.state);
        this.enterRule(_localctx, 98, ErlangParser.RULE_expr700);
        try {
            this.state = 628;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 625;
                        this.functionCall();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 626;
                        this.recordExpr(0);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 627;
                        this.expr800();
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
    ErlangParser.prototype.expr800 = function () {
        var _localctx = new Expr800Context(this._ctx, this.state);
        this.enterRule(_localctx, 100, ErlangParser.RULE_expr800);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 630;
                this.exprMax();
                this.state = 633;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ErlangParser.T__4) {
                    {
                        this.state = 631;
                        this.match(ErlangParser.T__4);
                        this.state = 632;
                        this.exprMax();
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
    ErlangParser.prototype.exprMax = function () {
        var _localctx = new ExprMaxContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, ErlangParser.RULE_exprMax);
        try {
            this.state = 655;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 635;
                        this.tokVar();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 636;
                        this.atomic();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 637;
                        this.list();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 638;
                        this.binary();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 639;
                        this.listComprehension();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 640;
                        this.binaryComprehension();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 641;
                        this.tuple();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 642;
                        this.match(ErlangParser.T__2);
                        this.state = 643;
                        this.expr();
                        this.state = 644;
                        this.match(ErlangParser.T__3);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 646;
                        this.match(ErlangParser.T__28);
                        this.state = 647;
                        this.exprs();
                        this.state = 648;
                        this.match(ErlangParser.T__29);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 650;
                        this.ifExpr();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 651;
                        this.caseExpr();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 652;
                        this.receiveExpr();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 653;
                        this.funExpr();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 654;
                        this.tryExpr();
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
    ErlangParser.prototype.list = function () {
        var _localctx = new ListContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, ErlangParser.RULE_list);
        try {
            this.state = 663;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 657;
                        this.match(ErlangParser.T__14);
                        this.state = 658;
                        this.match(ErlangParser.T__15);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 659;
                        this.match(ErlangParser.T__14);
                        this.state = 660;
                        this.expr();
                        this.state = 661;
                        this.tail();
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
    ErlangParser.prototype.tail = function () {
        var _localctx = new TailContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, ErlangParser.RULE_tail);
        try {
            this.state = 674;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ErlangParser.T__15:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 665;
                        this.match(ErlangParser.T__15);
                    }
                    break;
                case ErlangParser.T__12:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 666;
                        this.match(ErlangParser.T__12);
                        this.state = 667;
                        this.expr();
                        this.state = 668;
                        this.match(ErlangParser.T__15);
                    }
                    break;
                case ErlangParser.T__7:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 670;
                        this.match(ErlangParser.T__7);
                        this.state = 671;
                        this.expr();
                        this.state = 672;
                        this.tail();
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
    ErlangParser.prototype.binary = function () {
        var _localctx = new BinaryContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, ErlangParser.RULE_binary);
        try {
            this.state = 682;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 676;
                        this.match(ErlangParser.T__20);
                        this.state = 677;
                        this.match(ErlangParser.T__21);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 678;
                        this.match(ErlangParser.T__20);
                        this.state = 679;
                        this.binElements();
                        this.state = 680;
                        this.match(ErlangParser.T__21);
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
    ErlangParser.prototype.binElements = function () {
        var _localctx = new BinElementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, ErlangParser.RULE_binElements);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 684;
                this.binElement();
                this.state = 689;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ErlangParser.T__7) {
                    {
                        {
                            this.state = 685;
                            this.match(ErlangParser.T__7);
                            this.state = 686;
                            this.binElement();
                        }
                    }
                    this.state = 691;
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
    ErlangParser.prototype.binElement = function () {
        var _localctx = new BinElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, ErlangParser.RULE_binElement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 692;
                this.bitExpr();
                this.state = 693;
                this.optBitSizeExpr();
                this.state = 694;
                this.optBitTypeList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.bitExpr = function () {
        var _localctx = new BitExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, ErlangParser.RULE_bitExpr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 697;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ErlangParser.T__1 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ErlangParser.T__39 - 40)) | (1 << (ErlangParser.T__40 - 40)) | (1 << (ErlangParser.T__41 - 40)))) !== 0)) {
                    {
                        this.state = 696;
                        this.prefixOp();
                    }
                }
                this.state = 699;
                this.exprMax();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.optBitSizeExpr = function () {
        var _localctx = new OptBitSizeExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, ErlangParser.RULE_optBitSizeExpr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 703;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ErlangParser.T__4) {
                    {
                        this.state = 701;
                        this.match(ErlangParser.T__4);
                        this.state = 702;
                        this.bitSizeExpr();
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
    ErlangParser.prototype.optBitTypeList = function () {
        var _localctx = new OptBitTypeListContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, ErlangParser.RULE_optBitTypeList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 707;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ErlangParser.T__5) {
                    {
                        this.state = 705;
                        this.match(ErlangParser.T__5);
                        this.state = 706;
                        this.bitTypeList();
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
    ErlangParser.prototype.bitTypeList = function () {
        var _localctx = new BitTypeListContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, ErlangParser.RULE_bitTypeList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 709;
                this.bitType();
                this.state = 714;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ErlangParser.T__1) {
                    {
                        {
                            this.state = 710;
                            this.match(ErlangParser.T__1);
                            this.state = 711;
                            this.bitType();
                        }
                    }
                    this.state = 716;
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
    ErlangParser.prototype.bitType = function () {
        var _localctx = new BitTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, ErlangParser.RULE_bitType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 717;
                this.tokAtom();
                this.state = 720;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ErlangParser.T__4) {
                    {
                        this.state = 718;
                        this.match(ErlangParser.T__4);
                        this.state = 719;
                        this.tokInteger();
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
    ErlangParser.prototype.bitSizeExpr = function () {
        var _localctx = new BitSizeExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, ErlangParser.RULE_bitSizeExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 722;
                this.exprMax();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.listComprehension = function () {
        var _localctx = new ListComprehensionContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, ErlangParser.RULE_listComprehension);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 724;
                this.match(ErlangParser.T__14);
                this.state = 725;
                this.expr();
                this.state = 726;
                this.match(ErlangParser.T__30);
                this.state = 727;
                this.lcExprs();
                this.state = 728;
                this.match(ErlangParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.binaryComprehension = function () {
        var _localctx = new BinaryComprehensionContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, ErlangParser.RULE_binaryComprehension);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 730;
                this.match(ErlangParser.T__20);
                this.state = 731;
                this.binary();
                this.state = 732;
                this.match(ErlangParser.T__30);
                this.state = 733;
                this.lcExprs();
                this.state = 734;
                this.match(ErlangParser.T__21);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.lcExprs = function () {
        var _localctx = new LcExprsContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, ErlangParser.RULE_lcExprs);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 736;
                this.lcExpr();
                this.state = 741;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ErlangParser.T__7) {
                    {
                        {
                            this.state = 737;
                            this.match(ErlangParser.T__7);
                            this.state = 738;
                            this.lcExpr();
                        }
                    }
                    this.state = 743;
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
    ErlangParser.prototype.lcExpr = function () {
        var _localctx = new LcExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, ErlangParser.RULE_lcExpr);
        try {
            this.state = 753;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 48, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 744;
                        this.expr();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 745;
                        this.expr();
                        this.state = 746;
                        this.match(ErlangParser.T__31);
                        this.state = 747;
                        this.expr();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 749;
                        this.binary();
                        this.state = 750;
                        this.match(ErlangParser.T__32);
                        this.state = 751;
                        this.expr();
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
    ErlangParser.prototype.tuple = function () {
        var _localctx = new TupleContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, ErlangParser.RULE_tuple);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 755;
                this.match(ErlangParser.T__8);
                this.state = 757;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ErlangParser.T__1) | (1 << ErlangParser.T__2) | (1 << ErlangParser.T__8) | (1 << ErlangParser.T__14) | (1 << ErlangParser.T__17) | (1 << ErlangParser.T__18) | (1 << ErlangParser.T__20) | (1 << ErlangParser.T__23) | (1 << ErlangParser.T__28))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ErlangParser.T__33 - 34)) | (1 << (ErlangParser.T__34 - 34)) | (1 << (ErlangParser.T__36 - 34)) | (1 << (ErlangParser.T__38 - 34)) | (1 << (ErlangParser.T__39 - 34)) | (1 << (ErlangParser.T__40 - 34)) | (1 << (ErlangParser.T__41 - 34)) | (1 << (ErlangParser.TokAtom - 34)) | (1 << (ErlangParser.TokVar - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ErlangParser.TokFloat - 66)) | (1 << (ErlangParser.TokInteger - 66)) | (1 << (ErlangParser.TokChar - 66)) | (1 << (ErlangParser.TokString - 66)))) !== 0)) {
                    {
                        this.state = 756;
                        this.exprs();
                    }
                }
                this.state = 759;
                this.match(ErlangParser.T__9);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.recordExpr = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new RecordExprContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 136;
        this.enterRecursionRule(_localctx, 136, ErlangParser.RULE_recordExpr, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 763;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ErlangParser.T__2) | (1 << ErlangParser.T__8) | (1 << ErlangParser.T__14) | (1 << ErlangParser.T__18) | (1 << ErlangParser.T__20) | (1 << ErlangParser.T__28))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ErlangParser.T__33 - 34)) | (1 << (ErlangParser.T__34 - 34)) | (1 << (ErlangParser.T__36 - 34)) | (1 << (ErlangParser.T__38 - 34)) | (1 << (ErlangParser.TokAtom - 34)) | (1 << (ErlangParser.TokVar - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ErlangParser.TokFloat - 66)) | (1 << (ErlangParser.TokInteger - 66)) | (1 << (ErlangParser.TokChar - 66)) | (1 << (ErlangParser.TokString - 66)))) !== 0)) {
                        {
                            this.state = 762;
                            this.exprMax();
                        }
                    }
                    this.state = 765;
                    this.match(ErlangParser.T__17);
                    this.state = 766;
                    this.tokAtom();
                    this.state = 770;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case ErlangParser.T__0:
                            {
                                this.state = 767;
                                this.match(ErlangParser.T__0);
                                this.state = 768;
                                this.tokAtom();
                            }
                            break;
                        case ErlangParser.T__8:
                            {
                                this.state = 769;
                                this.recordTuple();
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 782;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new RecordExprContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, ErlangParser.RULE_recordExpr);
                                this.state = 772;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 773;
                                this.match(ErlangParser.T__17);
                                this.state = 774;
                                this.tokAtom();
                                this.state = 778;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case ErlangParser.T__0:
                                        {
                                            this.state = 775;
                                            this.match(ErlangParser.T__0);
                                            this.state = 776;
                                            this.tokAtom();
                                        }
                                        break;
                                    case ErlangParser.T__8:
                                        {
                                            this.state = 777;
                                            this.recordTuple();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                        }
                    }
                    this.state = 784;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
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
    ErlangParser.prototype.recordTuple = function () {
        var _localctx = new RecordTupleContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, ErlangParser.RULE_recordTuple);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 785;
                this.match(ErlangParser.T__8);
                this.state = 787;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ErlangParser.TokAtom || _la === ErlangParser.TokVar) {
                    {
                        this.state = 786;
                        this.recordFields();
                    }
                }
                this.state = 789;
                this.match(ErlangParser.T__9);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.recordFields = function () {
        var _localctx = new RecordFieldsContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, ErlangParser.RULE_recordFields);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 791;
                this.recordField();
                this.state = 796;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ErlangParser.T__7) {
                    {
                        {
                            this.state = 792;
                            this.match(ErlangParser.T__7);
                            this.state = 793;
                            this.recordField();
                        }
                    }
                    this.state = 798;
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
    ErlangParser.prototype.recordField = function () {
        var _localctx = new RecordFieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, ErlangParser.RULE_recordField);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 801;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case ErlangParser.TokVar:
                        {
                            this.state = 799;
                            this.tokVar();
                        }
                        break;
                    case ErlangParser.TokAtom:
                        {
                            this.state = 800;
                            this.tokAtom();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 803;
                this.match(ErlangParser.T__24);
                this.state = 804;
                this.expr();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.functionCall = function () {
        var _localctx = new FunctionCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, ErlangParser.RULE_functionCall);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 806;
                this.expr800();
                this.state = 807;
                this.argumentList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.ifExpr = function () {
        var _localctx = new IfExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, ErlangParser.RULE_ifExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 809;
                this.match(ErlangParser.T__33);
                this.state = 810;
                this.ifClauses();
                this.state = 811;
                this.match(ErlangParser.T__29);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.ifClauses = function () {
        var _localctx = new IfClausesContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, ErlangParser.RULE_ifClauses);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 813;
                this.ifClause();
                this.state = 818;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ErlangParser.T__10) {
                    {
                        {
                            this.state = 814;
                            this.match(ErlangParser.T__10);
                            this.state = 815;
                            this.ifClause();
                        }
                    }
                    this.state = 820;
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
    ErlangParser.prototype.ifClause = function () {
        var _localctx = new IfClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, ErlangParser.RULE_ifClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 821;
                this.guard();
                this.state = 822;
                this.clauseBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.caseExpr = function () {
        var _localctx = new CaseExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, ErlangParser.RULE_caseExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 824;
                this.match(ErlangParser.T__34);
                this.state = 825;
                this.expr();
                this.state = 826;
                this.match(ErlangParser.T__35);
                this.state = 827;
                this.crClauses();
                this.state = 828;
                this.match(ErlangParser.T__29);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.crClauses = function () {
        var _localctx = new CrClausesContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, ErlangParser.RULE_crClauses);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 830;
                this.crClause();
                this.state = 835;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ErlangParser.T__10) {
                    {
                        {
                            this.state = 831;
                            this.match(ErlangParser.T__10);
                            this.state = 832;
                            this.crClause();
                        }
                    }
                    this.state = 837;
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
    ErlangParser.prototype.crClause = function () {
        var _localctx = new CrClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, ErlangParser.RULE_crClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 838;
                this.expr();
                this.state = 839;
                this.clauseGuard();
                this.state = 840;
                this.clauseBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.receiveExpr = function () {
        var _localctx = new ReceiveExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, ErlangParser.RULE_receiveExpr);
        try {
            this.state = 859;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 59, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 842;
                        this.match(ErlangParser.T__36);
                        this.state = 843;
                        this.crClauses();
                        this.state = 844;
                        this.match(ErlangParser.T__29);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 846;
                        this.match(ErlangParser.T__36);
                        this.state = 847;
                        this.match(ErlangParser.T__37);
                        this.state = 848;
                        this.expr();
                        this.state = 849;
                        this.clauseBody();
                        this.state = 850;
                        this.match(ErlangParser.T__29);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 852;
                        this.match(ErlangParser.T__36);
                        this.state = 853;
                        this.crClauses();
                        this.state = 854;
                        this.match(ErlangParser.T__37);
                        this.state = 855;
                        this.expr();
                        this.state = 856;
                        this.clauseBody();
                        this.state = 857;
                        this.match(ErlangParser.T__29);
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
    ErlangParser.prototype.funExpr = function () {
        var _localctx = new FunExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, ErlangParser.RULE_funExpr);
        try {
            this.state = 877;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 861;
                        this.match(ErlangParser.T__18);
                        this.state = 862;
                        this.tokAtom();
                        this.state = 863;
                        this.match(ErlangParser.T__5);
                        this.state = 864;
                        this.tokInteger();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 866;
                        this.match(ErlangParser.T__18);
                        this.state = 867;
                        this.atomOrVar();
                        this.state = 868;
                        this.match(ErlangParser.T__4);
                        this.state = 869;
                        this.atomOrVar();
                        this.state = 870;
                        this.match(ErlangParser.T__5);
                        this.state = 871;
                        this.integerOrVar();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 873;
                        this.match(ErlangParser.T__18);
                        this.state = 874;
                        this.funClauses();
                        this.state = 875;
                        this.match(ErlangParser.T__29);
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
    ErlangParser.prototype.atomOrVar = function () {
        var _localctx = new AtomOrVarContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, ErlangParser.RULE_atomOrVar);
        try {
            this.state = 881;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ErlangParser.TokAtom:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 879;
                        this.tokAtom();
                    }
                    break;
                case ErlangParser.TokVar:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 880;
                        this.tokVar();
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
    ErlangParser.prototype.integerOrVar = function () {
        var _localctx = new IntegerOrVarContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, ErlangParser.RULE_integerOrVar);
        try {
            this.state = 885;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ErlangParser.TokInteger:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 883;
                        this.tokInteger();
                    }
                    break;
                case ErlangParser.TokVar:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 884;
                        this.tokVar();
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
    ErlangParser.prototype.funClauses = function () {
        var _localctx = new FunClausesContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, ErlangParser.RULE_funClauses);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 887;
                this.funClause();
                this.state = 892;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ErlangParser.T__10) {
                    {
                        {
                            this.state = 888;
                            this.match(ErlangParser.T__10);
                            this.state = 889;
                            this.funClause();
                        }
                    }
                    this.state = 894;
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
    ErlangParser.prototype.funClause = function () {
        var _localctx = new FunClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, ErlangParser.RULE_funClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 895;
                this.argumentList();
                this.state = 896;
                this.clauseGuard();
                this.state = 897;
                this.clauseBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.tryExpr = function () {
        var _localctx = new TryExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, ErlangParser.RULE_tryExpr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 899;
                this.match(ErlangParser.T__38);
                this.state = 900;
                this.exprs();
                this.state = 903;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ErlangParser.T__35) {
                    {
                        this.state = 901;
                        this.match(ErlangParser.T__35);
                        this.state = 902;
                        this.crClauses();
                    }
                }
                this.state = 905;
                this.tryCatch();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.tryCatch = function () {
        var _localctx = new TryCatchContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, ErlangParser.RULE_tryCatch);
        try {
            this.state = 921;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 65, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 907;
                        this.match(ErlangParser.T__23);
                        this.state = 908;
                        this.tryClauses();
                        this.state = 909;
                        this.match(ErlangParser.T__29);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 911;
                        this.match(ErlangParser.T__23);
                        this.state = 912;
                        this.tryClauses();
                        this.state = 913;
                        this.match(ErlangParser.T__37);
                        this.state = 914;
                        this.exprs();
                        this.state = 915;
                        this.match(ErlangParser.T__29);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 917;
                        this.match(ErlangParser.T__37);
                        this.state = 918;
                        this.exprs();
                        this.state = 919;
                        this.match(ErlangParser.T__29);
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
    ErlangParser.prototype.tryClauses = function () {
        var _localctx = new TryClausesContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, ErlangParser.RULE_tryClauses);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 923;
                this.tryClause();
                this.state = 928;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ErlangParser.T__10) {
                    {
                        {
                            this.state = 924;
                            this.match(ErlangParser.T__10);
                            this.state = 925;
                            this.tryClause();
                        }
                    }
                    this.state = 930;
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
    ErlangParser.prototype.tryClause = function () {
        var _localctx = new TryClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, ErlangParser.RULE_tryClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 934;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 67, this._ctx)) {
                    case 1:
                        {
                            this.state = 931;
                            this.atomOrVar();
                            this.state = 932;
                            this.match(ErlangParser.T__4);
                        }
                        break;
                }
                this.state = 936;
                this.expr();
                this.state = 937;
                this.clauseGuard();
                this.state = 938;
                this.clauseBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.argumentList = function () {
        var _localctx = new ArgumentListContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, ErlangParser.RULE_argumentList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 940;
                this.match(ErlangParser.T__2);
                this.state = 942;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ErlangParser.T__1) | (1 << ErlangParser.T__2) | (1 << ErlangParser.T__8) | (1 << ErlangParser.T__14) | (1 << ErlangParser.T__17) | (1 << ErlangParser.T__18) | (1 << ErlangParser.T__20) | (1 << ErlangParser.T__23) | (1 << ErlangParser.T__28))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ErlangParser.T__33 - 34)) | (1 << (ErlangParser.T__34 - 34)) | (1 << (ErlangParser.T__36 - 34)) | (1 << (ErlangParser.T__38 - 34)) | (1 << (ErlangParser.T__39 - 34)) | (1 << (ErlangParser.T__40 - 34)) | (1 << (ErlangParser.T__41 - 34)) | (1 << (ErlangParser.TokAtom - 34)) | (1 << (ErlangParser.TokVar - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ErlangParser.TokFloat - 66)) | (1 << (ErlangParser.TokInteger - 66)) | (1 << (ErlangParser.TokChar - 66)) | (1 << (ErlangParser.TokString - 66)))) !== 0)) {
                    {
                        this.state = 941;
                        this.exprs();
                    }
                }
                this.state = 944;
                this.match(ErlangParser.T__3);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.exprs = function () {
        var _localctx = new ExprsContext(this._ctx, this.state);
        this.enterRule(_localctx, 180, ErlangParser.RULE_exprs);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 946;
                this.expr();
                this.state = 951;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ErlangParser.T__7) {
                    {
                        {
                            this.state = 947;
                            this.match(ErlangParser.T__7);
                            this.state = 948;
                            this.expr();
                        }
                    }
                    this.state = 953;
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
    ErlangParser.prototype.guard = function () {
        var _localctx = new GuardContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, ErlangParser.RULE_guard);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 954;
                this.exprs();
                this.state = 959;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ErlangParser.T__10) {
                    {
                        {
                            this.state = 955;
                            this.match(ErlangParser.T__10);
                            this.state = 956;
                            this.exprs();
                        }
                    }
                    this.state = 961;
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
    ErlangParser.prototype.atomic = function () {
        var _localctx = new AtomicContext(this._ctx, this.state);
        this.enterRule(_localctx, 184, ErlangParser.RULE_atomic);
        var _la;
        try {
            this.state = 971;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ErlangParser.TokChar:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 962;
                        this.tokChar();
                    }
                    break;
                case ErlangParser.TokInteger:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 963;
                        this.tokInteger();
                    }
                    break;
                case ErlangParser.TokFloat:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 964;
                        this.tokFloat();
                    }
                    break;
                case ErlangParser.TokAtom:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 965;
                        this.tokAtom();
                    }
                    break;
                case ErlangParser.TokString:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 967;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 966;
                                    this.tokString();
                                }
                            }
                            this.state = 969;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === ErlangParser.TokString);
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
    ErlangParser.prototype.prefixOp = function () {
        var _localctx = new PrefixOpContext(this._ctx, this.state);
        this.enterRule(_localctx, 186, ErlangParser.RULE_prefixOp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 973;
                _la = this._input.LA(1);
                if (!(_la === ErlangParser.T__1 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ErlangParser.T__39 - 40)) | (1 << (ErlangParser.T__40 - 40)) | (1 << (ErlangParser.T__41 - 40)))) !== 0))) {
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
    ErlangParser.prototype.multOp = function () {
        var _localctx = new MultOpContext(this._ctx, this.state);
        this.enterRule(_localctx, 188, ErlangParser.RULE_multOp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 975;
                _la = this._input.LA(1);
                if (!(_la === ErlangParser.T__5 || _la === ErlangParser.T__22 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (ErlangParser.T__42 - 43)) | (1 << (ErlangParser.T__43 - 43)) | (1 << (ErlangParser.T__44 - 43)) | (1 << (ErlangParser.T__45 - 43)))) !== 0))) {
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
    ErlangParser.prototype.addOp = function () {
        var _localctx = new AddOpContext(this._ctx, this.state);
        this.enterRule(_localctx, 190, ErlangParser.RULE_addOp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 977;
                _la = this._input.LA(1);
                if (!(_la === ErlangParser.T__1 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ErlangParser.T__39 - 40)) | (1 << (ErlangParser.T__46 - 40)) | (1 << (ErlangParser.T__47 - 40)) | (1 << (ErlangParser.T__48 - 40)) | (1 << (ErlangParser.T__49 - 40)) | (1 << (ErlangParser.T__50 - 40)) | (1 << (ErlangParser.T__51 - 40)))) !== 0))) {
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
    ErlangParser.prototype.listOp = function () {
        var _localctx = new ListOpContext(this._ctx, this.state);
        this.enterRule(_localctx, 192, ErlangParser.RULE_listOp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 979;
                _la = this._input.LA(1);
                if (!(_la === ErlangParser.T__52 || _la === ErlangParser.T__53)) {
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
    ErlangParser.prototype.compOp = function () {
        var _localctx = new CompOpContext(this._ctx, this.state);
        this.enterRule(_localctx, 194, ErlangParser.RULE_compOp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 981;
                _la = this._input.LA(1);
                if (!(((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (ErlangParser.T__54 - 55)) | (1 << (ErlangParser.T__55 - 55)) | (1 << (ErlangParser.T__56 - 55)) | (1 << (ErlangParser.T__57 - 55)) | (1 << (ErlangParser.T__58 - 55)) | (1 << (ErlangParser.T__59 - 55)) | (1 << (ErlangParser.T__60 - 55)) | (1 << (ErlangParser.T__61 - 55)))) !== 0))) {
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
    ErlangParser.prototype.ruleClauses = function () {
        var _localctx = new RuleClausesContext(this._ctx, this.state);
        this.enterRule(_localctx, 196, ErlangParser.RULE_ruleClauses);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 983;
                this.ruleClause();
                this.state = 988;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ErlangParser.T__10) {
                    {
                        {
                            this.state = 984;
                            this.match(ErlangParser.T__10);
                            this.state = 985;
                            this.ruleClause();
                        }
                    }
                    this.state = 990;
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
    ErlangParser.prototype.ruleClause = function () {
        var _localctx = new RuleClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 198, ErlangParser.RULE_ruleClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 991;
                this.tokAtom();
                this.state = 992;
                this.clauseArgs();
                this.state = 993;
                this.clauseGuard();
                this.state = 994;
                this.ruleBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    ErlangParser.prototype.ruleBody = function () {
        var _localctx = new RuleBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 200, ErlangParser.RULE_ruleBody);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 996;
                this.match(ErlangParser.T__62);
                this.state = 997;
                this.lcExprs();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    ErlangParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 23:
                return this.type300_sempred(_localctx, predIndex);
            case 24:
                return this.type400_sempred(_localctx, predIndex);
            case 68:
                return this.recordExpr_sempred(_localctx, predIndex);
        }
        return true;
    };
    ErlangParser.prototype.type300_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 2);
        }
        return true;
    };
    ErlangParser.prototype.type400_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 1:
                return this.precpred(this._ctx, 2);
        }
        return true;
    };
    ErlangParser.prototype.recordExpr_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 2:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    Object.defineProperty(ErlangParser, "_ATN", {
        get: function () {
            if (!ErlangParser.__ATN) {
                ErlangParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(ErlangParser._serializedATN));
            }
            return ErlangParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    ErlangParser.T__0 = 1;
    ErlangParser.T__1 = 2;
    ErlangParser.T__2 = 3;
    ErlangParser.T__3 = 4;
    ErlangParser.T__4 = 5;
    ErlangParser.T__5 = 6;
    ErlangParser.T__6 = 7;
    ErlangParser.T__7 = 8;
    ErlangParser.T__8 = 9;
    ErlangParser.T__9 = 10;
    ErlangParser.T__10 = 11;
    ErlangParser.T__11 = 12;
    ErlangParser.T__12 = 13;
    ErlangParser.T__13 = 14;
    ErlangParser.T__14 = 15;
    ErlangParser.T__15 = 16;
    ErlangParser.T__16 = 17;
    ErlangParser.T__17 = 18;
    ErlangParser.T__18 = 19;
    ErlangParser.T__19 = 20;
    ErlangParser.T__20 = 21;
    ErlangParser.T__21 = 22;
    ErlangParser.T__22 = 23;
    ErlangParser.T__23 = 24;
    ErlangParser.T__24 = 25;
    ErlangParser.T__25 = 26;
    ErlangParser.T__26 = 27;
    ErlangParser.T__27 = 28;
    ErlangParser.T__28 = 29;
    ErlangParser.T__29 = 30;
    ErlangParser.T__30 = 31;
    ErlangParser.T__31 = 32;
    ErlangParser.T__32 = 33;
    ErlangParser.T__33 = 34;
    ErlangParser.T__34 = 35;
    ErlangParser.T__35 = 36;
    ErlangParser.T__36 = 37;
    ErlangParser.T__37 = 38;
    ErlangParser.T__38 = 39;
    ErlangParser.T__39 = 40;
    ErlangParser.T__40 = 41;
    ErlangParser.T__41 = 42;
    ErlangParser.T__42 = 43;
    ErlangParser.T__43 = 44;
    ErlangParser.T__44 = 45;
    ErlangParser.T__45 = 46;
    ErlangParser.T__46 = 47;
    ErlangParser.T__47 = 48;
    ErlangParser.T__48 = 49;
    ErlangParser.T__49 = 50;
    ErlangParser.T__50 = 51;
    ErlangParser.T__51 = 52;
    ErlangParser.T__52 = 53;
    ErlangParser.T__53 = 54;
    ErlangParser.T__54 = 55;
    ErlangParser.T__55 = 56;
    ErlangParser.T__56 = 57;
    ErlangParser.T__57 = 58;
    ErlangParser.T__58 = 59;
    ErlangParser.T__59 = 60;
    ErlangParser.T__60 = 61;
    ErlangParser.T__61 = 62;
    ErlangParser.T__62 = 63;
    ErlangParser.TokAtom = 64;
    ErlangParser.TokVar = 65;
    ErlangParser.TokFloat = 66;
    ErlangParser.TokInteger = 67;
    ErlangParser.TokChar = 68;
    ErlangParser.TokString = 69;
    ErlangParser.AttrName = 70;
    ErlangParser.Comment = 71;
    ErlangParser.WS = 72;
    ErlangParser.RULE_forms = 0;
    ErlangParser.RULE_form = 1;
    ErlangParser.RULE_tokAtom = 2;
    ErlangParser.RULE_tokVar = 3;
    ErlangParser.RULE_tokFloat = 4;
    ErlangParser.RULE_tokInteger = 5;
    ErlangParser.RULE_tokChar = 6;
    ErlangParser.RULE_tokString = 7;
    ErlangParser.RULE_attribute = 8;
    ErlangParser.RULE_typeSpec = 9;
    ErlangParser.RULE_specFun = 10;
    ErlangParser.RULE_typedAttrVal = 11;
    ErlangParser.RULE_typedRecordFields = 12;
    ErlangParser.RULE_typedExprs = 13;
    ErlangParser.RULE_typedExpr = 14;
    ErlangParser.RULE_typeSigs = 15;
    ErlangParser.RULE_typeSig = 16;
    ErlangParser.RULE_typeGuards = 17;
    ErlangParser.RULE_typeGuard = 18;
    ErlangParser.RULE_topTypes = 19;
    ErlangParser.RULE_topType = 20;
    ErlangParser.RULE_topType100 = 21;
    ErlangParser.RULE_type200 = 22;
    ErlangParser.RULE_type300 = 23;
    ErlangParser.RULE_type400 = 24;
    ErlangParser.RULE_type500 = 25;
    ErlangParser.RULE_type = 26;
    ErlangParser.RULE_funType100 = 27;
    ErlangParser.RULE_funType = 28;
    ErlangParser.RULE_fieldTypes = 29;
    ErlangParser.RULE_fieldType = 30;
    ErlangParser.RULE_binaryType = 31;
    ErlangParser.RULE_binBaseType = 32;
    ErlangParser.RULE_binUnitType = 33;
    ErlangParser.RULE_attrVal = 34;
    ErlangParser.RULE_function = 35;
    ErlangParser.RULE_functionClause = 36;
    ErlangParser.RULE_clauseArgs = 37;
    ErlangParser.RULE_clauseGuard = 38;
    ErlangParser.RULE_clauseBody = 39;
    ErlangParser.RULE_expr = 40;
    ErlangParser.RULE_expr100 = 41;
    ErlangParser.RULE_expr150 = 42;
    ErlangParser.RULE_expr160 = 43;
    ErlangParser.RULE_expr200 = 44;
    ErlangParser.RULE_expr300 = 45;
    ErlangParser.RULE_expr400 = 46;
    ErlangParser.RULE_expr500 = 47;
    ErlangParser.RULE_expr600 = 48;
    ErlangParser.RULE_expr700 = 49;
    ErlangParser.RULE_expr800 = 50;
    ErlangParser.RULE_exprMax = 51;
    ErlangParser.RULE_list = 52;
    ErlangParser.RULE_tail = 53;
    ErlangParser.RULE_binary = 54;
    ErlangParser.RULE_binElements = 55;
    ErlangParser.RULE_binElement = 56;
    ErlangParser.RULE_bitExpr = 57;
    ErlangParser.RULE_optBitSizeExpr = 58;
    ErlangParser.RULE_optBitTypeList = 59;
    ErlangParser.RULE_bitTypeList = 60;
    ErlangParser.RULE_bitType = 61;
    ErlangParser.RULE_bitSizeExpr = 62;
    ErlangParser.RULE_listComprehension = 63;
    ErlangParser.RULE_binaryComprehension = 64;
    ErlangParser.RULE_lcExprs = 65;
    ErlangParser.RULE_lcExpr = 66;
    ErlangParser.RULE_tuple = 67;
    ErlangParser.RULE_recordExpr = 68;
    ErlangParser.RULE_recordTuple = 69;
    ErlangParser.RULE_recordFields = 70;
    ErlangParser.RULE_recordField = 71;
    ErlangParser.RULE_functionCall = 72;
    ErlangParser.RULE_ifExpr = 73;
    ErlangParser.RULE_ifClauses = 74;
    ErlangParser.RULE_ifClause = 75;
    ErlangParser.RULE_caseExpr = 76;
    ErlangParser.RULE_crClauses = 77;
    ErlangParser.RULE_crClause = 78;
    ErlangParser.RULE_receiveExpr = 79;
    ErlangParser.RULE_funExpr = 80;
    ErlangParser.RULE_atomOrVar = 81;
    ErlangParser.RULE_integerOrVar = 82;
    ErlangParser.RULE_funClauses = 83;
    ErlangParser.RULE_funClause = 84;
    ErlangParser.RULE_tryExpr = 85;
    ErlangParser.RULE_tryCatch = 86;
    ErlangParser.RULE_tryClauses = 87;
    ErlangParser.RULE_tryClause = 88;
    ErlangParser.RULE_argumentList = 89;
    ErlangParser.RULE_exprs = 90;
    ErlangParser.RULE_guard = 91;
    ErlangParser.RULE_atomic = 92;
    ErlangParser.RULE_prefixOp = 93;
    ErlangParser.RULE_multOp = 94;
    ErlangParser.RULE_addOp = 95;
    ErlangParser.RULE_listOp = 96;
    ErlangParser.RULE_compOp = 97;
    ErlangParser.RULE_ruleClauses = 98;
    ErlangParser.RULE_ruleClause = 99;
    ErlangParser.RULE_ruleBody = 100;
    // tslint:disable:no-trailing-whitespace
    ErlangParser.ruleNames = [
        "forms", "form", "tokAtom", "tokVar", "tokFloat", "tokInteger", "tokChar",
        "tokString", "attribute", "typeSpec", "specFun", "typedAttrVal", "typedRecordFields",
        "typedExprs", "typedExpr", "typeSigs", "typeSig", "typeGuards", "typeGuard",
        "topTypes", "topType", "topType100", "type200", "type300", "type400",
        "type500", "type", "funType100", "funType", "fieldTypes", "fieldType",
        "binaryType", "binBaseType", "binUnitType", "attrVal", "function", "functionClause",
        "clauseArgs", "clauseGuard", "clauseBody", "expr", "expr100", "expr150",
        "expr160", "expr200", "expr300", "expr400", "expr500", "expr600", "expr700",
        "expr800", "exprMax", "list", "tail", "binary", "binElements", "binElement",
        "bitExpr", "optBitSizeExpr", "optBitTypeList", "bitTypeList", "bitType",
        "bitSizeExpr", "listComprehension", "binaryComprehension", "lcExprs",
        "lcExpr", "tuple", "recordExpr", "recordTuple", "recordFields", "recordField",
        "functionCall", "ifExpr", "ifClauses", "ifClause", "caseExpr", "crClauses",
        "crClause", "receiveExpr", "funExpr", "atomOrVar", "integerOrVar", "funClauses",
        "funClause", "tryExpr", "tryCatch", "tryClauses", "tryClause", "argumentList",
        "exprs", "guard", "atomic", "prefixOp", "multOp", "addOp", "listOp", "compOp",
        "ruleClauses", "ruleClause", "ruleBody",
    ];
    ErlangParser._LITERAL_NAMES = [
        undefined, "'.'", "'-'", "'('", "')'", "':'", "'/'", "'::'", "','", "'{'",
        "'}'", "';'", "'when'", "'|'", "'..'", "'['", "']'", "'...'", "'#'", "'fun'",
        "'->'", "'<<'", "'>>'", "'*'", "'catch'", "'='", "'!'", "'orelse'", "'andalso'",
        "'begin'", "'end'", "'||'", "'<-'", "'<='", "'if'", "'case'", "'of'",
        "'receive'", "'after'", "'try'", "'+'", "'bnot'", "'not'", "'div'", "'rem'",
        "'band'", "'and'", "'bor'", "'bxor'", "'bsl'", "'bsr'", "'or'", "'xor'",
        "'++'", "'--'", "'=='", "'/='", "'=<'", "'<'", "'>='", "'>'", "'=:='",
        "'=/='", "':-'",
    ];
    ErlangParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "TokAtom", "TokVar", "TokFloat", "TokInteger", "TokChar", "TokString",
        "AttrName", "Comment", "WS",
    ];
    ErlangParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(ErlangParser._LITERAL_NAMES, ErlangParser._SYMBOLIC_NAMES, []);
    ErlangParser._serializedATNSegments = 2;
    ErlangParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03J\u03EA\x04\x02" +
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
        "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
        "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
        "`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x03\x02\x06\x02\xCE" +
        "\n\x02\r\x02\x0E\x02\xCF\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03" +
        "\xD7\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03" +
        "\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03" +
        "\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05" +
        "\n\xF7\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0101" +
        "\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f" +
        "\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0114\n\f\x03\r\x03\r\x03\r" +
        "\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u011E\n\r\x03\x0E\x03\x0E\x03\x0E" +
        "\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
        "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0131\n\x0F\x03\x10\x03" +
        "\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x07\x11\u013A\n\x11\f\x11" +
        "\x0E\x11\u013D\v\x11\x03\x12\x03\x12\x03\x12\x05\x12\u0142\n\x12\x03\x13" +
        "\x03\x13\x03\x13\x07\x13\u0147\n\x13\f\x13\x0E\x13\u014A\v\x13\x03\x14" +
        "\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14" +
        "\u0155\n\x14\x03\x15\x03\x15\x03\x15\x07\x15\u015A\n\x15\f\x15\x0E\x15" +
        "\u015D\v\x15\x03\x16\x03\x16\x03\x16\x05\x16\u0162\n\x16\x03\x16\x03\x16" +
        "\x03\x17\x03\x17\x03\x17\x05\x17\u0169\n\x17\x03\x18\x03\x18\x03\x18\x05" +
        "\x18\u016E\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
        "\x07\x19\u0177\n\x19\f\x19\x0E\x19\u017A\v\x19\x03\x1A\x03\x1A\x03\x1A" +
        "\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u0183\n\x1A\f\x1A\x0E\x1A\u0186" +
        "\v\x1A\x03\x1B\x05\x1B\u0189\n\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03" +
        "\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
        "\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
        "\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
        "\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
        "\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
        "\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
        "\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
        "\x1C\x03\x1C\x05\x1C\u01D0\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
        "\x03\x1D\x05\x1D\u01D8\n\x1D\x03\x1E\x03\x1E\x05\x1E\u01DC\n\x1E\x03\x1E" +
        "\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u01E5\n\x1F\f" +
        "\x1F\x0E\x1F\u01E8\v\x1F\x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03!" +
        "\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x05!\u01FE\n!" +
        "\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x03$\x03$\x03$" +
        "\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x05$\u0219" +
        "\n$\x03%\x03%\x03%\x07%\u021E\n%\f%\x0E%\u0221\v%\x03&\x03&\x03&\x03&" +
        "\x03&\x03\'\x03\'\x03(\x03(\x05(\u022C\n(\x03)\x03)\x03)\x03*\x03*\x03" +
        "*\x05*\u0234\n*\x03+\x03+\x03+\x07+\u0239\n+\f+\x0E+\u023C\v+\x03,\x03" +
        ",\x03,\x07,\u0241\n,\f,\x0E,\u0244\v,\x03-\x03-\x03-\x07-\u0249\n-\f-" +
        "\x0E-\u024C\v-\x03.\x03.\x03.\x03.\x05.\u0252\n.\x03/\x03/\x03/\x03/\x07" +
        "/\u0258\n/\f/\x0E/\u025B\v/\x030\x030\x030\x030\x070\u0261\n0\f0\x0E0" +
        "\u0264\v0\x031\x031\x031\x031\x071\u026A\n1\f1\x0E1\u026D\v1\x032\x05" +
        "2\u0270\n2\x032\x032\x033\x033\x033\x053\u0277\n3\x034\x034\x034\x054" +
        "\u027C\n4\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035" +
        "\x035\x035\x035\x035\x035\x035\x035\x035\x055\u0292\n5\x036\x036\x036" +
        "\x036\x036\x036\x056\u029A\n6\x037\x037\x037\x037\x037\x037\x037\x037" +
        "\x037\x057\u02A5\n7\x038\x038\x038\x038\x038\x038\x058\u02AD\n8\x039\x03" +
        "9\x039\x079\u02B2\n9\f9\x0E9\u02B5\v9\x03:\x03:\x03:\x03:\x03;\x05;\u02BC" +
        "\n;\x03;\x03;\x03<\x03<\x05<\u02C2\n<\x03=\x03=\x05=\u02C6\n=\x03>\x03" +
        ">\x03>\x07>\u02CB\n>\f>\x0E>\u02CE\v>\x03?\x03?\x03?\x05?\u02D3\n?\x03" +
        "@\x03@\x03A\x03A\x03A\x03A\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x03B\x03" +
        "C\x03C\x03C\x07C\u02E6\nC\fC\x0EC\u02E9\vC\x03D\x03D\x03D\x03D\x03D\x03" +
        "D\x03D\x03D\x03D\x05D\u02F4\nD\x03E\x03E\x05E\u02F8\nE\x03E\x03E\x03F" +
        "\x03F\x05F\u02FE\nF\x03F\x03F\x03F\x03F\x03F\x05F\u0305\nF\x03F\x03F\x03" +
        "F\x03F\x03F\x03F\x05F\u030D\nF\x07F\u030F\nF\fF\x0EF\u0312\vF\x03G\x03" +
        "G\x05G\u0316\nG\x03G\x03G\x03H\x03H\x03H\x07H\u031D\nH\fH\x0EH\u0320\v" +
        "H\x03I\x03I\x05I\u0324\nI\x03I\x03I\x03I\x03J\x03J\x03J\x03K\x03K\x03" +
        "K\x03K\x03L\x03L\x03L\x07L\u0333\nL\fL\x0EL\u0336\vL\x03M\x03M\x03M\x03" +
        "N\x03N\x03N\x03N\x03N\x03N\x03O\x03O\x03O\x07O\u0344\nO\fO\x0EO\u0347" +
        "\vO\x03P\x03P\x03P\x03P\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03" +
        "Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u035E\nQ\x03R\x03R\x03R\x03" +
        "R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x05R\u0370" +
        "\nR\x03S\x03S\x05S\u0374\nS\x03T\x03T\x05T\u0378\nT\x03U\x03U\x03U\x07" +
        "U\u037D\nU\fU\x0EU\u0380\vU\x03V\x03V\x03V\x03V\x03W\x03W\x03W\x03W\x05" +
        "W\u038A\nW\x03W\x03W\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03" +
        "X\x03X\x03X\x03X\x03X\x05X\u039C\nX\x03Y\x03Y\x03Y\x07Y\u03A1\nY\fY\x0E" +
        "Y\u03A4\vY\x03Z\x03Z\x03Z\x05Z\u03A9\nZ\x03Z\x03Z\x03Z\x03Z\x03[\x03[" +
        "\x05[\u03B1\n[\x03[\x03[\x03\\\x03\\\x03\\\x07\\\u03B8\n\\\f\\\x0E\\\u03BB" +
        "\v\\\x03]\x03]\x03]\x07]\u03C0\n]\f]\x0E]\u03C3\v]\x03^\x03^\x03^\x03" +
        "^\x03^\x06^\u03CA\n^\r^\x0E^\u03CB\x05^\u03CE\n^\x03_\x03_\x03`\x03`\x03" +
        "a\x03a\x03b\x03b\x03c\x03c\x03d\x03d\x03d\x07d\u03DD\nd\fd\x0Ed\u03E0" +
        "\vd\x03e\x03e\x03e\x03e\x03e\x03f\x03f\x03f\x03f\x02\x02\x0502\x8Ag\x02" +
        "\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
        "\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
        ",\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02" +
        "H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02" +
        "d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02" +
        "\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02" +
        "\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02" +
        "\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02" +
        "\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02" +
        "\xC8\x02\xCA\x02\x02\b\x03\x02\x1B\x1C\x04\x02\x04\x04*,\x05\x02\b\b\x19" +
        "\x19-0\x05\x02\x04\x04**16\x03\x0278\x03\x029@\x02\u03FE\x02\xCD\x03\x02" +
        "\x02\x02\x04\xD6\x03\x02\x02\x02\x06\xDA\x03\x02\x02\x02\b\xDC\x03\x02" +
        "\x02\x02\n\xDE\x03\x02\x02\x02\f\xE0\x03\x02\x02\x02\x0E\xE2\x03\x02\x02" +
        "\x02\x10\xE4\x03\x02\x02\x02\x12\xF6\x03\x02\x02\x02\x14\u0100\x03\x02" +
        "\x02\x02\x16\u0113\x03\x02\x02\x02\x18\u011D\x03\x02\x02\x02\x1A\u011F" +
        "\x03\x02\x02\x02\x1C\u0130\x03\x02\x02\x02\x1E\u0132\x03\x02\x02\x02 " +
        "\u0136\x03\x02\x02\x02\"\u013E\x03\x02\x02\x02$\u0143\x03\x02\x02\x02" +
        "&\u0154\x03\x02\x02\x02(\u0156\x03\x02\x02\x02*\u0161\x03\x02\x02\x02" +
        ",\u0165\x03\x02\x02\x02.\u016A\x03\x02\x02\x020\u016F\x03\x02\x02\x02" +
        "2\u017B\x03\x02\x02\x024\u0188\x03\x02\x02\x026\u01CF\x03\x02\x02\x02" +
        "8\u01D7\x03\x02\x02\x02:\u01D9\x03\x02\x02\x02<\u01E1\x03\x02\x02\x02" +
        ">\u01E9\x03\x02\x02\x02@\u01FD\x03\x02\x02\x02B\u01FF\x03\x02\x02\x02" +
        "D\u0203\x03\x02\x02\x02F\u0218\x03\x02\x02\x02H\u021A\x03\x02\x02\x02" +
        "J\u0222\x03\x02\x02\x02L\u0227\x03\x02\x02\x02N\u022B\x03\x02\x02\x02" +
        "P\u022D\x03\x02\x02\x02R\u0233\x03\x02\x02\x02T\u0235\x03\x02\x02\x02" +
        "V\u023D\x03\x02\x02\x02X\u0245\x03\x02\x02\x02Z\u024D\x03\x02\x02\x02" +
        "\\\u0253\x03\x02\x02\x02^\u025C\x03\x02\x02\x02`\u0265\x03\x02\x02\x02" +
        "b\u026F\x03\x02\x02\x02d\u0276\x03\x02\x02\x02f\u0278\x03\x02\x02\x02" +
        "h\u0291\x03\x02\x02\x02j\u0299\x03\x02\x02\x02l\u02A4\x03\x02\x02\x02" +
        "n\u02AC\x03\x02\x02\x02p\u02AE\x03\x02\x02\x02r\u02B6\x03\x02\x02\x02" +
        "t\u02BB\x03\x02\x02\x02v\u02C1\x03\x02\x02\x02x\u02C5\x03\x02\x02\x02" +
        "z\u02C7\x03\x02\x02\x02|\u02CF\x03\x02\x02\x02~\u02D4\x03\x02\x02\x02" +
        "\x80\u02D6\x03\x02\x02\x02\x82\u02DC\x03\x02\x02\x02\x84\u02E2\x03\x02" +
        "\x02\x02\x86\u02F3\x03\x02\x02\x02\x88\u02F5\x03\x02\x02\x02\x8A\u02FB" +
        "\x03\x02\x02\x02\x8C\u0313\x03\x02\x02\x02\x8E\u0319\x03\x02\x02\x02\x90" +
        "\u0323\x03\x02\x02\x02\x92\u0328\x03\x02\x02\x02\x94\u032B\x03\x02\x02" +
        "\x02\x96\u032F\x03\x02\x02\x02\x98\u0337\x03\x02\x02\x02\x9A\u033A\x03" +
        "\x02\x02\x02\x9C\u0340\x03\x02\x02\x02\x9E\u0348\x03\x02\x02\x02\xA0\u035D" +
        "\x03\x02\x02\x02\xA2\u036F\x03\x02\x02\x02\xA4\u0373\x03\x02\x02\x02\xA6" +
        "\u0377\x03\x02\x02\x02\xA8\u0379\x03\x02\x02\x02\xAA\u0381\x03\x02\x02" +
        "\x02\xAC\u0385\x03\x02\x02\x02\xAE\u039B\x03\x02\x02\x02\xB0\u039D\x03" +
        "\x02\x02\x02\xB2\u03A8\x03\x02\x02\x02\xB4\u03AE\x03\x02\x02\x02\xB6\u03B4" +
        "\x03\x02\x02\x02\xB8\u03BC\x03\x02\x02\x02\xBA\u03CD\x03\x02\x02\x02\xBC" +
        "\u03CF\x03\x02\x02\x02\xBE\u03D1\x03\x02\x02\x02\xC0\u03D3\x03\x02\x02" +
        "\x02\xC2\u03D5\x03\x02\x02\x02\xC4\u03D7\x03\x02\x02\x02\xC6\u03D9\x03" +
        "\x02\x02\x02\xC8\u03E1\x03\x02\x02\x02\xCA\u03E6\x03\x02\x02\x02\xCC\xCE" +
        "\x05\x04\x03\x02\xCD\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xCD" +
        "\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD2" +
        "\x07\x02\x02\x03\xD2\x03\x03\x02\x02\x02\xD3\xD7\x05\x12\n\x02\xD4\xD7" +
        "\x05H%\x02\xD5\xD7\x05\xC6d\x02\xD6\xD3\x03\x02\x02\x02\xD6\xD4\x03\x02" +
        "\x02\x02\xD6\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xD9\x07\x03" +
        "\x02\x02\xD9\x05\x03\x02\x02\x02\xDA\xDB\x07B\x02\x02\xDB\x07\x03\x02" +
        "\x02\x02\xDC\xDD\x07C\x02\x02\xDD\t\x03\x02\x02\x02\xDE\xDF\x07D\x02\x02" +
        "\xDF\v\x03\x02\x02\x02\xE0\xE1\x07E\x02\x02\xE1\r\x03\x02\x02\x02\xE2" +
        "\xE3\x07F\x02\x02\xE3\x0F\x03\x02\x02\x02\xE4\xE5\x07G\x02\x02\xE5\x11" +
        "\x03\x02\x02\x02\xE6\xE7\x07\x04\x02\x02\xE7\xE8\x05\x06\x04\x02\xE8\xE9" +
        "\x05F$\x02\xE9\xF7\x03\x02\x02\x02\xEA\xEB\x07\x04\x02\x02\xEB\xEC\x05" +
        "\x06\x04\x02\xEC\xED\x05\x18\r\x02\xED\xF7\x03\x02\x02\x02\xEE\xEF\x07" +
        "\x04\x02\x02\xEF\xF0\x05\x06\x04\x02\xF0\xF1\x07\x05\x02\x02\xF1\xF2\x05" +
        "\x18\r\x02\xF2\xF3\x07\x06\x02\x02\xF3\xF7\x03\x02\x02\x02\xF4\xF5\x07" +
        "H\x02\x02\xF5\xF7\x05\x14\v\x02\xF6\xE6\x03\x02\x02\x02\xF6\xEA\x03\x02" +
        "\x02\x02\xF6\xEE\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF7\x13\x03\x02" +
        "\x02\x02\xF8\xF9\x05\x16\f\x02\xF9\xFA\x05 \x11\x02\xFA\u0101\x03\x02" +
        "\x02\x02\xFB\xFC\x07\x05\x02\x02\xFC\xFD\x05\x16\f\x02\xFD\xFE\x05 \x11" +
        "\x02\xFE\xFF\x07\x06\x02\x02\xFF\u0101\x03\x02\x02\x02\u0100\xF8\x03\x02" +
        "\x02\x02\u0100\xFB\x03\x02\x02\x02\u0101\x15\x03\x02\x02\x02\u0102\u0114" +
        "\x05\x06\x04\x02\u0103\u0104\x05\x06\x04\x02\u0104\u0105\x07\x07\x02\x02" +
        "\u0105\u0106\x05\x06\x04\x02\u0106\u0114\x03\x02\x02\x02\u0107\u0108\x05" +
        "\x06\x04\x02\u0108\u0109\x07\b\x02\x02\u0109\u010A\x05\f\x07\x02\u010A" +
        "\u010B\x07\t\x02\x02\u010B\u0114\x03\x02\x02\x02\u010C\u010D\x05\x06\x04" +
        "\x02\u010D\u010E\x07\x07\x02\x02\u010E\u010F\x05\x06\x04\x02\u010F\u0110" +
        "\x07\b\x02\x02\u0110\u0111\x05\f\x07\x02\u0111\u0112\x07\t\x02\x02\u0112" +
        "\u0114\x03\x02\x02\x02\u0113\u0102\x03\x02\x02\x02\u0113\u0103\x03\x02" +
        "\x02\x02\u0113\u0107\x03\x02\x02\x02\u0113\u010C\x03\x02\x02\x02\u0114" +
        "\x17\x03\x02\x02\x02\u0115\u0116\x05R*\x02\u0116\u0117\x07\n\x02\x02\u0117" +
        "\u0118\x05\x1A\x0E\x02\u0118\u011E\x03\x02\x02\x02\u0119\u011A\x05R*\x02" +
        "\u011A\u011B\x07\t\x02\x02\u011B\u011C\x05*\x16\x02\u011C\u011E\x03\x02" +
        "\x02\x02\u011D\u0115\x03\x02\x02\x02\u011D\u0119\x03\x02\x02\x02\u011E" +
        "\x19\x03\x02\x02\x02\u011F\u0120\x07\v\x02\x02\u0120\u0121\x05\x1C\x0F" +
        "\x02\u0121\u0122\x07\f\x02\x02\u0122\x1B\x03\x02\x02\x02\u0123\u0131\x05" +
        "\x1E\x10\x02\u0124\u0125\x05\x1E\x10\x02\u0125\u0126\x07\n\x02\x02\u0126" +
        "\u0127\x05\x1C\x0F\x02\u0127\u0131\x03\x02\x02\x02\u0128\u0129\x05R*\x02" +
        "\u0129\u012A\x07\n\x02\x02\u012A\u012B\x05\x1C\x0F\x02\u012B\u0131\x03" +
        "\x02\x02\x02\u012C\u012D\x05\x1E\x10\x02\u012D\u012E\x07\n\x02\x02\u012E" +
        "\u012F\x05\xB6\\\x02\u012F\u0131\x03\x02\x02\x02\u0130\u0123\x03\x02\x02" +
        "\x02\u0130\u0124\x03\x02\x02\x02\u0130\u0128\x03\x02\x02\x02\u0130\u012C" +
        "\x03\x02\x02\x02\u0131\x1D\x03\x02\x02\x02\u0132\u0133\x05R*\x02\u0133" +
        "\u0134\x07\t\x02\x02\u0134\u0135\x05*\x16\x02\u0135\x1F\x03\x02\x02\x02" +
        "\u0136\u013B\x05\"\x12\x02\u0137\u0138\x07\r\x02\x02\u0138\u013A\x05\"" +
        "\x12\x02\u0139\u0137\x03\x02\x02\x02\u013A\u013D\x03\x02\x02\x02\u013B" +
        "\u0139\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C!\x03\x02\x02" +
        "\x02\u013D\u013B\x03\x02\x02\x02\u013E\u0141\x05:\x1E\x02\u013F\u0140" +
        "\x07\x0E\x02\x02\u0140\u0142\x05$\x13\x02\u0141\u013F\x03\x02\x02\x02" +
        "\u0141\u0142\x03\x02\x02\x02\u0142#\x03\x02\x02\x02\u0143\u0148\x05&\x14" +
        "\x02\u0144\u0145\x07\n\x02\x02\u0145\u0147\x05&\x14\x02\u0146\u0144\x03" +
        "\x02\x02\x02\u0147\u014A\x03\x02\x02\x02\u0148\u0146\x03\x02\x02\x02\u0148" +
        "\u0149\x03\x02\x02\x02\u0149%\x03\x02\x02\x02\u014A\u0148\x03\x02\x02" +
        "\x02\u014B\u014C\x05\x06\x04\x02\u014C\u014D\x07\x05\x02\x02\u014D\u014E" +
        "\x05(\x15\x02\u014E\u014F\x07\x06\x02\x02\u014F\u0155\x03\x02\x02\x02" +
        "\u0150\u0151\x05\b\x05\x02\u0151\u0152\x07\t\x02\x02\u0152\u0153\x05*" +
        "\x16\x02\u0153\u0155\x03\x02\x02\x02\u0154\u014B\x03\x02\x02\x02\u0154" +
        "\u0150\x03\x02\x02\x02\u0155\'\x03\x02\x02\x02\u0156\u015B\x05*\x16\x02" +
        "\u0157\u0158\x07\n\x02\x02\u0158\u015A\x05*\x16\x02\u0159\u0157\x03\x02" +
        "\x02\x02\u015A\u015D\x03\x02\x02\x02\u015B\u0159\x03\x02\x02\x02\u015B" +
        "\u015C\x03\x02\x02\x02\u015C)\x03\x02\x02\x02\u015D\u015B\x03\x02\x02" +
        "\x02\u015E\u015F\x05\b\x05\x02\u015F\u0160\x07\t\x02\x02\u0160\u0162\x03" +
        "\x02\x02\x02\u0161\u015E\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162" +
        "\u0163\x03\x02\x02\x02\u0163\u0164\x05,\x17\x02\u0164+\x03\x02\x02\x02" +
        "\u0165\u0168\x05.\x18\x02\u0166\u0167\x07\x0F\x02\x02\u0167\u0169\x05" +
        ",\x17\x02\u0168\u0166\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169" +
        "-\x03\x02\x02\x02\u016A\u016D\x050\x19\x02\u016B\u016C\x07\x10\x02\x02" +
        "\u016C\u016E\x050\x19\x02\u016D\u016B\x03\x02\x02\x02\u016D\u016E\x03" +
        "\x02\x02\x02\u016E/\x03\x02\x02\x02\u016F\u0170\b\x19\x01\x02\u0170\u0171" +
        "\x052\x1A\x02\u0171\u0178\x03\x02\x02\x02\u0172\u0173\f\x04\x02\x02\u0173" +
        "\u0174\x05\xC0a\x02\u0174\u0175\x052\x1A\x02\u0175\u0177\x03\x02\x02\x02" +
        "\u0176\u0172\x03\x02\x02\x02\u0177\u017A\x03\x02\x02\x02\u0178\u0176\x03" +
        "\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u01791\x03\x02\x02\x02\u017A" +
        "\u0178\x03\x02\x02\x02\u017B\u017C\b\x1A\x01\x02\u017C\u017D\x054\x1B" +
        "\x02\u017D\u0184\x03\x02\x02\x02\u017E\u017F\f\x04\x02\x02\u017F\u0180" +
        "\x05\xBE`\x02\u0180\u0181\x054\x1B\x02\u0181\u0183\x03\x02\x02\x02\u0182" +
        "\u017E\x03\x02\x02\x02\u0183\u0186\x03\x02\x02\x02\u0184\u0182\x03\x02" +
        "\x02\x02\u0184\u0185\x03\x02\x02\x02\u01853\x03\x02\x02\x02\u0186\u0184" +
        "\x03\x02\x02\x02\u0187\u0189\x05\xBC_\x02\u0188\u0187\x03\x02\x02\x02" +
        "\u0188\u0189\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018B\x05" +
        "6\x1C\x02\u018B5\x03\x02\x02\x02\u018C\u018D\x07\x05\x02\x02\u018D\u018E" +
        "\x05*\x16\x02\u018E\u018F\x07\x06\x02\x02\u018F\u01D0\x03\x02\x02\x02" +
        "\u0190\u01D0\x05\b\x05\x02\u0191\u01D0\x05\x06\x04\x02\u0192\u0193\x05" +
        "\x06\x04\x02\u0193\u0194\x07\x05\x02\x02\u0194\u0195\x07\x06\x02\x02\u0195" +
        "\u01D0\x03\x02\x02\x02\u0196\u0197\x05\x06\x04\x02\u0197\u0198\x07\x05" +
        "\x02\x02\u0198\u0199\x05(\x15\x02\u0199\u019A\x07\x06\x02\x02\u019A\u01D0" +
        "\x03\x02\x02\x02\u019B\u019C\x05\x06\x04\x02\u019C\u019D\x07\x07\x02\x02" +
        "\u019D\u019E\x05\x06\x04\x02\u019E\u019F\x07\x05\x02\x02\u019F\u01A0\x07" +
        "\x06\x02\x02\u01A0\u01D0\x03\x02\x02\x02\u01A1\u01A2\x05\x06\x04\x02\u01A2" +
        "\u01A3\x07\x07\x02\x02\u01A3\u01A4\x05\x06\x04\x02\u01A4\u01A5\x07\x05" +
        "\x02\x02\u01A5\u01A6\x05(\x15\x02\u01A6\u01A7\x07\x06\x02\x02\u01A7\u01D0" +
        "\x03\x02\x02\x02\u01A8\u01A9\x07\x11\x02\x02\u01A9\u01D0\x07\x12\x02\x02" +
        "\u01AA\u01AB\x07\x11\x02\x02\u01AB\u01AC\x05*\x16\x02\u01AC\u01AD\x07" +
        "\x12\x02\x02\u01AD\u01D0\x03\x02\x02\x02\u01AE\u01AF\x07\x11\x02\x02\u01AF" +
        "\u01B0\x05*\x16\x02\u01B0\u01B1\x07\n\x02\x02\u01B1\u01B2\x07\x13\x02" +
        "\x02\u01B2\u01B3\x07\x12\x02\x02\u01B3\u01D0\x03\x02\x02\x02\u01B4\u01B5" +
        "\x07\v\x02\x02\u01B5\u01D0\x07\f\x02\x02\u01B6\u01B7\x07\v\x02\x02\u01B7" +
        "\u01B8\x05(\x15\x02\u01B8\u01B9\x07\f\x02\x02\u01B9\u01D0\x03\x02\x02" +
        "\x02\u01BA\u01BB\x07\x14\x02\x02\u01BB\u01BC\x05\x06\x04\x02\u01BC\u01BD" +
        "\x07\v\x02\x02\u01BD\u01BE\x07\f\x02\x02\u01BE\u01D0\x03\x02\x02\x02\u01BF" +
        "\u01C0\x07\x14\x02\x02\u01C0\u01C1\x05\x06\x04\x02\u01C1\u01C2\x07\v\x02" +
        "\x02\u01C2\u01C3\x05<\x1F\x02\u01C3\u01C4\x07\f\x02\x02\u01C4\u01D0\x03" +
        "\x02\x02\x02\u01C5\u01D0\x05@!\x02\u01C6\u01D0\x05\f\x07\x02\u01C7\u01C8" +
        "\x07\x15\x02\x02\u01C8\u01C9\x07\x05\x02\x02\u01C9\u01D0\x07\x06\x02\x02" +
        "\u01CA\u01CB\x07\x15\x02\x02\u01CB\u01CC\x07\x05\x02\x02\u01CC\u01CD\x05" +
        "8\x1D\x02\u01CD\u01CE\x07\x06\x02\x02\u01CE\u01D0\x03\x02\x02\x02\u01CF" +
        "\u018C\x03\x02\x02\x02\u01CF\u0190\x03\x02\x02\x02\u01CF\u0191\x03\x02" +
        "\x02\x02\u01CF\u0192\x03\x02\x02\x02\u01CF\u0196\x03\x02\x02\x02\u01CF" +
        "\u019B\x03\x02\x02\x02\u01CF\u01A1\x03\x02\x02\x02\u01CF\u01A8\x03\x02" +
        "\x02\x02\u01CF\u01AA\x03\x02\x02\x02\u01CF\u01AE\x03\x02\x02\x02\u01CF" +
        "\u01B4\x03\x02\x02\x02\u01CF\u01B6\x03\x02\x02\x02\u01CF\u01BA\x03\x02" +
        "\x02\x02\u01CF\u01BF\x03\x02\x02\x02\u01CF\u01C5\x03\x02\x02\x02\u01CF" +
        "\u01C6\x03\x02\x02\x02\u01CF\u01C7\x03\x02\x02\x02\u01CF\u01CA\x03\x02" +
        "\x02\x02\u01D07\x03\x02\x02\x02\u01D1\u01D2\x07\x05\x02\x02\u01D2\u01D3" +
        "\x07\x13\x02\x02\u01D3\u01D4\x07\x06\x02\x02\u01D4\u01D5\x07\x16\x02\x02" +
        "\u01D5\u01D8\x05*\x16\x02\u01D6\u01D8\x05:\x1E\x02\u01D7\u01D1\x03\x02" +
        "\x02\x02\u01D7\u01D6\x03\x02\x02\x02\u01D89\x03\x02\x02\x02\u01D9\u01DB" +
        "\x07\x05\x02\x02\u01DA\u01DC\x05(\x15\x02\u01DB\u01DA\x03\x02\x02\x02" +
        "\u01DB\u01DC\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD\u01DE\x07" +
        "\x06\x02\x02\u01DE\u01DF\x07\x16\x02\x02\u01DF\u01E0\x05*\x16\x02\u01E0" +
        ";\x03\x02\x02\x02\u01E1\u01E6\x05> \x02\u01E2\u01E3\x07\n\x02\x02\u01E3" +
        "\u01E5\x05> \x02\u01E4\u01E2\x03\x02\x02\x02\u01E5\u01E8\x03\x02\x02\x02" +
        "\u01E6\u01E4\x03\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02\u01E7=\x03\x02" +
        "\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E9\u01EA\x05\x06\x04\x02\u01EA" +
        "\u01EB\x07\t\x02\x02\u01EB\u01EC\x05*\x16\x02\u01EC?\x03\x02\x02\x02\u01ED" +
        "\u01EE\x07\x17\x02\x02\u01EE\u01FE\x07\x18\x02\x02\u01EF\u01F0\x07\x17" +
        "\x02\x02\u01F0\u01F1\x05B\"\x02\u01F1\u01F2\x07\x18\x02\x02";
    ErlangParser._serializedATNSegment1 = "\u01F2\u01FE\x03\x02\x02\x02\u01F3\u01F4\x07\x17\x02\x02\u01F4\u01F5\x05" +
        "D#\x02\u01F5\u01F6\x07\x18\x02\x02\u01F6\u01FE\x03\x02\x02\x02\u01F7\u01F8" +
        "\x07\x17\x02\x02\u01F8\u01F9\x05B\"\x02\u01F9\u01FA\x07\n\x02\x02\u01FA" +
        "\u01FB\x05D#\x02\u01FB\u01FC\x07\x18\x02\x02\u01FC\u01FE\x03\x02\x02\x02" +
        "\u01FD\u01ED\x03\x02\x02\x02\u01FD\u01EF\x03\x02\x02\x02\u01FD\u01F3\x03" +
        "\x02\x02\x02\u01FD\u01F7\x03\x02\x02\x02\u01FEA\x03\x02\x02\x02\u01FF" +
        "\u0200\x05\b\x05\x02\u0200\u0201\x07\x07\x02\x02\u0201\u0202\x056\x1C" +
        "\x02\u0202C\x03\x02\x02\x02\u0203\u0204\x05\b\x05\x02\u0204\u0205\x07" +
        "\x07\x02\x02\u0205\u0206\x05\b\x05\x02\u0206\u0207\x07\x19\x02\x02\u0207" +
        "\u0208\x056\x1C\x02\u0208E\x03\x02\x02\x02\u0209\u0219\x05R*\x02\u020A" +
        "\u020B\x07\x05\x02\x02\u020B\u020C\x05R*\x02\u020C\u020D\x07\x06\x02\x02" +
        "\u020D\u0219\x03\x02\x02\x02\u020E\u020F\x05R*\x02\u020F\u0210\x07\n\x02" +
        "\x02\u0210\u0211\x05\xB6\\\x02\u0211\u0219\x03\x02\x02\x02\u0212\u0213" +
        "\x07\x05\x02\x02\u0213\u0214\x05R*\x02\u0214\u0215\x07\n\x02\x02\u0215" +
        "\u0216\x05\xB6\\\x02\u0216\u0217\x07\x06\x02\x02\u0217\u0219\x03\x02\x02" +
        "\x02\u0218\u0209\x03\x02\x02\x02\u0218\u020A\x03\x02\x02\x02\u0218\u020E" +
        "\x03\x02\x02\x02\u0218\u0212\x03\x02\x02\x02\u0219G\x03\x02\x02\x02\u021A" +
        "\u021F\x05J&\x02\u021B\u021C\x07\r\x02\x02\u021C\u021E\x05J&\x02\u021D" +
        "\u021B\x03\x02\x02\x02\u021E\u0221\x03\x02\x02\x02\u021F\u021D\x03\x02" +
        "\x02\x02\u021F\u0220\x03\x02\x02\x02\u0220I\x03\x02\x02\x02\u0221\u021F" +
        "\x03\x02\x02\x02\u0222\u0223\x05\x06\x04\x02\u0223\u0224\x05L\'\x02\u0224" +
        "\u0225\x05N(\x02\u0225\u0226\x05P)\x02\u0226K\x03\x02\x02\x02\u0227\u0228" +
        "\x05\xB4[\x02\u0228M\x03\x02\x02\x02\u0229\u022A\x07\x0E\x02\x02\u022A" +
        "\u022C\x05\xB8]\x02\u022B\u0229\x03\x02\x02\x02\u022B\u022C\x03\x02\x02" +
        "\x02\u022CO\x03\x02\x02\x02\u022D\u022E\x07\x16\x02\x02\u022E\u022F\x05" +
        "\xB6\\\x02\u022FQ\x03\x02\x02\x02\u0230\u0231\x07\x1A\x02\x02\u0231\u0234" +
        "\x05R*\x02\u0232\u0234\x05T+\x02\u0233\u0230\x03\x02\x02\x02\u0233\u0232" +
        "\x03\x02\x02\x02\u0234S\x03\x02\x02\x02\u0235\u023A\x05V,\x02\u0236\u0237" +
        "\t\x02\x02\x02\u0237\u0239\x05V,\x02\u0238\u0236\x03\x02\x02\x02\u0239" +
        "\u023C\x03\x02\x02\x02\u023A\u0238\x03\x02\x02\x02\u023A\u023B\x03\x02" +
        "\x02\x02\u023BU\x03\x02\x02\x02\u023C\u023A\x03\x02\x02\x02\u023D\u0242" +
        "\x05X-\x02\u023E\u023F\x07\x1D\x02\x02\u023F\u0241\x05X-\x02\u0240\u023E" +
        "\x03\x02\x02\x02\u0241\u0244\x03\x02\x02\x02\u0242\u0240\x03\x02\x02\x02" +
        "\u0242\u0243\x03\x02\x02\x02\u0243W\x03\x02\x02\x02\u0244\u0242\x03\x02" +
        "\x02\x02\u0245\u024A\x05Z.\x02\u0246\u0247\x07\x1E\x02\x02\u0247\u0249" +
        "\x05Z.\x02\u0248\u0246\x03\x02\x02\x02\u0249\u024C\x03\x02\x02\x02\u024A" +
        "\u0248\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024BY\x03\x02\x02" +
        "\x02\u024C\u024A\x03\x02\x02\x02\u024D\u0251\x05\\/\x02\u024E\u024F\x05" +
        "\xC4c\x02\u024F\u0250\x05\\/\x02\u0250\u0252\x03\x02\x02\x02\u0251\u024E" +
        "\x03\x02\x02\x02\u0251\u0252\x03\x02\x02\x02\u0252[\x03\x02\x02\x02\u0253" +
        "\u0259\x05^0\x02\u0254\u0255\x05\xC2b\x02\u0255\u0256\x05^0\x02\u0256" +
        "\u0258\x03\x02\x02\x02\u0257\u0254\x03\x02\x02\x02\u0258\u025B\x03\x02" +
        "\x02\x02\u0259\u0257\x03\x02\x02\x02\u0259\u025A\x03\x02\x02\x02\u025A" +
        "]\x03\x02\x02\x02\u025B\u0259\x03\x02\x02\x02\u025C\u0262\x05`1\x02\u025D" +
        "\u025E\x05\xC0a\x02\u025E\u025F\x05`1\x02\u025F\u0261\x03\x02\x02\x02" +
        "\u0260\u025D\x03\x02\x02\x02\u0261\u0264\x03\x02\x02\x02\u0262\u0260\x03" +
        "\x02\x02\x02\u0262\u0263\x03\x02\x02\x02\u0263_\x03\x02\x02\x02\u0264" +
        "\u0262\x03\x02\x02\x02\u0265\u026B\x05b2\x02\u0266\u0267\x05\xBE`\x02" +
        "\u0267\u0268\x05b2\x02\u0268\u026A\x03\x02\x02\x02\u0269\u0266\x03\x02" +
        "\x02\x02\u026A\u026D\x03\x02\x02\x02\u026B\u0269\x03\x02\x02\x02\u026B" +
        "\u026C\x03\x02\x02\x02\u026Ca\x03\x02\x02\x02\u026D\u026B\x03\x02\x02" +
        "\x02\u026E\u0270\x05\xBC_\x02\u026F\u026E\x03\x02\x02\x02\u026F\u0270" +
        "\x03\x02\x02\x02\u0270\u0271\x03\x02\x02\x02\u0271\u0272\x05d3\x02\u0272" +
        "c\x03\x02\x02\x02\u0273\u0277\x05\x92J\x02\u0274\u0277\x05\x8AF\x02\u0275" +
        "\u0277\x05f4\x02\u0276\u0273\x03\x02\x02\x02\u0276\u0274\x03\x02\x02\x02" +
        "\u0276\u0275\x03\x02\x02\x02\u0277e\x03\x02\x02\x02\u0278\u027B\x05h5" +
        "\x02\u0279\u027A\x07\x07\x02\x02\u027A\u027C\x05h5\x02\u027B\u0279\x03" +
        "\x02\x02\x02\u027B\u027C\x03\x02\x02\x02\u027Cg\x03\x02\x02\x02\u027D" +
        "\u0292\x05\b\x05\x02\u027E\u0292\x05\xBA^\x02\u027F\u0292\x05j6\x02\u0280" +
        "\u0292\x05n8\x02\u0281\u0292\x05\x80A\x02\u0282\u0292\x05\x82B\x02\u0283" +
        "\u0292\x05\x88E\x02\u0284\u0285\x07\x05\x02\x02\u0285\u0286\x05R*\x02" +
        "\u0286\u0287\x07\x06\x02\x02\u0287\u0292\x03\x02\x02\x02\u0288\u0289\x07" +
        "\x1F\x02\x02\u0289\u028A\x05\xB6\\\x02\u028A\u028B\x07 \x02\x02\u028B" +
        "\u0292\x03\x02\x02\x02\u028C\u0292\x05\x94K\x02\u028D\u0292\x05\x9AN\x02" +
        "\u028E\u0292\x05\xA0Q\x02\u028F\u0292\x05\xA2R\x02\u0290\u0292\x05\xAC" +
        "W\x02\u0291\u027D\x03\x02\x02\x02\u0291\u027E\x03\x02\x02\x02\u0291\u027F" +
        "\x03\x02\x02\x02\u0291\u0280\x03\x02\x02\x02\u0291\u0281\x03\x02\x02\x02" +
        "\u0291\u0282\x03\x02\x02\x02\u0291\u0283\x03\x02\x02\x02\u0291\u0284\x03" +
        "\x02\x02\x02\u0291\u0288\x03\x02\x02\x02\u0291\u028C\x03\x02\x02\x02\u0291" +
        "\u028D\x03\x02\x02\x02\u0291\u028E\x03\x02\x02\x02\u0291\u028F\x03\x02" +
        "\x02\x02\u0291\u0290\x03\x02\x02\x02\u0292i\x03\x02\x02\x02\u0293\u0294" +
        "\x07\x11\x02\x02\u0294\u029A\x07\x12\x02\x02\u0295\u0296\x07\x11\x02\x02" +
        "\u0296\u0297\x05R*\x02\u0297\u0298\x05l7\x02\u0298\u029A\x03\x02\x02\x02" +
        "\u0299\u0293\x03\x02\x02\x02\u0299\u0295\x03\x02\x02\x02\u029Ak\x03\x02" +
        "\x02\x02\u029B\u02A5\x07\x12\x02\x02\u029C\u029D\x07\x0F\x02\x02\u029D" +
        "\u029E\x05R*\x02\u029E\u029F\x07\x12\x02\x02\u029F\u02A5\x03\x02\x02\x02" +
        "\u02A0\u02A1\x07\n\x02\x02\u02A1\u02A2\x05R*\x02\u02A2\u02A3\x05l7\x02" +
        "\u02A3\u02A5\x03\x02\x02\x02\u02A4\u029B\x03\x02\x02\x02\u02A4\u029C\x03" +
        "\x02\x02\x02\u02A4\u02A0\x03\x02\x02\x02\u02A5m\x03\x02\x02\x02\u02A6" +
        "\u02A7\x07\x17\x02\x02\u02A7\u02AD\x07\x18\x02\x02\u02A8\u02A9\x07\x17" +
        "\x02\x02\u02A9\u02AA\x05p9\x02\u02AA\u02AB\x07\x18\x02\x02\u02AB\u02AD" +
        "\x03\x02\x02\x02\u02AC\u02A6\x03\x02\x02\x02\u02AC\u02A8\x03\x02\x02\x02" +
        "\u02ADo\x03\x02\x02\x02\u02AE\u02B3\x05r:\x02\u02AF\u02B0\x07\n\x02\x02" +
        "\u02B0\u02B2\x05r:\x02\u02B1\u02AF\x03\x02\x02\x02\u02B2\u02B5\x03\x02" +
        "\x02\x02\u02B3\u02B1\x03\x02\x02\x02\u02B3\u02B4\x03\x02\x02\x02\u02B4" +
        "q\x03\x02\x02\x02\u02B5\u02B3\x03\x02\x02\x02\u02B6\u02B7\x05t;\x02\u02B7" +
        "\u02B8\x05v<\x02\u02B8\u02B9\x05x=\x02\u02B9s\x03\x02\x02\x02\u02BA\u02BC" +
        "\x05\xBC_\x02\u02BB\u02BA\x03\x02\x02\x02\u02BB\u02BC\x03\x02\x02\x02" +
        "\u02BC\u02BD\x03\x02\x02\x02\u02BD\u02BE\x05h5\x02\u02BEu\x03\x02\x02" +
        "\x02\u02BF\u02C0\x07\x07\x02\x02\u02C0\u02C2\x05~@\x02\u02C1\u02BF\x03" +
        "\x02\x02\x02\u02C1\u02C2\x03\x02\x02\x02\u02C2w\x03\x02\x02\x02\u02C3" +
        "\u02C4\x07\b\x02\x02\u02C4\u02C6\x05z>\x02\u02C5\u02C3\x03\x02\x02\x02" +
        "\u02C5\u02C6\x03\x02\x02\x02\u02C6y\x03\x02\x02\x02\u02C7\u02CC\x05|?" +
        "\x02\u02C8\u02C9\x07\x04\x02\x02\u02C9\u02CB\x05|?\x02\u02CA\u02C8\x03" +
        "\x02\x02\x02\u02CB\u02CE\x03\x02\x02\x02\u02CC\u02CA\x03\x02\x02\x02\u02CC" +
        "\u02CD\x03\x02\x02\x02\u02CD{\x03\x02\x02\x02\u02CE\u02CC\x03\x02\x02" +
        "\x02\u02CF\u02D2\x05\x06\x04\x02\u02D0\u02D1\x07\x07\x02\x02\u02D1\u02D3" +
        "\x05\f\x07\x02\u02D2\u02D0\x03\x02\x02\x02\u02D2\u02D3\x03\x02\x02\x02" +
        "\u02D3}\x03\x02\x02\x02\u02D4\u02D5\x05h5\x02\u02D5\x7F\x03\x02\x02\x02" +
        "\u02D6\u02D7\x07\x11\x02\x02\u02D7\u02D8\x05R*\x02\u02D8\u02D9\x07!\x02" +
        "\x02\u02D9\u02DA\x05\x84C\x02\u02DA\u02DB\x07\x12\x02\x02\u02DB\x81\x03" +
        "\x02\x02\x02\u02DC\u02DD\x07\x17\x02\x02\u02DD\u02DE\x05n8\x02\u02DE\u02DF" +
        "\x07!\x02\x02\u02DF\u02E0\x05\x84C\x02\u02E0\u02E1\x07\x18\x02\x02\u02E1" +
        "\x83\x03\x02\x02\x02\u02E2\u02E7\x05\x86D\x02\u02E3\u02E4\x07\n\x02\x02" +
        "\u02E4\u02E6\x05\x86D\x02\u02E5\u02E3\x03\x02\x02\x02\u02E6\u02E9\x03" +
        "\x02\x02\x02\u02E7\u02E5\x03\x02\x02\x02\u02E7\u02E8\x03\x02\x02\x02\u02E8" +
        "\x85\x03\x02\x02\x02\u02E9\u02E7\x03\x02\x02\x02\u02EA\u02F4\x05R*\x02" +
        "\u02EB\u02EC\x05R*\x02\u02EC\u02ED\x07\"\x02\x02\u02ED\u02EE\x05R*\x02" +
        "\u02EE\u02F4\x03\x02\x02\x02\u02EF\u02F0\x05n8\x02\u02F0\u02F1\x07#\x02" +
        "\x02\u02F1\u02F2\x05R*\x02\u02F2\u02F4\x03\x02\x02\x02\u02F3\u02EA\x03" +
        "\x02\x02\x02\u02F3\u02EB\x03\x02\x02\x02\u02F3\u02EF\x03\x02\x02\x02\u02F4" +
        "\x87\x03\x02\x02\x02\u02F5\u02F7\x07\v\x02\x02\u02F6\u02F8\x05\xB6\\\x02" +
        "\u02F7\u02F6\x03\x02\x02\x02\u02F7\u02F8\x03\x02\x02\x02\u02F8\u02F9\x03" +
        "\x02\x02\x02\u02F9\u02FA\x07\f\x02\x02\u02FA\x89\x03\x02\x02\x02\u02FB" +
        "\u02FD\bF\x01\x02\u02FC\u02FE\x05h5\x02\u02FD\u02FC\x03\x02\x02\x02\u02FD" +
        "\u02FE\x03\x02\x02\x02\u02FE\u02FF\x03\x02\x02\x02\u02FF\u0300\x07\x14" +
        "\x02\x02\u0300\u0304\x05\x06\x04\x02\u0301\u0302\x07\x03\x02\x02\u0302" +
        "\u0305\x05\x06\x04\x02\u0303\u0305\x05\x8CG\x02\u0304\u0301\x03\x02\x02" +
        "\x02\u0304\u0303\x03\x02\x02\x02\u0305\u0310\x03\x02\x02\x02\u0306\u0307" +
        "\f\x03\x02\x02\u0307\u0308\x07\x14\x02\x02\u0308\u030C\x05\x06\x04\x02" +
        "\u0309\u030A\x07\x03\x02\x02\u030A\u030D\x05\x06\x04\x02\u030B\u030D\x05" +
        "\x8CG\x02\u030C\u0309\x03\x02\x02\x02\u030C\u030B\x03\x02\x02\x02\u030D" +
        "\u030F\x03\x02\x02\x02\u030E\u0306\x03\x02\x02\x02\u030F\u0312\x03\x02" +
        "\x02\x02\u0310\u030E\x03\x02\x02\x02\u0310\u0311\x03\x02\x02\x02\u0311" +
        "\x8B\x03\x02\x02\x02\u0312\u0310\x03\x02\x02\x02\u0313\u0315\x07\v\x02" +
        "\x02\u0314\u0316\x05\x8EH\x02\u0315\u0314\x03\x02\x02\x02\u0315\u0316" +
        "\x03\x02\x02\x02\u0316\u0317\x03\x02\x02\x02\u0317\u0318\x07\f\x02\x02" +
        "\u0318\x8D\x03\x02\x02\x02\u0319\u031E\x05\x90I\x02\u031A\u031B\x07\n" +
        "\x02\x02\u031B\u031D\x05\x90I\x02\u031C\u031A\x03\x02\x02\x02\u031D\u0320" +
        "\x03\x02\x02\x02\u031E\u031C\x03\x02\x02\x02\u031E\u031F\x03\x02\x02\x02" +
        "\u031F\x8F\x03\x02\x02\x02\u0320\u031E\x03\x02\x02\x02\u0321\u0324\x05" +
        "\b\x05\x02\u0322\u0324\x05\x06\x04\x02\u0323\u0321\x03\x02\x02\x02\u0323" +
        "\u0322\x03\x02\x02\x02\u0324\u0325\x03\x02\x02\x02\u0325\u0326\x07\x1B" +
        "\x02\x02\u0326\u0327\x05R*\x02\u0327\x91\x03\x02\x02\x02\u0328\u0329\x05" +
        "f4\x02\u0329\u032A\x05\xB4[\x02\u032A\x93\x03\x02\x02\x02\u032B\u032C" +
        "\x07$\x02\x02\u032C\u032D\x05\x96L\x02\u032D\u032E\x07 \x02\x02\u032E" +
        "\x95\x03\x02\x02\x02\u032F\u0334\x05\x98M\x02\u0330\u0331\x07\r\x02\x02" +
        "\u0331\u0333\x05\x98M\x02\u0332\u0330\x03\x02\x02\x02\u0333\u0336\x03" +
        "\x02\x02\x02\u0334\u0332\x03\x02\x02\x02\u0334\u0335\x03\x02\x02\x02\u0335" +
        "\x97\x03\x02\x02\x02\u0336\u0334\x03\x02\x02\x02\u0337\u0338\x05\xB8]" +
        "\x02\u0338\u0339\x05P)\x02\u0339\x99\x03\x02\x02\x02\u033A\u033B\x07%" +
        "\x02\x02\u033B\u033C\x05R*\x02\u033C\u033D\x07&\x02\x02\u033D\u033E\x05" +
        "\x9CO\x02\u033E\u033F\x07 \x02\x02\u033F\x9B\x03\x02\x02\x02\u0340\u0345" +
        "\x05\x9EP\x02\u0341\u0342\x07\r\x02\x02\u0342\u0344\x05\x9EP\x02\u0343" +
        "\u0341\x03\x02\x02\x02\u0344\u0347\x03\x02\x02\x02\u0345\u0343\x03\x02" +
        "\x02\x02\u0345\u0346\x03\x02\x02\x02\u0346\x9D\x03\x02\x02\x02\u0347\u0345" +
        "\x03\x02\x02\x02\u0348\u0349\x05R*\x02\u0349\u034A\x05N(\x02\u034A\u034B" +
        "\x05P)\x02\u034B\x9F\x03\x02\x02\x02\u034C\u034D\x07\'\x02\x02\u034D\u034E" +
        "\x05\x9CO\x02\u034E\u034F\x07 \x02\x02\u034F\u035E\x03\x02\x02\x02\u0350" +
        "\u0351\x07\'\x02\x02\u0351\u0352\x07(\x02\x02\u0352\u0353\x05R*\x02\u0353" +
        "\u0354\x05P)\x02\u0354\u0355\x07 \x02\x02\u0355\u035E\x03\x02\x02\x02" +
        "\u0356\u0357\x07\'\x02\x02\u0357\u0358\x05\x9CO\x02\u0358\u0359\x07(\x02" +
        "\x02\u0359\u035A\x05R*\x02\u035A\u035B\x05P)\x02\u035B\u035C\x07 \x02" +
        "\x02\u035C\u035E\x03\x02\x02\x02\u035D\u034C\x03\x02\x02\x02\u035D\u0350" +
        "\x03\x02\x02\x02\u035D\u0356\x03\x02\x02\x02\u035E\xA1\x03\x02\x02\x02" +
        "\u035F\u0360\x07\x15\x02\x02\u0360\u0361\x05\x06\x04\x02\u0361\u0362\x07" +
        "\b\x02\x02\u0362\u0363\x05\f\x07\x02\u0363\u0370\x03\x02\x02\x02\u0364" +
        "\u0365\x07\x15\x02\x02\u0365\u0366\x05\xA4S\x02\u0366\u0367\x07\x07\x02" +
        "\x02\u0367\u0368\x05\xA4S\x02\u0368\u0369\x07\b\x02\x02\u0369\u036A\x05" +
        "\xA6T\x02\u036A\u0370\x03\x02\x02\x02\u036B\u036C\x07\x15\x02\x02\u036C" +
        "\u036D\x05\xA8U\x02\u036D\u036E\x07 \x02\x02\u036E\u0370\x03\x02\x02\x02" +
        "\u036F\u035F\x03\x02\x02\x02\u036F\u0364\x03\x02\x02\x02\u036F\u036B\x03" +
        "\x02\x02\x02\u0370\xA3\x03\x02\x02\x02\u0371\u0374\x05\x06\x04\x02\u0372" +
        "\u0374\x05\b\x05\x02\u0373\u0371\x03\x02\x02\x02\u0373\u0372\x03\x02\x02" +
        "\x02\u0374\xA5\x03\x02\x02\x02\u0375\u0378\x05\f\x07\x02\u0376\u0378\x05" +
        "\b\x05\x02\u0377\u0375\x03\x02\x02\x02\u0377\u0376\x03\x02\x02\x02\u0378" +
        "\xA7\x03\x02\x02\x02\u0379\u037E\x05\xAAV\x02\u037A\u037B\x07\r\x02\x02" +
        "\u037B\u037D\x05\xAAV\x02\u037C\u037A\x03\x02\x02\x02\u037D\u0380\x03" +
        "\x02\x02\x02\u037E\u037C\x03\x02\x02\x02\u037E\u037F\x03\x02\x02\x02\u037F" +
        "\xA9\x03\x02\x02\x02\u0380\u037E\x03\x02\x02\x02\u0381\u0382\x05\xB4[" +
        "\x02\u0382\u0383\x05N(\x02\u0383\u0384\x05P)\x02\u0384\xAB\x03\x02\x02" +
        "\x02\u0385\u0386\x07)\x02\x02\u0386\u0389\x05\xB6\\\x02\u0387\u0388\x07" +
        "&\x02\x02\u0388\u038A\x05\x9CO\x02\u0389\u0387\x03\x02\x02\x02\u0389\u038A" +
        "\x03\x02\x02\x02\u038A\u038B\x03\x02\x02\x02\u038B\u038C\x05\xAEX\x02" +
        "\u038C\xAD\x03\x02\x02\x02\u038D\u038E\x07\x1A\x02\x02\u038E\u038F\x05" +
        "\xB0Y\x02\u038F\u0390\x07 \x02\x02\u0390\u039C\x03\x02\x02\x02\u0391\u0392" +
        "\x07\x1A\x02\x02\u0392\u0393\x05\xB0Y\x02\u0393\u0394\x07(\x02\x02\u0394" +
        "\u0395\x05\xB6\\\x02\u0395\u0396\x07 \x02\x02\u0396\u039C\x03\x02\x02" +
        "\x02\u0397\u0398\x07(\x02\x02\u0398\u0399\x05\xB6\\\x02\u0399\u039A\x07" +
        " \x02\x02\u039A\u039C\x03\x02\x02\x02\u039B\u038D\x03\x02\x02\x02\u039B" +
        "\u0391\x03\x02\x02\x02\u039B\u0397\x03\x02\x02\x02\u039C\xAF\x03\x02\x02" +
        "\x02\u039D\u03A2\x05\xB2Z\x02\u039E\u039F\x07\r\x02\x02\u039F\u03A1\x05" +
        "\xB2Z\x02\u03A0\u039E\x03\x02\x02\x02\u03A1\u03A4\x03\x02\x02\x02\u03A2" +
        "\u03A0\x03\x02\x02\x02\u03A2\u03A3\x03\x02\x02\x02\u03A3\xB1\x03\x02\x02" +
        "\x02\u03A4\u03A2\x03\x02\x02\x02\u03A5\u03A6\x05\xA4S\x02\u03A6\u03A7" +
        "\x07\x07\x02\x02\u03A7\u03A9\x03\x02\x02\x02\u03A8\u03A5\x03\x02\x02\x02" +
        "\u03A8\u03A9\x03\x02\x02\x02\u03A9\u03AA\x03\x02\x02\x02\u03AA\u03AB\x05" +
        "R*\x02\u03AB\u03AC\x05N(\x02\u03AC\u03AD\x05P)\x02\u03AD\xB3\x03\x02\x02" +
        "\x02\u03AE\u03B0\x07\x05\x02\x02\u03AF\u03B1\x05\xB6\\\x02\u03B0\u03AF" +
        "\x03\x02\x02\x02\u03B0\u03B1\x03\x02\x02\x02\u03B1\u03B2\x03\x02\x02\x02" +
        "\u03B2\u03B3\x07\x06\x02\x02\u03B3\xB5\x03\x02\x02\x02\u03B4\u03B9\x05" +
        "R*\x02\u03B5\u03B6\x07\n\x02\x02\u03B6\u03B8\x05R*\x02\u03B7\u03B5\x03" +
        "\x02\x02\x02\u03B8\u03BB\x03\x02\x02\x02\u03B9\u03B7\x03\x02\x02\x02\u03B9" +
        "\u03BA\x03\x02\x02\x02\u03BA\xB7\x03\x02\x02\x02\u03BB\u03B9\x03\x02\x02" +
        "\x02\u03BC\u03C1\x05\xB6\\\x02\u03BD\u03BE\x07\r\x02\x02\u03BE\u03C0\x05" +
        "\xB6\\\x02\u03BF\u03BD\x03\x02\x02\x02\u03C0\u03C3\x03\x02\x02\x02\u03C1" +
        "\u03BF\x03\x02\x02\x02\u03C1\u03C2\x03\x02\x02\x02\u03C2\xB9\x03\x02\x02" +
        "\x02\u03C3\u03C1\x03\x02\x02\x02\u03C4\u03CE\x05\x0E\b\x02\u03C5\u03CE" +
        "\x05\f\x07\x02\u03C6\u03CE\x05\n\x06\x02\u03C7\u03CE\x05\x06\x04\x02\u03C8" +
        "\u03CA\x05\x10\t\x02\u03C9\u03C8\x03\x02\x02\x02\u03CA\u03CB\x03\x02\x02" +
        "\x02\u03CB\u03C9\x03\x02\x02\x02\u03CB\u03CC\x03\x02\x02\x02\u03CC\u03CE" +
        "\x03\x02\x02\x02\u03CD\u03C4\x03\x02\x02\x02\u03CD\u03C5\x03\x02\x02\x02" +
        "\u03CD\u03C6\x03\x02\x02\x02\u03CD\u03C7\x03\x02\x02\x02\u03CD\u03C9\x03" +
        "\x02\x02\x02\u03CE\xBB\x03\x02\x02\x02\u03CF\u03D0\t\x03\x02\x02\u03D0" +
        "\xBD\x03\x02\x02\x02\u03D1\u03D2\t\x04\x02\x02\u03D2\xBF\x03\x02\x02\x02" +
        "\u03D3\u03D4\t\x05\x02\x02\u03D4\xC1\x03\x02\x02\x02\u03D5\u03D6\t\x06" +
        "\x02\x02\u03D6\xC3\x03\x02\x02\x02\u03D7\u03D8\t\x07\x02\x02\u03D8\xC5" +
        "\x03\x02\x02\x02\u03D9\u03DE\x05\xC8e\x02\u03DA\u03DB\x07\r\x02\x02\u03DB" +
        "\u03DD\x05\xC8e\x02\u03DC\u03DA\x03\x02\x02\x02\u03DD\u03E0\x03\x02\x02" +
        "\x02\u03DE\u03DC\x03\x02\x02\x02\u03DE\u03DF\x03\x02\x02\x02\u03DF\xC7" +
        "\x03\x02\x02\x02\u03E0\u03DE\x03\x02\x02\x02\u03E1\u03E2\x05\x06\x04\x02" +
        "\u03E2\u03E3\x05L\'\x02\u03E3\u03E4\x05N(\x02\u03E4\u03E5\x05\xCAf\x02" +
        "\u03E5\xC9\x03\x02\x02\x02\u03E6\u03E7\x07A\x02\x02\u03E7\u03E8\x05\x84" +
        "C\x02\u03E8\xCB\x03\x02\x02\x02L\xCF\xD6\xF6\u0100\u0113\u011D\u0130\u013B" +
        "\u0141\u0148\u0154\u015B\u0161\u0168\u016D\u0178\u0184\u0188\u01CF\u01D7" +
        "\u01DB\u01E6\u01FD\u0218\u021F\u022B\u0233\u023A\u0242\u024A\u0251\u0259" +
        "\u0262\u026B\u026F\u0276\u027B\u0291\u0299\u02A4\u02AC\u02B3\u02BB\u02C1" +
        "\u02C5\u02CC\u02D2\u02E7\u02F3\u02F7\u02FD\u0304\u030C\u0310\u0315\u031E" +
        "\u0323\u0334\u0345\u035D\u036F\u0373\u0377\u037E\u0389\u039B\u03A2\u03A8" +
        "\u03B0\u03B9\u03C1\u03CB\u03CD\u03DE";
    ErlangParser._serializedATN = Utils.join([
        ErlangParser._serializedATNSegment0,
        ErlangParser._serializedATNSegment1,
    ], "");
    return ErlangParser;
}(Parser_1.Parser));
exports.ErlangParser = ErlangParser;
var FormsContext = /** @class */ (function (_super) {
    __extends(FormsContext, _super);
    function FormsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormsContext.prototype.EOF = function () { return this.getToken(ErlangParser.EOF, 0); };
    FormsContext.prototype.form = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FormContext);
        }
        else {
            return this.getRuleContext(i, FormContext);
        }
    };
    Object.defineProperty(FormsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_forms; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormsContext.prototype.enterRule = function (listener) {
        if (listener.enterForms) {
            listener.enterForms(this);
        }
    };
    // @Override
    FormsContext.prototype.exitRule = function (listener) {
        if (listener.exitForms) {
            listener.exitForms(this);
        }
    };
    // @Override
    FormsContext.prototype.accept = function (visitor) {
        if (visitor.visitForms) {
            return visitor.visitForms(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormsContext = FormsContext;
var FormContext = /** @class */ (function (_super) {
    __extends(FormContext, _super);
    function FormContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormContext.prototype.attribute = function () {
        return this.tryGetRuleContext(0, AttributeContext);
    };
    FormContext.prototype.function = function () {
        return this.tryGetRuleContext(0, FunctionContext);
    };
    FormContext.prototype.ruleClauses = function () {
        return this.tryGetRuleContext(0, RuleClausesContext);
    };
    Object.defineProperty(FormContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_form; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormContext.prototype.enterRule = function (listener) {
        if (listener.enterForm) {
            listener.enterForm(this);
        }
    };
    // @Override
    FormContext.prototype.exitRule = function (listener) {
        if (listener.exitForm) {
            listener.exitForm(this);
        }
    };
    // @Override
    FormContext.prototype.accept = function (visitor) {
        if (visitor.visitForm) {
            return visitor.visitForm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormContext = FormContext;
var TokAtomContext = /** @class */ (function (_super) {
    __extends(TokAtomContext, _super);
    function TokAtomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TokAtomContext.prototype.TokAtom = function () { return this.getToken(ErlangParser.TokAtom, 0); };
    Object.defineProperty(TokAtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_tokAtom; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TokAtomContext.prototype.enterRule = function (listener) {
        if (listener.enterTokAtom) {
            listener.enterTokAtom(this);
        }
    };
    // @Override
    TokAtomContext.prototype.exitRule = function (listener) {
        if (listener.exitTokAtom) {
            listener.exitTokAtom(this);
        }
    };
    // @Override
    TokAtomContext.prototype.accept = function (visitor) {
        if (visitor.visitTokAtom) {
            return visitor.visitTokAtom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TokAtomContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TokAtomContext = TokAtomContext;
var TokVarContext = /** @class */ (function (_super) {
    __extends(TokVarContext, _super);
    function TokVarContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TokVarContext.prototype.TokVar = function () { return this.getToken(ErlangParser.TokVar, 0); };
    Object.defineProperty(TokVarContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_tokVar; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TokVarContext.prototype.enterRule = function (listener) {
        if (listener.enterTokVar) {
            listener.enterTokVar(this);
        }
    };
    // @Override
    TokVarContext.prototype.exitRule = function (listener) {
        if (listener.exitTokVar) {
            listener.exitTokVar(this);
        }
    };
    // @Override
    TokVarContext.prototype.accept = function (visitor) {
        if (visitor.visitTokVar) {
            return visitor.visitTokVar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TokVarContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TokVarContext = TokVarContext;
var TokFloatContext = /** @class */ (function (_super) {
    __extends(TokFloatContext, _super);
    function TokFloatContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TokFloatContext.prototype.TokFloat = function () { return this.getToken(ErlangParser.TokFloat, 0); };
    Object.defineProperty(TokFloatContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_tokFloat; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TokFloatContext.prototype.enterRule = function (listener) {
        if (listener.enterTokFloat) {
            listener.enterTokFloat(this);
        }
    };
    // @Override
    TokFloatContext.prototype.exitRule = function (listener) {
        if (listener.exitTokFloat) {
            listener.exitTokFloat(this);
        }
    };
    // @Override
    TokFloatContext.prototype.accept = function (visitor) {
        if (visitor.visitTokFloat) {
            return visitor.visitTokFloat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TokFloatContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TokFloatContext = TokFloatContext;
var TokIntegerContext = /** @class */ (function (_super) {
    __extends(TokIntegerContext, _super);
    function TokIntegerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TokIntegerContext.prototype.TokInteger = function () { return this.getToken(ErlangParser.TokInteger, 0); };
    Object.defineProperty(TokIntegerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_tokInteger; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TokIntegerContext.prototype.enterRule = function (listener) {
        if (listener.enterTokInteger) {
            listener.enterTokInteger(this);
        }
    };
    // @Override
    TokIntegerContext.prototype.exitRule = function (listener) {
        if (listener.exitTokInteger) {
            listener.exitTokInteger(this);
        }
    };
    // @Override
    TokIntegerContext.prototype.accept = function (visitor) {
        if (visitor.visitTokInteger) {
            return visitor.visitTokInteger(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TokIntegerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TokIntegerContext = TokIntegerContext;
var TokCharContext = /** @class */ (function (_super) {
    __extends(TokCharContext, _super);
    function TokCharContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TokCharContext.prototype.TokChar = function () { return this.getToken(ErlangParser.TokChar, 0); };
    Object.defineProperty(TokCharContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_tokChar; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TokCharContext.prototype.enterRule = function (listener) {
        if (listener.enterTokChar) {
            listener.enterTokChar(this);
        }
    };
    // @Override
    TokCharContext.prototype.exitRule = function (listener) {
        if (listener.exitTokChar) {
            listener.exitTokChar(this);
        }
    };
    // @Override
    TokCharContext.prototype.accept = function (visitor) {
        if (visitor.visitTokChar) {
            return visitor.visitTokChar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TokCharContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TokCharContext = TokCharContext;
var TokStringContext = /** @class */ (function (_super) {
    __extends(TokStringContext, _super);
    function TokStringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TokStringContext.prototype.TokString = function () { return this.getToken(ErlangParser.TokString, 0); };
    Object.defineProperty(TokStringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_tokString; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TokStringContext.prototype.enterRule = function (listener) {
        if (listener.enterTokString) {
            listener.enterTokString(this);
        }
    };
    // @Override
    TokStringContext.prototype.exitRule = function (listener) {
        if (listener.exitTokString) {
            listener.exitTokString(this);
        }
    };
    // @Override
    TokStringContext.prototype.accept = function (visitor) {
        if (visitor.visitTokString) {
            return visitor.visitTokString(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TokStringContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TokStringContext = TokStringContext;
var AttributeContext = /** @class */ (function (_super) {
    __extends(AttributeContext, _super);
    function AttributeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributeContext.prototype.tokAtom = function () {
        return this.tryGetRuleContext(0, TokAtomContext);
    };
    AttributeContext.prototype.attrVal = function () {
        return this.tryGetRuleContext(0, AttrValContext);
    };
    AttributeContext.prototype.typedAttrVal = function () {
        return this.tryGetRuleContext(0, TypedAttrValContext);
    };
    AttributeContext.prototype.AttrName = function () { return this.tryGetToken(ErlangParser.AttrName, 0); };
    AttributeContext.prototype.typeSpec = function () {
        return this.tryGetRuleContext(0, TypeSpecContext);
    };
    Object.defineProperty(AttributeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_attribute; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AttributeContext.prototype.enterRule = function (listener) {
        if (listener.enterAttribute) {
            listener.enterAttribute(this);
        }
    };
    // @Override
    AttributeContext.prototype.exitRule = function (listener) {
        if (listener.exitAttribute) {
            listener.exitAttribute(this);
        }
    };
    // @Override
    AttributeContext.prototype.accept = function (visitor) {
        if (visitor.visitAttribute) {
            return visitor.visitAttribute(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AttributeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AttributeContext = AttributeContext;
var TypeSpecContext = /** @class */ (function (_super) {
    __extends(TypeSpecContext, _super);
    function TypeSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeSpecContext.prototype.specFun = function () {
        return this.getRuleContext(0, SpecFunContext);
    };
    TypeSpecContext.prototype.typeSigs = function () {
        return this.getRuleContext(0, TypeSigsContext);
    };
    Object.defineProperty(TypeSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_typeSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeSpec) {
            listener.enterTypeSpec(this);
        }
    };
    // @Override
    TypeSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeSpec) {
            listener.exitTypeSpec(this);
        }
    };
    // @Override
    TypeSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeSpec) {
            return visitor.visitTypeSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeSpecContext = TypeSpecContext;
var SpecFunContext = /** @class */ (function (_super) {
    __extends(SpecFunContext, _super);
    function SpecFunContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SpecFunContext.prototype.tokAtom = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TokAtomContext);
        }
        else {
            return this.getRuleContext(i, TokAtomContext);
        }
    };
    SpecFunContext.prototype.tokInteger = function () {
        return this.tryGetRuleContext(0, TokIntegerContext);
    };
    Object.defineProperty(SpecFunContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_specFun; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SpecFunContext.prototype.enterRule = function (listener) {
        if (listener.enterSpecFun) {
            listener.enterSpecFun(this);
        }
    };
    // @Override
    SpecFunContext.prototype.exitRule = function (listener) {
        if (listener.exitSpecFun) {
            listener.exitSpecFun(this);
        }
    };
    // @Override
    SpecFunContext.prototype.accept = function (visitor) {
        if (visitor.visitSpecFun) {
            return visitor.visitSpecFun(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SpecFunContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SpecFunContext = SpecFunContext;
var TypedAttrValContext = /** @class */ (function (_super) {
    __extends(TypedAttrValContext, _super);
    function TypedAttrValContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypedAttrValContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    TypedAttrValContext.prototype.typedRecordFields = function () {
        return this.tryGetRuleContext(0, TypedRecordFieldsContext);
    };
    TypedAttrValContext.prototype.topType = function () {
        return this.tryGetRuleContext(0, TopTypeContext);
    };
    Object.defineProperty(TypedAttrValContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_typedAttrVal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypedAttrValContext.prototype.enterRule = function (listener) {
        if (listener.enterTypedAttrVal) {
            listener.enterTypedAttrVal(this);
        }
    };
    // @Override
    TypedAttrValContext.prototype.exitRule = function (listener) {
        if (listener.exitTypedAttrVal) {
            listener.exitTypedAttrVal(this);
        }
    };
    // @Override
    TypedAttrValContext.prototype.accept = function (visitor) {
        if (visitor.visitTypedAttrVal) {
            return visitor.visitTypedAttrVal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypedAttrValContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypedAttrValContext = TypedAttrValContext;
var TypedRecordFieldsContext = /** @class */ (function (_super) {
    __extends(TypedRecordFieldsContext, _super);
    function TypedRecordFieldsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypedRecordFieldsContext.prototype.typedExprs = function () {
        return this.getRuleContext(0, TypedExprsContext);
    };
    Object.defineProperty(TypedRecordFieldsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_typedRecordFields; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypedRecordFieldsContext.prototype.enterRule = function (listener) {
        if (listener.enterTypedRecordFields) {
            listener.enterTypedRecordFields(this);
        }
    };
    // @Override
    TypedRecordFieldsContext.prototype.exitRule = function (listener) {
        if (listener.exitTypedRecordFields) {
            listener.exitTypedRecordFields(this);
        }
    };
    // @Override
    TypedRecordFieldsContext.prototype.accept = function (visitor) {
        if (visitor.visitTypedRecordFields) {
            return visitor.visitTypedRecordFields(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypedRecordFieldsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypedRecordFieldsContext = TypedRecordFieldsContext;
var TypedExprsContext = /** @class */ (function (_super) {
    __extends(TypedExprsContext, _super);
    function TypedExprsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypedExprsContext.prototype.typedExpr = function () {
        return this.tryGetRuleContext(0, TypedExprContext);
    };
    TypedExprsContext.prototype.typedExprs = function () {
        return this.tryGetRuleContext(0, TypedExprsContext);
    };
    TypedExprsContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    TypedExprsContext.prototype.exprs = function () {
        return this.tryGetRuleContext(0, ExprsContext);
    };
    Object.defineProperty(TypedExprsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_typedExprs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypedExprsContext.prototype.enterRule = function (listener) {
        if (listener.enterTypedExprs) {
            listener.enterTypedExprs(this);
        }
    };
    // @Override
    TypedExprsContext.prototype.exitRule = function (listener) {
        if (listener.exitTypedExprs) {
            listener.exitTypedExprs(this);
        }
    };
    // @Override
    TypedExprsContext.prototype.accept = function (visitor) {
        if (visitor.visitTypedExprs) {
            return visitor.visitTypedExprs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypedExprsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypedExprsContext = TypedExprsContext;
var TypedExprContext = /** @class */ (function (_super) {
    __extends(TypedExprContext, _super);
    function TypedExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypedExprContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    TypedExprContext.prototype.topType = function () {
        return this.getRuleContext(0, TopTypeContext);
    };
    Object.defineProperty(TypedExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_typedExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypedExprContext.prototype.enterRule = function (listener) {
        if (listener.enterTypedExpr) {
            listener.enterTypedExpr(this);
        }
    };
    // @Override
    TypedExprContext.prototype.exitRule = function (listener) {
        if (listener.exitTypedExpr) {
            listener.exitTypedExpr(this);
        }
    };
    // @Override
    TypedExprContext.prototype.accept = function (visitor) {
        if (visitor.visitTypedExpr) {
            return visitor.visitTypedExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypedExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypedExprContext = TypedExprContext;
var TypeSigsContext = /** @class */ (function (_super) {
    __extends(TypeSigsContext, _super);
    function TypeSigsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeSigsContext.prototype.typeSig = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeSigContext);
        }
        else {
            return this.getRuleContext(i, TypeSigContext);
        }
    };
    Object.defineProperty(TypeSigsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_typeSigs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeSigsContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeSigs) {
            listener.enterTypeSigs(this);
        }
    };
    // @Override
    TypeSigsContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeSigs) {
            listener.exitTypeSigs(this);
        }
    };
    // @Override
    TypeSigsContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeSigs) {
            return visitor.visitTypeSigs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeSigsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeSigsContext = TypeSigsContext;
var TypeSigContext = /** @class */ (function (_super) {
    __extends(TypeSigContext, _super);
    function TypeSigContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeSigContext.prototype.funType = function () {
        return this.getRuleContext(0, FunTypeContext);
    };
    TypeSigContext.prototype.typeGuards = function () {
        return this.tryGetRuleContext(0, TypeGuardsContext);
    };
    Object.defineProperty(TypeSigContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_typeSig; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeSigContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeSig) {
            listener.enterTypeSig(this);
        }
    };
    // @Override
    TypeSigContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeSig) {
            listener.exitTypeSig(this);
        }
    };
    // @Override
    TypeSigContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeSig) {
            return visitor.visitTypeSig(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeSigContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeSigContext = TypeSigContext;
var TypeGuardsContext = /** @class */ (function (_super) {
    __extends(TypeGuardsContext, _super);
    function TypeGuardsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeGuardsContext.prototype.typeGuard = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeGuardContext);
        }
        else {
            return this.getRuleContext(i, TypeGuardContext);
        }
    };
    Object.defineProperty(TypeGuardsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_typeGuards; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeGuardsContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeGuards) {
            listener.enterTypeGuards(this);
        }
    };
    // @Override
    TypeGuardsContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeGuards) {
            listener.exitTypeGuards(this);
        }
    };
    // @Override
    TypeGuardsContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeGuards) {
            return visitor.visitTypeGuards(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeGuardsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeGuardsContext = TypeGuardsContext;
var TypeGuardContext = /** @class */ (function (_super) {
    __extends(TypeGuardContext, _super);
    function TypeGuardContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeGuardContext.prototype.tokAtom = function () {
        return this.tryGetRuleContext(0, TokAtomContext);
    };
    TypeGuardContext.prototype.topTypes = function () {
        return this.tryGetRuleContext(0, TopTypesContext);
    };
    TypeGuardContext.prototype.tokVar = function () {
        return this.tryGetRuleContext(0, TokVarContext);
    };
    TypeGuardContext.prototype.topType = function () {
        return this.tryGetRuleContext(0, TopTypeContext);
    };
    Object.defineProperty(TypeGuardContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_typeGuard; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeGuardContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeGuard) {
            listener.enterTypeGuard(this);
        }
    };
    // @Override
    TypeGuardContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeGuard) {
            listener.exitTypeGuard(this);
        }
    };
    // @Override
    TypeGuardContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeGuard) {
            return visitor.visitTypeGuard(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeGuardContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeGuardContext = TypeGuardContext;
var TopTypesContext = /** @class */ (function (_super) {
    __extends(TopTypesContext, _super);
    function TopTypesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TopTypesContext.prototype.topType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TopTypeContext);
        }
        else {
            return this.getRuleContext(i, TopTypeContext);
        }
    };
    Object.defineProperty(TopTypesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_topTypes; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TopTypesContext.prototype.enterRule = function (listener) {
        if (listener.enterTopTypes) {
            listener.enterTopTypes(this);
        }
    };
    // @Override
    TopTypesContext.prototype.exitRule = function (listener) {
        if (listener.exitTopTypes) {
            listener.exitTopTypes(this);
        }
    };
    // @Override
    TopTypesContext.prototype.accept = function (visitor) {
        if (visitor.visitTopTypes) {
            return visitor.visitTopTypes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TopTypesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TopTypesContext = TopTypesContext;
var TopTypeContext = /** @class */ (function (_super) {
    __extends(TopTypeContext, _super);
    function TopTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TopTypeContext.prototype.topType100 = function () {
        return this.getRuleContext(0, TopType100Context);
    };
    TopTypeContext.prototype.tokVar = function () {
        return this.tryGetRuleContext(0, TokVarContext);
    };
    Object.defineProperty(TopTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_topType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TopTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterTopType) {
            listener.enterTopType(this);
        }
    };
    // @Override
    TopTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitTopType) {
            listener.exitTopType(this);
        }
    };
    // @Override
    TopTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitTopType) {
            return visitor.visitTopType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TopTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TopTypeContext = TopTypeContext;
var TopType100Context = /** @class */ (function (_super) {
    __extends(TopType100Context, _super);
    function TopType100Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TopType100Context.prototype.type200 = function () {
        return this.getRuleContext(0, Type200Context);
    };
    TopType100Context.prototype.topType100 = function () {
        return this.tryGetRuleContext(0, TopType100Context);
    };
    Object.defineProperty(TopType100Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_topType100; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TopType100Context.prototype.enterRule = function (listener) {
        if (listener.enterTopType100) {
            listener.enterTopType100(this);
        }
    };
    // @Override
    TopType100Context.prototype.exitRule = function (listener) {
        if (listener.exitTopType100) {
            listener.exitTopType100(this);
        }
    };
    // @Override
    TopType100Context.prototype.accept = function (visitor) {
        if (visitor.visitTopType100) {
            return visitor.visitTopType100(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TopType100Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.TopType100Context = TopType100Context;
var Type200Context = /** @class */ (function (_super) {
    __extends(Type200Context, _super);
    function Type200Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Type200Context.prototype.type300 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Type300Context);
        }
        else {
            return this.getRuleContext(i, Type300Context);
        }
    };
    Object.defineProperty(Type200Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_type200; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Type200Context.prototype.enterRule = function (listener) {
        if (listener.enterType200) {
            listener.enterType200(this);
        }
    };
    // @Override
    Type200Context.prototype.exitRule = function (listener) {
        if (listener.exitType200) {
            listener.exitType200(this);
        }
    };
    // @Override
    Type200Context.prototype.accept = function (visitor) {
        if (visitor.visitType200) {
            return visitor.visitType200(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Type200Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Type200Context = Type200Context;
var Type300Context = /** @class */ (function (_super) {
    __extends(Type300Context, _super);
    function Type300Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Type300Context.prototype.type300 = function () {
        return this.tryGetRuleContext(0, Type300Context);
    };
    Type300Context.prototype.addOp = function () {
        return this.tryGetRuleContext(0, AddOpContext);
    };
    Type300Context.prototype.type400 = function () {
        return this.getRuleContext(0, Type400Context);
    };
    Object.defineProperty(Type300Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_type300; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Type300Context.prototype.enterRule = function (listener) {
        if (listener.enterType300) {
            listener.enterType300(this);
        }
    };
    // @Override
    Type300Context.prototype.exitRule = function (listener) {
        if (listener.exitType300) {
            listener.exitType300(this);
        }
    };
    // @Override
    Type300Context.prototype.accept = function (visitor) {
        if (visitor.visitType300) {
            return visitor.visitType300(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Type300Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Type300Context = Type300Context;
var Type400Context = /** @class */ (function (_super) {
    __extends(Type400Context, _super);
    function Type400Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Type400Context.prototype.type400 = function () {
        return this.tryGetRuleContext(0, Type400Context);
    };
    Type400Context.prototype.multOp = function () {
        return this.tryGetRuleContext(0, MultOpContext);
    };
    Type400Context.prototype.type500 = function () {
        return this.getRuleContext(0, Type500Context);
    };
    Object.defineProperty(Type400Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_type400; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Type400Context.prototype.enterRule = function (listener) {
        if (listener.enterType400) {
            listener.enterType400(this);
        }
    };
    // @Override
    Type400Context.prototype.exitRule = function (listener) {
        if (listener.exitType400) {
            listener.exitType400(this);
        }
    };
    // @Override
    Type400Context.prototype.accept = function (visitor) {
        if (visitor.visitType400) {
            return visitor.visitType400(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Type400Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Type400Context = Type400Context;
var Type500Context = /** @class */ (function (_super) {
    __extends(Type500Context, _super);
    function Type500Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Type500Context.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    Type500Context.prototype.prefixOp = function () {
        return this.tryGetRuleContext(0, PrefixOpContext);
    };
    Object.defineProperty(Type500Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_type500; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Type500Context.prototype.enterRule = function (listener) {
        if (listener.enterType500) {
            listener.enterType500(this);
        }
    };
    // @Override
    Type500Context.prototype.exitRule = function (listener) {
        if (listener.exitType500) {
            listener.exitType500(this);
        }
    };
    // @Override
    Type500Context.prototype.accept = function (visitor) {
        if (visitor.visitType500) {
            return visitor.visitType500(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Type500Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Type500Context = Type500Context;
var TypeContext = /** @class */ (function (_super) {
    __extends(TypeContext, _super);
    function TypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeContext.prototype.topType = function () {
        return this.tryGetRuleContext(0, TopTypeContext);
    };
    TypeContext.prototype.tokVar = function () {
        return this.tryGetRuleContext(0, TokVarContext);
    };
    TypeContext.prototype.tokAtom = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TokAtomContext);
        }
        else {
            return this.getRuleContext(i, TokAtomContext);
        }
    };
    TypeContext.prototype.topTypes = function () {
        return this.tryGetRuleContext(0, TopTypesContext);
    };
    TypeContext.prototype.fieldTypes = function () {
        return this.tryGetRuleContext(0, FieldTypesContext);
    };
    TypeContext.prototype.binaryType = function () {
        return this.tryGetRuleContext(0, BinaryTypeContext);
    };
    TypeContext.prototype.tokInteger = function () {
        return this.tryGetRuleContext(0, TokIntegerContext);
    };
    TypeContext.prototype.funType100 = function () {
        return this.tryGetRuleContext(0, FunType100Context);
    };
    Object.defineProperty(TypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_type; },
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
var FunType100Context = /** @class */ (function (_super) {
    __extends(FunType100Context, _super);
    function FunType100Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunType100Context.prototype.topType = function () {
        return this.tryGetRuleContext(0, TopTypeContext);
    };
    FunType100Context.prototype.funType = function () {
        return this.tryGetRuleContext(0, FunTypeContext);
    };
    Object.defineProperty(FunType100Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_funType100; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunType100Context.prototype.enterRule = function (listener) {
        if (listener.enterFunType100) {
            listener.enterFunType100(this);
        }
    };
    // @Override
    FunType100Context.prototype.exitRule = function (listener) {
        if (listener.exitFunType100) {
            listener.exitFunType100(this);
        }
    };
    // @Override
    FunType100Context.prototype.accept = function (visitor) {
        if (visitor.visitFunType100) {
            return visitor.visitFunType100(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunType100Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunType100Context = FunType100Context;
var FunTypeContext = /** @class */ (function (_super) {
    __extends(FunTypeContext, _super);
    function FunTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunTypeContext.prototype.topType = function () {
        return this.getRuleContext(0, TopTypeContext);
    };
    FunTypeContext.prototype.topTypes = function () {
        return this.tryGetRuleContext(0, TopTypesContext);
    };
    Object.defineProperty(FunTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_funType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterFunType) {
            listener.enterFunType(this);
        }
    };
    // @Override
    FunTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitFunType) {
            listener.exitFunType(this);
        }
    };
    // @Override
    FunTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitFunType) {
            return visitor.visitFunType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunTypeContext = FunTypeContext;
var FieldTypesContext = /** @class */ (function (_super) {
    __extends(FieldTypesContext, _super);
    function FieldTypesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldTypesContext.prototype.fieldType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldTypeContext);
        }
        else {
            return this.getRuleContext(i, FieldTypeContext);
        }
    };
    Object.defineProperty(FieldTypesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_fieldTypes; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FieldTypesContext.prototype.enterRule = function (listener) {
        if (listener.enterFieldTypes) {
            listener.enterFieldTypes(this);
        }
    };
    // @Override
    FieldTypesContext.prototype.exitRule = function (listener) {
        if (listener.exitFieldTypes) {
            listener.exitFieldTypes(this);
        }
    };
    // @Override
    FieldTypesContext.prototype.accept = function (visitor) {
        if (visitor.visitFieldTypes) {
            return visitor.visitFieldTypes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FieldTypesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FieldTypesContext = FieldTypesContext;
var FieldTypeContext = /** @class */ (function (_super) {
    __extends(FieldTypeContext, _super);
    function FieldTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldTypeContext.prototype.tokAtom = function () {
        return this.getRuleContext(0, TokAtomContext);
    };
    FieldTypeContext.prototype.topType = function () {
        return this.getRuleContext(0, TopTypeContext);
    };
    Object.defineProperty(FieldTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_fieldType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FieldTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterFieldType) {
            listener.enterFieldType(this);
        }
    };
    // @Override
    FieldTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitFieldType) {
            listener.exitFieldType(this);
        }
    };
    // @Override
    FieldTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitFieldType) {
            return visitor.visitFieldType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FieldTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FieldTypeContext = FieldTypeContext;
var BinaryTypeContext = /** @class */ (function (_super) {
    __extends(BinaryTypeContext, _super);
    function BinaryTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BinaryTypeContext.prototype.binBaseType = function () {
        return this.tryGetRuleContext(0, BinBaseTypeContext);
    };
    BinaryTypeContext.prototype.binUnitType = function () {
        return this.tryGetRuleContext(0, BinUnitTypeContext);
    };
    Object.defineProperty(BinaryTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_binaryType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BinaryTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterBinaryType) {
            listener.enterBinaryType(this);
        }
    };
    // @Override
    BinaryTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitBinaryType) {
            listener.exitBinaryType(this);
        }
    };
    // @Override
    BinaryTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitBinaryType) {
            return visitor.visitBinaryType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BinaryTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BinaryTypeContext = BinaryTypeContext;
var BinBaseTypeContext = /** @class */ (function (_super) {
    __extends(BinBaseTypeContext, _super);
    function BinBaseTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BinBaseTypeContext.prototype.tokVar = function () {
        return this.getRuleContext(0, TokVarContext);
    };
    BinBaseTypeContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    Object.defineProperty(BinBaseTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_binBaseType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BinBaseTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterBinBaseType) {
            listener.enterBinBaseType(this);
        }
    };
    // @Override
    BinBaseTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitBinBaseType) {
            listener.exitBinBaseType(this);
        }
    };
    // @Override
    BinBaseTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitBinBaseType) {
            return visitor.visitBinBaseType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BinBaseTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BinBaseTypeContext = BinBaseTypeContext;
var BinUnitTypeContext = /** @class */ (function (_super) {
    __extends(BinUnitTypeContext, _super);
    function BinUnitTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BinUnitTypeContext.prototype.tokVar = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TokVarContext);
        }
        else {
            return this.getRuleContext(i, TokVarContext);
        }
    };
    BinUnitTypeContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    Object.defineProperty(BinUnitTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_binUnitType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BinUnitTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterBinUnitType) {
            listener.enterBinUnitType(this);
        }
    };
    // @Override
    BinUnitTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitBinUnitType) {
            listener.exitBinUnitType(this);
        }
    };
    // @Override
    BinUnitTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitBinUnitType) {
            return visitor.visitBinUnitType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BinUnitTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BinUnitTypeContext = BinUnitTypeContext;
var AttrValContext = /** @class */ (function (_super) {
    __extends(AttrValContext, _super);
    function AttrValContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttrValContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    AttrValContext.prototype.exprs = function () {
        return this.tryGetRuleContext(0, ExprsContext);
    };
    Object.defineProperty(AttrValContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_attrVal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AttrValContext.prototype.enterRule = function (listener) {
        if (listener.enterAttrVal) {
            listener.enterAttrVal(this);
        }
    };
    // @Override
    AttrValContext.prototype.exitRule = function (listener) {
        if (listener.exitAttrVal) {
            listener.exitAttrVal(this);
        }
    };
    // @Override
    AttrValContext.prototype.accept = function (visitor) {
        if (visitor.visitAttrVal) {
            return visitor.visitAttrVal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AttrValContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AttrValContext = AttrValContext;
var FunctionContext = /** @class */ (function (_super) {
    __extends(FunctionContext, _super);
    function FunctionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionContext.prototype.functionClause = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FunctionClauseContext);
        }
        else {
            return this.getRuleContext(i, FunctionClauseContext);
        }
    };
    Object.defineProperty(FunctionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_function; },
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
var FunctionClauseContext = /** @class */ (function (_super) {
    __extends(FunctionClauseContext, _super);
    function FunctionClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionClauseContext.prototype.tokAtom = function () {
        return this.getRuleContext(0, TokAtomContext);
    };
    FunctionClauseContext.prototype.clauseArgs = function () {
        return this.getRuleContext(0, ClauseArgsContext);
    };
    FunctionClauseContext.prototype.clauseGuard = function () {
        return this.getRuleContext(0, ClauseGuardContext);
    };
    FunctionClauseContext.prototype.clauseBody = function () {
        return this.getRuleContext(0, ClauseBodyContext);
    };
    Object.defineProperty(FunctionClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_functionClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionClause) {
            listener.enterFunctionClause(this);
        }
    };
    // @Override
    FunctionClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionClause) {
            listener.exitFunctionClause(this);
        }
    };
    // @Override
    FunctionClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionClause) {
            return visitor.visitFunctionClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionClauseContext = FunctionClauseContext;
var ClauseArgsContext = /** @class */ (function (_super) {
    __extends(ClauseArgsContext, _super);
    function ClauseArgsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClauseArgsContext.prototype.argumentList = function () {
        return this.getRuleContext(0, ArgumentListContext);
    };
    Object.defineProperty(ClauseArgsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_clauseArgs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClauseArgsContext.prototype.enterRule = function (listener) {
        if (listener.enterClauseArgs) {
            listener.enterClauseArgs(this);
        }
    };
    // @Override
    ClauseArgsContext.prototype.exitRule = function (listener) {
        if (listener.exitClauseArgs) {
            listener.exitClauseArgs(this);
        }
    };
    // @Override
    ClauseArgsContext.prototype.accept = function (visitor) {
        if (visitor.visitClauseArgs) {
            return visitor.visitClauseArgs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClauseArgsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClauseArgsContext = ClauseArgsContext;
var ClauseGuardContext = /** @class */ (function (_super) {
    __extends(ClauseGuardContext, _super);
    function ClauseGuardContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClauseGuardContext.prototype.guard = function () {
        return this.tryGetRuleContext(0, GuardContext);
    };
    Object.defineProperty(ClauseGuardContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_clauseGuard; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClauseGuardContext.prototype.enterRule = function (listener) {
        if (listener.enterClauseGuard) {
            listener.enterClauseGuard(this);
        }
    };
    // @Override
    ClauseGuardContext.prototype.exitRule = function (listener) {
        if (listener.exitClauseGuard) {
            listener.exitClauseGuard(this);
        }
    };
    // @Override
    ClauseGuardContext.prototype.accept = function (visitor) {
        if (visitor.visitClauseGuard) {
            return visitor.visitClauseGuard(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClauseGuardContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClauseGuardContext = ClauseGuardContext;
var ClauseBodyContext = /** @class */ (function (_super) {
    __extends(ClauseBodyContext, _super);
    function ClauseBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClauseBodyContext.prototype.exprs = function () {
        return this.getRuleContext(0, ExprsContext);
    };
    Object.defineProperty(ClauseBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_clauseBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClauseBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterClauseBody) {
            listener.enterClauseBody(this);
        }
    };
    // @Override
    ClauseBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitClauseBody) {
            listener.exitClauseBody(this);
        }
    };
    // @Override
    ClauseBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitClauseBody) {
            return visitor.visitClauseBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClauseBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClauseBodyContext = ClauseBodyContext;
var ExprContext = /** @class */ (function (_super) {
    __extends(ExprContext, _super);
    function ExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExprContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    ExprContext.prototype.expr100 = function () {
        return this.tryGetRuleContext(0, Expr100Context);
    };
    Object.defineProperty(ExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_expr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExprContext.prototype.enterRule = function (listener) {
        if (listener.enterExpr) {
            listener.enterExpr(this);
        }
    };
    // @Override
    ExprContext.prototype.exitRule = function (listener) {
        if (listener.exitExpr) {
            listener.exitExpr(this);
        }
    };
    // @Override
    ExprContext.prototype.accept = function (visitor) {
        if (visitor.visitExpr) {
            return visitor.visitExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExprContext = ExprContext;
var Expr100Context = /** @class */ (function (_super) {
    __extends(Expr100Context, _super);
    function Expr100Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Expr100Context.prototype.expr150 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Expr150Context);
        }
        else {
            return this.getRuleContext(i, Expr150Context);
        }
    };
    Object.defineProperty(Expr100Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_expr100; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Expr100Context.prototype.enterRule = function (listener) {
        if (listener.enterExpr100) {
            listener.enterExpr100(this);
        }
    };
    // @Override
    Expr100Context.prototype.exitRule = function (listener) {
        if (listener.exitExpr100) {
            listener.exitExpr100(this);
        }
    };
    // @Override
    Expr100Context.prototype.accept = function (visitor) {
        if (visitor.visitExpr100) {
            return visitor.visitExpr100(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Expr100Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Expr100Context = Expr100Context;
var Expr150Context = /** @class */ (function (_super) {
    __extends(Expr150Context, _super);
    function Expr150Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Expr150Context.prototype.expr160 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Expr160Context);
        }
        else {
            return this.getRuleContext(i, Expr160Context);
        }
    };
    Object.defineProperty(Expr150Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_expr150; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Expr150Context.prototype.enterRule = function (listener) {
        if (listener.enterExpr150) {
            listener.enterExpr150(this);
        }
    };
    // @Override
    Expr150Context.prototype.exitRule = function (listener) {
        if (listener.exitExpr150) {
            listener.exitExpr150(this);
        }
    };
    // @Override
    Expr150Context.prototype.accept = function (visitor) {
        if (visitor.visitExpr150) {
            return visitor.visitExpr150(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Expr150Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Expr150Context = Expr150Context;
var Expr160Context = /** @class */ (function (_super) {
    __extends(Expr160Context, _super);
    function Expr160Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Expr160Context.prototype.expr200 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Expr200Context);
        }
        else {
            return this.getRuleContext(i, Expr200Context);
        }
    };
    Object.defineProperty(Expr160Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_expr160; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Expr160Context.prototype.enterRule = function (listener) {
        if (listener.enterExpr160) {
            listener.enterExpr160(this);
        }
    };
    // @Override
    Expr160Context.prototype.exitRule = function (listener) {
        if (listener.exitExpr160) {
            listener.exitExpr160(this);
        }
    };
    // @Override
    Expr160Context.prototype.accept = function (visitor) {
        if (visitor.visitExpr160) {
            return visitor.visitExpr160(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Expr160Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Expr160Context = Expr160Context;
var Expr200Context = /** @class */ (function (_super) {
    __extends(Expr200Context, _super);
    function Expr200Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Expr200Context.prototype.expr300 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Expr300Context);
        }
        else {
            return this.getRuleContext(i, Expr300Context);
        }
    };
    Expr200Context.prototype.compOp = function () {
        return this.tryGetRuleContext(0, CompOpContext);
    };
    Object.defineProperty(Expr200Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_expr200; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Expr200Context.prototype.enterRule = function (listener) {
        if (listener.enterExpr200) {
            listener.enterExpr200(this);
        }
    };
    // @Override
    Expr200Context.prototype.exitRule = function (listener) {
        if (listener.exitExpr200) {
            listener.exitExpr200(this);
        }
    };
    // @Override
    Expr200Context.prototype.accept = function (visitor) {
        if (visitor.visitExpr200) {
            return visitor.visitExpr200(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Expr200Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Expr200Context = Expr200Context;
var Expr300Context = /** @class */ (function (_super) {
    __extends(Expr300Context, _super);
    function Expr300Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Expr300Context.prototype.expr400 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Expr400Context);
        }
        else {
            return this.getRuleContext(i, Expr400Context);
        }
    };
    Expr300Context.prototype.listOp = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ListOpContext);
        }
        else {
            return this.getRuleContext(i, ListOpContext);
        }
    };
    Object.defineProperty(Expr300Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_expr300; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Expr300Context.prototype.enterRule = function (listener) {
        if (listener.enterExpr300) {
            listener.enterExpr300(this);
        }
    };
    // @Override
    Expr300Context.prototype.exitRule = function (listener) {
        if (listener.exitExpr300) {
            listener.exitExpr300(this);
        }
    };
    // @Override
    Expr300Context.prototype.accept = function (visitor) {
        if (visitor.visitExpr300) {
            return visitor.visitExpr300(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Expr300Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Expr300Context = Expr300Context;
var Expr400Context = /** @class */ (function (_super) {
    __extends(Expr400Context, _super);
    function Expr400Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Expr400Context.prototype.expr500 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Expr500Context);
        }
        else {
            return this.getRuleContext(i, Expr500Context);
        }
    };
    Expr400Context.prototype.addOp = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AddOpContext);
        }
        else {
            return this.getRuleContext(i, AddOpContext);
        }
    };
    Object.defineProperty(Expr400Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_expr400; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Expr400Context.prototype.enterRule = function (listener) {
        if (listener.enterExpr400) {
            listener.enterExpr400(this);
        }
    };
    // @Override
    Expr400Context.prototype.exitRule = function (listener) {
        if (listener.exitExpr400) {
            listener.exitExpr400(this);
        }
    };
    // @Override
    Expr400Context.prototype.accept = function (visitor) {
        if (visitor.visitExpr400) {
            return visitor.visitExpr400(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Expr400Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Expr400Context = Expr400Context;
var Expr500Context = /** @class */ (function (_super) {
    __extends(Expr500Context, _super);
    function Expr500Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Expr500Context.prototype.expr600 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Expr600Context);
        }
        else {
            return this.getRuleContext(i, Expr600Context);
        }
    };
    Expr500Context.prototype.multOp = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MultOpContext);
        }
        else {
            return this.getRuleContext(i, MultOpContext);
        }
    };
    Object.defineProperty(Expr500Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_expr500; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Expr500Context.prototype.enterRule = function (listener) {
        if (listener.enterExpr500) {
            listener.enterExpr500(this);
        }
    };
    // @Override
    Expr500Context.prototype.exitRule = function (listener) {
        if (listener.exitExpr500) {
            listener.exitExpr500(this);
        }
    };
    // @Override
    Expr500Context.prototype.accept = function (visitor) {
        if (visitor.visitExpr500) {
            return visitor.visitExpr500(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Expr500Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Expr500Context = Expr500Context;
var Expr600Context = /** @class */ (function (_super) {
    __extends(Expr600Context, _super);
    function Expr600Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Expr600Context.prototype.expr700 = function () {
        return this.getRuleContext(0, Expr700Context);
    };
    Expr600Context.prototype.prefixOp = function () {
        return this.tryGetRuleContext(0, PrefixOpContext);
    };
    Object.defineProperty(Expr600Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_expr600; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Expr600Context.prototype.enterRule = function (listener) {
        if (listener.enterExpr600) {
            listener.enterExpr600(this);
        }
    };
    // @Override
    Expr600Context.prototype.exitRule = function (listener) {
        if (listener.exitExpr600) {
            listener.exitExpr600(this);
        }
    };
    // @Override
    Expr600Context.prototype.accept = function (visitor) {
        if (visitor.visitExpr600) {
            return visitor.visitExpr600(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Expr600Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Expr600Context = Expr600Context;
var Expr700Context = /** @class */ (function (_super) {
    __extends(Expr700Context, _super);
    function Expr700Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Expr700Context.prototype.functionCall = function () {
        return this.tryGetRuleContext(0, FunctionCallContext);
    };
    Expr700Context.prototype.recordExpr = function () {
        return this.tryGetRuleContext(0, RecordExprContext);
    };
    Expr700Context.prototype.expr800 = function () {
        return this.tryGetRuleContext(0, Expr800Context);
    };
    Object.defineProperty(Expr700Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_expr700; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Expr700Context.prototype.enterRule = function (listener) {
        if (listener.enterExpr700) {
            listener.enterExpr700(this);
        }
    };
    // @Override
    Expr700Context.prototype.exitRule = function (listener) {
        if (listener.exitExpr700) {
            listener.exitExpr700(this);
        }
    };
    // @Override
    Expr700Context.prototype.accept = function (visitor) {
        if (visitor.visitExpr700) {
            return visitor.visitExpr700(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Expr700Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Expr700Context = Expr700Context;
var Expr800Context = /** @class */ (function (_super) {
    __extends(Expr800Context, _super);
    function Expr800Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Expr800Context.prototype.exprMax = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprMaxContext);
        }
        else {
            return this.getRuleContext(i, ExprMaxContext);
        }
    };
    Object.defineProperty(Expr800Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_expr800; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Expr800Context.prototype.enterRule = function (listener) {
        if (listener.enterExpr800) {
            listener.enterExpr800(this);
        }
    };
    // @Override
    Expr800Context.prototype.exitRule = function (listener) {
        if (listener.exitExpr800) {
            listener.exitExpr800(this);
        }
    };
    // @Override
    Expr800Context.prototype.accept = function (visitor) {
        if (visitor.visitExpr800) {
            return visitor.visitExpr800(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Expr800Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Expr800Context = Expr800Context;
var ExprMaxContext = /** @class */ (function (_super) {
    __extends(ExprMaxContext, _super);
    function ExprMaxContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExprMaxContext.prototype.tokVar = function () {
        return this.tryGetRuleContext(0, TokVarContext);
    };
    ExprMaxContext.prototype.atomic = function () {
        return this.tryGetRuleContext(0, AtomicContext);
    };
    ExprMaxContext.prototype.list = function () {
        return this.tryGetRuleContext(0, ListContext);
    };
    ExprMaxContext.prototype.binary = function () {
        return this.tryGetRuleContext(0, BinaryContext);
    };
    ExprMaxContext.prototype.listComprehension = function () {
        return this.tryGetRuleContext(0, ListComprehensionContext);
    };
    ExprMaxContext.prototype.binaryComprehension = function () {
        return this.tryGetRuleContext(0, BinaryComprehensionContext);
    };
    ExprMaxContext.prototype.tuple = function () {
        return this.tryGetRuleContext(0, TupleContext);
    };
    ExprMaxContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    ExprMaxContext.prototype.exprs = function () {
        return this.tryGetRuleContext(0, ExprsContext);
    };
    ExprMaxContext.prototype.ifExpr = function () {
        return this.tryGetRuleContext(0, IfExprContext);
    };
    ExprMaxContext.prototype.caseExpr = function () {
        return this.tryGetRuleContext(0, CaseExprContext);
    };
    ExprMaxContext.prototype.receiveExpr = function () {
        return this.tryGetRuleContext(0, ReceiveExprContext);
    };
    ExprMaxContext.prototype.funExpr = function () {
        return this.tryGetRuleContext(0, FunExprContext);
    };
    ExprMaxContext.prototype.tryExpr = function () {
        return this.tryGetRuleContext(0, TryExprContext);
    };
    Object.defineProperty(ExprMaxContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_exprMax; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExprMaxContext.prototype.enterRule = function (listener) {
        if (listener.enterExprMax) {
            listener.enterExprMax(this);
        }
    };
    // @Override
    ExprMaxContext.prototype.exitRule = function (listener) {
        if (listener.exitExprMax) {
            listener.exitExprMax(this);
        }
    };
    // @Override
    ExprMaxContext.prototype.accept = function (visitor) {
        if (visitor.visitExprMax) {
            return visitor.visitExprMax(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprMaxContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExprMaxContext = ExprMaxContext;
var ListContext = /** @class */ (function (_super) {
    __extends(ListContext, _super);
    function ListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ListContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    ListContext.prototype.tail = function () {
        return this.tryGetRuleContext(0, TailContext);
    };
    Object.defineProperty(ListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ListContext.prototype.enterRule = function (listener) {
        if (listener.enterList) {
            listener.enterList(this);
        }
    };
    // @Override
    ListContext.prototype.exitRule = function (listener) {
        if (listener.exitList) {
            listener.exitList(this);
        }
    };
    // @Override
    ListContext.prototype.accept = function (visitor) {
        if (visitor.visitList) {
            return visitor.visitList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ListContext = ListContext;
var TailContext = /** @class */ (function (_super) {
    __extends(TailContext, _super);
    function TailContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TailContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    TailContext.prototype.tail = function () {
        return this.tryGetRuleContext(0, TailContext);
    };
    Object.defineProperty(TailContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_tail; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TailContext.prototype.enterRule = function (listener) {
        if (listener.enterTail) {
            listener.enterTail(this);
        }
    };
    // @Override
    TailContext.prototype.exitRule = function (listener) {
        if (listener.exitTail) {
            listener.exitTail(this);
        }
    };
    // @Override
    TailContext.prototype.accept = function (visitor) {
        if (visitor.visitTail) {
            return visitor.visitTail(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TailContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TailContext = TailContext;
var BinaryContext = /** @class */ (function (_super) {
    __extends(BinaryContext, _super);
    function BinaryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BinaryContext.prototype.binElements = function () {
        return this.tryGetRuleContext(0, BinElementsContext);
    };
    Object.defineProperty(BinaryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_binary; },
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
var BinElementsContext = /** @class */ (function (_super) {
    __extends(BinElementsContext, _super);
    function BinElementsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BinElementsContext.prototype.binElement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BinElementContext);
        }
        else {
            return this.getRuleContext(i, BinElementContext);
        }
    };
    Object.defineProperty(BinElementsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_binElements; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BinElementsContext.prototype.enterRule = function (listener) {
        if (listener.enterBinElements) {
            listener.enterBinElements(this);
        }
    };
    // @Override
    BinElementsContext.prototype.exitRule = function (listener) {
        if (listener.exitBinElements) {
            listener.exitBinElements(this);
        }
    };
    // @Override
    BinElementsContext.prototype.accept = function (visitor) {
        if (visitor.visitBinElements) {
            return visitor.visitBinElements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BinElementsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BinElementsContext = BinElementsContext;
var BinElementContext = /** @class */ (function (_super) {
    __extends(BinElementContext, _super);
    function BinElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BinElementContext.prototype.bitExpr = function () {
        return this.getRuleContext(0, BitExprContext);
    };
    BinElementContext.prototype.optBitSizeExpr = function () {
        return this.getRuleContext(0, OptBitSizeExprContext);
    };
    BinElementContext.prototype.optBitTypeList = function () {
        return this.getRuleContext(0, OptBitTypeListContext);
    };
    Object.defineProperty(BinElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_binElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BinElementContext.prototype.enterRule = function (listener) {
        if (listener.enterBinElement) {
            listener.enterBinElement(this);
        }
    };
    // @Override
    BinElementContext.prototype.exitRule = function (listener) {
        if (listener.exitBinElement) {
            listener.exitBinElement(this);
        }
    };
    // @Override
    BinElementContext.prototype.accept = function (visitor) {
        if (visitor.visitBinElement) {
            return visitor.visitBinElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BinElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BinElementContext = BinElementContext;
var BitExprContext = /** @class */ (function (_super) {
    __extends(BitExprContext, _super);
    function BitExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BitExprContext.prototype.exprMax = function () {
        return this.getRuleContext(0, ExprMaxContext);
    };
    BitExprContext.prototype.prefixOp = function () {
        return this.tryGetRuleContext(0, PrefixOpContext);
    };
    Object.defineProperty(BitExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_bitExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BitExprContext.prototype.enterRule = function (listener) {
        if (listener.enterBitExpr) {
            listener.enterBitExpr(this);
        }
    };
    // @Override
    BitExprContext.prototype.exitRule = function (listener) {
        if (listener.exitBitExpr) {
            listener.exitBitExpr(this);
        }
    };
    // @Override
    BitExprContext.prototype.accept = function (visitor) {
        if (visitor.visitBitExpr) {
            return visitor.visitBitExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BitExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BitExprContext = BitExprContext;
var OptBitSizeExprContext = /** @class */ (function (_super) {
    __extends(OptBitSizeExprContext, _super);
    function OptBitSizeExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptBitSizeExprContext.prototype.bitSizeExpr = function () {
        return this.tryGetRuleContext(0, BitSizeExprContext);
    };
    Object.defineProperty(OptBitSizeExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_optBitSizeExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OptBitSizeExprContext.prototype.enterRule = function (listener) {
        if (listener.enterOptBitSizeExpr) {
            listener.enterOptBitSizeExpr(this);
        }
    };
    // @Override
    OptBitSizeExprContext.prototype.exitRule = function (listener) {
        if (listener.exitOptBitSizeExpr) {
            listener.exitOptBitSizeExpr(this);
        }
    };
    // @Override
    OptBitSizeExprContext.prototype.accept = function (visitor) {
        if (visitor.visitOptBitSizeExpr) {
            return visitor.visitOptBitSizeExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OptBitSizeExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OptBitSizeExprContext = OptBitSizeExprContext;
var OptBitTypeListContext = /** @class */ (function (_super) {
    __extends(OptBitTypeListContext, _super);
    function OptBitTypeListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptBitTypeListContext.prototype.bitTypeList = function () {
        return this.tryGetRuleContext(0, BitTypeListContext);
    };
    Object.defineProperty(OptBitTypeListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_optBitTypeList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OptBitTypeListContext.prototype.enterRule = function (listener) {
        if (listener.enterOptBitTypeList) {
            listener.enterOptBitTypeList(this);
        }
    };
    // @Override
    OptBitTypeListContext.prototype.exitRule = function (listener) {
        if (listener.exitOptBitTypeList) {
            listener.exitOptBitTypeList(this);
        }
    };
    // @Override
    OptBitTypeListContext.prototype.accept = function (visitor) {
        if (visitor.visitOptBitTypeList) {
            return visitor.visitOptBitTypeList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OptBitTypeListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OptBitTypeListContext = OptBitTypeListContext;
var BitTypeListContext = /** @class */ (function (_super) {
    __extends(BitTypeListContext, _super);
    function BitTypeListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BitTypeListContext.prototype.bitType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BitTypeContext);
        }
        else {
            return this.getRuleContext(i, BitTypeContext);
        }
    };
    Object.defineProperty(BitTypeListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_bitTypeList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BitTypeListContext.prototype.enterRule = function (listener) {
        if (listener.enterBitTypeList) {
            listener.enterBitTypeList(this);
        }
    };
    // @Override
    BitTypeListContext.prototype.exitRule = function (listener) {
        if (listener.exitBitTypeList) {
            listener.exitBitTypeList(this);
        }
    };
    // @Override
    BitTypeListContext.prototype.accept = function (visitor) {
        if (visitor.visitBitTypeList) {
            return visitor.visitBitTypeList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BitTypeListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BitTypeListContext = BitTypeListContext;
var BitTypeContext = /** @class */ (function (_super) {
    __extends(BitTypeContext, _super);
    function BitTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BitTypeContext.prototype.tokAtom = function () {
        return this.getRuleContext(0, TokAtomContext);
    };
    BitTypeContext.prototype.tokInteger = function () {
        return this.tryGetRuleContext(0, TokIntegerContext);
    };
    Object.defineProperty(BitTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_bitType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BitTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterBitType) {
            listener.enterBitType(this);
        }
    };
    // @Override
    BitTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitBitType) {
            listener.exitBitType(this);
        }
    };
    // @Override
    BitTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitBitType) {
            return visitor.visitBitType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BitTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BitTypeContext = BitTypeContext;
var BitSizeExprContext = /** @class */ (function (_super) {
    __extends(BitSizeExprContext, _super);
    function BitSizeExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BitSizeExprContext.prototype.exprMax = function () {
        return this.getRuleContext(0, ExprMaxContext);
    };
    Object.defineProperty(BitSizeExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_bitSizeExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BitSizeExprContext.prototype.enterRule = function (listener) {
        if (listener.enterBitSizeExpr) {
            listener.enterBitSizeExpr(this);
        }
    };
    // @Override
    BitSizeExprContext.prototype.exitRule = function (listener) {
        if (listener.exitBitSizeExpr) {
            listener.exitBitSizeExpr(this);
        }
    };
    // @Override
    BitSizeExprContext.prototype.accept = function (visitor) {
        if (visitor.visitBitSizeExpr) {
            return visitor.visitBitSizeExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BitSizeExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BitSizeExprContext = BitSizeExprContext;
var ListComprehensionContext = /** @class */ (function (_super) {
    __extends(ListComprehensionContext, _super);
    function ListComprehensionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ListComprehensionContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    ListComprehensionContext.prototype.lcExprs = function () {
        return this.getRuleContext(0, LcExprsContext);
    };
    Object.defineProperty(ListComprehensionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_listComprehension; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ListComprehensionContext.prototype.enterRule = function (listener) {
        if (listener.enterListComprehension) {
            listener.enterListComprehension(this);
        }
    };
    // @Override
    ListComprehensionContext.prototype.exitRule = function (listener) {
        if (listener.exitListComprehension) {
            listener.exitListComprehension(this);
        }
    };
    // @Override
    ListComprehensionContext.prototype.accept = function (visitor) {
        if (visitor.visitListComprehension) {
            return visitor.visitListComprehension(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ListComprehensionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ListComprehensionContext = ListComprehensionContext;
var BinaryComprehensionContext = /** @class */ (function (_super) {
    __extends(BinaryComprehensionContext, _super);
    function BinaryComprehensionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BinaryComprehensionContext.prototype.binary = function () {
        return this.getRuleContext(0, BinaryContext);
    };
    BinaryComprehensionContext.prototype.lcExprs = function () {
        return this.getRuleContext(0, LcExprsContext);
    };
    Object.defineProperty(BinaryComprehensionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_binaryComprehension; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BinaryComprehensionContext.prototype.enterRule = function (listener) {
        if (listener.enterBinaryComprehension) {
            listener.enterBinaryComprehension(this);
        }
    };
    // @Override
    BinaryComprehensionContext.prototype.exitRule = function (listener) {
        if (listener.exitBinaryComprehension) {
            listener.exitBinaryComprehension(this);
        }
    };
    // @Override
    BinaryComprehensionContext.prototype.accept = function (visitor) {
        if (visitor.visitBinaryComprehension) {
            return visitor.visitBinaryComprehension(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BinaryComprehensionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BinaryComprehensionContext = BinaryComprehensionContext;
var LcExprsContext = /** @class */ (function (_super) {
    __extends(LcExprsContext, _super);
    function LcExprsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LcExprsContext.prototype.lcExpr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LcExprContext);
        }
        else {
            return this.getRuleContext(i, LcExprContext);
        }
    };
    Object.defineProperty(LcExprsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_lcExprs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LcExprsContext.prototype.enterRule = function (listener) {
        if (listener.enterLcExprs) {
            listener.enterLcExprs(this);
        }
    };
    // @Override
    LcExprsContext.prototype.exitRule = function (listener) {
        if (listener.exitLcExprs) {
            listener.exitLcExprs(this);
        }
    };
    // @Override
    LcExprsContext.prototype.accept = function (visitor) {
        if (visitor.visitLcExprs) {
            return visitor.visitLcExprs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LcExprsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LcExprsContext = LcExprsContext;
var LcExprContext = /** @class */ (function (_super) {
    __extends(LcExprContext, _super);
    function LcExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LcExprContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    LcExprContext.prototype.binary = function () {
        return this.tryGetRuleContext(0, BinaryContext);
    };
    Object.defineProperty(LcExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_lcExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LcExprContext.prototype.enterRule = function (listener) {
        if (listener.enterLcExpr) {
            listener.enterLcExpr(this);
        }
    };
    // @Override
    LcExprContext.prototype.exitRule = function (listener) {
        if (listener.exitLcExpr) {
            listener.exitLcExpr(this);
        }
    };
    // @Override
    LcExprContext.prototype.accept = function (visitor) {
        if (visitor.visitLcExpr) {
            return visitor.visitLcExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LcExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LcExprContext = LcExprContext;
var TupleContext = /** @class */ (function (_super) {
    __extends(TupleContext, _super);
    function TupleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TupleContext.prototype.exprs = function () {
        return this.tryGetRuleContext(0, ExprsContext);
    };
    Object.defineProperty(TupleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_tuple; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TupleContext.prototype.enterRule = function (listener) {
        if (listener.enterTuple) {
            listener.enterTuple(this);
        }
    };
    // @Override
    TupleContext.prototype.exitRule = function (listener) {
        if (listener.exitTuple) {
            listener.exitTuple(this);
        }
    };
    // @Override
    TupleContext.prototype.accept = function (visitor) {
        if (visitor.visitTuple) {
            return visitor.visitTuple(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TupleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TupleContext = TupleContext;
var RecordExprContext = /** @class */ (function (_super) {
    __extends(RecordExprContext, _super);
    function RecordExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RecordExprContext.prototype.tokAtom = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TokAtomContext);
        }
        else {
            return this.getRuleContext(i, TokAtomContext);
        }
    };
    RecordExprContext.prototype.recordTuple = function () {
        return this.tryGetRuleContext(0, RecordTupleContext);
    };
    RecordExprContext.prototype.exprMax = function () {
        return this.tryGetRuleContext(0, ExprMaxContext);
    };
    RecordExprContext.prototype.recordExpr = function () {
        return this.tryGetRuleContext(0, RecordExprContext);
    };
    Object.defineProperty(RecordExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_recordExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RecordExprContext.prototype.enterRule = function (listener) {
        if (listener.enterRecordExpr) {
            listener.enterRecordExpr(this);
        }
    };
    // @Override
    RecordExprContext.prototype.exitRule = function (listener) {
        if (listener.exitRecordExpr) {
            listener.exitRecordExpr(this);
        }
    };
    // @Override
    RecordExprContext.prototype.accept = function (visitor) {
        if (visitor.visitRecordExpr) {
            return visitor.visitRecordExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RecordExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RecordExprContext = RecordExprContext;
var RecordTupleContext = /** @class */ (function (_super) {
    __extends(RecordTupleContext, _super);
    function RecordTupleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RecordTupleContext.prototype.recordFields = function () {
        return this.tryGetRuleContext(0, RecordFieldsContext);
    };
    Object.defineProperty(RecordTupleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_recordTuple; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RecordTupleContext.prototype.enterRule = function (listener) {
        if (listener.enterRecordTuple) {
            listener.enterRecordTuple(this);
        }
    };
    // @Override
    RecordTupleContext.prototype.exitRule = function (listener) {
        if (listener.exitRecordTuple) {
            listener.exitRecordTuple(this);
        }
    };
    // @Override
    RecordTupleContext.prototype.accept = function (visitor) {
        if (visitor.visitRecordTuple) {
            return visitor.visitRecordTuple(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RecordTupleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RecordTupleContext = RecordTupleContext;
var RecordFieldsContext = /** @class */ (function (_super) {
    __extends(RecordFieldsContext, _super);
    function RecordFieldsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RecordFieldsContext.prototype.recordField = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RecordFieldContext);
        }
        else {
            return this.getRuleContext(i, RecordFieldContext);
        }
    };
    Object.defineProperty(RecordFieldsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_recordFields; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RecordFieldsContext.prototype.enterRule = function (listener) {
        if (listener.enterRecordFields) {
            listener.enterRecordFields(this);
        }
    };
    // @Override
    RecordFieldsContext.prototype.exitRule = function (listener) {
        if (listener.exitRecordFields) {
            listener.exitRecordFields(this);
        }
    };
    // @Override
    RecordFieldsContext.prototype.accept = function (visitor) {
        if (visitor.visitRecordFields) {
            return visitor.visitRecordFields(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RecordFieldsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RecordFieldsContext = RecordFieldsContext;
var RecordFieldContext = /** @class */ (function (_super) {
    __extends(RecordFieldContext, _super);
    function RecordFieldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RecordFieldContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    RecordFieldContext.prototype.tokVar = function () {
        return this.tryGetRuleContext(0, TokVarContext);
    };
    RecordFieldContext.prototype.tokAtom = function () {
        return this.tryGetRuleContext(0, TokAtomContext);
    };
    Object.defineProperty(RecordFieldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_recordField; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RecordFieldContext.prototype.enterRule = function (listener) {
        if (listener.enterRecordField) {
            listener.enterRecordField(this);
        }
    };
    // @Override
    RecordFieldContext.prototype.exitRule = function (listener) {
        if (listener.exitRecordField) {
            listener.exitRecordField(this);
        }
    };
    // @Override
    RecordFieldContext.prototype.accept = function (visitor) {
        if (visitor.visitRecordField) {
            return visitor.visitRecordField(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RecordFieldContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RecordFieldContext = RecordFieldContext;
var FunctionCallContext = /** @class */ (function (_super) {
    __extends(FunctionCallContext, _super);
    function FunctionCallContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionCallContext.prototype.expr800 = function () {
        return this.getRuleContext(0, Expr800Context);
    };
    FunctionCallContext.prototype.argumentList = function () {
        return this.getRuleContext(0, ArgumentListContext);
    };
    Object.defineProperty(FunctionCallContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_functionCall; },
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
var IfExprContext = /** @class */ (function (_super) {
    __extends(IfExprContext, _super);
    function IfExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfExprContext.prototype.ifClauses = function () {
        return this.getRuleContext(0, IfClausesContext);
    };
    Object.defineProperty(IfExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_ifExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IfExprContext.prototype.enterRule = function (listener) {
        if (listener.enterIfExpr) {
            listener.enterIfExpr(this);
        }
    };
    // @Override
    IfExprContext.prototype.exitRule = function (listener) {
        if (listener.exitIfExpr) {
            listener.exitIfExpr(this);
        }
    };
    // @Override
    IfExprContext.prototype.accept = function (visitor) {
        if (visitor.visitIfExpr) {
            return visitor.visitIfExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IfExprContext = IfExprContext;
var IfClausesContext = /** @class */ (function (_super) {
    __extends(IfClausesContext, _super);
    function IfClausesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfClausesContext.prototype.ifClause = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IfClauseContext);
        }
        else {
            return this.getRuleContext(i, IfClauseContext);
        }
    };
    Object.defineProperty(IfClausesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_ifClauses; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IfClausesContext.prototype.enterRule = function (listener) {
        if (listener.enterIfClauses) {
            listener.enterIfClauses(this);
        }
    };
    // @Override
    IfClausesContext.prototype.exitRule = function (listener) {
        if (listener.exitIfClauses) {
            listener.exitIfClauses(this);
        }
    };
    // @Override
    IfClausesContext.prototype.accept = function (visitor) {
        if (visitor.visitIfClauses) {
            return visitor.visitIfClauses(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfClausesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IfClausesContext = IfClausesContext;
var IfClauseContext = /** @class */ (function (_super) {
    __extends(IfClauseContext, _super);
    function IfClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfClauseContext.prototype.guard = function () {
        return this.getRuleContext(0, GuardContext);
    };
    IfClauseContext.prototype.clauseBody = function () {
        return this.getRuleContext(0, ClauseBodyContext);
    };
    Object.defineProperty(IfClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_ifClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IfClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterIfClause) {
            listener.enterIfClause(this);
        }
    };
    // @Override
    IfClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitIfClause) {
            listener.exitIfClause(this);
        }
    };
    // @Override
    IfClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitIfClause) {
            return visitor.visitIfClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IfClauseContext = IfClauseContext;
var CaseExprContext = /** @class */ (function (_super) {
    __extends(CaseExprContext, _super);
    function CaseExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CaseExprContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    CaseExprContext.prototype.crClauses = function () {
        return this.getRuleContext(0, CrClausesContext);
    };
    Object.defineProperty(CaseExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_caseExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CaseExprContext.prototype.enterRule = function (listener) {
        if (listener.enterCaseExpr) {
            listener.enterCaseExpr(this);
        }
    };
    // @Override
    CaseExprContext.prototype.exitRule = function (listener) {
        if (listener.exitCaseExpr) {
            listener.exitCaseExpr(this);
        }
    };
    // @Override
    CaseExprContext.prototype.accept = function (visitor) {
        if (visitor.visitCaseExpr) {
            return visitor.visitCaseExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CaseExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CaseExprContext = CaseExprContext;
var CrClausesContext = /** @class */ (function (_super) {
    __extends(CrClausesContext, _super);
    function CrClausesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CrClausesContext.prototype.crClause = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CrClauseContext);
        }
        else {
            return this.getRuleContext(i, CrClauseContext);
        }
    };
    Object.defineProperty(CrClausesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_crClauses; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CrClausesContext.prototype.enterRule = function (listener) {
        if (listener.enterCrClauses) {
            listener.enterCrClauses(this);
        }
    };
    // @Override
    CrClausesContext.prototype.exitRule = function (listener) {
        if (listener.exitCrClauses) {
            listener.exitCrClauses(this);
        }
    };
    // @Override
    CrClausesContext.prototype.accept = function (visitor) {
        if (visitor.visitCrClauses) {
            return visitor.visitCrClauses(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CrClausesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CrClausesContext = CrClausesContext;
var CrClauseContext = /** @class */ (function (_super) {
    __extends(CrClauseContext, _super);
    function CrClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CrClauseContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    CrClauseContext.prototype.clauseGuard = function () {
        return this.getRuleContext(0, ClauseGuardContext);
    };
    CrClauseContext.prototype.clauseBody = function () {
        return this.getRuleContext(0, ClauseBodyContext);
    };
    Object.defineProperty(CrClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_crClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CrClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterCrClause) {
            listener.enterCrClause(this);
        }
    };
    // @Override
    CrClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitCrClause) {
            listener.exitCrClause(this);
        }
    };
    // @Override
    CrClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitCrClause) {
            return visitor.visitCrClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CrClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CrClauseContext = CrClauseContext;
var ReceiveExprContext = /** @class */ (function (_super) {
    __extends(ReceiveExprContext, _super);
    function ReceiveExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReceiveExprContext.prototype.crClauses = function () {
        return this.tryGetRuleContext(0, CrClausesContext);
    };
    ReceiveExprContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    ReceiveExprContext.prototype.clauseBody = function () {
        return this.tryGetRuleContext(0, ClauseBodyContext);
    };
    Object.defineProperty(ReceiveExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_receiveExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReceiveExprContext.prototype.enterRule = function (listener) {
        if (listener.enterReceiveExpr) {
            listener.enterReceiveExpr(this);
        }
    };
    // @Override
    ReceiveExprContext.prototype.exitRule = function (listener) {
        if (listener.exitReceiveExpr) {
            listener.exitReceiveExpr(this);
        }
    };
    // @Override
    ReceiveExprContext.prototype.accept = function (visitor) {
        if (visitor.visitReceiveExpr) {
            return visitor.visitReceiveExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReceiveExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReceiveExprContext = ReceiveExprContext;
var FunExprContext = /** @class */ (function (_super) {
    __extends(FunExprContext, _super);
    function FunExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunExprContext.prototype.tokAtom = function () {
        return this.tryGetRuleContext(0, TokAtomContext);
    };
    FunExprContext.prototype.tokInteger = function () {
        return this.tryGetRuleContext(0, TokIntegerContext);
    };
    FunExprContext.prototype.atomOrVar = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AtomOrVarContext);
        }
        else {
            return this.getRuleContext(i, AtomOrVarContext);
        }
    };
    FunExprContext.prototype.integerOrVar = function () {
        return this.tryGetRuleContext(0, IntegerOrVarContext);
    };
    FunExprContext.prototype.funClauses = function () {
        return this.tryGetRuleContext(0, FunClausesContext);
    };
    Object.defineProperty(FunExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_funExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunExprContext.prototype.enterRule = function (listener) {
        if (listener.enterFunExpr) {
            listener.enterFunExpr(this);
        }
    };
    // @Override
    FunExprContext.prototype.exitRule = function (listener) {
        if (listener.exitFunExpr) {
            listener.exitFunExpr(this);
        }
    };
    // @Override
    FunExprContext.prototype.accept = function (visitor) {
        if (visitor.visitFunExpr) {
            return visitor.visitFunExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunExprContext = FunExprContext;
var AtomOrVarContext = /** @class */ (function (_super) {
    __extends(AtomOrVarContext, _super);
    function AtomOrVarContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtomOrVarContext.prototype.tokAtom = function () {
        return this.tryGetRuleContext(0, TokAtomContext);
    };
    AtomOrVarContext.prototype.tokVar = function () {
        return this.tryGetRuleContext(0, TokVarContext);
    };
    Object.defineProperty(AtomOrVarContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_atomOrVar; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AtomOrVarContext.prototype.enterRule = function (listener) {
        if (listener.enterAtomOrVar) {
            listener.enterAtomOrVar(this);
        }
    };
    // @Override
    AtomOrVarContext.prototype.exitRule = function (listener) {
        if (listener.exitAtomOrVar) {
            listener.exitAtomOrVar(this);
        }
    };
    // @Override
    AtomOrVarContext.prototype.accept = function (visitor) {
        if (visitor.visitAtomOrVar) {
            return visitor.visitAtomOrVar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtomOrVarContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AtomOrVarContext = AtomOrVarContext;
var IntegerOrVarContext = /** @class */ (function (_super) {
    __extends(IntegerOrVarContext, _super);
    function IntegerOrVarContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntegerOrVarContext.prototype.tokInteger = function () {
        return this.tryGetRuleContext(0, TokIntegerContext);
    };
    IntegerOrVarContext.prototype.tokVar = function () {
        return this.tryGetRuleContext(0, TokVarContext);
    };
    Object.defineProperty(IntegerOrVarContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_integerOrVar; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IntegerOrVarContext.prototype.enterRule = function (listener) {
        if (listener.enterIntegerOrVar) {
            listener.enterIntegerOrVar(this);
        }
    };
    // @Override
    IntegerOrVarContext.prototype.exitRule = function (listener) {
        if (listener.exitIntegerOrVar) {
            listener.exitIntegerOrVar(this);
        }
    };
    // @Override
    IntegerOrVarContext.prototype.accept = function (visitor) {
        if (visitor.visitIntegerOrVar) {
            return visitor.visitIntegerOrVar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IntegerOrVarContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IntegerOrVarContext = IntegerOrVarContext;
var FunClausesContext = /** @class */ (function (_super) {
    __extends(FunClausesContext, _super);
    function FunClausesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunClausesContext.prototype.funClause = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FunClauseContext);
        }
        else {
            return this.getRuleContext(i, FunClauseContext);
        }
    };
    Object.defineProperty(FunClausesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_funClauses; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunClausesContext.prototype.enterRule = function (listener) {
        if (listener.enterFunClauses) {
            listener.enterFunClauses(this);
        }
    };
    // @Override
    FunClausesContext.prototype.exitRule = function (listener) {
        if (listener.exitFunClauses) {
            listener.exitFunClauses(this);
        }
    };
    // @Override
    FunClausesContext.prototype.accept = function (visitor) {
        if (visitor.visitFunClauses) {
            return visitor.visitFunClauses(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunClausesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunClausesContext = FunClausesContext;
var FunClauseContext = /** @class */ (function (_super) {
    __extends(FunClauseContext, _super);
    function FunClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunClauseContext.prototype.argumentList = function () {
        return this.getRuleContext(0, ArgumentListContext);
    };
    FunClauseContext.prototype.clauseGuard = function () {
        return this.getRuleContext(0, ClauseGuardContext);
    };
    FunClauseContext.prototype.clauseBody = function () {
        return this.getRuleContext(0, ClauseBodyContext);
    };
    Object.defineProperty(FunClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_funClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterFunClause) {
            listener.enterFunClause(this);
        }
    };
    // @Override
    FunClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitFunClause) {
            listener.exitFunClause(this);
        }
    };
    // @Override
    FunClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitFunClause) {
            return visitor.visitFunClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunClauseContext = FunClauseContext;
var TryExprContext = /** @class */ (function (_super) {
    __extends(TryExprContext, _super);
    function TryExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TryExprContext.prototype.exprs = function () {
        return this.getRuleContext(0, ExprsContext);
    };
    TryExprContext.prototype.tryCatch = function () {
        return this.getRuleContext(0, TryCatchContext);
    };
    TryExprContext.prototype.crClauses = function () {
        return this.tryGetRuleContext(0, CrClausesContext);
    };
    Object.defineProperty(TryExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_tryExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TryExprContext.prototype.enterRule = function (listener) {
        if (listener.enterTryExpr) {
            listener.enterTryExpr(this);
        }
    };
    // @Override
    TryExprContext.prototype.exitRule = function (listener) {
        if (listener.exitTryExpr) {
            listener.exitTryExpr(this);
        }
    };
    // @Override
    TryExprContext.prototype.accept = function (visitor) {
        if (visitor.visitTryExpr) {
            return visitor.visitTryExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TryExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TryExprContext = TryExprContext;
var TryCatchContext = /** @class */ (function (_super) {
    __extends(TryCatchContext, _super);
    function TryCatchContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TryCatchContext.prototype.tryClauses = function () {
        return this.tryGetRuleContext(0, TryClausesContext);
    };
    TryCatchContext.prototype.exprs = function () {
        return this.tryGetRuleContext(0, ExprsContext);
    };
    Object.defineProperty(TryCatchContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_tryCatch; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TryCatchContext.prototype.enterRule = function (listener) {
        if (listener.enterTryCatch) {
            listener.enterTryCatch(this);
        }
    };
    // @Override
    TryCatchContext.prototype.exitRule = function (listener) {
        if (listener.exitTryCatch) {
            listener.exitTryCatch(this);
        }
    };
    // @Override
    TryCatchContext.prototype.accept = function (visitor) {
        if (visitor.visitTryCatch) {
            return visitor.visitTryCatch(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TryCatchContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TryCatchContext = TryCatchContext;
var TryClausesContext = /** @class */ (function (_super) {
    __extends(TryClausesContext, _super);
    function TryClausesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TryClausesContext.prototype.tryClause = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TryClauseContext);
        }
        else {
            return this.getRuleContext(i, TryClauseContext);
        }
    };
    Object.defineProperty(TryClausesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_tryClauses; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TryClausesContext.prototype.enterRule = function (listener) {
        if (listener.enterTryClauses) {
            listener.enterTryClauses(this);
        }
    };
    // @Override
    TryClausesContext.prototype.exitRule = function (listener) {
        if (listener.exitTryClauses) {
            listener.exitTryClauses(this);
        }
    };
    // @Override
    TryClausesContext.prototype.accept = function (visitor) {
        if (visitor.visitTryClauses) {
            return visitor.visitTryClauses(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TryClausesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TryClausesContext = TryClausesContext;
var TryClauseContext = /** @class */ (function (_super) {
    __extends(TryClauseContext, _super);
    function TryClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TryClauseContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    TryClauseContext.prototype.clauseGuard = function () {
        return this.getRuleContext(0, ClauseGuardContext);
    };
    TryClauseContext.prototype.clauseBody = function () {
        return this.getRuleContext(0, ClauseBodyContext);
    };
    TryClauseContext.prototype.atomOrVar = function () {
        return this.tryGetRuleContext(0, AtomOrVarContext);
    };
    Object.defineProperty(TryClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_tryClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TryClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterTryClause) {
            listener.enterTryClause(this);
        }
    };
    // @Override
    TryClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitTryClause) {
            listener.exitTryClause(this);
        }
    };
    // @Override
    TryClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitTryClause) {
            return visitor.visitTryClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TryClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TryClauseContext = TryClauseContext;
var ArgumentListContext = /** @class */ (function (_super) {
    __extends(ArgumentListContext, _super);
    function ArgumentListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentListContext.prototype.exprs = function () {
        return this.tryGetRuleContext(0, ExprsContext);
    };
    Object.defineProperty(ArgumentListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_argumentList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArgumentListContext.prototype.enterRule = function (listener) {
        if (listener.enterArgumentList) {
            listener.enterArgumentList(this);
        }
    };
    // @Override
    ArgumentListContext.prototype.exitRule = function (listener) {
        if (listener.exitArgumentList) {
            listener.exitArgumentList(this);
        }
    };
    // @Override
    ArgumentListContext.prototype.accept = function (visitor) {
        if (visitor.visitArgumentList) {
            return visitor.visitArgumentList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgumentListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgumentListContext = ArgumentListContext;
var ExprsContext = /** @class */ (function (_super) {
    __extends(ExprsContext, _super);
    function ExprsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExprsContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    Object.defineProperty(ExprsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_exprs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExprsContext.prototype.enterRule = function (listener) {
        if (listener.enterExprs) {
            listener.enterExprs(this);
        }
    };
    // @Override
    ExprsContext.prototype.exitRule = function (listener) {
        if (listener.exitExprs) {
            listener.exitExprs(this);
        }
    };
    // @Override
    ExprsContext.prototype.accept = function (visitor) {
        if (visitor.visitExprs) {
            return visitor.visitExprs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExprsContext = ExprsContext;
var GuardContext = /** @class */ (function (_super) {
    __extends(GuardContext, _super);
    function GuardContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GuardContext.prototype.exprs = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprsContext);
        }
        else {
            return this.getRuleContext(i, ExprsContext);
        }
    };
    Object.defineProperty(GuardContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_guard; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GuardContext.prototype.enterRule = function (listener) {
        if (listener.enterGuard) {
            listener.enterGuard(this);
        }
    };
    // @Override
    GuardContext.prototype.exitRule = function (listener) {
        if (listener.exitGuard) {
            listener.exitGuard(this);
        }
    };
    // @Override
    GuardContext.prototype.accept = function (visitor) {
        if (visitor.visitGuard) {
            return visitor.visitGuard(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GuardContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GuardContext = GuardContext;
var AtomicContext = /** @class */ (function (_super) {
    __extends(AtomicContext, _super);
    function AtomicContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtomicContext.prototype.tokChar = function () {
        return this.tryGetRuleContext(0, TokCharContext);
    };
    AtomicContext.prototype.tokInteger = function () {
        return this.tryGetRuleContext(0, TokIntegerContext);
    };
    AtomicContext.prototype.tokFloat = function () {
        return this.tryGetRuleContext(0, TokFloatContext);
    };
    AtomicContext.prototype.tokAtom = function () {
        return this.tryGetRuleContext(0, TokAtomContext);
    };
    AtomicContext.prototype.tokString = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TokStringContext);
        }
        else {
            return this.getRuleContext(i, TokStringContext);
        }
    };
    Object.defineProperty(AtomicContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_atomic; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AtomicContext.prototype.enterRule = function (listener) {
        if (listener.enterAtomic) {
            listener.enterAtomic(this);
        }
    };
    // @Override
    AtomicContext.prototype.exitRule = function (listener) {
        if (listener.exitAtomic) {
            listener.exitAtomic(this);
        }
    };
    // @Override
    AtomicContext.prototype.accept = function (visitor) {
        if (visitor.visitAtomic) {
            return visitor.visitAtomic(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtomicContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AtomicContext = AtomicContext;
var PrefixOpContext = /** @class */ (function (_super) {
    __extends(PrefixOpContext, _super);
    function PrefixOpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(PrefixOpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_prefixOp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrefixOpContext.prototype.enterRule = function (listener) {
        if (listener.enterPrefixOp) {
            listener.enterPrefixOp(this);
        }
    };
    // @Override
    PrefixOpContext.prototype.exitRule = function (listener) {
        if (listener.exitPrefixOp) {
            listener.exitPrefixOp(this);
        }
    };
    // @Override
    PrefixOpContext.prototype.accept = function (visitor) {
        if (visitor.visitPrefixOp) {
            return visitor.visitPrefixOp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrefixOpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrefixOpContext = PrefixOpContext;
var MultOpContext = /** @class */ (function (_super) {
    __extends(MultOpContext, _super);
    function MultOpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(MultOpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_multOp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MultOpContext.prototype.enterRule = function (listener) {
        if (listener.enterMultOp) {
            listener.enterMultOp(this);
        }
    };
    // @Override
    MultOpContext.prototype.exitRule = function (listener) {
        if (listener.exitMultOp) {
            listener.exitMultOp(this);
        }
    };
    // @Override
    MultOpContext.prototype.accept = function (visitor) {
        if (visitor.visitMultOp) {
            return visitor.visitMultOp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultOpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MultOpContext = MultOpContext;
var AddOpContext = /** @class */ (function (_super) {
    __extends(AddOpContext, _super);
    function AddOpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(AddOpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_addOp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AddOpContext.prototype.enterRule = function (listener) {
        if (listener.enterAddOp) {
            listener.enterAddOp(this);
        }
    };
    // @Override
    AddOpContext.prototype.exitRule = function (listener) {
        if (listener.exitAddOp) {
            listener.exitAddOp(this);
        }
    };
    // @Override
    AddOpContext.prototype.accept = function (visitor) {
        if (visitor.visitAddOp) {
            return visitor.visitAddOp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AddOpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AddOpContext = AddOpContext;
var ListOpContext = /** @class */ (function (_super) {
    __extends(ListOpContext, _super);
    function ListOpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ListOpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_listOp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ListOpContext.prototype.enterRule = function (listener) {
        if (listener.enterListOp) {
            listener.enterListOp(this);
        }
    };
    // @Override
    ListOpContext.prototype.exitRule = function (listener) {
        if (listener.exitListOp) {
            listener.exitListOp(this);
        }
    };
    // @Override
    ListOpContext.prototype.accept = function (visitor) {
        if (visitor.visitListOp) {
            return visitor.visitListOp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ListOpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ListOpContext = ListOpContext;
var CompOpContext = /** @class */ (function (_super) {
    __extends(CompOpContext, _super);
    function CompOpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(CompOpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_compOp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CompOpContext.prototype.enterRule = function (listener) {
        if (listener.enterCompOp) {
            listener.enterCompOp(this);
        }
    };
    // @Override
    CompOpContext.prototype.exitRule = function (listener) {
        if (listener.exitCompOp) {
            listener.exitCompOp(this);
        }
    };
    // @Override
    CompOpContext.prototype.accept = function (visitor) {
        if (visitor.visitCompOp) {
            return visitor.visitCompOp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CompOpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CompOpContext = CompOpContext;
var RuleClausesContext = /** @class */ (function (_super) {
    __extends(RuleClausesContext, _super);
    function RuleClausesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RuleClausesContext.prototype.ruleClause = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RuleClauseContext);
        }
        else {
            return this.getRuleContext(i, RuleClauseContext);
        }
    };
    Object.defineProperty(RuleClausesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_ruleClauses; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RuleClausesContext.prototype.enterRule = function (listener) {
        if (listener.enterRuleClauses) {
            listener.enterRuleClauses(this);
        }
    };
    // @Override
    RuleClausesContext.prototype.exitRule = function (listener) {
        if (listener.exitRuleClauses) {
            listener.exitRuleClauses(this);
        }
    };
    // @Override
    RuleClausesContext.prototype.accept = function (visitor) {
        if (visitor.visitRuleClauses) {
            return visitor.visitRuleClauses(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RuleClausesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RuleClausesContext = RuleClausesContext;
var RuleClauseContext = /** @class */ (function (_super) {
    __extends(RuleClauseContext, _super);
    function RuleClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RuleClauseContext.prototype.tokAtom = function () {
        return this.getRuleContext(0, TokAtomContext);
    };
    RuleClauseContext.prototype.clauseArgs = function () {
        return this.getRuleContext(0, ClauseArgsContext);
    };
    RuleClauseContext.prototype.clauseGuard = function () {
        return this.getRuleContext(0, ClauseGuardContext);
    };
    RuleClauseContext.prototype.ruleBody = function () {
        return this.getRuleContext(0, RuleBodyContext);
    };
    Object.defineProperty(RuleClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_ruleClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RuleClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterRuleClause) {
            listener.enterRuleClause(this);
        }
    };
    // @Override
    RuleClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitRuleClause) {
            listener.exitRuleClause(this);
        }
    };
    // @Override
    RuleClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitRuleClause) {
            return visitor.visitRuleClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RuleClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RuleClauseContext = RuleClauseContext;
var RuleBodyContext = /** @class */ (function (_super) {
    __extends(RuleBodyContext, _super);
    function RuleBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RuleBodyContext.prototype.lcExprs = function () {
        return this.getRuleContext(0, LcExprsContext);
    };
    Object.defineProperty(RuleBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ErlangParser.RULE_ruleBody; },
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
