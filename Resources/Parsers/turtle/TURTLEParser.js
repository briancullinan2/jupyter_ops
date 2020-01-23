"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/turtle/TURTLE.g4 by ANTLR 4.7.3-SNAPSHOT
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
var TURTLEParser = /** @class */ (function (_super) {
    __extends(TURTLEParser, _super);
    function TURTLEParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(TURTLEParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(TURTLEParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return TURTLEParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TURTLEParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "TURTLE.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TURTLEParser.prototype, "ruleNames", {
        // @Override
        get: function () { return TURTLEParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TURTLEParser.prototype, "serializedATN", {
        // @Override
        get: function () { return TURTLEParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    TURTLEParser.prototype.turtleDoc = function () {
        var _localctx = new TurtleDocContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, TURTLEParser.RULE_turtleDoc);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 41;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TURTLEParser.T__1) | (1 << TURTLEParser.T__2) | (1 << TURTLEParser.T__3) | (1 << TURTLEParser.T__4) | (1 << TURTLEParser.T__8) | (1 << TURTLEParser.T__10) | (1 << TURTLEParser.BlankNode) | (1 << TURTLEParser.IRIREF) | (1 << TURTLEParser.PrefixedName))) !== 0)) {
                    {
                        {
                            this.state = 38;
                            this.statement();
                        }
                    }
                    this.state = 43;
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
    TURTLEParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, TURTLEParser.RULE_statement);
        try {
            this.state = 48;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TURTLEParser.T__1:
                case TURTLEParser.T__2:
                case TURTLEParser.T__3:
                case TURTLEParser.T__4:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 44;
                        this.directive();
                    }
                    break;
                case TURTLEParser.T__8:
                case TURTLEParser.T__10:
                case TURTLEParser.BlankNode:
                case TURTLEParser.IRIREF:
                case TURTLEParser.PrefixedName:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 45;
                        this.triples();
                        this.state = 46;
                        this.match(TURTLEParser.T__0);
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
    TURTLEParser.prototype.directive = function () {
        var _localctx = new DirectiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, TURTLEParser.RULE_directive);
        try {
            this.state = 54;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TURTLEParser.T__1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 50;
                        this.prefixID();
                    }
                    break;
                case TURTLEParser.T__2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 51;
                        this.base();
                    }
                    break;
                case TURTLEParser.T__4:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 52;
                        this.sparqlPrefix();
                    }
                    break;
                case TURTLEParser.T__3:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 53;
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
    TURTLEParser.prototype.prefixID = function () {
        var _localctx = new PrefixIDContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, TURTLEParser.RULE_prefixID);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 56;
                this.match(TURTLEParser.T__1);
                this.state = 57;
                this.match(TURTLEParser.PNAME_NS);
                this.state = 58;
                this.match(TURTLEParser.IRIREF);
                this.state = 59;
                this.match(TURTLEParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TURTLEParser.prototype.base = function () {
        var _localctx = new BaseContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, TURTLEParser.RULE_base);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 61;
                this.match(TURTLEParser.T__2);
                this.state = 62;
                this.match(TURTLEParser.IRIREF);
                this.state = 63;
                this.match(TURTLEParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TURTLEParser.prototype.sparqlBase = function () {
        var _localctx = new SparqlBaseContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, TURTLEParser.RULE_sparqlBase);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 65;
                this.match(TURTLEParser.T__3);
                this.state = 66;
                this.match(TURTLEParser.IRIREF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TURTLEParser.prototype.sparqlPrefix = function () {
        var _localctx = new SparqlPrefixContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, TURTLEParser.RULE_sparqlPrefix);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 68;
                this.match(TURTLEParser.T__4);
                this.state = 69;
                this.match(TURTLEParser.PNAME_NS);
                this.state = 70;
                this.match(TURTLEParser.IRIREF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TURTLEParser.prototype.triples = function () {
        var _localctx = new TriplesContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, TURTLEParser.RULE_triples);
        var _la;
        try {
            this.state = 79;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TURTLEParser.T__10:
                case TURTLEParser.BlankNode:
                case TURTLEParser.IRIREF:
                case TURTLEParser.PrefixedName:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 72;
                        this.subject();
                        this.state = 73;
                        this.predicateObjectList();
                    }
                    break;
                case TURTLEParser.T__8:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 75;
                        this.blankNodePropertyList();
                        this.state = 77;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TURTLEParser.T__7) | (1 << TURTLEParser.IRIREF) | (1 << TURTLEParser.PrefixedName))) !== 0)) {
                            {
                                this.state = 76;
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
    TURTLEParser.prototype.predicateObjectList = function () {
        var _localctx = new PredicateObjectListContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, TURTLEParser.RULE_predicateObjectList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 81;
                this.verb();
                this.state = 82;
                this.objectList();
                this.state = 91;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TURTLEParser.T__5) {
                    {
                        {
                            this.state = 83;
                            this.match(TURTLEParser.T__5);
                            this.state = 87;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TURTLEParser.T__7) | (1 << TURTLEParser.IRIREF) | (1 << TURTLEParser.PrefixedName))) !== 0)) {
                                {
                                    this.state = 84;
                                    this.verb();
                                    this.state = 85;
                                    this.objectList();
                                }
                            }
                        }
                    }
                    this.state = 93;
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
    TURTLEParser.prototype.objectList = function () {
        var _localctx = new ObjectListContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, TURTLEParser.RULE_objectList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 94;
                this.object();
                this.state = 99;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TURTLEParser.T__6) {
                    {
                        {
                            this.state = 95;
                            this.match(TURTLEParser.T__6);
                            this.state = 96;
                            this.object();
                        }
                    }
                    this.state = 101;
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
    TURTLEParser.prototype.verb = function () {
        var _localctx = new VerbContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, TURTLEParser.RULE_verb);
        try {
            this.state = 104;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TURTLEParser.IRIREF:
                case TURTLEParser.PrefixedName:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 102;
                        this.predicate();
                    }
                    break;
                case TURTLEParser.T__7:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 103;
                        this.match(TURTLEParser.T__7);
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
    TURTLEParser.prototype.subject = function () {
        var _localctx = new SubjectContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, TURTLEParser.RULE_subject);
        try {
            this.state = 109;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TURTLEParser.IRIREF:
                case TURTLEParser.PrefixedName:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 106;
                        this.iri();
                    }
                    break;
                case TURTLEParser.BlankNode:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 107;
                        this.match(TURTLEParser.BlankNode);
                    }
                    break;
                case TURTLEParser.T__10:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 108;
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
    TURTLEParser.prototype.predicate = function () {
        var _localctx = new PredicateContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, TURTLEParser.RULE_predicate);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 111;
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
    TURTLEParser.prototype.object = function () {
        var _localctx = new ObjectContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, TURTLEParser.RULE_object);
        try {
            this.state = 118;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TURTLEParser.IRIREF:
                case TURTLEParser.PrefixedName:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 113;
                        this.iri();
                    }
                    break;
                case TURTLEParser.BlankNode:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 114;
                        this.match(TURTLEParser.BlankNode);
                    }
                    break;
                case TURTLEParser.T__10:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 115;
                        this.collection();
                    }
                    break;
                case TURTLEParser.T__8:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 116;
                        this.blankNodePropertyList();
                    }
                    break;
                case TURTLEParser.NumericLiteral:
                case TURTLEParser.BooleanLiteral:
                case TURTLEParser.String:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 117;
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
    TURTLEParser.prototype.literal = function () {
        var _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, TURTLEParser.RULE_literal);
        try {
            this.state = 123;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TURTLEParser.String:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 120;
                        this.rdfLiteral();
                    }
                    break;
                case TURTLEParser.NumericLiteral:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 121;
                        this.match(TURTLEParser.NumericLiteral);
                    }
                    break;
                case TURTLEParser.BooleanLiteral:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 122;
                        this.match(TURTLEParser.BooleanLiteral);
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
    TURTLEParser.prototype.blankNodePropertyList = function () {
        var _localctx = new BlankNodePropertyListContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, TURTLEParser.RULE_blankNodePropertyList);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 125;
                this.match(TURTLEParser.T__8);
                this.state = 126;
                this.predicateObjectList();
                this.state = 127;
                this.match(TURTLEParser.T__9);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TURTLEParser.prototype.collection = function () {
        var _localctx = new CollectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, TURTLEParser.RULE_collection);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 129;
                this.match(TURTLEParser.T__10);
                this.state = 133;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TURTLEParser.T__8) | (1 << TURTLEParser.T__10) | (1 << TURTLEParser.NumericLiteral) | (1 << TURTLEParser.BooleanLiteral) | (1 << TURTLEParser.String) | (1 << TURTLEParser.BlankNode) | (1 << TURTLEParser.IRIREF) | (1 << TURTLEParser.PrefixedName))) !== 0)) {
                    {
                        {
                            this.state = 130;
                            this.object();
                        }
                    }
                    this.state = 135;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 136;
                this.match(TURTLEParser.T__11);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    TURTLEParser.prototype.rdfLiteral = function () {
        var _localctx = new RdfLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, TURTLEParser.RULE_rdfLiteral);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 138;
                this.match(TURTLEParser.String);
                this.state = 142;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case TURTLEParser.LANGTAG:
                        {
                            this.state = 139;
                            this.match(TURTLEParser.LANGTAG);
                        }
                        break;
                    case TURTLEParser.T__12:
                        {
                            this.state = 140;
                            this.match(TURTLEParser.T__12);
                            this.state = 141;
                            this.iri();
                        }
                        break;
                    case TURTLEParser.T__0:
                    case TURTLEParser.T__5:
                    case TURTLEParser.T__6:
                    case TURTLEParser.T__8:
                    case TURTLEParser.T__9:
                    case TURTLEParser.T__10:
                    case TURTLEParser.T__11:
                    case TURTLEParser.NumericLiteral:
                    case TURTLEParser.BooleanLiteral:
                    case TURTLEParser.String:
                    case TURTLEParser.BlankNode:
                    case TURTLEParser.IRIREF:
                    case TURTLEParser.PrefixedName:
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
    TURTLEParser.prototype.iri = function () {
        var _localctx = new IriContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, TURTLEParser.RULE_iri);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 144;
                _la = this._input.LA(1);
                if (!(_la === TURTLEParser.IRIREF || _la === TURTLEParser.PrefixedName)) {
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
    Object.defineProperty(TURTLEParser, "_ATN", {
        get: function () {
            if (!TURTLEParser.__ATN) {
                TURTLEParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(TURTLEParser._serializedATN));
            }
            return TURTLEParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    TURTLEParser.T__0 = 1;
    TURTLEParser.T__1 = 2;
    TURTLEParser.T__2 = 3;
    TURTLEParser.T__3 = 4;
    TURTLEParser.T__4 = 5;
    TURTLEParser.T__5 = 6;
    TURTLEParser.T__6 = 7;
    TURTLEParser.T__7 = 8;
    TURTLEParser.T__8 = 9;
    TURTLEParser.T__9 = 10;
    TURTLEParser.T__10 = 11;
    TURTLEParser.T__11 = 12;
    TURTLEParser.T__12 = 13;
    TURTLEParser.NumericLiteral = 14;
    TURTLEParser.BooleanLiteral = 15;
    TURTLEParser.String = 16;
    TURTLEParser.BlankNode = 17;
    TURTLEParser.WS = 18;
    TURTLEParser.PN_PREFIX = 19;
    TURTLEParser.IRIREF = 20;
    TURTLEParser.PNAME_NS = 21;
    TURTLEParser.PrefixedName = 22;
    TURTLEParser.PNAME_LN = 23;
    TURTLEParser.BLANK_NODE_LABEL = 24;
    TURTLEParser.LANGTAG = 25;
    TURTLEParser.INTEGER = 26;
    TURTLEParser.DECIMAL = 27;
    TURTLEParser.DOUBLE = 28;
    TURTLEParser.EXPONENT = 29;
    TURTLEParser.STRING_LITERAL_LONG_SINGLE_QUOTE = 30;
    TURTLEParser.STRING_LITERAL_LONG_QUOTE = 31;
    TURTLEParser.STRING_LITERAL_QUOTE = 32;
    TURTLEParser.STRING_LITERAL_SINGLE_QUOTE = 33;
    TURTLEParser.UCHAR = 34;
    TURTLEParser.ECHAR = 35;
    TURTLEParser.ANON_WS = 36;
    TURTLEParser.ANON = 37;
    TURTLEParser.PN_CHARS_BASE = 38;
    TURTLEParser.PN_CHARS_U = 39;
    TURTLEParser.PN_CHARS = 40;
    TURTLEParser.PN_LOCAL = 41;
    TURTLEParser.PLX = 42;
    TURTLEParser.PERCENT = 43;
    TURTLEParser.HEX = 44;
    TURTLEParser.PN_LOCAL_ESC = 45;
    TURTLEParser.RULE_turtleDoc = 0;
    TURTLEParser.RULE_statement = 1;
    TURTLEParser.RULE_directive = 2;
    TURTLEParser.RULE_prefixID = 3;
    TURTLEParser.RULE_base = 4;
    TURTLEParser.RULE_sparqlBase = 5;
    TURTLEParser.RULE_sparqlPrefix = 6;
    TURTLEParser.RULE_triples = 7;
    TURTLEParser.RULE_predicateObjectList = 8;
    TURTLEParser.RULE_objectList = 9;
    TURTLEParser.RULE_verb = 10;
    TURTLEParser.RULE_subject = 11;
    TURTLEParser.RULE_predicate = 12;
    TURTLEParser.RULE_object = 13;
    TURTLEParser.RULE_literal = 14;
    TURTLEParser.RULE_blankNodePropertyList = 15;
    TURTLEParser.RULE_collection = 16;
    TURTLEParser.RULE_rdfLiteral = 17;
    TURTLEParser.RULE_iri = 18;
    // tslint:disable:no-trailing-whitespace
    TURTLEParser.ruleNames = [
        "turtleDoc", "statement", "directive", "prefixID", "base", "sparqlBase",
        "sparqlPrefix", "triples", "predicateObjectList", "objectList", "verb",
        "subject", "predicate", "object", "literal", "blankNodePropertyList",
        "collection", "rdfLiteral", "iri",
    ];
    TURTLEParser._LITERAL_NAMES = [
        undefined, "'.'", "'@prefix'", "'@base'", "'BASE'", "'PREFIX'", "';'",
        "','", "'a'", "'['", "']'", "'('", "')'", "'^^'",
    ];
    TURTLEParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        "NumericLiteral", "BooleanLiteral", "String", "BlankNode", "WS", "PN_PREFIX",
        "IRIREF", "PNAME_NS", "PrefixedName", "PNAME_LN", "BLANK_NODE_LABEL",
        "LANGTAG", "INTEGER", "DECIMAL", "DOUBLE", "EXPONENT", "STRING_LITERAL_LONG_SINGLE_QUOTE",
        "STRING_LITERAL_LONG_QUOTE", "STRING_LITERAL_QUOTE", "STRING_LITERAL_SINGLE_QUOTE",
        "UCHAR", "ECHAR", "ANON_WS", "ANON", "PN_CHARS_BASE", "PN_CHARS_U", "PN_CHARS",
        "PN_LOCAL", "PLX", "PERCENT", "HEX", "PN_LOCAL_ESC",
    ];
    TURTLEParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(TURTLEParser._LITERAL_NAMES, TURTLEParser._SYMBOLIC_NAMES, []);
    TURTLEParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03/\x95\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x03\x02\x07\x02*\n\x02\f\x02\x0E\x02-\v\x02\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x05\x033\n\x03\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x05\x049\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03" +
        "\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03" +
        "\t\x03\t\x03\t\x03\t\x03\t\x05\tP\n\t\x05\tR\n\t\x03\n\x03\n\x03\n\x03" +
        "\n\x03\n\x03\n\x05\nZ\n\n\x07\n\\\n\n\f\n\x0E\n_\v\n\x03\v\x03\v\x03\v" +
        "\x07\vd\n\v\f\v\x0E\vg\v\v\x03\f\x03\f\x05\fk\n\f\x03\r\x03\r\x03\r\x05" +
        "\rp\n\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F" +
        "y\n\x0F\x03\x10\x03\x10\x03\x10\x05\x10~\n\x10\x03\x11\x03\x11\x03\x11" +
        "\x03\x11\x03\x12\x03\x12\x07\x12\x86\n\x12\f\x12\x0E\x12\x89\v\x12\x03" +
        "\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\x91\n\x13\x03\x14" +
        "\x03\x14\x03\x14\x02\x02\x02\x15\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
        "\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
        "\x02 \x02\"\x02$\x02&\x02\x02\x03\x04\x02\x16\x16\x18\x18\x02\x97\x02" +
        "+\x03\x02\x02\x02\x042\x03\x02\x02\x02\x068\x03\x02\x02\x02\b:\x03\x02" +
        "\x02\x02\n?\x03\x02\x02\x02\fC\x03\x02\x02\x02\x0EF\x03\x02\x02\x02\x10" +
        "Q\x03\x02\x02\x02\x12S\x03\x02\x02\x02\x14`\x03\x02\x02\x02\x16j\x03\x02" +
        "\x02\x02\x18o\x03\x02\x02\x02\x1Aq\x03\x02\x02\x02\x1Cx\x03\x02\x02\x02" +
        "\x1E}\x03\x02\x02\x02 \x7F\x03\x02\x02\x02\"\x83\x03\x02\x02\x02$\x8C" +
        "\x03\x02\x02\x02&\x92\x03\x02\x02\x02(*\x05\x04\x03\x02)(\x03\x02\x02" +
        "\x02*-\x03\x02\x02\x02+)\x03\x02\x02\x02+,\x03\x02\x02\x02,\x03\x03\x02" +
        "\x02\x02-+\x03\x02\x02\x02.3\x05\x06\x04\x02/0\x05\x10\t\x0201\x07\x03" +
        "\x02\x0213\x03\x02\x02\x022.\x03\x02\x02\x022/\x03\x02\x02\x023\x05\x03" +
        "\x02\x02\x0249\x05\b\x05\x0259\x05\n\x06\x0269\x05\x0E\b\x0279\x05\f\x07" +
        "\x0284\x03\x02\x02\x0285\x03\x02\x02\x0286\x03\x02\x02\x0287\x03\x02\x02" +
        "\x029\x07\x03\x02\x02\x02:;\x07\x04\x02\x02;<\x07\x17\x02\x02<=\x07\x16" +
        "\x02\x02=>\x07\x03\x02\x02>\t\x03\x02\x02\x02?@\x07\x05\x02\x02@A\x07" +
        "\x16\x02\x02AB\x07\x03\x02\x02B\v\x03\x02\x02\x02CD\x07\x06\x02\x02DE" +
        "\x07\x16\x02\x02E\r\x03\x02\x02\x02FG\x07\x07\x02\x02GH\x07\x17\x02\x02" +
        "HI\x07\x16\x02\x02I\x0F\x03\x02\x02\x02JK\x05\x18\r\x02KL\x05\x12\n\x02" +
        "LR\x03\x02\x02\x02MO\x05 \x11\x02NP\x05\x12\n\x02ON\x03\x02\x02\x02OP" +
        "\x03\x02\x02\x02PR\x03\x02\x02\x02QJ\x03\x02\x02\x02QM\x03\x02\x02\x02" +
        "R\x11\x03\x02\x02\x02ST\x05\x16\f\x02T]\x05\x14\v\x02UY\x07\b\x02\x02" +
        "VW\x05\x16\f\x02WX\x05\x14\v\x02XZ\x03\x02\x02\x02YV\x03\x02\x02\x02Y" +
        "Z\x03\x02\x02\x02Z\\\x03\x02\x02\x02[U\x03\x02\x02\x02\\_\x03\x02\x02" +
        "\x02][\x03\x02\x02\x02]^\x03\x02\x02\x02^\x13\x03\x02\x02\x02_]\x03\x02" +
        "\x02\x02`e\x05\x1C\x0F\x02ab\x07\t\x02\x02bd\x05\x1C\x0F\x02ca\x03\x02" +
        "\x02\x02dg\x03\x02\x02\x02ec\x03\x02\x02\x02ef\x03\x02\x02\x02f\x15\x03" +
        "\x02\x02\x02ge\x03\x02\x02\x02hk\x05\x1A\x0E\x02ik\x07\n\x02\x02jh\x03" +
        "\x02\x02\x02ji\x03\x02\x02\x02k\x17\x03\x02\x02\x02lp\x05&\x14\x02mp\x07" +
        "\x13\x02\x02np\x05\"\x12\x02ol\x03\x02\x02\x02om\x03\x02\x02\x02on\x03" +
        "\x02\x02\x02p\x19\x03\x02\x02\x02qr\x05&\x14\x02r\x1B\x03\x02\x02\x02" +
        "sy\x05&\x14\x02ty\x07\x13\x02\x02uy\x05\"\x12\x02vy\x05 \x11\x02wy\x05" +
        "\x1E\x10\x02xs\x03\x02\x02\x02xt\x03\x02\x02\x02xu\x03\x02\x02\x02xv\x03" +
        "\x02\x02\x02xw\x03\x02\x02\x02y\x1D\x03\x02\x02\x02z~\x05$\x13\x02{~\x07" +
        "\x10\x02\x02|~\x07\x11\x02\x02}z\x03\x02\x02\x02}{\x03\x02\x02\x02}|\x03" +
        "\x02\x02\x02~\x1F\x03\x02\x02\x02\x7F\x80\x07\v\x02\x02\x80\x81\x05\x12" +
        "\n\x02\x81\x82\x07\f\x02\x02\x82!\x03\x02\x02\x02\x83\x87\x07\r\x02\x02" +
        "\x84\x86\x05\x1C\x0F\x02\x85\x84\x03\x02\x02\x02\x86\x89\x03\x02\x02\x02" +
        "\x87\x85\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x8A\x03\x02\x02\x02" +
        "\x89\x87\x03\x02\x02\x02\x8A\x8B\x07\x0E\x02\x02\x8B#\x03\x02\x02\x02" +
        "\x8C\x90\x07\x12\x02\x02\x8D\x91\x07\x1B\x02\x02\x8E\x8F\x07\x0F\x02\x02" +
        "\x8F\x91\x05&\x14\x02\x90\x8D\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02" +
        "\x90\x91\x03\x02\x02\x02\x91%\x03\x02\x02\x02\x92\x93\t\x02\x02\x02\x93" +
        "\'\x03\x02\x02\x02\x10+28OQY]ejox}\x87\x90";
    return TURTLEParser;
}(Parser_1.Parser));
exports.TURTLEParser = TURTLEParser;
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
        get: function () { return TURTLEParser.RULE_turtleDoc; },
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
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TURTLEParser.RULE_statement; },
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
        get: function () { return TURTLEParser.RULE_directive; },
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
    PrefixIDContext.prototype.PNAME_NS = function () { return this.getToken(TURTLEParser.PNAME_NS, 0); };
    PrefixIDContext.prototype.IRIREF = function () { return this.getToken(TURTLEParser.IRIREF, 0); };
    Object.defineProperty(PrefixIDContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TURTLEParser.RULE_prefixID; },
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
    BaseContext.prototype.IRIREF = function () { return this.getToken(TURTLEParser.IRIREF, 0); };
    Object.defineProperty(BaseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TURTLEParser.RULE_base; },
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
    SparqlBaseContext.prototype.IRIREF = function () { return this.getToken(TURTLEParser.IRIREF, 0); };
    Object.defineProperty(SparqlBaseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TURTLEParser.RULE_sparqlBase; },
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
    SparqlPrefixContext.prototype.PNAME_NS = function () { return this.getToken(TURTLEParser.PNAME_NS, 0); };
    SparqlPrefixContext.prototype.IRIREF = function () { return this.getToken(TURTLEParser.IRIREF, 0); };
    Object.defineProperty(SparqlPrefixContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TURTLEParser.RULE_sparqlPrefix; },
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
        get: function () { return TURTLEParser.RULE_triples; },
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
    PredicateObjectListContext.prototype.verb = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VerbContext);
        }
        else {
            return this.getRuleContext(i, VerbContext);
        }
    };
    PredicateObjectListContext.prototype.objectList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ObjectListContext);
        }
        else {
            return this.getRuleContext(i, ObjectListContext);
        }
    };
    Object.defineProperty(PredicateObjectListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TURTLEParser.RULE_predicateObjectList; },
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
    Object.defineProperty(ObjectListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TURTLEParser.RULE_objectList; },
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
var VerbContext = /** @class */ (function (_super) {
    __extends(VerbContext, _super);
    function VerbContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VerbContext.prototype.predicate = function () {
        return this.tryGetRuleContext(0, PredicateContext);
    };
    Object.defineProperty(VerbContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TURTLEParser.RULE_verb; },
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
var SubjectContext = /** @class */ (function (_super) {
    __extends(SubjectContext, _super);
    function SubjectContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubjectContext.prototype.iri = function () {
        return this.tryGetRuleContext(0, IriContext);
    };
    SubjectContext.prototype.BlankNode = function () { return this.tryGetToken(TURTLEParser.BlankNode, 0); };
    SubjectContext.prototype.collection = function () {
        return this.tryGetRuleContext(0, CollectionContext);
    };
    Object.defineProperty(SubjectContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TURTLEParser.RULE_subject; },
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
        get: function () { return TURTLEParser.RULE_predicate; },
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
    ObjectContext.prototype.BlankNode = function () { return this.tryGetToken(TURTLEParser.BlankNode, 0); };
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
        get: function () { return TURTLEParser.RULE_object; },
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
    LiteralContext.prototype.rdfLiteral = function () {
        return this.tryGetRuleContext(0, RdfLiteralContext);
    };
    LiteralContext.prototype.NumericLiteral = function () { return this.tryGetToken(TURTLEParser.NumericLiteral, 0); };
    LiteralContext.prototype.BooleanLiteral = function () { return this.tryGetToken(TURTLEParser.BooleanLiteral, 0); };
    Object.defineProperty(LiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TURTLEParser.RULE_literal; },
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
    BlankNodePropertyListContext.prototype.predicateObjectList = function () {
        return this.getRuleContext(0, PredicateObjectListContext);
    };
    Object.defineProperty(BlankNodePropertyListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TURTLEParser.RULE_blankNodePropertyList; },
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
        get: function () { return TURTLEParser.RULE_collection; },
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
var RdfLiteralContext = /** @class */ (function (_super) {
    __extends(RdfLiteralContext, _super);
    function RdfLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RdfLiteralContext.prototype.String = function () { return this.getToken(TURTLEParser.String, 0); };
    RdfLiteralContext.prototype.LANGTAG = function () { return this.tryGetToken(TURTLEParser.LANGTAG, 0); };
    RdfLiteralContext.prototype.iri = function () {
        return this.tryGetRuleContext(0, IriContext);
    };
    Object.defineProperty(RdfLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TURTLEParser.RULE_rdfLiteral; },
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
var IriContext = /** @class */ (function (_super) {
    __extends(IriContext, _super);
    function IriContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IriContext.prototype.IRIREF = function () { return this.tryGetToken(TURTLEParser.IRIREF, 0); };
    IriContext.prototype.PrefixedName = function () { return this.tryGetToken(TURTLEParser.PrefixedName, 0); };
    Object.defineProperty(IriContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return TURTLEParser.RULE_iri; },
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
