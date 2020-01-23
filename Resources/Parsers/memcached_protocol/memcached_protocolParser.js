"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/memcached_protocol/memcached_protocol.g4 by ANTLR 4.7.3-SNAPSHOT
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
var memcached_protocolParser = /** @class */ (function (_super) {
    __extends(memcached_protocolParser, _super);
    function memcached_protocolParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(memcached_protocolParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(memcached_protocolParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return memcached_protocolParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(memcached_protocolParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "memcached_protocol.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(memcached_protocolParser.prototype, "ruleNames", {
        // @Override
        get: function () { return memcached_protocolParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(memcached_protocolParser.prototype, "serializedATN", {
        // @Override
        get: function () { return memcached_protocolParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    memcached_protocolParser.prototype.command_line = function () {
        var _localctx = new Command_lineContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, memcached_protocolParser.RULE_command_line);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 88;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 88;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case memcached_protocolParser.T__0:
                            case memcached_protocolParser.T__1:
                            case memcached_protocolParser.T__2:
                            case memcached_protocolParser.T__3:
                            case memcached_protocolParser.T__4:
                            case memcached_protocolParser.T__5:
                                {
                                    this.state = 78;
                                    this.storage_command();
                                }
                                break;
                            case memcached_protocolParser.T__6:
                            case memcached_protocolParser.T__7:
                                {
                                    this.state = 79;
                                    this.retrieval_command();
                                }
                                break;
                            case memcached_protocolParser.T__8:
                                {
                                    this.state = 80;
                                    this.delete_command();
                                }
                                break;
                            case memcached_protocolParser.T__9:
                                {
                                    this.state = 81;
                                    this.increment_command();
                                }
                                break;
                            case memcached_protocolParser.T__10:
                                {
                                    this.state = 82;
                                    this.decrement_command();
                                }
                                break;
                            case memcached_protocolParser.T__11:
                                {
                                    this.state = 83;
                                    this.statistics_command();
                                }
                                break;
                            case memcached_protocolParser.T__15:
                                {
                                    this.state = 84;
                                    this.flush_command();
                                }
                                break;
                            case memcached_protocolParser.T__16:
                                {
                                    this.state = 85;
                                    this.version_command();
                                }
                                break;
                            case memcached_protocolParser.T__17:
                                {
                                    this.state = 86;
                                    this.verbosity_command();
                                }
                                break;
                            case memcached_protocolParser.T__18:
                                {
                                    this.state = 87;
                                    this.quit_command();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 90;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << memcached_protocolParser.T__0) | (1 << memcached_protocolParser.T__1) | (1 << memcached_protocolParser.T__2) | (1 << memcached_protocolParser.T__3) | (1 << memcached_protocolParser.T__4) | (1 << memcached_protocolParser.T__5) | (1 << memcached_protocolParser.T__6) | (1 << memcached_protocolParser.T__7) | (1 << memcached_protocolParser.T__8) | (1 << memcached_protocolParser.T__9) | (1 << memcached_protocolParser.T__10) | (1 << memcached_protocolParser.T__11) | (1 << memcached_protocolParser.T__15) | (1 << memcached_protocolParser.T__16) | (1 << memcached_protocolParser.T__17) | (1 << memcached_protocolParser.T__18))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    memcached_protocolParser.prototype.storage_command = function () {
        var _localctx = new Storage_commandContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, memcached_protocolParser.RULE_storage_command);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 105;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case memcached_protocolParser.T__1:
                    case memcached_protocolParser.T__2:
                    case memcached_protocolParser.T__3:
                    case memcached_protocolParser.T__4:
                    case memcached_protocolParser.T__5:
                        {
                            {
                                this.state = 92;
                                this.storage_command_name();
                                this.state = 93;
                                this.key();
                                this.state = 94;
                                this.flags();
                                this.state = 95;
                                this.exptime();
                                this.state = 96;
                                this.bytes();
                            }
                        }
                        break;
                    case memcached_protocolParser.T__0:
                        {
                            {
                                this.state = 98;
                                this.match(memcached_protocolParser.T__0);
                                this.state = 99;
                                this.key();
                                this.state = 100;
                                this.flags();
                                this.state = 101;
                                this.exptime();
                                this.state = 102;
                                this.bytes();
                                this.state = 103;
                                this.cas_unique();
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 108;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === memcached_protocolParser.T__30) {
                    {
                        this.state = 107;
                        this.noreply();
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
    memcached_protocolParser.prototype.storage_command_name = function () {
        var _localctx = new Storage_command_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, memcached_protocolParser.RULE_storage_command_name);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 110;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << memcached_protocolParser.T__1) | (1 << memcached_protocolParser.T__2) | (1 << memcached_protocolParser.T__3) | (1 << memcached_protocolParser.T__4) | (1 << memcached_protocolParser.T__5))) !== 0))) {
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
    memcached_protocolParser.prototype.retrieval_command = function () {
        var _localctx = new Retrieval_commandContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, memcached_protocolParser.RULE_retrieval_command);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 112;
                _la = this._input.LA(1);
                if (!(_la === memcached_protocolParser.T__6 || _la === memcached_protocolParser.T__7)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 114;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 113;
                                    this.key();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 116;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
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
    memcached_protocolParser.prototype.delete_command = function () {
        var _localctx = new Delete_commandContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, memcached_protocolParser.RULE_delete_command);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 118;
                this.match(memcached_protocolParser.T__8);
                this.state = 119;
                this.key();
                this.state = 121;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === memcached_protocolParser.INTEGER) {
                    {
                        this.state = 120;
                        this.time();
                    }
                }
                this.state = 124;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === memcached_protocolParser.T__30) {
                    {
                        this.state = 123;
                        this.noreply();
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
    memcached_protocolParser.prototype.increment_command = function () {
        var _localctx = new Increment_commandContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, memcached_protocolParser.RULE_increment_command);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 126;
                this.match(memcached_protocolParser.T__9);
                this.state = 127;
                this.key();
                this.state = 128;
                this.value();
                this.state = 130;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === memcached_protocolParser.T__30) {
                    {
                        this.state = 129;
                        this.noreply();
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
    memcached_protocolParser.prototype.decrement_command = function () {
        var _localctx = new Decrement_commandContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, memcached_protocolParser.RULE_decrement_command);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 132;
                this.match(memcached_protocolParser.T__10);
                this.state = 133;
                this.key();
                this.state = 134;
                this.value();
                this.state = 136;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === memcached_protocolParser.T__30) {
                    {
                        this.state = 135;
                        this.noreply();
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
    memcached_protocolParser.prototype.statistics_command = function () {
        var _localctx = new Statistics_commandContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, memcached_protocolParser.RULE_statistics_command);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 138;
                this.match(memcached_protocolParser.T__11);
                this.state = 140;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << memcached_protocolParser.T__12) | (1 << memcached_protocolParser.T__13) | (1 << memcached_protocolParser.T__14))) !== 0)) {
                    {
                        this.state = 139;
                        this.statistics_option();
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
    memcached_protocolParser.prototype.statistics_option = function () {
        var _localctx = new Statistics_optionContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, memcached_protocolParser.RULE_statistics_option);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 142;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << memcached_protocolParser.T__12) | (1 << memcached_protocolParser.T__13) | (1 << memcached_protocolParser.T__14))) !== 0))) {
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
    memcached_protocolParser.prototype.flush_command = function () {
        var _localctx = new Flush_commandContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, memcached_protocolParser.RULE_flush_command);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 144;
                this.match(memcached_protocolParser.T__15);
                this.state = 146;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === memcached_protocolParser.INTEGER) {
                    {
                        this.state = 145;
                        this.delay();
                    }
                }
                this.state = 149;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === memcached_protocolParser.T__30) {
                    {
                        this.state = 148;
                        this.noreply();
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
    memcached_protocolParser.prototype.version_command = function () {
        var _localctx = new Version_commandContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, memcached_protocolParser.RULE_version_command);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 151;
                this.match(memcached_protocolParser.T__16);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    memcached_protocolParser.prototype.verbosity_command = function () {
        var _localctx = new Verbosity_commandContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, memcached_protocolParser.RULE_verbosity_command);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 153;
                this.match(memcached_protocolParser.T__17);
                this.state = 154;
                this.verbosity_level();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    memcached_protocolParser.prototype.quit_command = function () {
        var _localctx = new Quit_commandContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, memcached_protocolParser.RULE_quit_command);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 156;
                this.match(memcached_protocolParser.T__18);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    memcached_protocolParser.prototype.storage_response = function () {
        var _localctx = new Storage_responseContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, memcached_protocolParser.RULE_storage_response);
        try {
            this.state = 163;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case memcached_protocolParser.T__26:
                case memcached_protocolParser.T__27:
                case memcached_protocolParser.T__28:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 158;
                        this.error_response();
                    }
                    break;
                case memcached_protocolParser.T__19:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 159;
                        this.match(memcached_protocolParser.T__19);
                    }
                    break;
                case memcached_protocolParser.T__20:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 160;
                        this.match(memcached_protocolParser.T__20);
                    }
                    break;
                case memcached_protocolParser.T__21:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 161;
                        this.match(memcached_protocolParser.T__21);
                    }
                    break;
                case memcached_protocolParser.T__22:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 162;
                        this.match(memcached_protocolParser.T__22);
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
    memcached_protocolParser.prototype.retrieval_response = function () {
        var _localctx = new Retrieval_responseContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, memcached_protocolParser.RULE_retrieval_response);
        var _la;
        try {
            this.state = 174;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case memcached_protocolParser.T__26:
                case memcached_protocolParser.T__27:
                case memcached_protocolParser.T__28:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 165;
                        this.error_response();
                    }
                    break;
                case memcached_protocolParser.T__23:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 166;
                            this.match(memcached_protocolParser.T__23);
                            this.state = 167;
                            this.key();
                            this.state = 168;
                            this.flags();
                            this.state = 169;
                            this.bytes();
                            this.state = 171;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === memcached_protocolParser.INTEGER) {
                                {
                                    this.state = 170;
                                    this.cas_unique();
                                }
                            }
                        }
                    }
                    break;
                case memcached_protocolParser.T__29:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 173;
                        this.end();
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
    memcached_protocolParser.prototype.deletion_response = function () {
        var _localctx = new Deletion_responseContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, memcached_protocolParser.RULE_deletion_response);
        try {
            this.state = 179;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case memcached_protocolParser.T__26:
                case memcached_protocolParser.T__27:
                case memcached_protocolParser.T__28:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 176;
                        this.error_response();
                    }
                    break;
                case memcached_protocolParser.T__24:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 177;
                        this.match(memcached_protocolParser.T__24);
                    }
                    break;
                case memcached_protocolParser.T__22:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 178;
                        this.match(memcached_protocolParser.T__22);
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
    memcached_protocolParser.prototype.incr_or_decr_response = function () {
        var _localctx = new Incr_or_decr_responseContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, memcached_protocolParser.RULE_incr_or_decr_response);
        try {
            this.state = 184;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case memcached_protocolParser.T__26:
                case memcached_protocolParser.T__27:
                case memcached_protocolParser.T__28:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 181;
                        this.error_response();
                    }
                    break;
                case memcached_protocolParser.T__22:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 182;
                        this.match(memcached_protocolParser.T__22);
                    }
                    break;
                case memcached_protocolParser.INTEGER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 183;
                        this.match(memcached_protocolParser.INTEGER);
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
    memcached_protocolParser.prototype.statistics_response = function () {
        var _localctx = new Statistics_responseContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, memcached_protocolParser.RULE_statistics_response);
        try {
            this.state = 190;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case memcached_protocolParser.T__26:
                case memcached_protocolParser.T__27:
                case memcached_protocolParser.T__28:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 186;
                        this.error_response();
                    }
                    break;
                case memcached_protocolParser.T__25:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 187;
                        this.general_statistic();
                    }
                    break;
                case memcached_protocolParser.INTEGER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 188;
                        this.size_statistic();
                    }
                    break;
                case memcached_protocolParser.T__29:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 189;
                        this.end();
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
    memcached_protocolParser.prototype.error_response = function () {
        var _localctx = new Error_responseContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, memcached_protocolParser.RULE_error_response);
        try {
            this.state = 195;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case memcached_protocolParser.T__26:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 192;
                        this.general_error();
                    }
                    break;
                case memcached_protocolParser.T__27:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 193;
                        this.client_error_message();
                    }
                    break;
                case memcached_protocolParser.T__28:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 194;
                        this.server_error_message();
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
    memcached_protocolParser.prototype.general_statistic = function () {
        var _localctx = new General_statisticContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, memcached_protocolParser.RULE_general_statistic);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 197;
                this.match(memcached_protocolParser.T__25);
                this.state = 198;
                this.statistic_name();
                this.state = 199;
                this.statistic_value();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    memcached_protocolParser.prototype.size_statistic = function () {
        var _localctx = new Size_statisticContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, memcached_protocolParser.RULE_size_statistic);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 201;
                this.size();
                this.state = 202;
                this.count();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    memcached_protocolParser.prototype.general_error = function () {
        var _localctx = new General_errorContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, memcached_protocolParser.RULE_general_error);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 204;
                this.match(memcached_protocolParser.T__26);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    memcached_protocolParser.prototype.client_error_message = function () {
        var _localctx = new Client_error_messageContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, memcached_protocolParser.RULE_client_error_message);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 206;
                this.match(memcached_protocolParser.T__27);
                this.state = 208;
                this._errHandler.sync(this);
                _alt = 1 + 1;
                do {
                    switch (_alt) {
                        case 1 + 1:
                            {
                                {
                                    this.state = 207;
                                    this.matchWildcard();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 210;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                } while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    memcached_protocolParser.prototype.server_error_message = function () {
        var _localctx = new Server_error_messageContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, memcached_protocolParser.RULE_server_error_message);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 212;
                this.match(memcached_protocolParser.T__28);
                this.state = 214;
                this._errHandler.sync(this);
                _alt = 1 + 1;
                do {
                    switch (_alt) {
                        case 1 + 1:
                            {
                                {
                                    this.state = 213;
                                    this.matchWildcard();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 216;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                } while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    memcached_protocolParser.prototype.end = function () {
        var _localctx = new EndContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, memcached_protocolParser.RULE_end);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 218;
                this.match(memcached_protocolParser.T__29);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    memcached_protocolParser.prototype.noreply = function () {
        var _localctx = new NoreplyContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, memcached_protocolParser.RULE_noreply);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 220;
                this.match(memcached_protocolParser.T__30);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    memcached_protocolParser.prototype.key = function () {
        var _localctx = new KeyContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, memcached_protocolParser.RULE_key);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 222;
                this.matchWildcard();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    memcached_protocolParser.prototype.flags = function () {
        var _localctx = new FlagsContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, memcached_protocolParser.RULE_flags);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 224;
                this.match(memcached_protocolParser.INTEGER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    memcached_protocolParser.prototype.exptime = function () {
        var _localctx = new ExptimeContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, memcached_protocolParser.RULE_exptime);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 226;
                this.match(memcached_protocolParser.INTEGER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    memcached_protocolParser.prototype.bytes = function () {
        var _localctx = new BytesContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, memcached_protocolParser.RULE_bytes);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 228;
                this.match(memcached_protocolParser.INTEGER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    memcached_protocolParser.prototype.cas_unique = function () {
        var _localctx = new Cas_uniqueContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, memcached_protocolParser.RULE_cas_unique);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 230;
                this.match(memcached_protocolParser.INTEGER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    memcached_protocolParser.prototype.value = function () {
        var _localctx = new ValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, memcached_protocolParser.RULE_value);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 232;
                this.match(memcached_protocolParser.INTEGER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    memcached_protocolParser.prototype.time = function () {
        var _localctx = new TimeContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, memcached_protocolParser.RULE_time);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 234;
                this.match(memcached_protocolParser.INTEGER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    memcached_protocolParser.prototype.delay = function () {
        var _localctx = new DelayContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, memcached_protocolParser.RULE_delay);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 236;
                this.match(memcached_protocolParser.INTEGER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    memcached_protocolParser.prototype.verbosity_level = function () {
        var _localctx = new Verbosity_levelContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, memcached_protocolParser.RULE_verbosity_level);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 238;
                this.match(memcached_protocolParser.INTEGER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    memcached_protocolParser.prototype.statistic_name = function () {
        var _localctx = new Statistic_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, memcached_protocolParser.RULE_statistic_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 240;
                this.match(memcached_protocolParser.WORD);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    memcached_protocolParser.prototype.statistic_value = function () {
        var _localctx = new Statistic_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, memcached_protocolParser.RULE_statistic_value);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 242;
                this.matchWildcard();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    memcached_protocolParser.prototype.size = function () {
        var _localctx = new SizeContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, memcached_protocolParser.RULE_size);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 244;
                this.match(memcached_protocolParser.INTEGER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    memcached_protocolParser.prototype.count = function () {
        var _localctx = new CountContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, memcached_protocolParser.RULE_count);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 246;
                this.match(memcached_protocolParser.INTEGER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(memcached_protocolParser, "_ATN", {
        get: function () {
            if (!memcached_protocolParser.__ATN) {
                memcached_protocolParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(memcached_protocolParser._serializedATN));
            }
            return memcached_protocolParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    memcached_protocolParser.T__0 = 1;
    memcached_protocolParser.T__1 = 2;
    memcached_protocolParser.T__2 = 3;
    memcached_protocolParser.T__3 = 4;
    memcached_protocolParser.T__4 = 5;
    memcached_protocolParser.T__5 = 6;
    memcached_protocolParser.T__6 = 7;
    memcached_protocolParser.T__7 = 8;
    memcached_protocolParser.T__8 = 9;
    memcached_protocolParser.T__9 = 10;
    memcached_protocolParser.T__10 = 11;
    memcached_protocolParser.T__11 = 12;
    memcached_protocolParser.T__12 = 13;
    memcached_protocolParser.T__13 = 14;
    memcached_protocolParser.T__14 = 15;
    memcached_protocolParser.T__15 = 16;
    memcached_protocolParser.T__16 = 17;
    memcached_protocolParser.T__17 = 18;
    memcached_protocolParser.T__18 = 19;
    memcached_protocolParser.T__19 = 20;
    memcached_protocolParser.T__20 = 21;
    memcached_protocolParser.T__21 = 22;
    memcached_protocolParser.T__22 = 23;
    memcached_protocolParser.T__23 = 24;
    memcached_protocolParser.T__24 = 25;
    memcached_protocolParser.T__25 = 26;
    memcached_protocolParser.T__26 = 27;
    memcached_protocolParser.T__27 = 28;
    memcached_protocolParser.T__28 = 29;
    memcached_protocolParser.T__29 = 30;
    memcached_protocolParser.T__30 = 31;
    memcached_protocolParser.INTEGER = 32;
    memcached_protocolParser.WORD = 33;
    memcached_protocolParser.WHITESPACE = 34;
    memcached_protocolParser.RULE_command_line = 0;
    memcached_protocolParser.RULE_storage_command = 1;
    memcached_protocolParser.RULE_storage_command_name = 2;
    memcached_protocolParser.RULE_retrieval_command = 3;
    memcached_protocolParser.RULE_delete_command = 4;
    memcached_protocolParser.RULE_increment_command = 5;
    memcached_protocolParser.RULE_decrement_command = 6;
    memcached_protocolParser.RULE_statistics_command = 7;
    memcached_protocolParser.RULE_statistics_option = 8;
    memcached_protocolParser.RULE_flush_command = 9;
    memcached_protocolParser.RULE_version_command = 10;
    memcached_protocolParser.RULE_verbosity_command = 11;
    memcached_protocolParser.RULE_quit_command = 12;
    memcached_protocolParser.RULE_storage_response = 13;
    memcached_protocolParser.RULE_retrieval_response = 14;
    memcached_protocolParser.RULE_deletion_response = 15;
    memcached_protocolParser.RULE_incr_or_decr_response = 16;
    memcached_protocolParser.RULE_statistics_response = 17;
    memcached_protocolParser.RULE_error_response = 18;
    memcached_protocolParser.RULE_general_statistic = 19;
    memcached_protocolParser.RULE_size_statistic = 20;
    memcached_protocolParser.RULE_general_error = 21;
    memcached_protocolParser.RULE_client_error_message = 22;
    memcached_protocolParser.RULE_server_error_message = 23;
    memcached_protocolParser.RULE_end = 24;
    memcached_protocolParser.RULE_noreply = 25;
    memcached_protocolParser.RULE_key = 26;
    memcached_protocolParser.RULE_flags = 27;
    memcached_protocolParser.RULE_exptime = 28;
    memcached_protocolParser.RULE_bytes = 29;
    memcached_protocolParser.RULE_cas_unique = 30;
    memcached_protocolParser.RULE_value = 31;
    memcached_protocolParser.RULE_time = 32;
    memcached_protocolParser.RULE_delay = 33;
    memcached_protocolParser.RULE_verbosity_level = 34;
    memcached_protocolParser.RULE_statistic_name = 35;
    memcached_protocolParser.RULE_statistic_value = 36;
    memcached_protocolParser.RULE_size = 37;
    memcached_protocolParser.RULE_count = 38;
    // tslint:disable:no-trailing-whitespace
    memcached_protocolParser.ruleNames = [
        "command_line", "storage_command", "storage_command_name", "retrieval_command",
        "delete_command", "increment_command", "decrement_command", "statistics_command",
        "statistics_option", "flush_command", "version_command", "verbosity_command",
        "quit_command", "storage_response", "retrieval_response", "deletion_response",
        "incr_or_decr_response", "statistics_response", "error_response", "general_statistic",
        "size_statistic", "general_error", "client_error_message", "server_error_message",
        "end", "noreply", "key", "flags", "exptime", "bytes", "cas_unique", "value",
        "time", "delay", "verbosity_level", "statistic_name", "statistic_value",
        "size", "count",
    ];
    memcached_protocolParser._LITERAL_NAMES = [
        undefined, "'cas'", "'set'", "'add'", "'replace'", "'append'", "'prepend'",
        "'get'", "'gets'", "'delete'", "'incr'", "'decr'", "'stats'", "'items'",
        "'slabs'", "'sizes'", "'flush_all'", "'version'", "'verbosity'", "'quit'",
        "'STORED'", "'NOT_STORED'", "'EXISTS'", "'NOT_FOUND'", "'VALUE'", "'DELETED'",
        "'STAT'", "'ERROR'", "'CLIENT_ERROR'", "'SERVER_ERROR'", "'END'", "'noreply'",
    ];
    memcached_protocolParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, "INTEGER", "WORD", "WHITESPACE",
    ];
    memcached_protocolParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(memcached_protocolParser._LITERAL_NAMES, memcached_protocolParser._SYMBOLIC_NAMES, []);
    memcached_protocolParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03$\xFB\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x03\x02\x03\x02\x03\x02" +
        "\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x06\x02[\n\x02" +
        "\r\x02\x0E\x02\\\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03l\n\x03\x03\x03" +
        "\x05\x03o\n\x03\x03\x04\x03\x04\x03\x05\x03\x05\x06\x05u\n\x05\r\x05\x0E" +
        "\x05v\x03\x06\x03\x06\x03\x06\x05\x06|\n\x06\x03\x06\x05\x06\x7F\n\x06" +
        "\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x85\n\x07\x03\b\x03\b\x03\b\x03" +
        "\b\x05\b\x8B\n\b\x03\t\x03\t\x05\t\x8F\n\t\x03\n\x03\n\x03\v\x03\v\x05" +
        "\v\x95\n\v\x03\v\x05\v\x98\n\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03" +
        "\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xA6\n\x0F\x03\x10" +
        "\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xAE\n\x10\x03\x10\x05" +
        "\x10\xB1\n\x10\x03\x11\x03\x11\x03\x11\x05\x11\xB6\n\x11\x03\x12\x03\x12" +
        "\x03\x12\x05\x12\xBB\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\xC1" +
        "\n\x13\x03\x14\x03\x14\x03\x14\x05\x14\xC6\n\x14\x03\x15\x03\x15\x03\x15" +
        "\x03\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x06\x18" +
        "\xD3\n\x18\r\x18\x0E\x18\xD4\x03\x19\x03\x19\x06\x19\xD9\n\x19\r\x19\x0E" +
        "\x19\xDA\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D" +
        "\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03#" +
        "\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03(\x04\xD4" +
        "\xDA\x02\x02)\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
        "\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
        "&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
        "B\x02D\x02F\x02H\x02J\x02L\x02N\x02\x02\x05\x03\x02\x04\b\x03\x02\t\n" +
        "\x03\x02\x0F\x11\x02\xF9\x02Z\x03\x02\x02\x02\x04k\x03\x02\x02\x02\x06" +
        "p\x03\x02\x02\x02\br\x03\x02\x02\x02\nx\x03\x02\x02\x02\f\x80\x03\x02" +
        "\x02\x02\x0E\x86\x03\x02\x02\x02\x10\x8C\x03\x02\x02\x02\x12\x90\x03\x02" +
        "\x02\x02\x14\x92\x03\x02\x02\x02\x16\x99\x03\x02\x02\x02\x18\x9B\x03\x02" +
        "\x02\x02\x1A\x9E\x03\x02\x02\x02\x1C\xA5\x03\x02\x02\x02\x1E\xB0\x03\x02" +
        "\x02\x02 \xB5\x03\x02\x02\x02\"\xBA\x03\x02\x02\x02$\xC0\x03\x02\x02\x02" +
        "&\xC5\x03\x02\x02\x02(\xC7\x03\x02\x02\x02*\xCB\x03\x02\x02\x02,\xCE\x03" +
        "\x02\x02\x02.\xD0\x03\x02\x02\x020\xD6\x03\x02\x02\x022\xDC\x03\x02\x02" +
        "\x024\xDE\x03\x02\x02\x026\xE0\x03\x02\x02\x028\xE2\x03\x02\x02\x02:\xE4" +
        "\x03\x02\x02\x02<\xE6\x03\x02\x02\x02>\xE8\x03\x02\x02\x02@\xEA\x03\x02" +
        "\x02\x02B\xEC\x03\x02\x02\x02D\xEE\x03\x02\x02\x02F\xF0\x03\x02\x02\x02" +
        "H\xF2\x03\x02\x02\x02J\xF4\x03\x02\x02\x02L\xF6\x03\x02\x02\x02N\xF8\x03" +
        "\x02\x02\x02P[\x05\x04\x03\x02Q[\x05\b\x05\x02R[\x05\n\x06\x02S[\x05\f" +
        "\x07\x02T[\x05\x0E\b\x02U[\x05\x10\t\x02V[\x05\x14\v\x02W[\x05\x16\f\x02" +
        "X[\x05\x18\r\x02Y[\x05\x1A\x0E\x02ZP\x03\x02\x02\x02ZQ\x03\x02\x02\x02" +
        "ZR\x03\x02\x02\x02ZS\x03\x02\x02\x02ZT\x03\x02\x02\x02ZU\x03\x02\x02\x02" +
        "ZV\x03\x02\x02\x02ZW\x03\x02\x02\x02ZX\x03\x02\x02\x02ZY\x03\x02\x02\x02" +
        "[\\\x03\x02\x02\x02\\Z\x03\x02\x02\x02\\]\x03\x02\x02\x02]\x03\x03\x02" +
        "\x02\x02^_\x05\x06\x04\x02_`\x056\x1C\x02`a\x058\x1D\x02ab\x05:\x1E\x02" +
        "bc\x05<\x1F\x02cl\x03\x02\x02\x02de\x07\x03\x02\x02ef\x056\x1C\x02fg\x05" +
        "8\x1D\x02gh\x05:\x1E\x02hi\x05<\x1F\x02ij\x05> \x02jl\x03\x02\x02\x02" +
        "k^\x03\x02\x02\x02kd\x03\x02\x02\x02ln\x03\x02\x02\x02mo\x054\x1B\x02" +
        "nm\x03\x02\x02\x02no\x03\x02\x02\x02o\x05\x03\x02\x02\x02pq\t\x02\x02" +
        "\x02q\x07\x03\x02\x02\x02rt\t\x03\x02\x02su\x056\x1C\x02ts\x03\x02\x02" +
        "\x02uv\x03\x02\x02\x02vt\x03\x02\x02\x02vw\x03\x02\x02\x02w\t\x03\x02" +
        "\x02\x02xy\x07\v\x02\x02y{\x056\x1C\x02z|\x05B\"\x02{z\x03\x02\x02\x02" +
        "{|\x03\x02\x02\x02|~\x03\x02\x02\x02}\x7F\x054\x1B\x02~}\x03\x02\x02\x02" +
        "~\x7F\x03\x02\x02\x02\x7F\v\x03\x02\x02\x02\x80\x81\x07\f\x02\x02\x81" +
        "\x82\x056\x1C\x02\x82\x84\x05@!\x02\x83\x85\x054\x1B\x02\x84\x83\x03\x02" +
        "\x02\x02\x84\x85\x03\x02\x02\x02\x85\r\x03\x02\x02\x02\x86\x87\x07\r\x02" +
        "\x02\x87\x88\x056\x1C\x02\x88\x8A\x05@!\x02\x89\x8B\x054\x1B\x02\x8A\x89" +
        "\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x0F\x03\x02\x02\x02\x8C\x8E" +
        "\x07\x0E\x02\x02\x8D\x8F\x05\x12\n\x02\x8E\x8D\x03\x02\x02\x02\x8E\x8F" +
        "\x03\x02\x02\x02\x8F\x11\x03\x02\x02\x02\x90\x91\t\x04\x02\x02\x91\x13" +
        "\x03\x02\x02\x02\x92\x94\x07\x12\x02\x02\x93\x95\x05D#\x02\x94\x93\x03" +
        "\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x97\x03\x02\x02\x02\x96\x98\x05" +
        "4\x1B\x02\x97\x96\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x15\x03" +
        "\x02\x02\x02\x99\x9A\x07\x13\x02\x02\x9A\x17\x03\x02\x02\x02\x9B\x9C\x07" +
        "\x14\x02\x02\x9C\x9D\x05F$\x02\x9D\x19\x03\x02\x02\x02\x9E\x9F\x07\x15" +
        "\x02\x02\x9F\x1B\x03\x02\x02\x02\xA0\xA6\x05&\x14\x02\xA1\xA6\x07\x16" +
        "\x02\x02\xA2\xA6\x07\x17\x02\x02\xA3\xA6\x07\x18\x02\x02\xA4\xA6\x07\x19" +
        "\x02\x02\xA5\xA0\x03\x02\x02\x02\xA5\xA1\x03\x02\x02\x02\xA5\xA2\x03\x02" +
        "\x02\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA4\x03\x02\x02\x02\xA6\x1D\x03\x02" +
        "\x02\x02\xA7\xB1\x05&\x14\x02\xA8\xA9\x07\x1A\x02\x02\xA9\xAA\x056\x1C" +
        "\x02\xAA\xAB\x058\x1D\x02\xAB\xAD\x05<\x1F\x02\xAC\xAE\x05> \x02\xAD\xAC" +
        "\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xB1\x03\x02\x02\x02\xAF\xB1" +
        "\x052\x1A\x02\xB0\xA7\x03\x02\x02\x02\xB0\xA8\x03\x02\x02\x02\xB0\xAF" +
        "\x03\x02\x02\x02\xB1\x1F\x03\x02\x02\x02\xB2\xB6\x05&\x14\x02\xB3\xB6" +
        "\x07\x1B\x02\x02\xB4\xB6\x07\x19\x02\x02\xB5\xB2\x03\x02\x02\x02\xB5\xB3" +
        "\x03\x02\x02\x02\xB5\xB4\x03\x02\x02\x02\xB6!\x03\x02\x02\x02\xB7\xBB" +
        "\x05&\x14\x02\xB8\xBB\x07\x19\x02\x02\xB9\xBB\x07\"\x02\x02\xBA\xB7\x03" +
        "\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBA\xB9\x03\x02\x02\x02\xBB#\x03" +
        "\x02\x02\x02\xBC\xC1\x05&\x14\x02\xBD\xC1\x05(\x15\x02\xBE\xC1\x05*\x16" +
        "\x02\xBF\xC1\x052\x1A\x02\xC0\xBC\x03\x02\x02\x02\xC0\xBD\x03\x02\x02" +
        "\x02\xC0\xBE\x03\x02\x02\x02\xC0\xBF\x03\x02\x02\x02\xC1%\x03\x02\x02" +
        "\x02\xC2\xC6\x05,\x17\x02\xC3\xC6\x05.\x18\x02\xC4\xC6\x050\x19\x02\xC5" +
        "\xC2\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC5\xC4\x03\x02\x02\x02\xC6" +
        "\'\x03\x02\x02\x02\xC7\xC8\x07\x1C\x02\x02\xC8\xC9\x05H%\x02\xC9\xCA\x05" +
        "J&\x02\xCA)\x03\x02\x02\x02\xCB\xCC\x05L\'\x02\xCC\xCD\x05N(\x02\xCD+" +
        "\x03\x02\x02\x02\xCE\xCF\x07\x1D\x02\x02\xCF-\x03\x02\x02\x02\xD0\xD2" +
        "\x07\x1E\x02\x02\xD1\xD3\v\x02\x02\x02\xD2\xD1\x03\x02\x02\x02\xD3\xD4" +
        "\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD5/" +
        "\x03\x02\x02\x02\xD6\xD8\x07\x1F\x02\x02\xD7\xD9\v\x02\x02\x02\xD8\xD7" +
        "\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDA\xD8" +
        "\x03\x02\x02\x02\xDB1\x03\x02\x02\x02\xDC\xDD\x07 \x02\x02\xDD3\x03\x02" +
        "\x02\x02\xDE\xDF\x07!\x02\x02\xDF5\x03\x02\x02\x02\xE0\xE1\v\x02\x02\x02" +
        "\xE17\x03\x02\x02\x02\xE2\xE3\x07\"\x02\x02\xE39\x03\x02\x02\x02\xE4\xE5" +
        "\x07\"\x02\x02\xE5;\x03\x02\x02\x02\xE6\xE7\x07\"\x02\x02\xE7=\x03\x02" +
        "\x02\x02\xE8\xE9\x07\"\x02\x02\xE9?\x03\x02\x02\x02\xEA\xEB\x07\"\x02" +
        "\x02\xEBA\x03\x02\x02\x02\xEC\xED\x07\"\x02\x02\xEDC\x03\x02\x02\x02\xEE" +
        "\xEF\x07\"\x02\x02\xEFE\x03\x02\x02\x02\xF0\xF1\x07\"\x02\x02\xF1G\x03" +
        "\x02\x02\x02\xF2\xF3\x07#\x02\x02\xF3I\x03\x02\x02\x02\xF4\xF5\v\x02\x02" +
        "\x02\xF5K\x03\x02\x02\x02\xF6\xF7\x07\"\x02\x02\xF7M\x03\x02\x02\x02\xF8" +
        "\xF9\x07\"\x02\x02\xF9O\x03\x02\x02\x02\x17Z\\knv{~\x84\x8A\x8E\x94\x97" +
        "\xA5\xAD\xB0\xB5\xBA\xC0\xC5\xD4\xDA";
    return memcached_protocolParser;
}(Parser_1.Parser));
exports.memcached_protocolParser = memcached_protocolParser;
var Command_lineContext = /** @class */ (function (_super) {
    __extends(Command_lineContext, _super);
    function Command_lineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Command_lineContext.prototype.storage_command = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Storage_commandContext);
        }
        else {
            return this.getRuleContext(i, Storage_commandContext);
        }
    };
    Command_lineContext.prototype.retrieval_command = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Retrieval_commandContext);
        }
        else {
            return this.getRuleContext(i, Retrieval_commandContext);
        }
    };
    Command_lineContext.prototype.delete_command = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Delete_commandContext);
        }
        else {
            return this.getRuleContext(i, Delete_commandContext);
        }
    };
    Command_lineContext.prototype.increment_command = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Increment_commandContext);
        }
        else {
            return this.getRuleContext(i, Increment_commandContext);
        }
    };
    Command_lineContext.prototype.decrement_command = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Decrement_commandContext);
        }
        else {
            return this.getRuleContext(i, Decrement_commandContext);
        }
    };
    Command_lineContext.prototype.statistics_command = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Statistics_commandContext);
        }
        else {
            return this.getRuleContext(i, Statistics_commandContext);
        }
    };
    Command_lineContext.prototype.flush_command = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Flush_commandContext);
        }
        else {
            return this.getRuleContext(i, Flush_commandContext);
        }
    };
    Command_lineContext.prototype.version_command = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Version_commandContext);
        }
        else {
            return this.getRuleContext(i, Version_commandContext);
        }
    };
    Command_lineContext.prototype.verbosity_command = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Verbosity_commandContext);
        }
        else {
            return this.getRuleContext(i, Verbosity_commandContext);
        }
    };
    Command_lineContext.prototype.quit_command = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Quit_commandContext);
        }
        else {
            return this.getRuleContext(i, Quit_commandContext);
        }
    };
    Object.defineProperty(Command_lineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_command_line; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Command_lineContext.prototype.enterRule = function (listener) {
        if (listener.enterCommand_line) {
            listener.enterCommand_line(this);
        }
    };
    // @Override
    Command_lineContext.prototype.exitRule = function (listener) {
        if (listener.exitCommand_line) {
            listener.exitCommand_line(this);
        }
    };
    // @Override
    Command_lineContext.prototype.accept = function (visitor) {
        if (visitor.visitCommand_line) {
            return visitor.visitCommand_line(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Command_lineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Command_lineContext = Command_lineContext;
var Storage_commandContext = /** @class */ (function (_super) {
    __extends(Storage_commandContext, _super);
    function Storage_commandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Storage_commandContext.prototype.noreply = function () {
        return this.tryGetRuleContext(0, NoreplyContext);
    };
    Storage_commandContext.prototype.storage_command_name = function () {
        return this.tryGetRuleContext(0, Storage_command_nameContext);
    };
    Storage_commandContext.prototype.key = function () {
        return this.tryGetRuleContext(0, KeyContext);
    };
    Storage_commandContext.prototype.flags = function () {
        return this.tryGetRuleContext(0, FlagsContext);
    };
    Storage_commandContext.prototype.exptime = function () {
        return this.tryGetRuleContext(0, ExptimeContext);
    };
    Storage_commandContext.prototype.bytes = function () {
        return this.tryGetRuleContext(0, BytesContext);
    };
    Storage_commandContext.prototype.cas_unique = function () {
        return this.tryGetRuleContext(0, Cas_uniqueContext);
    };
    Object.defineProperty(Storage_commandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_storage_command; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Storage_commandContext.prototype.enterRule = function (listener) {
        if (listener.enterStorage_command) {
            listener.enterStorage_command(this);
        }
    };
    // @Override
    Storage_commandContext.prototype.exitRule = function (listener) {
        if (listener.exitStorage_command) {
            listener.exitStorage_command(this);
        }
    };
    // @Override
    Storage_commandContext.prototype.accept = function (visitor) {
        if (visitor.visitStorage_command) {
            return visitor.visitStorage_command(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Storage_commandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Storage_commandContext = Storage_commandContext;
var Storage_command_nameContext = /** @class */ (function (_super) {
    __extends(Storage_command_nameContext, _super);
    function Storage_command_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Storage_command_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_storage_command_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Storage_command_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterStorage_command_name) {
            listener.enterStorage_command_name(this);
        }
    };
    // @Override
    Storage_command_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitStorage_command_name) {
            listener.exitStorage_command_name(this);
        }
    };
    // @Override
    Storage_command_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitStorage_command_name) {
            return visitor.visitStorage_command_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Storage_command_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Storage_command_nameContext = Storage_command_nameContext;
var Retrieval_commandContext = /** @class */ (function (_super) {
    __extends(Retrieval_commandContext, _super);
    function Retrieval_commandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Retrieval_commandContext.prototype.key = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(KeyContext);
        }
        else {
            return this.getRuleContext(i, KeyContext);
        }
    };
    Object.defineProperty(Retrieval_commandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_retrieval_command; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Retrieval_commandContext.prototype.enterRule = function (listener) {
        if (listener.enterRetrieval_command) {
            listener.enterRetrieval_command(this);
        }
    };
    // @Override
    Retrieval_commandContext.prototype.exitRule = function (listener) {
        if (listener.exitRetrieval_command) {
            listener.exitRetrieval_command(this);
        }
    };
    // @Override
    Retrieval_commandContext.prototype.accept = function (visitor) {
        if (visitor.visitRetrieval_command) {
            return visitor.visitRetrieval_command(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Retrieval_commandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Retrieval_commandContext = Retrieval_commandContext;
var Delete_commandContext = /** @class */ (function (_super) {
    __extends(Delete_commandContext, _super);
    function Delete_commandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Delete_commandContext.prototype.key = function () {
        return this.getRuleContext(0, KeyContext);
    };
    Delete_commandContext.prototype.time = function () {
        return this.tryGetRuleContext(0, TimeContext);
    };
    Delete_commandContext.prototype.noreply = function () {
        return this.tryGetRuleContext(0, NoreplyContext);
    };
    Object.defineProperty(Delete_commandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_delete_command; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Delete_commandContext.prototype.enterRule = function (listener) {
        if (listener.enterDelete_command) {
            listener.enterDelete_command(this);
        }
    };
    // @Override
    Delete_commandContext.prototype.exitRule = function (listener) {
        if (listener.exitDelete_command) {
            listener.exitDelete_command(this);
        }
    };
    // @Override
    Delete_commandContext.prototype.accept = function (visitor) {
        if (visitor.visitDelete_command) {
            return visitor.visitDelete_command(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Delete_commandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Delete_commandContext = Delete_commandContext;
var Increment_commandContext = /** @class */ (function (_super) {
    __extends(Increment_commandContext, _super);
    function Increment_commandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Increment_commandContext.prototype.key = function () {
        return this.getRuleContext(0, KeyContext);
    };
    Increment_commandContext.prototype.value = function () {
        return this.getRuleContext(0, ValueContext);
    };
    Increment_commandContext.prototype.noreply = function () {
        return this.tryGetRuleContext(0, NoreplyContext);
    };
    Object.defineProperty(Increment_commandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_increment_command; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Increment_commandContext.prototype.enterRule = function (listener) {
        if (listener.enterIncrement_command) {
            listener.enterIncrement_command(this);
        }
    };
    // @Override
    Increment_commandContext.prototype.exitRule = function (listener) {
        if (listener.exitIncrement_command) {
            listener.exitIncrement_command(this);
        }
    };
    // @Override
    Increment_commandContext.prototype.accept = function (visitor) {
        if (visitor.visitIncrement_command) {
            return visitor.visitIncrement_command(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Increment_commandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Increment_commandContext = Increment_commandContext;
var Decrement_commandContext = /** @class */ (function (_super) {
    __extends(Decrement_commandContext, _super);
    function Decrement_commandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Decrement_commandContext.prototype.key = function () {
        return this.getRuleContext(0, KeyContext);
    };
    Decrement_commandContext.prototype.value = function () {
        return this.getRuleContext(0, ValueContext);
    };
    Decrement_commandContext.prototype.noreply = function () {
        return this.tryGetRuleContext(0, NoreplyContext);
    };
    Object.defineProperty(Decrement_commandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_decrement_command; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Decrement_commandContext.prototype.enterRule = function (listener) {
        if (listener.enterDecrement_command) {
            listener.enterDecrement_command(this);
        }
    };
    // @Override
    Decrement_commandContext.prototype.exitRule = function (listener) {
        if (listener.exitDecrement_command) {
            listener.exitDecrement_command(this);
        }
    };
    // @Override
    Decrement_commandContext.prototype.accept = function (visitor) {
        if (visitor.visitDecrement_command) {
            return visitor.visitDecrement_command(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Decrement_commandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Decrement_commandContext = Decrement_commandContext;
var Statistics_commandContext = /** @class */ (function (_super) {
    __extends(Statistics_commandContext, _super);
    function Statistics_commandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Statistics_commandContext.prototype.statistics_option = function () {
        return this.tryGetRuleContext(0, Statistics_optionContext);
    };
    Object.defineProperty(Statistics_commandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_statistics_command; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Statistics_commandContext.prototype.enterRule = function (listener) {
        if (listener.enterStatistics_command) {
            listener.enterStatistics_command(this);
        }
    };
    // @Override
    Statistics_commandContext.prototype.exitRule = function (listener) {
        if (listener.exitStatistics_command) {
            listener.exitStatistics_command(this);
        }
    };
    // @Override
    Statistics_commandContext.prototype.accept = function (visitor) {
        if (visitor.visitStatistics_command) {
            return visitor.visitStatistics_command(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Statistics_commandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Statistics_commandContext = Statistics_commandContext;
var Statistics_optionContext = /** @class */ (function (_super) {
    __extends(Statistics_optionContext, _super);
    function Statistics_optionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Statistics_optionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_statistics_option; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Statistics_optionContext.prototype.enterRule = function (listener) {
        if (listener.enterStatistics_option) {
            listener.enterStatistics_option(this);
        }
    };
    // @Override
    Statistics_optionContext.prototype.exitRule = function (listener) {
        if (listener.exitStatistics_option) {
            listener.exitStatistics_option(this);
        }
    };
    // @Override
    Statistics_optionContext.prototype.accept = function (visitor) {
        if (visitor.visitStatistics_option) {
            return visitor.visitStatistics_option(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Statistics_optionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Statistics_optionContext = Statistics_optionContext;
var Flush_commandContext = /** @class */ (function (_super) {
    __extends(Flush_commandContext, _super);
    function Flush_commandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Flush_commandContext.prototype.delay = function () {
        return this.tryGetRuleContext(0, DelayContext);
    };
    Flush_commandContext.prototype.noreply = function () {
        return this.tryGetRuleContext(0, NoreplyContext);
    };
    Object.defineProperty(Flush_commandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_flush_command; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Flush_commandContext.prototype.enterRule = function (listener) {
        if (listener.enterFlush_command) {
            listener.enterFlush_command(this);
        }
    };
    // @Override
    Flush_commandContext.prototype.exitRule = function (listener) {
        if (listener.exitFlush_command) {
            listener.exitFlush_command(this);
        }
    };
    // @Override
    Flush_commandContext.prototype.accept = function (visitor) {
        if (visitor.visitFlush_command) {
            return visitor.visitFlush_command(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Flush_commandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Flush_commandContext = Flush_commandContext;
var Version_commandContext = /** @class */ (function (_super) {
    __extends(Version_commandContext, _super);
    function Version_commandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Version_commandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_version_command; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Version_commandContext.prototype.enterRule = function (listener) {
        if (listener.enterVersion_command) {
            listener.enterVersion_command(this);
        }
    };
    // @Override
    Version_commandContext.prototype.exitRule = function (listener) {
        if (listener.exitVersion_command) {
            listener.exitVersion_command(this);
        }
    };
    // @Override
    Version_commandContext.prototype.accept = function (visitor) {
        if (visitor.visitVersion_command) {
            return visitor.visitVersion_command(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Version_commandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Version_commandContext = Version_commandContext;
var Verbosity_commandContext = /** @class */ (function (_super) {
    __extends(Verbosity_commandContext, _super);
    function Verbosity_commandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Verbosity_commandContext.prototype.verbosity_level = function () {
        return this.getRuleContext(0, Verbosity_levelContext);
    };
    Object.defineProperty(Verbosity_commandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_verbosity_command; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Verbosity_commandContext.prototype.enterRule = function (listener) {
        if (listener.enterVerbosity_command) {
            listener.enterVerbosity_command(this);
        }
    };
    // @Override
    Verbosity_commandContext.prototype.exitRule = function (listener) {
        if (listener.exitVerbosity_command) {
            listener.exitVerbosity_command(this);
        }
    };
    // @Override
    Verbosity_commandContext.prototype.accept = function (visitor) {
        if (visitor.visitVerbosity_command) {
            return visitor.visitVerbosity_command(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Verbosity_commandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Verbosity_commandContext = Verbosity_commandContext;
var Quit_commandContext = /** @class */ (function (_super) {
    __extends(Quit_commandContext, _super);
    function Quit_commandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Quit_commandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_quit_command; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Quit_commandContext.prototype.enterRule = function (listener) {
        if (listener.enterQuit_command) {
            listener.enterQuit_command(this);
        }
    };
    // @Override
    Quit_commandContext.prototype.exitRule = function (listener) {
        if (listener.exitQuit_command) {
            listener.exitQuit_command(this);
        }
    };
    // @Override
    Quit_commandContext.prototype.accept = function (visitor) {
        if (visitor.visitQuit_command) {
            return visitor.visitQuit_command(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Quit_commandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Quit_commandContext = Quit_commandContext;
var Storage_responseContext = /** @class */ (function (_super) {
    __extends(Storage_responseContext, _super);
    function Storage_responseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Storage_responseContext.prototype.error_response = function () {
        return this.tryGetRuleContext(0, Error_responseContext);
    };
    Object.defineProperty(Storage_responseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_storage_response; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Storage_responseContext.prototype.enterRule = function (listener) {
        if (listener.enterStorage_response) {
            listener.enterStorage_response(this);
        }
    };
    // @Override
    Storage_responseContext.prototype.exitRule = function (listener) {
        if (listener.exitStorage_response) {
            listener.exitStorage_response(this);
        }
    };
    // @Override
    Storage_responseContext.prototype.accept = function (visitor) {
        if (visitor.visitStorage_response) {
            return visitor.visitStorage_response(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Storage_responseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Storage_responseContext = Storage_responseContext;
var Retrieval_responseContext = /** @class */ (function (_super) {
    __extends(Retrieval_responseContext, _super);
    function Retrieval_responseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Retrieval_responseContext.prototype.error_response = function () {
        return this.tryGetRuleContext(0, Error_responseContext);
    };
    Retrieval_responseContext.prototype.key = function () {
        return this.tryGetRuleContext(0, KeyContext);
    };
    Retrieval_responseContext.prototype.flags = function () {
        return this.tryGetRuleContext(0, FlagsContext);
    };
    Retrieval_responseContext.prototype.bytes = function () {
        return this.tryGetRuleContext(0, BytesContext);
    };
    Retrieval_responseContext.prototype.cas_unique = function () {
        return this.tryGetRuleContext(0, Cas_uniqueContext);
    };
    Retrieval_responseContext.prototype.end = function () {
        return this.tryGetRuleContext(0, EndContext);
    };
    Object.defineProperty(Retrieval_responseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_retrieval_response; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Retrieval_responseContext.prototype.enterRule = function (listener) {
        if (listener.enterRetrieval_response) {
            listener.enterRetrieval_response(this);
        }
    };
    // @Override
    Retrieval_responseContext.prototype.exitRule = function (listener) {
        if (listener.exitRetrieval_response) {
            listener.exitRetrieval_response(this);
        }
    };
    // @Override
    Retrieval_responseContext.prototype.accept = function (visitor) {
        if (visitor.visitRetrieval_response) {
            return visitor.visitRetrieval_response(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Retrieval_responseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Retrieval_responseContext = Retrieval_responseContext;
var Deletion_responseContext = /** @class */ (function (_super) {
    __extends(Deletion_responseContext, _super);
    function Deletion_responseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Deletion_responseContext.prototype.error_response = function () {
        return this.tryGetRuleContext(0, Error_responseContext);
    };
    Object.defineProperty(Deletion_responseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_deletion_response; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Deletion_responseContext.prototype.enterRule = function (listener) {
        if (listener.enterDeletion_response) {
            listener.enterDeletion_response(this);
        }
    };
    // @Override
    Deletion_responseContext.prototype.exitRule = function (listener) {
        if (listener.exitDeletion_response) {
            listener.exitDeletion_response(this);
        }
    };
    // @Override
    Deletion_responseContext.prototype.accept = function (visitor) {
        if (visitor.visitDeletion_response) {
            return visitor.visitDeletion_response(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Deletion_responseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Deletion_responseContext = Deletion_responseContext;
var Incr_or_decr_responseContext = /** @class */ (function (_super) {
    __extends(Incr_or_decr_responseContext, _super);
    function Incr_or_decr_responseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Incr_or_decr_responseContext.prototype.error_response = function () {
        return this.tryGetRuleContext(0, Error_responseContext);
    };
    Incr_or_decr_responseContext.prototype.INTEGER = function () { return this.tryGetToken(memcached_protocolParser.INTEGER, 0); };
    Object.defineProperty(Incr_or_decr_responseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_incr_or_decr_response; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Incr_or_decr_responseContext.prototype.enterRule = function (listener) {
        if (listener.enterIncr_or_decr_response) {
            listener.enterIncr_or_decr_response(this);
        }
    };
    // @Override
    Incr_or_decr_responseContext.prototype.exitRule = function (listener) {
        if (listener.exitIncr_or_decr_response) {
            listener.exitIncr_or_decr_response(this);
        }
    };
    // @Override
    Incr_or_decr_responseContext.prototype.accept = function (visitor) {
        if (visitor.visitIncr_or_decr_response) {
            return visitor.visitIncr_or_decr_response(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Incr_or_decr_responseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Incr_or_decr_responseContext = Incr_or_decr_responseContext;
var Statistics_responseContext = /** @class */ (function (_super) {
    __extends(Statistics_responseContext, _super);
    function Statistics_responseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Statistics_responseContext.prototype.error_response = function () {
        return this.tryGetRuleContext(0, Error_responseContext);
    };
    Statistics_responseContext.prototype.general_statistic = function () {
        return this.tryGetRuleContext(0, General_statisticContext);
    };
    Statistics_responseContext.prototype.size_statistic = function () {
        return this.tryGetRuleContext(0, Size_statisticContext);
    };
    Statistics_responseContext.prototype.end = function () {
        return this.tryGetRuleContext(0, EndContext);
    };
    Object.defineProperty(Statistics_responseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_statistics_response; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Statistics_responseContext.prototype.enterRule = function (listener) {
        if (listener.enterStatistics_response) {
            listener.enterStatistics_response(this);
        }
    };
    // @Override
    Statistics_responseContext.prototype.exitRule = function (listener) {
        if (listener.exitStatistics_response) {
            listener.exitStatistics_response(this);
        }
    };
    // @Override
    Statistics_responseContext.prototype.accept = function (visitor) {
        if (visitor.visitStatistics_response) {
            return visitor.visitStatistics_response(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Statistics_responseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Statistics_responseContext = Statistics_responseContext;
var Error_responseContext = /** @class */ (function (_super) {
    __extends(Error_responseContext, _super);
    function Error_responseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Error_responseContext.prototype.general_error = function () {
        return this.tryGetRuleContext(0, General_errorContext);
    };
    Error_responseContext.prototype.client_error_message = function () {
        return this.tryGetRuleContext(0, Client_error_messageContext);
    };
    Error_responseContext.prototype.server_error_message = function () {
        return this.tryGetRuleContext(0, Server_error_messageContext);
    };
    Object.defineProperty(Error_responseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_error_response; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Error_responseContext.prototype.enterRule = function (listener) {
        if (listener.enterError_response) {
            listener.enterError_response(this);
        }
    };
    // @Override
    Error_responseContext.prototype.exitRule = function (listener) {
        if (listener.exitError_response) {
            listener.exitError_response(this);
        }
    };
    // @Override
    Error_responseContext.prototype.accept = function (visitor) {
        if (visitor.visitError_response) {
            return visitor.visitError_response(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Error_responseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Error_responseContext = Error_responseContext;
var General_statisticContext = /** @class */ (function (_super) {
    __extends(General_statisticContext, _super);
    function General_statisticContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    General_statisticContext.prototype.statistic_name = function () {
        return this.getRuleContext(0, Statistic_nameContext);
    };
    General_statisticContext.prototype.statistic_value = function () {
        return this.getRuleContext(0, Statistic_valueContext);
    };
    Object.defineProperty(General_statisticContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_general_statistic; },
        enumerable: true,
        configurable: true
    });
    // @Override
    General_statisticContext.prototype.enterRule = function (listener) {
        if (listener.enterGeneral_statistic) {
            listener.enterGeneral_statistic(this);
        }
    };
    // @Override
    General_statisticContext.prototype.exitRule = function (listener) {
        if (listener.exitGeneral_statistic) {
            listener.exitGeneral_statistic(this);
        }
    };
    // @Override
    General_statisticContext.prototype.accept = function (visitor) {
        if (visitor.visitGeneral_statistic) {
            return visitor.visitGeneral_statistic(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return General_statisticContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.General_statisticContext = General_statisticContext;
var Size_statisticContext = /** @class */ (function (_super) {
    __extends(Size_statisticContext, _super);
    function Size_statisticContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Size_statisticContext.prototype.size = function () {
        return this.getRuleContext(0, SizeContext);
    };
    Size_statisticContext.prototype.count = function () {
        return this.getRuleContext(0, CountContext);
    };
    Object.defineProperty(Size_statisticContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_size_statistic; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Size_statisticContext.prototype.enterRule = function (listener) {
        if (listener.enterSize_statistic) {
            listener.enterSize_statistic(this);
        }
    };
    // @Override
    Size_statisticContext.prototype.exitRule = function (listener) {
        if (listener.exitSize_statistic) {
            listener.exitSize_statistic(this);
        }
    };
    // @Override
    Size_statisticContext.prototype.accept = function (visitor) {
        if (visitor.visitSize_statistic) {
            return visitor.visitSize_statistic(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Size_statisticContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Size_statisticContext = Size_statisticContext;
var General_errorContext = /** @class */ (function (_super) {
    __extends(General_errorContext, _super);
    function General_errorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(General_errorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_general_error; },
        enumerable: true,
        configurable: true
    });
    // @Override
    General_errorContext.prototype.enterRule = function (listener) {
        if (listener.enterGeneral_error) {
            listener.enterGeneral_error(this);
        }
    };
    // @Override
    General_errorContext.prototype.exitRule = function (listener) {
        if (listener.exitGeneral_error) {
            listener.exitGeneral_error(this);
        }
    };
    // @Override
    General_errorContext.prototype.accept = function (visitor) {
        if (visitor.visitGeneral_error) {
            return visitor.visitGeneral_error(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return General_errorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.General_errorContext = General_errorContext;
var Client_error_messageContext = /** @class */ (function (_super) {
    __extends(Client_error_messageContext, _super);
    function Client_error_messageContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Client_error_messageContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_client_error_message; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Client_error_messageContext.prototype.enterRule = function (listener) {
        if (listener.enterClient_error_message) {
            listener.enterClient_error_message(this);
        }
    };
    // @Override
    Client_error_messageContext.prototype.exitRule = function (listener) {
        if (listener.exitClient_error_message) {
            listener.exitClient_error_message(this);
        }
    };
    // @Override
    Client_error_messageContext.prototype.accept = function (visitor) {
        if (visitor.visitClient_error_message) {
            return visitor.visitClient_error_message(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Client_error_messageContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Client_error_messageContext = Client_error_messageContext;
var Server_error_messageContext = /** @class */ (function (_super) {
    __extends(Server_error_messageContext, _super);
    function Server_error_messageContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Server_error_messageContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_server_error_message; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Server_error_messageContext.prototype.enterRule = function (listener) {
        if (listener.enterServer_error_message) {
            listener.enterServer_error_message(this);
        }
    };
    // @Override
    Server_error_messageContext.prototype.exitRule = function (listener) {
        if (listener.exitServer_error_message) {
            listener.exitServer_error_message(this);
        }
    };
    // @Override
    Server_error_messageContext.prototype.accept = function (visitor) {
        if (visitor.visitServer_error_message) {
            return visitor.visitServer_error_message(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Server_error_messageContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Server_error_messageContext = Server_error_messageContext;
var EndContext = /** @class */ (function (_super) {
    __extends(EndContext, _super);
    function EndContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(EndContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_end; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EndContext.prototype.enterRule = function (listener) {
        if (listener.enterEnd) {
            listener.enterEnd(this);
        }
    };
    // @Override
    EndContext.prototype.exitRule = function (listener) {
        if (listener.exitEnd) {
            listener.exitEnd(this);
        }
    };
    // @Override
    EndContext.prototype.accept = function (visitor) {
        if (visitor.visitEnd) {
            return visitor.visitEnd(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EndContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EndContext = EndContext;
var NoreplyContext = /** @class */ (function (_super) {
    __extends(NoreplyContext, _super);
    function NoreplyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(NoreplyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_noreply; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NoreplyContext.prototype.enterRule = function (listener) {
        if (listener.enterNoreply) {
            listener.enterNoreply(this);
        }
    };
    // @Override
    NoreplyContext.prototype.exitRule = function (listener) {
        if (listener.exitNoreply) {
            listener.exitNoreply(this);
        }
    };
    // @Override
    NoreplyContext.prototype.accept = function (visitor) {
        if (visitor.visitNoreply) {
            return visitor.visitNoreply(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NoreplyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NoreplyContext = NoreplyContext;
var KeyContext = /** @class */ (function (_super) {
    __extends(KeyContext, _super);
    function KeyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(KeyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_key; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeyContext.prototype.enterRule = function (listener) {
        if (listener.enterKey) {
            listener.enterKey(this);
        }
    };
    // @Override
    KeyContext.prototype.exitRule = function (listener) {
        if (listener.exitKey) {
            listener.exitKey(this);
        }
    };
    // @Override
    KeyContext.prototype.accept = function (visitor) {
        if (visitor.visitKey) {
            return visitor.visitKey(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeyContext = KeyContext;
var FlagsContext = /** @class */ (function (_super) {
    __extends(FlagsContext, _super);
    function FlagsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FlagsContext.prototype.INTEGER = function () { return this.getToken(memcached_protocolParser.INTEGER, 0); };
    Object.defineProperty(FlagsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_flags; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FlagsContext.prototype.enterRule = function (listener) {
        if (listener.enterFlags) {
            listener.enterFlags(this);
        }
    };
    // @Override
    FlagsContext.prototype.exitRule = function (listener) {
        if (listener.exitFlags) {
            listener.exitFlags(this);
        }
    };
    // @Override
    FlagsContext.prototype.accept = function (visitor) {
        if (visitor.visitFlags) {
            return visitor.visitFlags(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FlagsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FlagsContext = FlagsContext;
var ExptimeContext = /** @class */ (function (_super) {
    __extends(ExptimeContext, _super);
    function ExptimeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExptimeContext.prototype.INTEGER = function () { return this.getToken(memcached_protocolParser.INTEGER, 0); };
    Object.defineProperty(ExptimeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_exptime; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExptimeContext.prototype.enterRule = function (listener) {
        if (listener.enterExptime) {
            listener.enterExptime(this);
        }
    };
    // @Override
    ExptimeContext.prototype.exitRule = function (listener) {
        if (listener.exitExptime) {
            listener.exitExptime(this);
        }
    };
    // @Override
    ExptimeContext.prototype.accept = function (visitor) {
        if (visitor.visitExptime) {
            return visitor.visitExptime(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExptimeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExptimeContext = ExptimeContext;
var BytesContext = /** @class */ (function (_super) {
    __extends(BytesContext, _super);
    function BytesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BytesContext.prototype.INTEGER = function () { return this.getToken(memcached_protocolParser.INTEGER, 0); };
    Object.defineProperty(BytesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_bytes; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BytesContext.prototype.enterRule = function (listener) {
        if (listener.enterBytes) {
            listener.enterBytes(this);
        }
    };
    // @Override
    BytesContext.prototype.exitRule = function (listener) {
        if (listener.exitBytes) {
            listener.exitBytes(this);
        }
    };
    // @Override
    BytesContext.prototype.accept = function (visitor) {
        if (visitor.visitBytes) {
            return visitor.visitBytes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BytesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BytesContext = BytesContext;
var Cas_uniqueContext = /** @class */ (function (_super) {
    __extends(Cas_uniqueContext, _super);
    function Cas_uniqueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cas_uniqueContext.prototype.INTEGER = function () { return this.getToken(memcached_protocolParser.INTEGER, 0); };
    Object.defineProperty(Cas_uniqueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_cas_unique; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cas_uniqueContext.prototype.enterRule = function (listener) {
        if (listener.enterCas_unique) {
            listener.enterCas_unique(this);
        }
    };
    // @Override
    Cas_uniqueContext.prototype.exitRule = function (listener) {
        if (listener.exitCas_unique) {
            listener.exitCas_unique(this);
        }
    };
    // @Override
    Cas_uniqueContext.prototype.accept = function (visitor) {
        if (visitor.visitCas_unique) {
            return visitor.visitCas_unique(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cas_uniqueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cas_uniqueContext = Cas_uniqueContext;
var ValueContext = /** @class */ (function (_super) {
    __extends(ValueContext, _super);
    function ValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ValueContext.prototype.INTEGER = function () { return this.getToken(memcached_protocolParser.INTEGER, 0); };
    Object.defineProperty(ValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_value; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ValueContext.prototype.enterRule = function (listener) {
        if (listener.enterValue) {
            listener.enterValue(this);
        }
    };
    // @Override
    ValueContext.prototype.exitRule = function (listener) {
        if (listener.exitValue) {
            listener.exitValue(this);
        }
    };
    // @Override
    ValueContext.prototype.accept = function (visitor) {
        if (visitor.visitValue) {
            return visitor.visitValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ValueContext = ValueContext;
var TimeContext = /** @class */ (function (_super) {
    __extends(TimeContext, _super);
    function TimeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TimeContext.prototype.INTEGER = function () { return this.getToken(memcached_protocolParser.INTEGER, 0); };
    Object.defineProperty(TimeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_time; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TimeContext.prototype.enterRule = function (listener) {
        if (listener.enterTime) {
            listener.enterTime(this);
        }
    };
    // @Override
    TimeContext.prototype.exitRule = function (listener) {
        if (listener.exitTime) {
            listener.exitTime(this);
        }
    };
    // @Override
    TimeContext.prototype.accept = function (visitor) {
        if (visitor.visitTime) {
            return visitor.visitTime(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TimeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TimeContext = TimeContext;
var DelayContext = /** @class */ (function (_super) {
    __extends(DelayContext, _super);
    function DelayContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DelayContext.prototype.INTEGER = function () { return this.getToken(memcached_protocolParser.INTEGER, 0); };
    Object.defineProperty(DelayContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_delay; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DelayContext.prototype.enterRule = function (listener) {
        if (listener.enterDelay) {
            listener.enterDelay(this);
        }
    };
    // @Override
    DelayContext.prototype.exitRule = function (listener) {
        if (listener.exitDelay) {
            listener.exitDelay(this);
        }
    };
    // @Override
    DelayContext.prototype.accept = function (visitor) {
        if (visitor.visitDelay) {
            return visitor.visitDelay(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DelayContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DelayContext = DelayContext;
var Verbosity_levelContext = /** @class */ (function (_super) {
    __extends(Verbosity_levelContext, _super);
    function Verbosity_levelContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Verbosity_levelContext.prototype.INTEGER = function () { return this.getToken(memcached_protocolParser.INTEGER, 0); };
    Object.defineProperty(Verbosity_levelContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_verbosity_level; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Verbosity_levelContext.prototype.enterRule = function (listener) {
        if (listener.enterVerbosity_level) {
            listener.enterVerbosity_level(this);
        }
    };
    // @Override
    Verbosity_levelContext.prototype.exitRule = function (listener) {
        if (listener.exitVerbosity_level) {
            listener.exitVerbosity_level(this);
        }
    };
    // @Override
    Verbosity_levelContext.prototype.accept = function (visitor) {
        if (visitor.visitVerbosity_level) {
            return visitor.visitVerbosity_level(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Verbosity_levelContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Verbosity_levelContext = Verbosity_levelContext;
var Statistic_nameContext = /** @class */ (function (_super) {
    __extends(Statistic_nameContext, _super);
    function Statistic_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Statistic_nameContext.prototype.WORD = function () { return this.getToken(memcached_protocolParser.WORD, 0); };
    Object.defineProperty(Statistic_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_statistic_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Statistic_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterStatistic_name) {
            listener.enterStatistic_name(this);
        }
    };
    // @Override
    Statistic_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitStatistic_name) {
            listener.exitStatistic_name(this);
        }
    };
    // @Override
    Statistic_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitStatistic_name) {
            return visitor.visitStatistic_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Statistic_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Statistic_nameContext = Statistic_nameContext;
var Statistic_valueContext = /** @class */ (function (_super) {
    __extends(Statistic_valueContext, _super);
    function Statistic_valueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Statistic_valueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_statistic_value; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Statistic_valueContext.prototype.enterRule = function (listener) {
        if (listener.enterStatistic_value) {
            listener.enterStatistic_value(this);
        }
    };
    // @Override
    Statistic_valueContext.prototype.exitRule = function (listener) {
        if (listener.exitStatistic_value) {
            listener.exitStatistic_value(this);
        }
    };
    // @Override
    Statistic_valueContext.prototype.accept = function (visitor) {
        if (visitor.visitStatistic_value) {
            return visitor.visitStatistic_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Statistic_valueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Statistic_valueContext = Statistic_valueContext;
var SizeContext = /** @class */ (function (_super) {
    __extends(SizeContext, _super);
    function SizeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SizeContext.prototype.INTEGER = function () { return this.getToken(memcached_protocolParser.INTEGER, 0); };
    Object.defineProperty(SizeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_size; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SizeContext.prototype.enterRule = function (listener) {
        if (listener.enterSize) {
            listener.enterSize(this);
        }
    };
    // @Override
    SizeContext.prototype.exitRule = function (listener) {
        if (listener.exitSize) {
            listener.exitSize(this);
        }
    };
    // @Override
    SizeContext.prototype.accept = function (visitor) {
        if (visitor.visitSize) {
            return visitor.visitSize(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SizeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SizeContext = SizeContext;
var CountContext = /** @class */ (function (_super) {
    __extends(CountContext, _super);
    function CountContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CountContext.prototype.INTEGER = function () { return this.getToken(memcached_protocolParser.INTEGER, 0); };
    Object.defineProperty(CountContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return memcached_protocolParser.RULE_count; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CountContext.prototype.enterRule = function (listener) {
        if (listener.enterCount) {
            listener.enterCount(this);
        }
    };
    // @Override
    CountContext.prototype.exitRule = function (listener) {
        if (listener.exitCount) {
            listener.exitCount(this);
        }
    };
    // @Override
    CountContext.prototype.accept = function (visitor) {
        if (visitor.visitCount) {
            return visitor.visitCount(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CountContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CountContext = CountContext;
