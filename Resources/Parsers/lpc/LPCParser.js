"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/lpc/LPC.g4 by ANTLR 4.7.3-SNAPSHOT
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
var LPCParser = /** @class */ (function (_super) {
    __extends(LPCParser, _super);
    function LPCParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(LPCParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(LPCParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return LPCParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LPCParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "LPC.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LPCParser.prototype, "ruleNames", {
        // @Override
        get: function () { return LPCParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LPCParser.prototype, "serializedATN", {
        // @Override
        get: function () { return LPCParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    LPCParser.prototype.lpc_program = function () {
        var _localctx = new Lpc_programContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, LPCParser.RULE_lpc_program);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 152;
                this.program(0);
                this.state = 153;
                this.match(LPCParser.EOF);
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
    LPCParser.prototype.program = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ProgramContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 2;
        this.enterRecursionRule(_localctx, 2, LPCParser.RULE_program, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 162;
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
                                _localctx = new ProgramContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_program);
                                this.state = 156;
                                if (!(this.precpred(this._ctx, 2))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                }
                                this.state = 157;
                                this.defination();
                                this.state = 158;
                                this.possible_semi_colon();
                            }
                        }
                    }
                    this.state = 164;
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
    LPCParser.prototype.possible_semi_colon = function () {
        var _localctx = new Possible_semi_colonContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, LPCParser.RULE_possible_semi_colon);
        try {
            this.state = 167;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 166;
                        this.match(LPCParser.T__0);
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
    LPCParser.prototype.defination = function () {
        var _localctx = new DefinationContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, LPCParser.RULE_defination);
        try {
            this.state = 177;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 169;
                        this.function_defination();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 170;
                        this.data_type();
                        this.state = 171;
                        this.name_list();
                        this.state = 172;
                        this.match(LPCParser.T__0);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 174;
                        this.inheritance();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 175;
                        this.type_decl();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 176;
                        this.modifier_change();
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
    LPCParser.prototype.function_defination = function () {
        var _localctx = new Function_definationContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, LPCParser.RULE_function_defination);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 179;
                this.data_type();
                this.state = 180;
                this.optional_star();
                this.state = 181;
                this.identifier();
                this.state = 182;
                this.match(LPCParser.T__1);
                this.state = 183;
                this.argument();
                this.state = 184;
                this.match(LPCParser.T__2);
                this.state = 185;
                this.block_or_semi();
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
    LPCParser.prototype.modifier_change = function () {
        var _localctx = new Modifier_changeContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, LPCParser.RULE_modifier_change);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 187;
                this.type_modifier_list();
                this.state = 188;
                this.match(LPCParser.Colon);
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
    LPCParser.prototype.type_modifier_list = function () {
        var _localctx = new Type_modifier_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, LPCParser.RULE_type_modifier_list);
        try {
            this.state = 193;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 191;
                        this.match(LPCParser.TypeModifier);
                        this.state = 192;
                        this.type_modifier_list();
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
    LPCParser.prototype.type_decl = function () {
        var _localctx = new Type_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, LPCParser.RULE_type_decl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 195;
                this.type_modifier_list();
                this.state = 196;
                this.match(LPCParser.Class);
                this.state = 197;
                this.identifier();
                this.state = 198;
                this.match(LPCParser.T__3);
                this.state = 199;
                this.member_list(0);
                this.state = 200;
                this.match(LPCParser.T__4);
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
    LPCParser.prototype.member_list = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Member_listContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 16;
        this.enterRecursionRule(_localctx, 16, LPCParser.RULE_member_list, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 210;
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
                                _localctx = new Member_listContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_member_list);
                                this.state = 203;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 204;
                                this.data_type();
                                this.state = 205;
                                this.member_name_list();
                                this.state = 206;
                                this.match(LPCParser.T__0);
                            }
                        }
                    }
                    this.state = 212;
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
    LPCParser.prototype.member_name_list = function () {
        var _localctx = new Member_name_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, LPCParser.RULE_member_name_list);
        try {
            this.state = 218;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 213;
                        this.member_name();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 214;
                        this.member_name();
                        this.state = 215;
                        this.match(LPCParser.T__5);
                        this.state = 216;
                        this.member_name_list();
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
    LPCParser.prototype.member_name = function () {
        var _localctx = new Member_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, LPCParser.RULE_member_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 220;
                this.optional_star();
                this.state = 221;
                this.identifier();
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
    LPCParser.prototype.name_list = function () {
        var _localctx = new Name_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, LPCParser.RULE_name_list);
        try {
            this.state = 228;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 223;
                        this.new_name();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 224;
                        this.new_name();
                        this.state = 225;
                        this.match(LPCParser.T__5);
                        this.state = 226;
                        this.name_list();
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
    LPCParser.prototype.new_name = function () {
        var _localctx = new New_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, LPCParser.RULE_new_name);
        try {
            this.state = 238;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 230;
                        this.optional_star();
                        this.state = 231;
                        this.identifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 233;
                        this.optional_star();
                        this.state = 234;
                        this.identifier();
                        this.state = 235;
                        this.match(LPCParser.Assign);
                        this.state = 236;
                        this.expr0(0);
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
    LPCParser.prototype.expr0 = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Expr0Context(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 26;
        this.enterRecursionRule(_localctx, 26, LPCParser.RULE_expr0, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 270;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                    case 1:
                        {
                            this.state = 241;
                            this.expr4(0);
                            this.state = 242;
                            this.match(LPCParser.Assign);
                            this.state = 243;
                            this.expr0(29);
                        }
                        break;
                    case 2:
                        {
                            this.state = 245;
                            this.cast();
                            this.state = 246;
                            this.expr0(14);
                        }
                        break;
                    case 3:
                        {
                            this.state = 248;
                            this.match(LPCParser.PlusPlus);
                            this.state = 249;
                            this.expr4(0);
                        }
                        break;
                    case 4:
                        {
                            this.state = 250;
                            this.match(LPCParser.MinusMinus);
                            this.state = 251;
                            this.expr4(0);
                        }
                        break;
                    case 5:
                        {
                            this.state = 252;
                            this.match(LPCParser.Not);
                            this.state = 253;
                            this.expr0(11);
                        }
                        break;
                    case 6:
                        {
                            this.state = 254;
                            this.match(LPCParser.T__12);
                            this.state = 255;
                            this.expr0(10);
                        }
                        break;
                    case 7:
                        {
                            this.state = 256;
                            this.match(LPCParser.T__11);
                            this.state = 257;
                            this.expr0(9);
                        }
                        break;
                    case 8:
                        {
                            this.state = 258;
                            this.expr4(0);
                            this.state = 259;
                            this.match(LPCParser.PlusPlus);
                        }
                        break;
                    case 9:
                        {
                            this.state = 261;
                            this.expr4(0);
                            this.state = 262;
                            this.match(LPCParser.MinusMinus);
                        }
                        break;
                    case 10:
                        {
                            this.state = 264;
                            this.expr4(0);
                        }
                        break;
                    case 11:
                        {
                            this.state = 265;
                            this.sscanf();
                        }
                        break;
                    case 12:
                        {
                            this.state = 266;
                            this.parse_command();
                        }
                        break;
                    case 13:
                        {
                            this.state = 267;
                            this.time_expression();
                        }
                        break;
                    case 14:
                        {
                            this.state = 268;
                            this.match(LPCParser.Number);
                        }
                        break;
                    case 15:
                        {
                            this.state = 269;
                            this.match(LPCParser.Real);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 319;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 317;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new Expr0Context(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_expr0);
                                        this.state = 272;
                                        if (!(this.precpred(this._ctx, 28))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 28)");
                                        }
                                        this.state = 273;
                                        this.match(LPCParser.Question);
                                        this.state = 274;
                                        this.expr0(0);
                                        this.state = 275;
                                        this.match(LPCParser.Colon);
                                        this.state = 276;
                                        this.expr0(29);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new Expr0Context(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_expr0);
                                        this.state = 278;
                                        if (!(this.precpred(this._ctx, 27))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 27)");
                                        }
                                        this.state = 279;
                                        this.match(LPCParser.OrOr);
                                        this.state = 280;
                                        this.expr0(28);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new Expr0Context(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_expr0);
                                        this.state = 281;
                                        if (!(this.precpred(this._ctx, 26))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 26)");
                                        }
                                        this.state = 282;
                                        this.match(LPCParser.AndAnd);
                                        this.state = 283;
                                        this.expr0(27);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new Expr0Context(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_expr0);
                                        this.state = 284;
                                        if (!(this.precpred(this._ctx, 25))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
                                        }
                                        this.state = 285;
                                        this.match(LPCParser.Or);
                                        this.state = 286;
                                        this.expr0(26);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new Expr0Context(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_expr0);
                                        this.state = 287;
                                        if (!(this.precpred(this._ctx, 24))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 24)");
                                        }
                                        this.state = 288;
                                        this.match(LPCParser.Caret);
                                        this.state = 289;
                                        this.expr0(25);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new Expr0Context(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_expr0);
                                        this.state = 290;
                                        if (!(this.precpred(this._ctx, 23))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 23)");
                                        }
                                        this.state = 291;
                                        this.match(LPCParser.And);
                                        this.state = 292;
                                        this.expr0(24);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new Expr0Context(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_expr0);
                                        this.state = 293;
                                        if (!(this.precpred(this._ctx, 22))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
                                        }
                                        this.state = 294;
                                        this.match(LPCParser.Equal);
                                        this.state = 295;
                                        this.expr0(23);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new Expr0Context(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_expr0);
                                        this.state = 296;
                                        if (!(this.precpred(this._ctx, 21))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
                                        }
                                        this.state = 297;
                                        this.match(LPCParser.NotEqual);
                                        this.state = 298;
                                        this.expr0(22);
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new Expr0Context(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_expr0);
                                        this.state = 299;
                                        if (!(this.precpred(this._ctx, 20))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
                                        }
                                        this.state = 300;
                                        this.match(LPCParser.Compare);
                                        this.state = 301;
                                        this.expr0(21);
                                    }
                                    break;
                                case 10:
                                    {
                                        _localctx = new Expr0Context(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_expr0);
                                        this.state = 302;
                                        if (!(this.precpred(this._ctx, 19))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                                        }
                                        this.state = 303;
                                        this.match(LPCParser.T__6);
                                        this.state = 304;
                                        this.expr0(20);
                                    }
                                    break;
                                case 11:
                                    {
                                        _localctx = new Expr0Context(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_expr0);
                                        this.state = 305;
                                        if (!(this.precpred(this._ctx, 18))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                                        }
                                        this.state = 306;
                                        this.match(LPCParser.LeftShift);
                                        this.state = 307;
                                        this.expr0(19);
                                    }
                                    break;
                                case 12:
                                    {
                                        _localctx = new Expr0Context(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_expr0);
                                        this.state = 308;
                                        if (!(this.precpred(this._ctx, 17))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                                        }
                                        this.state = 309;
                                        this.match(LPCParser.RightShift);
                                        this.state = 310;
                                        this.expr0(18);
                                    }
                                    break;
                                case 13:
                                    {
                                        _localctx = new Expr0Context(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_expr0);
                                        this.state = 311;
                                        if (!(this.precpred(this._ctx, 16))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                                        }
                                        this.state = 312;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LPCParser.T__7) | (1 << LPCParser.T__8) | (1 << LPCParser.T__9))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 313;
                                        this.expr0(17);
                                    }
                                    break;
                                case 14:
                                    {
                                        _localctx = new Expr0Context(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_expr0);
                                        this.state = 314;
                                        if (!(this.precpred(this._ctx, 15))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                                        }
                                        this.state = 315;
                                        _la = this._input.LA(1);
                                        if (!(_la === LPCParser.T__10 || _la === LPCParser.T__11)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 316;
                                        this.expr0(16);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 321;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
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
    LPCParser.prototype.time_expression = function () {
        var _localctx = new Time_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, LPCParser.RULE_time_expression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 322;
                this.match(LPCParser.TimeExpression);
                this.state = 323;
                this.expr_or_block();
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
    LPCParser.prototype.expr_or_block = function () {
        var _localctx = new Expr_or_blockContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, LPCParser.RULE_expr_or_block);
        try {
            this.state = 330;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case LPCParser.T__3:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 325;
                        this.block();
                    }
                    break;
                case LPCParser.T__1:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 326;
                        this.match(LPCParser.T__1);
                        this.state = 327;
                        this.comma_expr(0);
                        this.state = 328;
                        this.match(LPCParser.T__2);
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
    LPCParser.prototype.comma_expr = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Comma_exprContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 32;
        this.enterRecursionRule(_localctx, 32, LPCParser.RULE_comma_expr, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 333;
                    this.expr0(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 340;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new Comma_exprContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_comma_expr);
                                this.state = 335;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 336;
                                this.match(LPCParser.T__5);
                                this.state = 337;
                                this.expr0(0);
                            }
                        }
                    }
                    this.state = 342;
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    LPCParser.prototype.parse_command = function () {
        var _localctx = new Parse_commandContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, LPCParser.RULE_parse_command);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 343;
                this.match(LPCParser.ParseCommand);
                this.state = 344;
                this.match(LPCParser.T__1);
                this.state = 345;
                this.expr0(0);
                this.state = 346;
                this.match(LPCParser.T__5);
                this.state = 347;
                this.expr0(0);
                this.state = 348;
                this.match(LPCParser.T__5);
                this.state = 349;
                this.expr0(0);
                this.state = 350;
                this.lvalue_list();
                this.state = 351;
                this.match(LPCParser.T__2);
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
    LPCParser.prototype.sscanf = function () {
        var _localctx = new SscanfContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, LPCParser.RULE_sscanf);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 353;
                this.match(LPCParser.SScanf);
                this.state = 354;
                this.match(LPCParser.T__1);
                this.state = 355;
                this.expr0(0);
                this.state = 356;
                this.match(LPCParser.T__5);
                this.state = 357;
                this.expr0(0);
                this.state = 358;
                this.lvalue_list();
                this.state = 359;
                this.match(LPCParser.T__2);
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
    LPCParser.prototype.lvalue_list = function () {
        var _localctx = new Lvalue_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, LPCParser.RULE_lvalue_list);
        try {
            this.state = 366;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case LPCParser.T__2:
                    this.enterOuterAlt(_localctx, 1);
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case LPCParser.T__5:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 362;
                        this.match(LPCParser.T__5);
                        this.state = 363;
                        this.expr4(0);
                        this.state = 364;
                        this.lvalue_list();
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
    LPCParser.prototype.cast = function () {
        var _localctx = new CastContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, LPCParser.RULE_cast);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 368;
                this.match(LPCParser.T__1);
                this.state = 369;
                this.basic_type();
                this.state = 370;
                this.optional_star();
                this.state = 371;
                this.match(LPCParser.T__2);
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
    LPCParser.prototype.basic_type = function () {
        var _localctx = new Basic_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, LPCParser.RULE_basic_type);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 373;
                this.atomic_type();
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
    LPCParser.prototype.atomic_type = function () {
        var _localctx = new Atomic_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, LPCParser.RULE_atomic_type);
        try {
            this.state = 378;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case LPCParser.BasicType:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 375;
                        this.match(LPCParser.BasicType);
                    }
                    break;
                case LPCParser.Class:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 376;
                        this.match(LPCParser.Class);
                        this.state = 377;
                        this.match(LPCParser.DefinedName);
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
    LPCParser.prototype.expr4 = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Expr4Context(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 46;
        this.enterRecursionRule(_localctx, 46, LPCParser.RULE_expr4, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 418;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                    case 1:
                        {
                            this.state = 381;
                            this.function_call();
                        }
                        break;
                    case 2:
                        {
                            this.state = 382;
                            this.match(LPCParser.DefinedName);
                        }
                        break;
                    case 3:
                        {
                            this.state = 383;
                            this.match(LPCParser.Identifier);
                        }
                        break;
                    case 4:
                        {
                            this.state = 384;
                            this.match(LPCParser.Parameter);
                        }
                        break;
                    case 5:
                        {
                            this.state = 385;
                            this.match(LPCParser.T__13);
                            this.state = 386;
                            this.match(LPCParser.T__1);
                            this.state = 387;
                            this.comma_expr(0);
                            this.state = 388;
                            this.match(LPCParser.T__2);
                        }
                        break;
                    case 6:
                        {
                            this.state = 390;
                            this.string();
                        }
                        break;
                    case 7:
                        {
                            this.state = 391;
                            this.match(LPCParser.CharacterConstant);
                        }
                        break;
                    case 8:
                        {
                            this.state = 392;
                            this.match(LPCParser.T__1);
                            this.state = 393;
                            this.comma_expr(0);
                            this.state = 394;
                            this.match(LPCParser.T__2);
                        }
                        break;
                    case 9:
                        {
                            this.state = 396;
                            this.catch_statement();
                        }
                        break;
                    case 10:
                        {
                            this.state = 397;
                            this.match(LPCParser.BasicType);
                            this.state = 398;
                            this.match(LPCParser.T__1);
                            this.state = 399;
                            this.argument();
                            this.state = 400;
                            this.match(LPCParser.T__2);
                            this.state = 401;
                            this.block();
                        }
                        break;
                    case 11:
                        {
                            this.state = 403;
                            this.match(LPCParser.FunctionOpen);
                            this.state = 404;
                            this.comma_expr(0);
                            this.state = 405;
                            this.match(LPCParser.Colon);
                            this.state = 406;
                            this.match(LPCParser.T__2);
                        }
                        break;
                    case 12:
                        {
                            this.state = 408;
                            this.match(LPCParser.MappingOpen);
                            this.state = 409;
                            this.expr_list3();
                            this.state = 410;
                            this.match(LPCParser.T__15);
                            this.state = 411;
                            this.match(LPCParser.T__2);
                        }
                        break;
                    case 13:
                        {
                            this.state = 413;
                            this.match(LPCParser.ArrayOpen);
                            this.state = 414;
                            this.expr_list();
                            this.state = 415;
                            this.match(LPCParser.T__4);
                            this.state = 416;
                            this.match(LPCParser.T__2);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 483;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 481;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new Expr4Context(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_expr4);
                                        this.state = 420;
                                        if (!(this.precpred(this._ctx, 22))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
                                        }
                                        this.state = 421;
                                        this.function_arrow_call();
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new Expr4Context(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_expr4);
                                        this.state = 422;
                                        if (!(this.precpred(this._ctx, 17))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                                        }
                                        this.state = 423;
                                        this.match(LPCParser.Arrow);
                                        this.state = 424;
                                        this.identifier();
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new Expr4Context(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_expr4);
                                        this.state = 425;
                                        if (!(this.precpred(this._ctx, 16))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                                        }
                                        this.state = 426;
                                        this.match(LPCParser.T__14);
                                        this.state = 427;
                                        this.comma_expr(0);
                                        this.state = 428;
                                        this.match(LPCParser.Range);
                                        this.state = 429;
                                        this.match(LPCParser.T__6);
                                        this.state = 430;
                                        this.comma_expr(0);
                                        this.state = 431;
                                        this.match(LPCParser.T__15);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new Expr4Context(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_expr4);
                                        this.state = 433;
                                        if (!(this.precpred(this._ctx, 15))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                                        }
                                        this.state = 434;
                                        this.match(LPCParser.T__14);
                                        this.state = 435;
                                        this.comma_expr(0);
                                        this.state = 436;
                                        this.match(LPCParser.Range);
                                        this.state = 437;
                                        this.comma_expr(0);
                                        this.state = 438;
                                        this.match(LPCParser.T__15);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new Expr4Context(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_expr4);
                                        this.state = 440;
                                        if (!(this.precpred(this._ctx, 14))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                                        }
                                        this.state = 441;
                                        this.match(LPCParser.T__14);
                                        this.state = 442;
                                        this.match(LPCParser.T__6);
                                        this.state = 443;
                                        this.comma_expr(0);
                                        this.state = 444;
                                        this.match(LPCParser.Range);
                                        this.state = 445;
                                        this.comma_expr(0);
                                        this.state = 446;
                                        this.match(LPCParser.T__15);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new Expr4Context(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_expr4);
                                        this.state = 448;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 449;
                                        this.match(LPCParser.T__14);
                                        this.state = 450;
                                        this.match(LPCParser.T__6);
                                        this.state = 451;
                                        this.comma_expr(0);
                                        this.state = 452;
                                        this.match(LPCParser.Range);
                                        this.state = 453;
                                        this.match(LPCParser.T__6);
                                        this.state = 454;
                                        this.comma_expr(0);
                                        this.state = 455;
                                        this.match(LPCParser.T__15);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new Expr4Context(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_expr4);
                                        this.state = 457;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 458;
                                        this.match(LPCParser.T__14);
                                        this.state = 459;
                                        this.comma_expr(0);
                                        this.state = 460;
                                        this.match(LPCParser.Range);
                                        this.state = 461;
                                        this.match(LPCParser.T__15);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new Expr4Context(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_expr4);
                                        this.state = 463;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 464;
                                        this.match(LPCParser.T__14);
                                        this.state = 465;
                                        this.match(LPCParser.T__6);
                                        this.state = 466;
                                        this.comma_expr(0);
                                        this.state = 467;
                                        this.match(LPCParser.Range);
                                        this.state = 468;
                                        this.match(LPCParser.T__15);
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new Expr4Context(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_expr4);
                                        this.state = 470;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 471;
                                        this.match(LPCParser.T__14);
                                        this.state = 472;
                                        this.match(LPCParser.T__6);
                                        this.state = 473;
                                        this.comma_expr(0);
                                        this.state = 474;
                                        this.match(LPCParser.T__15);
                                    }
                                    break;
                                case 10:
                                    {
                                        _localctx = new Expr4Context(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_expr4);
                                        this.state = 476;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 477;
                                        this.match(LPCParser.T__14);
                                        this.state = 478;
                                        this.comma_expr(0);
                                        this.state = 479;
                                        this.match(LPCParser.T__15);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 485;
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    LPCParser.prototype.catch_statement = function () {
        var _localctx = new Catch_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, LPCParser.RULE_catch_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 486;
                this.match(LPCParser.Catch);
                this.state = 487;
                this.expr_or_block();
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
    LPCParser.prototype.expr_list = function () {
        var _localctx = new Expr_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, LPCParser.RULE_expr_list);
        try {
            this.state = 494;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 490;
                        this.expr_list2(0);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 491;
                        this.expr_list2(0);
                        this.state = 492;
                        this.match(LPCParser.T__5);
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
    LPCParser.prototype.expr_list3 = function () {
        var _localctx = new Expr_list3Context(this._ctx, this.state);
        this.enterRule(_localctx, 52, LPCParser.RULE_expr_list3);
        try {
            this.state = 501;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 497;
                        this.expr_list4(0);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 498;
                        this.expr_list4(0);
                        this.state = 499;
                        this.match(LPCParser.T__5);
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
    LPCParser.prototype.expr_list4 = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Expr_list4Context(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 54;
        this.enterRecursionRule(_localctx, 54, LPCParser.RULE_expr_list4, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 504;
                    this.assoc_pair();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 511;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new Expr_list4Context(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_expr_list4);
                                this.state = 506;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 507;
                                this.match(LPCParser.T__5);
                                this.state = 508;
                                this.assoc_pair();
                            }
                        }
                    }
                    this.state = 513;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
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
    LPCParser.prototype.assoc_pair = function () {
        var _localctx = new Assoc_pairContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, LPCParser.RULE_assoc_pair);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 514;
                this.expr0(0);
                this.state = 515;
                this.match(LPCParser.Colon);
                this.state = 516;
                this.expr0(0);
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
    LPCParser.prototype.expr_list2 = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Expr_list2Context(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 58;
        this.enterRecursionRule(_localctx, 58, LPCParser.RULE_expr_list2, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 519;
                    this.expr_list_node();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 526;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new Expr_list2Context(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_expr_list2);
                                this.state = 521;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 522;
                                this.match(LPCParser.T__5);
                                this.state = 523;
                                this.expr_list_node();
                            }
                        }
                    }
                    this.state = 528;
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    LPCParser.prototype.expr_list_node = function () {
        var _localctx = new Expr_list_nodeContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, LPCParser.RULE_expr_list_node);
        try {
            this.state = 533;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 529;
                        this.expr0(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 530;
                        this.expr0(0);
                        this.state = 531;
                        this.match(LPCParser.Ellipsis);
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
    LPCParser.prototype.string = function () {
        var _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, LPCParser.RULE_string);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 535;
                this.string_con2(0);
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
    LPCParser.prototype.string_con2 = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new String_con2Context(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 64;
        this.enterRecursionRule(_localctx, 64, LPCParser.RULE_string_con2, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 538;
                    this.match(LPCParser.String);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 544;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new String_con2Context(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_string_con2);
                                this.state = 540;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 541;
                                this.match(LPCParser.String);
                            }
                        }
                    }
                    this.state = 546;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
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
    LPCParser.prototype.string_con1 = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new String_con1Context(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 66;
        this.enterRecursionRule(_localctx, 66, LPCParser.RULE_string_con1, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 553;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case LPCParser.String:
                        {
                            this.state = 548;
                            this.string_con2(0);
                        }
                        break;
                    case LPCParser.T__1:
                        {
                            this.state = 549;
                            this.match(LPCParser.T__1);
                            this.state = 550;
                            this.string_con1(0);
                            this.state = 551;
                            this.match(LPCParser.T__2);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 560;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new String_con1Context(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_string_con1);
                                this.state = 555;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 556;
                                this.match(LPCParser.T__10);
                                this.state = 557;
                                this.string_con1(2);
                            }
                        }
                    }
                    this.state = 562;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
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
    LPCParser.prototype.function_call = function () {
        var _localctx = new Function_callContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, LPCParser.RULE_function_call);
        try {
            this.state = 595;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 563;
                        this.efun_override();
                        this.state = 564;
                        this.match(LPCParser.T__1);
                        this.state = 565;
                        this.expr_list();
                        this.state = 566;
                        this.match(LPCParser.T__2);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 568;
                        this.match(LPCParser.New);
                        this.state = 569;
                        this.match(LPCParser.T__1);
                        this.state = 570;
                        this.expr_list();
                        this.state = 571;
                        this.match(LPCParser.T__2);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 573;
                        this.match(LPCParser.New);
                        this.state = 574;
                        this.match(LPCParser.T__1);
                        this.state = 575;
                        this.match(LPCParser.Class);
                        this.state = 576;
                        this.match(LPCParser.DefinedName);
                        this.state = 577;
                        this.opt_class_init(0);
                        this.state = 578;
                        this.match(LPCParser.T__2);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 580;
                        this.match(LPCParser.DefinedName);
                        this.state = 581;
                        this.match(LPCParser.T__1);
                        this.state = 582;
                        this.expr_list();
                        this.state = 583;
                        this.match(LPCParser.T__2);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 585;
                        this.function_name_call();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 586;
                        this.function_arrow_call();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 587;
                        this.match(LPCParser.T__1);
                        this.state = 588;
                        this.match(LPCParser.T__7);
                        this.state = 589;
                        this.comma_expr(0);
                        this.state = 590;
                        this.match(LPCParser.T__2);
                        this.state = 591;
                        this.match(LPCParser.T__1);
                        this.state = 592;
                        this.expr_list();
                        this.state = 593;
                        this.match(LPCParser.T__2);
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
    LPCParser.prototype.function_name_call = function () {
        var _localctx = new Function_name_callContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, LPCParser.RULE_function_name_call);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 597;
                this.function_name();
                this.state = 598;
                this.match(LPCParser.T__1);
                this.state = 599;
                this.expr_list();
                this.state = 600;
                this.match(LPCParser.T__2);
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
    LPCParser.prototype.function_arrow_call = function () {
        var _localctx = new Function_arrow_callContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, LPCParser.RULE_function_arrow_call);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 602;
                this.match(LPCParser.Arrow);
                this.state = 603;
                this.identifier();
                this.state = 604;
                this.match(LPCParser.T__1);
                this.state = 605;
                this.expr_list();
                this.state = 606;
                this.match(LPCParser.T__2);
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
    LPCParser.prototype.function_name = function () {
        var _localctx = new Function_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, LPCParser.RULE_function_name);
        try {
            this.state = 618;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 608;
                        this.match(LPCParser.Identifier);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 609;
                        this.match(LPCParser.ColonColon);
                        this.state = 610;
                        this.identifier();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 611;
                        this.match(LPCParser.BasicType);
                        this.state = 612;
                        this.match(LPCParser.ColonColon);
                        this.state = 613;
                        this.identifier();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 614;
                        this.identifier();
                        this.state = 615;
                        this.match(LPCParser.ColonColon);
                        this.state = 616;
                        this.identifier();
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
    LPCParser.prototype.opt_class_init = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Opt_class_initContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 76;
        this.enterRecursionRule(_localctx, 76, LPCParser.RULE_opt_class_init, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 626;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new Opt_class_initContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_opt_class_init);
                                this.state = 621;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 622;
                                this.match(LPCParser.T__5);
                                this.state = 623;
                                this.class_init();
                            }
                        }
                    }
                    this.state = 628;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
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
    LPCParser.prototype.class_init = function () {
        var _localctx = new Class_initContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, LPCParser.RULE_class_init);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 629;
                this.identifier();
                this.state = 630;
                this.match(LPCParser.Colon);
                this.state = 631;
                this.expr0(0);
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
    LPCParser.prototype.efun_override = function () {
        var _localctx = new Efun_overrideContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, LPCParser.RULE_efun_override);
        try {
            this.state = 639;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 633;
                        this.match(LPCParser.Efun);
                        this.state = 634;
                        this.match(LPCParser.ColonColon);
                        this.state = 635;
                        this.identifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 636;
                        this.match(LPCParser.Efun);
                        this.state = 637;
                        this.match(LPCParser.ColonColon);
                        this.state = 638;
                        this.match(LPCParser.New);
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
    LPCParser.prototype.block_or_semi = function () {
        var _localctx = new Block_or_semiContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, LPCParser.RULE_block_or_semi);
        try {
            this.state = 643;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case LPCParser.T__3:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 641;
                        this.block();
                    }
                    break;
                case LPCParser.T__0:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 642;
                        this.match(LPCParser.T__0);
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
    LPCParser.prototype.block = function () {
        var _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, LPCParser.RULE_block);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 645;
                this.match(LPCParser.T__3);
                this.state = 646;
                this.statements();
                this.state = 647;
                this.match(LPCParser.T__4);
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
    LPCParser.prototype.statements = function () {
        var _localctx = new StatementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, LPCParser.RULE_statements);
        try {
            this.state = 656;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 31, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 650;
                        this.statement();
                        this.state = 651;
                        this.statements();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 653;
                        this.local_declare_statement();
                        this.state = 654;
                        this.statements();
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
    LPCParser.prototype.local_declare_statement = function () {
        var _localctx = new Local_declare_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, LPCParser.RULE_local_declare_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 658;
                this.basic_type();
                this.state = 659;
                this.local_name_list();
                this.state = 660;
                this.match(LPCParser.T__0);
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
    LPCParser.prototype.local_name_list = function () {
        var _localctx = new Local_name_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, LPCParser.RULE_local_name_list);
        try {
            this.state = 667;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 662;
                        this.new_local_def();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 663;
                        this.new_local_def();
                        this.state = 664;
                        this.match(LPCParser.T__5);
                        this.state = 665;
                        this.local_name_list();
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
    LPCParser.prototype.new_local_def = function () {
        var _localctx = new New_local_defContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, LPCParser.RULE_new_local_def);
        try {
            this.state = 677;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 669;
                        this.optional_star();
                        this.state = 670;
                        this.new_local_name();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 672;
                        this.optional_star();
                        this.state = 673;
                        this.new_local_name();
                        this.state = 674;
                        this.match(LPCParser.Assign);
                        this.state = 675;
                        this.expr0(0);
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
    LPCParser.prototype.new_local_name = function () {
        var _localctx = new New_local_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, LPCParser.RULE_new_local_name);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 679;
                _la = this._input.LA(1);
                if (!(_la === LPCParser.DefinedName || _la === LPCParser.Identifier)) {
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
    LPCParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, LPCParser.RULE_statement);
        try {
            this.state = 697;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case LPCParser.T__1:
                case LPCParser.T__11:
                case LPCParser.T__12:
                case LPCParser.T__13:
                case LPCParser.PlusPlus:
                case LPCParser.MinusMinus:
                case LPCParser.Not:
                case LPCParser.Arrow:
                case LPCParser.BasicType:
                case LPCParser.Catch:
                case LPCParser.ColonColon:
                case LPCParser.DefinedName:
                case LPCParser.Efun:
                case LPCParser.New:
                case LPCParser.ParseCommand:
                case LPCParser.SScanf:
                case LPCParser.MappingOpen:
                case LPCParser.ArrayOpen:
                case LPCParser.FunctionOpen:
                case LPCParser.Number:
                case LPCParser.Parameter:
                case LPCParser.Real:
                case LPCParser.Identifier:
                case LPCParser.String:
                case LPCParser.CharacterConstant:
                case LPCParser.TimeExpression:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 681;
                        this.comma_expr(0);
                        this.state = 682;
                        this.match(LPCParser.T__0);
                    }
                    break;
                case LPCParser.If:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 684;
                        this.cond();
                    }
                    break;
                case LPCParser.While:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 685;
                        this.while_statement();
                    }
                    break;
                case LPCParser.Do:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 686;
                        this.do_statement();
                    }
                    break;
                case LPCParser.Switch:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 687;
                        this.switch_statement();
                    }
                    break;
                case LPCParser.Return:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 688;
                        this.returnStatement();
                    }
                    break;
                case LPCParser.T__3:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 689;
                        this.block();
                    }
                    break;
                case LPCParser.For:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 690;
                        this.for_loop();
                    }
                    break;
                case LPCParser.Foreach:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 691;
                        this.foreach_loop();
                    }
                    break;
                case LPCParser.T__0:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 692;
                        this.match(LPCParser.T__0);
                    }
                    break;
                case LPCParser.Break:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 693;
                        this.match(LPCParser.Break);
                        this.state = 694;
                        this.match(LPCParser.T__0);
                    }
                    break;
                case LPCParser.Continue:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 695;
                        this.match(LPCParser.Continue);
                        this.state = 696;
                        this.match(LPCParser.T__0);
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
    LPCParser.prototype.while_statement = function () {
        var _localctx = new While_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, LPCParser.RULE_while_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 699;
                this.match(LPCParser.While);
                this.state = 700;
                this.match(LPCParser.T__1);
                this.state = 701;
                this.comma_expr(0);
                this.state = 702;
                this.match(LPCParser.T__2);
                this.state = 703;
                this.statement();
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
    LPCParser.prototype.do_statement = function () {
        var _localctx = new Do_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, LPCParser.RULE_do_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 705;
                this.match(LPCParser.Do);
                this.state = 706;
                this.statement();
                this.state = 707;
                this.match(LPCParser.While);
                this.state = 708;
                this.match(LPCParser.T__1);
                this.state = 709;
                this.comma_expr(0);
                this.state = 710;
                this.match(LPCParser.T__2);
                this.state = 711;
                this.match(LPCParser.T__0);
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
    LPCParser.prototype.switch_statement = function () {
        var _localctx = new Switch_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, LPCParser.RULE_switch_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 713;
                this.match(LPCParser.Switch);
                this.state = 714;
                this.match(LPCParser.T__1);
                this.state = 715;
                this.comma_expr(0);
                this.state = 716;
                this.match(LPCParser.T__2);
                this.state = 717;
                this.match(LPCParser.T__3);
                this.state = 718;
                this.local_declarations(0);
                this.state = 719;
                this.case_statement();
                this.state = 720;
                this.switch_block();
                this.state = 721;
                this.match(LPCParser.T__4);
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
    LPCParser.prototype.local_declarations = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Local_declarationsContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 104;
        this.enterRecursionRule(_localctx, 104, LPCParser.RULE_local_declarations, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 731;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new Local_declarationsContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_local_declarations);
                                this.state = 724;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 725;
                                this.basic_type();
                                this.state = 726;
                                this.local_name_list();
                                this.state = 727;
                                this.match(LPCParser.T__0);
                            }
                        }
                    }
                    this.state = 733;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
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
    LPCParser.prototype.case_statement = function () {
        var _localctx = new Case_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, LPCParser.RULE_case_statement);
        try {
            this.state = 746;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 734;
                        this.match(LPCParser.Case);
                        this.state = 735;
                        this.case_label();
                        this.state = 736;
                        this.match(LPCParser.Colon);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 738;
                        this.match(LPCParser.Case);
                        this.state = 739;
                        this.case_label();
                        this.state = 740;
                        this.match(LPCParser.Range);
                        this.state = 741;
                        this.case_label();
                        this.state = 742;
                        this.match(LPCParser.Colon);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 744;
                        this.match(LPCParser.Default);
                        this.state = 745;
                        this.match(LPCParser.Colon);
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
    LPCParser.prototype.switch_block = function () {
        var _localctx = new Switch_blockContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, LPCParser.RULE_switch_block);
        try {
            this.state = 755;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case LPCParser.Case:
                case LPCParser.Default:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 748;
                        this.case_statement();
                        this.state = 749;
                        this.switch_block();
                    }
                    break;
                case LPCParser.T__0:
                case LPCParser.T__1:
                case LPCParser.T__3:
                case LPCParser.T__11:
                case LPCParser.T__12:
                case LPCParser.T__13:
                case LPCParser.PlusPlus:
                case LPCParser.MinusMinus:
                case LPCParser.Not:
                case LPCParser.Arrow:
                case LPCParser.BasicType:
                case LPCParser.Break:
                case LPCParser.Catch:
                case LPCParser.ColonColon:
                case LPCParser.Continue:
                case LPCParser.DefinedName:
                case LPCParser.Efun:
                case LPCParser.If:
                case LPCParser.Return:
                case LPCParser.For:
                case LPCParser.Foreach:
                case LPCParser.Switch:
                case LPCParser.While:
                case LPCParser.Do:
                case LPCParser.New:
                case LPCParser.ParseCommand:
                case LPCParser.SScanf:
                case LPCParser.MappingOpen:
                case LPCParser.ArrayOpen:
                case LPCParser.FunctionOpen:
                case LPCParser.Number:
                case LPCParser.Parameter:
                case LPCParser.Real:
                case LPCParser.Identifier:
                case LPCParser.String:
                case LPCParser.CharacterConstant:
                case LPCParser.TimeExpression:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 751;
                        this.statement();
                        this.state = 752;
                        this.switch_block();
                    }
                    break;
                case LPCParser.T__4:
                    this.enterOuterAlt(_localctx, 3);
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
    LPCParser.prototype.case_label = function () {
        var _localctx = new Case_labelContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, LPCParser.RULE_case_label);
        try {
            this.state = 760;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 757;
                        this.constant(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 758;
                        this.match(LPCParser.CharacterConstant);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 759;
                        this.string_con1(0);
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
    LPCParser.prototype.constant = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ConstantContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 112;
        this.enterRecursionRule(_localctx, 112, LPCParser.RULE_constant, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 774;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case LPCParser.T__1:
                        {
                            this.state = 763;
                            this.match(LPCParser.T__1);
                            this.state = 764;
                            this.constant(0);
                            this.state = 765;
                            this.match(LPCParser.T__2);
                        }
                        break;
                    case LPCParser.Number:
                        {
                            this.state = 767;
                            this.match(LPCParser.Number);
                        }
                        break;
                    case LPCParser.T__11:
                        {
                            this.state = 768;
                            this.match(LPCParser.T__11);
                            this.state = 769;
                            this.match(LPCParser.Number);
                        }
                        break;
                    case LPCParser.Not:
                        {
                            this.state = 770;
                            this.match(LPCParser.Not);
                            this.state = 771;
                            this.match(LPCParser.Number);
                        }
                        break;
                    case LPCParser.T__12:
                        {
                            this.state = 772;
                            this.match(LPCParser.T__12);
                            this.state = 773;
                            this.match(LPCParser.Number);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 820;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 818;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ConstantContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_constant);
                                        this.state = 776;
                                        if (!(this.precpred(this._ctx, 19))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                                        }
                                        this.state = 777;
                                        this.match(LPCParser.Or);
                                        this.state = 778;
                                        this.constant(20);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ConstantContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_constant);
                                        this.state = 779;
                                        if (!(this.precpred(this._ctx, 18))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                                        }
                                        this.state = 780;
                                        this.match(LPCParser.Caret);
                                        this.state = 781;
                                        this.constant(19);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new ConstantContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_constant);
                                        this.state = 782;
                                        if (!(this.precpred(this._ctx, 17))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                                        }
                                        this.state = 783;
                                        this.match(LPCParser.And);
                                        this.state = 784;
                                        this.constant(18);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new ConstantContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_constant);
                                        this.state = 785;
                                        if (!(this.precpred(this._ctx, 16))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                                        }
                                        this.state = 786;
                                        this.match(LPCParser.Equal);
                                        this.state = 787;
                                        this.constant(17);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new ConstantContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_constant);
                                        this.state = 788;
                                        if (!(this.precpred(this._ctx, 15))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                                        }
                                        this.state = 789;
                                        this.match(LPCParser.NotEqual);
                                        this.state = 790;
                                        this.constant(16);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new ConstantContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_constant);
                                        this.state = 791;
                                        if (!(this.precpred(this._ctx, 14))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                                        }
                                        this.state = 792;
                                        this.match(LPCParser.Compare);
                                        this.state = 793;
                                        this.constant(15);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new ConstantContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_constant);
                                        this.state = 794;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 795;
                                        this.match(LPCParser.T__6);
                                        this.state = 796;
                                        this.constant(14);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new ConstantContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_constant);
                                        this.state = 797;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 798;
                                        this.match(LPCParser.LeftShift);
                                        this.state = 799;
                                        this.constant(13);
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new ConstantContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_constant);
                                        this.state = 800;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 801;
                                        this.match(LPCParser.RightShift);
                                        this.state = 802;
                                        this.constant(12);
                                    }
                                    break;
                                case 10:
                                    {
                                        _localctx = new ConstantContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_constant);
                                        this.state = 803;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 804;
                                        this.match(LPCParser.T__7);
                                        this.state = 805;
                                        this.constant(10);
                                    }
                                    break;
                                case 11:
                                    {
                                        _localctx = new ConstantContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_constant);
                                        this.state = 806;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 807;
                                        this.match(LPCParser.T__8);
                                        this.state = 808;
                                        this.constant(9);
                                    }
                                    break;
                                case 12:
                                    {
                                        _localctx = new ConstantContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_constant);
                                        this.state = 809;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 810;
                                        this.match(LPCParser.T__9);
                                        this.state = 811;
                                        this.constant(8);
                                    }
                                    break;
                                case 13:
                                    {
                                        _localctx = new ConstantContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_constant);
                                        this.state = 812;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 813;
                                        this.match(LPCParser.T__11);
                                        this.state = 814;
                                        this.constant(7);
                                    }
                                    break;
                                case 14:
                                    {
                                        _localctx = new ConstantContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_constant);
                                        this.state = 815;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 816;
                                        this.match(LPCParser.T__10);
                                        this.state = 817;
                                        this.constant(6);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 822;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
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
    LPCParser.prototype.foreach_loop = function () {
        var _localctx = new Foreach_loopContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, LPCParser.RULE_foreach_loop);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 823;
                this.match(LPCParser.Foreach);
                this.state = 824;
                this.match(LPCParser.T__1);
                this.state = 825;
                this.foreach_vars();
                this.state = 826;
                this.match(LPCParser.In);
                this.state = 827;
                this.expr0(0);
                this.state = 828;
                this.match(LPCParser.T__2);
                this.state = 829;
                this.statement();
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
    LPCParser.prototype.foreach_vars = function () {
        var _localctx = new Foreach_varsContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, LPCParser.RULE_foreach_vars);
        try {
            this.state = 836;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 831;
                        this.foreach_var();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 832;
                        this.foreach_var();
                        this.state = 833;
                        this.match(LPCParser.T__5);
                        this.state = 834;
                        this.foreach_var();
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
    LPCParser.prototype.for_loop = function () {
        var _localctx = new For_loopContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, LPCParser.RULE_for_loop);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 838;
                this.match(LPCParser.For);
                this.state = 839;
                this.match(LPCParser.T__1);
                this.state = 840;
                this.first_for_expr();
                this.state = 841;
                this.match(LPCParser.T__0);
                this.state = 842;
                this.for_expr();
                this.state = 843;
                this.match(LPCParser.T__0);
                this.state = 844;
                this.for_expr();
                this.state = 845;
                this.match(LPCParser.T__2);
                this.state = 846;
                this.statement();
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
    LPCParser.prototype.foreach_var = function () {
        var _localctx = new Foreach_varContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, LPCParser.RULE_foreach_var);
        try {
            this.state = 851;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case LPCParser.DefinedName:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 848;
                        this.match(LPCParser.DefinedName);
                    }
                    break;
                case LPCParser.BasicType:
                case LPCParser.Class:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 849;
                        this.single_new_local_def();
                    }
                    break;
                case LPCParser.Identifier:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 850;
                        this.match(LPCParser.Identifier);
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
    LPCParser.prototype.first_for_expr = function () {
        var _localctx = new First_for_exprContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, LPCParser.RULE_first_for_expr);
        try {
            this.state = 855;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 44, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 853;
                        this.for_expr();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 854;
                        this.single_new_local_def_with_init();
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
    LPCParser.prototype.single_new_local_def_with_init = function () {
        var _localctx = new Single_new_local_def_with_initContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, LPCParser.RULE_single_new_local_def_with_init);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 857;
                this.single_new_local_def();
                this.state = 858;
                this.match(LPCParser.Assign);
                this.state = 859;
                this.expr0(0);
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
    LPCParser.prototype.single_new_local_def = function () {
        var _localctx = new Single_new_local_defContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, LPCParser.RULE_single_new_local_def);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 861;
                this.basic_type();
                this.state = 862;
                this.optional_star();
                this.state = 863;
                this.new_local_name();
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
    LPCParser.prototype.for_expr = function () {
        var _localctx = new For_exprContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, LPCParser.RULE_for_expr);
        try {
            this.state = 867;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case LPCParser.T__0:
                case LPCParser.T__2:
                    this.enterOuterAlt(_localctx, 1);
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case LPCParser.T__1:
                case LPCParser.T__11:
                case LPCParser.T__12:
                case LPCParser.T__13:
                case LPCParser.PlusPlus:
                case LPCParser.MinusMinus:
                case LPCParser.Not:
                case LPCParser.Arrow:
                case LPCParser.BasicType:
                case LPCParser.Catch:
                case LPCParser.ColonColon:
                case LPCParser.DefinedName:
                case LPCParser.Efun:
                case LPCParser.New:
                case LPCParser.ParseCommand:
                case LPCParser.SScanf:
                case LPCParser.MappingOpen:
                case LPCParser.ArrayOpen:
                case LPCParser.FunctionOpen:
                case LPCParser.Number:
                case LPCParser.Parameter:
                case LPCParser.Real:
                case LPCParser.Identifier:
                case LPCParser.String:
                case LPCParser.CharacterConstant:
                case LPCParser.TimeExpression:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 866;
                        this.comma_expr(0);
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
    LPCParser.prototype.returnStatement = function () {
        var _localctx = new ReturnStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, LPCParser.RULE_returnStatement);
        try {
            this.state = 875;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 46, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 869;
                        this.match(LPCParser.Return);
                        this.state = 870;
                        this.match(LPCParser.T__0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 871;
                        this.match(LPCParser.Return);
                        this.state = 872;
                        this.comma_expr(0);
                        this.state = 873;
                        this.match(LPCParser.T__0);
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
    LPCParser.prototype.cond = function () {
        var _localctx = new CondContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, LPCParser.RULE_cond);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 877;
                this.match(LPCParser.If);
                this.state = 878;
                this.match(LPCParser.T__1);
                this.state = 879;
                this.comma_expr(0);
                this.state = 880;
                this.match(LPCParser.T__2);
                this.state = 881;
                this.statement();
                this.state = 882;
                this.optional_else_part();
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
    LPCParser.prototype.optional_else_part = function () {
        var _localctx = new Optional_else_partContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, LPCParser.RULE_optional_else_part);
        try {
            this.state = 887;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 47, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 885;
                        this.match(LPCParser.Else);
                        this.state = 886;
                        this.statement();
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
    LPCParser.prototype.argument = function () {
        var _localctx = new ArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, LPCParser.RULE_argument);
        try {
            this.state = 894;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 48, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 890;
                        this.argument_list(0);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 891;
                        this.argument_list(0);
                        this.state = 892;
                        this.match(LPCParser.Ellipsis);
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
    LPCParser.prototype.argument_list = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Argument_listContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 138;
        this.enterRecursionRule(_localctx, 138, LPCParser.RULE_argument_list, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 897;
                    this.new_arg();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 904;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new Argument_listContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, LPCParser.RULE_argument_list);
                                this.state = 899;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 900;
                                this.match(LPCParser.T__5);
                                this.state = 901;
                                this.new_arg();
                            }
                        }
                    }
                    this.state = 906;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
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
    LPCParser.prototype.new_arg = function () {
        var _localctx = new New_argContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, LPCParser.RULE_new_arg);
        try {
            this.state = 915;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 907;
                        this.basic_type();
                        this.state = 908;
                        this.optional_star();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 910;
                        this.basic_type();
                        this.state = 911;
                        this.optional_star();
                        this.state = 912;
                        this.new_local_name();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 914;
                        this.new_local_name();
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
    LPCParser.prototype.inheritance = function () {
        var _localctx = new InheritanceContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, LPCParser.RULE_inheritance);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 917;
                this.type_modifier_list();
                this.state = 918;
                this.match(LPCParser.Inherit);
                this.state = 919;
                this.string_con1(0);
                this.state = 920;
                this.match(LPCParser.T__0);
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
    LPCParser.prototype.data_type = function () {
        var _localctx = new Data_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, LPCParser.RULE_data_type);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 922;
                this.type_modifier_list();
                this.state = 923;
                this.opt_basic_type();
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
    LPCParser.prototype.opt_basic_type = function () {
        var _localctx = new Opt_basic_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, LPCParser.RULE_opt_basic_type);
        try {
            this.state = 927;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 51, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 925;
                        this.basic_type();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
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
    // @RuleVersion(0)
    LPCParser.prototype.optional_star = function () {
        var _localctx = new Optional_starContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, LPCParser.RULE_optional_star);
        try {
            this.state = 931;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 52, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 930;
                        this.match(LPCParser.T__7);
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
    LPCParser.prototype.identifier = function () {
        var _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, LPCParser.RULE_identifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 933;
                _la = this._input.LA(1);
                if (!(_la === LPCParser.DefinedName || _la === LPCParser.Identifier)) {
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
    LPCParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 1:
                return this.program_sempred(_localctx, predIndex);
            case 8:
                return this.member_list_sempred(_localctx, predIndex);
            case 13:
                return this.expr0_sempred(_localctx, predIndex);
            case 16:
                return this.comma_expr_sempred(_localctx, predIndex);
            case 23:
                return this.expr4_sempred(_localctx, predIndex);
            case 27:
                return this.expr_list4_sempred(_localctx, predIndex);
            case 29:
                return this.expr_list2_sempred(_localctx, predIndex);
            case 32:
                return this.string_con2_sempred(_localctx, predIndex);
            case 33:
                return this.string_con1_sempred(_localctx, predIndex);
            case 38:
                return this.opt_class_init_sempred(_localctx, predIndex);
            case 52:
                return this.local_declarations_sempred(_localctx, predIndex);
            case 56:
                return this.constant_sempred(_localctx, predIndex);
            case 69:
                return this.argument_list_sempred(_localctx, predIndex);
        }
        return true;
    };
    LPCParser.prototype.program_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 2);
        }
        return true;
    };
    LPCParser.prototype.member_list_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 1:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    LPCParser.prototype.expr0_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 2:
                return this.precpred(this._ctx, 28);
            case 3:
                return this.precpred(this._ctx, 27);
            case 4:
                return this.precpred(this._ctx, 26);
            case 5:
                return this.precpred(this._ctx, 25);
            case 6:
                return this.precpred(this._ctx, 24);
            case 7:
                return this.precpred(this._ctx, 23);
            case 8:
                return this.precpred(this._ctx, 22);
            case 9:
                return this.precpred(this._ctx, 21);
            case 10:
                return this.precpred(this._ctx, 20);
            case 11:
                return this.precpred(this._ctx, 19);
            case 12:
                return this.precpred(this._ctx, 18);
            case 13:
                return this.precpred(this._ctx, 17);
            case 14:
                return this.precpred(this._ctx, 16);
            case 15:
                return this.precpred(this._ctx, 15);
        }
        return true;
    };
    LPCParser.prototype.comma_expr_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 16:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    LPCParser.prototype.expr4_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 17:
                return this.precpred(this._ctx, 22);
            case 18:
                return this.precpred(this._ctx, 17);
            case 19:
                return this.precpred(this._ctx, 16);
            case 20:
                return this.precpred(this._ctx, 15);
            case 21:
                return this.precpred(this._ctx, 14);
            case 22:
                return this.precpred(this._ctx, 13);
            case 23:
                return this.precpred(this._ctx, 12);
            case 24:
                return this.precpred(this._ctx, 11);
            case 25:
                return this.precpred(this._ctx, 10);
            case 26:
                return this.precpred(this._ctx, 9);
        }
        return true;
    };
    LPCParser.prototype.expr_list4_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 27:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    LPCParser.prototype.expr_list2_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 28:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    LPCParser.prototype.string_con2_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 29:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    LPCParser.prototype.string_con1_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 30:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    LPCParser.prototype.opt_class_init_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 31:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    LPCParser.prototype.local_declarations_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 32:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    LPCParser.prototype.constant_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 33:
                return this.precpred(this._ctx, 19);
            case 34:
                return this.precpred(this._ctx, 18);
            case 35:
                return this.precpred(this._ctx, 17);
            case 36:
                return this.precpred(this._ctx, 16);
            case 37:
                return this.precpred(this._ctx, 15);
            case 38:
                return this.precpred(this._ctx, 14);
            case 39:
                return this.precpred(this._ctx, 13);
            case 40:
                return this.precpred(this._ctx, 12);
            case 41:
                return this.precpred(this._ctx, 11);
            case 42:
                return this.precpred(this._ctx, 9);
            case 43:
                return this.precpred(this._ctx, 8);
            case 44:
                return this.precpred(this._ctx, 7);
            case 45:
                return this.precpred(this._ctx, 6);
            case 46:
                return this.precpred(this._ctx, 5);
        }
        return true;
    };
    LPCParser.prototype.argument_list_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 47:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    Object.defineProperty(LPCParser, "_ATN", {
        get: function () {
            if (!LPCParser.__ATN) {
                LPCParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(LPCParser._serializedATN));
            }
            return LPCParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    LPCParser.T__0 = 1;
    LPCParser.T__1 = 2;
    LPCParser.T__2 = 3;
    LPCParser.T__3 = 4;
    LPCParser.T__4 = 5;
    LPCParser.T__5 = 6;
    LPCParser.T__6 = 7;
    LPCParser.T__7 = 8;
    LPCParser.T__8 = 9;
    LPCParser.T__9 = 10;
    LPCParser.T__10 = 11;
    LPCParser.T__11 = 12;
    LPCParser.T__12 = 13;
    LPCParser.T__13 = 14;
    LPCParser.T__14 = 15;
    LPCParser.T__15 = 16;
    LPCParser.TypeModifier = 17;
    LPCParser.Assign = 18;
    LPCParser.PlusPlus = 19;
    LPCParser.MinusMinus = 20;
    LPCParser.And = 21;
    LPCParser.AndAnd = 22;
    LPCParser.Caret = 23;
    LPCParser.Or = 24;
    LPCParser.OrOr = 25;
    LPCParser.Equal = 26;
    LPCParser.LeftShift = 27;
    LPCParser.RightShift = 28;
    LPCParser.Not = 29;
    LPCParser.NotEqual = 30;
    LPCParser.Compare = 31;
    LPCParser.LessEqual = 32;
    LPCParser.Great = 33;
    LPCParser.GreatEqual = 34;
    LPCParser.Arrow = 35;
    LPCParser.BasicType = 36;
    LPCParser.Break = 37;
    LPCParser.Catch = 38;
    LPCParser.Class = 39;
    LPCParser.Colon = 40;
    LPCParser.ColonColon = 41;
    LPCParser.Continue = 42;
    LPCParser.DefinedName = 43;
    LPCParser.Efun = 44;
    LPCParser.Ellipsis = 45;
    LPCParser.Else = 46;
    LPCParser.If = 47;
    LPCParser.Inherit = 48;
    LPCParser.Return = 49;
    LPCParser.For = 50;
    LPCParser.Foreach = 51;
    LPCParser.In = 52;
    LPCParser.Switch = 53;
    LPCParser.Case = 54;
    LPCParser.While = 55;
    LPCParser.Do = 56;
    LPCParser.Default = 57;
    LPCParser.New = 58;
    LPCParser.ParseCommand = 59;
    LPCParser.Question = 60;
    LPCParser.Range = 61;
    LPCParser.SScanf = 62;
    LPCParser.MappingOpen = 63;
    LPCParser.ArrayOpen = 64;
    LPCParser.FunctionOpen = 65;
    LPCParser.Number = 66;
    LPCParser.Parameter = 67;
    LPCParser.ComplexDefine = 68;
    LPCParser.ComplexInclude = 69;
    LPCParser.ComplexPreprocessor = 70;
    LPCParser.Real = 71;
    LPCParser.DigitSequence = 72;
    LPCParser.Identifier = 73;
    LPCParser.String = 74;
    LPCParser.StringPrefix = 75;
    LPCParser.CharacterConstant = 76;
    LPCParser.TimeExpression = 77;
    LPCParser.BlockComment = 78;
    LPCParser.LineComment = 79;
    LPCParser.Whitespace = 80;
    LPCParser.Newline = 81;
    LPCParser.RULE_lpc_program = 0;
    LPCParser.RULE_program = 1;
    LPCParser.RULE_possible_semi_colon = 2;
    LPCParser.RULE_defination = 3;
    LPCParser.RULE_function_defination = 4;
    LPCParser.RULE_modifier_change = 5;
    LPCParser.RULE_type_modifier_list = 6;
    LPCParser.RULE_type_decl = 7;
    LPCParser.RULE_member_list = 8;
    LPCParser.RULE_member_name_list = 9;
    LPCParser.RULE_member_name = 10;
    LPCParser.RULE_name_list = 11;
    LPCParser.RULE_new_name = 12;
    LPCParser.RULE_expr0 = 13;
    LPCParser.RULE_time_expression = 14;
    LPCParser.RULE_expr_or_block = 15;
    LPCParser.RULE_comma_expr = 16;
    LPCParser.RULE_parse_command = 17;
    LPCParser.RULE_sscanf = 18;
    LPCParser.RULE_lvalue_list = 19;
    LPCParser.RULE_cast = 20;
    LPCParser.RULE_basic_type = 21;
    LPCParser.RULE_atomic_type = 22;
    LPCParser.RULE_expr4 = 23;
    LPCParser.RULE_catch_statement = 24;
    LPCParser.RULE_expr_list = 25;
    LPCParser.RULE_expr_list3 = 26;
    LPCParser.RULE_expr_list4 = 27;
    LPCParser.RULE_assoc_pair = 28;
    LPCParser.RULE_expr_list2 = 29;
    LPCParser.RULE_expr_list_node = 30;
    LPCParser.RULE_string = 31;
    LPCParser.RULE_string_con2 = 32;
    LPCParser.RULE_string_con1 = 33;
    LPCParser.RULE_function_call = 34;
    LPCParser.RULE_function_name_call = 35;
    LPCParser.RULE_function_arrow_call = 36;
    LPCParser.RULE_function_name = 37;
    LPCParser.RULE_opt_class_init = 38;
    LPCParser.RULE_class_init = 39;
    LPCParser.RULE_efun_override = 40;
    LPCParser.RULE_block_or_semi = 41;
    LPCParser.RULE_block = 42;
    LPCParser.RULE_statements = 43;
    LPCParser.RULE_local_declare_statement = 44;
    LPCParser.RULE_local_name_list = 45;
    LPCParser.RULE_new_local_def = 46;
    LPCParser.RULE_new_local_name = 47;
    LPCParser.RULE_statement = 48;
    LPCParser.RULE_while_statement = 49;
    LPCParser.RULE_do_statement = 50;
    LPCParser.RULE_switch_statement = 51;
    LPCParser.RULE_local_declarations = 52;
    LPCParser.RULE_case_statement = 53;
    LPCParser.RULE_switch_block = 54;
    LPCParser.RULE_case_label = 55;
    LPCParser.RULE_constant = 56;
    LPCParser.RULE_foreach_loop = 57;
    LPCParser.RULE_foreach_vars = 58;
    LPCParser.RULE_for_loop = 59;
    LPCParser.RULE_foreach_var = 60;
    LPCParser.RULE_first_for_expr = 61;
    LPCParser.RULE_single_new_local_def_with_init = 62;
    LPCParser.RULE_single_new_local_def = 63;
    LPCParser.RULE_for_expr = 64;
    LPCParser.RULE_returnStatement = 65;
    LPCParser.RULE_cond = 66;
    LPCParser.RULE_optional_else_part = 67;
    LPCParser.RULE_argument = 68;
    LPCParser.RULE_argument_list = 69;
    LPCParser.RULE_new_arg = 70;
    LPCParser.RULE_inheritance = 71;
    LPCParser.RULE_data_type = 72;
    LPCParser.RULE_opt_basic_type = 73;
    LPCParser.RULE_optional_star = 74;
    LPCParser.RULE_identifier = 75;
    // tslint:disable:no-trailing-whitespace
    LPCParser.ruleNames = [
        "lpc_program", "program", "possible_semi_colon", "defination", "function_defination",
        "modifier_change", "type_modifier_list", "type_decl", "member_list", "member_name_list",
        "member_name", "name_list", "new_name", "expr0", "time_expression", "expr_or_block",
        "comma_expr", "parse_command", "sscanf", "lvalue_list", "cast", "basic_type",
        "atomic_type", "expr4", "catch_statement", "expr_list", "expr_list3",
        "expr_list4", "assoc_pair", "expr_list2", "expr_list_node", "string",
        "string_con2", "string_con1", "function_call", "function_name_call", "function_arrow_call",
        "function_name", "opt_class_init", "class_init", "efun_override", "block_or_semi",
        "block", "statements", "local_declare_statement", "local_name_list", "new_local_def",
        "new_local_name", "statement", "while_statement", "do_statement", "switch_statement",
        "local_declarations", "case_statement", "switch_block", "case_label",
        "constant", "foreach_loop", "foreach_vars", "for_loop", "foreach_var",
        "first_for_expr", "single_new_local_def_with_init", "single_new_local_def",
        "for_expr", "returnStatement", "cond", "optional_else_part", "argument",
        "argument_list", "new_arg", "inheritance", "data_type", "opt_basic_type",
        "optional_star", "identifier",
    ];
    LPCParser._LITERAL_NAMES = [
        undefined, "';'", "'('", "')'", "'{'", "'}'", "','", "'<'", "'*'", "'%'",
        "'/'", "'+'", "'-'", "'~'", "'$'", "'['", "']'", undefined, undefined,
        "'++'", "'--'", "'&'", "'&&'", "'^'", "'|'", "'||'", "'=='", "'<<'", "'>>'",
        "'!'", "'!='", undefined, "'<='", "'>'", "'>='", "'->'", undefined, "'break'",
        "'catch'", "'class'", "':'", "'::'", "'continue'", "'foo'", "'efun'",
        "'...'", "'else'", "'if'", "'inherit'", "'return'", "'for'", "'foreach'",
        "'in'", "'switch'", "'case'", "'while'", "'do'", "'default'", "'new'",
        "'parse_command'", "'?'", "'..'", "'sscanf'", undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "'@'", undefined, "'time_expression'",
    ];
    LPCParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "TypeModifier", "Assign", "PlusPlus",
        "MinusMinus", "And", "AndAnd", "Caret", "Or", "OrOr", "Equal", "LeftShift",
        "RightShift", "Not", "NotEqual", "Compare", "LessEqual", "Great", "GreatEqual",
        "Arrow", "BasicType", "Break", "Catch", "Class", "Colon", "ColonColon",
        "Continue", "DefinedName", "Efun", "Ellipsis", "Else", "If", "Inherit",
        "Return", "For", "Foreach", "In", "Switch", "Case", "While", "Do", "Default",
        "New", "ParseCommand", "Question", "Range", "SScanf", "MappingOpen", "ArrayOpen",
        "FunctionOpen", "Number", "Parameter", "ComplexDefine", "ComplexInclude",
        "ComplexPreprocessor", "Real", "DigitSequence", "Identifier", "String",
        "StringPrefix", "CharacterConstant", "TimeExpression", "BlockComment",
        "LineComment", "Whitespace", "Newline",
    ];
    LPCParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(LPCParser._LITERAL_NAMES, LPCParser._SYMBOLIC_NAMES, []);
    LPCParser._serializedATNSegments = 2;
    LPCParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03S\u03AA\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
        "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
        "\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
        "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
        "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x03\x02\x03" +
        "\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\xA3\n\x03" +
        "\f\x03\x0E\x03\xA6\v\x03\x03\x04\x03\x04\x05\x04\xAA\n\x04\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xB4\n\x05" +
        "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07" +
        "\x03\x07\x03\x07\x03\b\x03\b\x03\b\x05\b\xC4\n\b\x03\t\x03\t\x03\t\x03" +
        "\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\xD3\n\n" +
        "\f\n\x0E\n\xD6\v\n\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\xDD\n\v\x03\f\x03" +
        "\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xE7\n\r\x03\x0E\x03\x0E\x03" +
        "\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xF1\n\x0E\x03\x0F" +
        "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
        "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
        "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
        "\x03\x0F\x03\x0F\x05\x0F\u0111\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
        "\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
        "\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
        "\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
        "\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
        "\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u0140\n\x0F\f\x0F\x0E\x0F" +
        "\u0143\v\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
        "\x11\x05\x11\u014D\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x07\x12\u0155\n\x12\f\x12\x0E\x12\u0158\v\x12\x03\x13\x03\x13\x03\x13" +
        "\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14" +
        "\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15" +
        "\x03\x15\x03\x15\x05\x15\u0171\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
        "\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x05\x18\u017D\n\x18\x03\x19" +
        "\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
        "\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
        "\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
        "\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
        "\x03\x19\x05\x19\u01A5\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
        "\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
        "\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
        "\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
        "\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
        "\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
        "\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
        "\x19\x03\x19\x07\x19\u01E4\n\x19\f\x19\x0E\x19\u01E7\v\x19\x03\x1A\x03" +
        "\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u01F1\n\x1B" +
        "\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u01F8\n\x1C\x03\x1D\x03" +
        "\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u0200\n\x1D\f\x1D\x0E\x1D" +
        "\u0203\v\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03" +
        "\x1F\x03\x1F\x03\x1F\x07\x1F\u020F\n\x1F\f\x1F\x0E\x1F\u0212\v\x1F\x03" +
        " \x03 \x03 \x03 \x05 \u0218\n \x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"" +
        "\x07\"\u0221\n\"\f\"\x0E\"\u0224\v\"\x03#\x03#\x03#\x03#\x03#\x03#\x05" +
        "#\u022C\n#\x03#\x03#\x03#\x07#\u0231\n#\f#\x0E#\u0234\v#\x03$\x03$\x03" +
        "$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03" +
        "$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03" +
        "$\x03$\x05$\u0256\n$\x03%\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x03" +
        "&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05" +
        "\'\u026D\n\'\x03(\x03(\x03(\x03(\x07(\u0273\n(\f(\x0E(\u0276\v(\x03)\x03" +
        ")\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u0282\n*\x03+\x03+\x05" +
        "+\u0286\n+\x03,\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05" +
        "-\u0293\n-\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x05/\u029E\n/" +
        "\x030\x030\x030\x030\x030\x030\x030\x030\x050\u02A8\n0\x031\x031\x032" +
        "\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x03" +
        "2\x032\x052\u02BC\n2\x033\x033\x033\x033\x033\x033\x034\x034\x034\x03" +
        "4\x034\x034\x034\x034\x035\x035\x035\x035\x035\x035\x035\x035\x035\x03" +
        "5\x036\x036\x036\x036\x036\x036\x076\u02DC\n6\f6\x0E6\u02DF\v6\x037\x03" +
        "7\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x057\u02ED\n7\x03" +
        "8\x038\x038\x038\x038\x038\x038\x058\u02F6\n8\x039\x039\x039\x059\u02FB" +
        "\n9\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x05:\u0309" +
        "\n:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03" +
        ":\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03" +
        ":\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03" +
        ":\x07:\u0335\n:\f:\x0E:\u0338\v:\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03" +
        ";\x03<\x03<\x03<\x03<\x03<\x05<\u0347\n<\x03=\x03=\x03=\x03=\x03=\x03" +
        "=\x03=\x03=\x03=\x03=\x03>\x03>\x03>\x05>\u0356\n>\x03?\x03?\x05?\u035A" +
        "\n?\x03@\x03@\x03@\x03@\x03A\x03A\x03A\x03A\x03B\x03B\x05B\u0366\nB\x03" +
        "C\x03C\x03C\x03C\x03C\x03C\x05C\u036E\nC\x03D\x03D\x03D\x03D\x03D\x03" +
        "D\x03D\x03E\x03E\x03E\x05E\u037A\nE\x03F\x03F\x03F\x03F\x03F\x05F\u0381" +
        "\nF\x03G\x03G\x03G\x03G\x03G\x03G\x07G\u0389\nG\fG\x0EG\u038C\vG\x03H" +
        "\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u0396\nH\x03I\x03I\x03I\x03I" +
        "\x03I\x03J\x03J\x03J\x03K\x03K\x05K\u03A2\nK\x03L\x03L\x05L\u03A6\nL\x03" +
        "M\x03M\x03M\x02\x02\x0F\x04\x12\x1C\"08<BDNjr\x8CN\x02\x02\x04\x02\x06" +
        "\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
        "\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
        "2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
        "N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02" +
        "j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02" +
        "\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02" +
        "\x96\x02\x98\x02\x02\x05\x03\x02\n\f\x03\x02\r\x0E\x04\x02--KK\x02\u03EA" +
        "\x02\x9A\x03\x02\x02\x02\x04\x9D\x03\x02\x02\x02\x06\xA9\x03\x02\x02\x02" +
        "\b\xB3\x03\x02\x02\x02\n\xB5\x03\x02\x02\x02\f\xBD\x03\x02\x02\x02\x0E" +
        "\xC3\x03\x02\x02\x02\x10\xC5\x03\x02\x02\x02\x12\xCC\x03\x02\x02\x02\x14" +
        "\xDC\x03\x02\x02\x02\x16\xDE\x03\x02\x02\x02\x18\xE6\x03\x02\x02\x02\x1A" +
        "\xF0\x03\x02\x02\x02\x1C\u0110\x03\x02\x02\x02\x1E\u0144\x03\x02\x02\x02" +
        " \u014C\x03\x02\x02\x02\"\u014E\x03\x02\x02\x02$\u0159\x03\x02\x02\x02" +
        "&\u0163\x03\x02\x02\x02(\u0170\x03\x02\x02\x02*\u0172\x03\x02\x02\x02" +
        ",\u0177\x03\x02\x02\x02.\u017C\x03\x02\x02\x020\u01A4\x03\x02\x02\x02" +
        "2\u01E8\x03\x02\x02\x024\u01F0\x03\x02\x02\x026\u01F7\x03\x02\x02\x02" +
        "8\u01F9\x03\x02\x02\x02:\u0204\x03\x02\x02\x02<\u0208\x03\x02\x02\x02" +
        ">\u0217\x03\x02\x02\x02@\u0219\x03\x02\x02\x02B\u021B\x03\x02\x02\x02" +
        "D\u022B\x03\x02\x02\x02F\u0255\x03\x02\x02\x02H\u0257\x03\x02\x02\x02" +
        "J\u025C\x03\x02\x02\x02L\u026C\x03\x02\x02\x02N\u026E\x03\x02\x02\x02" +
        "P\u0277\x03\x02\x02\x02R\u0281\x03\x02\x02\x02T\u0285\x03\x02\x02\x02" +
        "V\u0287\x03\x02\x02\x02X\u0292\x03\x02\x02\x02Z\u0294\x03\x02\x02\x02" +
        "\\\u029D\x03\x02\x02\x02^\u02A7\x03\x02\x02\x02`\u02A9\x03\x02\x02\x02" +
        "b\u02BB\x03\x02\x02\x02d\u02BD\x03\x02\x02\x02f\u02C3\x03\x02\x02\x02" +
        "h\u02CB\x03\x02\x02\x02j\u02D5\x03\x02\x02\x02l\u02EC\x03\x02\x02\x02" +
        "n\u02F5\x03\x02\x02\x02p\u02FA\x03\x02\x02\x02r\u0308\x03\x02\x02\x02" +
        "t\u0339\x03\x02\x02\x02v\u0346\x03\x02\x02\x02x\u0348\x03\x02\x02\x02" +
        "z\u0355\x03\x02\x02\x02|\u0359\x03\x02\x02\x02~\u035B\x03\x02\x02\x02" +
        "\x80\u035F\x03\x02\x02\x02\x82\u0365\x03\x02\x02\x02\x84\u036D\x03\x02" +
        "\x02\x02\x86\u036F\x03\x02\x02\x02\x88\u0379\x03\x02\x02\x02\x8A\u0380" +
        "\x03\x02\x02\x02\x8C\u0382\x03\x02\x02\x02\x8E\u0395\x03\x02\x02\x02\x90" +
        "\u0397\x03\x02\x02\x02\x92\u039C\x03\x02\x02\x02\x94\u03A1\x03\x02\x02" +
        "\x02\x96\u03A5\x03\x02\x02\x02\x98\u03A7\x03\x02\x02\x02\x9A\x9B\x05\x04" +
        "\x03\x02\x9B\x9C\x07\x02\x02\x03\x9C\x03\x03\x02\x02\x02\x9D\xA4\b\x03" +
        "\x01\x02\x9E\x9F\f\x04\x02\x02\x9F\xA0\x05\b\x05\x02\xA0\xA1\x05\x06\x04" +
        "\x02\xA1\xA3\x03\x02\x02\x02\xA2\x9E\x03\x02\x02\x02\xA3\xA6\x03\x02\x02" +
        "\x02\xA4\xA2\x03\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\x05\x03\x02\x02" +
        "\x02\xA6\xA4\x03\x02\x02\x02\xA7\xAA\x03\x02\x02\x02\xA8\xAA\x07\x03\x02" +
        "\x02\xA9\xA7\x03\x02\x02\x02\xA9\xA8\x03\x02\x02\x02\xAA\x07\x03\x02\x02" +
        "\x02\xAB\xB4\x05\n\x06\x02\xAC\xAD\x05\x92J\x02\xAD\xAE\x05\x18\r\x02" +
        "\xAE\xAF\x07\x03\x02\x02\xAF\xB4\x03\x02\x02\x02\xB0\xB4\x05\x90I\x02" +
        "\xB1\xB4\x05\x10\t\x02\xB2\xB4\x05\f\x07\x02\xB3\xAB\x03\x02\x02\x02\xB3" +
        "\xAC\x03\x02\x02\x02\xB3\xB0\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB3" +
        "\xB2\x03\x02\x02\x02\xB4\t\x03\x02\x02\x02\xB5\xB6\x05\x92J\x02\xB6\xB7" +
        "\x05\x96L\x02\xB7\xB8\x05\x98M\x02\xB8\xB9\x07\x04\x02\x02\xB9\xBA\x05" +
        "\x8AF\x02\xBA\xBB\x07\x05\x02\x02\xBB\xBC\x05T+\x02\xBC\v\x03\x02\x02" +
        "\x02\xBD\xBE\x05\x0E\b\x02\xBE\xBF\x07*\x02\x02\xBF\r\x03\x02\x02\x02" +
        "\xC0\xC4\x03\x02\x02\x02\xC1\xC2\x07\x13\x02\x02\xC2\xC4\x05\x0E\b\x02" +
        "\xC3\xC0\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC4\x0F\x03\x02\x02\x02" +
        "\xC5\xC6\x05\x0E\b\x02\xC6\xC7\x07)\x02\x02\xC7\xC8\x05\x98M\x02\xC8\xC9" +
        "\x07\x06\x02\x02\xC9\xCA\x05\x12\n\x02\xCA\xCB\x07\x07\x02\x02\xCB\x11" +
        "\x03\x02\x02\x02\xCC\xD4\b\n\x01\x02\xCD\xCE\f\x03\x02\x02\xCE\xCF\x05" +
        "\x92J\x02\xCF\xD0\x05\x14\v\x02\xD0\xD1\x07\x03\x02\x02\xD1\xD3\x03\x02" +
        "\x02\x02\xD2\xCD\x03\x02\x02\x02\xD3\xD6\x03\x02\x02\x02\xD4\xD2\x03\x02" +
        "\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5\x13\x03\x02\x02\x02\xD6\xD4\x03\x02" +
        "\x02\x02\xD7\xDD\x05\x16\f\x02\xD8\xD9\x05\x16\f\x02\xD9\xDA\x07\b\x02" +
        "\x02\xDA\xDB\x05\x14\v\x02\xDB\xDD\x03\x02\x02\x02\xDC\xD7\x03\x02\x02" +
        "\x02\xDC\xD8\x03\x02\x02\x02\xDD\x15\x03\x02\x02\x02\xDE\xDF\x05\x96L" +
        "\x02\xDF\xE0\x05\x98M\x02\xE0\x17\x03\x02\x02\x02\xE1\xE7\x05\x1A\x0E" +
        "\x02\xE2\xE3\x05\x1A\x0E\x02\xE3\xE4\x07\b\x02\x02\xE4\xE5\x05\x18\r\x02" +
        "\xE5\xE7\x03\x02\x02\x02\xE6\xE1\x03\x02\x02\x02\xE6\xE2\x03\x02\x02\x02" +
        "\xE7\x19\x03\x02\x02\x02\xE8\xE9\x05\x96L\x02\xE9\xEA\x05\x98M\x02\xEA" +
        "\xF1\x03\x02\x02\x02\xEB\xEC\x05\x96L\x02\xEC\xED\x05\x98M\x02\xED\xEE" +
        "\x07\x14\x02\x02\xEE\xEF\x05\x1C\x0F\x02\xEF\xF1\x03\x02\x02\x02\xF0\xE8" +
        "\x03\x02\x02\x02\xF0\xEB\x03\x02\x02\x02\xF1\x1B\x03\x02\x02\x02\xF2\xF3" +
        "\b\x0F\x01\x02\xF3\xF4\x050\x19\x02\xF4\xF5\x07\x14\x02\x02\xF5\xF6\x05" +
        "\x1C\x0F\x1F\xF6\u0111\x03\x02\x02\x02\xF7\xF8\x05*\x16\x02\xF8\xF9\x05" +
        "\x1C\x0F\x10\xF9\u0111\x03\x02\x02\x02\xFA\xFB\x07\x15\x02\x02\xFB\u0111" +
        "\x050\x19\x02\xFC\xFD\x07\x16\x02\x02\xFD\u0111\x050\x19\x02\xFE\xFF\x07" +
        "\x1F\x02\x02\xFF\u0111\x05\x1C\x0F\r\u0100\u0101\x07\x0F\x02\x02\u0101" +
        "\u0111\x05\x1C\x0F\f\u0102\u0103\x07\x0E\x02\x02\u0103\u0111\x05\x1C\x0F" +
        "\v\u0104\u0105\x050\x19\x02\u0105\u0106\x07\x15\x02\x02\u0106\u0111\x03" +
        "\x02\x02\x02\u0107\u0108\x050\x19\x02\u0108\u0109\x07\x16\x02\x02\u0109" +
        "\u0111\x03\x02\x02\x02\u010A\u0111\x050\x19\x02\u010B\u0111\x05&\x14\x02" +
        "\u010C\u0111\x05$\x13\x02\u010D\u0111\x05\x1E\x10\x02\u010E\u0111\x07" +
        "D\x02\x02\u010F\u0111\x07I\x02\x02\u0110\xF2\x03\x02\x02\x02\u0110\xF7" +
        "\x03\x02\x02\x02\u0110\xFA\x03\x02\x02\x02\u0110\xFC\x03\x02\x02\x02\u0110" +
        "\xFE\x03\x02\x02\x02\u0110\u0100\x03\x02\x02\x02\u0110\u0102\x03\x02\x02" +
        "\x02\u0110\u0104\x03\x02\x02\x02\u0110\u0107\x03\x02\x02\x02\u0110\u010A" +
        "\x03\x02\x02\x02\u0110\u010B\x03\x02\x02\x02\u0110\u010C\x03\x02\x02\x02" +
        "\u0110\u010D\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110\u010F\x03" +
        "\x02\x02\x02\u0111\u0141\x03\x02\x02\x02\u0112\u0113\f\x1E\x02\x02\u0113" +
        "\u0114\x07>\x02\x02\u0114\u0115\x05\x1C\x0F\x02\u0115\u0116\x07*\x02\x02" +
        "\u0116\u0117\x05\x1C\x0F\x1F\u0117\u0140\x03\x02\x02\x02\u0118\u0119\f" +
        "\x1D\x02\x02\u0119\u011A\x07\x1B\x02\x02\u011A\u0140\x05\x1C\x0F\x1E\u011B" +
        "\u011C\f\x1C\x02\x02\u011C\u011D\x07\x18\x02\x02\u011D\u0140\x05\x1C\x0F" +
        "\x1D\u011E\u011F\f\x1B\x02\x02\u011F\u0120\x07\x1A\x02\x02\u0120\u0140" +
        "\x05\x1C\x0F\x1C\u0121\u0122\f\x1A\x02\x02\u0122\u0123\x07\x19\x02\x02" +
        "\u0123\u0140\x05\x1C\x0F\x1B\u0124\u0125\f\x19\x02\x02\u0125\u0126\x07" +
        "\x17\x02\x02\u0126\u0140\x05\x1C\x0F\x1A\u0127\u0128\f\x18\x02\x02\u0128" +
        "\u0129\x07\x1C\x02\x02\u0129\u0140\x05\x1C\x0F\x19\u012A\u012B\f\x17\x02" +
        "\x02\u012B\u012C\x07 \x02\x02\u012C\u0140\x05\x1C\x0F\x18\u012D\u012E" +
        "\f\x16\x02\x02\u012E\u012F\x07!\x02\x02\u012F\u0140\x05\x1C\x0F\x17\u0130" +
        "\u0131\f\x15\x02\x02\u0131\u0132\x07\t\x02\x02\u0132\u0140\x05\x1C\x0F" +
        "\x16\u0133\u0134\f\x14\x02\x02\u0134\u0135\x07\x1D\x02\x02\u0135\u0140" +
        "\x05\x1C\x0F\x15\u0136\u0137\f\x13\x02\x02\u0137\u0138\x07\x1E\x02\x02" +
        "\u0138\u0140\x05\x1C\x0F\x14\u0139\u013A\f\x12\x02\x02\u013A\u013B\t\x02" +
        "\x02\x02\u013B\u0140\x05\x1C\x0F\x13\u013C\u013D\f\x11\x02\x02\u013D\u013E" +
        "\t\x03\x02\x02\u013E\u0140\x05\x1C\x0F\x12\u013F\u0112\x03\x02\x02\x02" +
        "\u013F\u0118\x03\x02\x02\x02\u013F\u011B\x03\x02\x02\x02\u013F\u011E\x03" +
        "\x02\x02\x02\u013F\u0121\x03\x02\x02\x02\u013F\u0124\x03\x02\x02\x02\u013F" +
        "\u0127\x03\x02\x02\x02\u013F\u012A\x03\x02\x02\x02\u013F\u012D\x03\x02" +
        "\x02\x02\u013F\u0130\x03\x02\x02\x02\u013F\u0133\x03\x02\x02\x02\u013F" +
        "\u0136\x03\x02\x02\x02\u013F\u0139\x03\x02\x02\x02\u013F\u013C\x03\x02" +
        "\x02\x02\u0140\u0143\x03\x02\x02\x02\u0141\u013F\x03\x02\x02\x02\u0141" +
        "\u0142\x03\x02\x02\x02\u0142\x1D\x03\x02\x02\x02\u0143\u0141\x03\x02\x02" +
        "\x02\u0144\u0145\x07O\x02\x02\u0145\u0146\x05 \x11\x02\u0146\x1F\x03\x02" +
        "\x02\x02\u0147\u014D\x05V,\x02\u0148\u0149\x07\x04\x02\x02\u0149\u014A" +
        "\x05\"\x12\x02\u014A\u014B\x07\x05\x02\x02\u014B\u014D\x03\x02\x02\x02" +
        "\u014C\u0147\x03\x02\x02\x02\u014C\u0148\x03\x02\x02\x02\u014D!\x03\x02" +
        "\x02\x02\u014E\u014F\b\x12\x01\x02\u014F\u0150\x05\x1C\x0F\x02\u0150\u0156" +
        "\x03\x02\x02\x02\u0151\u0152\f\x03\x02\x02\u0152\u0153\x07\b\x02\x02\u0153" +
        "\u0155\x05\x1C\x0F\x02\u0154\u0151\x03\x02\x02\x02\u0155\u0158\x03\x02" +
        "\x02\x02\u0156\u0154\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157" +
        "#\x03\x02\x02\x02\u0158\u0156\x03\x02\x02\x02\u0159\u015A\x07=\x02\x02" +
        "\u015A\u015B\x07\x04\x02\x02\u015B\u015C\x05\x1C\x0F\x02\u015C\u015D\x07" +
        "\b\x02\x02\u015D\u015E\x05\x1C\x0F\x02\u015E\u015F\x07\b\x02\x02\u015F" +
        "\u0160\x05\x1C\x0F\x02\u0160\u0161\x05(\x15\x02\u0161\u0162\x07\x05\x02" +
        "\x02\u0162%\x03\x02\x02\x02\u0163\u0164\x07@\x02\x02\u0164\u0165\x07\x04" +
        "\x02\x02\u0165\u0166\x05\x1C\x0F\x02\u0166\u0167\x07\b\x02\x02\u0167\u0168" +
        "\x05\x1C\x0F\x02\u0168\u0169\x05(\x15\x02\u0169\u016A\x07\x05\x02\x02" +
        "\u016A\'\x03\x02\x02\x02\u016B\u0171\x03\x02\x02\x02\u016C\u016D\x07\b" +
        "\x02\x02\u016D\u016E\x050\x19\x02\u016E\u016F\x05(\x15\x02\u016F\u0171" +
        "\x03\x02\x02\x02\u0170\u016B\x03\x02\x02\x02\u0170\u016C\x03\x02\x02\x02" +
        "\u0171)\x03\x02\x02\x02\u0172\u0173\x07\x04\x02\x02\u0173\u0174\x05,\x17" +
        "\x02\u0174\u0175\x05\x96L\x02\u0175\u0176\x07\x05\x02\x02\u0176+\x03\x02" +
        "\x02\x02\u0177\u0178\x05.\x18\x02\u0178-\x03\x02\x02\x02\u0179\u017D\x07" +
        "&\x02\x02\u017A\u017B\x07)\x02\x02\u017B\u017D\x07-\x02\x02\u017C\u0179" +
        "\x03\x02\x02\x02\u017C\u017A\x03\x02\x02\x02\u017D/\x03\x02\x02\x02\u017E" +
        "\u017F\b\x19\x01\x02\u017F\u01A5\x05F$\x02\u0180\u01A5\x07-\x02\x02\u0181" +
        "\u01A5\x07K\x02\x02\u0182\u01A5\x07E\x02\x02\u0183\u0184\x07\x10\x02\x02" +
        "\u0184\u0185\x07\x04\x02\x02\u0185\u0186\x05\"\x12\x02\u0186\u0187\x07" +
        "\x05\x02\x02\u0187\u01A5\x03\x02\x02\x02\u0188\u01A5\x05@!\x02\u0189\u01A5" +
        "\x07N\x02\x02\u018A\u018B\x07\x04\x02\x02\u018B\u018C\x05\"\x12\x02\u018C" +
        "\u018D\x07\x05\x02\x02\u018D\u01A5\x03\x02\x02\x02\u018E\u01A5\x052\x1A" +
        "\x02\u018F\u0190\x07&\x02\x02\u0190\u0191\x07\x04\x02\x02\u0191\u0192" +
        "\x05\x8AF\x02\u0192\u0193\x07\x05\x02\x02\u0193\u0194\x05V,\x02\u0194" +
        "\u01A5\x03\x02\x02\x02\u0195\u0196\x07C\x02\x02\u0196\u0197\x05\"\x12" +
        "\x02\u0197\u0198\x07*\x02\x02\u0198\u0199\x07\x05\x02\x02\u0199\u01A5" +
        "\x03\x02\x02\x02\u019A\u019B\x07A\x02\x02\u019B\u019C\x056\x1C\x02\u019C" +
        "\u019D\x07\x12\x02\x02\u019D\u019E\x07\x05\x02\x02\u019E\u01A5\x03\x02" +
        "\x02\x02\u019F\u01A0\x07B\x02\x02\u01A0\u01A1\x054\x1B\x02\u01A1\u01A2" +
        "\x07\x07\x02\x02\u01A2\u01A3\x07\x05\x02\x02\u01A3\u01A5\x03\x02\x02\x02" +
        "\u01A4\u017E\x03\x02\x02\x02\u01A4\u0180\x03\x02\x02\x02\u01A4\u0181\x03" +
        "\x02\x02\x02\u01A4\u0182\x03\x02\x02\x02\u01A4\u0183\x03\x02\x02\x02\u01A4" +
        "\u0188\x03\x02\x02\x02\u01A4\u0189\x03\x02\x02\x02\u01A4\u018A\x03\x02" +
        "\x02\x02\u01A4\u018E\x03\x02\x02\x02\u01A4\u018F\x03\x02\x02\x02\u01A4" +
        "\u0195\x03\x02\x02\x02\u01A4\u019A\x03\x02\x02\x02\u01A4\u019F\x03\x02" +
        "\x02\x02\u01A5\u01E5\x03\x02\x02\x02\u01A6\u01A7\f\x18\x02\x02\u01A7\u01E4" +
        "\x05J&\x02\u01A8\u01A9\f\x13\x02\x02\u01A9\u01AA\x07%\x02\x02\u01AA\u01E4" +
        "\x05\x98M\x02\u01AB\u01AC\f\x12\x02\x02\u01AC\u01AD\x07\x11\x02\x02\u01AD" +
        "\u01AE\x05\"\x12\x02\u01AE\u01AF\x07?\x02\x02\u01AF\u01B0\x07\t\x02\x02" +
        "\u01B0\u01B1\x05\"\x12\x02\u01B1\u01B2\x07\x12\x02\x02\u01B2\u01E4\x03" +
        "\x02\x02\x02\u01B3\u01B4\f\x11\x02\x02\u01B4\u01B5\x07\x11\x02\x02\u01B5" +
        "\u01B6\x05\"\x12\x02\u01B6\u01B7\x07?\x02\x02\u01B7\u01B8\x05\"\x12\x02" +
        "\u01B8\u01B9\x07\x12\x02\x02\u01B9\u01E4\x03\x02\x02\x02\u01BA\u01BB\f" +
        "\x10\x02\x02\u01BB\u01BC\x07\x11\x02\x02\u01BC\u01BD\x07\t\x02\x02\u01BD" +
        "\u01BE\x05\"\x12\x02\u01BE\u01BF\x07?\x02\x02\u01BF\u01C0\x05\"\x12\x02" +
        "\u01C0\u01C1\x07\x12\x02\x02\u01C1\u01E4\x03\x02\x02\x02\u01C2\u01C3\f" +
        "\x0F\x02\x02\u01C3\u01C4\x07\x11\x02\x02\u01C4\u01C5\x07\t\x02\x02\u01C5" +
        "\u01C6\x05\"\x12\x02\u01C6\u01C7\x07?\x02\x02\u01C7\u01C8\x07\t\x02\x02" +
        "\u01C8\u01C9\x05\"\x12\x02\u01C9\u01CA\x07\x12\x02\x02\u01CA\u01E4\x03" +
        "\x02\x02\x02\u01CB\u01CC\f\x0E\x02\x02\u01CC\u01CD\x07\x11\x02\x02\u01CD" +
        "\u01CE\x05\"\x12\x02\u01CE\u01CF\x07?\x02\x02\u01CF\u01D0\x07\x12\x02" +
        "\x02\u01D0\u01E4\x03\x02\x02\x02\u01D1\u01D2\f\r\x02\x02\u01D2\u01D3\x07" +
        "\x11\x02\x02\u01D3\u01D4\x07\t\x02\x02\u01D4\u01D5\x05\"\x12\x02\u01D5" +
        "\u01D6\x07?\x02\x02\u01D6\u01D7\x07\x12\x02\x02\u01D7\u01E4\x03\x02\x02" +
        "\x02\u01D8\u01D9\f\f\x02\x02\u01D9\u01DA\x07\x11\x02\x02\u01DA\u01DB\x07" +
        "\t\x02\x02\u01DB\u01DC\x05\"\x12\x02\u01DC\u01DD\x07\x12\x02\x02\u01DD" +
        "\u01E4\x03\x02\x02\x02\u01DE\u01DF\f\v\x02\x02\u01DF\u01E0\x07\x11\x02" +
        "\x02\u01E0\u01E1\x05\"\x12\x02\u01E1\u01E2\x07\x12\x02\x02\u01E2\u01E4" +
        "\x03\x02\x02\x02\u01E3\u01A6\x03\x02\x02\x02\u01E3\u01A8\x03\x02\x02\x02" +
        "\u01E3\u01AB\x03\x02\x02\x02\u01E3\u01B3\x03\x02\x02\x02\u01E3\u01BA\x03" +
        "\x02\x02\x02\u01E3\u01C2\x03\x02\x02\x02\u01E3\u01CB\x03\x02\x02\x02\u01E3" +
        "\u01D1\x03\x02\x02\x02\u01E3\u01D8\x03\x02\x02\x02\u01E3\u01DE\x03\x02" +
        "\x02\x02\u01E4\u01E7\x03\x02\x02\x02\u01E5\u01E3\x03\x02\x02\x02\u01E5" +
        "\u01E6\x03\x02\x02\x02\u01E61\x03\x02\x02\x02\u01E7\u01E5\x03\x02\x02" +
        "\x02\u01E8\u01E9\x07(\x02\x02\u01E9\u01EA\x05 \x11\x02\u01EA3\x03\x02";
    LPCParser._serializedATNSegment1 = "\x02\x02\u01EB\u01F1\x03\x02\x02\x02\u01EC\u01F1\x05<\x1F\x02\u01ED\u01EE" +
        "\x05<\x1F\x02\u01EE\u01EF\x07\b\x02\x02\u01EF\u01F1\x03\x02\x02\x02\u01F0" +
        "\u01EB\x03\x02\x02\x02\u01F0\u01EC\x03\x02\x02\x02\u01F0\u01ED\x03\x02" +
        "\x02\x02\u01F15\x03\x02\x02\x02\u01F2\u01F8\x03\x02\x02\x02\u01F3\u01F8" +
        "\x058\x1D\x02\u01F4\u01F5\x058\x1D\x02\u01F5\u01F6\x07\b\x02\x02\u01F6" +
        "\u01F8\x03\x02\x02\x02\u01F7\u01F2\x03\x02\x02\x02\u01F7\u01F3\x03\x02" +
        "\x02\x02\u01F7\u01F4\x03\x02\x02\x02\u01F87\x03\x02\x02\x02\u01F9\u01FA" +
        "\b\x1D\x01\x02\u01FA\u01FB\x05:\x1E\x02\u01FB\u0201\x03\x02\x02\x02\u01FC" +
        "\u01FD\f\x03\x02\x02\u01FD\u01FE\x07\b\x02\x02\u01FE\u0200\x05:\x1E\x02" +
        "\u01FF\u01FC\x03\x02\x02\x02\u0200\u0203\x03\x02\x02\x02\u0201\u01FF\x03" +
        "\x02\x02\x02\u0201\u0202\x03\x02\x02\x02\u02029\x03\x02\x02\x02\u0203" +
        "\u0201\x03\x02\x02\x02\u0204\u0205\x05\x1C\x0F\x02\u0205\u0206\x07*\x02" +
        "\x02\u0206\u0207\x05\x1C\x0F\x02\u0207;\x03\x02\x02\x02\u0208\u0209\b" +
        "\x1F\x01\x02\u0209\u020A\x05> \x02\u020A\u0210\x03\x02\x02\x02\u020B\u020C" +
        "\f\x03\x02\x02\u020C\u020D\x07\b\x02\x02\u020D\u020F\x05> \x02\u020E\u020B" +
        "\x03\x02\x02\x02\u020F\u0212\x03\x02\x02\x02\u0210\u020E\x03\x02\x02\x02" +
        "\u0210\u0211\x03\x02\x02\x02\u0211=\x03\x02\x02\x02\u0212\u0210\x03\x02" +
        "\x02\x02\u0213\u0218\x05\x1C\x0F\x02\u0214\u0215\x05\x1C\x0F\x02\u0215" +
        "\u0216\x07/\x02\x02\u0216\u0218\x03\x02\x02\x02\u0217\u0213\x03\x02\x02" +
        "\x02\u0217\u0214\x03\x02\x02\x02\u0218?\x03\x02\x02\x02\u0219\u021A\x05" +
        "B\"\x02\u021AA\x03\x02\x02\x02\u021B\u021C\b\"\x01\x02\u021C\u021D\x07" +
        "L\x02\x02\u021D\u0222\x03\x02\x02\x02\u021E\u021F\f\x03\x02\x02\u021F" +
        "\u0221\x07L\x02\x02\u0220\u021E\x03\x02\x02\x02\u0221\u0224\x03\x02\x02" +
        "\x02\u0222\u0220\x03\x02\x02\x02\u0222\u0223\x03\x02\x02\x02\u0223C\x03" +
        "\x02\x02\x02\u0224\u0222\x03\x02\x02\x02\u0225\u0226\b#\x01\x02\u0226" +
        "\u022C\x05B\"\x02\u0227\u0228\x07\x04\x02\x02\u0228\u0229\x05D#\x02\u0229" +
        "\u022A\x07\x05\x02\x02\u022A\u022C\x03\x02\x02\x02\u022B\u0225\x03\x02" +
        "\x02\x02\u022B\u0227\x03\x02\x02\x02\u022C\u0232\x03\x02\x02\x02\u022D" +
        "\u022E\f\x03\x02\x02\u022E\u022F\x07\r\x02\x02\u022F\u0231\x05D#\x04\u0230" +
        "\u022D\x03\x02\x02\x02\u0231\u0234\x03\x02\x02\x02\u0232\u0230\x03\x02" +
        "\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233E\x03\x02\x02\x02\u0234\u0232" +
        "\x03\x02\x02\x02\u0235\u0236\x05R*\x02\u0236\u0237\x07\x04\x02\x02\u0237" +
        "\u0238\x054\x1B\x02\u0238\u0239\x07\x05\x02\x02\u0239\u0256\x03\x02\x02" +
        "\x02\u023A\u023B\x07<\x02\x02\u023B\u023C\x07\x04\x02\x02\u023C\u023D" +
        "\x054\x1B\x02\u023D\u023E\x07\x05\x02\x02\u023E\u0256\x03\x02\x02\x02" +
        "\u023F\u0240\x07<\x02\x02\u0240\u0241\x07\x04\x02\x02\u0241\u0242\x07" +
        ")\x02\x02\u0242\u0243\x07-\x02\x02\u0243\u0244\x05N(\x02\u0244\u0245\x07" +
        "\x05\x02\x02\u0245\u0256\x03\x02\x02\x02\u0246\u0247\x07-\x02\x02\u0247" +
        "\u0248\x07\x04\x02\x02\u0248\u0249\x054\x1B\x02\u0249\u024A\x07\x05\x02" +
        "\x02\u024A\u0256\x03\x02\x02\x02\u024B\u0256\x05H%\x02\u024C\u0256\x05" +
        "J&\x02\u024D\u024E\x07\x04\x02\x02\u024E\u024F\x07\n\x02\x02\u024F\u0250" +
        "\x05\"\x12\x02\u0250\u0251\x07\x05\x02\x02\u0251\u0252\x07\x04\x02\x02" +
        "\u0252\u0253\x054\x1B\x02\u0253\u0254\x07\x05\x02\x02\u0254\u0256\x03" +
        "\x02\x02\x02\u0255\u0235\x03\x02\x02\x02\u0255\u023A\x03\x02\x02\x02\u0255" +
        "\u023F\x03\x02\x02\x02\u0255\u0246\x03\x02\x02\x02\u0255\u024B\x03\x02" +
        "\x02\x02\u0255\u024C\x03\x02\x02\x02\u0255\u024D\x03\x02\x02\x02\u0256" +
        "G\x03\x02\x02\x02\u0257\u0258\x05L\'\x02\u0258\u0259\x07\x04\x02\x02\u0259" +
        "\u025A\x054\x1B\x02\u025A\u025B\x07\x05\x02\x02\u025BI\x03\x02\x02\x02" +
        "\u025C\u025D\x07%\x02\x02\u025D\u025E\x05\x98M\x02\u025E\u025F\x07\x04" +
        "\x02\x02\u025F\u0260\x054\x1B\x02\u0260\u0261\x07\x05\x02\x02\u0261K\x03" +
        "\x02\x02\x02\u0262\u026D\x07K\x02\x02\u0263\u0264\x07+\x02\x02\u0264\u026D" +
        "\x05\x98M\x02\u0265\u0266\x07&\x02\x02\u0266\u0267\x07+\x02\x02\u0267" +
        "\u026D\x05\x98M\x02\u0268\u0269\x05\x98M\x02\u0269\u026A\x07+\x02\x02" +
        "\u026A\u026B\x05\x98M\x02\u026B\u026D\x03\x02\x02\x02\u026C\u0262\x03" +
        "\x02\x02\x02\u026C\u0263\x03\x02\x02\x02\u026C\u0265\x03\x02\x02\x02\u026C" +
        "\u0268\x03\x02\x02\x02\u026DM\x03\x02\x02\x02\u026E\u0274\b(\x01\x02\u026F" +
        "\u0270\f\x03\x02\x02\u0270\u0271\x07\b\x02\x02\u0271\u0273\x05P)\x02\u0272" +
        "\u026F\x03\x02\x02\x02\u0273\u0276\x03\x02\x02\x02\u0274\u0272\x03\x02" +
        "\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275O\x03\x02\x02\x02\u0276\u0274" +
        "\x03\x02\x02\x02\u0277\u0278\x05\x98M\x02\u0278\u0279\x07*\x02\x02\u0279" +
        "\u027A\x05\x1C\x0F\x02\u027AQ\x03\x02\x02\x02\u027B\u027C\x07.\x02\x02" +
        "\u027C\u027D\x07+\x02\x02\u027D\u0282\x05\x98M\x02\u027E\u027F\x07.\x02" +
        "\x02\u027F\u0280\x07+\x02\x02\u0280\u0282\x07<\x02\x02\u0281\u027B\x03" +
        "\x02\x02\x02\u0281\u027E\x03\x02\x02\x02\u0282S\x03\x02\x02\x02\u0283" +
        "\u0286\x05V,\x02\u0284\u0286\x07\x03\x02\x02\u0285\u0283\x03\x02\x02\x02" +
        "\u0285\u0284\x03\x02\x02\x02\u0286U\x03\x02\x02\x02\u0287\u0288\x07\x06" +
        "\x02\x02\u0288\u0289\x05X-\x02\u0289\u028A\x07\x07\x02\x02\u028AW\x03" +
        "\x02\x02\x02\u028B\u0293\x03\x02\x02\x02\u028C\u028D\x05b2\x02\u028D\u028E" +
        "\x05X-\x02\u028E\u0293\x03\x02\x02\x02\u028F\u0290\x05Z.\x02\u0290\u0291" +
        "\x05X-\x02\u0291\u0293\x03\x02\x02\x02\u0292\u028B\x03\x02\x02\x02\u0292" +
        "\u028C\x03\x02\x02\x02\u0292\u028F\x03\x02\x02\x02\u0293Y\x03\x02\x02" +
        "\x02\u0294\u0295\x05,\x17\x02\u0295\u0296\x05\\/\x02\u0296\u0297\x07\x03" +
        "\x02\x02\u0297[\x03\x02\x02\x02\u0298\u029E\x05^0\x02\u0299\u029A\x05" +
        "^0\x02\u029A\u029B\x07\b\x02\x02\u029B\u029C\x05\\/\x02\u029C\u029E\x03" +
        "\x02\x02\x02\u029D\u0298\x03\x02\x02\x02\u029D\u0299\x03\x02\x02\x02\u029E" +
        "]\x03\x02\x02\x02\u029F\u02A0\x05\x96L\x02\u02A0\u02A1\x05`1\x02\u02A1" +
        "\u02A8\x03\x02\x02\x02\u02A2\u02A3\x05\x96L\x02\u02A3\u02A4\x05`1\x02" +
        "\u02A4\u02A5\x07\x14\x02\x02\u02A5\u02A6\x05\x1C\x0F\x02\u02A6\u02A8\x03" +
        "\x02\x02\x02\u02A7\u029F\x03\x02\x02\x02\u02A7\u02A2\x03\x02\x02\x02\u02A8" +
        "_\x03\x02\x02\x02\u02A9\u02AA\t\x04\x02\x02\u02AAa\x03\x02\x02\x02\u02AB" +
        "\u02AC\x05\"\x12\x02\u02AC\u02AD\x07\x03\x02\x02\u02AD\u02BC\x03\x02\x02" +
        "\x02\u02AE\u02BC\x05\x86D\x02\u02AF\u02BC\x05d3\x02\u02B0\u02BC\x05f4" +
        "\x02\u02B1\u02BC\x05h5\x02\u02B2\u02BC\x05\x84C\x02\u02B3\u02BC\x05V," +
        "\x02\u02B4\u02BC\x05x=\x02\u02B5\u02BC\x05t;\x02\u02B6\u02BC\x07\x03\x02" +
        "\x02\u02B7\u02B8\x07\'\x02\x02\u02B8\u02BC\x07\x03\x02\x02\u02B9\u02BA" +
        "\x07,\x02\x02\u02BA\u02BC\x07\x03\x02\x02\u02BB\u02AB\x03\x02\x02\x02" +
        "\u02BB\u02AE\x03\x02\x02\x02\u02BB\u02AF\x03\x02\x02\x02\u02BB\u02B0\x03" +
        "\x02\x02\x02\u02BB\u02B1\x03\x02\x02\x02\u02BB\u02B2\x03\x02\x02\x02\u02BB" +
        "\u02B3\x03\x02\x02\x02\u02BB\u02B4\x03\x02\x02\x02\u02BB\u02B5\x03\x02" +
        "\x02\x02\u02BB\u02B6\x03\x02\x02\x02\u02BB\u02B7\x03\x02\x02\x02\u02BB" +
        "\u02B9\x03\x02\x02\x02\u02BCc\x03\x02\x02\x02\u02BD\u02BE\x079\x02\x02" +
        "\u02BE\u02BF\x07\x04\x02\x02\u02BF\u02C0\x05\"\x12\x02\u02C0\u02C1\x07" +
        "\x05\x02\x02\u02C1\u02C2\x05b2\x02\u02C2e\x03\x02\x02\x02\u02C3\u02C4" +
        "\x07:\x02\x02\u02C4\u02C5\x05b2\x02\u02C5\u02C6\x079\x02\x02\u02C6\u02C7" +
        "\x07\x04\x02\x02\u02C7\u02C8\x05\"\x12\x02\u02C8\u02C9\x07\x05\x02\x02" +
        "\u02C9\u02CA\x07\x03\x02\x02\u02CAg\x03\x02\x02\x02\u02CB\u02CC\x077\x02" +
        "\x02\u02CC\u02CD\x07\x04\x02\x02\u02CD\u02CE\x05\"\x12\x02\u02CE\u02CF" +
        "\x07\x05\x02\x02\u02CF\u02D0\x07\x06\x02\x02\u02D0\u02D1\x05j6\x02\u02D1" +
        "\u02D2\x05l7\x02\u02D2\u02D3\x05n8\x02\u02D3\u02D4\x07\x07\x02\x02\u02D4" +
        "i\x03\x02\x02\x02\u02D5\u02DD\b6\x01\x02\u02D6\u02D7\f\x03\x02\x02\u02D7" +
        "\u02D8\x05,\x17\x02\u02D8\u02D9\x05\\/\x02\u02D9\u02DA\x07\x03\x02\x02" +
        "\u02DA\u02DC\x03\x02\x02\x02\u02DB\u02D6\x03\x02\x02\x02\u02DC\u02DF\x03" +
        "\x02\x02\x02\u02DD\u02DB\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DE" +
        "k\x03\x02\x02\x02\u02DF\u02DD\x03\x02\x02\x02\u02E0\u02E1\x078\x02\x02" +
        "\u02E1\u02E2\x05p9\x02\u02E2\u02E3\x07*\x02\x02\u02E3\u02ED\x03\x02\x02" +
        "\x02\u02E4\u02E5\x078\x02\x02\u02E5\u02E6\x05p9\x02\u02E6\u02E7\x07?\x02" +
        "\x02\u02E7\u02E8\x05p9\x02\u02E8\u02E9\x07*\x02\x02\u02E9\u02ED\x03\x02" +
        "\x02\x02\u02EA\u02EB\x07;\x02\x02\u02EB\u02ED\x07*\x02\x02\u02EC\u02E0" +
        "\x03\x02\x02\x02\u02EC\u02E4\x03\x02\x02\x02\u02EC\u02EA\x03\x02\x02\x02" +
        "\u02EDm\x03\x02\x02\x02\u02EE\u02EF\x05l7\x02\u02EF\u02F0\x05n8\x02\u02F0" +
        "\u02F6\x03\x02\x02\x02\u02F1\u02F2\x05b2\x02\u02F2\u02F3\x05n8\x02\u02F3" +
        "\u02F6\x03\x02\x02\x02\u02F4\u02F6\x03\x02\x02\x02\u02F5\u02EE\x03\x02" +
        "\x02\x02\u02F5\u02F1\x03\x02\x02\x02\u02F5\u02F4\x03\x02\x02\x02\u02F6" +
        "o\x03\x02\x02\x02\u02F7\u02FB\x05r:\x02\u02F8\u02FB\x07N\x02\x02\u02F9" +
        "\u02FB\x05D#\x02\u02FA\u02F7\x03\x02\x02\x02\u02FA\u02F8\x03\x02\x02\x02" +
        "\u02FA\u02F9\x03\x02\x02\x02\u02FBq\x03\x02\x02\x02\u02FC\u02FD\b:\x01" +
        "\x02\u02FD\u02FE\x07\x04\x02\x02\u02FE\u02FF\x05r:\x02\u02FF\u0300\x07" +
        "\x05\x02\x02\u0300\u0309\x03\x02\x02\x02\u0301\u0309\x07D\x02\x02\u0302" +
        "\u0303\x07\x0E\x02\x02\u0303\u0309\x07D\x02\x02\u0304\u0305\x07\x1F\x02" +
        "\x02\u0305\u0309\x07D\x02\x02\u0306\u0307\x07\x0F\x02\x02\u0307\u0309" +
        "\x07D\x02\x02\u0308\u02FC\x03\x02\x02\x02\u0308\u0301\x03\x02\x02\x02" +
        "\u0308\u0302\x03\x02\x02\x02\u0308\u0304\x03\x02\x02\x02\u0308\u0306\x03" +
        "\x02\x02\x02\u0309\u0336\x03\x02\x02\x02\u030A\u030B\f\x15\x02\x02\u030B" +
        "\u030C\x07\x1A\x02\x02\u030C\u0335\x05r:\x16\u030D\u030E\f\x14\x02\x02" +
        "\u030E\u030F\x07\x19\x02\x02\u030F\u0335\x05r:\x15\u0310\u0311\f\x13\x02" +
        "\x02\u0311\u0312\x07\x17\x02\x02\u0312\u0335\x05r:\x14\u0313\u0314\f\x12" +
        "\x02\x02\u0314\u0315\x07\x1C\x02\x02\u0315\u0335\x05r:\x13\u0316\u0317" +
        "\f\x11\x02\x02\u0317\u0318\x07 \x02\x02\u0318\u0335\x05r:\x12\u0319\u031A" +
        "\f\x10\x02\x02\u031A\u031B\x07!\x02\x02\u031B\u0335\x05r:\x11\u031C\u031D" +
        "\f\x0F\x02\x02\u031D\u031E\x07\t\x02\x02\u031E\u0335\x05r:\x10\u031F\u0320" +
        "\f\x0E\x02\x02\u0320\u0321\x07\x1D\x02\x02\u0321\u0335\x05r:\x0F\u0322" +
        "\u0323\f\r\x02\x02\u0323\u0324\x07\x1E\x02\x02\u0324\u0335\x05r:\x0E\u0325" +
        "\u0326\f\v\x02\x02\u0326\u0327\x07\n\x02\x02\u0327\u0335\x05r:\f\u0328" +
        "\u0329\f\n\x02\x02\u0329\u032A\x07\v\x02\x02\u032A\u0335\x05r:\v\u032B" +
        "\u032C\f\t\x02\x02\u032C\u032D\x07\f\x02\x02\u032D\u0335\x05r:\n\u032E" +
        "\u032F\f\b\x02\x02\u032F\u0330\x07\x0E\x02\x02\u0330\u0335\x05r:\t\u0331" +
        "\u0332\f\x07\x02\x02\u0332\u0333\x07\r\x02\x02\u0333\u0335\x05r:\b\u0334" +
        "\u030A\x03\x02\x02\x02\u0334\u030D\x03\x02\x02\x02\u0334\u0310\x03\x02" +
        "\x02\x02\u0334\u0313\x03\x02\x02\x02\u0334\u0316\x03\x02\x02\x02\u0334" +
        "\u0319\x03\x02\x02\x02\u0334\u031C\x03\x02\x02\x02\u0334\u031F\x03\x02" +
        "\x02\x02\u0334\u0322\x03\x02\x02\x02\u0334\u0325\x03\x02\x02\x02\u0334" +
        "\u0328\x03\x02\x02\x02\u0334\u032B\x03\x02\x02\x02\u0334\u032E\x03\x02" +
        "\x02\x02\u0334\u0331\x03\x02\x02\x02\u0335\u0338\x03\x02\x02\x02\u0336" +
        "\u0334\x03\x02\x02\x02\u0336\u0337\x03\x02\x02\x02\u0337s\x03\x02\x02" +
        "\x02\u0338\u0336\x03\x02\x02\x02\u0339\u033A\x075\x02\x02\u033A\u033B" +
        "\x07\x04\x02\x02\u033B\u033C\x05v<\x02\u033C\u033D\x076\x02\x02\u033D" +
        "\u033E\x05\x1C\x0F\x02\u033E\u033F\x07\x05\x02\x02\u033F\u0340\x05b2\x02" +
        "\u0340u\x03\x02\x02\x02\u0341\u0347\x05z>\x02\u0342\u0343\x05z>\x02\u0343" +
        "\u0344\x07\b\x02\x02\u0344\u0345\x05z>\x02\u0345\u0347\x03\x02\x02\x02" +
        "\u0346\u0341\x03\x02\x02\x02\u0346\u0342\x03\x02\x02\x02\u0347w\x03\x02" +
        "\x02\x02\u0348\u0349\x074\x02\x02\u0349\u034A\x07\x04\x02\x02\u034A\u034B" +
        "\x05|?\x02\u034B\u034C\x07\x03\x02\x02\u034C\u034D\x05\x82B\x02\u034D" +
        "\u034E\x07\x03\x02\x02\u034E\u034F\x05\x82B\x02\u034F\u0350\x07\x05\x02" +
        "\x02\u0350\u0351\x05b2\x02\u0351y\x03\x02\x02\x02\u0352\u0356\x07-\x02" +
        "\x02\u0353\u0356\x05\x80A\x02\u0354\u0356\x07K\x02\x02\u0355\u0352\x03" +
        "\x02\x02\x02\u0355\u0353\x03\x02\x02\x02\u0355\u0354\x03\x02\x02\x02\u0356" +
        "{\x03\x02\x02\x02\u0357\u035A\x05\x82B\x02\u0358\u035A\x05~@\x02\u0359" +
        "\u0357\x03\x02\x02\x02\u0359\u0358\x03\x02\x02\x02\u035A}\x03\x02\x02" +
        "\x02\u035B\u035C\x05\x80A\x02\u035C\u035D\x07\x14\x02\x02\u035D\u035E" +
        "\x05\x1C\x0F\x02\u035E\x7F\x03\x02\x02\x02\u035F\u0360\x05,\x17\x02\u0360" +
        "\u0361\x05\x96L\x02\u0361\u0362\x05`1\x02\u0362\x81\x03\x02\x02\x02\u0363" +
        "\u0366\x03\x02\x02\x02\u0364\u0366\x05\"\x12\x02\u0365\u0363\x03\x02\x02" +
        "\x02\u0365\u0364\x03\x02\x02\x02\u0366\x83\x03\x02\x02\x02\u0367\u0368" +
        "\x073\x02\x02\u0368\u036E\x07\x03\x02\x02\u0369\u036A\x073\x02\x02\u036A" +
        "\u036B\x05\"\x12\x02\u036B\u036C\x07\x03\x02\x02\u036C\u036E\x03\x02\x02" +
        "\x02\u036D\u0367\x03\x02\x02\x02\u036D\u0369\x03\x02\x02\x02\u036E\x85" +
        "\x03\x02\x02\x02\u036F\u0370\x071\x02\x02\u0370\u0371\x07\x04\x02\x02" +
        "\u0371\u0372\x05\"\x12\x02\u0372\u0373\x07\x05\x02\x02\u0373\u0374\x05" +
        "b2\x02\u0374\u0375\x05\x88E\x02\u0375\x87\x03\x02\x02\x02\u0376\u037A" +
        "\x03\x02\x02\x02\u0377\u0378\x070\x02\x02\u0378\u037A\x05b2\x02\u0379" +
        "\u0376\x03\x02\x02\x02\u0379\u0377\x03\x02\x02\x02\u037A\x89\x03\x02\x02" +
        "\x02\u037B\u0381\x03\x02\x02\x02\u037C\u0381\x05\x8CG\x02\u037D\u037E" +
        "\x05\x8CG\x02\u037E\u037F\x07/\x02\x02\u037F\u0381\x03\x02\x02\x02\u0380" +
        "\u037B\x03\x02\x02\x02\u0380\u037C\x03\x02\x02\x02\u0380\u037D\x03\x02" +
        "\x02\x02\u0381\x8B\x03\x02\x02\x02\u0382\u0383\bG\x01\x02\u0383\u0384" +
        "\x05\x8EH\x02\u0384\u038A\x03\x02\x02\x02\u0385\u0386\f\x03\x02\x02\u0386" +
        "\u0387\x07\b\x02\x02\u0387\u0389\x05\x8EH\x02\u0388\u0385\x03\x02\x02" +
        "\x02\u0389\u038C\x03\x02\x02\x02\u038A\u0388\x03\x02\x02\x02\u038A\u038B" +
        "\x03\x02\x02\x02\u038B\x8D\x03\x02\x02\x02\u038C\u038A\x03\x02\x02\x02" +
        "\u038D\u038E\x05,\x17\x02\u038E\u038F\x05\x96L\x02\u038F\u0396\x03\x02" +
        "\x02\x02\u0390\u0391\x05,\x17\x02\u0391\u0392\x05\x96L\x02\u0392\u0393" +
        "\x05`1\x02\u0393\u0396\x03\x02\x02\x02\u0394\u0396\x05`1\x02\u0395\u038D" +
        "\x03\x02\x02\x02\u0395\u0390\x03\x02\x02\x02\u0395\u0394\x03\x02\x02\x02" +
        "\u0396\x8F\x03\x02\x02\x02\u0397\u0398\x05\x0E\b\x02\u0398\u0399\x072" +
        "\x02\x02\u0399\u039A\x05D#\x02\u039A\u039B\x07\x03\x02\x02\u039B\x91\x03" +
        "\x02\x02\x02\u039C\u039D\x05\x0E\b\x02\u039D\u039E\x05\x94K\x02\u039E" +
        "\x93\x03\x02\x02\x02\u039F\u03A2\x05,\x17\x02\u03A0\u03A2\x03\x02\x02" +
        "\x02\u03A1\u039F\x03\x02\x02\x02\u03A1\u03A0\x03\x02\x02\x02\u03A2\x95" +
        "\x03\x02\x02\x02\u03A3\u03A6\x03\x02\x02\x02\u03A4\u03A6\x07\n\x02\x02" +
        "\u03A5\u03A3\x03\x02\x02\x02\u03A5\u03A4\x03\x02\x02\x02\u03A6\x97\x03" +
        "\x02\x02\x02\u03A7\u03A8\t\x04\x02\x02\u03A8\x99\x03\x02\x02\x027\xA4" +
        "\xA9\xB3\xC3\xD4\xDC\xE6\xF0\u0110\u013F\u0141\u014C\u0156\u0170\u017C" +
        "\u01A4\u01E3\u01E5\u01F0\u01F7\u0201\u0210\u0217\u0222\u022B\u0232\u0255" +
        "\u026C\u0274\u0281\u0285\u0292\u029D\u02A7\u02BB\u02DD\u02EC\u02F5\u02FA" +
        "\u0308\u0334\u0336\u0346\u0355\u0359\u0365\u036D\u0379\u0380\u038A\u0395" +
        "\u03A1\u03A5";
    LPCParser._serializedATN = Utils.join([
        LPCParser._serializedATNSegment0,
        LPCParser._serializedATNSegment1,
    ], "");
    return LPCParser;
}(Parser_1.Parser));
exports.LPCParser = LPCParser;
var Lpc_programContext = /** @class */ (function (_super) {
    __extends(Lpc_programContext, _super);
    function Lpc_programContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Lpc_programContext.prototype.program = function () {
        return this.getRuleContext(0, ProgramContext);
    };
    Lpc_programContext.prototype.EOF = function () { return this.getToken(LPCParser.EOF, 0); };
    Object.defineProperty(Lpc_programContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_lpc_program; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Lpc_programContext.prototype.enterRule = function (listener) {
        if (listener.enterLpc_program) {
            listener.enterLpc_program(this);
        }
    };
    // @Override
    Lpc_programContext.prototype.exitRule = function (listener) {
        if (listener.exitLpc_program) {
            listener.exitLpc_program(this);
        }
    };
    // @Override
    Lpc_programContext.prototype.accept = function (visitor) {
        if (visitor.visitLpc_program) {
            return visitor.visitLpc_program(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Lpc_programContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Lpc_programContext = Lpc_programContext;
var ProgramContext = /** @class */ (function (_super) {
    __extends(ProgramContext, _super);
    function ProgramContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgramContext.prototype.program = function () {
        return this.tryGetRuleContext(0, ProgramContext);
    };
    ProgramContext.prototype.defination = function () {
        return this.tryGetRuleContext(0, DefinationContext);
    };
    ProgramContext.prototype.possible_semi_colon = function () {
        return this.tryGetRuleContext(0, Possible_semi_colonContext);
    };
    Object.defineProperty(ProgramContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_program; },
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
var Possible_semi_colonContext = /** @class */ (function (_super) {
    __extends(Possible_semi_colonContext, _super);
    function Possible_semi_colonContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Possible_semi_colonContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_possible_semi_colon; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Possible_semi_colonContext.prototype.enterRule = function (listener) {
        if (listener.enterPossible_semi_colon) {
            listener.enterPossible_semi_colon(this);
        }
    };
    // @Override
    Possible_semi_colonContext.prototype.exitRule = function (listener) {
        if (listener.exitPossible_semi_colon) {
            listener.exitPossible_semi_colon(this);
        }
    };
    // @Override
    Possible_semi_colonContext.prototype.accept = function (visitor) {
        if (visitor.visitPossible_semi_colon) {
            return visitor.visitPossible_semi_colon(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Possible_semi_colonContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Possible_semi_colonContext = Possible_semi_colonContext;
var DefinationContext = /** @class */ (function (_super) {
    __extends(DefinationContext, _super);
    function DefinationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefinationContext.prototype.function_defination = function () {
        return this.tryGetRuleContext(0, Function_definationContext);
    };
    DefinationContext.prototype.data_type = function () {
        return this.tryGetRuleContext(0, Data_typeContext);
    };
    DefinationContext.prototype.name_list = function () {
        return this.tryGetRuleContext(0, Name_listContext);
    };
    DefinationContext.prototype.inheritance = function () {
        return this.tryGetRuleContext(0, InheritanceContext);
    };
    DefinationContext.prototype.type_decl = function () {
        return this.tryGetRuleContext(0, Type_declContext);
    };
    DefinationContext.prototype.modifier_change = function () {
        return this.tryGetRuleContext(0, Modifier_changeContext);
    };
    Object.defineProperty(DefinationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_defination; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefinationContext.prototype.enterRule = function (listener) {
        if (listener.enterDefination) {
            listener.enterDefination(this);
        }
    };
    // @Override
    DefinationContext.prototype.exitRule = function (listener) {
        if (listener.exitDefination) {
            listener.exitDefination(this);
        }
    };
    // @Override
    DefinationContext.prototype.accept = function (visitor) {
        if (visitor.visitDefination) {
            return visitor.visitDefination(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefinationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefinationContext = DefinationContext;
var Function_definationContext = /** @class */ (function (_super) {
    __extends(Function_definationContext, _super);
    function Function_definationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Function_definationContext.prototype.data_type = function () {
        return this.getRuleContext(0, Data_typeContext);
    };
    Function_definationContext.prototype.optional_star = function () {
        return this.getRuleContext(0, Optional_starContext);
    };
    Function_definationContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Function_definationContext.prototype.argument = function () {
        return this.getRuleContext(0, ArgumentContext);
    };
    Function_definationContext.prototype.block_or_semi = function () {
        return this.getRuleContext(0, Block_or_semiContext);
    };
    Object.defineProperty(Function_definationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_function_defination; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Function_definationContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction_defination) {
            listener.enterFunction_defination(this);
        }
    };
    // @Override
    Function_definationContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction_defination) {
            listener.exitFunction_defination(this);
        }
    };
    // @Override
    Function_definationContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction_defination) {
            return visitor.visitFunction_defination(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Function_definationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Function_definationContext = Function_definationContext;
var Modifier_changeContext = /** @class */ (function (_super) {
    __extends(Modifier_changeContext, _super);
    function Modifier_changeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Modifier_changeContext.prototype.type_modifier_list = function () {
        return this.getRuleContext(0, Type_modifier_listContext);
    };
    Modifier_changeContext.prototype.Colon = function () { return this.getToken(LPCParser.Colon, 0); };
    Object.defineProperty(Modifier_changeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_modifier_change; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Modifier_changeContext.prototype.enterRule = function (listener) {
        if (listener.enterModifier_change) {
            listener.enterModifier_change(this);
        }
    };
    // @Override
    Modifier_changeContext.prototype.exitRule = function (listener) {
        if (listener.exitModifier_change) {
            listener.exitModifier_change(this);
        }
    };
    // @Override
    Modifier_changeContext.prototype.accept = function (visitor) {
        if (visitor.visitModifier_change) {
            return visitor.visitModifier_change(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Modifier_changeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Modifier_changeContext = Modifier_changeContext;
var Type_modifier_listContext = /** @class */ (function (_super) {
    __extends(Type_modifier_listContext, _super);
    function Type_modifier_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Type_modifier_listContext.prototype.TypeModifier = function () { return this.tryGetToken(LPCParser.TypeModifier, 0); };
    Type_modifier_listContext.prototype.type_modifier_list = function () {
        return this.tryGetRuleContext(0, Type_modifier_listContext);
    };
    Object.defineProperty(Type_modifier_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_type_modifier_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Type_modifier_listContext.prototype.enterRule = function (listener) {
        if (listener.enterType_modifier_list) {
            listener.enterType_modifier_list(this);
        }
    };
    // @Override
    Type_modifier_listContext.prototype.exitRule = function (listener) {
        if (listener.exitType_modifier_list) {
            listener.exitType_modifier_list(this);
        }
    };
    // @Override
    Type_modifier_listContext.prototype.accept = function (visitor) {
        if (visitor.visitType_modifier_list) {
            return visitor.visitType_modifier_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Type_modifier_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Type_modifier_listContext = Type_modifier_listContext;
var Type_declContext = /** @class */ (function (_super) {
    __extends(Type_declContext, _super);
    function Type_declContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Type_declContext.prototype.type_modifier_list = function () {
        return this.getRuleContext(0, Type_modifier_listContext);
    };
    Type_declContext.prototype.Class = function () { return this.getToken(LPCParser.Class, 0); };
    Type_declContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Type_declContext.prototype.member_list = function () {
        return this.getRuleContext(0, Member_listContext);
    };
    Object.defineProperty(Type_declContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_type_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Type_declContext.prototype.enterRule = function (listener) {
        if (listener.enterType_decl) {
            listener.enterType_decl(this);
        }
    };
    // @Override
    Type_declContext.prototype.exitRule = function (listener) {
        if (listener.exitType_decl) {
            listener.exitType_decl(this);
        }
    };
    // @Override
    Type_declContext.prototype.accept = function (visitor) {
        if (visitor.visitType_decl) {
            return visitor.visitType_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Type_declContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Type_declContext = Type_declContext;
var Member_listContext = /** @class */ (function (_super) {
    __extends(Member_listContext, _super);
    function Member_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Member_listContext.prototype.member_list = function () {
        return this.tryGetRuleContext(0, Member_listContext);
    };
    Member_listContext.prototype.data_type = function () {
        return this.tryGetRuleContext(0, Data_typeContext);
    };
    Member_listContext.prototype.member_name_list = function () {
        return this.tryGetRuleContext(0, Member_name_listContext);
    };
    Object.defineProperty(Member_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_member_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Member_listContext.prototype.enterRule = function (listener) {
        if (listener.enterMember_list) {
            listener.enterMember_list(this);
        }
    };
    // @Override
    Member_listContext.prototype.exitRule = function (listener) {
        if (listener.exitMember_list) {
            listener.exitMember_list(this);
        }
    };
    // @Override
    Member_listContext.prototype.accept = function (visitor) {
        if (visitor.visitMember_list) {
            return visitor.visitMember_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Member_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Member_listContext = Member_listContext;
var Member_name_listContext = /** @class */ (function (_super) {
    __extends(Member_name_listContext, _super);
    function Member_name_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Member_name_listContext.prototype.member_name = function () {
        return this.getRuleContext(0, Member_nameContext);
    };
    Member_name_listContext.prototype.member_name_list = function () {
        return this.tryGetRuleContext(0, Member_name_listContext);
    };
    Object.defineProperty(Member_name_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_member_name_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Member_name_listContext.prototype.enterRule = function (listener) {
        if (listener.enterMember_name_list) {
            listener.enterMember_name_list(this);
        }
    };
    // @Override
    Member_name_listContext.prototype.exitRule = function (listener) {
        if (listener.exitMember_name_list) {
            listener.exitMember_name_list(this);
        }
    };
    // @Override
    Member_name_listContext.prototype.accept = function (visitor) {
        if (visitor.visitMember_name_list) {
            return visitor.visitMember_name_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Member_name_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Member_name_listContext = Member_name_listContext;
var Member_nameContext = /** @class */ (function (_super) {
    __extends(Member_nameContext, _super);
    function Member_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Member_nameContext.prototype.optional_star = function () {
        return this.getRuleContext(0, Optional_starContext);
    };
    Member_nameContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(Member_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_member_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Member_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterMember_name) {
            listener.enterMember_name(this);
        }
    };
    // @Override
    Member_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitMember_name) {
            listener.exitMember_name(this);
        }
    };
    // @Override
    Member_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitMember_name) {
            return visitor.visitMember_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Member_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Member_nameContext = Member_nameContext;
var Name_listContext = /** @class */ (function (_super) {
    __extends(Name_listContext, _super);
    function Name_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Name_listContext.prototype.new_name = function () {
        return this.getRuleContext(0, New_nameContext);
    };
    Name_listContext.prototype.name_list = function () {
        return this.tryGetRuleContext(0, Name_listContext);
    };
    Object.defineProperty(Name_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_name_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Name_listContext.prototype.enterRule = function (listener) {
        if (listener.enterName_list) {
            listener.enterName_list(this);
        }
    };
    // @Override
    Name_listContext.prototype.exitRule = function (listener) {
        if (listener.exitName_list) {
            listener.exitName_list(this);
        }
    };
    // @Override
    Name_listContext.prototype.accept = function (visitor) {
        if (visitor.visitName_list) {
            return visitor.visitName_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Name_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Name_listContext = Name_listContext;
var New_nameContext = /** @class */ (function (_super) {
    __extends(New_nameContext, _super);
    function New_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    New_nameContext.prototype.optional_star = function () {
        return this.getRuleContext(0, Optional_starContext);
    };
    New_nameContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    New_nameContext.prototype.Assign = function () { return this.tryGetToken(LPCParser.Assign, 0); };
    New_nameContext.prototype.expr0 = function () {
        return this.tryGetRuleContext(0, Expr0Context);
    };
    Object.defineProperty(New_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_new_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    New_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterNew_name) {
            listener.enterNew_name(this);
        }
    };
    // @Override
    New_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitNew_name) {
            listener.exitNew_name(this);
        }
    };
    // @Override
    New_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitNew_name) {
            return visitor.visitNew_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return New_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.New_nameContext = New_nameContext;
var Expr0Context = /** @class */ (function (_super) {
    __extends(Expr0Context, _super);
    function Expr0Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Expr0Context.prototype.expr4 = function () {
        return this.tryGetRuleContext(0, Expr4Context);
    };
    Expr0Context.prototype.Assign = function () { return this.tryGetToken(LPCParser.Assign, 0); };
    Expr0Context.prototype.expr0 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Expr0Context);
        }
        else {
            return this.getRuleContext(i, Expr0Context);
        }
    };
    Expr0Context.prototype.Question = function () { return this.tryGetToken(LPCParser.Question, 0); };
    Expr0Context.prototype.Colon = function () { return this.tryGetToken(LPCParser.Colon, 0); };
    Expr0Context.prototype.OrOr = function () { return this.tryGetToken(LPCParser.OrOr, 0); };
    Expr0Context.prototype.AndAnd = function () { return this.tryGetToken(LPCParser.AndAnd, 0); };
    Expr0Context.prototype.Or = function () { return this.tryGetToken(LPCParser.Or, 0); };
    Expr0Context.prototype.Caret = function () { return this.tryGetToken(LPCParser.Caret, 0); };
    Expr0Context.prototype.And = function () { return this.tryGetToken(LPCParser.And, 0); };
    Expr0Context.prototype.Equal = function () { return this.tryGetToken(LPCParser.Equal, 0); };
    Expr0Context.prototype.NotEqual = function () { return this.tryGetToken(LPCParser.NotEqual, 0); };
    Expr0Context.prototype.Compare = function () { return this.tryGetToken(LPCParser.Compare, 0); };
    Expr0Context.prototype.LeftShift = function () { return this.tryGetToken(LPCParser.LeftShift, 0); };
    Expr0Context.prototype.RightShift = function () { return this.tryGetToken(LPCParser.RightShift, 0); };
    Expr0Context.prototype.cast = function () {
        return this.tryGetRuleContext(0, CastContext);
    };
    Expr0Context.prototype.PlusPlus = function () { return this.tryGetToken(LPCParser.PlusPlus, 0); };
    Expr0Context.prototype.MinusMinus = function () { return this.tryGetToken(LPCParser.MinusMinus, 0); };
    Expr0Context.prototype.Not = function () { return this.tryGetToken(LPCParser.Not, 0); };
    Expr0Context.prototype.sscanf = function () {
        return this.tryGetRuleContext(0, SscanfContext);
    };
    Expr0Context.prototype.parse_command = function () {
        return this.tryGetRuleContext(0, Parse_commandContext);
    };
    Expr0Context.prototype.time_expression = function () {
        return this.tryGetRuleContext(0, Time_expressionContext);
    };
    Expr0Context.prototype.Number = function () { return this.tryGetToken(LPCParser.Number, 0); };
    Expr0Context.prototype.Real = function () { return this.tryGetToken(LPCParser.Real, 0); };
    Object.defineProperty(Expr0Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_expr0; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Expr0Context.prototype.enterRule = function (listener) {
        if (listener.enterExpr0) {
            listener.enterExpr0(this);
        }
    };
    // @Override
    Expr0Context.prototype.exitRule = function (listener) {
        if (listener.exitExpr0) {
            listener.exitExpr0(this);
        }
    };
    // @Override
    Expr0Context.prototype.accept = function (visitor) {
        if (visitor.visitExpr0) {
            return visitor.visitExpr0(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Expr0Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Expr0Context = Expr0Context;
var Time_expressionContext = /** @class */ (function (_super) {
    __extends(Time_expressionContext, _super);
    function Time_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Time_expressionContext.prototype.TimeExpression = function () { return this.getToken(LPCParser.TimeExpression, 0); };
    Time_expressionContext.prototype.expr_or_block = function () {
        return this.getRuleContext(0, Expr_or_blockContext);
    };
    Object.defineProperty(Time_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_time_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Time_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterTime_expression) {
            listener.enterTime_expression(this);
        }
    };
    // @Override
    Time_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitTime_expression) {
            listener.exitTime_expression(this);
        }
    };
    // @Override
    Time_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitTime_expression) {
            return visitor.visitTime_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Time_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Time_expressionContext = Time_expressionContext;
var Expr_or_blockContext = /** @class */ (function (_super) {
    __extends(Expr_or_blockContext, _super);
    function Expr_or_blockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Expr_or_blockContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    Expr_or_blockContext.prototype.comma_expr = function () {
        return this.tryGetRuleContext(0, Comma_exprContext);
    };
    Object.defineProperty(Expr_or_blockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_expr_or_block; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Expr_or_blockContext.prototype.enterRule = function (listener) {
        if (listener.enterExpr_or_block) {
            listener.enterExpr_or_block(this);
        }
    };
    // @Override
    Expr_or_blockContext.prototype.exitRule = function (listener) {
        if (listener.exitExpr_or_block) {
            listener.exitExpr_or_block(this);
        }
    };
    // @Override
    Expr_or_blockContext.prototype.accept = function (visitor) {
        if (visitor.visitExpr_or_block) {
            return visitor.visitExpr_or_block(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Expr_or_blockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Expr_or_blockContext = Expr_or_blockContext;
var Comma_exprContext = /** @class */ (function (_super) {
    __extends(Comma_exprContext, _super);
    function Comma_exprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Comma_exprContext.prototype.expr0 = function () {
        return this.getRuleContext(0, Expr0Context);
    };
    Comma_exprContext.prototype.comma_expr = function () {
        return this.tryGetRuleContext(0, Comma_exprContext);
    };
    Object.defineProperty(Comma_exprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_comma_expr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Comma_exprContext.prototype.enterRule = function (listener) {
        if (listener.enterComma_expr) {
            listener.enterComma_expr(this);
        }
    };
    // @Override
    Comma_exprContext.prototype.exitRule = function (listener) {
        if (listener.exitComma_expr) {
            listener.exitComma_expr(this);
        }
    };
    // @Override
    Comma_exprContext.prototype.accept = function (visitor) {
        if (visitor.visitComma_expr) {
            return visitor.visitComma_expr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Comma_exprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Comma_exprContext = Comma_exprContext;
var Parse_commandContext = /** @class */ (function (_super) {
    __extends(Parse_commandContext, _super);
    function Parse_commandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Parse_commandContext.prototype.ParseCommand = function () { return this.getToken(LPCParser.ParseCommand, 0); };
    Parse_commandContext.prototype.expr0 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Expr0Context);
        }
        else {
            return this.getRuleContext(i, Expr0Context);
        }
    };
    Parse_commandContext.prototype.lvalue_list = function () {
        return this.getRuleContext(0, Lvalue_listContext);
    };
    Object.defineProperty(Parse_commandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_parse_command; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Parse_commandContext.prototype.enterRule = function (listener) {
        if (listener.enterParse_command) {
            listener.enterParse_command(this);
        }
    };
    // @Override
    Parse_commandContext.prototype.exitRule = function (listener) {
        if (listener.exitParse_command) {
            listener.exitParse_command(this);
        }
    };
    // @Override
    Parse_commandContext.prototype.accept = function (visitor) {
        if (visitor.visitParse_command) {
            return visitor.visitParse_command(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Parse_commandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Parse_commandContext = Parse_commandContext;
var SscanfContext = /** @class */ (function (_super) {
    __extends(SscanfContext, _super);
    function SscanfContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SscanfContext.prototype.SScanf = function () { return this.getToken(LPCParser.SScanf, 0); };
    SscanfContext.prototype.expr0 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Expr0Context);
        }
        else {
            return this.getRuleContext(i, Expr0Context);
        }
    };
    SscanfContext.prototype.lvalue_list = function () {
        return this.getRuleContext(0, Lvalue_listContext);
    };
    Object.defineProperty(SscanfContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_sscanf; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SscanfContext.prototype.enterRule = function (listener) {
        if (listener.enterSscanf) {
            listener.enterSscanf(this);
        }
    };
    // @Override
    SscanfContext.prototype.exitRule = function (listener) {
        if (listener.exitSscanf) {
            listener.exitSscanf(this);
        }
    };
    // @Override
    SscanfContext.prototype.accept = function (visitor) {
        if (visitor.visitSscanf) {
            return visitor.visitSscanf(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SscanfContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SscanfContext = SscanfContext;
var Lvalue_listContext = /** @class */ (function (_super) {
    __extends(Lvalue_listContext, _super);
    function Lvalue_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Lvalue_listContext.prototype.expr4 = function () {
        return this.tryGetRuleContext(0, Expr4Context);
    };
    Lvalue_listContext.prototype.lvalue_list = function () {
        return this.tryGetRuleContext(0, Lvalue_listContext);
    };
    Object.defineProperty(Lvalue_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_lvalue_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Lvalue_listContext.prototype.enterRule = function (listener) {
        if (listener.enterLvalue_list) {
            listener.enterLvalue_list(this);
        }
    };
    // @Override
    Lvalue_listContext.prototype.exitRule = function (listener) {
        if (listener.exitLvalue_list) {
            listener.exitLvalue_list(this);
        }
    };
    // @Override
    Lvalue_listContext.prototype.accept = function (visitor) {
        if (visitor.visitLvalue_list) {
            return visitor.visitLvalue_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Lvalue_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Lvalue_listContext = Lvalue_listContext;
var CastContext = /** @class */ (function (_super) {
    __extends(CastContext, _super);
    function CastContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CastContext.prototype.basic_type = function () {
        return this.getRuleContext(0, Basic_typeContext);
    };
    CastContext.prototype.optional_star = function () {
        return this.getRuleContext(0, Optional_starContext);
    };
    Object.defineProperty(CastContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_cast; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CastContext.prototype.enterRule = function (listener) {
        if (listener.enterCast) {
            listener.enterCast(this);
        }
    };
    // @Override
    CastContext.prototype.exitRule = function (listener) {
        if (listener.exitCast) {
            listener.exitCast(this);
        }
    };
    // @Override
    CastContext.prototype.accept = function (visitor) {
        if (visitor.visitCast) {
            return visitor.visitCast(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CastContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CastContext = CastContext;
var Basic_typeContext = /** @class */ (function (_super) {
    __extends(Basic_typeContext, _super);
    function Basic_typeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Basic_typeContext.prototype.atomic_type = function () {
        return this.getRuleContext(0, Atomic_typeContext);
    };
    Object.defineProperty(Basic_typeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_basic_type; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Basic_typeContext.prototype.enterRule = function (listener) {
        if (listener.enterBasic_type) {
            listener.enterBasic_type(this);
        }
    };
    // @Override
    Basic_typeContext.prototype.exitRule = function (listener) {
        if (listener.exitBasic_type) {
            listener.exitBasic_type(this);
        }
    };
    // @Override
    Basic_typeContext.prototype.accept = function (visitor) {
        if (visitor.visitBasic_type) {
            return visitor.visitBasic_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Basic_typeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Basic_typeContext = Basic_typeContext;
var Atomic_typeContext = /** @class */ (function (_super) {
    __extends(Atomic_typeContext, _super);
    function Atomic_typeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Atomic_typeContext.prototype.BasicType = function () { return this.tryGetToken(LPCParser.BasicType, 0); };
    Atomic_typeContext.prototype.Class = function () { return this.tryGetToken(LPCParser.Class, 0); };
    Atomic_typeContext.prototype.DefinedName = function () { return this.tryGetToken(LPCParser.DefinedName, 0); };
    Object.defineProperty(Atomic_typeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_atomic_type; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Atomic_typeContext.prototype.enterRule = function (listener) {
        if (listener.enterAtomic_type) {
            listener.enterAtomic_type(this);
        }
    };
    // @Override
    Atomic_typeContext.prototype.exitRule = function (listener) {
        if (listener.exitAtomic_type) {
            listener.exitAtomic_type(this);
        }
    };
    // @Override
    Atomic_typeContext.prototype.accept = function (visitor) {
        if (visitor.visitAtomic_type) {
            return visitor.visitAtomic_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Atomic_typeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Atomic_typeContext = Atomic_typeContext;
var Expr4Context = /** @class */ (function (_super) {
    __extends(Expr4Context, _super);
    function Expr4Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Expr4Context.prototype.function_call = function () {
        return this.tryGetRuleContext(0, Function_callContext);
    };
    Expr4Context.prototype.expr4 = function () {
        return this.tryGetRuleContext(0, Expr4Context);
    };
    Expr4Context.prototype.function_arrow_call = function () {
        return this.tryGetRuleContext(0, Function_arrow_callContext);
    };
    Expr4Context.prototype.DefinedName = function () { return this.tryGetToken(LPCParser.DefinedName, 0); };
    Expr4Context.prototype.Identifier = function () { return this.tryGetToken(LPCParser.Identifier, 0); };
    Expr4Context.prototype.Parameter = function () { return this.tryGetToken(LPCParser.Parameter, 0); };
    Expr4Context.prototype.comma_expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Comma_exprContext);
        }
        else {
            return this.getRuleContext(i, Comma_exprContext);
        }
    };
    Expr4Context.prototype.Arrow = function () { return this.tryGetToken(LPCParser.Arrow, 0); };
    Expr4Context.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    Expr4Context.prototype.Range = function () { return this.tryGetToken(LPCParser.Range, 0); };
    Expr4Context.prototype.string = function () {
        return this.tryGetRuleContext(0, StringContext);
    };
    Expr4Context.prototype.CharacterConstant = function () { return this.tryGetToken(LPCParser.CharacterConstant, 0); };
    Expr4Context.prototype.catch_statement = function () {
        return this.tryGetRuleContext(0, Catch_statementContext);
    };
    Expr4Context.prototype.BasicType = function () { return this.tryGetToken(LPCParser.BasicType, 0); };
    Expr4Context.prototype.argument = function () {
        return this.tryGetRuleContext(0, ArgumentContext);
    };
    Expr4Context.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    Expr4Context.prototype.FunctionOpen = function () { return this.tryGetToken(LPCParser.FunctionOpen, 0); };
    Expr4Context.prototype.Colon = function () { return this.tryGetToken(LPCParser.Colon, 0); };
    Expr4Context.prototype.MappingOpen = function () { return this.tryGetToken(LPCParser.MappingOpen, 0); };
    Expr4Context.prototype.expr_list3 = function () {
        return this.tryGetRuleContext(0, Expr_list3Context);
    };
    Expr4Context.prototype.ArrayOpen = function () { return this.tryGetToken(LPCParser.ArrayOpen, 0); };
    Expr4Context.prototype.expr_list = function () {
        return this.tryGetRuleContext(0, Expr_listContext);
    };
    Object.defineProperty(Expr4Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_expr4; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Expr4Context.prototype.enterRule = function (listener) {
        if (listener.enterExpr4) {
            listener.enterExpr4(this);
        }
    };
    // @Override
    Expr4Context.prototype.exitRule = function (listener) {
        if (listener.exitExpr4) {
            listener.exitExpr4(this);
        }
    };
    // @Override
    Expr4Context.prototype.accept = function (visitor) {
        if (visitor.visitExpr4) {
            return visitor.visitExpr4(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Expr4Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Expr4Context = Expr4Context;
var Catch_statementContext = /** @class */ (function (_super) {
    __extends(Catch_statementContext, _super);
    function Catch_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Catch_statementContext.prototype.Catch = function () { return this.getToken(LPCParser.Catch, 0); };
    Catch_statementContext.prototype.expr_or_block = function () {
        return this.getRuleContext(0, Expr_or_blockContext);
    };
    Object.defineProperty(Catch_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_catch_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Catch_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterCatch_statement) {
            listener.enterCatch_statement(this);
        }
    };
    // @Override
    Catch_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitCatch_statement) {
            listener.exitCatch_statement(this);
        }
    };
    // @Override
    Catch_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitCatch_statement) {
            return visitor.visitCatch_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Catch_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Catch_statementContext = Catch_statementContext;
var Expr_listContext = /** @class */ (function (_super) {
    __extends(Expr_listContext, _super);
    function Expr_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Expr_listContext.prototype.expr_list2 = function () {
        return this.tryGetRuleContext(0, Expr_list2Context);
    };
    Object.defineProperty(Expr_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_expr_list; },
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
var Expr_list3Context = /** @class */ (function (_super) {
    __extends(Expr_list3Context, _super);
    function Expr_list3Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Expr_list3Context.prototype.expr_list4 = function () {
        return this.tryGetRuleContext(0, Expr_list4Context);
    };
    Object.defineProperty(Expr_list3Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_expr_list3; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Expr_list3Context.prototype.enterRule = function (listener) {
        if (listener.enterExpr_list3) {
            listener.enterExpr_list3(this);
        }
    };
    // @Override
    Expr_list3Context.prototype.exitRule = function (listener) {
        if (listener.exitExpr_list3) {
            listener.exitExpr_list3(this);
        }
    };
    // @Override
    Expr_list3Context.prototype.accept = function (visitor) {
        if (visitor.visitExpr_list3) {
            return visitor.visitExpr_list3(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Expr_list3Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Expr_list3Context = Expr_list3Context;
var Expr_list4Context = /** @class */ (function (_super) {
    __extends(Expr_list4Context, _super);
    function Expr_list4Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Expr_list4Context.prototype.assoc_pair = function () {
        return this.getRuleContext(0, Assoc_pairContext);
    };
    Expr_list4Context.prototype.expr_list4 = function () {
        return this.tryGetRuleContext(0, Expr_list4Context);
    };
    Object.defineProperty(Expr_list4Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_expr_list4; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Expr_list4Context.prototype.enterRule = function (listener) {
        if (listener.enterExpr_list4) {
            listener.enterExpr_list4(this);
        }
    };
    // @Override
    Expr_list4Context.prototype.exitRule = function (listener) {
        if (listener.exitExpr_list4) {
            listener.exitExpr_list4(this);
        }
    };
    // @Override
    Expr_list4Context.prototype.accept = function (visitor) {
        if (visitor.visitExpr_list4) {
            return visitor.visitExpr_list4(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Expr_list4Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Expr_list4Context = Expr_list4Context;
var Assoc_pairContext = /** @class */ (function (_super) {
    __extends(Assoc_pairContext, _super);
    function Assoc_pairContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Assoc_pairContext.prototype.expr0 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Expr0Context);
        }
        else {
            return this.getRuleContext(i, Expr0Context);
        }
    };
    Assoc_pairContext.prototype.Colon = function () { return this.getToken(LPCParser.Colon, 0); };
    Object.defineProperty(Assoc_pairContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_assoc_pair; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Assoc_pairContext.prototype.enterRule = function (listener) {
        if (listener.enterAssoc_pair) {
            listener.enterAssoc_pair(this);
        }
    };
    // @Override
    Assoc_pairContext.prototype.exitRule = function (listener) {
        if (listener.exitAssoc_pair) {
            listener.exitAssoc_pair(this);
        }
    };
    // @Override
    Assoc_pairContext.prototype.accept = function (visitor) {
        if (visitor.visitAssoc_pair) {
            return visitor.visitAssoc_pair(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Assoc_pairContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Assoc_pairContext = Assoc_pairContext;
var Expr_list2Context = /** @class */ (function (_super) {
    __extends(Expr_list2Context, _super);
    function Expr_list2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Expr_list2Context.prototype.expr_list_node = function () {
        return this.getRuleContext(0, Expr_list_nodeContext);
    };
    Expr_list2Context.prototype.expr_list2 = function () {
        return this.tryGetRuleContext(0, Expr_list2Context);
    };
    Object.defineProperty(Expr_list2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_expr_list2; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Expr_list2Context.prototype.enterRule = function (listener) {
        if (listener.enterExpr_list2) {
            listener.enterExpr_list2(this);
        }
    };
    // @Override
    Expr_list2Context.prototype.exitRule = function (listener) {
        if (listener.exitExpr_list2) {
            listener.exitExpr_list2(this);
        }
    };
    // @Override
    Expr_list2Context.prototype.accept = function (visitor) {
        if (visitor.visitExpr_list2) {
            return visitor.visitExpr_list2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Expr_list2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Expr_list2Context = Expr_list2Context;
var Expr_list_nodeContext = /** @class */ (function (_super) {
    __extends(Expr_list_nodeContext, _super);
    function Expr_list_nodeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Expr_list_nodeContext.prototype.expr0 = function () {
        return this.getRuleContext(0, Expr0Context);
    };
    Expr_list_nodeContext.prototype.Ellipsis = function () { return this.tryGetToken(LPCParser.Ellipsis, 0); };
    Object.defineProperty(Expr_list_nodeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_expr_list_node; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Expr_list_nodeContext.prototype.enterRule = function (listener) {
        if (listener.enterExpr_list_node) {
            listener.enterExpr_list_node(this);
        }
    };
    // @Override
    Expr_list_nodeContext.prototype.exitRule = function (listener) {
        if (listener.exitExpr_list_node) {
            listener.exitExpr_list_node(this);
        }
    };
    // @Override
    Expr_list_nodeContext.prototype.accept = function (visitor) {
        if (visitor.visitExpr_list_node) {
            return visitor.visitExpr_list_node(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Expr_list_nodeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Expr_list_nodeContext = Expr_list_nodeContext;
var StringContext = /** @class */ (function (_super) {
    __extends(StringContext, _super);
    function StringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringContext.prototype.string_con2 = function () {
        return this.getRuleContext(0, String_con2Context);
    };
    Object.defineProperty(StringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_string; },
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
var String_con2Context = /** @class */ (function (_super) {
    __extends(String_con2Context, _super);
    function String_con2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    String_con2Context.prototype.String = function () { return this.getToken(LPCParser.String, 0); };
    String_con2Context.prototype.string_con2 = function () {
        return this.tryGetRuleContext(0, String_con2Context);
    };
    Object.defineProperty(String_con2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_string_con2; },
        enumerable: true,
        configurable: true
    });
    // @Override
    String_con2Context.prototype.enterRule = function (listener) {
        if (listener.enterString_con2) {
            listener.enterString_con2(this);
        }
    };
    // @Override
    String_con2Context.prototype.exitRule = function (listener) {
        if (listener.exitString_con2) {
            listener.exitString_con2(this);
        }
    };
    // @Override
    String_con2Context.prototype.accept = function (visitor) {
        if (visitor.visitString_con2) {
            return visitor.visitString_con2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return String_con2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.String_con2Context = String_con2Context;
var String_con1Context = /** @class */ (function (_super) {
    __extends(String_con1Context, _super);
    function String_con1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    String_con1Context.prototype.string_con2 = function () {
        return this.tryGetRuleContext(0, String_con2Context);
    };
    String_con1Context.prototype.string_con1 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(String_con1Context);
        }
        else {
            return this.getRuleContext(i, String_con1Context);
        }
    };
    Object.defineProperty(String_con1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_string_con1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    String_con1Context.prototype.enterRule = function (listener) {
        if (listener.enterString_con1) {
            listener.enterString_con1(this);
        }
    };
    // @Override
    String_con1Context.prototype.exitRule = function (listener) {
        if (listener.exitString_con1) {
            listener.exitString_con1(this);
        }
    };
    // @Override
    String_con1Context.prototype.accept = function (visitor) {
        if (visitor.visitString_con1) {
            return visitor.visitString_con1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return String_con1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.String_con1Context = String_con1Context;
var Function_callContext = /** @class */ (function (_super) {
    __extends(Function_callContext, _super);
    function Function_callContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Function_callContext.prototype.efun_override = function () {
        return this.tryGetRuleContext(0, Efun_overrideContext);
    };
    Function_callContext.prototype.expr_list = function () {
        return this.tryGetRuleContext(0, Expr_listContext);
    };
    Function_callContext.prototype.New = function () { return this.tryGetToken(LPCParser.New, 0); };
    Function_callContext.prototype.Class = function () { return this.tryGetToken(LPCParser.Class, 0); };
    Function_callContext.prototype.DefinedName = function () { return this.tryGetToken(LPCParser.DefinedName, 0); };
    Function_callContext.prototype.opt_class_init = function () {
        return this.tryGetRuleContext(0, Opt_class_initContext);
    };
    Function_callContext.prototype.function_name_call = function () {
        return this.tryGetRuleContext(0, Function_name_callContext);
    };
    Function_callContext.prototype.function_arrow_call = function () {
        return this.tryGetRuleContext(0, Function_arrow_callContext);
    };
    Function_callContext.prototype.comma_expr = function () {
        return this.tryGetRuleContext(0, Comma_exprContext);
    };
    Object.defineProperty(Function_callContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_function_call; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Function_callContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction_call) {
            listener.enterFunction_call(this);
        }
    };
    // @Override
    Function_callContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction_call) {
            listener.exitFunction_call(this);
        }
    };
    // @Override
    Function_callContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction_call) {
            return visitor.visitFunction_call(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Function_callContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Function_callContext = Function_callContext;
var Function_name_callContext = /** @class */ (function (_super) {
    __extends(Function_name_callContext, _super);
    function Function_name_callContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Function_name_callContext.prototype.function_name = function () {
        return this.getRuleContext(0, Function_nameContext);
    };
    Function_name_callContext.prototype.expr_list = function () {
        return this.getRuleContext(0, Expr_listContext);
    };
    Object.defineProperty(Function_name_callContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_function_name_call; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Function_name_callContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction_name_call) {
            listener.enterFunction_name_call(this);
        }
    };
    // @Override
    Function_name_callContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction_name_call) {
            listener.exitFunction_name_call(this);
        }
    };
    // @Override
    Function_name_callContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction_name_call) {
            return visitor.visitFunction_name_call(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Function_name_callContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Function_name_callContext = Function_name_callContext;
var Function_arrow_callContext = /** @class */ (function (_super) {
    __extends(Function_arrow_callContext, _super);
    function Function_arrow_callContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Function_arrow_callContext.prototype.Arrow = function () { return this.getToken(LPCParser.Arrow, 0); };
    Function_arrow_callContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Function_arrow_callContext.prototype.expr_list = function () {
        return this.getRuleContext(0, Expr_listContext);
    };
    Object.defineProperty(Function_arrow_callContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_function_arrow_call; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Function_arrow_callContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction_arrow_call) {
            listener.enterFunction_arrow_call(this);
        }
    };
    // @Override
    Function_arrow_callContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction_arrow_call) {
            listener.exitFunction_arrow_call(this);
        }
    };
    // @Override
    Function_arrow_callContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction_arrow_call) {
            return visitor.visitFunction_arrow_call(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Function_arrow_callContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Function_arrow_callContext = Function_arrow_callContext;
var Function_nameContext = /** @class */ (function (_super) {
    __extends(Function_nameContext, _super);
    function Function_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Function_nameContext.prototype.Identifier = function () { return this.tryGetToken(LPCParser.Identifier, 0); };
    Function_nameContext.prototype.ColonColon = function () { return this.tryGetToken(LPCParser.ColonColon, 0); };
    Function_nameContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    Function_nameContext.prototype.BasicType = function () { return this.tryGetToken(LPCParser.BasicType, 0); };
    Object.defineProperty(Function_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_function_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Function_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction_name) {
            listener.enterFunction_name(this);
        }
    };
    // @Override
    Function_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction_name) {
            listener.exitFunction_name(this);
        }
    };
    // @Override
    Function_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction_name) {
            return visitor.visitFunction_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Function_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Function_nameContext = Function_nameContext;
var Opt_class_initContext = /** @class */ (function (_super) {
    __extends(Opt_class_initContext, _super);
    function Opt_class_initContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Opt_class_initContext.prototype.opt_class_init = function () {
        return this.tryGetRuleContext(0, Opt_class_initContext);
    };
    Opt_class_initContext.prototype.class_init = function () {
        return this.tryGetRuleContext(0, Class_initContext);
    };
    Object.defineProperty(Opt_class_initContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_opt_class_init; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Opt_class_initContext.prototype.enterRule = function (listener) {
        if (listener.enterOpt_class_init) {
            listener.enterOpt_class_init(this);
        }
    };
    // @Override
    Opt_class_initContext.prototype.exitRule = function (listener) {
        if (listener.exitOpt_class_init) {
            listener.exitOpt_class_init(this);
        }
    };
    // @Override
    Opt_class_initContext.prototype.accept = function (visitor) {
        if (visitor.visitOpt_class_init) {
            return visitor.visitOpt_class_init(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Opt_class_initContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Opt_class_initContext = Opt_class_initContext;
var Class_initContext = /** @class */ (function (_super) {
    __extends(Class_initContext, _super);
    function Class_initContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Class_initContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Class_initContext.prototype.Colon = function () { return this.getToken(LPCParser.Colon, 0); };
    Class_initContext.prototype.expr0 = function () {
        return this.getRuleContext(0, Expr0Context);
    };
    Object.defineProperty(Class_initContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_class_init; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Class_initContext.prototype.enterRule = function (listener) {
        if (listener.enterClass_init) {
            listener.enterClass_init(this);
        }
    };
    // @Override
    Class_initContext.prototype.exitRule = function (listener) {
        if (listener.exitClass_init) {
            listener.exitClass_init(this);
        }
    };
    // @Override
    Class_initContext.prototype.accept = function (visitor) {
        if (visitor.visitClass_init) {
            return visitor.visitClass_init(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Class_initContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Class_initContext = Class_initContext;
var Efun_overrideContext = /** @class */ (function (_super) {
    __extends(Efun_overrideContext, _super);
    function Efun_overrideContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Efun_overrideContext.prototype.Efun = function () { return this.getToken(LPCParser.Efun, 0); };
    Efun_overrideContext.prototype.ColonColon = function () { return this.getToken(LPCParser.ColonColon, 0); };
    Efun_overrideContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    Efun_overrideContext.prototype.New = function () { return this.tryGetToken(LPCParser.New, 0); };
    Object.defineProperty(Efun_overrideContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_efun_override; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Efun_overrideContext.prototype.enterRule = function (listener) {
        if (listener.enterEfun_override) {
            listener.enterEfun_override(this);
        }
    };
    // @Override
    Efun_overrideContext.prototype.exitRule = function (listener) {
        if (listener.exitEfun_override) {
            listener.exitEfun_override(this);
        }
    };
    // @Override
    Efun_overrideContext.prototype.accept = function (visitor) {
        if (visitor.visitEfun_override) {
            return visitor.visitEfun_override(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Efun_overrideContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Efun_overrideContext = Efun_overrideContext;
var Block_or_semiContext = /** @class */ (function (_super) {
    __extends(Block_or_semiContext, _super);
    function Block_or_semiContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Block_or_semiContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    Object.defineProperty(Block_or_semiContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_block_or_semi; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Block_or_semiContext.prototype.enterRule = function (listener) {
        if (listener.enterBlock_or_semi) {
            listener.enterBlock_or_semi(this);
        }
    };
    // @Override
    Block_or_semiContext.prototype.exitRule = function (listener) {
        if (listener.exitBlock_or_semi) {
            listener.exitBlock_or_semi(this);
        }
    };
    // @Override
    Block_or_semiContext.prototype.accept = function (visitor) {
        if (visitor.visitBlock_or_semi) {
            return visitor.visitBlock_or_semi(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Block_or_semiContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Block_or_semiContext = Block_or_semiContext;
var BlockContext = /** @class */ (function (_super) {
    __extends(BlockContext, _super);
    function BlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockContext.prototype.statements = function () {
        return this.getRuleContext(0, StatementsContext);
    };
    Object.defineProperty(BlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_block; },
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
var StatementsContext = /** @class */ (function (_super) {
    __extends(StatementsContext, _super);
    function StatementsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementsContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    StatementsContext.prototype.statements = function () {
        return this.tryGetRuleContext(0, StatementsContext);
    };
    StatementsContext.prototype.local_declare_statement = function () {
        return this.tryGetRuleContext(0, Local_declare_statementContext);
    };
    Object.defineProperty(StatementsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_statements; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StatementsContext.prototype.enterRule = function (listener) {
        if (listener.enterStatements) {
            listener.enterStatements(this);
        }
    };
    // @Override
    StatementsContext.prototype.exitRule = function (listener) {
        if (listener.exitStatements) {
            listener.exitStatements(this);
        }
    };
    // @Override
    StatementsContext.prototype.accept = function (visitor) {
        if (visitor.visitStatements) {
            return visitor.visitStatements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StatementsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StatementsContext = StatementsContext;
var Local_declare_statementContext = /** @class */ (function (_super) {
    __extends(Local_declare_statementContext, _super);
    function Local_declare_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Local_declare_statementContext.prototype.basic_type = function () {
        return this.getRuleContext(0, Basic_typeContext);
    };
    Local_declare_statementContext.prototype.local_name_list = function () {
        return this.getRuleContext(0, Local_name_listContext);
    };
    Object.defineProperty(Local_declare_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_local_declare_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Local_declare_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterLocal_declare_statement) {
            listener.enterLocal_declare_statement(this);
        }
    };
    // @Override
    Local_declare_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitLocal_declare_statement) {
            listener.exitLocal_declare_statement(this);
        }
    };
    // @Override
    Local_declare_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitLocal_declare_statement) {
            return visitor.visitLocal_declare_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Local_declare_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Local_declare_statementContext = Local_declare_statementContext;
var Local_name_listContext = /** @class */ (function (_super) {
    __extends(Local_name_listContext, _super);
    function Local_name_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Local_name_listContext.prototype.new_local_def = function () {
        return this.getRuleContext(0, New_local_defContext);
    };
    Local_name_listContext.prototype.local_name_list = function () {
        return this.tryGetRuleContext(0, Local_name_listContext);
    };
    Object.defineProperty(Local_name_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_local_name_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Local_name_listContext.prototype.enterRule = function (listener) {
        if (listener.enterLocal_name_list) {
            listener.enterLocal_name_list(this);
        }
    };
    // @Override
    Local_name_listContext.prototype.exitRule = function (listener) {
        if (listener.exitLocal_name_list) {
            listener.exitLocal_name_list(this);
        }
    };
    // @Override
    Local_name_listContext.prototype.accept = function (visitor) {
        if (visitor.visitLocal_name_list) {
            return visitor.visitLocal_name_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Local_name_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Local_name_listContext = Local_name_listContext;
var New_local_defContext = /** @class */ (function (_super) {
    __extends(New_local_defContext, _super);
    function New_local_defContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    New_local_defContext.prototype.optional_star = function () {
        return this.getRuleContext(0, Optional_starContext);
    };
    New_local_defContext.prototype.new_local_name = function () {
        return this.getRuleContext(0, New_local_nameContext);
    };
    New_local_defContext.prototype.Assign = function () { return this.tryGetToken(LPCParser.Assign, 0); };
    New_local_defContext.prototype.expr0 = function () {
        return this.tryGetRuleContext(0, Expr0Context);
    };
    Object.defineProperty(New_local_defContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_new_local_def; },
        enumerable: true,
        configurable: true
    });
    // @Override
    New_local_defContext.prototype.enterRule = function (listener) {
        if (listener.enterNew_local_def) {
            listener.enterNew_local_def(this);
        }
    };
    // @Override
    New_local_defContext.prototype.exitRule = function (listener) {
        if (listener.exitNew_local_def) {
            listener.exitNew_local_def(this);
        }
    };
    // @Override
    New_local_defContext.prototype.accept = function (visitor) {
        if (visitor.visitNew_local_def) {
            return visitor.visitNew_local_def(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return New_local_defContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.New_local_defContext = New_local_defContext;
var New_local_nameContext = /** @class */ (function (_super) {
    __extends(New_local_nameContext, _super);
    function New_local_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    New_local_nameContext.prototype.Identifier = function () { return this.tryGetToken(LPCParser.Identifier, 0); };
    New_local_nameContext.prototype.DefinedName = function () { return this.tryGetToken(LPCParser.DefinedName, 0); };
    Object.defineProperty(New_local_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_new_local_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    New_local_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterNew_local_name) {
            listener.enterNew_local_name(this);
        }
    };
    // @Override
    New_local_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitNew_local_name) {
            listener.exitNew_local_name(this);
        }
    };
    // @Override
    New_local_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitNew_local_name) {
            return visitor.visitNew_local_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return New_local_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.New_local_nameContext = New_local_nameContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.comma_expr = function () {
        return this.tryGetRuleContext(0, Comma_exprContext);
    };
    StatementContext.prototype.cond = function () {
        return this.tryGetRuleContext(0, CondContext);
    };
    StatementContext.prototype.while_statement = function () {
        return this.tryGetRuleContext(0, While_statementContext);
    };
    StatementContext.prototype.do_statement = function () {
        return this.tryGetRuleContext(0, Do_statementContext);
    };
    StatementContext.prototype.switch_statement = function () {
        return this.tryGetRuleContext(0, Switch_statementContext);
    };
    StatementContext.prototype.returnStatement = function () {
        return this.tryGetRuleContext(0, ReturnStatementContext);
    };
    StatementContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    StatementContext.prototype.for_loop = function () {
        return this.tryGetRuleContext(0, For_loopContext);
    };
    StatementContext.prototype.foreach_loop = function () {
        return this.tryGetRuleContext(0, Foreach_loopContext);
    };
    StatementContext.prototype.Break = function () { return this.tryGetToken(LPCParser.Break, 0); };
    StatementContext.prototype.Continue = function () { return this.tryGetToken(LPCParser.Continue, 0); };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StatementContext.prototype.enterRule = function (listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    };
    // @Override
    StatementContext.prototype.exitRule = function (listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    };
    // @Override
    StatementContext.prototype.accept = function (visitor) {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StatementContext = StatementContext;
var While_statementContext = /** @class */ (function (_super) {
    __extends(While_statementContext, _super);
    function While_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    While_statementContext.prototype.While = function () { return this.getToken(LPCParser.While, 0); };
    While_statementContext.prototype.comma_expr = function () {
        return this.getRuleContext(0, Comma_exprContext);
    };
    While_statementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    Object.defineProperty(While_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_while_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    While_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterWhile_statement) {
            listener.enterWhile_statement(this);
        }
    };
    // @Override
    While_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitWhile_statement) {
            listener.exitWhile_statement(this);
        }
    };
    // @Override
    While_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitWhile_statement) {
            return visitor.visitWhile_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return While_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.While_statementContext = While_statementContext;
var Do_statementContext = /** @class */ (function (_super) {
    __extends(Do_statementContext, _super);
    function Do_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Do_statementContext.prototype.Do = function () { return this.getToken(LPCParser.Do, 0); };
    Do_statementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    Do_statementContext.prototype.While = function () { return this.getToken(LPCParser.While, 0); };
    Do_statementContext.prototype.comma_expr = function () {
        return this.getRuleContext(0, Comma_exprContext);
    };
    Object.defineProperty(Do_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_do_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Do_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterDo_statement) {
            listener.enterDo_statement(this);
        }
    };
    // @Override
    Do_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitDo_statement) {
            listener.exitDo_statement(this);
        }
    };
    // @Override
    Do_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitDo_statement) {
            return visitor.visitDo_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Do_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Do_statementContext = Do_statementContext;
var Switch_statementContext = /** @class */ (function (_super) {
    __extends(Switch_statementContext, _super);
    function Switch_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Switch_statementContext.prototype.Switch = function () { return this.getToken(LPCParser.Switch, 0); };
    Switch_statementContext.prototype.comma_expr = function () {
        return this.getRuleContext(0, Comma_exprContext);
    };
    Switch_statementContext.prototype.local_declarations = function () {
        return this.getRuleContext(0, Local_declarationsContext);
    };
    Switch_statementContext.prototype.case_statement = function () {
        return this.getRuleContext(0, Case_statementContext);
    };
    Switch_statementContext.prototype.switch_block = function () {
        return this.getRuleContext(0, Switch_blockContext);
    };
    Object.defineProperty(Switch_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_switch_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Switch_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterSwitch_statement) {
            listener.enterSwitch_statement(this);
        }
    };
    // @Override
    Switch_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitSwitch_statement) {
            listener.exitSwitch_statement(this);
        }
    };
    // @Override
    Switch_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitSwitch_statement) {
            return visitor.visitSwitch_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Switch_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Switch_statementContext = Switch_statementContext;
var Local_declarationsContext = /** @class */ (function (_super) {
    __extends(Local_declarationsContext, _super);
    function Local_declarationsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Local_declarationsContext.prototype.local_declarations = function () {
        return this.tryGetRuleContext(0, Local_declarationsContext);
    };
    Local_declarationsContext.prototype.basic_type = function () {
        return this.tryGetRuleContext(0, Basic_typeContext);
    };
    Local_declarationsContext.prototype.local_name_list = function () {
        return this.tryGetRuleContext(0, Local_name_listContext);
    };
    Object.defineProperty(Local_declarationsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_local_declarations; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Local_declarationsContext.prototype.enterRule = function (listener) {
        if (listener.enterLocal_declarations) {
            listener.enterLocal_declarations(this);
        }
    };
    // @Override
    Local_declarationsContext.prototype.exitRule = function (listener) {
        if (listener.exitLocal_declarations) {
            listener.exitLocal_declarations(this);
        }
    };
    // @Override
    Local_declarationsContext.prototype.accept = function (visitor) {
        if (visitor.visitLocal_declarations) {
            return visitor.visitLocal_declarations(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Local_declarationsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Local_declarationsContext = Local_declarationsContext;
var Case_statementContext = /** @class */ (function (_super) {
    __extends(Case_statementContext, _super);
    function Case_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Case_statementContext.prototype.Case = function () { return this.tryGetToken(LPCParser.Case, 0); };
    Case_statementContext.prototype.case_label = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Case_labelContext);
        }
        else {
            return this.getRuleContext(i, Case_labelContext);
        }
    };
    Case_statementContext.prototype.Colon = function () { return this.getToken(LPCParser.Colon, 0); };
    Case_statementContext.prototype.Range = function () { return this.tryGetToken(LPCParser.Range, 0); };
    Case_statementContext.prototype.Default = function () { return this.tryGetToken(LPCParser.Default, 0); };
    Object.defineProperty(Case_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_case_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Case_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterCase_statement) {
            listener.enterCase_statement(this);
        }
    };
    // @Override
    Case_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitCase_statement) {
            listener.exitCase_statement(this);
        }
    };
    // @Override
    Case_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitCase_statement) {
            return visitor.visitCase_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Case_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Case_statementContext = Case_statementContext;
var Switch_blockContext = /** @class */ (function (_super) {
    __extends(Switch_blockContext, _super);
    function Switch_blockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Switch_blockContext.prototype.case_statement = function () {
        return this.tryGetRuleContext(0, Case_statementContext);
    };
    Switch_blockContext.prototype.switch_block = function () {
        return this.tryGetRuleContext(0, Switch_blockContext);
    };
    Switch_blockContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    Object.defineProperty(Switch_blockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_switch_block; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Switch_blockContext.prototype.enterRule = function (listener) {
        if (listener.enterSwitch_block) {
            listener.enterSwitch_block(this);
        }
    };
    // @Override
    Switch_blockContext.prototype.exitRule = function (listener) {
        if (listener.exitSwitch_block) {
            listener.exitSwitch_block(this);
        }
    };
    // @Override
    Switch_blockContext.prototype.accept = function (visitor) {
        if (visitor.visitSwitch_block) {
            return visitor.visitSwitch_block(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Switch_blockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Switch_blockContext = Switch_blockContext;
var Case_labelContext = /** @class */ (function (_super) {
    __extends(Case_labelContext, _super);
    function Case_labelContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Case_labelContext.prototype.constant = function () {
        return this.tryGetRuleContext(0, ConstantContext);
    };
    Case_labelContext.prototype.CharacterConstant = function () { return this.tryGetToken(LPCParser.CharacterConstant, 0); };
    Case_labelContext.prototype.string_con1 = function () {
        return this.tryGetRuleContext(0, String_con1Context);
    };
    Object.defineProperty(Case_labelContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_case_label; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Case_labelContext.prototype.enterRule = function (listener) {
        if (listener.enterCase_label) {
            listener.enterCase_label(this);
        }
    };
    // @Override
    Case_labelContext.prototype.exitRule = function (listener) {
        if (listener.exitCase_label) {
            listener.exitCase_label(this);
        }
    };
    // @Override
    Case_labelContext.prototype.accept = function (visitor) {
        if (visitor.visitCase_label) {
            return visitor.visitCase_label(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Case_labelContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Case_labelContext = Case_labelContext;
var ConstantContext = /** @class */ (function (_super) {
    __extends(ConstantContext, _super);
    function ConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantContext.prototype.constant = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstantContext);
        }
        else {
            return this.getRuleContext(i, ConstantContext);
        }
    };
    ConstantContext.prototype.Or = function () { return this.tryGetToken(LPCParser.Or, 0); };
    ConstantContext.prototype.Caret = function () { return this.tryGetToken(LPCParser.Caret, 0); };
    ConstantContext.prototype.And = function () { return this.tryGetToken(LPCParser.And, 0); };
    ConstantContext.prototype.Equal = function () { return this.tryGetToken(LPCParser.Equal, 0); };
    ConstantContext.prototype.NotEqual = function () { return this.tryGetToken(LPCParser.NotEqual, 0); };
    ConstantContext.prototype.Compare = function () { return this.tryGetToken(LPCParser.Compare, 0); };
    ConstantContext.prototype.LeftShift = function () { return this.tryGetToken(LPCParser.LeftShift, 0); };
    ConstantContext.prototype.RightShift = function () { return this.tryGetToken(LPCParser.RightShift, 0); };
    ConstantContext.prototype.Number = function () { return this.tryGetToken(LPCParser.Number, 0); };
    ConstantContext.prototype.Not = function () { return this.tryGetToken(LPCParser.Not, 0); };
    Object.defineProperty(ConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_constant; },
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
var Foreach_loopContext = /** @class */ (function (_super) {
    __extends(Foreach_loopContext, _super);
    function Foreach_loopContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Foreach_loopContext.prototype.Foreach = function () { return this.getToken(LPCParser.Foreach, 0); };
    Foreach_loopContext.prototype.foreach_vars = function () {
        return this.getRuleContext(0, Foreach_varsContext);
    };
    Foreach_loopContext.prototype.In = function () { return this.getToken(LPCParser.In, 0); };
    Foreach_loopContext.prototype.expr0 = function () {
        return this.getRuleContext(0, Expr0Context);
    };
    Foreach_loopContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    Object.defineProperty(Foreach_loopContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_foreach_loop; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Foreach_loopContext.prototype.enterRule = function (listener) {
        if (listener.enterForeach_loop) {
            listener.enterForeach_loop(this);
        }
    };
    // @Override
    Foreach_loopContext.prototype.exitRule = function (listener) {
        if (listener.exitForeach_loop) {
            listener.exitForeach_loop(this);
        }
    };
    // @Override
    Foreach_loopContext.prototype.accept = function (visitor) {
        if (visitor.visitForeach_loop) {
            return visitor.visitForeach_loop(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Foreach_loopContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Foreach_loopContext = Foreach_loopContext;
var Foreach_varsContext = /** @class */ (function (_super) {
    __extends(Foreach_varsContext, _super);
    function Foreach_varsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Foreach_varsContext.prototype.foreach_var = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Foreach_varContext);
        }
        else {
            return this.getRuleContext(i, Foreach_varContext);
        }
    };
    Object.defineProperty(Foreach_varsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_foreach_vars; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Foreach_varsContext.prototype.enterRule = function (listener) {
        if (listener.enterForeach_vars) {
            listener.enterForeach_vars(this);
        }
    };
    // @Override
    Foreach_varsContext.prototype.exitRule = function (listener) {
        if (listener.exitForeach_vars) {
            listener.exitForeach_vars(this);
        }
    };
    // @Override
    Foreach_varsContext.prototype.accept = function (visitor) {
        if (visitor.visitForeach_vars) {
            return visitor.visitForeach_vars(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Foreach_varsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Foreach_varsContext = Foreach_varsContext;
var For_loopContext = /** @class */ (function (_super) {
    __extends(For_loopContext, _super);
    function For_loopContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    For_loopContext.prototype.For = function () { return this.getToken(LPCParser.For, 0); };
    For_loopContext.prototype.first_for_expr = function () {
        return this.getRuleContext(0, First_for_exprContext);
    };
    For_loopContext.prototype.for_expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(For_exprContext);
        }
        else {
            return this.getRuleContext(i, For_exprContext);
        }
    };
    For_loopContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    Object.defineProperty(For_loopContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_for_loop; },
        enumerable: true,
        configurable: true
    });
    // @Override
    For_loopContext.prototype.enterRule = function (listener) {
        if (listener.enterFor_loop) {
            listener.enterFor_loop(this);
        }
    };
    // @Override
    For_loopContext.prototype.exitRule = function (listener) {
        if (listener.exitFor_loop) {
            listener.exitFor_loop(this);
        }
    };
    // @Override
    For_loopContext.prototype.accept = function (visitor) {
        if (visitor.visitFor_loop) {
            return visitor.visitFor_loop(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return For_loopContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.For_loopContext = For_loopContext;
var Foreach_varContext = /** @class */ (function (_super) {
    __extends(Foreach_varContext, _super);
    function Foreach_varContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Foreach_varContext.prototype.DefinedName = function () { return this.tryGetToken(LPCParser.DefinedName, 0); };
    Foreach_varContext.prototype.single_new_local_def = function () {
        return this.tryGetRuleContext(0, Single_new_local_defContext);
    };
    Foreach_varContext.prototype.Identifier = function () { return this.tryGetToken(LPCParser.Identifier, 0); };
    Object.defineProperty(Foreach_varContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_foreach_var; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Foreach_varContext.prototype.enterRule = function (listener) {
        if (listener.enterForeach_var) {
            listener.enterForeach_var(this);
        }
    };
    // @Override
    Foreach_varContext.prototype.exitRule = function (listener) {
        if (listener.exitForeach_var) {
            listener.exitForeach_var(this);
        }
    };
    // @Override
    Foreach_varContext.prototype.accept = function (visitor) {
        if (visitor.visitForeach_var) {
            return visitor.visitForeach_var(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Foreach_varContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Foreach_varContext = Foreach_varContext;
var First_for_exprContext = /** @class */ (function (_super) {
    __extends(First_for_exprContext, _super);
    function First_for_exprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    First_for_exprContext.prototype.for_expr = function () {
        return this.tryGetRuleContext(0, For_exprContext);
    };
    First_for_exprContext.prototype.single_new_local_def_with_init = function () {
        return this.tryGetRuleContext(0, Single_new_local_def_with_initContext);
    };
    Object.defineProperty(First_for_exprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_first_for_expr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    First_for_exprContext.prototype.enterRule = function (listener) {
        if (listener.enterFirst_for_expr) {
            listener.enterFirst_for_expr(this);
        }
    };
    // @Override
    First_for_exprContext.prototype.exitRule = function (listener) {
        if (listener.exitFirst_for_expr) {
            listener.exitFirst_for_expr(this);
        }
    };
    // @Override
    First_for_exprContext.prototype.accept = function (visitor) {
        if (visitor.visitFirst_for_expr) {
            return visitor.visitFirst_for_expr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return First_for_exprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.First_for_exprContext = First_for_exprContext;
var Single_new_local_def_with_initContext = /** @class */ (function (_super) {
    __extends(Single_new_local_def_with_initContext, _super);
    function Single_new_local_def_with_initContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Single_new_local_def_with_initContext.prototype.single_new_local_def = function () {
        return this.getRuleContext(0, Single_new_local_defContext);
    };
    Single_new_local_def_with_initContext.prototype.Assign = function () { return this.getToken(LPCParser.Assign, 0); };
    Single_new_local_def_with_initContext.prototype.expr0 = function () {
        return this.getRuleContext(0, Expr0Context);
    };
    Object.defineProperty(Single_new_local_def_with_initContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_single_new_local_def_with_init; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Single_new_local_def_with_initContext.prototype.enterRule = function (listener) {
        if (listener.enterSingle_new_local_def_with_init) {
            listener.enterSingle_new_local_def_with_init(this);
        }
    };
    // @Override
    Single_new_local_def_with_initContext.prototype.exitRule = function (listener) {
        if (listener.exitSingle_new_local_def_with_init) {
            listener.exitSingle_new_local_def_with_init(this);
        }
    };
    // @Override
    Single_new_local_def_with_initContext.prototype.accept = function (visitor) {
        if (visitor.visitSingle_new_local_def_with_init) {
            return visitor.visitSingle_new_local_def_with_init(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Single_new_local_def_with_initContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Single_new_local_def_with_initContext = Single_new_local_def_with_initContext;
var Single_new_local_defContext = /** @class */ (function (_super) {
    __extends(Single_new_local_defContext, _super);
    function Single_new_local_defContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Single_new_local_defContext.prototype.basic_type = function () {
        return this.getRuleContext(0, Basic_typeContext);
    };
    Single_new_local_defContext.prototype.optional_star = function () {
        return this.getRuleContext(0, Optional_starContext);
    };
    Single_new_local_defContext.prototype.new_local_name = function () {
        return this.getRuleContext(0, New_local_nameContext);
    };
    Object.defineProperty(Single_new_local_defContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_single_new_local_def; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Single_new_local_defContext.prototype.enterRule = function (listener) {
        if (listener.enterSingle_new_local_def) {
            listener.enterSingle_new_local_def(this);
        }
    };
    // @Override
    Single_new_local_defContext.prototype.exitRule = function (listener) {
        if (listener.exitSingle_new_local_def) {
            listener.exitSingle_new_local_def(this);
        }
    };
    // @Override
    Single_new_local_defContext.prototype.accept = function (visitor) {
        if (visitor.visitSingle_new_local_def) {
            return visitor.visitSingle_new_local_def(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Single_new_local_defContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Single_new_local_defContext = Single_new_local_defContext;
var For_exprContext = /** @class */ (function (_super) {
    __extends(For_exprContext, _super);
    function For_exprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    For_exprContext.prototype.comma_expr = function () {
        return this.tryGetRuleContext(0, Comma_exprContext);
    };
    Object.defineProperty(For_exprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_for_expr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    For_exprContext.prototype.enterRule = function (listener) {
        if (listener.enterFor_expr) {
            listener.enterFor_expr(this);
        }
    };
    // @Override
    For_exprContext.prototype.exitRule = function (listener) {
        if (listener.exitFor_expr) {
            listener.exitFor_expr(this);
        }
    };
    // @Override
    For_exprContext.prototype.accept = function (visitor) {
        if (visitor.visitFor_expr) {
            return visitor.visitFor_expr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return For_exprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.For_exprContext = For_exprContext;
var ReturnStatementContext = /** @class */ (function (_super) {
    __extends(ReturnStatementContext, _super);
    function ReturnStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReturnStatementContext.prototype.Return = function () { return this.getToken(LPCParser.Return, 0); };
    ReturnStatementContext.prototype.comma_expr = function () {
        return this.tryGetRuleContext(0, Comma_exprContext);
    };
    Object.defineProperty(ReturnStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_returnStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReturnStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterReturnStatement) {
            listener.enterReturnStatement(this);
        }
    };
    // @Override
    ReturnStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitReturnStatement) {
            listener.exitReturnStatement(this);
        }
    };
    // @Override
    ReturnStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitReturnStatement) {
            return visitor.visitReturnStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReturnStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReturnStatementContext = ReturnStatementContext;
var CondContext = /** @class */ (function (_super) {
    __extends(CondContext, _super);
    function CondContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CondContext.prototype.If = function () { return this.getToken(LPCParser.If, 0); };
    CondContext.prototype.comma_expr = function () {
        return this.getRuleContext(0, Comma_exprContext);
    };
    CondContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    CondContext.prototype.optional_else_part = function () {
        return this.getRuleContext(0, Optional_else_partContext);
    };
    Object.defineProperty(CondContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_cond; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CondContext.prototype.enterRule = function (listener) {
        if (listener.enterCond) {
            listener.enterCond(this);
        }
    };
    // @Override
    CondContext.prototype.exitRule = function (listener) {
        if (listener.exitCond) {
            listener.exitCond(this);
        }
    };
    // @Override
    CondContext.prototype.accept = function (visitor) {
        if (visitor.visitCond) {
            return visitor.visitCond(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CondContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CondContext = CondContext;
var Optional_else_partContext = /** @class */ (function (_super) {
    __extends(Optional_else_partContext, _super);
    function Optional_else_partContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Optional_else_partContext.prototype.Else = function () { return this.tryGetToken(LPCParser.Else, 0); };
    Optional_else_partContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    Object.defineProperty(Optional_else_partContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_optional_else_part; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Optional_else_partContext.prototype.enterRule = function (listener) {
        if (listener.enterOptional_else_part) {
            listener.enterOptional_else_part(this);
        }
    };
    // @Override
    Optional_else_partContext.prototype.exitRule = function (listener) {
        if (listener.exitOptional_else_part) {
            listener.exitOptional_else_part(this);
        }
    };
    // @Override
    Optional_else_partContext.prototype.accept = function (visitor) {
        if (visitor.visitOptional_else_part) {
            return visitor.visitOptional_else_part(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Optional_else_partContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Optional_else_partContext = Optional_else_partContext;
var ArgumentContext = /** @class */ (function (_super) {
    __extends(ArgumentContext, _super);
    function ArgumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentContext.prototype.argument_list = function () {
        return this.tryGetRuleContext(0, Argument_listContext);
    };
    ArgumentContext.prototype.Ellipsis = function () { return this.tryGetToken(LPCParser.Ellipsis, 0); };
    Object.defineProperty(ArgumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_argument; },
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
var Argument_listContext = /** @class */ (function (_super) {
    __extends(Argument_listContext, _super);
    function Argument_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Argument_listContext.prototype.new_arg = function () {
        return this.getRuleContext(0, New_argContext);
    };
    Argument_listContext.prototype.argument_list = function () {
        return this.tryGetRuleContext(0, Argument_listContext);
    };
    Object.defineProperty(Argument_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_argument_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Argument_listContext.prototype.enterRule = function (listener) {
        if (listener.enterArgument_list) {
            listener.enterArgument_list(this);
        }
    };
    // @Override
    Argument_listContext.prototype.exitRule = function (listener) {
        if (listener.exitArgument_list) {
            listener.exitArgument_list(this);
        }
    };
    // @Override
    Argument_listContext.prototype.accept = function (visitor) {
        if (visitor.visitArgument_list) {
            return visitor.visitArgument_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Argument_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Argument_listContext = Argument_listContext;
var New_argContext = /** @class */ (function (_super) {
    __extends(New_argContext, _super);
    function New_argContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    New_argContext.prototype.basic_type = function () {
        return this.tryGetRuleContext(0, Basic_typeContext);
    };
    New_argContext.prototype.optional_star = function () {
        return this.tryGetRuleContext(0, Optional_starContext);
    };
    New_argContext.prototype.new_local_name = function () {
        return this.tryGetRuleContext(0, New_local_nameContext);
    };
    Object.defineProperty(New_argContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_new_arg; },
        enumerable: true,
        configurable: true
    });
    // @Override
    New_argContext.prototype.enterRule = function (listener) {
        if (listener.enterNew_arg) {
            listener.enterNew_arg(this);
        }
    };
    // @Override
    New_argContext.prototype.exitRule = function (listener) {
        if (listener.exitNew_arg) {
            listener.exitNew_arg(this);
        }
    };
    // @Override
    New_argContext.prototype.accept = function (visitor) {
        if (visitor.visitNew_arg) {
            return visitor.visitNew_arg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return New_argContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.New_argContext = New_argContext;
var InheritanceContext = /** @class */ (function (_super) {
    __extends(InheritanceContext, _super);
    function InheritanceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InheritanceContext.prototype.type_modifier_list = function () {
        return this.getRuleContext(0, Type_modifier_listContext);
    };
    InheritanceContext.prototype.Inherit = function () { return this.getToken(LPCParser.Inherit, 0); };
    InheritanceContext.prototype.string_con1 = function () {
        return this.getRuleContext(0, String_con1Context);
    };
    Object.defineProperty(InheritanceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_inheritance; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InheritanceContext.prototype.enterRule = function (listener) {
        if (listener.enterInheritance) {
            listener.enterInheritance(this);
        }
    };
    // @Override
    InheritanceContext.prototype.exitRule = function (listener) {
        if (listener.exitInheritance) {
            listener.exitInheritance(this);
        }
    };
    // @Override
    InheritanceContext.prototype.accept = function (visitor) {
        if (visitor.visitInheritance) {
            return visitor.visitInheritance(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InheritanceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InheritanceContext = InheritanceContext;
var Data_typeContext = /** @class */ (function (_super) {
    __extends(Data_typeContext, _super);
    function Data_typeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Data_typeContext.prototype.type_modifier_list = function () {
        return this.getRuleContext(0, Type_modifier_listContext);
    };
    Data_typeContext.prototype.opt_basic_type = function () {
        return this.getRuleContext(0, Opt_basic_typeContext);
    };
    Object.defineProperty(Data_typeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_data_type; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Data_typeContext.prototype.enterRule = function (listener) {
        if (listener.enterData_type) {
            listener.enterData_type(this);
        }
    };
    // @Override
    Data_typeContext.prototype.exitRule = function (listener) {
        if (listener.exitData_type) {
            listener.exitData_type(this);
        }
    };
    // @Override
    Data_typeContext.prototype.accept = function (visitor) {
        if (visitor.visitData_type) {
            return visitor.visitData_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Data_typeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Data_typeContext = Data_typeContext;
var Opt_basic_typeContext = /** @class */ (function (_super) {
    __extends(Opt_basic_typeContext, _super);
    function Opt_basic_typeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Opt_basic_typeContext.prototype.basic_type = function () {
        return this.tryGetRuleContext(0, Basic_typeContext);
    };
    Object.defineProperty(Opt_basic_typeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_opt_basic_type; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Opt_basic_typeContext.prototype.enterRule = function (listener) {
        if (listener.enterOpt_basic_type) {
            listener.enterOpt_basic_type(this);
        }
    };
    // @Override
    Opt_basic_typeContext.prototype.exitRule = function (listener) {
        if (listener.exitOpt_basic_type) {
            listener.exitOpt_basic_type(this);
        }
    };
    // @Override
    Opt_basic_typeContext.prototype.accept = function (visitor) {
        if (visitor.visitOpt_basic_type) {
            return visitor.visitOpt_basic_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Opt_basic_typeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Opt_basic_typeContext = Opt_basic_typeContext;
var Optional_starContext = /** @class */ (function (_super) {
    __extends(Optional_starContext, _super);
    function Optional_starContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Optional_starContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_optional_star; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Optional_starContext.prototype.enterRule = function (listener) {
        if (listener.enterOptional_star) {
            listener.enterOptional_star(this);
        }
    };
    // @Override
    Optional_starContext.prototype.exitRule = function (listener) {
        if (listener.exitOptional_star) {
            listener.exitOptional_star(this);
        }
    };
    // @Override
    Optional_starContext.prototype.accept = function (visitor) {
        if (visitor.visitOptional_star) {
            return visitor.visitOptional_star(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Optional_starContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Optional_starContext = Optional_starContext;
var IdentifierContext = /** @class */ (function (_super) {
    __extends(IdentifierContext, _super);
    function IdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierContext.prototype.DefinedName = function () { return this.tryGetToken(LPCParser.DefinedName, 0); };
    IdentifierContext.prototype.Identifier = function () { return this.tryGetToken(LPCParser.Identifier, 0); };
    Object.defineProperty(IdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return LPCParser.RULE_identifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdentifierContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifier) {
            listener.enterIdentifier(this);
        }
    };
    // @Override
    IdentifierContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifier) {
            listener.exitIdentifier(this);
        }
    };
    // @Override
    IdentifierContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdentifierContext = IdentifierContext;
