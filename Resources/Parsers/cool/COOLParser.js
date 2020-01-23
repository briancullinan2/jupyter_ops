"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/cool/COOL.g4 by ANTLR 4.7.3-SNAPSHOT
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
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var COOLParser = /** @class */ (function (_super) {
    __extends(COOLParser, _super);
    function COOLParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(COOLParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(COOLParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return COOLParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(COOLParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "COOL.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(COOLParser.prototype, "ruleNames", {
        // @Override
        get: function () { return COOLParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(COOLParser.prototype, "serializedATN", {
        // @Override
        get: function () { return COOLParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    COOLParser.prototype.program = function () {
        var _localctx = new ProgramContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, COOLParser.RULE_program);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 12;
                this.programBlocks();
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
    COOLParser.prototype.programBlocks = function () {
        var _localctx = new ProgramBlocksContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, COOLParser.RULE_programBlocks);
        try {
            this.state = 19;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case COOLParser.CLASS:
                    _localctx = new ClassesContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 14;
                        this.classDefine();
                        this.state = 15;
                        this.match(COOLParser.T__0);
                        this.state = 16;
                        this.programBlocks();
                    }
                    break;
                case COOLParser.EOF:
                    _localctx = new EofContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 18;
                        this.match(COOLParser.EOF);
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
    COOLParser.prototype.classDefine = function () {
        var _localctx = new ClassDefineContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, COOLParser.RULE_classDefine);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 21;
                this.match(COOLParser.CLASS);
                this.state = 22;
                this.match(COOLParser.TYPEID);
                this.state = 25;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === COOLParser.INHERITS) {
                    {
                        this.state = 23;
                        this.match(COOLParser.INHERITS);
                        this.state = 24;
                        this.match(COOLParser.TYPEID);
                    }
                }
                this.state = 27;
                this.match(COOLParser.T__1);
                this.state = 33;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === COOLParser.OBJECTID) {
                    {
                        {
                            this.state = 28;
                            this.feature();
                            this.state = 29;
                            this.match(COOLParser.T__0);
                        }
                    }
                    this.state = 35;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 36;
                this.match(COOLParser.T__2);
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
    COOLParser.prototype.feature = function () {
        var _localctx = new FeatureContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, COOLParser.RULE_feature);
        var _la;
        try {
            this.state = 64;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                case 1:
                    _localctx = new MethodContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 38;
                        this.match(COOLParser.OBJECTID);
                        this.state = 39;
                        this.match(COOLParser.T__3);
                        this.state = 48;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === COOLParser.OBJECTID) {
                            {
                                this.state = 40;
                                this.formal();
                                this.state = 45;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === COOLParser.T__4) {
                                    {
                                        {
                                            this.state = 41;
                                            this.match(COOLParser.T__4);
                                            this.state = 42;
                                            this.formal();
                                        }
                                    }
                                    this.state = 47;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 50;
                        this.match(COOLParser.T__5);
                        this.state = 51;
                        this.match(COOLParser.T__6);
                        this.state = 52;
                        this.match(COOLParser.TYPEID);
                        this.state = 53;
                        this.match(COOLParser.T__1);
                        this.state = 54;
                        this.expression(0);
                        this.state = 55;
                        this.match(COOLParser.T__2);
                    }
                    break;
                case 2:
                    _localctx = new PropertyContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 57;
                        this.match(COOLParser.OBJECTID);
                        this.state = 58;
                        this.match(COOLParser.T__6);
                        this.state = 59;
                        this.match(COOLParser.TYPEID);
                        this.state = 62;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === COOLParser.ASSIGNMENT) {
                            {
                                this.state = 60;
                                this.match(COOLParser.ASSIGNMENT);
                                this.state = 61;
                                this.expression(0);
                            }
                        }
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
    COOLParser.prototype.formal = function () {
        var _localctx = new FormalContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, COOLParser.RULE_formal);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 66;
                this.match(COOLParser.OBJECTID);
                this.state = 67;
                this.match(COOLParser.T__6);
                this.state = 68;
                this.match(COOLParser.TYPEID);
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
    COOLParser.prototype.expression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 10;
        this.enterRecursionRule(_localctx, 10, COOLParser.RULE_expression, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 167;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                    case 1:
                        {
                            _localctx = new OwnMethodCallContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 71;
                            this.match(COOLParser.OBJECTID);
                            this.state = 72;
                            this.match(COOLParser.T__3);
                            this.state = 81;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << COOLParser.T__1) | (1 << COOLParser.T__3) | (1 << COOLParser.FALSE) | (1 << COOLParser.IF) | (1 << COOLParser.ISVOID) | (1 << COOLParser.LET) | (1 << COOLParser.WHILE) | (1 << COOLParser.CASE) | (1 << COOLParser.NEW) | (1 << COOLParser.NOT) | (1 << COOLParser.TRUE) | (1 << COOLParser.STRING) | (1 << COOLParser.INT))) !== 0) || _la === COOLParser.OBJECTID || _la === COOLParser.INTEGER_NEGATIVE) {
                                {
                                    this.state = 73;
                                    this.expression(0);
                                    this.state = 78;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === COOLParser.T__4) {
                                        {
                                            {
                                                this.state = 74;
                                                this.match(COOLParser.T__4);
                                                this.state = 75;
                                                this.expression(0);
                                            }
                                        }
                                        this.state = 80;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            this.state = 83;
                            this.match(COOLParser.T__5);
                        }
                        break;
                    case 2:
                        {
                            _localctx = new IfContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 84;
                            this.match(COOLParser.IF);
                            this.state = 85;
                            this.expression(0);
                            this.state = 86;
                            this.match(COOLParser.THEN);
                            this.state = 87;
                            this.expression(0);
                            this.state = 88;
                            this.match(COOLParser.ELSE);
                            this.state = 89;
                            this.expression(0);
                            this.state = 90;
                            this.match(COOLParser.FI);
                        }
                        break;
                    case 3:
                        {
                            _localctx = new WhileContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 92;
                            this.match(COOLParser.WHILE);
                            this.state = 93;
                            this.expression(0);
                            this.state = 94;
                            this.match(COOLParser.LOOP);
                            this.state = 95;
                            this.expression(0);
                            this.state = 96;
                            this.match(COOLParser.POOL);
                        }
                        break;
                    case 4:
                        {
                            _localctx = new BlockContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 98;
                            this.match(COOLParser.T__1);
                            this.state = 102;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 99;
                                        this.expression(0);
                                        this.state = 100;
                                        this.match(COOLParser.T__0);
                                    }
                                }
                                this.state = 104;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << COOLParser.T__1) | (1 << COOLParser.T__3) | (1 << COOLParser.FALSE) | (1 << COOLParser.IF) | (1 << COOLParser.ISVOID) | (1 << COOLParser.LET) | (1 << COOLParser.WHILE) | (1 << COOLParser.CASE) | (1 << COOLParser.NEW) | (1 << COOLParser.NOT) | (1 << COOLParser.TRUE) | (1 << COOLParser.STRING) | (1 << COOLParser.INT))) !== 0) || _la === COOLParser.OBJECTID || _la === COOLParser.INTEGER_NEGATIVE);
                            this.state = 106;
                            this.match(COOLParser.T__2);
                        }
                        break;
                    case 5:
                        {
                            _localctx = new LetInContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 108;
                            this.match(COOLParser.LET);
                            this.state = 109;
                            this.match(COOLParser.OBJECTID);
                            this.state = 110;
                            this.match(COOLParser.T__6);
                            this.state = 111;
                            this.match(COOLParser.TYPEID);
                            this.state = 114;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === COOLParser.ASSIGNMENT) {
                                {
                                    this.state = 112;
                                    this.match(COOLParser.ASSIGNMENT);
                                    this.state = 113;
                                    this.expression(0);
                                }
                            }
                            this.state = 126;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === COOLParser.T__4) {
                                {
                                    {
                                        this.state = 116;
                                        this.match(COOLParser.T__4);
                                        this.state = 117;
                                        this.match(COOLParser.OBJECTID);
                                        this.state = 118;
                                        this.match(COOLParser.T__6);
                                        this.state = 119;
                                        this.match(COOLParser.TYPEID);
                                        this.state = 122;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === COOLParser.ASSIGNMENT) {
                                            {
                                                this.state = 120;
                                                this.match(COOLParser.ASSIGNMENT);
                                                this.state = 121;
                                                this.expression(0);
                                            }
                                        }
                                    }
                                }
                                this.state = 128;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 129;
                            this.match(COOLParser.IN);
                            this.state = 130;
                            this.expression(20);
                        }
                        break;
                    case 6:
                        {
                            _localctx = new CaseContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 131;
                            this.match(COOLParser.CASE);
                            this.state = 132;
                            this.expression(0);
                            this.state = 133;
                            this.match(COOLParser.OF);
                            this.state = 141;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 134;
                                        this.match(COOLParser.OBJECTID);
                                        this.state = 135;
                                        this.match(COOLParser.T__6);
                                        this.state = 136;
                                        this.match(COOLParser.TYPEID);
                                        this.state = 137;
                                        this.match(COOLParser.CASE_ARROW);
                                        this.state = 138;
                                        this.expression(0);
                                        this.state = 139;
                                        this.match(COOLParser.T__0);
                                    }
                                }
                                this.state = 143;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === COOLParser.OBJECTID);
                            this.state = 145;
                            this.match(COOLParser.ESAC);
                        }
                        break;
                    case 7:
                        {
                            _localctx = new NewContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 147;
                            this.match(COOLParser.NEW);
                            this.state = 148;
                            this.match(COOLParser.TYPEID);
                        }
                        break;
                    case 8:
                        {
                            _localctx = new NegativeContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 149;
                            this.match(COOLParser.INTEGER_NEGATIVE);
                            this.state = 150;
                            this.expression(17);
                        }
                        break;
                    case 9:
                        {
                            _localctx = new IsvoidContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 151;
                            this.match(COOLParser.ISVOID);
                            this.state = 152;
                            this.expression(16);
                        }
                        break;
                    case 10:
                        {
                            _localctx = new BoolNotContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 153;
                            this.match(COOLParser.NOT);
                            this.state = 154;
                            this.expression(8);
                        }
                        break;
                    case 11:
                        {
                            _localctx = new ParenthesesContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 155;
                            this.match(COOLParser.T__3);
                            this.state = 156;
                            this.expression(0);
                            this.state = 157;
                            this.match(COOLParser.T__5);
                        }
                        break;
                    case 12:
                        {
                            _localctx = new IdContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 159;
                            this.match(COOLParser.OBJECTID);
                        }
                        break;
                    case 13:
                        {
                            _localctx = new IntContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 160;
                            this.match(COOLParser.INT);
                        }
                        break;
                    case 14:
                        {
                            _localctx = new StringContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 161;
                            this.match(COOLParser.STRING);
                        }
                        break;
                    case 15:
                        {
                            _localctx = new TrueContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 162;
                            this.match(COOLParser.TRUE);
                        }
                        break;
                    case 16:
                        {
                            _localctx = new FalseContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 163;
                            this.match(COOLParser.FALSE);
                        }
                        break;
                    case 17:
                        {
                            _localctx = new AssignmentContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 164;
                            this.match(COOLParser.OBJECTID);
                            this.state = 165;
                            this.match(COOLParser.ASSIGNMENT);
                            this.state = 166;
                            this.expression(1);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 211;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 209;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new MultiplyContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, COOLParser.RULE_expression);
                                        this.state = 169;
                                        if (!(this.precpred(this._ctx, 15))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                                        }
                                        this.state = 170;
                                        this.match(COOLParser.MULTIPLY);
                                        this.state = 171;
                                        this.expression(16);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new DivisionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, COOLParser.RULE_expression);
                                        this.state = 172;
                                        if (!(this.precpred(this._ctx, 14))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                                        }
                                        this.state = 173;
                                        this.match(COOLParser.DIVISION);
                                        this.state = 174;
                                        this.expression(15);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new AddContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, COOLParser.RULE_expression);
                                        this.state = 175;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 176;
                                        this.match(COOLParser.ADD);
                                        this.state = 177;
                                        this.expression(14);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new MinusContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, COOLParser.RULE_expression);
                                        this.state = 178;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 179;
                                        this.match(COOLParser.MINUS);
                                        this.state = 180;
                                        this.expression(13);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new LessThanContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, COOLParser.RULE_expression);
                                        this.state = 181;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 182;
                                        this.match(COOLParser.LESS_THAN);
                                        this.state = 183;
                                        this.expression(12);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new LessEqualContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, COOLParser.RULE_expression);
                                        this.state = 184;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 185;
                                        this.match(COOLParser.LESS_EQUAL);
                                        this.state = 186;
                                        this.expression(11);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new EqualContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, COOLParser.RULE_expression);
                                        this.state = 187;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 188;
                                        this.match(COOLParser.EQUAL);
                                        this.state = 189;
                                        this.expression(10);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new MethodCallContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, COOLParser.RULE_expression);
                                        this.state = 190;
                                        if (!(this.precpred(this._ctx, 25))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
                                        }
                                        this.state = 193;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === COOLParser.T__7) {
                                            {
                                                this.state = 191;
                                                this.match(COOLParser.T__7);
                                                this.state = 192;
                                                this.match(COOLParser.TYPEID);
                                            }
                                        }
                                        this.state = 195;
                                        this.match(COOLParser.T__8);
                                        this.state = 196;
                                        this.match(COOLParser.OBJECTID);
                                        this.state = 197;
                                        this.match(COOLParser.T__3);
                                        this.state = 206;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << COOLParser.T__1) | (1 << COOLParser.T__3) | (1 << COOLParser.FALSE) | (1 << COOLParser.IF) | (1 << COOLParser.ISVOID) | (1 << COOLParser.LET) | (1 << COOLParser.WHILE) | (1 << COOLParser.CASE) | (1 << COOLParser.NEW) | (1 << COOLParser.NOT) | (1 << COOLParser.TRUE) | (1 << COOLParser.STRING) | (1 << COOLParser.INT))) !== 0) || _la === COOLParser.OBJECTID || _la === COOLParser.INTEGER_NEGATIVE) {
                                            {
                                                this.state = 198;
                                                this.expression(0);
                                                this.state = 203;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === COOLParser.T__4) {
                                                    {
                                                        {
                                                            this.state = 199;
                                                            this.match(COOLParser.T__4);
                                                            this.state = 200;
                                                            this.expression(0);
                                                        }
                                                    }
                                                    this.state = 205;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                            }
                                        }
                                        this.state = 208;
                                        this.match(COOLParser.T__5);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 213;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
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
    COOLParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 5:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    };
    COOLParser.prototype.expression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 15);
            case 1:
                return this.precpred(this._ctx, 14);
            case 2:
                return this.precpred(this._ctx, 13);
            case 3:
                return this.precpred(this._ctx, 12);
            case 4:
                return this.precpred(this._ctx, 11);
            case 5:
                return this.precpred(this._ctx, 10);
            case 6:
                return this.precpred(this._ctx, 9);
            case 7:
                return this.precpred(this._ctx, 25);
        }
        return true;
    };
    Object.defineProperty(COOLParser, "_ATN", {
        get: function () {
            if (!COOLParser.__ATN) {
                COOLParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(COOLParser._serializedATN));
            }
            return COOLParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    COOLParser.T__0 = 1;
    COOLParser.T__1 = 2;
    COOLParser.T__2 = 3;
    COOLParser.T__3 = 4;
    COOLParser.T__4 = 5;
    COOLParser.T__5 = 6;
    COOLParser.T__6 = 7;
    COOLParser.T__7 = 8;
    COOLParser.T__8 = 9;
    COOLParser.CLASS = 10;
    COOLParser.ELSE = 11;
    COOLParser.FALSE = 12;
    COOLParser.FI = 13;
    COOLParser.IF = 14;
    COOLParser.IN = 15;
    COOLParser.INHERITS = 16;
    COOLParser.ISVOID = 17;
    COOLParser.LET = 18;
    COOLParser.LOOP = 19;
    COOLParser.POOL = 20;
    COOLParser.THEN = 21;
    COOLParser.WHILE = 22;
    COOLParser.CASE = 23;
    COOLParser.ESAC = 24;
    COOLParser.NEW = 25;
    COOLParser.OF = 26;
    COOLParser.NOT = 27;
    COOLParser.TRUE = 28;
    COOLParser.STRING = 29;
    COOLParser.INT = 30;
    COOLParser.TYPEID = 31;
    COOLParser.OBJECTID = 32;
    COOLParser.ASSIGNMENT = 33;
    COOLParser.CASE_ARROW = 34;
    COOLParser.ADD = 35;
    COOLParser.MINUS = 36;
    COOLParser.MULTIPLY = 37;
    COOLParser.DIVISION = 38;
    COOLParser.LESS_THAN = 39;
    COOLParser.LESS_EQUAL = 40;
    COOLParser.EQUAL = 41;
    COOLParser.INTEGER_NEGATIVE = 42;
    COOLParser.OPEN_COMMENT = 43;
    COOLParser.CLOSE_COMMENT = 44;
    COOLParser.COMMENT = 45;
    COOLParser.ONE_LINE_COMMENT = 46;
    COOLParser.WHITESPACE = 47;
    COOLParser.RULE_program = 0;
    COOLParser.RULE_programBlocks = 1;
    COOLParser.RULE_classDefine = 2;
    COOLParser.RULE_feature = 3;
    COOLParser.RULE_formal = 4;
    COOLParser.RULE_expression = 5;
    // tslint:disable:no-trailing-whitespace
    COOLParser.ruleNames = [
        "program", "programBlocks", "classDefine", "feature", "formal", "expression",
    ];
    COOLParser._LITERAL_NAMES = [
        undefined, "';'", "'{'", "'}'", "'('", "','", "')'", "':'", "'@'", "'.'",
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "'<-'", "'=>'", "'+'", "'-'", "'*'", "'/'", "'<'",
        "'<='", "'='", "'~'", "'(*'", "'*)'",
    ];
    COOLParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "CLASS", "ELSE", "FALSE", "FI", "IF",
        "IN", "INHERITS", "ISVOID", "LET", "LOOP", "POOL", "THEN", "WHILE", "CASE",
        "ESAC", "NEW", "OF", "NOT", "TRUE", "STRING", "INT", "TYPEID", "OBJECTID",
        "ASSIGNMENT", "CASE_ARROW", "ADD", "MINUS", "MULTIPLY", "DIVISION", "LESS_THAN",
        "LESS_EQUAL", "EQUAL", "INTEGER_NEGATIVE", "OPEN_COMMENT", "CLOSE_COMMENT",
        "COMMENT", "ONE_LINE_COMMENT", "WHITESPACE",
    ];
    COOLParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(COOLParser._LITERAL_NAMES, COOLParser._SYMBOLIC_NAMES, []);
    COOLParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x031\xD9\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
        "\x16\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\x1C\n\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x07\x04\"\n\x04\f\x04\x0E\x04%\v\x04\x03\x04\x03" +
        "\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05.\n\x05\f\x05\x0E" +
        "\x051\v\x05\x05\x053\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05A\n\x05\x05" +
        "\x05C\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03" +
        "\x07\x03\x07\x03\x07\x07\x07O\n\x07\f\x07\x0E\x07R\v\x07\x05\x07T\n\x07" +
        "\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
        "\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
        "\x03\x07\x06\x07i\n\x07\r\x07\x0E\x07j\x03\x07\x03\x07\x03\x07\x03\x07" +
        "\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07u\n\x07\x03\x07\x03\x07\x03\x07" +
        "\x03\x07\x03\x07\x03\x07\x05\x07}\n\x07\x07\x07\x7F\n\x07\f\x07\x0E\x07" +
        "\x82\v\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
        "\x07\x03\x07\x03\x07\x03\x07\x03\x07\x06\x07\x90\n\x07\r\x07\x0E\x07\x91" +
        "\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
        "\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
        "\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xAA\n\x07\x03\x07\x03\x07\x03" +
        "\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
        "\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
        "\x07\x03\x07\x03\x07\x03\x07\x05\x07\xC4\n\x07\x03\x07\x03\x07\x03\x07" +
        "\x03\x07\x03\x07\x03\x07\x07\x07\xCC\n\x07\f\x07\x0E\x07\xCF\v\x07\x05" +
        "\x07\xD1\n\x07\x03\x07\x07\x07\xD4\n\x07\f\x07\x0E\x07\xD7\v\x07\x03\x07" +
        "\x02\x02\x03\f\b\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x02\x02\x02" +
        "\xFB\x02\x0E\x03\x02\x02\x02\x04\x15\x03\x02\x02\x02\x06\x17\x03\x02\x02" +
        "\x02\bB\x03\x02\x02\x02\nD\x03\x02\x02\x02\f\xA9\x03\x02\x02\x02\x0E\x0F" +
        "\x05\x04\x03\x02\x0F\x03\x03\x02\x02\x02\x10\x11\x05\x06\x04\x02\x11\x12" +
        "\x07\x03\x02\x02\x12\x13\x05\x04\x03\x02\x13\x16\x03\x02\x02\x02\x14\x16" +
        "\x07\x02\x02\x03\x15\x10\x03\x02\x02\x02\x15\x14\x03\x02\x02\x02\x16\x05" +
        "\x03\x02\x02\x02\x17\x18\x07\f\x02\x02\x18\x1B\x07!\x02\x02\x19\x1A\x07" +
        "\x12\x02\x02\x1A\x1C\x07!\x02\x02\x1B\x19\x03\x02\x02\x02\x1B\x1C\x03" +
        "\x02\x02\x02\x1C\x1D\x03\x02\x02\x02\x1D#\x07\x04\x02\x02\x1E\x1F\x05" +
        "\b\x05\x02\x1F \x07\x03\x02\x02 \"\x03\x02\x02\x02!\x1E\x03\x02\x02\x02" +
        "\"%\x03\x02\x02\x02#!\x03\x02\x02\x02#$\x03\x02\x02\x02$&\x03\x02\x02" +
        "\x02%#\x03\x02\x02\x02&\'\x07\x05\x02\x02\'\x07\x03\x02\x02\x02()\x07" +
        "\"\x02\x02)2\x07\x06\x02\x02*/\x05\n\x06\x02+,\x07\x07\x02\x02,.\x05\n" +
        "\x06\x02-+\x03\x02\x02\x02.1\x03\x02\x02\x02/-\x03\x02\x02\x02/0\x03\x02" +
        "\x02\x0203\x03\x02\x02\x021/\x03\x02\x02\x022*\x03\x02\x02\x0223\x03\x02" +
        "\x02\x0234\x03\x02\x02\x0245\x07\b\x02\x0256\x07\t\x02\x0267\x07!\x02" +
        "\x0278\x07\x04\x02\x0289\x05\f\x07\x029:\x07\x05\x02\x02:C\x03\x02\x02" +
        "\x02;<\x07\"\x02\x02<=\x07\t\x02\x02=@\x07!\x02\x02>?\x07#\x02\x02?A\x05" +
        "\f\x07\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02AC\x03\x02\x02\x02B(\x03" +
        "\x02\x02\x02B;\x03\x02\x02\x02C\t\x03\x02\x02\x02DE\x07\"\x02\x02EF\x07" +
        "\t\x02\x02FG\x07!\x02\x02G\v\x03\x02\x02\x02HI\b\x07\x01\x02IJ\x07\"\x02" +
        "\x02JS\x07\x06\x02\x02KP\x05\f\x07\x02LM\x07\x07\x02\x02MO\x05\f\x07\x02" +
        "NL\x03\x02\x02\x02OR\x03\x02\x02\x02PN\x03\x02\x02\x02PQ\x03\x02\x02\x02" +
        "QT\x03\x02\x02\x02RP\x03\x02\x02\x02SK\x03\x02\x02\x02ST\x03\x02\x02\x02" +
        "TU\x03\x02\x02\x02U\xAA\x07\b\x02\x02VW\x07\x10\x02\x02WX\x05\f\x07\x02" +
        "XY\x07\x17\x02\x02YZ\x05\f\x07\x02Z[\x07\r\x02\x02[\\\x05\f\x07\x02\\" +
        "]\x07\x0F\x02\x02]\xAA\x03\x02\x02\x02^_\x07\x18\x02\x02_`\x05\f\x07\x02" +
        "`a\x07\x15\x02\x02ab\x05\f\x07\x02bc\x07\x16\x02\x02c\xAA\x03\x02\x02" +
        "\x02dh\x07\x04\x02\x02ef\x05\f\x07\x02fg\x07\x03\x02\x02gi\x03\x02\x02" +
        "\x02he\x03\x02\x02\x02ij\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02" +
        "\x02kl\x03\x02\x02\x02lm\x07\x05\x02\x02m\xAA\x03\x02\x02\x02no\x07\x14" +
        "\x02\x02op\x07\"\x02\x02pq\x07\t\x02\x02qt\x07!\x02\x02rs\x07#\x02\x02" +
        "su\x05\f\x07\x02tr\x03\x02\x02\x02tu\x03\x02\x02\x02u\x80\x03\x02\x02" +
        "\x02vw\x07\x07\x02\x02wx\x07\"\x02\x02xy\x07\t\x02\x02y|\x07!\x02\x02" +
        "z{\x07#\x02\x02{}\x05\f\x07\x02|z\x03\x02\x02\x02|}\x03\x02\x02\x02}\x7F" +
        "\x03\x02\x02\x02~v\x03\x02\x02\x02\x7F\x82\x03\x02\x02\x02\x80~\x03\x02" +
        "\x02\x02\x80\x81\x03\x02\x02\x02\x81\x83\x03\x02\x02\x02\x82\x80\x03\x02" +
        "\x02\x02\x83\x84\x07\x11\x02\x02\x84\xAA\x05\f\x07\x16\x85\x86\x07\x19" +
        "\x02\x02\x86\x87\x05\f\x07\x02\x87\x8F\x07\x1C\x02\x02\x88\x89\x07\"\x02" +
        "\x02\x89\x8A\x07\t\x02\x02\x8A\x8B\x07!\x02\x02\x8B\x8C\x07$\x02\x02\x8C" +
        "\x8D\x05\f\x07\x02\x8D\x8E\x07\x03\x02\x02\x8E\x90\x03\x02\x02\x02\x8F" +
        "\x88\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x91" +
        "\x92\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x94\x07\x1A\x02\x02\x94" +
        "\xAA\x03\x02\x02\x02\x95\x96\x07\x1B\x02\x02\x96\xAA\x07!\x02\x02\x97" +
        "\x98\x07,\x02\x02\x98\xAA\x05\f\x07\x13\x99\x9A\x07\x13\x02\x02\x9A\xAA" +
        "\x05\f\x07\x12\x9B\x9C\x07\x1D\x02\x02\x9C\xAA\x05\f\x07\n\x9D\x9E\x07" +
        "\x06\x02\x02\x9E\x9F\x05\f\x07\x02\x9F\xA0\x07\b\x02\x02\xA0\xAA\x03\x02" +
        "\x02\x02\xA1\xAA\x07\"\x02\x02\xA2\xAA\x07 \x02\x02\xA3\xAA\x07\x1F\x02" +
        "\x02\xA4\xAA\x07\x1E\x02\x02\xA5\xAA\x07\x0E\x02\x02\xA6\xA7\x07\"\x02" +
        "\x02\xA7\xA8\x07#\x02\x02\xA8\xAA\x05\f\x07\x03\xA9H\x03\x02\x02\x02\xA9" +
        "V\x03\x02\x02\x02\xA9^\x03\x02\x02\x02\xA9d\x03\x02\x02\x02\xA9n\x03\x02" +
        "\x02\x02\xA9\x85\x03\x02\x02\x02\xA9\x95\x03\x02\x02\x02\xA9\x97\x03\x02" +
        "\x02\x02\xA9\x99\x03\x02\x02\x02\xA9\x9B\x03\x02\x02\x02\xA9\x9D\x03\x02" +
        "\x02\x02\xA9\xA1\x03\x02\x02\x02\xA9\xA2\x03\x02\x02\x02\xA9\xA3\x03\x02" +
        "\x02\x02\xA9\xA4\x03\x02\x02\x02\xA9\xA5\x03\x02\x02\x02\xA9\xA6\x03\x02" +
        "\x02\x02\xAA\xD5\x03\x02\x02\x02\xAB\xAC\f\x11\x02\x02\xAC\xAD\x07\'\x02" +
        "\x02\xAD\xD4\x05\f\x07\x12\xAE\xAF\f\x10\x02\x02\xAF\xB0\x07(\x02\x02" +
        "\xB0\xD4\x05\f\x07\x11\xB1\xB2\f\x0F\x02\x02\xB2\xB3\x07%\x02\x02\xB3" +
        "\xD4\x05\f\x07\x10\xB4\xB5\f\x0E\x02\x02\xB5\xB6\x07&\x02\x02\xB6\xD4" +
        "\x05\f\x07\x0F\xB7\xB8\f\r\x02\x02\xB8\xB9\x07)\x02\x02\xB9\xD4\x05\f" +
        "\x07\x0E\xBA\xBB\f\f\x02\x02\xBB\xBC\x07*\x02\x02\xBC\xD4\x05\f\x07\r" +
        "\xBD\xBE\f\v\x02\x02\xBE\xBF\x07+\x02\x02\xBF\xD4\x05\f\x07\f\xC0\xC3" +
        "\f\x1B\x02\x02\xC1\xC2\x07\n\x02\x02\xC2\xC4\x07!\x02\x02\xC3\xC1\x03" +
        "\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC6\x07" +
        "\v\x02\x02\xC6\xC7\x07\"\x02\x02\xC7\xD0\x07\x06\x02\x02\xC8\xCD\x05\f" +
        "\x07\x02\xC9\xCA\x07\x07\x02\x02\xCA\xCC\x05\f\x07\x02\xCB\xC9\x03\x02" +
        "\x02\x02\xCC\xCF\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02" +
        "\x02\x02\xCE\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xD0\xC8\x03\x02" +
        "\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD4\x07\b" +
        "\x02\x02\xD3\xAB\x03\x02\x02\x02\xD3\xAE\x03\x02\x02\x02\xD3\xB1\x03\x02" +
        "\x02\x02\xD3\xB4\x03\x02\x02\x02\xD3\xB7\x03\x02\x02\x02\xD3\xBA\x03\x02" +
        "\x02\x02\xD3\xBD\x03\x02\x02\x02\xD3\xC0\x03\x02\x02\x02\xD4\xD7\x03\x02" +
        "\x02\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\r\x03\x02" +
        "\x02\x02\xD7\xD5\x03\x02\x02\x02\x16\x15\x1B#/2@BPSjt|\x80\x91\xA9\xC3" +
        "\xCD\xD0\xD3\xD5";
    return COOLParser;
}(Parser_1.Parser));
exports.COOLParser = COOLParser;
var ProgramContext = /** @class */ (function (_super) {
    __extends(ProgramContext, _super);
    function ProgramContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgramContext.prototype.programBlocks = function () {
        return this.getRuleContext(0, ProgramBlocksContext);
    };
    Object.defineProperty(ProgramContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return COOLParser.RULE_program; },
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
var ProgramBlocksContext = /** @class */ (function (_super) {
    __extends(ProgramBlocksContext, _super);
    function ProgramBlocksContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ProgramBlocksContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return COOLParser.RULE_programBlocks; },
        enumerable: true,
        configurable: true
    });
    ProgramBlocksContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return ProgramBlocksContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProgramBlocksContext = ProgramBlocksContext;
var ClassesContext = /** @class */ (function (_super) {
    __extends(ClassesContext, _super);
    function ClassesContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ClassesContext.prototype.classDefine = function () {
        return this.getRuleContext(0, ClassDefineContext);
    };
    ClassesContext.prototype.programBlocks = function () {
        return this.getRuleContext(0, ProgramBlocksContext);
    };
    // @Override
    ClassesContext.prototype.enterRule = function (listener) {
        if (listener.enterClasses) {
            listener.enterClasses(this);
        }
    };
    // @Override
    ClassesContext.prototype.exitRule = function (listener) {
        if (listener.exitClasses) {
            listener.exitClasses(this);
        }
    };
    // @Override
    ClassesContext.prototype.accept = function (visitor) {
        if (visitor.visitClasses) {
            return visitor.visitClasses(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassesContext;
}(ProgramBlocksContext));
exports.ClassesContext = ClassesContext;
var EofContext = /** @class */ (function (_super) {
    __extends(EofContext, _super);
    function EofContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    EofContext.prototype.EOF = function () { return this.getToken(COOLParser.EOF, 0); };
    // @Override
    EofContext.prototype.enterRule = function (listener) {
        if (listener.enterEof) {
            listener.enterEof(this);
        }
    };
    // @Override
    EofContext.prototype.exitRule = function (listener) {
        if (listener.exitEof) {
            listener.exitEof(this);
        }
    };
    // @Override
    EofContext.prototype.accept = function (visitor) {
        if (visitor.visitEof) {
            return visitor.visitEof(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EofContext;
}(ProgramBlocksContext));
exports.EofContext = EofContext;
var ClassDefineContext = /** @class */ (function (_super) {
    __extends(ClassDefineContext, _super);
    function ClassDefineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassDefineContext.prototype.CLASS = function () { return this.getToken(COOLParser.CLASS, 0); };
    ClassDefineContext.prototype.TYPEID = function (i) {
        if (i === undefined) {
            return this.getTokens(COOLParser.TYPEID);
        }
        else {
            return this.getToken(COOLParser.TYPEID, i);
        }
    };
    ClassDefineContext.prototype.INHERITS = function () { return this.tryGetToken(COOLParser.INHERITS, 0); };
    ClassDefineContext.prototype.feature = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FeatureContext);
        }
        else {
            return this.getRuleContext(i, FeatureContext);
        }
    };
    Object.defineProperty(ClassDefineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return COOLParser.RULE_classDefine; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassDefineContext.prototype.enterRule = function (listener) {
        if (listener.enterClassDefine) {
            listener.enterClassDefine(this);
        }
    };
    // @Override
    ClassDefineContext.prototype.exitRule = function (listener) {
        if (listener.exitClassDefine) {
            listener.exitClassDefine(this);
        }
    };
    // @Override
    ClassDefineContext.prototype.accept = function (visitor) {
        if (visitor.visitClassDefine) {
            return visitor.visitClassDefine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassDefineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassDefineContext = ClassDefineContext;
var FeatureContext = /** @class */ (function (_super) {
    __extends(FeatureContext, _super);
    function FeatureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(FeatureContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return COOLParser.RULE_feature; },
        enumerable: true,
        configurable: true
    });
    FeatureContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return FeatureContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FeatureContext = FeatureContext;
var MethodContext = /** @class */ (function (_super) {
    __extends(MethodContext, _super);
    function MethodContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    MethodContext.prototype.OBJECTID = function () { return this.getToken(COOLParser.OBJECTID, 0); };
    MethodContext.prototype.TYPEID = function () { return this.getToken(COOLParser.TYPEID, 0); };
    MethodContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    MethodContext.prototype.formal = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FormalContext);
        }
        else {
            return this.getRuleContext(i, FormalContext);
        }
    };
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
}(FeatureContext));
exports.MethodContext = MethodContext;
var PropertyContext = /** @class */ (function (_super) {
    __extends(PropertyContext, _super);
    function PropertyContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PropertyContext.prototype.OBJECTID = function () { return this.getToken(COOLParser.OBJECTID, 0); };
    PropertyContext.prototype.TYPEID = function () { return this.getToken(COOLParser.TYPEID, 0); };
    PropertyContext.prototype.ASSIGNMENT = function () { return this.tryGetToken(COOLParser.ASSIGNMENT, 0); };
    PropertyContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
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
}(FeatureContext));
exports.PropertyContext = PropertyContext;
var FormalContext = /** @class */ (function (_super) {
    __extends(FormalContext, _super);
    function FormalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormalContext.prototype.OBJECTID = function () { return this.getToken(COOLParser.OBJECTID, 0); };
    FormalContext.prototype.TYPEID = function () { return this.getToken(COOLParser.TYPEID, 0); };
    Object.defineProperty(FormalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return COOLParser.RULE_formal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormalContext.prototype.enterRule = function (listener) {
        if (listener.enterFormal) {
            listener.enterFormal(this);
        }
    };
    // @Override
    FormalContext.prototype.exitRule = function (listener) {
        if (listener.exitFormal) {
            listener.exitFormal(this);
        }
    };
    // @Override
    FormalContext.prototype.accept = function (visitor) {
        if (visitor.visitFormal) {
            return visitor.visitFormal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormalContext = FormalContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return COOLParser.RULE_expression; },
        enumerable: true,
        configurable: true
    });
    ExpressionContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return ExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionContext = ExpressionContext;
var MethodCallContext = /** @class */ (function (_super) {
    __extends(MethodCallContext, _super);
    function MethodCallContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    MethodCallContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    MethodCallContext.prototype.OBJECTID = function () { return this.getToken(COOLParser.OBJECTID, 0); };
    MethodCallContext.prototype.TYPEID = function () { return this.tryGetToken(COOLParser.TYPEID, 0); };
    // @Override
    MethodCallContext.prototype.enterRule = function (listener) {
        if (listener.enterMethodCall) {
            listener.enterMethodCall(this);
        }
    };
    // @Override
    MethodCallContext.prototype.exitRule = function (listener) {
        if (listener.exitMethodCall) {
            listener.exitMethodCall(this);
        }
    };
    // @Override
    MethodCallContext.prototype.accept = function (visitor) {
        if (visitor.visitMethodCall) {
            return visitor.visitMethodCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MethodCallContext;
}(ExpressionContext));
exports.MethodCallContext = MethodCallContext;
var OwnMethodCallContext = /** @class */ (function (_super) {
    __extends(OwnMethodCallContext, _super);
    function OwnMethodCallContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    OwnMethodCallContext.prototype.OBJECTID = function () { return this.getToken(COOLParser.OBJECTID, 0); };
    OwnMethodCallContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    // @Override
    OwnMethodCallContext.prototype.enterRule = function (listener) {
        if (listener.enterOwnMethodCall) {
            listener.enterOwnMethodCall(this);
        }
    };
    // @Override
    OwnMethodCallContext.prototype.exitRule = function (listener) {
        if (listener.exitOwnMethodCall) {
            listener.exitOwnMethodCall(this);
        }
    };
    // @Override
    OwnMethodCallContext.prototype.accept = function (visitor) {
        if (visitor.visitOwnMethodCall) {
            return visitor.visitOwnMethodCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OwnMethodCallContext;
}(ExpressionContext));
exports.OwnMethodCallContext = OwnMethodCallContext;
var IfContext = /** @class */ (function (_super) {
    __extends(IfContext, _super);
    function IfContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    IfContext.prototype.IF = function () { return this.getToken(COOLParser.IF, 0); };
    IfContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    IfContext.prototype.THEN = function () { return this.getToken(COOLParser.THEN, 0); };
    IfContext.prototype.ELSE = function () { return this.getToken(COOLParser.ELSE, 0); };
    IfContext.prototype.FI = function () { return this.getToken(COOLParser.FI, 0); };
    // @Override
    IfContext.prototype.enterRule = function (listener) {
        if (listener.enterIf) {
            listener.enterIf(this);
        }
    };
    // @Override
    IfContext.prototype.exitRule = function (listener) {
        if (listener.exitIf) {
            listener.exitIf(this);
        }
    };
    // @Override
    IfContext.prototype.accept = function (visitor) {
        if (visitor.visitIf) {
            return visitor.visitIf(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfContext;
}(ExpressionContext));
exports.IfContext = IfContext;
var WhileContext = /** @class */ (function (_super) {
    __extends(WhileContext, _super);
    function WhileContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    WhileContext.prototype.WHILE = function () { return this.getToken(COOLParser.WHILE, 0); };
    WhileContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    WhileContext.prototype.LOOP = function () { return this.getToken(COOLParser.LOOP, 0); };
    WhileContext.prototype.POOL = function () { return this.getToken(COOLParser.POOL, 0); };
    // @Override
    WhileContext.prototype.enterRule = function (listener) {
        if (listener.enterWhile) {
            listener.enterWhile(this);
        }
    };
    // @Override
    WhileContext.prototype.exitRule = function (listener) {
        if (listener.exitWhile) {
            listener.exitWhile(this);
        }
    };
    // @Override
    WhileContext.prototype.accept = function (visitor) {
        if (visitor.visitWhile) {
            return visitor.visitWhile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WhileContext;
}(ExpressionContext));
exports.WhileContext = WhileContext;
var BlockContext = /** @class */ (function (_super) {
    __extends(BlockContext, _super);
    function BlockContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BlockContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    // @Override
    BlockContext.prototype.enterRule = function (listener) {
        if (listener.enterBlock) {
            listener.enterBlock(this);
        }
    };
    // @Override
    BlockContext.prototype.exitRule = function (listener) {
        if (listener.exitBlock) {
            listener.exitBlock(this);
        }
    };
    // @Override
    BlockContext.prototype.accept = function (visitor) {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlockContext;
}(ExpressionContext));
exports.BlockContext = BlockContext;
var LetInContext = /** @class */ (function (_super) {
    __extends(LetInContext, _super);
    function LetInContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    LetInContext.prototype.LET = function () { return this.getToken(COOLParser.LET, 0); };
    LetInContext.prototype.OBJECTID = function (i) {
        if (i === undefined) {
            return this.getTokens(COOLParser.OBJECTID);
        }
        else {
            return this.getToken(COOLParser.OBJECTID, i);
        }
    };
    LetInContext.prototype.TYPEID = function (i) {
        if (i === undefined) {
            return this.getTokens(COOLParser.TYPEID);
        }
        else {
            return this.getToken(COOLParser.TYPEID, i);
        }
    };
    LetInContext.prototype.IN = function () { return this.getToken(COOLParser.IN, 0); };
    LetInContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    LetInContext.prototype.ASSIGNMENT = function (i) {
        if (i === undefined) {
            return this.getTokens(COOLParser.ASSIGNMENT);
        }
        else {
            return this.getToken(COOLParser.ASSIGNMENT, i);
        }
    };
    // @Override
    LetInContext.prototype.enterRule = function (listener) {
        if (listener.enterLetIn) {
            listener.enterLetIn(this);
        }
    };
    // @Override
    LetInContext.prototype.exitRule = function (listener) {
        if (listener.exitLetIn) {
            listener.exitLetIn(this);
        }
    };
    // @Override
    LetInContext.prototype.accept = function (visitor) {
        if (visitor.visitLetIn) {
            return visitor.visitLetIn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LetInContext;
}(ExpressionContext));
exports.LetInContext = LetInContext;
var CaseContext = /** @class */ (function (_super) {
    __extends(CaseContext, _super);
    function CaseContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    CaseContext.prototype.CASE = function () { return this.getToken(COOLParser.CASE, 0); };
    CaseContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    CaseContext.prototype.OF = function () { return this.getToken(COOLParser.OF, 0); };
    CaseContext.prototype.ESAC = function () { return this.getToken(COOLParser.ESAC, 0); };
    CaseContext.prototype.OBJECTID = function (i) {
        if (i === undefined) {
            return this.getTokens(COOLParser.OBJECTID);
        }
        else {
            return this.getToken(COOLParser.OBJECTID, i);
        }
    };
    CaseContext.prototype.TYPEID = function (i) {
        if (i === undefined) {
            return this.getTokens(COOLParser.TYPEID);
        }
        else {
            return this.getToken(COOLParser.TYPEID, i);
        }
    };
    CaseContext.prototype.CASE_ARROW = function (i) {
        if (i === undefined) {
            return this.getTokens(COOLParser.CASE_ARROW);
        }
        else {
            return this.getToken(COOLParser.CASE_ARROW, i);
        }
    };
    // @Override
    CaseContext.prototype.enterRule = function (listener) {
        if (listener.enterCase) {
            listener.enterCase(this);
        }
    };
    // @Override
    CaseContext.prototype.exitRule = function (listener) {
        if (listener.exitCase) {
            listener.exitCase(this);
        }
    };
    // @Override
    CaseContext.prototype.accept = function (visitor) {
        if (visitor.visitCase) {
            return visitor.visitCase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CaseContext;
}(ExpressionContext));
exports.CaseContext = CaseContext;
var NewContext = /** @class */ (function (_super) {
    __extends(NewContext, _super);
    function NewContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    NewContext.prototype.NEW = function () { return this.getToken(COOLParser.NEW, 0); };
    NewContext.prototype.TYPEID = function () { return this.getToken(COOLParser.TYPEID, 0); };
    // @Override
    NewContext.prototype.enterRule = function (listener) {
        if (listener.enterNew) {
            listener.enterNew(this);
        }
    };
    // @Override
    NewContext.prototype.exitRule = function (listener) {
        if (listener.exitNew) {
            listener.exitNew(this);
        }
    };
    // @Override
    NewContext.prototype.accept = function (visitor) {
        if (visitor.visitNew) {
            return visitor.visitNew(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NewContext;
}(ExpressionContext));
exports.NewContext = NewContext;
var NegativeContext = /** @class */ (function (_super) {
    __extends(NegativeContext, _super);
    function NegativeContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    NegativeContext.prototype.INTEGER_NEGATIVE = function () { return this.getToken(COOLParser.INTEGER_NEGATIVE, 0); };
    NegativeContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    // @Override
    NegativeContext.prototype.enterRule = function (listener) {
        if (listener.enterNegative) {
            listener.enterNegative(this);
        }
    };
    // @Override
    NegativeContext.prototype.exitRule = function (listener) {
        if (listener.exitNegative) {
            listener.exitNegative(this);
        }
    };
    // @Override
    NegativeContext.prototype.accept = function (visitor) {
        if (visitor.visitNegative) {
            return visitor.visitNegative(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NegativeContext;
}(ExpressionContext));
exports.NegativeContext = NegativeContext;
var IsvoidContext = /** @class */ (function (_super) {
    __extends(IsvoidContext, _super);
    function IsvoidContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    IsvoidContext.prototype.ISVOID = function () { return this.getToken(COOLParser.ISVOID, 0); };
    IsvoidContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    // @Override
    IsvoidContext.prototype.enterRule = function (listener) {
        if (listener.enterIsvoid) {
            listener.enterIsvoid(this);
        }
    };
    // @Override
    IsvoidContext.prototype.exitRule = function (listener) {
        if (listener.exitIsvoid) {
            listener.exitIsvoid(this);
        }
    };
    // @Override
    IsvoidContext.prototype.accept = function (visitor) {
        if (visitor.visitIsvoid) {
            return visitor.visitIsvoid(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IsvoidContext;
}(ExpressionContext));
exports.IsvoidContext = IsvoidContext;
var MultiplyContext = /** @class */ (function (_super) {
    __extends(MultiplyContext, _super);
    function MultiplyContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    MultiplyContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    MultiplyContext.prototype.MULTIPLY = function () { return this.getToken(COOLParser.MULTIPLY, 0); };
    // @Override
    MultiplyContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiply) {
            listener.enterMultiply(this);
        }
    };
    // @Override
    MultiplyContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiply) {
            listener.exitMultiply(this);
        }
    };
    // @Override
    MultiplyContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiply) {
            return visitor.visitMultiply(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiplyContext;
}(ExpressionContext));
exports.MultiplyContext = MultiplyContext;
var DivisionContext = /** @class */ (function (_super) {
    __extends(DivisionContext, _super);
    function DivisionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    DivisionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    DivisionContext.prototype.DIVISION = function () { return this.getToken(COOLParser.DIVISION, 0); };
    // @Override
    DivisionContext.prototype.enterRule = function (listener) {
        if (listener.enterDivision) {
            listener.enterDivision(this);
        }
    };
    // @Override
    DivisionContext.prototype.exitRule = function (listener) {
        if (listener.exitDivision) {
            listener.exitDivision(this);
        }
    };
    // @Override
    DivisionContext.prototype.accept = function (visitor) {
        if (visitor.visitDivision) {
            return visitor.visitDivision(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DivisionContext;
}(ExpressionContext));
exports.DivisionContext = DivisionContext;
var AddContext = /** @class */ (function (_super) {
    __extends(AddContext, _super);
    function AddContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    AddContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    AddContext.prototype.ADD = function () { return this.getToken(COOLParser.ADD, 0); };
    // @Override
    AddContext.prototype.enterRule = function (listener) {
        if (listener.enterAdd) {
            listener.enterAdd(this);
        }
    };
    // @Override
    AddContext.prototype.exitRule = function (listener) {
        if (listener.exitAdd) {
            listener.exitAdd(this);
        }
    };
    // @Override
    AddContext.prototype.accept = function (visitor) {
        if (visitor.visitAdd) {
            return visitor.visitAdd(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AddContext;
}(ExpressionContext));
exports.AddContext = AddContext;
var MinusContext = /** @class */ (function (_super) {
    __extends(MinusContext, _super);
    function MinusContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    MinusContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    MinusContext.prototype.MINUS = function () { return this.getToken(COOLParser.MINUS, 0); };
    // @Override
    MinusContext.prototype.enterRule = function (listener) {
        if (listener.enterMinus) {
            listener.enterMinus(this);
        }
    };
    // @Override
    MinusContext.prototype.exitRule = function (listener) {
        if (listener.exitMinus) {
            listener.exitMinus(this);
        }
    };
    // @Override
    MinusContext.prototype.accept = function (visitor) {
        if (visitor.visitMinus) {
            return visitor.visitMinus(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MinusContext;
}(ExpressionContext));
exports.MinusContext = MinusContext;
var LessThanContext = /** @class */ (function (_super) {
    __extends(LessThanContext, _super);
    function LessThanContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    LessThanContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    LessThanContext.prototype.LESS_THAN = function () { return this.getToken(COOLParser.LESS_THAN, 0); };
    // @Override
    LessThanContext.prototype.enterRule = function (listener) {
        if (listener.enterLessThan) {
            listener.enterLessThan(this);
        }
    };
    // @Override
    LessThanContext.prototype.exitRule = function (listener) {
        if (listener.exitLessThan) {
            listener.exitLessThan(this);
        }
    };
    // @Override
    LessThanContext.prototype.accept = function (visitor) {
        if (visitor.visitLessThan) {
            return visitor.visitLessThan(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LessThanContext;
}(ExpressionContext));
exports.LessThanContext = LessThanContext;
var LessEqualContext = /** @class */ (function (_super) {
    __extends(LessEqualContext, _super);
    function LessEqualContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    LessEqualContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    LessEqualContext.prototype.LESS_EQUAL = function () { return this.getToken(COOLParser.LESS_EQUAL, 0); };
    // @Override
    LessEqualContext.prototype.enterRule = function (listener) {
        if (listener.enterLessEqual) {
            listener.enterLessEqual(this);
        }
    };
    // @Override
    LessEqualContext.prototype.exitRule = function (listener) {
        if (listener.exitLessEqual) {
            listener.exitLessEqual(this);
        }
    };
    // @Override
    LessEqualContext.prototype.accept = function (visitor) {
        if (visitor.visitLessEqual) {
            return visitor.visitLessEqual(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LessEqualContext;
}(ExpressionContext));
exports.LessEqualContext = LessEqualContext;
var EqualContext = /** @class */ (function (_super) {
    __extends(EqualContext, _super);
    function EqualContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    EqualContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    EqualContext.prototype.EQUAL = function () { return this.getToken(COOLParser.EQUAL, 0); };
    // @Override
    EqualContext.prototype.enterRule = function (listener) {
        if (listener.enterEqual) {
            listener.enterEqual(this);
        }
    };
    // @Override
    EqualContext.prototype.exitRule = function (listener) {
        if (listener.exitEqual) {
            listener.exitEqual(this);
        }
    };
    // @Override
    EqualContext.prototype.accept = function (visitor) {
        if (visitor.visitEqual) {
            return visitor.visitEqual(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EqualContext;
}(ExpressionContext));
exports.EqualContext = EqualContext;
var BoolNotContext = /** @class */ (function (_super) {
    __extends(BoolNotContext, _super);
    function BoolNotContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BoolNotContext.prototype.NOT = function () { return this.getToken(COOLParser.NOT, 0); };
    BoolNotContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    // @Override
    BoolNotContext.prototype.enterRule = function (listener) {
        if (listener.enterBoolNot) {
            listener.enterBoolNot(this);
        }
    };
    // @Override
    BoolNotContext.prototype.exitRule = function (listener) {
        if (listener.exitBoolNot) {
            listener.exitBoolNot(this);
        }
    };
    // @Override
    BoolNotContext.prototype.accept = function (visitor) {
        if (visitor.visitBoolNot) {
            return visitor.visitBoolNot(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BoolNotContext;
}(ExpressionContext));
exports.BoolNotContext = BoolNotContext;
var ParenthesesContext = /** @class */ (function (_super) {
    __extends(ParenthesesContext, _super);
    function ParenthesesContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ParenthesesContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    // @Override
    ParenthesesContext.prototype.enterRule = function (listener) {
        if (listener.enterParentheses) {
            listener.enterParentheses(this);
        }
    };
    // @Override
    ParenthesesContext.prototype.exitRule = function (listener) {
        if (listener.exitParentheses) {
            listener.exitParentheses(this);
        }
    };
    // @Override
    ParenthesesContext.prototype.accept = function (visitor) {
        if (visitor.visitParentheses) {
            return visitor.visitParentheses(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParenthesesContext;
}(ExpressionContext));
exports.ParenthesesContext = ParenthesesContext;
var IdContext = /** @class */ (function (_super) {
    __extends(IdContext, _super);
    function IdContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    IdContext.prototype.OBJECTID = function () { return this.getToken(COOLParser.OBJECTID, 0); };
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
}(ExpressionContext));
exports.IdContext = IdContext;
var IntContext = /** @class */ (function (_super) {
    __extends(IntContext, _super);
    function IntContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    IntContext.prototype.INT = function () { return this.getToken(COOLParser.INT, 0); };
    // @Override
    IntContext.prototype.enterRule = function (listener) {
        if (listener.enterInt) {
            listener.enterInt(this);
        }
    };
    // @Override
    IntContext.prototype.exitRule = function (listener) {
        if (listener.exitInt) {
            listener.exitInt(this);
        }
    };
    // @Override
    IntContext.prototype.accept = function (visitor) {
        if (visitor.visitInt) {
            return visitor.visitInt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IntContext;
}(ExpressionContext));
exports.IntContext = IntContext;
var StringContext = /** @class */ (function (_super) {
    __extends(StringContext, _super);
    function StringContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    StringContext.prototype.STRING = function () { return this.getToken(COOLParser.STRING, 0); };
    // @Override
    StringContext.prototype.enterRule = function (listener) {
        if (listener.enterString) {
            listener.enterString(this);
        }
    };
    // @Override
    StringContext.prototype.exitRule = function (listener) {
        if (listener.exitString) {
            listener.exitString(this);
        }
    };
    // @Override
    StringContext.prototype.accept = function (visitor) {
        if (visitor.visitString) {
            return visitor.visitString(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StringContext;
}(ExpressionContext));
exports.StringContext = StringContext;
var TrueContext = /** @class */ (function (_super) {
    __extends(TrueContext, _super);
    function TrueContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    TrueContext.prototype.TRUE = function () { return this.getToken(COOLParser.TRUE, 0); };
    // @Override
    TrueContext.prototype.enterRule = function (listener) {
        if (listener.enterTrue) {
            listener.enterTrue(this);
        }
    };
    // @Override
    TrueContext.prototype.exitRule = function (listener) {
        if (listener.exitTrue) {
            listener.exitTrue(this);
        }
    };
    // @Override
    TrueContext.prototype.accept = function (visitor) {
        if (visitor.visitTrue) {
            return visitor.visitTrue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TrueContext;
}(ExpressionContext));
exports.TrueContext = TrueContext;
var FalseContext = /** @class */ (function (_super) {
    __extends(FalseContext, _super);
    function FalseContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    FalseContext.prototype.FALSE = function () { return this.getToken(COOLParser.FALSE, 0); };
    // @Override
    FalseContext.prototype.enterRule = function (listener) {
        if (listener.enterFalse) {
            listener.enterFalse(this);
        }
    };
    // @Override
    FalseContext.prototype.exitRule = function (listener) {
        if (listener.exitFalse) {
            listener.exitFalse(this);
        }
    };
    // @Override
    FalseContext.prototype.accept = function (visitor) {
        if (visitor.visitFalse) {
            return visitor.visitFalse(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FalseContext;
}(ExpressionContext));
exports.FalseContext = FalseContext;
var AssignmentContext = /** @class */ (function (_super) {
    __extends(AssignmentContext, _super);
    function AssignmentContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    AssignmentContext.prototype.OBJECTID = function () { return this.getToken(COOLParser.OBJECTID, 0); };
    AssignmentContext.prototype.ASSIGNMENT = function () { return this.getToken(COOLParser.ASSIGNMENT, 0); };
    AssignmentContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    // @Override
    AssignmentContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignment) {
            listener.enterAssignment(this);
        }
    };
    // @Override
    AssignmentContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignment) {
            listener.exitAssignment(this);
        }
    };
    // @Override
    AssignmentContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignment) {
            return visitor.visitAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentContext;
}(ExpressionContext));
exports.AssignmentContext = AssignmentContext;
