"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/prolog/prolog.g4 by ANTLR 4.7.3-SNAPSHOT
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
var FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var prologParser = /** @class */ (function (_super) {
    __extends(prologParser, _super);
    function prologParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(prologParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(prologParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return prologParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(prologParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "prolog.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(prologParser.prototype, "ruleNames", {
        // @Override
        get: function () { return prologParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(prologParser.prototype, "serializedATN", {
        // @Override
        get: function () { return prologParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    prologParser.prototype.p_text = function () {
        var _localctx = new P_textContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, prologParser.RULE_p_text);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 20;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << prologParser.T__0) | (1 << prologParser.T__2) | (1 << prologParser.T__3) | (1 << prologParser.T__5) | (1 << prologParser.T__6) | (1 << prologParser.T__9) | (1 << prologParser.T__11) | (1 << prologParser.T__12) | (1 << prologParser.T__13) | (1 << prologParser.T__14) | (1 << prologParser.T__15) | (1 << prologParser.T__16) | (1 << prologParser.T__17) | (1 << prologParser.T__18) | (1 << prologParser.T__19) | (1 << prologParser.T__20) | (1 << prologParser.T__21) | (1 << prologParser.T__22) | (1 << prologParser.T__23) | (1 << prologParser.T__24) | (1 << prologParser.T__25) | (1 << prologParser.T__26) | (1 << prologParser.T__27) | (1 << prologParser.T__28) | (1 << prologParser.T__29) | (1 << prologParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (prologParser.T__31 - 32)) | (1 << (prologParser.T__32 - 32)) | (1 << (prologParser.T__33 - 32)) | (1 << (prologParser.T__34 - 32)) | (1 << (prologParser.T__35 - 32)) | (1 << (prologParser.T__36 - 32)) | (1 << (prologParser.T__37 - 32)) | (1 << (prologParser.T__38 - 32)) | (1 << (prologParser.T__39 - 32)) | (1 << (prologParser.T__40 - 32)) | (1 << (prologParser.T__41 - 32)) | (1 << (prologParser.T__42 - 32)) | (1 << (prologParser.T__43 - 32)) | (1 << (prologParser.T__44 - 32)) | (1 << (prologParser.T__45 - 32)) | (1 << (prologParser.T__46 - 32)) | (1 << (prologParser.T__47 - 32)) | (1 << (prologParser.T__48 - 32)) | (1 << (prologParser.T__49 - 32)) | (1 << (prologParser.T__50 - 32)) | (1 << (prologParser.LETTER_DIGIT - 32)) | (1 << (prologParser.VARIABLE - 32)) | (1 << (prologParser.DECIMAL - 32)) | (1 << (prologParser.BINARY - 32)) | (1 << (prologParser.OCTAL - 32)) | (1 << (prologParser.HEX - 32)) | (1 << (prologParser.CHARACTER_CODE_CONSTANT - 32)) | (1 << (prologParser.FLOAT - 32)) | (1 << (prologParser.GRAPHIC_TOKEN - 32)) | (1 << (prologParser.QUOTED - 32)) | (1 << (prologParser.DOUBLE_QUOTED_LIST - 32)) | (1 << (prologParser.BACK_QUOTED_STRING - 32)))) !== 0)) {
                    {
                        this.state = 18;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                            case 1:
                                {
                                    this.state = 16;
                                    this.directive();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 17;
                                    this.clause();
                                }
                                break;
                        }
                    }
                    this.state = 22;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 23;
                this.match(prologParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    prologParser.prototype.directive = function () {
        var _localctx = new DirectiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, prologParser.RULE_directive);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 25;
                this.match(prologParser.T__0);
                this.state = 26;
                this.term(0);
                this.state = 27;
                this.match(prologParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    prologParser.prototype.clause = function () {
        var _localctx = new ClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, prologParser.RULE_clause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 29;
                this.term(0);
                this.state = 30;
                this.match(prologParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    prologParser.prototype.termlist = function () {
        var _localctx = new TermlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, prologParser.RULE_termlist);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 32;
                this.term(0);
                this.state = 37;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === prologParser.T__2) {
                    {
                        {
                            this.state = 33;
                            this.match(prologParser.T__2);
                            this.state = 34;
                            this.term(0);
                        }
                    }
                    this.state = 39;
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
    prologParser.prototype.term = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new TermContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 8;
        this.enterRecursionRule(_localctx, 8, prologParser.RULE_term, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 75;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                    case 1:
                        {
                            _localctx = new VariableContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 41;
                            this.match(prologParser.VARIABLE);
                        }
                        break;
                    case 2:
                        {
                            _localctx = new Braced_termContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 42;
                            this.match(prologParser.T__3);
                            this.state = 43;
                            this.term(0);
                            this.state = 44;
                            this.match(prologParser.T__4);
                        }
                        break;
                    case 3:
                        {
                            _localctx = new Integer_termContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 47;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === prologParser.T__5) {
                                {
                                    this.state = 46;
                                    this.match(prologParser.T__5);
                                }
                            }
                            this.state = 49;
                            this.integer();
                        }
                        break;
                    case 4:
                        {
                            _localctx = new FloatContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 51;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === prologParser.T__5) {
                                {
                                    this.state = 50;
                                    this.match(prologParser.T__5);
                                }
                            }
                            this.state = 53;
                            this.match(prologParser.FLOAT);
                        }
                        break;
                    case 5:
                        {
                            _localctx = new Compound_termContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 54;
                            this.atom();
                            this.state = 55;
                            this.match(prologParser.T__3);
                            this.state = 56;
                            this.termlist();
                            this.state = 57;
                            this.match(prologParser.T__4);
                        }
                        break;
                    case 6:
                        {
                            _localctx = new Unary_operatorContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 59;
                            this.operator();
                            this.state = 60;
                            this.term(4);
                        }
                        break;
                    case 7:
                        {
                            _localctx = new List_termContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 62;
                            this.match(prologParser.T__6);
                            this.state = 63;
                            this.termlist();
                            this.state = 66;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === prologParser.T__7) {
                                {
                                    this.state = 64;
                                    this.match(prologParser.T__7);
                                    this.state = 65;
                                    this.term(0);
                                }
                            }
                            this.state = 68;
                            this.match(prologParser.T__8);
                        }
                        break;
                    case 8:
                        {
                            _localctx = new Curly_bracketed_termContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 70;
                            this.match(prologParser.T__9);
                            this.state = 71;
                            this.termlist();
                            this.state = 72;
                            this.match(prologParser.T__10);
                        }
                        break;
                    case 9:
                        {
                            _localctx = new Atom_termContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 74;
                            this.atom();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 83;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new Binary_operatorContext(new TermContext(_parentctx, _parentState));
                                this.pushNewRecursionContext(_localctx, _startState, prologParser.RULE_term);
                                this.state = 77;
                                if (!(this.precpred(this._ctx, 5))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                }
                                this.state = 78;
                                this.operator();
                                this.state = 79;
                                this.term(5);
                            }
                        }
                    }
                    this.state = 85;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    prologParser.prototype.operator = function () {
        var _localctx = new OperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, prologParser.RULE_operator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 86;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << prologParser.T__0) | (1 << prologParser.T__2) | (1 << prologParser.T__5) | (1 << prologParser.T__11) | (1 << prologParser.T__12) | (1 << prologParser.T__13) | (1 << prologParser.T__14) | (1 << prologParser.T__15) | (1 << prologParser.T__16) | (1 << prologParser.T__17) | (1 << prologParser.T__18) | (1 << prologParser.T__19) | (1 << prologParser.T__20) | (1 << prologParser.T__21) | (1 << prologParser.T__22) | (1 << prologParser.T__23) | (1 << prologParser.T__24) | (1 << prologParser.T__25) | (1 << prologParser.T__26) | (1 << prologParser.T__27) | (1 << prologParser.T__28) | (1 << prologParser.T__29) | (1 << prologParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (prologParser.T__31 - 32)) | (1 << (prologParser.T__32 - 32)) | (1 << (prologParser.T__33 - 32)) | (1 << (prologParser.T__34 - 32)) | (1 << (prologParser.T__35 - 32)) | (1 << (prologParser.T__36 - 32)) | (1 << (prologParser.T__37 - 32)) | (1 << (prologParser.T__38 - 32)) | (1 << (prologParser.T__39 - 32)) | (1 << (prologParser.T__40 - 32)) | (1 << (prologParser.T__41 - 32)) | (1 << (prologParser.T__42 - 32)) | (1 << (prologParser.T__43 - 32)) | (1 << (prologParser.T__44 - 32)) | (1 << (prologParser.T__45 - 32)) | (1 << (prologParser.T__46 - 32)) | (1 << (prologParser.T__47 - 32)) | (1 << (prologParser.T__48 - 32)) | (1 << (prologParser.T__49 - 32)))) !== 0))) {
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
    prologParser.prototype.atom = function () {
        var _localctx = new AtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, prologParser.RULE_atom);
        try {
            this.state = 99;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case prologParser.T__6:
                    _localctx = new Empty_listContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 88;
                        this.match(prologParser.T__6);
                        this.state = 89;
                        this.match(prologParser.T__8);
                    }
                    break;
                case prologParser.T__9:
                    _localctx = new Empty_bracesContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 90;
                        this.match(prologParser.T__9);
                        this.state = 91;
                        this.match(prologParser.T__10);
                    }
                    break;
                case prologParser.LETTER_DIGIT:
                    _localctx = new NameContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 92;
                        this.match(prologParser.LETTER_DIGIT);
                    }
                    break;
                case prologParser.GRAPHIC_TOKEN:
                    _localctx = new GraphicContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 93;
                        this.match(prologParser.GRAPHIC_TOKEN);
                    }
                    break;
                case prologParser.QUOTED:
                    _localctx = new Quoted_stringContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 94;
                        this.match(prologParser.QUOTED);
                    }
                    break;
                case prologParser.DOUBLE_QUOTED_LIST:
                    _localctx = new Dq_stringContext(_localctx);
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 95;
                        this.match(prologParser.DOUBLE_QUOTED_LIST);
                    }
                    break;
                case prologParser.BACK_QUOTED_STRING:
                    _localctx = new Backq_stringContext(_localctx);
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 96;
                        this.match(prologParser.BACK_QUOTED_STRING);
                    }
                    break;
                case prologParser.T__17:
                    _localctx = new SemicolonContext(_localctx);
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 97;
                        this.match(prologParser.T__17);
                    }
                    break;
                case prologParser.T__50:
                    _localctx = new CutContext(_localctx);
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 98;
                        this.match(prologParser.T__50);
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
    prologParser.prototype.integer = function () {
        var _localctx = new IntegerContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, prologParser.RULE_integer);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 101;
                _la = this._input.LA(1);
                if (!(((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (prologParser.DECIMAL - 54)) | (1 << (prologParser.BINARY - 54)) | (1 << (prologParser.OCTAL - 54)) | (1 << (prologParser.HEX - 54)) | (1 << (prologParser.CHARACTER_CODE_CONSTANT - 54)))) !== 0))) {
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
    prologParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 4:
                return this.term_sempred(_localctx, predIndex);
        }
        return true;
    };
    prologParser.prototype.term_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 5);
        }
        return true;
    };
    Object.defineProperty(prologParser, "_ATN", {
        get: function () {
            if (!prologParser.__ATN) {
                prologParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(prologParser._serializedATN));
            }
            return prologParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    prologParser.T__0 = 1;
    prologParser.T__1 = 2;
    prologParser.T__2 = 3;
    prologParser.T__3 = 4;
    prologParser.T__4 = 5;
    prologParser.T__5 = 6;
    prologParser.T__6 = 7;
    prologParser.T__7 = 8;
    prologParser.T__8 = 9;
    prologParser.T__9 = 10;
    prologParser.T__10 = 11;
    prologParser.T__11 = 12;
    prologParser.T__12 = 13;
    prologParser.T__13 = 14;
    prologParser.T__14 = 15;
    prologParser.T__15 = 16;
    prologParser.T__16 = 17;
    prologParser.T__17 = 18;
    prologParser.T__18 = 19;
    prologParser.T__19 = 20;
    prologParser.T__20 = 21;
    prologParser.T__21 = 22;
    prologParser.T__22 = 23;
    prologParser.T__23 = 24;
    prologParser.T__24 = 25;
    prologParser.T__25 = 26;
    prologParser.T__26 = 27;
    prologParser.T__27 = 28;
    prologParser.T__28 = 29;
    prologParser.T__29 = 30;
    prologParser.T__30 = 31;
    prologParser.T__31 = 32;
    prologParser.T__32 = 33;
    prologParser.T__33 = 34;
    prologParser.T__34 = 35;
    prologParser.T__35 = 36;
    prologParser.T__36 = 37;
    prologParser.T__37 = 38;
    prologParser.T__38 = 39;
    prologParser.T__39 = 40;
    prologParser.T__40 = 41;
    prologParser.T__41 = 42;
    prologParser.T__42 = 43;
    prologParser.T__43 = 44;
    prologParser.T__44 = 45;
    prologParser.T__45 = 46;
    prologParser.T__46 = 47;
    prologParser.T__47 = 48;
    prologParser.T__48 = 49;
    prologParser.T__49 = 50;
    prologParser.T__50 = 51;
    prologParser.LETTER_DIGIT = 52;
    prologParser.VARIABLE = 53;
    prologParser.DECIMAL = 54;
    prologParser.BINARY = 55;
    prologParser.OCTAL = 56;
    prologParser.HEX = 57;
    prologParser.CHARACTER_CODE_CONSTANT = 58;
    prologParser.FLOAT = 59;
    prologParser.GRAPHIC_TOKEN = 60;
    prologParser.QUOTED = 61;
    prologParser.DOUBLE_QUOTED_LIST = 62;
    prologParser.BACK_QUOTED_STRING = 63;
    prologParser.WS = 64;
    prologParser.COMMENT = 65;
    prologParser.MULTILINE_COMMENT = 66;
    prologParser.RULE_p_text = 0;
    prologParser.RULE_directive = 1;
    prologParser.RULE_clause = 2;
    prologParser.RULE_termlist = 3;
    prologParser.RULE_term = 4;
    prologParser.RULE_operator = 5;
    prologParser.RULE_atom = 6;
    prologParser.RULE_integer = 7;
    // tslint:disable:no-trailing-whitespace
    prologParser.ruleNames = [
        "p_text", "directive", "clause", "termlist", "term", "operator", "atom",
        "integer",
    ];
    prologParser._LITERAL_NAMES = [
        undefined, "':-'", "'.'", "','", "'('", "')'", "'-'", "'['", "'|'", "']'",
        "'{'", "'}'", "'-->'", "'?-'", "'dynamic'", "'multifile'", "'discontiguous'",
        "'public'", "';'", "'->'", "'\\'", "'='", "'\\'", "'=='", "'\\='", "'@<'",
        "'@=<'", "'@>'", "'@>='", "'=..'", "'is'", "'=:='", "'=\\'", "'<'", "'=<'",
        "'>'", "'>='", "':'", "'+'", "'/\\'", "'\\'", "'*'", "'/'", "'//'", "'rem'",
        "'mod'", "'<<'", "'>>'", "'**'", "'^'", "'\\'", "'!'",
    ];
    prologParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "LETTER_DIGIT", "VARIABLE", "DECIMAL",
        "BINARY", "OCTAL", "HEX", "CHARACTER_CODE_CONSTANT", "FLOAT", "GRAPHIC_TOKEN",
        "QUOTED", "DOUBLE_QUOTED_LIST", "BACK_QUOTED_STRING", "WS", "COMMENT",
        "MULTILINE_COMMENT",
    ];
    prologParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(prologParser._LITERAL_NAMES, prologParser._SYMBOLIC_NAMES, []);
    prologParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03Dj\x04\x02\t\x02" +
        "\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07" +
        "\x04\b\t\b\x04\t\t\t\x03\x02\x03\x02\x07\x02\x15\n\x02\f\x02\x0E\x02\x18" +
        "\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04" +
        "\x03\x04\x03\x05\x03\x05\x03\x05\x07\x05&\n\x05\f\x05\x0E\x05)\v\x05\x03" +
        "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x062\n\x06\x03" +
        "\x06\x03\x06\x05\x066\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
        "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06E" +
        "\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06" +
        "N\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06T\n\x06\f\x06\x0E\x06W" +
        "\v\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
        "\x03\b\x03\b\x03\b\x05\bf\n\b\x03\t\x03\t\x03\t\x02\x02\x03\n\n\x02\x02" +
        "\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x02\x04\x06\x02\x03" +
        "\x03\x05\x05\b\b\x0E4\x03\x028<\x02x\x02\x16\x03\x02\x02\x02\x04\x1B\x03" +
        "\x02\x02\x02\x06\x1F\x03\x02\x02\x02\b\"\x03\x02\x02\x02\nM\x03\x02\x02" +
        "\x02\fX\x03\x02\x02\x02\x0Ee\x03\x02\x02\x02\x10g\x03\x02\x02\x02\x12" +
        "\x15\x05\x04\x03\x02\x13\x15\x05\x06\x04\x02\x14\x12\x03\x02\x02\x02\x14" +
        "\x13\x03\x02\x02\x02\x15\x18\x03\x02\x02\x02\x16\x14\x03\x02\x02\x02\x16" +
        "\x17\x03\x02\x02\x02\x17\x19\x03\x02\x02\x02\x18\x16\x03\x02\x02\x02\x19" +
        "\x1A\x07\x02\x02\x03\x1A\x03\x03\x02\x02\x02\x1B\x1C\x07\x03\x02\x02\x1C" +
        "\x1D\x05\n\x06\x02\x1D\x1E\x07\x04\x02\x02\x1E\x05\x03\x02\x02\x02\x1F" +
        " \x05\n\x06\x02 !\x07\x04\x02\x02!\x07\x03\x02\x02\x02\"\'\x05\n\x06\x02" +
        "#$\x07\x05\x02\x02$&\x05\n\x06\x02%#\x03\x02\x02\x02&)\x03\x02\x02\x02" +
        "\'%\x03\x02\x02\x02\'(\x03\x02\x02\x02(\t\x03\x02\x02\x02)\'\x03\x02\x02" +
        "\x02*+\b\x06\x01\x02+N\x077\x02\x02,-\x07\x06\x02\x02-.\x05\n\x06\x02" +
        "./\x07\x07\x02\x02/N\x03\x02\x02\x0202\x07\b\x02\x0210\x03\x02\x02\x02" +
        "12\x03\x02\x02\x0223\x03\x02\x02\x023N\x05\x10\t\x0246\x07\b\x02\x025" +
        "4\x03\x02\x02\x0256\x03\x02\x02\x0267\x03\x02\x02\x027N\x07=\x02\x028" +
        "9\x05\x0E\b\x029:\x07\x06\x02\x02:;\x05\b\x05\x02;<\x07\x07\x02\x02<N" +
        "\x03\x02\x02\x02=>\x05\f\x07\x02>?\x05\n\x06\x06?N\x03\x02\x02\x02@A\x07" +
        "\t\x02\x02AD\x05\b\x05\x02BC\x07\n\x02\x02CE\x05\n\x06\x02DB\x03\x02\x02" +
        "\x02DE\x03\x02\x02\x02EF\x03\x02\x02\x02FG\x07\v\x02\x02GN\x03\x02\x02" +
        "\x02HI\x07\f\x02\x02IJ\x05\b\x05\x02JK\x07\r\x02\x02KN\x03\x02\x02\x02" +
        "LN\x05\x0E\b\x02M*\x03\x02\x02\x02M,\x03\x02\x02\x02M1\x03\x02\x02\x02" +
        "M5\x03\x02\x02\x02M8\x03\x02\x02\x02M=\x03\x02\x02\x02M@\x03\x02\x02\x02" +
        "MH\x03\x02\x02\x02ML\x03\x02\x02\x02NU\x03\x02\x02\x02OP\f\x07\x02\x02" +
        "PQ\x05\f\x07\x02QR\x05\n\x06\x07RT\x03\x02\x02\x02SO\x03\x02\x02\x02T" +
        "W\x03\x02\x02\x02US\x03\x02\x02\x02UV\x03\x02\x02\x02V\v\x03\x02\x02\x02" +
        "WU\x03\x02\x02\x02XY\t\x02\x02\x02Y\r\x03\x02\x02\x02Z[\x07\t\x02\x02" +
        "[f\x07\v\x02\x02\\]\x07\f\x02\x02]f\x07\r\x02\x02^f\x076\x02\x02_f\x07" +
        ">\x02\x02`f\x07?\x02\x02af\x07@\x02\x02bf\x07A\x02\x02cf\x07\x14\x02\x02" +
        "df\x075\x02\x02eZ\x03\x02\x02\x02e\\\x03\x02\x02\x02e^\x03\x02\x02\x02" +
        "e_\x03\x02\x02\x02e`\x03\x02\x02\x02ea\x03\x02\x02\x02eb\x03\x02\x02\x02" +
        "ec\x03\x02\x02\x02ed\x03\x02\x02\x02f\x0F\x03\x02\x02\x02gh\t\x03\x02" +
        "\x02h\x11\x03\x02\x02\x02\v\x14\x16\'15DMUe";
    return prologParser;
}(Parser_1.Parser));
exports.prologParser = prologParser;
var P_textContext = /** @class */ (function (_super) {
    __extends(P_textContext, _super);
    function P_textContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    P_textContext.prototype.EOF = function () { return this.getToken(prologParser.EOF, 0); };
    P_textContext.prototype.directive = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DirectiveContext);
        }
        else {
            return this.getRuleContext(i, DirectiveContext);
        }
    };
    P_textContext.prototype.clause = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ClauseContext);
        }
        else {
            return this.getRuleContext(i, ClauseContext);
        }
    };
    Object.defineProperty(P_textContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return prologParser.RULE_p_text; },
        enumerable: true,
        configurable: true
    });
    // @Override
    P_textContext.prototype.enterRule = function (listener) {
        if (listener.enterP_text) {
            listener.enterP_text(this);
        }
    };
    // @Override
    P_textContext.prototype.exitRule = function (listener) {
        if (listener.exitP_text) {
            listener.exitP_text(this);
        }
    };
    // @Override
    P_textContext.prototype.accept = function (visitor) {
        if (visitor.visitP_text) {
            return visitor.visitP_text(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return P_textContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.P_textContext = P_textContext;
var DirectiveContext = /** @class */ (function (_super) {
    __extends(DirectiveContext, _super);
    function DirectiveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DirectiveContext.prototype.term = function () {
        return this.getRuleContext(0, TermContext);
    };
    Object.defineProperty(DirectiveContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return prologParser.RULE_directive; },
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
var ClauseContext = /** @class */ (function (_super) {
    __extends(ClauseContext, _super);
    function ClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClauseContext.prototype.term = function () {
        return this.getRuleContext(0, TermContext);
    };
    Object.defineProperty(ClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return prologParser.RULE_clause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterClause) {
            listener.enterClause(this);
        }
    };
    // @Override
    ClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitClause) {
            listener.exitClause(this);
        }
    };
    // @Override
    ClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitClause) {
            return visitor.visitClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClauseContext = ClauseContext;
var TermlistContext = /** @class */ (function (_super) {
    __extends(TermlistContext, _super);
    function TermlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TermlistContext.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    Object.defineProperty(TermlistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return prologParser.RULE_termlist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TermlistContext.prototype.enterRule = function (listener) {
        if (listener.enterTermlist) {
            listener.enterTermlist(this);
        }
    };
    // @Override
    TermlistContext.prototype.exitRule = function (listener) {
        if (listener.exitTermlist) {
            listener.exitTermlist(this);
        }
    };
    // @Override
    TermlistContext.prototype.accept = function (visitor) {
        if (visitor.visitTermlist) {
            return visitor.visitTermlist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TermlistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TermlistContext = TermlistContext;
var TermContext = /** @class */ (function (_super) {
    __extends(TermContext, _super);
    function TermContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(TermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return prologParser.RULE_term; },
        enumerable: true,
        configurable: true
    });
    TermContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return TermContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TermContext = TermContext;
var VariableContext = /** @class */ (function (_super) {
    __extends(VariableContext, _super);
    function VariableContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    VariableContext.prototype.VARIABLE = function () { return this.getToken(prologParser.VARIABLE, 0); };
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
}(TermContext));
exports.VariableContext = VariableContext;
var Braced_termContext = /** @class */ (function (_super) {
    __extends(Braced_termContext, _super);
    function Braced_termContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    Braced_termContext.prototype.term = function () {
        return this.getRuleContext(0, TermContext);
    };
    // @Override
    Braced_termContext.prototype.enterRule = function (listener) {
        if (listener.enterBraced_term) {
            listener.enterBraced_term(this);
        }
    };
    // @Override
    Braced_termContext.prototype.exitRule = function (listener) {
        if (listener.exitBraced_term) {
            listener.exitBraced_term(this);
        }
    };
    // @Override
    Braced_termContext.prototype.accept = function (visitor) {
        if (visitor.visitBraced_term) {
            return visitor.visitBraced_term(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Braced_termContext;
}(TermContext));
exports.Braced_termContext = Braced_termContext;
var Integer_termContext = /** @class */ (function (_super) {
    __extends(Integer_termContext, _super);
    function Integer_termContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    Integer_termContext.prototype.integer = function () {
        return this.getRuleContext(0, IntegerContext);
    };
    // @Override
    Integer_termContext.prototype.enterRule = function (listener) {
        if (listener.enterInteger_term) {
            listener.enterInteger_term(this);
        }
    };
    // @Override
    Integer_termContext.prototype.exitRule = function (listener) {
        if (listener.exitInteger_term) {
            listener.exitInteger_term(this);
        }
    };
    // @Override
    Integer_termContext.prototype.accept = function (visitor) {
        if (visitor.visitInteger_term) {
            return visitor.visitInteger_term(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Integer_termContext;
}(TermContext));
exports.Integer_termContext = Integer_termContext;
var FloatContext = /** @class */ (function (_super) {
    __extends(FloatContext, _super);
    function FloatContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    FloatContext.prototype.FLOAT = function () { return this.getToken(prologParser.FLOAT, 0); };
    // @Override
    FloatContext.prototype.enterRule = function (listener) {
        if (listener.enterFloat) {
            listener.enterFloat(this);
        }
    };
    // @Override
    FloatContext.prototype.exitRule = function (listener) {
        if (listener.exitFloat) {
            listener.exitFloat(this);
        }
    };
    // @Override
    FloatContext.prototype.accept = function (visitor) {
        if (visitor.visitFloat) {
            return visitor.visitFloat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FloatContext;
}(TermContext));
exports.FloatContext = FloatContext;
var Compound_termContext = /** @class */ (function (_super) {
    __extends(Compound_termContext, _super);
    function Compound_termContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    Compound_termContext.prototype.atom = function () {
        return this.getRuleContext(0, AtomContext);
    };
    Compound_termContext.prototype.termlist = function () {
        return this.getRuleContext(0, TermlistContext);
    };
    // @Override
    Compound_termContext.prototype.enterRule = function (listener) {
        if (listener.enterCompound_term) {
            listener.enterCompound_term(this);
        }
    };
    // @Override
    Compound_termContext.prototype.exitRule = function (listener) {
        if (listener.exitCompound_term) {
            listener.exitCompound_term(this);
        }
    };
    // @Override
    Compound_termContext.prototype.accept = function (visitor) {
        if (visitor.visitCompound_term) {
            return visitor.visitCompound_term(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Compound_termContext;
}(TermContext));
exports.Compound_termContext = Compound_termContext;
var Binary_operatorContext = /** @class */ (function (_super) {
    __extends(Binary_operatorContext, _super);
    function Binary_operatorContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    Binary_operatorContext.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    Binary_operatorContext.prototype.operator = function () {
        return this.getRuleContext(0, OperatorContext);
    };
    // @Override
    Binary_operatorContext.prototype.enterRule = function (listener) {
        if (listener.enterBinary_operator) {
            listener.enterBinary_operator(this);
        }
    };
    // @Override
    Binary_operatorContext.prototype.exitRule = function (listener) {
        if (listener.exitBinary_operator) {
            listener.exitBinary_operator(this);
        }
    };
    // @Override
    Binary_operatorContext.prototype.accept = function (visitor) {
        if (visitor.visitBinary_operator) {
            return visitor.visitBinary_operator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Binary_operatorContext;
}(TermContext));
exports.Binary_operatorContext = Binary_operatorContext;
var Unary_operatorContext = /** @class */ (function (_super) {
    __extends(Unary_operatorContext, _super);
    function Unary_operatorContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    Unary_operatorContext.prototype.operator = function () {
        return this.getRuleContext(0, OperatorContext);
    };
    Unary_operatorContext.prototype.term = function () {
        return this.getRuleContext(0, TermContext);
    };
    // @Override
    Unary_operatorContext.prototype.enterRule = function (listener) {
        if (listener.enterUnary_operator) {
            listener.enterUnary_operator(this);
        }
    };
    // @Override
    Unary_operatorContext.prototype.exitRule = function (listener) {
        if (listener.exitUnary_operator) {
            listener.exitUnary_operator(this);
        }
    };
    // @Override
    Unary_operatorContext.prototype.accept = function (visitor) {
        if (visitor.visitUnary_operator) {
            return visitor.visitUnary_operator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Unary_operatorContext;
}(TermContext));
exports.Unary_operatorContext = Unary_operatorContext;
var List_termContext = /** @class */ (function (_super) {
    __extends(List_termContext, _super);
    function List_termContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    List_termContext.prototype.termlist = function () {
        return this.getRuleContext(0, TermlistContext);
    };
    List_termContext.prototype.term = function () {
        return this.tryGetRuleContext(0, TermContext);
    };
    // @Override
    List_termContext.prototype.enterRule = function (listener) {
        if (listener.enterList_term) {
            listener.enterList_term(this);
        }
    };
    // @Override
    List_termContext.prototype.exitRule = function (listener) {
        if (listener.exitList_term) {
            listener.exitList_term(this);
        }
    };
    // @Override
    List_termContext.prototype.accept = function (visitor) {
        if (visitor.visitList_term) {
            return visitor.visitList_term(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return List_termContext;
}(TermContext));
exports.List_termContext = List_termContext;
var Curly_bracketed_termContext = /** @class */ (function (_super) {
    __extends(Curly_bracketed_termContext, _super);
    function Curly_bracketed_termContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    Curly_bracketed_termContext.prototype.termlist = function () {
        return this.getRuleContext(0, TermlistContext);
    };
    // @Override
    Curly_bracketed_termContext.prototype.enterRule = function (listener) {
        if (listener.enterCurly_bracketed_term) {
            listener.enterCurly_bracketed_term(this);
        }
    };
    // @Override
    Curly_bracketed_termContext.prototype.exitRule = function (listener) {
        if (listener.exitCurly_bracketed_term) {
            listener.exitCurly_bracketed_term(this);
        }
    };
    // @Override
    Curly_bracketed_termContext.prototype.accept = function (visitor) {
        if (visitor.visitCurly_bracketed_term) {
            return visitor.visitCurly_bracketed_term(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Curly_bracketed_termContext;
}(TermContext));
exports.Curly_bracketed_termContext = Curly_bracketed_termContext;
var Atom_termContext = /** @class */ (function (_super) {
    __extends(Atom_termContext, _super);
    function Atom_termContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    Atom_termContext.prototype.atom = function () {
        return this.getRuleContext(0, AtomContext);
    };
    // @Override
    Atom_termContext.prototype.enterRule = function (listener) {
        if (listener.enterAtom_term) {
            listener.enterAtom_term(this);
        }
    };
    // @Override
    Atom_termContext.prototype.exitRule = function (listener) {
        if (listener.exitAtom_term) {
            listener.exitAtom_term(this);
        }
    };
    // @Override
    Atom_termContext.prototype.accept = function (visitor) {
        if (visitor.visitAtom_term) {
            return visitor.visitAtom_term(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Atom_termContext;
}(TermContext));
exports.Atom_termContext = Atom_termContext;
var OperatorContext = /** @class */ (function (_super) {
    __extends(OperatorContext, _super);
    function OperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(OperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return prologParser.RULE_operator; },
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
var AtomContext = /** @class */ (function (_super) {
    __extends(AtomContext, _super);
    function AtomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(AtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return prologParser.RULE_atom; },
        enumerable: true,
        configurable: true
    });
    AtomContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return AtomContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AtomContext = AtomContext;
var Empty_listContext = /** @class */ (function (_super) {
    __extends(Empty_listContext, _super);
    function Empty_listContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    // @Override
    Empty_listContext.prototype.enterRule = function (listener) {
        if (listener.enterEmpty_list) {
            listener.enterEmpty_list(this);
        }
    };
    // @Override
    Empty_listContext.prototype.exitRule = function (listener) {
        if (listener.exitEmpty_list) {
            listener.exitEmpty_list(this);
        }
    };
    // @Override
    Empty_listContext.prototype.accept = function (visitor) {
        if (visitor.visitEmpty_list) {
            return visitor.visitEmpty_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Empty_listContext;
}(AtomContext));
exports.Empty_listContext = Empty_listContext;
var Empty_bracesContext = /** @class */ (function (_super) {
    __extends(Empty_bracesContext, _super);
    function Empty_bracesContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    // @Override
    Empty_bracesContext.prototype.enterRule = function (listener) {
        if (listener.enterEmpty_braces) {
            listener.enterEmpty_braces(this);
        }
    };
    // @Override
    Empty_bracesContext.prototype.exitRule = function (listener) {
        if (listener.exitEmpty_braces) {
            listener.exitEmpty_braces(this);
        }
    };
    // @Override
    Empty_bracesContext.prototype.accept = function (visitor) {
        if (visitor.visitEmpty_braces) {
            return visitor.visitEmpty_braces(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Empty_bracesContext;
}(AtomContext));
exports.Empty_bracesContext = Empty_bracesContext;
var NameContext = /** @class */ (function (_super) {
    __extends(NameContext, _super);
    function NameContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    NameContext.prototype.LETTER_DIGIT = function () { return this.getToken(prologParser.LETTER_DIGIT, 0); };
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
}(AtomContext));
exports.NameContext = NameContext;
var GraphicContext = /** @class */ (function (_super) {
    __extends(GraphicContext, _super);
    function GraphicContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    GraphicContext.prototype.GRAPHIC_TOKEN = function () { return this.getToken(prologParser.GRAPHIC_TOKEN, 0); };
    // @Override
    GraphicContext.prototype.enterRule = function (listener) {
        if (listener.enterGraphic) {
            listener.enterGraphic(this);
        }
    };
    // @Override
    GraphicContext.prototype.exitRule = function (listener) {
        if (listener.exitGraphic) {
            listener.exitGraphic(this);
        }
    };
    // @Override
    GraphicContext.prototype.accept = function (visitor) {
        if (visitor.visitGraphic) {
            return visitor.visitGraphic(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GraphicContext;
}(AtomContext));
exports.GraphicContext = GraphicContext;
var Quoted_stringContext = /** @class */ (function (_super) {
    __extends(Quoted_stringContext, _super);
    function Quoted_stringContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    Quoted_stringContext.prototype.QUOTED = function () { return this.getToken(prologParser.QUOTED, 0); };
    // @Override
    Quoted_stringContext.prototype.enterRule = function (listener) {
        if (listener.enterQuoted_string) {
            listener.enterQuoted_string(this);
        }
    };
    // @Override
    Quoted_stringContext.prototype.exitRule = function (listener) {
        if (listener.exitQuoted_string) {
            listener.exitQuoted_string(this);
        }
    };
    // @Override
    Quoted_stringContext.prototype.accept = function (visitor) {
        if (visitor.visitQuoted_string) {
            return visitor.visitQuoted_string(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Quoted_stringContext;
}(AtomContext));
exports.Quoted_stringContext = Quoted_stringContext;
var Dq_stringContext = /** @class */ (function (_super) {
    __extends(Dq_stringContext, _super);
    function Dq_stringContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    Dq_stringContext.prototype.DOUBLE_QUOTED_LIST = function () { return this.getToken(prologParser.DOUBLE_QUOTED_LIST, 0); };
    // @Override
    Dq_stringContext.prototype.enterRule = function (listener) {
        if (listener.enterDq_string) {
            listener.enterDq_string(this);
        }
    };
    // @Override
    Dq_stringContext.prototype.exitRule = function (listener) {
        if (listener.exitDq_string) {
            listener.exitDq_string(this);
        }
    };
    // @Override
    Dq_stringContext.prototype.accept = function (visitor) {
        if (visitor.visitDq_string) {
            return visitor.visitDq_string(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Dq_stringContext;
}(AtomContext));
exports.Dq_stringContext = Dq_stringContext;
var Backq_stringContext = /** @class */ (function (_super) {
    __extends(Backq_stringContext, _super);
    function Backq_stringContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    Backq_stringContext.prototype.BACK_QUOTED_STRING = function () { return this.getToken(prologParser.BACK_QUOTED_STRING, 0); };
    // @Override
    Backq_stringContext.prototype.enterRule = function (listener) {
        if (listener.enterBackq_string) {
            listener.enterBackq_string(this);
        }
    };
    // @Override
    Backq_stringContext.prototype.exitRule = function (listener) {
        if (listener.exitBackq_string) {
            listener.exitBackq_string(this);
        }
    };
    // @Override
    Backq_stringContext.prototype.accept = function (visitor) {
        if (visitor.visitBackq_string) {
            return visitor.visitBackq_string(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Backq_stringContext;
}(AtomContext));
exports.Backq_stringContext = Backq_stringContext;
var SemicolonContext = /** @class */ (function (_super) {
    __extends(SemicolonContext, _super);
    function SemicolonContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    // @Override
    SemicolonContext.prototype.enterRule = function (listener) {
        if (listener.enterSemicolon) {
            listener.enterSemicolon(this);
        }
    };
    // @Override
    SemicolonContext.prototype.exitRule = function (listener) {
        if (listener.exitSemicolon) {
            listener.exitSemicolon(this);
        }
    };
    // @Override
    SemicolonContext.prototype.accept = function (visitor) {
        if (visitor.visitSemicolon) {
            return visitor.visitSemicolon(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SemicolonContext;
}(AtomContext));
exports.SemicolonContext = SemicolonContext;
var CutContext = /** @class */ (function (_super) {
    __extends(CutContext, _super);
    function CutContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    // @Override
    CutContext.prototype.enterRule = function (listener) {
        if (listener.enterCut) {
            listener.enterCut(this);
        }
    };
    // @Override
    CutContext.prototype.exitRule = function (listener) {
        if (listener.exitCut) {
            listener.exitCut(this);
        }
    };
    // @Override
    CutContext.prototype.accept = function (visitor) {
        if (visitor.visitCut) {
            return visitor.visitCut(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CutContext;
}(AtomContext));
exports.CutContext = CutContext;
var IntegerContext = /** @class */ (function (_super) {
    __extends(IntegerContext, _super);
    function IntegerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntegerContext.prototype.DECIMAL = function () { return this.tryGetToken(prologParser.DECIMAL, 0); };
    IntegerContext.prototype.CHARACTER_CODE_CONSTANT = function () { return this.tryGetToken(prologParser.CHARACTER_CODE_CONSTANT, 0); };
    IntegerContext.prototype.BINARY = function () { return this.tryGetToken(prologParser.BINARY, 0); };
    IntegerContext.prototype.OCTAL = function () { return this.tryGetToken(prologParser.OCTAL, 0); };
    IntegerContext.prototype.HEX = function () { return this.tryGetToken(prologParser.HEX, 0); };
    Object.defineProperty(IntegerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return prologParser.RULE_integer; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IntegerContext.prototype.enterRule = function (listener) {
        if (listener.enterInteger) {
            listener.enterInteger(this);
        }
    };
    // @Override
    IntegerContext.prototype.exitRule = function (listener) {
        if (listener.exitInteger) {
            listener.exitInteger(this);
        }
    };
    // @Override
    IntegerContext.prototype.accept = function (visitor) {
        if (visitor.visitInteger) {
            return visitor.visitInteger(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IntegerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IntegerContext = IntegerContext;
