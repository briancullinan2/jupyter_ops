"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/sql/sqlite/SQLite.g4 by ANTLR 4.7.3-SNAPSHOT
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
var SQLiteParser = /** @class */ (function (_super) {
    __extends(SQLiteParser, _super);
    function SQLiteParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(SQLiteParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(SQLiteParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return SQLiteParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SQLiteParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "SQLite.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SQLiteParser.prototype, "ruleNames", {
        // @Override
        get: function () { return SQLiteParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SQLiteParser.prototype, "serializedATN", {
        // @Override
        get: function () { return SQLiteParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    SQLiteParser.prototype.parse = function () {
        var _localctx = new ParseContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, SQLiteParser.RULE_parse);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 168;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SQLiteParser.SCOL) | (1 << SQLiteParser.K_ALTER) | (1 << SQLiteParser.K_ANALYZE))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SQLiteParser.K_ATTACH - 35)) | (1 << (SQLiteParser.K_BEGIN - 35)) | (1 << (SQLiteParser.K_COMMIT - 35)) | (1 << (SQLiteParser.K_CREATE - 35)) | (1 << (SQLiteParser.K_DELETE - 35)) | (1 << (SQLiteParser.K_DETACH - 35)) | (1 << (SQLiteParser.K_DROP - 35)) | (1 << (SQLiteParser.K_END - 35)))) !== 0) || _la === SQLiteParser.K_EXPLAIN || _la === SQLiteParser.K_INSERT || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (SQLiteParser.K_PRAGMA - 112)) | (1 << (SQLiteParser.K_REINDEX - 112)) | (1 << (SQLiteParser.K_RELEASE - 112)) | (1 << (SQLiteParser.K_REPLACE - 112)) | (1 << (SQLiteParser.K_ROLLBACK - 112)) | (1 << (SQLiteParser.K_SAVEPOINT - 112)) | (1 << (SQLiteParser.K_SELECT - 112)) | (1 << (SQLiteParser.K_UPDATE - 112)) | (1 << (SQLiteParser.K_VACUUM - 112)) | (1 << (SQLiteParser.K_VALUES - 112)))) !== 0) || _la === SQLiteParser.K_WITH || _la === SQLiteParser.UNEXPECTED_CHAR) {
                    {
                        this.state = 166;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case SQLiteParser.SCOL:
                            case SQLiteParser.K_ALTER:
                            case SQLiteParser.K_ANALYZE:
                            case SQLiteParser.K_ATTACH:
                            case SQLiteParser.K_BEGIN:
                            case SQLiteParser.K_COMMIT:
                            case SQLiteParser.K_CREATE:
                            case SQLiteParser.K_DELETE:
                            case SQLiteParser.K_DETACH:
                            case SQLiteParser.K_DROP:
                            case SQLiteParser.K_END:
                            case SQLiteParser.K_EXPLAIN:
                            case SQLiteParser.K_INSERT:
                            case SQLiteParser.K_PRAGMA:
                            case SQLiteParser.K_REINDEX:
                            case SQLiteParser.K_RELEASE:
                            case SQLiteParser.K_REPLACE:
                            case SQLiteParser.K_ROLLBACK:
                            case SQLiteParser.K_SAVEPOINT:
                            case SQLiteParser.K_SELECT:
                            case SQLiteParser.K_UPDATE:
                            case SQLiteParser.K_VACUUM:
                            case SQLiteParser.K_VALUES:
                            case SQLiteParser.K_WITH:
                                {
                                    this.state = 164;
                                    this.sql_stmt_list();
                                }
                                break;
                            case SQLiteParser.UNEXPECTED_CHAR:
                                {
                                    this.state = 165;
                                    this.error();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 170;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 171;
                this.match(SQLiteParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.error = function () {
        var _localctx = new ErrorContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, SQLiteParser.RULE_error);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 173;
                _localctx._UNEXPECTED_CHAR = this.match(SQLiteParser.UNEXPECTED_CHAR);
                throw new RuntimeException("UNEXPECTED_CHAR=" + (_localctx._UNEXPECTED_CHAR != null ? _localctx._UNEXPECTED_CHAR.text : undefined));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.sql_stmt_list = function () {
        var _localctx = new Sql_stmt_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, SQLiteParser.RULE_sql_stmt_list);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 179;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SQLiteParser.SCOL) {
                    {
                        {
                            this.state = 176;
                            this.match(SQLiteParser.SCOL);
                        }
                    }
                    this.state = 181;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 182;
                this.sql_stmt();
                this.state = 191;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 184;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                do {
                                    {
                                        {
                                            this.state = 183;
                                            this.match(SQLiteParser.SCOL);
                                        }
                                    }
                                    this.state = 186;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                } while (_la === SQLiteParser.SCOL);
                                this.state = 188;
                                this.sql_stmt();
                            }
                        }
                    }
                    this.state = 193;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                }
                this.state = 197;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 194;
                                this.match(SQLiteParser.SCOL);
                            }
                        }
                    }
                    this.state = 199;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
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
    SQLiteParser.prototype.sql_stmt = function () {
        var _localctx = new Sql_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, SQLiteParser.RULE_sql_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 205;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_EXPLAIN) {
                    {
                        this.state = 200;
                        this.match(SQLiteParser.K_EXPLAIN);
                        this.state = 203;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.K_QUERY) {
                            {
                                this.state = 201;
                                this.match(SQLiteParser.K_QUERY);
                                this.state = 202;
                                this.match(SQLiteParser.K_PLAN);
                            }
                        }
                    }
                }
                this.state = 237;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                    case 1:
                        {
                            this.state = 207;
                            this.alter_table_stmt();
                        }
                        break;
                    case 2:
                        {
                            this.state = 208;
                            this.analyze_stmt();
                        }
                        break;
                    case 3:
                        {
                            this.state = 209;
                            this.attach_stmt();
                        }
                        break;
                    case 4:
                        {
                            this.state = 210;
                            this.begin_stmt();
                        }
                        break;
                    case 5:
                        {
                            this.state = 211;
                            this.commit_stmt();
                        }
                        break;
                    case 6:
                        {
                            this.state = 212;
                            this.compound_select_stmt();
                        }
                        break;
                    case 7:
                        {
                            this.state = 213;
                            this.create_index_stmt();
                        }
                        break;
                    case 8:
                        {
                            this.state = 214;
                            this.create_table_stmt();
                        }
                        break;
                    case 9:
                        {
                            this.state = 215;
                            this.create_trigger_stmt();
                        }
                        break;
                    case 10:
                        {
                            this.state = 216;
                            this.create_view_stmt();
                        }
                        break;
                    case 11:
                        {
                            this.state = 217;
                            this.create_virtual_table_stmt();
                        }
                        break;
                    case 12:
                        {
                            this.state = 218;
                            this.delete_stmt();
                        }
                        break;
                    case 13:
                        {
                            this.state = 219;
                            this.delete_stmt_limited();
                        }
                        break;
                    case 14:
                        {
                            this.state = 220;
                            this.detach_stmt();
                        }
                        break;
                    case 15:
                        {
                            this.state = 221;
                            this.drop_index_stmt();
                        }
                        break;
                    case 16:
                        {
                            this.state = 222;
                            this.drop_table_stmt();
                        }
                        break;
                    case 17:
                        {
                            this.state = 223;
                            this.drop_trigger_stmt();
                        }
                        break;
                    case 18:
                        {
                            this.state = 224;
                            this.drop_view_stmt();
                        }
                        break;
                    case 19:
                        {
                            this.state = 225;
                            this.factored_select_stmt();
                        }
                        break;
                    case 20:
                        {
                            this.state = 226;
                            this.insert_stmt();
                        }
                        break;
                    case 21:
                        {
                            this.state = 227;
                            this.pragma_stmt();
                        }
                        break;
                    case 22:
                        {
                            this.state = 228;
                            this.reindex_stmt();
                        }
                        break;
                    case 23:
                        {
                            this.state = 229;
                            this.release_stmt();
                        }
                        break;
                    case 24:
                        {
                            this.state = 230;
                            this.rollback_stmt();
                        }
                        break;
                    case 25:
                        {
                            this.state = 231;
                            this.savepoint_stmt();
                        }
                        break;
                    case 26:
                        {
                            this.state = 232;
                            this.simple_select_stmt();
                        }
                        break;
                    case 27:
                        {
                            this.state = 233;
                            this.select_stmt();
                        }
                        break;
                    case 28:
                        {
                            this.state = 234;
                            this.update_stmt();
                        }
                        break;
                    case 29:
                        {
                            this.state = 235;
                            this.update_stmt_limited();
                        }
                        break;
                    case 30:
                        {
                            this.state = 236;
                            this.vacuum_stmt();
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
    SQLiteParser.prototype.alter_table_stmt = function () {
        var _localctx = new Alter_table_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, SQLiteParser.RULE_alter_table_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 239;
                this.match(SQLiteParser.K_ALTER);
                this.state = 240;
                this.match(SQLiteParser.K_TABLE);
                this.state = 244;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                    case 1:
                        {
                            this.state = 241;
                            this.database_name();
                            this.state = 242;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 246;
                this.table_name();
                this.state = 255;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SQLiteParser.K_RENAME:
                        {
                            this.state = 247;
                            this.match(SQLiteParser.K_RENAME);
                            this.state = 248;
                            this.match(SQLiteParser.K_TO);
                            this.state = 249;
                            this.new_table_name();
                        }
                        break;
                    case SQLiteParser.K_ADD:
                        {
                            this.state = 250;
                            this.match(SQLiteParser.K_ADD);
                            this.state = 252;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 251;
                                        this.match(SQLiteParser.K_COLUMN);
                                    }
                                    break;
                            }
                            this.state = 254;
                            this.column_def();
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
    SQLiteParser.prototype.analyze_stmt = function () {
        var _localctx = new Analyze_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, SQLiteParser.RULE_analyze_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 257;
                this.match(SQLiteParser.K_ANALYZE);
                this.state = 264;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                    case 1:
                        {
                            this.state = 258;
                            this.database_name();
                        }
                        break;
                    case 2:
                        {
                            this.state = 259;
                            this.table_or_index_name();
                        }
                        break;
                    case 3:
                        {
                            this.state = 260;
                            this.database_name();
                            this.state = 261;
                            this.match(SQLiteParser.DOT);
                            this.state = 262;
                            this.table_or_index_name();
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
    SQLiteParser.prototype.attach_stmt = function () {
        var _localctx = new Attach_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, SQLiteParser.RULE_attach_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 266;
                this.match(SQLiteParser.K_ATTACH);
                this.state = 268;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                    case 1:
                        {
                            this.state = 267;
                            this.match(SQLiteParser.K_DATABASE);
                        }
                        break;
                }
                this.state = 270;
                this.expr(0);
                this.state = 271;
                this.match(SQLiteParser.K_AS);
                this.state = 272;
                this.database_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.begin_stmt = function () {
        var _localctx = new Begin_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, SQLiteParser.RULE_begin_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 274;
                this.match(SQLiteParser.K_BEGIN);
                this.state = 276;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (SQLiteParser.K_DEFERRED - 58)) | (1 << (SQLiteParser.K_EXCLUSIVE - 58)) | (1 << (SQLiteParser.K_IMMEDIATE - 58)))) !== 0)) {
                    {
                        this.state = 275;
                        _la = this._input.LA(1);
                        if (!(((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (SQLiteParser.K_DEFERRED - 58)) | (1 << (SQLiteParser.K_EXCLUSIVE - 58)) | (1 << (SQLiteParser.K_IMMEDIATE - 58)))) !== 0))) {
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
                this.state = 282;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_TRANSACTION) {
                    {
                        this.state = 278;
                        this.match(SQLiteParser.K_TRANSACTION);
                        this.state = 280;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                            case 1:
                                {
                                    this.state = 279;
                                    this.transaction_name();
                                }
                                break;
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
    SQLiteParser.prototype.commit_stmt = function () {
        var _localctx = new Commit_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, SQLiteParser.RULE_commit_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 284;
                _la = this._input.LA(1);
                if (!(_la === SQLiteParser.K_COMMIT || _la === SQLiteParser.K_END)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 289;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_TRANSACTION) {
                    {
                        this.state = 285;
                        this.match(SQLiteParser.K_TRANSACTION);
                        this.state = 287;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                            case 1:
                                {
                                    this.state = 286;
                                    this.transaction_name();
                                }
                                break;
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
    SQLiteParser.prototype.compound_select_stmt = function () {
        var _localctx = new Compound_select_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, SQLiteParser.RULE_compound_select_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 303;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_WITH) {
                    {
                        this.state = 291;
                        this.match(SQLiteParser.K_WITH);
                        this.state = 293;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                            case 1:
                                {
                                    this.state = 292;
                                    this.match(SQLiteParser.K_RECURSIVE);
                                }
                                break;
                        }
                        this.state = 295;
                        this.common_table_expression();
                        this.state = 300;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 296;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 297;
                                    this.common_table_expression();
                                }
                            }
                            this.state = 302;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 305;
                this.select_core();
                this.state = 315;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 312;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case SQLiteParser.K_UNION:
                                    {
                                        this.state = 306;
                                        this.match(SQLiteParser.K_UNION);
                                        this.state = 308;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === SQLiteParser.K_ALL) {
                                            {
                                                this.state = 307;
                                                this.match(SQLiteParser.K_ALL);
                                            }
                                        }
                                    }
                                    break;
                                case SQLiteParser.K_INTERSECT:
                                    {
                                        this.state = 310;
                                        this.match(SQLiteParser.K_INTERSECT);
                                    }
                                    break;
                                case SQLiteParser.K_EXCEPT:
                                    {
                                        this.state = 311;
                                        this.match(SQLiteParser.K_EXCEPT);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 314;
                            this.select_core();
                        }
                    }
                    this.state = 317;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === SQLiteParser.K_EXCEPT || _la === SQLiteParser.K_INTERSECT || _la === SQLiteParser.K_UNION);
                this.state = 329;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_ORDER) {
                    {
                        this.state = 319;
                        this.match(SQLiteParser.K_ORDER);
                        this.state = 320;
                        this.match(SQLiteParser.K_BY);
                        this.state = 321;
                        this.ordering_term();
                        this.state = 326;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 322;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 323;
                                    this.ordering_term();
                                }
                            }
                            this.state = 328;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 337;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_LIMIT) {
                    {
                        this.state = 331;
                        this.match(SQLiteParser.K_LIMIT);
                        this.state = 332;
                        this.expr(0);
                        this.state = 335;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.COMMA || _la === SQLiteParser.K_OFFSET) {
                            {
                                this.state = 333;
                                _la = this._input.LA(1);
                                if (!(_la === SQLiteParser.COMMA || _la === SQLiteParser.K_OFFSET)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 334;
                                this.expr(0);
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
    SQLiteParser.prototype.create_index_stmt = function () {
        var _localctx = new Create_index_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, SQLiteParser.RULE_create_index_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 339;
                this.match(SQLiteParser.K_CREATE);
                this.state = 341;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_UNIQUE) {
                    {
                        this.state = 340;
                        this.match(SQLiteParser.K_UNIQUE);
                    }
                }
                this.state = 343;
                this.match(SQLiteParser.K_INDEX);
                this.state = 347;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
                    case 1:
                        {
                            this.state = 344;
                            this.match(SQLiteParser.K_IF);
                            this.state = 345;
                            this.match(SQLiteParser.K_NOT);
                            this.state = 346;
                            this.match(SQLiteParser.K_EXISTS);
                        }
                        break;
                }
                this.state = 352;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 31, this._ctx)) {
                    case 1:
                        {
                            this.state = 349;
                            this.database_name();
                            this.state = 350;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 354;
                this.index_name();
                this.state = 355;
                this.match(SQLiteParser.K_ON);
                this.state = 356;
                this.table_name();
                this.state = 357;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 358;
                this.indexed_column();
                this.state = 363;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SQLiteParser.COMMA) {
                    {
                        {
                            this.state = 359;
                            this.match(SQLiteParser.COMMA);
                            this.state = 360;
                            this.indexed_column();
                        }
                    }
                    this.state = 365;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 366;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 369;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_WHERE) {
                    {
                        this.state = 367;
                        this.match(SQLiteParser.K_WHERE);
                        this.state = 368;
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
    SQLiteParser.prototype.create_table_stmt = function () {
        var _localctx = new Create_table_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, SQLiteParser.RULE_create_table_stmt);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 371;
                this.match(SQLiteParser.K_CREATE);
                this.state = 373;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_TEMP || _la === SQLiteParser.K_TEMPORARY) {
                    {
                        this.state = 372;
                        _la = this._input.LA(1);
                        if (!(_la === SQLiteParser.K_TEMP || _la === SQLiteParser.K_TEMPORARY)) {
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
                this.state = 375;
                this.match(SQLiteParser.K_TABLE);
                this.state = 379;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
                    case 1:
                        {
                            this.state = 376;
                            this.match(SQLiteParser.K_IF);
                            this.state = 377;
                            this.match(SQLiteParser.K_NOT);
                            this.state = 378;
                            this.match(SQLiteParser.K_EXISTS);
                        }
                        break;
                }
                this.state = 384;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
                    case 1:
                        {
                            this.state = 381;
                            this.database_name();
                            this.state = 382;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 386;
                this.table_name();
                this.state = 410;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SQLiteParser.OPEN_PAR:
                        {
                            this.state = 387;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 388;
                            this.column_def();
                            this.state = 393;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 389;
                                            this.match(SQLiteParser.COMMA);
                                            this.state = 390;
                                            this.column_def();
                                        }
                                    }
                                }
                                this.state = 395;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
                            }
                            this.state = 400;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === SQLiteParser.COMMA) {
                                {
                                    {
                                        this.state = 396;
                                        this.match(SQLiteParser.COMMA);
                                        this.state = 397;
                                        this.table_constraint();
                                    }
                                }
                                this.state = 402;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 403;
                            this.match(SQLiteParser.CLOSE_PAR);
                            this.state = 406;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SQLiteParser.K_WITHOUT) {
                                {
                                    this.state = 404;
                                    this.match(SQLiteParser.K_WITHOUT);
                                    this.state = 405;
                                    this.match(SQLiteParser.IDENTIFIER);
                                }
                            }
                        }
                        break;
                    case SQLiteParser.K_AS:
                        {
                            this.state = 408;
                            this.match(SQLiteParser.K_AS);
                            this.state = 409;
                            this.select_stmt();
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
    SQLiteParser.prototype.create_trigger_stmt = function () {
        var _localctx = new Create_trigger_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, SQLiteParser.RULE_create_trigger_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 412;
                this.match(SQLiteParser.K_CREATE);
                this.state = 414;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_TEMP || _la === SQLiteParser.K_TEMPORARY) {
                    {
                        this.state = 413;
                        _la = this._input.LA(1);
                        if (!(_la === SQLiteParser.K_TEMP || _la === SQLiteParser.K_TEMPORARY)) {
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
                this.state = 416;
                this.match(SQLiteParser.K_TRIGGER);
                this.state = 420;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                    case 1:
                        {
                            this.state = 417;
                            this.match(SQLiteParser.K_IF);
                            this.state = 418;
                            this.match(SQLiteParser.K_NOT);
                            this.state = 419;
                            this.match(SQLiteParser.K_EXISTS);
                        }
                        break;
                }
                this.state = 425;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 43, this._ctx)) {
                    case 1:
                        {
                            this.state = 422;
                            this.database_name();
                            this.state = 423;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 427;
                this.trigger_name();
                this.state = 432;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SQLiteParser.K_BEFORE:
                        {
                            this.state = 428;
                            this.match(SQLiteParser.K_BEFORE);
                        }
                        break;
                    case SQLiteParser.K_AFTER:
                        {
                            this.state = 429;
                            this.match(SQLiteParser.K_AFTER);
                        }
                        break;
                    case SQLiteParser.K_INSTEAD:
                        {
                            this.state = 430;
                            this.match(SQLiteParser.K_INSTEAD);
                            this.state = 431;
                            this.match(SQLiteParser.K_OF);
                        }
                        break;
                    case SQLiteParser.K_DELETE:
                    case SQLiteParser.K_INSERT:
                    case SQLiteParser.K_UPDATE:
                        break;
                    default:
                        break;
                }
                this.state = 448;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SQLiteParser.K_DELETE:
                        {
                            this.state = 434;
                            this.match(SQLiteParser.K_DELETE);
                        }
                        break;
                    case SQLiteParser.K_INSERT:
                        {
                            this.state = 435;
                            this.match(SQLiteParser.K_INSERT);
                        }
                        break;
                    case SQLiteParser.K_UPDATE:
                        {
                            this.state = 436;
                            this.match(SQLiteParser.K_UPDATE);
                            this.state = 446;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SQLiteParser.K_OF) {
                                {
                                    this.state = 437;
                                    this.match(SQLiteParser.K_OF);
                                    this.state = 438;
                                    this.column_name();
                                    this.state = 443;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === SQLiteParser.COMMA) {
                                        {
                                            {
                                                this.state = 439;
                                                this.match(SQLiteParser.COMMA);
                                                this.state = 440;
                                                this.column_name();
                                            }
                                        }
                                        this.state = 445;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 450;
                this.match(SQLiteParser.K_ON);
                this.state = 454;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 48, this._ctx)) {
                    case 1:
                        {
                            this.state = 451;
                            this.database_name();
                            this.state = 452;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 456;
                this.table_name();
                this.state = 460;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_FOR) {
                    {
                        this.state = 457;
                        this.match(SQLiteParser.K_FOR);
                        this.state = 458;
                        this.match(SQLiteParser.K_EACH);
                        this.state = 459;
                        this.match(SQLiteParser.K_ROW);
                    }
                }
                this.state = 464;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_WHEN) {
                    {
                        this.state = 462;
                        this.match(SQLiteParser.K_WHEN);
                        this.state = 463;
                        this.expr(0);
                    }
                }
                this.state = 466;
                this.match(SQLiteParser.K_BEGIN);
                this.state = 475;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 471;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 51, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 467;
                                        this.update_stmt();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 468;
                                        this.insert_stmt();
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 469;
                                        this.delete_stmt();
                                    }
                                    break;
                                case 4:
                                    {
                                        this.state = 470;
                                        this.select_stmt();
                                    }
                                    break;
                            }
                            this.state = 473;
                            this.match(SQLiteParser.SCOL);
                        }
                    }
                    this.state = 477;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === SQLiteParser.K_DELETE || _la === SQLiteParser.K_INSERT || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & ((1 << (SQLiteParser.K_REPLACE - 122)) | (1 << (SQLiteParser.K_SELECT - 122)) | (1 << (SQLiteParser.K_UPDATE - 122)) | (1 << (SQLiteParser.K_VALUES - 122)) | (1 << (SQLiteParser.K_WITH - 122)))) !== 0));
                this.state = 479;
                this.match(SQLiteParser.K_END);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.create_view_stmt = function () {
        var _localctx = new Create_view_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, SQLiteParser.RULE_create_view_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 481;
                this.match(SQLiteParser.K_CREATE);
                this.state = 483;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_TEMP || _la === SQLiteParser.K_TEMPORARY) {
                    {
                        this.state = 482;
                        _la = this._input.LA(1);
                        if (!(_la === SQLiteParser.K_TEMP || _la === SQLiteParser.K_TEMPORARY)) {
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
                this.state = 485;
                this.match(SQLiteParser.K_VIEW);
                this.state = 489;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 54, this._ctx)) {
                    case 1:
                        {
                            this.state = 486;
                            this.match(SQLiteParser.K_IF);
                            this.state = 487;
                            this.match(SQLiteParser.K_NOT);
                            this.state = 488;
                            this.match(SQLiteParser.K_EXISTS);
                        }
                        break;
                }
                this.state = 494;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 55, this._ctx)) {
                    case 1:
                        {
                            this.state = 491;
                            this.database_name();
                            this.state = 492;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 496;
                this.view_name();
                this.state = 497;
                this.match(SQLiteParser.K_AS);
                this.state = 498;
                this.select_stmt();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.create_virtual_table_stmt = function () {
        var _localctx = new Create_virtual_table_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, SQLiteParser.RULE_create_virtual_table_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 500;
                this.match(SQLiteParser.K_CREATE);
                this.state = 501;
                this.match(SQLiteParser.K_VIRTUAL);
                this.state = 502;
                this.match(SQLiteParser.K_TABLE);
                this.state = 506;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 56, this._ctx)) {
                    case 1:
                        {
                            this.state = 503;
                            this.match(SQLiteParser.K_IF);
                            this.state = 504;
                            this.match(SQLiteParser.K_NOT);
                            this.state = 505;
                            this.match(SQLiteParser.K_EXISTS);
                        }
                        break;
                }
                this.state = 511;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 57, this._ctx)) {
                    case 1:
                        {
                            this.state = 508;
                            this.database_name();
                            this.state = 509;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 513;
                this.table_name();
                this.state = 514;
                this.match(SQLiteParser.K_USING);
                this.state = 515;
                this.module_name();
                this.state = 527;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.OPEN_PAR) {
                    {
                        this.state = 516;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 517;
                        this.module_argument();
                        this.state = 522;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 518;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 519;
                                    this.module_argument();
                                }
                            }
                            this.state = 524;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 525;
                        this.match(SQLiteParser.CLOSE_PAR);
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
    SQLiteParser.prototype.delete_stmt = function () {
        var _localctx = new Delete_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, SQLiteParser.RULE_delete_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 530;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_WITH) {
                    {
                        this.state = 529;
                        this.with_clause();
                    }
                }
                this.state = 532;
                this.match(SQLiteParser.K_DELETE);
                this.state = 533;
                this.match(SQLiteParser.K_FROM);
                this.state = 534;
                this.qualified_table_name();
                this.state = 537;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_WHERE) {
                    {
                        this.state = 535;
                        this.match(SQLiteParser.K_WHERE);
                        this.state = 536;
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
    SQLiteParser.prototype.delete_stmt_limited = function () {
        var _localctx = new Delete_stmt_limitedContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, SQLiteParser.RULE_delete_stmt_limited);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 540;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_WITH) {
                    {
                        this.state = 539;
                        this.with_clause();
                    }
                }
                this.state = 542;
                this.match(SQLiteParser.K_DELETE);
                this.state = 543;
                this.match(SQLiteParser.K_FROM);
                this.state = 544;
                this.qualified_table_name();
                this.state = 547;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_WHERE) {
                    {
                        this.state = 545;
                        this.match(SQLiteParser.K_WHERE);
                        this.state = 546;
                        this.expr(0);
                    }
                }
                this.state = 567;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_LIMIT || _la === SQLiteParser.K_ORDER) {
                    {
                        this.state = 559;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.K_ORDER) {
                            {
                                this.state = 549;
                                this.match(SQLiteParser.K_ORDER);
                                this.state = 550;
                                this.match(SQLiteParser.K_BY);
                                this.state = 551;
                                this.ordering_term();
                                this.state = 556;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === SQLiteParser.COMMA) {
                                    {
                                        {
                                            this.state = 552;
                                            this.match(SQLiteParser.COMMA);
                                            this.state = 553;
                                            this.ordering_term();
                                        }
                                    }
                                    this.state = 558;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 561;
                        this.match(SQLiteParser.K_LIMIT);
                        this.state = 562;
                        this.expr(0);
                        this.state = 565;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.COMMA || _la === SQLiteParser.K_OFFSET) {
                            {
                                this.state = 563;
                                _la = this._input.LA(1);
                                if (!(_la === SQLiteParser.COMMA || _la === SQLiteParser.K_OFFSET)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 564;
                                this.expr(0);
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
    SQLiteParser.prototype.detach_stmt = function () {
        var _localctx = new Detach_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, SQLiteParser.RULE_detach_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 569;
                this.match(SQLiteParser.K_DETACH);
                this.state = 571;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 68, this._ctx)) {
                    case 1:
                        {
                            this.state = 570;
                            this.match(SQLiteParser.K_DATABASE);
                        }
                        break;
                }
                this.state = 573;
                this.database_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.drop_index_stmt = function () {
        var _localctx = new Drop_index_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, SQLiteParser.RULE_drop_index_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 575;
                this.match(SQLiteParser.K_DROP);
                this.state = 576;
                this.match(SQLiteParser.K_INDEX);
                this.state = 579;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 69, this._ctx)) {
                    case 1:
                        {
                            this.state = 577;
                            this.match(SQLiteParser.K_IF);
                            this.state = 578;
                            this.match(SQLiteParser.K_EXISTS);
                        }
                        break;
                }
                this.state = 584;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 70, this._ctx)) {
                    case 1:
                        {
                            this.state = 581;
                            this.database_name();
                            this.state = 582;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 586;
                this.index_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.drop_table_stmt = function () {
        var _localctx = new Drop_table_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, SQLiteParser.RULE_drop_table_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 588;
                this.match(SQLiteParser.K_DROP);
                this.state = 589;
                this.match(SQLiteParser.K_TABLE);
                this.state = 592;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 71, this._ctx)) {
                    case 1:
                        {
                            this.state = 590;
                            this.match(SQLiteParser.K_IF);
                            this.state = 591;
                            this.match(SQLiteParser.K_EXISTS);
                        }
                        break;
                }
                this.state = 597;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 72, this._ctx)) {
                    case 1:
                        {
                            this.state = 594;
                            this.database_name();
                            this.state = 595;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 599;
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
    SQLiteParser.prototype.drop_trigger_stmt = function () {
        var _localctx = new Drop_trigger_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, SQLiteParser.RULE_drop_trigger_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 601;
                this.match(SQLiteParser.K_DROP);
                this.state = 602;
                this.match(SQLiteParser.K_TRIGGER);
                this.state = 605;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 73, this._ctx)) {
                    case 1:
                        {
                            this.state = 603;
                            this.match(SQLiteParser.K_IF);
                            this.state = 604;
                            this.match(SQLiteParser.K_EXISTS);
                        }
                        break;
                }
                this.state = 610;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 74, this._ctx)) {
                    case 1:
                        {
                            this.state = 607;
                            this.database_name();
                            this.state = 608;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 612;
                this.trigger_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.drop_view_stmt = function () {
        var _localctx = new Drop_view_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, SQLiteParser.RULE_drop_view_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 614;
                this.match(SQLiteParser.K_DROP);
                this.state = 615;
                this.match(SQLiteParser.K_VIEW);
                this.state = 618;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 75, this._ctx)) {
                    case 1:
                        {
                            this.state = 616;
                            this.match(SQLiteParser.K_IF);
                            this.state = 617;
                            this.match(SQLiteParser.K_EXISTS);
                        }
                        break;
                }
                this.state = 623;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 76, this._ctx)) {
                    case 1:
                        {
                            this.state = 620;
                            this.database_name();
                            this.state = 621;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 625;
                this.view_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.factored_select_stmt = function () {
        var _localctx = new Factored_select_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, SQLiteParser.RULE_factored_select_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 639;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_WITH) {
                    {
                        this.state = 627;
                        this.match(SQLiteParser.K_WITH);
                        this.state = 629;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 77, this._ctx)) {
                            case 1:
                                {
                                    this.state = 628;
                                    this.match(SQLiteParser.K_RECURSIVE);
                                }
                                break;
                        }
                        this.state = 631;
                        this.common_table_expression();
                        this.state = 636;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 632;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 633;
                                    this.common_table_expression();
                                }
                            }
                            this.state = 638;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 641;
                this.select_core();
                this.state = 647;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SQLiteParser.K_EXCEPT || _la === SQLiteParser.K_INTERSECT || _la === SQLiteParser.K_UNION) {
                    {
                        {
                            this.state = 642;
                            this.compound_operator();
                            this.state = 643;
                            this.select_core();
                        }
                    }
                    this.state = 649;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 660;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_ORDER) {
                    {
                        this.state = 650;
                        this.match(SQLiteParser.K_ORDER);
                        this.state = 651;
                        this.match(SQLiteParser.K_BY);
                        this.state = 652;
                        this.ordering_term();
                        this.state = 657;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 653;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 654;
                                    this.ordering_term();
                                }
                            }
                            this.state = 659;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 668;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_LIMIT) {
                    {
                        this.state = 662;
                        this.match(SQLiteParser.K_LIMIT);
                        this.state = 663;
                        this.expr(0);
                        this.state = 666;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.COMMA || _la === SQLiteParser.K_OFFSET) {
                            {
                                this.state = 664;
                                _la = this._input.LA(1);
                                if (!(_la === SQLiteParser.COMMA || _la === SQLiteParser.K_OFFSET)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 665;
                                this.expr(0);
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
    SQLiteParser.prototype.insert_stmt = function () {
        var _localctx = new Insert_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, SQLiteParser.RULE_insert_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 671;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_WITH) {
                    {
                        this.state = 670;
                        this.with_clause();
                    }
                }
                this.state = 690;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 86, this._ctx)) {
                    case 1:
                        {
                            this.state = 673;
                            this.match(SQLiteParser.K_INSERT);
                        }
                        break;
                    case 2:
                        {
                            this.state = 674;
                            this.match(SQLiteParser.K_REPLACE);
                        }
                        break;
                    case 3:
                        {
                            this.state = 675;
                            this.match(SQLiteParser.K_INSERT);
                            this.state = 676;
                            this.match(SQLiteParser.K_OR);
                            this.state = 677;
                            this.match(SQLiteParser.K_REPLACE);
                        }
                        break;
                    case 4:
                        {
                            this.state = 678;
                            this.match(SQLiteParser.K_INSERT);
                            this.state = 679;
                            this.match(SQLiteParser.K_OR);
                            this.state = 680;
                            this.match(SQLiteParser.K_ROLLBACK);
                        }
                        break;
                    case 5:
                        {
                            this.state = 681;
                            this.match(SQLiteParser.K_INSERT);
                            this.state = 682;
                            this.match(SQLiteParser.K_OR);
                            this.state = 683;
                            this.match(SQLiteParser.K_ABORT);
                        }
                        break;
                    case 6:
                        {
                            this.state = 684;
                            this.match(SQLiteParser.K_INSERT);
                            this.state = 685;
                            this.match(SQLiteParser.K_OR);
                            this.state = 686;
                            this.match(SQLiteParser.K_FAIL);
                        }
                        break;
                    case 7:
                        {
                            this.state = 687;
                            this.match(SQLiteParser.K_INSERT);
                            this.state = 688;
                            this.match(SQLiteParser.K_OR);
                            this.state = 689;
                            this.match(SQLiteParser.K_IGNORE);
                        }
                        break;
                }
                this.state = 692;
                this.match(SQLiteParser.K_INTO);
                this.state = 696;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 87, this._ctx)) {
                    case 1:
                        {
                            this.state = 693;
                            this.database_name();
                            this.state = 694;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 698;
                this.table_name();
                this.state = 710;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.OPEN_PAR) {
                    {
                        this.state = 699;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 700;
                        this.column_name();
                        this.state = 705;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 701;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 702;
                                    this.column_name();
                                }
                            }
                            this.state = 707;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 708;
                        this.match(SQLiteParser.CLOSE_PAR);
                    }
                }
                this.state = 743;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 93, this._ctx)) {
                    case 1:
                        {
                            this.state = 712;
                            this.match(SQLiteParser.K_VALUES);
                            this.state = 713;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 714;
                            this.expr(0);
                            this.state = 719;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === SQLiteParser.COMMA) {
                                {
                                    {
                                        this.state = 715;
                                        this.match(SQLiteParser.COMMA);
                                        this.state = 716;
                                        this.expr(0);
                                    }
                                }
                                this.state = 721;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 722;
                            this.match(SQLiteParser.CLOSE_PAR);
                            this.state = 737;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === SQLiteParser.COMMA) {
                                {
                                    {
                                        this.state = 723;
                                        this.match(SQLiteParser.COMMA);
                                        this.state = 724;
                                        this.match(SQLiteParser.OPEN_PAR);
                                        this.state = 725;
                                        this.expr(0);
                                        this.state = 730;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === SQLiteParser.COMMA) {
                                            {
                                                {
                                                    this.state = 726;
                                                    this.match(SQLiteParser.COMMA);
                                                    this.state = 727;
                                                    this.expr(0);
                                                }
                                            }
                                            this.state = 732;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 733;
                                        this.match(SQLiteParser.CLOSE_PAR);
                                    }
                                }
                                this.state = 739;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 740;
                            this.select_stmt();
                        }
                        break;
                    case 3:
                        {
                            this.state = 741;
                            this.match(SQLiteParser.K_DEFAULT);
                            this.state = 742;
                            this.match(SQLiteParser.K_VALUES);
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
    SQLiteParser.prototype.pragma_stmt = function () {
        var _localctx = new Pragma_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, SQLiteParser.RULE_pragma_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 745;
                this.match(SQLiteParser.K_PRAGMA);
                this.state = 749;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 94, this._ctx)) {
                    case 1:
                        {
                            this.state = 746;
                            this.database_name();
                            this.state = 747;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 751;
                this.pragma_name();
                this.state = 758;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SQLiteParser.ASSIGN:
                        {
                            this.state = 752;
                            this.match(SQLiteParser.ASSIGN);
                            this.state = 753;
                            this.pragma_value();
                        }
                        break;
                    case SQLiteParser.OPEN_PAR:
                        {
                            this.state = 754;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 755;
                            this.pragma_value();
                            this.state = 756;
                            this.match(SQLiteParser.CLOSE_PAR);
                        }
                        break;
                    case SQLiteParser.EOF:
                    case SQLiteParser.SCOL:
                    case SQLiteParser.K_ALTER:
                    case SQLiteParser.K_ANALYZE:
                    case SQLiteParser.K_ATTACH:
                    case SQLiteParser.K_BEGIN:
                    case SQLiteParser.K_COMMIT:
                    case SQLiteParser.K_CREATE:
                    case SQLiteParser.K_DELETE:
                    case SQLiteParser.K_DETACH:
                    case SQLiteParser.K_DROP:
                    case SQLiteParser.K_END:
                    case SQLiteParser.K_EXPLAIN:
                    case SQLiteParser.K_INSERT:
                    case SQLiteParser.K_PRAGMA:
                    case SQLiteParser.K_REINDEX:
                    case SQLiteParser.K_RELEASE:
                    case SQLiteParser.K_REPLACE:
                    case SQLiteParser.K_ROLLBACK:
                    case SQLiteParser.K_SAVEPOINT:
                    case SQLiteParser.K_SELECT:
                    case SQLiteParser.K_UPDATE:
                    case SQLiteParser.K_VACUUM:
                    case SQLiteParser.K_VALUES:
                    case SQLiteParser.K_WITH:
                    case SQLiteParser.UNEXPECTED_CHAR:
                        break;
                    default:
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
    SQLiteParser.prototype.reindex_stmt = function () {
        var _localctx = new Reindex_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, SQLiteParser.RULE_reindex_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 760;
                this.match(SQLiteParser.K_REINDEX);
                this.state = 771;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 98, this._ctx)) {
                    case 1:
                        {
                            this.state = 761;
                            this.collation_name();
                        }
                        break;
                    case 2:
                        {
                            this.state = 765;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 96, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 762;
                                        this.database_name();
                                        this.state = 763;
                                        this.match(SQLiteParser.DOT);
                                    }
                                    break;
                            }
                            this.state = 769;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 767;
                                        this.table_name();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 768;
                                        this.index_name();
                                    }
                                    break;
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
    SQLiteParser.prototype.release_stmt = function () {
        var _localctx = new Release_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, SQLiteParser.RULE_release_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 773;
                this.match(SQLiteParser.K_RELEASE);
                this.state = 775;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 99, this._ctx)) {
                    case 1:
                        {
                            this.state = 774;
                            this.match(SQLiteParser.K_SAVEPOINT);
                        }
                        break;
                }
                this.state = 777;
                this.savepoint_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.rollback_stmt = function () {
        var _localctx = new Rollback_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, SQLiteParser.RULE_rollback_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 779;
                this.match(SQLiteParser.K_ROLLBACK);
                this.state = 784;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_TRANSACTION) {
                    {
                        this.state = 780;
                        this.match(SQLiteParser.K_TRANSACTION);
                        this.state = 782;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 100, this._ctx)) {
                            case 1:
                                {
                                    this.state = 781;
                                    this.transaction_name();
                                }
                                break;
                        }
                    }
                }
                this.state = 791;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_TO) {
                    {
                        this.state = 786;
                        this.match(SQLiteParser.K_TO);
                        this.state = 788;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 102, this._ctx)) {
                            case 1:
                                {
                                    this.state = 787;
                                    this.match(SQLiteParser.K_SAVEPOINT);
                                }
                                break;
                        }
                        this.state = 790;
                        this.savepoint_name();
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
    SQLiteParser.prototype.savepoint_stmt = function () {
        var _localctx = new Savepoint_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, SQLiteParser.RULE_savepoint_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 793;
                this.match(SQLiteParser.K_SAVEPOINT);
                this.state = 794;
                this.savepoint_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.simple_select_stmt = function () {
        var _localctx = new Simple_select_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, SQLiteParser.RULE_simple_select_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 808;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_WITH) {
                    {
                        this.state = 796;
                        this.match(SQLiteParser.K_WITH);
                        this.state = 798;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 104, this._ctx)) {
                            case 1:
                                {
                                    this.state = 797;
                                    this.match(SQLiteParser.K_RECURSIVE);
                                }
                                break;
                        }
                        this.state = 800;
                        this.common_table_expression();
                        this.state = 805;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 801;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 802;
                                    this.common_table_expression();
                                }
                            }
                            this.state = 807;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 810;
                this.select_core();
                this.state = 821;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_ORDER) {
                    {
                        this.state = 811;
                        this.match(SQLiteParser.K_ORDER);
                        this.state = 812;
                        this.match(SQLiteParser.K_BY);
                        this.state = 813;
                        this.ordering_term();
                        this.state = 818;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 814;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 815;
                                    this.ordering_term();
                                }
                            }
                            this.state = 820;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 829;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_LIMIT) {
                    {
                        this.state = 823;
                        this.match(SQLiteParser.K_LIMIT);
                        this.state = 824;
                        this.expr(0);
                        this.state = 827;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.COMMA || _la === SQLiteParser.K_OFFSET) {
                            {
                                this.state = 825;
                                _la = this._input.LA(1);
                                if (!(_la === SQLiteParser.COMMA || _la === SQLiteParser.K_OFFSET)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 826;
                                this.expr(0);
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
    SQLiteParser.prototype.select_stmt = function () {
        var _localctx = new Select_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, SQLiteParser.RULE_select_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 843;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_WITH) {
                    {
                        this.state = 831;
                        this.match(SQLiteParser.K_WITH);
                        this.state = 833;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 111, this._ctx)) {
                            case 1:
                                {
                                    this.state = 832;
                                    this.match(SQLiteParser.K_RECURSIVE);
                                }
                                break;
                        }
                        this.state = 835;
                        this.common_table_expression();
                        this.state = 840;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 836;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 837;
                                    this.common_table_expression();
                                }
                            }
                            this.state = 842;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 845;
                this.select_or_values();
                this.state = 851;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SQLiteParser.K_EXCEPT || _la === SQLiteParser.K_INTERSECT || _la === SQLiteParser.K_UNION) {
                    {
                        {
                            this.state = 846;
                            this.compound_operator();
                            this.state = 847;
                            this.select_or_values();
                        }
                    }
                    this.state = 853;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 864;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_ORDER) {
                    {
                        this.state = 854;
                        this.match(SQLiteParser.K_ORDER);
                        this.state = 855;
                        this.match(SQLiteParser.K_BY);
                        this.state = 856;
                        this.ordering_term();
                        this.state = 861;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 857;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 858;
                                    this.ordering_term();
                                }
                            }
                            this.state = 863;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 872;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_LIMIT) {
                    {
                        this.state = 866;
                        this.match(SQLiteParser.K_LIMIT);
                        this.state = 867;
                        this.expr(0);
                        this.state = 870;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.COMMA || _la === SQLiteParser.K_OFFSET) {
                            {
                                this.state = 868;
                                _la = this._input.LA(1);
                                if (!(_la === SQLiteParser.COMMA || _la === SQLiteParser.K_OFFSET)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 869;
                                this.expr(0);
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
    SQLiteParser.prototype.select_or_values = function () {
        var _localctx = new Select_or_valuesContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, SQLiteParser.RULE_select_or_values);
        var _la;
        try {
            this.state = 948;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SQLiteParser.K_SELECT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 874;
                        this.match(SQLiteParser.K_SELECT);
                        this.state = 876;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 119, this._ctx)) {
                            case 1:
                                {
                                    this.state = 875;
                                    _la = this._input.LA(1);
                                    if (!(_la === SQLiteParser.K_ALL || _la === SQLiteParser.K_DISTINCT)) {
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
                        this.state = 878;
                        this.result_column();
                        this.state = 883;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 879;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 880;
                                    this.result_column();
                                }
                            }
                            this.state = 885;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 898;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.K_FROM) {
                            {
                                this.state = 886;
                                this.match(SQLiteParser.K_FROM);
                                this.state = 896;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 122, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 887;
                                            this.table_or_subquery();
                                            this.state = 892;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === SQLiteParser.COMMA) {
                                                {
                                                    {
                                                        this.state = 888;
                                                        this.match(SQLiteParser.COMMA);
                                                        this.state = 889;
                                                        this.table_or_subquery();
                                                    }
                                                }
                                                this.state = 894;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 895;
                                            this.join_clause();
                                        }
                                        break;
                                }
                            }
                        }
                        this.state = 902;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.K_WHERE) {
                            {
                                this.state = 900;
                                this.match(SQLiteParser.K_WHERE);
                                this.state = 901;
                                this.expr(0);
                            }
                        }
                        this.state = 918;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.K_GROUP) {
                            {
                                this.state = 904;
                                this.match(SQLiteParser.K_GROUP);
                                this.state = 905;
                                this.match(SQLiteParser.K_BY);
                                this.state = 906;
                                this.expr(0);
                                this.state = 911;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === SQLiteParser.COMMA) {
                                    {
                                        {
                                            this.state = 907;
                                            this.match(SQLiteParser.COMMA);
                                            this.state = 908;
                                            this.expr(0);
                                        }
                                    }
                                    this.state = 913;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 916;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === SQLiteParser.K_HAVING) {
                                    {
                                        this.state = 914;
                                        this.match(SQLiteParser.K_HAVING);
                                        this.state = 915;
                                        this.expr(0);
                                    }
                                }
                            }
                        }
                    }
                    break;
                case SQLiteParser.K_VALUES:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 920;
                        this.match(SQLiteParser.K_VALUES);
                        this.state = 921;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 922;
                        this.expr(0);
                        this.state = 927;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 923;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 924;
                                    this.expr(0);
                                }
                            }
                            this.state = 929;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 930;
                        this.match(SQLiteParser.CLOSE_PAR);
                        this.state = 945;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 931;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 932;
                                    this.match(SQLiteParser.OPEN_PAR);
                                    this.state = 933;
                                    this.expr(0);
                                    this.state = 938;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === SQLiteParser.COMMA) {
                                        {
                                            {
                                                this.state = 934;
                                                this.match(SQLiteParser.COMMA);
                                                this.state = 935;
                                                this.expr(0);
                                            }
                                        }
                                        this.state = 940;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 941;
                                    this.match(SQLiteParser.CLOSE_PAR);
                                }
                            }
                            this.state = 947;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
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
    SQLiteParser.prototype.update_stmt = function () {
        var _localctx = new Update_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, SQLiteParser.RULE_update_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 951;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_WITH) {
                    {
                        this.state = 950;
                        this.with_clause();
                    }
                }
                this.state = 953;
                this.match(SQLiteParser.K_UPDATE);
                this.state = 964;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 133, this._ctx)) {
                    case 1:
                        {
                            this.state = 954;
                            this.match(SQLiteParser.K_OR);
                            this.state = 955;
                            this.match(SQLiteParser.K_ROLLBACK);
                        }
                        break;
                    case 2:
                        {
                            this.state = 956;
                            this.match(SQLiteParser.K_OR);
                            this.state = 957;
                            this.match(SQLiteParser.K_ABORT);
                        }
                        break;
                    case 3:
                        {
                            this.state = 958;
                            this.match(SQLiteParser.K_OR);
                            this.state = 959;
                            this.match(SQLiteParser.K_REPLACE);
                        }
                        break;
                    case 4:
                        {
                            this.state = 960;
                            this.match(SQLiteParser.K_OR);
                            this.state = 961;
                            this.match(SQLiteParser.K_FAIL);
                        }
                        break;
                    case 5:
                        {
                            this.state = 962;
                            this.match(SQLiteParser.K_OR);
                            this.state = 963;
                            this.match(SQLiteParser.K_IGNORE);
                        }
                        break;
                }
                this.state = 966;
                this.qualified_table_name();
                this.state = 967;
                this.match(SQLiteParser.K_SET);
                this.state = 968;
                this.column_name();
                this.state = 969;
                this.match(SQLiteParser.ASSIGN);
                this.state = 970;
                this.expr(0);
                this.state = 978;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SQLiteParser.COMMA) {
                    {
                        {
                            this.state = 971;
                            this.match(SQLiteParser.COMMA);
                            this.state = 972;
                            this.column_name();
                            this.state = 973;
                            this.match(SQLiteParser.ASSIGN);
                            this.state = 974;
                            this.expr(0);
                        }
                    }
                    this.state = 980;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 983;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_WHERE) {
                    {
                        this.state = 981;
                        this.match(SQLiteParser.K_WHERE);
                        this.state = 982;
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
    SQLiteParser.prototype.update_stmt_limited = function () {
        var _localctx = new Update_stmt_limitedContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, SQLiteParser.RULE_update_stmt_limited);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 986;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_WITH) {
                    {
                        this.state = 985;
                        this.with_clause();
                    }
                }
                this.state = 988;
                this.match(SQLiteParser.K_UPDATE);
                this.state = 999;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 137, this._ctx)) {
                    case 1:
                        {
                            this.state = 989;
                            this.match(SQLiteParser.K_OR);
                            this.state = 990;
                            this.match(SQLiteParser.K_ROLLBACK);
                        }
                        break;
                    case 2:
                        {
                            this.state = 991;
                            this.match(SQLiteParser.K_OR);
                            this.state = 992;
                            this.match(SQLiteParser.K_ABORT);
                        }
                        break;
                    case 3:
                        {
                            this.state = 993;
                            this.match(SQLiteParser.K_OR);
                            this.state = 994;
                            this.match(SQLiteParser.K_REPLACE);
                        }
                        break;
                    case 4:
                        {
                            this.state = 995;
                            this.match(SQLiteParser.K_OR);
                            this.state = 996;
                            this.match(SQLiteParser.K_FAIL);
                        }
                        break;
                    case 5:
                        {
                            this.state = 997;
                            this.match(SQLiteParser.K_OR);
                            this.state = 998;
                            this.match(SQLiteParser.K_IGNORE);
                        }
                        break;
                }
                this.state = 1001;
                this.qualified_table_name();
                this.state = 1002;
                this.match(SQLiteParser.K_SET);
                this.state = 1003;
                this.column_name();
                this.state = 1004;
                this.match(SQLiteParser.ASSIGN);
                this.state = 1005;
                this.expr(0);
                this.state = 1013;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SQLiteParser.COMMA) {
                    {
                        {
                            this.state = 1006;
                            this.match(SQLiteParser.COMMA);
                            this.state = 1007;
                            this.column_name();
                            this.state = 1008;
                            this.match(SQLiteParser.ASSIGN);
                            this.state = 1009;
                            this.expr(0);
                        }
                    }
                    this.state = 1015;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1018;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_WHERE) {
                    {
                        this.state = 1016;
                        this.match(SQLiteParser.K_WHERE);
                        this.state = 1017;
                        this.expr(0);
                    }
                }
                this.state = 1038;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_LIMIT || _la === SQLiteParser.K_ORDER) {
                    {
                        this.state = 1030;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.K_ORDER) {
                            {
                                this.state = 1020;
                                this.match(SQLiteParser.K_ORDER);
                                this.state = 1021;
                                this.match(SQLiteParser.K_BY);
                                this.state = 1022;
                                this.ordering_term();
                                this.state = 1027;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === SQLiteParser.COMMA) {
                                    {
                                        {
                                            this.state = 1023;
                                            this.match(SQLiteParser.COMMA);
                                            this.state = 1024;
                                            this.ordering_term();
                                        }
                                    }
                                    this.state = 1029;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 1032;
                        this.match(SQLiteParser.K_LIMIT);
                        this.state = 1033;
                        this.expr(0);
                        this.state = 1036;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.COMMA || _la === SQLiteParser.K_OFFSET) {
                            {
                                this.state = 1034;
                                _la = this._input.LA(1);
                                if (!(_la === SQLiteParser.COMMA || _la === SQLiteParser.K_OFFSET)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 1035;
                                this.expr(0);
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
    SQLiteParser.prototype.vacuum_stmt = function () {
        var _localctx = new Vacuum_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, SQLiteParser.RULE_vacuum_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1040;
                this.match(SQLiteParser.K_VACUUM);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.column_def = function () {
        var _localctx = new Column_defContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, SQLiteParser.RULE_column_def);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1042;
                this.column_name();
                this.state = 1044;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 144, this._ctx)) {
                    case 1:
                        {
                            this.state = 1043;
                            this.type_name();
                        }
                        break;
                }
                this.state = 1049;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (SQLiteParser.K_CHECK - 44)) | (1 << (SQLiteParser.K_COLLATE - 44)) | (1 << (SQLiteParser.K_CONSTRAINT - 44)) | (1 << (SQLiteParser.K_DEFAULT - 44)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (SQLiteParser.K_NOT - 102)) | (1 << (SQLiteParser.K_NULL - 102)) | (1 << (SQLiteParser.K_PRIMARY - 102)) | (1 << (SQLiteParser.K_REFERENCES - 102)))) !== 0) || _la === SQLiteParser.K_UNIQUE) {
                    {
                        {
                            this.state = 1046;
                            this.column_constraint();
                        }
                    }
                    this.state = 1051;
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
    SQLiteParser.prototype.type_name = function () {
        var _localctx = new Type_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, SQLiteParser.RULE_type_name);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1053;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 1052;
                                    this.name();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 1055;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 1067;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 147, this._ctx)) {
                    case 1:
                        {
                            this.state = 1057;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 1058;
                            this.signed_number();
                            this.state = 1059;
                            this.match(SQLiteParser.CLOSE_PAR);
                        }
                        break;
                    case 2:
                        {
                            this.state = 1061;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 1062;
                            this.signed_number();
                            this.state = 1063;
                            this.match(SQLiteParser.COMMA);
                            this.state = 1064;
                            this.signed_number();
                            this.state = 1065;
                            this.match(SQLiteParser.CLOSE_PAR);
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
    SQLiteParser.prototype.column_constraint = function () {
        var _localctx = new Column_constraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, SQLiteParser.RULE_column_constraint);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1071;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_CONSTRAINT) {
                    {
                        this.state = 1069;
                        this.match(SQLiteParser.K_CONSTRAINT);
                        this.state = 1070;
                        this.name();
                    }
                }
                this.state = 1106;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SQLiteParser.K_PRIMARY:
                        {
                            this.state = 1073;
                            this.match(SQLiteParser.K_PRIMARY);
                            this.state = 1074;
                            this.match(SQLiteParser.K_KEY);
                            this.state = 1076;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SQLiteParser.K_ASC || _la === SQLiteParser.K_DESC) {
                                {
                                    this.state = 1075;
                                    _la = this._input.LA(1);
                                    if (!(_la === SQLiteParser.K_ASC || _la === SQLiteParser.K_DESC)) {
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
                            this.state = 1078;
                            this.conflict_clause();
                            this.state = 1080;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SQLiteParser.K_AUTOINCREMENT) {
                                {
                                    this.state = 1079;
                                    this.match(SQLiteParser.K_AUTOINCREMENT);
                                }
                            }
                        }
                        break;
                    case SQLiteParser.K_NOT:
                    case SQLiteParser.K_NULL:
                        {
                            this.state = 1083;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SQLiteParser.K_NOT) {
                                {
                                    this.state = 1082;
                                    this.match(SQLiteParser.K_NOT);
                                }
                            }
                            this.state = 1085;
                            this.match(SQLiteParser.K_NULL);
                            this.state = 1086;
                            this.conflict_clause();
                        }
                        break;
                    case SQLiteParser.K_UNIQUE:
                        {
                            this.state = 1087;
                            this.match(SQLiteParser.K_UNIQUE);
                            this.state = 1088;
                            this.conflict_clause();
                        }
                        break;
                    case SQLiteParser.K_CHECK:
                        {
                            this.state = 1089;
                            this.match(SQLiteParser.K_CHECK);
                            this.state = 1090;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 1091;
                            this.expr(0);
                            this.state = 1092;
                            this.match(SQLiteParser.CLOSE_PAR);
                        }
                        break;
                    case SQLiteParser.K_DEFAULT:
                        {
                            this.state = 1094;
                            this.match(SQLiteParser.K_DEFAULT);
                            this.state = 1101;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 152, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1095;
                                        this.signed_number();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1096;
                                        this.literal_value();
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 1097;
                                        this.match(SQLiteParser.OPEN_PAR);
                                        this.state = 1098;
                                        this.expr(0);
                                        this.state = 1099;
                                        this.match(SQLiteParser.CLOSE_PAR);
                                    }
                                    break;
                            }
                        }
                        break;
                    case SQLiteParser.K_COLLATE:
                        {
                            this.state = 1103;
                            this.match(SQLiteParser.K_COLLATE);
                            this.state = 1104;
                            this.collation_name();
                        }
                        break;
                    case SQLiteParser.K_REFERENCES:
                        {
                            this.state = 1105;
                            this.foreign_key_clause();
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
    SQLiteParser.prototype.conflict_clause = function () {
        var _localctx = new Conflict_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, SQLiteParser.RULE_conflict_clause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1111;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_ON) {
                    {
                        this.state = 1108;
                        this.match(SQLiteParser.K_ON);
                        this.state = 1109;
                        this.match(SQLiteParser.K_CONFLICT);
                        this.state = 1110;
                        _la = this._input.LA(1);
                        if (!(_la === SQLiteParser.K_ABORT || _la === SQLiteParser.K_FAIL || _la === SQLiteParser.K_IGNORE || _la === SQLiteParser.K_REPLACE || _la === SQLiteParser.K_ROLLBACK)) {
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
    SQLiteParser.prototype.expr = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ExprContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 78;
        this.enterRecursionRule(_localctx, 78, SQLiteParser.RULE_expr, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1189;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 165, this._ctx)) {
                    case 1:
                        {
                            this.state = 1114;
                            this.literal_value();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1115;
                            this.match(SQLiteParser.BIND_PARAMETER);
                        }
                        break;
                    case 3:
                        {
                            this.state = 1124;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 156, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1119;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 155, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1116;
                                                    this.database_name();
                                                    this.state = 1117;
                                                    this.match(SQLiteParser.DOT);
                                                }
                                                break;
                                        }
                                        this.state = 1121;
                                        this.table_name();
                                        this.state = 1122;
                                        this.match(SQLiteParser.DOT);
                                    }
                                    break;
                            }
                            this.state = 1126;
                            this.column_name();
                        }
                        break;
                    case 4:
                        {
                            this.state = 1127;
                            this.unary_operator();
                            this.state = 1128;
                            this.expr(21);
                        }
                        break;
                    case 5:
                        {
                            this.state = 1130;
                            this.function_name();
                            this.state = 1131;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 1144;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case SQLiteParser.OPEN_PAR:
                                case SQLiteParser.PLUS:
                                case SQLiteParser.MINUS:
                                case SQLiteParser.TILDE:
                                case SQLiteParser.K_ABORT:
                                case SQLiteParser.K_ACTION:
                                case SQLiteParser.K_ADD:
                                case SQLiteParser.K_AFTER:
                                case SQLiteParser.K_ALL:
                                case SQLiteParser.K_ALTER:
                                case SQLiteParser.K_ANALYZE:
                                case SQLiteParser.K_AND:
                                case SQLiteParser.K_AS:
                                case SQLiteParser.K_ASC:
                                case SQLiteParser.K_ATTACH:
                                case SQLiteParser.K_AUTOINCREMENT:
                                case SQLiteParser.K_BEFORE:
                                case SQLiteParser.K_BEGIN:
                                case SQLiteParser.K_BETWEEN:
                                case SQLiteParser.K_BY:
                                case SQLiteParser.K_CASCADE:
                                case SQLiteParser.K_CASE:
                                case SQLiteParser.K_CAST:
                                case SQLiteParser.K_CHECK:
                                case SQLiteParser.K_COLLATE:
                                case SQLiteParser.K_COLUMN:
                                case SQLiteParser.K_COMMIT:
                                case SQLiteParser.K_CONFLICT:
                                case SQLiteParser.K_CONSTRAINT:
                                case SQLiteParser.K_CREATE:
                                case SQLiteParser.K_CROSS:
                                case SQLiteParser.K_CURRENT_DATE:
                                case SQLiteParser.K_CURRENT_TIME:
                                case SQLiteParser.K_CURRENT_TIMESTAMP:
                                case SQLiteParser.K_DATABASE:
                                case SQLiteParser.K_DEFAULT:
                                case SQLiteParser.K_DEFERRABLE:
                                case SQLiteParser.K_DEFERRED:
                                case SQLiteParser.K_DELETE:
                                case SQLiteParser.K_DESC:
                                case SQLiteParser.K_DETACH:
                                case SQLiteParser.K_DISTINCT:
                                case SQLiteParser.K_DROP:
                                case SQLiteParser.K_EACH:
                                case SQLiteParser.K_ELSE:
                                case SQLiteParser.K_END:
                                case SQLiteParser.K_ESCAPE:
                                case SQLiteParser.K_EXCEPT:
                                case SQLiteParser.K_EXCLUSIVE:
                                case SQLiteParser.K_EXISTS:
                                case SQLiteParser.K_EXPLAIN:
                                case SQLiteParser.K_FAIL:
                                case SQLiteParser.K_FOR:
                                case SQLiteParser.K_FOREIGN:
                                case SQLiteParser.K_FROM:
                                case SQLiteParser.K_FULL:
                                case SQLiteParser.K_GLOB:
                                case SQLiteParser.K_GROUP:
                                case SQLiteParser.K_HAVING:
                                case SQLiteParser.K_IF:
                                case SQLiteParser.K_IGNORE:
                                case SQLiteParser.K_IMMEDIATE:
                                case SQLiteParser.K_IN:
                                case SQLiteParser.K_INDEX:
                                case SQLiteParser.K_INDEXED:
                                case SQLiteParser.K_INITIALLY:
                                case SQLiteParser.K_INNER:
                                case SQLiteParser.K_INSERT:
                                case SQLiteParser.K_INSTEAD:
                                case SQLiteParser.K_INTERSECT:
                                case SQLiteParser.K_INTO:
                                case SQLiteParser.K_IS:
                                case SQLiteParser.K_ISNULL:
                                case SQLiteParser.K_JOIN:
                                case SQLiteParser.K_KEY:
                                case SQLiteParser.K_LEFT:
                                case SQLiteParser.K_LIKE:
                                case SQLiteParser.K_LIMIT:
                                case SQLiteParser.K_MATCH:
                                case SQLiteParser.K_NATURAL:
                                case SQLiteParser.K_NO:
                                case SQLiteParser.K_NOT:
                                case SQLiteParser.K_NOTNULL:
                                case SQLiteParser.K_NULL:
                                case SQLiteParser.K_OF:
                                case SQLiteParser.K_OFFSET:
                                case SQLiteParser.K_ON:
                                case SQLiteParser.K_OR:
                                case SQLiteParser.K_ORDER:
                                case SQLiteParser.K_OUTER:
                                case SQLiteParser.K_PLAN:
                                case SQLiteParser.K_PRAGMA:
                                case SQLiteParser.K_PRIMARY:
                                case SQLiteParser.K_QUERY:
                                case SQLiteParser.K_RAISE:
                                case SQLiteParser.K_RECURSIVE:
                                case SQLiteParser.K_REFERENCES:
                                case SQLiteParser.K_REGEXP:
                                case SQLiteParser.K_REINDEX:
                                case SQLiteParser.K_RELEASE:
                                case SQLiteParser.K_RENAME:
                                case SQLiteParser.K_REPLACE:
                                case SQLiteParser.K_RESTRICT:
                                case SQLiteParser.K_RIGHT:
                                case SQLiteParser.K_ROLLBACK:
                                case SQLiteParser.K_ROW:
                                case SQLiteParser.K_SAVEPOINT:
                                case SQLiteParser.K_SELECT:
                                case SQLiteParser.K_SET:
                                case SQLiteParser.K_TABLE:
                                case SQLiteParser.K_TEMP:
                                case SQLiteParser.K_TEMPORARY:
                                case SQLiteParser.K_THEN:
                                case SQLiteParser.K_TO:
                                case SQLiteParser.K_TRANSACTION:
                                case SQLiteParser.K_TRIGGER:
                                case SQLiteParser.K_UNION:
                                case SQLiteParser.K_UNIQUE:
                                case SQLiteParser.K_UPDATE:
                                case SQLiteParser.K_USING:
                                case SQLiteParser.K_VACUUM:
                                case SQLiteParser.K_VALUES:
                                case SQLiteParser.K_VIEW:
                                case SQLiteParser.K_VIRTUAL:
                                case SQLiteParser.K_WHEN:
                                case SQLiteParser.K_WHERE:
                                case SQLiteParser.K_WITH:
                                case SQLiteParser.K_WITHOUT:
                                case SQLiteParser.IDENTIFIER:
                                case SQLiteParser.NUMERIC_LITERAL:
                                case SQLiteParser.BIND_PARAMETER:
                                case SQLiteParser.STRING_LITERAL:
                                case SQLiteParser.BLOB_LITERAL:
                                    {
                                        this.state = 1133;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 157, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1132;
                                                    this.match(SQLiteParser.K_DISTINCT);
                                                }
                                                break;
                                        }
                                        this.state = 1135;
                                        this.expr(0);
                                        this.state = 1140;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === SQLiteParser.COMMA) {
                                            {
                                                {
                                                    this.state = 1136;
                                                    this.match(SQLiteParser.COMMA);
                                                    this.state = 1137;
                                                    this.expr(0);
                                                }
                                            }
                                            this.state = 1142;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                    break;
                                case SQLiteParser.STAR:
                                    {
                                        this.state = 1143;
                                        this.match(SQLiteParser.STAR);
                                    }
                                    break;
                                case SQLiteParser.CLOSE_PAR:
                                    break;
                                default:
                                    break;
                            }
                            this.state = 1146;
                            this.match(SQLiteParser.CLOSE_PAR);
                        }
                        break;
                    case 6:
                        {
                            this.state = 1148;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 1149;
                            this.expr(0);
                            this.state = 1150;
                            this.match(SQLiteParser.CLOSE_PAR);
                        }
                        break;
                    case 7:
                        {
                            this.state = 1152;
                            this.match(SQLiteParser.K_CAST);
                            this.state = 1153;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 1154;
                            this.expr(0);
                            this.state = 1155;
                            this.match(SQLiteParser.K_AS);
                            this.state = 1156;
                            this.type_name();
                            this.state = 1157;
                            this.match(SQLiteParser.CLOSE_PAR);
                        }
                        break;
                    case 8:
                        {
                            this.state = 1163;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SQLiteParser.K_EXISTS || _la === SQLiteParser.K_NOT) {
                                {
                                    this.state = 1160;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === SQLiteParser.K_NOT) {
                                        {
                                            this.state = 1159;
                                            this.match(SQLiteParser.K_NOT);
                                        }
                                    }
                                    this.state = 1162;
                                    this.match(SQLiteParser.K_EXISTS);
                                }
                            }
                            this.state = 1165;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 1166;
                            this.select_stmt();
                            this.state = 1167;
                            this.match(SQLiteParser.CLOSE_PAR);
                        }
                        break;
                    case 9:
                        {
                            this.state = 1169;
                            this.match(SQLiteParser.K_CASE);
                            this.state = 1171;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 162, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1170;
                                        this.expr(0);
                                    }
                                    break;
                            }
                            this.state = 1178;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 1173;
                                        this.match(SQLiteParser.K_WHEN);
                                        this.state = 1174;
                                        this.expr(0);
                                        this.state = 1175;
                                        this.match(SQLiteParser.K_THEN);
                                        this.state = 1176;
                                        this.expr(0);
                                    }
                                }
                                this.state = 1180;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === SQLiteParser.K_WHEN);
                            this.state = 1184;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SQLiteParser.K_ELSE) {
                                {
                                    this.state = 1182;
                                    this.match(SQLiteParser.K_ELSE);
                                    this.state = 1183;
                                    this.expr(0);
                                }
                            }
                            this.state = 1186;
                            this.match(SQLiteParser.K_END);
                        }
                        break;
                    case 10:
                        {
                            this.state = 1188;
                            this.raise_function();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1291;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 178, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 1289;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 177, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
                                        this.state = 1191;
                                        if (!(this.precpred(this._ctx, 20))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
                                        }
                                        this.state = 1192;
                                        this.match(SQLiteParser.PIPE2);
                                        this.state = 1193;
                                        this.expr(21);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
                                        this.state = 1194;
                                        if (!(this.precpred(this._ctx, 19))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                                        }
                                        this.state = 1195;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SQLiteParser.STAR) | (1 << SQLiteParser.DIV) | (1 << SQLiteParser.MOD))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1196;
                                        this.expr(20);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
                                        this.state = 1197;
                                        if (!(this.precpred(this._ctx, 18))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                                        }
                                        this.state = 1198;
                                        _la = this._input.LA(1);
                                        if (!(_la === SQLiteParser.PLUS || _la === SQLiteParser.MINUS)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1199;
                                        this.expr(19);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
                                        this.state = 1200;
                                        if (!(this.precpred(this._ctx, 17))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                                        }
                                        this.state = 1201;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SQLiteParser.LT2) | (1 << SQLiteParser.GT2) | (1 << SQLiteParser.AMP) | (1 << SQLiteParser.PIPE))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1202;
                                        this.expr(18);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
                                        this.state = 1203;
                                        if (!(this.precpred(this._ctx, 16))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                                        }
                                        this.state = 1204;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SQLiteParser.LT) | (1 << SQLiteParser.LT_EQ) | (1 << SQLiteParser.GT) | (1 << SQLiteParser.GT_EQ))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1205;
                                        this.expr(17);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
                                        this.state = 1206;
                                        if (!(this.precpred(this._ctx, 15))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                                        }
                                        this.state = 1219;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 166, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1207;
                                                    this.match(SQLiteParser.ASSIGN);
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 1208;
                                                    this.match(SQLiteParser.EQ);
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 1209;
                                                    this.match(SQLiteParser.NOT_EQ1);
                                                }
                                                break;
                                            case 4:
                                                {
                                                    this.state = 1210;
                                                    this.match(SQLiteParser.NOT_EQ2);
                                                }
                                                break;
                                            case 5:
                                                {
                                                    this.state = 1211;
                                                    this.match(SQLiteParser.K_IS);
                                                }
                                                break;
                                            case 6:
                                                {
                                                    this.state = 1212;
                                                    this.match(SQLiteParser.K_IS);
                                                    this.state = 1213;
                                                    this.match(SQLiteParser.K_NOT);
                                                }
                                                break;
                                            case 7:
                                                {
                                                    this.state = 1214;
                                                    this.match(SQLiteParser.K_IN);
                                                }
                                                break;
                                            case 8:
                                                {
                                                    this.state = 1215;
                                                    this.match(SQLiteParser.K_LIKE);
                                                }
                                                break;
                                            case 9:
                                                {
                                                    this.state = 1216;
                                                    this.match(SQLiteParser.K_GLOB);
                                                }
                                                break;
                                            case 10:
                                                {
                                                    this.state = 1217;
                                                    this.match(SQLiteParser.K_MATCH);
                                                }
                                                break;
                                            case 11:
                                                {
                                                    this.state = 1218;
                                                    this.match(SQLiteParser.K_REGEXP);
                                                }
                                                break;
                                        }
                                        this.state = 1221;
                                        this.expr(16);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
                                        this.state = 1222;
                                        if (!(this.precpred(this._ctx, 14))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                                        }
                                        this.state = 1223;
                                        this.match(SQLiteParser.K_AND);
                                        this.state = 1224;
                                        this.expr(15);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
                                        this.state = 1225;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 1226;
                                        this.match(SQLiteParser.K_OR);
                                        this.state = 1227;
                                        this.expr(14);
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
                                        this.state = 1228;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 1229;
                                        this.match(SQLiteParser.K_IS);
                                        this.state = 1231;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 167, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1230;
                                                    this.match(SQLiteParser.K_NOT);
                                                }
                                                break;
                                        }
                                        this.state = 1233;
                                        this.expr(7);
                                    }
                                    break;
                                case 10:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
                                        this.state = 1234;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 1236;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === SQLiteParser.K_NOT) {
                                            {
                                                this.state = 1235;
                                                this.match(SQLiteParser.K_NOT);
                                            }
                                        }
                                        this.state = 1238;
                                        this.match(SQLiteParser.K_BETWEEN);
                                        this.state = 1239;
                                        this.expr(0);
                                        this.state = 1240;
                                        this.match(SQLiteParser.K_AND);
                                        this.state = 1241;
                                        this.expr(6);
                                    }
                                    break;
                                case 11:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
                                        this.state = 1243;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 1244;
                                        this.match(SQLiteParser.K_COLLATE);
                                        this.state = 1245;
                                        this.collation_name();
                                    }
                                    break;
                                case 12:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
                                        this.state = 1246;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 1248;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === SQLiteParser.K_NOT) {
                                            {
                                                this.state = 1247;
                                                this.match(SQLiteParser.K_NOT);
                                            }
                                        }
                                        this.state = 1250;
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (SQLiteParser.K_GLOB - 77)) | (1 << (SQLiteParser.K_LIKE - 77)) | (1 << (SQLiteParser.K_MATCH - 77)))) !== 0) || _la === SQLiteParser.K_REGEXP)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1251;
                                        this.expr(0);
                                        this.state = 1254;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 170, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1252;
                                                    this.match(SQLiteParser.K_ESCAPE);
                                                    this.state = 1253;
                                                    this.expr(0);
                                                }
                                                break;
                                        }
                                    }
                                    break;
                                case 13:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
                                        this.state = 1256;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 1261;
                                        this._errHandler.sync(this);
                                        switch (this._input.LA(1)) {
                                            case SQLiteParser.K_ISNULL:
                                                {
                                                    this.state = 1257;
                                                    this.match(SQLiteParser.K_ISNULL);
                                                }
                                                break;
                                            case SQLiteParser.K_NOTNULL:
                                                {
                                                    this.state = 1258;
                                                    this.match(SQLiteParser.K_NOTNULL);
                                                }
                                                break;
                                            case SQLiteParser.K_NOT:
                                                {
                                                    this.state = 1259;
                                                    this.match(SQLiteParser.K_NOT);
                                                    this.state = 1260;
                                                    this.match(SQLiteParser.K_NULL);
                                                }
                                                break;
                                            default:
                                                throw new NoViableAltException_1.NoViableAltException(this);
                                        }
                                    }
                                    break;
                                case 14:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
                                        this.state = 1263;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 1265;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === SQLiteParser.K_NOT) {
                                            {
                                                this.state = 1264;
                                                this.match(SQLiteParser.K_NOT);
                                            }
                                        }
                                        this.state = 1267;
                                        this.match(SQLiteParser.K_IN);
                                        this.state = 1287;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 176, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1268;
                                                    this.match(SQLiteParser.OPEN_PAR);
                                                    this.state = 1278;
                                                    this._errHandler.sync(this);
                                                    switch (this.interpreter.adaptivePredict(this._input, 174, this._ctx)) {
                                                        case 1:
                                                            {
                                                                this.state = 1269;
                                                                this.select_stmt();
                                                            }
                                                            break;
                                                        case 2:
                                                            {
                                                                this.state = 1270;
                                                                this.expr(0);
                                                                this.state = 1275;
                                                                this._errHandler.sync(this);
                                                                _la = this._input.LA(1);
                                                                while (_la === SQLiteParser.COMMA) {
                                                                    {
                                                                        {
                                                                            this.state = 1271;
                                                                            this.match(SQLiteParser.COMMA);
                                                                            this.state = 1272;
                                                                            this.expr(0);
                                                                        }
                                                                    }
                                                                    this.state = 1277;
                                                                    this._errHandler.sync(this);
                                                                    _la = this._input.LA(1);
                                                                }
                                                            }
                                                            break;
                                                    }
                                                    this.state = 1280;
                                                    this.match(SQLiteParser.CLOSE_PAR);
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 1284;
                                                    this._errHandler.sync(this);
                                                    switch (this.interpreter.adaptivePredict(this._input, 175, this._ctx)) {
                                                        case 1:
                                                            {
                                                                this.state = 1281;
                                                                this.database_name();
                                                                this.state = 1282;
                                                                this.match(SQLiteParser.DOT);
                                                            }
                                                            break;
                                                    }
                                                    this.state = 1286;
                                                    this.table_name();
                                                }
                                                break;
                                        }
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1293;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 178, this._ctx);
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
    SQLiteParser.prototype.foreign_key_clause = function () {
        var _localctx = new Foreign_key_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, SQLiteParser.RULE_foreign_key_clause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1294;
                this.match(SQLiteParser.K_REFERENCES);
                this.state = 1295;
                this.foreign_table();
                this.state = 1307;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.OPEN_PAR) {
                    {
                        this.state = 1296;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1297;
                        this.column_name();
                        this.state = 1302;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 1298;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 1299;
                                    this.column_name();
                                }
                            }
                            this.state = 1304;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1305;
                        this.match(SQLiteParser.CLOSE_PAR);
                    }
                }
                this.state = 1327;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SQLiteParser.K_MATCH || _la === SQLiteParser.K_ON) {
                    {
                        {
                            this.state = 1323;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case SQLiteParser.K_ON:
                                    {
                                        this.state = 1309;
                                        this.match(SQLiteParser.K_ON);
                                        this.state = 1310;
                                        _la = this._input.LA(1);
                                        if (!(_la === SQLiteParser.K_DELETE || _la === SQLiteParser.K_UPDATE)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1319;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 181, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1311;
                                                    this.match(SQLiteParser.K_SET);
                                                    this.state = 1312;
                                                    this.match(SQLiteParser.K_NULL);
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 1313;
                                                    this.match(SQLiteParser.K_SET);
                                                    this.state = 1314;
                                                    this.match(SQLiteParser.K_DEFAULT);
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 1315;
                                                    this.match(SQLiteParser.K_CASCADE);
                                                }
                                                break;
                                            case 4:
                                                {
                                                    this.state = 1316;
                                                    this.match(SQLiteParser.K_RESTRICT);
                                                }
                                                break;
                                            case 5:
                                                {
                                                    this.state = 1317;
                                                    this.match(SQLiteParser.K_NO);
                                                    this.state = 1318;
                                                    this.match(SQLiteParser.K_ACTION);
                                                }
                                                break;
                                        }
                                    }
                                    break;
                                case SQLiteParser.K_MATCH:
                                    {
                                        this.state = 1321;
                                        this.match(SQLiteParser.K_MATCH);
                                        this.state = 1322;
                                        this.name();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 1329;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1340;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 186, this._ctx)) {
                    case 1:
                        {
                            this.state = 1331;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SQLiteParser.K_NOT) {
                                {
                                    this.state = 1330;
                                    this.match(SQLiteParser.K_NOT);
                                }
                            }
                            this.state = 1333;
                            this.match(SQLiteParser.K_DEFERRABLE);
                            this.state = 1338;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 185, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1334;
                                        this.match(SQLiteParser.K_INITIALLY);
                                        this.state = 1335;
                                        this.match(SQLiteParser.K_DEFERRED);
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1336;
                                        this.match(SQLiteParser.K_INITIALLY);
                                        this.state = 1337;
                                        this.match(SQLiteParser.K_IMMEDIATE);
                                    }
                                    break;
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
    SQLiteParser.prototype.raise_function = function () {
        var _localctx = new Raise_functionContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, SQLiteParser.RULE_raise_function);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1342;
                this.match(SQLiteParser.K_RAISE);
                this.state = 1343;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1348;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SQLiteParser.K_IGNORE:
                        {
                            this.state = 1344;
                            this.match(SQLiteParser.K_IGNORE);
                        }
                        break;
                    case SQLiteParser.K_ABORT:
                    case SQLiteParser.K_FAIL:
                    case SQLiteParser.K_ROLLBACK:
                        {
                            this.state = 1345;
                            _la = this._input.LA(1);
                            if (!(_la === SQLiteParser.K_ABORT || _la === SQLiteParser.K_FAIL || _la === SQLiteParser.K_ROLLBACK)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1346;
                            this.match(SQLiteParser.COMMA);
                            this.state = 1347;
                            this.error_message();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1350;
                this.match(SQLiteParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.indexed_column = function () {
        var _localctx = new Indexed_columnContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, SQLiteParser.RULE_indexed_column);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1352;
                this.column_name();
                this.state = 1355;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_COLLATE) {
                    {
                        this.state = 1353;
                        this.match(SQLiteParser.K_COLLATE);
                        this.state = 1354;
                        this.collation_name();
                    }
                }
                this.state = 1358;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_ASC || _la === SQLiteParser.K_DESC) {
                    {
                        this.state = 1357;
                        _la = this._input.LA(1);
                        if (!(_la === SQLiteParser.K_ASC || _la === SQLiteParser.K_DESC)) {
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
    SQLiteParser.prototype.table_constraint = function () {
        var _localctx = new Table_constraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, SQLiteParser.RULE_table_constraint);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1362;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_CONSTRAINT) {
                    {
                        this.state = 1360;
                        this.match(SQLiteParser.K_CONSTRAINT);
                        this.state = 1361;
                        this.name();
                    }
                }
                this.state = 1400;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SQLiteParser.K_PRIMARY:
                    case SQLiteParser.K_UNIQUE:
                        {
                            this.state = 1367;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case SQLiteParser.K_PRIMARY:
                                    {
                                        this.state = 1364;
                                        this.match(SQLiteParser.K_PRIMARY);
                                        this.state = 1365;
                                        this.match(SQLiteParser.K_KEY);
                                    }
                                    break;
                                case SQLiteParser.K_UNIQUE:
                                    {
                                        this.state = 1366;
                                        this.match(SQLiteParser.K_UNIQUE);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 1369;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 1370;
                            this.indexed_column();
                            this.state = 1375;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === SQLiteParser.COMMA) {
                                {
                                    {
                                        this.state = 1371;
                                        this.match(SQLiteParser.COMMA);
                                        this.state = 1372;
                                        this.indexed_column();
                                    }
                                }
                                this.state = 1377;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1378;
                            this.match(SQLiteParser.CLOSE_PAR);
                            this.state = 1379;
                            this.conflict_clause();
                        }
                        break;
                    case SQLiteParser.K_CHECK:
                        {
                            this.state = 1381;
                            this.match(SQLiteParser.K_CHECK);
                            this.state = 1382;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 1383;
                            this.expr(0);
                            this.state = 1384;
                            this.match(SQLiteParser.CLOSE_PAR);
                        }
                        break;
                    case SQLiteParser.K_FOREIGN:
                        {
                            this.state = 1386;
                            this.match(SQLiteParser.K_FOREIGN);
                            this.state = 1387;
                            this.match(SQLiteParser.K_KEY);
                            this.state = 1388;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 1389;
                            this.column_name();
                            this.state = 1394;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === SQLiteParser.COMMA) {
                                {
                                    {
                                        this.state = 1390;
                                        this.match(SQLiteParser.COMMA);
                                        this.state = 1391;
                                        this.column_name();
                                    }
                                }
                                this.state = 1396;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1397;
                            this.match(SQLiteParser.CLOSE_PAR);
                            this.state = 1398;
                            this.foreign_key_clause();
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
    SQLiteParser.prototype.with_clause = function () {
        var _localctx = new With_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, SQLiteParser.RULE_with_clause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1402;
                this.match(SQLiteParser.K_WITH);
                this.state = 1404;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 195, this._ctx)) {
                    case 1:
                        {
                            this.state = 1403;
                            this.match(SQLiteParser.K_RECURSIVE);
                        }
                        break;
                }
                this.state = 1406;
                this.cte_table_name();
                this.state = 1407;
                this.match(SQLiteParser.K_AS);
                this.state = 1408;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1409;
                this.select_stmt();
                this.state = 1410;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 1420;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SQLiteParser.COMMA) {
                    {
                        {
                            this.state = 1411;
                            this.match(SQLiteParser.COMMA);
                            this.state = 1412;
                            this.cte_table_name();
                            this.state = 1413;
                            this.match(SQLiteParser.K_AS);
                            this.state = 1414;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 1415;
                            this.select_stmt();
                            this.state = 1416;
                            this.match(SQLiteParser.CLOSE_PAR);
                        }
                    }
                    this.state = 1422;
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
    SQLiteParser.prototype.qualified_table_name = function () {
        var _localctx = new Qualified_table_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, SQLiteParser.RULE_qualified_table_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1426;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 197, this._ctx)) {
                    case 1:
                        {
                            this.state = 1423;
                            this.database_name();
                            this.state = 1424;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 1428;
                this.table_name();
                this.state = 1434;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SQLiteParser.K_INDEXED:
                        {
                            this.state = 1429;
                            this.match(SQLiteParser.K_INDEXED);
                            this.state = 1430;
                            this.match(SQLiteParser.K_BY);
                            this.state = 1431;
                            this.index_name();
                        }
                        break;
                    case SQLiteParser.K_NOT:
                        {
                            this.state = 1432;
                            this.match(SQLiteParser.K_NOT);
                            this.state = 1433;
                            this.match(SQLiteParser.K_INDEXED);
                        }
                        break;
                    case SQLiteParser.EOF:
                    case SQLiteParser.SCOL:
                    case SQLiteParser.K_ALTER:
                    case SQLiteParser.K_ANALYZE:
                    case SQLiteParser.K_ATTACH:
                    case SQLiteParser.K_BEGIN:
                    case SQLiteParser.K_COMMIT:
                    case SQLiteParser.K_CREATE:
                    case SQLiteParser.K_DELETE:
                    case SQLiteParser.K_DETACH:
                    case SQLiteParser.K_DROP:
                    case SQLiteParser.K_END:
                    case SQLiteParser.K_EXPLAIN:
                    case SQLiteParser.K_INSERT:
                    case SQLiteParser.K_LIMIT:
                    case SQLiteParser.K_ORDER:
                    case SQLiteParser.K_PRAGMA:
                    case SQLiteParser.K_REINDEX:
                    case SQLiteParser.K_RELEASE:
                    case SQLiteParser.K_REPLACE:
                    case SQLiteParser.K_ROLLBACK:
                    case SQLiteParser.K_SAVEPOINT:
                    case SQLiteParser.K_SELECT:
                    case SQLiteParser.K_SET:
                    case SQLiteParser.K_UPDATE:
                    case SQLiteParser.K_VACUUM:
                    case SQLiteParser.K_VALUES:
                    case SQLiteParser.K_WHERE:
                    case SQLiteParser.K_WITH:
                    case SQLiteParser.UNEXPECTED_CHAR:
                        break;
                    default:
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
    SQLiteParser.prototype.ordering_term = function () {
        var _localctx = new Ordering_termContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, SQLiteParser.RULE_ordering_term);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1436;
                this.expr(0);
                this.state = 1439;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_COLLATE) {
                    {
                        this.state = 1437;
                        this.match(SQLiteParser.K_COLLATE);
                        this.state = 1438;
                        this.collation_name();
                    }
                }
                this.state = 1442;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.K_ASC || _la === SQLiteParser.K_DESC) {
                    {
                        this.state = 1441;
                        _la = this._input.LA(1);
                        if (!(_la === SQLiteParser.K_ASC || _la === SQLiteParser.K_DESC)) {
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
    SQLiteParser.prototype.pragma_value = function () {
        var _localctx = new Pragma_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, SQLiteParser.RULE_pragma_value);
        try {
            this.state = 1447;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 201, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1444;
                        this.signed_number();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1445;
                        this.name();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1446;
                        this.match(SQLiteParser.STRING_LITERAL);
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
    SQLiteParser.prototype.common_table_expression = function () {
        var _localctx = new Common_table_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, SQLiteParser.RULE_common_table_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1449;
                this.table_name();
                this.state = 1461;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.OPEN_PAR) {
                    {
                        this.state = 1450;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1451;
                        this.column_name();
                        this.state = 1456;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 1452;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 1453;
                                    this.column_name();
                                }
                            }
                            this.state = 1458;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1459;
                        this.match(SQLiteParser.CLOSE_PAR);
                    }
                }
                this.state = 1463;
                this.match(SQLiteParser.K_AS);
                this.state = 1464;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1465;
                this.select_stmt();
                this.state = 1466;
                this.match(SQLiteParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.result_column = function () {
        var _localctx = new Result_columnContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, SQLiteParser.RULE_result_column);
        var _la;
        try {
            this.state = 1480;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 206, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1468;
                        this.match(SQLiteParser.STAR);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1469;
                        this.table_name();
                        this.state = 1470;
                        this.match(SQLiteParser.DOT);
                        this.state = 1471;
                        this.match(SQLiteParser.STAR);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1473;
                        this.expr(0);
                        this.state = 1478;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.K_AS || _la === SQLiteParser.IDENTIFIER || _la === SQLiteParser.STRING_LITERAL) {
                            {
                                this.state = 1475;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === SQLiteParser.K_AS) {
                                    {
                                        this.state = 1474;
                                        this.match(SQLiteParser.K_AS);
                                    }
                                }
                                this.state = 1477;
                                this.column_alias();
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
    SQLiteParser.prototype.table_or_subquery = function () {
        var _localctx = new Table_or_subqueryContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, SQLiteParser.RULE_table_or_subquery);
        var _la;
        try {
            this.state = 1529;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 217, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1485;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 207, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1482;
                                    this.database_name();
                                    this.state = 1483;
                                    this.match(SQLiteParser.DOT);
                                }
                                break;
                        }
                        this.state = 1487;
                        this.table_name();
                        this.state = 1492;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 209, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1489;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 208, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1488;
                                                this.match(SQLiteParser.K_AS);
                                            }
                                            break;
                                    }
                                    this.state = 1491;
                                    this.table_alias();
                                }
                                break;
                        }
                        this.state = 1499;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case SQLiteParser.K_INDEXED:
                                {
                                    this.state = 1494;
                                    this.match(SQLiteParser.K_INDEXED);
                                    this.state = 1495;
                                    this.match(SQLiteParser.K_BY);
                                    this.state = 1496;
                                    this.index_name();
                                }
                                break;
                            case SQLiteParser.K_NOT:
                                {
                                    this.state = 1497;
                                    this.match(SQLiteParser.K_NOT);
                                    this.state = 1498;
                                    this.match(SQLiteParser.K_INDEXED);
                                }
                                break;
                            case SQLiteParser.EOF:
                            case SQLiteParser.SCOL:
                            case SQLiteParser.CLOSE_PAR:
                            case SQLiteParser.COMMA:
                            case SQLiteParser.K_ALTER:
                            case SQLiteParser.K_ANALYZE:
                            case SQLiteParser.K_ATTACH:
                            case SQLiteParser.K_BEGIN:
                            case SQLiteParser.K_COMMIT:
                            case SQLiteParser.K_CREATE:
                            case SQLiteParser.K_CROSS:
                            case SQLiteParser.K_DELETE:
                            case SQLiteParser.K_DETACH:
                            case SQLiteParser.K_DROP:
                            case SQLiteParser.K_END:
                            case SQLiteParser.K_EXCEPT:
                            case SQLiteParser.K_EXPLAIN:
                            case SQLiteParser.K_GROUP:
                            case SQLiteParser.K_INNER:
                            case SQLiteParser.K_INSERT:
                            case SQLiteParser.K_INTERSECT:
                            case SQLiteParser.K_JOIN:
                            case SQLiteParser.K_LEFT:
                            case SQLiteParser.K_LIMIT:
                            case SQLiteParser.K_NATURAL:
                            case SQLiteParser.K_ON:
                            case SQLiteParser.K_ORDER:
                            case SQLiteParser.K_PRAGMA:
                            case SQLiteParser.K_REINDEX:
                            case SQLiteParser.K_RELEASE:
                            case SQLiteParser.K_REPLACE:
                            case SQLiteParser.K_ROLLBACK:
                            case SQLiteParser.K_SAVEPOINT:
                            case SQLiteParser.K_SELECT:
                            case SQLiteParser.K_UNION:
                            case SQLiteParser.K_UPDATE:
                            case SQLiteParser.K_USING:
                            case SQLiteParser.K_VACUUM:
                            case SQLiteParser.K_VALUES:
                            case SQLiteParser.K_WHERE:
                            case SQLiteParser.K_WITH:
                            case SQLiteParser.UNEXPECTED_CHAR:
                                break;
                            default:
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1501;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1511;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 212, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1502;
                                    this.table_or_subquery();
                                    this.state = 1507;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === SQLiteParser.COMMA) {
                                        {
                                            {
                                                this.state = 1503;
                                                this.match(SQLiteParser.COMMA);
                                                this.state = 1504;
                                                this.table_or_subquery();
                                            }
                                        }
                                        this.state = 1509;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1510;
                                    this.join_clause();
                                }
                                break;
                        }
                        this.state = 1513;
                        this.match(SQLiteParser.CLOSE_PAR);
                        this.state = 1518;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 214, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1515;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 213, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1514;
                                                this.match(SQLiteParser.K_AS);
                                            }
                                            break;
                                    }
                                    this.state = 1517;
                                    this.table_alias();
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1520;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1521;
                        this.select_stmt();
                        this.state = 1522;
                        this.match(SQLiteParser.CLOSE_PAR);
                        this.state = 1527;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 216, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1524;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 215, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1523;
                                                this.match(SQLiteParser.K_AS);
                                            }
                                            break;
                                    }
                                    this.state = 1526;
                                    this.table_alias();
                                }
                                break;
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
    SQLiteParser.prototype.join_clause = function () {
        var _localctx = new Join_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, SQLiteParser.RULE_join_clause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1531;
                this.table_or_subquery();
                this.state = 1538;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SQLiteParser.COMMA || _la === SQLiteParser.K_CROSS || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (SQLiteParser.K_INNER - 87)) | (1 << (SQLiteParser.K_JOIN - 87)) | (1 << (SQLiteParser.K_LEFT - 87)) | (1 << (SQLiteParser.K_NATURAL - 87)))) !== 0)) {
                    {
                        {
                            this.state = 1532;
                            this.join_operator();
                            this.state = 1533;
                            this.table_or_subquery();
                            this.state = 1534;
                            this.join_constraint();
                        }
                    }
                    this.state = 1540;
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
    SQLiteParser.prototype.join_operator = function () {
        var _localctx = new Join_operatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, SQLiteParser.RULE_join_operator);
        var _la;
        try {
            this.state = 1554;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SQLiteParser.COMMA:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1541;
                        this.match(SQLiteParser.COMMA);
                    }
                    break;
                case SQLiteParser.K_CROSS:
                case SQLiteParser.K_INNER:
                case SQLiteParser.K_JOIN:
                case SQLiteParser.K_LEFT:
                case SQLiteParser.K_NATURAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1543;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.K_NATURAL) {
                            {
                                this.state = 1542;
                                this.match(SQLiteParser.K_NATURAL);
                            }
                        }
                        this.state = 1551;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case SQLiteParser.K_LEFT:
                                {
                                    this.state = 1545;
                                    this.match(SQLiteParser.K_LEFT);
                                    this.state = 1547;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === SQLiteParser.K_OUTER) {
                                        {
                                            this.state = 1546;
                                            this.match(SQLiteParser.K_OUTER);
                                        }
                                    }
                                }
                                break;
                            case SQLiteParser.K_INNER:
                                {
                                    this.state = 1549;
                                    this.match(SQLiteParser.K_INNER);
                                }
                                break;
                            case SQLiteParser.K_CROSS:
                                {
                                    this.state = 1550;
                                    this.match(SQLiteParser.K_CROSS);
                                }
                                break;
                            case SQLiteParser.K_JOIN:
                                break;
                            default:
                                break;
                        }
                        this.state = 1553;
                        this.match(SQLiteParser.K_JOIN);
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
    SQLiteParser.prototype.join_constraint = function () {
        var _localctx = new Join_constraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, SQLiteParser.RULE_join_constraint);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1570;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SQLiteParser.K_ON:
                        {
                            this.state = 1556;
                            this.match(SQLiteParser.K_ON);
                            this.state = 1557;
                            this.expr(0);
                        }
                        break;
                    case SQLiteParser.K_USING:
                        {
                            this.state = 1558;
                            this.match(SQLiteParser.K_USING);
                            this.state = 1559;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 1560;
                            this.column_name();
                            this.state = 1565;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === SQLiteParser.COMMA) {
                                {
                                    {
                                        this.state = 1561;
                                        this.match(SQLiteParser.COMMA);
                                        this.state = 1562;
                                        this.column_name();
                                    }
                                }
                                this.state = 1567;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1568;
                            this.match(SQLiteParser.CLOSE_PAR);
                        }
                        break;
                    case SQLiteParser.EOF:
                    case SQLiteParser.SCOL:
                    case SQLiteParser.CLOSE_PAR:
                    case SQLiteParser.COMMA:
                    case SQLiteParser.K_ALTER:
                    case SQLiteParser.K_ANALYZE:
                    case SQLiteParser.K_ATTACH:
                    case SQLiteParser.K_BEGIN:
                    case SQLiteParser.K_COMMIT:
                    case SQLiteParser.K_CREATE:
                    case SQLiteParser.K_CROSS:
                    case SQLiteParser.K_DELETE:
                    case SQLiteParser.K_DETACH:
                    case SQLiteParser.K_DROP:
                    case SQLiteParser.K_END:
                    case SQLiteParser.K_EXCEPT:
                    case SQLiteParser.K_EXPLAIN:
                    case SQLiteParser.K_GROUP:
                    case SQLiteParser.K_INNER:
                    case SQLiteParser.K_INSERT:
                    case SQLiteParser.K_INTERSECT:
                    case SQLiteParser.K_JOIN:
                    case SQLiteParser.K_LEFT:
                    case SQLiteParser.K_LIMIT:
                    case SQLiteParser.K_NATURAL:
                    case SQLiteParser.K_ORDER:
                    case SQLiteParser.K_PRAGMA:
                    case SQLiteParser.K_REINDEX:
                    case SQLiteParser.K_RELEASE:
                    case SQLiteParser.K_REPLACE:
                    case SQLiteParser.K_ROLLBACK:
                    case SQLiteParser.K_SAVEPOINT:
                    case SQLiteParser.K_SELECT:
                    case SQLiteParser.K_UNION:
                    case SQLiteParser.K_UPDATE:
                    case SQLiteParser.K_VACUUM:
                    case SQLiteParser.K_VALUES:
                    case SQLiteParser.K_WHERE:
                    case SQLiteParser.K_WITH:
                    case SQLiteParser.UNEXPECTED_CHAR:
                        break;
                    default:
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
    SQLiteParser.prototype.select_core = function () {
        var _localctx = new Select_coreContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, SQLiteParser.RULE_select_core);
        var _la;
        try {
            this.state = 1646;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SQLiteParser.K_SELECT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1572;
                        this.match(SQLiteParser.K_SELECT);
                        this.state = 1574;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 225, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1573;
                                    _la = this._input.LA(1);
                                    if (!(_la === SQLiteParser.K_ALL || _la === SQLiteParser.K_DISTINCT)) {
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
                        this.state = 1576;
                        this.result_column();
                        this.state = 1581;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 1577;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 1578;
                                    this.result_column();
                                }
                            }
                            this.state = 1583;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1596;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.K_FROM) {
                            {
                                this.state = 1584;
                                this.match(SQLiteParser.K_FROM);
                                this.state = 1594;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 228, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1585;
                                            this.table_or_subquery();
                                            this.state = 1590;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === SQLiteParser.COMMA) {
                                                {
                                                    {
                                                        this.state = 1586;
                                                        this.match(SQLiteParser.COMMA);
                                                        this.state = 1587;
                                                        this.table_or_subquery();
                                                    }
                                                }
                                                this.state = 1592;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1593;
                                            this.join_clause();
                                        }
                                        break;
                                }
                            }
                        }
                        this.state = 1600;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.K_WHERE) {
                            {
                                this.state = 1598;
                                this.match(SQLiteParser.K_WHERE);
                                this.state = 1599;
                                this.expr(0);
                            }
                        }
                        this.state = 1616;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.K_GROUP) {
                            {
                                this.state = 1602;
                                this.match(SQLiteParser.K_GROUP);
                                this.state = 1603;
                                this.match(SQLiteParser.K_BY);
                                this.state = 1604;
                                this.expr(0);
                                this.state = 1609;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === SQLiteParser.COMMA) {
                                    {
                                        {
                                            this.state = 1605;
                                            this.match(SQLiteParser.COMMA);
                                            this.state = 1606;
                                            this.expr(0);
                                        }
                                    }
                                    this.state = 1611;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1614;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === SQLiteParser.K_HAVING) {
                                    {
                                        this.state = 1612;
                                        this.match(SQLiteParser.K_HAVING);
                                        this.state = 1613;
                                        this.expr(0);
                                    }
                                }
                            }
                        }
                    }
                    break;
                case SQLiteParser.K_VALUES:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1618;
                        this.match(SQLiteParser.K_VALUES);
                        this.state = 1619;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1620;
                        this.expr(0);
                        this.state = 1625;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 1621;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 1622;
                                    this.expr(0);
                                }
                            }
                            this.state = 1627;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1628;
                        this.match(SQLiteParser.CLOSE_PAR);
                        this.state = 1643;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 1629;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 1630;
                                    this.match(SQLiteParser.OPEN_PAR);
                                    this.state = 1631;
                                    this.expr(0);
                                    this.state = 1636;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === SQLiteParser.COMMA) {
                                        {
                                            {
                                                this.state = 1632;
                                                this.match(SQLiteParser.COMMA);
                                                this.state = 1633;
                                                this.expr(0);
                                            }
                                        }
                                        this.state = 1638;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 1639;
                                    this.match(SQLiteParser.CLOSE_PAR);
                                }
                            }
                            this.state = 1645;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
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
    SQLiteParser.prototype.compound_operator = function () {
        var _localctx = new Compound_operatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, SQLiteParser.RULE_compound_operator);
        try {
            this.state = 1653;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 238, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1648;
                        this.match(SQLiteParser.K_UNION);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1649;
                        this.match(SQLiteParser.K_UNION);
                        this.state = 1650;
                        this.match(SQLiteParser.K_ALL);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1651;
                        this.match(SQLiteParser.K_INTERSECT);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1652;
                        this.match(SQLiteParser.K_EXCEPT);
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
    SQLiteParser.prototype.cte_table_name = function () {
        var _localctx = new Cte_table_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, SQLiteParser.RULE_cte_table_name);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1655;
                this.table_name();
                this.state = 1667;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.OPEN_PAR) {
                    {
                        this.state = 1656;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1657;
                        this.column_name();
                        this.state = 1662;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 1658;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 1659;
                                    this.column_name();
                                }
                            }
                            this.state = 1664;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1665;
                        this.match(SQLiteParser.CLOSE_PAR);
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
    SQLiteParser.prototype.signed_number = function () {
        var _localctx = new Signed_numberContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, SQLiteParser.RULE_signed_number);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1670;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.PLUS || _la === SQLiteParser.MINUS) {
                    {
                        this.state = 1669;
                        _la = this._input.LA(1);
                        if (!(_la === SQLiteParser.PLUS || _la === SQLiteParser.MINUS)) {
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
                this.state = 1672;
                this.match(SQLiteParser.NUMERIC_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.literal_value = function () {
        var _localctx = new Literal_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, SQLiteParser.RULE_literal_value);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1674;
                _la = this._input.LA(1);
                if (!(((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (SQLiteParser.K_CURRENT_DATE - 52)) | (1 << (SQLiteParser.K_CURRENT_TIME - 52)) | (1 << (SQLiteParser.K_CURRENT_TIMESTAMP - 52)))) !== 0) || _la === SQLiteParser.K_NULL || ((((_la - 150)) & ~0x1F) === 0 && ((1 << (_la - 150)) & ((1 << (SQLiteParser.NUMERIC_LITERAL - 150)) | (1 << (SQLiteParser.STRING_LITERAL - 150)) | (1 << (SQLiteParser.BLOB_LITERAL - 150)))) !== 0))) {
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
    SQLiteParser.prototype.unary_operator = function () {
        var _localctx = new Unary_operatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, SQLiteParser.RULE_unary_operator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1676;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SQLiteParser.PLUS) | (1 << SQLiteParser.MINUS) | (1 << SQLiteParser.TILDE))) !== 0) || _la === SQLiteParser.K_NOT)) {
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
    SQLiteParser.prototype.error_message = function () {
        var _localctx = new Error_messageContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, SQLiteParser.RULE_error_message);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1678;
                this.match(SQLiteParser.STRING_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.module_argument = function () {
        var _localctx = new Module_argumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, SQLiteParser.RULE_module_argument);
        try {
            this.state = 1682;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 242, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1680;
                        this.expr(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1681;
                        this.column_def();
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
    SQLiteParser.prototype.column_alias = function () {
        var _localctx = new Column_aliasContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, SQLiteParser.RULE_column_alias);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1684;
                _la = this._input.LA(1);
                if (!(_la === SQLiteParser.IDENTIFIER || _la === SQLiteParser.STRING_LITERAL)) {
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
    SQLiteParser.prototype.keyword = function () {
        var _localctx = new KeywordContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, SQLiteParser.RULE_keyword);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1686;
                _la = this._input.LA(1);
                if (!(((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (SQLiteParser.K_ABORT - 25)) | (1 << (SQLiteParser.K_ACTION - 25)) | (1 << (SQLiteParser.K_ADD - 25)) | (1 << (SQLiteParser.K_AFTER - 25)) | (1 << (SQLiteParser.K_ALL - 25)) | (1 << (SQLiteParser.K_ALTER - 25)) | (1 << (SQLiteParser.K_ANALYZE - 25)) | (1 << (SQLiteParser.K_AND - 25)) | (1 << (SQLiteParser.K_AS - 25)) | (1 << (SQLiteParser.K_ASC - 25)) | (1 << (SQLiteParser.K_ATTACH - 25)) | (1 << (SQLiteParser.K_AUTOINCREMENT - 25)) | (1 << (SQLiteParser.K_BEFORE - 25)) | (1 << (SQLiteParser.K_BEGIN - 25)) | (1 << (SQLiteParser.K_BETWEEN - 25)) | (1 << (SQLiteParser.K_BY - 25)) | (1 << (SQLiteParser.K_CASCADE - 25)) | (1 << (SQLiteParser.K_CASE - 25)) | (1 << (SQLiteParser.K_CAST - 25)) | (1 << (SQLiteParser.K_CHECK - 25)) | (1 << (SQLiteParser.K_COLLATE - 25)) | (1 << (SQLiteParser.K_COLUMN - 25)) | (1 << (SQLiteParser.K_COMMIT - 25)) | (1 << (SQLiteParser.K_CONFLICT - 25)) | (1 << (SQLiteParser.K_CONSTRAINT - 25)) | (1 << (SQLiteParser.K_CREATE - 25)) | (1 << (SQLiteParser.K_CROSS - 25)) | (1 << (SQLiteParser.K_CURRENT_DATE - 25)) | (1 << (SQLiteParser.K_CURRENT_TIME - 25)) | (1 << (SQLiteParser.K_CURRENT_TIMESTAMP - 25)) | (1 << (SQLiteParser.K_DATABASE - 25)) | (1 << (SQLiteParser.K_DEFAULT - 25)))) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (SQLiteParser.K_DEFERRABLE - 57)) | (1 << (SQLiteParser.K_DEFERRED - 57)) | (1 << (SQLiteParser.K_DELETE - 57)) | (1 << (SQLiteParser.K_DESC - 57)) | (1 << (SQLiteParser.K_DETACH - 57)) | (1 << (SQLiteParser.K_DISTINCT - 57)) | (1 << (SQLiteParser.K_DROP - 57)) | (1 << (SQLiteParser.K_EACH - 57)) | (1 << (SQLiteParser.K_ELSE - 57)) | (1 << (SQLiteParser.K_END - 57)) | (1 << (SQLiteParser.K_ESCAPE - 57)) | (1 << (SQLiteParser.K_EXCEPT - 57)) | (1 << (SQLiteParser.K_EXCLUSIVE - 57)) | (1 << (SQLiteParser.K_EXISTS - 57)) | (1 << (SQLiteParser.K_EXPLAIN - 57)) | (1 << (SQLiteParser.K_FAIL - 57)) | (1 << (SQLiteParser.K_FOR - 57)) | (1 << (SQLiteParser.K_FOREIGN - 57)) | (1 << (SQLiteParser.K_FROM - 57)) | (1 << (SQLiteParser.K_FULL - 57)) | (1 << (SQLiteParser.K_GLOB - 57)) | (1 << (SQLiteParser.K_GROUP - 57)) | (1 << (SQLiteParser.K_HAVING - 57)) | (1 << (SQLiteParser.K_IF - 57)) | (1 << (SQLiteParser.K_IGNORE - 57)) | (1 << (SQLiteParser.K_IMMEDIATE - 57)) | (1 << (SQLiteParser.K_IN - 57)) | (1 << (SQLiteParser.K_INDEX - 57)) | (1 << (SQLiteParser.K_INDEXED - 57)) | (1 << (SQLiteParser.K_INITIALLY - 57)) | (1 << (SQLiteParser.K_INNER - 57)) | (1 << (SQLiteParser.K_INSERT - 57)))) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (SQLiteParser.K_INSTEAD - 89)) | (1 << (SQLiteParser.K_INTERSECT - 89)) | (1 << (SQLiteParser.K_INTO - 89)) | (1 << (SQLiteParser.K_IS - 89)) | (1 << (SQLiteParser.K_ISNULL - 89)) | (1 << (SQLiteParser.K_JOIN - 89)) | (1 << (SQLiteParser.K_KEY - 89)) | (1 << (SQLiteParser.K_LEFT - 89)) | (1 << (SQLiteParser.K_LIKE - 89)) | (1 << (SQLiteParser.K_LIMIT - 89)) | (1 << (SQLiteParser.K_MATCH - 89)) | (1 << (SQLiteParser.K_NATURAL - 89)) | (1 << (SQLiteParser.K_NO - 89)) | (1 << (SQLiteParser.K_NOT - 89)) | (1 << (SQLiteParser.K_NOTNULL - 89)) | (1 << (SQLiteParser.K_NULL - 89)) | (1 << (SQLiteParser.K_OF - 89)) | (1 << (SQLiteParser.K_OFFSET - 89)) | (1 << (SQLiteParser.K_ON - 89)) | (1 << (SQLiteParser.K_OR - 89)) | (1 << (SQLiteParser.K_ORDER - 89)) | (1 << (SQLiteParser.K_OUTER - 89)) | (1 << (SQLiteParser.K_PLAN - 89)) | (1 << (SQLiteParser.K_PRAGMA - 89)) | (1 << (SQLiteParser.K_PRIMARY - 89)) | (1 << (SQLiteParser.K_QUERY - 89)) | (1 << (SQLiteParser.K_RAISE - 89)) | (1 << (SQLiteParser.K_RECURSIVE - 89)) | (1 << (SQLiteParser.K_REFERENCES - 89)) | (1 << (SQLiteParser.K_REGEXP - 89)) | (1 << (SQLiteParser.K_REINDEX - 89)) | (1 << (SQLiteParser.K_RELEASE - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (SQLiteParser.K_RENAME - 121)) | (1 << (SQLiteParser.K_REPLACE - 121)) | (1 << (SQLiteParser.K_RESTRICT - 121)) | (1 << (SQLiteParser.K_RIGHT - 121)) | (1 << (SQLiteParser.K_ROLLBACK - 121)) | (1 << (SQLiteParser.K_ROW - 121)) | (1 << (SQLiteParser.K_SAVEPOINT - 121)) | (1 << (SQLiteParser.K_SELECT - 121)) | (1 << (SQLiteParser.K_SET - 121)) | (1 << (SQLiteParser.K_TABLE - 121)) | (1 << (SQLiteParser.K_TEMP - 121)) | (1 << (SQLiteParser.K_TEMPORARY - 121)) | (1 << (SQLiteParser.K_THEN - 121)) | (1 << (SQLiteParser.K_TO - 121)) | (1 << (SQLiteParser.K_TRANSACTION - 121)) | (1 << (SQLiteParser.K_TRIGGER - 121)) | (1 << (SQLiteParser.K_UNION - 121)) | (1 << (SQLiteParser.K_UNIQUE - 121)) | (1 << (SQLiteParser.K_UPDATE - 121)) | (1 << (SQLiteParser.K_USING - 121)) | (1 << (SQLiteParser.K_VACUUM - 121)) | (1 << (SQLiteParser.K_VALUES - 121)) | (1 << (SQLiteParser.K_VIEW - 121)) | (1 << (SQLiteParser.K_VIRTUAL - 121)) | (1 << (SQLiteParser.K_WHEN - 121)) | (1 << (SQLiteParser.K_WHERE - 121)) | (1 << (SQLiteParser.K_WITH - 121)) | (1 << (SQLiteParser.K_WITHOUT - 121)))) !== 0))) {
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
    SQLiteParser.prototype.name = function () {
        var _localctx = new NameContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, SQLiteParser.RULE_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1688;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.function_name = function () {
        var _localctx = new Function_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, SQLiteParser.RULE_function_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1690;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.database_name = function () {
        var _localctx = new Database_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, SQLiteParser.RULE_database_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1692;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.table_name = function () {
        var _localctx = new Table_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, SQLiteParser.RULE_table_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1694;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.table_or_index_name = function () {
        var _localctx = new Table_or_index_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, SQLiteParser.RULE_table_or_index_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1696;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.new_table_name = function () {
        var _localctx = new New_table_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, SQLiteParser.RULE_new_table_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1698;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.column_name = function () {
        var _localctx = new Column_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, SQLiteParser.RULE_column_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1700;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.collation_name = function () {
        var _localctx = new Collation_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, SQLiteParser.RULE_collation_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1702;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.foreign_table = function () {
        var _localctx = new Foreign_tableContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, SQLiteParser.RULE_foreign_table);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1704;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.index_name = function () {
        var _localctx = new Index_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, SQLiteParser.RULE_index_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1706;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.trigger_name = function () {
        var _localctx = new Trigger_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, SQLiteParser.RULE_trigger_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1708;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.view_name = function () {
        var _localctx = new View_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, SQLiteParser.RULE_view_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1710;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.module_name = function () {
        var _localctx = new Module_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, SQLiteParser.RULE_module_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1712;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.pragma_name = function () {
        var _localctx = new Pragma_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, SQLiteParser.RULE_pragma_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1714;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.savepoint_name = function () {
        var _localctx = new Savepoint_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, SQLiteParser.RULE_savepoint_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1716;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.table_alias = function () {
        var _localctx = new Table_aliasContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, SQLiteParser.RULE_table_alias);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1718;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.transaction_name = function () {
        var _localctx = new Transaction_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, SQLiteParser.RULE_transaction_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1720;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    SQLiteParser.prototype.any_name = function () {
        var _localctx = new Any_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, SQLiteParser.RULE_any_name);
        try {
            this.state = 1729;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SQLiteParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1722;
                        this.match(SQLiteParser.IDENTIFIER);
                    }
                    break;
                case SQLiteParser.K_ABORT:
                case SQLiteParser.K_ACTION:
                case SQLiteParser.K_ADD:
                case SQLiteParser.K_AFTER:
                case SQLiteParser.K_ALL:
                case SQLiteParser.K_ALTER:
                case SQLiteParser.K_ANALYZE:
                case SQLiteParser.K_AND:
                case SQLiteParser.K_AS:
                case SQLiteParser.K_ASC:
                case SQLiteParser.K_ATTACH:
                case SQLiteParser.K_AUTOINCREMENT:
                case SQLiteParser.K_BEFORE:
                case SQLiteParser.K_BEGIN:
                case SQLiteParser.K_BETWEEN:
                case SQLiteParser.K_BY:
                case SQLiteParser.K_CASCADE:
                case SQLiteParser.K_CASE:
                case SQLiteParser.K_CAST:
                case SQLiteParser.K_CHECK:
                case SQLiteParser.K_COLLATE:
                case SQLiteParser.K_COLUMN:
                case SQLiteParser.K_COMMIT:
                case SQLiteParser.K_CONFLICT:
                case SQLiteParser.K_CONSTRAINT:
                case SQLiteParser.K_CREATE:
                case SQLiteParser.K_CROSS:
                case SQLiteParser.K_CURRENT_DATE:
                case SQLiteParser.K_CURRENT_TIME:
                case SQLiteParser.K_CURRENT_TIMESTAMP:
                case SQLiteParser.K_DATABASE:
                case SQLiteParser.K_DEFAULT:
                case SQLiteParser.K_DEFERRABLE:
                case SQLiteParser.K_DEFERRED:
                case SQLiteParser.K_DELETE:
                case SQLiteParser.K_DESC:
                case SQLiteParser.K_DETACH:
                case SQLiteParser.K_DISTINCT:
                case SQLiteParser.K_DROP:
                case SQLiteParser.K_EACH:
                case SQLiteParser.K_ELSE:
                case SQLiteParser.K_END:
                case SQLiteParser.K_ESCAPE:
                case SQLiteParser.K_EXCEPT:
                case SQLiteParser.K_EXCLUSIVE:
                case SQLiteParser.K_EXISTS:
                case SQLiteParser.K_EXPLAIN:
                case SQLiteParser.K_FAIL:
                case SQLiteParser.K_FOR:
                case SQLiteParser.K_FOREIGN:
                case SQLiteParser.K_FROM:
                case SQLiteParser.K_FULL:
                case SQLiteParser.K_GLOB:
                case SQLiteParser.K_GROUP:
                case SQLiteParser.K_HAVING:
                case SQLiteParser.K_IF:
                case SQLiteParser.K_IGNORE:
                case SQLiteParser.K_IMMEDIATE:
                case SQLiteParser.K_IN:
                case SQLiteParser.K_INDEX:
                case SQLiteParser.K_INDEXED:
                case SQLiteParser.K_INITIALLY:
                case SQLiteParser.K_INNER:
                case SQLiteParser.K_INSERT:
                case SQLiteParser.K_INSTEAD:
                case SQLiteParser.K_INTERSECT:
                case SQLiteParser.K_INTO:
                case SQLiteParser.K_IS:
                case SQLiteParser.K_ISNULL:
                case SQLiteParser.K_JOIN:
                case SQLiteParser.K_KEY:
                case SQLiteParser.K_LEFT:
                case SQLiteParser.K_LIKE:
                case SQLiteParser.K_LIMIT:
                case SQLiteParser.K_MATCH:
                case SQLiteParser.K_NATURAL:
                case SQLiteParser.K_NO:
                case SQLiteParser.K_NOT:
                case SQLiteParser.K_NOTNULL:
                case SQLiteParser.K_NULL:
                case SQLiteParser.K_OF:
                case SQLiteParser.K_OFFSET:
                case SQLiteParser.K_ON:
                case SQLiteParser.K_OR:
                case SQLiteParser.K_ORDER:
                case SQLiteParser.K_OUTER:
                case SQLiteParser.K_PLAN:
                case SQLiteParser.K_PRAGMA:
                case SQLiteParser.K_PRIMARY:
                case SQLiteParser.K_QUERY:
                case SQLiteParser.K_RAISE:
                case SQLiteParser.K_RECURSIVE:
                case SQLiteParser.K_REFERENCES:
                case SQLiteParser.K_REGEXP:
                case SQLiteParser.K_REINDEX:
                case SQLiteParser.K_RELEASE:
                case SQLiteParser.K_RENAME:
                case SQLiteParser.K_REPLACE:
                case SQLiteParser.K_RESTRICT:
                case SQLiteParser.K_RIGHT:
                case SQLiteParser.K_ROLLBACK:
                case SQLiteParser.K_ROW:
                case SQLiteParser.K_SAVEPOINT:
                case SQLiteParser.K_SELECT:
                case SQLiteParser.K_SET:
                case SQLiteParser.K_TABLE:
                case SQLiteParser.K_TEMP:
                case SQLiteParser.K_TEMPORARY:
                case SQLiteParser.K_THEN:
                case SQLiteParser.K_TO:
                case SQLiteParser.K_TRANSACTION:
                case SQLiteParser.K_TRIGGER:
                case SQLiteParser.K_UNION:
                case SQLiteParser.K_UNIQUE:
                case SQLiteParser.K_UPDATE:
                case SQLiteParser.K_USING:
                case SQLiteParser.K_VACUUM:
                case SQLiteParser.K_VALUES:
                case SQLiteParser.K_VIEW:
                case SQLiteParser.K_VIRTUAL:
                case SQLiteParser.K_WHEN:
                case SQLiteParser.K_WHERE:
                case SQLiteParser.K_WITH:
                case SQLiteParser.K_WITHOUT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1723;
                        this.keyword();
                    }
                    break;
                case SQLiteParser.STRING_LITERAL:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1724;
                        this.match(SQLiteParser.STRING_LITERAL);
                    }
                    break;
                case SQLiteParser.OPEN_PAR:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1725;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1726;
                        this.any_name();
                        this.state = 1727;
                        this.match(SQLiteParser.CLOSE_PAR);
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
    SQLiteParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 39:
                return this.expr_sempred(_localctx, predIndex);
        }
        return true;
    };
    SQLiteParser.prototype.expr_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 20);
            case 1:
                return this.precpred(this._ctx, 19);
            case 2:
                return this.precpred(this._ctx, 18);
            case 3:
                return this.precpred(this._ctx, 17);
            case 4:
                return this.precpred(this._ctx, 16);
            case 5:
                return this.precpred(this._ctx, 15);
            case 6:
                return this.precpred(this._ctx, 14);
            case 7:
                return this.precpred(this._ctx, 13);
            case 8:
                return this.precpred(this._ctx, 6);
            case 9:
                return this.precpred(this._ctx, 5);
            case 10:
                return this.precpred(this._ctx, 9);
            case 11:
                return this.precpred(this._ctx, 8);
            case 12:
                return this.precpred(this._ctx, 7);
            case 13:
                return this.precpred(this._ctx, 4);
        }
        return true;
    };
    Object.defineProperty(SQLiteParser, "_ATN", {
        get: function () {
            if (!SQLiteParser.__ATN) {
                SQLiteParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(SQLiteParser._serializedATN));
            }
            return SQLiteParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    SQLiteParser.SCOL = 1;
    SQLiteParser.DOT = 2;
    SQLiteParser.OPEN_PAR = 3;
    SQLiteParser.CLOSE_PAR = 4;
    SQLiteParser.COMMA = 5;
    SQLiteParser.ASSIGN = 6;
    SQLiteParser.STAR = 7;
    SQLiteParser.PLUS = 8;
    SQLiteParser.MINUS = 9;
    SQLiteParser.TILDE = 10;
    SQLiteParser.PIPE2 = 11;
    SQLiteParser.DIV = 12;
    SQLiteParser.MOD = 13;
    SQLiteParser.LT2 = 14;
    SQLiteParser.GT2 = 15;
    SQLiteParser.AMP = 16;
    SQLiteParser.PIPE = 17;
    SQLiteParser.LT = 18;
    SQLiteParser.LT_EQ = 19;
    SQLiteParser.GT = 20;
    SQLiteParser.GT_EQ = 21;
    SQLiteParser.EQ = 22;
    SQLiteParser.NOT_EQ1 = 23;
    SQLiteParser.NOT_EQ2 = 24;
    SQLiteParser.K_ABORT = 25;
    SQLiteParser.K_ACTION = 26;
    SQLiteParser.K_ADD = 27;
    SQLiteParser.K_AFTER = 28;
    SQLiteParser.K_ALL = 29;
    SQLiteParser.K_ALTER = 30;
    SQLiteParser.K_ANALYZE = 31;
    SQLiteParser.K_AND = 32;
    SQLiteParser.K_AS = 33;
    SQLiteParser.K_ASC = 34;
    SQLiteParser.K_ATTACH = 35;
    SQLiteParser.K_AUTOINCREMENT = 36;
    SQLiteParser.K_BEFORE = 37;
    SQLiteParser.K_BEGIN = 38;
    SQLiteParser.K_BETWEEN = 39;
    SQLiteParser.K_BY = 40;
    SQLiteParser.K_CASCADE = 41;
    SQLiteParser.K_CASE = 42;
    SQLiteParser.K_CAST = 43;
    SQLiteParser.K_CHECK = 44;
    SQLiteParser.K_COLLATE = 45;
    SQLiteParser.K_COLUMN = 46;
    SQLiteParser.K_COMMIT = 47;
    SQLiteParser.K_CONFLICT = 48;
    SQLiteParser.K_CONSTRAINT = 49;
    SQLiteParser.K_CREATE = 50;
    SQLiteParser.K_CROSS = 51;
    SQLiteParser.K_CURRENT_DATE = 52;
    SQLiteParser.K_CURRENT_TIME = 53;
    SQLiteParser.K_CURRENT_TIMESTAMP = 54;
    SQLiteParser.K_DATABASE = 55;
    SQLiteParser.K_DEFAULT = 56;
    SQLiteParser.K_DEFERRABLE = 57;
    SQLiteParser.K_DEFERRED = 58;
    SQLiteParser.K_DELETE = 59;
    SQLiteParser.K_DESC = 60;
    SQLiteParser.K_DETACH = 61;
    SQLiteParser.K_DISTINCT = 62;
    SQLiteParser.K_DROP = 63;
    SQLiteParser.K_EACH = 64;
    SQLiteParser.K_ELSE = 65;
    SQLiteParser.K_END = 66;
    SQLiteParser.K_ESCAPE = 67;
    SQLiteParser.K_EXCEPT = 68;
    SQLiteParser.K_EXCLUSIVE = 69;
    SQLiteParser.K_EXISTS = 70;
    SQLiteParser.K_EXPLAIN = 71;
    SQLiteParser.K_FAIL = 72;
    SQLiteParser.K_FOR = 73;
    SQLiteParser.K_FOREIGN = 74;
    SQLiteParser.K_FROM = 75;
    SQLiteParser.K_FULL = 76;
    SQLiteParser.K_GLOB = 77;
    SQLiteParser.K_GROUP = 78;
    SQLiteParser.K_HAVING = 79;
    SQLiteParser.K_IF = 80;
    SQLiteParser.K_IGNORE = 81;
    SQLiteParser.K_IMMEDIATE = 82;
    SQLiteParser.K_IN = 83;
    SQLiteParser.K_INDEX = 84;
    SQLiteParser.K_INDEXED = 85;
    SQLiteParser.K_INITIALLY = 86;
    SQLiteParser.K_INNER = 87;
    SQLiteParser.K_INSERT = 88;
    SQLiteParser.K_INSTEAD = 89;
    SQLiteParser.K_INTERSECT = 90;
    SQLiteParser.K_INTO = 91;
    SQLiteParser.K_IS = 92;
    SQLiteParser.K_ISNULL = 93;
    SQLiteParser.K_JOIN = 94;
    SQLiteParser.K_KEY = 95;
    SQLiteParser.K_LEFT = 96;
    SQLiteParser.K_LIKE = 97;
    SQLiteParser.K_LIMIT = 98;
    SQLiteParser.K_MATCH = 99;
    SQLiteParser.K_NATURAL = 100;
    SQLiteParser.K_NO = 101;
    SQLiteParser.K_NOT = 102;
    SQLiteParser.K_NOTNULL = 103;
    SQLiteParser.K_NULL = 104;
    SQLiteParser.K_OF = 105;
    SQLiteParser.K_OFFSET = 106;
    SQLiteParser.K_ON = 107;
    SQLiteParser.K_OR = 108;
    SQLiteParser.K_ORDER = 109;
    SQLiteParser.K_OUTER = 110;
    SQLiteParser.K_PLAN = 111;
    SQLiteParser.K_PRAGMA = 112;
    SQLiteParser.K_PRIMARY = 113;
    SQLiteParser.K_QUERY = 114;
    SQLiteParser.K_RAISE = 115;
    SQLiteParser.K_RECURSIVE = 116;
    SQLiteParser.K_REFERENCES = 117;
    SQLiteParser.K_REGEXP = 118;
    SQLiteParser.K_REINDEX = 119;
    SQLiteParser.K_RELEASE = 120;
    SQLiteParser.K_RENAME = 121;
    SQLiteParser.K_REPLACE = 122;
    SQLiteParser.K_RESTRICT = 123;
    SQLiteParser.K_RIGHT = 124;
    SQLiteParser.K_ROLLBACK = 125;
    SQLiteParser.K_ROW = 126;
    SQLiteParser.K_SAVEPOINT = 127;
    SQLiteParser.K_SELECT = 128;
    SQLiteParser.K_SET = 129;
    SQLiteParser.K_TABLE = 130;
    SQLiteParser.K_TEMP = 131;
    SQLiteParser.K_TEMPORARY = 132;
    SQLiteParser.K_THEN = 133;
    SQLiteParser.K_TO = 134;
    SQLiteParser.K_TRANSACTION = 135;
    SQLiteParser.K_TRIGGER = 136;
    SQLiteParser.K_UNION = 137;
    SQLiteParser.K_UNIQUE = 138;
    SQLiteParser.K_UPDATE = 139;
    SQLiteParser.K_USING = 140;
    SQLiteParser.K_VACUUM = 141;
    SQLiteParser.K_VALUES = 142;
    SQLiteParser.K_VIEW = 143;
    SQLiteParser.K_VIRTUAL = 144;
    SQLiteParser.K_WHEN = 145;
    SQLiteParser.K_WHERE = 146;
    SQLiteParser.K_WITH = 147;
    SQLiteParser.K_WITHOUT = 148;
    SQLiteParser.IDENTIFIER = 149;
    SQLiteParser.NUMERIC_LITERAL = 150;
    SQLiteParser.BIND_PARAMETER = 151;
    SQLiteParser.STRING_LITERAL = 152;
    SQLiteParser.BLOB_LITERAL = 153;
    SQLiteParser.SINGLE_LINE_COMMENT = 154;
    SQLiteParser.MULTILINE_COMMENT = 155;
    SQLiteParser.SPACES = 156;
    SQLiteParser.UNEXPECTED_CHAR = 157;
    SQLiteParser.RULE_parse = 0;
    SQLiteParser.RULE_error = 1;
    SQLiteParser.RULE_sql_stmt_list = 2;
    SQLiteParser.RULE_sql_stmt = 3;
    SQLiteParser.RULE_alter_table_stmt = 4;
    SQLiteParser.RULE_analyze_stmt = 5;
    SQLiteParser.RULE_attach_stmt = 6;
    SQLiteParser.RULE_begin_stmt = 7;
    SQLiteParser.RULE_commit_stmt = 8;
    SQLiteParser.RULE_compound_select_stmt = 9;
    SQLiteParser.RULE_create_index_stmt = 10;
    SQLiteParser.RULE_create_table_stmt = 11;
    SQLiteParser.RULE_create_trigger_stmt = 12;
    SQLiteParser.RULE_create_view_stmt = 13;
    SQLiteParser.RULE_create_virtual_table_stmt = 14;
    SQLiteParser.RULE_delete_stmt = 15;
    SQLiteParser.RULE_delete_stmt_limited = 16;
    SQLiteParser.RULE_detach_stmt = 17;
    SQLiteParser.RULE_drop_index_stmt = 18;
    SQLiteParser.RULE_drop_table_stmt = 19;
    SQLiteParser.RULE_drop_trigger_stmt = 20;
    SQLiteParser.RULE_drop_view_stmt = 21;
    SQLiteParser.RULE_factored_select_stmt = 22;
    SQLiteParser.RULE_insert_stmt = 23;
    SQLiteParser.RULE_pragma_stmt = 24;
    SQLiteParser.RULE_reindex_stmt = 25;
    SQLiteParser.RULE_release_stmt = 26;
    SQLiteParser.RULE_rollback_stmt = 27;
    SQLiteParser.RULE_savepoint_stmt = 28;
    SQLiteParser.RULE_simple_select_stmt = 29;
    SQLiteParser.RULE_select_stmt = 30;
    SQLiteParser.RULE_select_or_values = 31;
    SQLiteParser.RULE_update_stmt = 32;
    SQLiteParser.RULE_update_stmt_limited = 33;
    SQLiteParser.RULE_vacuum_stmt = 34;
    SQLiteParser.RULE_column_def = 35;
    SQLiteParser.RULE_type_name = 36;
    SQLiteParser.RULE_column_constraint = 37;
    SQLiteParser.RULE_conflict_clause = 38;
    SQLiteParser.RULE_expr = 39;
    SQLiteParser.RULE_foreign_key_clause = 40;
    SQLiteParser.RULE_raise_function = 41;
    SQLiteParser.RULE_indexed_column = 42;
    SQLiteParser.RULE_table_constraint = 43;
    SQLiteParser.RULE_with_clause = 44;
    SQLiteParser.RULE_qualified_table_name = 45;
    SQLiteParser.RULE_ordering_term = 46;
    SQLiteParser.RULE_pragma_value = 47;
    SQLiteParser.RULE_common_table_expression = 48;
    SQLiteParser.RULE_result_column = 49;
    SQLiteParser.RULE_table_or_subquery = 50;
    SQLiteParser.RULE_join_clause = 51;
    SQLiteParser.RULE_join_operator = 52;
    SQLiteParser.RULE_join_constraint = 53;
    SQLiteParser.RULE_select_core = 54;
    SQLiteParser.RULE_compound_operator = 55;
    SQLiteParser.RULE_cte_table_name = 56;
    SQLiteParser.RULE_signed_number = 57;
    SQLiteParser.RULE_literal_value = 58;
    SQLiteParser.RULE_unary_operator = 59;
    SQLiteParser.RULE_error_message = 60;
    SQLiteParser.RULE_module_argument = 61;
    SQLiteParser.RULE_column_alias = 62;
    SQLiteParser.RULE_keyword = 63;
    SQLiteParser.RULE_name = 64;
    SQLiteParser.RULE_function_name = 65;
    SQLiteParser.RULE_database_name = 66;
    SQLiteParser.RULE_table_name = 67;
    SQLiteParser.RULE_table_or_index_name = 68;
    SQLiteParser.RULE_new_table_name = 69;
    SQLiteParser.RULE_column_name = 70;
    SQLiteParser.RULE_collation_name = 71;
    SQLiteParser.RULE_foreign_table = 72;
    SQLiteParser.RULE_index_name = 73;
    SQLiteParser.RULE_trigger_name = 74;
    SQLiteParser.RULE_view_name = 75;
    SQLiteParser.RULE_module_name = 76;
    SQLiteParser.RULE_pragma_name = 77;
    SQLiteParser.RULE_savepoint_name = 78;
    SQLiteParser.RULE_table_alias = 79;
    SQLiteParser.RULE_transaction_name = 80;
    SQLiteParser.RULE_any_name = 81;
    // tslint:disable:no-trailing-whitespace
    SQLiteParser.ruleNames = [
        "parse", "error", "sql_stmt_list", "sql_stmt", "alter_table_stmt", "analyze_stmt",
        "attach_stmt", "begin_stmt", "commit_stmt", "compound_select_stmt", "create_index_stmt",
        "create_table_stmt", "create_trigger_stmt", "create_view_stmt", "create_virtual_table_stmt",
        "delete_stmt", "delete_stmt_limited", "detach_stmt", "drop_index_stmt",
        "drop_table_stmt", "drop_trigger_stmt", "drop_view_stmt", "factored_select_stmt",
        "insert_stmt", "pragma_stmt", "reindex_stmt", "release_stmt", "rollback_stmt",
        "savepoint_stmt", "simple_select_stmt", "select_stmt", "select_or_values",
        "update_stmt", "update_stmt_limited", "vacuum_stmt", "column_def", "type_name",
        "column_constraint", "conflict_clause", "expr", "foreign_key_clause",
        "raise_function", "indexed_column", "table_constraint", "with_clause",
        "qualified_table_name", "ordering_term", "pragma_value", "common_table_expression",
        "result_column", "table_or_subquery", "join_clause", "join_operator",
        "join_constraint", "select_core", "compound_operator", "cte_table_name",
        "signed_number", "literal_value", "unary_operator", "error_message", "module_argument",
        "column_alias", "keyword", "name", "function_name", "database_name", "table_name",
        "table_or_index_name", "new_table_name", "column_name", "collation_name",
        "foreign_table", "index_name", "trigger_name", "view_name", "module_name",
        "pragma_name", "savepoint_name", "table_alias", "transaction_name", "any_name",
    ];
    SQLiteParser._LITERAL_NAMES = [
        undefined, "';'", "'.'", "'('", "')'", "','", "'='", "'*'", "'+'", "'-'",
        "'~'", "'||'", "'/'", "'%'", "'<<'", "'>>'", "'&'", "'|'", "'<'", "'<='",
        "'>'", "'>='", "'=='", "'!='", "'<>'",
    ];
    SQLiteParser._SYMBOLIC_NAMES = [
        undefined, "SCOL", "DOT", "OPEN_PAR", "CLOSE_PAR", "COMMA", "ASSIGN",
        "STAR", "PLUS", "MINUS", "TILDE", "PIPE2", "DIV", "MOD", "LT2", "GT2",
        "AMP", "PIPE", "LT", "LT_EQ", "GT", "GT_EQ", "EQ", "NOT_EQ1", "NOT_EQ2",
        "K_ABORT", "K_ACTION", "K_ADD", "K_AFTER", "K_ALL", "K_ALTER", "K_ANALYZE",
        "K_AND", "K_AS", "K_ASC", "K_ATTACH", "K_AUTOINCREMENT", "K_BEFORE", "K_BEGIN",
        "K_BETWEEN", "K_BY", "K_CASCADE", "K_CASE", "K_CAST", "K_CHECK", "K_COLLATE",
        "K_COLUMN", "K_COMMIT", "K_CONFLICT", "K_CONSTRAINT", "K_CREATE", "K_CROSS",
        "K_CURRENT_DATE", "K_CURRENT_TIME", "K_CURRENT_TIMESTAMP", "K_DATABASE",
        "K_DEFAULT", "K_DEFERRABLE", "K_DEFERRED", "K_DELETE", "K_DESC", "K_DETACH",
        "K_DISTINCT", "K_DROP", "K_EACH", "K_ELSE", "K_END", "K_ESCAPE", "K_EXCEPT",
        "K_EXCLUSIVE", "K_EXISTS", "K_EXPLAIN", "K_FAIL", "K_FOR", "K_FOREIGN",
        "K_FROM", "K_FULL", "K_GLOB", "K_GROUP", "K_HAVING", "K_IF", "K_IGNORE",
        "K_IMMEDIATE", "K_IN", "K_INDEX", "K_INDEXED", "K_INITIALLY", "K_INNER",
        "K_INSERT", "K_INSTEAD", "K_INTERSECT", "K_INTO", "K_IS", "K_ISNULL",
        "K_JOIN", "K_KEY", "K_LEFT", "K_LIKE", "K_LIMIT", "K_MATCH", "K_NATURAL",
        "K_NO", "K_NOT", "K_NOTNULL", "K_NULL", "K_OF", "K_OFFSET", "K_ON", "K_OR",
        "K_ORDER", "K_OUTER", "K_PLAN", "K_PRAGMA", "K_PRIMARY", "K_QUERY", "K_RAISE",
        "K_RECURSIVE", "K_REFERENCES", "K_REGEXP", "K_REINDEX", "K_RELEASE", "K_RENAME",
        "K_REPLACE", "K_RESTRICT", "K_RIGHT", "K_ROLLBACK", "K_ROW", "K_SAVEPOINT",
        "K_SELECT", "K_SET", "K_TABLE", "K_TEMP", "K_TEMPORARY", "K_THEN", "K_TO",
        "K_TRANSACTION", "K_TRIGGER", "K_UNION", "K_UNIQUE", "K_UPDATE", "K_USING",
        "K_VACUUM", "K_VALUES", "K_VIEW", "K_VIRTUAL", "K_WHEN", "K_WHERE", "K_WITH",
        "K_WITHOUT", "IDENTIFIER", "NUMERIC_LITERAL", "BIND_PARAMETER", "STRING_LITERAL",
        "BLOB_LITERAL", "SINGLE_LINE_COMMENT", "MULTILINE_COMMENT", "SPACES",
        "UNEXPECTED_CHAR",
    ];
    SQLiteParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SQLiteParser._LITERAL_NAMES, SQLiteParser._SYMBOLIC_NAMES, []);
    SQLiteParser._serializedATNSegments = 4;
    SQLiteParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x9F\u06C6\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
        "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
        "\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
        "\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
        "#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
        "+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
        "4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
        "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
        "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
        "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x03\x02\x03\x02\x07\x02\xA9\n\x02" +
        "\f\x02\x0E\x02\xAC\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04" +
        "\x07\x04\xB4\n\x04\f\x04\x0E\x04\xB7\v\x04\x03\x04\x03\x04\x06\x04\xBB" +
        "\n\x04\r\x04\x0E\x04\xBC\x03\x04\x07\x04\xC0\n\x04\f\x04\x0E\x04\xC3\v" +
        "\x04\x03\x04\x07\x04\xC6\n\x04\f\x04\x0E\x04\xC9\v\x04\x03\x05\x03\x05" +
        "\x03\x05\x05\x05\xCE\n\x05\x05\x05\xD0\n\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
        "\x05\xF0\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xF7\n\x06" +
        "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xFF\n\x06\x03" +
        "\x06\x05\x06\u0102\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
        "\x03\x07\x05\x07\u010B\n\x07\x03\b\x03\b\x05\b\u010F\n\b\x03\b\x03\b\x03" +
        "\b\x03\b\x03\t\x03\t\x05\t\u0117\n\t\x03\t\x03\t\x05\t\u011B\n\t\x05\t" +
        "\u011D\n\t\x03\n\x03\n\x03\n\x05\n\u0122\n\n\x05\n\u0124\n\n\x03\v\x03" +
        "\v\x05\v\u0128\n\v\x03\v\x03\v\x03\v\x07\v\u012D\n\v\f\v\x0E\v\u0130\v" +
        "\v\x05\v\u0132\n\v\x03\v\x03\v\x03\v\x05\v\u0137\n\v\x03\v\x03\v\x05\v" +
        "\u013B\n\v\x03\v\x06\v\u013E\n\v\r\v\x0E\v\u013F\x03\v\x03\v\x03\v\x03" +
        "\v\x03\v\x07\v\u0147\n\v\f\v\x0E\v\u014A\v\v\x05\v\u014C\n\v\x03\v\x03" +
        "\v\x03\v\x03\v\x05\v\u0152\n\v\x05\v\u0154\n\v\x03\f\x03\f\x05\f\u0158" +
        "\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u015E\n\f\x03\f\x03\f\x03\f\x05\f\u0163" +
        "\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\u016C\n\f\f\f\x0E" +
        "\f\u016F\v\f\x03\f\x03\f\x03\f\x05\f\u0174\n\f\x03\r\x03\r\x05\r\u0178" +
        "\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u017E\n\r\x03\r\x03\r\x03\r\x05\r\u0183" +
        "\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\u018A\n\r\f\r\x0E\r\u018D\v\r" +
        "\x03\r\x03\r\x07\r\u0191\n\r\f\r\x0E\r\u0194\v\r\x03\r\x03\r\x03\r\x05" +
        "\r\u0199\n\r\x03\r\x03\r\x05\r\u019D\n\r\x03\x0E\x03\x0E\x05\x0E\u01A1" +
        "\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u01A7\n\x0E\x03\x0E\x03" +
        "\x0E\x03\x0E\x05\x0E\u01AC\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
        "\x05\x0E\u01B3\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
        "\x0E\x07\x0E\u01BC\n\x0E\f\x0E\x0E\x0E\u01BF\v\x0E\x05\x0E\u01C1\n\x0E" +
        "\x05\x0E\u01C3\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u01C9\n\x0E" +
        "\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u01CF\n\x0E\x03\x0E\x03\x0E\x05" +
        "\x0E\u01D3\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u01DA" +
        "\n\x0E\x03\x0E\x03\x0E\x06\x0E\u01DE\n\x0E\r\x0E\x0E\x0E\u01DF\x03\x0E" +
        "\x03\x0E\x03\x0F\x03\x0F\x05\x0F\u01E6\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
        "\x0F\x05\x0F\u01EC\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u01F1\n\x0F\x03" +
        "\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
        "\x10\x05\x10\u01FD\n\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0202\n\x10\x03" +
        "\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\u020B\n\x10" +
        "\f\x10\x0E\x10\u020E\v\x10\x03\x10\x03\x10\x05\x10\u0212\n\x10\x03\x11" +
        "\x05\x11\u0215\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u021C" +
        "\n\x11\x03\x12\x05\x12\u021F\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
        "\x12\x05\x12\u0226\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12" +
        "\u022D\n\x12\f\x12\x0E\x12\u0230\v\x12\x05\x12\u0232\n\x12\x03\x12\x03" +
        "\x12\x03\x12\x03\x12\x05\x12\u0238\n\x12\x05\x12\u023A\n\x12\x03\x13\x03" +
        "\x13\x05\x13\u023E\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14" +
        "\x05\x14\u0246\n\x14\x03\x14\x03\x14\x03\x14\x05\x14\u024B\n\x14\x03\x14" +
        "\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0253\n\x15\x03\x15\x03" +
        "\x15\x03\x15\x05\x15\u0258\n\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16" +
        "\x03\x16\x05\x16\u0260\n\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0265\n\x16" +
        "\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u026D\n\x17\x03" +
        "\x17\x03\x17\x03\x17\x05\x17\u0272\n\x17\x03\x17\x03\x17\x03\x18\x03\x18" +
        "\x05\x18\u0278\n\x18\x03\x18\x03\x18\x03\x18\x07\x18\u027D\n\x18\f\x18" +
        "\x0E\x18\u0280\v\x18\x05\x18\u0282\n\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
        "\x07\x18\u0288\n\x18\f\x18\x0E\x18\u028B\v\x18\x03\x18\x03\x18\x03\x18" +
        "\x03\x18\x03\x18\x07\x18\u0292\n\x18\f\x18\x0E\x18\u0295\v\x18\x05\x18" +
        "\u0297\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u029D\n\x18\x05\x18" +
        "\u029F\n\x18\x03\x19\x05\x19\u02A2\n\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
        "\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
        "\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u02B5\n\x19\x03\x19\x03\x19\x03" +
        "\x19\x03\x19\x05\x19\u02BB\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
        "\x07\x19\u02C2\n\x19\f\x19\x0E\x19\u02C5\v\x19\x03\x19\x03\x19\x05\x19" +
        "\u02C9\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u02D0\n\x19" +
        "\f\x19\x0E\x19\u02D3\v\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
        "\x19\x07\x19\u02DB\n\x19\f\x19\x0E\x19\u02DE\v\x19\x03\x19\x03\x19\x07" +
        "\x19\u02E2\n\x19\f\x19\x0E\x19\u02E5\v\x19\x03\x19\x03\x19\x03\x19\x05" +
        "\x19\u02EA\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u02F0\n\x1A\x03" +
        "\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u02F9\n\x1A" +
        "\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0300\n\x1B\x03\x1B\x03" +
        "\x1B\x05\x1B\u0304\n\x1B\x05\x1B\u0306\n\x1B\x03\x1C\x03\x1C\x05\x1C\u030A" +
        "\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0311\n\x1D\x05" +
        "\x1D\u0313\n\x1D\x03\x1D\x03\x1D\x05\x1D\u0317\n\x1D\x03\x1D\x05\x1D\u031A" +
        "\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x05\x1F\u0321\n\x1F\x03" +
        "\x1F\x03\x1F\x03\x1F\x07\x1F\u0326\n\x1F\f\x1F\x0E\x1F\u0329\v\x1F\x05" +
        "\x1F\u032B\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F" +
        "\u0333\n\x1F\f\x1F\x0E\x1F\u0336\v\x1F\x05\x1F\u0338\n\x1F\x03\x1F\x03" +
        "\x1F\x03\x1F\x03\x1F\x05\x1F\u033E\n\x1F\x05\x1F\u0340\n\x1F\x03 \x03" +
        " \x05 \u0344\n \x03 \x03 \x03 \x07 \u0349\n \f \x0E \u034C\v \x05 \u034E" +
        "\n \x03 \x03 \x03 \x03 \x07 \u0354\n \f \x0E \u0357\v \x03 \x03 \x03 " +
        "\x03 \x03 \x07 \u035E\n \f \x0E \u0361\v \x05 \u0363\n \x03 \x03 \x03" +
        " \x03 \x05 \u0369\n \x05 \u036B\n \x03!\x03!\x05!\u036F\n!\x03!\x03!\x03" +
        "!\x07!\u0374\n!\f!\x0E!\u0377\v!\x03!\x03!\x03!\x03!\x07!\u037D\n!\f!" +
        "\x0E!\u0380\v!\x03!\x05!\u0383\n!\x05!\u0385\n!\x03!\x03!\x05!\u0389\n" +
        "!\x03!\x03!\x03!\x03!\x03!\x07!\u0390\n!\f!\x0E!\u0393\v!\x03!\x03!\x05" +
        "!\u0397\n!\x05!\u0399\n!\x03!\x03!\x03!\x03!\x03!\x07!\u03A0\n!\f!\x0E" +
        "!\u03A3\v!\x03!\x03!\x03!\x03!\x03!\x03!\x07!\u03AB\n!\f!\x0E!\u03AE\v" +
        "!\x03!\x03!\x07!\u03B2\n!\f!\x0E!\u03B5\v!\x05!\u03B7\n!\x03\"\x05\"\u03BA" +
        "\n\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"" +
        "\x05\"\u03C7\n\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"" +
        "\x03\"\x07\"\u03D3\n\"\f\"\x0E\"\u03D6\v\"\x03\"\x03\"\x05\"\u03DA\n\"" +
        "\x03#\x05#\u03DD\n#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#" +
        "\x03#\x05#\u03EA\n#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#" +
        "\x07#\u03F6\n#\f#\x0E#\u03F9\v#\x03#\x03#\x05#\u03FD\n#\x03#\x03#\x03" +
        "#\x03#\x03#\x07#\u0404\n#\f#\x0E#\u0407\v#\x05#\u0409\n#\x03#\x03#\x03" +
        "#\x03#\x05#\u040F\n#\x05#\u0411\n#\x03$\x03$\x03%\x03%\x05%\u0417\n%\x03" +
        "%\x07%\u041A\n%\f%\x0E%\u041D\v%\x03&\x06&\u0420\n&\r&\x0E&\u0421\x03" +
        "&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u042E\n&\x03\'\x03" +
        "\'\x05\'\u0432\n\'\x03\'\x03\'\x03\'\x05\'\u0437\n\'\x03\'\x03\'\x05\'" +
        "\u043B\n\'\x03\'\x05\'\u043E\n\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
        "\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u0450\n" +
        "\'\x03\'\x03\'\x03\'\x05\'\u0455\n\'\x03(\x03(\x03(\x05(\u045A\n(\x03" +
        ")\x03)\x03)\x03)\x03)\x03)\x05)\u0462\n)\x03)\x03)\x03)\x05)\u0467\n)" +
        "\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u0470\n)\x03)\x03)\x03)\x07)" +
        "\u0475\n)\f)\x0E)\u0478\v)\x03)\x05)\u047B\n)\x03)\x03)\x03)\x03)\x03" +
        ")\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u048B\n)\x03)\x05" +
        ")\u048E\n)\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u0496\n)\x03)\x03)\x03)" +
        "\x03)\x03)\x06)\u049D\n)\r)\x0E)\u049E\x03)\x03)\x05)\u04A3\n)\x03)\x03" +
        ")\x03)\x05)\u04A8\n)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03" +
        ")\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03" +
        ")\x03)\x03)\x03)\x03)\x05)\u04C6\n)\x03)\x03)\x03)\x03)\x03)\x03)\x03" +
        ")\x03)\x03)\x03)\x05)\u04D2\n)\x03)\x03)\x03)\x05)\u04D7\n)\x03)\x03)" +
        "\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u04E3\n)\x03)\x03)\x03)" +
        "\x03)\x05)\u04E9\n)\x03)\x03)\x03)\x03)\x03)\x05)\u04F0\n)\x03)\x03)\x05" +
        ")\u04F4\n)\x03)\x03)\x03)\x03)\x03)\x03)\x07)\u04FC\n)\f)\x0E)\u04FF\v" +
        ")\x05)\u0501\n)\x03)\x03)\x03)\x03)\x05)\u0507\n)\x03)\x05)\u050A\n)\x07" +
        ")\u050C\n)\f)\x0E)\u050F\v)\x03*\x03*\x03*\x03*\x03*\x03*\x07*\u0517\n" +
        "*\f*\x0E*\u051A\v*\x03*\x03*\x05*\u051E\n*\x03*\x03*\x03*\x03*\x03*\x03" +
        "*\x03*\x03*\x03*\x03*\x05*\u052A\n*\x03*\x03*\x05*\u052E\n*\x07*\u0530" +
        "\n*\f*\x0E*\u0533\v*\x03*\x05*\u0536\n*\x03*\x03*\x03*\x03*\x03*\x05*" +
        "\u053D\n*\x05*\u053F\n*\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u0547\n+\x03" +
        "+\x03+\x03,\x03,\x03,\x05,\u054E\n,\x03,\x05,\u0551\n,\x03-\x03-\x05-" +
        "\u0555\n-\x03-\x03-\x03-\x05-\u055A\n-\x03-\x03-\x03-\x03-\x07-\u0560" +
        "\n-\f-\x0E-\u0563\v-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
        "-\x03-\x03-\x03-\x03-\x07-\u0573\n-\f-\x0E-\u0576\v-\x03-\x03-\x03-\x05" +
        "-\u057B\n-\x03.\x03.\x05.\u057F\n.\x03.\x03.\x03.\x03.\x03.\x03.\x03." +
        "\x03.\x03.\x03.\x03.\x03.\x07.\u058D\n.\f.\x0E.\u0590\v.\x03/\x03/\x03" +
        "/\x05/\u0595\n/\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u059D\n/\x030\x030" +
        "\x030\x050\u05A2\n0\x030\x050\u05A5\n0\x031\x031\x031\x051\u05AA\n1\x03" +
        "2\x032\x032\x032\x032\x072\u05B1\n2\f2\x0E2\u05B4\v2\x032\x032\x052\u05B8" +
        "\n2\x032\x032\x032\x032\x032\x033\x033\x033\x033\x033\x033\x033\x053\u05C6" +
        "\n3\x033\x053\u05C9\n3\x053\u05CB\n3\x034\x034\x034\x054\u05D0\n4\x03" +
        "4\x034\x054\u05D4\n4\x034\x054\u05D7\n4\x034\x034\x034\x034\x034\x054" +
        "\u05DE\n4\x034\x034\x034\x034\x074\u05E4\n4\f4\x0E4\u05E7\v4\x034\x05" +
        "4\u05EA\n4\x034\x034\x054\u05EE\n4\x034\x054\u05F1\n4\x034\x034\x034\x03" +
        "4\x054\u05F7\n4\x034\x054\u05FA\n4\x054\u05FC\n4\x035\x035\x035\x035\x03" +
        "5\x075\u0603\n5\f5\x0E5\u0606\v5\x036\x036\x056\u060A\n6\x036\x036\x05" +
        "6\u060E\n6\x036\x036\x056\u0612\n6\x036\x056\u0615\n6\x037\x037\x037\x03" +
        "7\x037\x037\x037\x077\u061E\n7\f7\x0E7\u0621\v7\x037\x037\x057\u0625\n" +
        "7\x038\x038\x058\u0629\n8\x038\x038\x038\x078\u062E\n8\f8\x0E8\u0631\v" +
        "8\x038\x038\x038\x038\x078\u0637\n8\f8\x0E8\u063A\v8\x038\x058\u063D\n" +
        "8\x058\u063F\n8\x038\x038\x058\u0643\n8\x038\x038\x038\x038\x038\x078" +
        "\u064A\n8\f8\x0E8\u064D\v8\x038\x038\x058\u0651\n8\x058\u0653\n8\x038" +
        "\x038\x038\x038\x038\x078\u065A\n8\f8\x0E8\u065D\v8\x038\x038\x038\x03" +
        "8\x038\x038\x078\u0665\n8\f8\x0E8\u0668\v8\x038\x038\x078\u066C\n8\f8" +
        "\x0E8\u066F\v8\x058\u0671\n8\x039\x039\x039\x039\x039\x059\u0678\n9\x03" +
        ":\x03:\x03:\x03:\x03:\x07:\u067F\n:\f:\x0E:\u0682\v:\x03:\x03:\x05:\u0686" +
        "\n:\x03;\x05;\u0689\n;\x03;\x03;\x03<\x03<\x03=\x03=\x03>\x03>\x03?\x03" +
        "?\x05?\u0695\n?\x03@\x03@\x03A\x03A\x03B\x03B\x03C\x03C\x03D\x03D\x03" +
        "E\x03E\x03F\x03F\x03G\x03G\x03H\x03H\x03I\x03I\x03J\x03J\x03K\x03K\x03" +
        "L\x03L\x03M\x03M\x03N\x03N\x03O\x03O\x03P\x03P\x03Q\x03Q\x03R\x03R\x03" +
        "S\x03S\x03S\x03S\x03S\x03S\x03S\x05S\u06C4\nS\x03S\x02\x02\x03PT\x02\x02" +
        "\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
        "\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02" +
        ".\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
        "J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02" +
        "f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80" +
        "\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92" +
        "\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4" +
        "\x02\x02\x14\x05\x02<<GGTT\x04\x0211DD\x04\x02\x07\x07ll\x03\x02\x85\x86" +
        "\x04\x02\x1F\x1F@@\x04\x02$$>>\x07\x02\x1B\x1BJJSS||\x7F\x7F\x04\x02\t" +
        "\t\x0E\x0F\x03\x02\n\v\x03\x02\x10\x13\x03\x02\x14\x17\x06\x02OOcceex" +
        "x\x04\x02==\x8D\x8D\x05\x02\x1B\x1BJJ\x7F\x7F\x06\x0268jj\x98\x98\x9A" +
        "\x9B\x04\x02\n\fhh\x04\x02\x97\x97\x9A\x9A\x03\x02\x1B\x96\x02\u07D3\x02" +
        "\xAA\x03\x02\x02\x02\x04\xAF\x03\x02\x02\x02\x06\xB5\x03\x02\x02\x02\b" +
        "\xCF\x03\x02\x02\x02\n\xF1\x03\x02\x02\x02\f\u0103\x03\x02\x02\x02\x0E" +
        "\u010C\x03\x02\x02\x02\x10\u0114\x03\x02\x02\x02\x12\u011E\x03\x02\x02" +
        "\x02\x14\u0131\x03\x02\x02\x02\x16\u0155\x03\x02\x02\x02\x18\u0175\x03" +
        "\x02\x02\x02\x1A\u019E\x03\x02\x02\x02\x1C\u01E3\x03\x02\x02\x02\x1E\u01F6" +
        "\x03\x02\x02\x02 \u0214\x03\x02\x02\x02\"\u021E\x03\x02\x02\x02$\u023B" +
        "\x03\x02\x02\x02&\u0241\x03\x02\x02\x02(\u024E\x03\x02\x02\x02*\u025B" +
        "\x03\x02\x02\x02,\u0268\x03\x02\x02\x02.\u0281\x03\x02\x02\x020\u02A1" +
        "\x03\x02\x02\x022\u02EB\x03\x02\x02\x024\u02FA\x03\x02\x02\x026\u0307" +
        "\x03\x02\x02\x028\u030D\x03\x02\x02\x02:\u031B\x03\x02\x02\x02<\u032A" +
        "\x03\x02\x02\x02>\u034D\x03\x02\x02\x02@\u03B6\x03\x02\x02\x02B\u03B9" +
        "\x03\x02\x02\x02D\u03DC\x03\x02\x02\x02F\u0412\x03\x02\x02\x02H\u0414" +
        "\x03\x02\x02\x02J\u041F\x03\x02\x02\x02L\u0431\x03\x02\x02\x02N\u0459" +
        "\x03\x02\x02\x02P\u04A7\x03\x02\x02\x02R\u0510\x03\x02\x02\x02T\u0540" +
        "\x03\x02\x02\x02V\u054A\x03\x02\x02\x02X\u0554\x03\x02\x02\x02Z\u057C" +
        "\x03\x02\x02\x02\\\u0594\x03\x02\x02\x02^\u059E\x03\x02\x02\x02`\u05A9" +
        "\x03\x02\x02\x02b\u05AB\x03\x02\x02\x02d\u05CA\x03\x02\x02\x02f\u05FB" +
        "\x03\x02\x02\x02h\u05FD\x03\x02\x02\x02j\u0614\x03\x02\x02\x02l\u0624" +
        "\x03\x02\x02\x02n\u0670\x03\x02\x02\x02p\u0677\x03\x02\x02\x02r\u0679" +
        "\x03\x02\x02\x02t\u0688\x03\x02\x02\x02v\u068C\x03\x02\x02\x02x\u068E" +
        "\x03\x02\x02\x02z\u0690\x03\x02\x02\x02|\u0694\x03\x02\x02\x02~\u0696" +
        "\x03\x02\x02\x02\x80\u0698\x03\x02\x02\x02\x82\u069A\x03\x02\x02\x02\x84" +
        "\u069C\x03\x02\x02\x02\x86\u069E\x03\x02\x02\x02\x88\u06A0\x03\x02\x02" +
        "\x02\x8A\u06A2\x03\x02\x02\x02\x8C\u06A4\x03\x02\x02\x02\x8E\u06A6\x03" +
        "\x02\x02\x02\x90\u06A8\x03\x02\x02\x02\x92\u06AA\x03\x02\x02\x02\x94\u06AC" +
        "\x03\x02\x02\x02\x96\u06AE\x03\x02\x02\x02\x98\u06B0\x03\x02\x02\x02\x9A" +
        "\u06B2\x03\x02\x02\x02\x9C\u06B4\x03\x02\x02\x02\x9E\u06B6\x03\x02\x02" +
        "\x02\xA0\u06B8\x03\x02\x02\x02\xA2\u06BA\x03\x02\x02\x02\xA4\u06C3\x03" +
        "\x02\x02\x02\xA6\xA9\x05\x06\x04\x02\xA7\xA9\x05\x04\x03\x02\xA8\xA6\x03" +
        "\x02\x02\x02\xA8\xA7\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02\xAA\xA8\x03" +
        "\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAD\x03\x02\x02\x02\xAC\xAA\x03" +
        "\x02\x02\x02\xAD\xAE\x07\x02\x02\x03\xAE\x03\x03\x02\x02\x02\xAF\xB0\x07" +
        "\x9F\x02\x02\xB0\xB1\b\x03\x01\x02\xB1\x05\x03\x02\x02\x02\xB2\xB4\x07" +
        "\x03\x02\x02\xB3\xB2\x03\x02\x02\x02\xB4\xB7\x03\x02\x02\x02\xB5\xB3\x03" +
        "\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB8\x03\x02\x02\x02\xB7\xB5\x03" +
        "\x02\x02\x02\xB8\xC1\x05\b\x05\x02\xB9\xBB\x07\x03\x02\x02\xBA\xB9\x03" +
        "\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBD\x03" +
        "\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xC0\x05\b\x05\x02\xBF\xBA\x03" +
        "\x02\x02\x02\xC0\xC3\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC2\x03" +
        "\x02\x02\x02\xC2\xC7\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC4\xC6\x07" +
        "\x03\x02\x02\xC5\xC4\x03\x02\x02\x02\xC6\xC9\x03\x02\x02\x02\xC7\xC5\x03" +
        "\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\x07\x03\x02\x02\x02\xC9\xC7\x03" +
        "\x02\x02\x02\xCA\xCD\x07I\x02\x02\xCB\xCC\x07t\x02\x02\xCC\xCE\x07q\x02" +
        "\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xD0\x03\x02\x02" +
        "\x02\xCF\xCA\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xEF\x03\x02\x02" +
        "\x02\xD1\xF0\x05\n\x06\x02\xD2\xF0\x05\f\x07\x02\xD3\xF0\x05\x0E\b\x02" +
        "\xD4\xF0\x05\x10\t\x02\xD5\xF0\x05\x12\n\x02\xD6\xF0\x05\x14\v\x02\xD7" +
        "\xF0\x05\x16\f\x02\xD8\xF0\x05\x18\r\x02\xD9\xF0\x05\x1A\x0E\x02\xDA\xF0" +
        "\x05\x1C\x0F\x02\xDB\xF0\x05\x1E\x10\x02\xDC\xF0\x05 \x11\x02\xDD\xF0" +
        "\x05\"\x12\x02\xDE\xF0\x05$\x13\x02\xDF\xF0\x05&\x14\x02\xE0\xF0\x05(" +
        "\x15\x02\xE1\xF0\x05*\x16\x02\xE2\xF0\x05,\x17\x02\xE3\xF0\x05.\x18\x02" +
        "\xE4\xF0\x050\x19\x02\xE5\xF0\x052\x1A\x02\xE6\xF0\x054\x1B\x02\xE7\xF0" +
        "\x056\x1C";
    SQLiteParser._serializedATNSegment1 = "\x02\xE8\xF0\x058\x1D\x02\xE9\xF0\x05:\x1E\x02\xEA\xF0\x05<\x1F\x02\xEB" +
        "\xF0\x05> \x02\xEC\xF0\x05B\"\x02\xED\xF0\x05D#\x02\xEE\xF0\x05F$\x02" +
        "\xEF\xD1\x03\x02\x02\x02\xEF\xD2\x03\x02\x02\x02\xEF\xD3\x03\x02\x02\x02" +
        "\xEF\xD4\x03\x02\x02\x02\xEF\xD5\x03\x02\x02\x02\xEF\xD6\x03\x02\x02\x02" +
        "\xEF\xD7\x03\x02\x02\x02\xEF\xD8\x03\x02\x02\x02\xEF\xD9\x03\x02\x02\x02" +
        "\xEF\xDA\x03\x02\x02\x02\xEF\xDB\x03\x02\x02\x02\xEF\xDC\x03\x02\x02\x02" +
        "\xEF\xDD\x03\x02\x02\x02\xEF\xDE\x03\x02\x02\x02\xEF\xDF\x03\x02\x02\x02" +
        "\xEF\xE0\x03\x02\x02\x02\xEF\xE1\x03\x02\x02\x02\xEF\xE2\x03\x02\x02\x02" +
        "\xEF\xE3\x03\x02\x02\x02\xEF\xE4\x03\x02\x02\x02\xEF\xE5\x03\x02\x02\x02" +
        "\xEF\xE6\x03\x02\x02\x02\xEF\xE7\x03\x02\x02\x02\xEF\xE8\x03\x02\x02\x02" +
        "\xEF\xE9\x03\x02\x02\x02\xEF\xEA\x03\x02\x02\x02\xEF\xEB\x03\x02\x02\x02" +
        "\xEF\xEC\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xEF\xEE\x03\x02\x02\x02" +
        "\xF0\t\x03\x02\x02\x02\xF1\xF2\x07 \x02\x02\xF2\xF6\x07\x84\x02\x02\xF3" +
        "\xF4\x05\x86D\x02\xF4\xF5\x07\x04\x02\x02\xF5\xF7\x03\x02\x02\x02\xF6" +
        "\xF3\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8" +
        "\u0101\x05\x88E\x02\xF9\xFA\x07{\x02\x02\xFA\xFB\x07\x88\x02\x02\xFB\u0102" +
        "\x05\x8CG\x02\xFC\xFE\x07\x1D\x02\x02\xFD\xFF\x070\x02\x02\xFE\xFD\x03" +
        "\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0102" +
        "\x05H%\x02\u0101\xF9\x03\x02\x02\x02\u0101\xFC\x03\x02\x02\x02\u0102\v" +
        "\x03\x02\x02\x02\u0103\u010A\x07!\x02\x02\u0104\u010B\x05\x86D\x02\u0105" +
        "\u010B\x05\x8AF\x02\u0106\u0107\x05\x86D\x02\u0107\u0108\x07\x04\x02\x02" +
        "\u0108\u0109\x05\x8AF\x02\u0109\u010B\x03\x02\x02\x02\u010A\u0104\x03" +
        "\x02\x02\x02\u010A\u0105\x03\x02\x02\x02\u010A\u0106\x03\x02\x02\x02\u010A" +
        "\u010B\x03\x02\x02\x02\u010B\r\x03\x02\x02\x02\u010C\u010E\x07%\x02\x02" +
        "\u010D\u010F\x079\x02\x02\u010E\u010D\x03\x02\x02\x02\u010E\u010F\x03" +
        "\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110\u0111\x05P)\x02\u0111\u0112" +
        "\x07#\x02\x02\u0112\u0113\x05\x86D\x02\u0113\x0F\x03\x02\x02\x02\u0114" +
        "\u0116\x07(\x02\x02\u0115\u0117\t\x02\x02\x02\u0116\u0115\x03\x02\x02" +
        "\x02\u0116\u0117\x03\x02\x02\x02\u0117\u011C\x03\x02\x02\x02\u0118\u011A" +
        "\x07\x89\x02\x02\u0119\u011B\x05\xA2R\x02\u011A\u0119\x03\x02\x02\x02" +
        "\u011A\u011B\x03\x02\x02\x02\u011B\u011D\x03\x02\x02\x02\u011C\u0118\x03" +
        "\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\x11\x03\x02\x02\x02\u011E" +
        "\u0123\t\x03\x02\x02\u011F\u0121\x07\x89\x02\x02\u0120\u0122\x05\xA2R" +
        "\x02\u0121\u0120\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0124" +
        "\x03\x02\x02\x02\u0123\u011F\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02" +
        "\u0124\x13\x03\x02\x02\x02\u0125\u0127\x07\x95\x02\x02\u0126\u0128\x07" +
        "v\x02\x02\u0127\u0126\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128" +
        "\u0129\x03\x02\x02\x02\u0129\u012E\x05b2\x02\u012A\u012B\x07\x07\x02\x02" +
        "\u012B\u012D\x05b2\x02\u012C\u012A\x03\x02\x02\x02\u012D\u0130\x03\x02" +
        "\x02\x02\u012E\u012C\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F" +
        "\u0132\x03\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0131\u0125\x03\x02" +
        "\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133" +
        "\u013D\x05n8\x02\u0134\u0136\x07\x8B\x02\x02\u0135\u0137\x07\x1F\x02\x02" +
        "\u0136\u0135\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u013B\x03" +
        "\x02\x02\x02\u0138\u013B\x07\\\x02\x02\u0139\u013B\x07F\x02\x02\u013A" +
        "\u0134\x03\x02\x02\x02\u013A\u0138\x03\x02\x02\x02\u013A\u0139\x03\x02" +
        "\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013E\x05n8\x02\u013D\u013A" +
        "\x03\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02" +
        "\u013F\u0140\x03\x02\x02\x02\u0140\u014B\x03\x02\x02\x02\u0141\u0142\x07" +
        "o\x02\x02\u0142\u0143\x07*\x02\x02\u0143\u0148\x05^0\x02\u0144\u0145\x07" +
        "\x07\x02\x02\u0145\u0147\x05^0\x02\u0146\u0144\x03\x02\x02\x02\u0147\u014A" +
        "\x03\x02\x02\x02\u0148\u0146\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02" +
        "\u0149\u014C\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014B\u0141\x03" +
        "\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u0153\x03\x02\x02\x02\u014D" +
        "\u014E\x07d\x02\x02\u014E\u0151\x05P)\x02\u014F\u0150\t\x04\x02\x02\u0150" +
        "\u0152\x05P)\x02\u0151\u014F\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02" +
        "\u0152\u0154\x03\x02\x02\x02\u0153\u014D\x03\x02\x02\x02\u0153\u0154\x03" +
        "\x02\x02\x02\u0154\x15\x03\x02\x02\x02\u0155\u0157\x074\x02\x02\u0156" +
        "\u0158\x07\x8C\x02\x02\u0157\u0156\x03\x02\x02\x02\u0157\u0158\x03\x02" +
        "\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u015D\x07V\x02\x02\u015A\u015B" +
        "\x07R\x02\x02\u015B\u015C\x07h\x02\x02\u015C\u015E\x07H\x02\x02\u015D" +
        "\u015A\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u0162\x03\x02" +
        "\x02\x02\u015F\u0160\x05\x86D\x02\u0160\u0161\x07\x04\x02\x02\u0161\u0163" +
        "\x03\x02\x02\x02\u0162\u015F\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02" +
        "\u0163\u0164\x03\x02\x02\x02\u0164\u0165\x05\x94K\x02\u0165\u0166\x07" +
        "m\x02\x02\u0166\u0167\x05\x88E\x02\u0167\u0168\x07\x05\x02\x02\u0168\u016D" +
        "\x05V,\x02\u0169\u016A\x07\x07\x02\x02\u016A\u016C\x05V,\x02\u016B\u0169" +
        "\x03\x02\x02\x02\u016C\u016F\x03\x02\x02\x02\u016D\u016B\x03\x02\x02\x02" +
        "\u016D\u016E\x03\x02\x02\x02\u016E\u0170\x03\x02\x02\x02\u016F\u016D\x03" +
        "\x02\x02\x02\u0170\u0173\x07\x06\x02\x02\u0171\u0172\x07\x94\x02\x02\u0172" +
        "\u0174\x05P)\x02\u0173\u0171\x03\x02\x02\x02\u0173\u0174\x03\x02\x02\x02" +
        "\u0174\x17\x03\x02\x02\x02\u0175\u0177\x074\x02\x02\u0176\u0178\t\x05" +
        "\x02\x02\u0177\u0176\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178" +
        "\u0179\x03\x02\x02\x02\u0179\u017D\x07\x84\x02\x02\u017A\u017B\x07R\x02" +
        "\x02\u017B\u017C\x07h\x02\x02\u017C\u017E\x07H\x02\x02\u017D\u017A\x03" +
        "\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\u0182\x03\x02\x02\x02\u017F" +
        "\u0180\x05\x86D\x02\u0180\u0181\x07\x04\x02\x02\u0181\u0183\x03\x02\x02" +
        "\x02\u0182\u017F\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u0184" +
        "\x03\x02\x02\x02\u0184\u019C\x05\x88E\x02\u0185\u0186\x07\x05\x02\x02" +
        "\u0186\u018B\x05H%\x02\u0187\u0188\x07\x07\x02\x02\u0188\u018A\x05H%\x02" +
        "\u0189\u0187\x03\x02\x02\x02\u018A\u018D\x03\x02\x02\x02\u018B\u0189\x03" +
        "\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\u0192\x03\x02\x02\x02\u018D" +
        "\u018B\x03\x02\x02\x02\u018E\u018F\x07\x07\x02\x02\u018F\u0191\x05X-\x02" +
        "\u0190\u018E\x03\x02\x02\x02\u0191\u0194\x03\x02\x02\x02\u0192\u0190\x03" +
        "\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193\u0195\x03\x02\x02\x02\u0194" +
        "\u0192\x03\x02\x02\x02\u0195\u0198\x07\x06\x02\x02\u0196\u0197\x07\x96" +
        "\x02\x02\u0197\u0199\x07\x97\x02\x02\u0198\u0196\x03\x02\x02\x02\u0198" +
        "\u0199\x03\x02\x02\x02\u0199\u019D\x03\x02\x02\x02\u019A\u019B\x07#\x02" +
        "\x02\u019B\u019D\x05> \x02\u019C\u0185\x03\x02\x02\x02\u019C\u019A\x03" +
        "\x02\x02\x02\u019D\x19\x03\x02\x02\x02\u019E\u01A0\x074\x02\x02\u019F" +
        "\u01A1\t\x05\x02\x02\u01A0\u019F\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02" +
        "\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A6\x07\x8A\x02\x02\u01A3\u01A4" +
        "\x07R\x02\x02\u01A4\u01A5\x07h\x02\x02\u01A5\u01A7\x07H\x02\x02\u01A6" +
        "\u01A3\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01AB\x03\x02" +
        "\x02\x02\u01A8\u01A9\x05\x86D\x02\u01A9\u01AA\x07\x04\x02\x02\u01AA\u01AC" +
        "\x03\x02\x02\x02\u01AB\u01A8\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02" +
        "\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01B2\x05\x96L\x02\u01AE\u01B3\x07" +
        "\'\x02\x02\u01AF\u01B3\x07\x1E\x02\x02\u01B0\u01B1\x07[\x02\x02\u01B1" +
        "\u01B3\x07k\x02\x02\u01B2\u01AE\x03\x02\x02\x02\u01B2\u01AF\x03\x02\x02" +
        "\x02\u01B2\u01B0\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3\u01C2" +
        "\x03\x02\x02\x02\u01B4\u01C3\x07=\x02\x02\u01B5\u01C3\x07Z\x02\x02\u01B6" +
        "\u01C0\x07\x8D\x02\x02\u01B7\u01B8\x07k\x02\x02\u01B8\u01BD\x05\x8EH\x02" +
        "\u01B9\u01BA\x07\x07\x02\x02\u01BA\u01BC\x05\x8EH\x02\u01BB\u01B9\x03" +
        "\x02\x02\x02\u01BC\u01BF\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02\u01BD" +
        "\u01BE\x03\x02\x02\x02\u01BE\u01C1\x03\x02\x02\x02\u01BF\u01BD\x03\x02" +
        "\x02\x02\u01C0\u01B7\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1" +
        "\u01C3\x03\x02\x02\x02\u01C2\u01B4\x03\x02\x02\x02\u01C2\u01B5\x03\x02" +
        "\x02\x02\u01C2\u01B6\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4" +
        "\u01C8\x07m\x02\x02\u01C5\u01C6\x05\x86D\x02\u01C6\u01C7\x07\x04\x02\x02" +
        "\u01C7\u01C9\x03\x02\x02\x02\u01C8\u01C5\x03\x02\x02\x02\u01C8\u01C9\x03" +
        "\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01CE\x05\x88E\x02\u01CB" +
        "\u01CC\x07K\x02\x02\u01CC\u01CD\x07B\x02\x02\u01CD\u01CF\x07\x80\x02\x02" +
        "\u01CE\u01CB\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01D2\x03" +
        "\x02\x02\x02\u01D0\u01D1\x07\x93\x02\x02\u01D1\u01D3\x05P)\x02\u01D2\u01D0" +
        "\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02" +
        "\u01D4\u01DD\x07(\x02\x02\u01D5\u01DA\x05B\"\x02\u01D6\u01DA\x050\x19" +
        "\x02\u01D7\u01DA\x05 \x11\x02\u01D8\u01DA\x05> \x02\u01D9\u01D5\x03\x02" +
        "\x02\x02\u01D9\u01D6\x03\x02\x02\x02\u01D9\u01D7\x03\x02\x02\x02\u01D9" +
        "\u01D8\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DC\x07\x03" +
        "\x02\x02\u01DC\u01DE\x03\x02\x02\x02\u01DD\u01D9\x03\x02\x02\x02\u01DE" +
        "\u01DF\x03\x02\x02\x02\u01DF\u01DD\x03\x02\x02\x02\u01DF\u01E0\x03\x02" +
        "\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1\u01E2\x07D\x02\x02\u01E2\x1B" +
        "\x03\x02\x02\x02\u01E3\u01E5\x074\x02\x02\u01E4\u01E6\t\x05\x02\x02\u01E5" +
        "\u01E4\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01E7\x03\x02" +
        "\x02\x02\u01E7\u01EB\x07\x91\x02\x02\u01E8\u01E9\x07R\x02\x02\u01E9\u01EA" +
        "\x07h\x02\x02\u01EA\u01EC\x07H\x02\x02\u01EB\u01E8\x03\x02\x02\x02\u01EB" +
        "\u01EC\x03\x02\x02\x02\u01EC\u01F0\x03\x02\x02\x02\u01ED\u01EE\x05\x86" +
        "D\x02\u01EE\u01EF\x07\x04\x02\x02\u01EF\u01F1\x03\x02\x02\x02\u01F0\u01ED" +
        "\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02" +
        "\u01F2\u01F3\x05\x98M\x02\u01F3\u01F4\x07#\x02\x02\u01F4\u01F5\x05> \x02" +
        "\u01F5\x1D\x03\x02\x02\x02\u01F6\u01F7\x074\x02\x02\u01F7\u01F8\x07\x92" +
        "\x02\x02\u01F8\u01FC\x07\x84\x02\x02\u01F9\u01FA\x07R\x02\x02\u01FA\u01FB" +
        "\x07h\x02\x02\u01FB\u01FD\x07H\x02\x02\u01FC\u01F9\x03\x02\x02\x02\u01FC" +
        "\u01FD\x03\x02\x02\x02\u01FD\u0201\x03\x02\x02\x02\u01FE\u01FF\x05\x86" +
        "D\x02\u01FF\u0200\x07\x04\x02\x02\u0200\u0202\x03\x02\x02\x02\u0201\u01FE" +
        "\x03\x02\x02\x02\u0201\u0202\x03\x02\x02\x02\u0202\u0203\x03\x02\x02\x02" +
        "\u0203\u0204\x05\x88E\x02\u0204\u0205\x07\x8E\x02\x02\u0205\u0211\x05" +
        "\x9AN\x02\u0206\u0207\x07\x05\x02\x02\u0207\u020C\x05|?\x02\u0208\u0209" +
        "\x07\x07\x02\x02\u0209\u020B\x05|?\x02\u020A\u0208\x03\x02\x02\x02\u020B" +
        "\u020E\x03\x02\x02\x02\u020C\u020A\x03\x02\x02\x02\u020C\u020D\x03\x02" +
        "\x02\x02\u020D\u020F\x03\x02\x02\x02\u020E\u020C\x03\x02\x02\x02\u020F" +
        "\u0210\x07\x06\x02\x02\u0210\u0212\x03\x02\x02\x02\u0211\u0206\x03\x02" +
        "\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212\x1F\x03\x02\x02\x02\u0213\u0215" +
        "\x05Z.\x02\u0214\u0213\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215" +
        "\u0216\x03\x02\x02\x02\u0216\u0217\x07=\x02\x02\u0217\u0218\x07M\x02\x02" +
        "\u0218\u021B\x05\\/\x02\u0219\u021A\x07\x94\x02\x02\u021A\u021C\x05P)" +
        "\x02\u021B\u0219\x03\x02\x02\x02\u021B\u021C\x03\x02\x02\x02\u021C!\x03" +
        "\x02\x02\x02\u021D\u021F\x05Z.\x02\u021E\u021D\x03\x02\x02\x02\u021E\u021F" +
        "\x03\x02\x02\x02\u021F\u0220\x03\x02\x02\x02\u0220\u0221\x07=\x02\x02" +
        "\u0221\u0222\x07M\x02\x02\u0222\u0225\x05\\/\x02\u0223\u0224\x07\x94\x02" +
        "\x02\u0224\u0226\x05P)\x02\u0225\u0223\x03\x02\x02\x02\u0225\u0226\x03" +
        "\x02\x02\x02\u0226\u0239\x03\x02\x02\x02\u0227\u0228\x07o\x02\x02\u0228" +
        "\u0229\x07*\x02\x02\u0229\u022E\x05^0\x02\u022A\u022B\x07\x07\x02\x02" +
        "\u022B\u022D\x05^0\x02\u022C\u022A\x03\x02\x02\x02\u022D\u0230\x03\x02" +
        "\x02\x02\u022E\u022C\x03\x02\x02\x02\u022E\u022F\x03\x02\x02\x02\u022F" +
        "\u0232\x03\x02\x02\x02\u0230\u022E\x03\x02\x02\x02\u0231\u0227\x03\x02" +
        "\x02\x02\u0231\u0232\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233" +
        "\u0234\x07d\x02\x02\u0234\u0237\x05P)\x02\u0235\u0236\t\x04\x02\x02\u0236" +
        "\u0238\x05P)\x02\u0237\u0235\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02" +
        "\u0238\u023A\x03\x02\x02\x02\u0239\u0231\x03\x02\x02\x02\u0239\u023A\x03" +
        "\x02\x02\x02\u023A#\x03\x02\x02\x02\u023B\u023D\x07?\x02\x02\u023C\u023E" +
        "\x079\x02\x02\u023D\u023C\x03\x02\x02\x02\u023D\u023E\x03\x02\x02\x02" +
        "\u023E\u023F\x03\x02\x02\x02\u023F\u0240\x05\x86D\x02\u0240%\x03\x02\x02" +
        "\x02\u0241\u0242\x07A\x02\x02\u0242\u0245\x07V\x02\x02\u0243\u0244\x07" +
        "R\x02\x02\u0244\u0246\x07H\x02\x02\u0245\u0243\x03\x02\x02\x02\u0245\u0246" +
        "\x03\x02\x02\x02\u0246\u024A\x03\x02\x02\x02\u0247\u0248\x05\x86D\x02" +
        "\u0248\u0249\x07\x04\x02\x02\u0249\u024B\x03\x02\x02\x02\u024A\u0247\x03" +
        "\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C" +
        "\u024D\x05\x94K\x02\u024D\'\x03\x02\x02\x02\u024E\u024F\x07A\x02\x02\u024F" +
        "\u0252\x07\x84\x02\x02\u0250\u0251\x07R\x02\x02\u0251\u0253\x07H\x02\x02" +
        "\u0252\u0250\x03\x02\x02\x02\u0252\u0253\x03\x02\x02\x02\u0253\u0257\x03" +
        "\x02\x02\x02\u0254\u0255\x05\x86D\x02\u0255\u0256\x07\x04\x02\x02\u0256" +
        "\u0258\x03\x02\x02\x02\u0257\u0254\x03\x02\x02\x02\u0257\u0258\x03\x02" +
        "\x02\x02\u0258\u0259\x03\x02\x02\x02\u0259\u025A\x05\x88E\x02\u025A)\x03" +
        "\x02\x02\x02\u025B\u025C\x07A\x02\x02\u025C\u025F\x07\x8A\x02\x02\u025D" +
        "\u025E\x07R\x02\x02\u025E\u0260\x07H\x02\x02\u025F\u025D\x03\x02\x02\x02" +
        "\u025F\u0260\x03\x02\x02\x02\u0260\u0264\x03\x02\x02\x02\u0261\u0262\x05" +
        "\x86D\x02\u0262\u0263\x07\x04\x02\x02\u0263\u0265\x03\x02\x02\x02\u0264" +
        "\u0261\x03\x02\x02\x02\u0264\u0265\x03\x02\x02\x02\u0265\u0266\x03\x02" +
        "\x02\x02\u0266\u0267\x05\x96L\x02\u0267+\x03\x02\x02\x02\u0268\u0269\x07" +
        "A\x02\x02\u0269\u026C\x07\x91\x02\x02\u026A\u026B\x07R\x02\x02\u026B\u026D" +
        "\x07H\x02\x02\u026C\u026A\x03\x02\x02\x02\u026C\u026D\x03\x02\x02\x02" +
        "\u026D\u0271\x03\x02\x02\x02\u026E\u026F\x05\x86D\x02\u026F\u0270\x07" +
        "\x04\x02\x02\u0270\u0272\x03\x02\x02\x02\u0271\u026E\x03\x02\x02\x02\u0271" +
        "\u0272\x03\x02\x02\x02\u0272\u0273\x03\x02\x02\x02\u0273\u0274\x05\x98" +
        "M\x02\u0274-\x03\x02\x02\x02\u0275\u0277\x07\x95\x02\x02\u0276\u0278\x07" +
        "v\x02\x02\u0277\u0276\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278" +
        "\u0279\x03\x02\x02\x02\u0279\u027E\x05b2\x02\u027A\u027B\x07\x07\x02\x02" +
        "\u027B\u027D\x05b2\x02\u027C\u027A\x03\x02\x02\x02\u027D\u0280\x03\x02" +
        "\x02\x02\u027E\u027C\x03\x02\x02\x02\u027E\u027F\x03\x02\x02\x02\u027F" +
        "\u0282\x03\x02\x02\x02\u0280\u027E\x03\x02\x02\x02\u0281\u0275\x03\x02" +
        "\x02\x02\u0281\u0282\x03\x02\x02\x02\u0282\u0283\x03\x02\x02\x02\u0283" +
        "\u0289\x05n8\x02\u0284\u0285\x05p9\x02\u0285\u0286\x05n8\x02\u0286\u0288" +
        "\x03\x02\x02\x02\u0287\u0284\x03\x02\x02\x02\u0288\u028B\x03\x02\x02\x02" +
        "\u0289\u0287\x03\x02\x02\x02\u0289\u028A\x03\x02\x02\x02\u028A\u0296\x03" +
        "\x02\x02\x02\u028B\u0289\x03\x02\x02\x02\u028C\u028D\x07o\x02\x02\u028D" +
        "\u028E\x07*\x02\x02\u028E\u0293\x05^0\x02\u028F\u0290\x07\x07\x02\x02" +
        "\u0290\u0292\x05^0\x02\u0291\u028F\x03\x02\x02\x02\u0292\u0295\x03\x02" +
        "\x02\x02\u0293\u0291\x03\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294" +
        "\u0297\x03\x02\x02\x02\u0295\u0293\x03\x02\x02\x02\u0296\u028C\x03\x02" +
        "\x02\x02\u0296\u0297\x03\x02\x02\x02\u0297\u029E\x03\x02\x02\x02\u0298" +
        "\u0299\x07d\x02\x02\u0299\u029C\x05P)\x02\u029A\u029B\t\x04\x02\x02\u029B" +
        "\u029D\x05P)\x02\u029C\u029A\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02" +
        "\u029D\u029F\x03\x02\x02\x02\u029E\u0298\x03\x02\x02\x02\u029E\u029F\x03" +
        "\x02\x02\x02\u029F/\x03\x02\x02\x02\u02A0\u02A2\x05Z.\x02\u02A1\u02A0" +
        "\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2\u02B4\x03\x02\x02\x02" +
        "\u02A3\u02B5\x07Z\x02\x02\u02A4\u02B5\x07|\x02\x02\u02A5\u02A6\x07Z\x02" +
        "\x02\u02A6\u02A7\x07n\x02\x02\u02A7\u02B5\x07|\x02\x02\u02A8\u02A9\x07" +
        "Z\x02\x02\u02A9\u02AA\x07n\x02\x02\u02AA\u02B5\x07\x7F\x02\x02\u02AB\u02AC" +
        "\x07Z\x02\x02\u02AC\u02AD\x07n\x02\x02\u02AD\u02B5\x07\x1B\x02\x02\u02AE" +
        "\u02AF\x07Z\x02\x02\u02AF\u02B0\x07n\x02\x02\u02B0\u02B5\x07J\x02\x02" +
        "\u02B1\u02B2\x07Z\x02\x02\u02B2\u02B3\x07n\x02\x02\u02B3\u02B5\x07S\x02" +
        "\x02\u02B4\u02A3\x03\x02\x02\x02\u02B4\u02A4\x03\x02\x02\x02\u02B4\u02A5" +
        "\x03\x02\x02\x02\u02B4\u02A8\x03\x02\x02\x02\u02B4\u02AB\x03\x02\x02\x02" +
        "\u02B4\u02AE\x03\x02\x02\x02\u02B4\u02B1\x03\x02\x02\x02\u02B5\u02B6\x03" +
        "\x02\x02\x02\u02B6\u02BA\x07]\x02\x02\u02B7\u02B8\x05\x86D\x02\u02B8\u02B9" +
        "\x07\x04\x02\x02\u02B9\u02BB\x03\x02\x02\x02\u02BA\u02B7\x03\x02\x02\x02" +
        "\u02BA\u02BB\x03\x02\x02\x02\u02BB\u02BC\x03\x02\x02\x02\u02BC\u02C8\x05" +
        "\x88E\x02\u02BD\u02BE\x07\x05\x02\x02\u02BE\u02C3\x05\x8EH\x02\u02BF\u02C0" +
        "\x07\x07\x02\x02\u02C0\u02C2\x05\x8EH\x02\u02C1\u02BF\x03\x02\x02\x02" +
        "\u02C2\u02C5\x03\x02\x02\x02\u02C3\u02C1\x03\x02\x02\x02\u02C3\u02C4\x03" +
        "\x02\x02\x02\u02C4\u02C6\x03\x02\x02\x02\u02C5\u02C3\x03\x02\x02\x02\u02C6" +
        "\u02C7\x07\x06\x02\x02\u02C7\u02C9\x03\x02\x02\x02\u02C8\u02BD\x03\x02" +
        "\x02\x02\u02C8\u02C9\x03\x02\x02\x02\u02C9\u02E9\x03\x02\x02\x02\u02CA" +
        "\u02CB\x07\x90\x02\x02\u02CB\u02CC\x07\x05\x02\x02\u02CC\u02D1\x05P)\x02" +
        "\u02CD\u02CE\x07\x07\x02\x02\u02CE\u02D0\x05P)\x02\u02CF\u02CD\x03\x02" +
        "\x02\x02\u02D0\u02D3\x03\x02\x02\x02\u02D1\u02CF\x03\x02\x02\x02\u02D1" +
        "\u02D2\x03\x02\x02\x02\u02D2\u02D4\x03\x02\x02\x02\u02D3\u02D1\x03\x02" +
        "\x02\x02\u02D4\u02E3\x07\x06\x02\x02\u02D5\u02D6\x07\x07\x02\x02\u02D6" +
        "\u02D7\x07\x05\x02\x02\u02D7\u02DC\x05P)\x02\u02D8\u02D9\x07\x07\x02\x02" +
        "\u02D9\u02DB\x05P)\x02\u02DA\u02D8\x03\x02\x02\x02\u02DB\u02DE\x03\x02" +
        "\x02\x02\u02DC\u02DA\x03\x02\x02\x02\u02DC\u02DD\x03\x02\x02\x02\u02DD" +
        "\u02DF\x03\x02\x02\x02\u02DE\u02DC\x03\x02\x02\x02\u02DF\u02E0\x07\x06" +
        "\x02\x02\u02E0\u02E2\x03\x02\x02\x02\u02E1\u02D5\x03\x02\x02\x02\u02E2" +
        "\u02E5\x03\x02\x02\x02\u02E3\u02E1\x03\x02\x02\x02\u02E3\u02E4\x03\x02" +
        "\x02\x02\u02E4\u02EA\x03\x02\x02\x02\u02E5\u02E3\x03\x02\x02\x02\u02E6" +
        "\u02EA\x05> \x02\u02E7\u02E8\x07:\x02\x02\u02E8\u02EA\x07\x90\x02\x02" +
        "\u02E9\u02CA\x03\x02\x02\x02\u02E9\u02E6\x03\x02\x02\x02\u02E9\u02E7\x03" +
        "\x02\x02\x02\u02EA1\x03\x02\x02\x02\u02EB\u02EF\x07r\x02\x02\u02EC\u02ED" +
        "\x05\x86D\x02\u02ED\u02EE\x07\x04\x02\x02\u02EE\u02F0\x03\x02\x02\x02" +
        "\u02EF\u02EC\x03\x02\x02\x02\u02EF\u02F0\x03\x02\x02\x02\u02F0\u02F1\x03" +
        "\x02\x02\x02\u02F1\u02F8\x05\x9CO\x02\u02F2\u02F3\x07\b\x02\x02\u02F3" +
        "\u02F9\x05`1\x02\u02F4\u02F5\x07\x05\x02\x02\u02F5\u02F6\x05`1\x02\u02F6" +
        "\u02F7\x07\x06\x02\x02\u02F7\u02F9\x03\x02\x02\x02\u02F8\u02F2\x03\x02" +
        "\x02\x02\u02F8\u02F4\x03\x02\x02\x02\u02F8\u02F9\x03\x02\x02\x02\u02F9" +
        "3\x03\x02\x02\x02\u02FA\u0305\x07y\x02\x02\u02FB\u0306\x05\x90I\x02\u02FC" +
        "\u02FD\x05\x86D\x02\u02FD\u02FE\x07\x04\x02\x02\u02FE\u0300\x03\x02\x02" +
        "\x02\u02FF\u02FC\x03\x02\x02\x02\u02FF\u0300\x03\x02\x02\x02\u0300\u0303" +
        "\x03\x02\x02\x02\u0301\u0304\x05\x88E\x02\u0302\u0304\x05\x94K\x02\u0303" +
        "\u0301\x03\x02\x02\x02\u0303\u0302\x03\x02\x02\x02\u0304\u0306\x03\x02" +
        "\x02\x02\u0305\u02FB\x03\x02\x02\x02\u0305\u02FF\x03\x02\x02\x02\u0305" +
        "\u0306\x03\x02\x02\x02\u03065\x03\x02\x02\x02\u0307\u0309\x07z\x02\x02" +
        "\u0308\u030A\x07\x81\x02\x02\u0309\u0308\x03\x02\x02\x02\u0309\u030A\x03" +
        "\x02\x02\x02\u030A\u030B\x03\x02\x02\x02\u030B\u030C\x05\x9EP\x02\u030C" +
        "7\x03\x02\x02\x02\u030D\u0312\x07\x7F\x02\x02\u030E\u0310\x07\x89\x02" +
        "\x02\u030F\u0311\x05\xA2R\x02\u0310\u030F\x03\x02\x02\x02\u0310\u0311" +
        "\x03\x02\x02\x02\u0311\u0313\x03\x02\x02\x02\u0312\u030E\x03\x02\x02\x02" +
        "\u0312\u0313\x03\x02\x02\x02\u0313\u0319\x03\x02\x02\x02\u0314\u0316\x07" +
        "\x88\x02\x02\u0315\u0317\x07\x81\x02\x02\u0316\u0315\x03\x02\x02\x02\u0316" +
        "\u0317\x03\x02\x02\x02\u0317\u0318\x03\x02\x02\x02\u0318\u031A\x05\x9E" +
        "P\x02\u0319\u0314\x03\x02\x02\x02\u0319\u031A\x03\x02\x02\x02\u031A9\x03" +
        "\x02\x02\x02\u031B\u031C\x07\x81\x02\x02\u031C\u031D\x05\x9EP\x02\u031D" +
        ";\x03\x02\x02\x02\u031E\u0320\x07\x95\x02\x02\u031F\u0321\x07v\x02\x02" +
        "\u0320\u031F\x03\x02\x02\x02\u0320\u0321\x03\x02\x02\x02\u0321\u0322\x03" +
        "\x02\x02\x02\u0322\u0327\x05b2\x02\u0323\u0324\x07\x07\x02\x02\u0324\u0326" +
        "\x05b2\x02\u0325\u0323\x03\x02\x02\x02\u0326\u0329\x03\x02\x02\x02\u0327" +
        "\u0325\x03\x02\x02\x02\u0327\u0328\x03\x02\x02\x02\u0328\u032B\x03\x02" +
        "\x02\x02\u0329\u0327\x03\x02\x02\x02\u032A\u031E\x03\x02\x02\x02\u032A" +
        "\u032B\x03\x02\x02\x02\u032B\u032C\x03\x02\x02\x02\u032C\u0337\x05n8\x02" +
        "\u032D\u032E\x07o\x02\x02\u032E\u032F\x07*\x02\x02\u032F\u0334\x05^0\x02" +
        "\u0330\u0331\x07\x07\x02\x02\u0331\u0333\x05^0\x02\u0332\u0330\x03\x02" +
        "\x02\x02\u0333\u0336\x03\x02\x02\x02\u0334\u0332\x03\x02\x02\x02\u0334" +
        "\u0335\x03\x02\x02\x02\u0335\u0338\x03\x02\x02\x02\u0336\u0334\x03\x02" +
        "\x02\x02\u0337\u032D\x03\x02\x02\x02\u0337\u0338\x03\x02\x02\x02\u0338" +
        "\u033F\x03\x02\x02\x02\u0339\u033A\x07d\x02\x02\u033A\u033D\x05P)\x02" +
        "\u033B\u033C\t\x04\x02\x02\u033C\u033E\x05P)\x02\u033D\u033B\x03\x02\x02" +
        "\x02\u033D\u033E\x03\x02\x02\x02\u033E\u0340\x03\x02\x02\x02\u033F\u0339" +
        "\x03\x02\x02\x02\u033F\u0340\x03\x02\x02\x02\u0340=\x03\x02\x02\x02\u0341" +
        "\u0343\x07\x95\x02\x02\u0342\u0344\x07v\x02\x02\u0343\u0342\x03\x02\x02" +
        "\x02\u0343\u0344\x03\x02\x02\x02\u0344\u0345\x03\x02\x02\x02\u0345\u034A" +
        "\x05b2\x02\u0346\u0347\x07\x07\x02\x02\u0347\u0349\x05b2\x02\u0348\u0346" +
        "\x03\x02\x02\x02\u0349\u034C\x03\x02\x02\x02\u034A\u0348\x03\x02\x02\x02" +
        "\u034A\u034B\x03\x02\x02\x02\u034B\u034E\x03\x02\x02\x02\u034C\u034A\x03" +
        "\x02\x02\x02\u034D\u0341\x03\x02\x02\x02\u034D\u034E\x03\x02\x02\x02\u034E" +
        "\u034F\x03\x02\x02\x02\u034F\u0355\x05@!\x02\u0350\u0351\x05p9\x02\u0351" +
        "\u0352\x05@!\x02\u0352\u0354\x03\x02\x02\x02\u0353\u0350\x03\x02\x02\x02" +
        "\u0354\u0357\x03\x02\x02\x02\u0355\u0353\x03\x02\x02\x02\u0355\u0356\x03" +
        "\x02\x02\x02\u0356\u0362\x03\x02\x02\x02\u0357\u0355\x03\x02\x02\x02\u0358" +
        "\u0359\x07o\x02\x02\u0359\u035A\x07*\x02\x02\u035A\u035F\x05^0\x02\u035B" +
        "\u035C\x07\x07\x02\x02\u035C\u035E\x05^0\x02\u035D\u035B\x03\x02\x02\x02" +
        "\u035E\u0361\x03\x02\x02\x02\u035F\u035D\x03\x02\x02\x02\u035F\u0360\x03" +
        "\x02\x02\x02\u0360\u0363\x03\x02\x02\x02\u0361\u035F\x03\x02\x02\x02\u0362" +
        "\u0358\x03\x02\x02\x02\u0362\u0363\x03\x02\x02\x02\u0363\u036A\x03\x02" +
        "\x02\x02\u0364\u0365\x07d\x02\x02\u0365\u0368\x05P)\x02\u0366\u0367\t" +
        "\x04\x02\x02\u0367\u0369\x05P)\x02\u0368\u0366\x03\x02\x02\x02\u0368\u0369" +
        "\x03\x02\x02\x02\u0369\u036B\x03\x02\x02\x02\u036A\u0364\x03\x02\x02\x02" +
        "\u036A\u036B\x03\x02\x02\x02\u036B?\x03\x02\x02\x02\u036C\u036E\x07\x82" +
        "\x02\x02\u036D\u036F\t\x06\x02\x02\u036E\u036D\x03\x02\x02\x02\u036E\u036F" +
        "\x03\x02\x02\x02\u036F\u0370\x03\x02\x02\x02\u0370\u0375\x05d3\x02\u0371" +
        "\u0372\x07\x07\x02\x02\u0372\u0374\x05d3\x02\u0373\u0371\x03\x02\x02\x02" +
        "\u0374\u0377\x03\x02\x02\x02\u0375\u0373\x03\x02\x02\x02\u0375\u0376\x03" +
        "\x02\x02\x02\u0376\u0384\x03\x02\x02\x02\u0377\u0375\x03\x02\x02\x02\u0378" +
        "\u0382\x07M\x02\x02\u0379\u037E\x05f4\x02\u037A\u037B\x07\x07\x02\x02" +
        "\u037B\u037D\x05f4\x02\u037C\u037A\x03\x02\x02\x02\u037D\u0380\x03\x02" +
        "\x02\x02\u037E\u037C\x03\x02\x02\x02\u037E\u037F\x03\x02\x02\x02\u037F" +
        "\u0383\x03\x02\x02\x02\u0380\u037E\x03\x02\x02\x02\u0381\u0383\x05h5\x02" +
        "\u0382\u0379\x03\x02\x02\x02\u0382\u0381\x03\x02\x02\x02\u0383\u0385\x03" +
        "\x02\x02\x02\u0384\u0378\x03\x02\x02\x02\u0384\u0385\x03\x02\x02\x02\u0385" +
        "\u0388\x03\x02\x02\x02\u0386\u0387\x07\x94\x02\x02\u0387\u0389\x05P)\x02" +
        "\u0388\u0386\x03\x02\x02\x02\u0388";
    SQLiteParser._serializedATNSegment2 = "\u0389\x03\x02\x02\x02\u0389\u0398\x03\x02\x02\x02\u038A\u038B\x07P\x02" +
        "\x02\u038B\u038C\x07*\x02\x02\u038C\u0391\x05P)\x02\u038D\u038E\x07\x07" +
        "\x02\x02\u038E\u0390\x05P)\x02\u038F\u038D\x03\x02\x02\x02\u0390\u0393" +
        "\x03\x02\x02\x02\u0391\u038F\x03\x02\x02\x02\u0391\u0392\x03\x02\x02\x02" +
        "\u0392\u0396\x03\x02\x02\x02\u0393\u0391\x03\x02\x02\x02\u0394\u0395\x07" +
        "Q\x02\x02\u0395\u0397\x05P)\x02\u0396\u0394\x03\x02\x02\x02\u0396\u0397" +
        "\x03\x02\x02\x02\u0397\u0399\x03\x02\x02\x02\u0398\u038A\x03\x02\x02\x02" +
        "\u0398\u0399\x03\x02\x02\x02\u0399\u03B7\x03\x02\x02\x02\u039A\u039B\x07" +
        "\x90\x02\x02\u039B\u039C\x07\x05\x02\x02\u039C\u03A1\x05P)\x02\u039D\u039E" +
        "\x07\x07\x02\x02\u039E\u03A0\x05P)\x02\u039F\u039D\x03\x02\x02\x02\u03A0" +
        "\u03A3\x03\x02\x02\x02\u03A1\u039F\x03\x02\x02\x02\u03A1\u03A2\x03\x02" +
        "\x02\x02\u03A2\u03A4\x03\x02\x02\x02\u03A3\u03A1\x03\x02\x02\x02\u03A4" +
        "\u03B3\x07\x06\x02\x02\u03A5\u03A6\x07\x07\x02\x02\u03A6\u03A7\x07\x05" +
        "\x02\x02\u03A7\u03AC\x05P)\x02\u03A8\u03A9\x07\x07\x02\x02\u03A9\u03AB" +
        "\x05P)\x02\u03AA\u03A8\x03\x02\x02\x02\u03AB\u03AE\x03\x02\x02\x02\u03AC" +
        "\u03AA\x03\x02\x02\x02\u03AC\u03AD\x03\x02\x02\x02\u03AD\u03AF\x03\x02" +
        "\x02\x02\u03AE\u03AC\x03\x02\x02\x02\u03AF\u03B0\x07\x06\x02\x02\u03B0" +
        "\u03B2\x03\x02\x02\x02\u03B1\u03A5\x03\x02\x02\x02\u03B2\u03B5\x03\x02" +
        "\x02\x02\u03B3\u03B1\x03\x02\x02\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4" +
        "\u03B7\x03\x02\x02\x02\u03B5\u03B3\x03\x02\x02\x02\u03B6\u036C\x03\x02" +
        "\x02\x02\u03B6\u039A\x03\x02\x02\x02\u03B7A\x03\x02\x02\x02\u03B8\u03BA" +
        "\x05Z.\x02\u03B9\u03B8\x03\x02\x02\x02\u03B9\u03BA\x03\x02\x02\x02\u03BA" +
        "\u03BB\x03\x02\x02\x02\u03BB\u03C6\x07\x8D\x02\x02\u03BC\u03BD\x07n\x02" +
        "\x02\u03BD\u03C7\x07\x7F\x02\x02\u03BE\u03BF\x07n\x02\x02\u03BF\u03C7" +
        "\x07\x1B\x02\x02\u03C0\u03C1\x07n\x02\x02\u03C1\u03C7\x07|\x02\x02\u03C2" +
        "\u03C3\x07n\x02\x02\u03C3\u03C7\x07J\x02\x02\u03C4\u03C5\x07n\x02\x02" +
        "\u03C5\u03C7\x07S\x02\x02\u03C6\u03BC\x03\x02\x02\x02\u03C6\u03BE\x03" +
        "\x02\x02\x02\u03C6\u03C0\x03\x02\x02\x02\u03C6\u03C2\x03\x02\x02\x02\u03C6" +
        "\u03C4\x03\x02\x02\x02\u03C6\u03C7\x03\x02\x02\x02\u03C7\u03C8\x03\x02" +
        "\x02\x02\u03C8\u03C9\x05\\/\x02\u03C9\u03CA\x07\x83\x02\x02\u03CA\u03CB" +
        "\x05\x8EH\x02\u03CB\u03CC\x07\b\x02\x02\u03CC\u03D4\x05P)\x02\u03CD\u03CE" +
        "\x07\x07\x02\x02\u03CE\u03CF\x05\x8EH\x02\u03CF\u03D0\x07\b\x02\x02\u03D0" +
        "\u03D1\x05P)\x02\u03D1\u03D3\x03\x02\x02\x02\u03D2\u03CD\x03\x02\x02\x02" +
        "\u03D3\u03D6\x03\x02\x02\x02\u03D4\u03D2\x03\x02\x02\x02\u03D4\u03D5\x03" +
        "\x02\x02\x02\u03D5\u03D9\x03\x02\x02\x02\u03D6\u03D4\x03\x02\x02\x02\u03D7" +
        "\u03D8\x07\x94\x02\x02\u03D8\u03DA\x05P)\x02\u03D9\u03D7\x03\x02\x02\x02" +
        "\u03D9\u03DA\x03\x02\x02\x02\u03DAC\x03\x02\x02\x02\u03DB\u03DD\x05Z." +
        "\x02\u03DC\u03DB\x03\x02\x02\x02\u03DC\u03DD\x03\x02\x02\x02\u03DD\u03DE" +
        "\x03\x02\x02\x02\u03DE\u03E9\x07\x8D\x02\x02\u03DF\u03E0\x07n\x02\x02" +
        "\u03E0\u03EA\x07\x7F\x02\x02\u03E1\u03E2\x07n\x02\x02\u03E2\u03EA\x07" +
        "\x1B\x02\x02\u03E3\u03E4\x07n\x02\x02\u03E4\u03EA\x07|\x02\x02\u03E5\u03E6" +
        "\x07n\x02\x02\u03E6\u03EA\x07J\x02\x02\u03E7\u03E8\x07n\x02\x02\u03E8" +
        "\u03EA\x07S\x02\x02\u03E9\u03DF\x03\x02\x02\x02\u03E9\u03E1\x03\x02\x02" +
        "\x02\u03E9\u03E3\x03\x02\x02\x02\u03E9\u03E5\x03\x02\x02\x02\u03E9\u03E7" +
        "\x03\x02\x02\x02\u03E9\u03EA\x03\x02\x02\x02\u03EA\u03EB\x03\x02\x02\x02" +
        "\u03EB\u03EC\x05\\/\x02\u03EC\u03ED\x07\x83\x02\x02\u03ED\u03EE\x05\x8E" +
        "H\x02\u03EE\u03EF\x07\b\x02\x02\u03EF\u03F7\x05P)\x02\u03F0\u03F1\x07" +
        "\x07\x02\x02\u03F1\u03F2\x05\x8EH\x02\u03F2\u03F3\x07\b\x02\x02\u03F3" +
        "\u03F4\x05P)\x02\u03F4\u03F6\x03\x02\x02\x02\u03F5\u03F0\x03\x02\x02\x02" +
        "\u03F6\u03F9\x03\x02\x02\x02\u03F7\u03F5\x03\x02\x02\x02\u03F7\u03F8\x03" +
        "\x02\x02\x02\u03F8\u03FC\x03\x02\x02\x02\u03F9\u03F7\x03\x02\x02\x02\u03FA" +
        "\u03FB\x07\x94\x02\x02\u03FB\u03FD\x05P)\x02\u03FC\u03FA\x03\x02\x02\x02" +
        "\u03FC\u03FD\x03\x02\x02\x02\u03FD\u0410\x03\x02\x02\x02\u03FE\u03FF\x07" +
        "o\x02\x02\u03FF\u0400\x07*\x02\x02\u0400\u0405\x05^0\x02\u0401\u0402\x07" +
        "\x07\x02\x02\u0402\u0404\x05^0\x02\u0403\u0401\x03\x02\x02\x02\u0404\u0407" +
        "\x03\x02\x02\x02\u0405\u0403\x03\x02\x02\x02\u0405\u0406\x03\x02\x02\x02" +
        "\u0406\u0409\x03\x02\x02\x02\u0407\u0405\x03\x02\x02\x02\u0408\u03FE\x03" +
        "\x02\x02\x02\u0408\u0409\x03\x02\x02\x02\u0409\u040A\x03\x02\x02\x02\u040A" +
        "\u040B\x07d\x02\x02\u040B\u040E\x05P)\x02\u040C\u040D\t\x04\x02\x02\u040D" +
        "\u040F\x05P)\x02\u040E\u040C\x03\x02\x02\x02\u040E\u040F\x03\x02\x02\x02" +
        "\u040F\u0411\x03\x02\x02\x02\u0410\u0408\x03\x02\x02\x02\u0410\u0411\x03" +
        "\x02\x02\x02\u0411E\x03\x02\x02\x02\u0412\u0413\x07\x8F\x02\x02\u0413" +
        "G\x03\x02\x02\x02\u0414\u0416\x05\x8EH\x02\u0415\u0417\x05J&\x02\u0416" +
        "\u0415\x03\x02\x02\x02\u0416\u0417\x03\x02\x02\x02\u0417\u041B\x03\x02" +
        "\x02\x02\u0418\u041A\x05L\'\x02\u0419\u0418\x03\x02\x02\x02\u041A\u041D" +
        "\x03\x02\x02\x02\u041B\u0419\x03\x02\x02\x02\u041B\u041C\x03\x02\x02\x02" +
        "\u041CI\x03\x02\x02\x02\u041D\u041B\x03\x02\x02\x02\u041E\u0420\x05\x82" +
        "B\x02\u041F\u041E\x03\x02\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421\u041F" +
        "\x03\x02\x02\x02\u0421\u0422\x03\x02\x02\x02\u0422\u042D\x03\x02\x02\x02" +
        "\u0423\u0424\x07\x05\x02\x02\u0424\u0425\x05t;\x02\u0425\u0426\x07\x06" +
        "\x02\x02\u0426\u042E\x03\x02\x02\x02\u0427\u0428\x07\x05\x02\x02\u0428" +
        "\u0429\x05t;\x02\u0429\u042A\x07\x07\x02\x02\u042A\u042B\x05t;\x02\u042B" +
        "\u042C\x07\x06\x02\x02\u042C\u042E\x03\x02\x02\x02\u042D\u0423\x03\x02" +
        "\x02\x02\u042D\u0427\x03\x02\x02\x02\u042D\u042E\x03\x02\x02\x02\u042E" +
        "K\x03\x02\x02\x02\u042F\u0430\x073\x02\x02\u0430\u0432\x05\x82B\x02\u0431" +
        "\u042F\x03\x02\x02\x02\u0431\u0432\x03\x02\x02\x02\u0432\u0454\x03\x02" +
        "\x02\x02\u0433\u0434\x07s\x02\x02\u0434\u0436\x07a\x02\x02\u0435\u0437" +
        "\t\x07\x02\x02\u0436\u0435\x03\x02\x02\x02\u0436\u0437\x03\x02\x02\x02" +
        "\u0437\u0438\x03\x02\x02\x02\u0438\u043A\x05N(\x02\u0439\u043B\x07&\x02" +
        "\x02\u043A\u0439\x03\x02\x02\x02\u043A\u043B\x03\x02\x02\x02\u043B\u0455" +
        "\x03\x02\x02\x02\u043C\u043E\x07h\x02\x02\u043D\u043C\x03\x02\x02\x02" +
        "\u043D\u043E\x03\x02\x02\x02\u043E\u043F\x03\x02\x02\x02\u043F\u0440\x07" +
        "j\x02\x02\u0440\u0455\x05N(\x02\u0441\u0442\x07\x8C\x02\x02\u0442\u0455" +
        "\x05N(\x02\u0443\u0444\x07.\x02\x02\u0444\u0445\x07\x05\x02\x02\u0445" +
        "\u0446\x05P)\x02\u0446\u0447\x07\x06\x02\x02\u0447\u0455\x03\x02\x02\x02" +
        "\u0448\u044F\x07:\x02\x02\u0449\u0450\x05t;\x02\u044A\u0450\x05v<\x02" +
        "\u044B\u044C\x07\x05\x02\x02\u044C\u044D\x05P)\x02\u044D\u044E\x07\x06" +
        "\x02\x02\u044E\u0450\x03\x02\x02\x02\u044F\u0449\x03\x02\x02\x02\u044F" +
        "\u044A\x03\x02\x02\x02\u044F\u044B\x03\x02\x02\x02\u0450\u0455\x03\x02" +
        "\x02\x02\u0451\u0452\x07/\x02\x02\u0452\u0455\x05\x90I\x02\u0453\u0455" +
        "\x05R*\x02\u0454\u0433\x03\x02\x02\x02\u0454\u043D\x03\x02\x02\x02\u0454" +
        "\u0441\x03\x02\x02\x02\u0454\u0443\x03\x02\x02\x02\u0454\u0448\x03\x02" +
        "\x02\x02\u0454\u0451\x03\x02\x02\x02\u0454\u0453\x03\x02\x02\x02\u0455" +
        "M\x03\x02\x02\x02\u0456\u0457\x07m\x02\x02\u0457\u0458\x072\x02\x02\u0458" +
        "\u045A\t\b\x02\x02\u0459\u0456\x03\x02\x02\x02\u0459\u045A\x03\x02\x02" +
        "\x02\u045AO\x03\x02\x02\x02\u045B\u045C\b)\x01\x02\u045C\u04A8\x05v<\x02" +
        "\u045D\u04A8\x07\x99\x02\x02\u045E\u045F\x05\x86D\x02\u045F\u0460\x07" +
        "\x04\x02\x02\u0460\u0462\x03\x02\x02\x02\u0461\u045E\x03\x02\x02\x02\u0461" +
        "\u0462\x03\x02\x02\x02\u0462\u0463\x03\x02\x02\x02\u0463\u0464\x05\x88" +
        "E\x02\u0464\u0465\x07\x04\x02\x02\u0465\u0467\x03\x02\x02\x02\u0466\u0461" +
        "\x03\x02\x02\x02\u0466\u0467\x03\x02\x02\x02\u0467\u0468\x03\x02\x02\x02" +
        "\u0468\u04A8\x05\x8EH\x02\u0469\u046A\x05x=\x02\u046A\u046B\x05P)\x17" +
        "\u046B\u04A8\x03\x02\x02\x02\u046C\u046D\x05\x84C\x02\u046D\u047A\x07" +
        "\x05\x02\x02\u046E\u0470\x07@\x02\x02\u046F\u046E\x03\x02\x02\x02\u046F" +
        "\u0470\x03\x02\x02\x02\u0470\u0471\x03\x02\x02\x02\u0471\u0476\x05P)\x02" +
        "\u0472\u0473\x07\x07\x02\x02\u0473\u0475\x05P)\x02\u0474\u0472\x03\x02" +
        "\x02\x02\u0475\u0478\x03\x02\x02\x02\u0476\u0474\x03\x02\x02\x02\u0476" +
        "\u0477\x03\x02\x02\x02\u0477\u047B\x03\x02\x02\x02\u0478\u0476\x03\x02" +
        "\x02\x02\u0479\u047B\x07\t\x02\x02\u047A\u046F\x03\x02\x02\x02\u047A\u0479" +
        "\x03\x02\x02\x02\u047A\u047B\x03\x02\x02\x02\u047B\u047C\x03\x02\x02\x02" +
        "\u047C\u047D\x07\x06\x02\x02\u047D\u04A8\x03\x02\x02\x02\u047E\u047F\x07" +
        "\x05\x02\x02\u047F\u0480\x05P)\x02\u0480\u0481\x07\x06\x02\x02\u0481\u04A8" +
        "\x03\x02\x02\x02\u0482\u0483\x07-\x02\x02\u0483\u0484\x07\x05\x02\x02" +
        "\u0484\u0485\x05P)\x02\u0485\u0486\x07#\x02\x02\u0486\u0487\x05J&\x02" +
        "\u0487\u0488\x07\x06\x02\x02\u0488\u04A8\x03\x02\x02\x02\u0489\u048B\x07" +
        "h\x02\x02\u048A\u0489\x03\x02\x02\x02\u048A\u048B\x03\x02\x02\x02\u048B" +
        "\u048C\x03\x02\x02\x02\u048C\u048E\x07H\x02\x02\u048D\u048A\x03\x02\x02" +
        "\x02\u048D\u048E\x03\x02\x02\x02\u048E\u048F\x03\x02\x02\x02\u048F\u0490" +
        "\x07\x05\x02\x02\u0490\u0491\x05> \x02\u0491\u0492\x07\x06\x02\x02\u0492" +
        "\u04A8\x03\x02\x02\x02\u0493\u0495\x07,\x02\x02\u0494\u0496\x05P)\x02" +
        "\u0495\u0494\x03\x02\x02\x02\u0495\u0496\x03\x02\x02\x02\u0496\u049C\x03" +
        "\x02\x02\x02\u0497\u0498\x07\x93\x02\x02\u0498\u0499\x05P)\x02\u0499\u049A" +
        "\x07\x87\x02\x02\u049A\u049B\x05P)\x02\u049B\u049D\x03\x02\x02\x02\u049C" +
        "\u0497\x03\x02\x02\x02\u049D\u049E\x03\x02\x02\x02\u049E\u049C\x03\x02" +
        "\x02\x02\u049E\u049F\x03\x02\x02\x02\u049F\u04A2\x03\x02\x02\x02\u04A0" +
        "\u04A1\x07C\x02\x02\u04A1\u04A3\x05P)\x02\u04A2\u04A0\x03\x02\x02\x02" +
        "\u04A2\u04A3\x03\x02\x02\x02\u04A3\u04A4\x03\x02\x02\x02\u04A4\u04A5\x07" +
        "D\x02\x02\u04A5\u04A8\x03\x02\x02\x02\u04A6\u04A8\x05T+\x02\u04A7\u045B" +
        "\x03\x02\x02\x02\u04A7\u045D\x03\x02\x02\x02\u04A7\u0466\x03\x02\x02\x02" +
        "\u04A7\u0469\x03\x02\x02\x02\u04A7\u046C\x03\x02\x02\x02\u04A7\u047E\x03" +
        "\x02\x02\x02\u04A7\u0482\x03\x02\x02\x02\u04A7\u048D\x03\x02\x02\x02\u04A7" +
        "\u0493\x03\x02\x02\x02\u04A7\u04A6\x03\x02\x02\x02\u04A8\u050D\x03\x02" +
        "\x02\x02\u04A9\u04AA\f\x16\x02\x02\u04AA\u04AB\x07\r\x02\x02\u04AB\u050C" +
        "\x05P)\x17\u04AC\u04AD\f\x15\x02\x02\u04AD\u04AE\t\t\x02\x02\u04AE\u050C" +
        "\x05P)\x16\u04AF\u04B0\f\x14\x02\x02\u04B0\u04B1\t\n\x02\x02\u04B1\u050C" +
        "\x05P)\x15\u04B2\u04B3\f\x13\x02\x02\u04B3\u04B4\t\v\x02\x02\u04B4\u050C" +
        "\x05P)\x14\u04B5\u04B6\f\x12\x02\x02\u04B6\u04B7\t\f\x02\x02\u04B7\u050C" +
        "\x05P)\x13\u04B8\u04C5\f\x11\x02\x02\u04B9\u04C6\x07\b\x02\x02\u04BA\u04C6" +
        "\x07\x18\x02\x02\u04BB\u04C6\x07\x19\x02\x02\u04BC\u04C6\x07\x1A\x02\x02" +
        "\u04BD\u04C6\x07^\x02\x02\u04BE\u04BF\x07^\x02\x02\u04BF\u04C6\x07h\x02" +
        "\x02\u04C0\u04C6\x07U\x02\x02\u04C1\u04C6\x07c\x02\x02\u04C2\u04C6\x07" +
        "O\x02\x02\u04C3\u04C6\x07e\x02\x02\u04C4\u04C6\x07x\x02\x02\u04C5\u04B9" +
        "\x03\x02\x02\x02\u04C5\u04BA\x03\x02\x02\x02\u04C5\u04BB\x03\x02\x02\x02" +
        "\u04C5\u04BC\x03\x02\x02\x02\u04C5\u04BD\x03\x02\x02\x02\u04C5\u04BE\x03" +
        "\x02\x02\x02\u04C5\u04C0\x03\x02\x02\x02\u04C5\u04C1\x03\x02\x02\x02\u04C5" +
        "\u04C2\x03\x02\x02\x02\u04C5\u04C3\x03\x02\x02\x02\u04C5\u04C4\x03\x02" +
        "\x02\x02\u04C6\u04C7\x03\x02\x02\x02\u04C7\u050C\x05P)\x12\u04C8\u04C9" +
        "\f\x10\x02\x02\u04C9\u04CA\x07\"\x02\x02\u04CA\u050C\x05P)\x11\u04CB\u04CC" +
        "\f\x0F\x02\x02\u04CC\u04CD\x07n\x02\x02\u04CD\u050C\x05P)\x10\u04CE\u04CF" +
        "\f\b\x02\x02\u04CF\u04D1\x07^\x02\x02\u04D0\u04D2\x07h\x02\x02\u04D1\u04D0" +
        "\x03\x02\x02\x02\u04D1\u04D2\x03\x02\x02\x02\u04D2\u04D3\x03\x02\x02\x02" +
        "\u04D3\u050C\x05P)\t\u04D4\u04D6\f\x07\x02\x02\u04D5\u04D7\x07h\x02\x02" +
        "\u04D6\u04D5\x03\x02\x02\x02\u04D6\u04D7\x03\x02\x02\x02\u04D7\u04D8\x03" +
        "\x02\x02\x02\u04D8\u04D9\x07)\x02\x02\u04D9\u04DA\x05P)\x02\u04DA\u04DB" +
        "\x07\"\x02\x02\u04DB\u04DC\x05P)\b\u04DC\u050C\x03\x02\x02\x02\u04DD\u04DE" +
        "\f\v\x02\x02\u04DE\u04DF\x07/\x02\x02\u04DF\u050C\x05\x90I\x02\u04E0\u04E2" +
        "\f\n\x02\x02\u04E1\u04E3\x07h\x02\x02\u04E2\u04E1\x03\x02\x02\x02\u04E2" +
        "\u04E3\x03\x02\x02\x02\u04E3\u04E4\x03\x02\x02\x02\u04E4\u04E5\t\r\x02" +
        "\x02\u04E5\u04E8\x05P)\x02\u04E6\u04E7\x07E\x02\x02\u04E7\u04E9\x05P)" +
        "\x02\u04E8\u04E6\x03\x02\x02\x02\u04E8\u04E9\x03\x02\x02\x02\u04E9\u050C" +
        "\x03\x02\x02\x02\u04EA\u04EF\f\t\x02\x02\u04EB\u04F0\x07_\x02\x02\u04EC" +
        "\u04F0\x07i\x02\x02\u04ED\u04EE\x07h\x02\x02\u04EE\u04F0\x07j\x02\x02" +
        "\u04EF\u04EB\x03\x02\x02\x02\u04EF\u04EC\x03\x02\x02\x02\u04EF\u04ED\x03" +
        "\x02\x02\x02\u04F0\u050C\x03\x02\x02\x02\u04F1\u04F3\f\x06\x02\x02\u04F2" +
        "\u04F4\x07h\x02\x02\u04F3\u04F2\x03\x02\x02\x02\u04F3\u04F4\x03\x02\x02" +
        "\x02\u04F4\u04F5\x03\x02\x02\x02\u04F5\u0509\x07U\x02\x02\u04F6\u0500" +
        "\x07\x05\x02\x02\u04F7\u0501\x05> \x02\u04F8\u04FD\x05P)\x02\u04F9\u04FA" +
        "\x07\x07\x02\x02\u04FA\u04FC\x05P)\x02\u04FB\u04F9\x03\x02\x02\x02\u04FC" +
        "\u04FF\x03\x02\x02\x02\u04FD\u04FB\x03\x02\x02\x02\u04FD\u04FE\x03\x02" +
        "\x02\x02\u04FE\u0501\x03\x02\x02\x02\u04FF\u04FD\x03\x02\x02\x02\u0500" +
        "\u04F7\x03\x02\x02\x02\u0500\u04F8\x03\x02\x02\x02\u0500\u0501\x03\x02" +
        "\x02\x02\u0501\u0502\x03\x02\x02\x02\u0502\u050A\x07\x06\x02\x02\u0503" +
        "\u0504\x05\x86D\x02\u0504\u0505\x07\x04\x02\x02\u0505\u0507\x03\x02\x02" +
        "\x02\u0506\u0503\x03\x02\x02\x02\u0506\u0507\x03\x02\x02\x02\u0507\u0508" +
        "\x03\x02\x02\x02\u0508\u050A\x05\x88E\x02\u0509\u04F6\x03\x02\x02\x02" +
        "\u0509\u0506\x03\x02\x02\x02\u050A\u050C\x03\x02\x02\x02\u050B\u04A9\x03" +
        "\x02\x02\x02\u050B\u04AC\x03\x02\x02\x02\u050B\u04AF\x03\x02\x02\x02\u050B" +
        "\u04B2\x03\x02\x02\x02\u050B\u04B5\x03\x02\x02\x02\u050B\u04B8\x03\x02" +
        "\x02\x02\u050B\u04C8\x03\x02\x02\x02\u050B\u04CB\x03\x02\x02\x02\u050B" +
        "\u04CE\x03\x02\x02\x02\u050B\u04D4\x03\x02\x02\x02\u050B\u04DD\x03\x02" +
        "\x02\x02\u050B\u04E0\x03\x02\x02\x02\u050B\u04EA\x03\x02\x02\x02\u050B" +
        "\u04F1\x03\x02\x02\x02\u050C\u050F\x03\x02\x02\x02\u050D\u050B\x03\x02" +
        "\x02\x02\u050D\u050E\x03\x02\x02\x02\u050EQ\x03\x02\x02\x02\u050F\u050D" +
        "\x03\x02\x02\x02\u0510\u0511\x07w\x02\x02\u0511\u051D\x05\x92J\x02\u0512" +
        "\u0513\x07\x05\x02\x02\u0513\u0518\x05\x8EH\x02\u0514\u0515\x07\x07\x02" +
        "\x02\u0515\u0517\x05\x8EH\x02\u0516\u0514\x03\x02\x02\x02\u0517\u051A" +
        "\x03\x02\x02\x02\u0518\u0516\x03\x02\x02\x02\u0518\u0519\x03\x02\x02\x02" +
        "\u0519\u051B\x03\x02\x02\x02\u051A\u0518\x03\x02\x02\x02\u051B\u051C\x07" +
        "\x06\x02\x02\u051C\u051E\x03\x02\x02\x02\u051D\u0512\x03\x02\x02\x02\u051D" +
        "\u051E\x03\x02\x02\x02\u051E\u0531\x03\x02\x02\x02\u051F\u0520\x07m\x02" +
        "\x02\u0520\u0529\t\x0E\x02\x02\u0521\u0522\x07\x83\x02\x02\u0522\u052A" +
        "\x07j\x02\x02\u0523\u0524\x07\x83\x02\x02\u0524\u052A\x07:\x02\x02\u0525" +
        "\u052A\x07+\x02\x02\u0526\u052A\x07}\x02\x02\u0527\u0528\x07g\x02\x02" +
        "\u0528\u052A\x07\x1C\x02\x02\u0529\u0521\x03\x02\x02\x02\u0529\u0523\x03" +
        "\x02\x02\x02\u0529\u0525\x03\x02\x02\x02\u0529\u0526\x03\x02\x02\x02\u0529" +
        "\u0527\x03\x02\x02\x02\u052A\u052E\x03\x02\x02\x02\u052B\u052C\x07e\x02" +
        "\x02\u052C\u052E\x05\x82B\x02\u052D\u051F\x03\x02\x02\x02\u052D\u052B" +
        "\x03\x02\x02\x02\u052E\u0530\x03\x02\x02\x02\u052F\u052D\x03\x02\x02\x02" +
        "\u0530\u0533\x03\x02\x02\x02\u0531\u052F\x03\x02\x02\x02\u0531\u0532\x03" +
        "\x02\x02\x02\u0532\u053E\x03\x02\x02\x02\u0533\u0531\x03\x02\x02\x02\u0534" +
        "\u0536\x07h\x02\x02\u0535\u0534\x03\x02\x02\x02\u0535\u0536\x03\x02\x02" +
        "\x02\u0536\u0537\x03\x02\x02\x02\u0537\u053C\x07;\x02\x02\u0538\u0539" +
        "\x07X\x02\x02\u0539\u053D\x07<\x02\x02\u053A\u053B\x07X\x02\x02\u053B" +
        "\u053D\x07T\x02\x02\u053C\u0538\x03\x02\x02\x02\u053C\u053A\x03\x02\x02" +
        "\x02\u053C\u053D\x03\x02\x02\x02\u053D\u053F\x03\x02\x02\x02\u053E\u0535" +
        "\x03\x02\x02\x02\u053E\u053F\x03\x02\x02\x02\u053FS\x03\x02\x02\x02\u0540" +
        "\u0541\x07u\x02\x02\u0541\u0546\x07\x05\x02\x02\u0542\u0547\x07S\x02\x02" +
        "\u0543\u0544\t\x0F\x02\x02\u0544\u0545\x07\x07\x02\x02\u0545\u0547\x05" +
        "z>\x02\u0546\u0542\x03\x02\x02\x02\u0546\u0543\x03\x02\x02\x02\u0547\u0548" +
        "\x03\x02\x02\x02\u0548\u0549\x07\x06\x02\x02\u0549U\x03\x02\x02\x02\u054A" +
        "\u054D\x05\x8EH\x02\u054B\u054C\x07/\x02\x02\u054C\u054E\x05\x90I\x02" +
        "\u054D\u054B\x03\x02\x02\x02\u054D\u054E\x03\x02\x02\x02\u054E\u0550\x03" +
        "\x02\x02\x02\u054F\u0551\t\x07\x02\x02\u0550\u054F\x03\x02\x02\x02\u0550" +
        "\u0551\x03\x02\x02\x02\u0551W\x03\x02\x02\x02\u0552\u0553\x073\x02\x02" +
        "\u0553\u0555\x05\x82B\x02\u0554\u0552\x03\x02\x02\x02\u0554\u0555\x03" +
        "\x02\x02\x02\u0555\u057A\x03\x02\x02\x02\u0556\u0557\x07s\x02\x02\u0557" +
        "\u055A\x07a\x02\x02\u0558\u055A\x07\x8C\x02\x02\u0559\u0556\x03\x02\x02" +
        "\x02\u0559\u0558\x03\x02\x02\x02\u055A\u055B\x03\x02\x02\x02\u055B\u055C" +
        "\x07\x05\x02\x02\u055C\u0561\x05V,\x02\u055D\u055E\x07\x07\x02\x02\u055E" +
        "\u0560\x05V,\x02\u055F\u055D\x03\x02\x02\x02\u0560\u0563\x03\x02\x02\x02" +
        "\u0561\u055F\x03\x02\x02\x02\u0561\u0562\x03\x02\x02\x02\u0562\u0564\x03" +
        "\x02\x02\x02\u0563\u0561\x03\x02\x02\x02\u0564\u0565\x07\x06\x02\x02\u0565" +
        "\u0566\x05N(\x02\u0566\u057B\x03\x02\x02\x02\u0567\u0568\x07.\x02\x02" +
        "\u0568\u0569\x07\x05\x02\x02\u0569\u056A\x05P)\x02\u056A\u056B\x07\x06" +
        "\x02\x02\u056B\u057B\x03\x02\x02\x02\u056C\u056D\x07L\x02\x02\u056D\u056E" +
        "\x07a\x02\x02\u056E\u056F\x07\x05\x02\x02\u056F\u0574\x05\x8EH\x02\u0570" +
        "\u0571\x07\x07\x02\x02\u0571\u0573\x05\x8EH\x02\u0572\u0570\x03\x02\x02" +
        "\x02\u0573\u0576\x03\x02\x02\x02\u0574\u0572\x03\x02\x02\x02\u0574\u0575" +
        "\x03\x02\x02\x02\u0575\u0577\x03\x02\x02\x02\u0576\u0574\x03\x02\x02\x02" +
        "\u0577\u0578\x07\x06\x02\x02\u0578\u0579\x05R*\x02\u0579\u057B\x03\x02" +
        "\x02\x02\u057A\u0559\x03\x02\x02\x02\u057A\u0567\x03\x02\x02\x02\u057A" +
        "\u056C\x03\x02\x02\x02\u057BY\x03\x02\x02\x02\u057C\u057E\x07\x95\x02" +
        "\x02\u057D\u057F\x07v\x02\x02\u057E\u057D\x03\x02\x02\x02\u057E\u057F" +
        "\x03\x02\x02\x02\u057F\u0580\x03\x02\x02\x02\u0580\u0581\x05r:\x02\u0581" +
        "\u0582\x07#\x02\x02\u0582\u0583\x07\x05\x02\x02\u0583\u0584\x05> \x02" +
        "\u0584\u058E\x07\x06\x02\x02\u0585\u0586\x07\x07\x02\x02\u0586\u0587\x05" +
        "r:\x02\u0587\u0588\x07#\x02\x02\u0588\u0589\x07\x05\x02\x02\u0589\u058A" +
        "\x05> \x02\u058A\u058B\x07\x06\x02\x02\u058B\u058D\x03\x02\x02\x02\u058C" +
        "\u0585\x03\x02\x02\x02\u058D\u0590\x03\x02\x02\x02\u058E\u058C\x03\x02" +
        "\x02\x02\u058E\u058F\x03\x02\x02\x02\u058F[\x03\x02\x02\x02\u0590\u058E" +
        "\x03\x02\x02\x02\u0591\u0592\x05\x86D\x02\u0592\u0593\x07\x04\x02\x02" +
        "\u0593\u0595\x03\x02\x02\x02\u0594\u0591\x03\x02\x02\x02\u0594\u0595\x03" +
        "\x02\x02\x02\u0595\u0596\x03\x02\x02\x02\u0596\u059C\x05\x88E\x02\u0597" +
        "\u0598\x07W\x02\x02\u0598\u0599\x07*\x02\x02\u0599\u059D\x05\x94K\x02" +
        "\u059A\u059B\x07h\x02\x02\u059B\u059D\x07W\x02\x02\u059C\u0597\x03\x02" +
        "\x02\x02\u059C\u059A\x03\x02\x02\x02\u059C\u059D\x03\x02\x02\x02\u059D" +
        "]\x03\x02\x02\x02\u059E\u05A1\x05P)\x02\u059F\u05A0\x07/\x02\x02\u05A0" +
        "\u05A2\x05\x90I\x02\u05A1\u059F\x03\x02\x02\x02\u05A1\u05A2\x03\x02\x02" +
        "\x02\u05A2\u05A4\x03\x02\x02\x02\u05A3\u05A5\t\x07\x02\x02\u05A4\u05A3" +
        "\x03\x02\x02\x02\u05A4\u05A5\x03\x02\x02\x02\u05A5_\x03\x02\x02\x02\u05A6" +
        "\u05AA\x05t;\x02\u05A7\u05AA\x05\x82B\x02\u05A8\u05AA\x07\x9A\x02\x02" +
        "\u05A9\u05A6\x03\x02\x02\x02\u05A9\u05A7\x03\x02\x02\x02\u05A9\u05A8\x03" +
        "\x02\x02\x02\u05AAa\x03\x02\x02\x02\u05AB\u05B7\x05\x88E\x02\u05AC\u05AD" +
        "\x07\x05\x02\x02\u05AD\u05B2\x05\x8EH\x02\u05AE\u05AF\x07\x07\x02\x02" +
        "\u05AF\u05B1\x05\x8EH\x02\u05B0\u05AE\x03\x02\x02\x02\u05B1\u05B4\x03" +
        "\x02\x02\x02\u05B2\u05B0\x03\x02\x02\x02\u05B2\u05B3\x03\x02\x02\x02\u05B3" +
        "\u05B5\x03\x02\x02\x02\u05B4\u05B2\x03\x02\x02\x02\u05B5\u05B6\x07\x06" +
        "\x02\x02\u05B6\u05B8\x03\x02\x02\x02\u05B7\u05AC\x03\x02\x02\x02\u05B7" +
        "\u05B8\x03\x02\x02\x02\u05B8\u05B9\x03\x02\x02\x02\u05B9\u05BA\x07#\x02" +
        "\x02\u05BA\u05BB\x07\x05\x02\x02\u05BB\u05BC\x05> \x02\u05BC\u05BD\x07" +
        "\x06\x02\x02\u05BDc\x03\x02\x02\x02\u05BE\u05CB\x07\t\x02\x02\u05BF\u05C0" +
        "\x05\x88E\x02\u05C0\u05C1\x07\x04\x02\x02\u05C1\u05C2\x07\t\x02\x02\u05C2" +
        "\u05CB\x03\x02\x02\x02\u05C3\u05C8\x05P)\x02\u05C4\u05C6\x07#\x02\x02" +
        "\u05C5\u05C4\x03\x02\x02\x02\u05C5\u05C6\x03\x02\x02\x02\u05C6\u05C7\x03" +
        "\x02\x02\x02\u05C7\u05C9\x05~@\x02\u05C8\u05C5\x03\x02\x02\x02\u05C8\u05C9" +
        "\x03\x02\x02\x02\u05C9\u05CB\x03\x02\x02\x02\u05CA\u05BE\x03\x02\x02\x02" +
        "\u05CA\u05BF\x03\x02\x02\x02\u05CA\u05C3\x03\x02\x02\x02\u05CBe\x03\x02" +
        "\x02\x02\u05CC\u05CD\x05\x86D\x02\u05CD\u05CE\x07\x04\x02\x02\u05CE\u05D0" +
        "\x03\x02\x02\x02\u05CF\u05CC\x03\x02\x02\x02\u05CF\u05D0\x03\x02\x02\x02" +
        "\u05D0\u05D1\x03\x02\x02\x02\u05D1\u05D6\x05\x88E\x02\u05D2\u05D4\x07" +
        "#\x02\x02\u05D3\u05D2\x03\x02\x02\x02\u05D3\u05D4\x03\x02\x02\x02\u05D4" +
        "\u05D5\x03\x02\x02\x02\u05D5\u05D7\x05\xA0Q\x02\u05D6\u05D3\x03\x02\x02" +
        "\x02\u05D6\u05D7\x03\x02\x02\x02\u05D7\u05DD\x03\x02\x02\x02\u05D8\u05D9" +
        "\x07W\x02\x02\u05D9\u05DA\x07*\x02\x02\u05DA\u05DE\x05\x94K\x02\u05DB" +
        "\u05DC\x07h\x02\x02\u05DC\u05DE\x07W\x02\x02\u05DD\u05D8\x03\x02\x02\x02" +
        "\u05DD\u05DB\x03\x02\x02\x02\u05DD\u05DE\x03\x02\x02\x02\u05DE\u05FC\x03" +
        "\x02\x02\x02\u05DF\u05E9\x07\x05\x02\x02\u05E0\u05E5\x05f4\x02\u05E1\u05E2" +
        "\x07\x07\x02\x02\u05E2\u05E4\x05f4\x02\u05E3\u05E1\x03\x02\x02\x02\u05E4" +
        "\u05E7\x03\x02\x02\x02\u05E5\u05E3\x03\x02\x02\x02\u05E5\u05E6\x03\x02" +
        "\x02\x02\u05E6\u05EA\x03\x02\x02\x02\u05E7\u05E5\x03\x02\x02\x02\u05E8" +
        "\u05EA\x05h5\x02\u05E9\u05E0\x03\x02\x02\x02\u05E9\u05E8\x03\x02\x02\x02" +
        "\u05EA\u05EB\x03\x02\x02\x02\u05EB\u05F0\x07\x06\x02\x02\u05EC\u05EE\x07" +
        "#\x02\x02\u05ED\u05EC\x03\x02\x02\x02\u05ED\u05EE\x03\x02\x02\x02\u05EE" +
        "\u05EF\x03\x02\x02\x02\u05EF\u05F1\x05\xA0Q\x02\u05F0\u05ED\x03\x02\x02" +
        "\x02\u05F0\u05F1\x03\x02\x02\x02\u05F1\u05FC\x03\x02\x02\x02\u05F2\u05F3" +
        "\x07\x05\x02\x02\u05F3\u05F4\x05> \x02\u05F4\u05F9\x07\x06\x02\x02\u05F5" +
        "\u05F7\x07#\x02\x02\u05F6\u05F5\x03\x02\x02\x02\u05F6\u05F7\x03\x02\x02" +
        "\x02\u05F7\u05F8\x03\x02\x02\x02\u05F8\u05FA\x05\xA0Q\x02\u05F9\u05F6" +
        "\x03\x02\x02\x02\u05F9\u05FA\x03\x02\x02\x02\u05FA\u05FC\x03\x02\x02\x02" +
        "\u05FB\u05CF\x03\x02\x02\x02\u05FB\u05DF\x03\x02\x02\x02\u05FB\u05F2\x03" +
        "\x02\x02\x02\u05FCg\x03\x02\x02\x02\u05FD\u0604\x05f4\x02\u05FE\u05FF" +
        "\x05j6\x02\u05FF\u0600\x05f4\x02\u0600\u0601\x05l7\x02\u0601\u0603\x03" +
        "\x02\x02\x02\u0602\u05FE\x03\x02\x02\x02\u0603\u0606\x03\x02\x02\x02\u0604" +
        "\u0602\x03\x02\x02\x02\u0604\u0605\x03\x02\x02\x02\u0605i\x03\x02\x02" +
        "\x02\u0606\u0604\x03\x02\x02\x02\u0607\u0615\x07\x07\x02\x02\u0608\u060A" +
        "\x07f\x02\x02\u0609\u0608\x03\x02\x02\x02\u0609\u060A\x03\x02\x02\x02" +
        "\u060A\u0611\x03\x02\x02\x02\u060B\u060D\x07b\x02\x02\u060C\u060E\x07" +
        "p\x02\x02\u060D\u060C\x03\x02\x02\x02\u060D\u060E\x03\x02\x02\x02\u060E" +
        "\u0612\x03\x02\x02\x02\u060F\u0612\x07Y\x02\x02\u0610\u0612\x075\x02\x02" +
        "\u0611\u060B\x03\x02\x02\x02\u0611\u060F\x03\x02\x02\x02\u0611\u0610\x03" +
        "\x02\x02\x02\u0611\u0612\x03\x02\x02\x02\u0612\u0613\x03\x02\x02\x02\u0613" +
        "\u0615\x07`\x02\x02\u0614\u0607\x03\x02\x02\x02\u0614\u0609\x03\x02\x02" +
        "\x02\u0615k\x03\x02\x02\x02\u0616\u0617\x07m\x02\x02\u0617\u0625\x05P" +
        ")\x02\u0618\u0619\x07\x8E\x02\x02\u0619\u061A\x07\x05\x02\x02\u061A\u061F" +
        "\x05\x8EH\x02\u061B\u061C\x07\x07\x02\x02\u061C\u061E\x05\x8EH\x02\u061D" +
        "\u061B\x03\x02\x02\x02\u061E\u0621\x03\x02\x02\x02\u061F\u061D\x03\x02" +
        "\x02\x02\u061F\u0620\x03\x02\x02\x02\u0620\u0622\x03\x02\x02\x02\u0621" +
        "\u061F\x03\x02\x02\x02\u0622\u0623\x07\x06\x02\x02\u0623\u0625\x03\x02" +
        "\x02\x02\u0624\u0616\x03\x02\x02\x02\u0624\u0618\x03\x02\x02\x02\u0624" +
        "\u0625\x03\x02\x02\x02\u0625m\x03\x02\x02\x02\u0626\u0628\x07\x82\x02" +
        "\x02\u0627\u0629\t\x06\x02\x02\u0628\u0627\x03\x02\x02\x02\u0628\u0629" +
        "\x03";
    SQLiteParser._serializedATNSegment3 = "\x02\x02\x02\u0629\u062A\x03\x02\x02\x02\u062A\u062F\x05d3\x02\u062B\u062C" +
        "\x07\x07\x02\x02\u062C\u062E\x05d3\x02\u062D\u062B\x03\x02\x02\x02\u062E" +
        "\u0631\x03\x02\x02\x02\u062F\u062D\x03\x02\x02\x02\u062F\u0630\x03\x02" +
        "\x02\x02\u0630\u063E\x03\x02\x02\x02\u0631\u062F\x03\x02\x02\x02\u0632" +
        "\u063C\x07M\x02\x02\u0633\u0638\x05f4\x02\u0634\u0635\x07\x07\x02\x02" +
        "\u0635\u0637\x05f4\x02\u0636\u0634\x03\x02\x02\x02\u0637\u063A\x03\x02" +
        "\x02\x02\u0638\u0636\x03\x02\x02\x02\u0638\u0639\x03\x02\x02\x02\u0639" +
        "\u063D\x03\x02\x02\x02\u063A\u0638\x03\x02\x02\x02\u063B\u063D\x05h5\x02" +
        "\u063C\u0633\x03\x02\x02\x02\u063C\u063B\x03\x02\x02\x02\u063D\u063F\x03" +
        "\x02\x02\x02\u063E\u0632\x03\x02\x02\x02\u063E\u063F\x03\x02\x02\x02\u063F" +
        "\u0642\x03\x02\x02\x02\u0640\u0641\x07\x94\x02\x02\u0641\u0643\x05P)\x02" +
        "\u0642\u0640\x03\x02\x02\x02\u0642\u0643\x03\x02\x02\x02\u0643\u0652\x03" +
        "\x02\x02\x02\u0644\u0645\x07P\x02\x02\u0645\u0646\x07*\x02\x02\u0646\u064B" +
        "\x05P)\x02\u0647\u0648\x07\x07\x02\x02\u0648\u064A\x05P)\x02\u0649\u0647" +
        "\x03\x02\x02\x02\u064A\u064D\x03\x02\x02\x02\u064B\u0649\x03\x02\x02\x02" +
        "\u064B\u064C\x03\x02\x02\x02\u064C\u0650\x03\x02\x02\x02\u064D\u064B\x03" +
        "\x02\x02\x02\u064E\u064F\x07Q\x02\x02\u064F\u0651\x05P)\x02\u0650\u064E" +
        "\x03\x02\x02\x02\u0650\u0651\x03\x02\x02\x02\u0651\u0653\x03\x02\x02\x02" +
        "\u0652\u0644\x03\x02\x02\x02\u0652\u0653\x03\x02\x02\x02\u0653\u0671\x03" +
        "\x02\x02\x02\u0654\u0655\x07\x90\x02\x02\u0655\u0656\x07\x05\x02\x02\u0656" +
        "\u065B\x05P)\x02\u0657\u0658\x07\x07\x02\x02\u0658\u065A\x05P)\x02\u0659" +
        "\u0657\x03\x02\x02\x02\u065A\u065D\x03\x02\x02\x02\u065B\u0659\x03\x02" +
        "\x02\x02\u065B\u065C\x03\x02\x02\x02\u065C\u065E\x03\x02\x02\x02\u065D" +
        "\u065B\x03\x02\x02\x02\u065E\u066D\x07\x06\x02\x02\u065F\u0660\x07\x07" +
        "\x02\x02\u0660\u0661\x07\x05\x02\x02\u0661\u0666\x05P)\x02\u0662\u0663" +
        "\x07\x07\x02\x02\u0663\u0665\x05P)\x02\u0664\u0662\x03\x02\x02\x02\u0665" +
        "\u0668\x03\x02\x02\x02\u0666\u0664\x03\x02\x02\x02\u0666\u0667\x03\x02" +
        "\x02\x02\u0667\u0669\x03\x02\x02\x02\u0668\u0666\x03\x02\x02\x02\u0669" +
        "\u066A\x07\x06\x02\x02\u066A\u066C\x03\x02\x02\x02\u066B\u065F\x03\x02" +
        "\x02\x02\u066C\u066F\x03\x02\x02\x02\u066D\u066B\x03\x02\x02\x02\u066D" +
        "\u066E\x03\x02\x02\x02\u066E\u0671\x03\x02\x02\x02\u066F\u066D\x03\x02" +
        "\x02\x02\u0670\u0626\x03\x02\x02\x02\u0670\u0654\x03\x02\x02\x02\u0671" +
        "o\x03\x02\x02\x02\u0672\u0678\x07\x8B\x02\x02\u0673\u0674\x07\x8B\x02" +
        "\x02\u0674\u0678\x07\x1F\x02\x02\u0675\u0678\x07\\\x02\x02\u0676\u0678" +
        "\x07F\x02\x02\u0677\u0672\x03\x02\x02\x02\u0677\u0673\x03\x02\x02\x02" +
        "\u0677\u0675\x03\x02\x02\x02\u0677\u0676\x03\x02\x02\x02\u0678q\x03\x02" +
        "\x02\x02\u0679\u0685\x05\x88E\x02\u067A\u067B\x07\x05\x02\x02\u067B\u0680" +
        "\x05\x8EH\x02\u067C\u067D\x07\x07\x02\x02\u067D\u067F\x05\x8EH\x02\u067E" +
        "\u067C\x03\x02\x02\x02\u067F\u0682\x03\x02\x02\x02\u0680\u067E\x03\x02" +
        "\x02\x02\u0680\u0681\x03\x02\x02\x02\u0681\u0683\x03\x02\x02\x02\u0682" +
        "\u0680\x03\x02\x02\x02\u0683\u0684\x07\x06\x02\x02\u0684\u0686\x03\x02" +
        "\x02\x02\u0685\u067A\x03\x02\x02\x02\u0685\u0686\x03\x02\x02\x02\u0686" +
        "s\x03\x02\x02\x02\u0687\u0689\t\n\x02\x02\u0688\u0687\x03\x02\x02\x02" +
        "\u0688\u0689\x03\x02\x02\x02\u0689\u068A\x03\x02\x02\x02\u068A\u068B\x07" +
        "\x98\x02\x02\u068Bu\x03\x02\x02\x02\u068C\u068D\t\x10\x02\x02\u068Dw\x03" +
        "\x02\x02\x02\u068E\u068F\t\x11\x02\x02\u068Fy\x03\x02\x02\x02\u0690\u0691" +
        "\x07\x9A\x02\x02\u0691{\x03\x02\x02\x02\u0692\u0695\x05P)\x02\u0693\u0695" +
        "\x05H%\x02\u0694\u0692\x03\x02\x02\x02\u0694\u0693\x03\x02\x02\x02\u0695" +
        "}\x03\x02\x02\x02\u0696\u0697\t\x12\x02\x02\u0697\x7F\x03\x02\x02\x02" +
        "\u0698\u0699\t\x13\x02\x02\u0699\x81\x03\x02\x02\x02\u069A\u069B\x05\xA4" +
        "S\x02\u069B\x83\x03\x02\x02\x02\u069C\u069D\x05\xA4S\x02\u069D\x85\x03" +
        "\x02\x02\x02\u069E\u069F\x05\xA4S\x02\u069F\x87\x03\x02\x02\x02\u06A0" +
        "\u06A1\x05\xA4S\x02\u06A1\x89\x03\x02\x02\x02\u06A2\u06A3\x05\xA4S\x02" +
        "\u06A3\x8B\x03\x02\x02\x02\u06A4\u06A5\x05\xA4S\x02\u06A5\x8D\x03\x02" +
        "\x02\x02\u06A6\u06A7\x05\xA4S\x02\u06A7\x8F\x03\x02\x02\x02\u06A8\u06A9" +
        "\x05\xA4S\x02\u06A9\x91\x03\x02\x02\x02\u06AA\u06AB\x05\xA4S\x02\u06AB" +
        "\x93\x03\x02\x02\x02\u06AC\u06AD\x05\xA4S\x02\u06AD\x95\x03\x02\x02\x02" +
        "\u06AE\u06AF\x05\xA4S\x02\u06AF\x97\x03\x02\x02\x02\u06B0\u06B1\x05\xA4" +
        "S\x02\u06B1\x99\x03\x02\x02\x02\u06B2\u06B3\x05\xA4S\x02\u06B3\x9B\x03" +
        "\x02\x02\x02\u06B4\u06B5\x05\xA4S\x02\u06B5\x9D\x03\x02\x02\x02\u06B6" +
        "\u06B7\x05\xA4S\x02\u06B7\x9F\x03\x02\x02\x02\u06B8\u06B9\x05\xA4S\x02" +
        "\u06B9\xA1\x03\x02\x02\x02\u06BA\u06BB\x05\xA4S\x02\u06BB\xA3\x03\x02" +
        "\x02\x02\u06BC\u06C4\x07\x97\x02\x02\u06BD\u06C4\x05\x80A\x02\u06BE\u06C4" +
        "\x07\x9A\x02\x02\u06BF\u06C0\x07\x05\x02\x02\u06C0\u06C1\x05\xA4S\x02" +
        "\u06C1\u06C2\x07\x06\x02\x02\u06C2\u06C4\x03\x02\x02\x02\u06C3\u06BC\x03" +
        "\x02\x02\x02\u06C3\u06BD\x03\x02\x02\x02\u06C3\u06BE\x03\x02\x02\x02\u06C3" +
        "\u06BF\x03\x02\x02\x02\u06C4\xA5\x03\x02\x02\x02\xF6\xA8\xAA\xB5\xBC\xC1" +
        "\xC7\xCD\xCF\xEF\xF6\xFE\u0101\u010A\u010E\u0116\u011A\u011C\u0121\u0123" +
        "\u0127\u012E\u0131\u0136\u013A\u013F\u0148\u014B\u0151\u0153\u0157\u015D" +
        "\u0162\u016D\u0173\u0177\u017D\u0182\u018B\u0192\u0198\u019C\u01A0\u01A6" +
        "\u01AB\u01B2\u01BD\u01C0\u01C2\u01C8\u01CE\u01D2\u01D9\u01DF\u01E5\u01EB" +
        "\u01F0\u01FC\u0201\u020C\u0211\u0214\u021B\u021E\u0225\u022E\u0231\u0237" +
        "\u0239\u023D\u0245\u024A\u0252\u0257\u025F\u0264\u026C\u0271\u0277\u027E" +
        "\u0281\u0289\u0293\u0296\u029C\u029E\u02A1\u02B4\u02BA\u02C3\u02C8\u02D1" +
        "\u02DC\u02E3\u02E9\u02EF\u02F8\u02FF\u0303\u0305\u0309\u0310\u0312\u0316" +
        "\u0319\u0320\u0327\u032A\u0334\u0337\u033D\u033F\u0343\u034A\u034D\u0355" +
        "\u035F\u0362\u0368\u036A\u036E\u0375\u037E\u0382\u0384\u0388\u0391\u0396" +
        "\u0398\u03A1\u03AC\u03B3\u03B6\u03B9\u03C6\u03D4\u03D9\u03DC\u03E9\u03F7" +
        "\u03FC\u0405\u0408\u040E\u0410\u0416\u041B\u0421\u042D\u0431\u0436\u043A" +
        "\u043D\u044F\u0454\u0459\u0461\u0466\u046F\u0476\u047A\u048A\u048D\u0495" +
        "\u049E\u04A2\u04A7\u04C5\u04D1\u04D6\u04E2\u04E8\u04EF\u04F3\u04FD\u0500" +
        "\u0506\u0509\u050B\u050D\u0518\u051D\u0529\u052D\u0531\u0535\u053C\u053E" +
        "\u0546\u054D\u0550\u0554\u0559\u0561\u0574\u057A\u057E\u058E\u0594\u059C" +
        "\u05A1\u05A4\u05A9\u05B2\u05B7\u05C5\u05C8\u05CA\u05CF\u05D3\u05D6\u05DD" +
        "\u05E5\u05E9\u05ED\u05F0\u05F6\u05F9\u05FB\u0604\u0609\u060D\u0611\u0614" +
        "\u061F\u0624\u0628\u062F\u0638\u063C\u063E\u0642\u064B\u0650\u0652\u065B" +
        "\u0666\u066D\u0670\u0677\u0680\u0685\u0688\u0694\u06C3";
    SQLiteParser._serializedATN = Utils.join([
        SQLiteParser._serializedATNSegment0,
        SQLiteParser._serializedATNSegment1,
        SQLiteParser._serializedATNSegment2,
        SQLiteParser._serializedATNSegment3,
    ], "");
    return SQLiteParser;
}(Parser_1.Parser));
exports.SQLiteParser = SQLiteParser;
var ParseContext = /** @class */ (function (_super) {
    __extends(ParseContext, _super);
    function ParseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParseContext.prototype.EOF = function () { return this.getToken(SQLiteParser.EOF, 0); };
    ParseContext.prototype.sql_stmt_list = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Sql_stmt_listContext);
        }
        else {
            return this.getRuleContext(i, Sql_stmt_listContext);
        }
    };
    ParseContext.prototype.error = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ErrorContext);
        }
        else {
            return this.getRuleContext(i, ErrorContext);
        }
    };
    Object.defineProperty(ParseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_parse; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParseContext.prototype.enterRule = function (listener) {
        if (listener.enterParse) {
            listener.enterParse(this);
        }
    };
    // @Override
    ParseContext.prototype.exitRule = function (listener) {
        if (listener.exitParse) {
            listener.exitParse(this);
        }
    };
    // @Override
    ParseContext.prototype.accept = function (visitor) {
        if (visitor.visitParse) {
            return visitor.visitParse(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParseContext = ParseContext;
var ErrorContext = /** @class */ (function (_super) {
    __extends(ErrorContext, _super);
    function ErrorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ErrorContext.prototype.UNEXPECTED_CHAR = function () { return this.getToken(SQLiteParser.UNEXPECTED_CHAR, 0); };
    Object.defineProperty(ErrorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_error; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ErrorContext.prototype.enterRule = function (listener) {
        if (listener.enterError) {
            listener.enterError(this);
        }
    };
    // @Override
    ErrorContext.prototype.exitRule = function (listener) {
        if (listener.exitError) {
            listener.exitError(this);
        }
    };
    // @Override
    ErrorContext.prototype.accept = function (visitor) {
        if (visitor.visitError) {
            return visitor.visitError(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ErrorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ErrorContext = ErrorContext;
var Sql_stmt_listContext = /** @class */ (function (_super) {
    __extends(Sql_stmt_listContext, _super);
    function Sql_stmt_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Sql_stmt_listContext.prototype.sql_stmt = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Sql_stmtContext);
        }
        else {
            return this.getRuleContext(i, Sql_stmtContext);
        }
    };
    Sql_stmt_listContext.prototype.SCOL = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.SCOL);
        }
        else {
            return this.getToken(SQLiteParser.SCOL, i);
        }
    };
    Object.defineProperty(Sql_stmt_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_sql_stmt_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Sql_stmt_listContext.prototype.enterRule = function (listener) {
        if (listener.enterSql_stmt_list) {
            listener.enterSql_stmt_list(this);
        }
    };
    // @Override
    Sql_stmt_listContext.prototype.exitRule = function (listener) {
        if (listener.exitSql_stmt_list) {
            listener.exitSql_stmt_list(this);
        }
    };
    // @Override
    Sql_stmt_listContext.prototype.accept = function (visitor) {
        if (visitor.visitSql_stmt_list) {
            return visitor.visitSql_stmt_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Sql_stmt_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Sql_stmt_listContext = Sql_stmt_listContext;
var Sql_stmtContext = /** @class */ (function (_super) {
    __extends(Sql_stmtContext, _super);
    function Sql_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Sql_stmtContext.prototype.alter_table_stmt = function () {
        return this.tryGetRuleContext(0, Alter_table_stmtContext);
    };
    Sql_stmtContext.prototype.analyze_stmt = function () {
        return this.tryGetRuleContext(0, Analyze_stmtContext);
    };
    Sql_stmtContext.prototype.attach_stmt = function () {
        return this.tryGetRuleContext(0, Attach_stmtContext);
    };
    Sql_stmtContext.prototype.begin_stmt = function () {
        return this.tryGetRuleContext(0, Begin_stmtContext);
    };
    Sql_stmtContext.prototype.commit_stmt = function () {
        return this.tryGetRuleContext(0, Commit_stmtContext);
    };
    Sql_stmtContext.prototype.compound_select_stmt = function () {
        return this.tryGetRuleContext(0, Compound_select_stmtContext);
    };
    Sql_stmtContext.prototype.create_index_stmt = function () {
        return this.tryGetRuleContext(0, Create_index_stmtContext);
    };
    Sql_stmtContext.prototype.create_table_stmt = function () {
        return this.tryGetRuleContext(0, Create_table_stmtContext);
    };
    Sql_stmtContext.prototype.create_trigger_stmt = function () {
        return this.tryGetRuleContext(0, Create_trigger_stmtContext);
    };
    Sql_stmtContext.prototype.create_view_stmt = function () {
        return this.tryGetRuleContext(0, Create_view_stmtContext);
    };
    Sql_stmtContext.prototype.create_virtual_table_stmt = function () {
        return this.tryGetRuleContext(0, Create_virtual_table_stmtContext);
    };
    Sql_stmtContext.prototype.delete_stmt = function () {
        return this.tryGetRuleContext(0, Delete_stmtContext);
    };
    Sql_stmtContext.prototype.delete_stmt_limited = function () {
        return this.tryGetRuleContext(0, Delete_stmt_limitedContext);
    };
    Sql_stmtContext.prototype.detach_stmt = function () {
        return this.tryGetRuleContext(0, Detach_stmtContext);
    };
    Sql_stmtContext.prototype.drop_index_stmt = function () {
        return this.tryGetRuleContext(0, Drop_index_stmtContext);
    };
    Sql_stmtContext.prototype.drop_table_stmt = function () {
        return this.tryGetRuleContext(0, Drop_table_stmtContext);
    };
    Sql_stmtContext.prototype.drop_trigger_stmt = function () {
        return this.tryGetRuleContext(0, Drop_trigger_stmtContext);
    };
    Sql_stmtContext.prototype.drop_view_stmt = function () {
        return this.tryGetRuleContext(0, Drop_view_stmtContext);
    };
    Sql_stmtContext.prototype.factored_select_stmt = function () {
        return this.tryGetRuleContext(0, Factored_select_stmtContext);
    };
    Sql_stmtContext.prototype.insert_stmt = function () {
        return this.tryGetRuleContext(0, Insert_stmtContext);
    };
    Sql_stmtContext.prototype.pragma_stmt = function () {
        return this.tryGetRuleContext(0, Pragma_stmtContext);
    };
    Sql_stmtContext.prototype.reindex_stmt = function () {
        return this.tryGetRuleContext(0, Reindex_stmtContext);
    };
    Sql_stmtContext.prototype.release_stmt = function () {
        return this.tryGetRuleContext(0, Release_stmtContext);
    };
    Sql_stmtContext.prototype.rollback_stmt = function () {
        return this.tryGetRuleContext(0, Rollback_stmtContext);
    };
    Sql_stmtContext.prototype.savepoint_stmt = function () {
        return this.tryGetRuleContext(0, Savepoint_stmtContext);
    };
    Sql_stmtContext.prototype.simple_select_stmt = function () {
        return this.tryGetRuleContext(0, Simple_select_stmtContext);
    };
    Sql_stmtContext.prototype.select_stmt = function () {
        return this.tryGetRuleContext(0, Select_stmtContext);
    };
    Sql_stmtContext.prototype.update_stmt = function () {
        return this.tryGetRuleContext(0, Update_stmtContext);
    };
    Sql_stmtContext.prototype.update_stmt_limited = function () {
        return this.tryGetRuleContext(0, Update_stmt_limitedContext);
    };
    Sql_stmtContext.prototype.vacuum_stmt = function () {
        return this.tryGetRuleContext(0, Vacuum_stmtContext);
    };
    Sql_stmtContext.prototype.K_EXPLAIN = function () { return this.tryGetToken(SQLiteParser.K_EXPLAIN, 0); };
    Sql_stmtContext.prototype.K_QUERY = function () { return this.tryGetToken(SQLiteParser.K_QUERY, 0); };
    Sql_stmtContext.prototype.K_PLAN = function () { return this.tryGetToken(SQLiteParser.K_PLAN, 0); };
    Object.defineProperty(Sql_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_sql_stmt; },
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
var Alter_table_stmtContext = /** @class */ (function (_super) {
    __extends(Alter_table_stmtContext, _super);
    function Alter_table_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Alter_table_stmtContext.prototype.K_ALTER = function () { return this.getToken(SQLiteParser.K_ALTER, 0); };
    Alter_table_stmtContext.prototype.K_TABLE = function () { return this.getToken(SQLiteParser.K_TABLE, 0); };
    Alter_table_stmtContext.prototype.table_name = function () {
        return this.getRuleContext(0, Table_nameContext);
    };
    Alter_table_stmtContext.prototype.K_RENAME = function () { return this.tryGetToken(SQLiteParser.K_RENAME, 0); };
    Alter_table_stmtContext.prototype.K_TO = function () { return this.tryGetToken(SQLiteParser.K_TO, 0); };
    Alter_table_stmtContext.prototype.new_table_name = function () {
        return this.tryGetRuleContext(0, New_table_nameContext);
    };
    Alter_table_stmtContext.prototype.K_ADD = function () { return this.tryGetToken(SQLiteParser.K_ADD, 0); };
    Alter_table_stmtContext.prototype.column_def = function () {
        return this.tryGetRuleContext(0, Column_defContext);
    };
    Alter_table_stmtContext.prototype.database_name = function () {
        return this.tryGetRuleContext(0, Database_nameContext);
    };
    Alter_table_stmtContext.prototype.DOT = function () { return this.tryGetToken(SQLiteParser.DOT, 0); };
    Alter_table_stmtContext.prototype.K_COLUMN = function () { return this.tryGetToken(SQLiteParser.K_COLUMN, 0); };
    Object.defineProperty(Alter_table_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_alter_table_stmt; },
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
var Analyze_stmtContext = /** @class */ (function (_super) {
    __extends(Analyze_stmtContext, _super);
    function Analyze_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Analyze_stmtContext.prototype.K_ANALYZE = function () { return this.getToken(SQLiteParser.K_ANALYZE, 0); };
    Analyze_stmtContext.prototype.database_name = function () {
        return this.tryGetRuleContext(0, Database_nameContext);
    };
    Analyze_stmtContext.prototype.table_or_index_name = function () {
        return this.tryGetRuleContext(0, Table_or_index_nameContext);
    };
    Analyze_stmtContext.prototype.DOT = function () { return this.tryGetToken(SQLiteParser.DOT, 0); };
    Object.defineProperty(Analyze_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_analyze_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Analyze_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterAnalyze_stmt) {
            listener.enterAnalyze_stmt(this);
        }
    };
    // @Override
    Analyze_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitAnalyze_stmt) {
            listener.exitAnalyze_stmt(this);
        }
    };
    // @Override
    Analyze_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitAnalyze_stmt) {
            return visitor.visitAnalyze_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Analyze_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Analyze_stmtContext = Analyze_stmtContext;
var Attach_stmtContext = /** @class */ (function (_super) {
    __extends(Attach_stmtContext, _super);
    function Attach_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Attach_stmtContext.prototype.K_ATTACH = function () { return this.getToken(SQLiteParser.K_ATTACH, 0); };
    Attach_stmtContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    Attach_stmtContext.prototype.K_AS = function () { return this.getToken(SQLiteParser.K_AS, 0); };
    Attach_stmtContext.prototype.database_name = function () {
        return this.getRuleContext(0, Database_nameContext);
    };
    Attach_stmtContext.prototype.K_DATABASE = function () { return this.tryGetToken(SQLiteParser.K_DATABASE, 0); };
    Object.defineProperty(Attach_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_attach_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Attach_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterAttach_stmt) {
            listener.enterAttach_stmt(this);
        }
    };
    // @Override
    Attach_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitAttach_stmt) {
            listener.exitAttach_stmt(this);
        }
    };
    // @Override
    Attach_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitAttach_stmt) {
            return visitor.visitAttach_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Attach_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Attach_stmtContext = Attach_stmtContext;
var Begin_stmtContext = /** @class */ (function (_super) {
    __extends(Begin_stmtContext, _super);
    function Begin_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Begin_stmtContext.prototype.K_BEGIN = function () { return this.getToken(SQLiteParser.K_BEGIN, 0); };
    Begin_stmtContext.prototype.K_TRANSACTION = function () { return this.tryGetToken(SQLiteParser.K_TRANSACTION, 0); };
    Begin_stmtContext.prototype.K_DEFERRED = function () { return this.tryGetToken(SQLiteParser.K_DEFERRED, 0); };
    Begin_stmtContext.prototype.K_IMMEDIATE = function () { return this.tryGetToken(SQLiteParser.K_IMMEDIATE, 0); };
    Begin_stmtContext.prototype.K_EXCLUSIVE = function () { return this.tryGetToken(SQLiteParser.K_EXCLUSIVE, 0); };
    Begin_stmtContext.prototype.transaction_name = function () {
        return this.tryGetRuleContext(0, Transaction_nameContext);
    };
    Object.defineProperty(Begin_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_begin_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Begin_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterBegin_stmt) {
            listener.enterBegin_stmt(this);
        }
    };
    // @Override
    Begin_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitBegin_stmt) {
            listener.exitBegin_stmt(this);
        }
    };
    // @Override
    Begin_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitBegin_stmt) {
            return visitor.visitBegin_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Begin_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Begin_stmtContext = Begin_stmtContext;
var Commit_stmtContext = /** @class */ (function (_super) {
    __extends(Commit_stmtContext, _super);
    function Commit_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Commit_stmtContext.prototype.K_COMMIT = function () { return this.tryGetToken(SQLiteParser.K_COMMIT, 0); };
    Commit_stmtContext.prototype.K_END = function () { return this.tryGetToken(SQLiteParser.K_END, 0); };
    Commit_stmtContext.prototype.K_TRANSACTION = function () { return this.tryGetToken(SQLiteParser.K_TRANSACTION, 0); };
    Commit_stmtContext.prototype.transaction_name = function () {
        return this.tryGetRuleContext(0, Transaction_nameContext);
    };
    Object.defineProperty(Commit_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_commit_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Commit_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterCommit_stmt) {
            listener.enterCommit_stmt(this);
        }
    };
    // @Override
    Commit_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitCommit_stmt) {
            listener.exitCommit_stmt(this);
        }
    };
    // @Override
    Commit_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitCommit_stmt) {
            return visitor.visitCommit_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Commit_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Commit_stmtContext = Commit_stmtContext;
var Compound_select_stmtContext = /** @class */ (function (_super) {
    __extends(Compound_select_stmtContext, _super);
    function Compound_select_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Compound_select_stmtContext.prototype.select_core = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Select_coreContext);
        }
        else {
            return this.getRuleContext(i, Select_coreContext);
        }
    };
    Compound_select_stmtContext.prototype.K_WITH = function () { return this.tryGetToken(SQLiteParser.K_WITH, 0); };
    Compound_select_stmtContext.prototype.common_table_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Common_table_expressionContext);
        }
        else {
            return this.getRuleContext(i, Common_table_expressionContext);
        }
    };
    Compound_select_stmtContext.prototype.K_ORDER = function () { return this.tryGetToken(SQLiteParser.K_ORDER, 0); };
    Compound_select_stmtContext.prototype.K_BY = function () { return this.tryGetToken(SQLiteParser.K_BY, 0); };
    Compound_select_stmtContext.prototype.ordering_term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Ordering_termContext);
        }
        else {
            return this.getRuleContext(i, Ordering_termContext);
        }
    };
    Compound_select_stmtContext.prototype.K_LIMIT = function () { return this.tryGetToken(SQLiteParser.K_LIMIT, 0); };
    Compound_select_stmtContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    Compound_select_stmtContext.prototype.K_UNION = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.K_UNION);
        }
        else {
            return this.getToken(SQLiteParser.K_UNION, i);
        }
    };
    Compound_select_stmtContext.prototype.K_INTERSECT = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.K_INTERSECT);
        }
        else {
            return this.getToken(SQLiteParser.K_INTERSECT, i);
        }
    };
    Compound_select_stmtContext.prototype.K_EXCEPT = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.K_EXCEPT);
        }
        else {
            return this.getToken(SQLiteParser.K_EXCEPT, i);
        }
    };
    Compound_select_stmtContext.prototype.K_RECURSIVE = function () { return this.tryGetToken(SQLiteParser.K_RECURSIVE, 0); };
    Compound_select_stmtContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    };
    Compound_select_stmtContext.prototype.K_OFFSET = function () { return this.tryGetToken(SQLiteParser.K_OFFSET, 0); };
    Compound_select_stmtContext.prototype.K_ALL = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.K_ALL);
        }
        else {
            return this.getToken(SQLiteParser.K_ALL, i);
        }
    };
    Object.defineProperty(Compound_select_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_compound_select_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Compound_select_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterCompound_select_stmt) {
            listener.enterCompound_select_stmt(this);
        }
    };
    // @Override
    Compound_select_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitCompound_select_stmt) {
            listener.exitCompound_select_stmt(this);
        }
    };
    // @Override
    Compound_select_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitCompound_select_stmt) {
            return visitor.visitCompound_select_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Compound_select_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Compound_select_stmtContext = Compound_select_stmtContext;
var Create_index_stmtContext = /** @class */ (function (_super) {
    __extends(Create_index_stmtContext, _super);
    function Create_index_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Create_index_stmtContext.prototype.K_CREATE = function () { return this.getToken(SQLiteParser.K_CREATE, 0); };
    Create_index_stmtContext.prototype.K_INDEX = function () { return this.getToken(SQLiteParser.K_INDEX, 0); };
    Create_index_stmtContext.prototype.index_name = function () {
        return this.getRuleContext(0, Index_nameContext);
    };
    Create_index_stmtContext.prototype.K_ON = function () { return this.getToken(SQLiteParser.K_ON, 0); };
    Create_index_stmtContext.prototype.table_name = function () {
        return this.getRuleContext(0, Table_nameContext);
    };
    Create_index_stmtContext.prototype.OPEN_PAR = function () { return this.getToken(SQLiteParser.OPEN_PAR, 0); };
    Create_index_stmtContext.prototype.indexed_column = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Indexed_columnContext);
        }
        else {
            return this.getRuleContext(i, Indexed_columnContext);
        }
    };
    Create_index_stmtContext.prototype.CLOSE_PAR = function () { return this.getToken(SQLiteParser.CLOSE_PAR, 0); };
    Create_index_stmtContext.prototype.K_UNIQUE = function () { return this.tryGetToken(SQLiteParser.K_UNIQUE, 0); };
    Create_index_stmtContext.prototype.K_IF = function () { return this.tryGetToken(SQLiteParser.K_IF, 0); };
    Create_index_stmtContext.prototype.K_NOT = function () { return this.tryGetToken(SQLiteParser.K_NOT, 0); };
    Create_index_stmtContext.prototype.K_EXISTS = function () { return this.tryGetToken(SQLiteParser.K_EXISTS, 0); };
    Create_index_stmtContext.prototype.database_name = function () {
        return this.tryGetRuleContext(0, Database_nameContext);
    };
    Create_index_stmtContext.prototype.DOT = function () { return this.tryGetToken(SQLiteParser.DOT, 0); };
    Create_index_stmtContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    };
    Create_index_stmtContext.prototype.K_WHERE = function () { return this.tryGetToken(SQLiteParser.K_WHERE, 0); };
    Create_index_stmtContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    Object.defineProperty(Create_index_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_create_index_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Create_index_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterCreate_index_stmt) {
            listener.enterCreate_index_stmt(this);
        }
    };
    // @Override
    Create_index_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitCreate_index_stmt) {
            listener.exitCreate_index_stmt(this);
        }
    };
    // @Override
    Create_index_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitCreate_index_stmt) {
            return visitor.visitCreate_index_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Create_index_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Create_index_stmtContext = Create_index_stmtContext;
var Create_table_stmtContext = /** @class */ (function (_super) {
    __extends(Create_table_stmtContext, _super);
    function Create_table_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Create_table_stmtContext.prototype.K_CREATE = function () { return this.getToken(SQLiteParser.K_CREATE, 0); };
    Create_table_stmtContext.prototype.K_TABLE = function () { return this.getToken(SQLiteParser.K_TABLE, 0); };
    Create_table_stmtContext.prototype.table_name = function () {
        return this.getRuleContext(0, Table_nameContext);
    };
    Create_table_stmtContext.prototype.OPEN_PAR = function () { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); };
    Create_table_stmtContext.prototype.column_def = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_defContext);
        }
        else {
            return this.getRuleContext(i, Column_defContext);
        }
    };
    Create_table_stmtContext.prototype.CLOSE_PAR = function () { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); };
    Create_table_stmtContext.prototype.K_AS = function () { return this.tryGetToken(SQLiteParser.K_AS, 0); };
    Create_table_stmtContext.prototype.select_stmt = function () {
        return this.tryGetRuleContext(0, Select_stmtContext);
    };
    Create_table_stmtContext.prototype.K_IF = function () { return this.tryGetToken(SQLiteParser.K_IF, 0); };
    Create_table_stmtContext.prototype.K_NOT = function () { return this.tryGetToken(SQLiteParser.K_NOT, 0); };
    Create_table_stmtContext.prototype.K_EXISTS = function () { return this.tryGetToken(SQLiteParser.K_EXISTS, 0); };
    Create_table_stmtContext.prototype.database_name = function () {
        return this.tryGetRuleContext(0, Database_nameContext);
    };
    Create_table_stmtContext.prototype.DOT = function () { return this.tryGetToken(SQLiteParser.DOT, 0); };
    Create_table_stmtContext.prototype.K_TEMP = function () { return this.tryGetToken(SQLiteParser.K_TEMP, 0); };
    Create_table_stmtContext.prototype.K_TEMPORARY = function () { return this.tryGetToken(SQLiteParser.K_TEMPORARY, 0); };
    Create_table_stmtContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    };
    Create_table_stmtContext.prototype.table_constraint = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Table_constraintContext);
        }
        else {
            return this.getRuleContext(i, Table_constraintContext);
        }
    };
    Create_table_stmtContext.prototype.K_WITHOUT = function () { return this.tryGetToken(SQLiteParser.K_WITHOUT, 0); };
    Create_table_stmtContext.prototype.IDENTIFIER = function () { return this.tryGetToken(SQLiteParser.IDENTIFIER, 0); };
    Object.defineProperty(Create_table_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_create_table_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Create_table_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterCreate_table_stmt) {
            listener.enterCreate_table_stmt(this);
        }
    };
    // @Override
    Create_table_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitCreate_table_stmt) {
            listener.exitCreate_table_stmt(this);
        }
    };
    // @Override
    Create_table_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitCreate_table_stmt) {
            return visitor.visitCreate_table_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Create_table_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Create_table_stmtContext = Create_table_stmtContext;
var Create_trigger_stmtContext = /** @class */ (function (_super) {
    __extends(Create_trigger_stmtContext, _super);
    function Create_trigger_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Create_trigger_stmtContext.prototype.K_CREATE = function () { return this.getToken(SQLiteParser.K_CREATE, 0); };
    Create_trigger_stmtContext.prototype.K_TRIGGER = function () { return this.getToken(SQLiteParser.K_TRIGGER, 0); };
    Create_trigger_stmtContext.prototype.trigger_name = function () {
        return this.getRuleContext(0, Trigger_nameContext);
    };
    Create_trigger_stmtContext.prototype.K_ON = function () { return this.getToken(SQLiteParser.K_ON, 0); };
    Create_trigger_stmtContext.prototype.table_name = function () {
        return this.getRuleContext(0, Table_nameContext);
    };
    Create_trigger_stmtContext.prototype.K_BEGIN = function () { return this.getToken(SQLiteParser.K_BEGIN, 0); };
    Create_trigger_stmtContext.prototype.K_END = function () { return this.getToken(SQLiteParser.K_END, 0); };
    Create_trigger_stmtContext.prototype.K_DELETE = function () { return this.tryGetToken(SQLiteParser.K_DELETE, 0); };
    Create_trigger_stmtContext.prototype.K_INSERT = function () { return this.tryGetToken(SQLiteParser.K_INSERT, 0); };
    Create_trigger_stmtContext.prototype.K_UPDATE = function () { return this.tryGetToken(SQLiteParser.K_UPDATE, 0); };
    Create_trigger_stmtContext.prototype.K_IF = function () { return this.tryGetToken(SQLiteParser.K_IF, 0); };
    Create_trigger_stmtContext.prototype.K_NOT = function () { return this.tryGetToken(SQLiteParser.K_NOT, 0); };
    Create_trigger_stmtContext.prototype.K_EXISTS = function () { return this.tryGetToken(SQLiteParser.K_EXISTS, 0); };
    Create_trigger_stmtContext.prototype.database_name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Database_nameContext);
        }
        else {
            return this.getRuleContext(i, Database_nameContext);
        }
    };
    Create_trigger_stmtContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.DOT);
        }
        else {
            return this.getToken(SQLiteParser.DOT, i);
        }
    };
    Create_trigger_stmtContext.prototype.K_BEFORE = function () { return this.tryGetToken(SQLiteParser.K_BEFORE, 0); };
    Create_trigger_stmtContext.prototype.K_AFTER = function () { return this.tryGetToken(SQLiteParser.K_AFTER, 0); };
    Create_trigger_stmtContext.prototype.K_INSTEAD = function () { return this.tryGetToken(SQLiteParser.K_INSTEAD, 0); };
    Create_trigger_stmtContext.prototype.K_OF = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.K_OF);
        }
        else {
            return this.getToken(SQLiteParser.K_OF, i);
        }
    };
    Create_trigger_stmtContext.prototype.K_FOR = function () { return this.tryGetToken(SQLiteParser.K_FOR, 0); };
    Create_trigger_stmtContext.prototype.K_EACH = function () { return this.tryGetToken(SQLiteParser.K_EACH, 0); };
    Create_trigger_stmtContext.prototype.K_ROW = function () { return this.tryGetToken(SQLiteParser.K_ROW, 0); };
    Create_trigger_stmtContext.prototype.K_WHEN = function () { return this.tryGetToken(SQLiteParser.K_WHEN, 0); };
    Create_trigger_stmtContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    Create_trigger_stmtContext.prototype.SCOL = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.SCOL);
        }
        else {
            return this.getToken(SQLiteParser.SCOL, i);
        }
    };
    Create_trigger_stmtContext.prototype.K_TEMP = function () { return this.tryGetToken(SQLiteParser.K_TEMP, 0); };
    Create_trigger_stmtContext.prototype.K_TEMPORARY = function () { return this.tryGetToken(SQLiteParser.K_TEMPORARY, 0); };
    Create_trigger_stmtContext.prototype.column_name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        else {
            return this.getRuleContext(i, Column_nameContext);
        }
    };
    Create_trigger_stmtContext.prototype.update_stmt = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Update_stmtContext);
        }
        else {
            return this.getRuleContext(i, Update_stmtContext);
        }
    };
    Create_trigger_stmtContext.prototype.insert_stmt = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Insert_stmtContext);
        }
        else {
            return this.getRuleContext(i, Insert_stmtContext);
        }
    };
    Create_trigger_stmtContext.prototype.delete_stmt = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Delete_stmtContext);
        }
        else {
            return this.getRuleContext(i, Delete_stmtContext);
        }
    };
    Create_trigger_stmtContext.prototype.select_stmt = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Select_stmtContext);
        }
        else {
            return this.getRuleContext(i, Select_stmtContext);
        }
    };
    Create_trigger_stmtContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    };
    Object.defineProperty(Create_trigger_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_create_trigger_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Create_trigger_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterCreate_trigger_stmt) {
            listener.enterCreate_trigger_stmt(this);
        }
    };
    // @Override
    Create_trigger_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitCreate_trigger_stmt) {
            listener.exitCreate_trigger_stmt(this);
        }
    };
    // @Override
    Create_trigger_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitCreate_trigger_stmt) {
            return visitor.visitCreate_trigger_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Create_trigger_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Create_trigger_stmtContext = Create_trigger_stmtContext;
var Create_view_stmtContext = /** @class */ (function (_super) {
    __extends(Create_view_stmtContext, _super);
    function Create_view_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Create_view_stmtContext.prototype.K_CREATE = function () { return this.getToken(SQLiteParser.K_CREATE, 0); };
    Create_view_stmtContext.prototype.K_VIEW = function () { return this.getToken(SQLiteParser.K_VIEW, 0); };
    Create_view_stmtContext.prototype.view_name = function () {
        return this.getRuleContext(0, View_nameContext);
    };
    Create_view_stmtContext.prototype.K_AS = function () { return this.getToken(SQLiteParser.K_AS, 0); };
    Create_view_stmtContext.prototype.select_stmt = function () {
        return this.getRuleContext(0, Select_stmtContext);
    };
    Create_view_stmtContext.prototype.K_IF = function () { return this.tryGetToken(SQLiteParser.K_IF, 0); };
    Create_view_stmtContext.prototype.K_NOT = function () { return this.tryGetToken(SQLiteParser.K_NOT, 0); };
    Create_view_stmtContext.prototype.K_EXISTS = function () { return this.tryGetToken(SQLiteParser.K_EXISTS, 0); };
    Create_view_stmtContext.prototype.database_name = function () {
        return this.tryGetRuleContext(0, Database_nameContext);
    };
    Create_view_stmtContext.prototype.DOT = function () { return this.tryGetToken(SQLiteParser.DOT, 0); };
    Create_view_stmtContext.prototype.K_TEMP = function () { return this.tryGetToken(SQLiteParser.K_TEMP, 0); };
    Create_view_stmtContext.prototype.K_TEMPORARY = function () { return this.tryGetToken(SQLiteParser.K_TEMPORARY, 0); };
    Object.defineProperty(Create_view_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_create_view_stmt; },
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
var Create_virtual_table_stmtContext = /** @class */ (function (_super) {
    __extends(Create_virtual_table_stmtContext, _super);
    function Create_virtual_table_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Create_virtual_table_stmtContext.prototype.K_CREATE = function () { return this.getToken(SQLiteParser.K_CREATE, 0); };
    Create_virtual_table_stmtContext.prototype.K_VIRTUAL = function () { return this.getToken(SQLiteParser.K_VIRTUAL, 0); };
    Create_virtual_table_stmtContext.prototype.K_TABLE = function () { return this.getToken(SQLiteParser.K_TABLE, 0); };
    Create_virtual_table_stmtContext.prototype.table_name = function () {
        return this.getRuleContext(0, Table_nameContext);
    };
    Create_virtual_table_stmtContext.prototype.K_USING = function () { return this.getToken(SQLiteParser.K_USING, 0); };
    Create_virtual_table_stmtContext.prototype.module_name = function () {
        return this.getRuleContext(0, Module_nameContext);
    };
    Create_virtual_table_stmtContext.prototype.K_IF = function () { return this.tryGetToken(SQLiteParser.K_IF, 0); };
    Create_virtual_table_stmtContext.prototype.K_NOT = function () { return this.tryGetToken(SQLiteParser.K_NOT, 0); };
    Create_virtual_table_stmtContext.prototype.K_EXISTS = function () { return this.tryGetToken(SQLiteParser.K_EXISTS, 0); };
    Create_virtual_table_stmtContext.prototype.database_name = function () {
        return this.tryGetRuleContext(0, Database_nameContext);
    };
    Create_virtual_table_stmtContext.prototype.DOT = function () { return this.tryGetToken(SQLiteParser.DOT, 0); };
    Create_virtual_table_stmtContext.prototype.OPEN_PAR = function () { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); };
    Create_virtual_table_stmtContext.prototype.module_argument = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Module_argumentContext);
        }
        else {
            return this.getRuleContext(i, Module_argumentContext);
        }
    };
    Create_virtual_table_stmtContext.prototype.CLOSE_PAR = function () { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); };
    Create_virtual_table_stmtContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    };
    Object.defineProperty(Create_virtual_table_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_create_virtual_table_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Create_virtual_table_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterCreate_virtual_table_stmt) {
            listener.enterCreate_virtual_table_stmt(this);
        }
    };
    // @Override
    Create_virtual_table_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitCreate_virtual_table_stmt) {
            listener.exitCreate_virtual_table_stmt(this);
        }
    };
    // @Override
    Create_virtual_table_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitCreate_virtual_table_stmt) {
            return visitor.visitCreate_virtual_table_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Create_virtual_table_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Create_virtual_table_stmtContext = Create_virtual_table_stmtContext;
var Delete_stmtContext = /** @class */ (function (_super) {
    __extends(Delete_stmtContext, _super);
    function Delete_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Delete_stmtContext.prototype.K_DELETE = function () { return this.getToken(SQLiteParser.K_DELETE, 0); };
    Delete_stmtContext.prototype.K_FROM = function () { return this.getToken(SQLiteParser.K_FROM, 0); };
    Delete_stmtContext.prototype.qualified_table_name = function () {
        return this.getRuleContext(0, Qualified_table_nameContext);
    };
    Delete_stmtContext.prototype.with_clause = function () {
        return this.tryGetRuleContext(0, With_clauseContext);
    };
    Delete_stmtContext.prototype.K_WHERE = function () { return this.tryGetToken(SQLiteParser.K_WHERE, 0); };
    Delete_stmtContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    Object.defineProperty(Delete_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_delete_stmt; },
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
var Delete_stmt_limitedContext = /** @class */ (function (_super) {
    __extends(Delete_stmt_limitedContext, _super);
    function Delete_stmt_limitedContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Delete_stmt_limitedContext.prototype.K_DELETE = function () { return this.getToken(SQLiteParser.K_DELETE, 0); };
    Delete_stmt_limitedContext.prototype.K_FROM = function () { return this.getToken(SQLiteParser.K_FROM, 0); };
    Delete_stmt_limitedContext.prototype.qualified_table_name = function () {
        return this.getRuleContext(0, Qualified_table_nameContext);
    };
    Delete_stmt_limitedContext.prototype.with_clause = function () {
        return this.tryGetRuleContext(0, With_clauseContext);
    };
    Delete_stmt_limitedContext.prototype.K_WHERE = function () { return this.tryGetToken(SQLiteParser.K_WHERE, 0); };
    Delete_stmt_limitedContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    Delete_stmt_limitedContext.prototype.K_LIMIT = function () { return this.tryGetToken(SQLiteParser.K_LIMIT, 0); };
    Delete_stmt_limitedContext.prototype.K_ORDER = function () { return this.tryGetToken(SQLiteParser.K_ORDER, 0); };
    Delete_stmt_limitedContext.prototype.K_BY = function () { return this.tryGetToken(SQLiteParser.K_BY, 0); };
    Delete_stmt_limitedContext.prototype.ordering_term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Ordering_termContext);
        }
        else {
            return this.getRuleContext(i, Ordering_termContext);
        }
    };
    Delete_stmt_limitedContext.prototype.K_OFFSET = function () { return this.tryGetToken(SQLiteParser.K_OFFSET, 0); };
    Delete_stmt_limitedContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    };
    Object.defineProperty(Delete_stmt_limitedContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_delete_stmt_limited; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Delete_stmt_limitedContext.prototype.enterRule = function (listener) {
        if (listener.enterDelete_stmt_limited) {
            listener.enterDelete_stmt_limited(this);
        }
    };
    // @Override
    Delete_stmt_limitedContext.prototype.exitRule = function (listener) {
        if (listener.exitDelete_stmt_limited) {
            listener.exitDelete_stmt_limited(this);
        }
    };
    // @Override
    Delete_stmt_limitedContext.prototype.accept = function (visitor) {
        if (visitor.visitDelete_stmt_limited) {
            return visitor.visitDelete_stmt_limited(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Delete_stmt_limitedContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Delete_stmt_limitedContext = Delete_stmt_limitedContext;
var Detach_stmtContext = /** @class */ (function (_super) {
    __extends(Detach_stmtContext, _super);
    function Detach_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Detach_stmtContext.prototype.K_DETACH = function () { return this.getToken(SQLiteParser.K_DETACH, 0); };
    Detach_stmtContext.prototype.database_name = function () {
        return this.getRuleContext(0, Database_nameContext);
    };
    Detach_stmtContext.prototype.K_DATABASE = function () { return this.tryGetToken(SQLiteParser.K_DATABASE, 0); };
    Object.defineProperty(Detach_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_detach_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Detach_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterDetach_stmt) {
            listener.enterDetach_stmt(this);
        }
    };
    // @Override
    Detach_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitDetach_stmt) {
            listener.exitDetach_stmt(this);
        }
    };
    // @Override
    Detach_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitDetach_stmt) {
            return visitor.visitDetach_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Detach_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Detach_stmtContext = Detach_stmtContext;
var Drop_index_stmtContext = /** @class */ (function (_super) {
    __extends(Drop_index_stmtContext, _super);
    function Drop_index_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Drop_index_stmtContext.prototype.K_DROP = function () { return this.getToken(SQLiteParser.K_DROP, 0); };
    Drop_index_stmtContext.prototype.K_INDEX = function () { return this.getToken(SQLiteParser.K_INDEX, 0); };
    Drop_index_stmtContext.prototype.index_name = function () {
        return this.getRuleContext(0, Index_nameContext);
    };
    Drop_index_stmtContext.prototype.K_IF = function () { return this.tryGetToken(SQLiteParser.K_IF, 0); };
    Drop_index_stmtContext.prototype.K_EXISTS = function () { return this.tryGetToken(SQLiteParser.K_EXISTS, 0); };
    Drop_index_stmtContext.prototype.database_name = function () {
        return this.tryGetRuleContext(0, Database_nameContext);
    };
    Drop_index_stmtContext.prototype.DOT = function () { return this.tryGetToken(SQLiteParser.DOT, 0); };
    Object.defineProperty(Drop_index_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_drop_index_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Drop_index_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterDrop_index_stmt) {
            listener.enterDrop_index_stmt(this);
        }
    };
    // @Override
    Drop_index_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitDrop_index_stmt) {
            listener.exitDrop_index_stmt(this);
        }
    };
    // @Override
    Drop_index_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitDrop_index_stmt) {
            return visitor.visitDrop_index_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Drop_index_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Drop_index_stmtContext = Drop_index_stmtContext;
var Drop_table_stmtContext = /** @class */ (function (_super) {
    __extends(Drop_table_stmtContext, _super);
    function Drop_table_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Drop_table_stmtContext.prototype.K_DROP = function () { return this.getToken(SQLiteParser.K_DROP, 0); };
    Drop_table_stmtContext.prototype.K_TABLE = function () { return this.getToken(SQLiteParser.K_TABLE, 0); };
    Drop_table_stmtContext.prototype.table_name = function () {
        return this.getRuleContext(0, Table_nameContext);
    };
    Drop_table_stmtContext.prototype.K_IF = function () { return this.tryGetToken(SQLiteParser.K_IF, 0); };
    Drop_table_stmtContext.prototype.K_EXISTS = function () { return this.tryGetToken(SQLiteParser.K_EXISTS, 0); };
    Drop_table_stmtContext.prototype.database_name = function () {
        return this.tryGetRuleContext(0, Database_nameContext);
    };
    Drop_table_stmtContext.prototype.DOT = function () { return this.tryGetToken(SQLiteParser.DOT, 0); };
    Object.defineProperty(Drop_table_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_drop_table_stmt; },
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
var Drop_trigger_stmtContext = /** @class */ (function (_super) {
    __extends(Drop_trigger_stmtContext, _super);
    function Drop_trigger_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Drop_trigger_stmtContext.prototype.K_DROP = function () { return this.getToken(SQLiteParser.K_DROP, 0); };
    Drop_trigger_stmtContext.prototype.K_TRIGGER = function () { return this.getToken(SQLiteParser.K_TRIGGER, 0); };
    Drop_trigger_stmtContext.prototype.trigger_name = function () {
        return this.getRuleContext(0, Trigger_nameContext);
    };
    Drop_trigger_stmtContext.prototype.K_IF = function () { return this.tryGetToken(SQLiteParser.K_IF, 0); };
    Drop_trigger_stmtContext.prototype.K_EXISTS = function () { return this.tryGetToken(SQLiteParser.K_EXISTS, 0); };
    Drop_trigger_stmtContext.prototype.database_name = function () {
        return this.tryGetRuleContext(0, Database_nameContext);
    };
    Drop_trigger_stmtContext.prototype.DOT = function () { return this.tryGetToken(SQLiteParser.DOT, 0); };
    Object.defineProperty(Drop_trigger_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_drop_trigger_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Drop_trigger_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterDrop_trigger_stmt) {
            listener.enterDrop_trigger_stmt(this);
        }
    };
    // @Override
    Drop_trigger_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitDrop_trigger_stmt) {
            listener.exitDrop_trigger_stmt(this);
        }
    };
    // @Override
    Drop_trigger_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitDrop_trigger_stmt) {
            return visitor.visitDrop_trigger_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Drop_trigger_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Drop_trigger_stmtContext = Drop_trigger_stmtContext;
var Drop_view_stmtContext = /** @class */ (function (_super) {
    __extends(Drop_view_stmtContext, _super);
    function Drop_view_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Drop_view_stmtContext.prototype.K_DROP = function () { return this.getToken(SQLiteParser.K_DROP, 0); };
    Drop_view_stmtContext.prototype.K_VIEW = function () { return this.getToken(SQLiteParser.K_VIEW, 0); };
    Drop_view_stmtContext.prototype.view_name = function () {
        return this.getRuleContext(0, View_nameContext);
    };
    Drop_view_stmtContext.prototype.K_IF = function () { return this.tryGetToken(SQLiteParser.K_IF, 0); };
    Drop_view_stmtContext.prototype.K_EXISTS = function () { return this.tryGetToken(SQLiteParser.K_EXISTS, 0); };
    Drop_view_stmtContext.prototype.database_name = function () {
        return this.tryGetRuleContext(0, Database_nameContext);
    };
    Drop_view_stmtContext.prototype.DOT = function () { return this.tryGetToken(SQLiteParser.DOT, 0); };
    Object.defineProperty(Drop_view_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_drop_view_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Drop_view_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterDrop_view_stmt) {
            listener.enterDrop_view_stmt(this);
        }
    };
    // @Override
    Drop_view_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitDrop_view_stmt) {
            listener.exitDrop_view_stmt(this);
        }
    };
    // @Override
    Drop_view_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitDrop_view_stmt) {
            return visitor.visitDrop_view_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Drop_view_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Drop_view_stmtContext = Drop_view_stmtContext;
var Factored_select_stmtContext = /** @class */ (function (_super) {
    __extends(Factored_select_stmtContext, _super);
    function Factored_select_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Factored_select_stmtContext.prototype.select_core = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Select_coreContext);
        }
        else {
            return this.getRuleContext(i, Select_coreContext);
        }
    };
    Factored_select_stmtContext.prototype.K_WITH = function () { return this.tryGetToken(SQLiteParser.K_WITH, 0); };
    Factored_select_stmtContext.prototype.common_table_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Common_table_expressionContext);
        }
        else {
            return this.getRuleContext(i, Common_table_expressionContext);
        }
    };
    Factored_select_stmtContext.prototype.compound_operator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Compound_operatorContext);
        }
        else {
            return this.getRuleContext(i, Compound_operatorContext);
        }
    };
    Factored_select_stmtContext.prototype.K_ORDER = function () { return this.tryGetToken(SQLiteParser.K_ORDER, 0); };
    Factored_select_stmtContext.prototype.K_BY = function () { return this.tryGetToken(SQLiteParser.K_BY, 0); };
    Factored_select_stmtContext.prototype.ordering_term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Ordering_termContext);
        }
        else {
            return this.getRuleContext(i, Ordering_termContext);
        }
    };
    Factored_select_stmtContext.prototype.K_LIMIT = function () { return this.tryGetToken(SQLiteParser.K_LIMIT, 0); };
    Factored_select_stmtContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    Factored_select_stmtContext.prototype.K_RECURSIVE = function () { return this.tryGetToken(SQLiteParser.K_RECURSIVE, 0); };
    Factored_select_stmtContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    };
    Factored_select_stmtContext.prototype.K_OFFSET = function () { return this.tryGetToken(SQLiteParser.K_OFFSET, 0); };
    Object.defineProperty(Factored_select_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_factored_select_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Factored_select_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterFactored_select_stmt) {
            listener.enterFactored_select_stmt(this);
        }
    };
    // @Override
    Factored_select_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitFactored_select_stmt) {
            listener.exitFactored_select_stmt(this);
        }
    };
    // @Override
    Factored_select_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitFactored_select_stmt) {
            return visitor.visitFactored_select_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Factored_select_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Factored_select_stmtContext = Factored_select_stmtContext;
var Insert_stmtContext = /** @class */ (function (_super) {
    __extends(Insert_stmtContext, _super);
    function Insert_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Insert_stmtContext.prototype.K_INTO = function () { return this.getToken(SQLiteParser.K_INTO, 0); };
    Insert_stmtContext.prototype.table_name = function () {
        return this.getRuleContext(0, Table_nameContext);
    };
    Insert_stmtContext.prototype.K_INSERT = function () { return this.tryGetToken(SQLiteParser.K_INSERT, 0); };
    Insert_stmtContext.prototype.K_REPLACE = function () { return this.tryGetToken(SQLiteParser.K_REPLACE, 0); };
    Insert_stmtContext.prototype.K_OR = function () { return this.tryGetToken(SQLiteParser.K_OR, 0); };
    Insert_stmtContext.prototype.K_ROLLBACK = function () { return this.tryGetToken(SQLiteParser.K_ROLLBACK, 0); };
    Insert_stmtContext.prototype.K_ABORT = function () { return this.tryGetToken(SQLiteParser.K_ABORT, 0); };
    Insert_stmtContext.prototype.K_FAIL = function () { return this.tryGetToken(SQLiteParser.K_FAIL, 0); };
    Insert_stmtContext.prototype.K_IGNORE = function () { return this.tryGetToken(SQLiteParser.K_IGNORE, 0); };
    Insert_stmtContext.prototype.K_VALUES = function () { return this.tryGetToken(SQLiteParser.K_VALUES, 0); };
    Insert_stmtContext.prototype.OPEN_PAR = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.OPEN_PAR);
        }
        else {
            return this.getToken(SQLiteParser.OPEN_PAR, i);
        }
    };
    Insert_stmtContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    Insert_stmtContext.prototype.CLOSE_PAR = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.CLOSE_PAR);
        }
        else {
            return this.getToken(SQLiteParser.CLOSE_PAR, i);
        }
    };
    Insert_stmtContext.prototype.select_stmt = function () {
        return this.tryGetRuleContext(0, Select_stmtContext);
    };
    Insert_stmtContext.prototype.K_DEFAULT = function () { return this.tryGetToken(SQLiteParser.K_DEFAULT, 0); };
    Insert_stmtContext.prototype.with_clause = function () {
        return this.tryGetRuleContext(0, With_clauseContext);
    };
    Insert_stmtContext.prototype.database_name = function () {
        return this.tryGetRuleContext(0, Database_nameContext);
    };
    Insert_stmtContext.prototype.DOT = function () { return this.tryGetToken(SQLiteParser.DOT, 0); };
    Insert_stmtContext.prototype.column_name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        else {
            return this.getRuleContext(i, Column_nameContext);
        }
    };
    Insert_stmtContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    };
    Object.defineProperty(Insert_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_insert_stmt; },
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
var Pragma_stmtContext = /** @class */ (function (_super) {
    __extends(Pragma_stmtContext, _super);
    function Pragma_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Pragma_stmtContext.prototype.K_PRAGMA = function () { return this.getToken(SQLiteParser.K_PRAGMA, 0); };
    Pragma_stmtContext.prototype.pragma_name = function () {
        return this.getRuleContext(0, Pragma_nameContext);
    };
    Pragma_stmtContext.prototype.database_name = function () {
        return this.tryGetRuleContext(0, Database_nameContext);
    };
    Pragma_stmtContext.prototype.DOT = function () { return this.tryGetToken(SQLiteParser.DOT, 0); };
    Pragma_stmtContext.prototype.ASSIGN = function () { return this.tryGetToken(SQLiteParser.ASSIGN, 0); };
    Pragma_stmtContext.prototype.pragma_value = function () {
        return this.tryGetRuleContext(0, Pragma_valueContext);
    };
    Pragma_stmtContext.prototype.OPEN_PAR = function () { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); };
    Pragma_stmtContext.prototype.CLOSE_PAR = function () { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); };
    Object.defineProperty(Pragma_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_pragma_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Pragma_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterPragma_stmt) {
            listener.enterPragma_stmt(this);
        }
    };
    // @Override
    Pragma_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitPragma_stmt) {
            listener.exitPragma_stmt(this);
        }
    };
    // @Override
    Pragma_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitPragma_stmt) {
            return visitor.visitPragma_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Pragma_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Pragma_stmtContext = Pragma_stmtContext;
var Reindex_stmtContext = /** @class */ (function (_super) {
    __extends(Reindex_stmtContext, _super);
    function Reindex_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Reindex_stmtContext.prototype.K_REINDEX = function () { return this.getToken(SQLiteParser.K_REINDEX, 0); };
    Reindex_stmtContext.prototype.collation_name = function () {
        return this.tryGetRuleContext(0, Collation_nameContext);
    };
    Reindex_stmtContext.prototype.table_name = function () {
        return this.tryGetRuleContext(0, Table_nameContext);
    };
    Reindex_stmtContext.prototype.index_name = function () {
        return this.tryGetRuleContext(0, Index_nameContext);
    };
    Reindex_stmtContext.prototype.database_name = function () {
        return this.tryGetRuleContext(0, Database_nameContext);
    };
    Reindex_stmtContext.prototype.DOT = function () { return this.tryGetToken(SQLiteParser.DOT, 0); };
    Object.defineProperty(Reindex_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_reindex_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Reindex_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterReindex_stmt) {
            listener.enterReindex_stmt(this);
        }
    };
    // @Override
    Reindex_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitReindex_stmt) {
            listener.exitReindex_stmt(this);
        }
    };
    // @Override
    Reindex_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitReindex_stmt) {
            return visitor.visitReindex_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Reindex_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Reindex_stmtContext = Reindex_stmtContext;
var Release_stmtContext = /** @class */ (function (_super) {
    __extends(Release_stmtContext, _super);
    function Release_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Release_stmtContext.prototype.K_RELEASE = function () { return this.getToken(SQLiteParser.K_RELEASE, 0); };
    Release_stmtContext.prototype.savepoint_name = function () {
        return this.getRuleContext(0, Savepoint_nameContext);
    };
    Release_stmtContext.prototype.K_SAVEPOINT = function () { return this.tryGetToken(SQLiteParser.K_SAVEPOINT, 0); };
    Object.defineProperty(Release_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_release_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Release_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterRelease_stmt) {
            listener.enterRelease_stmt(this);
        }
    };
    // @Override
    Release_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitRelease_stmt) {
            listener.exitRelease_stmt(this);
        }
    };
    // @Override
    Release_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitRelease_stmt) {
            return visitor.visitRelease_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Release_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Release_stmtContext = Release_stmtContext;
var Rollback_stmtContext = /** @class */ (function (_super) {
    __extends(Rollback_stmtContext, _super);
    function Rollback_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rollback_stmtContext.prototype.K_ROLLBACK = function () { return this.getToken(SQLiteParser.K_ROLLBACK, 0); };
    Rollback_stmtContext.prototype.K_TRANSACTION = function () { return this.tryGetToken(SQLiteParser.K_TRANSACTION, 0); };
    Rollback_stmtContext.prototype.K_TO = function () { return this.tryGetToken(SQLiteParser.K_TO, 0); };
    Rollback_stmtContext.prototype.savepoint_name = function () {
        return this.tryGetRuleContext(0, Savepoint_nameContext);
    };
    Rollback_stmtContext.prototype.transaction_name = function () {
        return this.tryGetRuleContext(0, Transaction_nameContext);
    };
    Rollback_stmtContext.prototype.K_SAVEPOINT = function () { return this.tryGetToken(SQLiteParser.K_SAVEPOINT, 0); };
    Object.defineProperty(Rollback_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_rollback_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Rollback_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterRollback_stmt) {
            listener.enterRollback_stmt(this);
        }
    };
    // @Override
    Rollback_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitRollback_stmt) {
            listener.exitRollback_stmt(this);
        }
    };
    // @Override
    Rollback_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitRollback_stmt) {
            return visitor.visitRollback_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Rollback_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Rollback_stmtContext = Rollback_stmtContext;
var Savepoint_stmtContext = /** @class */ (function (_super) {
    __extends(Savepoint_stmtContext, _super);
    function Savepoint_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Savepoint_stmtContext.prototype.K_SAVEPOINT = function () { return this.getToken(SQLiteParser.K_SAVEPOINT, 0); };
    Savepoint_stmtContext.prototype.savepoint_name = function () {
        return this.getRuleContext(0, Savepoint_nameContext);
    };
    Object.defineProperty(Savepoint_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_savepoint_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Savepoint_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterSavepoint_stmt) {
            listener.enterSavepoint_stmt(this);
        }
    };
    // @Override
    Savepoint_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitSavepoint_stmt) {
            listener.exitSavepoint_stmt(this);
        }
    };
    // @Override
    Savepoint_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitSavepoint_stmt) {
            return visitor.visitSavepoint_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Savepoint_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Savepoint_stmtContext = Savepoint_stmtContext;
var Simple_select_stmtContext = /** @class */ (function (_super) {
    __extends(Simple_select_stmtContext, _super);
    function Simple_select_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Simple_select_stmtContext.prototype.select_core = function () {
        return this.getRuleContext(0, Select_coreContext);
    };
    Simple_select_stmtContext.prototype.K_WITH = function () { return this.tryGetToken(SQLiteParser.K_WITH, 0); };
    Simple_select_stmtContext.prototype.common_table_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Common_table_expressionContext);
        }
        else {
            return this.getRuleContext(i, Common_table_expressionContext);
        }
    };
    Simple_select_stmtContext.prototype.K_ORDER = function () { return this.tryGetToken(SQLiteParser.K_ORDER, 0); };
    Simple_select_stmtContext.prototype.K_BY = function () { return this.tryGetToken(SQLiteParser.K_BY, 0); };
    Simple_select_stmtContext.prototype.ordering_term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Ordering_termContext);
        }
        else {
            return this.getRuleContext(i, Ordering_termContext);
        }
    };
    Simple_select_stmtContext.prototype.K_LIMIT = function () { return this.tryGetToken(SQLiteParser.K_LIMIT, 0); };
    Simple_select_stmtContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    Simple_select_stmtContext.prototype.K_RECURSIVE = function () { return this.tryGetToken(SQLiteParser.K_RECURSIVE, 0); };
    Simple_select_stmtContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    };
    Simple_select_stmtContext.prototype.K_OFFSET = function () { return this.tryGetToken(SQLiteParser.K_OFFSET, 0); };
    Object.defineProperty(Simple_select_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_simple_select_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Simple_select_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterSimple_select_stmt) {
            listener.enterSimple_select_stmt(this);
        }
    };
    // @Override
    Simple_select_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitSimple_select_stmt) {
            listener.exitSimple_select_stmt(this);
        }
    };
    // @Override
    Simple_select_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitSimple_select_stmt) {
            return visitor.visitSimple_select_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Simple_select_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Simple_select_stmtContext = Simple_select_stmtContext;
var Select_stmtContext = /** @class */ (function (_super) {
    __extends(Select_stmtContext, _super);
    function Select_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Select_stmtContext.prototype.select_or_values = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Select_or_valuesContext);
        }
        else {
            return this.getRuleContext(i, Select_or_valuesContext);
        }
    };
    Select_stmtContext.prototype.K_WITH = function () { return this.tryGetToken(SQLiteParser.K_WITH, 0); };
    Select_stmtContext.prototype.common_table_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Common_table_expressionContext);
        }
        else {
            return this.getRuleContext(i, Common_table_expressionContext);
        }
    };
    Select_stmtContext.prototype.compound_operator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Compound_operatorContext);
        }
        else {
            return this.getRuleContext(i, Compound_operatorContext);
        }
    };
    Select_stmtContext.prototype.K_ORDER = function () { return this.tryGetToken(SQLiteParser.K_ORDER, 0); };
    Select_stmtContext.prototype.K_BY = function () { return this.tryGetToken(SQLiteParser.K_BY, 0); };
    Select_stmtContext.prototype.ordering_term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Ordering_termContext);
        }
        else {
            return this.getRuleContext(i, Ordering_termContext);
        }
    };
    Select_stmtContext.prototype.K_LIMIT = function () { return this.tryGetToken(SQLiteParser.K_LIMIT, 0); };
    Select_stmtContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    Select_stmtContext.prototype.K_RECURSIVE = function () { return this.tryGetToken(SQLiteParser.K_RECURSIVE, 0); };
    Select_stmtContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    };
    Select_stmtContext.prototype.K_OFFSET = function () { return this.tryGetToken(SQLiteParser.K_OFFSET, 0); };
    Object.defineProperty(Select_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_select_stmt; },
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
var Select_or_valuesContext = /** @class */ (function (_super) {
    __extends(Select_or_valuesContext, _super);
    function Select_or_valuesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Select_or_valuesContext.prototype.K_SELECT = function () { return this.tryGetToken(SQLiteParser.K_SELECT, 0); };
    Select_or_valuesContext.prototype.result_column = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Result_columnContext);
        }
        else {
            return this.getRuleContext(i, Result_columnContext);
        }
    };
    Select_or_valuesContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    };
    Select_or_valuesContext.prototype.K_FROM = function () { return this.tryGetToken(SQLiteParser.K_FROM, 0); };
    Select_or_valuesContext.prototype.K_WHERE = function () { return this.tryGetToken(SQLiteParser.K_WHERE, 0); };
    Select_or_valuesContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    Select_or_valuesContext.prototype.K_GROUP = function () { return this.tryGetToken(SQLiteParser.K_GROUP, 0); };
    Select_or_valuesContext.prototype.K_BY = function () { return this.tryGetToken(SQLiteParser.K_BY, 0); };
    Select_or_valuesContext.prototype.K_DISTINCT = function () { return this.tryGetToken(SQLiteParser.K_DISTINCT, 0); };
    Select_or_valuesContext.prototype.K_ALL = function () { return this.tryGetToken(SQLiteParser.K_ALL, 0); };
    Select_or_valuesContext.prototype.table_or_subquery = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Table_or_subqueryContext);
        }
        else {
            return this.getRuleContext(i, Table_or_subqueryContext);
        }
    };
    Select_or_valuesContext.prototype.join_clause = function () {
        return this.tryGetRuleContext(0, Join_clauseContext);
    };
    Select_or_valuesContext.prototype.K_HAVING = function () { return this.tryGetToken(SQLiteParser.K_HAVING, 0); };
    Select_or_valuesContext.prototype.K_VALUES = function () { return this.tryGetToken(SQLiteParser.K_VALUES, 0); };
    Select_or_valuesContext.prototype.OPEN_PAR = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.OPEN_PAR);
        }
        else {
            return this.getToken(SQLiteParser.OPEN_PAR, i);
        }
    };
    Select_or_valuesContext.prototype.CLOSE_PAR = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.CLOSE_PAR);
        }
        else {
            return this.getToken(SQLiteParser.CLOSE_PAR, i);
        }
    };
    Object.defineProperty(Select_or_valuesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_select_or_values; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Select_or_valuesContext.prototype.enterRule = function (listener) {
        if (listener.enterSelect_or_values) {
            listener.enterSelect_or_values(this);
        }
    };
    // @Override
    Select_or_valuesContext.prototype.exitRule = function (listener) {
        if (listener.exitSelect_or_values) {
            listener.exitSelect_or_values(this);
        }
    };
    // @Override
    Select_or_valuesContext.prototype.accept = function (visitor) {
        if (visitor.visitSelect_or_values) {
            return visitor.visitSelect_or_values(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Select_or_valuesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Select_or_valuesContext = Select_or_valuesContext;
var Update_stmtContext = /** @class */ (function (_super) {
    __extends(Update_stmtContext, _super);
    function Update_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Update_stmtContext.prototype.K_UPDATE = function () { return this.getToken(SQLiteParser.K_UPDATE, 0); };
    Update_stmtContext.prototype.qualified_table_name = function () {
        return this.getRuleContext(0, Qualified_table_nameContext);
    };
    Update_stmtContext.prototype.K_SET = function () { return this.getToken(SQLiteParser.K_SET, 0); };
    Update_stmtContext.prototype.column_name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        else {
            return this.getRuleContext(i, Column_nameContext);
        }
    };
    Update_stmtContext.prototype.ASSIGN = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.ASSIGN);
        }
        else {
            return this.getToken(SQLiteParser.ASSIGN, i);
        }
    };
    Update_stmtContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    Update_stmtContext.prototype.with_clause = function () {
        return this.tryGetRuleContext(0, With_clauseContext);
    };
    Update_stmtContext.prototype.K_OR = function () { return this.tryGetToken(SQLiteParser.K_OR, 0); };
    Update_stmtContext.prototype.K_ROLLBACK = function () { return this.tryGetToken(SQLiteParser.K_ROLLBACK, 0); };
    Update_stmtContext.prototype.K_ABORT = function () { return this.tryGetToken(SQLiteParser.K_ABORT, 0); };
    Update_stmtContext.prototype.K_REPLACE = function () { return this.tryGetToken(SQLiteParser.K_REPLACE, 0); };
    Update_stmtContext.prototype.K_FAIL = function () { return this.tryGetToken(SQLiteParser.K_FAIL, 0); };
    Update_stmtContext.prototype.K_IGNORE = function () { return this.tryGetToken(SQLiteParser.K_IGNORE, 0); };
    Update_stmtContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    };
    Update_stmtContext.prototype.K_WHERE = function () { return this.tryGetToken(SQLiteParser.K_WHERE, 0); };
    Object.defineProperty(Update_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_update_stmt; },
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
var Update_stmt_limitedContext = /** @class */ (function (_super) {
    __extends(Update_stmt_limitedContext, _super);
    function Update_stmt_limitedContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Update_stmt_limitedContext.prototype.K_UPDATE = function () { return this.getToken(SQLiteParser.K_UPDATE, 0); };
    Update_stmt_limitedContext.prototype.qualified_table_name = function () {
        return this.getRuleContext(0, Qualified_table_nameContext);
    };
    Update_stmt_limitedContext.prototype.K_SET = function () { return this.getToken(SQLiteParser.K_SET, 0); };
    Update_stmt_limitedContext.prototype.column_name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        else {
            return this.getRuleContext(i, Column_nameContext);
        }
    };
    Update_stmt_limitedContext.prototype.ASSIGN = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.ASSIGN);
        }
        else {
            return this.getToken(SQLiteParser.ASSIGN, i);
        }
    };
    Update_stmt_limitedContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    Update_stmt_limitedContext.prototype.with_clause = function () {
        return this.tryGetRuleContext(0, With_clauseContext);
    };
    Update_stmt_limitedContext.prototype.K_OR = function () { return this.tryGetToken(SQLiteParser.K_OR, 0); };
    Update_stmt_limitedContext.prototype.K_ROLLBACK = function () { return this.tryGetToken(SQLiteParser.K_ROLLBACK, 0); };
    Update_stmt_limitedContext.prototype.K_ABORT = function () { return this.tryGetToken(SQLiteParser.K_ABORT, 0); };
    Update_stmt_limitedContext.prototype.K_REPLACE = function () { return this.tryGetToken(SQLiteParser.K_REPLACE, 0); };
    Update_stmt_limitedContext.prototype.K_FAIL = function () { return this.tryGetToken(SQLiteParser.K_FAIL, 0); };
    Update_stmt_limitedContext.prototype.K_IGNORE = function () { return this.tryGetToken(SQLiteParser.K_IGNORE, 0); };
    Update_stmt_limitedContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    };
    Update_stmt_limitedContext.prototype.K_WHERE = function () { return this.tryGetToken(SQLiteParser.K_WHERE, 0); };
    Update_stmt_limitedContext.prototype.K_LIMIT = function () { return this.tryGetToken(SQLiteParser.K_LIMIT, 0); };
    Update_stmt_limitedContext.prototype.K_ORDER = function () { return this.tryGetToken(SQLiteParser.K_ORDER, 0); };
    Update_stmt_limitedContext.prototype.K_BY = function () { return this.tryGetToken(SQLiteParser.K_BY, 0); };
    Update_stmt_limitedContext.prototype.ordering_term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Ordering_termContext);
        }
        else {
            return this.getRuleContext(i, Ordering_termContext);
        }
    };
    Update_stmt_limitedContext.prototype.K_OFFSET = function () { return this.tryGetToken(SQLiteParser.K_OFFSET, 0); };
    Object.defineProperty(Update_stmt_limitedContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_update_stmt_limited; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Update_stmt_limitedContext.prototype.enterRule = function (listener) {
        if (listener.enterUpdate_stmt_limited) {
            listener.enterUpdate_stmt_limited(this);
        }
    };
    // @Override
    Update_stmt_limitedContext.prototype.exitRule = function (listener) {
        if (listener.exitUpdate_stmt_limited) {
            listener.exitUpdate_stmt_limited(this);
        }
    };
    // @Override
    Update_stmt_limitedContext.prototype.accept = function (visitor) {
        if (visitor.visitUpdate_stmt_limited) {
            return visitor.visitUpdate_stmt_limited(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Update_stmt_limitedContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Update_stmt_limitedContext = Update_stmt_limitedContext;
var Vacuum_stmtContext = /** @class */ (function (_super) {
    __extends(Vacuum_stmtContext, _super);
    function Vacuum_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Vacuum_stmtContext.prototype.K_VACUUM = function () { return this.getToken(SQLiteParser.K_VACUUM, 0); };
    Object.defineProperty(Vacuum_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_vacuum_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Vacuum_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterVacuum_stmt) {
            listener.enterVacuum_stmt(this);
        }
    };
    // @Override
    Vacuum_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitVacuum_stmt) {
            listener.exitVacuum_stmt(this);
        }
    };
    // @Override
    Vacuum_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitVacuum_stmt) {
            return visitor.visitVacuum_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Vacuum_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Vacuum_stmtContext = Vacuum_stmtContext;
var Column_defContext = /** @class */ (function (_super) {
    __extends(Column_defContext, _super);
    function Column_defContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Column_defContext.prototype.column_name = function () {
        return this.getRuleContext(0, Column_nameContext);
    };
    Column_defContext.prototype.type_name = function () {
        return this.tryGetRuleContext(0, Type_nameContext);
    };
    Column_defContext.prototype.column_constraint = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_constraintContext);
        }
        else {
            return this.getRuleContext(i, Column_constraintContext);
        }
    };
    Object.defineProperty(Column_defContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_column_def; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Column_defContext.prototype.enterRule = function (listener) {
        if (listener.enterColumn_def) {
            listener.enterColumn_def(this);
        }
    };
    // @Override
    Column_defContext.prototype.exitRule = function (listener) {
        if (listener.exitColumn_def) {
            listener.exitColumn_def(this);
        }
    };
    // @Override
    Column_defContext.prototype.accept = function (visitor) {
        if (visitor.visitColumn_def) {
            return visitor.visitColumn_def(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Column_defContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Column_defContext = Column_defContext;
var Type_nameContext = /** @class */ (function (_super) {
    __extends(Type_nameContext, _super);
    function Type_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Type_nameContext.prototype.name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NameContext);
        }
        else {
            return this.getRuleContext(i, NameContext);
        }
    };
    Type_nameContext.prototype.OPEN_PAR = function () { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); };
    Type_nameContext.prototype.signed_number = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Signed_numberContext);
        }
        else {
            return this.getRuleContext(i, Signed_numberContext);
        }
    };
    Type_nameContext.prototype.CLOSE_PAR = function () { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); };
    Type_nameContext.prototype.COMMA = function () { return this.tryGetToken(SQLiteParser.COMMA, 0); };
    Object.defineProperty(Type_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_type_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Type_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterType_name) {
            listener.enterType_name(this);
        }
    };
    // @Override
    Type_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitType_name) {
            listener.exitType_name(this);
        }
    };
    // @Override
    Type_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitType_name) {
            return visitor.visitType_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Type_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Type_nameContext = Type_nameContext;
var Column_constraintContext = /** @class */ (function (_super) {
    __extends(Column_constraintContext, _super);
    function Column_constraintContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Column_constraintContext.prototype.K_PRIMARY = function () { return this.tryGetToken(SQLiteParser.K_PRIMARY, 0); };
    Column_constraintContext.prototype.K_KEY = function () { return this.tryGetToken(SQLiteParser.K_KEY, 0); };
    Column_constraintContext.prototype.conflict_clause = function () {
        return this.tryGetRuleContext(0, Conflict_clauseContext);
    };
    Column_constraintContext.prototype.K_NULL = function () { return this.tryGetToken(SQLiteParser.K_NULL, 0); };
    Column_constraintContext.prototype.K_UNIQUE = function () { return this.tryGetToken(SQLiteParser.K_UNIQUE, 0); };
    Column_constraintContext.prototype.K_CHECK = function () { return this.tryGetToken(SQLiteParser.K_CHECK, 0); };
    Column_constraintContext.prototype.OPEN_PAR = function () { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); };
    Column_constraintContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    Column_constraintContext.prototype.CLOSE_PAR = function () { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); };
    Column_constraintContext.prototype.K_DEFAULT = function () { return this.tryGetToken(SQLiteParser.K_DEFAULT, 0); };
    Column_constraintContext.prototype.K_COLLATE = function () { return this.tryGetToken(SQLiteParser.K_COLLATE, 0); };
    Column_constraintContext.prototype.collation_name = function () {
        return this.tryGetRuleContext(0, Collation_nameContext);
    };
    Column_constraintContext.prototype.foreign_key_clause = function () {
        return this.tryGetRuleContext(0, Foreign_key_clauseContext);
    };
    Column_constraintContext.prototype.K_CONSTRAINT = function () { return this.tryGetToken(SQLiteParser.K_CONSTRAINT, 0); };
    Column_constraintContext.prototype.name = function () {
        return this.tryGetRuleContext(0, NameContext);
    };
    Column_constraintContext.prototype.signed_number = function () {
        return this.tryGetRuleContext(0, Signed_numberContext);
    };
    Column_constraintContext.prototype.literal_value = function () {
        return this.tryGetRuleContext(0, Literal_valueContext);
    };
    Column_constraintContext.prototype.K_AUTOINCREMENT = function () { return this.tryGetToken(SQLiteParser.K_AUTOINCREMENT, 0); };
    Column_constraintContext.prototype.K_NOT = function () { return this.tryGetToken(SQLiteParser.K_NOT, 0); };
    Column_constraintContext.prototype.K_ASC = function () { return this.tryGetToken(SQLiteParser.K_ASC, 0); };
    Column_constraintContext.prototype.K_DESC = function () { return this.tryGetToken(SQLiteParser.K_DESC, 0); };
    Object.defineProperty(Column_constraintContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_column_constraint; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Column_constraintContext.prototype.enterRule = function (listener) {
        if (listener.enterColumn_constraint) {
            listener.enterColumn_constraint(this);
        }
    };
    // @Override
    Column_constraintContext.prototype.exitRule = function (listener) {
        if (listener.exitColumn_constraint) {
            listener.exitColumn_constraint(this);
        }
    };
    // @Override
    Column_constraintContext.prototype.accept = function (visitor) {
        if (visitor.visitColumn_constraint) {
            return visitor.visitColumn_constraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Column_constraintContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Column_constraintContext = Column_constraintContext;
var Conflict_clauseContext = /** @class */ (function (_super) {
    __extends(Conflict_clauseContext, _super);
    function Conflict_clauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Conflict_clauseContext.prototype.K_ON = function () { return this.tryGetToken(SQLiteParser.K_ON, 0); };
    Conflict_clauseContext.prototype.K_CONFLICT = function () { return this.tryGetToken(SQLiteParser.K_CONFLICT, 0); };
    Conflict_clauseContext.prototype.K_ROLLBACK = function () { return this.tryGetToken(SQLiteParser.K_ROLLBACK, 0); };
    Conflict_clauseContext.prototype.K_ABORT = function () { return this.tryGetToken(SQLiteParser.K_ABORT, 0); };
    Conflict_clauseContext.prototype.K_FAIL = function () { return this.tryGetToken(SQLiteParser.K_FAIL, 0); };
    Conflict_clauseContext.prototype.K_IGNORE = function () { return this.tryGetToken(SQLiteParser.K_IGNORE, 0); };
    Conflict_clauseContext.prototype.K_REPLACE = function () { return this.tryGetToken(SQLiteParser.K_REPLACE, 0); };
    Object.defineProperty(Conflict_clauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_conflict_clause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Conflict_clauseContext.prototype.enterRule = function (listener) {
        if (listener.enterConflict_clause) {
            listener.enterConflict_clause(this);
        }
    };
    // @Override
    Conflict_clauseContext.prototype.exitRule = function (listener) {
        if (listener.exitConflict_clause) {
            listener.exitConflict_clause(this);
        }
    };
    // @Override
    Conflict_clauseContext.prototype.accept = function (visitor) {
        if (visitor.visitConflict_clause) {
            return visitor.visitConflict_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Conflict_clauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Conflict_clauseContext = Conflict_clauseContext;
var ExprContext = /** @class */ (function (_super) {
    __extends(ExprContext, _super);
    function ExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExprContext.prototype.literal_value = function () {
        return this.tryGetRuleContext(0, Literal_valueContext);
    };
    ExprContext.prototype.BIND_PARAMETER = function () { return this.tryGetToken(SQLiteParser.BIND_PARAMETER, 0); };
    ExprContext.prototype.column_name = function () {
        return this.tryGetRuleContext(0, Column_nameContext);
    };
    ExprContext.prototype.table_name = function () {
        return this.tryGetRuleContext(0, Table_nameContext);
    };
    ExprContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.DOT);
        }
        else {
            return this.getToken(SQLiteParser.DOT, i);
        }
    };
    ExprContext.prototype.database_name = function () {
        return this.tryGetRuleContext(0, Database_nameContext);
    };
    ExprContext.prototype.unary_operator = function () {
        return this.tryGetRuleContext(0, Unary_operatorContext);
    };
    ExprContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    ExprContext.prototype.PIPE2 = function () { return this.tryGetToken(SQLiteParser.PIPE2, 0); };
    ExprContext.prototype.STAR = function () { return this.tryGetToken(SQLiteParser.STAR, 0); };
    ExprContext.prototype.DIV = function () { return this.tryGetToken(SQLiteParser.DIV, 0); };
    ExprContext.prototype.MOD = function () { return this.tryGetToken(SQLiteParser.MOD, 0); };
    ExprContext.prototype.PLUS = function () { return this.tryGetToken(SQLiteParser.PLUS, 0); };
    ExprContext.prototype.MINUS = function () { return this.tryGetToken(SQLiteParser.MINUS, 0); };
    ExprContext.prototype.LT2 = function () { return this.tryGetToken(SQLiteParser.LT2, 0); };
    ExprContext.prototype.GT2 = function () { return this.tryGetToken(SQLiteParser.GT2, 0); };
    ExprContext.prototype.AMP = function () { return this.tryGetToken(SQLiteParser.AMP, 0); };
    ExprContext.prototype.PIPE = function () { return this.tryGetToken(SQLiteParser.PIPE, 0); };
    ExprContext.prototype.LT = function () { return this.tryGetToken(SQLiteParser.LT, 0); };
    ExprContext.prototype.LT_EQ = function () { return this.tryGetToken(SQLiteParser.LT_EQ, 0); };
    ExprContext.prototype.GT = function () { return this.tryGetToken(SQLiteParser.GT, 0); };
    ExprContext.prototype.GT_EQ = function () { return this.tryGetToken(SQLiteParser.GT_EQ, 0); };
    ExprContext.prototype.ASSIGN = function () { return this.tryGetToken(SQLiteParser.ASSIGN, 0); };
    ExprContext.prototype.EQ = function () { return this.tryGetToken(SQLiteParser.EQ, 0); };
    ExprContext.prototype.NOT_EQ1 = function () { return this.tryGetToken(SQLiteParser.NOT_EQ1, 0); };
    ExprContext.prototype.NOT_EQ2 = function () { return this.tryGetToken(SQLiteParser.NOT_EQ2, 0); };
    ExprContext.prototype.K_IS = function () { return this.tryGetToken(SQLiteParser.K_IS, 0); };
    ExprContext.prototype.K_NOT = function () { return this.tryGetToken(SQLiteParser.K_NOT, 0); };
    ExprContext.prototype.K_IN = function () { return this.tryGetToken(SQLiteParser.K_IN, 0); };
    ExprContext.prototype.K_LIKE = function () { return this.tryGetToken(SQLiteParser.K_LIKE, 0); };
    ExprContext.prototype.K_GLOB = function () { return this.tryGetToken(SQLiteParser.K_GLOB, 0); };
    ExprContext.prototype.K_MATCH = function () { return this.tryGetToken(SQLiteParser.K_MATCH, 0); };
    ExprContext.prototype.K_REGEXP = function () { return this.tryGetToken(SQLiteParser.K_REGEXP, 0); };
    ExprContext.prototype.K_AND = function () { return this.tryGetToken(SQLiteParser.K_AND, 0); };
    ExprContext.prototype.K_OR = function () { return this.tryGetToken(SQLiteParser.K_OR, 0); };
    ExprContext.prototype.function_name = function () {
        return this.tryGetRuleContext(0, Function_nameContext);
    };
    ExprContext.prototype.OPEN_PAR = function () { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); };
    ExprContext.prototype.CLOSE_PAR = function () { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); };
    ExprContext.prototype.K_DISTINCT = function () { return this.tryGetToken(SQLiteParser.K_DISTINCT, 0); };
    ExprContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    };
    ExprContext.prototype.K_CAST = function () { return this.tryGetToken(SQLiteParser.K_CAST, 0); };
    ExprContext.prototype.K_AS = function () { return this.tryGetToken(SQLiteParser.K_AS, 0); };
    ExprContext.prototype.type_name = function () {
        return this.tryGetRuleContext(0, Type_nameContext);
    };
    ExprContext.prototype.K_COLLATE = function () { return this.tryGetToken(SQLiteParser.K_COLLATE, 0); };
    ExprContext.prototype.collation_name = function () {
        return this.tryGetRuleContext(0, Collation_nameContext);
    };
    ExprContext.prototype.K_ESCAPE = function () { return this.tryGetToken(SQLiteParser.K_ESCAPE, 0); };
    ExprContext.prototype.K_ISNULL = function () { return this.tryGetToken(SQLiteParser.K_ISNULL, 0); };
    ExprContext.prototype.K_NOTNULL = function () { return this.tryGetToken(SQLiteParser.K_NOTNULL, 0); };
    ExprContext.prototype.K_NULL = function () { return this.tryGetToken(SQLiteParser.K_NULL, 0); };
    ExprContext.prototype.K_BETWEEN = function () { return this.tryGetToken(SQLiteParser.K_BETWEEN, 0); };
    ExprContext.prototype.select_stmt = function () {
        return this.tryGetRuleContext(0, Select_stmtContext);
    };
    ExprContext.prototype.K_EXISTS = function () { return this.tryGetToken(SQLiteParser.K_EXISTS, 0); };
    ExprContext.prototype.K_CASE = function () { return this.tryGetToken(SQLiteParser.K_CASE, 0); };
    ExprContext.prototype.K_END = function () { return this.tryGetToken(SQLiteParser.K_END, 0); };
    ExprContext.prototype.K_WHEN = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.K_WHEN);
        }
        else {
            return this.getToken(SQLiteParser.K_WHEN, i);
        }
    };
    ExprContext.prototype.K_THEN = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.K_THEN);
        }
        else {
            return this.getToken(SQLiteParser.K_THEN, i);
        }
    };
    ExprContext.prototype.K_ELSE = function () { return this.tryGetToken(SQLiteParser.K_ELSE, 0); };
    ExprContext.prototype.raise_function = function () {
        return this.tryGetRuleContext(0, Raise_functionContext);
    };
    Object.defineProperty(ExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_expr; },
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
var Foreign_key_clauseContext = /** @class */ (function (_super) {
    __extends(Foreign_key_clauseContext, _super);
    function Foreign_key_clauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Foreign_key_clauseContext.prototype.K_REFERENCES = function () { return this.getToken(SQLiteParser.K_REFERENCES, 0); };
    Foreign_key_clauseContext.prototype.foreign_table = function () {
        return this.getRuleContext(0, Foreign_tableContext);
    };
    Foreign_key_clauseContext.prototype.OPEN_PAR = function () { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); };
    Foreign_key_clauseContext.prototype.column_name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        else {
            return this.getRuleContext(i, Column_nameContext);
        }
    };
    Foreign_key_clauseContext.prototype.CLOSE_PAR = function () { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); };
    Foreign_key_clauseContext.prototype.K_DEFERRABLE = function () { return this.tryGetToken(SQLiteParser.K_DEFERRABLE, 0); };
    Foreign_key_clauseContext.prototype.K_ON = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.K_ON);
        }
        else {
            return this.getToken(SQLiteParser.K_ON, i);
        }
    };
    Foreign_key_clauseContext.prototype.K_MATCH = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.K_MATCH);
        }
        else {
            return this.getToken(SQLiteParser.K_MATCH, i);
        }
    };
    Foreign_key_clauseContext.prototype.name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NameContext);
        }
        else {
            return this.getRuleContext(i, NameContext);
        }
    };
    Foreign_key_clauseContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    };
    Foreign_key_clauseContext.prototype.K_DELETE = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.K_DELETE);
        }
        else {
            return this.getToken(SQLiteParser.K_DELETE, i);
        }
    };
    Foreign_key_clauseContext.prototype.K_UPDATE = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.K_UPDATE);
        }
        else {
            return this.getToken(SQLiteParser.K_UPDATE, i);
        }
    };
    Foreign_key_clauseContext.prototype.K_NOT = function () { return this.tryGetToken(SQLiteParser.K_NOT, 0); };
    Foreign_key_clauseContext.prototype.K_INITIALLY = function () { return this.tryGetToken(SQLiteParser.K_INITIALLY, 0); };
    Foreign_key_clauseContext.prototype.K_DEFERRED = function () { return this.tryGetToken(SQLiteParser.K_DEFERRED, 0); };
    Foreign_key_clauseContext.prototype.K_IMMEDIATE = function () { return this.tryGetToken(SQLiteParser.K_IMMEDIATE, 0); };
    Foreign_key_clauseContext.prototype.K_SET = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.K_SET);
        }
        else {
            return this.getToken(SQLiteParser.K_SET, i);
        }
    };
    Foreign_key_clauseContext.prototype.K_NULL = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.K_NULL);
        }
        else {
            return this.getToken(SQLiteParser.K_NULL, i);
        }
    };
    Foreign_key_clauseContext.prototype.K_DEFAULT = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.K_DEFAULT);
        }
        else {
            return this.getToken(SQLiteParser.K_DEFAULT, i);
        }
    };
    Foreign_key_clauseContext.prototype.K_CASCADE = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.K_CASCADE);
        }
        else {
            return this.getToken(SQLiteParser.K_CASCADE, i);
        }
    };
    Foreign_key_clauseContext.prototype.K_RESTRICT = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.K_RESTRICT);
        }
        else {
            return this.getToken(SQLiteParser.K_RESTRICT, i);
        }
    };
    Foreign_key_clauseContext.prototype.K_NO = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.K_NO);
        }
        else {
            return this.getToken(SQLiteParser.K_NO, i);
        }
    };
    Foreign_key_clauseContext.prototype.K_ACTION = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.K_ACTION);
        }
        else {
            return this.getToken(SQLiteParser.K_ACTION, i);
        }
    };
    Object.defineProperty(Foreign_key_clauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_foreign_key_clause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Foreign_key_clauseContext.prototype.enterRule = function (listener) {
        if (listener.enterForeign_key_clause) {
            listener.enterForeign_key_clause(this);
        }
    };
    // @Override
    Foreign_key_clauseContext.prototype.exitRule = function (listener) {
        if (listener.exitForeign_key_clause) {
            listener.exitForeign_key_clause(this);
        }
    };
    // @Override
    Foreign_key_clauseContext.prototype.accept = function (visitor) {
        if (visitor.visitForeign_key_clause) {
            return visitor.visitForeign_key_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Foreign_key_clauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Foreign_key_clauseContext = Foreign_key_clauseContext;
var Raise_functionContext = /** @class */ (function (_super) {
    __extends(Raise_functionContext, _super);
    function Raise_functionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Raise_functionContext.prototype.K_RAISE = function () { return this.getToken(SQLiteParser.K_RAISE, 0); };
    Raise_functionContext.prototype.OPEN_PAR = function () { return this.getToken(SQLiteParser.OPEN_PAR, 0); };
    Raise_functionContext.prototype.CLOSE_PAR = function () { return this.getToken(SQLiteParser.CLOSE_PAR, 0); };
    Raise_functionContext.prototype.K_IGNORE = function () { return this.tryGetToken(SQLiteParser.K_IGNORE, 0); };
    Raise_functionContext.prototype.COMMA = function () { return this.tryGetToken(SQLiteParser.COMMA, 0); };
    Raise_functionContext.prototype.error_message = function () {
        return this.tryGetRuleContext(0, Error_messageContext);
    };
    Raise_functionContext.prototype.K_ROLLBACK = function () { return this.tryGetToken(SQLiteParser.K_ROLLBACK, 0); };
    Raise_functionContext.prototype.K_ABORT = function () { return this.tryGetToken(SQLiteParser.K_ABORT, 0); };
    Raise_functionContext.prototype.K_FAIL = function () { return this.tryGetToken(SQLiteParser.K_FAIL, 0); };
    Object.defineProperty(Raise_functionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_raise_function; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Raise_functionContext.prototype.enterRule = function (listener) {
        if (listener.enterRaise_function) {
            listener.enterRaise_function(this);
        }
    };
    // @Override
    Raise_functionContext.prototype.exitRule = function (listener) {
        if (listener.exitRaise_function) {
            listener.exitRaise_function(this);
        }
    };
    // @Override
    Raise_functionContext.prototype.accept = function (visitor) {
        if (visitor.visitRaise_function) {
            return visitor.visitRaise_function(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Raise_functionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Raise_functionContext = Raise_functionContext;
var Indexed_columnContext = /** @class */ (function (_super) {
    __extends(Indexed_columnContext, _super);
    function Indexed_columnContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Indexed_columnContext.prototype.column_name = function () {
        return this.getRuleContext(0, Column_nameContext);
    };
    Indexed_columnContext.prototype.K_COLLATE = function () { return this.tryGetToken(SQLiteParser.K_COLLATE, 0); };
    Indexed_columnContext.prototype.collation_name = function () {
        return this.tryGetRuleContext(0, Collation_nameContext);
    };
    Indexed_columnContext.prototype.K_ASC = function () { return this.tryGetToken(SQLiteParser.K_ASC, 0); };
    Indexed_columnContext.prototype.K_DESC = function () { return this.tryGetToken(SQLiteParser.K_DESC, 0); };
    Object.defineProperty(Indexed_columnContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_indexed_column; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Indexed_columnContext.prototype.enterRule = function (listener) {
        if (listener.enterIndexed_column) {
            listener.enterIndexed_column(this);
        }
    };
    // @Override
    Indexed_columnContext.prototype.exitRule = function (listener) {
        if (listener.exitIndexed_column) {
            listener.exitIndexed_column(this);
        }
    };
    // @Override
    Indexed_columnContext.prototype.accept = function (visitor) {
        if (visitor.visitIndexed_column) {
            return visitor.visitIndexed_column(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Indexed_columnContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Indexed_columnContext = Indexed_columnContext;
var Table_constraintContext = /** @class */ (function (_super) {
    __extends(Table_constraintContext, _super);
    function Table_constraintContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Table_constraintContext.prototype.OPEN_PAR = function () { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); };
    Table_constraintContext.prototype.indexed_column = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Indexed_columnContext);
        }
        else {
            return this.getRuleContext(i, Indexed_columnContext);
        }
    };
    Table_constraintContext.prototype.CLOSE_PAR = function () { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); };
    Table_constraintContext.prototype.conflict_clause = function () {
        return this.tryGetRuleContext(0, Conflict_clauseContext);
    };
    Table_constraintContext.prototype.K_CHECK = function () { return this.tryGetToken(SQLiteParser.K_CHECK, 0); };
    Table_constraintContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    Table_constraintContext.prototype.K_FOREIGN = function () { return this.tryGetToken(SQLiteParser.K_FOREIGN, 0); };
    Table_constraintContext.prototype.K_KEY = function () { return this.tryGetToken(SQLiteParser.K_KEY, 0); };
    Table_constraintContext.prototype.column_name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        else {
            return this.getRuleContext(i, Column_nameContext);
        }
    };
    Table_constraintContext.prototype.foreign_key_clause = function () {
        return this.tryGetRuleContext(0, Foreign_key_clauseContext);
    };
    Table_constraintContext.prototype.K_CONSTRAINT = function () { return this.tryGetToken(SQLiteParser.K_CONSTRAINT, 0); };
    Table_constraintContext.prototype.name = function () {
        return this.tryGetRuleContext(0, NameContext);
    };
    Table_constraintContext.prototype.K_PRIMARY = function () { return this.tryGetToken(SQLiteParser.K_PRIMARY, 0); };
    Table_constraintContext.prototype.K_UNIQUE = function () { return this.tryGetToken(SQLiteParser.K_UNIQUE, 0); };
    Table_constraintContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    };
    Object.defineProperty(Table_constraintContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_table_constraint; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Table_constraintContext.prototype.enterRule = function (listener) {
        if (listener.enterTable_constraint) {
            listener.enterTable_constraint(this);
        }
    };
    // @Override
    Table_constraintContext.prototype.exitRule = function (listener) {
        if (listener.exitTable_constraint) {
            listener.exitTable_constraint(this);
        }
    };
    // @Override
    Table_constraintContext.prototype.accept = function (visitor) {
        if (visitor.visitTable_constraint) {
            return visitor.visitTable_constraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Table_constraintContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Table_constraintContext = Table_constraintContext;
var With_clauseContext = /** @class */ (function (_super) {
    __extends(With_clauseContext, _super);
    function With_clauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    With_clauseContext.prototype.K_WITH = function () { return this.getToken(SQLiteParser.K_WITH, 0); };
    With_clauseContext.prototype.cte_table_name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Cte_table_nameContext);
        }
        else {
            return this.getRuleContext(i, Cte_table_nameContext);
        }
    };
    With_clauseContext.prototype.K_AS = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.K_AS);
        }
        else {
            return this.getToken(SQLiteParser.K_AS, i);
        }
    };
    With_clauseContext.prototype.OPEN_PAR = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.OPEN_PAR);
        }
        else {
            return this.getToken(SQLiteParser.OPEN_PAR, i);
        }
    };
    With_clauseContext.prototype.select_stmt = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Select_stmtContext);
        }
        else {
            return this.getRuleContext(i, Select_stmtContext);
        }
    };
    With_clauseContext.prototype.CLOSE_PAR = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.CLOSE_PAR);
        }
        else {
            return this.getToken(SQLiteParser.CLOSE_PAR, i);
        }
    };
    With_clauseContext.prototype.K_RECURSIVE = function () { return this.tryGetToken(SQLiteParser.K_RECURSIVE, 0); };
    With_clauseContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    };
    Object.defineProperty(With_clauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_with_clause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    With_clauseContext.prototype.enterRule = function (listener) {
        if (listener.enterWith_clause) {
            listener.enterWith_clause(this);
        }
    };
    // @Override
    With_clauseContext.prototype.exitRule = function (listener) {
        if (listener.exitWith_clause) {
            listener.exitWith_clause(this);
        }
    };
    // @Override
    With_clauseContext.prototype.accept = function (visitor) {
        if (visitor.visitWith_clause) {
            return visitor.visitWith_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return With_clauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.With_clauseContext = With_clauseContext;
var Qualified_table_nameContext = /** @class */ (function (_super) {
    __extends(Qualified_table_nameContext, _super);
    function Qualified_table_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Qualified_table_nameContext.prototype.table_name = function () {
        return this.getRuleContext(0, Table_nameContext);
    };
    Qualified_table_nameContext.prototype.database_name = function () {
        return this.tryGetRuleContext(0, Database_nameContext);
    };
    Qualified_table_nameContext.prototype.DOT = function () { return this.tryGetToken(SQLiteParser.DOT, 0); };
    Qualified_table_nameContext.prototype.K_INDEXED = function () { return this.tryGetToken(SQLiteParser.K_INDEXED, 0); };
    Qualified_table_nameContext.prototype.K_BY = function () { return this.tryGetToken(SQLiteParser.K_BY, 0); };
    Qualified_table_nameContext.prototype.index_name = function () {
        return this.tryGetRuleContext(0, Index_nameContext);
    };
    Qualified_table_nameContext.prototype.K_NOT = function () { return this.tryGetToken(SQLiteParser.K_NOT, 0); };
    Object.defineProperty(Qualified_table_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_qualified_table_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Qualified_table_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterQualified_table_name) {
            listener.enterQualified_table_name(this);
        }
    };
    // @Override
    Qualified_table_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitQualified_table_name) {
            listener.exitQualified_table_name(this);
        }
    };
    // @Override
    Qualified_table_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitQualified_table_name) {
            return visitor.visitQualified_table_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Qualified_table_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Qualified_table_nameContext = Qualified_table_nameContext;
var Ordering_termContext = /** @class */ (function (_super) {
    __extends(Ordering_termContext, _super);
    function Ordering_termContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ordering_termContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    Ordering_termContext.prototype.K_COLLATE = function () { return this.tryGetToken(SQLiteParser.K_COLLATE, 0); };
    Ordering_termContext.prototype.collation_name = function () {
        return this.tryGetRuleContext(0, Collation_nameContext);
    };
    Ordering_termContext.prototype.K_ASC = function () { return this.tryGetToken(SQLiteParser.K_ASC, 0); };
    Ordering_termContext.prototype.K_DESC = function () { return this.tryGetToken(SQLiteParser.K_DESC, 0); };
    Object.defineProperty(Ordering_termContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_ordering_term; },
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
var Pragma_valueContext = /** @class */ (function (_super) {
    __extends(Pragma_valueContext, _super);
    function Pragma_valueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Pragma_valueContext.prototype.signed_number = function () {
        return this.tryGetRuleContext(0, Signed_numberContext);
    };
    Pragma_valueContext.prototype.name = function () {
        return this.tryGetRuleContext(0, NameContext);
    };
    Pragma_valueContext.prototype.STRING_LITERAL = function () { return this.tryGetToken(SQLiteParser.STRING_LITERAL, 0); };
    Object.defineProperty(Pragma_valueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_pragma_value; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Pragma_valueContext.prototype.enterRule = function (listener) {
        if (listener.enterPragma_value) {
            listener.enterPragma_value(this);
        }
    };
    // @Override
    Pragma_valueContext.prototype.exitRule = function (listener) {
        if (listener.exitPragma_value) {
            listener.exitPragma_value(this);
        }
    };
    // @Override
    Pragma_valueContext.prototype.accept = function (visitor) {
        if (visitor.visitPragma_value) {
            return visitor.visitPragma_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Pragma_valueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Pragma_valueContext = Pragma_valueContext;
var Common_table_expressionContext = /** @class */ (function (_super) {
    __extends(Common_table_expressionContext, _super);
    function Common_table_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Common_table_expressionContext.prototype.table_name = function () {
        return this.getRuleContext(0, Table_nameContext);
    };
    Common_table_expressionContext.prototype.K_AS = function () { return this.getToken(SQLiteParser.K_AS, 0); };
    Common_table_expressionContext.prototype.OPEN_PAR = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.OPEN_PAR);
        }
        else {
            return this.getToken(SQLiteParser.OPEN_PAR, i);
        }
    };
    Common_table_expressionContext.prototype.select_stmt = function () {
        return this.getRuleContext(0, Select_stmtContext);
    };
    Common_table_expressionContext.prototype.CLOSE_PAR = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.CLOSE_PAR);
        }
        else {
            return this.getToken(SQLiteParser.CLOSE_PAR, i);
        }
    };
    Common_table_expressionContext.prototype.column_name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        else {
            return this.getRuleContext(i, Column_nameContext);
        }
    };
    Common_table_expressionContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    };
    Object.defineProperty(Common_table_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_common_table_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Common_table_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterCommon_table_expression) {
            listener.enterCommon_table_expression(this);
        }
    };
    // @Override
    Common_table_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitCommon_table_expression) {
            listener.exitCommon_table_expression(this);
        }
    };
    // @Override
    Common_table_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitCommon_table_expression) {
            return visitor.visitCommon_table_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Common_table_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Common_table_expressionContext = Common_table_expressionContext;
var Result_columnContext = /** @class */ (function (_super) {
    __extends(Result_columnContext, _super);
    function Result_columnContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Result_columnContext.prototype.STAR = function () { return this.tryGetToken(SQLiteParser.STAR, 0); };
    Result_columnContext.prototype.table_name = function () {
        return this.tryGetRuleContext(0, Table_nameContext);
    };
    Result_columnContext.prototype.DOT = function () { return this.tryGetToken(SQLiteParser.DOT, 0); };
    Result_columnContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    Result_columnContext.prototype.column_alias = function () {
        return this.tryGetRuleContext(0, Column_aliasContext);
    };
    Result_columnContext.prototype.K_AS = function () { return this.tryGetToken(SQLiteParser.K_AS, 0); };
    Object.defineProperty(Result_columnContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_result_column; },
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
var Table_or_subqueryContext = /** @class */ (function (_super) {
    __extends(Table_or_subqueryContext, _super);
    function Table_or_subqueryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Table_or_subqueryContext.prototype.table_name = function () {
        return this.tryGetRuleContext(0, Table_nameContext);
    };
    Table_or_subqueryContext.prototype.database_name = function () {
        return this.tryGetRuleContext(0, Database_nameContext);
    };
    Table_or_subqueryContext.prototype.DOT = function () { return this.tryGetToken(SQLiteParser.DOT, 0); };
    Table_or_subqueryContext.prototype.table_alias = function () {
        return this.tryGetRuleContext(0, Table_aliasContext);
    };
    Table_or_subqueryContext.prototype.K_INDEXED = function () { return this.tryGetToken(SQLiteParser.K_INDEXED, 0); };
    Table_or_subqueryContext.prototype.K_BY = function () { return this.tryGetToken(SQLiteParser.K_BY, 0); };
    Table_or_subqueryContext.prototype.index_name = function () {
        return this.tryGetRuleContext(0, Index_nameContext);
    };
    Table_or_subqueryContext.prototype.K_NOT = function () { return this.tryGetToken(SQLiteParser.K_NOT, 0); };
    Table_or_subqueryContext.prototype.K_AS = function () { return this.tryGetToken(SQLiteParser.K_AS, 0); };
    Table_or_subqueryContext.prototype.OPEN_PAR = function () { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); };
    Table_or_subqueryContext.prototype.CLOSE_PAR = function () { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); };
    Table_or_subqueryContext.prototype.table_or_subquery = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Table_or_subqueryContext);
        }
        else {
            return this.getRuleContext(i, Table_or_subqueryContext);
        }
    };
    Table_or_subqueryContext.prototype.join_clause = function () {
        return this.tryGetRuleContext(0, Join_clauseContext);
    };
    Table_or_subqueryContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    };
    Table_or_subqueryContext.prototype.select_stmt = function () {
        return this.tryGetRuleContext(0, Select_stmtContext);
    };
    Object.defineProperty(Table_or_subqueryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_table_or_subquery; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Table_or_subqueryContext.prototype.enterRule = function (listener) {
        if (listener.enterTable_or_subquery) {
            listener.enterTable_or_subquery(this);
        }
    };
    // @Override
    Table_or_subqueryContext.prototype.exitRule = function (listener) {
        if (listener.exitTable_or_subquery) {
            listener.exitTable_or_subquery(this);
        }
    };
    // @Override
    Table_or_subqueryContext.prototype.accept = function (visitor) {
        if (visitor.visitTable_or_subquery) {
            return visitor.visitTable_or_subquery(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Table_or_subqueryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Table_or_subqueryContext = Table_or_subqueryContext;
var Join_clauseContext = /** @class */ (function (_super) {
    __extends(Join_clauseContext, _super);
    function Join_clauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Join_clauseContext.prototype.table_or_subquery = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Table_or_subqueryContext);
        }
        else {
            return this.getRuleContext(i, Table_or_subqueryContext);
        }
    };
    Join_clauseContext.prototype.join_operator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Join_operatorContext);
        }
        else {
            return this.getRuleContext(i, Join_operatorContext);
        }
    };
    Join_clauseContext.prototype.join_constraint = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Join_constraintContext);
        }
        else {
            return this.getRuleContext(i, Join_constraintContext);
        }
    };
    Object.defineProperty(Join_clauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_join_clause; },
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
var Join_operatorContext = /** @class */ (function (_super) {
    __extends(Join_operatorContext, _super);
    function Join_operatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Join_operatorContext.prototype.COMMA = function () { return this.tryGetToken(SQLiteParser.COMMA, 0); };
    Join_operatorContext.prototype.K_JOIN = function () { return this.tryGetToken(SQLiteParser.K_JOIN, 0); };
    Join_operatorContext.prototype.K_NATURAL = function () { return this.tryGetToken(SQLiteParser.K_NATURAL, 0); };
    Join_operatorContext.prototype.K_LEFT = function () { return this.tryGetToken(SQLiteParser.K_LEFT, 0); };
    Join_operatorContext.prototype.K_INNER = function () { return this.tryGetToken(SQLiteParser.K_INNER, 0); };
    Join_operatorContext.prototype.K_CROSS = function () { return this.tryGetToken(SQLiteParser.K_CROSS, 0); };
    Join_operatorContext.prototype.K_OUTER = function () { return this.tryGetToken(SQLiteParser.K_OUTER, 0); };
    Object.defineProperty(Join_operatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_join_operator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Join_operatorContext.prototype.enterRule = function (listener) {
        if (listener.enterJoin_operator) {
            listener.enterJoin_operator(this);
        }
    };
    // @Override
    Join_operatorContext.prototype.exitRule = function (listener) {
        if (listener.exitJoin_operator) {
            listener.exitJoin_operator(this);
        }
    };
    // @Override
    Join_operatorContext.prototype.accept = function (visitor) {
        if (visitor.visitJoin_operator) {
            return visitor.visitJoin_operator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Join_operatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Join_operatorContext = Join_operatorContext;
var Join_constraintContext = /** @class */ (function (_super) {
    __extends(Join_constraintContext, _super);
    function Join_constraintContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Join_constraintContext.prototype.K_ON = function () { return this.tryGetToken(SQLiteParser.K_ON, 0); };
    Join_constraintContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    Join_constraintContext.prototype.K_USING = function () { return this.tryGetToken(SQLiteParser.K_USING, 0); };
    Join_constraintContext.prototype.OPEN_PAR = function () { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); };
    Join_constraintContext.prototype.column_name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        else {
            return this.getRuleContext(i, Column_nameContext);
        }
    };
    Join_constraintContext.prototype.CLOSE_PAR = function () { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); };
    Join_constraintContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    };
    Object.defineProperty(Join_constraintContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_join_constraint; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Join_constraintContext.prototype.enterRule = function (listener) {
        if (listener.enterJoin_constraint) {
            listener.enterJoin_constraint(this);
        }
    };
    // @Override
    Join_constraintContext.prototype.exitRule = function (listener) {
        if (listener.exitJoin_constraint) {
            listener.exitJoin_constraint(this);
        }
    };
    // @Override
    Join_constraintContext.prototype.accept = function (visitor) {
        if (visitor.visitJoin_constraint) {
            return visitor.visitJoin_constraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Join_constraintContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Join_constraintContext = Join_constraintContext;
var Select_coreContext = /** @class */ (function (_super) {
    __extends(Select_coreContext, _super);
    function Select_coreContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Select_coreContext.prototype.K_SELECT = function () { return this.tryGetToken(SQLiteParser.K_SELECT, 0); };
    Select_coreContext.prototype.result_column = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Result_columnContext);
        }
        else {
            return this.getRuleContext(i, Result_columnContext);
        }
    };
    Select_coreContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    };
    Select_coreContext.prototype.K_FROM = function () { return this.tryGetToken(SQLiteParser.K_FROM, 0); };
    Select_coreContext.prototype.K_WHERE = function () { return this.tryGetToken(SQLiteParser.K_WHERE, 0); };
    Select_coreContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    Select_coreContext.prototype.K_GROUP = function () { return this.tryGetToken(SQLiteParser.K_GROUP, 0); };
    Select_coreContext.prototype.K_BY = function () { return this.tryGetToken(SQLiteParser.K_BY, 0); };
    Select_coreContext.prototype.K_DISTINCT = function () { return this.tryGetToken(SQLiteParser.K_DISTINCT, 0); };
    Select_coreContext.prototype.K_ALL = function () { return this.tryGetToken(SQLiteParser.K_ALL, 0); };
    Select_coreContext.prototype.table_or_subquery = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Table_or_subqueryContext);
        }
        else {
            return this.getRuleContext(i, Table_or_subqueryContext);
        }
    };
    Select_coreContext.prototype.join_clause = function () {
        return this.tryGetRuleContext(0, Join_clauseContext);
    };
    Select_coreContext.prototype.K_HAVING = function () { return this.tryGetToken(SQLiteParser.K_HAVING, 0); };
    Select_coreContext.prototype.K_VALUES = function () { return this.tryGetToken(SQLiteParser.K_VALUES, 0); };
    Select_coreContext.prototype.OPEN_PAR = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.OPEN_PAR);
        }
        else {
            return this.getToken(SQLiteParser.OPEN_PAR, i);
        }
    };
    Select_coreContext.prototype.CLOSE_PAR = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.CLOSE_PAR);
        }
        else {
            return this.getToken(SQLiteParser.CLOSE_PAR, i);
        }
    };
    Object.defineProperty(Select_coreContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_select_core; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Select_coreContext.prototype.enterRule = function (listener) {
        if (listener.enterSelect_core) {
            listener.enterSelect_core(this);
        }
    };
    // @Override
    Select_coreContext.prototype.exitRule = function (listener) {
        if (listener.exitSelect_core) {
            listener.exitSelect_core(this);
        }
    };
    // @Override
    Select_coreContext.prototype.accept = function (visitor) {
        if (visitor.visitSelect_core) {
            return visitor.visitSelect_core(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Select_coreContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Select_coreContext = Select_coreContext;
var Compound_operatorContext = /** @class */ (function (_super) {
    __extends(Compound_operatorContext, _super);
    function Compound_operatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Compound_operatorContext.prototype.K_UNION = function () { return this.tryGetToken(SQLiteParser.K_UNION, 0); };
    Compound_operatorContext.prototype.K_ALL = function () { return this.tryGetToken(SQLiteParser.K_ALL, 0); };
    Compound_operatorContext.prototype.K_INTERSECT = function () { return this.tryGetToken(SQLiteParser.K_INTERSECT, 0); };
    Compound_operatorContext.prototype.K_EXCEPT = function () { return this.tryGetToken(SQLiteParser.K_EXCEPT, 0); };
    Object.defineProperty(Compound_operatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_compound_operator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Compound_operatorContext.prototype.enterRule = function (listener) {
        if (listener.enterCompound_operator) {
            listener.enterCompound_operator(this);
        }
    };
    // @Override
    Compound_operatorContext.prototype.exitRule = function (listener) {
        if (listener.exitCompound_operator) {
            listener.exitCompound_operator(this);
        }
    };
    // @Override
    Compound_operatorContext.prototype.accept = function (visitor) {
        if (visitor.visitCompound_operator) {
            return visitor.visitCompound_operator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Compound_operatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Compound_operatorContext = Compound_operatorContext;
var Cte_table_nameContext = /** @class */ (function (_super) {
    __extends(Cte_table_nameContext, _super);
    function Cte_table_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cte_table_nameContext.prototype.table_name = function () {
        return this.getRuleContext(0, Table_nameContext);
    };
    Cte_table_nameContext.prototype.OPEN_PAR = function () { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); };
    Cte_table_nameContext.prototype.column_name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        else {
            return this.getRuleContext(i, Column_nameContext);
        }
    };
    Cte_table_nameContext.prototype.CLOSE_PAR = function () { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); };
    Cte_table_nameContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    };
    Object.defineProperty(Cte_table_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_cte_table_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cte_table_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterCte_table_name) {
            listener.enterCte_table_name(this);
        }
    };
    // @Override
    Cte_table_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitCte_table_name) {
            listener.exitCte_table_name(this);
        }
    };
    // @Override
    Cte_table_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitCte_table_name) {
            return visitor.visitCte_table_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cte_table_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cte_table_nameContext = Cte_table_nameContext;
var Signed_numberContext = /** @class */ (function (_super) {
    __extends(Signed_numberContext, _super);
    function Signed_numberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Signed_numberContext.prototype.NUMERIC_LITERAL = function () { return this.getToken(SQLiteParser.NUMERIC_LITERAL, 0); };
    Signed_numberContext.prototype.PLUS = function () { return this.tryGetToken(SQLiteParser.PLUS, 0); };
    Signed_numberContext.prototype.MINUS = function () { return this.tryGetToken(SQLiteParser.MINUS, 0); };
    Object.defineProperty(Signed_numberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_signed_number; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Signed_numberContext.prototype.enterRule = function (listener) {
        if (listener.enterSigned_number) {
            listener.enterSigned_number(this);
        }
    };
    // @Override
    Signed_numberContext.prototype.exitRule = function (listener) {
        if (listener.exitSigned_number) {
            listener.exitSigned_number(this);
        }
    };
    // @Override
    Signed_numberContext.prototype.accept = function (visitor) {
        if (visitor.visitSigned_number) {
            return visitor.visitSigned_number(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Signed_numberContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Signed_numberContext = Signed_numberContext;
var Literal_valueContext = /** @class */ (function (_super) {
    __extends(Literal_valueContext, _super);
    function Literal_valueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Literal_valueContext.prototype.NUMERIC_LITERAL = function () { return this.tryGetToken(SQLiteParser.NUMERIC_LITERAL, 0); };
    Literal_valueContext.prototype.STRING_LITERAL = function () { return this.tryGetToken(SQLiteParser.STRING_LITERAL, 0); };
    Literal_valueContext.prototype.BLOB_LITERAL = function () { return this.tryGetToken(SQLiteParser.BLOB_LITERAL, 0); };
    Literal_valueContext.prototype.K_NULL = function () { return this.tryGetToken(SQLiteParser.K_NULL, 0); };
    Literal_valueContext.prototype.K_CURRENT_TIME = function () { return this.tryGetToken(SQLiteParser.K_CURRENT_TIME, 0); };
    Literal_valueContext.prototype.K_CURRENT_DATE = function () { return this.tryGetToken(SQLiteParser.K_CURRENT_DATE, 0); };
    Literal_valueContext.prototype.K_CURRENT_TIMESTAMP = function () { return this.tryGetToken(SQLiteParser.K_CURRENT_TIMESTAMP, 0); };
    Object.defineProperty(Literal_valueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_literal_value; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Literal_valueContext.prototype.enterRule = function (listener) {
        if (listener.enterLiteral_value) {
            listener.enterLiteral_value(this);
        }
    };
    // @Override
    Literal_valueContext.prototype.exitRule = function (listener) {
        if (listener.exitLiteral_value) {
            listener.exitLiteral_value(this);
        }
    };
    // @Override
    Literal_valueContext.prototype.accept = function (visitor) {
        if (visitor.visitLiteral_value) {
            return visitor.visitLiteral_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Literal_valueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Literal_valueContext = Literal_valueContext;
var Unary_operatorContext = /** @class */ (function (_super) {
    __extends(Unary_operatorContext, _super);
    function Unary_operatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Unary_operatorContext.prototype.MINUS = function () { return this.tryGetToken(SQLiteParser.MINUS, 0); };
    Unary_operatorContext.prototype.PLUS = function () { return this.tryGetToken(SQLiteParser.PLUS, 0); };
    Unary_operatorContext.prototype.TILDE = function () { return this.tryGetToken(SQLiteParser.TILDE, 0); };
    Unary_operatorContext.prototype.K_NOT = function () { return this.tryGetToken(SQLiteParser.K_NOT, 0); };
    Object.defineProperty(Unary_operatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_unary_operator; },
        enumerable: true,
        configurable: true
    });
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
}(ParserRuleContext_1.ParserRuleContext));
exports.Unary_operatorContext = Unary_operatorContext;
var Error_messageContext = /** @class */ (function (_super) {
    __extends(Error_messageContext, _super);
    function Error_messageContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Error_messageContext.prototype.STRING_LITERAL = function () { return this.getToken(SQLiteParser.STRING_LITERAL, 0); };
    Object.defineProperty(Error_messageContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_error_message; },
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
var Module_argumentContext = /** @class */ (function (_super) {
    __extends(Module_argumentContext, _super);
    function Module_argumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Module_argumentContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    Module_argumentContext.prototype.column_def = function () {
        return this.tryGetRuleContext(0, Column_defContext);
    };
    Object.defineProperty(Module_argumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_module_argument; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Module_argumentContext.prototype.enterRule = function (listener) {
        if (listener.enterModule_argument) {
            listener.enterModule_argument(this);
        }
    };
    // @Override
    Module_argumentContext.prototype.exitRule = function (listener) {
        if (listener.exitModule_argument) {
            listener.exitModule_argument(this);
        }
    };
    // @Override
    Module_argumentContext.prototype.accept = function (visitor) {
        if (visitor.visitModule_argument) {
            return visitor.visitModule_argument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Module_argumentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Module_argumentContext = Module_argumentContext;
var Column_aliasContext = /** @class */ (function (_super) {
    __extends(Column_aliasContext, _super);
    function Column_aliasContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Column_aliasContext.prototype.IDENTIFIER = function () { return this.tryGetToken(SQLiteParser.IDENTIFIER, 0); };
    Column_aliasContext.prototype.STRING_LITERAL = function () { return this.tryGetToken(SQLiteParser.STRING_LITERAL, 0); };
    Object.defineProperty(Column_aliasContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_column_alias; },
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
var KeywordContext = /** @class */ (function (_super) {
    __extends(KeywordContext, _super);
    function KeywordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeywordContext.prototype.K_ABORT = function () { return this.tryGetToken(SQLiteParser.K_ABORT, 0); };
    KeywordContext.prototype.K_ACTION = function () { return this.tryGetToken(SQLiteParser.K_ACTION, 0); };
    KeywordContext.prototype.K_ADD = function () { return this.tryGetToken(SQLiteParser.K_ADD, 0); };
    KeywordContext.prototype.K_AFTER = function () { return this.tryGetToken(SQLiteParser.K_AFTER, 0); };
    KeywordContext.prototype.K_ALL = function () { return this.tryGetToken(SQLiteParser.K_ALL, 0); };
    KeywordContext.prototype.K_ALTER = function () { return this.tryGetToken(SQLiteParser.K_ALTER, 0); };
    KeywordContext.prototype.K_ANALYZE = function () { return this.tryGetToken(SQLiteParser.K_ANALYZE, 0); };
    KeywordContext.prototype.K_AND = function () { return this.tryGetToken(SQLiteParser.K_AND, 0); };
    KeywordContext.prototype.K_AS = function () { return this.tryGetToken(SQLiteParser.K_AS, 0); };
    KeywordContext.prototype.K_ASC = function () { return this.tryGetToken(SQLiteParser.K_ASC, 0); };
    KeywordContext.prototype.K_ATTACH = function () { return this.tryGetToken(SQLiteParser.K_ATTACH, 0); };
    KeywordContext.prototype.K_AUTOINCREMENT = function () { return this.tryGetToken(SQLiteParser.K_AUTOINCREMENT, 0); };
    KeywordContext.prototype.K_BEFORE = function () { return this.tryGetToken(SQLiteParser.K_BEFORE, 0); };
    KeywordContext.prototype.K_BEGIN = function () { return this.tryGetToken(SQLiteParser.K_BEGIN, 0); };
    KeywordContext.prototype.K_BETWEEN = function () { return this.tryGetToken(SQLiteParser.K_BETWEEN, 0); };
    KeywordContext.prototype.K_BY = function () { return this.tryGetToken(SQLiteParser.K_BY, 0); };
    KeywordContext.prototype.K_CASCADE = function () { return this.tryGetToken(SQLiteParser.K_CASCADE, 0); };
    KeywordContext.prototype.K_CASE = function () { return this.tryGetToken(SQLiteParser.K_CASE, 0); };
    KeywordContext.prototype.K_CAST = function () { return this.tryGetToken(SQLiteParser.K_CAST, 0); };
    KeywordContext.prototype.K_CHECK = function () { return this.tryGetToken(SQLiteParser.K_CHECK, 0); };
    KeywordContext.prototype.K_COLLATE = function () { return this.tryGetToken(SQLiteParser.K_COLLATE, 0); };
    KeywordContext.prototype.K_COLUMN = function () { return this.tryGetToken(SQLiteParser.K_COLUMN, 0); };
    KeywordContext.prototype.K_COMMIT = function () { return this.tryGetToken(SQLiteParser.K_COMMIT, 0); };
    KeywordContext.prototype.K_CONFLICT = function () { return this.tryGetToken(SQLiteParser.K_CONFLICT, 0); };
    KeywordContext.prototype.K_CONSTRAINT = function () { return this.tryGetToken(SQLiteParser.K_CONSTRAINT, 0); };
    KeywordContext.prototype.K_CREATE = function () { return this.tryGetToken(SQLiteParser.K_CREATE, 0); };
    KeywordContext.prototype.K_CROSS = function () { return this.tryGetToken(SQLiteParser.K_CROSS, 0); };
    KeywordContext.prototype.K_CURRENT_DATE = function () { return this.tryGetToken(SQLiteParser.K_CURRENT_DATE, 0); };
    KeywordContext.prototype.K_CURRENT_TIME = function () { return this.tryGetToken(SQLiteParser.K_CURRENT_TIME, 0); };
    KeywordContext.prototype.K_CURRENT_TIMESTAMP = function () { return this.tryGetToken(SQLiteParser.K_CURRENT_TIMESTAMP, 0); };
    KeywordContext.prototype.K_DATABASE = function () { return this.tryGetToken(SQLiteParser.K_DATABASE, 0); };
    KeywordContext.prototype.K_DEFAULT = function () { return this.tryGetToken(SQLiteParser.K_DEFAULT, 0); };
    KeywordContext.prototype.K_DEFERRABLE = function () { return this.tryGetToken(SQLiteParser.K_DEFERRABLE, 0); };
    KeywordContext.prototype.K_DEFERRED = function () { return this.tryGetToken(SQLiteParser.K_DEFERRED, 0); };
    KeywordContext.prototype.K_DELETE = function () { return this.tryGetToken(SQLiteParser.K_DELETE, 0); };
    KeywordContext.prototype.K_DESC = function () { return this.tryGetToken(SQLiteParser.K_DESC, 0); };
    KeywordContext.prototype.K_DETACH = function () { return this.tryGetToken(SQLiteParser.K_DETACH, 0); };
    KeywordContext.prototype.K_DISTINCT = function () { return this.tryGetToken(SQLiteParser.K_DISTINCT, 0); };
    KeywordContext.prototype.K_DROP = function () { return this.tryGetToken(SQLiteParser.K_DROP, 0); };
    KeywordContext.prototype.K_EACH = function () { return this.tryGetToken(SQLiteParser.K_EACH, 0); };
    KeywordContext.prototype.K_ELSE = function () { return this.tryGetToken(SQLiteParser.K_ELSE, 0); };
    KeywordContext.prototype.K_END = function () { return this.tryGetToken(SQLiteParser.K_END, 0); };
    KeywordContext.prototype.K_ESCAPE = function () { return this.tryGetToken(SQLiteParser.K_ESCAPE, 0); };
    KeywordContext.prototype.K_EXCEPT = function () { return this.tryGetToken(SQLiteParser.K_EXCEPT, 0); };
    KeywordContext.prototype.K_EXCLUSIVE = function () { return this.tryGetToken(SQLiteParser.K_EXCLUSIVE, 0); };
    KeywordContext.prototype.K_EXISTS = function () { return this.tryGetToken(SQLiteParser.K_EXISTS, 0); };
    KeywordContext.prototype.K_EXPLAIN = function () { return this.tryGetToken(SQLiteParser.K_EXPLAIN, 0); };
    KeywordContext.prototype.K_FAIL = function () { return this.tryGetToken(SQLiteParser.K_FAIL, 0); };
    KeywordContext.prototype.K_FOR = function () { return this.tryGetToken(SQLiteParser.K_FOR, 0); };
    KeywordContext.prototype.K_FOREIGN = function () { return this.tryGetToken(SQLiteParser.K_FOREIGN, 0); };
    KeywordContext.prototype.K_FROM = function () { return this.tryGetToken(SQLiteParser.K_FROM, 0); };
    KeywordContext.prototype.K_FULL = function () { return this.tryGetToken(SQLiteParser.K_FULL, 0); };
    KeywordContext.prototype.K_GLOB = function () { return this.tryGetToken(SQLiteParser.K_GLOB, 0); };
    KeywordContext.prototype.K_GROUP = function () { return this.tryGetToken(SQLiteParser.K_GROUP, 0); };
    KeywordContext.prototype.K_HAVING = function () { return this.tryGetToken(SQLiteParser.K_HAVING, 0); };
    KeywordContext.prototype.K_IF = function () { return this.tryGetToken(SQLiteParser.K_IF, 0); };
    KeywordContext.prototype.K_IGNORE = function () { return this.tryGetToken(SQLiteParser.K_IGNORE, 0); };
    KeywordContext.prototype.K_IMMEDIATE = function () { return this.tryGetToken(SQLiteParser.K_IMMEDIATE, 0); };
    KeywordContext.prototype.K_IN = function () { return this.tryGetToken(SQLiteParser.K_IN, 0); };
    KeywordContext.prototype.K_INDEX = function () { return this.tryGetToken(SQLiteParser.K_INDEX, 0); };
    KeywordContext.prototype.K_INDEXED = function () { return this.tryGetToken(SQLiteParser.K_INDEXED, 0); };
    KeywordContext.prototype.K_INITIALLY = function () { return this.tryGetToken(SQLiteParser.K_INITIALLY, 0); };
    KeywordContext.prototype.K_INNER = function () { return this.tryGetToken(SQLiteParser.K_INNER, 0); };
    KeywordContext.prototype.K_INSERT = function () { return this.tryGetToken(SQLiteParser.K_INSERT, 0); };
    KeywordContext.prototype.K_INSTEAD = function () { return this.tryGetToken(SQLiteParser.K_INSTEAD, 0); };
    KeywordContext.prototype.K_INTERSECT = function () { return this.tryGetToken(SQLiteParser.K_INTERSECT, 0); };
    KeywordContext.prototype.K_INTO = function () { return this.tryGetToken(SQLiteParser.K_INTO, 0); };
    KeywordContext.prototype.K_IS = function () { return this.tryGetToken(SQLiteParser.K_IS, 0); };
    KeywordContext.prototype.K_ISNULL = function () { return this.tryGetToken(SQLiteParser.K_ISNULL, 0); };
    KeywordContext.prototype.K_JOIN = function () { return this.tryGetToken(SQLiteParser.K_JOIN, 0); };
    KeywordContext.prototype.K_KEY = function () { return this.tryGetToken(SQLiteParser.K_KEY, 0); };
    KeywordContext.prototype.K_LEFT = function () { return this.tryGetToken(SQLiteParser.K_LEFT, 0); };
    KeywordContext.prototype.K_LIKE = function () { return this.tryGetToken(SQLiteParser.K_LIKE, 0); };
    KeywordContext.prototype.K_LIMIT = function () { return this.tryGetToken(SQLiteParser.K_LIMIT, 0); };
    KeywordContext.prototype.K_MATCH = function () { return this.tryGetToken(SQLiteParser.K_MATCH, 0); };
    KeywordContext.prototype.K_NATURAL = function () { return this.tryGetToken(SQLiteParser.K_NATURAL, 0); };
    KeywordContext.prototype.K_NO = function () { return this.tryGetToken(SQLiteParser.K_NO, 0); };
    KeywordContext.prototype.K_NOT = function () { return this.tryGetToken(SQLiteParser.K_NOT, 0); };
    KeywordContext.prototype.K_NOTNULL = function () { return this.tryGetToken(SQLiteParser.K_NOTNULL, 0); };
    KeywordContext.prototype.K_NULL = function () { return this.tryGetToken(SQLiteParser.K_NULL, 0); };
    KeywordContext.prototype.K_OF = function () { return this.tryGetToken(SQLiteParser.K_OF, 0); };
    KeywordContext.prototype.K_OFFSET = function () { return this.tryGetToken(SQLiteParser.K_OFFSET, 0); };
    KeywordContext.prototype.K_ON = function () { return this.tryGetToken(SQLiteParser.K_ON, 0); };
    KeywordContext.prototype.K_OR = function () { return this.tryGetToken(SQLiteParser.K_OR, 0); };
    KeywordContext.prototype.K_ORDER = function () { return this.tryGetToken(SQLiteParser.K_ORDER, 0); };
    KeywordContext.prototype.K_OUTER = function () { return this.tryGetToken(SQLiteParser.K_OUTER, 0); };
    KeywordContext.prototype.K_PLAN = function () { return this.tryGetToken(SQLiteParser.K_PLAN, 0); };
    KeywordContext.prototype.K_PRAGMA = function () { return this.tryGetToken(SQLiteParser.K_PRAGMA, 0); };
    KeywordContext.prototype.K_PRIMARY = function () { return this.tryGetToken(SQLiteParser.K_PRIMARY, 0); };
    KeywordContext.prototype.K_QUERY = function () { return this.tryGetToken(SQLiteParser.K_QUERY, 0); };
    KeywordContext.prototype.K_RAISE = function () { return this.tryGetToken(SQLiteParser.K_RAISE, 0); };
    KeywordContext.prototype.K_RECURSIVE = function () { return this.tryGetToken(SQLiteParser.K_RECURSIVE, 0); };
    KeywordContext.prototype.K_REFERENCES = function () { return this.tryGetToken(SQLiteParser.K_REFERENCES, 0); };
    KeywordContext.prototype.K_REGEXP = function () { return this.tryGetToken(SQLiteParser.K_REGEXP, 0); };
    KeywordContext.prototype.K_REINDEX = function () { return this.tryGetToken(SQLiteParser.K_REINDEX, 0); };
    KeywordContext.prototype.K_RELEASE = function () { return this.tryGetToken(SQLiteParser.K_RELEASE, 0); };
    KeywordContext.prototype.K_RENAME = function () { return this.tryGetToken(SQLiteParser.K_RENAME, 0); };
    KeywordContext.prototype.K_REPLACE = function () { return this.tryGetToken(SQLiteParser.K_REPLACE, 0); };
    KeywordContext.prototype.K_RESTRICT = function () { return this.tryGetToken(SQLiteParser.K_RESTRICT, 0); };
    KeywordContext.prototype.K_RIGHT = function () { return this.tryGetToken(SQLiteParser.K_RIGHT, 0); };
    KeywordContext.prototype.K_ROLLBACK = function () { return this.tryGetToken(SQLiteParser.K_ROLLBACK, 0); };
    KeywordContext.prototype.K_ROW = function () { return this.tryGetToken(SQLiteParser.K_ROW, 0); };
    KeywordContext.prototype.K_SAVEPOINT = function () { return this.tryGetToken(SQLiteParser.K_SAVEPOINT, 0); };
    KeywordContext.prototype.K_SELECT = function () { return this.tryGetToken(SQLiteParser.K_SELECT, 0); };
    KeywordContext.prototype.K_SET = function () { return this.tryGetToken(SQLiteParser.K_SET, 0); };
    KeywordContext.prototype.K_TABLE = function () { return this.tryGetToken(SQLiteParser.K_TABLE, 0); };
    KeywordContext.prototype.K_TEMP = function () { return this.tryGetToken(SQLiteParser.K_TEMP, 0); };
    KeywordContext.prototype.K_TEMPORARY = function () { return this.tryGetToken(SQLiteParser.K_TEMPORARY, 0); };
    KeywordContext.prototype.K_THEN = function () { return this.tryGetToken(SQLiteParser.K_THEN, 0); };
    KeywordContext.prototype.K_TO = function () { return this.tryGetToken(SQLiteParser.K_TO, 0); };
    KeywordContext.prototype.K_TRANSACTION = function () { return this.tryGetToken(SQLiteParser.K_TRANSACTION, 0); };
    KeywordContext.prototype.K_TRIGGER = function () { return this.tryGetToken(SQLiteParser.K_TRIGGER, 0); };
    KeywordContext.prototype.K_UNION = function () { return this.tryGetToken(SQLiteParser.K_UNION, 0); };
    KeywordContext.prototype.K_UNIQUE = function () { return this.tryGetToken(SQLiteParser.K_UNIQUE, 0); };
    KeywordContext.prototype.K_UPDATE = function () { return this.tryGetToken(SQLiteParser.K_UPDATE, 0); };
    KeywordContext.prototype.K_USING = function () { return this.tryGetToken(SQLiteParser.K_USING, 0); };
    KeywordContext.prototype.K_VACUUM = function () { return this.tryGetToken(SQLiteParser.K_VACUUM, 0); };
    KeywordContext.prototype.K_VALUES = function () { return this.tryGetToken(SQLiteParser.K_VALUES, 0); };
    KeywordContext.prototype.K_VIEW = function () { return this.tryGetToken(SQLiteParser.K_VIEW, 0); };
    KeywordContext.prototype.K_VIRTUAL = function () { return this.tryGetToken(SQLiteParser.K_VIRTUAL, 0); };
    KeywordContext.prototype.K_WHEN = function () { return this.tryGetToken(SQLiteParser.K_WHEN, 0); };
    KeywordContext.prototype.K_WHERE = function () { return this.tryGetToken(SQLiteParser.K_WHERE, 0); };
    KeywordContext.prototype.K_WITH = function () { return this.tryGetToken(SQLiteParser.K_WITH, 0); };
    KeywordContext.prototype.K_WITHOUT = function () { return this.tryGetToken(SQLiteParser.K_WITHOUT, 0); };
    Object.defineProperty(KeywordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_keyword; },
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
var NameContext = /** @class */ (function (_super) {
    __extends(NameContext, _super);
    function NameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NameContext.prototype.any_name = function () {
        return this.getRuleContext(0, Any_nameContext);
    };
    Object.defineProperty(NameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_name; },
        enumerable: true,
        configurable: true
    });
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
}(ParserRuleContext_1.ParserRuleContext));
exports.NameContext = NameContext;
var Function_nameContext = /** @class */ (function (_super) {
    __extends(Function_nameContext, _super);
    function Function_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Function_nameContext.prototype.any_name = function () {
        return this.getRuleContext(0, Any_nameContext);
    };
    Object.defineProperty(Function_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_function_name; },
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
var Database_nameContext = /** @class */ (function (_super) {
    __extends(Database_nameContext, _super);
    function Database_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Database_nameContext.prototype.any_name = function () {
        return this.getRuleContext(0, Any_nameContext);
    };
    Object.defineProperty(Database_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_database_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Database_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterDatabase_name) {
            listener.enterDatabase_name(this);
        }
    };
    // @Override
    Database_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitDatabase_name) {
            listener.exitDatabase_name(this);
        }
    };
    // @Override
    Database_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitDatabase_name) {
            return visitor.visitDatabase_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Database_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Database_nameContext = Database_nameContext;
var Table_nameContext = /** @class */ (function (_super) {
    __extends(Table_nameContext, _super);
    function Table_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Table_nameContext.prototype.any_name = function () {
        return this.getRuleContext(0, Any_nameContext);
    };
    Object.defineProperty(Table_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_table_name; },
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
var Table_or_index_nameContext = /** @class */ (function (_super) {
    __extends(Table_or_index_nameContext, _super);
    function Table_or_index_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Table_or_index_nameContext.prototype.any_name = function () {
        return this.getRuleContext(0, Any_nameContext);
    };
    Object.defineProperty(Table_or_index_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_table_or_index_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Table_or_index_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterTable_or_index_name) {
            listener.enterTable_or_index_name(this);
        }
    };
    // @Override
    Table_or_index_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitTable_or_index_name) {
            listener.exitTable_or_index_name(this);
        }
    };
    // @Override
    Table_or_index_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitTable_or_index_name) {
            return visitor.visitTable_or_index_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Table_or_index_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Table_or_index_nameContext = Table_or_index_nameContext;
var New_table_nameContext = /** @class */ (function (_super) {
    __extends(New_table_nameContext, _super);
    function New_table_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    New_table_nameContext.prototype.any_name = function () {
        return this.getRuleContext(0, Any_nameContext);
    };
    Object.defineProperty(New_table_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_new_table_name; },
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
var Column_nameContext = /** @class */ (function (_super) {
    __extends(Column_nameContext, _super);
    function Column_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Column_nameContext.prototype.any_name = function () {
        return this.getRuleContext(0, Any_nameContext);
    };
    Object.defineProperty(Column_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_column_name; },
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
var Collation_nameContext = /** @class */ (function (_super) {
    __extends(Collation_nameContext, _super);
    function Collation_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Collation_nameContext.prototype.any_name = function () {
        return this.getRuleContext(0, Any_nameContext);
    };
    Object.defineProperty(Collation_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_collation_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Collation_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterCollation_name) {
            listener.enterCollation_name(this);
        }
    };
    // @Override
    Collation_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitCollation_name) {
            listener.exitCollation_name(this);
        }
    };
    // @Override
    Collation_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitCollation_name) {
            return visitor.visitCollation_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Collation_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Collation_nameContext = Collation_nameContext;
var Foreign_tableContext = /** @class */ (function (_super) {
    __extends(Foreign_tableContext, _super);
    function Foreign_tableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Foreign_tableContext.prototype.any_name = function () {
        return this.getRuleContext(0, Any_nameContext);
    };
    Object.defineProperty(Foreign_tableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_foreign_table; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Foreign_tableContext.prototype.enterRule = function (listener) {
        if (listener.enterForeign_table) {
            listener.enterForeign_table(this);
        }
    };
    // @Override
    Foreign_tableContext.prototype.exitRule = function (listener) {
        if (listener.exitForeign_table) {
            listener.exitForeign_table(this);
        }
    };
    // @Override
    Foreign_tableContext.prototype.accept = function (visitor) {
        if (visitor.visitForeign_table) {
            return visitor.visitForeign_table(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Foreign_tableContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Foreign_tableContext = Foreign_tableContext;
var Index_nameContext = /** @class */ (function (_super) {
    __extends(Index_nameContext, _super);
    function Index_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Index_nameContext.prototype.any_name = function () {
        return this.getRuleContext(0, Any_nameContext);
    };
    Object.defineProperty(Index_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_index_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Index_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterIndex_name) {
            listener.enterIndex_name(this);
        }
    };
    // @Override
    Index_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitIndex_name) {
            listener.exitIndex_name(this);
        }
    };
    // @Override
    Index_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitIndex_name) {
            return visitor.visitIndex_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Index_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Index_nameContext = Index_nameContext;
var Trigger_nameContext = /** @class */ (function (_super) {
    __extends(Trigger_nameContext, _super);
    function Trigger_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Trigger_nameContext.prototype.any_name = function () {
        return this.getRuleContext(0, Any_nameContext);
    };
    Object.defineProperty(Trigger_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_trigger_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Trigger_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterTrigger_name) {
            listener.enterTrigger_name(this);
        }
    };
    // @Override
    Trigger_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitTrigger_name) {
            listener.exitTrigger_name(this);
        }
    };
    // @Override
    Trigger_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitTrigger_name) {
            return visitor.visitTrigger_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Trigger_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Trigger_nameContext = Trigger_nameContext;
var View_nameContext = /** @class */ (function (_super) {
    __extends(View_nameContext, _super);
    function View_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    View_nameContext.prototype.any_name = function () {
        return this.getRuleContext(0, Any_nameContext);
    };
    Object.defineProperty(View_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_view_name; },
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
var Module_nameContext = /** @class */ (function (_super) {
    __extends(Module_nameContext, _super);
    function Module_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Module_nameContext.prototype.any_name = function () {
        return this.getRuleContext(0, Any_nameContext);
    };
    Object.defineProperty(Module_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_module_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Module_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterModule_name) {
            listener.enterModule_name(this);
        }
    };
    // @Override
    Module_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitModule_name) {
            listener.exitModule_name(this);
        }
    };
    // @Override
    Module_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitModule_name) {
            return visitor.visitModule_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Module_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Module_nameContext = Module_nameContext;
var Pragma_nameContext = /** @class */ (function (_super) {
    __extends(Pragma_nameContext, _super);
    function Pragma_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Pragma_nameContext.prototype.any_name = function () {
        return this.getRuleContext(0, Any_nameContext);
    };
    Object.defineProperty(Pragma_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_pragma_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Pragma_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterPragma_name) {
            listener.enterPragma_name(this);
        }
    };
    // @Override
    Pragma_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitPragma_name) {
            listener.exitPragma_name(this);
        }
    };
    // @Override
    Pragma_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitPragma_name) {
            return visitor.visitPragma_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Pragma_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Pragma_nameContext = Pragma_nameContext;
var Savepoint_nameContext = /** @class */ (function (_super) {
    __extends(Savepoint_nameContext, _super);
    function Savepoint_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Savepoint_nameContext.prototype.any_name = function () {
        return this.getRuleContext(0, Any_nameContext);
    };
    Object.defineProperty(Savepoint_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_savepoint_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Savepoint_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterSavepoint_name) {
            listener.enterSavepoint_name(this);
        }
    };
    // @Override
    Savepoint_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitSavepoint_name) {
            listener.exitSavepoint_name(this);
        }
    };
    // @Override
    Savepoint_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitSavepoint_name) {
            return visitor.visitSavepoint_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Savepoint_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Savepoint_nameContext = Savepoint_nameContext;
var Table_aliasContext = /** @class */ (function (_super) {
    __extends(Table_aliasContext, _super);
    function Table_aliasContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Table_aliasContext.prototype.any_name = function () {
        return this.getRuleContext(0, Any_nameContext);
    };
    Object.defineProperty(Table_aliasContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_table_alias; },
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
var Transaction_nameContext = /** @class */ (function (_super) {
    __extends(Transaction_nameContext, _super);
    function Transaction_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Transaction_nameContext.prototype.any_name = function () {
        return this.getRuleContext(0, Any_nameContext);
    };
    Object.defineProperty(Transaction_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_transaction_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Transaction_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterTransaction_name) {
            listener.enterTransaction_name(this);
        }
    };
    // @Override
    Transaction_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitTransaction_name) {
            listener.exitTransaction_name(this);
        }
    };
    // @Override
    Transaction_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitTransaction_name) {
            return visitor.visitTransaction_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Transaction_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Transaction_nameContext = Transaction_nameContext;
var Any_nameContext = /** @class */ (function (_super) {
    __extends(Any_nameContext, _super);
    function Any_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Any_nameContext.prototype.IDENTIFIER = function () { return this.tryGetToken(SQLiteParser.IDENTIFIER, 0); };
    Any_nameContext.prototype.keyword = function () {
        return this.tryGetRuleContext(0, KeywordContext);
    };
    Any_nameContext.prototype.STRING_LITERAL = function () { return this.tryGetToken(SQLiteParser.STRING_LITERAL, 0); };
    Any_nameContext.prototype.OPEN_PAR = function () { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); };
    Any_nameContext.prototype.any_name = function () {
        return this.tryGetRuleContext(0, Any_nameContext);
    };
    Any_nameContext.prototype.CLOSE_PAR = function () { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); };
    Object.defineProperty(Any_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SQLiteParser.RULE_any_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Any_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterAny_name) {
            listener.enterAny_name(this);
        }
    };
    // @Override
    Any_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitAny_name) {
            listener.exitAny_name(this);
        }
    };
    // @Override
    Any_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitAny_name) {
            return visitor.visitAny_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Any_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Any_nameContext = Any_nameContext;
