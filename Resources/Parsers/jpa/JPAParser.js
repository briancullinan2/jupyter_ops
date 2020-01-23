"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/jpa/JPA.g4 by ANTLR 4.7.3-SNAPSHOT
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
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var JPAParser = /** @class */ (function (_super) {
    __extends(JPAParser, _super);
    function JPAParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(JPAParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(JPAParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return JPAParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JPAParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "JPA.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JPAParser.prototype, "ruleNames", {
        // @Override
        get: function () { return JPAParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JPAParser.prototype, "serializedATN", {
        // @Override
        get: function () { return JPAParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    JPAParser.prototype.ql_statement = function () {
        var _localctx = new Ql_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, JPAParser.RULE_ql_statement);
        try {
            this.state = 177;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JPAParser.T__17:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 174;
                        this.select_statement();
                    }
                    break;
                case JPAParser.T__12:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 175;
                        this.update_statement();
                    }
                    break;
                case JPAParser.T__16:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 176;
                        this.delete_statement();
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
    JPAParser.prototype.select_statement = function () {
        var _localctx = new Select_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, JPAParser.RULE_select_statement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 179;
                this.select_clause();
                this.state = 180;
                this.from_clause();
                this.state = 182;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JPAParser.T__26) {
                    {
                        this.state = 181;
                        this.where_clause();
                    }
                }
                this.state = 185;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JPAParser.T__27) {
                    {
                        this.state = 184;
                        this.groupby_clause();
                    }
                }
                this.state = 188;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JPAParser.T__29) {
                    {
                        this.state = 187;
                        this.having_clause();
                    }
                }
                this.state = 191;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JPAParser.T__30) {
                    {
                        this.state = 190;
                        this.orderby_clause();
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
    JPAParser.prototype.update_statement = function () {
        var _localctx = new Update_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, JPAParser.RULE_update_statement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 193;
                this.update_clause();
                this.state = 195;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JPAParser.T__26) {
                    {
                        this.state = 194;
                        this.where_clause();
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
    JPAParser.prototype.delete_statement = function () {
        var _localctx = new Delete_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, JPAParser.RULE_delete_statement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 197;
                this.delete_clause();
                this.state = 199;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JPAParser.T__26) {
                    {
                        this.state = 198;
                        this.where_clause();
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
    JPAParser.prototype.from_clause = function () {
        var _localctx = new From_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, JPAParser.RULE_from_clause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 201;
                this.match(JPAParser.T__0);
                this.state = 202;
                this.identification_variable_declaration();
                this.state = 210;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JPAParser.T__1) {
                    {
                        {
                            this.state = 203;
                            this.match(JPAParser.T__1);
                            this.state = 206;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case JPAParser.EOF:
                                case JPAParser.T__2:
                                case JPAParser.T__13:
                                case JPAParser.T__26:
                                case JPAParser.IDENTIFICATION_VARIABLE:
                                    {
                                        this.state = 204;
                                        this.identification_variable_declaration();
                                    }
                                    break;
                                case JPAParser.T__9:
                                    {
                                        this.state = 205;
                                        this.collection_member_declaration();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 212;
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
    JPAParser.prototype.identification_variable_declaration = function () {
        var _localctx = new Identification_variable_declarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, JPAParser.RULE_identification_variable_declaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 213;
                this.range_variable_declaration();
                this.state = 218;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JPAParser.T__4) | (1 << JPAParser.T__6) | (1 << JPAParser.T__7))) !== 0)) {
                    {
                        this.state = 216;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                            case 1:
                                {
                                    this.state = 214;
                                    this.join();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 215;
                                    this.fetch_join();
                                }
                                break;
                        }
                    }
                    this.state = 220;
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
    JPAParser.prototype.range_variable_declaration = function () {
        var _localctx = new Range_variable_declarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, JPAParser.RULE_range_variable_declaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 221;
                this.abstract_schema_name();
                this.state = 223;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JPAParser.T__2) {
                    {
                        this.state = 222;
                        this.match(JPAParser.T__2);
                    }
                }
                this.state = 225;
                this.match(JPAParser.IDENTIFICATION_VARIABLE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.join = function () {
        var _localctx = new JoinContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, JPAParser.RULE_join);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 227;
                this.join_spec();
                this.state = 228;
                this.join_association_path_expression();
                this.state = 230;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JPAParser.T__2) {
                    {
                        this.state = 229;
                        this.match(JPAParser.T__2);
                    }
                }
                this.state = 232;
                this.match(JPAParser.IDENTIFICATION_VARIABLE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.fetch_join = function () {
        var _localctx = new Fetch_joinContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, JPAParser.RULE_fetch_join);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 234;
                this.join_spec();
                this.state = 235;
                this.match(JPAParser.T__3);
                this.state = 236;
                this.join_association_path_expression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.join_spec = function () {
        var _localctx = new Join_specContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, JPAParser.RULE_join_spec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 243;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case JPAParser.T__4:
                        {
                            {
                                this.state = 238;
                                this.match(JPAParser.T__4);
                            }
                            this.state = 240;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === JPAParser.T__5) {
                                {
                                    this.state = 239;
                                    this.match(JPAParser.T__5);
                                }
                            }
                        }
                        break;
                    case JPAParser.T__6:
                        {
                            this.state = 242;
                            this.match(JPAParser.T__6);
                        }
                        break;
                    case JPAParser.T__7:
                        break;
                    default:
                        break;
                }
                this.state = 245;
                this.match(JPAParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.join_association_path_expression = function () {
        var _localctx = new Join_association_path_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, JPAParser.RULE_join_association_path_expression);
        try {
            this.state = 249;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 247;
                        this.join_collection_valued_path_expression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 248;
                        this.join_single_valued_association_path_expression();
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
    JPAParser.prototype.join_collection_valued_path_expression = function () {
        var _localctx = new Join_collection_valued_path_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, JPAParser.RULE_join_collection_valued_path_expression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 251;
                this.match(JPAParser.IDENTIFICATION_VARIABLE);
                this.state = 252;
                this.match(JPAParser.T__8);
                this.state = 253;
                this.collection_valued_association_field();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.join_single_valued_association_path_expression = function () {
        var _localctx = new Join_single_valued_association_path_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, JPAParser.RULE_join_single_valued_association_path_expression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 255;
                this.match(JPAParser.IDENTIFICATION_VARIABLE);
                this.state = 256;
                this.match(JPAParser.T__8);
                this.state = 257;
                this.single_valued_association_field();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.collection_member_declaration = function () {
        var _localctx = new Collection_member_declarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, JPAParser.RULE_collection_member_declaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 259;
                this.match(JPAParser.T__9);
                this.state = 260;
                this.match(JPAParser.T__10);
                this.state = 261;
                this.collection_valued_path_expression();
                this.state = 262;
                this.match(JPAParser.T__11);
                this.state = 264;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JPAParser.T__2) {
                    {
                        this.state = 263;
                        this.match(JPAParser.T__2);
                    }
                }
                this.state = 266;
                this.match(JPAParser.IDENTIFICATION_VARIABLE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.single_valued_path_expression = function () {
        var _localctx = new Single_valued_path_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, JPAParser.RULE_single_valued_path_expression);
        try {
            this.state = 270;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 268;
                        this.state_field_path_expression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 269;
                        this.single_valued_association_path_expression();
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
    JPAParser.prototype.state_field_path_expression = function () {
        var _localctx = new State_field_path_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, JPAParser.RULE_state_field_path_expression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 274;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
                    case 1:
                        {
                            this.state = 272;
                            this.match(JPAParser.IDENTIFICATION_VARIABLE);
                        }
                        break;
                    case 2:
                        {
                            this.state = 273;
                            this.single_valued_association_path_expression();
                        }
                        break;
                }
                this.state = 276;
                this.match(JPAParser.T__8);
                this.state = 277;
                this.state_field();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.single_valued_association_path_expression = function () {
        var _localctx = new Single_valued_association_path_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, JPAParser.RULE_single_valued_association_path_expression);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 279;
                this.match(JPAParser.IDENTIFICATION_VARIABLE);
                this.state = 280;
                this.match(JPAParser.T__8);
                this.state = 286;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 281;
                                this.single_valued_association_field();
                                this.state = 282;
                                this.match(JPAParser.T__8);
                            }
                        }
                    }
                    this.state = 288;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                }
                this.state = 289;
                this.single_valued_association_field();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.collection_valued_path_expression = function () {
        var _localctx = new Collection_valued_path_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, JPAParser.RULE_collection_valued_path_expression);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 291;
                this.match(JPAParser.IDENTIFICATION_VARIABLE);
                this.state = 292;
                this.match(JPAParser.T__8);
                this.state = 298;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 293;
                                this.single_valued_association_field();
                                this.state = 294;
                                this.match(JPAParser.T__8);
                            }
                        }
                    }
                    this.state = 300;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                }
                this.state = 301;
                this.collection_valued_association_field();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.state_field = function () {
        var _localctx = new State_fieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, JPAParser.RULE_state_field);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 308;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JPAParser.T__8) {
                    {
                        {
                            this.state = 303;
                            this.embedded_class_state_field();
                            this.state = 304;
                            this.match(JPAParser.T__8);
                        }
                    }
                    this.state = 310;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 311;
                this.simple_state_field();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.update_clause = function () {
        var _localctx = new Update_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, JPAParser.RULE_update_clause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 313;
                this.match(JPAParser.T__12);
                this.state = 314;
                this.abstract_schema_name();
                this.state = 319;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JPAParser.T__2 || _la === JPAParser.IDENTIFICATION_VARIABLE) {
                    {
                        this.state = 316;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JPAParser.T__2) {
                            {
                                this.state = 315;
                                this.match(JPAParser.T__2);
                            }
                        }
                        this.state = 318;
                        this.match(JPAParser.IDENTIFICATION_VARIABLE);
                    }
                }
                this.state = 321;
                this.match(JPAParser.T__13);
                this.state = 322;
                this.update_item();
                this.state = 327;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JPAParser.T__1) {
                    {
                        {
                            this.state = 323;
                            this.match(JPAParser.T__1);
                            this.state = 324;
                            this.update_item();
                        }
                    }
                    this.state = 329;
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
    JPAParser.prototype.update_item = function () {
        var _localctx = new Update_itemContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, JPAParser.RULE_update_item);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 332;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 25, this._ctx)) {
                    case 1:
                        {
                            this.state = 330;
                            this.match(JPAParser.IDENTIFICATION_VARIABLE);
                            this.state = 331;
                            this.match(JPAParser.T__8);
                        }
                        break;
                }
                this.state = 336;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
                    case 1:
                        {
                            this.state = 334;
                            this.state_field();
                        }
                        break;
                    case 2:
                        {
                            this.state = 335;
                            this.single_valued_association_field();
                        }
                        break;
                }
                this.state = 338;
                this.match(JPAParser.T__14);
                this.state = 339;
                this.new_value();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.new_value = function () {
        var _localctx = new New_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, JPAParser.RULE_new_value);
        try {
            this.state = 348;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 341;
                        this.simple_arithmetic_expression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 342;
                        this.string_primary();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 343;
                        this.datetime_primary();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 344;
                        this.boolean_primary();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 345;
                        this.enum_primary();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 346;
                        this.simple_entity_expression();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 347;
                        this.match(JPAParser.T__15);
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
    JPAParser.prototype.delete_clause = function () {
        var _localctx = new Delete_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, JPAParser.RULE_delete_clause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 350;
                this.match(JPAParser.T__16);
                this.state = 351;
                this.match(JPAParser.T__0);
                this.state = 352;
                this.abstract_schema_name();
                this.state = 357;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JPAParser.T__2 || _la === JPAParser.IDENTIFICATION_VARIABLE) {
                    {
                        this.state = 354;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JPAParser.T__2) {
                            {
                                this.state = 353;
                                this.match(JPAParser.T__2);
                            }
                        }
                        this.state = 356;
                        this.match(JPAParser.IDENTIFICATION_VARIABLE);
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
    JPAParser.prototype.select_clause = function () {
        var _localctx = new Select_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, JPAParser.RULE_select_clause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 359;
                this.match(JPAParser.T__17);
                this.state = 361;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JPAParser.T__18) {
                    {
                        this.state = 360;
                        this.match(JPAParser.T__18);
                    }
                }
                this.state = 363;
                this.select_expression();
                this.state = 368;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JPAParser.T__1) {
                    {
                        {
                            this.state = 364;
                            this.match(JPAParser.T__1);
                            this.state = 365;
                            this.select_expression();
                        }
                    }
                    this.state = 370;
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
    JPAParser.prototype.select_expression = function () {
        var _localctx = new Select_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, JPAParser.RULE_select_expression);
        try {
            this.state = 379;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 371;
                        this.single_valued_path_expression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 372;
                        this.aggregate_expression();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 373;
                        this.match(JPAParser.IDENTIFICATION_VARIABLE);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 374;
                        this.match(JPAParser.T__19);
                        this.state = 375;
                        this.match(JPAParser.T__10);
                        this.state = 376;
                        this.match(JPAParser.IDENTIFICATION_VARIABLE);
                        this.state = 377;
                        this.match(JPAParser.T__11);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 378;
                        this.constructor_expression();
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
    JPAParser.prototype.constructor_expression = function () {
        var _localctx = new Constructor_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, JPAParser.RULE_constructor_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 381;
                this.match(JPAParser.T__20);
                this.state = 382;
                this.constructor_name();
                this.state = 383;
                this.match(JPAParser.T__10);
                this.state = 384;
                this.constructor_item();
                this.state = 389;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JPAParser.T__1) {
                    {
                        {
                            this.state = 385;
                            this.match(JPAParser.T__1);
                            this.state = 386;
                            this.constructor_item();
                        }
                    }
                    this.state = 391;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 392;
                this.match(JPAParser.T__11);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.constructor_item = function () {
        var _localctx = new Constructor_itemContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, JPAParser.RULE_constructor_item);
        try {
            this.state = 396;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JPAParser.IDENTIFICATION_VARIABLE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 394;
                        this.single_valued_path_expression();
                    }
                    break;
                case JPAParser.T__21:
                case JPAParser.T__22:
                case JPAParser.T__23:
                case JPAParser.T__24:
                case JPAParser.T__25:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 395;
                        this.aggregate_expression();
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
    JPAParser.prototype.aggregate_expression = function () {
        var _localctx = new Aggregate_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, JPAParser.RULE_aggregate_expression);
        var _la;
        try {
            this.state = 417;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JPAParser.T__21:
                case JPAParser.T__22:
                case JPAParser.T__23:
                case JPAParser.T__24:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 398;
                        _la = this._input.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JPAParser.T__21) | (1 << JPAParser.T__22) | (1 << JPAParser.T__23) | (1 << JPAParser.T__24))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 399;
                        this.match(JPAParser.T__10);
                        this.state = 401;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JPAParser.T__18) {
                            {
                                this.state = 400;
                                this.match(JPAParser.T__18);
                            }
                        }
                        this.state = 403;
                        this.state_field_path_expression();
                        this.state = 404;
                        this.match(JPAParser.T__11);
                    }
                    break;
                case JPAParser.T__25:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 406;
                        this.match(JPAParser.T__25);
                        this.state = 407;
                        this.match(JPAParser.T__10);
                        this.state = 409;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JPAParser.T__18) {
                            {
                                this.state = 408;
                                this.match(JPAParser.T__18);
                            }
                        }
                        this.state = 414;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
                            case 1:
                                {
                                    this.state = 411;
                                    this.match(JPAParser.IDENTIFICATION_VARIABLE);
                                }
                                break;
                            case 2:
                                {
                                    this.state = 412;
                                    this.state_field_path_expression();
                                }
                                break;
                            case 3:
                                {
                                    this.state = 413;
                                    this.single_valued_association_path_expression();
                                }
                                break;
                        }
                        this.state = 416;
                        this.match(JPAParser.T__11);
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
    JPAParser.prototype.where_clause = function () {
        var _localctx = new Where_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, JPAParser.RULE_where_clause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 419;
                this.match(JPAParser.T__26);
                this.state = 420;
                this.conditional_expression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.groupby_clause = function () {
        var _localctx = new Groupby_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, JPAParser.RULE_groupby_clause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 422;
                this.match(JPAParser.T__27);
                this.state = 423;
                this.match(JPAParser.T__28);
                this.state = 424;
                this.groupby_item();
                this.state = 429;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JPAParser.T__1) {
                    {
                        {
                            this.state = 425;
                            this.match(JPAParser.T__1);
                            this.state = 426;
                            this.groupby_item();
                        }
                    }
                    this.state = 431;
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
    JPAParser.prototype.groupby_item = function () {
        var _localctx = new Groupby_itemContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, JPAParser.RULE_groupby_item);
        try {
            this.state = 434;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 432;
                        this.single_valued_path_expression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 433;
                        this.match(JPAParser.IDENTIFICATION_VARIABLE);
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
    JPAParser.prototype.having_clause = function () {
        var _localctx = new Having_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, JPAParser.RULE_having_clause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 436;
                this.match(JPAParser.T__29);
                this.state = 437;
                this.conditional_expression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.orderby_clause = function () {
        var _localctx = new Orderby_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, JPAParser.RULE_orderby_clause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 439;
                this.match(JPAParser.T__30);
                this.state = 440;
                this.match(JPAParser.T__28);
                this.state = 441;
                this.orderby_item();
                this.state = 446;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JPAParser.T__1) {
                    {
                        {
                            this.state = 442;
                            this.match(JPAParser.T__1);
                            this.state = 443;
                            this.orderby_item();
                        }
                    }
                    this.state = 448;
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
    JPAParser.prototype.orderby_item = function () {
        var _localctx = new Orderby_itemContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, JPAParser.RULE_orderby_item);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 449;
                this.state_field_path_expression();
                this.state = 451;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JPAParser.T__31 || _la === JPAParser.T__32) {
                    {
                        this.state = 450;
                        _la = this._input.LA(1);
                        if (!(_la === JPAParser.T__31 || _la === JPAParser.T__32)) {
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
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.subquery = function () {
        var _localctx = new SubqueryContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, JPAParser.RULE_subquery);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 453;
                this.simple_select_clause();
                this.state = 454;
                this.subquery_from_clause();
                this.state = 456;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JPAParser.T__26) {
                    {
                        this.state = 455;
                        this.where_clause();
                    }
                }
                this.state = 459;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JPAParser.T__27) {
                    {
                        this.state = 458;
                        this.groupby_clause();
                    }
                }
                this.state = 462;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JPAParser.T__29) {
                    {
                        this.state = 461;
                        this.having_clause();
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
    JPAParser.prototype.subquery_from_clause = function () {
        var _localctx = new Subquery_from_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, JPAParser.RULE_subquery_from_clause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 464;
                this.match(JPAParser.T__0);
                this.state = 465;
                this.subselect_identification_variable_declaration();
                this.state = 470;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JPAParser.T__1) {
                    {
                        {
                            this.state = 466;
                            this.match(JPAParser.T__1);
                            this.state = 467;
                            this.subselect_identification_variable_declaration();
                        }
                    }
                    this.state = 472;
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
    JPAParser.prototype.subselect_identification_variable_declaration = function () {
        var _localctx = new Subselect_identification_variable_declarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, JPAParser.RULE_subselect_identification_variable_declaration);
        var _la;
        try {
            this.state = 481;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 48, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 473;
                        this.identification_variable_declaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 474;
                        this.association_path_expression();
                        this.state = 476;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JPAParser.T__2) {
                            {
                                this.state = 475;
                                this.match(JPAParser.T__2);
                            }
                        }
                        this.state = 478;
                        this.match(JPAParser.IDENTIFICATION_VARIABLE);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 480;
                        this.collection_member_declaration();
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
    JPAParser.prototype.association_path_expression = function () {
        var _localctx = new Association_path_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, JPAParser.RULE_association_path_expression);
        try {
            this.state = 485;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 49, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 483;
                        this.collection_valued_path_expression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 484;
                        this.single_valued_association_path_expression();
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
    JPAParser.prototype.simple_select_clause = function () {
        var _localctx = new Simple_select_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, JPAParser.RULE_simple_select_clause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 487;
                this.match(JPAParser.T__17);
                this.state = 489;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JPAParser.T__18) {
                    {
                        this.state = 488;
                        this.match(JPAParser.T__18);
                    }
                }
                this.state = 491;
                this.simple_select_expression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.simple_select_expression = function () {
        var _localctx = new Simple_select_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, JPAParser.RULE_simple_select_expression);
        try {
            this.state = 496;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 51, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 493;
                        this.single_valued_path_expression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 494;
                        this.aggregate_expression();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 495;
                        this.match(JPAParser.IDENTIFICATION_VARIABLE);
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
    JPAParser.prototype.conditional_expression = function () {
        var _localctx = new Conditional_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, JPAParser.RULE_conditional_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 498;
                    this.conditional_term();
                }
                this.state = 503;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JPAParser.T__33) {
                    {
                        {
                            this.state = 499;
                            this.match(JPAParser.T__33);
                            this.state = 500;
                            this.conditional_term();
                        }
                    }
                    this.state = 505;
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
    JPAParser.prototype.conditional_term = function () {
        var _localctx = new Conditional_termContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, JPAParser.RULE_conditional_term);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 506;
                    this.conditional_factor();
                }
                this.state = 511;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JPAParser.T__34) {
                    {
                        {
                            this.state = 507;
                            this.match(JPAParser.T__34);
                            this.state = 508;
                            this.conditional_factor();
                        }
                    }
                    this.state = 513;
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
    JPAParser.prototype.conditional_factor = function () {
        var _localctx = new Conditional_factorContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, JPAParser.RULE_conditional_factor);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 515;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 54, this._ctx)) {
                    case 1:
                        {
                            this.state = 514;
                            this.match(JPAParser.T__35);
                        }
                        break;
                }
                this.state = 517;
                this.conditional_primary();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.conditional_primary = function () {
        var _localctx = new Conditional_primaryContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, JPAParser.RULE_conditional_primary);
        try {
            this.state = 524;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 55, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 519;
                        this.simple_cond_expression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 520;
                        this.match(JPAParser.T__10);
                        this.state = 521;
                        this.conditional_expression();
                        this.state = 522;
                        this.match(JPAParser.T__11);
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
    JPAParser.prototype.simple_cond_expression = function () {
        var _localctx = new Simple_cond_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, JPAParser.RULE_simple_cond_expression);
        try {
            this.state = 534;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 56, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 526;
                        this.comparison_expression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 527;
                        this.between_expression();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 528;
                        this.like_expression();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 529;
                        this.in_expression();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 530;
                        this.null_comparison_expression();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 531;
                        this.empty_collection_comparison_expression();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 532;
                        this.collection_member_expression();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 533;
                        this.exists_expression();
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
    JPAParser.prototype.between_expression = function () {
        var _localctx = new Between_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, JPAParser.RULE_between_expression);
        var _la;
        try {
            this.state = 563;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 536;
                        this.arithmetic_expression();
                        this.state = 538;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JPAParser.T__35) {
                            {
                                this.state = 537;
                                this.match(JPAParser.T__35);
                            }
                        }
                        this.state = 540;
                        this.match(JPAParser.T__36);
                        this.state = 541;
                        this.arithmetic_expression();
                        this.state = 542;
                        this.match(JPAParser.T__34);
                        this.state = 543;
                        this.arithmetic_expression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 545;
                        this.string_expression();
                        this.state = 547;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JPAParser.T__35) {
                            {
                                this.state = 546;
                                this.match(JPAParser.T__35);
                            }
                        }
                        this.state = 549;
                        this.match(JPAParser.T__36);
                        this.state = 550;
                        this.string_expression();
                        this.state = 551;
                        this.match(JPAParser.T__34);
                        this.state = 552;
                        this.string_expression();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 554;
                        this.datetime_expression();
                        this.state = 556;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JPAParser.T__35) {
                            {
                                this.state = 555;
                                this.match(JPAParser.T__35);
                            }
                        }
                        this.state = 558;
                        this.match(JPAParser.T__36);
                        this.state = 559;
                        this.datetime_expression();
                        this.state = 560;
                        this.match(JPAParser.T__34);
                        this.state = 561;
                        this.datetime_expression();
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
    JPAParser.prototype.in_expression = function () {
        var _localctx = new In_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, JPAParser.RULE_in_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 565;
                this.state_field_path_expression();
                this.state = 567;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JPAParser.T__35) {
                    {
                        this.state = 566;
                        this.match(JPAParser.T__35);
                    }
                }
                this.state = 569;
                this.match(JPAParser.T__9);
                this.state = 570;
                this.match(JPAParser.T__10);
                this.state = 580;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case JPAParser.T__1:
                    case JPAParser.T__11:
                    case JPAParser.T__73:
                    case JPAParser.T__74:
                        {
                            this.state = 571;
                            this.in_item();
                            this.state = 576;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === JPAParser.T__1) {
                                {
                                    {
                                        this.state = 572;
                                        this.match(JPAParser.T__1);
                                        this.state = 573;
                                        this.in_item();
                                    }
                                }
                                this.state = 578;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                        break;
                    case JPAParser.T__17:
                        {
                            this.state = 579;
                            this.subquery();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 582;
                this.match(JPAParser.T__11);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.in_item = function () {
        var _localctx = new In_itemContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, JPAParser.RULE_in_item);
        try {
            this.state = 586;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JPAParser.T__1:
                case JPAParser.T__11:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 584;
                        this.literal();
                    }
                    break;
                case JPAParser.T__73:
                case JPAParser.T__74:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 585;
                        this.input_parameter();
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
    JPAParser.prototype.like_expression = function () {
        var _localctx = new Like_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, JPAParser.RULE_like_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 588;
                this.string_expression();
                this.state = 590;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JPAParser.T__35) {
                    {
                        this.state = 589;
                        this.match(JPAParser.T__35);
                    }
                }
                this.state = 592;
                this.match(JPAParser.T__37);
                this.state = 593;
                this.pattern_value();
                this.state = 596;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JPAParser.T__38) {
                    {
                        this.state = 594;
                        this.match(JPAParser.T__38);
                        this.state = 595;
                        this.match(JPAParser.ESCAPE_CHARACTER);
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
    JPAParser.prototype.null_comparison_expression = function () {
        var _localctx = new Null_comparison_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, JPAParser.RULE_null_comparison_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 600;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case JPAParser.IDENTIFICATION_VARIABLE:
                        {
                            this.state = 598;
                            this.single_valued_path_expression();
                        }
                        break;
                    case JPAParser.T__73:
                    case JPAParser.T__74:
                        {
                            this.state = 599;
                            this.input_parameter();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 602;
                this.match(JPAParser.T__39);
                this.state = 604;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JPAParser.T__35) {
                    {
                        this.state = 603;
                        this.match(JPAParser.T__35);
                    }
                }
                this.state = 606;
                this.match(JPAParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.empty_collection_comparison_expression = function () {
        var _localctx = new Empty_collection_comparison_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, JPAParser.RULE_empty_collection_comparison_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 608;
                this.collection_valued_path_expression();
                this.state = 609;
                this.match(JPAParser.T__39);
                this.state = 611;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JPAParser.T__35) {
                    {
                        this.state = 610;
                        this.match(JPAParser.T__35);
                    }
                }
                this.state = 613;
                this.match(JPAParser.T__40);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.collection_member_expression = function () {
        var _localctx = new Collection_member_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, JPAParser.RULE_collection_member_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 615;
                this.entity_expression();
                this.state = 617;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JPAParser.T__35) {
                    {
                        this.state = 616;
                        this.match(JPAParser.T__35);
                    }
                }
                this.state = 619;
                this.match(JPAParser.T__41);
                this.state = 621;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JPAParser.T__42) {
                    {
                        this.state = 620;
                        this.match(JPAParser.T__42);
                    }
                }
                this.state = 623;
                this.collection_valued_path_expression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.exists_expression = function () {
        var _localctx = new Exists_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, JPAParser.RULE_exists_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 626;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JPAParser.T__35) {
                    {
                        this.state = 625;
                        this.match(JPAParser.T__35);
                    }
                }
                this.state = 628;
                this.match(JPAParser.T__43);
                this.state = 629;
                this.match(JPAParser.T__10);
                this.state = 630;
                this.subquery();
                this.state = 631;
                this.match(JPAParser.T__11);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.all_or_any_expression = function () {
        var _localctx = new All_or_any_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, JPAParser.RULE_all_or_any_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 633;
                _la = this._input.LA(1);
                if (!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (JPAParser.T__44 - 45)) | (1 << (JPAParser.T__45 - 45)) | (1 << (JPAParser.T__46 - 45)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 634;
                this.match(JPAParser.T__10);
                this.state = 635;
                this.subquery();
                this.state = 636;
                this.match(JPAParser.T__11);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.comparison_expression = function () {
        var _localctx = new Comparison_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, JPAParser.RULE_comparison_expression);
        var _la;
        try {
            this.state = 674;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 79, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 638;
                        this.string_expression();
                        this.state = 639;
                        this.comparison_operator();
                        this.state = 642;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JPAParser.T__10:
                            case JPAParser.T__21:
                            case JPAParser.T__22:
                            case JPAParser.T__23:
                            case JPAParser.T__24:
                            case JPAParser.T__25:
                            case JPAParser.T__65:
                            case JPAParser.T__66:
                            case JPAParser.T__67:
                            case JPAParser.T__68:
                            case JPAParser.T__69:
                            case JPAParser.T__73:
                            case JPAParser.T__74:
                            case JPAParser.IDENTIFICATION_VARIABLE:
                            case JPAParser.STRINGLITERAL:
                                {
                                    this.state = 640;
                                    this.string_expression();
                                }
                                break;
                            case JPAParser.T__44:
                            case JPAParser.T__45:
                            case JPAParser.T__46:
                                {
                                    this.state = 641;
                                    this.all_or_any_expression();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 644;
                        this.boolean_expression();
                        this.state = 645;
                        _la = this._input.LA(1);
                        if (!(_la === JPAParser.T__14 || _la === JPAParser.T__47)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 648;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JPAParser.T__10:
                            case JPAParser.T__73:
                            case JPAParser.T__74:
                            case JPAParser.T__75:
                            case JPAParser.T__76:
                            case JPAParser.IDENTIFICATION_VARIABLE:
                                {
                                    this.state = 646;
                                    this.boolean_expression();
                                }
                                break;
                            case JPAParser.T__44:
                            case JPAParser.T__45:
                            case JPAParser.T__46:
                                {
                                    this.state = 647;
                                    this.all_or_any_expression();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 650;
                        this.enum_expression();
                        this.state = 651;
                        _la = this._input.LA(1);
                        if (!(_la === JPAParser.T__14 || _la === JPAParser.T__47)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 654;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JPAParser.EOF:
                            case JPAParser.T__1:
                            case JPAParser.T__10:
                            case JPAParser.T__11:
                            case JPAParser.T__14:
                            case JPAParser.T__26:
                            case JPAParser.T__27:
                            case JPAParser.T__29:
                            case JPAParser.T__30:
                            case JPAParser.T__33:
                            case JPAParser.T__34:
                            case JPAParser.T__47:
                            case JPAParser.T__73:
                            case JPAParser.T__74:
                            case JPAParser.IDENTIFICATION_VARIABLE:
                                {
                                    this.state = 652;
                                    this.enum_expression();
                                }
                                break;
                            case JPAParser.T__44:
                            case JPAParser.T__45:
                            case JPAParser.T__46:
                                {
                                    this.state = 653;
                                    this.all_or_any_expression();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 656;
                        this.datetime_expression();
                        this.state = 657;
                        this.comparison_operator();
                        this.state = 660;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JPAParser.T__10:
                            case JPAParser.T__21:
                            case JPAParser.T__22:
                            case JPAParser.T__23:
                            case JPAParser.T__24:
                            case JPAParser.T__25:
                            case JPAParser.T__62:
                            case JPAParser.T__63:
                            case JPAParser.T__64:
                            case JPAParser.T__73:
                            case JPAParser.T__74:
                            case JPAParser.IDENTIFICATION_VARIABLE:
                                {
                                    this.state = 658;
                                    this.datetime_expression();
                                }
                                break;
                            case JPAParser.T__44:
                            case JPAParser.T__45:
                            case JPAParser.T__46:
                                {
                                    this.state = 659;
                                    this.all_or_any_expression();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 662;
                        this.entity_expression();
                        this.state = 663;
                        _la = this._input.LA(1);
                        if (!(_la === JPAParser.T__14 || _la === JPAParser.T__47)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 666;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JPAParser.T__73:
                            case JPAParser.T__74:
                            case JPAParser.IDENTIFICATION_VARIABLE:
                                {
                                    this.state = 664;
                                    this.entity_expression();
                                }
                                break;
                            case JPAParser.T__44:
                            case JPAParser.T__45:
                            case JPAParser.T__46:
                                {
                                    this.state = 665;
                                    this.all_or_any_expression();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 668;
                        this.arithmetic_expression();
                        this.state = 669;
                        this.comparison_operator();
                        this.state = 672;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JPAParser.EOF:
                            case JPAParser.T__1:
                            case JPAParser.T__10:
                            case JPAParser.T__11:
                            case JPAParser.T__14:
                            case JPAParser.T__21:
                            case JPAParser.T__22:
                            case JPAParser.T__23:
                            case JPAParser.T__24:
                            case JPAParser.T__25:
                            case JPAParser.T__26:
                            case JPAParser.T__27:
                            case JPAParser.T__29:
                            case JPAParser.T__30:
                            case JPAParser.T__33:
                            case JPAParser.T__34:
                            case JPAParser.T__35:
                            case JPAParser.T__36:
                            case JPAParser.T__47:
                            case JPAParser.T__48:
                            case JPAParser.T__49:
                            case JPAParser.T__50:
                            case JPAParser.T__51:
                            case JPAParser.T__52:
                            case JPAParser.T__53:
                            case JPAParser.T__54:
                            case JPAParser.T__55:
                            case JPAParser.T__56:
                            case JPAParser.T__57:
                            case JPAParser.T__58:
                            case JPAParser.T__59:
                            case JPAParser.T__60:
                            case JPAParser.T__61:
                            case JPAParser.T__73:
                            case JPAParser.T__74:
                            case JPAParser.IDENTIFICATION_VARIABLE:
                                {
                                    this.state = 670;
                                    this.arithmetic_expression();
                                }
                                break;
                            case JPAParser.T__44:
                            case JPAParser.T__45:
                            case JPAParser.T__46:
                                {
                                    this.state = 671;
                                    this.all_or_any_expression();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
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
    JPAParser.prototype.comparison_operator = function () {
        var _localctx = new Comparison_operatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, JPAParser.RULE_comparison_operator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 676;
                _la = this._input.LA(1);
                if (!(_la === JPAParser.T__14 || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (JPAParser.T__47 - 48)) | (1 << (JPAParser.T__48 - 48)) | (1 << (JPAParser.T__49 - 48)) | (1 << (JPAParser.T__50 - 48)) | (1 << (JPAParser.T__51 - 48)))) !== 0))) {
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
    JPAParser.prototype.arithmetic_expression = function () {
        var _localctx = new Arithmetic_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, JPAParser.RULE_arithmetic_expression);
        try {
            this.state = 683;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 80, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 678;
                        this.simple_arithmetic_expression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 679;
                        this.match(JPAParser.T__10);
                        this.state = 680;
                        this.subquery();
                        this.state = 681;
                        this.match(JPAParser.T__11);
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
    JPAParser.prototype.simple_arithmetic_expression = function () {
        var _localctx = new Simple_arithmetic_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, JPAParser.RULE_simple_arithmetic_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 685;
                    this.arithmetic_term();
                }
                this.state = 690;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JPAParser.T__52 || _la === JPAParser.T__53) {
                    {
                        {
                            this.state = 686;
                            _la = this._input.LA(1);
                            if (!(_la === JPAParser.T__52 || _la === JPAParser.T__53)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 687;
                            this.arithmetic_term();
                        }
                    }
                    this.state = 692;
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
    JPAParser.prototype.arithmetic_term = function () {
        var _localctx = new Arithmetic_termContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, JPAParser.RULE_arithmetic_term);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 693;
                    this.arithmetic_factor();
                }
                this.state = 698;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JPAParser.T__54 || _la === JPAParser.T__55) {
                    {
                        {
                            this.state = 694;
                            _la = this._input.LA(1);
                            if (!(_la === JPAParser.T__54 || _la === JPAParser.T__55)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 695;
                            this.arithmetic_factor();
                        }
                    }
                    this.state = 700;
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
    JPAParser.prototype.arithmetic_factor = function () {
        var _localctx = new Arithmetic_factorContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, JPAParser.RULE_arithmetic_factor);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 702;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 83, this._ctx)) {
                    case 1:
                        {
                            this.state = 701;
                            _la = this._input.LA(1);
                            if (!(_la === JPAParser.T__52 || _la === JPAParser.T__53)) {
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
                        break;
                }
                this.state = 704;
                this.arithmetic_primary();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.arithmetic_primary = function () {
        var _localctx = new Arithmetic_primaryContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, JPAParser.RULE_arithmetic_primary);
        try {
            this.state = 715;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JPAParser.IDENTIFICATION_VARIABLE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 706;
                        this.state_field_path_expression();
                    }
                    break;
                case JPAParser.EOF:
                case JPAParser.T__1:
                case JPAParser.T__11:
                case JPAParser.T__14:
                case JPAParser.T__26:
                case JPAParser.T__27:
                case JPAParser.T__29:
                case JPAParser.T__30:
                case JPAParser.T__33:
                case JPAParser.T__34:
                case JPAParser.T__35:
                case JPAParser.T__36:
                case JPAParser.T__47:
                case JPAParser.T__48:
                case JPAParser.T__49:
                case JPAParser.T__50:
                case JPAParser.T__51:
                case JPAParser.T__52:
                case JPAParser.T__53:
                case JPAParser.T__54:
                case JPAParser.T__55:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 707;
                        this.numeric_literal();
                    }
                    break;
                case JPAParser.T__10:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 708;
                        this.match(JPAParser.T__10);
                        this.state = 709;
                        this.simple_arithmetic_expression();
                        this.state = 710;
                        this.match(JPAParser.T__11);
                    }
                    break;
                case JPAParser.T__73:
                case JPAParser.T__74:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 712;
                        this.input_parameter();
                    }
                    break;
                case JPAParser.T__56:
                case JPAParser.T__57:
                case JPAParser.T__58:
                case JPAParser.T__59:
                case JPAParser.T__60:
                case JPAParser.T__61:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 713;
                        this.functions_returning_numerics();
                    }
                    break;
                case JPAParser.T__21:
                case JPAParser.T__22:
                case JPAParser.T__23:
                case JPAParser.T__24:
                case JPAParser.T__25:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 714;
                        this.aggregate_expression();
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
    JPAParser.prototype.string_expression = function () {
        var _localctx = new String_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, JPAParser.RULE_string_expression);
        try {
            this.state = 722;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JPAParser.T__21:
                case JPAParser.T__22:
                case JPAParser.T__23:
                case JPAParser.T__24:
                case JPAParser.T__25:
                case JPAParser.T__65:
                case JPAParser.T__66:
                case JPAParser.T__67:
                case JPAParser.T__68:
                case JPAParser.T__69:
                case JPAParser.T__73:
                case JPAParser.T__74:
                case JPAParser.IDENTIFICATION_VARIABLE:
                case JPAParser.STRINGLITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 717;
                        this.string_primary();
                    }
                    break;
                case JPAParser.T__10:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 718;
                        this.match(JPAParser.T__10);
                        this.state = 719;
                        this.subquery();
                        this.state = 720;
                        this.match(JPAParser.T__11);
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
    JPAParser.prototype.string_primary = function () {
        var _localctx = new String_primaryContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, JPAParser.RULE_string_primary);
        try {
            this.state = 729;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JPAParser.IDENTIFICATION_VARIABLE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 724;
                        this.state_field_path_expression();
                    }
                    break;
                case JPAParser.STRINGLITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 725;
                        this.match(JPAParser.STRINGLITERAL);
                    }
                    break;
                case JPAParser.T__73:
                case JPAParser.T__74:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 726;
                        this.input_parameter();
                    }
                    break;
                case JPAParser.T__65:
                case JPAParser.T__66:
                case JPAParser.T__67:
                case JPAParser.T__68:
                case JPAParser.T__69:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 727;
                        this.functions_returning_strings();
                    }
                    break;
                case JPAParser.T__21:
                case JPAParser.T__22:
                case JPAParser.T__23:
                case JPAParser.T__24:
                case JPAParser.T__25:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 728;
                        this.aggregate_expression();
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
    JPAParser.prototype.datetime_expression = function () {
        var _localctx = new Datetime_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, JPAParser.RULE_datetime_expression);
        try {
            this.state = 736;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JPAParser.T__21:
                case JPAParser.T__22:
                case JPAParser.T__23:
                case JPAParser.T__24:
                case JPAParser.T__25:
                case JPAParser.T__62:
                case JPAParser.T__63:
                case JPAParser.T__64:
                case JPAParser.T__73:
                case JPAParser.T__74:
                case JPAParser.IDENTIFICATION_VARIABLE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 731;
                        this.datetime_primary();
                    }
                    break;
                case JPAParser.T__10:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 732;
                        this.match(JPAParser.T__10);
                        this.state = 733;
                        this.subquery();
                        this.state = 734;
                        this.match(JPAParser.T__11);
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
    JPAParser.prototype.datetime_primary = function () {
        var _localctx = new Datetime_primaryContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, JPAParser.RULE_datetime_primary);
        try {
            this.state = 742;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JPAParser.IDENTIFICATION_VARIABLE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 738;
                        this.state_field_path_expression();
                    }
                    break;
                case JPAParser.T__73:
                case JPAParser.T__74:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 739;
                        this.input_parameter();
                    }
                    break;
                case JPAParser.T__62:
                case JPAParser.T__63:
                case JPAParser.T__64:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 740;
                        this.functions_returning_datetime();
                    }
                    break;
                case JPAParser.T__21:
                case JPAParser.T__22:
                case JPAParser.T__23:
                case JPAParser.T__24:
                case JPAParser.T__25:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 741;
                        this.aggregate_expression();
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
    JPAParser.prototype.boolean_expression = function () {
        var _localctx = new Boolean_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, JPAParser.RULE_boolean_expression);
        try {
            this.state = 749;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JPAParser.T__73:
                case JPAParser.T__74:
                case JPAParser.T__75:
                case JPAParser.T__76:
                case JPAParser.IDENTIFICATION_VARIABLE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 744;
                        this.boolean_primary();
                    }
                    break;
                case JPAParser.T__10:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 745;
                        this.match(JPAParser.T__10);
                        this.state = 746;
                        this.subquery();
                        this.state = 747;
                        this.match(JPAParser.T__11);
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
    JPAParser.prototype.boolean_primary = function () {
        var _localctx = new Boolean_primaryContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, JPAParser.RULE_boolean_primary);
        try {
            this.state = 754;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JPAParser.IDENTIFICATION_VARIABLE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 751;
                        this.state_field_path_expression();
                    }
                    break;
                case JPAParser.T__75:
                case JPAParser.T__76:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 752;
                        this.boolean_literal();
                    }
                    break;
                case JPAParser.T__73:
                case JPAParser.T__74:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 753;
                        this.input_parameter();
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
    JPAParser.prototype.enum_expression = function () {
        var _localctx = new Enum_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, JPAParser.RULE_enum_expression);
        try {
            this.state = 761;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JPAParser.EOF:
                case JPAParser.T__1:
                case JPAParser.T__11:
                case JPAParser.T__14:
                case JPAParser.T__26:
                case JPAParser.T__27:
                case JPAParser.T__29:
                case JPAParser.T__30:
                case JPAParser.T__33:
                case JPAParser.T__34:
                case JPAParser.T__47:
                case JPAParser.T__73:
                case JPAParser.T__74:
                case JPAParser.IDENTIFICATION_VARIABLE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 756;
                        this.enum_primary();
                    }
                    break;
                case JPAParser.T__10:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 757;
                        this.match(JPAParser.T__10);
                        this.state = 758;
                        this.subquery();
                        this.state = 759;
                        this.match(JPAParser.T__11);
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
    JPAParser.prototype.enum_primary = function () {
        var _localctx = new Enum_primaryContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, JPAParser.RULE_enum_primary);
        try {
            this.state = 766;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JPAParser.IDENTIFICATION_VARIABLE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 763;
                        this.state_field_path_expression();
                    }
                    break;
                case JPAParser.EOF:
                case JPAParser.T__1:
                case JPAParser.T__11:
                case JPAParser.T__14:
                case JPAParser.T__26:
                case JPAParser.T__27:
                case JPAParser.T__29:
                case JPAParser.T__30:
                case JPAParser.T__33:
                case JPAParser.T__34:
                case JPAParser.T__47:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 764;
                        this.enum_literal();
                    }
                    break;
                case JPAParser.T__73:
                case JPAParser.T__74:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 765;
                        this.input_parameter();
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
    JPAParser.prototype.entity_expression = function () {
        var _localctx = new Entity_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, JPAParser.RULE_entity_expression);
        try {
            this.state = 770;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 93, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 768;
                        this.single_valued_association_path_expression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 769;
                        this.simple_entity_expression();
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
    JPAParser.prototype.simple_entity_expression = function () {
        var _localctx = new Simple_entity_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, JPAParser.RULE_simple_entity_expression);
        try {
            this.state = 774;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JPAParser.IDENTIFICATION_VARIABLE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 772;
                        this.match(JPAParser.IDENTIFICATION_VARIABLE);
                    }
                    break;
                case JPAParser.T__73:
                case JPAParser.T__74:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 773;
                        this.input_parameter();
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
    JPAParser.prototype.functions_returning_numerics = function () {
        var _localctx = new Functions_returning_numericsContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, JPAParser.RULE_functions_returning_numerics);
        var _la;
        try {
            this.state = 814;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JPAParser.T__56:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 776;
                        this.match(JPAParser.T__56);
                        this.state = 777;
                        this.match(JPAParser.T__10);
                        this.state = 778;
                        this.string_primary();
                        this.state = 779;
                        this.match(JPAParser.T__11);
                    }
                    break;
                case JPAParser.T__57:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 781;
                        this.match(JPAParser.T__57);
                        this.state = 782;
                        this.match(JPAParser.T__10);
                        this.state = 783;
                        this.string_primary();
                        this.state = 784;
                        this.match(JPAParser.T__1);
                        this.state = 785;
                        this.string_primary();
                        this.state = 788;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JPAParser.T__1) {
                            {
                                this.state = 786;
                                this.match(JPAParser.T__1);
                                this.state = 787;
                                this.simple_arithmetic_expression();
                            }
                        }
                        this.state = 790;
                        this.match(JPAParser.T__11);
                    }
                    break;
                case JPAParser.T__58:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 792;
                        this.match(JPAParser.T__58);
                        this.state = 793;
                        this.match(JPAParser.T__10);
                        this.state = 794;
                        this.simple_arithmetic_expression();
                        this.state = 795;
                        this.match(JPAParser.T__11);
                    }
                    break;
                case JPAParser.T__59:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 797;
                        this.match(JPAParser.T__59);
                        this.state = 798;
                        this.match(JPAParser.T__10);
                        this.state = 799;
                        this.simple_arithmetic_expression();
                        this.state = 800;
                        this.match(JPAParser.T__11);
                    }
                    break;
                case JPAParser.T__60:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 802;
                        this.match(JPAParser.T__60);
                        this.state = 803;
                        this.match(JPAParser.T__10);
                        this.state = 804;
                        this.simple_arithmetic_expression();
                        this.state = 805;
                        this.match(JPAParser.T__1);
                        this.state = 806;
                        this.simple_arithmetic_expression();
                        this.state = 807;
                        this.match(JPAParser.T__11);
                    }
                    break;
                case JPAParser.T__61:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 809;
                        this.match(JPAParser.T__61);
                        this.state = 810;
                        this.match(JPAParser.T__10);
                        this.state = 811;
                        this.collection_valued_path_expression();
                        this.state = 812;
                        this.match(JPAParser.T__11);
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
    JPAParser.prototype.functions_returning_datetime = function () {
        var _localctx = new Functions_returning_datetimeContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, JPAParser.RULE_functions_returning_datetime);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 816;
                _la = this._input.LA(1);
                if (!(((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & ((1 << (JPAParser.T__62 - 63)) | (1 << (JPAParser.T__63 - 63)) | (1 << (JPAParser.T__64 - 63)))) !== 0))) {
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
    JPAParser.prototype.functions_returning_strings = function () {
        var _localctx = new Functions_returning_stringsContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, JPAParser.RULE_functions_returning_strings);
        var _la;
        try {
            this.state = 858;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JPAParser.T__65:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 818;
                        this.match(JPAParser.T__65);
                        this.state = 819;
                        this.match(JPAParser.T__10);
                        this.state = 820;
                        this.string_primary();
                        this.state = 821;
                        this.match(JPAParser.T__1);
                        this.state = 822;
                        this.string_primary();
                        this.state = 823;
                        this.match(JPAParser.T__11);
                    }
                    break;
                case JPAParser.T__66:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 825;
                        this.match(JPAParser.T__66);
                        this.state = 826;
                        this.match(JPAParser.T__10);
                        this.state = 827;
                        this.string_primary();
                        this.state = 828;
                        this.match(JPAParser.T__1);
                        this.state = 829;
                        this.simple_arithmetic_expression();
                        this.state = 830;
                        this.match(JPAParser.T__1);
                        this.state = 831;
                        this.simple_arithmetic_expression();
                        this.state = 832;
                        this.match(JPAParser.T__11);
                    }
                    break;
                case JPAParser.T__67:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 834;
                        this.match(JPAParser.T__67);
                        this.state = 835;
                        this.match(JPAParser.T__10);
                        this.state = 843;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JPAParser.T__0 || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (JPAParser.T__70 - 71)) | (1 << (JPAParser.T__71 - 71)) | (1 << (JPAParser.T__72 - 71)) | (1 << (JPAParser.TRIM_CHARACTER - 71)))) !== 0)) {
                            {
                                this.state = 837;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (JPAParser.T__70 - 71)) | (1 << (JPAParser.T__71 - 71)) | (1 << (JPAParser.T__72 - 71)))) !== 0)) {
                                    {
                                        this.state = 836;
                                        this.trim_specification();
                                    }
                                }
                                this.state = 840;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === JPAParser.TRIM_CHARACTER) {
                                    {
                                        this.state = 839;
                                        this.match(JPAParser.TRIM_CHARACTER);
                                    }
                                }
                                this.state = 842;
                                this.match(JPAParser.T__0);
                            }
                        }
                        this.state = 845;
                        this.string_primary();
                        this.state = 846;
                        this.match(JPAParser.T__11);
                    }
                    break;
                case JPAParser.T__68:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 848;
                        this.match(JPAParser.T__68);
                        this.state = 849;
                        this.match(JPAParser.T__10);
                        this.state = 850;
                        this.string_primary();
                        this.state = 851;
                        this.match(JPAParser.T__11);
                    }
                    break;
                case JPAParser.T__69:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 853;
                        this.match(JPAParser.T__69);
                        this.state = 854;
                        this.match(JPAParser.T__10);
                        this.state = 855;
                        this.string_primary();
                        this.state = 856;
                        this.match(JPAParser.T__11);
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
    JPAParser.prototype.trim_specification = function () {
        var _localctx = new Trim_specificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, JPAParser.RULE_trim_specification);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 860;
                _la = this._input.LA(1);
                if (!(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (JPAParser.T__70 - 71)) | (1 << (JPAParser.T__71 - 71)) | (1 << (JPAParser.T__72 - 71)))) !== 0))) {
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
    JPAParser.prototype.numeric_literal = function () {
        var _localctx = new Numeric_literalContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, JPAParser.RULE_numeric_literal);
        try {
            this.enterOuterAlt(_localctx, 1);
            // tslint:disable-next-line:no-empty
            {
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.pattern_value = function () {
        var _localctx = new Pattern_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, JPAParser.RULE_pattern_value);
        try {
            this.enterOuterAlt(_localctx, 1);
            // tslint:disable-next-line:no-empty
            {
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.input_parameter = function () {
        var _localctx = new Input_parameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, JPAParser.RULE_input_parameter);
        try {
            this.state = 870;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JPAParser.T__73:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 866;
                        this.match(JPAParser.T__73);
                        this.state = 867;
                        this.match(JPAParser.INT_NUMERAL);
                    }
                    break;
                case JPAParser.T__74:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 868;
                        this.match(JPAParser.T__74);
                        this.state = 869;
                        this.match(JPAParser.IDENTIFICATION_VARIABLE);
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
    JPAParser.prototype.literal = function () {
        var _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, JPAParser.RULE_literal);
        try {
            this.enterOuterAlt(_localctx, 1);
            // tslint:disable-next-line:no-empty
            {
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.constructor_name = function () {
        var _localctx = new Constructor_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, JPAParser.RULE_constructor_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            // tslint:disable-next-line:no-empty
            {
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.enum_literal = function () {
        var _localctx = new Enum_literalContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, JPAParser.RULE_enum_literal);
        try {
            this.enterOuterAlt(_localctx, 1);
            // tslint:disable-next-line:no-empty
            {
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.boolean_literal = function () {
        var _localctx = new Boolean_literalContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, JPAParser.RULE_boolean_literal);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 878;
                _la = this._input.LA(1);
                if (!(_la === JPAParser.T__75 || _la === JPAParser.T__76)) {
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
    JPAParser.prototype.simple_state_field = function () {
        var _localctx = new Simple_state_fieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, JPAParser.RULE_simple_state_field);
        try {
            this.enterOuterAlt(_localctx, 1);
            // tslint:disable-next-line:no-empty
            {
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.embedded_class_state_field = function () {
        var _localctx = new Embedded_class_state_fieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, JPAParser.RULE_embedded_class_state_field);
        try {
            this.enterOuterAlt(_localctx, 1);
            // tslint:disable-next-line:no-empty
            {
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.single_valued_association_field = function () {
        var _localctx = new Single_valued_association_fieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, JPAParser.RULE_single_valued_association_field);
        try {
            this.enterOuterAlt(_localctx, 1);
            // tslint:disable-next-line:no-empty
            {
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.collection_valued_association_field = function () {
        var _localctx = new Collection_valued_association_fieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, JPAParser.RULE_collection_valued_association_field);
        try {
            this.enterOuterAlt(_localctx, 1);
            // tslint:disable-next-line:no-empty
            {
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JPAParser.prototype.abstract_schema_name = function () {
        var _localctx = new Abstract_schema_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, JPAParser.RULE_abstract_schema_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            // tslint:disable-next-line:no-empty
            {
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(JPAParser, "_ATN", {
        get: function () {
            if (!JPAParser.__ATN) {
                JPAParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(JPAParser._serializedATN));
            }
            return JPAParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    JPAParser.T__0 = 1;
    JPAParser.T__1 = 2;
    JPAParser.T__2 = 3;
    JPAParser.T__3 = 4;
    JPAParser.T__4 = 5;
    JPAParser.T__5 = 6;
    JPAParser.T__6 = 7;
    JPAParser.T__7 = 8;
    JPAParser.T__8 = 9;
    JPAParser.T__9 = 10;
    JPAParser.T__10 = 11;
    JPAParser.T__11 = 12;
    JPAParser.T__12 = 13;
    JPAParser.T__13 = 14;
    JPAParser.T__14 = 15;
    JPAParser.T__15 = 16;
    JPAParser.T__16 = 17;
    JPAParser.T__17 = 18;
    JPAParser.T__18 = 19;
    JPAParser.T__19 = 20;
    JPAParser.T__20 = 21;
    JPAParser.T__21 = 22;
    JPAParser.T__22 = 23;
    JPAParser.T__23 = 24;
    JPAParser.T__24 = 25;
    JPAParser.T__25 = 26;
    JPAParser.T__26 = 27;
    JPAParser.T__27 = 28;
    JPAParser.T__28 = 29;
    JPAParser.T__29 = 30;
    JPAParser.T__30 = 31;
    JPAParser.T__31 = 32;
    JPAParser.T__32 = 33;
    JPAParser.T__33 = 34;
    JPAParser.T__34 = 35;
    JPAParser.T__35 = 36;
    JPAParser.T__36 = 37;
    JPAParser.T__37 = 38;
    JPAParser.T__38 = 39;
    JPAParser.T__39 = 40;
    JPAParser.T__40 = 41;
    JPAParser.T__41 = 42;
    JPAParser.T__42 = 43;
    JPAParser.T__43 = 44;
    JPAParser.T__44 = 45;
    JPAParser.T__45 = 46;
    JPAParser.T__46 = 47;
    JPAParser.T__47 = 48;
    JPAParser.T__48 = 49;
    JPAParser.T__49 = 50;
    JPAParser.T__50 = 51;
    JPAParser.T__51 = 52;
    JPAParser.T__52 = 53;
    JPAParser.T__53 = 54;
    JPAParser.T__54 = 55;
    JPAParser.T__55 = 56;
    JPAParser.T__56 = 57;
    JPAParser.T__57 = 58;
    JPAParser.T__58 = 59;
    JPAParser.T__59 = 60;
    JPAParser.T__60 = 61;
    JPAParser.T__61 = 62;
    JPAParser.T__62 = 63;
    JPAParser.T__63 = 64;
    JPAParser.T__64 = 65;
    JPAParser.T__65 = 66;
    JPAParser.T__66 = 67;
    JPAParser.T__67 = 68;
    JPAParser.T__68 = 69;
    JPAParser.T__69 = 70;
    JPAParser.T__70 = 71;
    JPAParser.T__71 = 72;
    JPAParser.T__72 = 73;
    JPAParser.T__73 = 74;
    JPAParser.T__74 = 75;
    JPAParser.T__75 = 76;
    JPAParser.T__76 = 77;
    JPAParser.IDENTIFICATION_VARIABLE = 78;
    JPAParser.CHARACTER = 79;
    JPAParser.STRINGLITERAL = 80;
    JPAParser.ESCAPE_CHARACTER = 81;
    JPAParser.WS = 82;
    JPAParser.TRIM_CHARACTER = 83;
    JPAParser.INT_NUMERAL = 84;
    JPAParser.RULE_ql_statement = 0;
    JPAParser.RULE_select_statement = 1;
    JPAParser.RULE_update_statement = 2;
    JPAParser.RULE_delete_statement = 3;
    JPAParser.RULE_from_clause = 4;
    JPAParser.RULE_identification_variable_declaration = 5;
    JPAParser.RULE_range_variable_declaration = 6;
    JPAParser.RULE_join = 7;
    JPAParser.RULE_fetch_join = 8;
    JPAParser.RULE_join_spec = 9;
    JPAParser.RULE_join_association_path_expression = 10;
    JPAParser.RULE_join_collection_valued_path_expression = 11;
    JPAParser.RULE_join_single_valued_association_path_expression = 12;
    JPAParser.RULE_collection_member_declaration = 13;
    JPAParser.RULE_single_valued_path_expression = 14;
    JPAParser.RULE_state_field_path_expression = 15;
    JPAParser.RULE_single_valued_association_path_expression = 16;
    JPAParser.RULE_collection_valued_path_expression = 17;
    JPAParser.RULE_state_field = 18;
    JPAParser.RULE_update_clause = 19;
    JPAParser.RULE_update_item = 20;
    JPAParser.RULE_new_value = 21;
    JPAParser.RULE_delete_clause = 22;
    JPAParser.RULE_select_clause = 23;
    JPAParser.RULE_select_expression = 24;
    JPAParser.RULE_constructor_expression = 25;
    JPAParser.RULE_constructor_item = 26;
    JPAParser.RULE_aggregate_expression = 27;
    JPAParser.RULE_where_clause = 28;
    JPAParser.RULE_groupby_clause = 29;
    JPAParser.RULE_groupby_item = 30;
    JPAParser.RULE_having_clause = 31;
    JPAParser.RULE_orderby_clause = 32;
    JPAParser.RULE_orderby_item = 33;
    JPAParser.RULE_subquery = 34;
    JPAParser.RULE_subquery_from_clause = 35;
    JPAParser.RULE_subselect_identification_variable_declaration = 36;
    JPAParser.RULE_association_path_expression = 37;
    JPAParser.RULE_simple_select_clause = 38;
    JPAParser.RULE_simple_select_expression = 39;
    JPAParser.RULE_conditional_expression = 40;
    JPAParser.RULE_conditional_term = 41;
    JPAParser.RULE_conditional_factor = 42;
    JPAParser.RULE_conditional_primary = 43;
    JPAParser.RULE_simple_cond_expression = 44;
    JPAParser.RULE_between_expression = 45;
    JPAParser.RULE_in_expression = 46;
    JPAParser.RULE_in_item = 47;
    JPAParser.RULE_like_expression = 48;
    JPAParser.RULE_null_comparison_expression = 49;
    JPAParser.RULE_empty_collection_comparison_expression = 50;
    JPAParser.RULE_collection_member_expression = 51;
    JPAParser.RULE_exists_expression = 52;
    JPAParser.RULE_all_or_any_expression = 53;
    JPAParser.RULE_comparison_expression = 54;
    JPAParser.RULE_comparison_operator = 55;
    JPAParser.RULE_arithmetic_expression = 56;
    JPAParser.RULE_simple_arithmetic_expression = 57;
    JPAParser.RULE_arithmetic_term = 58;
    JPAParser.RULE_arithmetic_factor = 59;
    JPAParser.RULE_arithmetic_primary = 60;
    JPAParser.RULE_string_expression = 61;
    JPAParser.RULE_string_primary = 62;
    JPAParser.RULE_datetime_expression = 63;
    JPAParser.RULE_datetime_primary = 64;
    JPAParser.RULE_boolean_expression = 65;
    JPAParser.RULE_boolean_primary = 66;
    JPAParser.RULE_enum_expression = 67;
    JPAParser.RULE_enum_primary = 68;
    JPAParser.RULE_entity_expression = 69;
    JPAParser.RULE_simple_entity_expression = 70;
    JPAParser.RULE_functions_returning_numerics = 71;
    JPAParser.RULE_functions_returning_datetime = 72;
    JPAParser.RULE_functions_returning_strings = 73;
    JPAParser.RULE_trim_specification = 74;
    JPAParser.RULE_numeric_literal = 75;
    JPAParser.RULE_pattern_value = 76;
    JPAParser.RULE_input_parameter = 77;
    JPAParser.RULE_literal = 78;
    JPAParser.RULE_constructor_name = 79;
    JPAParser.RULE_enum_literal = 80;
    JPAParser.RULE_boolean_literal = 81;
    JPAParser.RULE_simple_state_field = 82;
    JPAParser.RULE_embedded_class_state_field = 83;
    JPAParser.RULE_single_valued_association_field = 84;
    JPAParser.RULE_collection_valued_association_field = 85;
    JPAParser.RULE_abstract_schema_name = 86;
    // tslint:disable:no-trailing-whitespace
    JPAParser.ruleNames = [
        "ql_statement", "select_statement", "update_statement", "delete_statement",
        "from_clause", "identification_variable_declaration", "range_variable_declaration",
        "join", "fetch_join", "join_spec", "join_association_path_expression",
        "join_collection_valued_path_expression", "join_single_valued_association_path_expression",
        "collection_member_declaration", "single_valued_path_expression", "state_field_path_expression",
        "single_valued_association_path_expression", "collection_valued_path_expression",
        "state_field", "update_clause", "update_item", "new_value", "delete_clause",
        "select_clause", "select_expression", "constructor_expression", "constructor_item",
        "aggregate_expression", "where_clause", "groupby_clause", "groupby_item",
        "having_clause", "orderby_clause", "orderby_item", "subquery", "subquery_from_clause",
        "subselect_identification_variable_declaration", "association_path_expression",
        "simple_select_clause", "simple_select_expression", "conditional_expression",
        "conditional_term", "conditional_factor", "conditional_primary", "simple_cond_expression",
        "between_expression", "in_expression", "in_item", "like_expression", "null_comparison_expression",
        "empty_collection_comparison_expression", "collection_member_expression",
        "exists_expression", "all_or_any_expression", "comparison_expression",
        "comparison_operator", "arithmetic_expression", "simple_arithmetic_expression",
        "arithmetic_term", "arithmetic_factor", "arithmetic_primary", "string_expression",
        "string_primary", "datetime_expression", "datetime_primary", "boolean_expression",
        "boolean_primary", "enum_expression", "enum_primary", "entity_expression",
        "simple_entity_expression", "functions_returning_numerics", "functions_returning_datetime",
        "functions_returning_strings", "trim_specification", "numeric_literal",
        "pattern_value", "input_parameter", "literal", "constructor_name", "enum_literal",
        "boolean_literal", "simple_state_field", "embedded_class_state_field",
        "single_valued_association_field", "collection_valued_association_field",
        "abstract_schema_name",
    ];
    JPAParser._LITERAL_NAMES = [
        undefined, "'FROM'", "','", "'AS'", "'FETCH'", "'LEFT'", "'OUTER'", "'INNER'",
        "'JOIN'", "'.'", "'IN'", "'('", "')'", "'UPDATE'", "'SET'", "'='", "'NULL'",
        "'DELETE'", "'SELECT'", "'DISTINCT'", "'OBJECT'", "'NEW'", "'AVG'", "'MAX'",
        "'MIN'", "'SUM'", "'COUNT'", "'WHERE'", "'GROUP'", "'BY'", "'HAVING'",
        "'ORDER'", "'ASC'", "'DESC'", "'OR'", "'AND'", "'NOT'", "'BETWEEN'", "'LIKE'",
        "'ESCAPE'", "'IS'", "'EMPTY'", "'MEMBER'", "'OF'", "'EXISTS'", "'ALL'",
        "'ANY'", "'SOME'", "'<>'", "'>'", "'>='", "'<'", "'<='", "'+'", "'-'",
        "'*'", "'/'", "'LENGTH'", "'LOCATE'", "'ABS'", "'SQRT'", "'MOD'", "'SIZE'",
        "'CURRENT_DATE'", "'CURRENT_TIME'", "'CURRENT_TIMESTAMP'", "'CONCAT'",
        "'SUBSTRING'", "'TRIM'", "'LOWER'", "'UPPER'", "'LEADING'", "'TRAILING'",
        "'BOTH'", "'?'", "':'", "'true'", "'false'",
    ];
    JPAParser._SYMBOLIC_NAMES = [
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
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "IDENTIFICATION_VARIABLE", "CHARACTER", "STRINGLITERAL", "ESCAPE_CHARACTER",
        "WS", "TRIM_CHARACTER", "INT_NUMERAL",
    ];
    JPAParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(JPAParser._LITERAL_NAMES, JPAParser._SYMBOLIC_NAMES, []);
    JPAParser._serializedATNSegments = 2;
    JPAParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03V\u037D\x04\x02" +
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
        "X\tX\x03\x02\x03\x02\x03\x02\x05\x02\xB4\n\x02\x03\x03\x03\x03\x03\x03" +
        "\x05\x03\xB9\n\x03\x03\x03\x05\x03\xBC\n\x03\x03\x03\x05\x03\xBF\n\x03" +
        "\x03\x03\x05\x03\xC2\n\x03\x03\x04\x03\x04\x05\x04\xC6\n\x04\x03\x05\x03" +
        "\x05\x05\x05\xCA\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06" +
        "\xD1\n\x06\x07\x06\xD3\n\x06\f\x06\x0E\x06\xD6\v\x06\x03\x07\x03\x07\x03" +
        "\x07\x07\x07\xDB\n\x07\f\x07\x0E\x07\xDE\v\x07\x03\b\x03\b\x05\b\xE2\n" +
        "\b\x03\b\x03\b\x03\t\x03\t\x03\t\x05\t\xE9\n\t\x03\t\x03\t\x03\n\x03\n" +
        "\x03\n\x03\n\x03\v\x03\v\x05\v\xF3\n\v\x03\v\x05\v\xF6\n\v\x03\v\x03\v" +
        "\x03\f\x03\f\x05\f\xFC\n\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03" +
        "\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u010B\n\x0F" +
        "\x03\x0F\x03\x0F\x03\x10\x03\x10\x05\x10\u0111\n\x10\x03\x11\x03\x11\x05" +
        "\x11\u0115\n\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x07\x12\u011F\n\x12\f\x12\x0E\x12\u0122\v\x12\x03\x12\x03\x12" +
        "\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u012B\n\x13\f\x13\x0E" +
        "\x13\u012E\v\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x07\x14\u0135" +
        "\n\x14\f\x14\x0E\x14\u0138\v\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15" +
        "\x05\x15\u013F\n\x15\x03\x15\x05\x15\u0142\n\x15\x03\x15\x03\x15\x03\x15" +
        "\x03\x15\x07\x15\u0148\n\x15\f\x15\x0E\x15\u014B\v\x15\x03\x16\x03\x16" +
        "\x05\x16\u014F\n\x16\x03\x16\x03\x16\x05\x16\u0153\n\x16\x03\x16\x03\x16" +
        "\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17" +
        "\u015F\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0165\n\x18\x03\x18" +
        "\x05\x18\u0168\n\x18\x03\x19\x03\x19\x05\x19\u016C\n\x19\x03\x19\x03\x19" +
        "\x03\x19\x07\x19\u0171\n\x19\f\x19\x0E\x19\u0174\v\x19\x03\x1A\x03\x1A" +
        "\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u017E\n\x1A\x03" +
        "\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0186\n\x1B\f\x1B" +
        "\x0E\x1B\u0189\v\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x05\x1C\u018F\n\x1C" +
        "\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0194\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
        "\x1D\x03\x1D\x03\x1D\x05\x1D\u019C\n\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D" +
        "\u01A1\n\x1D\x03\x1D\x05\x1D\u01A4\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F" +
        "\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u01AE\n\x1F\f\x1F\x0E\x1F\u01B1" +
        "\v\x1F\x03 \x03 \x05 \u01B5\n \x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"" +
        "\x03\"\x07\"\u01BF\n\"\f\"\x0E\"\u01C2\v\"\x03#\x03#\x05#\u01C6\n#\x03" +
        "$\x03$\x03$\x05$\u01CB\n$\x03$\x05$\u01CE\n$\x03$\x05$\u01D1\n$\x03%\x03" +
        "%\x03%\x03%\x07%\u01D7\n%\f%\x0E%\u01DA\v%\x03&\x03&\x03&\x05&\u01DF\n" +
        "&\x03&\x03&\x03&\x05&\u01E4\n&\x03\'\x03\'\x05\'\u01E8\n\'\x03(\x03(\x05" +
        "(\u01EC\n(\x03(\x03(\x03)\x03)\x03)\x05)\u01F3\n)\x03*\x03*\x03*\x07*" +
        "\u01F8\n*\f*\x0E*\u01FB\v*\x03+\x03+\x03+\x07+\u0200\n+\f+\x0E+\u0203" +
        "\v+\x03,\x05,\u0206\n,\x03,\x03,\x03-\x03-\x03-\x03-\x03-\x05-\u020F\n" +
        "-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u0219\n.\x03/\x03/\x05" +
        "/\u021D\n/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u0226\n/\x03/\x03/" +
        "\x03/\x03/\x03/\x03/\x03/\x05/\u022F\n/\x03/\x03/\x03/\x03/\x03/\x05/" +
        "\u0236\n/\x030\x030\x050\u023A\n0\x030\x030\x030\x030\x030\x070\u0241" +
        "\n0\f0\x0E0\u0244\v0\x030\x050\u0247\n0\x030\x030\x031\x031\x051\u024D" +
        "\n1\x032\x032\x052\u0251\n2\x032\x032\x032\x032\x052\u0257\n2\x033\x03" +
        "3\x053\u025B\n3\x033\x033\x053\u025F\n3\x033\x033\x034\x034\x034\x054" +
        "\u0266\n4\x034\x034\x035\x035\x055\u026C\n5\x035\x035\x055\u0270\n5\x03" +
        "5\x035\x036\x056\u0275\n6\x036\x036\x036\x036\x036\x037\x037\x037\x03" +
        "7\x037\x038\x038\x038\x038\x058\u0285\n8\x038\x038\x038\x038\x058\u028B" +
        "\n8\x038\x038\x038\x038\x058\u0291\n8\x038\x038\x038\x038\x058\u0297\n" +
        "8\x038\x038\x038\x038\x058\u029D\n8\x038\x038\x038\x038\x058\u02A3\n8" +
        "\x058\u02A5\n8\x039\x039\x03:\x03:\x03:\x03:\x03:\x05:\u02AE\n:\x03;\x03" +
        ";\x03;\x07;\u02B3\n;\f;\x0E;\u02B6\v;\x03<\x03<\x03<\x07<\u02BB\n<\f<" +
        "\x0E<\u02BE\v<\x03=\x05=\u02C1\n=\x03=\x03=\x03>\x03>\x03>\x03>\x03>\x03" +
        ">\x03>\x03>\x03>\x05>\u02CE\n>\x03?\x03?\x03?\x03?\x03?\x05?\u02D5\n?" +
        "\x03@\x03@\x03@\x03@\x03@\x05@\u02DC\n@\x03A\x03A\x03A\x03A\x03A\x05A" +
        "\u02E3\nA\x03B\x03B\x03B\x03B\x05B\u02E9\nB\x03C\x03C\x03C\x03C\x03C\x05" +
        "C\u02F0\nC\x03D\x03D\x03D\x05D\u02F5\nD\x03E\x03E\x03E\x03E\x03E\x05E" +
        "\u02FC\nE\x03F\x03F\x03F\x05F\u0301\nF\x03G\x03G\x05G\u0305\nG\x03H\x03" +
        "H\x05H\u0309\nH\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03" +
        "I\x03I\x05I\u0317\nI\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03" +
        "I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03" +
        "I\x05I\u0331\nI\x03J\x03J\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03" +
        "K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x05K\u0348\nK\x03" +
        "K\x05K\u034B\nK\x03K\x05K\u034E\nK\x03K\x03K\x03K\x03K\x03K\x03K\x03K" +
        "\x03K\x03K\x03K\x03K\x03K\x03K\x05K\u035D\nK\x03L\x03L\x03M\x03M\x03N" +
        "\x03N\x03O\x03O\x03O\x03O\x05O\u0369\nO\x03P\x03P\x03Q\x03Q\x03R\x03R" +
        "\x03S\x03S\x03T\x03T\x03U\x03U\x03V\x03V\x03W\x03W\x03X\x03X\x03X\x02" +
        "\x02\x02Y\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
        "\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
        "\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
        "B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
        "^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
        "z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
        "\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02" +
        "\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\x02\f" +
        "\x03\x02\x18\x1B\x03\x02\"#\x03\x02/1\x04\x02\x11\x1122\x04\x02\x11\x11" +
        "26\x03\x0278\x03\x029:\x03\x02AC\x03\x02IK\x03\x02NO\x02\u03B5\x02\xB3" +
        "\x03\x02\x02\x02\x04\xB5\x03\x02\x02\x02\x06\xC3\x03\x02\x02\x02\b\xC7" +
        "\x03\x02\x02\x02\n\xCB\x03\x02\x02\x02\f\xD7\x03\x02\x02\x02\x0E\xDF\x03" +
        "\x02\x02\x02\x10\xE5\x03\x02\x02\x02\x12\xEC\x03\x02\x02\x02\x14\xF5\x03" +
        "\x02\x02\x02\x16\xFB\x03\x02\x02\x02\x18\xFD\x03\x02\x02\x02\x1A\u0101" +
        "\x03\x02\x02\x02\x1C\u0105\x03\x02\x02\x02\x1E\u0110\x03\x02\x02\x02 " +
        "\u0114\x03\x02\x02\x02\"\u0119\x03\x02\x02\x02$\u0125\x03\x02\x02\x02" +
        "&\u0136\x03\x02\x02\x02(\u013B\x03\x02\x02\x02*\u014E\x03\x02\x02\x02" +
        ",\u015E\x03\x02\x02\x02.\u0160\x03\x02\x02\x020\u0169\x03\x02\x02\x02" +
        "2\u017D\x03\x02\x02\x024\u017F\x03\x02\x02\x026\u018E\x03\x02\x02\x02" +
        "8\u01A3\x03\x02\x02\x02:\u01A5\x03\x02\x02\x02<\u01A8\x03\x02\x02\x02" +
        ">\u01B4\x03\x02\x02\x02@\u01B6\x03\x02\x02\x02B\u01B9\x03\x02\x02\x02" +
        "D\u01C3\x03\x02\x02\x02F\u01C7\x03\x02\x02\x02H\u01D2\x03\x02\x02\x02" +
        "J\u01E3\x03\x02\x02\x02L\u01E7\x03\x02\x02\x02N\u01E9\x03\x02\x02\x02" +
        "P\u01F2\x03\x02\x02\x02R\u01F4\x03\x02\x02\x02T\u01FC\x03\x02\x02\x02" +
        "V\u0205\x03\x02\x02\x02X\u020E\x03\x02\x02\x02Z\u0218\x03\x02\x02\x02" +
        "\\\u0235\x03\x02\x02\x02^\u0237\x03\x02\x02\x02`\u024C\x03\x02\x02\x02" +
        "b\u024E\x03\x02\x02\x02d\u025A\x03\x02\x02\x02f\u0262\x03\x02\x02\x02" +
        "h\u0269\x03\x02\x02\x02j\u0274\x03\x02\x02\x02l\u027B\x03\x02\x02\x02" +
        "n\u02A4\x03\x02\x02\x02p\u02A6\x03\x02\x02\x02r\u02AD\x03\x02\x02\x02" +
        "t\u02AF\x03\x02\x02\x02v\u02B7\x03\x02\x02\x02x\u02C0\x03\x02\x02\x02" +
        "z\u02CD\x03\x02\x02\x02|\u02D4\x03\x02\x02\x02~\u02DB\x03\x02\x02\x02" +
        "\x80\u02E2\x03\x02\x02\x02\x82\u02E8\x03\x02\x02\x02\x84\u02EF\x03\x02" +
        "\x02\x02\x86\u02F4\x03\x02\x02\x02\x88\u02FB\x03\x02\x02\x02\x8A\u0300" +
        "\x03\x02\x02\x02\x8C\u0304\x03\x02\x02\x02\x8E\u0308\x03\x02\x02\x02\x90" +
        "\u0330\x03\x02\x02\x02\x92\u0332\x03\x02\x02\x02\x94\u035C\x03\x02\x02" +
        "\x02\x96\u035E\x03\x02\x02\x02\x98\u0360\x03\x02\x02\x02\x9A\u0362\x03" +
        "\x02\x02\x02\x9C\u0368\x03\x02\x02\x02\x9E\u036A\x03\x02\x02\x02\xA0\u036C" +
        "\x03\x02\x02\x02\xA2\u036E\x03\x02\x02\x02\xA4\u0370\x03\x02\x02\x02\xA6" +
        "\u0372\x03\x02\x02\x02\xA8\u0374\x03\x02\x02\x02\xAA\u0376\x03\x02\x02" +
        "\x02\xAC\u0378\x03\x02\x02\x02\xAE\u037A\x03\x02\x02\x02\xB0\xB4\x05\x04" +
        "\x03\x02\xB1\xB4\x05\x06\x04\x02\xB2\xB4\x05\b\x05\x02\xB3\xB0\x03\x02" +
        "\x02\x02\xB3\xB1\x03\x02\x02\x02\xB3\xB2\x03\x02\x02\x02\xB4\x03\x03\x02" +
        "\x02\x02\xB5\xB6\x050\x19\x02\xB6\xB8\x05\n\x06\x02\xB7\xB9\x05:\x1E\x02" +
        "\xB8\xB7\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBB\x03\x02\x02\x02" +
        "\xBA\xBC\x05<\x1F\x02\xBB\xBA\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02" +
        "\xBC\xBE\x03\x02\x02\x02\xBD\xBF\x05@!\x02\xBE\xBD\x03\x02\x02\x02\xBE" +
        "\xBF\x03\x02\x02\x02\xBF\xC1\x03\x02\x02\x02\xC0\xC2\x05B\"\x02\xC1\xC0" +
        "\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\x05\x03\x02\x02\x02\xC3\xC5" +
        "\x05(\x15\x02\xC4\xC6\x05:\x1E\x02\xC5\xC4\x03\x02\x02\x02\xC5\xC6\x03" +
        "\x02\x02\x02\xC6\x07\x03\x02\x02\x02\xC7\xC9\x05.\x18\x02\xC8\xCA\x05" +
        ":\x1E\x02\xC9\xC8\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\t\x03\x02" +
        "\x02\x02\xCB\xCC\x07\x03\x02\x02\xCC\xD4\x05\f\x07\x02\xCD\xD0\x07\x04" +
        "\x02\x02\xCE\xD1\x05\f\x07\x02\xCF\xD1\x05\x1C\x0F\x02\xD0\xCE\x03\x02" +
        "\x02\x02\xD0\xCF\x03\x02\x02\x02\xD1\xD3\x03\x02\x02\x02\xD2\xCD\x03\x02" +
        "\x02\x02\xD3\xD6\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD4\xD5\x03\x02" +
        "\x02\x02\xD5\v\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD7\xDC\x05\x0E" +
        "\b\x02\xD8\xDB\x05\x10\t\x02\xD9\xDB\x05\x12\n\x02\xDA\xD8\x03\x02\x02" +
        "\x02\xDA\xD9\x03\x02\x02\x02\xDB\xDE\x03\x02\x02\x02\xDC\xDA\x03\x02\x02" +
        "\x02\xDC\xDD\x03\x02\x02\x02\xDD\r\x03\x02\x02\x02\xDE\xDC\x03\x02\x02" +
        "\x02\xDF\xE1\x05\xAEX\x02\xE0\xE2\x07\x05\x02\x02\xE1\xE0\x03\x02\x02" +
        "\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE4\x07P\x02" +
        "\x02\xE4\x0F\x03\x02\x02\x02\xE5\xE6\x05\x14\v\x02\xE6\xE8\x05\x16\f\x02" +
        "\xE7\xE9\x07\x05\x02\x02\xE8\xE7\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02" +
        "\xE9\xEA\x03\x02\x02\x02\xEA\xEB\x07P\x02\x02\xEB\x11\x03\x02\x02\x02" +
        "\xEC\xED\x05\x14\v\x02\xED\xEE\x07\x06\x02\x02\xEE\xEF\x05\x16\f\x02\xEF" +
        "\x13\x03\x02\x02\x02\xF0\xF2\x07\x07\x02\x02\xF1\xF3\x07\b\x02\x02\xF2" +
        "\xF1\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF6\x03\x02\x02\x02\xF4" +
        "\xF6\x07\t\x02\x02\xF5\xF0\x03\x02\x02\x02\xF5\xF4\x03\x02\x02\x02\xF5" +
        "\xF6\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF8\x07\n\x02\x02\xF8" +
        "\x15\x03\x02\x02\x02\xF9\xFC\x05\x18\r\x02\xFA\xFC\x05\x1A\x0E\x02\xFB" +
        "\xF9\x03\x02\x02\x02\xFB\xFA\x03\x02\x02\x02\xFC\x17\x03\x02\x02\x02\xFD" +
        "\xFE\x07P\x02\x02\xFE\xFF\x07\v\x02\x02\xFF\u0100\x05\xACW\x02\u0100\x19" +
        "\x03\x02\x02\x02\u0101\u0102\x07P\x02\x02\u0102\u0103\x07\v\x02\x02\u0103" +
        "\u0104\x05\xAAV\x02\u0104\x1B\x03\x02\x02\x02\u0105\u0106\x07\f\x02\x02" +
        "\u0106\u0107\x07\r\x02\x02\u0107\u0108\x05$\x13\x02\u0108\u010A\x07\x0E" +
        "\x02\x02\u0109\u010B\x07\x05\x02\x02\u010A\u0109\x03\x02\x02\x02\u010A" +
        "\u010B\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\u010D\x07P\x02" +
        "\x02\u010D\x1D\x03\x02\x02\x02\u010E\u0111\x05 \x11\x02\u010F\u0111\x05" +
        "\"\x12\x02\u0110\u010E\x03\x02\x02\x02\u0110\u010F\x03\x02\x02\x02\u0111" +
        "\x1F\x03\x02\x02\x02\u0112\u0115\x07P\x02\x02\u0113\u0115\x05\"\x12\x02" +
        "\u0114\u0112\x03\x02\x02\x02\u0114\u0113\x03\x02\x02\x02\u0115\u0116\x03" +
        "\x02\x02\x02\u0116\u0117\x07\v\x02\x02\u0117\u0118\x05&\x14\x02\u0118" +
        "!\x03\x02\x02\x02\u0119\u011A\x07P\x02\x02\u011A\u0120\x07\v\x02\x02\u011B" +
        "\u011C\x05\xAAV\x02\u011C\u011D\x07\v\x02\x02\u011D\u011F\x03\x02\x02" +
        "\x02\u011E\u011B\x03\x02\x02\x02\u011F\u0122\x03\x02\x02\x02\u0120\u011E" +
        "\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02\u0121\u0123\x03\x02\x02\x02" +
        "\u0122\u0120\x03\x02\x02\x02\u0123\u0124\x05\xAAV\x02\u0124#\x03\x02\x02" +
        "\x02\u0125\u0126\x07P\x02\x02\u0126\u012C\x07\v\x02\x02\u0127\u0128\x05" +
        "\xAAV\x02\u0128\u0129\x07\v\x02\x02\u0129\u012B\x03\x02\x02\x02\u012A" +
        "\u0127\x03\x02\x02\x02\u012B\u012E\x03\x02\x02\x02\u012C\u012A\x03\x02" +
        "\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u012F\x03\x02\x02\x02\u012E" +
        "\u012C\x03\x02\x02\x02\u012F\u0130\x05\xACW\x02\u0130%\x03\x02\x02\x02" +
        "\u0131\u0132\x05\xA8U\x02\u0132\u0133\x07\v\x02\x02\u0133\u0135\x03\x02" +
        "\x02\x02\u0134\u0131\x03\x02\x02\x02\u0135\u0138\x03\x02\x02\x02\u0136" +
        "\u0134\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u0139\x03\x02" +
        "\x02\x02\u0138\u0136\x03\x02\x02\x02\u0139\u013A\x05\xA6T\x02\u013A\'" +
        "\x03\x02\x02\x02\u013B\u013C\x07\x0F\x02\x02\u013C\u0141\x05\xAEX\x02" +
        "\u013D\u013F\x07\x05\x02\x02\u013E\u013D\x03\x02\x02\x02\u013E\u013F\x03" +
        "\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0142\x07P\x02\x02\u0141" +
        "\u013E\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142\u0143\x03\x02" +
        "\x02\x02\u0143\u0144\x07\x10\x02\x02\u0144\u0149\x05*\x16\x02\u0145\u0146" +
        "\x07\x04\x02\x02\u0146\u0148\x05*\x16\x02\u0147\u0145\x03\x02\x02\x02" +
        "\u0148\u014B\x03\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u0149\u014A\x03" +
        "\x02\x02\x02\u014A)\x03\x02\x02\x02\u014B\u0149\x03\x02\x02\x02\u014C" +
        "\u014D\x07P\x02\x02\u014D\u014F\x07\v\x02\x02\u014E\u014C\x03\x02\x02" +
        "\x02\u014E\u014F\x03\x02\x02\x02\u014F\u0152\x03\x02\x02\x02\u0150\u0153" +
        "\x05&\x14\x02\u0151\u0153\x05\xAAV\x02\u0152\u0150\x03\x02\x02\x02\u0152" +
        "\u0151\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0155\x07\x11" +
        "\x02\x02\u0155\u0156\x05,\x17\x02\u0156+\x03\x02\x02\x02\u0157\u015F\x05" +
        "t;\x02\u0158\u015F\x05~@\x02\u0159\u015F\x05\x82B\x02\u015A\u015F\x05" +
        "\x86D\x02\u015B\u015F\x05\x8AF\x02\u015C\u015F\x05\x8EH\x02\u015D\u015F" +
        "\x07\x12\x02\x02\u015E\u0157\x03\x02\x02\x02\u015E\u0158\x03\x02\x02\x02" +
        "\u015E\u0159\x03\x02\x02\x02\u015E\u015A\x03\x02\x02\x02\u015E\u015B\x03" +
        "\x02\x02\x02\u015E\u015C\x03\x02\x02\x02\u015E\u015D\x03\x02\x02\x02\u015F" +
        "-\x03\x02\x02\x02\u0160\u0161\x07\x13\x02\x02\u0161\u0162\x07\x03\x02" +
        "\x02\u0162\u0167\x05\xAEX\x02\u0163\u0165\x07\x05\x02\x02\u0164\u0163" +
        "\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02" +
        "\u0166\u0168\x07P\x02\x02\u0167\u0164\x03\x02\x02\x02\u0167\u0168\x03" +
        "\x02\x02\x02\u0168/\x03\x02\x02\x02\u0169\u016B\x07\x14\x02\x02\u016A" +
        "\u016C\x07\x15\x02\x02\u016B\u016A\x03\x02\x02\x02\u016B\u016C\x03\x02" +
        "\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u0172\x052\x1A\x02\u016E\u016F" +
        "\x07\x04\x02\x02\u016F\u0171\x052\x1A\x02\u0170\u016E\x03\x02\x02\x02" +
        "\u0171\u0174\x03\x02\x02\x02\u0172\u0170\x03\x02\x02\x02\u0172\u0173\x03" +
        "\x02\x02\x02\u01731\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0175" +
        "\u017E\x05\x1E\x10\x02\u0176\u017E\x058\x1D\x02\u0177\u017E\x07P\x02\x02" +
        "\u0178\u0179\x07\x16\x02\x02\u0179\u017A\x07\r\x02\x02\u017A\u017B\x07" +
        "P\x02\x02\u017B\u017E\x07\x0E\x02\x02\u017C\u017E\x054\x1B\x02\u017D\u0175" +
        "\x03\x02\x02\x02\u017D\u0176\x03\x02\x02\x02\u017D\u0177\x03\x02\x02\x02" +
        "\u017D\u0178\x03\x02\x02\x02\u017D\u017C\x03\x02\x02\x02\u017E3\x03\x02" +
        "\x02\x02\u017F\u0180\x07\x17\x02\x02\u0180\u0181\x05\xA0Q\x02\u0181\u0182" +
        "\x07\r\x02\x02\u0182\u0187\x056\x1C\x02\u0183\u0184\x07\x04\x02\x02\u0184" +
        "\u0186\x056\x1C\x02\u0185\u0183\x03\x02\x02\x02\u0186\u0189\x03\x02\x02" +
        "\x02\u0187\u0185\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188\u018A" +
        "\x03\x02\x02\x02\u0189\u0187\x03\x02\x02\x02\u018A\u018B\x07\x0E\x02\x02" +
        "\u018B5\x03\x02\x02\x02\u018C\u018F\x05\x1E\x10\x02\u018D\u018F\x058\x1D" +
        "\x02\u018E\u018C\x03\x02\x02\x02\u018E\u018D\x03\x02\x02\x02\u018F7\x03" +
        "\x02\x02\x02\u0190\u0191\t\x02\x02\x02\u0191\u0193\x07\r\x02\x02\u0192" +
        "\u0194\x07\x15\x02\x02\u0193\u0192\x03\x02\x02\x02\u0193\u0194\x03\x02" +
        "\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195\u0196\x05 \x11\x02\u0196\u0197" +
        "\x07\x0E\x02\x02\u0197\u01A4\x03\x02\x02\x02\u0198\u0199\x07\x1C\x02\x02" +
        "\u0199\u019B\x07\r\x02\x02\u019A\u019C\x07\x15\x02\x02\u019B\u019A\x03" +
        "\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C\u01A0\x03\x02\x02\x02\u019D" +
        "\u01A1\x07P\x02\x02\u019E\u01A1\x05 \x11\x02\u019F\u01A1\x05\"\x12\x02" +
        "\u01A0\u019D\x03\x02\x02\x02\u01A0\u019E\x03\x02\x02\x02\u01A0\u019F\x03" +
        "\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A4\x07\x0E\x02\x02\u01A3" +
        "\u0190\x03\x02\x02\x02\u01A3\u0198\x03\x02\x02\x02\u01A49\x03\x02\x02" +
        "\x02\u01A5\u01A6\x07\x1D\x02\x02\u01A6\u01A7\x05R*\x02\u01A7;\x03\x02" +
        "\x02\x02\u01A8\u01A9\x07\x1E\x02\x02\u01A9\u01AA\x07\x1F\x02\x02\u01AA" +
        "\u01AF\x05> \x02\u01AB\u01AC\x07\x04\x02\x02\u01AC\u01AE\x05> \x02\u01AD" +
        "\u01AB\x03\x02\x02\x02\u01AE\u01B1\x03\x02\x02\x02\u01AF\u01AD\x03\x02" +
        "\x02\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0=\x03\x02\x02\x02\u01B1\u01AF" +
        "\x03\x02\x02\x02\u01B2\u01B5\x05\x1E\x10\x02\u01B3\u01B5\x07P\x02\x02" +
        "\u01B4\u01B2\x03\x02\x02\x02\u01B4\u01B3\x03\x02\x02\x02\u01B5?\x03\x02" +
        "\x02\x02\u01B6\u01B7\x07 \x02\x02\u01B7\u01B8\x05R*\x02\u01B8A\x03\x02" +
        "\x02\x02\u01B9\u01BA\x07!\x02\x02\u01BA\u01BB\x07\x1F\x02\x02\u01BB\u01C0" +
        "\x05D#\x02\u01BC\u01BD\x07\x04\x02\x02\u01BD\u01BF\x05D#\x02\u01BE\u01BC" +
        "\x03\x02\x02\x02\u01BF\u01C2\x03\x02\x02\x02\u01C0\u01BE\x03\x02\x02\x02" +
        "\u01C0\u01C1\x03\x02\x02\x02\u01C1C\x03\x02\x02\x02\u01C2\u01C0\x03\x02" +
        "\x02\x02\u01C3\u01C5\x05 \x11\x02\u01C4\u01C6\t\x03\x02\x02\u01C5\u01C4" +
        "\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6E\x03\x02\x02\x02\u01C7" +
        "\u01C8\x05N(\x02\u01C8\u01CA\x05H%\x02\u01C9\u01CB\x05:\x1E\x02\u01CA" +
        "\u01C9\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB\u01CD\x03\x02" +
        "\x02\x02\u01CC\u01CE\x05<\x1F\x02\u01CD\u01CC\x03\x02\x02\x02\u01CD\u01CE" +
        "\x03\x02\x02\x02\u01CE\u01D0\x03\x02\x02\x02\u01CF\u01D1\x05@!\x02\u01D0" +
        "\u01CF\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1G\x03\x02\x02" +
        "\x02\u01D2\u01D3\x07\x03\x02\x02\u01D3\u01D8\x05J&\x02\u01D4\u01D5\x07" +
        "\x04\x02\x02\u01D5\u01D7\x05J&\x02\u01D6\u01D4\x03\x02\x02\x02\u01D7\u01DA" +
        "\x03\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02" +
        "\u01D9I\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DB\u01E4\x05\f" +
        "\x07\x02\u01DC\u01DE\x05L\'\x02\u01DD\u01DF\x07\x05\x02\x02\u01DE\u01DD" +
        "\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02" +
        "\u01E0\u01E1\x07P\x02\x02\u01E1\u01E4\x03\x02\x02\x02\u01E2\u01E4\x05" +
        "\x1C\x0F\x02\u01E3\u01DB\x03\x02\x02\x02\u01E3\u01DC\x03\x02\x02\x02\u01E3" +
        "\u01E2\x03\x02\x02\x02\u01E4K\x03\x02\x02\x02\u01E5\u01E8\x05$\x13\x02" +
        "\u01E6\u01E8\x05\"\x12\x02\u01E7\u01E5\x03\x02\x02\x02\u01E7\u01E6\x03" +
        "\x02\x02\x02\u01E8M\x03\x02\x02\x02\u01E9\u01EB\x07\x14\x02\x02\u01EA" +
        "\u01EC\x07\x15\x02\x02\u01EB\u01EA\x03\x02\x02\x02\u01EB\u01EC\x03\x02" +
        "\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01EE\x05P)\x02\u01EEO\x03" +
        "\x02\x02\x02\u01EF\u01F3\x05\x1E\x10\x02\u01F0\u01F3\x058\x1D\x02\u01F1" +
        "\u01F3\x07P\x02\x02\u01F2\u01EF\x03\x02\x02\x02\u01F2\u01F0\x03\x02\x02" +
        "\x02\u01F2\u01F1\x03\x02\x02\x02\u01F3Q\x03\x02\x02\x02\u01F4\u01F9\x05" +
        "T+\x02\u01F5";
    JPAParser._serializedATNSegment1 = "\u01F6\x07$\x02\x02\u01F6\u01F8\x05T+\x02\u01F7\u01F5\x03\x02\x02\x02" +
        "\u01F8\u01FB\x03\x02\x02\x02\u01F9\u01F7\x03\x02\x02\x02\u01F9\u01FA\x03" +
        "\x02\x02\x02\u01FAS\x03\x02\x02\x02\u01FB\u01F9\x03\x02\x02\x02\u01FC" +
        "\u0201\x05V,\x02\u01FD\u01FE\x07%\x02\x02\u01FE\u0200\x05V,\x02\u01FF" +
        "\u01FD\x03\x02\x02\x02\u0200\u0203\x03\x02\x02\x02\u0201\u01FF\x03\x02" +
        "\x02\x02\u0201\u0202\x03\x02\x02\x02\u0202U\x03\x02\x02\x02\u0203\u0201" +
        "\x03\x02\x02\x02\u0204\u0206\x07&\x02\x02\u0205\u0204\x03\x02\x02\x02" +
        "\u0205\u0206\x03\x02\x02\x02\u0206\u0207\x03\x02\x02\x02\u0207\u0208\x05" +
        "X-\x02\u0208W\x03\x02\x02\x02\u0209\u020F\x05Z.\x02\u020A\u020B\x07\r" +
        "\x02\x02\u020B\u020C\x05R*\x02\u020C\u020D\x07\x0E\x02\x02\u020D\u020F" +
        "\x03\x02\x02\x02\u020E\u0209\x03\x02\x02\x02\u020E\u020A\x03\x02\x02\x02" +
        "\u020FY\x03\x02\x02\x02\u0210\u0219\x05n8\x02\u0211\u0219\x05\\/\x02\u0212" +
        "\u0219\x05b2\x02\u0213\u0219\x05^0\x02\u0214\u0219\x05d3\x02\u0215\u0219" +
        "\x05f4\x02\u0216\u0219\x05h5\x02\u0217\u0219\x05j6\x02\u0218\u0210\x03" +
        "\x02\x02\x02\u0218\u0211\x03\x02\x02\x02\u0218\u0212\x03\x02\x02\x02\u0218" +
        "\u0213\x03\x02\x02\x02\u0218\u0214\x03\x02\x02\x02\u0218\u0215\x03\x02" +
        "\x02\x02\u0218\u0216\x03\x02\x02\x02\u0218\u0217\x03\x02\x02\x02\u0219" +
        "[\x03\x02\x02\x02\u021A\u021C\x05r:\x02\u021B\u021D\x07&\x02\x02\u021C" +
        "\u021B\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D\u021E\x03\x02" +
        "\x02\x02\u021E\u021F\x07\'\x02\x02\u021F\u0220\x05r:\x02\u0220\u0221\x07" +
        "%\x02\x02\u0221\u0222\x05r:\x02\u0222\u0236\x03\x02\x02\x02\u0223\u0225" +
        "\x05|?\x02\u0224\u0226\x07&\x02\x02\u0225\u0224\x03\x02\x02\x02\u0225" +
        "\u0226\x03\x02\x02\x02\u0226\u0227\x03\x02\x02\x02\u0227\u0228\x07\'\x02" +
        "\x02\u0228\u0229\x05|?\x02\u0229\u022A\x07%\x02\x02\u022A\u022B\x05|?" +
        "\x02\u022B\u0236\x03\x02\x02\x02\u022C\u022E\x05\x80A\x02\u022D\u022F" +
        "\x07&\x02\x02\u022E\u022D\x03\x02\x02\x02\u022E\u022F\x03\x02\x02\x02" +
        "\u022F\u0230\x03\x02\x02\x02\u0230\u0231\x07\'\x02\x02\u0231\u0232\x05" +
        "\x80A\x02\u0232\u0233\x07%\x02\x02\u0233\u0234\x05\x80A\x02\u0234\u0236" +
        "\x03\x02\x02\x02\u0235\u021A\x03\x02\x02\x02\u0235\u0223\x03\x02\x02\x02" +
        "\u0235\u022C\x03\x02\x02\x02\u0236]\x03\x02\x02\x02\u0237\u0239\x05 \x11" +
        "\x02\u0238\u023A\x07&\x02\x02\u0239\u0238\x03\x02\x02\x02\u0239\u023A" +
        "\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B\u023C\x07\f\x02\x02" +
        "\u023C\u0246\x07\r\x02\x02\u023D\u0242\x05`1\x02\u023E\u023F\x07\x04\x02" +
        "\x02\u023F\u0241\x05`1\x02\u0240\u023E\x03\x02\x02\x02\u0241\u0244\x03" +
        "\x02\x02\x02\u0242\u0240\x03\x02\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243" +
        "\u0247\x03\x02\x02\x02\u0244\u0242\x03\x02\x02\x02\u0245\u0247\x05F$\x02" +
        "\u0246\u023D\x03\x02\x02\x02\u0246\u0245\x03\x02\x02\x02\u0247\u0248\x03" +
        "\x02\x02\x02\u0248\u0249\x07\x0E\x02\x02\u0249_\x03\x02\x02\x02\u024A" +
        "\u024D\x05\x9EP\x02\u024B\u024D\x05\x9CO\x02\u024C\u024A\x03\x02\x02\x02" +
        "\u024C\u024B\x03\x02\x02\x02\u024Da\x03\x02\x02\x02\u024E\u0250\x05|?" +
        "\x02\u024F\u0251\x07&\x02\x02\u0250\u024F\x03\x02\x02\x02\u0250\u0251" +
        "\x03\x02\x02\x02\u0251\u0252\x03\x02\x02\x02\u0252\u0253\x07(\x02\x02" +
        "\u0253\u0256\x05\x9AN\x02\u0254\u0255\x07)\x02\x02\u0255\u0257\x07S\x02" +
        "\x02\u0256\u0254\x03\x02\x02\x02\u0256\u0257\x03\x02\x02\x02\u0257c\x03" +
        "\x02\x02\x02\u0258\u025B\x05\x1E\x10\x02\u0259\u025B\x05\x9CO\x02\u025A" +
        "\u0258\x03\x02\x02\x02\u025A\u0259\x03\x02\x02\x02\u025B\u025C\x03\x02" +
        "\x02\x02\u025C\u025E\x07*\x02\x02\u025D\u025F\x07&\x02\x02\u025E\u025D" +
        "\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F\u0260\x03\x02\x02\x02" +
        "\u0260\u0261\x07\x12\x02\x02\u0261e\x03\x02\x02\x02\u0262\u0263\x05$\x13" +
        "\x02\u0263\u0265\x07*\x02\x02\u0264\u0266\x07&\x02\x02\u0265\u0264\x03" +
        "\x02\x02\x02\u0265\u0266\x03\x02\x02\x02\u0266\u0267\x03\x02\x02\x02\u0267" +
        "\u0268\x07+\x02\x02\u0268g\x03\x02\x02\x02\u0269\u026B\x05\x8CG\x02\u026A" +
        "\u026C\x07&\x02\x02\u026B\u026A\x03\x02\x02\x02\u026B\u026C\x03\x02\x02" +
        "\x02\u026C\u026D\x03\x02\x02\x02\u026D\u026F\x07,\x02\x02\u026E\u0270" +
        "\x07-\x02\x02\u026F\u026E\x03\x02\x02\x02\u026F\u0270\x03\x02\x02\x02" +
        "\u0270\u0271\x03\x02\x02\x02\u0271\u0272\x05$\x13\x02\u0272i\x03\x02\x02" +
        "\x02\u0273\u0275\x07&\x02\x02\u0274\u0273\x03\x02\x02\x02\u0274\u0275" +
        "\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0277\x07.\x02\x02" +
        "\u0277\u0278\x07\r\x02\x02\u0278\u0279\x05F$\x02\u0279\u027A\x07\x0E\x02" +
        "\x02\u027Ak\x03\x02\x02\x02\u027B\u027C\t\x04\x02\x02\u027C\u027D\x07" +
        "\r\x02\x02\u027D\u027E\x05F$\x02\u027E\u027F\x07\x0E\x02\x02\u027Fm\x03" +
        "\x02\x02\x02\u0280\u0281\x05|?\x02\u0281\u0284\x05p9\x02\u0282\u0285\x05" +
        "|?\x02\u0283\u0285\x05l7\x02\u0284\u0282\x03\x02\x02\x02\u0284\u0283\x03" +
        "\x02\x02\x02\u0285\u02A5\x03\x02\x02\x02\u0286\u0287\x05\x84C\x02\u0287" +
        "\u028A\t\x05\x02\x02\u0288\u028B\x05\x84C\x02\u0289\u028B\x05l7\x02\u028A" +
        "\u0288\x03\x02\x02\x02\u028A\u0289\x03\x02\x02\x02\u028B\u02A5\x03\x02" +
        "\x02\x02\u028C\u028D\x05\x88E\x02\u028D\u0290\t\x05\x02\x02\u028E\u0291" +
        "\x05\x88E\x02\u028F\u0291\x05l7\x02\u0290\u028E\x03\x02\x02\x02\u0290" +
        "\u028F\x03\x02\x02\x02\u0291\u02A5\x03\x02\x02\x02\u0292\u0293\x05\x80" +
        "A\x02\u0293\u0296\x05p9\x02\u0294\u0297\x05\x80A\x02\u0295\u0297\x05l" +
        "7\x02\u0296\u0294\x03\x02\x02\x02\u0296\u0295\x03\x02\x02\x02\u0297\u02A5" +
        "\x03\x02\x02\x02\u0298\u0299\x05\x8CG\x02\u0299\u029C\t\x05\x02\x02\u029A" +
        "\u029D\x05\x8CG\x02\u029B\u029D\x05l7\x02\u029C\u029A\x03\x02\x02\x02" +
        "\u029C\u029B\x03\x02\x02\x02\u029D\u02A5\x03\x02\x02\x02\u029E\u029F\x05" +
        "r:\x02\u029F\u02A2\x05p9\x02\u02A0\u02A3\x05r:\x02\u02A1\u02A3\x05l7\x02" +
        "\u02A2\u02A0\x03\x02\x02\x02\u02A2\u02A1\x03\x02\x02\x02\u02A3\u02A5\x03" +
        "\x02\x02\x02\u02A4\u0280\x03\x02\x02\x02\u02A4\u0286\x03\x02\x02\x02\u02A4" +
        "\u028C\x03\x02\x02\x02\u02A4\u0292\x03\x02\x02\x02\u02A4\u0298\x03\x02" +
        "\x02\x02\u02A4\u029E\x03\x02\x02\x02\u02A5o\x03\x02\x02\x02\u02A6\u02A7" +
        "\t\x06\x02\x02\u02A7q\x03\x02\x02\x02\u02A8\u02AE\x05t;\x02\u02A9\u02AA" +
        "\x07\r\x02\x02\u02AA\u02AB\x05F$\x02\u02AB\u02AC\x07\x0E\x02\x02\u02AC" +
        "\u02AE\x03\x02\x02\x02\u02AD\u02A8\x03\x02\x02\x02\u02AD\u02A9\x03\x02" +
        "\x02\x02\u02AEs\x03\x02\x02\x02\u02AF\u02B4\x05v<\x02\u02B0\u02B1\t\x07" +
        "\x02\x02\u02B1\u02B3\x05v<\x02\u02B2\u02B0\x03\x02\x02\x02\u02B3\u02B6" +
        "\x03\x02\x02\x02\u02B4\u02B2\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02" +
        "\u02B5u\x03\x02\x02\x02\u02B6\u02B4\x03\x02\x02\x02\u02B7\u02BC\x05x=" +
        "\x02\u02B8\u02B9\t\b\x02\x02\u02B9\u02BB\x05x=\x02\u02BA\u02B8\x03\x02" +
        "\x02\x02\u02BB\u02BE\x03\x02\x02\x02\u02BC\u02BA\x03\x02\x02\x02\u02BC" +
        "\u02BD\x03\x02\x02\x02\u02BDw\x03\x02\x02\x02\u02BE\u02BC\x03\x02\x02" +
        "\x02\u02BF\u02C1\t\x07\x02\x02\u02C0\u02BF\x03\x02\x02\x02\u02C0\u02C1" +
        "\x03\x02\x02\x02\u02C1\u02C2\x03\x02\x02\x02\u02C2\u02C3\x05z>\x02\u02C3" +
        "y\x03\x02\x02\x02\u02C4\u02CE\x05 \x11\x02\u02C5\u02CE\x05\x98M\x02\u02C6" +
        "\u02C7\x07\r\x02\x02\u02C7\u02C8\x05t;\x02\u02C8\u02C9\x07\x0E\x02\x02" +
        "\u02C9\u02CE\x03\x02\x02\x02\u02CA\u02CE\x05\x9CO\x02\u02CB\u02CE\x05" +
        "\x90I\x02\u02CC\u02CE\x058\x1D\x02\u02CD\u02C4\x03\x02\x02\x02\u02CD\u02C5" +
        "\x03\x02\x02\x02\u02CD\u02C6\x03\x02\x02\x02\u02CD\u02CA\x03\x02\x02\x02" +
        "\u02CD\u02CB\x03\x02\x02\x02\u02CD\u02CC\x03\x02\x02\x02\u02CE{\x03\x02" +
        "\x02\x02\u02CF\u02D5\x05~@\x02\u02D0\u02D1\x07\r\x02\x02\u02D1\u02D2\x05" +
        "F$\x02\u02D2\u02D3\x07\x0E\x02\x02\u02D3\u02D5\x03\x02\x02\x02\u02D4\u02CF" +
        "\x03\x02\x02\x02\u02D4\u02D0\x03\x02\x02\x02\u02D5}\x03\x02\x02\x02\u02D6" +
        "\u02DC\x05 \x11\x02\u02D7\u02DC\x07R\x02\x02\u02D8\u02DC\x05\x9CO\x02" +
        "\u02D9\u02DC\x05\x94K\x02\u02DA\u02DC\x058\x1D\x02\u02DB\u02D6\x03\x02" +
        "\x02\x02\u02DB\u02D7\x03\x02\x02\x02\u02DB\u02D8\x03\x02\x02\x02\u02DB" +
        "\u02D9\x03\x02\x02\x02\u02DB\u02DA\x03\x02\x02\x02\u02DC\x7F\x03\x02\x02" +
        "\x02\u02DD\u02E3\x05\x82B\x02\u02DE\u02DF\x07\r\x02\x02\u02DF\u02E0\x05" +
        "F$\x02\u02E0\u02E1\x07\x0E\x02\x02\u02E1\u02E3\x03\x02\x02\x02\u02E2\u02DD" +
        "\x03\x02\x02\x02\u02E2\u02DE\x03\x02\x02\x02\u02E3\x81\x03\x02\x02\x02" +
        "\u02E4\u02E9\x05 \x11\x02\u02E5\u02E9\x05\x9CO\x02\u02E6\u02E9\x05\x92" +
        "J\x02\u02E7\u02E9\x058\x1D\x02\u02E8\u02E4\x03\x02\x02\x02\u02E8\u02E5" +
        "\x03\x02\x02\x02\u02E8\u02E6\x03\x02\x02\x02\u02E8\u02E7\x03\x02\x02\x02" +
        "\u02E9\x83\x03\x02\x02\x02\u02EA\u02F0\x05\x86D\x02\u02EB\u02EC\x07\r" +
        "\x02\x02\u02EC\u02ED\x05F$\x02\u02ED\u02EE\x07\x0E\x02\x02\u02EE\u02F0" +
        "\x03\x02\x02\x02\u02EF\u02EA\x03\x02\x02\x02\u02EF\u02EB\x03\x02\x02\x02" +
        "\u02F0\x85\x03\x02\x02\x02\u02F1\u02F5\x05 \x11\x02\u02F2\u02F5\x05\xA4" +
        "S\x02\u02F3\u02F5\x05\x9CO\x02\u02F4\u02F1\x03\x02\x02\x02\u02F4\u02F2" +
        "\x03\x02\x02\x02\u02F4\u02F3\x03\x02\x02\x02\u02F5\x87\x03\x02\x02\x02" +
        "\u02F6\u02FC\x05\x8AF\x02\u02F7\u02F8\x07\r\x02\x02\u02F8\u02F9\x05F$" +
        "\x02\u02F9\u02FA\x07\x0E\x02\x02\u02FA\u02FC\x03\x02\x02\x02\u02FB\u02F6" +
        "\x03\x02\x02\x02\u02FB\u02F7\x03\x02\x02\x02\u02FC\x89\x03\x02\x02\x02" +
        "\u02FD\u0301\x05 \x11\x02\u02FE\u0301\x05\xA2R\x02\u02FF\u0301\x05\x9C" +
        "O\x02\u0300\u02FD\x03\x02\x02\x02\u0300\u02FE\x03\x02\x02\x02\u0300\u02FF" +
        "\x03\x02\x02\x02\u0301\x8B\x03\x02\x02\x02\u0302\u0305\x05\"\x12\x02\u0303" +
        "\u0305\x05\x8EH\x02\u0304\u0302\x03\x02\x02\x02\u0304\u0303\x03\x02\x02" +
        "\x02\u0305\x8D\x03\x02\x02\x02\u0306\u0309\x07P\x02\x02\u0307\u0309\x05" +
        "\x9CO\x02\u0308\u0306\x03\x02\x02\x02\u0308\u0307\x03\x02\x02\x02\u0309" +
        "\x8F\x03\x02\x02\x02\u030A\u030B\x07;\x02\x02\u030B\u030C\x07\r\x02\x02" +
        "\u030C\u030D\x05~@\x02\u030D\u030E\x07\x0E\x02\x02\u030E\u0331\x03\x02" +
        "\x02\x02\u030F\u0310\x07<\x02\x02\u0310\u0311\x07\r\x02\x02\u0311\u0312" +
        "\x05~@\x02\u0312\u0313\x07\x04\x02\x02\u0313\u0316\x05~@\x02\u0314\u0315" +
        "\x07\x04\x02\x02\u0315\u0317\x05t;\x02\u0316\u0314\x03\x02\x02\x02\u0316" +
        "\u0317\x03\x02\x02\x02\u0317\u0318\x03\x02\x02\x02\u0318\u0319\x07\x0E" +
        "\x02\x02\u0319\u0331\x03\x02\x02\x02\u031A\u031B\x07=\x02\x02\u031B\u031C" +
        "\x07\r\x02\x02\u031C\u031D\x05t;\x02\u031D\u031E\x07\x0E\x02\x02\u031E" +
        "\u0331\x03\x02\x02\x02\u031F\u0320\x07>\x02\x02\u0320\u0321\x07\r\x02" +
        "\x02\u0321\u0322\x05t;\x02\u0322\u0323\x07\x0E\x02\x02\u0323\u0331\x03" +
        "\x02\x02\x02\u0324\u0325\x07?\x02\x02\u0325\u0326\x07\r\x02\x02\u0326" +
        "\u0327\x05t;\x02\u0327\u0328\x07\x04\x02\x02\u0328\u0329\x05t;\x02\u0329" +
        "\u032A\x07\x0E\x02\x02\u032A\u0331\x03\x02\x02\x02\u032B\u032C\x07@\x02" +
        "\x02\u032C\u032D\x07\r\x02\x02\u032D\u032E\x05$\x13\x02\u032E\u032F\x07" +
        "\x0E\x02\x02\u032F\u0331\x03\x02\x02\x02\u0330\u030A\x03\x02\x02\x02\u0330" +
        "\u030F\x03\x02\x02\x02\u0330\u031A\x03\x02\x02\x02\u0330\u031F\x03\x02" +
        "\x02\x02\u0330\u0324\x03\x02\x02\x02\u0330\u032B\x03\x02\x02\x02\u0331" +
        "\x91\x03\x02\x02\x02\u0332\u0333\t\t\x02\x02\u0333\x93\x03\x02\x02\x02" +
        "\u0334\u0335\x07D\x02\x02\u0335\u0336\x07\r\x02\x02\u0336\u0337\x05~@" +
        "\x02\u0337\u0338\x07\x04\x02\x02\u0338\u0339\x05~@\x02\u0339\u033A\x07" +
        "\x0E\x02\x02\u033A\u035D\x03\x02\x02\x02\u033B\u033C\x07E\x02\x02\u033C" +
        "\u033D\x07\r\x02\x02\u033D\u033E\x05~@\x02\u033E\u033F\x07\x04\x02\x02" +
        "\u033F\u0340\x05t;\x02\u0340\u0341\x07\x04\x02\x02\u0341\u0342\x05t;\x02" +
        "\u0342\u0343\x07\x0E\x02\x02\u0343\u035D\x03\x02\x02\x02\u0344\u0345\x07" +
        "F\x02\x02\u0345\u034D\x07\r\x02\x02\u0346\u0348\x05\x96L\x02\u0347\u0346" +
        "\x03\x02\x02\x02\u0347\u0348\x03\x02\x02\x02\u0348\u034A\x03\x02\x02\x02" +
        "\u0349\u034B\x07U\x02\x02\u034A\u0349\x03\x02\x02\x02\u034A\u034B\x03" +
        "\x02\x02\x02\u034B\u034C\x03\x02\x02\x02\u034C\u034E\x07\x03\x02\x02\u034D" +
        "\u0347\x03\x02\x02\x02\u034D\u034E\x03\x02\x02\x02\u034E\u034F\x03\x02" +
        "\x02\x02\u034F\u0350\x05~@\x02\u0350\u0351\x07\x0E\x02\x02\u0351\u035D" +
        "\x03\x02\x02\x02\u0352\u0353\x07G\x02\x02\u0353\u0354\x07\r\x02\x02\u0354" +
        "\u0355\x05~@\x02\u0355\u0356\x07\x0E\x02\x02\u0356\u035D\x03\x02\x02\x02" +
        "\u0357\u0358\x07H\x02\x02\u0358\u0359\x07\r\x02\x02\u0359\u035A\x05~@" +
        "\x02\u035A\u035B\x07\x0E\x02\x02\u035B\u035D\x03\x02\x02\x02\u035C\u0334" +
        "\x03\x02\x02\x02\u035C\u033B\x03\x02\x02\x02\u035C\u0344\x03\x02\x02\x02" +
        "\u035C\u0352\x03\x02\x02\x02\u035C\u0357\x03\x02\x02\x02\u035D\x95\x03" +
        "\x02\x02\x02\u035E\u035F\t\n\x02\x02\u035F\x97\x03\x02\x02\x02\u0360\u0361" +
        "\x03\x02\x02\x02\u0361\x99\x03\x02\x02\x02\u0362\u0363\x03\x02\x02\x02" +
        "\u0363\x9B\x03\x02\x02\x02\u0364\u0365\x07L\x02\x02\u0365\u0369\x07V\x02" +
        "\x02\u0366\u0367\x07M\x02\x02\u0367\u0369\x07P\x02\x02\u0368\u0364\x03" +
        "\x02\x02\x02\u0368\u0366\x03\x02\x02\x02\u0369\x9D\x03\x02\x02\x02\u036A" +
        "\u036B\x03\x02\x02\x02\u036B\x9F\x03\x02\x02\x02\u036C\u036D\x03\x02\x02" +
        "\x02\u036D\xA1\x03\x02\x02\x02\u036E\u036F\x03\x02\x02\x02\u036F\xA3\x03" +
        "\x02\x02\x02\u0370\u0371\t\v\x02\x02\u0371\xA5\x03\x02\x02\x02\u0372\u0373" +
        "\x03\x02\x02\x02\u0373\xA7\x03\x02\x02\x02\u0374\u0375\x03\x02\x02\x02" +
        "\u0375\xA9\x03\x02\x02\x02\u0376\u0377\x03\x02\x02\x02\u0377\xAB\x03\x02" +
        "\x02\x02\u0378\u0379\x03\x02\x02\x02\u0379\xAD\x03\x02\x02\x02\u037A\u037B" +
        "\x03\x02\x02\x02\u037B\xAF\x03\x02\x02\x02h\xB3\xB8\xBB\xBE\xC1\xC5\xC9" +
        "\xD0\xD4\xDA\xDC\xE1\xE8\xF2\xF5\xFB\u010A\u0110\u0114\u0120\u012C\u0136" +
        "\u013E\u0141\u0149\u014E\u0152\u015E\u0164\u0167\u016B\u0172\u017D\u0187" +
        "\u018E\u0193\u019B\u01A0\u01A3\u01AF\u01B4\u01C0\u01C5\u01CA\u01CD\u01D0" +
        "\u01D8\u01DE\u01E3\u01E7\u01EB\u01F2\u01F9\u0201\u0205\u020E\u0218\u021C" +
        "\u0225\u022E\u0235\u0239\u0242\u0246\u024C\u0250\u0256\u025A\u025E\u0265" +
        "\u026B\u026F\u0274\u0284\u028A\u0290\u0296\u029C\u02A2\u02A4\u02AD\u02B4" +
        "\u02BC\u02C0\u02CD\u02D4\u02DB\u02E2\u02E8\u02EF\u02F4\u02FB\u0300\u0304" +
        "\u0308\u0316\u0330\u0347\u034A\u034D\u035C\u0368";
    JPAParser._serializedATN = Utils.join([
        JPAParser._serializedATNSegment0,
        JPAParser._serializedATNSegment1,
    ], "");
    return JPAParser;
}(Parser_1.Parser));
exports.JPAParser = JPAParser;
var Ql_statementContext = /** @class */ (function (_super) {
    __extends(Ql_statementContext, _super);
    function Ql_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ql_statementContext.prototype.select_statement = function () {
        return this.tryGetRuleContext(0, Select_statementContext);
    };
    Ql_statementContext.prototype.update_statement = function () {
        return this.tryGetRuleContext(0, Update_statementContext);
    };
    Ql_statementContext.prototype.delete_statement = function () {
        return this.tryGetRuleContext(0, Delete_statementContext);
    };
    Object.defineProperty(Ql_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_ql_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ql_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterQl_statement) {
            listener.enterQl_statement(this);
        }
    };
    // @Override
    Ql_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitQl_statement) {
            listener.exitQl_statement(this);
        }
    };
    // @Override
    Ql_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitQl_statement) {
            return visitor.visitQl_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ql_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ql_statementContext = Ql_statementContext;
var Select_statementContext = /** @class */ (function (_super) {
    __extends(Select_statementContext, _super);
    function Select_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Select_statementContext.prototype.select_clause = function () {
        return this.getRuleContext(0, Select_clauseContext);
    };
    Select_statementContext.prototype.from_clause = function () {
        return this.getRuleContext(0, From_clauseContext);
    };
    Select_statementContext.prototype.where_clause = function () {
        return this.tryGetRuleContext(0, Where_clauseContext);
    };
    Select_statementContext.prototype.groupby_clause = function () {
        return this.tryGetRuleContext(0, Groupby_clauseContext);
    };
    Select_statementContext.prototype.having_clause = function () {
        return this.tryGetRuleContext(0, Having_clauseContext);
    };
    Select_statementContext.prototype.orderby_clause = function () {
        return this.tryGetRuleContext(0, Orderby_clauseContext);
    };
    Object.defineProperty(Select_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_select_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Select_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterSelect_statement) {
            listener.enterSelect_statement(this);
        }
    };
    // @Override
    Select_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitSelect_statement) {
            listener.exitSelect_statement(this);
        }
    };
    // @Override
    Select_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitSelect_statement) {
            return visitor.visitSelect_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Select_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Select_statementContext = Select_statementContext;
var Update_statementContext = /** @class */ (function (_super) {
    __extends(Update_statementContext, _super);
    function Update_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Update_statementContext.prototype.update_clause = function () {
        return this.getRuleContext(0, Update_clauseContext);
    };
    Update_statementContext.prototype.where_clause = function () {
        return this.tryGetRuleContext(0, Where_clauseContext);
    };
    Object.defineProperty(Update_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_update_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Update_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterUpdate_statement) {
            listener.enterUpdate_statement(this);
        }
    };
    // @Override
    Update_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitUpdate_statement) {
            listener.exitUpdate_statement(this);
        }
    };
    // @Override
    Update_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitUpdate_statement) {
            return visitor.visitUpdate_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Update_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Update_statementContext = Update_statementContext;
var Delete_statementContext = /** @class */ (function (_super) {
    __extends(Delete_statementContext, _super);
    function Delete_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Delete_statementContext.prototype.delete_clause = function () {
        return this.getRuleContext(0, Delete_clauseContext);
    };
    Delete_statementContext.prototype.where_clause = function () {
        return this.tryGetRuleContext(0, Where_clauseContext);
    };
    Object.defineProperty(Delete_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_delete_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Delete_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterDelete_statement) {
            listener.enterDelete_statement(this);
        }
    };
    // @Override
    Delete_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitDelete_statement) {
            listener.exitDelete_statement(this);
        }
    };
    // @Override
    Delete_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitDelete_statement) {
            return visitor.visitDelete_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Delete_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Delete_statementContext = Delete_statementContext;
var From_clauseContext = /** @class */ (function (_super) {
    __extends(From_clauseContext, _super);
    function From_clauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    From_clauseContext.prototype.identification_variable_declaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Identification_variable_declarationContext);
        }
        else {
            return this.getRuleContext(i, Identification_variable_declarationContext);
        }
    };
    From_clauseContext.prototype.collection_member_declaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Collection_member_declarationContext);
        }
        else {
            return this.getRuleContext(i, Collection_member_declarationContext);
        }
    };
    Object.defineProperty(From_clauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_from_clause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    From_clauseContext.prototype.enterRule = function (listener) {
        if (listener.enterFrom_clause) {
            listener.enterFrom_clause(this);
        }
    };
    // @Override
    From_clauseContext.prototype.exitRule = function (listener) {
        if (listener.exitFrom_clause) {
            listener.exitFrom_clause(this);
        }
    };
    // @Override
    From_clauseContext.prototype.accept = function (visitor) {
        if (visitor.visitFrom_clause) {
            return visitor.visitFrom_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return From_clauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.From_clauseContext = From_clauseContext;
var Identification_variable_declarationContext = /** @class */ (function (_super) {
    __extends(Identification_variable_declarationContext, _super);
    function Identification_variable_declarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Identification_variable_declarationContext.prototype.range_variable_declaration = function () {
        return this.getRuleContext(0, Range_variable_declarationContext);
    };
    Identification_variable_declarationContext.prototype.join = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(JoinContext);
        }
        else {
            return this.getRuleContext(i, JoinContext);
        }
    };
    Identification_variable_declarationContext.prototype.fetch_join = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Fetch_joinContext);
        }
        else {
            return this.getRuleContext(i, Fetch_joinContext);
        }
    };
    Object.defineProperty(Identification_variable_declarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_identification_variable_declaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Identification_variable_declarationContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentification_variable_declaration) {
            listener.enterIdentification_variable_declaration(this);
        }
    };
    // @Override
    Identification_variable_declarationContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentification_variable_declaration) {
            listener.exitIdentification_variable_declaration(this);
        }
    };
    // @Override
    Identification_variable_declarationContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentification_variable_declaration) {
            return visitor.visitIdentification_variable_declaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Identification_variable_declarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Identification_variable_declarationContext = Identification_variable_declarationContext;
var Range_variable_declarationContext = /** @class */ (function (_super) {
    __extends(Range_variable_declarationContext, _super);
    function Range_variable_declarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Range_variable_declarationContext.prototype.abstract_schema_name = function () {
        return this.getRuleContext(0, Abstract_schema_nameContext);
    };
    Range_variable_declarationContext.prototype.IDENTIFICATION_VARIABLE = function () { return this.getToken(JPAParser.IDENTIFICATION_VARIABLE, 0); };
    Object.defineProperty(Range_variable_declarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_range_variable_declaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Range_variable_declarationContext.prototype.enterRule = function (listener) {
        if (listener.enterRange_variable_declaration) {
            listener.enterRange_variable_declaration(this);
        }
    };
    // @Override
    Range_variable_declarationContext.prototype.exitRule = function (listener) {
        if (listener.exitRange_variable_declaration) {
            listener.exitRange_variable_declaration(this);
        }
    };
    // @Override
    Range_variable_declarationContext.prototype.accept = function (visitor) {
        if (visitor.visitRange_variable_declaration) {
            return visitor.visitRange_variable_declaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Range_variable_declarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Range_variable_declarationContext = Range_variable_declarationContext;
var JoinContext = /** @class */ (function (_super) {
    __extends(JoinContext, _super);
    function JoinContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    JoinContext.prototype.join_spec = function () {
        return this.getRuleContext(0, Join_specContext);
    };
    JoinContext.prototype.join_association_path_expression = function () {
        return this.getRuleContext(0, Join_association_path_expressionContext);
    };
    JoinContext.prototype.IDENTIFICATION_VARIABLE = function () { return this.getToken(JPAParser.IDENTIFICATION_VARIABLE, 0); };
    Object.defineProperty(JoinContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_join; },
        enumerable: true,
        configurable: true
    });
    // @Override
    JoinContext.prototype.enterRule = function (listener) {
        if (listener.enterJoin) {
            listener.enterJoin(this);
        }
    };
    // @Override
    JoinContext.prototype.exitRule = function (listener) {
        if (listener.exitJoin) {
            listener.exitJoin(this);
        }
    };
    // @Override
    JoinContext.prototype.accept = function (visitor) {
        if (visitor.visitJoin) {
            return visitor.visitJoin(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return JoinContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.JoinContext = JoinContext;
var Fetch_joinContext = /** @class */ (function (_super) {
    __extends(Fetch_joinContext, _super);
    function Fetch_joinContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Fetch_joinContext.prototype.join_spec = function () {
        return this.getRuleContext(0, Join_specContext);
    };
    Fetch_joinContext.prototype.join_association_path_expression = function () {
        return this.getRuleContext(0, Join_association_path_expressionContext);
    };
    Object.defineProperty(Fetch_joinContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_fetch_join; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Fetch_joinContext.prototype.enterRule = function (listener) {
        if (listener.enterFetch_join) {
            listener.enterFetch_join(this);
        }
    };
    // @Override
    Fetch_joinContext.prototype.exitRule = function (listener) {
        if (listener.exitFetch_join) {
            listener.exitFetch_join(this);
        }
    };
    // @Override
    Fetch_joinContext.prototype.accept = function (visitor) {
        if (visitor.visitFetch_join) {
            return visitor.visitFetch_join(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Fetch_joinContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Fetch_joinContext = Fetch_joinContext;
var Join_specContext = /** @class */ (function (_super) {
    __extends(Join_specContext, _super);
    function Join_specContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Join_specContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_join_spec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Join_specContext.prototype.enterRule = function (listener) {
        if (listener.enterJoin_spec) {
            listener.enterJoin_spec(this);
        }
    };
    // @Override
    Join_specContext.prototype.exitRule = function (listener) {
        if (listener.exitJoin_spec) {
            listener.exitJoin_spec(this);
        }
    };
    // @Override
    Join_specContext.prototype.accept = function (visitor) {
        if (visitor.visitJoin_spec) {
            return visitor.visitJoin_spec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Join_specContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Join_specContext = Join_specContext;
var Join_association_path_expressionContext = /** @class */ (function (_super) {
    __extends(Join_association_path_expressionContext, _super);
    function Join_association_path_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Join_association_path_expressionContext.prototype.join_collection_valued_path_expression = function () {
        return this.tryGetRuleContext(0, Join_collection_valued_path_expressionContext);
    };
    Join_association_path_expressionContext.prototype.join_single_valued_association_path_expression = function () {
        return this.tryGetRuleContext(0, Join_single_valued_association_path_expressionContext);
    };
    Object.defineProperty(Join_association_path_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_join_association_path_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Join_association_path_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterJoin_association_path_expression) {
            listener.enterJoin_association_path_expression(this);
        }
    };
    // @Override
    Join_association_path_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitJoin_association_path_expression) {
            listener.exitJoin_association_path_expression(this);
        }
    };
    // @Override
    Join_association_path_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitJoin_association_path_expression) {
            return visitor.visitJoin_association_path_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Join_association_path_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Join_association_path_expressionContext = Join_association_path_expressionContext;
var Join_collection_valued_path_expressionContext = /** @class */ (function (_super) {
    __extends(Join_collection_valued_path_expressionContext, _super);
    function Join_collection_valued_path_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Join_collection_valued_path_expressionContext.prototype.IDENTIFICATION_VARIABLE = function () { return this.getToken(JPAParser.IDENTIFICATION_VARIABLE, 0); };
    Join_collection_valued_path_expressionContext.prototype.collection_valued_association_field = function () {
        return this.getRuleContext(0, Collection_valued_association_fieldContext);
    };
    Object.defineProperty(Join_collection_valued_path_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_join_collection_valued_path_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Join_collection_valued_path_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterJoin_collection_valued_path_expression) {
            listener.enterJoin_collection_valued_path_expression(this);
        }
    };
    // @Override
    Join_collection_valued_path_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitJoin_collection_valued_path_expression) {
            listener.exitJoin_collection_valued_path_expression(this);
        }
    };
    // @Override
    Join_collection_valued_path_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitJoin_collection_valued_path_expression) {
            return visitor.visitJoin_collection_valued_path_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Join_collection_valued_path_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Join_collection_valued_path_expressionContext = Join_collection_valued_path_expressionContext;
var Join_single_valued_association_path_expressionContext = /** @class */ (function (_super) {
    __extends(Join_single_valued_association_path_expressionContext, _super);
    function Join_single_valued_association_path_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Join_single_valued_association_path_expressionContext.prototype.IDENTIFICATION_VARIABLE = function () { return this.getToken(JPAParser.IDENTIFICATION_VARIABLE, 0); };
    Join_single_valued_association_path_expressionContext.prototype.single_valued_association_field = function () {
        return this.getRuleContext(0, Single_valued_association_fieldContext);
    };
    Object.defineProperty(Join_single_valued_association_path_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_join_single_valued_association_path_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Join_single_valued_association_path_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterJoin_single_valued_association_path_expression) {
            listener.enterJoin_single_valued_association_path_expression(this);
        }
    };
    // @Override
    Join_single_valued_association_path_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitJoin_single_valued_association_path_expression) {
            listener.exitJoin_single_valued_association_path_expression(this);
        }
    };
    // @Override
    Join_single_valued_association_path_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitJoin_single_valued_association_path_expression) {
            return visitor.visitJoin_single_valued_association_path_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Join_single_valued_association_path_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Join_single_valued_association_path_expressionContext = Join_single_valued_association_path_expressionContext;
var Collection_member_declarationContext = /** @class */ (function (_super) {
    __extends(Collection_member_declarationContext, _super);
    function Collection_member_declarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Collection_member_declarationContext.prototype.collection_valued_path_expression = function () {
        return this.getRuleContext(0, Collection_valued_path_expressionContext);
    };
    Collection_member_declarationContext.prototype.IDENTIFICATION_VARIABLE = function () { return this.getToken(JPAParser.IDENTIFICATION_VARIABLE, 0); };
    Object.defineProperty(Collection_member_declarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_collection_member_declaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Collection_member_declarationContext.prototype.enterRule = function (listener) {
        if (listener.enterCollection_member_declaration) {
            listener.enterCollection_member_declaration(this);
        }
    };
    // @Override
    Collection_member_declarationContext.prototype.exitRule = function (listener) {
        if (listener.exitCollection_member_declaration) {
            listener.exitCollection_member_declaration(this);
        }
    };
    // @Override
    Collection_member_declarationContext.prototype.accept = function (visitor) {
        if (visitor.visitCollection_member_declaration) {
            return visitor.visitCollection_member_declaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Collection_member_declarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Collection_member_declarationContext = Collection_member_declarationContext;
var Single_valued_path_expressionContext = /** @class */ (function (_super) {
    __extends(Single_valued_path_expressionContext, _super);
    function Single_valued_path_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Single_valued_path_expressionContext.prototype.state_field_path_expression = function () {
        return this.tryGetRuleContext(0, State_field_path_expressionContext);
    };
    Single_valued_path_expressionContext.prototype.single_valued_association_path_expression = function () {
        return this.tryGetRuleContext(0, Single_valued_association_path_expressionContext);
    };
    Object.defineProperty(Single_valued_path_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_single_valued_path_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Single_valued_path_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterSingle_valued_path_expression) {
            listener.enterSingle_valued_path_expression(this);
        }
    };
    // @Override
    Single_valued_path_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitSingle_valued_path_expression) {
            listener.exitSingle_valued_path_expression(this);
        }
    };
    // @Override
    Single_valued_path_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitSingle_valued_path_expression) {
            return visitor.visitSingle_valued_path_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Single_valued_path_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Single_valued_path_expressionContext = Single_valued_path_expressionContext;
var State_field_path_expressionContext = /** @class */ (function (_super) {
    __extends(State_field_path_expressionContext, _super);
    function State_field_path_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    State_field_path_expressionContext.prototype.state_field = function () {
        return this.getRuleContext(0, State_fieldContext);
    };
    State_field_path_expressionContext.prototype.IDENTIFICATION_VARIABLE = function () { return this.tryGetToken(JPAParser.IDENTIFICATION_VARIABLE, 0); };
    State_field_path_expressionContext.prototype.single_valued_association_path_expression = function () {
        return this.tryGetRuleContext(0, Single_valued_association_path_expressionContext);
    };
    Object.defineProperty(State_field_path_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_state_field_path_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    State_field_path_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterState_field_path_expression) {
            listener.enterState_field_path_expression(this);
        }
    };
    // @Override
    State_field_path_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitState_field_path_expression) {
            listener.exitState_field_path_expression(this);
        }
    };
    // @Override
    State_field_path_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitState_field_path_expression) {
            return visitor.visitState_field_path_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return State_field_path_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.State_field_path_expressionContext = State_field_path_expressionContext;
var Single_valued_association_path_expressionContext = /** @class */ (function (_super) {
    __extends(Single_valued_association_path_expressionContext, _super);
    function Single_valued_association_path_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Single_valued_association_path_expressionContext.prototype.IDENTIFICATION_VARIABLE = function () { return this.getToken(JPAParser.IDENTIFICATION_VARIABLE, 0); };
    Single_valued_association_path_expressionContext.prototype.single_valued_association_field = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Single_valued_association_fieldContext);
        }
        else {
            return this.getRuleContext(i, Single_valued_association_fieldContext);
        }
    };
    Object.defineProperty(Single_valued_association_path_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_single_valued_association_path_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Single_valued_association_path_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterSingle_valued_association_path_expression) {
            listener.enterSingle_valued_association_path_expression(this);
        }
    };
    // @Override
    Single_valued_association_path_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitSingle_valued_association_path_expression) {
            listener.exitSingle_valued_association_path_expression(this);
        }
    };
    // @Override
    Single_valued_association_path_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitSingle_valued_association_path_expression) {
            return visitor.visitSingle_valued_association_path_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Single_valued_association_path_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Single_valued_association_path_expressionContext = Single_valued_association_path_expressionContext;
var Collection_valued_path_expressionContext = /** @class */ (function (_super) {
    __extends(Collection_valued_path_expressionContext, _super);
    function Collection_valued_path_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Collection_valued_path_expressionContext.prototype.IDENTIFICATION_VARIABLE = function () { return this.getToken(JPAParser.IDENTIFICATION_VARIABLE, 0); };
    Collection_valued_path_expressionContext.prototype.collection_valued_association_field = function () {
        return this.getRuleContext(0, Collection_valued_association_fieldContext);
    };
    Collection_valued_path_expressionContext.prototype.single_valued_association_field = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Single_valued_association_fieldContext);
        }
        else {
            return this.getRuleContext(i, Single_valued_association_fieldContext);
        }
    };
    Object.defineProperty(Collection_valued_path_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_collection_valued_path_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Collection_valued_path_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterCollection_valued_path_expression) {
            listener.enterCollection_valued_path_expression(this);
        }
    };
    // @Override
    Collection_valued_path_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitCollection_valued_path_expression) {
            listener.exitCollection_valued_path_expression(this);
        }
    };
    // @Override
    Collection_valued_path_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitCollection_valued_path_expression) {
            return visitor.visitCollection_valued_path_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Collection_valued_path_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Collection_valued_path_expressionContext = Collection_valued_path_expressionContext;
var State_fieldContext = /** @class */ (function (_super) {
    __extends(State_fieldContext, _super);
    function State_fieldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    State_fieldContext.prototype.simple_state_field = function () {
        return this.getRuleContext(0, Simple_state_fieldContext);
    };
    State_fieldContext.prototype.embedded_class_state_field = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Embedded_class_state_fieldContext);
        }
        else {
            return this.getRuleContext(i, Embedded_class_state_fieldContext);
        }
    };
    Object.defineProperty(State_fieldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_state_field; },
        enumerable: true,
        configurable: true
    });
    // @Override
    State_fieldContext.prototype.enterRule = function (listener) {
        if (listener.enterState_field) {
            listener.enterState_field(this);
        }
    };
    // @Override
    State_fieldContext.prototype.exitRule = function (listener) {
        if (listener.exitState_field) {
            listener.exitState_field(this);
        }
    };
    // @Override
    State_fieldContext.prototype.accept = function (visitor) {
        if (visitor.visitState_field) {
            return visitor.visitState_field(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return State_fieldContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.State_fieldContext = State_fieldContext;
var Update_clauseContext = /** @class */ (function (_super) {
    __extends(Update_clauseContext, _super);
    function Update_clauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Update_clauseContext.prototype.abstract_schema_name = function () {
        return this.getRuleContext(0, Abstract_schema_nameContext);
    };
    Update_clauseContext.prototype.update_item = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Update_itemContext);
        }
        else {
            return this.getRuleContext(i, Update_itemContext);
        }
    };
    Update_clauseContext.prototype.IDENTIFICATION_VARIABLE = function () { return this.tryGetToken(JPAParser.IDENTIFICATION_VARIABLE, 0); };
    Object.defineProperty(Update_clauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_update_clause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Update_clauseContext.prototype.enterRule = function (listener) {
        if (listener.enterUpdate_clause) {
            listener.enterUpdate_clause(this);
        }
    };
    // @Override
    Update_clauseContext.prototype.exitRule = function (listener) {
        if (listener.exitUpdate_clause) {
            listener.exitUpdate_clause(this);
        }
    };
    // @Override
    Update_clauseContext.prototype.accept = function (visitor) {
        if (visitor.visitUpdate_clause) {
            return visitor.visitUpdate_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Update_clauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Update_clauseContext = Update_clauseContext;
var Update_itemContext = /** @class */ (function (_super) {
    __extends(Update_itemContext, _super);
    function Update_itemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Update_itemContext.prototype.new_value = function () {
        return this.getRuleContext(0, New_valueContext);
    };
    Update_itemContext.prototype.state_field = function () {
        return this.tryGetRuleContext(0, State_fieldContext);
    };
    Update_itemContext.prototype.single_valued_association_field = function () {
        return this.tryGetRuleContext(0, Single_valued_association_fieldContext);
    };
    Update_itemContext.prototype.IDENTIFICATION_VARIABLE = function () { return this.tryGetToken(JPAParser.IDENTIFICATION_VARIABLE, 0); };
    Object.defineProperty(Update_itemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_update_item; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Update_itemContext.prototype.enterRule = function (listener) {
        if (listener.enterUpdate_item) {
            listener.enterUpdate_item(this);
        }
    };
    // @Override
    Update_itemContext.prototype.exitRule = function (listener) {
        if (listener.exitUpdate_item) {
            listener.exitUpdate_item(this);
        }
    };
    // @Override
    Update_itemContext.prototype.accept = function (visitor) {
        if (visitor.visitUpdate_item) {
            return visitor.visitUpdate_item(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Update_itemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Update_itemContext = Update_itemContext;
var New_valueContext = /** @class */ (function (_super) {
    __extends(New_valueContext, _super);
    function New_valueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    New_valueContext.prototype.simple_arithmetic_expression = function () {
        return this.tryGetRuleContext(0, Simple_arithmetic_expressionContext);
    };
    New_valueContext.prototype.string_primary = function () {
        return this.tryGetRuleContext(0, String_primaryContext);
    };
    New_valueContext.prototype.datetime_primary = function () {
        return this.tryGetRuleContext(0, Datetime_primaryContext);
    };
    New_valueContext.prototype.boolean_primary = function () {
        return this.tryGetRuleContext(0, Boolean_primaryContext);
    };
    New_valueContext.prototype.enum_primary = function () {
        return this.tryGetRuleContext(0, Enum_primaryContext);
    };
    New_valueContext.prototype.simple_entity_expression = function () {
        return this.tryGetRuleContext(0, Simple_entity_expressionContext);
    };
    Object.defineProperty(New_valueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_new_value; },
        enumerable: true,
        configurable: true
    });
    // @Override
    New_valueContext.prototype.enterRule = function (listener) {
        if (listener.enterNew_value) {
            listener.enterNew_value(this);
        }
    };
    // @Override
    New_valueContext.prototype.exitRule = function (listener) {
        if (listener.exitNew_value) {
            listener.exitNew_value(this);
        }
    };
    // @Override
    New_valueContext.prototype.accept = function (visitor) {
        if (visitor.visitNew_value) {
            return visitor.visitNew_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return New_valueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.New_valueContext = New_valueContext;
var Delete_clauseContext = /** @class */ (function (_super) {
    __extends(Delete_clauseContext, _super);
    function Delete_clauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Delete_clauseContext.prototype.abstract_schema_name = function () {
        return this.getRuleContext(0, Abstract_schema_nameContext);
    };
    Delete_clauseContext.prototype.IDENTIFICATION_VARIABLE = function () { return this.tryGetToken(JPAParser.IDENTIFICATION_VARIABLE, 0); };
    Object.defineProperty(Delete_clauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_delete_clause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Delete_clauseContext.prototype.enterRule = function (listener) {
        if (listener.enterDelete_clause) {
            listener.enterDelete_clause(this);
        }
    };
    // @Override
    Delete_clauseContext.prototype.exitRule = function (listener) {
        if (listener.exitDelete_clause) {
            listener.exitDelete_clause(this);
        }
    };
    // @Override
    Delete_clauseContext.prototype.accept = function (visitor) {
        if (visitor.visitDelete_clause) {
            return visitor.visitDelete_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Delete_clauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Delete_clauseContext = Delete_clauseContext;
var Select_clauseContext = /** @class */ (function (_super) {
    __extends(Select_clauseContext, _super);
    function Select_clauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Select_clauseContext.prototype.select_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Select_expressionContext);
        }
        else {
            return this.getRuleContext(i, Select_expressionContext);
        }
    };
    Object.defineProperty(Select_clauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_select_clause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Select_clauseContext.prototype.enterRule = function (listener) {
        if (listener.enterSelect_clause) {
            listener.enterSelect_clause(this);
        }
    };
    // @Override
    Select_clauseContext.prototype.exitRule = function (listener) {
        if (listener.exitSelect_clause) {
            listener.exitSelect_clause(this);
        }
    };
    // @Override
    Select_clauseContext.prototype.accept = function (visitor) {
        if (visitor.visitSelect_clause) {
            return visitor.visitSelect_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Select_clauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Select_clauseContext = Select_clauseContext;
var Select_expressionContext = /** @class */ (function (_super) {
    __extends(Select_expressionContext, _super);
    function Select_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Select_expressionContext.prototype.single_valued_path_expression = function () {
        return this.tryGetRuleContext(0, Single_valued_path_expressionContext);
    };
    Select_expressionContext.prototype.aggregate_expression = function () {
        return this.tryGetRuleContext(0, Aggregate_expressionContext);
    };
    Select_expressionContext.prototype.IDENTIFICATION_VARIABLE = function () { return this.tryGetToken(JPAParser.IDENTIFICATION_VARIABLE, 0); };
    Select_expressionContext.prototype.constructor_expression = function () {
        return this.tryGetRuleContext(0, Constructor_expressionContext);
    };
    Object.defineProperty(Select_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_select_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Select_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterSelect_expression) {
            listener.enterSelect_expression(this);
        }
    };
    // @Override
    Select_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitSelect_expression) {
            listener.exitSelect_expression(this);
        }
    };
    // @Override
    Select_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitSelect_expression) {
            return visitor.visitSelect_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Select_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Select_expressionContext = Select_expressionContext;
var Constructor_expressionContext = /** @class */ (function (_super) {
    __extends(Constructor_expressionContext, _super);
    function Constructor_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Constructor_expressionContext.prototype.constructor_name = function () {
        return this.getRuleContext(0, Constructor_nameContext);
    };
    Constructor_expressionContext.prototype.constructor_item = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Constructor_itemContext);
        }
        else {
            return this.getRuleContext(i, Constructor_itemContext);
        }
    };
    Object.defineProperty(Constructor_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_constructor_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Constructor_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterConstructor_expression) {
            listener.enterConstructor_expression(this);
        }
    };
    // @Override
    Constructor_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitConstructor_expression) {
            listener.exitConstructor_expression(this);
        }
    };
    // @Override
    Constructor_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitConstructor_expression) {
            return visitor.visitConstructor_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Constructor_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Constructor_expressionContext = Constructor_expressionContext;
var Constructor_itemContext = /** @class */ (function (_super) {
    __extends(Constructor_itemContext, _super);
    function Constructor_itemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Constructor_itemContext.prototype.single_valued_path_expression = function () {
        return this.tryGetRuleContext(0, Single_valued_path_expressionContext);
    };
    Constructor_itemContext.prototype.aggregate_expression = function () {
        return this.tryGetRuleContext(0, Aggregate_expressionContext);
    };
    Object.defineProperty(Constructor_itemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_constructor_item; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Constructor_itemContext.prototype.enterRule = function (listener) {
        if (listener.enterConstructor_item) {
            listener.enterConstructor_item(this);
        }
    };
    // @Override
    Constructor_itemContext.prototype.exitRule = function (listener) {
        if (listener.exitConstructor_item) {
            listener.exitConstructor_item(this);
        }
    };
    // @Override
    Constructor_itemContext.prototype.accept = function (visitor) {
        if (visitor.visitConstructor_item) {
            return visitor.visitConstructor_item(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Constructor_itemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Constructor_itemContext = Constructor_itemContext;
var Aggregate_expressionContext = /** @class */ (function (_super) {
    __extends(Aggregate_expressionContext, _super);
    function Aggregate_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Aggregate_expressionContext.prototype.state_field_path_expression = function () {
        return this.tryGetRuleContext(0, State_field_path_expressionContext);
    };
    Aggregate_expressionContext.prototype.IDENTIFICATION_VARIABLE = function () { return this.tryGetToken(JPAParser.IDENTIFICATION_VARIABLE, 0); };
    Aggregate_expressionContext.prototype.single_valued_association_path_expression = function () {
        return this.tryGetRuleContext(0, Single_valued_association_path_expressionContext);
    };
    Object.defineProperty(Aggregate_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_aggregate_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Aggregate_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAggregate_expression) {
            listener.enterAggregate_expression(this);
        }
    };
    // @Override
    Aggregate_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAggregate_expression) {
            listener.exitAggregate_expression(this);
        }
    };
    // @Override
    Aggregate_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAggregate_expression) {
            return visitor.visitAggregate_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Aggregate_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Aggregate_expressionContext = Aggregate_expressionContext;
var Where_clauseContext = /** @class */ (function (_super) {
    __extends(Where_clauseContext, _super);
    function Where_clauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Where_clauseContext.prototype.conditional_expression = function () {
        return this.getRuleContext(0, Conditional_expressionContext);
    };
    Object.defineProperty(Where_clauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_where_clause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Where_clauseContext.prototype.enterRule = function (listener) {
        if (listener.enterWhere_clause) {
            listener.enterWhere_clause(this);
        }
    };
    // @Override
    Where_clauseContext.prototype.exitRule = function (listener) {
        if (listener.exitWhere_clause) {
            listener.exitWhere_clause(this);
        }
    };
    // @Override
    Where_clauseContext.prototype.accept = function (visitor) {
        if (visitor.visitWhere_clause) {
            return visitor.visitWhere_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Where_clauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Where_clauseContext = Where_clauseContext;
var Groupby_clauseContext = /** @class */ (function (_super) {
    __extends(Groupby_clauseContext, _super);
    function Groupby_clauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Groupby_clauseContext.prototype.groupby_item = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Groupby_itemContext);
        }
        else {
            return this.getRuleContext(i, Groupby_itemContext);
        }
    };
    Object.defineProperty(Groupby_clauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_groupby_clause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Groupby_clauseContext.prototype.enterRule = function (listener) {
        if (listener.enterGroupby_clause) {
            listener.enterGroupby_clause(this);
        }
    };
    // @Override
    Groupby_clauseContext.prototype.exitRule = function (listener) {
        if (listener.exitGroupby_clause) {
            listener.exitGroupby_clause(this);
        }
    };
    // @Override
    Groupby_clauseContext.prototype.accept = function (visitor) {
        if (visitor.visitGroupby_clause) {
            return visitor.visitGroupby_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Groupby_clauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Groupby_clauseContext = Groupby_clauseContext;
var Groupby_itemContext = /** @class */ (function (_super) {
    __extends(Groupby_itemContext, _super);
    function Groupby_itemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Groupby_itemContext.prototype.single_valued_path_expression = function () {
        return this.tryGetRuleContext(0, Single_valued_path_expressionContext);
    };
    Groupby_itemContext.prototype.IDENTIFICATION_VARIABLE = function () { return this.tryGetToken(JPAParser.IDENTIFICATION_VARIABLE, 0); };
    Object.defineProperty(Groupby_itemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_groupby_item; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Groupby_itemContext.prototype.enterRule = function (listener) {
        if (listener.enterGroupby_item) {
            listener.enterGroupby_item(this);
        }
    };
    // @Override
    Groupby_itemContext.prototype.exitRule = function (listener) {
        if (listener.exitGroupby_item) {
            listener.exitGroupby_item(this);
        }
    };
    // @Override
    Groupby_itemContext.prototype.accept = function (visitor) {
        if (visitor.visitGroupby_item) {
            return visitor.visitGroupby_item(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Groupby_itemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Groupby_itemContext = Groupby_itemContext;
var Having_clauseContext = /** @class */ (function (_super) {
    __extends(Having_clauseContext, _super);
    function Having_clauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Having_clauseContext.prototype.conditional_expression = function () {
        return this.getRuleContext(0, Conditional_expressionContext);
    };
    Object.defineProperty(Having_clauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_having_clause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Having_clauseContext.prototype.enterRule = function (listener) {
        if (listener.enterHaving_clause) {
            listener.enterHaving_clause(this);
        }
    };
    // @Override
    Having_clauseContext.prototype.exitRule = function (listener) {
        if (listener.exitHaving_clause) {
            listener.exitHaving_clause(this);
        }
    };
    // @Override
    Having_clauseContext.prototype.accept = function (visitor) {
        if (visitor.visitHaving_clause) {
            return visitor.visitHaving_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Having_clauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Having_clauseContext = Having_clauseContext;
var Orderby_clauseContext = /** @class */ (function (_super) {
    __extends(Orderby_clauseContext, _super);
    function Orderby_clauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Orderby_clauseContext.prototype.orderby_item = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Orderby_itemContext);
        }
        else {
            return this.getRuleContext(i, Orderby_itemContext);
        }
    };
    Object.defineProperty(Orderby_clauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_orderby_clause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Orderby_clauseContext.prototype.enterRule = function (listener) {
        if (listener.enterOrderby_clause) {
            listener.enterOrderby_clause(this);
        }
    };
    // @Override
    Orderby_clauseContext.prototype.exitRule = function (listener) {
        if (listener.exitOrderby_clause) {
            listener.exitOrderby_clause(this);
        }
    };
    // @Override
    Orderby_clauseContext.prototype.accept = function (visitor) {
        if (visitor.visitOrderby_clause) {
            return visitor.visitOrderby_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Orderby_clauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Orderby_clauseContext = Orderby_clauseContext;
var Orderby_itemContext = /** @class */ (function (_super) {
    __extends(Orderby_itemContext, _super);
    function Orderby_itemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Orderby_itemContext.prototype.state_field_path_expression = function () {
        return this.getRuleContext(0, State_field_path_expressionContext);
    };
    Object.defineProperty(Orderby_itemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_orderby_item; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Orderby_itemContext.prototype.enterRule = function (listener) {
        if (listener.enterOrderby_item) {
            listener.enterOrderby_item(this);
        }
    };
    // @Override
    Orderby_itemContext.prototype.exitRule = function (listener) {
        if (listener.exitOrderby_item) {
            listener.exitOrderby_item(this);
        }
    };
    // @Override
    Orderby_itemContext.prototype.accept = function (visitor) {
        if (visitor.visitOrderby_item) {
            return visitor.visitOrderby_item(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Orderby_itemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Orderby_itemContext = Orderby_itemContext;
var SubqueryContext = /** @class */ (function (_super) {
    __extends(SubqueryContext, _super);
    function SubqueryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubqueryContext.prototype.simple_select_clause = function () {
        return this.getRuleContext(0, Simple_select_clauseContext);
    };
    SubqueryContext.prototype.subquery_from_clause = function () {
        return this.getRuleContext(0, Subquery_from_clauseContext);
    };
    SubqueryContext.prototype.where_clause = function () {
        return this.tryGetRuleContext(0, Where_clauseContext);
    };
    SubqueryContext.prototype.groupby_clause = function () {
        return this.tryGetRuleContext(0, Groupby_clauseContext);
    };
    SubqueryContext.prototype.having_clause = function () {
        return this.tryGetRuleContext(0, Having_clauseContext);
    };
    Object.defineProperty(SubqueryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_subquery; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubqueryContext.prototype.enterRule = function (listener) {
        if (listener.enterSubquery) {
            listener.enterSubquery(this);
        }
    };
    // @Override
    SubqueryContext.prototype.exitRule = function (listener) {
        if (listener.exitSubquery) {
            listener.exitSubquery(this);
        }
    };
    // @Override
    SubqueryContext.prototype.accept = function (visitor) {
        if (visitor.visitSubquery) {
            return visitor.visitSubquery(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubqueryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubqueryContext = SubqueryContext;
var Subquery_from_clauseContext = /** @class */ (function (_super) {
    __extends(Subquery_from_clauseContext, _super);
    function Subquery_from_clauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Subquery_from_clauseContext.prototype.subselect_identification_variable_declaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Subselect_identification_variable_declarationContext);
        }
        else {
            return this.getRuleContext(i, Subselect_identification_variable_declarationContext);
        }
    };
    Object.defineProperty(Subquery_from_clauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_subquery_from_clause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Subquery_from_clauseContext.prototype.enterRule = function (listener) {
        if (listener.enterSubquery_from_clause) {
            listener.enterSubquery_from_clause(this);
        }
    };
    // @Override
    Subquery_from_clauseContext.prototype.exitRule = function (listener) {
        if (listener.exitSubquery_from_clause) {
            listener.exitSubquery_from_clause(this);
        }
    };
    // @Override
    Subquery_from_clauseContext.prototype.accept = function (visitor) {
        if (visitor.visitSubquery_from_clause) {
            return visitor.visitSubquery_from_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Subquery_from_clauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Subquery_from_clauseContext = Subquery_from_clauseContext;
var Subselect_identification_variable_declarationContext = /** @class */ (function (_super) {
    __extends(Subselect_identification_variable_declarationContext, _super);
    function Subselect_identification_variable_declarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Subselect_identification_variable_declarationContext.prototype.identification_variable_declaration = function () {
        return this.tryGetRuleContext(0, Identification_variable_declarationContext);
    };
    Subselect_identification_variable_declarationContext.prototype.association_path_expression = function () {
        return this.tryGetRuleContext(0, Association_path_expressionContext);
    };
    Subselect_identification_variable_declarationContext.prototype.IDENTIFICATION_VARIABLE = function () { return this.tryGetToken(JPAParser.IDENTIFICATION_VARIABLE, 0); };
    Subselect_identification_variable_declarationContext.prototype.collection_member_declaration = function () {
        return this.tryGetRuleContext(0, Collection_member_declarationContext);
    };
    Object.defineProperty(Subselect_identification_variable_declarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_subselect_identification_variable_declaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Subselect_identification_variable_declarationContext.prototype.enterRule = function (listener) {
        if (listener.enterSubselect_identification_variable_declaration) {
            listener.enterSubselect_identification_variable_declaration(this);
        }
    };
    // @Override
    Subselect_identification_variable_declarationContext.prototype.exitRule = function (listener) {
        if (listener.exitSubselect_identification_variable_declaration) {
            listener.exitSubselect_identification_variable_declaration(this);
        }
    };
    // @Override
    Subselect_identification_variable_declarationContext.prototype.accept = function (visitor) {
        if (visitor.visitSubselect_identification_variable_declaration) {
            return visitor.visitSubselect_identification_variable_declaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Subselect_identification_variable_declarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Subselect_identification_variable_declarationContext = Subselect_identification_variable_declarationContext;
var Association_path_expressionContext = /** @class */ (function (_super) {
    __extends(Association_path_expressionContext, _super);
    function Association_path_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Association_path_expressionContext.prototype.collection_valued_path_expression = function () {
        return this.tryGetRuleContext(0, Collection_valued_path_expressionContext);
    };
    Association_path_expressionContext.prototype.single_valued_association_path_expression = function () {
        return this.tryGetRuleContext(0, Single_valued_association_path_expressionContext);
    };
    Object.defineProperty(Association_path_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_association_path_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Association_path_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAssociation_path_expression) {
            listener.enterAssociation_path_expression(this);
        }
    };
    // @Override
    Association_path_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAssociation_path_expression) {
            listener.exitAssociation_path_expression(this);
        }
    };
    // @Override
    Association_path_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAssociation_path_expression) {
            return visitor.visitAssociation_path_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Association_path_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Association_path_expressionContext = Association_path_expressionContext;
var Simple_select_clauseContext = /** @class */ (function (_super) {
    __extends(Simple_select_clauseContext, _super);
    function Simple_select_clauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Simple_select_clauseContext.prototype.simple_select_expression = function () {
        return this.getRuleContext(0, Simple_select_expressionContext);
    };
    Object.defineProperty(Simple_select_clauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_simple_select_clause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Simple_select_clauseContext.prototype.enterRule = function (listener) {
        if (listener.enterSimple_select_clause) {
            listener.enterSimple_select_clause(this);
        }
    };
    // @Override
    Simple_select_clauseContext.prototype.exitRule = function (listener) {
        if (listener.exitSimple_select_clause) {
            listener.exitSimple_select_clause(this);
        }
    };
    // @Override
    Simple_select_clauseContext.prototype.accept = function (visitor) {
        if (visitor.visitSimple_select_clause) {
            return visitor.visitSimple_select_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Simple_select_clauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Simple_select_clauseContext = Simple_select_clauseContext;
var Simple_select_expressionContext = /** @class */ (function (_super) {
    __extends(Simple_select_expressionContext, _super);
    function Simple_select_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Simple_select_expressionContext.prototype.single_valued_path_expression = function () {
        return this.tryGetRuleContext(0, Single_valued_path_expressionContext);
    };
    Simple_select_expressionContext.prototype.aggregate_expression = function () {
        return this.tryGetRuleContext(0, Aggregate_expressionContext);
    };
    Simple_select_expressionContext.prototype.IDENTIFICATION_VARIABLE = function () { return this.tryGetToken(JPAParser.IDENTIFICATION_VARIABLE, 0); };
    Object.defineProperty(Simple_select_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_simple_select_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Simple_select_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterSimple_select_expression) {
            listener.enterSimple_select_expression(this);
        }
    };
    // @Override
    Simple_select_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitSimple_select_expression) {
            listener.exitSimple_select_expression(this);
        }
    };
    // @Override
    Simple_select_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitSimple_select_expression) {
            return visitor.visitSimple_select_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Simple_select_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Simple_select_expressionContext = Simple_select_expressionContext;
var Conditional_expressionContext = /** @class */ (function (_super) {
    __extends(Conditional_expressionContext, _super);
    function Conditional_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Conditional_expressionContext.prototype.conditional_term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Conditional_termContext);
        }
        else {
            return this.getRuleContext(i, Conditional_termContext);
        }
    };
    Object.defineProperty(Conditional_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_conditional_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Conditional_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterConditional_expression) {
            listener.enterConditional_expression(this);
        }
    };
    // @Override
    Conditional_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitConditional_expression) {
            listener.exitConditional_expression(this);
        }
    };
    // @Override
    Conditional_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitConditional_expression) {
            return visitor.visitConditional_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Conditional_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Conditional_expressionContext = Conditional_expressionContext;
var Conditional_termContext = /** @class */ (function (_super) {
    __extends(Conditional_termContext, _super);
    function Conditional_termContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Conditional_termContext.prototype.conditional_factor = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Conditional_factorContext);
        }
        else {
            return this.getRuleContext(i, Conditional_factorContext);
        }
    };
    Object.defineProperty(Conditional_termContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_conditional_term; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Conditional_termContext.prototype.enterRule = function (listener) {
        if (listener.enterConditional_term) {
            listener.enterConditional_term(this);
        }
    };
    // @Override
    Conditional_termContext.prototype.exitRule = function (listener) {
        if (listener.exitConditional_term) {
            listener.exitConditional_term(this);
        }
    };
    // @Override
    Conditional_termContext.prototype.accept = function (visitor) {
        if (visitor.visitConditional_term) {
            return visitor.visitConditional_term(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Conditional_termContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Conditional_termContext = Conditional_termContext;
var Conditional_factorContext = /** @class */ (function (_super) {
    __extends(Conditional_factorContext, _super);
    function Conditional_factorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Conditional_factorContext.prototype.conditional_primary = function () {
        return this.getRuleContext(0, Conditional_primaryContext);
    };
    Object.defineProperty(Conditional_factorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_conditional_factor; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Conditional_factorContext.prototype.enterRule = function (listener) {
        if (listener.enterConditional_factor) {
            listener.enterConditional_factor(this);
        }
    };
    // @Override
    Conditional_factorContext.prototype.exitRule = function (listener) {
        if (listener.exitConditional_factor) {
            listener.exitConditional_factor(this);
        }
    };
    // @Override
    Conditional_factorContext.prototype.accept = function (visitor) {
        if (visitor.visitConditional_factor) {
            return visitor.visitConditional_factor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Conditional_factorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Conditional_factorContext = Conditional_factorContext;
var Conditional_primaryContext = /** @class */ (function (_super) {
    __extends(Conditional_primaryContext, _super);
    function Conditional_primaryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Conditional_primaryContext.prototype.simple_cond_expression = function () {
        return this.tryGetRuleContext(0, Simple_cond_expressionContext);
    };
    Conditional_primaryContext.prototype.conditional_expression = function () {
        return this.tryGetRuleContext(0, Conditional_expressionContext);
    };
    Object.defineProperty(Conditional_primaryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_conditional_primary; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Conditional_primaryContext.prototype.enterRule = function (listener) {
        if (listener.enterConditional_primary) {
            listener.enterConditional_primary(this);
        }
    };
    // @Override
    Conditional_primaryContext.prototype.exitRule = function (listener) {
        if (listener.exitConditional_primary) {
            listener.exitConditional_primary(this);
        }
    };
    // @Override
    Conditional_primaryContext.prototype.accept = function (visitor) {
        if (visitor.visitConditional_primary) {
            return visitor.visitConditional_primary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Conditional_primaryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Conditional_primaryContext = Conditional_primaryContext;
var Simple_cond_expressionContext = /** @class */ (function (_super) {
    __extends(Simple_cond_expressionContext, _super);
    function Simple_cond_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Simple_cond_expressionContext.prototype.comparison_expression = function () {
        return this.tryGetRuleContext(0, Comparison_expressionContext);
    };
    Simple_cond_expressionContext.prototype.between_expression = function () {
        return this.tryGetRuleContext(0, Between_expressionContext);
    };
    Simple_cond_expressionContext.prototype.like_expression = function () {
        return this.tryGetRuleContext(0, Like_expressionContext);
    };
    Simple_cond_expressionContext.prototype.in_expression = function () {
        return this.tryGetRuleContext(0, In_expressionContext);
    };
    Simple_cond_expressionContext.prototype.null_comparison_expression = function () {
        return this.tryGetRuleContext(0, Null_comparison_expressionContext);
    };
    Simple_cond_expressionContext.prototype.empty_collection_comparison_expression = function () {
        return this.tryGetRuleContext(0, Empty_collection_comparison_expressionContext);
    };
    Simple_cond_expressionContext.prototype.collection_member_expression = function () {
        return this.tryGetRuleContext(0, Collection_member_expressionContext);
    };
    Simple_cond_expressionContext.prototype.exists_expression = function () {
        return this.tryGetRuleContext(0, Exists_expressionContext);
    };
    Object.defineProperty(Simple_cond_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_simple_cond_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Simple_cond_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterSimple_cond_expression) {
            listener.enterSimple_cond_expression(this);
        }
    };
    // @Override
    Simple_cond_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitSimple_cond_expression) {
            listener.exitSimple_cond_expression(this);
        }
    };
    // @Override
    Simple_cond_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitSimple_cond_expression) {
            return visitor.visitSimple_cond_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Simple_cond_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Simple_cond_expressionContext = Simple_cond_expressionContext;
var Between_expressionContext = /** @class */ (function (_super) {
    __extends(Between_expressionContext, _super);
    function Between_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Between_expressionContext.prototype.arithmetic_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Arithmetic_expressionContext);
        }
        else {
            return this.getRuleContext(i, Arithmetic_expressionContext);
        }
    };
    Between_expressionContext.prototype.string_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(String_expressionContext);
        }
        else {
            return this.getRuleContext(i, String_expressionContext);
        }
    };
    Between_expressionContext.prototype.datetime_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Datetime_expressionContext);
        }
        else {
            return this.getRuleContext(i, Datetime_expressionContext);
        }
    };
    Object.defineProperty(Between_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_between_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Between_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterBetween_expression) {
            listener.enterBetween_expression(this);
        }
    };
    // @Override
    Between_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitBetween_expression) {
            listener.exitBetween_expression(this);
        }
    };
    // @Override
    Between_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitBetween_expression) {
            return visitor.visitBetween_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Between_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Between_expressionContext = Between_expressionContext;
var In_expressionContext = /** @class */ (function (_super) {
    __extends(In_expressionContext, _super);
    function In_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    In_expressionContext.prototype.state_field_path_expression = function () {
        return this.getRuleContext(0, State_field_path_expressionContext);
    };
    In_expressionContext.prototype.in_item = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(In_itemContext);
        }
        else {
            return this.getRuleContext(i, In_itemContext);
        }
    };
    In_expressionContext.prototype.subquery = function () {
        return this.tryGetRuleContext(0, SubqueryContext);
    };
    Object.defineProperty(In_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_in_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    In_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterIn_expression) {
            listener.enterIn_expression(this);
        }
    };
    // @Override
    In_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitIn_expression) {
            listener.exitIn_expression(this);
        }
    };
    // @Override
    In_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitIn_expression) {
            return visitor.visitIn_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return In_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.In_expressionContext = In_expressionContext;
var In_itemContext = /** @class */ (function (_super) {
    __extends(In_itemContext, _super);
    function In_itemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    In_itemContext.prototype.literal = function () {
        return this.tryGetRuleContext(0, LiteralContext);
    };
    In_itemContext.prototype.input_parameter = function () {
        return this.tryGetRuleContext(0, Input_parameterContext);
    };
    Object.defineProperty(In_itemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_in_item; },
        enumerable: true,
        configurable: true
    });
    // @Override
    In_itemContext.prototype.enterRule = function (listener) {
        if (listener.enterIn_item) {
            listener.enterIn_item(this);
        }
    };
    // @Override
    In_itemContext.prototype.exitRule = function (listener) {
        if (listener.exitIn_item) {
            listener.exitIn_item(this);
        }
    };
    // @Override
    In_itemContext.prototype.accept = function (visitor) {
        if (visitor.visitIn_item) {
            return visitor.visitIn_item(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return In_itemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.In_itemContext = In_itemContext;
var Like_expressionContext = /** @class */ (function (_super) {
    __extends(Like_expressionContext, _super);
    function Like_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Like_expressionContext.prototype.string_expression = function () {
        return this.getRuleContext(0, String_expressionContext);
    };
    Like_expressionContext.prototype.pattern_value = function () {
        return this.getRuleContext(0, Pattern_valueContext);
    };
    Like_expressionContext.prototype.ESCAPE_CHARACTER = function () { return this.tryGetToken(JPAParser.ESCAPE_CHARACTER, 0); };
    Object.defineProperty(Like_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_like_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Like_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterLike_expression) {
            listener.enterLike_expression(this);
        }
    };
    // @Override
    Like_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitLike_expression) {
            listener.exitLike_expression(this);
        }
    };
    // @Override
    Like_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitLike_expression) {
            return visitor.visitLike_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Like_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Like_expressionContext = Like_expressionContext;
var Null_comparison_expressionContext = /** @class */ (function (_super) {
    __extends(Null_comparison_expressionContext, _super);
    function Null_comparison_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Null_comparison_expressionContext.prototype.single_valued_path_expression = function () {
        return this.tryGetRuleContext(0, Single_valued_path_expressionContext);
    };
    Null_comparison_expressionContext.prototype.input_parameter = function () {
        return this.tryGetRuleContext(0, Input_parameterContext);
    };
    Object.defineProperty(Null_comparison_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_null_comparison_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Null_comparison_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterNull_comparison_expression) {
            listener.enterNull_comparison_expression(this);
        }
    };
    // @Override
    Null_comparison_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitNull_comparison_expression) {
            listener.exitNull_comparison_expression(this);
        }
    };
    // @Override
    Null_comparison_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitNull_comparison_expression) {
            return visitor.visitNull_comparison_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Null_comparison_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Null_comparison_expressionContext = Null_comparison_expressionContext;
var Empty_collection_comparison_expressionContext = /** @class */ (function (_super) {
    __extends(Empty_collection_comparison_expressionContext, _super);
    function Empty_collection_comparison_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Empty_collection_comparison_expressionContext.prototype.collection_valued_path_expression = function () {
        return this.getRuleContext(0, Collection_valued_path_expressionContext);
    };
    Object.defineProperty(Empty_collection_comparison_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_empty_collection_comparison_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Empty_collection_comparison_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterEmpty_collection_comparison_expression) {
            listener.enterEmpty_collection_comparison_expression(this);
        }
    };
    // @Override
    Empty_collection_comparison_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitEmpty_collection_comparison_expression) {
            listener.exitEmpty_collection_comparison_expression(this);
        }
    };
    // @Override
    Empty_collection_comparison_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitEmpty_collection_comparison_expression) {
            return visitor.visitEmpty_collection_comparison_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Empty_collection_comparison_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Empty_collection_comparison_expressionContext = Empty_collection_comparison_expressionContext;
var Collection_member_expressionContext = /** @class */ (function (_super) {
    __extends(Collection_member_expressionContext, _super);
    function Collection_member_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Collection_member_expressionContext.prototype.entity_expression = function () {
        return this.getRuleContext(0, Entity_expressionContext);
    };
    Collection_member_expressionContext.prototype.collection_valued_path_expression = function () {
        return this.getRuleContext(0, Collection_valued_path_expressionContext);
    };
    Object.defineProperty(Collection_member_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_collection_member_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Collection_member_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterCollection_member_expression) {
            listener.enterCollection_member_expression(this);
        }
    };
    // @Override
    Collection_member_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitCollection_member_expression) {
            listener.exitCollection_member_expression(this);
        }
    };
    // @Override
    Collection_member_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitCollection_member_expression) {
            return visitor.visitCollection_member_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Collection_member_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Collection_member_expressionContext = Collection_member_expressionContext;
var Exists_expressionContext = /** @class */ (function (_super) {
    __extends(Exists_expressionContext, _super);
    function Exists_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Exists_expressionContext.prototype.subquery = function () {
        return this.getRuleContext(0, SubqueryContext);
    };
    Object.defineProperty(Exists_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_exists_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Exists_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterExists_expression) {
            listener.enterExists_expression(this);
        }
    };
    // @Override
    Exists_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitExists_expression) {
            listener.exitExists_expression(this);
        }
    };
    // @Override
    Exists_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitExists_expression) {
            return visitor.visitExists_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Exists_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Exists_expressionContext = Exists_expressionContext;
var All_or_any_expressionContext = /** @class */ (function (_super) {
    __extends(All_or_any_expressionContext, _super);
    function All_or_any_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    All_or_any_expressionContext.prototype.subquery = function () {
        return this.getRuleContext(0, SubqueryContext);
    };
    Object.defineProperty(All_or_any_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_all_or_any_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    All_or_any_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAll_or_any_expression) {
            listener.enterAll_or_any_expression(this);
        }
    };
    // @Override
    All_or_any_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAll_or_any_expression) {
            listener.exitAll_or_any_expression(this);
        }
    };
    // @Override
    All_or_any_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAll_or_any_expression) {
            return visitor.visitAll_or_any_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return All_or_any_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.All_or_any_expressionContext = All_or_any_expressionContext;
var Comparison_expressionContext = /** @class */ (function (_super) {
    __extends(Comparison_expressionContext, _super);
    function Comparison_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Comparison_expressionContext.prototype.string_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(String_expressionContext);
        }
        else {
            return this.getRuleContext(i, String_expressionContext);
        }
    };
    Comparison_expressionContext.prototype.comparison_operator = function () {
        return this.tryGetRuleContext(0, Comparison_operatorContext);
    };
    Comparison_expressionContext.prototype.all_or_any_expression = function () {
        return this.tryGetRuleContext(0, All_or_any_expressionContext);
    };
    Comparison_expressionContext.prototype.boolean_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Boolean_expressionContext);
        }
        else {
            return this.getRuleContext(i, Boolean_expressionContext);
        }
    };
    Comparison_expressionContext.prototype.enum_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Enum_expressionContext);
        }
        else {
            return this.getRuleContext(i, Enum_expressionContext);
        }
    };
    Comparison_expressionContext.prototype.datetime_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Datetime_expressionContext);
        }
        else {
            return this.getRuleContext(i, Datetime_expressionContext);
        }
    };
    Comparison_expressionContext.prototype.entity_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Entity_expressionContext);
        }
        else {
            return this.getRuleContext(i, Entity_expressionContext);
        }
    };
    Comparison_expressionContext.prototype.arithmetic_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Arithmetic_expressionContext);
        }
        else {
            return this.getRuleContext(i, Arithmetic_expressionContext);
        }
    };
    Object.defineProperty(Comparison_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_comparison_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Comparison_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterComparison_expression) {
            listener.enterComparison_expression(this);
        }
    };
    // @Override
    Comparison_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitComparison_expression) {
            listener.exitComparison_expression(this);
        }
    };
    // @Override
    Comparison_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitComparison_expression) {
            return visitor.visitComparison_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Comparison_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Comparison_expressionContext = Comparison_expressionContext;
var Comparison_operatorContext = /** @class */ (function (_super) {
    __extends(Comparison_operatorContext, _super);
    function Comparison_operatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Comparison_operatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_comparison_operator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Comparison_operatorContext.prototype.enterRule = function (listener) {
        if (listener.enterComparison_operator) {
            listener.enterComparison_operator(this);
        }
    };
    // @Override
    Comparison_operatorContext.prototype.exitRule = function (listener) {
        if (listener.exitComparison_operator) {
            listener.exitComparison_operator(this);
        }
    };
    // @Override
    Comparison_operatorContext.prototype.accept = function (visitor) {
        if (visitor.visitComparison_operator) {
            return visitor.visitComparison_operator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Comparison_operatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Comparison_operatorContext = Comparison_operatorContext;
var Arithmetic_expressionContext = /** @class */ (function (_super) {
    __extends(Arithmetic_expressionContext, _super);
    function Arithmetic_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Arithmetic_expressionContext.prototype.simple_arithmetic_expression = function () {
        return this.tryGetRuleContext(0, Simple_arithmetic_expressionContext);
    };
    Arithmetic_expressionContext.prototype.subquery = function () {
        return this.tryGetRuleContext(0, SubqueryContext);
    };
    Object.defineProperty(Arithmetic_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_arithmetic_expression; },
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
var Simple_arithmetic_expressionContext = /** @class */ (function (_super) {
    __extends(Simple_arithmetic_expressionContext, _super);
    function Simple_arithmetic_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Simple_arithmetic_expressionContext.prototype.arithmetic_term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Arithmetic_termContext);
        }
        else {
            return this.getRuleContext(i, Arithmetic_termContext);
        }
    };
    Object.defineProperty(Simple_arithmetic_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_simple_arithmetic_expression; },
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
var Arithmetic_termContext = /** @class */ (function (_super) {
    __extends(Arithmetic_termContext, _super);
    function Arithmetic_termContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Arithmetic_termContext.prototype.arithmetic_factor = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Arithmetic_factorContext);
        }
        else {
            return this.getRuleContext(i, Arithmetic_factorContext);
        }
    };
    Object.defineProperty(Arithmetic_termContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_arithmetic_term; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Arithmetic_termContext.prototype.enterRule = function (listener) {
        if (listener.enterArithmetic_term) {
            listener.enterArithmetic_term(this);
        }
    };
    // @Override
    Arithmetic_termContext.prototype.exitRule = function (listener) {
        if (listener.exitArithmetic_term) {
            listener.exitArithmetic_term(this);
        }
    };
    // @Override
    Arithmetic_termContext.prototype.accept = function (visitor) {
        if (visitor.visitArithmetic_term) {
            return visitor.visitArithmetic_term(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Arithmetic_termContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Arithmetic_termContext = Arithmetic_termContext;
var Arithmetic_factorContext = /** @class */ (function (_super) {
    __extends(Arithmetic_factorContext, _super);
    function Arithmetic_factorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Arithmetic_factorContext.prototype.arithmetic_primary = function () {
        return this.getRuleContext(0, Arithmetic_primaryContext);
    };
    Object.defineProperty(Arithmetic_factorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_arithmetic_factor; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Arithmetic_factorContext.prototype.enterRule = function (listener) {
        if (listener.enterArithmetic_factor) {
            listener.enterArithmetic_factor(this);
        }
    };
    // @Override
    Arithmetic_factorContext.prototype.exitRule = function (listener) {
        if (listener.exitArithmetic_factor) {
            listener.exitArithmetic_factor(this);
        }
    };
    // @Override
    Arithmetic_factorContext.prototype.accept = function (visitor) {
        if (visitor.visitArithmetic_factor) {
            return visitor.visitArithmetic_factor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Arithmetic_factorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Arithmetic_factorContext = Arithmetic_factorContext;
var Arithmetic_primaryContext = /** @class */ (function (_super) {
    __extends(Arithmetic_primaryContext, _super);
    function Arithmetic_primaryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Arithmetic_primaryContext.prototype.state_field_path_expression = function () {
        return this.tryGetRuleContext(0, State_field_path_expressionContext);
    };
    Arithmetic_primaryContext.prototype.numeric_literal = function () {
        return this.tryGetRuleContext(0, Numeric_literalContext);
    };
    Arithmetic_primaryContext.prototype.simple_arithmetic_expression = function () {
        return this.tryGetRuleContext(0, Simple_arithmetic_expressionContext);
    };
    Arithmetic_primaryContext.prototype.input_parameter = function () {
        return this.tryGetRuleContext(0, Input_parameterContext);
    };
    Arithmetic_primaryContext.prototype.functions_returning_numerics = function () {
        return this.tryGetRuleContext(0, Functions_returning_numericsContext);
    };
    Arithmetic_primaryContext.prototype.aggregate_expression = function () {
        return this.tryGetRuleContext(0, Aggregate_expressionContext);
    };
    Object.defineProperty(Arithmetic_primaryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_arithmetic_primary; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Arithmetic_primaryContext.prototype.enterRule = function (listener) {
        if (listener.enterArithmetic_primary) {
            listener.enterArithmetic_primary(this);
        }
    };
    // @Override
    Arithmetic_primaryContext.prototype.exitRule = function (listener) {
        if (listener.exitArithmetic_primary) {
            listener.exitArithmetic_primary(this);
        }
    };
    // @Override
    Arithmetic_primaryContext.prototype.accept = function (visitor) {
        if (visitor.visitArithmetic_primary) {
            return visitor.visitArithmetic_primary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Arithmetic_primaryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Arithmetic_primaryContext = Arithmetic_primaryContext;
var String_expressionContext = /** @class */ (function (_super) {
    __extends(String_expressionContext, _super);
    function String_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    String_expressionContext.prototype.string_primary = function () {
        return this.tryGetRuleContext(0, String_primaryContext);
    };
    String_expressionContext.prototype.subquery = function () {
        return this.tryGetRuleContext(0, SubqueryContext);
    };
    Object.defineProperty(String_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_string_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    String_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterString_expression) {
            listener.enterString_expression(this);
        }
    };
    // @Override
    String_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitString_expression) {
            listener.exitString_expression(this);
        }
    };
    // @Override
    String_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitString_expression) {
            return visitor.visitString_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return String_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.String_expressionContext = String_expressionContext;
var String_primaryContext = /** @class */ (function (_super) {
    __extends(String_primaryContext, _super);
    function String_primaryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    String_primaryContext.prototype.state_field_path_expression = function () {
        return this.tryGetRuleContext(0, State_field_path_expressionContext);
    };
    String_primaryContext.prototype.STRINGLITERAL = function () { return this.tryGetToken(JPAParser.STRINGLITERAL, 0); };
    String_primaryContext.prototype.input_parameter = function () {
        return this.tryGetRuleContext(0, Input_parameterContext);
    };
    String_primaryContext.prototype.functions_returning_strings = function () {
        return this.tryGetRuleContext(0, Functions_returning_stringsContext);
    };
    String_primaryContext.prototype.aggregate_expression = function () {
        return this.tryGetRuleContext(0, Aggregate_expressionContext);
    };
    Object.defineProperty(String_primaryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_string_primary; },
        enumerable: true,
        configurable: true
    });
    // @Override
    String_primaryContext.prototype.enterRule = function (listener) {
        if (listener.enterString_primary) {
            listener.enterString_primary(this);
        }
    };
    // @Override
    String_primaryContext.prototype.exitRule = function (listener) {
        if (listener.exitString_primary) {
            listener.exitString_primary(this);
        }
    };
    // @Override
    String_primaryContext.prototype.accept = function (visitor) {
        if (visitor.visitString_primary) {
            return visitor.visitString_primary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return String_primaryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.String_primaryContext = String_primaryContext;
var Datetime_expressionContext = /** @class */ (function (_super) {
    __extends(Datetime_expressionContext, _super);
    function Datetime_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Datetime_expressionContext.prototype.datetime_primary = function () {
        return this.tryGetRuleContext(0, Datetime_primaryContext);
    };
    Datetime_expressionContext.prototype.subquery = function () {
        return this.tryGetRuleContext(0, SubqueryContext);
    };
    Object.defineProperty(Datetime_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_datetime_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Datetime_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterDatetime_expression) {
            listener.enterDatetime_expression(this);
        }
    };
    // @Override
    Datetime_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitDatetime_expression) {
            listener.exitDatetime_expression(this);
        }
    };
    // @Override
    Datetime_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitDatetime_expression) {
            return visitor.visitDatetime_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Datetime_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Datetime_expressionContext = Datetime_expressionContext;
var Datetime_primaryContext = /** @class */ (function (_super) {
    __extends(Datetime_primaryContext, _super);
    function Datetime_primaryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Datetime_primaryContext.prototype.state_field_path_expression = function () {
        return this.tryGetRuleContext(0, State_field_path_expressionContext);
    };
    Datetime_primaryContext.prototype.input_parameter = function () {
        return this.tryGetRuleContext(0, Input_parameterContext);
    };
    Datetime_primaryContext.prototype.functions_returning_datetime = function () {
        return this.tryGetRuleContext(0, Functions_returning_datetimeContext);
    };
    Datetime_primaryContext.prototype.aggregate_expression = function () {
        return this.tryGetRuleContext(0, Aggregate_expressionContext);
    };
    Object.defineProperty(Datetime_primaryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_datetime_primary; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Datetime_primaryContext.prototype.enterRule = function (listener) {
        if (listener.enterDatetime_primary) {
            listener.enterDatetime_primary(this);
        }
    };
    // @Override
    Datetime_primaryContext.prototype.exitRule = function (listener) {
        if (listener.exitDatetime_primary) {
            listener.exitDatetime_primary(this);
        }
    };
    // @Override
    Datetime_primaryContext.prototype.accept = function (visitor) {
        if (visitor.visitDatetime_primary) {
            return visitor.visitDatetime_primary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Datetime_primaryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Datetime_primaryContext = Datetime_primaryContext;
var Boolean_expressionContext = /** @class */ (function (_super) {
    __extends(Boolean_expressionContext, _super);
    function Boolean_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Boolean_expressionContext.prototype.boolean_primary = function () {
        return this.tryGetRuleContext(0, Boolean_primaryContext);
    };
    Boolean_expressionContext.prototype.subquery = function () {
        return this.tryGetRuleContext(0, SubqueryContext);
    };
    Object.defineProperty(Boolean_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_boolean_expression; },
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
var Boolean_primaryContext = /** @class */ (function (_super) {
    __extends(Boolean_primaryContext, _super);
    function Boolean_primaryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Boolean_primaryContext.prototype.state_field_path_expression = function () {
        return this.tryGetRuleContext(0, State_field_path_expressionContext);
    };
    Boolean_primaryContext.prototype.boolean_literal = function () {
        return this.tryGetRuleContext(0, Boolean_literalContext);
    };
    Boolean_primaryContext.prototype.input_parameter = function () {
        return this.tryGetRuleContext(0, Input_parameterContext);
    };
    Object.defineProperty(Boolean_primaryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_boolean_primary; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Boolean_primaryContext.prototype.enterRule = function (listener) {
        if (listener.enterBoolean_primary) {
            listener.enterBoolean_primary(this);
        }
    };
    // @Override
    Boolean_primaryContext.prototype.exitRule = function (listener) {
        if (listener.exitBoolean_primary) {
            listener.exitBoolean_primary(this);
        }
    };
    // @Override
    Boolean_primaryContext.prototype.accept = function (visitor) {
        if (visitor.visitBoolean_primary) {
            return visitor.visitBoolean_primary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Boolean_primaryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Boolean_primaryContext = Boolean_primaryContext;
var Enum_expressionContext = /** @class */ (function (_super) {
    __extends(Enum_expressionContext, _super);
    function Enum_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Enum_expressionContext.prototype.enum_primary = function () {
        return this.tryGetRuleContext(0, Enum_primaryContext);
    };
    Enum_expressionContext.prototype.subquery = function () {
        return this.tryGetRuleContext(0, SubqueryContext);
    };
    Object.defineProperty(Enum_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_enum_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Enum_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterEnum_expression) {
            listener.enterEnum_expression(this);
        }
    };
    // @Override
    Enum_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitEnum_expression) {
            listener.exitEnum_expression(this);
        }
    };
    // @Override
    Enum_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitEnum_expression) {
            return visitor.visitEnum_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Enum_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Enum_expressionContext = Enum_expressionContext;
var Enum_primaryContext = /** @class */ (function (_super) {
    __extends(Enum_primaryContext, _super);
    function Enum_primaryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Enum_primaryContext.prototype.state_field_path_expression = function () {
        return this.tryGetRuleContext(0, State_field_path_expressionContext);
    };
    Enum_primaryContext.prototype.enum_literal = function () {
        return this.tryGetRuleContext(0, Enum_literalContext);
    };
    Enum_primaryContext.prototype.input_parameter = function () {
        return this.tryGetRuleContext(0, Input_parameterContext);
    };
    Object.defineProperty(Enum_primaryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_enum_primary; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Enum_primaryContext.prototype.enterRule = function (listener) {
        if (listener.enterEnum_primary) {
            listener.enterEnum_primary(this);
        }
    };
    // @Override
    Enum_primaryContext.prototype.exitRule = function (listener) {
        if (listener.exitEnum_primary) {
            listener.exitEnum_primary(this);
        }
    };
    // @Override
    Enum_primaryContext.prototype.accept = function (visitor) {
        if (visitor.visitEnum_primary) {
            return visitor.visitEnum_primary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Enum_primaryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Enum_primaryContext = Enum_primaryContext;
var Entity_expressionContext = /** @class */ (function (_super) {
    __extends(Entity_expressionContext, _super);
    function Entity_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Entity_expressionContext.prototype.single_valued_association_path_expression = function () {
        return this.tryGetRuleContext(0, Single_valued_association_path_expressionContext);
    };
    Entity_expressionContext.prototype.simple_entity_expression = function () {
        return this.tryGetRuleContext(0, Simple_entity_expressionContext);
    };
    Object.defineProperty(Entity_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_entity_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Entity_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterEntity_expression) {
            listener.enterEntity_expression(this);
        }
    };
    // @Override
    Entity_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitEntity_expression) {
            listener.exitEntity_expression(this);
        }
    };
    // @Override
    Entity_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitEntity_expression) {
            return visitor.visitEntity_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Entity_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Entity_expressionContext = Entity_expressionContext;
var Simple_entity_expressionContext = /** @class */ (function (_super) {
    __extends(Simple_entity_expressionContext, _super);
    function Simple_entity_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Simple_entity_expressionContext.prototype.IDENTIFICATION_VARIABLE = function () { return this.tryGetToken(JPAParser.IDENTIFICATION_VARIABLE, 0); };
    Simple_entity_expressionContext.prototype.input_parameter = function () {
        return this.tryGetRuleContext(0, Input_parameterContext);
    };
    Object.defineProperty(Simple_entity_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_simple_entity_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Simple_entity_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterSimple_entity_expression) {
            listener.enterSimple_entity_expression(this);
        }
    };
    // @Override
    Simple_entity_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitSimple_entity_expression) {
            listener.exitSimple_entity_expression(this);
        }
    };
    // @Override
    Simple_entity_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitSimple_entity_expression) {
            return visitor.visitSimple_entity_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Simple_entity_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Simple_entity_expressionContext = Simple_entity_expressionContext;
var Functions_returning_numericsContext = /** @class */ (function (_super) {
    __extends(Functions_returning_numericsContext, _super);
    function Functions_returning_numericsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Functions_returning_numericsContext.prototype.string_primary = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(String_primaryContext);
        }
        else {
            return this.getRuleContext(i, String_primaryContext);
        }
    };
    Functions_returning_numericsContext.prototype.simple_arithmetic_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Simple_arithmetic_expressionContext);
        }
        else {
            return this.getRuleContext(i, Simple_arithmetic_expressionContext);
        }
    };
    Functions_returning_numericsContext.prototype.collection_valued_path_expression = function () {
        return this.tryGetRuleContext(0, Collection_valued_path_expressionContext);
    };
    Object.defineProperty(Functions_returning_numericsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_functions_returning_numerics; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Functions_returning_numericsContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctions_returning_numerics) {
            listener.enterFunctions_returning_numerics(this);
        }
    };
    // @Override
    Functions_returning_numericsContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctions_returning_numerics) {
            listener.exitFunctions_returning_numerics(this);
        }
    };
    // @Override
    Functions_returning_numericsContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctions_returning_numerics) {
            return visitor.visitFunctions_returning_numerics(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Functions_returning_numericsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Functions_returning_numericsContext = Functions_returning_numericsContext;
var Functions_returning_datetimeContext = /** @class */ (function (_super) {
    __extends(Functions_returning_datetimeContext, _super);
    function Functions_returning_datetimeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Functions_returning_datetimeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_functions_returning_datetime; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Functions_returning_datetimeContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctions_returning_datetime) {
            listener.enterFunctions_returning_datetime(this);
        }
    };
    // @Override
    Functions_returning_datetimeContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctions_returning_datetime) {
            listener.exitFunctions_returning_datetime(this);
        }
    };
    // @Override
    Functions_returning_datetimeContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctions_returning_datetime) {
            return visitor.visitFunctions_returning_datetime(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Functions_returning_datetimeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Functions_returning_datetimeContext = Functions_returning_datetimeContext;
var Functions_returning_stringsContext = /** @class */ (function (_super) {
    __extends(Functions_returning_stringsContext, _super);
    function Functions_returning_stringsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Functions_returning_stringsContext.prototype.string_primary = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(String_primaryContext);
        }
        else {
            return this.getRuleContext(i, String_primaryContext);
        }
    };
    Functions_returning_stringsContext.prototype.simple_arithmetic_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Simple_arithmetic_expressionContext);
        }
        else {
            return this.getRuleContext(i, Simple_arithmetic_expressionContext);
        }
    };
    Functions_returning_stringsContext.prototype.trim_specification = function () {
        return this.tryGetRuleContext(0, Trim_specificationContext);
    };
    Functions_returning_stringsContext.prototype.TRIM_CHARACTER = function () { return this.tryGetToken(JPAParser.TRIM_CHARACTER, 0); };
    Object.defineProperty(Functions_returning_stringsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_functions_returning_strings; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Functions_returning_stringsContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctions_returning_strings) {
            listener.enterFunctions_returning_strings(this);
        }
    };
    // @Override
    Functions_returning_stringsContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctions_returning_strings) {
            listener.exitFunctions_returning_strings(this);
        }
    };
    // @Override
    Functions_returning_stringsContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctions_returning_strings) {
            return visitor.visitFunctions_returning_strings(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Functions_returning_stringsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Functions_returning_stringsContext = Functions_returning_stringsContext;
var Trim_specificationContext = /** @class */ (function (_super) {
    __extends(Trim_specificationContext, _super);
    function Trim_specificationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Trim_specificationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_trim_specification; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Trim_specificationContext.prototype.enterRule = function (listener) {
        if (listener.enterTrim_specification) {
            listener.enterTrim_specification(this);
        }
    };
    // @Override
    Trim_specificationContext.prototype.exitRule = function (listener) {
        if (listener.exitTrim_specification) {
            listener.exitTrim_specification(this);
        }
    };
    // @Override
    Trim_specificationContext.prototype.accept = function (visitor) {
        if (visitor.visitTrim_specification) {
            return visitor.visitTrim_specification(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Trim_specificationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Trim_specificationContext = Trim_specificationContext;
var Numeric_literalContext = /** @class */ (function (_super) {
    __extends(Numeric_literalContext, _super);
    function Numeric_literalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Numeric_literalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_numeric_literal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Numeric_literalContext.prototype.enterRule = function (listener) {
        if (listener.enterNumeric_literal) {
            listener.enterNumeric_literal(this);
        }
    };
    // @Override
    Numeric_literalContext.prototype.exitRule = function (listener) {
        if (listener.exitNumeric_literal) {
            listener.exitNumeric_literal(this);
        }
    };
    // @Override
    Numeric_literalContext.prototype.accept = function (visitor) {
        if (visitor.visitNumeric_literal) {
            return visitor.visitNumeric_literal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Numeric_literalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Numeric_literalContext = Numeric_literalContext;
var Pattern_valueContext = /** @class */ (function (_super) {
    __extends(Pattern_valueContext, _super);
    function Pattern_valueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Pattern_valueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_pattern_value; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Pattern_valueContext.prototype.enterRule = function (listener) {
        if (listener.enterPattern_value) {
            listener.enterPattern_value(this);
        }
    };
    // @Override
    Pattern_valueContext.prototype.exitRule = function (listener) {
        if (listener.exitPattern_value) {
            listener.exitPattern_value(this);
        }
    };
    // @Override
    Pattern_valueContext.prototype.accept = function (visitor) {
        if (visitor.visitPattern_value) {
            return visitor.visitPattern_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Pattern_valueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Pattern_valueContext = Pattern_valueContext;
var Input_parameterContext = /** @class */ (function (_super) {
    __extends(Input_parameterContext, _super);
    function Input_parameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Input_parameterContext.prototype.INT_NUMERAL = function () { return this.tryGetToken(JPAParser.INT_NUMERAL, 0); };
    Input_parameterContext.prototype.IDENTIFICATION_VARIABLE = function () { return this.tryGetToken(JPAParser.IDENTIFICATION_VARIABLE, 0); };
    Object.defineProperty(Input_parameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_input_parameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Input_parameterContext.prototype.enterRule = function (listener) {
        if (listener.enterInput_parameter) {
            listener.enterInput_parameter(this);
        }
    };
    // @Override
    Input_parameterContext.prototype.exitRule = function (listener) {
        if (listener.exitInput_parameter) {
            listener.exitInput_parameter(this);
        }
    };
    // @Override
    Input_parameterContext.prototype.accept = function (visitor) {
        if (visitor.visitInput_parameter) {
            return visitor.visitInput_parameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Input_parameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Input_parameterContext = Input_parameterContext;
var LiteralContext = /** @class */ (function (_super) {
    __extends(LiteralContext, _super);
    function LiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(LiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_literal; },
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
var Constructor_nameContext = /** @class */ (function (_super) {
    __extends(Constructor_nameContext, _super);
    function Constructor_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Constructor_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_constructor_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Constructor_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterConstructor_name) {
            listener.enterConstructor_name(this);
        }
    };
    // @Override
    Constructor_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitConstructor_name) {
            listener.exitConstructor_name(this);
        }
    };
    // @Override
    Constructor_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitConstructor_name) {
            return visitor.visitConstructor_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Constructor_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Constructor_nameContext = Constructor_nameContext;
var Enum_literalContext = /** @class */ (function (_super) {
    __extends(Enum_literalContext, _super);
    function Enum_literalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Enum_literalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_enum_literal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Enum_literalContext.prototype.enterRule = function (listener) {
        if (listener.enterEnum_literal) {
            listener.enterEnum_literal(this);
        }
    };
    // @Override
    Enum_literalContext.prototype.exitRule = function (listener) {
        if (listener.exitEnum_literal) {
            listener.exitEnum_literal(this);
        }
    };
    // @Override
    Enum_literalContext.prototype.accept = function (visitor) {
        if (visitor.visitEnum_literal) {
            return visitor.visitEnum_literal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Enum_literalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Enum_literalContext = Enum_literalContext;
var Boolean_literalContext = /** @class */ (function (_super) {
    __extends(Boolean_literalContext, _super);
    function Boolean_literalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Boolean_literalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_boolean_literal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Boolean_literalContext.prototype.enterRule = function (listener) {
        if (listener.enterBoolean_literal) {
            listener.enterBoolean_literal(this);
        }
    };
    // @Override
    Boolean_literalContext.prototype.exitRule = function (listener) {
        if (listener.exitBoolean_literal) {
            listener.exitBoolean_literal(this);
        }
    };
    // @Override
    Boolean_literalContext.prototype.accept = function (visitor) {
        if (visitor.visitBoolean_literal) {
            return visitor.visitBoolean_literal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Boolean_literalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Boolean_literalContext = Boolean_literalContext;
var Simple_state_fieldContext = /** @class */ (function (_super) {
    __extends(Simple_state_fieldContext, _super);
    function Simple_state_fieldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Simple_state_fieldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_simple_state_field; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Simple_state_fieldContext.prototype.enterRule = function (listener) {
        if (listener.enterSimple_state_field) {
            listener.enterSimple_state_field(this);
        }
    };
    // @Override
    Simple_state_fieldContext.prototype.exitRule = function (listener) {
        if (listener.exitSimple_state_field) {
            listener.exitSimple_state_field(this);
        }
    };
    // @Override
    Simple_state_fieldContext.prototype.accept = function (visitor) {
        if (visitor.visitSimple_state_field) {
            return visitor.visitSimple_state_field(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Simple_state_fieldContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Simple_state_fieldContext = Simple_state_fieldContext;
var Embedded_class_state_fieldContext = /** @class */ (function (_super) {
    __extends(Embedded_class_state_fieldContext, _super);
    function Embedded_class_state_fieldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Embedded_class_state_fieldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_embedded_class_state_field; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Embedded_class_state_fieldContext.prototype.enterRule = function (listener) {
        if (listener.enterEmbedded_class_state_field) {
            listener.enterEmbedded_class_state_field(this);
        }
    };
    // @Override
    Embedded_class_state_fieldContext.prototype.exitRule = function (listener) {
        if (listener.exitEmbedded_class_state_field) {
            listener.exitEmbedded_class_state_field(this);
        }
    };
    // @Override
    Embedded_class_state_fieldContext.prototype.accept = function (visitor) {
        if (visitor.visitEmbedded_class_state_field) {
            return visitor.visitEmbedded_class_state_field(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Embedded_class_state_fieldContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Embedded_class_state_fieldContext = Embedded_class_state_fieldContext;
var Single_valued_association_fieldContext = /** @class */ (function (_super) {
    __extends(Single_valued_association_fieldContext, _super);
    function Single_valued_association_fieldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Single_valued_association_fieldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_single_valued_association_field; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Single_valued_association_fieldContext.prototype.enterRule = function (listener) {
        if (listener.enterSingle_valued_association_field) {
            listener.enterSingle_valued_association_field(this);
        }
    };
    // @Override
    Single_valued_association_fieldContext.prototype.exitRule = function (listener) {
        if (listener.exitSingle_valued_association_field) {
            listener.exitSingle_valued_association_field(this);
        }
    };
    // @Override
    Single_valued_association_fieldContext.prototype.accept = function (visitor) {
        if (visitor.visitSingle_valued_association_field) {
            return visitor.visitSingle_valued_association_field(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Single_valued_association_fieldContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Single_valued_association_fieldContext = Single_valued_association_fieldContext;
var Collection_valued_association_fieldContext = /** @class */ (function (_super) {
    __extends(Collection_valued_association_fieldContext, _super);
    function Collection_valued_association_fieldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Collection_valued_association_fieldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_collection_valued_association_field; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Collection_valued_association_fieldContext.prototype.enterRule = function (listener) {
        if (listener.enterCollection_valued_association_field) {
            listener.enterCollection_valued_association_field(this);
        }
    };
    // @Override
    Collection_valued_association_fieldContext.prototype.exitRule = function (listener) {
        if (listener.exitCollection_valued_association_field) {
            listener.exitCollection_valued_association_field(this);
        }
    };
    // @Override
    Collection_valued_association_fieldContext.prototype.accept = function (visitor) {
        if (visitor.visitCollection_valued_association_field) {
            return visitor.visitCollection_valued_association_field(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Collection_valued_association_fieldContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Collection_valued_association_fieldContext = Collection_valued_association_fieldContext;
var Abstract_schema_nameContext = /** @class */ (function (_super) {
    __extends(Abstract_schema_nameContext, _super);
    function Abstract_schema_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Abstract_schema_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JPAParser.RULE_abstract_schema_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Abstract_schema_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterAbstract_schema_name) {
            listener.enterAbstract_schema_name(this);
        }
    };
    // @Override
    Abstract_schema_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitAbstract_schema_name) {
            listener.exitAbstract_schema_name(this);
        }
    };
    // @Override
    Abstract_schema_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitAbstract_schema_name) {
            return visitor.visitAbstract_schema_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Abstract_schema_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Abstract_schema_nameContext = Abstract_schema_nameContext;
