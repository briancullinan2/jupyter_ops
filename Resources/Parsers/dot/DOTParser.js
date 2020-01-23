"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/dot/DOT.g4 by ANTLR 4.7.3-SNAPSHOT
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
var DOTParser = /** @class */ (function (_super) {
    __extends(DOTParser, _super);
    function DOTParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(DOTParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(DOTParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return DOTParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DOTParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "DOT.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DOTParser.prototype, "ruleNames", {
        // @Override
        get: function () { return DOTParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DOTParser.prototype, "serializedATN", {
        // @Override
        get: function () { return DOTParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    DOTParser.prototype.graph = function () {
        var _localctx = new GraphContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, DOTParser.RULE_graph);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 29;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === DOTParser.STRICT) {
                    {
                        this.state = 28;
                        this.match(DOTParser.STRICT);
                    }
                }
                this.state = 31;
                _la = this._input.LA(1);
                if (!(_la === DOTParser.GRAPH || _la === DOTParser.DIGRAPH)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 33;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DOTParser.NUMBER) | (1 << DOTParser.STRING) | (1 << DOTParser.ID) | (1 << DOTParser.HTML_STRING))) !== 0)) {
                    {
                        this.state = 32;
                        this.id();
                    }
                }
                this.state = 35;
                this.match(DOTParser.T__0);
                this.state = 36;
                this.stmt_list();
                this.state = 37;
                this.match(DOTParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DOTParser.prototype.stmt_list = function () {
        var _localctx = new Stmt_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, DOTParser.RULE_stmt_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 45;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DOTParser.T__0) | (1 << DOTParser.GRAPH) | (1 << DOTParser.NODE) | (1 << DOTParser.EDGE) | (1 << DOTParser.SUBGRAPH) | (1 << DOTParser.NUMBER) | (1 << DOTParser.STRING) | (1 << DOTParser.ID) | (1 << DOTParser.HTML_STRING))) !== 0)) {
                    {
                        {
                            this.state = 39;
                            this.stmt();
                            this.state = 41;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === DOTParser.T__2) {
                                {
                                    this.state = 40;
                                    this.match(DOTParser.T__2);
                                }
                            }
                        }
                    }
                    this.state = 47;
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
    DOTParser.prototype.stmt = function () {
        var _localctx = new StmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, DOTParser.RULE_stmt);
        try {
            this.state = 56;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 48;
                        this.node_stmt();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 49;
                        this.edge_stmt();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 50;
                        this.attr_stmt();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 51;
                        this.id();
                        this.state = 52;
                        this.match(DOTParser.T__3);
                        this.state = 53;
                        this.id();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 55;
                        this.subgraph();
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
    DOTParser.prototype.attr_stmt = function () {
        var _localctx = new Attr_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, DOTParser.RULE_attr_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 58;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DOTParser.GRAPH) | (1 << DOTParser.NODE) | (1 << DOTParser.EDGE))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 59;
                this.attr_list();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DOTParser.prototype.attr_list = function () {
        var _localctx = new Attr_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, DOTParser.RULE_attr_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 66;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 61;
                            this.match(DOTParser.T__4);
                            this.state = 63;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DOTParser.NUMBER) | (1 << DOTParser.STRING) | (1 << DOTParser.ID) | (1 << DOTParser.HTML_STRING))) !== 0)) {
                                {
                                    this.state = 62;
                                    this.a_list();
                                }
                            }
                            this.state = 65;
                            this.match(DOTParser.T__5);
                        }
                    }
                    this.state = 68;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === DOTParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DOTParser.prototype.a_list = function () {
        var _localctx = new A_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, DOTParser.RULE_a_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 78;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 70;
                            this.id();
                            this.state = 73;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === DOTParser.T__3) {
                                {
                                    this.state = 71;
                                    this.match(DOTParser.T__3);
                                    this.state = 72;
                                    this.id();
                                }
                            }
                            this.state = 76;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === DOTParser.T__6) {
                                {
                                    this.state = 75;
                                    this.match(DOTParser.T__6);
                                }
                            }
                        }
                    }
                    this.state = 80;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DOTParser.NUMBER) | (1 << DOTParser.STRING) | (1 << DOTParser.ID) | (1 << DOTParser.HTML_STRING))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DOTParser.prototype.edge_stmt = function () {
        var _localctx = new Edge_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, DOTParser.RULE_edge_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 84;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case DOTParser.NUMBER:
                    case DOTParser.STRING:
                    case DOTParser.ID:
                    case DOTParser.HTML_STRING:
                        {
                            this.state = 82;
                            this.node_id();
                        }
                        break;
                    case DOTParser.T__0:
                    case DOTParser.SUBGRAPH:
                        {
                            this.state = 83;
                            this.subgraph();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 86;
                this.edgeRHS();
                this.state = 88;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === DOTParser.T__4) {
                    {
                        this.state = 87;
                        this.attr_list();
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
    DOTParser.prototype.edgeRHS = function () {
        var _localctx = new EdgeRHSContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, DOTParser.RULE_edgeRHS);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 95;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 90;
                            this.edgeop();
                            this.state = 93;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case DOTParser.NUMBER:
                                case DOTParser.STRING:
                                case DOTParser.ID:
                                case DOTParser.HTML_STRING:
                                    {
                                        this.state = 91;
                                        this.node_id();
                                    }
                                    break;
                                case DOTParser.T__0:
                                case DOTParser.SUBGRAPH:
                                    {
                                        this.state = 92;
                                        this.subgraph();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 97;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === DOTParser.T__7 || _la === DOTParser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DOTParser.prototype.edgeop = function () {
        var _localctx = new EdgeopContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, DOTParser.RULE_edgeop);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 99;
                _la = this._input.LA(1);
                if (!(_la === DOTParser.T__7 || _la === DOTParser.T__8)) {
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
    DOTParser.prototype.node_stmt = function () {
        var _localctx = new Node_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, DOTParser.RULE_node_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 101;
                this.node_id();
                this.state = 103;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === DOTParser.T__4) {
                    {
                        this.state = 102;
                        this.attr_list();
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
    DOTParser.prototype.node_id = function () {
        var _localctx = new Node_idContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, DOTParser.RULE_node_id);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 105;
                this.id();
                this.state = 107;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === DOTParser.T__9) {
                    {
                        this.state = 106;
                        this.port();
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
    DOTParser.prototype.port = function () {
        var _localctx = new PortContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, DOTParser.RULE_port);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 109;
                this.match(DOTParser.T__9);
                this.state = 110;
                this.id();
                this.state = 113;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === DOTParser.T__9) {
                    {
                        this.state = 111;
                        this.match(DOTParser.T__9);
                        this.state = 112;
                        this.id();
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
    DOTParser.prototype.subgraph = function () {
        var _localctx = new SubgraphContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, DOTParser.RULE_subgraph);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 119;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === DOTParser.SUBGRAPH) {
                    {
                        this.state = 115;
                        this.match(DOTParser.SUBGRAPH);
                        this.state = 117;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DOTParser.NUMBER) | (1 << DOTParser.STRING) | (1 << DOTParser.ID) | (1 << DOTParser.HTML_STRING))) !== 0)) {
                            {
                                this.state = 116;
                                this.id();
                            }
                        }
                    }
                }
                this.state = 121;
                this.match(DOTParser.T__0);
                this.state = 122;
                this.stmt_list();
                this.state = 123;
                this.match(DOTParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DOTParser.prototype.id = function () {
        var _localctx = new IdContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, DOTParser.RULE_id);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 125;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DOTParser.NUMBER) | (1 << DOTParser.STRING) | (1 << DOTParser.ID) | (1 << DOTParser.HTML_STRING))) !== 0))) {
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
    Object.defineProperty(DOTParser, "_ATN", {
        get: function () {
            if (!DOTParser.__ATN) {
                DOTParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(DOTParser._serializedATN));
            }
            return DOTParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    DOTParser.T__0 = 1;
    DOTParser.T__1 = 2;
    DOTParser.T__2 = 3;
    DOTParser.T__3 = 4;
    DOTParser.T__4 = 5;
    DOTParser.T__5 = 6;
    DOTParser.T__6 = 7;
    DOTParser.T__7 = 8;
    DOTParser.T__8 = 9;
    DOTParser.T__9 = 10;
    DOTParser.STRICT = 11;
    DOTParser.GRAPH = 12;
    DOTParser.DIGRAPH = 13;
    DOTParser.NODE = 14;
    DOTParser.EDGE = 15;
    DOTParser.SUBGRAPH = 16;
    DOTParser.NUMBER = 17;
    DOTParser.STRING = 18;
    DOTParser.ID = 19;
    DOTParser.HTML_STRING = 20;
    DOTParser.COMMENT = 21;
    DOTParser.LINE_COMMENT = 22;
    DOTParser.PREPROC = 23;
    DOTParser.WS = 24;
    DOTParser.RULE_graph = 0;
    DOTParser.RULE_stmt_list = 1;
    DOTParser.RULE_stmt = 2;
    DOTParser.RULE_attr_stmt = 3;
    DOTParser.RULE_attr_list = 4;
    DOTParser.RULE_a_list = 5;
    DOTParser.RULE_edge_stmt = 6;
    DOTParser.RULE_edgeRHS = 7;
    DOTParser.RULE_edgeop = 8;
    DOTParser.RULE_node_stmt = 9;
    DOTParser.RULE_node_id = 10;
    DOTParser.RULE_port = 11;
    DOTParser.RULE_subgraph = 12;
    DOTParser.RULE_id = 13;
    // tslint:disable:no-trailing-whitespace
    DOTParser.ruleNames = [
        "graph", "stmt_list", "stmt", "attr_stmt", "attr_list", "a_list", "edge_stmt",
        "edgeRHS", "edgeop", "node_stmt", "node_id", "port", "subgraph", "id",
    ];
    DOTParser._LITERAL_NAMES = [
        undefined, "'{'", "'}'", "';'", "'='", "'['", "']'", "','", "'->'", "'--'",
        "':'",
    ];
    DOTParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, "STRICT", "GRAPH", "DIGRAPH",
        "NODE", "EDGE", "SUBGRAPH", "NUMBER", "STRING", "ID", "HTML_STRING", "COMMENT",
        "LINE_COMMENT", "PREPROC", "WS",
    ];
    DOTParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(DOTParser._LITERAL_NAMES, DOTParser._SYMBOLIC_NAMES, []);
    DOTParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1A\x82\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x05\x02 \n\x02\x03\x02\x03\x02\x05\x02" +
        "$\n\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03,\n\x03" +
        "\x07\x03.\n\x03\f\x03\x0E\x031\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x05\x04;\n\x04\x03\x05\x03\x05\x03\x05\x03" +
        "\x06\x03\x06\x05\x06B\n\x06\x03\x06\x06\x06E\n\x06\r\x06\x0E\x06F\x03" +
        "\x07\x03\x07\x03\x07\x05\x07L\n\x07\x03\x07\x05\x07O\n\x07\x06\x07Q\n" +
        "\x07\r\x07\x0E\x07R\x03\b\x03\b\x05\bW\n\b\x03\b\x03\b\x05\b[\n\b\x03" +
        "\t\x03\t\x03\t\x05\t`\n\t\x06\tb\n\t\r\t\x0E\tc\x03\n\x03\n\x03\v\x03" +
        "\v\x05\vj\n\v\x03\f\x03\f\x05\fn\n\f\x03\r\x03\r\x03\r\x03\r\x05\rt\n" +
        "\r\x03\x0E\x03\x0E\x05\x0Ex\n\x0E\x05\x0Ez\n\x0E\x03\x0E\x03\x0E\x03\x0E" +
        "\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x02\x02\x02\x10\x02\x02\x04\x02\x06\x02" +
        "\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
        "\x02\x1C\x02\x02\x06\x03\x02\x0E\x0F\x04\x02\x0E\x0E\x10\x11\x03\x02\n" +
        "\v\x03\x02\x13\x16\x02\x89\x02\x1F\x03\x02\x02\x02\x04/\x03\x02\x02\x02" +
        "\x06:\x03\x02\x02\x02\b<\x03\x02\x02\x02\nD\x03\x02\x02\x02\fP\x03\x02" +
        "\x02\x02\x0EV\x03\x02\x02\x02\x10a\x03\x02\x02\x02\x12e\x03\x02\x02\x02" +
        "\x14g\x03\x02\x02\x02\x16k\x03\x02\x02\x02\x18o\x03\x02\x02\x02\x1Ay\x03" +
        "\x02\x02\x02\x1C\x7F\x03\x02\x02\x02\x1E \x07\r\x02\x02\x1F\x1E\x03\x02" +
        "\x02\x02\x1F \x03\x02\x02\x02 !\x03\x02\x02\x02!#\t\x02\x02\x02\"$\x05" +
        "\x1C\x0F\x02#\"\x03\x02\x02\x02#$\x03\x02\x02\x02$%\x03\x02\x02\x02%&" +
        "\x07\x03\x02\x02&\'\x05\x04\x03\x02\'(\x07\x04\x02\x02(\x03\x03\x02\x02" +
        "\x02)+\x05\x06\x04\x02*,\x07\x05\x02\x02+*\x03\x02\x02\x02+,\x03\x02\x02" +
        "\x02,.\x03\x02\x02\x02-)\x03\x02\x02\x02.1\x03\x02\x02\x02/-\x03\x02\x02" +
        "\x02/0\x03\x02\x02\x020\x05\x03\x02\x02\x021/\x03\x02\x02\x022;\x05\x14" +
        "\v\x023;\x05\x0E\b\x024;\x05\b\x05\x0256\x05\x1C\x0F\x0267\x07\x06\x02" +
        "\x0278\x05\x1C\x0F\x028;\x03\x02\x02\x029;\x05\x1A\x0E\x02:2\x03\x02\x02" +
        "\x02:3\x03\x02\x02\x02:4\x03\x02\x02\x02:5\x03\x02\x02\x02:9\x03\x02\x02" +
        "\x02;\x07\x03\x02\x02\x02<=\t\x03\x02\x02=>\x05\n\x06\x02>\t\x03\x02\x02" +
        "\x02?A\x07\x07\x02\x02@B\x05\f\x07\x02A@\x03\x02\x02\x02AB\x03\x02\x02" +
        "\x02BC\x03\x02\x02\x02CE\x07\b\x02\x02D?\x03\x02\x02\x02EF\x03\x02\x02" +
        "\x02FD\x03\x02\x02\x02FG\x03\x02\x02\x02G\v\x03\x02\x02\x02HK\x05\x1C" +
        "\x0F\x02IJ\x07\x06\x02\x02JL\x05\x1C\x0F\x02KI\x03\x02\x02\x02KL\x03\x02" +
        "\x02\x02LN\x03\x02\x02\x02MO\x07\t\x02\x02NM\x03\x02\x02\x02NO\x03\x02" +
        "\x02\x02OQ\x03\x02\x02\x02PH\x03\x02\x02\x02QR\x03\x02\x02\x02RP\x03\x02" +
        "\x02\x02RS\x03\x02\x02\x02S\r\x03\x02\x02\x02TW\x05\x16\f\x02UW\x05\x1A" +
        "\x0E\x02VT\x03\x02\x02\x02VU\x03\x02\x02\x02WX\x03\x02\x02\x02XZ\x05\x10" +
        "\t\x02Y[\x05\n\x06\x02ZY\x03\x02\x02\x02Z[\x03\x02\x02\x02[\x0F\x03\x02" +
        "\x02\x02\\_\x05\x12\n\x02]`\x05\x16\f\x02^`\x05\x1A\x0E\x02_]\x03\x02" +
        "\x02\x02_^\x03\x02\x02\x02`b\x03\x02\x02\x02a\\\x03\x02\x02\x02bc\x03" +
        "\x02\x02\x02ca\x03\x02\x02\x02cd\x03\x02\x02\x02d\x11\x03\x02\x02\x02" +
        "ef\t\x04\x02\x02f\x13\x03\x02\x02\x02gi\x05\x16\f\x02hj\x05\n\x06\x02" +
        "ih\x03\x02\x02\x02ij\x03\x02\x02\x02j\x15\x03\x02\x02\x02km\x05\x1C\x0F" +
        "\x02ln\x05\x18\r\x02ml\x03\x02\x02\x02mn\x03\x02\x02\x02n\x17\x03\x02" +
        "\x02\x02op\x07\f\x02\x02ps\x05\x1C\x0F\x02qr\x07\f\x02\x02rt\x05\x1C\x0F" +
        "\x02sq\x03\x02\x02\x02st\x03\x02\x02\x02t\x19\x03\x02\x02\x02uw\x07\x12" +
        "\x02\x02vx\x05\x1C\x0F\x02wv\x03\x02\x02\x02wx\x03\x02\x02\x02xz\x03\x02" +
        "\x02\x02yu\x03\x02\x02\x02yz\x03\x02\x02\x02z{\x03\x02\x02\x02{|\x07\x03" +
        "\x02\x02|}\x05\x04\x03\x02}~\x07\x04\x02\x02~\x1B\x03\x02\x02\x02\x7F" +
        "\x80\t\x05\x02\x02\x80\x1D\x03\x02\x02\x02\x15\x1F#+/:AFKNRVZ_cimswy";
    return DOTParser;
}(Parser_1.Parser));
exports.DOTParser = DOTParser;
var GraphContext = /** @class */ (function (_super) {
    __extends(GraphContext, _super);
    function GraphContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GraphContext.prototype.stmt_list = function () {
        return this.getRuleContext(0, Stmt_listContext);
    };
    GraphContext.prototype.GRAPH = function () { return this.tryGetToken(DOTParser.GRAPH, 0); };
    GraphContext.prototype.DIGRAPH = function () { return this.tryGetToken(DOTParser.DIGRAPH, 0); };
    GraphContext.prototype.STRICT = function () { return this.tryGetToken(DOTParser.STRICT, 0); };
    GraphContext.prototype.id = function () {
        return this.tryGetRuleContext(0, IdContext);
    };
    Object.defineProperty(GraphContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DOTParser.RULE_graph; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GraphContext.prototype.enterRule = function (listener) {
        if (listener.enterGraph) {
            listener.enterGraph(this);
        }
    };
    // @Override
    GraphContext.prototype.exitRule = function (listener) {
        if (listener.exitGraph) {
            listener.exitGraph(this);
        }
    };
    // @Override
    GraphContext.prototype.accept = function (visitor) {
        if (visitor.visitGraph) {
            return visitor.visitGraph(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GraphContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GraphContext = GraphContext;
var Stmt_listContext = /** @class */ (function (_super) {
    __extends(Stmt_listContext, _super);
    function Stmt_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Stmt_listContext.prototype.stmt = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }
        else {
            return this.getRuleContext(i, StmtContext);
        }
    };
    Object.defineProperty(Stmt_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DOTParser.RULE_stmt_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Stmt_listContext.prototype.enterRule = function (listener) {
        if (listener.enterStmt_list) {
            listener.enterStmt_list(this);
        }
    };
    // @Override
    Stmt_listContext.prototype.exitRule = function (listener) {
        if (listener.exitStmt_list) {
            listener.exitStmt_list(this);
        }
    };
    // @Override
    Stmt_listContext.prototype.accept = function (visitor) {
        if (visitor.visitStmt_list) {
            return visitor.visitStmt_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Stmt_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Stmt_listContext = Stmt_listContext;
var StmtContext = /** @class */ (function (_super) {
    __extends(StmtContext, _super);
    function StmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StmtContext.prototype.node_stmt = function () {
        return this.tryGetRuleContext(0, Node_stmtContext);
    };
    StmtContext.prototype.edge_stmt = function () {
        return this.tryGetRuleContext(0, Edge_stmtContext);
    };
    StmtContext.prototype.attr_stmt = function () {
        return this.tryGetRuleContext(0, Attr_stmtContext);
    };
    StmtContext.prototype.id = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdContext);
        }
        else {
            return this.getRuleContext(i, IdContext);
        }
    };
    StmtContext.prototype.subgraph = function () {
        return this.tryGetRuleContext(0, SubgraphContext);
    };
    Object.defineProperty(StmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DOTParser.RULE_stmt; },
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
var Attr_stmtContext = /** @class */ (function (_super) {
    __extends(Attr_stmtContext, _super);
    function Attr_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Attr_stmtContext.prototype.attr_list = function () {
        return this.getRuleContext(0, Attr_listContext);
    };
    Attr_stmtContext.prototype.GRAPH = function () { return this.tryGetToken(DOTParser.GRAPH, 0); };
    Attr_stmtContext.prototype.NODE = function () { return this.tryGetToken(DOTParser.NODE, 0); };
    Attr_stmtContext.prototype.EDGE = function () { return this.tryGetToken(DOTParser.EDGE, 0); };
    Object.defineProperty(Attr_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DOTParser.RULE_attr_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Attr_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterAttr_stmt) {
            listener.enterAttr_stmt(this);
        }
    };
    // @Override
    Attr_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitAttr_stmt) {
            listener.exitAttr_stmt(this);
        }
    };
    // @Override
    Attr_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitAttr_stmt) {
            return visitor.visitAttr_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Attr_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Attr_stmtContext = Attr_stmtContext;
var Attr_listContext = /** @class */ (function (_super) {
    __extends(Attr_listContext, _super);
    function Attr_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Attr_listContext.prototype.a_list = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(A_listContext);
        }
        else {
            return this.getRuleContext(i, A_listContext);
        }
    };
    Object.defineProperty(Attr_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DOTParser.RULE_attr_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Attr_listContext.prototype.enterRule = function (listener) {
        if (listener.enterAttr_list) {
            listener.enterAttr_list(this);
        }
    };
    // @Override
    Attr_listContext.prototype.exitRule = function (listener) {
        if (listener.exitAttr_list) {
            listener.exitAttr_list(this);
        }
    };
    // @Override
    Attr_listContext.prototype.accept = function (visitor) {
        if (visitor.visitAttr_list) {
            return visitor.visitAttr_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Attr_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Attr_listContext = Attr_listContext;
var A_listContext = /** @class */ (function (_super) {
    __extends(A_listContext, _super);
    function A_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    A_listContext.prototype.id = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdContext);
        }
        else {
            return this.getRuleContext(i, IdContext);
        }
    };
    Object.defineProperty(A_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DOTParser.RULE_a_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    A_listContext.prototype.enterRule = function (listener) {
        if (listener.enterA_list) {
            listener.enterA_list(this);
        }
    };
    // @Override
    A_listContext.prototype.exitRule = function (listener) {
        if (listener.exitA_list) {
            listener.exitA_list(this);
        }
    };
    // @Override
    A_listContext.prototype.accept = function (visitor) {
        if (visitor.visitA_list) {
            return visitor.visitA_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return A_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.A_listContext = A_listContext;
var Edge_stmtContext = /** @class */ (function (_super) {
    __extends(Edge_stmtContext, _super);
    function Edge_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Edge_stmtContext.prototype.edgeRHS = function () {
        return this.getRuleContext(0, EdgeRHSContext);
    };
    Edge_stmtContext.prototype.node_id = function () {
        return this.tryGetRuleContext(0, Node_idContext);
    };
    Edge_stmtContext.prototype.subgraph = function () {
        return this.tryGetRuleContext(0, SubgraphContext);
    };
    Edge_stmtContext.prototype.attr_list = function () {
        return this.tryGetRuleContext(0, Attr_listContext);
    };
    Object.defineProperty(Edge_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DOTParser.RULE_edge_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Edge_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterEdge_stmt) {
            listener.enterEdge_stmt(this);
        }
    };
    // @Override
    Edge_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitEdge_stmt) {
            listener.exitEdge_stmt(this);
        }
    };
    // @Override
    Edge_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitEdge_stmt) {
            return visitor.visitEdge_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Edge_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Edge_stmtContext = Edge_stmtContext;
var EdgeRHSContext = /** @class */ (function (_super) {
    __extends(EdgeRHSContext, _super);
    function EdgeRHSContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EdgeRHSContext.prototype.edgeop = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EdgeopContext);
        }
        else {
            return this.getRuleContext(i, EdgeopContext);
        }
    };
    EdgeRHSContext.prototype.node_id = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Node_idContext);
        }
        else {
            return this.getRuleContext(i, Node_idContext);
        }
    };
    EdgeRHSContext.prototype.subgraph = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SubgraphContext);
        }
        else {
            return this.getRuleContext(i, SubgraphContext);
        }
    };
    Object.defineProperty(EdgeRHSContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DOTParser.RULE_edgeRHS; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EdgeRHSContext.prototype.enterRule = function (listener) {
        if (listener.enterEdgeRHS) {
            listener.enterEdgeRHS(this);
        }
    };
    // @Override
    EdgeRHSContext.prototype.exitRule = function (listener) {
        if (listener.exitEdgeRHS) {
            listener.exitEdgeRHS(this);
        }
    };
    // @Override
    EdgeRHSContext.prototype.accept = function (visitor) {
        if (visitor.visitEdgeRHS) {
            return visitor.visitEdgeRHS(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EdgeRHSContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EdgeRHSContext = EdgeRHSContext;
var EdgeopContext = /** @class */ (function (_super) {
    __extends(EdgeopContext, _super);
    function EdgeopContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(EdgeopContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DOTParser.RULE_edgeop; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EdgeopContext.prototype.enterRule = function (listener) {
        if (listener.enterEdgeop) {
            listener.enterEdgeop(this);
        }
    };
    // @Override
    EdgeopContext.prototype.exitRule = function (listener) {
        if (listener.exitEdgeop) {
            listener.exitEdgeop(this);
        }
    };
    // @Override
    EdgeopContext.prototype.accept = function (visitor) {
        if (visitor.visitEdgeop) {
            return visitor.visitEdgeop(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EdgeopContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EdgeopContext = EdgeopContext;
var Node_stmtContext = /** @class */ (function (_super) {
    __extends(Node_stmtContext, _super);
    function Node_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Node_stmtContext.prototype.node_id = function () {
        return this.getRuleContext(0, Node_idContext);
    };
    Node_stmtContext.prototype.attr_list = function () {
        return this.tryGetRuleContext(0, Attr_listContext);
    };
    Object.defineProperty(Node_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DOTParser.RULE_node_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Node_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterNode_stmt) {
            listener.enterNode_stmt(this);
        }
    };
    // @Override
    Node_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitNode_stmt) {
            listener.exitNode_stmt(this);
        }
    };
    // @Override
    Node_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitNode_stmt) {
            return visitor.visitNode_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Node_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Node_stmtContext = Node_stmtContext;
var Node_idContext = /** @class */ (function (_super) {
    __extends(Node_idContext, _super);
    function Node_idContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Node_idContext.prototype.id = function () {
        return this.getRuleContext(0, IdContext);
    };
    Node_idContext.prototype.port = function () {
        return this.tryGetRuleContext(0, PortContext);
    };
    Object.defineProperty(Node_idContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DOTParser.RULE_node_id; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Node_idContext.prototype.enterRule = function (listener) {
        if (listener.enterNode_id) {
            listener.enterNode_id(this);
        }
    };
    // @Override
    Node_idContext.prototype.exitRule = function (listener) {
        if (listener.exitNode_id) {
            listener.exitNode_id(this);
        }
    };
    // @Override
    Node_idContext.prototype.accept = function (visitor) {
        if (visitor.visitNode_id) {
            return visitor.visitNode_id(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Node_idContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Node_idContext = Node_idContext;
var PortContext = /** @class */ (function (_super) {
    __extends(PortContext, _super);
    function PortContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PortContext.prototype.id = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdContext);
        }
        else {
            return this.getRuleContext(i, IdContext);
        }
    };
    Object.defineProperty(PortContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DOTParser.RULE_port; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PortContext.prototype.enterRule = function (listener) {
        if (listener.enterPort) {
            listener.enterPort(this);
        }
    };
    // @Override
    PortContext.prototype.exitRule = function (listener) {
        if (listener.exitPort) {
            listener.exitPort(this);
        }
    };
    // @Override
    PortContext.prototype.accept = function (visitor) {
        if (visitor.visitPort) {
            return visitor.visitPort(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PortContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PortContext = PortContext;
var SubgraphContext = /** @class */ (function (_super) {
    __extends(SubgraphContext, _super);
    function SubgraphContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubgraphContext.prototype.stmt_list = function () {
        return this.getRuleContext(0, Stmt_listContext);
    };
    SubgraphContext.prototype.SUBGRAPH = function () { return this.tryGetToken(DOTParser.SUBGRAPH, 0); };
    SubgraphContext.prototype.id = function () {
        return this.tryGetRuleContext(0, IdContext);
    };
    Object.defineProperty(SubgraphContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DOTParser.RULE_subgraph; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubgraphContext.prototype.enterRule = function (listener) {
        if (listener.enterSubgraph) {
            listener.enterSubgraph(this);
        }
    };
    // @Override
    SubgraphContext.prototype.exitRule = function (listener) {
        if (listener.exitSubgraph) {
            listener.exitSubgraph(this);
        }
    };
    // @Override
    SubgraphContext.prototype.accept = function (visitor) {
        if (visitor.visitSubgraph) {
            return visitor.visitSubgraph(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubgraphContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubgraphContext = SubgraphContext;
var IdContext = /** @class */ (function (_super) {
    __extends(IdContext, _super);
    function IdContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdContext.prototype.ID = function () { return this.tryGetToken(DOTParser.ID, 0); };
    IdContext.prototype.STRING = function () { return this.tryGetToken(DOTParser.STRING, 0); };
    IdContext.prototype.HTML_STRING = function () { return this.tryGetToken(DOTParser.HTML_STRING, 0); };
    IdContext.prototype.NUMBER = function () { return this.tryGetToken(DOTParser.NUMBER, 0); };
    Object.defineProperty(IdContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DOTParser.RULE_id; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdContext.prototype.enterRule = function (listener) {
        if (listener.enterId) {
            listener.enterId(this);
        }
    };
    // @Override
    IdContext.prototype.exitRule = function (listener) {
        if (listener.exitId) {
            listener.exitId(this);
        }
    };
    // @Override
    IdContext.prototype.accept = function (visitor) {
        if (visitor.visitId) {
            return visitor.visitId(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdContext = IdContext;
