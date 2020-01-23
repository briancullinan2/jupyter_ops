"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/r/R.g4 by ANTLR 4.7.3-SNAPSHOT
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
var RParser = /** @class */ (function (_super) {
    __extends(RParser, _super);
    function RParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(RParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(RParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return RParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "R.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RParser.prototype, "ruleNames", {
        // @Override
        get: function () { return RParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RParser.prototype, "serializedATN", {
        // @Override
        get: function () { return RParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    RParser.prototype.prog = function () {
        var _localctx = new ProgContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, RParser.RULE_prog);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 24;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RParser.T__9) | (1 << RParser.T__10) | (1 << RParser.T__20) | (1 << RParser.T__25))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (RParser.T__32 - 33)) | (1 << (RParser.T__33 - 33)) | (1 << (RParser.T__35 - 33)) | (1 << (RParser.T__37 - 33)) | (1 << (RParser.T__39 - 33)) | (1 << (RParser.T__41 - 33)) | (1 << (RParser.T__42 - 33)) | (1 << (RParser.T__43 - 33)) | (1 << (RParser.T__44 - 33)) | (1 << (RParser.T__45 - 33)) | (1 << (RParser.T__46 - 33)) | (1 << (RParser.T__47 - 33)) | (1 << (RParser.T__48 - 33)) | (1 << (RParser.T__49 - 33)) | (1 << (RParser.T__50 - 33)) | (1 << (RParser.T__51 - 33)) | (1 << (RParser.HEX - 33)) | (1 << (RParser.INT - 33)) | (1 << (RParser.FLOAT - 33)) | (1 << (RParser.COMPLEX - 33)) | (1 << (RParser.STRING - 33)) | (1 << (RParser.ID - 33)) | (1 << (RParser.NL - 33)))) !== 0)) {
                    {
                        this.state = 22;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case RParser.T__9:
                            case RParser.T__10:
                            case RParser.T__20:
                            case RParser.T__25:
                            case RParser.T__32:
                            case RParser.T__33:
                            case RParser.T__35:
                            case RParser.T__37:
                            case RParser.T__39:
                            case RParser.T__41:
                            case RParser.T__42:
                            case RParser.T__43:
                            case RParser.T__44:
                            case RParser.T__45:
                            case RParser.T__46:
                            case RParser.T__47:
                            case RParser.T__48:
                            case RParser.T__49:
                            case RParser.T__50:
                            case RParser.T__51:
                            case RParser.HEX:
                            case RParser.INT:
                            case RParser.FLOAT:
                            case RParser.COMPLEX:
                            case RParser.STRING:
                            case RParser.ID:
                                {
                                    this.state = 14;
                                    this.expr(0);
                                    this.state = 18;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 15;
                                                    _la = this._input.LA(1);
                                                    if (!(_la === RParser.T__0 || _la === RParser.NL)) {
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
                                        this.state = 20;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
                                    }
                                }
                                break;
                            case RParser.NL:
                                {
                                    this.state = 21;
                                    this.match(RParser.NL);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 26;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 27;
                this.match(RParser.EOF);
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
    RParser.prototype.expr = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ExprContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 2;
        this.enterRecursionRule(_localctx, 2, RParser.RULE_expr, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 97;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                    case 1:
                        {
                            this.state = 30;
                            _la = this._input.LA(1);
                            if (!(_la === RParser.T__9 || _la === RParser.T__10)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 31;
                            this.expr(36);
                        }
                        break;
                    case 2:
                        {
                            this.state = 32;
                            this.match(RParser.T__20);
                            this.state = 33;
                            this.expr(30);
                        }
                        break;
                    case 3:
                        {
                            this.state = 34;
                            this.match(RParser.T__25);
                            this.state = 35;
                            this.expr(27);
                        }
                        break;
                    case 4:
                        {
                            this.state = 36;
                            this.match(RParser.T__32);
                            this.state = 37;
                            this.match(RParser.T__33);
                            this.state = 39;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (RParser.T__53 - 54)) | (1 << (RParser.T__54 - 54)) | (1 << (RParser.ID - 54)))) !== 0)) {
                                {
                                    this.state = 38;
                                    this.formlist();
                                }
                            }
                            this.state = 41;
                            this.match(RParser.T__34);
                            this.state = 42;
                            this.expr(24);
                        }
                        break;
                    case 5:
                        {
                            this.state = 43;
                            this.match(RParser.T__35);
                            this.state = 44;
                            this.exprlist();
                            this.state = 45;
                            this.match(RParser.T__36);
                        }
                        break;
                    case 6:
                        {
                            this.state = 47;
                            this.match(RParser.T__37);
                            this.state = 48;
                            this.match(RParser.T__33);
                            this.state = 49;
                            this.expr(0);
                            this.state = 50;
                            this.match(RParser.T__34);
                            this.state = 51;
                            this.expr(21);
                        }
                        break;
                    case 7:
                        {
                            this.state = 53;
                            this.match(RParser.T__37);
                            this.state = 54;
                            this.match(RParser.T__33);
                            this.state = 55;
                            this.expr(0);
                            this.state = 56;
                            this.match(RParser.T__34);
                            this.state = 57;
                            this.expr(0);
                            this.state = 58;
                            this.match(RParser.T__38);
                            this.state = 59;
                            this.expr(20);
                        }
                        break;
                    case 8:
                        {
                            this.state = 61;
                            this.match(RParser.T__39);
                            this.state = 62;
                            this.match(RParser.T__33);
                            this.state = 63;
                            this.match(RParser.ID);
                            this.state = 64;
                            this.match(RParser.T__40);
                            this.state = 65;
                            this.expr(0);
                            this.state = 66;
                            this.match(RParser.T__34);
                            this.state = 67;
                            this.expr(19);
                        }
                        break;
                    case 9:
                        {
                            this.state = 69;
                            this.match(RParser.T__41);
                            this.state = 70;
                            this.match(RParser.T__33);
                            this.state = 71;
                            this.expr(0);
                            this.state = 72;
                            this.match(RParser.T__34);
                            this.state = 73;
                            this.expr(18);
                        }
                        break;
                    case 10:
                        {
                            this.state = 75;
                            this.match(RParser.T__42);
                            this.state = 76;
                            this.expr(17);
                        }
                        break;
                    case 11:
                        {
                            this.state = 77;
                            this.match(RParser.T__43);
                            this.state = 78;
                            this.expr(16);
                        }
                        break;
                    case 12:
                        {
                            this.state = 79;
                            this.match(RParser.T__44);
                        }
                        break;
                    case 13:
                        {
                            this.state = 80;
                            this.match(RParser.T__45);
                        }
                        break;
                    case 14:
                        {
                            this.state = 81;
                            this.match(RParser.T__33);
                            this.state = 82;
                            this.expr(0);
                            this.state = 83;
                            this.match(RParser.T__34);
                        }
                        break;
                    case 15:
                        {
                            this.state = 85;
                            this.match(RParser.ID);
                        }
                        break;
                    case 16:
                        {
                            this.state = 86;
                            this.match(RParser.STRING);
                        }
                        break;
                    case 17:
                        {
                            this.state = 87;
                            this.match(RParser.HEX);
                        }
                        break;
                    case 18:
                        {
                            this.state = 88;
                            this.match(RParser.INT);
                        }
                        break;
                    case 19:
                        {
                            this.state = 89;
                            this.match(RParser.FLOAT);
                        }
                        break;
                    case 20:
                        {
                            this.state = 90;
                            this.match(RParser.COMPLEX);
                        }
                        break;
                    case 21:
                        {
                            this.state = 91;
                            this.match(RParser.T__46);
                        }
                        break;
                    case 22:
                        {
                            this.state = 92;
                            this.match(RParser.T__47);
                        }
                        break;
                    case 23:
                        {
                            this.state = 93;
                            this.match(RParser.T__48);
                        }
                        break;
                    case 24:
                        {
                            this.state = 94;
                            this.match(RParser.T__49);
                        }
                        break;
                    case 25:
                        {
                            this.state = 95;
                            this.match(RParser.T__50);
                        }
                        break;
                    case 26:
                        {
                            this.state = 96;
                            this.match(RParser.T__51);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 153;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 151;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, RParser.RULE_expr);
                                        this.state = 99;
                                        if (!(this.precpred(this._ctx, 39))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 39)");
                                        }
                                        this.state = 100;
                                        _la = this._input.LA(1);
                                        if (!(_la === RParser.T__4 || _la === RParser.T__5)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 101;
                                        this.expr(40);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, RParser.RULE_expr);
                                        this.state = 102;
                                        if (!(this.precpred(this._ctx, 38))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 38)");
                                        }
                                        this.state = 103;
                                        _la = this._input.LA(1);
                                        if (!(_la === RParser.T__6 || _la === RParser.T__7)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 104;
                                        this.expr(39);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, RParser.RULE_expr);
                                        this.state = 105;
                                        if (!(this.precpred(this._ctx, 37))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 37)");
                                        }
                                        this.state = 106;
                                        this.match(RParser.T__8);
                                        this.state = 107;
                                        this.expr(37);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, RParser.RULE_expr);
                                        this.state = 108;
                                        if (!(this.precpred(this._ctx, 35))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 35)");
                                        }
                                        this.state = 109;
                                        this.match(RParser.T__11);
                                        this.state = 110;
                                        this.expr(36);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, RParser.RULE_expr);
                                        this.state = 111;
                                        if (!(this.precpred(this._ctx, 34))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 34)");
                                        }
                                        this.state = 112;
                                        this.match(RParser.USER_OP);
                                        this.state = 113;
                                        this.expr(35);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, RParser.RULE_expr);
                                        this.state = 114;
                                        if (!(this.precpred(this._ctx, 33))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 33)");
                                        }
                                        this.state = 115;
                                        _la = this._input.LA(1);
                                        if (!(_la === RParser.T__12 || _la === RParser.T__13)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 116;
                                        this.expr(34);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, RParser.RULE_expr);
                                        this.state = 117;
                                        if (!(this.precpred(this._ctx, 32))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 32)");
                                        }
                                        this.state = 118;
                                        _la = this._input.LA(1);
                                        if (!(_la === RParser.T__9 || _la === RParser.T__10)) {
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
                                        this.expr(33);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, RParser.RULE_expr);
                                        this.state = 120;
                                        if (!(this.precpred(this._ctx, 31))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 31)");
                                        }
                                        this.state = 121;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RParser.T__14) | (1 << RParser.T__15) | (1 << RParser.T__16) | (1 << RParser.T__17) | (1 << RParser.T__18) | (1 << RParser.T__19))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 122;
                                        this.expr(32);
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, RParser.RULE_expr);
                                        this.state = 123;
                                        if (!(this.precpred(this._ctx, 29))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 29)");
                                        }
                                        this.state = 124;
                                        _la = this._input.LA(1);
                                        if (!(_la === RParser.T__21 || _la === RParser.T__22)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 125;
                                        this.expr(30);
                                    }
                                    break;
                                case 10:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, RParser.RULE_expr);
                                        this.state = 126;
                                        if (!(this.precpred(this._ctx, 28))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 28)");
                                        }
                                        this.state = 127;
                                        _la = this._input.LA(1);
                                        if (!(_la === RParser.T__23 || _la === RParser.T__24)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 128;
                                        this.expr(29);
                                    }
                                    break;
                                case 11:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, RParser.RULE_expr);
                                        this.state = 129;
                                        if (!(this.precpred(this._ctx, 26))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 26)");
                                        }
                                        this.state = 130;
                                        this.match(RParser.T__25);
                                        this.state = 131;
                                        this.expr(27);
                                    }
                                    break;
                                case 12:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, RParser.RULE_expr);
                                        this.state = 132;
                                        if (!(this.precpred(this._ctx, 25))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
                                        }
                                        this.state = 133;
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (RParser.T__26 - 27)) | (1 << (RParser.T__27 - 27)) | (1 << (RParser.T__28 - 27)) | (1 << (RParser.T__29 - 27)) | (1 << (RParser.T__30 - 27)) | (1 << (RParser.T__31 - 27)))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 134;
                                        this.expr(26);
                                    }
                                    break;
                                case 13:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, RParser.RULE_expr);
                                        this.state = 135;
                                        if (!(this.precpred(this._ctx, 41))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 41)");
                                        }
                                        this.state = 136;
                                        this.match(RParser.T__1);
                                        this.state = 137;
                                        this.sublist();
                                        this.state = 138;
                                        this.match(RParser.T__2);
                                        this.state = 139;
                                        this.match(RParser.T__2);
                                    }
                                    break;
                                case 14:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, RParser.RULE_expr);
                                        this.state = 141;
                                        if (!(this.precpred(this._ctx, 40))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 40)");
                                        }
                                        this.state = 142;
                                        this.match(RParser.T__3);
                                        this.state = 143;
                                        this.sublist();
                                        this.state = 144;
                                        this.match(RParser.T__2);
                                    }
                                    break;
                                case 15:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, RParser.RULE_expr);
                                        this.state = 146;
                                        if (!(this.precpred(this._ctx, 23))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 23)");
                                        }
                                        this.state = 147;
                                        this.match(RParser.T__33);
                                        this.state = 148;
                                        this.sublist();
                                        this.state = 149;
                                        this.match(RParser.T__34);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 155;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
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
    RParser.prototype.exprlist = function () {
        var _localctx = new ExprlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, RParser.RULE_exprlist);
        var _la;
        try {
            this.state = 167;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case RParser.T__9:
                case RParser.T__10:
                case RParser.T__20:
                case RParser.T__25:
                case RParser.T__32:
                case RParser.T__33:
                case RParser.T__35:
                case RParser.T__37:
                case RParser.T__39:
                case RParser.T__41:
                case RParser.T__42:
                case RParser.T__43:
                case RParser.T__44:
                case RParser.T__45:
                case RParser.T__46:
                case RParser.T__47:
                case RParser.T__48:
                case RParser.T__49:
                case RParser.T__50:
                case RParser.T__51:
                case RParser.HEX:
                case RParser.INT:
                case RParser.FLOAT:
                case RParser.COMPLEX:
                case RParser.STRING:
                case RParser.ID:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 156;
                        this.expr(0);
                        this.state = 163;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === RParser.T__0 || _la === RParser.NL) {
                            {
                                {
                                    this.state = 157;
                                    _la = this._input.LA(1);
                                    if (!(_la === RParser.T__0 || _la === RParser.NL)) {
                                        this._errHandler.recoverInline(this);
                                    }
                                    else {
                                        if (this._input.LA(1) === Token_1.Token.EOF) {
                                            this.matchedEOF = true;
                                        }
                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                    this.state = 159;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RParser.T__9) | (1 << RParser.T__10) | (1 << RParser.T__20) | (1 << RParser.T__25))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (RParser.T__32 - 33)) | (1 << (RParser.T__33 - 33)) | (1 << (RParser.T__35 - 33)) | (1 << (RParser.T__37 - 33)) | (1 << (RParser.T__39 - 33)) | (1 << (RParser.T__41 - 33)) | (1 << (RParser.T__42 - 33)) | (1 << (RParser.T__43 - 33)) | (1 << (RParser.T__44 - 33)) | (1 << (RParser.T__45 - 33)) | (1 << (RParser.T__46 - 33)) | (1 << (RParser.T__47 - 33)) | (1 << (RParser.T__48 - 33)) | (1 << (RParser.T__49 - 33)) | (1 << (RParser.T__50 - 33)) | (1 << (RParser.T__51 - 33)) | (1 << (RParser.HEX - 33)) | (1 << (RParser.INT - 33)) | (1 << (RParser.FLOAT - 33)) | (1 << (RParser.COMPLEX - 33)) | (1 << (RParser.STRING - 33)) | (1 << (RParser.ID - 33)))) !== 0)) {
                                        {
                                            this.state = 158;
                                            this.expr(0);
                                        }
                                    }
                                }
                            }
                            this.state = 165;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case RParser.T__36:
                    this.enterOuterAlt(_localctx, 2);
                    // tslint:disable-next-line:no-empty
                    {
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
    RParser.prototype.formlist = function () {
        var _localctx = new FormlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, RParser.RULE_formlist);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 169;
                this.form();
                this.state = 174;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RParser.T__52) {
                    {
                        {
                            this.state = 170;
                            this.match(RParser.T__52);
                            this.state = 171;
                            this.form();
                        }
                    }
                    this.state = 176;
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
    RParser.prototype.form = function () {
        var _localctx = new FormContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, RParser.RULE_form);
        try {
            this.state = 183;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 177;
                        this.match(RParser.ID);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 178;
                        this.match(RParser.ID);
                        this.state = 179;
                        this.match(RParser.T__28);
                        this.state = 180;
                        this.expr(0);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 181;
                        this.match(RParser.T__53);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 182;
                        this.match(RParser.T__54);
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
    RParser.prototype.sublist = function () {
        var _localctx = new SublistContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, RParser.RULE_sublist);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 185;
                this.sub();
                this.state = 190;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RParser.T__52) {
                    {
                        {
                            this.state = 186;
                            this.match(RParser.T__52);
                            this.state = 187;
                            this.sub();
                        }
                    }
                    this.state = 192;
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
    RParser.prototype.sub = function () {
        var _localctx = new SubContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, RParser.RULE_sub);
        try {
            this.state = 212;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 193;
                        this.expr(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 194;
                        this.match(RParser.ID);
                        this.state = 195;
                        this.match(RParser.T__28);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 196;
                        this.match(RParser.ID);
                        this.state = 197;
                        this.match(RParser.T__28);
                        this.state = 198;
                        this.expr(0);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 199;
                        this.match(RParser.STRING);
                        this.state = 200;
                        this.match(RParser.T__28);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 201;
                        this.match(RParser.STRING);
                        this.state = 202;
                        this.match(RParser.T__28);
                        this.state = 203;
                        this.expr(0);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 204;
                        this.match(RParser.T__46);
                        this.state = 205;
                        this.match(RParser.T__28);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 206;
                        this.match(RParser.T__46);
                        this.state = 207;
                        this.match(RParser.T__28);
                        this.state = 208;
                        this.expr(0);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 209;
                        this.match(RParser.T__53);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 210;
                        this.match(RParser.T__54);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    // tslint:disable-next-line:no-empty
                    {
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
    RParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 1:
                return this.expr_sempred(_localctx, predIndex);
        }
        return true;
    };
    RParser.prototype.expr_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 39);
            case 1:
                return this.precpred(this._ctx, 38);
            case 2:
                return this.precpred(this._ctx, 37);
            case 3:
                return this.precpred(this._ctx, 35);
            case 4:
                return this.precpred(this._ctx, 34);
            case 5:
                return this.precpred(this._ctx, 33);
            case 6:
                return this.precpred(this._ctx, 32);
            case 7:
                return this.precpred(this._ctx, 31);
            case 8:
                return this.precpred(this._ctx, 29);
            case 9:
                return this.precpred(this._ctx, 28);
            case 10:
                return this.precpred(this._ctx, 26);
            case 11:
                return this.precpred(this._ctx, 25);
            case 12:
                return this.precpred(this._ctx, 41);
            case 13:
                return this.precpred(this._ctx, 40);
            case 14:
                return this.precpred(this._ctx, 23);
        }
        return true;
    };
    Object.defineProperty(RParser, "_ATN", {
        get: function () {
            if (!RParser.__ATN) {
                RParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(RParser._serializedATN));
            }
            return RParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    RParser.T__0 = 1;
    RParser.T__1 = 2;
    RParser.T__2 = 3;
    RParser.T__3 = 4;
    RParser.T__4 = 5;
    RParser.T__5 = 6;
    RParser.T__6 = 7;
    RParser.T__7 = 8;
    RParser.T__8 = 9;
    RParser.T__9 = 10;
    RParser.T__10 = 11;
    RParser.T__11 = 12;
    RParser.T__12 = 13;
    RParser.T__13 = 14;
    RParser.T__14 = 15;
    RParser.T__15 = 16;
    RParser.T__16 = 17;
    RParser.T__17 = 18;
    RParser.T__18 = 19;
    RParser.T__19 = 20;
    RParser.T__20 = 21;
    RParser.T__21 = 22;
    RParser.T__22 = 23;
    RParser.T__23 = 24;
    RParser.T__24 = 25;
    RParser.T__25 = 26;
    RParser.T__26 = 27;
    RParser.T__27 = 28;
    RParser.T__28 = 29;
    RParser.T__29 = 30;
    RParser.T__30 = 31;
    RParser.T__31 = 32;
    RParser.T__32 = 33;
    RParser.T__33 = 34;
    RParser.T__34 = 35;
    RParser.T__35 = 36;
    RParser.T__36 = 37;
    RParser.T__37 = 38;
    RParser.T__38 = 39;
    RParser.T__39 = 40;
    RParser.T__40 = 41;
    RParser.T__41 = 42;
    RParser.T__42 = 43;
    RParser.T__43 = 44;
    RParser.T__44 = 45;
    RParser.T__45 = 46;
    RParser.T__46 = 47;
    RParser.T__47 = 48;
    RParser.T__48 = 49;
    RParser.T__49 = 50;
    RParser.T__50 = 51;
    RParser.T__51 = 52;
    RParser.T__52 = 53;
    RParser.T__53 = 54;
    RParser.T__54 = 55;
    RParser.HEX = 56;
    RParser.INT = 57;
    RParser.FLOAT = 58;
    RParser.COMPLEX = 59;
    RParser.STRING = 60;
    RParser.ID = 61;
    RParser.USER_OP = 62;
    RParser.NL = 63;
    RParser.WS = 64;
    RParser.RULE_prog = 0;
    RParser.RULE_expr = 1;
    RParser.RULE_exprlist = 2;
    RParser.RULE_formlist = 3;
    RParser.RULE_form = 4;
    RParser.RULE_sublist = 5;
    RParser.RULE_sub = 6;
    // tslint:disable:no-trailing-whitespace
    RParser.ruleNames = [
        "prog", "expr", "exprlist", "formlist", "form", "sublist", "sub",
    ];
    RParser._LITERAL_NAMES = [
        undefined, "';'", "'[['", "']'", "'['", "'::'", "':::'", "'$'", "'@'",
        "'^'", "'-'", "'+'", "':'", "'*'", "'/'", "'>'", "'>='", "'<'", "'<='",
        "'=='", "'!='", "'!'", "'&'", "'&&'", "'|'", "'||'", "'~'", "'<-'", "'<<-'",
        "'='", "'->'", "'->>'", "':='", "'function'", "'('", "')'", "'{'", "'}'",
        "'if'", "'else'", "'for'", "'in'", "'while'", "'repeat'", "'?'", "'next'",
        "'break'", "'NULL'", "'NA'", "'Inf'", "'NaN'", "'TRUE'", "'FALSE'", "','",
        "'...'", "'.'",
    ];
    RParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        "HEX", "INT", "FLOAT", "COMPLEX", "STRING", "ID", "USER_OP", "NL", "WS",
    ];
    RParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(RParser._LITERAL_NAMES, RParser._SYMBOLIC_NAMES, []);
    RParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03B\xD9\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x03\x02\x03\x02\x07\x02\x13\n\x02\f\x02\x0E\x02\x16\v" +
        "\x02\x03\x02\x07\x02\x19\n\x02\f\x02\x0E\x02\x1C\v\x02\x03\x02\x03\x02" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x05\x03*\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03d\n\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\x9A\n\x03\f\x03\x0E\x03" +
        "\x9D\v\x03\x03\x04\x03\x04\x03\x04\x05\x04\xA2\n\x04\x07\x04\xA4\n\x04" +
        "\f\x04\x0E\x04\xA7\v\x04\x03\x04\x05\x04\xAA\n\x04\x03\x05\x03\x05\x03" +
        "\x05\x07\x05\xAF\n\x05\f\x05\x0E\x05\xB2\v\x05\x03\x06\x03\x06\x03\x06" +
        "\x03\x06\x03\x06\x03\x06\x05\x06\xBA\n\x06\x03\x07\x03\x07\x03\x07\x07" +
        "\x07\xBF\n\x07\f\x07\x0E\x07\xC2\v\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
        "\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
        "\b\x03\b\x05\b\xD7\n\b\x03\b\x02\x02\x03\x04\t\x02\x02\x04\x02\x06\x02" +
        "\b\x02\n\x02\f\x02\x0E\x02\x02\v\x04\x02\x03\x03AA\x03\x02\f\r\x03\x02" +
        "\x07\b\x03\x02\t\n\x03\x02\x0F\x10\x03\x02\x11\x16\x03\x02\x18\x19\x03" +
        "\x02\x1A\x1B\x03\x02\x1D\"\x02\u010E\x02\x1A\x03\x02\x02\x02\x04c\x03" +
        "\x02\x02\x02\x06\xA9\x03\x02\x02\x02\b\xAB\x03\x02\x02\x02\n\xB9\x03\x02" +
        "\x02\x02\f\xBB\x03\x02\x02\x02\x0E\xD6\x03\x02\x02\x02\x10\x14\x05\x04" +
        "\x03\x02\x11\x13\t\x02\x02\x02\x12\x11\x03\x02\x02\x02\x13\x16\x03\x02" +
        "\x02\x02\x14\x12\x03\x02\x02\x02\x14\x15\x03\x02\x02\x02\x15\x19\x03\x02" +
        "\x02\x02\x16\x14\x03\x02\x02\x02\x17\x19\x07A\x02\x02\x18\x10\x03\x02" +
        "\x02\x02\x18\x17\x03\x02\x02\x02\x19\x1C\x03\x02\x02\x02\x1A\x18\x03\x02" +
        "\x02\x02\x1A\x1B\x03\x02\x02\x02\x1B\x1D\x03\x02\x02\x02\x1C\x1A\x03\x02" +
        "\x02\x02\x1D\x1E\x07\x02\x02\x03\x1E\x03\x03\x02\x02\x02\x1F \b\x03\x01" +
        "\x02 !\t\x03\x02\x02!d\x05\x04\x03&\"#\x07\x17\x02\x02#d\x05\x04\x03 " +
        "$%\x07\x1C\x02\x02%d\x05\x04\x03\x1D&\'\x07#\x02\x02\')\x07$\x02\x02(" +
        "*\x05\b\x05\x02)(\x03\x02\x02\x02)*\x03\x02\x02\x02*+\x03\x02\x02\x02" +
        "+,\x07%\x02\x02,d\x05\x04\x03\x1A-.\x07&\x02\x02./\x05\x06\x04\x02/0\x07" +
        "\'\x02\x020d\x03\x02\x02\x0212\x07(\x02\x0223\x07$\x02\x0234\x05\x04\x03" +
        "\x0245\x07%\x02\x0256\x05\x04\x03\x176d\x03\x02\x02\x0278\x07(\x02\x02" +
        "89\x07$\x02\x029:\x05\x04\x03\x02:;\x07%\x02\x02;<\x05\x04\x03\x02<=\x07" +
        ")\x02\x02=>\x05\x04\x03\x16>d\x03\x02\x02\x02?@\x07*\x02\x02@A\x07$\x02" +
        "\x02AB\x07?\x02\x02BC\x07+\x02\x02CD\x05\x04\x03\x02DE\x07%\x02\x02EF" +
        "\x05\x04\x03\x15Fd\x03\x02\x02\x02GH\x07,\x02\x02HI\x07$\x02\x02IJ\x05" +
        "\x04\x03\x02JK\x07%\x02\x02KL\x05\x04\x03\x14Ld\x03\x02\x02\x02MN\x07" +
        "-\x02\x02Nd\x05\x04\x03\x13OP\x07.\x02\x02Pd\x05\x04\x03\x12Qd\x07/\x02" +
        "\x02Rd\x070\x02\x02ST\x07$\x02\x02TU\x05\x04\x03\x02UV\x07%\x02\x02Vd" +
        "\x03\x02\x02\x02Wd\x07?\x02\x02Xd\x07>\x02\x02Yd\x07:\x02\x02Zd\x07;\x02" +
        "\x02[d\x07<\x02\x02\\d\x07=\x02\x02]d\x071\x02\x02^d\x072\x02\x02_d\x07" +
        "3\x02\x02`d\x074\x02\x02ad\x075\x02\x02bd\x076\x02\x02c\x1F\x03\x02\x02" +
        "\x02c\"\x03\x02\x02\x02c$\x03\x02\x02\x02c&\x03\x02\x02\x02c-\x03\x02" +
        "\x02\x02c1\x03\x02\x02\x02c7\x03\x02\x02\x02c?\x03\x02\x02\x02cG\x03\x02" +
        "\x02\x02cM\x03\x02\x02\x02cO\x03\x02\x02\x02cQ\x03\x02\x02\x02cR\x03\x02" +
        "\x02\x02cS\x03\x02\x02\x02cW\x03\x02\x02\x02cX\x03\x02\x02\x02cY\x03\x02" +
        "\x02\x02cZ\x03\x02\x02\x02c[\x03\x02\x02\x02c\\\x03\x02\x02\x02c]\x03" +
        "\x02\x02\x02c^\x03\x02\x02\x02c_\x03\x02\x02\x02c`\x03\x02\x02\x02ca\x03" +
        "\x02\x02\x02cb\x03\x02\x02\x02d\x9B\x03\x02\x02\x02ef\f)\x02\x02fg\t\x04" +
        "\x02\x02g\x9A\x05\x04\x03*hi\f(\x02\x02ij\t\x05\x02\x02j\x9A\x05\x04\x03" +
        ")kl\f\'\x02\x02lm\x07\v\x02\x02m\x9A\x05\x04\x03\'no\f%\x02\x02op\x07" +
        "\x0E\x02\x02p\x9A\x05\x04\x03&qr\f$\x02\x02rs\x07@\x02\x02s\x9A\x05\x04" +
        "\x03%tu\f#\x02\x02uv\t\x06\x02\x02v\x9A\x05\x04\x03$wx\f\"\x02\x02xy\t" +
        "\x03\x02\x02y\x9A\x05\x04\x03#z{\f!\x02\x02{|\t\x07\x02\x02|\x9A\x05\x04" +
        "\x03\"}~\f\x1F\x02\x02~\x7F\t\b\x02\x02\x7F\x9A\x05\x04\x03 \x80\x81\f" +
        "\x1E\x02\x02\x81\x82\t\t\x02\x02\x82\x9A\x05\x04\x03\x1F\x83\x84\f\x1C" +
        "\x02\x02\x84\x85\x07\x1C\x02\x02\x85\x9A\x05\x04\x03\x1D\x86\x87\f\x1B" +
        "\x02\x02\x87\x88\t\n\x02\x02\x88\x9A\x05\x04\x03\x1C\x89\x8A\f+\x02\x02" +
        "\x8A\x8B\x07\x04\x02\x02\x8B\x8C\x05\f\x07\x02\x8C\x8D\x07\x05\x02\x02" +
        "\x8D\x8E\x07\x05\x02\x02\x8E\x9A\x03\x02\x02\x02\x8F\x90\f*\x02\x02\x90" +
        "\x91\x07\x06\x02\x02\x91\x92\x05\f\x07\x02\x92\x93\x07\x05\x02\x02\x93" +
        "\x9A\x03\x02\x02\x02\x94\x95\f\x19\x02\x02\x95\x96\x07$\x02\x02\x96\x97" +
        "\x05\f\x07\x02\x97\x98\x07%\x02\x02\x98\x9A\x03\x02\x02\x02\x99e\x03\x02" +
        "\x02\x02\x99h\x03\x02\x02\x02\x99k\x03\x02\x02\x02\x99n\x03\x02\x02\x02" +
        "\x99q\x03\x02\x02\x02\x99t\x03\x02\x02\x02\x99w\x03\x02\x02\x02\x99z\x03" +
        "\x02\x02\x02\x99}\x03\x02\x02\x02\x99\x80\x03\x02\x02\x02\x99\x83\x03" +
        "\x02\x02\x02\x99\x86\x03\x02\x02\x02\x99\x89\x03\x02\x02\x02\x99\x8F\x03" +
        "\x02\x02\x02\x99\x94\x03\x02\x02\x02\x9A\x9D\x03\x02\x02\x02\x9B\x99\x03" +
        "\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x05\x03\x02\x02\x02\x9D\x9B\x03" +
        "\x02\x02\x02\x9E\xA5\x05\x04\x03\x02\x9F\xA1\t\x02\x02\x02\xA0\xA2\x05" +
        "\x04\x03\x02\xA1\xA0\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA4\x03" +
        "\x02\x02\x02\xA3\x9F\x03\x02\x02\x02\xA4\xA7\x03\x02\x02\x02\xA5\xA3\x03" +
        "\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xAA\x03\x02\x02\x02\xA7\xA5\x03" +
        "\x02\x02\x02\xA8\xAA\x03\x02\x02\x02\xA9\x9E\x03\x02\x02\x02\xA9\xA8\x03" +
        "\x02\x02\x02\xAA\x07\x03\x02\x02\x02\xAB\xB0\x05\n\x06\x02\xAC\xAD\x07" +
        "7\x02\x02\xAD\xAF\x05\n\x06\x02\xAE\xAC\x03\x02\x02\x02\xAF\xB2\x03\x02" +
        "\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\t\x03\x02" +
        "\x02\x02\xB2\xB0\x03\x02\x02\x02\xB3\xBA\x07?\x02\x02\xB4\xB5\x07?\x02" +
        "\x02\xB5\xB6\x07\x1F\x02\x02\xB6\xBA\x05\x04\x03\x02\xB7\xBA\x078\x02" +
        "\x02\xB8\xBA\x079\x02\x02\xB9\xB3\x03\x02\x02\x02\xB9\xB4\x03\x02\x02" +
        "\x02\xB9\xB7\x03\x02\x02\x02\xB9\xB8\x03\x02\x02\x02\xBA\v\x03\x02\x02" +
        "\x02\xBB\xC0\x05\x0E\b\x02\xBC\xBD\x077\x02\x02\xBD\xBF\x05\x0E\b\x02" +
        "\xBE\xBC\x03\x02\x02\x02\xBF\xC2\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02" +
        "\xC0\xC1\x03\x02\x02\x02\xC1\r\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02" +
        "\xC3\xD7\x05\x04\x03\x02\xC4\xC5\x07?\x02\x02\xC5\xD7\x07\x1F\x02\x02" +
        "\xC6\xC7\x07?\x02\x02\xC7\xC8\x07\x1F\x02\x02\xC8\xD7\x05\x04\x03\x02" +
        "\xC9\xCA\x07>\x02\x02\xCA\xD7\x07\x1F\x02\x02\xCB\xCC\x07>\x02\x02\xCC" +
        "\xCD\x07\x1F\x02\x02\xCD\xD7\x05\x04\x03\x02\xCE\xCF\x071\x02\x02\xCF" +
        "\xD7\x07\x1F\x02\x02\xD0\xD1\x071\x02\x02\xD1\xD2\x07\x1F\x02\x02\xD2" +
        "\xD7\x05\x04\x03\x02\xD3\xD7\x078\x02\x02\xD4\xD7\x079\x02\x02\xD5\xD7" +
        "\x03\x02\x02\x02\xD6\xC3\x03\x02\x02\x02\xD6\xC4\x03\x02\x02\x02\xD6\xC6" +
        "\x03\x02\x02\x02\xD6\xC9\x03\x02\x02\x02\xD6\xCB\x03\x02\x02\x02\xD6\xCE" +
        "\x03\x02\x02\x02\xD6\xD0\x03\x02\x02\x02\xD6\xD3\x03\x02\x02\x02\xD6\xD4" +
        "\x03\x02\x02\x02\xD6\xD5\x03\x02\x02\x02\xD7\x0F\x03\x02\x02\x02\x10\x14" +
        "\x18\x1A)c\x99\x9B\xA1\xA5\xA9\xB0\xB9\xC0\xD6";
    return RParser;
}(Parser_1.Parser));
exports.RParser = RParser;
var ProgContext = /** @class */ (function (_super) {
    __extends(ProgContext, _super);
    function ProgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgContext.prototype.EOF = function () { return this.getToken(RParser.EOF, 0); };
    ProgContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    ProgContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(RParser.NL);
        }
        else {
            return this.getToken(RParser.NL, i);
        }
    };
    Object.defineProperty(ProgContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RParser.RULE_prog; },
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
var ExprContext = /** @class */ (function (_super) {
    __extends(ExprContext, _super);
    function ExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExprContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    ExprContext.prototype.sublist = function () {
        return this.tryGetRuleContext(0, SublistContext);
    };
    ExprContext.prototype.USER_OP = function () { return this.tryGetToken(RParser.USER_OP, 0); };
    ExprContext.prototype.formlist = function () {
        return this.tryGetRuleContext(0, FormlistContext);
    };
    ExprContext.prototype.exprlist = function () {
        return this.tryGetRuleContext(0, ExprlistContext);
    };
    ExprContext.prototype.ID = function () { return this.tryGetToken(RParser.ID, 0); };
    ExprContext.prototype.STRING = function () { return this.tryGetToken(RParser.STRING, 0); };
    ExprContext.prototype.HEX = function () { return this.tryGetToken(RParser.HEX, 0); };
    ExprContext.prototype.INT = function () { return this.tryGetToken(RParser.INT, 0); };
    ExprContext.prototype.FLOAT = function () { return this.tryGetToken(RParser.FLOAT, 0); };
    ExprContext.prototype.COMPLEX = function () { return this.tryGetToken(RParser.COMPLEX, 0); };
    Object.defineProperty(ExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RParser.RULE_expr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExprContext.prototype.enterRule = function (listener) {
        if (listener.enterExpr) {
            listener.enterExpr(this);
        }
    };
    // @Override
    ExprContext.prototype.exitRule = function (listener) {
        if (listener.exitExpr) {
            listener.exitExpr(this);
        }
    };
    // @Override
    ExprContext.prototype.accept = function (visitor) {
        if (visitor.visitExpr) {
            return visitor.visitExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExprContext = ExprContext;
var ExprlistContext = /** @class */ (function (_super) {
    __extends(ExprlistContext, _super);
    function ExprlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExprlistContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    ExprlistContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(RParser.NL);
        }
        else {
            return this.getToken(RParser.NL, i);
        }
    };
    Object.defineProperty(ExprlistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RParser.RULE_exprlist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExprlistContext.prototype.enterRule = function (listener) {
        if (listener.enterExprlist) {
            listener.enterExprlist(this);
        }
    };
    // @Override
    ExprlistContext.prototype.exitRule = function (listener) {
        if (listener.exitExprlist) {
            listener.exitExprlist(this);
        }
    };
    // @Override
    ExprlistContext.prototype.accept = function (visitor) {
        if (visitor.visitExprlist) {
            return visitor.visitExprlist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprlistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExprlistContext = ExprlistContext;
var FormlistContext = /** @class */ (function (_super) {
    __extends(FormlistContext, _super);
    function FormlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormlistContext.prototype.form = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FormContext);
        }
        else {
            return this.getRuleContext(i, FormContext);
        }
    };
    Object.defineProperty(FormlistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RParser.RULE_formlist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormlistContext.prototype.enterRule = function (listener) {
        if (listener.enterFormlist) {
            listener.enterFormlist(this);
        }
    };
    // @Override
    FormlistContext.prototype.exitRule = function (listener) {
        if (listener.exitFormlist) {
            listener.exitFormlist(this);
        }
    };
    // @Override
    FormlistContext.prototype.accept = function (visitor) {
        if (visitor.visitFormlist) {
            return visitor.visitFormlist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormlistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormlistContext = FormlistContext;
var FormContext = /** @class */ (function (_super) {
    __extends(FormContext, _super);
    function FormContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormContext.prototype.ID = function () { return this.tryGetToken(RParser.ID, 0); };
    FormContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    Object.defineProperty(FormContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RParser.RULE_form; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormContext.prototype.enterRule = function (listener) {
        if (listener.enterForm) {
            listener.enterForm(this);
        }
    };
    // @Override
    FormContext.prototype.exitRule = function (listener) {
        if (listener.exitForm) {
            listener.exitForm(this);
        }
    };
    // @Override
    FormContext.prototype.accept = function (visitor) {
        if (visitor.visitForm) {
            return visitor.visitForm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormContext = FormContext;
var SublistContext = /** @class */ (function (_super) {
    __extends(SublistContext, _super);
    function SublistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SublistContext.prototype.sub = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SubContext);
        }
        else {
            return this.getRuleContext(i, SubContext);
        }
    };
    Object.defineProperty(SublistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RParser.RULE_sublist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SublistContext.prototype.enterRule = function (listener) {
        if (listener.enterSublist) {
            listener.enterSublist(this);
        }
    };
    // @Override
    SublistContext.prototype.exitRule = function (listener) {
        if (listener.exitSublist) {
            listener.exitSublist(this);
        }
    };
    // @Override
    SublistContext.prototype.accept = function (visitor) {
        if (visitor.visitSublist) {
            return visitor.visitSublist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SublistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SublistContext = SublistContext;
var SubContext = /** @class */ (function (_super) {
    __extends(SubContext, _super);
    function SubContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    SubContext.prototype.ID = function () { return this.tryGetToken(RParser.ID, 0); };
    SubContext.prototype.STRING = function () { return this.tryGetToken(RParser.STRING, 0); };
    Object.defineProperty(SubContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RParser.RULE_sub; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubContext.prototype.enterRule = function (listener) {
        if (listener.enterSub) {
            listener.enterSub(this);
        }
    };
    // @Override
    SubContext.prototype.exitRule = function (listener) {
        if (listener.exitSub) {
            listener.exitSub(this);
        }
    };
    // @Override
    SubContext.prototype.accept = function (visitor) {
        if (visitor.visitSub) {
            return visitor.visitSub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubContext = SubContext;
