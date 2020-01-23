"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/clif/CLIF.g4 by ANTLR 4.7.3-SNAPSHOT
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
var CLIFParser = /** @class */ (function (_super) {
    __extends(CLIFParser, _super);
    function CLIFParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(CLIFParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(CLIFParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return CLIFParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CLIFParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "CLIF.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CLIFParser.prototype, "ruleNames", {
        // @Override
        get: function () { return CLIFParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CLIFParser.prototype, "serializedATN", {
        // @Override
        get: function () { return CLIFParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    CLIFParser.prototype.termseq = function () {
        var _localctx = new TermseqContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, CLIFParser.RULE_termseq);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 44;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CLIFParser.OPEN) | (1 << CLIFParser.NUMERAL) | (1 << CLIFParser.SEQMARK) | (1 << CLIFParser.QUOTEDSTRING) | (1 << CLIFParser.ENCLOSEDNAME) | (1 << CLIFParser.NAMECHARSEQUENCE))) !== 0)) {
                    {
                        this.state = 42;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case CLIFParser.OPEN:
                            case CLIFParser.NUMERAL:
                            case CLIFParser.QUOTEDSTRING:
                            case CLIFParser.ENCLOSEDNAME:
                            case CLIFParser.NAMECHARSEQUENCE:
                                {
                                    this.state = 40;
                                    this.term();
                                }
                                break;
                            case CLIFParser.SEQMARK:
                                {
                                    this.state = 41;
                                    this.match(CLIFParser.SEQMARK);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 46;
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
    CLIFParser.prototype.interpretedname = function () {
        var _localctx = new InterpretednameContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, CLIFParser.RULE_interpretedname);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 47;
                _la = this._input.LA(1);
                if (!(_la === CLIFParser.NUMERAL || _la === CLIFParser.QUOTEDSTRING)) {
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
    CLIFParser.prototype.interpretablename = function () {
        var _localctx = new InterpretablenameContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, CLIFParser.RULE_interpretablename);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 49;
                _la = this._input.LA(1);
                if (!(_la === CLIFParser.ENCLOSEDNAME || _la === CLIFParser.NAMECHARSEQUENCE)) {
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
    CLIFParser.prototype.name = function () {
        var _localctx = new NameContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, CLIFParser.RULE_name);
        try {
            this.state = 53;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CLIFParser.NUMERAL:
                case CLIFParser.QUOTEDSTRING:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 51;
                        this.interpretedname();
                    }
                    break;
                case CLIFParser.ENCLOSEDNAME:
                case CLIFParser.NAMECHARSEQUENCE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 52;
                        this.interpretablename();
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
    CLIFParser.prototype.term = function () {
        var _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, CLIFParser.RULE_term);
        try {
            this.state = 67;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 55;
                        this.name();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 56;
                        this.match(CLIFParser.OPEN);
                        this.state = 57;
                        this.operator();
                        this.state = 58;
                        this.termseq();
                        this.state = 59;
                        this.match(CLIFParser.CLOSE);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 61;
                        this.match(CLIFParser.OPEN);
                        this.state = 62;
                        this.match(CLIFParser.CL_COMMENT);
                        this.state = 63;
                        this.match(CLIFParser.QUOTEDSTRING);
                        this.state = 64;
                        this.term();
                        this.state = 65;
                        this.match(CLIFParser.CLOSE);
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
    CLIFParser.prototype.operator = function () {
        var _localctx = new OperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, CLIFParser.RULE_operator);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 69;
                this.term();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CLIFParser.prototype.equation = function () {
        var _localctx = new EquationContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, CLIFParser.RULE_equation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 71;
                this.match(CLIFParser.OPEN);
                this.state = 72;
                this.match(CLIFParser.EQUAL);
                this.state = 73;
                this.term();
                this.state = 74;
                this.term();
                this.state = 75;
                this.match(CLIFParser.CLOSE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CLIFParser.prototype.sentence = function () {
        var _localctx = new SentenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, CLIFParser.RULE_sentence);
        try {
            this.state = 81;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 77;
                        this.atomsent();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 78;
                        this.boolsent();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 79;
                        this.quantsent();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 80;
                        this.commentsent();
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
    CLIFParser.prototype.atomsent = function () {
        var _localctx = new AtomsentContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, CLIFParser.RULE_atomsent);
        try {
            this.state = 85;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 83;
                        this.equation();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 84;
                        this.atom();
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
    CLIFParser.prototype.atom = function () {
        var _localctx = new AtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, CLIFParser.RULE_atom);
        try {
            this.state = 104;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 87;
                        this.match(CLIFParser.OPEN);
                        this.state = 88;
                        this.predicate();
                        this.state = 89;
                        this.termseq();
                        this.state = 90;
                        this.match(CLIFParser.CLOSE);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 92;
                        this.match(CLIFParser.OPEN);
                        this.state = 93;
                        this.term();
                        this.state = 94;
                        this.match(CLIFParser.OPEN);
                        this.state = 95;
                        this.match(CLIFParser.CL_ROLESET);
                        {
                            this.state = 96;
                            this.match(CLIFParser.OPEN);
                            this.state = 97;
                            this.name();
                            this.state = 98;
                            this.term();
                            this.state = 99;
                            this.match(CLIFParser.CLOSE);
                        }
                        this.state = 101;
                        this.match(CLIFParser.CLOSE);
                        this.state = 102;
                        this.match(CLIFParser.CLOSE);
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
    CLIFParser.prototype.predicate = function () {
        var _localctx = new PredicateContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, CLIFParser.RULE_predicate);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 106;
                this.term();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CLIFParser.prototype.boolsent = function () {
        var _localctx = new BoolsentContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, CLIFParser.RULE_boolsent);
        var _la;
        try {
            this.state = 128;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 108;
                        this.match(CLIFParser.OPEN);
                        this.state = 109;
                        _la = this._input.LA(1);
                        if (!(_la === CLIFParser.AND || _la === CLIFParser.OR)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 113;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === CLIFParser.OPEN) {
                            {
                                {
                                    this.state = 110;
                                    this.sentence();
                                }
                            }
                            this.state = 115;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 116;
                        this.match(CLIFParser.CLOSE);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 117;
                        this.match(CLIFParser.OPEN);
                        this.state = 118;
                        _la = this._input.LA(1);
                        if (!(_la === CLIFParser.IFF || _la === CLIFParser.IF)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 119;
                        this.sentence();
                        this.state = 120;
                        this.sentence();
                        this.state = 121;
                        this.match(CLIFParser.CLOSE);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 123;
                        this.match(CLIFParser.OPEN);
                        this.state = 124;
                        this.match(CLIFParser.NOT);
                        this.state = 125;
                        this.sentence();
                        this.state = 126;
                        this.match(CLIFParser.CLOSE);
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
    CLIFParser.prototype.quantsent = function () {
        var _localctx = new QuantsentContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, CLIFParser.RULE_quantsent);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 130;
                this.match(CLIFParser.OPEN);
                this.state = 131;
                _la = this._input.LA(1);
                if (!(_la === CLIFParser.FORALL || _la === CLIFParser.EXISTS)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 133;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CLIFParser.ENCLOSEDNAME || _la === CLIFParser.NAMECHARSEQUENCE) {
                    {
                        this.state = 132;
                        this.interpretablename();
                    }
                }
                this.state = 135;
                this.boundlist();
                this.state = 136;
                this.sentence();
                this.state = 137;
                this.match(CLIFParser.CLOSE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CLIFParser.prototype.boundlist = function () {
        var _localctx = new BoundlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, CLIFParser.RULE_boundlist);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 139;
                this.match(CLIFParser.OPEN);
                this.state = 152;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CLIFParser.OPEN) | (1 << CLIFParser.SEQMARK) | (1 << CLIFParser.ENCLOSEDNAME) | (1 << CLIFParser.NAMECHARSEQUENCE))) !== 0)) {
                    {
                        this.state = 150;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case CLIFParser.ENCLOSEDNAME:
                            case CLIFParser.NAMECHARSEQUENCE:
                                {
                                    this.state = 140;
                                    this.interpretablename();
                                }
                                break;
                            case CLIFParser.SEQMARK:
                                {
                                    this.state = 141;
                                    this.match(CLIFParser.SEQMARK);
                                }
                                break;
                            case CLIFParser.OPEN:
                                {
                                    this.state = 142;
                                    this.match(CLIFParser.OPEN);
                                    this.state = 145;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case CLIFParser.ENCLOSEDNAME:
                                        case CLIFParser.NAMECHARSEQUENCE:
                                            {
                                                this.state = 143;
                                                this.interpretablename();
                                            }
                                            break;
                                        case CLIFParser.SEQMARK:
                                            {
                                                this.state = 144;
                                                this.match(CLIFParser.SEQMARK);
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                    this.state = 147;
                                    this.term();
                                    this.state = 148;
                                    this.match(CLIFParser.CLOSE);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 154;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 155;
                this.match(CLIFParser.CLOSE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CLIFParser.prototype.commentsent = function () {
        var _localctx = new CommentsentContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, CLIFParser.RULE_commentsent);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 157;
                this.match(CLIFParser.OPEN);
                this.state = 158;
                this.match(CLIFParser.CL_COMMENT);
                this.state = 159;
                this.match(CLIFParser.ENCLOSEDNAME);
                this.state = 160;
                this.sentence();
                this.state = 161;
                this.match(CLIFParser.CLOSE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CLIFParser.prototype.module = function () {
        var _localctx = new ModuleContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, CLIFParser.RULE_module);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 163;
                this.match(CLIFParser.OPEN);
                this.state = 164;
                this.match(CLIFParser.CL_MODULE);
                this.state = 165;
                this.interpretablename();
                this.state = 175;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                    case 1:
                        {
                            this.state = 166;
                            this.match(CLIFParser.OPEN);
                            this.state = 167;
                            this.match(CLIFParser.CL_EXCLUDES);
                            this.state = 171;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CLIFParser.NUMERAL) | (1 << CLIFParser.QUOTEDSTRING) | (1 << CLIFParser.ENCLOSEDNAME) | (1 << CLIFParser.NAMECHARSEQUENCE))) !== 0)) {
                                {
                                    {
                                        this.state = 168;
                                        this.name();
                                    }
                                }
                                this.state = 173;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 174;
                            this.match(CLIFParser.CLOSE);
                        }
                        break;
                }
                this.state = 178;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CLIFParser.OPEN) {
                    {
                        this.state = 177;
                        this.cltext();
                    }
                }
                this.state = 180;
                this.match(CLIFParser.CLOSE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CLIFParser.prototype.phrase = function () {
        var _localctx = new PhraseContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, CLIFParser.RULE_phrase);
        var _la;
        try {
            this.state = 196;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 182;
                        this.sentence();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 183;
                        this.module();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 184;
                        this.match(CLIFParser.OPEN);
                        this.state = 185;
                        this.match(CLIFParser.CL_IMPORTS);
                        this.state = 186;
                        this.interpretablename();
                        this.state = 187;
                        this.match(CLIFParser.CLOSE);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 189;
                        this.match(CLIFParser.OPEN);
                        this.state = 190;
                        this.match(CLIFParser.CL_COMMENT);
                        this.state = 191;
                        this.match(CLIFParser.ENCLOSEDNAME);
                        this.state = 193;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CLIFParser.OPEN) {
                            {
                                this.state = 192;
                                this.cltext();
                            }
                        }
                        this.state = 195;
                        this.match(CLIFParser.CLOSE);
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
    CLIFParser.prototype.text = function () {
        var _localctx = new TextContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, CLIFParser.RULE_text);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 199;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 198;
                            this.phrase();
                        }
                    }
                    this.state = 201;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === CLIFParser.OPEN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CLIFParser.prototype.cltext = function () {
        var _localctx = new CltextContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, CLIFParser.RULE_cltext);
        try {
            this.state = 206;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 203;
                        this.module();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 204;
                        this.namedtext();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 205;
                        this.text();
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
    CLIFParser.prototype.namedtext = function () {
        var _localctx = new NamedtextContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, CLIFParser.RULE_namedtext);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 208;
                this.match(CLIFParser.OPEN);
                this.state = 209;
                this.match(CLIFParser.CL_TEXT);
                this.state = 210;
                this.interpretablename();
                this.state = 212;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CLIFParser.OPEN) {
                    {
                        this.state = 211;
                        this.text();
                    }
                }
                this.state = 214;
                this.match(CLIFParser.CLOSE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(CLIFParser, "_ATN", {
        get: function () {
            if (!CLIFParser.__ATN) {
                CLIFParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(CLIFParser._serializedATN));
            }
            return CLIFParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    CLIFParser.OPEN = 1;
    CLIFParser.CLOSE = 2;
    CLIFParser.STRINGQUOTE = 3;
    CLIFParser.NAMEQUOTE = 4;
    CLIFParser.BACKSLASH = 5;
    CLIFParser.NUMERAL = 6;
    CLIFParser.SEQMARK = 7;
    CLIFParser.QUOTEDSTRING = 8;
    CLIFParser.ENCLOSEDNAME = 9;
    CLIFParser.EQUAL = 10;
    CLIFParser.AND = 11;
    CLIFParser.OR = 12;
    CLIFParser.IFF = 13;
    CLIFParser.IF = 14;
    CLIFParser.FORALL = 15;
    CLIFParser.EXISTS = 16;
    CLIFParser.NOT = 17;
    CLIFParser.CL_ROLESET = 18;
    CLIFParser.CL_TEXT = 19;
    CLIFParser.CL_IMPORTS = 20;
    CLIFParser.CL_EXCLUDES = 21;
    CLIFParser.CL_MODULE = 22;
    CLIFParser.CL_COMMENT = 23;
    CLIFParser.CL_PREFIX = 24;
    CLIFParser.NAMECHARSEQUENCE = 25;
    CLIFParser.WHITE = 26;
    CLIFParser.BLOCKCOMMENT = 27;
    CLIFParser.LineComment = 28;
    CLIFParser.RULE_termseq = 0;
    CLIFParser.RULE_interpretedname = 1;
    CLIFParser.RULE_interpretablename = 2;
    CLIFParser.RULE_name = 3;
    CLIFParser.RULE_term = 4;
    CLIFParser.RULE_operator = 5;
    CLIFParser.RULE_equation = 6;
    CLIFParser.RULE_sentence = 7;
    CLIFParser.RULE_atomsent = 8;
    CLIFParser.RULE_atom = 9;
    CLIFParser.RULE_predicate = 10;
    CLIFParser.RULE_boolsent = 11;
    CLIFParser.RULE_quantsent = 12;
    CLIFParser.RULE_boundlist = 13;
    CLIFParser.RULE_commentsent = 14;
    CLIFParser.RULE_module = 15;
    CLIFParser.RULE_phrase = 16;
    CLIFParser.RULE_text = 17;
    CLIFParser.RULE_cltext = 18;
    CLIFParser.RULE_namedtext = 19;
    // tslint:disable:no-trailing-whitespace
    CLIFParser.ruleNames = [
        "termseq", "interpretedname", "interpretablename", "name", "term", "operator",
        "equation", "sentence", "atomsent", "atom", "predicate", "boolsent", "quantsent",
        "boundlist", "commentsent", "module", "phrase", "text", "cltext", "namedtext",
    ];
    CLIFParser._LITERAL_NAMES = [
        undefined, "'('", "')'", "'''", "'\"'", "'\\'", undefined, undefined,
        undefined, undefined, "'='", "'and'", "'or'", "'iff'", "'if'", "'forall'",
        "'exists'", "'not'", "'cl-roleset'", "'cl-text'", "'cl-imports'", "'cl-excludes'",
        "'cl-module'", "'cl-comment'", "'cl-prefix'",
    ];
    CLIFParser._SYMBOLIC_NAMES = [
        undefined, "OPEN", "CLOSE", "STRINGQUOTE", "NAMEQUOTE", "BACKSLASH", "NUMERAL",
        "SEQMARK", "QUOTEDSTRING", "ENCLOSEDNAME", "EQUAL", "AND", "OR", "IFF",
        "IF", "FORALL", "EXISTS", "NOT", "CL_ROLESET", "CL_TEXT", "CL_IMPORTS",
        "CL_EXCLUDES", "CL_MODULE", "CL_COMMENT", "CL_PREFIX", "NAMECHARSEQUENCE",
        "WHITE", "BLOCKCOMMENT", "LineComment",
    ];
    CLIFParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(CLIFParser._LITERAL_NAMES, CLIFParser._SYMBOLIC_NAMES, []);
    CLIFParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1E\xDB\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x07\x02-\n\x02" +
        "\f\x02\x0E\x020\v\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05" +
        "\x05\x058\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
        "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06F\n\x06\x03\x07\x03\x07" +
        "\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x05\tT\n" +
        "\t\x03\n\x03\n\x05\nX\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
        "\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\vk\n\v\x03" +
        "\f\x03\f\x03\r\x03\r\x03\r\x07\rr\n\r\f\r\x0E\ru\v\r\x03\r\x03\r\x03\r" +
        "\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\x83\n\r\x03" +
        "\x0E\x03\x0E\x03\x0E\x05\x0E\x88\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
        "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\x94\n\x0F\x03" +
        "\x0F\x03\x0F\x03\x0F\x07\x0F\x99\n\x0F\f\x0F\x0E\x0F\x9C\v\x0F\x03\x0F" +
        "\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11" +
        "\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\xAC\n\x11\f\x11\x0E\x11\xAF\v" +
        "\x11\x03\x11\x05\x11\xB2\n\x11\x03\x11\x05\x11\xB5\n\x11\x03\x11\x03\x11" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x05\x12\xC4\n\x12\x03\x12\x05\x12\xC7\n\x12\x03\x13\x06" +
        "\x13\xCA\n\x13\r\x13\x0E\x13\xCB\x03\x14\x03\x14\x03\x14\x05\x14\xD1\n" +
        "\x14\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\xD7\n\x15\x03\x15\x03\x15" +
        "\x03\x15\x02\x02\x02\x16\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
        "\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
        "\x02\"\x02$\x02&\x02(\x02\x02\x07\x04\x02\b\b\n\n\x04\x02\v\v\x1B\x1B" +
        "\x03\x02\r\x0E\x03\x02\x0F\x10\x03\x02\x11\x12\x02\xE3\x02.\x03\x02\x02" +
        "\x02\x041\x03\x02\x02\x02\x063\x03\x02\x02\x02\b7\x03\x02\x02\x02\nE\x03" +
        "\x02\x02\x02\fG\x03\x02\x02\x02\x0EI\x03\x02\x02\x02\x10S\x03\x02\x02" +
        "\x02\x12W\x03\x02\x02\x02\x14j\x03\x02\x02\x02\x16l\x03\x02\x02\x02\x18" +
        "\x82\x03\x02\x02\x02\x1A\x84\x03\x02\x02\x02\x1C\x8D\x03\x02\x02\x02\x1E" +
        "\x9F\x03\x02\x02\x02 \xA5\x03\x02\x02\x02\"\xC6\x03\x02\x02\x02$\xC9\x03" +
        "\x02\x02\x02&\xD0\x03\x02\x02\x02(\xD2\x03\x02\x02\x02*-\x05\n\x06\x02" +
        "+-\x07\t\x02\x02,*\x03\x02\x02\x02,+\x03\x02\x02\x02-0\x03\x02\x02\x02" +
        ".,\x03\x02\x02\x02./\x03\x02\x02\x02/\x03\x03\x02\x02\x020.\x03\x02\x02" +
        "\x0212\t\x02\x02\x022\x05\x03\x02\x02\x0234\t\x03\x02\x024\x07\x03\x02" +
        "\x02\x0258\x05\x04\x03\x0268\x05\x06\x04\x0275\x03\x02\x02\x0276\x03\x02" +
        "\x02\x028\t\x03\x02\x02\x029F\x05\b\x05\x02:;\x07\x03\x02\x02;<\x05\f" +
        "\x07\x02<=\x05\x02\x02\x02=>\x07\x04\x02\x02>F\x03\x02\x02\x02?@\x07\x03" +
        "\x02\x02@A\x07\x19\x02\x02AB\x07\n\x02\x02BC\x05\n\x06\x02CD\x07\x04\x02" +
        "\x02DF\x03\x02\x02\x02E9\x03\x02\x02\x02E:\x03\x02\x02\x02E?\x03\x02\x02" +
        "\x02F\v\x03\x02\x02\x02GH\x05\n\x06\x02H\r\x03\x02\x02\x02IJ\x07\x03\x02" +
        "\x02JK\x07\f\x02\x02KL\x05\n\x06\x02LM\x05\n\x06\x02MN\x07\x04\x02\x02" +
        "N\x0F\x03\x02\x02\x02OT\x05\x12\n\x02PT\x05\x18\r\x02QT\x05\x1A\x0E\x02" +
        "RT\x05\x1E\x10\x02SO\x03\x02\x02\x02SP\x03\x02\x02\x02SQ\x03\x02\x02\x02" +
        "SR\x03\x02\x02\x02T\x11\x03\x02\x02\x02UX\x05\x0E\b\x02VX\x05\x14\v\x02" +
        "WU\x03\x02\x02\x02WV\x03\x02\x02\x02X\x13\x03\x02\x02\x02YZ\x07\x03\x02" +
        "\x02Z[\x05\x16\f\x02[\\\x05\x02\x02\x02\\]\x07\x04\x02\x02]k\x03\x02\x02" +
        "\x02^_\x07\x03\x02\x02_`\x05\n\x06\x02`a\x07\x03\x02\x02ab\x07\x14\x02" +
        "\x02bc\x07\x03\x02\x02cd\x05\b\x05\x02de\x05\n\x06\x02ef\x07\x04\x02\x02" +
        "fg\x03\x02\x02\x02gh\x07\x04\x02\x02hi\x07\x04\x02\x02ik\x03\x02\x02\x02" +
        "jY\x03\x02\x02\x02j^\x03\x02\x02\x02k\x15\x03\x02\x02\x02lm\x05\n\x06" +
        "\x02m\x17\x03\x02\x02\x02no\x07\x03\x02\x02os\t\x04\x02\x02pr\x05\x10" +
        "\t\x02qp\x03\x02\x02\x02ru\x03\x02\x02\x02sq\x03\x02\x02\x02st\x03\x02" +
        "\x02\x02tv\x03\x02\x02\x02us\x03\x02\x02\x02v\x83\x07\x04\x02\x02wx\x07" +
        "\x03\x02\x02xy\t\x05\x02\x02yz\x05\x10\t\x02z{\x05\x10\t\x02{|\x07\x04" +
        "\x02\x02|\x83\x03\x02\x02\x02}~\x07\x03\x02\x02~\x7F\x07\x13\x02\x02\x7F" +
        "\x80\x05\x10\t\x02\x80\x81\x07\x04\x02\x02\x81\x83\x03\x02\x02\x02\x82" +
        "n\x03\x02\x02\x02\x82w\x03\x02\x02\x02\x82}\x03\x02\x02\x02\x83\x19\x03" +
        "\x02\x02\x02\x84\x85\x07\x03\x02\x02\x85\x87\t\x06\x02\x02\x86\x88\x05" +
        "\x06\x04\x02\x87\x86\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x89\x03" +
        "\x02\x02\x02\x89\x8A\x05\x1C\x0F\x02\x8A\x8B\x05\x10\t\x02\x8B\x8C\x07" +
        "\x04\x02\x02\x8C\x1B\x03\x02\x02\x02\x8D\x9A\x07\x03\x02\x02\x8E\x99\x05" +
        "\x06\x04\x02\x8F\x99\x07\t\x02\x02\x90\x93\x07\x03\x02\x02\x91\x94\x05" +
        "\x06\x04\x02\x92\x94\x07\t\x02\x02\x93\x91\x03\x02\x02\x02\x93\x92\x03" +
        "\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x96\x05\n\x06\x02\x96\x97\x07" +
        "\x04\x02\x02\x97\x99\x03\x02\x02\x02\x98\x8E\x03\x02\x02\x02\x98\x8F\x03" +
        "\x02\x02\x02\x98\x90\x03\x02\x02\x02\x99\x9C\x03\x02\x02\x02\x9A\x98\x03" +
        "\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9D\x03\x02\x02\x02\x9C\x9A\x03" +
        "\x02\x02\x02\x9D\x9E\x07\x04\x02\x02\x9E\x1D\x03\x02\x02\x02\x9F\xA0\x07" +
        "\x03\x02\x02\xA0\xA1\x07\x19\x02\x02\xA1\xA2\x07\v\x02\x02\xA2\xA3\x05" +
        "\x10\t\x02\xA3\xA4\x07\x04\x02\x02\xA4\x1F\x03\x02\x02\x02\xA5\xA6\x07" +
        "\x03\x02\x02\xA6\xA7\x07\x18\x02\x02\xA7\xB1\x05\x06\x04\x02\xA8\xA9\x07" +
        "\x03\x02\x02\xA9\xAD\x07\x17\x02\x02\xAA\xAC\x05\b\x05\x02\xAB\xAA\x03" +
        "\x02\x02\x02\xAC\xAF\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAD\xAE\x03" +
        "\x02\x02\x02\xAE\xB0\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xB0\xB2\x07" +
        "\x04\x02\x02\xB1\xA8\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB4\x03" +
        "\x02\x02\x02\xB3\xB5\x05&\x14\x02\xB4\xB3\x03\x02\x02\x02\xB4\xB5\x03" +
        "\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB7\x07\x04\x02\x02\xB7!\x03" +
        "\x02\x02\x02\xB8\xC7\x05\x10\t\x02\xB9\xC7\x05 \x11\x02\xBA\xBB\x07\x03" +
        "\x02\x02\xBB\xBC\x07\x16\x02\x02\xBC\xBD\x05\x06\x04\x02\xBD\xBE\x07\x04" +
        "\x02\x02\xBE\xC7\x03\x02\x02\x02\xBF\xC0\x07\x03\x02\x02\xC0\xC1\x07\x19" +
        "\x02\x02\xC1\xC3\x07\v\x02\x02\xC2\xC4\x05&\x14\x02\xC3\xC2\x03\x02\x02" +
        "\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC7\x07\x04\x02" +
        "\x02\xC6\xB8\x03\x02\x02\x02\xC6\xB9\x03\x02\x02\x02\xC6\xBA\x03\x02\x02" +
        "\x02\xC6\xBF\x03\x02\x02\x02\xC7#\x03\x02\x02\x02\xC8\xCA\x05\"\x12\x02" +
        "\xC9\xC8\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02" +
        "\xCB\xCC\x03\x02\x02\x02\xCC%\x03\x02\x02\x02\xCD\xD1\x05 \x11\x02\xCE" +
        "\xD1\x05(\x15\x02\xCF\xD1\x05$\x13\x02\xD0\xCD\x03\x02\x02\x02\xD0\xCE" +
        "\x03\x02\x02\x02\xD0\xCF\x03\x02\x02\x02\xD1\'\x03\x02\x02\x02\xD2\xD3" +
        "\x07\x03\x02\x02\xD3\xD4\x07\x15\x02\x02\xD4\xD6\x05\x06\x04\x02\xD5\xD7" +
        "\x05$\x13\x02\xD6\xD5\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD8" +
        "\x03\x02\x02\x02\xD8\xD9\x07\x04\x02\x02\xD9)\x03\x02\x02\x02\x17,.7E" +
        "SWjs\x82\x87\x93\x98\x9A\xAD\xB1\xB4\xC3\xC6\xCB\xD0\xD6";
    return CLIFParser;
}(Parser_1.Parser));
exports.CLIFParser = CLIFParser;
var TermseqContext = /** @class */ (function (_super) {
    __extends(TermseqContext, _super);
    function TermseqContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TermseqContext.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    TermseqContext.prototype.SEQMARK = function (i) {
        if (i === undefined) {
            return this.getTokens(CLIFParser.SEQMARK);
        }
        else {
            return this.getToken(CLIFParser.SEQMARK, i);
        }
    };
    Object.defineProperty(TermseqContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CLIFParser.RULE_termseq; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TermseqContext.prototype.enterRule = function (listener) {
        if (listener.enterTermseq) {
            listener.enterTermseq(this);
        }
    };
    // @Override
    TermseqContext.prototype.exitRule = function (listener) {
        if (listener.exitTermseq) {
            listener.exitTermseq(this);
        }
    };
    // @Override
    TermseqContext.prototype.accept = function (visitor) {
        if (visitor.visitTermseq) {
            return visitor.visitTermseq(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TermseqContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TermseqContext = TermseqContext;
var InterpretednameContext = /** @class */ (function (_super) {
    __extends(InterpretednameContext, _super);
    function InterpretednameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InterpretednameContext.prototype.NUMERAL = function () { return this.tryGetToken(CLIFParser.NUMERAL, 0); };
    InterpretednameContext.prototype.QUOTEDSTRING = function () { return this.tryGetToken(CLIFParser.QUOTEDSTRING, 0); };
    Object.defineProperty(InterpretednameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CLIFParser.RULE_interpretedname; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InterpretednameContext.prototype.enterRule = function (listener) {
        if (listener.enterInterpretedname) {
            listener.enterInterpretedname(this);
        }
    };
    // @Override
    InterpretednameContext.prototype.exitRule = function (listener) {
        if (listener.exitInterpretedname) {
            listener.exitInterpretedname(this);
        }
    };
    // @Override
    InterpretednameContext.prototype.accept = function (visitor) {
        if (visitor.visitInterpretedname) {
            return visitor.visitInterpretedname(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InterpretednameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InterpretednameContext = InterpretednameContext;
var InterpretablenameContext = /** @class */ (function (_super) {
    __extends(InterpretablenameContext, _super);
    function InterpretablenameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InterpretablenameContext.prototype.NAMECHARSEQUENCE = function () { return this.tryGetToken(CLIFParser.NAMECHARSEQUENCE, 0); };
    InterpretablenameContext.prototype.ENCLOSEDNAME = function () { return this.tryGetToken(CLIFParser.ENCLOSEDNAME, 0); };
    Object.defineProperty(InterpretablenameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CLIFParser.RULE_interpretablename; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InterpretablenameContext.prototype.enterRule = function (listener) {
        if (listener.enterInterpretablename) {
            listener.enterInterpretablename(this);
        }
    };
    // @Override
    InterpretablenameContext.prototype.exitRule = function (listener) {
        if (listener.exitInterpretablename) {
            listener.exitInterpretablename(this);
        }
    };
    // @Override
    InterpretablenameContext.prototype.accept = function (visitor) {
        if (visitor.visitInterpretablename) {
            return visitor.visitInterpretablename(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InterpretablenameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InterpretablenameContext = InterpretablenameContext;
var NameContext = /** @class */ (function (_super) {
    __extends(NameContext, _super);
    function NameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NameContext.prototype.interpretedname = function () {
        return this.tryGetRuleContext(0, InterpretednameContext);
    };
    NameContext.prototype.interpretablename = function () {
        return this.tryGetRuleContext(0, InterpretablenameContext);
    };
    Object.defineProperty(NameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CLIFParser.RULE_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NameContext.prototype.enterRule = function (listener) {
        if (listener.enterName) {
            listener.enterName(this);
        }
    };
    // @Override
    NameContext.prototype.exitRule = function (listener) {
        if (listener.exitName) {
            listener.exitName(this);
        }
    };
    // @Override
    NameContext.prototype.accept = function (visitor) {
        if (visitor.visitName) {
            return visitor.visitName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NameContext = NameContext;
var TermContext = /** @class */ (function (_super) {
    __extends(TermContext, _super);
    function TermContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TermContext.prototype.name = function () {
        return this.tryGetRuleContext(0, NameContext);
    };
    TermContext.prototype.OPEN = function () { return this.tryGetToken(CLIFParser.OPEN, 0); };
    TermContext.prototype.operator = function () {
        return this.tryGetRuleContext(0, OperatorContext);
    };
    TermContext.prototype.termseq = function () {
        return this.tryGetRuleContext(0, TermseqContext);
    };
    TermContext.prototype.CLOSE = function () { return this.tryGetToken(CLIFParser.CLOSE, 0); };
    TermContext.prototype.CL_COMMENT = function () { return this.tryGetToken(CLIFParser.CL_COMMENT, 0); };
    TermContext.prototype.QUOTEDSTRING = function () { return this.tryGetToken(CLIFParser.QUOTEDSTRING, 0); };
    TermContext.prototype.term = function () {
        return this.tryGetRuleContext(0, TermContext);
    };
    Object.defineProperty(TermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CLIFParser.RULE_term; },
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
var OperatorContext = /** @class */ (function (_super) {
    __extends(OperatorContext, _super);
    function OperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OperatorContext.prototype.term = function () {
        return this.getRuleContext(0, TermContext);
    };
    Object.defineProperty(OperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CLIFParser.RULE_operator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterOperator) {
            listener.enterOperator(this);
        }
    };
    // @Override
    OperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitOperator) {
            listener.exitOperator(this);
        }
    };
    // @Override
    OperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitOperator) {
            return visitor.visitOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperatorContext = OperatorContext;
var EquationContext = /** @class */ (function (_super) {
    __extends(EquationContext, _super);
    function EquationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EquationContext.prototype.OPEN = function () { return this.getToken(CLIFParser.OPEN, 0); };
    EquationContext.prototype.EQUAL = function () { return this.getToken(CLIFParser.EQUAL, 0); };
    EquationContext.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    EquationContext.prototype.CLOSE = function () { return this.getToken(CLIFParser.CLOSE, 0); };
    Object.defineProperty(EquationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CLIFParser.RULE_equation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EquationContext.prototype.enterRule = function (listener) {
        if (listener.enterEquation) {
            listener.enterEquation(this);
        }
    };
    // @Override
    EquationContext.prototype.exitRule = function (listener) {
        if (listener.exitEquation) {
            listener.exitEquation(this);
        }
    };
    // @Override
    EquationContext.prototype.accept = function (visitor) {
        if (visitor.visitEquation) {
            return visitor.visitEquation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EquationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EquationContext = EquationContext;
var SentenceContext = /** @class */ (function (_super) {
    __extends(SentenceContext, _super);
    function SentenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SentenceContext.prototype.atomsent = function () {
        return this.tryGetRuleContext(0, AtomsentContext);
    };
    SentenceContext.prototype.boolsent = function () {
        return this.tryGetRuleContext(0, BoolsentContext);
    };
    SentenceContext.prototype.quantsent = function () {
        return this.tryGetRuleContext(0, QuantsentContext);
    };
    SentenceContext.prototype.commentsent = function () {
        return this.tryGetRuleContext(0, CommentsentContext);
    };
    Object.defineProperty(SentenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CLIFParser.RULE_sentence; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SentenceContext.prototype.enterRule = function (listener) {
        if (listener.enterSentence) {
            listener.enterSentence(this);
        }
    };
    // @Override
    SentenceContext.prototype.exitRule = function (listener) {
        if (listener.exitSentence) {
            listener.exitSentence(this);
        }
    };
    // @Override
    SentenceContext.prototype.accept = function (visitor) {
        if (visitor.visitSentence) {
            return visitor.visitSentence(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SentenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SentenceContext = SentenceContext;
var AtomsentContext = /** @class */ (function (_super) {
    __extends(AtomsentContext, _super);
    function AtomsentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtomsentContext.prototype.equation = function () {
        return this.tryGetRuleContext(0, EquationContext);
    };
    AtomsentContext.prototype.atom = function () {
        return this.tryGetRuleContext(0, AtomContext);
    };
    Object.defineProperty(AtomsentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CLIFParser.RULE_atomsent; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AtomsentContext.prototype.enterRule = function (listener) {
        if (listener.enterAtomsent) {
            listener.enterAtomsent(this);
        }
    };
    // @Override
    AtomsentContext.prototype.exitRule = function (listener) {
        if (listener.exitAtomsent) {
            listener.exitAtomsent(this);
        }
    };
    // @Override
    AtomsentContext.prototype.accept = function (visitor) {
        if (visitor.visitAtomsent) {
            return visitor.visitAtomsent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtomsentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AtomsentContext = AtomsentContext;
var AtomContext = /** @class */ (function (_super) {
    __extends(AtomContext, _super);
    function AtomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtomContext.prototype.OPEN = function (i) {
        if (i === undefined) {
            return this.getTokens(CLIFParser.OPEN);
        }
        else {
            return this.getToken(CLIFParser.OPEN, i);
        }
    };
    AtomContext.prototype.predicate = function () {
        return this.tryGetRuleContext(0, PredicateContext);
    };
    AtomContext.prototype.termseq = function () {
        return this.tryGetRuleContext(0, TermseqContext);
    };
    AtomContext.prototype.CLOSE = function (i) {
        if (i === undefined) {
            return this.getTokens(CLIFParser.CLOSE);
        }
        else {
            return this.getToken(CLIFParser.CLOSE, i);
        }
    };
    AtomContext.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    AtomContext.prototype.CL_ROLESET = function () { return this.tryGetToken(CLIFParser.CL_ROLESET, 0); };
    AtomContext.prototype.name = function () {
        return this.tryGetRuleContext(0, NameContext);
    };
    Object.defineProperty(AtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CLIFParser.RULE_atom; },
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
var PredicateContext = /** @class */ (function (_super) {
    __extends(PredicateContext, _super);
    function PredicateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PredicateContext.prototype.term = function () {
        return this.getRuleContext(0, TermContext);
    };
    Object.defineProperty(PredicateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CLIFParser.RULE_predicate; },
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
var BoolsentContext = /** @class */ (function (_super) {
    __extends(BoolsentContext, _super);
    function BoolsentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BoolsentContext.prototype.OPEN = function () { return this.getToken(CLIFParser.OPEN, 0); };
    BoolsentContext.prototype.CLOSE = function () { return this.getToken(CLIFParser.CLOSE, 0); };
    BoolsentContext.prototype.AND = function () { return this.tryGetToken(CLIFParser.AND, 0); };
    BoolsentContext.prototype.OR = function () { return this.tryGetToken(CLIFParser.OR, 0); };
    BoolsentContext.prototype.sentence = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SentenceContext);
        }
        else {
            return this.getRuleContext(i, SentenceContext);
        }
    };
    BoolsentContext.prototype.IF = function () { return this.tryGetToken(CLIFParser.IF, 0); };
    BoolsentContext.prototype.IFF = function () { return this.tryGetToken(CLIFParser.IFF, 0); };
    BoolsentContext.prototype.NOT = function () { return this.tryGetToken(CLIFParser.NOT, 0); };
    Object.defineProperty(BoolsentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CLIFParser.RULE_boolsent; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BoolsentContext.prototype.enterRule = function (listener) {
        if (listener.enterBoolsent) {
            listener.enterBoolsent(this);
        }
    };
    // @Override
    BoolsentContext.prototype.exitRule = function (listener) {
        if (listener.exitBoolsent) {
            listener.exitBoolsent(this);
        }
    };
    // @Override
    BoolsentContext.prototype.accept = function (visitor) {
        if (visitor.visitBoolsent) {
            return visitor.visitBoolsent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BoolsentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BoolsentContext = BoolsentContext;
var QuantsentContext = /** @class */ (function (_super) {
    __extends(QuantsentContext, _super);
    function QuantsentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QuantsentContext.prototype.OPEN = function () { return this.getToken(CLIFParser.OPEN, 0); };
    QuantsentContext.prototype.boundlist = function () {
        return this.getRuleContext(0, BoundlistContext);
    };
    QuantsentContext.prototype.sentence = function () {
        return this.getRuleContext(0, SentenceContext);
    };
    QuantsentContext.prototype.CLOSE = function () { return this.getToken(CLIFParser.CLOSE, 0); };
    QuantsentContext.prototype.FORALL = function () { return this.tryGetToken(CLIFParser.FORALL, 0); };
    QuantsentContext.prototype.EXISTS = function () { return this.tryGetToken(CLIFParser.EXISTS, 0); };
    QuantsentContext.prototype.interpretablename = function () {
        return this.tryGetRuleContext(0, InterpretablenameContext);
    };
    Object.defineProperty(QuantsentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CLIFParser.RULE_quantsent; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QuantsentContext.prototype.enterRule = function (listener) {
        if (listener.enterQuantsent) {
            listener.enterQuantsent(this);
        }
    };
    // @Override
    QuantsentContext.prototype.exitRule = function (listener) {
        if (listener.exitQuantsent) {
            listener.exitQuantsent(this);
        }
    };
    // @Override
    QuantsentContext.prototype.accept = function (visitor) {
        if (visitor.visitQuantsent) {
            return visitor.visitQuantsent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QuantsentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QuantsentContext = QuantsentContext;
var BoundlistContext = /** @class */ (function (_super) {
    __extends(BoundlistContext, _super);
    function BoundlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BoundlistContext.prototype.OPEN = function (i) {
        if (i === undefined) {
            return this.getTokens(CLIFParser.OPEN);
        }
        else {
            return this.getToken(CLIFParser.OPEN, i);
        }
    };
    BoundlistContext.prototype.CLOSE = function (i) {
        if (i === undefined) {
            return this.getTokens(CLIFParser.CLOSE);
        }
        else {
            return this.getToken(CLIFParser.CLOSE, i);
        }
    };
    BoundlistContext.prototype.interpretablename = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(InterpretablenameContext);
        }
        else {
            return this.getRuleContext(i, InterpretablenameContext);
        }
    };
    BoundlistContext.prototype.SEQMARK = function (i) {
        if (i === undefined) {
            return this.getTokens(CLIFParser.SEQMARK);
        }
        else {
            return this.getToken(CLIFParser.SEQMARK, i);
        }
    };
    BoundlistContext.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    Object.defineProperty(BoundlistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CLIFParser.RULE_boundlist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BoundlistContext.prototype.enterRule = function (listener) {
        if (listener.enterBoundlist) {
            listener.enterBoundlist(this);
        }
    };
    // @Override
    BoundlistContext.prototype.exitRule = function (listener) {
        if (listener.exitBoundlist) {
            listener.exitBoundlist(this);
        }
    };
    // @Override
    BoundlistContext.prototype.accept = function (visitor) {
        if (visitor.visitBoundlist) {
            return visitor.visitBoundlist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BoundlistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BoundlistContext = BoundlistContext;
var CommentsentContext = /** @class */ (function (_super) {
    __extends(CommentsentContext, _super);
    function CommentsentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommentsentContext.prototype.OPEN = function () { return this.getToken(CLIFParser.OPEN, 0); };
    CommentsentContext.prototype.CL_COMMENT = function () { return this.getToken(CLIFParser.CL_COMMENT, 0); };
    CommentsentContext.prototype.ENCLOSEDNAME = function () { return this.getToken(CLIFParser.ENCLOSEDNAME, 0); };
    CommentsentContext.prototype.sentence = function () {
        return this.getRuleContext(0, SentenceContext);
    };
    CommentsentContext.prototype.CLOSE = function () { return this.getToken(CLIFParser.CLOSE, 0); };
    Object.defineProperty(CommentsentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CLIFParser.RULE_commentsent; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CommentsentContext.prototype.enterRule = function (listener) {
        if (listener.enterCommentsent) {
            listener.enterCommentsent(this);
        }
    };
    // @Override
    CommentsentContext.prototype.exitRule = function (listener) {
        if (listener.exitCommentsent) {
            listener.exitCommentsent(this);
        }
    };
    // @Override
    CommentsentContext.prototype.accept = function (visitor) {
        if (visitor.visitCommentsent) {
            return visitor.visitCommentsent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommentsentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommentsentContext = CommentsentContext;
var ModuleContext = /** @class */ (function (_super) {
    __extends(ModuleContext, _super);
    function ModuleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ModuleContext.prototype.OPEN = function (i) {
        if (i === undefined) {
            return this.getTokens(CLIFParser.OPEN);
        }
        else {
            return this.getToken(CLIFParser.OPEN, i);
        }
    };
    ModuleContext.prototype.CL_MODULE = function () { return this.getToken(CLIFParser.CL_MODULE, 0); };
    ModuleContext.prototype.interpretablename = function () {
        return this.getRuleContext(0, InterpretablenameContext);
    };
    ModuleContext.prototype.CLOSE = function (i) {
        if (i === undefined) {
            return this.getTokens(CLIFParser.CLOSE);
        }
        else {
            return this.getToken(CLIFParser.CLOSE, i);
        }
    };
    ModuleContext.prototype.CL_EXCLUDES = function () { return this.tryGetToken(CLIFParser.CL_EXCLUDES, 0); };
    ModuleContext.prototype.cltext = function () {
        return this.tryGetRuleContext(0, CltextContext);
    };
    ModuleContext.prototype.name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NameContext);
        }
        else {
            return this.getRuleContext(i, NameContext);
        }
    };
    Object.defineProperty(ModuleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CLIFParser.RULE_module; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModuleContext.prototype.enterRule = function (listener) {
        if (listener.enterModule) {
            listener.enterModule(this);
        }
    };
    // @Override
    ModuleContext.prototype.exitRule = function (listener) {
        if (listener.exitModule) {
            listener.exitModule(this);
        }
    };
    // @Override
    ModuleContext.prototype.accept = function (visitor) {
        if (visitor.visitModule) {
            return visitor.visitModule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModuleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModuleContext = ModuleContext;
var PhraseContext = /** @class */ (function (_super) {
    __extends(PhraseContext, _super);
    function PhraseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PhraseContext.prototype.sentence = function () {
        return this.tryGetRuleContext(0, SentenceContext);
    };
    PhraseContext.prototype.module = function () {
        return this.tryGetRuleContext(0, ModuleContext);
    };
    PhraseContext.prototype.OPEN = function () { return this.tryGetToken(CLIFParser.OPEN, 0); };
    PhraseContext.prototype.CL_IMPORTS = function () { return this.tryGetToken(CLIFParser.CL_IMPORTS, 0); };
    PhraseContext.prototype.interpretablename = function () {
        return this.tryGetRuleContext(0, InterpretablenameContext);
    };
    PhraseContext.prototype.CLOSE = function () { return this.tryGetToken(CLIFParser.CLOSE, 0); };
    PhraseContext.prototype.CL_COMMENT = function () { return this.tryGetToken(CLIFParser.CL_COMMENT, 0); };
    PhraseContext.prototype.ENCLOSEDNAME = function () { return this.tryGetToken(CLIFParser.ENCLOSEDNAME, 0); };
    PhraseContext.prototype.cltext = function () {
        return this.tryGetRuleContext(0, CltextContext);
    };
    Object.defineProperty(PhraseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CLIFParser.RULE_phrase; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PhraseContext.prototype.enterRule = function (listener) {
        if (listener.enterPhrase) {
            listener.enterPhrase(this);
        }
    };
    // @Override
    PhraseContext.prototype.exitRule = function (listener) {
        if (listener.exitPhrase) {
            listener.exitPhrase(this);
        }
    };
    // @Override
    PhraseContext.prototype.accept = function (visitor) {
        if (visitor.visitPhrase) {
            return visitor.visitPhrase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PhraseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PhraseContext = PhraseContext;
var TextContext = /** @class */ (function (_super) {
    __extends(TextContext, _super);
    function TextContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TextContext.prototype.phrase = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PhraseContext);
        }
        else {
            return this.getRuleContext(i, PhraseContext);
        }
    };
    Object.defineProperty(TextContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CLIFParser.RULE_text; },
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
var CltextContext = /** @class */ (function (_super) {
    __extends(CltextContext, _super);
    function CltextContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CltextContext.prototype.module = function () {
        return this.tryGetRuleContext(0, ModuleContext);
    };
    CltextContext.prototype.namedtext = function () {
        return this.tryGetRuleContext(0, NamedtextContext);
    };
    CltextContext.prototype.text = function () {
        return this.tryGetRuleContext(0, TextContext);
    };
    Object.defineProperty(CltextContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CLIFParser.RULE_cltext; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CltextContext.prototype.enterRule = function (listener) {
        if (listener.enterCltext) {
            listener.enterCltext(this);
        }
    };
    // @Override
    CltextContext.prototype.exitRule = function (listener) {
        if (listener.exitCltext) {
            listener.exitCltext(this);
        }
    };
    // @Override
    CltextContext.prototype.accept = function (visitor) {
        if (visitor.visitCltext) {
            return visitor.visitCltext(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CltextContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CltextContext = CltextContext;
var NamedtextContext = /** @class */ (function (_super) {
    __extends(NamedtextContext, _super);
    function NamedtextContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamedtextContext.prototype.OPEN = function () { return this.getToken(CLIFParser.OPEN, 0); };
    NamedtextContext.prototype.CL_TEXT = function () { return this.getToken(CLIFParser.CL_TEXT, 0); };
    NamedtextContext.prototype.interpretablename = function () {
        return this.getRuleContext(0, InterpretablenameContext);
    };
    NamedtextContext.prototype.CLOSE = function () { return this.getToken(CLIFParser.CLOSE, 0); };
    NamedtextContext.prototype.text = function () {
        return this.tryGetRuleContext(0, TextContext);
    };
    Object.defineProperty(NamedtextContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CLIFParser.RULE_namedtext; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NamedtextContext.prototype.enterRule = function (listener) {
        if (listener.enterNamedtext) {
            listener.enterNamedtext(this);
        }
    };
    // @Override
    NamedtextContext.prototype.exitRule = function (listener) {
        if (listener.exitNamedtext) {
            listener.exitNamedtext(this);
        }
    };
    // @Override
    NamedtextContext.prototype.accept = function (visitor) {
        if (visitor.visitNamedtext) {
            return visitor.visitNamedtext(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NamedtextContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NamedtextContext = NamedtextContext;
