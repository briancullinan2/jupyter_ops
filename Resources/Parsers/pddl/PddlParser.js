"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/pddl/Pddl.g4 by ANTLR 4.7.3-SNAPSHOT
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
var PddlParser = /** @class */ (function (_super) {
    __extends(PddlParser, _super);
    function PddlParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(PddlParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(PddlParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return PddlParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PddlParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "Pddl.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PddlParser.prototype, "ruleNames", {
        // @Override
        get: function () { return PddlParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PddlParser.prototype, "serializedATN", {
        // @Override
        get: function () { return PddlParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    PddlParser.prototype.pddlDoc = function () {
        var _localctx = new PddlDocContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, PddlParser.RULE_pddlDoc);
        try {
            this.state = 142;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 140;
                        this.domain();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 141;
                        this.problem();
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
    PddlParser.prototype.domain = function () {
        var _localctx = new DomainContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, PddlParser.RULE_domain);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 144;
                this.match(PddlParser.T__0);
                this.state = 145;
                this.match(PddlParser.T__1);
                this.state = 146;
                this.domainName();
                this.state = 148;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                    case 1:
                        {
                            this.state = 147;
                            this.requireDef();
                        }
                        break;
                }
                this.state = 151;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                    case 1:
                        {
                            this.state = 150;
                            this.typesDef();
                        }
                        break;
                }
                this.state = 154;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                    case 1:
                        {
                            this.state = 153;
                            this.constantsDef();
                        }
                        break;
                }
                this.state = 157;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                    case 1:
                        {
                            this.state = 156;
                            this.predicatesDef();
                        }
                        break;
                }
                this.state = 160;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                    case 1:
                        {
                            this.state = 159;
                            this.functionsDef();
                        }
                        break;
                }
                this.state = 163;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                    case 1:
                        {
                            this.state = 162;
                            this.constraints();
                        }
                        break;
                }
                this.state = 168;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PddlParser.T__0) {
                    {
                        {
                            this.state = 165;
                            this.structureDef();
                        }
                    }
                    this.state = 170;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 171;
                this.match(PddlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.domainName = function () {
        var _localctx = new DomainNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, PddlParser.RULE_domainName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 173;
                this.match(PddlParser.T__0);
                this.state = 174;
                this.match(PddlParser.T__3);
                this.state = 175;
                this.match(PddlParser.NAME);
                this.state = 176;
                this.match(PddlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.requireDef = function () {
        var _localctx = new RequireDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, PddlParser.RULE_requireDef);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 178;
                this.match(PddlParser.T__0);
                this.state = 179;
                this.match(PddlParser.T__4);
                this.state = 181;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 180;
                            this.match(PddlParser.REQUIRE_KEY);
                        }
                    }
                    this.state = 183;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === PddlParser.REQUIRE_KEY);
                this.state = 185;
                this.match(PddlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.typesDef = function () {
        var _localctx = new TypesDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, PddlParser.RULE_typesDef);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 187;
                this.match(PddlParser.T__0);
                this.state = 188;
                this.match(PddlParser.T__5);
                this.state = 189;
                this.typedNameList();
                this.state = 190;
                this.match(PddlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.typedNameList = function () {
        var _localctx = new TypedNameListContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, PddlParser.RULE_typedNameList);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 209;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                    case 1:
                        {
                            this.state = 195;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === PddlParser.NAME) {
                                {
                                    {
                                        this.state = 192;
                                        this.match(PddlParser.NAME);
                                    }
                                }
                                this.state = 197;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 199;
                            this._errHandler.sync(this);
                            _alt = 1;
                            do {
                                switch (_alt) {
                                    case 1:
                                        {
                                            {
                                                this.state = 198;
                                                this.singleTypeNameList();
                                            }
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                                this.state = 201;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                            } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                            this.state = 206;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === PddlParser.NAME) {
                                {
                                    {
                                        this.state = 203;
                                        this.match(PddlParser.NAME);
                                    }
                                }
                                this.state = 208;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
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
    PddlParser.prototype.singleTypeNameList = function () {
        var _localctx = new SingleTypeNameListContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, PddlParser.RULE_singleTypeNameList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 212;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 211;
                                this.match(PddlParser.NAME);
                            }
                        }
                        this.state = 214;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === PddlParser.NAME);
                    this.state = 216;
                    this.match(PddlParser.T__6);
                    this.state = 217;
                    _localctx._t = this.type();
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
    PddlParser.prototype.type = function () {
        var _localctx = new TypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, PddlParser.RULE_type);
        var _la;
        try {
            this.state = 229;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PddlParser.T__0:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 219;
                            this.match(PddlParser.T__0);
                            this.state = 220;
                            this.match(PddlParser.T__7);
                            this.state = 222;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 221;
                                        this.primType();
                                    }
                                }
                                this.state = 224;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === PddlParser.NAME);
                            this.state = 226;
                            this.match(PddlParser.T__2);
                        }
                    }
                    break;
                case PddlParser.NAME:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 228;
                        this.primType();
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
    PddlParser.prototype.primType = function () {
        var _localctx = new PrimTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, PddlParser.RULE_primType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 231;
                this.match(PddlParser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.functionsDef = function () {
        var _localctx = new FunctionsDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, PddlParser.RULE_functionsDef);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 233;
                this.match(PddlParser.T__0);
                this.state = 234;
                this.match(PddlParser.T__8);
                this.state = 235;
                this.functionList();
                this.state = 236;
                this.match(PddlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.functionList = function () {
        var _localctx = new FunctionListContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, PddlParser.RULE_functionList);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 249;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PddlParser.T__0) {
                    {
                        {
                            this.state = 239;
                            this._errHandler.sync(this);
                            _alt = 1;
                            do {
                                switch (_alt) {
                                    case 1:
                                        {
                                            {
                                                this.state = 238;
                                                this.atomicFunctionSkeleton();
                                            }
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                                this.state = 241;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                            } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                            this.state = 245;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === PddlParser.T__6) {
                                {
                                    this.state = 243;
                                    this.match(PddlParser.T__6);
                                    this.state = 244;
                                    this.functionType();
                                }
                            }
                        }
                    }
                    this.state = 251;
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
    PddlParser.prototype.atomicFunctionSkeleton = function () {
        var _localctx = new AtomicFunctionSkeletonContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, PddlParser.RULE_atomicFunctionSkeleton);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 252;
                this.match(PddlParser.T__0);
                this.state = 253;
                this.functionSymbol();
                this.state = 254;
                this.typedVariableList();
                this.state = 255;
                this.match(PddlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.functionSymbol = function () {
        var _localctx = new FunctionSymbolContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, PddlParser.RULE_functionSymbol);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 257;
                this.match(PddlParser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.functionType = function () {
        var _localctx = new FunctionTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, PddlParser.RULE_functionType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 259;
                this.match(PddlParser.T__9);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.constantsDef = function () {
        var _localctx = new ConstantsDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, PddlParser.RULE_constantsDef);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 261;
                this.match(PddlParser.T__0);
                this.state = 262;
                this.match(PddlParser.T__10);
                this.state = 263;
                this.typedNameList();
                this.state = 264;
                this.match(PddlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.predicatesDef = function () {
        var _localctx = new PredicatesDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, PddlParser.RULE_predicatesDef);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 266;
                this.match(PddlParser.T__0);
                this.state = 267;
                this.match(PddlParser.T__11);
                this.state = 269;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 268;
                            this.atomicFormulaSkeleton();
                        }
                    }
                    this.state = 271;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === PddlParser.T__0);
                this.state = 273;
                this.match(PddlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.atomicFormulaSkeleton = function () {
        var _localctx = new AtomicFormulaSkeletonContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, PddlParser.RULE_atomicFormulaSkeleton);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 275;
                this.match(PddlParser.T__0);
                this.state = 276;
                this.predicate();
                this.state = 277;
                this.typedVariableList();
                this.state = 278;
                this.match(PddlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.predicate = function () {
        var _localctx = new PredicateContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, PddlParser.RULE_predicate);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 280;
                this.match(PddlParser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.typedVariableList = function () {
        var _localctx = new TypedVariableListContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, PddlParser.RULE_typedVariableList);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 299;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 23, this._ctx)) {
                    case 1:
                        {
                            this.state = 285;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === PddlParser.VARIABLE) {
                                {
                                    {
                                        this.state = 282;
                                        this.match(PddlParser.VARIABLE);
                                    }
                                }
                                this.state = 287;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 289;
                            this._errHandler.sync(this);
                            _alt = 1;
                            do {
                                switch (_alt) {
                                    case 1:
                                        {
                                            {
                                                this.state = 288;
                                                this.singleTypeVarList();
                                            }
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                                this.state = 291;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                            } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                            this.state = 296;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === PddlParser.VARIABLE) {
                                {
                                    {
                                        this.state = 293;
                                        this.match(PddlParser.VARIABLE);
                                    }
                                }
                                this.state = 298;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
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
    PddlParser.prototype.singleTypeVarList = function () {
        var _localctx = new SingleTypeVarListContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, PddlParser.RULE_singleTypeVarList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 302;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 301;
                                this.match(PddlParser.VARIABLE);
                            }
                        }
                        this.state = 304;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === PddlParser.VARIABLE);
                    this.state = 306;
                    this.match(PddlParser.T__6);
                    this.state = 307;
                    _localctx._t = this.type();
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
    PddlParser.prototype.constraints = function () {
        var _localctx = new ConstraintsContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, PddlParser.RULE_constraints);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 309;
                this.match(PddlParser.T__0);
                this.state = 310;
                this.match(PddlParser.T__12);
                this.state = 311;
                this.conGD();
                this.state = 312;
                this.match(PddlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.structureDef = function () {
        var _localctx = new StructureDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, PddlParser.RULE_structureDef);
        try {
            this.state = 317;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 25, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 314;
                        this.actionDef();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 315;
                        this.durativeActionDef();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 316;
                        this.derivedDef();
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
    PddlParser.prototype.actionDef = function () {
        var _localctx = new ActionDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, PddlParser.RULE_actionDef);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 319;
                this.match(PddlParser.T__0);
                this.state = 320;
                this.match(PddlParser.T__13);
                this.state = 321;
                this.actionSymbol();
                this.state = 322;
                this.match(PddlParser.T__14);
                this.state = 323;
                this.match(PddlParser.T__0);
                this.state = 324;
                this.typedVariableList();
                this.state = 325;
                this.match(PddlParser.T__2);
                this.state = 326;
                this.actionDefBody();
                this.state = 327;
                this.match(PddlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.actionSymbol = function () {
        var _localctx = new ActionSymbolContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, PddlParser.RULE_actionSymbol);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 329;
                this.match(PddlParser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.actionDefBody = function () {
        var _localctx = new ActionDefBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, PddlParser.RULE_actionDefBody);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 337;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PddlParser.T__15) {
                    {
                        this.state = 331;
                        this.match(PddlParser.T__15);
                        this.state = 335;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
                            case 1:
                                {
                                    {
                                        this.state = 332;
                                        this.match(PddlParser.T__0);
                                        this.state = 333;
                                        this.match(PddlParser.T__2);
                                    }
                                }
                                break;
                            case 2:
                                {
                                    this.state = 334;
                                    this.goalDesc();
                                }
                                break;
                        }
                    }
                }
                this.state = 345;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PddlParser.T__16) {
                    {
                        this.state = 339;
                        this.match(PddlParser.T__16);
                        this.state = 343;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                            case 1:
                                {
                                    {
                                        this.state = 340;
                                        this.match(PddlParser.T__0);
                                        this.state = 341;
                                        this.match(PddlParser.T__2);
                                    }
                                }
                                break;
                            case 2:
                                {
                                    this.state = 342;
                                    this.effect();
                                }
                                break;
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
    PddlParser.prototype.goalDesc = function () {
        var _localctx = new GoalDescContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, PddlParser.RULE_goalDesc);
        var _la;
        try {
            this.state = 394;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 347;
                        this.atomicTermFormula();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 348;
                        this.match(PddlParser.T__0);
                        this.state = 349;
                        this.match(PddlParser.T__17);
                        this.state = 353;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === PddlParser.T__0) {
                            {
                                {
                                    this.state = 350;
                                    this.goalDesc();
                                }
                            }
                            this.state = 355;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 356;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 357;
                        this.match(PddlParser.T__0);
                        this.state = 358;
                        this.match(PddlParser.T__18);
                        this.state = 362;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === PddlParser.T__0) {
                            {
                                {
                                    this.state = 359;
                                    this.goalDesc();
                                }
                            }
                            this.state = 364;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 365;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 366;
                        this.match(PddlParser.T__0);
                        this.state = 367;
                        this.match(PddlParser.T__19);
                        this.state = 368;
                        this.goalDesc();
                        this.state = 369;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 371;
                        this.match(PddlParser.T__0);
                        this.state = 372;
                        this.match(PddlParser.T__20);
                        this.state = 373;
                        this.goalDesc();
                        this.state = 374;
                        this.goalDesc();
                        this.state = 375;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 377;
                        this.match(PddlParser.T__0);
                        this.state = 378;
                        this.match(PddlParser.T__21);
                        this.state = 379;
                        this.match(PddlParser.T__0);
                        this.state = 380;
                        this.typedVariableList();
                        this.state = 381;
                        this.match(PddlParser.T__2);
                        this.state = 382;
                        this.goalDesc();
                        this.state = 383;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 385;
                        this.match(PddlParser.T__0);
                        this.state = 386;
                        this.match(PddlParser.T__22);
                        this.state = 387;
                        this.match(PddlParser.T__0);
                        this.state = 388;
                        this.typedVariableList();
                        this.state = 389;
                        this.match(PddlParser.T__2);
                        this.state = 390;
                        this.goalDesc();
                        this.state = 391;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 393;
                        this.fComp();
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
    PddlParser.prototype.fComp = function () {
        var _localctx = new FCompContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, PddlParser.RULE_fComp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 396;
                this.match(PddlParser.T__0);
                this.state = 397;
                this.binaryComp();
                this.state = 398;
                this.fExp();
                this.state = 399;
                this.fExp();
                this.state = 400;
                this.match(PddlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.atomicTermFormula = function () {
        var _localctx = new AtomicTermFormulaContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, PddlParser.RULE_atomicTermFormula);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 402;
                this.match(PddlParser.T__0);
                this.state = 403;
                this.predicate();
                this.state = 407;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PddlParser.NAME || _la === PddlParser.VARIABLE) {
                    {
                        {
                            this.state = 404;
                            this.term();
                        }
                    }
                    this.state = 409;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 410;
                this.match(PddlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.term = function () {
        var _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, PddlParser.RULE_term);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 412;
                _la = this._input.LA(1);
                if (!(_la === PddlParser.NAME || _la === PddlParser.VARIABLE)) {
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
    PddlParser.prototype.durativeActionDef = function () {
        var _localctx = new DurativeActionDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, PddlParser.RULE_durativeActionDef);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 414;
                this.match(PddlParser.T__0);
                this.state = 415;
                this.match(PddlParser.T__23);
                this.state = 416;
                this.actionSymbol();
                this.state = 417;
                this.match(PddlParser.T__14);
                this.state = 418;
                this.match(PddlParser.T__0);
                this.state = 419;
                this.typedVariableList();
                this.state = 420;
                this.match(PddlParser.T__2);
                this.state = 421;
                this.daDefBody();
                this.state = 422;
                this.match(PddlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.daDefBody = function () {
        var _localctx = new DaDefBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, PddlParser.RULE_daDefBody);
        try {
            this.state = 438;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PddlParser.T__24:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 424;
                        this.match(PddlParser.T__24);
                        this.state = 425;
                        this.durationConstraint();
                    }
                    break;
                case PddlParser.T__25:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 426;
                        this.match(PddlParser.T__25);
                        this.state = 430;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
                            case 1:
                                {
                                    {
                                        this.state = 427;
                                        this.match(PddlParser.T__0);
                                        this.state = 428;
                                        this.match(PddlParser.T__2);
                                    }
                                }
                                break;
                            case 2:
                                {
                                    this.state = 429;
                                    this.daGD();
                                }
                                break;
                        }
                    }
                    break;
                case PddlParser.T__16:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 432;
                        this.match(PddlParser.T__16);
                        this.state = 436;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
                            case 1:
                                {
                                    {
                                        this.state = 433;
                                        this.match(PddlParser.T__0);
                                        this.state = 434;
                                        this.match(PddlParser.T__2);
                                    }
                                }
                                break;
                            case 2:
                                {
                                    this.state = 435;
                                    this.daEffect();
                                }
                                break;
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
    PddlParser.prototype.daGD = function () {
        var _localctx = new DaGDContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, PddlParser.RULE_daGD);
        var _la;
        try {
            this.state = 458;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 440;
                        this.prefTimedGD();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 441;
                        this.match(PddlParser.T__0);
                        this.state = 442;
                        this.match(PddlParser.T__17);
                        this.state = 446;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === PddlParser.T__0) {
                            {
                                {
                                    this.state = 443;
                                    this.daGD();
                                }
                            }
                            this.state = 448;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 449;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 450;
                        this.match(PddlParser.T__0);
                        this.state = 451;
                        this.match(PddlParser.T__22);
                        this.state = 452;
                        this.match(PddlParser.T__0);
                        this.state = 453;
                        this.typedVariableList();
                        this.state = 454;
                        this.match(PddlParser.T__2);
                        this.state = 455;
                        this.daGD();
                        this.state = 456;
                        this.match(PddlParser.T__2);
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
    PddlParser.prototype.prefTimedGD = function () {
        var _localctx = new PrefTimedGDContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, PddlParser.RULE_prefTimedGD);
        var _la;
        try {
            this.state = 469;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 460;
                        this.timedGD();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 461;
                        this.match(PddlParser.T__0);
                        this.state = 462;
                        this.match(PddlParser.T__26);
                        this.state = 464;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PddlParser.NAME) {
                            {
                                this.state = 463;
                                this.match(PddlParser.NAME);
                            }
                        }
                        this.state = 466;
                        this.timedGD();
                        this.state = 467;
                        this.match(PddlParser.T__2);
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
    PddlParser.prototype.timedGD = function () {
        var _localctx = new TimedGDContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, PddlParser.RULE_timedGD);
        try {
            this.state = 483;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 41, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 471;
                        this.match(PddlParser.T__0);
                        this.state = 472;
                        this.match(PddlParser.T__27);
                        this.state = 473;
                        this.timeSpecifier();
                        this.state = 474;
                        this.goalDesc();
                        this.state = 475;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 477;
                        this.match(PddlParser.T__0);
                        this.state = 478;
                        this.match(PddlParser.T__28);
                        this.state = 479;
                        this.interval();
                        this.state = 480;
                        this.goalDesc();
                        this.state = 481;
                        this.match(PddlParser.T__2);
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
    PddlParser.prototype.timeSpecifier = function () {
        var _localctx = new TimeSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, PddlParser.RULE_timeSpecifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 485;
                _la = this._input.LA(1);
                if (!(_la === PddlParser.T__29 || _la === PddlParser.T__30)) {
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
    PddlParser.prototype.interval = function () {
        var _localctx = new IntervalContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, PddlParser.RULE_interval);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 487;
                this.match(PddlParser.T__31);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.derivedDef = function () {
        var _localctx = new DerivedDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, PddlParser.RULE_derivedDef);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 489;
                this.match(PddlParser.T__0);
                this.state = 490;
                this.match(PddlParser.T__32);
                this.state = 491;
                this.typedVariableList();
                this.state = 492;
                this.goalDesc();
                this.state = 493;
                this.match(PddlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.fExp = function () {
        var _localctx = new FExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, PddlParser.RULE_fExp);
        try {
            this.state = 508;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 495;
                        this.match(PddlParser.NUMBER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 496;
                        this.match(PddlParser.T__0);
                        this.state = 497;
                        this.binaryOp();
                        this.state = 498;
                        this.fExp();
                        this.state = 499;
                        this.fExp2();
                        this.state = 500;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 502;
                        this.match(PddlParser.T__0);
                        this.state = 503;
                        this.match(PddlParser.T__6);
                        this.state = 504;
                        this.fExp();
                        this.state = 505;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 507;
                        this.fHead();
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
    PddlParser.prototype.fExp2 = function () {
        var _localctx = new FExp2Context(this._ctx, this.state);
        this.enterRule(_localctx, 76, PddlParser.RULE_fExp2);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 510;
                this.fExp();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.fHead = function () {
        var _localctx = new FHeadContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, PddlParser.RULE_fHead);
        var _la;
        try {
            this.state = 523;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PddlParser.T__0:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 512;
                        this.match(PddlParser.T__0);
                        this.state = 513;
                        this.functionSymbol();
                        this.state = 517;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === PddlParser.NAME || _la === PddlParser.VARIABLE) {
                            {
                                {
                                    this.state = 514;
                                    this.term();
                                }
                            }
                            this.state = 519;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 520;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case PddlParser.NAME:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 522;
                        this.functionSymbol();
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
    PddlParser.prototype.effect = function () {
        var _localctx = new EffectContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, PddlParser.RULE_effect);
        var _la;
        try {
            this.state = 535;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 46, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 525;
                        this.match(PddlParser.T__0);
                        this.state = 526;
                        this.match(PddlParser.T__17);
                        this.state = 530;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === PddlParser.T__0) {
                            {
                                {
                                    this.state = 527;
                                    this.cEffect();
                                }
                            }
                            this.state = 532;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 533;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 534;
                        this.cEffect();
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
    PddlParser.prototype.cEffect = function () {
        var _localctx = new CEffectContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, PddlParser.RULE_cEffect);
        try {
            this.state = 552;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 47, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 537;
                        this.match(PddlParser.T__0);
                        this.state = 538;
                        this.match(PddlParser.T__22);
                        this.state = 539;
                        this.match(PddlParser.T__0);
                        this.state = 540;
                        this.typedVariableList();
                        this.state = 541;
                        this.match(PddlParser.T__2);
                        this.state = 542;
                        this.effect();
                        this.state = 543;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 545;
                        this.match(PddlParser.T__0);
                        this.state = 546;
                        this.match(PddlParser.T__33);
                        this.state = 547;
                        this.goalDesc();
                        this.state = 548;
                        this.condEffect();
                        this.state = 549;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 551;
                        this.pEffect();
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
    PddlParser.prototype.pEffect = function () {
        var _localctx = new PEffectContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, PddlParser.RULE_pEffect);
        try {
            this.state = 566;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 48, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 554;
                        this.match(PddlParser.T__0);
                        this.state = 555;
                        this.assignOp();
                        this.state = 556;
                        this.fHead();
                        this.state = 557;
                        this.fExp();
                        this.state = 558;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 560;
                        this.match(PddlParser.T__0);
                        this.state = 561;
                        this.match(PddlParser.T__19);
                        this.state = 562;
                        this.atomicTermFormula();
                        this.state = 563;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 565;
                        this.atomicTermFormula();
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
    PddlParser.prototype.condEffect = function () {
        var _localctx = new CondEffectContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, PddlParser.RULE_condEffect);
        var _la;
        try {
            this.state = 578;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 568;
                        this.match(PddlParser.T__0);
                        this.state = 569;
                        this.match(PddlParser.T__17);
                        this.state = 573;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === PddlParser.T__0) {
                            {
                                {
                                    this.state = 570;
                                    this.pEffect();
                                }
                            }
                            this.state = 575;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 576;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 577;
                        this.pEffect();
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
    PddlParser.prototype.binaryOp = function () {
        var _localctx = new BinaryOpContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, PddlParser.RULE_binaryOp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 580;
                _la = this._input.LA(1);
                if (!(((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (PddlParser.T__6 - 7)) | (1 << (PddlParser.T__34 - 7)) | (1 << (PddlParser.T__35 - 7)) | (1 << (PddlParser.T__36 - 7)))) !== 0))) {
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
    PddlParser.prototype.binaryComp = function () {
        var _localctx = new BinaryCompContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, PddlParser.RULE_binaryComp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 582;
                _la = this._input.LA(1);
                if (!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (PddlParser.T__37 - 38)) | (1 << (PddlParser.T__38 - 38)) | (1 << (PddlParser.T__39 - 38)) | (1 << (PddlParser.T__40 - 38)) | (1 << (PddlParser.T__41 - 38)))) !== 0))) {
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
    PddlParser.prototype.assignOp = function () {
        var _localctx = new AssignOpContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, PddlParser.RULE_assignOp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 584;
                _la = this._input.LA(1);
                if (!(((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (PddlParser.T__42 - 43)) | (1 << (PddlParser.T__43 - 43)) | (1 << (PddlParser.T__44 - 43)) | (1 << (PddlParser.T__45 - 43)) | (1 << (PddlParser.T__46 - 43)))) !== 0))) {
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
    PddlParser.prototype.durationConstraint = function () {
        var _localctx = new DurationConstraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, PddlParser.RULE_durationConstraint);
        var _la;
        try {
            this.state = 598;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 52, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 586;
                        this.match(PddlParser.T__0);
                        this.state = 587;
                        this.match(PddlParser.T__17);
                        this.state = 589;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 588;
                                    this.simpleDurationConstraint();
                                }
                            }
                            this.state = 591;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === PddlParser.T__0);
                        this.state = 593;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 595;
                        this.match(PddlParser.T__0);
                        this.state = 596;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 597;
                        this.simpleDurationConstraint();
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
    PddlParser.prototype.simpleDurationConstraint = function () {
        var _localctx = new SimpleDurationConstraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, PddlParser.RULE_simpleDurationConstraint);
        try {
            this.state = 612;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 53, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 600;
                        this.match(PddlParser.T__0);
                        this.state = 601;
                        this.durOp();
                        this.state = 602;
                        this.match(PddlParser.T__47);
                        this.state = 603;
                        this.durValue();
                        this.state = 604;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 606;
                        this.match(PddlParser.T__0);
                        this.state = 607;
                        this.match(PddlParser.T__27);
                        this.state = 608;
                        this.timeSpecifier();
                        this.state = 609;
                        this.simpleDurationConstraint();
                        this.state = 610;
                        this.match(PddlParser.T__2);
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
    PddlParser.prototype.durOp = function () {
        var _localctx = new DurOpContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, PddlParser.RULE_durOp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 614;
                _la = this._input.LA(1);
                if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (PddlParser.T__39 - 40)) | (1 << (PddlParser.T__40 - 40)) | (1 << (PddlParser.T__41 - 40)))) !== 0))) {
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
    PddlParser.prototype.durValue = function () {
        var _localctx = new DurValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, PddlParser.RULE_durValue);
        try {
            this.state = 618;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 54, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 616;
                        this.match(PddlParser.NUMBER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 617;
                        this.fExp();
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
    PddlParser.prototype.daEffect = function () {
        var _localctx = new DaEffectContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, PddlParser.RULE_daEffect);
        var _la;
        try {
            this.state = 650;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 56, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 620;
                        this.match(PddlParser.T__0);
                        this.state = 621;
                        this.match(PddlParser.T__17);
                        this.state = 625;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === PddlParser.T__0) {
                            {
                                {
                                    this.state = 622;
                                    this.daEffect();
                                }
                            }
                            this.state = 627;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 628;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 629;
                        this.timedEffect();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 630;
                        this.match(PddlParser.T__0);
                        this.state = 631;
                        this.match(PddlParser.T__22);
                        this.state = 632;
                        this.match(PddlParser.T__0);
                        this.state = 633;
                        this.typedVariableList();
                        this.state = 634;
                        this.match(PddlParser.T__2);
                        this.state = 635;
                        this.daEffect();
                        this.state = 636;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 638;
                        this.match(PddlParser.T__0);
                        this.state = 639;
                        this.match(PddlParser.T__33);
                        this.state = 640;
                        this.daGD();
                        this.state = 641;
                        this.timedEffect();
                        this.state = 642;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 644;
                        this.match(PddlParser.T__0);
                        this.state = 645;
                        this.assignOp();
                        this.state = 646;
                        this.fHead();
                        this.state = 647;
                        this.fExpDA();
                        this.state = 648;
                        this.match(PddlParser.T__2);
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
    PddlParser.prototype.timedEffect = function () {
        var _localctx = new TimedEffectContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, PddlParser.RULE_timedEffect);
        try {
            this.state = 670;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 57, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 652;
                        this.match(PddlParser.T__0);
                        this.state = 653;
                        this.match(PddlParser.T__27);
                        this.state = 654;
                        this.timeSpecifier();
                        this.state = 655;
                        this.daEffect();
                        this.state = 656;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 658;
                        this.match(PddlParser.T__0);
                        this.state = 659;
                        this.match(PddlParser.T__27);
                        this.state = 660;
                        this.timeSpecifier();
                        this.state = 661;
                        this.fAssignDA();
                        this.state = 662;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 664;
                        this.match(PddlParser.T__0);
                        this.state = 665;
                        this.assignOp();
                        this.state = 666;
                        this.fHead();
                        this.state = 667;
                        this.fExp();
                        this.state = 668;
                        this.match(PddlParser.T__2);
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
    PddlParser.prototype.fAssignDA = function () {
        var _localctx = new FAssignDAContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, PddlParser.RULE_fAssignDA);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 672;
                this.match(PddlParser.T__0);
                this.state = 673;
                this.assignOp();
                this.state = 674;
                this.fHead();
                this.state = 675;
                this.fExpDA();
                this.state = 676;
                this.match(PddlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.fExpDA = function () {
        var _localctx = new FExpDAContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, PddlParser.RULE_fExpDA);
        try {
            this.state = 691;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 59, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 678;
                        this.match(PddlParser.T__0);
                        this.state = 685;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 58, this._ctx)) {
                            case 1:
                                {
                                    {
                                        this.state = 679;
                                        this.binaryOp();
                                        this.state = 680;
                                        this.fExpDA();
                                        this.state = 681;
                                        this.fExpDA();
                                    }
                                }
                                break;
                            case 2:
                                {
                                    {
                                        this.state = 683;
                                        this.match(PddlParser.T__6);
                                        this.state = 684;
                                        this.fExpDA();
                                    }
                                }
                                break;
                        }
                        this.state = 687;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 689;
                        this.match(PddlParser.T__47);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 690;
                        this.fExp();
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
    PddlParser.prototype.problem = function () {
        var _localctx = new ProblemContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, PddlParser.RULE_problem);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 693;
                this.match(PddlParser.T__0);
                this.state = 694;
                this.match(PddlParser.T__1);
                this.state = 695;
                this.problemDecl();
                this.state = 696;
                this.problemDomain();
                this.state = 698;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
                    case 1:
                        {
                            this.state = 697;
                            this.requireDef();
                        }
                        break;
                }
                this.state = 701;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 61, this._ctx)) {
                    case 1:
                        {
                            this.state = 700;
                            this.objectDecl();
                        }
                        break;
                }
                this.state = 703;
                this.init();
                this.state = 704;
                this.goal();
                this.state = 706;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 62, this._ctx)) {
                    case 1:
                        {
                            this.state = 705;
                            this.probConstraints();
                        }
                        break;
                }
                this.state = 709;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PddlParser.T__0) {
                    {
                        this.state = 708;
                        this.metricSpec();
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
    PddlParser.prototype.problemDecl = function () {
        var _localctx = new ProblemDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, PddlParser.RULE_problemDecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 711;
                this.match(PddlParser.T__0);
                this.state = 712;
                this.match(PddlParser.T__48);
                this.state = 713;
                this.match(PddlParser.NAME);
                this.state = 714;
                this.match(PddlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.problemDomain = function () {
        var _localctx = new ProblemDomainContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, PddlParser.RULE_problemDomain);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 716;
                this.match(PddlParser.T__0);
                this.state = 717;
                this.match(PddlParser.T__49);
                this.state = 718;
                this.match(PddlParser.NAME);
                this.state = 719;
                this.match(PddlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.objectDecl = function () {
        var _localctx = new ObjectDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, PddlParser.RULE_objectDecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 721;
                this.match(PddlParser.T__0);
                this.state = 722;
                this.match(PddlParser.T__50);
                this.state = 723;
                this.typedNameList();
                this.state = 724;
                this.match(PddlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.init = function () {
        var _localctx = new InitContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, PddlParser.RULE_init);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 726;
                this.match(PddlParser.T__0);
                this.state = 727;
                this.match(PddlParser.T__51);
                this.state = 731;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PddlParser.T__0) {
                    {
                        {
                            this.state = 728;
                            this.initEl();
                        }
                    }
                    this.state = 733;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 734;
                this.match(PddlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.initEl = function () {
        var _localctx = new InitElContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, PddlParser.RULE_initEl);
        try {
            this.state = 749;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 65, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 736;
                        this.nameLiteral();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 737;
                        this.match(PddlParser.T__0);
                        this.state = 738;
                        this.match(PddlParser.T__39);
                        this.state = 739;
                        this.fHead();
                        this.state = 740;
                        this.match(PddlParser.NUMBER);
                        this.state = 741;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 743;
                        this.match(PddlParser.T__0);
                        this.state = 744;
                        this.match(PddlParser.T__27);
                        this.state = 745;
                        this.match(PddlParser.NUMBER);
                        this.state = 746;
                        this.nameLiteral();
                        this.state = 747;
                        this.match(PddlParser.T__2);
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
    PddlParser.prototype.nameLiteral = function () {
        var _localctx = new NameLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, PddlParser.RULE_nameLiteral);
        try {
            this.state = 757;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 66, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 751;
                        this.atomicNameFormula();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 752;
                        this.match(PddlParser.T__0);
                        this.state = 753;
                        this.match(PddlParser.T__19);
                        this.state = 754;
                        this.atomicNameFormula();
                        this.state = 755;
                        this.match(PddlParser.T__2);
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
    PddlParser.prototype.atomicNameFormula = function () {
        var _localctx = new AtomicNameFormulaContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, PddlParser.RULE_atomicNameFormula);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 759;
                this.match(PddlParser.T__0);
                this.state = 760;
                this.predicate();
                this.state = 764;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PddlParser.NAME) {
                    {
                        {
                            this.state = 761;
                            this.match(PddlParser.NAME);
                        }
                    }
                    this.state = 766;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 767;
                this.match(PddlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.goal = function () {
        var _localctx = new GoalContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, PddlParser.RULE_goal);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 769;
                this.match(PddlParser.T__0);
                this.state = 770;
                this.match(PddlParser.T__52);
                this.state = 771;
                this.goalDesc();
                this.state = 772;
                this.match(PddlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.probConstraints = function () {
        var _localctx = new ProbConstraintsContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, PddlParser.RULE_probConstraints);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 774;
                this.match(PddlParser.T__0);
                this.state = 775;
                this.match(PddlParser.T__12);
                this.state = 776;
                this.prefConGD();
                this.state = 777;
                this.match(PddlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.prefConGD = function () {
        var _localctx = new PrefConGDContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, PddlParser.RULE_prefConGD);
        var _la;
        try {
            this.state = 805;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 70, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 779;
                        this.match(PddlParser.T__0);
                        this.state = 780;
                        this.match(PddlParser.T__17);
                        this.state = 784;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === PddlParser.T__0) {
                            {
                                {
                                    this.state = 781;
                                    this.prefConGD();
                                }
                            }
                            this.state = 786;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 787;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 788;
                        this.match(PddlParser.T__0);
                        this.state = 789;
                        this.match(PddlParser.T__22);
                        this.state = 790;
                        this.match(PddlParser.T__0);
                        this.state = 791;
                        this.typedVariableList();
                        this.state = 792;
                        this.match(PddlParser.T__2);
                        this.state = 793;
                        this.prefConGD();
                        this.state = 794;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 796;
                        this.match(PddlParser.T__0);
                        this.state = 797;
                        this.match(PddlParser.T__26);
                        this.state = 799;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PddlParser.NAME) {
                            {
                                this.state = 798;
                                this.match(PddlParser.NAME);
                            }
                        }
                        this.state = 801;
                        this.conGD();
                        this.state = 802;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 804;
                        this.conGD();
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
    PddlParser.prototype.metricSpec = function () {
        var _localctx = new MetricSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, PddlParser.RULE_metricSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 807;
                this.match(PddlParser.T__0);
                this.state = 808;
                this.match(PddlParser.T__53);
                this.state = 809;
                this.optimization();
                this.state = 810;
                this.metricFExp();
                this.state = 811;
                this.match(PddlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PddlParser.prototype.optimization = function () {
        var _localctx = new OptimizationContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, PddlParser.RULE_optimization);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 813;
                _la = this._input.LA(1);
                if (!(_la === PddlParser.T__54 || _la === PddlParser.T__55)) {
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
    PddlParser.prototype.metricFExp = function () {
        var _localctx = new MetricFExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, PddlParser.RULE_metricFExp);
        var _la;
        try {
            this.state = 853;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 73, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 815;
                        this.match(PddlParser.T__0);
                        this.state = 816;
                        this.binaryOp();
                        this.state = 817;
                        this.metricFExp();
                        this.state = 818;
                        this.metricFExp();
                        this.state = 819;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 821;
                        this.match(PddlParser.T__0);
                        this.state = 822;
                        _la = this._input.LA(1);
                        if (!(_la === PddlParser.T__34 || _la === PddlParser.T__36)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 823;
                        this.metricFExp();
                        this.state = 825;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 824;
                                    this.metricFExp();
                                }
                            }
                            this.state = 827;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === PddlParser.T__0 || _la === PddlParser.T__56 || _la === PddlParser.NAME || _la === PddlParser.NUMBER);
                        this.state = 829;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 831;
                        this.match(PddlParser.T__0);
                        this.state = 832;
                        this.match(PddlParser.T__6);
                        this.state = 833;
                        this.metricFExp();
                        this.state = 834;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 836;
                        this.match(PddlParser.NUMBER);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 837;
                        this.match(PddlParser.T__0);
                        this.state = 838;
                        this.functionSymbol();
                        this.state = 842;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === PddlParser.NAME) {
                            {
                                {
                                    this.state = 839;
                                    this.match(PddlParser.NAME);
                                }
                            }
                            this.state = 844;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 845;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 847;
                        this.functionSymbol();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 848;
                        this.match(PddlParser.T__56);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 849;
                        this.match(PddlParser.T__0);
                        this.state = 850;
                        this.match(PddlParser.T__57);
                        this.state = 851;
                        this.match(PddlParser.NAME);
                        this.state = 852;
                        this.match(PddlParser.T__2);
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
    PddlParser.prototype.conGD = function () {
        var _localctx = new ConGDContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, PddlParser.RULE_conGD);
        var _la;
        try {
            this.state = 931;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 75, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 855;
                        this.match(PddlParser.T__0);
                        this.state = 856;
                        this.match(PddlParser.T__17);
                        this.state = 860;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === PddlParser.T__0) {
                            {
                                {
                                    this.state = 857;
                                    this.conGD();
                                }
                            }
                            this.state = 862;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 863;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 864;
                        this.match(PddlParser.T__0);
                        this.state = 865;
                        this.match(PddlParser.T__22);
                        this.state = 866;
                        this.match(PddlParser.T__0);
                        this.state = 867;
                        this.typedVariableList();
                        this.state = 868;
                        this.match(PddlParser.T__2);
                        this.state = 869;
                        this.conGD();
                        this.state = 870;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 872;
                        this.match(PddlParser.T__0);
                        this.state = 873;
                        this.match(PddlParser.T__27);
                        this.state = 874;
                        this.match(PddlParser.T__30);
                        this.state = 875;
                        this.goalDesc();
                        this.state = 876;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 878;
                        this.match(PddlParser.T__0);
                        this.state = 879;
                        this.match(PddlParser.T__58);
                        this.state = 880;
                        this.goalDesc();
                        this.state = 881;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 883;
                        this.match(PddlParser.T__0);
                        this.state = 884;
                        this.match(PddlParser.T__59);
                        this.state = 885;
                        this.goalDesc();
                        this.state = 886;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 888;
                        this.match(PddlParser.T__0);
                        this.state = 889;
                        this.match(PddlParser.T__60);
                        this.state = 890;
                        this.match(PddlParser.NUMBER);
                        this.state = 891;
                        this.goalDesc();
                        this.state = 892;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 894;
                        this.match(PddlParser.T__0);
                        this.state = 895;
                        this.match(PddlParser.T__61);
                        this.state = 896;
                        this.goalDesc();
                        this.state = 897;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 899;
                        this.match(PddlParser.T__0);
                        this.state = 900;
                        this.match(PddlParser.T__62);
                        this.state = 901;
                        this.goalDesc();
                        this.state = 902;
                        this.goalDesc();
                        this.state = 903;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 905;
                        this.match(PddlParser.T__0);
                        this.state = 906;
                        this.match(PddlParser.T__63);
                        this.state = 907;
                        this.goalDesc();
                        this.state = 908;
                        this.goalDesc();
                        this.state = 909;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 911;
                        this.match(PddlParser.T__0);
                        this.state = 912;
                        this.match(PddlParser.T__64);
                        this.state = 913;
                        this.match(PddlParser.NUMBER);
                        this.state = 914;
                        this.goalDesc();
                        this.state = 915;
                        this.goalDesc();
                        this.state = 916;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 918;
                        this.match(PddlParser.T__0);
                        this.state = 919;
                        this.match(PddlParser.T__65);
                        this.state = 920;
                        this.match(PddlParser.NUMBER);
                        this.state = 921;
                        this.match(PddlParser.NUMBER);
                        this.state = 922;
                        this.goalDesc();
                        this.state = 923;
                        this.match(PddlParser.T__2);
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 925;
                        this.match(PddlParser.T__0);
                        this.state = 926;
                        this.match(PddlParser.T__66);
                        this.state = 927;
                        this.match(PddlParser.NUMBER);
                        this.state = 928;
                        this.goalDesc();
                        this.state = 929;
                        this.match(PddlParser.T__2);
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
    Object.defineProperty(PddlParser, "_ATN", {
        get: function () {
            if (!PddlParser.__ATN) {
                PddlParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(PddlParser._serializedATN));
            }
            return PddlParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    PddlParser.T__0 = 1;
    PddlParser.T__1 = 2;
    PddlParser.T__2 = 3;
    PddlParser.T__3 = 4;
    PddlParser.T__4 = 5;
    PddlParser.T__5 = 6;
    PddlParser.T__6 = 7;
    PddlParser.T__7 = 8;
    PddlParser.T__8 = 9;
    PddlParser.T__9 = 10;
    PddlParser.T__10 = 11;
    PddlParser.T__11 = 12;
    PddlParser.T__12 = 13;
    PddlParser.T__13 = 14;
    PddlParser.T__14 = 15;
    PddlParser.T__15 = 16;
    PddlParser.T__16 = 17;
    PddlParser.T__17 = 18;
    PddlParser.T__18 = 19;
    PddlParser.T__19 = 20;
    PddlParser.T__20 = 21;
    PddlParser.T__21 = 22;
    PddlParser.T__22 = 23;
    PddlParser.T__23 = 24;
    PddlParser.T__24 = 25;
    PddlParser.T__25 = 26;
    PddlParser.T__26 = 27;
    PddlParser.T__27 = 28;
    PddlParser.T__28 = 29;
    PddlParser.T__29 = 30;
    PddlParser.T__30 = 31;
    PddlParser.T__31 = 32;
    PddlParser.T__32 = 33;
    PddlParser.T__33 = 34;
    PddlParser.T__34 = 35;
    PddlParser.T__35 = 36;
    PddlParser.T__36 = 37;
    PddlParser.T__37 = 38;
    PddlParser.T__38 = 39;
    PddlParser.T__39 = 40;
    PddlParser.T__40 = 41;
    PddlParser.T__41 = 42;
    PddlParser.T__42 = 43;
    PddlParser.T__43 = 44;
    PddlParser.T__44 = 45;
    PddlParser.T__45 = 46;
    PddlParser.T__46 = 47;
    PddlParser.T__47 = 48;
    PddlParser.T__48 = 49;
    PddlParser.T__49 = 50;
    PddlParser.T__50 = 51;
    PddlParser.T__51 = 52;
    PddlParser.T__52 = 53;
    PddlParser.T__53 = 54;
    PddlParser.T__54 = 55;
    PddlParser.T__55 = 56;
    PddlParser.T__56 = 57;
    PddlParser.T__57 = 58;
    PddlParser.T__58 = 59;
    PddlParser.T__59 = 60;
    PddlParser.T__60 = 61;
    PddlParser.T__61 = 62;
    PddlParser.T__62 = 63;
    PddlParser.T__63 = 64;
    PddlParser.T__64 = 65;
    PddlParser.T__65 = 66;
    PddlParser.T__66 = 67;
    PddlParser.REQUIRE_KEY = 68;
    PddlParser.DOMAIN = 69;
    PddlParser.DOMAIN_NAME = 70;
    PddlParser.REQUIREMENTS = 71;
    PddlParser.TYPES = 72;
    PddlParser.EITHER_TYPE = 73;
    PddlParser.CONSTANTS = 74;
    PddlParser.FUNCTIONS = 75;
    PddlParser.PREDICATES = 76;
    PddlParser.ACTION = 77;
    PddlParser.DURATIVE_ACTION = 78;
    PddlParser.PROBLEM = 79;
    PddlParser.PROBLEM_NAME = 80;
    PddlParser.PROBLEM_DOMAIN = 81;
    PddlParser.OBJECTS = 82;
    PddlParser.INIT = 83;
    PddlParser.FUNC_HEAD = 84;
    PddlParser.PRECONDITION = 85;
    PddlParser.EFFECT = 86;
    PddlParser.AND_GD = 87;
    PddlParser.OR_GD = 88;
    PddlParser.NOT_GD = 89;
    PddlParser.IMPLY_GD = 90;
    PddlParser.EXISTS_GD = 91;
    PddlParser.FORALL_GD = 92;
    PddlParser.COMPARISON_GD = 93;
    PddlParser.AND_EFFECT = 94;
    PddlParser.FORALL_EFFECT = 95;
    PddlParser.WHEN_EFFECT = 96;
    PddlParser.ASSIGN_EFFECT = 97;
    PddlParser.NOT_EFFECT = 98;
    PddlParser.PRED_HEAD = 99;
    PddlParser.GOAL = 100;
    PddlParser.BINARY_OP = 101;
    PddlParser.UNARY_MINUS = 102;
    PddlParser.INIT_EQ = 103;
    PddlParser.INIT_AT = 104;
    PddlParser.NOT_PRED_INIT = 105;
    PddlParser.PRED_INST = 106;
    PddlParser.PROBLEM_CONSTRAINT = 107;
    PddlParser.PROBLEM_METRIC = 108;
    PddlParser.NAME = 109;
    PddlParser.VARIABLE = 110;
    PddlParser.NUMBER = 111;
    PddlParser.LINE_COMMENT = 112;
    PddlParser.WHITESPACE = 113;
    PddlParser.RULE_pddlDoc = 0;
    PddlParser.RULE_domain = 1;
    PddlParser.RULE_domainName = 2;
    PddlParser.RULE_requireDef = 3;
    PddlParser.RULE_typesDef = 4;
    PddlParser.RULE_typedNameList = 5;
    PddlParser.RULE_singleTypeNameList = 6;
    PddlParser.RULE_type = 7;
    PddlParser.RULE_primType = 8;
    PddlParser.RULE_functionsDef = 9;
    PddlParser.RULE_functionList = 10;
    PddlParser.RULE_atomicFunctionSkeleton = 11;
    PddlParser.RULE_functionSymbol = 12;
    PddlParser.RULE_functionType = 13;
    PddlParser.RULE_constantsDef = 14;
    PddlParser.RULE_predicatesDef = 15;
    PddlParser.RULE_atomicFormulaSkeleton = 16;
    PddlParser.RULE_predicate = 17;
    PddlParser.RULE_typedVariableList = 18;
    PddlParser.RULE_singleTypeVarList = 19;
    PddlParser.RULE_constraints = 20;
    PddlParser.RULE_structureDef = 21;
    PddlParser.RULE_actionDef = 22;
    PddlParser.RULE_actionSymbol = 23;
    PddlParser.RULE_actionDefBody = 24;
    PddlParser.RULE_goalDesc = 25;
    PddlParser.RULE_fComp = 26;
    PddlParser.RULE_atomicTermFormula = 27;
    PddlParser.RULE_term = 28;
    PddlParser.RULE_durativeActionDef = 29;
    PddlParser.RULE_daDefBody = 30;
    PddlParser.RULE_daGD = 31;
    PddlParser.RULE_prefTimedGD = 32;
    PddlParser.RULE_timedGD = 33;
    PddlParser.RULE_timeSpecifier = 34;
    PddlParser.RULE_interval = 35;
    PddlParser.RULE_derivedDef = 36;
    PddlParser.RULE_fExp = 37;
    PddlParser.RULE_fExp2 = 38;
    PddlParser.RULE_fHead = 39;
    PddlParser.RULE_effect = 40;
    PddlParser.RULE_cEffect = 41;
    PddlParser.RULE_pEffect = 42;
    PddlParser.RULE_condEffect = 43;
    PddlParser.RULE_binaryOp = 44;
    PddlParser.RULE_binaryComp = 45;
    PddlParser.RULE_assignOp = 46;
    PddlParser.RULE_durationConstraint = 47;
    PddlParser.RULE_simpleDurationConstraint = 48;
    PddlParser.RULE_durOp = 49;
    PddlParser.RULE_durValue = 50;
    PddlParser.RULE_daEffect = 51;
    PddlParser.RULE_timedEffect = 52;
    PddlParser.RULE_fAssignDA = 53;
    PddlParser.RULE_fExpDA = 54;
    PddlParser.RULE_problem = 55;
    PddlParser.RULE_problemDecl = 56;
    PddlParser.RULE_problemDomain = 57;
    PddlParser.RULE_objectDecl = 58;
    PddlParser.RULE_init = 59;
    PddlParser.RULE_initEl = 60;
    PddlParser.RULE_nameLiteral = 61;
    PddlParser.RULE_atomicNameFormula = 62;
    PddlParser.RULE_goal = 63;
    PddlParser.RULE_probConstraints = 64;
    PddlParser.RULE_prefConGD = 65;
    PddlParser.RULE_metricSpec = 66;
    PddlParser.RULE_optimization = 67;
    PddlParser.RULE_metricFExp = 68;
    PddlParser.RULE_conGD = 69;
    // tslint:disable:no-trailing-whitespace
    PddlParser.ruleNames = [
        "pddlDoc", "domain", "domainName", "requireDef", "typesDef", "typedNameList",
        "singleTypeNameList", "type", "primType", "functionsDef", "functionList",
        "atomicFunctionSkeleton", "functionSymbol", "functionType", "constantsDef",
        "predicatesDef", "atomicFormulaSkeleton", "predicate", "typedVariableList",
        "singleTypeVarList", "constraints", "structureDef", "actionDef", "actionSymbol",
        "actionDefBody", "goalDesc", "fComp", "atomicTermFormula", "term", "durativeActionDef",
        "daDefBody", "daGD", "prefTimedGD", "timedGD", "timeSpecifier", "interval",
        "derivedDef", "fExp", "fExp2", "fHead", "effect", "cEffect", "pEffect",
        "condEffect", "binaryOp", "binaryComp", "assignOp", "durationConstraint",
        "simpleDurationConstraint", "durOp", "durValue", "daEffect", "timedEffect",
        "fAssignDA", "fExpDA", "problem", "problemDecl", "problemDomain", "objectDecl",
        "init", "initEl", "nameLiteral", "atomicNameFormula", "goal", "probConstraints",
        "prefConGD", "metricSpec", "optimization", "metricFExp", "conGD",
    ];
    PddlParser._LITERAL_NAMES = [
        undefined, "'('", "'define'", "')'", "'domain'", "':requirements'", "':types'",
        "'-'", "'either'", "':functions'", "'number'", "':constants'", "':predicates'",
        "':constraints'", "':action'", "':parameters'", "':precondition'", "':effect'",
        "'and'", "'or'", "'not'", "'imply'", "'exists'", "'forall'", "':durative-action'",
        "':duration'", "':condition'", "'preference'", "'at'", "'over'", "'start'",
        "'end'", "'all'", "':derived'", "'when'", "'*'", "'+'", "'/'", "'>'",
        "'<'", "'='", "'>='", "'<='", "'assign'", "'scale-up'", "'scale-down'",
        "'increase'", "'decrease'", "'?duration'", "'problem'", "':domain'", "':objects'",
        "':init'", "':goal'", "':metric'", "'minimize'", "'maximize'", "'total-time'",
        "'is-violated'", "'always'", "'sometime'", "'within'", "'at-most-once'",
        "'sometime-after'", "'sometime-before'", "'always-within'", "'hold-during'",
        "'hold-after'", undefined, "'DOMAIN'", "'DOMAIN_NAME'", "'REQUIREMENTS'",
        "'TYPES'", "'EITHER_TYPE'", "'CONSTANTS'", "'FUNCTIONS'", "'PREDICATES'",
        "'ACTION'", "'DURATIVE_ACTION'", "'PROBLEM'", "'PROBLEM_NAME'", "'PROBLEM_DOMAIN'",
        "'OBJECTS'", "'INIT'", "'FUNC_HEAD'", "'PRECONDITION'", "'EFFECT'", "'AND_GD'",
        "'OR_GD'", "'NOT_GD'", "'IMPLY_GD'", "'EXISTS_GD'", "'FORALL_GD'", "'COMPARISON_GD'",
        "'AND_EFFECT'", "'FORALL_EFFECT'", "'WHEN_EFFECT'", "'ASSIGN_EFFECT'",
        "'NOT_EFFECT'", "'PRED_HEAD'", "'GOAL'", "'BINARY_OP'", "'UNARY_MINUS'",
        "'INIT_EQ'", "'INIT_AT'", "'NOT_PRED_INIT'", "'PRED_INST'", "'PROBLEM_CONSTRAINT'",
        "'PROBLEM_METRIC'",
    ];
    PddlParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, "REQUIRE_KEY",
        "DOMAIN", "DOMAIN_NAME", "REQUIREMENTS", "TYPES", "EITHER_TYPE", "CONSTANTS",
        "FUNCTIONS", "PREDICATES", "ACTION", "DURATIVE_ACTION", "PROBLEM", "PROBLEM_NAME",
        "PROBLEM_DOMAIN", "OBJECTS", "INIT", "FUNC_HEAD", "PRECONDITION", "EFFECT",
        "AND_GD", "OR_GD", "NOT_GD", "IMPLY_GD", "EXISTS_GD", "FORALL_GD", "COMPARISON_GD",
        "AND_EFFECT", "FORALL_EFFECT", "WHEN_EFFECT", "ASSIGN_EFFECT", "NOT_EFFECT",
        "PRED_HEAD", "GOAL", "BINARY_OP", "UNARY_MINUS", "INIT_EQ", "INIT_AT",
        "NOT_PRED_INIT", "PRED_INST", "PROBLEM_CONSTRAINT", "PROBLEM_METRIC",
        "NAME", "VARIABLE", "NUMBER", "LINE_COMMENT", "WHITESPACE",
    ];
    PddlParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(PddlParser._LITERAL_NAMES, PddlParser._SYMBOLIC_NAMES, []);
    PddlParser._serializedATNSegments = 2;
    PddlParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03s\u03A8\x04\x02" +
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
        "F\tF\x04G\tG\x03\x02\x03\x02\x05\x02\x91\n\x02\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x05\x03\x97\n\x03\x03\x03\x05\x03\x9A\n\x03\x03\x03\x05\x03\x9D" +
        "\n\x03\x03\x03\x05\x03\xA0\n\x03\x03\x03\x05\x03\xA3\n\x03\x03\x03\x05" +
        "\x03\xA6\n\x03\x03\x03\x07\x03\xA9\n\x03\f\x03\x0E\x03\xAC\v\x03\x03\x03" +
        "\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05" +
        "\x06\x05\xB8\n\x05\r\x05\x0E\x05\xB9\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
        "\x06\x03\x06\x03\x06\x03\x07\x07\x07\xC4\n\x07\f\x07\x0E\x07\xC7\v\x07" +
        "\x03\x07\x06\x07\xCA\n\x07\r\x07\x0E\x07\xCB\x03\x07\x07\x07\xCF\n\x07" +
        "\f\x07\x0E\x07\xD2\v\x07\x05\x07\xD4\n\x07\x03\b\x06\b\xD7\n\b\r\b\x0E" +
        "\b\xD8\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x06\t\xE1\n\t\r\t\x0E\t\xE2" +
        "\x03\t\x03\t\x03\t\x05\t\xE8\n\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03" +
        "\v\x03\f\x06\f\xF2\n\f\r\f\x0E\f\xF3\x03\f\x03\f\x05\f\xF8\n\f\x07\f\xFA" +
        "\n\f\f\f\x0E\f\xFD\v\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03" +
        "\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03" +
        "\x11\x06\x11\u0110\n\x11\r\x11\x0E\x11\u0111\x03\x11\x03\x11\x03\x12\x03" +
        "\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x07\x14\u011E\n\x14" +
        "\f\x14\x0E\x14\u0121\v\x14\x03\x14\x06\x14\u0124\n\x14\r\x14\x0E\x14\u0125" +
        "\x03\x14\x07\x14\u0129\n\x14\f\x14\x0E\x14\u012C\v\x14\x05\x14\u012E\n" +
        "\x14\x03\x15\x06\x15\u0131\n\x15\r\x15\x0E\x15\u0132\x03\x15\x03\x15\x03" +
        "\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x05" +
        "\x17\u0140\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
        "\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
        "\x05\x1A\u0152\n\x1A\x05\x1A\u0154\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
        "\x05\x1A\u015A\n\x1A\x05\x1A\u015C\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
        "\x07\x1B\u0162\n\x1B\f\x1B\x0E\x1B\u0165\v\x1B\x03\x1B\x03\x1B\x03\x1B" +
        "\x03\x1B\x07\x1B\u016B\n\x1B\f\x1B\x0E\x1B\u016E\v\x1B\x03\x1B\x03\x1B" +
        "\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
        "\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
        "\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
        "\x05\x1B\u018D\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
        "\x1D\x03\x1D\x03\x1D\x07\x1D\u0198\n\x1D\f\x1D\x0E\x1D\u019B\v\x1D\x03" +
        "\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
        "\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x05" +
        " \u01B1\n \x03 \x03 \x03 \x03 \x05 \u01B7\n \x05 \u01B9\n \x03!\x03!\x03" +
        "!\x03!\x07!\u01BF\n!\f!\x0E!\u01C2\v!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
        "!\x03!\x03!\x05!\u01CD\n!\x03\"\x03\"\x03\"\x03\"\x05\"\u01D3\n\"\x03" +
        "\"\x03\"\x03\"\x05\"\u01D8\n\"\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03" +
        "#\x03#\x03#\x03#\x03#\x05#\u01E6\n#\x03$\x03$\x03%\x03%\x03&\x03&\x03" +
        "&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'" +
        "\x03\'\x03\'\x03\'\x03\'\x05\'\u01FF\n\'\x03(\x03(\x03)\x03)\x03)\x07" +
        ")\u0206\n)\f)\x0E)\u0209\v)\x03)\x03)\x03)\x05)\u020E\n)\x03*\x03*\x03" +
        "*\x07*\u0213\n*\f*\x0E*\u0216\v*\x03*\x03*\x05*\u021A\n*\x03+\x03+\x03" +
        "+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u022B" +
        "\n+\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u0239" +
        "\n,\x03-\x03-\x03-\x07-\u023E\n-\f-\x0E-\u0241\v-\x03-\x03-\x05-\u0245" +
        "\n-\x03.\x03.\x03/\x03/\x030\x030\x031\x031\x031\x061\u0250\n1\r1\x0E" +
        "1\u0251\x031\x031\x031\x031\x031\x051\u0259\n1\x032\x032\x032\x032\x03" +
        "2\x032\x032\x032\x032\x032\x032\x032\x052\u0267\n2\x033\x033\x034\x03" +
        "4\x054\u026D\n4\x035\x035\x035\x075\u0272\n5\f5\x0E5\u0275\v5\x035\x03" +
        "5\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x03" +
        "5\x035\x035\x035\x035\x035\x035\x055\u028D\n5\x036\x036\x036\x036\x03" +
        "6\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x05" +
        "6\u02A1\n6\x037\x037\x037\x037\x037\x037\x038\x038\x038\x038\x038\x03" +
        "8\x038\x058\u02B0\n8\x038\x038\x038\x038\x058\u02B6\n8\x039\x039\x039" +
        "\x039\x039\x059\u02BD\n9\x039\x059\u02C0\n9\x039\x039\x039\x059\u02C5" +
        "\n9\x039\x059\u02C8\n9\x03:\x03:\x03:\x03:\x03:\x03;\x03;\x03;\x03;\x03" +
        ";\x03<\x03<\x03<\x03<\x03<\x03=\x03=\x03=\x07=\u02DC\n=\f=\x0E=\u02DF" +
        "\v=\x03=\x03=\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03" +
        ">\x03>\x05>\u02F0\n>\x03?\x03?\x03?\x03?\x03?\x03?\x05?\u02F8\n?\x03@" +
        "\x03@\x03@\x07@\u02FD\n@\f@\x0E@\u0300\v@\x03@\x03@\x03A\x03A\x03A\x03" +
        "A\x03A\x03B\x03B\x03B\x03B\x03B\x03C\x03C\x03C\x07C\u0311\nC\fC\x0EC\u0314" +
        "\vC\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x05C\u0322" +
        "\nC\x03C\x03C\x03C\x03C\x05C\u0328\nC\x03D\x03D\x03D\x03D\x03D\x03D\x03" +
        "E\x03E\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x06F\u033C\n" +
        "F\rF\x0EF\u033D\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03" +
        "F\x07F\u034B\nF\fF\x0EF\u034E\vF\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03" +
        "F\x05F\u0358\nF\x03G\x03G\x03G\x07G\u035D\nG\fG\x0EG\u0360\vG\x03G\x03" +
        "G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
        "G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
        "G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
        "G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
        "G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x05G\u03A6\nG\x03" +
        "G\x02\x02\x02H\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
        "\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
        "&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
        "B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
        "^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
        "z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
        "\x02\n\x03\x02op\x03\x02 !\x04\x02\t\t%\'\x03\x02(,\x03\x02-1\x03\x02" +
        "*,\x03\x029:\x04\x02%%\'\'\x02\u03D3\x02\x90\x03\x02\x02\x02\x04\x92\x03" +
        "\x02\x02\x02\x06\xAF\x03\x02\x02\x02\b\xB4\x03\x02\x02\x02\n\xBD\x03\x02" +
        "\x02\x02\f\xD3\x03\x02\x02\x02\x0E\xD6\x03\x02\x02\x02\x10\xE7\x03\x02" +
        "\x02\x02\x12\xE9\x03\x02\x02\x02\x14\xEB\x03\x02\x02\x02\x16\xFB\x03\x02" +
        "\x02\x02\x18\xFE\x03\x02\x02\x02\x1A\u0103\x03\x02\x02\x02\x1C\u0105\x03" +
        "\x02\x02\x02\x1E\u0107\x03\x02\x02\x02 \u010C\x03\x02\x02\x02\"\u0115" +
        "\x03\x02\x02\x02$\u011A\x03\x02\x02\x02&\u012D\x03\x02\x02\x02(\u0130" +
        "\x03\x02\x02\x02*\u0137\x03\x02\x02\x02,\u013F\x03\x02\x02\x02.\u0141" +
        "\x03\x02\x02\x020\u014B\x03\x02\x02\x022\u0153\x03\x02\x02\x024\u018C" +
        "\x03\x02\x02\x026\u018E\x03\x02\x02\x028\u0194\x03\x02\x02\x02:\u019E" +
        "\x03\x02\x02\x02<\u01A0\x03\x02\x02\x02>\u01B8\x03\x02\x02\x02@\u01CC" +
        "\x03\x02\x02\x02B\u01D7\x03\x02\x02\x02D\u01E5\x03\x02\x02\x02F\u01E7" +
        "\x03\x02\x02\x02H\u01E9\x03\x02\x02\x02J\u01EB\x03\x02\x02\x02L\u01FE" +
        "\x03\x02\x02\x02N\u0200\x03\x02\x02\x02P\u020D\x03\x02\x02\x02R\u0219" +
        "\x03\x02\x02\x02T\u022A\x03\x02\x02\x02V\u0238\x03\x02\x02\x02X\u0244" +
        "\x03\x02\x02\x02Z\u0246\x03\x02\x02\x02\\\u0248\x03\x02\x02\x02^\u024A" +
        "\x03\x02\x02\x02`\u0258\x03\x02\x02\x02b\u0266\x03\x02\x02\x02d\u0268" +
        "\x03\x02\x02\x02f\u026C\x03\x02\x02\x02h\u028C\x03\x02\x02\x02j\u02A0" +
        "\x03\x02\x02\x02l\u02A2\x03\x02\x02\x02n\u02B5\x03\x02\x02\x02p\u02B7" +
        "\x03\x02\x02\x02r\u02C9\x03\x02\x02\x02t\u02CE\x03\x02\x02\x02v\u02D3" +
        "\x03\x02\x02\x02x\u02D8\x03\x02\x02\x02z\u02EF\x03\x02\x02\x02|\u02F7" +
        "\x03\x02\x02\x02~\u02F9\x03\x02\x02\x02\x80\u0303\x03\x02\x02\x02\x82" +
        "\u0308\x03\x02\x02\x02\x84\u0327\x03\x02\x02\x02\x86\u0329\x03\x02\x02" +
        "\x02\x88\u032F\x03\x02\x02\x02\x8A\u0357\x03\x02\x02\x02\x8C\u03A5\x03" +
        "\x02\x02\x02\x8E\x91\x05\x04\x03\x02\x8F\x91\x05p9\x02\x90\x8E\x03\x02" +
        "\x02\x02\x90\x8F\x03\x02\x02\x02\x91\x03\x03\x02\x02\x02\x92\x93\x07\x03" +
        "\x02\x02\x93\x94\x07\x04\x02\x02\x94\x96\x05\x06\x04\x02\x95\x97\x05\b" +
        "\x05\x02\x96\x95\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x99\x03\x02" +
        "\x02\x02\x98\x9A\x05\n\x06\x02\x99\x98\x03\x02\x02\x02\x99\x9A\x03\x02" +
        "\x02\x02\x9A\x9C\x03\x02\x02\x02\x9B\x9D\x05\x1E\x10\x02\x9C\x9B\x03\x02" +
        "\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9F\x03\x02\x02\x02\x9E\xA0\x05 " +
        "\x11\x02\x9F\x9E\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA2\x03\x02" +
        "\x02\x02\xA1\xA3\x05\x14\v\x02\xA2\xA1\x03\x02\x02\x02\xA2\xA3\x03\x02" +
        "\x02\x02\xA3\xA5\x03\x02\x02\x02\xA4\xA6\x05*\x16\x02\xA5\xA4\x03\x02" +
        "\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xAA\x03\x02\x02\x02\xA7\xA9\x05," +
        "\x17\x02\xA8\xA7\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02\xAA\xA8\x03\x02" +
        "\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAD\x03\x02\x02\x02\xAC\xAA\x03\x02" +
        "\x02\x02\xAD\xAE\x07\x05\x02\x02\xAE\x05\x03\x02\x02\x02\xAF\xB0\x07\x03" +
        "\x02\x02\xB0\xB1\x07\x06\x02\x02\xB1\xB2\x07o\x02\x02\xB2\xB3\x07\x05" +
        "\x02\x02\xB3\x07\x03\x02\x02\x02\xB4\xB5\x07\x03\x02\x02\xB5\xB7\x07\x07" +
        "\x02\x02\xB6\xB8\x07F\x02\x02\xB7\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02" +
        "\x02\x02\xB9\xB7\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBB\x03\x02" +
        "\x02\x02\xBB\xBC\x07\x05\x02\x02\xBC\t\x03\x02\x02\x02\xBD\xBE\x07\x03" +
        "\x02\x02\xBE\xBF\x07\b\x02\x02\xBF\xC0\x05\f\x07\x02\xC0\xC1\x07\x05\x02" +
        "\x02\xC1\v\x03\x02\x02\x02\xC2\xC4\x07o\x02\x02\xC3\xC2\x03\x02\x02\x02" +
        "\xC4\xC7\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02" +
        "\xC6\xD4\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC8\xCA\x05\x0E\b\x02" +
        "\xC9\xC8\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02" +
        "\xCB\xCC\x03\x02\x02\x02\xCC\xD0\x03\x02\x02\x02\xCD\xCF\x07o\x02\x02" +
        "\xCE\xCD\x03\x02\x02\x02\xCF\xD2\x03\x02\x02\x02\xD0\xCE\x03\x02\x02\x02" +
        "\xD0\xD1\x03\x02\x02\x02\xD1\xD4\x03\x02\x02\x02\xD2\xD0\x03\x02\x02\x02" +
        "\xD3\xC5\x03\x02\x02\x02\xD3\xC9\x03\x02\x02\x02\xD4\r\x03\x02\x02\x02" +
        "\xD5\xD7\x07o\x02\x02\xD6\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02" +
        "\xD8\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02" +
        "\xDA\xDB\x07\t\x02\x02\xDB\xDC\x05\x10\t\x02\xDC\x0F\x03\x02\x02\x02\xDD" +
        "\xDE\x07\x03\x02\x02\xDE\xE0\x07\n\x02\x02\xDF\xE1\x05\x12\n\x02\xE0\xDF" +
        "\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3" +
        "\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE5\x07\x05\x02\x02\xE5\xE8" +
        "\x03\x02\x02\x02\xE6\xE8\x05\x12\n\x02\xE7\xDD\x03\x02\x02\x02\xE7\xE6" +
        "\x03\x02\x02\x02\xE8\x11\x03\x02\x02\x02\xE9\xEA\x07o\x02\x02\xEA\x13" +
        "\x03\x02\x02\x02\xEB\xEC\x07\x03\x02\x02\xEC\xED\x07\v\x02\x02\xED\xEE" +
        "\x05\x16\f\x02\xEE\xEF\x07\x05\x02\x02\xEF\x15\x03\x02\x02\x02\xF0\xF2" +
        "\x05\x18\r\x02\xF1\xF0\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF1" +
        "\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF7\x03\x02\x02\x02\xF5\xF6" +
        "\x07\t\x02\x02\xF6\xF8\x05\x1C\x0F\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF8" +
        "\x03\x02\x02\x02\xF8\xFA\x03\x02\x02\x02\xF9\xF1\x03\x02\x02\x02\xFA\xFD" +
        "\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\x17" +
        "\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFE\xFF\x07\x03\x02\x02\xFF\u0100" +
        "\x05\x1A\x0E\x02\u0100\u0101\x05&\x14\x02\u0101\u0102\x07\x05\x02\x02" +
        "\u0102\x19\x03\x02\x02\x02\u0103\u0104\x07o\x02\x02\u0104\x1B\x03\x02" +
        "\x02\x02\u0105\u0106\x07\f\x02\x02\u0106\x1D\x03\x02\x02\x02\u0107\u0108" +
        "\x07\x03\x02\x02\u0108\u0109\x07\r\x02\x02\u0109\u010A\x05\f\x07\x02\u010A" +
        "\u010B\x07\x05\x02\x02\u010B\x1F\x03\x02\x02\x02\u010C\u010D\x07\x03\x02" +
        "\x02\u010D\u010F\x07\x0E\x02\x02\u010E\u0110\x05\"\x12\x02\u010F\u010E" +
        "\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\u010F\x03\x02\x02\x02" +
        "\u0111\u0112\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u0114\x07" +
        "\x05\x02\x02\u0114!\x03\x02\x02\x02\u0115\u0116\x07\x03\x02\x02\u0116" +
        "\u0117\x05$\x13\x02\u0117\u0118\x05&\x14\x02\u0118\u0119\x07\x05\x02\x02" +
        "\u0119#\x03\x02\x02\x02\u011A\u011B\x07o\x02\x02\u011B%\x03\x02\x02\x02" +
        "\u011C\u011E\x07p\x02\x02\u011D\u011C\x03\x02\x02\x02\u011E\u0121\x03" +
        "\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120" +
        "\u012E\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0122\u0124\x05(\x15" +
        "\x02\u0123\u0122\x03\x02\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125\u0123" +
        "\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126\u012A\x03\x02\x02\x02" +
        "\u0127\u0129\x07p\x02\x02\u0128\u0127\x03\x02\x02\x02\u0129\u012C\x03" +
        "\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B" +
        "\u012E\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012D\u011F\x03\x02" +
        "\x02\x02\u012D\u0123\x03\x02\x02\x02\u012E\'\x03\x02\x02\x02\u012F\u0131" +
        "\x07p\x02\x02\u0130\u012F\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02" +
        "\u0132\u0130\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0134\x03" +
        "\x02\x02\x02\u0134\u0135\x07\t\x02\x02\u0135\u0136\x05\x10\t\x02\u0136" +
        ")\x03\x02\x02\x02\u0137\u0138\x07\x03\x02\x02\u0138\u0139\x07\x0F\x02" +
        "\x02\u0139\u013A\x05\x8CG\x02\u013A\u013B\x07\x05\x02\x02\u013B+\x03\x02" +
        "\x02\x02\u013C\u0140\x05.\x18\x02\u013D\u0140\x05<\x1F\x02\u013E\u0140" +
        "\x05J&\x02\u013F\u013C\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u013F" +
        "\u013E\x03\x02\x02\x02\u0140-\x03\x02\x02\x02\u0141\u0142\x07\x03\x02" +
        "\x02\u0142\u0143\x07\x10\x02\x02\u0143\u0144\x050\x19\x02\u0144\u0145" +
        "\x07\x11\x02\x02\u0145\u0146\x07\x03\x02\x02\u0146\u0147\x05&\x14\x02" +
        "\u0147\u0148\x07\x05\x02\x02\u0148\u0149\x052\x1A\x02\u0149\u014A\x07" +
        "\x05\x02\x02\u014A/\x03\x02\x02\x02\u014B\u014C\x07o\x02\x02\u014C1\x03" +
        "\x02\x02\x02\u014D\u0151\x07\x12\x02\x02\u014E\u014F\x07\x03\x02\x02\u014F" +
        "\u0152\x07\x05\x02\x02\u0150\u0152\x054\x1B\x02\u0151\u014E\x03\x02\x02" +
        "\x02\u0151\u0150\x03\x02\x02\x02\u0152\u0154\x03\x02\x02\x02\u0153\u014D" +
        "\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u015B\x03\x02\x02\x02" +
        "\u0155\u0159\x07\x13\x02\x02\u0156\u0157\x07\x03\x02\x02\u0157\u015A\x07" +
        "\x05\x02\x02\u0158\u015A\x05R*\x02\u0159\u0156\x03\x02\x02\x02\u0159\u0158" +
        "\x03\x02\x02\x02\u015A\u015C\x03\x02\x02\x02\u015B\u0155\x03\x02\x02\x02" +
        "\u015B\u015C\x03\x02\x02\x02\u015C3\x03\x02\x02\x02\u015D\u018D\x058\x1D" +
        "\x02\u015E\u015F\x07\x03\x02\x02\u015F\u0163\x07\x14\x02\x02\u0160\u0162" +
        "\x054\x1B\x02\u0161\u0160\x03\x02\x02\x02\u0162\u0165\x03\x02\x02\x02" +
        "\u0163\u0161\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0166\x03" +
        "\x02\x02\x02\u0165\u0163\x03\x02\x02\x02\u0166\u018D\x07\x05\x02\x02\u0167" +
        "\u0168\x07\x03\x02\x02\u0168\u016C\x07\x15\x02\x02\u0169\u016B\x054\x1B" +
        "\x02\u016A\u0169\x03\x02\x02\x02\u016B\u016E\x03\x02\x02\x02\u016C\u016A" +
        "\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016F\x03\x02\x02\x02" +
        "\u016E\u016C\x03\x02\x02\x02\u016F\u018D\x07\x05\x02\x02\u0170\u0171\x07" +
        "\x03\x02\x02\u0171\u0172\x07\x16\x02\x02\u0172\u0173\x054\x1B\x02\u0173" +
        "\u0174\x07\x05\x02\x02\u0174\u018D\x03\x02\x02\x02\u0175\u0176\x07\x03" +
        "\x02\x02\u0176\u0177\x07\x17\x02\x02\u0177\u0178\x054\x1B\x02\u0178\u0179" +
        "\x054\x1B\x02\u0179\u017A\x07\x05\x02\x02\u017A\u018D\x03\x02\x02\x02" +
        "\u017B\u017C\x07\x03\x02\x02\u017C\u017D\x07\x18\x02\x02\u017D\u017E\x07" +
        "\x03\x02\x02\u017E\u017F\x05&\x14\x02\u017F\u0180\x07\x05\x02\x02\u0180" +
        "\u0181\x054\x1B\x02\u0181\u0182\x07\x05\x02\x02\u0182\u018D\x03\x02\x02" +
        "\x02\u0183\u0184\x07\x03\x02\x02\u0184\u0185\x07\x19\x02\x02\u0185\u0186" +
        "\x07\x03\x02\x02\u0186\u0187\x05&\x14\x02\u0187\u0188\x07\x05\x02\x02" +
        "\u0188\u0189\x054\x1B\x02\u0189\u018A\x07\x05\x02\x02\u018A\u018D\x03" +
        "\x02\x02\x02\u018B\u018D\x056\x1C\x02\u018C\u015D\x03\x02\x02\x02\u018C" +
        "\u015E\x03\x02\x02\x02\u018C\u0167\x03\x02\x02\x02\u018C\u0170\x03\x02" +
        "\x02\x02\u018C\u0175\x03\x02\x02\x02\u018C\u017B\x03\x02\x02\x02\u018C" +
        "\u0183\x03\x02\x02\x02\u018C\u018B\x03\x02\x02\x02\u018D5\x03\x02\x02" +
        "\x02\u018E\u018F\x07\x03\x02\x02\u018F\u0190\x05\\/\x02\u0190\u0191\x05" +
        "L\'\x02\u0191\u0192\x05L\'\x02\u0192\u0193\x07\x05\x02\x02\u01937\x03" +
        "\x02\x02\x02\u0194\u0195\x07\x03\x02\x02\u0195\u0199\x05$\x13\x02\u0196" +
        "\u0198\x05:\x1E\x02\u0197\u0196\x03\x02\x02\x02\u0198\u019B\x03\x02\x02" +
        "\x02\u0199\u0197\x03\x02\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A\u019C" +
        "\x03\x02\x02\x02\u019B\u0199\x03\x02\x02\x02\u019C\u019D\x07\x05\x02\x02" +
        "\u019D9\x03\x02\x02\x02\u019E\u019F\t\x02\x02\x02\u019F;\x03\x02\x02\x02" +
        "\u01A0\u01A1\x07\x03\x02\x02\u01A1\u01A2\x07\x1A\x02\x02\u01A2\u01A3\x05" +
        "0\x19\x02\u01A3\u01A4\x07\x11\x02\x02\u01A4\u01A5\x07\x03\x02\x02\u01A5" +
        "\u01A6\x05&\x14\x02\u01A6\u01A7\x07\x05\x02\x02\u01A7\u01A8\x05> \x02" +
        "\u01A8\u01A9\x07\x05\x02\x02\u01A9=\x03\x02\x02\x02\u01AA\u01AB\x07\x1B" +
        "\x02\x02\u01AB\u01B9\x05`1\x02\u01AC\u01B0\x07\x1C\x02\x02\u01AD\u01AE" +
        "\x07\x03\x02\x02\u01AE\u01B1\x07\x05\x02\x02\u01AF\u01B1\x05@!\x02\u01B0" +
        "\u01AD\x03\x02\x02\x02\u01B0\u01AF\x03\x02\x02\x02\u01B1\u01B9\x03\x02" +
        "\x02\x02\u01B2\u01B6\x07\x13\x02\x02\u01B3\u01B4\x07\x03\x02\x02\u01B4" +
        "\u01B7\x07\x05\x02\x02\u01B5\u01B7\x05h5\x02\u01B6\u01B3\x03\x02\x02\x02" +
        "\u01B6\u01B5\x03\x02\x02\x02\u01B7\u01B9\x03\x02\x02\x02\u01B8\u01AA\x03" +
        "\x02\x02\x02\u01B8\u01AC\x03\x02\x02\x02\u01B8\u01B2\x03\x02\x02\x02\u01B9" +
        "?\x03\x02\x02\x02\u01BA\u01CD\x05B\"\x02\u01BB\u01BC\x07\x03\x02\x02\u01BC" +
        "\u01C0\x07\x14\x02\x02\u01BD\u01BF\x05@!\x02\u01BE\u01BD\x03\x02\x02\x02" +
        "\u01BF\u01C2\x03\x02\x02\x02\u01C0\u01BE\x03\x02\x02\x02\u01C0\u01C1\x03" +
        "\x02\x02\x02\u01C1\u01C3\x03\x02\x02\x02\u01C2\u01C0\x03\x02\x02\x02\u01C3" +
        "\u01CD\x07\x05\x02\x02\u01C4\u01C5\x07\x03\x02\x02\u01C5\u01C6\x07\x19" +
        "\x02\x02\u01C6\u01C7\x07\x03\x02\x02\u01C7\u01C8\x05&\x14\x02\u01C8\u01C9" +
        "\x07\x05\x02\x02\u01C9\u01CA\x05@!\x02\u01CA\u01CB\x07\x05\x02\x02\u01CB" +
        "\u01CD\x03\x02\x02\x02\u01CC\u01BA\x03\x02\x02\x02\u01CC\u01BB\x03\x02" +
        "\x02\x02\u01CC\u01C4\x03\x02\x02\x02\u01CDA\x03\x02\x02\x02\u01CE\u01D8" +
        "\x05D#\x02\u01CF\u01D0\x07\x03\x02\x02\u01D0\u01D2\x07\x1D\x02\x02\u01D1" +
        "\u01D3\x07o\x02\x02\u01D2\u01D1\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02" +
        "\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01D5\x05D#\x02\u01D5\u01D6\x07" +
        "\x05\x02\x02\u01D6\u01D8\x03\x02\x02\x02\u01D7\u01CE\x03\x02\x02\x02\u01D7" +
        "\u01CF\x03\x02\x02\x02\u01D8C\x03\x02\x02\x02\u01D9\u01DA\x07\x03\x02" +
        "\x02\u01DA\u01DB\x07\x1E\x02\x02\u01DB\u01DC\x05F$\x02\u01DC\u01DD\x05" +
        "4\x1B\x02\u01DD\u01DE\x07\x05\x02\x02\u01DE\u01E6\x03\x02\x02\x02\u01DF" +
        "\u01E0\x07\x03\x02\x02\u01E0\u01E1\x07\x1F\x02\x02\u01E1\u01E2\x05H%\x02" +
        "\u01E2\u01E3\x054\x1B\x02\u01E3\u01E4\x07\x05\x02\x02\u01E4\u01E6\x03" +
        "\x02\x02\x02\u01E5\u01D9\x03\x02\x02\x02\u01E5\u01DF\x03\x02\x02\x02\u01E6" +
        "E\x03\x02\x02\x02\u01E7\u01E8\t\x03\x02\x02\u01E8G\x03\x02\x02\x02\u01E9" +
        "\u01EA\x07\"\x02\x02\u01EAI\x03\x02\x02\x02\u01EB\u01EC\x07\x03\x02\x02" +
        "\u01EC\u01ED\x07#\x02";
    PddlParser._serializedATNSegment1 = "\x02\u01ED\u01EE\x05&\x14\x02\u01EE\u01EF\x054\x1B\x02\u01EF\u01F0\x07" +
        "\x05\x02\x02\u01F0K\x03\x02\x02\x02\u01F1\u01FF\x07q\x02\x02\u01F2\u01F3" +
        "\x07\x03\x02\x02\u01F3\u01F4\x05Z.\x02\u01F4\u01F5\x05L\'\x02\u01F5\u01F6" +
        "\x05N(\x02\u01F6\u01F7\x07\x05\x02\x02\u01F7\u01FF\x03\x02\x02\x02\u01F8" +
        "\u01F9\x07\x03\x02\x02\u01F9\u01FA\x07\t\x02\x02\u01FA\u01FB\x05L\'\x02" +
        "\u01FB\u01FC\x07\x05\x02\x02\u01FC\u01FF\x03\x02\x02\x02\u01FD\u01FF\x05" +
        "P)\x02\u01FE\u01F1\x03\x02\x02\x02\u01FE\u01F2\x03\x02\x02\x02\u01FE\u01F8" +
        "\x03\x02\x02\x02\u01FE\u01FD\x03\x02\x02\x02\u01FFM\x03\x02\x02\x02\u0200" +
        "\u0201\x05L\'\x02\u0201O\x03\x02\x02\x02\u0202\u0203\x07\x03\x02\x02\u0203" +
        "\u0207\x05\x1A\x0E\x02\u0204\u0206\x05:\x1E\x02\u0205\u0204\x03\x02\x02" +
        "\x02\u0206\u0209\x03\x02\x02\x02\u0207\u0205\x03\x02\x02\x02\u0207\u0208" +
        "\x03\x02\x02\x02\u0208\u020A\x03\x02\x02\x02\u0209\u0207\x03\x02\x02\x02" +
        "\u020A\u020B\x07\x05\x02\x02\u020B\u020E\x03\x02\x02\x02\u020C\u020E\x05" +
        "\x1A\x0E\x02\u020D\u0202\x03\x02\x02\x02\u020D\u020C\x03\x02\x02\x02\u020E" +
        "Q\x03\x02\x02\x02\u020F\u0210\x07\x03\x02\x02\u0210\u0214\x07\x14\x02" +
        "\x02\u0211\u0213\x05T+\x02\u0212\u0211\x03\x02\x02\x02\u0213\u0216\x03" +
        "\x02\x02\x02\u0214\u0212\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215" +
        "\u0217\x03\x02\x02\x02\u0216\u0214\x03\x02\x02\x02\u0217\u021A\x07\x05" +
        "\x02\x02\u0218\u021A\x05T+\x02\u0219\u020F\x03\x02\x02\x02\u0219\u0218" +
        "\x03\x02\x02\x02\u021AS\x03\x02\x02\x02\u021B\u021C\x07\x03\x02\x02\u021C" +
        "\u021D\x07\x19\x02\x02\u021D\u021E\x07\x03\x02\x02\u021E\u021F\x05&\x14" +
        "\x02\u021F\u0220\x07\x05\x02\x02\u0220\u0221\x05R*\x02\u0221\u0222\x07" +
        "\x05\x02\x02\u0222\u022B\x03\x02\x02\x02\u0223\u0224\x07\x03\x02\x02\u0224" +
        "\u0225\x07$\x02\x02\u0225\u0226\x054\x1B\x02\u0226\u0227\x05X-\x02\u0227" +
        "\u0228\x07\x05\x02\x02\u0228\u022B\x03\x02\x02\x02\u0229\u022B\x05V,\x02" +
        "\u022A\u021B\x03\x02\x02\x02\u022A\u0223\x03\x02\x02\x02\u022A\u0229\x03" +
        "\x02\x02\x02\u022BU\x03\x02\x02\x02\u022C\u022D\x07\x03\x02\x02\u022D" +
        "\u022E\x05^0\x02\u022E\u022F\x05P)\x02\u022F\u0230\x05L\'\x02\u0230\u0231" +
        "\x07\x05\x02\x02\u0231\u0239\x03\x02\x02\x02\u0232\u0233\x07\x03\x02\x02" +
        "\u0233\u0234\x07\x16\x02\x02\u0234\u0235\x058\x1D\x02\u0235\u0236\x07" +
        "\x05\x02\x02\u0236\u0239\x03\x02\x02\x02\u0237\u0239\x058\x1D\x02\u0238" +
        "\u022C\x03\x02\x02\x02\u0238\u0232\x03\x02\x02\x02\u0238\u0237\x03\x02" +
        "\x02\x02\u0239W\x03\x02\x02\x02\u023A\u023B\x07\x03\x02\x02\u023B\u023F" +
        "\x07\x14\x02\x02\u023C\u023E\x05V,\x02\u023D\u023C\x03\x02\x02\x02\u023E" +
        "\u0241\x03\x02\x02\x02\u023F\u023D\x03\x02\x02\x02\u023F\u0240\x03\x02" +
        "\x02\x02\u0240\u0242\x03\x02\x02\x02\u0241\u023F\x03\x02\x02\x02\u0242" +
        "\u0245\x07\x05\x02\x02\u0243\u0245\x05V,\x02\u0244\u023A\x03\x02\x02\x02" +
        "\u0244\u0243\x03\x02\x02\x02\u0245Y\x03\x02\x02\x02\u0246\u0247\t\x04" +
        "\x02\x02\u0247[\x03\x02\x02\x02\u0248\u0249\t\x05\x02\x02\u0249]\x03\x02" +
        "\x02\x02\u024A\u024B\t\x06\x02\x02\u024B_\x03\x02\x02\x02\u024C\u024D" +
        "\x07\x03\x02\x02\u024D\u024F\x07\x14\x02\x02\u024E\u0250\x05b2\x02\u024F" +
        "\u024E\x03\x02\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251\u024F\x03\x02" +
        "\x02\x02\u0251\u0252\x03\x02\x02\x02\u0252\u0253\x03\x02\x02\x02\u0253" +
        "\u0254\x07\x05\x02\x02\u0254\u0259\x03\x02\x02\x02\u0255\u0256\x07\x03" +
        "\x02\x02\u0256\u0259\x07\x05\x02\x02\u0257\u0259\x05b2\x02\u0258\u024C" +
        "\x03\x02\x02\x02\u0258\u0255\x03\x02\x02\x02\u0258\u0257\x03\x02\x02\x02" +
        "\u0259a\x03\x02\x02\x02\u025A\u025B\x07\x03\x02\x02\u025B\u025C\x05d3" +
        "\x02\u025C\u025D\x072\x02\x02\u025D\u025E\x05f4\x02\u025E\u025F\x07\x05" +
        "\x02\x02\u025F\u0267\x03\x02\x02\x02\u0260\u0261\x07\x03\x02\x02\u0261" +
        "\u0262\x07\x1E\x02\x02\u0262\u0263\x05F$\x02\u0263\u0264\x05b2\x02\u0264" +
        "\u0265\x07\x05\x02\x02\u0265\u0267\x03\x02\x02\x02\u0266\u025A\x03\x02" +
        "\x02\x02\u0266\u0260\x03\x02\x02\x02\u0267c\x03\x02\x02\x02\u0268\u0269" +
        "\t\x07\x02\x02\u0269e\x03\x02\x02\x02\u026A\u026D\x07q\x02\x02\u026B\u026D" +
        "\x05L\'\x02\u026C\u026A\x03\x02\x02\x02\u026C\u026B\x03\x02\x02\x02\u026D" +
        "g\x03\x02\x02\x02\u026E\u026F\x07\x03\x02\x02\u026F\u0273\x07\x14\x02" +
        "\x02\u0270\u0272\x05h5\x02\u0271\u0270\x03\x02\x02\x02\u0272\u0275\x03" +
        "\x02\x02\x02\u0273\u0271\x03\x02\x02\x02\u0273\u0274\x03\x02\x02\x02\u0274" +
        "\u0276\x03\x02\x02\x02\u0275\u0273\x03\x02\x02\x02\u0276\u028D\x07\x05" +
        "\x02\x02\u0277\u028D\x05j6\x02\u0278\u0279\x07\x03\x02\x02\u0279\u027A" +
        "\x07\x19\x02\x02\u027A\u027B\x07\x03\x02\x02\u027B\u027C\x05&\x14\x02" +
        "\u027C\u027D\x07\x05\x02\x02\u027D\u027E\x05h5\x02\u027E\u027F\x07\x05" +
        "\x02\x02\u027F\u028D\x03\x02\x02\x02\u0280\u0281\x07\x03\x02\x02\u0281" +
        "\u0282\x07$\x02\x02\u0282\u0283\x05@!\x02\u0283\u0284\x05j6\x02\u0284" +
        "\u0285\x07\x05\x02\x02\u0285\u028D\x03\x02\x02\x02\u0286\u0287\x07\x03" +
        "\x02\x02\u0287\u0288\x05^0\x02\u0288\u0289\x05P)\x02\u0289\u028A\x05n" +
        "8\x02\u028A\u028B\x07\x05\x02\x02\u028B\u028D\x03\x02\x02\x02\u028C\u026E" +
        "\x03\x02\x02\x02\u028C\u0277\x03\x02\x02\x02\u028C\u0278\x03\x02\x02\x02" +
        "\u028C\u0280\x03\x02\x02\x02\u028C\u0286\x03\x02\x02\x02\u028Di\x03\x02" +
        "\x02\x02\u028E\u028F\x07\x03\x02\x02\u028F\u0290\x07\x1E\x02\x02\u0290" +
        "\u0291\x05F$\x02\u0291\u0292\x05h5\x02\u0292\u0293\x07\x05\x02\x02\u0293" +
        "\u02A1\x03\x02\x02\x02\u0294\u0295\x07\x03\x02\x02\u0295\u0296\x07\x1E" +
        "\x02\x02\u0296\u0297\x05F$\x02\u0297\u0298\x05l7\x02\u0298\u0299\x07\x05" +
        "\x02\x02\u0299\u02A1\x03\x02\x02\x02\u029A\u029B\x07\x03\x02\x02\u029B" +
        "\u029C\x05^0\x02\u029C\u029D\x05P)\x02\u029D\u029E\x05L\'\x02\u029E\u029F" +
        "\x07\x05\x02\x02\u029F\u02A1\x03\x02\x02\x02\u02A0\u028E\x03\x02\x02\x02" +
        "\u02A0\u0294\x03\x02\x02\x02\u02A0\u029A\x03\x02\x02\x02\u02A1k\x03\x02" +
        "\x02\x02\u02A2\u02A3\x07\x03\x02\x02\u02A3\u02A4\x05^0\x02\u02A4\u02A5" +
        "\x05P)\x02\u02A5\u02A6\x05n8\x02\u02A6\u02A7\x07\x05\x02\x02\u02A7m\x03" +
        "\x02\x02\x02\u02A8\u02AF\x07\x03\x02\x02\u02A9\u02AA\x05Z.\x02\u02AA\u02AB" +
        "\x05n8\x02\u02AB\u02AC\x05n8\x02\u02AC\u02B0\x03\x02\x02\x02\u02AD\u02AE" +
        "\x07\t\x02\x02\u02AE\u02B0\x05n8\x02\u02AF\u02A9\x03\x02\x02\x02\u02AF" +
        "\u02AD\x03\x02\x02\x02\u02B0\u02B1\x03\x02\x02\x02\u02B1\u02B2\x07\x05" +
        "\x02\x02\u02B2\u02B6\x03\x02\x02\x02\u02B3\u02B6\x072\x02\x02\u02B4\u02B6" +
        "\x05L\'\x02\u02B5\u02A8\x03\x02\x02\x02\u02B5\u02B3\x03\x02\x02\x02\u02B5" +
        "\u02B4\x03\x02\x02\x02\u02B6o\x03\x02\x02\x02\u02B7\u02B8\x07\x03\x02" +
        "\x02\u02B8\u02B9\x07\x04\x02\x02\u02B9\u02BA\x05r:\x02\u02BA\u02BC\x05" +
        "t;\x02\u02BB\u02BD\x05\b\x05\x02\u02BC\u02BB\x03\x02\x02\x02\u02BC\u02BD" +
        "\x03\x02\x02\x02\u02BD\u02BF\x03\x02\x02\x02\u02BE\u02C0\x05v<\x02\u02BF" +
        "\u02BE\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0\u02C1\x03\x02" +
        "\x02\x02\u02C1\u02C2\x05x=\x02\u02C2\u02C4\x05\x80A\x02\u02C3\u02C5\x05" +
        "\x82B\x02\u02C4\u02C3\x03\x02\x02\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5" +
        "\u02C7\x03\x02\x02\x02\u02C6\u02C8\x05\x86D\x02\u02C7\u02C6\x03\x02\x02" +
        "\x02\u02C7\u02C8\x03\x02\x02\x02\u02C8q\x03\x02\x02\x02\u02C9\u02CA\x07" +
        "\x03\x02\x02\u02CA\u02CB\x073\x02\x02\u02CB\u02CC\x07o\x02\x02\u02CC\u02CD" +
        "\x07\x05\x02\x02\u02CDs\x03\x02\x02\x02\u02CE\u02CF\x07\x03\x02\x02\u02CF" +
        "\u02D0\x074\x02\x02\u02D0\u02D1\x07o\x02\x02\u02D1\u02D2\x07\x05\x02\x02" +
        "\u02D2u\x03\x02\x02\x02\u02D3\u02D4\x07\x03\x02\x02\u02D4\u02D5\x075\x02" +
        "\x02\u02D5\u02D6\x05\f\x07\x02\u02D6\u02D7\x07\x05\x02\x02\u02D7w\x03" +
        "\x02\x02\x02\u02D8\u02D9\x07\x03\x02\x02\u02D9\u02DD\x076\x02\x02\u02DA" +
        "\u02DC\x05z>\x02\u02DB\u02DA\x03\x02\x02\x02\u02DC\u02DF\x03\x02\x02\x02" +
        "\u02DD\u02DB\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DE\u02E0\x03" +
        "\x02\x02\x02\u02DF\u02DD\x03\x02\x02\x02\u02E0\u02E1\x07\x05\x02\x02\u02E1" +
        "y\x03\x02\x02\x02\u02E2\u02F0\x05|?\x02\u02E3\u02E4\x07\x03\x02\x02\u02E4" +
        "\u02E5\x07*\x02\x02\u02E5\u02E6\x05P)\x02\u02E6\u02E7\x07q\x02\x02\u02E7" +
        "\u02E8\x07\x05\x02\x02\u02E8\u02F0\x03\x02\x02\x02\u02E9\u02EA\x07\x03" +
        "\x02\x02\u02EA\u02EB\x07\x1E\x02\x02\u02EB\u02EC\x07q\x02\x02\u02EC\u02ED" +
        "\x05|?\x02\u02ED\u02EE\x07\x05\x02\x02\u02EE\u02F0\x03\x02\x02\x02\u02EF" +
        "\u02E2\x03\x02\x02\x02\u02EF\u02E3\x03\x02\x02\x02\u02EF\u02E9\x03\x02" +
        "\x02\x02\u02F0{\x03\x02\x02\x02\u02F1\u02F8\x05~@\x02\u02F2\u02F3\x07" +
        "\x03\x02\x02\u02F3\u02F4\x07\x16\x02\x02\u02F4\u02F5\x05~@\x02\u02F5\u02F6" +
        "\x07\x05\x02\x02\u02F6\u02F8\x03\x02\x02\x02\u02F7\u02F1\x03\x02\x02\x02" +
        "\u02F7\u02F2\x03\x02\x02\x02\u02F8}\x03\x02\x02\x02\u02F9\u02FA\x07\x03" +
        "\x02\x02\u02FA\u02FE\x05$\x13\x02\u02FB\u02FD\x07o\x02\x02\u02FC\u02FB" +
        "\x03\x02\x02\x02\u02FD\u0300\x03\x02\x02\x02\u02FE\u02FC\x03\x02\x02\x02" +
        "\u02FE\u02FF\x03\x02\x02\x02\u02FF\u0301\x03\x02\x02\x02\u0300\u02FE\x03" +
        "\x02\x02\x02\u0301\u0302\x07\x05\x02\x02\u0302\x7F\x03\x02\x02\x02\u0303" +
        "\u0304\x07\x03\x02\x02\u0304\u0305\x077\x02\x02\u0305\u0306\x054\x1B\x02" +
        "\u0306\u0307\x07\x05\x02\x02\u0307\x81\x03\x02\x02\x02\u0308\u0309\x07" +
        "\x03\x02\x02\u0309\u030A\x07\x0F\x02\x02\u030A\u030B\x05\x84C\x02\u030B" +
        "\u030C\x07\x05\x02\x02\u030C\x83\x03\x02\x02\x02\u030D\u030E\x07\x03\x02" +
        "\x02\u030E\u0312\x07\x14\x02\x02\u030F\u0311\x05\x84C\x02\u0310\u030F" +
        "\x03\x02\x02\x02\u0311\u0314\x03\x02\x02\x02\u0312\u0310\x03\x02\x02\x02" +
        "\u0312\u0313\x03\x02\x02\x02\u0313\u0315\x03\x02\x02\x02\u0314\u0312\x03" +
        "\x02\x02\x02\u0315\u0328\x07\x05\x02\x02\u0316\u0317\x07\x03\x02\x02\u0317" +
        "\u0318\x07\x19\x02\x02\u0318\u0319\x07\x03\x02\x02\u0319\u031A\x05&\x14" +
        "\x02\u031A\u031B\x07\x05\x02\x02\u031B\u031C\x05\x84C\x02\u031C\u031D" +
        "\x07\x05\x02\x02\u031D\u0328\x03\x02\x02\x02\u031E\u031F\x07\x03\x02\x02" +
        "\u031F\u0321\x07\x1D\x02\x02\u0320\u0322\x07o\x02\x02\u0321\u0320\x03" +
        "\x02\x02\x02\u0321\u0322\x03\x02\x02\x02\u0322\u0323\x03\x02\x02\x02\u0323" +
        "\u0324\x05\x8CG\x02\u0324\u0325\x07\x05\x02\x02\u0325\u0328\x03\x02\x02" +
        "\x02\u0326\u0328\x05\x8CG\x02\u0327\u030D\x03\x02\x02\x02\u0327\u0316" +
        "\x03\x02\x02\x02\u0327\u031E\x03\x02\x02\x02\u0327\u0326\x03\x02\x02\x02" +
        "\u0328\x85\x03\x02\x02\x02\u0329\u032A\x07\x03\x02\x02\u032A\u032B\x07" +
        "8\x02\x02\u032B\u032C\x05\x88E\x02\u032C\u032D\x05\x8AF\x02\u032D\u032E" +
        "\x07\x05\x02\x02\u032E\x87\x03\x02\x02\x02\u032F\u0330\t\b\x02\x02\u0330" +
        "\x89\x03\x02\x02\x02\u0331\u0332\x07\x03\x02\x02\u0332\u0333\x05Z.\x02" +
        "\u0333\u0334\x05\x8AF\x02\u0334\u0335\x05\x8AF\x02\u0335\u0336\x07\x05" +
        "\x02\x02\u0336\u0358\x03\x02\x02\x02\u0337\u0338\x07\x03\x02\x02\u0338" +
        "\u0339\t\t\x02\x02\u0339\u033B\x05\x8AF\x02\u033A\u033C\x05\x8AF\x02\u033B" +
        "\u033A\x03\x02\x02\x02\u033C\u033D\x03\x02\x02\x02\u033D\u033B\x03\x02" +
        "\x02\x02\u033D\u033E\x03\x02\x02\x02\u033E\u033F\x03\x02\x02\x02\u033F" +
        "\u0340\x07\x05\x02\x02\u0340\u0358\x03\x02\x02\x02\u0341\u0342\x07\x03" +
        "\x02\x02\u0342\u0343\x07\t\x02\x02\u0343\u0344\x05\x8AF\x02\u0344\u0345" +
        "\x07\x05\x02\x02\u0345\u0358\x03\x02\x02\x02\u0346\u0358\x07q\x02\x02" +
        "\u0347\u0348\x07\x03\x02\x02\u0348\u034C\x05\x1A\x0E\x02\u0349\u034B\x07" +
        "o\x02\x02\u034A\u0349\x03\x02\x02\x02\u034B\u034E\x03\x02\x02\x02\u034C" +
        "\u034A\x03\x02\x02\x02\u034C\u034D\x03\x02\x02\x02\u034D\u034F\x03\x02" +
        "\x02\x02\u034E\u034C\x03\x02\x02\x02\u034F\u0350\x07\x05\x02\x02\u0350" +
        "\u0358\x03\x02\x02\x02\u0351\u0358\x05\x1A\x0E\x02\u0352\u0358\x07;\x02" +
        "\x02\u0353\u0354\x07\x03\x02\x02\u0354\u0355\x07<\x02\x02\u0355\u0356" +
        "\x07o\x02\x02\u0356\u0358\x07\x05\x02\x02\u0357\u0331\x03\x02\x02\x02" +
        "\u0357\u0337\x03\x02\x02\x02\u0357\u0341\x03\x02\x02\x02\u0357\u0346\x03" +
        "\x02\x02\x02\u0357\u0347\x03\x02\x02\x02\u0357\u0351\x03\x02\x02\x02\u0357" +
        "\u0352\x03\x02\x02\x02\u0357\u0353\x03\x02\x02\x02\u0358\x8B\x03\x02\x02" +
        "\x02\u0359\u035A\x07\x03\x02\x02\u035A\u035E\x07\x14\x02\x02\u035B\u035D" +
        "\x05\x8CG\x02\u035C\u035B\x03\x02\x02\x02\u035D\u0360\x03\x02\x02\x02" +
        "\u035E\u035C\x03\x02\x02\x02\u035E\u035F\x03\x02\x02\x02\u035F\u0361\x03" +
        "\x02\x02\x02\u0360\u035E\x03\x02\x02\x02\u0361\u03A6\x07\x05\x02\x02\u0362" +
        "\u0363\x07\x03\x02\x02\u0363\u0364\x07\x19\x02\x02\u0364\u0365\x07\x03" +
        "\x02\x02\u0365\u0366\x05&\x14\x02\u0366\u0367\x07\x05\x02\x02\u0367\u0368" +
        "\x05\x8CG\x02\u0368\u0369\x07\x05\x02\x02\u0369\u03A6\x03\x02\x02\x02" +
        "\u036A\u036B\x07\x03\x02\x02\u036B\u036C\x07\x1E\x02\x02\u036C\u036D\x07" +
        "!\x02\x02\u036D\u036E\x054\x1B\x02\u036E\u036F\x07\x05\x02\x02\u036F\u03A6" +
        "\x03\x02\x02\x02\u0370\u0371\x07\x03\x02\x02\u0371\u0372\x07=\x02\x02" +
        "\u0372\u0373\x054\x1B\x02\u0373\u0374\x07\x05\x02\x02\u0374\u03A6\x03" +
        "\x02\x02\x02\u0375\u0376\x07\x03\x02\x02\u0376\u0377\x07>\x02\x02\u0377" +
        "\u0378\x054\x1B\x02\u0378\u0379\x07\x05\x02\x02\u0379\u03A6\x03\x02\x02" +
        "\x02\u037A\u037B\x07\x03\x02\x02\u037B\u037C\x07?\x02\x02\u037C\u037D" +
        "\x07q\x02\x02\u037D\u037E\x054\x1B\x02\u037E\u037F\x07\x05\x02\x02\u037F" +
        "\u03A6\x03\x02\x02\x02\u0380\u0381\x07\x03\x02\x02\u0381\u0382\x07@\x02" +
        "\x02\u0382\u0383\x054\x1B\x02\u0383\u0384\x07\x05\x02\x02\u0384\u03A6" +
        "\x03\x02\x02\x02\u0385\u0386\x07\x03\x02\x02\u0386\u0387\x07A\x02\x02" +
        "\u0387\u0388\x054\x1B\x02\u0388\u0389\x054\x1B\x02\u0389\u038A\x07\x05" +
        "\x02\x02\u038A\u03A6\x03\x02\x02\x02\u038B\u038C\x07\x03\x02\x02\u038C" +
        "\u038D\x07B\x02\x02\u038D\u038E\x054\x1B\x02\u038E\u038F\x054\x1B\x02" +
        "\u038F\u0390\x07\x05\x02\x02\u0390\u03A6\x03\x02\x02\x02\u0391\u0392\x07" +
        "\x03\x02\x02\u0392\u0393\x07C\x02\x02\u0393\u0394\x07q\x02\x02\u0394\u0395" +
        "\x054\x1B\x02\u0395\u0396\x054\x1B\x02\u0396\u0397\x07\x05\x02\x02\u0397" +
        "\u03A6\x03\x02\x02\x02\u0398\u0399\x07\x03\x02\x02\u0399\u039A\x07D\x02" +
        "\x02\u039A\u039B\x07q\x02\x02\u039B\u039C\x07q\x02\x02\u039C\u039D\x05" +
        "4\x1B\x02\u039D\u039E\x07\x05\x02\x02\u039E\u03A6\x03\x02\x02\x02\u039F" +
        "\u03A0\x07\x03\x02\x02\u03A0\u03A1\x07E\x02\x02\u03A1\u03A2\x07q\x02\x02" +
        "\u03A2\u03A3\x054\x1B\x02\u03A3\u03A4\x07\x05\x02\x02\u03A4\u03A6\x03" +
        "\x02\x02\x02\u03A5\u0359\x03\x02\x02\x02\u03A5\u0362\x03\x02\x02\x02\u03A5" +
        "\u036A\x03\x02\x02\x02\u03A5\u0370\x03\x02\x02\x02\u03A5\u0375\x03\x02" +
        "\x02\x02\u03A5\u037A\x03\x02\x02\x02\u03A5\u0380\x03\x02\x02\x02\u03A5" +
        "\u0385\x03\x02\x02\x02\u03A5\u038B\x03\x02\x02\x02\u03A5\u0391\x03\x02" +
        "\x02\x02\u03A5\u0398\x03\x02\x02\x02\u03A5\u039F\x03\x02\x02\x02\u03A6" +
        "\x8D\x03\x02\x02\x02N\x90\x96\x99\x9C\x9F\xA2\xA5\xAA\xB9\xC5\xCB\xD0" +
        "\xD3\xD8\xE2\xE7\xF3\xF7\xFB\u0111\u011F\u0125\u012A\u012D\u0132\u013F" +
        "\u0151\u0153\u0159\u015B\u0163\u016C\u018C\u0199\u01B0\u01B6\u01B8\u01C0" +
        "\u01CC\u01D2\u01D7\u01E5\u01FE\u0207\u020D\u0214\u0219\u022A\u0238\u023F" +
        "\u0244\u0251\u0258\u0266\u026C\u0273\u028C\u02A0\u02AF\u02B5\u02BC\u02BF" +
        "\u02C4\u02C7\u02DD\u02EF\u02F7\u02FE\u0312\u0321\u0327\u033D\u034C\u0357" +
        "\u035E\u03A5";
    PddlParser._serializedATN = Utils.join([
        PddlParser._serializedATNSegment0,
        PddlParser._serializedATNSegment1,
    ], "");
    return PddlParser;
}(Parser_1.Parser));
exports.PddlParser = PddlParser;
var PddlDocContext = /** @class */ (function (_super) {
    __extends(PddlDocContext, _super);
    function PddlDocContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PddlDocContext.prototype.domain = function () {
        return this.tryGetRuleContext(0, DomainContext);
    };
    PddlDocContext.prototype.problem = function () {
        return this.tryGetRuleContext(0, ProblemContext);
    };
    Object.defineProperty(PddlDocContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_pddlDoc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PddlDocContext.prototype.enterRule = function (listener) {
        if (listener.enterPddlDoc) {
            listener.enterPddlDoc(this);
        }
    };
    // @Override
    PddlDocContext.prototype.exitRule = function (listener) {
        if (listener.exitPddlDoc) {
            listener.exitPddlDoc(this);
        }
    };
    // @Override
    PddlDocContext.prototype.accept = function (visitor) {
        if (visitor.visitPddlDoc) {
            return visitor.visitPddlDoc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PddlDocContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PddlDocContext = PddlDocContext;
var DomainContext = /** @class */ (function (_super) {
    __extends(DomainContext, _super);
    function DomainContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DomainContext.prototype.domainName = function () {
        return this.getRuleContext(0, DomainNameContext);
    };
    DomainContext.prototype.requireDef = function () {
        return this.tryGetRuleContext(0, RequireDefContext);
    };
    DomainContext.prototype.typesDef = function () {
        return this.tryGetRuleContext(0, TypesDefContext);
    };
    DomainContext.prototype.constantsDef = function () {
        return this.tryGetRuleContext(0, ConstantsDefContext);
    };
    DomainContext.prototype.predicatesDef = function () {
        return this.tryGetRuleContext(0, PredicatesDefContext);
    };
    DomainContext.prototype.functionsDef = function () {
        return this.tryGetRuleContext(0, FunctionsDefContext);
    };
    DomainContext.prototype.constraints = function () {
        return this.tryGetRuleContext(0, ConstraintsContext);
    };
    DomainContext.prototype.structureDef = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StructureDefContext);
        }
        else {
            return this.getRuleContext(i, StructureDefContext);
        }
    };
    Object.defineProperty(DomainContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_domain; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DomainContext.prototype.enterRule = function (listener) {
        if (listener.enterDomain) {
            listener.enterDomain(this);
        }
    };
    // @Override
    DomainContext.prototype.exitRule = function (listener) {
        if (listener.exitDomain) {
            listener.exitDomain(this);
        }
    };
    // @Override
    DomainContext.prototype.accept = function (visitor) {
        if (visitor.visitDomain) {
            return visitor.visitDomain(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DomainContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DomainContext = DomainContext;
var DomainNameContext = /** @class */ (function (_super) {
    __extends(DomainNameContext, _super);
    function DomainNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DomainNameContext.prototype.NAME = function () { return this.getToken(PddlParser.NAME, 0); };
    Object.defineProperty(DomainNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_domainName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DomainNameContext.prototype.enterRule = function (listener) {
        if (listener.enterDomainName) {
            listener.enterDomainName(this);
        }
    };
    // @Override
    DomainNameContext.prototype.exitRule = function (listener) {
        if (listener.exitDomainName) {
            listener.exitDomainName(this);
        }
    };
    // @Override
    DomainNameContext.prototype.accept = function (visitor) {
        if (visitor.visitDomainName) {
            return visitor.visitDomainName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DomainNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DomainNameContext = DomainNameContext;
var RequireDefContext = /** @class */ (function (_super) {
    __extends(RequireDefContext, _super);
    function RequireDefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RequireDefContext.prototype.REQUIRE_KEY = function (i) {
        if (i === undefined) {
            return this.getTokens(PddlParser.REQUIRE_KEY);
        }
        else {
            return this.getToken(PddlParser.REQUIRE_KEY, i);
        }
    };
    Object.defineProperty(RequireDefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_requireDef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RequireDefContext.prototype.enterRule = function (listener) {
        if (listener.enterRequireDef) {
            listener.enterRequireDef(this);
        }
    };
    // @Override
    RequireDefContext.prototype.exitRule = function (listener) {
        if (listener.exitRequireDef) {
            listener.exitRequireDef(this);
        }
    };
    // @Override
    RequireDefContext.prototype.accept = function (visitor) {
        if (visitor.visitRequireDef) {
            return visitor.visitRequireDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RequireDefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RequireDefContext = RequireDefContext;
var TypesDefContext = /** @class */ (function (_super) {
    __extends(TypesDefContext, _super);
    function TypesDefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypesDefContext.prototype.typedNameList = function () {
        return this.getRuleContext(0, TypedNameListContext);
    };
    Object.defineProperty(TypesDefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_typesDef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypesDefContext.prototype.enterRule = function (listener) {
        if (listener.enterTypesDef) {
            listener.enterTypesDef(this);
        }
    };
    // @Override
    TypesDefContext.prototype.exitRule = function (listener) {
        if (listener.exitTypesDef) {
            listener.exitTypesDef(this);
        }
    };
    // @Override
    TypesDefContext.prototype.accept = function (visitor) {
        if (visitor.visitTypesDef) {
            return visitor.visitTypesDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypesDefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypesDefContext = TypesDefContext;
var TypedNameListContext = /** @class */ (function (_super) {
    __extends(TypedNameListContext, _super);
    function TypedNameListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypedNameListContext.prototype.NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(PddlParser.NAME);
        }
        else {
            return this.getToken(PddlParser.NAME, i);
        }
    };
    TypedNameListContext.prototype.singleTypeNameList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleTypeNameListContext);
        }
        else {
            return this.getRuleContext(i, SingleTypeNameListContext);
        }
    };
    Object.defineProperty(TypedNameListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_typedNameList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypedNameListContext.prototype.enterRule = function (listener) {
        if (listener.enterTypedNameList) {
            listener.enterTypedNameList(this);
        }
    };
    // @Override
    TypedNameListContext.prototype.exitRule = function (listener) {
        if (listener.exitTypedNameList) {
            listener.exitTypedNameList(this);
        }
    };
    // @Override
    TypedNameListContext.prototype.accept = function (visitor) {
        if (visitor.visitTypedNameList) {
            return visitor.visitTypedNameList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypedNameListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypedNameListContext = TypedNameListContext;
var SingleTypeNameListContext = /** @class */ (function (_super) {
    __extends(SingleTypeNameListContext, _super);
    function SingleTypeNameListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SingleTypeNameListContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    SingleTypeNameListContext.prototype.NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(PddlParser.NAME);
        }
        else {
            return this.getToken(PddlParser.NAME, i);
        }
    };
    Object.defineProperty(SingleTypeNameListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_singleTypeNameList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SingleTypeNameListContext.prototype.enterRule = function (listener) {
        if (listener.enterSingleTypeNameList) {
            listener.enterSingleTypeNameList(this);
        }
    };
    // @Override
    SingleTypeNameListContext.prototype.exitRule = function (listener) {
        if (listener.exitSingleTypeNameList) {
            listener.exitSingleTypeNameList(this);
        }
    };
    // @Override
    SingleTypeNameListContext.prototype.accept = function (visitor) {
        if (visitor.visitSingleTypeNameList) {
            return visitor.visitSingleTypeNameList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SingleTypeNameListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SingleTypeNameListContext = SingleTypeNameListContext;
var TypeContext = /** @class */ (function (_super) {
    __extends(TypeContext, _super);
    function TypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeContext.prototype.primType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PrimTypeContext);
        }
        else {
            return this.getRuleContext(i, PrimTypeContext);
        }
    };
    Object.defineProperty(TypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_type; },
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
var PrimTypeContext = /** @class */ (function (_super) {
    __extends(PrimTypeContext, _super);
    function PrimTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrimTypeContext.prototype.NAME = function () { return this.getToken(PddlParser.NAME, 0); };
    Object.defineProperty(PrimTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_primType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrimTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterPrimType) {
            listener.enterPrimType(this);
        }
    };
    // @Override
    PrimTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitPrimType) {
            listener.exitPrimType(this);
        }
    };
    // @Override
    PrimTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitPrimType) {
            return visitor.visitPrimType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrimTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrimTypeContext = PrimTypeContext;
var FunctionsDefContext = /** @class */ (function (_super) {
    __extends(FunctionsDefContext, _super);
    function FunctionsDefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionsDefContext.prototype.functionList = function () {
        return this.getRuleContext(0, FunctionListContext);
    };
    Object.defineProperty(FunctionsDefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_functionsDef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionsDefContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionsDef) {
            listener.enterFunctionsDef(this);
        }
    };
    // @Override
    FunctionsDefContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionsDef) {
            listener.exitFunctionsDef(this);
        }
    };
    // @Override
    FunctionsDefContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionsDef) {
            return visitor.visitFunctionsDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionsDefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionsDefContext = FunctionsDefContext;
var FunctionListContext = /** @class */ (function (_super) {
    __extends(FunctionListContext, _super);
    function FunctionListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionListContext.prototype.atomicFunctionSkeleton = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AtomicFunctionSkeletonContext);
        }
        else {
            return this.getRuleContext(i, AtomicFunctionSkeletonContext);
        }
    };
    FunctionListContext.prototype.functionType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FunctionTypeContext);
        }
        else {
            return this.getRuleContext(i, FunctionTypeContext);
        }
    };
    Object.defineProperty(FunctionListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_functionList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionListContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionList) {
            listener.enterFunctionList(this);
        }
    };
    // @Override
    FunctionListContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionList) {
            listener.exitFunctionList(this);
        }
    };
    // @Override
    FunctionListContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionList) {
            return visitor.visitFunctionList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionListContext = FunctionListContext;
var AtomicFunctionSkeletonContext = /** @class */ (function (_super) {
    __extends(AtomicFunctionSkeletonContext, _super);
    function AtomicFunctionSkeletonContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtomicFunctionSkeletonContext.prototype.functionSymbol = function () {
        return this.getRuleContext(0, FunctionSymbolContext);
    };
    AtomicFunctionSkeletonContext.prototype.typedVariableList = function () {
        return this.getRuleContext(0, TypedVariableListContext);
    };
    Object.defineProperty(AtomicFunctionSkeletonContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_atomicFunctionSkeleton; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AtomicFunctionSkeletonContext.prototype.enterRule = function (listener) {
        if (listener.enterAtomicFunctionSkeleton) {
            listener.enterAtomicFunctionSkeleton(this);
        }
    };
    // @Override
    AtomicFunctionSkeletonContext.prototype.exitRule = function (listener) {
        if (listener.exitAtomicFunctionSkeleton) {
            listener.exitAtomicFunctionSkeleton(this);
        }
    };
    // @Override
    AtomicFunctionSkeletonContext.prototype.accept = function (visitor) {
        if (visitor.visitAtomicFunctionSkeleton) {
            return visitor.visitAtomicFunctionSkeleton(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtomicFunctionSkeletonContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AtomicFunctionSkeletonContext = AtomicFunctionSkeletonContext;
var FunctionSymbolContext = /** @class */ (function (_super) {
    __extends(FunctionSymbolContext, _super);
    function FunctionSymbolContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionSymbolContext.prototype.NAME = function () { return this.getToken(PddlParser.NAME, 0); };
    Object.defineProperty(FunctionSymbolContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_functionSymbol; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionSymbolContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionSymbol) {
            listener.enterFunctionSymbol(this);
        }
    };
    // @Override
    FunctionSymbolContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionSymbol) {
            listener.exitFunctionSymbol(this);
        }
    };
    // @Override
    FunctionSymbolContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionSymbol) {
            return visitor.visitFunctionSymbol(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionSymbolContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionSymbolContext = FunctionSymbolContext;
var FunctionTypeContext = /** @class */ (function (_super) {
    __extends(FunctionTypeContext, _super);
    function FunctionTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(FunctionTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_functionType; },
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
var ConstantsDefContext = /** @class */ (function (_super) {
    __extends(ConstantsDefContext, _super);
    function ConstantsDefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantsDefContext.prototype.typedNameList = function () {
        return this.getRuleContext(0, TypedNameListContext);
    };
    Object.defineProperty(ConstantsDefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_constantsDef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstantsDefContext.prototype.enterRule = function (listener) {
        if (listener.enterConstantsDef) {
            listener.enterConstantsDef(this);
        }
    };
    // @Override
    ConstantsDefContext.prototype.exitRule = function (listener) {
        if (listener.exitConstantsDef) {
            listener.exitConstantsDef(this);
        }
    };
    // @Override
    ConstantsDefContext.prototype.accept = function (visitor) {
        if (visitor.visitConstantsDef) {
            return visitor.visitConstantsDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstantsDefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstantsDefContext = ConstantsDefContext;
var PredicatesDefContext = /** @class */ (function (_super) {
    __extends(PredicatesDefContext, _super);
    function PredicatesDefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PredicatesDefContext.prototype.atomicFormulaSkeleton = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AtomicFormulaSkeletonContext);
        }
        else {
            return this.getRuleContext(i, AtomicFormulaSkeletonContext);
        }
    };
    Object.defineProperty(PredicatesDefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_predicatesDef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PredicatesDefContext.prototype.enterRule = function (listener) {
        if (listener.enterPredicatesDef) {
            listener.enterPredicatesDef(this);
        }
    };
    // @Override
    PredicatesDefContext.prototype.exitRule = function (listener) {
        if (listener.exitPredicatesDef) {
            listener.exitPredicatesDef(this);
        }
    };
    // @Override
    PredicatesDefContext.prototype.accept = function (visitor) {
        if (visitor.visitPredicatesDef) {
            return visitor.visitPredicatesDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PredicatesDefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PredicatesDefContext = PredicatesDefContext;
var AtomicFormulaSkeletonContext = /** @class */ (function (_super) {
    __extends(AtomicFormulaSkeletonContext, _super);
    function AtomicFormulaSkeletonContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtomicFormulaSkeletonContext.prototype.predicate = function () {
        return this.getRuleContext(0, PredicateContext);
    };
    AtomicFormulaSkeletonContext.prototype.typedVariableList = function () {
        return this.getRuleContext(0, TypedVariableListContext);
    };
    Object.defineProperty(AtomicFormulaSkeletonContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_atomicFormulaSkeleton; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AtomicFormulaSkeletonContext.prototype.enterRule = function (listener) {
        if (listener.enterAtomicFormulaSkeleton) {
            listener.enterAtomicFormulaSkeleton(this);
        }
    };
    // @Override
    AtomicFormulaSkeletonContext.prototype.exitRule = function (listener) {
        if (listener.exitAtomicFormulaSkeleton) {
            listener.exitAtomicFormulaSkeleton(this);
        }
    };
    // @Override
    AtomicFormulaSkeletonContext.prototype.accept = function (visitor) {
        if (visitor.visitAtomicFormulaSkeleton) {
            return visitor.visitAtomicFormulaSkeleton(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtomicFormulaSkeletonContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AtomicFormulaSkeletonContext = AtomicFormulaSkeletonContext;
var PredicateContext = /** @class */ (function (_super) {
    __extends(PredicateContext, _super);
    function PredicateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PredicateContext.prototype.NAME = function () { return this.getToken(PddlParser.NAME, 0); };
    Object.defineProperty(PredicateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_predicate; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PredicateContext.prototype.enterRule = function (listener) {
        if (listener.enterPredicate) {
            listener.enterPredicate(this);
        }
    };
    // @Override
    PredicateContext.prototype.exitRule = function (listener) {
        if (listener.exitPredicate) {
            listener.exitPredicate(this);
        }
    };
    // @Override
    PredicateContext.prototype.accept = function (visitor) {
        if (visitor.visitPredicate) {
            return visitor.visitPredicate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PredicateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PredicateContext = PredicateContext;
var TypedVariableListContext = /** @class */ (function (_super) {
    __extends(TypedVariableListContext, _super);
    function TypedVariableListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypedVariableListContext.prototype.VARIABLE = function (i) {
        if (i === undefined) {
            return this.getTokens(PddlParser.VARIABLE);
        }
        else {
            return this.getToken(PddlParser.VARIABLE, i);
        }
    };
    TypedVariableListContext.prototype.singleTypeVarList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleTypeVarListContext);
        }
        else {
            return this.getRuleContext(i, SingleTypeVarListContext);
        }
    };
    Object.defineProperty(TypedVariableListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_typedVariableList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypedVariableListContext.prototype.enterRule = function (listener) {
        if (listener.enterTypedVariableList) {
            listener.enterTypedVariableList(this);
        }
    };
    // @Override
    TypedVariableListContext.prototype.exitRule = function (listener) {
        if (listener.exitTypedVariableList) {
            listener.exitTypedVariableList(this);
        }
    };
    // @Override
    TypedVariableListContext.prototype.accept = function (visitor) {
        if (visitor.visitTypedVariableList) {
            return visitor.visitTypedVariableList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypedVariableListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypedVariableListContext = TypedVariableListContext;
var SingleTypeVarListContext = /** @class */ (function (_super) {
    __extends(SingleTypeVarListContext, _super);
    function SingleTypeVarListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SingleTypeVarListContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    SingleTypeVarListContext.prototype.VARIABLE = function (i) {
        if (i === undefined) {
            return this.getTokens(PddlParser.VARIABLE);
        }
        else {
            return this.getToken(PddlParser.VARIABLE, i);
        }
    };
    Object.defineProperty(SingleTypeVarListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_singleTypeVarList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SingleTypeVarListContext.prototype.enterRule = function (listener) {
        if (listener.enterSingleTypeVarList) {
            listener.enterSingleTypeVarList(this);
        }
    };
    // @Override
    SingleTypeVarListContext.prototype.exitRule = function (listener) {
        if (listener.exitSingleTypeVarList) {
            listener.exitSingleTypeVarList(this);
        }
    };
    // @Override
    SingleTypeVarListContext.prototype.accept = function (visitor) {
        if (visitor.visitSingleTypeVarList) {
            return visitor.visitSingleTypeVarList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SingleTypeVarListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SingleTypeVarListContext = SingleTypeVarListContext;
var ConstraintsContext = /** @class */ (function (_super) {
    __extends(ConstraintsContext, _super);
    function ConstraintsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstraintsContext.prototype.conGD = function () {
        return this.getRuleContext(0, ConGDContext);
    };
    Object.defineProperty(ConstraintsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_constraints; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstraintsContext.prototype.enterRule = function (listener) {
        if (listener.enterConstraints) {
            listener.enterConstraints(this);
        }
    };
    // @Override
    ConstraintsContext.prototype.exitRule = function (listener) {
        if (listener.exitConstraints) {
            listener.exitConstraints(this);
        }
    };
    // @Override
    ConstraintsContext.prototype.accept = function (visitor) {
        if (visitor.visitConstraints) {
            return visitor.visitConstraints(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstraintsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstraintsContext = ConstraintsContext;
var StructureDefContext = /** @class */ (function (_super) {
    __extends(StructureDefContext, _super);
    function StructureDefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StructureDefContext.prototype.actionDef = function () {
        return this.tryGetRuleContext(0, ActionDefContext);
    };
    StructureDefContext.prototype.durativeActionDef = function () {
        return this.tryGetRuleContext(0, DurativeActionDefContext);
    };
    StructureDefContext.prototype.derivedDef = function () {
        return this.tryGetRuleContext(0, DerivedDefContext);
    };
    Object.defineProperty(StructureDefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_structureDef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StructureDefContext.prototype.enterRule = function (listener) {
        if (listener.enterStructureDef) {
            listener.enterStructureDef(this);
        }
    };
    // @Override
    StructureDefContext.prototype.exitRule = function (listener) {
        if (listener.exitStructureDef) {
            listener.exitStructureDef(this);
        }
    };
    // @Override
    StructureDefContext.prototype.accept = function (visitor) {
        if (visitor.visitStructureDef) {
            return visitor.visitStructureDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StructureDefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StructureDefContext = StructureDefContext;
var ActionDefContext = /** @class */ (function (_super) {
    __extends(ActionDefContext, _super);
    function ActionDefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ActionDefContext.prototype.actionSymbol = function () {
        return this.getRuleContext(0, ActionSymbolContext);
    };
    ActionDefContext.prototype.typedVariableList = function () {
        return this.getRuleContext(0, TypedVariableListContext);
    };
    ActionDefContext.prototype.actionDefBody = function () {
        return this.getRuleContext(0, ActionDefBodyContext);
    };
    Object.defineProperty(ActionDefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_actionDef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ActionDefContext.prototype.enterRule = function (listener) {
        if (listener.enterActionDef) {
            listener.enterActionDef(this);
        }
    };
    // @Override
    ActionDefContext.prototype.exitRule = function (listener) {
        if (listener.exitActionDef) {
            listener.exitActionDef(this);
        }
    };
    // @Override
    ActionDefContext.prototype.accept = function (visitor) {
        if (visitor.visitActionDef) {
            return visitor.visitActionDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ActionDefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ActionDefContext = ActionDefContext;
var ActionSymbolContext = /** @class */ (function (_super) {
    __extends(ActionSymbolContext, _super);
    function ActionSymbolContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ActionSymbolContext.prototype.NAME = function () { return this.getToken(PddlParser.NAME, 0); };
    Object.defineProperty(ActionSymbolContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_actionSymbol; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ActionSymbolContext.prototype.enterRule = function (listener) {
        if (listener.enterActionSymbol) {
            listener.enterActionSymbol(this);
        }
    };
    // @Override
    ActionSymbolContext.prototype.exitRule = function (listener) {
        if (listener.exitActionSymbol) {
            listener.exitActionSymbol(this);
        }
    };
    // @Override
    ActionSymbolContext.prototype.accept = function (visitor) {
        if (visitor.visitActionSymbol) {
            return visitor.visitActionSymbol(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ActionSymbolContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ActionSymbolContext = ActionSymbolContext;
var ActionDefBodyContext = /** @class */ (function (_super) {
    __extends(ActionDefBodyContext, _super);
    function ActionDefBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ActionDefBodyContext.prototype.goalDesc = function () {
        return this.tryGetRuleContext(0, GoalDescContext);
    };
    ActionDefBodyContext.prototype.effect = function () {
        return this.tryGetRuleContext(0, EffectContext);
    };
    Object.defineProperty(ActionDefBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_actionDefBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ActionDefBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterActionDefBody) {
            listener.enterActionDefBody(this);
        }
    };
    // @Override
    ActionDefBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitActionDefBody) {
            listener.exitActionDefBody(this);
        }
    };
    // @Override
    ActionDefBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitActionDefBody) {
            return visitor.visitActionDefBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ActionDefBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ActionDefBodyContext = ActionDefBodyContext;
var GoalDescContext = /** @class */ (function (_super) {
    __extends(GoalDescContext, _super);
    function GoalDescContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GoalDescContext.prototype.atomicTermFormula = function () {
        return this.tryGetRuleContext(0, AtomicTermFormulaContext);
    };
    GoalDescContext.prototype.goalDesc = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(GoalDescContext);
        }
        else {
            return this.getRuleContext(i, GoalDescContext);
        }
    };
    GoalDescContext.prototype.typedVariableList = function () {
        return this.tryGetRuleContext(0, TypedVariableListContext);
    };
    GoalDescContext.prototype.fComp = function () {
        return this.tryGetRuleContext(0, FCompContext);
    };
    Object.defineProperty(GoalDescContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_goalDesc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GoalDescContext.prototype.enterRule = function (listener) {
        if (listener.enterGoalDesc) {
            listener.enterGoalDesc(this);
        }
    };
    // @Override
    GoalDescContext.prototype.exitRule = function (listener) {
        if (listener.exitGoalDesc) {
            listener.exitGoalDesc(this);
        }
    };
    // @Override
    GoalDescContext.prototype.accept = function (visitor) {
        if (visitor.visitGoalDesc) {
            return visitor.visitGoalDesc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GoalDescContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GoalDescContext = GoalDescContext;
var FCompContext = /** @class */ (function (_super) {
    __extends(FCompContext, _super);
    function FCompContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FCompContext.prototype.binaryComp = function () {
        return this.getRuleContext(0, BinaryCompContext);
    };
    FCompContext.prototype.fExp = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FExpContext);
        }
        else {
            return this.getRuleContext(i, FExpContext);
        }
    };
    Object.defineProperty(FCompContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_fComp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FCompContext.prototype.enterRule = function (listener) {
        if (listener.enterFComp) {
            listener.enterFComp(this);
        }
    };
    // @Override
    FCompContext.prototype.exitRule = function (listener) {
        if (listener.exitFComp) {
            listener.exitFComp(this);
        }
    };
    // @Override
    FCompContext.prototype.accept = function (visitor) {
        if (visitor.visitFComp) {
            return visitor.visitFComp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FCompContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FCompContext = FCompContext;
var AtomicTermFormulaContext = /** @class */ (function (_super) {
    __extends(AtomicTermFormulaContext, _super);
    function AtomicTermFormulaContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtomicTermFormulaContext.prototype.predicate = function () {
        return this.getRuleContext(0, PredicateContext);
    };
    AtomicTermFormulaContext.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    Object.defineProperty(AtomicTermFormulaContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_atomicTermFormula; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AtomicTermFormulaContext.prototype.enterRule = function (listener) {
        if (listener.enterAtomicTermFormula) {
            listener.enterAtomicTermFormula(this);
        }
    };
    // @Override
    AtomicTermFormulaContext.prototype.exitRule = function (listener) {
        if (listener.exitAtomicTermFormula) {
            listener.exitAtomicTermFormula(this);
        }
    };
    // @Override
    AtomicTermFormulaContext.prototype.accept = function (visitor) {
        if (visitor.visitAtomicTermFormula) {
            return visitor.visitAtomicTermFormula(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtomicTermFormulaContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AtomicTermFormulaContext = AtomicTermFormulaContext;
var TermContext = /** @class */ (function (_super) {
    __extends(TermContext, _super);
    function TermContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TermContext.prototype.NAME = function () { return this.tryGetToken(PddlParser.NAME, 0); };
    TermContext.prototype.VARIABLE = function () { return this.tryGetToken(PddlParser.VARIABLE, 0); };
    Object.defineProperty(TermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_term; },
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
var DurativeActionDefContext = /** @class */ (function (_super) {
    __extends(DurativeActionDefContext, _super);
    function DurativeActionDefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DurativeActionDefContext.prototype.actionSymbol = function () {
        return this.getRuleContext(0, ActionSymbolContext);
    };
    DurativeActionDefContext.prototype.typedVariableList = function () {
        return this.getRuleContext(0, TypedVariableListContext);
    };
    DurativeActionDefContext.prototype.daDefBody = function () {
        return this.getRuleContext(0, DaDefBodyContext);
    };
    Object.defineProperty(DurativeActionDefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_durativeActionDef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DurativeActionDefContext.prototype.enterRule = function (listener) {
        if (listener.enterDurativeActionDef) {
            listener.enterDurativeActionDef(this);
        }
    };
    // @Override
    DurativeActionDefContext.prototype.exitRule = function (listener) {
        if (listener.exitDurativeActionDef) {
            listener.exitDurativeActionDef(this);
        }
    };
    // @Override
    DurativeActionDefContext.prototype.accept = function (visitor) {
        if (visitor.visitDurativeActionDef) {
            return visitor.visitDurativeActionDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DurativeActionDefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DurativeActionDefContext = DurativeActionDefContext;
var DaDefBodyContext = /** @class */ (function (_super) {
    __extends(DaDefBodyContext, _super);
    function DaDefBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DaDefBodyContext.prototype.durationConstraint = function () {
        return this.tryGetRuleContext(0, DurationConstraintContext);
    };
    DaDefBodyContext.prototype.daGD = function () {
        return this.tryGetRuleContext(0, DaGDContext);
    };
    DaDefBodyContext.prototype.daEffect = function () {
        return this.tryGetRuleContext(0, DaEffectContext);
    };
    Object.defineProperty(DaDefBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_daDefBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DaDefBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterDaDefBody) {
            listener.enterDaDefBody(this);
        }
    };
    // @Override
    DaDefBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitDaDefBody) {
            listener.exitDaDefBody(this);
        }
    };
    // @Override
    DaDefBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitDaDefBody) {
            return visitor.visitDaDefBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DaDefBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DaDefBodyContext = DaDefBodyContext;
var DaGDContext = /** @class */ (function (_super) {
    __extends(DaGDContext, _super);
    function DaGDContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DaGDContext.prototype.prefTimedGD = function () {
        return this.tryGetRuleContext(0, PrefTimedGDContext);
    };
    DaGDContext.prototype.daGD = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DaGDContext);
        }
        else {
            return this.getRuleContext(i, DaGDContext);
        }
    };
    DaGDContext.prototype.typedVariableList = function () {
        return this.tryGetRuleContext(0, TypedVariableListContext);
    };
    Object.defineProperty(DaGDContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_daGD; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DaGDContext.prototype.enterRule = function (listener) {
        if (listener.enterDaGD) {
            listener.enterDaGD(this);
        }
    };
    // @Override
    DaGDContext.prototype.exitRule = function (listener) {
        if (listener.exitDaGD) {
            listener.exitDaGD(this);
        }
    };
    // @Override
    DaGDContext.prototype.accept = function (visitor) {
        if (visitor.visitDaGD) {
            return visitor.visitDaGD(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DaGDContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DaGDContext = DaGDContext;
var PrefTimedGDContext = /** @class */ (function (_super) {
    __extends(PrefTimedGDContext, _super);
    function PrefTimedGDContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrefTimedGDContext.prototype.timedGD = function () {
        return this.getRuleContext(0, TimedGDContext);
    };
    PrefTimedGDContext.prototype.NAME = function () { return this.tryGetToken(PddlParser.NAME, 0); };
    Object.defineProperty(PrefTimedGDContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_prefTimedGD; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrefTimedGDContext.prototype.enterRule = function (listener) {
        if (listener.enterPrefTimedGD) {
            listener.enterPrefTimedGD(this);
        }
    };
    // @Override
    PrefTimedGDContext.prototype.exitRule = function (listener) {
        if (listener.exitPrefTimedGD) {
            listener.exitPrefTimedGD(this);
        }
    };
    // @Override
    PrefTimedGDContext.prototype.accept = function (visitor) {
        if (visitor.visitPrefTimedGD) {
            return visitor.visitPrefTimedGD(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrefTimedGDContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrefTimedGDContext = PrefTimedGDContext;
var TimedGDContext = /** @class */ (function (_super) {
    __extends(TimedGDContext, _super);
    function TimedGDContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TimedGDContext.prototype.timeSpecifier = function () {
        return this.tryGetRuleContext(0, TimeSpecifierContext);
    };
    TimedGDContext.prototype.goalDesc = function () {
        return this.getRuleContext(0, GoalDescContext);
    };
    TimedGDContext.prototype.interval = function () {
        return this.tryGetRuleContext(0, IntervalContext);
    };
    Object.defineProperty(TimedGDContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_timedGD; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TimedGDContext.prototype.enterRule = function (listener) {
        if (listener.enterTimedGD) {
            listener.enterTimedGD(this);
        }
    };
    // @Override
    TimedGDContext.prototype.exitRule = function (listener) {
        if (listener.exitTimedGD) {
            listener.exitTimedGD(this);
        }
    };
    // @Override
    TimedGDContext.prototype.accept = function (visitor) {
        if (visitor.visitTimedGD) {
            return visitor.visitTimedGD(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TimedGDContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TimedGDContext = TimedGDContext;
var TimeSpecifierContext = /** @class */ (function (_super) {
    __extends(TimeSpecifierContext, _super);
    function TimeSpecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(TimeSpecifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_timeSpecifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TimeSpecifierContext.prototype.enterRule = function (listener) {
        if (listener.enterTimeSpecifier) {
            listener.enterTimeSpecifier(this);
        }
    };
    // @Override
    TimeSpecifierContext.prototype.exitRule = function (listener) {
        if (listener.exitTimeSpecifier) {
            listener.exitTimeSpecifier(this);
        }
    };
    // @Override
    TimeSpecifierContext.prototype.accept = function (visitor) {
        if (visitor.visitTimeSpecifier) {
            return visitor.visitTimeSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TimeSpecifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TimeSpecifierContext = TimeSpecifierContext;
var IntervalContext = /** @class */ (function (_super) {
    __extends(IntervalContext, _super);
    function IntervalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(IntervalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_interval; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IntervalContext.prototype.enterRule = function (listener) {
        if (listener.enterInterval) {
            listener.enterInterval(this);
        }
    };
    // @Override
    IntervalContext.prototype.exitRule = function (listener) {
        if (listener.exitInterval) {
            listener.exitInterval(this);
        }
    };
    // @Override
    IntervalContext.prototype.accept = function (visitor) {
        if (visitor.visitInterval) {
            return visitor.visitInterval(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IntervalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IntervalContext = IntervalContext;
var DerivedDefContext = /** @class */ (function (_super) {
    __extends(DerivedDefContext, _super);
    function DerivedDefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DerivedDefContext.prototype.typedVariableList = function () {
        return this.getRuleContext(0, TypedVariableListContext);
    };
    DerivedDefContext.prototype.goalDesc = function () {
        return this.getRuleContext(0, GoalDescContext);
    };
    Object.defineProperty(DerivedDefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_derivedDef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DerivedDefContext.prototype.enterRule = function (listener) {
        if (listener.enterDerivedDef) {
            listener.enterDerivedDef(this);
        }
    };
    // @Override
    DerivedDefContext.prototype.exitRule = function (listener) {
        if (listener.exitDerivedDef) {
            listener.exitDerivedDef(this);
        }
    };
    // @Override
    DerivedDefContext.prototype.accept = function (visitor) {
        if (visitor.visitDerivedDef) {
            return visitor.visitDerivedDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DerivedDefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DerivedDefContext = DerivedDefContext;
var FExpContext = /** @class */ (function (_super) {
    __extends(FExpContext, _super);
    function FExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FExpContext.prototype.NUMBER = function () { return this.tryGetToken(PddlParser.NUMBER, 0); };
    FExpContext.prototype.binaryOp = function () {
        return this.tryGetRuleContext(0, BinaryOpContext);
    };
    FExpContext.prototype.fExp = function () {
        return this.tryGetRuleContext(0, FExpContext);
    };
    FExpContext.prototype.fExp2 = function () {
        return this.tryGetRuleContext(0, FExp2Context);
    };
    FExpContext.prototype.fHead = function () {
        return this.tryGetRuleContext(0, FHeadContext);
    };
    Object.defineProperty(FExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_fExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FExpContext.prototype.enterRule = function (listener) {
        if (listener.enterFExp) {
            listener.enterFExp(this);
        }
    };
    // @Override
    FExpContext.prototype.exitRule = function (listener) {
        if (listener.exitFExp) {
            listener.exitFExp(this);
        }
    };
    // @Override
    FExpContext.prototype.accept = function (visitor) {
        if (visitor.visitFExp) {
            return visitor.visitFExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FExpContext = FExpContext;
var FExp2Context = /** @class */ (function (_super) {
    __extends(FExp2Context, _super);
    function FExp2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FExp2Context.prototype.fExp = function () {
        return this.getRuleContext(0, FExpContext);
    };
    Object.defineProperty(FExp2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_fExp2; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FExp2Context.prototype.enterRule = function (listener) {
        if (listener.enterFExp2) {
            listener.enterFExp2(this);
        }
    };
    // @Override
    FExp2Context.prototype.exitRule = function (listener) {
        if (listener.exitFExp2) {
            listener.exitFExp2(this);
        }
    };
    // @Override
    FExp2Context.prototype.accept = function (visitor) {
        if (visitor.visitFExp2) {
            return visitor.visitFExp2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FExp2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.FExp2Context = FExp2Context;
var FHeadContext = /** @class */ (function (_super) {
    __extends(FHeadContext, _super);
    function FHeadContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FHeadContext.prototype.functionSymbol = function () {
        return this.getRuleContext(0, FunctionSymbolContext);
    };
    FHeadContext.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    Object.defineProperty(FHeadContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_fHead; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FHeadContext.prototype.enterRule = function (listener) {
        if (listener.enterFHead) {
            listener.enterFHead(this);
        }
    };
    // @Override
    FHeadContext.prototype.exitRule = function (listener) {
        if (listener.exitFHead) {
            listener.exitFHead(this);
        }
    };
    // @Override
    FHeadContext.prototype.accept = function (visitor) {
        if (visitor.visitFHead) {
            return visitor.visitFHead(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FHeadContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FHeadContext = FHeadContext;
var EffectContext = /** @class */ (function (_super) {
    __extends(EffectContext, _super);
    function EffectContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EffectContext.prototype.cEffect = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CEffectContext);
        }
        else {
            return this.getRuleContext(i, CEffectContext);
        }
    };
    Object.defineProperty(EffectContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_effect; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EffectContext.prototype.enterRule = function (listener) {
        if (listener.enterEffect) {
            listener.enterEffect(this);
        }
    };
    // @Override
    EffectContext.prototype.exitRule = function (listener) {
        if (listener.exitEffect) {
            listener.exitEffect(this);
        }
    };
    // @Override
    EffectContext.prototype.accept = function (visitor) {
        if (visitor.visitEffect) {
            return visitor.visitEffect(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EffectContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EffectContext = EffectContext;
var CEffectContext = /** @class */ (function (_super) {
    __extends(CEffectContext, _super);
    function CEffectContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CEffectContext.prototype.typedVariableList = function () {
        return this.tryGetRuleContext(0, TypedVariableListContext);
    };
    CEffectContext.prototype.effect = function () {
        return this.tryGetRuleContext(0, EffectContext);
    };
    CEffectContext.prototype.goalDesc = function () {
        return this.tryGetRuleContext(0, GoalDescContext);
    };
    CEffectContext.prototype.condEffect = function () {
        return this.tryGetRuleContext(0, CondEffectContext);
    };
    CEffectContext.prototype.pEffect = function () {
        return this.tryGetRuleContext(0, PEffectContext);
    };
    Object.defineProperty(CEffectContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_cEffect; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CEffectContext.prototype.enterRule = function (listener) {
        if (listener.enterCEffect) {
            listener.enterCEffect(this);
        }
    };
    // @Override
    CEffectContext.prototype.exitRule = function (listener) {
        if (listener.exitCEffect) {
            listener.exitCEffect(this);
        }
    };
    // @Override
    CEffectContext.prototype.accept = function (visitor) {
        if (visitor.visitCEffect) {
            return visitor.visitCEffect(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CEffectContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CEffectContext = CEffectContext;
var PEffectContext = /** @class */ (function (_super) {
    __extends(PEffectContext, _super);
    function PEffectContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PEffectContext.prototype.assignOp = function () {
        return this.tryGetRuleContext(0, AssignOpContext);
    };
    PEffectContext.prototype.fHead = function () {
        return this.tryGetRuleContext(0, FHeadContext);
    };
    PEffectContext.prototype.fExp = function () {
        return this.tryGetRuleContext(0, FExpContext);
    };
    PEffectContext.prototype.atomicTermFormula = function () {
        return this.tryGetRuleContext(0, AtomicTermFormulaContext);
    };
    Object.defineProperty(PEffectContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_pEffect; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PEffectContext.prototype.enterRule = function (listener) {
        if (listener.enterPEffect) {
            listener.enterPEffect(this);
        }
    };
    // @Override
    PEffectContext.prototype.exitRule = function (listener) {
        if (listener.exitPEffect) {
            listener.exitPEffect(this);
        }
    };
    // @Override
    PEffectContext.prototype.accept = function (visitor) {
        if (visitor.visitPEffect) {
            return visitor.visitPEffect(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PEffectContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PEffectContext = PEffectContext;
var CondEffectContext = /** @class */ (function (_super) {
    __extends(CondEffectContext, _super);
    function CondEffectContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CondEffectContext.prototype.pEffect = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PEffectContext);
        }
        else {
            return this.getRuleContext(i, PEffectContext);
        }
    };
    Object.defineProperty(CondEffectContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_condEffect; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CondEffectContext.prototype.enterRule = function (listener) {
        if (listener.enterCondEffect) {
            listener.enterCondEffect(this);
        }
    };
    // @Override
    CondEffectContext.prototype.exitRule = function (listener) {
        if (listener.exitCondEffect) {
            listener.exitCondEffect(this);
        }
    };
    // @Override
    CondEffectContext.prototype.accept = function (visitor) {
        if (visitor.visitCondEffect) {
            return visitor.visitCondEffect(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CondEffectContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CondEffectContext = CondEffectContext;
var BinaryOpContext = /** @class */ (function (_super) {
    __extends(BinaryOpContext, _super);
    function BinaryOpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(BinaryOpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_binaryOp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BinaryOpContext.prototype.enterRule = function (listener) {
        if (listener.enterBinaryOp) {
            listener.enterBinaryOp(this);
        }
    };
    // @Override
    BinaryOpContext.prototype.exitRule = function (listener) {
        if (listener.exitBinaryOp) {
            listener.exitBinaryOp(this);
        }
    };
    // @Override
    BinaryOpContext.prototype.accept = function (visitor) {
        if (visitor.visitBinaryOp) {
            return visitor.visitBinaryOp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BinaryOpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BinaryOpContext = BinaryOpContext;
var BinaryCompContext = /** @class */ (function (_super) {
    __extends(BinaryCompContext, _super);
    function BinaryCompContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(BinaryCompContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_binaryComp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BinaryCompContext.prototype.enterRule = function (listener) {
        if (listener.enterBinaryComp) {
            listener.enterBinaryComp(this);
        }
    };
    // @Override
    BinaryCompContext.prototype.exitRule = function (listener) {
        if (listener.exitBinaryComp) {
            listener.exitBinaryComp(this);
        }
    };
    // @Override
    BinaryCompContext.prototype.accept = function (visitor) {
        if (visitor.visitBinaryComp) {
            return visitor.visitBinaryComp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BinaryCompContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BinaryCompContext = BinaryCompContext;
var AssignOpContext = /** @class */ (function (_super) {
    __extends(AssignOpContext, _super);
    function AssignOpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(AssignOpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_assignOp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignOpContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignOp) {
            listener.enterAssignOp(this);
        }
    };
    // @Override
    AssignOpContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignOp) {
            listener.exitAssignOp(this);
        }
    };
    // @Override
    AssignOpContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignOp) {
            return visitor.visitAssignOp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignOpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignOpContext = AssignOpContext;
var DurationConstraintContext = /** @class */ (function (_super) {
    __extends(DurationConstraintContext, _super);
    function DurationConstraintContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DurationConstraintContext.prototype.simpleDurationConstraint = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SimpleDurationConstraintContext);
        }
        else {
            return this.getRuleContext(i, SimpleDurationConstraintContext);
        }
    };
    Object.defineProperty(DurationConstraintContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_durationConstraint; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DurationConstraintContext.prototype.enterRule = function (listener) {
        if (listener.enterDurationConstraint) {
            listener.enterDurationConstraint(this);
        }
    };
    // @Override
    DurationConstraintContext.prototype.exitRule = function (listener) {
        if (listener.exitDurationConstraint) {
            listener.exitDurationConstraint(this);
        }
    };
    // @Override
    DurationConstraintContext.prototype.accept = function (visitor) {
        if (visitor.visitDurationConstraint) {
            return visitor.visitDurationConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DurationConstraintContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DurationConstraintContext = DurationConstraintContext;
var SimpleDurationConstraintContext = /** @class */ (function (_super) {
    __extends(SimpleDurationConstraintContext, _super);
    function SimpleDurationConstraintContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SimpleDurationConstraintContext.prototype.durOp = function () {
        return this.tryGetRuleContext(0, DurOpContext);
    };
    SimpleDurationConstraintContext.prototype.durValue = function () {
        return this.tryGetRuleContext(0, DurValueContext);
    };
    SimpleDurationConstraintContext.prototype.timeSpecifier = function () {
        return this.tryGetRuleContext(0, TimeSpecifierContext);
    };
    SimpleDurationConstraintContext.prototype.simpleDurationConstraint = function () {
        return this.tryGetRuleContext(0, SimpleDurationConstraintContext);
    };
    Object.defineProperty(SimpleDurationConstraintContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_simpleDurationConstraint; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SimpleDurationConstraintContext.prototype.enterRule = function (listener) {
        if (listener.enterSimpleDurationConstraint) {
            listener.enterSimpleDurationConstraint(this);
        }
    };
    // @Override
    SimpleDurationConstraintContext.prototype.exitRule = function (listener) {
        if (listener.exitSimpleDurationConstraint) {
            listener.exitSimpleDurationConstraint(this);
        }
    };
    // @Override
    SimpleDurationConstraintContext.prototype.accept = function (visitor) {
        if (visitor.visitSimpleDurationConstraint) {
            return visitor.visitSimpleDurationConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SimpleDurationConstraintContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SimpleDurationConstraintContext = SimpleDurationConstraintContext;
var DurOpContext = /** @class */ (function (_super) {
    __extends(DurOpContext, _super);
    function DurOpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(DurOpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_durOp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DurOpContext.prototype.enterRule = function (listener) {
        if (listener.enterDurOp) {
            listener.enterDurOp(this);
        }
    };
    // @Override
    DurOpContext.prototype.exitRule = function (listener) {
        if (listener.exitDurOp) {
            listener.exitDurOp(this);
        }
    };
    // @Override
    DurOpContext.prototype.accept = function (visitor) {
        if (visitor.visitDurOp) {
            return visitor.visitDurOp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DurOpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DurOpContext = DurOpContext;
var DurValueContext = /** @class */ (function (_super) {
    __extends(DurValueContext, _super);
    function DurValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DurValueContext.prototype.NUMBER = function () { return this.tryGetToken(PddlParser.NUMBER, 0); };
    DurValueContext.prototype.fExp = function () {
        return this.tryGetRuleContext(0, FExpContext);
    };
    Object.defineProperty(DurValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_durValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DurValueContext.prototype.enterRule = function (listener) {
        if (listener.enterDurValue) {
            listener.enterDurValue(this);
        }
    };
    // @Override
    DurValueContext.prototype.exitRule = function (listener) {
        if (listener.exitDurValue) {
            listener.exitDurValue(this);
        }
    };
    // @Override
    DurValueContext.prototype.accept = function (visitor) {
        if (visitor.visitDurValue) {
            return visitor.visitDurValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DurValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DurValueContext = DurValueContext;
var DaEffectContext = /** @class */ (function (_super) {
    __extends(DaEffectContext, _super);
    function DaEffectContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DaEffectContext.prototype.daEffect = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DaEffectContext);
        }
        else {
            return this.getRuleContext(i, DaEffectContext);
        }
    };
    DaEffectContext.prototype.timedEffect = function () {
        return this.tryGetRuleContext(0, TimedEffectContext);
    };
    DaEffectContext.prototype.typedVariableList = function () {
        return this.tryGetRuleContext(0, TypedVariableListContext);
    };
    DaEffectContext.prototype.daGD = function () {
        return this.tryGetRuleContext(0, DaGDContext);
    };
    DaEffectContext.prototype.assignOp = function () {
        return this.tryGetRuleContext(0, AssignOpContext);
    };
    DaEffectContext.prototype.fHead = function () {
        return this.tryGetRuleContext(0, FHeadContext);
    };
    DaEffectContext.prototype.fExpDA = function () {
        return this.tryGetRuleContext(0, FExpDAContext);
    };
    Object.defineProperty(DaEffectContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_daEffect; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DaEffectContext.prototype.enterRule = function (listener) {
        if (listener.enterDaEffect) {
            listener.enterDaEffect(this);
        }
    };
    // @Override
    DaEffectContext.prototype.exitRule = function (listener) {
        if (listener.exitDaEffect) {
            listener.exitDaEffect(this);
        }
    };
    // @Override
    DaEffectContext.prototype.accept = function (visitor) {
        if (visitor.visitDaEffect) {
            return visitor.visitDaEffect(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DaEffectContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DaEffectContext = DaEffectContext;
var TimedEffectContext = /** @class */ (function (_super) {
    __extends(TimedEffectContext, _super);
    function TimedEffectContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TimedEffectContext.prototype.timeSpecifier = function () {
        return this.tryGetRuleContext(0, TimeSpecifierContext);
    };
    TimedEffectContext.prototype.daEffect = function () {
        return this.tryGetRuleContext(0, DaEffectContext);
    };
    TimedEffectContext.prototype.fAssignDA = function () {
        return this.tryGetRuleContext(0, FAssignDAContext);
    };
    TimedEffectContext.prototype.assignOp = function () {
        return this.tryGetRuleContext(0, AssignOpContext);
    };
    TimedEffectContext.prototype.fHead = function () {
        return this.tryGetRuleContext(0, FHeadContext);
    };
    TimedEffectContext.prototype.fExp = function () {
        return this.tryGetRuleContext(0, FExpContext);
    };
    Object.defineProperty(TimedEffectContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_timedEffect; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TimedEffectContext.prototype.enterRule = function (listener) {
        if (listener.enterTimedEffect) {
            listener.enterTimedEffect(this);
        }
    };
    // @Override
    TimedEffectContext.prototype.exitRule = function (listener) {
        if (listener.exitTimedEffect) {
            listener.exitTimedEffect(this);
        }
    };
    // @Override
    TimedEffectContext.prototype.accept = function (visitor) {
        if (visitor.visitTimedEffect) {
            return visitor.visitTimedEffect(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TimedEffectContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TimedEffectContext = TimedEffectContext;
var FAssignDAContext = /** @class */ (function (_super) {
    __extends(FAssignDAContext, _super);
    function FAssignDAContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FAssignDAContext.prototype.assignOp = function () {
        return this.getRuleContext(0, AssignOpContext);
    };
    FAssignDAContext.prototype.fHead = function () {
        return this.getRuleContext(0, FHeadContext);
    };
    FAssignDAContext.prototype.fExpDA = function () {
        return this.getRuleContext(0, FExpDAContext);
    };
    Object.defineProperty(FAssignDAContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_fAssignDA; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FAssignDAContext.prototype.enterRule = function (listener) {
        if (listener.enterFAssignDA) {
            listener.enterFAssignDA(this);
        }
    };
    // @Override
    FAssignDAContext.prototype.exitRule = function (listener) {
        if (listener.exitFAssignDA) {
            listener.exitFAssignDA(this);
        }
    };
    // @Override
    FAssignDAContext.prototype.accept = function (visitor) {
        if (visitor.visitFAssignDA) {
            return visitor.visitFAssignDA(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FAssignDAContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FAssignDAContext = FAssignDAContext;
var FExpDAContext = /** @class */ (function (_super) {
    __extends(FExpDAContext, _super);
    function FExpDAContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FExpDAContext.prototype.binaryOp = function () {
        return this.tryGetRuleContext(0, BinaryOpContext);
    };
    FExpDAContext.prototype.fExpDA = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FExpDAContext);
        }
        else {
            return this.getRuleContext(i, FExpDAContext);
        }
    };
    FExpDAContext.prototype.fExp = function () {
        return this.tryGetRuleContext(0, FExpContext);
    };
    Object.defineProperty(FExpDAContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_fExpDA; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FExpDAContext.prototype.enterRule = function (listener) {
        if (listener.enterFExpDA) {
            listener.enterFExpDA(this);
        }
    };
    // @Override
    FExpDAContext.prototype.exitRule = function (listener) {
        if (listener.exitFExpDA) {
            listener.exitFExpDA(this);
        }
    };
    // @Override
    FExpDAContext.prototype.accept = function (visitor) {
        if (visitor.visitFExpDA) {
            return visitor.visitFExpDA(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FExpDAContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FExpDAContext = FExpDAContext;
var ProblemContext = /** @class */ (function (_super) {
    __extends(ProblemContext, _super);
    function ProblemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProblemContext.prototype.problemDecl = function () {
        return this.getRuleContext(0, ProblemDeclContext);
    };
    ProblemContext.prototype.problemDomain = function () {
        return this.getRuleContext(0, ProblemDomainContext);
    };
    ProblemContext.prototype.init = function () {
        return this.getRuleContext(0, InitContext);
    };
    ProblemContext.prototype.goal = function () {
        return this.getRuleContext(0, GoalContext);
    };
    ProblemContext.prototype.requireDef = function () {
        return this.tryGetRuleContext(0, RequireDefContext);
    };
    ProblemContext.prototype.objectDecl = function () {
        return this.tryGetRuleContext(0, ObjectDeclContext);
    };
    ProblemContext.prototype.probConstraints = function () {
        return this.tryGetRuleContext(0, ProbConstraintsContext);
    };
    ProblemContext.prototype.metricSpec = function () {
        return this.tryGetRuleContext(0, MetricSpecContext);
    };
    Object.defineProperty(ProblemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_problem; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProblemContext.prototype.enterRule = function (listener) {
        if (listener.enterProblem) {
            listener.enterProblem(this);
        }
    };
    // @Override
    ProblemContext.prototype.exitRule = function (listener) {
        if (listener.exitProblem) {
            listener.exitProblem(this);
        }
    };
    // @Override
    ProblemContext.prototype.accept = function (visitor) {
        if (visitor.visitProblem) {
            return visitor.visitProblem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProblemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProblemContext = ProblemContext;
var ProblemDeclContext = /** @class */ (function (_super) {
    __extends(ProblemDeclContext, _super);
    function ProblemDeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProblemDeclContext.prototype.NAME = function () { return this.getToken(PddlParser.NAME, 0); };
    Object.defineProperty(ProblemDeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_problemDecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProblemDeclContext.prototype.enterRule = function (listener) {
        if (listener.enterProblemDecl) {
            listener.enterProblemDecl(this);
        }
    };
    // @Override
    ProblemDeclContext.prototype.exitRule = function (listener) {
        if (listener.exitProblemDecl) {
            listener.exitProblemDecl(this);
        }
    };
    // @Override
    ProblemDeclContext.prototype.accept = function (visitor) {
        if (visitor.visitProblemDecl) {
            return visitor.visitProblemDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProblemDeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProblemDeclContext = ProblemDeclContext;
var ProblemDomainContext = /** @class */ (function (_super) {
    __extends(ProblemDomainContext, _super);
    function ProblemDomainContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProblemDomainContext.prototype.NAME = function () { return this.getToken(PddlParser.NAME, 0); };
    Object.defineProperty(ProblemDomainContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_problemDomain; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProblemDomainContext.prototype.enterRule = function (listener) {
        if (listener.enterProblemDomain) {
            listener.enterProblemDomain(this);
        }
    };
    // @Override
    ProblemDomainContext.prototype.exitRule = function (listener) {
        if (listener.exitProblemDomain) {
            listener.exitProblemDomain(this);
        }
    };
    // @Override
    ProblemDomainContext.prototype.accept = function (visitor) {
        if (visitor.visitProblemDomain) {
            return visitor.visitProblemDomain(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProblemDomainContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProblemDomainContext = ProblemDomainContext;
var ObjectDeclContext = /** @class */ (function (_super) {
    __extends(ObjectDeclContext, _super);
    function ObjectDeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectDeclContext.prototype.typedNameList = function () {
        return this.getRuleContext(0, TypedNameListContext);
    };
    Object.defineProperty(ObjectDeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_objectDecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectDeclContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectDecl) {
            listener.enterObjectDecl(this);
        }
    };
    // @Override
    ObjectDeclContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectDecl) {
            listener.exitObjectDecl(this);
        }
    };
    // @Override
    ObjectDeclContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectDecl) {
            return visitor.visitObjectDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectDeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectDeclContext = ObjectDeclContext;
var InitContext = /** @class */ (function (_super) {
    __extends(InitContext, _super);
    function InitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitContext.prototype.initEl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(InitElContext);
        }
        else {
            return this.getRuleContext(i, InitElContext);
        }
    };
    Object.defineProperty(InitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_init; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InitContext.prototype.enterRule = function (listener) {
        if (listener.enterInit) {
            listener.enterInit(this);
        }
    };
    // @Override
    InitContext.prototype.exitRule = function (listener) {
        if (listener.exitInit) {
            listener.exitInit(this);
        }
    };
    // @Override
    InitContext.prototype.accept = function (visitor) {
        if (visitor.visitInit) {
            return visitor.visitInit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InitContext = InitContext;
var InitElContext = /** @class */ (function (_super) {
    __extends(InitElContext, _super);
    function InitElContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitElContext.prototype.nameLiteral = function () {
        return this.tryGetRuleContext(0, NameLiteralContext);
    };
    InitElContext.prototype.fHead = function () {
        return this.tryGetRuleContext(0, FHeadContext);
    };
    InitElContext.prototype.NUMBER = function () { return this.tryGetToken(PddlParser.NUMBER, 0); };
    Object.defineProperty(InitElContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_initEl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InitElContext.prototype.enterRule = function (listener) {
        if (listener.enterInitEl) {
            listener.enterInitEl(this);
        }
    };
    // @Override
    InitElContext.prototype.exitRule = function (listener) {
        if (listener.exitInitEl) {
            listener.exitInitEl(this);
        }
    };
    // @Override
    InitElContext.prototype.accept = function (visitor) {
        if (visitor.visitInitEl) {
            return visitor.visitInitEl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InitElContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InitElContext = InitElContext;
var NameLiteralContext = /** @class */ (function (_super) {
    __extends(NameLiteralContext, _super);
    function NameLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NameLiteralContext.prototype.atomicNameFormula = function () {
        return this.getRuleContext(0, AtomicNameFormulaContext);
    };
    Object.defineProperty(NameLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_nameLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NameLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterNameLiteral) {
            listener.enterNameLiteral(this);
        }
    };
    // @Override
    NameLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitNameLiteral) {
            listener.exitNameLiteral(this);
        }
    };
    // @Override
    NameLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitNameLiteral) {
            return visitor.visitNameLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NameLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NameLiteralContext = NameLiteralContext;
var AtomicNameFormulaContext = /** @class */ (function (_super) {
    __extends(AtomicNameFormulaContext, _super);
    function AtomicNameFormulaContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtomicNameFormulaContext.prototype.predicate = function () {
        return this.getRuleContext(0, PredicateContext);
    };
    AtomicNameFormulaContext.prototype.NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(PddlParser.NAME);
        }
        else {
            return this.getToken(PddlParser.NAME, i);
        }
    };
    Object.defineProperty(AtomicNameFormulaContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_atomicNameFormula; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AtomicNameFormulaContext.prototype.enterRule = function (listener) {
        if (listener.enterAtomicNameFormula) {
            listener.enterAtomicNameFormula(this);
        }
    };
    // @Override
    AtomicNameFormulaContext.prototype.exitRule = function (listener) {
        if (listener.exitAtomicNameFormula) {
            listener.exitAtomicNameFormula(this);
        }
    };
    // @Override
    AtomicNameFormulaContext.prototype.accept = function (visitor) {
        if (visitor.visitAtomicNameFormula) {
            return visitor.visitAtomicNameFormula(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtomicNameFormulaContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AtomicNameFormulaContext = AtomicNameFormulaContext;
var GoalContext = /** @class */ (function (_super) {
    __extends(GoalContext, _super);
    function GoalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GoalContext.prototype.goalDesc = function () {
        return this.getRuleContext(0, GoalDescContext);
    };
    Object.defineProperty(GoalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_goal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GoalContext.prototype.enterRule = function (listener) {
        if (listener.enterGoal) {
            listener.enterGoal(this);
        }
    };
    // @Override
    GoalContext.prototype.exitRule = function (listener) {
        if (listener.exitGoal) {
            listener.exitGoal(this);
        }
    };
    // @Override
    GoalContext.prototype.accept = function (visitor) {
        if (visitor.visitGoal) {
            return visitor.visitGoal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GoalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GoalContext = GoalContext;
var ProbConstraintsContext = /** @class */ (function (_super) {
    __extends(ProbConstraintsContext, _super);
    function ProbConstraintsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProbConstraintsContext.prototype.prefConGD = function () {
        return this.getRuleContext(0, PrefConGDContext);
    };
    Object.defineProperty(ProbConstraintsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_probConstraints; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProbConstraintsContext.prototype.enterRule = function (listener) {
        if (listener.enterProbConstraints) {
            listener.enterProbConstraints(this);
        }
    };
    // @Override
    ProbConstraintsContext.prototype.exitRule = function (listener) {
        if (listener.exitProbConstraints) {
            listener.exitProbConstraints(this);
        }
    };
    // @Override
    ProbConstraintsContext.prototype.accept = function (visitor) {
        if (visitor.visitProbConstraints) {
            return visitor.visitProbConstraints(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProbConstraintsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProbConstraintsContext = ProbConstraintsContext;
var PrefConGDContext = /** @class */ (function (_super) {
    __extends(PrefConGDContext, _super);
    function PrefConGDContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrefConGDContext.prototype.prefConGD = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PrefConGDContext);
        }
        else {
            return this.getRuleContext(i, PrefConGDContext);
        }
    };
    PrefConGDContext.prototype.typedVariableList = function () {
        return this.tryGetRuleContext(0, TypedVariableListContext);
    };
    PrefConGDContext.prototype.conGD = function () {
        return this.tryGetRuleContext(0, ConGDContext);
    };
    PrefConGDContext.prototype.NAME = function () { return this.tryGetToken(PddlParser.NAME, 0); };
    Object.defineProperty(PrefConGDContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_prefConGD; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrefConGDContext.prototype.enterRule = function (listener) {
        if (listener.enterPrefConGD) {
            listener.enterPrefConGD(this);
        }
    };
    // @Override
    PrefConGDContext.prototype.exitRule = function (listener) {
        if (listener.exitPrefConGD) {
            listener.exitPrefConGD(this);
        }
    };
    // @Override
    PrefConGDContext.prototype.accept = function (visitor) {
        if (visitor.visitPrefConGD) {
            return visitor.visitPrefConGD(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrefConGDContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrefConGDContext = PrefConGDContext;
var MetricSpecContext = /** @class */ (function (_super) {
    __extends(MetricSpecContext, _super);
    function MetricSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MetricSpecContext.prototype.optimization = function () {
        return this.getRuleContext(0, OptimizationContext);
    };
    MetricSpecContext.prototype.metricFExp = function () {
        return this.getRuleContext(0, MetricFExpContext);
    };
    Object.defineProperty(MetricSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_metricSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MetricSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterMetricSpec) {
            listener.enterMetricSpec(this);
        }
    };
    // @Override
    MetricSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitMetricSpec) {
            listener.exitMetricSpec(this);
        }
    };
    // @Override
    MetricSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitMetricSpec) {
            return visitor.visitMetricSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MetricSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MetricSpecContext = MetricSpecContext;
var OptimizationContext = /** @class */ (function (_super) {
    __extends(OptimizationContext, _super);
    function OptimizationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(OptimizationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_optimization; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OptimizationContext.prototype.enterRule = function (listener) {
        if (listener.enterOptimization) {
            listener.enterOptimization(this);
        }
    };
    // @Override
    OptimizationContext.prototype.exitRule = function (listener) {
        if (listener.exitOptimization) {
            listener.exitOptimization(this);
        }
    };
    // @Override
    OptimizationContext.prototype.accept = function (visitor) {
        if (visitor.visitOptimization) {
            return visitor.visitOptimization(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OptimizationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OptimizationContext = OptimizationContext;
var MetricFExpContext = /** @class */ (function (_super) {
    __extends(MetricFExpContext, _super);
    function MetricFExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MetricFExpContext.prototype.binaryOp = function () {
        return this.tryGetRuleContext(0, BinaryOpContext);
    };
    MetricFExpContext.prototype.metricFExp = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MetricFExpContext);
        }
        else {
            return this.getRuleContext(i, MetricFExpContext);
        }
    };
    MetricFExpContext.prototype.NUMBER = function () { return this.tryGetToken(PddlParser.NUMBER, 0); };
    MetricFExpContext.prototype.functionSymbol = function () {
        return this.tryGetRuleContext(0, FunctionSymbolContext);
    };
    MetricFExpContext.prototype.NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(PddlParser.NAME);
        }
        else {
            return this.getToken(PddlParser.NAME, i);
        }
    };
    Object.defineProperty(MetricFExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_metricFExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MetricFExpContext.prototype.enterRule = function (listener) {
        if (listener.enterMetricFExp) {
            listener.enterMetricFExp(this);
        }
    };
    // @Override
    MetricFExpContext.prototype.exitRule = function (listener) {
        if (listener.exitMetricFExp) {
            listener.exitMetricFExp(this);
        }
    };
    // @Override
    MetricFExpContext.prototype.accept = function (visitor) {
        if (visitor.visitMetricFExp) {
            return visitor.visitMetricFExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MetricFExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MetricFExpContext = MetricFExpContext;
var ConGDContext = /** @class */ (function (_super) {
    __extends(ConGDContext, _super);
    function ConGDContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConGDContext.prototype.conGD = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConGDContext);
        }
        else {
            return this.getRuleContext(i, ConGDContext);
        }
    };
    ConGDContext.prototype.typedVariableList = function () {
        return this.tryGetRuleContext(0, TypedVariableListContext);
    };
    ConGDContext.prototype.goalDesc = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(GoalDescContext);
        }
        else {
            return this.getRuleContext(i, GoalDescContext);
        }
    };
    ConGDContext.prototype.NUMBER = function (i) {
        if (i === undefined) {
            return this.getTokens(PddlParser.NUMBER);
        }
        else {
            return this.getToken(PddlParser.NUMBER, i);
        }
    };
    Object.defineProperty(ConGDContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PddlParser.RULE_conGD; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConGDContext.prototype.enterRule = function (listener) {
        if (listener.enterConGD) {
            listener.enterConGD(this);
        }
    };
    // @Override
    ConGDContext.prototype.exitRule = function (listener) {
        if (listener.exitConGD) {
            listener.exitConGD(this);
        }
    };
    // @Override
    ConGDContext.prototype.accept = function (visitor) {
        if (visitor.visitConGD) {
            return visitor.visitConGD(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConGDContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConGDContext = ConGDContext;
