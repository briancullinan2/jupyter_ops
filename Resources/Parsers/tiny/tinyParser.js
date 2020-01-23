"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tiny/tiny.g4 by ANTLR 4.7.3-SNAPSHOT
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
var tinyParser = /** @class */ (function (_super) {
    __extends(tinyParser, _super);
    function tinyParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(tinyParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(tinyParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return tinyParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinyParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "tiny.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinyParser.prototype, "ruleNames", {
        // @Override
        get: function () { return tinyParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinyParser.prototype, "serializedATN", {
        // @Override
        get: function () { return tinyParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    tinyParser.prototype.program = function () {
        var _localctx = new ProgramContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, tinyParser.RULE_program);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 26;
                this.match(tinyParser.T__0);
                this.state = 27;
                this.stmt_list(0);
                this.state = 28;
                this.match(tinyParser.T__1);
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
    tinyParser.prototype.stmt_list = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Stmt_listContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 2;
        this.enterRecursionRule(_localctx, 2, tinyParser.RULE_stmt_list, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 31;
                    this.stmt();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 37;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new Stmt_listContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, tinyParser.RULE_stmt_list);
                                this.state = 33;
                                if (!(this.precpred(this._ctx, 2))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                }
                                this.state = 34;
                                this.stmt();
                            }
                        }
                    }
                    this.state = 39;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
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
    tinyParser.prototype.stmt = function () {
        var _localctx = new StmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, tinyParser.RULE_stmt);
        try {
            this.state = 43;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case tinyParser.ID:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 40;
                        this.assign_stmt();
                    }
                    break;
                case tinyParser.T__3:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 41;
                        this.read_stmt();
                    }
                    break;
                case tinyParser.T__4:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 42;
                        this.write_stmt();
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
    tinyParser.prototype.assign_stmt = function () {
        var _localctx = new Assign_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, tinyParser.RULE_assign_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 45;
                this.ident();
                this.state = 46;
                this.match(tinyParser.T__2);
                this.state = 47;
                this.expr(0);
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
    tinyParser.prototype.read_stmt = function () {
        var _localctx = new Read_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, tinyParser.RULE_read_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 49;
                this.match(tinyParser.T__3);
                this.state = 50;
                this.id_list(0);
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
    tinyParser.prototype.write_stmt = function () {
        var _localctx = new Write_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, tinyParser.RULE_write_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 52;
                this.match(tinyParser.T__4);
                this.state = 53;
                this.expr_list(0);
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
    tinyParser.prototype.id_list = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Id_listContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 12;
        this.enterRecursionRule(_localctx, 12, tinyParser.RULE_id_list, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 56;
                    this.ident();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 63;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new Id_listContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, tinyParser.RULE_id_list);
                                this.state = 58;
                                if (!(this.precpred(this._ctx, 2))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                }
                                this.state = 59;
                                this.match(tinyParser.T__5);
                                this.state = 60;
                                this.ident();
                            }
                        }
                    }
                    this.state = 65;
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinyParser.prototype.expr_list = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Expr_listContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 14;
        this.enterRecursionRule(_localctx, 14, tinyParser.RULE_expr_list, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 67;
                    this.expr(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 74;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new Expr_listContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, tinyParser.RULE_expr_list);
                                this.state = 69;
                                if (!(this.precpred(this._ctx, 2))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                }
                                this.state = 70;
                                this.match(tinyParser.T__5);
                                this.state = 71;
                                this.expr(0);
                            }
                        }
                    }
                    this.state = 76;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
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
    tinyParser.prototype.expr = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ExprContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 16;
        this.enterRecursionRule(_localctx, 16, tinyParser.RULE_expr, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 78;
                    this.factor();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 86;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new ExprContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, tinyParser.RULE_expr);
                                this.state = 80;
                                if (!(this.precpred(this._ctx, 2))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                }
                                this.state = 81;
                                this.op();
                                this.state = 82;
                                this.factor();
                            }
                        }
                    }
                    this.state = 88;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
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
    tinyParser.prototype.factor = function () {
        var _localctx = new FactorContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, tinyParser.RULE_factor);
        try {
            this.state = 91;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case tinyParser.ID:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 89;
                        this.ident();
                    }
                    break;
                case tinyParser.T__6:
                case tinyParser.NUMBER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 90;
                        this.integer();
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
    tinyParser.prototype.integer = function () {
        var _localctx = new IntegerContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, tinyParser.RULE_integer);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 94;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === tinyParser.T__6) {
                    {
                        this.state = 93;
                        this.match(tinyParser.T__6);
                    }
                }
                this.state = 96;
                this.match(tinyParser.NUMBER);
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
    tinyParser.prototype.op = function () {
        var _localctx = new OpContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, tinyParser.RULE_op);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 98;
                _la = this._input.LA(1);
                if (!(_la === tinyParser.T__6 || _la === tinyParser.T__7)) {
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
    tinyParser.prototype.ident = function () {
        var _localctx = new IdentContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, tinyParser.RULE_ident);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 100;
                this.match(tinyParser.ID);
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
    tinyParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 1:
                return this.stmt_list_sempred(_localctx, predIndex);
            case 6:
                return this.id_list_sempred(_localctx, predIndex);
            case 7:
                return this.expr_list_sempred(_localctx, predIndex);
            case 8:
                return this.expr_sempred(_localctx, predIndex);
        }
        return true;
    };
    tinyParser.prototype.stmt_list_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 2);
        }
        return true;
    };
    tinyParser.prototype.id_list_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 1:
                return this.precpred(this._ctx, 2);
        }
        return true;
    };
    tinyParser.prototype.expr_list_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 2:
                return this.precpred(this._ctx, 2);
        }
        return true;
    };
    tinyParser.prototype.expr_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 3:
                return this.precpred(this._ctx, 2);
        }
        return true;
    };
    Object.defineProperty(tinyParser, "_ATN", {
        get: function () {
            if (!tinyParser.__ATN) {
                tinyParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(tinyParser._serializedATN));
            }
            return tinyParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    tinyParser.T__0 = 1;
    tinyParser.T__1 = 2;
    tinyParser.T__2 = 3;
    tinyParser.T__3 = 4;
    tinyParser.T__4 = 5;
    tinyParser.T__5 = 6;
    tinyParser.T__6 = 7;
    tinyParser.T__7 = 8;
    tinyParser.ID = 9;
    tinyParser.NUMBER = 10;
    tinyParser.WS = 11;
    tinyParser.RULE_program = 0;
    tinyParser.RULE_stmt_list = 1;
    tinyParser.RULE_stmt = 2;
    tinyParser.RULE_assign_stmt = 3;
    tinyParser.RULE_read_stmt = 4;
    tinyParser.RULE_write_stmt = 5;
    tinyParser.RULE_id_list = 6;
    tinyParser.RULE_expr_list = 7;
    tinyParser.RULE_expr = 8;
    tinyParser.RULE_factor = 9;
    tinyParser.RULE_integer = 10;
    tinyParser.RULE_op = 11;
    tinyParser.RULE_ident = 12;
    // tslint:disable:no-trailing-whitespace
    tinyParser.ruleNames = [
        "program", "stmt_list", "stmt", "assign_stmt", "read_stmt", "write_stmt",
        "id_list", "expr_list", "expr", "factor", "integer", "op", "ident",
    ];
    tinyParser._LITERAL_NAMES = [
        undefined, "'BEGIN'", "'END'", "':='", "'READ'", "'WRITE'", "','", "'-'",
        "'+'",
    ];
    tinyParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "ID", "NUMBER", "WS",
    ];
    tinyParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(tinyParser._LITERAL_NAMES, tinyParser._SYMBOLIC_NAMES, []);
    tinyParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\ri\x04\x02\t" +
        "\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
        "\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04\x0E" +
        "\t\x0E\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x07\x03&\n\x03\f\x03\x0E\x03)\v\x03\x03\x04\x03\x04\x03\x04\x05" +
        "\x04.\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03" +
        "\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b@\n\b\f" +
        "\b\x0E\bC\v\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\tK\n\t\f\t\x0E\t" +
        "N\v\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\nW\n\n\f\n\x0E\nZ" +
        "\v\n\x03\v\x03\v\x05\v^\n\v\x03\f\x05\fa\n\f\x03\f\x03\f\x03\r\x03\r\x03" +
        "\x0E\x03\x0E\x03\x0E\x02\x02\x06\x04\x0E\x10\x12\x0F\x02\x02\x04\x02\x06" +
        "\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
        "\x1A\x02\x02\x03\x03\x02\t\n\x02c\x02\x1C\x03\x02\x02\x02\x04 \x03\x02" +
        "\x02\x02\x06-\x03\x02\x02\x02\b/\x03\x02\x02\x02\n3\x03\x02\x02\x02\f" +
        "6\x03\x02\x02\x02\x0E9\x03\x02\x02\x02\x10D\x03\x02\x02\x02\x12O\x03\x02" +
        "\x02\x02\x14]\x03\x02\x02\x02\x16`\x03\x02\x02\x02\x18d\x03\x02\x02\x02" +
        "\x1Af\x03\x02\x02\x02\x1C\x1D\x07\x03\x02\x02\x1D\x1E\x05\x04\x03\x02" +
        "\x1E\x1F\x07\x04\x02\x02\x1F\x03\x03\x02\x02\x02 !\b\x03\x01\x02!\"\x05" +
        "\x06\x04\x02\"\'\x03\x02\x02\x02#$\f\x04\x02\x02$&\x05\x06\x04\x02%#\x03" +
        "\x02\x02\x02&)\x03\x02\x02\x02\'%\x03\x02\x02\x02\'(\x03\x02\x02\x02(" +
        "\x05\x03\x02\x02\x02)\'\x03\x02\x02\x02*.\x05\b\x05\x02+.\x05\n\x06\x02" +
        ",.\x05\f\x07\x02-*\x03\x02\x02\x02-+\x03\x02\x02\x02-,\x03\x02\x02\x02" +
        ".\x07\x03\x02\x02\x02/0\x05\x1A\x0E\x0201\x07\x05\x02\x0212\x05\x12\n" +
        "\x022\t\x03\x02\x02\x0234\x07\x06\x02\x0245\x05\x0E\b\x025\v\x03\x02\x02" +
        "\x0267\x07\x07\x02\x0278\x05\x10\t\x028\r\x03\x02\x02\x029:\b\b\x01\x02" +
        ":;\x05\x1A\x0E\x02;A\x03\x02\x02\x02<=\f\x04\x02\x02=>\x07\b\x02\x02>" +
        "@\x05\x1A\x0E\x02?<\x03\x02\x02\x02@C\x03\x02\x02\x02A?\x03\x02\x02\x02" +
        "AB\x03\x02\x02\x02B\x0F\x03\x02\x02\x02CA\x03\x02\x02\x02DE\b\t\x01\x02" +
        "EF\x05\x12\n\x02FL\x03\x02\x02\x02GH\f\x04\x02\x02HI\x07\b\x02\x02IK\x05" +
        "\x12\n\x02JG\x03\x02\x02\x02KN\x03\x02\x02\x02LJ\x03\x02\x02\x02LM\x03" +
        "\x02\x02\x02M\x11\x03\x02\x02\x02NL\x03\x02\x02\x02OP\b\n\x01\x02PQ\x05" +
        "\x14\v\x02QX\x03\x02\x02\x02RS\f\x04\x02\x02ST\x05\x18\r\x02TU\x05\x14" +
        "\v\x02UW\x03\x02\x02\x02VR\x03\x02\x02\x02WZ\x03\x02\x02\x02XV\x03\x02" +
        "\x02\x02XY\x03\x02\x02\x02Y\x13\x03\x02\x02\x02ZX\x03\x02\x02\x02[^\x05" +
        "\x1A\x0E\x02\\^\x05\x16\f\x02][\x03\x02\x02\x02]\\\x03\x02\x02\x02^\x15" +
        "\x03\x02\x02\x02_a\x07\t\x02\x02`_\x03\x02\x02\x02`a\x03\x02\x02\x02a" +
        "b\x03\x02\x02\x02bc\x07\f\x02\x02c\x17\x03\x02\x02\x02de\t\x02\x02\x02" +
        "e\x19\x03\x02\x02\x02fg\x07\v\x02\x02g\x1B\x03\x02\x02\x02\t\'-ALX]`";
    return tinyParser;
}(Parser_1.Parser));
exports.tinyParser = tinyParser;
var ProgramContext = /** @class */ (function (_super) {
    __extends(ProgramContext, _super);
    function ProgramContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgramContext.prototype.stmt_list = function () {
        return this.getRuleContext(0, Stmt_listContext);
    };
    Object.defineProperty(ProgramContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinyParser.RULE_program; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProgramContext.prototype.enterRule = function (listener) {
        if (listener.enterProgram) {
            listener.enterProgram(this);
        }
    };
    // @Override
    ProgramContext.prototype.exitRule = function (listener) {
        if (listener.exitProgram) {
            listener.exitProgram(this);
        }
    };
    // @Override
    ProgramContext.prototype.accept = function (visitor) {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProgramContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProgramContext = ProgramContext;
var Stmt_listContext = /** @class */ (function (_super) {
    __extends(Stmt_listContext, _super);
    function Stmt_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Stmt_listContext.prototype.stmt_list = function () {
        return this.tryGetRuleContext(0, Stmt_listContext);
    };
    Stmt_listContext.prototype.stmt = function () {
        return this.getRuleContext(0, StmtContext);
    };
    Object.defineProperty(Stmt_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinyParser.RULE_stmt_list; },
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
    StmtContext.prototype.assign_stmt = function () {
        return this.tryGetRuleContext(0, Assign_stmtContext);
    };
    StmtContext.prototype.read_stmt = function () {
        return this.tryGetRuleContext(0, Read_stmtContext);
    };
    StmtContext.prototype.write_stmt = function () {
        return this.tryGetRuleContext(0, Write_stmtContext);
    };
    Object.defineProperty(StmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinyParser.RULE_stmt; },
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
var Assign_stmtContext = /** @class */ (function (_super) {
    __extends(Assign_stmtContext, _super);
    function Assign_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Assign_stmtContext.prototype.ident = function () {
        return this.getRuleContext(0, IdentContext);
    };
    Assign_stmtContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    Object.defineProperty(Assign_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinyParser.RULE_assign_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Assign_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterAssign_stmt) {
            listener.enterAssign_stmt(this);
        }
    };
    // @Override
    Assign_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitAssign_stmt) {
            listener.exitAssign_stmt(this);
        }
    };
    // @Override
    Assign_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitAssign_stmt) {
            return visitor.visitAssign_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Assign_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Assign_stmtContext = Assign_stmtContext;
var Read_stmtContext = /** @class */ (function (_super) {
    __extends(Read_stmtContext, _super);
    function Read_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Read_stmtContext.prototype.id_list = function () {
        return this.getRuleContext(0, Id_listContext);
    };
    Object.defineProperty(Read_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinyParser.RULE_read_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Read_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterRead_stmt) {
            listener.enterRead_stmt(this);
        }
    };
    // @Override
    Read_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitRead_stmt) {
            listener.exitRead_stmt(this);
        }
    };
    // @Override
    Read_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitRead_stmt) {
            return visitor.visitRead_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Read_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Read_stmtContext = Read_stmtContext;
var Write_stmtContext = /** @class */ (function (_super) {
    __extends(Write_stmtContext, _super);
    function Write_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Write_stmtContext.prototype.expr_list = function () {
        return this.getRuleContext(0, Expr_listContext);
    };
    Object.defineProperty(Write_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinyParser.RULE_write_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Write_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterWrite_stmt) {
            listener.enterWrite_stmt(this);
        }
    };
    // @Override
    Write_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitWrite_stmt) {
            listener.exitWrite_stmt(this);
        }
    };
    // @Override
    Write_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitWrite_stmt) {
            return visitor.visitWrite_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Write_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Write_stmtContext = Write_stmtContext;
var Id_listContext = /** @class */ (function (_super) {
    __extends(Id_listContext, _super);
    function Id_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Id_listContext.prototype.id_list = function () {
        return this.tryGetRuleContext(0, Id_listContext);
    };
    Id_listContext.prototype.ident = function () {
        return this.getRuleContext(0, IdentContext);
    };
    Object.defineProperty(Id_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinyParser.RULE_id_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Id_listContext.prototype.enterRule = function (listener) {
        if (listener.enterId_list) {
            listener.enterId_list(this);
        }
    };
    // @Override
    Id_listContext.prototype.exitRule = function (listener) {
        if (listener.exitId_list) {
            listener.exitId_list(this);
        }
    };
    // @Override
    Id_listContext.prototype.accept = function (visitor) {
        if (visitor.visitId_list) {
            return visitor.visitId_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Id_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Id_listContext = Id_listContext;
var Expr_listContext = /** @class */ (function (_super) {
    __extends(Expr_listContext, _super);
    function Expr_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Expr_listContext.prototype.expr_list = function () {
        return this.tryGetRuleContext(0, Expr_listContext);
    };
    Expr_listContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    Object.defineProperty(Expr_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinyParser.RULE_expr_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Expr_listContext.prototype.enterRule = function (listener) {
        if (listener.enterExpr_list) {
            listener.enterExpr_list(this);
        }
    };
    // @Override
    Expr_listContext.prototype.exitRule = function (listener) {
        if (listener.exitExpr_list) {
            listener.exitExpr_list(this);
        }
    };
    // @Override
    Expr_listContext.prototype.accept = function (visitor) {
        if (visitor.visitExpr_list) {
            return visitor.visitExpr_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Expr_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Expr_listContext = Expr_listContext;
var ExprContext = /** @class */ (function (_super) {
    __extends(ExprContext, _super);
    function ExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExprContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    ExprContext.prototype.op = function () {
        return this.tryGetRuleContext(0, OpContext);
    };
    ExprContext.prototype.factor = function () {
        return this.getRuleContext(0, FactorContext);
    };
    Object.defineProperty(ExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinyParser.RULE_expr; },
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
var FactorContext = /** @class */ (function (_super) {
    __extends(FactorContext, _super);
    function FactorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FactorContext.prototype.ident = function () {
        return this.tryGetRuleContext(0, IdentContext);
    };
    FactorContext.prototype.integer = function () {
        return this.tryGetRuleContext(0, IntegerContext);
    };
    Object.defineProperty(FactorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinyParser.RULE_factor; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FactorContext.prototype.enterRule = function (listener) {
        if (listener.enterFactor) {
            listener.enterFactor(this);
        }
    };
    // @Override
    FactorContext.prototype.exitRule = function (listener) {
        if (listener.exitFactor) {
            listener.exitFactor(this);
        }
    };
    // @Override
    FactorContext.prototype.accept = function (visitor) {
        if (visitor.visitFactor) {
            return visitor.visitFactor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FactorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FactorContext = FactorContext;
var IntegerContext = /** @class */ (function (_super) {
    __extends(IntegerContext, _super);
    function IntegerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntegerContext.prototype.NUMBER = function () { return this.getToken(tinyParser.NUMBER, 0); };
    Object.defineProperty(IntegerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinyParser.RULE_integer; },
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
var OpContext = /** @class */ (function (_super) {
    __extends(OpContext, _super);
    function OpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(OpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinyParser.RULE_op; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OpContext.prototype.enterRule = function (listener) {
        if (listener.enterOp) {
            listener.enterOp(this);
        }
    };
    // @Override
    OpContext.prototype.exitRule = function (listener) {
        if (listener.exitOp) {
            listener.exitOp(this);
        }
    };
    // @Override
    OpContext.prototype.accept = function (visitor) {
        if (visitor.visitOp) {
            return visitor.visitOp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OpContext = OpContext;
var IdentContext = /** @class */ (function (_super) {
    __extends(IdentContext, _super);
    function IdentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentContext.prototype.ID = function () { return this.getToken(tinyParser.ID, 0); };
    Object.defineProperty(IdentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinyParser.RULE_ident; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdentContext.prototype.enterRule = function (listener) {
        if (listener.enterIdent) {
            listener.enterIdent(this);
        }
    };
    // @Override
    IdentContext.prototype.exitRule = function (listener) {
        if (listener.exitIdent) {
            listener.exitIdent(this);
        }
    };
    // @Override
    IdentContext.prototype.accept = function (visitor) {
        if (visitor.visitIdent) {
            return visitor.visitIdent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdentContext = IdentContext;
