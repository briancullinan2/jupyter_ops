"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/propcalc/propcalc.g4 by ANTLR 4.7.3-SNAPSHOT
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
var propcalcParser = /** @class */ (function (_super) {
    __extends(propcalcParser, _super);
    function propcalcParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(propcalcParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(propcalcParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return propcalcParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(propcalcParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "propcalc.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(propcalcParser.prototype, "ruleNames", {
        // @Override
        get: function () { return propcalcParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(propcalcParser.prototype, "serializedATN", {
        // @Override
        get: function () { return propcalcParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    propcalcParser.prototype.proposition = function () {
        var _localctx = new PropositionContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, propcalcParser.RULE_proposition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 16;
                this.expression();
                this.state = 17;
                this.match(propcalcParser.THEREFORE);
                this.state = 18;
                this.expression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    propcalcParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, propcalcParser.RULE_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 20;
                this.relExpression();
                this.state = 25;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === propcalcParser.AND || _la === propcalcParser.OR) {
                    {
                        {
                            this.state = 21;
                            _la = this._input.LA(1);
                            if (!(_la === propcalcParser.AND || _la === propcalcParser.OR)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 22;
                            this.relExpression();
                        }
                    }
                    this.state = 27;
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
    propcalcParser.prototype.relExpression = function () {
        var _localctx = new RelExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, propcalcParser.RULE_relExpression);
        try {
            this.state = 31;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 28;
                        this.atom();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 29;
                        this.equiv();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 30;
                        this.implies();
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
    propcalcParser.prototype.atoms = function () {
        var _localctx = new AtomsContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, propcalcParser.RULE_atoms);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 33;
                this.atom();
                this.state = 38;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === propcalcParser.T__0) {
                    {
                        {
                            this.state = 34;
                            this.match(propcalcParser.T__0);
                            this.state = 35;
                            this.atom();
                        }
                    }
                    this.state = 40;
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
    propcalcParser.prototype.atom = function () {
        var _localctx = new AtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, propcalcParser.RULE_atom);
        try {
            this.state = 48;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case propcalcParser.EOF:
                case propcalcParser.T__0:
                case propcalcParser.AND:
                case propcalcParser.OR:
                case propcalcParser.IMPLIES:
                case propcalcParser.THEREFORE:
                case propcalcParser.EQUIV:
                case propcalcParser.RPAREN:
                case propcalcParser.LETTER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 41;
                        this.variable();
                    }
                    break;
                case propcalcParser.NOT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 42;
                        this.match(propcalcParser.NOT);
                        this.state = 43;
                        this.atom();
                    }
                    break;
                case propcalcParser.LPAREN:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 44;
                        this.match(propcalcParser.LPAREN);
                        this.state = 45;
                        this.expression();
                        this.state = 46;
                        this.match(propcalcParser.RPAREN);
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
    propcalcParser.prototype.equiv = function () {
        var _localctx = new EquivContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, propcalcParser.RULE_equiv);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 50;
                this.atom();
                this.state = 51;
                this.match(propcalcParser.EQUIV);
                this.state = 52;
                this.atom();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    propcalcParser.prototype.implies = function () {
        var _localctx = new ImpliesContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, propcalcParser.RULE_implies);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 54;
                this.atom();
                this.state = 55;
                this.match(propcalcParser.IMPLIES);
                this.state = 56;
                this.atom();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    propcalcParser.prototype.variable = function () {
        var _localctx = new VariableContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, propcalcParser.RULE_variable);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 61;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === propcalcParser.LETTER) {
                    {
                        {
                            this.state = 58;
                            this.match(propcalcParser.LETTER);
                        }
                    }
                    this.state = 63;
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
    Object.defineProperty(propcalcParser, "_ATN", {
        get: function () {
            if (!propcalcParser.__ATN) {
                propcalcParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(propcalcParser._serializedATN));
            }
            return propcalcParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    propcalcParser.T__0 = 1;
    propcalcParser.AND = 2;
    propcalcParser.OR = 3;
    propcalcParser.NOT = 4;
    propcalcParser.EQ = 5;
    propcalcParser.IMPLIES = 6;
    propcalcParser.THEREFORE = 7;
    propcalcParser.EQUIV = 8;
    propcalcParser.LPAREN = 9;
    propcalcParser.RPAREN = 10;
    propcalcParser.LETTER = 11;
    propcalcParser.WS = 12;
    propcalcParser.RULE_proposition = 0;
    propcalcParser.RULE_expression = 1;
    propcalcParser.RULE_relExpression = 2;
    propcalcParser.RULE_atoms = 3;
    propcalcParser.RULE_atom = 4;
    propcalcParser.RULE_equiv = 5;
    propcalcParser.RULE_implies = 6;
    propcalcParser.RULE_variable = 7;
    // tslint:disable:no-trailing-whitespace
    propcalcParser.ruleNames = [
        "proposition", "expression", "relExpression", "atoms", "atom", "equiv",
        "implies", "variable",
    ];
    propcalcParser._LITERAL_NAMES = [
        undefined, "','", "'^'", "'v'", "'!'", "'='", "'->'", "'|-'", "'<->'",
        "'('", "')'",
    ];
    propcalcParser._SYMBOLIC_NAMES = [
        undefined, undefined, "AND", "OR", "NOT", "EQ", "IMPLIES", "THEREFORE",
        "EQUIV", "LPAREN", "RPAREN", "LETTER", "WS",
    ];
    propcalcParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(propcalcParser._LITERAL_NAMES, propcalcParser._SYMBOLIC_NAMES, []);
    propcalcParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0EC\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03" +
        "\x03\x03\x03\x07\x03\x1A\n\x03\f\x03\x0E\x03\x1D\v\x03\x03\x04\x03\x04" +
        "\x03\x04\x05\x04\"\n\x04\x03\x05\x03\x05\x03\x05\x07\x05\'\n\x05\f\x05" +
        "\x0E\x05*\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
        "\x05\x063\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03" +
        "\b\x03\t\x07\t>\n\t\f\t\x0E\tA\v\t\x03\t\x02\x02\x02\n\x02\x02\x04\x02" +
        "\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x02\x03\x03\x02\x04\x05\x02" +
        "A\x02\x12\x03\x02\x02\x02\x04\x16\x03\x02\x02\x02\x06!\x03\x02\x02\x02" +
        "\b#\x03\x02\x02\x02\n2\x03\x02\x02\x02\f4\x03\x02\x02\x02\x0E8\x03\x02" +
        "\x02\x02\x10?\x03\x02\x02\x02\x12\x13\x05\x04\x03\x02\x13\x14\x07\t\x02" +
        "\x02\x14\x15\x05\x04\x03\x02\x15\x03\x03\x02\x02\x02\x16\x1B\x05\x06\x04" +
        "\x02\x17\x18\t\x02\x02\x02\x18\x1A\x05\x06\x04\x02\x19\x17\x03\x02\x02" +
        "\x02\x1A\x1D\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1B\x1C\x03\x02\x02" +
        "\x02\x1C\x05\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1E\"\x05\n\x06\x02" +
        "\x1F\"\x05\f\x07\x02 \"\x05\x0E\b\x02!\x1E\x03\x02\x02\x02!\x1F\x03\x02" +
        "\x02\x02! \x03\x02\x02\x02\"\x07\x03\x02\x02\x02#(\x05\n\x06\x02$%\x07" +
        "\x03\x02\x02%\'\x05\n\x06\x02&$\x03\x02\x02\x02\'*\x03\x02\x02\x02(&\x03" +
        "\x02\x02\x02()\x03\x02\x02\x02)\t\x03\x02\x02\x02*(\x03\x02\x02\x02+3" +
        "\x05\x10\t\x02,-\x07\x06\x02\x02-3\x05\n\x06\x02./\x07\v\x02\x02/0\x05" +
        "\x04\x03\x0201\x07\f\x02\x0213\x03\x02\x02\x022+\x03\x02\x02\x022,\x03" +
        "\x02\x02\x022.\x03\x02\x02\x023\v\x03\x02\x02\x0245\x05\n\x06\x0256\x07" +
        "\n\x02\x0267\x05\n\x06\x027\r\x03\x02\x02\x0289\x05\n\x06\x029:\x07\b" +
        "\x02\x02:;\x05\n\x06\x02;\x0F\x03\x02\x02\x02<>\x07\r\x02\x02=<\x03\x02" +
        "\x02\x02>A\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02@\x11\x03" +
        "\x02\x02\x02A?\x03\x02\x02\x02\x07\x1B!(2?";
    return propcalcParser;
}(Parser_1.Parser));
exports.propcalcParser = propcalcParser;
var PropositionContext = /** @class */ (function (_super) {
    __extends(PropositionContext, _super);
    function PropositionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropositionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    PropositionContext.prototype.THEREFORE = function () { return this.getToken(propcalcParser.THEREFORE, 0); };
    Object.defineProperty(PropositionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return propcalcParser.RULE_proposition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PropositionContext.prototype.enterRule = function (listener) {
        if (listener.enterProposition) {
            listener.enterProposition(this);
        }
    };
    // @Override
    PropositionContext.prototype.exitRule = function (listener) {
        if (listener.exitProposition) {
            listener.exitProposition(this);
        }
    };
    // @Override
    PropositionContext.prototype.accept = function (visitor) {
        if (visitor.visitProposition) {
            return visitor.visitProposition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropositionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropositionContext = PropositionContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.relExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RelExpressionContext);
        }
        else {
            return this.getRuleContext(i, RelExpressionContext);
        }
    };
    ExpressionContext.prototype.AND = function (i) {
        if (i === undefined) {
            return this.getTokens(propcalcParser.AND);
        }
        else {
            return this.getToken(propcalcParser.AND, i);
        }
    };
    ExpressionContext.prototype.OR = function (i) {
        if (i === undefined) {
            return this.getTokens(propcalcParser.OR);
        }
        else {
            return this.getToken(propcalcParser.OR, i);
        }
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return propcalcParser.RULE_expression; },
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
var RelExpressionContext = /** @class */ (function (_super) {
    __extends(RelExpressionContext, _super);
    function RelExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RelExpressionContext.prototype.atom = function () {
        return this.tryGetRuleContext(0, AtomContext);
    };
    RelExpressionContext.prototype.equiv = function () {
        return this.tryGetRuleContext(0, EquivContext);
    };
    RelExpressionContext.prototype.implies = function () {
        return this.tryGetRuleContext(0, ImpliesContext);
    };
    Object.defineProperty(RelExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return propcalcParser.RULE_relExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RelExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterRelExpression) {
            listener.enterRelExpression(this);
        }
    };
    // @Override
    RelExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitRelExpression) {
            listener.exitRelExpression(this);
        }
    };
    // @Override
    RelExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitRelExpression) {
            return visitor.visitRelExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RelExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RelExpressionContext = RelExpressionContext;
var AtomsContext = /** @class */ (function (_super) {
    __extends(AtomsContext, _super);
    function AtomsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtomsContext.prototype.atom = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AtomContext);
        }
        else {
            return this.getRuleContext(i, AtomContext);
        }
    };
    Object.defineProperty(AtomsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return propcalcParser.RULE_atoms; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AtomsContext.prototype.enterRule = function (listener) {
        if (listener.enterAtoms) {
            listener.enterAtoms(this);
        }
    };
    // @Override
    AtomsContext.prototype.exitRule = function (listener) {
        if (listener.exitAtoms) {
            listener.exitAtoms(this);
        }
    };
    // @Override
    AtomsContext.prototype.accept = function (visitor) {
        if (visitor.visitAtoms) {
            return visitor.visitAtoms(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtomsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AtomsContext = AtomsContext;
var AtomContext = /** @class */ (function (_super) {
    __extends(AtomContext, _super);
    function AtomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtomContext.prototype.variable = function () {
        return this.tryGetRuleContext(0, VariableContext);
    };
    AtomContext.prototype.NOT = function () { return this.tryGetToken(propcalcParser.NOT, 0); };
    AtomContext.prototype.atom = function () {
        return this.tryGetRuleContext(0, AtomContext);
    };
    AtomContext.prototype.LPAREN = function () { return this.tryGetToken(propcalcParser.LPAREN, 0); };
    AtomContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    AtomContext.prototype.RPAREN = function () { return this.tryGetToken(propcalcParser.RPAREN, 0); };
    Object.defineProperty(AtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return propcalcParser.RULE_atom; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AtomContext.prototype.enterRule = function (listener) {
        if (listener.enterAtom) {
            listener.enterAtom(this);
        }
    };
    // @Override
    AtomContext.prototype.exitRule = function (listener) {
        if (listener.exitAtom) {
            listener.exitAtom(this);
        }
    };
    // @Override
    AtomContext.prototype.accept = function (visitor) {
        if (visitor.visitAtom) {
            return visitor.visitAtom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtomContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AtomContext = AtomContext;
var EquivContext = /** @class */ (function (_super) {
    __extends(EquivContext, _super);
    function EquivContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EquivContext.prototype.atom = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AtomContext);
        }
        else {
            return this.getRuleContext(i, AtomContext);
        }
    };
    EquivContext.prototype.EQUIV = function () { return this.getToken(propcalcParser.EQUIV, 0); };
    Object.defineProperty(EquivContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return propcalcParser.RULE_equiv; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EquivContext.prototype.enterRule = function (listener) {
        if (listener.enterEquiv) {
            listener.enterEquiv(this);
        }
    };
    // @Override
    EquivContext.prototype.exitRule = function (listener) {
        if (listener.exitEquiv) {
            listener.exitEquiv(this);
        }
    };
    // @Override
    EquivContext.prototype.accept = function (visitor) {
        if (visitor.visitEquiv) {
            return visitor.visitEquiv(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EquivContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EquivContext = EquivContext;
var ImpliesContext = /** @class */ (function (_super) {
    __extends(ImpliesContext, _super);
    function ImpliesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImpliesContext.prototype.atom = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AtomContext);
        }
        else {
            return this.getRuleContext(i, AtomContext);
        }
    };
    ImpliesContext.prototype.IMPLIES = function () { return this.getToken(propcalcParser.IMPLIES, 0); };
    Object.defineProperty(ImpliesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return propcalcParser.RULE_implies; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImpliesContext.prototype.enterRule = function (listener) {
        if (listener.enterImplies) {
            listener.enterImplies(this);
        }
    };
    // @Override
    ImpliesContext.prototype.exitRule = function (listener) {
        if (listener.exitImplies) {
            listener.exitImplies(this);
        }
    };
    // @Override
    ImpliesContext.prototype.accept = function (visitor) {
        if (visitor.visitImplies) {
            return visitor.visitImplies(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImpliesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImpliesContext = ImpliesContext;
var VariableContext = /** @class */ (function (_super) {
    __extends(VariableContext, _super);
    function VariableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableContext.prototype.LETTER = function (i) {
        if (i === undefined) {
            return this.getTokens(propcalcParser.LETTER);
        }
        else {
            return this.getToken(propcalcParser.LETTER, i);
        }
    };
    Object.defineProperty(VariableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return propcalcParser.RULE_variable; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableContext.prototype.enterRule = function (listener) {
        if (listener.enterVariable) {
            listener.enterVariable(this);
        }
    };
    // @Override
    VariableContext.prototype.exitRule = function (listener) {
        if (listener.exitVariable) {
            listener.exitVariable(this);
        }
    };
    // @Override
    VariableContext.prototype.accept = function (visitor) {
        if (visitor.visitVariable) {
            return visitor.visitVariable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableContext = VariableContext;
