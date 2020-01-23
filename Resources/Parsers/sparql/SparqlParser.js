"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/sparql/Sparql.g4 by ANTLR 4.7.3-SNAPSHOT
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
var ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var SparqlParser = /** @class */ (function (_super) {
    __extends(SparqlParser, _super);
    function SparqlParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(SparqlParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(SparqlParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return SparqlParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SparqlParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "Sparql.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SparqlParser.prototype, "ruleNames", {
        // @Override
        get: function () { return SparqlParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SparqlParser.prototype, "serializedATN", {
        // @Override
        get: function () { return SparqlParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    SparqlParser.prototype.query = function () {
        var _localctx = new QueryContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, SparqlParser.RULE_query);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 138;
                this.prologue();
                this.state = 143;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SparqlParser.T__2:
                        {
                            this.state = 139;
                            this.selectQuery();
                        }
                        break;
                    case SparqlParser.T__6:
                        {
                            this.state = 140;
                            this.constructQuery();
                        }
                        break;
                    case SparqlParser.T__7:
                        {
                            this.state = 141;
                            this.describeQuery();
                        }
                        break;
                    case SparqlParser.T__8:
                        {
                            this.state = 142;
                            this.askQuery();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 145;
                this.match(SparqlParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SparqlParser.prototype.prologue = function () {
        var _localctx = new PrologueContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, SparqlParser.RULE_prologue);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 148;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SparqlParser.T__0) {
                    {
                        this.state = 147;
                        this.baseDecl();
                    }
                }
                this.state = 153;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SparqlParser.T__1) {
                    {
                        {
                            this.state = 150;
                            this.prefixDecl();
                        }
                    }
                    this.state = 155;
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
    SparqlParser.prototype.baseDecl = function () {
        var _localctx = new BaseDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, SparqlParser.RULE_baseDecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 156;
                this.match(SparqlParser.T__0);
                this.state = 157;
                this.match(SparqlParser.IRI_REF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SparqlParser.prototype.prefixDecl = function () {
        var _localctx = new PrefixDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, SparqlParser.RULE_prefixDecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 159;
                this.match(SparqlParser.T__1);
                this.state = 160;
                this.match(SparqlParser.PNAME_NS);
                this.state = 161;
                this.match(SparqlParser.IRI_REF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SparqlParser.prototype.selectQuery = function () {
        var _localctx = new SelectQueryContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, SparqlParser.RULE_selectQuery);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 163;
                this.match(SparqlParser.T__2);
                this.state = 165;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SparqlParser.T__3 || _la === SparqlParser.T__4) {
                    {
                        this.state = 164;
                        _la = this._input.LA(1);
                        if (!(_la === SparqlParser.T__3 || _la === SparqlParser.T__4)) {
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
                this.state = 173;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SparqlParser.VAR1:
                    case SparqlParser.VAR2:
                        {
                            this.state = 168;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 167;
                                        this.var();
                                    }
                                }
                                this.state = 170;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === SparqlParser.VAR1 || _la === SparqlParser.VAR2);
                        }
                        break;
                    case SparqlParser.T__5:
                        {
                            this.state = 172;
                            this.match(SparqlParser.T__5);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 178;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SparqlParser.T__9) {
                    {
                        {
                            this.state = 175;
                            this.datasetClause();
                        }
                    }
                    this.state = 180;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 181;
                this.whereClause();
                this.state = 182;
                this.solutionModifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SparqlParser.prototype.constructQuery = function () {
        var _localctx = new ConstructQueryContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, SparqlParser.RULE_constructQuery);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 184;
                this.match(SparqlParser.T__6);
                this.state = 185;
                this.constructTemplate();
                this.state = 189;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SparqlParser.T__9) {
                    {
                        {
                            this.state = 186;
                            this.datasetClause();
                        }
                    }
                    this.state = 191;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 192;
                this.whereClause();
                this.state = 193;
                this.solutionModifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SparqlParser.prototype.describeQuery = function () {
        var _localctx = new DescribeQueryContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, SparqlParser.RULE_describeQuery);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 195;
                this.match(SparqlParser.T__7);
                this.state = 202;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SparqlParser.IRI_REF:
                    case SparqlParser.PNAME_NS:
                    case SparqlParser.PNAME_LN:
                    case SparqlParser.VAR1:
                    case SparqlParser.VAR2:
                        {
                            this.state = 197;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 196;
                                        this.varOrIRIref();
                                    }
                                }
                                this.state = 199;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (SparqlParser.IRI_REF - 59)) | (1 << (SparqlParser.PNAME_NS - 59)) | (1 << (SparqlParser.PNAME_LN - 59)) | (1 << (SparqlParser.VAR1 - 59)) | (1 << (SparqlParser.VAR2 - 59)))) !== 0));
                        }
                        break;
                    case SparqlParser.T__5:
                        {
                            this.state = 201;
                            this.match(SparqlParser.T__5);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 207;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SparqlParser.T__9) {
                    {
                        {
                            this.state = 204;
                            this.datasetClause();
                        }
                    }
                    this.state = 209;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 211;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SparqlParser.T__11 || _la === SparqlParser.T__18) {
                    {
                        this.state = 210;
                        this.whereClause();
                    }
                }
                this.state = 213;
                this.solutionModifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SparqlParser.prototype.askQuery = function () {
        var _localctx = new AskQueryContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, SparqlParser.RULE_askQuery);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 215;
                this.match(SparqlParser.T__8);
                this.state = 219;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SparqlParser.T__9) {
                    {
                        {
                            this.state = 216;
                            this.datasetClause();
                        }
                    }
                    this.state = 221;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 222;
                this.whereClause();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SparqlParser.prototype.datasetClause = function () {
        var _localctx = new DatasetClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, SparqlParser.RULE_datasetClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 224;
                this.match(SparqlParser.T__9);
                this.state = 227;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SparqlParser.IRI_REF:
                    case SparqlParser.PNAME_NS:
                    case SparqlParser.PNAME_LN:
                        {
                            this.state = 225;
                            this.defaultGraphClause();
                        }
                        break;
                    case SparqlParser.T__10:
                        {
                            this.state = 226;
                            this.namedGraphClause();
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
    SparqlParser.prototype.defaultGraphClause = function () {
        var _localctx = new DefaultGraphClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, SparqlParser.RULE_defaultGraphClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 229;
                this.sourceSelector();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SparqlParser.prototype.namedGraphClause = function () {
        var _localctx = new NamedGraphClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, SparqlParser.RULE_namedGraphClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 231;
                this.match(SparqlParser.T__10);
                this.state = 232;
                this.sourceSelector();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SparqlParser.prototype.sourceSelector = function () {
        var _localctx = new SourceSelectorContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, SparqlParser.RULE_sourceSelector);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 234;
                this.iriRef();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SparqlParser.prototype.whereClause = function () {
        var _localctx = new WhereClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, SparqlParser.RULE_whereClause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 237;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SparqlParser.T__11) {
                    {
                        this.state = 236;
                        this.match(SparqlParser.T__11);
                    }
                }
                this.state = 239;
                this.groupGraphPattern();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SparqlParser.prototype.solutionModifier = function () {
        var _localctx = new SolutionModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, SparqlParser.RULE_solutionModifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 242;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SparqlParser.T__12) {
                    {
                        this.state = 241;
                        this.orderClause();
                    }
                }
                this.state = 245;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SparqlParser.T__16 || _la === SparqlParser.T__17) {
                    {
                        this.state = 244;
                        this.limitOffsetClauses();
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
    SparqlParser.prototype.limitOffsetClauses = function () {
        var _localctx = new LimitOffsetClausesContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, SparqlParser.RULE_limitOffsetClauses);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 255;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SparqlParser.T__16:
                        {
                            this.state = 247;
                            this.limitClause();
                            this.state = 249;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SparqlParser.T__17) {
                                {
                                    this.state = 248;
                                    this.offsetClause();
                                }
                            }
                        }
                        break;
                    case SparqlParser.T__17:
                        {
                            this.state = 251;
                            this.offsetClause();
                            this.state = 253;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SparqlParser.T__16) {
                                {
                                    this.state = 252;
                                    this.limitClause();
                                }
                            }
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
    SparqlParser.prototype.orderClause = function () {
        var _localctx = new OrderClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, SparqlParser.RULE_orderClause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 257;
                this.match(SparqlParser.T__12);
                this.state = 258;
                this.match(SparqlParser.T__13);
                this.state = 260;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 259;
                            this.orderCondition();
                        }
                    }
                    this.state = 262;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SparqlParser.T__14) | (1 << SparqlParser.T__15) | (1 << SparqlParser.T__25))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (SparqlParser.T__44 - 45)) | (1 << (SparqlParser.T__45 - 45)) | (1 << (SparqlParser.T__46 - 45)) | (1 << (SparqlParser.T__47 - 45)) | (1 << (SparqlParser.T__48 - 45)) | (1 << (SparqlParser.T__49 - 45)) | (1 << (SparqlParser.T__50 - 45)) | (1 << (SparqlParser.T__51 - 45)) | (1 << (SparqlParser.T__52 - 45)) | (1 << (SparqlParser.T__53 - 45)) | (1 << (SparqlParser.T__54 - 45)) | (1 << (SparqlParser.IRI_REF - 45)) | (1 << (SparqlParser.PNAME_NS - 45)) | (1 << (SparqlParser.PNAME_LN - 45)) | (1 << (SparqlParser.VAR1 - 45)) | (1 << (SparqlParser.VAR2 - 45)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SparqlParser.prototype.orderCondition = function () {
        var _localctx = new OrderConditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, SparqlParser.RULE_orderCondition);
        var _la;
        try {
            this.state = 270;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SparqlParser.T__14:
                case SparqlParser.T__15:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 264;
                            _la = this._input.LA(1);
                            if (!(_la === SparqlParser.T__14 || _la === SparqlParser.T__15)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 265;
                            this.brackettedExpression();
                        }
                    }
                    break;
                case SparqlParser.T__25:
                case SparqlParser.T__44:
                case SparqlParser.T__45:
                case SparqlParser.T__46:
                case SparqlParser.T__47:
                case SparqlParser.T__48:
                case SparqlParser.T__49:
                case SparqlParser.T__50:
                case SparqlParser.T__51:
                case SparqlParser.T__52:
                case SparqlParser.T__53:
                case SparqlParser.T__54:
                case SparqlParser.IRI_REF:
                case SparqlParser.PNAME_NS:
                case SparqlParser.PNAME_LN:
                case SparqlParser.VAR1:
                case SparqlParser.VAR2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 268;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case SparqlParser.T__25:
                            case SparqlParser.T__44:
                            case SparqlParser.T__45:
                            case SparqlParser.T__46:
                            case SparqlParser.T__47:
                            case SparqlParser.T__48:
                            case SparqlParser.T__49:
                            case SparqlParser.T__50:
                            case SparqlParser.T__51:
                            case SparqlParser.T__52:
                            case SparqlParser.T__53:
                            case SparqlParser.T__54:
                            case SparqlParser.IRI_REF:
                            case SparqlParser.PNAME_NS:
                            case SparqlParser.PNAME_LN:
                                {
                                    this.state = 266;
                                    this.constraint();
                                }
                                break;
                            case SparqlParser.VAR1:
                            case SparqlParser.VAR2:
                                {
                                    this.state = 267;
                                    this.var();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
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
    SparqlParser.prototype.limitClause = function () {
        var _localctx = new LimitClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, SparqlParser.RULE_limitClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 272;
                this.match(SparqlParser.T__16);
                this.state = 273;
                this.match(SparqlParser.INTEGER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SparqlParser.prototype.offsetClause = function () {
        var _localctx = new OffsetClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, SparqlParser.RULE_offsetClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 275;
                this.match(SparqlParser.T__17);
                this.state = 276;
                this.match(SparqlParser.INTEGER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SparqlParser.prototype.groupGraphPattern = function () {
        var _localctx = new GroupGraphPatternContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, SparqlParser.RULE_groupGraphPattern);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 278;
                this.match(SparqlParser.T__18);
                this.state = 280;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SparqlParser.T__25 || _la === SparqlParser.T__30 || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (SparqlParser.T__56 - 57)) | (1 << (SparqlParser.T__57 - 57)) | (1 << (SparqlParser.IRI_REF - 57)) | (1 << (SparqlParser.PNAME_NS - 57)) | (1 << (SparqlParser.PNAME_LN - 57)) | (1 << (SparqlParser.BLANK_NODE_LABEL - 57)) | (1 << (SparqlParser.VAR1 - 57)) | (1 << (SparqlParser.VAR2 - 57)) | (1 << (SparqlParser.INTEGER - 57)) | (1 << (SparqlParser.DECIMAL - 57)) | (1 << (SparqlParser.DOUBLE - 57)) | (1 << (SparqlParser.INTEGER_POSITIVE - 57)) | (1 << (SparqlParser.DECIMAL_POSITIVE - 57)) | (1 << (SparqlParser.DOUBLE_POSITIVE - 57)) | (1 << (SparqlParser.INTEGER_NEGATIVE - 57)) | (1 << (SparqlParser.DECIMAL_NEGATIVE - 57)) | (1 << (SparqlParser.DOUBLE_NEGATIVE - 57)) | (1 << (SparqlParser.STRING_LITERAL1 - 57)) | (1 << (SparqlParser.STRING_LITERAL2 - 57)) | (1 << (SparqlParser.NIL - 57)) | (1 << (SparqlParser.ANON - 57)))) !== 0)) {
                    {
                        this.state = 279;
                        this.triplesBlock();
                    }
                }
                this.state = 294;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SparqlParser.T__18) | (1 << SparqlParser.T__21) | (1 << SparqlParser.T__22) | (1 << SparqlParser.T__24))) !== 0)) {
                    {
                        {
                            this.state = 284;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case SparqlParser.T__18:
                                case SparqlParser.T__21:
                                case SparqlParser.T__22:
                                    {
                                        this.state = 282;
                                        this.graphPatternNotTriples();
                                    }
                                    break;
                                case SparqlParser.T__24:
                                    {
                                        this.state = 283;
                                        this.filter();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 287;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SparqlParser.T__19) {
                                {
                                    this.state = 286;
                                    this.match(SparqlParser.T__19);
                                }
                            }
                            this.state = 290;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SparqlParser.T__25 || _la === SparqlParser.T__30 || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (SparqlParser.T__56 - 57)) | (1 << (SparqlParser.T__57 - 57)) | (1 << (SparqlParser.IRI_REF - 57)) | (1 << (SparqlParser.PNAME_NS - 57)) | (1 << (SparqlParser.PNAME_LN - 57)) | (1 << (SparqlParser.BLANK_NODE_LABEL - 57)) | (1 << (SparqlParser.VAR1 - 57)) | (1 << (SparqlParser.VAR2 - 57)) | (1 << (SparqlParser.INTEGER - 57)) | (1 << (SparqlParser.DECIMAL - 57)) | (1 << (SparqlParser.DOUBLE - 57)) | (1 << (SparqlParser.INTEGER_POSITIVE - 57)) | (1 << (SparqlParser.DECIMAL_POSITIVE - 57)) | (1 << (SparqlParser.DOUBLE_POSITIVE - 57)) | (1 << (SparqlParser.INTEGER_NEGATIVE - 57)) | (1 << (SparqlParser.DECIMAL_NEGATIVE - 57)) | (1 << (SparqlParser.DOUBLE_NEGATIVE - 57)) | (1 << (SparqlParser.STRING_LITERAL1 - 57)) | (1 << (SparqlParser.STRING_LITERAL2 - 57)) | (1 << (SparqlParser.NIL - 57)) | (1 << (SparqlParser.ANON - 57)))) !== 0)) {
                                {
                                    this.state = 289;
                                    this.triplesBlock();
                                }
                            }
                        }
                    }
                    this.state = 296;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 297;
                this.match(SparqlParser.T__20);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SparqlParser.prototype.triplesBlock = function () {
        var _localctx = new TriplesBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, SparqlParser.RULE_triplesBlock);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 299;
                this.triplesSameSubject();
                this.state = 304;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SparqlParser.T__19) {
                    {
                        this.state = 300;
                        this.match(SparqlParser.T__19);
                        this.state = 302;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SparqlParser.T__25 || _la === SparqlParser.T__30 || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (SparqlParser.T__56 - 57)) | (1 << (SparqlParser.T__57 - 57)) | (1 << (SparqlParser.IRI_REF - 57)) | (1 << (SparqlParser.PNAME_NS - 57)) | (1 << (SparqlParser.PNAME_LN - 57)) | (1 << (SparqlParser.BLANK_NODE_LABEL - 57)) | (1 << (SparqlParser.VAR1 - 57)) | (1 << (SparqlParser.VAR2 - 57)) | (1 << (SparqlParser.INTEGER - 57)) | (1 << (SparqlParser.DECIMAL - 57)) | (1 << (SparqlParser.DOUBLE - 57)) | (1 << (SparqlParser.INTEGER_POSITIVE - 57)) | (1 << (SparqlParser.DECIMAL_POSITIVE - 57)) | (1 << (SparqlParser.DOUBLE_POSITIVE - 57)) | (1 << (SparqlParser.INTEGER_NEGATIVE - 57)) | (1 << (SparqlParser.DECIMAL_NEGATIVE - 57)) | (1 << (SparqlParser.DOUBLE_NEGATIVE - 57)) | (1 << (SparqlParser.STRING_LITERAL1 - 57)) | (1 << (SparqlParser.STRING_LITERAL2 - 57)) | (1 << (SparqlParser.NIL - 57)) | (1 << (SparqlParser.ANON - 57)))) !== 0)) {
                            {
                                this.state = 301;
                                this.triplesBlock();
                            }
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
    SparqlParser.prototype.graphPatternNotTriples = function () {
        var _localctx = new GraphPatternNotTriplesContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, SparqlParser.RULE_graphPatternNotTriples);
        try {
            this.state = 309;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SparqlParser.T__21:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 306;
                        this.optionalGraphPattern();
                    }
                    break;
                case SparqlParser.T__18:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 307;
                        this.groupOrUnionGraphPattern();
                    }
                    break;
                case SparqlParser.T__22:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 308;
                        this.graphGraphPattern();
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
    SparqlParser.prototype.optionalGraphPattern = function () {
        var _localctx = new OptionalGraphPatternContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, SparqlParser.RULE_optionalGraphPattern);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 311;
                this.match(SparqlParser.T__21);
                this.state = 312;
                this.groupGraphPattern();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SparqlParser.prototype.graphGraphPattern = function () {
        var _localctx = new GraphGraphPatternContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, SparqlParser.RULE_graphGraphPattern);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 314;
                this.match(SparqlParser.T__22);
                this.state = 315;
                this.varOrIRIref();
                this.state = 316;
                this.groupGraphPattern();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SparqlParser.prototype.groupOrUnionGraphPattern = function () {
        var _localctx = new GroupOrUnionGraphPatternContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, SparqlParser.RULE_groupOrUnionGraphPattern);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 318;
                this.groupGraphPattern();
                this.state = 323;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SparqlParser.T__23) {
                    {
                        {
                            this.state = 319;
                            this.match(SparqlParser.T__23);
                            this.state = 320;
                            this.groupGraphPattern();
                        }
                    }
                    this.state = 325;
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
    SparqlParser.prototype.filter = function () {
        var _localctx = new FilterContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, SparqlParser.RULE_filter);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 326;
                this.match(SparqlParser.T__24);
                this.state = 327;
                this.constraint();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SparqlParser.prototype.constraint = function () {
        var _localctx = new ConstraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, SparqlParser.RULE_constraint);
        try {
            this.state = 332;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SparqlParser.T__25:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 329;
                        this.brackettedExpression();
                    }
                    break;
                case SparqlParser.T__44:
                case SparqlParser.T__45:
                case SparqlParser.T__46:
                case SparqlParser.T__47:
                case SparqlParser.T__48:
                case SparqlParser.T__49:
                case SparqlParser.T__50:
                case SparqlParser.T__51:
                case SparqlParser.T__52:
                case SparqlParser.T__53:
                case SparqlParser.T__54:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 330;
                        this.builtInCall();
                    }
                    break;
                case SparqlParser.IRI_REF:
                case SparqlParser.PNAME_NS:
                case SparqlParser.PNAME_LN:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 331;
                        this.functionCall();
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
    SparqlParser.prototype.functionCall = function () {
        var _localctx = new FunctionCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, SparqlParser.RULE_functionCall);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 334;
                this.iriRef();
                this.state = 335;
                this.argList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SparqlParser.prototype.argList = function () {
        var _localctx = new ArgListContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, SparqlParser.RULE_argList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 349;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SparqlParser.NIL:
                        {
                            this.state = 337;
                            this.match(SparqlParser.NIL);
                        }
                        break;
                    case SparqlParser.T__25:
                        {
                            this.state = 338;
                            this.match(SparqlParser.T__25);
                            this.state = 339;
                            this.expression();
                            this.state = 344;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === SparqlParser.T__26) {
                                {
                                    {
                                        this.state = 340;
                                        this.match(SparqlParser.T__26);
                                        this.state = 341;
                                        this.expression();
                                    }
                                }
                                this.state = 346;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 347;
                            this.match(SparqlParser.T__27);
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
    SparqlParser.prototype.constructTemplate = function () {
        var _localctx = new ConstructTemplateContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, SparqlParser.RULE_constructTemplate);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 351;
                this.match(SparqlParser.T__18);
                this.state = 353;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SparqlParser.T__25 || _la === SparqlParser.T__30 || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (SparqlParser.T__56 - 57)) | (1 << (SparqlParser.T__57 - 57)) | (1 << (SparqlParser.IRI_REF - 57)) | (1 << (SparqlParser.PNAME_NS - 57)) | (1 << (SparqlParser.PNAME_LN - 57)) | (1 << (SparqlParser.BLANK_NODE_LABEL - 57)) | (1 << (SparqlParser.VAR1 - 57)) | (1 << (SparqlParser.VAR2 - 57)) | (1 << (SparqlParser.INTEGER - 57)) | (1 << (SparqlParser.DECIMAL - 57)) | (1 << (SparqlParser.DOUBLE - 57)) | (1 << (SparqlParser.INTEGER_POSITIVE - 57)) | (1 << (SparqlParser.DECIMAL_POSITIVE - 57)) | (1 << (SparqlParser.DOUBLE_POSITIVE - 57)) | (1 << (SparqlParser.INTEGER_NEGATIVE - 57)) | (1 << (SparqlParser.DECIMAL_NEGATIVE - 57)) | (1 << (SparqlParser.DOUBLE_NEGATIVE - 57)) | (1 << (SparqlParser.STRING_LITERAL1 - 57)) | (1 << (SparqlParser.STRING_LITERAL2 - 57)) | (1 << (SparqlParser.NIL - 57)) | (1 << (SparqlParser.ANON - 57)))) !== 0)) {
                    {
                        this.state = 352;
                        this.constructTriples();
                    }
                }
                this.state = 355;
                this.match(SparqlParser.T__20);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SparqlParser.prototype.constructTriples = function () {
        var _localctx = new ConstructTriplesContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, SparqlParser.RULE_constructTriples);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 357;
                this.triplesSameSubject();
                this.state = 362;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SparqlParser.T__19) {
                    {
                        this.state = 358;
                        this.match(SparqlParser.T__19);
                        this.state = 360;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SparqlParser.T__25 || _la === SparqlParser.T__30 || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (SparqlParser.T__56 - 57)) | (1 << (SparqlParser.T__57 - 57)) | (1 << (SparqlParser.IRI_REF - 57)) | (1 << (SparqlParser.PNAME_NS - 57)) | (1 << (SparqlParser.PNAME_LN - 57)) | (1 << (SparqlParser.BLANK_NODE_LABEL - 57)) | (1 << (SparqlParser.VAR1 - 57)) | (1 << (SparqlParser.VAR2 - 57)) | (1 << (SparqlParser.INTEGER - 57)) | (1 << (SparqlParser.DECIMAL - 57)) | (1 << (SparqlParser.DOUBLE - 57)) | (1 << (SparqlParser.INTEGER_POSITIVE - 57)) | (1 << (SparqlParser.DECIMAL_POSITIVE - 57)) | (1 << (SparqlParser.DOUBLE_POSITIVE - 57)) | (1 << (SparqlParser.INTEGER_NEGATIVE - 57)) | (1 << (SparqlParser.DECIMAL_NEGATIVE - 57)) | (1 << (SparqlParser.DOUBLE_NEGATIVE - 57)) | (1 << (SparqlParser.STRING_LITERAL1 - 57)) | (1 << (SparqlParser.STRING_LITERAL2 - 57)) | (1 << (SparqlParser.NIL - 57)) | (1 << (SparqlParser.ANON - 57)))) !== 0)) {
                            {
                                this.state = 359;
                                this.constructTriples();
                            }
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
    SparqlParser.prototype.triplesSameSubject = function () {
        var _localctx = new TriplesSameSubjectContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, SparqlParser.RULE_triplesSameSubject);
        try {
            this.state = 370;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SparqlParser.T__56:
                case SparqlParser.T__57:
                case SparqlParser.IRI_REF:
                case SparqlParser.PNAME_NS:
                case SparqlParser.PNAME_LN:
                case SparqlParser.BLANK_NODE_LABEL:
                case SparqlParser.VAR1:
                case SparqlParser.VAR2:
                case SparqlParser.INTEGER:
                case SparqlParser.DECIMAL:
                case SparqlParser.DOUBLE:
                case SparqlParser.INTEGER_POSITIVE:
                case SparqlParser.DECIMAL_POSITIVE:
                case SparqlParser.DOUBLE_POSITIVE:
                case SparqlParser.INTEGER_NEGATIVE:
                case SparqlParser.DECIMAL_NEGATIVE:
                case SparqlParser.DOUBLE_NEGATIVE:
                case SparqlParser.STRING_LITERAL1:
                case SparqlParser.STRING_LITERAL2:
                case SparqlParser.NIL:
                case SparqlParser.ANON:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 364;
                        this.varOrTerm();
                        this.state = 365;
                        this.propertyListNotEmpty();
                    }
                    break;
                case SparqlParser.T__25:
                case SparqlParser.T__30:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 367;
                        this.triplesNode();
                        this.state = 368;
                        this.propertyList();
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
    SparqlParser.prototype.propertyListNotEmpty = function () {
        var _localctx = new PropertyListNotEmptyContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, SparqlParser.RULE_propertyListNotEmpty);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 372;
                this.verb();
                this.state = 373;
                this.objectList();
                this.state = 382;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SparqlParser.T__28) {
                    {
                        {
                            this.state = 374;
                            this.match(SparqlParser.T__28);
                            this.state = 378;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SparqlParser.T__29 || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (SparqlParser.IRI_REF - 59)) | (1 << (SparqlParser.PNAME_NS - 59)) | (1 << (SparqlParser.PNAME_LN - 59)) | (1 << (SparqlParser.VAR1 - 59)) | (1 << (SparqlParser.VAR2 - 59)))) !== 0)) {
                                {
                                    this.state = 375;
                                    this.verb();
                                    this.state = 376;
                                    this.objectList();
                                }
                            }
                        }
                    }
                    this.state = 384;
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
    SparqlParser.prototype.propertyList = function () {
        var _localctx = new PropertyListContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, SparqlParser.RULE_propertyList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 386;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SparqlParser.T__29 || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (SparqlParser.IRI_REF - 59)) | (1 << (SparqlParser.PNAME_NS - 59)) | (1 << (SparqlParser.PNAME_LN - 59)) | (1 << (SparqlParser.VAR1 - 59)) | (1 << (SparqlParser.VAR2 - 59)))) !== 0)) {
                    {
                        this.state = 385;
                        this.propertyListNotEmpty();
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
    SparqlParser.prototype.objectList = function () {
        var _localctx = new ObjectListContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, SparqlParser.RULE_objectList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 388;
                this.object();
                this.state = 393;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SparqlParser.T__26) {
                    {
                        {
                            this.state = 389;
                            this.match(SparqlParser.T__26);
                            this.state = 390;
                            this.object();
                        }
                    }
                    this.state = 395;
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
    SparqlParser.prototype.object = function () {
        var _localctx = new ObjectContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, SparqlParser.RULE_object);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 396;
                this.graphNode();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SparqlParser.prototype.verb = function () {
        var _localctx = new VerbContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, SparqlParser.RULE_verb);
        try {
            this.state = 400;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SparqlParser.IRI_REF:
                case SparqlParser.PNAME_NS:
                case SparqlParser.PNAME_LN:
                case SparqlParser.VAR1:
                case SparqlParser.VAR2:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 398;
                        this.varOrIRIref();
                    }
                    break;
                case SparqlParser.T__29:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 399;
                        this.match(SparqlParser.T__29);
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
    SparqlParser.prototype.triplesNode = function () {
        var _localctx = new TriplesNodeContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, SparqlParser.RULE_triplesNode);
        try {
            this.state = 404;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SparqlParser.T__25:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 402;
                        this.collection();
                    }
                    break;
                case SparqlParser.T__30:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 403;
                        this.blankNodePropertyList();
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
    SparqlParser.prototype.blankNodePropertyList = function () {
        var _localctx = new BlankNodePropertyListContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, SparqlParser.RULE_blankNodePropertyList);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 406;
                this.match(SparqlParser.T__30);
                this.state = 407;
                this.propertyListNotEmpty();
                this.state = 408;
                this.match(SparqlParser.T__31);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SparqlParser.prototype.collection = function () {
        var _localctx = new CollectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, SparqlParser.RULE_collection);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 410;
                this.match(SparqlParser.T__25);
                this.state = 412;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 411;
                            this.graphNode();
                        }
                    }
                    this.state = 414;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === SparqlParser.T__25 || _la === SparqlParser.T__30 || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (SparqlParser.T__56 - 57)) | (1 << (SparqlParser.T__57 - 57)) | (1 << (SparqlParser.IRI_REF - 57)) | (1 << (SparqlParser.PNAME_NS - 57)) | (1 << (SparqlParser.PNAME_LN - 57)) | (1 << (SparqlParser.BLANK_NODE_LABEL - 57)) | (1 << (SparqlParser.VAR1 - 57)) | (1 << (SparqlParser.VAR2 - 57)) | (1 << (SparqlParser.INTEGER - 57)) | (1 << (SparqlParser.DECIMAL - 57)) | (1 << (SparqlParser.DOUBLE - 57)) | (1 << (SparqlParser.INTEGER_POSITIVE - 57)) | (1 << (SparqlParser.DECIMAL_POSITIVE - 57)) | (1 << (SparqlParser.DOUBLE_POSITIVE - 57)) | (1 << (SparqlParser.INTEGER_NEGATIVE - 57)) | (1 << (SparqlParser.DECIMAL_NEGATIVE - 57)) | (1 << (SparqlParser.DOUBLE_NEGATIVE - 57)) | (1 << (SparqlParser.STRING_LITERAL1 - 57)) | (1 << (SparqlParser.STRING_LITERAL2 - 57)) | (1 << (SparqlParser.NIL - 57)) | (1 << (SparqlParser.ANON - 57)))) !== 0));
                this.state = 416;
                this.match(SparqlParser.T__27);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SparqlParser.prototype.graphNode = function () {
        var _localctx = new GraphNodeContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, SparqlParser.RULE_graphNode);
        try {
            this.state = 420;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SparqlParser.T__56:
                case SparqlParser.T__57:
                case SparqlParser.IRI_REF:
                case SparqlParser.PNAME_NS:
                case SparqlParser.PNAME_LN:
                case SparqlParser.BLANK_NODE_LABEL:
                case SparqlParser.VAR1:
                case SparqlParser.VAR2:
                case SparqlParser.INTEGER:
                case SparqlParser.DECIMAL:
                case SparqlParser.DOUBLE:
                case SparqlParser.INTEGER_POSITIVE:
                case SparqlParser.DECIMAL_POSITIVE:
                case SparqlParser.DOUBLE_POSITIVE:
                case SparqlParser.INTEGER_NEGATIVE:
                case SparqlParser.DECIMAL_NEGATIVE:
                case SparqlParser.DOUBLE_NEGATIVE:
                case SparqlParser.STRING_LITERAL1:
                case SparqlParser.STRING_LITERAL2:
                case SparqlParser.NIL:
                case SparqlParser.ANON:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 418;
                        this.varOrTerm();
                    }
                    break;
                case SparqlParser.T__25:
                case SparqlParser.T__30:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 419;
                        this.triplesNode();
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
    SparqlParser.prototype.varOrTerm = function () {
        var _localctx = new VarOrTermContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, SparqlParser.RULE_varOrTerm);
        try {
            this.state = 424;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SparqlParser.VAR1:
                case SparqlParser.VAR2:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 422;
                        this.var();
                    }
                    break;
                case SparqlParser.T__56:
                case SparqlParser.T__57:
                case SparqlParser.IRI_REF:
                case SparqlParser.PNAME_NS:
                case SparqlParser.PNAME_LN:
                case SparqlParser.BLANK_NODE_LABEL:
                case SparqlParser.INTEGER:
                case SparqlParser.DECIMAL:
                case SparqlParser.DOUBLE:
                case SparqlParser.INTEGER_POSITIVE:
                case SparqlParser.DECIMAL_POSITIVE:
                case SparqlParser.DOUBLE_POSITIVE:
                case SparqlParser.INTEGER_NEGATIVE:
                case SparqlParser.DECIMAL_NEGATIVE:
                case SparqlParser.DOUBLE_NEGATIVE:
                case SparqlParser.STRING_LITERAL1:
                case SparqlParser.STRING_LITERAL2:
                case SparqlParser.NIL:
                case SparqlParser.ANON:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 423;
                        this.graphTerm();
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
    SparqlParser.prototype.varOrIRIref = function () {
        var _localctx = new VarOrIRIrefContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, SparqlParser.RULE_varOrIRIref);
        try {
            this.state = 428;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SparqlParser.VAR1:
                case SparqlParser.VAR2:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 426;
                        this.var();
                    }
                    break;
                case SparqlParser.IRI_REF:
                case SparqlParser.PNAME_NS:
                case SparqlParser.PNAME_LN:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 427;
                        this.iriRef();
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
    SparqlParser.prototype.var = function () {
        var _localctx = new VarContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, SparqlParser.RULE_var);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 430;
                _la = this._input.LA(1);
                if (!(_la === SparqlParser.VAR1 || _la === SparqlParser.VAR2)) {
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
    SparqlParser.prototype.graphTerm = function () {
        var _localctx = new GraphTermContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, SparqlParser.RULE_graphTerm);
        try {
            this.state = 438;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SparqlParser.IRI_REF:
                case SparqlParser.PNAME_NS:
                case SparqlParser.PNAME_LN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 432;
                        this.iriRef();
                    }
                    break;
                case SparqlParser.STRING_LITERAL1:
                case SparqlParser.STRING_LITERAL2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 433;
                        this.rdfLiteral();
                    }
                    break;
                case SparqlParser.INTEGER:
                case SparqlParser.DECIMAL:
                case SparqlParser.DOUBLE:
                case SparqlParser.INTEGER_POSITIVE:
                case SparqlParser.DECIMAL_POSITIVE:
                case SparqlParser.DOUBLE_POSITIVE:
                case SparqlParser.INTEGER_NEGATIVE:
                case SparqlParser.DECIMAL_NEGATIVE:
                case SparqlParser.DOUBLE_NEGATIVE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 434;
                        this.numericLiteral();
                    }
                    break;
                case SparqlParser.T__56:
                case SparqlParser.T__57:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 435;
                        this.booleanLiteral();
                    }
                    break;
                case SparqlParser.BLANK_NODE_LABEL:
                case SparqlParser.ANON:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 436;
                        this.blankNode();
                    }
                    break;
                case SparqlParser.NIL:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 437;
                        this.match(SparqlParser.NIL);
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
    SparqlParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, SparqlParser.RULE_expression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 440;
                this.conditionalOrExpression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SparqlParser.prototype.conditionalOrExpression = function () {
        var _localctx = new ConditionalOrExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, SparqlParser.RULE_conditionalOrExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 442;
                this.conditionalAndExpression();
                this.state = 447;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SparqlParser.T__32) {
                    {
                        {
                            this.state = 443;
                            this.match(SparqlParser.T__32);
                            this.state = 444;
                            this.conditionalAndExpression();
                        }
                    }
                    this.state = 449;
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
    SparqlParser.prototype.conditionalAndExpression = function () {
        var _localctx = new ConditionalAndExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, SparqlParser.RULE_conditionalAndExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 450;
                this.valueLogical();
                this.state = 455;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SparqlParser.T__33) {
                    {
                        {
                            this.state = 451;
                            this.match(SparqlParser.T__33);
                            this.state = 452;
                            this.valueLogical();
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
    SparqlParser.prototype.valueLogical = function () {
        var _localctx = new ValueLogicalContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, SparqlParser.RULE_valueLogical);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 458;
                this.relationalExpression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SparqlParser.prototype.relationalExpression = function () {
        var _localctx = new RelationalExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, SparqlParser.RULE_relationalExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 460;
                this.numericExpression();
                this.state = 473;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SparqlParser.T__34:
                        {
                            this.state = 461;
                            this.match(SparqlParser.T__34);
                            this.state = 462;
                            this.numericExpression();
                        }
                        break;
                    case SparqlParser.T__35:
                        {
                            this.state = 463;
                            this.match(SparqlParser.T__35);
                            this.state = 464;
                            this.numericExpression();
                        }
                        break;
                    case SparqlParser.T__36:
                        {
                            this.state = 465;
                            this.match(SparqlParser.T__36);
                            this.state = 466;
                            this.numericExpression();
                        }
                        break;
                    case SparqlParser.T__37:
                        {
                            this.state = 467;
                            this.match(SparqlParser.T__37);
                            this.state = 468;
                            this.numericExpression();
                        }
                        break;
                    case SparqlParser.T__38:
                        {
                            this.state = 469;
                            this.match(SparqlParser.T__38);
                            this.state = 470;
                            this.numericExpression();
                        }
                        break;
                    case SparqlParser.T__39:
                        {
                            this.state = 471;
                            this.match(SparqlParser.T__39);
                            this.state = 472;
                            this.numericExpression();
                        }
                        break;
                    case SparqlParser.T__26:
                    case SparqlParser.T__27:
                    case SparqlParser.T__32:
                    case SparqlParser.T__33:
                        break;
                    default:
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
    SparqlParser.prototype.numericExpression = function () {
        var _localctx = new NumericExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, SparqlParser.RULE_numericExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 475;
                this.additiveExpression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SparqlParser.prototype.additiveExpression = function () {
        var _localctx = new AdditiveExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, SparqlParser.RULE_additiveExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 477;
                this.multiplicativeExpression();
                this.state = 486;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (SparqlParser.T__40 - 41)) | (1 << (SparqlParser.T__41 - 41)) | (1 << (SparqlParser.INTEGER_POSITIVE - 41)) | (1 << (SparqlParser.DECIMAL_POSITIVE - 41)) | (1 << (SparqlParser.DOUBLE_POSITIVE - 41)) | (1 << (SparqlParser.INTEGER_NEGATIVE - 41)))) !== 0) || _la === SparqlParser.DECIMAL_NEGATIVE || _la === SparqlParser.DOUBLE_NEGATIVE) {
                    {
                        this.state = 484;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case SparqlParser.T__40:
                                {
                                    this.state = 478;
                                    this.match(SparqlParser.T__40);
                                    this.state = 479;
                                    this.multiplicativeExpression();
                                }
                                break;
                            case SparqlParser.T__41:
                                {
                                    this.state = 480;
                                    this.match(SparqlParser.T__41);
                                    this.state = 481;
                                    this.multiplicativeExpression();
                                }
                                break;
                            case SparqlParser.INTEGER_POSITIVE:
                            case SparqlParser.DECIMAL_POSITIVE:
                            case SparqlParser.DOUBLE_POSITIVE:
                                {
                                    this.state = 482;
                                    this.numericLiteralPositive();
                                }
                                break;
                            case SparqlParser.INTEGER_NEGATIVE:
                            case SparqlParser.DECIMAL_NEGATIVE:
                            case SparqlParser.DOUBLE_NEGATIVE:
                                {
                                    this.state = 483;
                                    this.numericLiteralNegative();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 488;
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
    SparqlParser.prototype.multiplicativeExpression = function () {
        var _localctx = new MultiplicativeExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, SparqlParser.RULE_multiplicativeExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 489;
                this.unaryExpression();
                this.state = 496;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SparqlParser.T__5 || _la === SparqlParser.T__42) {
                    {
                        this.state = 494;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case SparqlParser.T__5:
                                {
                                    this.state = 490;
                                    this.match(SparqlParser.T__5);
                                    this.state = 491;
                                    this.unaryExpression();
                                }
                                break;
                            case SparqlParser.T__42:
                                {
                                    this.state = 492;
                                    this.match(SparqlParser.T__42);
                                    this.state = 493;
                                    this.unaryExpression();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 498;
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
    SparqlParser.prototype.unaryExpression = function () {
        var _localctx = new UnaryExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, SparqlParser.RULE_unaryExpression);
        try {
            this.state = 506;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SparqlParser.T__43:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 499;
                        this.match(SparqlParser.T__43);
                        this.state = 500;
                        this.primaryExpression();
                    }
                    break;
                case SparqlParser.T__40:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 501;
                        this.match(SparqlParser.T__40);
                        this.state = 502;
                        this.primaryExpression();
                    }
                    break;
                case SparqlParser.T__41:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 503;
                        this.match(SparqlParser.T__41);
                        this.state = 504;
                        this.primaryExpression();
                    }
                    break;
                case SparqlParser.T__25:
                case SparqlParser.T__44:
                case SparqlParser.T__45:
                case SparqlParser.T__46:
                case SparqlParser.T__47:
                case SparqlParser.T__48:
                case SparqlParser.T__49:
                case SparqlParser.T__50:
                case SparqlParser.T__51:
                case SparqlParser.T__52:
                case SparqlParser.T__53:
                case SparqlParser.T__54:
                case SparqlParser.T__56:
                case SparqlParser.T__57:
                case SparqlParser.IRI_REF:
                case SparqlParser.PNAME_NS:
                case SparqlParser.PNAME_LN:
                case SparqlParser.VAR1:
                case SparqlParser.VAR2:
                case SparqlParser.INTEGER:
                case SparqlParser.DECIMAL:
                case SparqlParser.DOUBLE:
                case SparqlParser.INTEGER_POSITIVE:
                case SparqlParser.DECIMAL_POSITIVE:
                case SparqlParser.DOUBLE_POSITIVE:
                case SparqlParser.INTEGER_NEGATIVE:
                case SparqlParser.DECIMAL_NEGATIVE:
                case SparqlParser.DOUBLE_NEGATIVE:
                case SparqlParser.STRING_LITERAL1:
                case SparqlParser.STRING_LITERAL2:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 505;
                        this.primaryExpression();
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
    SparqlParser.prototype.primaryExpression = function () {
        var _localctx = new PrimaryExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, SparqlParser.RULE_primaryExpression);
        try {
            this.state = 515;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SparqlParser.T__25:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 508;
                        this.brackettedExpression();
                    }
                    break;
                case SparqlParser.T__44:
                case SparqlParser.T__45:
                case SparqlParser.T__46:
                case SparqlParser.T__47:
                case SparqlParser.T__48:
                case SparqlParser.T__49:
                case SparqlParser.T__50:
                case SparqlParser.T__51:
                case SparqlParser.T__52:
                case SparqlParser.T__53:
                case SparqlParser.T__54:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 509;
                        this.builtInCall();
                    }
                    break;
                case SparqlParser.IRI_REF:
                case SparqlParser.PNAME_NS:
                case SparqlParser.PNAME_LN:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 510;
                        this.iriRefOrFunction();
                    }
                    break;
                case SparqlParser.STRING_LITERAL1:
                case SparqlParser.STRING_LITERAL2:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 511;
                        this.rdfLiteral();
                    }
                    break;
                case SparqlParser.INTEGER:
                case SparqlParser.DECIMAL:
                case SparqlParser.DOUBLE:
                case SparqlParser.INTEGER_POSITIVE:
                case SparqlParser.DECIMAL_POSITIVE:
                case SparqlParser.DOUBLE_POSITIVE:
                case SparqlParser.INTEGER_NEGATIVE:
                case SparqlParser.DECIMAL_NEGATIVE:
                case SparqlParser.DOUBLE_NEGATIVE:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 512;
                        this.numericLiteral();
                    }
                    break;
                case SparqlParser.T__56:
                case SparqlParser.T__57:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 513;
                        this.booleanLiteral();
                    }
                    break;
                case SparqlParser.VAR1:
                case SparqlParser.VAR2:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 514;
                        this.var();
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
    SparqlParser.prototype.brackettedExpression = function () {
        var _localctx = new BrackettedExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, SparqlParser.RULE_brackettedExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 517;
                this.match(SparqlParser.T__25);
                this.state = 518;
                this.expression();
                this.state = 519;
                this.match(SparqlParser.T__27);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SparqlParser.prototype.builtInCall = function () {
        var _localctx = new BuiltInCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, SparqlParser.RULE_builtInCall);
        try {
            this.state = 576;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SparqlParser.T__44:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 521;
                        this.match(SparqlParser.T__44);
                        this.state = 522;
                        this.match(SparqlParser.T__25);
                        this.state = 523;
                        this.expression();
                        this.state = 524;
                        this.match(SparqlParser.T__27);
                    }
                    break;
                case SparqlParser.T__45:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 526;
                        this.match(SparqlParser.T__45);
                        this.state = 527;
                        this.match(SparqlParser.T__25);
                        this.state = 528;
                        this.expression();
                        this.state = 529;
                        this.match(SparqlParser.T__27);
                    }
                    break;
                case SparqlParser.T__46:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 531;
                        this.match(SparqlParser.T__46);
                        this.state = 532;
                        this.match(SparqlParser.T__25);
                        this.state = 533;
                        this.expression();
                        this.state = 534;
                        this.match(SparqlParser.T__26);
                        this.state = 535;
                        this.expression();
                        this.state = 536;
                        this.match(SparqlParser.T__27);
                    }
                    break;
                case SparqlParser.T__47:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 538;
                        this.match(SparqlParser.T__47);
                        this.state = 539;
                        this.match(SparqlParser.T__25);
                        this.state = 540;
                        this.expression();
                        this.state = 541;
                        this.match(SparqlParser.T__27);
                    }
                    break;
                case SparqlParser.T__48:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 543;
                        this.match(SparqlParser.T__48);
                        this.state = 544;
                        this.match(SparqlParser.T__25);
                        this.state = 545;
                        this.var();
                        this.state = 546;
                        this.match(SparqlParser.T__27);
                    }
                    break;
                case SparqlParser.T__49:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 548;
                        this.match(SparqlParser.T__49);
                        this.state = 549;
                        this.match(SparqlParser.T__25);
                        this.state = 550;
                        this.expression();
                        this.state = 551;
                        this.match(SparqlParser.T__26);
                        this.state = 552;
                        this.expression();
                        this.state = 553;
                        this.match(SparqlParser.T__27);
                    }
                    break;
                case SparqlParser.T__50:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 555;
                        this.match(SparqlParser.T__50);
                        this.state = 556;
                        this.match(SparqlParser.T__25);
                        this.state = 557;
                        this.expression();
                        this.state = 558;
                        this.match(SparqlParser.T__27);
                    }
                    break;
                case SparqlParser.T__51:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 560;
                        this.match(SparqlParser.T__51);
                        this.state = 561;
                        this.match(SparqlParser.T__25);
                        this.state = 562;
                        this.expression();
                        this.state = 563;
                        this.match(SparqlParser.T__27);
                    }
                    break;
                case SparqlParser.T__52:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 565;
                        this.match(SparqlParser.T__52);
                        this.state = 566;
                        this.match(SparqlParser.T__25);
                        this.state = 567;
                        this.expression();
                        this.state = 568;
                        this.match(SparqlParser.T__27);
                    }
                    break;
                case SparqlParser.T__53:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 570;
                        this.match(SparqlParser.T__53);
                        this.state = 571;
                        this.match(SparqlParser.T__25);
                        this.state = 572;
                        this.expression();
                        this.state = 573;
                        this.match(SparqlParser.T__27);
                    }
                    break;
                case SparqlParser.T__54:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 575;
                        this.regexExpression();
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
    SparqlParser.prototype.regexExpression = function () {
        var _localctx = new RegexExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, SparqlParser.RULE_regexExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 578;
                this.match(SparqlParser.T__54);
                this.state = 579;
                this.match(SparqlParser.T__25);
                this.state = 580;
                this.expression();
                this.state = 581;
                this.match(SparqlParser.T__26);
                this.state = 582;
                this.expression();
                this.state = 585;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SparqlParser.T__26) {
                    {
                        this.state = 583;
                        this.match(SparqlParser.T__26);
                        this.state = 584;
                        this.expression();
                    }
                }
                this.state = 587;
                this.match(SparqlParser.T__27);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SparqlParser.prototype.iriRefOrFunction = function () {
        var _localctx = new IriRefOrFunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, SparqlParser.RULE_iriRefOrFunction);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 589;
                this.iriRef();
                this.state = 591;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SparqlParser.T__25 || _la === SparqlParser.NIL) {
                    {
                        this.state = 590;
                        this.argList();
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
    SparqlParser.prototype.rdfLiteral = function () {
        var _localctx = new RdfLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, SparqlParser.RULE_rdfLiteral);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 593;
                this.string();
                this.state = 597;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SparqlParser.LANGTAG:
                        {
                            this.state = 594;
                            this.match(SparqlParser.LANGTAG);
                        }
                        break;
                    case SparqlParser.T__55:
                        {
                            {
                                this.state = 595;
                                this.match(SparqlParser.T__55);
                                this.state = 596;
                                this.iriRef();
                            }
                        }
                        break;
                    case SparqlParser.T__5:
                    case SparqlParser.T__18:
                    case SparqlParser.T__19:
                    case SparqlParser.T__20:
                    case SparqlParser.T__21:
                    case SparqlParser.T__22:
                    case SparqlParser.T__24:
                    case SparqlParser.T__25:
                    case SparqlParser.T__26:
                    case SparqlParser.T__27:
                    case SparqlParser.T__28:
                    case SparqlParser.T__29:
                    case SparqlParser.T__30:
                    case SparqlParser.T__31:
                    case SparqlParser.T__32:
                    case SparqlParser.T__33:
                    case SparqlParser.T__34:
                    case SparqlParser.T__35:
                    case SparqlParser.T__36:
                    case SparqlParser.T__37:
                    case SparqlParser.T__38:
                    case SparqlParser.T__39:
                    case SparqlParser.T__40:
                    case SparqlParser.T__41:
                    case SparqlParser.T__42:
                    case SparqlParser.T__56:
                    case SparqlParser.T__57:
                    case SparqlParser.IRI_REF:
                    case SparqlParser.PNAME_NS:
                    case SparqlParser.PNAME_LN:
                    case SparqlParser.BLANK_NODE_LABEL:
                    case SparqlParser.VAR1:
                    case SparqlParser.VAR2:
                    case SparqlParser.INTEGER:
                    case SparqlParser.DECIMAL:
                    case SparqlParser.DOUBLE:
                    case SparqlParser.INTEGER_POSITIVE:
                    case SparqlParser.DECIMAL_POSITIVE:
                    case SparqlParser.DOUBLE_POSITIVE:
                    case SparqlParser.INTEGER_NEGATIVE:
                    case SparqlParser.DECIMAL_NEGATIVE:
                    case SparqlParser.DOUBLE_NEGATIVE:
                    case SparqlParser.STRING_LITERAL1:
                    case SparqlParser.STRING_LITERAL2:
                    case SparqlParser.NIL:
                    case SparqlParser.ANON:
                        break;
                    default:
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
    SparqlParser.prototype.numericLiteral = function () {
        var _localctx = new NumericLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, SparqlParser.RULE_numericLiteral);
        try {
            this.state = 602;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SparqlParser.INTEGER:
                case SparqlParser.DECIMAL:
                case SparqlParser.DOUBLE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 599;
                        this.numericLiteralUnsigned();
                    }
                    break;
                case SparqlParser.INTEGER_POSITIVE:
                case SparqlParser.DECIMAL_POSITIVE:
                case SparqlParser.DOUBLE_POSITIVE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 600;
                        this.numericLiteralPositive();
                    }
                    break;
                case SparqlParser.INTEGER_NEGATIVE:
                case SparqlParser.DECIMAL_NEGATIVE:
                case SparqlParser.DOUBLE_NEGATIVE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 601;
                        this.numericLiteralNegative();
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
    SparqlParser.prototype.numericLiteralUnsigned = function () {
        var _localctx = new NumericLiteralUnsignedContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, SparqlParser.RULE_numericLiteralUnsigned);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 604;
                _la = this._input.LA(1);
                if (!(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (SparqlParser.INTEGER - 66)) | (1 << (SparqlParser.DECIMAL - 66)) | (1 << (SparqlParser.DOUBLE - 66)))) !== 0))) {
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
    SparqlParser.prototype.numericLiteralPositive = function () {
        var _localctx = new NumericLiteralPositiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, SparqlParser.RULE_numericLiteralPositive);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 606;
                _la = this._input.LA(1);
                if (!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SparqlParser.INTEGER_POSITIVE - 69)) | (1 << (SparqlParser.DECIMAL_POSITIVE - 69)) | (1 << (SparqlParser.DOUBLE_POSITIVE - 69)))) !== 0))) {
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
    SparqlParser.prototype.numericLiteralNegative = function () {
        var _localctx = new NumericLiteralNegativeContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, SparqlParser.RULE_numericLiteralNegative);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 608;
                _la = this._input.LA(1);
                if (!(((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (SparqlParser.INTEGER_NEGATIVE - 72)) | (1 << (SparqlParser.DECIMAL_NEGATIVE - 72)) | (1 << (SparqlParser.DOUBLE_NEGATIVE - 72)))) !== 0))) {
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
    SparqlParser.prototype.booleanLiteral = function () {
        var _localctx = new BooleanLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, SparqlParser.RULE_booleanLiteral);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 610;
                _la = this._input.LA(1);
                if (!(_la === SparqlParser.T__56 || _la === SparqlParser.T__57)) {
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
    SparqlParser.prototype.string = function () {
        var _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, SparqlParser.RULE_string);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 612;
                _la = this._input.LA(1);
                if (!(_la === SparqlParser.STRING_LITERAL1 || _la === SparqlParser.STRING_LITERAL2)) {
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
    SparqlParser.prototype.iriRef = function () {
        var _localctx = new IriRefContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, SparqlParser.RULE_iriRef);
        try {
            this.state = 616;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SparqlParser.IRI_REF:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 614;
                        this.match(SparqlParser.IRI_REF);
                    }
                    break;
                case SparqlParser.PNAME_NS:
                case SparqlParser.PNAME_LN:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 615;
                        this.prefixedName();
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
    SparqlParser.prototype.prefixedName = function () {
        var _localctx = new PrefixedNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, SparqlParser.RULE_prefixedName);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 618;
                _la = this._input.LA(1);
                if (!(_la === SparqlParser.PNAME_NS || _la === SparqlParser.PNAME_LN)) {
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
    SparqlParser.prototype.blankNode = function () {
        var _localctx = new BlankNodeContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, SparqlParser.RULE_blankNode);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 620;
                _la = this._input.LA(1);
                if (!(_la === SparqlParser.BLANK_NODE_LABEL || _la === SparqlParser.ANON)) {
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
    Object.defineProperty(SparqlParser, "_ATN", {
        get: function () {
            if (!SparqlParser.__ATN) {
                SparqlParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(SparqlParser._serializedATN));
            }
            return SparqlParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    SparqlParser.T__0 = 1;
    SparqlParser.T__1 = 2;
    SparqlParser.T__2 = 3;
    SparqlParser.T__3 = 4;
    SparqlParser.T__4 = 5;
    SparqlParser.T__5 = 6;
    SparqlParser.T__6 = 7;
    SparqlParser.T__7 = 8;
    SparqlParser.T__8 = 9;
    SparqlParser.T__9 = 10;
    SparqlParser.T__10 = 11;
    SparqlParser.T__11 = 12;
    SparqlParser.T__12 = 13;
    SparqlParser.T__13 = 14;
    SparqlParser.T__14 = 15;
    SparqlParser.T__15 = 16;
    SparqlParser.T__16 = 17;
    SparqlParser.T__17 = 18;
    SparqlParser.T__18 = 19;
    SparqlParser.T__19 = 20;
    SparqlParser.T__20 = 21;
    SparqlParser.T__21 = 22;
    SparqlParser.T__22 = 23;
    SparqlParser.T__23 = 24;
    SparqlParser.T__24 = 25;
    SparqlParser.T__25 = 26;
    SparqlParser.T__26 = 27;
    SparqlParser.T__27 = 28;
    SparqlParser.T__28 = 29;
    SparqlParser.T__29 = 30;
    SparqlParser.T__30 = 31;
    SparqlParser.T__31 = 32;
    SparqlParser.T__32 = 33;
    SparqlParser.T__33 = 34;
    SparqlParser.T__34 = 35;
    SparqlParser.T__35 = 36;
    SparqlParser.T__36 = 37;
    SparqlParser.T__37 = 38;
    SparqlParser.T__38 = 39;
    SparqlParser.T__39 = 40;
    SparqlParser.T__40 = 41;
    SparqlParser.T__41 = 42;
    SparqlParser.T__42 = 43;
    SparqlParser.T__43 = 44;
    SparqlParser.T__44 = 45;
    SparqlParser.T__45 = 46;
    SparqlParser.T__46 = 47;
    SparqlParser.T__47 = 48;
    SparqlParser.T__48 = 49;
    SparqlParser.T__49 = 50;
    SparqlParser.T__50 = 51;
    SparqlParser.T__51 = 52;
    SparqlParser.T__52 = 53;
    SparqlParser.T__53 = 54;
    SparqlParser.T__54 = 55;
    SparqlParser.T__55 = 56;
    SparqlParser.T__56 = 57;
    SparqlParser.T__57 = 58;
    SparqlParser.IRI_REF = 59;
    SparqlParser.PNAME_NS = 60;
    SparqlParser.PNAME_LN = 61;
    SparqlParser.BLANK_NODE_LABEL = 62;
    SparqlParser.VAR1 = 63;
    SparqlParser.VAR2 = 64;
    SparqlParser.LANGTAG = 65;
    SparqlParser.INTEGER = 66;
    SparqlParser.DECIMAL = 67;
    SparqlParser.DOUBLE = 68;
    SparqlParser.INTEGER_POSITIVE = 69;
    SparqlParser.DECIMAL_POSITIVE = 70;
    SparqlParser.DOUBLE_POSITIVE = 71;
    SparqlParser.INTEGER_NEGATIVE = 72;
    SparqlParser.DECIMAL_NEGATIVE = 73;
    SparqlParser.DOUBLE_NEGATIVE = 74;
    SparqlParser.EXPONENT = 75;
    SparqlParser.STRING_LITERAL1 = 76;
    SparqlParser.STRING_LITERAL2 = 77;
    SparqlParser.STRING_LITERAL_LONG1 = 78;
    SparqlParser.STRING_LITERAL_LONG2 = 79;
    SparqlParser.ECHAR = 80;
    SparqlParser.NIL = 81;
    SparqlParser.ANON = 82;
    SparqlParser.PN_CHARS_U = 83;
    SparqlParser.VARNAME = 84;
    SparqlParser.PN_PREFIX = 85;
    SparqlParser.PN_LOCAL = 86;
    SparqlParser.WS = 87;
    SparqlParser.RULE_query = 0;
    SparqlParser.RULE_prologue = 1;
    SparqlParser.RULE_baseDecl = 2;
    SparqlParser.RULE_prefixDecl = 3;
    SparqlParser.RULE_selectQuery = 4;
    SparqlParser.RULE_constructQuery = 5;
    SparqlParser.RULE_describeQuery = 6;
    SparqlParser.RULE_askQuery = 7;
    SparqlParser.RULE_datasetClause = 8;
    SparqlParser.RULE_defaultGraphClause = 9;
    SparqlParser.RULE_namedGraphClause = 10;
    SparqlParser.RULE_sourceSelector = 11;
    SparqlParser.RULE_whereClause = 12;
    SparqlParser.RULE_solutionModifier = 13;
    SparqlParser.RULE_limitOffsetClauses = 14;
    SparqlParser.RULE_orderClause = 15;
    SparqlParser.RULE_orderCondition = 16;
    SparqlParser.RULE_limitClause = 17;
    SparqlParser.RULE_offsetClause = 18;
    SparqlParser.RULE_groupGraphPattern = 19;
    SparqlParser.RULE_triplesBlock = 20;
    SparqlParser.RULE_graphPatternNotTriples = 21;
    SparqlParser.RULE_optionalGraphPattern = 22;
    SparqlParser.RULE_graphGraphPattern = 23;
    SparqlParser.RULE_groupOrUnionGraphPattern = 24;
    SparqlParser.RULE_filter = 25;
    SparqlParser.RULE_constraint = 26;
    SparqlParser.RULE_functionCall = 27;
    SparqlParser.RULE_argList = 28;
    SparqlParser.RULE_constructTemplate = 29;
    SparqlParser.RULE_constructTriples = 30;
    SparqlParser.RULE_triplesSameSubject = 31;
    SparqlParser.RULE_propertyListNotEmpty = 32;
    SparqlParser.RULE_propertyList = 33;
    SparqlParser.RULE_objectList = 34;
    SparqlParser.RULE_object = 35;
    SparqlParser.RULE_verb = 36;
    SparqlParser.RULE_triplesNode = 37;
    SparqlParser.RULE_blankNodePropertyList = 38;
    SparqlParser.RULE_collection = 39;
    SparqlParser.RULE_graphNode = 40;
    SparqlParser.RULE_varOrTerm = 41;
    SparqlParser.RULE_varOrIRIref = 42;
    SparqlParser.RULE_var = 43;
    SparqlParser.RULE_graphTerm = 44;
    SparqlParser.RULE_expression = 45;
    SparqlParser.RULE_conditionalOrExpression = 46;
    SparqlParser.RULE_conditionalAndExpression = 47;
    SparqlParser.RULE_valueLogical = 48;
    SparqlParser.RULE_relationalExpression = 49;
    SparqlParser.RULE_numericExpression = 50;
    SparqlParser.RULE_additiveExpression = 51;
    SparqlParser.RULE_multiplicativeExpression = 52;
    SparqlParser.RULE_unaryExpression = 53;
    SparqlParser.RULE_primaryExpression = 54;
    SparqlParser.RULE_brackettedExpression = 55;
    SparqlParser.RULE_builtInCall = 56;
    SparqlParser.RULE_regexExpression = 57;
    SparqlParser.RULE_iriRefOrFunction = 58;
    SparqlParser.RULE_rdfLiteral = 59;
    SparqlParser.RULE_numericLiteral = 60;
    SparqlParser.RULE_numericLiteralUnsigned = 61;
    SparqlParser.RULE_numericLiteralPositive = 62;
    SparqlParser.RULE_numericLiteralNegative = 63;
    SparqlParser.RULE_booleanLiteral = 64;
    SparqlParser.RULE_string = 65;
    SparqlParser.RULE_iriRef = 66;
    SparqlParser.RULE_prefixedName = 67;
    SparqlParser.RULE_blankNode = 68;
    // tslint:disable:no-trailing-whitespace
    SparqlParser.ruleNames = [
        "query", "prologue", "baseDecl", "prefixDecl", "selectQuery", "constructQuery",
        "describeQuery", "askQuery", "datasetClause", "defaultGraphClause", "namedGraphClause",
        "sourceSelector", "whereClause", "solutionModifier", "limitOffsetClauses",
        "orderClause", "orderCondition", "limitClause", "offsetClause", "groupGraphPattern",
        "triplesBlock", "graphPatternNotTriples", "optionalGraphPattern", "graphGraphPattern",
        "groupOrUnionGraphPattern", "filter", "constraint", "functionCall", "argList",
        "constructTemplate", "constructTriples", "triplesSameSubject", "propertyListNotEmpty",
        "propertyList", "objectList", "object", "verb", "triplesNode", "blankNodePropertyList",
        "collection", "graphNode", "varOrTerm", "varOrIRIref", "var", "graphTerm",
        "expression", "conditionalOrExpression", "conditionalAndExpression", "valueLogical",
        "relationalExpression", "numericExpression", "additiveExpression", "multiplicativeExpression",
        "unaryExpression", "primaryExpression", "brackettedExpression", "builtInCall",
        "regexExpression", "iriRefOrFunction", "rdfLiteral", "numericLiteral",
        "numericLiteralUnsigned", "numericLiteralPositive", "numericLiteralNegative",
        "booleanLiteral", "string", "iriRef", "prefixedName", "blankNode",
    ];
    SparqlParser._LITERAL_NAMES = [
        undefined, "'BASE'", "'PREFIX'", "'SELECT'", "'DISTINCT'", "'REDUCED'",
        "'*'", "'CONSTRUCT'", "'DESCRIBE'", "'ASK'", "'FROM'", "'NAMED'", "'WHERE'",
        "'ORDER'", "'BY'", "'ASC'", "'DESC'", "'LIMIT'", "'OFFSET'", "'{'", "'.'",
        "'}'", "'OPTIONAL'", "'GRAPH'", "'UNION'", "'FILTER'", "'('", "','", "')'",
        "';'", "'a'", "'['", "']'", "'||'", "'&&'", "'='", "'!='", "'<'", "'>'",
        "'<='", "'>='", "'+'", "'-'", "'/'", "'!'", "'STR'", "'LANG'", "'LANGMATCHES'",
        "'DATATYPE'", "'BOUND'", "'sameTerm'", "'isIRI'", "'isURI'", "'isBLANK'",
        "'isLITERAL'", "'REGEX'", "'^^'", "'true'", "'false'",
    ];
    SparqlParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "IRI_REF", "PNAME_NS", "PNAME_LN", "BLANK_NODE_LABEL",
        "VAR1", "VAR2", "LANGTAG", "INTEGER", "DECIMAL", "DOUBLE", "INTEGER_POSITIVE",
        "DECIMAL_POSITIVE", "DOUBLE_POSITIVE", "INTEGER_NEGATIVE", "DECIMAL_NEGATIVE",
        "DOUBLE_NEGATIVE", "EXPONENT", "STRING_LITERAL1", "STRING_LITERAL2", "STRING_LITERAL_LONG1",
        "STRING_LITERAL_LONG2", "ECHAR", "NIL", "ANON", "PN_CHARS_U", "VARNAME",
        "PN_PREFIX", "PN_LOCAL", "WS",
    ];
    SparqlParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SparqlParser._LITERAL_NAMES, SparqlParser._SYMBOLIC_NAMES, []);
    SparqlParser._serializedATNSegments = 2;
    SparqlParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03Y\u0271\x04\x02" +
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
        "F\tF\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\x92\n\x02\x03\x02" +
        "\x03\x02\x03\x03\x05\x03\x97\n\x03\x03\x03\x07\x03\x9A\n\x03\f\x03\x0E" +
        "\x03\x9D\v\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x06\x03\x06\x05\x06\xA8\n\x06\x03\x06\x06\x06\xAB\n\x06\r\x06\x0E" +
        "\x06\xAC\x03\x06\x05\x06\xB0\n\x06\x03\x06\x07\x06\xB3\n\x06\f\x06\x0E" +
        "\x06\xB6\v\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x07\x07" +
        "\xBE\n\x07\f\x07\x0E\x07\xC1\v\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b" +
        "\x06\b\xC8\n\b\r\b\x0E\b\xC9\x03\b\x05\b\xCD\n\b\x03\b\x07\b\xD0\n\b\f" +
        "\b\x0E\b\xD3\v\b\x03\b\x05\b\xD6\n\b\x03\b\x03\b\x03\t\x03\t\x07\t\xDC" +
        "\n\t\f\t\x0E\t\xDF\v\t\x03\t\x03\t\x03\n\x03\n\x03\n\x05\n\xE6\n\n\x03" +
        "\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x05\x0E\xF0\n\x0E\x03\x0E" +
        "\x03\x0E\x03\x0F\x05\x0F\xF5\n\x0F\x03\x0F\x05\x0F\xF8\n\x0F\x03\x10\x03" +
        "\x10\x05\x10\xFC\n\x10\x03\x10\x03\x10\x05\x10\u0100\n\x10\x05\x10\u0102" +
        "\n\x10\x03\x11\x03\x11\x03\x11\x06\x11\u0107\n\x11\r\x11\x0E\x11\u0108" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u010F\n\x12\x05\x12\u0111\n\x12" +
        "\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x05\x15" +
        "\u011B\n\x15\x03\x15\x03\x15\x05\x15\u011F\n\x15\x03\x15\x05\x15\u0122" +
        "\n\x15\x03\x15\x05\x15\u0125\n\x15\x07\x15\u0127\n\x15\f\x15\x0E\x15\u012A" +
        "\v\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x05\x16\u0131\n\x16\x05" +
        "\x16\u0133\n\x16\x03\x17\x03\x17\x03\x17\x05\x17\u0138\n\x17\x03\x18\x03" +
        "\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x07" +
        "\x1A\u0144\n\x1A\f\x1A\x0E\x1A\u0147\v\x1A\x03\x1B\x03\x1B\x03\x1B\x03" +
        "\x1C\x03\x1C\x03\x1C\x05\x1C\u014F\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1E" +
        "\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u0159\n\x1E\f\x1E\x0E\x1E\u015C" +
        "\v\x1E\x03\x1E\x03\x1E\x05\x1E\u0160\n\x1E\x03\x1F\x03\x1F\x05\x1F\u0164" +
        "\n\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x05 \u016B\n \x05 \u016D\n \x03" +
        "!\x03!\x03!\x03!\x03!\x03!\x05!\u0175\n!\x03\"\x03\"\x03\"\x03\"\x03\"" +
        "\x03\"\x05\"\u017D\n\"\x07\"\u017F\n\"\f\"\x0E\"\u0182\v\"\x03#\x05#\u0185" +
        "\n#\x03$\x03$\x03$\x07$\u018A\n$\f$\x0E$\u018D\v$\x03%\x03%\x03&\x03&" +
        "\x05&\u0193\n&\x03\'\x03\'\x05\'\u0197\n\'\x03(\x03(\x03(\x03(\x03)\x03" +
        ")\x06)\u019F\n)\r)\x0E)\u01A0\x03)\x03)\x03*\x03*\x05*\u01A7\n*\x03+\x03" +
        "+\x05+\u01AB\n+\x03,\x03,\x05,\u01AF\n,\x03-\x03-\x03.\x03.\x03.\x03." +
        "\x03.\x03.\x05.\u01B9\n.\x03/\x03/\x030\x030\x030\x070\u01C0\n0\f0\x0E" +
        "0\u01C3\v0\x031\x031\x031\x071\u01C8\n1\f1\x0E1\u01CB\v1\x032\x032\x03" +
        "3\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x053\u01DC" +
        "\n3\x034\x034\x035\x035\x035\x035\x035\x035\x035\x075\u01E7\n5\f5\x0E" +
        "5\u01EA\v5\x036\x036\x036\x036\x036\x076\u01F1\n6\f6\x0E6\u01F4\v6\x03" +
        "7\x037\x037\x037\x037\x037\x037\x057\u01FD\n7\x038\x038\x038\x038\x03" +
        "8\x038\x038\x058\u0206\n8\x039\x039\x039\x039\x03:\x03:\x03:\x03:\x03" +
        ":\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03" +
        ":\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03" +
        ":\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03" +
        ":\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x05:\u0243\n:\x03;\x03;\x03" +
        ";\x03;\x03;\x03;\x03;\x05;\u024C\n;\x03;\x03;\x03<\x03<\x05<\u0252\n<" +
        "\x03=\x03=\x03=\x03=\x05=\u0258\n=\x03>\x03>\x03>\x05>\u025D\n>\x03?\x03" +
        "?\x03@\x03@\x03A\x03A\x03B\x03B\x03C\x03C\x03D\x03D\x05D\u026B\nD\x03" +
        "E\x03E\x03F\x03F\x03F\x02\x02\x02G\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
        "\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
        "\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
        "8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
        "T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02" +
        "p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02" +
        "\x88\x02\x8A\x02\x02\f\x03\x02\x06\x07\x03\x02\x11\x12\x03\x02AB\x03\x02" +
        "DF\x03\x02GI\x03\x02JL\x03\x02;<\x03\x02NO\x03\x02>?\x04\x02@@TT\x02\u028D" +
        "\x02\x8C\x03\x02\x02\x02\x04\x96\x03\x02\x02\x02\x06\x9E\x03\x02\x02\x02" +
        "\b\xA1\x03\x02\x02\x02\n\xA5\x03\x02\x02\x02\f\xBA\x03\x02\x02\x02\x0E" +
        "\xC5\x03\x02\x02\x02\x10\xD9\x03\x02\x02\x02\x12\xE2\x03\x02\x02\x02\x14" +
        "\xE7\x03\x02\x02\x02\x16\xE9\x03\x02\x02\x02\x18\xEC\x03\x02\x02\x02\x1A" +
        "\xEF\x03\x02\x02\x02\x1C\xF4\x03\x02\x02\x02\x1E\u0101\x03\x02\x02\x02" +
        " \u0103\x03\x02\x02\x02\"\u0110\x03\x02\x02\x02$\u0112\x03\x02\x02\x02" +
        "&\u0115\x03\x02\x02\x02(\u0118\x03\x02\x02\x02*\u012D\x03\x02\x02\x02" +
        ",\u0137\x03\x02\x02\x02.\u0139\x03\x02\x02\x020\u013C\x03\x02\x02\x02" +
        "2\u0140\x03\x02\x02\x024\u0148\x03\x02\x02\x026\u014E\x03\x02\x02\x02" +
        "8\u0150\x03\x02\x02\x02:\u015F\x03\x02\x02\x02<\u0161\x03\x02\x02\x02" +
        ">\u0167\x03\x02\x02\x02@\u0174\x03\x02\x02\x02B\u0176\x03\x02\x02\x02" +
        "D\u0184\x03\x02\x02\x02F\u0186\x03\x02\x02\x02H\u018E\x03\x02\x02\x02" +
        "J\u0192\x03\x02\x02\x02L\u0196\x03\x02\x02\x02N\u0198\x03\x02\x02\x02" +
        "P\u019C\x03\x02\x02\x02R\u01A6\x03\x02\x02\x02T\u01AA\x03\x02\x02\x02" +
        "V\u01AE\x03\x02\x02\x02X\u01B0\x03\x02\x02\x02Z\u01B8\x03\x02\x02\x02" +
        "\\\u01BA\x03\x02\x02\x02^\u01BC\x03\x02\x02\x02`\u01C4\x03\x02\x02\x02" +
        "b\u01CC\x03\x02\x02\x02d\u01CE\x03\x02\x02\x02f\u01DD\x03\x02\x02\x02" +
        "h\u01DF\x03\x02\x02\x02j\u01EB\x03\x02\x02\x02l\u01FC\x03\x02\x02\x02" +
        "n\u0205\x03\x02\x02\x02p\u0207\x03\x02\x02\x02r\u0242\x03\x02\x02\x02" +
        "t\u0244\x03\x02\x02\x02v\u024F\x03\x02\x02\x02x\u0253\x03\x02\x02\x02" +
        "z\u025C\x03\x02\x02\x02|\u025E\x03\x02\x02\x02~\u0260\x03\x02\x02\x02" +
        "\x80\u0262\x03\x02\x02\x02\x82\u0264\x03\x02\x02\x02\x84\u0266\x03\x02" +
        "\x02\x02\x86\u026A\x03\x02\x02\x02\x88\u026C\x03\x02\x02\x02\x8A\u026E" +
        "\x03\x02\x02\x02\x8C\x91\x05\x04\x03\x02\x8D\x92\x05\n\x06\x02\x8E\x92" +
        "\x05\f\x07\x02\x8F\x92\x05\x0E\b\x02\x90\x92\x05\x10\t\x02\x91\x8D\x03" +
        "\x02\x02\x02\x91\x8E\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x91\x90\x03" +
        "\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x94\x07\x02\x02\x03\x94\x03\x03" +
        "\x02\x02\x02\x95\x97\x05\x06\x04\x02\x96\x95\x03\x02\x02\x02\x96\x97\x03" +
        "\x02\x02\x02\x97\x9B\x03\x02\x02\x02\x98\x9A\x05\b\x05\x02\x99\x98\x03" +
        "\x02\x02\x02\x9A\x9D\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02\x9B\x9C\x03" +
        "\x02\x02\x02\x9C\x05\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9E\x9F\x07" +
        "\x03\x02\x02\x9F\xA0\x07=\x02\x02\xA0\x07\x03\x02\x02\x02\xA1\xA2\x07" +
        "\x04\x02\x02\xA2\xA3\x07>\x02\x02\xA3\xA4\x07=\x02\x02\xA4\t\x03\x02\x02" +
        "\x02\xA5\xA7\x07\x05\x02\x02\xA6\xA8\t\x02\x02\x02\xA7\xA6\x03\x02\x02" +
        "\x02\xA7\xA8\x03\x02\x02\x02\xA8\xAF\x03\x02\x02\x02\xA9\xAB\x05X-\x02" +
        "\xAA\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02" +
        "\xAC\xAD\x03\x02\x02\x02\xAD\xB0\x03\x02\x02\x02\xAE\xB0\x07\b\x02\x02" +
        "\xAF\xAA\x03\x02\x02\x02\xAF\xAE\x03\x02\x02\x02\xB0\xB4\x03\x02\x02\x02" +
        "\xB1\xB3\x05\x12\n\x02\xB2\xB1\x03\x02\x02\x02\xB3\xB6\x03\x02\x02\x02" +
        "\xB4\xB2\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB7\x03\x02\x02\x02" +
        "\xB6\xB4\x03\x02\x02\x02\xB7\xB8\x05\x1A\x0E\x02\xB8\xB9\x05\x1C\x0F\x02" +
        "\xB9\v\x03\x02\x02\x02\xBA\xBB\x07\t\x02\x02\xBB\xBF\x05<\x1F\x02\xBC" +
        "\xBE\x05\x12\n\x02\xBD\xBC\x03\x02\x02\x02\xBE\xC1\x03\x02\x02\x02\xBF" +
        "\xBD\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC2\x03\x02\x02\x02\xC1" +
        "\xBF\x03\x02\x02\x02\xC2\xC3\x05\x1A\x0E\x02\xC3\xC4\x05\x1C\x0F\x02\xC4" +
        "\r\x03\x02\x02\x02\xC5\xCC\x07\n\x02\x02\xC6\xC8\x05V,\x02\xC7\xC6\x03" +
        "\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xC9\xCA\x03" +
        "\x02\x02\x02\xCA\xCD\x03\x02\x02\x02\xCB\xCD\x07\b\x02\x02\xCC\xC7\x03" +
        "\x02\x02\x02\xCC\xCB\x03\x02\x02\x02\xCD\xD1\x03\x02\x02\x02\xCE\xD0\x05" +
        "\x12\n\x02\xCF\xCE\x03\x02\x02\x02\xD0\xD3\x03\x02\x02\x02\xD1\xCF\x03" +
        "\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD5\x03\x02\x02\x02\xD3\xD1\x03" +
        "\x02\x02\x02\xD4\xD6\x05\x1A\x0E\x02\xD5\xD4\x03\x02\x02\x02\xD5\xD6\x03" +
        "\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD8\x05\x1C\x0F\x02\xD8\x0F\x03" +
        "\x02\x02\x02\xD9\xDD\x07\v\x02\x02\xDA\xDC\x05\x12\n\x02\xDB\xDA\x03\x02" +
        "\x02\x02\xDC\xDF\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02" +
        "\x02\x02\xDE\xE0\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xE0\xE1\x05\x1A" +
        "\x0E\x02\xE1\x11\x03\x02\x02\x02\xE2\xE5\x07\f\x02\x02\xE3\xE6\x05\x14" +
        "\v\x02\xE4\xE6\x05\x16\f\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE4\x03\x02\x02" +
        "\x02\xE6\x13\x03\x02\x02\x02\xE7\xE8\x05\x18\r\x02\xE8\x15\x03\x02\x02" +
        "\x02\xE9\xEA\x07\r\x02\x02\xEA\xEB\x05\x18\r\x02\xEB\x17\x03\x02\x02\x02" +
        "\xEC\xED\x05\x86D\x02\xED\x19\x03\x02\x02\x02\xEE\xF0\x07\x0E\x02\x02" +
        "\xEF\xEE\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02" +
        "\xF1\xF2\x05(\x15\x02\xF2\x1B\x03\x02\x02\x02\xF3\xF5\x05 \x11\x02\xF4" +
        "\xF3\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF7\x03\x02\x02\x02\xF6" +
        "\xF8\x05\x1E\x10\x02\xF7\xF6\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8" +
        "\x1D\x03\x02\x02\x02\xF9\xFB\x05$\x13\x02\xFA\xFC\x05&\x14\x02\xFB\xFA" +
        "\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\u0102\x03\x02\x02\x02\xFD" +
        "\xFF\x05&\x14\x02\xFE\u0100\x05$\x13\x02\xFF\xFE\x03\x02\x02\x02\xFF\u0100" +
        "\x03\x02\x02\x02\u0100\u0102\x03\x02\x02\x02\u0101\xF9\x03\x02\x02\x02" +
        "\u0101\xFD\x03\x02\x02\x02\u0102\x1F\x03\x02\x02\x02\u0103\u0104\x07\x0F" +
        "\x02\x02\u0104\u0106\x07\x10\x02\x02\u0105\u0107\x05\"\x12\x02\u0106\u0105" +
        "\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\u0106\x03\x02\x02\x02" +
        "\u0108\u0109\x03\x02\x02\x02\u0109!\x03\x02\x02\x02\u010A\u010B\t\x03" +
        "\x02\x02\u010B\u0111\x05p9\x02\u010C\u010F\x056\x1C\x02\u010D\u010F\x05" +
        "X-\x02\u010E\u010C\x03\x02\x02\x02\u010E\u010D\x03\x02\x02\x02\u010F\u0111" +
        "\x03\x02\x02\x02\u0110\u010A\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02" +
        "\u0111#\x03\x02\x02\x02\u0112\u0113\x07\x13\x02\x02\u0113\u0114\x07D\x02" +
        "\x02\u0114%\x03\x02\x02\x02\u0115\u0116\x07\x14\x02\x02\u0116\u0117\x07" +
        "D\x02\x02\u0117\'\x03\x02\x02\x02\u0118\u011A\x07\x15\x02\x02\u0119\u011B" +
        "\x05*\x16\x02\u011A\u0119\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02" +
        "\u011B\u0128\x03\x02\x02\x02\u011C\u011F\x05,\x17\x02\u011D\u011F\x05" +
        "4\x1B\x02\u011E\u011C\x03\x02\x02\x02\u011E\u011D\x03\x02\x02\x02\u011F" +
        "\u0121\x03\x02\x02\x02\u0120\u0122\x07\x16\x02\x02\u0121\u0120\x03\x02" +
        "\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0124\x03\x02\x02\x02\u0123" +
        "\u0125\x05*\x16\x02\u0124\u0123\x03\x02\x02\x02\u0124\u0125\x03\x02\x02" +
        "\x02\u0125\u0127\x03\x02\x02\x02\u0126\u011E\x03\x02\x02\x02\u0127\u012A" +
        "\x03\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02" +
        "\u0129\u012B\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012B\u012C\x07" +
        "\x17\x02\x02\u012C)\x03\x02\x02\x02\u012D\u0132\x05@!\x02\u012E\u0130" +
        "\x07\x16\x02\x02\u012F\u0131\x05*\x16\x02\u0130\u012F\x03\x02\x02\x02" +
        "\u0130\u0131\x03\x02\x02\x02\u0131\u0133\x03\x02\x02\x02\u0132\u012E\x03" +
        "\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133+\x03\x02\x02\x02\u0134" +
        "\u0138\x05.\x18\x02\u0135\u0138\x052\x1A\x02\u0136\u0138\x050\x19\x02" +
        "\u0137\u0134\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0137\u0136\x03" +
        "\x02\x02\x02\u0138-\x03\x02\x02\x02\u0139\u013A\x07\x18\x02\x02\u013A" +
        "\u013B\x05(\x15\x02\u013B/\x03\x02\x02\x02\u013C\u013D\x07\x19\x02\x02" +
        "\u013D\u013E\x05V,\x02\u013E\u013F\x05(\x15\x02\u013F1\x03\x02\x02\x02" +
        "\u0140\u0145\x05(\x15\x02\u0141\u0142\x07\x1A\x02\x02\u0142\u0144\x05" +
        "(\x15\x02\u0143\u0141\x03\x02\x02\x02\u0144\u0147\x03\x02\x02\x02\u0145" +
        "\u0143\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u01463\x03\x02\x02" +
        "\x02\u0147\u0145\x03\x02\x02\x02\u0148\u0149\x07\x1B\x02\x02\u0149\u014A" +
        "\x056\x1C\x02\u014A5\x03\x02\x02\x02\u014B\u014F\x05p9\x02\u014C\u014F" +
        "\x05r:\x02\u014D\u014F\x058\x1D\x02\u014E\u014B\x03\x02\x02\x02\u014E" +
        "\u014C\x03\x02\x02\x02\u014E\u014D\x03\x02\x02\x02\u014F7\x03\x02\x02" +
        "\x02\u0150\u0151\x05\x86D\x02\u0151\u0152\x05:\x1E\x02\u01529\x03\x02" +
        "\x02\x02\u0153\u0160\x07S\x02\x02\u0154\u0155\x07\x1C\x02\x02\u0155\u015A" +
        "\x05\\/\x02\u0156\u0157\x07\x1D\x02\x02\u0157\u0159\x05\\/\x02\u0158\u0156" +
        "\x03\x02\x02\x02\u0159\u015C\x03\x02\x02\x02\u015A\u0158\x03\x02\x02\x02" +
        "\u015A\u015B\x03\x02\x02\x02\u015B\u015D\x03\x02\x02\x02\u015C\u015A\x03" +
        "\x02\x02\x02\u015D\u015E\x07\x1E\x02\x02\u015E\u0160\x03\x02\x02\x02\u015F" +
        "\u0153\x03\x02\x02\x02\u015F\u0154\x03\x02\x02\x02\u0160;\x03\x02\x02" +
        "\x02\u0161\u0163\x07\x15\x02\x02\u0162\u0164\x05> \x02\u0163\u0162\x03" +
        "\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165" +
        "\u0166\x07\x17\x02\x02\u0166=\x03\x02\x02\x02\u0167\u016C\x05@!\x02\u0168" +
        "\u016A\x07\x16\x02\x02\u0169\u016B\x05> \x02\u016A\u0169\x03\x02\x02\x02" +
        "\u016A\u016B\x03\x02\x02\x02\u016B\u016D\x03\x02\x02\x02\u016C\u0168\x03" +
        "\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D?\x03\x02\x02\x02\u016E" +
        "\u016F\x05T+\x02\u016F\u0170\x05B\"\x02\u0170\u0175\x03\x02\x02\x02\u0171" +
        "\u0172\x05L\'\x02\u0172\u0173\x05D#\x02\u0173\u0175\x03\x02\x02\x02\u0174" +
        "\u016E\x03\x02\x02\x02\u0174\u0171\x03\x02\x02\x02\u0175A\x03\x02\x02" +
        "\x02\u0176\u0177\x05J&\x02\u0177\u0180\x05F$\x02\u0178\u017C\x07\x1F\x02" +
        "\x02\u0179\u017A\x05J&\x02\u017A\u017B\x05F$\x02\u017B\u017D\x03\x02\x02" +
        "\x02\u017C\u0179\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D\u017F" +
        "\x03\x02\x02\x02\u017E\u0178\x03\x02\x02\x02\u017F\u0182\x03\x02\x02\x02" +
        "\u0180\u017E\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181C\x03\x02" +
        "\x02\x02\u0182\u0180\x03\x02\x02\x02\u0183\u0185\x05B\"\x02\u0184\u0183" +
        "\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185E\x03\x02\x02\x02\u0186" +
        "\u018B\x05H%\x02\u0187\u0188\x07\x1D\x02\x02\u0188\u018A\x05H%\x02\u0189" +
        "\u0187\x03\x02\x02\x02\u018A\u018D\x03\x02\x02\x02\u018B\u0189\x03\x02" +
        "\x02\x02\u018B\u018C\x03\x02\x02\x02\u018CG\x03\x02\x02\x02\u018D\u018B" +
        "\x03\x02\x02\x02\u018E\u018F\x05R*\x02\u018FI\x03\x02\x02\x02\u0190\u0193" +
        "\x05V,\x02\u0191\u0193\x07 \x02\x02\u0192\u0190\x03\x02\x02\x02\u0192" +
        "\u0191\x03\x02\x02\x02\u0193K\x03\x02\x02\x02\u0194\u0197\x05P)\x02\u0195" +
        "\u0197\x05N(\x02\u0196\u0194\x03\x02\x02\x02\u0196\u0195\x03\x02\x02\x02" +
        "\u0197M\x03\x02\x02\x02\u0198\u0199\x07!\x02\x02\u0199\u019A\x05B\"\x02" +
        "\u019A\u019B\x07\"\x02\x02\u019BO\x03\x02\x02\x02\u019C\u019E\x07\x1C" +
        "\x02\x02\u019D\u019F\x05R*\x02\u019E\u019D\x03\x02\x02\x02\u019F\u01A0" +
        "\x03\x02\x02\x02\u01A0\u019E\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02" +
        "\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A3\x07\x1E\x02\x02\u01A3Q\x03\x02" +
        "\x02\x02\u01A4\u01A7\x05T+\x02\u01A5\u01A7\x05L\'\x02\u01A6\u01A4\x03" +
        "\x02\x02\x02\u01A6\u01A5\x03\x02\x02\x02\u01A7S\x03\x02\x02\x02\u01A8" +
        "\u01AB\x05X-\x02\u01A9\u01AB\x05Z.\x02\u01AA\u01A8\x03\x02\x02\x02\u01AA" +
        "\u01A9\x03\x02\x02\x02\u01ABU\x03\x02\x02\x02\u01AC\u01AF\x05X-\x02\u01AD" +
        "\u01AF\x05\x86D\x02\u01AE\u01AC\x03\x02\x02\x02\u01AE\u01AD\x03\x02\x02" +
        "\x02\u01AFW\x03\x02\x02\x02\u01B0\u01B1\t\x04\x02\x02\u01B1Y\x03\x02\x02" +
        "\x02\u01B2\u01B9\x05\x86D\x02\u01B3\u01B9\x05x=\x02\u01B4\u01B9\x05z>" +
        "\x02\u01B5\u01B9\x05\x82B\x02\u01B6\u01B9\x05\x8AF\x02\u01B7\u01B9\x07" +
        "S\x02\x02\u01B8\u01B2\x03\x02\x02\x02\u01B8\u01B3\x03\x02\x02\x02\u01B8" +
        "\u01B4\x03\x02\x02\x02\u01B8\u01B5\x03\x02\x02\x02\u01B8\u01B6\x03\x02" +
        "\x02\x02\u01B8\u01B7\x03\x02\x02\x02\u01B9[\x03\x02\x02\x02\u01BA\u01BB" +
        "\x05^0\x02\u01BB]\x03\x02\x02\x02\u01BC\u01C1\x05`1\x02\u01BD\u01BE\x07" +
        "#\x02\x02\u01BE\u01C0\x05`1\x02\u01BF\u01BD\x03\x02\x02\x02\u01C0\u01C3" +
        "\x03\x02\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02" +
        "\u01C2_\x03\x02\x02\x02\u01C3\u01C1\x03\x02\x02\x02\u01C4\u01C9\x05b2" +
        "\x02\u01C5\u01C6\x07$\x02\x02\u01C6\u01C8\x05b2\x02\u01C7\u01C5\x03\x02" +
        "\x02\x02\u01C8\u01CB\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01C9" +
        "\u01CA\x03\x02\x02\x02\u01CAa\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02" +
        "\x02\u01CC\u01CD\x05d3\x02\u01CDc\x03\x02\x02\x02\u01CE\u01DB\x05f4\x02" +
        "\u01CF\u01D0\x07%\x02\x02\u01D0\u01DC\x05f4\x02\u01D1\u01D2\x07&\x02\x02" +
        "\u01D2\u01DC\x05f4\x02\u01D3\u01D4\x07\'\x02\x02\u01D4\u01DC\x05f4\x02" +
        "\u01D5\u01D6\x07(\x02\x02\u01D6\u01DC\x05f4\x02\u01D7\u01D8\x07)\x02\x02" +
        "\u01D8\u01DC\x05f4\x02\u01D9\u01DA\x07*\x02\x02\u01DA\u01DC\x05f4\x02" +
        "\u01DB\u01CF\x03\x02\x02\x02\u01DB\u01D1\x03\x02\x02\x02\u01DB\u01D3\x03" +
        "\x02\x02\x02\u01DB\u01D5\x03\x02\x02\x02\u01DB\u01D7\x03\x02\x02\x02\u01DB" +
        "\u01D9\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DCe\x03\x02\x02" +
        "\x02\u01DD\u01DE\x05h5\x02\u01DEg\x03\x02\x02\x02\u01DF\u01E8\x05j6\x02" +
        "\u01E0\u01E1\x07+\x02\x02\u01E1\u01E7\x05j6\x02\u01E2\u01E3\x07,\x02\x02" +
        "\u01E3\u01E7\x05j6\x02\u01E4\u01E7\x05~@\x02\u01E5\u01E7\x05\x80A\x02" +
        "\u01E6\u01E0\x03\x02\x02\x02\u01E6\u01E2\x03\x02\x02\x02\u01E6\u01E4\x03" +
        "\x02\x02\x02\u01E6\u01E5\x03\x02\x02\x02\u01E7\u01EA\x03\x02\x02\x02\u01E8" +
        "\u01E6\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9i\x03\x02\x02" +
        "\x02\u01EA\u01E8\x03\x02\x02\x02\u01EB\u01F2\x05l7\x02\u01EC\u01ED\x07" +
        "\b\x02\x02\u01ED\u01F1\x05l7\x02\u01EE\u01EF\x07-\x02\x02\u01EF\u01F1" +
        "\x05l7\x02\u01F0\u01EC\x03\x02\x02\x02\u01F0\u01EE\x03\x02\x02\x02\u01F1" +
        "\u01F4\x03\x02\x02\x02\u01F2\u01F0\x03\x02\x02\x02\u01F2\u01F3\x03\x02" +
        "\x02\x02\u01F3k\x03\x02\x02\x02\u01F4\u01F2\x03\x02\x02\x02\u01F5\u01F6" +
        "\x07.\x02\x02\u01F6\u01FD\x05n8\x02\u01F7\u01F8\x07+\x02\x02\u01F8\u01FD" +
        "\x05n8\x02\u01F9\u01FA\x07,\x02\x02\u01FA\u01FD\x05n8\x02\u01FB\u01FD" +
        "\x05n8\x02\u01FC\u01F5\x03\x02\x02\x02\u01FC\u01F7\x03\x02\x02\x02\u01FC" +
        "\u01F9\x03\x02\x02\x02\u01FC\u01FB\x03\x02\x02\x02\u01FDm\x03\x02\x02" +
        "\x02\u01FE\u0206\x05p9\x02\u01FF\u0206\x05r:\x02\u0200\u0206\x05v<\x02" +
        "\u0201\u0206\x05x=\x02\u0202\u0206\x05z>\x02\u0203\u0206\x05\x82B\x02" +
        "\u0204\u0206\x05X-\x02\u0205\u01FE\x03\x02\x02\x02\u0205\u01FF\x03\x02" +
        "\x02\x02\u0205\u0200\x03\x02\x02\x02\u0205\u0201\x03\x02\x02\x02\u0205" +
        "\u0202\x03\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0205\u0204\x03\x02" +
        "\x02\x02\u0206o\x03\x02\x02\x02\u0207\u0208\x07\x1C\x02\x02\u0208\u0209" +
        "\x05\\/\x02\u0209\u020A\x07\x1E\x02\x02\u020Aq\x03\x02\x02\x02\u020B\u020C" +
        "\x07/\x02\x02\u020C\u020D\x07\x1C\x02\x02\u020D\u020E\x05\\/\x02\u020E" +
        "\u020F\x07\x1E\x02\x02\u020F\u0243\x03\x02\x02\x02\u0210\u0211\x070\x02" +
        "\x02\u0211\u0212\x07\x1C\x02\x02\u0212\u0213\x05\\/\x02\u0213\u0214\x07" +
        "\x1E\x02\x02\u0214\u0243\x03\x02\x02\x02\u0215\u0216\x071\x02\x02\u0216" +
        "\u0217\x07\x1C\x02\x02\u0217\u0218\x05\\/\x02\u0218\u0219\x07\x1D\x02" +
        "\x02\u0219\u021A\x05\\/\x02\u021A\u021B\x07\x1E\x02\x02\u021B\u0243\x03" +
        "\x02\x02\x02\u021C\u021D\x072\x02\x02\u021D\u021E\x07\x1C\x02\x02\u021E" +
        "\u021F\x05\\/\x02\u021F\u0220\x07\x1E\x02\x02\u0220\u0243\x03\x02\x02" +
        "\x02\u0221\u0222\x073\x02\x02\u0222\u0223\x07\x1C\x02\x02\u0223\u0224" +
        "\x05X-\x02\u0224\u0225\x07\x1E\x02\x02\u0225\u0243\x03\x02\x02\x02\u0226" +
        "\u0227\x074\x02\x02\u0227\u0228\x07\x1C\x02\x02\u0228\u0229\x05\\/\x02" +
        "\u0229\u022A\x07\x1D\x02\x02\u022A\u022B\x05\\/\x02\u022B\u022C\x07\x1E" +
        "\x02\x02\u022C\u0243\x03\x02\x02\x02\u022D\u022E\x075\x02\x02\u022E\u022F" +
        "\x07\x1C\x02\x02\u022F\u0230\x05\\/\x02\u0230\u0231\x07\x1E\x02\x02\u0231" +
        "\u0243\x03\x02\x02\x02\u0232\u0233\x076\x02\x02\u0233\u0234\x07\x1C\x02" +
        "\x02\u0234\u0235\x05\\/\x02\u0235\u0236\x07\x1E\x02\x02\u0236\u0243\x03" +
        "\x02\x02\x02\u0237\u0238\x077\x02\x02\u0238\u0239\x07\x1C\x02";
    SparqlParser._serializedATNSegment1 = "\x02\u0239\u023A\x05\\/\x02\u023A\u023B\x07\x1E\x02\x02\u023B\u0243\x03" +
        "\x02\x02\x02\u023C\u023D\x078\x02\x02\u023D\u023E\x07\x1C\x02\x02\u023E" +
        "\u023F\x05\\/\x02\u023F\u0240\x07\x1E\x02\x02\u0240\u0243\x03\x02\x02" +
        "\x02\u0241\u0243\x05t;\x02\u0242\u020B\x03\x02\x02\x02\u0242\u0210\x03" +
        "\x02\x02\x02\u0242\u0215\x03\x02\x02\x02\u0242\u021C\x03\x02\x02\x02\u0242" +
        "\u0221\x03\x02\x02\x02\u0242\u0226\x03\x02\x02\x02\u0242\u022D\x03\x02" +
        "\x02\x02\u0242\u0232\x03\x02\x02\x02\u0242\u0237\x03\x02\x02\x02\u0242" +
        "\u023C\x03\x02\x02\x02\u0242\u0241\x03\x02\x02\x02\u0243s\x03\x02\x02" +
        "\x02\u0244\u0245\x079\x02\x02\u0245\u0246\x07\x1C\x02\x02\u0246\u0247" +
        "\x05\\/\x02\u0247\u0248\x07\x1D\x02\x02\u0248\u024B\x05\\/\x02\u0249\u024A" +
        "\x07\x1D\x02\x02\u024A\u024C\x05\\/\x02\u024B\u0249\x03\x02\x02\x02\u024B" +
        "\u024C\x03\x02\x02\x02\u024C\u024D\x03\x02\x02\x02\u024D\u024E\x07\x1E" +
        "\x02\x02\u024Eu\x03\x02\x02\x02\u024F\u0251\x05\x86D\x02\u0250\u0252\x05" +
        ":\x1E\x02\u0251\u0250\x03\x02\x02\x02\u0251\u0252\x03\x02\x02\x02\u0252" +
        "w\x03\x02\x02\x02\u0253\u0257\x05\x84C\x02\u0254\u0258\x07C\x02\x02\u0255" +
        "\u0256\x07:\x02\x02\u0256\u0258\x05\x86D\x02\u0257\u0254\x03\x02\x02\x02" +
        "\u0257\u0255\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258y\x03\x02" +
        "\x02\x02\u0259\u025D\x05|?\x02\u025A\u025D\x05~@\x02\u025B\u025D\x05\x80" +
        "A\x02\u025C\u0259\x03\x02\x02\x02\u025C\u025A\x03\x02\x02\x02\u025C\u025B" +
        "\x03\x02\x02\x02\u025D{\x03\x02\x02\x02\u025E\u025F\t\x05\x02\x02\u025F" +
        "}\x03\x02\x02\x02\u0260\u0261\t\x06\x02\x02\u0261\x7F\x03\x02\x02\x02" +
        "\u0262\u0263\t\x07\x02\x02\u0263\x81\x03\x02\x02\x02\u0264\u0265\t\b\x02" +
        "\x02\u0265\x83\x03\x02\x02\x02\u0266\u0267\t\t\x02\x02\u0267\x85\x03\x02" +
        "\x02\x02\u0268\u026B\x07=\x02\x02\u0269\u026B\x05\x88E\x02\u026A\u0268" +
        "\x03\x02\x02\x02\u026A\u0269\x03\x02\x02\x02\u026B\x87\x03\x02\x02\x02" +
        "\u026C\u026D\t\n\x02\x02\u026D\x89\x03\x02\x02\x02\u026E\u026F\t\v\x02" +
        "\x02\u026F\x8B\x03\x02\x02\x02C\x91\x96\x9B\xA7\xAC\xAF\xB4\xBF\xC9\xCC" +
        "\xD1\xD5\xDD\xE5\xEF\xF4\xF7\xFB\xFF\u0101\u0108\u010E\u0110\u011A\u011E" +
        "\u0121\u0124\u0128\u0130\u0132\u0137\u0145\u014E\u015A\u015F\u0163\u016A" +
        "\u016C\u0174\u017C\u0180\u0184\u018B\u0192\u0196\u01A0\u01A6\u01AA\u01AE" +
        "\u01B8\u01C1\u01C9\u01DB\u01E6\u01E8\u01F0\u01F2\u01FC\u0205\u0242\u024B" +
        "\u0251\u0257\u025C\u026A";
    SparqlParser._serializedATN = Utils.join([
        SparqlParser._serializedATNSegment0,
        SparqlParser._serializedATNSegment1,
    ], "");
    return SparqlParser;
}(Parser_1.Parser));
exports.SparqlParser = SparqlParser;
var QueryContext = /** @class */ (function (_super) {
    __extends(QueryContext, _super);
    function QueryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QueryContext.prototype.prologue = function () {
        return this.getRuleContext(0, PrologueContext);
    };
    QueryContext.prototype.EOF = function () { return this.getToken(SparqlParser.EOF, 0); };
    QueryContext.prototype.selectQuery = function () {
        return this.tryGetRuleContext(0, SelectQueryContext);
    };
    QueryContext.prototype.constructQuery = function () {
        return this.tryGetRuleContext(0, ConstructQueryContext);
    };
    QueryContext.prototype.describeQuery = function () {
        return this.tryGetRuleContext(0, DescribeQueryContext);
    };
    QueryContext.prototype.askQuery = function () {
        return this.tryGetRuleContext(0, AskQueryContext);
    };
    Object.defineProperty(QueryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_query; },
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
var PrologueContext = /** @class */ (function (_super) {
    __extends(PrologueContext, _super);
    function PrologueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrologueContext.prototype.baseDecl = function () {
        return this.tryGetRuleContext(0, BaseDeclContext);
    };
    PrologueContext.prototype.prefixDecl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PrefixDeclContext);
        }
        else {
            return this.getRuleContext(i, PrefixDeclContext);
        }
    };
    Object.defineProperty(PrologueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_prologue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrologueContext.prototype.enterRule = function (listener) {
        if (listener.enterPrologue) {
            listener.enterPrologue(this);
        }
    };
    // @Override
    PrologueContext.prototype.exitRule = function (listener) {
        if (listener.exitPrologue) {
            listener.exitPrologue(this);
        }
    };
    // @Override
    PrologueContext.prototype.accept = function (visitor) {
        if (visitor.visitPrologue) {
            return visitor.visitPrologue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrologueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrologueContext = PrologueContext;
var BaseDeclContext = /** @class */ (function (_super) {
    __extends(BaseDeclContext, _super);
    function BaseDeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BaseDeclContext.prototype.IRI_REF = function () { return this.getToken(SparqlParser.IRI_REF, 0); };
    Object.defineProperty(BaseDeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_baseDecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BaseDeclContext.prototype.enterRule = function (listener) {
        if (listener.enterBaseDecl) {
            listener.enterBaseDecl(this);
        }
    };
    // @Override
    BaseDeclContext.prototype.exitRule = function (listener) {
        if (listener.exitBaseDecl) {
            listener.exitBaseDecl(this);
        }
    };
    // @Override
    BaseDeclContext.prototype.accept = function (visitor) {
        if (visitor.visitBaseDecl) {
            return visitor.visitBaseDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BaseDeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BaseDeclContext = BaseDeclContext;
var PrefixDeclContext = /** @class */ (function (_super) {
    __extends(PrefixDeclContext, _super);
    function PrefixDeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrefixDeclContext.prototype.PNAME_NS = function () { return this.getToken(SparqlParser.PNAME_NS, 0); };
    PrefixDeclContext.prototype.IRI_REF = function () { return this.getToken(SparqlParser.IRI_REF, 0); };
    Object.defineProperty(PrefixDeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_prefixDecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrefixDeclContext.prototype.enterRule = function (listener) {
        if (listener.enterPrefixDecl) {
            listener.enterPrefixDecl(this);
        }
    };
    // @Override
    PrefixDeclContext.prototype.exitRule = function (listener) {
        if (listener.exitPrefixDecl) {
            listener.exitPrefixDecl(this);
        }
    };
    // @Override
    PrefixDeclContext.prototype.accept = function (visitor) {
        if (visitor.visitPrefixDecl) {
            return visitor.visitPrefixDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrefixDeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrefixDeclContext = PrefixDeclContext;
var SelectQueryContext = /** @class */ (function (_super) {
    __extends(SelectQueryContext, _super);
    function SelectQueryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SelectQueryContext.prototype.whereClause = function () {
        return this.getRuleContext(0, WhereClauseContext);
    };
    SelectQueryContext.prototype.solutionModifier = function () {
        return this.getRuleContext(0, SolutionModifierContext);
    };
    SelectQueryContext.prototype.datasetClause = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DatasetClauseContext);
        }
        else {
            return this.getRuleContext(i, DatasetClauseContext);
        }
    };
    SelectQueryContext.prototype.var = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VarContext);
        }
        else {
            return this.getRuleContext(i, VarContext);
        }
    };
    Object.defineProperty(SelectQueryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_selectQuery; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SelectQueryContext.prototype.enterRule = function (listener) {
        if (listener.enterSelectQuery) {
            listener.enterSelectQuery(this);
        }
    };
    // @Override
    SelectQueryContext.prototype.exitRule = function (listener) {
        if (listener.exitSelectQuery) {
            listener.exitSelectQuery(this);
        }
    };
    // @Override
    SelectQueryContext.prototype.accept = function (visitor) {
        if (visitor.visitSelectQuery) {
            return visitor.visitSelectQuery(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SelectQueryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SelectQueryContext = SelectQueryContext;
var ConstructQueryContext = /** @class */ (function (_super) {
    __extends(ConstructQueryContext, _super);
    function ConstructQueryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstructQueryContext.prototype.constructTemplate = function () {
        return this.getRuleContext(0, ConstructTemplateContext);
    };
    ConstructQueryContext.prototype.whereClause = function () {
        return this.getRuleContext(0, WhereClauseContext);
    };
    ConstructQueryContext.prototype.solutionModifier = function () {
        return this.getRuleContext(0, SolutionModifierContext);
    };
    ConstructQueryContext.prototype.datasetClause = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DatasetClauseContext);
        }
        else {
            return this.getRuleContext(i, DatasetClauseContext);
        }
    };
    Object.defineProperty(ConstructQueryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_constructQuery; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstructQueryContext.prototype.enterRule = function (listener) {
        if (listener.enterConstructQuery) {
            listener.enterConstructQuery(this);
        }
    };
    // @Override
    ConstructQueryContext.prototype.exitRule = function (listener) {
        if (listener.exitConstructQuery) {
            listener.exitConstructQuery(this);
        }
    };
    // @Override
    ConstructQueryContext.prototype.accept = function (visitor) {
        if (visitor.visitConstructQuery) {
            return visitor.visitConstructQuery(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstructQueryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstructQueryContext = ConstructQueryContext;
var DescribeQueryContext = /** @class */ (function (_super) {
    __extends(DescribeQueryContext, _super);
    function DescribeQueryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DescribeQueryContext.prototype.solutionModifier = function () {
        return this.getRuleContext(0, SolutionModifierContext);
    };
    DescribeQueryContext.prototype.datasetClause = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DatasetClauseContext);
        }
        else {
            return this.getRuleContext(i, DatasetClauseContext);
        }
    };
    DescribeQueryContext.prototype.whereClause = function () {
        return this.tryGetRuleContext(0, WhereClauseContext);
    };
    DescribeQueryContext.prototype.varOrIRIref = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VarOrIRIrefContext);
        }
        else {
            return this.getRuleContext(i, VarOrIRIrefContext);
        }
    };
    Object.defineProperty(DescribeQueryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_describeQuery; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DescribeQueryContext.prototype.enterRule = function (listener) {
        if (listener.enterDescribeQuery) {
            listener.enterDescribeQuery(this);
        }
    };
    // @Override
    DescribeQueryContext.prototype.exitRule = function (listener) {
        if (listener.exitDescribeQuery) {
            listener.exitDescribeQuery(this);
        }
    };
    // @Override
    DescribeQueryContext.prototype.accept = function (visitor) {
        if (visitor.visitDescribeQuery) {
            return visitor.visitDescribeQuery(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DescribeQueryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DescribeQueryContext = DescribeQueryContext;
var AskQueryContext = /** @class */ (function (_super) {
    __extends(AskQueryContext, _super);
    function AskQueryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AskQueryContext.prototype.whereClause = function () {
        return this.getRuleContext(0, WhereClauseContext);
    };
    AskQueryContext.prototype.datasetClause = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DatasetClauseContext);
        }
        else {
            return this.getRuleContext(i, DatasetClauseContext);
        }
    };
    Object.defineProperty(AskQueryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_askQuery; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AskQueryContext.prototype.enterRule = function (listener) {
        if (listener.enterAskQuery) {
            listener.enterAskQuery(this);
        }
    };
    // @Override
    AskQueryContext.prototype.exitRule = function (listener) {
        if (listener.exitAskQuery) {
            listener.exitAskQuery(this);
        }
    };
    // @Override
    AskQueryContext.prototype.accept = function (visitor) {
        if (visitor.visitAskQuery) {
            return visitor.visitAskQuery(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AskQueryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AskQueryContext = AskQueryContext;
var DatasetClauseContext = /** @class */ (function (_super) {
    __extends(DatasetClauseContext, _super);
    function DatasetClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DatasetClauseContext.prototype.defaultGraphClause = function () {
        return this.tryGetRuleContext(0, DefaultGraphClauseContext);
    };
    DatasetClauseContext.prototype.namedGraphClause = function () {
        return this.tryGetRuleContext(0, NamedGraphClauseContext);
    };
    Object.defineProperty(DatasetClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_datasetClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DatasetClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterDatasetClause) {
            listener.enterDatasetClause(this);
        }
    };
    // @Override
    DatasetClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitDatasetClause) {
            listener.exitDatasetClause(this);
        }
    };
    // @Override
    DatasetClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitDatasetClause) {
            return visitor.visitDatasetClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DatasetClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DatasetClauseContext = DatasetClauseContext;
var DefaultGraphClauseContext = /** @class */ (function (_super) {
    __extends(DefaultGraphClauseContext, _super);
    function DefaultGraphClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefaultGraphClauseContext.prototype.sourceSelector = function () {
        return this.getRuleContext(0, SourceSelectorContext);
    };
    Object.defineProperty(DefaultGraphClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_defaultGraphClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefaultGraphClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterDefaultGraphClause) {
            listener.enterDefaultGraphClause(this);
        }
    };
    // @Override
    DefaultGraphClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitDefaultGraphClause) {
            listener.exitDefaultGraphClause(this);
        }
    };
    // @Override
    DefaultGraphClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitDefaultGraphClause) {
            return visitor.visitDefaultGraphClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefaultGraphClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefaultGraphClauseContext = DefaultGraphClauseContext;
var NamedGraphClauseContext = /** @class */ (function (_super) {
    __extends(NamedGraphClauseContext, _super);
    function NamedGraphClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamedGraphClauseContext.prototype.sourceSelector = function () {
        return this.getRuleContext(0, SourceSelectorContext);
    };
    Object.defineProperty(NamedGraphClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_namedGraphClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NamedGraphClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterNamedGraphClause) {
            listener.enterNamedGraphClause(this);
        }
    };
    // @Override
    NamedGraphClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitNamedGraphClause) {
            listener.exitNamedGraphClause(this);
        }
    };
    // @Override
    NamedGraphClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitNamedGraphClause) {
            return visitor.visitNamedGraphClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NamedGraphClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NamedGraphClauseContext = NamedGraphClauseContext;
var SourceSelectorContext = /** @class */ (function (_super) {
    __extends(SourceSelectorContext, _super);
    function SourceSelectorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SourceSelectorContext.prototype.iriRef = function () {
        return this.getRuleContext(0, IriRefContext);
    };
    Object.defineProperty(SourceSelectorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_sourceSelector; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SourceSelectorContext.prototype.enterRule = function (listener) {
        if (listener.enterSourceSelector) {
            listener.enterSourceSelector(this);
        }
    };
    // @Override
    SourceSelectorContext.prototype.exitRule = function (listener) {
        if (listener.exitSourceSelector) {
            listener.exitSourceSelector(this);
        }
    };
    // @Override
    SourceSelectorContext.prototype.accept = function (visitor) {
        if (visitor.visitSourceSelector) {
            return visitor.visitSourceSelector(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SourceSelectorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SourceSelectorContext = SourceSelectorContext;
var WhereClauseContext = /** @class */ (function (_super) {
    __extends(WhereClauseContext, _super);
    function WhereClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WhereClauseContext.prototype.groupGraphPattern = function () {
        return this.getRuleContext(0, GroupGraphPatternContext);
    };
    Object.defineProperty(WhereClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_whereClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WhereClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterWhereClause) {
            listener.enterWhereClause(this);
        }
    };
    // @Override
    WhereClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitWhereClause) {
            listener.exitWhereClause(this);
        }
    };
    // @Override
    WhereClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitWhereClause) {
            return visitor.visitWhereClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WhereClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WhereClauseContext = WhereClauseContext;
var SolutionModifierContext = /** @class */ (function (_super) {
    __extends(SolutionModifierContext, _super);
    function SolutionModifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SolutionModifierContext.prototype.orderClause = function () {
        return this.tryGetRuleContext(0, OrderClauseContext);
    };
    SolutionModifierContext.prototype.limitOffsetClauses = function () {
        return this.tryGetRuleContext(0, LimitOffsetClausesContext);
    };
    Object.defineProperty(SolutionModifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_solutionModifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SolutionModifierContext.prototype.enterRule = function (listener) {
        if (listener.enterSolutionModifier) {
            listener.enterSolutionModifier(this);
        }
    };
    // @Override
    SolutionModifierContext.prototype.exitRule = function (listener) {
        if (listener.exitSolutionModifier) {
            listener.exitSolutionModifier(this);
        }
    };
    // @Override
    SolutionModifierContext.prototype.accept = function (visitor) {
        if (visitor.visitSolutionModifier) {
            return visitor.visitSolutionModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SolutionModifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SolutionModifierContext = SolutionModifierContext;
var LimitOffsetClausesContext = /** @class */ (function (_super) {
    __extends(LimitOffsetClausesContext, _super);
    function LimitOffsetClausesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LimitOffsetClausesContext.prototype.limitClause = function () {
        return this.tryGetRuleContext(0, LimitClauseContext);
    };
    LimitOffsetClausesContext.prototype.offsetClause = function () {
        return this.tryGetRuleContext(0, OffsetClauseContext);
    };
    Object.defineProperty(LimitOffsetClausesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_limitOffsetClauses; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LimitOffsetClausesContext.prototype.enterRule = function (listener) {
        if (listener.enterLimitOffsetClauses) {
            listener.enterLimitOffsetClauses(this);
        }
    };
    // @Override
    LimitOffsetClausesContext.prototype.exitRule = function (listener) {
        if (listener.exitLimitOffsetClauses) {
            listener.exitLimitOffsetClauses(this);
        }
    };
    // @Override
    LimitOffsetClausesContext.prototype.accept = function (visitor) {
        if (visitor.visitLimitOffsetClauses) {
            return visitor.visitLimitOffsetClauses(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LimitOffsetClausesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LimitOffsetClausesContext = LimitOffsetClausesContext;
var OrderClauseContext = /** @class */ (function (_super) {
    __extends(OrderClauseContext, _super);
    function OrderClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OrderClauseContext.prototype.orderCondition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OrderConditionContext);
        }
        else {
            return this.getRuleContext(i, OrderConditionContext);
        }
    };
    Object.defineProperty(OrderClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_orderClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OrderClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterOrderClause) {
            listener.enterOrderClause(this);
        }
    };
    // @Override
    OrderClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitOrderClause) {
            listener.exitOrderClause(this);
        }
    };
    // @Override
    OrderClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitOrderClause) {
            return visitor.visitOrderClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OrderClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OrderClauseContext = OrderClauseContext;
var OrderConditionContext = /** @class */ (function (_super) {
    __extends(OrderConditionContext, _super);
    function OrderConditionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OrderConditionContext.prototype.brackettedExpression = function () {
        return this.tryGetRuleContext(0, BrackettedExpressionContext);
    };
    OrderConditionContext.prototype.constraint = function () {
        return this.tryGetRuleContext(0, ConstraintContext);
    };
    OrderConditionContext.prototype.var = function () {
        return this.tryGetRuleContext(0, VarContext);
    };
    Object.defineProperty(OrderConditionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_orderCondition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OrderConditionContext.prototype.enterRule = function (listener) {
        if (listener.enterOrderCondition) {
            listener.enterOrderCondition(this);
        }
    };
    // @Override
    OrderConditionContext.prototype.exitRule = function (listener) {
        if (listener.exitOrderCondition) {
            listener.exitOrderCondition(this);
        }
    };
    // @Override
    OrderConditionContext.prototype.accept = function (visitor) {
        if (visitor.visitOrderCondition) {
            return visitor.visitOrderCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OrderConditionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OrderConditionContext = OrderConditionContext;
var LimitClauseContext = /** @class */ (function (_super) {
    __extends(LimitClauseContext, _super);
    function LimitClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LimitClauseContext.prototype.INTEGER = function () { return this.getToken(SparqlParser.INTEGER, 0); };
    Object.defineProperty(LimitClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_limitClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LimitClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterLimitClause) {
            listener.enterLimitClause(this);
        }
    };
    // @Override
    LimitClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitLimitClause) {
            listener.exitLimitClause(this);
        }
    };
    // @Override
    LimitClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitLimitClause) {
            return visitor.visitLimitClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LimitClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LimitClauseContext = LimitClauseContext;
var OffsetClauseContext = /** @class */ (function (_super) {
    __extends(OffsetClauseContext, _super);
    function OffsetClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OffsetClauseContext.prototype.INTEGER = function () { return this.getToken(SparqlParser.INTEGER, 0); };
    Object.defineProperty(OffsetClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_offsetClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OffsetClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterOffsetClause) {
            listener.enterOffsetClause(this);
        }
    };
    // @Override
    OffsetClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitOffsetClause) {
            listener.exitOffsetClause(this);
        }
    };
    // @Override
    OffsetClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitOffsetClause) {
            return visitor.visitOffsetClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OffsetClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OffsetClauseContext = OffsetClauseContext;
var GroupGraphPatternContext = /** @class */ (function (_super) {
    __extends(GroupGraphPatternContext, _super);
    function GroupGraphPatternContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GroupGraphPatternContext.prototype.triplesBlock = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TriplesBlockContext);
        }
        else {
            return this.getRuleContext(i, TriplesBlockContext);
        }
    };
    GroupGraphPatternContext.prototype.graphPatternNotTriples = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(GraphPatternNotTriplesContext);
        }
        else {
            return this.getRuleContext(i, GraphPatternNotTriplesContext);
        }
    };
    GroupGraphPatternContext.prototype.filter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FilterContext);
        }
        else {
            return this.getRuleContext(i, FilterContext);
        }
    };
    Object.defineProperty(GroupGraphPatternContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_groupGraphPattern; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GroupGraphPatternContext.prototype.enterRule = function (listener) {
        if (listener.enterGroupGraphPattern) {
            listener.enterGroupGraphPattern(this);
        }
    };
    // @Override
    GroupGraphPatternContext.prototype.exitRule = function (listener) {
        if (listener.exitGroupGraphPattern) {
            listener.exitGroupGraphPattern(this);
        }
    };
    // @Override
    GroupGraphPatternContext.prototype.accept = function (visitor) {
        if (visitor.visitGroupGraphPattern) {
            return visitor.visitGroupGraphPattern(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GroupGraphPatternContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GroupGraphPatternContext = GroupGraphPatternContext;
var TriplesBlockContext = /** @class */ (function (_super) {
    __extends(TriplesBlockContext, _super);
    function TriplesBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TriplesBlockContext.prototype.triplesSameSubject = function () {
        return this.getRuleContext(0, TriplesSameSubjectContext);
    };
    TriplesBlockContext.prototype.triplesBlock = function () {
        return this.tryGetRuleContext(0, TriplesBlockContext);
    };
    Object.defineProperty(TriplesBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_triplesBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TriplesBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterTriplesBlock) {
            listener.enterTriplesBlock(this);
        }
    };
    // @Override
    TriplesBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitTriplesBlock) {
            listener.exitTriplesBlock(this);
        }
    };
    // @Override
    TriplesBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitTriplesBlock) {
            return visitor.visitTriplesBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TriplesBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TriplesBlockContext = TriplesBlockContext;
var GraphPatternNotTriplesContext = /** @class */ (function (_super) {
    __extends(GraphPatternNotTriplesContext, _super);
    function GraphPatternNotTriplesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GraphPatternNotTriplesContext.prototype.optionalGraphPattern = function () {
        return this.tryGetRuleContext(0, OptionalGraphPatternContext);
    };
    GraphPatternNotTriplesContext.prototype.groupOrUnionGraphPattern = function () {
        return this.tryGetRuleContext(0, GroupOrUnionGraphPatternContext);
    };
    GraphPatternNotTriplesContext.prototype.graphGraphPattern = function () {
        return this.tryGetRuleContext(0, GraphGraphPatternContext);
    };
    Object.defineProperty(GraphPatternNotTriplesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_graphPatternNotTriples; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GraphPatternNotTriplesContext.prototype.enterRule = function (listener) {
        if (listener.enterGraphPatternNotTriples) {
            listener.enterGraphPatternNotTriples(this);
        }
    };
    // @Override
    GraphPatternNotTriplesContext.prototype.exitRule = function (listener) {
        if (listener.exitGraphPatternNotTriples) {
            listener.exitGraphPatternNotTriples(this);
        }
    };
    // @Override
    GraphPatternNotTriplesContext.prototype.accept = function (visitor) {
        if (visitor.visitGraphPatternNotTriples) {
            return visitor.visitGraphPatternNotTriples(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GraphPatternNotTriplesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GraphPatternNotTriplesContext = GraphPatternNotTriplesContext;
var OptionalGraphPatternContext = /** @class */ (function (_super) {
    __extends(OptionalGraphPatternContext, _super);
    function OptionalGraphPatternContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptionalGraphPatternContext.prototype.groupGraphPattern = function () {
        return this.getRuleContext(0, GroupGraphPatternContext);
    };
    Object.defineProperty(OptionalGraphPatternContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_optionalGraphPattern; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OptionalGraphPatternContext.prototype.enterRule = function (listener) {
        if (listener.enterOptionalGraphPattern) {
            listener.enterOptionalGraphPattern(this);
        }
    };
    // @Override
    OptionalGraphPatternContext.prototype.exitRule = function (listener) {
        if (listener.exitOptionalGraphPattern) {
            listener.exitOptionalGraphPattern(this);
        }
    };
    // @Override
    OptionalGraphPatternContext.prototype.accept = function (visitor) {
        if (visitor.visitOptionalGraphPattern) {
            return visitor.visitOptionalGraphPattern(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OptionalGraphPatternContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OptionalGraphPatternContext = OptionalGraphPatternContext;
var GraphGraphPatternContext = /** @class */ (function (_super) {
    __extends(GraphGraphPatternContext, _super);
    function GraphGraphPatternContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GraphGraphPatternContext.prototype.varOrIRIref = function () {
        return this.getRuleContext(0, VarOrIRIrefContext);
    };
    GraphGraphPatternContext.prototype.groupGraphPattern = function () {
        return this.getRuleContext(0, GroupGraphPatternContext);
    };
    Object.defineProperty(GraphGraphPatternContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_graphGraphPattern; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GraphGraphPatternContext.prototype.enterRule = function (listener) {
        if (listener.enterGraphGraphPattern) {
            listener.enterGraphGraphPattern(this);
        }
    };
    // @Override
    GraphGraphPatternContext.prototype.exitRule = function (listener) {
        if (listener.exitGraphGraphPattern) {
            listener.exitGraphGraphPattern(this);
        }
    };
    // @Override
    GraphGraphPatternContext.prototype.accept = function (visitor) {
        if (visitor.visitGraphGraphPattern) {
            return visitor.visitGraphGraphPattern(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GraphGraphPatternContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GraphGraphPatternContext = GraphGraphPatternContext;
var GroupOrUnionGraphPatternContext = /** @class */ (function (_super) {
    __extends(GroupOrUnionGraphPatternContext, _super);
    function GroupOrUnionGraphPatternContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GroupOrUnionGraphPatternContext.prototype.groupGraphPattern = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(GroupGraphPatternContext);
        }
        else {
            return this.getRuleContext(i, GroupGraphPatternContext);
        }
    };
    Object.defineProperty(GroupOrUnionGraphPatternContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_groupOrUnionGraphPattern; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GroupOrUnionGraphPatternContext.prototype.enterRule = function (listener) {
        if (listener.enterGroupOrUnionGraphPattern) {
            listener.enterGroupOrUnionGraphPattern(this);
        }
    };
    // @Override
    GroupOrUnionGraphPatternContext.prototype.exitRule = function (listener) {
        if (listener.exitGroupOrUnionGraphPattern) {
            listener.exitGroupOrUnionGraphPattern(this);
        }
    };
    // @Override
    GroupOrUnionGraphPatternContext.prototype.accept = function (visitor) {
        if (visitor.visitGroupOrUnionGraphPattern) {
            return visitor.visitGroupOrUnionGraphPattern(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GroupOrUnionGraphPatternContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GroupOrUnionGraphPatternContext = GroupOrUnionGraphPatternContext;
var FilterContext = /** @class */ (function (_super) {
    __extends(FilterContext, _super);
    function FilterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FilterContext.prototype.constraint = function () {
        return this.getRuleContext(0, ConstraintContext);
    };
    Object.defineProperty(FilterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_filter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FilterContext.prototype.enterRule = function (listener) {
        if (listener.enterFilter) {
            listener.enterFilter(this);
        }
    };
    // @Override
    FilterContext.prototype.exitRule = function (listener) {
        if (listener.exitFilter) {
            listener.exitFilter(this);
        }
    };
    // @Override
    FilterContext.prototype.accept = function (visitor) {
        if (visitor.visitFilter) {
            return visitor.visitFilter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FilterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FilterContext = FilterContext;
var ConstraintContext = /** @class */ (function (_super) {
    __extends(ConstraintContext, _super);
    function ConstraintContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstraintContext.prototype.brackettedExpression = function () {
        return this.tryGetRuleContext(0, BrackettedExpressionContext);
    };
    ConstraintContext.prototype.builtInCall = function () {
        return this.tryGetRuleContext(0, BuiltInCallContext);
    };
    ConstraintContext.prototype.functionCall = function () {
        return this.tryGetRuleContext(0, FunctionCallContext);
    };
    Object.defineProperty(ConstraintContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_constraint; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstraintContext.prototype.enterRule = function (listener) {
        if (listener.enterConstraint) {
            listener.enterConstraint(this);
        }
    };
    // @Override
    ConstraintContext.prototype.exitRule = function (listener) {
        if (listener.exitConstraint) {
            listener.exitConstraint(this);
        }
    };
    // @Override
    ConstraintContext.prototype.accept = function (visitor) {
        if (visitor.visitConstraint) {
            return visitor.visitConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstraintContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstraintContext = ConstraintContext;
var FunctionCallContext = /** @class */ (function (_super) {
    __extends(FunctionCallContext, _super);
    function FunctionCallContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionCallContext.prototype.iriRef = function () {
        return this.getRuleContext(0, IriRefContext);
    };
    FunctionCallContext.prototype.argList = function () {
        return this.getRuleContext(0, ArgListContext);
    };
    Object.defineProperty(FunctionCallContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_functionCall; },
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
var ArgListContext = /** @class */ (function (_super) {
    __extends(ArgListContext, _super);
    function ArgListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgListContext.prototype.NIL = function () { return this.tryGetToken(SparqlParser.NIL, 0); };
    ArgListContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(ArgListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_argList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArgListContext.prototype.enterRule = function (listener) {
        if (listener.enterArgList) {
            listener.enterArgList(this);
        }
    };
    // @Override
    ArgListContext.prototype.exitRule = function (listener) {
        if (listener.exitArgList) {
            listener.exitArgList(this);
        }
    };
    // @Override
    ArgListContext.prototype.accept = function (visitor) {
        if (visitor.visitArgList) {
            return visitor.visitArgList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgListContext = ArgListContext;
var ConstructTemplateContext = /** @class */ (function (_super) {
    __extends(ConstructTemplateContext, _super);
    function ConstructTemplateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstructTemplateContext.prototype.constructTriples = function () {
        return this.tryGetRuleContext(0, ConstructTriplesContext);
    };
    Object.defineProperty(ConstructTemplateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_constructTemplate; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstructTemplateContext.prototype.enterRule = function (listener) {
        if (listener.enterConstructTemplate) {
            listener.enterConstructTemplate(this);
        }
    };
    // @Override
    ConstructTemplateContext.prototype.exitRule = function (listener) {
        if (listener.exitConstructTemplate) {
            listener.exitConstructTemplate(this);
        }
    };
    // @Override
    ConstructTemplateContext.prototype.accept = function (visitor) {
        if (visitor.visitConstructTemplate) {
            return visitor.visitConstructTemplate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstructTemplateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstructTemplateContext = ConstructTemplateContext;
var ConstructTriplesContext = /** @class */ (function (_super) {
    __extends(ConstructTriplesContext, _super);
    function ConstructTriplesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstructTriplesContext.prototype.triplesSameSubject = function () {
        return this.getRuleContext(0, TriplesSameSubjectContext);
    };
    ConstructTriplesContext.prototype.constructTriples = function () {
        return this.tryGetRuleContext(0, ConstructTriplesContext);
    };
    Object.defineProperty(ConstructTriplesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_constructTriples; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstructTriplesContext.prototype.enterRule = function (listener) {
        if (listener.enterConstructTriples) {
            listener.enterConstructTriples(this);
        }
    };
    // @Override
    ConstructTriplesContext.prototype.exitRule = function (listener) {
        if (listener.exitConstructTriples) {
            listener.exitConstructTriples(this);
        }
    };
    // @Override
    ConstructTriplesContext.prototype.accept = function (visitor) {
        if (visitor.visitConstructTriples) {
            return visitor.visitConstructTriples(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstructTriplesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstructTriplesContext = ConstructTriplesContext;
var TriplesSameSubjectContext = /** @class */ (function (_super) {
    __extends(TriplesSameSubjectContext, _super);
    function TriplesSameSubjectContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TriplesSameSubjectContext.prototype.varOrTerm = function () {
        return this.tryGetRuleContext(0, VarOrTermContext);
    };
    TriplesSameSubjectContext.prototype.propertyListNotEmpty = function () {
        return this.tryGetRuleContext(0, PropertyListNotEmptyContext);
    };
    TriplesSameSubjectContext.prototype.triplesNode = function () {
        return this.tryGetRuleContext(0, TriplesNodeContext);
    };
    TriplesSameSubjectContext.prototype.propertyList = function () {
        return this.tryGetRuleContext(0, PropertyListContext);
    };
    Object.defineProperty(TriplesSameSubjectContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_triplesSameSubject; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TriplesSameSubjectContext.prototype.enterRule = function (listener) {
        if (listener.enterTriplesSameSubject) {
            listener.enterTriplesSameSubject(this);
        }
    };
    // @Override
    TriplesSameSubjectContext.prototype.exitRule = function (listener) {
        if (listener.exitTriplesSameSubject) {
            listener.exitTriplesSameSubject(this);
        }
    };
    // @Override
    TriplesSameSubjectContext.prototype.accept = function (visitor) {
        if (visitor.visitTriplesSameSubject) {
            return visitor.visitTriplesSameSubject(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TriplesSameSubjectContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TriplesSameSubjectContext = TriplesSameSubjectContext;
var PropertyListNotEmptyContext = /** @class */ (function (_super) {
    __extends(PropertyListNotEmptyContext, _super);
    function PropertyListNotEmptyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropertyListNotEmptyContext.prototype.verb = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VerbContext);
        }
        else {
            return this.getRuleContext(i, VerbContext);
        }
    };
    PropertyListNotEmptyContext.prototype.objectList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ObjectListContext);
        }
        else {
            return this.getRuleContext(i, ObjectListContext);
        }
    };
    Object.defineProperty(PropertyListNotEmptyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_propertyListNotEmpty; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PropertyListNotEmptyContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertyListNotEmpty) {
            listener.enterPropertyListNotEmpty(this);
        }
    };
    // @Override
    PropertyListNotEmptyContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertyListNotEmpty) {
            listener.exitPropertyListNotEmpty(this);
        }
    };
    // @Override
    PropertyListNotEmptyContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertyListNotEmpty) {
            return visitor.visitPropertyListNotEmpty(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertyListNotEmptyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertyListNotEmptyContext = PropertyListNotEmptyContext;
var PropertyListContext = /** @class */ (function (_super) {
    __extends(PropertyListContext, _super);
    function PropertyListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropertyListContext.prototype.propertyListNotEmpty = function () {
        return this.tryGetRuleContext(0, PropertyListNotEmptyContext);
    };
    Object.defineProperty(PropertyListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_propertyList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PropertyListContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertyList) {
            listener.enterPropertyList(this);
        }
    };
    // @Override
    PropertyListContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertyList) {
            listener.exitPropertyList(this);
        }
    };
    // @Override
    PropertyListContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertyList) {
            return visitor.visitPropertyList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertyListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertyListContext = PropertyListContext;
var ObjectListContext = /** @class */ (function (_super) {
    __extends(ObjectListContext, _super);
    function ObjectListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectListContext.prototype.object = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ObjectContext);
        }
        else {
            return this.getRuleContext(i, ObjectContext);
        }
    };
    Object.defineProperty(ObjectListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_objectList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectListContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectList) {
            listener.enterObjectList(this);
        }
    };
    // @Override
    ObjectListContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectList) {
            listener.exitObjectList(this);
        }
    };
    // @Override
    ObjectListContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectList) {
            return visitor.visitObjectList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectListContext = ObjectListContext;
var ObjectContext = /** @class */ (function (_super) {
    __extends(ObjectContext, _super);
    function ObjectContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectContext.prototype.graphNode = function () {
        return this.getRuleContext(0, GraphNodeContext);
    };
    Object.defineProperty(ObjectContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_object; },
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
var VerbContext = /** @class */ (function (_super) {
    __extends(VerbContext, _super);
    function VerbContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VerbContext.prototype.varOrIRIref = function () {
        return this.tryGetRuleContext(0, VarOrIRIrefContext);
    };
    Object.defineProperty(VerbContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_verb; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VerbContext.prototype.enterRule = function (listener) {
        if (listener.enterVerb) {
            listener.enterVerb(this);
        }
    };
    // @Override
    VerbContext.prototype.exitRule = function (listener) {
        if (listener.exitVerb) {
            listener.exitVerb(this);
        }
    };
    // @Override
    VerbContext.prototype.accept = function (visitor) {
        if (visitor.visitVerb) {
            return visitor.visitVerb(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VerbContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VerbContext = VerbContext;
var TriplesNodeContext = /** @class */ (function (_super) {
    __extends(TriplesNodeContext, _super);
    function TriplesNodeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TriplesNodeContext.prototype.collection = function () {
        return this.tryGetRuleContext(0, CollectionContext);
    };
    TriplesNodeContext.prototype.blankNodePropertyList = function () {
        return this.tryGetRuleContext(0, BlankNodePropertyListContext);
    };
    Object.defineProperty(TriplesNodeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_triplesNode; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TriplesNodeContext.prototype.enterRule = function (listener) {
        if (listener.enterTriplesNode) {
            listener.enterTriplesNode(this);
        }
    };
    // @Override
    TriplesNodeContext.prototype.exitRule = function (listener) {
        if (listener.exitTriplesNode) {
            listener.exitTriplesNode(this);
        }
    };
    // @Override
    TriplesNodeContext.prototype.accept = function (visitor) {
        if (visitor.visitTriplesNode) {
            return visitor.visitTriplesNode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TriplesNodeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TriplesNodeContext = TriplesNodeContext;
var BlankNodePropertyListContext = /** @class */ (function (_super) {
    __extends(BlankNodePropertyListContext, _super);
    function BlankNodePropertyListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlankNodePropertyListContext.prototype.propertyListNotEmpty = function () {
        return this.getRuleContext(0, PropertyListNotEmptyContext);
    };
    Object.defineProperty(BlankNodePropertyListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_blankNodePropertyList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlankNodePropertyListContext.prototype.enterRule = function (listener) {
        if (listener.enterBlankNodePropertyList) {
            listener.enterBlankNodePropertyList(this);
        }
    };
    // @Override
    BlankNodePropertyListContext.prototype.exitRule = function (listener) {
        if (listener.exitBlankNodePropertyList) {
            listener.exitBlankNodePropertyList(this);
        }
    };
    // @Override
    BlankNodePropertyListContext.prototype.accept = function (visitor) {
        if (visitor.visitBlankNodePropertyList) {
            return visitor.visitBlankNodePropertyList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlankNodePropertyListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlankNodePropertyListContext = BlankNodePropertyListContext;
var CollectionContext = /** @class */ (function (_super) {
    __extends(CollectionContext, _super);
    function CollectionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CollectionContext.prototype.graphNode = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(GraphNodeContext);
        }
        else {
            return this.getRuleContext(i, GraphNodeContext);
        }
    };
    Object.defineProperty(CollectionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_collection; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CollectionContext.prototype.enterRule = function (listener) {
        if (listener.enterCollection) {
            listener.enterCollection(this);
        }
    };
    // @Override
    CollectionContext.prototype.exitRule = function (listener) {
        if (listener.exitCollection) {
            listener.exitCollection(this);
        }
    };
    // @Override
    CollectionContext.prototype.accept = function (visitor) {
        if (visitor.visitCollection) {
            return visitor.visitCollection(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CollectionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CollectionContext = CollectionContext;
var GraphNodeContext = /** @class */ (function (_super) {
    __extends(GraphNodeContext, _super);
    function GraphNodeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GraphNodeContext.prototype.varOrTerm = function () {
        return this.tryGetRuleContext(0, VarOrTermContext);
    };
    GraphNodeContext.prototype.triplesNode = function () {
        return this.tryGetRuleContext(0, TriplesNodeContext);
    };
    Object.defineProperty(GraphNodeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_graphNode; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GraphNodeContext.prototype.enterRule = function (listener) {
        if (listener.enterGraphNode) {
            listener.enterGraphNode(this);
        }
    };
    // @Override
    GraphNodeContext.prototype.exitRule = function (listener) {
        if (listener.exitGraphNode) {
            listener.exitGraphNode(this);
        }
    };
    // @Override
    GraphNodeContext.prototype.accept = function (visitor) {
        if (visitor.visitGraphNode) {
            return visitor.visitGraphNode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GraphNodeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GraphNodeContext = GraphNodeContext;
var VarOrTermContext = /** @class */ (function (_super) {
    __extends(VarOrTermContext, _super);
    function VarOrTermContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VarOrTermContext.prototype.var = function () {
        return this.tryGetRuleContext(0, VarContext);
    };
    VarOrTermContext.prototype.graphTerm = function () {
        return this.tryGetRuleContext(0, GraphTermContext);
    };
    Object.defineProperty(VarOrTermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_varOrTerm; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VarOrTermContext.prototype.enterRule = function (listener) {
        if (listener.enterVarOrTerm) {
            listener.enterVarOrTerm(this);
        }
    };
    // @Override
    VarOrTermContext.prototype.exitRule = function (listener) {
        if (listener.exitVarOrTerm) {
            listener.exitVarOrTerm(this);
        }
    };
    // @Override
    VarOrTermContext.prototype.accept = function (visitor) {
        if (visitor.visitVarOrTerm) {
            return visitor.visitVarOrTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VarOrTermContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VarOrTermContext = VarOrTermContext;
var VarOrIRIrefContext = /** @class */ (function (_super) {
    __extends(VarOrIRIrefContext, _super);
    function VarOrIRIrefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VarOrIRIrefContext.prototype.var = function () {
        return this.tryGetRuleContext(0, VarContext);
    };
    VarOrIRIrefContext.prototype.iriRef = function () {
        return this.tryGetRuleContext(0, IriRefContext);
    };
    Object.defineProperty(VarOrIRIrefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_varOrIRIref; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VarOrIRIrefContext.prototype.enterRule = function (listener) {
        if (listener.enterVarOrIRIref) {
            listener.enterVarOrIRIref(this);
        }
    };
    // @Override
    VarOrIRIrefContext.prototype.exitRule = function (listener) {
        if (listener.exitVarOrIRIref) {
            listener.exitVarOrIRIref(this);
        }
    };
    // @Override
    VarOrIRIrefContext.prototype.accept = function (visitor) {
        if (visitor.visitVarOrIRIref) {
            return visitor.visitVarOrIRIref(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VarOrIRIrefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VarOrIRIrefContext = VarOrIRIrefContext;
var VarContext = /** @class */ (function (_super) {
    __extends(VarContext, _super);
    function VarContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VarContext.prototype.VAR1 = function () { return this.tryGetToken(SparqlParser.VAR1, 0); };
    VarContext.prototype.VAR2 = function () { return this.tryGetToken(SparqlParser.VAR2, 0); };
    Object.defineProperty(VarContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_var; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VarContext.prototype.enterRule = function (listener) {
        if (listener.enterVar) {
            listener.enterVar(this);
        }
    };
    // @Override
    VarContext.prototype.exitRule = function (listener) {
        if (listener.exitVar) {
            listener.exitVar(this);
        }
    };
    // @Override
    VarContext.prototype.accept = function (visitor) {
        if (visitor.visitVar) {
            return visitor.visitVar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VarContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VarContext = VarContext;
var GraphTermContext = /** @class */ (function (_super) {
    __extends(GraphTermContext, _super);
    function GraphTermContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GraphTermContext.prototype.iriRef = function () {
        return this.tryGetRuleContext(0, IriRefContext);
    };
    GraphTermContext.prototype.rdfLiteral = function () {
        return this.tryGetRuleContext(0, RdfLiteralContext);
    };
    GraphTermContext.prototype.numericLiteral = function () {
        return this.tryGetRuleContext(0, NumericLiteralContext);
    };
    GraphTermContext.prototype.booleanLiteral = function () {
        return this.tryGetRuleContext(0, BooleanLiteralContext);
    };
    GraphTermContext.prototype.blankNode = function () {
        return this.tryGetRuleContext(0, BlankNodeContext);
    };
    GraphTermContext.prototype.NIL = function () { return this.tryGetToken(SparqlParser.NIL, 0); };
    Object.defineProperty(GraphTermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_graphTerm; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GraphTermContext.prototype.enterRule = function (listener) {
        if (listener.enterGraphTerm) {
            listener.enterGraphTerm(this);
        }
    };
    // @Override
    GraphTermContext.prototype.exitRule = function (listener) {
        if (listener.exitGraphTerm) {
            listener.exitGraphTerm(this);
        }
    };
    // @Override
    GraphTermContext.prototype.accept = function (visitor) {
        if (visitor.visitGraphTerm) {
            return visitor.visitGraphTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GraphTermContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GraphTermContext = GraphTermContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.conditionalOrExpression = function () {
        return this.getRuleContext(0, ConditionalOrExpressionContext);
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_expression; },
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
var ConditionalOrExpressionContext = /** @class */ (function (_super) {
    __extends(ConditionalOrExpressionContext, _super);
    function ConditionalOrExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConditionalOrExpressionContext.prototype.conditionalAndExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConditionalAndExpressionContext);
        }
        else {
            return this.getRuleContext(i, ConditionalAndExpressionContext);
        }
    };
    Object.defineProperty(ConditionalOrExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_conditionalOrExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConditionalOrExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterConditionalOrExpression) {
            listener.enterConditionalOrExpression(this);
        }
    };
    // @Override
    ConditionalOrExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitConditionalOrExpression) {
            listener.exitConditionalOrExpression(this);
        }
    };
    // @Override
    ConditionalOrExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitConditionalOrExpression) {
            return visitor.visitConditionalOrExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConditionalOrExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConditionalOrExpressionContext = ConditionalOrExpressionContext;
var ConditionalAndExpressionContext = /** @class */ (function (_super) {
    __extends(ConditionalAndExpressionContext, _super);
    function ConditionalAndExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConditionalAndExpressionContext.prototype.valueLogical = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueLogicalContext);
        }
        else {
            return this.getRuleContext(i, ValueLogicalContext);
        }
    };
    Object.defineProperty(ConditionalAndExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_conditionalAndExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConditionalAndExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterConditionalAndExpression) {
            listener.enterConditionalAndExpression(this);
        }
    };
    // @Override
    ConditionalAndExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitConditionalAndExpression) {
            listener.exitConditionalAndExpression(this);
        }
    };
    // @Override
    ConditionalAndExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitConditionalAndExpression) {
            return visitor.visitConditionalAndExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConditionalAndExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConditionalAndExpressionContext = ConditionalAndExpressionContext;
var ValueLogicalContext = /** @class */ (function (_super) {
    __extends(ValueLogicalContext, _super);
    function ValueLogicalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ValueLogicalContext.prototype.relationalExpression = function () {
        return this.getRuleContext(0, RelationalExpressionContext);
    };
    Object.defineProperty(ValueLogicalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_valueLogical; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ValueLogicalContext.prototype.enterRule = function (listener) {
        if (listener.enterValueLogical) {
            listener.enterValueLogical(this);
        }
    };
    // @Override
    ValueLogicalContext.prototype.exitRule = function (listener) {
        if (listener.exitValueLogical) {
            listener.exitValueLogical(this);
        }
    };
    // @Override
    ValueLogicalContext.prototype.accept = function (visitor) {
        if (visitor.visitValueLogical) {
            return visitor.visitValueLogical(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ValueLogicalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ValueLogicalContext = ValueLogicalContext;
var RelationalExpressionContext = /** @class */ (function (_super) {
    __extends(RelationalExpressionContext, _super);
    function RelationalExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RelationalExpressionContext.prototype.numericExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NumericExpressionContext);
        }
        else {
            return this.getRuleContext(i, NumericExpressionContext);
        }
    };
    Object.defineProperty(RelationalExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_relationalExpression; },
        enumerable: true,
        configurable: true
    });
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
}(ParserRuleContext_1.ParserRuleContext));
exports.RelationalExpressionContext = RelationalExpressionContext;
var NumericExpressionContext = /** @class */ (function (_super) {
    __extends(NumericExpressionContext, _super);
    function NumericExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumericExpressionContext.prototype.additiveExpression = function () {
        return this.getRuleContext(0, AdditiveExpressionContext);
    };
    Object.defineProperty(NumericExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_numericExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NumericExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterNumericExpression) {
            listener.enterNumericExpression(this);
        }
    };
    // @Override
    NumericExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitNumericExpression) {
            listener.exitNumericExpression(this);
        }
    };
    // @Override
    NumericExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitNumericExpression) {
            return visitor.visitNumericExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumericExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NumericExpressionContext = NumericExpressionContext;
var AdditiveExpressionContext = /** @class */ (function (_super) {
    __extends(AdditiveExpressionContext, _super);
    function AdditiveExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AdditiveExpressionContext.prototype.multiplicativeExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MultiplicativeExpressionContext);
        }
        else {
            return this.getRuleContext(i, MultiplicativeExpressionContext);
        }
    };
    AdditiveExpressionContext.prototype.numericLiteralPositive = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NumericLiteralPositiveContext);
        }
        else {
            return this.getRuleContext(i, NumericLiteralPositiveContext);
        }
    };
    AdditiveExpressionContext.prototype.numericLiteralNegative = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NumericLiteralNegativeContext);
        }
        else {
            return this.getRuleContext(i, NumericLiteralNegativeContext);
        }
    };
    Object.defineProperty(AdditiveExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_additiveExpression; },
        enumerable: true,
        configurable: true
    });
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
}(ParserRuleContext_1.ParserRuleContext));
exports.AdditiveExpressionContext = AdditiveExpressionContext;
var MultiplicativeExpressionContext = /** @class */ (function (_super) {
    __extends(MultiplicativeExpressionContext, _super);
    function MultiplicativeExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultiplicativeExpressionContext.prototype.unaryExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(UnaryExpressionContext);
        }
        else {
            return this.getRuleContext(i, UnaryExpressionContext);
        }
    };
    Object.defineProperty(MultiplicativeExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_multiplicativeExpression; },
        enumerable: true,
        configurable: true
    });
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
}(ParserRuleContext_1.ParserRuleContext));
exports.MultiplicativeExpressionContext = MultiplicativeExpressionContext;
var UnaryExpressionContext = /** @class */ (function (_super) {
    __extends(UnaryExpressionContext, _super);
    function UnaryExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnaryExpressionContext.prototype.primaryExpression = function () {
        return this.getRuleContext(0, PrimaryExpressionContext);
    };
    Object.defineProperty(UnaryExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_unaryExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnaryExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterUnaryExpression) {
            listener.enterUnaryExpression(this);
        }
    };
    // @Override
    UnaryExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitUnaryExpression) {
            listener.exitUnaryExpression(this);
        }
    };
    // @Override
    UnaryExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitUnaryExpression) {
            return visitor.visitUnaryExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnaryExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnaryExpressionContext = UnaryExpressionContext;
var PrimaryExpressionContext = /** @class */ (function (_super) {
    __extends(PrimaryExpressionContext, _super);
    function PrimaryExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrimaryExpressionContext.prototype.brackettedExpression = function () {
        return this.tryGetRuleContext(0, BrackettedExpressionContext);
    };
    PrimaryExpressionContext.prototype.builtInCall = function () {
        return this.tryGetRuleContext(0, BuiltInCallContext);
    };
    PrimaryExpressionContext.prototype.iriRefOrFunction = function () {
        return this.tryGetRuleContext(0, IriRefOrFunctionContext);
    };
    PrimaryExpressionContext.prototype.rdfLiteral = function () {
        return this.tryGetRuleContext(0, RdfLiteralContext);
    };
    PrimaryExpressionContext.prototype.numericLiteral = function () {
        return this.tryGetRuleContext(0, NumericLiteralContext);
    };
    PrimaryExpressionContext.prototype.booleanLiteral = function () {
        return this.tryGetRuleContext(0, BooleanLiteralContext);
    };
    PrimaryExpressionContext.prototype.var = function () {
        return this.tryGetRuleContext(0, VarContext);
    };
    Object.defineProperty(PrimaryExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_primaryExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrimaryExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPrimaryExpression) {
            listener.enterPrimaryExpression(this);
        }
    };
    // @Override
    PrimaryExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPrimaryExpression) {
            listener.exitPrimaryExpression(this);
        }
    };
    // @Override
    PrimaryExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPrimaryExpression) {
            return visitor.visitPrimaryExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrimaryExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrimaryExpressionContext = PrimaryExpressionContext;
var BrackettedExpressionContext = /** @class */ (function (_super) {
    __extends(BrackettedExpressionContext, _super);
    function BrackettedExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BrackettedExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(BrackettedExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_brackettedExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BrackettedExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterBrackettedExpression) {
            listener.enterBrackettedExpression(this);
        }
    };
    // @Override
    BrackettedExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitBrackettedExpression) {
            listener.exitBrackettedExpression(this);
        }
    };
    // @Override
    BrackettedExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitBrackettedExpression) {
            return visitor.visitBrackettedExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BrackettedExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BrackettedExpressionContext = BrackettedExpressionContext;
var BuiltInCallContext = /** @class */ (function (_super) {
    __extends(BuiltInCallContext, _super);
    function BuiltInCallContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BuiltInCallContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    BuiltInCallContext.prototype.var = function () {
        return this.tryGetRuleContext(0, VarContext);
    };
    BuiltInCallContext.prototype.regexExpression = function () {
        return this.tryGetRuleContext(0, RegexExpressionContext);
    };
    Object.defineProperty(BuiltInCallContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_builtInCall; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BuiltInCallContext.prototype.enterRule = function (listener) {
        if (listener.enterBuiltInCall) {
            listener.enterBuiltInCall(this);
        }
    };
    // @Override
    BuiltInCallContext.prototype.exitRule = function (listener) {
        if (listener.exitBuiltInCall) {
            listener.exitBuiltInCall(this);
        }
    };
    // @Override
    BuiltInCallContext.prototype.accept = function (visitor) {
        if (visitor.visitBuiltInCall) {
            return visitor.visitBuiltInCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BuiltInCallContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BuiltInCallContext = BuiltInCallContext;
var RegexExpressionContext = /** @class */ (function (_super) {
    __extends(RegexExpressionContext, _super);
    function RegexExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RegexExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(RegexExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_regexExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RegexExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterRegexExpression) {
            listener.enterRegexExpression(this);
        }
    };
    // @Override
    RegexExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitRegexExpression) {
            listener.exitRegexExpression(this);
        }
    };
    // @Override
    RegexExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitRegexExpression) {
            return visitor.visitRegexExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RegexExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RegexExpressionContext = RegexExpressionContext;
var IriRefOrFunctionContext = /** @class */ (function (_super) {
    __extends(IriRefOrFunctionContext, _super);
    function IriRefOrFunctionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IriRefOrFunctionContext.prototype.iriRef = function () {
        return this.getRuleContext(0, IriRefContext);
    };
    IriRefOrFunctionContext.prototype.argList = function () {
        return this.tryGetRuleContext(0, ArgListContext);
    };
    Object.defineProperty(IriRefOrFunctionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_iriRefOrFunction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IriRefOrFunctionContext.prototype.enterRule = function (listener) {
        if (listener.enterIriRefOrFunction) {
            listener.enterIriRefOrFunction(this);
        }
    };
    // @Override
    IriRefOrFunctionContext.prototype.exitRule = function (listener) {
        if (listener.exitIriRefOrFunction) {
            listener.exitIriRefOrFunction(this);
        }
    };
    // @Override
    IriRefOrFunctionContext.prototype.accept = function (visitor) {
        if (visitor.visitIriRefOrFunction) {
            return visitor.visitIriRefOrFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IriRefOrFunctionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IriRefOrFunctionContext = IriRefOrFunctionContext;
var RdfLiteralContext = /** @class */ (function (_super) {
    __extends(RdfLiteralContext, _super);
    function RdfLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RdfLiteralContext.prototype.string = function () {
        return this.getRuleContext(0, StringContext);
    };
    RdfLiteralContext.prototype.LANGTAG = function () { return this.tryGetToken(SparqlParser.LANGTAG, 0); };
    RdfLiteralContext.prototype.iriRef = function () {
        return this.tryGetRuleContext(0, IriRefContext);
    };
    Object.defineProperty(RdfLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_rdfLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RdfLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterRdfLiteral) {
            listener.enterRdfLiteral(this);
        }
    };
    // @Override
    RdfLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitRdfLiteral) {
            listener.exitRdfLiteral(this);
        }
    };
    // @Override
    RdfLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitRdfLiteral) {
            return visitor.visitRdfLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RdfLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RdfLiteralContext = RdfLiteralContext;
var NumericLiteralContext = /** @class */ (function (_super) {
    __extends(NumericLiteralContext, _super);
    function NumericLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumericLiteralContext.prototype.numericLiteralUnsigned = function () {
        return this.tryGetRuleContext(0, NumericLiteralUnsignedContext);
    };
    NumericLiteralContext.prototype.numericLiteralPositive = function () {
        return this.tryGetRuleContext(0, NumericLiteralPositiveContext);
    };
    NumericLiteralContext.prototype.numericLiteralNegative = function () {
        return this.tryGetRuleContext(0, NumericLiteralNegativeContext);
    };
    Object.defineProperty(NumericLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_numericLiteral; },
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
var NumericLiteralUnsignedContext = /** @class */ (function (_super) {
    __extends(NumericLiteralUnsignedContext, _super);
    function NumericLiteralUnsignedContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumericLiteralUnsignedContext.prototype.INTEGER = function () { return this.tryGetToken(SparqlParser.INTEGER, 0); };
    NumericLiteralUnsignedContext.prototype.DECIMAL = function () { return this.tryGetToken(SparqlParser.DECIMAL, 0); };
    NumericLiteralUnsignedContext.prototype.DOUBLE = function () { return this.tryGetToken(SparqlParser.DOUBLE, 0); };
    Object.defineProperty(NumericLiteralUnsignedContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_numericLiteralUnsigned; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NumericLiteralUnsignedContext.prototype.enterRule = function (listener) {
        if (listener.enterNumericLiteralUnsigned) {
            listener.enterNumericLiteralUnsigned(this);
        }
    };
    // @Override
    NumericLiteralUnsignedContext.prototype.exitRule = function (listener) {
        if (listener.exitNumericLiteralUnsigned) {
            listener.exitNumericLiteralUnsigned(this);
        }
    };
    // @Override
    NumericLiteralUnsignedContext.prototype.accept = function (visitor) {
        if (visitor.visitNumericLiteralUnsigned) {
            return visitor.visitNumericLiteralUnsigned(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumericLiteralUnsignedContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NumericLiteralUnsignedContext = NumericLiteralUnsignedContext;
var NumericLiteralPositiveContext = /** @class */ (function (_super) {
    __extends(NumericLiteralPositiveContext, _super);
    function NumericLiteralPositiveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumericLiteralPositiveContext.prototype.INTEGER_POSITIVE = function () { return this.tryGetToken(SparqlParser.INTEGER_POSITIVE, 0); };
    NumericLiteralPositiveContext.prototype.DECIMAL_POSITIVE = function () { return this.tryGetToken(SparqlParser.DECIMAL_POSITIVE, 0); };
    NumericLiteralPositiveContext.prototype.DOUBLE_POSITIVE = function () { return this.tryGetToken(SparqlParser.DOUBLE_POSITIVE, 0); };
    Object.defineProperty(NumericLiteralPositiveContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_numericLiteralPositive; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NumericLiteralPositiveContext.prototype.enterRule = function (listener) {
        if (listener.enterNumericLiteralPositive) {
            listener.enterNumericLiteralPositive(this);
        }
    };
    // @Override
    NumericLiteralPositiveContext.prototype.exitRule = function (listener) {
        if (listener.exitNumericLiteralPositive) {
            listener.exitNumericLiteralPositive(this);
        }
    };
    // @Override
    NumericLiteralPositiveContext.prototype.accept = function (visitor) {
        if (visitor.visitNumericLiteralPositive) {
            return visitor.visitNumericLiteralPositive(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumericLiteralPositiveContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NumericLiteralPositiveContext = NumericLiteralPositiveContext;
var NumericLiteralNegativeContext = /** @class */ (function (_super) {
    __extends(NumericLiteralNegativeContext, _super);
    function NumericLiteralNegativeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumericLiteralNegativeContext.prototype.INTEGER_NEGATIVE = function () { return this.tryGetToken(SparqlParser.INTEGER_NEGATIVE, 0); };
    NumericLiteralNegativeContext.prototype.DECIMAL_NEGATIVE = function () { return this.tryGetToken(SparqlParser.DECIMAL_NEGATIVE, 0); };
    NumericLiteralNegativeContext.prototype.DOUBLE_NEGATIVE = function () { return this.tryGetToken(SparqlParser.DOUBLE_NEGATIVE, 0); };
    Object.defineProperty(NumericLiteralNegativeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_numericLiteralNegative; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NumericLiteralNegativeContext.prototype.enterRule = function (listener) {
        if (listener.enterNumericLiteralNegative) {
            listener.enterNumericLiteralNegative(this);
        }
    };
    // @Override
    NumericLiteralNegativeContext.prototype.exitRule = function (listener) {
        if (listener.exitNumericLiteralNegative) {
            listener.exitNumericLiteralNegative(this);
        }
    };
    // @Override
    NumericLiteralNegativeContext.prototype.accept = function (visitor) {
        if (visitor.visitNumericLiteralNegative) {
            return visitor.visitNumericLiteralNegative(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumericLiteralNegativeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NumericLiteralNegativeContext = NumericLiteralNegativeContext;
var BooleanLiteralContext = /** @class */ (function (_super) {
    __extends(BooleanLiteralContext, _super);
    function BooleanLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(BooleanLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_booleanLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BooleanLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterBooleanLiteral) {
            listener.enterBooleanLiteral(this);
        }
    };
    // @Override
    BooleanLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitBooleanLiteral) {
            listener.exitBooleanLiteral(this);
        }
    };
    // @Override
    BooleanLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitBooleanLiteral) {
            return visitor.visitBooleanLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BooleanLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BooleanLiteralContext = BooleanLiteralContext;
var StringContext = /** @class */ (function (_super) {
    __extends(StringContext, _super);
    function StringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringContext.prototype.STRING_LITERAL1 = function () { return this.tryGetToken(SparqlParser.STRING_LITERAL1, 0); };
    StringContext.prototype.STRING_LITERAL2 = function () { return this.tryGetToken(SparqlParser.STRING_LITERAL2, 0); };
    Object.defineProperty(StringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_string; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StringContext.prototype.enterRule = function (listener) {
        if (listener.enterString) {
            listener.enterString(this);
        }
    };
    // @Override
    StringContext.prototype.exitRule = function (listener) {
        if (listener.exitString) {
            listener.exitString(this);
        }
    };
    // @Override
    StringContext.prototype.accept = function (visitor) {
        if (visitor.visitString) {
            return visitor.visitString(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StringContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StringContext = StringContext;
var IriRefContext = /** @class */ (function (_super) {
    __extends(IriRefContext, _super);
    function IriRefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IriRefContext.prototype.IRI_REF = function () { return this.tryGetToken(SparqlParser.IRI_REF, 0); };
    IriRefContext.prototype.prefixedName = function () {
        return this.tryGetRuleContext(0, PrefixedNameContext);
    };
    Object.defineProperty(IriRefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_iriRef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IriRefContext.prototype.enterRule = function (listener) {
        if (listener.enterIriRef) {
            listener.enterIriRef(this);
        }
    };
    // @Override
    IriRefContext.prototype.exitRule = function (listener) {
        if (listener.exitIriRef) {
            listener.exitIriRef(this);
        }
    };
    // @Override
    IriRefContext.prototype.accept = function (visitor) {
        if (visitor.visitIriRef) {
            return visitor.visitIriRef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IriRefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IriRefContext = IriRefContext;
var PrefixedNameContext = /** @class */ (function (_super) {
    __extends(PrefixedNameContext, _super);
    function PrefixedNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrefixedNameContext.prototype.PNAME_LN = function () { return this.tryGetToken(SparqlParser.PNAME_LN, 0); };
    PrefixedNameContext.prototype.PNAME_NS = function () { return this.tryGetToken(SparqlParser.PNAME_NS, 0); };
    Object.defineProperty(PrefixedNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_prefixedName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrefixedNameContext.prototype.enterRule = function (listener) {
        if (listener.enterPrefixedName) {
            listener.enterPrefixedName(this);
        }
    };
    // @Override
    PrefixedNameContext.prototype.exitRule = function (listener) {
        if (listener.exitPrefixedName) {
            listener.exitPrefixedName(this);
        }
    };
    // @Override
    PrefixedNameContext.prototype.accept = function (visitor) {
        if (visitor.visitPrefixedName) {
            return visitor.visitPrefixedName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrefixedNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrefixedNameContext = PrefixedNameContext;
var BlankNodeContext = /** @class */ (function (_super) {
    __extends(BlankNodeContext, _super);
    function BlankNodeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlankNodeContext.prototype.BLANK_NODE_LABEL = function () { return this.tryGetToken(SparqlParser.BLANK_NODE_LABEL, 0); };
    BlankNodeContext.prototype.ANON = function () { return this.tryGetToken(SparqlParser.ANON, 0); };
    Object.defineProperty(BlankNodeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SparqlParser.RULE_blankNode; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlankNodeContext.prototype.enterRule = function (listener) {
        if (listener.enterBlankNode) {
            listener.enterBlankNode(this);
        }
    };
    // @Override
    BlankNodeContext.prototype.exitRule = function (listener) {
        if (listener.exitBlankNode) {
            listener.exitBlankNode(this);
        }
    };
    // @Override
    BlankNodeContext.prototype.accept = function (visitor) {
        if (visitor.visitBlankNode) {
            return visitor.visitBlankNode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlankNodeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlankNodeContext = BlankNodeContext;
