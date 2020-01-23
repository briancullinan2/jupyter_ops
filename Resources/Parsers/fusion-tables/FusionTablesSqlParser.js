"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/fusion-tables/FusionTablesSql.g4 by ANTLR 4.7.3-SNAPSHOT
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
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var FusionTablesSqlParser = /** @class */ (function (_super) {
    __extends(FusionTablesSqlParser, _super);
    function FusionTablesSqlParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(FusionTablesSqlParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(FusionTablesSqlParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return FusionTablesSqlParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FusionTablesSqlParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "FusionTablesSql.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FusionTablesSqlParser.prototype, "ruleNames", {
        // @Override
        get: function () { return FusionTablesSqlParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FusionTablesSqlParser.prototype, "serializedATN", {
        // @Override
        get: function () { return FusionTablesSqlParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    FusionTablesSqlParser.prototype.fusionTablesSql = function () {
        var _localctx = new FusionTablesSqlContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, FusionTablesSqlParser.RULE_fusionTablesSql);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 89;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FusionTablesSqlParser.K_ALTER) | (1 << FusionTablesSqlParser.K_CREATE) | (1 << FusionTablesSqlParser.K_DELETE) | (1 << FusionTablesSqlParser.K_DESCRIBE) | (1 << FusionTablesSqlParser.K_DROP) | (1 << FusionTablesSqlParser.K_INSERT))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (FusionTablesSqlParser.K_SELECT - 51)) | (1 << (FusionTablesSqlParser.K_SHOW - 51)) | (1 << (FusionTablesSqlParser.K_UPDATE - 51)))) !== 0)) {
                    {
                        {
                            this.state = 86;
                            this.sql_stmt();
                        }
                    }
                    this.state = 91;
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
    FusionTablesSqlParser.prototype.sql_stmt = function () {
        var _localctx = new Sql_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, FusionTablesSqlParser.RULE_sql_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 102;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                    case 1:
                        {
                            this.state = 92;
                            this.alter_table_stmt();
                        }
                        break;
                    case 2:
                        {
                            this.state = 93;
                            this.select_stmt();
                        }
                        break;
                    case 3:
                        {
                            this.state = 94;
                            this.create_view_stmt();
                        }
                        break;
                    case 4:
                        {
                            this.state = 95;
                            this.create_table_as_select_stmt();
                        }
                        break;
                    case 5:
                        {
                            this.state = 96;
                            this.delete_stmt();
                        }
                        break;
                    case 6:
                        {
                            this.state = 97;
                            this.drop_table_stmt();
                        }
                        break;
                    case 7:
                        {
                            this.state = 98;
                            this.insert_stmt();
                        }
                        break;
                    case 8:
                        {
                            this.state = 99;
                            this.update_stmt();
                        }
                        break;
                    case 9:
                        {
                            this.state = 100;
                            this.describe_stmt();
                        }
                        break;
                    case 10:
                        {
                            this.state = 101;
                            this.show_tables_stmt();
                        }
                        break;
                }
                this.state = 104;
                this.match(FusionTablesSqlParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FusionTablesSqlParser.prototype.table_name_in_ddl = function () {
        var _localctx = new Table_name_in_ddlContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, FusionTablesSqlParser.RULE_table_name_in_ddl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 106;
                this.table_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FusionTablesSqlParser.prototype.table_name_in_dml = function () {
        var _localctx = new Table_name_in_dmlContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, FusionTablesSqlParser.RULE_table_name_in_dml);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 108;
                this.table_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FusionTablesSqlParser.prototype.create_table_as_select_stmt = function () {
        var _localctx = new Create_table_as_select_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, FusionTablesSqlParser.RULE_create_table_as_select_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 110;
                this.match(FusionTablesSqlParser.K_CREATE);
                this.state = 111;
                this.match(FusionTablesSqlParser.K_TABLE);
                this.state = 112;
                this.identifier();
                this.state = 113;
                this.match(FusionTablesSqlParser.K_AS);
                this.state = 114;
                this.match(FusionTablesSqlParser.K_SELECT);
                this.state = 115;
                this.match(FusionTablesSqlParser.T__1);
                this.state = 116;
                this.match(FusionTablesSqlParser.K_FROM);
                this.state = 117;
                this.table_name_in_ddl();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FusionTablesSqlParser.prototype.describe_stmt = function () {
        var _localctx = new Describe_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, FusionTablesSqlParser.RULE_describe_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 119;
                this.match(FusionTablesSqlParser.K_DESCRIBE);
                this.state = 120;
                this.table_name_in_ddl();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FusionTablesSqlParser.prototype.show_tables_stmt = function () {
        var _localctx = new Show_tables_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, FusionTablesSqlParser.RULE_show_tables_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 122;
                this.match(FusionTablesSqlParser.K_SHOW);
                this.state = 123;
                this.match(FusionTablesSqlParser.K_TABLES);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FusionTablesSqlParser.prototype.alter_table_stmt = function () {
        var _localctx = new Alter_table_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, FusionTablesSqlParser.RULE_alter_table_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 125;
                this.match(FusionTablesSqlParser.K_ALTER);
                this.state = 126;
                this.match(FusionTablesSqlParser.K_TABLE);
                this.state = 127;
                this.table_name_in_ddl();
                {
                    this.state = 128;
                    this.match(FusionTablesSqlParser.K_RENAME);
                    this.state = 129;
                    this.match(FusionTablesSqlParser.K_TO);
                    this.state = 130;
                    this.identifier();
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
    FusionTablesSqlParser.prototype.create_view_stmt = function () {
        var _localctx = new Create_view_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, FusionTablesSqlParser.RULE_create_view_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 132;
                this.match(FusionTablesSqlParser.K_CREATE);
                this.state = 133;
                this.match(FusionTablesSqlParser.K_VIEW);
                this.state = 134;
                this.view_name();
                this.state = 135;
                this.match(FusionTablesSqlParser.K_AS);
                this.state = 136;
                this.match(FusionTablesSqlParser.LPAR);
                this.state = 137;
                this.match(FusionTablesSqlParser.K_SELECT);
                this.state = 138;
                this.result_column();
                this.state = 143;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === FusionTablesSqlParser.T__2) {
                    {
                        {
                            this.state = 139;
                            this.match(FusionTablesSqlParser.T__2);
                            this.state = 140;
                            this.result_column();
                        }
                    }
                    this.state = 145;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 146;
                this.match(FusionTablesSqlParser.K_FROM);
                {
                    {
                        this.state = 147;
                        this.table_name_with_alias();
                        this.state = 150;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FusionTablesSqlParser.K_WHERE) {
                            {
                                this.state = 148;
                                this.match(FusionTablesSqlParser.K_WHERE);
                                this.state = 149;
                                this.expr();
                            }
                        }
                    }
                    this.state = 155;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === FusionTablesSqlParser.K_LEFT) {
                        {
                            {
                                this.state = 152;
                                this.join_clause();
                            }
                        }
                        this.state = 157;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                }
                this.state = 158;
                this.match(FusionTablesSqlParser.RPAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FusionTablesSqlParser.prototype.drop_table_stmt = function () {
        var _localctx = new Drop_table_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, FusionTablesSqlParser.RULE_drop_table_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 160;
                this.match(FusionTablesSqlParser.K_DROP);
                this.state = 161;
                this.match(FusionTablesSqlParser.K_TABLE);
                this.state = 162;
                this.table_name_in_ddl();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FusionTablesSqlParser.prototype.insert_stmt = function () {
        var _localctx = new Insert_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, FusionTablesSqlParser.RULE_insert_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 164;
                this.match(FusionTablesSqlParser.K_INSERT);
                this.state = 165;
                this.match(FusionTablesSqlParser.K_INTO);
                this.state = 166;
                this.table_name_in_dml();
                {
                    this.state = 167;
                    this.match(FusionTablesSqlParser.LPAR);
                    this.state = 168;
                    this.column_name_in_dml();
                    this.state = 173;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === FusionTablesSqlParser.T__2) {
                        {
                            {
                                this.state = 169;
                                this.match(FusionTablesSqlParser.T__2);
                                this.state = 170;
                                this.column_name_in_dml();
                            }
                        }
                        this.state = 175;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 176;
                    this.match(FusionTablesSqlParser.RPAR);
                }
                {
                    this.state = 178;
                    this.match(FusionTablesSqlParser.K_VALUES);
                    this.state = 179;
                    this.match(FusionTablesSqlParser.LPAR);
                    this.state = 180;
                    this.literal();
                    this.state = 185;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === FusionTablesSqlParser.T__2) {
                        {
                            {
                                this.state = 181;
                                this.match(FusionTablesSqlParser.T__2);
                                this.state = 182;
                                this.literal();
                            }
                        }
                        this.state = 187;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 188;
                    this.match(FusionTablesSqlParser.RPAR);
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
    FusionTablesSqlParser.prototype.update_stmt = function () {
        var _localctx = new Update_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, FusionTablesSqlParser.RULE_update_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 190;
                this.match(FusionTablesSqlParser.K_UPDATE);
                this.state = 191;
                this.table_name_in_dml();
                this.state = 192;
                this.match(FusionTablesSqlParser.K_SET);
                this.state = 193;
                this.column_assignment();
                this.state = 198;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === FusionTablesSqlParser.T__2) {
                    {
                        {
                            this.state = 194;
                            this.match(FusionTablesSqlParser.T__2);
                            this.state = 195;
                            this.column_assignment();
                        }
                    }
                    this.state = 200;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 201;
                this.match(FusionTablesSqlParser.K_WHERE);
                this.state = 202;
                this.eq_comparison();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FusionTablesSqlParser.prototype.column_assignment = function () {
        var _localctx = new Column_assignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, FusionTablesSqlParser.RULE_column_assignment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 204;
                this.column_name_in_dml();
                this.state = 205;
                this.match(FusionTablesSqlParser.EQ);
                this.state = 206;
                this.literal();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FusionTablesSqlParser.prototype.delete_stmt = function () {
        var _localctx = new Delete_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, FusionTablesSqlParser.RULE_delete_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 208;
                this.match(FusionTablesSqlParser.K_DELETE);
                this.state = 209;
                this.match(FusionTablesSqlParser.K_FROM);
                this.state = 210;
                this.table_name_in_dml();
                this.state = 216;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FusionTablesSqlParser.K_WHERE) {
                    {
                        this.state = 211;
                        this.match(FusionTablesSqlParser.K_WHERE);
                        this.state = 212;
                        this.column_name_in_dml();
                        this.state = 213;
                        this.match(FusionTablesSqlParser.EQ);
                        this.state = 214;
                        this.literal();
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
    FusionTablesSqlParser.prototype.eq_comparison = function () {
        var _localctx = new Eq_comparisonContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, FusionTablesSqlParser.RULE_eq_comparison);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 218;
                this.identifier();
                this.state = 219;
                this.match(FusionTablesSqlParser.EQ);
                this.state = 220;
                this.string_literal();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FusionTablesSqlParser.prototype.table_name_with_alias = function () {
        var _localctx = new Table_name_with_aliasContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, FusionTablesSqlParser.RULE_table_name_with_alias);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 222;
                this.table_name();
                this.state = 225;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FusionTablesSqlParser.K_AS) {
                    {
                        this.state = 223;
                        this.match(FusionTablesSqlParser.K_AS);
                        this.state = 224;
                        this.table_alias();
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
    FusionTablesSqlParser.prototype.select_stmt = function () {
        var _localctx = new Select_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, FusionTablesSqlParser.RULE_select_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 227;
                this.match(FusionTablesSqlParser.K_SELECT);
                this.state = 228;
                this.result_column();
                this.state = 233;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === FusionTablesSqlParser.T__2) {
                    {
                        {
                            this.state = 229;
                            this.match(FusionTablesSqlParser.T__2);
                            this.state = 230;
                            this.result_column();
                        }
                    }
                    this.state = 235;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 236;
                this.match(FusionTablesSqlParser.K_FROM);
                this.state = 237;
                this.table_name_with_alias();
                this.state = 241;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === FusionTablesSqlParser.K_LEFT) {
                    {
                        {
                            this.state = 238;
                            this.join_clause();
                        }
                    }
                    this.state = 243;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 246;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FusionTablesSqlParser.K_WHERE) {
                    {
                        this.state = 244;
                        this.match(FusionTablesSqlParser.K_WHERE);
                        this.state = 245;
                        this.expr();
                    }
                }
                this.state = 258;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FusionTablesSqlParser.K_GROUP) {
                    {
                        this.state = 248;
                        this.match(FusionTablesSqlParser.K_GROUP);
                        this.state = 249;
                        this.match(FusionTablesSqlParser.K_BY);
                        this.state = 250;
                        this.qualified_column_name();
                        this.state = 255;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === FusionTablesSqlParser.T__2) {
                            {
                                {
                                    this.state = 251;
                                    this.match(FusionTablesSqlParser.T__2);
                                    this.state = 252;
                                    this.qualified_column_name();
                                }
                            }
                            this.state = 257;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 270;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FusionTablesSqlParser.K_ORDER) {
                    {
                        this.state = 260;
                        this.match(FusionTablesSqlParser.K_ORDER);
                        this.state = 261;
                        this.match(FusionTablesSqlParser.K_BY);
                        this.state = 262;
                        this.ordering_term();
                        this.state = 267;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === FusionTablesSqlParser.T__2) {
                            {
                                {
                                    this.state = 263;
                                    this.match(FusionTablesSqlParser.T__2);
                                    this.state = 264;
                                    this.ordering_term();
                                }
                            }
                            this.state = 269;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 278;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FusionTablesSqlParser.K_OFFSET) {
                    {
                        {
                            this.state = 272;
                            this.match(FusionTablesSqlParser.K_OFFSET);
                            this.state = 273;
                            this.numeric_literal();
                            this.state = 276;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === FusionTablesSqlParser.K_LIMIT) {
                                {
                                    this.state = 274;
                                    this.match(FusionTablesSqlParser.K_LIMIT);
                                    this.state = 275;
                                    this.numeric_literal();
                                }
                            }
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
    FusionTablesSqlParser.prototype.ordering_term = function () {
        var _localctx = new Ordering_termContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, FusionTablesSqlParser.RULE_ordering_term);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 288;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case FusionTablesSqlParser.STRING_LITERAL:
                        {
                            this.state = 280;
                            this.qualified_column_name();
                        }
                        break;
                    case FusionTablesSqlParser.K_ST_DISTANCE:
                        {
                            this.state = 281;
                            this.match(FusionTablesSqlParser.K_ST_DISTANCE);
                            this.state = 282;
                            this.match(FusionTablesSqlParser.LPAR);
                            this.state = 283;
                            this.qualified_column_name();
                            this.state = 284;
                            this.match(FusionTablesSqlParser.T__2);
                            this.state = 285;
                            this.coordinate();
                            this.state = 286;
                            this.match(FusionTablesSqlParser.RPAR);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 291;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FusionTablesSqlParser.K_ASC || _la === FusionTablesSqlParser.K_DESC) {
                    {
                        this.state = 290;
                        _la = this._input.LA(1);
                        if (!(_la === FusionTablesSqlParser.K_ASC || _la === FusionTablesSqlParser.K_DESC)) {
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
    FusionTablesSqlParser.prototype.join_clause = function () {
        var _localctx = new Join_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, FusionTablesSqlParser.RULE_join_clause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 293;
                    this.match(FusionTablesSqlParser.K_LEFT);
                    this.state = 294;
                    this.match(FusionTablesSqlParser.K_OUTER);
                    this.state = 295;
                    this.match(FusionTablesSqlParser.K_JOIN);
                    this.state = 296;
                    this.table_name_with_alias();
                    this.state = 297;
                    this.match(FusionTablesSqlParser.K_ON);
                    this.state = 298;
                    this.qualified_column_name();
                    this.state = 299;
                    this.match(FusionTablesSqlParser.EQ);
                    this.state = 300;
                    this.qualified_column_name();
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
    FusionTablesSqlParser.prototype.result_column = function () {
        var _localctx = new Result_columnContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, FusionTablesSqlParser.RULE_result_column);
        try {
            this.state = 309;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 302;
                        this.match(FusionTablesSqlParser.T__1);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 303;
                        this.table_name();
                        this.state = 304;
                        this.match(FusionTablesSqlParser.T__3);
                        this.state = 305;
                        this.match(FusionTablesSqlParser.T__1);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 307;
                        this.qualified_column_name();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 308;
                        this.aggregate_exp();
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
    FusionTablesSqlParser.prototype.qualified_column_name = function () {
        var _localctx = new Qualified_column_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, FusionTablesSqlParser.RULE_qualified_column_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 314;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
                    case 1:
                        {
                            this.state = 311;
                            this.table_name();
                            this.state = 312;
                            this.match(FusionTablesSqlParser.T__3);
                        }
                        break;
                }
                this.state = 316;
                this.column_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FusionTablesSqlParser.prototype.aggregate_exp = function () {
        var _localctx = new Aggregate_expContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, FusionTablesSqlParser.RULE_aggregate_exp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 318;
                _la = this._input.LA(1);
                if (!(_la === FusionTablesSqlParser.K_AVERAGE || _la === FusionTablesSqlParser.K_COUNT || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (FusionTablesSqlParser.K_MAXIMUM - 39)) | (1 << (FusionTablesSqlParser.K_MINIMUM - 39)) | (1 << (FusionTablesSqlParser.K_SUM - 39)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 319;
                this.match(FusionTablesSqlParser.LPAR);
                this.state = 320;
                this.qualified_column_name();
                this.state = 321;
                this.match(FusionTablesSqlParser.RPAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FusionTablesSqlParser.prototype.expr = function () {
        var _localctx = new ExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, FusionTablesSqlParser.RULE_expr);
        var _la;
        try {
            this.state = 394;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 323;
                        this.column_name_beginning_expr();
                        {
                            this.state = 324;
                            this.operator();
                        }
                        this.state = 325;
                        this.literal();
                        this.state = 329;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FusionTablesSqlParser.K_AND || _la === FusionTablesSqlParser.K_OR) {
                            {
                                this.state = 326;
                                this.and_or_or();
                                this.state = 327;
                                this.expr();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 331;
                        this.column_name_beginning_expr();
                        this.state = 348;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
                            case 1:
                                {
                                    this.state = 332;
                                    this.match(FusionTablesSqlParser.K_LIKE);
                                }
                                break;
                            case 2:
                                {
                                    this.state = 333;
                                    this.match(FusionTablesSqlParser.K_MATCHES);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 334;
                                    this.match(FusionTablesSqlParser.K_STARTS);
                                    this.state = 335;
                                    this.match(FusionTablesSqlParser.K_WITH);
                                }
                                break;
                            case 4:
                                {
                                    this.state = 336;
                                    this.match(FusionTablesSqlParser.K_ENDS);
                                    this.state = 337;
                                    this.match(FusionTablesSqlParser.K_WITH);
                                }
                                break;
                            case 5:
                                {
                                    this.state = 338;
                                    this.match(FusionTablesSqlParser.K_CONTAINS);
                                }
                                break;
                            case 6:
                                {
                                    this.state = 339;
                                    this.match(FusionTablesSqlParser.K_CONTAINS);
                                    this.state = 340;
                                    this.match(FusionTablesSqlParser.K_IGNORING);
                                    this.state = 341;
                                    this.match(FusionTablesSqlParser.K_CASE);
                                }
                                break;
                            case 7:
                                {
                                    this.state = 342;
                                    this.match(FusionTablesSqlParser.K_DOES);
                                    this.state = 343;
                                    this.match(FusionTablesSqlParser.K_NOT);
                                    this.state = 344;
                                    this.match(FusionTablesSqlParser.K_CONTAIN);
                                }
                                break;
                            case 8:
                                {
                                    this.state = 345;
                                    this.match(FusionTablesSqlParser.K_NOT);
                                    this.state = 346;
                                    this.match(FusionTablesSqlParser.K_EQUAL);
                                    this.state = 347;
                                    this.match(FusionTablesSqlParser.K_TO);
                                }
                                break;
                        }
                        this.state = 350;
                        this.string_literal();
                        this.state = 354;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FusionTablesSqlParser.K_AND || _la === FusionTablesSqlParser.K_OR) {
                            {
                                this.state = 351;
                                this.and_or_or();
                                this.state = 352;
                                this.expr();
                            }
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 356;
                        this.column_name_beginning_expr();
                        this.state = 357;
                        this.match(FusionTablesSqlParser.K_IN);
                        this.state = 358;
                        this.match(FusionTablesSqlParser.LPAR);
                        this.state = 359;
                        this.string_literal();
                        this.state = 364;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === FusionTablesSqlParser.T__2) {
                            {
                                {
                                    this.state = 360;
                                    this.match(FusionTablesSqlParser.T__2);
                                    this.state = 361;
                                    this.string_literal();
                                }
                            }
                            this.state = 366;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 367;
                        this.match(FusionTablesSqlParser.RPAR);
                        this.state = 371;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FusionTablesSqlParser.K_AND || _la === FusionTablesSqlParser.K_OR) {
                            {
                                this.state = 368;
                                this.and_or_or();
                                this.state = 369;
                                this.expr();
                            }
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 373;
                        this.column_name_beginning_expr();
                        this.state = 374;
                        this.match(FusionTablesSqlParser.K_BETWEEN);
                        this.state = 375;
                        this.literal();
                        this.state = 376;
                        this.match(FusionTablesSqlParser.K_AND);
                        this.state = 377;
                        this.literal();
                        this.state = 381;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FusionTablesSqlParser.K_AND || _la === FusionTablesSqlParser.K_OR) {
                            {
                                this.state = 378;
                                this.and_or_or();
                                this.state = 379;
                                this.expr();
                            }
                        }
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 383;
                        this.match(FusionTablesSqlParser.K_ST_INTERSECTS);
                        this.state = 384;
                        this.match(FusionTablesSqlParser.LPAR);
                        this.state = 385;
                        this.qualified_column_name();
                        this.state = 386;
                        this.match(FusionTablesSqlParser.T__2);
                        this.state = 387;
                        this.geometry();
                        this.state = 388;
                        this.match(FusionTablesSqlParser.RPAR);
                        this.state = 392;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FusionTablesSqlParser.K_AND || _la === FusionTablesSqlParser.K_OR) {
                            {
                                this.state = 389;
                                this.and_or_or();
                                this.state = 390;
                                this.expr();
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
    FusionTablesSqlParser.prototype.column_name_beginning_expr = function () {
        var _localctx = new Column_name_beginning_exprContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, FusionTablesSqlParser.RULE_column_name_beginning_expr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 396;
                this.qualified_column_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FusionTablesSqlParser.prototype.column_name_in_dml = function () {
        var _localctx = new Column_name_in_dmlContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, FusionTablesSqlParser.RULE_column_name_in_dml);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 398;
                this.column_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FusionTablesSqlParser.prototype.and_or_or = function () {
        var _localctx = new And_or_orContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, FusionTablesSqlParser.RULE_and_or_or);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 400;
                _la = this._input.LA(1);
                if (!(_la === FusionTablesSqlParser.K_AND || _la === FusionTablesSqlParser.K_OR)) {
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
    FusionTablesSqlParser.prototype.geometry = function () {
        var _localctx = new GeometryContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, FusionTablesSqlParser.RULE_geometry);
        try {
            this.state = 404;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case FusionTablesSqlParser.K_CIRCLE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 402;
                        this.circle();
                    }
                    break;
                case FusionTablesSqlParser.K_RECTANGLE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 403;
                        this.rectangle();
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
    FusionTablesSqlParser.prototype.circle = function () {
        var _localctx = new CircleContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, FusionTablesSqlParser.RULE_circle);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 406;
                this.match(FusionTablesSqlParser.K_CIRCLE);
                this.state = 407;
                this.match(FusionTablesSqlParser.LPAR);
                this.state = 408;
                this.coordinate();
                this.state = 409;
                this.match(FusionTablesSqlParser.T__2);
                this.state = 410;
                this.numeric_literal();
                this.state = 411;
                this.match(FusionTablesSqlParser.RPAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FusionTablesSqlParser.prototype.rectangle = function () {
        var _localctx = new RectangleContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, FusionTablesSqlParser.RULE_rectangle);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 413;
                this.match(FusionTablesSqlParser.K_RECTANGLE);
                this.state = 414;
                this.match(FusionTablesSqlParser.LPAR);
                this.state = 415;
                this.coordinate();
                this.state = 416;
                this.match(FusionTablesSqlParser.T__2);
                this.state = 417;
                this.coordinate();
                this.state = 418;
                this.match(FusionTablesSqlParser.RPAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FusionTablesSqlParser.prototype.coordinate = function () {
        var _localctx = new CoordinateContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, FusionTablesSqlParser.RULE_coordinate);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 420;
                this.match(FusionTablesSqlParser.K_LATLNG);
                this.state = 421;
                this.match(FusionTablesSqlParser.LPAR);
                this.state = 422;
                this.numeric_literal();
                this.state = 423;
                this.match(FusionTablesSqlParser.T__2);
                this.state = 424;
                this.numeric_literal();
                this.state = 425;
                this.match(FusionTablesSqlParser.RPAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FusionTablesSqlParser.prototype.keyword = function () {
        var _localctx = new KeywordContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, FusionTablesSqlParser.RULE_keyword);
        try {
            this.state = 485;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case FusionTablesSqlParser.EOF:
                    this.enterOuterAlt(_localctx, 1);
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case FusionTablesSqlParser.K_ALTER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 428;
                        this.match(FusionTablesSqlParser.K_ALTER);
                    }
                    break;
                case FusionTablesSqlParser.K_AND:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 429;
                        this.match(FusionTablesSqlParser.K_AND);
                    }
                    break;
                case FusionTablesSqlParser.K_OR:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 430;
                        this.match(FusionTablesSqlParser.K_OR);
                    }
                    break;
                case FusionTablesSqlParser.K_AS:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 431;
                        this.match(FusionTablesSqlParser.K_AS);
                    }
                    break;
                case FusionTablesSqlParser.K_ASC:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 432;
                        this.match(FusionTablesSqlParser.K_ASC);
                    }
                    break;
                case FusionTablesSqlParser.K_AVERAGE:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 433;
                        this.match(FusionTablesSqlParser.K_AVERAGE);
                    }
                    break;
                case FusionTablesSqlParser.K_BY:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 434;
                        this.match(FusionTablesSqlParser.K_BY);
                    }
                    break;
                case FusionTablesSqlParser.K_BETWEEN:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 435;
                        this.match(FusionTablesSqlParser.K_BETWEEN);
                    }
                    break;
                case FusionTablesSqlParser.K_CASE:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 436;
                        this.match(FusionTablesSqlParser.K_CASE);
                    }
                    break;
                case FusionTablesSqlParser.K_CIRCLE:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 437;
                        this.match(FusionTablesSqlParser.K_CIRCLE);
                    }
                    break;
                case FusionTablesSqlParser.K_COLUMN:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 438;
                        this.match(FusionTablesSqlParser.K_COLUMN);
                    }
                    break;
                case FusionTablesSqlParser.K_CONTAIN:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 439;
                        this.match(FusionTablesSqlParser.K_CONTAIN);
                    }
                    break;
                case FusionTablesSqlParser.K_CONTAINS:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 440;
                        this.match(FusionTablesSqlParser.K_CONTAINS);
                    }
                    break;
                case FusionTablesSqlParser.K_COUNT:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 441;
                        this.match(FusionTablesSqlParser.K_COUNT);
                    }
                    break;
                case FusionTablesSqlParser.K_CREATE:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 442;
                        this.match(FusionTablesSqlParser.K_CREATE);
                    }
                    break;
                case FusionTablesSqlParser.K_DELETE:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 443;
                        this.match(FusionTablesSqlParser.K_DELETE);
                    }
                    break;
                case FusionTablesSqlParser.K_DESC:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 444;
                        this.match(FusionTablesSqlParser.K_DESC);
                    }
                    break;
                case FusionTablesSqlParser.K_DOES:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 445;
                        this.match(FusionTablesSqlParser.K_DOES);
                    }
                    break;
                case FusionTablesSqlParser.K_DROP:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 446;
                        this.match(FusionTablesSqlParser.K_DROP);
                    }
                    break;
                case FusionTablesSqlParser.K_ENDS:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 447;
                        this.match(FusionTablesSqlParser.K_ENDS);
                    }
                    break;
                case FusionTablesSqlParser.K_EQUAL:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 448;
                        this.match(FusionTablesSqlParser.K_EQUAL);
                    }
                    break;
                case FusionTablesSqlParser.K_FROM:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 449;
                        this.match(FusionTablesSqlParser.K_FROM);
                    }
                    break;
                case FusionTablesSqlParser.K_GROUP:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 450;
                        this.match(FusionTablesSqlParser.K_GROUP);
                    }
                    break;
                case FusionTablesSqlParser.K_HAVING:
                    this.enterOuterAlt(_localctx, 25);
                    {
                        this.state = 451;
                        this.match(FusionTablesSqlParser.K_HAVING);
                    }
                    break;
                case FusionTablesSqlParser.K_IGNORING:
                    this.enterOuterAlt(_localctx, 26);
                    {
                        this.state = 452;
                        this.match(FusionTablesSqlParser.K_IGNORING);
                    }
                    break;
                case FusionTablesSqlParser.K_IN:
                    this.enterOuterAlt(_localctx, 27);
                    {
                        this.state = 453;
                        this.match(FusionTablesSqlParser.K_IN);
                    }
                    break;
                case FusionTablesSqlParser.K_INSERT:
                    this.enterOuterAlt(_localctx, 28);
                    {
                        this.state = 454;
                        this.match(FusionTablesSqlParser.K_INSERT);
                    }
                    break;
                case FusionTablesSqlParser.K_INTO:
                    this.enterOuterAlt(_localctx, 29);
                    {
                        this.state = 455;
                        this.match(FusionTablesSqlParser.K_INTO);
                    }
                    break;
                case FusionTablesSqlParser.K_JOIN:
                    this.enterOuterAlt(_localctx, 30);
                    {
                        this.state = 456;
                        this.match(FusionTablesSqlParser.K_JOIN);
                    }
                    break;
                case FusionTablesSqlParser.K_LATLNG:
                    this.enterOuterAlt(_localctx, 31);
                    {
                        this.state = 457;
                        this.match(FusionTablesSqlParser.K_LATLNG);
                    }
                    break;
                case FusionTablesSqlParser.K_LEFT:
                    this.enterOuterAlt(_localctx, 32);
                    {
                        this.state = 458;
                        this.match(FusionTablesSqlParser.K_LEFT);
                    }
                    break;
                case FusionTablesSqlParser.K_LIKE:
                    this.enterOuterAlt(_localctx, 33);
                    {
                        this.state = 459;
                        this.match(FusionTablesSqlParser.K_LIKE);
                    }
                    break;
                case FusionTablesSqlParser.K_LIMIT:
                    this.enterOuterAlt(_localctx, 34);
                    {
                        this.state = 460;
                        this.match(FusionTablesSqlParser.K_LIMIT);
                    }
                    break;
                case FusionTablesSqlParser.K_MATCHES:
                    this.enterOuterAlt(_localctx, 35);
                    {
                        this.state = 461;
                        this.match(FusionTablesSqlParser.K_MATCHES);
                    }
                    break;
                case FusionTablesSqlParser.K_MAXIMUM:
                    this.enterOuterAlt(_localctx, 36);
                    {
                        this.state = 462;
                        this.match(FusionTablesSqlParser.K_MAXIMUM);
                    }
                    break;
                case FusionTablesSqlParser.K_MINIMUM:
                    this.enterOuterAlt(_localctx, 37);
                    {
                        this.state = 463;
                        this.match(FusionTablesSqlParser.K_MINIMUM);
                    }
                    break;
                case FusionTablesSqlParser.K_NOT:
                    this.enterOuterAlt(_localctx, 38);
                    {
                        this.state = 464;
                        this.match(FusionTablesSqlParser.K_NOT);
                    }
                    break;
                case FusionTablesSqlParser.K_OF:
                    this.enterOuterAlt(_localctx, 39);
                    {
                        this.state = 465;
                        this.match(FusionTablesSqlParser.K_OF);
                    }
                    break;
                case FusionTablesSqlParser.K_OFFSET:
                    this.enterOuterAlt(_localctx, 40);
                    {
                        this.state = 466;
                        this.match(FusionTablesSqlParser.K_OFFSET);
                    }
                    break;
                case FusionTablesSqlParser.K_ON:
                    this.enterOuterAlt(_localctx, 41);
                    {
                        this.state = 467;
                        this.match(FusionTablesSqlParser.K_ON);
                    }
                    break;
                case FusionTablesSqlParser.K_ORDER:
                    this.enterOuterAlt(_localctx, 42);
                    {
                        this.state = 468;
                        this.match(FusionTablesSqlParser.K_ORDER);
                    }
                    break;
                case FusionTablesSqlParser.K_OUTER:
                    this.enterOuterAlt(_localctx, 43);
                    {
                        this.state = 469;
                        this.match(FusionTablesSqlParser.K_OUTER);
                    }
                    break;
                case FusionTablesSqlParser.K_RECTANGLE:
                    this.enterOuterAlt(_localctx, 44);
                    {
                        this.state = 470;
                        this.match(FusionTablesSqlParser.K_RECTANGLE);
                    }
                    break;
                case FusionTablesSqlParser.K_RENAME:
                    this.enterOuterAlt(_localctx, 45);
                    {
                        this.state = 471;
                        this.match(FusionTablesSqlParser.K_RENAME);
                    }
                    break;
                case FusionTablesSqlParser.K_SELECT:
                    this.enterOuterAlt(_localctx, 46);
                    {
                        this.state = 472;
                        this.match(FusionTablesSqlParser.K_SELECT);
                    }
                    break;
                case FusionTablesSqlParser.K_SET:
                    this.enterOuterAlt(_localctx, 47);
                    {
                        this.state = 473;
                        this.match(FusionTablesSqlParser.K_SET);
                    }
                    break;
                case FusionTablesSqlParser.K_STARTS:
                    this.enterOuterAlt(_localctx, 48);
                    {
                        this.state = 474;
                        this.match(FusionTablesSqlParser.K_STARTS);
                    }
                    break;
                case FusionTablesSqlParser.K_ST_DISTANCE:
                    this.enterOuterAlt(_localctx, 49);
                    {
                        this.state = 475;
                        this.match(FusionTablesSqlParser.K_ST_DISTANCE);
                    }
                    break;
                case FusionTablesSqlParser.K_ST_INTERSECTS:
                    this.enterOuterAlt(_localctx, 50);
                    {
                        this.state = 476;
                        this.match(FusionTablesSqlParser.K_ST_INTERSECTS);
                    }
                    break;
                case FusionTablesSqlParser.K_SUM:
                    this.enterOuterAlt(_localctx, 51);
                    {
                        this.state = 477;
                        this.match(FusionTablesSqlParser.K_SUM);
                    }
                    break;
                case FusionTablesSqlParser.K_TABLE:
                    this.enterOuterAlt(_localctx, 52);
                    {
                        this.state = 478;
                        this.match(FusionTablesSqlParser.K_TABLE);
                    }
                    break;
                case FusionTablesSqlParser.K_TO:
                    this.enterOuterAlt(_localctx, 53);
                    {
                        this.state = 479;
                        this.match(FusionTablesSqlParser.K_TO);
                    }
                    break;
                case FusionTablesSqlParser.K_UPDATE:
                    this.enterOuterAlt(_localctx, 54);
                    {
                        this.state = 480;
                        this.match(FusionTablesSqlParser.K_UPDATE);
                    }
                    break;
                case FusionTablesSqlParser.K_VALUES:
                    this.enterOuterAlt(_localctx, 55);
                    {
                        this.state = 481;
                        this.match(FusionTablesSqlParser.K_VALUES);
                    }
                    break;
                case FusionTablesSqlParser.K_VIEW:
                    this.enterOuterAlt(_localctx, 56);
                    {
                        this.state = 482;
                        this.match(FusionTablesSqlParser.K_VIEW);
                    }
                    break;
                case FusionTablesSqlParser.K_WHERE:
                    this.enterOuterAlt(_localctx, 57);
                    {
                        this.state = 483;
                        this.match(FusionTablesSqlParser.K_WHERE);
                    }
                    break;
                case FusionTablesSqlParser.K_WITH:
                    this.enterOuterAlt(_localctx, 58);
                    {
                        this.state = 484;
                        this.match(FusionTablesSqlParser.K_WITH);
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
    FusionTablesSqlParser.prototype.operator = function () {
        var _localctx = new OperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, FusionTablesSqlParser.RULE_operator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 487;
                _la = this._input.LA(1);
                if (!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (FusionTablesSqlParser.LT_EQ - 65)) | (1 << (FusionTablesSqlParser.GT_EQ - 65)) | (1 << (FusionTablesSqlParser.GT - 65)) | (1 << (FusionTablesSqlParser.EQ - 65)) | (1 << (FusionTablesSqlParser.LT - 65)))) !== 0))) {
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
    FusionTablesSqlParser.prototype.literal = function () {
        var _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, FusionTablesSqlParser.RULE_literal);
        try {
            this.state = 491;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case FusionTablesSqlParser.NUMERIC_LITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 489;
                        this.numeric_literal();
                    }
                    break;
                case FusionTablesSqlParser.STRING_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 490;
                        this.string_literal();
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
    FusionTablesSqlParser.prototype.error_message = function () {
        var _localctx = new Error_messageContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, FusionTablesSqlParser.RULE_error_message);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 493;
                this.string_literal();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FusionTablesSqlParser.prototype.identifier = function () {
        var _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, FusionTablesSqlParser.RULE_identifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 495;
                this.string_literal();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FusionTablesSqlParser.prototype.column_alias = function () {
        var _localctx = new Column_aliasContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, FusionTablesSqlParser.RULE_column_alias);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 497;
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
    FusionTablesSqlParser.prototype.table_name = function () {
        var _localctx = new Table_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, FusionTablesSqlParser.RULE_table_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 499;
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
    FusionTablesSqlParser.prototype.column_name = function () {
        var _localctx = new Column_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, FusionTablesSqlParser.RULE_column_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 501;
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
    FusionTablesSqlParser.prototype.new_table_name = function () {
        var _localctx = new New_table_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, FusionTablesSqlParser.RULE_new_table_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 503;
                this.table_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FusionTablesSqlParser.prototype.view_name = function () {
        var _localctx = new View_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, FusionTablesSqlParser.RULE_view_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 505;
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
    FusionTablesSqlParser.prototype.table_alias = function () {
        var _localctx = new Table_aliasContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, FusionTablesSqlParser.RULE_table_alias);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 507;
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
    FusionTablesSqlParser.prototype.numeric_literal = function () {
        var _localctx = new Numeric_literalContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, FusionTablesSqlParser.RULE_numeric_literal);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 509;
                this.match(FusionTablesSqlParser.NUMERIC_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    FusionTablesSqlParser.prototype.string_literal = function () {
        var _localctx = new String_literalContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, FusionTablesSqlParser.RULE_string_literal);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 511;
                this.match(FusionTablesSqlParser.STRING_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(FusionTablesSqlParser, "_ATN", {
        get: function () {
            if (!FusionTablesSqlParser.__ATN) {
                FusionTablesSqlParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(FusionTablesSqlParser._serializedATN));
            }
            return FusionTablesSqlParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    FusionTablesSqlParser.T__0 = 1;
    FusionTablesSqlParser.T__1 = 2;
    FusionTablesSqlParser.T__2 = 3;
    FusionTablesSqlParser.T__3 = 4;
    FusionTablesSqlParser.K_ALTER = 5;
    FusionTablesSqlParser.K_AND = 6;
    FusionTablesSqlParser.K_OR = 7;
    FusionTablesSqlParser.K_AS = 8;
    FusionTablesSqlParser.K_ASC = 9;
    FusionTablesSqlParser.K_AVERAGE = 10;
    FusionTablesSqlParser.K_BY = 11;
    FusionTablesSqlParser.K_BETWEEN = 12;
    FusionTablesSqlParser.K_CASE = 13;
    FusionTablesSqlParser.K_CIRCLE = 14;
    FusionTablesSqlParser.K_COLUMN = 15;
    FusionTablesSqlParser.K_CONTAINS = 16;
    FusionTablesSqlParser.K_COUNT = 17;
    FusionTablesSqlParser.K_CREATE = 18;
    FusionTablesSqlParser.K_DELETE = 19;
    FusionTablesSqlParser.K_DESC = 20;
    FusionTablesSqlParser.K_DESCRIBE = 21;
    FusionTablesSqlParser.K_DOES = 22;
    FusionTablesSqlParser.K_CONTAIN = 23;
    FusionTablesSqlParser.K_DROP = 24;
    FusionTablesSqlParser.K_ENDS = 25;
    FusionTablesSqlParser.K_FROM = 26;
    FusionTablesSqlParser.K_GROUP = 27;
    FusionTablesSqlParser.K_HAVING = 28;
    FusionTablesSqlParser.K_IGNORING = 29;
    FusionTablesSqlParser.K_IN = 30;
    FusionTablesSqlParser.K_INSERT = 31;
    FusionTablesSqlParser.K_INTO = 32;
    FusionTablesSqlParser.K_JOIN = 33;
    FusionTablesSqlParser.K_LATLNG = 34;
    FusionTablesSqlParser.K_LEFT = 35;
    FusionTablesSqlParser.K_LIKE = 36;
    FusionTablesSqlParser.K_LIMIT = 37;
    FusionTablesSqlParser.K_MATCHES = 38;
    FusionTablesSqlParser.K_MAXIMUM = 39;
    FusionTablesSqlParser.K_MINIMUM = 40;
    FusionTablesSqlParser.K_NOT = 41;
    FusionTablesSqlParser.K_EQUAL = 42;
    FusionTablesSqlParser.K_OF = 43;
    FusionTablesSqlParser.K_OFFSET = 44;
    FusionTablesSqlParser.K_ON = 45;
    FusionTablesSqlParser.K_ORDER = 46;
    FusionTablesSqlParser.K_OUTER = 47;
    FusionTablesSqlParser.K_RECTANGLE = 48;
    FusionTablesSqlParser.K_RENAME = 49;
    FusionTablesSqlParser.K_ST_DISTANCE = 50;
    FusionTablesSqlParser.K_SELECT = 51;
    FusionTablesSqlParser.K_ST_INTERSECTS = 52;
    FusionTablesSqlParser.K_SUM = 53;
    FusionTablesSqlParser.K_SET = 54;
    FusionTablesSqlParser.K_SHOW = 55;
    FusionTablesSqlParser.K_STARTS = 56;
    FusionTablesSqlParser.K_TABLE = 57;
    FusionTablesSqlParser.K_TABLES = 58;
    FusionTablesSqlParser.K_TO = 59;
    FusionTablesSqlParser.K_UPDATE = 60;
    FusionTablesSqlParser.K_VALUES = 61;
    FusionTablesSqlParser.K_VIEW = 62;
    FusionTablesSqlParser.K_WHERE = 63;
    FusionTablesSqlParser.K_WITH = 64;
    FusionTablesSqlParser.LT_EQ = 65;
    FusionTablesSqlParser.GT_EQ = 66;
    FusionTablesSqlParser.GT = 67;
    FusionTablesSqlParser.EQ = 68;
    FusionTablesSqlParser.LT = 69;
    FusionTablesSqlParser.LPAR = 70;
    FusionTablesSqlParser.RPAR = 71;
    FusionTablesSqlParser.NUMERIC_LITERAL = 72;
    FusionTablesSqlParser.STRING_LITERAL = 73;
    FusionTablesSqlParser.STRING = 74;
    FusionTablesSqlParser.QUOTED_STRING = 75;
    FusionTablesSqlParser.SINGLELINE_COMMENT = 76;
    FusionTablesSqlParser.MULTILINE_COMMENT = 77;
    FusionTablesSqlParser.WHITESPACE = 78;
    FusionTablesSqlParser.RULE_fusionTablesSql = 0;
    FusionTablesSqlParser.RULE_sql_stmt = 1;
    FusionTablesSqlParser.RULE_table_name_in_ddl = 2;
    FusionTablesSqlParser.RULE_table_name_in_dml = 3;
    FusionTablesSqlParser.RULE_create_table_as_select_stmt = 4;
    FusionTablesSqlParser.RULE_describe_stmt = 5;
    FusionTablesSqlParser.RULE_show_tables_stmt = 6;
    FusionTablesSqlParser.RULE_alter_table_stmt = 7;
    FusionTablesSqlParser.RULE_create_view_stmt = 8;
    FusionTablesSqlParser.RULE_drop_table_stmt = 9;
    FusionTablesSqlParser.RULE_insert_stmt = 10;
    FusionTablesSqlParser.RULE_update_stmt = 11;
    FusionTablesSqlParser.RULE_column_assignment = 12;
    FusionTablesSqlParser.RULE_delete_stmt = 13;
    FusionTablesSqlParser.RULE_eq_comparison = 14;
    FusionTablesSqlParser.RULE_table_name_with_alias = 15;
    FusionTablesSqlParser.RULE_select_stmt = 16;
    FusionTablesSqlParser.RULE_ordering_term = 17;
    FusionTablesSqlParser.RULE_join_clause = 18;
    FusionTablesSqlParser.RULE_result_column = 19;
    FusionTablesSqlParser.RULE_qualified_column_name = 20;
    FusionTablesSqlParser.RULE_aggregate_exp = 21;
    FusionTablesSqlParser.RULE_expr = 22;
    FusionTablesSqlParser.RULE_column_name_beginning_expr = 23;
    FusionTablesSqlParser.RULE_column_name_in_dml = 24;
    FusionTablesSqlParser.RULE_and_or_or = 25;
    FusionTablesSqlParser.RULE_geometry = 26;
    FusionTablesSqlParser.RULE_circle = 27;
    FusionTablesSqlParser.RULE_rectangle = 28;
    FusionTablesSqlParser.RULE_coordinate = 29;
    FusionTablesSqlParser.RULE_keyword = 30;
    FusionTablesSqlParser.RULE_operator = 31;
    FusionTablesSqlParser.RULE_literal = 32;
    FusionTablesSqlParser.RULE_error_message = 33;
    FusionTablesSqlParser.RULE_identifier = 34;
    FusionTablesSqlParser.RULE_column_alias = 35;
    FusionTablesSqlParser.RULE_table_name = 36;
    FusionTablesSqlParser.RULE_column_name = 37;
    FusionTablesSqlParser.RULE_new_table_name = 38;
    FusionTablesSqlParser.RULE_view_name = 39;
    FusionTablesSqlParser.RULE_table_alias = 40;
    FusionTablesSqlParser.RULE_numeric_literal = 41;
    FusionTablesSqlParser.RULE_string_literal = 42;
    // tslint:disable:no-trailing-whitespace
    FusionTablesSqlParser.ruleNames = [
        "fusionTablesSql", "sql_stmt", "table_name_in_ddl", "table_name_in_dml",
        "create_table_as_select_stmt", "describe_stmt", "show_tables_stmt", "alter_table_stmt",
        "create_view_stmt", "drop_table_stmt", "insert_stmt", "update_stmt", "column_assignment",
        "delete_stmt", "eq_comparison", "table_name_with_alias", "select_stmt",
        "ordering_term", "join_clause", "result_column", "qualified_column_name",
        "aggregate_exp", "expr", "column_name_beginning_expr", "column_name_in_dml",
        "and_or_or", "geometry", "circle", "rectangle", "coordinate", "keyword",
        "operator", "literal", "error_message", "identifier", "column_alias",
        "table_name", "column_name", "new_table_name", "view_name", "table_alias",
        "numeric_literal", "string_literal",
    ];
    FusionTablesSqlParser._LITERAL_NAMES = [
        undefined, "';'", "'*'", "','", "'.'", undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "'<='", "'>='", "'>'", "'='", "'<'", "'('", "')'",
    ];
    FusionTablesSqlParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, "K_ALTER", "K_AND",
        "K_OR", "K_AS", "K_ASC", "K_AVERAGE", "K_BY", "K_BETWEEN", "K_CASE", "K_CIRCLE",
        "K_COLUMN", "K_CONTAINS", "K_COUNT", "K_CREATE", "K_DELETE", "K_DESC",
        "K_DESCRIBE", "K_DOES", "K_CONTAIN", "K_DROP", "K_ENDS", "K_FROM", "K_GROUP",
        "K_HAVING", "K_IGNORING", "K_IN", "K_INSERT", "K_INTO", "K_JOIN", "K_LATLNG",
        "K_LEFT", "K_LIKE", "K_LIMIT", "K_MATCHES", "K_MAXIMUM", "K_MINIMUM",
        "K_NOT", "K_EQUAL", "K_OF", "K_OFFSET", "K_ON", "K_ORDER", "K_OUTER",
        "K_RECTANGLE", "K_RENAME", "K_ST_DISTANCE", "K_SELECT", "K_ST_INTERSECTS",
        "K_SUM", "K_SET", "K_SHOW", "K_STARTS", "K_TABLE", "K_TABLES", "K_TO",
        "K_UPDATE", "K_VALUES", "K_VIEW", "K_WHERE", "K_WITH", "LT_EQ", "GT_EQ",
        "GT", "EQ", "LT", "LPAR", "RPAR", "NUMERIC_LITERAL", "STRING_LITERAL",
        "STRING", "QUOTED_STRING", "SINGLELINE_COMMENT", "MULTILINE_COMMENT",
        "WHITESPACE",
    ];
    FusionTablesSqlParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(FusionTablesSqlParser._LITERAL_NAMES, FusionTablesSqlParser._SYMBOLIC_NAMES, []);
    FusionTablesSqlParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03P\u0204\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
        "\x04,\t,\x03\x02\x07\x02Z\n\x02\f\x02\x0E\x02]\v\x02\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03i" +
        "\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06" +
        "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07" +
        "\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
        "\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\x90\n\n\f\n\x0E" +
        "\n\x93\v\n\x03\n\x03\n\x03\n\x03\n\x05\n\x99\n\n\x03\n\x07\n\x9C\n\n\f" +
        "\n\x0E\n\x9F\v\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f" +
        "\x03\f\x03\f\x03\f\x03\f\x07\f\xAE\n\f\f\f\x0E\f\xB1\v\f\x03\f\x03\f\x03" +
        "\f\x03\f\x03\f\x03\f\x03\f\x07\f\xBA\n\f\f\f\x0E\f\xBD\v\f\x03\f\x03\f" +
        "\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\xC7\n\r\f\r\x0E\r\xCA\v\r\x03" +
        "\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F" +
        "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xDB\n\x0F\x03\x10\x03" +
        "\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x05\x11\xE4\n\x11\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x07\x12\xEA\n\x12\f\x12\x0E\x12\xED\v\x12\x03" +
        "\x12\x03\x12\x03\x12\x07\x12\xF2\n\x12\f\x12\x0E\x12\xF5\v\x12\x03\x12" +
        "\x03\x12\x05\x12\xF9\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07" +
        "\x12\u0100\n\x12\f\x12\x0E\x12\u0103\v\x12\x05\x12\u0105\n\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u010C\n\x12\f\x12\x0E\x12\u010F" +
        "\v\x12\x05\x12\u0111\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0117" +
        "\n\x12\x05\x12\u0119\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
        "\x13\x03\x13\x03\x13\x05\x13\u0123\n\x13\x03\x13\x05\x13\u0126\n\x13\x03" +
        "\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
        "\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0138\n\x15" +
        "\x03\x16\x03\x16\x03\x16\x05\x16\u013D\n\x16\x03\x16\x03\x16\x03\x17\x03" +
        "\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
        "\x18\x05\x18\u014C\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
        "\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
        "\x03\x18\x03\x18\x05\x18\u015F\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05" +
        "\x18\u0165\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18" +
        "\u016D\n\x18\f\x18\x0E\x18\u0170\v\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
        "\x05\x18\u0176\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
        "\x18\x03\x18\x05\x18\u0180\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
        "\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u018B\n\x18\x05\x18\u018D\n\x18" +
        "\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x05\x1C" +
        "\u0197\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
        "\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03" +
        "\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03" +
        " \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03" +
        " \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03" +
        " \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03" +
        " \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x05 \u01E8\n \x03!\x03" +
        "!\x03\"\x03\"\x05\"\u01EE\n\"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&" +
        "\x03\'\x03\'\x03(\x03(\x03)\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x03,\x02" +
        "\x02\x02-\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
        "\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
        "\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
        "B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02\x02\x06\x04\x02" +
        "\v\v\x16\x16\x06\x02\f\f\x13\x13)*77\x03\x02\b\t\x03\x02CG\x02\u0245\x02" +
        "[\x03\x02\x02\x02\x04h\x03\x02\x02\x02\x06l\x03\x02\x02\x02\bn\x03\x02" +
        "\x02\x02\np\x03\x02\x02\x02\fy\x03\x02\x02\x02\x0E|\x03\x02\x02\x02\x10" +
        "\x7F\x03\x02\x02\x02\x12\x86\x03\x02\x02\x02\x14\xA2\x03\x02\x02\x02\x16" +
        "\xA6\x03\x02\x02\x02\x18\xC0\x03\x02\x02\x02\x1A\xCE\x03\x02\x02\x02\x1C" +
        "\xD2\x03\x02\x02\x02\x1E\xDC\x03\x02\x02\x02 \xE0\x03\x02\x02\x02\"\xE5" +
        "\x03\x02\x02\x02$\u0122\x03\x02\x02\x02&\u0127\x03\x02\x02\x02(\u0137" +
        "\x03\x02\x02\x02*\u013C\x03\x02\x02\x02,\u0140\x03\x02\x02\x02.\u018C" +
        "\x03\x02\x02\x020\u018E\x03\x02\x02\x022\u0190\x03\x02\x02\x024\u0192" +
        "\x03\x02\x02\x026\u0196\x03\x02\x02\x028\u0198\x03\x02\x02\x02:\u019F" +
        "\x03\x02\x02\x02<\u01A6\x03\x02\x02\x02>\u01E7\x03\x02\x02\x02@\u01E9" +
        "\x03\x02\x02\x02B\u01ED\x03\x02\x02\x02D\u01EF\x03\x02\x02\x02F\u01F1" +
        "\x03\x02\x02\x02H\u01F3\x03\x02\x02\x02J\u01F5\x03\x02\x02\x02L\u01F7" +
        "\x03\x02\x02\x02N\u01F9\x03\x02\x02\x02P\u01FB\x03\x02\x02\x02R\u01FD" +
        "\x03\x02\x02\x02T\u01FF\x03\x02\x02\x02V\u0201\x03\x02\x02\x02XZ\x05\x04" +
        "\x03\x02YX\x03\x02\x02\x02Z]\x03\x02\x02\x02[Y\x03\x02\x02\x02[\\\x03" +
        "\x02\x02\x02\\\x03\x03\x02\x02\x02][\x03\x02\x02\x02^i\x05\x10\t\x02_" +
        "i\x05\"\x12\x02`i\x05\x12\n\x02ai\x05\n\x06\x02bi\x05\x1C\x0F\x02ci\x05" +
        "\x14\v\x02di\x05\x16\f\x02ei\x05\x18\r\x02fi\x05\f\x07\x02gi\x05\x0E\b" +
        "\x02h^\x03\x02\x02\x02h_\x03\x02\x02\x02h`\x03\x02\x02\x02ha\x03\x02\x02" +
        "\x02hb\x03\x02\x02\x02hc\x03\x02\x02\x02hd\x03\x02\x02\x02he\x03\x02\x02" +
        "\x02hf\x03\x02\x02\x02hg\x03\x02\x02\x02ij\x03\x02\x02\x02jk\x07\x03\x02" +
        "\x02k\x05\x03\x02\x02\x02lm\x05J&\x02m\x07\x03\x02\x02\x02no\x05J&\x02" +
        "o\t\x03\x02\x02\x02pq\x07\x14\x02\x02qr\x07;\x02\x02rs\x05F$\x02st\x07" +
        "\n\x02\x02tu\x075\x02\x02uv\x07\x04\x02\x02vw\x07\x1C\x02\x02wx\x05\x06" +
        "\x04\x02x\v\x03\x02\x02\x02yz\x07\x17\x02\x02z{\x05\x06\x04\x02{\r\x03" +
        "\x02\x02\x02|}\x079\x02\x02}~\x07<\x02\x02~\x0F\x03\x02\x02\x02\x7F\x80" +
        "\x07\x07\x02\x02\x80\x81\x07;\x02\x02\x81\x82\x05\x06\x04\x02\x82\x83" +
        "\x073\x02\x02\x83\x84\x07=\x02\x02\x84\x85\x05F$\x02\x85\x11\x03\x02\x02" +
        "\x02\x86\x87\x07\x14\x02\x02\x87\x88\x07@\x02\x02\x88\x89\x05P)\x02\x89" +
        "\x8A\x07\n\x02\x02\x8A\x8B\x07H\x02\x02\x8B\x8C\x075\x02\x02\x8C\x91\x05" +
        "(\x15\x02\x8D\x8E\x07\x05\x02\x02\x8E\x90\x05(\x15\x02\x8F\x8D\x03\x02" +
        "\x02\x02\x90\x93\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x91\x92\x03\x02" +
        "\x02\x02\x92\x94\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x94\x95\x07\x1C" +
        "\x02\x02\x95\x98\x05 \x11\x02\x96\x97\x07A\x02\x02\x97\x99\x05.\x18\x02" +
        "\x98\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9D\x03\x02\x02\x02" +
        "\x9A\x9C\x05&\x14\x02\x9B\x9A\x03\x02\x02\x02\x9C\x9F\x03\x02\x02\x02" +
        "\x9D\x9B\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\xA0\x03\x02\x02\x02" +
        "\x9F\x9D\x03\x02\x02\x02\xA0\xA1\x07I\x02\x02\xA1\x13\x03\x02\x02\x02" +
        "\xA2\xA3\x07\x1A\x02\x02\xA3\xA4\x07;\x02\x02\xA4\xA5\x05\x06\x04\x02" +
        "\xA5\x15\x03\x02\x02\x02\xA6\xA7\x07!\x02\x02\xA7\xA8\x07\"\x02\x02\xA8" +
        "\xA9\x05\b\x05\x02\xA9\xAA\x07H\x02\x02\xAA\xAF\x052\x1A\x02\xAB\xAC\x07" +
        "\x05\x02\x02\xAC\xAE\x052\x1A\x02\xAD\xAB\x03\x02\x02\x02\xAE\xB1\x03" +
        "\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB2\x03" +
        "\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB3\x07I\x02\x02\xB3\xB4\x03" +
        "\x02\x02\x02\xB4\xB5\x07?\x02\x02\xB5\xB6\x07H\x02\x02\xB6\xBB\x05B\"" +
        "\x02\xB7\xB8\x07\x05\x02\x02\xB8\xBA\x05B\"\x02\xB9\xB7\x03\x02\x02\x02" +
        "\xBA\xBD\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02" +
        "\xBC\xBE\x03\x02\x02\x02\xBD\xBB\x03\x02\x02\x02\xBE\xBF\x07I\x02\x02" +
        "\xBF\x17\x03\x02\x02\x02\xC0\xC1\x07>\x02\x02\xC1\xC2\x05\b\x05\x02\xC2" +
        "\xC3\x078\x02\x02\xC3\xC8\x05\x1A\x0E\x02\xC4\xC5\x07\x05\x02\x02\xC5" +
        "\xC7\x05\x1A\x0E\x02\xC6\xC4\x03\x02\x02\x02\xC7\xCA\x03\x02\x02\x02\xC8" +
        "\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCB\x03\x02\x02\x02\xCA" +
        "\xC8\x03\x02\x02\x02\xCB\xCC\x07A\x02\x02\xCC\xCD\x05\x1E\x10\x02\xCD" +
        "\x19\x03\x02\x02\x02\xCE\xCF\x052\x1A\x02\xCF\xD0\x07F\x02\x02\xD0\xD1" +
        "\x05B\"\x02\xD1\x1B\x03\x02\x02\x02\xD2\xD3\x07\x15\x02\x02\xD3\xD4\x07" +
        "\x1C\x02\x02\xD4\xDA\x05\b\x05\x02\xD5\xD6\x07A\x02\x02\xD6\xD7\x052\x1A" +
        "\x02\xD7\xD8\x07F\x02\x02\xD8\xD9\x05B\"\x02\xD9\xDB\x03\x02\x02\x02\xDA" +
        "\xD5\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\x1D\x03\x02\x02\x02\xDC" +
        "\xDD\x05F$\x02\xDD\xDE\x07F\x02\x02\xDE\xDF\x05V,\x02\xDF\x1F\x03\x02" +
        "\x02\x02\xE0\xE3\x05J&\x02\xE1\xE2\x07\n\x02\x02\xE2\xE4\x05R*\x02\xE3" +
        "\xE1\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4!\x03\x02\x02\x02\xE5" +
        "\xE6\x075\x02\x02\xE6\xEB\x05(\x15\x02\xE7\xE8\x07\x05\x02\x02\xE8\xEA" +
        "\x05(\x15\x02\xE9\xE7\x03\x02\x02\x02\xEA\xED\x03\x02\x02\x02\xEB\xE9" +
        "\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xEE\x03\x02\x02\x02\xED\xEB" +
        "\x03\x02\x02\x02\xEE\xEF\x07\x1C\x02\x02\xEF\xF3\x05 \x11\x02\xF0\xF2" +
        "\x05&\x14\x02\xF1\xF0\x03\x02\x02\x02\xF2\xF5\x03\x02\x02\x02\xF3\xF1" +
        "\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF8\x03\x02\x02\x02\xF5\xF3" +
        "\x03\x02\x02\x02\xF6\xF7\x07A\x02\x02\xF7\xF9\x05.\x18\x02\xF8\xF6\x03" +
        "\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\u0104\x03\x02\x02\x02\xFA\xFB" +
        "\x07\x1D\x02\x02\xFB\xFC\x07\r\x02\x02\xFC\u0101\x05*\x16\x02\xFD\xFE" +
        "\x07\x05\x02\x02\xFE\u0100\x05*\x16\x02\xFF\xFD\x03\x02\x02\x02\u0100" +
        "\u0103\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0101\u0102\x03\x02\x02" +
        "\x02\u0102\u0105\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0104\xFA" +
        "\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105\u0110\x03\x02\x02\x02" +
        "\u0106\u0107\x070\x02\x02\u0107\u0108\x07\r\x02\x02\u0108\u010D\x05$\x13" +
        "\x02\u0109\u010A\x07\x05\x02\x02\u010A\u010C\x05$\x13\x02\u010B\u0109" +
        "\x03\x02\x02\x02\u010C\u010F\x03\x02\x02\x02\u010D\u010B\x03\x02\x02\x02" +
        "\u010D\u010E\x03\x02\x02\x02\u010E\u0111\x03\x02\x02\x02\u010F\u010D\x03" +
        "\x02\x02\x02\u0110\u0106\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111" +
        "\u0118\x03\x02\x02\x02\u0112\u0113\x07.\x02\x02\u0113\u0116\x05T+\x02" +
        "\u0114\u0115\x07\'\x02\x02\u0115\u0117\x05T+\x02\u0116\u0114\x03\x02\x02" +
        "\x02\u0116\u0117\x03\x02\x02\x02\u0117\u0119\x03\x02\x02\x02\u0118\u0112" +
        "\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119#\x03\x02\x02\x02\u011A" +
        "\u0123\x05*\x16\x02\u011B\u011C\x074\x02\x02\u011C\u011D\x07H\x02\x02" +
        "\u011D\u011E\x05*\x16\x02\u011E\u011F\x07\x05\x02\x02\u011F\u0120\x05" +
        "<\x1F\x02\u0120\u0121\x07I\x02\x02\u0121\u0123\x03\x02\x02\x02\u0122\u011A" +
        "\x03\x02\x02\x02\u0122\u011B\x03\x02\x02\x02\u0123\u0125\x03\x02\x02\x02" +
        "\u0124\u0126\t\x02\x02\x02\u0125\u0124\x03\x02\x02\x02\u0125\u0126\x03" +
        "\x02\x02\x02\u0126%\x03\x02\x02\x02\u0127\u0128\x07%\x02\x02\u0128\u0129" +
        "\x071\x02\x02\u0129\u012A\x07#\x02\x02\u012A\u012B\x05 \x11\x02\u012B" +
        "\u012C\x07/\x02\x02\u012C\u012D\x05*\x16\x02\u012D\u012E\x07F\x02\x02" +
        "\u012E\u012F\x05*\x16\x02\u012F\'\x03\x02\x02\x02\u0130\u0138\x07\x04" +
        "\x02\x02\u0131\u0132\x05J&\x02\u0132\u0133\x07\x06\x02\x02\u0133\u0134" +
        "\x07\x04\x02\x02\u0134\u0138\x03\x02\x02\x02\u0135\u0138\x05*\x16\x02" +
        "\u0136\u0138\x05,\x17\x02\u0137\u0130\x03\x02\x02\x02\u0137\u0131\x03" +
        "\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0137\u0136\x03\x02\x02\x02\u0138" +
        ")\x03\x02\x02\x02\u0139\u013A\x05J&\x02\u013A\u013B\x07\x06\x02\x02\u013B" +
        "\u013D\x03\x02\x02\x02\u013C\u0139\x03\x02\x02\x02\u013C\u013D\x03\x02" +
        "\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u013F\x05L\'\x02\u013F+\x03" +
        "\x02\x02\x02\u0140\u0141\t\x03\x02\x02\u0141\u0142\x07H\x02\x02\u0142" +
        "\u0143\x05*\x16\x02\u0143\u0144\x07I\x02\x02\u0144-\x03\x02\x02\x02\u0145" +
        "\u0146\x050\x19\x02\u0146\u0147\x05@!\x02\u0147\u014B\x05B\"\x02\u0148" +
        "\u0149\x054\x1B\x02\u0149\u014A\x05.\x18\x02\u014A\u014C\x03\x02\x02\x02" +
        "\u014B\u0148\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u018D\x03" +
        "\x02\x02\x02\u014D\u015E\x050\x19\x02\u014E\u015F\x07&\x02\x02\u014F\u015F" +
        "\x07(\x02\x02\u0150\u0151\x07:\x02\x02\u0151\u015F\x07B\x02\x02\u0152" +
        "\u0153\x07\x1B\x02\x02\u0153\u015F\x07B\x02\x02\u0154\u015F\x07\x12\x02" +
        "\x02\u0155\u0156\x07\x12\x02\x02\u0156\u0157\x07\x1F\x02\x02\u0157\u015F" +
        "\x07\x0F\x02\x02\u0158\u0159\x07\x18\x02\x02\u0159\u015A\x07+\x02\x02" +
        "\u015A\u015F\x07\x19\x02\x02\u015B\u015C\x07+\x02\x02\u015C\u015D\x07" +
        ",\x02\x02\u015D\u015F\x07=\x02\x02\u015E\u014E\x03\x02\x02\x02\u015E\u014F" +
        "\x03\x02\x02\x02\u015E\u0150\x03\x02\x02\x02\u015E\u0152\x03\x02\x02\x02" +
        "\u015E\u0154\x03\x02\x02\x02\u015E\u0155\x03\x02\x02\x02\u015E\u0158\x03" +
        "\x02\x02\x02\u015E\u015B\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160" +
        "\u0164\x05V,\x02\u0161\u0162\x054\x1B\x02\u0162\u0163\x05.\x18\x02\u0163" +
        "\u0165\x03\x02\x02\x02\u0164\u0161\x03\x02\x02\x02\u0164\u0165\x03\x02" +
        "\x02\x02\u0165\u018D\x03\x02\x02\x02\u0166\u0167\x050\x19\x02\u0167\u0168" +
        "\x07 \x02\x02\u0168\u0169\x07H\x02\x02\u0169\u016E\x05V,\x02\u016A\u016B" +
        "\x07\x05\x02\x02\u016B\u016D\x05V,\x02\u016C\u016A\x03\x02\x02\x02\u016D" +
        "\u0170\x03\x02\x02\x02\u016E\u016C\x03\x02\x02\x02\u016E\u016F\x03\x02" +
        "\x02\x02\u016F\u0171\x03\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0171" +
        "\u0175\x07I\x02\x02\u0172\u0173\x054\x1B\x02\u0173\u0174\x05.\x18\x02" +
        "\u0174\u0176\x03\x02\x02\x02\u0175\u0172\x03\x02\x02\x02\u0175\u0176\x03" +
        "\x02\x02\x02\u0176\u018D\x03\x02\x02\x02\u0177\u0178\x050\x19\x02\u0178" +
        "\u0179\x07\x0E\x02\x02\u0179\u017A\x05B\"\x02\u017A\u017B\x07\b\x02\x02" +
        "\u017B\u017F\x05B\"\x02\u017C\u017D\x054\x1B\x02\u017D\u017E\x05.\x18" +
        "\x02\u017E\u0180\x03\x02\x02\x02\u017F\u017C\x03\x02\x02\x02\u017F\u0180" +
        "\x03\x02\x02\x02\u0180\u018D\x03\x02\x02\x02\u0181\u0182\x076\x02\x02" +
        "\u0182\u0183\x07H\x02\x02\u0183\u0184\x05*\x16\x02\u0184\u0185\x07\x05" +
        "\x02\x02\u0185\u0186\x056\x1C\x02\u0186\u018A\x07I\x02\x02\u0187\u0188" +
        "\x054\x1B\x02\u0188\u0189\x05.\x18\x02\u0189\u018B\x03\x02\x02\x02\u018A" +
        "\u0187\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B\u018D\x03\x02" +
        "\x02\x02\u018C\u0145\x03\x02\x02\x02\u018C\u014D\x03\x02\x02\x02\u018C" +
        "\u0166\x03\x02\x02\x02\u018C\u0177\x03\x02\x02\x02\u018C\u0181\x03\x02" +
        "\x02\x02\u018D/\x03\x02\x02\x02\u018E\u018F\x05*\x16\x02\u018F1\x03\x02" +
        "\x02\x02\u0190\u0191\x05L\'\x02\u01913\x03\x02\x02\x02\u0192\u0193\t\x04" +
        "\x02\x02\u01935\x03\x02\x02\x02\u0194\u0197\x058\x1D\x02\u0195\u0197\x05" +
        ":\x1E\x02\u0196\u0194\x03\x02\x02\x02\u0196\u0195\x03\x02\x02\x02\u0197" +
        "7\x03\x02\x02\x02\u0198\u0199\x07\x10\x02\x02\u0199\u019A\x07H\x02\x02" +
        "\u019A\u019B\x05<\x1F\x02\u019B\u019C\x07\x05\x02\x02\u019C\u019D\x05" +
        "T+\x02\u019D\u019E\x07I\x02\x02\u019E9\x03\x02\x02\x02\u019F\u01A0\x07" +
        "2\x02\x02\u01A0\u01A1\x07H\x02\x02\u01A1\u01A2\x05<\x1F\x02\u01A2\u01A3" +
        "\x07\x05\x02\x02\u01A3\u01A4\x05<\x1F\x02\u01A4\u01A5\x07I\x02\x02\u01A5" +
        ";\x03\x02\x02\x02\u01A6\u01A7\x07$\x02\x02\u01A7\u01A8\x07H\x02\x02\u01A8" +
        "\u01A9\x05T+\x02\u01A9\u01AA\x07\x05\x02\x02\u01AA\u01AB\x05T+\x02\u01AB" +
        "\u01AC\x07I\x02\x02\u01AC=\x03\x02\x02\x02\u01AD\u01E8\x03\x02\x02\x02" +
        "\u01AE\u01E8\x07\x07\x02\x02\u01AF\u01E8\x07\b\x02\x02\u01B0\u01E8\x07" +
        "\t\x02\x02\u01B1\u01E8\x07\n\x02\x02\u01B2\u01E8\x07\v\x02\x02\u01B3\u01E8" +
        "\x07\f\x02\x02\u01B4\u01E8\x07\r\x02\x02\u01B5\u01E8\x07\x0E\x02\x02\u01B6" +
        "\u01E8\x07\x0F\x02\x02\u01B7\u01E8\x07\x10\x02\x02\u01B8\u01E8\x07\x11" +
        "\x02\x02\u01B9\u01E8\x07\x19\x02\x02\u01BA\u01E8\x07\x12\x02\x02\u01BB" +
        "\u01E8\x07\x13\x02\x02\u01BC\u01E8\x07\x14\x02\x02\u01BD\u01E8\x07\x15" +
        "\x02\x02\u01BE\u01E8\x07\x16\x02\x02\u01BF\u01E8\x07\x18\x02\x02\u01C0" +
        "\u01E8\x07\x1A\x02\x02\u01C1\u01E8\x07\x1B\x02\x02\u01C2\u01E8\x07,\x02" +
        "\x02\u01C3\u01E8\x07\x1C\x02\x02\u01C4\u01E8\x07\x1D\x02\x02\u01C5\u01E8" +
        "\x07\x1E\x02\x02\u01C6\u01E8\x07\x1F\x02\x02\u01C7\u01E8\x07 \x02\x02" +
        "\u01C8\u01E8\x07!\x02\x02\u01C9\u01E8\x07\"\x02\x02\u01CA\u01E8\x07#\x02" +
        "\x02\u01CB\u01E8\x07$\x02\x02\u01CC\u01E8\x07%\x02\x02\u01CD\u01E8\x07" +
        "&\x02\x02\u01CE\u01E8\x07\'\x02\x02\u01CF\u01E8\x07(\x02\x02\u01D0\u01E8" +
        "\x07)\x02\x02\u01D1\u01E8\x07*\x02\x02\u01D2\u01E8\x07+\x02\x02\u01D3" +
        "\u01E8\x07-\x02\x02\u01D4\u01E8\x07.\x02\x02\u01D5\u01E8\x07/\x02\x02" +
        "\u01D6\u01E8\x070\x02\x02\u01D7\u01E8\x071\x02\x02\u01D8\u01E8\x072\x02" +
        "\x02\u01D9\u01E8\x073\x02\x02\u01DA\u01E8\x075\x02\x02\u01DB\u01E8\x07" +
        "8\x02\x02\u01DC\u01E8\x07:\x02\x02\u01DD\u01E8\x074\x02\x02\u01DE\u01E8" +
        "\x076\x02\x02\u01DF\u01E8\x077\x02\x02\u01E0\u01E8\x07;\x02\x02\u01E1" +
        "\u01E8\x07=\x02\x02\u01E2\u01E8\x07>\x02\x02\u01E3\u01E8\x07?\x02\x02" +
        "\u01E4\u01E8\x07@\x02\x02\u01E5\u01E8\x07A\x02\x02\u01E6\u01E8\x07B\x02" +
        "\x02\u01E7\u01AD\x03\x02\x02\x02\u01E7\u01AE\x03\x02\x02\x02\u01E7\u01AF" +
        "\x03\x02\x02\x02\u01E7\u01B0\x03\x02\x02\x02\u01E7\u01B1\x03\x02\x02\x02" +
        "\u01E7\u01B2\x03\x02\x02\x02\u01E7\u01B3\x03\x02\x02\x02\u01E7\u01B4\x03" +
        "\x02\x02\x02\u01E7\u01B5\x03\x02\x02\x02\u01E7\u01B6\x03\x02\x02\x02\u01E7" +
        "\u01B7\x03\x02\x02\x02\u01E7\u01B8\x03\x02\x02\x02\u01E7\u01B9\x03\x02" +
        "\x02\x02\u01E7\u01BA\x03\x02\x02\x02\u01E7\u01BB\x03\x02\x02\x02\u01E7" +
        "\u01BC\x03\x02\x02\x02\u01E7\u01BD\x03\x02\x02\x02\u01E7\u01BE\x03\x02" +
        "\x02\x02\u01E7\u01BF\x03\x02\x02\x02\u01E7\u01C0\x03\x02\x02\x02\u01E7" +
        "\u01C1\x03\x02\x02\x02\u01E7\u01C2\x03\x02\x02\x02\u01E7\u01C3\x03\x02" +
        "\x02\x02\u01E7\u01C4\x03\x02\x02\x02\u01E7\u01C5\x03\x02\x02\x02\u01E7" +
        "\u01C6\x03\x02\x02\x02\u01E7\u01C7\x03\x02\x02\x02\u01E7\u01C8\x03\x02" +
        "\x02\x02\u01E7\u01C9\x03\x02\x02\x02\u01E7\u01CA\x03\x02\x02\x02\u01E7" +
        "\u01CB\x03\x02\x02\x02\u01E7\u01CC\x03\x02\x02\x02\u01E7\u01CD\x03\x02" +
        "\x02\x02\u01E7\u01CE\x03\x02\x02\x02\u01E7\u01CF\x03\x02\x02\x02\u01E7" +
        "\u01D0\x03\x02\x02\x02\u01E7\u01D1\x03\x02\x02\x02\u01E7\u01D2\x03\x02" +
        "\x02\x02\u01E7\u01D3\x03\x02\x02\x02\u01E7\u01D4\x03\x02\x02\x02\u01E7" +
        "\u01D5\x03\x02\x02\x02\u01E7\u01D6\x03\x02\x02\x02\u01E7\u01D7\x03\x02" +
        "\x02\x02\u01E7\u01D8\x03\x02\x02\x02\u01E7\u01D9\x03\x02\x02\x02\u01E7" +
        "\u01DA\x03\x02\x02\x02\u01E7\u01DB\x03\x02\x02\x02\u01E7\u01DC\x03\x02" +
        "\x02\x02\u01E7\u01DD\x03\x02\x02\x02\u01E7\u01DE\x03\x02\x02\x02\u01E7" +
        "\u01DF\x03\x02\x02\x02\u01E7\u01E0\x03\x02\x02\x02\u01E7\u01E1\x03\x02" +
        "\x02\x02\u01E7\u01E2\x03\x02\x02\x02\u01E7\u01E3\x03\x02\x02\x02\u01E7" +
        "\u01E4\x03\x02\x02\x02\u01E7\u01E5\x03\x02\x02\x02\u01E7\u01E6\x03\x02" +
        "\x02\x02\u01E8?\x03\x02\x02\x02\u01E9\u01EA\t\x05\x02\x02\u01EAA\x03\x02" +
        "\x02\x02\u01EB\u01EE\x05T+\x02\u01EC\u01EE\x05V,\x02\u01ED\u01EB\x03\x02" +
        "\x02\x02\u01ED\u01EC\x03\x02\x02\x02\u01EEC\x03\x02\x02\x02\u01EF\u01F0" +
        "\x05V,\x02\u01F0E\x03\x02\x02\x02\u01F1\u01F2\x05V,\x02\u01F2G\x03\x02" +
        "\x02\x02\u01F3\u01F4\x05F$\x02\u01F4I\x03\x02\x02\x02\u01F5\u01F6\x05" +
        "F$\x02\u01F6K\x03\x02\x02\x02\u01F7\u01F8\x05F$\x02\u01F8M\x03\x02\x02" +
        "\x02\u01F9\u01FA\x05J&\x02\u01FAO\x03\x02\x02\x02\u01FB\u01FC\x05F$\x02" +
        "\u01FCQ\x03\x02\x02\x02\u01FD\u01FE\x05F$\x02\u01FES\x03\x02\x02\x02\u01FF" +
        "\u0200\x07J\x02\x02\u0200U\x03\x02\x02\x02\u0201\u0202\x07K\x02\x02\u0202" +
        "W\x03\x02\x02\x02$[h\x91\x98\x9D\xAF\xBB\xC8\xDA\xE3\xEB\xF3\xF8\u0101" +
        "\u0104\u010D\u0110\u0116\u0118\u0122\u0125\u0137\u013C\u014B\u015E\u0164" +
        "\u016E\u0175\u017F\u018A\u018C\u0196\u01E7\u01ED";
    return FusionTablesSqlParser;
}(Parser_1.Parser));
exports.FusionTablesSqlParser = FusionTablesSqlParser;
var FusionTablesSqlContext = /** @class */ (function (_super) {
    __extends(FusionTablesSqlContext, _super);
    function FusionTablesSqlContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FusionTablesSqlContext.prototype.sql_stmt = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Sql_stmtContext);
        }
        else {
            return this.getRuleContext(i, Sql_stmtContext);
        }
    };
    Object.defineProperty(FusionTablesSqlContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_fusionTablesSql; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FusionTablesSqlContext.prototype.enterRule = function (listener) {
        if (listener.enterFusionTablesSql) {
            listener.enterFusionTablesSql(this);
        }
    };
    // @Override
    FusionTablesSqlContext.prototype.exitRule = function (listener) {
        if (listener.exitFusionTablesSql) {
            listener.exitFusionTablesSql(this);
        }
    };
    // @Override
    FusionTablesSqlContext.prototype.accept = function (visitor) {
        if (visitor.visitFusionTablesSql) {
            return visitor.visitFusionTablesSql(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FusionTablesSqlContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FusionTablesSqlContext = FusionTablesSqlContext;
var Sql_stmtContext = /** @class */ (function (_super) {
    __extends(Sql_stmtContext, _super);
    function Sql_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Sql_stmtContext.prototype.alter_table_stmt = function () {
        return this.tryGetRuleContext(0, Alter_table_stmtContext);
    };
    Sql_stmtContext.prototype.select_stmt = function () {
        return this.tryGetRuleContext(0, Select_stmtContext);
    };
    Sql_stmtContext.prototype.create_view_stmt = function () {
        return this.tryGetRuleContext(0, Create_view_stmtContext);
    };
    Sql_stmtContext.prototype.create_table_as_select_stmt = function () {
        return this.tryGetRuleContext(0, Create_table_as_select_stmtContext);
    };
    Sql_stmtContext.prototype.delete_stmt = function () {
        return this.tryGetRuleContext(0, Delete_stmtContext);
    };
    Sql_stmtContext.prototype.drop_table_stmt = function () {
        return this.tryGetRuleContext(0, Drop_table_stmtContext);
    };
    Sql_stmtContext.prototype.insert_stmt = function () {
        return this.tryGetRuleContext(0, Insert_stmtContext);
    };
    Sql_stmtContext.prototype.update_stmt = function () {
        return this.tryGetRuleContext(0, Update_stmtContext);
    };
    Sql_stmtContext.prototype.describe_stmt = function () {
        return this.tryGetRuleContext(0, Describe_stmtContext);
    };
    Sql_stmtContext.prototype.show_tables_stmt = function () {
        return this.tryGetRuleContext(0, Show_tables_stmtContext);
    };
    Object.defineProperty(Sql_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_sql_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Sql_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterSql_stmt) {
            listener.enterSql_stmt(this);
        }
    };
    // @Override
    Sql_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitSql_stmt) {
            listener.exitSql_stmt(this);
        }
    };
    // @Override
    Sql_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitSql_stmt) {
            return visitor.visitSql_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Sql_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Sql_stmtContext = Sql_stmtContext;
var Table_name_in_ddlContext = /** @class */ (function (_super) {
    __extends(Table_name_in_ddlContext, _super);
    function Table_name_in_ddlContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Table_name_in_ddlContext.prototype.table_name = function () {
        return this.getRuleContext(0, Table_nameContext);
    };
    Object.defineProperty(Table_name_in_ddlContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_table_name_in_ddl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Table_name_in_ddlContext.prototype.enterRule = function (listener) {
        if (listener.enterTable_name_in_ddl) {
            listener.enterTable_name_in_ddl(this);
        }
    };
    // @Override
    Table_name_in_ddlContext.prototype.exitRule = function (listener) {
        if (listener.exitTable_name_in_ddl) {
            listener.exitTable_name_in_ddl(this);
        }
    };
    // @Override
    Table_name_in_ddlContext.prototype.accept = function (visitor) {
        if (visitor.visitTable_name_in_ddl) {
            return visitor.visitTable_name_in_ddl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Table_name_in_ddlContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Table_name_in_ddlContext = Table_name_in_ddlContext;
var Table_name_in_dmlContext = /** @class */ (function (_super) {
    __extends(Table_name_in_dmlContext, _super);
    function Table_name_in_dmlContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Table_name_in_dmlContext.prototype.table_name = function () {
        return this.getRuleContext(0, Table_nameContext);
    };
    Object.defineProperty(Table_name_in_dmlContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_table_name_in_dml; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Table_name_in_dmlContext.prototype.enterRule = function (listener) {
        if (listener.enterTable_name_in_dml) {
            listener.enterTable_name_in_dml(this);
        }
    };
    // @Override
    Table_name_in_dmlContext.prototype.exitRule = function (listener) {
        if (listener.exitTable_name_in_dml) {
            listener.exitTable_name_in_dml(this);
        }
    };
    // @Override
    Table_name_in_dmlContext.prototype.accept = function (visitor) {
        if (visitor.visitTable_name_in_dml) {
            return visitor.visitTable_name_in_dml(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Table_name_in_dmlContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Table_name_in_dmlContext = Table_name_in_dmlContext;
var Create_table_as_select_stmtContext = /** @class */ (function (_super) {
    __extends(Create_table_as_select_stmtContext, _super);
    function Create_table_as_select_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Create_table_as_select_stmtContext.prototype.K_CREATE = function () { return this.getToken(FusionTablesSqlParser.K_CREATE, 0); };
    Create_table_as_select_stmtContext.prototype.K_TABLE = function () { return this.getToken(FusionTablesSqlParser.K_TABLE, 0); };
    Create_table_as_select_stmtContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Create_table_as_select_stmtContext.prototype.K_AS = function () { return this.getToken(FusionTablesSqlParser.K_AS, 0); };
    Create_table_as_select_stmtContext.prototype.K_SELECT = function () { return this.getToken(FusionTablesSqlParser.K_SELECT, 0); };
    Create_table_as_select_stmtContext.prototype.K_FROM = function () { return this.getToken(FusionTablesSqlParser.K_FROM, 0); };
    Create_table_as_select_stmtContext.prototype.table_name_in_ddl = function () {
        return this.getRuleContext(0, Table_name_in_ddlContext);
    };
    Object.defineProperty(Create_table_as_select_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_create_table_as_select_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Create_table_as_select_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterCreate_table_as_select_stmt) {
            listener.enterCreate_table_as_select_stmt(this);
        }
    };
    // @Override
    Create_table_as_select_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitCreate_table_as_select_stmt) {
            listener.exitCreate_table_as_select_stmt(this);
        }
    };
    // @Override
    Create_table_as_select_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitCreate_table_as_select_stmt) {
            return visitor.visitCreate_table_as_select_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Create_table_as_select_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Create_table_as_select_stmtContext = Create_table_as_select_stmtContext;
var Describe_stmtContext = /** @class */ (function (_super) {
    __extends(Describe_stmtContext, _super);
    function Describe_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Describe_stmtContext.prototype.K_DESCRIBE = function () { return this.getToken(FusionTablesSqlParser.K_DESCRIBE, 0); };
    Describe_stmtContext.prototype.table_name_in_ddl = function () {
        return this.getRuleContext(0, Table_name_in_ddlContext);
    };
    Object.defineProperty(Describe_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_describe_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Describe_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterDescribe_stmt) {
            listener.enterDescribe_stmt(this);
        }
    };
    // @Override
    Describe_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitDescribe_stmt) {
            listener.exitDescribe_stmt(this);
        }
    };
    // @Override
    Describe_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitDescribe_stmt) {
            return visitor.visitDescribe_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Describe_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Describe_stmtContext = Describe_stmtContext;
var Show_tables_stmtContext = /** @class */ (function (_super) {
    __extends(Show_tables_stmtContext, _super);
    function Show_tables_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Show_tables_stmtContext.prototype.K_SHOW = function () { return this.getToken(FusionTablesSqlParser.K_SHOW, 0); };
    Show_tables_stmtContext.prototype.K_TABLES = function () { return this.getToken(FusionTablesSqlParser.K_TABLES, 0); };
    Object.defineProperty(Show_tables_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_show_tables_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Show_tables_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterShow_tables_stmt) {
            listener.enterShow_tables_stmt(this);
        }
    };
    // @Override
    Show_tables_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitShow_tables_stmt) {
            listener.exitShow_tables_stmt(this);
        }
    };
    // @Override
    Show_tables_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitShow_tables_stmt) {
            return visitor.visitShow_tables_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Show_tables_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Show_tables_stmtContext = Show_tables_stmtContext;
var Alter_table_stmtContext = /** @class */ (function (_super) {
    __extends(Alter_table_stmtContext, _super);
    function Alter_table_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Alter_table_stmtContext.prototype.K_ALTER = function () { return this.getToken(FusionTablesSqlParser.K_ALTER, 0); };
    Alter_table_stmtContext.prototype.K_TABLE = function () { return this.getToken(FusionTablesSqlParser.K_TABLE, 0); };
    Alter_table_stmtContext.prototype.table_name_in_ddl = function () {
        return this.getRuleContext(0, Table_name_in_ddlContext);
    };
    Alter_table_stmtContext.prototype.K_RENAME = function () { return this.tryGetToken(FusionTablesSqlParser.K_RENAME, 0); };
    Alter_table_stmtContext.prototype.K_TO = function () { return this.tryGetToken(FusionTablesSqlParser.K_TO, 0); };
    Alter_table_stmtContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(Alter_table_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_alter_table_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Alter_table_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterAlter_table_stmt) {
            listener.enterAlter_table_stmt(this);
        }
    };
    // @Override
    Alter_table_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitAlter_table_stmt) {
            listener.exitAlter_table_stmt(this);
        }
    };
    // @Override
    Alter_table_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitAlter_table_stmt) {
            return visitor.visitAlter_table_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Alter_table_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Alter_table_stmtContext = Alter_table_stmtContext;
var Create_view_stmtContext = /** @class */ (function (_super) {
    __extends(Create_view_stmtContext, _super);
    function Create_view_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Create_view_stmtContext.prototype.K_CREATE = function () { return this.getToken(FusionTablesSqlParser.K_CREATE, 0); };
    Create_view_stmtContext.prototype.K_VIEW = function () { return this.getToken(FusionTablesSqlParser.K_VIEW, 0); };
    Create_view_stmtContext.prototype.view_name = function () {
        return this.getRuleContext(0, View_nameContext);
    };
    Create_view_stmtContext.prototype.K_AS = function () { return this.getToken(FusionTablesSqlParser.K_AS, 0); };
    Create_view_stmtContext.prototype.LPAR = function () { return this.getToken(FusionTablesSqlParser.LPAR, 0); };
    Create_view_stmtContext.prototype.K_SELECT = function () { return this.getToken(FusionTablesSqlParser.K_SELECT, 0); };
    Create_view_stmtContext.prototype.result_column = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Result_columnContext);
        }
        else {
            return this.getRuleContext(i, Result_columnContext);
        }
    };
    Create_view_stmtContext.prototype.K_FROM = function () { return this.getToken(FusionTablesSqlParser.K_FROM, 0); };
    Create_view_stmtContext.prototype.RPAR = function () { return this.getToken(FusionTablesSqlParser.RPAR, 0); };
    Create_view_stmtContext.prototype.table_name_with_alias = function () {
        return this.tryGetRuleContext(0, Table_name_with_aliasContext);
    };
    Create_view_stmtContext.prototype.join_clause = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Join_clauseContext);
        }
        else {
            return this.getRuleContext(i, Join_clauseContext);
        }
    };
    Create_view_stmtContext.prototype.K_WHERE = function () { return this.tryGetToken(FusionTablesSqlParser.K_WHERE, 0); };
    Create_view_stmtContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    Object.defineProperty(Create_view_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_create_view_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Create_view_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterCreate_view_stmt) {
            listener.enterCreate_view_stmt(this);
        }
    };
    // @Override
    Create_view_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitCreate_view_stmt) {
            listener.exitCreate_view_stmt(this);
        }
    };
    // @Override
    Create_view_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitCreate_view_stmt) {
            return visitor.visitCreate_view_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Create_view_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Create_view_stmtContext = Create_view_stmtContext;
var Drop_table_stmtContext = /** @class */ (function (_super) {
    __extends(Drop_table_stmtContext, _super);
    function Drop_table_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Drop_table_stmtContext.prototype.K_DROP = function () { return this.getToken(FusionTablesSqlParser.K_DROP, 0); };
    Drop_table_stmtContext.prototype.K_TABLE = function () { return this.getToken(FusionTablesSqlParser.K_TABLE, 0); };
    Drop_table_stmtContext.prototype.table_name_in_ddl = function () {
        return this.getRuleContext(0, Table_name_in_ddlContext);
    };
    Object.defineProperty(Drop_table_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_drop_table_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Drop_table_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterDrop_table_stmt) {
            listener.enterDrop_table_stmt(this);
        }
    };
    // @Override
    Drop_table_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitDrop_table_stmt) {
            listener.exitDrop_table_stmt(this);
        }
    };
    // @Override
    Drop_table_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitDrop_table_stmt) {
            return visitor.visitDrop_table_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Drop_table_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Drop_table_stmtContext = Drop_table_stmtContext;
var Insert_stmtContext = /** @class */ (function (_super) {
    __extends(Insert_stmtContext, _super);
    function Insert_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Insert_stmtContext.prototype.K_INSERT = function () { return this.getToken(FusionTablesSqlParser.K_INSERT, 0); };
    Insert_stmtContext.prototype.K_INTO = function () { return this.getToken(FusionTablesSqlParser.K_INTO, 0); };
    Insert_stmtContext.prototype.table_name_in_dml = function () {
        return this.getRuleContext(0, Table_name_in_dmlContext);
    };
    Insert_stmtContext.prototype.LPAR = function (i) {
        if (i === undefined) {
            return this.getTokens(FusionTablesSqlParser.LPAR);
        }
        else {
            return this.getToken(FusionTablesSqlParser.LPAR, i);
        }
    };
    Insert_stmtContext.prototype.column_name_in_dml = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_name_in_dmlContext);
        }
        else {
            return this.getRuleContext(i, Column_name_in_dmlContext);
        }
    };
    Insert_stmtContext.prototype.RPAR = function (i) {
        if (i === undefined) {
            return this.getTokens(FusionTablesSqlParser.RPAR);
        }
        else {
            return this.getToken(FusionTablesSqlParser.RPAR, i);
        }
    };
    Insert_stmtContext.prototype.K_VALUES = function () { return this.tryGetToken(FusionTablesSqlParser.K_VALUES, 0); };
    Insert_stmtContext.prototype.literal = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LiteralContext);
        }
        else {
            return this.getRuleContext(i, LiteralContext);
        }
    };
    Object.defineProperty(Insert_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_insert_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Insert_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterInsert_stmt) {
            listener.enterInsert_stmt(this);
        }
    };
    // @Override
    Insert_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitInsert_stmt) {
            listener.exitInsert_stmt(this);
        }
    };
    // @Override
    Insert_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitInsert_stmt) {
            return visitor.visitInsert_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Insert_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Insert_stmtContext = Insert_stmtContext;
var Update_stmtContext = /** @class */ (function (_super) {
    __extends(Update_stmtContext, _super);
    function Update_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Update_stmtContext.prototype.K_UPDATE = function () { return this.getToken(FusionTablesSqlParser.K_UPDATE, 0); };
    Update_stmtContext.prototype.table_name_in_dml = function () {
        return this.getRuleContext(0, Table_name_in_dmlContext);
    };
    Update_stmtContext.prototype.K_SET = function () { return this.getToken(FusionTablesSqlParser.K_SET, 0); };
    Update_stmtContext.prototype.column_assignment = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_assignmentContext);
        }
        else {
            return this.getRuleContext(i, Column_assignmentContext);
        }
    };
    Update_stmtContext.prototype.K_WHERE = function () { return this.getToken(FusionTablesSqlParser.K_WHERE, 0); };
    Update_stmtContext.prototype.eq_comparison = function () {
        return this.getRuleContext(0, Eq_comparisonContext);
    };
    Object.defineProperty(Update_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_update_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Update_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterUpdate_stmt) {
            listener.enterUpdate_stmt(this);
        }
    };
    // @Override
    Update_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitUpdate_stmt) {
            listener.exitUpdate_stmt(this);
        }
    };
    // @Override
    Update_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitUpdate_stmt) {
            return visitor.visitUpdate_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Update_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Update_stmtContext = Update_stmtContext;
var Column_assignmentContext = /** @class */ (function (_super) {
    __extends(Column_assignmentContext, _super);
    function Column_assignmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Column_assignmentContext.prototype.column_name_in_dml = function () {
        return this.getRuleContext(0, Column_name_in_dmlContext);
    };
    Column_assignmentContext.prototype.EQ = function () { return this.getToken(FusionTablesSqlParser.EQ, 0); };
    Column_assignmentContext.prototype.literal = function () {
        return this.getRuleContext(0, LiteralContext);
    };
    Object.defineProperty(Column_assignmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_column_assignment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Column_assignmentContext.prototype.enterRule = function (listener) {
        if (listener.enterColumn_assignment) {
            listener.enterColumn_assignment(this);
        }
    };
    // @Override
    Column_assignmentContext.prototype.exitRule = function (listener) {
        if (listener.exitColumn_assignment) {
            listener.exitColumn_assignment(this);
        }
    };
    // @Override
    Column_assignmentContext.prototype.accept = function (visitor) {
        if (visitor.visitColumn_assignment) {
            return visitor.visitColumn_assignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Column_assignmentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Column_assignmentContext = Column_assignmentContext;
var Delete_stmtContext = /** @class */ (function (_super) {
    __extends(Delete_stmtContext, _super);
    function Delete_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Delete_stmtContext.prototype.K_DELETE = function () { return this.getToken(FusionTablesSqlParser.K_DELETE, 0); };
    Delete_stmtContext.prototype.K_FROM = function () { return this.getToken(FusionTablesSqlParser.K_FROM, 0); };
    Delete_stmtContext.prototype.table_name_in_dml = function () {
        return this.getRuleContext(0, Table_name_in_dmlContext);
    };
    Delete_stmtContext.prototype.K_WHERE = function () { return this.tryGetToken(FusionTablesSqlParser.K_WHERE, 0); };
    Delete_stmtContext.prototype.column_name_in_dml = function () {
        return this.tryGetRuleContext(0, Column_name_in_dmlContext);
    };
    Delete_stmtContext.prototype.EQ = function () { return this.tryGetToken(FusionTablesSqlParser.EQ, 0); };
    Delete_stmtContext.prototype.literal = function () {
        return this.tryGetRuleContext(0, LiteralContext);
    };
    Object.defineProperty(Delete_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_delete_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Delete_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterDelete_stmt) {
            listener.enterDelete_stmt(this);
        }
    };
    // @Override
    Delete_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitDelete_stmt) {
            listener.exitDelete_stmt(this);
        }
    };
    // @Override
    Delete_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitDelete_stmt) {
            return visitor.visitDelete_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Delete_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Delete_stmtContext = Delete_stmtContext;
var Eq_comparisonContext = /** @class */ (function (_super) {
    __extends(Eq_comparisonContext, _super);
    function Eq_comparisonContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Eq_comparisonContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Eq_comparisonContext.prototype.EQ = function () { return this.getToken(FusionTablesSqlParser.EQ, 0); };
    Eq_comparisonContext.prototype.string_literal = function () {
        return this.getRuleContext(0, String_literalContext);
    };
    Object.defineProperty(Eq_comparisonContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_eq_comparison; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Eq_comparisonContext.prototype.enterRule = function (listener) {
        if (listener.enterEq_comparison) {
            listener.enterEq_comparison(this);
        }
    };
    // @Override
    Eq_comparisonContext.prototype.exitRule = function (listener) {
        if (listener.exitEq_comparison) {
            listener.exitEq_comparison(this);
        }
    };
    // @Override
    Eq_comparisonContext.prototype.accept = function (visitor) {
        if (visitor.visitEq_comparison) {
            return visitor.visitEq_comparison(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Eq_comparisonContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Eq_comparisonContext = Eq_comparisonContext;
var Table_name_with_aliasContext = /** @class */ (function (_super) {
    __extends(Table_name_with_aliasContext, _super);
    function Table_name_with_aliasContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Table_name_with_aliasContext.prototype.table_name = function () {
        return this.getRuleContext(0, Table_nameContext);
    };
    Table_name_with_aliasContext.prototype.K_AS = function () { return this.tryGetToken(FusionTablesSqlParser.K_AS, 0); };
    Table_name_with_aliasContext.prototype.table_alias = function () {
        return this.tryGetRuleContext(0, Table_aliasContext);
    };
    Object.defineProperty(Table_name_with_aliasContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_table_name_with_alias; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Table_name_with_aliasContext.prototype.enterRule = function (listener) {
        if (listener.enterTable_name_with_alias) {
            listener.enterTable_name_with_alias(this);
        }
    };
    // @Override
    Table_name_with_aliasContext.prototype.exitRule = function (listener) {
        if (listener.exitTable_name_with_alias) {
            listener.exitTable_name_with_alias(this);
        }
    };
    // @Override
    Table_name_with_aliasContext.prototype.accept = function (visitor) {
        if (visitor.visitTable_name_with_alias) {
            return visitor.visitTable_name_with_alias(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Table_name_with_aliasContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Table_name_with_aliasContext = Table_name_with_aliasContext;
var Select_stmtContext = /** @class */ (function (_super) {
    __extends(Select_stmtContext, _super);
    function Select_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Select_stmtContext.prototype.K_SELECT = function () { return this.getToken(FusionTablesSqlParser.K_SELECT, 0); };
    Select_stmtContext.prototype.result_column = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Result_columnContext);
        }
        else {
            return this.getRuleContext(i, Result_columnContext);
        }
    };
    Select_stmtContext.prototype.K_FROM = function () { return this.getToken(FusionTablesSqlParser.K_FROM, 0); };
    Select_stmtContext.prototype.table_name_with_alias = function () {
        return this.getRuleContext(0, Table_name_with_aliasContext);
    };
    Select_stmtContext.prototype.join_clause = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Join_clauseContext);
        }
        else {
            return this.getRuleContext(i, Join_clauseContext);
        }
    };
    Select_stmtContext.prototype.K_WHERE = function () { return this.tryGetToken(FusionTablesSqlParser.K_WHERE, 0); };
    Select_stmtContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    Select_stmtContext.prototype.K_GROUP = function () { return this.tryGetToken(FusionTablesSqlParser.K_GROUP, 0); };
    Select_stmtContext.prototype.K_BY = function (i) {
        if (i === undefined) {
            return this.getTokens(FusionTablesSqlParser.K_BY);
        }
        else {
            return this.getToken(FusionTablesSqlParser.K_BY, i);
        }
    };
    Select_stmtContext.prototype.qualified_column_name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Qualified_column_nameContext);
        }
        else {
            return this.getRuleContext(i, Qualified_column_nameContext);
        }
    };
    Select_stmtContext.prototype.K_ORDER = function () { return this.tryGetToken(FusionTablesSqlParser.K_ORDER, 0); };
    Select_stmtContext.prototype.ordering_term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Ordering_termContext);
        }
        else {
            return this.getRuleContext(i, Ordering_termContext);
        }
    };
    Select_stmtContext.prototype.K_OFFSET = function () { return this.tryGetToken(FusionTablesSqlParser.K_OFFSET, 0); };
    Select_stmtContext.prototype.numeric_literal = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Numeric_literalContext);
        }
        else {
            return this.getRuleContext(i, Numeric_literalContext);
        }
    };
    Select_stmtContext.prototype.K_LIMIT = function () { return this.tryGetToken(FusionTablesSqlParser.K_LIMIT, 0); };
    Object.defineProperty(Select_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_select_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Select_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterSelect_stmt) {
            listener.enterSelect_stmt(this);
        }
    };
    // @Override
    Select_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitSelect_stmt) {
            listener.exitSelect_stmt(this);
        }
    };
    // @Override
    Select_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitSelect_stmt) {
            return visitor.visitSelect_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Select_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Select_stmtContext = Select_stmtContext;
var Ordering_termContext = /** @class */ (function (_super) {
    __extends(Ordering_termContext, _super);
    function Ordering_termContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ordering_termContext.prototype.qualified_column_name = function () {
        return this.tryGetRuleContext(0, Qualified_column_nameContext);
    };
    Ordering_termContext.prototype.K_ST_DISTANCE = function () { return this.tryGetToken(FusionTablesSqlParser.K_ST_DISTANCE, 0); };
    Ordering_termContext.prototype.LPAR = function () { return this.tryGetToken(FusionTablesSqlParser.LPAR, 0); };
    Ordering_termContext.prototype.coordinate = function () {
        return this.tryGetRuleContext(0, CoordinateContext);
    };
    Ordering_termContext.prototype.RPAR = function () { return this.tryGetToken(FusionTablesSqlParser.RPAR, 0); };
    Ordering_termContext.prototype.K_ASC = function () { return this.tryGetToken(FusionTablesSqlParser.K_ASC, 0); };
    Ordering_termContext.prototype.K_DESC = function () { return this.tryGetToken(FusionTablesSqlParser.K_DESC, 0); };
    Object.defineProperty(Ordering_termContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_ordering_term; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ordering_termContext.prototype.enterRule = function (listener) {
        if (listener.enterOrdering_term) {
            listener.enterOrdering_term(this);
        }
    };
    // @Override
    Ordering_termContext.prototype.exitRule = function (listener) {
        if (listener.exitOrdering_term) {
            listener.exitOrdering_term(this);
        }
    };
    // @Override
    Ordering_termContext.prototype.accept = function (visitor) {
        if (visitor.visitOrdering_term) {
            return visitor.visitOrdering_term(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ordering_termContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ordering_termContext = Ordering_termContext;
var Join_clauseContext = /** @class */ (function (_super) {
    __extends(Join_clauseContext, _super);
    function Join_clauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Join_clauseContext.prototype.K_LEFT = function () { return this.tryGetToken(FusionTablesSqlParser.K_LEFT, 0); };
    Join_clauseContext.prototype.K_OUTER = function () { return this.tryGetToken(FusionTablesSqlParser.K_OUTER, 0); };
    Join_clauseContext.prototype.K_JOIN = function () { return this.tryGetToken(FusionTablesSqlParser.K_JOIN, 0); };
    Join_clauseContext.prototype.table_name_with_alias = function () {
        return this.tryGetRuleContext(0, Table_name_with_aliasContext);
    };
    Join_clauseContext.prototype.K_ON = function () { return this.tryGetToken(FusionTablesSqlParser.K_ON, 0); };
    Join_clauseContext.prototype.qualified_column_name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Qualified_column_nameContext);
        }
        else {
            return this.getRuleContext(i, Qualified_column_nameContext);
        }
    };
    Join_clauseContext.prototype.EQ = function () { return this.tryGetToken(FusionTablesSqlParser.EQ, 0); };
    Object.defineProperty(Join_clauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_join_clause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Join_clauseContext.prototype.enterRule = function (listener) {
        if (listener.enterJoin_clause) {
            listener.enterJoin_clause(this);
        }
    };
    // @Override
    Join_clauseContext.prototype.exitRule = function (listener) {
        if (listener.exitJoin_clause) {
            listener.exitJoin_clause(this);
        }
    };
    // @Override
    Join_clauseContext.prototype.accept = function (visitor) {
        if (visitor.visitJoin_clause) {
            return visitor.visitJoin_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Join_clauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Join_clauseContext = Join_clauseContext;
var Result_columnContext = /** @class */ (function (_super) {
    __extends(Result_columnContext, _super);
    function Result_columnContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Result_columnContext.prototype.table_name = function () {
        return this.tryGetRuleContext(0, Table_nameContext);
    };
    Result_columnContext.prototype.qualified_column_name = function () {
        return this.tryGetRuleContext(0, Qualified_column_nameContext);
    };
    Result_columnContext.prototype.aggregate_exp = function () {
        return this.tryGetRuleContext(0, Aggregate_expContext);
    };
    Object.defineProperty(Result_columnContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_result_column; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Result_columnContext.prototype.enterRule = function (listener) {
        if (listener.enterResult_column) {
            listener.enterResult_column(this);
        }
    };
    // @Override
    Result_columnContext.prototype.exitRule = function (listener) {
        if (listener.exitResult_column) {
            listener.exitResult_column(this);
        }
    };
    // @Override
    Result_columnContext.prototype.accept = function (visitor) {
        if (visitor.visitResult_column) {
            return visitor.visitResult_column(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Result_columnContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Result_columnContext = Result_columnContext;
var Qualified_column_nameContext = /** @class */ (function (_super) {
    __extends(Qualified_column_nameContext, _super);
    function Qualified_column_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Qualified_column_nameContext.prototype.column_name = function () {
        return this.getRuleContext(0, Column_nameContext);
    };
    Qualified_column_nameContext.prototype.table_name = function () {
        return this.tryGetRuleContext(0, Table_nameContext);
    };
    Object.defineProperty(Qualified_column_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_qualified_column_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Qualified_column_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterQualified_column_name) {
            listener.enterQualified_column_name(this);
        }
    };
    // @Override
    Qualified_column_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitQualified_column_name) {
            listener.exitQualified_column_name(this);
        }
    };
    // @Override
    Qualified_column_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitQualified_column_name) {
            return visitor.visitQualified_column_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Qualified_column_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Qualified_column_nameContext = Qualified_column_nameContext;
var Aggregate_expContext = /** @class */ (function (_super) {
    __extends(Aggregate_expContext, _super);
    function Aggregate_expContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Aggregate_expContext.prototype.LPAR = function () { return this.getToken(FusionTablesSqlParser.LPAR, 0); };
    Aggregate_expContext.prototype.qualified_column_name = function () {
        return this.getRuleContext(0, Qualified_column_nameContext);
    };
    Aggregate_expContext.prototype.RPAR = function () { return this.getToken(FusionTablesSqlParser.RPAR, 0); };
    Aggregate_expContext.prototype.K_SUM = function () { return this.tryGetToken(FusionTablesSqlParser.K_SUM, 0); };
    Aggregate_expContext.prototype.K_COUNT = function () { return this.tryGetToken(FusionTablesSqlParser.K_COUNT, 0); };
    Aggregate_expContext.prototype.K_AVERAGE = function () { return this.tryGetToken(FusionTablesSqlParser.K_AVERAGE, 0); };
    Aggregate_expContext.prototype.K_MAXIMUM = function () { return this.tryGetToken(FusionTablesSqlParser.K_MAXIMUM, 0); };
    Aggregate_expContext.prototype.K_MINIMUM = function () { return this.tryGetToken(FusionTablesSqlParser.K_MINIMUM, 0); };
    Object.defineProperty(Aggregate_expContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_aggregate_exp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Aggregate_expContext.prototype.enterRule = function (listener) {
        if (listener.enterAggregate_exp) {
            listener.enterAggregate_exp(this);
        }
    };
    // @Override
    Aggregate_expContext.prototype.exitRule = function (listener) {
        if (listener.exitAggregate_exp) {
            listener.exitAggregate_exp(this);
        }
    };
    // @Override
    Aggregate_expContext.prototype.accept = function (visitor) {
        if (visitor.visitAggregate_exp) {
            return visitor.visitAggregate_exp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Aggregate_expContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Aggregate_expContext = Aggregate_expContext;
var ExprContext = /** @class */ (function (_super) {
    __extends(ExprContext, _super);
    function ExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExprContext.prototype.column_name_beginning_expr = function () {
        return this.tryGetRuleContext(0, Column_name_beginning_exprContext);
    };
    ExprContext.prototype.literal = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LiteralContext);
        }
        else {
            return this.getRuleContext(i, LiteralContext);
        }
    };
    ExprContext.prototype.operator = function () {
        return this.tryGetRuleContext(0, OperatorContext);
    };
    ExprContext.prototype.and_or_or = function () {
        return this.tryGetRuleContext(0, And_or_orContext);
    };
    ExprContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    ExprContext.prototype.string_literal = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(String_literalContext);
        }
        else {
            return this.getRuleContext(i, String_literalContext);
        }
    };
    ExprContext.prototype.K_LIKE = function () { return this.tryGetToken(FusionTablesSqlParser.K_LIKE, 0); };
    ExprContext.prototype.K_MATCHES = function () { return this.tryGetToken(FusionTablesSqlParser.K_MATCHES, 0); };
    ExprContext.prototype.K_STARTS = function () { return this.tryGetToken(FusionTablesSqlParser.K_STARTS, 0); };
    ExprContext.prototype.K_WITH = function () { return this.tryGetToken(FusionTablesSqlParser.K_WITH, 0); };
    ExprContext.prototype.K_ENDS = function () { return this.tryGetToken(FusionTablesSqlParser.K_ENDS, 0); };
    ExprContext.prototype.K_CONTAINS = function () { return this.tryGetToken(FusionTablesSqlParser.K_CONTAINS, 0); };
    ExprContext.prototype.K_IGNORING = function () { return this.tryGetToken(FusionTablesSqlParser.K_IGNORING, 0); };
    ExprContext.prototype.K_CASE = function () { return this.tryGetToken(FusionTablesSqlParser.K_CASE, 0); };
    ExprContext.prototype.K_DOES = function () { return this.tryGetToken(FusionTablesSqlParser.K_DOES, 0); };
    ExprContext.prototype.K_NOT = function () { return this.tryGetToken(FusionTablesSqlParser.K_NOT, 0); };
    ExprContext.prototype.K_CONTAIN = function () { return this.tryGetToken(FusionTablesSqlParser.K_CONTAIN, 0); };
    ExprContext.prototype.K_EQUAL = function () { return this.tryGetToken(FusionTablesSqlParser.K_EQUAL, 0); };
    ExprContext.prototype.K_TO = function () { return this.tryGetToken(FusionTablesSqlParser.K_TO, 0); };
    ExprContext.prototype.K_IN = function () { return this.tryGetToken(FusionTablesSqlParser.K_IN, 0); };
    ExprContext.prototype.LPAR = function () { return this.tryGetToken(FusionTablesSqlParser.LPAR, 0); };
    ExprContext.prototype.RPAR = function () { return this.tryGetToken(FusionTablesSqlParser.RPAR, 0); };
    ExprContext.prototype.K_BETWEEN = function () { return this.tryGetToken(FusionTablesSqlParser.K_BETWEEN, 0); };
    ExprContext.prototype.K_AND = function () { return this.tryGetToken(FusionTablesSqlParser.K_AND, 0); };
    ExprContext.prototype.K_ST_INTERSECTS = function () { return this.tryGetToken(FusionTablesSqlParser.K_ST_INTERSECTS, 0); };
    ExprContext.prototype.qualified_column_name = function () {
        return this.tryGetRuleContext(0, Qualified_column_nameContext);
    };
    ExprContext.prototype.geometry = function () {
        return this.tryGetRuleContext(0, GeometryContext);
    };
    Object.defineProperty(ExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_expr; },
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
var Column_name_beginning_exprContext = /** @class */ (function (_super) {
    __extends(Column_name_beginning_exprContext, _super);
    function Column_name_beginning_exprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Column_name_beginning_exprContext.prototype.qualified_column_name = function () {
        return this.getRuleContext(0, Qualified_column_nameContext);
    };
    Object.defineProperty(Column_name_beginning_exprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_column_name_beginning_expr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Column_name_beginning_exprContext.prototype.enterRule = function (listener) {
        if (listener.enterColumn_name_beginning_expr) {
            listener.enterColumn_name_beginning_expr(this);
        }
    };
    // @Override
    Column_name_beginning_exprContext.prototype.exitRule = function (listener) {
        if (listener.exitColumn_name_beginning_expr) {
            listener.exitColumn_name_beginning_expr(this);
        }
    };
    // @Override
    Column_name_beginning_exprContext.prototype.accept = function (visitor) {
        if (visitor.visitColumn_name_beginning_expr) {
            return visitor.visitColumn_name_beginning_expr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Column_name_beginning_exprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Column_name_beginning_exprContext = Column_name_beginning_exprContext;
var Column_name_in_dmlContext = /** @class */ (function (_super) {
    __extends(Column_name_in_dmlContext, _super);
    function Column_name_in_dmlContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Column_name_in_dmlContext.prototype.column_name = function () {
        return this.getRuleContext(0, Column_nameContext);
    };
    Object.defineProperty(Column_name_in_dmlContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_column_name_in_dml; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Column_name_in_dmlContext.prototype.enterRule = function (listener) {
        if (listener.enterColumn_name_in_dml) {
            listener.enterColumn_name_in_dml(this);
        }
    };
    // @Override
    Column_name_in_dmlContext.prototype.exitRule = function (listener) {
        if (listener.exitColumn_name_in_dml) {
            listener.exitColumn_name_in_dml(this);
        }
    };
    // @Override
    Column_name_in_dmlContext.prototype.accept = function (visitor) {
        if (visitor.visitColumn_name_in_dml) {
            return visitor.visitColumn_name_in_dml(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Column_name_in_dmlContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Column_name_in_dmlContext = Column_name_in_dmlContext;
var And_or_orContext = /** @class */ (function (_super) {
    __extends(And_or_orContext, _super);
    function And_or_orContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    And_or_orContext.prototype.K_AND = function () { return this.tryGetToken(FusionTablesSqlParser.K_AND, 0); };
    And_or_orContext.prototype.K_OR = function () { return this.tryGetToken(FusionTablesSqlParser.K_OR, 0); };
    Object.defineProperty(And_or_orContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_and_or_or; },
        enumerable: true,
        configurable: true
    });
    // @Override
    And_or_orContext.prototype.enterRule = function (listener) {
        if (listener.enterAnd_or_or) {
            listener.enterAnd_or_or(this);
        }
    };
    // @Override
    And_or_orContext.prototype.exitRule = function (listener) {
        if (listener.exitAnd_or_or) {
            listener.exitAnd_or_or(this);
        }
    };
    // @Override
    And_or_orContext.prototype.accept = function (visitor) {
        if (visitor.visitAnd_or_or) {
            return visitor.visitAnd_or_or(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return And_or_orContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.And_or_orContext = And_or_orContext;
var GeometryContext = /** @class */ (function (_super) {
    __extends(GeometryContext, _super);
    function GeometryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GeometryContext.prototype.circle = function () {
        return this.tryGetRuleContext(0, CircleContext);
    };
    GeometryContext.prototype.rectangle = function () {
        return this.tryGetRuleContext(0, RectangleContext);
    };
    Object.defineProperty(GeometryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_geometry; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GeometryContext.prototype.enterRule = function (listener) {
        if (listener.enterGeometry) {
            listener.enterGeometry(this);
        }
    };
    // @Override
    GeometryContext.prototype.exitRule = function (listener) {
        if (listener.exitGeometry) {
            listener.exitGeometry(this);
        }
    };
    // @Override
    GeometryContext.prototype.accept = function (visitor) {
        if (visitor.visitGeometry) {
            return visitor.visitGeometry(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GeometryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GeometryContext = GeometryContext;
var CircleContext = /** @class */ (function (_super) {
    __extends(CircleContext, _super);
    function CircleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CircleContext.prototype.K_CIRCLE = function () { return this.getToken(FusionTablesSqlParser.K_CIRCLE, 0); };
    CircleContext.prototype.LPAR = function () { return this.getToken(FusionTablesSqlParser.LPAR, 0); };
    CircleContext.prototype.coordinate = function () {
        return this.getRuleContext(0, CoordinateContext);
    };
    CircleContext.prototype.numeric_literal = function () {
        return this.getRuleContext(0, Numeric_literalContext);
    };
    CircleContext.prototype.RPAR = function () { return this.getToken(FusionTablesSqlParser.RPAR, 0); };
    Object.defineProperty(CircleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_circle; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CircleContext.prototype.enterRule = function (listener) {
        if (listener.enterCircle) {
            listener.enterCircle(this);
        }
    };
    // @Override
    CircleContext.prototype.exitRule = function (listener) {
        if (listener.exitCircle) {
            listener.exitCircle(this);
        }
    };
    // @Override
    CircleContext.prototype.accept = function (visitor) {
        if (visitor.visitCircle) {
            return visitor.visitCircle(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CircleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CircleContext = CircleContext;
var RectangleContext = /** @class */ (function (_super) {
    __extends(RectangleContext, _super);
    function RectangleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RectangleContext.prototype.K_RECTANGLE = function () { return this.getToken(FusionTablesSqlParser.K_RECTANGLE, 0); };
    RectangleContext.prototype.LPAR = function () { return this.getToken(FusionTablesSqlParser.LPAR, 0); };
    RectangleContext.prototype.coordinate = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CoordinateContext);
        }
        else {
            return this.getRuleContext(i, CoordinateContext);
        }
    };
    RectangleContext.prototype.RPAR = function () { return this.getToken(FusionTablesSqlParser.RPAR, 0); };
    Object.defineProperty(RectangleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_rectangle; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RectangleContext.prototype.enterRule = function (listener) {
        if (listener.enterRectangle) {
            listener.enterRectangle(this);
        }
    };
    // @Override
    RectangleContext.prototype.exitRule = function (listener) {
        if (listener.exitRectangle) {
            listener.exitRectangle(this);
        }
    };
    // @Override
    RectangleContext.prototype.accept = function (visitor) {
        if (visitor.visitRectangle) {
            return visitor.visitRectangle(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RectangleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RectangleContext = RectangleContext;
var CoordinateContext = /** @class */ (function (_super) {
    __extends(CoordinateContext, _super);
    function CoordinateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CoordinateContext.prototype.K_LATLNG = function () { return this.getToken(FusionTablesSqlParser.K_LATLNG, 0); };
    CoordinateContext.prototype.LPAR = function () { return this.getToken(FusionTablesSqlParser.LPAR, 0); };
    CoordinateContext.prototype.numeric_literal = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Numeric_literalContext);
        }
        else {
            return this.getRuleContext(i, Numeric_literalContext);
        }
    };
    CoordinateContext.prototype.RPAR = function () { return this.getToken(FusionTablesSqlParser.RPAR, 0); };
    Object.defineProperty(CoordinateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_coordinate; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CoordinateContext.prototype.enterRule = function (listener) {
        if (listener.enterCoordinate) {
            listener.enterCoordinate(this);
        }
    };
    // @Override
    CoordinateContext.prototype.exitRule = function (listener) {
        if (listener.exitCoordinate) {
            listener.exitCoordinate(this);
        }
    };
    // @Override
    CoordinateContext.prototype.accept = function (visitor) {
        if (visitor.visitCoordinate) {
            return visitor.visitCoordinate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CoordinateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CoordinateContext = CoordinateContext;
var KeywordContext = /** @class */ (function (_super) {
    __extends(KeywordContext, _super);
    function KeywordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeywordContext.prototype.K_ALTER = function () { return this.tryGetToken(FusionTablesSqlParser.K_ALTER, 0); };
    KeywordContext.prototype.K_AND = function () { return this.tryGetToken(FusionTablesSqlParser.K_AND, 0); };
    KeywordContext.prototype.K_OR = function () { return this.tryGetToken(FusionTablesSqlParser.K_OR, 0); };
    KeywordContext.prototype.K_AS = function () { return this.tryGetToken(FusionTablesSqlParser.K_AS, 0); };
    KeywordContext.prototype.K_ASC = function () { return this.tryGetToken(FusionTablesSqlParser.K_ASC, 0); };
    KeywordContext.prototype.K_AVERAGE = function () { return this.tryGetToken(FusionTablesSqlParser.K_AVERAGE, 0); };
    KeywordContext.prototype.K_BY = function () { return this.tryGetToken(FusionTablesSqlParser.K_BY, 0); };
    KeywordContext.prototype.K_BETWEEN = function () { return this.tryGetToken(FusionTablesSqlParser.K_BETWEEN, 0); };
    KeywordContext.prototype.K_CASE = function () { return this.tryGetToken(FusionTablesSqlParser.K_CASE, 0); };
    KeywordContext.prototype.K_CIRCLE = function () { return this.tryGetToken(FusionTablesSqlParser.K_CIRCLE, 0); };
    KeywordContext.prototype.K_COLUMN = function () { return this.tryGetToken(FusionTablesSqlParser.K_COLUMN, 0); };
    KeywordContext.prototype.K_CONTAIN = function () { return this.tryGetToken(FusionTablesSqlParser.K_CONTAIN, 0); };
    KeywordContext.prototype.K_CONTAINS = function () { return this.tryGetToken(FusionTablesSqlParser.K_CONTAINS, 0); };
    KeywordContext.prototype.K_COUNT = function () { return this.tryGetToken(FusionTablesSqlParser.K_COUNT, 0); };
    KeywordContext.prototype.K_CREATE = function () { return this.tryGetToken(FusionTablesSqlParser.K_CREATE, 0); };
    KeywordContext.prototype.K_DELETE = function () { return this.tryGetToken(FusionTablesSqlParser.K_DELETE, 0); };
    KeywordContext.prototype.K_DESC = function () { return this.tryGetToken(FusionTablesSqlParser.K_DESC, 0); };
    KeywordContext.prototype.K_DOES = function () { return this.tryGetToken(FusionTablesSqlParser.K_DOES, 0); };
    KeywordContext.prototype.K_DROP = function () { return this.tryGetToken(FusionTablesSqlParser.K_DROP, 0); };
    KeywordContext.prototype.K_ENDS = function () { return this.tryGetToken(FusionTablesSqlParser.K_ENDS, 0); };
    KeywordContext.prototype.K_EQUAL = function () { return this.tryGetToken(FusionTablesSqlParser.K_EQUAL, 0); };
    KeywordContext.prototype.K_FROM = function () { return this.tryGetToken(FusionTablesSqlParser.K_FROM, 0); };
    KeywordContext.prototype.K_GROUP = function () { return this.tryGetToken(FusionTablesSqlParser.K_GROUP, 0); };
    KeywordContext.prototype.K_HAVING = function () { return this.tryGetToken(FusionTablesSqlParser.K_HAVING, 0); };
    KeywordContext.prototype.K_IGNORING = function () { return this.tryGetToken(FusionTablesSqlParser.K_IGNORING, 0); };
    KeywordContext.prototype.K_IN = function () { return this.tryGetToken(FusionTablesSqlParser.K_IN, 0); };
    KeywordContext.prototype.K_INSERT = function () { return this.tryGetToken(FusionTablesSqlParser.K_INSERT, 0); };
    KeywordContext.prototype.K_INTO = function () { return this.tryGetToken(FusionTablesSqlParser.K_INTO, 0); };
    KeywordContext.prototype.K_JOIN = function () { return this.tryGetToken(FusionTablesSqlParser.K_JOIN, 0); };
    KeywordContext.prototype.K_LATLNG = function () { return this.tryGetToken(FusionTablesSqlParser.K_LATLNG, 0); };
    KeywordContext.prototype.K_LEFT = function () { return this.tryGetToken(FusionTablesSqlParser.K_LEFT, 0); };
    KeywordContext.prototype.K_LIKE = function () { return this.tryGetToken(FusionTablesSqlParser.K_LIKE, 0); };
    KeywordContext.prototype.K_LIMIT = function () { return this.tryGetToken(FusionTablesSqlParser.K_LIMIT, 0); };
    KeywordContext.prototype.K_MATCHES = function () { return this.tryGetToken(FusionTablesSqlParser.K_MATCHES, 0); };
    KeywordContext.prototype.K_MAXIMUM = function () { return this.tryGetToken(FusionTablesSqlParser.K_MAXIMUM, 0); };
    KeywordContext.prototype.K_MINIMUM = function () { return this.tryGetToken(FusionTablesSqlParser.K_MINIMUM, 0); };
    KeywordContext.prototype.K_NOT = function () { return this.tryGetToken(FusionTablesSqlParser.K_NOT, 0); };
    KeywordContext.prototype.K_OF = function () { return this.tryGetToken(FusionTablesSqlParser.K_OF, 0); };
    KeywordContext.prototype.K_OFFSET = function () { return this.tryGetToken(FusionTablesSqlParser.K_OFFSET, 0); };
    KeywordContext.prototype.K_ON = function () { return this.tryGetToken(FusionTablesSqlParser.K_ON, 0); };
    KeywordContext.prototype.K_ORDER = function () { return this.tryGetToken(FusionTablesSqlParser.K_ORDER, 0); };
    KeywordContext.prototype.K_OUTER = function () { return this.tryGetToken(FusionTablesSqlParser.K_OUTER, 0); };
    KeywordContext.prototype.K_RECTANGLE = function () { return this.tryGetToken(FusionTablesSqlParser.K_RECTANGLE, 0); };
    KeywordContext.prototype.K_RENAME = function () { return this.tryGetToken(FusionTablesSqlParser.K_RENAME, 0); };
    KeywordContext.prototype.K_SELECT = function () { return this.tryGetToken(FusionTablesSqlParser.K_SELECT, 0); };
    KeywordContext.prototype.K_SET = function () { return this.tryGetToken(FusionTablesSqlParser.K_SET, 0); };
    KeywordContext.prototype.K_STARTS = function () { return this.tryGetToken(FusionTablesSqlParser.K_STARTS, 0); };
    KeywordContext.prototype.K_ST_DISTANCE = function () { return this.tryGetToken(FusionTablesSqlParser.K_ST_DISTANCE, 0); };
    KeywordContext.prototype.K_ST_INTERSECTS = function () { return this.tryGetToken(FusionTablesSqlParser.K_ST_INTERSECTS, 0); };
    KeywordContext.prototype.K_SUM = function () { return this.tryGetToken(FusionTablesSqlParser.K_SUM, 0); };
    KeywordContext.prototype.K_TABLE = function () { return this.tryGetToken(FusionTablesSqlParser.K_TABLE, 0); };
    KeywordContext.prototype.K_TO = function () { return this.tryGetToken(FusionTablesSqlParser.K_TO, 0); };
    KeywordContext.prototype.K_UPDATE = function () { return this.tryGetToken(FusionTablesSqlParser.K_UPDATE, 0); };
    KeywordContext.prototype.K_VALUES = function () { return this.tryGetToken(FusionTablesSqlParser.K_VALUES, 0); };
    KeywordContext.prototype.K_VIEW = function () { return this.tryGetToken(FusionTablesSqlParser.K_VIEW, 0); };
    KeywordContext.prototype.K_WHERE = function () { return this.tryGetToken(FusionTablesSqlParser.K_WHERE, 0); };
    KeywordContext.prototype.K_WITH = function () { return this.tryGetToken(FusionTablesSqlParser.K_WITH, 0); };
    Object.defineProperty(KeywordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_keyword; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeywordContext.prototype.enterRule = function (listener) {
        if (listener.enterKeyword) {
            listener.enterKeyword(this);
        }
    };
    // @Override
    KeywordContext.prototype.exitRule = function (listener) {
        if (listener.exitKeyword) {
            listener.exitKeyword(this);
        }
    };
    // @Override
    KeywordContext.prototype.accept = function (visitor) {
        if (visitor.visitKeyword) {
            return visitor.visitKeyword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeywordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeywordContext = KeywordContext;
var OperatorContext = /** @class */ (function (_super) {
    __extends(OperatorContext, _super);
    function OperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OperatorContext.prototype.LT = function () { return this.tryGetToken(FusionTablesSqlParser.LT, 0); };
    OperatorContext.prototype.LT_EQ = function () { return this.tryGetToken(FusionTablesSqlParser.LT_EQ, 0); };
    OperatorContext.prototype.GT = function () { return this.tryGetToken(FusionTablesSqlParser.GT, 0); };
    OperatorContext.prototype.GT_EQ = function () { return this.tryGetToken(FusionTablesSqlParser.GT_EQ, 0); };
    OperatorContext.prototype.EQ = function () { return this.tryGetToken(FusionTablesSqlParser.EQ, 0); };
    Object.defineProperty(OperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_operator; },
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
var LiteralContext = /** @class */ (function (_super) {
    __extends(LiteralContext, _super);
    function LiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LiteralContext.prototype.numeric_literal = function () {
        return this.tryGetRuleContext(0, Numeric_literalContext);
    };
    LiteralContext.prototype.string_literal = function () {
        return this.tryGetRuleContext(0, String_literalContext);
    };
    Object.defineProperty(LiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_literal; },
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
var Error_messageContext = /** @class */ (function (_super) {
    __extends(Error_messageContext, _super);
    function Error_messageContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Error_messageContext.prototype.string_literal = function () {
        return this.getRuleContext(0, String_literalContext);
    };
    Object.defineProperty(Error_messageContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_error_message; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Error_messageContext.prototype.enterRule = function (listener) {
        if (listener.enterError_message) {
            listener.enterError_message(this);
        }
    };
    // @Override
    Error_messageContext.prototype.exitRule = function (listener) {
        if (listener.exitError_message) {
            listener.exitError_message(this);
        }
    };
    // @Override
    Error_messageContext.prototype.accept = function (visitor) {
        if (visitor.visitError_message) {
            return visitor.visitError_message(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Error_messageContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Error_messageContext = Error_messageContext;
var IdentifierContext = /** @class */ (function (_super) {
    __extends(IdentifierContext, _super);
    function IdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierContext.prototype.string_literal = function () {
        return this.getRuleContext(0, String_literalContext);
    };
    Object.defineProperty(IdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_identifier; },
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
var Column_aliasContext = /** @class */ (function (_super) {
    __extends(Column_aliasContext, _super);
    function Column_aliasContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Column_aliasContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(Column_aliasContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_column_alias; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Column_aliasContext.prototype.enterRule = function (listener) {
        if (listener.enterColumn_alias) {
            listener.enterColumn_alias(this);
        }
    };
    // @Override
    Column_aliasContext.prototype.exitRule = function (listener) {
        if (listener.exitColumn_alias) {
            listener.exitColumn_alias(this);
        }
    };
    // @Override
    Column_aliasContext.prototype.accept = function (visitor) {
        if (visitor.visitColumn_alias) {
            return visitor.visitColumn_alias(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Column_aliasContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Column_aliasContext = Column_aliasContext;
var Table_nameContext = /** @class */ (function (_super) {
    __extends(Table_nameContext, _super);
    function Table_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Table_nameContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(Table_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_table_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Table_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterTable_name) {
            listener.enterTable_name(this);
        }
    };
    // @Override
    Table_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitTable_name) {
            listener.exitTable_name(this);
        }
    };
    // @Override
    Table_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitTable_name) {
            return visitor.visitTable_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Table_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Table_nameContext = Table_nameContext;
var Column_nameContext = /** @class */ (function (_super) {
    __extends(Column_nameContext, _super);
    function Column_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Column_nameContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(Column_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_column_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Column_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterColumn_name) {
            listener.enterColumn_name(this);
        }
    };
    // @Override
    Column_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitColumn_name) {
            listener.exitColumn_name(this);
        }
    };
    // @Override
    Column_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitColumn_name) {
            return visitor.visitColumn_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Column_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Column_nameContext = Column_nameContext;
var New_table_nameContext = /** @class */ (function (_super) {
    __extends(New_table_nameContext, _super);
    function New_table_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    New_table_nameContext.prototype.table_name = function () {
        return this.getRuleContext(0, Table_nameContext);
    };
    Object.defineProperty(New_table_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_new_table_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    New_table_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterNew_table_name) {
            listener.enterNew_table_name(this);
        }
    };
    // @Override
    New_table_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitNew_table_name) {
            listener.exitNew_table_name(this);
        }
    };
    // @Override
    New_table_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitNew_table_name) {
            return visitor.visitNew_table_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return New_table_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.New_table_nameContext = New_table_nameContext;
var View_nameContext = /** @class */ (function (_super) {
    __extends(View_nameContext, _super);
    function View_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    View_nameContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(View_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_view_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    View_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterView_name) {
            listener.enterView_name(this);
        }
    };
    // @Override
    View_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitView_name) {
            listener.exitView_name(this);
        }
    };
    // @Override
    View_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitView_name) {
            return visitor.visitView_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return View_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.View_nameContext = View_nameContext;
var Table_aliasContext = /** @class */ (function (_super) {
    __extends(Table_aliasContext, _super);
    function Table_aliasContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Table_aliasContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(Table_aliasContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_table_alias; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Table_aliasContext.prototype.enterRule = function (listener) {
        if (listener.enterTable_alias) {
            listener.enterTable_alias(this);
        }
    };
    // @Override
    Table_aliasContext.prototype.exitRule = function (listener) {
        if (listener.exitTable_alias) {
            listener.exitTable_alias(this);
        }
    };
    // @Override
    Table_aliasContext.prototype.accept = function (visitor) {
        if (visitor.visitTable_alias) {
            return visitor.visitTable_alias(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Table_aliasContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Table_aliasContext = Table_aliasContext;
var Numeric_literalContext = /** @class */ (function (_super) {
    __extends(Numeric_literalContext, _super);
    function Numeric_literalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Numeric_literalContext.prototype.NUMERIC_LITERAL = function () { return this.getToken(FusionTablesSqlParser.NUMERIC_LITERAL, 0); };
    Object.defineProperty(Numeric_literalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_numeric_literal; },
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
var String_literalContext = /** @class */ (function (_super) {
    __extends(String_literalContext, _super);
    function String_literalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    String_literalContext.prototype.STRING_LITERAL = function () { return this.getToken(FusionTablesSqlParser.STRING_LITERAL, 0); };
    Object.defineProperty(String_literalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return FusionTablesSqlParser.RULE_string_literal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    String_literalContext.prototype.enterRule = function (listener) {
        if (listener.enterString_literal) {
            listener.enterString_literal(this);
        }
    };
    // @Override
    String_literalContext.prototype.exitRule = function (listener) {
        if (listener.exitString_literal) {
            listener.exitString_literal(this);
        }
    };
    // @Override
    String_literalContext.prototype.accept = function (visitor) {
        if (visitor.visitString_literal) {
            return visitor.visitString_literal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return String_literalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.String_literalContext = String_literalContext;
