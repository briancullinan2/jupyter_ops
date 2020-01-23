"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/algol60/algol60.g4 by ANTLR 4.7.3-SNAPSHOT
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
var algol60Parser = /** @class */ (function (_super) {
    __extends(algol60Parser, _super);
    function algol60Parser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(algol60Parser._ATN, _this);
        return _this;
    }
    Object.defineProperty(algol60Parser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return algol60Parser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(algol60Parser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "algol60.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(algol60Parser.prototype, "ruleNames", {
        // @Override
        get: function () { return algol60Parser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(algol60Parser.prototype, "serializedATN", {
        // @Override
        get: function () { return algol60Parser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    algol60Parser.prototype.program = function () {
        var _localctx = new ProgramContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, algol60Parser.RULE_program);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 182;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                    case 1:
                        {
                            this.state = 180;
                            this.block();
                        }
                        break;
                    case 2:
                        {
                            this.state = 181;
                            this.compound_statement();
                        }
                        break;
                }
                this.state = 184;
                this.match(algol60Parser.EOF);
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
    algol60Parser.prototype.block = function () {
        var _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, algol60Parser.RULE_block);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 189;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === algol60Parser.LETTER || _la === algol60Parser.DIGIT) {
                    {
                        this.state = 186;
                        this.label();
                        this.state = 187;
                        this.match(algol60Parser.T__0);
                    }
                }
                this.state = 191;
                this.block_head();
                this.state = 192;
                this.compound_tail();
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
    algol60Parser.prototype.block_head = function () {
        var _localctx = new Block_headContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, algol60Parser.RULE_block_head);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 194;
                this.match(algol60Parser.T__1);
                this.state = 198;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 195;
                            this.declaration();
                            this.state = 196;
                            this.match(algol60Parser.T__2);
                        }
                    }
                    this.state = 200;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << algol60Parser.T__4) | (1 << algol60Parser.T__5) | (1 << algol60Parser.T__6) | (1 << algol60Parser.T__7) | (1 << algol60Parser.T__9) | (1 << algol60Parser.T__10) | (1 << algol60Parser.T__12))) !== 0));
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
    algol60Parser.prototype.compound_statement = function () {
        var _localctx = new Compound_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, algol60Parser.RULE_compound_statement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 205;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === algol60Parser.LETTER || _la === algol60Parser.DIGIT) {
                    {
                        this.state = 202;
                        this.label();
                        this.state = 203;
                        this.match(algol60Parser.T__0);
                    }
                }
                this.state = 207;
                this.match(algol60Parser.T__1);
                this.state = 208;
                this.compound_tail();
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
    algol60Parser.prototype.compound_tail = function () {
        var _localctx = new Compound_tailContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, algol60Parser.RULE_compound_tail);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 215;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 210;
                                this.statement();
                                this.state = 211;
                                this.match(algol60Parser.T__2);
                            }
                        }
                    }
                    this.state = 217;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                }
                this.state = 218;
                this.statement();
                this.state = 219;
                this.match(algol60Parser.T__3);
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
    algol60Parser.prototype.declaration = function () {
        var _localctx = new DeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, algol60Parser.RULE_declaration);
        try {
            this.state = 225;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 221;
                        this.type_declaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 222;
                        this.array_declaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 223;
                        this.switch_declaration();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 224;
                        this.procedure_declaration();
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
    algol60Parser.prototype.type_declaration = function () {
        var _localctx = new Type_declarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, algol60Parser.RULE_type_declaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 227;
                this.local_or_own_type();
                this.state = 228;
                this.type_list();
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
    algol60Parser.prototype.local_or_own_type = function () {
        var _localctx = new Local_or_own_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, algol60Parser.RULE_local_or_own_type);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 231;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === algol60Parser.T__4) {
                    {
                        this.state = 230;
                        this.match(algol60Parser.T__4);
                    }
                }
                this.state = 233;
                this.type();
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
    algol60Parser.prototype.type = function () {
        var _localctx = new TypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, algol60Parser.RULE_type);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 235;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << algol60Parser.T__5) | (1 << algol60Parser.T__6) | (1 << algol60Parser.T__7))) !== 0))) {
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
    algol60Parser.prototype.type_list = function () {
        var _localctx = new Type_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, algol60Parser.RULE_type_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 237;
                this.simple_variable();
                this.state = 242;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === algol60Parser.T__8) {
                    {
                        {
                            this.state = 238;
                            this.match(algol60Parser.T__8);
                            this.state = 239;
                            this.simple_variable();
                        }
                    }
                    this.state = 244;
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
    algol60Parser.prototype.array_declaration = function () {
        var _localctx = new Array_declarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, algol60Parser.RULE_array_declaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 246;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << algol60Parser.T__4) | (1 << algol60Parser.T__5) | (1 << algol60Parser.T__6) | (1 << algol60Parser.T__7))) !== 0)) {
                    {
                        this.state = 245;
                        this.local_or_own_type();
                    }
                }
                this.state = 248;
                this.match(algol60Parser.T__9);
                this.state = 249;
                this.array_list();
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
    algol60Parser.prototype.array_list = function () {
        var _localctx = new Array_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, algol60Parser.RULE_array_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 251;
                this.array_segment();
                this.state = 256;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === algol60Parser.T__8) {
                    {
                        {
                            this.state = 252;
                            this.match(algol60Parser.T__8);
                            this.state = 253;
                            this.array_segment();
                        }
                    }
                    this.state = 258;
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
    algol60Parser.prototype.array_segment = function () {
        var _localctx = new Array_segmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, algol60Parser.RULE_array_segment);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 264;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 259;
                                this.array_identifier();
                                this.state = 260;
                                this.match(algol60Parser.T__8);
                            }
                        }
                    }
                    this.state = 266;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                }
                this.state = 267;
                this.array_identifier();
                this.state = 268;
                this.bound_pair_list();
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
    algol60Parser.prototype.array_identifier = function () {
        var _localctx = new Array_identifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, algol60Parser.RULE_array_identifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 270;
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
    algol60Parser.prototype.bound_pair_list = function () {
        var _localctx = new Bound_pair_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, algol60Parser.RULE_bound_pair_list);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 272;
                this.bound_pair();
                this.state = 277;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 273;
                                this.match(algol60Parser.T__8);
                                this.state = 274;
                                this.bound_pair();
                            }
                        }
                    }
                    this.state = 279;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
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
    algol60Parser.prototype.bound_pair = function () {
        var _localctx = new Bound_pairContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, algol60Parser.RULE_bound_pair);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 280;
                this.lower_bound();
                this.state = 281;
                this.match(algol60Parser.T__0);
                this.state = 282;
                this.upper_bound();
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
    algol60Parser.prototype.upper_bound = function () {
        var _localctx = new Upper_boundContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, algol60Parser.RULE_upper_bound);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 284;
                this.arithmetic_expression(0);
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
    algol60Parser.prototype.lower_bound = function () {
        var _localctx = new Lower_boundContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, algol60Parser.RULE_lower_bound);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 286;
                this.arithmetic_expression(0);
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
    algol60Parser.prototype.switch_declaration = function () {
        var _localctx = new Switch_declarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, algol60Parser.RULE_switch_declaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 288;
                this.match(algol60Parser.T__10);
                this.state = 289;
                this.switch_identifier();
                this.state = 290;
                this.match(algol60Parser.T__11);
                this.state = 291;
                this.switch_list();
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
    algol60Parser.prototype.switch_identifier = function () {
        var _localctx = new Switch_identifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, algol60Parser.RULE_switch_identifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 293;
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
    algol60Parser.prototype.switch_list = function () {
        var _localctx = new Switch_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, algol60Parser.RULE_switch_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 295;
                this.designational_expression();
                this.state = 300;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === algol60Parser.T__8) {
                    {
                        {
                            this.state = 296;
                            this.match(algol60Parser.T__8);
                            this.state = 297;
                            this.designational_expression();
                        }
                    }
                    this.state = 302;
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
    algol60Parser.prototype.procedure_declaration = function () {
        var _localctx = new Procedure_declarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, algol60Parser.RULE_procedure_declaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 304;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << algol60Parser.T__5) | (1 << algol60Parser.T__6) | (1 << algol60Parser.T__7))) !== 0)) {
                    {
                        this.state = 303;
                        this.type();
                    }
                }
                this.state = 306;
                this.match(algol60Parser.T__12);
                this.state = 307;
                this.procedure_heading();
                this.state = 308;
                this.procedure_body();
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
    algol60Parser.prototype.procedure_heading = function () {
        var _localctx = new Procedure_headingContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, algol60Parser.RULE_procedure_heading);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 310;
                this.procedure_identifier();
                this.state = 312;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === algol60Parser.T__13) {
                    {
                        this.state = 311;
                        this.formal_parameter_part();
                    }
                }
                this.state = 314;
                this.match(algol60Parser.T__2);
                this.state = 316;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === algol60Parser.T__15) {
                    {
                        this.state = 315;
                        this.value_part();
                    }
                }
                this.state = 319;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << algol60Parser.T__5) | (1 << algol60Parser.T__6) | (1 << algol60Parser.T__7) | (1 << algol60Parser.T__9) | (1 << algol60Parser.T__10) | (1 << algol60Parser.T__12) | (1 << algol60Parser.T__16))) !== 0) || _la === algol60Parser.STRING) {
                    {
                        this.state = 318;
                        this.specification_part();
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
    algol60Parser.prototype.procedure_identifier = function () {
        var _localctx = new Procedure_identifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, algol60Parser.RULE_procedure_identifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 321;
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
    algol60Parser.prototype.formal_parameter_part = function () {
        var _localctx = new Formal_parameter_partContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, algol60Parser.RULE_formal_parameter_part);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 323;
                this.formal_parameter_list();
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
    algol60Parser.prototype.formal_parameter_list = function () {
        var _localctx = new Formal_parameter_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, algol60Parser.RULE_formal_parameter_list);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 325;
                this.match(algol60Parser.T__13);
                this.state = 326;
                this.formal_parameter();
                this.state = 332;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 327;
                                this.parameter_delimiter();
                                this.state = 328;
                                this.formal_parameter();
                            }
                        }
                    }
                    this.state = 334;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
                }
                this.state = 335;
                this.match(algol60Parser.T__14);
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
    algol60Parser.prototype.formal_parameter = function () {
        var _localctx = new Formal_parameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, algol60Parser.RULE_formal_parameter);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 337;
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
    algol60Parser.prototype.value_part = function () {
        var _localctx = new Value_partContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, algol60Parser.RULE_value_part);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 339;
                this.match(algol60Parser.T__15);
                this.state = 340;
                this.identifier_list();
                this.state = 341;
                this.match(algol60Parser.T__2);
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
    algol60Parser.prototype.specification_part = function () {
        var _localctx = new Specification_partContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, algol60Parser.RULE_specification_part);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 343;
                this.specifier();
                this.state = 344;
                this.identifier_list();
                this.state = 351;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 345;
                                this.match(algol60Parser.T__2);
                                this.state = 346;
                                this.specifier();
                                this.state = 347;
                                this.identifier_list();
                            }
                        }
                    }
                    this.state = 353;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
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
    algol60Parser.prototype.specifier = function () {
        var _localctx = new SpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, algol60Parser.RULE_specifier);
        var _la;
        try {
            this.state = 366;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 354;
                        this.match(algol60Parser.STRING);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 355;
                        this.type();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 357;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << algol60Parser.T__5) | (1 << algol60Parser.T__6) | (1 << algol60Parser.T__7))) !== 0)) {
                            {
                                this.state = 356;
                                this.type();
                            }
                        }
                        this.state = 359;
                        this.match(algol60Parser.T__9);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 360;
                        this.match(algol60Parser.T__16);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 361;
                        this.match(algol60Parser.T__10);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 363;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << algol60Parser.T__5) | (1 << algol60Parser.T__6) | (1 << algol60Parser.T__7))) !== 0)) {
                            {
                                this.state = 362;
                                this.type();
                            }
                        }
                        this.state = 365;
                        this.match(algol60Parser.T__12);
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
    algol60Parser.prototype.identifier_list = function () {
        var _localctx = new Identifier_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, algol60Parser.RULE_identifier_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 368;
                this.identifier();
                this.state = 373;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === algol60Parser.T__8) {
                    {
                        {
                            this.state = 369;
                            this.match(algol60Parser.T__8);
                            this.state = 370;
                            this.identifier();
                        }
                    }
                    this.state = 375;
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
    algol60Parser.prototype.procedure_body = function () {
        var _localctx = new Procedure_bodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, algol60Parser.RULE_procedure_body);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 376;
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
    algol60Parser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, algol60Parser.RULE_statement);
        try {
            this.state = 381;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 23, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 378;
                        this.unconditional_statement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 379;
                        this.conditional_statement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 380;
                        this.for_statement();
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
    algol60Parser.prototype.unconditional_statement = function () {
        var _localctx = new Unconditional_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, algol60Parser.RULE_unconditional_statement);
        try {
            this.state = 386;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 383;
                        this.basic_statement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 384;
                        this.compound_statement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 385;
                        this.block();
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
    algol60Parser.prototype.basic_statement = function () {
        var _localctx = new Basic_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, algol60Parser.RULE_basic_statement);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 393;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 388;
                                this.label();
                                this.state = 389;
                                this.match(algol60Parser.T__0);
                            }
                        }
                    }
                    this.state = 395;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                }
                this.state = 397;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === algol60Parser.T__17 || _la === algol60Parser.LETTER) {
                    {
                        this.state = 396;
                        this.unlabelled_basic_statement();
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
    algol60Parser.prototype.label = function () {
        var _localctx = new LabelContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, algol60Parser.RULE_label);
        try {
            this.state = 401;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case algol60Parser.LETTER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 399;
                        this.identifier();
                    }
                    break;
                case algol60Parser.DIGIT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 400;
                        this.unsigned_integer();
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
    algol60Parser.prototype.unlabelled_basic_statement = function () {
        var _localctx = new Unlabelled_basic_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, algol60Parser.RULE_unlabelled_basic_statement);
        try {
            this.state = 406;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 403;
                        this.assignment_statement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 404;
                        this.go_to_statement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 405;
                        this.procedure_statement();
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
    algol60Parser.prototype.assignment_statement = function () {
        var _localctx = new Assignment_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, algol60Parser.RULE_assignment_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 408;
                this.left_part_list();
                this.state = 411;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case algol60Parser.T__23:
                        {
                            this.state = 409;
                            this.arithmetic_expression(0);
                        }
                        break;
                    case algol60Parser.T__13:
                    case algol60Parser.T__19:
                    case algol60Parser.T__26:
                    case algol60Parser.T__27:
                    case algol60Parser.T__32:
                    case algol60Parser.T__33:
                    case algol60Parser.T__39:
                    case algol60Parser.T__48:
                    case algol60Parser.T__49:
                    case algol60Parser.LETTER:
                    case algol60Parser.DIGIT:
                        {
                            this.state = 410;
                            this.boolean_expression(0);
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
    algol60Parser.prototype.left_part_list = function () {
        var _localctx = new Left_part_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, algol60Parser.RULE_left_part_list);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 414;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 413;
                                    this.left_part();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 416;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
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
    algol60Parser.prototype.left_part = function () {
        var _localctx = new Left_partContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, algol60Parser.RULE_left_part);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 420;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 31, this._ctx)) {
                    case 1:
                        {
                            this.state = 418;
                            this.variable();
                        }
                        break;
                    case 2:
                        {
                            this.state = 419;
                            this.procedure_identifier();
                        }
                        break;
                }
                this.state = 422;
                this.match(algol60Parser.T__11);
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
    algol60Parser.prototype.go_to_statement = function () {
        var _localctx = new Go_to_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, algol60Parser.RULE_go_to_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 424;
                this.match(algol60Parser.T__17);
                this.state = 425;
                this.designational_expression();
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
    algol60Parser.prototype.designational_expression = function () {
        var _localctx = new Designational_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, algol60Parser.RULE_designational_expression);
        try {
            this.state = 434;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 427;
                        this.label();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 428;
                        this.switch_designator();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 429;
                        this.if_clause();
                        this.state = 430;
                        this.designational_expression();
                        this.state = 431;
                        this.match(algol60Parser.T__18);
                        this.state = 432;
                        this.designational_expression();
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
    algol60Parser.prototype.switch_designator = function () {
        var _localctx = new Switch_designatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, algol60Parser.RULE_switch_designator);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 436;
                this.switch_identifier();
                this.state = 438;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
                    case 1:
                        {
                            this.state = 437;
                            this.subscript_expression();
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
    algol60Parser.prototype.procedure_statement = function () {
        var _localctx = new Procedure_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, algol60Parser.RULE_procedure_statement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 440;
                this.procedure_identifier();
                this.state = 442;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << algol60Parser.T__13) | (1 << algol60Parser.T__19) | (1 << algol60Parser.T__23) | (1 << algol60Parser.T__26) | (1 << algol60Parser.T__27))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (algol60Parser.T__32 - 33)) | (1 << (algol60Parser.T__33 - 33)) | (1 << (algol60Parser.T__39 - 33)) | (1 << (algol60Parser.T__48 - 33)) | (1 << (algol60Parser.T__49 - 33)) | (1 << (algol60Parser.STRING - 33)) | (1 << (algol60Parser.LETTER - 33)) | (1 << (algol60Parser.DIGIT - 33)))) !== 0)) {
                    {
                        this.state = 441;
                        this.actual_parameter_part();
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
    algol60Parser.prototype.actual_parameter_part = function () {
        var _localctx = new Actual_parameter_partContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, algol60Parser.RULE_actual_parameter_part);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 444;
                this.actual_parameter_list();
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
    algol60Parser.prototype.actual_parameter_list = function () {
        var _localctx = new Actual_parameter_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, algol60Parser.RULE_actual_parameter_list);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 446;
                this.actual_parameter();
                this.state = 452;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 447;
                                this.parameter_delimiter();
                                this.state = 448;
                                this.actual_parameter();
                            }
                        }
                    }
                    this.state = 454;
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
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    algol60Parser.prototype.parameter_delimiter = function () {
        var _localctx = new Parameter_delimiterContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, algol60Parser.RULE_parameter_delimiter);
        try {
            this.state = 461;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case algol60Parser.T__8:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 455;
                        this.match(algol60Parser.T__8);
                    }
                    break;
                case algol60Parser.T__14:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 456;
                        this.match(algol60Parser.T__14);
                        this.state = 457;
                        this.letter_string();
                        this.state = 458;
                        this.match(algol60Parser.T__0);
                        this.state = 459;
                        this.match(algol60Parser.T__13);
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
    algol60Parser.prototype.actual_parameter = function () {
        var _localctx = new Actual_parameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, algol60Parser.RULE_actual_parameter);
        try {
            this.state = 468;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 463;
                        this.match(algol60Parser.STRING);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 464;
                        this.expression();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 465;
                        this.array_identifier();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 466;
                        this.switch_identifier();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 467;
                        this.procedure_identifier();
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
    algol60Parser.prototype.conditional_statement = function () {
        var _localctx = new Conditional_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, algol60Parser.RULE_conditional_statement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 475;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === algol60Parser.LETTER || _la === algol60Parser.DIGIT) {
                    {
                        {
                            this.state = 470;
                            this.label();
                            this.state = 471;
                            this.match(algol60Parser.T__0);
                        }
                    }
                    this.state = 477;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 486;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
                    case 1:
                        {
                            {
                                this.state = 478;
                                this.if_statement();
                                this.state = 481;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === algol60Parser.T__18) {
                                    {
                                        this.state = 479;
                                        this.match(algol60Parser.T__18);
                                        this.state = 480;
                                        this.statement();
                                    }
                                }
                            }
                        }
                        break;
                    case 2:
                        {
                            {
                                this.state = 483;
                                this.if_clause();
                                this.state = 484;
                                this.for_statement();
                            }
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
    algol60Parser.prototype.if_statement = function () {
        var _localctx = new If_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, algol60Parser.RULE_if_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 488;
                this.if_clause();
                this.state = 489;
                this.unconditional_statement();
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
    algol60Parser.prototype.if_clause = function () {
        var _localctx = new If_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, algol60Parser.RULE_if_clause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 491;
                this.match(algol60Parser.T__19);
                this.state = 492;
                this.boolean_expression(0);
                this.state = 493;
                this.match(algol60Parser.T__20);
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
    algol60Parser.prototype.for_statement = function () {
        var _localctx = new For_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, algol60Parser.RULE_for_statement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 500;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === algol60Parser.LETTER || _la === algol60Parser.DIGIT) {
                    {
                        {
                            this.state = 495;
                            this.label();
                            this.state = 496;
                            this.match(algol60Parser.T__0);
                        }
                    }
                    this.state = 502;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 503;
                this.for_clause();
                this.state = 504;
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
    algol60Parser.prototype.for_clause = function () {
        var _localctx = new For_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, algol60Parser.RULE_for_clause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 506;
                this.match(algol60Parser.T__21);
                this.state = 507;
                this.variable();
                this.state = 508;
                this.match(algol60Parser.T__11);
                this.state = 509;
                this.for_list();
                this.state = 510;
                this.match(algol60Parser.T__22);
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
    algol60Parser.prototype.for_list = function () {
        var _localctx = new For_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, algol60Parser.RULE_for_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 512;
                this.for_list_element();
                this.state = 517;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === algol60Parser.T__8) {
                    {
                        {
                            this.state = 513;
                            this.match(algol60Parser.T__8);
                            this.state = 514;
                            this.for_list_element();
                        }
                    }
                    this.state = 519;
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
    algol60Parser.prototype.for_list_element = function () {
        var _localctx = new For_list_elementContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, algol60Parser.RULE_for_list_element);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 521;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === algol60Parser.T__23) {
                    {
                        this.state = 520;
                        this.arithmetic_expression(0);
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
    algol60Parser.prototype.arithmetic_expression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Arithmetic_expressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 110;
        this.enterRecursionRule(_localctx, 110, algol60Parser.RULE_arithmetic_expression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 524;
                    this.match(algol60Parser.T__23);
                    this.state = 525;
                    this.arithmetic_expression(0);
                    this.state = 526;
                    this.match(algol60Parser.T__24);
                    this.state = 527;
                    this.arithmetic_expression(2);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 534;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new Arithmetic_expressionContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, algol60Parser.RULE_arithmetic_expression);
                                this.state = 529;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 530;
                                this.match(algol60Parser.T__25);
                                this.state = 531;
                                this.boolean_expression(0);
                            }
                        }
                    }
                    this.state = 536;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
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
    algol60Parser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, algol60Parser.RULE_expression);
        try {
            this.state = 540;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 45, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 537;
                        this.arithmetic_expression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 538;
                        this.boolean_expression(0);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 539;
                        this.designational_expression();
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
    algol60Parser.prototype.arithmetic_expression2 = function () {
        var _localctx = new Arithmetic_expression2Context(this._ctx, this.state);
        this.enterRule(_localctx, 114, algol60Parser.RULE_arithmetic_expression2);
        try {
            this.state = 548;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case algol60Parser.T__13:
                case algol60Parser.T__26:
                case algol60Parser.T__27:
                case algol60Parser.T__32:
                case algol60Parser.T__33:
                case algol60Parser.LETTER:
                case algol60Parser.DIGIT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 542;
                        this.simple_arithmetic_expression();
                    }
                    break;
                case algol60Parser.T__19:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 543;
                        this.if_clause();
                        this.state = 544;
                        this.simple_arithmetic_expression();
                        this.state = 545;
                        this.match(algol60Parser.T__18);
                        this.state = 546;
                        this.arithmetic_expression(0);
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
    algol60Parser.prototype.simple_arithmetic_expression = function () {
        var _localctx = new Simple_arithmetic_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, algol60Parser.RULE_simple_arithmetic_expression);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 551;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === algol60Parser.T__26 || _la === algol60Parser.T__27) {
                    {
                        this.state = 550;
                        this.adding_operator();
                    }
                }
                this.state = 553;
                this.term();
                this.state = 559;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 554;
                                this.adding_operator();
                                this.state = 555;
                                this.term();
                            }
                        }
                    }
                    this.state = 561;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
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
    algol60Parser.prototype.adding_operator = function () {
        var _localctx = new Adding_operatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, algol60Parser.RULE_adding_operator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 562;
                _la = this._input.LA(1);
                if (!(_la === algol60Parser.T__26 || _la === algol60Parser.T__27)) {
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
    algol60Parser.prototype.term = function () {
        var _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, algol60Parser.RULE_term);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 564;
                this.factor();
                this.state = 570;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 565;
                                this.multiplying_operator();
                                this.state = 566;
                                this.factor();
                            }
                        }
                    }
                    this.state = 572;
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
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    algol60Parser.prototype.multiplying_operator = function () {
        var _localctx = new Multiplying_operatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, algol60Parser.RULE_multiplying_operator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 573;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << algol60Parser.T__28) | (1 << algol60Parser.T__29) | (1 << algol60Parser.T__30))) !== 0))) {
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
    algol60Parser.prototype.factor = function () {
        var _localctx = new FactorContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, algol60Parser.RULE_factor);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 575;
                this.primary();
                this.state = 580;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 576;
                                this.match(algol60Parser.T__31);
                                this.state = 577;
                                this.primary();
                            }
                        }
                    }
                    this.state = 582;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
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
    algol60Parser.prototype.primary = function () {
        var _localctx = new PrimaryContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, algol60Parser.RULE_primary);
        try {
            this.state = 590;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 51, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 583;
                        this.unsigned_number();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 584;
                        this.variable();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 585;
                        this.function_designator();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 586;
                        this.match(algol60Parser.T__13);
                        this.state = 587;
                        this.arithmetic_expression(0);
                        this.state = 588;
                        this.match(algol60Parser.T__14);
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
    algol60Parser.prototype.unsigned_number = function () {
        var _localctx = new Unsigned_numberContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, algol60Parser.RULE_unsigned_number);
        try {
            this.state = 597;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 52, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 592;
                        this.decimal_number();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 593;
                        this.exponential_part();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 594;
                        this.decimal_number();
                        this.state = 595;
                        this.exponential_part();
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
    algol60Parser.prototype.decimal_number = function () {
        var _localctx = new Decimal_numberContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, algol60Parser.RULE_decimal_number);
        try {
            this.state = 604;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 53, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 599;
                        this.unsigned_integer();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 600;
                        this.decimal_fraction();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 601;
                        this.unsigned_integer();
                        this.state = 602;
                        this.decimal_fraction();
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
    algol60Parser.prototype.unsigned_integer = function () {
        var _localctx = new Unsigned_integerContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, algol60Parser.RULE_unsigned_integer);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 607;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 606;
                                    this.match(algol60Parser.DIGIT);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 609;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
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
    algol60Parser.prototype.decimal_fraction = function () {
        var _localctx = new Decimal_fractionContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, algol60Parser.RULE_decimal_fraction);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 611;
                this.match(algol60Parser.T__32);
                this.state = 612;
                this.unsigned_integer();
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
    algol60Parser.prototype.exponential_part = function () {
        var _localctx = new Exponential_partContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, algol60Parser.RULE_exponential_part);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 614;
                this.match(algol60Parser.T__33);
                this.state = 615;
                this.integer();
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
    algol60Parser.prototype.integer = function () {
        var _localctx = new IntegerContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, algol60Parser.RULE_integer);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 618;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === algol60Parser.T__26 || _la === algol60Parser.T__34) {
                    {
                        this.state = 617;
                        _la = this._input.LA(1);
                        if (!(_la === algol60Parser.T__26 || _la === algol60Parser.T__34)) {
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
                this.state = 620;
                this.unsigned_integer();
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
    algol60Parser.prototype.boolean_expression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Boolean_expressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 140;
        this.enterRecursionRule(_localctx, 140, algol60Parser.RULE_boolean_expression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 638;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 56, this._ctx)) {
                    case 1:
                        {
                            this.state = 623;
                            this.if_clause();
                            this.state = 624;
                            this.boolean_expression(0);
                            this.state = 625;
                            this.match(algol60Parser.T__18);
                            this.state = 626;
                            this.boolean_expression(11);
                        }
                        break;
                    case 2:
                        {
                            this.state = 628;
                            this.match(algol60Parser.T__39);
                            this.state = 629;
                            this.boolean_expression(6);
                        }
                        break;
                    case 3:
                        {
                            this.state = 630;
                            this.logical_value();
                        }
                        break;
                    case 4:
                        {
                            this.state = 631;
                            this.variable();
                        }
                        break;
                    case 5:
                        {
                            this.state = 632;
                            this.function_designator();
                        }
                        break;
                    case 6:
                        {
                            this.state = 633;
                            this.relation();
                        }
                        break;
                    case 7:
                        {
                            this.state = 634;
                            this.match(algol60Parser.T__13);
                            this.state = 635;
                            this.boolean_expression(0);
                            this.state = 636;
                            this.match(algol60Parser.T__14);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 654;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 652;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 57, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new Boolean_expressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, algol60Parser.RULE_boolean_expression);
                                        this.state = 640;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 641;
                                        this.match(algol60Parser.T__35);
                                        this.state = 642;
                                        this.boolean_expression(11);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new Boolean_expressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, algol60Parser.RULE_boolean_expression);
                                        this.state = 643;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 644;
                                        this.match(algol60Parser.T__36);
                                        this.state = 645;
                                        this.boolean_expression(10);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new Boolean_expressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, algol60Parser.RULE_boolean_expression);
                                        this.state = 646;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 647;
                                        this.match(algol60Parser.T__37);
                                        this.state = 648;
                                        this.boolean_expression(9);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new Boolean_expressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, algol60Parser.RULE_boolean_expression);
                                        this.state = 649;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 650;
                                        this.match(algol60Parser.T__38);
                                        this.state = 651;
                                        this.boolean_expression(8);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 656;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
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
    algol60Parser.prototype.relation = function () {
        var _localctx = new RelationContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, algol60Parser.RULE_relation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 657;
                this.simple_arithmetic_expression();
                this.state = 658;
                this.relational_operator();
                this.state = 659;
                this.simple_arithmetic_expression();
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
    algol60Parser.prototype.relational_operator = function () {
        var _localctx = new Relational_operatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, algol60Parser.RULE_relational_operator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 661;
                _la = this._input.LA(1);
                if (!(((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (algol60Parser.T__40 - 41)) | (1 << (algol60Parser.T__41 - 41)) | (1 << (algol60Parser.T__42 - 41)) | (1 << (algol60Parser.T__43 - 41)) | (1 << (algol60Parser.T__44 - 41)) | (1 << (algol60Parser.T__45 - 41)))) !== 0))) {
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
    algol60Parser.prototype.function_designator = function () {
        var _localctx = new Function_designatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, algol60Parser.RULE_function_designator);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 663;
                this.procedure_identifier();
                this.state = 664;
                this.actual_parameter_part();
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
    algol60Parser.prototype.variable = function () {
        var _localctx = new VariableContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, algol60Parser.RULE_variable);
        try {
            this.state = 668;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 59, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 666;
                        this.simple_variable();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 667;
                        this.subscripted_variable();
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
    algol60Parser.prototype.simple_variable = function () {
        var _localctx = new Simple_variableContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, algol60Parser.RULE_simple_variable);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 670;
                this.variable_identifier();
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
    algol60Parser.prototype.variable_identifier = function () {
        var _localctx = new Variable_identifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, algol60Parser.RULE_variable_identifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 672;
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
    algol60Parser.prototype.subscripted_variable = function () {
        var _localctx = new Subscripted_variableContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, algol60Parser.RULE_subscripted_variable);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 674;
                this.array_identifier();
                this.state = 675;
                this.match(algol60Parser.T__46);
                this.state = 676;
                this.subscript_list();
                this.state = 677;
                this.match(algol60Parser.T__47);
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
    algol60Parser.prototype.subscript_list = function () {
        var _localctx = new Subscript_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, algol60Parser.RULE_subscript_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 679;
                this.subscript_expression();
                this.state = 684;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === algol60Parser.T__8) {
                    {
                        {
                            this.state = 680;
                            this.match(algol60Parser.T__8);
                            this.state = 681;
                            this.subscript_expression();
                        }
                    }
                    this.state = 686;
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
    algol60Parser.prototype.subscript_expression = function () {
        var _localctx = new Subscript_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, algol60Parser.RULE_subscript_expression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 687;
                this.arithmetic_expression(0);
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
    algol60Parser.prototype.open_string = function () {
        var _localctx = new Open_stringContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, algol60Parser.RULE_open_string);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 690;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 61, this._ctx)) {
                    case 1:
                        {
                            this.state = 689;
                            this.proper_string();
                        }
                        break;
                }
                this.state = 692;
                this.match(algol60Parser.STRING);
                this.state = 697;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 694;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 62, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 693;
                                        this.proper_string();
                                    }
                                    break;
                            }
                            this.state = 696;
                            this.match(algol60Parser.STRING);
                        }
                    }
                    this.state = 699;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === algol60Parser.STRING);
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
    algol60Parser.prototype.proper_string = function () {
        var _localctx = new Proper_stringContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, algol60Parser.RULE_proper_string);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 701;
                this.match(algol60Parser.STRING);
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
    algol60Parser.prototype.letter_string = function () {
        var _localctx = new Letter_stringContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, algol60Parser.RULE_letter_string);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 704;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 703;
                            this.match(algol60Parser.LETTER);
                        }
                    }
                    this.state = 706;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === algol60Parser.LETTER);
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
    algol60Parser.prototype.identifier = function () {
        var _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, algol60Parser.RULE_identifier);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 708;
                this.match(algol60Parser.LETTER);
                this.state = 712;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 709;
                                _la = this._input.LA(1);
                                if (!(_la === algol60Parser.LETTER || _la === algol60Parser.DIGIT)) {
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
                    this.state = 714;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
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
    algol60Parser.prototype.basic_symbol = function () {
        var _localctx = new Basic_symbolContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, algol60Parser.RULE_basic_symbol);
        try {
            this.state = 719;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case algol60Parser.LETTER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 715;
                        this.match(algol60Parser.LETTER);
                    }
                    break;
                case algol60Parser.DIGIT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 716;
                        this.match(algol60Parser.DIGIT);
                    }
                    break;
                case algol60Parser.T__48:
                case algol60Parser.T__49:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 717;
                        this.logical_value();
                    }
                    break;
                case algol60Parser.T__1:
                case algol60Parser.T__3:
                case algol60Parser.T__13:
                case algol60Parser.T__14:
                case algol60Parser.T__15:
                case algol60Parser.T__16:
                case algol60Parser.T__46:
                case algol60Parser.T__47:
                case algol60Parser.T__50:
                case algol60Parser.T__51:
                case algol60Parser.T__52:
                case algol60Parser.ARITHMETIC_OPERATOR:
                case algol60Parser.RELATIONAL_OPERATOR:
                case algol60Parser.LOGICAL_OPERATOR:
                case algol60Parser.SEQUENTIAL_OPERATOR:
                case algol60Parser.SEPARATOR:
                case algol60Parser.DECLARATOR:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 718;
                        this.delimiter();
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
    algol60Parser.prototype.logical_value = function () {
        var _localctx = new Logical_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, algol60Parser.RULE_logical_value);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 721;
                _la = this._input.LA(1);
                if (!(_la === algol60Parser.T__48 || _la === algol60Parser.T__49)) {
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
    algol60Parser.prototype.delimiter = function () {
        var _localctx = new DelimiterContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, algol60Parser.RULE_delimiter);
        try {
            this.state = 728;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case algol60Parser.ARITHMETIC_OPERATOR:
                case algol60Parser.RELATIONAL_OPERATOR:
                case algol60Parser.LOGICAL_OPERATOR:
                case algol60Parser.SEQUENTIAL_OPERATOR:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 723;
                        this.operator();
                    }
                    break;
                case algol60Parser.SEPARATOR:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 724;
                        this.match(algol60Parser.SEPARATOR);
                    }
                    break;
                case algol60Parser.T__1:
                case algol60Parser.T__3:
                case algol60Parser.T__13:
                case algol60Parser.T__14:
                case algol60Parser.T__46:
                case algol60Parser.T__47:
                case algol60Parser.T__50:
                case algol60Parser.T__51:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 725;
                        this.bracket();
                    }
                    break;
                case algol60Parser.DECLARATOR:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 726;
                        this.match(algol60Parser.DECLARATOR);
                    }
                    break;
                case algol60Parser.T__15:
                case algol60Parser.T__16:
                case algol60Parser.T__52:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 727;
                        this.specificator();
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
    algol60Parser.prototype.operator = function () {
        var _localctx = new OperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, algol60Parser.RULE_operator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 730;
                _la = this._input.LA(1);
                if (!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (algol60Parser.ARITHMETIC_OPERATOR - 57)) | (1 << (algol60Parser.RELATIONAL_OPERATOR - 57)) | (1 << (algol60Parser.LOGICAL_OPERATOR - 57)) | (1 << (algol60Parser.SEQUENTIAL_OPERATOR - 57)))) !== 0))) {
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
    algol60Parser.prototype.bracket = function () {
        var _localctx = new BracketContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, algol60Parser.RULE_bracket);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 732;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << algol60Parser.T__1) | (1 << algol60Parser.T__3) | (1 << algol60Parser.T__13) | (1 << algol60Parser.T__14))) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (algol60Parser.T__46 - 47)) | (1 << (algol60Parser.T__47 - 47)) | (1 << (algol60Parser.T__50 - 47)) | (1 << (algol60Parser.T__51 - 47)))) !== 0))) {
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
    algol60Parser.prototype.specificator = function () {
        var _localctx = new SpecificatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, algol60Parser.RULE_specificator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 734;
                _la = this._input.LA(1);
                if (!(_la === algol60Parser.T__15 || _la === algol60Parser.T__16 || _la === algol60Parser.T__52)) {
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
    algol60Parser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 55:
                return this.arithmetic_expression_sempred(_localctx, predIndex);
            case 70:
                return this.boolean_expression_sempred(_localctx, predIndex);
        }
        return true;
    };
    algol60Parser.prototype.arithmetic_expression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    algol60Parser.prototype.boolean_expression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 1:
                return this.precpred(this._ctx, 10);
            case 2:
                return this.precpred(this._ctx, 9);
            case 3:
                return this.precpred(this._ctx, 8);
            case 4:
                return this.precpred(this._ctx, 7);
        }
        return true;
    };
    Object.defineProperty(algol60Parser, "_ATN", {
        get: function () {
            if (!algol60Parser.__ATN) {
                algol60Parser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(algol60Parser._serializedATN));
            }
            return algol60Parser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    algol60Parser.T__0 = 1;
    algol60Parser.T__1 = 2;
    algol60Parser.T__2 = 3;
    algol60Parser.T__3 = 4;
    algol60Parser.T__4 = 5;
    algol60Parser.T__5 = 6;
    algol60Parser.T__6 = 7;
    algol60Parser.T__7 = 8;
    algol60Parser.T__8 = 9;
    algol60Parser.T__9 = 10;
    algol60Parser.T__10 = 11;
    algol60Parser.T__11 = 12;
    algol60Parser.T__12 = 13;
    algol60Parser.T__13 = 14;
    algol60Parser.T__14 = 15;
    algol60Parser.T__15 = 16;
    algol60Parser.T__16 = 17;
    algol60Parser.T__17 = 18;
    algol60Parser.T__18 = 19;
    algol60Parser.T__19 = 20;
    algol60Parser.T__20 = 21;
    algol60Parser.T__21 = 22;
    algol60Parser.T__22 = 23;
    algol60Parser.T__23 = 24;
    algol60Parser.T__24 = 25;
    algol60Parser.T__25 = 26;
    algol60Parser.T__26 = 27;
    algol60Parser.T__27 = 28;
    algol60Parser.T__28 = 29;
    algol60Parser.T__29 = 30;
    algol60Parser.T__30 = 31;
    algol60Parser.T__31 = 32;
    algol60Parser.T__32 = 33;
    algol60Parser.T__33 = 34;
    algol60Parser.T__34 = 35;
    algol60Parser.T__35 = 36;
    algol60Parser.T__36 = 37;
    algol60Parser.T__37 = 38;
    algol60Parser.T__38 = 39;
    algol60Parser.T__39 = 40;
    algol60Parser.T__40 = 41;
    algol60Parser.T__41 = 42;
    algol60Parser.T__42 = 43;
    algol60Parser.T__43 = 44;
    algol60Parser.T__44 = 45;
    algol60Parser.T__45 = 46;
    algol60Parser.T__46 = 47;
    algol60Parser.T__47 = 48;
    algol60Parser.T__48 = 49;
    algol60Parser.T__49 = 50;
    algol60Parser.T__50 = 51;
    algol60Parser.T__51 = 52;
    algol60Parser.T__52 = 53;
    algol60Parser.STRING = 54;
    algol60Parser.LETTER = 55;
    algol60Parser.DIGIT = 56;
    algol60Parser.ARITHMETIC_OPERATOR = 57;
    algol60Parser.RELATIONAL_OPERATOR = 58;
    algol60Parser.LOGICAL_OPERATOR = 59;
    algol60Parser.SEQUENTIAL_OPERATOR = 60;
    algol60Parser.SEPARATOR = 61;
    algol60Parser.DECLARATOR = 62;
    algol60Parser.WS = 63;
    algol60Parser.RULE_program = 0;
    algol60Parser.RULE_block = 1;
    algol60Parser.RULE_block_head = 2;
    algol60Parser.RULE_compound_statement = 3;
    algol60Parser.RULE_compound_tail = 4;
    algol60Parser.RULE_declaration = 5;
    algol60Parser.RULE_type_declaration = 6;
    algol60Parser.RULE_local_or_own_type = 7;
    algol60Parser.RULE_type = 8;
    algol60Parser.RULE_type_list = 9;
    algol60Parser.RULE_array_declaration = 10;
    algol60Parser.RULE_array_list = 11;
    algol60Parser.RULE_array_segment = 12;
    algol60Parser.RULE_array_identifier = 13;
    algol60Parser.RULE_bound_pair_list = 14;
    algol60Parser.RULE_bound_pair = 15;
    algol60Parser.RULE_upper_bound = 16;
    algol60Parser.RULE_lower_bound = 17;
    algol60Parser.RULE_switch_declaration = 18;
    algol60Parser.RULE_switch_identifier = 19;
    algol60Parser.RULE_switch_list = 20;
    algol60Parser.RULE_procedure_declaration = 21;
    algol60Parser.RULE_procedure_heading = 22;
    algol60Parser.RULE_procedure_identifier = 23;
    algol60Parser.RULE_formal_parameter_part = 24;
    algol60Parser.RULE_formal_parameter_list = 25;
    algol60Parser.RULE_formal_parameter = 26;
    algol60Parser.RULE_value_part = 27;
    algol60Parser.RULE_specification_part = 28;
    algol60Parser.RULE_specifier = 29;
    algol60Parser.RULE_identifier_list = 30;
    algol60Parser.RULE_procedure_body = 31;
    algol60Parser.RULE_statement = 32;
    algol60Parser.RULE_unconditional_statement = 33;
    algol60Parser.RULE_basic_statement = 34;
    algol60Parser.RULE_label = 35;
    algol60Parser.RULE_unlabelled_basic_statement = 36;
    algol60Parser.RULE_assignment_statement = 37;
    algol60Parser.RULE_left_part_list = 38;
    algol60Parser.RULE_left_part = 39;
    algol60Parser.RULE_go_to_statement = 40;
    algol60Parser.RULE_designational_expression = 41;
    algol60Parser.RULE_switch_designator = 42;
    algol60Parser.RULE_procedure_statement = 43;
    algol60Parser.RULE_actual_parameter_part = 44;
    algol60Parser.RULE_actual_parameter_list = 45;
    algol60Parser.RULE_parameter_delimiter = 46;
    algol60Parser.RULE_actual_parameter = 47;
    algol60Parser.RULE_conditional_statement = 48;
    algol60Parser.RULE_if_statement = 49;
    algol60Parser.RULE_if_clause = 50;
    algol60Parser.RULE_for_statement = 51;
    algol60Parser.RULE_for_clause = 52;
    algol60Parser.RULE_for_list = 53;
    algol60Parser.RULE_for_list_element = 54;
    algol60Parser.RULE_arithmetic_expression = 55;
    algol60Parser.RULE_expression = 56;
    algol60Parser.RULE_arithmetic_expression2 = 57;
    algol60Parser.RULE_simple_arithmetic_expression = 58;
    algol60Parser.RULE_adding_operator = 59;
    algol60Parser.RULE_term = 60;
    algol60Parser.RULE_multiplying_operator = 61;
    algol60Parser.RULE_factor = 62;
    algol60Parser.RULE_primary = 63;
    algol60Parser.RULE_unsigned_number = 64;
    algol60Parser.RULE_decimal_number = 65;
    algol60Parser.RULE_unsigned_integer = 66;
    algol60Parser.RULE_decimal_fraction = 67;
    algol60Parser.RULE_exponential_part = 68;
    algol60Parser.RULE_integer = 69;
    algol60Parser.RULE_boolean_expression = 70;
    algol60Parser.RULE_relation = 71;
    algol60Parser.RULE_relational_operator = 72;
    algol60Parser.RULE_function_designator = 73;
    algol60Parser.RULE_variable = 74;
    algol60Parser.RULE_simple_variable = 75;
    algol60Parser.RULE_variable_identifier = 76;
    algol60Parser.RULE_subscripted_variable = 77;
    algol60Parser.RULE_subscript_list = 78;
    algol60Parser.RULE_subscript_expression = 79;
    algol60Parser.RULE_open_string = 80;
    algol60Parser.RULE_proper_string = 81;
    algol60Parser.RULE_letter_string = 82;
    algol60Parser.RULE_identifier = 83;
    algol60Parser.RULE_basic_symbol = 84;
    algol60Parser.RULE_logical_value = 85;
    algol60Parser.RULE_delimiter = 86;
    algol60Parser.RULE_operator = 87;
    algol60Parser.RULE_bracket = 88;
    algol60Parser.RULE_specificator = 89;
    // tslint:disable:no-trailing-whitespace
    algol60Parser.ruleNames = [
        "program", "block", "block_head", "compound_statement", "compound_tail",
        "declaration", "type_declaration", "local_or_own_type", "type", "type_list",
        "array_declaration", "array_list", "array_segment", "array_identifier",
        "bound_pair_list", "bound_pair", "upper_bound", "lower_bound", "switch_declaration",
        "switch_identifier", "switch_list", "procedure_declaration", "procedure_heading",
        "procedure_identifier", "formal_parameter_part", "formal_parameter_list",
        "formal_parameter", "value_part", "specification_part", "specifier", "identifier_list",
        "procedure_body", "statement", "unconditional_statement", "basic_statement",
        "label", "unlabelled_basic_statement", "assignment_statement", "left_part_list",
        "left_part", "go_to_statement", "designational_expression", "switch_designator",
        "procedure_statement", "actual_parameter_part", "actual_parameter_list",
        "parameter_delimiter", "actual_parameter", "conditional_statement", "if_statement",
        "if_clause", "for_statement", "for_clause", "for_list", "for_list_element",
        "arithmetic_expression", "expression", "arithmetic_expression2", "simple_arithmetic_expression",
        "adding_operator", "term", "multiplying_operator", "factor", "primary",
        "unsigned_number", "decimal_number", "unsigned_integer", "decimal_fraction",
        "exponential_part", "integer", "boolean_expression", "relation", "relational_operator",
        "function_designator", "variable", "simple_variable", "variable_identifier",
        "subscripted_variable", "subscript_list", "subscript_expression", "open_string",
        "proper_string", "letter_string", "identifier", "basic_symbol", "logical_value",
        "delimiter", "operator", "bracket", "specificator",
    ];
    algol60Parser._LITERAL_NAMES = [
        undefined, "':'", "'begin'", "';'", "'end'", "'own'", "'real'", "'integer'",
        "'boolean'", "','", "'array'", "'switch'", "':='", "'procedure'", "'('",
        "')'", "'value'", "'label'", "'goto'", "'else'", "'if'", "'then'", "'for'",
        "'do'", "'step'", "'until'", "'while'", "'+'", "' \u2013'", "'\u00D7'",
        "'/'", "'\u00F7'", "'\u2191'", "'.'", "'10'", "'\u2013'", "'\u2263'",
        "'\u2283'", "'\u22C1'", "'\u22C0'", "'\u00AC'", "'<'", "'\u2264'", "'='",
        "'\u2260'", "'>'", "'\u2265'", "'['", "']'", "'true'", "'false'", "'`'",
        "'''", "'string'",
    ];
    algol60Parser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, "STRING", "LETTER",
        "DIGIT", "ARITHMETIC_OPERATOR", "RELATIONAL_OPERATOR", "LOGICAL_OPERATOR",
        "SEQUENTIAL_OPERATOR", "SEPARATOR", "DECLARATOR", "WS",
    ];
    algol60Parser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(algol60Parser._LITERAL_NAMES, algol60Parser._SYMBOLIC_NAMES, []);
    algol60Parser._serializedATNSegments = 2;
    algol60Parser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03A\u02E3\x04\x02" +
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
        "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
        "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
        "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x03\x02\x03\x02\x05\x02\xB9\n\x02\x03\x02" +
        "\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03\xC0\n\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x04\x03\x04\x03\x04\x03\x04\x06\x04\xC9\n\x04\r\x04\x0E\x04\xCA" +
        "\x03\x05\x03\x05\x03\x05\x05\x05\xD0\n\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x06\x03\x06\x03\x06\x07\x06\xD8\n\x06\f\x06\x0E\x06\xDB\v\x06\x03\x06" +
        "\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xE4\n\x07\x03" +
        "\b\x03\b\x03\b\x03\t\x05\t\xEA\n\t\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v" +
        "\x03\v\x07\v\xF3\n\v\f\v\x0E\v\xF6\v\v\x03\f\x05\f\xF9\n\f\x03\f\x03\f" +
        "\x03\f\x03\r\x03\r\x03\r\x07\r\u0101\n\r\f\r\x0E\r\u0104\v\r\x03\x0E\x03" +
        "\x0E\x03\x0E\x07\x0E\u0109\n\x0E\f\x0E\x0E\x0E\u010C\v\x0E\x03\x0E\x03" +
        "\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x07\x10\u0116\n\x10" +
        "\f\x10\x0E\x10\u0119\v\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03" +
        "\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03" +
        "\x15\x03\x16\x03\x16\x03\x16\x07\x16\u012D\n\x16\f\x16\x0E\x16\u0130\v" +
        "\x16\x03\x17\x05\x17\u0133\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18" +
        "\x03\x18\x05\x18\u013B\n\x18\x03\x18\x03\x18\x05\x18\u013F\n\x18\x03\x18" +
        "\x05\x18\u0142\n\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03" +
        "\x1B\x03\x1B\x03\x1B\x07\x1B\u014D\n\x1B\f\x1B\x0E\x1B\u0150\v\x1B\x03" +
        "\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03" +
        "\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u0160\n\x1E\f\x1E\x0E\x1E" +
        "\u0163\v\x1E\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0168\n\x1F\x03\x1F\x03\x1F" +
        "\x03\x1F\x03\x1F\x05\x1F\u016E\n\x1F\x03\x1F\x05\x1F\u0171\n\x1F\x03 " +
        "\x03 \x03 \x07 \u0176\n \f \x0E \u0179\v \x03!\x03!\x03\"\x03\"\x03\"" +
        "\x05\"\u0180\n\"\x03#\x03#\x03#\x05#\u0185\n#\x03$\x03$\x03$\x07$\u018A" +
        "\n$\f$\x0E$\u018D\v$\x03$\x05$\u0190\n$\x03%\x03%\x05%\u0194\n%\x03&\x03" +
        "&\x03&\x05&\u0199\n&\x03\'\x03\'\x03\'\x05\'\u019E\n\'\x03(\x06(\u01A1" +
        "\n(\r(\x0E(\u01A2\x03)\x03)\x05)\u01A7\n)\x03)\x03)\x03*\x03*\x03*\x03" +
        "+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u01B5\n+\x03,\x03,\x05,\u01B9\n," +
        "\x03-\x03-\x05-\u01BD\n-\x03.\x03.\x03/\x03/\x03/\x03/\x07/\u01C5\n/\f" +
        "/\x0E/\u01C8\v/\x030\x030\x030\x030\x030\x030\x050\u01D0\n0\x031\x031" +
        "\x031\x031\x031\x051\u01D7\n1\x032\x032\x032\x072\u01DC\n2\f2\x0E2\u01DF" +
        "\v2\x032\x032\x032\x052\u01E4\n2\x032\x032\x032\x052\u01E9\n2\x033\x03" +
        "3\x033\x034\x034\x034\x034\x035\x035\x035\x075\u01F5\n5\f5\x0E5\u01F8" +
        "\v5\x035\x035\x035\x036\x036\x036\x036\x036\x036\x037\x037\x037\x077\u0206" +
        "\n7\f7\x0E7\u0209\v7\x038\x058\u020C\n8\x039\x039\x039\x039\x039\x039" +
        "\x039\x039\x039\x079\u0217\n9\f9\x0E9\u021A\v9\x03:\x03:\x03:\x05:\u021F" +
        "\n:\x03;\x03;\x03;\x03;\x03;\x03;\x05;\u0227\n;\x03<\x05<\u022A\n<\x03" +
        "<\x03<\x03<\x03<\x07<\u0230\n<\f<\x0E<\u0233\v<\x03=\x03=\x03>\x03>\x03" +
        ">\x03>\x07>\u023B\n>\f>\x0E>\u023E\v>\x03?\x03?\x03@\x03@\x03@\x07@\u0245" +
        "\n@\f@\x0E@\u0248\v@\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u0251\nA" +
        "\x03B\x03B\x03B\x03B\x03B\x05B\u0258\nB\x03C\x03C\x03C\x03C\x03C\x05C" +
        "\u025F\nC\x03D\x06D\u0262\nD\rD\x0ED\u0263\x03E\x03E\x03E\x03F\x03F\x03" +
        "F\x03G\x05G\u026D\nG\x03G\x03G\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03" +
        "H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u0281\nH\x03H\x03H\x03" +
        "H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x07H\u028F\nH\fH\x0EH\u0292" +
        "\vH\x03I\x03I\x03I\x03I\x03J\x03J\x03K\x03K\x03K\x03L\x03L\x05L\u029F" +
        "\nL\x03M\x03M\x03N\x03N\x03O\x03O\x03O\x03O\x03O\x03P\x03P\x03P\x07P\u02AD" +
        "\nP\fP\x0EP\u02B0\vP\x03Q\x03Q\x03R\x05R\u02B5\nR\x03R\x03R\x05R\u02B9" +
        "\nR\x03R\x06R\u02BC\nR\rR\x0ER\u02BD\x03S\x03S\x03T\x06T\u02C3\nT\rT\x0E" +
        "T\u02C4\x03U\x03U\x07U\u02C9\nU\fU\x0EU\u02CC\vU\x03V\x03V\x03V\x03V\x05" +
        "V\u02D2\nV\x03W\x03W\x03X\x03X\x03X\x03X\x03X\x05X\u02DB\nX\x03Y\x03Y" +
        "\x03Z\x03Z\x03[\x03[\x03[\x02\x02\x04p\x8E\\\x02\x02\x04\x02\x06\x02\b" +
        "\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
        "\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x02" +
        "6\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
        "R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
        "n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02" +
        "\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02" +
        "\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02" +
        "\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\x02\f\x03\x02\b\n\x03" +
        "\x02\x1D\x1E\x03\x02\x1F!\x04\x02\x1D\x1D%%\x03\x02+0\x03\x029:\x03\x02" +
        "34\x03\x02;>\x07\x02\x04\x04\x06\x06\x10\x111256\x04\x02\x12\x1377\x02" +
        "\u02EA\x02\xB8\x03\x02\x02\x02\x04\xBF\x03\x02\x02\x02\x06\xC4\x03\x02" +
        "\x02\x02\b\xCF\x03\x02\x02\x02\n\xD9\x03\x02\x02\x02\f\xE3\x03\x02\x02" +
        "\x02\x0E\xE5\x03\x02\x02\x02\x10\xE9\x03\x02\x02\x02\x12\xED\x03\x02\x02" +
        "\x02\x14\xEF\x03\x02\x02\x02\x16\xF8\x03\x02\x02\x02\x18\xFD\x03\x02\x02" +
        "\x02\x1A\u010A\x03\x02\x02\x02\x1C\u0110\x03\x02\x02\x02\x1E\u0112\x03" +
        "\x02\x02\x02 \u011A\x03\x02\x02\x02\"\u011E\x03\x02\x02\x02$\u0120\x03" +
        "\x02\x02\x02&\u0122\x03\x02\x02\x02(\u0127\x03\x02\x02\x02*\u0129\x03" +
        "\x02\x02\x02,\u0132\x03\x02\x02\x02.\u0138\x03\x02\x02\x020\u0143\x03" +
        "\x02\x02\x022\u0145\x03\x02\x02\x024\u0147\x03\x02\x02\x026\u0153\x03" +
        "\x02\x02\x028\u0155\x03\x02\x02\x02:\u0159\x03\x02\x02\x02<\u0170\x03" +
        "\x02\x02\x02>\u0172\x03\x02\x02\x02@\u017A\x03\x02\x02\x02B\u017F\x03" +
        "\x02\x02\x02D\u0184\x03\x02\x02\x02F\u018B\x03\x02\x02\x02H\u0193\x03" +
        "\x02\x02\x02J\u0198\x03\x02\x02\x02L\u019A\x03\x02\x02\x02N\u01A0\x03" +
        "\x02\x02\x02P\u01A6\x03\x02\x02\x02R\u01AA\x03\x02\x02\x02T\u01B4\x03" +
        "\x02\x02\x02V\u01B6\x03\x02\x02\x02X\u01BA\x03\x02\x02\x02Z\u01BE\x03" +
        "\x02\x02\x02\\\u01C0\x03\x02\x02\x02^\u01CF\x03\x02\x02\x02`\u01D6\x03" +
        "\x02\x02\x02b\u01DD\x03\x02\x02\x02d\u01EA\x03\x02\x02\x02f\u01ED\x03" +
        "\x02\x02\x02h\u01F6\x03\x02\x02\x02j\u01FC\x03\x02\x02\x02l\u0202\x03" +
        "\x02\x02\x02n\u020B\x03\x02\x02\x02p\u020D\x03\x02\x02\x02r\u021E\x03" +
        "\x02\x02\x02t\u0226\x03\x02\x02\x02v\u0229\x03\x02\x02\x02x\u0234\x03" +
        "\x02\x02\x02z\u0236\x03\x02\x02\x02|\u023F\x03\x02\x02\x02~\u0241\x03" +
        "\x02\x02\x02\x80\u0250\x03\x02\x02\x02\x82\u0257\x03\x02\x02\x02\x84\u025E" +
        "\x03\x02\x02\x02\x86\u0261\x03\x02\x02\x02\x88\u0265\x03\x02\x02\x02\x8A" +
        "\u0268\x03\x02\x02\x02\x8C\u026C\x03\x02\x02\x02\x8E\u0280\x03\x02\x02" +
        "\x02\x90\u0293\x03\x02\x02\x02\x92\u0297\x03\x02\x02\x02\x94\u0299\x03" +
        "\x02\x02\x02\x96\u029E\x03\x02\x02\x02\x98\u02A0\x03\x02\x02\x02\x9A\u02A2" +
        "\x03\x02\x02\x02\x9C\u02A4\x03\x02\x02\x02\x9E\u02A9\x03\x02\x02\x02\xA0" +
        "\u02B1\x03\x02\x02\x02\xA2\u02B4\x03\x02\x02\x02\xA4\u02BF\x03\x02\x02" +
        "\x02\xA6\u02C2\x03\x02\x02\x02\xA8\u02C6\x03\x02\x02\x02\xAA\u02D1\x03" +
        "\x02\x02\x02\xAC\u02D3\x03\x02\x02\x02\xAE\u02DA\x03\x02\x02\x02\xB0\u02DC" +
        "\x03\x02\x02\x02\xB2\u02DE\x03\x02\x02\x02\xB4\u02E0\x03\x02\x02\x02\xB6" +
        "\xB9\x05\x04\x03\x02\xB7\xB9\x05\b\x05\x02\xB8\xB6\x03\x02\x02\x02\xB8" +
        "\xB7\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBB\x07\x02\x02\x03\xBB" +
        "\x03\x03\x02\x02\x02\xBC\xBD\x05H%\x02\xBD\xBE\x07\x03\x02\x02\xBE\xC0" +
        "\x03\x02\x02\x02\xBF\xBC\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC1" +
        "\x03\x02\x02\x02\xC1\xC2\x05\x06\x04\x02\xC2\xC3\x05\n\x06\x02\xC3\x05" +
        "\x03\x02\x02\x02\xC4\xC8\x07\x04\x02\x02\xC5\xC6\x05\f\x07\x02\xC6\xC7" +
        "\x07\x05\x02\x02\xC7\xC9\x03\x02\x02\x02\xC8\xC5\x03\x02\x02\x02\xC9\xCA" +
        "\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\x07" +
        "\x03\x02\x02\x02\xCC\xCD\x05H%\x02\xCD\xCE\x07\x03\x02\x02\xCE\xD0\x03" +
        "\x02\x02\x02\xCF\xCC\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD1\x03" +
        "\x02\x02\x02\xD1\xD2\x07\x04\x02\x02\xD2\xD3\x05\n\x06\x02\xD3\t\x03\x02" +
        "\x02\x02\xD4\xD5\x05B\"\x02\xD5\xD6\x07\x05\x02\x02\xD6\xD8\x03\x02\x02" +
        "\x02\xD7\xD4\x03\x02\x02\x02\xD8\xDB\x03\x02\x02\x02\xD9\xD7\x03\x02\x02" +
        "\x02\xD9\xDA\x03\x02\x02\x02\xDA\xDC\x03\x02\x02\x02\xDB\xD9\x03\x02\x02" +
        "\x02\xDC\xDD\x05B\"\x02\xDD\xDE\x07\x06\x02\x02\xDE\v\x03\x02\x02\x02" +
        "\xDF\xE4\x05\x0E\b\x02\xE0\xE4\x05\x16\f\x02\xE1\xE4\x05&\x14\x02\xE2" +
        "\xE4\x05,\x17\x02\xE3\xDF\x03\x02\x02\x02\xE3\xE0\x03\x02\x02\x02\xE3" +
        "\xE1\x03\x02\x02\x02\xE3\xE2\x03\x02\x02\x02\xE4\r\x03\x02\x02\x02\xE5" +
        "\xE6\x05\x10\t\x02\xE6\xE7\x05\x14\v\x02\xE7\x0F\x03\x02\x02\x02\xE8\xEA" +
        "\x07\x07\x02\x02\xE9\xE8\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xEB" +
        "\x03\x02\x02\x02\xEB\xEC\x05\x12\n\x02\xEC\x11\x03\x02\x02\x02\xED\xEE" +
        "\t\x02\x02\x02\xEE\x13\x03\x02\x02\x02\xEF\xF4\x05\x98M\x02\xF0\xF1\x07" +
        "\v\x02\x02\xF1\xF3\x05\x98M\x02\xF2\xF0\x03\x02\x02\x02\xF3\xF6\x03\x02" +
        "\x02\x02\xF4\xF2\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\x15\x03\x02" +
        "\x02\x02\xF6\xF4\x03\x02\x02\x02\xF7\xF9\x05\x10\t\x02\xF8\xF7\x03\x02" +
        "\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFB\x07\f" +
        "\x02\x02\xFB\xFC\x05\x18\r\x02\xFC\x17\x03\x02\x02\x02\xFD\u0102\x05\x1A" +
        "\x0E\x02\xFE\xFF\x07\v\x02\x02\xFF\u0101\x05\x1A\x0E\x02\u0100\xFE\x03" +
        "\x02\x02\x02\u0101\u0104\x03\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0102" +
        "\u0103\x03\x02\x02\x02\u0103\x19\x03\x02\x02\x02\u0104\u0102\x03\x02\x02" +
        "\x02\u0105\u0106\x05\x1C\x0F\x02\u0106\u0107\x07\v\x02\x02\u0107\u0109" +
        "\x03\x02\x02\x02\u0108\u0105\x03\x02\x02\x02\u0109\u010C\x03\x02\x02\x02" +
        "\u010A\u0108\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B\u010D\x03" +
        "\x02\x02\x02\u010C\u010A\x03\x02\x02\x02\u010D\u010E\x05\x1C\x0F\x02\u010E" +
        "\u010F\x05\x1E\x10\x02\u010F\x1B\x03\x02\x02\x02\u0110\u0111\x05\xA8U" +
        "\x02\u0111\x1D\x03\x02\x02\x02\u0112\u0117\x05 \x11\x02\u0113\u0114\x07" +
        "\v\x02\x02\u0114\u0116\x05 \x11\x02\u0115\u0113\x03\x02\x02\x02\u0116" +
        "\u0119\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02\u0117\u0118\x03\x02" +
        "\x02\x02\u0118\x1F\x03\x02\x02\x02\u0119\u0117\x03\x02\x02\x02\u011A\u011B" +
        "\x05$\x13\x02\u011B\u011C\x07\x03\x02\x02\u011C\u011D\x05\"\x12\x02\u011D" +
        "!\x03\x02\x02\x02\u011E\u011F\x05p9\x02\u011F#\x03\x02\x02\x02\u0120\u0121" +
        "\x05p9\x02\u0121%\x03\x02\x02\x02\u0122\u0123\x07\r\x02\x02\u0123\u0124" +
        "\x05(\x15\x02\u0124\u0125\x07\x0E\x02\x02\u0125\u0126\x05*\x16\x02\u0126" +
        "\'\x03\x02\x02\x02\u0127\u0128\x05\xA8U\x02\u0128)\x03\x02\x02\x02\u0129" +
        "\u012E\x05T+\x02\u012A\u012B\x07\v\x02\x02\u012B\u012D\x05T+\x02\u012C" +
        "\u012A\x03\x02\x02\x02\u012D\u0130\x03\x02\x02\x02\u012E\u012C\x03\x02" +
        "\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F+\x03\x02\x02\x02\u0130\u012E" +
        "\x03\x02\x02\x02\u0131\u0133\x05\x12\n\x02\u0132\u0131\x03\x02\x02\x02" +
        "\u0132\u0133\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0135\x07" +
        "\x0F\x02\x02\u0135\u0136\x05.\x18\x02\u0136\u0137\x05@!\x02\u0137-\x03" +
        "\x02\x02\x02\u0138\u013A\x050\x19\x02\u0139\u013B\x052\x1A\x02\u013A\u0139" +
        "\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02" +
        "\u013C\u013E\x07\x05\x02\x02\u013D\u013F\x058\x1D\x02\u013E\u013D\x03" +
        "\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F\u0141\x03\x02\x02\x02\u0140" +
        "\u0142\x05:\x1E\x02\u0141\u0140\x03\x02\x02\x02\u0141\u0142\x03\x02\x02" +
        "\x02\u0142/\x03\x02\x02\x02\u0143\u0144\x05\xA8U\x02\u01441\x03\x02\x02" +
        "\x02\u0145\u0146\x054\x1B\x02\u01463\x03\x02\x02\x02\u0147\u0148\x07\x10" +
        "\x02\x02\u0148\u014E\x056\x1C\x02\u0149\u014A\x05^0\x02\u014A\u014B\x05" +
        "6\x1C\x02\u014B\u014D\x03\x02\x02\x02\u014C\u0149\x03\x02\x02\x02\u014D" +
        "\u0150\x03\x02\x02\x02\u014E\u014C\x03\x02\x02\x02\u014E\u014F\x03\x02" +
        "\x02\x02\u014F\u0151\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0151" +
        "\u0152\x07\x11\x02\x02\u01525\x03\x02\x02\x02\u0153\u0154\x05\xA8U\x02" +
        "\u01547\x03\x02\x02\x02\u0155\u0156\x07\x12\x02\x02\u0156\u0157\x05> " +
        "\x02\u0157\u0158\x07\x05\x02\x02\u01589\x03\x02\x02\x02\u0159\u015A\x05" +
        "<\x1F\x02\u015A\u0161\x05> \x02\u015B\u015C\x07\x05\x02\x02\u015C\u015D" +
        "\x05<\x1F\x02\u015D\u015E\x05> \x02\u015E\u0160\x03\x02\x02\x02\u015F" +
        "\u015B\x03\x02\x02\x02\u0160\u0163\x03\x02\x02\x02\u0161\u015F\x03\x02" +
        "\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162;\x03\x02\x02\x02\u0163\u0161" +
        "\x03\x02\x02\x02\u0164\u0171\x078\x02\x02\u0165\u0171\x05\x12\n\x02\u0166" +
        "\u0168\x05\x12\n\x02\u0167\u0166\x03\x02\x02\x02\u0167\u0168\x03\x02\x02" +
        "\x02\u0168\u0169\x03\x02\x02\x02\u0169\u0171\x07\f\x02\x02\u016A\u0171" +
        "\x07\x13\x02\x02\u016B\u0171\x07\r\x02\x02\u016C\u016E\x05\x12\n\x02\u016D" +
        "\u016C\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E\u016F\x03\x02" +
        "\x02\x02\u016F\u0171\x07\x0F\x02\x02\u0170\u0164\x03\x02\x02\x02\u0170" +
        "\u0165\x03\x02\x02\x02\u0170\u0167\x03\x02\x02\x02\u0170\u016A\x03\x02" +
        "\x02\x02\u0170\u016B\x03\x02\x02\x02\u0170\u016D\x03\x02\x02\x02\u0171" +
        "=\x03\x02\x02\x02\u0172\u0177\x05\xA8U\x02\u0173\u0174\x07\v\x02\x02\u0174" +
        "\u0176\x05\xA8U\x02\u0175\u0173\x03\x02\x02\x02\u0176\u0179\x03\x02\x02" +
        "\x02\u0177\u0175\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178?\x03" +
        "\x02\x02\x02\u0179\u0177\x03\x02\x02\x02\u017A\u017B\x05B\"\x02\u017B" +
        "A\x03\x02\x02\x02\u017C\u0180\x05D#\x02\u017D\u0180\x05b2\x02\u017E\u0180" +
        "\x05h5\x02\u017F\u017C\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02\u017F" +
        "\u017E\x03\x02\x02\x02\u0180C\x03\x02\x02\x02\u0181\u0185\x05F$\x02\u0182" +
        "\u0185\x05\b\x05\x02\u0183\u0185\x05\x04\x03\x02\u0184\u0181\x03\x02\x02" +
        "\x02\u0184\u0182\x03\x02\x02\x02\u0184\u0183\x03\x02\x02\x02\u0185E\x03" +
        "\x02\x02\x02\u0186\u0187\x05H%\x02\u0187\u0188\x07\x03\x02\x02\u0188\u018A" +
        "\x03\x02\x02\x02\u0189\u0186\x03\x02\x02\x02\u018A\u018D\x03\x02\x02\x02" +
        "\u018B\u0189\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\u018F\x03" +
        "\x02\x02\x02\u018D\u018B\x03\x02\x02\x02\u018E\u0190\x05J&\x02\u018F\u018E" +
        "\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190G\x03\x02\x02\x02\u0191" +
        "\u0194\x05\xA8U\x02\u0192\u0194\x05\x86D\x02\u0193\u0191\x03\x02\x02\x02" +
        "\u0193\u0192\x03\x02\x02\x02\u0194I\x03\x02\x02\x02\u0195\u0199\x05L\'" +
        "\x02\u0196\u0199\x05R*\x02\u0197\u0199\x05X-\x02\u0198\u0195\x03\x02\x02" +
        "\x02\u0198\u0196\x03\x02\x02\x02\u0198\u0197\x03\x02\x02\x02\u0199K\x03" +
        "\x02\x02\x02\u019A\u019D\x05N(\x02\u019B\u019E\x05p9\x02\u019C\u019E\x05" +
        "\x8EH\x02\u019D\u019B\x03\x02\x02\x02\u019D\u019C\x03\x02\x02\x02\u019E" +
        "M\x03\x02\x02\x02\u019F\u01A1\x05P)\x02\u01A0\u019F\x03\x02\x02\x02\u01A1" +
        "\u01A2\x03\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A2\u01A3\x03\x02" +
        "\x02\x02\u01A3O\x03\x02\x02\x02\u01A4\u01A7\x05\x96L\x02\u01A5\u01A7\x05" +
        "0\x19\x02\u01A6\u01A4\x03\x02\x02\x02\u01A6\u01A5\x03\x02\x02\x02\u01A7" +
        "\u01A8\x03\x02\x02\x02\u01A8\u01A9\x07\x0E\x02\x02\u01A9Q\x03\x02\x02" +
        "\x02\u01AA\u01AB\x07\x14\x02\x02\u01AB\u01AC\x05T+\x02\u01ACS\x03\x02" +
        "\x02\x02\u01AD\u01B5\x05H%\x02\u01AE\u01B5\x05V,\x02\u01AF\u01B0\x05f" +
        "4\x02\u01B0\u01B1\x05T+\x02\u01B1\u01B2\x07\x15\x02\x02\u01B2\u01B3\x05" +
        "T+\x02\u01B3\u01B5\x03\x02\x02\x02\u01B4\u01AD\x03\x02\x02\x02\u01B4\u01AE" +
        "\x03\x02\x02\x02\u01B4\u01AF\x03\x02\x02\x02\u01B5U\x03\x02\x02\x02\u01B6" +
        "\u01B8\x05(\x15\x02\u01B7\u01B9\x05\xA0Q\x02\u01B8\u01B7\x03\x02\x02\x02" +
        "\u01B8\u01B9\x03\x02\x02\x02\u01B9W\x03\x02\x02\x02\u01BA\u01BC\x050\x19" +
        "\x02\u01BB\u01BD\x05Z.\x02\u01BC\u01BB\x03\x02\x02\x02\u01BC\u01BD\x03" +
        "\x02\x02\x02\u01BDY\x03\x02\x02\x02\u01BE\u01BF\x05\\/\x02\u01BF[\x03" +
        "\x02\x02\x02\u01C0\u01C6\x05`1\x02\u01C1\u01C2\x05^0\x02\u01C2\u01C3\x05" +
        "`1\x02\u01C3\u01C5\x03\x02\x02\x02\u01C4\u01C1\x03\x02\x02\x02\u01C5\u01C8" +
        "\x03\x02\x02\x02\u01C6\u01C4\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02" +
        "\u01C7]\x03\x02\x02\x02\u01C8\u01C6\x03\x02\x02\x02\u01C9\u01D0\x07\v" +
        "\x02\x02\u01CA\u01CB\x07\x11\x02\x02\u01CB\u01CC\x05\xA6T\x02\u01CC\u01CD" +
        "\x07\x03\x02\x02\u01CD\u01CE\x07\x10\x02\x02\u01CE\u01D0\x03\x02\x02\x02" +
        "\u01CF\u01C9\x03\x02\x02\x02\u01CF\u01CA\x03\x02\x02\x02\u01D0_\x03\x02" +
        "\x02\x02\u01D1\u01D7\x078\x02\x02\u01D2\u01D7\x05r:\x02\u01D3\u01D7\x05" +
        "\x1C\x0F\x02\u01D4\u01D7\x05(\x15\x02\u01D5\u01D7\x050\x19\x02\u01D6\u01D1" +
        "\x03\x02\x02\x02\u01D6\u01D2\x03\x02\x02\x02\u01D6\u01D3\x03\x02\x02\x02" +
        "\u01D6\u01D4\x03\x02\x02\x02\u01D6\u01D5\x03\x02\x02\x02\u01D7a\x03\x02" +
        "\x02\x02\u01D8\u01D9\x05H%\x02\u01D9\u01DA\x07\x03\x02\x02\u01DA\u01DC" +
        "\x03\x02\x02\x02\u01DB\u01D8\x03\x02\x02\x02\u01DC\u01DF\x03\x02\x02\x02" +
        "\u01DD\u01DB\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01E8\x03" +
        "\x02\x02\x02\u01DF\u01DD\x03\x02\x02\x02\u01E0\u01E3\x05d3\x02\u01E1\u01E2" +
        "\x07\x15\x02\x02\u01E2\u01E4\x05B\"\x02\u01E3\u01E1\x03\x02\x02\x02\u01E3" +
        "\u01E4\x03\x02\x02\x02\u01E4\u01E9\x03\x02\x02\x02\u01E5\u01E6\x05f4\x02" +
        "\u01E6\u01E7\x05h5\x02\u01E7\u01E9\x03\x02\x02\x02\u01E8\u01E0\x03\x02" +
        "\x02\x02\u01E8\u01E5\x03\x02\x02\x02\u01E9c\x03\x02\x02\x02\u01EA\u01EB" +
        "\x05f4\x02\u01EB\u01EC\x05D#\x02\u01ECe\x03\x02\x02\x02\u01ED\u01EE\x07" +
        "\x16\x02\x02\u01EE\u01EF\x05\x8EH\x02\u01EF\u01F0\x07\x17\x02\x02\u01F0" +
        "g\x03\x02\x02\x02\u01F1\u01F2\x05H%\x02\u01F2\u01F3\x07\x03\x02\x02\u01F3" +
        "\u01F5\x03\x02\x02\x02\u01F4\u01F1\x03\x02\x02\x02\u01F5\u01F8\x03\x02" +
        "\x02\x02\u01F6\u01F4\x03\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7" +
        "\u01F9\x03\x02\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F9\u01FA\x05j6\x02" +
        "\u01FA\u01FB\x05B\"\x02\u01FBi\x03\x02\x02\x02\u01FC\u01FD\x07\x18\x02" +
        "\x02\u01FD\u01FE\x05\x96L\x02\u01FE\u01FF\x07\x0E\x02\x02\u01FF\u0200" +
        "\x05l7\x02\u0200\u0201\x07\x19\x02\x02\u0201k\x03\x02\x02\x02\u0202\u0207" +
        "\x05n8\x02\u0203\u0204\x07\v\x02\x02\u0204\u0206\x05n8\x02\u0205\u0203" +
        "\x03\x02\x02\x02\u0206\u0209\x03\x02\x02\x02\u0207\u0205\x03\x02\x02\x02" +
        "\u0207\u0208\x03\x02\x02\x02\u0208m\x03\x02\x02\x02\u0209\u0207\x03\x02" +
        "\x02\x02\u020A\u020C\x05p9\x02\u020B\u020A\x03\x02\x02\x02\u020B\u020C" +
        "\x03\x02\x02\x02\u020Co\x03\x02\x02\x02\u020D\u020E\b9\x01\x02\u020E\u020F" +
        "\x07\x1A\x02\x02\u020F\u0210\x05p9\x02\u0210\u0211\x07\x1B\x02\x02\u0211" +
        "\u0212\x05p9\x04\u0212\u0218\x03\x02\x02\x02\u0213\u0214\f\x03\x02\x02" +
        "\u0214\u0215\x07\x1C\x02\x02\u0215\u0217\x05\x8EH\x02\u0216\u0213\x03" +
        "\x02\x02\x02\u0217\u021A\x03\x02\x02\x02\u0218\u0216\x03\x02\x02\x02\u0218" +
        "\u0219\x03\x02\x02\x02\u0219q\x03\x02\x02\x02\u021A\u0218\x03\x02\x02" +
        "\x02\u021B\u021F\x05p9\x02\u021C\u021F\x05\x8EH\x02\u021D\u021F\x05T+" +
        "\x02\u021E\u021B\x03\x02\x02\x02\u021E\u021C\x03\x02\x02\x02\u021E\u021D" +
        "\x03\x02\x02\x02\u021Fs\x03\x02\x02\x02\u0220\u0227\x05v<\x02\u0221\u0222" +
        "\x05f4\x02\u0222\u0223\x05v<\x02\u0223\u0224\x07\x15\x02\x02\u0224\u0225" +
        "\x05p9\x02\u0225\u0227\x03\x02\x02\x02\u0226\u0220\x03\x02\x02\x02\u0226" +
        "\u0221\x03\x02\x02\x02\u0227u\x03\x02\x02\x02\u0228\u022A\x05x=\x02\u0229" +
        "\u0228\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A\u022B\x03\x02" +
        "\x02\x02\u022B\u0231\x05z>\x02\u022C\u022D\x05x=\x02\u022D\u022E\x05z" +
        ">\x02\u022E\u0230\x03\x02\x02\x02\u022F\u022C\x03\x02\x02";
    algol60Parser._serializedATNSegment1 = "\x02\u0230\u0233\x03\x02\x02\x02\u0231\u022F\x03\x02\x02\x02\u0231\u0232" +
        "\x03\x02\x02\x02\u0232w\x03\x02\x02\x02\u0233\u0231\x03\x02\x02\x02\u0234" +
        "\u0235\t\x03\x02\x02\u0235y\x03\x02\x02\x02\u0236\u023C\x05~@\x02\u0237" +
        "\u0238\x05|?\x02\u0238\u0239\x05~@\x02\u0239\u023B\x03\x02\x02\x02\u023A" +
        "\u0237\x03\x02\x02\x02\u023B\u023E\x03\x02\x02\x02\u023C\u023A\x03\x02" +
        "\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D{\x03\x02\x02\x02\u023E\u023C" +
        "\x03\x02\x02\x02\u023F\u0240\t\x04\x02\x02\u0240}\x03\x02\x02\x02\u0241" +
        "\u0246\x05\x80A\x02\u0242\u0243\x07\"\x02\x02\u0243\u0245\x05\x80A\x02" +
        "\u0244\u0242\x03\x02\x02\x02\u0245\u0248\x03\x02\x02\x02\u0246\u0244\x03" +
        "\x02\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247\x7F\x03\x02\x02\x02\u0248" +
        "\u0246\x03\x02\x02\x02\u0249\u0251\x05\x82B\x02\u024A\u0251\x05\x96L\x02" +
        "\u024B\u0251\x05\x94K\x02\u024C\u024D\x07\x10\x02\x02\u024D\u024E\x05" +
        "p9\x02\u024E\u024F\x07\x11\x02\x02\u024F\u0251\x03\x02\x02\x02\u0250\u0249" +
        "\x03\x02\x02\x02\u0250\u024A\x03\x02\x02\x02\u0250\u024B\x03\x02\x02\x02" +
        "\u0250\u024C\x03\x02\x02\x02\u0251\x81\x03\x02\x02\x02\u0252\u0258\x05" +
        "\x84C\x02\u0253\u0258\x05\x8AF\x02\u0254\u0255\x05\x84C\x02\u0255\u0256" +
        "\x05\x8AF\x02\u0256\u0258\x03\x02\x02\x02\u0257\u0252\x03\x02\x02\x02" +
        "\u0257\u0253\x03\x02\x02\x02\u0257\u0254\x03\x02\x02\x02\u0258\x83\x03" +
        "\x02\x02\x02\u0259\u025F\x05\x86D\x02\u025A\u025F\x05\x88E\x02\u025B\u025C" +
        "\x05\x86D\x02\u025C\u025D\x05\x88E\x02\u025D\u025F\x03\x02\x02\x02\u025E" +
        "\u0259\x03\x02\x02\x02\u025E\u025A\x03\x02\x02\x02\u025E\u025B\x03\x02" +
        "\x02\x02\u025F\x85\x03\x02\x02\x02\u0260\u0262\x07:\x02\x02\u0261\u0260" +
        "\x03\x02\x02\x02\u0262\u0263\x03\x02\x02\x02\u0263\u0261\x03\x02\x02\x02" +
        "\u0263\u0264\x03\x02\x02\x02\u0264\x87\x03\x02\x02\x02\u0265\u0266\x07" +
        "#\x02\x02\u0266\u0267\x05\x86D\x02\u0267\x89\x03\x02\x02\x02\u0268\u0269" +
        "\x07$\x02\x02\u0269\u026A\x05\x8CG\x02\u026A\x8B\x03\x02\x02\x02\u026B" +
        "\u026D\t\x05\x02\x02\u026C\u026B\x03\x02\x02\x02\u026C\u026D\x03\x02\x02" +
        "\x02\u026D\u026E\x03\x02\x02\x02\u026E\u026F\x05\x86D\x02\u026F\x8D\x03" +
        "\x02\x02\x02\u0270\u0271\bH\x01\x02\u0271\u0272\x05f4\x02\u0272\u0273" +
        "\x05\x8EH\x02\u0273\u0274\x07\x15\x02\x02\u0274\u0275\x05\x8EH\r\u0275" +
        "\u0281\x03\x02\x02\x02\u0276\u0277\x07*\x02\x02\u0277\u0281\x05\x8EH\b" +
        "\u0278\u0281\x05\xACW\x02\u0279\u0281\x05\x96L\x02\u027A\u0281\x05\x94" +
        "K\x02\u027B\u0281\x05\x90I\x02\u027C\u027D\x07\x10\x02\x02\u027D\u027E" +
        "\x05\x8EH\x02\u027E\u027F\x07\x11\x02\x02\u027F\u0281\x03\x02\x02\x02" +
        "\u0280\u0270\x03\x02\x02\x02\u0280\u0276\x03\x02\x02\x02\u0280\u0278\x03" +
        "\x02\x02\x02\u0280\u0279\x03\x02\x02\x02\u0280\u027A\x03\x02\x02\x02\u0280" +
        "\u027B\x03\x02\x02\x02\u0280\u027C\x03\x02\x02\x02\u0281\u0290\x03\x02" +
        "\x02\x02\u0282\u0283\f\f\x02\x02\u0283\u0284\x07&\x02\x02\u0284\u028F" +
        "\x05\x8EH\r\u0285\u0286\f\v\x02\x02\u0286\u0287\x07\'\x02\x02\u0287\u028F" +
        "\x05\x8EH\f\u0288\u0289\f\n\x02\x02\u0289\u028A\x07(\x02\x02\u028A\u028F" +
        "\x05\x8EH\v\u028B\u028C\f\t\x02\x02\u028C\u028D\x07)\x02\x02\u028D\u028F" +
        "\x05\x8EH\n\u028E\u0282\x03\x02\x02\x02\u028E\u0285\x03\x02\x02\x02\u028E" +
        "\u0288\x03\x02\x02\x02\u028E\u028B\x03\x02\x02\x02\u028F\u0292\x03\x02" +
        "\x02\x02\u0290\u028E\x03\x02\x02\x02\u0290\u0291\x03\x02\x02\x02\u0291" +
        "\x8F\x03\x02\x02\x02\u0292\u0290\x03\x02\x02\x02\u0293\u0294\x05v<\x02" +
        "\u0294\u0295\x05\x92J\x02\u0295\u0296\x05v<\x02\u0296\x91\x03\x02\x02" +
        "\x02\u0297\u0298\t\x06\x02\x02\u0298\x93\x03\x02\x02\x02\u0299\u029A\x05" +
        "0\x19\x02\u029A\u029B\x05Z.\x02\u029B\x95\x03\x02\x02\x02\u029C\u029F" +
        "\x05\x98M\x02\u029D\u029F\x05\x9CO\x02\u029E\u029C\x03\x02\x02\x02\u029E" +
        "\u029D\x03\x02\x02\x02\u029F\x97\x03\x02\x02\x02\u02A0\u02A1\x05\x9AN" +
        "\x02\u02A1\x99\x03\x02\x02\x02\u02A2\u02A3\x05\xA8U\x02\u02A3\x9B\x03" +
        "\x02\x02\x02\u02A4\u02A5\x05\x1C\x0F\x02\u02A5\u02A6\x071\x02\x02\u02A6" +
        "\u02A7\x05\x9EP\x02\u02A7\u02A8\x072\x02\x02\u02A8\x9D\x03\x02\x02\x02" +
        "\u02A9\u02AE\x05\xA0Q\x02\u02AA\u02AB\x07\v\x02\x02\u02AB\u02AD\x05\xA0" +
        "Q\x02\u02AC\u02AA\x03\x02\x02\x02\u02AD\u02B0\x03\x02\x02\x02\u02AE\u02AC" +
        "\x03\x02\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF\x9F\x03\x02\x02\x02" +
        "\u02B0\u02AE\x03\x02\x02\x02\u02B1\u02B2\x05p9\x02\u02B2\xA1\x03\x02\x02" +
        "\x02\u02B3\u02B5\x05\xA4S\x02\u02B4\u02B3\x03\x02\x02\x02\u02B4\u02B5" +
        "\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6\u02BB\x078\x02\x02" +
        "\u02B7\u02B9\x05\xA4S\x02\u02B8\u02B7\x03\x02\x02\x02\u02B8\u02B9\x03" +
        "\x02\x02\x02\u02B9\u02BA\x03\x02\x02\x02\u02BA\u02BC\x078\x02\x02\u02BB" +
        "\u02B8\x03\x02\x02\x02\u02BC\u02BD\x03\x02\x02\x02\u02BD\u02BB\x03\x02" +
        "\x02\x02\u02BD\u02BE\x03\x02\x02\x02\u02BE\xA3\x03\x02\x02\x02\u02BF\u02C0" +
        "\x078\x02\x02\u02C0\xA5\x03\x02\x02\x02\u02C1\u02C3\x079\x02\x02\u02C2" +
        "\u02C1\x03\x02\x02\x02\u02C3\u02C4\x03\x02\x02\x02\u02C4\u02C2\x03\x02" +
        "\x02\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5\xA7\x03\x02\x02\x02\u02C6\u02CA" +
        "\x079\x02\x02\u02C7\u02C9\t\x07\x02\x02\u02C8\u02C7\x03\x02\x02\x02\u02C9" +
        "\u02CC\x03\x02\x02\x02\u02CA\u02C8\x03\x02\x02\x02\u02CA\u02CB\x03\x02" +
        "\x02\x02\u02CB\xA9\x03\x02\x02\x02\u02CC\u02CA\x03\x02\x02\x02\u02CD\u02D2" +
        "\x079\x02\x02\u02CE\u02D2\x07:\x02\x02\u02CF\u02D2\x05\xACW\x02\u02D0" +
        "\u02D2\x05\xAEX\x02\u02D1\u02CD\x03\x02\x02\x02\u02D1\u02CE\x03\x02\x02" +
        "\x02\u02D1\u02CF\x03\x02\x02\x02\u02D1\u02D0\x03\x02\x02\x02\u02D2\xAB" +
        "\x03\x02\x02\x02\u02D3\u02D4\t\b\x02\x02\u02D4\xAD\x03\x02\x02\x02\u02D5" +
        "\u02DB\x05\xB0Y\x02\u02D6\u02DB\x07?\x02\x02\u02D7\u02DB\x05\xB2Z\x02" +
        "\u02D8\u02DB\x07@\x02\x02\u02D9\u02DB\x05\xB4[\x02\u02DA\u02D5\x03\x02" +
        "\x02\x02\u02DA\u02D6\x03\x02\x02\x02\u02DA\u02D7\x03\x02\x02\x02\u02DA" +
        "\u02D8\x03\x02\x02\x02\u02DA\u02D9\x03\x02\x02\x02\u02DB\xAF\x03\x02\x02" +
        "\x02\u02DC\u02DD\t\t\x02\x02\u02DD\xB1\x03\x02\x02\x02\u02DE\u02DF\t\n" +
        "\x02\x02\u02DF\xB3\x03\x02\x02\x02\u02E0\u02E1\t\v\x02\x02\u02E1\xB5\x03" +
        "\x02\x02\x02F\xB8\xBF\xCA\xCF\xD9\xE3\xE9\xF4\xF8\u0102\u010A\u0117\u012E" +
        "\u0132\u013A\u013E\u0141\u014E\u0161\u0167\u016D\u0170\u0177\u017F\u0184" +
        "\u018B\u018F\u0193\u0198\u019D\u01A2\u01A6\u01B4\u01B8\u01BC\u01C6\u01CF" +
        "\u01D6\u01DD\u01E3\u01E8\u01F6\u0207\u020B\u0218\u021E\u0226\u0229\u0231" +
        "\u023C\u0246\u0250\u0257\u025E\u0263\u026C\u0280\u028E\u0290\u029E\u02AE" +
        "\u02B4\u02B8\u02BD\u02C4\u02CA\u02D1\u02DA";
    algol60Parser._serializedATN = Utils.join([
        algol60Parser._serializedATNSegment0,
        algol60Parser._serializedATNSegment1,
    ], "");
    return algol60Parser;
}(Parser_1.Parser));
exports.algol60Parser = algol60Parser;
var ProgramContext = /** @class */ (function (_super) {
    __extends(ProgramContext, _super);
    function ProgramContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgramContext.prototype.EOF = function () { return this.getToken(algol60Parser.EOF, 0); };
    ProgramContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    ProgramContext.prototype.compound_statement = function () {
        return this.tryGetRuleContext(0, Compound_statementContext);
    };
    Object.defineProperty(ProgramContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_program; },
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
var BlockContext = /** @class */ (function (_super) {
    __extends(BlockContext, _super);
    function BlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockContext.prototype.block_head = function () {
        return this.getRuleContext(0, Block_headContext);
    };
    BlockContext.prototype.compound_tail = function () {
        return this.getRuleContext(0, Compound_tailContext);
    };
    BlockContext.prototype.label = function () {
        return this.tryGetRuleContext(0, LabelContext);
    };
    Object.defineProperty(BlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_block; },
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
var Block_headContext = /** @class */ (function (_super) {
    __extends(Block_headContext, _super);
    function Block_headContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Block_headContext.prototype.declaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DeclarationContext);
        }
        else {
            return this.getRuleContext(i, DeclarationContext);
        }
    };
    Object.defineProperty(Block_headContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_block_head; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Block_headContext.prototype.enterRule = function (listener) {
        if (listener.enterBlock_head) {
            listener.enterBlock_head(this);
        }
    };
    // @Override
    Block_headContext.prototype.exitRule = function (listener) {
        if (listener.exitBlock_head) {
            listener.exitBlock_head(this);
        }
    };
    // @Override
    Block_headContext.prototype.accept = function (visitor) {
        if (visitor.visitBlock_head) {
            return visitor.visitBlock_head(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Block_headContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Block_headContext = Block_headContext;
var Compound_statementContext = /** @class */ (function (_super) {
    __extends(Compound_statementContext, _super);
    function Compound_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Compound_statementContext.prototype.compound_tail = function () {
        return this.getRuleContext(0, Compound_tailContext);
    };
    Compound_statementContext.prototype.label = function () {
        return this.tryGetRuleContext(0, LabelContext);
    };
    Object.defineProperty(Compound_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_compound_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Compound_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterCompound_statement) {
            listener.enterCompound_statement(this);
        }
    };
    // @Override
    Compound_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitCompound_statement) {
            listener.exitCompound_statement(this);
        }
    };
    // @Override
    Compound_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitCompound_statement) {
            return visitor.visitCompound_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Compound_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Compound_statementContext = Compound_statementContext;
var Compound_tailContext = /** @class */ (function (_super) {
    __extends(Compound_tailContext, _super);
    function Compound_tailContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Compound_tailContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(Compound_tailContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_compound_tail; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Compound_tailContext.prototype.enterRule = function (listener) {
        if (listener.enterCompound_tail) {
            listener.enterCompound_tail(this);
        }
    };
    // @Override
    Compound_tailContext.prototype.exitRule = function (listener) {
        if (listener.exitCompound_tail) {
            listener.exitCompound_tail(this);
        }
    };
    // @Override
    Compound_tailContext.prototype.accept = function (visitor) {
        if (visitor.visitCompound_tail) {
            return visitor.visitCompound_tail(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Compound_tailContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Compound_tailContext = Compound_tailContext;
var DeclarationContext = /** @class */ (function (_super) {
    __extends(DeclarationContext, _super);
    function DeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationContext.prototype.type_declaration = function () {
        return this.tryGetRuleContext(0, Type_declarationContext);
    };
    DeclarationContext.prototype.array_declaration = function () {
        return this.tryGetRuleContext(0, Array_declarationContext);
    };
    DeclarationContext.prototype.switch_declaration = function () {
        return this.tryGetRuleContext(0, Switch_declarationContext);
    };
    DeclarationContext.prototype.procedure_declaration = function () {
        return this.tryGetRuleContext(0, Procedure_declarationContext);
    };
    Object.defineProperty(DeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_declaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterDeclaration) {
            listener.enterDeclaration(this);
        }
    };
    // @Override
    DeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitDeclaration) {
            listener.exitDeclaration(this);
        }
    };
    // @Override
    DeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitDeclaration) {
            return visitor.visitDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeclarationContext = DeclarationContext;
var Type_declarationContext = /** @class */ (function (_super) {
    __extends(Type_declarationContext, _super);
    function Type_declarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Type_declarationContext.prototype.local_or_own_type = function () {
        return this.getRuleContext(0, Local_or_own_typeContext);
    };
    Type_declarationContext.prototype.type_list = function () {
        return this.getRuleContext(0, Type_listContext);
    };
    Object.defineProperty(Type_declarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_type_declaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Type_declarationContext.prototype.enterRule = function (listener) {
        if (listener.enterType_declaration) {
            listener.enterType_declaration(this);
        }
    };
    // @Override
    Type_declarationContext.prototype.exitRule = function (listener) {
        if (listener.exitType_declaration) {
            listener.exitType_declaration(this);
        }
    };
    // @Override
    Type_declarationContext.prototype.accept = function (visitor) {
        if (visitor.visitType_declaration) {
            return visitor.visitType_declaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Type_declarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Type_declarationContext = Type_declarationContext;
var Local_or_own_typeContext = /** @class */ (function (_super) {
    __extends(Local_or_own_typeContext, _super);
    function Local_or_own_typeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Local_or_own_typeContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    Object.defineProperty(Local_or_own_typeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_local_or_own_type; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Local_or_own_typeContext.prototype.enterRule = function (listener) {
        if (listener.enterLocal_or_own_type) {
            listener.enterLocal_or_own_type(this);
        }
    };
    // @Override
    Local_or_own_typeContext.prototype.exitRule = function (listener) {
        if (listener.exitLocal_or_own_type) {
            listener.exitLocal_or_own_type(this);
        }
    };
    // @Override
    Local_or_own_typeContext.prototype.accept = function (visitor) {
        if (visitor.visitLocal_or_own_type) {
            return visitor.visitLocal_or_own_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Local_or_own_typeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Local_or_own_typeContext = Local_or_own_typeContext;
var TypeContext = /** @class */ (function (_super) {
    __extends(TypeContext, _super);
    function TypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(TypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_type; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeContext.prototype.enterRule = function (listener) {
        if (listener.enterType) {
            listener.enterType(this);
        }
    };
    // @Override
    TypeContext.prototype.exitRule = function (listener) {
        if (listener.exitType) {
            listener.exitType(this);
        }
    };
    // @Override
    TypeContext.prototype.accept = function (visitor) {
        if (visitor.visitType) {
            return visitor.visitType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeContext = TypeContext;
var Type_listContext = /** @class */ (function (_super) {
    __extends(Type_listContext, _super);
    function Type_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Type_listContext.prototype.simple_variable = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Simple_variableContext);
        }
        else {
            return this.getRuleContext(i, Simple_variableContext);
        }
    };
    Object.defineProperty(Type_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_type_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Type_listContext.prototype.enterRule = function (listener) {
        if (listener.enterType_list) {
            listener.enterType_list(this);
        }
    };
    // @Override
    Type_listContext.prototype.exitRule = function (listener) {
        if (listener.exitType_list) {
            listener.exitType_list(this);
        }
    };
    // @Override
    Type_listContext.prototype.accept = function (visitor) {
        if (visitor.visitType_list) {
            return visitor.visitType_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Type_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Type_listContext = Type_listContext;
var Array_declarationContext = /** @class */ (function (_super) {
    __extends(Array_declarationContext, _super);
    function Array_declarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Array_declarationContext.prototype.array_list = function () {
        return this.getRuleContext(0, Array_listContext);
    };
    Array_declarationContext.prototype.local_or_own_type = function () {
        return this.tryGetRuleContext(0, Local_or_own_typeContext);
    };
    Object.defineProperty(Array_declarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_array_declaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Array_declarationContext.prototype.enterRule = function (listener) {
        if (listener.enterArray_declaration) {
            listener.enterArray_declaration(this);
        }
    };
    // @Override
    Array_declarationContext.prototype.exitRule = function (listener) {
        if (listener.exitArray_declaration) {
            listener.exitArray_declaration(this);
        }
    };
    // @Override
    Array_declarationContext.prototype.accept = function (visitor) {
        if (visitor.visitArray_declaration) {
            return visitor.visitArray_declaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Array_declarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Array_declarationContext = Array_declarationContext;
var Array_listContext = /** @class */ (function (_super) {
    __extends(Array_listContext, _super);
    function Array_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Array_listContext.prototype.array_segment = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Array_segmentContext);
        }
        else {
            return this.getRuleContext(i, Array_segmentContext);
        }
    };
    Object.defineProperty(Array_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_array_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Array_listContext.prototype.enterRule = function (listener) {
        if (listener.enterArray_list) {
            listener.enterArray_list(this);
        }
    };
    // @Override
    Array_listContext.prototype.exitRule = function (listener) {
        if (listener.exitArray_list) {
            listener.exitArray_list(this);
        }
    };
    // @Override
    Array_listContext.prototype.accept = function (visitor) {
        if (visitor.visitArray_list) {
            return visitor.visitArray_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Array_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Array_listContext = Array_listContext;
var Array_segmentContext = /** @class */ (function (_super) {
    __extends(Array_segmentContext, _super);
    function Array_segmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Array_segmentContext.prototype.array_identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Array_identifierContext);
        }
        else {
            return this.getRuleContext(i, Array_identifierContext);
        }
    };
    Array_segmentContext.prototype.bound_pair_list = function () {
        return this.getRuleContext(0, Bound_pair_listContext);
    };
    Object.defineProperty(Array_segmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_array_segment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Array_segmentContext.prototype.enterRule = function (listener) {
        if (listener.enterArray_segment) {
            listener.enterArray_segment(this);
        }
    };
    // @Override
    Array_segmentContext.prototype.exitRule = function (listener) {
        if (listener.exitArray_segment) {
            listener.exitArray_segment(this);
        }
    };
    // @Override
    Array_segmentContext.prototype.accept = function (visitor) {
        if (visitor.visitArray_segment) {
            return visitor.visitArray_segment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Array_segmentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Array_segmentContext = Array_segmentContext;
var Array_identifierContext = /** @class */ (function (_super) {
    __extends(Array_identifierContext, _super);
    function Array_identifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Array_identifierContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(Array_identifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_array_identifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Array_identifierContext.prototype.enterRule = function (listener) {
        if (listener.enterArray_identifier) {
            listener.enterArray_identifier(this);
        }
    };
    // @Override
    Array_identifierContext.prototype.exitRule = function (listener) {
        if (listener.exitArray_identifier) {
            listener.exitArray_identifier(this);
        }
    };
    // @Override
    Array_identifierContext.prototype.accept = function (visitor) {
        if (visitor.visitArray_identifier) {
            return visitor.visitArray_identifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Array_identifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Array_identifierContext = Array_identifierContext;
var Bound_pair_listContext = /** @class */ (function (_super) {
    __extends(Bound_pair_listContext, _super);
    function Bound_pair_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Bound_pair_listContext.prototype.bound_pair = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Bound_pairContext);
        }
        else {
            return this.getRuleContext(i, Bound_pairContext);
        }
    };
    Object.defineProperty(Bound_pair_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_bound_pair_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Bound_pair_listContext.prototype.enterRule = function (listener) {
        if (listener.enterBound_pair_list) {
            listener.enterBound_pair_list(this);
        }
    };
    // @Override
    Bound_pair_listContext.prototype.exitRule = function (listener) {
        if (listener.exitBound_pair_list) {
            listener.exitBound_pair_list(this);
        }
    };
    // @Override
    Bound_pair_listContext.prototype.accept = function (visitor) {
        if (visitor.visitBound_pair_list) {
            return visitor.visitBound_pair_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Bound_pair_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Bound_pair_listContext = Bound_pair_listContext;
var Bound_pairContext = /** @class */ (function (_super) {
    __extends(Bound_pairContext, _super);
    function Bound_pairContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Bound_pairContext.prototype.lower_bound = function () {
        return this.getRuleContext(0, Lower_boundContext);
    };
    Bound_pairContext.prototype.upper_bound = function () {
        return this.getRuleContext(0, Upper_boundContext);
    };
    Object.defineProperty(Bound_pairContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_bound_pair; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Bound_pairContext.prototype.enterRule = function (listener) {
        if (listener.enterBound_pair) {
            listener.enterBound_pair(this);
        }
    };
    // @Override
    Bound_pairContext.prototype.exitRule = function (listener) {
        if (listener.exitBound_pair) {
            listener.exitBound_pair(this);
        }
    };
    // @Override
    Bound_pairContext.prototype.accept = function (visitor) {
        if (visitor.visitBound_pair) {
            return visitor.visitBound_pair(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Bound_pairContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Bound_pairContext = Bound_pairContext;
var Upper_boundContext = /** @class */ (function (_super) {
    __extends(Upper_boundContext, _super);
    function Upper_boundContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Upper_boundContext.prototype.arithmetic_expression = function () {
        return this.getRuleContext(0, Arithmetic_expressionContext);
    };
    Object.defineProperty(Upper_boundContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_upper_bound; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Upper_boundContext.prototype.enterRule = function (listener) {
        if (listener.enterUpper_bound) {
            listener.enterUpper_bound(this);
        }
    };
    // @Override
    Upper_boundContext.prototype.exitRule = function (listener) {
        if (listener.exitUpper_bound) {
            listener.exitUpper_bound(this);
        }
    };
    // @Override
    Upper_boundContext.prototype.accept = function (visitor) {
        if (visitor.visitUpper_bound) {
            return visitor.visitUpper_bound(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Upper_boundContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Upper_boundContext = Upper_boundContext;
var Lower_boundContext = /** @class */ (function (_super) {
    __extends(Lower_boundContext, _super);
    function Lower_boundContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Lower_boundContext.prototype.arithmetic_expression = function () {
        return this.getRuleContext(0, Arithmetic_expressionContext);
    };
    Object.defineProperty(Lower_boundContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_lower_bound; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Lower_boundContext.prototype.enterRule = function (listener) {
        if (listener.enterLower_bound) {
            listener.enterLower_bound(this);
        }
    };
    // @Override
    Lower_boundContext.prototype.exitRule = function (listener) {
        if (listener.exitLower_bound) {
            listener.exitLower_bound(this);
        }
    };
    // @Override
    Lower_boundContext.prototype.accept = function (visitor) {
        if (visitor.visitLower_bound) {
            return visitor.visitLower_bound(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Lower_boundContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Lower_boundContext = Lower_boundContext;
var Switch_declarationContext = /** @class */ (function (_super) {
    __extends(Switch_declarationContext, _super);
    function Switch_declarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Switch_declarationContext.prototype.switch_identifier = function () {
        return this.getRuleContext(0, Switch_identifierContext);
    };
    Switch_declarationContext.prototype.switch_list = function () {
        return this.getRuleContext(0, Switch_listContext);
    };
    Object.defineProperty(Switch_declarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_switch_declaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Switch_declarationContext.prototype.enterRule = function (listener) {
        if (listener.enterSwitch_declaration) {
            listener.enterSwitch_declaration(this);
        }
    };
    // @Override
    Switch_declarationContext.prototype.exitRule = function (listener) {
        if (listener.exitSwitch_declaration) {
            listener.exitSwitch_declaration(this);
        }
    };
    // @Override
    Switch_declarationContext.prototype.accept = function (visitor) {
        if (visitor.visitSwitch_declaration) {
            return visitor.visitSwitch_declaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Switch_declarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Switch_declarationContext = Switch_declarationContext;
var Switch_identifierContext = /** @class */ (function (_super) {
    __extends(Switch_identifierContext, _super);
    function Switch_identifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Switch_identifierContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(Switch_identifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_switch_identifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Switch_identifierContext.prototype.enterRule = function (listener) {
        if (listener.enterSwitch_identifier) {
            listener.enterSwitch_identifier(this);
        }
    };
    // @Override
    Switch_identifierContext.prototype.exitRule = function (listener) {
        if (listener.exitSwitch_identifier) {
            listener.exitSwitch_identifier(this);
        }
    };
    // @Override
    Switch_identifierContext.prototype.accept = function (visitor) {
        if (visitor.visitSwitch_identifier) {
            return visitor.visitSwitch_identifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Switch_identifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Switch_identifierContext = Switch_identifierContext;
var Switch_listContext = /** @class */ (function (_super) {
    __extends(Switch_listContext, _super);
    function Switch_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Switch_listContext.prototype.designational_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Designational_expressionContext);
        }
        else {
            return this.getRuleContext(i, Designational_expressionContext);
        }
    };
    Object.defineProperty(Switch_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_switch_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Switch_listContext.prototype.enterRule = function (listener) {
        if (listener.enterSwitch_list) {
            listener.enterSwitch_list(this);
        }
    };
    // @Override
    Switch_listContext.prototype.exitRule = function (listener) {
        if (listener.exitSwitch_list) {
            listener.exitSwitch_list(this);
        }
    };
    // @Override
    Switch_listContext.prototype.accept = function (visitor) {
        if (visitor.visitSwitch_list) {
            return visitor.visitSwitch_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Switch_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Switch_listContext = Switch_listContext;
var Procedure_declarationContext = /** @class */ (function (_super) {
    __extends(Procedure_declarationContext, _super);
    function Procedure_declarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Procedure_declarationContext.prototype.procedure_heading = function () {
        return this.getRuleContext(0, Procedure_headingContext);
    };
    Procedure_declarationContext.prototype.procedure_body = function () {
        return this.getRuleContext(0, Procedure_bodyContext);
    };
    Procedure_declarationContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    Object.defineProperty(Procedure_declarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_procedure_declaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Procedure_declarationContext.prototype.enterRule = function (listener) {
        if (listener.enterProcedure_declaration) {
            listener.enterProcedure_declaration(this);
        }
    };
    // @Override
    Procedure_declarationContext.prototype.exitRule = function (listener) {
        if (listener.exitProcedure_declaration) {
            listener.exitProcedure_declaration(this);
        }
    };
    // @Override
    Procedure_declarationContext.prototype.accept = function (visitor) {
        if (visitor.visitProcedure_declaration) {
            return visitor.visitProcedure_declaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Procedure_declarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Procedure_declarationContext = Procedure_declarationContext;
var Procedure_headingContext = /** @class */ (function (_super) {
    __extends(Procedure_headingContext, _super);
    function Procedure_headingContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Procedure_headingContext.prototype.procedure_identifier = function () {
        return this.getRuleContext(0, Procedure_identifierContext);
    };
    Procedure_headingContext.prototype.formal_parameter_part = function () {
        return this.tryGetRuleContext(0, Formal_parameter_partContext);
    };
    Procedure_headingContext.prototype.value_part = function () {
        return this.tryGetRuleContext(0, Value_partContext);
    };
    Procedure_headingContext.prototype.specification_part = function () {
        return this.tryGetRuleContext(0, Specification_partContext);
    };
    Object.defineProperty(Procedure_headingContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_procedure_heading; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Procedure_headingContext.prototype.enterRule = function (listener) {
        if (listener.enterProcedure_heading) {
            listener.enterProcedure_heading(this);
        }
    };
    // @Override
    Procedure_headingContext.prototype.exitRule = function (listener) {
        if (listener.exitProcedure_heading) {
            listener.exitProcedure_heading(this);
        }
    };
    // @Override
    Procedure_headingContext.prototype.accept = function (visitor) {
        if (visitor.visitProcedure_heading) {
            return visitor.visitProcedure_heading(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Procedure_headingContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Procedure_headingContext = Procedure_headingContext;
var Procedure_identifierContext = /** @class */ (function (_super) {
    __extends(Procedure_identifierContext, _super);
    function Procedure_identifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Procedure_identifierContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(Procedure_identifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_procedure_identifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Procedure_identifierContext.prototype.enterRule = function (listener) {
        if (listener.enterProcedure_identifier) {
            listener.enterProcedure_identifier(this);
        }
    };
    // @Override
    Procedure_identifierContext.prototype.exitRule = function (listener) {
        if (listener.exitProcedure_identifier) {
            listener.exitProcedure_identifier(this);
        }
    };
    // @Override
    Procedure_identifierContext.prototype.accept = function (visitor) {
        if (visitor.visitProcedure_identifier) {
            return visitor.visitProcedure_identifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Procedure_identifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Procedure_identifierContext = Procedure_identifierContext;
var Formal_parameter_partContext = /** @class */ (function (_super) {
    __extends(Formal_parameter_partContext, _super);
    function Formal_parameter_partContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Formal_parameter_partContext.prototype.formal_parameter_list = function () {
        return this.getRuleContext(0, Formal_parameter_listContext);
    };
    Object.defineProperty(Formal_parameter_partContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_formal_parameter_part; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Formal_parameter_partContext.prototype.enterRule = function (listener) {
        if (listener.enterFormal_parameter_part) {
            listener.enterFormal_parameter_part(this);
        }
    };
    // @Override
    Formal_parameter_partContext.prototype.exitRule = function (listener) {
        if (listener.exitFormal_parameter_part) {
            listener.exitFormal_parameter_part(this);
        }
    };
    // @Override
    Formal_parameter_partContext.prototype.accept = function (visitor) {
        if (visitor.visitFormal_parameter_part) {
            return visitor.visitFormal_parameter_part(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Formal_parameter_partContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Formal_parameter_partContext = Formal_parameter_partContext;
var Formal_parameter_listContext = /** @class */ (function (_super) {
    __extends(Formal_parameter_listContext, _super);
    function Formal_parameter_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Formal_parameter_listContext.prototype.formal_parameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Formal_parameterContext);
        }
        else {
            return this.getRuleContext(i, Formal_parameterContext);
        }
    };
    Formal_parameter_listContext.prototype.parameter_delimiter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Parameter_delimiterContext);
        }
        else {
            return this.getRuleContext(i, Parameter_delimiterContext);
        }
    };
    Object.defineProperty(Formal_parameter_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_formal_parameter_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Formal_parameter_listContext.prototype.enterRule = function (listener) {
        if (listener.enterFormal_parameter_list) {
            listener.enterFormal_parameter_list(this);
        }
    };
    // @Override
    Formal_parameter_listContext.prototype.exitRule = function (listener) {
        if (listener.exitFormal_parameter_list) {
            listener.exitFormal_parameter_list(this);
        }
    };
    // @Override
    Formal_parameter_listContext.prototype.accept = function (visitor) {
        if (visitor.visitFormal_parameter_list) {
            return visitor.visitFormal_parameter_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Formal_parameter_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Formal_parameter_listContext = Formal_parameter_listContext;
var Formal_parameterContext = /** @class */ (function (_super) {
    __extends(Formal_parameterContext, _super);
    function Formal_parameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Formal_parameterContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(Formal_parameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_formal_parameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Formal_parameterContext.prototype.enterRule = function (listener) {
        if (listener.enterFormal_parameter) {
            listener.enterFormal_parameter(this);
        }
    };
    // @Override
    Formal_parameterContext.prototype.exitRule = function (listener) {
        if (listener.exitFormal_parameter) {
            listener.exitFormal_parameter(this);
        }
    };
    // @Override
    Formal_parameterContext.prototype.accept = function (visitor) {
        if (visitor.visitFormal_parameter) {
            return visitor.visitFormal_parameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Formal_parameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Formal_parameterContext = Formal_parameterContext;
var Value_partContext = /** @class */ (function (_super) {
    __extends(Value_partContext, _super);
    function Value_partContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Value_partContext.prototype.identifier_list = function () {
        return this.getRuleContext(0, Identifier_listContext);
    };
    Object.defineProperty(Value_partContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_value_part; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Value_partContext.prototype.enterRule = function (listener) {
        if (listener.enterValue_part) {
            listener.enterValue_part(this);
        }
    };
    // @Override
    Value_partContext.prototype.exitRule = function (listener) {
        if (listener.exitValue_part) {
            listener.exitValue_part(this);
        }
    };
    // @Override
    Value_partContext.prototype.accept = function (visitor) {
        if (visitor.visitValue_part) {
            return visitor.visitValue_part(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Value_partContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Value_partContext = Value_partContext;
var Specification_partContext = /** @class */ (function (_super) {
    __extends(Specification_partContext, _super);
    function Specification_partContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Specification_partContext.prototype.specifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SpecifierContext);
        }
        else {
            return this.getRuleContext(i, SpecifierContext);
        }
    };
    Specification_partContext.prototype.identifier_list = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Identifier_listContext);
        }
        else {
            return this.getRuleContext(i, Identifier_listContext);
        }
    };
    Object.defineProperty(Specification_partContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_specification_part; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Specification_partContext.prototype.enterRule = function (listener) {
        if (listener.enterSpecification_part) {
            listener.enterSpecification_part(this);
        }
    };
    // @Override
    Specification_partContext.prototype.exitRule = function (listener) {
        if (listener.exitSpecification_part) {
            listener.exitSpecification_part(this);
        }
    };
    // @Override
    Specification_partContext.prototype.accept = function (visitor) {
        if (visitor.visitSpecification_part) {
            return visitor.visitSpecification_part(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Specification_partContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Specification_partContext = Specification_partContext;
var SpecifierContext = /** @class */ (function (_super) {
    __extends(SpecifierContext, _super);
    function SpecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SpecifierContext.prototype.STRING = function () { return this.tryGetToken(algol60Parser.STRING, 0); };
    SpecifierContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    Object.defineProperty(SpecifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_specifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SpecifierContext.prototype.enterRule = function (listener) {
        if (listener.enterSpecifier) {
            listener.enterSpecifier(this);
        }
    };
    // @Override
    SpecifierContext.prototype.exitRule = function (listener) {
        if (listener.exitSpecifier) {
            listener.exitSpecifier(this);
        }
    };
    // @Override
    SpecifierContext.prototype.accept = function (visitor) {
        if (visitor.visitSpecifier) {
            return visitor.visitSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SpecifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SpecifierContext = SpecifierContext;
var Identifier_listContext = /** @class */ (function (_super) {
    __extends(Identifier_listContext, _super);
    function Identifier_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Identifier_listContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    Object.defineProperty(Identifier_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_identifier_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Identifier_listContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifier_list) {
            listener.enterIdentifier_list(this);
        }
    };
    // @Override
    Identifier_listContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifier_list) {
            listener.exitIdentifier_list(this);
        }
    };
    // @Override
    Identifier_listContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifier_list) {
            return visitor.visitIdentifier_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Identifier_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Identifier_listContext = Identifier_listContext;
var Procedure_bodyContext = /** @class */ (function (_super) {
    __extends(Procedure_bodyContext, _super);
    function Procedure_bodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Procedure_bodyContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    Object.defineProperty(Procedure_bodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_procedure_body; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Procedure_bodyContext.prototype.enterRule = function (listener) {
        if (listener.enterProcedure_body) {
            listener.enterProcedure_body(this);
        }
    };
    // @Override
    Procedure_bodyContext.prototype.exitRule = function (listener) {
        if (listener.exitProcedure_body) {
            listener.exitProcedure_body(this);
        }
    };
    // @Override
    Procedure_bodyContext.prototype.accept = function (visitor) {
        if (visitor.visitProcedure_body) {
            return visitor.visitProcedure_body(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Procedure_bodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Procedure_bodyContext = Procedure_bodyContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.unconditional_statement = function () {
        return this.tryGetRuleContext(0, Unconditional_statementContext);
    };
    StatementContext.prototype.conditional_statement = function () {
        return this.tryGetRuleContext(0, Conditional_statementContext);
    };
    StatementContext.prototype.for_statement = function () {
        return this.tryGetRuleContext(0, For_statementContext);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_statement; },
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
var Unconditional_statementContext = /** @class */ (function (_super) {
    __extends(Unconditional_statementContext, _super);
    function Unconditional_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Unconditional_statementContext.prototype.basic_statement = function () {
        return this.tryGetRuleContext(0, Basic_statementContext);
    };
    Unconditional_statementContext.prototype.compound_statement = function () {
        return this.tryGetRuleContext(0, Compound_statementContext);
    };
    Unconditional_statementContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    Object.defineProperty(Unconditional_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_unconditional_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Unconditional_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterUnconditional_statement) {
            listener.enterUnconditional_statement(this);
        }
    };
    // @Override
    Unconditional_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitUnconditional_statement) {
            listener.exitUnconditional_statement(this);
        }
    };
    // @Override
    Unconditional_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitUnconditional_statement) {
            return visitor.visitUnconditional_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Unconditional_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Unconditional_statementContext = Unconditional_statementContext;
var Basic_statementContext = /** @class */ (function (_super) {
    __extends(Basic_statementContext, _super);
    function Basic_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Basic_statementContext.prototype.label = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LabelContext);
        }
        else {
            return this.getRuleContext(i, LabelContext);
        }
    };
    Basic_statementContext.prototype.unlabelled_basic_statement = function () {
        return this.tryGetRuleContext(0, Unlabelled_basic_statementContext);
    };
    Object.defineProperty(Basic_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_basic_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Basic_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterBasic_statement) {
            listener.enterBasic_statement(this);
        }
    };
    // @Override
    Basic_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitBasic_statement) {
            listener.exitBasic_statement(this);
        }
    };
    // @Override
    Basic_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitBasic_statement) {
            return visitor.visitBasic_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Basic_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Basic_statementContext = Basic_statementContext;
var LabelContext = /** @class */ (function (_super) {
    __extends(LabelContext, _super);
    function LabelContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LabelContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    LabelContext.prototype.unsigned_integer = function () {
        return this.tryGetRuleContext(0, Unsigned_integerContext);
    };
    Object.defineProperty(LabelContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_label; },
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
var Unlabelled_basic_statementContext = /** @class */ (function (_super) {
    __extends(Unlabelled_basic_statementContext, _super);
    function Unlabelled_basic_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Unlabelled_basic_statementContext.prototype.assignment_statement = function () {
        return this.tryGetRuleContext(0, Assignment_statementContext);
    };
    Unlabelled_basic_statementContext.prototype.go_to_statement = function () {
        return this.tryGetRuleContext(0, Go_to_statementContext);
    };
    Unlabelled_basic_statementContext.prototype.procedure_statement = function () {
        return this.tryGetRuleContext(0, Procedure_statementContext);
    };
    Object.defineProperty(Unlabelled_basic_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_unlabelled_basic_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Unlabelled_basic_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterUnlabelled_basic_statement) {
            listener.enterUnlabelled_basic_statement(this);
        }
    };
    // @Override
    Unlabelled_basic_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitUnlabelled_basic_statement) {
            listener.exitUnlabelled_basic_statement(this);
        }
    };
    // @Override
    Unlabelled_basic_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitUnlabelled_basic_statement) {
            return visitor.visitUnlabelled_basic_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Unlabelled_basic_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Unlabelled_basic_statementContext = Unlabelled_basic_statementContext;
var Assignment_statementContext = /** @class */ (function (_super) {
    __extends(Assignment_statementContext, _super);
    function Assignment_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Assignment_statementContext.prototype.left_part_list = function () {
        return this.getRuleContext(0, Left_part_listContext);
    };
    Assignment_statementContext.prototype.arithmetic_expression = function () {
        return this.tryGetRuleContext(0, Arithmetic_expressionContext);
    };
    Assignment_statementContext.prototype.boolean_expression = function () {
        return this.tryGetRuleContext(0, Boolean_expressionContext);
    };
    Object.defineProperty(Assignment_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_assignment_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Assignment_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignment_statement) {
            listener.enterAssignment_statement(this);
        }
    };
    // @Override
    Assignment_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignment_statement) {
            listener.exitAssignment_statement(this);
        }
    };
    // @Override
    Assignment_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignment_statement) {
            return visitor.visitAssignment_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Assignment_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Assignment_statementContext = Assignment_statementContext;
var Left_part_listContext = /** @class */ (function (_super) {
    __extends(Left_part_listContext, _super);
    function Left_part_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Left_part_listContext.prototype.left_part = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Left_partContext);
        }
        else {
            return this.getRuleContext(i, Left_partContext);
        }
    };
    Object.defineProperty(Left_part_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_left_part_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Left_part_listContext.prototype.enterRule = function (listener) {
        if (listener.enterLeft_part_list) {
            listener.enterLeft_part_list(this);
        }
    };
    // @Override
    Left_part_listContext.prototype.exitRule = function (listener) {
        if (listener.exitLeft_part_list) {
            listener.exitLeft_part_list(this);
        }
    };
    // @Override
    Left_part_listContext.prototype.accept = function (visitor) {
        if (visitor.visitLeft_part_list) {
            return visitor.visitLeft_part_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Left_part_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Left_part_listContext = Left_part_listContext;
var Left_partContext = /** @class */ (function (_super) {
    __extends(Left_partContext, _super);
    function Left_partContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Left_partContext.prototype.variable = function () {
        return this.tryGetRuleContext(0, VariableContext);
    };
    Left_partContext.prototype.procedure_identifier = function () {
        return this.tryGetRuleContext(0, Procedure_identifierContext);
    };
    Object.defineProperty(Left_partContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_left_part; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Left_partContext.prototype.enterRule = function (listener) {
        if (listener.enterLeft_part) {
            listener.enterLeft_part(this);
        }
    };
    // @Override
    Left_partContext.prototype.exitRule = function (listener) {
        if (listener.exitLeft_part) {
            listener.exitLeft_part(this);
        }
    };
    // @Override
    Left_partContext.prototype.accept = function (visitor) {
        if (visitor.visitLeft_part) {
            return visitor.visitLeft_part(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Left_partContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Left_partContext = Left_partContext;
var Go_to_statementContext = /** @class */ (function (_super) {
    __extends(Go_to_statementContext, _super);
    function Go_to_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Go_to_statementContext.prototype.designational_expression = function () {
        return this.getRuleContext(0, Designational_expressionContext);
    };
    Object.defineProperty(Go_to_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_go_to_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Go_to_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterGo_to_statement) {
            listener.enterGo_to_statement(this);
        }
    };
    // @Override
    Go_to_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitGo_to_statement) {
            listener.exitGo_to_statement(this);
        }
    };
    // @Override
    Go_to_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitGo_to_statement) {
            return visitor.visitGo_to_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Go_to_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Go_to_statementContext = Go_to_statementContext;
var Designational_expressionContext = /** @class */ (function (_super) {
    __extends(Designational_expressionContext, _super);
    function Designational_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Designational_expressionContext.prototype.label = function () {
        return this.tryGetRuleContext(0, LabelContext);
    };
    Designational_expressionContext.prototype.switch_designator = function () {
        return this.tryGetRuleContext(0, Switch_designatorContext);
    };
    Designational_expressionContext.prototype.if_clause = function () {
        return this.tryGetRuleContext(0, If_clauseContext);
    };
    Designational_expressionContext.prototype.designational_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Designational_expressionContext);
        }
        else {
            return this.getRuleContext(i, Designational_expressionContext);
        }
    };
    Object.defineProperty(Designational_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_designational_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Designational_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterDesignational_expression) {
            listener.enterDesignational_expression(this);
        }
    };
    // @Override
    Designational_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitDesignational_expression) {
            listener.exitDesignational_expression(this);
        }
    };
    // @Override
    Designational_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitDesignational_expression) {
            return visitor.visitDesignational_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Designational_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Designational_expressionContext = Designational_expressionContext;
var Switch_designatorContext = /** @class */ (function (_super) {
    __extends(Switch_designatorContext, _super);
    function Switch_designatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Switch_designatorContext.prototype.switch_identifier = function () {
        return this.getRuleContext(0, Switch_identifierContext);
    };
    Switch_designatorContext.prototype.subscript_expression = function () {
        return this.tryGetRuleContext(0, Subscript_expressionContext);
    };
    Object.defineProperty(Switch_designatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_switch_designator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Switch_designatorContext.prototype.enterRule = function (listener) {
        if (listener.enterSwitch_designator) {
            listener.enterSwitch_designator(this);
        }
    };
    // @Override
    Switch_designatorContext.prototype.exitRule = function (listener) {
        if (listener.exitSwitch_designator) {
            listener.exitSwitch_designator(this);
        }
    };
    // @Override
    Switch_designatorContext.prototype.accept = function (visitor) {
        if (visitor.visitSwitch_designator) {
            return visitor.visitSwitch_designator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Switch_designatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Switch_designatorContext = Switch_designatorContext;
var Procedure_statementContext = /** @class */ (function (_super) {
    __extends(Procedure_statementContext, _super);
    function Procedure_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Procedure_statementContext.prototype.procedure_identifier = function () {
        return this.getRuleContext(0, Procedure_identifierContext);
    };
    Procedure_statementContext.prototype.actual_parameter_part = function () {
        return this.tryGetRuleContext(0, Actual_parameter_partContext);
    };
    Object.defineProperty(Procedure_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_procedure_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Procedure_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterProcedure_statement) {
            listener.enterProcedure_statement(this);
        }
    };
    // @Override
    Procedure_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitProcedure_statement) {
            listener.exitProcedure_statement(this);
        }
    };
    // @Override
    Procedure_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitProcedure_statement) {
            return visitor.visitProcedure_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Procedure_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Procedure_statementContext = Procedure_statementContext;
var Actual_parameter_partContext = /** @class */ (function (_super) {
    __extends(Actual_parameter_partContext, _super);
    function Actual_parameter_partContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Actual_parameter_partContext.prototype.actual_parameter_list = function () {
        return this.getRuleContext(0, Actual_parameter_listContext);
    };
    Object.defineProperty(Actual_parameter_partContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_actual_parameter_part; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Actual_parameter_partContext.prototype.enterRule = function (listener) {
        if (listener.enterActual_parameter_part) {
            listener.enterActual_parameter_part(this);
        }
    };
    // @Override
    Actual_parameter_partContext.prototype.exitRule = function (listener) {
        if (listener.exitActual_parameter_part) {
            listener.exitActual_parameter_part(this);
        }
    };
    // @Override
    Actual_parameter_partContext.prototype.accept = function (visitor) {
        if (visitor.visitActual_parameter_part) {
            return visitor.visitActual_parameter_part(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Actual_parameter_partContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Actual_parameter_partContext = Actual_parameter_partContext;
var Actual_parameter_listContext = /** @class */ (function (_super) {
    __extends(Actual_parameter_listContext, _super);
    function Actual_parameter_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Actual_parameter_listContext.prototype.actual_parameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Actual_parameterContext);
        }
        else {
            return this.getRuleContext(i, Actual_parameterContext);
        }
    };
    Actual_parameter_listContext.prototype.parameter_delimiter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Parameter_delimiterContext);
        }
        else {
            return this.getRuleContext(i, Parameter_delimiterContext);
        }
    };
    Object.defineProperty(Actual_parameter_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_actual_parameter_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Actual_parameter_listContext.prototype.enterRule = function (listener) {
        if (listener.enterActual_parameter_list) {
            listener.enterActual_parameter_list(this);
        }
    };
    // @Override
    Actual_parameter_listContext.prototype.exitRule = function (listener) {
        if (listener.exitActual_parameter_list) {
            listener.exitActual_parameter_list(this);
        }
    };
    // @Override
    Actual_parameter_listContext.prototype.accept = function (visitor) {
        if (visitor.visitActual_parameter_list) {
            return visitor.visitActual_parameter_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Actual_parameter_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Actual_parameter_listContext = Actual_parameter_listContext;
var Parameter_delimiterContext = /** @class */ (function (_super) {
    __extends(Parameter_delimiterContext, _super);
    function Parameter_delimiterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Parameter_delimiterContext.prototype.letter_string = function () {
        return this.tryGetRuleContext(0, Letter_stringContext);
    };
    Object.defineProperty(Parameter_delimiterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_parameter_delimiter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Parameter_delimiterContext.prototype.enterRule = function (listener) {
        if (listener.enterParameter_delimiter) {
            listener.enterParameter_delimiter(this);
        }
    };
    // @Override
    Parameter_delimiterContext.prototype.exitRule = function (listener) {
        if (listener.exitParameter_delimiter) {
            listener.exitParameter_delimiter(this);
        }
    };
    // @Override
    Parameter_delimiterContext.prototype.accept = function (visitor) {
        if (visitor.visitParameter_delimiter) {
            return visitor.visitParameter_delimiter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Parameter_delimiterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Parameter_delimiterContext = Parameter_delimiterContext;
var Actual_parameterContext = /** @class */ (function (_super) {
    __extends(Actual_parameterContext, _super);
    function Actual_parameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Actual_parameterContext.prototype.STRING = function () { return this.tryGetToken(algol60Parser.STRING, 0); };
    Actual_parameterContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Actual_parameterContext.prototype.array_identifier = function () {
        return this.tryGetRuleContext(0, Array_identifierContext);
    };
    Actual_parameterContext.prototype.switch_identifier = function () {
        return this.tryGetRuleContext(0, Switch_identifierContext);
    };
    Actual_parameterContext.prototype.procedure_identifier = function () {
        return this.tryGetRuleContext(0, Procedure_identifierContext);
    };
    Object.defineProperty(Actual_parameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_actual_parameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Actual_parameterContext.prototype.enterRule = function (listener) {
        if (listener.enterActual_parameter) {
            listener.enterActual_parameter(this);
        }
    };
    // @Override
    Actual_parameterContext.prototype.exitRule = function (listener) {
        if (listener.exitActual_parameter) {
            listener.exitActual_parameter(this);
        }
    };
    // @Override
    Actual_parameterContext.prototype.accept = function (visitor) {
        if (visitor.visitActual_parameter) {
            return visitor.visitActual_parameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Actual_parameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Actual_parameterContext = Actual_parameterContext;
var Conditional_statementContext = /** @class */ (function (_super) {
    __extends(Conditional_statementContext, _super);
    function Conditional_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Conditional_statementContext.prototype.label = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LabelContext);
        }
        else {
            return this.getRuleContext(i, LabelContext);
        }
    };
    Conditional_statementContext.prototype.if_statement = function () {
        return this.tryGetRuleContext(0, If_statementContext);
    };
    Conditional_statementContext.prototype.if_clause = function () {
        return this.tryGetRuleContext(0, If_clauseContext);
    };
    Conditional_statementContext.prototype.for_statement = function () {
        return this.tryGetRuleContext(0, For_statementContext);
    };
    Conditional_statementContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    Object.defineProperty(Conditional_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_conditional_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Conditional_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterConditional_statement) {
            listener.enterConditional_statement(this);
        }
    };
    // @Override
    Conditional_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitConditional_statement) {
            listener.exitConditional_statement(this);
        }
    };
    // @Override
    Conditional_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitConditional_statement) {
            return visitor.visitConditional_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Conditional_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Conditional_statementContext = Conditional_statementContext;
var If_statementContext = /** @class */ (function (_super) {
    __extends(If_statementContext, _super);
    function If_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    If_statementContext.prototype.if_clause = function () {
        return this.getRuleContext(0, If_clauseContext);
    };
    If_statementContext.prototype.unconditional_statement = function () {
        return this.getRuleContext(0, Unconditional_statementContext);
    };
    Object.defineProperty(If_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_if_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    If_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterIf_statement) {
            listener.enterIf_statement(this);
        }
    };
    // @Override
    If_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitIf_statement) {
            listener.exitIf_statement(this);
        }
    };
    // @Override
    If_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitIf_statement) {
            return visitor.visitIf_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return If_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.If_statementContext = If_statementContext;
var If_clauseContext = /** @class */ (function (_super) {
    __extends(If_clauseContext, _super);
    function If_clauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    If_clauseContext.prototype.boolean_expression = function () {
        return this.getRuleContext(0, Boolean_expressionContext);
    };
    Object.defineProperty(If_clauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_if_clause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    If_clauseContext.prototype.enterRule = function (listener) {
        if (listener.enterIf_clause) {
            listener.enterIf_clause(this);
        }
    };
    // @Override
    If_clauseContext.prototype.exitRule = function (listener) {
        if (listener.exitIf_clause) {
            listener.exitIf_clause(this);
        }
    };
    // @Override
    If_clauseContext.prototype.accept = function (visitor) {
        if (visitor.visitIf_clause) {
            return visitor.visitIf_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return If_clauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.If_clauseContext = If_clauseContext;
var For_statementContext = /** @class */ (function (_super) {
    __extends(For_statementContext, _super);
    function For_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    For_statementContext.prototype.for_clause = function () {
        return this.getRuleContext(0, For_clauseContext);
    };
    For_statementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    For_statementContext.prototype.label = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LabelContext);
        }
        else {
            return this.getRuleContext(i, LabelContext);
        }
    };
    Object.defineProperty(For_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_for_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    For_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterFor_statement) {
            listener.enterFor_statement(this);
        }
    };
    // @Override
    For_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitFor_statement) {
            listener.exitFor_statement(this);
        }
    };
    // @Override
    For_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitFor_statement) {
            return visitor.visitFor_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return For_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.For_statementContext = For_statementContext;
var For_clauseContext = /** @class */ (function (_super) {
    __extends(For_clauseContext, _super);
    function For_clauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    For_clauseContext.prototype.variable = function () {
        return this.getRuleContext(0, VariableContext);
    };
    For_clauseContext.prototype.for_list = function () {
        return this.getRuleContext(0, For_listContext);
    };
    Object.defineProperty(For_clauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_for_clause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    For_clauseContext.prototype.enterRule = function (listener) {
        if (listener.enterFor_clause) {
            listener.enterFor_clause(this);
        }
    };
    // @Override
    For_clauseContext.prototype.exitRule = function (listener) {
        if (listener.exitFor_clause) {
            listener.exitFor_clause(this);
        }
    };
    // @Override
    For_clauseContext.prototype.accept = function (visitor) {
        if (visitor.visitFor_clause) {
            return visitor.visitFor_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return For_clauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.For_clauseContext = For_clauseContext;
var For_listContext = /** @class */ (function (_super) {
    __extends(For_listContext, _super);
    function For_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    For_listContext.prototype.for_list_element = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(For_list_elementContext);
        }
        else {
            return this.getRuleContext(i, For_list_elementContext);
        }
    };
    Object.defineProperty(For_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_for_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    For_listContext.prototype.enterRule = function (listener) {
        if (listener.enterFor_list) {
            listener.enterFor_list(this);
        }
    };
    // @Override
    For_listContext.prototype.exitRule = function (listener) {
        if (listener.exitFor_list) {
            listener.exitFor_list(this);
        }
    };
    // @Override
    For_listContext.prototype.accept = function (visitor) {
        if (visitor.visitFor_list) {
            return visitor.visitFor_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return For_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.For_listContext = For_listContext;
var For_list_elementContext = /** @class */ (function (_super) {
    __extends(For_list_elementContext, _super);
    function For_list_elementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    For_list_elementContext.prototype.arithmetic_expression = function () {
        return this.tryGetRuleContext(0, Arithmetic_expressionContext);
    };
    Object.defineProperty(For_list_elementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_for_list_element; },
        enumerable: true,
        configurable: true
    });
    // @Override
    For_list_elementContext.prototype.enterRule = function (listener) {
        if (listener.enterFor_list_element) {
            listener.enterFor_list_element(this);
        }
    };
    // @Override
    For_list_elementContext.prototype.exitRule = function (listener) {
        if (listener.exitFor_list_element) {
            listener.exitFor_list_element(this);
        }
    };
    // @Override
    For_list_elementContext.prototype.accept = function (visitor) {
        if (visitor.visitFor_list_element) {
            return visitor.visitFor_list_element(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return For_list_elementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.For_list_elementContext = For_list_elementContext;
var Arithmetic_expressionContext = /** @class */ (function (_super) {
    __extends(Arithmetic_expressionContext, _super);
    function Arithmetic_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Arithmetic_expressionContext.prototype.arithmetic_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Arithmetic_expressionContext);
        }
        else {
            return this.getRuleContext(i, Arithmetic_expressionContext);
        }
    };
    Arithmetic_expressionContext.prototype.boolean_expression = function () {
        return this.tryGetRuleContext(0, Boolean_expressionContext);
    };
    Object.defineProperty(Arithmetic_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_arithmetic_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Arithmetic_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterArithmetic_expression) {
            listener.enterArithmetic_expression(this);
        }
    };
    // @Override
    Arithmetic_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitArithmetic_expression) {
            listener.exitArithmetic_expression(this);
        }
    };
    // @Override
    Arithmetic_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitArithmetic_expression) {
            return visitor.visitArithmetic_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Arithmetic_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Arithmetic_expressionContext = Arithmetic_expressionContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.arithmetic_expression = function () {
        return this.tryGetRuleContext(0, Arithmetic_expressionContext);
    };
    ExpressionContext.prototype.boolean_expression = function () {
        return this.tryGetRuleContext(0, Boolean_expressionContext);
    };
    ExpressionContext.prototype.designational_expression = function () {
        return this.tryGetRuleContext(0, Designational_expressionContext);
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterExpression) {
            listener.enterExpression(this);
        }
    };
    // @Override
    ExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitExpression) {
            listener.exitExpression(this);
        }
    };
    // @Override
    ExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionContext = ExpressionContext;
var Arithmetic_expression2Context = /** @class */ (function (_super) {
    __extends(Arithmetic_expression2Context, _super);
    function Arithmetic_expression2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Arithmetic_expression2Context.prototype.simple_arithmetic_expression = function () {
        return this.getRuleContext(0, Simple_arithmetic_expressionContext);
    };
    Arithmetic_expression2Context.prototype.if_clause = function () {
        return this.tryGetRuleContext(0, If_clauseContext);
    };
    Arithmetic_expression2Context.prototype.arithmetic_expression = function () {
        return this.tryGetRuleContext(0, Arithmetic_expressionContext);
    };
    Object.defineProperty(Arithmetic_expression2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_arithmetic_expression2; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Arithmetic_expression2Context.prototype.enterRule = function (listener) {
        if (listener.enterArithmetic_expression2) {
            listener.enterArithmetic_expression2(this);
        }
    };
    // @Override
    Arithmetic_expression2Context.prototype.exitRule = function (listener) {
        if (listener.exitArithmetic_expression2) {
            listener.exitArithmetic_expression2(this);
        }
    };
    // @Override
    Arithmetic_expression2Context.prototype.accept = function (visitor) {
        if (visitor.visitArithmetic_expression2) {
            return visitor.visitArithmetic_expression2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Arithmetic_expression2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Arithmetic_expression2Context = Arithmetic_expression2Context;
var Simple_arithmetic_expressionContext = /** @class */ (function (_super) {
    __extends(Simple_arithmetic_expressionContext, _super);
    function Simple_arithmetic_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Simple_arithmetic_expressionContext.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    Simple_arithmetic_expressionContext.prototype.adding_operator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Adding_operatorContext);
        }
        else {
            return this.getRuleContext(i, Adding_operatorContext);
        }
    };
    Object.defineProperty(Simple_arithmetic_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_simple_arithmetic_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Simple_arithmetic_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterSimple_arithmetic_expression) {
            listener.enterSimple_arithmetic_expression(this);
        }
    };
    // @Override
    Simple_arithmetic_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitSimple_arithmetic_expression) {
            listener.exitSimple_arithmetic_expression(this);
        }
    };
    // @Override
    Simple_arithmetic_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitSimple_arithmetic_expression) {
            return visitor.visitSimple_arithmetic_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Simple_arithmetic_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Simple_arithmetic_expressionContext = Simple_arithmetic_expressionContext;
var Adding_operatorContext = /** @class */ (function (_super) {
    __extends(Adding_operatorContext, _super);
    function Adding_operatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Adding_operatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_adding_operator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Adding_operatorContext.prototype.enterRule = function (listener) {
        if (listener.enterAdding_operator) {
            listener.enterAdding_operator(this);
        }
    };
    // @Override
    Adding_operatorContext.prototype.exitRule = function (listener) {
        if (listener.exitAdding_operator) {
            listener.exitAdding_operator(this);
        }
    };
    // @Override
    Adding_operatorContext.prototype.accept = function (visitor) {
        if (visitor.visitAdding_operator) {
            return visitor.visitAdding_operator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Adding_operatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Adding_operatorContext = Adding_operatorContext;
var TermContext = /** @class */ (function (_super) {
    __extends(TermContext, _super);
    function TermContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TermContext.prototype.factor = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FactorContext);
        }
        else {
            return this.getRuleContext(i, FactorContext);
        }
    };
    TermContext.prototype.multiplying_operator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Multiplying_operatorContext);
        }
        else {
            return this.getRuleContext(i, Multiplying_operatorContext);
        }
    };
    Object.defineProperty(TermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_term; },
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
var Multiplying_operatorContext = /** @class */ (function (_super) {
    __extends(Multiplying_operatorContext, _super);
    function Multiplying_operatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Multiplying_operatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_multiplying_operator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Multiplying_operatorContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiplying_operator) {
            listener.enterMultiplying_operator(this);
        }
    };
    // @Override
    Multiplying_operatorContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiplying_operator) {
            listener.exitMultiplying_operator(this);
        }
    };
    // @Override
    Multiplying_operatorContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiplying_operator) {
            return visitor.visitMultiplying_operator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Multiplying_operatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Multiplying_operatorContext = Multiplying_operatorContext;
var FactorContext = /** @class */ (function (_super) {
    __extends(FactorContext, _super);
    function FactorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FactorContext.prototype.primary = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PrimaryContext);
        }
        else {
            return this.getRuleContext(i, PrimaryContext);
        }
    };
    Object.defineProperty(FactorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_factor; },
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
var PrimaryContext = /** @class */ (function (_super) {
    __extends(PrimaryContext, _super);
    function PrimaryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrimaryContext.prototype.unsigned_number = function () {
        return this.tryGetRuleContext(0, Unsigned_numberContext);
    };
    PrimaryContext.prototype.variable = function () {
        return this.tryGetRuleContext(0, VariableContext);
    };
    PrimaryContext.prototype.function_designator = function () {
        return this.tryGetRuleContext(0, Function_designatorContext);
    };
    PrimaryContext.prototype.arithmetic_expression = function () {
        return this.tryGetRuleContext(0, Arithmetic_expressionContext);
    };
    Object.defineProperty(PrimaryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_primary; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrimaryContext.prototype.enterRule = function (listener) {
        if (listener.enterPrimary) {
            listener.enterPrimary(this);
        }
    };
    // @Override
    PrimaryContext.prototype.exitRule = function (listener) {
        if (listener.exitPrimary) {
            listener.exitPrimary(this);
        }
    };
    // @Override
    PrimaryContext.prototype.accept = function (visitor) {
        if (visitor.visitPrimary) {
            return visitor.visitPrimary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrimaryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrimaryContext = PrimaryContext;
var Unsigned_numberContext = /** @class */ (function (_super) {
    __extends(Unsigned_numberContext, _super);
    function Unsigned_numberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Unsigned_numberContext.prototype.decimal_number = function () {
        return this.tryGetRuleContext(0, Decimal_numberContext);
    };
    Unsigned_numberContext.prototype.exponential_part = function () {
        return this.tryGetRuleContext(0, Exponential_partContext);
    };
    Object.defineProperty(Unsigned_numberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_unsigned_number; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Unsigned_numberContext.prototype.enterRule = function (listener) {
        if (listener.enterUnsigned_number) {
            listener.enterUnsigned_number(this);
        }
    };
    // @Override
    Unsigned_numberContext.prototype.exitRule = function (listener) {
        if (listener.exitUnsigned_number) {
            listener.exitUnsigned_number(this);
        }
    };
    // @Override
    Unsigned_numberContext.prototype.accept = function (visitor) {
        if (visitor.visitUnsigned_number) {
            return visitor.visitUnsigned_number(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Unsigned_numberContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Unsigned_numberContext = Unsigned_numberContext;
var Decimal_numberContext = /** @class */ (function (_super) {
    __extends(Decimal_numberContext, _super);
    function Decimal_numberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Decimal_numberContext.prototype.unsigned_integer = function () {
        return this.tryGetRuleContext(0, Unsigned_integerContext);
    };
    Decimal_numberContext.prototype.decimal_fraction = function () {
        return this.tryGetRuleContext(0, Decimal_fractionContext);
    };
    Object.defineProperty(Decimal_numberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_decimal_number; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Decimal_numberContext.prototype.enterRule = function (listener) {
        if (listener.enterDecimal_number) {
            listener.enterDecimal_number(this);
        }
    };
    // @Override
    Decimal_numberContext.prototype.exitRule = function (listener) {
        if (listener.exitDecimal_number) {
            listener.exitDecimal_number(this);
        }
    };
    // @Override
    Decimal_numberContext.prototype.accept = function (visitor) {
        if (visitor.visitDecimal_number) {
            return visitor.visitDecimal_number(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Decimal_numberContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Decimal_numberContext = Decimal_numberContext;
var Unsigned_integerContext = /** @class */ (function (_super) {
    __extends(Unsigned_integerContext, _super);
    function Unsigned_integerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Unsigned_integerContext.prototype.DIGIT = function (i) {
        if (i === undefined) {
            return this.getTokens(algol60Parser.DIGIT);
        }
        else {
            return this.getToken(algol60Parser.DIGIT, i);
        }
    };
    Object.defineProperty(Unsigned_integerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_unsigned_integer; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Unsigned_integerContext.prototype.enterRule = function (listener) {
        if (listener.enterUnsigned_integer) {
            listener.enterUnsigned_integer(this);
        }
    };
    // @Override
    Unsigned_integerContext.prototype.exitRule = function (listener) {
        if (listener.exitUnsigned_integer) {
            listener.exitUnsigned_integer(this);
        }
    };
    // @Override
    Unsigned_integerContext.prototype.accept = function (visitor) {
        if (visitor.visitUnsigned_integer) {
            return visitor.visitUnsigned_integer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Unsigned_integerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Unsigned_integerContext = Unsigned_integerContext;
var Decimal_fractionContext = /** @class */ (function (_super) {
    __extends(Decimal_fractionContext, _super);
    function Decimal_fractionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Decimal_fractionContext.prototype.unsigned_integer = function () {
        return this.getRuleContext(0, Unsigned_integerContext);
    };
    Object.defineProperty(Decimal_fractionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_decimal_fraction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Decimal_fractionContext.prototype.enterRule = function (listener) {
        if (listener.enterDecimal_fraction) {
            listener.enterDecimal_fraction(this);
        }
    };
    // @Override
    Decimal_fractionContext.prototype.exitRule = function (listener) {
        if (listener.exitDecimal_fraction) {
            listener.exitDecimal_fraction(this);
        }
    };
    // @Override
    Decimal_fractionContext.prototype.accept = function (visitor) {
        if (visitor.visitDecimal_fraction) {
            return visitor.visitDecimal_fraction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Decimal_fractionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Decimal_fractionContext = Decimal_fractionContext;
var Exponential_partContext = /** @class */ (function (_super) {
    __extends(Exponential_partContext, _super);
    function Exponential_partContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Exponential_partContext.prototype.integer = function () {
        return this.getRuleContext(0, IntegerContext);
    };
    Object.defineProperty(Exponential_partContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_exponential_part; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Exponential_partContext.prototype.enterRule = function (listener) {
        if (listener.enterExponential_part) {
            listener.enterExponential_part(this);
        }
    };
    // @Override
    Exponential_partContext.prototype.exitRule = function (listener) {
        if (listener.exitExponential_part) {
            listener.exitExponential_part(this);
        }
    };
    // @Override
    Exponential_partContext.prototype.accept = function (visitor) {
        if (visitor.visitExponential_part) {
            return visitor.visitExponential_part(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Exponential_partContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Exponential_partContext = Exponential_partContext;
var IntegerContext = /** @class */ (function (_super) {
    __extends(IntegerContext, _super);
    function IntegerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntegerContext.prototype.unsigned_integer = function () {
        return this.getRuleContext(0, Unsigned_integerContext);
    };
    Object.defineProperty(IntegerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_integer; },
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
var Boolean_expressionContext = /** @class */ (function (_super) {
    __extends(Boolean_expressionContext, _super);
    function Boolean_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Boolean_expressionContext.prototype.if_clause = function () {
        return this.tryGetRuleContext(0, If_clauseContext);
    };
    Boolean_expressionContext.prototype.boolean_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Boolean_expressionContext);
        }
        else {
            return this.getRuleContext(i, Boolean_expressionContext);
        }
    };
    Boolean_expressionContext.prototype.logical_value = function () {
        return this.tryGetRuleContext(0, Logical_valueContext);
    };
    Boolean_expressionContext.prototype.variable = function () {
        return this.tryGetRuleContext(0, VariableContext);
    };
    Boolean_expressionContext.prototype.function_designator = function () {
        return this.tryGetRuleContext(0, Function_designatorContext);
    };
    Boolean_expressionContext.prototype.relation = function () {
        return this.tryGetRuleContext(0, RelationContext);
    };
    Object.defineProperty(Boolean_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_boolean_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Boolean_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterBoolean_expression) {
            listener.enterBoolean_expression(this);
        }
    };
    // @Override
    Boolean_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitBoolean_expression) {
            listener.exitBoolean_expression(this);
        }
    };
    // @Override
    Boolean_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitBoolean_expression) {
            return visitor.visitBoolean_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Boolean_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Boolean_expressionContext = Boolean_expressionContext;
var RelationContext = /** @class */ (function (_super) {
    __extends(RelationContext, _super);
    function RelationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RelationContext.prototype.simple_arithmetic_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Simple_arithmetic_expressionContext);
        }
        else {
            return this.getRuleContext(i, Simple_arithmetic_expressionContext);
        }
    };
    RelationContext.prototype.relational_operator = function () {
        return this.getRuleContext(0, Relational_operatorContext);
    };
    Object.defineProperty(RelationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_relation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RelationContext.prototype.enterRule = function (listener) {
        if (listener.enterRelation) {
            listener.enterRelation(this);
        }
    };
    // @Override
    RelationContext.prototype.exitRule = function (listener) {
        if (listener.exitRelation) {
            listener.exitRelation(this);
        }
    };
    // @Override
    RelationContext.prototype.accept = function (visitor) {
        if (visitor.visitRelation) {
            return visitor.visitRelation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RelationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RelationContext = RelationContext;
var Relational_operatorContext = /** @class */ (function (_super) {
    __extends(Relational_operatorContext, _super);
    function Relational_operatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Relational_operatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_relational_operator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Relational_operatorContext.prototype.enterRule = function (listener) {
        if (listener.enterRelational_operator) {
            listener.enterRelational_operator(this);
        }
    };
    // @Override
    Relational_operatorContext.prototype.exitRule = function (listener) {
        if (listener.exitRelational_operator) {
            listener.exitRelational_operator(this);
        }
    };
    // @Override
    Relational_operatorContext.prototype.accept = function (visitor) {
        if (visitor.visitRelational_operator) {
            return visitor.visitRelational_operator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Relational_operatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Relational_operatorContext = Relational_operatorContext;
var Function_designatorContext = /** @class */ (function (_super) {
    __extends(Function_designatorContext, _super);
    function Function_designatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Function_designatorContext.prototype.procedure_identifier = function () {
        return this.getRuleContext(0, Procedure_identifierContext);
    };
    Function_designatorContext.prototype.actual_parameter_part = function () {
        return this.getRuleContext(0, Actual_parameter_partContext);
    };
    Object.defineProperty(Function_designatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_function_designator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Function_designatorContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction_designator) {
            listener.enterFunction_designator(this);
        }
    };
    // @Override
    Function_designatorContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction_designator) {
            listener.exitFunction_designator(this);
        }
    };
    // @Override
    Function_designatorContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction_designator) {
            return visitor.visitFunction_designator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Function_designatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Function_designatorContext = Function_designatorContext;
var VariableContext = /** @class */ (function (_super) {
    __extends(VariableContext, _super);
    function VariableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableContext.prototype.simple_variable = function () {
        return this.tryGetRuleContext(0, Simple_variableContext);
    };
    VariableContext.prototype.subscripted_variable = function () {
        return this.tryGetRuleContext(0, Subscripted_variableContext);
    };
    Object.defineProperty(VariableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_variable; },
        enumerable: true,
        configurable: true
    });
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
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableContext = VariableContext;
var Simple_variableContext = /** @class */ (function (_super) {
    __extends(Simple_variableContext, _super);
    function Simple_variableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Simple_variableContext.prototype.variable_identifier = function () {
        return this.getRuleContext(0, Variable_identifierContext);
    };
    Object.defineProperty(Simple_variableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_simple_variable; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Simple_variableContext.prototype.enterRule = function (listener) {
        if (listener.enterSimple_variable) {
            listener.enterSimple_variable(this);
        }
    };
    // @Override
    Simple_variableContext.prototype.exitRule = function (listener) {
        if (listener.exitSimple_variable) {
            listener.exitSimple_variable(this);
        }
    };
    // @Override
    Simple_variableContext.prototype.accept = function (visitor) {
        if (visitor.visitSimple_variable) {
            return visitor.visitSimple_variable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Simple_variableContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Simple_variableContext = Simple_variableContext;
var Variable_identifierContext = /** @class */ (function (_super) {
    __extends(Variable_identifierContext, _super);
    function Variable_identifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Variable_identifierContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(Variable_identifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_variable_identifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Variable_identifierContext.prototype.enterRule = function (listener) {
        if (listener.enterVariable_identifier) {
            listener.enterVariable_identifier(this);
        }
    };
    // @Override
    Variable_identifierContext.prototype.exitRule = function (listener) {
        if (listener.exitVariable_identifier) {
            listener.exitVariable_identifier(this);
        }
    };
    // @Override
    Variable_identifierContext.prototype.accept = function (visitor) {
        if (visitor.visitVariable_identifier) {
            return visitor.visitVariable_identifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Variable_identifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Variable_identifierContext = Variable_identifierContext;
var Subscripted_variableContext = /** @class */ (function (_super) {
    __extends(Subscripted_variableContext, _super);
    function Subscripted_variableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Subscripted_variableContext.prototype.array_identifier = function () {
        return this.getRuleContext(0, Array_identifierContext);
    };
    Subscripted_variableContext.prototype.subscript_list = function () {
        return this.getRuleContext(0, Subscript_listContext);
    };
    Object.defineProperty(Subscripted_variableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_subscripted_variable; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Subscripted_variableContext.prototype.enterRule = function (listener) {
        if (listener.enterSubscripted_variable) {
            listener.enterSubscripted_variable(this);
        }
    };
    // @Override
    Subscripted_variableContext.prototype.exitRule = function (listener) {
        if (listener.exitSubscripted_variable) {
            listener.exitSubscripted_variable(this);
        }
    };
    // @Override
    Subscripted_variableContext.prototype.accept = function (visitor) {
        if (visitor.visitSubscripted_variable) {
            return visitor.visitSubscripted_variable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Subscripted_variableContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Subscripted_variableContext = Subscripted_variableContext;
var Subscript_listContext = /** @class */ (function (_super) {
    __extends(Subscript_listContext, _super);
    function Subscript_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Subscript_listContext.prototype.subscript_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Subscript_expressionContext);
        }
        else {
            return this.getRuleContext(i, Subscript_expressionContext);
        }
    };
    Object.defineProperty(Subscript_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_subscript_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Subscript_listContext.prototype.enterRule = function (listener) {
        if (listener.enterSubscript_list) {
            listener.enterSubscript_list(this);
        }
    };
    // @Override
    Subscript_listContext.prototype.exitRule = function (listener) {
        if (listener.exitSubscript_list) {
            listener.exitSubscript_list(this);
        }
    };
    // @Override
    Subscript_listContext.prototype.accept = function (visitor) {
        if (visitor.visitSubscript_list) {
            return visitor.visitSubscript_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Subscript_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Subscript_listContext = Subscript_listContext;
var Subscript_expressionContext = /** @class */ (function (_super) {
    __extends(Subscript_expressionContext, _super);
    function Subscript_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Subscript_expressionContext.prototype.arithmetic_expression = function () {
        return this.getRuleContext(0, Arithmetic_expressionContext);
    };
    Object.defineProperty(Subscript_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_subscript_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Subscript_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterSubscript_expression) {
            listener.enterSubscript_expression(this);
        }
    };
    // @Override
    Subscript_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitSubscript_expression) {
            listener.exitSubscript_expression(this);
        }
    };
    // @Override
    Subscript_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitSubscript_expression) {
            return visitor.visitSubscript_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Subscript_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Subscript_expressionContext = Subscript_expressionContext;
var Open_stringContext = /** @class */ (function (_super) {
    __extends(Open_stringContext, _super);
    function Open_stringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Open_stringContext.prototype.STRING = function (i) {
        if (i === undefined) {
            return this.getTokens(algol60Parser.STRING);
        }
        else {
            return this.getToken(algol60Parser.STRING, i);
        }
    };
    Open_stringContext.prototype.proper_string = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Proper_stringContext);
        }
        else {
            return this.getRuleContext(i, Proper_stringContext);
        }
    };
    Object.defineProperty(Open_stringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_open_string; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Open_stringContext.prototype.enterRule = function (listener) {
        if (listener.enterOpen_string) {
            listener.enterOpen_string(this);
        }
    };
    // @Override
    Open_stringContext.prototype.exitRule = function (listener) {
        if (listener.exitOpen_string) {
            listener.exitOpen_string(this);
        }
    };
    // @Override
    Open_stringContext.prototype.accept = function (visitor) {
        if (visitor.visitOpen_string) {
            return visitor.visitOpen_string(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Open_stringContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Open_stringContext = Open_stringContext;
var Proper_stringContext = /** @class */ (function (_super) {
    __extends(Proper_stringContext, _super);
    function Proper_stringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Proper_stringContext.prototype.STRING = function () { return this.getToken(algol60Parser.STRING, 0); };
    Object.defineProperty(Proper_stringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_proper_string; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Proper_stringContext.prototype.enterRule = function (listener) {
        if (listener.enterProper_string) {
            listener.enterProper_string(this);
        }
    };
    // @Override
    Proper_stringContext.prototype.exitRule = function (listener) {
        if (listener.exitProper_string) {
            listener.exitProper_string(this);
        }
    };
    // @Override
    Proper_stringContext.prototype.accept = function (visitor) {
        if (visitor.visitProper_string) {
            return visitor.visitProper_string(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Proper_stringContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Proper_stringContext = Proper_stringContext;
var Letter_stringContext = /** @class */ (function (_super) {
    __extends(Letter_stringContext, _super);
    function Letter_stringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Letter_stringContext.prototype.LETTER = function (i) {
        if (i === undefined) {
            return this.getTokens(algol60Parser.LETTER);
        }
        else {
            return this.getToken(algol60Parser.LETTER, i);
        }
    };
    Object.defineProperty(Letter_stringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_letter_string; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Letter_stringContext.prototype.enterRule = function (listener) {
        if (listener.enterLetter_string) {
            listener.enterLetter_string(this);
        }
    };
    // @Override
    Letter_stringContext.prototype.exitRule = function (listener) {
        if (listener.exitLetter_string) {
            listener.exitLetter_string(this);
        }
    };
    // @Override
    Letter_stringContext.prototype.accept = function (visitor) {
        if (visitor.visitLetter_string) {
            return visitor.visitLetter_string(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Letter_stringContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Letter_stringContext = Letter_stringContext;
var IdentifierContext = /** @class */ (function (_super) {
    __extends(IdentifierContext, _super);
    function IdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierContext.prototype.LETTER = function (i) {
        if (i === undefined) {
            return this.getTokens(algol60Parser.LETTER);
        }
        else {
            return this.getToken(algol60Parser.LETTER, i);
        }
    };
    IdentifierContext.prototype.DIGIT = function (i) {
        if (i === undefined) {
            return this.getTokens(algol60Parser.DIGIT);
        }
        else {
            return this.getToken(algol60Parser.DIGIT, i);
        }
    };
    Object.defineProperty(IdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_identifier; },
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
var Basic_symbolContext = /** @class */ (function (_super) {
    __extends(Basic_symbolContext, _super);
    function Basic_symbolContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Basic_symbolContext.prototype.LETTER = function () { return this.tryGetToken(algol60Parser.LETTER, 0); };
    Basic_symbolContext.prototype.DIGIT = function () { return this.tryGetToken(algol60Parser.DIGIT, 0); };
    Basic_symbolContext.prototype.logical_value = function () {
        return this.tryGetRuleContext(0, Logical_valueContext);
    };
    Basic_symbolContext.prototype.delimiter = function () {
        return this.tryGetRuleContext(0, DelimiterContext);
    };
    Object.defineProperty(Basic_symbolContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_basic_symbol; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Basic_symbolContext.prototype.enterRule = function (listener) {
        if (listener.enterBasic_symbol) {
            listener.enterBasic_symbol(this);
        }
    };
    // @Override
    Basic_symbolContext.prototype.exitRule = function (listener) {
        if (listener.exitBasic_symbol) {
            listener.exitBasic_symbol(this);
        }
    };
    // @Override
    Basic_symbolContext.prototype.accept = function (visitor) {
        if (visitor.visitBasic_symbol) {
            return visitor.visitBasic_symbol(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Basic_symbolContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Basic_symbolContext = Basic_symbolContext;
var Logical_valueContext = /** @class */ (function (_super) {
    __extends(Logical_valueContext, _super);
    function Logical_valueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Logical_valueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_logical_value; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Logical_valueContext.prototype.enterRule = function (listener) {
        if (listener.enterLogical_value) {
            listener.enterLogical_value(this);
        }
    };
    // @Override
    Logical_valueContext.prototype.exitRule = function (listener) {
        if (listener.exitLogical_value) {
            listener.exitLogical_value(this);
        }
    };
    // @Override
    Logical_valueContext.prototype.accept = function (visitor) {
        if (visitor.visitLogical_value) {
            return visitor.visitLogical_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Logical_valueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Logical_valueContext = Logical_valueContext;
var DelimiterContext = /** @class */ (function (_super) {
    __extends(DelimiterContext, _super);
    function DelimiterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DelimiterContext.prototype.operator = function () {
        return this.tryGetRuleContext(0, OperatorContext);
    };
    DelimiterContext.prototype.SEPARATOR = function () { return this.tryGetToken(algol60Parser.SEPARATOR, 0); };
    DelimiterContext.prototype.bracket = function () {
        return this.tryGetRuleContext(0, BracketContext);
    };
    DelimiterContext.prototype.DECLARATOR = function () { return this.tryGetToken(algol60Parser.DECLARATOR, 0); };
    DelimiterContext.prototype.specificator = function () {
        return this.tryGetRuleContext(0, SpecificatorContext);
    };
    Object.defineProperty(DelimiterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_delimiter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DelimiterContext.prototype.enterRule = function (listener) {
        if (listener.enterDelimiter) {
            listener.enterDelimiter(this);
        }
    };
    // @Override
    DelimiterContext.prototype.exitRule = function (listener) {
        if (listener.exitDelimiter) {
            listener.exitDelimiter(this);
        }
    };
    // @Override
    DelimiterContext.prototype.accept = function (visitor) {
        if (visitor.visitDelimiter) {
            return visitor.visitDelimiter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DelimiterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DelimiterContext = DelimiterContext;
var OperatorContext = /** @class */ (function (_super) {
    __extends(OperatorContext, _super);
    function OperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OperatorContext.prototype.ARITHMETIC_OPERATOR = function () { return this.tryGetToken(algol60Parser.ARITHMETIC_OPERATOR, 0); };
    OperatorContext.prototype.RELATIONAL_OPERATOR = function () { return this.tryGetToken(algol60Parser.RELATIONAL_OPERATOR, 0); };
    OperatorContext.prototype.LOGICAL_OPERATOR = function () { return this.tryGetToken(algol60Parser.LOGICAL_OPERATOR, 0); };
    OperatorContext.prototype.SEQUENTIAL_OPERATOR = function () { return this.tryGetToken(algol60Parser.SEQUENTIAL_OPERATOR, 0); };
    Object.defineProperty(OperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_operator; },
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
var BracketContext = /** @class */ (function (_super) {
    __extends(BracketContext, _super);
    function BracketContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(BracketContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_bracket; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BracketContext.prototype.enterRule = function (listener) {
        if (listener.enterBracket) {
            listener.enterBracket(this);
        }
    };
    // @Override
    BracketContext.prototype.exitRule = function (listener) {
        if (listener.exitBracket) {
            listener.exitBracket(this);
        }
    };
    // @Override
    BracketContext.prototype.accept = function (visitor) {
        if (visitor.visitBracket) {
            return visitor.visitBracket(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BracketContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BracketContext = BracketContext;
var SpecificatorContext = /** @class */ (function (_super) {
    __extends(SpecificatorContext, _super);
    function SpecificatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(SpecificatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return algol60Parser.RULE_specificator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SpecificatorContext.prototype.enterRule = function (listener) {
        if (listener.enterSpecificator) {
            listener.enterSpecificator(this);
        }
    };
    // @Override
    SpecificatorContext.prototype.exitRule = function (listener) {
        if (listener.exitSpecificator) {
            listener.exitSpecificator(this);
        }
    };
    // @Override
    SpecificatorContext.prototype.accept = function (visitor) {
        if (visitor.visitSpecificator) {
            return visitor.visitSpecificator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SpecificatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SpecificatorContext = SpecificatorContext;
