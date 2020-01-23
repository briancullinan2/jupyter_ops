"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/bnf/bnf.g4 by ANTLR 4.7.3-SNAPSHOT
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
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var bnfParser = /** @class */ (function (_super) {
    __extends(bnfParser, _super);
    function bnfParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(bnfParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(bnfParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return bnfParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(bnfParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "bnf.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(bnfParser.prototype, "ruleNames", {
        // @Override
        get: function () { return bnfParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(bnfParser.prototype, "serializedATN", {
        // @Override
        get: function () { return bnfParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    bnfParser.prototype.rulelist = function () {
        var _localctx = new RulelistContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, bnfParser.RULE_rulelist);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 29;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === bnfParser.LT) {
                    {
                        {
                            this.state = 26;
                            this.rule_();
                        }
                    }
                    this.state = 31;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 32;
                this.match(bnfParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    bnfParser.prototype.rule_ = function () {
        var _localctx = new Rule_Context(this._ctx, this.state);
        this.enterRule(_localctx, 2, bnfParser.RULE_rule_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 34;
                this.lhs();
                this.state = 35;
                this.match(bnfParser.ASSIGN);
                this.state = 36;
                this.rhs();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    bnfParser.prototype.lhs = function () {
        var _localctx = new LhsContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, bnfParser.RULE_lhs);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 38;
                this.id();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    bnfParser.prototype.rhs = function () {
        var _localctx = new RhsContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, bnfParser.RULE_rhs);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 40;
                this.alternatives();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    bnfParser.prototype.alternatives = function () {
        var _localctx = new AlternativesContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, bnfParser.RULE_alternatives);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 42;
                this.alternative();
                this.state = 47;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === bnfParser.BAR) {
                    {
                        {
                            this.state = 43;
                            this.match(bnfParser.BAR);
                            this.state = 44;
                            this.alternative();
                        }
                    }
                    this.state = 49;
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
    bnfParser.prototype.alternative = function () {
        var _localctx = new AlternativeContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, bnfParser.RULE_alternative);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 53;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 50;
                                this.element();
                            }
                        }
                    }
                    this.state = 55;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
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
    bnfParser.prototype.element = function () {
        var _localctx = new ElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, bnfParser.RULE_element);
        try {
            this.state = 61;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case bnfParser.REND:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 56;
                        this.optional();
                    }
                    break;
                case bnfParser.RBRACE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 57;
                        this.zeroormore();
                    }
                    break;
                case bnfParser.RPAREN:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 58;
                        this.oneormore();
                    }
                    break;
                case bnfParser.ID:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 59;
                        this.text();
                    }
                    break;
                case bnfParser.LT:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 60;
                        this.id();
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
    bnfParser.prototype.optional = function () {
        var _localctx = new OptionalContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, bnfParser.RULE_optional);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 63;
                this.match(bnfParser.REND);
                this.state = 64;
                this.alternatives();
                this.state = 65;
                this.match(bnfParser.LEND);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    bnfParser.prototype.zeroormore = function () {
        var _localctx = new ZeroormoreContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, bnfParser.RULE_zeroormore);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 67;
                this.match(bnfParser.RBRACE);
                this.state = 68;
                this.alternatives();
                this.state = 69;
                this.match(bnfParser.LBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    bnfParser.prototype.oneormore = function () {
        var _localctx = new OneormoreContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, bnfParser.RULE_oneormore);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 71;
                this.match(bnfParser.RPAREN);
                this.state = 72;
                this.alternatives();
                this.state = 73;
                this.match(bnfParser.LPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    bnfParser.prototype.text = function () {
        var _localctx = new TextContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, bnfParser.RULE_text);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 75;
                this.match(bnfParser.ID);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    bnfParser.prototype.id = function () {
        var _localctx = new IdContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, bnfParser.RULE_id);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 77;
                this.match(bnfParser.LT);
                this.state = 78;
                this.ruleid();
                this.state = 79;
                this.match(bnfParser.GT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    bnfParser.prototype.ruleid = function () {
        var _localctx = new RuleidContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, bnfParser.RULE_ruleid);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 81;
                this.match(bnfParser.ID);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(bnfParser, "_ATN", {
        get: function () {
            if (!bnfParser.__ATN) {
                bnfParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(bnfParser._serializedATN));
            }
            return bnfParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    bnfParser.ASSIGN = 1;
    bnfParser.LPAREN = 2;
    bnfParser.RPAREN = 3;
    bnfParser.LBRACE = 4;
    bnfParser.RBRACE = 5;
    bnfParser.LEND = 6;
    bnfParser.REND = 7;
    bnfParser.BAR = 8;
    bnfParser.GT = 9;
    bnfParser.LT = 10;
    bnfParser.ID = 11;
    bnfParser.WS = 12;
    bnfParser.RULE_rulelist = 0;
    bnfParser.RULE_rule_ = 1;
    bnfParser.RULE_lhs = 2;
    bnfParser.RULE_rhs = 3;
    bnfParser.RULE_alternatives = 4;
    bnfParser.RULE_alternative = 5;
    bnfParser.RULE_element = 6;
    bnfParser.RULE_optional = 7;
    bnfParser.RULE_zeroormore = 8;
    bnfParser.RULE_oneormore = 9;
    bnfParser.RULE_text = 10;
    bnfParser.RULE_id = 11;
    bnfParser.RULE_ruleid = 12;
    // tslint:disable:no-trailing-whitespace
    bnfParser.ruleNames = [
        "rulelist", "rule_", "lhs", "rhs", "alternatives", "alternative", "element",
        "optional", "zeroormore", "oneormore", "text", "id", "ruleid",
    ];
    bnfParser._LITERAL_NAMES = [
        undefined, "'::='", "')'", "'('", "'}'", "'{'", "']'", "'['", "'|'", "'>'",
        "'<'",
    ];
    bnfParser._SYMBOLIC_NAMES = [
        undefined, "ASSIGN", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LEND", "REND",
        "BAR", "GT", "LT", "ID", "WS",
    ];
    bnfParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(bnfParser._LITERAL_NAMES, bnfParser._SYMBOLIC_NAMES, []);
    bnfParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0EV\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x03\x02\x07\x02\x1E\n\x02\f\x02\x0E\x02!\v\x02\x03\x02\x03" +
        "\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
        "\x06\x03\x06\x03\x06\x07\x060\n\x06\f\x06\x0E\x063\v\x06\x03\x07\x07\x07" +
        "6\n\x07\f\x07\x0E\x079\v\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b@\n\b" +
        "\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03" +
        "\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x02\x02" +
        "\x02\x0F\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
        "\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x02\x02\x02O\x02\x1F\x03\x02\x02" +
        "\x02\x04$\x03\x02\x02\x02\x06(\x03\x02\x02\x02\b*\x03\x02\x02\x02\n,\x03" +
        "\x02\x02\x02\f7\x03\x02\x02\x02\x0E?\x03\x02\x02\x02\x10A\x03\x02\x02" +
        "\x02\x12E\x03\x02\x02\x02\x14I\x03\x02\x02\x02\x16M\x03\x02\x02\x02\x18" +
        "O\x03\x02\x02\x02\x1AS\x03\x02\x02\x02\x1C\x1E\x05\x04\x03\x02\x1D\x1C" +
        "\x03\x02\x02\x02\x1E!\x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02\x1F \x03" +
        "\x02\x02\x02 \"\x03\x02\x02\x02!\x1F\x03\x02\x02\x02\"#\x07\x02\x02\x03" +
        "#\x03\x03\x02\x02\x02$%\x05\x06\x04\x02%&\x07\x03\x02\x02&\'\x05\b\x05" +
        "\x02\'\x05\x03\x02\x02\x02()\x05\x18\r\x02)\x07\x03\x02\x02\x02*+\x05" +
        "\n\x06\x02+\t\x03\x02\x02\x02,1\x05\f\x07\x02-.\x07\n\x02\x02.0\x05\f" +
        "\x07\x02/-\x03\x02\x02\x0203\x03\x02\x02\x021/\x03\x02\x02\x0212\x03\x02" +
        "\x02\x022\v\x03\x02\x02\x0231\x03\x02\x02\x0246\x05\x0E\b\x0254\x03\x02" +
        "\x02\x0269\x03\x02\x02\x0275\x03\x02\x02\x0278\x03\x02\x02\x028\r\x03" +
        "\x02\x02\x0297\x03\x02\x02\x02:@\x05\x10\t\x02;@\x05\x12\n\x02<@\x05\x14" +
        "\v\x02=@\x05\x16\f\x02>@\x05\x18\r\x02?:\x03\x02\x02\x02?;\x03\x02\x02" +
        "\x02?<\x03\x02\x02\x02?=\x03\x02\x02\x02?>\x03\x02\x02\x02@\x0F\x03\x02" +
        "\x02\x02AB\x07\t\x02\x02BC\x05\n\x06\x02CD\x07\b\x02\x02D\x11\x03\x02" +
        "\x02\x02EF\x07\x07\x02\x02FG\x05\n\x06\x02GH\x07\x06\x02\x02H\x13\x03" +
        "\x02\x02\x02IJ\x07\x05\x02\x02JK\x05\n\x06\x02KL\x07\x04\x02\x02L\x15" +
        "\x03\x02\x02\x02MN\x07\r\x02\x02N\x17\x03\x02\x02\x02OP\x07\f\x02\x02" +
        "PQ\x05\x1A\x0E\x02QR\x07\v\x02\x02R\x19\x03\x02\x02\x02ST\x07\r\x02\x02" +
        "T\x1B\x03\x02\x02\x02\x06\x1F17?";
    return bnfParser;
}(Parser_1.Parser));
exports.bnfParser = bnfParser;
var RulelistContext = /** @class */ (function (_super) {
    __extends(RulelistContext, _super);
    function RulelistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RulelistContext.prototype.EOF = function () { return this.getToken(bnfParser.EOF, 0); };
    RulelistContext.prototype.rule_ = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Rule_Context);
        }
        else {
            return this.getRuleContext(i, Rule_Context);
        }
    };
    Object.defineProperty(RulelistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bnfParser.RULE_rulelist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RulelistContext.prototype.enterRule = function (listener) {
        if (listener.enterRulelist) {
            listener.enterRulelist(this);
        }
    };
    // @Override
    RulelistContext.prototype.exitRule = function (listener) {
        if (listener.exitRulelist) {
            listener.exitRulelist(this);
        }
    };
    // @Override
    RulelistContext.prototype.accept = function (visitor) {
        if (visitor.visitRulelist) {
            return visitor.visitRulelist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RulelistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RulelistContext = RulelistContext;
var Rule_Context = /** @class */ (function (_super) {
    __extends(Rule_Context, _super);
    function Rule_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rule_Context.prototype.lhs = function () {
        return this.getRuleContext(0, LhsContext);
    };
    Rule_Context.prototype.ASSIGN = function () { return this.getToken(bnfParser.ASSIGN, 0); };
    Rule_Context.prototype.rhs = function () {
        return this.getRuleContext(0, RhsContext);
    };
    Object.defineProperty(Rule_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return bnfParser.RULE_rule_; },
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
var LhsContext = /** @class */ (function (_super) {
    __extends(LhsContext, _super);
    function LhsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LhsContext.prototype.id = function () {
        return this.getRuleContext(0, IdContext);
    };
    Object.defineProperty(LhsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bnfParser.RULE_lhs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LhsContext.prototype.enterRule = function (listener) {
        if (listener.enterLhs) {
            listener.enterLhs(this);
        }
    };
    // @Override
    LhsContext.prototype.exitRule = function (listener) {
        if (listener.exitLhs) {
            listener.exitLhs(this);
        }
    };
    // @Override
    LhsContext.prototype.accept = function (visitor) {
        if (visitor.visitLhs) {
            return visitor.visitLhs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LhsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LhsContext = LhsContext;
var RhsContext = /** @class */ (function (_super) {
    __extends(RhsContext, _super);
    function RhsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RhsContext.prototype.alternatives = function () {
        return this.getRuleContext(0, AlternativesContext);
    };
    Object.defineProperty(RhsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bnfParser.RULE_rhs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RhsContext.prototype.enterRule = function (listener) {
        if (listener.enterRhs) {
            listener.enterRhs(this);
        }
    };
    // @Override
    RhsContext.prototype.exitRule = function (listener) {
        if (listener.exitRhs) {
            listener.exitRhs(this);
        }
    };
    // @Override
    RhsContext.prototype.accept = function (visitor) {
        if (visitor.visitRhs) {
            return visitor.visitRhs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RhsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RhsContext = RhsContext;
var AlternativesContext = /** @class */ (function (_super) {
    __extends(AlternativesContext, _super);
    function AlternativesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlternativesContext.prototype.alternative = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AlternativeContext);
        }
        else {
            return this.getRuleContext(i, AlternativeContext);
        }
    };
    AlternativesContext.prototype.BAR = function (i) {
        if (i === undefined) {
            return this.getTokens(bnfParser.BAR);
        }
        else {
            return this.getToken(bnfParser.BAR, i);
        }
    };
    Object.defineProperty(AlternativesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bnfParser.RULE_alternatives; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlternativesContext.prototype.enterRule = function (listener) {
        if (listener.enterAlternatives) {
            listener.enterAlternatives(this);
        }
    };
    // @Override
    AlternativesContext.prototype.exitRule = function (listener) {
        if (listener.exitAlternatives) {
            listener.exitAlternatives(this);
        }
    };
    // @Override
    AlternativesContext.prototype.accept = function (visitor) {
        if (visitor.visitAlternatives) {
            return visitor.visitAlternatives(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlternativesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlternativesContext = AlternativesContext;
var AlternativeContext = /** @class */ (function (_super) {
    __extends(AlternativeContext, _super);
    function AlternativeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlternativeContext.prototype.element = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ElementContext);
        }
        else {
            return this.getRuleContext(i, ElementContext);
        }
    };
    Object.defineProperty(AlternativeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bnfParser.RULE_alternative; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlternativeContext.prototype.enterRule = function (listener) {
        if (listener.enterAlternative) {
            listener.enterAlternative(this);
        }
    };
    // @Override
    AlternativeContext.prototype.exitRule = function (listener) {
        if (listener.exitAlternative) {
            listener.exitAlternative(this);
        }
    };
    // @Override
    AlternativeContext.prototype.accept = function (visitor) {
        if (visitor.visitAlternative) {
            return visitor.visitAlternative(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlternativeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlternativeContext = AlternativeContext;
var ElementContext = /** @class */ (function (_super) {
    __extends(ElementContext, _super);
    function ElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementContext.prototype.optional = function () {
        return this.tryGetRuleContext(0, OptionalContext);
    };
    ElementContext.prototype.zeroormore = function () {
        return this.tryGetRuleContext(0, ZeroormoreContext);
    };
    ElementContext.prototype.oneormore = function () {
        return this.tryGetRuleContext(0, OneormoreContext);
    };
    ElementContext.prototype.text = function () {
        return this.tryGetRuleContext(0, TextContext);
    };
    ElementContext.prototype.id = function () {
        return this.tryGetRuleContext(0, IdContext);
    };
    Object.defineProperty(ElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bnfParser.RULE_element; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElementContext.prototype.enterRule = function (listener) {
        if (listener.enterElement) {
            listener.enterElement(this);
        }
    };
    // @Override
    ElementContext.prototype.exitRule = function (listener) {
        if (listener.exitElement) {
            listener.exitElement(this);
        }
    };
    // @Override
    ElementContext.prototype.accept = function (visitor) {
        if (visitor.visitElement) {
            return visitor.visitElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElementContext = ElementContext;
var OptionalContext = /** @class */ (function (_super) {
    __extends(OptionalContext, _super);
    function OptionalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptionalContext.prototype.REND = function () { return this.getToken(bnfParser.REND, 0); };
    OptionalContext.prototype.alternatives = function () {
        return this.getRuleContext(0, AlternativesContext);
    };
    OptionalContext.prototype.LEND = function () { return this.getToken(bnfParser.LEND, 0); };
    Object.defineProperty(OptionalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bnfParser.RULE_optional; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OptionalContext.prototype.enterRule = function (listener) {
        if (listener.enterOptional) {
            listener.enterOptional(this);
        }
    };
    // @Override
    OptionalContext.prototype.exitRule = function (listener) {
        if (listener.exitOptional) {
            listener.exitOptional(this);
        }
    };
    // @Override
    OptionalContext.prototype.accept = function (visitor) {
        if (visitor.visitOptional) {
            return visitor.visitOptional(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OptionalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OptionalContext = OptionalContext;
var ZeroormoreContext = /** @class */ (function (_super) {
    __extends(ZeroormoreContext, _super);
    function ZeroormoreContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ZeroormoreContext.prototype.RBRACE = function () { return this.getToken(bnfParser.RBRACE, 0); };
    ZeroormoreContext.prototype.alternatives = function () {
        return this.getRuleContext(0, AlternativesContext);
    };
    ZeroormoreContext.prototype.LBRACE = function () { return this.getToken(bnfParser.LBRACE, 0); };
    Object.defineProperty(ZeroormoreContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bnfParser.RULE_zeroormore; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ZeroormoreContext.prototype.enterRule = function (listener) {
        if (listener.enterZeroormore) {
            listener.enterZeroormore(this);
        }
    };
    // @Override
    ZeroormoreContext.prototype.exitRule = function (listener) {
        if (listener.exitZeroormore) {
            listener.exitZeroormore(this);
        }
    };
    // @Override
    ZeroormoreContext.prototype.accept = function (visitor) {
        if (visitor.visitZeroormore) {
            return visitor.visitZeroormore(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ZeroormoreContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ZeroormoreContext = ZeroormoreContext;
var OneormoreContext = /** @class */ (function (_super) {
    __extends(OneormoreContext, _super);
    function OneormoreContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OneormoreContext.prototype.RPAREN = function () { return this.getToken(bnfParser.RPAREN, 0); };
    OneormoreContext.prototype.alternatives = function () {
        return this.getRuleContext(0, AlternativesContext);
    };
    OneormoreContext.prototype.LPAREN = function () { return this.getToken(bnfParser.LPAREN, 0); };
    Object.defineProperty(OneormoreContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bnfParser.RULE_oneormore; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OneormoreContext.prototype.enterRule = function (listener) {
        if (listener.enterOneormore) {
            listener.enterOneormore(this);
        }
    };
    // @Override
    OneormoreContext.prototype.exitRule = function (listener) {
        if (listener.exitOneormore) {
            listener.exitOneormore(this);
        }
    };
    // @Override
    OneormoreContext.prototype.accept = function (visitor) {
        if (visitor.visitOneormore) {
            return visitor.visitOneormore(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OneormoreContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OneormoreContext = OneormoreContext;
var TextContext = /** @class */ (function (_super) {
    __extends(TextContext, _super);
    function TextContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TextContext.prototype.ID = function () { return this.getToken(bnfParser.ID, 0); };
    Object.defineProperty(TextContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bnfParser.RULE_text; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TextContext.prototype.enterRule = function (listener) {
        if (listener.enterText) {
            listener.enterText(this);
        }
    };
    // @Override
    TextContext.prototype.exitRule = function (listener) {
        if (listener.exitText) {
            listener.exitText(this);
        }
    };
    // @Override
    TextContext.prototype.accept = function (visitor) {
        if (visitor.visitText) {
            return visitor.visitText(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TextContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TextContext = TextContext;
var IdContext = /** @class */ (function (_super) {
    __extends(IdContext, _super);
    function IdContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdContext.prototype.LT = function () { return this.getToken(bnfParser.LT, 0); };
    IdContext.prototype.ruleid = function () {
        return this.getRuleContext(0, RuleidContext);
    };
    IdContext.prototype.GT = function () { return this.getToken(bnfParser.GT, 0); };
    Object.defineProperty(IdContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bnfParser.RULE_id; },
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
var RuleidContext = /** @class */ (function (_super) {
    __extends(RuleidContext, _super);
    function RuleidContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RuleidContext.prototype.ID = function () { return this.getToken(bnfParser.ID, 0); };
    Object.defineProperty(RuleidContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return bnfParser.RULE_ruleid; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RuleidContext.prototype.enterRule = function (listener) {
        if (listener.enterRuleid) {
            listener.enterRuleid(this);
        }
    };
    // @Override
    RuleidContext.prototype.exitRule = function (listener) {
        if (listener.exitRuleid) {
            listener.exitRuleid(this);
        }
    };
    // @Override
    RuleidContext.prototype.accept = function (visitor) {
        if (visitor.visitRuleid) {
            return visitor.visitRuleid(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RuleidContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RuleidContext = RuleidContext;
