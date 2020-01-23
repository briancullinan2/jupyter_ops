"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/suokif/SUOKIF.g4 by ANTLR 4.7.3-SNAPSHOT
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
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var SUOKIFParser = /** @class */ (function (_super) {
    __extends(SUOKIFParser, _super);
    function SUOKIFParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(SUOKIFParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(SUOKIFParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return SUOKIFParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SUOKIFParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "SUOKIF.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SUOKIFParser.prototype, "ruleNames", {
        // @Override
        get: function () { return SUOKIFParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SUOKIFParser.prototype, "serializedATN", {
        // @Override
        get: function () { return SUOKIFParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    SUOKIFParser.prototype.top_level = function () {
        var _localctx = new Top_levelContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, SUOKIFParser.RULE_top_level);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 21;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SUOKIFParser.WORD) | (1 << SUOKIFParser.VARIABLE) | (1 << SUOKIFParser.LPAREN))) !== 0)) {
                    {
                        {
                            this.state = 18;
                            this.sentence();
                        }
                    }
                    this.state = 23;
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
    SUOKIFParser.prototype.term = function () {
        var _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, SUOKIFParser.RULE_term);
        try {
            this.state = 30;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 24;
                        this.match(SUOKIFParser.VARIABLE);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 25;
                        this.match(SUOKIFParser.WORD);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 26;
                        this.match(SUOKIFParser.STRING);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 27;
                        this.funterm();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 28;
                        this.match(SUOKIFParser.NUMBER);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 29;
                        this.sentence();
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
    SUOKIFParser.prototype.argument = function () {
        var _localctx = new ArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, SUOKIFParser.RULE_argument);
        try {
            this.state = 34;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 32;
                        this.sentence();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 33;
                        this.term();
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
    SUOKIFParser.prototype.funterm = function () {
        var _localctx = new FuntermContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, SUOKIFParser.RULE_funterm);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 36;
                this.match(SUOKIFParser.LPAREN);
                this.state = 37;
                this.match(SUOKIFParser.WORD);
                this.state = 39;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 38;
                            this.argument();
                        }
                    }
                    this.state = 41;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SUOKIFParser.WORD) | (1 << SUOKIFParser.STRING) | (1 << SUOKIFParser.VARIABLE) | (1 << SUOKIFParser.NUMBER) | (1 << SUOKIFParser.LPAREN))) !== 0));
                this.state = 43;
                this.match(SUOKIFParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SUOKIFParser.prototype.sentence = function () {
        var _localctx = new SentenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, SUOKIFParser.RULE_sentence);
        try {
            this.state = 51;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 45;
                        this.match(SUOKIFParser.WORD);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 46;
                        this.equation();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 47;
                        this.relsent();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 48;
                        this.logsent();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 49;
                        this.quantsent();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 50;
                        this.match(SUOKIFParser.VARIABLE);
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
    SUOKIFParser.prototype.equation = function () {
        var _localctx = new EquationContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, SUOKIFParser.RULE_equation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 53;
                this.match(SUOKIFParser.LPAREN);
                this.state = 54;
                this.match(SUOKIFParser.ASSIGN);
                this.state = 55;
                this.term();
                this.state = 56;
                this.term();
                this.state = 57;
                this.match(SUOKIFParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SUOKIFParser.prototype.relsent = function () {
        var _localctx = new RelsentContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, SUOKIFParser.RULE_relsent);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 59;
                this.match(SUOKIFParser.LPAREN);
                this.state = 60;
                _la = this._input.LA(1);
                if (!(_la === SUOKIFParser.WORD || _la === SUOKIFParser.VARIABLE)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 62;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 61;
                            this.argument();
                        }
                    }
                    this.state = 64;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SUOKIFParser.WORD) | (1 << SUOKIFParser.STRING) | (1 << SUOKIFParser.VARIABLE) | (1 << SUOKIFParser.NUMBER) | (1 << SUOKIFParser.LPAREN))) !== 0));
                this.state = 66;
                this.match(SUOKIFParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SUOKIFParser.prototype.logsent = function () {
        var _localctx = new LogsentContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, SUOKIFParser.RULE_logsent);
        var _la;
        try {
            this.state = 106;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 68;
                        this.match(SUOKIFParser.LPAREN);
                        this.state = 69;
                        this.match(SUOKIFParser.NOT);
                        this.state = 70;
                        this.sentence();
                        this.state = 71;
                        this.match(SUOKIFParser.RPAREN);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 73;
                        this.match(SUOKIFParser.LPAREN);
                        this.state = 74;
                        this.match(SUOKIFParser.AND);
                        this.state = 76;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 75;
                                    this.sentence();
                                }
                            }
                            this.state = 78;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SUOKIFParser.WORD) | (1 << SUOKIFParser.VARIABLE) | (1 << SUOKIFParser.LPAREN))) !== 0));
                        this.state = 80;
                        this.match(SUOKIFParser.RPAREN);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 82;
                        this.match(SUOKIFParser.LPAREN);
                        this.state = 83;
                        this.match(SUOKIFParser.OR);
                        this.state = 85;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 84;
                                    this.sentence();
                                }
                            }
                            this.state = 87;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SUOKIFParser.WORD) | (1 << SUOKIFParser.VARIABLE) | (1 << SUOKIFParser.LPAREN))) !== 0));
                        this.state = 89;
                        this.match(SUOKIFParser.RPAREN);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 91;
                        this.match(SUOKIFParser.LPAREN);
                        this.state = 92;
                        this.match(SUOKIFParser.ASSIGN);
                        this.state = 93;
                        this.match(SUOKIFParser.GT);
                        this.state = 94;
                        this.sentence();
                        this.state = 95;
                        this.sentence();
                        this.state = 96;
                        this.match(SUOKIFParser.RPAREN);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 98;
                        this.match(SUOKIFParser.LPAREN);
                        this.state = 99;
                        this.match(SUOKIFParser.LT);
                        this.state = 100;
                        this.match(SUOKIFParser.ASSIGN);
                        this.state = 101;
                        this.match(SUOKIFParser.GT);
                        this.state = 102;
                        this.sentence();
                        this.state = 103;
                        this.sentence();
                        this.state = 104;
                        this.match(SUOKIFParser.RPAREN);
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
    SUOKIFParser.prototype.quantsent = function () {
        var _localctx = new QuantsentContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, SUOKIFParser.RULE_quantsent);
        var _la;
        try {
            this.state = 132;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 108;
                        this.match(SUOKIFParser.LPAREN);
                        this.state = 109;
                        this.match(SUOKIFParser.FORALL);
                        this.state = 110;
                        this.match(SUOKIFParser.LPAREN);
                        this.state = 112;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 111;
                                    this.match(SUOKIFParser.VARIABLE);
                                }
                            }
                            this.state = 114;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === SUOKIFParser.VARIABLE);
                        this.state = 116;
                        this.match(SUOKIFParser.RPAREN);
                        this.state = 117;
                        this.sentence();
                        this.state = 118;
                        this.match(SUOKIFParser.RPAREN);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 120;
                        this.match(SUOKIFParser.LPAREN);
                        this.state = 121;
                        this.match(SUOKIFParser.EXISTS);
                        this.state = 122;
                        this.match(SUOKIFParser.LPAREN);
                        this.state = 124;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 123;
                                    this.match(SUOKIFParser.VARIABLE);
                                }
                            }
                            this.state = 126;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === SUOKIFParser.VARIABLE);
                        this.state = 128;
                        this.match(SUOKIFParser.RPAREN);
                        this.state = 129;
                        this.sentence();
                        this.state = 130;
                        this.match(SUOKIFParser.RPAREN);
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
    Object.defineProperty(SUOKIFParser, "_ATN", {
        get: function () {
            if (!SUOKIFParser.__ATN) {
                SUOKIFParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(SUOKIFParser._serializedATN));
            }
            return SUOKIFParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    SUOKIFParser.NOT = 1;
    SUOKIFParser.AND = 2;
    SUOKIFParser.OR = 3;
    SUOKIFParser.FORALL = 4;
    SUOKIFParser.EXISTS = 5;
    SUOKIFParser.WORD = 6;
    SUOKIFParser.STRING = 7;
    SUOKIFParser.VARIABLE = 8;
    SUOKIFParser.NUMBER = 9;
    SUOKIFParser.WHITE = 10;
    SUOKIFParser.COMMENT = 11;
    SUOKIFParser.LPAREN = 12;
    SUOKIFParser.RPAREN = 13;
    SUOKIFParser.ASSIGN = 14;
    SUOKIFParser.GT = 15;
    SUOKIFParser.LT = 16;
    SUOKIFParser.QUESTION = 17;
    SUOKIFParser.RULE_top_level = 0;
    SUOKIFParser.RULE_term = 1;
    SUOKIFParser.RULE_argument = 2;
    SUOKIFParser.RULE_funterm = 3;
    SUOKIFParser.RULE_sentence = 4;
    SUOKIFParser.RULE_equation = 5;
    SUOKIFParser.RULE_relsent = 6;
    SUOKIFParser.RULE_logsent = 7;
    SUOKIFParser.RULE_quantsent = 8;
    // tslint:disable:no-trailing-whitespace
    SUOKIFParser.ruleNames = [
        "top_level", "term", "argument", "funterm", "sentence", "equation", "relsent",
        "logsent", "quantsent",
    ];
    SUOKIFParser._LITERAL_NAMES = [
        undefined, "'not'", "'and'", "'or'", "'forall'", "'exists'", undefined,
        undefined, undefined, undefined, undefined, undefined, "'('", "')'", "'='",
        "'>'", "'<'", "'?'",
    ];
    SUOKIFParser._SYMBOLIC_NAMES = [
        undefined, "NOT", "AND", "OR", "FORALL", "EXISTS", "WORD", "STRING", "VARIABLE",
        "NUMBER", "WHITE", "COMMENT", "LPAREN", "RPAREN", "ASSIGN", "GT", "LT",
        "QUESTION",
    ];
    SUOKIFParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SUOKIFParser._LITERAL_NAMES, SUOKIFParser._SYMBOLIC_NAMES, []);
    SUOKIFParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x13\x89\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x07\x02\x16\n\x02\f\x02\x0E" +
        "\x02\x19\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
        "!\n\x03\x03\x04\x03\x04\x05\x04%\n\x04\x03\x05\x03\x05\x03\x05\x06\x05" +
        "*\n\x05\r\x05\x0E\x05+\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
        "\x03\x06\x03\x06\x05\x066\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
        "\x03\x07\x03\b\x03\b\x03\b\x06\bA\n\b\r\b\x0E\bB\x03\b\x03\b\x03\t\x03" +
        "\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x06\tO\n\t\r\t\x0E\tP\x03\t\x03" +
        "\t\x03\t\x03\t\x03\t\x06\tX\n\t\r\t\x0E\tY\x03\t\x03\t\x03\t\x03\t\x03" +
        "\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
        "\t\x05\tm\n\t\x03\n\x03\n\x03\n\x03\n\x06\ns\n\n\r\n\x0E\nt\x03\n\x03" +
        "\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x06\n\x7F\n\n\r\n\x0E\n\x80\x03" +
        "\n\x03\n\x03\n\x03\n\x05\n\x87\n\n\x03\n\x02\x02\x02\v\x02\x02\x04\x02" +
        "\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02\x03\x04\x02\b\b" +
        "\n\n\x02\x96\x02\x17\x03\x02\x02\x02\x04 \x03\x02\x02\x02\x06$\x03\x02" +
        "\x02\x02\b&\x03\x02\x02\x02\n5\x03\x02\x02\x02\f7\x03\x02\x02\x02\x0E" +
        "=\x03\x02\x02\x02\x10l\x03\x02\x02\x02\x12\x86\x03\x02\x02\x02\x14\x16" +
        "\x05\n\x06\x02\x15\x14\x03\x02\x02\x02\x16\x19\x03\x02\x02\x02\x17\x15" +
        "\x03\x02\x02\x02\x17\x18\x03\x02\x02\x02\x18\x03\x03\x02\x02\x02\x19\x17" +
        "\x03\x02\x02\x02\x1A!\x07\n\x02\x02\x1B!\x07\b\x02\x02\x1C!\x07\t\x02" +
        "\x02\x1D!\x05\b\x05\x02\x1E!\x07\v\x02\x02\x1F!\x05\n\x06\x02 \x1A\x03" +
        "\x02\x02\x02 \x1B\x03\x02\x02\x02 \x1C\x03\x02\x02\x02 \x1D\x03\x02\x02" +
        "\x02 \x1E\x03\x02\x02\x02 \x1F\x03\x02\x02\x02!\x05\x03\x02\x02\x02\"" +
        "%\x05\n\x06\x02#%\x05\x04\x03\x02$\"\x03\x02\x02\x02$#\x03\x02\x02\x02" +
        "%\x07\x03\x02\x02\x02&\'\x07\x0E\x02\x02\')\x07\b\x02\x02(*\x05\x06\x04" +
        "\x02)(\x03\x02\x02\x02*+\x03\x02\x02\x02+)\x03\x02\x02\x02+,\x03\x02\x02" +
        "\x02,-\x03\x02\x02\x02-.\x07\x0F\x02\x02.\t\x03\x02\x02\x02/6\x07\b\x02" +
        "\x0206\x05\f\x07\x0216\x05\x0E\b\x0226\x05\x10\t\x0236\x05\x12\n\x024" +
        "6\x07\n\x02\x025/\x03\x02\x02\x0250\x03\x02\x02\x0251\x03\x02\x02\x02" +
        "52\x03\x02\x02\x0253\x03\x02\x02\x0254\x03\x02\x02\x026\v\x03\x02\x02" +
        "\x0278\x07\x0E\x02\x0289\x07\x10\x02\x029:\x05\x04\x03\x02:;\x05\x04\x03" +
        "\x02;<\x07\x0F\x02\x02<\r\x03\x02\x02\x02=>\x07\x0E\x02\x02>@\t\x02\x02" +
        "\x02?A\x05\x06\x04\x02@?\x03\x02\x02\x02AB\x03\x02\x02\x02B@\x03\x02\x02" +
        "\x02BC\x03\x02\x02\x02CD\x03\x02\x02\x02DE\x07\x0F\x02\x02E\x0F\x03\x02" +
        "\x02\x02FG\x07\x0E\x02\x02GH\x07\x03\x02\x02HI\x05\n\x06\x02IJ\x07\x0F" +
        "\x02\x02Jm\x03\x02\x02\x02KL\x07\x0E\x02\x02LN\x07\x04\x02\x02MO\x05\n" +
        "\x06\x02NM\x03\x02\x02\x02OP\x03\x02\x02\x02PN\x03\x02\x02\x02PQ\x03\x02" +
        "\x02\x02QR\x03\x02\x02\x02RS\x07\x0F\x02\x02Sm\x03\x02\x02\x02TU\x07\x0E" +
        "\x02\x02UW\x07\x05\x02\x02VX\x05\n\x06\x02WV\x03\x02\x02\x02XY\x03\x02" +
        "\x02\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02Z[\x03\x02\x02\x02[\\\x07" +
        "\x0F\x02\x02\\m\x03\x02\x02\x02]^\x07\x0E\x02\x02^_\x07\x10\x02\x02_`" +
        "\x07\x11\x02\x02`a\x05\n\x06\x02ab\x05\n\x06\x02bc\x07\x0F\x02\x02cm\x03" +
        "\x02\x02\x02de\x07\x0E\x02\x02ef\x07\x12\x02\x02fg\x07\x10\x02\x02gh\x07" +
        "\x11\x02\x02hi\x05\n\x06\x02ij\x05\n\x06\x02jk\x07\x0F\x02\x02km\x03\x02" +
        "\x02\x02lF\x03\x02\x02\x02lK\x03\x02\x02\x02lT\x03\x02\x02\x02l]\x03\x02" +
        "\x02\x02ld\x03\x02\x02\x02m\x11\x03\x02\x02\x02no\x07\x0E\x02\x02op\x07" +
        "\x06\x02\x02pr\x07\x0E\x02\x02qs\x07\n\x02\x02rq\x03\x02\x02\x02st\x03" +
        "\x02\x02\x02tr\x03\x02\x02\x02tu\x03\x02\x02\x02uv\x03\x02\x02\x02vw\x07" +
        "\x0F\x02\x02wx\x05\n\x06\x02xy\x07\x0F\x02\x02y\x87\x03\x02\x02\x02z{" +
        "\x07\x0E\x02\x02{|\x07\x07\x02\x02|~\x07\x0E\x02\x02}\x7F\x07\n\x02\x02" +
        "~}\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x80\x81" +
        "\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x83\x07\x0F\x02\x02\x83\x84" +
        "\x05\n\x06\x02\x84\x85\x07\x0F\x02\x02\x85\x87\x03\x02\x02\x02\x86n\x03" +
        "\x02\x02\x02\x86z\x03\x02\x02\x02\x87\x13\x03\x02\x02\x02\x0E\x17 $+5" +
        "BPYlt\x80\x86";
    return SUOKIFParser;
}(Parser_1.Parser));
exports.SUOKIFParser = SUOKIFParser;
var Top_levelContext = /** @class */ (function (_super) {
    __extends(Top_levelContext, _super);
    function Top_levelContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Top_levelContext.prototype.sentence = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SentenceContext);
        }
        else {
            return this.getRuleContext(i, SentenceContext);
        }
    };
    Object.defineProperty(Top_levelContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SUOKIFParser.RULE_top_level; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Top_levelContext.prototype.enterRule = function (listener) {
        if (listener.enterTop_level) {
            listener.enterTop_level(this);
        }
    };
    // @Override
    Top_levelContext.prototype.exitRule = function (listener) {
        if (listener.exitTop_level) {
            listener.exitTop_level(this);
        }
    };
    // @Override
    Top_levelContext.prototype.accept = function (visitor) {
        if (visitor.visitTop_level) {
            return visitor.visitTop_level(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Top_levelContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Top_levelContext = Top_levelContext;
var TermContext = /** @class */ (function (_super) {
    __extends(TermContext, _super);
    function TermContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TermContext.prototype.VARIABLE = function () { return this.tryGetToken(SUOKIFParser.VARIABLE, 0); };
    TermContext.prototype.WORD = function () { return this.tryGetToken(SUOKIFParser.WORD, 0); };
    TermContext.prototype.STRING = function () { return this.tryGetToken(SUOKIFParser.STRING, 0); };
    TermContext.prototype.funterm = function () {
        return this.tryGetRuleContext(0, FuntermContext);
    };
    TermContext.prototype.NUMBER = function () { return this.tryGetToken(SUOKIFParser.NUMBER, 0); };
    TermContext.prototype.sentence = function () {
        return this.tryGetRuleContext(0, SentenceContext);
    };
    Object.defineProperty(TermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SUOKIFParser.RULE_term; },
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
var ArgumentContext = /** @class */ (function (_super) {
    __extends(ArgumentContext, _super);
    function ArgumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentContext.prototype.sentence = function () {
        return this.tryGetRuleContext(0, SentenceContext);
    };
    ArgumentContext.prototype.term = function () {
        return this.tryGetRuleContext(0, TermContext);
    };
    Object.defineProperty(ArgumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SUOKIFParser.RULE_argument; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArgumentContext.prototype.enterRule = function (listener) {
        if (listener.enterArgument) {
            listener.enterArgument(this);
        }
    };
    // @Override
    ArgumentContext.prototype.exitRule = function (listener) {
        if (listener.exitArgument) {
            listener.exitArgument(this);
        }
    };
    // @Override
    ArgumentContext.prototype.accept = function (visitor) {
        if (visitor.visitArgument) {
            return visitor.visitArgument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgumentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgumentContext = ArgumentContext;
var FuntermContext = /** @class */ (function (_super) {
    __extends(FuntermContext, _super);
    function FuntermContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FuntermContext.prototype.LPAREN = function () { return this.getToken(SUOKIFParser.LPAREN, 0); };
    FuntermContext.prototype.WORD = function () { return this.getToken(SUOKIFParser.WORD, 0); };
    FuntermContext.prototype.RPAREN = function () { return this.getToken(SUOKIFParser.RPAREN, 0); };
    FuntermContext.prototype.argument = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentContext);
        }
        else {
            return this.getRuleContext(i, ArgumentContext);
        }
    };
    Object.defineProperty(FuntermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SUOKIFParser.RULE_funterm; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FuntermContext.prototype.enterRule = function (listener) {
        if (listener.enterFunterm) {
            listener.enterFunterm(this);
        }
    };
    // @Override
    FuntermContext.prototype.exitRule = function (listener) {
        if (listener.exitFunterm) {
            listener.exitFunterm(this);
        }
    };
    // @Override
    FuntermContext.prototype.accept = function (visitor) {
        if (visitor.visitFunterm) {
            return visitor.visitFunterm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FuntermContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FuntermContext = FuntermContext;
var SentenceContext = /** @class */ (function (_super) {
    __extends(SentenceContext, _super);
    function SentenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SentenceContext.prototype.WORD = function () { return this.tryGetToken(SUOKIFParser.WORD, 0); };
    SentenceContext.prototype.equation = function () {
        return this.tryGetRuleContext(0, EquationContext);
    };
    SentenceContext.prototype.relsent = function () {
        return this.tryGetRuleContext(0, RelsentContext);
    };
    SentenceContext.prototype.logsent = function () {
        return this.tryGetRuleContext(0, LogsentContext);
    };
    SentenceContext.prototype.quantsent = function () {
        return this.tryGetRuleContext(0, QuantsentContext);
    };
    SentenceContext.prototype.VARIABLE = function () { return this.tryGetToken(SUOKIFParser.VARIABLE, 0); };
    Object.defineProperty(SentenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SUOKIFParser.RULE_sentence; },
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
var EquationContext = /** @class */ (function (_super) {
    __extends(EquationContext, _super);
    function EquationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EquationContext.prototype.LPAREN = function () { return this.getToken(SUOKIFParser.LPAREN, 0); };
    EquationContext.prototype.ASSIGN = function () { return this.getToken(SUOKIFParser.ASSIGN, 0); };
    EquationContext.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    EquationContext.prototype.RPAREN = function () { return this.getToken(SUOKIFParser.RPAREN, 0); };
    Object.defineProperty(EquationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SUOKIFParser.RULE_equation; },
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
var RelsentContext = /** @class */ (function (_super) {
    __extends(RelsentContext, _super);
    function RelsentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RelsentContext.prototype.LPAREN = function () { return this.getToken(SUOKIFParser.LPAREN, 0); };
    RelsentContext.prototype.RPAREN = function () { return this.getToken(SUOKIFParser.RPAREN, 0); };
    RelsentContext.prototype.WORD = function () { return this.tryGetToken(SUOKIFParser.WORD, 0); };
    RelsentContext.prototype.VARIABLE = function () { return this.tryGetToken(SUOKIFParser.VARIABLE, 0); };
    RelsentContext.prototype.argument = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentContext);
        }
        else {
            return this.getRuleContext(i, ArgumentContext);
        }
    };
    Object.defineProperty(RelsentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SUOKIFParser.RULE_relsent; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RelsentContext.prototype.enterRule = function (listener) {
        if (listener.enterRelsent) {
            listener.enterRelsent(this);
        }
    };
    // @Override
    RelsentContext.prototype.exitRule = function (listener) {
        if (listener.exitRelsent) {
            listener.exitRelsent(this);
        }
    };
    // @Override
    RelsentContext.prototype.accept = function (visitor) {
        if (visitor.visitRelsent) {
            return visitor.visitRelsent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RelsentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RelsentContext = RelsentContext;
var LogsentContext = /** @class */ (function (_super) {
    __extends(LogsentContext, _super);
    function LogsentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LogsentContext.prototype.LPAREN = function () { return this.getToken(SUOKIFParser.LPAREN, 0); };
    LogsentContext.prototype.NOT = function () { return this.tryGetToken(SUOKIFParser.NOT, 0); };
    LogsentContext.prototype.sentence = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SentenceContext);
        }
        else {
            return this.getRuleContext(i, SentenceContext);
        }
    };
    LogsentContext.prototype.RPAREN = function () { return this.getToken(SUOKIFParser.RPAREN, 0); };
    LogsentContext.prototype.AND = function () { return this.tryGetToken(SUOKIFParser.AND, 0); };
    LogsentContext.prototype.OR = function () { return this.tryGetToken(SUOKIFParser.OR, 0); };
    LogsentContext.prototype.ASSIGN = function () { return this.tryGetToken(SUOKIFParser.ASSIGN, 0); };
    LogsentContext.prototype.GT = function () { return this.tryGetToken(SUOKIFParser.GT, 0); };
    LogsentContext.prototype.LT = function () { return this.tryGetToken(SUOKIFParser.LT, 0); };
    Object.defineProperty(LogsentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SUOKIFParser.RULE_logsent; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LogsentContext.prototype.enterRule = function (listener) {
        if (listener.enterLogsent) {
            listener.enterLogsent(this);
        }
    };
    // @Override
    LogsentContext.prototype.exitRule = function (listener) {
        if (listener.exitLogsent) {
            listener.exitLogsent(this);
        }
    };
    // @Override
    LogsentContext.prototype.accept = function (visitor) {
        if (visitor.visitLogsent) {
            return visitor.visitLogsent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LogsentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LogsentContext = LogsentContext;
var QuantsentContext = /** @class */ (function (_super) {
    __extends(QuantsentContext, _super);
    function QuantsentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QuantsentContext.prototype.LPAREN = function (i) {
        if (i === undefined) {
            return this.getTokens(SUOKIFParser.LPAREN);
        }
        else {
            return this.getToken(SUOKIFParser.LPAREN, i);
        }
    };
    QuantsentContext.prototype.FORALL = function () { return this.tryGetToken(SUOKIFParser.FORALL, 0); };
    QuantsentContext.prototype.RPAREN = function (i) {
        if (i === undefined) {
            return this.getTokens(SUOKIFParser.RPAREN);
        }
        else {
            return this.getToken(SUOKIFParser.RPAREN, i);
        }
    };
    QuantsentContext.prototype.sentence = function () {
        return this.getRuleContext(0, SentenceContext);
    };
    QuantsentContext.prototype.VARIABLE = function (i) {
        if (i === undefined) {
            return this.getTokens(SUOKIFParser.VARIABLE);
        }
        else {
            return this.getToken(SUOKIFParser.VARIABLE, i);
        }
    };
    QuantsentContext.prototype.EXISTS = function () { return this.tryGetToken(SUOKIFParser.EXISTS, 0); };
    Object.defineProperty(QuantsentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SUOKIFParser.RULE_quantsent; },
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
