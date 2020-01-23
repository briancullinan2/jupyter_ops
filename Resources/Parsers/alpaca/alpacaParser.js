"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/alpaca/alpaca.g4 by ANTLR 4.7.3-SNAPSHOT
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
var alpacaParser = /** @class */ (function (_super) {
    __extends(alpacaParser, _super);
    function alpacaParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(alpacaParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(alpacaParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return alpacaParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(alpacaParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "alpaca.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(alpacaParser.prototype, "ruleNames", {
        // @Override
        get: function () { return alpacaParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(alpacaParser.prototype, "serializedATN", {
        // @Override
        get: function () { return alpacaParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    alpacaParser.prototype.prog = function () {
        var _localctx = new ProgContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, alpacaParser.RULE_prog);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 46;
                this.defns();
                this.state = 47;
                _la = this._input.LA(1);
                if (!(_la === alpacaParser.T__0 || _la === alpacaParser.T__1)) {
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
    alpacaParser.prototype.defns = function () {
        var _localctx = new DefnsContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, alpacaParser.RULE_defns);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 49;
                this.defn();
                this.state = 54;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === alpacaParser.T__2) {
                    {
                        {
                            this.state = 50;
                            this.match(alpacaParser.T__2);
                            this.state = 51;
                            this.defn();
                        }
                    }
                    this.state = 56;
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
    alpacaParser.prototype.defn = function () {
        var _localctx = new DefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, alpacaParser.RULE_defn);
        try {
            this.state = 60;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case alpacaParser.T__3:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 57;
                        this.stateDefn();
                    }
                    break;
                case alpacaParser.T__4:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 58;
                        this.classDefn();
                    }
                    break;
                case alpacaParser.T__5:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 59;
                        this.nbhdDefn();
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
    alpacaParser.prototype.stateDefn = function () {
        var _localctx = new StateDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, alpacaParser.RULE_stateDefn);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 62;
                this.match(alpacaParser.T__3);
                this.state = 63;
                this.stateID();
                this.state = 65;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === alpacaParser.QUOTEDCHAR) {
                    {
                        this.state = 64;
                        this.match(alpacaParser.QUOTEDCHAR);
                    }
                }
                this.state = 70;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === alpacaParser.T__6) {
                    {
                        {
                            this.state = 67;
                            this.membershipDecl();
                        }
                    }
                    this.state = 72;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 74;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === alpacaParser.T__8) {
                    {
                        this.state = 73;
                        this.rules();
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
    alpacaParser.prototype.classDefn = function () {
        var _localctx = new ClassDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, alpacaParser.RULE_classDefn);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 76;
                this.match(alpacaParser.T__4);
                this.state = 77;
                this.classID();
                this.state = 81;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === alpacaParser.T__6) {
                    {
                        {
                            this.state = 78;
                            this.membershipDecl();
                        }
                    }
                    this.state = 83;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 85;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === alpacaParser.T__8) {
                    {
                        this.state = 84;
                        this.rules();
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
    alpacaParser.prototype.nbhdDefn = function () {
        var _localctx = new NbhdDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, alpacaParser.RULE_nbhdDefn);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 87;
                this.match(alpacaParser.T__5);
                this.state = 88;
                this.nbhdID();
                this.state = 89;
                this.neigbourhood();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    alpacaParser.prototype.classID = function () {
        var _localctx = new ClassIDContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, alpacaParser.RULE_classID);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 91;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    alpacaParser.prototype.stateID = function () {
        var _localctx = new StateIDContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, alpacaParser.RULE_stateID);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 93;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    alpacaParser.prototype.nbhdID = function () {
        var _localctx = new NbhdIDContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, alpacaParser.RULE_nbhdID);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 95;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    alpacaParser.prototype.membershipDecl = function () {
        var _localctx = new MembershipDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, alpacaParser.RULE_membershipDecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 97;
                this.classRef();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    alpacaParser.prototype.classRef = function () {
        var _localctx = new ClassRefContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, alpacaParser.RULE_classRef);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 99;
                this.match(alpacaParser.T__6);
                this.state = 100;
                this.classID();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    alpacaParser.prototype.rules = function () {
        var _localctx = new RulesContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, alpacaParser.RULE_rules);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 102;
                this.rule_();
                this.state = 107;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === alpacaParser.T__7) {
                    {
                        {
                            this.state = 103;
                            this.match(alpacaParser.T__7);
                            this.state = 104;
                            this.rule_();
                        }
                    }
                    this.state = 109;
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
    alpacaParser.prototype.rule_ = function () {
        var _localctx = new Rule_Context(this._ctx, this.state);
        this.enterRule(_localctx, 24, alpacaParser.RULE_rule_);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 110;
                this.match(alpacaParser.T__8);
                this.state = 111;
                this.stateRef();
                this.state = 114;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === alpacaParser.T__9) {
                    {
                        this.state = 112;
                        this.match(alpacaParser.T__9);
                        this.state = 113;
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
    alpacaParser.prototype.stateRef = function () {
        var _localctx = new StateRefContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, alpacaParser.RULE_stateRef);
        try {
            this.state = 119;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case alpacaParser.ALPHA:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 116;
                        this.stateID();
                    }
                    break;
                case alpacaParser.ARROW:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 117;
                        this.arrowchain();
                    }
                    break;
                case alpacaParser.T__10:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 118;
                        this.match(alpacaParser.T__10);
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
    alpacaParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, alpacaParser.RULE_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 121;
                this.term();
                this.state = 126;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << alpacaParser.T__11) | (1 << alpacaParser.T__12) | (1 << alpacaParser.T__13))) !== 0)) {
                    {
                        {
                            this.state = 122;
                            _la = this._input.LA(1);
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << alpacaParser.T__11) | (1 << alpacaParser.T__12) | (1 << alpacaParser.T__13))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 123;
                            this.term();
                        }
                    }
                    this.state = 128;
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
    alpacaParser.prototype.term = function () {
        var _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, alpacaParser.RULE_term);
        try {
            this.state = 138;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case alpacaParser.DIGIT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 129;
                        this.adjacencyPred();
                    }
                    break;
                case alpacaParser.T__14:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 130;
                        this.match(alpacaParser.T__14);
                        this.state = 131;
                        this.expression();
                        this.state = 132;
                        this.match(alpacaParser.T__15);
                    }
                    break;
                case alpacaParser.T__16:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 134;
                        this.match(alpacaParser.T__16);
                        this.state = 135;
                        this.term();
                    }
                    break;
                case alpacaParser.T__19:
                case alpacaParser.T__20:
                case alpacaParser.T__21:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 136;
                        this.boolPrimitive();
                    }
                    break;
                case alpacaParser.T__10:
                case alpacaParser.ALPHA:
                case alpacaParser.ARROW:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 137;
                        this.relationalPred();
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
    alpacaParser.prototype.relationalPred = function () {
        var _localctx = new RelationalPredContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, alpacaParser.RULE_relationalPred);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 140;
                this.stateRef();
                this.state = 146;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case alpacaParser.T__10:
                    case alpacaParser.T__17:
                    case alpacaParser.ALPHA:
                    case alpacaParser.ARROW:
                        {
                            this.state = 142;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === alpacaParser.T__17) {
                                {
                                    this.state = 141;
                                    this.match(alpacaParser.T__17);
                                }
                            }
                            this.state = 144;
                            this.stateRef();
                        }
                        break;
                    case alpacaParser.T__6:
                        {
                            this.state = 145;
                            this.classRef();
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
    alpacaParser.prototype.adjacencyPred = function () {
        var _localctx = new AdjacencyPredContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, alpacaParser.RULE_adjacencyPred);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 148;
                this.naturalnumber();
                this.state = 154;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === alpacaParser.T__18) {
                    {
                        this.state = 149;
                        this.match(alpacaParser.T__18);
                        this.state = 152;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case alpacaParser.T__14:
                                {
                                    this.state = 150;
                                    this.neigbourhood();
                                }
                                break;
                            case alpacaParser.ALPHA:
                                {
                                    this.state = 151;
                                    this.nbhdID();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                }
                this.state = 158;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case alpacaParser.T__10:
                    case alpacaParser.ALPHA:
                    case alpacaParser.ARROW:
                        {
                            this.state = 156;
                            this.stateRef();
                        }
                        break;
                    case alpacaParser.T__6:
                        {
                            this.state = 157;
                            this.classRef();
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
    alpacaParser.prototype.boolPrimitive = function () {
        var _localctx = new BoolPrimitiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, alpacaParser.RULE_boolPrimitive);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 160;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << alpacaParser.T__19) | (1 << alpacaParser.T__20) | (1 << alpacaParser.T__21))) !== 0))) {
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
    alpacaParser.prototype.neigbourhood = function () {
        var _localctx = new NeigbourhoodContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, alpacaParser.RULE_neigbourhood);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 162;
                this.match(alpacaParser.T__14);
                this.state = 166;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === alpacaParser.ARROW) {
                    {
                        {
                            this.state = 163;
                            this.arrowchain();
                        }
                    }
                    this.state = 168;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 169;
                this.match(alpacaParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    alpacaParser.prototype.identifier = function () {
        var _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, alpacaParser.RULE_identifier);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 171;
                this.match(alpacaParser.ALPHA);
                this.state = 175;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 172;
                                _la = this._input.LA(1);
                                if (!(_la === alpacaParser.ALPHA || _la === alpacaParser.DIGIT)) {
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
                    this.state = 177;
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
    alpacaParser.prototype.naturalnumber = function () {
        var _localctx = new NaturalnumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, alpacaParser.RULE_naturalnumber);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 179;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 178;
                            this.match(alpacaParser.DIGIT);
                        }
                    }
                    this.state = 181;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === alpacaParser.DIGIT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    alpacaParser.prototype.arrowchain = function () {
        var _localctx = new ArrowchainContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, alpacaParser.RULE_arrowchain);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 184;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 183;
                                    this.match(alpacaParser.ARROW);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 186;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
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
    Object.defineProperty(alpacaParser, "_ATN", {
        get: function () {
            if (!alpacaParser.__ATN) {
                alpacaParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(alpacaParser._serializedATN));
            }
            return alpacaParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    alpacaParser.T__0 = 1;
    alpacaParser.T__1 = 2;
    alpacaParser.T__2 = 3;
    alpacaParser.T__3 = 4;
    alpacaParser.T__4 = 5;
    alpacaParser.T__5 = 6;
    alpacaParser.T__6 = 7;
    alpacaParser.T__7 = 8;
    alpacaParser.T__8 = 9;
    alpacaParser.T__9 = 10;
    alpacaParser.T__10 = 11;
    alpacaParser.T__11 = 12;
    alpacaParser.T__12 = 13;
    alpacaParser.T__13 = 14;
    alpacaParser.T__14 = 15;
    alpacaParser.T__15 = 16;
    alpacaParser.T__16 = 17;
    alpacaParser.T__17 = 18;
    alpacaParser.T__18 = 19;
    alpacaParser.T__19 = 20;
    alpacaParser.T__20 = 21;
    alpacaParser.T__21 = 22;
    alpacaParser.QUOTEDCHAR = 23;
    alpacaParser.QUOTE = 24;
    alpacaParser.ALPHA = 25;
    alpacaParser.DIGIT = 26;
    alpacaParser.ARROW = 27;
    alpacaParser.COMMENT = 28;
    alpacaParser.WS = 29;
    alpacaParser.RULE_prog = 0;
    alpacaParser.RULE_defns = 1;
    alpacaParser.RULE_defn = 2;
    alpacaParser.RULE_stateDefn = 3;
    alpacaParser.RULE_classDefn = 4;
    alpacaParser.RULE_nbhdDefn = 5;
    alpacaParser.RULE_classID = 6;
    alpacaParser.RULE_stateID = 7;
    alpacaParser.RULE_nbhdID = 8;
    alpacaParser.RULE_membershipDecl = 9;
    alpacaParser.RULE_classRef = 10;
    alpacaParser.RULE_rules = 11;
    alpacaParser.RULE_rule_ = 12;
    alpacaParser.RULE_stateRef = 13;
    alpacaParser.RULE_expression = 14;
    alpacaParser.RULE_term = 15;
    alpacaParser.RULE_relationalPred = 16;
    alpacaParser.RULE_adjacencyPred = 17;
    alpacaParser.RULE_boolPrimitive = 18;
    alpacaParser.RULE_neigbourhood = 19;
    alpacaParser.RULE_identifier = 20;
    alpacaParser.RULE_naturalnumber = 21;
    alpacaParser.RULE_arrowchain = 22;
    // tslint:disable:no-trailing-whitespace
    alpacaParser.ruleNames = [
        "prog", "defns", "defn", "stateDefn", "classDefn", "nbhdDefn", "classID",
        "stateID", "nbhdID", "membershipDecl", "classRef", "rules", "rule_", "stateRef",
        "expression", "term", "relationalPred", "adjacencyPred", "boolPrimitive",
        "neigbourhood", "identifier", "naturalnumber", "arrowchain",
    ];
    alpacaParser._LITERAL_NAMES = [
        undefined, "'.'", "'begin'", "';'", "'state'", "'class'", "'neighbourhood'",
        "'is'", "','", "'to'", "'when'", "'me'", "'and'", "'or'", "'xor'", "'('",
        "')'", "'not'", "'='", "'in'", "'true'", "'false'", "'guess'", undefined,
        "'\"'",
    ];
    alpacaParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "QUOTEDCHAR", "QUOTE", "ALPHA", "DIGIT", "ARROW",
        "COMMENT", "WS",
    ];
    alpacaParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(alpacaParser._LITERAL_NAMES, alpacaParser._SYMBOLIC_NAMES, []);
    alpacaParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1F\xBF\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x07\x037\n" +
        "\x03\f\x03\x0E\x03:\v\x03\x03\x04\x03\x04\x03\x04\x05\x04?\n\x04\x03\x05" +
        "\x03\x05\x03\x05\x05\x05D\n\x05\x03\x05\x07\x05G\n\x05\f\x05\x0E\x05J" +
        "\v\x05\x03\x05\x05\x05M\n\x05\x03\x06\x03\x06\x03\x06\x07\x06R\n\x06\f" +
        "\x06\x0E\x06U\v\x06\x03\x06\x05\x06X\n\x06\x03\x07\x03\x07\x03\x07\x03" +
        "\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f" +
        "\x03\r\x03\r\x03\r\x07\rl\n\r\f\r\x0E\ro\v\r\x03\x0E\x03\x0E\x03\x0E\x03" +
        "\x0E\x05\x0Eu\n\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0Fz\n\x0F\x03\x10\x03" +
        "\x10\x03\x10\x07\x10\x7F\n\x10\f\x10\x0E\x10\x82\v\x10\x03\x11\x03\x11" +
        "\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\x8D\n" +
        "\x11\x03\x12\x03\x12\x05\x12\x91\n\x12\x03\x12\x03\x12\x05\x12\x95\n\x12" +
        "\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\x9B\n\x13\x05\x13\x9D\n\x13\x03" +
        "\x13\x03\x13\x05\x13\xA1\n\x13\x03\x14\x03\x14\x03\x15\x03\x15\x07\x15" +
        "\xA7\n\x15\f\x15\x0E\x15\xAA\v\x15\x03\x15\x03\x15\x03\x16\x03\x16\x07" +
        "\x16\xB0\n\x16\f\x16\x0E\x16\xB3\v\x16\x03\x17\x06\x17\xB6\n\x17\r\x17" +
        "\x0E\x17\xB7\x03\x18\x06\x18\xBB\n\x18\r\x18\x0E\x18\xBC\x03\x18\x02\x02" +
        "\x02\x19\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
        "\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
        "\x02(\x02*\x02,\x02.\x02\x02\x06\x03\x02\x03\x04\x03\x02\x0E\x10\x03\x02" +
        "\x16\x18\x03\x02\x1B\x1C\x02\xC1\x020\x03\x02\x02\x02\x043\x03\x02\x02" +
        "\x02\x06>\x03\x02\x02\x02\b@\x03\x02\x02\x02\nN\x03\x02\x02\x02\fY\x03" +
        "\x02\x02\x02\x0E]\x03\x02\x02\x02\x10_\x03\x02\x02\x02\x12a\x03\x02\x02" +
        "\x02\x14c\x03\x02\x02\x02\x16e\x03\x02\x02\x02\x18h\x03\x02\x02\x02\x1A" +
        "p\x03\x02\x02\x02\x1Cy\x03\x02\x02\x02\x1E{\x03\x02\x02\x02 \x8C\x03\x02" +
        "\x02\x02\"\x8E\x03\x02\x02\x02$\x96\x03\x02\x02\x02&\xA2\x03\x02\x02\x02" +
        "(\xA4\x03\x02\x02\x02*\xAD\x03\x02\x02\x02,\xB5\x03\x02\x02\x02.\xBA\x03" +
        "\x02\x02\x0201\x05\x04\x03\x0212\t\x02\x02\x022\x03\x03\x02\x02\x0238" +
        "\x05\x06\x04\x0245\x07\x05\x02\x0257\x05\x06\x04\x0264\x03\x02\x02\x02" +
        "7:\x03\x02\x02\x0286\x03\x02\x02\x0289\x03\x02\x02\x029\x05\x03\x02\x02" +
        "\x02:8\x03\x02\x02\x02;?\x05\b\x05\x02<?\x05\n\x06\x02=?\x05\f\x07\x02" +
        ">;\x03\x02\x02\x02><\x03\x02\x02\x02>=\x03\x02\x02\x02?\x07\x03\x02\x02" +
        "\x02@A\x07\x06\x02\x02AC\x05\x10\t\x02BD\x07\x19\x02\x02CB\x03\x02\x02" +
        "\x02CD\x03\x02\x02\x02DH\x03\x02\x02\x02EG\x05\x14\v\x02FE\x03\x02\x02" +
        "\x02GJ\x03\x02\x02\x02HF\x03\x02\x02\x02HI\x03\x02\x02\x02IL\x03\x02\x02" +
        "\x02JH\x03\x02\x02\x02KM\x05\x18\r\x02LK\x03\x02\x02\x02LM\x03\x02\x02" +
        "\x02M\t\x03\x02\x02\x02NO\x07\x07\x02\x02OS\x05\x0E\b\x02PR\x05\x14\v" +
        "\x02QP\x03\x02\x02\x02RU\x03\x02\x02\x02SQ\x03\x02\x02\x02ST\x03\x02\x02" +
        "\x02TW\x03\x02\x02\x02US\x03\x02\x02\x02VX\x05\x18\r\x02WV\x03\x02\x02" +
        "\x02WX\x03\x02\x02\x02X\v\x03\x02\x02\x02YZ\x07\b\x02\x02Z[\x05\x12\n" +
        "\x02[\\\x05(\x15\x02\\\r\x03\x02\x02\x02]^\x05*\x16\x02^\x0F\x03\x02\x02" +
        "\x02_`\x05*\x16\x02`\x11\x03\x02\x02\x02ab\x05*\x16\x02b\x13\x03\x02\x02" +
        "\x02cd\x05\x16\f\x02d\x15\x03\x02\x02\x02ef\x07\t\x02\x02fg\x05\x0E\b" +
        "\x02g\x17\x03\x02\x02\x02hm\x05\x1A\x0E\x02ij\x07\n\x02\x02jl\x05\x1A" +
        "\x0E\x02ki\x03\x02\x02\x02lo\x03\x02\x02\x02mk\x03\x02\x02\x02mn\x03\x02" +
        "\x02\x02n\x19\x03\x02\x02\x02om\x03\x02\x02\x02pq\x07\v\x02\x02qt\x05" +
        "\x1C\x0F\x02rs\x07\f\x02\x02su\x05\x1E\x10\x02tr\x03\x02\x02\x02tu\x03" +
        "\x02\x02\x02u\x1B\x03\x02\x02\x02vz\x05\x10\t\x02wz\x05.\x18\x02xz\x07" +
        "\r\x02\x02yv\x03\x02\x02\x02yw\x03\x02\x02\x02yx\x03\x02\x02\x02z\x1D" +
        "\x03\x02\x02\x02{\x80\x05 \x11\x02|}\t\x03\x02\x02}\x7F\x05 \x11\x02~" +
        "|\x03\x02\x02\x02\x7F\x82\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x80\x81" +
        "\x03\x02\x02\x02\x81\x1F\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02\x83\x8D" +
        "\x05$\x13\x02\x84\x85\x07\x11\x02\x02\x85\x86\x05\x1E\x10\x02\x86\x87" +
        "\x07\x12\x02\x02\x87\x8D\x03\x02\x02\x02\x88\x89\x07\x13\x02\x02\x89\x8D" +
        "\x05 \x11\x02\x8A\x8D\x05&\x14\x02\x8B\x8D\x05\"\x12\x02\x8C\x83\x03\x02" +
        "\x02\x02\x8C\x84\x03\x02\x02\x02\x8C\x88\x03\x02\x02\x02\x8C\x8A\x03\x02" +
        "\x02\x02\x8C\x8B\x03\x02\x02\x02\x8D!\x03\x02\x02\x02\x8E\x94\x05\x1C" +
        "\x0F\x02\x8F\x91\x07\x14\x02\x02\x90\x8F\x03\x02\x02\x02\x90\x91\x03\x02" +
        "\x02\x02\x91\x92\x03\x02\x02\x02\x92\x95\x05\x1C\x0F\x02\x93\x95\x05\x16" +
        "\f\x02\x94\x90\x03\x02\x02\x02\x94\x93\x03\x02\x02\x02\x95#\x03\x02\x02" +
        "\x02\x96\x9C\x05,\x17\x02\x97\x9A\x07\x15\x02\x02\x98\x9B\x05(\x15\x02" +
        "\x99\x9B\x05\x12\n\x02\x9A\x98\x03\x02\x02\x02\x9A\x99\x03\x02\x02\x02" +
        "\x9B\x9D\x03\x02\x02\x02\x9C\x97\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02" +
        "\x9D\xA0\x03\x02\x02\x02\x9E\xA1\x05\x1C\x0F\x02\x9F\xA1\x05\x16\f\x02" +
        "\xA0\x9E\x03\x02\x02\x02\xA0\x9F\x03\x02\x02\x02\xA1%\x03\x02\x02\x02" +
        "\xA2\xA3\t\x04\x02\x02\xA3\'\x03\x02\x02\x02\xA4\xA8\x07\x11\x02\x02\xA5" +
        "\xA7\x05.\x18\x02\xA6\xA5\x03\x02\x02\x02\xA7\xAA\x03\x02\x02\x02\xA8" +
        "\xA6\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xAB\x03\x02\x02\x02\xAA" +
        "\xA8\x03\x02\x02\x02\xAB\xAC\x07\x12\x02\x02\xAC)\x03\x02\x02\x02\xAD" +
        "\xB1\x07\x1B\x02\x02\xAE\xB0\t\x05\x02\x02\xAF\xAE\x03\x02\x02\x02\xB0" +
        "\xB3\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2" +
        "+\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB4\xB6\x07\x1C\x02\x02\xB5" +
        "\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB7" +
        "\xB8\x03\x02\x02\x02\xB8-\x03\x02\x02\x02\xB9\xBB\x07\x1D\x02\x02\xBA" +
        "\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBC" +
        "\xBD\x03\x02\x02\x02\xBD/\x03\x02\x02\x02\x178>CHLSWmty\x80\x8C\x90\x94" +
        "\x9A\x9C\xA0\xA8\xB1\xB7\xBC";
    return alpacaParser;
}(Parser_1.Parser));
exports.alpacaParser = alpacaParser;
var ProgContext = /** @class */ (function (_super) {
    __extends(ProgContext, _super);
    function ProgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgContext.prototype.defns = function () {
        return this.getRuleContext(0, DefnsContext);
    };
    Object.defineProperty(ProgContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return alpacaParser.RULE_prog; },
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
var DefnsContext = /** @class */ (function (_super) {
    __extends(DefnsContext, _super);
    function DefnsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefnsContext.prototype.defn = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DefnContext);
        }
        else {
            return this.getRuleContext(i, DefnContext);
        }
    };
    Object.defineProperty(DefnsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return alpacaParser.RULE_defns; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefnsContext.prototype.enterRule = function (listener) {
        if (listener.enterDefns) {
            listener.enterDefns(this);
        }
    };
    // @Override
    DefnsContext.prototype.exitRule = function (listener) {
        if (listener.exitDefns) {
            listener.exitDefns(this);
        }
    };
    // @Override
    DefnsContext.prototype.accept = function (visitor) {
        if (visitor.visitDefns) {
            return visitor.visitDefns(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefnsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefnsContext = DefnsContext;
var DefnContext = /** @class */ (function (_super) {
    __extends(DefnContext, _super);
    function DefnContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefnContext.prototype.stateDefn = function () {
        return this.tryGetRuleContext(0, StateDefnContext);
    };
    DefnContext.prototype.classDefn = function () {
        return this.tryGetRuleContext(0, ClassDefnContext);
    };
    DefnContext.prototype.nbhdDefn = function () {
        return this.tryGetRuleContext(0, NbhdDefnContext);
    };
    Object.defineProperty(DefnContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return alpacaParser.RULE_defn; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefnContext.prototype.enterRule = function (listener) {
        if (listener.enterDefn) {
            listener.enterDefn(this);
        }
    };
    // @Override
    DefnContext.prototype.exitRule = function (listener) {
        if (listener.exitDefn) {
            listener.exitDefn(this);
        }
    };
    // @Override
    DefnContext.prototype.accept = function (visitor) {
        if (visitor.visitDefn) {
            return visitor.visitDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefnContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefnContext = DefnContext;
var StateDefnContext = /** @class */ (function (_super) {
    __extends(StateDefnContext, _super);
    function StateDefnContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StateDefnContext.prototype.stateID = function () {
        return this.getRuleContext(0, StateIDContext);
    };
    StateDefnContext.prototype.QUOTEDCHAR = function () { return this.tryGetToken(alpacaParser.QUOTEDCHAR, 0); };
    StateDefnContext.prototype.membershipDecl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MembershipDeclContext);
        }
        else {
            return this.getRuleContext(i, MembershipDeclContext);
        }
    };
    StateDefnContext.prototype.rules = function () {
        return this.tryGetRuleContext(0, RulesContext);
    };
    Object.defineProperty(StateDefnContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return alpacaParser.RULE_stateDefn; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StateDefnContext.prototype.enterRule = function (listener) {
        if (listener.enterStateDefn) {
            listener.enterStateDefn(this);
        }
    };
    // @Override
    StateDefnContext.prototype.exitRule = function (listener) {
        if (listener.exitStateDefn) {
            listener.exitStateDefn(this);
        }
    };
    // @Override
    StateDefnContext.prototype.accept = function (visitor) {
        if (visitor.visitStateDefn) {
            return visitor.visitStateDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StateDefnContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StateDefnContext = StateDefnContext;
var ClassDefnContext = /** @class */ (function (_super) {
    __extends(ClassDefnContext, _super);
    function ClassDefnContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassDefnContext.prototype.classID = function () {
        return this.getRuleContext(0, ClassIDContext);
    };
    ClassDefnContext.prototype.membershipDecl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MembershipDeclContext);
        }
        else {
            return this.getRuleContext(i, MembershipDeclContext);
        }
    };
    ClassDefnContext.prototype.rules = function () {
        return this.tryGetRuleContext(0, RulesContext);
    };
    Object.defineProperty(ClassDefnContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return alpacaParser.RULE_classDefn; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassDefnContext.prototype.enterRule = function (listener) {
        if (listener.enterClassDefn) {
            listener.enterClassDefn(this);
        }
    };
    // @Override
    ClassDefnContext.prototype.exitRule = function (listener) {
        if (listener.exitClassDefn) {
            listener.exitClassDefn(this);
        }
    };
    // @Override
    ClassDefnContext.prototype.accept = function (visitor) {
        if (visitor.visitClassDefn) {
            return visitor.visitClassDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassDefnContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassDefnContext = ClassDefnContext;
var NbhdDefnContext = /** @class */ (function (_super) {
    __extends(NbhdDefnContext, _super);
    function NbhdDefnContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NbhdDefnContext.prototype.nbhdID = function () {
        return this.getRuleContext(0, NbhdIDContext);
    };
    NbhdDefnContext.prototype.neigbourhood = function () {
        return this.getRuleContext(0, NeigbourhoodContext);
    };
    Object.defineProperty(NbhdDefnContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return alpacaParser.RULE_nbhdDefn; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NbhdDefnContext.prototype.enterRule = function (listener) {
        if (listener.enterNbhdDefn) {
            listener.enterNbhdDefn(this);
        }
    };
    // @Override
    NbhdDefnContext.prototype.exitRule = function (listener) {
        if (listener.exitNbhdDefn) {
            listener.exitNbhdDefn(this);
        }
    };
    // @Override
    NbhdDefnContext.prototype.accept = function (visitor) {
        if (visitor.visitNbhdDefn) {
            return visitor.visitNbhdDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NbhdDefnContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NbhdDefnContext = NbhdDefnContext;
var ClassIDContext = /** @class */ (function (_super) {
    __extends(ClassIDContext, _super);
    function ClassIDContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassIDContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(ClassIDContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return alpacaParser.RULE_classID; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassIDContext.prototype.enterRule = function (listener) {
        if (listener.enterClassID) {
            listener.enterClassID(this);
        }
    };
    // @Override
    ClassIDContext.prototype.exitRule = function (listener) {
        if (listener.exitClassID) {
            listener.exitClassID(this);
        }
    };
    // @Override
    ClassIDContext.prototype.accept = function (visitor) {
        if (visitor.visitClassID) {
            return visitor.visitClassID(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassIDContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassIDContext = ClassIDContext;
var StateIDContext = /** @class */ (function (_super) {
    __extends(StateIDContext, _super);
    function StateIDContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StateIDContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(StateIDContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return alpacaParser.RULE_stateID; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StateIDContext.prototype.enterRule = function (listener) {
        if (listener.enterStateID) {
            listener.enterStateID(this);
        }
    };
    // @Override
    StateIDContext.prototype.exitRule = function (listener) {
        if (listener.exitStateID) {
            listener.exitStateID(this);
        }
    };
    // @Override
    StateIDContext.prototype.accept = function (visitor) {
        if (visitor.visitStateID) {
            return visitor.visitStateID(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StateIDContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StateIDContext = StateIDContext;
var NbhdIDContext = /** @class */ (function (_super) {
    __extends(NbhdIDContext, _super);
    function NbhdIDContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NbhdIDContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(NbhdIDContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return alpacaParser.RULE_nbhdID; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NbhdIDContext.prototype.enterRule = function (listener) {
        if (listener.enterNbhdID) {
            listener.enterNbhdID(this);
        }
    };
    // @Override
    NbhdIDContext.prototype.exitRule = function (listener) {
        if (listener.exitNbhdID) {
            listener.exitNbhdID(this);
        }
    };
    // @Override
    NbhdIDContext.prototype.accept = function (visitor) {
        if (visitor.visitNbhdID) {
            return visitor.visitNbhdID(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NbhdIDContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NbhdIDContext = NbhdIDContext;
var MembershipDeclContext = /** @class */ (function (_super) {
    __extends(MembershipDeclContext, _super);
    function MembershipDeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MembershipDeclContext.prototype.classRef = function () {
        return this.getRuleContext(0, ClassRefContext);
    };
    Object.defineProperty(MembershipDeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return alpacaParser.RULE_membershipDecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MembershipDeclContext.prototype.enterRule = function (listener) {
        if (listener.enterMembershipDecl) {
            listener.enterMembershipDecl(this);
        }
    };
    // @Override
    MembershipDeclContext.prototype.exitRule = function (listener) {
        if (listener.exitMembershipDecl) {
            listener.exitMembershipDecl(this);
        }
    };
    // @Override
    MembershipDeclContext.prototype.accept = function (visitor) {
        if (visitor.visitMembershipDecl) {
            return visitor.visitMembershipDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MembershipDeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MembershipDeclContext = MembershipDeclContext;
var ClassRefContext = /** @class */ (function (_super) {
    __extends(ClassRefContext, _super);
    function ClassRefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassRefContext.prototype.classID = function () {
        return this.getRuleContext(0, ClassIDContext);
    };
    Object.defineProperty(ClassRefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return alpacaParser.RULE_classRef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassRefContext.prototype.enterRule = function (listener) {
        if (listener.enterClassRef) {
            listener.enterClassRef(this);
        }
    };
    // @Override
    ClassRefContext.prototype.exitRule = function (listener) {
        if (listener.exitClassRef) {
            listener.exitClassRef(this);
        }
    };
    // @Override
    ClassRefContext.prototype.accept = function (visitor) {
        if (visitor.visitClassRef) {
            return visitor.visitClassRef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassRefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassRefContext = ClassRefContext;
var RulesContext = /** @class */ (function (_super) {
    __extends(RulesContext, _super);
    function RulesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RulesContext.prototype.rule_ = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Rule_Context);
        }
        else {
            return this.getRuleContext(i, Rule_Context);
        }
    };
    Object.defineProperty(RulesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return alpacaParser.RULE_rules; },
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
var Rule_Context = /** @class */ (function (_super) {
    __extends(Rule_Context, _super);
    function Rule_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rule_Context.prototype.stateRef = function () {
        return this.getRuleContext(0, StateRefContext);
    };
    Rule_Context.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(Rule_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return alpacaParser.RULE_rule_; },
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
var StateRefContext = /** @class */ (function (_super) {
    __extends(StateRefContext, _super);
    function StateRefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StateRefContext.prototype.stateID = function () {
        return this.tryGetRuleContext(0, StateIDContext);
    };
    StateRefContext.prototype.arrowchain = function () {
        return this.tryGetRuleContext(0, ArrowchainContext);
    };
    Object.defineProperty(StateRefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return alpacaParser.RULE_stateRef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StateRefContext.prototype.enterRule = function (listener) {
        if (listener.enterStateRef) {
            listener.enterStateRef(this);
        }
    };
    // @Override
    StateRefContext.prototype.exitRule = function (listener) {
        if (listener.exitStateRef) {
            listener.exitStateRef(this);
        }
    };
    // @Override
    StateRefContext.prototype.accept = function (visitor) {
        if (visitor.visitStateRef) {
            return visitor.visitStateRef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StateRefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StateRefContext = StateRefContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return alpacaParser.RULE_expression; },
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
var TermContext = /** @class */ (function (_super) {
    __extends(TermContext, _super);
    function TermContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TermContext.prototype.adjacencyPred = function () {
        return this.tryGetRuleContext(0, AdjacencyPredContext);
    };
    TermContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    TermContext.prototype.term = function () {
        return this.tryGetRuleContext(0, TermContext);
    };
    TermContext.prototype.boolPrimitive = function () {
        return this.tryGetRuleContext(0, BoolPrimitiveContext);
    };
    TermContext.prototype.relationalPred = function () {
        return this.tryGetRuleContext(0, RelationalPredContext);
    };
    Object.defineProperty(TermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return alpacaParser.RULE_term; },
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
var RelationalPredContext = /** @class */ (function (_super) {
    __extends(RelationalPredContext, _super);
    function RelationalPredContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RelationalPredContext.prototype.stateRef = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StateRefContext);
        }
        else {
            return this.getRuleContext(i, StateRefContext);
        }
    };
    RelationalPredContext.prototype.classRef = function () {
        return this.tryGetRuleContext(0, ClassRefContext);
    };
    Object.defineProperty(RelationalPredContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return alpacaParser.RULE_relationalPred; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RelationalPredContext.prototype.enterRule = function (listener) {
        if (listener.enterRelationalPred) {
            listener.enterRelationalPred(this);
        }
    };
    // @Override
    RelationalPredContext.prototype.exitRule = function (listener) {
        if (listener.exitRelationalPred) {
            listener.exitRelationalPred(this);
        }
    };
    // @Override
    RelationalPredContext.prototype.accept = function (visitor) {
        if (visitor.visitRelationalPred) {
            return visitor.visitRelationalPred(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RelationalPredContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RelationalPredContext = RelationalPredContext;
var AdjacencyPredContext = /** @class */ (function (_super) {
    __extends(AdjacencyPredContext, _super);
    function AdjacencyPredContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AdjacencyPredContext.prototype.naturalnumber = function () {
        return this.getRuleContext(0, NaturalnumberContext);
    };
    AdjacencyPredContext.prototype.stateRef = function () {
        return this.tryGetRuleContext(0, StateRefContext);
    };
    AdjacencyPredContext.prototype.classRef = function () {
        return this.tryGetRuleContext(0, ClassRefContext);
    };
    AdjacencyPredContext.prototype.neigbourhood = function () {
        return this.tryGetRuleContext(0, NeigbourhoodContext);
    };
    AdjacencyPredContext.prototype.nbhdID = function () {
        return this.tryGetRuleContext(0, NbhdIDContext);
    };
    Object.defineProperty(AdjacencyPredContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return alpacaParser.RULE_adjacencyPred; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AdjacencyPredContext.prototype.enterRule = function (listener) {
        if (listener.enterAdjacencyPred) {
            listener.enterAdjacencyPred(this);
        }
    };
    // @Override
    AdjacencyPredContext.prototype.exitRule = function (listener) {
        if (listener.exitAdjacencyPred) {
            listener.exitAdjacencyPred(this);
        }
    };
    // @Override
    AdjacencyPredContext.prototype.accept = function (visitor) {
        if (visitor.visitAdjacencyPred) {
            return visitor.visitAdjacencyPred(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AdjacencyPredContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AdjacencyPredContext = AdjacencyPredContext;
var BoolPrimitiveContext = /** @class */ (function (_super) {
    __extends(BoolPrimitiveContext, _super);
    function BoolPrimitiveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(BoolPrimitiveContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return alpacaParser.RULE_boolPrimitive; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BoolPrimitiveContext.prototype.enterRule = function (listener) {
        if (listener.enterBoolPrimitive) {
            listener.enterBoolPrimitive(this);
        }
    };
    // @Override
    BoolPrimitiveContext.prototype.exitRule = function (listener) {
        if (listener.exitBoolPrimitive) {
            listener.exitBoolPrimitive(this);
        }
    };
    // @Override
    BoolPrimitiveContext.prototype.accept = function (visitor) {
        if (visitor.visitBoolPrimitive) {
            return visitor.visitBoolPrimitive(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BoolPrimitiveContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BoolPrimitiveContext = BoolPrimitiveContext;
var NeigbourhoodContext = /** @class */ (function (_super) {
    __extends(NeigbourhoodContext, _super);
    function NeigbourhoodContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NeigbourhoodContext.prototype.arrowchain = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ArrowchainContext);
        }
        else {
            return this.getRuleContext(i, ArrowchainContext);
        }
    };
    Object.defineProperty(NeigbourhoodContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return alpacaParser.RULE_neigbourhood; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NeigbourhoodContext.prototype.enterRule = function (listener) {
        if (listener.enterNeigbourhood) {
            listener.enterNeigbourhood(this);
        }
    };
    // @Override
    NeigbourhoodContext.prototype.exitRule = function (listener) {
        if (listener.exitNeigbourhood) {
            listener.exitNeigbourhood(this);
        }
    };
    // @Override
    NeigbourhoodContext.prototype.accept = function (visitor) {
        if (visitor.visitNeigbourhood) {
            return visitor.visitNeigbourhood(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NeigbourhoodContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NeigbourhoodContext = NeigbourhoodContext;
var IdentifierContext = /** @class */ (function (_super) {
    __extends(IdentifierContext, _super);
    function IdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierContext.prototype.ALPHA = function (i) {
        if (i === undefined) {
            return this.getTokens(alpacaParser.ALPHA);
        }
        else {
            return this.getToken(alpacaParser.ALPHA, i);
        }
    };
    IdentifierContext.prototype.DIGIT = function (i) {
        if (i === undefined) {
            return this.getTokens(alpacaParser.DIGIT);
        }
        else {
            return this.getToken(alpacaParser.DIGIT, i);
        }
    };
    Object.defineProperty(IdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return alpacaParser.RULE_identifier; },
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
var NaturalnumberContext = /** @class */ (function (_super) {
    __extends(NaturalnumberContext, _super);
    function NaturalnumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NaturalnumberContext.prototype.DIGIT = function (i) {
        if (i === undefined) {
            return this.getTokens(alpacaParser.DIGIT);
        }
        else {
            return this.getToken(alpacaParser.DIGIT, i);
        }
    };
    Object.defineProperty(NaturalnumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return alpacaParser.RULE_naturalnumber; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NaturalnumberContext.prototype.enterRule = function (listener) {
        if (listener.enterNaturalnumber) {
            listener.enterNaturalnumber(this);
        }
    };
    // @Override
    NaturalnumberContext.prototype.exitRule = function (listener) {
        if (listener.exitNaturalnumber) {
            listener.exitNaturalnumber(this);
        }
    };
    // @Override
    NaturalnumberContext.prototype.accept = function (visitor) {
        if (visitor.visitNaturalnumber) {
            return visitor.visitNaturalnumber(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NaturalnumberContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NaturalnumberContext = NaturalnumberContext;
var ArrowchainContext = /** @class */ (function (_super) {
    __extends(ArrowchainContext, _super);
    function ArrowchainContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrowchainContext.prototype.ARROW = function (i) {
        if (i === undefined) {
            return this.getTokens(alpacaParser.ARROW);
        }
        else {
            return this.getToken(alpacaParser.ARROW, i);
        }
    };
    Object.defineProperty(ArrowchainContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return alpacaParser.RULE_arrowchain; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrowchainContext.prototype.enterRule = function (listener) {
        if (listener.enterArrowchain) {
            listener.enterArrowchain(this);
        }
    };
    // @Override
    ArrowchainContext.prototype.exitRule = function (listener) {
        if (listener.exitArrowchain) {
            listener.exitArrowchain(this);
        }
    };
    // @Override
    ArrowchainContext.prototype.accept = function (visitor) {
        if (visitor.visitArrowchain) {
            return visitor.visitArrowchain(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrowchainContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrowchainContext = ArrowchainContext;
