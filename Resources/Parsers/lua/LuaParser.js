"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/lua/Lua.g4 by ANTLR 4.7.3-SNAPSHOT
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
var LuaParser = /** @class */ (function (_super) {
    __extends(LuaParser, _super);
    function LuaParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(LuaParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(LuaParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return LuaParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LuaParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "Lua.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LuaParser.prototype, "ruleNames", {
        // @Override
        get: function () { return LuaParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LuaParser.prototype, "serializedATN", {
        // @Override
        get: function () { return LuaParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    LuaParser.prototype.chunk = function () {
        var _localctx = new ChunkContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, LuaParser.RULE_chunk);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 70;
                this.block();
                this.state = 71;
                this.match(LuaParser.EOF);
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
    LuaParser.prototype.block = function () {
        var _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, LuaParser.RULE_block);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 76;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuaParser.T__0) | (1 << LuaParser.T__2) | (1 << LuaParser.T__3) | (1 << LuaParser.T__4) | (1 << LuaParser.T__6) | (1 << LuaParser.T__7) | (1 << LuaParser.T__9) | (1 << LuaParser.T__13) | (1 << LuaParser.T__16) | (1 << LuaParser.T__17) | (1 << LuaParser.T__19) | (1 << LuaParser.T__26))) !== 0) || _la === LuaParser.NAME) {
                    {
                        {
                            this.state = 73;
                            this.stat();
                        }
                    }
                    this.state = 78;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 80;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === LuaParser.T__18) {
                    {
                        this.state = 79;
                        this.retstat();
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
    LuaParser.prototype.stat = function () {
        var _localctx = new StatContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, LuaParser.RULE_stat);
        var _la;
        try {
            this.state = 163;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 82;
                        this.match(LuaParser.T__0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 83;
                        this.varlist();
                        this.state = 84;
                        this.match(LuaParser.T__1);
                        this.state = 85;
                        this.explist();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 87;
                        this.functioncall();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 88;
                        this.label();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 89;
                        this.match(LuaParser.T__2);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 90;
                        this.match(LuaParser.T__3);
                        this.state = 91;
                        this.match(LuaParser.NAME);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 92;
                        this.match(LuaParser.T__4);
                        this.state = 93;
                        this.block();
                        this.state = 94;
                        this.match(LuaParser.T__5);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 96;
                        this.match(LuaParser.T__6);
                        this.state = 97;
                        this.exp(0);
                        this.state = 98;
                        this.match(LuaParser.T__4);
                        this.state = 99;
                        this.block();
                        this.state = 100;
                        this.match(LuaParser.T__5);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 102;
                        this.match(LuaParser.T__7);
                        this.state = 103;
                        this.block();
                        this.state = 104;
                        this.match(LuaParser.T__8);
                        this.state = 105;
                        this.exp(0);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 107;
                        this.match(LuaParser.T__9);
                        this.state = 108;
                        this.exp(0);
                        this.state = 109;
                        this.match(LuaParser.T__10);
                        this.state = 110;
                        this.block();
                        this.state = 118;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === LuaParser.T__11) {
                            {
                                {
                                    this.state = 111;
                                    this.match(LuaParser.T__11);
                                    this.state = 112;
                                    this.exp(0);
                                    this.state = 113;
                                    this.match(LuaParser.T__10);
                                    this.state = 114;
                                    this.block();
                                }
                            }
                            this.state = 120;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 123;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === LuaParser.T__12) {
                            {
                                this.state = 121;
                                this.match(LuaParser.T__12);
                                this.state = 122;
                                this.block();
                            }
                        }
                        this.state = 125;
                        this.match(LuaParser.T__5);
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 127;
                        this.match(LuaParser.T__13);
                        this.state = 128;
                        this.match(LuaParser.NAME);
                        this.state = 129;
                        this.match(LuaParser.T__1);
                        this.state = 130;
                        this.exp(0);
                        this.state = 131;
                        this.match(LuaParser.T__14);
                        this.state = 132;
                        this.exp(0);
                        this.state = 135;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === LuaParser.T__14) {
                            {
                                this.state = 133;
                                this.match(LuaParser.T__14);
                                this.state = 134;
                                this.exp(0);
                            }
                        }
                        this.state = 137;
                        this.match(LuaParser.T__4);
                        this.state = 138;
                        this.block();
                        this.state = 139;
                        this.match(LuaParser.T__5);
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 141;
                        this.match(LuaParser.T__13);
                        this.state = 142;
                        this.namelist();
                        this.state = 143;
                        this.match(LuaParser.T__15);
                        this.state = 144;
                        this.explist();
                        this.state = 145;
                        this.match(LuaParser.T__4);
                        this.state = 146;
                        this.block();
                        this.state = 147;
                        this.match(LuaParser.T__5);
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 149;
                        this.match(LuaParser.T__16);
                        this.state = 150;
                        this.funcname();
                        this.state = 151;
                        this.funcbody();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 153;
                        this.match(LuaParser.T__17);
                        this.state = 154;
                        this.match(LuaParser.T__16);
                        this.state = 155;
                        this.match(LuaParser.NAME);
                        this.state = 156;
                        this.funcbody();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 157;
                        this.match(LuaParser.T__17);
                        this.state = 158;
                        this.namelist();
                        this.state = 161;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === LuaParser.T__1) {
                            {
                                this.state = 159;
                                this.match(LuaParser.T__1);
                                this.state = 160;
                                this.explist();
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
    LuaParser.prototype.retstat = function () {
        var _localctx = new RetstatContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, LuaParser.RULE_retstat);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 165;
                this.match(LuaParser.T__18);
                this.state = 167;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuaParser.T__16) | (1 << LuaParser.T__22) | (1 << LuaParser.T__23) | (1 << LuaParser.T__24) | (1 << LuaParser.T__25) | (1 << LuaParser.T__26) | (1 << LuaParser.T__30))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (LuaParser.T__42 - 43)) | (1 << (LuaParser.T__49 - 43)) | (1 << (LuaParser.T__52 - 43)) | (1 << (LuaParser.T__53 - 43)) | (1 << (LuaParser.NAME - 43)) | (1 << (LuaParser.NORMALSTRING - 43)) | (1 << (LuaParser.CHARSTRING - 43)) | (1 << (LuaParser.LONGSTRING - 43)) | (1 << (LuaParser.INT - 43)) | (1 << (LuaParser.HEX - 43)) | (1 << (LuaParser.FLOAT - 43)) | (1 << (LuaParser.HEX_FLOAT - 43)))) !== 0)) {
                    {
                        this.state = 166;
                        this.explist();
                    }
                }
                this.state = 170;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === LuaParser.T__0) {
                    {
                        this.state = 169;
                        this.match(LuaParser.T__0);
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
    LuaParser.prototype.label = function () {
        var _localctx = new LabelContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, LuaParser.RULE_label);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 172;
                this.match(LuaParser.T__19);
                this.state = 173;
                this.match(LuaParser.NAME);
                this.state = 174;
                this.match(LuaParser.T__19);
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
    LuaParser.prototype.funcname = function () {
        var _localctx = new FuncnameContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, LuaParser.RULE_funcname);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 176;
                this.match(LuaParser.NAME);
                this.state = 181;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === LuaParser.T__20) {
                    {
                        {
                            this.state = 177;
                            this.match(LuaParser.T__20);
                            this.state = 178;
                            this.match(LuaParser.NAME);
                        }
                    }
                    this.state = 183;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 186;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === LuaParser.T__21) {
                    {
                        this.state = 184;
                        this.match(LuaParser.T__21);
                        this.state = 185;
                        this.match(LuaParser.NAME);
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
    LuaParser.prototype.varlist = function () {
        var _localctx = new VarlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, LuaParser.RULE_varlist);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 188;
                this.var();
                this.state = 193;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === LuaParser.T__14) {
                    {
                        {
                            this.state = 189;
                            this.match(LuaParser.T__14);
                            this.state = 190;
                            this.var();
                        }
                    }
                    this.state = 195;
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
    LuaParser.prototype.namelist = function () {
        var _localctx = new NamelistContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, LuaParser.RULE_namelist);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 196;
                this.match(LuaParser.NAME);
                this.state = 201;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 197;
                                this.match(LuaParser.T__14);
                                this.state = 198;
                                this.match(LuaParser.NAME);
                            }
                        }
                    }
                    this.state = 203;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
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
    LuaParser.prototype.explist = function () {
        var _localctx = new ExplistContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, LuaParser.RULE_explist);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 204;
                this.exp(0);
                this.state = 209;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === LuaParser.T__14) {
                    {
                        {
                            this.state = 205;
                            this.match(LuaParser.T__14);
                            this.state = 206;
                            this.exp(0);
                        }
                    }
                    this.state = 211;
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
    LuaParser.prototype.exp = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ExpContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 18;
        this.enterRecursionRule(_localctx, 18, LuaParser.RULE_exp, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 225;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case LuaParser.T__22:
                        {
                            this.state = 213;
                            this.match(LuaParser.T__22);
                        }
                        break;
                    case LuaParser.T__23:
                        {
                            this.state = 214;
                            this.match(LuaParser.T__23);
                        }
                        break;
                    case LuaParser.T__24:
                        {
                            this.state = 215;
                            this.match(LuaParser.T__24);
                        }
                        break;
                    case LuaParser.INT:
                    case LuaParser.HEX:
                    case LuaParser.FLOAT:
                    case LuaParser.HEX_FLOAT:
                        {
                            this.state = 216;
                            this.number();
                        }
                        break;
                    case LuaParser.NORMALSTRING:
                    case LuaParser.CHARSTRING:
                    case LuaParser.LONGSTRING:
                        {
                            this.state = 217;
                            this.string();
                        }
                        break;
                    case LuaParser.T__25:
                        {
                            this.state = 218;
                            this.match(LuaParser.T__25);
                        }
                        break;
                    case LuaParser.T__16:
                        {
                            this.state = 219;
                            this.functiondef();
                        }
                        break;
                    case LuaParser.T__26:
                    case LuaParser.NAME:
                        {
                            this.state = 220;
                            this.prefixexp();
                        }
                        break;
                    case LuaParser.T__30:
                        {
                            this.state = 221;
                            this.tableconstructor();
                        }
                        break;
                    case LuaParser.T__42:
                    case LuaParser.T__49:
                    case LuaParser.T__52:
                    case LuaParser.T__53:
                        {
                            this.state = 222;
                            this.operatorUnary();
                            this.state = 223;
                            this.exp(8);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 261;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 259;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LuaParser.RULE_exp);
                                        this.state = 227;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 228;
                                        this.operatorPower();
                                        this.state = 229;
                                        this.exp(9);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExpContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LuaParser.RULE_exp);
                                        this.state = 231;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 232;
                                        this.operatorMulDivMod();
                                        this.state = 233;
                                        this.exp(8);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new ExpContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LuaParser.RULE_exp);
                                        this.state = 235;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 236;
                                        this.operatorAddSub();
                                        this.state = 237;
                                        this.exp(7);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new ExpContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LuaParser.RULE_exp);
                                        this.state = 239;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 240;
                                        this.operatorStrcat();
                                        this.state = 241;
                                        this.exp(5);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new ExpContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LuaParser.RULE_exp);
                                        this.state = 243;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 244;
                                        this.operatorComparison();
                                        this.state = 245;
                                        this.exp(5);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new ExpContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LuaParser.RULE_exp);
                                        this.state = 247;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 248;
                                        this.operatorAnd();
                                        this.state = 249;
                                        this.exp(4);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new ExpContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LuaParser.RULE_exp);
                                        this.state = 251;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 252;
                                        this.operatorOr();
                                        this.state = 253;
                                        this.exp(3);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new ExpContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LuaParser.RULE_exp);
                                        this.state = 255;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 256;
                                        this.operatorBitwise();
                                        this.state = 257;
                                        this.exp(2);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 263;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
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
    LuaParser.prototype.prefixexp = function () {
        var _localctx = new PrefixexpContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, LuaParser.RULE_prefixexp);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 264;
                this.varOrExp();
                this.state = 268;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 265;
                                this.nameAndArgs();
                            }
                        }
                    }
                    this.state = 270;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
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
    LuaParser.prototype.functioncall = function () {
        var _localctx = new FunctioncallContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, LuaParser.RULE_functioncall);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 271;
                this.varOrExp();
                this.state = 273;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 272;
                                    this.nameAndArgs();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 275;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
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
    LuaParser.prototype.varOrExp = function () {
        var _localctx = new VarOrExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, LuaParser.RULE_varOrExp);
        try {
            this.state = 282;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 277;
                        this.var();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 278;
                        this.match(LuaParser.T__26);
                        this.state = 279;
                        this.exp(0);
                        this.state = 280;
                        this.match(LuaParser.T__27);
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
    LuaParser.prototype.var = function () {
        var _localctx = new VarContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, LuaParser.RULE_var);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 290;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case LuaParser.NAME:
                        {
                            this.state = 284;
                            this.match(LuaParser.NAME);
                        }
                        break;
                    case LuaParser.T__26:
                        {
                            this.state = 285;
                            this.match(LuaParser.T__26);
                            this.state = 286;
                            this.exp(0);
                            this.state = 287;
                            this.match(LuaParser.T__27);
                            this.state = 288;
                            this.varSuffix();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 295;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 292;
                                this.varSuffix();
                            }
                        }
                    }
                    this.state = 297;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
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
    LuaParser.prototype.varSuffix = function () {
        var _localctx = new VarSuffixContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, LuaParser.RULE_varSuffix);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 301;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuaParser.T__21) | (1 << LuaParser.T__26) | (1 << LuaParser.T__30))) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (LuaParser.NORMALSTRING - 57)) | (1 << (LuaParser.CHARSTRING - 57)) | (1 << (LuaParser.LONGSTRING - 57)))) !== 0)) {
                    {
                        {
                            this.state = 298;
                            this.nameAndArgs();
                        }
                    }
                    this.state = 303;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 310;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case LuaParser.T__28:
                        {
                            this.state = 304;
                            this.match(LuaParser.T__28);
                            this.state = 305;
                            this.exp(0);
                            this.state = 306;
                            this.match(LuaParser.T__29);
                        }
                        break;
                    case LuaParser.T__20:
                        {
                            this.state = 308;
                            this.match(LuaParser.T__20);
                            this.state = 309;
                            this.match(LuaParser.NAME);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
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
    LuaParser.prototype.nameAndArgs = function () {
        var _localctx = new NameAndArgsContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, LuaParser.RULE_nameAndArgs);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 314;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === LuaParser.T__21) {
                    {
                        this.state = 312;
                        this.match(LuaParser.T__21);
                        this.state = 313;
                        this.match(LuaParser.NAME);
                    }
                }
                this.state = 316;
                this.args();
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
    LuaParser.prototype.args = function () {
        var _localctx = new ArgsContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, LuaParser.RULE_args);
        var _la;
        try {
            this.state = 325;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case LuaParser.T__26:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 318;
                        this.match(LuaParser.T__26);
                        this.state = 320;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuaParser.T__16) | (1 << LuaParser.T__22) | (1 << LuaParser.T__23) | (1 << LuaParser.T__24) | (1 << LuaParser.T__25) | (1 << LuaParser.T__26) | (1 << LuaParser.T__30))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (LuaParser.T__42 - 43)) | (1 << (LuaParser.T__49 - 43)) | (1 << (LuaParser.T__52 - 43)) | (1 << (LuaParser.T__53 - 43)) | (1 << (LuaParser.NAME - 43)) | (1 << (LuaParser.NORMALSTRING - 43)) | (1 << (LuaParser.CHARSTRING - 43)) | (1 << (LuaParser.LONGSTRING - 43)) | (1 << (LuaParser.INT - 43)) | (1 << (LuaParser.HEX - 43)) | (1 << (LuaParser.FLOAT - 43)) | (1 << (LuaParser.HEX_FLOAT - 43)))) !== 0)) {
                            {
                                this.state = 319;
                                this.explist();
                            }
                        }
                        this.state = 322;
                        this.match(LuaParser.T__27);
                    }
                    break;
                case LuaParser.T__30:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 323;
                        this.tableconstructor();
                    }
                    break;
                case LuaParser.NORMALSTRING:
                case LuaParser.CHARSTRING:
                case LuaParser.LONGSTRING:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 324;
                        this.string();
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
    LuaParser.prototype.functiondef = function () {
        var _localctx = new FunctiondefContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, LuaParser.RULE_functiondef);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 327;
                this.match(LuaParser.T__16);
                this.state = 328;
                this.funcbody();
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
    LuaParser.prototype.funcbody = function () {
        var _localctx = new FuncbodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, LuaParser.RULE_funcbody);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 330;
                this.match(LuaParser.T__26);
                this.state = 332;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === LuaParser.T__25 || _la === LuaParser.NAME) {
                    {
                        this.state = 331;
                        this.parlist();
                    }
                }
                this.state = 334;
                this.match(LuaParser.T__27);
                this.state = 335;
                this.block();
                this.state = 336;
                this.match(LuaParser.T__5);
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
    LuaParser.prototype.parlist = function () {
        var _localctx = new ParlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, LuaParser.RULE_parlist);
        var _la;
        try {
            this.state = 344;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case LuaParser.NAME:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 338;
                        this.namelist();
                        this.state = 341;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === LuaParser.T__14) {
                            {
                                this.state = 339;
                                this.match(LuaParser.T__14);
                                this.state = 340;
                                this.match(LuaParser.T__25);
                            }
                        }
                    }
                    break;
                case LuaParser.T__25:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 343;
                        this.match(LuaParser.T__25);
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
    LuaParser.prototype.tableconstructor = function () {
        var _localctx = new TableconstructorContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, LuaParser.RULE_tableconstructor);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 346;
                this.match(LuaParser.T__30);
                this.state = 348;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuaParser.T__16) | (1 << LuaParser.T__22) | (1 << LuaParser.T__23) | (1 << LuaParser.T__24) | (1 << LuaParser.T__25) | (1 << LuaParser.T__26) | (1 << LuaParser.T__28) | (1 << LuaParser.T__30))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (LuaParser.T__42 - 43)) | (1 << (LuaParser.T__49 - 43)) | (1 << (LuaParser.T__52 - 43)) | (1 << (LuaParser.T__53 - 43)) | (1 << (LuaParser.NAME - 43)) | (1 << (LuaParser.NORMALSTRING - 43)) | (1 << (LuaParser.CHARSTRING - 43)) | (1 << (LuaParser.LONGSTRING - 43)) | (1 << (LuaParser.INT - 43)) | (1 << (LuaParser.HEX - 43)) | (1 << (LuaParser.FLOAT - 43)) | (1 << (LuaParser.HEX_FLOAT - 43)))) !== 0)) {
                    {
                        this.state = 347;
                        this.fieldlist();
                    }
                }
                this.state = 350;
                this.match(LuaParser.T__31);
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
    LuaParser.prototype.fieldlist = function () {
        var _localctx = new FieldlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, LuaParser.RULE_fieldlist);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 352;
                this.field();
                this.state = 358;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 353;
                                this.fieldsep();
                                this.state = 354;
                                this.field();
                            }
                        }
                    }
                    this.state = 360;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
                }
                this.state = 362;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === LuaParser.T__0 || _la === LuaParser.T__14) {
                    {
                        this.state = 361;
                        this.fieldsep();
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
    LuaParser.prototype.field = function () {
        var _localctx = new FieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, LuaParser.RULE_field);
        try {
            this.state = 374;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 364;
                        this.match(LuaParser.T__28);
                        this.state = 365;
                        this.exp(0);
                        this.state = 366;
                        this.match(LuaParser.T__29);
                        this.state = 367;
                        this.match(LuaParser.T__1);
                        this.state = 368;
                        this.exp(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 370;
                        this.match(LuaParser.NAME);
                        this.state = 371;
                        this.match(LuaParser.T__1);
                        this.state = 372;
                        this.exp(0);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 373;
                        this.exp(0);
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
    LuaParser.prototype.fieldsep = function () {
        var _localctx = new FieldsepContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, LuaParser.RULE_fieldsep);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 376;
                _la = this._input.LA(1);
                if (!(_la === LuaParser.T__0 || _la === LuaParser.T__14)) {
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
    LuaParser.prototype.operatorOr = function () {
        var _localctx = new OperatorOrContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, LuaParser.RULE_operatorOr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 378;
                this.match(LuaParser.T__32);
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
    LuaParser.prototype.operatorAnd = function () {
        var _localctx = new OperatorAndContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, LuaParser.RULE_operatorAnd);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 380;
                this.match(LuaParser.T__33);
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
    LuaParser.prototype.operatorComparison = function () {
        var _localctx = new OperatorComparisonContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, LuaParser.RULE_operatorComparison);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 382;
                _la = this._input.LA(1);
                if (!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (LuaParser.T__34 - 35)) | (1 << (LuaParser.T__35 - 35)) | (1 << (LuaParser.T__36 - 35)) | (1 << (LuaParser.T__37 - 35)) | (1 << (LuaParser.T__38 - 35)) | (1 << (LuaParser.T__39 - 35)))) !== 0))) {
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
    LuaParser.prototype.operatorStrcat = function () {
        var _localctx = new OperatorStrcatContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, LuaParser.RULE_operatorStrcat);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 384;
                this.match(LuaParser.T__40);
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
    LuaParser.prototype.operatorAddSub = function () {
        var _localctx = new OperatorAddSubContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, LuaParser.RULE_operatorAddSub);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 386;
                _la = this._input.LA(1);
                if (!(_la === LuaParser.T__41 || _la === LuaParser.T__42)) {
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
    LuaParser.prototype.operatorMulDivMod = function () {
        var _localctx = new OperatorMulDivModContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, LuaParser.RULE_operatorMulDivMod);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 388;
                _la = this._input.LA(1);
                if (!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (LuaParser.T__43 - 44)) | (1 << (LuaParser.T__44 - 44)) | (1 << (LuaParser.T__45 - 44)) | (1 << (LuaParser.T__46 - 44)))) !== 0))) {
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
    LuaParser.prototype.operatorBitwise = function () {
        var _localctx = new OperatorBitwiseContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, LuaParser.RULE_operatorBitwise);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 390;
                _la = this._input.LA(1);
                if (!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (LuaParser.T__47 - 48)) | (1 << (LuaParser.T__48 - 48)) | (1 << (LuaParser.T__49 - 48)) | (1 << (LuaParser.T__50 - 48)) | (1 << (LuaParser.T__51 - 48)))) !== 0))) {
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
    LuaParser.prototype.operatorUnary = function () {
        var _localctx = new OperatorUnaryContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, LuaParser.RULE_operatorUnary);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 392;
                _la = this._input.LA(1);
                if (!(((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (LuaParser.T__42 - 43)) | (1 << (LuaParser.T__49 - 43)) | (1 << (LuaParser.T__52 - 43)) | (1 << (LuaParser.T__53 - 43)))) !== 0))) {
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
    LuaParser.prototype.operatorPower = function () {
        var _localctx = new OperatorPowerContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, LuaParser.RULE_operatorPower);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 394;
                this.match(LuaParser.T__54);
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
    LuaParser.prototype.number = function () {
        var _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, LuaParser.RULE_number);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 396;
                _la = this._input.LA(1);
                if (!(((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (LuaParser.INT - 60)) | (1 << (LuaParser.HEX - 60)) | (1 << (LuaParser.FLOAT - 60)) | (1 << (LuaParser.HEX_FLOAT - 60)))) !== 0))) {
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
    LuaParser.prototype.string = function () {
        var _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, LuaParser.RULE_string);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 398;
                _la = this._input.LA(1);
                if (!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (LuaParser.NORMALSTRING - 57)) | (1 << (LuaParser.CHARSTRING - 57)) | (1 << (LuaParser.LONGSTRING - 57)))) !== 0))) {
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
    LuaParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 9:
                return this.exp_sempred(_localctx, predIndex);
        }
        return true;
    };
    LuaParser.prototype.exp_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 9);
            case 1:
                return this.precpred(this._ctx, 7);
            case 2:
                return this.precpred(this._ctx, 6);
            case 3:
                return this.precpred(this._ctx, 5);
            case 4:
                return this.precpred(this._ctx, 4);
            case 5:
                return this.precpred(this._ctx, 3);
            case 6:
                return this.precpred(this._ctx, 2);
            case 7:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    Object.defineProperty(LuaParser, "_ATN", {
        get: function () {
            if (!LuaParser.__ATN) {
                LuaParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(LuaParser._serializedATN));
            }
            return LuaParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    LuaParser.T__0 = 1;
    LuaParser.T__1 = 2;
    LuaParser.T__2 = 3;
    LuaParser.T__3 = 4;
    LuaParser.T__4 = 5;
    LuaParser.T__5 = 6;
    LuaParser.T__6 = 7;
    LuaParser.T__7 = 8;
    LuaParser.T__8 = 9;
    LuaParser.T__9 = 10;
    LuaParser.T__10 = 11;
    LuaParser.T__11 = 12;
    LuaParser.T__12 = 13;
    LuaParser.T__13 = 14;
    LuaParser.T__14 = 15;
    LuaParser.T__15 = 16;
    LuaParser.T__16 = 17;
    LuaParser.T__17 = 18;
    LuaParser.T__18 = 19;
    LuaParser.T__19 = 20;
    LuaParser.T__20 = 21;
    LuaParser.T__21 = 22;
    LuaParser.T__22 = 23;
    LuaParser.T__23 = 24;
    LuaParser.T__24 = 25;
    LuaParser.T__25 = 26;
    LuaParser.T__26 = 27;
    LuaParser.T__27 = 28;
    LuaParser.T__28 = 29;
    LuaParser.T__29 = 30;
    LuaParser.T__30 = 31;
    LuaParser.T__31 = 32;
    LuaParser.T__32 = 33;
    LuaParser.T__33 = 34;
    LuaParser.T__34 = 35;
    LuaParser.T__35 = 36;
    LuaParser.T__36 = 37;
    LuaParser.T__37 = 38;
    LuaParser.T__38 = 39;
    LuaParser.T__39 = 40;
    LuaParser.T__40 = 41;
    LuaParser.T__41 = 42;
    LuaParser.T__42 = 43;
    LuaParser.T__43 = 44;
    LuaParser.T__44 = 45;
    LuaParser.T__45 = 46;
    LuaParser.T__46 = 47;
    LuaParser.T__47 = 48;
    LuaParser.T__48 = 49;
    LuaParser.T__49 = 50;
    LuaParser.T__50 = 51;
    LuaParser.T__51 = 52;
    LuaParser.T__52 = 53;
    LuaParser.T__53 = 54;
    LuaParser.T__54 = 55;
    LuaParser.NAME = 56;
    LuaParser.NORMALSTRING = 57;
    LuaParser.CHARSTRING = 58;
    LuaParser.LONGSTRING = 59;
    LuaParser.INT = 60;
    LuaParser.HEX = 61;
    LuaParser.FLOAT = 62;
    LuaParser.HEX_FLOAT = 63;
    LuaParser.COMMENT = 64;
    LuaParser.LINE_COMMENT = 65;
    LuaParser.WS = 66;
    LuaParser.SHEBANG = 67;
    LuaParser.RULE_chunk = 0;
    LuaParser.RULE_block = 1;
    LuaParser.RULE_stat = 2;
    LuaParser.RULE_retstat = 3;
    LuaParser.RULE_label = 4;
    LuaParser.RULE_funcname = 5;
    LuaParser.RULE_varlist = 6;
    LuaParser.RULE_namelist = 7;
    LuaParser.RULE_explist = 8;
    LuaParser.RULE_exp = 9;
    LuaParser.RULE_prefixexp = 10;
    LuaParser.RULE_functioncall = 11;
    LuaParser.RULE_varOrExp = 12;
    LuaParser.RULE_var = 13;
    LuaParser.RULE_varSuffix = 14;
    LuaParser.RULE_nameAndArgs = 15;
    LuaParser.RULE_args = 16;
    LuaParser.RULE_functiondef = 17;
    LuaParser.RULE_funcbody = 18;
    LuaParser.RULE_parlist = 19;
    LuaParser.RULE_tableconstructor = 20;
    LuaParser.RULE_fieldlist = 21;
    LuaParser.RULE_field = 22;
    LuaParser.RULE_fieldsep = 23;
    LuaParser.RULE_operatorOr = 24;
    LuaParser.RULE_operatorAnd = 25;
    LuaParser.RULE_operatorComparison = 26;
    LuaParser.RULE_operatorStrcat = 27;
    LuaParser.RULE_operatorAddSub = 28;
    LuaParser.RULE_operatorMulDivMod = 29;
    LuaParser.RULE_operatorBitwise = 30;
    LuaParser.RULE_operatorUnary = 31;
    LuaParser.RULE_operatorPower = 32;
    LuaParser.RULE_number = 33;
    LuaParser.RULE_string = 34;
    // tslint:disable:no-trailing-whitespace
    LuaParser.ruleNames = [
        "chunk", "block", "stat", "retstat", "label", "funcname", "varlist", "namelist",
        "explist", "exp", "prefixexp", "functioncall", "varOrExp", "var", "varSuffix",
        "nameAndArgs", "args", "functiondef", "funcbody", "parlist", "tableconstructor",
        "fieldlist", "field", "fieldsep", "operatorOr", "operatorAnd", "operatorComparison",
        "operatorStrcat", "operatorAddSub", "operatorMulDivMod", "operatorBitwise",
        "operatorUnary", "operatorPower", "number", "string",
    ];
    LuaParser._LITERAL_NAMES = [
        undefined, "';'", "'='", "'break'", "'goto'", "'do'", "'end'", "'while'",
        "'repeat'", "'until'", "'if'", "'then'", "'elseif'", "'else'", "'for'",
        "','", "'in'", "'function'", "'local'", "'return'", "'::'", "'.'", "':'",
        "'nil'", "'false'", "'true'", "'...'", "'('", "')'", "'['", "']'", "'{'",
        "'}'", "'or'", "'and'", "'<'", "'>'", "'<='", "'>='", "'~='", "'=='",
        "'..'", "'+'", "'-'", "'*'", "'/'", "'%'", "'//'", "'&'", "'|'", "'~'",
        "'<<'", "'>>'", "'not'", "'#'", "'^'",
    ];
    LuaParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        "NAME", "NORMALSTRING", "CHARSTRING", "LONGSTRING", "INT", "HEX", "FLOAT",
        "HEX_FLOAT", "COMMENT", "LINE_COMMENT", "WS", "SHEBANG",
    ];
    LuaParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(LuaParser._LITERAL_NAMES, LuaParser._SYMBOLIC_NAMES, []);
    LuaParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03E\u0193\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x03\x02\x03\x02\x03\x02\x03\x03\x07\x03M\n\x03\f\x03\x0E\x03" +
        "P\v\x03\x03\x03\x05\x03S\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x07\x04w\n\x04\f\x04\x0E\x04z\v\x04\x03\x04\x03\x04\x05" +
        "\x04~\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x05\x04\x8A\n\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x05\x04\xA4\n\x04\x05\x04\xA6\n\x04\x03\x05\x03\x05\x05" +
        "\x05\xAA\n\x05\x03\x05\x05\x05\xAD\n\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
        "\x03\x07\x03\x07\x03\x07\x07\x07\xB6\n\x07\f\x07\x0E\x07\xB9\v\x07\x03" +
        "\x07\x03\x07\x05\x07\xBD\n\x07\x03\b\x03\b\x03\b\x07\b\xC2\n\b\f\b\x0E" +
        "\b\xC5\v\b\x03\t\x03\t\x03\t\x07\t\xCA\n\t\f\t\x0E\t\xCD\v\t\x03\n\x03" +
        "\n\x03\n\x07\n\xD2\n\n\f\n\x0E\n\xD5\v\n\x03\v\x03\v\x03\v\x03\v\x03\v" +
        "\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\xE4\n\v\x03\v\x03" +
        "\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
        "\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
        "\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\u0106\n\v\f\v\x0E\v\u0109" +
        "\v\v\x03\f\x03\f\x07\f\u010D\n\f\f\f\x0E\f\u0110\v\f\x03\r\x03\r\x06\r" +
        "\u0114\n\r\r\r\x0E\r\u0115\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05" +
        "\x0E\u011D\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F" +
        "\u0125\n\x0F\x03\x0F\x07\x0F\u0128\n\x0F\f\x0F\x0E\x0F\u012B\v\x0F\x03" +
        "\x10\x07\x10\u012E\n\x10\f\x10\x0E\x10\u0131\v\x10\x03\x10\x03\x10\x03" +
        "\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0139\n\x10\x03\x11\x03\x11\x05\x11" +
        "\u013D\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x05\x12\u0143\n\x12\x03\x12" +
        "\x03\x12\x03\x12\x05\x12\u0148\n\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03" +
        "\x14\x05\x14\u014F\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15" +
        "\x03\x15\x05\x15\u0158\n\x15\x03\x15\x05\x15\u015B\n\x15\x03\x16\x03\x16" +
        "\x05\x16\u015F\n\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x07" +
        "\x17\u0167\n\x17\f\x17\x0E\x17\u016A\v\x17\x03\x17\x05\x17\u016D\n\x17" +
        "\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
        "\x03\x18\x05\x18\u0179\n\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03" +
        "\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03" +
        " \x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03$\x02\x02\x03\x14" +
        "%\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
        "\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
        "*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
        "F\x02\x02\n\x04\x02\x03\x03\x11\x11\x03\x02%*\x03\x02,-\x03\x02.1\x03" +
        "\x0226\x05\x02--4478\x03\x02>A\x03\x02;=\x02\u01AE\x02H\x03\x02\x02\x02" +
        "\x04N\x03\x02\x02\x02\x06\xA5\x03\x02\x02\x02\b\xA7\x03\x02\x02\x02\n" +
        "\xAE\x03\x02\x02\x02\f\xB2\x03\x02\x02\x02\x0E\xBE\x03\x02\x02\x02\x10" +
        "\xC6\x03\x02\x02\x02\x12\xCE\x03\x02\x02\x02\x14\xE3\x03\x02\x02\x02\x16" +
        "\u010A\x03\x02\x02\x02\x18\u0111\x03\x02\x02\x02\x1A\u011C\x03\x02\x02" +
        "\x02\x1C\u0124\x03\x02\x02\x02\x1E\u012F\x03\x02\x02\x02 \u013C\x03\x02" +
        "\x02\x02\"\u0147\x03\x02\x02\x02$\u0149\x03\x02\x02\x02&\u014C\x03\x02" +
        "\x02\x02(\u015A\x03\x02\x02\x02*\u015C\x03\x02\x02\x02,\u0162\x03\x02" +
        "\x02\x02.\u0178\x03\x02\x02\x020\u017A\x03\x02\x02\x022\u017C\x03\x02" +
        "\x02\x024\u017E\x03\x02\x02\x026\u0180\x03\x02\x02\x028\u0182\x03\x02" +
        "\x02\x02:\u0184\x03\x02\x02\x02<\u0186\x03\x02\x02\x02>\u0188\x03\x02" +
        "\x02\x02@\u018A\x03\x02\x02\x02B\u018C\x03\x02\x02\x02D\u018E\x03\x02" +
        "\x02\x02F\u0190\x03\x02\x02\x02HI\x05\x04\x03\x02IJ\x07\x02\x02\x03J\x03" +
        "\x03\x02\x02\x02KM\x05\x06\x04\x02LK\x03\x02\x02\x02MP\x03\x02\x02\x02" +
        "NL\x03\x02\x02\x02NO\x03\x02\x02\x02OR\x03\x02\x02\x02PN\x03\x02\x02\x02" +
        "QS\x05\b\x05\x02RQ\x03\x02\x02\x02RS\x03\x02\x02\x02S\x05\x03\x02\x02" +
        "\x02T\xA6\x07\x03\x02\x02UV\x05\x0E\b\x02VW\x07\x04\x02\x02WX\x05\x12" +
        "\n\x02X\xA6\x03\x02\x02\x02Y\xA6\x05\x18\r\x02Z\xA6\x05\n\x06\x02[\xA6" +
        "\x07\x05\x02\x02\\]\x07\x06\x02\x02]\xA6\x07:\x02\x02^_\x07\x07\x02\x02" +
        "_`\x05\x04\x03\x02`a\x07\b\x02\x02a\xA6\x03\x02\x02\x02bc\x07\t\x02\x02" +
        "cd\x05\x14\v\x02de\x07\x07\x02\x02ef\x05\x04\x03\x02fg\x07\b\x02\x02g" +
        "\xA6\x03\x02\x02\x02hi\x07\n\x02\x02ij\x05\x04\x03\x02jk\x07\v\x02\x02" +
        "kl\x05\x14\v\x02l\xA6\x03\x02\x02\x02mn\x07\f\x02\x02no\x05\x14\v\x02" +
        "op\x07\r\x02\x02px\x05\x04\x03\x02qr\x07\x0E\x02\x02rs\x05\x14\v\x02s" +
        "t\x07\r\x02\x02tu\x05\x04\x03\x02uw\x03\x02\x02\x02vq\x03\x02\x02\x02" +
        "wz\x03\x02\x02\x02xv\x03\x02\x02\x02xy\x03\x02\x02\x02y}\x03\x02\x02\x02" +
        "zx\x03\x02\x02\x02{|\x07\x0F\x02\x02|~\x05\x04\x03\x02}{\x03\x02\x02\x02" +
        "}~\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x80\x07\b\x02\x02\x80\xA6" +
        "\x03\x02\x02\x02\x81\x82\x07\x10\x02\x02\x82\x83\x07:\x02\x02\x83\x84" +
        "\x07\x04\x02\x02\x84\x85\x05\x14\v\x02\x85\x86\x07\x11\x02\x02\x86\x89" +
        "\x05\x14\v\x02\x87\x88\x07\x11\x02\x02\x88\x8A\x05\x14\v\x02\x89\x87\x03" +
        "\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8C\x07" +
        "\x07\x02\x02\x8C\x8D\x05\x04\x03\x02\x8D\x8E\x07\b\x02\x02\x8E\xA6\x03" +
        "\x02\x02\x02\x8F\x90\x07\x10\x02\x02\x90\x91\x05\x10\t\x02\x91\x92\x07" +
        "\x12\x02\x02\x92\x93\x05\x12\n\x02\x93\x94\x07\x07\x02\x02\x94\x95\x05" +
        "\x04\x03\x02\x95\x96\x07\b\x02\x02\x96\xA6\x03\x02\x02\x02\x97\x98\x07" +
        "\x13\x02\x02\x98\x99\x05\f\x07\x02\x99\x9A\x05&\x14\x02\x9A\xA6\x03\x02" +
        "\x02\x02\x9B\x9C\x07\x14\x02\x02\x9C\x9D\x07\x13\x02\x02\x9D\x9E\x07:" +
        "\x02\x02\x9E\xA6\x05&\x14\x02\x9F\xA0\x07\x14\x02\x02\xA0\xA3\x05\x10" +
        "\t\x02\xA1\xA2\x07\x04\x02\x02\xA2\xA4\x05\x12\n\x02\xA3\xA1\x03\x02\x02" +
        "\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA6\x03\x02\x02\x02\xA5T\x03\x02\x02" +
        "\x02\xA5U\x03\x02\x02\x02\xA5Y\x03\x02\x02\x02\xA5Z\x03\x02\x02\x02\xA5" +
        "[\x03\x02\x02\x02\xA5\\\x03\x02\x02\x02\xA5^\x03\x02\x02\x02\xA5b\x03" +
        "\x02\x02\x02\xA5h\x03\x02\x02\x02\xA5m\x03\x02\x02\x02\xA5\x81\x03\x02" +
        "\x02\x02\xA5\x8F\x03\x02\x02\x02\xA5\x97\x03\x02\x02\x02\xA5\x9B\x03\x02" +
        "\x02\x02\xA5\x9F\x03\x02\x02\x02\xA6\x07\x03\x02\x02\x02\xA7\xA9\x07\x15" +
        "\x02\x02\xA8\xAA\x05\x12\n\x02\xA9\xA8\x03\x02\x02\x02\xA9\xAA\x03\x02" +
        "\x02\x02\xAA\xAC\x03\x02\x02\x02\xAB\xAD\x07\x03\x02\x02\xAC\xAB\x03\x02" +
        "\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\t\x03\x02\x02\x02\xAE\xAF\x07\x16" +
        "\x02\x02\xAF\xB0\x07:\x02\x02\xB0\xB1\x07\x16\x02\x02\xB1\v\x03\x02\x02" +
        "\x02\xB2\xB7\x07:\x02\x02\xB3\xB4\x07\x17\x02\x02\xB4\xB6\x07:\x02\x02" +
        "\xB5\xB3\x03\x02\x02\x02\xB6\xB9\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02" +
        "\xB7\xB8\x03\x02\x02\x02\xB8\xBC\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02" +
        "\xBA\xBB\x07\x18\x02\x02\xBB\xBD\x07:\x02\x02\xBC\xBA\x03\x02\x02\x02" +
        "\xBC\xBD\x03\x02\x02\x02\xBD\r\x03\x02\x02\x02\xBE\xC3\x05\x1C\x0F\x02" +
        "\xBF\xC0\x07\x11\x02\x02\xC0\xC2\x05\x1C\x0F\x02\xC1\xBF\x03\x02\x02\x02" +
        "\xC2\xC5\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02" +
        "\xC4\x0F\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC6\xCB\x07:\x02\x02" +
        "\xC7\xC8\x07\x11\x02\x02\xC8\xCA\x07:\x02\x02\xC9\xC7\x03\x02\x02\x02" +
        "\xCA\xCD\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02" +
        "\xCC\x11\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCE\xD3\x05\x14\v\x02" +
        "\xCF\xD0\x07\x11\x02\x02\xD0\xD2\x05\x14\v\x02\xD1\xCF\x03\x02\x02\x02" +
        "\xD2\xD5\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02" +
        "\xD4\x13\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD6\xD7\b\v\x01\x02\xD7" +
        "\xE4\x07\x19\x02\x02\xD8\xE4\x07\x1A\x02\x02\xD9\xE4\x07\x1B\x02\x02\xDA" +
        "\xE4\x05D#\x02\xDB\xE4\x05F$\x02\xDC\xE4\x07\x1C\x02\x02\xDD\xE4\x05$" +
        "\x13\x02\xDE\xE4\x05\x16\f\x02\xDF\xE4\x05*\x16\x02\xE0\xE1\x05@!\x02" +
        "\xE1\xE2\x05\x14\v\n\xE2\xE4\x03\x02\x02\x02\xE3\xD6\x03\x02\x02\x02\xE3" +
        "\xD8\x03\x02\x02\x02\xE3\xD9\x03\x02\x02\x02\xE3\xDA\x03\x02\x02\x02\xE3" +
        "\xDB\x03\x02\x02\x02\xE3\xDC\x03\x02\x02\x02\xE3\xDD\x03\x02\x02\x02\xE3" +
        "\xDE\x03\x02\x02\x02\xE3\xDF\x03\x02\x02\x02\xE3\xE0\x03\x02\x02\x02\xE4" +
        "\u0107\x03\x02\x02\x02\xE5\xE6\f\v\x02\x02\xE6\xE7\x05B\"\x02\xE7\xE8" +
        "\x05\x14\v\v\xE8\u0106\x03\x02\x02\x02\xE9\xEA\f\t\x02\x02\xEA\xEB\x05" +
        "<\x1F\x02\xEB\xEC\x05\x14\v\n\xEC\u0106\x03\x02\x02\x02\xED\xEE\f\b\x02" +
        "\x02\xEE\xEF\x05:\x1E\x02\xEF\xF0\x05\x14\v\t\xF0\u0106\x03\x02\x02\x02" +
        "\xF1\xF2\f\x07\x02\x02\xF2\xF3\x058\x1D\x02\xF3\xF4\x05\x14\v\x07\xF4" +
        "\u0106\x03\x02\x02\x02\xF5\xF6\f\x06\x02\x02\xF6\xF7\x056\x1C\x02\xF7" +
        "\xF8\x05\x14\v\x07\xF8\u0106\x03\x02\x02\x02\xF9\xFA\f\x05\x02\x02\xFA" +
        "\xFB\x054\x1B\x02\xFB\xFC\x05\x14\v\x06\xFC\u0106\x03\x02\x02\x02\xFD" +
        "\xFE\f\x04\x02\x02\xFE\xFF\x052\x1A\x02\xFF\u0100\x05\x14\v\x05\u0100" +
        "\u0106\x03\x02\x02\x02\u0101\u0102\f\x03\x02\x02\u0102\u0103\x05> \x02" +
        "\u0103\u0104\x05\x14\v\x04\u0104\u0106\x03\x02\x02\x02\u0105\xE5\x03\x02" +
        "\x02\x02\u0105\xE9\x03\x02\x02\x02\u0105\xED\x03\x02\x02\x02\u0105\xF1" +
        "\x03\x02\x02\x02\u0105\xF5\x03\x02\x02\x02\u0105\xF9\x03\x02\x02\x02\u0105" +
        "\xFD\x03\x02\x02\x02\u0105\u0101\x03\x02\x02\x02\u0106\u0109\x03\x02\x02" +
        "\x02\u0107\u0105\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\x15" +
        "\x03\x02\x02\x02\u0109\u0107\x03\x02\x02\x02\u010A\u010E\x05\x1A\x0E\x02" +
        "\u010B\u010D\x05 \x11\x02\u010C\u010B\x03\x02\x02\x02\u010D\u0110\x03" +
        "\x02\x02\x02\u010E\u010C\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F" +
        "\x17\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0111\u0113\x05\x1A\x0E" +
        "\x02\u0112\u0114\x05 \x11\x02\u0113\u0112\x03\x02\x02\x02\u0114\u0115" +
        "\x03\x02\x02\x02\u0115\u0113\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02" +
        "\u0116\x19\x03\x02\x02\x02\u0117\u011D\x05\x1C\x0F\x02\u0118\u0119\x07" +
        "\x1D\x02\x02\u0119\u011A\x05\x14\v\x02\u011A\u011B\x07\x1E\x02\x02\u011B" +
        "\u011D\x03\x02\x02\x02\u011C\u0117\x03\x02\x02\x02\u011C\u0118\x03\x02" +
        "\x02\x02\u011D\x1B\x03\x02\x02\x02\u011E\u0125\x07:\x02\x02\u011F\u0120" +
        "\x07\x1D\x02\x02\u0120\u0121\x05\x14\v\x02\u0121\u0122\x07\x1E\x02\x02" +
        "\u0122\u0123\x05\x1E\x10\x02\u0123\u0125\x03\x02\x02\x02\u0124\u011E\x03" +
        "\x02\x02\x02\u0124\u011F\x03\x02\x02\x02\u0125\u0129\x03\x02\x02\x02\u0126" +
        "\u0128\x05\x1E\x10\x02\u0127\u0126\x03\x02\x02\x02\u0128\u012B\x03\x02" +
        "\x02\x02\u0129\u0127\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A" +
        "\x1D\x03\x02\x02\x02\u012B\u0129\x03\x02\x02\x02\u012C\u012E\x05 \x11" +
        "\x02\u012D\u012C\x03\x02\x02\x02\u012E\u0131\x03\x02\x02\x02\u012F\u012D" +
        "\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130\u0138\x03\x02\x02\x02" +
        "\u0131\u012F\x03\x02\x02\x02\u0132\u0133\x07\x1F\x02\x02\u0133\u0134\x05" +
        "\x14\v\x02\u0134\u0135\x07 \x02\x02\u0135\u0139\x03\x02\x02\x02\u0136" +
        "\u0137\x07\x17\x02\x02\u0137\u0139\x07:\x02\x02\u0138\u0132\x03\x02\x02" +
        "\x02\u0138\u0136\x03\x02\x02\x02\u0139\x1F\x03\x02\x02\x02\u013A\u013B" +
        "\x07\x18\x02\x02\u013B\u013D\x07:\x02\x02\u013C\u013A\x03\x02\x02\x02" +
        "\u013C\u013D\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u013F\x05" +
        "\"\x12\x02\u013F!\x03\x02\x02\x02\u0140\u0142\x07\x1D\x02\x02\u0141\u0143" +
        "\x05\x12\n\x02\u0142\u0141\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02" +
        "\u0143\u0144\x03\x02\x02\x02\u0144\u0148\x07\x1E\x02\x02\u0145\u0148\x05" +
        "*\x16\x02\u0146\u0148\x05F$\x02\u0147\u0140\x03\x02\x02\x02\u0147\u0145" +
        "\x03\x02\x02\x02\u0147\u0146\x03\x02\x02\x02\u0148#\x03\x02\x02\x02\u0149" +
        "\u014A\x07\x13\x02\x02\u014A\u014B\x05&\x14\x02\u014B%\x03\x02\x02\x02" +
        "\u014C\u014E\x07\x1D\x02\x02\u014D\u014F\x05(\x15\x02\u014E\u014D\x03" +
        "\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150" +
        "\u0151\x07\x1E\x02\x02\u0151\u0152\x05\x04\x03\x02\u0152\u0153\x07\b\x02" +
        "\x02\u0153\'\x03\x02\x02\x02\u0154\u0157\x05\x10\t\x02\u0155\u0156\x07" +
        "\x11\x02\x02\u0156\u0158\x07\x1C\x02\x02\u0157\u0155\x03\x02\x02\x02\u0157" +
        "\u0158\x03\x02\x02\x02\u0158\u015B\x03\x02\x02\x02\u0159\u015B\x07\x1C" +
        "\x02\x02\u015A\u0154\x03\x02\x02\x02\u015A\u0159\x03\x02\x02\x02\u015B" +
        ")\x03\x02\x02\x02\u015C\u015E\x07!\x02\x02\u015D\u015F\x05,\x17\x02\u015E" +
        "\u015D\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\u0160\x03\x02" +
        "\x02\x02\u0160\u0161\x07\"\x02\x02\u0161+\x03\x02\x02\x02\u0162\u0168" +
        "\x05.\x18\x02\u0163\u0164\x050\x19\x02\u0164\u0165\x05.\x18\x02\u0165" +
        "\u0167\x03\x02\x02\x02\u0166\u0163\x03\x02\x02\x02\u0167\u016A\x03\x02" +
        "\x02\x02\u0168\u0166\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169" +
        "\u016C\x03\x02\x02\x02\u016A\u0168\x03\x02\x02\x02\u016B\u016D\x050\x19" +
        "\x02\u016C\u016B\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D-\x03" +
        "\x02\x02\x02\u016E\u016F\x07\x1F\x02\x02\u016F\u0170\x05\x14\v\x02\u0170" +
        "\u0171\x07 \x02\x02\u0171\u0172\x07\x04\x02\x02\u0172\u0173\x05\x14\v" +
        "\x02\u0173\u0179\x03\x02\x02\x02\u0174\u0175\x07:\x02\x02\u0175\u0176" +
        "\x07\x04\x02\x02\u0176\u0179\x05\x14\v\x02\u0177\u0179\x05\x14\v\x02\u0178" +
        "\u016E\x03\x02\x02\x02\u0178\u0174\x03\x02\x02\x02\u0178\u0177\x03\x02" +
        "\x02\x02\u0179/\x03\x02\x02\x02\u017A\u017B\t\x02\x02\x02\u017B1\x03\x02" +
        "\x02\x02\u017C\u017D\x07#\x02\x02\u017D3\x03\x02\x02\x02\u017E\u017F\x07" +
        "$\x02\x02\u017F5\x03\x02\x02\x02\u0180\u0181\t\x03\x02\x02\u01817\x03" +
        "\x02\x02\x02\u0182\u0183\x07+\x02\x02\u01839\x03\x02\x02\x02\u0184\u0185" +
        "\t\x04\x02\x02\u0185;\x03\x02\x02\x02\u0186\u0187\t\x05\x02\x02\u0187" +
        "=\x03\x02\x02\x02\u0188\u0189\t\x06\x02\x02\u0189?\x03\x02\x02\x02\u018A" +
        "\u018B\t\x07\x02\x02\u018BA\x03\x02\x02\x02\u018C\u018D\x079\x02\x02\u018D" +
        "C\x03\x02\x02\x02\u018E\u018F\t\b\x02\x02\u018FE\x03\x02\x02\x02\u0190" +
        "\u0191\t\t\x02\x02\u0191G\x03\x02\x02\x02$NRx}\x89\xA3\xA5\xA9\xAC\xB7" +
        "\xBC\xC3\xCB\xD3\xE3\u0105\u0107\u010E\u0115\u011C\u0124\u0129\u012F\u0138" +
        "\u013C\u0142\u0147\u014E\u0157\u015A\u015E\u0168\u016C\u0178";
    return LuaParser;
}(Parser_1.Parser));
exports.LuaParser = LuaParser;
var ChunkContext = /** @class */ (function (_super) {
    __extends(ChunkContext, _super);
    function ChunkContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ChunkContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    ChunkContext.prototype.EOF = function () { return this.getToken(LuaParser.EOF, 0); };
    Object.defineProperty(ChunkContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_chunk; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ChunkContext.prototype.enterRule = function (listener) {
        if (listener.enterChunk) {
            listener.enterChunk(this);
        }
    };
    // @Override
    ChunkContext.prototype.exitRule = function (listener) {
        if (listener.exitChunk) {
            listener.exitChunk(this);
        }
    };
    // @Override
    ChunkContext.prototype.accept = function (visitor) {
        if (visitor.visitChunk) {
            return visitor.visitChunk(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ChunkContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ChunkContext = ChunkContext;
var BlockContext = /** @class */ (function (_super) {
    __extends(BlockContext, _super);
    function BlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockContext.prototype.stat = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatContext);
        }
        else {
            return this.getRuleContext(i, StatContext);
        }
    };
    BlockContext.prototype.retstat = function () {
        return this.tryGetRuleContext(0, RetstatContext);
    };
    Object.defineProperty(BlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_block; },
        enumerable: true,
        configurable: true
    });
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
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockContext = BlockContext;
var StatContext = /** @class */ (function (_super) {
    __extends(StatContext, _super);
    function StatContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatContext.prototype.varlist = function () {
        return this.tryGetRuleContext(0, VarlistContext);
    };
    StatContext.prototype.explist = function () {
        return this.tryGetRuleContext(0, ExplistContext);
    };
    StatContext.prototype.functioncall = function () {
        return this.tryGetRuleContext(0, FunctioncallContext);
    };
    StatContext.prototype.label = function () {
        return this.tryGetRuleContext(0, LabelContext);
    };
    StatContext.prototype.NAME = function () { return this.tryGetToken(LuaParser.NAME, 0); };
    StatContext.prototype.block = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BlockContext);
        }
        else {
            return this.getRuleContext(i, BlockContext);
        }
    };
    StatContext.prototype.exp = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    };
    StatContext.prototype.namelist = function () {
        return this.tryGetRuleContext(0, NamelistContext);
    };
    StatContext.prototype.funcname = function () {
        return this.tryGetRuleContext(0, FuncnameContext);
    };
    StatContext.prototype.funcbody = function () {
        return this.tryGetRuleContext(0, FuncbodyContext);
    };
    Object.defineProperty(StatContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_stat; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StatContext.prototype.enterRule = function (listener) {
        if (listener.enterStat) {
            listener.enterStat(this);
        }
    };
    // @Override
    StatContext.prototype.exitRule = function (listener) {
        if (listener.exitStat) {
            listener.exitStat(this);
        }
    };
    // @Override
    StatContext.prototype.accept = function (visitor) {
        if (visitor.visitStat) {
            return visitor.visitStat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StatContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StatContext = StatContext;
var RetstatContext = /** @class */ (function (_super) {
    __extends(RetstatContext, _super);
    function RetstatContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RetstatContext.prototype.explist = function () {
        return this.tryGetRuleContext(0, ExplistContext);
    };
    Object.defineProperty(RetstatContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_retstat; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RetstatContext.prototype.enterRule = function (listener) {
        if (listener.enterRetstat) {
            listener.enterRetstat(this);
        }
    };
    // @Override
    RetstatContext.prototype.exitRule = function (listener) {
        if (listener.exitRetstat) {
            listener.exitRetstat(this);
        }
    };
    // @Override
    RetstatContext.prototype.accept = function (visitor) {
        if (visitor.visitRetstat) {
            return visitor.visitRetstat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RetstatContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RetstatContext = RetstatContext;
var LabelContext = /** @class */ (function (_super) {
    __extends(LabelContext, _super);
    function LabelContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LabelContext.prototype.NAME = function () { return this.getToken(LuaParser.NAME, 0); };
    Object.defineProperty(LabelContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_label; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LabelContext.prototype.enterRule = function (listener) {
        if (listener.enterLabel) {
            listener.enterLabel(this);
        }
    };
    // @Override
    LabelContext.prototype.exitRule = function (listener) {
        if (listener.exitLabel) {
            listener.exitLabel(this);
        }
    };
    // @Override
    LabelContext.prototype.accept = function (visitor) {
        if (visitor.visitLabel) {
            return visitor.visitLabel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LabelContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LabelContext = LabelContext;
var FuncnameContext = /** @class */ (function (_super) {
    __extends(FuncnameContext, _super);
    function FuncnameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FuncnameContext.prototype.NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(LuaParser.NAME);
        }
        else {
            return this.getToken(LuaParser.NAME, i);
        }
    };
    Object.defineProperty(FuncnameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_funcname; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FuncnameContext.prototype.enterRule = function (listener) {
        if (listener.enterFuncname) {
            listener.enterFuncname(this);
        }
    };
    // @Override
    FuncnameContext.prototype.exitRule = function (listener) {
        if (listener.exitFuncname) {
            listener.exitFuncname(this);
        }
    };
    // @Override
    FuncnameContext.prototype.accept = function (visitor) {
        if (visitor.visitFuncname) {
            return visitor.visitFuncname(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FuncnameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FuncnameContext = FuncnameContext;
var VarlistContext = /** @class */ (function (_super) {
    __extends(VarlistContext, _super);
    function VarlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VarlistContext.prototype.var = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VarContext);
        }
        else {
            return this.getRuleContext(i, VarContext);
        }
    };
    Object.defineProperty(VarlistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_varlist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VarlistContext.prototype.enterRule = function (listener) {
        if (listener.enterVarlist) {
            listener.enterVarlist(this);
        }
    };
    // @Override
    VarlistContext.prototype.exitRule = function (listener) {
        if (listener.exitVarlist) {
            listener.exitVarlist(this);
        }
    };
    // @Override
    VarlistContext.prototype.accept = function (visitor) {
        if (visitor.visitVarlist) {
            return visitor.visitVarlist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VarlistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VarlistContext = VarlistContext;
var NamelistContext = /** @class */ (function (_super) {
    __extends(NamelistContext, _super);
    function NamelistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamelistContext.prototype.NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(LuaParser.NAME);
        }
        else {
            return this.getToken(LuaParser.NAME, i);
        }
    };
    Object.defineProperty(NamelistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_namelist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NamelistContext.prototype.enterRule = function (listener) {
        if (listener.enterNamelist) {
            listener.enterNamelist(this);
        }
    };
    // @Override
    NamelistContext.prototype.exitRule = function (listener) {
        if (listener.exitNamelist) {
            listener.exitNamelist(this);
        }
    };
    // @Override
    NamelistContext.prototype.accept = function (visitor) {
        if (visitor.visitNamelist) {
            return visitor.visitNamelist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NamelistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NamelistContext = NamelistContext;
var ExplistContext = /** @class */ (function (_super) {
    __extends(ExplistContext, _super);
    function ExplistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExplistContext.prototype.exp = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    };
    Object.defineProperty(ExplistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_explist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExplistContext.prototype.enterRule = function (listener) {
        if (listener.enterExplist) {
            listener.enterExplist(this);
        }
    };
    // @Override
    ExplistContext.prototype.exitRule = function (listener) {
        if (listener.exitExplist) {
            listener.exitExplist(this);
        }
    };
    // @Override
    ExplistContext.prototype.accept = function (visitor) {
        if (visitor.visitExplist) {
            return visitor.visitExplist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExplistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExplistContext = ExplistContext;
var ExpContext = /** @class */ (function (_super) {
    __extends(ExpContext, _super);
    function ExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    ExpContext.prototype.string = function () {
        return this.tryGetRuleContext(0, StringContext);
    };
    ExpContext.prototype.functiondef = function () {
        return this.tryGetRuleContext(0, FunctiondefContext);
    };
    ExpContext.prototype.prefixexp = function () {
        return this.tryGetRuleContext(0, PrefixexpContext);
    };
    ExpContext.prototype.tableconstructor = function () {
        return this.tryGetRuleContext(0, TableconstructorContext);
    };
    ExpContext.prototype.exp = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    };
    ExpContext.prototype.operatorPower = function () {
        return this.tryGetRuleContext(0, OperatorPowerContext);
    };
    ExpContext.prototype.operatorUnary = function () {
        return this.tryGetRuleContext(0, OperatorUnaryContext);
    };
    ExpContext.prototype.operatorMulDivMod = function () {
        return this.tryGetRuleContext(0, OperatorMulDivModContext);
    };
    ExpContext.prototype.operatorAddSub = function () {
        return this.tryGetRuleContext(0, OperatorAddSubContext);
    };
    ExpContext.prototype.operatorStrcat = function () {
        return this.tryGetRuleContext(0, OperatorStrcatContext);
    };
    ExpContext.prototype.operatorComparison = function () {
        return this.tryGetRuleContext(0, OperatorComparisonContext);
    };
    ExpContext.prototype.operatorAnd = function () {
        return this.tryGetRuleContext(0, OperatorAndContext);
    };
    ExpContext.prototype.operatorOr = function () {
        return this.tryGetRuleContext(0, OperatorOrContext);
    };
    ExpContext.prototype.operatorBitwise = function () {
        return this.tryGetRuleContext(0, OperatorBitwiseContext);
    };
    Object.defineProperty(ExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_exp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpContext.prototype.enterRule = function (listener) {
        if (listener.enterExp) {
            listener.enterExp(this);
        }
    };
    // @Override
    ExpContext.prototype.exitRule = function (listener) {
        if (listener.exitExp) {
            listener.exitExp(this);
        }
    };
    // @Override
    ExpContext.prototype.accept = function (visitor) {
        if (visitor.visitExp) {
            return visitor.visitExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpContext = ExpContext;
var PrefixexpContext = /** @class */ (function (_super) {
    __extends(PrefixexpContext, _super);
    function PrefixexpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrefixexpContext.prototype.varOrExp = function () {
        return this.getRuleContext(0, VarOrExpContext);
    };
    PrefixexpContext.prototype.nameAndArgs = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NameAndArgsContext);
        }
        else {
            return this.getRuleContext(i, NameAndArgsContext);
        }
    };
    Object.defineProperty(PrefixexpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_prefixexp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrefixexpContext.prototype.enterRule = function (listener) {
        if (listener.enterPrefixexp) {
            listener.enterPrefixexp(this);
        }
    };
    // @Override
    PrefixexpContext.prototype.exitRule = function (listener) {
        if (listener.exitPrefixexp) {
            listener.exitPrefixexp(this);
        }
    };
    // @Override
    PrefixexpContext.prototype.accept = function (visitor) {
        if (visitor.visitPrefixexp) {
            return visitor.visitPrefixexp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrefixexpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrefixexpContext = PrefixexpContext;
var FunctioncallContext = /** @class */ (function (_super) {
    __extends(FunctioncallContext, _super);
    function FunctioncallContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctioncallContext.prototype.varOrExp = function () {
        return this.getRuleContext(0, VarOrExpContext);
    };
    FunctioncallContext.prototype.nameAndArgs = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NameAndArgsContext);
        }
        else {
            return this.getRuleContext(i, NameAndArgsContext);
        }
    };
    Object.defineProperty(FunctioncallContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_functioncall; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctioncallContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctioncall) {
            listener.enterFunctioncall(this);
        }
    };
    // @Override
    FunctioncallContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctioncall) {
            listener.exitFunctioncall(this);
        }
    };
    // @Override
    FunctioncallContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctioncall) {
            return visitor.visitFunctioncall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctioncallContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctioncallContext = FunctioncallContext;
var VarOrExpContext = /** @class */ (function (_super) {
    __extends(VarOrExpContext, _super);
    function VarOrExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VarOrExpContext.prototype.var = function () {
        return this.tryGetRuleContext(0, VarContext);
    };
    VarOrExpContext.prototype.exp = function () {
        return this.tryGetRuleContext(0, ExpContext);
    };
    Object.defineProperty(VarOrExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_varOrExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VarOrExpContext.prototype.enterRule = function (listener) {
        if (listener.enterVarOrExp) {
            listener.enterVarOrExp(this);
        }
    };
    // @Override
    VarOrExpContext.prototype.exitRule = function (listener) {
        if (listener.exitVarOrExp) {
            listener.exitVarOrExp(this);
        }
    };
    // @Override
    VarOrExpContext.prototype.accept = function (visitor) {
        if (visitor.visitVarOrExp) {
            return visitor.visitVarOrExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VarOrExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VarOrExpContext = VarOrExpContext;
var VarContext = /** @class */ (function (_super) {
    __extends(VarContext, _super);
    function VarContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VarContext.prototype.NAME = function () { return this.tryGetToken(LuaParser.NAME, 0); };
    VarContext.prototype.exp = function () {
        return this.tryGetRuleContext(0, ExpContext);
    };
    VarContext.prototype.varSuffix = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VarSuffixContext);
        }
        else {
            return this.getRuleContext(i, VarSuffixContext);
        }
    };
    Object.defineProperty(VarContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_var; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VarContext.prototype.enterRule = function (listener) {
        if (listener.enterVar) {
            listener.enterVar(this);
        }
    };
    // @Override
    VarContext.prototype.exitRule = function (listener) {
        if (listener.exitVar) {
            listener.exitVar(this);
        }
    };
    // @Override
    VarContext.prototype.accept = function (visitor) {
        if (visitor.visitVar) {
            return visitor.visitVar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VarContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VarContext = VarContext;
var VarSuffixContext = /** @class */ (function (_super) {
    __extends(VarSuffixContext, _super);
    function VarSuffixContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VarSuffixContext.prototype.exp = function () {
        return this.tryGetRuleContext(0, ExpContext);
    };
    VarSuffixContext.prototype.NAME = function () { return this.tryGetToken(LuaParser.NAME, 0); };
    VarSuffixContext.prototype.nameAndArgs = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NameAndArgsContext);
        }
        else {
            return this.getRuleContext(i, NameAndArgsContext);
        }
    };
    Object.defineProperty(VarSuffixContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_varSuffix; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VarSuffixContext.prototype.enterRule = function (listener) {
        if (listener.enterVarSuffix) {
            listener.enterVarSuffix(this);
        }
    };
    // @Override
    VarSuffixContext.prototype.exitRule = function (listener) {
        if (listener.exitVarSuffix) {
            listener.exitVarSuffix(this);
        }
    };
    // @Override
    VarSuffixContext.prototype.accept = function (visitor) {
        if (visitor.visitVarSuffix) {
            return visitor.visitVarSuffix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VarSuffixContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VarSuffixContext = VarSuffixContext;
var NameAndArgsContext = /** @class */ (function (_super) {
    __extends(NameAndArgsContext, _super);
    function NameAndArgsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NameAndArgsContext.prototype.args = function () {
        return this.getRuleContext(0, ArgsContext);
    };
    NameAndArgsContext.prototype.NAME = function () { return this.tryGetToken(LuaParser.NAME, 0); };
    Object.defineProperty(NameAndArgsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_nameAndArgs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NameAndArgsContext.prototype.enterRule = function (listener) {
        if (listener.enterNameAndArgs) {
            listener.enterNameAndArgs(this);
        }
    };
    // @Override
    NameAndArgsContext.prototype.exitRule = function (listener) {
        if (listener.exitNameAndArgs) {
            listener.exitNameAndArgs(this);
        }
    };
    // @Override
    NameAndArgsContext.prototype.accept = function (visitor) {
        if (visitor.visitNameAndArgs) {
            return visitor.visitNameAndArgs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NameAndArgsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NameAndArgsContext = NameAndArgsContext;
var ArgsContext = /** @class */ (function (_super) {
    __extends(ArgsContext, _super);
    function ArgsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgsContext.prototype.explist = function () {
        return this.tryGetRuleContext(0, ExplistContext);
    };
    ArgsContext.prototype.tableconstructor = function () {
        return this.tryGetRuleContext(0, TableconstructorContext);
    };
    ArgsContext.prototype.string = function () {
        return this.tryGetRuleContext(0, StringContext);
    };
    Object.defineProperty(ArgsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_args; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArgsContext.prototype.enterRule = function (listener) {
        if (listener.enterArgs) {
            listener.enterArgs(this);
        }
    };
    // @Override
    ArgsContext.prototype.exitRule = function (listener) {
        if (listener.exitArgs) {
            listener.exitArgs(this);
        }
    };
    // @Override
    ArgsContext.prototype.accept = function (visitor) {
        if (visitor.visitArgs) {
            return visitor.visitArgs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgsContext = ArgsContext;
var FunctiondefContext = /** @class */ (function (_super) {
    __extends(FunctiondefContext, _super);
    function FunctiondefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctiondefContext.prototype.funcbody = function () {
        return this.getRuleContext(0, FuncbodyContext);
    };
    Object.defineProperty(FunctiondefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_functiondef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctiondefContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctiondef) {
            listener.enterFunctiondef(this);
        }
    };
    // @Override
    FunctiondefContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctiondef) {
            listener.exitFunctiondef(this);
        }
    };
    // @Override
    FunctiondefContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctiondef) {
            return visitor.visitFunctiondef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctiondefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctiondefContext = FunctiondefContext;
var FuncbodyContext = /** @class */ (function (_super) {
    __extends(FuncbodyContext, _super);
    function FuncbodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FuncbodyContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    FuncbodyContext.prototype.parlist = function () {
        return this.tryGetRuleContext(0, ParlistContext);
    };
    Object.defineProperty(FuncbodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_funcbody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FuncbodyContext.prototype.enterRule = function (listener) {
        if (listener.enterFuncbody) {
            listener.enterFuncbody(this);
        }
    };
    // @Override
    FuncbodyContext.prototype.exitRule = function (listener) {
        if (listener.exitFuncbody) {
            listener.exitFuncbody(this);
        }
    };
    // @Override
    FuncbodyContext.prototype.accept = function (visitor) {
        if (visitor.visitFuncbody) {
            return visitor.visitFuncbody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FuncbodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FuncbodyContext = FuncbodyContext;
var ParlistContext = /** @class */ (function (_super) {
    __extends(ParlistContext, _super);
    function ParlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParlistContext.prototype.namelist = function () {
        return this.tryGetRuleContext(0, NamelistContext);
    };
    Object.defineProperty(ParlistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_parlist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParlistContext.prototype.enterRule = function (listener) {
        if (listener.enterParlist) {
            listener.enterParlist(this);
        }
    };
    // @Override
    ParlistContext.prototype.exitRule = function (listener) {
        if (listener.exitParlist) {
            listener.exitParlist(this);
        }
    };
    // @Override
    ParlistContext.prototype.accept = function (visitor) {
        if (visitor.visitParlist) {
            return visitor.visitParlist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParlistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParlistContext = ParlistContext;
var TableconstructorContext = /** @class */ (function (_super) {
    __extends(TableconstructorContext, _super);
    function TableconstructorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TableconstructorContext.prototype.fieldlist = function () {
        return this.tryGetRuleContext(0, FieldlistContext);
    };
    Object.defineProperty(TableconstructorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_tableconstructor; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TableconstructorContext.prototype.enterRule = function (listener) {
        if (listener.enterTableconstructor) {
            listener.enterTableconstructor(this);
        }
    };
    // @Override
    TableconstructorContext.prototype.exitRule = function (listener) {
        if (listener.exitTableconstructor) {
            listener.exitTableconstructor(this);
        }
    };
    // @Override
    TableconstructorContext.prototype.accept = function (visitor) {
        if (visitor.visitTableconstructor) {
            return visitor.visitTableconstructor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TableconstructorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TableconstructorContext = TableconstructorContext;
var FieldlistContext = /** @class */ (function (_super) {
    __extends(FieldlistContext, _super);
    function FieldlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldlistContext.prototype.field = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldContext);
        }
        else {
            return this.getRuleContext(i, FieldContext);
        }
    };
    FieldlistContext.prototype.fieldsep = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldsepContext);
        }
        else {
            return this.getRuleContext(i, FieldsepContext);
        }
    };
    Object.defineProperty(FieldlistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_fieldlist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FieldlistContext.prototype.enterRule = function (listener) {
        if (listener.enterFieldlist) {
            listener.enterFieldlist(this);
        }
    };
    // @Override
    FieldlistContext.prototype.exitRule = function (listener) {
        if (listener.exitFieldlist) {
            listener.exitFieldlist(this);
        }
    };
    // @Override
    FieldlistContext.prototype.accept = function (visitor) {
        if (visitor.visitFieldlist) {
            return visitor.visitFieldlist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FieldlistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FieldlistContext = FieldlistContext;
var FieldContext = /** @class */ (function (_super) {
    __extends(FieldContext, _super);
    function FieldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldContext.prototype.exp = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    };
    FieldContext.prototype.NAME = function () { return this.tryGetToken(LuaParser.NAME, 0); };
    Object.defineProperty(FieldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_field; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FieldContext.prototype.enterRule = function (listener) {
        if (listener.enterField) {
            listener.enterField(this);
        }
    };
    // @Override
    FieldContext.prototype.exitRule = function (listener) {
        if (listener.exitField) {
            listener.exitField(this);
        }
    };
    // @Override
    FieldContext.prototype.accept = function (visitor) {
        if (visitor.visitField) {
            return visitor.visitField(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FieldContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FieldContext = FieldContext;
var FieldsepContext = /** @class */ (function (_super) {
    __extends(FieldsepContext, _super);
    function FieldsepContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(FieldsepContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_fieldsep; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FieldsepContext.prototype.enterRule = function (listener) {
        if (listener.enterFieldsep) {
            listener.enterFieldsep(this);
        }
    };
    // @Override
    FieldsepContext.prototype.exitRule = function (listener) {
        if (listener.exitFieldsep) {
            listener.exitFieldsep(this);
        }
    };
    // @Override
    FieldsepContext.prototype.accept = function (visitor) {
        if (visitor.visitFieldsep) {
            return visitor.visitFieldsep(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FieldsepContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FieldsepContext = FieldsepContext;
var OperatorOrContext = /** @class */ (function (_super) {
    __extends(OperatorOrContext, _super);
    function OperatorOrContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(OperatorOrContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_operatorOr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OperatorOrContext.prototype.enterRule = function (listener) {
        if (listener.enterOperatorOr) {
            listener.enterOperatorOr(this);
        }
    };
    // @Override
    OperatorOrContext.prototype.exitRule = function (listener) {
        if (listener.exitOperatorOr) {
            listener.exitOperatorOr(this);
        }
    };
    // @Override
    OperatorOrContext.prototype.accept = function (visitor) {
        if (visitor.visitOperatorOr) {
            return visitor.visitOperatorOr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperatorOrContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperatorOrContext = OperatorOrContext;
var OperatorAndContext = /** @class */ (function (_super) {
    __extends(OperatorAndContext, _super);
    function OperatorAndContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(OperatorAndContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_operatorAnd; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OperatorAndContext.prototype.enterRule = function (listener) {
        if (listener.enterOperatorAnd) {
            listener.enterOperatorAnd(this);
        }
    };
    // @Override
    OperatorAndContext.prototype.exitRule = function (listener) {
        if (listener.exitOperatorAnd) {
            listener.exitOperatorAnd(this);
        }
    };
    // @Override
    OperatorAndContext.prototype.accept = function (visitor) {
        if (visitor.visitOperatorAnd) {
            return visitor.visitOperatorAnd(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperatorAndContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperatorAndContext = OperatorAndContext;
var OperatorComparisonContext = /** @class */ (function (_super) {
    __extends(OperatorComparisonContext, _super);
    function OperatorComparisonContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(OperatorComparisonContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_operatorComparison; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OperatorComparisonContext.prototype.enterRule = function (listener) {
        if (listener.enterOperatorComparison) {
            listener.enterOperatorComparison(this);
        }
    };
    // @Override
    OperatorComparisonContext.prototype.exitRule = function (listener) {
        if (listener.exitOperatorComparison) {
            listener.exitOperatorComparison(this);
        }
    };
    // @Override
    OperatorComparisonContext.prototype.accept = function (visitor) {
        if (visitor.visitOperatorComparison) {
            return visitor.visitOperatorComparison(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperatorComparisonContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperatorComparisonContext = OperatorComparisonContext;
var OperatorStrcatContext = /** @class */ (function (_super) {
    __extends(OperatorStrcatContext, _super);
    function OperatorStrcatContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(OperatorStrcatContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_operatorStrcat; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OperatorStrcatContext.prototype.enterRule = function (listener) {
        if (listener.enterOperatorStrcat) {
            listener.enterOperatorStrcat(this);
        }
    };
    // @Override
    OperatorStrcatContext.prototype.exitRule = function (listener) {
        if (listener.exitOperatorStrcat) {
            listener.exitOperatorStrcat(this);
        }
    };
    // @Override
    OperatorStrcatContext.prototype.accept = function (visitor) {
        if (visitor.visitOperatorStrcat) {
            return visitor.visitOperatorStrcat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperatorStrcatContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperatorStrcatContext = OperatorStrcatContext;
var OperatorAddSubContext = /** @class */ (function (_super) {
    __extends(OperatorAddSubContext, _super);
    function OperatorAddSubContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(OperatorAddSubContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_operatorAddSub; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OperatorAddSubContext.prototype.enterRule = function (listener) {
        if (listener.enterOperatorAddSub) {
            listener.enterOperatorAddSub(this);
        }
    };
    // @Override
    OperatorAddSubContext.prototype.exitRule = function (listener) {
        if (listener.exitOperatorAddSub) {
            listener.exitOperatorAddSub(this);
        }
    };
    // @Override
    OperatorAddSubContext.prototype.accept = function (visitor) {
        if (visitor.visitOperatorAddSub) {
            return visitor.visitOperatorAddSub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperatorAddSubContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperatorAddSubContext = OperatorAddSubContext;
var OperatorMulDivModContext = /** @class */ (function (_super) {
    __extends(OperatorMulDivModContext, _super);
    function OperatorMulDivModContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(OperatorMulDivModContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_operatorMulDivMod; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OperatorMulDivModContext.prototype.enterRule = function (listener) {
        if (listener.enterOperatorMulDivMod) {
            listener.enterOperatorMulDivMod(this);
        }
    };
    // @Override
    OperatorMulDivModContext.prototype.exitRule = function (listener) {
        if (listener.exitOperatorMulDivMod) {
            listener.exitOperatorMulDivMod(this);
        }
    };
    // @Override
    OperatorMulDivModContext.prototype.accept = function (visitor) {
        if (visitor.visitOperatorMulDivMod) {
            return visitor.visitOperatorMulDivMod(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperatorMulDivModContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperatorMulDivModContext = OperatorMulDivModContext;
var OperatorBitwiseContext = /** @class */ (function (_super) {
    __extends(OperatorBitwiseContext, _super);
    function OperatorBitwiseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(OperatorBitwiseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_operatorBitwise; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OperatorBitwiseContext.prototype.enterRule = function (listener) {
        if (listener.enterOperatorBitwise) {
            listener.enterOperatorBitwise(this);
        }
    };
    // @Override
    OperatorBitwiseContext.prototype.exitRule = function (listener) {
        if (listener.exitOperatorBitwise) {
            listener.exitOperatorBitwise(this);
        }
    };
    // @Override
    OperatorBitwiseContext.prototype.accept = function (visitor) {
        if (visitor.visitOperatorBitwise) {
            return visitor.visitOperatorBitwise(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperatorBitwiseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperatorBitwiseContext = OperatorBitwiseContext;
var OperatorUnaryContext = /** @class */ (function (_super) {
    __extends(OperatorUnaryContext, _super);
    function OperatorUnaryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(OperatorUnaryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_operatorUnary; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OperatorUnaryContext.prototype.enterRule = function (listener) {
        if (listener.enterOperatorUnary) {
            listener.enterOperatorUnary(this);
        }
    };
    // @Override
    OperatorUnaryContext.prototype.exitRule = function (listener) {
        if (listener.exitOperatorUnary) {
            listener.exitOperatorUnary(this);
        }
    };
    // @Override
    OperatorUnaryContext.prototype.accept = function (visitor) {
        if (visitor.visitOperatorUnary) {
            return visitor.visitOperatorUnary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperatorUnaryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperatorUnaryContext = OperatorUnaryContext;
var OperatorPowerContext = /** @class */ (function (_super) {
    __extends(OperatorPowerContext, _super);
    function OperatorPowerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(OperatorPowerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_operatorPower; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OperatorPowerContext.prototype.enterRule = function (listener) {
        if (listener.enterOperatorPower) {
            listener.enterOperatorPower(this);
        }
    };
    // @Override
    OperatorPowerContext.prototype.exitRule = function (listener) {
        if (listener.exitOperatorPower) {
            listener.exitOperatorPower(this);
        }
    };
    // @Override
    OperatorPowerContext.prototype.accept = function (visitor) {
        if (visitor.visitOperatorPower) {
            return visitor.visitOperatorPower(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperatorPowerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperatorPowerContext = OperatorPowerContext;
var NumberContext = /** @class */ (function (_super) {
    __extends(NumberContext, _super);
    function NumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumberContext.prototype.INT = function () { return this.tryGetToken(LuaParser.INT, 0); };
    NumberContext.prototype.HEX = function () { return this.tryGetToken(LuaParser.HEX, 0); };
    NumberContext.prototype.FLOAT = function () { return this.tryGetToken(LuaParser.FLOAT, 0); };
    NumberContext.prototype.HEX_FLOAT = function () { return this.tryGetToken(LuaParser.HEX_FLOAT, 0); };
    Object.defineProperty(NumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_number; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NumberContext.prototype.enterRule = function (listener) {
        if (listener.enterNumber) {
            listener.enterNumber(this);
        }
    };
    // @Override
    NumberContext.prototype.exitRule = function (listener) {
        if (listener.exitNumber) {
            listener.exitNumber(this);
        }
    };
    // @Override
    NumberContext.prototype.accept = function (visitor) {
        if (visitor.visitNumber) {
            return visitor.visitNumber(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumberContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NumberContext = NumberContext;
var StringContext = /** @class */ (function (_super) {
    __extends(StringContext, _super);
    function StringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringContext.prototype.NORMALSTRING = function () { return this.tryGetToken(LuaParser.NORMALSTRING, 0); };
    StringContext.prototype.CHARSTRING = function () { return this.tryGetToken(LuaParser.CHARSTRING, 0); };
    StringContext.prototype.LONGSTRING = function () { return this.tryGetToken(LuaParser.LONGSTRING, 0); };
    Object.defineProperty(StringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LuaParser.RULE_string; },
        enumerable: true,
        configurable: true
    });
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
}(ParserRuleContext_1.ParserRuleContext));
exports.StringContext = StringContext;
