"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/rcs/RCS.g4 by ANTLR 4.7.3-SNAPSHOT
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
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var RCSParser = /** @class */ (function (_super) {
    __extends(RCSParser, _super);
    function RCSParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(RCSParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(RCSParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return RCSParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RCSParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "RCS.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RCSParser.prototype, "ruleNames", {
        // @Override
        get: function () { return RCSParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RCSParser.prototype, "serializedATN", {
        // @Override
        get: function () { return RCSParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    RCSParser.prototype.rcstext = function () {
        var _localctx = new RcstextContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, RCSParser.RULE_rcstext);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 52;
                this.admin();
                this.state = 53;
                this.deltalist();
                this.state = 54;
                this.desc();
                this.state = 55;
                this.deltatextlist();
                this.state = 56;
                this.match(RCSParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RCSParser.prototype.rcsheader = function () {
        var _localctx = new RcsheaderContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, RCSParser.RULE_rcsheader);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 58;
                this.admin();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RCSParser.prototype.rcsrevisions = function () {
        var _localctx = new RcsrevisionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, RCSParser.RULE_rcsrevisions);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 60;
                this.admin();
                this.state = 61;
                this.deltalist();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RCSParser.prototype.admin = function () {
        var _localctx = new AdminContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, RCSParser.RULE_admin);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 63;
                this.head();
                this.state = 65;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === RCSParser.LITERAL_BRANCH) {
                    {
                        this.state = 64;
                        this.branch();
                    }
                }
                this.state = 67;
                this.access();
                this.state = 68;
                this.symbols();
                this.state = 70;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === RCSParser.LITERAL_LOCKS) {
                    {
                        this.state = 69;
                        this.locks();
                    }
                }
                this.state = 73;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === RCSParser.LITERAL_STRICT) {
                    {
                        this.state = 72;
                        this.strict();
                    }
                }
                this.state = 76;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === RCSParser.LITERAL_COMMENT) {
                    {
                        this.state = 75;
                        this.comment();
                    }
                }
                this.state = 79;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === RCSParser.LITERAL_EXPAND) {
                    {
                        this.state = 78;
                        this.expand();
                    }
                }
                this.state = 84;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RCSParser.IDENT) {
                    {
                        {
                            this.state = 81;
                            this.newphrase();
                        }
                    }
                    this.state = 86;
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
    RCSParser.prototype.head = function () {
        var _localctx = new HeadContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, RCSParser.RULE_head);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 87;
                this.match(RCSParser.LITERAL_HEAD);
                this.state = 88;
                this.match(RCSParser.REVISION);
                this.state = 89;
                this.match(RCSParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RCSParser.prototype.branch = function () {
        var _localctx = new BranchContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, RCSParser.RULE_branch);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 91;
                this.match(RCSParser.LITERAL_BRANCH);
                this.state = 92;
                this.match(RCSParser.BRANCH);
                this.state = 93;
                this.match(RCSParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RCSParser.prototype.access = function () {
        var _localctx = new AccessContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, RCSParser.RULE_access);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 95;
                this.match(RCSParser.LITERAL_ACCESS);
                this.state = 99;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RCSParser.IDENT) {
                    {
                        {
                            this.state = 96;
                            this.match(RCSParser.IDENT);
                        }
                    }
                    this.state = 101;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 102;
                this.match(RCSParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RCSParser.prototype.symbols = function () {
        var _localctx = new SymbolsContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, RCSParser.RULE_symbols);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 104;
                this.match(RCSParser.LITERAL_SYMBOLS);
                this.state = 108;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RCSParser.IDENT) {
                    {
                        {
                            this.state = 105;
                            this.tags();
                        }
                    }
                    this.state = 110;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 111;
                this.match(RCSParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RCSParser.prototype.tags = function () {
        var _localctx = new TagsContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, RCSParser.RULE_tags);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 113;
                this.match(RCSParser.IDENT);
                this.state = 114;
                this.match(RCSParser.COLON);
                this.state = 115;
                this.match(RCSParser.REVISION);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RCSParser.prototype.locks = function () {
        var _localctx = new LocksContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, RCSParser.RULE_locks);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 117;
                this.match(RCSParser.LITERAL_LOCKS);
                this.state = 121;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RCSParser.IDENT) {
                    {
                        {
                            this.state = 118;
                            this.match(RCSParser.IDENT);
                        }
                    }
                    this.state = 123;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 124;
                this.match(RCSParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RCSParser.prototype.strict = function () {
        var _localctx = new StrictContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, RCSParser.RULE_strict);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 126;
                this.match(RCSParser.LITERAL_STRICT);
                this.state = 127;
                this.match(RCSParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RCSParser.prototype.comment = function () {
        var _localctx = new CommentContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, RCSParser.RULE_comment);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 129;
                this.match(RCSParser.LITERAL_COMMENT);
                this.state = 131;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === RCSParser.STRING) {
                    {
                        this.state = 130;
                        this.match(RCSParser.STRING);
                    }
                }
                this.state = 133;
                this.match(RCSParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RCSParser.prototype.expand = function () {
        var _localctx = new ExpandContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, RCSParser.RULE_expand);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 135;
                this.match(RCSParser.LITERAL_EXPAND);
                this.state = 137;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === RCSParser.STRING) {
                    {
                        this.state = 136;
                        this.match(RCSParser.STRING);
                    }
                }
                this.state = 139;
                this.match(RCSParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RCSParser.prototype.deltalist = function () {
        var _localctx = new DeltalistContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, RCSParser.RULE_deltalist);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 144;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RCSParser.REVISION) {
                    {
                        {
                            this.state = 141;
                            this.delta();
                        }
                    }
                    this.state = 146;
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
    RCSParser.prototype.delta = function () {
        var _localctx = new DeltaContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, RCSParser.RULE_delta);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 147;
                this.match(RCSParser.REVISION);
                this.state = 148;
                this.delta_date();
                this.state = 149;
                this.delta_author();
                this.state = 150;
                this.delta_state();
                this.state = 151;
                this.delta_branches();
                this.state = 152;
                this.delta_next();
                this.state = 156;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RCSParser.IDENT) {
                    {
                        {
                            this.state = 153;
                            this.newphrase();
                        }
                    }
                    this.state = 158;
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
    RCSParser.prototype.delta_date = function () {
        var _localctx = new Delta_dateContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, RCSParser.RULE_delta_date);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 159;
                this.match(RCSParser.LITERAL_DATE);
                this.state = 160;
                this.match(RCSParser.REVISION);
                this.state = 161;
                this.match(RCSParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RCSParser.prototype.delta_author = function () {
        var _localctx = new Delta_authorContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, RCSParser.RULE_delta_author);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 163;
                this.match(RCSParser.LITERAL_AUTHOR);
                this.state = 164;
                this.match(RCSParser.IDENT);
                this.state = 165;
                this.match(RCSParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RCSParser.prototype.delta_state = function () {
        var _localctx = new Delta_stateContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, RCSParser.RULE_delta_state);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 167;
                this.match(RCSParser.LITERAL_STATE);
                this.state = 168;
                this.match(RCSParser.IDENT);
                this.state = 169;
                this.match(RCSParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RCSParser.prototype.delta_branches = function () {
        var _localctx = new Delta_branchesContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, RCSParser.RULE_delta_branches);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 171;
                this.match(RCSParser.LITERAL_BRANCHES);
                this.state = 175;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RCSParser.REVISION) {
                    {
                        {
                            this.state = 172;
                            this.match(RCSParser.REVISION);
                        }
                    }
                    this.state = 177;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 178;
                this.match(RCSParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RCSParser.prototype.delta_next = function () {
        var _localctx = new Delta_nextContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, RCSParser.RULE_delta_next);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 180;
                this.match(RCSParser.LITERAL_NEXT);
                this.state = 182;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === RCSParser.REVISION) {
                    {
                        this.state = 181;
                        this.match(RCSParser.REVISION);
                    }
                }
                this.state = 184;
                this.match(RCSParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RCSParser.prototype.desc = function () {
        var _localctx = new DescContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, RCSParser.RULE_desc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 186;
                this.match(RCSParser.LITERAL_DESC);
                this.state = 187;
                this.match(RCSParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RCSParser.prototype.deltatextlist = function () {
        var _localctx = new DeltatextlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, RCSParser.RULE_deltatextlist);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 192;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RCSParser.REVISION) {
                    {
                        {
                            this.state = 189;
                            this.deltatext();
                        }
                    }
                    this.state = 194;
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
    RCSParser.prototype.deltatext = function () {
        var _localctx = new DeltatextContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, RCSParser.RULE_deltatext);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 195;
                this.match(RCSParser.REVISION);
                this.state = 196;
                this.deltatext_log();
                this.state = 200;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RCSParser.IDENT) {
                    {
                        {
                            this.state = 197;
                            this.newphrase();
                        }
                    }
                    this.state = 202;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 203;
                this.deltatext_text();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RCSParser.prototype.deltatext_log = function () {
        var _localctx = new Deltatext_logContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, RCSParser.RULE_deltatext_log);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 205;
                this.match(RCSParser.LITERAL_LOG);
                this.state = 206;
                this.match(RCSParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RCSParser.prototype.deltatext_text = function () {
        var _localctx = new Deltatext_textContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, RCSParser.RULE_deltatext_text);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 208;
                this.match(RCSParser.LITERAL_TEXT);
                this.state = 209;
                this.match(RCSParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RCSParser.prototype.newphrase = function () {
        var _localctx = new NewphraseContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, RCSParser.RULE_newphrase);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 212;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 211;
                            this.match(RCSParser.IDENT);
                        }
                    }
                    this.state = 214;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === RCSParser.IDENT);
                this.state = 216;
                this.match(RCSParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(RCSParser, "_ATN", {
        get: function () {
            if (!RCSParser.__ATN) {
                RCSParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(RCSParser._serializedATN));
            }
            return RCSParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    RCSParser.COMMA = 1;
    RCSParser.BRANCH = 2;
    RCSParser.LOGS = 3;
    RCSParser.ADMIN = 4;
    RCSParser.DELTAS = 5;
    RCSParser.LITERAL_HEAD = 6;
    RCSParser.LITERAL_BRANCH = 7;
    RCSParser.LITERAL_ACCESS = 8;
    RCSParser.LITERAL_SYMBOLS = 9;
    RCSParser.LITERAL_LOCKS = 10;
    RCSParser.LITERAL_STRICT = 11;
    RCSParser.LITERAL_COMMENT = 12;
    RCSParser.LITERAL_EXPAND = 13;
    RCSParser.LITERAL_DATE = 14;
    RCSParser.LITERAL_AUTHOR = 15;
    RCSParser.LITERAL_STATE = 16;
    RCSParser.LITERAL_BRANCHES = 17;
    RCSParser.LITERAL_NEXT = 18;
    RCSParser.LITERAL_DESC = 19;
    RCSParser.LITERAL_LOG = 20;
    RCSParser.LITERAL_TEXT = 21;
    RCSParser.IDENT = 22;
    RCSParser.INT = 23;
    RCSParser.REVISION = 24;
    RCSParser.STRING = 25;
    RCSParser.SEMI = 26;
    RCSParser.COLON = 27;
    RCSParser.WS = 28;
    RCSParser.RULE_rcstext = 0;
    RCSParser.RULE_rcsheader = 1;
    RCSParser.RULE_rcsrevisions = 2;
    RCSParser.RULE_admin = 3;
    RCSParser.RULE_head = 4;
    RCSParser.RULE_branch = 5;
    RCSParser.RULE_access = 6;
    RCSParser.RULE_symbols = 7;
    RCSParser.RULE_tags = 8;
    RCSParser.RULE_locks = 9;
    RCSParser.RULE_strict = 10;
    RCSParser.RULE_comment = 11;
    RCSParser.RULE_expand = 12;
    RCSParser.RULE_deltalist = 13;
    RCSParser.RULE_delta = 14;
    RCSParser.RULE_delta_date = 15;
    RCSParser.RULE_delta_author = 16;
    RCSParser.RULE_delta_state = 17;
    RCSParser.RULE_delta_branches = 18;
    RCSParser.RULE_delta_next = 19;
    RCSParser.RULE_desc = 20;
    RCSParser.RULE_deltatextlist = 21;
    RCSParser.RULE_deltatext = 22;
    RCSParser.RULE_deltatext_log = 23;
    RCSParser.RULE_deltatext_text = 24;
    RCSParser.RULE_newphrase = 25;
    // tslint:disable:no-trailing-whitespace
    RCSParser.ruleNames = [
        "rcstext", "rcsheader", "rcsrevisions", "admin", "head", "branch", "access",
        "symbols", "tags", "locks", "strict", "comment", "expand", "deltalist",
        "delta", "delta_date", "delta_author", "delta_state", "delta_branches",
        "delta_next", "desc", "deltatextlist", "deltatext", "deltatext_log", "deltatext_text",
        "newphrase",
    ];
    RCSParser._LITERAL_NAMES = [
        undefined, "'COMMA'", "'BRANCH'", "'LOGS'", "'ADMIN'", "'DELTAS'", "'head'",
        "'branch'", "'access'", "'symbols'", "'locks'", "'strict'", "'comment'",
        "'expand'", "'date'", "'author'", "'state'", "'branches'", "'next'", "'desc'",
        "'log'", "'text'", undefined, undefined, undefined, undefined, "';'",
        "':'",
    ];
    RCSParser._SYMBOLIC_NAMES = [
        undefined, "COMMA", "BRANCH", "LOGS", "ADMIN", "DELTAS", "LITERAL_HEAD",
        "LITERAL_BRANCH", "LITERAL_ACCESS", "LITERAL_SYMBOLS", "LITERAL_LOCKS",
        "LITERAL_STRICT", "LITERAL_COMMENT", "LITERAL_EXPAND", "LITERAL_DATE",
        "LITERAL_AUTHOR", "LITERAL_STATE", "LITERAL_BRANCHES", "LITERAL_NEXT",
        "LITERAL_DESC", "LITERAL_LOG", "LITERAL_TEXT", "IDENT", "INT", "REVISION",
        "STRING", "SEMI", "COLON", "WS",
    ];
    RCSParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(RCSParser._LITERAL_NAMES, RCSParser._SYMBOLIC_NAMES, []);
    RCSParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1E\xDD\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x03\x02\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03" +
        "\x05\x03\x05\x05\x05D\n\x05\x03\x05\x03\x05\x03\x05\x05\x05I\n\x05\x03" +
        "\x05\x05\x05L\n\x05\x03\x05\x05\x05O\n\x05\x03\x05\x05\x05R\n\x05\x03" +
        "\x05\x07\x05U\n\x05\f\x05\x0E\x05X\v\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
        "\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x07\bd\n\b\f\b\x0E\bg\v\b" +
        "\x03\b\x03\b\x03\t\x03\t\x07\tm\n\t\f\t\x0E\tp\v\t\x03\t\x03\t\x03\n\x03" +
        "\n\x03\n\x03\n\x03\v\x03\v\x07\vz\n\v\f\v\x0E\v}\v\v\x03\v\x03\v\x03\f" +
        "\x03\f\x03\f\x03\r\x03\r\x05\r\x86\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x05" +
        "\x0E\x8C\n\x0E\x03\x0E\x03\x0E\x03\x0F\x07\x0F\x91\n\x0F\f\x0F\x0E\x0F" +
        "\x94\v\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07" +
        "\x10\x9D\n\x10\f\x10\x0E\x10\xA0\v\x10\x03\x11\x03\x11\x03\x11\x03\x11" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14" +
        "\x03\x14\x07\x14\xB0\n\x14\f\x14\x0E\x14\xB3\v\x14\x03\x14\x03\x14\x03" +
        "\x15\x03\x15\x05\x15\xB9\n\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16" +
        "\x03\x17\x07\x17\xC1\n\x17\f\x17\x0E\x17\xC4\v\x17\x03\x18\x03\x18\x03" +
        "\x18\x07\x18\xC9\n\x18\f\x18\x0E\x18\xCC\v\x18\x03\x18\x03\x18\x03\x19" +
        "\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x06\x1B\xD7\n\x1B\r\x1B" +
        "\x0E\x1B\xD8\x03\x1B\x03\x1B\x03\x1B\x02\x02\x02\x1C\x02\x02\x04\x02\x06" +
        "\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
        "\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
        "2\x024\x02\x02\x02\x02\xD4\x026\x03\x02\x02\x02\x04<\x03\x02\x02\x02\x06" +
        ">\x03\x02\x02\x02\bA\x03\x02\x02\x02\nY\x03\x02\x02\x02\f]\x03\x02\x02" +
        "\x02\x0Ea\x03\x02\x02\x02\x10j\x03\x02\x02\x02\x12s\x03\x02\x02\x02\x14" +
        "w\x03\x02\x02\x02\x16\x80\x03\x02\x02\x02\x18\x83\x03\x02\x02\x02\x1A" +
        "\x89\x03\x02\x02\x02\x1C\x92\x03\x02\x02\x02\x1E\x95\x03\x02\x02\x02 " +
        "\xA1\x03\x02\x02\x02\"\xA5\x03\x02\x02\x02$\xA9\x03\x02\x02\x02&\xAD\x03" +
        "\x02\x02\x02(\xB6\x03\x02\x02\x02*\xBC\x03\x02\x02\x02,\xC2\x03\x02\x02" +
        "\x02.\xC5\x03\x02\x02\x020\xCF\x03\x02\x02\x022\xD2\x03\x02\x02\x024\xD6" +
        "\x03\x02\x02\x0267\x05\b\x05\x0278\x05\x1C\x0F\x0289\x05*\x16\x029:\x05" +
        ",\x17\x02:;\x07\x02\x02\x03;\x03\x03\x02\x02\x02<=\x05\b\x05\x02=\x05" +
        "\x03\x02\x02\x02>?\x05\b\x05\x02?@\x05\x1C\x0F\x02@\x07\x03\x02\x02\x02" +
        "AC\x05\n\x06\x02BD\x05\f\x07\x02CB\x03\x02\x02\x02CD\x03\x02\x02\x02D" +
        "E\x03\x02\x02\x02EF\x05\x0E\b\x02FH\x05\x10\t\x02GI\x05\x14\v\x02HG\x03" +
        "\x02\x02\x02HI\x03\x02\x02\x02IK\x03\x02\x02\x02JL\x05\x16\f\x02KJ\x03" +
        "\x02\x02\x02KL\x03\x02\x02\x02LN\x03\x02\x02\x02MO\x05\x18\r\x02NM\x03" +
        "\x02\x02\x02NO\x03\x02\x02\x02OQ\x03\x02\x02\x02PR\x05\x1A\x0E\x02QP\x03" +
        "\x02\x02\x02QR\x03\x02\x02\x02RV\x03\x02\x02\x02SU\x054\x1B\x02TS\x03" +
        "\x02\x02\x02UX\x03\x02\x02\x02VT\x03\x02\x02\x02VW\x03\x02\x02\x02W\t" +
        "\x03\x02\x02\x02XV\x03\x02\x02\x02YZ\x07\b\x02\x02Z[\x07\x1A\x02\x02[" +
        "\\\x07\x1C\x02\x02\\\v\x03\x02\x02\x02]^\x07\t\x02\x02^_\x07\x04\x02\x02" +
        "_`\x07\x1C\x02\x02`\r\x03\x02\x02\x02ae\x07\n\x02\x02bd\x07\x18\x02\x02" +
        "cb\x03\x02\x02\x02dg\x03\x02\x02\x02ec\x03\x02\x02\x02ef\x03\x02\x02\x02" +
        "fh\x03\x02\x02\x02ge\x03\x02\x02\x02hi\x07\x1C\x02\x02i\x0F\x03\x02\x02" +
        "\x02jn\x07\v\x02\x02km\x05\x12\n\x02lk\x03\x02\x02\x02mp\x03\x02\x02\x02" +
        "nl\x03\x02\x02\x02no\x03\x02\x02\x02oq\x03\x02\x02\x02pn\x03\x02\x02\x02" +
        "qr\x07\x1C\x02\x02r\x11\x03\x02\x02\x02st\x07\x18\x02\x02tu\x07\x1D\x02" +
        "\x02uv\x07\x1A\x02\x02v\x13\x03\x02\x02\x02w{\x07\f\x02\x02xz\x07\x18" +
        "\x02\x02yx\x03\x02\x02\x02z}\x03\x02\x02\x02{y\x03\x02\x02\x02{|\x03\x02" +
        "\x02\x02|~\x03\x02\x02\x02}{\x03\x02\x02\x02~\x7F\x07\x1C\x02\x02\x7F" +
        "\x15\x03\x02\x02\x02\x80\x81\x07\r\x02\x02\x81\x82\x07\x1C\x02\x02\x82" +
        "\x17\x03\x02\x02\x02\x83\x85\x07\x0E\x02\x02\x84\x86\x07\x1B\x02\x02\x85" +
        "\x84\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87" +
        "\x88\x07\x1C\x02\x02\x88\x19\x03\x02\x02\x02\x89\x8B\x07\x0F\x02\x02\x8A" +
        "\x8C\x07\x1B\x02\x02\x8B\x8A\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C" +
        "\x8D\x03\x02\x02\x02\x8D\x8E\x07\x1C\x02\x02\x8E\x1B\x03\x02\x02\x02\x8F" +
        "\x91\x05\x1E\x10\x02\x90\x8F\x03\x02\x02\x02\x91\x94\x03\x02\x02\x02\x92" +
        "\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x1D\x03\x02\x02\x02\x94" +
        "\x92\x03\x02\x02\x02\x95\x96\x07\x1A\x02\x02\x96\x97\x05 \x11\x02\x97" +
        "\x98\x05\"\x12\x02\x98\x99\x05$\x13\x02\x99\x9A\x05&\x14\x02\x9A\x9E\x05" +
        "(\x15\x02\x9B\x9D\x054\x1B\x02\x9C\x9B\x03\x02\x02\x02\x9D\xA0\x03\x02" +
        "\x02\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\x1F\x03\x02" +
        "\x02\x02\xA0\x9E\x03\x02\x02\x02\xA1\xA2\x07\x10\x02\x02\xA2\xA3\x07\x1A" +
        "\x02\x02\xA3\xA4\x07\x1C\x02\x02\xA4!\x03\x02\x02\x02\xA5\xA6\x07\x11" +
        "\x02\x02\xA6\xA7\x07\x18\x02\x02\xA7\xA8\x07\x1C\x02\x02\xA8#\x03\x02" +
        "\x02\x02\xA9\xAA\x07\x12\x02\x02\xAA\xAB\x07\x18\x02\x02\xAB\xAC\x07\x1C" +
        "\x02\x02\xAC%\x03\x02\x02\x02\xAD\xB1\x07\x13\x02\x02\xAE\xB0\x07\x1A" +
        "\x02\x02\xAF\xAE\x03\x02\x02\x02\xB0\xB3\x03\x02\x02\x02\xB1\xAF\x03\x02" +
        "\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB4\x03\x02\x02\x02\xB3\xB1\x03\x02" +
        "\x02\x02\xB4\xB5\x07\x1C\x02\x02\xB5\'\x03\x02\x02\x02\xB6\xB8\x07\x14" +
        "\x02\x02\xB7\xB9\x07\x1A\x02\x02\xB8\xB7\x03\x02\x02\x02\xB8\xB9\x03\x02" +
        "\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBB\x07\x1C\x02\x02\xBB)\x03\x02" +
        "\x02\x02\xBC\xBD\x07\x15\x02\x02\xBD\xBE\x07\x1B\x02\x02\xBE+\x03\x02" +
        "\x02\x02\xBF\xC1\x05.\x18\x02\xC0\xBF\x03\x02\x02\x02\xC1\xC4\x03\x02" +
        "\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3-\x03\x02" +
        "\x02\x02\xC4\xC2\x03\x02\x02\x02\xC5\xC6\x07\x1A\x02\x02\xC6\xCA\x050" +
        "\x19\x02\xC7\xC9\x054\x1B\x02\xC8\xC7\x03\x02\x02\x02\xC9\xCC\x03\x02" +
        "\x02\x02\xCA\xC8\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCD\x03\x02" +
        "\x02\x02\xCC\xCA\x03\x02\x02\x02\xCD\xCE\x052\x1A\x02\xCE/\x03\x02\x02" +
        "\x02\xCF\xD0\x07\x16\x02\x02\xD0\xD1\x07\x1B\x02\x02\xD11\x03\x02\x02" +
        "\x02\xD2\xD3\x07\x17\x02\x02\xD3\xD4\x07\x1B\x02\x02\xD43\x03\x02\x02" +
        "\x02\xD5\xD7\x07\x18\x02\x02\xD6\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02" +
        "\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDA\x03\x02\x02" +
        "\x02\xDA\xDB\x07\x1C\x02\x02\xDB5\x03\x02\x02\x02\x14CHKNQVen{\x85\x8B" +
        "\x92\x9E\xB1\xB8\xC2\xCA\xD8";
    return RCSParser;
}(Parser_1.Parser));
exports.RCSParser = RCSParser;
var RcstextContext = /** @class */ (function (_super) {
    __extends(RcstextContext, _super);
    function RcstextContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RcstextContext.prototype.admin = function () {
        return this.getRuleContext(0, AdminContext);
    };
    RcstextContext.prototype.deltalist = function () {
        return this.getRuleContext(0, DeltalistContext);
    };
    RcstextContext.prototype.desc = function () {
        return this.getRuleContext(0, DescContext);
    };
    RcstextContext.prototype.deltatextlist = function () {
        return this.getRuleContext(0, DeltatextlistContext);
    };
    RcstextContext.prototype.EOF = function () { return this.getToken(RCSParser.EOF, 0); };
    Object.defineProperty(RcstextContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RCSParser.RULE_rcstext; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RcstextContext.prototype.enterRule = function (listener) {
        if (listener.enterRcstext) {
            listener.enterRcstext(this);
        }
    };
    // @Override
    RcstextContext.prototype.exitRule = function (listener) {
        if (listener.exitRcstext) {
            listener.exitRcstext(this);
        }
    };
    // @Override
    RcstextContext.prototype.accept = function (visitor) {
        if (visitor.visitRcstext) {
            return visitor.visitRcstext(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RcstextContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RcstextContext = RcstextContext;
var RcsheaderContext = /** @class */ (function (_super) {
    __extends(RcsheaderContext, _super);
    function RcsheaderContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RcsheaderContext.prototype.admin = function () {
        return this.getRuleContext(0, AdminContext);
    };
    Object.defineProperty(RcsheaderContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RCSParser.RULE_rcsheader; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RcsheaderContext.prototype.enterRule = function (listener) {
        if (listener.enterRcsheader) {
            listener.enterRcsheader(this);
        }
    };
    // @Override
    RcsheaderContext.prototype.exitRule = function (listener) {
        if (listener.exitRcsheader) {
            listener.exitRcsheader(this);
        }
    };
    // @Override
    RcsheaderContext.prototype.accept = function (visitor) {
        if (visitor.visitRcsheader) {
            return visitor.visitRcsheader(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RcsheaderContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RcsheaderContext = RcsheaderContext;
var RcsrevisionsContext = /** @class */ (function (_super) {
    __extends(RcsrevisionsContext, _super);
    function RcsrevisionsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RcsrevisionsContext.prototype.admin = function () {
        return this.getRuleContext(0, AdminContext);
    };
    RcsrevisionsContext.prototype.deltalist = function () {
        return this.getRuleContext(0, DeltalistContext);
    };
    Object.defineProperty(RcsrevisionsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RCSParser.RULE_rcsrevisions; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RcsrevisionsContext.prototype.enterRule = function (listener) {
        if (listener.enterRcsrevisions) {
            listener.enterRcsrevisions(this);
        }
    };
    // @Override
    RcsrevisionsContext.prototype.exitRule = function (listener) {
        if (listener.exitRcsrevisions) {
            listener.exitRcsrevisions(this);
        }
    };
    // @Override
    RcsrevisionsContext.prototype.accept = function (visitor) {
        if (visitor.visitRcsrevisions) {
            return visitor.visitRcsrevisions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RcsrevisionsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RcsrevisionsContext = RcsrevisionsContext;
var AdminContext = /** @class */ (function (_super) {
    __extends(AdminContext, _super);
    function AdminContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AdminContext.prototype.head = function () {
        return this.getRuleContext(0, HeadContext);
    };
    AdminContext.prototype.access = function () {
        return this.getRuleContext(0, AccessContext);
    };
    AdminContext.prototype.symbols = function () {
        return this.getRuleContext(0, SymbolsContext);
    };
    AdminContext.prototype.branch = function () {
        return this.tryGetRuleContext(0, BranchContext);
    };
    AdminContext.prototype.locks = function () {
        return this.tryGetRuleContext(0, LocksContext);
    };
    AdminContext.prototype.strict = function () {
        return this.tryGetRuleContext(0, StrictContext);
    };
    AdminContext.prototype.comment = function () {
        return this.tryGetRuleContext(0, CommentContext);
    };
    AdminContext.prototype.expand = function () {
        return this.tryGetRuleContext(0, ExpandContext);
    };
    AdminContext.prototype.newphrase = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NewphraseContext);
        }
        else {
            return this.getRuleContext(i, NewphraseContext);
        }
    };
    Object.defineProperty(AdminContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RCSParser.RULE_admin; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AdminContext.prototype.enterRule = function (listener) {
        if (listener.enterAdmin) {
            listener.enterAdmin(this);
        }
    };
    // @Override
    AdminContext.prototype.exitRule = function (listener) {
        if (listener.exitAdmin) {
            listener.exitAdmin(this);
        }
    };
    // @Override
    AdminContext.prototype.accept = function (visitor) {
        if (visitor.visitAdmin) {
            return visitor.visitAdmin(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AdminContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AdminContext = AdminContext;
var HeadContext = /** @class */ (function (_super) {
    __extends(HeadContext, _super);
    function HeadContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HeadContext.prototype.LITERAL_HEAD = function () { return this.getToken(RCSParser.LITERAL_HEAD, 0); };
    HeadContext.prototype.REVISION = function () { return this.getToken(RCSParser.REVISION, 0); };
    HeadContext.prototype.SEMI = function () { return this.getToken(RCSParser.SEMI, 0); };
    Object.defineProperty(HeadContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RCSParser.RULE_head; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HeadContext.prototype.enterRule = function (listener) {
        if (listener.enterHead) {
            listener.enterHead(this);
        }
    };
    // @Override
    HeadContext.prototype.exitRule = function (listener) {
        if (listener.exitHead) {
            listener.exitHead(this);
        }
    };
    // @Override
    HeadContext.prototype.accept = function (visitor) {
        if (visitor.visitHead) {
            return visitor.visitHead(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HeadContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HeadContext = HeadContext;
var BranchContext = /** @class */ (function (_super) {
    __extends(BranchContext, _super);
    function BranchContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BranchContext.prototype.LITERAL_BRANCH = function () { return this.getToken(RCSParser.LITERAL_BRANCH, 0); };
    BranchContext.prototype.BRANCH = function () { return this.getToken(RCSParser.BRANCH, 0); };
    BranchContext.prototype.SEMI = function () { return this.getToken(RCSParser.SEMI, 0); };
    Object.defineProperty(BranchContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RCSParser.RULE_branch; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BranchContext.prototype.enterRule = function (listener) {
        if (listener.enterBranch) {
            listener.enterBranch(this);
        }
    };
    // @Override
    BranchContext.prototype.exitRule = function (listener) {
        if (listener.exitBranch) {
            listener.exitBranch(this);
        }
    };
    // @Override
    BranchContext.prototype.accept = function (visitor) {
        if (visitor.visitBranch) {
            return visitor.visitBranch(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BranchContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BranchContext = BranchContext;
var AccessContext = /** @class */ (function (_super) {
    __extends(AccessContext, _super);
    function AccessContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AccessContext.prototype.LITERAL_ACCESS = function () { return this.getToken(RCSParser.LITERAL_ACCESS, 0); };
    AccessContext.prototype.SEMI = function () { return this.getToken(RCSParser.SEMI, 0); };
    AccessContext.prototype.IDENT = function (i) {
        if (i === undefined) {
            return this.getTokens(RCSParser.IDENT);
        }
        else {
            return this.getToken(RCSParser.IDENT, i);
        }
    };
    Object.defineProperty(AccessContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RCSParser.RULE_access; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AccessContext.prototype.enterRule = function (listener) {
        if (listener.enterAccess) {
            listener.enterAccess(this);
        }
    };
    // @Override
    AccessContext.prototype.exitRule = function (listener) {
        if (listener.exitAccess) {
            listener.exitAccess(this);
        }
    };
    // @Override
    AccessContext.prototype.accept = function (visitor) {
        if (visitor.visitAccess) {
            return visitor.visitAccess(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AccessContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AccessContext = AccessContext;
var SymbolsContext = /** @class */ (function (_super) {
    __extends(SymbolsContext, _super);
    function SymbolsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SymbolsContext.prototype.LITERAL_SYMBOLS = function () { return this.getToken(RCSParser.LITERAL_SYMBOLS, 0); };
    SymbolsContext.prototype.SEMI = function () { return this.getToken(RCSParser.SEMI, 0); };
    SymbolsContext.prototype.tags = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TagsContext);
        }
        else {
            return this.getRuleContext(i, TagsContext);
        }
    };
    Object.defineProperty(SymbolsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RCSParser.RULE_symbols; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SymbolsContext.prototype.enterRule = function (listener) {
        if (listener.enterSymbols) {
            listener.enterSymbols(this);
        }
    };
    // @Override
    SymbolsContext.prototype.exitRule = function (listener) {
        if (listener.exitSymbols) {
            listener.exitSymbols(this);
        }
    };
    // @Override
    SymbolsContext.prototype.accept = function (visitor) {
        if (visitor.visitSymbols) {
            return visitor.visitSymbols(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SymbolsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SymbolsContext = SymbolsContext;
var TagsContext = /** @class */ (function (_super) {
    __extends(TagsContext, _super);
    function TagsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TagsContext.prototype.IDENT = function () { return this.getToken(RCSParser.IDENT, 0); };
    TagsContext.prototype.COLON = function () { return this.getToken(RCSParser.COLON, 0); };
    TagsContext.prototype.REVISION = function () { return this.getToken(RCSParser.REVISION, 0); };
    Object.defineProperty(TagsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RCSParser.RULE_tags; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TagsContext.prototype.enterRule = function (listener) {
        if (listener.enterTags) {
            listener.enterTags(this);
        }
    };
    // @Override
    TagsContext.prototype.exitRule = function (listener) {
        if (listener.exitTags) {
            listener.exitTags(this);
        }
    };
    // @Override
    TagsContext.prototype.accept = function (visitor) {
        if (visitor.visitTags) {
            return visitor.visitTags(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TagsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TagsContext = TagsContext;
var LocksContext = /** @class */ (function (_super) {
    __extends(LocksContext, _super);
    function LocksContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LocksContext.prototype.LITERAL_LOCKS = function () { return this.getToken(RCSParser.LITERAL_LOCKS, 0); };
    LocksContext.prototype.SEMI = function () { return this.getToken(RCSParser.SEMI, 0); };
    LocksContext.prototype.IDENT = function (i) {
        if (i === undefined) {
            return this.getTokens(RCSParser.IDENT);
        }
        else {
            return this.getToken(RCSParser.IDENT, i);
        }
    };
    Object.defineProperty(LocksContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RCSParser.RULE_locks; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LocksContext.prototype.enterRule = function (listener) {
        if (listener.enterLocks) {
            listener.enterLocks(this);
        }
    };
    // @Override
    LocksContext.prototype.exitRule = function (listener) {
        if (listener.exitLocks) {
            listener.exitLocks(this);
        }
    };
    // @Override
    LocksContext.prototype.accept = function (visitor) {
        if (visitor.visitLocks) {
            return visitor.visitLocks(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LocksContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LocksContext = LocksContext;
var StrictContext = /** @class */ (function (_super) {
    __extends(StrictContext, _super);
    function StrictContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StrictContext.prototype.LITERAL_STRICT = function () { return this.getToken(RCSParser.LITERAL_STRICT, 0); };
    StrictContext.prototype.SEMI = function () { return this.getToken(RCSParser.SEMI, 0); };
    Object.defineProperty(StrictContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RCSParser.RULE_strict; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StrictContext.prototype.enterRule = function (listener) {
        if (listener.enterStrict) {
            listener.enterStrict(this);
        }
    };
    // @Override
    StrictContext.prototype.exitRule = function (listener) {
        if (listener.exitStrict) {
            listener.exitStrict(this);
        }
    };
    // @Override
    StrictContext.prototype.accept = function (visitor) {
        if (visitor.visitStrict) {
            return visitor.visitStrict(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StrictContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StrictContext = StrictContext;
var CommentContext = /** @class */ (function (_super) {
    __extends(CommentContext, _super);
    function CommentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommentContext.prototype.LITERAL_COMMENT = function () { return this.getToken(RCSParser.LITERAL_COMMENT, 0); };
    CommentContext.prototype.SEMI = function () { return this.getToken(RCSParser.SEMI, 0); };
    CommentContext.prototype.STRING = function () { return this.tryGetToken(RCSParser.STRING, 0); };
    Object.defineProperty(CommentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RCSParser.RULE_comment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CommentContext.prototype.enterRule = function (listener) {
        if (listener.enterComment) {
            listener.enterComment(this);
        }
    };
    // @Override
    CommentContext.prototype.exitRule = function (listener) {
        if (listener.exitComment) {
            listener.exitComment(this);
        }
    };
    // @Override
    CommentContext.prototype.accept = function (visitor) {
        if (visitor.visitComment) {
            return visitor.visitComment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommentContext = CommentContext;
var ExpandContext = /** @class */ (function (_super) {
    __extends(ExpandContext, _super);
    function ExpandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpandContext.prototype.LITERAL_EXPAND = function () { return this.getToken(RCSParser.LITERAL_EXPAND, 0); };
    ExpandContext.prototype.SEMI = function () { return this.getToken(RCSParser.SEMI, 0); };
    ExpandContext.prototype.STRING = function () { return this.tryGetToken(RCSParser.STRING, 0); };
    Object.defineProperty(ExpandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RCSParser.RULE_expand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpandContext.prototype.enterRule = function (listener) {
        if (listener.enterExpand) {
            listener.enterExpand(this);
        }
    };
    // @Override
    ExpandContext.prototype.exitRule = function (listener) {
        if (listener.exitExpand) {
            listener.exitExpand(this);
        }
    };
    // @Override
    ExpandContext.prototype.accept = function (visitor) {
        if (visitor.visitExpand) {
            return visitor.visitExpand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpandContext = ExpandContext;
var DeltalistContext = /** @class */ (function (_super) {
    __extends(DeltalistContext, _super);
    function DeltalistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeltalistContext.prototype.delta = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DeltaContext);
        }
        else {
            return this.getRuleContext(i, DeltaContext);
        }
    };
    Object.defineProperty(DeltalistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RCSParser.RULE_deltalist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DeltalistContext.prototype.enterRule = function (listener) {
        if (listener.enterDeltalist) {
            listener.enterDeltalist(this);
        }
    };
    // @Override
    DeltalistContext.prototype.exitRule = function (listener) {
        if (listener.exitDeltalist) {
            listener.exitDeltalist(this);
        }
    };
    // @Override
    DeltalistContext.prototype.accept = function (visitor) {
        if (visitor.visitDeltalist) {
            return visitor.visitDeltalist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeltalistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeltalistContext = DeltalistContext;
var DeltaContext = /** @class */ (function (_super) {
    __extends(DeltaContext, _super);
    function DeltaContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeltaContext.prototype.REVISION = function () { return this.getToken(RCSParser.REVISION, 0); };
    DeltaContext.prototype.delta_date = function () {
        return this.getRuleContext(0, Delta_dateContext);
    };
    DeltaContext.prototype.delta_author = function () {
        return this.getRuleContext(0, Delta_authorContext);
    };
    DeltaContext.prototype.delta_state = function () {
        return this.getRuleContext(0, Delta_stateContext);
    };
    DeltaContext.prototype.delta_branches = function () {
        return this.getRuleContext(0, Delta_branchesContext);
    };
    DeltaContext.prototype.delta_next = function () {
        return this.getRuleContext(0, Delta_nextContext);
    };
    DeltaContext.prototype.newphrase = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NewphraseContext);
        }
        else {
            return this.getRuleContext(i, NewphraseContext);
        }
    };
    Object.defineProperty(DeltaContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RCSParser.RULE_delta; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DeltaContext.prototype.enterRule = function (listener) {
        if (listener.enterDelta) {
            listener.enterDelta(this);
        }
    };
    // @Override
    DeltaContext.prototype.exitRule = function (listener) {
        if (listener.exitDelta) {
            listener.exitDelta(this);
        }
    };
    // @Override
    DeltaContext.prototype.accept = function (visitor) {
        if (visitor.visitDelta) {
            return visitor.visitDelta(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeltaContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeltaContext = DeltaContext;
var Delta_dateContext = /** @class */ (function (_super) {
    __extends(Delta_dateContext, _super);
    function Delta_dateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Delta_dateContext.prototype.LITERAL_DATE = function () { return this.getToken(RCSParser.LITERAL_DATE, 0); };
    Delta_dateContext.prototype.REVISION = function () { return this.getToken(RCSParser.REVISION, 0); };
    Delta_dateContext.prototype.SEMI = function () { return this.getToken(RCSParser.SEMI, 0); };
    Object.defineProperty(Delta_dateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RCSParser.RULE_delta_date; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Delta_dateContext.prototype.enterRule = function (listener) {
        if (listener.enterDelta_date) {
            listener.enterDelta_date(this);
        }
    };
    // @Override
    Delta_dateContext.prototype.exitRule = function (listener) {
        if (listener.exitDelta_date) {
            listener.exitDelta_date(this);
        }
    };
    // @Override
    Delta_dateContext.prototype.accept = function (visitor) {
        if (visitor.visitDelta_date) {
            return visitor.visitDelta_date(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Delta_dateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Delta_dateContext = Delta_dateContext;
var Delta_authorContext = /** @class */ (function (_super) {
    __extends(Delta_authorContext, _super);
    function Delta_authorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Delta_authorContext.prototype.LITERAL_AUTHOR = function () { return this.getToken(RCSParser.LITERAL_AUTHOR, 0); };
    Delta_authorContext.prototype.IDENT = function () { return this.getToken(RCSParser.IDENT, 0); };
    Delta_authorContext.prototype.SEMI = function () { return this.getToken(RCSParser.SEMI, 0); };
    Object.defineProperty(Delta_authorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RCSParser.RULE_delta_author; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Delta_authorContext.prototype.enterRule = function (listener) {
        if (listener.enterDelta_author) {
            listener.enterDelta_author(this);
        }
    };
    // @Override
    Delta_authorContext.prototype.exitRule = function (listener) {
        if (listener.exitDelta_author) {
            listener.exitDelta_author(this);
        }
    };
    // @Override
    Delta_authorContext.prototype.accept = function (visitor) {
        if (visitor.visitDelta_author) {
            return visitor.visitDelta_author(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Delta_authorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Delta_authorContext = Delta_authorContext;
var Delta_stateContext = /** @class */ (function (_super) {
    __extends(Delta_stateContext, _super);
    function Delta_stateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Delta_stateContext.prototype.LITERAL_STATE = function () { return this.getToken(RCSParser.LITERAL_STATE, 0); };
    Delta_stateContext.prototype.IDENT = function () { return this.getToken(RCSParser.IDENT, 0); };
    Delta_stateContext.prototype.SEMI = function () { return this.getToken(RCSParser.SEMI, 0); };
    Object.defineProperty(Delta_stateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RCSParser.RULE_delta_state; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Delta_stateContext.prototype.enterRule = function (listener) {
        if (listener.enterDelta_state) {
            listener.enterDelta_state(this);
        }
    };
    // @Override
    Delta_stateContext.prototype.exitRule = function (listener) {
        if (listener.exitDelta_state) {
            listener.exitDelta_state(this);
        }
    };
    // @Override
    Delta_stateContext.prototype.accept = function (visitor) {
        if (visitor.visitDelta_state) {
            return visitor.visitDelta_state(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Delta_stateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Delta_stateContext = Delta_stateContext;
var Delta_branchesContext = /** @class */ (function (_super) {
    __extends(Delta_branchesContext, _super);
    function Delta_branchesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Delta_branchesContext.prototype.LITERAL_BRANCHES = function () { return this.getToken(RCSParser.LITERAL_BRANCHES, 0); };
    Delta_branchesContext.prototype.SEMI = function () { return this.getToken(RCSParser.SEMI, 0); };
    Delta_branchesContext.prototype.REVISION = function (i) {
        if (i === undefined) {
            return this.getTokens(RCSParser.REVISION);
        }
        else {
            return this.getToken(RCSParser.REVISION, i);
        }
    };
    Object.defineProperty(Delta_branchesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RCSParser.RULE_delta_branches; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Delta_branchesContext.prototype.enterRule = function (listener) {
        if (listener.enterDelta_branches) {
            listener.enterDelta_branches(this);
        }
    };
    // @Override
    Delta_branchesContext.prototype.exitRule = function (listener) {
        if (listener.exitDelta_branches) {
            listener.exitDelta_branches(this);
        }
    };
    // @Override
    Delta_branchesContext.prototype.accept = function (visitor) {
        if (visitor.visitDelta_branches) {
            return visitor.visitDelta_branches(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Delta_branchesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Delta_branchesContext = Delta_branchesContext;
var Delta_nextContext = /** @class */ (function (_super) {
    __extends(Delta_nextContext, _super);
    function Delta_nextContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Delta_nextContext.prototype.LITERAL_NEXT = function () { return this.getToken(RCSParser.LITERAL_NEXT, 0); };
    Delta_nextContext.prototype.SEMI = function () { return this.getToken(RCSParser.SEMI, 0); };
    Delta_nextContext.prototype.REVISION = function () { return this.tryGetToken(RCSParser.REVISION, 0); };
    Object.defineProperty(Delta_nextContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RCSParser.RULE_delta_next; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Delta_nextContext.prototype.enterRule = function (listener) {
        if (listener.enterDelta_next) {
            listener.enterDelta_next(this);
        }
    };
    // @Override
    Delta_nextContext.prototype.exitRule = function (listener) {
        if (listener.exitDelta_next) {
            listener.exitDelta_next(this);
        }
    };
    // @Override
    Delta_nextContext.prototype.accept = function (visitor) {
        if (visitor.visitDelta_next) {
            return visitor.visitDelta_next(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Delta_nextContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Delta_nextContext = Delta_nextContext;
var DescContext = /** @class */ (function (_super) {
    __extends(DescContext, _super);
    function DescContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DescContext.prototype.LITERAL_DESC = function () { return this.getToken(RCSParser.LITERAL_DESC, 0); };
    DescContext.prototype.STRING = function () { return this.getToken(RCSParser.STRING, 0); };
    Object.defineProperty(DescContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RCSParser.RULE_desc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DescContext.prototype.enterRule = function (listener) {
        if (listener.enterDesc) {
            listener.enterDesc(this);
        }
    };
    // @Override
    DescContext.prototype.exitRule = function (listener) {
        if (listener.exitDesc) {
            listener.exitDesc(this);
        }
    };
    // @Override
    DescContext.prototype.accept = function (visitor) {
        if (visitor.visitDesc) {
            return visitor.visitDesc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DescContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DescContext = DescContext;
var DeltatextlistContext = /** @class */ (function (_super) {
    __extends(DeltatextlistContext, _super);
    function DeltatextlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeltatextlistContext.prototype.deltatext = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DeltatextContext);
        }
        else {
            return this.getRuleContext(i, DeltatextContext);
        }
    };
    Object.defineProperty(DeltatextlistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RCSParser.RULE_deltatextlist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DeltatextlistContext.prototype.enterRule = function (listener) {
        if (listener.enterDeltatextlist) {
            listener.enterDeltatextlist(this);
        }
    };
    // @Override
    DeltatextlistContext.prototype.exitRule = function (listener) {
        if (listener.exitDeltatextlist) {
            listener.exitDeltatextlist(this);
        }
    };
    // @Override
    DeltatextlistContext.prototype.accept = function (visitor) {
        if (visitor.visitDeltatextlist) {
            return visitor.visitDeltatextlist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeltatextlistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeltatextlistContext = DeltatextlistContext;
var DeltatextContext = /** @class */ (function (_super) {
    __extends(DeltatextContext, _super);
    function DeltatextContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeltatextContext.prototype.REVISION = function () { return this.getToken(RCSParser.REVISION, 0); };
    DeltatextContext.prototype.deltatext_log = function () {
        return this.getRuleContext(0, Deltatext_logContext);
    };
    DeltatextContext.prototype.deltatext_text = function () {
        return this.getRuleContext(0, Deltatext_textContext);
    };
    DeltatextContext.prototype.newphrase = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NewphraseContext);
        }
        else {
            return this.getRuleContext(i, NewphraseContext);
        }
    };
    Object.defineProperty(DeltatextContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RCSParser.RULE_deltatext; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DeltatextContext.prototype.enterRule = function (listener) {
        if (listener.enterDeltatext) {
            listener.enterDeltatext(this);
        }
    };
    // @Override
    DeltatextContext.prototype.exitRule = function (listener) {
        if (listener.exitDeltatext) {
            listener.exitDeltatext(this);
        }
    };
    // @Override
    DeltatextContext.prototype.accept = function (visitor) {
        if (visitor.visitDeltatext) {
            return visitor.visitDeltatext(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeltatextContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeltatextContext = DeltatextContext;
var Deltatext_logContext = /** @class */ (function (_super) {
    __extends(Deltatext_logContext, _super);
    function Deltatext_logContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Deltatext_logContext.prototype.LITERAL_LOG = function () { return this.getToken(RCSParser.LITERAL_LOG, 0); };
    Deltatext_logContext.prototype.STRING = function () { return this.getToken(RCSParser.STRING, 0); };
    Object.defineProperty(Deltatext_logContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RCSParser.RULE_deltatext_log; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Deltatext_logContext.prototype.enterRule = function (listener) {
        if (listener.enterDeltatext_log) {
            listener.enterDeltatext_log(this);
        }
    };
    // @Override
    Deltatext_logContext.prototype.exitRule = function (listener) {
        if (listener.exitDeltatext_log) {
            listener.exitDeltatext_log(this);
        }
    };
    // @Override
    Deltatext_logContext.prototype.accept = function (visitor) {
        if (visitor.visitDeltatext_log) {
            return visitor.visitDeltatext_log(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Deltatext_logContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Deltatext_logContext = Deltatext_logContext;
var Deltatext_textContext = /** @class */ (function (_super) {
    __extends(Deltatext_textContext, _super);
    function Deltatext_textContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Deltatext_textContext.prototype.LITERAL_TEXT = function () { return this.getToken(RCSParser.LITERAL_TEXT, 0); };
    Deltatext_textContext.prototype.STRING = function () { return this.getToken(RCSParser.STRING, 0); };
    Object.defineProperty(Deltatext_textContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RCSParser.RULE_deltatext_text; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Deltatext_textContext.prototype.enterRule = function (listener) {
        if (listener.enterDeltatext_text) {
            listener.enterDeltatext_text(this);
        }
    };
    // @Override
    Deltatext_textContext.prototype.exitRule = function (listener) {
        if (listener.exitDeltatext_text) {
            listener.exitDeltatext_text(this);
        }
    };
    // @Override
    Deltatext_textContext.prototype.accept = function (visitor) {
        if (visitor.visitDeltatext_text) {
            return visitor.visitDeltatext_text(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Deltatext_textContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Deltatext_textContext = Deltatext_textContext;
var NewphraseContext = /** @class */ (function (_super) {
    __extends(NewphraseContext, _super);
    function NewphraseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NewphraseContext.prototype.SEMI = function () { return this.getToken(RCSParser.SEMI, 0); };
    NewphraseContext.prototype.IDENT = function (i) {
        if (i === undefined) {
            return this.getTokens(RCSParser.IDENT);
        }
        else {
            return this.getToken(RCSParser.IDENT, i);
        }
    };
    Object.defineProperty(NewphraseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RCSParser.RULE_newphrase; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NewphraseContext.prototype.enterRule = function (listener) {
        if (listener.enterNewphrase) {
            listener.enterNewphrase(this);
        }
    };
    // @Override
    NewphraseContext.prototype.exitRule = function (listener) {
        if (listener.exitNewphrase) {
            listener.exitNewphrase(this);
        }
    };
    // @Override
    NewphraseContext.prototype.accept = function (visitor) {
        if (visitor.visitNewphrase) {
            return visitor.visitNewphrase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NewphraseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NewphraseContext = NewphraseContext;
