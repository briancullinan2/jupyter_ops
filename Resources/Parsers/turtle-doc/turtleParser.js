"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/turtle-doc/turtle.g4 by ANTLR 4.7.3-SNAPSHOT
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
var turtleParser = /** @class */ (function (_super) {
    __extends(turtleParser, _super);
    function turtleParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(turtleParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(turtleParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return turtleParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(turtleParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "turtle.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(turtleParser.prototype, "ruleNames", {
        // @Override
        get: function () { return turtleParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(turtleParser.prototype, "serializedATN", {
        // @Override
        get: function () { return turtleParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    turtleParser.prototype.turtleDoc = function () {
        var _localctx = new TurtleDocContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, turtleParser.RULE_turtleDoc);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 49;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << turtleParser.PNameLn) | (1 << turtleParser.LParen) | (1 << turtleParser.LEnd) | (1 << turtleParser.IriRef) | (1 << turtleParser.PNameNs) | (1 << turtleParser.BlankNodeLabel) | (1 << turtleParser.ANON))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (turtleParser.PrefixKeyword - 37)) | (1 << (turtleParser.BaseKeyword - 37)) | (1 << (turtleParser.AtPrefixKeyword - 37)) | (1 << (turtleParser.AtBaseKeyword - 37)))) !== 0)) {
                    {
                        {
                            this.state = 46;
                            this.statement();
                        }
                    }
                    this.state = 51;
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
    turtleParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, turtleParser.RULE_statement);
        try {
            this.state = 56;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case turtleParser.PrefixKeyword:
                case turtleParser.BaseKeyword:
                case turtleParser.AtPrefixKeyword:
                case turtleParser.AtBaseKeyword:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 52;
                        this.directive();
                    }
                    break;
                case turtleParser.PNameLn:
                case turtleParser.LParen:
                case turtleParser.LEnd:
                case turtleParser.IriRef:
                case turtleParser.PNameNs:
                case turtleParser.BlankNodeLabel:
                case turtleParser.ANON:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 53;
                        this.triples();
                        this.state = 54;
                        this.match(turtleParser.Dot);
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
    turtleParser.prototype.directive = function () {
        var _localctx = new DirectiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, turtleParser.RULE_directive);
        try {
            this.state = 62;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case turtleParser.AtPrefixKeyword:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 58;
                        this.prefixID();
                    }
                    break;
                case turtleParser.AtBaseKeyword:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 59;
                        this.base();
                    }
                    break;
                case turtleParser.PrefixKeyword:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 60;
                        this.sparqlPrefix();
                    }
                    break;
                case turtleParser.BaseKeyword:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 61;
                        this.sparqlBase();
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
    turtleParser.prototype.prefixID = function () {
        var _localctx = new PrefixIDContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, turtleParser.RULE_prefixID);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 64;
                this.match(turtleParser.AtPrefixKeyword);
                this.state = 65;
                this.match(turtleParser.PNameNs);
                this.state = 66;
                this.match(turtleParser.IriRef);
                this.state = 67;
                this.match(turtleParser.Dot);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    turtleParser.prototype.base = function () {
        var _localctx = new BaseContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, turtleParser.RULE_base);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 69;
                this.match(turtleParser.AtBaseKeyword);
                this.state = 70;
                this.match(turtleParser.IriRef);
                this.state = 71;
                this.match(turtleParser.Dot);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    turtleParser.prototype.sparqlBase = function () {
        var _localctx = new SparqlBaseContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, turtleParser.RULE_sparqlBase);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 73;
                this.match(turtleParser.BaseKeyword);
                this.state = 74;
                this.match(turtleParser.IriRef);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    turtleParser.prototype.sparqlPrefix = function () {
        var _localctx = new SparqlPrefixContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, turtleParser.RULE_sparqlPrefix);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 76;
                this.match(turtleParser.PrefixKeyword);
                this.state = 77;
                this.match(turtleParser.PNameNs);
                this.state = 78;
                this.match(turtleParser.IriRef);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    turtleParser.prototype.triples = function () {
        var _localctx = new TriplesContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, turtleParser.RULE_triples);
        var _la;
        try {
            this.state = 87;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case turtleParser.PNameLn:
                case turtleParser.LParen:
                case turtleParser.IriRef:
                case turtleParser.PNameNs:
                case turtleParser.BlankNodeLabel:
                case turtleParser.ANON:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 80;
                        this.subject();
                        this.state = 81;
                        this.predicateObjectList();
                    }
                    break;
                case turtleParser.LEnd:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 83;
                        this.blankNodePropertyList();
                        this.state = 85;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << turtleParser.PNameLn) | (1 << turtleParser.LetterA) | (1 << turtleParser.IriRef) | (1 << turtleParser.PNameNs))) !== 0)) {
                            {
                                this.state = 84;
                                this.predicateObjectList();
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
    turtleParser.prototype.predicateObjectList = function () {
        var _localctx = new PredicateObjectListContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, turtleParser.RULE_predicateObjectList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 89;
                this.predicateObject();
                this.state = 96;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === turtleParser.Semi) {
                    {
                        {
                            this.state = 90;
                            this.match(turtleParser.Semi);
                            this.state = 92;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << turtleParser.PNameLn) | (1 << turtleParser.LetterA) | (1 << turtleParser.IriRef) | (1 << turtleParser.PNameNs))) !== 0)) {
                                {
                                    this.state = 91;
                                    this.predicateObject();
                                }
                            }
                        }
                    }
                    this.state = 98;
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
    turtleParser.prototype.objectList = function () {
        var _localctx = new ObjectListContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, turtleParser.RULE_objectList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 99;
                this.object();
                this.state = 104;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === turtleParser.Coma) {
                    {
                        {
                            this.state = 100;
                            this.match(turtleParser.Coma);
                            this.state = 101;
                            this.object();
                        }
                    }
                    this.state = 106;
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
    turtleParser.prototype.predicateObject = function () {
        var _localctx = new PredicateObjectContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, turtleParser.RULE_predicateObject);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 109;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case turtleParser.PNameLn:
                    case turtleParser.IriRef:
                    case turtleParser.PNameNs:
                        {
                            this.state = 107;
                            this.predicate();
                        }
                        break;
                    case turtleParser.LetterA:
                        {
                            this.state = 108;
                            this.match(turtleParser.LetterA);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 111;
                this.objectList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    turtleParser.prototype.subject = function () {
        var _localctx = new SubjectContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, turtleParser.RULE_subject);
        try {
            this.state = 116;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case turtleParser.PNameLn:
                case turtleParser.IriRef:
                case turtleParser.PNameNs:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 113;
                        this.iri();
                    }
                    break;
                case turtleParser.BlankNodeLabel:
                case turtleParser.ANON:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 114;
                        this.blankNode();
                    }
                    break;
                case turtleParser.LParen:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 115;
                        this.collection();
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
    turtleParser.prototype.predicate = function () {
        var _localctx = new PredicateContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, turtleParser.RULE_predicate);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 118;
                this.iri();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    turtleParser.prototype.object = function () {
        var _localctx = new ObjectContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, turtleParser.RULE_object);
        try {
            this.state = 125;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case turtleParser.PNameLn:
                case turtleParser.IriRef:
                case turtleParser.PNameNs:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 120;
                        this.iri();
                    }
                    break;
                case turtleParser.BlankNodeLabel:
                case turtleParser.ANON:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 121;
                        this.blankNode();
                    }
                    break;
                case turtleParser.LParen:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 122;
                        this.collection();
                    }
                    break;
                case turtleParser.LEnd:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 123;
                        this.blankNodePropertyList();
                    }
                    break;
                case turtleParser.Integer:
                case turtleParser.Decimal:
                case turtleParser.Double:
                case turtleParser.StringLiteralQuote:
                case turtleParser.StringLiteralSingleQuote:
                case turtleParser.StringLiteralLongSingleQuote:
                case turtleParser.StringLiteralLongQuote:
                case turtleParser.TrueKeyword:
                case turtleParser.FalseKeyword:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 124;
                        this.literal();
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
    turtleParser.prototype.literal = function () {
        var _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, turtleParser.RULE_literal);
        try {
            this.state = 130;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case turtleParser.StringLiteralQuote:
                case turtleParser.StringLiteralSingleQuote:
                case turtleParser.StringLiteralLongSingleQuote:
                case turtleParser.StringLiteralLongQuote:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 127;
                        this.rDFLiteral();
                    }
                    break;
                case turtleParser.Integer:
                case turtleParser.Decimal:
                case turtleParser.Double:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 128;
                        this.numericLiteral();
                    }
                    break;
                case turtleParser.TrueKeyword:
                case turtleParser.FalseKeyword:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 129;
                        this.bool();
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
    turtleParser.prototype.blankNodePropertyList = function () {
        var _localctx = new BlankNodePropertyListContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, turtleParser.RULE_blankNodePropertyList);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 132;
                this.match(turtleParser.LEnd);
                this.state = 133;
                this.predicateObjectList();
                this.state = 134;
                this.match(turtleParser.REnd);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    turtleParser.prototype.collection = function () {
        var _localctx = new CollectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, turtleParser.RULE_collection);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 136;
                this.match(turtleParser.LParen);
                this.state = 140;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << turtleParser.PNameLn) | (1 << turtleParser.LParen) | (1 << turtleParser.LEnd) | (1 << turtleParser.IriRef) | (1 << turtleParser.PNameNs) | (1 << turtleParser.BlankNodeLabel) | (1 << turtleParser.Integer) | (1 << turtleParser.Decimal) | (1 << turtleParser.Double) | (1 << turtleParser.StringLiteralQuote) | (1 << turtleParser.StringLiteralSingleQuote) | (1 << turtleParser.StringLiteralLongSingleQuote) | (1 << turtleParser.StringLiteralLongQuote) | (1 << turtleParser.ANON))) !== 0) || _la === turtleParser.TrueKeyword || _la === turtleParser.FalseKeyword) {
                    {
                        {
                            this.state = 137;
                            this.object();
                        }
                    }
                    this.state = 142;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 143;
                this.match(turtleParser.RParen);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    turtleParser.prototype.numericLiteral = function () {
        var _localctx = new NumericLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, turtleParser.RULE_numericLiteral);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 145;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << turtleParser.Integer) | (1 << turtleParser.Decimal) | (1 << turtleParser.Double))) !== 0))) {
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
    turtleParser.prototype.rDFLiteral = function () {
        var _localctx = new RDFLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, turtleParser.RULE_rDFLiteral);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 147;
                this.string();
                this.state = 151;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case turtleParser.LangTag:
                        {
                            this.state = 148;
                            this.match(turtleParser.LangTag);
                        }
                        break;
                    case turtleParser.T__0:
                        {
                            {
                                this.state = 149;
                                this.match(turtleParser.T__0);
                                this.state = 150;
                                this.iri();
                            }
                        }
                        break;
                    case turtleParser.PNameLn:
                    case turtleParser.Dot:
                    case turtleParser.Coma:
                    case turtleParser.LParen:
                    case turtleParser.RParen:
                    case turtleParser.LEnd:
                    case turtleParser.REnd:
                    case turtleParser.IriRef:
                    case turtleParser.PNameNs:
                    case turtleParser.BlankNodeLabel:
                    case turtleParser.Integer:
                    case turtleParser.Decimal:
                    case turtleParser.Double:
                    case turtleParser.StringLiteralQuote:
                    case turtleParser.StringLiteralSingleQuote:
                    case turtleParser.StringLiteralLongSingleQuote:
                    case turtleParser.StringLiteralLongQuote:
                    case turtleParser.ANON:
                    case turtleParser.Semi:
                    case turtleParser.TrueKeyword:
                    case turtleParser.FalseKeyword:
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
    turtleParser.prototype.bool = function () {
        var _localctx = new BoolContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, turtleParser.RULE_bool);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 153;
                _la = this._input.LA(1);
                if (!(_la === turtleParser.TrueKeyword || _la === turtleParser.FalseKeyword)) {
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
    turtleParser.prototype.string = function () {
        var _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, turtleParser.RULE_string);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 155;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << turtleParser.StringLiteralQuote) | (1 << turtleParser.StringLiteralSingleQuote) | (1 << turtleParser.StringLiteralLongSingleQuote) | (1 << turtleParser.StringLiteralLongQuote))) !== 0))) {
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
    turtleParser.prototype.iri = function () {
        var _localctx = new IriContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, turtleParser.RULE_iri);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 157;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << turtleParser.PNameLn) | (1 << turtleParser.IriRef) | (1 << turtleParser.PNameNs))) !== 0))) {
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
    turtleParser.prototype.blankNode = function () {
        var _localctx = new BlankNodeContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, turtleParser.RULE_blankNode);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 159;
                _la = this._input.LA(1);
                if (!(_la === turtleParser.BlankNodeLabel || _la === turtleParser.ANON)) {
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
    Object.defineProperty(turtleParser, "_ATN", {
        get: function () {
            if (!turtleParser.__ATN) {
                turtleParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(turtleParser._serializedATN));
            }
            return turtleParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    turtleParser.T__0 = 1;
    turtleParser.PNameLn = 2;
    turtleParser.LetterA = 3;
    turtleParser.Dot = 4;
    turtleParser.Coma = 5;
    turtleParser.LParen = 6;
    turtleParser.RParen = 7;
    turtleParser.LEnd = 8;
    turtleParser.REnd = 9;
    turtleParser.IriRef = 10;
    turtleParser.PNameNs = 11;
    turtleParser.BlankNodeLabel = 12;
    turtleParser.Integer = 13;
    turtleParser.Decimal = 14;
    turtleParser.Double = 15;
    turtleParser.Exponent = 16;
    turtleParser.StringLiteralQuote = 17;
    turtleParser.StringLiteralSingleQuote = 18;
    turtleParser.StringLiteralLongSingleQuote = 19;
    turtleParser.StringLiteralLongQuote = 20;
    turtleParser.Uchar = 21;
    turtleParser.ECHAR = 22;
    turtleParser.WS = 23;
    turtleParser.ANON = 24;
    turtleParser.PN_CHARS_BASE = 25;
    turtleParser.PNCharsU = 26;
    turtleParser.PN_CHARS = 27;
    turtleParser.PN_Prefix = 28;
    turtleParser.PNLocal = 29;
    turtleParser.PLX = 30;
    turtleParser.PERCENT = 31;
    turtleParser.HEX = 32;
    turtleParser.PN_LOCAL_ESC = 33;
    turtleParser.Semi = 34;
    turtleParser.TrueKeyword = 35;
    turtleParser.FalseKeyword = 36;
    turtleParser.PrefixKeyword = 37;
    turtleParser.BaseKeyword = 38;
    turtleParser.AtPrefixKeyword = 39;
    turtleParser.AtBaseKeyword = 40;
    turtleParser.LangTag = 41;
    turtleParser.RULE_turtleDoc = 0;
    turtleParser.RULE_statement = 1;
    turtleParser.RULE_directive = 2;
    turtleParser.RULE_prefixID = 3;
    turtleParser.RULE_base = 4;
    turtleParser.RULE_sparqlBase = 5;
    turtleParser.RULE_sparqlPrefix = 6;
    turtleParser.RULE_triples = 7;
    turtleParser.RULE_predicateObjectList = 8;
    turtleParser.RULE_objectList = 9;
    turtleParser.RULE_predicateObject = 10;
    turtleParser.RULE_subject = 11;
    turtleParser.RULE_predicate = 12;
    turtleParser.RULE_object = 13;
    turtleParser.RULE_literal = 14;
    turtleParser.RULE_blankNodePropertyList = 15;
    turtleParser.RULE_collection = 16;
    turtleParser.RULE_numericLiteral = 17;
    turtleParser.RULE_rDFLiteral = 18;
    turtleParser.RULE_bool = 19;
    turtleParser.RULE_string = 20;
    turtleParser.RULE_iri = 21;
    turtleParser.RULE_blankNode = 22;
    // tslint:disable:no-trailing-whitespace
    turtleParser.ruleNames = [
        "turtleDoc", "statement", "directive", "prefixID", "base", "sparqlBase",
        "sparqlPrefix", "triples", "predicateObjectList", "objectList", "predicateObject",
        "subject", "predicate", "object", "literal", "blankNodePropertyList",
        "collection", "numericLiteral", "rDFLiteral", "bool", "string", "iri",
        "blankNode",
    ];
    turtleParser._LITERAL_NAMES = [
        undefined, "'^^'", undefined, "'a'", "'.'", "','", "'('", "')'", "'['",
        "']'", undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, "';'",
    ];
    turtleParser._SYMBOLIC_NAMES = [
        undefined, undefined, "PNameLn", "LetterA", "Dot", "Coma", "LParen", "RParen",
        "LEnd", "REnd", "IriRef", "PNameNs", "BlankNodeLabel", "Integer", "Decimal",
        "Double", "Exponent", "StringLiteralQuote", "StringLiteralSingleQuote",
        "StringLiteralLongSingleQuote", "StringLiteralLongQuote", "Uchar", "ECHAR",
        "WS", "ANON", "PN_CHARS_BASE", "PNCharsU", "PN_CHARS", "PN_Prefix", "PNLocal",
        "PLX", "PERCENT", "HEX", "PN_LOCAL_ESC", "Semi", "TrueKeyword", "FalseKeyword",
        "PrefixKeyword", "BaseKeyword", "AtPrefixKeyword", "AtBaseKeyword", "LangTag",
    ];
    turtleParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(turtleParser._LITERAL_NAMES, turtleParser._SYMBOLIC_NAMES, []);
    turtleParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03+\xA4\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x03\x02\x07\x022\n\x02\f\x02\x0E\x025\v\x02\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x05\x03;\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04" +
        "A\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06" +
        "\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03" +
        "\t\x03\t\x03\t\x05\tX\n\t\x05\tZ\n\t\x03\n\x03\n\x03\n\x05\n_\n\n\x07" +
        "\na\n\n\f\n\x0E\nd\v\n\x03\v\x03\v\x03\v\x07\vi\n\v\f\v\x0E\vl\v\v\x03" +
        "\f\x03\f\x05\fp\n\f\x03\f\x03\f\x03\r\x03\r\x03\r\x05\rw\n\r\x03\x0E\x03" +
        "\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\x80\n\x0F\x03\x10" +
        "\x03\x10\x03\x10\x05\x10\x85\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
        "\x12\x03\x12\x07\x12\x8D\n\x12\f\x12\x0E\x12\x90\v\x12\x03\x12\x03\x12" +
        "\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\x9A\n\x14\x03" +
        "\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x02" +
        "\x02\x02\x19\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
        "\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
        "&\x02(\x02*\x02,\x02.\x02\x02\x07\x03\x02\x0F\x11\x03\x02%&\x03\x02\x13" +
        "\x16\x04\x02\x04\x04\f\r\x04\x02\x0E\x0E\x1A\x1A\x02\xA2\x023\x03\x02" +
        "\x02\x02\x04:\x03\x02\x02\x02\x06@\x03\x02\x02\x02\bB\x03\x02\x02\x02" +
        "\nG\x03\x02\x02\x02\fK\x03\x02\x02\x02\x0EN\x03\x02\x02\x02\x10Y\x03\x02" +
        "\x02\x02\x12[\x03\x02\x02\x02\x14e\x03\x02\x02\x02\x16o\x03\x02\x02\x02" +
        "\x18v\x03\x02\x02\x02\x1Ax\x03\x02\x02\x02\x1C\x7F\x03\x02\x02\x02\x1E" +
        "\x84\x03\x02\x02\x02 \x86\x03\x02\x02\x02\"\x8A\x03\x02\x02\x02$\x93\x03" +
        "\x02\x02\x02&\x95\x03\x02\x02\x02(\x9B\x03\x02\x02\x02*\x9D\x03\x02\x02" +
        "\x02,\x9F\x03\x02\x02\x02.\xA1\x03\x02\x02\x0202\x05\x04\x03\x0210\x03" +
        "\x02\x02\x0225\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02\x024\x03" +
        "\x03\x02\x02\x0253\x03\x02\x02\x026;\x05\x06\x04\x0278\x05\x10\t\x028" +
        "9\x07\x06\x02\x029;\x03\x02\x02\x02:6\x03\x02\x02\x02:7\x03\x02\x02\x02" +
        ";\x05\x03\x02\x02\x02<A\x05\b\x05\x02=A\x05\n\x06\x02>A\x05\x0E\b\x02" +
        "?A\x05\f\x07\x02@<\x03\x02\x02\x02@=\x03\x02\x02\x02@>\x03\x02\x02\x02" +
        "@?\x03\x02\x02\x02A\x07\x03\x02\x02\x02BC\x07)\x02\x02CD\x07\r\x02\x02" +
        "DE\x07\f\x02\x02EF\x07\x06\x02\x02F\t\x03\x02\x02\x02GH\x07*\x02\x02H" +
        "I\x07\f\x02\x02IJ\x07\x06\x02\x02J\v\x03\x02\x02\x02KL\x07(\x02\x02LM" +
        "\x07\f\x02\x02M\r\x03\x02\x02\x02NO\x07\'\x02\x02OP\x07\r\x02\x02PQ\x07" +
        "\f\x02\x02Q\x0F\x03\x02\x02\x02RS\x05\x18\r\x02ST\x05\x12\n\x02TZ\x03" +
        "\x02\x02\x02UW\x05 \x11\x02VX\x05\x12\n\x02WV\x03\x02\x02\x02WX\x03\x02" +
        "\x02\x02XZ\x03\x02\x02\x02YR\x03\x02\x02\x02YU\x03\x02\x02\x02Z\x11\x03" +
        "\x02\x02\x02[b\x05\x16\f\x02\\^\x07$\x02\x02]_\x05\x16\f\x02^]\x03\x02" +
        "\x02\x02^_\x03\x02\x02\x02_a\x03\x02\x02\x02`\\\x03\x02\x02\x02ad\x03" +
        "\x02\x02\x02b`\x03\x02\x02\x02bc\x03\x02\x02\x02c\x13\x03\x02\x02\x02" +
        "db\x03\x02\x02\x02ej\x05\x1C\x0F\x02fg\x07\x07\x02\x02gi\x05\x1C\x0F\x02" +
        "hf\x03\x02\x02\x02il\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02" +
        "k\x15\x03\x02\x02\x02lj\x03\x02\x02\x02mp\x05\x1A\x0E\x02np\x07\x05\x02" +
        "\x02om\x03\x02\x02\x02on\x03\x02\x02\x02pq\x03\x02\x02\x02qr\x05\x14\v" +
        "\x02r\x17\x03\x02\x02\x02sw\x05,\x17\x02tw\x05.\x18\x02uw\x05\"\x12\x02" +
        "vs\x03\x02\x02\x02vt\x03\x02\x02\x02vu\x03\x02\x02\x02w\x19\x03\x02\x02" +
        "\x02xy\x05,\x17\x02y\x1B\x03\x02\x02\x02z\x80\x05,\x17\x02{\x80\x05.\x18" +
        "\x02|\x80\x05\"\x12\x02}\x80\x05 \x11\x02~\x80\x05\x1E\x10\x02\x7Fz\x03" +
        "\x02\x02\x02\x7F{\x03\x02\x02\x02\x7F|\x03\x02\x02\x02\x7F}\x03\x02\x02" +
        "\x02\x7F~\x03\x02\x02\x02\x80\x1D\x03\x02\x02\x02\x81\x85\x05&\x14\x02" +
        "\x82\x85\x05$\x13\x02\x83\x85\x05(\x15\x02\x84\x81\x03\x02\x02\x02\x84" +
        "\x82\x03\x02\x02\x02\x84\x83\x03\x02\x02\x02\x85\x1F\x03\x02\x02\x02\x86" +
        "\x87\x07\n\x02\x02\x87\x88\x05\x12\n\x02\x88\x89\x07\v\x02\x02\x89!\x03" +
        "\x02\x02\x02\x8A\x8E\x07\b\x02\x02\x8B\x8D\x05\x1C\x0F\x02\x8C\x8B\x03" +
        "\x02\x02\x02\x8D\x90\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8F\x03" +
        "\x02\x02\x02\x8F\x91\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x91\x92\x07" +
        "\t\x02\x02\x92#\x03\x02\x02\x02\x93\x94\t\x02\x02\x02\x94%\x03\x02\x02" +
        "\x02\x95\x99\x05*\x16\x02\x96\x9A\x07+\x02\x02\x97\x98\x07\x03\x02\x02" +
        "\x98\x9A\x05,\x17\x02\x99\x96\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02" +
        "\x99\x9A\x03\x02\x02\x02\x9A\'\x03\x02\x02\x02\x9B\x9C\t\x03\x02\x02\x9C" +
        ")\x03\x02\x02\x02\x9D\x9E\t\x04\x02\x02\x9E+\x03\x02\x02\x02\x9F\xA0\t" +
        "\x05\x02\x02\xA0-\x03\x02\x02\x02\xA1\xA2\t\x06\x02\x02\xA2/\x03\x02\x02" +
        "\x02\x103:@WY^bjov\x7F\x84\x8E\x99";
    return turtleParser;
}(Parser_1.Parser));
exports.turtleParser = turtleParser;
var TurtleDocContext = /** @class */ (function (_super) {
    __extends(TurtleDocContext, _super);
    function TurtleDocContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TurtleDocContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(TurtleDocContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return turtleParser.RULE_turtleDoc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TurtleDocContext.prototype.enterRule = function (listener) {
        if (listener.enterTurtleDoc) {
            listener.enterTurtleDoc(this);
        }
    };
    // @Override
    TurtleDocContext.prototype.exitRule = function (listener) {
        if (listener.exitTurtleDoc) {
            listener.exitTurtleDoc(this);
        }
    };
    // @Override
    TurtleDocContext.prototype.accept = function (visitor) {
        if (visitor.visitTurtleDoc) {
            return visitor.visitTurtleDoc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TurtleDocContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TurtleDocContext = TurtleDocContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.directive = function () {
        return this.tryGetRuleContext(0, DirectiveContext);
    };
    StatementContext.prototype.triples = function () {
        return this.tryGetRuleContext(0, TriplesContext);
    };
    StatementContext.prototype.Dot = function () { return this.tryGetToken(turtleParser.Dot, 0); };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return turtleParser.RULE_statement; },
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
var DirectiveContext = /** @class */ (function (_super) {
    __extends(DirectiveContext, _super);
    function DirectiveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DirectiveContext.prototype.prefixID = function () {
        return this.tryGetRuleContext(0, PrefixIDContext);
    };
    DirectiveContext.prototype.base = function () {
        return this.tryGetRuleContext(0, BaseContext);
    };
    DirectiveContext.prototype.sparqlPrefix = function () {
        return this.tryGetRuleContext(0, SparqlPrefixContext);
    };
    DirectiveContext.prototype.sparqlBase = function () {
        return this.tryGetRuleContext(0, SparqlBaseContext);
    };
    Object.defineProperty(DirectiveContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return turtleParser.RULE_directive; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DirectiveContext.prototype.enterRule = function (listener) {
        if (listener.enterDirective) {
            listener.enterDirective(this);
        }
    };
    // @Override
    DirectiveContext.prototype.exitRule = function (listener) {
        if (listener.exitDirective) {
            listener.exitDirective(this);
        }
    };
    // @Override
    DirectiveContext.prototype.accept = function (visitor) {
        if (visitor.visitDirective) {
            return visitor.visitDirective(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DirectiveContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DirectiveContext = DirectiveContext;
var PrefixIDContext = /** @class */ (function (_super) {
    __extends(PrefixIDContext, _super);
    function PrefixIDContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrefixIDContext.prototype.AtPrefixKeyword = function () { return this.getToken(turtleParser.AtPrefixKeyword, 0); };
    PrefixIDContext.prototype.PNameNs = function () { return this.getToken(turtleParser.PNameNs, 0); };
    PrefixIDContext.prototype.IriRef = function () { return this.getToken(turtleParser.IriRef, 0); };
    PrefixIDContext.prototype.Dot = function () { return this.getToken(turtleParser.Dot, 0); };
    Object.defineProperty(PrefixIDContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return turtleParser.RULE_prefixID; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrefixIDContext.prototype.enterRule = function (listener) {
        if (listener.enterPrefixID) {
            listener.enterPrefixID(this);
        }
    };
    // @Override
    PrefixIDContext.prototype.exitRule = function (listener) {
        if (listener.exitPrefixID) {
            listener.exitPrefixID(this);
        }
    };
    // @Override
    PrefixIDContext.prototype.accept = function (visitor) {
        if (visitor.visitPrefixID) {
            return visitor.visitPrefixID(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrefixIDContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrefixIDContext = PrefixIDContext;
var BaseContext = /** @class */ (function (_super) {
    __extends(BaseContext, _super);
    function BaseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BaseContext.prototype.AtBaseKeyword = function () { return this.getToken(turtleParser.AtBaseKeyword, 0); };
    BaseContext.prototype.IriRef = function () { return this.getToken(turtleParser.IriRef, 0); };
    BaseContext.prototype.Dot = function () { return this.getToken(turtleParser.Dot, 0); };
    Object.defineProperty(BaseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return turtleParser.RULE_base; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BaseContext.prototype.enterRule = function (listener) {
        if (listener.enterBase) {
            listener.enterBase(this);
        }
    };
    // @Override
    BaseContext.prototype.exitRule = function (listener) {
        if (listener.exitBase) {
            listener.exitBase(this);
        }
    };
    // @Override
    BaseContext.prototype.accept = function (visitor) {
        if (visitor.visitBase) {
            return visitor.visitBase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BaseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BaseContext = BaseContext;
var SparqlBaseContext = /** @class */ (function (_super) {
    __extends(SparqlBaseContext, _super);
    function SparqlBaseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SparqlBaseContext.prototype.BaseKeyword = function () { return this.getToken(turtleParser.BaseKeyword, 0); };
    SparqlBaseContext.prototype.IriRef = function () { return this.getToken(turtleParser.IriRef, 0); };
    Object.defineProperty(SparqlBaseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return turtleParser.RULE_sparqlBase; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SparqlBaseContext.prototype.enterRule = function (listener) {
        if (listener.enterSparqlBase) {
            listener.enterSparqlBase(this);
        }
    };
    // @Override
    SparqlBaseContext.prototype.exitRule = function (listener) {
        if (listener.exitSparqlBase) {
            listener.exitSparqlBase(this);
        }
    };
    // @Override
    SparqlBaseContext.prototype.accept = function (visitor) {
        if (visitor.visitSparqlBase) {
            return visitor.visitSparqlBase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SparqlBaseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SparqlBaseContext = SparqlBaseContext;
var SparqlPrefixContext = /** @class */ (function (_super) {
    __extends(SparqlPrefixContext, _super);
    function SparqlPrefixContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SparqlPrefixContext.prototype.PrefixKeyword = function () { return this.getToken(turtleParser.PrefixKeyword, 0); };
    SparqlPrefixContext.prototype.PNameNs = function () { return this.getToken(turtleParser.PNameNs, 0); };
    SparqlPrefixContext.prototype.IriRef = function () { return this.getToken(turtleParser.IriRef, 0); };
    Object.defineProperty(SparqlPrefixContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return turtleParser.RULE_sparqlPrefix; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SparqlPrefixContext.prototype.enterRule = function (listener) {
        if (listener.enterSparqlPrefix) {
            listener.enterSparqlPrefix(this);
        }
    };
    // @Override
    SparqlPrefixContext.prototype.exitRule = function (listener) {
        if (listener.exitSparqlPrefix) {
            listener.exitSparqlPrefix(this);
        }
    };
    // @Override
    SparqlPrefixContext.prototype.accept = function (visitor) {
        if (visitor.visitSparqlPrefix) {
            return visitor.visitSparqlPrefix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SparqlPrefixContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SparqlPrefixContext = SparqlPrefixContext;
var TriplesContext = /** @class */ (function (_super) {
    __extends(TriplesContext, _super);
    function TriplesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TriplesContext.prototype.subject = function () {
        return this.tryGetRuleContext(0, SubjectContext);
    };
    TriplesContext.prototype.predicateObjectList = function () {
        return this.tryGetRuleContext(0, PredicateObjectListContext);
    };
    TriplesContext.prototype.blankNodePropertyList = function () {
        return this.tryGetRuleContext(0, BlankNodePropertyListContext);
    };
    Object.defineProperty(TriplesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return turtleParser.RULE_triples; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TriplesContext.prototype.enterRule = function (listener) {
        if (listener.enterTriples) {
            listener.enterTriples(this);
        }
    };
    // @Override
    TriplesContext.prototype.exitRule = function (listener) {
        if (listener.exitTriples) {
            listener.exitTriples(this);
        }
    };
    // @Override
    TriplesContext.prototype.accept = function (visitor) {
        if (visitor.visitTriples) {
            return visitor.visitTriples(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TriplesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TriplesContext = TriplesContext;
var PredicateObjectListContext = /** @class */ (function (_super) {
    __extends(PredicateObjectListContext, _super);
    function PredicateObjectListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PredicateObjectListContext.prototype.predicateObject = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PredicateObjectContext);
        }
        else {
            return this.getRuleContext(i, PredicateObjectContext);
        }
    };
    PredicateObjectListContext.prototype.Semi = function (i) {
        if (i === undefined) {
            return this.getTokens(turtleParser.Semi);
        }
        else {
            return this.getToken(turtleParser.Semi, i);
        }
    };
    Object.defineProperty(PredicateObjectListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return turtleParser.RULE_predicateObjectList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PredicateObjectListContext.prototype.enterRule = function (listener) {
        if (listener.enterPredicateObjectList) {
            listener.enterPredicateObjectList(this);
        }
    };
    // @Override
    PredicateObjectListContext.prototype.exitRule = function (listener) {
        if (listener.exitPredicateObjectList) {
            listener.exitPredicateObjectList(this);
        }
    };
    // @Override
    PredicateObjectListContext.prototype.accept = function (visitor) {
        if (visitor.visitPredicateObjectList) {
            return visitor.visitPredicateObjectList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PredicateObjectListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PredicateObjectListContext = PredicateObjectListContext;
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
    ObjectListContext.prototype.Coma = function (i) {
        if (i === undefined) {
            return this.getTokens(turtleParser.Coma);
        }
        else {
            return this.getToken(turtleParser.Coma, i);
        }
    };
    Object.defineProperty(ObjectListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return turtleParser.RULE_objectList; },
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
var PredicateObjectContext = /** @class */ (function (_super) {
    __extends(PredicateObjectContext, _super);
    function PredicateObjectContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PredicateObjectContext.prototype.objectList = function () {
        return this.getRuleContext(0, ObjectListContext);
    };
    PredicateObjectContext.prototype.predicate = function () {
        return this.tryGetRuleContext(0, PredicateContext);
    };
    PredicateObjectContext.prototype.LetterA = function () { return this.tryGetToken(turtleParser.LetterA, 0); };
    Object.defineProperty(PredicateObjectContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return turtleParser.RULE_predicateObject; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PredicateObjectContext.prototype.enterRule = function (listener) {
        if (listener.enterPredicateObject) {
            listener.enterPredicateObject(this);
        }
    };
    // @Override
    PredicateObjectContext.prototype.exitRule = function (listener) {
        if (listener.exitPredicateObject) {
            listener.exitPredicateObject(this);
        }
    };
    // @Override
    PredicateObjectContext.prototype.accept = function (visitor) {
        if (visitor.visitPredicateObject) {
            return visitor.visitPredicateObject(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PredicateObjectContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PredicateObjectContext = PredicateObjectContext;
var SubjectContext = /** @class */ (function (_super) {
    __extends(SubjectContext, _super);
    function SubjectContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubjectContext.prototype.iri = function () {
        return this.tryGetRuleContext(0, IriContext);
    };
    SubjectContext.prototype.blankNode = function () {
        return this.tryGetRuleContext(0, BlankNodeContext);
    };
    SubjectContext.prototype.collection = function () {
        return this.tryGetRuleContext(0, CollectionContext);
    };
    Object.defineProperty(SubjectContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return turtleParser.RULE_subject; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubjectContext.prototype.enterRule = function (listener) {
        if (listener.enterSubject) {
            listener.enterSubject(this);
        }
    };
    // @Override
    SubjectContext.prototype.exitRule = function (listener) {
        if (listener.exitSubject) {
            listener.exitSubject(this);
        }
    };
    // @Override
    SubjectContext.prototype.accept = function (visitor) {
        if (visitor.visitSubject) {
            return visitor.visitSubject(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubjectContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubjectContext = SubjectContext;
var PredicateContext = /** @class */ (function (_super) {
    __extends(PredicateContext, _super);
    function PredicateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PredicateContext.prototype.iri = function () {
        return this.getRuleContext(0, IriContext);
    };
    Object.defineProperty(PredicateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return turtleParser.RULE_predicate; },
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
var ObjectContext = /** @class */ (function (_super) {
    __extends(ObjectContext, _super);
    function ObjectContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectContext.prototype.iri = function () {
        return this.tryGetRuleContext(0, IriContext);
    };
    ObjectContext.prototype.blankNode = function () {
        return this.tryGetRuleContext(0, BlankNodeContext);
    };
    ObjectContext.prototype.collection = function () {
        return this.tryGetRuleContext(0, CollectionContext);
    };
    ObjectContext.prototype.blankNodePropertyList = function () {
        return this.tryGetRuleContext(0, BlankNodePropertyListContext);
    };
    ObjectContext.prototype.literal = function () {
        return this.tryGetRuleContext(0, LiteralContext);
    };
    Object.defineProperty(ObjectContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return turtleParser.RULE_object; },
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
var LiteralContext = /** @class */ (function (_super) {
    __extends(LiteralContext, _super);
    function LiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LiteralContext.prototype.rDFLiteral = function () {
        return this.tryGetRuleContext(0, RDFLiteralContext);
    };
    LiteralContext.prototype.numericLiteral = function () {
        return this.tryGetRuleContext(0, NumericLiteralContext);
    };
    LiteralContext.prototype.bool = function () {
        return this.tryGetRuleContext(0, BoolContext);
    };
    Object.defineProperty(LiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return turtleParser.RULE_literal; },
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
var BlankNodePropertyListContext = /** @class */ (function (_super) {
    __extends(BlankNodePropertyListContext, _super);
    function BlankNodePropertyListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlankNodePropertyListContext.prototype.LEnd = function () { return this.getToken(turtleParser.LEnd, 0); };
    BlankNodePropertyListContext.prototype.predicateObjectList = function () {
        return this.getRuleContext(0, PredicateObjectListContext);
    };
    BlankNodePropertyListContext.prototype.REnd = function () { return this.getToken(turtleParser.REnd, 0); };
    Object.defineProperty(BlankNodePropertyListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return turtleParser.RULE_blankNodePropertyList; },
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
    CollectionContext.prototype.LParen = function () { return this.getToken(turtleParser.LParen, 0); };
    CollectionContext.prototype.RParen = function () { return this.getToken(turtleParser.RParen, 0); };
    CollectionContext.prototype.object = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ObjectContext);
        }
        else {
            return this.getRuleContext(i, ObjectContext);
        }
    };
    Object.defineProperty(CollectionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return turtleParser.RULE_collection; },
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
var NumericLiteralContext = /** @class */ (function (_super) {
    __extends(NumericLiteralContext, _super);
    function NumericLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumericLiteralContext.prototype.Integer = function () { return this.tryGetToken(turtleParser.Integer, 0); };
    NumericLiteralContext.prototype.Decimal = function () { return this.tryGetToken(turtleParser.Decimal, 0); };
    NumericLiteralContext.prototype.Double = function () { return this.tryGetToken(turtleParser.Double, 0); };
    Object.defineProperty(NumericLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return turtleParser.RULE_numericLiteral; },
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
var RDFLiteralContext = /** @class */ (function (_super) {
    __extends(RDFLiteralContext, _super);
    function RDFLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RDFLiteralContext.prototype.string = function () {
        return this.getRuleContext(0, StringContext);
    };
    RDFLiteralContext.prototype.LangTag = function () { return this.tryGetToken(turtleParser.LangTag, 0); };
    RDFLiteralContext.prototype.iri = function () {
        return this.tryGetRuleContext(0, IriContext);
    };
    Object.defineProperty(RDFLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return turtleParser.RULE_rDFLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RDFLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterRDFLiteral) {
            listener.enterRDFLiteral(this);
        }
    };
    // @Override
    RDFLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitRDFLiteral) {
            listener.exitRDFLiteral(this);
        }
    };
    // @Override
    RDFLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitRDFLiteral) {
            return visitor.visitRDFLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RDFLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RDFLiteralContext = RDFLiteralContext;
var BoolContext = /** @class */ (function (_super) {
    __extends(BoolContext, _super);
    function BoolContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BoolContext.prototype.TrueKeyword = function () { return this.tryGetToken(turtleParser.TrueKeyword, 0); };
    BoolContext.prototype.FalseKeyword = function () { return this.tryGetToken(turtleParser.FalseKeyword, 0); };
    Object.defineProperty(BoolContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return turtleParser.RULE_bool; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BoolContext.prototype.enterRule = function (listener) {
        if (listener.enterBool) {
            listener.enterBool(this);
        }
    };
    // @Override
    BoolContext.prototype.exitRule = function (listener) {
        if (listener.exitBool) {
            listener.exitBool(this);
        }
    };
    // @Override
    BoolContext.prototype.accept = function (visitor) {
        if (visitor.visitBool) {
            return visitor.visitBool(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BoolContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BoolContext = BoolContext;
var StringContext = /** @class */ (function (_super) {
    __extends(StringContext, _super);
    function StringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringContext.prototype.StringLiteralQuote = function () { return this.tryGetToken(turtleParser.StringLiteralQuote, 0); };
    StringContext.prototype.StringLiteralSingleQuote = function () { return this.tryGetToken(turtleParser.StringLiteralSingleQuote, 0); };
    StringContext.prototype.StringLiteralLongSingleQuote = function () { return this.tryGetToken(turtleParser.StringLiteralLongSingleQuote, 0); };
    StringContext.prototype.StringLiteralLongQuote = function () { return this.tryGetToken(turtleParser.StringLiteralLongQuote, 0); };
    Object.defineProperty(StringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return turtleParser.RULE_string; },
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
var IriContext = /** @class */ (function (_super) {
    __extends(IriContext, _super);
    function IriContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IriContext.prototype.IriRef = function () { return this.tryGetToken(turtleParser.IriRef, 0); };
    IriContext.prototype.PNameLn = function () { return this.tryGetToken(turtleParser.PNameLn, 0); };
    IriContext.prototype.PNameNs = function () { return this.tryGetToken(turtleParser.PNameNs, 0); };
    Object.defineProperty(IriContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return turtleParser.RULE_iri; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IriContext.prototype.enterRule = function (listener) {
        if (listener.enterIri) {
            listener.enterIri(this);
        }
    };
    // @Override
    IriContext.prototype.exitRule = function (listener) {
        if (listener.exitIri) {
            listener.exitIri(this);
        }
    };
    // @Override
    IriContext.prototype.accept = function (visitor) {
        if (visitor.visitIri) {
            return visitor.visitIri(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IriContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IriContext = IriContext;
var BlankNodeContext = /** @class */ (function (_super) {
    __extends(BlankNodeContext, _super);
    function BlankNodeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlankNodeContext.prototype.BlankNodeLabel = function () { return this.tryGetToken(turtleParser.BlankNodeLabel, 0); };
    BlankNodeContext.prototype.ANON = function () { return this.tryGetToken(turtleParser.ANON, 0); };
    Object.defineProperty(BlankNodeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return turtleParser.RULE_blankNode; },
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
