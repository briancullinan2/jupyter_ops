"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/peoplecode/PeopleCode.g4 by ANTLR 4.7.3-SNAPSHOT
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
var PeopleCodeParser = /** @class */ (function (_super) {
    __extends(PeopleCodeParser, _super);
    function PeopleCodeParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(PeopleCodeParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(PeopleCodeParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return PeopleCodeParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeopleCodeParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "PeopleCode.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeopleCodeParser.prototype, "ruleNames", {
        // @Override
        get: function () { return PeopleCodeParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeopleCodeParser.prototype, "serializedATN", {
        // @Override
        get: function () { return PeopleCodeParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    PeopleCodeParser.prototype.program = function () {
        var _localctx = new ProgramContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, PeopleCodeParser.RULE_program);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 80;
                this.stmtList();
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
    PeopleCodeParser.prototype.stmtList = function () {
        var _localctx = new StmtListContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, PeopleCodeParser.RULE_stmtList);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 90;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 82;
                                this.stmt();
                                this.state = 84;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                do {
                                    {
                                        {
                                            this.state = 83;
                                            this.match(PeopleCodeParser.T__0);
                                        }
                                    }
                                    this.state = 86;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                } while (_la === PeopleCodeParser.T__0);
                            }
                        }
                    }
                    this.state = 92;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                }
                this.state = 94;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PeopleCodeParser.T__1) | (1 << PeopleCodeParser.T__2) | (1 << PeopleCodeParser.T__3) | (1 << PeopleCodeParser.T__4) | (1 << PeopleCodeParser.T__5) | (1 << PeopleCodeParser.T__6) | (1 << PeopleCodeParser.T__8) | (1 << PeopleCodeParser.T__10) | (1 << PeopleCodeParser.T__14) | (1 << PeopleCodeParser.T__15) | (1 << PeopleCodeParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PeopleCodeParser.T__31 - 32)) | (1 << (PeopleCodeParser.T__32 - 32)) | (1 << (PeopleCodeParser.T__36 - 32)) | (1 << (PeopleCodeParser.T__39 - 32)) | (1 << (PeopleCodeParser.T__42 - 32)) | (1 << (PeopleCodeParser.T__43 - 32)) | (1 << (PeopleCodeParser.T__52 - 32)) | (1 << (PeopleCodeParser.T__56 - 32)) | (1 << (PeopleCodeParser.T__60 - 32)) | (1 << (PeopleCodeParser.T__62 - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (PeopleCodeParser.T__66 - 67)) | (1 << (PeopleCodeParser.T__70 - 67)) | (1 << (PeopleCodeParser.DecimalLiteral - 67)) | (1 << (PeopleCodeParser.IntegerLiteral - 67)) | (1 << (PeopleCodeParser.StringLiteral - 67)) | (1 << (PeopleCodeParser.BoolLiteral - 67)) | (1 << (PeopleCodeParser.VAR_ID - 67)) | (1 << (PeopleCodeParser.SYS_VAR_ID - 67)) | (1 << (PeopleCodeParser.GENERIC_ID - 67)))) !== 0)) {
                    {
                        this.state = 93;
                        this.stmt();
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
    PeopleCodeParser.prototype.stmt = function () {
        var _localctx = new StmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, PeopleCodeParser.RULE_stmt);
        var _la;
        try {
            this.state = 126;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                case 1:
                    _localctx = new StmtAppClassImportContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 96;
                        this.appClassImport();
                    }
                    break;
                case 2:
                    _localctx = new StmtExternalFuncImportContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 97;
                        this.extFuncImport();
                    }
                    break;
                case 3:
                    _localctx = new StmtClassDeclarationContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 98;
                        this.classDeclaration();
                    }
                    break;
                case 4:
                    _localctx = new StmtMethodImplContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 99;
                        this.methodImpl();
                    }
                    break;
                case 5:
                    _localctx = new StmtGetImplContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 100;
                        this.getImpl();
                    }
                    break;
                case 6:
                    _localctx = new StmtSetImplContext(_localctx);
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 101;
                        this.setImpl();
                    }
                    break;
                case 7:
                    _localctx = new StmtFuncImplContext(_localctx);
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 102;
                        this.funcImpl();
                    }
                    break;
                case 8:
                    _localctx = new StmtVarDeclarationContext(_localctx);
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 103;
                        this.varDeclaration();
                    }
                    break;
                case 9:
                    _localctx = new StmtIfContext(_localctx);
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 104;
                        this.ifStmt();
                    }
                    break;
                case 10:
                    _localctx = new StmtForContext(_localctx);
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 105;
                        this.forStmt();
                    }
                    break;
                case 11:
                    _localctx = new StmtWhileContext(_localctx);
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 106;
                        this.whileStmt();
                    }
                    break;
                case 12:
                    _localctx = new StmtEvaluateContext(_localctx);
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 107;
                        this.evaluateStmt();
                    }
                    break;
                case 13:
                    _localctx = new StmtTryCatchContext(_localctx);
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 108;
                        this.tryCatchStmt();
                    }
                    break;
                case 14:
                    _localctx = new StmtExitContext(_localctx);
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 109;
                        this.match(PeopleCodeParser.T__1);
                    }
                    break;
                case 15:
                    _localctx = new StmtBreakContext(_localctx);
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 110;
                        this.match(PeopleCodeParser.T__2);
                    }
                    break;
                case 16:
                    _localctx = new StmtErrorContext(_localctx);
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 111;
                        this.match(PeopleCodeParser.T__3);
                        this.state = 112;
                        this.expr(0);
                    }
                    break;
                case 17:
                    _localctx = new StmtWarningContext(_localctx);
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 113;
                        this.match(PeopleCodeParser.T__4);
                        this.state = 114;
                        this.expr(0);
                    }
                    break;
                case 18:
                    _localctx = new StmtReturnContext(_localctx);
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 115;
                        this.match(PeopleCodeParser.T__5);
                        this.state = 117;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PeopleCodeParser.T__8) | (1 << PeopleCodeParser.T__10) | (1 << PeopleCodeParser.T__14) | (1 << PeopleCodeParser.T__15))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (PeopleCodeParser.T__70 - 71)) | (1 << (PeopleCodeParser.DecimalLiteral - 71)) | (1 << (PeopleCodeParser.IntegerLiteral - 71)) | (1 << (PeopleCodeParser.StringLiteral - 71)) | (1 << (PeopleCodeParser.BoolLiteral - 71)) | (1 << (PeopleCodeParser.VAR_ID - 71)) | (1 << (PeopleCodeParser.SYS_VAR_ID - 71)) | (1 << (PeopleCodeParser.GENERIC_ID - 71)))) !== 0)) {
                            {
                                this.state = 116;
                                this.expr(0);
                            }
                        }
                    }
                    break;
                case 19:
                    _localctx = new StmtThrowContext(_localctx);
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 119;
                        this.match(PeopleCodeParser.T__6);
                        this.state = 120;
                        this.expr(0);
                    }
                    break;
                case 20:
                    _localctx = new StmtAssignContext(_localctx);
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 121;
                        this.expr(0);
                        this.state = 122;
                        this.match(PeopleCodeParser.T__7);
                        this.state = 123;
                        this.expr(0);
                    }
                    break;
                case 21:
                    _localctx = new StmtExprContext(_localctx);
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 125;
                        this.expr(0);
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
    PeopleCodeParser.prototype.expr = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ExprContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 6;
        this.enterRecursionRule(_localctx, 6, PeopleCodeParser.RULE_expr, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 142;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PeopleCodeParser.T__8:
                        {
                            _localctx = new ExprParenthesizedContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 129;
                            this.match(PeopleCodeParser.T__8);
                            this.state = 130;
                            this.expr(0);
                            this.state = 131;
                            this.match(PeopleCodeParser.T__9);
                        }
                        break;
                    case PeopleCodeParser.T__10:
                        {
                            _localctx = new ExprDynamicReferenceContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 133;
                            this.match(PeopleCodeParser.T__10);
                            this.state = 134;
                            this.expr(15);
                        }
                        break;
                    case PeopleCodeParser.DecimalLiteral:
                    case PeopleCodeParser.IntegerLiteral:
                    case PeopleCodeParser.StringLiteral:
                    case PeopleCodeParser.BoolLiteral:
                        {
                            _localctx = new ExprLiteralContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 135;
                            this.literal();
                        }
                        break;
                    case PeopleCodeParser.VAR_ID:
                    case PeopleCodeParser.SYS_VAR_ID:
                    case PeopleCodeParser.GENERIC_ID:
                        {
                            _localctx = new ExprIdContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 136;
                            this.id();
                        }
                        break;
                    case PeopleCodeParser.T__70:
                        {
                            _localctx = new ExprCreateContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 137;
                            this.createInvocation();
                        }
                        break;
                    case PeopleCodeParser.T__14:
                        {
                            _localctx = new ExprNegateContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 138;
                            this.match(PeopleCodeParser.T__14);
                            this.state = 139;
                            this.expr(8);
                        }
                        break;
                    case PeopleCodeParser.T__15:
                        {
                            _localctx = new ExprNotContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 140;
                            this.match(PeopleCodeParser.T__15);
                            this.state = 141;
                            this.expr(7);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 195;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 193;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExprMulDivContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, PeopleCodeParser.RULE_expr);
                                        this.state = 144;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 147;
                                        this._errHandler.sync(this);
                                        switch (this._input.LA(1)) {
                                            case PeopleCodeParser.T__16:
                                                {
                                                    this.state = 145;
                                                    _localctx._m = this.match(PeopleCodeParser.T__16);
                                                }
                                                break;
                                            case PeopleCodeParser.T__17:
                                                {
                                                    this.state = 146;
                                                    _localctx._d = this.match(PeopleCodeParser.T__17);
                                                }
                                                break;
                                            default:
                                                throw new NoViableAltException_1.NoViableAltException(this);
                                        }
                                        this.state = 149;
                                        this.expr(7);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExprAddSubContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, PeopleCodeParser.RULE_expr);
                                        this.state = 150;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 153;
                                        this._errHandler.sync(this);
                                        switch (this._input.LA(1)) {
                                            case PeopleCodeParser.T__18:
                                                {
                                                    this.state = 151;
                                                    _localctx._a = this.match(PeopleCodeParser.T__18);
                                                }
                                                break;
                                            case PeopleCodeParser.T__14:
                                                {
                                                    this.state = 152;
                                                    _localctx._s = this.match(PeopleCodeParser.T__14);
                                                }
                                                break;
                                            default:
                                                throw new NoViableAltException_1.NoViableAltException(this);
                                        }
                                        this.state = 155;
                                        this.expr(6);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new ExprComparisonContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, PeopleCodeParser.RULE_expr);
                                        this.state = 156;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 161;
                                        this._errHandler.sync(this);
                                        switch (this._input.LA(1)) {
                                            case PeopleCodeParser.T__19:
                                                {
                                                    this.state = 157;
                                                    _localctx._le = this.match(PeopleCodeParser.T__19);
                                                }
                                                break;
                                            case PeopleCodeParser.T__20:
                                                {
                                                    this.state = 158;
                                                    _localctx._ge = this.match(PeopleCodeParser.T__20);
                                                }
                                                break;
                                            case PeopleCodeParser.T__21:
                                                {
                                                    this.state = 159;
                                                    _localctx._l = this.match(PeopleCodeParser.T__21);
                                                }
                                                break;
                                            case PeopleCodeParser.T__22:
                                                {
                                                    this.state = 160;
                                                    _localctx._g = this.match(PeopleCodeParser.T__22);
                                                }
                                                break;
                                            default:
                                                throw new NoViableAltException_1.NoViableAltException(this);
                                        }
                                        this.state = 163;
                                        this.expr(5);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new ExprEqualityContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, PeopleCodeParser.RULE_expr);
                                        this.state = 164;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 167;
                                        this._errHandler.sync(this);
                                        switch (this._input.LA(1)) {
                                            case PeopleCodeParser.T__7:
                                                {
                                                    this.state = 165;
                                                    _localctx._e = this.match(PeopleCodeParser.T__7);
                                                }
                                                break;
                                            case PeopleCodeParser.T__23:
                                                {
                                                    this.state = 166;
                                                    _localctx._i = this.match(PeopleCodeParser.T__23);
                                                }
                                                break;
                                            default:
                                                throw new NoViableAltException_1.NoViableAltException(this);
                                        }
                                        this.state = 169;
                                        this.expr(4);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new ExprBooleanContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, PeopleCodeParser.RULE_expr);
                                        this.state = 170;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 173;
                                        this._errHandler.sync(this);
                                        switch (this._input.LA(1)) {
                                            case PeopleCodeParser.T__24:
                                                {
                                                    this.state = 171;
                                                    _localctx._op = this.match(PeopleCodeParser.T__24);
                                                }
                                                break;
                                            case PeopleCodeParser.T__25:
                                                {
                                                    this.state = 172;
                                                    _localctx._op = this.match(PeopleCodeParser.T__25);
                                                }
                                                break;
                                            default:
                                                throw new NoViableAltException_1.NoViableAltException(this);
                                        }
                                        this.state = 175;
                                        this.expr(3);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new ExprConcatContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, PeopleCodeParser.RULE_expr);
                                        this.state = 176;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 177;
                                        this.match(PeopleCodeParser.T__26);
                                        this.state = 178;
                                        this.expr(2);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new ExprDotAccessContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, PeopleCodeParser.RULE_expr);
                                        this.state = 179;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 180;
                                        this.match(PeopleCodeParser.T__11);
                                        this.state = 181;
                                        this.id();
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new ExprArrayIndexContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, PeopleCodeParser.RULE_expr);
                                        this.state = 182;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 183;
                                        this.match(PeopleCodeParser.T__12);
                                        this.state = 184;
                                        this.exprList();
                                        this.state = 185;
                                        this.match(PeopleCodeParser.T__13);
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new ExprFnOrIdxCallContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, PeopleCodeParser.RULE_expr);
                                        this.state = 187;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 188;
                                        this.match(PeopleCodeParser.T__8);
                                        this.state = 190;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PeopleCodeParser.T__8) | (1 << PeopleCodeParser.T__10) | (1 << PeopleCodeParser.T__14) | (1 << PeopleCodeParser.T__15))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (PeopleCodeParser.T__70 - 71)) | (1 << (PeopleCodeParser.DecimalLiteral - 71)) | (1 << (PeopleCodeParser.IntegerLiteral - 71)) | (1 << (PeopleCodeParser.StringLiteral - 71)) | (1 << (PeopleCodeParser.BoolLiteral - 71)) | (1 << (PeopleCodeParser.VAR_ID - 71)) | (1 << (PeopleCodeParser.SYS_VAR_ID - 71)) | (1 << (PeopleCodeParser.GENERIC_ID - 71)))) !== 0)) {
                                            {
                                                this.state = 189;
                                                this.exprList();
                                            }
                                        }
                                        this.state = 192;
                                        this.match(PeopleCodeParser.T__9);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 197;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
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
    PeopleCodeParser.prototype.exprList = function () {
        var _localctx = new ExprListContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, PeopleCodeParser.RULE_exprList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 198;
                this.expr(0);
                this.state = 203;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PeopleCodeParser.T__27) {
                    {
                        {
                            this.state = 199;
                            this.match(PeopleCodeParser.T__27);
                            this.state = 200;
                            this.expr(0);
                        }
                    }
                    this.state = 205;
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
    PeopleCodeParser.prototype.varDeclaration = function () {
        var _localctx = new VarDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, PeopleCodeParser.RULE_varDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 206;
                _localctx._varScope = this.match(PeopleCodeParser.GENERIC_ID);
                this.state = 207;
                this.varType();
                this.state = 208;
                this.varDeclarator();
                this.state = 213;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PeopleCodeParser.T__27) {
                    {
                        {
                            this.state = 209;
                            this.match(PeopleCodeParser.T__27);
                            this.state = 210;
                            this.varDeclarator();
                        }
                    }
                    this.state = 215;
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
    PeopleCodeParser.prototype.varDeclarator = function () {
        var _localctx = new VarDeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, PeopleCodeParser.RULE_varDeclarator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 216;
                this.match(PeopleCodeParser.VAR_ID);
                this.state = 219;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PeopleCodeParser.T__7) {
                    {
                        this.state = 217;
                        this.match(PeopleCodeParser.T__7);
                        this.state = 218;
                        this.expr(0);
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
    PeopleCodeParser.prototype.varType = function () {
        var _localctx = new VarTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, PeopleCodeParser.RULE_varType);
        var _la;
        try {
            this.state = 227;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 221;
                        this.match(PeopleCodeParser.GENERIC_ID);
                        this.state = 224;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PeopleCodeParser.T__28) {
                            {
                                this.state = 222;
                                this.match(PeopleCodeParser.T__28);
                                this.state = 223;
                                this.varType();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 226;
                        this.appClassPath();
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
    PeopleCodeParser.prototype.appClassImport = function () {
        var _localctx = new AppClassImportContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, PeopleCodeParser.RULE_appClassImport);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 229;
                this.match(PeopleCodeParser.T__29);
                this.state = 232;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                    case 1:
                        {
                            this.state = 230;
                            this.appPkgPath();
                        }
                        break;
                    case 2:
                        {
                            this.state = 231;
                            this.appClassPath();
                        }
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
    PeopleCodeParser.prototype.appPkgPath = function () {
        var _localctx = new AppPkgPathContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, PeopleCodeParser.RULE_appPkgPath);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 234;
                this.match(PeopleCodeParser.GENERIC_ID);
                this.state = 239;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 235;
                                this.match(PeopleCodeParser.T__30);
                                this.state = 236;
                                this.match(PeopleCodeParser.GENERIC_ID);
                            }
                        }
                    }
                    this.state = 241;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                }
                this.state = 242;
                this.match(PeopleCodeParser.T__30);
                this.state = 243;
                this.match(PeopleCodeParser.T__16);
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
    PeopleCodeParser.prototype.appClassPath = function () {
        var _localctx = new AppClassPathContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, PeopleCodeParser.RULE_appClassPath);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 245;
                this.match(PeopleCodeParser.GENERIC_ID);
                this.state = 248;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 246;
                            this.match(PeopleCodeParser.T__30);
                            this.state = 247;
                            this.match(PeopleCodeParser.GENERIC_ID);
                        }
                    }
                    this.state = 250;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === PeopleCodeParser.T__30);
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
    PeopleCodeParser.prototype.extFuncImport = function () {
        var _localctx = new ExtFuncImportContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, PeopleCodeParser.RULE_extFuncImport);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 252;
                this.match(PeopleCodeParser.T__31);
                this.state = 253;
                this.match(PeopleCodeParser.T__32);
                this.state = 254;
                this.match(PeopleCodeParser.GENERIC_ID);
                this.state = 255;
                this.match(PeopleCodeParser.T__33);
                this.state = 256;
                this.recDefnPath();
                this.state = 257;
                this.event();
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
    PeopleCodeParser.prototype.recDefnPath = function () {
        var _localctx = new RecDefnPathContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, PeopleCodeParser.RULE_recDefnPath);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 259;
                this.match(PeopleCodeParser.GENERIC_ID);
                this.state = 260;
                this.match(PeopleCodeParser.T__11);
                this.state = 261;
                this.match(PeopleCodeParser.GENERIC_ID);
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
    PeopleCodeParser.prototype.event = function () {
        var _localctx = new EventContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, PeopleCodeParser.RULE_event);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 263;
                _la = this._input.LA(1);
                if (!(_la === PeopleCodeParser.T__34 || _la === PeopleCodeParser.T__35)) {
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
    PeopleCodeParser.prototype.classDeclaration = function () {
        var _localctx = new ClassDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, PeopleCodeParser.RULE_classDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 265;
                this.match(PeopleCodeParser.T__36);
                this.state = 266;
                this.match(PeopleCodeParser.GENERIC_ID);
                this.state = 270;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (PeopleCodeParser.T__38 - 39)) | (1 << (PeopleCodeParser.T__39 - 39)) | (1 << (PeopleCodeParser.T__40 - 39)) | (1 << (PeopleCodeParser.T__41 - 39)) | (1 << (PeopleCodeParser.T__45 - 39)))) !== 0)) {
                    {
                        {
                            this.state = 267;
                            this.classBlock();
                        }
                    }
                    this.state = 272;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 273;
                this.match(PeopleCodeParser.T__37);
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
    PeopleCodeParser.prototype.classBlock = function () {
        var _localctx = new ClassBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, PeopleCodeParser.RULE_classBlock);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 276;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PeopleCodeParser.T__38) {
                    {
                        this.state = 275;
                        _localctx._aLvl = this.match(PeopleCodeParser.T__38);
                    }
                }
                this.state = 285;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 278;
                                    this.classBlockStmt();
                                    this.state = 282;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === PeopleCodeParser.T__0) {
                                        {
                                            {
                                                this.state = 279;
                                                this.match(PeopleCodeParser.T__0);
                                            }
                                        }
                                        this.state = 284;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 287;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
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
    PeopleCodeParser.prototype.classBlockStmt = function () {
        var _localctx = new ClassBlockStmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, PeopleCodeParser.RULE_classBlockStmt);
        try {
            this.state = 293;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PeopleCodeParser.T__39:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 289;
                        this.method();
                    }
                    break;
                case PeopleCodeParser.T__40:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 290;
                        this.constant();
                    }
                    break;
                case PeopleCodeParser.T__41:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 291;
                        this.property();
                    }
                    break;
                case PeopleCodeParser.T__45:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 292;
                        this.instance();
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
    PeopleCodeParser.prototype.method = function () {
        var _localctx = new MethodContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, PeopleCodeParser.RULE_method);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 295;
                this.match(PeopleCodeParser.T__39);
                this.state = 296;
                this.match(PeopleCodeParser.GENERIC_ID);
                this.state = 297;
                this.formalParamList();
                this.state = 299;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PeopleCodeParser.T__51) {
                    {
                        this.state = 298;
                        this.returnType();
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
    PeopleCodeParser.prototype.constant = function () {
        var _localctx = new ConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, PeopleCodeParser.RULE_constant);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 301;
                this.match(PeopleCodeParser.T__40);
                this.state = 302;
                this.match(PeopleCodeParser.VAR_ID);
                this.state = 303;
                this.match(PeopleCodeParser.T__7);
                this.state = 304;
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
    PeopleCodeParser.prototype.property = function () {
        var _localctx = new PropertyContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, PeopleCodeParser.RULE_property);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 306;
                this.match(PeopleCodeParser.T__41);
                this.state = 307;
                this.varType();
                this.state = 308;
                this.match(PeopleCodeParser.GENERIC_ID);
                this.state = 310;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PeopleCodeParser.T__42) {
                    {
                        this.state = 309;
                        _localctx._g = this.match(PeopleCodeParser.T__42);
                    }
                }
                this.state = 313;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PeopleCodeParser.T__43) {
                    {
                        this.state = 312;
                        _localctx._s = this.match(PeopleCodeParser.T__43);
                    }
                }
                this.state = 316;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PeopleCodeParser.T__44) {
                    {
                        this.state = 315;
                        _localctx._r = this.match(PeopleCodeParser.T__44);
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
    PeopleCodeParser.prototype.instance = function () {
        var _localctx = new InstanceContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, PeopleCodeParser.RULE_instance);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 318;
                this.match(PeopleCodeParser.T__45);
                this.state = 319;
                this.varType();
                this.state = 320;
                this.match(PeopleCodeParser.VAR_ID);
                this.state = 325;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PeopleCodeParser.T__27) {
                    {
                        {
                            this.state = 321;
                            this.match(PeopleCodeParser.T__27);
                            this.state = 322;
                            this.match(PeopleCodeParser.VAR_ID);
                        }
                    }
                    this.state = 327;
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
    PeopleCodeParser.prototype.methodImpl = function () {
        var _localctx = new MethodImplContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, PeopleCodeParser.RULE_methodImpl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 328;
                this.match(PeopleCodeParser.T__39);
                this.state = 329;
                this.match(PeopleCodeParser.GENERIC_ID);
                this.state = 330;
                this.stmtList();
                this.state = 331;
                _localctx._endmethod = this.match(PeopleCodeParser.T__46);
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
    PeopleCodeParser.prototype.getImpl = function () {
        var _localctx = new GetImplContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, PeopleCodeParser.RULE_getImpl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 333;
                this.match(PeopleCodeParser.T__42);
                this.state = 334;
                this.match(PeopleCodeParser.GENERIC_ID);
                this.state = 335;
                this.stmtList();
                this.state = 336;
                _localctx._endget = this.match(PeopleCodeParser.T__47);
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
    PeopleCodeParser.prototype.setImpl = function () {
        var _localctx = new SetImplContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, PeopleCodeParser.RULE_setImpl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 338;
                this.match(PeopleCodeParser.T__43);
                this.state = 339;
                this.match(PeopleCodeParser.GENERIC_ID);
                this.state = 340;
                this.stmtList();
                this.state = 341;
                _localctx._endset = this.match(PeopleCodeParser.T__48);
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
    PeopleCodeParser.prototype.funcImpl = function () {
        var _localctx = new FuncImplContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, PeopleCodeParser.RULE_funcImpl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 343;
                this.funcSignature();
                this.state = 344;
                this.stmtList();
                this.state = 345;
                _localctx._endfunction = this.match(PeopleCodeParser.T__49);
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
    PeopleCodeParser.prototype.funcSignature = function () {
        var _localctx = new FuncSignatureContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, PeopleCodeParser.RULE_funcSignature);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 347;
                this.match(PeopleCodeParser.T__32);
                this.state = 348;
                this.match(PeopleCodeParser.GENERIC_ID);
                this.state = 350;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
                    case 1:
                        {
                            this.state = 349;
                            this.formalParamList();
                        }
                        break;
                }
                this.state = 353;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PeopleCodeParser.T__51) {
                    {
                        this.state = 352;
                        this.returnType();
                    }
                }
                this.state = 356;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PeopleCodeParser.T__0) {
                    {
                        this.state = 355;
                        this.match(PeopleCodeParser.T__0);
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
    PeopleCodeParser.prototype.formalParamList = function () {
        var _localctx = new FormalParamListContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, PeopleCodeParser.RULE_formalParamList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 358;
                this.match(PeopleCodeParser.T__8);
                this.state = 367;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PeopleCodeParser.VAR_ID) {
                    {
                        this.state = 359;
                        this.param();
                        this.state = 364;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === PeopleCodeParser.T__27) {
                            {
                                {
                                    this.state = 360;
                                    this.match(PeopleCodeParser.T__27);
                                    this.state = 361;
                                    this.param();
                                }
                            }
                            this.state = 366;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 369;
                this.match(PeopleCodeParser.T__9);
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
    PeopleCodeParser.prototype.param = function () {
        var _localctx = new ParamContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, PeopleCodeParser.RULE_param);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 371;
                this.match(PeopleCodeParser.VAR_ID);
                this.state = 374;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PeopleCodeParser.T__50) {
                    {
                        this.state = 372;
                        this.match(PeopleCodeParser.T__50);
                        this.state = 373;
                        this.varType();
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
    PeopleCodeParser.prototype.returnType = function () {
        var _localctx = new ReturnTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, PeopleCodeParser.RULE_returnType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 376;
                this.match(PeopleCodeParser.T__51);
                this.state = 377;
                this.varType();
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
    PeopleCodeParser.prototype.ifStmt = function () {
        var _localctx = new IfStmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, PeopleCodeParser.RULE_ifStmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 379;
                this.match(PeopleCodeParser.T__52);
                this.state = 380;
                this.expr(0);
                this.state = 381;
                this.match(PeopleCodeParser.T__53);
                this.state = 383;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PeopleCodeParser.T__0) {
                    {
                        this.state = 382;
                        this.match(PeopleCodeParser.T__0);
                    }
                }
                this.state = 385;
                this.stmtList();
                this.state = 391;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PeopleCodeParser.T__54) {
                    {
                        this.state = 386;
                        _localctx._elsetok = this.match(PeopleCodeParser.T__54);
                        this.state = 388;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PeopleCodeParser.T__0) {
                            {
                                this.state = 387;
                                this.match(PeopleCodeParser.T__0);
                            }
                        }
                        this.state = 390;
                        this.stmtList();
                    }
                }
                this.state = 393;
                _localctx._endif = this.match(PeopleCodeParser.T__55);
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
    PeopleCodeParser.prototype.forStmt = function () {
        var _localctx = new ForStmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, PeopleCodeParser.RULE_forStmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 395;
                this.match(PeopleCodeParser.T__56);
                this.state = 396;
                this.match(PeopleCodeParser.VAR_ID);
                this.state = 397;
                this.match(PeopleCodeParser.T__7);
                this.state = 398;
                this.expr(0);
                this.state = 399;
                this.match(PeopleCodeParser.T__57);
                this.state = 400;
                this.expr(0);
                this.state = 404;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PeopleCodeParser.T__0:
                        {
                            this.state = 401;
                            this.match(PeopleCodeParser.T__0);
                        }
                        break;
                    case PeopleCodeParser.T__58:
                        {
                            {
                                this.state = 402;
                                this.match(PeopleCodeParser.T__58);
                                this.state = 403;
                                this.expr(0);
                            }
                        }
                        break;
                    case PeopleCodeParser.EOF:
                    case PeopleCodeParser.T__1:
                    case PeopleCodeParser.T__2:
                    case PeopleCodeParser.T__3:
                    case PeopleCodeParser.T__4:
                    case PeopleCodeParser.T__5:
                    case PeopleCodeParser.T__6:
                    case PeopleCodeParser.T__8:
                    case PeopleCodeParser.T__10:
                    case PeopleCodeParser.T__14:
                    case PeopleCodeParser.T__15:
                    case PeopleCodeParser.T__29:
                    case PeopleCodeParser.T__31:
                    case PeopleCodeParser.T__32:
                    case PeopleCodeParser.T__36:
                    case PeopleCodeParser.T__39:
                    case PeopleCodeParser.T__42:
                    case PeopleCodeParser.T__43:
                    case PeopleCodeParser.T__46:
                    case PeopleCodeParser.T__47:
                    case PeopleCodeParser.T__48:
                    case PeopleCodeParser.T__49:
                    case PeopleCodeParser.T__52:
                    case PeopleCodeParser.T__54:
                    case PeopleCodeParser.T__55:
                    case PeopleCodeParser.T__56:
                    case PeopleCodeParser.T__59:
                    case PeopleCodeParser.T__60:
                    case PeopleCodeParser.T__61:
                    case PeopleCodeParser.T__62:
                    case PeopleCodeParser.T__63:
                    case PeopleCodeParser.T__64:
                    case PeopleCodeParser.T__65:
                    case PeopleCodeParser.T__66:
                    case PeopleCodeParser.T__67:
                    case PeopleCodeParser.T__68:
                    case PeopleCodeParser.T__70:
                    case PeopleCodeParser.DecimalLiteral:
                    case PeopleCodeParser.IntegerLiteral:
                    case PeopleCodeParser.StringLiteral:
                    case PeopleCodeParser.BoolLiteral:
                    case PeopleCodeParser.VAR_ID:
                    case PeopleCodeParser.SYS_VAR_ID:
                    case PeopleCodeParser.GENERIC_ID:
                        break;
                    default:
                        break;
                }
                this.state = 406;
                this.stmtList();
                this.state = 407;
                _localctx._endfor = this.match(PeopleCodeParser.T__59);
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
    PeopleCodeParser.prototype.whileStmt = function () {
        var _localctx = new WhileStmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, PeopleCodeParser.RULE_whileStmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 409;
                this.match(PeopleCodeParser.T__60);
                this.state = 410;
                this.expr(0);
                this.state = 412;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PeopleCodeParser.T__0) {
                    {
                        this.state = 411;
                        this.match(PeopleCodeParser.T__0);
                    }
                }
                this.state = 414;
                this.stmtList();
                this.state = 415;
                this.match(PeopleCodeParser.T__61);
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
    PeopleCodeParser.prototype.evaluateStmt = function () {
        var _localctx = new EvaluateStmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, PeopleCodeParser.RULE_evaluateStmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 417;
                this.match(PeopleCodeParser.T__62);
                this.state = 418;
                this.expr(0);
                this.state = 420;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 419;
                            this.whenBranch();
                        }
                    }
                    this.state = 422;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === PeopleCodeParser.T__64);
                this.state = 425;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PeopleCodeParser.T__65) {
                    {
                        this.state = 424;
                        this.whenOtherBranch();
                    }
                }
                this.state = 427;
                _localctx._endevaluate = this.match(PeopleCodeParser.T__63);
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
    PeopleCodeParser.prototype.whenBranch = function () {
        var _localctx = new WhenBranchContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, PeopleCodeParser.RULE_whenBranch);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 429;
                this.match(PeopleCodeParser.T__64);
                this.state = 432;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PeopleCodeParser.T__7:
                        {
                            this.state = 430;
                            _localctx._op = this.match(PeopleCodeParser.T__7);
                        }
                        break;
                    case PeopleCodeParser.T__22:
                        {
                            this.state = 431;
                            _localctx._op = this.match(PeopleCodeParser.T__22);
                        }
                        break;
                    case PeopleCodeParser.T__8:
                    case PeopleCodeParser.T__10:
                    case PeopleCodeParser.T__14:
                    case PeopleCodeParser.T__15:
                    case PeopleCodeParser.T__70:
                    case PeopleCodeParser.DecimalLiteral:
                    case PeopleCodeParser.IntegerLiteral:
                    case PeopleCodeParser.StringLiteral:
                    case PeopleCodeParser.BoolLiteral:
                    case PeopleCodeParser.VAR_ID:
                    case PeopleCodeParser.SYS_VAR_ID:
                    case PeopleCodeParser.GENERIC_ID:
                        break;
                    default:
                        break;
                }
                this.state = 434;
                this.expr(0);
                this.state = 435;
                this.stmtList();
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
    PeopleCodeParser.prototype.whenOtherBranch = function () {
        var _localctx = new WhenOtherBranchContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, PeopleCodeParser.RULE_whenOtherBranch);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 437;
                this.match(PeopleCodeParser.T__65);
                this.state = 438;
                this.stmtList();
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
    PeopleCodeParser.prototype.tryCatchStmt = function () {
        var _localctx = new TryCatchStmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, PeopleCodeParser.RULE_tryCatchStmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 440;
                _localctx._trytok = this.match(PeopleCodeParser.T__66);
                this.state = 441;
                this.stmtList();
                this.state = 442;
                this.catchSignature();
                this.state = 443;
                this.stmtList();
                this.state = 444;
                _localctx._endtry = this.match(PeopleCodeParser.T__67);
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
    PeopleCodeParser.prototype.catchSignature = function () {
        var _localctx = new CatchSignatureContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, PeopleCodeParser.RULE_catchSignature);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 446;
                this.match(PeopleCodeParser.T__68);
                this.state = 447;
                _localctx._exClass = this.match(PeopleCodeParser.T__69);
                this.state = 448;
                this.match(PeopleCodeParser.VAR_ID);
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
    PeopleCodeParser.prototype.createInvocation = function () {
        var _localctx = new CreateInvocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, PeopleCodeParser.RULE_createInvocation);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 450;
                this.match(PeopleCodeParser.T__70);
                this.state = 453;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 46, this._ctx)) {
                    case 1:
                        {
                            this.state = 451;
                            this.appClassPath();
                        }
                        break;
                    case 2:
                        {
                            this.state = 452;
                            this.match(PeopleCodeParser.GENERIC_ID);
                        }
                        break;
                }
                this.state = 455;
                this.match(PeopleCodeParser.T__8);
                this.state = 457;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PeopleCodeParser.T__8) | (1 << PeopleCodeParser.T__10) | (1 << PeopleCodeParser.T__14) | (1 << PeopleCodeParser.T__15))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (PeopleCodeParser.T__70 - 71)) | (1 << (PeopleCodeParser.DecimalLiteral - 71)) | (1 << (PeopleCodeParser.IntegerLiteral - 71)) | (1 << (PeopleCodeParser.StringLiteral - 71)) | (1 << (PeopleCodeParser.BoolLiteral - 71)) | (1 << (PeopleCodeParser.VAR_ID - 71)) | (1 << (PeopleCodeParser.SYS_VAR_ID - 71)) | (1 << (PeopleCodeParser.GENERIC_ID - 71)))) !== 0)) {
                    {
                        this.state = 456;
                        this.exprList();
                    }
                }
                this.state = 459;
                this.match(PeopleCodeParser.T__9);
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
    PeopleCodeParser.prototype.literal = function () {
        var _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, PeopleCodeParser.RULE_literal);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 461;
                _la = this._input.LA(1);
                if (!(((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (PeopleCodeParser.DecimalLiteral - 72)) | (1 << (PeopleCodeParser.IntegerLiteral - 72)) | (1 << (PeopleCodeParser.StringLiteral - 72)) | (1 << (PeopleCodeParser.BoolLiteral - 72)))) !== 0))) {
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
    PeopleCodeParser.prototype.id = function () {
        var _localctx = new IdContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, PeopleCodeParser.RULE_id);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 463;
                _la = this._input.LA(1);
                if (!(((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (PeopleCodeParser.VAR_ID - 76)) | (1 << (PeopleCodeParser.SYS_VAR_ID - 76)) | (1 << (PeopleCodeParser.GENERIC_ID - 76)))) !== 0))) {
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
    PeopleCodeParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 3:
                return this.expr_sempred(_localctx, predIndex);
        }
        return true;
    };
    PeopleCodeParser.prototype.expr_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 6);
            case 1:
                return this.precpred(this._ctx, 5);
            case 2:
                return this.precpred(this._ctx, 4);
            case 3:
                return this.precpred(this._ctx, 3);
            case 4:
                return this.precpred(this._ctx, 2);
            case 5:
                return this.precpred(this._ctx, 1);
            case 6:
                return this.precpred(this._ctx, 11);
            case 7:
                return this.precpred(this._ctx, 10);
            case 8:
                return this.precpred(this._ctx, 9);
        }
        return true;
    };
    Object.defineProperty(PeopleCodeParser, "_ATN", {
        get: function () {
            if (!PeopleCodeParser.__ATN) {
                PeopleCodeParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(PeopleCodeParser._serializedATN));
            }
            return PeopleCodeParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    PeopleCodeParser.T__0 = 1;
    PeopleCodeParser.T__1 = 2;
    PeopleCodeParser.T__2 = 3;
    PeopleCodeParser.T__3 = 4;
    PeopleCodeParser.T__4 = 5;
    PeopleCodeParser.T__5 = 6;
    PeopleCodeParser.T__6 = 7;
    PeopleCodeParser.T__7 = 8;
    PeopleCodeParser.T__8 = 9;
    PeopleCodeParser.T__9 = 10;
    PeopleCodeParser.T__10 = 11;
    PeopleCodeParser.T__11 = 12;
    PeopleCodeParser.T__12 = 13;
    PeopleCodeParser.T__13 = 14;
    PeopleCodeParser.T__14 = 15;
    PeopleCodeParser.T__15 = 16;
    PeopleCodeParser.T__16 = 17;
    PeopleCodeParser.T__17 = 18;
    PeopleCodeParser.T__18 = 19;
    PeopleCodeParser.T__19 = 20;
    PeopleCodeParser.T__20 = 21;
    PeopleCodeParser.T__21 = 22;
    PeopleCodeParser.T__22 = 23;
    PeopleCodeParser.T__23 = 24;
    PeopleCodeParser.T__24 = 25;
    PeopleCodeParser.T__25 = 26;
    PeopleCodeParser.T__26 = 27;
    PeopleCodeParser.T__27 = 28;
    PeopleCodeParser.T__28 = 29;
    PeopleCodeParser.T__29 = 30;
    PeopleCodeParser.T__30 = 31;
    PeopleCodeParser.T__31 = 32;
    PeopleCodeParser.T__32 = 33;
    PeopleCodeParser.T__33 = 34;
    PeopleCodeParser.T__34 = 35;
    PeopleCodeParser.T__35 = 36;
    PeopleCodeParser.T__36 = 37;
    PeopleCodeParser.T__37 = 38;
    PeopleCodeParser.T__38 = 39;
    PeopleCodeParser.T__39 = 40;
    PeopleCodeParser.T__40 = 41;
    PeopleCodeParser.T__41 = 42;
    PeopleCodeParser.T__42 = 43;
    PeopleCodeParser.T__43 = 44;
    PeopleCodeParser.T__44 = 45;
    PeopleCodeParser.T__45 = 46;
    PeopleCodeParser.T__46 = 47;
    PeopleCodeParser.T__47 = 48;
    PeopleCodeParser.T__48 = 49;
    PeopleCodeParser.T__49 = 50;
    PeopleCodeParser.T__50 = 51;
    PeopleCodeParser.T__51 = 52;
    PeopleCodeParser.T__52 = 53;
    PeopleCodeParser.T__53 = 54;
    PeopleCodeParser.T__54 = 55;
    PeopleCodeParser.T__55 = 56;
    PeopleCodeParser.T__56 = 57;
    PeopleCodeParser.T__57 = 58;
    PeopleCodeParser.T__58 = 59;
    PeopleCodeParser.T__59 = 60;
    PeopleCodeParser.T__60 = 61;
    PeopleCodeParser.T__61 = 62;
    PeopleCodeParser.T__62 = 63;
    PeopleCodeParser.T__63 = 64;
    PeopleCodeParser.T__64 = 65;
    PeopleCodeParser.T__65 = 66;
    PeopleCodeParser.T__66 = 67;
    PeopleCodeParser.T__67 = 68;
    PeopleCodeParser.T__68 = 69;
    PeopleCodeParser.T__69 = 70;
    PeopleCodeParser.T__70 = 71;
    PeopleCodeParser.DecimalLiteral = 72;
    PeopleCodeParser.IntegerLiteral = 73;
    PeopleCodeParser.StringLiteral = 74;
    PeopleCodeParser.BoolLiteral = 75;
    PeopleCodeParser.VAR_ID = 76;
    PeopleCodeParser.SYS_VAR_ID = 77;
    PeopleCodeParser.GENERIC_ID = 78;
    PeopleCodeParser.REM = 79;
    PeopleCodeParser.COMMENT_1 = 80;
    PeopleCodeParser.COMMENT_2 = 81;
    PeopleCodeParser.COMMENT_3 = 82;
    PeopleCodeParser.WS = 83;
    PeopleCodeParser.RULE_program = 0;
    PeopleCodeParser.RULE_stmtList = 1;
    PeopleCodeParser.RULE_stmt = 2;
    PeopleCodeParser.RULE_expr = 3;
    PeopleCodeParser.RULE_exprList = 4;
    PeopleCodeParser.RULE_varDeclaration = 5;
    PeopleCodeParser.RULE_varDeclarator = 6;
    PeopleCodeParser.RULE_varType = 7;
    PeopleCodeParser.RULE_appClassImport = 8;
    PeopleCodeParser.RULE_appPkgPath = 9;
    PeopleCodeParser.RULE_appClassPath = 10;
    PeopleCodeParser.RULE_extFuncImport = 11;
    PeopleCodeParser.RULE_recDefnPath = 12;
    PeopleCodeParser.RULE_event = 13;
    PeopleCodeParser.RULE_classDeclaration = 14;
    PeopleCodeParser.RULE_classBlock = 15;
    PeopleCodeParser.RULE_classBlockStmt = 16;
    PeopleCodeParser.RULE_method = 17;
    PeopleCodeParser.RULE_constant = 18;
    PeopleCodeParser.RULE_property = 19;
    PeopleCodeParser.RULE_instance = 20;
    PeopleCodeParser.RULE_methodImpl = 21;
    PeopleCodeParser.RULE_getImpl = 22;
    PeopleCodeParser.RULE_setImpl = 23;
    PeopleCodeParser.RULE_funcImpl = 24;
    PeopleCodeParser.RULE_funcSignature = 25;
    PeopleCodeParser.RULE_formalParamList = 26;
    PeopleCodeParser.RULE_param = 27;
    PeopleCodeParser.RULE_returnType = 28;
    PeopleCodeParser.RULE_ifStmt = 29;
    PeopleCodeParser.RULE_forStmt = 30;
    PeopleCodeParser.RULE_whileStmt = 31;
    PeopleCodeParser.RULE_evaluateStmt = 32;
    PeopleCodeParser.RULE_whenBranch = 33;
    PeopleCodeParser.RULE_whenOtherBranch = 34;
    PeopleCodeParser.RULE_tryCatchStmt = 35;
    PeopleCodeParser.RULE_catchSignature = 36;
    PeopleCodeParser.RULE_createInvocation = 37;
    PeopleCodeParser.RULE_literal = 38;
    PeopleCodeParser.RULE_id = 39;
    // tslint:disable:no-trailing-whitespace
    PeopleCodeParser.ruleNames = [
        "program", "stmtList", "stmt", "expr", "exprList", "varDeclaration", "varDeclarator",
        "varType", "appClassImport", "appPkgPath", "appClassPath", "extFuncImport",
        "recDefnPath", "event", "classDeclaration", "classBlock", "classBlockStmt",
        "method", "constant", "property", "instance", "methodImpl", "getImpl",
        "setImpl", "funcImpl", "funcSignature", "formalParamList", "param", "returnType",
        "ifStmt", "forStmt", "whileStmt", "evaluateStmt", "whenBranch", "whenOtherBranch",
        "tryCatchStmt", "catchSignature", "createInvocation", "literal", "id",
    ];
    PeopleCodeParser._LITERAL_NAMES = [
        undefined, "';'", "'Exit'", "'Break'", "'Error'", "'Warning'", "'Return'",
        "'throw'", "'='", "'('", "')'", "'@'", "'.'", "'['", "']'", "'-'", "'Not'",
        "'*'", "'/'", "'+'", "'<='", "'>='", "'<'", "'>'", "'<>'", "'And'", "'Or'",
        "'|'", "','", "'of'", "'import'", "':'", "'Declare'", "'Function'", "'PeopleCode'",
        "'FieldFormula'", "'FieldChange'", "'class'", "'end-class'", "'private'",
        "'method'", "'Constant'", "'property'", "'get'", "'set'", "'readonly'",
        "'instance'", "'end-method'", "'end-get'", "'end-set'", "'End-Function'",
        "'As'", "'Returns'", "'If'", "'Then'", "'Else'", "'End-If'", "'For'",
        "'To'", "'Step'", "'End-For'", "'While'", "'End-While'", "'Evaluate'",
        "'End-Evaluate'", "'When'", "'When-Other'", "'try'", "'end-try'", "'catch'",
        "'Exception'", "'create'",
    ];
    PeopleCodeParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "DecimalLiteral", "IntegerLiteral", "StringLiteral",
        "BoolLiteral", "VAR_ID", "SYS_VAR_ID", "GENERIC_ID", "REM", "COMMENT_1",
        "COMMENT_2", "COMMENT_3", "WS",
    ];
    PeopleCodeParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(PeopleCodeParser._LITERAL_NAMES, PeopleCodeParser._SYMBOLIC_NAMES, []);
    PeopleCodeParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03U\u01D4\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x03\x02\x03\x02" +
        "\x03\x03\x03\x03\x06\x03W\n\x03\r\x03\x0E\x03X\x07\x03[\n\x03\f\x03\x0E" +
        "\x03^\v\x03\x03\x03\x05\x03a\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04x" +
        "\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04" +
        "\x81\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\x91\n\x05" +
        "\x03\x05\x03\x05\x03\x05\x05\x05\x96\n\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x05\x05\x9C\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x05\x05\xA4\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xAA\n\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x05\x05\xB0\n\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x05\x05\xC1\n\x05\x03\x05\x07\x05\xC4\n\x05\f" +
        "\x05\x0E\x05\xC7\v\x05\x03\x06\x03\x06\x03\x06\x07\x06\xCC\n\x06\f\x06" +
        "\x0E\x06\xCF\v\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\xD6" +
        "\n\x07\f\x07\x0E\x07\xD9\v\x07\x03\b\x03\b\x03\b\x05\b\xDE\n\b\x03\t\x03" +
        "\t\x03\t\x05\t\xE3\n\t\x03\t\x05\t\xE6\n\t\x03\n\x03\n\x03\n\x05\n\xEB" +
        "\n\n\x03\v\x03\v\x03\v\x07\v\xF0\n\v\f\v\x0E\v\xF3\v\v\x03\v\x03\v\x03" +
        "\v\x03\f\x03\f\x03\f\x06\f\xFB\n\f\r\f\x0E\f\xFC\x03\r\x03\r\x03\r\x03" +
        "\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03" +
        "\x10\x03\x10\x03\x10\x07\x10\u010F\n\x10\f\x10\x0E\x10\u0112\v\x10\x03" +
        "\x10\x03\x10\x03\x11\x05\x11\u0117\n\x11\x03\x11\x03\x11\x07\x11\u011B" +
        "\n\x11\f\x11\x0E\x11\u011E\v\x11\x06\x11\u0120\n\x11\r\x11\x0E\x11\u0121" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0128\n\x12\x03\x13\x03\x13\x03" +
        "\x13\x03\x13\x05\x13\u012E\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
        "\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0139\n\x15\x03\x15\x05\x15\u013C" +
        "\n\x15\x03\x15\x05\x15\u013F\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
        "\x16\x07\x16\u0146\n\x16\f\x16\x0E\x16\u0149\v\x16\x03\x17\x03\x17\x03" +
        "\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03" +
        "\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03" +
        "\x1B\x03\x1B\x05\x1B\u0161\n\x1B\x03\x1B\x05\x1B\u0164\n\x1B\x03\x1B\x05" +
        "\x1B\u0167\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u016D\n\x1C\f" +
        "\x1C\x0E\x1C\u0170\v\x1C\x05\x1C\u0172\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03" +
        "\x1D\x03\x1D\x05\x1D\u0179\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F" +
        "\x03\x1F\x03\x1F\x05\x1F\u0182\n\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0187" +
        "\n\x1F\x03\x1F\x05\x1F\u018A\n\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03" +
        " \x03 \x03 \x03 \x03 \x03 \x05 \u0197\n \x03 \x03 \x03 \x03!\x03!\x03" +
        "!\x05!\u019F\n!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x06\"\u01A7\n\"\r\"\x0E" +
        "\"\u01A8\x03\"\x05\"\u01AC\n\"\x03\"\x03\"\x03#\x03#\x03#\x05#\u01B3\n" +
        "#\x03#\x03#\x03#\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03%\x03&\x03" +
        "&\x03&\x03&\x03\'\x03\'\x03\'\x05\'\u01C8\n\'\x03\'\x03\'\x05\'\u01CC" +
        "\n\'\x03\'\x03\'\x03(\x03(\x03)\x03)\x03)\x02\x02\x03\b*\x02\x02\x04\x02" +
        "\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
        "\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02" +
        "0\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02" +
        "L\x02N\x02P\x02\x02\x05\x03\x02%&\x03\x02JM\x03\x02NP\x02\u0200\x02R\x03" +
        "\x02\x02\x02\x04\\\x03\x02\x02\x02\x06\x80\x03\x02\x02\x02\b\x90\x03\x02" +
        "\x02\x02\n\xC8\x03\x02\x02\x02\f\xD0\x03\x02\x02\x02\x0E\xDA\x03\x02\x02" +
        "\x02\x10\xE5\x03\x02\x02\x02\x12\xE7\x03\x02\x02\x02\x14\xEC\x03\x02\x02" +
        "\x02\x16\xF7\x03\x02\x02\x02\x18\xFE\x03\x02\x02\x02\x1A\u0105\x03\x02" +
        "\x02\x02\x1C\u0109\x03\x02\x02\x02\x1E\u010B\x03\x02\x02\x02 \u0116\x03" +
        "\x02\x02\x02\"\u0127\x03\x02\x02\x02$\u0129\x03\x02\x02\x02&\u012F\x03" +
        "\x02\x02\x02(\u0134\x03\x02\x02\x02*\u0140\x03\x02\x02\x02,\u014A\x03" +
        "\x02\x02\x02.\u014F\x03\x02\x02\x020\u0154\x03\x02\x02\x022\u0159\x03" +
        "\x02\x02\x024\u015D\x03\x02\x02\x026\u0168\x03\x02\x02\x028\u0175\x03" +
        "\x02\x02\x02:\u017A\x03\x02\x02\x02<\u017D\x03\x02\x02\x02>\u018D\x03" +
        "\x02\x02\x02@\u019B\x03\x02\x02\x02B\u01A3\x03\x02\x02\x02D\u01AF\x03" +
        "\x02\x02\x02F\u01B7\x03\x02\x02\x02H\u01BA\x03\x02\x02\x02J\u01C0\x03" +
        "\x02\x02\x02L\u01C4\x03\x02\x02\x02N\u01CF\x03\x02\x02\x02P\u01D1\x03" +
        "\x02\x02\x02RS\x05\x04\x03\x02S\x03\x03\x02\x02\x02TV\x05\x06\x04\x02" +
        "UW\x07\x03\x02\x02VU\x03\x02\x02\x02WX\x03\x02\x02\x02XV\x03\x02\x02\x02" +
        "XY\x03\x02\x02\x02Y[\x03\x02\x02\x02ZT\x03\x02\x02\x02[^\x03\x02\x02\x02" +
        "\\Z\x03\x02\x02\x02\\]\x03\x02\x02\x02]`\x03\x02\x02\x02^\\\x03\x02\x02" +
        "\x02_a\x05\x06\x04\x02`_\x03\x02\x02\x02`a\x03\x02\x02\x02a\x05\x03\x02" +
        "\x02\x02b\x81\x05\x12\n\x02c\x81\x05\x18\r\x02d\x81\x05\x1E\x10\x02e\x81" +
        "\x05,\x17\x02f\x81\x05.\x18\x02g\x81\x050\x19\x02h\x81\x052\x1A\x02i\x81" +
        "\x05\f\x07\x02j\x81\x05<\x1F\x02k\x81\x05> \x02l\x81\x05@!\x02m\x81\x05" +
        "B\"\x02n\x81\x05H%\x02o\x81\x07\x04\x02\x02p\x81\x07\x05\x02\x02qr\x07" +
        "\x06\x02\x02r\x81\x05\b\x05\x02st\x07\x07\x02\x02t\x81\x05\b\x05\x02u" +
        "w\x07\b\x02\x02vx\x05\b\x05\x02wv\x03\x02\x02\x02wx\x03\x02\x02\x02x\x81" +
        "\x03\x02\x02\x02yz\x07\t\x02\x02z\x81\x05\b\x05\x02{|\x05\b\x05\x02|}" +
        "\x07\n\x02\x02}~\x05\b\x05\x02~\x81\x03\x02\x02\x02\x7F\x81\x05\b\x05" +
        "\x02\x80b\x03\x02\x02\x02\x80c\x03\x02\x02\x02\x80d\x03\x02\x02\x02\x80" +
        "e\x03\x02\x02\x02\x80f\x03\x02\x02\x02\x80g\x03\x02\x02\x02\x80h\x03\x02" +
        "\x02\x02\x80i\x03\x02\x02\x02\x80j\x03\x02\x02\x02\x80k\x03\x02\x02\x02" +
        "\x80l\x03\x02\x02\x02\x80m\x03\x02\x02\x02\x80n\x03\x02\x02\x02\x80o\x03" +
        "\x02\x02\x02\x80p\x03\x02\x02\x02\x80q\x03\x02\x02\x02\x80s\x03\x02\x02" +
        "\x02\x80u\x03\x02\x02\x02\x80y\x03\x02\x02\x02\x80{\x03\x02\x02\x02\x80" +
        "\x7F\x03\x02\x02\x02\x81\x07\x03\x02\x02\x02\x82\x83\b\x05\x01\x02\x83" +
        "\x84\x07\v\x02\x02\x84\x85\x05\b\x05\x02\x85\x86\x07\f\x02\x02\x86\x91" +
        "\x03\x02\x02\x02\x87\x88\x07\r\x02\x02\x88\x91\x05\b\x05\x11\x89\x91\x05" +
        "N(\x02\x8A\x91\x05P)\x02\x8B\x91\x05L\'\x02\x8C\x8D\x07\x11\x02\x02\x8D" +
        "\x91\x05\b\x05\n\x8E\x8F\x07\x12\x02\x02\x8F\x91\x05\b\x05\t\x90\x82\x03" +
        "\x02\x02\x02\x90\x87\x03\x02\x02\x02\x90\x89\x03\x02\x02\x02\x90\x8A\x03" +
        "\x02\x02\x02\x90\x8B\x03\x02\x02\x02\x90\x8C\x03\x02\x02\x02\x90\x8E\x03" +
        "\x02\x02\x02\x91\xC5\x03\x02\x02\x02\x92\x95\f\b\x02\x02\x93\x96\x07\x13" +
        "\x02\x02\x94\x96\x07\x14\x02\x02\x95\x93\x03\x02\x02\x02\x95\x94\x03\x02" +
        "\x02\x02\x96\x97\x03\x02\x02\x02\x97\xC4\x05\b\x05\t\x98\x9B\f\x07\x02" +
        "\x02\x99\x9C\x07\x15\x02\x02\x9A\x9C\x07\x11\x02\x02\x9B\x99\x03\x02\x02" +
        "\x02\x9B\x9A\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\xC4\x05\b\x05" +
        "\b\x9E\xA3\f\x06\x02\x02\x9F\xA4\x07\x16\x02\x02\xA0\xA4\x07\x17\x02\x02" +
        "\xA1\xA4\x07\x18\x02\x02\xA2\xA4\x07\x19\x02\x02\xA3\x9F\x03\x02\x02\x02" +
        "\xA3\xA0\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02\xA3\xA2\x03\x02\x02\x02" +
        "\xA4\xA5\x03\x02\x02\x02\xA5\xC4\x05\b\x05\x07\xA6\xA9\f\x05\x02\x02\xA7" +
        "\xAA\x07\n\x02\x02\xA8\xAA\x07\x1A\x02\x02\xA9\xA7\x03\x02\x02\x02\xA9" +
        "\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xC4\x05\b\x05\x06\xAC" +
        "\xAF\f\x04\x02\x02\xAD\xB0\x07\x1B\x02\x02\xAE\xB0\x07\x1C\x02\x02\xAF" +
        "\xAD\x03\x02\x02\x02\xAF\xAE\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1" +
        "\xC4\x05\b\x05\x05\xB2\xB3\f\x03\x02\x02\xB3\xB4\x07\x1D\x02\x02\xB4\xC4" +
        "\x05\b\x05\x04\xB5\xB6\f\r\x02\x02\xB6\xB7\x07\x0E\x02\x02\xB7\xC4\x05" +
        "P)\x02\xB8\xB9\f\f\x02\x02\xB9\xBA\x07\x0F\x02\x02\xBA\xBB\x05\n\x06\x02" +
        "\xBB\xBC\x07\x10\x02\x02\xBC\xC4\x03\x02\x02\x02\xBD\xBE\f\v\x02\x02\xBE" +
        "\xC0\x07\v\x02\x02\xBF\xC1\x05\n\x06\x02\xC0\xBF\x03\x02\x02\x02\xC0\xC1" +
        "\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC4\x07\f\x02\x02\xC3\x92" +
        "\x03\x02\x02\x02\xC3\x98\x03\x02\x02\x02\xC3\x9E\x03\x02\x02\x02\xC3\xA6" +
        "\x03\x02\x02\x02\xC3\xAC\x03\x02\x02\x02\xC3\xB2\x03\x02\x02\x02\xC3\xB5" +
        "\x03\x02\x02\x02\xC3\xB8\x03\x02\x02\x02\xC3\xBD\x03\x02\x02\x02\xC4\xC7" +
        "\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\t" +
        "\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC8\xCD\x05\b\x05\x02\xC9\xCA" +
        "\x07\x1E\x02\x02\xCA\xCC\x05\b\x05\x02\xCB\xC9\x03\x02\x02\x02\xCC\xCF" +
        "\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\v" +
        "\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xD0\xD1\x07P\x02\x02\xD1\xD2" +
        "\x05\x10\t\x02\xD2\xD7\x05\x0E\b\x02\xD3\xD4\x07\x1E\x02\x02\xD4\xD6\x05" +
        "\x0E\b\x02\xD5\xD3\x03\x02\x02\x02\xD6\xD9\x03\x02\x02\x02\xD7\xD5\x03" +
        "\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\r\x03\x02\x02\x02\xD9\xD7\x03" +
        "\x02\x02\x02\xDA\xDD\x07N\x02\x02\xDB\xDC\x07\n\x02\x02\xDC\xDE\x05\b" +
        "\x05\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\x0F\x03\x02" +
        "\x02\x02\xDF\xE2\x07P\x02\x02\xE0\xE1\x07\x1F\x02\x02\xE1\xE3\x05\x10" +
        "\t\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE6\x03\x02" +
        "\x02\x02\xE4\xE6\x05\x16\f\x02\xE5\xDF\x03\x02\x02\x02\xE5\xE4\x03\x02" +
        "\x02\x02\xE6\x11\x03\x02\x02\x02\xE7\xEA\x07 \x02\x02\xE8\xEB\x05\x14" +
        "\v\x02\xE9\xEB\x05\x16\f\x02\xEA\xE8\x03\x02\x02\x02\xEA\xE9\x03\x02\x02" +
        "\x02\xEB\x13\x03\x02\x02\x02\xEC\xF1\x07P\x02\x02\xED\xEE\x07!\x02\x02" +
        "\xEE\xF0\x07P\x02\x02\xEF\xED\x03\x02\x02\x02\xF0\xF3\x03\x02\x02\x02" +
        "\xF1\xEF\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF4\x03\x02\x02\x02" +
        "\xF3\xF1\x03\x02\x02\x02\xF4\xF5\x07!\x02\x02\xF5\xF6\x07\x13\x02\x02" +
        "\xF6\x15\x03\x02\x02\x02\xF7\xFA\x07P\x02\x02\xF8\xF9\x07!\x02\x02\xF9" +
        "\xFB\x07P\x02\x02\xFA\xF8\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC" +
        "\xFA\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\x17\x03\x02\x02\x02\xFE" +
        "\xFF\x07\"\x02\x02\xFF\u0100\x07#\x02\x02\u0100\u0101\x07P\x02\x02\u0101" +
        "\u0102\x07$\x02\x02\u0102\u0103\x05\x1A\x0E\x02\u0103\u0104\x05\x1C\x0F" +
        "\x02\u0104\x19\x03\x02\x02\x02\u0105\u0106\x07P\x02\x02\u0106\u0107\x07" +
        "\x0E\x02\x02\u0107\u0108\x07P\x02\x02\u0108\x1B\x03\x02\x02\x02\u0109" +
        "\u010A\t\x02\x02\x02\u010A\x1D\x03\x02\x02\x02\u010B\u010C\x07\'\x02\x02" +
        "\u010C\u0110\x07P\x02\x02\u010D\u010F\x05 \x11\x02\u010E\u010D\x03\x02" +
        "\x02\x02\u010F\u0112\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110" +
        "\u0111\x03\x02\x02\x02\u0111\u0113\x03\x02\x02\x02\u0112\u0110\x03\x02" +
        "\x02\x02\u0113\u0114\x07(\x02\x02\u0114\x1F\x03\x02\x02\x02\u0115\u0117" +
        "\x07)\x02\x02\u0116\u0115\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02" +
        "\u0117\u011F\x03\x02\x02\x02\u0118\u011C\x05\"\x12\x02\u0119\u011B\x07" +
        "\x03\x02\x02\u011A\u0119\x03\x02\x02\x02\u011B\u011E\x03\x02\x02\x02\u011C" +
        "\u011A\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u0120\x03\x02" +
        "\x02\x02\u011E\u011C\x03\x02\x02\x02\u011F\u0118\x03\x02\x02\x02\u0120" +
        "\u0121\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121\u0122\x03\x02" +
        "\x02\x02\u0122!\x03\x02\x02\x02\u0123\u0128\x05$\x13\x02\u0124\u0128\x05" +
        "&\x14\x02\u0125\u0128\x05(\x15\x02\u0126\u0128\x05*\x16\x02\u0127\u0123" +
        "\x03\x02\x02\x02\u0127\u0124\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02" +
        "\u0127\u0126\x03\x02\x02\x02\u0128#\x03\x02\x02\x02\u0129\u012A\x07*\x02" +
        "\x02\u012A\u012B\x07P\x02\x02\u012B\u012D\x056\x1C\x02\u012C\u012E\x05" +
        ":\x1E\x02\u012D\u012C\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E" +
        "%\x03\x02\x02\x02\u012F\u0130\x07+\x02\x02\u0130\u0131\x07N\x02\x02\u0131" +
        "\u0132\x07\n\x02\x02\u0132\u0133\x05\b\x05\x02\u0133\'\x03\x02\x02\x02" +
        "\u0134\u0135\x07,\x02\x02\u0135\u0136\x05\x10\t\x02\u0136\u0138\x07P\x02" +
        "\x02\u0137\u0139\x07-\x02\x02\u0138\u0137\x03\x02\x02\x02\u0138\u0139" +
        "\x03\x02\x02\x02\u0139\u013B\x03\x02\x02\x02\u013A\u013C\x07.\x02\x02" +
        "\u013B\u013A\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013E\x03" +
        "\x02\x02\x02\u013D\u013F\x07/\x02\x02\u013E\u013D\x03\x02\x02\x02\u013E" +
        "\u013F\x03\x02\x02\x02\u013F)\x03\x02\x02\x02\u0140\u0141\x070\x02\x02" +
        "\u0141\u0142\x05\x10\t\x02\u0142\u0147\x07N\x02\x02\u0143\u0144\x07\x1E" +
        "\x02\x02\u0144\u0146\x07N\x02\x02\u0145\u0143\x03\x02\x02\x02\u0146\u0149" +
        "\x03\x02\x02\x02\u0147\u0145\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02" +
        "\u0148+\x03\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u014A\u014B\x07*\x02" +
        "\x02\u014B\u014C\x07P\x02\x02\u014C\u014D\x05\x04\x03\x02\u014D\u014E" +
        "\x071\x02\x02\u014E-\x03\x02\x02\x02\u014F\u0150\x07-\x02\x02\u0150\u0151" +
        "\x07P\x02\x02\u0151\u0152\x05\x04\x03\x02\u0152\u0153\x072\x02\x02\u0153" +
        "/\x03\x02\x02\x02\u0154\u0155\x07.\x02\x02\u0155\u0156\x07P\x02\x02\u0156" +
        "\u0157\x05\x04\x03\x02\u0157\u0158\x073\x02\x02\u01581\x03\x02\x02\x02" +
        "\u0159\u015A\x054\x1B\x02\u015A\u015B\x05\x04\x03\x02\u015B\u015C\x07" +
        "4\x02\x02\u015C3\x03\x02\x02\x02\u015D\u015E\x07#\x02\x02\u015E\u0160" +
        "\x07P\x02\x02\u015F\u0161\x056\x1C\x02\u0160\u015F\x03\x02\x02\x02\u0160" +
        "\u0161\x03\x02\x02\x02\u0161\u0163\x03\x02\x02\x02\u0162\u0164\x05:\x1E" +
        "\x02\u0163\u0162\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0166" +
        "\x03\x02\x02\x02\u0165\u0167\x07\x03\x02\x02\u0166\u0165\x03\x02\x02\x02" +
        "\u0166\u0167\x03\x02\x02\x02\u01675\x03\x02\x02\x02\u0168\u0171\x07\v" +
        "\x02\x02\u0169\u016E\x058\x1D\x02\u016A\u016B\x07\x1E\x02\x02\u016B\u016D" +
        "\x058\x1D\x02\u016C\u016A\x03\x02\x02\x02\u016D\u0170\x03\x02\x02\x02" +
        "\u016E\u016C\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0172\x03" +
        "\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0171\u0169\x03\x02\x02\x02\u0171" +
        "\u0172\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\u0174\x07\f\x02" +
        "\x02\u01747\x03\x02\x02\x02\u0175\u0178\x07N\x02\x02\u0176\u0177\x075" +
        "\x02\x02\u0177\u0179\x05\x10\t\x02\u0178\u0176\x03\x02\x02\x02\u0178\u0179" +
        "\x03\x02\x02\x02\u01799\x03\x02\x02\x02\u017A\u017B\x076\x02\x02\u017B" +
        "\u017C\x05\x10\t\x02\u017C;\x03\x02\x02\x02\u017D\u017E\x077\x02\x02\u017E" +
        "\u017F\x05\b\x05\x02\u017F\u0181\x078\x02\x02\u0180\u0182\x07\x03\x02" +
        "\x02\u0181\u0180\x03\x02\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\u0183" +
        "\x03\x02\x02\x02\u0183\u0189\x05\x04\x03\x02\u0184\u0186\x079\x02\x02" +
        "\u0185\u0187\x07\x03\x02\x02\u0186\u0185\x03\x02\x02\x02\u0186\u0187\x03" +
        "\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188\u018A\x05\x04\x03\x02\u0189" +
        "\u0184\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018B\x03\x02" +
        "\x02\x02\u018B\u018C\x07:\x02\x02\u018C=\x03\x02\x02\x02\u018D\u018E\x07" +
        ";\x02\x02\u018E\u018F\x07N\x02\x02\u018F\u0190\x07\n\x02\x02\u0190\u0191" +
        "\x05\b\x05\x02\u0191\u0192\x07<\x02\x02\u0192\u0196\x05\b\x05\x02\u0193" +
        "\u0197\x07\x03\x02\x02\u0194\u0195\x07=\x02\x02\u0195\u0197\x05\b\x05" +
        "\x02\u0196\u0193\x03\x02\x02\x02\u0196\u0194\x03\x02\x02\x02\u0196\u0197" +
        "\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u0199\x05\x04\x03\x02" +
        "\u0199\u019A\x07>\x02\x02\u019A?\x03\x02\x02\x02\u019B\u019C\x07?\x02" +
        "\x02\u019C\u019E\x05\b\x05\x02\u019D\u019F\x07\x03\x02\x02\u019E\u019D" +
        "\x03\x02\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02" +
        "\u01A0\u01A1\x05\x04\x03\x02\u01A1\u01A2\x07@\x02\x02\u01A2A\x03\x02\x02" +
        "\x02\u01A3\u01A4\x07A\x02\x02\u01A4\u01A6\x05\b\x05\x02\u01A5\u01A7\x05" +
        "D#\x02\u01A6\u01A5\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01A6" +
        "\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AB\x03\x02\x02\x02" +
        "\u01AA\u01AC\x05F$\x02\u01AB\u01AA\x03\x02\x02\x02\u01AB\u01AC\x03\x02" +
        "\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01AE\x07B\x02\x02\u01AEC\x03" +
        "\x02\x02\x02\u01AF\u01B2\x07C\x02\x02\u01B0\u01B3\x07\n\x02\x02\u01B1" +
        "\u01B3\x07\x19\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B2\u01B1\x03\x02" +
        "\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4" +
        "\u01B5\x05\b\x05\x02\u01B5\u01B6\x05\x04\x03\x02\u01B6E\x03\x02\x02\x02" +
        "\u01B7\u01B8\x07D\x02\x02\u01B8\u01B9\x05\x04\x03\x02\u01B9G\x03\x02\x02" +
        "\x02\u01BA\u01BB\x07E\x02\x02\u01BB\u01BC\x05\x04\x03\x02\u01BC\u01BD" +
        "\x05J&\x02\u01BD\u01BE\x05\x04\x03\x02\u01BE\u01BF\x07F\x02\x02\u01BF" +
        "I\x03\x02\x02\x02\u01C0\u01C1\x07G\x02\x02\u01C1\u01C2\x07H\x02\x02\u01C2" +
        "\u01C3\x07N\x02\x02\u01C3K\x03\x02\x02\x02\u01C4\u01C7\x07I\x02\x02\u01C5" +
        "\u01C8\x05\x16\f\x02\u01C6\u01C8\x07P\x02\x02\u01C7\u01C5\x03\x02\x02" +
        "\x02\u01C7\u01C6\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CB" +
        "\x07\v\x02\x02\u01CA\u01CC\x05\n\x06\x02\u01CB\u01CA\x03\x02\x02\x02\u01CB" +
        "\u01CC\x03\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CE\x07\f\x02" +
        "\x02\u01CEM\x03\x02\x02\x02\u01CF\u01D0\t\x03\x02\x02\u01D0O\x03\x02\x02" +
        "\x02\u01D1\u01D2\t\x04\x02\x02\u01D2Q\x03\x02\x02\x022X\\`w\x80\x90\x95" +
        "\x9B\xA3\xA9\xAF\xC0\xC3\xC5\xCD\xD7\xDD\xE2\xE5\xEA\xF1\xFC\u0110\u0116" +
        "\u011C\u0121\u0127\u012D\u0138\u013B\u013E\u0147\u0160\u0163\u0166\u016E" +
        "\u0171\u0178\u0181\u0186\u0189\u0196\u019E\u01A8\u01AB\u01B2\u01C7\u01CB";
    return PeopleCodeParser;
}(Parser_1.Parser));
exports.PeopleCodeParser = PeopleCodeParser;
var ProgramContext = /** @class */ (function (_super) {
    __extends(ProgramContext, _super);
    function ProgramContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgramContext.prototype.stmtList = function () {
        return this.getRuleContext(0, StmtListContext);
    };
    Object.defineProperty(ProgramContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_program; },
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
var StmtListContext = /** @class */ (function (_super) {
    __extends(StmtListContext, _super);
    function StmtListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StmtListContext.prototype.stmt = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }
        else {
            return this.getRuleContext(i, StmtContext);
        }
    };
    Object.defineProperty(StmtListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_stmtList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StmtListContext.prototype.enterRule = function (listener) {
        if (listener.enterStmtList) {
            listener.enterStmtList(this);
        }
    };
    // @Override
    StmtListContext.prototype.exitRule = function (listener) {
        if (listener.exitStmtList) {
            listener.exitStmtList(this);
        }
    };
    // @Override
    StmtListContext.prototype.accept = function (visitor) {
        if (visitor.visitStmtList) {
            return visitor.visitStmtList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StmtListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StmtListContext = StmtListContext;
var StmtContext = /** @class */ (function (_super) {
    __extends(StmtContext, _super);
    function StmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(StmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_stmt; },
        enumerable: true,
        configurable: true
    });
    StmtContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return StmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StmtContext = StmtContext;
var StmtAppClassImportContext = /** @class */ (function (_super) {
    __extends(StmtAppClassImportContext, _super);
    function StmtAppClassImportContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    StmtAppClassImportContext.prototype.appClassImport = function () {
        return this.getRuleContext(0, AppClassImportContext);
    };
    // @Override
    StmtAppClassImportContext.prototype.enterRule = function (listener) {
        if (listener.enterStmtAppClassImport) {
            listener.enterStmtAppClassImport(this);
        }
    };
    // @Override
    StmtAppClassImportContext.prototype.exitRule = function (listener) {
        if (listener.exitStmtAppClassImport) {
            listener.exitStmtAppClassImport(this);
        }
    };
    // @Override
    StmtAppClassImportContext.prototype.accept = function (visitor) {
        if (visitor.visitStmtAppClassImport) {
            return visitor.visitStmtAppClassImport(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StmtAppClassImportContext;
}(StmtContext));
exports.StmtAppClassImportContext = StmtAppClassImportContext;
var StmtExternalFuncImportContext = /** @class */ (function (_super) {
    __extends(StmtExternalFuncImportContext, _super);
    function StmtExternalFuncImportContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    StmtExternalFuncImportContext.prototype.extFuncImport = function () {
        return this.getRuleContext(0, ExtFuncImportContext);
    };
    // @Override
    StmtExternalFuncImportContext.prototype.enterRule = function (listener) {
        if (listener.enterStmtExternalFuncImport) {
            listener.enterStmtExternalFuncImport(this);
        }
    };
    // @Override
    StmtExternalFuncImportContext.prototype.exitRule = function (listener) {
        if (listener.exitStmtExternalFuncImport) {
            listener.exitStmtExternalFuncImport(this);
        }
    };
    // @Override
    StmtExternalFuncImportContext.prototype.accept = function (visitor) {
        if (visitor.visitStmtExternalFuncImport) {
            return visitor.visitStmtExternalFuncImport(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StmtExternalFuncImportContext;
}(StmtContext));
exports.StmtExternalFuncImportContext = StmtExternalFuncImportContext;
var StmtClassDeclarationContext = /** @class */ (function (_super) {
    __extends(StmtClassDeclarationContext, _super);
    function StmtClassDeclarationContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    StmtClassDeclarationContext.prototype.classDeclaration = function () {
        return this.getRuleContext(0, ClassDeclarationContext);
    };
    // @Override
    StmtClassDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterStmtClassDeclaration) {
            listener.enterStmtClassDeclaration(this);
        }
    };
    // @Override
    StmtClassDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitStmtClassDeclaration) {
            listener.exitStmtClassDeclaration(this);
        }
    };
    // @Override
    StmtClassDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitStmtClassDeclaration) {
            return visitor.visitStmtClassDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StmtClassDeclarationContext;
}(StmtContext));
exports.StmtClassDeclarationContext = StmtClassDeclarationContext;
var StmtMethodImplContext = /** @class */ (function (_super) {
    __extends(StmtMethodImplContext, _super);
    function StmtMethodImplContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    StmtMethodImplContext.prototype.methodImpl = function () {
        return this.getRuleContext(0, MethodImplContext);
    };
    // @Override
    StmtMethodImplContext.prototype.enterRule = function (listener) {
        if (listener.enterStmtMethodImpl) {
            listener.enterStmtMethodImpl(this);
        }
    };
    // @Override
    StmtMethodImplContext.prototype.exitRule = function (listener) {
        if (listener.exitStmtMethodImpl) {
            listener.exitStmtMethodImpl(this);
        }
    };
    // @Override
    StmtMethodImplContext.prototype.accept = function (visitor) {
        if (visitor.visitStmtMethodImpl) {
            return visitor.visitStmtMethodImpl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StmtMethodImplContext;
}(StmtContext));
exports.StmtMethodImplContext = StmtMethodImplContext;
var StmtGetImplContext = /** @class */ (function (_super) {
    __extends(StmtGetImplContext, _super);
    function StmtGetImplContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    StmtGetImplContext.prototype.getImpl = function () {
        return this.getRuleContext(0, GetImplContext);
    };
    // @Override
    StmtGetImplContext.prototype.enterRule = function (listener) {
        if (listener.enterStmtGetImpl) {
            listener.enterStmtGetImpl(this);
        }
    };
    // @Override
    StmtGetImplContext.prototype.exitRule = function (listener) {
        if (listener.exitStmtGetImpl) {
            listener.exitStmtGetImpl(this);
        }
    };
    // @Override
    StmtGetImplContext.prototype.accept = function (visitor) {
        if (visitor.visitStmtGetImpl) {
            return visitor.visitStmtGetImpl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StmtGetImplContext;
}(StmtContext));
exports.StmtGetImplContext = StmtGetImplContext;
var StmtSetImplContext = /** @class */ (function (_super) {
    __extends(StmtSetImplContext, _super);
    function StmtSetImplContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    StmtSetImplContext.prototype.setImpl = function () {
        return this.getRuleContext(0, SetImplContext);
    };
    // @Override
    StmtSetImplContext.prototype.enterRule = function (listener) {
        if (listener.enterStmtSetImpl) {
            listener.enterStmtSetImpl(this);
        }
    };
    // @Override
    StmtSetImplContext.prototype.exitRule = function (listener) {
        if (listener.exitStmtSetImpl) {
            listener.exitStmtSetImpl(this);
        }
    };
    // @Override
    StmtSetImplContext.prototype.accept = function (visitor) {
        if (visitor.visitStmtSetImpl) {
            return visitor.visitStmtSetImpl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StmtSetImplContext;
}(StmtContext));
exports.StmtSetImplContext = StmtSetImplContext;
var StmtFuncImplContext = /** @class */ (function (_super) {
    __extends(StmtFuncImplContext, _super);
    function StmtFuncImplContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    StmtFuncImplContext.prototype.funcImpl = function () {
        return this.getRuleContext(0, FuncImplContext);
    };
    // @Override
    StmtFuncImplContext.prototype.enterRule = function (listener) {
        if (listener.enterStmtFuncImpl) {
            listener.enterStmtFuncImpl(this);
        }
    };
    // @Override
    StmtFuncImplContext.prototype.exitRule = function (listener) {
        if (listener.exitStmtFuncImpl) {
            listener.exitStmtFuncImpl(this);
        }
    };
    // @Override
    StmtFuncImplContext.prototype.accept = function (visitor) {
        if (visitor.visitStmtFuncImpl) {
            return visitor.visitStmtFuncImpl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StmtFuncImplContext;
}(StmtContext));
exports.StmtFuncImplContext = StmtFuncImplContext;
var StmtVarDeclarationContext = /** @class */ (function (_super) {
    __extends(StmtVarDeclarationContext, _super);
    function StmtVarDeclarationContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    StmtVarDeclarationContext.prototype.varDeclaration = function () {
        return this.getRuleContext(0, VarDeclarationContext);
    };
    // @Override
    StmtVarDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterStmtVarDeclaration) {
            listener.enterStmtVarDeclaration(this);
        }
    };
    // @Override
    StmtVarDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitStmtVarDeclaration) {
            listener.exitStmtVarDeclaration(this);
        }
    };
    // @Override
    StmtVarDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitStmtVarDeclaration) {
            return visitor.visitStmtVarDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StmtVarDeclarationContext;
}(StmtContext));
exports.StmtVarDeclarationContext = StmtVarDeclarationContext;
var StmtIfContext = /** @class */ (function (_super) {
    __extends(StmtIfContext, _super);
    function StmtIfContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    StmtIfContext.prototype.ifStmt = function () {
        return this.getRuleContext(0, IfStmtContext);
    };
    // @Override
    StmtIfContext.prototype.enterRule = function (listener) {
        if (listener.enterStmtIf) {
            listener.enterStmtIf(this);
        }
    };
    // @Override
    StmtIfContext.prototype.exitRule = function (listener) {
        if (listener.exitStmtIf) {
            listener.exitStmtIf(this);
        }
    };
    // @Override
    StmtIfContext.prototype.accept = function (visitor) {
        if (visitor.visitStmtIf) {
            return visitor.visitStmtIf(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StmtIfContext;
}(StmtContext));
exports.StmtIfContext = StmtIfContext;
var StmtForContext = /** @class */ (function (_super) {
    __extends(StmtForContext, _super);
    function StmtForContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    StmtForContext.prototype.forStmt = function () {
        return this.getRuleContext(0, ForStmtContext);
    };
    // @Override
    StmtForContext.prototype.enterRule = function (listener) {
        if (listener.enterStmtFor) {
            listener.enterStmtFor(this);
        }
    };
    // @Override
    StmtForContext.prototype.exitRule = function (listener) {
        if (listener.exitStmtFor) {
            listener.exitStmtFor(this);
        }
    };
    // @Override
    StmtForContext.prototype.accept = function (visitor) {
        if (visitor.visitStmtFor) {
            return visitor.visitStmtFor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StmtForContext;
}(StmtContext));
exports.StmtForContext = StmtForContext;
var StmtWhileContext = /** @class */ (function (_super) {
    __extends(StmtWhileContext, _super);
    function StmtWhileContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    StmtWhileContext.prototype.whileStmt = function () {
        return this.getRuleContext(0, WhileStmtContext);
    };
    // @Override
    StmtWhileContext.prototype.enterRule = function (listener) {
        if (listener.enterStmtWhile) {
            listener.enterStmtWhile(this);
        }
    };
    // @Override
    StmtWhileContext.prototype.exitRule = function (listener) {
        if (listener.exitStmtWhile) {
            listener.exitStmtWhile(this);
        }
    };
    // @Override
    StmtWhileContext.prototype.accept = function (visitor) {
        if (visitor.visitStmtWhile) {
            return visitor.visitStmtWhile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StmtWhileContext;
}(StmtContext));
exports.StmtWhileContext = StmtWhileContext;
var StmtEvaluateContext = /** @class */ (function (_super) {
    __extends(StmtEvaluateContext, _super);
    function StmtEvaluateContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    StmtEvaluateContext.prototype.evaluateStmt = function () {
        return this.getRuleContext(0, EvaluateStmtContext);
    };
    // @Override
    StmtEvaluateContext.prototype.enterRule = function (listener) {
        if (listener.enterStmtEvaluate) {
            listener.enterStmtEvaluate(this);
        }
    };
    // @Override
    StmtEvaluateContext.prototype.exitRule = function (listener) {
        if (listener.exitStmtEvaluate) {
            listener.exitStmtEvaluate(this);
        }
    };
    // @Override
    StmtEvaluateContext.prototype.accept = function (visitor) {
        if (visitor.visitStmtEvaluate) {
            return visitor.visitStmtEvaluate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StmtEvaluateContext;
}(StmtContext));
exports.StmtEvaluateContext = StmtEvaluateContext;
var StmtTryCatchContext = /** @class */ (function (_super) {
    __extends(StmtTryCatchContext, _super);
    function StmtTryCatchContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    StmtTryCatchContext.prototype.tryCatchStmt = function () {
        return this.getRuleContext(0, TryCatchStmtContext);
    };
    // @Override
    StmtTryCatchContext.prototype.enterRule = function (listener) {
        if (listener.enterStmtTryCatch) {
            listener.enterStmtTryCatch(this);
        }
    };
    // @Override
    StmtTryCatchContext.prototype.exitRule = function (listener) {
        if (listener.exitStmtTryCatch) {
            listener.exitStmtTryCatch(this);
        }
    };
    // @Override
    StmtTryCatchContext.prototype.accept = function (visitor) {
        if (visitor.visitStmtTryCatch) {
            return visitor.visitStmtTryCatch(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StmtTryCatchContext;
}(StmtContext));
exports.StmtTryCatchContext = StmtTryCatchContext;
var StmtExitContext = /** @class */ (function (_super) {
    __extends(StmtExitContext, _super);
    function StmtExitContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    // @Override
    StmtExitContext.prototype.enterRule = function (listener) {
        if (listener.enterStmtExit) {
            listener.enterStmtExit(this);
        }
    };
    // @Override
    StmtExitContext.prototype.exitRule = function (listener) {
        if (listener.exitStmtExit) {
            listener.exitStmtExit(this);
        }
    };
    // @Override
    StmtExitContext.prototype.accept = function (visitor) {
        if (visitor.visitStmtExit) {
            return visitor.visitStmtExit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StmtExitContext;
}(StmtContext));
exports.StmtExitContext = StmtExitContext;
var StmtBreakContext = /** @class */ (function (_super) {
    __extends(StmtBreakContext, _super);
    function StmtBreakContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    // @Override
    StmtBreakContext.prototype.enterRule = function (listener) {
        if (listener.enterStmtBreak) {
            listener.enterStmtBreak(this);
        }
    };
    // @Override
    StmtBreakContext.prototype.exitRule = function (listener) {
        if (listener.exitStmtBreak) {
            listener.exitStmtBreak(this);
        }
    };
    // @Override
    StmtBreakContext.prototype.accept = function (visitor) {
        if (visitor.visitStmtBreak) {
            return visitor.visitStmtBreak(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StmtBreakContext;
}(StmtContext));
exports.StmtBreakContext = StmtBreakContext;
var StmtErrorContext = /** @class */ (function (_super) {
    __extends(StmtErrorContext, _super);
    function StmtErrorContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    StmtErrorContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    // @Override
    StmtErrorContext.prototype.enterRule = function (listener) {
        if (listener.enterStmtError) {
            listener.enterStmtError(this);
        }
    };
    // @Override
    StmtErrorContext.prototype.exitRule = function (listener) {
        if (listener.exitStmtError) {
            listener.exitStmtError(this);
        }
    };
    // @Override
    StmtErrorContext.prototype.accept = function (visitor) {
        if (visitor.visitStmtError) {
            return visitor.visitStmtError(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StmtErrorContext;
}(StmtContext));
exports.StmtErrorContext = StmtErrorContext;
var StmtWarningContext = /** @class */ (function (_super) {
    __extends(StmtWarningContext, _super);
    function StmtWarningContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    StmtWarningContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    // @Override
    StmtWarningContext.prototype.enterRule = function (listener) {
        if (listener.enterStmtWarning) {
            listener.enterStmtWarning(this);
        }
    };
    // @Override
    StmtWarningContext.prototype.exitRule = function (listener) {
        if (listener.exitStmtWarning) {
            listener.exitStmtWarning(this);
        }
    };
    // @Override
    StmtWarningContext.prototype.accept = function (visitor) {
        if (visitor.visitStmtWarning) {
            return visitor.visitStmtWarning(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StmtWarningContext;
}(StmtContext));
exports.StmtWarningContext = StmtWarningContext;
var StmtReturnContext = /** @class */ (function (_super) {
    __extends(StmtReturnContext, _super);
    function StmtReturnContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    StmtReturnContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    // @Override
    StmtReturnContext.prototype.enterRule = function (listener) {
        if (listener.enterStmtReturn) {
            listener.enterStmtReturn(this);
        }
    };
    // @Override
    StmtReturnContext.prototype.exitRule = function (listener) {
        if (listener.exitStmtReturn) {
            listener.exitStmtReturn(this);
        }
    };
    // @Override
    StmtReturnContext.prototype.accept = function (visitor) {
        if (visitor.visitStmtReturn) {
            return visitor.visitStmtReturn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StmtReturnContext;
}(StmtContext));
exports.StmtReturnContext = StmtReturnContext;
var StmtThrowContext = /** @class */ (function (_super) {
    __extends(StmtThrowContext, _super);
    function StmtThrowContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    StmtThrowContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    // @Override
    StmtThrowContext.prototype.enterRule = function (listener) {
        if (listener.enterStmtThrow) {
            listener.enterStmtThrow(this);
        }
    };
    // @Override
    StmtThrowContext.prototype.exitRule = function (listener) {
        if (listener.exitStmtThrow) {
            listener.exitStmtThrow(this);
        }
    };
    // @Override
    StmtThrowContext.prototype.accept = function (visitor) {
        if (visitor.visitStmtThrow) {
            return visitor.visitStmtThrow(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StmtThrowContext;
}(StmtContext));
exports.StmtThrowContext = StmtThrowContext;
var StmtAssignContext = /** @class */ (function (_super) {
    __extends(StmtAssignContext, _super);
    function StmtAssignContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    StmtAssignContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    // @Override
    StmtAssignContext.prototype.enterRule = function (listener) {
        if (listener.enterStmtAssign) {
            listener.enterStmtAssign(this);
        }
    };
    // @Override
    StmtAssignContext.prototype.exitRule = function (listener) {
        if (listener.exitStmtAssign) {
            listener.exitStmtAssign(this);
        }
    };
    // @Override
    StmtAssignContext.prototype.accept = function (visitor) {
        if (visitor.visitStmtAssign) {
            return visitor.visitStmtAssign(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StmtAssignContext;
}(StmtContext));
exports.StmtAssignContext = StmtAssignContext;
var StmtExprContext = /** @class */ (function (_super) {
    __extends(StmtExprContext, _super);
    function StmtExprContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    StmtExprContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    // @Override
    StmtExprContext.prototype.enterRule = function (listener) {
        if (listener.enterStmtExpr) {
            listener.enterStmtExpr(this);
        }
    };
    // @Override
    StmtExprContext.prototype.exitRule = function (listener) {
        if (listener.exitStmtExpr) {
            listener.exitStmtExpr(this);
        }
    };
    // @Override
    StmtExprContext.prototype.accept = function (visitor) {
        if (visitor.visitStmtExpr) {
            return visitor.visitStmtExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StmtExprContext;
}(StmtContext));
exports.StmtExprContext = StmtExprContext;
var ExprContext = /** @class */ (function (_super) {
    __extends(ExprContext, _super);
    function ExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_expr; },
        enumerable: true,
        configurable: true
    });
    ExprContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return ExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExprContext = ExprContext;
var ExprParenthesizedContext = /** @class */ (function (_super) {
    __extends(ExprParenthesizedContext, _super);
    function ExprParenthesizedContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ExprParenthesizedContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    // @Override
    ExprParenthesizedContext.prototype.enterRule = function (listener) {
        if (listener.enterExprParenthesized) {
            listener.enterExprParenthesized(this);
        }
    };
    // @Override
    ExprParenthesizedContext.prototype.exitRule = function (listener) {
        if (listener.exitExprParenthesized) {
            listener.exitExprParenthesized(this);
        }
    };
    // @Override
    ExprParenthesizedContext.prototype.accept = function (visitor) {
        if (visitor.visitExprParenthesized) {
            return visitor.visitExprParenthesized(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprParenthesizedContext;
}(ExprContext));
exports.ExprParenthesizedContext = ExprParenthesizedContext;
var ExprDynamicReferenceContext = /** @class */ (function (_super) {
    __extends(ExprDynamicReferenceContext, _super);
    function ExprDynamicReferenceContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ExprDynamicReferenceContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    // @Override
    ExprDynamicReferenceContext.prototype.enterRule = function (listener) {
        if (listener.enterExprDynamicReference) {
            listener.enterExprDynamicReference(this);
        }
    };
    // @Override
    ExprDynamicReferenceContext.prototype.exitRule = function (listener) {
        if (listener.exitExprDynamicReference) {
            listener.exitExprDynamicReference(this);
        }
    };
    // @Override
    ExprDynamicReferenceContext.prototype.accept = function (visitor) {
        if (visitor.visitExprDynamicReference) {
            return visitor.visitExprDynamicReference(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprDynamicReferenceContext;
}(ExprContext));
exports.ExprDynamicReferenceContext = ExprDynamicReferenceContext;
var ExprLiteralContext = /** @class */ (function (_super) {
    __extends(ExprLiteralContext, _super);
    function ExprLiteralContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ExprLiteralContext.prototype.literal = function () {
        return this.getRuleContext(0, LiteralContext);
    };
    // @Override
    ExprLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterExprLiteral) {
            listener.enterExprLiteral(this);
        }
    };
    // @Override
    ExprLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitExprLiteral) {
            listener.exitExprLiteral(this);
        }
    };
    // @Override
    ExprLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitExprLiteral) {
            return visitor.visitExprLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprLiteralContext;
}(ExprContext));
exports.ExprLiteralContext = ExprLiteralContext;
var ExprIdContext = /** @class */ (function (_super) {
    __extends(ExprIdContext, _super);
    function ExprIdContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ExprIdContext.prototype.id = function () {
        return this.getRuleContext(0, IdContext);
    };
    // @Override
    ExprIdContext.prototype.enterRule = function (listener) {
        if (listener.enterExprId) {
            listener.enterExprId(this);
        }
    };
    // @Override
    ExprIdContext.prototype.exitRule = function (listener) {
        if (listener.exitExprId) {
            listener.exitExprId(this);
        }
    };
    // @Override
    ExprIdContext.prototype.accept = function (visitor) {
        if (visitor.visitExprId) {
            return visitor.visitExprId(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprIdContext;
}(ExprContext));
exports.ExprIdContext = ExprIdContext;
var ExprCreateContext = /** @class */ (function (_super) {
    __extends(ExprCreateContext, _super);
    function ExprCreateContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ExprCreateContext.prototype.createInvocation = function () {
        return this.getRuleContext(0, CreateInvocationContext);
    };
    // @Override
    ExprCreateContext.prototype.enterRule = function (listener) {
        if (listener.enterExprCreate) {
            listener.enterExprCreate(this);
        }
    };
    // @Override
    ExprCreateContext.prototype.exitRule = function (listener) {
        if (listener.exitExprCreate) {
            listener.exitExprCreate(this);
        }
    };
    // @Override
    ExprCreateContext.prototype.accept = function (visitor) {
        if (visitor.visitExprCreate) {
            return visitor.visitExprCreate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprCreateContext;
}(ExprContext));
exports.ExprCreateContext = ExprCreateContext;
var ExprDotAccessContext = /** @class */ (function (_super) {
    __extends(ExprDotAccessContext, _super);
    function ExprDotAccessContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ExprDotAccessContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    ExprDotAccessContext.prototype.id = function () {
        return this.getRuleContext(0, IdContext);
    };
    // @Override
    ExprDotAccessContext.prototype.enterRule = function (listener) {
        if (listener.enterExprDotAccess) {
            listener.enterExprDotAccess(this);
        }
    };
    // @Override
    ExprDotAccessContext.prototype.exitRule = function (listener) {
        if (listener.exitExprDotAccess) {
            listener.exitExprDotAccess(this);
        }
    };
    // @Override
    ExprDotAccessContext.prototype.accept = function (visitor) {
        if (visitor.visitExprDotAccess) {
            return visitor.visitExprDotAccess(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprDotAccessContext;
}(ExprContext));
exports.ExprDotAccessContext = ExprDotAccessContext;
var ExprArrayIndexContext = /** @class */ (function (_super) {
    __extends(ExprArrayIndexContext, _super);
    function ExprArrayIndexContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ExprArrayIndexContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    ExprArrayIndexContext.prototype.exprList = function () {
        return this.getRuleContext(0, ExprListContext);
    };
    // @Override
    ExprArrayIndexContext.prototype.enterRule = function (listener) {
        if (listener.enterExprArrayIndex) {
            listener.enterExprArrayIndex(this);
        }
    };
    // @Override
    ExprArrayIndexContext.prototype.exitRule = function (listener) {
        if (listener.exitExprArrayIndex) {
            listener.exitExprArrayIndex(this);
        }
    };
    // @Override
    ExprArrayIndexContext.prototype.accept = function (visitor) {
        if (visitor.visitExprArrayIndex) {
            return visitor.visitExprArrayIndex(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprArrayIndexContext;
}(ExprContext));
exports.ExprArrayIndexContext = ExprArrayIndexContext;
var ExprFnOrIdxCallContext = /** @class */ (function (_super) {
    __extends(ExprFnOrIdxCallContext, _super);
    function ExprFnOrIdxCallContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ExprFnOrIdxCallContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    ExprFnOrIdxCallContext.prototype.exprList = function () {
        return this.tryGetRuleContext(0, ExprListContext);
    };
    // @Override
    ExprFnOrIdxCallContext.prototype.enterRule = function (listener) {
        if (listener.enterExprFnOrIdxCall) {
            listener.enterExprFnOrIdxCall(this);
        }
    };
    // @Override
    ExprFnOrIdxCallContext.prototype.exitRule = function (listener) {
        if (listener.exitExprFnOrIdxCall) {
            listener.exitExprFnOrIdxCall(this);
        }
    };
    // @Override
    ExprFnOrIdxCallContext.prototype.accept = function (visitor) {
        if (visitor.visitExprFnOrIdxCall) {
            return visitor.visitExprFnOrIdxCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprFnOrIdxCallContext;
}(ExprContext));
exports.ExprFnOrIdxCallContext = ExprFnOrIdxCallContext;
var ExprNegateContext = /** @class */ (function (_super) {
    __extends(ExprNegateContext, _super);
    function ExprNegateContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ExprNegateContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    // @Override
    ExprNegateContext.prototype.enterRule = function (listener) {
        if (listener.enterExprNegate) {
            listener.enterExprNegate(this);
        }
    };
    // @Override
    ExprNegateContext.prototype.exitRule = function (listener) {
        if (listener.exitExprNegate) {
            listener.exitExprNegate(this);
        }
    };
    // @Override
    ExprNegateContext.prototype.accept = function (visitor) {
        if (visitor.visitExprNegate) {
            return visitor.visitExprNegate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprNegateContext;
}(ExprContext));
exports.ExprNegateContext = ExprNegateContext;
var ExprNotContext = /** @class */ (function (_super) {
    __extends(ExprNotContext, _super);
    function ExprNotContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ExprNotContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    // @Override
    ExprNotContext.prototype.enterRule = function (listener) {
        if (listener.enterExprNot) {
            listener.enterExprNot(this);
        }
    };
    // @Override
    ExprNotContext.prototype.exitRule = function (listener) {
        if (listener.exitExprNot) {
            listener.exitExprNot(this);
        }
    };
    // @Override
    ExprNotContext.prototype.accept = function (visitor) {
        if (visitor.visitExprNot) {
            return visitor.visitExprNot(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprNotContext;
}(ExprContext));
exports.ExprNotContext = ExprNotContext;
var ExprMulDivContext = /** @class */ (function (_super) {
    __extends(ExprMulDivContext, _super);
    function ExprMulDivContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ExprMulDivContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    // @Override
    ExprMulDivContext.prototype.enterRule = function (listener) {
        if (listener.enterExprMulDiv) {
            listener.enterExprMulDiv(this);
        }
    };
    // @Override
    ExprMulDivContext.prototype.exitRule = function (listener) {
        if (listener.exitExprMulDiv) {
            listener.exitExprMulDiv(this);
        }
    };
    // @Override
    ExprMulDivContext.prototype.accept = function (visitor) {
        if (visitor.visitExprMulDiv) {
            return visitor.visitExprMulDiv(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprMulDivContext;
}(ExprContext));
exports.ExprMulDivContext = ExprMulDivContext;
var ExprAddSubContext = /** @class */ (function (_super) {
    __extends(ExprAddSubContext, _super);
    function ExprAddSubContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ExprAddSubContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    // @Override
    ExprAddSubContext.prototype.enterRule = function (listener) {
        if (listener.enterExprAddSub) {
            listener.enterExprAddSub(this);
        }
    };
    // @Override
    ExprAddSubContext.prototype.exitRule = function (listener) {
        if (listener.exitExprAddSub) {
            listener.exitExprAddSub(this);
        }
    };
    // @Override
    ExprAddSubContext.prototype.accept = function (visitor) {
        if (visitor.visitExprAddSub) {
            return visitor.visitExprAddSub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprAddSubContext;
}(ExprContext));
exports.ExprAddSubContext = ExprAddSubContext;
var ExprComparisonContext = /** @class */ (function (_super) {
    __extends(ExprComparisonContext, _super);
    function ExprComparisonContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ExprComparisonContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    // @Override
    ExprComparisonContext.prototype.enterRule = function (listener) {
        if (listener.enterExprComparison) {
            listener.enterExprComparison(this);
        }
    };
    // @Override
    ExprComparisonContext.prototype.exitRule = function (listener) {
        if (listener.exitExprComparison) {
            listener.exitExprComparison(this);
        }
    };
    // @Override
    ExprComparisonContext.prototype.accept = function (visitor) {
        if (visitor.visitExprComparison) {
            return visitor.visitExprComparison(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprComparisonContext;
}(ExprContext));
exports.ExprComparisonContext = ExprComparisonContext;
var ExprEqualityContext = /** @class */ (function (_super) {
    __extends(ExprEqualityContext, _super);
    function ExprEqualityContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ExprEqualityContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    // @Override
    ExprEqualityContext.prototype.enterRule = function (listener) {
        if (listener.enterExprEquality) {
            listener.enterExprEquality(this);
        }
    };
    // @Override
    ExprEqualityContext.prototype.exitRule = function (listener) {
        if (listener.exitExprEquality) {
            listener.exitExprEquality(this);
        }
    };
    // @Override
    ExprEqualityContext.prototype.accept = function (visitor) {
        if (visitor.visitExprEquality) {
            return visitor.visitExprEquality(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprEqualityContext;
}(ExprContext));
exports.ExprEqualityContext = ExprEqualityContext;
var ExprBooleanContext = /** @class */ (function (_super) {
    __extends(ExprBooleanContext, _super);
    function ExprBooleanContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ExprBooleanContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    // @Override
    ExprBooleanContext.prototype.enterRule = function (listener) {
        if (listener.enterExprBoolean) {
            listener.enterExprBoolean(this);
        }
    };
    // @Override
    ExprBooleanContext.prototype.exitRule = function (listener) {
        if (listener.exitExprBoolean) {
            listener.exitExprBoolean(this);
        }
    };
    // @Override
    ExprBooleanContext.prototype.accept = function (visitor) {
        if (visitor.visitExprBoolean) {
            return visitor.visitExprBoolean(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprBooleanContext;
}(ExprContext));
exports.ExprBooleanContext = ExprBooleanContext;
var ExprConcatContext = /** @class */ (function (_super) {
    __extends(ExprConcatContext, _super);
    function ExprConcatContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ExprConcatContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    // @Override
    ExprConcatContext.prototype.enterRule = function (listener) {
        if (listener.enterExprConcat) {
            listener.enterExprConcat(this);
        }
    };
    // @Override
    ExprConcatContext.prototype.exitRule = function (listener) {
        if (listener.exitExprConcat) {
            listener.exitExprConcat(this);
        }
    };
    // @Override
    ExprConcatContext.prototype.accept = function (visitor) {
        if (visitor.visitExprConcat) {
            return visitor.visitExprConcat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprConcatContext;
}(ExprContext));
exports.ExprConcatContext = ExprConcatContext;
var ExprListContext = /** @class */ (function (_super) {
    __extends(ExprListContext, _super);
    function ExprListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExprListContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    Object.defineProperty(ExprListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_exprList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExprListContext.prototype.enterRule = function (listener) {
        if (listener.enterExprList) {
            listener.enterExprList(this);
        }
    };
    // @Override
    ExprListContext.prototype.exitRule = function (listener) {
        if (listener.exitExprList) {
            listener.exitExprList(this);
        }
    };
    // @Override
    ExprListContext.prototype.accept = function (visitor) {
        if (visitor.visitExprList) {
            return visitor.visitExprList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExprListContext = ExprListContext;
var VarDeclarationContext = /** @class */ (function (_super) {
    __extends(VarDeclarationContext, _super);
    function VarDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VarDeclarationContext.prototype.varType = function () {
        return this.getRuleContext(0, VarTypeContext);
    };
    VarDeclarationContext.prototype.varDeclarator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VarDeclaratorContext);
        }
        else {
            return this.getRuleContext(i, VarDeclaratorContext);
        }
    };
    VarDeclarationContext.prototype.GENERIC_ID = function () { return this.getToken(PeopleCodeParser.GENERIC_ID, 0); };
    Object.defineProperty(VarDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_varDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VarDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterVarDeclaration) {
            listener.enterVarDeclaration(this);
        }
    };
    // @Override
    VarDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitVarDeclaration) {
            listener.exitVarDeclaration(this);
        }
    };
    // @Override
    VarDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitVarDeclaration) {
            return visitor.visitVarDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VarDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VarDeclarationContext = VarDeclarationContext;
var VarDeclaratorContext = /** @class */ (function (_super) {
    __extends(VarDeclaratorContext, _super);
    function VarDeclaratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VarDeclaratorContext.prototype.VAR_ID = function () { return this.getToken(PeopleCodeParser.VAR_ID, 0); };
    VarDeclaratorContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    Object.defineProperty(VarDeclaratorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_varDeclarator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VarDeclaratorContext.prototype.enterRule = function (listener) {
        if (listener.enterVarDeclarator) {
            listener.enterVarDeclarator(this);
        }
    };
    // @Override
    VarDeclaratorContext.prototype.exitRule = function (listener) {
        if (listener.exitVarDeclarator) {
            listener.exitVarDeclarator(this);
        }
    };
    // @Override
    VarDeclaratorContext.prototype.accept = function (visitor) {
        if (visitor.visitVarDeclarator) {
            return visitor.visitVarDeclarator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VarDeclaratorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VarDeclaratorContext = VarDeclaratorContext;
var VarTypeContext = /** @class */ (function (_super) {
    __extends(VarTypeContext, _super);
    function VarTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VarTypeContext.prototype.GENERIC_ID = function () { return this.tryGetToken(PeopleCodeParser.GENERIC_ID, 0); };
    VarTypeContext.prototype.varType = function () {
        return this.tryGetRuleContext(0, VarTypeContext);
    };
    VarTypeContext.prototype.appClassPath = function () {
        return this.tryGetRuleContext(0, AppClassPathContext);
    };
    Object.defineProperty(VarTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_varType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VarTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterVarType) {
            listener.enterVarType(this);
        }
    };
    // @Override
    VarTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitVarType) {
            listener.exitVarType(this);
        }
    };
    // @Override
    VarTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitVarType) {
            return visitor.visitVarType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VarTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VarTypeContext = VarTypeContext;
var AppClassImportContext = /** @class */ (function (_super) {
    __extends(AppClassImportContext, _super);
    function AppClassImportContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AppClassImportContext.prototype.appPkgPath = function () {
        return this.tryGetRuleContext(0, AppPkgPathContext);
    };
    AppClassImportContext.prototype.appClassPath = function () {
        return this.tryGetRuleContext(0, AppClassPathContext);
    };
    Object.defineProperty(AppClassImportContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_appClassImport; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AppClassImportContext.prototype.enterRule = function (listener) {
        if (listener.enterAppClassImport) {
            listener.enterAppClassImport(this);
        }
    };
    // @Override
    AppClassImportContext.prototype.exitRule = function (listener) {
        if (listener.exitAppClassImport) {
            listener.exitAppClassImport(this);
        }
    };
    // @Override
    AppClassImportContext.prototype.accept = function (visitor) {
        if (visitor.visitAppClassImport) {
            return visitor.visitAppClassImport(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AppClassImportContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AppClassImportContext = AppClassImportContext;
var AppPkgPathContext = /** @class */ (function (_super) {
    __extends(AppPkgPathContext, _super);
    function AppPkgPathContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AppPkgPathContext.prototype.GENERIC_ID = function (i) {
        if (i === undefined) {
            return this.getTokens(PeopleCodeParser.GENERIC_ID);
        }
        else {
            return this.getToken(PeopleCodeParser.GENERIC_ID, i);
        }
    };
    Object.defineProperty(AppPkgPathContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_appPkgPath; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AppPkgPathContext.prototype.enterRule = function (listener) {
        if (listener.enterAppPkgPath) {
            listener.enterAppPkgPath(this);
        }
    };
    // @Override
    AppPkgPathContext.prototype.exitRule = function (listener) {
        if (listener.exitAppPkgPath) {
            listener.exitAppPkgPath(this);
        }
    };
    // @Override
    AppPkgPathContext.prototype.accept = function (visitor) {
        if (visitor.visitAppPkgPath) {
            return visitor.visitAppPkgPath(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AppPkgPathContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AppPkgPathContext = AppPkgPathContext;
var AppClassPathContext = /** @class */ (function (_super) {
    __extends(AppClassPathContext, _super);
    function AppClassPathContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AppClassPathContext.prototype.GENERIC_ID = function (i) {
        if (i === undefined) {
            return this.getTokens(PeopleCodeParser.GENERIC_ID);
        }
        else {
            return this.getToken(PeopleCodeParser.GENERIC_ID, i);
        }
    };
    Object.defineProperty(AppClassPathContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_appClassPath; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AppClassPathContext.prototype.enterRule = function (listener) {
        if (listener.enterAppClassPath) {
            listener.enterAppClassPath(this);
        }
    };
    // @Override
    AppClassPathContext.prototype.exitRule = function (listener) {
        if (listener.exitAppClassPath) {
            listener.exitAppClassPath(this);
        }
    };
    // @Override
    AppClassPathContext.prototype.accept = function (visitor) {
        if (visitor.visitAppClassPath) {
            return visitor.visitAppClassPath(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AppClassPathContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AppClassPathContext = AppClassPathContext;
var ExtFuncImportContext = /** @class */ (function (_super) {
    __extends(ExtFuncImportContext, _super);
    function ExtFuncImportContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExtFuncImportContext.prototype.GENERIC_ID = function () { return this.getToken(PeopleCodeParser.GENERIC_ID, 0); };
    ExtFuncImportContext.prototype.recDefnPath = function () {
        return this.getRuleContext(0, RecDefnPathContext);
    };
    ExtFuncImportContext.prototype.event = function () {
        return this.getRuleContext(0, EventContext);
    };
    Object.defineProperty(ExtFuncImportContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_extFuncImport; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExtFuncImportContext.prototype.enterRule = function (listener) {
        if (listener.enterExtFuncImport) {
            listener.enterExtFuncImport(this);
        }
    };
    // @Override
    ExtFuncImportContext.prototype.exitRule = function (listener) {
        if (listener.exitExtFuncImport) {
            listener.exitExtFuncImport(this);
        }
    };
    // @Override
    ExtFuncImportContext.prototype.accept = function (visitor) {
        if (visitor.visitExtFuncImport) {
            return visitor.visitExtFuncImport(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExtFuncImportContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExtFuncImportContext = ExtFuncImportContext;
var RecDefnPathContext = /** @class */ (function (_super) {
    __extends(RecDefnPathContext, _super);
    function RecDefnPathContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RecDefnPathContext.prototype.GENERIC_ID = function (i) {
        if (i === undefined) {
            return this.getTokens(PeopleCodeParser.GENERIC_ID);
        }
        else {
            return this.getToken(PeopleCodeParser.GENERIC_ID, i);
        }
    };
    Object.defineProperty(RecDefnPathContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_recDefnPath; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RecDefnPathContext.prototype.enterRule = function (listener) {
        if (listener.enterRecDefnPath) {
            listener.enterRecDefnPath(this);
        }
    };
    // @Override
    RecDefnPathContext.prototype.exitRule = function (listener) {
        if (listener.exitRecDefnPath) {
            listener.exitRecDefnPath(this);
        }
    };
    // @Override
    RecDefnPathContext.prototype.accept = function (visitor) {
        if (visitor.visitRecDefnPath) {
            return visitor.visitRecDefnPath(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RecDefnPathContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RecDefnPathContext = RecDefnPathContext;
var EventContext = /** @class */ (function (_super) {
    __extends(EventContext, _super);
    function EventContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(EventContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_event; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EventContext.prototype.enterRule = function (listener) {
        if (listener.enterEvent) {
            listener.enterEvent(this);
        }
    };
    // @Override
    EventContext.prototype.exitRule = function (listener) {
        if (listener.exitEvent) {
            listener.exitEvent(this);
        }
    };
    // @Override
    EventContext.prototype.accept = function (visitor) {
        if (visitor.visitEvent) {
            return visitor.visitEvent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EventContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EventContext = EventContext;
var ClassDeclarationContext = /** @class */ (function (_super) {
    __extends(ClassDeclarationContext, _super);
    function ClassDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassDeclarationContext.prototype.GENERIC_ID = function () { return this.getToken(PeopleCodeParser.GENERIC_ID, 0); };
    ClassDeclarationContext.prototype.classBlock = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassBlockContext);
        }
        else {
            return this.getRuleContext(i, ClassBlockContext);
        }
    };
    Object.defineProperty(ClassDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_classDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterClassDeclaration) {
            listener.enterClassDeclaration(this);
        }
    };
    // @Override
    ClassDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitClassDeclaration) {
            listener.exitClassDeclaration(this);
        }
    };
    // @Override
    ClassDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitClassDeclaration) {
            return visitor.visitClassDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassDeclarationContext = ClassDeclarationContext;
var ClassBlockContext = /** @class */ (function (_super) {
    __extends(ClassBlockContext, _super);
    function ClassBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassBlockContext.prototype.classBlockStmt = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassBlockStmtContext);
        }
        else {
            return this.getRuleContext(i, ClassBlockStmtContext);
        }
    };
    Object.defineProperty(ClassBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_classBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterClassBlock) {
            listener.enterClassBlock(this);
        }
    };
    // @Override
    ClassBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitClassBlock) {
            listener.exitClassBlock(this);
        }
    };
    // @Override
    ClassBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitClassBlock) {
            return visitor.visitClassBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassBlockContext = ClassBlockContext;
var ClassBlockStmtContext = /** @class */ (function (_super) {
    __extends(ClassBlockStmtContext, _super);
    function ClassBlockStmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassBlockStmtContext.prototype.method = function () {
        return this.tryGetRuleContext(0, MethodContext);
    };
    ClassBlockStmtContext.prototype.constant = function () {
        return this.tryGetRuleContext(0, ConstantContext);
    };
    ClassBlockStmtContext.prototype.property = function () {
        return this.tryGetRuleContext(0, PropertyContext);
    };
    ClassBlockStmtContext.prototype.instance = function () {
        return this.tryGetRuleContext(0, InstanceContext);
    };
    Object.defineProperty(ClassBlockStmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_classBlockStmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassBlockStmtContext.prototype.enterRule = function (listener) {
        if (listener.enterClassBlockStmt) {
            listener.enterClassBlockStmt(this);
        }
    };
    // @Override
    ClassBlockStmtContext.prototype.exitRule = function (listener) {
        if (listener.exitClassBlockStmt) {
            listener.exitClassBlockStmt(this);
        }
    };
    // @Override
    ClassBlockStmtContext.prototype.accept = function (visitor) {
        if (visitor.visitClassBlockStmt) {
            return visitor.visitClassBlockStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassBlockStmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassBlockStmtContext = ClassBlockStmtContext;
var MethodContext = /** @class */ (function (_super) {
    __extends(MethodContext, _super);
    function MethodContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MethodContext.prototype.GENERIC_ID = function () { return this.getToken(PeopleCodeParser.GENERIC_ID, 0); };
    MethodContext.prototype.formalParamList = function () {
        return this.getRuleContext(0, FormalParamListContext);
    };
    MethodContext.prototype.returnType = function () {
        return this.tryGetRuleContext(0, ReturnTypeContext);
    };
    Object.defineProperty(MethodContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_method; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MethodContext.prototype.enterRule = function (listener) {
        if (listener.enterMethod) {
            listener.enterMethod(this);
        }
    };
    // @Override
    MethodContext.prototype.exitRule = function (listener) {
        if (listener.exitMethod) {
            listener.exitMethod(this);
        }
    };
    // @Override
    MethodContext.prototype.accept = function (visitor) {
        if (visitor.visitMethod) {
            return visitor.visitMethod(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MethodContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MethodContext = MethodContext;
var ConstantContext = /** @class */ (function (_super) {
    __extends(ConstantContext, _super);
    function ConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantContext.prototype.VAR_ID = function () { return this.getToken(PeopleCodeParser.VAR_ID, 0); };
    ConstantContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    Object.defineProperty(ConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_constant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstantContext.prototype.enterRule = function (listener) {
        if (listener.enterConstant) {
            listener.enterConstant(this);
        }
    };
    // @Override
    ConstantContext.prototype.exitRule = function (listener) {
        if (listener.exitConstant) {
            listener.exitConstant(this);
        }
    };
    // @Override
    ConstantContext.prototype.accept = function (visitor) {
        if (visitor.visitConstant) {
            return visitor.visitConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstantContext = ConstantContext;
var PropertyContext = /** @class */ (function (_super) {
    __extends(PropertyContext, _super);
    function PropertyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropertyContext.prototype.varType = function () {
        return this.getRuleContext(0, VarTypeContext);
    };
    PropertyContext.prototype.GENERIC_ID = function () { return this.getToken(PeopleCodeParser.GENERIC_ID, 0); };
    Object.defineProperty(PropertyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_property; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PropertyContext.prototype.enterRule = function (listener) {
        if (listener.enterProperty) {
            listener.enterProperty(this);
        }
    };
    // @Override
    PropertyContext.prototype.exitRule = function (listener) {
        if (listener.exitProperty) {
            listener.exitProperty(this);
        }
    };
    // @Override
    PropertyContext.prototype.accept = function (visitor) {
        if (visitor.visitProperty) {
            return visitor.visitProperty(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertyContext = PropertyContext;
var InstanceContext = /** @class */ (function (_super) {
    __extends(InstanceContext, _super);
    function InstanceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InstanceContext.prototype.varType = function () {
        return this.getRuleContext(0, VarTypeContext);
    };
    InstanceContext.prototype.VAR_ID = function (i) {
        if (i === undefined) {
            return this.getTokens(PeopleCodeParser.VAR_ID);
        }
        else {
            return this.getToken(PeopleCodeParser.VAR_ID, i);
        }
    };
    Object.defineProperty(InstanceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_instance; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InstanceContext.prototype.enterRule = function (listener) {
        if (listener.enterInstance) {
            listener.enterInstance(this);
        }
    };
    // @Override
    InstanceContext.prototype.exitRule = function (listener) {
        if (listener.exitInstance) {
            listener.exitInstance(this);
        }
    };
    // @Override
    InstanceContext.prototype.accept = function (visitor) {
        if (visitor.visitInstance) {
            return visitor.visitInstance(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InstanceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InstanceContext = InstanceContext;
var MethodImplContext = /** @class */ (function (_super) {
    __extends(MethodImplContext, _super);
    function MethodImplContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MethodImplContext.prototype.GENERIC_ID = function () { return this.getToken(PeopleCodeParser.GENERIC_ID, 0); };
    MethodImplContext.prototype.stmtList = function () {
        return this.getRuleContext(0, StmtListContext);
    };
    Object.defineProperty(MethodImplContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_methodImpl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MethodImplContext.prototype.enterRule = function (listener) {
        if (listener.enterMethodImpl) {
            listener.enterMethodImpl(this);
        }
    };
    // @Override
    MethodImplContext.prototype.exitRule = function (listener) {
        if (listener.exitMethodImpl) {
            listener.exitMethodImpl(this);
        }
    };
    // @Override
    MethodImplContext.prototype.accept = function (visitor) {
        if (visitor.visitMethodImpl) {
            return visitor.visitMethodImpl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MethodImplContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MethodImplContext = MethodImplContext;
var GetImplContext = /** @class */ (function (_super) {
    __extends(GetImplContext, _super);
    function GetImplContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GetImplContext.prototype.GENERIC_ID = function () { return this.getToken(PeopleCodeParser.GENERIC_ID, 0); };
    GetImplContext.prototype.stmtList = function () {
        return this.getRuleContext(0, StmtListContext);
    };
    Object.defineProperty(GetImplContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_getImpl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GetImplContext.prototype.enterRule = function (listener) {
        if (listener.enterGetImpl) {
            listener.enterGetImpl(this);
        }
    };
    // @Override
    GetImplContext.prototype.exitRule = function (listener) {
        if (listener.exitGetImpl) {
            listener.exitGetImpl(this);
        }
    };
    // @Override
    GetImplContext.prototype.accept = function (visitor) {
        if (visitor.visitGetImpl) {
            return visitor.visitGetImpl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GetImplContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GetImplContext = GetImplContext;
var SetImplContext = /** @class */ (function (_super) {
    __extends(SetImplContext, _super);
    function SetImplContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SetImplContext.prototype.GENERIC_ID = function () { return this.getToken(PeopleCodeParser.GENERIC_ID, 0); };
    SetImplContext.prototype.stmtList = function () {
        return this.getRuleContext(0, StmtListContext);
    };
    Object.defineProperty(SetImplContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_setImpl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SetImplContext.prototype.enterRule = function (listener) {
        if (listener.enterSetImpl) {
            listener.enterSetImpl(this);
        }
    };
    // @Override
    SetImplContext.prototype.exitRule = function (listener) {
        if (listener.exitSetImpl) {
            listener.exitSetImpl(this);
        }
    };
    // @Override
    SetImplContext.prototype.accept = function (visitor) {
        if (visitor.visitSetImpl) {
            return visitor.visitSetImpl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SetImplContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SetImplContext = SetImplContext;
var FuncImplContext = /** @class */ (function (_super) {
    __extends(FuncImplContext, _super);
    function FuncImplContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FuncImplContext.prototype.funcSignature = function () {
        return this.getRuleContext(0, FuncSignatureContext);
    };
    FuncImplContext.prototype.stmtList = function () {
        return this.getRuleContext(0, StmtListContext);
    };
    Object.defineProperty(FuncImplContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_funcImpl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FuncImplContext.prototype.enterRule = function (listener) {
        if (listener.enterFuncImpl) {
            listener.enterFuncImpl(this);
        }
    };
    // @Override
    FuncImplContext.prototype.exitRule = function (listener) {
        if (listener.exitFuncImpl) {
            listener.exitFuncImpl(this);
        }
    };
    // @Override
    FuncImplContext.prototype.accept = function (visitor) {
        if (visitor.visitFuncImpl) {
            return visitor.visitFuncImpl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FuncImplContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FuncImplContext = FuncImplContext;
var FuncSignatureContext = /** @class */ (function (_super) {
    __extends(FuncSignatureContext, _super);
    function FuncSignatureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FuncSignatureContext.prototype.GENERIC_ID = function () { return this.getToken(PeopleCodeParser.GENERIC_ID, 0); };
    FuncSignatureContext.prototype.formalParamList = function () {
        return this.tryGetRuleContext(0, FormalParamListContext);
    };
    FuncSignatureContext.prototype.returnType = function () {
        return this.tryGetRuleContext(0, ReturnTypeContext);
    };
    Object.defineProperty(FuncSignatureContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_funcSignature; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FuncSignatureContext.prototype.enterRule = function (listener) {
        if (listener.enterFuncSignature) {
            listener.enterFuncSignature(this);
        }
    };
    // @Override
    FuncSignatureContext.prototype.exitRule = function (listener) {
        if (listener.exitFuncSignature) {
            listener.exitFuncSignature(this);
        }
    };
    // @Override
    FuncSignatureContext.prototype.accept = function (visitor) {
        if (visitor.visitFuncSignature) {
            return visitor.visitFuncSignature(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FuncSignatureContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FuncSignatureContext = FuncSignatureContext;
var FormalParamListContext = /** @class */ (function (_super) {
    __extends(FormalParamListContext, _super);
    function FormalParamListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormalParamListContext.prototype.param = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ParamContext);
        }
        else {
            return this.getRuleContext(i, ParamContext);
        }
    };
    Object.defineProperty(FormalParamListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_formalParamList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormalParamListContext.prototype.enterRule = function (listener) {
        if (listener.enterFormalParamList) {
            listener.enterFormalParamList(this);
        }
    };
    // @Override
    FormalParamListContext.prototype.exitRule = function (listener) {
        if (listener.exitFormalParamList) {
            listener.exitFormalParamList(this);
        }
    };
    // @Override
    FormalParamListContext.prototype.accept = function (visitor) {
        if (visitor.visitFormalParamList) {
            return visitor.visitFormalParamList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormalParamListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormalParamListContext = FormalParamListContext;
var ParamContext = /** @class */ (function (_super) {
    __extends(ParamContext, _super);
    function ParamContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParamContext.prototype.VAR_ID = function () { return this.getToken(PeopleCodeParser.VAR_ID, 0); };
    ParamContext.prototype.varType = function () {
        return this.tryGetRuleContext(0, VarTypeContext);
    };
    Object.defineProperty(ParamContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_param; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParamContext.prototype.enterRule = function (listener) {
        if (listener.enterParam) {
            listener.enterParam(this);
        }
    };
    // @Override
    ParamContext.prototype.exitRule = function (listener) {
        if (listener.exitParam) {
            listener.exitParam(this);
        }
    };
    // @Override
    ParamContext.prototype.accept = function (visitor) {
        if (visitor.visitParam) {
            return visitor.visitParam(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParamContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParamContext = ParamContext;
var ReturnTypeContext = /** @class */ (function (_super) {
    __extends(ReturnTypeContext, _super);
    function ReturnTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReturnTypeContext.prototype.varType = function () {
        return this.getRuleContext(0, VarTypeContext);
    };
    Object.defineProperty(ReturnTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_returnType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReturnTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterReturnType) {
            listener.enterReturnType(this);
        }
    };
    // @Override
    ReturnTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitReturnType) {
            listener.exitReturnType(this);
        }
    };
    // @Override
    ReturnTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitReturnType) {
            return visitor.visitReturnType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReturnTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReturnTypeContext = ReturnTypeContext;
var IfStmtContext = /** @class */ (function (_super) {
    __extends(IfStmtContext, _super);
    function IfStmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfStmtContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    IfStmtContext.prototype.stmtList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StmtListContext);
        }
        else {
            return this.getRuleContext(i, StmtListContext);
        }
    };
    Object.defineProperty(IfStmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_ifStmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IfStmtContext.prototype.enterRule = function (listener) {
        if (listener.enterIfStmt) {
            listener.enterIfStmt(this);
        }
    };
    // @Override
    IfStmtContext.prototype.exitRule = function (listener) {
        if (listener.exitIfStmt) {
            listener.exitIfStmt(this);
        }
    };
    // @Override
    IfStmtContext.prototype.accept = function (visitor) {
        if (visitor.visitIfStmt) {
            return visitor.visitIfStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfStmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IfStmtContext = IfStmtContext;
var ForStmtContext = /** @class */ (function (_super) {
    __extends(ForStmtContext, _super);
    function ForStmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForStmtContext.prototype.VAR_ID = function () { return this.getToken(PeopleCodeParser.VAR_ID, 0); };
    ForStmtContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    ForStmtContext.prototype.stmtList = function () {
        return this.getRuleContext(0, StmtListContext);
    };
    Object.defineProperty(ForStmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_forStmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ForStmtContext.prototype.enterRule = function (listener) {
        if (listener.enterForStmt) {
            listener.enterForStmt(this);
        }
    };
    // @Override
    ForStmtContext.prototype.exitRule = function (listener) {
        if (listener.exitForStmt) {
            listener.exitForStmt(this);
        }
    };
    // @Override
    ForStmtContext.prototype.accept = function (visitor) {
        if (visitor.visitForStmt) {
            return visitor.visitForStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForStmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForStmtContext = ForStmtContext;
var WhileStmtContext = /** @class */ (function (_super) {
    __extends(WhileStmtContext, _super);
    function WhileStmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WhileStmtContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    WhileStmtContext.prototype.stmtList = function () {
        return this.getRuleContext(0, StmtListContext);
    };
    Object.defineProperty(WhileStmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_whileStmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WhileStmtContext.prototype.enterRule = function (listener) {
        if (listener.enterWhileStmt) {
            listener.enterWhileStmt(this);
        }
    };
    // @Override
    WhileStmtContext.prototype.exitRule = function (listener) {
        if (listener.exitWhileStmt) {
            listener.exitWhileStmt(this);
        }
    };
    // @Override
    WhileStmtContext.prototype.accept = function (visitor) {
        if (visitor.visitWhileStmt) {
            return visitor.visitWhileStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WhileStmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WhileStmtContext = WhileStmtContext;
var EvaluateStmtContext = /** @class */ (function (_super) {
    __extends(EvaluateStmtContext, _super);
    function EvaluateStmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EvaluateStmtContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    EvaluateStmtContext.prototype.whenBranch = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WhenBranchContext);
        }
        else {
            return this.getRuleContext(i, WhenBranchContext);
        }
    };
    EvaluateStmtContext.prototype.whenOtherBranch = function () {
        return this.tryGetRuleContext(0, WhenOtherBranchContext);
    };
    Object.defineProperty(EvaluateStmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_evaluateStmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EvaluateStmtContext.prototype.enterRule = function (listener) {
        if (listener.enterEvaluateStmt) {
            listener.enterEvaluateStmt(this);
        }
    };
    // @Override
    EvaluateStmtContext.prototype.exitRule = function (listener) {
        if (listener.exitEvaluateStmt) {
            listener.exitEvaluateStmt(this);
        }
    };
    // @Override
    EvaluateStmtContext.prototype.accept = function (visitor) {
        if (visitor.visitEvaluateStmt) {
            return visitor.visitEvaluateStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EvaluateStmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EvaluateStmtContext = EvaluateStmtContext;
var WhenBranchContext = /** @class */ (function (_super) {
    __extends(WhenBranchContext, _super);
    function WhenBranchContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WhenBranchContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    WhenBranchContext.prototype.stmtList = function () {
        return this.getRuleContext(0, StmtListContext);
    };
    Object.defineProperty(WhenBranchContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_whenBranch; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WhenBranchContext.prototype.enterRule = function (listener) {
        if (listener.enterWhenBranch) {
            listener.enterWhenBranch(this);
        }
    };
    // @Override
    WhenBranchContext.prototype.exitRule = function (listener) {
        if (listener.exitWhenBranch) {
            listener.exitWhenBranch(this);
        }
    };
    // @Override
    WhenBranchContext.prototype.accept = function (visitor) {
        if (visitor.visitWhenBranch) {
            return visitor.visitWhenBranch(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WhenBranchContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WhenBranchContext = WhenBranchContext;
var WhenOtherBranchContext = /** @class */ (function (_super) {
    __extends(WhenOtherBranchContext, _super);
    function WhenOtherBranchContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WhenOtherBranchContext.prototype.stmtList = function () {
        return this.getRuleContext(0, StmtListContext);
    };
    Object.defineProperty(WhenOtherBranchContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_whenOtherBranch; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WhenOtherBranchContext.prototype.enterRule = function (listener) {
        if (listener.enterWhenOtherBranch) {
            listener.enterWhenOtherBranch(this);
        }
    };
    // @Override
    WhenOtherBranchContext.prototype.exitRule = function (listener) {
        if (listener.exitWhenOtherBranch) {
            listener.exitWhenOtherBranch(this);
        }
    };
    // @Override
    WhenOtherBranchContext.prototype.accept = function (visitor) {
        if (visitor.visitWhenOtherBranch) {
            return visitor.visitWhenOtherBranch(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WhenOtherBranchContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WhenOtherBranchContext = WhenOtherBranchContext;
var TryCatchStmtContext = /** @class */ (function (_super) {
    __extends(TryCatchStmtContext, _super);
    function TryCatchStmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TryCatchStmtContext.prototype.stmtList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StmtListContext);
        }
        else {
            return this.getRuleContext(i, StmtListContext);
        }
    };
    TryCatchStmtContext.prototype.catchSignature = function () {
        return this.getRuleContext(0, CatchSignatureContext);
    };
    Object.defineProperty(TryCatchStmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_tryCatchStmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TryCatchStmtContext.prototype.enterRule = function (listener) {
        if (listener.enterTryCatchStmt) {
            listener.enterTryCatchStmt(this);
        }
    };
    // @Override
    TryCatchStmtContext.prototype.exitRule = function (listener) {
        if (listener.exitTryCatchStmt) {
            listener.exitTryCatchStmt(this);
        }
    };
    // @Override
    TryCatchStmtContext.prototype.accept = function (visitor) {
        if (visitor.visitTryCatchStmt) {
            return visitor.visitTryCatchStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TryCatchStmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TryCatchStmtContext = TryCatchStmtContext;
var CatchSignatureContext = /** @class */ (function (_super) {
    __extends(CatchSignatureContext, _super);
    function CatchSignatureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CatchSignatureContext.prototype.VAR_ID = function () { return this.getToken(PeopleCodeParser.VAR_ID, 0); };
    Object.defineProperty(CatchSignatureContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_catchSignature; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CatchSignatureContext.prototype.enterRule = function (listener) {
        if (listener.enterCatchSignature) {
            listener.enterCatchSignature(this);
        }
    };
    // @Override
    CatchSignatureContext.prototype.exitRule = function (listener) {
        if (listener.exitCatchSignature) {
            listener.exitCatchSignature(this);
        }
    };
    // @Override
    CatchSignatureContext.prototype.accept = function (visitor) {
        if (visitor.visitCatchSignature) {
            return visitor.visitCatchSignature(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CatchSignatureContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CatchSignatureContext = CatchSignatureContext;
var CreateInvocationContext = /** @class */ (function (_super) {
    __extends(CreateInvocationContext, _super);
    function CreateInvocationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CreateInvocationContext.prototype.appClassPath = function () {
        return this.tryGetRuleContext(0, AppClassPathContext);
    };
    CreateInvocationContext.prototype.GENERIC_ID = function () { return this.tryGetToken(PeopleCodeParser.GENERIC_ID, 0); };
    CreateInvocationContext.prototype.exprList = function () {
        return this.tryGetRuleContext(0, ExprListContext);
    };
    Object.defineProperty(CreateInvocationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_createInvocation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CreateInvocationContext.prototype.enterRule = function (listener) {
        if (listener.enterCreateInvocation) {
            listener.enterCreateInvocation(this);
        }
    };
    // @Override
    CreateInvocationContext.prototype.exitRule = function (listener) {
        if (listener.exitCreateInvocation) {
            listener.exitCreateInvocation(this);
        }
    };
    // @Override
    CreateInvocationContext.prototype.accept = function (visitor) {
        if (visitor.visitCreateInvocation) {
            return visitor.visitCreateInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CreateInvocationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CreateInvocationContext = CreateInvocationContext;
var LiteralContext = /** @class */ (function (_super) {
    __extends(LiteralContext, _super);
    function LiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LiteralContext.prototype.DecimalLiteral = function () { return this.tryGetToken(PeopleCodeParser.DecimalLiteral, 0); };
    LiteralContext.prototype.IntegerLiteral = function () { return this.tryGetToken(PeopleCodeParser.IntegerLiteral, 0); };
    LiteralContext.prototype.StringLiteral = function () { return this.tryGetToken(PeopleCodeParser.StringLiteral, 0); };
    LiteralContext.prototype.BoolLiteral = function () { return this.tryGetToken(PeopleCodeParser.BoolLiteral, 0); };
    Object.defineProperty(LiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_literal; },
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
var IdContext = /** @class */ (function (_super) {
    __extends(IdContext, _super);
    function IdContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdContext.prototype.SYS_VAR_ID = function () { return this.tryGetToken(PeopleCodeParser.SYS_VAR_ID, 0); };
    IdContext.prototype.VAR_ID = function () { return this.tryGetToken(PeopleCodeParser.VAR_ID, 0); };
    IdContext.prototype.GENERIC_ID = function () { return this.tryGetToken(PeopleCodeParser.GENERIC_ID, 0); };
    Object.defineProperty(IdContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PeopleCodeParser.RULE_id; },
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
