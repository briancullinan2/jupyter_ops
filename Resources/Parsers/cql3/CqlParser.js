"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/cql3/CqlParser.g4 by ANTLR 4.7.3-SNAPSHOT
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
var CqlParser = /** @class */ (function (_super) {
    __extends(CqlParser, _super);
    function CqlParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(CqlParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(CqlParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return CqlParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CqlParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "CqlParser.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CqlParser.prototype, "ruleNames", {
        // @Override
        get: function () { return CqlParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CqlParser.prototype, "serializedATN", {
        // @Override
        get: function () { return CqlParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    CqlParser.prototype.root = function () {
        var _localctx = new RootContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, CqlParser.RULE_root);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 555;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (CqlParser.SEMI - 8)) | (1 << (CqlParser.K_ALTER - 8)) | (1 << (CqlParser.K_APPLY - 8)) | (1 << (CqlParser.K_BEGIN - 8)))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (CqlParser.K_CREATE - 43)) | (1 << (CqlParser.K_DELETE - 43)) | (1 << (CqlParser.K_DROP - 43)) | (1 << (CqlParser.K_GRANT - 43)) | (1 << (CqlParser.K_INSERT - 43)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (CqlParser.K_REVOKE - 107)) | (1 << (CqlParser.K_SELECT - 107)) | (1 << (CqlParser.K_TRUNCATE - 107)) | (1 << (CqlParser.K_UPDATE - 107)) | (1 << (CqlParser.K_USE - 107)))) !== 0) || _la === CqlParser.K_LIST) {
                    {
                        this.state = 554;
                        this.cqls();
                    }
                }
                this.state = 558;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.MINUSMINUS) {
                    {
                        this.state = 557;
                        this.match(CqlParser.MINUSMINUS);
                    }
                }
                this.state = 560;
                this.eof();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.cqls = function () {
        var _localctx = new CqlsContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, CqlParser.RULE_cqls);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 571;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 569;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case CqlParser.K_ALTER:
                                case CqlParser.K_APPLY:
                                case CqlParser.K_BEGIN:
                                case CqlParser.K_CREATE:
                                case CqlParser.K_DELETE:
                                case CqlParser.K_DROP:
                                case CqlParser.K_GRANT:
                                case CqlParser.K_INSERT:
                                case CqlParser.K_REVOKE:
                                case CqlParser.K_SELECT:
                                case CqlParser.K_TRUNCATE:
                                case CqlParser.K_UPDATE:
                                case CqlParser.K_USE:
                                case CqlParser.K_LIST:
                                    {
                                        this.state = 562;
                                        this.cql();
                                        this.state = 564;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === CqlParser.MINUSMINUS) {
                                            {
                                                this.state = 563;
                                                this.match(CqlParser.MINUSMINUS);
                                            }
                                        }
                                        this.state = 566;
                                        this.statementSeparator();
                                    }
                                    break;
                                case CqlParser.SEMI:
                                    {
                                        this.state = 568;
                                        this.empty();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 573;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                }
                this.state = 582;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case CqlParser.K_ALTER:
                    case CqlParser.K_APPLY:
                    case CqlParser.K_BEGIN:
                    case CqlParser.K_CREATE:
                    case CqlParser.K_DELETE:
                    case CqlParser.K_DROP:
                    case CqlParser.K_GRANT:
                    case CqlParser.K_INSERT:
                    case CqlParser.K_REVOKE:
                    case CqlParser.K_SELECT:
                    case CqlParser.K_TRUNCATE:
                    case CqlParser.K_UPDATE:
                    case CqlParser.K_USE:
                    case CqlParser.K_LIST:
                        {
                            this.state = 574;
                            this.cql();
                            this.state = 579;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 576;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === CqlParser.MINUSMINUS) {
                                            {
                                                this.state = 575;
                                                this.match(CqlParser.MINUSMINUS);
                                            }
                                        }
                                        this.state = 578;
                                        this.statementSeparator();
                                    }
                                    break;
                            }
                        }
                        break;
                    case CqlParser.SEMI:
                        {
                            this.state = 581;
                            this.empty();
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
    CqlParser.prototype.statementSeparator = function () {
        var _localctx = new StatementSeparatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, CqlParser.RULE_statementSeparator);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 584;
                this.match(CqlParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.empty = function () {
        var _localctx = new EmptyContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, CqlParser.RULE_empty);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 586;
                this.statementSeparator();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.cql = function () {
        var _localctx = new CqlContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, CqlParser.RULE_cql);
        try {
            this.state = 625;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 588;
                        this.alterKeyspace();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 589;
                        this.alterMaterializedView();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 590;
                        this.alterRole();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 591;
                        this.alterTable();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 592;
                        this.alterType();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 593;
                        this.alterUser();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 594;
                        this.applyBatch();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 595;
                        this.createAggregate();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 596;
                        this.createFunction();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 597;
                        this.createIndex();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 598;
                        this.createKeyspace();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 599;
                        this.createMaterializedView();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 600;
                        this.createRole();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 601;
                        this.createTable();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 602;
                        this.createTrigger();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 603;
                        this.createType();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 604;
                        this.createUser();
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 605;
                        this.delete();
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 606;
                        this.dropAggregate();
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 607;
                        this.dropFunction();
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 608;
                        this.dropIndex();
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 609;
                        this.dropKeyspace();
                    }
                    break;
                case 23:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 610;
                        this.dropMaterializedView();
                    }
                    break;
                case 24:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 611;
                        this.dropRole();
                    }
                    break;
                case 25:
                    this.enterOuterAlt(_localctx, 25);
                    {
                        this.state = 612;
                        this.dropTable();
                    }
                    break;
                case 26:
                    this.enterOuterAlt(_localctx, 26);
                    {
                        this.state = 613;
                        this.dropTrigger();
                    }
                    break;
                case 27:
                    this.enterOuterAlt(_localctx, 27);
                    {
                        this.state = 614;
                        this.dropType();
                    }
                    break;
                case 28:
                    this.enterOuterAlt(_localctx, 28);
                    {
                        this.state = 615;
                        this.dropUser();
                    }
                    break;
                case 29:
                    this.enterOuterAlt(_localctx, 29);
                    {
                        this.state = 616;
                        this.grant();
                    }
                    break;
                case 30:
                    this.enterOuterAlt(_localctx, 30);
                    {
                        this.state = 617;
                        this.insert();
                    }
                    break;
                case 31:
                    this.enterOuterAlt(_localctx, 31);
                    {
                        this.state = 618;
                        this.listPermissions();
                    }
                    break;
                case 32:
                    this.enterOuterAlt(_localctx, 32);
                    {
                        this.state = 619;
                        this.listRoles();
                    }
                    break;
                case 33:
                    this.enterOuterAlt(_localctx, 33);
                    {
                        this.state = 620;
                        this.revoke();
                    }
                    break;
                case 34:
                    this.enterOuterAlt(_localctx, 34);
                    {
                        this.state = 621;
                        this.select();
                    }
                    break;
                case 35:
                    this.enterOuterAlt(_localctx, 35);
                    {
                        this.state = 622;
                        this.truncate();
                    }
                    break;
                case 36:
                    this.enterOuterAlt(_localctx, 36);
                    {
                        this.state = 623;
                        this.update();
                    }
                    break;
                case 37:
                    this.enterOuterAlt(_localctx, 37);
                    {
                        this.state = 624;
                        this.use();
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
    CqlParser.prototype.revoke = function () {
        var _localctx = new RevokeContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, CqlParser.RULE_revoke);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 627;
                this.kwRevoke();
                this.state = 628;
                this.priviledge();
                this.state = 629;
                this.kwOn();
                this.state = 630;
                this.resource();
                this.state = 631;
                this.kwFrom();
                this.state = 632;
                this.role();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.listUsers = function () {
        var _localctx = new ListUsersContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, CqlParser.RULE_listUsers);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 634;
                this.kwList();
                this.state = 635;
                this.kwUsers();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.listRoles = function () {
        var _localctx = new ListRolesContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, CqlParser.RULE_listRoles);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 637;
                this.kwList();
                this.state = 638;
                this.kwRoles();
                this.state = 642;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_OF) {
                    {
                        this.state = 639;
                        this.kwOf();
                        this.state = 640;
                        this.role();
                    }
                }
                this.state = 645;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_NORECURSIVE) {
                    {
                        this.state = 644;
                        this.kwNorecursive();
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
    CqlParser.prototype.listPermissions = function () {
        var _localctx = new ListPermissionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, CqlParser.RULE_listPermissions);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 647;
                this.kwList();
                this.state = 648;
                this.priviledge();
                this.state = 652;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_ON) {
                    {
                        this.state = 649;
                        this.kwOn();
                        this.state = 650;
                        this.resource();
                    }
                }
                this.state = 657;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_OF) {
                    {
                        this.state = 654;
                        this.kwOf();
                        this.state = 655;
                        this.role();
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
    CqlParser.prototype.grant = function () {
        var _localctx = new GrantContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, CqlParser.RULE_grant);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 659;
                this.kwGrant();
                this.state = 660;
                this.priviledge();
                this.state = 661;
                this.kwOn();
                this.state = 662;
                this.resource();
                this.state = 663;
                this.kwTo();
                this.state = 664;
                this.role();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.priviledge = function () {
        var _localctx = new PriviledgeContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, CqlParser.RULE_priviledge);
        try {
            this.state = 678;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CqlParser.K_ALL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 668;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                            case 1:
                                {
                                    this.state = 666;
                                    this.kwAll();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 667;
                                    this.kwAllPermissions();
                                }
                                break;
                        }
                    }
                    break;
                case CqlParser.K_ALTER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 670;
                        this.kwAlter();
                    }
                    break;
                case CqlParser.K_AUTHORIZE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 671;
                        this.kwAuthorize();
                    }
                    break;
                case CqlParser.K_DESCRIBE:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 672;
                        this.kwDescibe();
                    }
                    break;
                case CqlParser.K_EXECUTE:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 673;
                        this.kwExecute();
                    }
                    break;
                case CqlParser.K_CREATE:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 674;
                        this.kwCreate();
                    }
                    break;
                case CqlParser.K_DROP:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 675;
                        this.kwDrop();
                    }
                    break;
                case CqlParser.K_MODIFY:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 676;
                        this.kwModify();
                    }
                    break;
                case CqlParser.K_SELECT:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 677;
                        this.kwSelect();
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
    CqlParser.prototype.resource = function () {
        var _localctx = new ResourceContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, CqlParser.RULE_resource);
        var _la;
        try {
            this.state = 718;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 680;
                        this.kwAll();
                        this.state = 681;
                        this.kwFunctions();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 683;
                        this.kwAll();
                        this.state = 684;
                        this.kwFunctions();
                        this.state = 685;
                        this.kwIn();
                        this.state = 686;
                        this.kwKeyspace();
                        this.state = 687;
                        this.keyspace();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 689;
                        this.kwFunction();
                        this.state = 693;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                            case 1:
                                {
                                    this.state = 690;
                                    this.keyspace();
                                    this.state = 691;
                                    this.match(CqlParser.DOT);
                                }
                                break;
                        }
                        this.state = 695;
                        this.function();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 697;
                        this.kwAll();
                        this.state = 698;
                        this.kwKeyspaces();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 700;
                        this.kwKeyspace();
                        this.state = 701;
                        this.keyspace();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 704;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CqlParser.K_TABLE) {
                            {
                                this.state = 703;
                                this.kwTable();
                            }
                        }
                        this.state = 709;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                            case 1:
                                {
                                    this.state = 706;
                                    this.keyspace();
                                    this.state = 707;
                                    this.match(CqlParser.DOT);
                                }
                                break;
                        }
                        this.state = 711;
                        this.table();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 712;
                        this.kwAll();
                        this.state = 713;
                        this.kwRoles();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 715;
                        this.kwRole();
                        this.state = 716;
                        this.role();
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
    CqlParser.prototype.createUser = function () {
        var _localctx = new CreateUserContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, CqlParser.RULE_createUser);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 720;
                this.kwCreate();
                this.state = 721;
                this.kwUser();
                this.state = 723;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_IF) {
                    {
                        this.state = 722;
                        this.ifNotExist();
                    }
                }
                this.state = 725;
                this.user();
                this.state = 726;
                this.kwWith();
                this.state = 727;
                this.kwPassword();
                this.state = 728;
                this.stringLiteral();
                this.state = 731;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case CqlParser.K_SUPERUSER:
                        {
                            this.state = 729;
                            this.kwSuperuser();
                        }
                        break;
                    case CqlParser.K_NOSUPERUSER:
                        {
                            this.state = 730;
                            this.kwNosuperuser();
                        }
                        break;
                    case CqlParser.EOF:
                    case CqlParser.SEMI:
                    case CqlParser.MINUSMINUS:
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
    CqlParser.prototype.createRole = function () {
        var _localctx = new CreateRoleContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, CqlParser.RULE_createRole);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 733;
                this.kwCreate();
                this.state = 734;
                this.kwRole();
                this.state = 736;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_IF) {
                    {
                        this.state = 735;
                        this.ifNotExist();
                    }
                }
                this.state = 738;
                this.role();
                this.state = 740;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_WITH) {
                    {
                        this.state = 739;
                        this.roleWith();
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
    CqlParser.prototype.createType = function () {
        var _localctx = new CreateTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, CqlParser.RULE_createType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 742;
                this.kwCreate();
                this.state = 743;
                this.kwType();
                this.state = 745;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_IF) {
                    {
                        this.state = 744;
                        this.ifNotExist();
                    }
                }
                this.state = 750;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
                    case 1:
                        {
                            this.state = 747;
                            this.keyspace();
                            this.state = 748;
                            this.match(CqlParser.DOT);
                        }
                        break;
                }
                this.state = 752;
                this.type();
                this.state = 753;
                this.syntaxBracketLr();
                this.state = 754;
                this.typeMemberColumnList();
                this.state = 755;
                this.syntaxBracketRr();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.typeMemberColumnList = function () {
        var _localctx = new TypeMemberColumnListContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, CqlParser.RULE_typeMemberColumnList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 757;
                this.column();
                this.state = 758;
                this.dataType();
                this.state = 765;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CqlParser.COMMA) {
                    {
                        {
                            this.state = 759;
                            this.syntaxComma();
                            this.state = 760;
                            this.column();
                            this.state = 761;
                            this.dataType();
                        }
                    }
                    this.state = 767;
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
    CqlParser.prototype.createTrigger = function () {
        var _localctx = new CreateTriggerContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, CqlParser.RULE_createTrigger);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 768;
                this.kwCreate();
                this.state = 769;
                this.kwTrigger();
                this.state = 771;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_IF) {
                    {
                        this.state = 770;
                        this.ifNotExist();
                    }
                }
                this.state = 776;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                    case 1:
                        {
                            this.state = 773;
                            this.keyspace();
                            this.state = 774;
                            this.match(CqlParser.DOT);
                        }
                        break;
                }
                this.state = 778;
                this.trigger();
                this.state = 779;
                this.kwUsing();
                this.state = 780;
                this.triggerClass();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.createMaterializedView = function () {
        var _localctx = new CreateMaterializedViewContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, CqlParser.RULE_createMaterializedView);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 782;
                this.kwCreate();
                this.state = 783;
                this.kwMaterialized();
                this.state = 784;
                this.kwView();
                this.state = 786;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_IF) {
                    {
                        this.state = 785;
                        this.ifNotExist();
                    }
                }
                this.state = 791;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
                    case 1:
                        {
                            this.state = 788;
                            this.keyspace();
                            this.state = 789;
                            this.match(CqlParser.DOT);
                        }
                        break;
                }
                this.state = 793;
                this.materializedView();
                this.state = 794;
                this.kwAs();
                this.state = 795;
                this.kwSelect();
                this.state = 796;
                this.columnList();
                this.state = 797;
                this.kwFrom();
                this.state = 801;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
                    case 1:
                        {
                            this.state = 798;
                            this.keyspace();
                            this.state = 799;
                            this.match(CqlParser.DOT);
                        }
                        break;
                }
                this.state = 803;
                this.table();
                this.state = 804;
                this.materializedViewWhere();
                this.state = 805;
                this.kwPrimary();
                this.state = 806;
                this.kwKey();
                this.state = 807;
                this.syntaxBracketLr();
                this.state = 808;
                this.columnList();
                this.state = 809;
                this.syntaxBracketRr();
                this.state = 813;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_WITH) {
                    {
                        this.state = 810;
                        this.kwWith();
                        this.state = 811;
                        this.materializedViewOptions();
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
    CqlParser.prototype.materializedViewWhere = function () {
        var _localctx = new MaterializedViewWhereContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, CqlParser.RULE_materializedViewWhere);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 815;
                this.kwWhere();
                this.state = 816;
                this.columnNotNullList();
                this.state = 820;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_AND) {
                    {
                        this.state = 817;
                        this.kwAnd();
                        this.state = 818;
                        this.relationElements();
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
    CqlParser.prototype.columnNotNullList = function () {
        var _localctx = new ColumnNotNullListContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, CqlParser.RULE_columnNotNullList);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 822;
                this.columnNotNull();
                this.state = 828;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 823;
                                this.kwAnd();
                                this.state = 824;
                                this.columnNotNull();
                            }
                        }
                    }
                    this.state = 830;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
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
    CqlParser.prototype.columnNotNull = function () {
        var _localctx = new ColumnNotNullContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, CqlParser.RULE_columnNotNull);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 831;
                this.column();
                this.state = 832;
                this.kwIs();
                this.state = 833;
                this.kwNot();
                this.state = 834;
                this.kwNull();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.materializedViewOptions = function () {
        var _localctx = new MaterializedViewOptionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, CqlParser.RULE_materializedViewOptions);
        try {
            this.state = 842;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 836;
                        this.tableOptions();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 837;
                        this.tableOptions();
                        this.state = 838;
                        this.kwAnd();
                        this.state = 839;
                        this.clusteringOrder();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 841;
                        this.clusteringOrder();
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
    CqlParser.prototype.createKeyspace = function () {
        var _localctx = new CreateKeyspaceContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, CqlParser.RULE_createKeyspace);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 844;
                this.kwCreate();
                this.state = 845;
                this.kwKeyspace();
                this.state = 847;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_IF) {
                    {
                        this.state = 846;
                        this.ifNotExist();
                    }
                }
                this.state = 849;
                this.keyspace();
                this.state = 850;
                this.kwWith();
                this.state = 851;
                this.kwReplication();
                this.state = 852;
                this.match(CqlParser.OPERATOR_EQ);
                this.state = 853;
                this.syntaxBracketLc();
                this.state = 854;
                this.replicationList();
                this.state = 855;
                this.syntaxBracketRc();
                this.state = 859;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_AND) {
                    {
                        this.state = 856;
                        this.kwAnd();
                        this.state = 857;
                        this.durableWrites();
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
    CqlParser.prototype.createFunction = function () {
        var _localctx = new CreateFunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, CqlParser.RULE_createFunction);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 861;
                this.kwCreate();
                this.state = 863;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_OR) {
                    {
                        this.state = 862;
                        this.orReplace();
                    }
                }
                this.state = 865;
                this.kwFunction();
                this.state = 867;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_IF) {
                    {
                        this.state = 866;
                        this.ifNotExist();
                    }
                }
                this.state = 872;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                    case 1:
                        {
                            this.state = 869;
                            this.keyspace();
                            this.state = 870;
                            this.match(CqlParser.DOT);
                        }
                        break;
                }
                this.state = 874;
                this.function();
                this.state = 875;
                this.syntaxBracketLr();
                this.state = 877;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.OBJECT_NAME) {
                    {
                        this.state = 876;
                        this.paramList();
                    }
                }
                this.state = 879;
                this.syntaxBracketRr();
                this.state = 880;
                this.returnMode();
                this.state = 881;
                this.kwReturns();
                this.state = 882;
                this.dataType();
                this.state = 883;
                this.kwLanguage();
                this.state = 884;
                this.language();
                this.state = 885;
                this.kwAs();
                this.state = 886;
                this.codeBlock();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.codeBlock = function () {
        var _localctx = new CodeBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, CqlParser.RULE_codeBlock);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 888;
                this.match(CqlParser.CODE_BLOCK);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.paramList = function () {
        var _localctx = new ParamListContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, CqlParser.RULE_paramList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 890;
                this.param();
                this.state = 896;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CqlParser.COMMA) {
                    {
                        {
                            this.state = 891;
                            this.syntaxComma();
                            this.state = 892;
                            this.param();
                        }
                    }
                    this.state = 898;
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
    CqlParser.prototype.returnMode = function () {
        var _localctx = new ReturnModeContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, CqlParser.RULE_returnMode);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 903;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case CqlParser.K_CALLED:
                        {
                            this.state = 899;
                            this.kwCalled();
                        }
                        break;
                    case CqlParser.K_RETURNS:
                        {
                            this.state = 900;
                            this.kwReturns();
                            this.state = 901;
                            this.kwNull();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 905;
                this.kwOn();
                this.state = 906;
                this.kwNull();
                this.state = 907;
                this.kwInput();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.createAggregate = function () {
        var _localctx = new CreateAggregateContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, CqlParser.RULE_createAggregate);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 909;
                this.kwCreate();
                this.state = 911;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_OR) {
                    {
                        this.state = 910;
                        this.orReplace();
                    }
                }
                this.state = 913;
                this.kwAggregate();
                this.state = 915;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_IF) {
                    {
                        this.state = 914;
                        this.ifNotExist();
                    }
                }
                this.state = 920;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 45, this._ctx)) {
                    case 1:
                        {
                            this.state = 917;
                            this.keyspace();
                            this.state = 918;
                            this.match(CqlParser.DOT);
                        }
                        break;
                }
                this.state = 922;
                this.aggregate();
                this.state = 923;
                this.syntaxBracketLr();
                this.state = 924;
                this.dataType();
                this.state = 925;
                this.syntaxBracketRr();
                this.state = 926;
                this.kwSfunc();
                this.state = 927;
                this.function();
                this.state = 928;
                this.kwStype();
                this.state = 929;
                this.dataType();
                this.state = 930;
                this.kwFinalfunc();
                this.state = 931;
                this.function();
                this.state = 932;
                this.kwInitcond();
                this.state = 933;
                this.initCondDefinition();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.initCondDefinition = function () {
        var _localctx = new InitCondDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, CqlParser.RULE_initCondDefinition);
        try {
            this.state = 939;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 46, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 935;
                        this.constant();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 936;
                        this.initCondList();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 937;
                        this.initCondListNested();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 938;
                        this.initCondHash();
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
    CqlParser.prototype.initCondHash = function () {
        var _localctx = new InitCondHashContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, CqlParser.RULE_initCondHash);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 941;
                this.syntaxBracketLc();
                this.state = 942;
                this.initCondHashItem();
                this.state = 948;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CqlParser.COMMA) {
                    {
                        {
                            this.state = 943;
                            this.syntaxComma();
                            this.state = 944;
                            this.initCondHashItem();
                        }
                    }
                    this.state = 950;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 951;
                this.syntaxBracketRc();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.initCondHashItem = function () {
        var _localctx = new InitCondHashItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, CqlParser.RULE_initCondHashItem);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 953;
                this.hashKey();
                this.state = 954;
                this.match(CqlParser.COLON);
                this.state = 955;
                this.initCondDefinition();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.initCondListNested = function () {
        var _localctx = new InitCondListNestedContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, CqlParser.RULE_initCondListNested);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 957;
                this.syntaxBracketLr();
                this.state = 958;
                this.initCondList();
                this.state = 965;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CqlParser.LR_BRACKET || _la === CqlParser.COMMA) {
                    {
                        this.state = 963;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case CqlParser.COMMA:
                                {
                                    this.state = 959;
                                    this.syntaxComma();
                                    this.state = 960;
                                    this.constant();
                                }
                                break;
                            case CqlParser.LR_BRACKET:
                                {
                                    this.state = 962;
                                    this.initCondList();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 967;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 968;
                this.syntaxBracketRr();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.initCondList = function () {
        var _localctx = new InitCondListContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, CqlParser.RULE_initCondList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 970;
                this.syntaxBracketLr();
                this.state = 971;
                this.constant();
                this.state = 977;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CqlParser.COMMA) {
                    {
                        {
                            this.state = 972;
                            this.syntaxComma();
                            this.state = 973;
                            this.constant();
                        }
                    }
                    this.state = 979;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 980;
                this.syntaxBracketRr();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.orReplace = function () {
        var _localctx = new OrReplaceContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, CqlParser.RULE_orReplace);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 982;
                this.kwOr();
                this.state = 983;
                this.kwReplace();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.alterUser = function () {
        var _localctx = new AlterUserContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, CqlParser.RULE_alterUser);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 985;
                this.kwAlter();
                this.state = 986;
                this.kwUser();
                this.state = 987;
                this.user();
                this.state = 988;
                this.kwWith();
                this.state = 989;
                this.userPassword();
                this.state = 991;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_NOSUPERUSER || _la === CqlParser.K_SUPERUSER) {
                    {
                        this.state = 990;
                        this.userSuperUser();
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
    CqlParser.prototype.userPassword = function () {
        var _localctx = new UserPasswordContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, CqlParser.RULE_userPassword);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 993;
                this.kwPassword();
                this.state = 994;
                this.stringLiteral();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.userSuperUser = function () {
        var _localctx = new UserSuperUserContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, CqlParser.RULE_userSuperUser);
        try {
            this.state = 998;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CqlParser.K_SUPERUSER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 996;
                        this.kwSuperuser();
                    }
                    break;
                case CqlParser.K_NOSUPERUSER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 997;
                        this.kwNosuperuser();
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
    CqlParser.prototype.alterType = function () {
        var _localctx = new AlterTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, CqlParser.RULE_alterType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1000;
                this.kwAlter();
                this.state = 1001;
                this.kwType();
                this.state = 1005;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 53, this._ctx)) {
                    case 1:
                        {
                            this.state = 1002;
                            this.keyspace();
                            this.state = 1003;
                            this.match(CqlParser.DOT);
                        }
                        break;
                }
                this.state = 1007;
                this.type();
                this.state = 1008;
                this.alterTypeOperation();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.alterTypeOperation = function () {
        var _localctx = new AlterTypeOperationContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, CqlParser.RULE_alterTypeOperation);
        try {
            this.state = 1013;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CqlParser.K_ALTER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1010;
                        this.alterTypeAlterType();
                    }
                    break;
                case CqlParser.K_ADD:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1011;
                        this.alterTypeAdd();
                    }
                    break;
                case CqlParser.K_RENAME:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1012;
                        this.alterTypeRename();
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
    CqlParser.prototype.alterTypeRename = function () {
        var _localctx = new AlterTypeRenameContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, CqlParser.RULE_alterTypeRename);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1015;
                this.kwRename();
                this.state = 1016;
                this.alterTypeRenameList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.alterTypeRenameList = function () {
        var _localctx = new AlterTypeRenameListContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, CqlParser.RULE_alterTypeRenameList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1018;
                this.alterTypeRenameItem();
                this.state = 1024;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CqlParser.K_AND) {
                    {
                        {
                            this.state = 1019;
                            this.kwAnd();
                            this.state = 1020;
                            this.alterTypeRenameItem();
                        }
                    }
                    this.state = 1026;
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
    CqlParser.prototype.alterTypeRenameItem = function () {
        var _localctx = new AlterTypeRenameItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, CqlParser.RULE_alterTypeRenameItem);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1027;
                this.column();
                this.state = 1028;
                this.kwTo();
                this.state = 1029;
                this.column();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.alterTypeAdd = function () {
        var _localctx = new AlterTypeAddContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, CqlParser.RULE_alterTypeAdd);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1031;
                this.kwAdd();
                this.state = 1032;
                this.column();
                this.state = 1033;
                this.dataType();
                this.state = 1040;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CqlParser.COMMA) {
                    {
                        {
                            this.state = 1034;
                            this.syntaxComma();
                            this.state = 1035;
                            this.column();
                            this.state = 1036;
                            this.dataType();
                        }
                    }
                    this.state = 1042;
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
    CqlParser.prototype.alterTypeAlterType = function () {
        var _localctx = new AlterTypeAlterTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, CqlParser.RULE_alterTypeAlterType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1043;
                this.kwAlter();
                this.state = 1044;
                this.column();
                this.state = 1045;
                this.kwType();
                this.state = 1046;
                this.dataType();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.alterTable = function () {
        var _localctx = new AlterTableContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, CqlParser.RULE_alterTable);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1048;
                this.kwAlter();
                this.state = 1049;
                this.kwTable();
                this.state = 1053;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 57, this._ctx)) {
                    case 1:
                        {
                            this.state = 1050;
                            this.keyspace();
                            this.state = 1051;
                            this.match(CqlParser.DOT);
                        }
                        break;
                }
                this.state = 1055;
                this.table();
                this.state = 1056;
                this.alterTableOperation();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.alterTableOperation = function () {
        var _localctx = new AlterTableOperationContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, CqlParser.RULE_alterTableOperation);
        try {
            this.state = 1064;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 58, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1058;
                        this.alterTableAdd();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1059;
                        this.alterTableDropColumns();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1060;
                        this.alterTableDropColumns();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1061;
                        this.alterTableDropCompactStorage();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1062;
                        this.alterTableRename();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1063;
                        this.alterTableWith();
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
    CqlParser.prototype.alterTableWith = function () {
        var _localctx = new AlterTableWithContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, CqlParser.RULE_alterTableWith);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1066;
                this.kwWith();
                this.state = 1067;
                this.tableOptions();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.alterTableRename = function () {
        var _localctx = new AlterTableRenameContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, CqlParser.RULE_alterTableRename);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1069;
                this.kwRename();
                this.state = 1070;
                this.column();
                this.state = 1071;
                this.kwTo();
                this.state = 1072;
                this.column();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.alterTableDropCompactStorage = function () {
        var _localctx = new AlterTableDropCompactStorageContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, CqlParser.RULE_alterTableDropCompactStorage);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1074;
                this.kwDrop();
                this.state = 1075;
                this.kwCompact();
                this.state = 1076;
                this.kwStorage();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.alterTableDropColumns = function () {
        var _localctx = new AlterTableDropColumnsContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, CqlParser.RULE_alterTableDropColumns);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1078;
                this.kwDrop();
                this.state = 1079;
                this.alterTableDropColumnList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.alterTableDropColumnList = function () {
        var _localctx = new AlterTableDropColumnListContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, CqlParser.RULE_alterTableDropColumnList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1081;
                this.column();
                this.state = 1087;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CqlParser.COMMA) {
                    {
                        {
                            this.state = 1082;
                            this.syntaxComma();
                            this.state = 1083;
                            this.column();
                        }
                    }
                    this.state = 1089;
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
    CqlParser.prototype.alterTableAdd = function () {
        var _localctx = new AlterTableAddContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, CqlParser.RULE_alterTableAdd);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1090;
                this.kwAdd();
                this.state = 1091;
                this.alterTableColumnDefinition();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.alterTableColumnDefinition = function () {
        var _localctx = new AlterTableColumnDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, CqlParser.RULE_alterTableColumnDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1093;
                this.column();
                this.state = 1094;
                this.dataType();
                this.state = 1101;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CqlParser.COMMA) {
                    {
                        {
                            this.state = 1095;
                            this.syntaxComma();
                            this.state = 1096;
                            this.column();
                            this.state = 1097;
                            this.dataType();
                        }
                    }
                    this.state = 1103;
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
    CqlParser.prototype.alterRole = function () {
        var _localctx = new AlterRoleContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, CqlParser.RULE_alterRole);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1104;
                this.kwAlter();
                this.state = 1105;
                this.kwRole();
                this.state = 1106;
                this.role();
                this.state = 1108;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_WITH) {
                    {
                        this.state = 1107;
                        this.roleWith();
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
    CqlParser.prototype.roleWith = function () {
        var _localctx = new RoleWithContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, CqlParser.RULE_roleWith);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1110;
                this.kwWith();
                {
                    this.state = 1111;
                    this.roleWithOptions();
                    this.state = 1117;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === CqlParser.K_AND) {
                        {
                            {
                                this.state = 1112;
                                this.kwAnd();
                                this.state = 1113;
                                this.roleWithOptions();
                            }
                        }
                        this.state = 1119;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
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
    CqlParser.prototype.roleWithOptions = function () {
        var _localctx = new RoleWithOptionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, CqlParser.RULE_roleWithOptions);
        try {
            this.state = 1136;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CqlParser.K_PASSWORD:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1120;
                        this.kwPassword();
                        this.state = 1121;
                        this.match(CqlParser.OPERATOR_EQ);
                        this.state = 1122;
                        this.stringLiteral();
                    }
                    break;
                case CqlParser.K_LOGIN:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1124;
                        this.kwLogin();
                        this.state = 1125;
                        this.match(CqlParser.OPERATOR_EQ);
                        this.state = 1126;
                        this.booleanLiteral();
                    }
                    break;
                case CqlParser.K_SUPERUSER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1128;
                        this.kwSuperuser();
                        this.state = 1129;
                        this.match(CqlParser.OPERATOR_EQ);
                        this.state = 1130;
                        this.booleanLiteral();
                    }
                    break;
                case CqlParser.K_OPTIONS:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1132;
                        this.kwOptions();
                        this.state = 1133;
                        this.match(CqlParser.OPERATOR_EQ);
                        this.state = 1134;
                        this.optionHash();
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
    CqlParser.prototype.alterMaterializedView = function () {
        var _localctx = new AlterMaterializedViewContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, CqlParser.RULE_alterMaterializedView);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1138;
                this.kwAlter();
                this.state = 1139;
                this.kwMaterialized();
                this.state = 1140;
                this.kwView();
                this.state = 1144;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 64, this._ctx)) {
                    case 1:
                        {
                            this.state = 1141;
                            this.keyspace();
                            this.state = 1142;
                            this.match(CqlParser.DOT);
                        }
                        break;
                }
                this.state = 1146;
                this.materializedView();
                this.state = 1150;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_WITH) {
                    {
                        this.state = 1147;
                        this.kwWith();
                        this.state = 1148;
                        this.tableOptions();
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
    CqlParser.prototype.dropUser = function () {
        var _localctx = new DropUserContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, CqlParser.RULE_dropUser);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1152;
                this.kwDrop();
                this.state = 1153;
                this.kwUser();
                this.state = 1155;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_IF) {
                    {
                        this.state = 1154;
                        this.ifExist();
                    }
                }
                this.state = 1157;
                this.user();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.dropType = function () {
        var _localctx = new DropTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, CqlParser.RULE_dropType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1159;
                this.kwDrop();
                this.state = 1160;
                this.kwType();
                this.state = 1162;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_IF) {
                    {
                        this.state = 1161;
                        this.ifExist();
                    }
                }
                this.state = 1167;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 68, this._ctx)) {
                    case 1:
                        {
                            this.state = 1164;
                            this.keyspace();
                            this.state = 1165;
                            this.match(CqlParser.DOT);
                        }
                        break;
                }
                this.state = 1169;
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
    CqlParser.prototype.dropMaterializedView = function () {
        var _localctx = new DropMaterializedViewContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, CqlParser.RULE_dropMaterializedView);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1171;
                this.kwDrop();
                this.state = 1172;
                this.kwMaterialized();
                this.state = 1173;
                this.kwView();
                this.state = 1175;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_IF) {
                    {
                        this.state = 1174;
                        this.ifExist();
                    }
                }
                this.state = 1180;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 70, this._ctx)) {
                    case 1:
                        {
                            this.state = 1177;
                            this.keyspace();
                            this.state = 1178;
                            this.match(CqlParser.DOT);
                        }
                        break;
                }
                this.state = 1182;
                this.materializedView();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.dropAggregate = function () {
        var _localctx = new DropAggregateContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, CqlParser.RULE_dropAggregate);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1184;
                this.kwDrop();
                this.state = 1185;
                this.kwAggregate();
                this.state = 1187;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_IF) {
                    {
                        this.state = 1186;
                        this.ifExist();
                    }
                }
                this.state = 1192;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 72, this._ctx)) {
                    case 1:
                        {
                            this.state = 1189;
                            this.keyspace();
                            this.state = 1190;
                            this.match(CqlParser.DOT);
                        }
                        break;
                }
                this.state = 1194;
                this.aggregate();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.dropFunction = function () {
        var _localctx = new DropFunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, CqlParser.RULE_dropFunction);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1196;
                this.kwDrop();
                this.state = 1197;
                this.kwFunction();
                this.state = 1199;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_IF) {
                    {
                        this.state = 1198;
                        this.ifExist();
                    }
                }
                this.state = 1204;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 74, this._ctx)) {
                    case 1:
                        {
                            this.state = 1201;
                            this.keyspace();
                            this.state = 1202;
                            this.match(CqlParser.DOT);
                        }
                        break;
                }
                this.state = 1206;
                this.function();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.dropTrigger = function () {
        var _localctx = new DropTriggerContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, CqlParser.RULE_dropTrigger);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1208;
                this.kwDrop();
                this.state = 1209;
                this.kwTrigger();
                this.state = 1211;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_IF) {
                    {
                        this.state = 1210;
                        this.ifExist();
                    }
                }
                this.state = 1213;
                this.trigger();
                this.state = 1214;
                this.kwOn();
                this.state = 1218;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 76, this._ctx)) {
                    case 1:
                        {
                            this.state = 1215;
                            this.keyspace();
                            this.state = 1216;
                            this.match(CqlParser.DOT);
                        }
                        break;
                }
                this.state = 1220;
                this.table();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.dropRole = function () {
        var _localctx = new DropRoleContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, CqlParser.RULE_dropRole);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1222;
                this.kwDrop();
                this.state = 1223;
                this.kwRole();
                this.state = 1225;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_IF) {
                    {
                        this.state = 1224;
                        this.ifExist();
                    }
                }
                this.state = 1227;
                this.role();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.dropTable = function () {
        var _localctx = new DropTableContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, CqlParser.RULE_dropTable);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1229;
                this.kwDrop();
                this.state = 1230;
                this.kwTable();
                this.state = 1232;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_IF) {
                    {
                        this.state = 1231;
                        this.ifExist();
                    }
                }
                this.state = 1237;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 79, this._ctx)) {
                    case 1:
                        {
                            this.state = 1234;
                            this.keyspace();
                            this.state = 1235;
                            this.match(CqlParser.DOT);
                        }
                        break;
                }
                this.state = 1239;
                this.table();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.dropKeyspace = function () {
        var _localctx = new DropKeyspaceContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, CqlParser.RULE_dropKeyspace);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1241;
                this.kwDrop();
                this.state = 1242;
                this.kwKeyspace();
                this.state = 1244;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_IF) {
                    {
                        this.state = 1243;
                        this.ifExist();
                    }
                }
                this.state = 1246;
                this.keyspace();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.dropIndex = function () {
        var _localctx = new DropIndexContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, CqlParser.RULE_dropIndex);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1248;
                this.kwDrop();
                this.state = 1249;
                this.kwIndex();
                this.state = 1251;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_IF) {
                    {
                        this.state = 1250;
                        this.ifExist();
                    }
                }
                this.state = 1256;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 82, this._ctx)) {
                    case 1:
                        {
                            this.state = 1253;
                            this.keyspace();
                            this.state = 1254;
                            this.match(CqlParser.DOT);
                        }
                        break;
                }
                this.state = 1258;
                this.indexName();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.createTable = function () {
        var _localctx = new CreateTableContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, CqlParser.RULE_createTable);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1260;
                this.kwCreate();
                this.state = 1261;
                this.kwTable();
                this.state = 1263;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_IF) {
                    {
                        this.state = 1262;
                        this.ifNotExist();
                    }
                }
                this.state = 1268;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 84, this._ctx)) {
                    case 1:
                        {
                            this.state = 1265;
                            this.keyspace();
                            this.state = 1266;
                            this.match(CqlParser.DOT);
                        }
                        break;
                }
                this.state = 1270;
                this.table();
                this.state = 1271;
                this.syntaxBracketLr();
                this.state = 1272;
                this.columnDefinitionList();
                this.state = 1273;
                this.syntaxBracketRr();
                this.state = 1275;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_WITH) {
                    {
                        this.state = 1274;
                        this.withElement();
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
    CqlParser.prototype.withElement = function () {
        var _localctx = new WithElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, CqlParser.RULE_withElement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1277;
                this.kwWith();
                this.state = 1279;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.OBJECT_NAME) {
                    {
                        this.state = 1278;
                        this.tableOptions();
                    }
                }
                this.state = 1282;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_CLUSTERING) {
                    {
                        this.state = 1281;
                        this.clusteringOrder();
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
    CqlParser.prototype.clusteringOrder = function () {
        var _localctx = new ClusteringOrderContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, CqlParser.RULE_clusteringOrder);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1284;
                this.kwClustering();
                this.state = 1285;
                this.kwOrder();
                this.state = 1286;
                this.kwBy();
                this.state = 1287;
                this.syntaxBracketLr();
                this.state = 1288;
                this.column();
                this.state = 1290;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_ASC || _la === CqlParser.K_DESC) {
                    {
                        this.state = 1289;
                        this.orderDirection();
                    }
                }
                this.state = 1292;
                this.syntaxBracketRr();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.tableOptions = function () {
        var _localctx = new TableOptionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, CqlParser.RULE_tableOptions);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1294;
                this.tableOptionItem();
                this.state = 1300;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1295;
                                this.kwAnd();
                                this.state = 1296;
                                this.tableOptionItem();
                            }
                        }
                    }
                    this.state = 1302;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
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
    CqlParser.prototype.tableOptionItem = function () {
        var _localctx = new TableOptionItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, CqlParser.RULE_tableOptionItem);
        try {
            this.state = 1311;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 90, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1303;
                        this.tableOptionName();
                        this.state = 1304;
                        this.match(CqlParser.OPERATOR_EQ);
                        this.state = 1305;
                        this.tableOptionValue();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1307;
                        this.tableOptionName();
                        this.state = 1308;
                        this.match(CqlParser.OPERATOR_EQ);
                        this.state = 1309;
                        this.optionHash();
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
    CqlParser.prototype.tableOptionName = function () {
        var _localctx = new TableOptionNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, CqlParser.RULE_tableOptionName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1313;
                this.match(CqlParser.OBJECT_NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.tableOptionValue = function () {
        var _localctx = new TableOptionValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, CqlParser.RULE_tableOptionValue);
        try {
            this.state = 1317;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CqlParser.STRING_LITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1315;
                        this.stringLiteral();
                    }
                    break;
                case CqlParser.DECIMAL_LITERAL:
                case CqlParser.FLOAT_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1316;
                        this.floatLiteral();
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
    CqlParser.prototype.optionHash = function () {
        var _localctx = new OptionHashContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, CqlParser.RULE_optionHash);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1319;
                this.syntaxBracketLc();
                this.state = 1320;
                this.optionHashItem();
                this.state = 1326;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CqlParser.COMMA) {
                    {
                        {
                            this.state = 1321;
                            this.syntaxComma();
                            this.state = 1322;
                            this.optionHashItem();
                        }
                    }
                    this.state = 1328;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1329;
                this.syntaxBracketRc();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.optionHashItem = function () {
        var _localctx = new OptionHashItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, CqlParser.RULE_optionHashItem);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1331;
                this.optionHashKey();
                this.state = 1332;
                this.match(CqlParser.COLON);
                this.state = 1333;
                this.optionHashValue();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.optionHashKey = function () {
        var _localctx = new OptionHashKeyContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, CqlParser.RULE_optionHashKey);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1335;
                this.stringLiteral();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.optionHashValue = function () {
        var _localctx = new OptionHashValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, CqlParser.RULE_optionHashValue);
        try {
            this.state = 1339;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CqlParser.STRING_LITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1337;
                        this.stringLiteral();
                    }
                    break;
                case CqlParser.DECIMAL_LITERAL:
                case CqlParser.FLOAT_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1338;
                        this.floatLiteral();
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
    CqlParser.prototype.columnDefinitionList = function () {
        var _localctx = new ColumnDefinitionListContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, CqlParser.RULE_columnDefinitionList);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1341;
                    this.columnDefinition();
                }
                this.state = 1347;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1342;
                                this.syntaxComma();
                                this.state = 1343;
                                this.columnDefinition();
                            }
                        }
                    }
                    this.state = 1349;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
                }
                this.state = 1353;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.COMMA) {
                    {
                        this.state = 1350;
                        this.syntaxComma();
                        this.state = 1351;
                        this.primaryKeyElement();
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
    CqlParser.prototype.columnDefinition = function () {
        var _localctx = new ColumnDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, CqlParser.RULE_columnDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1355;
                this.column();
                this.state = 1356;
                this.dataType();
                this.state = 1358;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_PRIMARY) {
                    {
                        this.state = 1357;
                        this.primaryKeyColumn();
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
    CqlParser.prototype.primaryKeyColumn = function () {
        var _localctx = new PrimaryKeyColumnContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, CqlParser.RULE_primaryKeyColumn);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1360;
                this.kwPrimary();
                this.state = 1361;
                this.kwKey();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.primaryKeyElement = function () {
        var _localctx = new PrimaryKeyElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, CqlParser.RULE_primaryKeyElement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1363;
                this.kwPrimary();
                this.state = 1364;
                this.kwKey();
                this.state = 1365;
                this.syntaxBracketLr();
                this.state = 1366;
                this.primaryKeyDefinition();
                this.state = 1367;
                this.syntaxBracketRr();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.primaryKeyDefinition = function () {
        var _localctx = new PrimaryKeyDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, CqlParser.RULE_primaryKeyDefinition);
        try {
            this.state = 1372;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1369;
                        this.singlePrimaryKey();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1370;
                        this.compoundKey();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1371;
                        this.compositeKey();
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
    CqlParser.prototype.singlePrimaryKey = function () {
        var _localctx = new SinglePrimaryKeyContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, CqlParser.RULE_singlePrimaryKey);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1374;
                this.column();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.compoundKey = function () {
        var _localctx = new CompoundKeyContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, CqlParser.RULE_compoundKey);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1376;
                this.partitionKey();
                {
                    this.state = 1377;
                    this.syntaxComma();
                    this.state = 1378;
                    this.clusteringKeyList();
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
    CqlParser.prototype.compositeKey = function () {
        var _localctx = new CompositeKeyContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, CqlParser.RULE_compositeKey);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1380;
                this.syntaxBracketLr();
                this.state = 1381;
                this.partitionKeyList();
                this.state = 1382;
                this.syntaxBracketRr();
                {
                    this.state = 1383;
                    this.syntaxComma();
                    this.state = 1384;
                    this.clusteringKeyList();
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
    CqlParser.prototype.partitionKeyList = function () {
        var _localctx = new PartitionKeyListContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, CqlParser.RULE_partitionKeyList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1386;
                    this.partitionKey();
                }
                this.state = 1392;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CqlParser.COMMA) {
                    {
                        {
                            this.state = 1387;
                            this.syntaxComma();
                            this.state = 1388;
                            this.partitionKey();
                        }
                    }
                    this.state = 1394;
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
    CqlParser.prototype.clusteringKeyList = function () {
        var _localctx = new ClusteringKeyListContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, CqlParser.RULE_clusteringKeyList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1395;
                    this.clusteringKey();
                }
                this.state = 1401;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CqlParser.COMMA) {
                    {
                        {
                            this.state = 1396;
                            this.syntaxComma();
                            this.state = 1397;
                            this.clusteringKey();
                        }
                    }
                    this.state = 1403;
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
    CqlParser.prototype.partitionKey = function () {
        var _localctx = new PartitionKeyContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, CqlParser.RULE_partitionKey);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1404;
                this.column();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.clusteringKey = function () {
        var _localctx = new ClusteringKeyContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, CqlParser.RULE_clusteringKey);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1406;
                this.column();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.applyBatch = function () {
        var _localctx = new ApplyBatchContext(this._ctx, this.state);
        this.enterRule(_localctx, 180, CqlParser.RULE_applyBatch);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1408;
                this.kwApply();
                this.state = 1409;
                this.kwBatch();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.beginBatch = function () {
        var _localctx = new BeginBatchContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, CqlParser.RULE_beginBatch);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1411;
                this.kwBegin();
                this.state = 1413;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_LOGGED || _la === CqlParser.K_UNLOGGED) {
                    {
                        this.state = 1412;
                        this.batchType();
                    }
                }
                this.state = 1415;
                this.kwBatch();
                this.state = 1417;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_USING) {
                    {
                        this.state = 1416;
                        this.usingTimestampSpec();
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
    CqlParser.prototype.batchType = function () {
        var _localctx = new BatchTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 184, CqlParser.RULE_batchType);
        try {
            this.state = 1421;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CqlParser.K_LOGGED:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1419;
                        this.kwLogged();
                    }
                    break;
                case CqlParser.K_UNLOGGED:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1420;
                        this.kwUnlogged();
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
    CqlParser.prototype.alterKeyspace = function () {
        var _localctx = new AlterKeyspaceContext(this._ctx, this.state);
        this.enterRule(_localctx, 186, CqlParser.RULE_alterKeyspace);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1423;
                this.kwAlter();
                this.state = 1424;
                this.kwKeyspace();
                this.state = 1425;
                this.keyspace();
                this.state = 1426;
                this.kwWith();
                this.state = 1427;
                this.kwReplication();
                this.state = 1428;
                this.match(CqlParser.OPERATOR_EQ);
                this.state = 1429;
                this.syntaxBracketLc();
                this.state = 1430;
                this.replicationList();
                this.state = 1431;
                this.syntaxBracketRc();
                this.state = 1435;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_AND) {
                    {
                        this.state = 1432;
                        this.kwAnd();
                        this.state = 1433;
                        this.durableWrites();
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
    CqlParser.prototype.replicationList = function () {
        var _localctx = new ReplicationListContext(this._ctx, this.state);
        this.enterRule(_localctx, 188, CqlParser.RULE_replicationList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1437;
                    this.replicationListItem();
                }
                this.state = 1443;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CqlParser.COMMA) {
                    {
                        {
                            this.state = 1438;
                            this.syntaxComma();
                            this.state = 1439;
                            this.replicationListItem();
                        }
                    }
                    this.state = 1445;
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
    CqlParser.prototype.replicationListItem = function () {
        var _localctx = new ReplicationListItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 190, CqlParser.RULE_replicationListItem);
        try {
            this.state = 1452;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 105, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1446;
                        this.match(CqlParser.STRING_LITERAL);
                        this.state = 1447;
                        this.match(CqlParser.COLON);
                        this.state = 1448;
                        this.match(CqlParser.STRING_LITERAL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1449;
                        this.match(CqlParser.STRING_LITERAL);
                        this.state = 1450;
                        this.match(CqlParser.COLON);
                        this.state = 1451;
                        this.match(CqlParser.DECIMAL_LITERAL);
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
    CqlParser.prototype.durableWrites = function () {
        var _localctx = new DurableWritesContext(this._ctx, this.state);
        this.enterRule(_localctx, 192, CqlParser.RULE_durableWrites);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1454;
                this.kwDurableWrites();
                this.state = 1455;
                this.match(CqlParser.OPERATOR_EQ);
                this.state = 1456;
                this.booleanLiteral();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.use = function () {
        var _localctx = new UseContext(this._ctx, this.state);
        this.enterRule(_localctx, 194, CqlParser.RULE_use);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1458;
                this.kwUse();
                this.state = 1459;
                this.keyspace();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.truncate = function () {
        var _localctx = new TruncateContext(this._ctx, this.state);
        this.enterRule(_localctx, 196, CqlParser.RULE_truncate);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1461;
                this.kwTruncate();
                this.state = 1463;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_TABLE) {
                    {
                        this.state = 1462;
                        this.kwTable();
                    }
                }
                this.state = 1468;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 107, this._ctx)) {
                    case 1:
                        {
                            this.state = 1465;
                            this.keyspace();
                            this.state = 1466;
                            this.match(CqlParser.DOT);
                        }
                        break;
                }
                this.state = 1470;
                this.table();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.createIndex = function () {
        var _localctx = new CreateIndexContext(this._ctx, this.state);
        this.enterRule(_localctx, 198, CqlParser.RULE_createIndex);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1472;
                this.kwCreate();
                this.state = 1473;
                this.kwIndex();
                this.state = 1475;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_IF) {
                    {
                        this.state = 1474;
                        this.ifNotExist();
                    }
                }
                this.state = 1478;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.STRING_LITERAL || _la === CqlParser.OBJECT_NAME) {
                    {
                        this.state = 1477;
                        this.indexName();
                    }
                }
                this.state = 1480;
                this.kwOn();
                this.state = 1484;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 110, this._ctx)) {
                    case 1:
                        {
                            this.state = 1481;
                            this.keyspace();
                            this.state = 1482;
                            this.match(CqlParser.DOT);
                        }
                        break;
                }
                this.state = 1486;
                this.table();
                this.state = 1487;
                this.syntaxBracketLr();
                this.state = 1488;
                this.indexColumnSpec();
                this.state = 1489;
                this.syntaxBracketRr();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.indexName = function () {
        var _localctx = new IndexNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 200, CqlParser.RULE_indexName);
        try {
            this.state = 1493;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CqlParser.OBJECT_NAME:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1491;
                        this.match(CqlParser.OBJECT_NAME);
                    }
                    break;
                case CqlParser.STRING_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1492;
                        this.stringLiteral();
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
    CqlParser.prototype.indexColumnSpec = function () {
        var _localctx = new IndexColumnSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 202, CqlParser.RULE_indexColumnSpec);
        try {
            this.state = 1499;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CqlParser.DQUOTE:
                case CqlParser.OBJECT_NAME:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1495;
                        this.column();
                    }
                    break;
                case CqlParser.K_KEYS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1496;
                        this.indexKeysSpec();
                    }
                    break;
                case CqlParser.K_ENTRIES:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1497;
                        this.indexEntriesSSpec();
                    }
                    break;
                case CqlParser.K_FULL:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1498;
                        this.indexFullSpec();
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
    CqlParser.prototype.indexKeysSpec = function () {
        var _localctx = new IndexKeysSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 204, CqlParser.RULE_indexKeysSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1501;
                this.kwKeys();
                this.state = 1502;
                this.syntaxBracketLr();
                this.state = 1503;
                this.match(CqlParser.OBJECT_NAME);
                this.state = 1504;
                this.syntaxBracketRr();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.indexEntriesSSpec = function () {
        var _localctx = new IndexEntriesSSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 206, CqlParser.RULE_indexEntriesSSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1506;
                this.kwEntries();
                this.state = 1507;
                this.syntaxBracketLr();
                this.state = 1508;
                this.match(CqlParser.OBJECT_NAME);
                this.state = 1509;
                this.syntaxBracketRr();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.indexFullSpec = function () {
        var _localctx = new IndexFullSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 208, CqlParser.RULE_indexFullSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1511;
                this.kwFull();
                this.state = 1512;
                this.syntaxBracketLr();
                this.state = 1513;
                this.match(CqlParser.OBJECT_NAME);
                this.state = 1514;
                this.syntaxBracketRr();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.delete = function () {
        var _localctx = new DeleteContext(this._ctx, this.state);
        this.enterRule(_localctx, 210, CqlParser.RULE_delete);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1517;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_BEGIN) {
                    {
                        this.state = 1516;
                        this.beginBatch();
                    }
                }
                this.state = 1519;
                this.kwDelete();
                this.state = 1521;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.OBJECT_NAME) {
                    {
                        this.state = 1520;
                        this.deleteColumnList();
                    }
                }
                this.state = 1523;
                this.fromSpec();
                this.state = 1525;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_USING) {
                    {
                        this.state = 1524;
                        this.usingTimestampSpec();
                    }
                }
                this.state = 1527;
                this.whereSpec();
                this.state = 1530;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 116, this._ctx)) {
                    case 1:
                        {
                            this.state = 1528;
                            this.ifExist();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1529;
                            this.ifSpec();
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
    CqlParser.prototype.deleteColumnList = function () {
        var _localctx = new DeleteColumnListContext(this._ctx, this.state);
        this.enterRule(_localctx, 212, CqlParser.RULE_deleteColumnList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1532;
                    this.deleteColumnItem();
                }
                this.state = 1538;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CqlParser.COMMA) {
                    {
                        {
                            this.state = 1533;
                            this.syntaxComma();
                            this.state = 1534;
                            this.deleteColumnItem();
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
    CqlParser.prototype.deleteColumnItem = function () {
        var _localctx = new DeleteColumnItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 214, CqlParser.RULE_deleteColumnItem);
        try {
            this.state = 1550;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 119, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1541;
                        this.match(CqlParser.OBJECT_NAME);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1542;
                        this.match(CqlParser.OBJECT_NAME);
                        this.state = 1543;
                        this.match(CqlParser.LS_BRACKET);
                        this.state = 1546;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case CqlParser.STRING_LITERAL:
                                {
                                    this.state = 1544;
                                    this.stringLiteral();
                                }
                                break;
                            case CqlParser.DECIMAL_LITERAL:
                                {
                                    this.state = 1545;
                                    this.decimalLiteral();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1548;
                        this.match(CqlParser.RS_BRACKET);
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
    CqlParser.prototype.update = function () {
        var _localctx = new UpdateContext(this._ctx, this.state);
        this.enterRule(_localctx, 216, CqlParser.RULE_update);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1553;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_BEGIN) {
                    {
                        this.state = 1552;
                        this.beginBatch();
                    }
                }
                this.state = 1555;
                this.kwUpdate();
                this.state = 1559;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 121, this._ctx)) {
                    case 1:
                        {
                            this.state = 1556;
                            this.keyspace();
                            this.state = 1557;
                            this.match(CqlParser.DOT);
                        }
                        break;
                }
                this.state = 1561;
                this.table();
                this.state = 1563;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_USING) {
                    {
                        this.state = 1562;
                        this.usingTtlTimestamp();
                    }
                }
                this.state = 1565;
                this.kwSet();
                this.state = 1566;
                this.assignments();
                this.state = 1567;
                this.whereSpec();
                this.state = 1570;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 123, this._ctx)) {
                    case 1:
                        {
                            this.state = 1568;
                            this.ifExist();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1569;
                            this.ifSpec();
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
    CqlParser.prototype.ifSpec = function () {
        var _localctx = new IfSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 218, CqlParser.RULE_ifSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1572;
                this.kwIf();
                this.state = 1573;
                this.ifConditionList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.ifConditionList = function () {
        var _localctx = new IfConditionListContext(this._ctx, this.state);
        this.enterRule(_localctx, 220, CqlParser.RULE_ifConditionList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1575;
                    this.ifCondition();
                }
                this.state = 1581;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CqlParser.K_AND) {
                    {
                        {
                            this.state = 1576;
                            this.kwAnd();
                            this.state = 1577;
                            this.ifCondition();
                        }
                    }
                    this.state = 1583;
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
    CqlParser.prototype.ifCondition = function () {
        var _localctx = new IfConditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 222, CqlParser.RULE_ifCondition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1584;
                this.match(CqlParser.OBJECT_NAME);
                this.state = 1585;
                this.match(CqlParser.OPERATOR_EQ);
                this.state = 1586;
                this.constant();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.assignments = function () {
        var _localctx = new AssignmentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 224, CqlParser.RULE_assignments);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1588;
                    this.assignmentElement();
                }
                this.state = 1594;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CqlParser.COMMA) {
                    {
                        {
                            this.state = 1589;
                            this.syntaxComma();
                            this.state = 1590;
                            this.assignmentElement();
                        }
                    }
                    this.state = 1596;
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
    CqlParser.prototype.assignmentElement = function () {
        var _localctx = new AssignmentElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 226, CqlParser.RULE_assignmentElement);
        var _la;
        try {
            this.state = 1650;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 127, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1597;
                        this.match(CqlParser.OBJECT_NAME);
                        this.state = 1598;
                        this.match(CqlParser.OPERATOR_EQ);
                        this.state = 1603;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 126, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1599;
                                    this.constant();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1600;
                                    this.assignmentMap();
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1601;
                                    this.assignmentSet();
                                }
                                break;
                            case 4:
                                {
                                    this.state = 1602;
                                    this.assignmentList();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1605;
                        this.match(CqlParser.OBJECT_NAME);
                        this.state = 1606;
                        this.match(CqlParser.OPERATOR_EQ);
                        this.state = 1607;
                        this.match(CqlParser.OBJECT_NAME);
                        this.state = 1608;
                        _la = this._input.LA(1);
                        if (!(_la === CqlParser.PLUS || _la === CqlParser.MINUS)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1609;
                        this.decimalLiteral();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1610;
                        this.match(CqlParser.OBJECT_NAME);
                        this.state = 1611;
                        this.match(CqlParser.OPERATOR_EQ);
                        this.state = 1612;
                        this.match(CqlParser.OBJECT_NAME);
                        this.state = 1613;
                        _la = this._input.LA(1);
                        if (!(_la === CqlParser.PLUS || _la === CqlParser.MINUS)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1614;
                        this.assignmentSet();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1615;
                        this.match(CqlParser.OBJECT_NAME);
                        this.state = 1616;
                        this.match(CqlParser.OPERATOR_EQ);
                        this.state = 1617;
                        this.assignmentSet();
                        this.state = 1618;
                        _la = this._input.LA(1);
                        if (!(_la === CqlParser.PLUS || _la === CqlParser.MINUS)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1619;
                        this.match(CqlParser.OBJECT_NAME);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1621;
                        this.match(CqlParser.OBJECT_NAME);
                        this.state = 1622;
                        this.match(CqlParser.OPERATOR_EQ);
                        this.state = 1623;
                        this.match(CqlParser.OBJECT_NAME);
                        this.state = 1624;
                        _la = this._input.LA(1);
                        if (!(_la === CqlParser.PLUS || _la === CqlParser.MINUS)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1625;
                        this.assignmentMap();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1626;
                        this.match(CqlParser.OBJECT_NAME);
                        this.state = 1627;
                        this.match(CqlParser.OPERATOR_EQ);
                        this.state = 1628;
                        this.assignmentMap();
                        this.state = 1629;
                        _la = this._input.LA(1);
                        if (!(_la === CqlParser.PLUS || _la === CqlParser.MINUS)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1630;
                        this.match(CqlParser.OBJECT_NAME);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1632;
                        this.match(CqlParser.OBJECT_NAME);
                        this.state = 1633;
                        this.match(CqlParser.OPERATOR_EQ);
                        this.state = 1634;
                        this.match(CqlParser.OBJECT_NAME);
                        this.state = 1635;
                        _la = this._input.LA(1);
                        if (!(_la === CqlParser.PLUS || _la === CqlParser.MINUS)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1636;
                        this.assignmentList();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1637;
                        this.match(CqlParser.OBJECT_NAME);
                        this.state = 1638;
                        this.match(CqlParser.OPERATOR_EQ);
                        this.state = 1639;
                        this.assignmentList();
                        this.state = 1640;
                        _la = this._input.LA(1);
                        if (!(_la === CqlParser.PLUS || _la === CqlParser.MINUS)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1641;
                        this.match(CqlParser.OBJECT_NAME);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1643;
                        this.match(CqlParser.OBJECT_NAME);
                        this.state = 1644;
                        this.syntaxBracketLs();
                        this.state = 1645;
                        this.decimalLiteral();
                        this.state = 1646;
                        this.syntaxBracketRs();
                        this.state = 1647;
                        this.match(CqlParser.OPERATOR_EQ);
                        this.state = 1648;
                        this.constant();
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
    CqlParser.prototype.assignmentSet = function () {
        var _localctx = new AssignmentSetContext(this._ctx, this.state);
        this.enterRule(_localctx, 228, CqlParser.RULE_assignmentSet);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1652;
                this.syntaxBracketLc();
                this.state = 1653;
                this.constant();
                this.state = 1659;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CqlParser.COMMA) {
                    {
                        {
                            this.state = 1654;
                            this.syntaxComma();
                            this.state = 1655;
                            this.constant();
                        }
                    }
                    this.state = 1661;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1662;
                this.syntaxBracketRc();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.assignmentMap = function () {
        var _localctx = new AssignmentMapContext(this._ctx, this.state);
        this.enterRule(_localctx, 230, CqlParser.RULE_assignmentMap);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1664;
                this.syntaxBracketLc();
                {
                    this.state = 1665;
                    this.constant();
                    this.state = 1666;
                    this.syntaxColon();
                    this.state = 1667;
                    this.constant();
                }
                this.state = 1675;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CqlParser.K_FALSE || _la === CqlParser.K_NULL || _la === CqlParser.K_TRUE || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & ((1 << (CqlParser.STRING_LITERAL - 163)) | (1 << (CqlParser.DECIMAL_LITERAL - 163)) | (1 << (CqlParser.HEXADECIMAL_LITERAL - 163)) | (1 << (CqlParser.UUID - 163)))) !== 0)) {
                    {
                        {
                            this.state = 1669;
                            this.constant();
                            this.state = 1670;
                            this.syntaxColon();
                            this.state = 1671;
                            this.constant();
                        }
                    }
                    this.state = 1677;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1678;
                this.syntaxBracketRc();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.assignmentList = function () {
        var _localctx = new AssignmentListContext(this._ctx, this.state);
        this.enterRule(_localctx, 232, CqlParser.RULE_assignmentList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1680;
                this.syntaxBracketLs();
                this.state = 1681;
                this.constant();
                this.state = 1687;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CqlParser.COLON) {
                    {
                        {
                            this.state = 1682;
                            this.syntaxColon();
                            this.state = 1683;
                            this.constant();
                        }
                    }
                    this.state = 1689;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1690;
                this.syntaxBracketRs();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.insert = function () {
        var _localctx = new InsertContext(this._ctx, this.state);
        this.enterRule(_localctx, 234, CqlParser.RULE_insert);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1694;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case CqlParser.K_BEGIN:
                        {
                            this.state = 1692;
                            this.beginBatch();
                        }
                        break;
                    case CqlParser.K_INSERT:
                        // tslint:disable-next-line:no-empty
                        {
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1696;
                this.kwInsert();
                this.state = 1697;
                this.kwInto();
                this.state = 1702;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 132, this._ctx)) {
                    case 1:
                        {
                            this.state = 1698;
                            this.keyspace();
                            this.state = 1699;
                            this.match(CqlParser.DOT);
                        }
                        break;
                    case 2:
                        // tslint:disable-next-line:no-empty
                        {
                        }
                        break;
                }
                this.state = 1704;
                this.table();
                this.state = 1705;
                this.insertColumnSpec();
                this.state = 1706;
                this.insertValuesSpec();
                this.state = 1709;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case CqlParser.K_IF:
                        {
                            this.state = 1707;
                            this.ifNotExist();
                        }
                        break;
                    case CqlParser.EOF:
                    case CqlParser.SEMI:
                    case CqlParser.MINUSMINUS:
                    case CqlParser.K_USING:
                        // tslint:disable-next-line:no-empty
                        {
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1712;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_USING) {
                    {
                        this.state = 1711;
                        this.usingTtlTimestamp();
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
    CqlParser.prototype.usingTtlTimestamp = function () {
        var _localctx = new UsingTtlTimestampContext(this._ctx, this.state);
        this.enterRule(_localctx, 236, CqlParser.RULE_usingTtlTimestamp);
        try {
            this.state = 1730;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 135, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1714;
                        this.kwUsing();
                        this.state = 1715;
                        this.ttl();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1717;
                        this.kwUsing();
                        this.state = 1718;
                        this.ttl();
                        this.state = 1719;
                        this.kwAnd();
                        this.state = 1720;
                        this.timestamp();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1722;
                        this.kwUsing();
                        this.state = 1723;
                        this.timestamp();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1725;
                        this.kwUsing();
                        this.state = 1726;
                        this.timestamp();
                        this.state = 1727;
                        this.kwAnd();
                        this.state = 1728;
                        this.ttl();
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
    CqlParser.prototype.timestamp = function () {
        var _localctx = new TimestampContext(this._ctx, this.state);
        this.enterRule(_localctx, 238, CqlParser.RULE_timestamp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1732;
                this.kwTimestamp();
                this.state = 1733;
                this.decimalLiteral();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.ttl = function () {
        var _localctx = new TtlContext(this._ctx, this.state);
        this.enterRule(_localctx, 240, CqlParser.RULE_ttl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1735;
                this.kwTtl();
                this.state = 1736;
                this.decimalLiteral();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.usingTimestampSpec = function () {
        var _localctx = new UsingTimestampSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 242, CqlParser.RULE_usingTimestampSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1738;
                this.kwUsing();
                this.state = 1739;
                this.timestamp();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.ifNotExist = function () {
        var _localctx = new IfNotExistContext(this._ctx, this.state);
        this.enterRule(_localctx, 244, CqlParser.RULE_ifNotExist);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1741;
                this.kwIf();
                this.state = 1742;
                this.kwNot();
                this.state = 1743;
                this.kwExists();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.ifExist = function () {
        var _localctx = new IfExistContext(this._ctx, this.state);
        this.enterRule(_localctx, 246, CqlParser.RULE_ifExist);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1745;
                this.kwIf();
                this.state = 1746;
                this.kwExists();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.insertValuesSpec = function () {
        var _localctx = new InsertValuesSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 248, CqlParser.RULE_insertValuesSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1748;
                this.kwValues();
                this.state = 1749;
                this.match(CqlParser.LR_BRACKET);
                this.state = 1750;
                this.expressionList();
                this.state = 1751;
                this.match(CqlParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.insertColumnSpec = function () {
        var _localctx = new InsertColumnSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 250, CqlParser.RULE_insertColumnSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1753;
                this.match(CqlParser.LR_BRACKET);
                this.state = 1754;
                this.columnList();
                this.state = 1755;
                this.match(CqlParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.columnList = function () {
        var _localctx = new ColumnListContext(this._ctx, this.state);
        this.enterRule(_localctx, 252, CqlParser.RULE_columnList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1757;
                this.column();
                this.state = 1763;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CqlParser.COMMA) {
                    {
                        {
                            this.state = 1758;
                            this.syntaxComma();
                            this.state = 1759;
                            this.column();
                        }
                    }
                    this.state = 1765;
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
    CqlParser.prototype.expressionList = function () {
        var _localctx = new ExpressionListContext(this._ctx, this.state);
        this.enterRule(_localctx, 254, CqlParser.RULE_expressionList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1770;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 137, this._ctx)) {
                    case 1:
                        {
                            this.state = 1766;
                            this.constant();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1767;
                            this.assignmentMap();
                        }
                        break;
                    case 3:
                        {
                            this.state = 1768;
                            this.assignmentSet();
                        }
                        break;
                    case 4:
                        {
                            this.state = 1769;
                            this.assignmentList();
                        }
                        break;
                }
                this.state = 1781;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CqlParser.COMMA) {
                    {
                        {
                            this.state = 1772;
                            this.syntaxComma();
                            this.state = 1777;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 138, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1773;
                                        this.constant();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1774;
                                        this.assignmentMap();
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 1775;
                                        this.assignmentSet();
                                    }
                                    break;
                                case 4:
                                    {
                                        this.state = 1776;
                                        this.assignmentList();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1783;
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
    CqlParser.prototype.select = function () {
        var _localctx = new SelectContext(this._ctx, this.state);
        this.enterRule(_localctx, 256, CqlParser.RULE_select);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1784;
                this.kwSelect();
                this.state = 1787;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case CqlParser.K_DISTINCT:
                        {
                            this.state = 1785;
                            this.distinctSpec();
                        }
                        break;
                    case CqlParser.STAR:
                    case CqlParser.OBJECT_NAME:
                        // tslint:disable-next-line:no-empty
                        {
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1789;
                this.selectElements();
                this.state = 1790;
                this.fromSpec();
                this.state = 1792;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_WHERE) {
                    {
                        this.state = 1791;
                        this.whereSpec();
                    }
                }
                this.state = 1795;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_ORDER) {
                    {
                        this.state = 1794;
                        this.orderSpec();
                    }
                }
                this.state = 1798;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_LIMIT) {
                    {
                        this.state = 1797;
                        this.limitSpec();
                    }
                }
                this.state = 1801;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.K_ALLOW) {
                    {
                        this.state = 1800;
                        this.allowFilteringSpec();
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
    CqlParser.prototype.allowFilteringSpec = function () {
        var _localctx = new AllowFilteringSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 258, CqlParser.RULE_allowFilteringSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1803;
                this.kwAllow();
                this.state = 1804;
                this.kwFiltering();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.limitSpec = function () {
        var _localctx = new LimitSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 260, CqlParser.RULE_limitSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1806;
                this.kwLimit();
                this.state = 1807;
                this.decimalLiteral();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.fromSpec = function () {
        var _localctx = new FromSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 262, CqlParser.RULE_fromSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1809;
                this.kwFrom();
                this.state = 1810;
                this.fromSpecElement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.fromSpecElement = function () {
        var _localctx = new FromSpecElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 264, CqlParser.RULE_fromSpecElement);
        try {
            this.state = 1816;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 145, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1812;
                        this.match(CqlParser.OBJECT_NAME);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1813;
                        this.match(CqlParser.OBJECT_NAME);
                        this.state = 1814;
                        this.match(CqlParser.DOT);
                        this.state = 1815;
                        this.match(CqlParser.OBJECT_NAME);
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
    CqlParser.prototype.orderSpec = function () {
        var _localctx = new OrderSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 266, CqlParser.RULE_orderSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1818;
                this.kwOrder();
                this.state = 1819;
                this.kwBy();
                this.state = 1820;
                this.orderSpecElement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.orderSpecElement = function () {
        var _localctx = new OrderSpecElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 268, CqlParser.RULE_orderSpecElement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1822;
                this.match(CqlParser.OBJECT_NAME);
                this.state = 1825;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case CqlParser.K_ASC:
                        {
                            this.state = 1823;
                            this.kwAsc();
                        }
                        break;
                    case CqlParser.K_DESC:
                        {
                            this.state = 1824;
                            this.kwDesc();
                        }
                        break;
                    case CqlParser.EOF:
                    case CqlParser.SEMI:
                    case CqlParser.MINUSMINUS:
                    case CqlParser.K_ALLOW:
                    case CqlParser.K_LIMIT:
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
    CqlParser.prototype.whereSpec = function () {
        var _localctx = new WhereSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 270, CqlParser.RULE_whereSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1827;
                this.kwWhere();
                this.state = 1828;
                this.relationElements();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.distinctSpec = function () {
        var _localctx = new DistinctSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 272, CqlParser.RULE_distinctSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1830;
                this.kwDistinct();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.selectElements = function () {
        var _localctx = new SelectElementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 274, CqlParser.RULE_selectElements);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1834;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case CqlParser.STAR:
                        {
                            this.state = 1832;
                            _localctx._star = this.match(CqlParser.STAR);
                        }
                        break;
                    case CqlParser.OBJECT_NAME:
                        {
                            this.state = 1833;
                            this.selectElement();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1841;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CqlParser.COMMA) {
                    {
                        {
                            this.state = 1836;
                            this.syntaxComma();
                            this.state = 1837;
                            this.selectElement();
                        }
                    }
                    this.state = 1843;
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
    CqlParser.prototype.selectElement = function () {
        var _localctx = new SelectElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 276, CqlParser.RULE_selectElement);
        var _la;
        try {
            this.state = 1859;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 151, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1844;
                        this.match(CqlParser.OBJECT_NAME);
                        this.state = 1845;
                        this.match(CqlParser.DOT);
                        this.state = 1846;
                        this.match(CqlParser.STAR);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1847;
                        this.match(CqlParser.OBJECT_NAME);
                        this.state = 1851;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CqlParser.K_AS) {
                            {
                                this.state = 1848;
                                this.kwAs();
                                this.state = 1849;
                                this.match(CqlParser.OBJECT_NAME);
                            }
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1853;
                        this.functionCall();
                        this.state = 1857;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CqlParser.K_AS) {
                            {
                                this.state = 1854;
                                this.kwAs();
                                this.state = 1855;
                                this.match(CqlParser.OBJECT_NAME);
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
    CqlParser.prototype.relationElements = function () {
        var _localctx = new RelationElementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 278, CqlParser.RULE_relationElements);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1861;
                    this.relationElement();
                }
                this.state = 1867;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CqlParser.K_AND) {
                    {
                        {
                            this.state = 1862;
                            this.kwAnd();
                            this.state = 1863;
                            this.relationElement();
                        }
                    }
                    this.state = 1869;
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
    CqlParser.prototype.relationElement = function () {
        var _localctx = new RelationElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 280, CqlParser.RULE_relationElement);
        var _la;
        try {
            this.state = 1896;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 154, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1870;
                        this.match(CqlParser.OBJECT_NAME);
                        this.state = 1871;
                        _la = this._input.LA(1);
                        if (!(((((_la - 170)) & ~0x1F) === 0 && ((1 << (_la - 170)) & ((1 << (CqlParser.OPERATOR_EQ - 170)) | (1 << (CqlParser.OPERATOR_LT - 170)) | (1 << (CqlParser.OPERATOR_GT - 170)) | (1 << (CqlParser.OPERATOR_LTE - 170)) | (1 << (CqlParser.OPERATOR_GTE - 170)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1872;
                        this.constant();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1873;
                        this.match(CqlParser.OBJECT_NAME);
                        this.state = 1874;
                        this.match(CqlParser.DOT);
                        this.state = 1875;
                        this.match(CqlParser.OBJECT_NAME);
                        this.state = 1876;
                        _la = this._input.LA(1);
                        if (!(((((_la - 170)) & ~0x1F) === 0 && ((1 << (_la - 170)) & ((1 << (CqlParser.OPERATOR_EQ - 170)) | (1 << (CqlParser.OPERATOR_LT - 170)) | (1 << (CqlParser.OPERATOR_GT - 170)) | (1 << (CqlParser.OPERATOR_LTE - 170)) | (1 << (CqlParser.OPERATOR_GTE - 170)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1877;
                        this.constant();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1878;
                        this.functionCall();
                        this.state = 1879;
                        _la = this._input.LA(1);
                        if (!(((((_la - 170)) & ~0x1F) === 0 && ((1 << (_la - 170)) & ((1 << (CqlParser.OPERATOR_EQ - 170)) | (1 << (CqlParser.OPERATOR_LT - 170)) | (1 << (CqlParser.OPERATOR_GT - 170)) | (1 << (CqlParser.OPERATOR_LTE - 170)) | (1 << (CqlParser.OPERATOR_GTE - 170)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1880;
                        this.constant();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1882;
                        this.functionCall();
                        this.state = 1883;
                        _la = this._input.LA(1);
                        if (!(((((_la - 170)) & ~0x1F) === 0 && ((1 << (_la - 170)) & ((1 << (CqlParser.OPERATOR_EQ - 170)) | (1 << (CqlParser.OPERATOR_LT - 170)) | (1 << (CqlParser.OPERATOR_GT - 170)) | (1 << (CqlParser.OPERATOR_LTE - 170)) | (1 << (CqlParser.OPERATOR_GTE - 170)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1884;
                        this.functionCall();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1886;
                        this.match(CqlParser.OBJECT_NAME);
                        this.state = 1887;
                        this.kwIn();
                        this.state = 1888;
                        this.match(CqlParser.LR_BRACKET);
                        this.state = 1890;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CqlParser.K_FALSE || _la === CqlParser.K_NULL || _la === CqlParser.K_TRUE || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & ((1 << (CqlParser.STRING_LITERAL - 163)) | (1 << (CqlParser.DECIMAL_LITERAL - 163)) | (1 << (CqlParser.HEXADECIMAL_LITERAL - 163)) | (1 << (CqlParser.OBJECT_NAME - 163)) | (1 << (CqlParser.UUID - 163)))) !== 0)) {
                            {
                                this.state = 1889;
                                this.functionArgs();
                            }
                        }
                        this.state = 1892;
                        this.match(CqlParser.RR_BRACKET);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1894;
                        this.relalationContainsKey();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1895;
                        this.relalationContains();
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
    CqlParser.prototype.relalationContains = function () {
        var _localctx = new RelalationContainsContext(this._ctx, this.state);
        this.enterRule(_localctx, 282, CqlParser.RULE_relalationContains);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1898;
                this.match(CqlParser.OBJECT_NAME);
                this.state = 1899;
                this.kwContains();
                this.state = 1900;
                this.constant();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.relalationContainsKey = function () {
        var _localctx = new RelalationContainsKeyContext(this._ctx, this.state);
        this.enterRule(_localctx, 284, CqlParser.RULE_relalationContainsKey);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1902;
                this.match(CqlParser.OBJECT_NAME);
                {
                    this.state = 1903;
                    this.kwContains();
                    this.state = 1904;
                    this.kwKey();
                }
                this.state = 1906;
                this.constant();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.functionCall = function () {
        var _localctx = new FunctionCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 286, CqlParser.RULE_functionCall);
        var _la;
        try {
            this.state = 1918;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 156, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1908;
                        this.match(CqlParser.OBJECT_NAME);
                        this.state = 1909;
                        this.match(CqlParser.LR_BRACKET);
                        this.state = 1910;
                        this.match(CqlParser.STAR);
                        this.state = 1911;
                        this.match(CqlParser.RR_BRACKET);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1912;
                        this.match(CqlParser.OBJECT_NAME);
                        this.state = 1913;
                        this.match(CqlParser.LR_BRACKET);
                        this.state = 1915;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CqlParser.K_FALSE || _la === CqlParser.K_NULL || _la === CqlParser.K_TRUE || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & ((1 << (CqlParser.STRING_LITERAL - 163)) | (1 << (CqlParser.DECIMAL_LITERAL - 163)) | (1 << (CqlParser.HEXADECIMAL_LITERAL - 163)) | (1 << (CqlParser.OBJECT_NAME - 163)) | (1 << (CqlParser.UUID - 163)))) !== 0)) {
                            {
                                this.state = 1914;
                                this.functionArgs();
                            }
                        }
                        this.state = 1917;
                        this.match(CqlParser.RR_BRACKET);
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
    CqlParser.prototype.functionArgs = function () {
        var _localctx = new FunctionArgsContext(this._ctx, this.state);
        this.enterRule(_localctx, 288, CqlParser.RULE_functionArgs);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1923;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 157, this._ctx)) {
                    case 1:
                        {
                            this.state = 1920;
                            this.constant();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1921;
                            this.match(CqlParser.OBJECT_NAME);
                        }
                        break;
                    case 3:
                        {
                            this.state = 1922;
                            this.functionCall();
                        }
                        break;
                }
                this.state = 1933;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CqlParser.COMMA) {
                    {
                        {
                            this.state = 1925;
                            this.syntaxComma();
                            this.state = 1929;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 158, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1926;
                                        this.constant();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1927;
                                        this.match(CqlParser.OBJECT_NAME);
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 1928;
                                        this.functionCall();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1935;
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
    CqlParser.prototype.constant = function () {
        var _localctx = new ConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 290, CqlParser.RULE_constant);
        try {
            this.state = 1942;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CqlParser.UUID:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1936;
                        this.match(CqlParser.UUID);
                    }
                    break;
                case CqlParser.STRING_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1937;
                        this.stringLiteral();
                    }
                    break;
                case CqlParser.DECIMAL_LITERAL:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1938;
                        this.decimalLiteral();
                    }
                    break;
                case CqlParser.HEXADECIMAL_LITERAL:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1939;
                        this.hexadecimalLiteral();
                    }
                    break;
                case CqlParser.K_FALSE:
                case CqlParser.K_TRUE:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1940;
                        this.booleanLiteral();
                    }
                    break;
                case CqlParser.K_NULL:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1941;
                        this.kwNull();
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
    CqlParser.prototype.decimalLiteral = function () {
        var _localctx = new DecimalLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 292, CqlParser.RULE_decimalLiteral);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1944;
                this.match(CqlParser.DECIMAL_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.floatLiteral = function () {
        var _localctx = new FloatLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 294, CqlParser.RULE_floatLiteral);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1946;
                _la = this._input.LA(1);
                if (!(_la === CqlParser.DECIMAL_LITERAL || _la === CqlParser.FLOAT_LITERAL)) {
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
    CqlParser.prototype.stringLiteral = function () {
        var _localctx = new StringLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 296, CqlParser.RULE_stringLiteral);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1948;
                this.match(CqlParser.STRING_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.booleanLiteral = function () {
        var _localctx = new BooleanLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 298, CqlParser.RULE_booleanLiteral);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1950;
                _la = this._input.LA(1);
                if (!(_la === CqlParser.K_FALSE || _la === CqlParser.K_TRUE)) {
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
    CqlParser.prototype.hexadecimalLiteral = function () {
        var _localctx = new HexadecimalLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 300, CqlParser.RULE_hexadecimalLiteral);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1952;
                this.match(CqlParser.HEXADECIMAL_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.keyspace = function () {
        var _localctx = new KeyspaceContext(this._ctx, this.state);
        this.enterRule(_localctx, 302, CqlParser.RULE_keyspace);
        try {
            this.state = 1958;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CqlParser.OBJECT_NAME:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1954;
                        this.match(CqlParser.OBJECT_NAME);
                    }
                    break;
                case CqlParser.DQUOTE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1955;
                        this.match(CqlParser.DQUOTE);
                        this.state = 1956;
                        this.match(CqlParser.OBJECT_NAME);
                        this.state = 1957;
                        this.match(CqlParser.DQUOTE);
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
    CqlParser.prototype.table = function () {
        var _localctx = new TableContext(this._ctx, this.state);
        this.enterRule(_localctx, 304, CqlParser.RULE_table);
        try {
            this.state = 1964;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CqlParser.OBJECT_NAME:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1960;
                        this.match(CqlParser.OBJECT_NAME);
                    }
                    break;
                case CqlParser.DQUOTE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1961;
                        this.match(CqlParser.DQUOTE);
                        this.state = 1962;
                        this.match(CqlParser.OBJECT_NAME);
                        this.state = 1963;
                        this.match(CqlParser.DQUOTE);
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
    CqlParser.prototype.column = function () {
        var _localctx = new ColumnContext(this._ctx, this.state);
        this.enterRule(_localctx, 306, CqlParser.RULE_column);
        try {
            this.state = 1970;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CqlParser.OBJECT_NAME:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1966;
                        this.match(CqlParser.OBJECT_NAME);
                    }
                    break;
                case CqlParser.DQUOTE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1967;
                        this.match(CqlParser.DQUOTE);
                        this.state = 1968;
                        this.match(CqlParser.OBJECT_NAME);
                        this.state = 1969;
                        this.match(CqlParser.DQUOTE);
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
    CqlParser.prototype.dataType = function () {
        var _localctx = new DataTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 308, CqlParser.RULE_dataType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1972;
                this.dataTypeName();
                this.state = 1974;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CqlParser.OPERATOR_LT) {
                    {
                        this.state = 1973;
                        this.dataTypeDefinition();
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
    CqlParser.prototype.dataTypeName = function () {
        var _localctx = new DataTypeNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 310, CqlParser.RULE_dataTypeName);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1976;
                _la = this._input.LA(1);
                if (!(((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (CqlParser.K_SET - 112)) | (1 << (CqlParser.K_TIMESTAMP - 112)) | (1 << (CqlParser.K_UUID - 112)) | (1 << (CqlParser.K_ASCII - 112)) | (1 << (CqlParser.K_BIGINT - 112)) | (1 << (CqlParser.K_BLOB - 112)) | (1 << (CqlParser.K_BOOLEAN - 112)))) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & ((1 << (CqlParser.K_COUNTER - 144)) | (1 << (CqlParser.K_DATE - 144)) | (1 << (CqlParser.K_DECIMAL - 144)) | (1 << (CqlParser.K_DOUBLE - 144)) | (1 << (CqlParser.K_FLOAT - 144)) | (1 << (CqlParser.K_FROZEN - 144)) | (1 << (CqlParser.K_INET - 144)) | (1 << (CqlParser.K_INT - 144)) | (1 << (CqlParser.K_LIST - 144)) | (1 << (CqlParser.K_MAP - 144)) | (1 << (CqlParser.K_SMALLINT - 144)) | (1 << (CqlParser.K_TEXT - 144)) | (1 << (CqlParser.K_TIMEUUID - 144)) | (1 << (CqlParser.K_TIME - 144)) | (1 << (CqlParser.K_TINYINT - 144)) | (1 << (CqlParser.K_TUPLE - 144)) | (1 << (CqlParser.K_VARCHAR - 144)) | (1 << (CqlParser.K_VARINT - 144)) | (1 << (CqlParser.OBJECT_NAME - 144)))) !== 0))) {
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
    CqlParser.prototype.dataTypeDefinition = function () {
        var _localctx = new DataTypeDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 312, CqlParser.RULE_dataTypeDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1978;
                this.syntaxBracketLa();
                this.state = 1979;
                this.dataTypeName();
                this.state = 1985;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CqlParser.COMMA) {
                    {
                        {
                            this.state = 1980;
                            this.syntaxComma();
                            this.state = 1981;
                            this.dataTypeName();
                        }
                    }
                    this.state = 1987;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1988;
                this.syntaxBracketRa();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.orderDirection = function () {
        var _localctx = new OrderDirectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 314, CqlParser.RULE_orderDirection);
        try {
            this.state = 1992;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CqlParser.K_ASC:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1990;
                        this.kwAsc();
                    }
                    break;
                case CqlParser.K_DESC:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1991;
                        this.kwDesc();
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
    CqlParser.prototype.role = function () {
        var _localctx = new RoleContext(this._ctx, this.state);
        this.enterRule(_localctx, 316, CqlParser.RULE_role);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1994;
                this.match(CqlParser.OBJECT_NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.trigger = function () {
        var _localctx = new TriggerContext(this._ctx, this.state);
        this.enterRule(_localctx, 318, CqlParser.RULE_trigger);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1996;
                this.match(CqlParser.OBJECT_NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.triggerClass = function () {
        var _localctx = new TriggerClassContext(this._ctx, this.state);
        this.enterRule(_localctx, 320, CqlParser.RULE_triggerClass);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1998;
                this.stringLiteral();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.materializedView = function () {
        var _localctx = new MaterializedViewContext(this._ctx, this.state);
        this.enterRule(_localctx, 322, CqlParser.RULE_materializedView);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2000;
                this.match(CqlParser.OBJECT_NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.type = function () {
        var _localctx = new TypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 324, CqlParser.RULE_type);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2002;
                this.match(CqlParser.OBJECT_NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.aggregate = function () {
        var _localctx = new AggregateContext(this._ctx, this.state);
        this.enterRule(_localctx, 326, CqlParser.RULE_aggregate);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2004;
                this.match(CqlParser.OBJECT_NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.function = function () {
        var _localctx = new FunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 328, CqlParser.RULE_function);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2006;
                this.match(CqlParser.OBJECT_NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.language = function () {
        var _localctx = new LanguageContext(this._ctx, this.state);
        this.enterRule(_localctx, 330, CqlParser.RULE_language);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2008;
                this.match(CqlParser.OBJECT_NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.user = function () {
        var _localctx = new UserContext(this._ctx, this.state);
        this.enterRule(_localctx, 332, CqlParser.RULE_user);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2010;
                this.match(CqlParser.OBJECT_NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.password = function () {
        var _localctx = new PasswordContext(this._ctx, this.state);
        this.enterRule(_localctx, 334, CqlParser.RULE_password);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2012;
                this.stringLiteral();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.hashKey = function () {
        var _localctx = new HashKeyContext(this._ctx, this.state);
        this.enterRule(_localctx, 336, CqlParser.RULE_hashKey);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2014;
                this.match(CqlParser.OBJECT_NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.param = function () {
        var _localctx = new ParamContext(this._ctx, this.state);
        this.enterRule(_localctx, 338, CqlParser.RULE_param);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2016;
                this.paramName();
                this.state = 2017;
                this.dataType();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.paramName = function () {
        var _localctx = new ParamNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 340, CqlParser.RULE_paramName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2019;
                this.match(CqlParser.OBJECT_NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwAdd = function () {
        var _localctx = new KwAddContext(this._ctx, this.state);
        this.enterRule(_localctx, 342, CqlParser.RULE_kwAdd);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2021;
                this.match(CqlParser.K_ADD);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwAggregate = function () {
        var _localctx = new KwAggregateContext(this._ctx, this.state);
        this.enterRule(_localctx, 344, CqlParser.RULE_kwAggregate);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2023;
                this.match(CqlParser.K_AGGREGATE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwAll = function () {
        var _localctx = new KwAllContext(this._ctx, this.state);
        this.enterRule(_localctx, 346, CqlParser.RULE_kwAll);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2025;
                this.match(CqlParser.K_ALL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwAllPermissions = function () {
        var _localctx = new KwAllPermissionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 348, CqlParser.RULE_kwAllPermissions);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2027;
                this.match(CqlParser.K_ALL);
                this.state = 2028;
                this.match(CqlParser.K_PERMISSIONS);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwAllow = function () {
        var _localctx = new KwAllowContext(this._ctx, this.state);
        this.enterRule(_localctx, 350, CqlParser.RULE_kwAllow);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2030;
                this.match(CqlParser.K_ALLOW);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwAlter = function () {
        var _localctx = new KwAlterContext(this._ctx, this.state);
        this.enterRule(_localctx, 352, CqlParser.RULE_kwAlter);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2032;
                this.match(CqlParser.K_ALTER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwAnd = function () {
        var _localctx = new KwAndContext(this._ctx, this.state);
        this.enterRule(_localctx, 354, CqlParser.RULE_kwAnd);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2034;
                this.match(CqlParser.K_AND);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwApply = function () {
        var _localctx = new KwApplyContext(this._ctx, this.state);
        this.enterRule(_localctx, 356, CqlParser.RULE_kwApply);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2036;
                this.match(CqlParser.K_APPLY);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwAs = function () {
        var _localctx = new KwAsContext(this._ctx, this.state);
        this.enterRule(_localctx, 358, CqlParser.RULE_kwAs);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2038;
                this.match(CqlParser.K_AS);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwAsc = function () {
        var _localctx = new KwAscContext(this._ctx, this.state);
        this.enterRule(_localctx, 360, CqlParser.RULE_kwAsc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2040;
                this.match(CqlParser.K_ASC);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwAuthorize = function () {
        var _localctx = new KwAuthorizeContext(this._ctx, this.state);
        this.enterRule(_localctx, 362, CqlParser.RULE_kwAuthorize);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2042;
                this.match(CqlParser.K_AUTHORIZE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwBatch = function () {
        var _localctx = new KwBatchContext(this._ctx, this.state);
        this.enterRule(_localctx, 364, CqlParser.RULE_kwBatch);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2044;
                this.match(CqlParser.K_BATCH);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwBegin = function () {
        var _localctx = new KwBeginContext(this._ctx, this.state);
        this.enterRule(_localctx, 366, CqlParser.RULE_kwBegin);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2046;
                this.match(CqlParser.K_BEGIN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwBy = function () {
        var _localctx = new KwByContext(this._ctx, this.state);
        this.enterRule(_localctx, 368, CqlParser.RULE_kwBy);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2048;
                this.match(CqlParser.K_BY);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwCalled = function () {
        var _localctx = new KwCalledContext(this._ctx, this.state);
        this.enterRule(_localctx, 370, CqlParser.RULE_kwCalled);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2050;
                this.match(CqlParser.K_CALLED);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwClustering = function () {
        var _localctx = new KwClusteringContext(this._ctx, this.state);
        this.enterRule(_localctx, 372, CqlParser.RULE_kwClustering);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2052;
                this.match(CqlParser.K_CLUSTERING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwCompact = function () {
        var _localctx = new KwCompactContext(this._ctx, this.state);
        this.enterRule(_localctx, 374, CqlParser.RULE_kwCompact);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2054;
                this.match(CqlParser.K_COMPACT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwContains = function () {
        var _localctx = new KwContainsContext(this._ctx, this.state);
        this.enterRule(_localctx, 376, CqlParser.RULE_kwContains);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2056;
                this.match(CqlParser.K_CONTAINS);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwCreate = function () {
        var _localctx = new KwCreateContext(this._ctx, this.state);
        this.enterRule(_localctx, 378, CqlParser.RULE_kwCreate);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2058;
                this.match(CqlParser.K_CREATE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwDelete = function () {
        var _localctx = new KwDeleteContext(this._ctx, this.state);
        this.enterRule(_localctx, 380, CqlParser.RULE_kwDelete);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2060;
                this.match(CqlParser.K_DELETE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwDesc = function () {
        var _localctx = new KwDescContext(this._ctx, this.state);
        this.enterRule(_localctx, 382, CqlParser.RULE_kwDesc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2062;
                this.match(CqlParser.K_DESC);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwDescibe = function () {
        var _localctx = new KwDescibeContext(this._ctx, this.state);
        this.enterRule(_localctx, 384, CqlParser.RULE_kwDescibe);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2064;
                this.match(CqlParser.K_DESCRIBE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwDistinct = function () {
        var _localctx = new KwDistinctContext(this._ctx, this.state);
        this.enterRule(_localctx, 386, CqlParser.RULE_kwDistinct);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2066;
                this.match(CqlParser.K_DISTINCT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwDrop = function () {
        var _localctx = new KwDropContext(this._ctx, this.state);
        this.enterRule(_localctx, 388, CqlParser.RULE_kwDrop);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2068;
                this.match(CqlParser.K_DROP);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwDurableWrites = function () {
        var _localctx = new KwDurableWritesContext(this._ctx, this.state);
        this.enterRule(_localctx, 390, CqlParser.RULE_kwDurableWrites);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2070;
                this.match(CqlParser.K_DURABLE_WRITES);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwEntries = function () {
        var _localctx = new KwEntriesContext(this._ctx, this.state);
        this.enterRule(_localctx, 392, CqlParser.RULE_kwEntries);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2072;
                this.match(CqlParser.K_ENTRIES);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwExecute = function () {
        var _localctx = new KwExecuteContext(this._ctx, this.state);
        this.enterRule(_localctx, 394, CqlParser.RULE_kwExecute);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2074;
                this.match(CqlParser.K_EXECUTE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwExists = function () {
        var _localctx = new KwExistsContext(this._ctx, this.state);
        this.enterRule(_localctx, 396, CqlParser.RULE_kwExists);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2076;
                this.match(CqlParser.K_EXISTS);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwFiltering = function () {
        var _localctx = new KwFilteringContext(this._ctx, this.state);
        this.enterRule(_localctx, 398, CqlParser.RULE_kwFiltering);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2078;
                this.match(CqlParser.K_FILTERING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwFinalfunc = function () {
        var _localctx = new KwFinalfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 400, CqlParser.RULE_kwFinalfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2080;
                this.match(CqlParser.K_FINALFUNC);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwFrom = function () {
        var _localctx = new KwFromContext(this._ctx, this.state);
        this.enterRule(_localctx, 402, CqlParser.RULE_kwFrom);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2082;
                this.match(CqlParser.K_FROM);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwFull = function () {
        var _localctx = new KwFullContext(this._ctx, this.state);
        this.enterRule(_localctx, 404, CqlParser.RULE_kwFull);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2084;
                this.match(CqlParser.K_FULL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwFunction = function () {
        var _localctx = new KwFunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 406, CqlParser.RULE_kwFunction);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2086;
                this.match(CqlParser.K_FUNCTION);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwFunctions = function () {
        var _localctx = new KwFunctionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 408, CqlParser.RULE_kwFunctions);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2088;
                this.match(CqlParser.K_FUNCTIONS);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwGrant = function () {
        var _localctx = new KwGrantContext(this._ctx, this.state);
        this.enterRule(_localctx, 410, CqlParser.RULE_kwGrant);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2090;
                this.match(CqlParser.K_GRANT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwIf = function () {
        var _localctx = new KwIfContext(this._ctx, this.state);
        this.enterRule(_localctx, 412, CqlParser.RULE_kwIf);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2092;
                this.match(CqlParser.K_IF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwIn = function () {
        var _localctx = new KwInContext(this._ctx, this.state);
        this.enterRule(_localctx, 414, CqlParser.RULE_kwIn);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2094;
                this.match(CqlParser.K_IN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwIndex = function () {
        var _localctx = new KwIndexContext(this._ctx, this.state);
        this.enterRule(_localctx, 416, CqlParser.RULE_kwIndex);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2096;
                this.match(CqlParser.K_INDEX);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwInitcond = function () {
        var _localctx = new KwInitcondContext(this._ctx, this.state);
        this.enterRule(_localctx, 418, CqlParser.RULE_kwInitcond);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2098;
                this.match(CqlParser.K_INITCOND);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwInput = function () {
        var _localctx = new KwInputContext(this._ctx, this.state);
        this.enterRule(_localctx, 420, CqlParser.RULE_kwInput);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2100;
                this.match(CqlParser.K_INPUT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwInsert = function () {
        var _localctx = new KwInsertContext(this._ctx, this.state);
        this.enterRule(_localctx, 422, CqlParser.RULE_kwInsert);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2102;
                this.match(CqlParser.K_INSERT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwInto = function () {
        var _localctx = new KwIntoContext(this._ctx, this.state);
        this.enterRule(_localctx, 424, CqlParser.RULE_kwInto);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2104;
                this.match(CqlParser.K_INTO);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwIs = function () {
        var _localctx = new KwIsContext(this._ctx, this.state);
        this.enterRule(_localctx, 426, CqlParser.RULE_kwIs);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2106;
                this.match(CqlParser.K_IS);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwKey = function () {
        var _localctx = new KwKeyContext(this._ctx, this.state);
        this.enterRule(_localctx, 428, CqlParser.RULE_kwKey);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2108;
                this.match(CqlParser.K_KEY);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwKeys = function () {
        var _localctx = new KwKeysContext(this._ctx, this.state);
        this.enterRule(_localctx, 430, CqlParser.RULE_kwKeys);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2110;
                this.match(CqlParser.K_KEYS);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwKeyspace = function () {
        var _localctx = new KwKeyspaceContext(this._ctx, this.state);
        this.enterRule(_localctx, 432, CqlParser.RULE_kwKeyspace);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2112;
                this.match(CqlParser.K_KEYSPACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwKeyspaces = function () {
        var _localctx = new KwKeyspacesContext(this._ctx, this.state);
        this.enterRule(_localctx, 434, CqlParser.RULE_kwKeyspaces);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2114;
                this.match(CqlParser.K_KEYSPACES);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwLanguage = function () {
        var _localctx = new KwLanguageContext(this._ctx, this.state);
        this.enterRule(_localctx, 436, CqlParser.RULE_kwLanguage);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2116;
                this.match(CqlParser.K_LANGUAGE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwLimit = function () {
        var _localctx = new KwLimitContext(this._ctx, this.state);
        this.enterRule(_localctx, 438, CqlParser.RULE_kwLimit);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2118;
                this.match(CqlParser.K_LIMIT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwList = function () {
        var _localctx = new KwListContext(this._ctx, this.state);
        this.enterRule(_localctx, 440, CqlParser.RULE_kwList);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2120;
                this.match(CqlParser.K_LIST);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwLogged = function () {
        var _localctx = new KwLoggedContext(this._ctx, this.state);
        this.enterRule(_localctx, 442, CqlParser.RULE_kwLogged);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2122;
                this.match(CqlParser.K_LOGGED);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwLogin = function () {
        var _localctx = new KwLoginContext(this._ctx, this.state);
        this.enterRule(_localctx, 444, CqlParser.RULE_kwLogin);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2124;
                this.match(CqlParser.K_LOGIN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwMaterialized = function () {
        var _localctx = new KwMaterializedContext(this._ctx, this.state);
        this.enterRule(_localctx, 446, CqlParser.RULE_kwMaterialized);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2126;
                this.match(CqlParser.K_MATERIALIZED);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwModify = function () {
        var _localctx = new KwModifyContext(this._ctx, this.state);
        this.enterRule(_localctx, 448, CqlParser.RULE_kwModify);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2128;
                this.match(CqlParser.K_MODIFY);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwNosuperuser = function () {
        var _localctx = new KwNosuperuserContext(this._ctx, this.state);
        this.enterRule(_localctx, 450, CqlParser.RULE_kwNosuperuser);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2130;
                this.match(CqlParser.K_NOSUPERUSER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwNorecursive = function () {
        var _localctx = new KwNorecursiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 452, CqlParser.RULE_kwNorecursive);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2132;
                this.match(CqlParser.K_NORECURSIVE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwNot = function () {
        var _localctx = new KwNotContext(this._ctx, this.state);
        this.enterRule(_localctx, 454, CqlParser.RULE_kwNot);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2134;
                this.match(CqlParser.K_NOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwNull = function () {
        var _localctx = new KwNullContext(this._ctx, this.state);
        this.enterRule(_localctx, 456, CqlParser.RULE_kwNull);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2136;
                this.match(CqlParser.K_NULL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwOf = function () {
        var _localctx = new KwOfContext(this._ctx, this.state);
        this.enterRule(_localctx, 458, CqlParser.RULE_kwOf);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2138;
                this.match(CqlParser.K_OF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwOn = function () {
        var _localctx = new KwOnContext(this._ctx, this.state);
        this.enterRule(_localctx, 460, CqlParser.RULE_kwOn);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2140;
                this.match(CqlParser.K_ON);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwOptions = function () {
        var _localctx = new KwOptionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 462, CqlParser.RULE_kwOptions);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2142;
                this.match(CqlParser.K_OPTIONS);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwOr = function () {
        var _localctx = new KwOrContext(this._ctx, this.state);
        this.enterRule(_localctx, 464, CqlParser.RULE_kwOr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2144;
                this.match(CqlParser.K_OR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwOrder = function () {
        var _localctx = new KwOrderContext(this._ctx, this.state);
        this.enterRule(_localctx, 466, CqlParser.RULE_kwOrder);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2146;
                this.match(CqlParser.K_ORDER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwPassword = function () {
        var _localctx = new KwPasswordContext(this._ctx, this.state);
        this.enterRule(_localctx, 468, CqlParser.RULE_kwPassword);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2148;
                this.match(CqlParser.K_PASSWORD);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwPrimary = function () {
        var _localctx = new KwPrimaryContext(this._ctx, this.state);
        this.enterRule(_localctx, 470, CqlParser.RULE_kwPrimary);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2150;
                this.match(CqlParser.K_PRIMARY);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwRename = function () {
        var _localctx = new KwRenameContext(this._ctx, this.state);
        this.enterRule(_localctx, 472, CqlParser.RULE_kwRename);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2152;
                this.match(CqlParser.K_RENAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwReplace = function () {
        var _localctx = new KwReplaceContext(this._ctx, this.state);
        this.enterRule(_localctx, 474, CqlParser.RULE_kwReplace);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2154;
                this.match(CqlParser.K_REPLACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwReplication = function () {
        var _localctx = new KwReplicationContext(this._ctx, this.state);
        this.enterRule(_localctx, 476, CqlParser.RULE_kwReplication);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2156;
                this.match(CqlParser.K_REPLICATION);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwReturns = function () {
        var _localctx = new KwReturnsContext(this._ctx, this.state);
        this.enterRule(_localctx, 478, CqlParser.RULE_kwReturns);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2158;
                this.match(CqlParser.K_RETURNS);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwRole = function () {
        var _localctx = new KwRoleContext(this._ctx, this.state);
        this.enterRule(_localctx, 480, CqlParser.RULE_kwRole);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2160;
                this.match(CqlParser.K_ROLE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwRoles = function () {
        var _localctx = new KwRolesContext(this._ctx, this.state);
        this.enterRule(_localctx, 482, CqlParser.RULE_kwRoles);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2162;
                this.match(CqlParser.K_ROLES);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwSelect = function () {
        var _localctx = new KwSelectContext(this._ctx, this.state);
        this.enterRule(_localctx, 484, CqlParser.RULE_kwSelect);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2164;
                this.match(CqlParser.K_SELECT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwSet = function () {
        var _localctx = new KwSetContext(this._ctx, this.state);
        this.enterRule(_localctx, 486, CqlParser.RULE_kwSet);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2166;
                this.match(CqlParser.K_SET);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwSfunc = function () {
        var _localctx = new KwSfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 488, CqlParser.RULE_kwSfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2168;
                this.match(CqlParser.K_SFUNC);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwStorage = function () {
        var _localctx = new KwStorageContext(this._ctx, this.state);
        this.enterRule(_localctx, 490, CqlParser.RULE_kwStorage);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2170;
                this.match(CqlParser.K_STORAGE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwStype = function () {
        var _localctx = new KwStypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 492, CqlParser.RULE_kwStype);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2172;
                this.match(CqlParser.K_STYPE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwSuperuser = function () {
        var _localctx = new KwSuperuserContext(this._ctx, this.state);
        this.enterRule(_localctx, 494, CqlParser.RULE_kwSuperuser);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2174;
                this.match(CqlParser.K_SUPERUSER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwTable = function () {
        var _localctx = new KwTableContext(this._ctx, this.state);
        this.enterRule(_localctx, 496, CqlParser.RULE_kwTable);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2176;
                this.match(CqlParser.K_TABLE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwTimestamp = function () {
        var _localctx = new KwTimestampContext(this._ctx, this.state);
        this.enterRule(_localctx, 498, CqlParser.RULE_kwTimestamp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2178;
                this.match(CqlParser.K_TIMESTAMP);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwTo = function () {
        var _localctx = new KwToContext(this._ctx, this.state);
        this.enterRule(_localctx, 500, CqlParser.RULE_kwTo);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2180;
                this.match(CqlParser.K_TO);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwTrigger = function () {
        var _localctx = new KwTriggerContext(this._ctx, this.state);
        this.enterRule(_localctx, 502, CqlParser.RULE_kwTrigger);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2182;
                this.match(CqlParser.K_TRIGGER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwTruncate = function () {
        var _localctx = new KwTruncateContext(this._ctx, this.state);
        this.enterRule(_localctx, 504, CqlParser.RULE_kwTruncate);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2184;
                this.match(CqlParser.K_TRUNCATE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwTtl = function () {
        var _localctx = new KwTtlContext(this._ctx, this.state);
        this.enterRule(_localctx, 506, CqlParser.RULE_kwTtl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2186;
                this.match(CqlParser.K_TTL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwType = function () {
        var _localctx = new KwTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 508, CqlParser.RULE_kwType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2188;
                this.match(CqlParser.K_TYPE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwUnlogged = function () {
        var _localctx = new KwUnloggedContext(this._ctx, this.state);
        this.enterRule(_localctx, 510, CqlParser.RULE_kwUnlogged);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2190;
                this.match(CqlParser.K_UNLOGGED);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwUpdate = function () {
        var _localctx = new KwUpdateContext(this._ctx, this.state);
        this.enterRule(_localctx, 512, CqlParser.RULE_kwUpdate);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2192;
                this.match(CqlParser.K_UPDATE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwUse = function () {
        var _localctx = new KwUseContext(this._ctx, this.state);
        this.enterRule(_localctx, 514, CqlParser.RULE_kwUse);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2194;
                this.match(CqlParser.K_USE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwUser = function () {
        var _localctx = new KwUserContext(this._ctx, this.state);
        this.enterRule(_localctx, 516, CqlParser.RULE_kwUser);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2196;
                this.match(CqlParser.K_USER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwUsers = function () {
        var _localctx = new KwUsersContext(this._ctx, this.state);
        this.enterRule(_localctx, 518, CqlParser.RULE_kwUsers);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2198;
                this.match(CqlParser.K_USERS);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwUsing = function () {
        var _localctx = new KwUsingContext(this._ctx, this.state);
        this.enterRule(_localctx, 520, CqlParser.RULE_kwUsing);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2200;
                this.match(CqlParser.K_USING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwValues = function () {
        var _localctx = new KwValuesContext(this._ctx, this.state);
        this.enterRule(_localctx, 522, CqlParser.RULE_kwValues);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2202;
                this.match(CqlParser.K_VALUES);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwView = function () {
        var _localctx = new KwViewContext(this._ctx, this.state);
        this.enterRule(_localctx, 524, CqlParser.RULE_kwView);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2204;
                this.match(CqlParser.K_VIEW);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwWhere = function () {
        var _localctx = new KwWhereContext(this._ctx, this.state);
        this.enterRule(_localctx, 526, CqlParser.RULE_kwWhere);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2206;
                this.match(CqlParser.K_WHERE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwWith = function () {
        var _localctx = new KwWithContext(this._ctx, this.state);
        this.enterRule(_localctx, 528, CqlParser.RULE_kwWith);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2208;
                this.match(CqlParser.K_WITH);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.kwRevoke = function () {
        var _localctx = new KwRevokeContext(this._ctx, this.state);
        this.enterRule(_localctx, 530, CqlParser.RULE_kwRevoke);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2210;
                this.match(CqlParser.K_REVOKE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.eof = function () {
        var _localctx = new EofContext(this._ctx, this.state);
        this.enterRule(_localctx, 532, CqlParser.RULE_eof);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2212;
                this.match(CqlParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.syntaxBracketLr = function () {
        var _localctx = new SyntaxBracketLrContext(this._ctx, this.state);
        this.enterRule(_localctx, 534, CqlParser.RULE_syntaxBracketLr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2214;
                this.match(CqlParser.LR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.syntaxBracketRr = function () {
        var _localctx = new SyntaxBracketRrContext(this._ctx, this.state);
        this.enterRule(_localctx, 536, CqlParser.RULE_syntaxBracketRr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2216;
                this.match(CqlParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.syntaxBracketLc = function () {
        var _localctx = new SyntaxBracketLcContext(this._ctx, this.state);
        this.enterRule(_localctx, 538, CqlParser.RULE_syntaxBracketLc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2218;
                this.match(CqlParser.LC_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.syntaxBracketRc = function () {
        var _localctx = new SyntaxBracketRcContext(this._ctx, this.state);
        this.enterRule(_localctx, 540, CqlParser.RULE_syntaxBracketRc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2220;
                this.match(CqlParser.RC_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.syntaxBracketLa = function () {
        var _localctx = new SyntaxBracketLaContext(this._ctx, this.state);
        this.enterRule(_localctx, 542, CqlParser.RULE_syntaxBracketLa);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2222;
                this.match(CqlParser.OPERATOR_LT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.syntaxBracketRa = function () {
        var _localctx = new SyntaxBracketRaContext(this._ctx, this.state);
        this.enterRule(_localctx, 544, CqlParser.RULE_syntaxBracketRa);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2224;
                this.match(CqlParser.OPERATOR_GT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.syntaxBracketLs = function () {
        var _localctx = new SyntaxBracketLsContext(this._ctx, this.state);
        this.enterRule(_localctx, 546, CqlParser.RULE_syntaxBracketLs);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2226;
                this.match(CqlParser.LS_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.syntaxBracketRs = function () {
        var _localctx = new SyntaxBracketRsContext(this._ctx, this.state);
        this.enterRule(_localctx, 548, CqlParser.RULE_syntaxBracketRs);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2228;
                this.match(CqlParser.RS_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.syntaxComma = function () {
        var _localctx = new SyntaxCommaContext(this._ctx, this.state);
        this.enterRule(_localctx, 550, CqlParser.RULE_syntaxComma);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2230;
                this.match(CqlParser.COMMA);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CqlParser.prototype.syntaxColon = function () {
        var _localctx = new SyntaxColonContext(this._ctx, this.state);
        this.enterRule(_localctx, 552, CqlParser.RULE_syntaxColon);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2232;
                this.match(CqlParser.COLON);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(CqlParser, "_ATN", {
        get: function () {
            if (!CqlParser.__ATN) {
                CqlParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(CqlParser._serializedATN));
            }
            return CqlParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    CqlParser.LR_BRACKET = 1;
    CqlParser.RR_BRACKET = 2;
    CqlParser.LC_BRACKET = 3;
    CqlParser.RC_BRACKET = 4;
    CqlParser.LS_BRACKET = 5;
    CqlParser.RS_BRACKET = 6;
    CqlParser.COMMA = 7;
    CqlParser.SEMI = 8;
    CqlParser.COLON = 9;
    CqlParser.SPACE = 10;
    CqlParser.SPEC_MYSQL_COMMENT = 11;
    CqlParser.COMMENT_INPUT = 12;
    CqlParser.LINE_COMMENT = 13;
    CqlParser.DOT = 14;
    CqlParser.STAR = 15;
    CqlParser.DIVIDE = 16;
    CqlParser.MODULE = 17;
    CqlParser.PLUS = 18;
    CqlParser.MINUSMINUS = 19;
    CqlParser.MINUS = 20;
    CqlParser.DQUOTE = 21;
    CqlParser.SQUOTE = 22;
    CqlParser.K_ADD = 23;
    CqlParser.K_AGGREGATE = 24;
    CqlParser.K_ALL = 25;
    CqlParser.K_ALLOW = 26;
    CqlParser.K_ALTER = 27;
    CqlParser.K_AND = 28;
    CqlParser.K_ANY = 29;
    CqlParser.K_APPLY = 30;
    CqlParser.K_AS = 31;
    CqlParser.K_ASC = 32;
    CqlParser.K_AUTHORIZE = 33;
    CqlParser.K_BATCH = 34;
    CqlParser.K_BEGIN = 35;
    CqlParser.K_BY = 36;
    CqlParser.K_CALLED = 37;
    CqlParser.K_CLUSTERING = 38;
    CqlParser.K_COLUMNFAMILY = 39;
    CqlParser.K_COMPACT = 40;
    CqlParser.K_CONSISTENCY = 41;
    CqlParser.K_CONTAINS = 42;
    CqlParser.K_CREATE = 43;
    CqlParser.K_CUSTOM = 44;
    CqlParser.K_DELETE = 45;
    CqlParser.K_DESC = 46;
    CqlParser.K_DESCRIBE = 47;
    CqlParser.K_DISTINCT = 48;
    CqlParser.K_DROP = 49;
    CqlParser.K_DURABLE_WRITES = 50;
    CqlParser.K_EACH_QUORUM = 51;
    CqlParser.K_ENTRIES = 52;
    CqlParser.K_EXECUTE = 53;
    CqlParser.K_EXISTS = 54;
    CqlParser.K_FALSE = 55;
    CqlParser.K_FILTERING = 56;
    CqlParser.K_FINALFUNC = 57;
    CqlParser.K_FROM = 58;
    CqlParser.K_FULL = 59;
    CqlParser.K_FUNCTION = 60;
    CqlParser.K_FUNCTIONS = 61;
    CqlParser.K_GRANT = 62;
    CqlParser.K_IF = 63;
    CqlParser.K_IN = 64;
    CqlParser.K_INDEX = 65;
    CqlParser.K_INFINITY = 66;
    CqlParser.K_INITCOND = 67;
    CqlParser.K_INPUT = 68;
    CqlParser.K_INSERT = 69;
    CqlParser.K_INTO = 70;
    CqlParser.K_IS = 71;
    CqlParser.K_KEY = 72;
    CqlParser.K_KEYS = 73;
    CqlParser.K_KEYSPACE = 74;
    CqlParser.K_KEYSPACES = 75;
    CqlParser.K_LANGUAGE = 76;
    CqlParser.K_LEVEL = 77;
    CqlParser.K_LIMIT = 78;
    CqlParser.K_LOCAL_ONE = 79;
    CqlParser.K_LOCAL_QUORUM = 80;
    CqlParser.K_LOGGED = 81;
    CqlParser.K_LOGIN = 82;
    CqlParser.K_MATERIALIZED = 83;
    CqlParser.K_MODIFY = 84;
    CqlParser.K_NAN = 85;
    CqlParser.K_NORECURSIVE = 86;
    CqlParser.K_NOSUPERUSER = 87;
    CqlParser.K_NOT = 88;
    CqlParser.K_NULL = 89;
    CqlParser.K_OF = 90;
    CqlParser.K_ON = 91;
    CqlParser.K_ONE = 92;
    CqlParser.K_OPTIONS = 93;
    CqlParser.K_OR = 94;
    CqlParser.K_ORDER = 95;
    CqlParser.K_PARTITION = 96;
    CqlParser.K_PASSWORD = 97;
    CqlParser.K_PER = 98;
    CqlParser.K_PERMISSION = 99;
    CqlParser.K_PERMISSIONS = 100;
    CqlParser.K_PRIMARY = 101;
    CqlParser.K_QUORUM = 102;
    CqlParser.K_RENAME = 103;
    CqlParser.K_REPLACE = 104;
    CqlParser.K_REPLICATION = 105;
    CqlParser.K_RETURNS = 106;
    CqlParser.K_REVOKE = 107;
    CqlParser.K_ROLE = 108;
    CqlParser.K_ROLES = 109;
    CqlParser.K_SCHEMA = 110;
    CqlParser.K_SELECT = 111;
    CqlParser.K_SET = 112;
    CqlParser.K_SFUNC = 113;
    CqlParser.K_STATIC = 114;
    CqlParser.K_STORAGE = 115;
    CqlParser.K_STYPE = 116;
    CqlParser.K_SUPERUSER = 117;
    CqlParser.K_TABLE = 118;
    CqlParser.K_THREE = 119;
    CqlParser.K_TIMESTAMP = 120;
    CqlParser.K_TO = 121;
    CqlParser.K_TOKEN = 122;
    CqlParser.K_TRIGGER = 123;
    CqlParser.K_TRUE = 124;
    CqlParser.K_TRUNCATE = 125;
    CqlParser.K_TTL = 126;
    CqlParser.K_TWO = 127;
    CqlParser.K_TYPE = 128;
    CqlParser.K_UNLOGGED = 129;
    CqlParser.K_UPDATE = 130;
    CqlParser.K_USE = 131;
    CqlParser.K_USER = 132;
    CqlParser.K_USING = 133;
    CqlParser.K_UUID = 134;
    CqlParser.K_VALUES = 135;
    CqlParser.K_VIEW = 136;
    CqlParser.K_WHERE = 137;
    CqlParser.K_WITH = 138;
    CqlParser.K_WRITETIME = 139;
    CqlParser.K_ASCII = 140;
    CqlParser.K_BIGINT = 141;
    CqlParser.K_BLOB = 142;
    CqlParser.K_BOOLEAN = 143;
    CqlParser.K_COUNTER = 144;
    CqlParser.K_DATE = 145;
    CqlParser.K_DECIMAL = 146;
    CqlParser.K_DOUBLE = 147;
    CqlParser.K_FLOAT = 148;
    CqlParser.K_FROZEN = 149;
    CqlParser.K_INET = 150;
    CqlParser.K_INT = 151;
    CqlParser.K_LIST = 152;
    CqlParser.K_MAP = 153;
    CqlParser.K_SMALLINT = 154;
    CqlParser.K_TEXT = 155;
    CqlParser.K_TIMEUUID = 156;
    CqlParser.K_TIME = 157;
    CqlParser.K_TINYINT = 158;
    CqlParser.K_TUPLE = 159;
    CqlParser.K_VARCHAR = 160;
    CqlParser.K_VARINT = 161;
    CqlParser.CODE_BLOCK = 162;
    CqlParser.STRING_LITERAL = 163;
    CqlParser.DECIMAL_LITERAL = 164;
    CqlParser.FLOAT_LITERAL = 165;
    CqlParser.HEXADECIMAL_LITERAL = 166;
    CqlParser.REAL_LITERAL = 167;
    CqlParser.OBJECT_NAME = 168;
    CqlParser.UUID = 169;
    CqlParser.OPERATOR_EQ = 170;
    CqlParser.OPERATOR_LT = 171;
    CqlParser.OPERATOR_GT = 172;
    CqlParser.OPERATOR_LTE = 173;
    CqlParser.OPERATOR_GTE = 174;
    CqlParser.K_USERS = 175;
    CqlParser.RULE_root = 0;
    CqlParser.RULE_cqls = 1;
    CqlParser.RULE_statementSeparator = 2;
    CqlParser.RULE_empty = 3;
    CqlParser.RULE_cql = 4;
    CqlParser.RULE_revoke = 5;
    CqlParser.RULE_listUsers = 6;
    CqlParser.RULE_listRoles = 7;
    CqlParser.RULE_listPermissions = 8;
    CqlParser.RULE_grant = 9;
    CqlParser.RULE_priviledge = 10;
    CqlParser.RULE_resource = 11;
    CqlParser.RULE_createUser = 12;
    CqlParser.RULE_createRole = 13;
    CqlParser.RULE_createType = 14;
    CqlParser.RULE_typeMemberColumnList = 15;
    CqlParser.RULE_createTrigger = 16;
    CqlParser.RULE_createMaterializedView = 17;
    CqlParser.RULE_materializedViewWhere = 18;
    CqlParser.RULE_columnNotNullList = 19;
    CqlParser.RULE_columnNotNull = 20;
    CqlParser.RULE_materializedViewOptions = 21;
    CqlParser.RULE_createKeyspace = 22;
    CqlParser.RULE_createFunction = 23;
    CqlParser.RULE_codeBlock = 24;
    CqlParser.RULE_paramList = 25;
    CqlParser.RULE_returnMode = 26;
    CqlParser.RULE_createAggregate = 27;
    CqlParser.RULE_initCondDefinition = 28;
    CqlParser.RULE_initCondHash = 29;
    CqlParser.RULE_initCondHashItem = 30;
    CqlParser.RULE_initCondListNested = 31;
    CqlParser.RULE_initCondList = 32;
    CqlParser.RULE_orReplace = 33;
    CqlParser.RULE_alterUser = 34;
    CqlParser.RULE_userPassword = 35;
    CqlParser.RULE_userSuperUser = 36;
    CqlParser.RULE_alterType = 37;
    CqlParser.RULE_alterTypeOperation = 38;
    CqlParser.RULE_alterTypeRename = 39;
    CqlParser.RULE_alterTypeRenameList = 40;
    CqlParser.RULE_alterTypeRenameItem = 41;
    CqlParser.RULE_alterTypeAdd = 42;
    CqlParser.RULE_alterTypeAlterType = 43;
    CqlParser.RULE_alterTable = 44;
    CqlParser.RULE_alterTableOperation = 45;
    CqlParser.RULE_alterTableWith = 46;
    CqlParser.RULE_alterTableRename = 47;
    CqlParser.RULE_alterTableDropCompactStorage = 48;
    CqlParser.RULE_alterTableDropColumns = 49;
    CqlParser.RULE_alterTableDropColumnList = 50;
    CqlParser.RULE_alterTableAdd = 51;
    CqlParser.RULE_alterTableColumnDefinition = 52;
    CqlParser.RULE_alterRole = 53;
    CqlParser.RULE_roleWith = 54;
    CqlParser.RULE_roleWithOptions = 55;
    CqlParser.RULE_alterMaterializedView = 56;
    CqlParser.RULE_dropUser = 57;
    CqlParser.RULE_dropType = 58;
    CqlParser.RULE_dropMaterializedView = 59;
    CqlParser.RULE_dropAggregate = 60;
    CqlParser.RULE_dropFunction = 61;
    CqlParser.RULE_dropTrigger = 62;
    CqlParser.RULE_dropRole = 63;
    CqlParser.RULE_dropTable = 64;
    CqlParser.RULE_dropKeyspace = 65;
    CqlParser.RULE_dropIndex = 66;
    CqlParser.RULE_createTable = 67;
    CqlParser.RULE_withElement = 68;
    CqlParser.RULE_clusteringOrder = 69;
    CqlParser.RULE_tableOptions = 70;
    CqlParser.RULE_tableOptionItem = 71;
    CqlParser.RULE_tableOptionName = 72;
    CqlParser.RULE_tableOptionValue = 73;
    CqlParser.RULE_optionHash = 74;
    CqlParser.RULE_optionHashItem = 75;
    CqlParser.RULE_optionHashKey = 76;
    CqlParser.RULE_optionHashValue = 77;
    CqlParser.RULE_columnDefinitionList = 78;
    CqlParser.RULE_columnDefinition = 79;
    CqlParser.RULE_primaryKeyColumn = 80;
    CqlParser.RULE_primaryKeyElement = 81;
    CqlParser.RULE_primaryKeyDefinition = 82;
    CqlParser.RULE_singlePrimaryKey = 83;
    CqlParser.RULE_compoundKey = 84;
    CqlParser.RULE_compositeKey = 85;
    CqlParser.RULE_partitionKeyList = 86;
    CqlParser.RULE_clusteringKeyList = 87;
    CqlParser.RULE_partitionKey = 88;
    CqlParser.RULE_clusteringKey = 89;
    CqlParser.RULE_applyBatch = 90;
    CqlParser.RULE_beginBatch = 91;
    CqlParser.RULE_batchType = 92;
    CqlParser.RULE_alterKeyspace = 93;
    CqlParser.RULE_replicationList = 94;
    CqlParser.RULE_replicationListItem = 95;
    CqlParser.RULE_durableWrites = 96;
    CqlParser.RULE_use = 97;
    CqlParser.RULE_truncate = 98;
    CqlParser.RULE_createIndex = 99;
    CqlParser.RULE_indexName = 100;
    CqlParser.RULE_indexColumnSpec = 101;
    CqlParser.RULE_indexKeysSpec = 102;
    CqlParser.RULE_indexEntriesSSpec = 103;
    CqlParser.RULE_indexFullSpec = 104;
    CqlParser.RULE_delete = 105;
    CqlParser.RULE_deleteColumnList = 106;
    CqlParser.RULE_deleteColumnItem = 107;
    CqlParser.RULE_update = 108;
    CqlParser.RULE_ifSpec = 109;
    CqlParser.RULE_ifConditionList = 110;
    CqlParser.RULE_ifCondition = 111;
    CqlParser.RULE_assignments = 112;
    CqlParser.RULE_assignmentElement = 113;
    CqlParser.RULE_assignmentSet = 114;
    CqlParser.RULE_assignmentMap = 115;
    CqlParser.RULE_assignmentList = 116;
    CqlParser.RULE_insert = 117;
    CqlParser.RULE_usingTtlTimestamp = 118;
    CqlParser.RULE_timestamp = 119;
    CqlParser.RULE_ttl = 120;
    CqlParser.RULE_usingTimestampSpec = 121;
    CqlParser.RULE_ifNotExist = 122;
    CqlParser.RULE_ifExist = 123;
    CqlParser.RULE_insertValuesSpec = 124;
    CqlParser.RULE_insertColumnSpec = 125;
    CqlParser.RULE_columnList = 126;
    CqlParser.RULE_expressionList = 127;
    CqlParser.RULE_select = 128;
    CqlParser.RULE_allowFilteringSpec = 129;
    CqlParser.RULE_limitSpec = 130;
    CqlParser.RULE_fromSpec = 131;
    CqlParser.RULE_fromSpecElement = 132;
    CqlParser.RULE_orderSpec = 133;
    CqlParser.RULE_orderSpecElement = 134;
    CqlParser.RULE_whereSpec = 135;
    CqlParser.RULE_distinctSpec = 136;
    CqlParser.RULE_selectElements = 137;
    CqlParser.RULE_selectElement = 138;
    CqlParser.RULE_relationElements = 139;
    CqlParser.RULE_relationElement = 140;
    CqlParser.RULE_relalationContains = 141;
    CqlParser.RULE_relalationContainsKey = 142;
    CqlParser.RULE_functionCall = 143;
    CqlParser.RULE_functionArgs = 144;
    CqlParser.RULE_constant = 145;
    CqlParser.RULE_decimalLiteral = 146;
    CqlParser.RULE_floatLiteral = 147;
    CqlParser.RULE_stringLiteral = 148;
    CqlParser.RULE_booleanLiteral = 149;
    CqlParser.RULE_hexadecimalLiteral = 150;
    CqlParser.RULE_keyspace = 151;
    CqlParser.RULE_table = 152;
    CqlParser.RULE_column = 153;
    CqlParser.RULE_dataType = 154;
    CqlParser.RULE_dataTypeName = 155;
    CqlParser.RULE_dataTypeDefinition = 156;
    CqlParser.RULE_orderDirection = 157;
    CqlParser.RULE_role = 158;
    CqlParser.RULE_trigger = 159;
    CqlParser.RULE_triggerClass = 160;
    CqlParser.RULE_materializedView = 161;
    CqlParser.RULE_type = 162;
    CqlParser.RULE_aggregate = 163;
    CqlParser.RULE_function = 164;
    CqlParser.RULE_language = 165;
    CqlParser.RULE_user = 166;
    CqlParser.RULE_password = 167;
    CqlParser.RULE_hashKey = 168;
    CqlParser.RULE_param = 169;
    CqlParser.RULE_paramName = 170;
    CqlParser.RULE_kwAdd = 171;
    CqlParser.RULE_kwAggregate = 172;
    CqlParser.RULE_kwAll = 173;
    CqlParser.RULE_kwAllPermissions = 174;
    CqlParser.RULE_kwAllow = 175;
    CqlParser.RULE_kwAlter = 176;
    CqlParser.RULE_kwAnd = 177;
    CqlParser.RULE_kwApply = 178;
    CqlParser.RULE_kwAs = 179;
    CqlParser.RULE_kwAsc = 180;
    CqlParser.RULE_kwAuthorize = 181;
    CqlParser.RULE_kwBatch = 182;
    CqlParser.RULE_kwBegin = 183;
    CqlParser.RULE_kwBy = 184;
    CqlParser.RULE_kwCalled = 185;
    CqlParser.RULE_kwClustering = 186;
    CqlParser.RULE_kwCompact = 187;
    CqlParser.RULE_kwContains = 188;
    CqlParser.RULE_kwCreate = 189;
    CqlParser.RULE_kwDelete = 190;
    CqlParser.RULE_kwDesc = 191;
    CqlParser.RULE_kwDescibe = 192;
    CqlParser.RULE_kwDistinct = 193;
    CqlParser.RULE_kwDrop = 194;
    CqlParser.RULE_kwDurableWrites = 195;
    CqlParser.RULE_kwEntries = 196;
    CqlParser.RULE_kwExecute = 197;
    CqlParser.RULE_kwExists = 198;
    CqlParser.RULE_kwFiltering = 199;
    CqlParser.RULE_kwFinalfunc = 200;
    CqlParser.RULE_kwFrom = 201;
    CqlParser.RULE_kwFull = 202;
    CqlParser.RULE_kwFunction = 203;
    CqlParser.RULE_kwFunctions = 204;
    CqlParser.RULE_kwGrant = 205;
    CqlParser.RULE_kwIf = 206;
    CqlParser.RULE_kwIn = 207;
    CqlParser.RULE_kwIndex = 208;
    CqlParser.RULE_kwInitcond = 209;
    CqlParser.RULE_kwInput = 210;
    CqlParser.RULE_kwInsert = 211;
    CqlParser.RULE_kwInto = 212;
    CqlParser.RULE_kwIs = 213;
    CqlParser.RULE_kwKey = 214;
    CqlParser.RULE_kwKeys = 215;
    CqlParser.RULE_kwKeyspace = 216;
    CqlParser.RULE_kwKeyspaces = 217;
    CqlParser.RULE_kwLanguage = 218;
    CqlParser.RULE_kwLimit = 219;
    CqlParser.RULE_kwList = 220;
    CqlParser.RULE_kwLogged = 221;
    CqlParser.RULE_kwLogin = 222;
    CqlParser.RULE_kwMaterialized = 223;
    CqlParser.RULE_kwModify = 224;
    CqlParser.RULE_kwNosuperuser = 225;
    CqlParser.RULE_kwNorecursive = 226;
    CqlParser.RULE_kwNot = 227;
    CqlParser.RULE_kwNull = 228;
    CqlParser.RULE_kwOf = 229;
    CqlParser.RULE_kwOn = 230;
    CqlParser.RULE_kwOptions = 231;
    CqlParser.RULE_kwOr = 232;
    CqlParser.RULE_kwOrder = 233;
    CqlParser.RULE_kwPassword = 234;
    CqlParser.RULE_kwPrimary = 235;
    CqlParser.RULE_kwRename = 236;
    CqlParser.RULE_kwReplace = 237;
    CqlParser.RULE_kwReplication = 238;
    CqlParser.RULE_kwReturns = 239;
    CqlParser.RULE_kwRole = 240;
    CqlParser.RULE_kwRoles = 241;
    CqlParser.RULE_kwSelect = 242;
    CqlParser.RULE_kwSet = 243;
    CqlParser.RULE_kwSfunc = 244;
    CqlParser.RULE_kwStorage = 245;
    CqlParser.RULE_kwStype = 246;
    CqlParser.RULE_kwSuperuser = 247;
    CqlParser.RULE_kwTable = 248;
    CqlParser.RULE_kwTimestamp = 249;
    CqlParser.RULE_kwTo = 250;
    CqlParser.RULE_kwTrigger = 251;
    CqlParser.RULE_kwTruncate = 252;
    CqlParser.RULE_kwTtl = 253;
    CqlParser.RULE_kwType = 254;
    CqlParser.RULE_kwUnlogged = 255;
    CqlParser.RULE_kwUpdate = 256;
    CqlParser.RULE_kwUse = 257;
    CqlParser.RULE_kwUser = 258;
    CqlParser.RULE_kwUsers = 259;
    CqlParser.RULE_kwUsing = 260;
    CqlParser.RULE_kwValues = 261;
    CqlParser.RULE_kwView = 262;
    CqlParser.RULE_kwWhere = 263;
    CqlParser.RULE_kwWith = 264;
    CqlParser.RULE_kwRevoke = 265;
    CqlParser.RULE_eof = 266;
    CqlParser.RULE_syntaxBracketLr = 267;
    CqlParser.RULE_syntaxBracketRr = 268;
    CqlParser.RULE_syntaxBracketLc = 269;
    CqlParser.RULE_syntaxBracketRc = 270;
    CqlParser.RULE_syntaxBracketLa = 271;
    CqlParser.RULE_syntaxBracketRa = 272;
    CqlParser.RULE_syntaxBracketLs = 273;
    CqlParser.RULE_syntaxBracketRs = 274;
    CqlParser.RULE_syntaxComma = 275;
    CqlParser.RULE_syntaxColon = 276;
    // tslint:disable:no-trailing-whitespace
    CqlParser.ruleNames = [
        "root", "cqls", "statementSeparator", "empty", "cql", "revoke", "listUsers",
        "listRoles", "listPermissions", "grant", "priviledge", "resource", "createUser",
        "createRole", "createType", "typeMemberColumnList", "createTrigger", "createMaterializedView",
        "materializedViewWhere", "columnNotNullList", "columnNotNull", "materializedViewOptions",
        "createKeyspace", "createFunction", "codeBlock", "paramList", "returnMode",
        "createAggregate", "initCondDefinition", "initCondHash", "initCondHashItem",
        "initCondListNested", "initCondList", "orReplace", "alterUser", "userPassword",
        "userSuperUser", "alterType", "alterTypeOperation", "alterTypeRename",
        "alterTypeRenameList", "alterTypeRenameItem", "alterTypeAdd", "alterTypeAlterType",
        "alterTable", "alterTableOperation", "alterTableWith", "alterTableRename",
        "alterTableDropCompactStorage", "alterTableDropColumns", "alterTableDropColumnList",
        "alterTableAdd", "alterTableColumnDefinition", "alterRole", "roleWith",
        "roleWithOptions", "alterMaterializedView", "dropUser", "dropType", "dropMaterializedView",
        "dropAggregate", "dropFunction", "dropTrigger", "dropRole", "dropTable",
        "dropKeyspace", "dropIndex", "createTable", "withElement", "clusteringOrder",
        "tableOptions", "tableOptionItem", "tableOptionName", "tableOptionValue",
        "optionHash", "optionHashItem", "optionHashKey", "optionHashValue", "columnDefinitionList",
        "columnDefinition", "primaryKeyColumn", "primaryKeyElement", "primaryKeyDefinition",
        "singlePrimaryKey", "compoundKey", "compositeKey", "partitionKeyList",
        "clusteringKeyList", "partitionKey", "clusteringKey", "applyBatch", "beginBatch",
        "batchType", "alterKeyspace", "replicationList", "replicationListItem",
        "durableWrites", "use", "truncate", "createIndex", "indexName", "indexColumnSpec",
        "indexKeysSpec", "indexEntriesSSpec", "indexFullSpec", "delete", "deleteColumnList",
        "deleteColumnItem", "update", "ifSpec", "ifConditionList", "ifCondition",
        "assignments", "assignmentElement", "assignmentSet", "assignmentMap",
        "assignmentList", "insert", "usingTtlTimestamp", "timestamp", "ttl", "usingTimestampSpec",
        "ifNotExist", "ifExist", "insertValuesSpec", "insertColumnSpec", "columnList",
        "expressionList", "select", "allowFilteringSpec", "limitSpec", "fromSpec",
        "fromSpecElement", "orderSpec", "orderSpecElement", "whereSpec", "distinctSpec",
        "selectElements", "selectElement", "relationElements", "relationElement",
        "relalationContains", "relalationContainsKey", "functionCall", "functionArgs",
        "constant", "decimalLiteral", "floatLiteral", "stringLiteral", "booleanLiteral",
        "hexadecimalLiteral", "keyspace", "table", "column", "dataType", "dataTypeName",
        "dataTypeDefinition", "orderDirection", "role", "trigger", "triggerClass",
        "materializedView", "type", "aggregate", "function", "language", "user",
        "password", "hashKey", "param", "paramName", "kwAdd", "kwAggregate", "kwAll",
        "kwAllPermissions", "kwAllow", "kwAlter", "kwAnd", "kwApply", "kwAs",
        "kwAsc", "kwAuthorize", "kwBatch", "kwBegin", "kwBy", "kwCalled", "kwClustering",
        "kwCompact", "kwContains", "kwCreate", "kwDelete", "kwDesc", "kwDescibe",
        "kwDistinct", "kwDrop", "kwDurableWrites", "kwEntries", "kwExecute", "kwExists",
        "kwFiltering", "kwFinalfunc", "kwFrom", "kwFull", "kwFunction", "kwFunctions",
        "kwGrant", "kwIf", "kwIn", "kwIndex", "kwInitcond", "kwInput", "kwInsert",
        "kwInto", "kwIs", "kwKey", "kwKeys", "kwKeyspace", "kwKeyspaces", "kwLanguage",
        "kwLimit", "kwList", "kwLogged", "kwLogin", "kwMaterialized", "kwModify",
        "kwNosuperuser", "kwNorecursive", "kwNot", "kwNull", "kwOf", "kwOn", "kwOptions",
        "kwOr", "kwOrder", "kwPassword", "kwPrimary", "kwRename", "kwReplace",
        "kwReplication", "kwReturns", "kwRole", "kwRoles", "kwSelect", "kwSet",
        "kwSfunc", "kwStorage", "kwStype", "kwSuperuser", "kwTable", "kwTimestamp",
        "kwTo", "kwTrigger", "kwTruncate", "kwTtl", "kwType", "kwUnlogged", "kwUpdate",
        "kwUse", "kwUser", "kwUsers", "kwUsing", "kwValues", "kwView", "kwWhere",
        "kwWith", "kwRevoke", "eof", "syntaxBracketLr", "syntaxBracketRr", "syntaxBracketLc",
        "syntaxBracketRc", "syntaxBracketLa", "syntaxBracketRa", "syntaxBracketLs",
        "syntaxBracketRs", "syntaxComma", "syntaxColon",
    ];
    CqlParser._LITERAL_NAMES = [
        undefined, "'('", "')'", "'{'", "'}'", "'['", "']'", "','", "';'", "':'",
        undefined, undefined, undefined, undefined, "'.'", "'*'", "'/'", "'%'",
        "'+'", "'--'", "'-'", "'\"'", "'''",
    ];
    CqlParser._SYMBOLIC_NAMES = [
        undefined, "LR_BRACKET", "RR_BRACKET", "LC_BRACKET", "RC_BRACKET", "LS_BRACKET",
        "RS_BRACKET", "COMMA", "SEMI", "COLON", "SPACE", "SPEC_MYSQL_COMMENT",
        "COMMENT_INPUT", "LINE_COMMENT", "DOT", "STAR", "DIVIDE", "MODULE", "PLUS",
        "MINUSMINUS", "MINUS", "DQUOTE", "SQUOTE", "K_ADD", "K_AGGREGATE", "K_ALL",
        "K_ALLOW", "K_ALTER", "K_AND", "K_ANY", "K_APPLY", "K_AS", "K_ASC", "K_AUTHORIZE",
        "K_BATCH", "K_BEGIN", "K_BY", "K_CALLED", "K_CLUSTERING", "K_COLUMNFAMILY",
        "K_COMPACT", "K_CONSISTENCY", "K_CONTAINS", "K_CREATE", "K_CUSTOM", "K_DELETE",
        "K_DESC", "K_DESCRIBE", "K_DISTINCT", "K_DROP", "K_DURABLE_WRITES", "K_EACH_QUORUM",
        "K_ENTRIES", "K_EXECUTE", "K_EXISTS", "K_FALSE", "K_FILTERING", "K_FINALFUNC",
        "K_FROM", "K_FULL", "K_FUNCTION", "K_FUNCTIONS", "K_GRANT", "K_IF", "K_IN",
        "K_INDEX", "K_INFINITY", "K_INITCOND", "K_INPUT", "K_INSERT", "K_INTO",
        "K_IS", "K_KEY", "K_KEYS", "K_KEYSPACE", "K_KEYSPACES", "K_LANGUAGE",
        "K_LEVEL", "K_LIMIT", "K_LOCAL_ONE", "K_LOCAL_QUORUM", "K_LOGGED", "K_LOGIN",
        "K_MATERIALIZED", "K_MODIFY", "K_NAN", "K_NORECURSIVE", "K_NOSUPERUSER",
        "K_NOT", "K_NULL", "K_OF", "K_ON", "K_ONE", "K_OPTIONS", "K_OR", "K_ORDER",
        "K_PARTITION", "K_PASSWORD", "K_PER", "K_PERMISSION", "K_PERMISSIONS",
        "K_PRIMARY", "K_QUORUM", "K_RENAME", "K_REPLACE", "K_REPLICATION", "K_RETURNS",
        "K_REVOKE", "K_ROLE", "K_ROLES", "K_SCHEMA", "K_SELECT", "K_SET", "K_SFUNC",
        "K_STATIC", "K_STORAGE", "K_STYPE", "K_SUPERUSER", "K_TABLE", "K_THREE",
        "K_TIMESTAMP", "K_TO", "K_TOKEN", "K_TRIGGER", "K_TRUE", "K_TRUNCATE",
        "K_TTL", "K_TWO", "K_TYPE", "K_UNLOGGED", "K_UPDATE", "K_USE", "K_USER",
        "K_USING", "K_UUID", "K_VALUES", "K_VIEW", "K_WHERE", "K_WITH", "K_WRITETIME",
        "K_ASCII", "K_BIGINT", "K_BLOB", "K_BOOLEAN", "K_COUNTER", "K_DATE", "K_DECIMAL",
        "K_DOUBLE", "K_FLOAT", "K_FROZEN", "K_INET", "K_INT", "K_LIST", "K_MAP",
        "K_SMALLINT", "K_TEXT", "K_TIMEUUID", "K_TIME", "K_TINYINT", "K_TUPLE",
        "K_VARCHAR", "K_VARINT", "CODE_BLOCK", "STRING_LITERAL", "DECIMAL_LITERAL",
        "FLOAT_LITERAL", "HEXADECIMAL_LITERAL", "REAL_LITERAL", "OBJECT_NAME",
        "UUID", "OPERATOR_EQ", "OPERATOR_LT", "OPERATOR_GT", "OPERATOR_LTE", "OPERATOR_GTE",
        "K_USERS",
    ];
    CqlParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(CqlParser._LITERAL_NAMES, CqlParser._SYMBOLIC_NAMES, []);
    CqlParser._serializedATNSegments = 4;
    CqlParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xB1\u08BD\x04" +
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
        "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
        "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
        "`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
        "i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
        "r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
        "{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
        "\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
        "\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
        "\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
        "\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
        "\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
        "\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
        "\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
        "\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
        "\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
        "\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3" +
        "\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8" +
        "\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD" +
        "\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x04\xC1\t\xC1\x04\xC2\t\xC2" +
        "\x04\xC3\t\xC3\x04\xC4\t\xC4\x04\xC5\t\xC5\x04\xC6\t\xC6\x04\xC7\t\xC7" +
        "\x04\xC8\t\xC8\x04\xC9\t\xC9\x04\xCA\t\xCA\x04\xCB\t\xCB\x04\xCC\t\xCC" +
        "\x04\xCD\t\xCD\x04\xCE\t\xCE\x04\xCF\t\xCF\x04\xD0\t\xD0\x04\xD1\t\xD1" +
        "\x04\xD2\t\xD2\x04\xD3\t\xD3\x04\xD4\t\xD4\x04\xD5\t\xD5\x04\xD6\t\xD6" +
        "\x04\xD7\t\xD7\x04\xD8\t\xD8\x04\xD9\t\xD9\x04\xDA\t\xDA\x04\xDB\t\xDB" +
        "\x04\xDC\t\xDC\x04\xDD\t\xDD\x04\xDE\t\xDE\x04\xDF\t\xDF\x04\xE0\t\xE0" +
        "\x04\xE1\t\xE1\x04\xE2\t\xE2\x04\xE3\t\xE3\x04\xE4\t\xE4\x04\xE5\t\xE5" +
        "\x04\xE6\t\xE6\x04\xE7\t\xE7\x04\xE8\t\xE8\x04\xE9\t\xE9\x04\xEA\t\xEA" +
        "\x04\xEB\t\xEB\x04\xEC\t\xEC\x04\xED\t\xED\x04\xEE\t\xEE\x04\xEF\t\xEF" +
        "\x04\xF0\t\xF0\x04\xF1\t\xF1\x04\xF2\t\xF2\x04\xF3\t\xF3\x04\xF4\t\xF4" +
        "\x04\xF5\t\xF5\x04\xF6\t\xF6\x04\xF7\t\xF7\x04\xF8\t\xF8\x04\xF9\t\xF9" +
        "\x04\xFA\t\xFA\x04\xFB\t\xFB\x04\xFC\t\xFC\x04\xFD\t\xFD\x04\xFE\t\xFE" +
        "\x04\xFF\t\xFF\x04\u0100\t\u0100\x04\u0101\t\u0101\x04\u0102\t\u0102\x04" +
        "\u0103\t\u0103\x04\u0104\t\u0104\x04\u0105\t\u0105\x04\u0106\t\u0106\x04" +
        "\u0107\t\u0107\x04\u0108\t\u0108\x04\u0109\t\u0109\x04\u010A\t\u010A\x04" +
        "\u010B\t\u010B\x04\u010C\t\u010C\x04\u010D\t\u010D\x04\u010E\t\u010E\x04" +
        "\u010F\t\u010F\x04\u0110\t\u0110\x04\u0111\t\u0111\x04\u0112\t\u0112\x04" +
        "\u0113\t\u0113\x04\u0114\t\u0114\x04\u0115\t\u0115\x04\u0116\t\u0116\x03" +
        "\x02\x05\x02\u022E\n\x02\x03\x02\x05\x02\u0231\n\x02\x03\x02\x03\x02\x03" +
        "\x03\x03\x03\x05\x03\u0237\n\x03\x03\x03\x03\x03\x03\x03\x07\x03\u023C" +
        "\n\x03\f\x03\x0E\x03\u023F\v\x03\x03\x03\x03\x03\x05\x03\u0243\n\x03\x03" +
        "\x03\x05\x03\u0246\n\x03\x03\x03\x05\x03\u0249\n\x03\x03\x04\x03\x04\x03" +
        "\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
        "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
        "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
        "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
        "\x06\x03\x06\x03\x06\x05\x06\u0274\n\x06\x03\x07\x03\x07\x03\x07\x03\x07" +
        "\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03" +
        "\t\x05\t\u0285\n\t\x03\t\x05\t\u0288\n\t\x03\n\x03\n\x03\n\x03\n\x03\n" +
        "\x05\n\u028F\n\n\x03\n\x03\n\x03\n\x05\n\u0294\n\n\x03\v\x03\v\x03\v\x03" +
        "\v\x03\v\x03\v\x03\v\x03\f\x03\f\x05\f\u029F\n\f\x03\f\x03\f\x03\f\x03" +
        "\f\x03\f\x03\f\x03\f\x03\f\x05\f\u02A9\n\f\x03\r\x03\r\x03\r\x03\r\x03" +
        "\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u02B8\n\r\x03" +
        "\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u02C3\n\r\x03" +
        "\r\x03\r\x03\r\x05\r\u02C8\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
        "\r\x05\r\u02D1\n\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u02D6\n\x0E\x03\x0E" +
        "\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u02DE\n\x0E\x03\x0F\x03" +
        "\x0F\x03\x0F\x05\x0F\u02E3\n\x0F\x03\x0F\x03\x0F\x05\x0F\u02E7\n\x0F\x03" +
        "\x10\x03\x10\x03\x10\x05\x10\u02EC\n\x10\x03\x10\x03\x10\x03\x10\x05\x10" +
        "\u02F1\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03" +
        "\x11\x03\x11\x03\x11\x03\x11\x07\x11\u02FE\n\x11\f\x11\x0E\x11\u0301\v" +
        "\x11\x03\x12\x03\x12\x03\x12\x05\x12\u0306\n\x12\x03\x12\x03\x12\x03\x12" +
        "\x05\x12\u030B\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03" +
        "\x13\x03\x13\x05\x13\u0315\n\x13\x03\x13\x03\x13\x03\x13\x05\x13\u031A" +
        "\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
        "\x05\x13\u0324\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
        "\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0330\n\x13\x03\x14\x03\x14\x03\x14" +
        "\x03\x14\x03\x14\x05\x14\u0337\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x07" +
        "\x15\u033D\n\x15\f\x15\x0E\x15\u0340\v\x15\x03\x16\x03\x16\x03\x16\x03" +
        "\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u034D" +
        "\n\x17\x03\x18\x03\x18\x03\x18\x05\x18\u0352\n\x18\x03\x18\x03\x18\x03" +
        "\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u035E" +
        "\n\x18\x03\x19\x03\x19\x05\x19\u0362\n\x19\x03\x19\x03\x19\x05\x19\u0366" +
        "\n\x19\x03\x19\x03\x19\x03\x19\x05\x19\u036B\n\x19\x03\x19\x03\x19\x03" +
        "\x19\x05\x19\u0370\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
        "\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
        "\x07\x1B\u0381\n\x1B\f\x1B\x0E\x1B\u0384\v\x1B\x03\x1C\x03\x1C\x03\x1C" +
        "\x03\x1C\x05\x1C\u038A\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03" +
        "\x1D\x05\x1D\u0392\n\x1D\x03\x1D\x03\x1D\x05\x1D\u0396\n\x1D\x03\x1D\x03" +
        "\x1D\x03\x1D\x05\x1D\u039B\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
        "\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E" +
        "\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u03AE\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03" +
        "\x1F\x03\x1F\x07\x1F\u03B5\n\x1F\f\x1F\x0E\x1F\u03B8\v\x1F\x03\x1F\x03" +
        "\x1F\x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x07!\u03C6\n!\f" +
        "!\x0E!\u03C9\v!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x07\"\u03D2\n" +
        "\"\f\"\x0E\"\u03D5\v\"\x03\"\x03\"\x03#\x03#\x03#\x03$\x03$\x03$\x03$" +
        "\x03$\x03$\x05$\u03E2\n$\x03%\x03%\x03%\x03&\x03&\x05&\u03E9\n&\x03\'" +
        "\x03\'\x03\'\x03\'\x03\'\x05\'\u03F0\n\'\x03\'\x03\'\x03\'\x03(\x03(\x03" +
        "(\x05(\u03F8\n(\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x07*\u0401\n*\f*\x0E" +
        "*\u0404\v*\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x07" +
        ",\u0411\n,\f,\x0E,\u0414\v,\x03-\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x03" +
        ".\x03.\x05.\u0420\n.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x05" +
        "/\u042B\n/\x030\x030\x030\x031\x031\x031\x031\x031\x032\x032\x032\x03" +
        "2\x033\x033\x033\x034\x034\x034\x034\x074\u0440\n4\f4\x0E4\u0443\v4\x03" +
        "5\x035\x035\x036\x036\x036\x036\x036\x036\x076\u044E\n6\f6\x0E6\u0451" +
        "\v6\x037\x037\x037\x037\x057\u0457\n7\x038\x038\x038\x038\x038\x078\u045E" +
        "\n8\f8\x0E8\u0461\v8\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03" +
        "9\x039\x039\x039\x039\x039\x039\x059\u0473\n9\x03:\x03:\x03:\x03:\x03" +
        ":\x03:\x05:\u047B\n:\x03:\x03:\x03:\x03:\x05:\u0481\n:\x03;\x03;\x03;" +
        "\x05;\u0486\n;\x03;\x03;\x03<\x03<\x03<\x05<\u048D\n<\x03<\x03<\x03<\x05" +
        "<\u0492\n<\x03<\x03<\x03=\x03=\x03=\x03=\x05=\u049A\n=\x03=\x03=\x03=" +
        "\x05=\u049F\n=\x03=\x03=\x03>\x03>\x03>\x05>\u04A6\n>\x03>\x03>\x03>\x05" +
        ">\u04AB\n>\x03>\x03>\x03?\x03?\x03?\x05?\u04B2\n?\x03?\x03?\x03?\x05?" +
        "\u04B7\n?\x03?\x03?\x03@\x03@\x03@\x05@\u04BE\n@\x03@\x03@\x03@\x03@\x03" +
        "@\x05@\u04C5\n@\x03@\x03@\x03A\x03A\x03A\x05A\u04CC\nA\x03A\x03A\x03B" +
        "\x03B\x03B\x05B\u04D3\nB\x03B\x03B\x03B\x05B\u04D8\nB\x03B\x03B\x03C\x03" +
        "C\x03C\x05C\u04DF\nC\x03C\x03C\x03D\x03D\x03D\x05D\u04E6\nD\x03D\x03D" +
        "\x03D\x05D\u04EB\nD\x03D\x03D\x03E\x03E\x03E\x05E\u04F2\nE\x03E\x03E\x03" +
        "E\x05E\u04F7\nE\x03E\x03E\x03E\x03E\x03E\x05E\u04FE\nE\x03F\x03F\x05F" +
        "\u0502\nF\x03F\x05F\u0505\nF\x03G\x03G\x03G\x03G\x03G\x03G\x05G\u050D" +
        "\nG\x03G\x03G\x03H\x03H\x03H\x03H\x07H\u0515\nH\fH\x0EH\u0518\vH\x03I" +
        "\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u0522\nI\x03J\x03J\x03K\x03K" +
        "\x05K\u0528\nK\x03L\x03L\x03L\x03L\x03L\x07L\u052F\nL\fL\x0EL\u0532\v" +
        "L\x03L\x03L\x03M\x03M\x03M\x03M\x03N\x03N\x03O\x03O\x05O\u053E\nO\x03" +
        "P\x03P\x03P\x03P\x07P\u0544\nP\fP\x0EP\u0547\vP\x03P\x03P\x03P\x05P\u054C" +
        "\nP\x03Q\x03Q\x03Q\x05Q\u0551\nQ\x03R\x03R\x03R\x03S\x03S\x03S\x03S\x03" +
        "S\x03S\x03T\x03T\x03T\x05T\u055F\nT\x03U\x03U\x03V\x03V\x03V\x03V\x03" +
        "W\x03W\x03W\x03W\x03W\x03W\x03X\x03X\x03X\x03X\x07X\u0571\nX\fX\x0EX\u0574" +
        "\vX\x03Y\x03Y\x03Y\x03Y\x07Y\u057A\nY\fY\x0EY\u057D\vY\x03Z\x03Z\x03[" +
        "\x03[\x03\\\x03\\\x03\\\x03]\x03]\x05]\u0588\n]\x03]\x03]\x05]\u058C\n" +
        "]\x03^\x03^\x05^\u0590\n^\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03" +
        "_\x03_\x03_\x03_\x05_\u059E\n_\x03`\x03`\x03`\x03`\x07`\u05A4\n`\f`\x0E" +
        "`\u05A7\v`\x03a\x03a\x03a\x03a\x03a\x03a\x05a\u05AF\na\x03b\x03b\x03b" +
        "\x03b\x03c\x03c\x03c\x03d\x03d\x05d\u05BA\nd\x03d\x03d\x03d\x05d\u05BF" +
        "\nd\x03d\x03d\x03e\x03e\x03e\x05e\u05C6\ne\x03e\x05e\u05C9\ne\x03e\x03" +
        "e\x03e\x03e\x05e\u05CF\ne\x03e\x03e\x03e\x03e\x03e\x03f\x03f\x05f\u05D8" +
        "\nf\x03g\x03g\x03g\x03g\x05g\u05DE\ng\x03h\x03h\x03h\x03h\x03h\x03i\x03" +
        "i\x03i\x03i\x03i\x03j\x03j\x03j\x03j\x03j\x03k\x05k\u05F0\nk\x03k\x03" +
        "k\x05k\u05F4\nk\x03k\x03k\x05k\u05F8\nk\x03k\x03k\x03k\x05k\u05FD\nk\x03" +
        "l\x03l\x03l\x03l\x07l\u0603\nl\fl\x0El\u0606\vl\x03m\x03m\x03m\x03m\x03" +
        "m\x05m\u060D\nm\x03m\x03m\x05m\u0611\nm\x03n\x05n\u0614\nn\x03n\x03n\x03" +
        "n\x03n\x05n\u061A\nn\x03n\x03n\x05n\u061E\nn\x03n\x03n\x03n\x03n\x03n" +
        "\x05n\u0625\nn\x03o\x03o\x03o\x03p\x03p\x03p\x03p\x07p\u062E\np\fp\x0E" +
        "p\u0631\vp\x03q\x03q\x03q\x03q\x03r\x03r\x03r\x03r\x07r\u063B\nr\fr\x0E" +
        "r\u063E\vr\x03s\x03s\x03s\x03s\x03s\x03s\x05s\u0646\ns\x03s\x03s\x03s" +
        "\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03" +
        "s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03" +
        "s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03" +
        "s\x05s\u0675\ns\x03t\x03t\x03t\x03t\x03t\x07t\u067C\nt\ft\x0Et\u067F\v" +
        "t\x03t\x03t\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x07u\u068C\n" +
        "u\fu\x0Eu\u068F\vu\x03u\x03u\x03v\x03v\x03v\x03v\x03v\x07v\u0698\nv\f" +
        "v\x0Ev\u069B\vv\x03v\x03v\x03w\x03w\x05w\u06A1\nw\x03w\x03w\x03w\x03w" +
        "\x03w\x03w\x05w\u06A9\nw\x03w\x03w\x03w\x03w\x03w\x05w\u06B0\nw\x03w\x05" +
        "w\u06B3\nw\x03x\x03x\x03x\x03x\x03x\x03x\x03x\x03x\x03x\x03x\x03x\x03" +
        "x\x03x\x03x\x03x\x03x\x05x\u06C5\nx\x03y\x03y\x03y\x03z\x03z\x03z\x03" +
        "{\x03{\x03{\x03|\x03|\x03|\x03|\x03}\x03}\x03}\x03~\x03~\x03~\x03~\x03" +
        "~\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x80\x03\x80\x03\x80\x03\x80\x07" +
        "\x80\u06E4\n\x80\f\x80\x0E\x80\u06E7\v\x80\x03\x81\x03\x81\x03\x81\x03" +
        "\x81\x05\x81\u06ED\n\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x05\x81" +
        "\u06F4\n\x81\x07\x81\u06F6\n\x81\f\x81\x0E\x81\u06F9\v\x81\x03\x82\x03" +
        "\x82\x03\x82\x05\x82\u06FE\n\x82\x03\x82\x03\x82\x03\x82\x05\x82\u0703" +
        "\n\x82\x03\x82\x05\x82\u0706\n\x82\x03\x82\x05\x82\u0709\n\x82\x03\x82" +
        "\x05\x82\u070C\n\x82\x03\x83\x03\x83\x03\x83\x03\x84\x03\x84\x03\x84\x03" +
        "\x85\x03\x85\x03\x85\x03\x86\x03\x86\x03\x86\x03\x86\x05\x86\u071B\n\x86" +
        "\x03\x87\x03\x87\x03\x87\x03\x87\x03\x88\x03\x88\x03\x88\x05\x88\u0724" +
        "\n\x88\x03\x89\x03\x89\x03\x89\x03\x8A\x03\x8A\x03\x8B\x03\x8B\x05\x8B" +
        "\u072D\n\x8B\x03\x8B\x03\x8B\x03\x8B\x07\x8B\u0732\n\x8B\f\x8B\x0E\x8B" +
        "\u0735\v\x8B\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x05" +
        "\x8C\u073E\n\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x05\x8C\u0744\n\x8C\x05" +
        "\x8C\u0746\n\x8C\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x07\x8D\u074C\n\x8D\f" +
        "\x8D\x0E\x8D\u074F\v\x8D\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E" +
        "\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E" +
        "\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x05\x8E\u0765\n\x8E\x03\x8E\x03" +
        "\x8E\x03\x8E\x03\x8E\x05\x8E\u076B\n\x8E\x03\x8F\x03\x8F\x03\x8F\x03\x8F" +
        "\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x91\x03\x91\x03\x91" +
        "\x03\x91\x03\x91\x03\x91\x03\x91\x05\x91\u077E\n\x91\x03\x91\x05\x91\u0781" +
        "\n\x91\x03\x92\x03\x92\x03\x92\x05\x92\u0786\n\x92\x03\x92\x03\x92\x03" +
        "\x92\x03\x92\x05\x92\u078C\n\x92\x07\x92\u078E\n\x92\f\x92\x0E\x92\u0791" +
        "\v\x92\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x05\x93\u0799\n" +
        "\x93\x03\x94\x03\x94\x03\x95\x03\x95\x03\x96\x03\x96\x03\x97\x03\x97\x03" +
        "\x98\x03\x98\x03\x99\x03\x99\x03\x99\x03\x99\x05\x99\u07A9\n\x99\x03\x9A" +
        "\x03\x9A\x03\x9A\x03\x9A\x05\x9A\u07AF\n\x9A\x03\x9B\x03\x9B\x03\x9B\x03" +
        "\x9B\x05\x9B\u07B5\n\x9B\x03\x9C\x03\x9C\x05\x9C\u07B9\n\x9C\x03\x9D\x03" +
        "\x9D\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x07\x9E\u07C2\n\x9E\f\x9E" +
        "\x0E\x9E\u07C5\v\x9E\x03\x9E\x03\x9E\x03\x9F\x03\x9F\x05\x9F\u07CB\n\x9F" +
        "\x03\xA0\x03\xA0\x03\xA1\x03\xA1\x03\xA2\x03\xA2\x03\xA3\x03\xA3\x03\xA4" +
        "\x03\xA4\x03\xA5\x03\xA5\x03\xA6\x03\xA6\x03\xA7\x03\xA7\x03\xA8\x03\xA8" +
        "\x03\xA9\x03\xA9\x03\xAA\x03\xAA\x03\xAB\x03\xAB\x03\xAB\x03\xAC\x03\xAC" +
        "\x03\xAD\x03\xAD\x03\xAE\x03\xAE\x03\xAF\x03\xAF\x03\xB0\x03\xB0\x03\xB0" +
        "\x03\xB1\x03\xB1\x03\xB2\x03\xB2\x03\xB3\x03\xB3\x03\xB4\x03\xB4\x03\xB5" +
        "\x03\xB5\x03\xB6\x03\xB6\x03\xB7\x03\xB7\x03\xB8\x03\xB8\x03\xB9\x03\xB9" +
        "\x03\xBA\x03\xBA\x03\xBB\x03\xBB\x03\xBC\x03\xBC\x03\xBD\x03\xBD\x03\xBE" +
        "\x03\xBE\x03\xBF\x03\xBF\x03\xC0\x03\xC0\x03\xC1\x03\xC1\x03\xC2\x03\xC2" +
        "\x03\xC3\x03\xC3\x03\xC4\x03\xC4\x03\xC5\x03\xC5\x03\xC6\x03\xC6\x03\xC7" +
        "\x03\xC7\x03\xC8\x03\xC8\x03\xC9\x03\xC9\x03\xCA\x03\xCA\x03\xCB\x03\xCB" +
        "\x03\xCC\x03\xCC\x03\xCD\x03\xCD\x03\xCE\x03\xCE\x03\xCF\x03\xCF\x03\xD0" +
        "\x03\xD0\x03\xD1\x03\xD1\x03\xD2\x03\xD2\x03\xD3\x03\xD3\x03\xD4\x03\xD4" +
        "\x03\xD5\x03\xD5\x03\xD6\x03\xD6\x03\xD7\x03\xD7\x03\xD8\x03\xD8\x03\xD9" +
        "\x03\xD9\x03\xDA\x03\xDA\x03\xDB\x03\xDB\x03\xDC\x03\xDC\x03\xDD\x03\xDD" +
        "\x03\xDE\x03\xDE\x03\xDF\x03\xDF\x03\xE0\x03\xE0\x03\xE1\x03\xE1\x03\xE2" +
        "\x03\xE2\x03\xE3\x03\xE3\x03\xE4\x03\xE4\x03\xE5\x03\xE5\x03\xE6\x03\xE6" +
        "\x03\xE7\x03\xE7\x03\xE8\x03\xE8\x03\xE9\x03\xE9\x03\xEA\x03\xEA\x03\xEB" +
        "\x03\xEB\x03\xEC\x03\xEC\x03\xED\x03\xED\x03\xEE\x03\xEE\x03\xEF\x03\xEF" +
        "\x03\xF0\x03\xF0\x03\xF1\x03\xF1\x03\xF2\x03\xF2\x03\xF3\x03\xF3\x03\xF4" +
        "\x03\xF4\x03\xF5\x03\xF5\x03\xF6\x03\xF6\x03\xF7\x03\xF7\x03\xF8\x03\xF8" +
        "\x03\xF9\x03\xF9\x03\xFA\x03\xFA\x03\xFB\x03\xFB\x03\xFC\x03\xFC\x03\xFD" +
        "\x03\xFD\x03\xFE\x03\xFE\x03\xFF\x03\xFF\x03\u0100\x03\u0100\x03\u0101" +
        "\x03\u0101\x03\u0102\x03\u0102\x03\u0103\x03\u0103\x03\u0104\x03\u0104" +
        "\x03\u0105\x03\u0105\x03\u0106\x03\u0106\x03\u0107\x03\u0107\x03\u0108" +
        "\x03\u0108\x03\u0109\x03\u0109\x03\u010A\x03\u010A\x03\u010B\x03\u010B" +
        "\x03\u010C\x03\u010C\x03\u010D\x03\u010D\x03\u010E\x03\u010E\x03\u010F" +
        "\x03\u010F\x03\u0110\x03\u0110\x03\u0111\x03\u0111\x03\u0112\x03\u0112" +
        "\x03\u0113\x03\u0113\x03\u0114\x03\u0114\x03\u0115\x03\u0115\x03\u0116" +
        "\x03\u0116\x03\u0116\x02\x02\x02\u0117\x02\x02\x04\x02\x06\x02\b\x02\n" +
        "\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
        "\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
        "\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
        "R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
        "n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02" +
        "\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02" +
        "\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02" +
        "\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02" +
        "\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02" +
        "\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02" +
        "\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02" +
        "\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102" +
        "\x02\u0104\x02\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110" +
        "\x02\u0112\x02\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E" +
        "\x02\u0120\x02\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C" +
        "\x02\u012E\x02\u0130\x02\u0132\x02\u0134\x02\u0136\x02\u0138\x02\u013A" +
        "\x02\u013C\x02\u013E\x02\u0140";
    CqlParser._serializedATNSegment1 = "\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02\u014C\x02\u014E" +
        "\x02\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02\u015A\x02\u015C" +
        "\x02\u015E\x02\u0160\x02\u0162\x02\u0164\x02\u0166\x02\u0168\x02\u016A" +
        "\x02\u016C\x02\u016E\x02\u0170\x02\u0172\x02\u0174\x02\u0176\x02\u0178" +
        "\x02\u017A\x02\u017C\x02\u017E\x02\u0180\x02\u0182\x02\u0184\x02\u0186" +
        "\x02\u0188\x02\u018A\x02\u018C\x02\u018E\x02\u0190\x02\u0192\x02\u0194" +
        "\x02\u0196\x02\u0198\x02\u019A\x02\u019C\x02\u019E\x02\u01A0\x02\u01A2" +
        "\x02\u01A4\x02\u01A6\x02\u01A8\x02\u01AA\x02\u01AC\x02\u01AE\x02\u01B0" +
        "\x02\u01B2\x02\u01B4\x02\u01B6\x02\u01B8\x02\u01BA\x02\u01BC\x02\u01BE" +
        "\x02\u01C0\x02\u01C2\x02\u01C4\x02\u01C6\x02\u01C8\x02\u01CA\x02\u01CC" +
        "\x02\u01CE\x02\u01D0\x02\u01D2\x02\u01D4\x02\u01D6\x02\u01D8\x02\u01DA" +
        "\x02\u01DC\x02\u01DE\x02\u01E0\x02\u01E2\x02\u01E4\x02\u01E6\x02\u01E8" +
        "\x02\u01EA\x02\u01EC\x02\u01EE\x02\u01F0\x02\u01F2\x02\u01F4\x02\u01F6" +
        "\x02\u01F8\x02\u01FA\x02\u01FC\x02\u01FE\x02\u0200\x02\u0202\x02\u0204" +
        "\x02\u0206\x02\u0208\x02\u020A\x02\u020C\x02\u020E\x02\u0210\x02\u0212" +
        "\x02\u0214\x02\u0216\x02\u0218\x02\u021A\x02\u021C\x02\u021E\x02\u0220" +
        "\x02\u0222\x02\u0224\x02\u0226\x02\u0228\x02\u022A\x02\x02\x07\x04\x02" +
        "\x14\x14\x16\x16\x03\x02\xAC\xB0\x03\x02\xA6\xA7\x04\x0299~~\x07\x02r" +
        "rzz\x88\x88\x8E\xA3\xAA\xAA\x02\u08AA\x02\u022D\x03\x02\x02\x02\x04\u023D" +
        "\x03\x02\x02\x02\x06\u024A\x03\x02\x02\x02\b\u024C\x03\x02\x02\x02\n\u0273" +
        "\x03\x02\x02\x02\f\u0275\x03\x02\x02\x02\x0E\u027C\x03\x02\x02\x02\x10" +
        "\u027F\x03\x02\x02\x02\x12\u0289\x03\x02\x02\x02\x14\u0295\x03\x02\x02" +
        "\x02\x16\u02A8\x03\x02\x02\x02\x18\u02D0\x03\x02\x02\x02\x1A\u02D2\x03" +
        "\x02\x02\x02\x1C\u02DF\x03\x02\x02\x02\x1E\u02E8\x03\x02\x02\x02 \u02F7" +
        "\x03\x02\x02\x02\"\u0302\x03\x02\x02\x02$\u0310\x03\x02\x02\x02&\u0331" +
        "\x03\x02\x02\x02(\u0338\x03\x02\x02\x02*\u0341\x03\x02\x02\x02,\u034C" +
        "\x03\x02\x02\x02.\u034E\x03\x02\x02\x020\u035F\x03\x02\x02\x022\u037A" +
        "\x03\x02\x02\x024\u037C\x03\x02\x02\x026\u0389\x03\x02\x02\x028\u038F" +
        "\x03\x02\x02\x02:\u03AD\x03\x02\x02\x02<\u03AF\x03\x02\x02\x02>\u03BB" +
        "\x03\x02\x02\x02@\u03BF\x03\x02\x02\x02B\u03CC\x03\x02\x02\x02D\u03D8" +
        "\x03\x02\x02\x02F\u03DB\x03\x02\x02\x02H\u03E3\x03\x02\x02\x02J\u03E8" +
        "\x03\x02\x02\x02L\u03EA\x03\x02\x02\x02N\u03F7\x03\x02\x02\x02P\u03F9" +
        "\x03\x02\x02\x02R\u03FC\x03\x02\x02\x02T\u0405\x03\x02\x02\x02V\u0409" +
        "\x03\x02\x02\x02X\u0415\x03\x02\x02\x02Z\u041A\x03\x02\x02\x02\\\u042A" +
        "\x03\x02\x02\x02^\u042C\x03\x02\x02\x02`\u042F\x03\x02\x02\x02b\u0434" +
        "\x03\x02\x02\x02d\u0438\x03\x02\x02\x02f\u043B\x03\x02\x02\x02h\u0444" +
        "\x03\x02\x02\x02j\u0447\x03\x02\x02\x02l\u0452\x03\x02\x02\x02n\u0458" +
        "\x03\x02\x02\x02p\u0472\x03\x02\x02\x02r\u0474\x03\x02\x02\x02t\u0482" +
        "\x03\x02\x02\x02v\u0489\x03\x02\x02\x02x\u0495\x03\x02\x02\x02z\u04A2" +
        "\x03\x02\x02\x02|\u04AE\x03\x02\x02\x02~\u04BA\x03\x02\x02\x02\x80\u04C8" +
        "\x03\x02\x02\x02\x82\u04CF\x03\x02\x02\x02\x84\u04DB\x03\x02\x02\x02\x86" +
        "\u04E2\x03\x02\x02\x02\x88\u04EE\x03\x02\x02\x02\x8A\u04FF\x03\x02\x02" +
        "\x02\x8C\u0506\x03\x02\x02\x02\x8E\u0510\x03\x02\x02\x02\x90\u0521\x03" +
        "\x02\x02\x02\x92\u0523\x03\x02\x02\x02\x94\u0527\x03\x02\x02\x02\x96\u0529" +
        "\x03\x02\x02\x02\x98\u0535\x03\x02\x02\x02\x9A\u0539\x03\x02\x02\x02\x9C" +
        "\u053D\x03\x02\x02\x02\x9E\u053F\x03\x02\x02\x02\xA0\u054D\x03\x02\x02" +
        "\x02\xA2\u0552\x03\x02\x02\x02\xA4\u0555\x03\x02\x02\x02\xA6\u055E\x03" +
        "\x02\x02\x02\xA8\u0560\x03\x02\x02\x02\xAA\u0562\x03\x02\x02\x02\xAC\u0566" +
        "\x03\x02\x02\x02\xAE\u056C\x03\x02\x02\x02\xB0\u0575\x03\x02\x02\x02\xB2" +
        "\u057E\x03\x02\x02\x02\xB4\u0580\x03\x02\x02\x02\xB6\u0582\x03\x02\x02" +
        "\x02\xB8\u0585\x03\x02\x02\x02\xBA\u058F\x03\x02\x02\x02\xBC\u0591\x03" +
        "\x02\x02\x02\xBE\u059F\x03\x02\x02\x02\xC0\u05AE\x03\x02\x02\x02\xC2\u05B0" +
        "\x03\x02\x02\x02\xC4\u05B4\x03\x02\x02\x02\xC6\u05B7\x03\x02\x02\x02\xC8" +
        "\u05C2\x03\x02\x02\x02\xCA\u05D7\x03\x02\x02\x02\xCC\u05DD\x03\x02\x02" +
        "\x02\xCE\u05DF\x03\x02\x02\x02\xD0\u05E4\x03\x02\x02\x02\xD2\u05E9\x03" +
        "\x02\x02\x02\xD4\u05EF\x03\x02\x02\x02\xD6\u05FE\x03\x02\x02\x02\xD8\u0610" +
        "\x03\x02\x02\x02\xDA\u0613\x03\x02\x02\x02\xDC\u0626\x03\x02\x02\x02\xDE" +
        "\u0629\x03\x02\x02\x02\xE0\u0632\x03\x02\x02\x02\xE2\u0636\x03\x02\x02" +
        "\x02\xE4\u0674\x03\x02\x02\x02\xE6\u0676\x03\x02\x02\x02\xE8\u0682\x03" +
        "\x02\x02\x02\xEA\u0692\x03\x02\x02\x02\xEC\u06A0\x03\x02\x02\x02\xEE\u06C4" +
        "\x03\x02\x02\x02\xF0\u06C6\x03\x02\x02\x02\xF2\u06C9\x03\x02\x02\x02\xF4" +
        "\u06CC\x03\x02\x02\x02\xF6\u06CF\x03\x02\x02\x02\xF8\u06D3\x03\x02\x02" +
        "\x02\xFA\u06D6\x03\x02\x02\x02\xFC\u06DB\x03\x02\x02\x02\xFE\u06DF\x03" +
        "\x02\x02\x02\u0100\u06EC\x03\x02\x02\x02\u0102\u06FA\x03\x02\x02\x02\u0104" +
        "\u070D\x03\x02\x02\x02\u0106\u0710\x03\x02\x02\x02\u0108\u0713\x03\x02" +
        "\x02\x02\u010A\u071A\x03\x02\x02\x02\u010C\u071C\x03\x02\x02\x02\u010E" +
        "\u0720\x03\x02\x02\x02\u0110\u0725\x03\x02\x02\x02\u0112\u0728\x03\x02" +
        "\x02\x02\u0114\u072C\x03\x02\x02\x02\u0116\u0745\x03\x02\x02\x02\u0118" +
        "\u0747\x03\x02\x02\x02\u011A\u076A\x03\x02\x02\x02\u011C\u076C\x03\x02" +
        "\x02\x02\u011E\u0770\x03\x02\x02\x02\u0120\u0780\x03\x02\x02\x02\u0122" +
        "\u0785\x03\x02\x02\x02\u0124\u0798\x03\x02\x02\x02\u0126\u079A\x03\x02" +
        "\x02\x02\u0128\u079C\x03\x02\x02\x02\u012A\u079E\x03\x02\x02\x02\u012C" +
        "\u07A0\x03\x02\x02\x02\u012E\u07A2\x03\x02\x02\x02\u0130\u07A8\x03\x02" +
        "\x02\x02\u0132\u07AE\x03\x02\x02\x02\u0134\u07B4\x03\x02\x02\x02\u0136" +
        "\u07B6\x03\x02\x02\x02\u0138\u07BA\x03\x02\x02\x02\u013A\u07BC\x03\x02" +
        "\x02\x02\u013C\u07CA\x03\x02\x02\x02\u013E\u07CC\x03\x02\x02\x02\u0140" +
        "\u07CE\x03\x02\x02\x02\u0142\u07D0\x03\x02\x02\x02\u0144\u07D2\x03\x02" +
        "\x02\x02\u0146\u07D4\x03\x02\x02\x02\u0148\u07D6\x03\x02\x02\x02\u014A" +
        "\u07D8\x03\x02\x02\x02\u014C\u07DA\x03\x02\x02\x02\u014E\u07DC\x03\x02" +
        "\x02\x02\u0150\u07DE\x03\x02\x02\x02\u0152\u07E0\x03\x02\x02\x02\u0154" +
        "\u07E2\x03\x02\x02\x02\u0156\u07E5\x03\x02\x02\x02\u0158\u07E7\x03\x02" +
        "\x02\x02\u015A\u07E9\x03\x02\x02\x02\u015C\u07EB\x03\x02\x02\x02\u015E" +
        "\u07ED\x03\x02\x02\x02\u0160\u07F0\x03\x02\x02\x02\u0162\u07F2\x03\x02" +
        "\x02\x02\u0164\u07F4\x03\x02\x02\x02\u0166\u07F6\x03\x02\x02\x02\u0168" +
        "\u07F8\x03\x02\x02\x02\u016A\u07FA\x03\x02\x02\x02\u016C\u07FC\x03\x02" +
        "\x02\x02\u016E\u07FE\x03\x02\x02\x02\u0170\u0800\x03\x02\x02\x02\u0172" +
        "\u0802\x03\x02\x02\x02\u0174\u0804\x03\x02\x02\x02\u0176\u0806\x03\x02" +
        "\x02\x02\u0178\u0808\x03\x02\x02\x02\u017A\u080A\x03\x02\x02\x02\u017C" +
        "\u080C\x03\x02\x02\x02\u017E\u080E\x03\x02\x02\x02\u0180\u0810\x03\x02" +
        "\x02\x02\u0182\u0812\x03\x02\x02\x02\u0184\u0814\x03\x02\x02\x02\u0186" +
        "\u0816\x03\x02\x02\x02\u0188\u0818\x03\x02\x02\x02\u018A\u081A\x03\x02" +
        "\x02\x02\u018C\u081C\x03\x02\x02\x02\u018E\u081E\x03\x02\x02\x02\u0190" +
        "\u0820\x03\x02\x02\x02\u0192\u0822\x03\x02\x02\x02\u0194\u0824\x03\x02" +
        "\x02\x02\u0196\u0826\x03\x02\x02\x02\u0198\u0828\x03\x02\x02\x02\u019A" +
        "\u082A\x03\x02\x02\x02\u019C\u082C\x03\x02\x02\x02\u019E\u082E\x03\x02" +
        "\x02\x02\u01A0\u0830\x03\x02\x02\x02\u01A2\u0832\x03\x02\x02\x02\u01A4" +
        "\u0834\x03\x02\x02\x02\u01A6\u0836\x03\x02\x02\x02\u01A8\u0838\x03\x02" +
        "\x02\x02\u01AA\u083A\x03\x02\x02\x02\u01AC\u083C\x03\x02\x02\x02\u01AE" +
        "\u083E\x03\x02\x02\x02\u01B0\u0840\x03\x02\x02\x02\u01B2\u0842\x03\x02" +
        "\x02\x02\u01B4\u0844\x03\x02\x02\x02\u01B6\u0846\x03\x02\x02\x02\u01B8" +
        "\u0848\x03\x02\x02\x02\u01BA\u084A\x03\x02\x02\x02\u01BC\u084C\x03\x02" +
        "\x02\x02\u01BE\u084E\x03\x02\x02\x02\u01C0\u0850\x03\x02\x02\x02\u01C2" +
        "\u0852\x03\x02\x02\x02\u01C4\u0854\x03\x02\x02\x02\u01C6\u0856\x03\x02" +
        "\x02\x02\u01C8\u0858\x03\x02\x02\x02\u01CA\u085A\x03\x02\x02\x02\u01CC" +
        "\u085C\x03\x02\x02\x02\u01CE\u085E\x03\x02\x02\x02\u01D0\u0860\x03\x02" +
        "\x02\x02\u01D2\u0862\x03\x02\x02\x02\u01D4\u0864\x03\x02\x02\x02\u01D6" +
        "\u0866\x03\x02\x02\x02\u01D8\u0868\x03\x02\x02\x02\u01DA\u086A\x03\x02" +
        "\x02\x02\u01DC\u086C\x03\x02\x02\x02\u01DE\u086E\x03\x02\x02\x02\u01E0" +
        "\u0870\x03\x02\x02\x02\u01E2\u0872\x03\x02\x02\x02\u01E4\u0874\x03\x02" +
        "\x02\x02\u01E6\u0876\x03\x02\x02\x02\u01E8\u0878\x03\x02\x02\x02\u01EA" +
        "\u087A\x03\x02\x02\x02\u01EC\u087C\x03\x02\x02\x02\u01EE\u087E\x03\x02" +
        "\x02\x02\u01F0\u0880\x03\x02\x02\x02\u01F2\u0882\x03\x02\x02\x02\u01F4" +
        "\u0884\x03\x02\x02\x02\u01F6\u0886\x03\x02\x02\x02\u01F8\u0888\x03\x02" +
        "\x02\x02\u01FA\u088A\x03\x02\x02\x02\u01FC\u088C\x03\x02\x02\x02\u01FE" +
        "\u088E\x03\x02\x02\x02\u0200\u0890\x03\x02\x02\x02\u0202\u0892\x03\x02" +
        "\x02\x02\u0204\u0894\x03\x02\x02\x02\u0206\u0896\x03\x02\x02\x02\u0208" +
        "\u0898\x03\x02\x02\x02\u020A\u089A\x03\x02\x02\x02\u020C\u089C\x03\x02" +
        "\x02\x02\u020E\u089E\x03\x02\x02\x02\u0210\u08A0\x03\x02\x02\x02\u0212" +
        "\u08A2\x03\x02\x02\x02\u0214\u08A4\x03\x02\x02\x02\u0216\u08A6\x03\x02" +
        "\x02\x02\u0218\u08A8\x03\x02\x02\x02\u021A\u08AA\x03\x02\x02\x02\u021C" +
        "\u08AC\x03\x02\x02\x02\u021E\u08AE\x03\x02\x02\x02\u0220\u08B0\x03\x02" +
        "\x02\x02\u0222\u08B2\x03\x02\x02\x02\u0224\u08B4\x03\x02\x02\x02\u0226" +
        "\u08B6\x03\x02\x02\x02\u0228\u08B8\x03\x02\x02\x02\u022A\u08BA\x03\x02" +
        "\x02\x02\u022C\u022E\x05\x04\x03\x02\u022D\u022C\x03\x02\x02\x02\u022D" +
        "\u022E\x03\x02\x02\x02\u022E\u0230\x03\x02\x02\x02\u022F\u0231\x07\x15" +
        "\x02\x02\u0230\u022F\x03\x02\x02\x02\u0230\u0231\x03\x02\x02\x02\u0231" +
        "\u0232\x03\x02\x02\x02\u0232\u0233\x05\u0216\u010C\x02\u0233\x03\x03\x02" +
        "\x02\x02\u0234\u0236\x05\n\x06\x02\u0235\u0237\x07\x15\x02\x02\u0236\u0235" +
        "\x03\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02" +
        "\u0238\u0239\x05\x06\x04\x02\u0239\u023C\x03\x02\x02\x02\u023A\u023C\x05" +
        "\b\x05\x02\u023B\u0234\x03\x02\x02\x02\u023B\u023A\x03\x02\x02\x02\u023C" +
        "\u023F\x03\x02\x02\x02\u023D\u023B\x03\x02\x02\x02\u023D\u023E\x03\x02" +
        "\x02\x02\u023E\u0248\x03\x02\x02\x02\u023F\u023D\x03\x02\x02\x02\u0240" +
        "\u0245\x05\n\x06\x02\u0241\u0243\x07\x15\x02\x02\u0242\u0241\x03\x02\x02" +
        "\x02\u0242\u0243\x03\x02\x02\x02\u0243\u0244\x03\x02\x02\x02\u0244\u0246" +
        "\x05\x06\x04\x02\u0245\u0242\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02" +
        "\u0246\u0249\x03\x02\x02\x02\u0247\u0249\x05\b\x05\x02\u0248\u0240\x03" +
        "\x02\x02\x02\u0248\u0247\x03\x02\x02\x02\u0249\x05\x03\x02\x02\x02\u024A" +
        "\u024B\x07\n\x02\x02\u024B\x07\x03\x02\x02\x02\u024C\u024D\x05\x06\x04" +
        "\x02\u024D\t\x03\x02\x02\x02\u024E\u0274\x05\xBC_\x02\u024F\u0274\x05" +
        "r:\x02\u0250\u0274\x05l7\x02\u0251\u0274\x05Z.\x02\u0252\u0274\x05L\'" +
        "\x02\u0253\u0274\x05F$\x02\u0254\u0274\x05\xB6\\\x02\u0255\u0274\x058" +
        "\x1D\x02\u0256\u0274\x050\x19\x02\u0257\u0274\x05\xC8e\x02\u0258\u0274" +
        "\x05.\x18\x02\u0259\u0274\x05$\x13\x02\u025A\u0274\x05\x1C\x0F\x02\u025B" +
        "\u0274\x05\x88E\x02\u025C\u0274\x05\"\x12\x02\u025D\u0274\x05\x1E\x10" +
        "\x02\u025E\u0274\x05\x1A\x0E\x02\u025F\u0274\x05\xD4k\x02\u0260\u0274" +
        "\x05z>\x02\u0261\u0274\x05|?\x02\u0262\u0274\x05\x86D\x02\u0263\u0274" +
        "\x05\x84C\x02\u0264\u0274\x05x=\x02\u0265\u0274\x05\x80A\x02\u0266\u0274" +
        "\x05\x82B\x02\u0267\u0274\x05~@\x02\u0268\u0274\x05v<\x02\u0269\u0274" +
        "\x05t;\x02\u026A\u0274\x05\x14\v\x02\u026B\u0274\x05\xECw\x02\u026C\u0274" +
        "\x05\x12\n\x02\u026D\u0274\x05\x10\t\x02\u026E\u0274\x05\f\x07\x02\u026F" +
        "\u0274\x05\u0102\x82\x02\u0270\u0274\x05\xC6d\x02\u0271\u0274\x05\xDA" +
        "n\x02\u0272\u0274\x05\xC4c\x02\u0273\u024E\x03\x02\x02\x02\u0273\u024F" +
        "\x03\x02\x02\x02\u0273\u0250\x03\x02\x02\x02\u0273\u0251\x03\x02\x02\x02" +
        "\u0273\u0252\x03\x02\x02\x02\u0273\u0253\x03\x02\x02\x02\u0273\u0254\x03" +
        "\x02\x02\x02\u0273\u0255\x03\x02\x02\x02\u0273\u0256\x03\x02\x02\x02\u0273" +
        "\u0257\x03\x02\x02\x02\u0273\u0258\x03\x02\x02\x02\u0273\u0259\x03\x02" +
        "\x02\x02\u0273\u025A\x03\x02\x02\x02\u0273\u025B\x03\x02\x02\x02\u0273" +
        "\u025C\x03\x02\x02\x02\u0273\u025D\x03\x02\x02\x02\u0273\u025E\x03\x02" +
        "\x02\x02\u0273\u025F\x03\x02\x02\x02\u0273\u0260\x03\x02\x02\x02\u0273" +
        "\u0261\x03\x02\x02\x02\u0273\u0262\x03\x02\x02\x02\u0273\u0263\x03\x02" +
        "\x02\x02\u0273\u0264\x03\x02\x02\x02\u0273\u0265\x03\x02\x02\x02\u0273" +
        "\u0266\x03\x02\x02\x02\u0273\u0267\x03\x02\x02\x02\u0273\u0268\x03\x02" +
        "\x02\x02\u0273\u0269\x03\x02\x02\x02\u0273\u026A\x03\x02\x02\x02\u0273" +
        "\u026B\x03\x02\x02\x02\u0273\u026C\x03\x02\x02\x02\u0273\u026D\x03\x02" +
        "\x02\x02\u0273\u026E\x03\x02\x02\x02\u0273\u026F\x03\x02\x02\x02\u0273" +
        "\u0270\x03\x02\x02\x02\u0273\u0271\x03\x02\x02\x02\u0273\u0272\x03\x02" +
        "\x02\x02\u0274\v\x03\x02\x02\x02\u0275\u0276\x05\u0214\u010B\x02\u0276" +
        "\u0277\x05\x16\f\x02\u0277\u0278\x05\u01CE\xE8\x02\u0278\u0279\x05\x18" +
        "\r\x02\u0279\u027A\x05\u0194\xCB\x02\u027A\u027B\x05\u013E\xA0\x02\u027B" +
        "\r\x03\x02\x02\x02\u027C\u027D\x05\u01BA\xDE\x02\u027D\u027E\x05\u0208" +
        "\u0105\x02\u027E\x0F\x03\x02\x02\x02\u027F\u0280\x05\u01BA\xDE\x02\u0280" +
        "\u0284\x05\u01E4\xF3\x02\u0281\u0282\x05\u01CC\xE7\x02\u0282\u0283\x05" +
        "\u013E\xA0\x02\u0283\u0285\x03\x02\x02\x02\u0284\u0281\x03\x02\x02\x02" +
        "\u0284\u0285\x03\x02\x02\x02\u0285\u0287\x03\x02\x02\x02\u0286\u0288\x05" +
        "\u01C6\xE4\x02\u0287\u0286\x03\x02\x02\x02\u0287\u0288\x03\x02\x02\x02" +
        "\u0288\x11\x03\x02\x02\x02\u0289\u028A\x05\u01BA\xDE\x02\u028A\u028E\x05" +
        "\x16\f\x02\u028B\u028C\x05\u01CE\xE8\x02\u028C\u028D\x05\x18\r\x02\u028D" +
        "\u028F\x03\x02\x02\x02\u028E\u028B\x03\x02\x02\x02\u028E\u028F\x03\x02" +
        "\x02\x02\u028F\u0293\x03\x02\x02\x02\u0290\u0291\x05\u01CC\xE7\x02\u0291" +
        "\u0292\x05\u013E\xA0\x02\u0292\u0294\x03\x02\x02\x02\u0293\u0290\x03\x02" +
        "\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294\x13\x03\x02\x02\x02\u0295\u0296" +
        "\x05\u019C\xCF\x02\u0296\u0297\x05\x16\f\x02\u0297\u0298\x05\u01CE\xE8" +
        "\x02\u0298\u0299\x05\x18\r\x02\u0299\u029A\x05\u01F6\xFC\x02\u029A\u029B" +
        "\x05\u013E\xA0\x02\u029B\x15\x03\x02\x02\x02\u029C\u029F\x05\u015C\xAF" +
        "\x02\u029D\u029F\x05\u015E\xB0\x02\u029E\u029C\x03\x02\x02\x02\u029E\u029D" +
        "\x03\x02\x02\x02\u029F\u02A9\x03\x02\x02\x02\u02A0\u02A9\x05\u0162\xB2" +
        "\x02\u02A1\u02A9\x05\u016C\xB7\x02\u02A2\u02A9\x05\u0182\xC2\x02\u02A3" +
        "\u02A9\x05\u018C\xC7\x02\u02A4\u02A9\x05\u017C\xBF\x02\u02A5\u02A9\x05" +
        "\u0186\xC4\x02\u02A6\u02A9\x05\u01C2\xE2\x02\u02A7\u02A9\x05\u01E6\xF4" +
        "\x02\u02A8\u029E\x03\x02\x02\x02\u02A8\u02A0\x03\x02\x02\x02\u02A8\u02A1" +
        "\x03\x02\x02\x02\u02A8\u02A2\x03\x02\x02\x02\u02A8\u02A3\x03\x02\x02\x02" +
        "\u02A8\u02A4\x03\x02\x02\x02\u02A8\u02A5\x03\x02\x02\x02\u02A8\u02A6\x03" +
        "\x02\x02\x02\u02A8\u02A7\x03\x02\x02\x02\u02A9\x17\x03\x02\x02\x02\u02AA" +
        "\u02AB\x05\u015C\xAF\x02\u02AB\u02AC\x05\u019A\xCE\x02\u02AC\u02D1\x03" +
        "\x02\x02\x02\u02AD\u02AE\x05\u015C\xAF\x02\u02AE\u02AF\x05\u019A\xCE\x02" +
        "\u02AF\u02B0\x05\u01A0\xD1\x02\u02B0\u02B1\x05\u01B2\xDA\x02\u02B1\u02B2" +
        "\x05\u0130\x99\x02\u02B2\u02D1\x03\x02\x02\x02\u02B3\u02B7\x05\u0198\xCD" +
        "\x02\u02B4\u02B5\x05\u0130\x99\x02\u02B5\u02B6\x07\x10\x02\x02\u02B6\u02B8" +
        "\x03\x02\x02\x02\u02B7\u02B4\x03\x02\x02\x02\u02B7\u02B8\x03\x02\x02\x02" +
        "\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02BA\x05\u014A\xA6\x02\u02BA\u02D1" +
        "\x03\x02\x02\x02\u02BB\u02BC\x05\u015C\xAF\x02\u02BC\u02BD\x05\u01B4\xDB" +
        "\x02\u02BD\u02D1\x03\x02\x02\x02\u02BE\u02BF\x05\u01B2\xDA\x02\u02BF\u02C0" +
        "\x05\u0130\x99\x02\u02C0\u02D1\x03\x02\x02\x02\u02C1\u02C3\x05\u01F2\xFA" +
        "\x02\u02C2\u02C1\x03\x02\x02\x02\u02C2\u02C3\x03\x02\x02\x02\u02C3\u02C7" +
        "\x03\x02\x02\x02\u02C4\u02C5\x05\u0130\x99\x02\u02C5\u02C6\x07\x10\x02" +
        "\x02\u02C6\u02C8\x03\x02\x02\x02\u02C7\u02C4\x03\x02\x02\x02\u02C7\u02C8" +
        "\x03\x02\x02\x02\u02C8\u02C9\x03\x02\x02\x02\u02C9\u02D1\x05\u0132\x9A" +
        "\x02\u02CA\u02CB\x05\u015C\xAF\x02\u02CB\u02CC\x05\u01E4\xF3\x02\u02CC" +
        "\u02D1\x03\x02\x02\x02\u02CD\u02CE\x05\u01E2\xF2\x02\u02CE\u02CF\x05\u013E" +
        "\xA0\x02\u02CF\u02D1\x03\x02\x02\x02\u02D0\u02AA\x03\x02\x02\x02\u02D0" +
        "\u02AD\x03\x02\x02\x02\u02D0\u02B3\x03\x02\x02\x02\u02D0\u02BB\x03\x02" +
        "\x02\x02\u02D0\u02BE\x03\x02\x02\x02\u02D0\u02C2\x03\x02\x02\x02\u02D0" +
        "\u02CA\x03\x02\x02\x02\u02D0\u02CD\x03\x02\x02\x02\u02D1\x19\x03\x02\x02" +
        "\x02\u02D2\u02D3\x05\u017C\xBF\x02\u02D3\u02D5\x05\u0206\u0104\x02\u02D4" +
        "\u02D6\x05\xF6|\x02\u02D5\u02D4\x03\x02\x02\x02\u02D5\u02D6\x03\x02\x02" +
        "\x02\u02D6\u02D7\x03\x02\x02\x02\u02D7\u02D8\x05\u014E\xA8\x02\u02D8\u02D9" +
        "\x05\u0212\u010A\x02\u02D9\u02DA\x05\u01D6\xEC\x02\u02DA\u02DD\x05\u012A" +
        "\x96\x02\u02DB\u02DE\x05\u01F0\xF9\x02\u02DC\u02DE\x05\u01C4\xE3\x02\u02DD" +
        "\u02DB\x03\x02\x02\x02\u02DD\u02DC\x03\x02\x02\x02\u02DD\u02DE\x03\x02" +
        "\x02\x02\u02DE\x1B\x03\x02\x02\x02\u02DF\u02E0\x05\u017C\xBF\x02\u02E0" +
        "\u02E2\x05\u01E2\xF2\x02\u02E1\u02E3\x05\xF6|\x02\u02E2\u02E1\x03\x02" +
        "\x02\x02\u02E2\u02E3\x03\x02\x02\x02\u02E3\u02E4\x03\x02\x02\x02\u02E4" +
        "\u02E6\x05\u013E\xA0\x02\u02E5\u02E7\x05n8\x02\u02E6\u02E5\x03\x02\x02" +
        "\x02\u02E6\u02E7\x03\x02\x02\x02\u02E7\x1D\x03\x02\x02\x02\u02E8\u02E9" +
        "\x05\u017C\xBF\x02\u02E9\u02EB\x05\u01FE\u0100\x02\u02EA\u02EC\x05\xF6" +
        "|\x02\u02EB\u02EA\x03\x02\x02\x02\u02EB\u02EC\x03\x02\x02\x02\u02EC\u02F0" +
        "\x03\x02\x02\x02\u02ED\u02EE\x05\u0130\x99\x02\u02EE\u02EF\x07\x10\x02" +
        "\x02\u02EF\u02F1\x03\x02\x02\x02\u02F0\u02ED\x03\x02\x02\x02\u02F0\u02F1" +
        "\x03\x02\x02\x02\u02F1\u02F2\x03\x02\x02\x02\u02F2\u02F3\x05\u0146\xA4" +
        "\x02\u02F3\u02F4\x05\u0218\u010D\x02\u02F4\u02F5\x05 \x11\x02\u02F5\u02F6" +
        "\x05\u021A\u010E\x02\u02F6\x1F\x03\x02\x02\x02\u02F7\u02F8\x05\u0134\x9B" +
        "\x02\u02F8\u02FF\x05\u0136\x9C\x02\u02F9\u02FA\x05\u0228\u0115\x02\u02FA" +
        "\u02FB\x05\u0134\x9B\x02\u02FB\u02FC\x05\u0136\x9C\x02\u02FC\u02FE\x03" +
        "\x02\x02\x02\u02FD\u02F9\x03\x02\x02\x02\u02FE\u0301\x03\x02\x02\x02\u02FF" +
        "\u02FD\x03\x02\x02\x02\u02FF\u0300\x03\x02\x02\x02\u0300!\x03\x02\x02" +
        "\x02\u0301\u02FF\x03\x02\x02\x02\u0302\u0303\x05\u017C\xBF\x02\u0303\u0305" +
        "\x05\u01F8\xFD\x02\u0304\u0306\x05\xF6|\x02\u0305\u0304\x03\x02\x02\x02" +
        "\u0305\u0306\x03\x02\x02\x02\u0306\u030A\x03\x02\x02\x02\u0307\u0308\x05" +
        "\u0130\x99\x02\u0308\u0309\x07\x10\x02\x02\u0309\u030B\x03\x02\x02\x02" +
        "\u030A\u0307\x03\x02\x02\x02\u030A\u030B\x03\x02\x02\x02\u030B\u030C\x03" +
        "\x02\x02\x02\u030C\u030D\x05\u0140\xA1\x02\u030D\u030E\x05\u020A\u0106" +
        "\x02\u030E\u030F\x05\u0142\xA2\x02\u030F#\x03\x02\x02\x02\u0310\u0311" +
        "\x05\u017C\xBF\x02\u0311\u0312\x05\u01C0\xE1\x02\u0312\u0314\x05\u020E" +
        "\u0108\x02\u0313\u0315\x05\xF6|\x02\u0314\u0313\x03\x02\x02\x02\u0314" +
        "\u0315\x03\x02\x02\x02\u0315\u0319\x03\x02\x02\x02\u0316\u0317\x05\u0130" +
        "\x99\x02\u0317\u0318\x07\x10\x02\x02\u0318\u031A\x03\x02\x02\x02\u0319" +
        "\u0316\x03\x02\x02\x02\u0319\u031A\x03\x02\x02\x02\u031A\u031B\x03\x02" +
        "\x02\x02\u031B\u031C\x05\u0144\xA3\x02\u031C\u031D\x05\u0168\xB5\x02\u031D" +
        "\u031E\x05\u01E6\xF4\x02\u031E\u031F\x05\xFE\x80\x02\u031F\u0323\x05\u0194" +
        "\xCB\x02\u0320\u0321\x05\u0130\x99\x02\u0321\u0322\x07\x10\x02\x02\u0322" +
        "\u0324\x03\x02\x02\x02\u0323\u0320\x03\x02\x02\x02\u0323\u0324\x03\x02" +
        "\x02\x02\u0324\u0325\x03\x02\x02\x02\u0325\u0326\x05\u0132\x9A\x02\u0326" +
        "\u0327\x05&\x14\x02\u0327\u0328\x05\u01D8\xED\x02\u0328\u0329\x05\u01AE" +
        "\xD8\x02\u0329\u032A\x05\u0218\u010D\x02\u032A\u032B\x05\xFE\x80\x02\u032B" +
        "\u032F\x05\u021A\u010E\x02\u032C\u032D\x05\u0212\u010A\x02\u032D\u032E" +
        "\x05,\x17\x02\u032E\u0330\x03\x02\x02\x02\u032F\u032C\x03\x02\x02\x02" +
        "\u032F\u0330\x03\x02\x02\x02\u0330%\x03\x02\x02\x02\u0331\u0332\x05\u0210" +
        "\u0109\x02\u0332\u0336\x05(\x15\x02\u0333\u0334\x05\u0164\xB3\x02\u0334" +
        "\u0335\x05\u0118\x8D\x02\u0335\u0337\x03\x02\x02\x02\u0336\u0333\x03\x02" +
        "\x02\x02\u0336\u0337\x03\x02\x02\x02\u0337\'\x03\x02\x02\x02\u0338\u033E" +
        "\x05*\x16\x02\u0339\u033A\x05\u0164\xB3\x02\u033A\u033B\x05*\x16\x02\u033B" +
        "\u033D\x03\x02\x02\x02\u033C\u0339\x03\x02\x02\x02\u033D\u0340\x03\x02" +
        "\x02\x02\u033E\u033C\x03\x02\x02\x02\u033E\u033F\x03\x02\x02\x02\u033F" +
        ")\x03\x02\x02\x02\u0340\u033E\x03\x02\x02\x02\u0341\u0342\x05\u0134\x9B" +
        "\x02\u0342\u0343\x05\u01AC\xD7\x02\u0343\u0344\x05\u01C8\xE5\x02\u0344" +
        "\u0345\x05\u01CA\xE6\x02\u0345+\x03\x02\x02\x02\u0346\u034D\x05\x8EH\x02" +
        "\u0347\u0348\x05\x8EH\x02\u0348\u0349\x05\u0164\xB3\x02\u0349\u034A\x05" +
        "\x8CG\x02\u034A\u034D\x03\x02\x02\x02\u034B\u034D\x05\x8CG\x02\u034C\u0346" +
        "\x03\x02\x02\x02\u034C\u0347\x03\x02\x02\x02\u034C\u034B\x03\x02\x02\x02" +
        "\u034D-\x03\x02\x02\x02\u034E\u034F\x05\u017C\xBF\x02\u034F\u0351\x05" +
        "\u01B2\xDA\x02\u0350\u0352\x05\xF6|\x02\u0351\u0350\x03\x02\x02\x02\u0351" +
        "\u0352\x03\x02\x02\x02\u0352\u0353\x03\x02\x02\x02\u0353\u0354\x05\u0130" +
        "\x99\x02\u0354\u0355\x05\u0212\u010A\x02\u0355\u0356\x05\u01DE\xF0\x02" +
        "\u0356\u0357\x07\xAC\x02\x02\u0357\u0358\x05\u021C\u010F\x02\u0358\u0359" +
        "\x05\xBE`\x02\u0359\u035D\x05\u021E\u0110\x02\u035A\u035B\x05\u0164\xB3" +
        "\x02\u035B\u035C\x05\xC2b\x02\u035C\u035E\x03\x02\x02\x02\u035D\u035A" +
        "\x03\x02\x02\x02\u035D\u035E\x03\x02\x02\x02\u035E/\x03\x02\x02\x02\u035F" +
        "\u0361\x05\u017C\xBF\x02\u0360\u0362\x05D#\x02\u0361\u0360\x03\x02\x02" +
        "\x02\u0361\u0362\x03\x02\x02\x02\u0362\u0363\x03\x02\x02\x02\u0363\u0365" +
        "\x05\u0198\xCD\x02\u0364\u0366\x05\xF6|\x02\u0365\u0364\x03\x02\x02\x02" +
        "\u0365\u0366\x03\x02\x02\x02\u0366\u036A\x03\x02\x02\x02\u0367\u0368\x05" +
        "\u0130\x99\x02\u0368\u0369\x07\x10\x02\x02\u0369\u036B\x03\x02\x02\x02" +
        "\u036A\u0367\x03\x02\x02\x02\u036A\u036B\x03\x02\x02\x02\u036B\u036C\x03" +
        "\x02\x02\x02\u036C\u036D\x05\u014A\xA6\x02\u036D\u036F\x05\u0218\u010D" +
        "\x02\u036E\u0370\x054\x1B\x02\u036F\u036E\x03\x02\x02\x02\u036F\u0370" +
        "\x03\x02\x02\x02\u0370\u0371\x03\x02\x02\x02\u0371\u0372\x05\u021A\u010E" +
        "\x02\u0372\u0373\x056\x1C\x02\u0373\u0374\x05\u01E0\xF1\x02\u0374\u0375" +
        "\x05\u0136\x9C\x02\u0375\u0376\x05\u01B6\xDC\x02\u0376\u0377\x05\u014C" +
        "\xA7\x02\u0377\u0378\x05\u0168\xB5\x02\u0378\u0379\x052\x1A\x02\u0379" +
        "1\x03\x02\x02\x02\u037A\u037B\x07\xA4\x02\x02\u037B3\x03\x02\x02\x02\u037C" +
        "\u0382\x05\u0154\xAB\x02\u037D\u037E\x05\u0228\u0115\x02\u037E\u037F\x05" +
        "\u0154\xAB\x02\u037F\u0381\x03\x02\x02\x02\u0380\u037D\x03\x02\x02\x02" +
        "\u0381\u0384\x03\x02\x02\x02\u0382\u0380\x03\x02\x02\x02\u0382\u0383\x03" +
        "\x02\x02\x02\u03835\x03\x02\x02\x02\u0384\u0382\x03\x02\x02\x02\u0385" +
        "\u038A\x05\u0174\xBB\x02\u0386\u0387\x05\u01E0\xF1\x02\u0387\u0388\x05" +
        "\u01CA\xE6\x02\u0388\u038A\x03\x02\x02\x02\u0389\u0385\x03\x02\x02\x02" +
        "\u0389\u0386\x03\x02\x02\x02\u038A\u038B\x03\x02\x02\x02\u038B\u038C\x05" +
        "\u01CE\xE8\x02\u038C\u038D\x05\u01CA\xE6\x02\u038D\u038E\x05\u01A6\xD4" +
        "\x02\u038E7\x03\x02\x02\x02\u038F\u0391\x05\u017C\xBF\x02\u0390\u0392" +
        "\x05D#\x02\u0391\u0390\x03\x02\x02\x02\u0391\u0392\x03\x02\x02\x02\u0392" +
        "\u0393\x03\x02\x02\x02\u0393\u0395\x05\u015A\xAE\x02\u0394\u0396\x05\xF6" +
        "|\x02\u0395\u0394\x03\x02\x02\x02\u0395\u0396\x03\x02\x02\x02\u0396\u039A" +
        "\x03\x02\x02\x02\u0397\u0398\x05\u0130\x99\x02\u0398\u0399\x07\x10\x02" +
        "\x02\u0399\u039B\x03\x02\x02\x02\u039A\u0397\x03\x02\x02\x02\u039A\u039B" +
        "\x03\x02\x02\x02\u039B\u039C\x03\x02\x02\x02\u039C\u039D\x05\u0148\xA5" +
        "\x02\u039D\u039E\x05\u0218\u010D\x02\u039E\u039F\x05\u0136\x9C\x02\u039F" +
        "\u03A0\x05\u021A\u010E\x02\u03A0\u03A1\x05\u01EA\xF6\x02\u03A1\u03A2\x05" +
        "\u014A\xA6\x02\u03A2\u03A3\x05\u01EE\xF8\x02\u03A3\u03A4\x05\u0136\x9C" +
        "\x02\u03A4\u03A5\x05\u0192\xCA\x02\u03A5\u03A6\x05\u014A\xA6\x02\u03A6" +
        "\u03A7\x05\u01A4\xD3\x02\u03A7\u03A8\x05:\x1E\x02\u03A89\x03\x02\x02\x02" +
        "\u03A9\u03AE\x05\u0124\x93\x02\u03AA\u03AE\x05B\"\x02\u03AB\u03AE\x05" +
        "@!\x02\u03AC\u03AE\x05<\x1F\x02\u03AD\u03A9\x03\x02\x02\x02\u03AD\u03AA" +
        "\x03\x02\x02\x02\u03AD\u03AB\x03\x02\x02\x02\u03AD\u03AC\x03\x02\x02\x02" +
        "\u03AE;\x03\x02\x02\x02\u03AF\u03B0\x05\u021C\u010F\x02\u03B0\u03B6\x05" +
        "> \x02\u03B1\u03B2\x05\u0228\u0115\x02\u03B2\u03B3\x05> \x02\u03B3\u03B5" +
        "\x03\x02\x02\x02\u03B4\u03B1\x03\x02\x02\x02\u03B5\u03B8\x03\x02\x02\x02" +
        "\u03B6\u03B4\x03\x02\x02\x02\u03B6\u03B7\x03\x02\x02\x02\u03B7\u03B9\x03" +
        "\x02\x02\x02\u03B8\u03B6\x03\x02\x02\x02\u03B9\u03BA\x05\u021E\u0110\x02" +
        "\u03BA=\x03\x02\x02\x02\u03BB\u03BC\x05\u0152\xAA\x02\u03BC\u03BD\x07" +
        "\v\x02\x02\u03BD\u03BE\x05:\x1E\x02\u03BE?\x03\x02\x02\x02\u03BF\u03C0" +
        "\x05\u0218\u010D\x02\u03C0\u03C7\x05B\"\x02\u03C1\u03C2\x05\u0228\u0115" +
        "\x02\u03C2\u03C3\x05\u0124\x93\x02\u03C3\u03C6\x03\x02\x02\x02\u03C4\u03C6" +
        "\x05B\"\x02\u03C5\u03C1\x03\x02\x02\x02\u03C5\u03C4\x03\x02\x02\x02\u03C6";
    CqlParser._serializedATNSegment2 = "\u03C9\x03\x02\x02\x02\u03C7\u03C5\x03\x02\x02\x02\u03C7\u03C8\x03\x02" +
        "\x02\x02\u03C8\u03CA\x03\x02\x02\x02\u03C9\u03C7\x03\x02\x02\x02\u03CA" +
        "\u03CB\x05\u021A\u010E\x02\u03CBA\x03\x02\x02\x02\u03CC\u03CD\x05\u0218" +
        "\u010D\x02\u03CD\u03D3\x05\u0124\x93\x02\u03CE\u03CF\x05\u0228\u0115\x02" +
        "\u03CF\u03D0\x05\u0124\x93\x02\u03D0\u03D2\x03\x02\x02\x02\u03D1\u03CE" +
        "\x03\x02\x02\x02\u03D2\u03D5\x03\x02\x02\x02\u03D3\u03D1\x03\x02\x02\x02" +
        "\u03D3\u03D4\x03\x02\x02\x02\u03D4\u03D6\x03\x02\x02\x02\u03D5\u03D3\x03" +
        "\x02\x02\x02\u03D6\u03D7\x05\u021A\u010E\x02\u03D7C\x03\x02\x02\x02\u03D8" +
        "\u03D9\x05\u01D2\xEA\x02\u03D9\u03DA\x05\u01DC\xEF\x02\u03DAE\x03\x02" +
        "\x02\x02\u03DB\u03DC\x05\u0162\xB2\x02\u03DC\u03DD\x05\u0206\u0104\x02" +
        "\u03DD\u03DE\x05\u014E\xA8\x02\u03DE\u03DF\x05\u0212\u010A\x02\u03DF\u03E1" +
        "\x05H%\x02\u03E0\u03E2\x05J&\x02\u03E1\u03E0\x03\x02\x02\x02\u03E1\u03E2" +
        "\x03\x02\x02\x02\u03E2G\x03\x02\x02\x02\u03E3\u03E4\x05\u01D6\xEC\x02" +
        "\u03E4\u03E5\x05\u012A\x96\x02\u03E5I\x03\x02\x02\x02\u03E6\u03E9\x05" +
        "\u01F0\xF9\x02\u03E7\u03E9\x05\u01C4\xE3\x02\u03E8\u03E6\x03\x02\x02\x02" +
        "\u03E8\u03E7\x03\x02\x02\x02\u03E9K\x03\x02\x02\x02\u03EA\u03EB\x05\u0162" +
        "\xB2\x02\u03EB\u03EF\x05\u01FE\u0100\x02\u03EC\u03ED\x05\u0130\x99\x02" +
        "\u03ED\u03EE\x07\x10\x02\x02\u03EE\u03F0\x03\x02\x02\x02\u03EF\u03EC\x03" +
        "\x02\x02\x02\u03EF\u03F0\x03\x02\x02\x02\u03F0\u03F1\x03\x02\x02\x02\u03F1" +
        "\u03F2\x05\u0146\xA4\x02\u03F2\u03F3\x05N(\x02\u03F3M\x03\x02\x02\x02" +
        "\u03F4\u03F8\x05X-\x02\u03F5\u03F8\x05V,\x02\u03F6\u03F8\x05P)\x02\u03F7" +
        "\u03F4\x03\x02\x02\x02\u03F7\u03F5\x03\x02\x02\x02\u03F7\u03F6\x03\x02" +
        "\x02\x02\u03F8O\x03\x02\x02\x02\u03F9\u03FA\x05\u01DA\xEE\x02\u03FA\u03FB" +
        "\x05R*\x02\u03FBQ\x03\x02\x02\x02\u03FC\u0402\x05T+\x02\u03FD\u03FE\x05" +
        "\u0164\xB3\x02\u03FE\u03FF\x05T+\x02\u03FF\u0401\x03\x02\x02\x02\u0400" +
        "\u03FD\x03\x02\x02\x02\u0401\u0404\x03\x02\x02\x02\u0402\u0400\x03\x02" +
        "\x02\x02\u0402\u0403\x03\x02\x02\x02\u0403S\x03\x02\x02\x02\u0404\u0402" +
        "\x03\x02\x02\x02\u0405\u0406\x05\u0134\x9B\x02\u0406\u0407\x05\u01F6\xFC" +
        "\x02\u0407\u0408\x05\u0134\x9B\x02\u0408U\x03\x02\x02\x02\u0409\u040A" +
        "\x05\u0158\xAD\x02\u040A\u040B\x05\u0134\x9B\x02\u040B\u0412\x05\u0136" +
        "\x9C\x02\u040C\u040D\x05\u0228\u0115\x02\u040D\u040E\x05\u0134\x9B\x02" +
        "\u040E\u040F\x05\u0136\x9C\x02\u040F\u0411\x03\x02\x02\x02\u0410\u040C" +
        "\x03\x02\x02\x02\u0411\u0414\x03\x02\x02\x02\u0412\u0410\x03\x02\x02\x02" +
        "\u0412\u0413\x03\x02\x02\x02\u0413W\x03\x02\x02\x02\u0414\u0412\x03\x02" +
        "\x02\x02\u0415\u0416\x05\u0162\xB2\x02\u0416\u0417\x05\u0134\x9B\x02\u0417" +
        "\u0418\x05\u01FE\u0100\x02\u0418\u0419\x05\u0136\x9C\x02\u0419Y\x03\x02" +
        "\x02\x02\u041A\u041B\x05\u0162\xB2\x02\u041B\u041F\x05\u01F2\xFA\x02\u041C" +
        "\u041D\x05\u0130\x99\x02\u041D\u041E\x07\x10\x02\x02\u041E\u0420\x03\x02" +
        "\x02\x02\u041F\u041C\x03\x02\x02\x02\u041F\u0420\x03\x02\x02\x02\u0420" +
        "\u0421\x03\x02\x02\x02\u0421\u0422\x05\u0132\x9A\x02\u0422\u0423\x05\\" +
        "/\x02\u0423[\x03\x02\x02\x02\u0424\u042B\x05h5\x02\u0425\u042B\x05d3\x02" +
        "\u0426\u042B\x05d3\x02\u0427\u042B\x05b2\x02\u0428\u042B\x05`1\x02\u0429" +
        "\u042B\x05^0\x02\u042A\u0424\x03\x02\x02\x02\u042A\u0425\x03\x02\x02\x02" +
        "\u042A\u0426\x03\x02\x02\x02\u042A\u0427\x03\x02\x02\x02\u042A\u0428\x03" +
        "\x02\x02\x02\u042A\u0429\x03\x02\x02\x02\u042B]\x03\x02\x02\x02\u042C" +
        "\u042D\x05\u0212\u010A\x02\u042D\u042E\x05\x8EH\x02\u042E_\x03\x02\x02" +
        "\x02\u042F\u0430\x05\u01DA\xEE\x02\u0430\u0431\x05\u0134\x9B\x02\u0431" +
        "\u0432\x05\u01F6\xFC\x02\u0432\u0433\x05\u0134\x9B\x02\u0433a\x03\x02" +
        "\x02\x02\u0434\u0435\x05\u0186\xC4\x02\u0435\u0436\x05\u0178\xBD\x02\u0436" +
        "\u0437\x05\u01EC\xF7\x02\u0437c\x03\x02\x02\x02\u0438\u0439\x05\u0186" +
        "\xC4\x02\u0439\u043A\x05f4\x02\u043Ae\x03\x02\x02\x02\u043B\u0441\x05" +
        "\u0134\x9B\x02\u043C\u043D\x05\u0228\u0115\x02\u043D\u043E\x05\u0134\x9B" +
        "\x02\u043E\u0440\x03\x02\x02\x02\u043F\u043C\x03\x02\x02\x02\u0440\u0443" +
        "\x03\x02\x02\x02\u0441\u043F\x03\x02\x02\x02\u0441\u0442\x03\x02\x02\x02" +
        "\u0442g\x03\x02\x02\x02\u0443\u0441\x03\x02\x02\x02\u0444\u0445\x05\u0158" +
        "\xAD\x02\u0445\u0446\x05j6\x02\u0446i\x03\x02\x02\x02\u0447\u0448\x05" +
        "\u0134\x9B\x02\u0448\u044F\x05\u0136\x9C\x02\u0449\u044A\x05\u0228\u0115" +
        "\x02\u044A\u044B\x05\u0134\x9B\x02\u044B\u044C\x05\u0136\x9C\x02\u044C" +
        "\u044E\x03\x02\x02\x02\u044D\u0449\x03\x02\x02\x02\u044E\u0451\x03\x02" +
        "\x02\x02\u044F\u044D\x03\x02\x02\x02\u044F\u0450\x03\x02\x02\x02\u0450" +
        "k\x03\x02\x02\x02\u0451\u044F\x03\x02\x02\x02\u0452\u0453\x05\u0162\xB2" +
        "\x02\u0453\u0454\x05\u01E2\xF2\x02\u0454\u0456\x05\u013E\xA0\x02\u0455" +
        "\u0457\x05n8\x02\u0456\u0455\x03\x02\x02\x02\u0456\u0457\x03\x02\x02\x02" +
        "\u0457m\x03\x02\x02\x02\u0458\u0459\x05\u0212\u010A\x02\u0459\u045F\x05" +
        "p9\x02\u045A\u045B\x05\u0164\xB3\x02\u045B\u045C\x05p9\x02\u045C\u045E" +
        "\x03\x02\x02\x02\u045D\u045A\x03\x02\x02\x02\u045E\u0461\x03\x02\x02\x02" +
        "\u045F\u045D\x03\x02\x02\x02\u045F\u0460\x03\x02\x02\x02\u0460o\x03\x02" +
        "\x02\x02\u0461\u045F\x03\x02\x02\x02\u0462\u0463\x05\u01D6\xEC\x02\u0463" +
        "\u0464\x07\xAC\x02\x02\u0464\u0465\x05\u012A\x96\x02\u0465\u0473\x03\x02" +
        "\x02\x02\u0466\u0467\x05\u01BE\xE0\x02\u0467\u0468\x07\xAC\x02\x02\u0468" +
        "\u0469\x05\u012C\x97\x02\u0469\u0473\x03\x02\x02\x02\u046A\u046B\x05\u01F0" +
        "\xF9\x02\u046B\u046C\x07\xAC\x02\x02\u046C\u046D\x05\u012C\x97\x02\u046D" +
        "\u0473\x03\x02\x02\x02\u046E\u046F\x05\u01D0\xE9\x02\u046F\u0470\x07\xAC" +
        "\x02\x02\u0470\u0471\x05\x96L\x02\u0471\u0473\x03\x02\x02\x02\u0472\u0462" +
        "\x03\x02\x02\x02\u0472\u0466\x03\x02\x02\x02\u0472\u046A\x03\x02\x02\x02" +
        "\u0472\u046E\x03\x02\x02\x02\u0473q\x03\x02\x02\x02\u0474\u0475\x05\u0162" +
        "\xB2\x02\u0475\u0476\x05\u01C0\xE1\x02\u0476\u047A\x05\u020E\u0108\x02" +
        "\u0477\u0478\x05\u0130\x99\x02\u0478\u0479\x07\x10\x02\x02\u0479\u047B" +
        "\x03\x02\x02\x02\u047A\u0477\x03\x02\x02\x02\u047A\u047B\x03\x02\x02\x02" +
        "\u047B\u047C\x03\x02\x02\x02\u047C\u0480\x05\u0144\xA3\x02\u047D\u047E" +
        "\x05\u0212\u010A\x02\u047E\u047F\x05\x8EH\x02\u047F\u0481\x03\x02\x02" +
        "\x02\u0480\u047D\x03\x02\x02\x02\u0480\u0481\x03\x02\x02\x02\u0481s\x03" +
        "\x02\x02\x02\u0482\u0483\x05\u0186\xC4\x02\u0483\u0485\x05\u0206\u0104" +
        "\x02\u0484\u0486\x05\xF8}\x02\u0485\u0484\x03\x02\x02\x02\u0485\u0486" +
        "\x03\x02\x02\x02\u0486\u0487\x03\x02\x02\x02\u0487\u0488\x05\u014E\xA8" +
        "\x02\u0488u\x03\x02\x02\x02\u0489\u048A\x05\u0186\xC4\x02\u048A\u048C" +
        "\x05\u01FE\u0100\x02\u048B\u048D\x05\xF8}\x02\u048C\u048B\x03\x02\x02" +
        "\x02\u048C\u048D\x03\x02\x02\x02\u048D\u0491\x03\x02\x02\x02\u048E\u048F" +
        "\x05\u0130\x99\x02\u048F\u0490\x07\x10\x02\x02\u0490\u0492\x03\x02\x02" +
        "\x02\u0491\u048E\x03\x02\x02\x02\u0491\u0492\x03\x02\x02\x02\u0492\u0493" +
        "\x03\x02\x02\x02\u0493\u0494\x05\u0146\xA4\x02\u0494w\x03\x02\x02\x02" +
        "\u0495\u0496\x05\u0186\xC4\x02\u0496\u0497\x05\u01C0\xE1\x02\u0497\u0499" +
        "\x05\u020E\u0108\x02\u0498\u049A\x05\xF8}\x02\u0499\u0498\x03\x02\x02" +
        "\x02\u0499\u049A\x03\x02\x02\x02\u049A\u049E\x03\x02\x02\x02\u049B\u049C" +
        "\x05\u0130\x99\x02\u049C\u049D\x07\x10\x02\x02\u049D\u049F\x03\x02\x02" +
        "\x02\u049E\u049B\x03\x02\x02\x02\u049E\u049F\x03\x02\x02\x02\u049F\u04A0" +
        "\x03\x02\x02\x02\u04A0\u04A1\x05\u0144\xA3\x02\u04A1y\x03\x02\x02\x02" +
        "\u04A2\u04A3\x05\u0186\xC4\x02\u04A3\u04A5\x05\u015A\xAE\x02\u04A4\u04A6" +
        "\x05\xF8}\x02\u04A5\u04A4\x03\x02\x02\x02\u04A5\u04A6\x03\x02\x02\x02" +
        "\u04A6\u04AA\x03\x02\x02\x02\u04A7\u04A8\x05\u0130\x99\x02\u04A8\u04A9" +
        "\x07\x10\x02\x02\u04A9\u04AB\x03\x02\x02\x02\u04AA\u04A7\x03\x02\x02\x02" +
        "\u04AA\u04AB\x03\x02\x02\x02\u04AB\u04AC\x03\x02\x02\x02\u04AC\u04AD\x05" +
        "\u0148\xA5\x02\u04AD{\x03\x02\x02\x02\u04AE\u04AF\x05\u0186\xC4\x02\u04AF" +
        "\u04B1\x05\u0198\xCD\x02\u04B0\u04B2\x05\xF8}\x02\u04B1\u04B0\x03\x02" +
        "\x02\x02\u04B1\u04B2\x03\x02\x02\x02\u04B2\u04B6\x03\x02\x02\x02\u04B3" +
        "\u04B4\x05\u0130\x99\x02\u04B4\u04B5\x07\x10\x02\x02\u04B5\u04B7\x03\x02" +
        "\x02\x02\u04B6\u04B3\x03\x02\x02\x02\u04B6\u04B7\x03\x02\x02\x02\u04B7" +
        "\u04B8\x03\x02\x02\x02\u04B8\u04B9\x05\u014A\xA6\x02\u04B9}\x03\x02\x02" +
        "\x02\u04BA\u04BB\x05\u0186\xC4\x02\u04BB\u04BD\x05\u01F8\xFD\x02\u04BC" +
        "\u04BE\x05\xF8}\x02\u04BD\u04BC\x03\x02\x02\x02\u04BD\u04BE\x03\x02\x02" +
        "\x02\u04BE\u04BF\x03\x02\x02\x02\u04BF\u04C0\x05\u0140\xA1\x02\u04C0\u04C4" +
        "\x05\u01CE\xE8\x02\u04C1\u04C2\x05\u0130\x99\x02\u04C2\u04C3\x07\x10\x02" +
        "\x02\u04C3\u04C5\x03\x02\x02\x02\u04C4\u04C1\x03\x02\x02\x02\u04C4\u04C5" +
        "\x03\x02\x02\x02\u04C5\u04C6\x03\x02\x02\x02\u04C6\u04C7\x05\u0132\x9A" +
        "\x02\u04C7\x7F\x03\x02\x02\x02\u04C8\u04C9\x05\u0186\xC4\x02\u04C9\u04CB" +
        "\x05\u01E2\xF2\x02\u04CA\u04CC\x05\xF8}\x02\u04CB\u04CA\x03\x02\x02\x02" +
        "\u04CB\u04CC\x03\x02\x02\x02\u04CC\u04CD\x03\x02\x02\x02\u04CD\u04CE\x05" +
        "\u013E\xA0\x02\u04CE\x81\x03\x02\x02\x02\u04CF\u04D0\x05\u0186\xC4\x02" +
        "\u04D0\u04D2\x05\u01F2\xFA\x02\u04D1\u04D3\x05\xF8}\x02\u04D2\u04D1\x03" +
        "\x02\x02\x02\u04D2\u04D3\x03\x02\x02\x02\u04D3\u04D7\x03\x02\x02\x02\u04D4" +
        "\u04D5\x05\u0130\x99\x02\u04D5\u04D6\x07\x10\x02\x02\u04D6\u04D8\x03\x02" +
        "\x02\x02\u04D7\u04D4\x03\x02\x02\x02\u04D7\u04D8\x03\x02\x02\x02\u04D8" +
        "\u04D9\x03\x02\x02\x02\u04D9\u04DA\x05\u0132\x9A\x02\u04DA\x83\x03\x02" +
        "\x02\x02\u04DB\u04DC\x05\u0186\xC4\x02\u04DC\u04DE\x05\u01B2\xDA\x02\u04DD" +
        "\u04DF\x05\xF8}\x02\u04DE\u04DD\x03\x02\x02\x02\u04DE\u04DF\x03\x02\x02" +
        "\x02\u04DF\u04E0\x03\x02\x02\x02\u04E0\u04E1\x05\u0130\x99\x02\u04E1\x85" +
        "\x03\x02\x02\x02\u04E2\u04E3\x05\u0186\xC4\x02\u04E3\u04E5\x05\u01A2\xD2" +
        "\x02\u04E4\u04E6\x05\xF8}\x02\u04E5\u04E4\x03\x02\x02\x02\u04E5\u04E6" +
        "\x03\x02\x02\x02\u04E6\u04EA\x03\x02\x02\x02\u04E7\u04E8\x05\u0130\x99" +
        "\x02\u04E8\u04E9\x07\x10\x02\x02\u04E9\u04EB\x03\x02\x02\x02\u04EA\u04E7" +
        "\x03\x02\x02\x02\u04EA\u04EB\x03\x02\x02\x02\u04EB\u04EC\x03\x02\x02\x02" +
        "\u04EC\u04ED\x05\xCAf\x02\u04ED\x87\x03\x02\x02\x02\u04EE\u04EF\x05\u017C" +
        "\xBF\x02\u04EF\u04F1\x05\u01F2\xFA\x02\u04F0\u04F2\x05\xF6|\x02\u04F1" +
        "\u04F0\x03\x02\x02\x02\u04F1\u04F2\x03\x02\x02\x02\u04F2\u04F6\x03\x02" +
        "\x02\x02\u04F3\u04F4\x05\u0130\x99\x02\u04F4\u04F5\x07\x10\x02\x02\u04F5" +
        "\u04F7\x03\x02\x02\x02\u04F6\u04F3\x03\x02\x02\x02\u04F6\u04F7\x03\x02" +
        "\x02\x02\u04F7\u04F8\x03\x02\x02\x02\u04F8\u04F9\x05\u0132\x9A\x02\u04F9" +
        "\u04FA\x05\u0218\u010D\x02\u04FA\u04FB\x05\x9EP\x02\u04FB\u04FD\x05\u021A" +
        "\u010E\x02\u04FC\u04FE\x05\x8AF\x02\u04FD\u04FC\x03\x02\x02\x02\u04FD" +
        "\u04FE\x03\x02\x02\x02\u04FE\x89\x03\x02\x02\x02\u04FF\u0501\x05\u0212" +
        "\u010A\x02\u0500\u0502\x05\x8EH\x02\u0501\u0500\x03\x02\x02\x02\u0501" +
        "\u0502\x03\x02\x02\x02\u0502\u0504\x03\x02\x02\x02\u0503\u0505\x05\x8C" +
        "G\x02\u0504\u0503\x03\x02\x02\x02\u0504\u0505\x03\x02\x02\x02\u0505\x8B" +
        "\x03\x02\x02\x02\u0506\u0507\x05\u0176\xBC\x02\u0507\u0508\x05\u01D4\xEB" +
        "\x02\u0508\u0509\x05\u0172\xBA\x02\u0509\u050A\x05\u0218\u010D\x02\u050A" +
        "\u050C\x05\u0134\x9B\x02\u050B\u050D\x05\u013C\x9F\x02\u050C\u050B\x03" +
        "\x02\x02\x02\u050C\u050D\x03\x02\x02\x02\u050D\u050E\x03\x02\x02\x02\u050E" +
        "\u050F\x05\u021A\u010E\x02\u050F\x8D\x03\x02\x02\x02\u0510\u0516\x05\x90" +
        "I\x02\u0511\u0512\x05\u0164\xB3\x02\u0512\u0513\x05\x90I\x02\u0513\u0515" +
        "\x03\x02\x02\x02\u0514\u0511\x03\x02\x02\x02\u0515\u0518\x03\x02\x02\x02" +
        "\u0516\u0514\x03\x02\x02\x02\u0516\u0517\x03\x02\x02\x02\u0517\x8F\x03" +
        "\x02\x02\x02\u0518\u0516\x03\x02\x02\x02\u0519\u051A\x05\x92J\x02\u051A" +
        "\u051B\x07\xAC\x02\x02\u051B\u051C\x05\x94K\x02\u051C\u0522\x03\x02\x02" +
        "\x02\u051D\u051E\x05\x92J\x02\u051E\u051F\x07\xAC\x02\x02\u051F\u0520" +
        "\x05\x96L\x02\u0520\u0522\x03\x02\x02\x02\u0521\u0519\x03\x02\x02\x02" +
        "\u0521\u051D\x03\x02\x02\x02\u0522\x91\x03\x02\x02\x02\u0523\u0524\x07" +
        "\xAA\x02\x02\u0524\x93\x03\x02\x02\x02\u0525\u0528\x05\u012A\x96\x02\u0526" +
        "\u0528\x05\u0128\x95\x02\u0527\u0525\x03\x02\x02\x02\u0527\u0526\x03\x02" +
        "\x02\x02\u0528\x95\x03\x02\x02\x02\u0529\u052A\x05\u021C\u010F\x02\u052A" +
        "\u0530\x05\x98M\x02\u052B\u052C\x05\u0228\u0115\x02\u052C\u052D\x05\x98" +
        "M\x02\u052D\u052F\x03\x02\x02\x02\u052E\u052B\x03\x02\x02\x02\u052F\u0532" +
        "\x03\x02\x02\x02\u0530\u052E\x03\x02\x02\x02\u0530\u0531\x03\x02\x02\x02" +
        "\u0531\u0533\x03\x02\x02\x02\u0532\u0530\x03\x02\x02\x02\u0533\u0534\x05" +
        "\u021E\u0110\x02\u0534\x97\x03\x02\x02\x02\u0535\u0536\x05\x9AN\x02\u0536" +
        "\u0537\x07\v\x02\x02\u0537\u0538\x05\x9CO\x02\u0538\x99\x03\x02\x02\x02" +
        "\u0539\u053A\x05\u012A\x96\x02\u053A\x9B\x03\x02\x02\x02\u053B\u053E\x05" +
        "\u012A\x96\x02\u053C\u053E\x05\u0128\x95\x02\u053D\u053B\x03\x02\x02\x02" +
        "\u053D\u053C\x03\x02\x02\x02\u053E\x9D\x03\x02\x02\x02\u053F\u0545\x05" +
        "\xA0Q\x02\u0540\u0541\x05\u0228\u0115\x02\u0541\u0542\x05\xA0Q\x02\u0542" +
        "\u0544\x03\x02\x02\x02\u0543\u0540\x03\x02\x02\x02\u0544\u0547\x03\x02" +
        "\x02\x02\u0545\u0543\x03\x02\x02\x02\u0545\u0546\x03\x02\x02\x02\u0546" +
        "\u054B\x03\x02\x02\x02\u0547\u0545\x03\x02\x02\x02\u0548\u0549\x05\u0228" +
        "\u0115\x02\u0549\u054A\x05\xA4S\x02\u054A\u054C\x03\x02\x02\x02\u054B" +
        "\u0548\x03\x02\x02\x02\u054B\u054C\x03\x02\x02\x02\u054C\x9F\x03\x02\x02" +
        "\x02\u054D\u054E\x05\u0134\x9B\x02\u054E\u0550\x05\u0136\x9C\x02\u054F" +
        "\u0551\x05\xA2R\x02\u0550\u054F\x03\x02\x02\x02\u0550\u0551\x03\x02\x02" +
        "\x02\u0551\xA1\x03\x02\x02\x02\u0552\u0553\x05\u01D8\xED\x02\u0553\u0554" +
        "\x05\u01AE\xD8\x02\u0554\xA3\x03\x02\x02\x02\u0555\u0556\x05\u01D8\xED" +
        "\x02\u0556\u0557\x05\u01AE\xD8\x02\u0557\u0558\x05\u0218\u010D\x02\u0558" +
        "\u0559\x05\xA6T\x02\u0559\u055A\x05\u021A\u010E\x02\u055A\xA5\x03\x02" +
        "\x02\x02\u055B\u055F\x05\xA8U\x02\u055C\u055F\x05\xAAV\x02\u055D\u055F" +
        "\x05\xACW\x02\u055E\u055B\x03\x02\x02\x02\u055E\u055C\x03\x02\x02\x02" +
        "\u055E\u055D\x03\x02\x02\x02\u055F\xA7\x03\x02\x02\x02\u0560\u0561\x05" +
        "\u0134\x9B\x02\u0561\xA9\x03\x02\x02\x02\u0562\u0563\x05\xB2Z\x02\u0563" +
        "\u0564\x05\u0228\u0115\x02\u0564\u0565\x05\xB0Y\x02\u0565\xAB\x03\x02" +
        "\x02\x02\u0566\u0567\x05\u0218\u010D\x02\u0567\u0568\x05\xAEX\x02\u0568" +
        "\u0569\x05\u021A\u010E\x02\u0569\u056A\x05\u0228\u0115\x02\u056A\u056B" +
        "\x05\xB0Y\x02\u056B\xAD\x03\x02\x02\x02\u056C\u0572\x05\xB2Z\x02\u056D" +
        "\u056E\x05\u0228\u0115\x02\u056E\u056F\x05\xB2Z\x02\u056F\u0571\x03\x02" +
        "\x02\x02\u0570\u056D\x03\x02\x02\x02\u0571\u0574\x03\x02\x02\x02\u0572" +
        "\u0570\x03\x02\x02\x02\u0572\u0573\x03\x02\x02\x02\u0573\xAF\x03\x02\x02" +
        "\x02\u0574\u0572\x03\x02\x02\x02\u0575\u057B\x05\xB4[\x02\u0576\u0577" +
        "\x05\u0228\u0115\x02\u0577\u0578\x05\xB4[\x02\u0578\u057A\x03\x02\x02" +
        "\x02\u0579\u0576\x03\x02\x02\x02\u057A\u057D\x03\x02\x02\x02\u057B\u0579" +
        "\x03\x02\x02\x02\u057B\u057C\x03\x02\x02\x02\u057C\xB1\x03\x02\x02\x02" +
        "\u057D\u057B\x03\x02\x02\x02\u057E\u057F\x05\u0134\x9B\x02\u057F\xB3\x03" +
        "\x02\x02\x02\u0580\u0581\x05\u0134\x9B\x02\u0581\xB5\x03\x02\x02\x02\u0582" +
        "\u0583\x05\u0166\xB4\x02\u0583\u0584\x05\u016E\xB8\x02\u0584\xB7\x03\x02" +
        "\x02\x02\u0585\u0587\x05\u0170\xB9\x02\u0586\u0588\x05\xBA^\x02\u0587" +
        "\u0586\x03\x02\x02\x02\u0587\u0588\x03\x02\x02\x02\u0588\u0589\x03\x02" +
        "\x02\x02\u0589\u058B\x05\u016E\xB8\x02\u058A\u058C\x05\xF4{\x02\u058B" +
        "\u058A\x03\x02\x02\x02\u058B\u058C\x03\x02\x02\x02\u058C\xB9\x03\x02\x02" +
        "\x02\u058D\u0590\x05\u01BC\xDF\x02\u058E\u0590\x05\u0200\u0101\x02\u058F" +
        "\u058D\x03\x02\x02\x02\u058F\u058E\x03\x02\x02\x02\u0590\xBB\x03\x02\x02" +
        "\x02\u0591\u0592\x05\u0162\xB2\x02\u0592\u0593\x05\u01B2\xDA\x02\u0593" +
        "\u0594\x05\u0130\x99\x02\u0594\u0595\x05\u0212\u010A\x02\u0595\u0596\x05" +
        "\u01DE\xF0\x02\u0596\u0597\x07\xAC\x02\x02\u0597\u0598\x05\u021C\u010F" +
        "\x02\u0598\u0599\x05\xBE`\x02\u0599\u059D\x05\u021E\u0110\x02\u059A\u059B" +
        "\x05\u0164\xB3\x02\u059B\u059C\x05\xC2b\x02\u059C\u059E\x03\x02\x02\x02" +
        "\u059D\u059A\x03\x02\x02\x02\u059D\u059E\x03\x02\x02\x02\u059E\xBD\x03" +
        "\x02\x02\x02\u059F\u05A5\x05\xC0a\x02\u05A0\u05A1\x05\u0228\u0115\x02" +
        "\u05A1\u05A2\x05\xC0a\x02\u05A2\u05A4\x03\x02\x02\x02\u05A3\u05A0\x03" +
        "\x02\x02\x02\u05A4\u05A7\x03\x02\x02\x02\u05A5\u05A3\x03\x02\x02\x02\u05A5" +
        "\u05A6\x03\x02\x02\x02\u05A6\xBF\x03\x02\x02\x02\u05A7\u05A5\x03\x02\x02" +
        "\x02\u05A8\u05A9\x07\xA5\x02\x02\u05A9\u05AA\x07\v\x02\x02\u05AA\u05AF" +
        "\x07\xA5\x02\x02\u05AB\u05AC\x07\xA5\x02\x02\u05AC\u05AD\x07\v\x02\x02" +
        "\u05AD\u05AF\x07\xA6\x02\x02\u05AE\u05A8\x03\x02\x02\x02\u05AE\u05AB\x03" +
        "\x02\x02\x02\u05AF\xC1\x03\x02\x02\x02\u05B0\u05B1\x05\u0188\xC5\x02\u05B1" +
        "\u05B2\x07\xAC\x02\x02\u05B2\u05B3\x05\u012C\x97\x02\u05B3\xC3\x03\x02" +
        "\x02\x02\u05B4\u05B5\x05\u0204\u0103\x02\u05B5\u05B6\x05\u0130\x99\x02" +
        "\u05B6\xC5\x03\x02\x02\x02\u05B7\u05B9\x05\u01FA\xFE\x02\u05B8\u05BA\x05" +
        "\u01F2\xFA\x02\u05B9\u05B8\x03\x02\x02\x02\u05B9\u05BA\x03\x02\x02\x02" +
        "\u05BA\u05BE\x03\x02\x02\x02\u05BB\u05BC\x05\u0130\x99\x02\u05BC\u05BD" +
        "\x07\x10\x02\x02\u05BD\u05BF\x03\x02\x02\x02\u05BE\u05BB\x03\x02\x02\x02" +
        "\u05BE\u05BF\x03\x02\x02\x02\u05BF\u05C0\x03\x02\x02\x02\u05C0\u05C1\x05" +
        "\u0132\x9A\x02\u05C1\xC7\x03\x02\x02\x02\u05C2\u05C3\x05\u017C\xBF\x02" +
        "\u05C3\u05C5\x05\u01A2\xD2\x02\u05C4\u05C6\x05\xF6|\x02\u05C5\u05C4\x03" +
        "\x02\x02\x02\u05C5\u05C6\x03\x02\x02\x02\u05C6\u05C8\x03\x02\x02\x02\u05C7" +
        "\u05C9\x05\xCAf\x02\u05C8\u05C7\x03\x02\x02\x02\u05C8\u05C9\x03\x02\x02" +
        "\x02\u05C9\u05CA\x03\x02\x02\x02\u05CA\u05CE\x05\u01CE\xE8\x02\u05CB\u05CC" +
        "\x05\u0130\x99\x02\u05CC\u05CD\x07\x10\x02\x02\u05CD\u05CF\x03\x02\x02" +
        "\x02\u05CE\u05CB\x03\x02\x02\x02\u05CE\u05CF\x03\x02\x02\x02\u05CF\u05D0" +
        "\x03\x02\x02\x02\u05D0\u05D1\x05\u0132\x9A\x02\u05D1\u05D2\x05\u0218\u010D" +
        "\x02\u05D2\u05D3\x05\xCCg\x02\u05D3\u05D4\x05\u021A\u010E\x02\u05D4\xC9" +
        "\x03\x02\x02\x02\u05D5\u05D8\x07\xAA\x02\x02\u05D6\u05D8\x05\u012A\x96" +
        "\x02\u05D7\u05D5\x03\x02\x02\x02\u05D7\u05D6\x03\x02\x02\x02\u05D8\xCB" +
        "\x03\x02\x02\x02\u05D9\u05DE\x05\u0134\x9B\x02\u05DA\u05DE\x05\xCEh\x02" +
        "\u05DB\u05DE\x05\xD0i\x02\u05DC\u05DE\x05\xD2j\x02\u05DD\u05D9\x03\x02" +
        "\x02\x02\u05DD\u05DA\x03\x02\x02\x02\u05DD\u05DB\x03\x02\x02\x02\u05DD" +
        "\u05DC\x03\x02\x02\x02\u05DE\xCD\x03\x02\x02\x02\u05DF\u05E0\x05\u01B0" +
        "\xD9\x02\u05E0\u05E1\x05\u0218\u010D\x02\u05E1\u05E2\x07\xAA\x02\x02\u05E2" +
        "\u05E3\x05\u021A\u010E\x02\u05E3\xCF\x03\x02\x02\x02\u05E4\u05E5\x05\u018A" +
        "\xC6\x02\u05E5\u05E6\x05\u0218\u010D\x02\u05E6\u05E7\x07\xAA\x02\x02\u05E7" +
        "\u05E8\x05\u021A\u010E\x02\u05E8\xD1\x03\x02\x02\x02\u05E9\u05EA\x05\u0196" +
        "\xCC\x02\u05EA\u05EB\x05\u0218\u010D\x02\u05EB\u05EC\x07\xAA\x02\x02\u05EC" +
        "\u05ED\x05\u021A\u010E\x02\u05ED\xD3\x03\x02\x02\x02\u05EE\u05F0\x05\xB8" +
        "]\x02\u05EF\u05EE\x03\x02\x02\x02\u05EF\u05F0\x03\x02\x02\x02\u05F0\u05F1" +
        "\x03\x02\x02\x02\u05F1\u05F3\x05\u017E\xC0\x02\u05F2\u05F4\x05\xD6l\x02" +
        "\u05F3\u05F2\x03\x02\x02\x02\u05F3\u05F4\x03\x02\x02\x02\u05F4\u05F5\x03" +
        "\x02\x02\x02\u05F5\u05F7\x05\u0108\x85\x02\u05F6\u05F8\x05\xF4{\x02\u05F7" +
        "\u05F6\x03\x02\x02\x02\u05F7\u05F8\x03\x02\x02\x02\u05F8\u05F9\x03\x02" +
        "\x02\x02\u05F9\u05FC\x05\u0110\x89\x02\u05FA\u05FD\x05\xF8}\x02\u05FB" +
        "\u05FD\x05\xDCo\x02\u05FC\u05FA\x03\x02\x02\x02\u05FC\u05FB\x03\x02\x02" +
        "\x02\u05FC\u05FD\x03\x02\x02\x02\u05FD\xD5\x03\x02\x02\x02\u05FE\u0604" +
        "\x05\xD8m\x02\u05FF\u0600\x05\u0228\u0115\x02\u0600\u0601\x05\xD8m\x02" +
        "\u0601\u0603\x03\x02\x02\x02\u0602\u05FF\x03\x02\x02\x02\u0603\u0606\x03" +
        "\x02\x02\x02\u0604\u0602\x03\x02\x02\x02\u0604\u0605\x03\x02\x02\x02\u0605" +
        "\xD7\x03\x02\x02\x02\u0606\u0604\x03\x02\x02\x02\u0607\u0611\x07\xAA\x02" +
        "\x02\u0608\u0609\x07\xAA\x02\x02\u0609\u060C\x07\x07\x02\x02\u060A\u060D" +
        "\x05\u012A\x96\x02\u060B\u060D\x05\u0126\x94\x02\u060C\u060A\x03\x02\x02" +
        "\x02\u060C\u060B\x03\x02\x02\x02\u060D\u060E\x03\x02\x02\x02\u060E\u060F" +
        "\x07\b\x02\x02\u060F\u0611\x03\x02\x02\x02\u0610\u0607\x03\x02\x02\x02" +
        "\u0610\u0608\x03\x02\x02\x02\u0611\xD9\x03\x02\x02\x02\u0612\u0614\x05" +
        "\xB8]\x02\u0613\u0612\x03\x02\x02\x02\u0613\u0614\x03\x02\x02\x02\u0614" +
        "\u0615\x03\x02\x02\x02\u0615\u0619\x05\u0202\u0102\x02\u0616\u0617\x05" +
        "\u0130\x99\x02\u0617\u0618\x07\x10\x02\x02\u0618\u061A\x03\x02\x02\x02" +
        "\u0619\u0616\x03\x02\x02\x02\u0619\u061A\x03\x02\x02\x02\u061A\u061B\x03" +
        "\x02\x02\x02\u061B\u061D\x05\u0132\x9A\x02\u061C\u061E\x05\xEEx\x02\u061D" +
        "\u061C\x03\x02\x02\x02\u061D\u061E\x03\x02\x02\x02\u061E\u061F\x03\x02" +
        "\x02\x02\u061F\u0620\x05\u01E8\xF5\x02\u0620\u0621\x05\xE2r\x02\u0621" +
        "\u0624\x05\u0110\x89\x02\u0622\u0625\x05\xF8}\x02\u0623\u0625\x05\xDC" +
        "o\x02\u0624\u0622\x03\x02\x02\x02\u0624\u0623\x03\x02\x02\x02\u0624\u0625" +
        "\x03\x02\x02\x02\u0625\xDB\x03\x02\x02\x02\u0626\u0627\x05\u019E\xD0\x02" +
        "\u0627\u0628\x05\xDEp\x02\u0628\xDD\x03\x02\x02\x02\u0629\u062F\x05\xE0" +
        "q\x02\u062A\u062B\x05\u0164\xB3\x02\u062B\u062C\x05\xE0q\x02\u062C\u062E" +
        "\x03\x02\x02\x02\u062D\u062A\x03\x02\x02\x02\u062E\u0631\x03\x02\x02\x02" +
        "\u062F\u062D\x03\x02\x02\x02\u062F\u0630\x03\x02\x02\x02\u0630\xDF\x03" +
        "\x02\x02\x02\u0631\u062F\x03\x02\x02\x02\u0632\u0633\x07\xAA\x02\x02\u0633" +
        "\u0634\x07\xAC\x02\x02\u0634\u0635\x05\u0124\x93\x02\u0635\xE1\x03\x02" +
        "\x02\x02\u0636\u063C\x05\xE4s\x02\u0637\u0638\x05\u0228\u0115\x02\u0638" +
        "\u0639\x05\xE4s\x02\u0639\u063B\x03\x02\x02\x02\u063A\u0637\x03\x02\x02" +
        "\x02\u063B\u063E\x03\x02\x02\x02\u063C\u063A\x03\x02\x02\x02\u063C\u063D" +
        "\x03\x02\x02\x02\u063D\xE3\x03\x02\x02\x02\u063E\u063C\x03\x02\x02\x02" +
        "\u063F\u0640\x07\xAA\x02\x02\u0640\u0645\x07\xAC\x02\x02\u0641\u0646\x05" +
        "\u0124\x93\x02\u0642\u0646\x05\xE8u\x02\u0643\u0646\x05\xE6t\x02\u0644" +
        "\u0646\x05\xEAv\x02\u0645\u0641\x03\x02\x02\x02\u0645\u0642\x03\x02\x02" +
        "\x02\u0645\u0643\x03\x02\x02\x02\u0645\u0644\x03\x02\x02\x02\u0646\u0675" +
        "\x03\x02\x02\x02\u0647\u0648\x07\xAA\x02\x02\u0648\u0649\x07\xAC\x02\x02" +
        "\u0649\u064A\x07\xAA\x02\x02\u064A\u064B\t\x02\x02\x02\u064B\u0675\x05" +
        "\u0126\x94\x02\u064C\u064D\x07\xAA\x02\x02\u064D\u064E\x07\xAC\x02\x02" +
        "\u064E\u064F\x07\xAA\x02\x02\u064F\u0650\t\x02\x02\x02\u0650\u0675\x05" +
        "\xE6t\x02\u0651\u0652\x07\xAA\x02\x02\u0652\u0653\x07\xAC\x02\x02\u0653" +
        "\u0654\x05\xE6t\x02\u0654\u0655\t\x02\x02\x02\u0655\u0656\x07\xAA\x02" +
        "\x02\u0656\u0675\x03\x02\x02\x02\u0657\u0658\x07\xAA\x02\x02\u0658\u0659" +
        "\x07\xAC\x02\x02\u0659\u065A\x07\xAA\x02\x02\u065A\u065B\t\x02\x02\x02" +
        "\u065B\u0675\x05\xE8u\x02\u065C\u065D\x07\xAA\x02\x02\u065D\u065E\x07" +
        "\xAC\x02\x02\u065E\u065F\x05\xE8u\x02\u065F\u0660\t\x02\x02\x02\u0660" +
        "\u0661\x07\xAA\x02\x02\u0661\u0675\x03\x02\x02\x02\u0662\u0663\x07\xAA" +
        "\x02\x02\u0663\u0664\x07\xAC\x02\x02\u0664\u0665\x07\xAA\x02\x02\u0665" +
        "\u0666\t\x02\x02\x02\u0666\u0675\x05\xEAv\x02\u0667\u0668\x07\xAA\x02" +
        "\x02\u0668\u0669\x07\xAC\x02\x02\u0669\u066A\x05\xEAv\x02\u066A\u066B" +
        "\t\x02\x02\x02\u066B\u066C\x07\xAA\x02\x02\u066C\u0675\x03\x02\x02\x02" +
        "\u066D\u066E\x07\xAA\x02\x02\u066E\u066F\x05\u0224\u0113\x02\u066F\u0670" +
        "\x05\u0126\x94\x02\u0670\u0671\x05\u0226\u0114\x02\u0671\u0672\x07\xAC" +
        "\x02\x02\u0672\u0673\x05\u0124\x93\x02\u0673\u0675\x03\x02\x02\x02\u0674" +
        "\u063F\x03\x02\x02\x02\u0674\u0647\x03\x02\x02\x02\u0674\u064C\x03\x02" +
        "\x02\x02\u0674\u0651\x03\x02\x02\x02\u0674\u0657\x03\x02\x02\x02\u0674" +
        "\u065C\x03\x02\x02\x02\u0674\u0662\x03\x02\x02\x02\u0674\u0667\x03\x02" +
        "\x02\x02\u0674\u066D\x03\x02\x02\x02\u0675\xE5\x03\x02\x02\x02\u0676\u0677" +
        "\x05\u021C\u010F\x02\u0677\u067D\x05\u0124\x93\x02\u0678\u0679\x05\u0228" +
        "\u0115\x02\u0679\u067A\x05\u0124\x93\x02\u067A\u067C\x03\x02\x02\x02\u067B" +
        "\u0678\x03\x02\x02\x02\u067C\u067F\x03\x02\x02\x02\u067D\u067B\x03\x02" +
        "\x02\x02\u067D\u067E\x03\x02\x02\x02\u067E\u0680\x03\x02\x02\x02\u067F" +
        "\u067D\x03\x02\x02\x02\u0680\u0681\x05\u021E\u0110\x02\u0681\xE7\x03\x02" +
        "\x02\x02\u0682\u0683\x05\u021C\u010F\x02\u0683\u0684\x05\u0124\x93\x02" +
        "\u0684\u0685\x05\u022A\u0116\x02\u0685\u0686\x05\u0124\x93\x02\u0686\u068D" +
        "\x03\x02\x02\x02\u0687\u0688\x05\u0124\x93\x02\u0688\u0689\x05\u022A\u0116" +
        "\x02\u0689\u068A\x05\u0124\x93\x02\u068A\u068C\x03\x02\x02\x02\u068B\u0687" +
        "\x03\x02\x02\x02\u068C\u068F\x03\x02\x02\x02\u068D\u068B\x03\x02\x02\x02" +
        "\u068D\u068E\x03\x02\x02\x02\u068E\u0690\x03\x02\x02\x02\u068F\u068D\x03" +
        "\x02\x02\x02\u0690\u0691\x05\u021E\u0110\x02\u0691\xE9\x03\x02\x02\x02" +
        "\u0692\u0693\x05\u0224\u0113\x02\u0693\u0699\x05\u0124\x93\x02\u0694\u0695" +
        "\x05\u022A\u0116\x02\u0695\u0696\x05\u0124\x93\x02\u0696\u0698\x03\x02" +
        "\x02\x02\u0697\u0694\x03\x02\x02\x02\u0698\u069B\x03\x02\x02\x02\u0699" +
        "\u0697\x03\x02\x02\x02\u0699\u069A\x03\x02\x02\x02\u069A\u069C\x03\x02" +
        "\x02\x02\u069B\u0699\x03\x02\x02\x02\u069C\u069D\x05\u0226\u0114\x02\u069D" +
        "\xEB\x03\x02\x02\x02\u069E\u06A1\x05\xB8]\x02\u069F\u06A1\x03\x02\x02" +
        "\x02\u06A0\u069E\x03";
    CqlParser._serializedATNSegment3 = "\x02\x02\x02\u06A0\u069F\x03\x02\x02\x02\u06A1\u06A2\x03\x02\x02\x02\u06A2" +
        "\u06A3\x05\u01A8\xD5\x02\u06A3\u06A8\x05\u01AA\xD6\x02\u06A4\u06A5\x05" +
        "\u0130\x99\x02\u06A5\u06A6\x07\x10\x02\x02\u06A6\u06A9\x03\x02\x02\x02" +
        "\u06A7\u06A9\x03\x02\x02\x02\u06A8\u06A4\x03\x02\x02\x02\u06A8\u06A7\x03" +
        "\x02\x02\x02\u06A9\u06AA\x03\x02\x02\x02\u06AA\u06AB\x05\u0132\x9A\x02" +
        "\u06AB\u06AC\x05\xFC\x7F\x02\u06AC\u06AF\x05\xFA~\x02\u06AD\u06B0\x05" +
        "\xF6|\x02\u06AE\u06B0\x03\x02\x02\x02\u06AF\u06AD\x03\x02\x02\x02\u06AF" +
        "\u06AE\x03\x02\x02\x02\u06B0\u06B2\x03\x02\x02\x02\u06B1\u06B3\x05\xEE" +
        "x\x02\u06B2\u06B1\x03\x02\x02\x02\u06B2\u06B3\x03\x02\x02\x02\u06B3\xED" +
        "\x03\x02\x02\x02\u06B4\u06B5\x05\u020A\u0106\x02\u06B5\u06B6\x05\xF2z" +
        "\x02\u06B6\u06C5\x03\x02\x02\x02\u06B7\u06B8\x05\u020A\u0106\x02\u06B8" +
        "\u06B9\x05\xF2z\x02\u06B9\u06BA\x05\u0164\xB3\x02\u06BA\u06BB\x05\xF0" +
        "y\x02\u06BB\u06C5\x03\x02\x02\x02\u06BC\u06BD\x05\u020A\u0106\x02\u06BD" +
        "\u06BE\x05\xF0y\x02\u06BE\u06C5\x03\x02\x02\x02\u06BF\u06C0\x05\u020A" +
        "\u0106\x02\u06C0\u06C1\x05\xF0y\x02\u06C1\u06C2\x05\u0164\xB3\x02\u06C2" +
        "\u06C3\x05\xF2z\x02\u06C3\u06C5\x03\x02\x02\x02\u06C4\u06B4\x03\x02\x02" +
        "\x02\u06C4\u06B7\x03\x02\x02\x02\u06C4\u06BC\x03\x02\x02\x02\u06C4\u06BF" +
        "\x03\x02\x02\x02\u06C5\xEF\x03\x02\x02\x02\u06C6\u06C7\x05\u01F4\xFB\x02" +
        "\u06C7\u06C8\x05\u0126\x94\x02\u06C8\xF1\x03\x02\x02\x02\u06C9\u06CA\x05" +
        "\u01FC\xFF\x02\u06CA\u06CB\x05\u0126\x94\x02\u06CB\xF3\x03\x02\x02\x02" +
        "\u06CC\u06CD\x05\u020A\u0106\x02\u06CD\u06CE\x05\xF0y\x02\u06CE\xF5\x03" +
        "\x02\x02\x02\u06CF\u06D0\x05\u019E\xD0\x02\u06D0\u06D1\x05\u01C8\xE5\x02" +
        "\u06D1\u06D2\x05\u018E\xC8\x02\u06D2\xF7\x03\x02\x02\x02\u06D3\u06D4\x05" +
        "\u019E\xD0\x02\u06D4\u06D5\x05\u018E\xC8\x02\u06D5\xF9\x03\x02\x02\x02" +
        "\u06D6\u06D7\x05\u020C\u0107\x02\u06D7\u06D8\x07\x03\x02\x02\u06D8\u06D9" +
        "\x05\u0100\x81\x02\u06D9\u06DA\x07\x04\x02\x02\u06DA\xFB\x03\x02\x02\x02" +
        "\u06DB\u06DC\x07\x03\x02\x02\u06DC\u06DD\x05\xFE\x80\x02\u06DD\u06DE\x07" +
        "\x04\x02\x02\u06DE\xFD\x03\x02\x02\x02\u06DF\u06E5\x05\u0134\x9B\x02\u06E0" +
        "\u06E1\x05\u0228\u0115\x02\u06E1\u06E2\x05\u0134\x9B\x02\u06E2\u06E4\x03" +
        "\x02\x02\x02\u06E3\u06E0\x03\x02\x02\x02\u06E4\u06E7\x03\x02\x02\x02\u06E5" +
        "\u06E3\x03\x02\x02\x02\u06E5\u06E6\x03\x02\x02\x02\u06E6\xFF\x03\x02\x02" +
        "\x02\u06E7\u06E5\x03\x02\x02\x02\u06E8\u06ED\x05\u0124\x93\x02\u06E9\u06ED" +
        "\x05\xE8u\x02\u06EA\u06ED\x05\xE6t\x02\u06EB\u06ED\x05\xEAv\x02\u06EC" +
        "\u06E8\x03\x02\x02\x02\u06EC\u06E9\x03\x02\x02\x02\u06EC\u06EA\x03\x02" +
        "\x02\x02\u06EC\u06EB\x03\x02\x02\x02\u06ED\u06F7\x03\x02\x02\x02\u06EE" +
        "\u06F3\x05\u0228\u0115\x02\u06EF\u06F4\x05\u0124\x93\x02\u06F0\u06F4\x05" +
        "\xE8u\x02\u06F1\u06F4\x05\xE6t\x02\u06F2\u06F4\x05\xEAv\x02\u06F3\u06EF" +
        "\x03\x02\x02\x02\u06F3\u06F0\x03\x02\x02\x02\u06F3\u06F1\x03\x02\x02\x02" +
        "\u06F3\u06F2\x03\x02\x02\x02\u06F4\u06F6\x03\x02\x02\x02\u06F5\u06EE\x03" +
        "\x02\x02\x02\u06F6\u06F9\x03\x02\x02\x02\u06F7\u06F5\x03\x02\x02\x02\u06F7" +
        "\u06F8\x03\x02\x02\x02\u06F8\u0101\x03\x02\x02\x02\u06F9\u06F7\x03\x02" +
        "\x02\x02\u06FA\u06FD\x05\u01E6\xF4\x02\u06FB\u06FE\x05\u0112\x8A\x02\u06FC" +
        "\u06FE\x03\x02\x02\x02\u06FD\u06FB\x03\x02\x02\x02\u06FD\u06FC\x03\x02" +
        "\x02\x02\u06FE\u06FF\x03\x02\x02\x02\u06FF\u0700\x05\u0114\x8B\x02\u0700" +
        "\u0702\x05\u0108\x85\x02\u0701\u0703\x05\u0110\x89\x02\u0702\u0701\x03" +
        "\x02\x02\x02\u0702\u0703\x03\x02\x02\x02\u0703\u0705\x03\x02\x02\x02\u0704" +
        "\u0706\x05\u010C\x87\x02\u0705\u0704\x03\x02\x02\x02\u0705\u0706\x03\x02" +
        "\x02\x02\u0706\u0708\x03\x02\x02\x02\u0707\u0709\x05\u0106\x84\x02\u0708" +
        "\u0707\x03\x02\x02\x02\u0708\u0709\x03\x02\x02\x02\u0709\u070B\x03\x02" +
        "\x02\x02\u070A\u070C\x05\u0104\x83\x02\u070B\u070A\x03\x02\x02\x02\u070B" +
        "\u070C\x03\x02\x02\x02\u070C\u0103\x03\x02\x02\x02\u070D\u070E\x05\u0160" +
        "\xB1\x02\u070E\u070F\x05\u0190\xC9\x02\u070F\u0105\x03\x02\x02\x02\u0710" +
        "\u0711\x05\u01B8\xDD\x02\u0711\u0712\x05\u0126\x94\x02\u0712\u0107\x03" +
        "\x02\x02\x02\u0713\u0714\x05\u0194\xCB\x02\u0714\u0715\x05\u010A\x86\x02" +
        "\u0715\u0109\x03\x02\x02\x02\u0716\u071B\x07\xAA\x02\x02\u0717\u0718\x07" +
        "\xAA\x02\x02\u0718\u0719\x07\x10\x02\x02\u0719\u071B\x07\xAA\x02\x02\u071A" +
        "\u0716\x03\x02\x02\x02\u071A\u0717\x03\x02\x02\x02\u071B\u010B\x03\x02" +
        "\x02\x02\u071C\u071D\x05\u01D4\xEB\x02\u071D\u071E\x05\u0172\xBA\x02\u071E" +
        "\u071F\x05\u010E\x88\x02\u071F\u010D\x03\x02\x02\x02\u0720\u0723\x07\xAA" +
        "\x02\x02\u0721\u0724\x05\u016A\xB6\x02\u0722\u0724\x05\u0180\xC1\x02\u0723" +
        "\u0721\x03\x02\x02\x02\u0723\u0722\x03\x02\x02\x02\u0723\u0724\x03\x02" +
        "\x02\x02\u0724\u010F\x03\x02\x02\x02\u0725\u0726\x05\u0210\u0109\x02\u0726" +
        "\u0727\x05\u0118\x8D\x02\u0727\u0111\x03\x02\x02\x02\u0728\u0729\x05\u0184" +
        "\xC3\x02\u0729\u0113\x03\x02\x02\x02\u072A\u072D\x07\x11\x02\x02\u072B" +
        "\u072D\x05\u0116\x8C\x02\u072C\u072A\x03\x02\x02\x02\u072C\u072B\x03\x02" +
        "\x02\x02\u072D\u0733\x03\x02\x02\x02\u072E\u072F\x05\u0228\u0115\x02\u072F" +
        "\u0730\x05\u0116\x8C\x02\u0730\u0732\x03\x02\x02\x02\u0731\u072E\x03\x02" +
        "\x02\x02\u0732\u0735\x03\x02\x02\x02\u0733\u0731\x03\x02\x02\x02\u0733" +
        "\u0734\x03\x02\x02\x02\u0734\u0115\x03\x02\x02\x02\u0735\u0733\x03\x02" +
        "\x02\x02\u0736\u0737\x07\xAA\x02\x02\u0737\u0738\x07\x10\x02\x02\u0738" +
        "\u0746\x07\x11\x02\x02\u0739\u073D\x07\xAA\x02\x02\u073A\u073B\x05\u0168" +
        "\xB5\x02\u073B\u073C\x07\xAA\x02\x02\u073C\u073E\x03\x02\x02\x02\u073D" +
        "\u073A\x03\x02\x02\x02\u073D\u073E\x03\x02\x02\x02\u073E\u0746\x03\x02" +
        "\x02\x02\u073F\u0743\x05\u0120\x91\x02\u0740\u0741\x05\u0168\xB5\x02\u0741" +
        "\u0742\x07\xAA\x02\x02\u0742\u0744\x03\x02\x02\x02\u0743\u0740\x03\x02" +
        "\x02\x02\u0743\u0744\x03\x02\x02\x02\u0744\u0746\x03\x02\x02\x02\u0745" +
        "\u0736\x03\x02\x02\x02\u0745\u0739\x03\x02\x02\x02\u0745\u073F\x03\x02" +
        "\x02\x02\u0746\u0117\x03\x02\x02\x02\u0747\u074D\x05\u011A\x8E\x02\u0748" +
        "\u0749\x05\u0164\xB3\x02\u0749\u074A\x05\u011A\x8E\x02\u074A\u074C\x03" +
        "\x02\x02\x02\u074B\u0748\x03\x02\x02\x02\u074C\u074F\x03\x02\x02\x02\u074D" +
        "\u074B\x03\x02\x02\x02\u074D\u074E\x03\x02\x02\x02\u074E\u0119\x03\x02" +
        "\x02\x02\u074F\u074D\x03\x02\x02\x02\u0750\u0751\x07\xAA\x02\x02\u0751" +
        "\u0752\t\x03\x02\x02\u0752\u076B\x05\u0124\x93\x02\u0753\u0754\x07\xAA" +
        "\x02\x02\u0754\u0755\x07\x10\x02\x02\u0755\u0756\x07\xAA\x02\x02\u0756" +
        "\u0757\t\x03\x02\x02\u0757\u076B\x05\u0124\x93\x02\u0758\u0759\x05\u0120" +
        "\x91\x02\u0759\u075A\t\x03\x02\x02\u075A\u075B\x05\u0124\x93\x02\u075B" +
        "\u076B\x03\x02\x02\x02\u075C\u075D\x05\u0120\x91\x02\u075D\u075E\t\x03" +
        "\x02\x02\u075E\u075F\x05\u0120\x91\x02\u075F\u076B\x03\x02\x02\x02\u0760" +
        "\u0761\x07\xAA\x02\x02\u0761\u0762\x05\u01A0\xD1\x02\u0762\u0764\x07\x03" +
        "\x02\x02\u0763\u0765\x05\u0122\x92\x02\u0764\u0763\x03\x02\x02\x02\u0764" +
        "\u0765\x03\x02\x02\x02\u0765\u0766\x03\x02\x02\x02\u0766\u0767\x07\x04" +
        "\x02\x02\u0767\u076B\x03\x02\x02\x02\u0768\u076B\x05\u011E\x90\x02\u0769" +
        "\u076B\x05\u011C\x8F\x02\u076A\u0750\x03\x02\x02\x02\u076A\u0753\x03\x02" +
        "\x02\x02\u076A\u0758\x03\x02\x02\x02\u076A\u075C\x03\x02\x02\x02\u076A" +
        "\u0760\x03\x02\x02\x02\u076A\u0768\x03\x02\x02\x02\u076A\u0769\x03\x02" +
        "\x02\x02\u076B\u011B\x03\x02\x02\x02\u076C\u076D\x07\xAA\x02\x02\u076D" +
        "\u076E\x05\u017A\xBE\x02\u076E\u076F\x05\u0124\x93\x02\u076F\u011D\x03" +
        "\x02\x02\x02\u0770\u0771\x07\xAA\x02\x02\u0771\u0772\x05\u017A\xBE\x02" +
        "\u0772\u0773\x05\u01AE\xD8\x02\u0773\u0774\x03\x02\x02\x02\u0774\u0775" +
        "\x05\u0124\x93\x02\u0775\u011F\x03\x02\x02\x02\u0776\u0777\x07\xAA\x02" +
        "\x02\u0777\u0778\x07\x03\x02\x02\u0778\u0779\x07\x11\x02\x02\u0779\u0781" +
        "\x07\x04\x02\x02\u077A\u077B\x07\xAA\x02\x02\u077B\u077D\x07\x03\x02\x02" +
        "\u077C\u077E\x05\u0122\x92\x02\u077D\u077C\x03\x02\x02\x02\u077D\u077E" +
        "\x03\x02\x02\x02\u077E\u077F\x03\x02\x02\x02\u077F\u0781\x07\x04\x02\x02" +
        "\u0780\u0776\x03\x02\x02\x02\u0780\u077A\x03\x02\x02\x02\u0781\u0121\x03" +
        "\x02\x02\x02\u0782\u0786\x05\u0124\x93\x02\u0783\u0786\x07\xAA\x02\x02" +
        "\u0784\u0786\x05\u0120\x91\x02\u0785\u0782\x03\x02\x02\x02\u0785\u0783" +
        "\x03\x02\x02\x02\u0785\u0784\x03\x02\x02\x02\u0786\u078F\x03\x02\x02\x02" +
        "\u0787\u078B\x05\u0228\u0115\x02\u0788\u078C\x05\u0124\x93\x02\u0789\u078C" +
        "\x07\xAA\x02\x02\u078A\u078C\x05\u0120\x91\x02\u078B\u0788\x03\x02\x02" +
        "\x02\u078B\u0789\x03\x02\x02\x02\u078B\u078A\x03\x02\x02\x02\u078C\u078E" +
        "\x03\x02\x02\x02\u078D\u0787\x03\x02\x02\x02\u078E\u0791\x03\x02\x02\x02" +
        "\u078F\u078D\x03\x02\x02\x02\u078F\u0790\x03\x02\x02\x02\u0790\u0123\x03" +
        "\x02\x02\x02\u0791\u078F\x03\x02\x02\x02\u0792\u0799\x07\xAB\x02\x02\u0793" +
        "\u0799\x05\u012A\x96\x02\u0794\u0799\x05\u0126\x94\x02\u0795\u0799\x05" +
        "\u012E\x98\x02\u0796\u0799\x05\u012C\x97\x02\u0797\u0799\x05\u01CA\xE6" +
        "\x02\u0798\u0792\x03\x02\x02\x02\u0798\u0793\x03\x02\x02\x02\u0798\u0794" +
        "\x03\x02\x02\x02\u0798\u0795\x03\x02\x02\x02\u0798\u0796\x03\x02\x02\x02" +
        "\u0798\u0797\x03\x02\x02\x02\u0799\u0125\x03\x02\x02\x02\u079A\u079B\x07" +
        "\xA6\x02\x02\u079B\u0127\x03\x02\x02\x02\u079C\u079D\t\x04\x02\x02\u079D" +
        "\u0129\x03\x02\x02\x02\u079E\u079F\x07\xA5\x02\x02\u079F\u012B\x03\x02" +
        "\x02\x02\u07A0\u07A1\t\x05\x02\x02\u07A1\u012D\x03\x02\x02\x02\u07A2\u07A3" +
        "\x07\xA8\x02\x02\u07A3\u012F\x03\x02\x02\x02\u07A4\u07A9\x07\xAA\x02\x02" +
        "\u07A5\u07A6\x07\x17\x02\x02\u07A6\u07A7\x07\xAA\x02\x02\u07A7\u07A9\x07" +
        "\x17\x02\x02\u07A8\u07A4\x03\x02\x02\x02\u07A8\u07A5\x03\x02\x02\x02\u07A9" +
        "\u0131\x03\x02\x02\x02\u07AA\u07AF\x07\xAA\x02\x02\u07AB\u07AC\x07\x17" +
        "\x02\x02\u07AC\u07AD\x07\xAA\x02\x02\u07AD\u07AF\x07\x17\x02\x02\u07AE" +
        "\u07AA\x03\x02\x02\x02\u07AE\u07AB\x03\x02\x02\x02\u07AF\u0133\x03\x02" +
        "\x02\x02\u07B0\u07B5\x07\xAA\x02\x02\u07B1\u07B2\x07\x17\x02\x02\u07B2" +
        "\u07B3\x07\xAA\x02\x02\u07B3\u07B5\x07\x17\x02\x02\u07B4\u07B0\x03\x02" +
        "\x02\x02\u07B4\u07B1\x03\x02\x02\x02\u07B5\u0135\x03\x02\x02\x02\u07B6" +
        "\u07B8\x05\u0138\x9D\x02\u07B7\u07B9\x05\u013A\x9E\x02\u07B8\u07B7\x03" +
        "\x02\x02\x02\u07B8\u07B9\x03\x02\x02\x02\u07B9\u0137\x03\x02\x02\x02\u07BA" +
        "\u07BB\t\x06\x02\x02\u07BB\u0139\x03\x02\x02\x02\u07BC\u07BD\x05\u0220" +
        "\u0111\x02\u07BD\u07C3\x05\u0138\x9D\x02\u07BE\u07BF\x05\u0228\u0115\x02" +
        "\u07BF\u07C0\x05\u0138\x9D\x02\u07C0\u07C2\x03\x02\x02\x02\u07C1\u07BE" +
        "\x03\x02\x02\x02\u07C2\u07C5\x03\x02\x02\x02\u07C3\u07C1\x03\x02\x02\x02" +
        "\u07C3\u07C4\x03\x02\x02\x02\u07C4\u07C6\x03\x02\x02\x02\u07C5\u07C3\x03" +
        "\x02\x02\x02\u07C6\u07C7\x05\u0222\u0112\x02\u07C7\u013B\x03\x02\x02\x02" +
        "\u07C8\u07CB\x05\u016A\xB6\x02\u07C9\u07CB\x05\u0180\xC1\x02\u07CA\u07C8" +
        "\x03\x02\x02\x02\u07CA\u07C9\x03\x02\x02\x02\u07CB\u013D\x03\x02\x02\x02" +
        "\u07CC\u07CD\x07\xAA\x02\x02\u07CD\u013F\x03\x02\x02\x02\u07CE\u07CF\x07" +
        "\xAA\x02\x02\u07CF\u0141\x03\x02\x02\x02\u07D0\u07D1\x05\u012A\x96\x02" +
        "\u07D1\u0143\x03\x02\x02\x02\u07D2\u07D3\x07\xAA\x02\x02\u07D3\u0145\x03" +
        "\x02\x02\x02\u07D4\u07D5\x07\xAA\x02\x02\u07D5\u0147\x03\x02\x02\x02\u07D6" +
        "\u07D7\x07\xAA\x02\x02\u07D7\u0149\x03\x02\x02\x02\u07D8\u07D9\x07\xAA" +
        "\x02\x02\u07D9\u014B\x03\x02\x02\x02\u07DA\u07DB\x07\xAA\x02\x02\u07DB" +
        "\u014D\x03\x02\x02\x02\u07DC\u07DD\x07\xAA\x02\x02\u07DD\u014F\x03\x02" +
        "\x02\x02\u07DE\u07DF\x05\u012A\x96\x02\u07DF\u0151\x03\x02\x02\x02\u07E0" +
        "\u07E1\x07\xAA\x02\x02\u07E1\u0153\x03\x02\x02\x02\u07E2\u07E3\x05\u0156" +
        "\xAC\x02\u07E3\u07E4\x05\u0136\x9C\x02\u07E4\u0155\x03\x02\x02\x02\u07E5" +
        "\u07E6\x07\xAA\x02\x02\u07E6\u0157\x03\x02\x02\x02\u07E7\u07E8\x07\x19" +
        "\x02\x02\u07E8\u0159\x03\x02\x02\x02\u07E9\u07EA\x07\x1A\x02\x02\u07EA" +
        "\u015B\x03\x02\x02\x02\u07EB\u07EC\x07\x1B\x02\x02\u07EC\u015D\x03\x02" +
        "\x02\x02\u07ED\u07EE\x07\x1B\x02\x02\u07EE\u07EF\x07f\x02\x02\u07EF\u015F" +
        "\x03\x02\x02\x02\u07F0\u07F1\x07\x1C\x02\x02\u07F1\u0161\x03\x02\x02\x02" +
        "\u07F2\u07F3\x07\x1D\x02\x02\u07F3\u0163\x03\x02\x02\x02\u07F4\u07F5\x07" +
        "\x1E\x02\x02\u07F5\u0165\x03\x02\x02\x02\u07F6\u07F7\x07 \x02\x02\u07F7" +
        "\u0167\x03\x02\x02\x02\u07F8\u07F9\x07!\x02\x02\u07F9\u0169\x03\x02\x02" +
        "\x02\u07FA\u07FB\x07\"\x02\x02\u07FB\u016B\x03\x02\x02\x02\u07FC\u07FD" +
        "\x07#\x02\x02\u07FD\u016D\x03\x02\x02\x02\u07FE\u07FF\x07$\x02\x02\u07FF" +
        "\u016F\x03\x02\x02\x02\u0800\u0801\x07%\x02\x02\u0801\u0171\x03\x02\x02" +
        "\x02\u0802\u0803\x07&\x02\x02\u0803\u0173\x03\x02\x02\x02\u0804\u0805" +
        "\x07\'\x02\x02\u0805\u0175\x03\x02\x02\x02\u0806\u0807\x07(\x02\x02\u0807" +
        "\u0177\x03\x02\x02\x02\u0808\u0809\x07*\x02\x02\u0809\u0179\x03\x02\x02" +
        "\x02\u080A\u080B\x07,\x02\x02\u080B\u017B\x03\x02\x02\x02\u080C\u080D" +
        "\x07-\x02\x02\u080D\u017D\x03\x02\x02\x02\u080E\u080F\x07/\x02\x02\u080F" +
        "\u017F\x03\x02\x02\x02\u0810\u0811\x070\x02\x02\u0811\u0181\x03\x02\x02" +
        "\x02\u0812\u0813\x071\x02\x02\u0813\u0183\x03\x02\x02\x02\u0814\u0815" +
        "\x072\x02\x02\u0815\u0185\x03\x02\x02\x02\u0816\u0817\x073\x02\x02\u0817" +
        "\u0187\x03\x02\x02\x02\u0818\u0819\x074\x02\x02\u0819\u0189\x03\x02\x02" +
        "\x02\u081A\u081B\x076\x02\x02\u081B\u018B\x03\x02\x02\x02\u081C\u081D" +
        "\x077\x02\x02\u081D\u018D\x03\x02\x02\x02\u081E\u081F\x078\x02\x02\u081F" +
        "\u018F\x03\x02\x02\x02\u0820\u0821\x07:\x02\x02\u0821\u0191\x03\x02\x02" +
        "\x02\u0822\u0823\x07;\x02\x02\u0823\u0193\x03\x02\x02\x02\u0824\u0825" +
        "\x07<\x02\x02\u0825\u0195\x03\x02\x02\x02\u0826\u0827\x07=\x02\x02\u0827" +
        "\u0197\x03\x02\x02\x02\u0828\u0829\x07>\x02\x02\u0829\u0199\x03\x02\x02" +
        "\x02\u082A\u082B\x07?\x02\x02\u082B\u019B\x03\x02\x02\x02\u082C\u082D" +
        "\x07@\x02\x02\u082D\u019D\x03\x02\x02\x02\u082E\u082F\x07A\x02\x02\u082F" +
        "\u019F\x03\x02\x02\x02\u0830\u0831\x07B\x02\x02\u0831\u01A1\x03\x02\x02" +
        "\x02\u0832\u0833\x07C\x02\x02\u0833\u01A3\x03\x02\x02\x02\u0834\u0835" +
        "\x07E\x02\x02\u0835\u01A5\x03\x02\x02\x02\u0836\u0837\x07F\x02\x02\u0837" +
        "\u01A7\x03\x02\x02\x02\u0838\u0839\x07G\x02\x02\u0839\u01A9\x03\x02\x02" +
        "\x02\u083A\u083B\x07H\x02\x02\u083B\u01AB\x03\x02\x02\x02\u083C\u083D" +
        "\x07I\x02\x02\u083D\u01AD\x03\x02\x02\x02\u083E\u083F\x07J\x02\x02\u083F" +
        "\u01AF\x03\x02\x02\x02\u0840\u0841\x07K\x02\x02\u0841\u01B1\x03\x02\x02" +
        "\x02\u0842\u0843\x07L\x02\x02\u0843\u01B3\x03\x02\x02\x02\u0844\u0845" +
        "\x07M\x02\x02\u0845\u01B5\x03\x02\x02\x02\u0846\u0847\x07N\x02\x02\u0847" +
        "\u01B7\x03\x02\x02\x02\u0848\u0849\x07P\x02\x02\u0849\u01B9\x03\x02\x02" +
        "\x02\u084A\u084B\x07\x9A\x02\x02\u084B\u01BB\x03\x02\x02\x02\u084C\u084D" +
        "\x07S\x02\x02\u084D\u01BD\x03\x02\x02\x02\u084E\u084F\x07T\x02\x02\u084F" +
        "\u01BF\x03\x02\x02\x02\u0850\u0851\x07U\x02\x02\u0851\u01C1\x03\x02\x02" +
        "\x02\u0852\u0853\x07V\x02\x02\u0853\u01C3\x03\x02\x02\x02\u0854\u0855" +
        "\x07Y\x02\x02\u0855\u01C5\x03\x02\x02\x02\u0856\u0857\x07X\x02\x02\u0857" +
        "\u01C7\x03\x02\x02\x02\u0858\u0859\x07Z\x02\x02\u0859\u01C9\x03\x02\x02" +
        "\x02\u085A\u085B\x07[\x02\x02\u085B\u01CB\x03\x02\x02\x02\u085C\u085D" +
        "\x07\\\x02\x02\u085D\u01CD\x03\x02\x02\x02\u085E\u085F\x07]\x02\x02\u085F" +
        "\u01CF\x03\x02\x02\x02\u0860\u0861\x07_\x02\x02\u0861\u01D1\x03\x02\x02" +
        "\x02\u0862\u0863\x07`\x02\x02\u0863\u01D3\x03\x02\x02\x02\u0864\u0865" +
        "\x07a\x02\x02\u0865\u01D5\x03\x02\x02\x02\u0866\u0867\x07c\x02\x02\u0867" +
        "\u01D7\x03\x02\x02\x02\u0868\u0869\x07g\x02\x02\u0869\u01D9\x03\x02\x02" +
        "\x02\u086A\u086B\x07i\x02\x02\u086B\u01DB\x03\x02\x02\x02\u086C\u086D" +
        "\x07j\x02\x02\u086D\u01DD\x03\x02\x02\x02\u086E\u086F\x07k\x02\x02\u086F" +
        "\u01DF\x03\x02\x02\x02\u0870\u0871\x07l\x02\x02\u0871\u01E1\x03\x02\x02" +
        "\x02\u0872\u0873\x07n\x02\x02\u0873\u01E3\x03\x02\x02\x02\u0874\u0875" +
        "\x07o\x02\x02\u0875\u01E5\x03\x02\x02\x02\u0876\u0877\x07q\x02\x02\u0877" +
        "\u01E7\x03\x02\x02\x02\u0878\u0879\x07r\x02\x02\u0879\u01E9\x03\x02\x02" +
        "\x02\u087A\u087B\x07s\x02\x02\u087B\u01EB\x03\x02\x02\x02\u087C\u087D" +
        "\x07u\x02\x02\u087D\u01ED\x03\x02\x02\x02\u087E\u087F\x07v\x02\x02\u087F" +
        "\u01EF\x03\x02\x02\x02\u0880\u0881\x07w\x02\x02\u0881\u01F1\x03\x02\x02" +
        "\x02\u0882\u0883\x07x\x02\x02\u0883\u01F3\x03\x02\x02\x02\u0884\u0885" +
        "\x07z\x02\x02\u0885\u01F5\x03\x02\x02\x02\u0886\u0887\x07{\x02\x02\u0887" +
        "\u01F7\x03\x02\x02\x02\u0888\u0889\x07}\x02\x02\u0889\u01F9\x03\x02\x02" +
        "\x02\u088A\u088B\x07\x7F\x02\x02\u088B\u01FB\x03\x02\x02\x02\u088C\u088D" +
        "\x07\x80\x02\x02\u088D\u01FD\x03\x02\x02\x02\u088E\u088F\x07\x82\x02\x02" +
        "\u088F\u01FF\x03\x02\x02\x02\u0890\u0891\x07\x83\x02\x02\u0891\u0201\x03" +
        "\x02\x02\x02\u0892\u0893\x07\x84\x02\x02\u0893\u0203\x03\x02\x02\x02\u0894" +
        "\u0895\x07\x85\x02\x02\u0895\u0205\x03\x02\x02\x02\u0896\u0897\x07\x86" +
        "\x02\x02\u0897\u0207\x03\x02\x02\x02\u0898\u0899\x07\xB1\x02\x02\u0899" +
        "\u0209\x03\x02\x02\x02\u089A\u089B\x07\x87\x02\x02\u089B\u020B\x03\x02" +
        "\x02\x02\u089C\u089D\x07\x89\x02\x02\u089D\u020D\x03\x02\x02\x02\u089E" +
        "\u089F\x07\x8A\x02\x02\u089F\u020F\x03\x02\x02\x02\u08A0\u08A1\x07\x8B" +
        "\x02\x02\u08A1\u0211\x03\x02\x02\x02\u08A2\u08A3\x07\x8C\x02\x02\u08A3" +
        "\u0213\x03\x02\x02\x02\u08A4\u08A5\x07m\x02\x02\u08A5\u0215\x03\x02\x02" +
        "\x02\u08A6\u08A7\x07\x02\x02\x03\u08A7\u0217\x03\x02\x02\x02\u08A8\u08A9" +
        "\x07\x03\x02\x02\u08A9\u0219\x03\x02\x02\x02\u08AA\u08AB\x07\x04\x02\x02" +
        "\u08AB\u021B\x03\x02\x02\x02\u08AC\u08AD\x07\x05\x02\x02\u08AD\u021D\x03" +
        "\x02\x02\x02\u08AE\u08AF\x07\x06\x02\x02\u08AF\u021F\x03\x02\x02\x02\u08B0" +
        "\u08B1\x07\xAD\x02\x02\u08B1\u0221\x03\x02\x02\x02\u08B2\u08B3\x07\xAE" +
        "\x02\x02\u08B3\u0223\x03\x02\x02\x02\u08B4\u08B5\x07\x07\x02\x02\u08B5" +
        "\u0225\x03\x02\x02\x02\u08B6\u08B7\x07\b\x02\x02\u08B7\u0227\x03\x02\x02" +
        "\x02\u08B8\u08B9\x07\t\x02\x02\u08B9\u0229\x03\x02\x02\x02\u08BA\u08BB" +
        "\x07\v\x02\x02\u08BB\u022B\x03\x02\x02\x02\xA9\u022D\u0230\u0236\u023B" +
        "\u023D\u0242\u0245\u0248\u0273\u0284\u0287\u028E\u0293\u029E\u02A8\u02B7" +
        "\u02C2\u02C7\u02D0\u02D5\u02DD\u02E2\u02E6\u02EB\u02F0\u02FF\u0305\u030A" +
        "\u0314\u0319\u0323\u032F\u0336\u033E\u034C\u0351\u035D\u0361\u0365\u036A" +
        "\u036F\u0382\u0389\u0391\u0395\u039A\u03AD\u03B6\u03C5\u03C7\u03D3\u03E1" +
        "\u03E8\u03EF\u03F7\u0402\u0412\u041F\u042A\u0441\u044F\u0456\u045F\u0472" +
        "\u047A\u0480\u0485\u048C\u0491\u0499\u049E\u04A5\u04AA\u04B1\u04B6\u04BD" +
        "\u04C4\u04CB\u04D2\u04D7\u04DE\u04E5\u04EA\u04F1\u04F6\u04FD\u0501\u0504" +
        "\u050C\u0516\u0521\u0527\u0530\u053D\u0545\u054B\u0550\u055E\u0572\u057B" +
        "\u0587\u058B\u058F\u059D\u05A5\u05AE\u05B9\u05BE\u05C5\u05C8\u05CE\u05D7" +
        "\u05DD\u05EF\u05F3\u05F7\u05FC\u0604\u060C\u0610\u0613\u0619\u061D\u0624" +
        "\u062F\u063C\u0645\u0674\u067D\u068D\u0699\u06A0\u06A8\u06AF\u06B2\u06C4" +
        "\u06E5\u06EC\u06F3\u06F7\u06FD\u0702\u0705\u0708\u070B\u071A\u0723\u072C" +
        "\u0733\u073D\u0743\u0745\u074D\u0764\u076A\u077D\u0780\u0785\u078B\u078F" +
        "\u0798\u07A8\u07AE\u07B4\u07B8\u07C3\u07CA";
    CqlParser._serializedATN = Utils.join([
        CqlParser._serializedATNSegment0,
        CqlParser._serializedATNSegment1,
        CqlParser._serializedATNSegment2,
        CqlParser._serializedATNSegment3,
    ], "");
    return CqlParser;
}(Parser_1.Parser));
exports.CqlParser = CqlParser;
var RootContext = /** @class */ (function (_super) {
    __extends(RootContext, _super);
    function RootContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RootContext.prototype.eof = function () {
        return this.getRuleContext(0, EofContext);
    };
    RootContext.prototype.cqls = function () {
        return this.tryGetRuleContext(0, CqlsContext);
    };
    RootContext.prototype.MINUSMINUS = function () { return this.tryGetToken(CqlParser.MINUSMINUS, 0); };
    Object.defineProperty(RootContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_root; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RootContext.prototype.enterRule = function (listener) {
        if (listener.enterRoot) {
            listener.enterRoot(this);
        }
    };
    // @Override
    RootContext.prototype.exitRule = function (listener) {
        if (listener.exitRoot) {
            listener.exitRoot(this);
        }
    };
    // @Override
    RootContext.prototype.accept = function (visitor) {
        if (visitor.visitRoot) {
            return visitor.visitRoot(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RootContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RootContext = RootContext;
var CqlsContext = /** @class */ (function (_super) {
    __extends(CqlsContext, _super);
    function CqlsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CqlsContext.prototype.cql = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CqlContext);
        }
        else {
            return this.getRuleContext(i, CqlContext);
        }
    };
    CqlsContext.prototype.empty = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EmptyContext);
        }
        else {
            return this.getRuleContext(i, EmptyContext);
        }
    };
    CqlsContext.prototype.statementSeparator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementSeparatorContext);
        }
        else {
            return this.getRuleContext(i, StatementSeparatorContext);
        }
    };
    CqlsContext.prototype.MINUSMINUS = function (i) {
        if (i === undefined) {
            return this.getTokens(CqlParser.MINUSMINUS);
        }
        else {
            return this.getToken(CqlParser.MINUSMINUS, i);
        }
    };
    Object.defineProperty(CqlsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_cqls; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CqlsContext.prototype.enterRule = function (listener) {
        if (listener.enterCqls) {
            listener.enterCqls(this);
        }
    };
    // @Override
    CqlsContext.prototype.exitRule = function (listener) {
        if (listener.exitCqls) {
            listener.exitCqls(this);
        }
    };
    // @Override
    CqlsContext.prototype.accept = function (visitor) {
        if (visitor.visitCqls) {
            return visitor.visitCqls(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CqlsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CqlsContext = CqlsContext;
var StatementSeparatorContext = /** @class */ (function (_super) {
    __extends(StatementSeparatorContext, _super);
    function StatementSeparatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementSeparatorContext.prototype.SEMI = function () { return this.getToken(CqlParser.SEMI, 0); };
    Object.defineProperty(StatementSeparatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_statementSeparator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StatementSeparatorContext.prototype.enterRule = function (listener) {
        if (listener.enterStatementSeparator) {
            listener.enterStatementSeparator(this);
        }
    };
    // @Override
    StatementSeparatorContext.prototype.exitRule = function (listener) {
        if (listener.exitStatementSeparator) {
            listener.exitStatementSeparator(this);
        }
    };
    // @Override
    StatementSeparatorContext.prototype.accept = function (visitor) {
        if (visitor.visitStatementSeparator) {
            return visitor.visitStatementSeparator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StatementSeparatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StatementSeparatorContext = StatementSeparatorContext;
var EmptyContext = /** @class */ (function (_super) {
    __extends(EmptyContext, _super);
    function EmptyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EmptyContext.prototype.statementSeparator = function () {
        return this.getRuleContext(0, StatementSeparatorContext);
    };
    Object.defineProperty(EmptyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_empty; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EmptyContext.prototype.enterRule = function (listener) {
        if (listener.enterEmpty) {
            listener.enterEmpty(this);
        }
    };
    // @Override
    EmptyContext.prototype.exitRule = function (listener) {
        if (listener.exitEmpty) {
            listener.exitEmpty(this);
        }
    };
    // @Override
    EmptyContext.prototype.accept = function (visitor) {
        if (visitor.visitEmpty) {
            return visitor.visitEmpty(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EmptyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EmptyContext = EmptyContext;
var CqlContext = /** @class */ (function (_super) {
    __extends(CqlContext, _super);
    function CqlContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CqlContext.prototype.alterKeyspace = function () {
        return this.tryGetRuleContext(0, AlterKeyspaceContext);
    };
    CqlContext.prototype.alterMaterializedView = function () {
        return this.tryGetRuleContext(0, AlterMaterializedViewContext);
    };
    CqlContext.prototype.alterRole = function () {
        return this.tryGetRuleContext(0, AlterRoleContext);
    };
    CqlContext.prototype.alterTable = function () {
        return this.tryGetRuleContext(0, AlterTableContext);
    };
    CqlContext.prototype.alterType = function () {
        return this.tryGetRuleContext(0, AlterTypeContext);
    };
    CqlContext.prototype.alterUser = function () {
        return this.tryGetRuleContext(0, AlterUserContext);
    };
    CqlContext.prototype.applyBatch = function () {
        return this.tryGetRuleContext(0, ApplyBatchContext);
    };
    CqlContext.prototype.createAggregate = function () {
        return this.tryGetRuleContext(0, CreateAggregateContext);
    };
    CqlContext.prototype.createFunction = function () {
        return this.tryGetRuleContext(0, CreateFunctionContext);
    };
    CqlContext.prototype.createIndex = function () {
        return this.tryGetRuleContext(0, CreateIndexContext);
    };
    CqlContext.prototype.createKeyspace = function () {
        return this.tryGetRuleContext(0, CreateKeyspaceContext);
    };
    CqlContext.prototype.createMaterializedView = function () {
        return this.tryGetRuleContext(0, CreateMaterializedViewContext);
    };
    CqlContext.prototype.createRole = function () {
        return this.tryGetRuleContext(0, CreateRoleContext);
    };
    CqlContext.prototype.createTable = function () {
        return this.tryGetRuleContext(0, CreateTableContext);
    };
    CqlContext.prototype.createTrigger = function () {
        return this.tryGetRuleContext(0, CreateTriggerContext);
    };
    CqlContext.prototype.createType = function () {
        return this.tryGetRuleContext(0, CreateTypeContext);
    };
    CqlContext.prototype.createUser = function () {
        return this.tryGetRuleContext(0, CreateUserContext);
    };
    CqlContext.prototype.delete = function () {
        return this.tryGetRuleContext(0, DeleteContext);
    };
    CqlContext.prototype.dropAggregate = function () {
        return this.tryGetRuleContext(0, DropAggregateContext);
    };
    CqlContext.prototype.dropFunction = function () {
        return this.tryGetRuleContext(0, DropFunctionContext);
    };
    CqlContext.prototype.dropIndex = function () {
        return this.tryGetRuleContext(0, DropIndexContext);
    };
    CqlContext.prototype.dropKeyspace = function () {
        return this.tryGetRuleContext(0, DropKeyspaceContext);
    };
    CqlContext.prototype.dropMaterializedView = function () {
        return this.tryGetRuleContext(0, DropMaterializedViewContext);
    };
    CqlContext.prototype.dropRole = function () {
        return this.tryGetRuleContext(0, DropRoleContext);
    };
    CqlContext.prototype.dropTable = function () {
        return this.tryGetRuleContext(0, DropTableContext);
    };
    CqlContext.prototype.dropTrigger = function () {
        return this.tryGetRuleContext(0, DropTriggerContext);
    };
    CqlContext.prototype.dropType = function () {
        return this.tryGetRuleContext(0, DropTypeContext);
    };
    CqlContext.prototype.dropUser = function () {
        return this.tryGetRuleContext(0, DropUserContext);
    };
    CqlContext.prototype.grant = function () {
        return this.tryGetRuleContext(0, GrantContext);
    };
    CqlContext.prototype.insert = function () {
        return this.tryGetRuleContext(0, InsertContext);
    };
    CqlContext.prototype.listPermissions = function () {
        return this.tryGetRuleContext(0, ListPermissionsContext);
    };
    CqlContext.prototype.listRoles = function () {
        return this.tryGetRuleContext(0, ListRolesContext);
    };
    CqlContext.prototype.revoke = function () {
        return this.tryGetRuleContext(0, RevokeContext);
    };
    CqlContext.prototype.select = function () {
        return this.tryGetRuleContext(0, SelectContext);
    };
    CqlContext.prototype.truncate = function () {
        return this.tryGetRuleContext(0, TruncateContext);
    };
    CqlContext.prototype.update = function () {
        return this.tryGetRuleContext(0, UpdateContext);
    };
    CqlContext.prototype.use = function () {
        return this.tryGetRuleContext(0, UseContext);
    };
    Object.defineProperty(CqlContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_cql; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CqlContext.prototype.enterRule = function (listener) {
        if (listener.enterCql) {
            listener.enterCql(this);
        }
    };
    // @Override
    CqlContext.prototype.exitRule = function (listener) {
        if (listener.exitCql) {
            listener.exitCql(this);
        }
    };
    // @Override
    CqlContext.prototype.accept = function (visitor) {
        if (visitor.visitCql) {
            return visitor.visitCql(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CqlContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CqlContext = CqlContext;
var RevokeContext = /** @class */ (function (_super) {
    __extends(RevokeContext, _super);
    function RevokeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RevokeContext.prototype.kwRevoke = function () {
        return this.getRuleContext(0, KwRevokeContext);
    };
    RevokeContext.prototype.priviledge = function () {
        return this.getRuleContext(0, PriviledgeContext);
    };
    RevokeContext.prototype.kwOn = function () {
        return this.getRuleContext(0, KwOnContext);
    };
    RevokeContext.prototype.resource = function () {
        return this.getRuleContext(0, ResourceContext);
    };
    RevokeContext.prototype.kwFrom = function () {
        return this.getRuleContext(0, KwFromContext);
    };
    RevokeContext.prototype.role = function () {
        return this.getRuleContext(0, RoleContext);
    };
    Object.defineProperty(RevokeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_revoke; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RevokeContext.prototype.enterRule = function (listener) {
        if (listener.enterRevoke) {
            listener.enterRevoke(this);
        }
    };
    // @Override
    RevokeContext.prototype.exitRule = function (listener) {
        if (listener.exitRevoke) {
            listener.exitRevoke(this);
        }
    };
    // @Override
    RevokeContext.prototype.accept = function (visitor) {
        if (visitor.visitRevoke) {
            return visitor.visitRevoke(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RevokeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RevokeContext = RevokeContext;
var ListUsersContext = /** @class */ (function (_super) {
    __extends(ListUsersContext, _super);
    function ListUsersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ListUsersContext.prototype.kwList = function () {
        return this.getRuleContext(0, KwListContext);
    };
    ListUsersContext.prototype.kwUsers = function () {
        return this.getRuleContext(0, KwUsersContext);
    };
    Object.defineProperty(ListUsersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_listUsers; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ListUsersContext.prototype.enterRule = function (listener) {
        if (listener.enterListUsers) {
            listener.enterListUsers(this);
        }
    };
    // @Override
    ListUsersContext.prototype.exitRule = function (listener) {
        if (listener.exitListUsers) {
            listener.exitListUsers(this);
        }
    };
    // @Override
    ListUsersContext.prototype.accept = function (visitor) {
        if (visitor.visitListUsers) {
            return visitor.visitListUsers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ListUsersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ListUsersContext = ListUsersContext;
var ListRolesContext = /** @class */ (function (_super) {
    __extends(ListRolesContext, _super);
    function ListRolesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ListRolesContext.prototype.kwList = function () {
        return this.getRuleContext(0, KwListContext);
    };
    ListRolesContext.prototype.kwRoles = function () {
        return this.getRuleContext(0, KwRolesContext);
    };
    ListRolesContext.prototype.kwOf = function () {
        return this.tryGetRuleContext(0, KwOfContext);
    };
    ListRolesContext.prototype.role = function () {
        return this.tryGetRuleContext(0, RoleContext);
    };
    ListRolesContext.prototype.kwNorecursive = function () {
        return this.tryGetRuleContext(0, KwNorecursiveContext);
    };
    Object.defineProperty(ListRolesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_listRoles; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ListRolesContext.prototype.enterRule = function (listener) {
        if (listener.enterListRoles) {
            listener.enterListRoles(this);
        }
    };
    // @Override
    ListRolesContext.prototype.exitRule = function (listener) {
        if (listener.exitListRoles) {
            listener.exitListRoles(this);
        }
    };
    // @Override
    ListRolesContext.prototype.accept = function (visitor) {
        if (visitor.visitListRoles) {
            return visitor.visitListRoles(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ListRolesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ListRolesContext = ListRolesContext;
var ListPermissionsContext = /** @class */ (function (_super) {
    __extends(ListPermissionsContext, _super);
    function ListPermissionsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ListPermissionsContext.prototype.kwList = function () {
        return this.getRuleContext(0, KwListContext);
    };
    ListPermissionsContext.prototype.priviledge = function () {
        return this.getRuleContext(0, PriviledgeContext);
    };
    ListPermissionsContext.prototype.kwOn = function () {
        return this.tryGetRuleContext(0, KwOnContext);
    };
    ListPermissionsContext.prototype.resource = function () {
        return this.tryGetRuleContext(0, ResourceContext);
    };
    ListPermissionsContext.prototype.kwOf = function () {
        return this.tryGetRuleContext(0, KwOfContext);
    };
    ListPermissionsContext.prototype.role = function () {
        return this.tryGetRuleContext(0, RoleContext);
    };
    Object.defineProperty(ListPermissionsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_listPermissions; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ListPermissionsContext.prototype.enterRule = function (listener) {
        if (listener.enterListPermissions) {
            listener.enterListPermissions(this);
        }
    };
    // @Override
    ListPermissionsContext.prototype.exitRule = function (listener) {
        if (listener.exitListPermissions) {
            listener.exitListPermissions(this);
        }
    };
    // @Override
    ListPermissionsContext.prototype.accept = function (visitor) {
        if (visitor.visitListPermissions) {
            return visitor.visitListPermissions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ListPermissionsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ListPermissionsContext = ListPermissionsContext;
var GrantContext = /** @class */ (function (_super) {
    __extends(GrantContext, _super);
    function GrantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GrantContext.prototype.kwGrant = function () {
        return this.getRuleContext(0, KwGrantContext);
    };
    GrantContext.prototype.priviledge = function () {
        return this.getRuleContext(0, PriviledgeContext);
    };
    GrantContext.prototype.kwOn = function () {
        return this.getRuleContext(0, KwOnContext);
    };
    GrantContext.prototype.resource = function () {
        return this.getRuleContext(0, ResourceContext);
    };
    GrantContext.prototype.kwTo = function () {
        return this.getRuleContext(0, KwToContext);
    };
    GrantContext.prototype.role = function () {
        return this.getRuleContext(0, RoleContext);
    };
    Object.defineProperty(GrantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_grant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GrantContext.prototype.enterRule = function (listener) {
        if (listener.enterGrant) {
            listener.enterGrant(this);
        }
    };
    // @Override
    GrantContext.prototype.exitRule = function (listener) {
        if (listener.exitGrant) {
            listener.exitGrant(this);
        }
    };
    // @Override
    GrantContext.prototype.accept = function (visitor) {
        if (visitor.visitGrant) {
            return visitor.visitGrant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GrantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GrantContext = GrantContext;
var PriviledgeContext = /** @class */ (function (_super) {
    __extends(PriviledgeContext, _super);
    function PriviledgeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PriviledgeContext.prototype.kwAll = function () {
        return this.tryGetRuleContext(0, KwAllContext);
    };
    PriviledgeContext.prototype.kwAllPermissions = function () {
        return this.tryGetRuleContext(0, KwAllPermissionsContext);
    };
    PriviledgeContext.prototype.kwAlter = function () {
        return this.tryGetRuleContext(0, KwAlterContext);
    };
    PriviledgeContext.prototype.kwAuthorize = function () {
        return this.tryGetRuleContext(0, KwAuthorizeContext);
    };
    PriviledgeContext.prototype.kwDescibe = function () {
        return this.tryGetRuleContext(0, KwDescibeContext);
    };
    PriviledgeContext.prototype.kwExecute = function () {
        return this.tryGetRuleContext(0, KwExecuteContext);
    };
    PriviledgeContext.prototype.kwCreate = function () {
        return this.tryGetRuleContext(0, KwCreateContext);
    };
    PriviledgeContext.prototype.kwDrop = function () {
        return this.tryGetRuleContext(0, KwDropContext);
    };
    PriviledgeContext.prototype.kwModify = function () {
        return this.tryGetRuleContext(0, KwModifyContext);
    };
    PriviledgeContext.prototype.kwSelect = function () {
        return this.tryGetRuleContext(0, KwSelectContext);
    };
    Object.defineProperty(PriviledgeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_priviledge; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PriviledgeContext.prototype.enterRule = function (listener) {
        if (listener.enterPriviledge) {
            listener.enterPriviledge(this);
        }
    };
    // @Override
    PriviledgeContext.prototype.exitRule = function (listener) {
        if (listener.exitPriviledge) {
            listener.exitPriviledge(this);
        }
    };
    // @Override
    PriviledgeContext.prototype.accept = function (visitor) {
        if (visitor.visitPriviledge) {
            return visitor.visitPriviledge(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PriviledgeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PriviledgeContext = PriviledgeContext;
var ResourceContext = /** @class */ (function (_super) {
    __extends(ResourceContext, _super);
    function ResourceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ResourceContext.prototype.kwAll = function () {
        return this.tryGetRuleContext(0, KwAllContext);
    };
    ResourceContext.prototype.kwFunctions = function () {
        return this.tryGetRuleContext(0, KwFunctionsContext);
    };
    ResourceContext.prototype.kwIn = function () {
        return this.tryGetRuleContext(0, KwInContext);
    };
    ResourceContext.prototype.kwKeyspace = function () {
        return this.tryGetRuleContext(0, KwKeyspaceContext);
    };
    ResourceContext.prototype.keyspace = function () {
        return this.tryGetRuleContext(0, KeyspaceContext);
    };
    ResourceContext.prototype.kwFunction = function () {
        return this.tryGetRuleContext(0, KwFunctionContext);
    };
    ResourceContext.prototype.function = function () {
        return this.tryGetRuleContext(0, FunctionContext);
    };
    ResourceContext.prototype.DOT = function () { return this.tryGetToken(CqlParser.DOT, 0); };
    ResourceContext.prototype.kwKeyspaces = function () {
        return this.tryGetRuleContext(0, KwKeyspacesContext);
    };
    ResourceContext.prototype.table = function () {
        return this.tryGetRuleContext(0, TableContext);
    };
    ResourceContext.prototype.kwTable = function () {
        return this.tryGetRuleContext(0, KwTableContext);
    };
    ResourceContext.prototype.kwRoles = function () {
        return this.tryGetRuleContext(0, KwRolesContext);
    };
    ResourceContext.prototype.kwRole = function () {
        return this.tryGetRuleContext(0, KwRoleContext);
    };
    ResourceContext.prototype.role = function () {
        return this.tryGetRuleContext(0, RoleContext);
    };
    Object.defineProperty(ResourceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_resource; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ResourceContext.prototype.enterRule = function (listener) {
        if (listener.enterResource) {
            listener.enterResource(this);
        }
    };
    // @Override
    ResourceContext.prototype.exitRule = function (listener) {
        if (listener.exitResource) {
            listener.exitResource(this);
        }
    };
    // @Override
    ResourceContext.prototype.accept = function (visitor) {
        if (visitor.visitResource) {
            return visitor.visitResource(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ResourceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ResourceContext = ResourceContext;
var CreateUserContext = /** @class */ (function (_super) {
    __extends(CreateUserContext, _super);
    function CreateUserContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CreateUserContext.prototype.kwCreate = function () {
        return this.getRuleContext(0, KwCreateContext);
    };
    CreateUserContext.prototype.kwUser = function () {
        return this.getRuleContext(0, KwUserContext);
    };
    CreateUserContext.prototype.user = function () {
        return this.getRuleContext(0, UserContext);
    };
    CreateUserContext.prototype.kwWith = function () {
        return this.getRuleContext(0, KwWithContext);
    };
    CreateUserContext.prototype.kwPassword = function () {
        return this.getRuleContext(0, KwPasswordContext);
    };
    CreateUserContext.prototype.stringLiteral = function () {
        return this.getRuleContext(0, StringLiteralContext);
    };
    CreateUserContext.prototype.ifNotExist = function () {
        return this.tryGetRuleContext(0, IfNotExistContext);
    };
    CreateUserContext.prototype.kwSuperuser = function () {
        return this.tryGetRuleContext(0, KwSuperuserContext);
    };
    CreateUserContext.prototype.kwNosuperuser = function () {
        return this.tryGetRuleContext(0, KwNosuperuserContext);
    };
    Object.defineProperty(CreateUserContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_createUser; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CreateUserContext.prototype.enterRule = function (listener) {
        if (listener.enterCreateUser) {
            listener.enterCreateUser(this);
        }
    };
    // @Override
    CreateUserContext.prototype.exitRule = function (listener) {
        if (listener.exitCreateUser) {
            listener.exitCreateUser(this);
        }
    };
    // @Override
    CreateUserContext.prototype.accept = function (visitor) {
        if (visitor.visitCreateUser) {
            return visitor.visitCreateUser(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CreateUserContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CreateUserContext = CreateUserContext;
var CreateRoleContext = /** @class */ (function (_super) {
    __extends(CreateRoleContext, _super);
    function CreateRoleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CreateRoleContext.prototype.kwCreate = function () {
        return this.getRuleContext(0, KwCreateContext);
    };
    CreateRoleContext.prototype.kwRole = function () {
        return this.getRuleContext(0, KwRoleContext);
    };
    CreateRoleContext.prototype.role = function () {
        return this.getRuleContext(0, RoleContext);
    };
    CreateRoleContext.prototype.ifNotExist = function () {
        return this.tryGetRuleContext(0, IfNotExistContext);
    };
    CreateRoleContext.prototype.roleWith = function () {
        return this.tryGetRuleContext(0, RoleWithContext);
    };
    Object.defineProperty(CreateRoleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_createRole; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CreateRoleContext.prototype.enterRule = function (listener) {
        if (listener.enterCreateRole) {
            listener.enterCreateRole(this);
        }
    };
    // @Override
    CreateRoleContext.prototype.exitRule = function (listener) {
        if (listener.exitCreateRole) {
            listener.exitCreateRole(this);
        }
    };
    // @Override
    CreateRoleContext.prototype.accept = function (visitor) {
        if (visitor.visitCreateRole) {
            return visitor.visitCreateRole(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CreateRoleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CreateRoleContext = CreateRoleContext;
var CreateTypeContext = /** @class */ (function (_super) {
    __extends(CreateTypeContext, _super);
    function CreateTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CreateTypeContext.prototype.kwCreate = function () {
        return this.getRuleContext(0, KwCreateContext);
    };
    CreateTypeContext.prototype.kwType = function () {
        return this.getRuleContext(0, KwTypeContext);
    };
    CreateTypeContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    CreateTypeContext.prototype.syntaxBracketLr = function () {
        return this.getRuleContext(0, SyntaxBracketLrContext);
    };
    CreateTypeContext.prototype.typeMemberColumnList = function () {
        return this.getRuleContext(0, TypeMemberColumnListContext);
    };
    CreateTypeContext.prototype.syntaxBracketRr = function () {
        return this.getRuleContext(0, SyntaxBracketRrContext);
    };
    CreateTypeContext.prototype.ifNotExist = function () {
        return this.tryGetRuleContext(0, IfNotExistContext);
    };
    CreateTypeContext.prototype.keyspace = function () {
        return this.tryGetRuleContext(0, KeyspaceContext);
    };
    CreateTypeContext.prototype.DOT = function () { return this.tryGetToken(CqlParser.DOT, 0); };
    Object.defineProperty(CreateTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_createType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CreateTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterCreateType) {
            listener.enterCreateType(this);
        }
    };
    // @Override
    CreateTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitCreateType) {
            listener.exitCreateType(this);
        }
    };
    // @Override
    CreateTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitCreateType) {
            return visitor.visitCreateType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CreateTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CreateTypeContext = CreateTypeContext;
var TypeMemberColumnListContext = /** @class */ (function (_super) {
    __extends(TypeMemberColumnListContext, _super);
    function TypeMemberColumnListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeMemberColumnListContext.prototype.column = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnContext);
        }
        else {
            return this.getRuleContext(i, ColumnContext);
        }
    };
    TypeMemberColumnListContext.prototype.dataType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DataTypeContext);
        }
        else {
            return this.getRuleContext(i, DataTypeContext);
        }
    };
    TypeMemberColumnListContext.prototype.syntaxComma = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SyntaxCommaContext);
        }
        else {
            return this.getRuleContext(i, SyntaxCommaContext);
        }
    };
    Object.defineProperty(TypeMemberColumnListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_typeMemberColumnList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeMemberColumnListContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeMemberColumnList) {
            listener.enterTypeMemberColumnList(this);
        }
    };
    // @Override
    TypeMemberColumnListContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeMemberColumnList) {
            listener.exitTypeMemberColumnList(this);
        }
    };
    // @Override
    TypeMemberColumnListContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeMemberColumnList) {
            return visitor.visitTypeMemberColumnList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeMemberColumnListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeMemberColumnListContext = TypeMemberColumnListContext;
var CreateTriggerContext = /** @class */ (function (_super) {
    __extends(CreateTriggerContext, _super);
    function CreateTriggerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CreateTriggerContext.prototype.kwCreate = function () {
        return this.getRuleContext(0, KwCreateContext);
    };
    CreateTriggerContext.prototype.kwTrigger = function () {
        return this.getRuleContext(0, KwTriggerContext);
    };
    CreateTriggerContext.prototype.trigger = function () {
        return this.getRuleContext(0, TriggerContext);
    };
    CreateTriggerContext.prototype.kwUsing = function () {
        return this.getRuleContext(0, KwUsingContext);
    };
    CreateTriggerContext.prototype.triggerClass = function () {
        return this.getRuleContext(0, TriggerClassContext);
    };
    CreateTriggerContext.prototype.ifNotExist = function () {
        return this.tryGetRuleContext(0, IfNotExistContext);
    };
    CreateTriggerContext.prototype.keyspace = function () {
        return this.tryGetRuleContext(0, KeyspaceContext);
    };
    CreateTriggerContext.prototype.DOT = function () { return this.tryGetToken(CqlParser.DOT, 0); };
    Object.defineProperty(CreateTriggerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_createTrigger; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CreateTriggerContext.prototype.enterRule = function (listener) {
        if (listener.enterCreateTrigger) {
            listener.enterCreateTrigger(this);
        }
    };
    // @Override
    CreateTriggerContext.prototype.exitRule = function (listener) {
        if (listener.exitCreateTrigger) {
            listener.exitCreateTrigger(this);
        }
    };
    // @Override
    CreateTriggerContext.prototype.accept = function (visitor) {
        if (visitor.visitCreateTrigger) {
            return visitor.visitCreateTrigger(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CreateTriggerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CreateTriggerContext = CreateTriggerContext;
var CreateMaterializedViewContext = /** @class */ (function (_super) {
    __extends(CreateMaterializedViewContext, _super);
    function CreateMaterializedViewContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CreateMaterializedViewContext.prototype.kwCreate = function () {
        return this.getRuleContext(0, KwCreateContext);
    };
    CreateMaterializedViewContext.prototype.kwMaterialized = function () {
        return this.getRuleContext(0, KwMaterializedContext);
    };
    CreateMaterializedViewContext.prototype.kwView = function () {
        return this.getRuleContext(0, KwViewContext);
    };
    CreateMaterializedViewContext.prototype.materializedView = function () {
        return this.getRuleContext(0, MaterializedViewContext);
    };
    CreateMaterializedViewContext.prototype.kwAs = function () {
        return this.getRuleContext(0, KwAsContext);
    };
    CreateMaterializedViewContext.prototype.kwSelect = function () {
        return this.getRuleContext(0, KwSelectContext);
    };
    CreateMaterializedViewContext.prototype.columnList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnListContext);
        }
        else {
            return this.getRuleContext(i, ColumnListContext);
        }
    };
    CreateMaterializedViewContext.prototype.kwFrom = function () {
        return this.getRuleContext(0, KwFromContext);
    };
    CreateMaterializedViewContext.prototype.table = function () {
        return this.getRuleContext(0, TableContext);
    };
    CreateMaterializedViewContext.prototype.materializedViewWhere = function () {
        return this.getRuleContext(0, MaterializedViewWhereContext);
    };
    CreateMaterializedViewContext.prototype.kwPrimary = function () {
        return this.getRuleContext(0, KwPrimaryContext);
    };
    CreateMaterializedViewContext.prototype.kwKey = function () {
        return this.getRuleContext(0, KwKeyContext);
    };
    CreateMaterializedViewContext.prototype.syntaxBracketLr = function () {
        return this.getRuleContext(0, SyntaxBracketLrContext);
    };
    CreateMaterializedViewContext.prototype.syntaxBracketRr = function () {
        return this.getRuleContext(0, SyntaxBracketRrContext);
    };
    CreateMaterializedViewContext.prototype.ifNotExist = function () {
        return this.tryGetRuleContext(0, IfNotExistContext);
    };
    CreateMaterializedViewContext.prototype.keyspace = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(KeyspaceContext);
        }
        else {
            return this.getRuleContext(i, KeyspaceContext);
        }
    };
    CreateMaterializedViewContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(CqlParser.DOT);
        }
        else {
            return this.getToken(CqlParser.DOT, i);
        }
    };
    CreateMaterializedViewContext.prototype.kwWith = function () {
        return this.tryGetRuleContext(0, KwWithContext);
    };
    CreateMaterializedViewContext.prototype.materializedViewOptions = function () {
        return this.tryGetRuleContext(0, MaterializedViewOptionsContext);
    };
    Object.defineProperty(CreateMaterializedViewContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_createMaterializedView; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CreateMaterializedViewContext.prototype.enterRule = function (listener) {
        if (listener.enterCreateMaterializedView) {
            listener.enterCreateMaterializedView(this);
        }
    };
    // @Override
    CreateMaterializedViewContext.prototype.exitRule = function (listener) {
        if (listener.exitCreateMaterializedView) {
            listener.exitCreateMaterializedView(this);
        }
    };
    // @Override
    CreateMaterializedViewContext.prototype.accept = function (visitor) {
        if (visitor.visitCreateMaterializedView) {
            return visitor.visitCreateMaterializedView(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CreateMaterializedViewContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CreateMaterializedViewContext = CreateMaterializedViewContext;
var MaterializedViewWhereContext = /** @class */ (function (_super) {
    __extends(MaterializedViewWhereContext, _super);
    function MaterializedViewWhereContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MaterializedViewWhereContext.prototype.kwWhere = function () {
        return this.getRuleContext(0, KwWhereContext);
    };
    MaterializedViewWhereContext.prototype.columnNotNullList = function () {
        return this.getRuleContext(0, ColumnNotNullListContext);
    };
    MaterializedViewWhereContext.prototype.kwAnd = function () {
        return this.tryGetRuleContext(0, KwAndContext);
    };
    MaterializedViewWhereContext.prototype.relationElements = function () {
        return this.tryGetRuleContext(0, RelationElementsContext);
    };
    Object.defineProperty(MaterializedViewWhereContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_materializedViewWhere; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MaterializedViewWhereContext.prototype.enterRule = function (listener) {
        if (listener.enterMaterializedViewWhere) {
            listener.enterMaterializedViewWhere(this);
        }
    };
    // @Override
    MaterializedViewWhereContext.prototype.exitRule = function (listener) {
        if (listener.exitMaterializedViewWhere) {
            listener.exitMaterializedViewWhere(this);
        }
    };
    // @Override
    MaterializedViewWhereContext.prototype.accept = function (visitor) {
        if (visitor.visitMaterializedViewWhere) {
            return visitor.visitMaterializedViewWhere(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MaterializedViewWhereContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MaterializedViewWhereContext = MaterializedViewWhereContext;
var ColumnNotNullListContext = /** @class */ (function (_super) {
    __extends(ColumnNotNullListContext, _super);
    function ColumnNotNullListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ColumnNotNullListContext.prototype.columnNotNull = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnNotNullContext);
        }
        else {
            return this.getRuleContext(i, ColumnNotNullContext);
        }
    };
    ColumnNotNullListContext.prototype.kwAnd = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(KwAndContext);
        }
        else {
            return this.getRuleContext(i, KwAndContext);
        }
    };
    Object.defineProperty(ColumnNotNullListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_columnNotNullList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ColumnNotNullListContext.prototype.enterRule = function (listener) {
        if (listener.enterColumnNotNullList) {
            listener.enterColumnNotNullList(this);
        }
    };
    // @Override
    ColumnNotNullListContext.prototype.exitRule = function (listener) {
        if (listener.exitColumnNotNullList) {
            listener.exitColumnNotNullList(this);
        }
    };
    // @Override
    ColumnNotNullListContext.prototype.accept = function (visitor) {
        if (visitor.visitColumnNotNullList) {
            return visitor.visitColumnNotNullList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ColumnNotNullListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ColumnNotNullListContext = ColumnNotNullListContext;
var ColumnNotNullContext = /** @class */ (function (_super) {
    __extends(ColumnNotNullContext, _super);
    function ColumnNotNullContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ColumnNotNullContext.prototype.column = function () {
        return this.getRuleContext(0, ColumnContext);
    };
    ColumnNotNullContext.prototype.kwIs = function () {
        return this.getRuleContext(0, KwIsContext);
    };
    ColumnNotNullContext.prototype.kwNot = function () {
        return this.getRuleContext(0, KwNotContext);
    };
    ColumnNotNullContext.prototype.kwNull = function () {
        return this.getRuleContext(0, KwNullContext);
    };
    Object.defineProperty(ColumnNotNullContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_columnNotNull; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ColumnNotNullContext.prototype.enterRule = function (listener) {
        if (listener.enterColumnNotNull) {
            listener.enterColumnNotNull(this);
        }
    };
    // @Override
    ColumnNotNullContext.prototype.exitRule = function (listener) {
        if (listener.exitColumnNotNull) {
            listener.exitColumnNotNull(this);
        }
    };
    // @Override
    ColumnNotNullContext.prototype.accept = function (visitor) {
        if (visitor.visitColumnNotNull) {
            return visitor.visitColumnNotNull(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ColumnNotNullContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ColumnNotNullContext = ColumnNotNullContext;
var MaterializedViewOptionsContext = /** @class */ (function (_super) {
    __extends(MaterializedViewOptionsContext, _super);
    function MaterializedViewOptionsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MaterializedViewOptionsContext.prototype.tableOptions = function () {
        return this.tryGetRuleContext(0, TableOptionsContext);
    };
    MaterializedViewOptionsContext.prototype.kwAnd = function () {
        return this.tryGetRuleContext(0, KwAndContext);
    };
    MaterializedViewOptionsContext.prototype.clusteringOrder = function () {
        return this.tryGetRuleContext(0, ClusteringOrderContext);
    };
    Object.defineProperty(MaterializedViewOptionsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_materializedViewOptions; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MaterializedViewOptionsContext.prototype.enterRule = function (listener) {
        if (listener.enterMaterializedViewOptions) {
            listener.enterMaterializedViewOptions(this);
        }
    };
    // @Override
    MaterializedViewOptionsContext.prototype.exitRule = function (listener) {
        if (listener.exitMaterializedViewOptions) {
            listener.exitMaterializedViewOptions(this);
        }
    };
    // @Override
    MaterializedViewOptionsContext.prototype.accept = function (visitor) {
        if (visitor.visitMaterializedViewOptions) {
            return visitor.visitMaterializedViewOptions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MaterializedViewOptionsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MaterializedViewOptionsContext = MaterializedViewOptionsContext;
var CreateKeyspaceContext = /** @class */ (function (_super) {
    __extends(CreateKeyspaceContext, _super);
    function CreateKeyspaceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CreateKeyspaceContext.prototype.kwCreate = function () {
        return this.getRuleContext(0, KwCreateContext);
    };
    CreateKeyspaceContext.prototype.kwKeyspace = function () {
        return this.getRuleContext(0, KwKeyspaceContext);
    };
    CreateKeyspaceContext.prototype.keyspace = function () {
        return this.getRuleContext(0, KeyspaceContext);
    };
    CreateKeyspaceContext.prototype.kwWith = function () {
        return this.getRuleContext(0, KwWithContext);
    };
    CreateKeyspaceContext.prototype.kwReplication = function () {
        return this.getRuleContext(0, KwReplicationContext);
    };
    CreateKeyspaceContext.prototype.OPERATOR_EQ = function () { return this.getToken(CqlParser.OPERATOR_EQ, 0); };
    CreateKeyspaceContext.prototype.syntaxBracketLc = function () {
        return this.getRuleContext(0, SyntaxBracketLcContext);
    };
    CreateKeyspaceContext.prototype.replicationList = function () {
        return this.getRuleContext(0, ReplicationListContext);
    };
    CreateKeyspaceContext.prototype.syntaxBracketRc = function () {
        return this.getRuleContext(0, SyntaxBracketRcContext);
    };
    CreateKeyspaceContext.prototype.ifNotExist = function () {
        return this.tryGetRuleContext(0, IfNotExistContext);
    };
    CreateKeyspaceContext.prototype.kwAnd = function () {
        return this.tryGetRuleContext(0, KwAndContext);
    };
    CreateKeyspaceContext.prototype.durableWrites = function () {
        return this.tryGetRuleContext(0, DurableWritesContext);
    };
    Object.defineProperty(CreateKeyspaceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_createKeyspace; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CreateKeyspaceContext.prototype.enterRule = function (listener) {
        if (listener.enterCreateKeyspace) {
            listener.enterCreateKeyspace(this);
        }
    };
    // @Override
    CreateKeyspaceContext.prototype.exitRule = function (listener) {
        if (listener.exitCreateKeyspace) {
            listener.exitCreateKeyspace(this);
        }
    };
    // @Override
    CreateKeyspaceContext.prototype.accept = function (visitor) {
        if (visitor.visitCreateKeyspace) {
            return visitor.visitCreateKeyspace(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CreateKeyspaceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CreateKeyspaceContext = CreateKeyspaceContext;
var CreateFunctionContext = /** @class */ (function (_super) {
    __extends(CreateFunctionContext, _super);
    function CreateFunctionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CreateFunctionContext.prototype.kwCreate = function () {
        return this.getRuleContext(0, KwCreateContext);
    };
    CreateFunctionContext.prototype.kwFunction = function () {
        return this.getRuleContext(0, KwFunctionContext);
    };
    CreateFunctionContext.prototype.function = function () {
        return this.getRuleContext(0, FunctionContext);
    };
    CreateFunctionContext.prototype.syntaxBracketLr = function () {
        return this.getRuleContext(0, SyntaxBracketLrContext);
    };
    CreateFunctionContext.prototype.syntaxBracketRr = function () {
        return this.getRuleContext(0, SyntaxBracketRrContext);
    };
    CreateFunctionContext.prototype.returnMode = function () {
        return this.getRuleContext(0, ReturnModeContext);
    };
    CreateFunctionContext.prototype.kwReturns = function () {
        return this.getRuleContext(0, KwReturnsContext);
    };
    CreateFunctionContext.prototype.dataType = function () {
        return this.getRuleContext(0, DataTypeContext);
    };
    CreateFunctionContext.prototype.kwLanguage = function () {
        return this.getRuleContext(0, KwLanguageContext);
    };
    CreateFunctionContext.prototype.language = function () {
        return this.getRuleContext(0, LanguageContext);
    };
    CreateFunctionContext.prototype.kwAs = function () {
        return this.getRuleContext(0, KwAsContext);
    };
    CreateFunctionContext.prototype.codeBlock = function () {
        return this.getRuleContext(0, CodeBlockContext);
    };
    CreateFunctionContext.prototype.orReplace = function () {
        return this.tryGetRuleContext(0, OrReplaceContext);
    };
    CreateFunctionContext.prototype.ifNotExist = function () {
        return this.tryGetRuleContext(0, IfNotExistContext);
    };
    CreateFunctionContext.prototype.keyspace = function () {
        return this.tryGetRuleContext(0, KeyspaceContext);
    };
    CreateFunctionContext.prototype.DOT = function () { return this.tryGetToken(CqlParser.DOT, 0); };
    CreateFunctionContext.prototype.paramList = function () {
        return this.tryGetRuleContext(0, ParamListContext);
    };
    Object.defineProperty(CreateFunctionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_createFunction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CreateFunctionContext.prototype.enterRule = function (listener) {
        if (listener.enterCreateFunction) {
            listener.enterCreateFunction(this);
        }
    };
    // @Override
    CreateFunctionContext.prototype.exitRule = function (listener) {
        if (listener.exitCreateFunction) {
            listener.exitCreateFunction(this);
        }
    };
    // @Override
    CreateFunctionContext.prototype.accept = function (visitor) {
        if (visitor.visitCreateFunction) {
            return visitor.visitCreateFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CreateFunctionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CreateFunctionContext = CreateFunctionContext;
var CodeBlockContext = /** @class */ (function (_super) {
    __extends(CodeBlockContext, _super);
    function CodeBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CodeBlockContext.prototype.CODE_BLOCK = function () { return this.getToken(CqlParser.CODE_BLOCK, 0); };
    Object.defineProperty(CodeBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_codeBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CodeBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterCodeBlock) {
            listener.enterCodeBlock(this);
        }
    };
    // @Override
    CodeBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitCodeBlock) {
            listener.exitCodeBlock(this);
        }
    };
    // @Override
    CodeBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitCodeBlock) {
            return visitor.visitCodeBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CodeBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CodeBlockContext = CodeBlockContext;
var ParamListContext = /** @class */ (function (_super) {
    __extends(ParamListContext, _super);
    function ParamListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParamListContext.prototype.param = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ParamContext);
        }
        else {
            return this.getRuleContext(i, ParamContext);
        }
    };
    ParamListContext.prototype.syntaxComma = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SyntaxCommaContext);
        }
        else {
            return this.getRuleContext(i, SyntaxCommaContext);
        }
    };
    Object.defineProperty(ParamListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_paramList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParamListContext.prototype.enterRule = function (listener) {
        if (listener.enterParamList) {
            listener.enterParamList(this);
        }
    };
    // @Override
    ParamListContext.prototype.exitRule = function (listener) {
        if (listener.exitParamList) {
            listener.exitParamList(this);
        }
    };
    // @Override
    ParamListContext.prototype.accept = function (visitor) {
        if (visitor.visitParamList) {
            return visitor.visitParamList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParamListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParamListContext = ParamListContext;
var ReturnModeContext = /** @class */ (function (_super) {
    __extends(ReturnModeContext, _super);
    function ReturnModeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReturnModeContext.prototype.kwOn = function () {
        return this.getRuleContext(0, KwOnContext);
    };
    ReturnModeContext.prototype.kwNull = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(KwNullContext);
        }
        else {
            return this.getRuleContext(i, KwNullContext);
        }
    };
    ReturnModeContext.prototype.kwInput = function () {
        return this.getRuleContext(0, KwInputContext);
    };
    ReturnModeContext.prototype.kwCalled = function () {
        return this.tryGetRuleContext(0, KwCalledContext);
    };
    ReturnModeContext.prototype.kwReturns = function () {
        return this.tryGetRuleContext(0, KwReturnsContext);
    };
    Object.defineProperty(ReturnModeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_returnMode; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReturnModeContext.prototype.enterRule = function (listener) {
        if (listener.enterReturnMode) {
            listener.enterReturnMode(this);
        }
    };
    // @Override
    ReturnModeContext.prototype.exitRule = function (listener) {
        if (listener.exitReturnMode) {
            listener.exitReturnMode(this);
        }
    };
    // @Override
    ReturnModeContext.prototype.accept = function (visitor) {
        if (visitor.visitReturnMode) {
            return visitor.visitReturnMode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReturnModeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReturnModeContext = ReturnModeContext;
var CreateAggregateContext = /** @class */ (function (_super) {
    __extends(CreateAggregateContext, _super);
    function CreateAggregateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CreateAggregateContext.prototype.kwCreate = function () {
        return this.getRuleContext(0, KwCreateContext);
    };
    CreateAggregateContext.prototype.kwAggregate = function () {
        return this.getRuleContext(0, KwAggregateContext);
    };
    CreateAggregateContext.prototype.aggregate = function () {
        return this.getRuleContext(0, AggregateContext);
    };
    CreateAggregateContext.prototype.syntaxBracketLr = function () {
        return this.getRuleContext(0, SyntaxBracketLrContext);
    };
    CreateAggregateContext.prototype.dataType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DataTypeContext);
        }
        else {
            return this.getRuleContext(i, DataTypeContext);
        }
    };
    CreateAggregateContext.prototype.syntaxBracketRr = function () {
        return this.getRuleContext(0, SyntaxBracketRrContext);
    };
    CreateAggregateContext.prototype.kwSfunc = function () {
        return this.getRuleContext(0, KwSfuncContext);
    };
    CreateAggregateContext.prototype.function = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FunctionContext);
        }
        else {
            return this.getRuleContext(i, FunctionContext);
        }
    };
    CreateAggregateContext.prototype.kwStype = function () {
        return this.getRuleContext(0, KwStypeContext);
    };
    CreateAggregateContext.prototype.kwFinalfunc = function () {
        return this.getRuleContext(0, KwFinalfuncContext);
    };
    CreateAggregateContext.prototype.kwInitcond = function () {
        return this.getRuleContext(0, KwInitcondContext);
    };
    CreateAggregateContext.prototype.initCondDefinition = function () {
        return this.getRuleContext(0, InitCondDefinitionContext);
    };
    CreateAggregateContext.prototype.orReplace = function () {
        return this.tryGetRuleContext(0, OrReplaceContext);
    };
    CreateAggregateContext.prototype.ifNotExist = function () {
        return this.tryGetRuleContext(0, IfNotExistContext);
    };
    CreateAggregateContext.prototype.keyspace = function () {
        return this.tryGetRuleContext(0, KeyspaceContext);
    };
    CreateAggregateContext.prototype.DOT = function () { return this.tryGetToken(CqlParser.DOT, 0); };
    Object.defineProperty(CreateAggregateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_createAggregate; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CreateAggregateContext.prototype.enterRule = function (listener) {
        if (listener.enterCreateAggregate) {
            listener.enterCreateAggregate(this);
        }
    };
    // @Override
    CreateAggregateContext.prototype.exitRule = function (listener) {
        if (listener.exitCreateAggregate) {
            listener.exitCreateAggregate(this);
        }
    };
    // @Override
    CreateAggregateContext.prototype.accept = function (visitor) {
        if (visitor.visitCreateAggregate) {
            return visitor.visitCreateAggregate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CreateAggregateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CreateAggregateContext = CreateAggregateContext;
var InitCondDefinitionContext = /** @class */ (function (_super) {
    __extends(InitCondDefinitionContext, _super);
    function InitCondDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitCondDefinitionContext.prototype.constant = function () {
        return this.tryGetRuleContext(0, ConstantContext);
    };
    InitCondDefinitionContext.prototype.initCondList = function () {
        return this.tryGetRuleContext(0, InitCondListContext);
    };
    InitCondDefinitionContext.prototype.initCondListNested = function () {
        return this.tryGetRuleContext(0, InitCondListNestedContext);
    };
    InitCondDefinitionContext.prototype.initCondHash = function () {
        return this.tryGetRuleContext(0, InitCondHashContext);
    };
    Object.defineProperty(InitCondDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_initCondDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InitCondDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterInitCondDefinition) {
            listener.enterInitCondDefinition(this);
        }
    };
    // @Override
    InitCondDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitInitCondDefinition) {
            listener.exitInitCondDefinition(this);
        }
    };
    // @Override
    InitCondDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitInitCondDefinition) {
            return visitor.visitInitCondDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InitCondDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InitCondDefinitionContext = InitCondDefinitionContext;
var InitCondHashContext = /** @class */ (function (_super) {
    __extends(InitCondHashContext, _super);
    function InitCondHashContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitCondHashContext.prototype.syntaxBracketLc = function () {
        return this.getRuleContext(0, SyntaxBracketLcContext);
    };
    InitCondHashContext.prototype.initCondHashItem = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(InitCondHashItemContext);
        }
        else {
            return this.getRuleContext(i, InitCondHashItemContext);
        }
    };
    InitCondHashContext.prototype.syntaxBracketRc = function () {
        return this.getRuleContext(0, SyntaxBracketRcContext);
    };
    InitCondHashContext.prototype.syntaxComma = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SyntaxCommaContext);
        }
        else {
            return this.getRuleContext(i, SyntaxCommaContext);
        }
    };
    Object.defineProperty(InitCondHashContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_initCondHash; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InitCondHashContext.prototype.enterRule = function (listener) {
        if (listener.enterInitCondHash) {
            listener.enterInitCondHash(this);
        }
    };
    // @Override
    InitCondHashContext.prototype.exitRule = function (listener) {
        if (listener.exitInitCondHash) {
            listener.exitInitCondHash(this);
        }
    };
    // @Override
    InitCondHashContext.prototype.accept = function (visitor) {
        if (visitor.visitInitCondHash) {
            return visitor.visitInitCondHash(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InitCondHashContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InitCondHashContext = InitCondHashContext;
var InitCondHashItemContext = /** @class */ (function (_super) {
    __extends(InitCondHashItemContext, _super);
    function InitCondHashItemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitCondHashItemContext.prototype.hashKey = function () {
        return this.getRuleContext(0, HashKeyContext);
    };
    InitCondHashItemContext.prototype.COLON = function () { return this.getToken(CqlParser.COLON, 0); };
    InitCondHashItemContext.prototype.initCondDefinition = function () {
        return this.getRuleContext(0, InitCondDefinitionContext);
    };
    Object.defineProperty(InitCondHashItemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_initCondHashItem; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InitCondHashItemContext.prototype.enterRule = function (listener) {
        if (listener.enterInitCondHashItem) {
            listener.enterInitCondHashItem(this);
        }
    };
    // @Override
    InitCondHashItemContext.prototype.exitRule = function (listener) {
        if (listener.exitInitCondHashItem) {
            listener.exitInitCondHashItem(this);
        }
    };
    // @Override
    InitCondHashItemContext.prototype.accept = function (visitor) {
        if (visitor.visitInitCondHashItem) {
            return visitor.visitInitCondHashItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InitCondHashItemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InitCondHashItemContext = InitCondHashItemContext;
var InitCondListNestedContext = /** @class */ (function (_super) {
    __extends(InitCondListNestedContext, _super);
    function InitCondListNestedContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitCondListNestedContext.prototype.syntaxBracketLr = function () {
        return this.getRuleContext(0, SyntaxBracketLrContext);
    };
    InitCondListNestedContext.prototype.initCondList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(InitCondListContext);
        }
        else {
            return this.getRuleContext(i, InitCondListContext);
        }
    };
    InitCondListNestedContext.prototype.syntaxBracketRr = function () {
        return this.getRuleContext(0, SyntaxBracketRrContext);
    };
    InitCondListNestedContext.prototype.syntaxComma = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SyntaxCommaContext);
        }
        else {
            return this.getRuleContext(i, SyntaxCommaContext);
        }
    };
    InitCondListNestedContext.prototype.constant = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstantContext);
        }
        else {
            return this.getRuleContext(i, ConstantContext);
        }
    };
    Object.defineProperty(InitCondListNestedContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_initCondListNested; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InitCondListNestedContext.prototype.enterRule = function (listener) {
        if (listener.enterInitCondListNested) {
            listener.enterInitCondListNested(this);
        }
    };
    // @Override
    InitCondListNestedContext.prototype.exitRule = function (listener) {
        if (listener.exitInitCondListNested) {
            listener.exitInitCondListNested(this);
        }
    };
    // @Override
    InitCondListNestedContext.prototype.accept = function (visitor) {
        if (visitor.visitInitCondListNested) {
            return visitor.visitInitCondListNested(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InitCondListNestedContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InitCondListNestedContext = InitCondListNestedContext;
var InitCondListContext = /** @class */ (function (_super) {
    __extends(InitCondListContext, _super);
    function InitCondListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitCondListContext.prototype.syntaxBracketLr = function () {
        return this.getRuleContext(0, SyntaxBracketLrContext);
    };
    InitCondListContext.prototype.constant = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstantContext);
        }
        else {
            return this.getRuleContext(i, ConstantContext);
        }
    };
    InitCondListContext.prototype.syntaxBracketRr = function () {
        return this.getRuleContext(0, SyntaxBracketRrContext);
    };
    InitCondListContext.prototype.syntaxComma = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SyntaxCommaContext);
        }
        else {
            return this.getRuleContext(i, SyntaxCommaContext);
        }
    };
    Object.defineProperty(InitCondListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_initCondList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InitCondListContext.prototype.enterRule = function (listener) {
        if (listener.enterInitCondList) {
            listener.enterInitCondList(this);
        }
    };
    // @Override
    InitCondListContext.prototype.exitRule = function (listener) {
        if (listener.exitInitCondList) {
            listener.exitInitCondList(this);
        }
    };
    // @Override
    InitCondListContext.prototype.accept = function (visitor) {
        if (visitor.visitInitCondList) {
            return visitor.visitInitCondList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InitCondListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InitCondListContext = InitCondListContext;
var OrReplaceContext = /** @class */ (function (_super) {
    __extends(OrReplaceContext, _super);
    function OrReplaceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OrReplaceContext.prototype.kwOr = function () {
        return this.getRuleContext(0, KwOrContext);
    };
    OrReplaceContext.prototype.kwReplace = function () {
        return this.getRuleContext(0, KwReplaceContext);
    };
    Object.defineProperty(OrReplaceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_orReplace; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OrReplaceContext.prototype.enterRule = function (listener) {
        if (listener.enterOrReplace) {
            listener.enterOrReplace(this);
        }
    };
    // @Override
    OrReplaceContext.prototype.exitRule = function (listener) {
        if (listener.exitOrReplace) {
            listener.exitOrReplace(this);
        }
    };
    // @Override
    OrReplaceContext.prototype.accept = function (visitor) {
        if (visitor.visitOrReplace) {
            return visitor.visitOrReplace(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OrReplaceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OrReplaceContext = OrReplaceContext;
var AlterUserContext = /** @class */ (function (_super) {
    __extends(AlterUserContext, _super);
    function AlterUserContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlterUserContext.prototype.kwAlter = function () {
        return this.getRuleContext(0, KwAlterContext);
    };
    AlterUserContext.prototype.kwUser = function () {
        return this.getRuleContext(0, KwUserContext);
    };
    AlterUserContext.prototype.user = function () {
        return this.getRuleContext(0, UserContext);
    };
    AlterUserContext.prototype.kwWith = function () {
        return this.getRuleContext(0, KwWithContext);
    };
    AlterUserContext.prototype.userPassword = function () {
        return this.getRuleContext(0, UserPasswordContext);
    };
    AlterUserContext.prototype.userSuperUser = function () {
        return this.tryGetRuleContext(0, UserSuperUserContext);
    };
    Object.defineProperty(AlterUserContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_alterUser; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlterUserContext.prototype.enterRule = function (listener) {
        if (listener.enterAlterUser) {
            listener.enterAlterUser(this);
        }
    };
    // @Override
    AlterUserContext.prototype.exitRule = function (listener) {
        if (listener.exitAlterUser) {
            listener.exitAlterUser(this);
        }
    };
    // @Override
    AlterUserContext.prototype.accept = function (visitor) {
        if (visitor.visitAlterUser) {
            return visitor.visitAlterUser(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlterUserContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlterUserContext = AlterUserContext;
var UserPasswordContext = /** @class */ (function (_super) {
    __extends(UserPasswordContext, _super);
    function UserPasswordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UserPasswordContext.prototype.kwPassword = function () {
        return this.getRuleContext(0, KwPasswordContext);
    };
    UserPasswordContext.prototype.stringLiteral = function () {
        return this.getRuleContext(0, StringLiteralContext);
    };
    Object.defineProperty(UserPasswordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_userPassword; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UserPasswordContext.prototype.enterRule = function (listener) {
        if (listener.enterUserPassword) {
            listener.enterUserPassword(this);
        }
    };
    // @Override
    UserPasswordContext.prototype.exitRule = function (listener) {
        if (listener.exitUserPassword) {
            listener.exitUserPassword(this);
        }
    };
    // @Override
    UserPasswordContext.prototype.accept = function (visitor) {
        if (visitor.visitUserPassword) {
            return visitor.visitUserPassword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UserPasswordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UserPasswordContext = UserPasswordContext;
var UserSuperUserContext = /** @class */ (function (_super) {
    __extends(UserSuperUserContext, _super);
    function UserSuperUserContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UserSuperUserContext.prototype.kwSuperuser = function () {
        return this.tryGetRuleContext(0, KwSuperuserContext);
    };
    UserSuperUserContext.prototype.kwNosuperuser = function () {
        return this.tryGetRuleContext(0, KwNosuperuserContext);
    };
    Object.defineProperty(UserSuperUserContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_userSuperUser; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UserSuperUserContext.prototype.enterRule = function (listener) {
        if (listener.enterUserSuperUser) {
            listener.enterUserSuperUser(this);
        }
    };
    // @Override
    UserSuperUserContext.prototype.exitRule = function (listener) {
        if (listener.exitUserSuperUser) {
            listener.exitUserSuperUser(this);
        }
    };
    // @Override
    UserSuperUserContext.prototype.accept = function (visitor) {
        if (visitor.visitUserSuperUser) {
            return visitor.visitUserSuperUser(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UserSuperUserContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UserSuperUserContext = UserSuperUserContext;
var AlterTypeContext = /** @class */ (function (_super) {
    __extends(AlterTypeContext, _super);
    function AlterTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlterTypeContext.prototype.kwAlter = function () {
        return this.getRuleContext(0, KwAlterContext);
    };
    AlterTypeContext.prototype.kwType = function () {
        return this.getRuleContext(0, KwTypeContext);
    };
    AlterTypeContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    AlterTypeContext.prototype.alterTypeOperation = function () {
        return this.getRuleContext(0, AlterTypeOperationContext);
    };
    AlterTypeContext.prototype.keyspace = function () {
        return this.tryGetRuleContext(0, KeyspaceContext);
    };
    AlterTypeContext.prototype.DOT = function () { return this.tryGetToken(CqlParser.DOT, 0); };
    Object.defineProperty(AlterTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_alterType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlterTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterAlterType) {
            listener.enterAlterType(this);
        }
    };
    // @Override
    AlterTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitAlterType) {
            listener.exitAlterType(this);
        }
    };
    // @Override
    AlterTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitAlterType) {
            return visitor.visitAlterType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlterTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlterTypeContext = AlterTypeContext;
var AlterTypeOperationContext = /** @class */ (function (_super) {
    __extends(AlterTypeOperationContext, _super);
    function AlterTypeOperationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlterTypeOperationContext.prototype.alterTypeAlterType = function () {
        return this.tryGetRuleContext(0, AlterTypeAlterTypeContext);
    };
    AlterTypeOperationContext.prototype.alterTypeAdd = function () {
        return this.tryGetRuleContext(0, AlterTypeAddContext);
    };
    AlterTypeOperationContext.prototype.alterTypeRename = function () {
        return this.tryGetRuleContext(0, AlterTypeRenameContext);
    };
    Object.defineProperty(AlterTypeOperationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_alterTypeOperation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlterTypeOperationContext.prototype.enterRule = function (listener) {
        if (listener.enterAlterTypeOperation) {
            listener.enterAlterTypeOperation(this);
        }
    };
    // @Override
    AlterTypeOperationContext.prototype.exitRule = function (listener) {
        if (listener.exitAlterTypeOperation) {
            listener.exitAlterTypeOperation(this);
        }
    };
    // @Override
    AlterTypeOperationContext.prototype.accept = function (visitor) {
        if (visitor.visitAlterTypeOperation) {
            return visitor.visitAlterTypeOperation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlterTypeOperationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlterTypeOperationContext = AlterTypeOperationContext;
var AlterTypeRenameContext = /** @class */ (function (_super) {
    __extends(AlterTypeRenameContext, _super);
    function AlterTypeRenameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlterTypeRenameContext.prototype.kwRename = function () {
        return this.getRuleContext(0, KwRenameContext);
    };
    AlterTypeRenameContext.prototype.alterTypeRenameList = function () {
        return this.getRuleContext(0, AlterTypeRenameListContext);
    };
    Object.defineProperty(AlterTypeRenameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_alterTypeRename; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlterTypeRenameContext.prototype.enterRule = function (listener) {
        if (listener.enterAlterTypeRename) {
            listener.enterAlterTypeRename(this);
        }
    };
    // @Override
    AlterTypeRenameContext.prototype.exitRule = function (listener) {
        if (listener.exitAlterTypeRename) {
            listener.exitAlterTypeRename(this);
        }
    };
    // @Override
    AlterTypeRenameContext.prototype.accept = function (visitor) {
        if (visitor.visitAlterTypeRename) {
            return visitor.visitAlterTypeRename(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlterTypeRenameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlterTypeRenameContext = AlterTypeRenameContext;
var AlterTypeRenameListContext = /** @class */ (function (_super) {
    __extends(AlterTypeRenameListContext, _super);
    function AlterTypeRenameListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlterTypeRenameListContext.prototype.alterTypeRenameItem = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AlterTypeRenameItemContext);
        }
        else {
            return this.getRuleContext(i, AlterTypeRenameItemContext);
        }
    };
    AlterTypeRenameListContext.prototype.kwAnd = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(KwAndContext);
        }
        else {
            return this.getRuleContext(i, KwAndContext);
        }
    };
    Object.defineProperty(AlterTypeRenameListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_alterTypeRenameList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlterTypeRenameListContext.prototype.enterRule = function (listener) {
        if (listener.enterAlterTypeRenameList) {
            listener.enterAlterTypeRenameList(this);
        }
    };
    // @Override
    AlterTypeRenameListContext.prototype.exitRule = function (listener) {
        if (listener.exitAlterTypeRenameList) {
            listener.exitAlterTypeRenameList(this);
        }
    };
    // @Override
    AlterTypeRenameListContext.prototype.accept = function (visitor) {
        if (visitor.visitAlterTypeRenameList) {
            return visitor.visitAlterTypeRenameList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlterTypeRenameListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlterTypeRenameListContext = AlterTypeRenameListContext;
var AlterTypeRenameItemContext = /** @class */ (function (_super) {
    __extends(AlterTypeRenameItemContext, _super);
    function AlterTypeRenameItemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlterTypeRenameItemContext.prototype.column = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnContext);
        }
        else {
            return this.getRuleContext(i, ColumnContext);
        }
    };
    AlterTypeRenameItemContext.prototype.kwTo = function () {
        return this.getRuleContext(0, KwToContext);
    };
    Object.defineProperty(AlterTypeRenameItemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_alterTypeRenameItem; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlterTypeRenameItemContext.prototype.enterRule = function (listener) {
        if (listener.enterAlterTypeRenameItem) {
            listener.enterAlterTypeRenameItem(this);
        }
    };
    // @Override
    AlterTypeRenameItemContext.prototype.exitRule = function (listener) {
        if (listener.exitAlterTypeRenameItem) {
            listener.exitAlterTypeRenameItem(this);
        }
    };
    // @Override
    AlterTypeRenameItemContext.prototype.accept = function (visitor) {
        if (visitor.visitAlterTypeRenameItem) {
            return visitor.visitAlterTypeRenameItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlterTypeRenameItemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlterTypeRenameItemContext = AlterTypeRenameItemContext;
var AlterTypeAddContext = /** @class */ (function (_super) {
    __extends(AlterTypeAddContext, _super);
    function AlterTypeAddContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlterTypeAddContext.prototype.kwAdd = function () {
        return this.getRuleContext(0, KwAddContext);
    };
    AlterTypeAddContext.prototype.column = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnContext);
        }
        else {
            return this.getRuleContext(i, ColumnContext);
        }
    };
    AlterTypeAddContext.prototype.dataType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DataTypeContext);
        }
        else {
            return this.getRuleContext(i, DataTypeContext);
        }
    };
    AlterTypeAddContext.prototype.syntaxComma = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SyntaxCommaContext);
        }
        else {
            return this.getRuleContext(i, SyntaxCommaContext);
        }
    };
    Object.defineProperty(AlterTypeAddContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_alterTypeAdd; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlterTypeAddContext.prototype.enterRule = function (listener) {
        if (listener.enterAlterTypeAdd) {
            listener.enterAlterTypeAdd(this);
        }
    };
    // @Override
    AlterTypeAddContext.prototype.exitRule = function (listener) {
        if (listener.exitAlterTypeAdd) {
            listener.exitAlterTypeAdd(this);
        }
    };
    // @Override
    AlterTypeAddContext.prototype.accept = function (visitor) {
        if (visitor.visitAlterTypeAdd) {
            return visitor.visitAlterTypeAdd(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlterTypeAddContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlterTypeAddContext = AlterTypeAddContext;
var AlterTypeAlterTypeContext = /** @class */ (function (_super) {
    __extends(AlterTypeAlterTypeContext, _super);
    function AlterTypeAlterTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlterTypeAlterTypeContext.prototype.kwAlter = function () {
        return this.getRuleContext(0, KwAlterContext);
    };
    AlterTypeAlterTypeContext.prototype.column = function () {
        return this.getRuleContext(0, ColumnContext);
    };
    AlterTypeAlterTypeContext.prototype.kwType = function () {
        return this.getRuleContext(0, KwTypeContext);
    };
    AlterTypeAlterTypeContext.prototype.dataType = function () {
        return this.getRuleContext(0, DataTypeContext);
    };
    Object.defineProperty(AlterTypeAlterTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_alterTypeAlterType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlterTypeAlterTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterAlterTypeAlterType) {
            listener.enterAlterTypeAlterType(this);
        }
    };
    // @Override
    AlterTypeAlterTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitAlterTypeAlterType) {
            listener.exitAlterTypeAlterType(this);
        }
    };
    // @Override
    AlterTypeAlterTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitAlterTypeAlterType) {
            return visitor.visitAlterTypeAlterType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlterTypeAlterTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlterTypeAlterTypeContext = AlterTypeAlterTypeContext;
var AlterTableContext = /** @class */ (function (_super) {
    __extends(AlterTableContext, _super);
    function AlterTableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlterTableContext.prototype.kwAlter = function () {
        return this.getRuleContext(0, KwAlterContext);
    };
    AlterTableContext.prototype.kwTable = function () {
        return this.getRuleContext(0, KwTableContext);
    };
    AlterTableContext.prototype.table = function () {
        return this.getRuleContext(0, TableContext);
    };
    AlterTableContext.prototype.alterTableOperation = function () {
        return this.getRuleContext(0, AlterTableOperationContext);
    };
    AlterTableContext.prototype.keyspace = function () {
        return this.tryGetRuleContext(0, KeyspaceContext);
    };
    AlterTableContext.prototype.DOT = function () { return this.tryGetToken(CqlParser.DOT, 0); };
    Object.defineProperty(AlterTableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_alterTable; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlterTableContext.prototype.enterRule = function (listener) {
        if (listener.enterAlterTable) {
            listener.enterAlterTable(this);
        }
    };
    // @Override
    AlterTableContext.prototype.exitRule = function (listener) {
        if (listener.exitAlterTable) {
            listener.exitAlterTable(this);
        }
    };
    // @Override
    AlterTableContext.prototype.accept = function (visitor) {
        if (visitor.visitAlterTable) {
            return visitor.visitAlterTable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlterTableContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlterTableContext = AlterTableContext;
var AlterTableOperationContext = /** @class */ (function (_super) {
    __extends(AlterTableOperationContext, _super);
    function AlterTableOperationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlterTableOperationContext.prototype.alterTableAdd = function () {
        return this.tryGetRuleContext(0, AlterTableAddContext);
    };
    AlterTableOperationContext.prototype.alterTableDropColumns = function () {
        return this.tryGetRuleContext(0, AlterTableDropColumnsContext);
    };
    AlterTableOperationContext.prototype.alterTableDropCompactStorage = function () {
        return this.tryGetRuleContext(0, AlterTableDropCompactStorageContext);
    };
    AlterTableOperationContext.prototype.alterTableRename = function () {
        return this.tryGetRuleContext(0, AlterTableRenameContext);
    };
    AlterTableOperationContext.prototype.alterTableWith = function () {
        return this.tryGetRuleContext(0, AlterTableWithContext);
    };
    Object.defineProperty(AlterTableOperationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_alterTableOperation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlterTableOperationContext.prototype.enterRule = function (listener) {
        if (listener.enterAlterTableOperation) {
            listener.enterAlterTableOperation(this);
        }
    };
    // @Override
    AlterTableOperationContext.prototype.exitRule = function (listener) {
        if (listener.exitAlterTableOperation) {
            listener.exitAlterTableOperation(this);
        }
    };
    // @Override
    AlterTableOperationContext.prototype.accept = function (visitor) {
        if (visitor.visitAlterTableOperation) {
            return visitor.visitAlterTableOperation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlterTableOperationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlterTableOperationContext = AlterTableOperationContext;
var AlterTableWithContext = /** @class */ (function (_super) {
    __extends(AlterTableWithContext, _super);
    function AlterTableWithContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlterTableWithContext.prototype.kwWith = function () {
        return this.getRuleContext(0, KwWithContext);
    };
    AlterTableWithContext.prototype.tableOptions = function () {
        return this.getRuleContext(0, TableOptionsContext);
    };
    Object.defineProperty(AlterTableWithContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_alterTableWith; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlterTableWithContext.prototype.enterRule = function (listener) {
        if (listener.enterAlterTableWith) {
            listener.enterAlterTableWith(this);
        }
    };
    // @Override
    AlterTableWithContext.prototype.exitRule = function (listener) {
        if (listener.exitAlterTableWith) {
            listener.exitAlterTableWith(this);
        }
    };
    // @Override
    AlterTableWithContext.prototype.accept = function (visitor) {
        if (visitor.visitAlterTableWith) {
            return visitor.visitAlterTableWith(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlterTableWithContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlterTableWithContext = AlterTableWithContext;
var AlterTableRenameContext = /** @class */ (function (_super) {
    __extends(AlterTableRenameContext, _super);
    function AlterTableRenameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlterTableRenameContext.prototype.kwRename = function () {
        return this.getRuleContext(0, KwRenameContext);
    };
    AlterTableRenameContext.prototype.column = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnContext);
        }
        else {
            return this.getRuleContext(i, ColumnContext);
        }
    };
    AlterTableRenameContext.prototype.kwTo = function () {
        return this.getRuleContext(0, KwToContext);
    };
    Object.defineProperty(AlterTableRenameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_alterTableRename; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlterTableRenameContext.prototype.enterRule = function (listener) {
        if (listener.enterAlterTableRename) {
            listener.enterAlterTableRename(this);
        }
    };
    // @Override
    AlterTableRenameContext.prototype.exitRule = function (listener) {
        if (listener.exitAlterTableRename) {
            listener.exitAlterTableRename(this);
        }
    };
    // @Override
    AlterTableRenameContext.prototype.accept = function (visitor) {
        if (visitor.visitAlterTableRename) {
            return visitor.visitAlterTableRename(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlterTableRenameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlterTableRenameContext = AlterTableRenameContext;
var AlterTableDropCompactStorageContext = /** @class */ (function (_super) {
    __extends(AlterTableDropCompactStorageContext, _super);
    function AlterTableDropCompactStorageContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlterTableDropCompactStorageContext.prototype.kwDrop = function () {
        return this.getRuleContext(0, KwDropContext);
    };
    AlterTableDropCompactStorageContext.prototype.kwCompact = function () {
        return this.getRuleContext(0, KwCompactContext);
    };
    AlterTableDropCompactStorageContext.prototype.kwStorage = function () {
        return this.getRuleContext(0, KwStorageContext);
    };
    Object.defineProperty(AlterTableDropCompactStorageContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_alterTableDropCompactStorage; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlterTableDropCompactStorageContext.prototype.enterRule = function (listener) {
        if (listener.enterAlterTableDropCompactStorage) {
            listener.enterAlterTableDropCompactStorage(this);
        }
    };
    // @Override
    AlterTableDropCompactStorageContext.prototype.exitRule = function (listener) {
        if (listener.exitAlterTableDropCompactStorage) {
            listener.exitAlterTableDropCompactStorage(this);
        }
    };
    // @Override
    AlterTableDropCompactStorageContext.prototype.accept = function (visitor) {
        if (visitor.visitAlterTableDropCompactStorage) {
            return visitor.visitAlterTableDropCompactStorage(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlterTableDropCompactStorageContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlterTableDropCompactStorageContext = AlterTableDropCompactStorageContext;
var AlterTableDropColumnsContext = /** @class */ (function (_super) {
    __extends(AlterTableDropColumnsContext, _super);
    function AlterTableDropColumnsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlterTableDropColumnsContext.prototype.kwDrop = function () {
        return this.getRuleContext(0, KwDropContext);
    };
    AlterTableDropColumnsContext.prototype.alterTableDropColumnList = function () {
        return this.getRuleContext(0, AlterTableDropColumnListContext);
    };
    Object.defineProperty(AlterTableDropColumnsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_alterTableDropColumns; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlterTableDropColumnsContext.prototype.enterRule = function (listener) {
        if (listener.enterAlterTableDropColumns) {
            listener.enterAlterTableDropColumns(this);
        }
    };
    // @Override
    AlterTableDropColumnsContext.prototype.exitRule = function (listener) {
        if (listener.exitAlterTableDropColumns) {
            listener.exitAlterTableDropColumns(this);
        }
    };
    // @Override
    AlterTableDropColumnsContext.prototype.accept = function (visitor) {
        if (visitor.visitAlterTableDropColumns) {
            return visitor.visitAlterTableDropColumns(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlterTableDropColumnsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlterTableDropColumnsContext = AlterTableDropColumnsContext;
var AlterTableDropColumnListContext = /** @class */ (function (_super) {
    __extends(AlterTableDropColumnListContext, _super);
    function AlterTableDropColumnListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlterTableDropColumnListContext.prototype.column = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnContext);
        }
        else {
            return this.getRuleContext(i, ColumnContext);
        }
    };
    AlterTableDropColumnListContext.prototype.syntaxComma = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SyntaxCommaContext);
        }
        else {
            return this.getRuleContext(i, SyntaxCommaContext);
        }
    };
    Object.defineProperty(AlterTableDropColumnListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_alterTableDropColumnList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlterTableDropColumnListContext.prototype.enterRule = function (listener) {
        if (listener.enterAlterTableDropColumnList) {
            listener.enterAlterTableDropColumnList(this);
        }
    };
    // @Override
    AlterTableDropColumnListContext.prototype.exitRule = function (listener) {
        if (listener.exitAlterTableDropColumnList) {
            listener.exitAlterTableDropColumnList(this);
        }
    };
    // @Override
    AlterTableDropColumnListContext.prototype.accept = function (visitor) {
        if (visitor.visitAlterTableDropColumnList) {
            return visitor.visitAlterTableDropColumnList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlterTableDropColumnListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlterTableDropColumnListContext = AlterTableDropColumnListContext;
var AlterTableAddContext = /** @class */ (function (_super) {
    __extends(AlterTableAddContext, _super);
    function AlterTableAddContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlterTableAddContext.prototype.kwAdd = function () {
        return this.getRuleContext(0, KwAddContext);
    };
    AlterTableAddContext.prototype.alterTableColumnDefinition = function () {
        return this.getRuleContext(0, AlterTableColumnDefinitionContext);
    };
    Object.defineProperty(AlterTableAddContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_alterTableAdd; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlterTableAddContext.prototype.enterRule = function (listener) {
        if (listener.enterAlterTableAdd) {
            listener.enterAlterTableAdd(this);
        }
    };
    // @Override
    AlterTableAddContext.prototype.exitRule = function (listener) {
        if (listener.exitAlterTableAdd) {
            listener.exitAlterTableAdd(this);
        }
    };
    // @Override
    AlterTableAddContext.prototype.accept = function (visitor) {
        if (visitor.visitAlterTableAdd) {
            return visitor.visitAlterTableAdd(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlterTableAddContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlterTableAddContext = AlterTableAddContext;
var AlterTableColumnDefinitionContext = /** @class */ (function (_super) {
    __extends(AlterTableColumnDefinitionContext, _super);
    function AlterTableColumnDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlterTableColumnDefinitionContext.prototype.column = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnContext);
        }
        else {
            return this.getRuleContext(i, ColumnContext);
        }
    };
    AlterTableColumnDefinitionContext.prototype.dataType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DataTypeContext);
        }
        else {
            return this.getRuleContext(i, DataTypeContext);
        }
    };
    AlterTableColumnDefinitionContext.prototype.syntaxComma = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SyntaxCommaContext);
        }
        else {
            return this.getRuleContext(i, SyntaxCommaContext);
        }
    };
    Object.defineProperty(AlterTableColumnDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_alterTableColumnDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlterTableColumnDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterAlterTableColumnDefinition) {
            listener.enterAlterTableColumnDefinition(this);
        }
    };
    // @Override
    AlterTableColumnDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitAlterTableColumnDefinition) {
            listener.exitAlterTableColumnDefinition(this);
        }
    };
    // @Override
    AlterTableColumnDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitAlterTableColumnDefinition) {
            return visitor.visitAlterTableColumnDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlterTableColumnDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlterTableColumnDefinitionContext = AlterTableColumnDefinitionContext;
var AlterRoleContext = /** @class */ (function (_super) {
    __extends(AlterRoleContext, _super);
    function AlterRoleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlterRoleContext.prototype.kwAlter = function () {
        return this.getRuleContext(0, KwAlterContext);
    };
    AlterRoleContext.prototype.kwRole = function () {
        return this.getRuleContext(0, KwRoleContext);
    };
    AlterRoleContext.prototype.role = function () {
        return this.getRuleContext(0, RoleContext);
    };
    AlterRoleContext.prototype.roleWith = function () {
        return this.tryGetRuleContext(0, RoleWithContext);
    };
    Object.defineProperty(AlterRoleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_alterRole; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlterRoleContext.prototype.enterRule = function (listener) {
        if (listener.enterAlterRole) {
            listener.enterAlterRole(this);
        }
    };
    // @Override
    AlterRoleContext.prototype.exitRule = function (listener) {
        if (listener.exitAlterRole) {
            listener.exitAlterRole(this);
        }
    };
    // @Override
    AlterRoleContext.prototype.accept = function (visitor) {
        if (visitor.visitAlterRole) {
            return visitor.visitAlterRole(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlterRoleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlterRoleContext = AlterRoleContext;
var RoleWithContext = /** @class */ (function (_super) {
    __extends(RoleWithContext, _super);
    function RoleWithContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RoleWithContext.prototype.kwWith = function () {
        return this.getRuleContext(0, KwWithContext);
    };
    RoleWithContext.prototype.roleWithOptions = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RoleWithOptionsContext);
        }
        else {
            return this.getRuleContext(i, RoleWithOptionsContext);
        }
    };
    RoleWithContext.prototype.kwAnd = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(KwAndContext);
        }
        else {
            return this.getRuleContext(i, KwAndContext);
        }
    };
    Object.defineProperty(RoleWithContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_roleWith; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RoleWithContext.prototype.enterRule = function (listener) {
        if (listener.enterRoleWith) {
            listener.enterRoleWith(this);
        }
    };
    // @Override
    RoleWithContext.prototype.exitRule = function (listener) {
        if (listener.exitRoleWith) {
            listener.exitRoleWith(this);
        }
    };
    // @Override
    RoleWithContext.prototype.accept = function (visitor) {
        if (visitor.visitRoleWith) {
            return visitor.visitRoleWith(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RoleWithContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RoleWithContext = RoleWithContext;
var RoleWithOptionsContext = /** @class */ (function (_super) {
    __extends(RoleWithOptionsContext, _super);
    function RoleWithOptionsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RoleWithOptionsContext.prototype.kwPassword = function () {
        return this.tryGetRuleContext(0, KwPasswordContext);
    };
    RoleWithOptionsContext.prototype.OPERATOR_EQ = function () { return this.getToken(CqlParser.OPERATOR_EQ, 0); };
    RoleWithOptionsContext.prototype.stringLiteral = function () {
        return this.tryGetRuleContext(0, StringLiteralContext);
    };
    RoleWithOptionsContext.prototype.kwLogin = function () {
        return this.tryGetRuleContext(0, KwLoginContext);
    };
    RoleWithOptionsContext.prototype.booleanLiteral = function () {
        return this.tryGetRuleContext(0, BooleanLiteralContext);
    };
    RoleWithOptionsContext.prototype.kwSuperuser = function () {
        return this.tryGetRuleContext(0, KwSuperuserContext);
    };
    RoleWithOptionsContext.prototype.kwOptions = function () {
        return this.tryGetRuleContext(0, KwOptionsContext);
    };
    RoleWithOptionsContext.prototype.optionHash = function () {
        return this.tryGetRuleContext(0, OptionHashContext);
    };
    Object.defineProperty(RoleWithOptionsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_roleWithOptions; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RoleWithOptionsContext.prototype.enterRule = function (listener) {
        if (listener.enterRoleWithOptions) {
            listener.enterRoleWithOptions(this);
        }
    };
    // @Override
    RoleWithOptionsContext.prototype.exitRule = function (listener) {
        if (listener.exitRoleWithOptions) {
            listener.exitRoleWithOptions(this);
        }
    };
    // @Override
    RoleWithOptionsContext.prototype.accept = function (visitor) {
        if (visitor.visitRoleWithOptions) {
            return visitor.visitRoleWithOptions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RoleWithOptionsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RoleWithOptionsContext = RoleWithOptionsContext;
var AlterMaterializedViewContext = /** @class */ (function (_super) {
    __extends(AlterMaterializedViewContext, _super);
    function AlterMaterializedViewContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlterMaterializedViewContext.prototype.kwAlter = function () {
        return this.getRuleContext(0, KwAlterContext);
    };
    AlterMaterializedViewContext.prototype.kwMaterialized = function () {
        return this.getRuleContext(0, KwMaterializedContext);
    };
    AlterMaterializedViewContext.prototype.kwView = function () {
        return this.getRuleContext(0, KwViewContext);
    };
    AlterMaterializedViewContext.prototype.materializedView = function () {
        return this.getRuleContext(0, MaterializedViewContext);
    };
    AlterMaterializedViewContext.prototype.keyspace = function () {
        return this.tryGetRuleContext(0, KeyspaceContext);
    };
    AlterMaterializedViewContext.prototype.DOT = function () { return this.tryGetToken(CqlParser.DOT, 0); };
    AlterMaterializedViewContext.prototype.kwWith = function () {
        return this.tryGetRuleContext(0, KwWithContext);
    };
    AlterMaterializedViewContext.prototype.tableOptions = function () {
        return this.tryGetRuleContext(0, TableOptionsContext);
    };
    Object.defineProperty(AlterMaterializedViewContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_alterMaterializedView; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlterMaterializedViewContext.prototype.enterRule = function (listener) {
        if (listener.enterAlterMaterializedView) {
            listener.enterAlterMaterializedView(this);
        }
    };
    // @Override
    AlterMaterializedViewContext.prototype.exitRule = function (listener) {
        if (listener.exitAlterMaterializedView) {
            listener.exitAlterMaterializedView(this);
        }
    };
    // @Override
    AlterMaterializedViewContext.prototype.accept = function (visitor) {
        if (visitor.visitAlterMaterializedView) {
            return visitor.visitAlterMaterializedView(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlterMaterializedViewContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlterMaterializedViewContext = AlterMaterializedViewContext;
var DropUserContext = /** @class */ (function (_super) {
    __extends(DropUserContext, _super);
    function DropUserContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DropUserContext.prototype.kwDrop = function () {
        return this.getRuleContext(0, KwDropContext);
    };
    DropUserContext.prototype.kwUser = function () {
        return this.getRuleContext(0, KwUserContext);
    };
    DropUserContext.prototype.user = function () {
        return this.getRuleContext(0, UserContext);
    };
    DropUserContext.prototype.ifExist = function () {
        return this.tryGetRuleContext(0, IfExistContext);
    };
    Object.defineProperty(DropUserContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_dropUser; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DropUserContext.prototype.enterRule = function (listener) {
        if (listener.enterDropUser) {
            listener.enterDropUser(this);
        }
    };
    // @Override
    DropUserContext.prototype.exitRule = function (listener) {
        if (listener.exitDropUser) {
            listener.exitDropUser(this);
        }
    };
    // @Override
    DropUserContext.prototype.accept = function (visitor) {
        if (visitor.visitDropUser) {
            return visitor.visitDropUser(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DropUserContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DropUserContext = DropUserContext;
var DropTypeContext = /** @class */ (function (_super) {
    __extends(DropTypeContext, _super);
    function DropTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DropTypeContext.prototype.kwDrop = function () {
        return this.getRuleContext(0, KwDropContext);
    };
    DropTypeContext.prototype.kwType = function () {
        return this.getRuleContext(0, KwTypeContext);
    };
    DropTypeContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    DropTypeContext.prototype.ifExist = function () {
        return this.tryGetRuleContext(0, IfExistContext);
    };
    DropTypeContext.prototype.keyspace = function () {
        return this.tryGetRuleContext(0, KeyspaceContext);
    };
    DropTypeContext.prototype.DOT = function () { return this.tryGetToken(CqlParser.DOT, 0); };
    Object.defineProperty(DropTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_dropType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DropTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterDropType) {
            listener.enterDropType(this);
        }
    };
    // @Override
    DropTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitDropType) {
            listener.exitDropType(this);
        }
    };
    // @Override
    DropTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitDropType) {
            return visitor.visitDropType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DropTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DropTypeContext = DropTypeContext;
var DropMaterializedViewContext = /** @class */ (function (_super) {
    __extends(DropMaterializedViewContext, _super);
    function DropMaterializedViewContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DropMaterializedViewContext.prototype.kwDrop = function () {
        return this.getRuleContext(0, KwDropContext);
    };
    DropMaterializedViewContext.prototype.kwMaterialized = function () {
        return this.getRuleContext(0, KwMaterializedContext);
    };
    DropMaterializedViewContext.prototype.kwView = function () {
        return this.getRuleContext(0, KwViewContext);
    };
    DropMaterializedViewContext.prototype.materializedView = function () {
        return this.getRuleContext(0, MaterializedViewContext);
    };
    DropMaterializedViewContext.prototype.ifExist = function () {
        return this.tryGetRuleContext(0, IfExistContext);
    };
    DropMaterializedViewContext.prototype.keyspace = function () {
        return this.tryGetRuleContext(0, KeyspaceContext);
    };
    DropMaterializedViewContext.prototype.DOT = function () { return this.tryGetToken(CqlParser.DOT, 0); };
    Object.defineProperty(DropMaterializedViewContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_dropMaterializedView; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DropMaterializedViewContext.prototype.enterRule = function (listener) {
        if (listener.enterDropMaterializedView) {
            listener.enterDropMaterializedView(this);
        }
    };
    // @Override
    DropMaterializedViewContext.prototype.exitRule = function (listener) {
        if (listener.exitDropMaterializedView) {
            listener.exitDropMaterializedView(this);
        }
    };
    // @Override
    DropMaterializedViewContext.prototype.accept = function (visitor) {
        if (visitor.visitDropMaterializedView) {
            return visitor.visitDropMaterializedView(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DropMaterializedViewContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DropMaterializedViewContext = DropMaterializedViewContext;
var DropAggregateContext = /** @class */ (function (_super) {
    __extends(DropAggregateContext, _super);
    function DropAggregateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DropAggregateContext.prototype.kwDrop = function () {
        return this.getRuleContext(0, KwDropContext);
    };
    DropAggregateContext.prototype.kwAggregate = function () {
        return this.getRuleContext(0, KwAggregateContext);
    };
    DropAggregateContext.prototype.aggregate = function () {
        return this.getRuleContext(0, AggregateContext);
    };
    DropAggregateContext.prototype.ifExist = function () {
        return this.tryGetRuleContext(0, IfExistContext);
    };
    DropAggregateContext.prototype.keyspace = function () {
        return this.tryGetRuleContext(0, KeyspaceContext);
    };
    DropAggregateContext.prototype.DOT = function () { return this.tryGetToken(CqlParser.DOT, 0); };
    Object.defineProperty(DropAggregateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_dropAggregate; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DropAggregateContext.prototype.enterRule = function (listener) {
        if (listener.enterDropAggregate) {
            listener.enterDropAggregate(this);
        }
    };
    // @Override
    DropAggregateContext.prototype.exitRule = function (listener) {
        if (listener.exitDropAggregate) {
            listener.exitDropAggregate(this);
        }
    };
    // @Override
    DropAggregateContext.prototype.accept = function (visitor) {
        if (visitor.visitDropAggregate) {
            return visitor.visitDropAggregate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DropAggregateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DropAggregateContext = DropAggregateContext;
var DropFunctionContext = /** @class */ (function (_super) {
    __extends(DropFunctionContext, _super);
    function DropFunctionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DropFunctionContext.prototype.kwDrop = function () {
        return this.getRuleContext(0, KwDropContext);
    };
    DropFunctionContext.prototype.kwFunction = function () {
        return this.getRuleContext(0, KwFunctionContext);
    };
    DropFunctionContext.prototype.function = function () {
        return this.getRuleContext(0, FunctionContext);
    };
    DropFunctionContext.prototype.ifExist = function () {
        return this.tryGetRuleContext(0, IfExistContext);
    };
    DropFunctionContext.prototype.keyspace = function () {
        return this.tryGetRuleContext(0, KeyspaceContext);
    };
    DropFunctionContext.prototype.DOT = function () { return this.tryGetToken(CqlParser.DOT, 0); };
    Object.defineProperty(DropFunctionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_dropFunction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DropFunctionContext.prototype.enterRule = function (listener) {
        if (listener.enterDropFunction) {
            listener.enterDropFunction(this);
        }
    };
    // @Override
    DropFunctionContext.prototype.exitRule = function (listener) {
        if (listener.exitDropFunction) {
            listener.exitDropFunction(this);
        }
    };
    // @Override
    DropFunctionContext.prototype.accept = function (visitor) {
        if (visitor.visitDropFunction) {
            return visitor.visitDropFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DropFunctionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DropFunctionContext = DropFunctionContext;
var DropTriggerContext = /** @class */ (function (_super) {
    __extends(DropTriggerContext, _super);
    function DropTriggerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DropTriggerContext.prototype.kwDrop = function () {
        return this.getRuleContext(0, KwDropContext);
    };
    DropTriggerContext.prototype.kwTrigger = function () {
        return this.getRuleContext(0, KwTriggerContext);
    };
    DropTriggerContext.prototype.trigger = function () {
        return this.getRuleContext(0, TriggerContext);
    };
    DropTriggerContext.prototype.kwOn = function () {
        return this.getRuleContext(0, KwOnContext);
    };
    DropTriggerContext.prototype.table = function () {
        return this.getRuleContext(0, TableContext);
    };
    DropTriggerContext.prototype.ifExist = function () {
        return this.tryGetRuleContext(0, IfExistContext);
    };
    DropTriggerContext.prototype.keyspace = function () {
        return this.tryGetRuleContext(0, KeyspaceContext);
    };
    DropTriggerContext.prototype.DOT = function () { return this.tryGetToken(CqlParser.DOT, 0); };
    Object.defineProperty(DropTriggerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_dropTrigger; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DropTriggerContext.prototype.enterRule = function (listener) {
        if (listener.enterDropTrigger) {
            listener.enterDropTrigger(this);
        }
    };
    // @Override
    DropTriggerContext.prototype.exitRule = function (listener) {
        if (listener.exitDropTrigger) {
            listener.exitDropTrigger(this);
        }
    };
    // @Override
    DropTriggerContext.prototype.accept = function (visitor) {
        if (visitor.visitDropTrigger) {
            return visitor.visitDropTrigger(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DropTriggerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DropTriggerContext = DropTriggerContext;
var DropRoleContext = /** @class */ (function (_super) {
    __extends(DropRoleContext, _super);
    function DropRoleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DropRoleContext.prototype.kwDrop = function () {
        return this.getRuleContext(0, KwDropContext);
    };
    DropRoleContext.prototype.kwRole = function () {
        return this.getRuleContext(0, KwRoleContext);
    };
    DropRoleContext.prototype.role = function () {
        return this.getRuleContext(0, RoleContext);
    };
    DropRoleContext.prototype.ifExist = function () {
        return this.tryGetRuleContext(0, IfExistContext);
    };
    Object.defineProperty(DropRoleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_dropRole; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DropRoleContext.prototype.enterRule = function (listener) {
        if (listener.enterDropRole) {
            listener.enterDropRole(this);
        }
    };
    // @Override
    DropRoleContext.prototype.exitRule = function (listener) {
        if (listener.exitDropRole) {
            listener.exitDropRole(this);
        }
    };
    // @Override
    DropRoleContext.prototype.accept = function (visitor) {
        if (visitor.visitDropRole) {
            return visitor.visitDropRole(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DropRoleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DropRoleContext = DropRoleContext;
var DropTableContext = /** @class */ (function (_super) {
    __extends(DropTableContext, _super);
    function DropTableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DropTableContext.prototype.kwDrop = function () {
        return this.getRuleContext(0, KwDropContext);
    };
    DropTableContext.prototype.kwTable = function () {
        return this.getRuleContext(0, KwTableContext);
    };
    DropTableContext.prototype.table = function () {
        return this.getRuleContext(0, TableContext);
    };
    DropTableContext.prototype.ifExist = function () {
        return this.tryGetRuleContext(0, IfExistContext);
    };
    DropTableContext.prototype.keyspace = function () {
        return this.tryGetRuleContext(0, KeyspaceContext);
    };
    DropTableContext.prototype.DOT = function () { return this.tryGetToken(CqlParser.DOT, 0); };
    Object.defineProperty(DropTableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_dropTable; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DropTableContext.prototype.enterRule = function (listener) {
        if (listener.enterDropTable) {
            listener.enterDropTable(this);
        }
    };
    // @Override
    DropTableContext.prototype.exitRule = function (listener) {
        if (listener.exitDropTable) {
            listener.exitDropTable(this);
        }
    };
    // @Override
    DropTableContext.prototype.accept = function (visitor) {
        if (visitor.visitDropTable) {
            return visitor.visitDropTable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DropTableContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DropTableContext = DropTableContext;
var DropKeyspaceContext = /** @class */ (function (_super) {
    __extends(DropKeyspaceContext, _super);
    function DropKeyspaceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DropKeyspaceContext.prototype.kwDrop = function () {
        return this.getRuleContext(0, KwDropContext);
    };
    DropKeyspaceContext.prototype.kwKeyspace = function () {
        return this.getRuleContext(0, KwKeyspaceContext);
    };
    DropKeyspaceContext.prototype.keyspace = function () {
        return this.getRuleContext(0, KeyspaceContext);
    };
    DropKeyspaceContext.prototype.ifExist = function () {
        return this.tryGetRuleContext(0, IfExistContext);
    };
    Object.defineProperty(DropKeyspaceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_dropKeyspace; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DropKeyspaceContext.prototype.enterRule = function (listener) {
        if (listener.enterDropKeyspace) {
            listener.enterDropKeyspace(this);
        }
    };
    // @Override
    DropKeyspaceContext.prototype.exitRule = function (listener) {
        if (listener.exitDropKeyspace) {
            listener.exitDropKeyspace(this);
        }
    };
    // @Override
    DropKeyspaceContext.prototype.accept = function (visitor) {
        if (visitor.visitDropKeyspace) {
            return visitor.visitDropKeyspace(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DropKeyspaceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DropKeyspaceContext = DropKeyspaceContext;
var DropIndexContext = /** @class */ (function (_super) {
    __extends(DropIndexContext, _super);
    function DropIndexContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DropIndexContext.prototype.kwDrop = function () {
        return this.getRuleContext(0, KwDropContext);
    };
    DropIndexContext.prototype.kwIndex = function () {
        return this.getRuleContext(0, KwIndexContext);
    };
    DropIndexContext.prototype.indexName = function () {
        return this.getRuleContext(0, IndexNameContext);
    };
    DropIndexContext.prototype.ifExist = function () {
        return this.tryGetRuleContext(0, IfExistContext);
    };
    DropIndexContext.prototype.keyspace = function () {
        return this.tryGetRuleContext(0, KeyspaceContext);
    };
    DropIndexContext.prototype.DOT = function () { return this.tryGetToken(CqlParser.DOT, 0); };
    Object.defineProperty(DropIndexContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_dropIndex; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DropIndexContext.prototype.enterRule = function (listener) {
        if (listener.enterDropIndex) {
            listener.enterDropIndex(this);
        }
    };
    // @Override
    DropIndexContext.prototype.exitRule = function (listener) {
        if (listener.exitDropIndex) {
            listener.exitDropIndex(this);
        }
    };
    // @Override
    DropIndexContext.prototype.accept = function (visitor) {
        if (visitor.visitDropIndex) {
            return visitor.visitDropIndex(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DropIndexContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DropIndexContext = DropIndexContext;
var CreateTableContext = /** @class */ (function (_super) {
    __extends(CreateTableContext, _super);
    function CreateTableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CreateTableContext.prototype.kwCreate = function () {
        return this.getRuleContext(0, KwCreateContext);
    };
    CreateTableContext.prototype.kwTable = function () {
        return this.getRuleContext(0, KwTableContext);
    };
    CreateTableContext.prototype.table = function () {
        return this.getRuleContext(0, TableContext);
    };
    CreateTableContext.prototype.syntaxBracketLr = function () {
        return this.getRuleContext(0, SyntaxBracketLrContext);
    };
    CreateTableContext.prototype.columnDefinitionList = function () {
        return this.getRuleContext(0, ColumnDefinitionListContext);
    };
    CreateTableContext.prototype.syntaxBracketRr = function () {
        return this.getRuleContext(0, SyntaxBracketRrContext);
    };
    CreateTableContext.prototype.ifNotExist = function () {
        return this.tryGetRuleContext(0, IfNotExistContext);
    };
    CreateTableContext.prototype.keyspace = function () {
        return this.tryGetRuleContext(0, KeyspaceContext);
    };
    CreateTableContext.prototype.DOT = function () { return this.tryGetToken(CqlParser.DOT, 0); };
    CreateTableContext.prototype.withElement = function () {
        return this.tryGetRuleContext(0, WithElementContext);
    };
    Object.defineProperty(CreateTableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_createTable; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CreateTableContext.prototype.enterRule = function (listener) {
        if (listener.enterCreateTable) {
            listener.enterCreateTable(this);
        }
    };
    // @Override
    CreateTableContext.prototype.exitRule = function (listener) {
        if (listener.exitCreateTable) {
            listener.exitCreateTable(this);
        }
    };
    // @Override
    CreateTableContext.prototype.accept = function (visitor) {
        if (visitor.visitCreateTable) {
            return visitor.visitCreateTable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CreateTableContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CreateTableContext = CreateTableContext;
var WithElementContext = /** @class */ (function (_super) {
    __extends(WithElementContext, _super);
    function WithElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WithElementContext.prototype.kwWith = function () {
        return this.getRuleContext(0, KwWithContext);
    };
    WithElementContext.prototype.tableOptions = function () {
        return this.tryGetRuleContext(0, TableOptionsContext);
    };
    WithElementContext.prototype.clusteringOrder = function () {
        return this.tryGetRuleContext(0, ClusteringOrderContext);
    };
    Object.defineProperty(WithElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_withElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WithElementContext.prototype.enterRule = function (listener) {
        if (listener.enterWithElement) {
            listener.enterWithElement(this);
        }
    };
    // @Override
    WithElementContext.prototype.exitRule = function (listener) {
        if (listener.exitWithElement) {
            listener.exitWithElement(this);
        }
    };
    // @Override
    WithElementContext.prototype.accept = function (visitor) {
        if (visitor.visitWithElement) {
            return visitor.visitWithElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WithElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WithElementContext = WithElementContext;
var ClusteringOrderContext = /** @class */ (function (_super) {
    __extends(ClusteringOrderContext, _super);
    function ClusteringOrderContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClusteringOrderContext.prototype.kwClustering = function () {
        return this.getRuleContext(0, KwClusteringContext);
    };
    ClusteringOrderContext.prototype.kwOrder = function () {
        return this.getRuleContext(0, KwOrderContext);
    };
    ClusteringOrderContext.prototype.kwBy = function () {
        return this.getRuleContext(0, KwByContext);
    };
    ClusteringOrderContext.prototype.syntaxBracketLr = function () {
        return this.getRuleContext(0, SyntaxBracketLrContext);
    };
    ClusteringOrderContext.prototype.column = function () {
        return this.getRuleContext(0, ColumnContext);
    };
    ClusteringOrderContext.prototype.syntaxBracketRr = function () {
        return this.getRuleContext(0, SyntaxBracketRrContext);
    };
    ClusteringOrderContext.prototype.orderDirection = function () {
        return this.tryGetRuleContext(0, OrderDirectionContext);
    };
    Object.defineProperty(ClusteringOrderContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_clusteringOrder; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClusteringOrderContext.prototype.enterRule = function (listener) {
        if (listener.enterClusteringOrder) {
            listener.enterClusteringOrder(this);
        }
    };
    // @Override
    ClusteringOrderContext.prototype.exitRule = function (listener) {
        if (listener.exitClusteringOrder) {
            listener.exitClusteringOrder(this);
        }
    };
    // @Override
    ClusteringOrderContext.prototype.accept = function (visitor) {
        if (visitor.visitClusteringOrder) {
            return visitor.visitClusteringOrder(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClusteringOrderContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClusteringOrderContext = ClusteringOrderContext;
var TableOptionsContext = /** @class */ (function (_super) {
    __extends(TableOptionsContext, _super);
    function TableOptionsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TableOptionsContext.prototype.tableOptionItem = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TableOptionItemContext);
        }
        else {
            return this.getRuleContext(i, TableOptionItemContext);
        }
    };
    TableOptionsContext.prototype.kwAnd = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(KwAndContext);
        }
        else {
            return this.getRuleContext(i, KwAndContext);
        }
    };
    Object.defineProperty(TableOptionsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_tableOptions; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TableOptionsContext.prototype.enterRule = function (listener) {
        if (listener.enterTableOptions) {
            listener.enterTableOptions(this);
        }
    };
    // @Override
    TableOptionsContext.prototype.exitRule = function (listener) {
        if (listener.exitTableOptions) {
            listener.exitTableOptions(this);
        }
    };
    // @Override
    TableOptionsContext.prototype.accept = function (visitor) {
        if (visitor.visitTableOptions) {
            return visitor.visitTableOptions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TableOptionsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TableOptionsContext = TableOptionsContext;
var TableOptionItemContext = /** @class */ (function (_super) {
    __extends(TableOptionItemContext, _super);
    function TableOptionItemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TableOptionItemContext.prototype.tableOptionName = function () {
        return this.getRuleContext(0, TableOptionNameContext);
    };
    TableOptionItemContext.prototype.OPERATOR_EQ = function () { return this.getToken(CqlParser.OPERATOR_EQ, 0); };
    TableOptionItemContext.prototype.tableOptionValue = function () {
        return this.tryGetRuleContext(0, TableOptionValueContext);
    };
    TableOptionItemContext.prototype.optionHash = function () {
        return this.tryGetRuleContext(0, OptionHashContext);
    };
    Object.defineProperty(TableOptionItemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_tableOptionItem; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TableOptionItemContext.prototype.enterRule = function (listener) {
        if (listener.enterTableOptionItem) {
            listener.enterTableOptionItem(this);
        }
    };
    // @Override
    TableOptionItemContext.prototype.exitRule = function (listener) {
        if (listener.exitTableOptionItem) {
            listener.exitTableOptionItem(this);
        }
    };
    // @Override
    TableOptionItemContext.prototype.accept = function (visitor) {
        if (visitor.visitTableOptionItem) {
            return visitor.visitTableOptionItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TableOptionItemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TableOptionItemContext = TableOptionItemContext;
var TableOptionNameContext = /** @class */ (function (_super) {
    __extends(TableOptionNameContext, _super);
    function TableOptionNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TableOptionNameContext.prototype.OBJECT_NAME = function () { return this.getToken(CqlParser.OBJECT_NAME, 0); };
    Object.defineProperty(TableOptionNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_tableOptionName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TableOptionNameContext.prototype.enterRule = function (listener) {
        if (listener.enterTableOptionName) {
            listener.enterTableOptionName(this);
        }
    };
    // @Override
    TableOptionNameContext.prototype.exitRule = function (listener) {
        if (listener.exitTableOptionName) {
            listener.exitTableOptionName(this);
        }
    };
    // @Override
    TableOptionNameContext.prototype.accept = function (visitor) {
        if (visitor.visitTableOptionName) {
            return visitor.visitTableOptionName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TableOptionNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TableOptionNameContext = TableOptionNameContext;
var TableOptionValueContext = /** @class */ (function (_super) {
    __extends(TableOptionValueContext, _super);
    function TableOptionValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TableOptionValueContext.prototype.stringLiteral = function () {
        return this.tryGetRuleContext(0, StringLiteralContext);
    };
    TableOptionValueContext.prototype.floatLiteral = function () {
        return this.tryGetRuleContext(0, FloatLiteralContext);
    };
    Object.defineProperty(TableOptionValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_tableOptionValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TableOptionValueContext.prototype.enterRule = function (listener) {
        if (listener.enterTableOptionValue) {
            listener.enterTableOptionValue(this);
        }
    };
    // @Override
    TableOptionValueContext.prototype.exitRule = function (listener) {
        if (listener.exitTableOptionValue) {
            listener.exitTableOptionValue(this);
        }
    };
    // @Override
    TableOptionValueContext.prototype.accept = function (visitor) {
        if (visitor.visitTableOptionValue) {
            return visitor.visitTableOptionValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TableOptionValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TableOptionValueContext = TableOptionValueContext;
var OptionHashContext = /** @class */ (function (_super) {
    __extends(OptionHashContext, _super);
    function OptionHashContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptionHashContext.prototype.syntaxBracketLc = function () {
        return this.getRuleContext(0, SyntaxBracketLcContext);
    };
    OptionHashContext.prototype.optionHashItem = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OptionHashItemContext);
        }
        else {
            return this.getRuleContext(i, OptionHashItemContext);
        }
    };
    OptionHashContext.prototype.syntaxBracketRc = function () {
        return this.getRuleContext(0, SyntaxBracketRcContext);
    };
    OptionHashContext.prototype.syntaxComma = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SyntaxCommaContext);
        }
        else {
            return this.getRuleContext(i, SyntaxCommaContext);
        }
    };
    Object.defineProperty(OptionHashContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_optionHash; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OptionHashContext.prototype.enterRule = function (listener) {
        if (listener.enterOptionHash) {
            listener.enterOptionHash(this);
        }
    };
    // @Override
    OptionHashContext.prototype.exitRule = function (listener) {
        if (listener.exitOptionHash) {
            listener.exitOptionHash(this);
        }
    };
    // @Override
    OptionHashContext.prototype.accept = function (visitor) {
        if (visitor.visitOptionHash) {
            return visitor.visitOptionHash(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OptionHashContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OptionHashContext = OptionHashContext;
var OptionHashItemContext = /** @class */ (function (_super) {
    __extends(OptionHashItemContext, _super);
    function OptionHashItemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptionHashItemContext.prototype.optionHashKey = function () {
        return this.getRuleContext(0, OptionHashKeyContext);
    };
    OptionHashItemContext.prototype.COLON = function () { return this.getToken(CqlParser.COLON, 0); };
    OptionHashItemContext.prototype.optionHashValue = function () {
        return this.getRuleContext(0, OptionHashValueContext);
    };
    Object.defineProperty(OptionHashItemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_optionHashItem; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OptionHashItemContext.prototype.enterRule = function (listener) {
        if (listener.enterOptionHashItem) {
            listener.enterOptionHashItem(this);
        }
    };
    // @Override
    OptionHashItemContext.prototype.exitRule = function (listener) {
        if (listener.exitOptionHashItem) {
            listener.exitOptionHashItem(this);
        }
    };
    // @Override
    OptionHashItemContext.prototype.accept = function (visitor) {
        if (visitor.visitOptionHashItem) {
            return visitor.visitOptionHashItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OptionHashItemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OptionHashItemContext = OptionHashItemContext;
var OptionHashKeyContext = /** @class */ (function (_super) {
    __extends(OptionHashKeyContext, _super);
    function OptionHashKeyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptionHashKeyContext.prototype.stringLiteral = function () {
        return this.getRuleContext(0, StringLiteralContext);
    };
    Object.defineProperty(OptionHashKeyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_optionHashKey; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OptionHashKeyContext.prototype.enterRule = function (listener) {
        if (listener.enterOptionHashKey) {
            listener.enterOptionHashKey(this);
        }
    };
    // @Override
    OptionHashKeyContext.prototype.exitRule = function (listener) {
        if (listener.exitOptionHashKey) {
            listener.exitOptionHashKey(this);
        }
    };
    // @Override
    OptionHashKeyContext.prototype.accept = function (visitor) {
        if (visitor.visitOptionHashKey) {
            return visitor.visitOptionHashKey(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OptionHashKeyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OptionHashKeyContext = OptionHashKeyContext;
var OptionHashValueContext = /** @class */ (function (_super) {
    __extends(OptionHashValueContext, _super);
    function OptionHashValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptionHashValueContext.prototype.stringLiteral = function () {
        return this.tryGetRuleContext(0, StringLiteralContext);
    };
    OptionHashValueContext.prototype.floatLiteral = function () {
        return this.tryGetRuleContext(0, FloatLiteralContext);
    };
    Object.defineProperty(OptionHashValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_optionHashValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OptionHashValueContext.prototype.enterRule = function (listener) {
        if (listener.enterOptionHashValue) {
            listener.enterOptionHashValue(this);
        }
    };
    // @Override
    OptionHashValueContext.prototype.exitRule = function (listener) {
        if (listener.exitOptionHashValue) {
            listener.exitOptionHashValue(this);
        }
    };
    // @Override
    OptionHashValueContext.prototype.accept = function (visitor) {
        if (visitor.visitOptionHashValue) {
            return visitor.visitOptionHashValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OptionHashValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OptionHashValueContext = OptionHashValueContext;
var ColumnDefinitionListContext = /** @class */ (function (_super) {
    __extends(ColumnDefinitionListContext, _super);
    function ColumnDefinitionListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ColumnDefinitionListContext.prototype.columnDefinition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnDefinitionContext);
        }
        else {
            return this.getRuleContext(i, ColumnDefinitionContext);
        }
    };
    ColumnDefinitionListContext.prototype.syntaxComma = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SyntaxCommaContext);
        }
        else {
            return this.getRuleContext(i, SyntaxCommaContext);
        }
    };
    ColumnDefinitionListContext.prototype.primaryKeyElement = function () {
        return this.tryGetRuleContext(0, PrimaryKeyElementContext);
    };
    Object.defineProperty(ColumnDefinitionListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_columnDefinitionList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ColumnDefinitionListContext.prototype.enterRule = function (listener) {
        if (listener.enterColumnDefinitionList) {
            listener.enterColumnDefinitionList(this);
        }
    };
    // @Override
    ColumnDefinitionListContext.prototype.exitRule = function (listener) {
        if (listener.exitColumnDefinitionList) {
            listener.exitColumnDefinitionList(this);
        }
    };
    // @Override
    ColumnDefinitionListContext.prototype.accept = function (visitor) {
        if (visitor.visitColumnDefinitionList) {
            return visitor.visitColumnDefinitionList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ColumnDefinitionListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ColumnDefinitionListContext = ColumnDefinitionListContext;
var ColumnDefinitionContext = /** @class */ (function (_super) {
    __extends(ColumnDefinitionContext, _super);
    function ColumnDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ColumnDefinitionContext.prototype.column = function () {
        return this.getRuleContext(0, ColumnContext);
    };
    ColumnDefinitionContext.prototype.dataType = function () {
        return this.getRuleContext(0, DataTypeContext);
    };
    ColumnDefinitionContext.prototype.primaryKeyColumn = function () {
        return this.tryGetRuleContext(0, PrimaryKeyColumnContext);
    };
    Object.defineProperty(ColumnDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_columnDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ColumnDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterColumnDefinition) {
            listener.enterColumnDefinition(this);
        }
    };
    // @Override
    ColumnDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitColumnDefinition) {
            listener.exitColumnDefinition(this);
        }
    };
    // @Override
    ColumnDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitColumnDefinition) {
            return visitor.visitColumnDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ColumnDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ColumnDefinitionContext = ColumnDefinitionContext;
var PrimaryKeyColumnContext = /** @class */ (function (_super) {
    __extends(PrimaryKeyColumnContext, _super);
    function PrimaryKeyColumnContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrimaryKeyColumnContext.prototype.kwPrimary = function () {
        return this.getRuleContext(0, KwPrimaryContext);
    };
    PrimaryKeyColumnContext.prototype.kwKey = function () {
        return this.getRuleContext(0, KwKeyContext);
    };
    Object.defineProperty(PrimaryKeyColumnContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_primaryKeyColumn; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrimaryKeyColumnContext.prototype.enterRule = function (listener) {
        if (listener.enterPrimaryKeyColumn) {
            listener.enterPrimaryKeyColumn(this);
        }
    };
    // @Override
    PrimaryKeyColumnContext.prototype.exitRule = function (listener) {
        if (listener.exitPrimaryKeyColumn) {
            listener.exitPrimaryKeyColumn(this);
        }
    };
    // @Override
    PrimaryKeyColumnContext.prototype.accept = function (visitor) {
        if (visitor.visitPrimaryKeyColumn) {
            return visitor.visitPrimaryKeyColumn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrimaryKeyColumnContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrimaryKeyColumnContext = PrimaryKeyColumnContext;
var PrimaryKeyElementContext = /** @class */ (function (_super) {
    __extends(PrimaryKeyElementContext, _super);
    function PrimaryKeyElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrimaryKeyElementContext.prototype.kwPrimary = function () {
        return this.getRuleContext(0, KwPrimaryContext);
    };
    PrimaryKeyElementContext.prototype.kwKey = function () {
        return this.getRuleContext(0, KwKeyContext);
    };
    PrimaryKeyElementContext.prototype.syntaxBracketLr = function () {
        return this.getRuleContext(0, SyntaxBracketLrContext);
    };
    PrimaryKeyElementContext.prototype.primaryKeyDefinition = function () {
        return this.getRuleContext(0, PrimaryKeyDefinitionContext);
    };
    PrimaryKeyElementContext.prototype.syntaxBracketRr = function () {
        return this.getRuleContext(0, SyntaxBracketRrContext);
    };
    Object.defineProperty(PrimaryKeyElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_primaryKeyElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrimaryKeyElementContext.prototype.enterRule = function (listener) {
        if (listener.enterPrimaryKeyElement) {
            listener.enterPrimaryKeyElement(this);
        }
    };
    // @Override
    PrimaryKeyElementContext.prototype.exitRule = function (listener) {
        if (listener.exitPrimaryKeyElement) {
            listener.exitPrimaryKeyElement(this);
        }
    };
    // @Override
    PrimaryKeyElementContext.prototype.accept = function (visitor) {
        if (visitor.visitPrimaryKeyElement) {
            return visitor.visitPrimaryKeyElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrimaryKeyElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrimaryKeyElementContext = PrimaryKeyElementContext;
var PrimaryKeyDefinitionContext = /** @class */ (function (_super) {
    __extends(PrimaryKeyDefinitionContext, _super);
    function PrimaryKeyDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrimaryKeyDefinitionContext.prototype.singlePrimaryKey = function () {
        return this.tryGetRuleContext(0, SinglePrimaryKeyContext);
    };
    PrimaryKeyDefinitionContext.prototype.compoundKey = function () {
        return this.tryGetRuleContext(0, CompoundKeyContext);
    };
    PrimaryKeyDefinitionContext.prototype.compositeKey = function () {
        return this.tryGetRuleContext(0, CompositeKeyContext);
    };
    Object.defineProperty(PrimaryKeyDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_primaryKeyDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrimaryKeyDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterPrimaryKeyDefinition) {
            listener.enterPrimaryKeyDefinition(this);
        }
    };
    // @Override
    PrimaryKeyDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitPrimaryKeyDefinition) {
            listener.exitPrimaryKeyDefinition(this);
        }
    };
    // @Override
    PrimaryKeyDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitPrimaryKeyDefinition) {
            return visitor.visitPrimaryKeyDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrimaryKeyDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrimaryKeyDefinitionContext = PrimaryKeyDefinitionContext;
var SinglePrimaryKeyContext = /** @class */ (function (_super) {
    __extends(SinglePrimaryKeyContext, _super);
    function SinglePrimaryKeyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SinglePrimaryKeyContext.prototype.column = function () {
        return this.getRuleContext(0, ColumnContext);
    };
    Object.defineProperty(SinglePrimaryKeyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_singlePrimaryKey; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SinglePrimaryKeyContext.prototype.enterRule = function (listener) {
        if (listener.enterSinglePrimaryKey) {
            listener.enterSinglePrimaryKey(this);
        }
    };
    // @Override
    SinglePrimaryKeyContext.prototype.exitRule = function (listener) {
        if (listener.exitSinglePrimaryKey) {
            listener.exitSinglePrimaryKey(this);
        }
    };
    // @Override
    SinglePrimaryKeyContext.prototype.accept = function (visitor) {
        if (visitor.visitSinglePrimaryKey) {
            return visitor.visitSinglePrimaryKey(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SinglePrimaryKeyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SinglePrimaryKeyContext = SinglePrimaryKeyContext;
var CompoundKeyContext = /** @class */ (function (_super) {
    __extends(CompoundKeyContext, _super);
    function CompoundKeyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CompoundKeyContext.prototype.partitionKey = function () {
        return this.getRuleContext(0, PartitionKeyContext);
    };
    CompoundKeyContext.prototype.syntaxComma = function () {
        return this.tryGetRuleContext(0, SyntaxCommaContext);
    };
    CompoundKeyContext.prototype.clusteringKeyList = function () {
        return this.tryGetRuleContext(0, ClusteringKeyListContext);
    };
    Object.defineProperty(CompoundKeyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_compoundKey; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CompoundKeyContext.prototype.enterRule = function (listener) {
        if (listener.enterCompoundKey) {
            listener.enterCompoundKey(this);
        }
    };
    // @Override
    CompoundKeyContext.prototype.exitRule = function (listener) {
        if (listener.exitCompoundKey) {
            listener.exitCompoundKey(this);
        }
    };
    // @Override
    CompoundKeyContext.prototype.accept = function (visitor) {
        if (visitor.visitCompoundKey) {
            return visitor.visitCompoundKey(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CompoundKeyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CompoundKeyContext = CompoundKeyContext;
var CompositeKeyContext = /** @class */ (function (_super) {
    __extends(CompositeKeyContext, _super);
    function CompositeKeyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CompositeKeyContext.prototype.syntaxBracketLr = function () {
        return this.getRuleContext(0, SyntaxBracketLrContext);
    };
    CompositeKeyContext.prototype.partitionKeyList = function () {
        return this.getRuleContext(0, PartitionKeyListContext);
    };
    CompositeKeyContext.prototype.syntaxBracketRr = function () {
        return this.getRuleContext(0, SyntaxBracketRrContext);
    };
    CompositeKeyContext.prototype.syntaxComma = function () {
        return this.tryGetRuleContext(0, SyntaxCommaContext);
    };
    CompositeKeyContext.prototype.clusteringKeyList = function () {
        return this.tryGetRuleContext(0, ClusteringKeyListContext);
    };
    Object.defineProperty(CompositeKeyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_compositeKey; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CompositeKeyContext.prototype.enterRule = function (listener) {
        if (listener.enterCompositeKey) {
            listener.enterCompositeKey(this);
        }
    };
    // @Override
    CompositeKeyContext.prototype.exitRule = function (listener) {
        if (listener.exitCompositeKey) {
            listener.exitCompositeKey(this);
        }
    };
    // @Override
    CompositeKeyContext.prototype.accept = function (visitor) {
        if (visitor.visitCompositeKey) {
            return visitor.visitCompositeKey(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CompositeKeyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CompositeKeyContext = CompositeKeyContext;
var PartitionKeyListContext = /** @class */ (function (_super) {
    __extends(PartitionKeyListContext, _super);
    function PartitionKeyListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PartitionKeyListContext.prototype.partitionKey = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PartitionKeyContext);
        }
        else {
            return this.getRuleContext(i, PartitionKeyContext);
        }
    };
    PartitionKeyListContext.prototype.syntaxComma = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SyntaxCommaContext);
        }
        else {
            return this.getRuleContext(i, SyntaxCommaContext);
        }
    };
    Object.defineProperty(PartitionKeyListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_partitionKeyList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PartitionKeyListContext.prototype.enterRule = function (listener) {
        if (listener.enterPartitionKeyList) {
            listener.enterPartitionKeyList(this);
        }
    };
    // @Override
    PartitionKeyListContext.prototype.exitRule = function (listener) {
        if (listener.exitPartitionKeyList) {
            listener.exitPartitionKeyList(this);
        }
    };
    // @Override
    PartitionKeyListContext.prototype.accept = function (visitor) {
        if (visitor.visitPartitionKeyList) {
            return visitor.visitPartitionKeyList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PartitionKeyListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PartitionKeyListContext = PartitionKeyListContext;
var ClusteringKeyListContext = /** @class */ (function (_super) {
    __extends(ClusteringKeyListContext, _super);
    function ClusteringKeyListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClusteringKeyListContext.prototype.clusteringKey = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ClusteringKeyContext);
        }
        else {
            return this.getRuleContext(i, ClusteringKeyContext);
        }
    };
    ClusteringKeyListContext.prototype.syntaxComma = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SyntaxCommaContext);
        }
        else {
            return this.getRuleContext(i, SyntaxCommaContext);
        }
    };
    Object.defineProperty(ClusteringKeyListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_clusteringKeyList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClusteringKeyListContext.prototype.enterRule = function (listener) {
        if (listener.enterClusteringKeyList) {
            listener.enterClusteringKeyList(this);
        }
    };
    // @Override
    ClusteringKeyListContext.prototype.exitRule = function (listener) {
        if (listener.exitClusteringKeyList) {
            listener.exitClusteringKeyList(this);
        }
    };
    // @Override
    ClusteringKeyListContext.prototype.accept = function (visitor) {
        if (visitor.visitClusteringKeyList) {
            return visitor.visitClusteringKeyList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClusteringKeyListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClusteringKeyListContext = ClusteringKeyListContext;
var PartitionKeyContext = /** @class */ (function (_super) {
    __extends(PartitionKeyContext, _super);
    function PartitionKeyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PartitionKeyContext.prototype.column = function () {
        return this.getRuleContext(0, ColumnContext);
    };
    Object.defineProperty(PartitionKeyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_partitionKey; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PartitionKeyContext.prototype.enterRule = function (listener) {
        if (listener.enterPartitionKey) {
            listener.enterPartitionKey(this);
        }
    };
    // @Override
    PartitionKeyContext.prototype.exitRule = function (listener) {
        if (listener.exitPartitionKey) {
            listener.exitPartitionKey(this);
        }
    };
    // @Override
    PartitionKeyContext.prototype.accept = function (visitor) {
        if (visitor.visitPartitionKey) {
            return visitor.visitPartitionKey(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PartitionKeyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PartitionKeyContext = PartitionKeyContext;
var ClusteringKeyContext = /** @class */ (function (_super) {
    __extends(ClusteringKeyContext, _super);
    function ClusteringKeyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClusteringKeyContext.prototype.column = function () {
        return this.getRuleContext(0, ColumnContext);
    };
    Object.defineProperty(ClusteringKeyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_clusteringKey; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClusteringKeyContext.prototype.enterRule = function (listener) {
        if (listener.enterClusteringKey) {
            listener.enterClusteringKey(this);
        }
    };
    // @Override
    ClusteringKeyContext.prototype.exitRule = function (listener) {
        if (listener.exitClusteringKey) {
            listener.exitClusteringKey(this);
        }
    };
    // @Override
    ClusteringKeyContext.prototype.accept = function (visitor) {
        if (visitor.visitClusteringKey) {
            return visitor.visitClusteringKey(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClusteringKeyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClusteringKeyContext = ClusteringKeyContext;
var ApplyBatchContext = /** @class */ (function (_super) {
    __extends(ApplyBatchContext, _super);
    function ApplyBatchContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ApplyBatchContext.prototype.kwApply = function () {
        return this.getRuleContext(0, KwApplyContext);
    };
    ApplyBatchContext.prototype.kwBatch = function () {
        return this.getRuleContext(0, KwBatchContext);
    };
    Object.defineProperty(ApplyBatchContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_applyBatch; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ApplyBatchContext.prototype.enterRule = function (listener) {
        if (listener.enterApplyBatch) {
            listener.enterApplyBatch(this);
        }
    };
    // @Override
    ApplyBatchContext.prototype.exitRule = function (listener) {
        if (listener.exitApplyBatch) {
            listener.exitApplyBatch(this);
        }
    };
    // @Override
    ApplyBatchContext.prototype.accept = function (visitor) {
        if (visitor.visitApplyBatch) {
            return visitor.visitApplyBatch(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ApplyBatchContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ApplyBatchContext = ApplyBatchContext;
var BeginBatchContext = /** @class */ (function (_super) {
    __extends(BeginBatchContext, _super);
    function BeginBatchContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BeginBatchContext.prototype.kwBegin = function () {
        return this.getRuleContext(0, KwBeginContext);
    };
    BeginBatchContext.prototype.kwBatch = function () {
        return this.getRuleContext(0, KwBatchContext);
    };
    BeginBatchContext.prototype.batchType = function () {
        return this.tryGetRuleContext(0, BatchTypeContext);
    };
    BeginBatchContext.prototype.usingTimestampSpec = function () {
        return this.tryGetRuleContext(0, UsingTimestampSpecContext);
    };
    Object.defineProperty(BeginBatchContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_beginBatch; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BeginBatchContext.prototype.enterRule = function (listener) {
        if (listener.enterBeginBatch) {
            listener.enterBeginBatch(this);
        }
    };
    // @Override
    BeginBatchContext.prototype.exitRule = function (listener) {
        if (listener.exitBeginBatch) {
            listener.exitBeginBatch(this);
        }
    };
    // @Override
    BeginBatchContext.prototype.accept = function (visitor) {
        if (visitor.visitBeginBatch) {
            return visitor.visitBeginBatch(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BeginBatchContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BeginBatchContext = BeginBatchContext;
var BatchTypeContext = /** @class */ (function (_super) {
    __extends(BatchTypeContext, _super);
    function BatchTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BatchTypeContext.prototype.kwLogged = function () {
        return this.tryGetRuleContext(0, KwLoggedContext);
    };
    BatchTypeContext.prototype.kwUnlogged = function () {
        return this.tryGetRuleContext(0, KwUnloggedContext);
    };
    Object.defineProperty(BatchTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_batchType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BatchTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterBatchType) {
            listener.enterBatchType(this);
        }
    };
    // @Override
    BatchTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitBatchType) {
            listener.exitBatchType(this);
        }
    };
    // @Override
    BatchTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitBatchType) {
            return visitor.visitBatchType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BatchTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BatchTypeContext = BatchTypeContext;
var AlterKeyspaceContext = /** @class */ (function (_super) {
    __extends(AlterKeyspaceContext, _super);
    function AlterKeyspaceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlterKeyspaceContext.prototype.kwAlter = function () {
        return this.getRuleContext(0, KwAlterContext);
    };
    AlterKeyspaceContext.prototype.kwKeyspace = function () {
        return this.getRuleContext(0, KwKeyspaceContext);
    };
    AlterKeyspaceContext.prototype.keyspace = function () {
        return this.getRuleContext(0, KeyspaceContext);
    };
    AlterKeyspaceContext.prototype.kwWith = function () {
        return this.getRuleContext(0, KwWithContext);
    };
    AlterKeyspaceContext.prototype.kwReplication = function () {
        return this.getRuleContext(0, KwReplicationContext);
    };
    AlterKeyspaceContext.prototype.OPERATOR_EQ = function () { return this.getToken(CqlParser.OPERATOR_EQ, 0); };
    AlterKeyspaceContext.prototype.syntaxBracketLc = function () {
        return this.getRuleContext(0, SyntaxBracketLcContext);
    };
    AlterKeyspaceContext.prototype.replicationList = function () {
        return this.getRuleContext(0, ReplicationListContext);
    };
    AlterKeyspaceContext.prototype.syntaxBracketRc = function () {
        return this.getRuleContext(0, SyntaxBracketRcContext);
    };
    AlterKeyspaceContext.prototype.kwAnd = function () {
        return this.tryGetRuleContext(0, KwAndContext);
    };
    AlterKeyspaceContext.prototype.durableWrites = function () {
        return this.tryGetRuleContext(0, DurableWritesContext);
    };
    Object.defineProperty(AlterKeyspaceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_alterKeyspace; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlterKeyspaceContext.prototype.enterRule = function (listener) {
        if (listener.enterAlterKeyspace) {
            listener.enterAlterKeyspace(this);
        }
    };
    // @Override
    AlterKeyspaceContext.prototype.exitRule = function (listener) {
        if (listener.exitAlterKeyspace) {
            listener.exitAlterKeyspace(this);
        }
    };
    // @Override
    AlterKeyspaceContext.prototype.accept = function (visitor) {
        if (visitor.visitAlterKeyspace) {
            return visitor.visitAlterKeyspace(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlterKeyspaceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlterKeyspaceContext = AlterKeyspaceContext;
var ReplicationListContext = /** @class */ (function (_super) {
    __extends(ReplicationListContext, _super);
    function ReplicationListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReplicationListContext.prototype.replicationListItem = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ReplicationListItemContext);
        }
        else {
            return this.getRuleContext(i, ReplicationListItemContext);
        }
    };
    ReplicationListContext.prototype.syntaxComma = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SyntaxCommaContext);
        }
        else {
            return this.getRuleContext(i, SyntaxCommaContext);
        }
    };
    Object.defineProperty(ReplicationListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_replicationList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReplicationListContext.prototype.enterRule = function (listener) {
        if (listener.enterReplicationList) {
            listener.enterReplicationList(this);
        }
    };
    // @Override
    ReplicationListContext.prototype.exitRule = function (listener) {
        if (listener.exitReplicationList) {
            listener.exitReplicationList(this);
        }
    };
    // @Override
    ReplicationListContext.prototype.accept = function (visitor) {
        if (visitor.visitReplicationList) {
            return visitor.visitReplicationList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReplicationListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReplicationListContext = ReplicationListContext;
var ReplicationListItemContext = /** @class */ (function (_super) {
    __extends(ReplicationListItemContext, _super);
    function ReplicationListItemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReplicationListItemContext.prototype.STRING_LITERAL = function (i) {
        if (i === undefined) {
            return this.getTokens(CqlParser.STRING_LITERAL);
        }
        else {
            return this.getToken(CqlParser.STRING_LITERAL, i);
        }
    };
    ReplicationListItemContext.prototype.COLON = function () { return this.getToken(CqlParser.COLON, 0); };
    ReplicationListItemContext.prototype.DECIMAL_LITERAL = function () { return this.tryGetToken(CqlParser.DECIMAL_LITERAL, 0); };
    Object.defineProperty(ReplicationListItemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_replicationListItem; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReplicationListItemContext.prototype.enterRule = function (listener) {
        if (listener.enterReplicationListItem) {
            listener.enterReplicationListItem(this);
        }
    };
    // @Override
    ReplicationListItemContext.prototype.exitRule = function (listener) {
        if (listener.exitReplicationListItem) {
            listener.exitReplicationListItem(this);
        }
    };
    // @Override
    ReplicationListItemContext.prototype.accept = function (visitor) {
        if (visitor.visitReplicationListItem) {
            return visitor.visitReplicationListItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReplicationListItemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReplicationListItemContext = ReplicationListItemContext;
var DurableWritesContext = /** @class */ (function (_super) {
    __extends(DurableWritesContext, _super);
    function DurableWritesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DurableWritesContext.prototype.kwDurableWrites = function () {
        return this.getRuleContext(0, KwDurableWritesContext);
    };
    DurableWritesContext.prototype.OPERATOR_EQ = function () { return this.getToken(CqlParser.OPERATOR_EQ, 0); };
    DurableWritesContext.prototype.booleanLiteral = function () {
        return this.getRuleContext(0, BooleanLiteralContext);
    };
    Object.defineProperty(DurableWritesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_durableWrites; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DurableWritesContext.prototype.enterRule = function (listener) {
        if (listener.enterDurableWrites) {
            listener.enterDurableWrites(this);
        }
    };
    // @Override
    DurableWritesContext.prototype.exitRule = function (listener) {
        if (listener.exitDurableWrites) {
            listener.exitDurableWrites(this);
        }
    };
    // @Override
    DurableWritesContext.prototype.accept = function (visitor) {
        if (visitor.visitDurableWrites) {
            return visitor.visitDurableWrites(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DurableWritesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DurableWritesContext = DurableWritesContext;
var UseContext = /** @class */ (function (_super) {
    __extends(UseContext, _super);
    function UseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UseContext.prototype.kwUse = function () {
        return this.getRuleContext(0, KwUseContext);
    };
    UseContext.prototype.keyspace = function () {
        return this.getRuleContext(0, KeyspaceContext);
    };
    Object.defineProperty(UseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_use; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UseContext.prototype.enterRule = function (listener) {
        if (listener.enterUse) {
            listener.enterUse(this);
        }
    };
    // @Override
    UseContext.prototype.exitRule = function (listener) {
        if (listener.exitUse) {
            listener.exitUse(this);
        }
    };
    // @Override
    UseContext.prototype.accept = function (visitor) {
        if (visitor.visitUse) {
            return visitor.visitUse(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UseContext = UseContext;
var TruncateContext = /** @class */ (function (_super) {
    __extends(TruncateContext, _super);
    function TruncateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TruncateContext.prototype.kwTruncate = function () {
        return this.getRuleContext(0, KwTruncateContext);
    };
    TruncateContext.prototype.table = function () {
        return this.getRuleContext(0, TableContext);
    };
    TruncateContext.prototype.kwTable = function () {
        return this.tryGetRuleContext(0, KwTableContext);
    };
    TruncateContext.prototype.keyspace = function () {
        return this.tryGetRuleContext(0, KeyspaceContext);
    };
    TruncateContext.prototype.DOT = function () { return this.tryGetToken(CqlParser.DOT, 0); };
    Object.defineProperty(TruncateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_truncate; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TruncateContext.prototype.enterRule = function (listener) {
        if (listener.enterTruncate) {
            listener.enterTruncate(this);
        }
    };
    // @Override
    TruncateContext.prototype.exitRule = function (listener) {
        if (listener.exitTruncate) {
            listener.exitTruncate(this);
        }
    };
    // @Override
    TruncateContext.prototype.accept = function (visitor) {
        if (visitor.visitTruncate) {
            return visitor.visitTruncate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TruncateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TruncateContext = TruncateContext;
var CreateIndexContext = /** @class */ (function (_super) {
    __extends(CreateIndexContext, _super);
    function CreateIndexContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CreateIndexContext.prototype.kwCreate = function () {
        return this.getRuleContext(0, KwCreateContext);
    };
    CreateIndexContext.prototype.kwIndex = function () {
        return this.getRuleContext(0, KwIndexContext);
    };
    CreateIndexContext.prototype.kwOn = function () {
        return this.getRuleContext(0, KwOnContext);
    };
    CreateIndexContext.prototype.table = function () {
        return this.getRuleContext(0, TableContext);
    };
    CreateIndexContext.prototype.syntaxBracketLr = function () {
        return this.getRuleContext(0, SyntaxBracketLrContext);
    };
    CreateIndexContext.prototype.indexColumnSpec = function () {
        return this.getRuleContext(0, IndexColumnSpecContext);
    };
    CreateIndexContext.prototype.syntaxBracketRr = function () {
        return this.getRuleContext(0, SyntaxBracketRrContext);
    };
    CreateIndexContext.prototype.ifNotExist = function () {
        return this.tryGetRuleContext(0, IfNotExistContext);
    };
    CreateIndexContext.prototype.indexName = function () {
        return this.tryGetRuleContext(0, IndexNameContext);
    };
    CreateIndexContext.prototype.keyspace = function () {
        return this.tryGetRuleContext(0, KeyspaceContext);
    };
    CreateIndexContext.prototype.DOT = function () { return this.tryGetToken(CqlParser.DOT, 0); };
    Object.defineProperty(CreateIndexContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_createIndex; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CreateIndexContext.prototype.enterRule = function (listener) {
        if (listener.enterCreateIndex) {
            listener.enterCreateIndex(this);
        }
    };
    // @Override
    CreateIndexContext.prototype.exitRule = function (listener) {
        if (listener.exitCreateIndex) {
            listener.exitCreateIndex(this);
        }
    };
    // @Override
    CreateIndexContext.prototype.accept = function (visitor) {
        if (visitor.visitCreateIndex) {
            return visitor.visitCreateIndex(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CreateIndexContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CreateIndexContext = CreateIndexContext;
var IndexNameContext = /** @class */ (function (_super) {
    __extends(IndexNameContext, _super);
    function IndexNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IndexNameContext.prototype.OBJECT_NAME = function () { return this.tryGetToken(CqlParser.OBJECT_NAME, 0); };
    IndexNameContext.prototype.stringLiteral = function () {
        return this.tryGetRuleContext(0, StringLiteralContext);
    };
    Object.defineProperty(IndexNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_indexName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IndexNameContext.prototype.enterRule = function (listener) {
        if (listener.enterIndexName) {
            listener.enterIndexName(this);
        }
    };
    // @Override
    IndexNameContext.prototype.exitRule = function (listener) {
        if (listener.exitIndexName) {
            listener.exitIndexName(this);
        }
    };
    // @Override
    IndexNameContext.prototype.accept = function (visitor) {
        if (visitor.visitIndexName) {
            return visitor.visitIndexName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IndexNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IndexNameContext = IndexNameContext;
var IndexColumnSpecContext = /** @class */ (function (_super) {
    __extends(IndexColumnSpecContext, _super);
    function IndexColumnSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IndexColumnSpecContext.prototype.column = function () {
        return this.tryGetRuleContext(0, ColumnContext);
    };
    IndexColumnSpecContext.prototype.indexKeysSpec = function () {
        return this.tryGetRuleContext(0, IndexKeysSpecContext);
    };
    IndexColumnSpecContext.prototype.indexEntriesSSpec = function () {
        return this.tryGetRuleContext(0, IndexEntriesSSpecContext);
    };
    IndexColumnSpecContext.prototype.indexFullSpec = function () {
        return this.tryGetRuleContext(0, IndexFullSpecContext);
    };
    Object.defineProperty(IndexColumnSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_indexColumnSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IndexColumnSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterIndexColumnSpec) {
            listener.enterIndexColumnSpec(this);
        }
    };
    // @Override
    IndexColumnSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitIndexColumnSpec) {
            listener.exitIndexColumnSpec(this);
        }
    };
    // @Override
    IndexColumnSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitIndexColumnSpec) {
            return visitor.visitIndexColumnSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IndexColumnSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IndexColumnSpecContext = IndexColumnSpecContext;
var IndexKeysSpecContext = /** @class */ (function (_super) {
    __extends(IndexKeysSpecContext, _super);
    function IndexKeysSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IndexKeysSpecContext.prototype.kwKeys = function () {
        return this.getRuleContext(0, KwKeysContext);
    };
    IndexKeysSpecContext.prototype.syntaxBracketLr = function () {
        return this.getRuleContext(0, SyntaxBracketLrContext);
    };
    IndexKeysSpecContext.prototype.OBJECT_NAME = function () { return this.getToken(CqlParser.OBJECT_NAME, 0); };
    IndexKeysSpecContext.prototype.syntaxBracketRr = function () {
        return this.getRuleContext(0, SyntaxBracketRrContext);
    };
    Object.defineProperty(IndexKeysSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_indexKeysSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IndexKeysSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterIndexKeysSpec) {
            listener.enterIndexKeysSpec(this);
        }
    };
    // @Override
    IndexKeysSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitIndexKeysSpec) {
            listener.exitIndexKeysSpec(this);
        }
    };
    // @Override
    IndexKeysSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitIndexKeysSpec) {
            return visitor.visitIndexKeysSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IndexKeysSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IndexKeysSpecContext = IndexKeysSpecContext;
var IndexEntriesSSpecContext = /** @class */ (function (_super) {
    __extends(IndexEntriesSSpecContext, _super);
    function IndexEntriesSSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IndexEntriesSSpecContext.prototype.kwEntries = function () {
        return this.getRuleContext(0, KwEntriesContext);
    };
    IndexEntriesSSpecContext.prototype.syntaxBracketLr = function () {
        return this.getRuleContext(0, SyntaxBracketLrContext);
    };
    IndexEntriesSSpecContext.prototype.OBJECT_NAME = function () { return this.getToken(CqlParser.OBJECT_NAME, 0); };
    IndexEntriesSSpecContext.prototype.syntaxBracketRr = function () {
        return this.getRuleContext(0, SyntaxBracketRrContext);
    };
    Object.defineProperty(IndexEntriesSSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_indexEntriesSSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IndexEntriesSSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterIndexEntriesSSpec) {
            listener.enterIndexEntriesSSpec(this);
        }
    };
    // @Override
    IndexEntriesSSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitIndexEntriesSSpec) {
            listener.exitIndexEntriesSSpec(this);
        }
    };
    // @Override
    IndexEntriesSSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitIndexEntriesSSpec) {
            return visitor.visitIndexEntriesSSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IndexEntriesSSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IndexEntriesSSpecContext = IndexEntriesSSpecContext;
var IndexFullSpecContext = /** @class */ (function (_super) {
    __extends(IndexFullSpecContext, _super);
    function IndexFullSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IndexFullSpecContext.prototype.kwFull = function () {
        return this.getRuleContext(0, KwFullContext);
    };
    IndexFullSpecContext.prototype.syntaxBracketLr = function () {
        return this.getRuleContext(0, SyntaxBracketLrContext);
    };
    IndexFullSpecContext.prototype.OBJECT_NAME = function () { return this.getToken(CqlParser.OBJECT_NAME, 0); };
    IndexFullSpecContext.prototype.syntaxBracketRr = function () {
        return this.getRuleContext(0, SyntaxBracketRrContext);
    };
    Object.defineProperty(IndexFullSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_indexFullSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IndexFullSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterIndexFullSpec) {
            listener.enterIndexFullSpec(this);
        }
    };
    // @Override
    IndexFullSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitIndexFullSpec) {
            listener.exitIndexFullSpec(this);
        }
    };
    // @Override
    IndexFullSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitIndexFullSpec) {
            return visitor.visitIndexFullSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IndexFullSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IndexFullSpecContext = IndexFullSpecContext;
var DeleteContext = /** @class */ (function (_super) {
    __extends(DeleteContext, _super);
    function DeleteContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeleteContext.prototype.kwDelete = function () {
        return this.getRuleContext(0, KwDeleteContext);
    };
    DeleteContext.prototype.fromSpec = function () {
        return this.getRuleContext(0, FromSpecContext);
    };
    DeleteContext.prototype.whereSpec = function () {
        return this.getRuleContext(0, WhereSpecContext);
    };
    DeleteContext.prototype.beginBatch = function () {
        return this.tryGetRuleContext(0, BeginBatchContext);
    };
    DeleteContext.prototype.deleteColumnList = function () {
        return this.tryGetRuleContext(0, DeleteColumnListContext);
    };
    DeleteContext.prototype.usingTimestampSpec = function () {
        return this.tryGetRuleContext(0, UsingTimestampSpecContext);
    };
    DeleteContext.prototype.ifExist = function () {
        return this.tryGetRuleContext(0, IfExistContext);
    };
    DeleteContext.prototype.ifSpec = function () {
        return this.tryGetRuleContext(0, IfSpecContext);
    };
    Object.defineProperty(DeleteContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_delete; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DeleteContext.prototype.enterRule = function (listener) {
        if (listener.enterDelete) {
            listener.enterDelete(this);
        }
    };
    // @Override
    DeleteContext.prototype.exitRule = function (listener) {
        if (listener.exitDelete) {
            listener.exitDelete(this);
        }
    };
    // @Override
    DeleteContext.prototype.accept = function (visitor) {
        if (visitor.visitDelete) {
            return visitor.visitDelete(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeleteContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeleteContext = DeleteContext;
var DeleteColumnListContext = /** @class */ (function (_super) {
    __extends(DeleteColumnListContext, _super);
    function DeleteColumnListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeleteColumnListContext.prototype.deleteColumnItem = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DeleteColumnItemContext);
        }
        else {
            return this.getRuleContext(i, DeleteColumnItemContext);
        }
    };
    DeleteColumnListContext.prototype.syntaxComma = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SyntaxCommaContext);
        }
        else {
            return this.getRuleContext(i, SyntaxCommaContext);
        }
    };
    Object.defineProperty(DeleteColumnListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_deleteColumnList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DeleteColumnListContext.prototype.enterRule = function (listener) {
        if (listener.enterDeleteColumnList) {
            listener.enterDeleteColumnList(this);
        }
    };
    // @Override
    DeleteColumnListContext.prototype.exitRule = function (listener) {
        if (listener.exitDeleteColumnList) {
            listener.exitDeleteColumnList(this);
        }
    };
    // @Override
    DeleteColumnListContext.prototype.accept = function (visitor) {
        if (visitor.visitDeleteColumnList) {
            return visitor.visitDeleteColumnList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeleteColumnListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeleteColumnListContext = DeleteColumnListContext;
var DeleteColumnItemContext = /** @class */ (function (_super) {
    __extends(DeleteColumnItemContext, _super);
    function DeleteColumnItemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeleteColumnItemContext.prototype.OBJECT_NAME = function () { return this.getToken(CqlParser.OBJECT_NAME, 0); };
    DeleteColumnItemContext.prototype.LS_BRACKET = function () { return this.tryGetToken(CqlParser.LS_BRACKET, 0); };
    DeleteColumnItemContext.prototype.RS_BRACKET = function () { return this.tryGetToken(CqlParser.RS_BRACKET, 0); };
    DeleteColumnItemContext.prototype.stringLiteral = function () {
        return this.tryGetRuleContext(0, StringLiteralContext);
    };
    DeleteColumnItemContext.prototype.decimalLiteral = function () {
        return this.tryGetRuleContext(0, DecimalLiteralContext);
    };
    Object.defineProperty(DeleteColumnItemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_deleteColumnItem; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DeleteColumnItemContext.prototype.enterRule = function (listener) {
        if (listener.enterDeleteColumnItem) {
            listener.enterDeleteColumnItem(this);
        }
    };
    // @Override
    DeleteColumnItemContext.prototype.exitRule = function (listener) {
        if (listener.exitDeleteColumnItem) {
            listener.exitDeleteColumnItem(this);
        }
    };
    // @Override
    DeleteColumnItemContext.prototype.accept = function (visitor) {
        if (visitor.visitDeleteColumnItem) {
            return visitor.visitDeleteColumnItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeleteColumnItemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeleteColumnItemContext = DeleteColumnItemContext;
var UpdateContext = /** @class */ (function (_super) {
    __extends(UpdateContext, _super);
    function UpdateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UpdateContext.prototype.kwUpdate = function () {
        return this.getRuleContext(0, KwUpdateContext);
    };
    UpdateContext.prototype.table = function () {
        return this.getRuleContext(0, TableContext);
    };
    UpdateContext.prototype.kwSet = function () {
        return this.getRuleContext(0, KwSetContext);
    };
    UpdateContext.prototype.assignments = function () {
        return this.getRuleContext(0, AssignmentsContext);
    };
    UpdateContext.prototype.whereSpec = function () {
        return this.getRuleContext(0, WhereSpecContext);
    };
    UpdateContext.prototype.beginBatch = function () {
        return this.tryGetRuleContext(0, BeginBatchContext);
    };
    UpdateContext.prototype.keyspace = function () {
        return this.tryGetRuleContext(0, KeyspaceContext);
    };
    UpdateContext.prototype.DOT = function () { return this.tryGetToken(CqlParser.DOT, 0); };
    UpdateContext.prototype.usingTtlTimestamp = function () {
        return this.tryGetRuleContext(0, UsingTtlTimestampContext);
    };
    UpdateContext.prototype.ifExist = function () {
        return this.tryGetRuleContext(0, IfExistContext);
    };
    UpdateContext.prototype.ifSpec = function () {
        return this.tryGetRuleContext(0, IfSpecContext);
    };
    Object.defineProperty(UpdateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_update; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UpdateContext.prototype.enterRule = function (listener) {
        if (listener.enterUpdate) {
            listener.enterUpdate(this);
        }
    };
    // @Override
    UpdateContext.prototype.exitRule = function (listener) {
        if (listener.exitUpdate) {
            listener.exitUpdate(this);
        }
    };
    // @Override
    UpdateContext.prototype.accept = function (visitor) {
        if (visitor.visitUpdate) {
            return visitor.visitUpdate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UpdateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UpdateContext = UpdateContext;
var IfSpecContext = /** @class */ (function (_super) {
    __extends(IfSpecContext, _super);
    function IfSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfSpecContext.prototype.kwIf = function () {
        return this.getRuleContext(0, KwIfContext);
    };
    IfSpecContext.prototype.ifConditionList = function () {
        return this.getRuleContext(0, IfConditionListContext);
    };
    Object.defineProperty(IfSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_ifSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IfSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterIfSpec) {
            listener.enterIfSpec(this);
        }
    };
    // @Override
    IfSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitIfSpec) {
            listener.exitIfSpec(this);
        }
    };
    // @Override
    IfSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitIfSpec) {
            return visitor.visitIfSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IfSpecContext = IfSpecContext;
var IfConditionListContext = /** @class */ (function (_super) {
    __extends(IfConditionListContext, _super);
    function IfConditionListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfConditionListContext.prototype.ifCondition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IfConditionContext);
        }
        else {
            return this.getRuleContext(i, IfConditionContext);
        }
    };
    IfConditionListContext.prototype.kwAnd = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(KwAndContext);
        }
        else {
            return this.getRuleContext(i, KwAndContext);
        }
    };
    Object.defineProperty(IfConditionListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_ifConditionList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IfConditionListContext.prototype.enterRule = function (listener) {
        if (listener.enterIfConditionList) {
            listener.enterIfConditionList(this);
        }
    };
    // @Override
    IfConditionListContext.prototype.exitRule = function (listener) {
        if (listener.exitIfConditionList) {
            listener.exitIfConditionList(this);
        }
    };
    // @Override
    IfConditionListContext.prototype.accept = function (visitor) {
        if (visitor.visitIfConditionList) {
            return visitor.visitIfConditionList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfConditionListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IfConditionListContext = IfConditionListContext;
var IfConditionContext = /** @class */ (function (_super) {
    __extends(IfConditionContext, _super);
    function IfConditionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfConditionContext.prototype.OBJECT_NAME = function () { return this.getToken(CqlParser.OBJECT_NAME, 0); };
    IfConditionContext.prototype.OPERATOR_EQ = function () { return this.getToken(CqlParser.OPERATOR_EQ, 0); };
    IfConditionContext.prototype.constant = function () {
        return this.getRuleContext(0, ConstantContext);
    };
    Object.defineProperty(IfConditionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_ifCondition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IfConditionContext.prototype.enterRule = function (listener) {
        if (listener.enterIfCondition) {
            listener.enterIfCondition(this);
        }
    };
    // @Override
    IfConditionContext.prototype.exitRule = function (listener) {
        if (listener.exitIfCondition) {
            listener.exitIfCondition(this);
        }
    };
    // @Override
    IfConditionContext.prototype.accept = function (visitor) {
        if (visitor.visitIfCondition) {
            return visitor.visitIfCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfConditionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IfConditionContext = IfConditionContext;
var AssignmentsContext = /** @class */ (function (_super) {
    __extends(AssignmentsContext, _super);
    function AssignmentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentsContext.prototype.assignmentElement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AssignmentElementContext);
        }
        else {
            return this.getRuleContext(i, AssignmentElementContext);
        }
    };
    AssignmentsContext.prototype.syntaxComma = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SyntaxCommaContext);
        }
        else {
            return this.getRuleContext(i, SyntaxCommaContext);
        }
    };
    Object.defineProperty(AssignmentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_assignments; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignmentsContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignments) {
            listener.enterAssignments(this);
        }
    };
    // @Override
    AssignmentsContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignments) {
            listener.exitAssignments(this);
        }
    };
    // @Override
    AssignmentsContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignments) {
            return visitor.visitAssignments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignmentsContext = AssignmentsContext;
var AssignmentElementContext = /** @class */ (function (_super) {
    __extends(AssignmentElementContext, _super);
    function AssignmentElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentElementContext.prototype.OBJECT_NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(CqlParser.OBJECT_NAME);
        }
        else {
            return this.getToken(CqlParser.OBJECT_NAME, i);
        }
    };
    AssignmentElementContext.prototype.OPERATOR_EQ = function () { return this.getToken(CqlParser.OPERATOR_EQ, 0); };
    AssignmentElementContext.prototype.constant = function () {
        return this.tryGetRuleContext(0, ConstantContext);
    };
    AssignmentElementContext.prototype.assignmentMap = function () {
        return this.tryGetRuleContext(0, AssignmentMapContext);
    };
    AssignmentElementContext.prototype.assignmentSet = function () {
        return this.tryGetRuleContext(0, AssignmentSetContext);
    };
    AssignmentElementContext.prototype.assignmentList = function () {
        return this.tryGetRuleContext(0, AssignmentListContext);
    };
    AssignmentElementContext.prototype.decimalLiteral = function () {
        return this.tryGetRuleContext(0, DecimalLiteralContext);
    };
    AssignmentElementContext.prototype.PLUS = function () { return this.tryGetToken(CqlParser.PLUS, 0); };
    AssignmentElementContext.prototype.MINUS = function () { return this.tryGetToken(CqlParser.MINUS, 0); };
    AssignmentElementContext.prototype.syntaxBracketLs = function () {
        return this.tryGetRuleContext(0, SyntaxBracketLsContext);
    };
    AssignmentElementContext.prototype.syntaxBracketRs = function () {
        return this.tryGetRuleContext(0, SyntaxBracketRsContext);
    };
    Object.defineProperty(AssignmentElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_assignmentElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignmentElementContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignmentElement) {
            listener.enterAssignmentElement(this);
        }
    };
    // @Override
    AssignmentElementContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignmentElement) {
            listener.exitAssignmentElement(this);
        }
    };
    // @Override
    AssignmentElementContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignmentElement) {
            return visitor.visitAssignmentElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignmentElementContext = AssignmentElementContext;
var AssignmentSetContext = /** @class */ (function (_super) {
    __extends(AssignmentSetContext, _super);
    function AssignmentSetContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentSetContext.prototype.syntaxBracketLc = function () {
        return this.getRuleContext(0, SyntaxBracketLcContext);
    };
    AssignmentSetContext.prototype.constant = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstantContext);
        }
        else {
            return this.getRuleContext(i, ConstantContext);
        }
    };
    AssignmentSetContext.prototype.syntaxBracketRc = function () {
        return this.getRuleContext(0, SyntaxBracketRcContext);
    };
    AssignmentSetContext.prototype.syntaxComma = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SyntaxCommaContext);
        }
        else {
            return this.getRuleContext(i, SyntaxCommaContext);
        }
    };
    Object.defineProperty(AssignmentSetContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_assignmentSet; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignmentSetContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignmentSet) {
            listener.enterAssignmentSet(this);
        }
    };
    // @Override
    AssignmentSetContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignmentSet) {
            listener.exitAssignmentSet(this);
        }
    };
    // @Override
    AssignmentSetContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignmentSet) {
            return visitor.visitAssignmentSet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentSetContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignmentSetContext = AssignmentSetContext;
var AssignmentMapContext = /** @class */ (function (_super) {
    __extends(AssignmentMapContext, _super);
    function AssignmentMapContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentMapContext.prototype.syntaxBracketLc = function () {
        return this.getRuleContext(0, SyntaxBracketLcContext);
    };
    AssignmentMapContext.prototype.syntaxBracketRc = function () {
        return this.getRuleContext(0, SyntaxBracketRcContext);
    };
    AssignmentMapContext.prototype.constant = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstantContext);
        }
        else {
            return this.getRuleContext(i, ConstantContext);
        }
    };
    AssignmentMapContext.prototype.syntaxColon = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SyntaxColonContext);
        }
        else {
            return this.getRuleContext(i, SyntaxColonContext);
        }
    };
    Object.defineProperty(AssignmentMapContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_assignmentMap; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignmentMapContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignmentMap) {
            listener.enterAssignmentMap(this);
        }
    };
    // @Override
    AssignmentMapContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignmentMap) {
            listener.exitAssignmentMap(this);
        }
    };
    // @Override
    AssignmentMapContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignmentMap) {
            return visitor.visitAssignmentMap(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentMapContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignmentMapContext = AssignmentMapContext;
var AssignmentListContext = /** @class */ (function (_super) {
    __extends(AssignmentListContext, _super);
    function AssignmentListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentListContext.prototype.syntaxBracketLs = function () {
        return this.getRuleContext(0, SyntaxBracketLsContext);
    };
    AssignmentListContext.prototype.constant = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstantContext);
        }
        else {
            return this.getRuleContext(i, ConstantContext);
        }
    };
    AssignmentListContext.prototype.syntaxBracketRs = function () {
        return this.getRuleContext(0, SyntaxBracketRsContext);
    };
    AssignmentListContext.prototype.syntaxColon = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SyntaxColonContext);
        }
        else {
            return this.getRuleContext(i, SyntaxColonContext);
        }
    };
    Object.defineProperty(AssignmentListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_assignmentList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignmentListContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignmentList) {
            listener.enterAssignmentList(this);
        }
    };
    // @Override
    AssignmentListContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignmentList) {
            listener.exitAssignmentList(this);
        }
    };
    // @Override
    AssignmentListContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignmentList) {
            return visitor.visitAssignmentList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignmentListContext = AssignmentListContext;
var InsertContext = /** @class */ (function (_super) {
    __extends(InsertContext, _super);
    function InsertContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InsertContext.prototype.kwInsert = function () {
        return this.getRuleContext(0, KwInsertContext);
    };
    InsertContext.prototype.kwInto = function () {
        return this.getRuleContext(0, KwIntoContext);
    };
    InsertContext.prototype.table = function () {
        return this.getRuleContext(0, TableContext);
    };
    InsertContext.prototype.insertColumnSpec = function () {
        return this.getRuleContext(0, InsertColumnSpecContext);
    };
    InsertContext.prototype.insertValuesSpec = function () {
        return this.getRuleContext(0, InsertValuesSpecContext);
    };
    InsertContext.prototype.beginBatch = function () {
        return this.tryGetRuleContext(0, BeginBatchContext);
    };
    InsertContext.prototype.keyspace = function () {
        return this.tryGetRuleContext(0, KeyspaceContext);
    };
    InsertContext.prototype.DOT = function () { return this.tryGetToken(CqlParser.DOT, 0); };
    InsertContext.prototype.ifNotExist = function () {
        return this.tryGetRuleContext(0, IfNotExistContext);
    };
    InsertContext.prototype.usingTtlTimestamp = function () {
        return this.tryGetRuleContext(0, UsingTtlTimestampContext);
    };
    Object.defineProperty(InsertContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_insert; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InsertContext.prototype.enterRule = function (listener) {
        if (listener.enterInsert) {
            listener.enterInsert(this);
        }
    };
    // @Override
    InsertContext.prototype.exitRule = function (listener) {
        if (listener.exitInsert) {
            listener.exitInsert(this);
        }
    };
    // @Override
    InsertContext.prototype.accept = function (visitor) {
        if (visitor.visitInsert) {
            return visitor.visitInsert(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InsertContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InsertContext = InsertContext;
var UsingTtlTimestampContext = /** @class */ (function (_super) {
    __extends(UsingTtlTimestampContext, _super);
    function UsingTtlTimestampContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UsingTtlTimestampContext.prototype.kwUsing = function () {
        return this.getRuleContext(0, KwUsingContext);
    };
    UsingTtlTimestampContext.prototype.ttl = function () {
        return this.tryGetRuleContext(0, TtlContext);
    };
    UsingTtlTimestampContext.prototype.kwAnd = function () {
        return this.tryGetRuleContext(0, KwAndContext);
    };
    UsingTtlTimestampContext.prototype.timestamp = function () {
        return this.tryGetRuleContext(0, TimestampContext);
    };
    Object.defineProperty(UsingTtlTimestampContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_usingTtlTimestamp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UsingTtlTimestampContext.prototype.enterRule = function (listener) {
        if (listener.enterUsingTtlTimestamp) {
            listener.enterUsingTtlTimestamp(this);
        }
    };
    // @Override
    UsingTtlTimestampContext.prototype.exitRule = function (listener) {
        if (listener.exitUsingTtlTimestamp) {
            listener.exitUsingTtlTimestamp(this);
        }
    };
    // @Override
    UsingTtlTimestampContext.prototype.accept = function (visitor) {
        if (visitor.visitUsingTtlTimestamp) {
            return visitor.visitUsingTtlTimestamp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UsingTtlTimestampContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UsingTtlTimestampContext = UsingTtlTimestampContext;
var TimestampContext = /** @class */ (function (_super) {
    __extends(TimestampContext, _super);
    function TimestampContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TimestampContext.prototype.kwTimestamp = function () {
        return this.getRuleContext(0, KwTimestampContext);
    };
    TimestampContext.prototype.decimalLiteral = function () {
        return this.getRuleContext(0, DecimalLiteralContext);
    };
    Object.defineProperty(TimestampContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_timestamp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TimestampContext.prototype.enterRule = function (listener) {
        if (listener.enterTimestamp) {
            listener.enterTimestamp(this);
        }
    };
    // @Override
    TimestampContext.prototype.exitRule = function (listener) {
        if (listener.exitTimestamp) {
            listener.exitTimestamp(this);
        }
    };
    // @Override
    TimestampContext.prototype.accept = function (visitor) {
        if (visitor.visitTimestamp) {
            return visitor.visitTimestamp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TimestampContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TimestampContext = TimestampContext;
var TtlContext = /** @class */ (function (_super) {
    __extends(TtlContext, _super);
    function TtlContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TtlContext.prototype.kwTtl = function () {
        return this.getRuleContext(0, KwTtlContext);
    };
    TtlContext.prototype.decimalLiteral = function () {
        return this.getRuleContext(0, DecimalLiteralContext);
    };
    Object.defineProperty(TtlContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_ttl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TtlContext.prototype.enterRule = function (listener) {
        if (listener.enterTtl) {
            listener.enterTtl(this);
        }
    };
    // @Override
    TtlContext.prototype.exitRule = function (listener) {
        if (listener.exitTtl) {
            listener.exitTtl(this);
        }
    };
    // @Override
    TtlContext.prototype.accept = function (visitor) {
        if (visitor.visitTtl) {
            return visitor.visitTtl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TtlContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TtlContext = TtlContext;
var UsingTimestampSpecContext = /** @class */ (function (_super) {
    __extends(UsingTimestampSpecContext, _super);
    function UsingTimestampSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UsingTimestampSpecContext.prototype.kwUsing = function () {
        return this.getRuleContext(0, KwUsingContext);
    };
    UsingTimestampSpecContext.prototype.timestamp = function () {
        return this.getRuleContext(0, TimestampContext);
    };
    Object.defineProperty(UsingTimestampSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_usingTimestampSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UsingTimestampSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterUsingTimestampSpec) {
            listener.enterUsingTimestampSpec(this);
        }
    };
    // @Override
    UsingTimestampSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitUsingTimestampSpec) {
            listener.exitUsingTimestampSpec(this);
        }
    };
    // @Override
    UsingTimestampSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitUsingTimestampSpec) {
            return visitor.visitUsingTimestampSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UsingTimestampSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UsingTimestampSpecContext = UsingTimestampSpecContext;
var IfNotExistContext = /** @class */ (function (_super) {
    __extends(IfNotExistContext, _super);
    function IfNotExistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfNotExistContext.prototype.kwIf = function () {
        return this.getRuleContext(0, KwIfContext);
    };
    IfNotExistContext.prototype.kwNot = function () {
        return this.getRuleContext(0, KwNotContext);
    };
    IfNotExistContext.prototype.kwExists = function () {
        return this.getRuleContext(0, KwExistsContext);
    };
    Object.defineProperty(IfNotExistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_ifNotExist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IfNotExistContext.prototype.enterRule = function (listener) {
        if (listener.enterIfNotExist) {
            listener.enterIfNotExist(this);
        }
    };
    // @Override
    IfNotExistContext.prototype.exitRule = function (listener) {
        if (listener.exitIfNotExist) {
            listener.exitIfNotExist(this);
        }
    };
    // @Override
    IfNotExistContext.prototype.accept = function (visitor) {
        if (visitor.visitIfNotExist) {
            return visitor.visitIfNotExist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfNotExistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IfNotExistContext = IfNotExistContext;
var IfExistContext = /** @class */ (function (_super) {
    __extends(IfExistContext, _super);
    function IfExistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfExistContext.prototype.kwIf = function () {
        return this.getRuleContext(0, KwIfContext);
    };
    IfExistContext.prototype.kwExists = function () {
        return this.getRuleContext(0, KwExistsContext);
    };
    Object.defineProperty(IfExistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_ifExist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IfExistContext.prototype.enterRule = function (listener) {
        if (listener.enterIfExist) {
            listener.enterIfExist(this);
        }
    };
    // @Override
    IfExistContext.prototype.exitRule = function (listener) {
        if (listener.exitIfExist) {
            listener.exitIfExist(this);
        }
    };
    // @Override
    IfExistContext.prototype.accept = function (visitor) {
        if (visitor.visitIfExist) {
            return visitor.visitIfExist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfExistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IfExistContext = IfExistContext;
var InsertValuesSpecContext = /** @class */ (function (_super) {
    __extends(InsertValuesSpecContext, _super);
    function InsertValuesSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InsertValuesSpecContext.prototype.kwValues = function () {
        return this.getRuleContext(0, KwValuesContext);
    };
    InsertValuesSpecContext.prototype.LR_BRACKET = function () { return this.getToken(CqlParser.LR_BRACKET, 0); };
    InsertValuesSpecContext.prototype.expressionList = function () {
        return this.getRuleContext(0, ExpressionListContext);
    };
    InsertValuesSpecContext.prototype.RR_BRACKET = function () { return this.getToken(CqlParser.RR_BRACKET, 0); };
    Object.defineProperty(InsertValuesSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_insertValuesSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InsertValuesSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterInsertValuesSpec) {
            listener.enterInsertValuesSpec(this);
        }
    };
    // @Override
    InsertValuesSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitInsertValuesSpec) {
            listener.exitInsertValuesSpec(this);
        }
    };
    // @Override
    InsertValuesSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitInsertValuesSpec) {
            return visitor.visitInsertValuesSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InsertValuesSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InsertValuesSpecContext = InsertValuesSpecContext;
var InsertColumnSpecContext = /** @class */ (function (_super) {
    __extends(InsertColumnSpecContext, _super);
    function InsertColumnSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InsertColumnSpecContext.prototype.LR_BRACKET = function () { return this.getToken(CqlParser.LR_BRACKET, 0); };
    InsertColumnSpecContext.prototype.columnList = function () {
        return this.getRuleContext(0, ColumnListContext);
    };
    InsertColumnSpecContext.prototype.RR_BRACKET = function () { return this.getToken(CqlParser.RR_BRACKET, 0); };
    Object.defineProperty(InsertColumnSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_insertColumnSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InsertColumnSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterInsertColumnSpec) {
            listener.enterInsertColumnSpec(this);
        }
    };
    // @Override
    InsertColumnSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitInsertColumnSpec) {
            listener.exitInsertColumnSpec(this);
        }
    };
    // @Override
    InsertColumnSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitInsertColumnSpec) {
            return visitor.visitInsertColumnSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InsertColumnSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InsertColumnSpecContext = InsertColumnSpecContext;
var ColumnListContext = /** @class */ (function (_super) {
    __extends(ColumnListContext, _super);
    function ColumnListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ColumnListContext.prototype.column = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnContext);
        }
        else {
            return this.getRuleContext(i, ColumnContext);
        }
    };
    ColumnListContext.prototype.syntaxComma = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SyntaxCommaContext);
        }
        else {
            return this.getRuleContext(i, SyntaxCommaContext);
        }
    };
    Object.defineProperty(ColumnListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_columnList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ColumnListContext.prototype.enterRule = function (listener) {
        if (listener.enterColumnList) {
            listener.enterColumnList(this);
        }
    };
    // @Override
    ColumnListContext.prototype.exitRule = function (listener) {
        if (listener.exitColumnList) {
            listener.exitColumnList(this);
        }
    };
    // @Override
    ColumnListContext.prototype.accept = function (visitor) {
        if (visitor.visitColumnList) {
            return visitor.visitColumnList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ColumnListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ColumnListContext = ColumnListContext;
var ExpressionListContext = /** @class */ (function (_super) {
    __extends(ExpressionListContext, _super);
    function ExpressionListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionListContext.prototype.constant = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstantContext);
        }
        else {
            return this.getRuleContext(i, ConstantContext);
        }
    };
    ExpressionListContext.prototype.assignmentMap = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AssignmentMapContext);
        }
        else {
            return this.getRuleContext(i, AssignmentMapContext);
        }
    };
    ExpressionListContext.prototype.assignmentSet = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AssignmentSetContext);
        }
        else {
            return this.getRuleContext(i, AssignmentSetContext);
        }
    };
    ExpressionListContext.prototype.assignmentList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AssignmentListContext);
        }
        else {
            return this.getRuleContext(i, AssignmentListContext);
        }
    };
    ExpressionListContext.prototype.syntaxComma = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SyntaxCommaContext);
        }
        else {
            return this.getRuleContext(i, SyntaxCommaContext);
        }
    };
    Object.defineProperty(ExpressionListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_expressionList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpressionListContext.prototype.enterRule = function (listener) {
        if (listener.enterExpressionList) {
            listener.enterExpressionList(this);
        }
    };
    // @Override
    ExpressionListContext.prototype.exitRule = function (listener) {
        if (listener.exitExpressionList) {
            listener.exitExpressionList(this);
        }
    };
    // @Override
    ExpressionListContext.prototype.accept = function (visitor) {
        if (visitor.visitExpressionList) {
            return visitor.visitExpressionList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpressionListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionListContext = ExpressionListContext;
var SelectContext = /** @class */ (function (_super) {
    __extends(SelectContext, _super);
    function SelectContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SelectContext.prototype.kwSelect = function () {
        return this.getRuleContext(0, KwSelectContext);
    };
    SelectContext.prototype.selectElements = function () {
        return this.getRuleContext(0, SelectElementsContext);
    };
    SelectContext.prototype.fromSpec = function () {
        return this.getRuleContext(0, FromSpecContext);
    };
    SelectContext.prototype.distinctSpec = function () {
        return this.tryGetRuleContext(0, DistinctSpecContext);
    };
    SelectContext.prototype.whereSpec = function () {
        return this.tryGetRuleContext(0, WhereSpecContext);
    };
    SelectContext.prototype.orderSpec = function () {
        return this.tryGetRuleContext(0, OrderSpecContext);
    };
    SelectContext.prototype.limitSpec = function () {
        return this.tryGetRuleContext(0, LimitSpecContext);
    };
    SelectContext.prototype.allowFilteringSpec = function () {
        return this.tryGetRuleContext(0, AllowFilteringSpecContext);
    };
    Object.defineProperty(SelectContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_select; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SelectContext.prototype.enterRule = function (listener) {
        if (listener.enterSelect) {
            listener.enterSelect(this);
        }
    };
    // @Override
    SelectContext.prototype.exitRule = function (listener) {
        if (listener.exitSelect) {
            listener.exitSelect(this);
        }
    };
    // @Override
    SelectContext.prototype.accept = function (visitor) {
        if (visitor.visitSelect) {
            return visitor.visitSelect(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SelectContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SelectContext = SelectContext;
var AllowFilteringSpecContext = /** @class */ (function (_super) {
    __extends(AllowFilteringSpecContext, _super);
    function AllowFilteringSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AllowFilteringSpecContext.prototype.kwAllow = function () {
        return this.getRuleContext(0, KwAllowContext);
    };
    AllowFilteringSpecContext.prototype.kwFiltering = function () {
        return this.getRuleContext(0, KwFilteringContext);
    };
    Object.defineProperty(AllowFilteringSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_allowFilteringSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AllowFilteringSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterAllowFilteringSpec) {
            listener.enterAllowFilteringSpec(this);
        }
    };
    // @Override
    AllowFilteringSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitAllowFilteringSpec) {
            listener.exitAllowFilteringSpec(this);
        }
    };
    // @Override
    AllowFilteringSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitAllowFilteringSpec) {
            return visitor.visitAllowFilteringSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AllowFilteringSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AllowFilteringSpecContext = AllowFilteringSpecContext;
var LimitSpecContext = /** @class */ (function (_super) {
    __extends(LimitSpecContext, _super);
    function LimitSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LimitSpecContext.prototype.kwLimit = function () {
        return this.getRuleContext(0, KwLimitContext);
    };
    LimitSpecContext.prototype.decimalLiteral = function () {
        return this.getRuleContext(0, DecimalLiteralContext);
    };
    Object.defineProperty(LimitSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_limitSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LimitSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterLimitSpec) {
            listener.enterLimitSpec(this);
        }
    };
    // @Override
    LimitSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitLimitSpec) {
            listener.exitLimitSpec(this);
        }
    };
    // @Override
    LimitSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitLimitSpec) {
            return visitor.visitLimitSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LimitSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LimitSpecContext = LimitSpecContext;
var FromSpecContext = /** @class */ (function (_super) {
    __extends(FromSpecContext, _super);
    function FromSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FromSpecContext.prototype.kwFrom = function () {
        return this.getRuleContext(0, KwFromContext);
    };
    FromSpecContext.prototype.fromSpecElement = function () {
        return this.getRuleContext(0, FromSpecElementContext);
    };
    Object.defineProperty(FromSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_fromSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FromSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterFromSpec) {
            listener.enterFromSpec(this);
        }
    };
    // @Override
    FromSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitFromSpec) {
            listener.exitFromSpec(this);
        }
    };
    // @Override
    FromSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitFromSpec) {
            return visitor.visitFromSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FromSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FromSpecContext = FromSpecContext;
var FromSpecElementContext = /** @class */ (function (_super) {
    __extends(FromSpecElementContext, _super);
    function FromSpecElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FromSpecElementContext.prototype.OBJECT_NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(CqlParser.OBJECT_NAME);
        }
        else {
            return this.getToken(CqlParser.OBJECT_NAME, i);
        }
    };
    FromSpecElementContext.prototype.DOT = function () { return this.tryGetToken(CqlParser.DOT, 0); };
    Object.defineProperty(FromSpecElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_fromSpecElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FromSpecElementContext.prototype.enterRule = function (listener) {
        if (listener.enterFromSpecElement) {
            listener.enterFromSpecElement(this);
        }
    };
    // @Override
    FromSpecElementContext.prototype.exitRule = function (listener) {
        if (listener.exitFromSpecElement) {
            listener.exitFromSpecElement(this);
        }
    };
    // @Override
    FromSpecElementContext.prototype.accept = function (visitor) {
        if (visitor.visitFromSpecElement) {
            return visitor.visitFromSpecElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FromSpecElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FromSpecElementContext = FromSpecElementContext;
var OrderSpecContext = /** @class */ (function (_super) {
    __extends(OrderSpecContext, _super);
    function OrderSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OrderSpecContext.prototype.kwOrder = function () {
        return this.getRuleContext(0, KwOrderContext);
    };
    OrderSpecContext.prototype.kwBy = function () {
        return this.getRuleContext(0, KwByContext);
    };
    OrderSpecContext.prototype.orderSpecElement = function () {
        return this.getRuleContext(0, OrderSpecElementContext);
    };
    Object.defineProperty(OrderSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_orderSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OrderSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterOrderSpec) {
            listener.enterOrderSpec(this);
        }
    };
    // @Override
    OrderSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitOrderSpec) {
            listener.exitOrderSpec(this);
        }
    };
    // @Override
    OrderSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitOrderSpec) {
            return visitor.visitOrderSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OrderSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OrderSpecContext = OrderSpecContext;
var OrderSpecElementContext = /** @class */ (function (_super) {
    __extends(OrderSpecElementContext, _super);
    function OrderSpecElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OrderSpecElementContext.prototype.OBJECT_NAME = function () { return this.getToken(CqlParser.OBJECT_NAME, 0); };
    OrderSpecElementContext.prototype.kwAsc = function () {
        return this.tryGetRuleContext(0, KwAscContext);
    };
    OrderSpecElementContext.prototype.kwDesc = function () {
        return this.tryGetRuleContext(0, KwDescContext);
    };
    Object.defineProperty(OrderSpecElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_orderSpecElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OrderSpecElementContext.prototype.enterRule = function (listener) {
        if (listener.enterOrderSpecElement) {
            listener.enterOrderSpecElement(this);
        }
    };
    // @Override
    OrderSpecElementContext.prototype.exitRule = function (listener) {
        if (listener.exitOrderSpecElement) {
            listener.exitOrderSpecElement(this);
        }
    };
    // @Override
    OrderSpecElementContext.prototype.accept = function (visitor) {
        if (visitor.visitOrderSpecElement) {
            return visitor.visitOrderSpecElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OrderSpecElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OrderSpecElementContext = OrderSpecElementContext;
var WhereSpecContext = /** @class */ (function (_super) {
    __extends(WhereSpecContext, _super);
    function WhereSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WhereSpecContext.prototype.kwWhere = function () {
        return this.getRuleContext(0, KwWhereContext);
    };
    WhereSpecContext.prototype.relationElements = function () {
        return this.getRuleContext(0, RelationElementsContext);
    };
    Object.defineProperty(WhereSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_whereSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WhereSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterWhereSpec) {
            listener.enterWhereSpec(this);
        }
    };
    // @Override
    WhereSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitWhereSpec) {
            listener.exitWhereSpec(this);
        }
    };
    // @Override
    WhereSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitWhereSpec) {
            return visitor.visitWhereSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WhereSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WhereSpecContext = WhereSpecContext;
var DistinctSpecContext = /** @class */ (function (_super) {
    __extends(DistinctSpecContext, _super);
    function DistinctSpecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DistinctSpecContext.prototype.kwDistinct = function () {
        return this.getRuleContext(0, KwDistinctContext);
    };
    Object.defineProperty(DistinctSpecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_distinctSpec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DistinctSpecContext.prototype.enterRule = function (listener) {
        if (listener.enterDistinctSpec) {
            listener.enterDistinctSpec(this);
        }
    };
    // @Override
    DistinctSpecContext.prototype.exitRule = function (listener) {
        if (listener.exitDistinctSpec) {
            listener.exitDistinctSpec(this);
        }
    };
    // @Override
    DistinctSpecContext.prototype.accept = function (visitor) {
        if (visitor.visitDistinctSpec) {
            return visitor.visitDistinctSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DistinctSpecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DistinctSpecContext = DistinctSpecContext;
var SelectElementsContext = /** @class */ (function (_super) {
    __extends(SelectElementsContext, _super);
    function SelectElementsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SelectElementsContext.prototype.selectElement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SelectElementContext);
        }
        else {
            return this.getRuleContext(i, SelectElementContext);
        }
    };
    SelectElementsContext.prototype.STAR = function () { return this.tryGetToken(CqlParser.STAR, 0); };
    SelectElementsContext.prototype.syntaxComma = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SyntaxCommaContext);
        }
        else {
            return this.getRuleContext(i, SyntaxCommaContext);
        }
    };
    Object.defineProperty(SelectElementsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_selectElements; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SelectElementsContext.prototype.enterRule = function (listener) {
        if (listener.enterSelectElements) {
            listener.enterSelectElements(this);
        }
    };
    // @Override
    SelectElementsContext.prototype.exitRule = function (listener) {
        if (listener.exitSelectElements) {
            listener.exitSelectElements(this);
        }
    };
    // @Override
    SelectElementsContext.prototype.accept = function (visitor) {
        if (visitor.visitSelectElements) {
            return visitor.visitSelectElements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SelectElementsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SelectElementsContext = SelectElementsContext;
var SelectElementContext = /** @class */ (function (_super) {
    __extends(SelectElementContext, _super);
    function SelectElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SelectElementContext.prototype.OBJECT_NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(CqlParser.OBJECT_NAME);
        }
        else {
            return this.getToken(CqlParser.OBJECT_NAME, i);
        }
    };
    SelectElementContext.prototype.DOT = function () { return this.tryGetToken(CqlParser.DOT, 0); };
    SelectElementContext.prototype.STAR = function () { return this.tryGetToken(CqlParser.STAR, 0); };
    SelectElementContext.prototype.kwAs = function () {
        return this.tryGetRuleContext(0, KwAsContext);
    };
    SelectElementContext.prototype.functionCall = function () {
        return this.tryGetRuleContext(0, FunctionCallContext);
    };
    Object.defineProperty(SelectElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_selectElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SelectElementContext.prototype.enterRule = function (listener) {
        if (listener.enterSelectElement) {
            listener.enterSelectElement(this);
        }
    };
    // @Override
    SelectElementContext.prototype.exitRule = function (listener) {
        if (listener.exitSelectElement) {
            listener.exitSelectElement(this);
        }
    };
    // @Override
    SelectElementContext.prototype.accept = function (visitor) {
        if (visitor.visitSelectElement) {
            return visitor.visitSelectElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SelectElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SelectElementContext = SelectElementContext;
var RelationElementsContext = /** @class */ (function (_super) {
    __extends(RelationElementsContext, _super);
    function RelationElementsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RelationElementsContext.prototype.relationElement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RelationElementContext);
        }
        else {
            return this.getRuleContext(i, RelationElementContext);
        }
    };
    RelationElementsContext.prototype.kwAnd = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(KwAndContext);
        }
        else {
            return this.getRuleContext(i, KwAndContext);
        }
    };
    Object.defineProperty(RelationElementsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_relationElements; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RelationElementsContext.prototype.enterRule = function (listener) {
        if (listener.enterRelationElements) {
            listener.enterRelationElements(this);
        }
    };
    // @Override
    RelationElementsContext.prototype.exitRule = function (listener) {
        if (listener.exitRelationElements) {
            listener.exitRelationElements(this);
        }
    };
    // @Override
    RelationElementsContext.prototype.accept = function (visitor) {
        if (visitor.visitRelationElements) {
            return visitor.visitRelationElements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RelationElementsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RelationElementsContext = RelationElementsContext;
var RelationElementContext = /** @class */ (function (_super) {
    __extends(RelationElementContext, _super);
    function RelationElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RelationElementContext.prototype.OBJECT_NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(CqlParser.OBJECT_NAME);
        }
        else {
            return this.getToken(CqlParser.OBJECT_NAME, i);
        }
    };
    RelationElementContext.prototype.constant = function () {
        return this.tryGetRuleContext(0, ConstantContext);
    };
    RelationElementContext.prototype.OPERATOR_EQ = function () { return this.tryGetToken(CqlParser.OPERATOR_EQ, 0); };
    RelationElementContext.prototype.OPERATOR_LT = function () { return this.tryGetToken(CqlParser.OPERATOR_LT, 0); };
    RelationElementContext.prototype.OPERATOR_GT = function () { return this.tryGetToken(CqlParser.OPERATOR_GT, 0); };
    RelationElementContext.prototype.OPERATOR_LTE = function () { return this.tryGetToken(CqlParser.OPERATOR_LTE, 0); };
    RelationElementContext.prototype.OPERATOR_GTE = function () { return this.tryGetToken(CqlParser.OPERATOR_GTE, 0); };
    RelationElementContext.prototype.DOT = function () { return this.tryGetToken(CqlParser.DOT, 0); };
    RelationElementContext.prototype.functionCall = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FunctionCallContext);
        }
        else {
            return this.getRuleContext(i, FunctionCallContext);
        }
    };
    RelationElementContext.prototype.kwIn = function () {
        return this.tryGetRuleContext(0, KwInContext);
    };
    RelationElementContext.prototype.LR_BRACKET = function () { return this.tryGetToken(CqlParser.LR_BRACKET, 0); };
    RelationElementContext.prototype.RR_BRACKET = function () { return this.tryGetToken(CqlParser.RR_BRACKET, 0); };
    RelationElementContext.prototype.functionArgs = function () {
        return this.tryGetRuleContext(0, FunctionArgsContext);
    };
    RelationElementContext.prototype.relalationContainsKey = function () {
        return this.tryGetRuleContext(0, RelalationContainsKeyContext);
    };
    RelationElementContext.prototype.relalationContains = function () {
        return this.tryGetRuleContext(0, RelalationContainsContext);
    };
    Object.defineProperty(RelationElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_relationElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RelationElementContext.prototype.enterRule = function (listener) {
        if (listener.enterRelationElement) {
            listener.enterRelationElement(this);
        }
    };
    // @Override
    RelationElementContext.prototype.exitRule = function (listener) {
        if (listener.exitRelationElement) {
            listener.exitRelationElement(this);
        }
    };
    // @Override
    RelationElementContext.prototype.accept = function (visitor) {
        if (visitor.visitRelationElement) {
            return visitor.visitRelationElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RelationElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RelationElementContext = RelationElementContext;
var RelalationContainsContext = /** @class */ (function (_super) {
    __extends(RelalationContainsContext, _super);
    function RelalationContainsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RelalationContainsContext.prototype.OBJECT_NAME = function () { return this.getToken(CqlParser.OBJECT_NAME, 0); };
    RelalationContainsContext.prototype.kwContains = function () {
        return this.getRuleContext(0, KwContainsContext);
    };
    RelalationContainsContext.prototype.constant = function () {
        return this.getRuleContext(0, ConstantContext);
    };
    Object.defineProperty(RelalationContainsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_relalationContains; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RelalationContainsContext.prototype.enterRule = function (listener) {
        if (listener.enterRelalationContains) {
            listener.enterRelalationContains(this);
        }
    };
    // @Override
    RelalationContainsContext.prototype.exitRule = function (listener) {
        if (listener.exitRelalationContains) {
            listener.exitRelalationContains(this);
        }
    };
    // @Override
    RelalationContainsContext.prototype.accept = function (visitor) {
        if (visitor.visitRelalationContains) {
            return visitor.visitRelalationContains(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RelalationContainsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RelalationContainsContext = RelalationContainsContext;
var RelalationContainsKeyContext = /** @class */ (function (_super) {
    __extends(RelalationContainsKeyContext, _super);
    function RelalationContainsKeyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RelalationContainsKeyContext.prototype.OBJECT_NAME = function () { return this.getToken(CqlParser.OBJECT_NAME, 0); };
    RelalationContainsKeyContext.prototype.constant = function () {
        return this.getRuleContext(0, ConstantContext);
    };
    RelalationContainsKeyContext.prototype.kwContains = function () {
        return this.tryGetRuleContext(0, KwContainsContext);
    };
    RelalationContainsKeyContext.prototype.kwKey = function () {
        return this.tryGetRuleContext(0, KwKeyContext);
    };
    Object.defineProperty(RelalationContainsKeyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_relalationContainsKey; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RelalationContainsKeyContext.prototype.enterRule = function (listener) {
        if (listener.enterRelalationContainsKey) {
            listener.enterRelalationContainsKey(this);
        }
    };
    // @Override
    RelalationContainsKeyContext.prototype.exitRule = function (listener) {
        if (listener.exitRelalationContainsKey) {
            listener.exitRelalationContainsKey(this);
        }
    };
    // @Override
    RelalationContainsKeyContext.prototype.accept = function (visitor) {
        if (visitor.visitRelalationContainsKey) {
            return visitor.visitRelalationContainsKey(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RelalationContainsKeyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RelalationContainsKeyContext = RelalationContainsKeyContext;
var FunctionCallContext = /** @class */ (function (_super) {
    __extends(FunctionCallContext, _super);
    function FunctionCallContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionCallContext.prototype.OBJECT_NAME = function () { return this.getToken(CqlParser.OBJECT_NAME, 0); };
    FunctionCallContext.prototype.LR_BRACKET = function () { return this.getToken(CqlParser.LR_BRACKET, 0); };
    FunctionCallContext.prototype.STAR = function () { return this.tryGetToken(CqlParser.STAR, 0); };
    FunctionCallContext.prototype.RR_BRACKET = function () { return this.getToken(CqlParser.RR_BRACKET, 0); };
    FunctionCallContext.prototype.functionArgs = function () {
        return this.tryGetRuleContext(0, FunctionArgsContext);
    };
    Object.defineProperty(FunctionCallContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_functionCall; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionCallContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionCall) {
            listener.enterFunctionCall(this);
        }
    };
    // @Override
    FunctionCallContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionCall) {
            listener.exitFunctionCall(this);
        }
    };
    // @Override
    FunctionCallContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionCall) {
            return visitor.visitFunctionCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionCallContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionCallContext = FunctionCallContext;
var FunctionArgsContext = /** @class */ (function (_super) {
    __extends(FunctionArgsContext, _super);
    function FunctionArgsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionArgsContext.prototype.constant = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstantContext);
        }
        else {
            return this.getRuleContext(i, ConstantContext);
        }
    };
    FunctionArgsContext.prototype.OBJECT_NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(CqlParser.OBJECT_NAME);
        }
        else {
            return this.getToken(CqlParser.OBJECT_NAME, i);
        }
    };
    FunctionArgsContext.prototype.functionCall = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FunctionCallContext);
        }
        else {
            return this.getRuleContext(i, FunctionCallContext);
        }
    };
    FunctionArgsContext.prototype.syntaxComma = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SyntaxCommaContext);
        }
        else {
            return this.getRuleContext(i, SyntaxCommaContext);
        }
    };
    Object.defineProperty(FunctionArgsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_functionArgs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionArgsContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionArgs) {
            listener.enterFunctionArgs(this);
        }
    };
    // @Override
    FunctionArgsContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionArgs) {
            listener.exitFunctionArgs(this);
        }
    };
    // @Override
    FunctionArgsContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionArgs) {
            return visitor.visitFunctionArgs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionArgsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionArgsContext = FunctionArgsContext;
var ConstantContext = /** @class */ (function (_super) {
    __extends(ConstantContext, _super);
    function ConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantContext.prototype.UUID = function () { return this.tryGetToken(CqlParser.UUID, 0); };
    ConstantContext.prototype.stringLiteral = function () {
        return this.tryGetRuleContext(0, StringLiteralContext);
    };
    ConstantContext.prototype.decimalLiteral = function () {
        return this.tryGetRuleContext(0, DecimalLiteralContext);
    };
    ConstantContext.prototype.hexadecimalLiteral = function () {
        return this.tryGetRuleContext(0, HexadecimalLiteralContext);
    };
    ConstantContext.prototype.booleanLiteral = function () {
        return this.tryGetRuleContext(0, BooleanLiteralContext);
    };
    ConstantContext.prototype.kwNull = function () {
        return this.tryGetRuleContext(0, KwNullContext);
    };
    Object.defineProperty(ConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_constant; },
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
var DecimalLiteralContext = /** @class */ (function (_super) {
    __extends(DecimalLiteralContext, _super);
    function DecimalLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DecimalLiteralContext.prototype.DECIMAL_LITERAL = function () { return this.getToken(CqlParser.DECIMAL_LITERAL, 0); };
    Object.defineProperty(DecimalLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_decimalLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DecimalLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterDecimalLiteral) {
            listener.enterDecimalLiteral(this);
        }
    };
    // @Override
    DecimalLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitDecimalLiteral) {
            listener.exitDecimalLiteral(this);
        }
    };
    // @Override
    DecimalLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitDecimalLiteral) {
            return visitor.visitDecimalLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DecimalLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DecimalLiteralContext = DecimalLiteralContext;
var FloatLiteralContext = /** @class */ (function (_super) {
    __extends(FloatLiteralContext, _super);
    function FloatLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FloatLiteralContext.prototype.DECIMAL_LITERAL = function () { return this.tryGetToken(CqlParser.DECIMAL_LITERAL, 0); };
    FloatLiteralContext.prototype.FLOAT_LITERAL = function () { return this.tryGetToken(CqlParser.FLOAT_LITERAL, 0); };
    Object.defineProperty(FloatLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_floatLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FloatLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterFloatLiteral) {
            listener.enterFloatLiteral(this);
        }
    };
    // @Override
    FloatLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitFloatLiteral) {
            listener.exitFloatLiteral(this);
        }
    };
    // @Override
    FloatLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitFloatLiteral) {
            return visitor.visitFloatLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FloatLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FloatLiteralContext = FloatLiteralContext;
var StringLiteralContext = /** @class */ (function (_super) {
    __extends(StringLiteralContext, _super);
    function StringLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringLiteralContext.prototype.STRING_LITERAL = function () { return this.getToken(CqlParser.STRING_LITERAL, 0); };
    Object.defineProperty(StringLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_stringLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StringLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterStringLiteral) {
            listener.enterStringLiteral(this);
        }
    };
    // @Override
    StringLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitStringLiteral) {
            listener.exitStringLiteral(this);
        }
    };
    // @Override
    StringLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitStringLiteral) {
            return visitor.visitStringLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StringLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StringLiteralContext = StringLiteralContext;
var BooleanLiteralContext = /** @class */ (function (_super) {
    __extends(BooleanLiteralContext, _super);
    function BooleanLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BooleanLiteralContext.prototype.K_TRUE = function () { return this.tryGetToken(CqlParser.K_TRUE, 0); };
    BooleanLiteralContext.prototype.K_FALSE = function () { return this.tryGetToken(CqlParser.K_FALSE, 0); };
    Object.defineProperty(BooleanLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_booleanLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BooleanLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterBooleanLiteral) {
            listener.enterBooleanLiteral(this);
        }
    };
    // @Override
    BooleanLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitBooleanLiteral) {
            listener.exitBooleanLiteral(this);
        }
    };
    // @Override
    BooleanLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitBooleanLiteral) {
            return visitor.visitBooleanLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BooleanLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BooleanLiteralContext = BooleanLiteralContext;
var HexadecimalLiteralContext = /** @class */ (function (_super) {
    __extends(HexadecimalLiteralContext, _super);
    function HexadecimalLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HexadecimalLiteralContext.prototype.HEXADECIMAL_LITERAL = function () { return this.getToken(CqlParser.HEXADECIMAL_LITERAL, 0); };
    Object.defineProperty(HexadecimalLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_hexadecimalLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HexadecimalLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterHexadecimalLiteral) {
            listener.enterHexadecimalLiteral(this);
        }
    };
    // @Override
    HexadecimalLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitHexadecimalLiteral) {
            listener.exitHexadecimalLiteral(this);
        }
    };
    // @Override
    HexadecimalLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitHexadecimalLiteral) {
            return visitor.visitHexadecimalLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HexadecimalLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HexadecimalLiteralContext = HexadecimalLiteralContext;
var KeyspaceContext = /** @class */ (function (_super) {
    __extends(KeyspaceContext, _super);
    function KeyspaceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeyspaceContext.prototype.OBJECT_NAME = function () { return this.getToken(CqlParser.OBJECT_NAME, 0); };
    KeyspaceContext.prototype.DQUOTE = function (i) {
        if (i === undefined) {
            return this.getTokens(CqlParser.DQUOTE);
        }
        else {
            return this.getToken(CqlParser.DQUOTE, i);
        }
    };
    Object.defineProperty(KeyspaceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_keyspace; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeyspaceContext.prototype.enterRule = function (listener) {
        if (listener.enterKeyspace) {
            listener.enterKeyspace(this);
        }
    };
    // @Override
    KeyspaceContext.prototype.exitRule = function (listener) {
        if (listener.exitKeyspace) {
            listener.exitKeyspace(this);
        }
    };
    // @Override
    KeyspaceContext.prototype.accept = function (visitor) {
        if (visitor.visitKeyspace) {
            return visitor.visitKeyspace(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeyspaceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeyspaceContext = KeyspaceContext;
var TableContext = /** @class */ (function (_super) {
    __extends(TableContext, _super);
    function TableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TableContext.prototype.OBJECT_NAME = function () { return this.getToken(CqlParser.OBJECT_NAME, 0); };
    TableContext.prototype.DQUOTE = function (i) {
        if (i === undefined) {
            return this.getTokens(CqlParser.DQUOTE);
        }
        else {
            return this.getToken(CqlParser.DQUOTE, i);
        }
    };
    Object.defineProperty(TableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_table; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TableContext.prototype.enterRule = function (listener) {
        if (listener.enterTable) {
            listener.enterTable(this);
        }
    };
    // @Override
    TableContext.prototype.exitRule = function (listener) {
        if (listener.exitTable) {
            listener.exitTable(this);
        }
    };
    // @Override
    TableContext.prototype.accept = function (visitor) {
        if (visitor.visitTable) {
            return visitor.visitTable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TableContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TableContext = TableContext;
var ColumnContext = /** @class */ (function (_super) {
    __extends(ColumnContext, _super);
    function ColumnContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ColumnContext.prototype.OBJECT_NAME = function () { return this.getToken(CqlParser.OBJECT_NAME, 0); };
    ColumnContext.prototype.DQUOTE = function (i) {
        if (i === undefined) {
            return this.getTokens(CqlParser.DQUOTE);
        }
        else {
            return this.getToken(CqlParser.DQUOTE, i);
        }
    };
    Object.defineProperty(ColumnContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_column; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ColumnContext.prototype.enterRule = function (listener) {
        if (listener.enterColumn) {
            listener.enterColumn(this);
        }
    };
    // @Override
    ColumnContext.prototype.exitRule = function (listener) {
        if (listener.exitColumn) {
            listener.exitColumn(this);
        }
    };
    // @Override
    ColumnContext.prototype.accept = function (visitor) {
        if (visitor.visitColumn) {
            return visitor.visitColumn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ColumnContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ColumnContext = ColumnContext;
var DataTypeContext = /** @class */ (function (_super) {
    __extends(DataTypeContext, _super);
    function DataTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DataTypeContext.prototype.dataTypeName = function () {
        return this.getRuleContext(0, DataTypeNameContext);
    };
    DataTypeContext.prototype.dataTypeDefinition = function () {
        return this.tryGetRuleContext(0, DataTypeDefinitionContext);
    };
    Object.defineProperty(DataTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_dataType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DataTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterDataType) {
            listener.enterDataType(this);
        }
    };
    // @Override
    DataTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitDataType) {
            listener.exitDataType(this);
        }
    };
    // @Override
    DataTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitDataType) {
            return visitor.visitDataType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DataTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DataTypeContext = DataTypeContext;
var DataTypeNameContext = /** @class */ (function (_super) {
    __extends(DataTypeNameContext, _super);
    function DataTypeNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DataTypeNameContext.prototype.OBJECT_NAME = function () { return this.tryGetToken(CqlParser.OBJECT_NAME, 0); };
    DataTypeNameContext.prototype.K_TIMESTAMP = function () { return this.tryGetToken(CqlParser.K_TIMESTAMP, 0); };
    DataTypeNameContext.prototype.K_SET = function () { return this.tryGetToken(CqlParser.K_SET, 0); };
    DataTypeNameContext.prototype.K_ASCII = function () { return this.tryGetToken(CqlParser.K_ASCII, 0); };
    DataTypeNameContext.prototype.K_BIGINT = function () { return this.tryGetToken(CqlParser.K_BIGINT, 0); };
    DataTypeNameContext.prototype.K_BLOB = function () { return this.tryGetToken(CqlParser.K_BLOB, 0); };
    DataTypeNameContext.prototype.K_BOOLEAN = function () { return this.tryGetToken(CqlParser.K_BOOLEAN, 0); };
    DataTypeNameContext.prototype.K_COUNTER = function () { return this.tryGetToken(CqlParser.K_COUNTER, 0); };
    DataTypeNameContext.prototype.K_DATE = function () { return this.tryGetToken(CqlParser.K_DATE, 0); };
    DataTypeNameContext.prototype.K_DECIMAL = function () { return this.tryGetToken(CqlParser.K_DECIMAL, 0); };
    DataTypeNameContext.prototype.K_DOUBLE = function () { return this.tryGetToken(CqlParser.K_DOUBLE, 0); };
    DataTypeNameContext.prototype.K_FLOAT = function () { return this.tryGetToken(CqlParser.K_FLOAT, 0); };
    DataTypeNameContext.prototype.K_FROZEN = function () { return this.tryGetToken(CqlParser.K_FROZEN, 0); };
    DataTypeNameContext.prototype.K_INET = function () { return this.tryGetToken(CqlParser.K_INET, 0); };
    DataTypeNameContext.prototype.K_INT = function () { return this.tryGetToken(CqlParser.K_INT, 0); };
    DataTypeNameContext.prototype.K_LIST = function () { return this.tryGetToken(CqlParser.K_LIST, 0); };
    DataTypeNameContext.prototype.K_MAP = function () { return this.tryGetToken(CqlParser.K_MAP, 0); };
    DataTypeNameContext.prototype.K_SMALLINT = function () { return this.tryGetToken(CqlParser.K_SMALLINT, 0); };
    DataTypeNameContext.prototype.K_TEXT = function () { return this.tryGetToken(CqlParser.K_TEXT, 0); };
    DataTypeNameContext.prototype.K_TIME = function () { return this.tryGetToken(CqlParser.K_TIME, 0); };
    DataTypeNameContext.prototype.K_TIMEUUID = function () { return this.tryGetToken(CqlParser.K_TIMEUUID, 0); };
    DataTypeNameContext.prototype.K_TINYINT = function () { return this.tryGetToken(CqlParser.K_TINYINT, 0); };
    DataTypeNameContext.prototype.K_TUPLE = function () { return this.tryGetToken(CqlParser.K_TUPLE, 0); };
    DataTypeNameContext.prototype.K_VARCHAR = function () { return this.tryGetToken(CqlParser.K_VARCHAR, 0); };
    DataTypeNameContext.prototype.K_VARINT = function () { return this.tryGetToken(CqlParser.K_VARINT, 0); };
    DataTypeNameContext.prototype.K_UUID = function () { return this.tryGetToken(CqlParser.K_UUID, 0); };
    Object.defineProperty(DataTypeNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_dataTypeName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DataTypeNameContext.prototype.enterRule = function (listener) {
        if (listener.enterDataTypeName) {
            listener.enterDataTypeName(this);
        }
    };
    // @Override
    DataTypeNameContext.prototype.exitRule = function (listener) {
        if (listener.exitDataTypeName) {
            listener.exitDataTypeName(this);
        }
    };
    // @Override
    DataTypeNameContext.prototype.accept = function (visitor) {
        if (visitor.visitDataTypeName) {
            return visitor.visitDataTypeName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DataTypeNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DataTypeNameContext = DataTypeNameContext;
var DataTypeDefinitionContext = /** @class */ (function (_super) {
    __extends(DataTypeDefinitionContext, _super);
    function DataTypeDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DataTypeDefinitionContext.prototype.syntaxBracketLa = function () {
        return this.getRuleContext(0, SyntaxBracketLaContext);
    };
    DataTypeDefinitionContext.prototype.dataTypeName = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DataTypeNameContext);
        }
        else {
            return this.getRuleContext(i, DataTypeNameContext);
        }
    };
    DataTypeDefinitionContext.prototype.syntaxBracketRa = function () {
        return this.getRuleContext(0, SyntaxBracketRaContext);
    };
    DataTypeDefinitionContext.prototype.syntaxComma = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SyntaxCommaContext);
        }
        else {
            return this.getRuleContext(i, SyntaxCommaContext);
        }
    };
    Object.defineProperty(DataTypeDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_dataTypeDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DataTypeDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterDataTypeDefinition) {
            listener.enterDataTypeDefinition(this);
        }
    };
    // @Override
    DataTypeDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitDataTypeDefinition) {
            listener.exitDataTypeDefinition(this);
        }
    };
    // @Override
    DataTypeDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitDataTypeDefinition) {
            return visitor.visitDataTypeDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DataTypeDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DataTypeDefinitionContext = DataTypeDefinitionContext;
var OrderDirectionContext = /** @class */ (function (_super) {
    __extends(OrderDirectionContext, _super);
    function OrderDirectionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OrderDirectionContext.prototype.kwAsc = function () {
        return this.tryGetRuleContext(0, KwAscContext);
    };
    OrderDirectionContext.prototype.kwDesc = function () {
        return this.tryGetRuleContext(0, KwDescContext);
    };
    Object.defineProperty(OrderDirectionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_orderDirection; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OrderDirectionContext.prototype.enterRule = function (listener) {
        if (listener.enterOrderDirection) {
            listener.enterOrderDirection(this);
        }
    };
    // @Override
    OrderDirectionContext.prototype.exitRule = function (listener) {
        if (listener.exitOrderDirection) {
            listener.exitOrderDirection(this);
        }
    };
    // @Override
    OrderDirectionContext.prototype.accept = function (visitor) {
        if (visitor.visitOrderDirection) {
            return visitor.visitOrderDirection(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OrderDirectionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OrderDirectionContext = OrderDirectionContext;
var RoleContext = /** @class */ (function (_super) {
    __extends(RoleContext, _super);
    function RoleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RoleContext.prototype.OBJECT_NAME = function () { return this.getToken(CqlParser.OBJECT_NAME, 0); };
    Object.defineProperty(RoleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_role; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RoleContext.prototype.enterRule = function (listener) {
        if (listener.enterRole) {
            listener.enterRole(this);
        }
    };
    // @Override
    RoleContext.prototype.exitRule = function (listener) {
        if (listener.exitRole) {
            listener.exitRole(this);
        }
    };
    // @Override
    RoleContext.prototype.accept = function (visitor) {
        if (visitor.visitRole) {
            return visitor.visitRole(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RoleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RoleContext = RoleContext;
var TriggerContext = /** @class */ (function (_super) {
    __extends(TriggerContext, _super);
    function TriggerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TriggerContext.prototype.OBJECT_NAME = function () { return this.getToken(CqlParser.OBJECT_NAME, 0); };
    Object.defineProperty(TriggerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_trigger; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TriggerContext.prototype.enterRule = function (listener) {
        if (listener.enterTrigger) {
            listener.enterTrigger(this);
        }
    };
    // @Override
    TriggerContext.prototype.exitRule = function (listener) {
        if (listener.exitTrigger) {
            listener.exitTrigger(this);
        }
    };
    // @Override
    TriggerContext.prototype.accept = function (visitor) {
        if (visitor.visitTrigger) {
            return visitor.visitTrigger(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TriggerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TriggerContext = TriggerContext;
var TriggerClassContext = /** @class */ (function (_super) {
    __extends(TriggerClassContext, _super);
    function TriggerClassContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TriggerClassContext.prototype.stringLiteral = function () {
        return this.getRuleContext(0, StringLiteralContext);
    };
    Object.defineProperty(TriggerClassContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_triggerClass; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TriggerClassContext.prototype.enterRule = function (listener) {
        if (listener.enterTriggerClass) {
            listener.enterTriggerClass(this);
        }
    };
    // @Override
    TriggerClassContext.prototype.exitRule = function (listener) {
        if (listener.exitTriggerClass) {
            listener.exitTriggerClass(this);
        }
    };
    // @Override
    TriggerClassContext.prototype.accept = function (visitor) {
        if (visitor.visitTriggerClass) {
            return visitor.visitTriggerClass(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TriggerClassContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TriggerClassContext = TriggerClassContext;
var MaterializedViewContext = /** @class */ (function (_super) {
    __extends(MaterializedViewContext, _super);
    function MaterializedViewContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MaterializedViewContext.prototype.OBJECT_NAME = function () { return this.getToken(CqlParser.OBJECT_NAME, 0); };
    Object.defineProperty(MaterializedViewContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_materializedView; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MaterializedViewContext.prototype.enterRule = function (listener) {
        if (listener.enterMaterializedView) {
            listener.enterMaterializedView(this);
        }
    };
    // @Override
    MaterializedViewContext.prototype.exitRule = function (listener) {
        if (listener.exitMaterializedView) {
            listener.exitMaterializedView(this);
        }
    };
    // @Override
    MaterializedViewContext.prototype.accept = function (visitor) {
        if (visitor.visitMaterializedView) {
            return visitor.visitMaterializedView(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MaterializedViewContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MaterializedViewContext = MaterializedViewContext;
var TypeContext = /** @class */ (function (_super) {
    __extends(TypeContext, _super);
    function TypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeContext.prototype.OBJECT_NAME = function () { return this.getToken(CqlParser.OBJECT_NAME, 0); };
    Object.defineProperty(TypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_type; },
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
var AggregateContext = /** @class */ (function (_super) {
    __extends(AggregateContext, _super);
    function AggregateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AggregateContext.prototype.OBJECT_NAME = function () { return this.getToken(CqlParser.OBJECT_NAME, 0); };
    Object.defineProperty(AggregateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_aggregate; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AggregateContext.prototype.enterRule = function (listener) {
        if (listener.enterAggregate) {
            listener.enterAggregate(this);
        }
    };
    // @Override
    AggregateContext.prototype.exitRule = function (listener) {
        if (listener.exitAggregate) {
            listener.exitAggregate(this);
        }
    };
    // @Override
    AggregateContext.prototype.accept = function (visitor) {
        if (visitor.visitAggregate) {
            return visitor.visitAggregate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AggregateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AggregateContext = AggregateContext;
var FunctionContext = /** @class */ (function (_super) {
    __extends(FunctionContext, _super);
    function FunctionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionContext.prototype.OBJECT_NAME = function () { return this.getToken(CqlParser.OBJECT_NAME, 0); };
    Object.defineProperty(FunctionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_function; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction) {
            listener.enterFunction(this);
        }
    };
    // @Override
    FunctionContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction) {
            listener.exitFunction(this);
        }
    };
    // @Override
    FunctionContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction) {
            return visitor.visitFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionContext = FunctionContext;
var LanguageContext = /** @class */ (function (_super) {
    __extends(LanguageContext, _super);
    function LanguageContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LanguageContext.prototype.OBJECT_NAME = function () { return this.getToken(CqlParser.OBJECT_NAME, 0); };
    Object.defineProperty(LanguageContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_language; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LanguageContext.prototype.enterRule = function (listener) {
        if (listener.enterLanguage) {
            listener.enterLanguage(this);
        }
    };
    // @Override
    LanguageContext.prototype.exitRule = function (listener) {
        if (listener.exitLanguage) {
            listener.exitLanguage(this);
        }
    };
    // @Override
    LanguageContext.prototype.accept = function (visitor) {
        if (visitor.visitLanguage) {
            return visitor.visitLanguage(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LanguageContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LanguageContext = LanguageContext;
var UserContext = /** @class */ (function (_super) {
    __extends(UserContext, _super);
    function UserContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UserContext.prototype.OBJECT_NAME = function () { return this.getToken(CqlParser.OBJECT_NAME, 0); };
    Object.defineProperty(UserContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_user; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UserContext.prototype.enterRule = function (listener) {
        if (listener.enterUser) {
            listener.enterUser(this);
        }
    };
    // @Override
    UserContext.prototype.exitRule = function (listener) {
        if (listener.exitUser) {
            listener.exitUser(this);
        }
    };
    // @Override
    UserContext.prototype.accept = function (visitor) {
        if (visitor.visitUser) {
            return visitor.visitUser(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UserContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UserContext = UserContext;
var PasswordContext = /** @class */ (function (_super) {
    __extends(PasswordContext, _super);
    function PasswordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PasswordContext.prototype.stringLiteral = function () {
        return this.getRuleContext(0, StringLiteralContext);
    };
    Object.defineProperty(PasswordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_password; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PasswordContext.prototype.enterRule = function (listener) {
        if (listener.enterPassword) {
            listener.enterPassword(this);
        }
    };
    // @Override
    PasswordContext.prototype.exitRule = function (listener) {
        if (listener.exitPassword) {
            listener.exitPassword(this);
        }
    };
    // @Override
    PasswordContext.prototype.accept = function (visitor) {
        if (visitor.visitPassword) {
            return visitor.visitPassword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PasswordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PasswordContext = PasswordContext;
var HashKeyContext = /** @class */ (function (_super) {
    __extends(HashKeyContext, _super);
    function HashKeyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HashKeyContext.prototype.OBJECT_NAME = function () { return this.getToken(CqlParser.OBJECT_NAME, 0); };
    Object.defineProperty(HashKeyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_hashKey; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HashKeyContext.prototype.enterRule = function (listener) {
        if (listener.enterHashKey) {
            listener.enterHashKey(this);
        }
    };
    // @Override
    HashKeyContext.prototype.exitRule = function (listener) {
        if (listener.exitHashKey) {
            listener.exitHashKey(this);
        }
    };
    // @Override
    HashKeyContext.prototype.accept = function (visitor) {
        if (visitor.visitHashKey) {
            return visitor.visitHashKey(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HashKeyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HashKeyContext = HashKeyContext;
var ParamContext = /** @class */ (function (_super) {
    __extends(ParamContext, _super);
    function ParamContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParamContext.prototype.paramName = function () {
        return this.getRuleContext(0, ParamNameContext);
    };
    ParamContext.prototype.dataType = function () {
        return this.getRuleContext(0, DataTypeContext);
    };
    Object.defineProperty(ParamContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_param; },
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
var ParamNameContext = /** @class */ (function (_super) {
    __extends(ParamNameContext, _super);
    function ParamNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParamNameContext.prototype.OBJECT_NAME = function () { return this.getToken(CqlParser.OBJECT_NAME, 0); };
    Object.defineProperty(ParamNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_paramName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParamNameContext.prototype.enterRule = function (listener) {
        if (listener.enterParamName) {
            listener.enterParamName(this);
        }
    };
    // @Override
    ParamNameContext.prototype.exitRule = function (listener) {
        if (listener.exitParamName) {
            listener.exitParamName(this);
        }
    };
    // @Override
    ParamNameContext.prototype.accept = function (visitor) {
        if (visitor.visitParamName) {
            return visitor.visitParamName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParamNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParamNameContext = ParamNameContext;
var KwAddContext = /** @class */ (function (_super) {
    __extends(KwAddContext, _super);
    function KwAddContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwAddContext.prototype.K_ADD = function () { return this.getToken(CqlParser.K_ADD, 0); };
    Object.defineProperty(KwAddContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwAdd; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwAddContext.prototype.enterRule = function (listener) {
        if (listener.enterKwAdd) {
            listener.enterKwAdd(this);
        }
    };
    // @Override
    KwAddContext.prototype.exitRule = function (listener) {
        if (listener.exitKwAdd) {
            listener.exitKwAdd(this);
        }
    };
    // @Override
    KwAddContext.prototype.accept = function (visitor) {
        if (visitor.visitKwAdd) {
            return visitor.visitKwAdd(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwAddContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwAddContext = KwAddContext;
var KwAggregateContext = /** @class */ (function (_super) {
    __extends(KwAggregateContext, _super);
    function KwAggregateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwAggregateContext.prototype.K_AGGREGATE = function () { return this.getToken(CqlParser.K_AGGREGATE, 0); };
    Object.defineProperty(KwAggregateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwAggregate; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwAggregateContext.prototype.enterRule = function (listener) {
        if (listener.enterKwAggregate) {
            listener.enterKwAggregate(this);
        }
    };
    // @Override
    KwAggregateContext.prototype.exitRule = function (listener) {
        if (listener.exitKwAggregate) {
            listener.exitKwAggregate(this);
        }
    };
    // @Override
    KwAggregateContext.prototype.accept = function (visitor) {
        if (visitor.visitKwAggregate) {
            return visitor.visitKwAggregate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwAggregateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwAggregateContext = KwAggregateContext;
var KwAllContext = /** @class */ (function (_super) {
    __extends(KwAllContext, _super);
    function KwAllContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwAllContext.prototype.K_ALL = function () { return this.getToken(CqlParser.K_ALL, 0); };
    Object.defineProperty(KwAllContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwAll; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwAllContext.prototype.enterRule = function (listener) {
        if (listener.enterKwAll) {
            listener.enterKwAll(this);
        }
    };
    // @Override
    KwAllContext.prototype.exitRule = function (listener) {
        if (listener.exitKwAll) {
            listener.exitKwAll(this);
        }
    };
    // @Override
    KwAllContext.prototype.accept = function (visitor) {
        if (visitor.visitKwAll) {
            return visitor.visitKwAll(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwAllContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwAllContext = KwAllContext;
var KwAllPermissionsContext = /** @class */ (function (_super) {
    __extends(KwAllPermissionsContext, _super);
    function KwAllPermissionsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwAllPermissionsContext.prototype.K_ALL = function () { return this.getToken(CqlParser.K_ALL, 0); };
    KwAllPermissionsContext.prototype.K_PERMISSIONS = function () { return this.getToken(CqlParser.K_PERMISSIONS, 0); };
    Object.defineProperty(KwAllPermissionsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwAllPermissions; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwAllPermissionsContext.prototype.enterRule = function (listener) {
        if (listener.enterKwAllPermissions) {
            listener.enterKwAllPermissions(this);
        }
    };
    // @Override
    KwAllPermissionsContext.prototype.exitRule = function (listener) {
        if (listener.exitKwAllPermissions) {
            listener.exitKwAllPermissions(this);
        }
    };
    // @Override
    KwAllPermissionsContext.prototype.accept = function (visitor) {
        if (visitor.visitKwAllPermissions) {
            return visitor.visitKwAllPermissions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwAllPermissionsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwAllPermissionsContext = KwAllPermissionsContext;
var KwAllowContext = /** @class */ (function (_super) {
    __extends(KwAllowContext, _super);
    function KwAllowContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwAllowContext.prototype.K_ALLOW = function () { return this.getToken(CqlParser.K_ALLOW, 0); };
    Object.defineProperty(KwAllowContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwAllow; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwAllowContext.prototype.enterRule = function (listener) {
        if (listener.enterKwAllow) {
            listener.enterKwAllow(this);
        }
    };
    // @Override
    KwAllowContext.prototype.exitRule = function (listener) {
        if (listener.exitKwAllow) {
            listener.exitKwAllow(this);
        }
    };
    // @Override
    KwAllowContext.prototype.accept = function (visitor) {
        if (visitor.visitKwAllow) {
            return visitor.visitKwAllow(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwAllowContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwAllowContext = KwAllowContext;
var KwAlterContext = /** @class */ (function (_super) {
    __extends(KwAlterContext, _super);
    function KwAlterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwAlterContext.prototype.K_ALTER = function () { return this.getToken(CqlParser.K_ALTER, 0); };
    Object.defineProperty(KwAlterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwAlter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwAlterContext.prototype.enterRule = function (listener) {
        if (listener.enterKwAlter) {
            listener.enterKwAlter(this);
        }
    };
    // @Override
    KwAlterContext.prototype.exitRule = function (listener) {
        if (listener.exitKwAlter) {
            listener.exitKwAlter(this);
        }
    };
    // @Override
    KwAlterContext.prototype.accept = function (visitor) {
        if (visitor.visitKwAlter) {
            return visitor.visitKwAlter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwAlterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwAlterContext = KwAlterContext;
var KwAndContext = /** @class */ (function (_super) {
    __extends(KwAndContext, _super);
    function KwAndContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwAndContext.prototype.K_AND = function () { return this.getToken(CqlParser.K_AND, 0); };
    Object.defineProperty(KwAndContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwAnd; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwAndContext.prototype.enterRule = function (listener) {
        if (listener.enterKwAnd) {
            listener.enterKwAnd(this);
        }
    };
    // @Override
    KwAndContext.prototype.exitRule = function (listener) {
        if (listener.exitKwAnd) {
            listener.exitKwAnd(this);
        }
    };
    // @Override
    KwAndContext.prototype.accept = function (visitor) {
        if (visitor.visitKwAnd) {
            return visitor.visitKwAnd(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwAndContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwAndContext = KwAndContext;
var KwApplyContext = /** @class */ (function (_super) {
    __extends(KwApplyContext, _super);
    function KwApplyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwApplyContext.prototype.K_APPLY = function () { return this.getToken(CqlParser.K_APPLY, 0); };
    Object.defineProperty(KwApplyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwApply; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwApplyContext.prototype.enterRule = function (listener) {
        if (listener.enterKwApply) {
            listener.enterKwApply(this);
        }
    };
    // @Override
    KwApplyContext.prototype.exitRule = function (listener) {
        if (listener.exitKwApply) {
            listener.exitKwApply(this);
        }
    };
    // @Override
    KwApplyContext.prototype.accept = function (visitor) {
        if (visitor.visitKwApply) {
            return visitor.visitKwApply(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwApplyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwApplyContext = KwApplyContext;
var KwAsContext = /** @class */ (function (_super) {
    __extends(KwAsContext, _super);
    function KwAsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwAsContext.prototype.K_AS = function () { return this.getToken(CqlParser.K_AS, 0); };
    Object.defineProperty(KwAsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwAs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwAsContext.prototype.enterRule = function (listener) {
        if (listener.enterKwAs) {
            listener.enterKwAs(this);
        }
    };
    // @Override
    KwAsContext.prototype.exitRule = function (listener) {
        if (listener.exitKwAs) {
            listener.exitKwAs(this);
        }
    };
    // @Override
    KwAsContext.prototype.accept = function (visitor) {
        if (visitor.visitKwAs) {
            return visitor.visitKwAs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwAsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwAsContext = KwAsContext;
var KwAscContext = /** @class */ (function (_super) {
    __extends(KwAscContext, _super);
    function KwAscContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwAscContext.prototype.K_ASC = function () { return this.getToken(CqlParser.K_ASC, 0); };
    Object.defineProperty(KwAscContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwAsc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwAscContext.prototype.enterRule = function (listener) {
        if (listener.enterKwAsc) {
            listener.enterKwAsc(this);
        }
    };
    // @Override
    KwAscContext.prototype.exitRule = function (listener) {
        if (listener.exitKwAsc) {
            listener.exitKwAsc(this);
        }
    };
    // @Override
    KwAscContext.prototype.accept = function (visitor) {
        if (visitor.visitKwAsc) {
            return visitor.visitKwAsc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwAscContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwAscContext = KwAscContext;
var KwAuthorizeContext = /** @class */ (function (_super) {
    __extends(KwAuthorizeContext, _super);
    function KwAuthorizeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwAuthorizeContext.prototype.K_AUTHORIZE = function () { return this.getToken(CqlParser.K_AUTHORIZE, 0); };
    Object.defineProperty(KwAuthorizeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwAuthorize; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwAuthorizeContext.prototype.enterRule = function (listener) {
        if (listener.enterKwAuthorize) {
            listener.enterKwAuthorize(this);
        }
    };
    // @Override
    KwAuthorizeContext.prototype.exitRule = function (listener) {
        if (listener.exitKwAuthorize) {
            listener.exitKwAuthorize(this);
        }
    };
    // @Override
    KwAuthorizeContext.prototype.accept = function (visitor) {
        if (visitor.visitKwAuthorize) {
            return visitor.visitKwAuthorize(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwAuthorizeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwAuthorizeContext = KwAuthorizeContext;
var KwBatchContext = /** @class */ (function (_super) {
    __extends(KwBatchContext, _super);
    function KwBatchContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwBatchContext.prototype.K_BATCH = function () { return this.getToken(CqlParser.K_BATCH, 0); };
    Object.defineProperty(KwBatchContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwBatch; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwBatchContext.prototype.enterRule = function (listener) {
        if (listener.enterKwBatch) {
            listener.enterKwBatch(this);
        }
    };
    // @Override
    KwBatchContext.prototype.exitRule = function (listener) {
        if (listener.exitKwBatch) {
            listener.exitKwBatch(this);
        }
    };
    // @Override
    KwBatchContext.prototype.accept = function (visitor) {
        if (visitor.visitKwBatch) {
            return visitor.visitKwBatch(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwBatchContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwBatchContext = KwBatchContext;
var KwBeginContext = /** @class */ (function (_super) {
    __extends(KwBeginContext, _super);
    function KwBeginContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwBeginContext.prototype.K_BEGIN = function () { return this.getToken(CqlParser.K_BEGIN, 0); };
    Object.defineProperty(KwBeginContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwBegin; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwBeginContext.prototype.enterRule = function (listener) {
        if (listener.enterKwBegin) {
            listener.enterKwBegin(this);
        }
    };
    // @Override
    KwBeginContext.prototype.exitRule = function (listener) {
        if (listener.exitKwBegin) {
            listener.exitKwBegin(this);
        }
    };
    // @Override
    KwBeginContext.prototype.accept = function (visitor) {
        if (visitor.visitKwBegin) {
            return visitor.visitKwBegin(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwBeginContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwBeginContext = KwBeginContext;
var KwByContext = /** @class */ (function (_super) {
    __extends(KwByContext, _super);
    function KwByContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwByContext.prototype.K_BY = function () { return this.getToken(CqlParser.K_BY, 0); };
    Object.defineProperty(KwByContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwBy; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwByContext.prototype.enterRule = function (listener) {
        if (listener.enterKwBy) {
            listener.enterKwBy(this);
        }
    };
    // @Override
    KwByContext.prototype.exitRule = function (listener) {
        if (listener.exitKwBy) {
            listener.exitKwBy(this);
        }
    };
    // @Override
    KwByContext.prototype.accept = function (visitor) {
        if (visitor.visitKwBy) {
            return visitor.visitKwBy(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwByContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwByContext = KwByContext;
var KwCalledContext = /** @class */ (function (_super) {
    __extends(KwCalledContext, _super);
    function KwCalledContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwCalledContext.prototype.K_CALLED = function () { return this.getToken(CqlParser.K_CALLED, 0); };
    Object.defineProperty(KwCalledContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwCalled; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwCalledContext.prototype.enterRule = function (listener) {
        if (listener.enterKwCalled) {
            listener.enterKwCalled(this);
        }
    };
    // @Override
    KwCalledContext.prototype.exitRule = function (listener) {
        if (listener.exitKwCalled) {
            listener.exitKwCalled(this);
        }
    };
    // @Override
    KwCalledContext.prototype.accept = function (visitor) {
        if (visitor.visitKwCalled) {
            return visitor.visitKwCalled(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwCalledContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwCalledContext = KwCalledContext;
var KwClusteringContext = /** @class */ (function (_super) {
    __extends(KwClusteringContext, _super);
    function KwClusteringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwClusteringContext.prototype.K_CLUSTERING = function () { return this.getToken(CqlParser.K_CLUSTERING, 0); };
    Object.defineProperty(KwClusteringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwClustering; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwClusteringContext.prototype.enterRule = function (listener) {
        if (listener.enterKwClustering) {
            listener.enterKwClustering(this);
        }
    };
    // @Override
    KwClusteringContext.prototype.exitRule = function (listener) {
        if (listener.exitKwClustering) {
            listener.exitKwClustering(this);
        }
    };
    // @Override
    KwClusteringContext.prototype.accept = function (visitor) {
        if (visitor.visitKwClustering) {
            return visitor.visitKwClustering(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwClusteringContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwClusteringContext = KwClusteringContext;
var KwCompactContext = /** @class */ (function (_super) {
    __extends(KwCompactContext, _super);
    function KwCompactContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwCompactContext.prototype.K_COMPACT = function () { return this.getToken(CqlParser.K_COMPACT, 0); };
    Object.defineProperty(KwCompactContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwCompact; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwCompactContext.prototype.enterRule = function (listener) {
        if (listener.enterKwCompact) {
            listener.enterKwCompact(this);
        }
    };
    // @Override
    KwCompactContext.prototype.exitRule = function (listener) {
        if (listener.exitKwCompact) {
            listener.exitKwCompact(this);
        }
    };
    // @Override
    KwCompactContext.prototype.accept = function (visitor) {
        if (visitor.visitKwCompact) {
            return visitor.visitKwCompact(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwCompactContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwCompactContext = KwCompactContext;
var KwContainsContext = /** @class */ (function (_super) {
    __extends(KwContainsContext, _super);
    function KwContainsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwContainsContext.prototype.K_CONTAINS = function () { return this.getToken(CqlParser.K_CONTAINS, 0); };
    Object.defineProperty(KwContainsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwContains; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwContainsContext.prototype.enterRule = function (listener) {
        if (listener.enterKwContains) {
            listener.enterKwContains(this);
        }
    };
    // @Override
    KwContainsContext.prototype.exitRule = function (listener) {
        if (listener.exitKwContains) {
            listener.exitKwContains(this);
        }
    };
    // @Override
    KwContainsContext.prototype.accept = function (visitor) {
        if (visitor.visitKwContains) {
            return visitor.visitKwContains(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwContainsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwContainsContext = KwContainsContext;
var KwCreateContext = /** @class */ (function (_super) {
    __extends(KwCreateContext, _super);
    function KwCreateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwCreateContext.prototype.K_CREATE = function () { return this.getToken(CqlParser.K_CREATE, 0); };
    Object.defineProperty(KwCreateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwCreate; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwCreateContext.prototype.enterRule = function (listener) {
        if (listener.enterKwCreate) {
            listener.enterKwCreate(this);
        }
    };
    // @Override
    KwCreateContext.prototype.exitRule = function (listener) {
        if (listener.exitKwCreate) {
            listener.exitKwCreate(this);
        }
    };
    // @Override
    KwCreateContext.prototype.accept = function (visitor) {
        if (visitor.visitKwCreate) {
            return visitor.visitKwCreate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwCreateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwCreateContext = KwCreateContext;
var KwDeleteContext = /** @class */ (function (_super) {
    __extends(KwDeleteContext, _super);
    function KwDeleteContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwDeleteContext.prototype.K_DELETE = function () { return this.getToken(CqlParser.K_DELETE, 0); };
    Object.defineProperty(KwDeleteContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwDelete; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwDeleteContext.prototype.enterRule = function (listener) {
        if (listener.enterKwDelete) {
            listener.enterKwDelete(this);
        }
    };
    // @Override
    KwDeleteContext.prototype.exitRule = function (listener) {
        if (listener.exitKwDelete) {
            listener.exitKwDelete(this);
        }
    };
    // @Override
    KwDeleteContext.prototype.accept = function (visitor) {
        if (visitor.visitKwDelete) {
            return visitor.visitKwDelete(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwDeleteContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwDeleteContext = KwDeleteContext;
var KwDescContext = /** @class */ (function (_super) {
    __extends(KwDescContext, _super);
    function KwDescContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwDescContext.prototype.K_DESC = function () { return this.getToken(CqlParser.K_DESC, 0); };
    Object.defineProperty(KwDescContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwDesc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwDescContext.prototype.enterRule = function (listener) {
        if (listener.enterKwDesc) {
            listener.enterKwDesc(this);
        }
    };
    // @Override
    KwDescContext.prototype.exitRule = function (listener) {
        if (listener.exitKwDesc) {
            listener.exitKwDesc(this);
        }
    };
    // @Override
    KwDescContext.prototype.accept = function (visitor) {
        if (visitor.visitKwDesc) {
            return visitor.visitKwDesc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwDescContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwDescContext = KwDescContext;
var KwDescibeContext = /** @class */ (function (_super) {
    __extends(KwDescibeContext, _super);
    function KwDescibeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwDescibeContext.prototype.K_DESCRIBE = function () { return this.getToken(CqlParser.K_DESCRIBE, 0); };
    Object.defineProperty(KwDescibeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwDescibe; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwDescibeContext.prototype.enterRule = function (listener) {
        if (listener.enterKwDescibe) {
            listener.enterKwDescibe(this);
        }
    };
    // @Override
    KwDescibeContext.prototype.exitRule = function (listener) {
        if (listener.exitKwDescibe) {
            listener.exitKwDescibe(this);
        }
    };
    // @Override
    KwDescibeContext.prototype.accept = function (visitor) {
        if (visitor.visitKwDescibe) {
            return visitor.visitKwDescibe(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwDescibeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwDescibeContext = KwDescibeContext;
var KwDistinctContext = /** @class */ (function (_super) {
    __extends(KwDistinctContext, _super);
    function KwDistinctContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwDistinctContext.prototype.K_DISTINCT = function () { return this.getToken(CqlParser.K_DISTINCT, 0); };
    Object.defineProperty(KwDistinctContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwDistinct; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwDistinctContext.prototype.enterRule = function (listener) {
        if (listener.enterKwDistinct) {
            listener.enterKwDistinct(this);
        }
    };
    // @Override
    KwDistinctContext.prototype.exitRule = function (listener) {
        if (listener.exitKwDistinct) {
            listener.exitKwDistinct(this);
        }
    };
    // @Override
    KwDistinctContext.prototype.accept = function (visitor) {
        if (visitor.visitKwDistinct) {
            return visitor.visitKwDistinct(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwDistinctContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwDistinctContext = KwDistinctContext;
var KwDropContext = /** @class */ (function (_super) {
    __extends(KwDropContext, _super);
    function KwDropContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwDropContext.prototype.K_DROP = function () { return this.getToken(CqlParser.K_DROP, 0); };
    Object.defineProperty(KwDropContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwDrop; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwDropContext.prototype.enterRule = function (listener) {
        if (listener.enterKwDrop) {
            listener.enterKwDrop(this);
        }
    };
    // @Override
    KwDropContext.prototype.exitRule = function (listener) {
        if (listener.exitKwDrop) {
            listener.exitKwDrop(this);
        }
    };
    // @Override
    KwDropContext.prototype.accept = function (visitor) {
        if (visitor.visitKwDrop) {
            return visitor.visitKwDrop(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwDropContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwDropContext = KwDropContext;
var KwDurableWritesContext = /** @class */ (function (_super) {
    __extends(KwDurableWritesContext, _super);
    function KwDurableWritesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwDurableWritesContext.prototype.K_DURABLE_WRITES = function () { return this.getToken(CqlParser.K_DURABLE_WRITES, 0); };
    Object.defineProperty(KwDurableWritesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwDurableWrites; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwDurableWritesContext.prototype.enterRule = function (listener) {
        if (listener.enterKwDurableWrites) {
            listener.enterKwDurableWrites(this);
        }
    };
    // @Override
    KwDurableWritesContext.prototype.exitRule = function (listener) {
        if (listener.exitKwDurableWrites) {
            listener.exitKwDurableWrites(this);
        }
    };
    // @Override
    KwDurableWritesContext.prototype.accept = function (visitor) {
        if (visitor.visitKwDurableWrites) {
            return visitor.visitKwDurableWrites(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwDurableWritesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwDurableWritesContext = KwDurableWritesContext;
var KwEntriesContext = /** @class */ (function (_super) {
    __extends(KwEntriesContext, _super);
    function KwEntriesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwEntriesContext.prototype.K_ENTRIES = function () { return this.getToken(CqlParser.K_ENTRIES, 0); };
    Object.defineProperty(KwEntriesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwEntries; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwEntriesContext.prototype.enterRule = function (listener) {
        if (listener.enterKwEntries) {
            listener.enterKwEntries(this);
        }
    };
    // @Override
    KwEntriesContext.prototype.exitRule = function (listener) {
        if (listener.exitKwEntries) {
            listener.exitKwEntries(this);
        }
    };
    // @Override
    KwEntriesContext.prototype.accept = function (visitor) {
        if (visitor.visitKwEntries) {
            return visitor.visitKwEntries(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwEntriesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwEntriesContext = KwEntriesContext;
var KwExecuteContext = /** @class */ (function (_super) {
    __extends(KwExecuteContext, _super);
    function KwExecuteContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwExecuteContext.prototype.K_EXECUTE = function () { return this.getToken(CqlParser.K_EXECUTE, 0); };
    Object.defineProperty(KwExecuteContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwExecute; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwExecuteContext.prototype.enterRule = function (listener) {
        if (listener.enterKwExecute) {
            listener.enterKwExecute(this);
        }
    };
    // @Override
    KwExecuteContext.prototype.exitRule = function (listener) {
        if (listener.exitKwExecute) {
            listener.exitKwExecute(this);
        }
    };
    // @Override
    KwExecuteContext.prototype.accept = function (visitor) {
        if (visitor.visitKwExecute) {
            return visitor.visitKwExecute(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwExecuteContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwExecuteContext = KwExecuteContext;
var KwExistsContext = /** @class */ (function (_super) {
    __extends(KwExistsContext, _super);
    function KwExistsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwExistsContext.prototype.K_EXISTS = function () { return this.getToken(CqlParser.K_EXISTS, 0); };
    Object.defineProperty(KwExistsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwExists; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwExistsContext.prototype.enterRule = function (listener) {
        if (listener.enterKwExists) {
            listener.enterKwExists(this);
        }
    };
    // @Override
    KwExistsContext.prototype.exitRule = function (listener) {
        if (listener.exitKwExists) {
            listener.exitKwExists(this);
        }
    };
    // @Override
    KwExistsContext.prototype.accept = function (visitor) {
        if (visitor.visitKwExists) {
            return visitor.visitKwExists(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwExistsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwExistsContext = KwExistsContext;
var KwFilteringContext = /** @class */ (function (_super) {
    __extends(KwFilteringContext, _super);
    function KwFilteringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwFilteringContext.prototype.K_FILTERING = function () { return this.getToken(CqlParser.K_FILTERING, 0); };
    Object.defineProperty(KwFilteringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwFiltering; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwFilteringContext.prototype.enterRule = function (listener) {
        if (listener.enterKwFiltering) {
            listener.enterKwFiltering(this);
        }
    };
    // @Override
    KwFilteringContext.prototype.exitRule = function (listener) {
        if (listener.exitKwFiltering) {
            listener.exitKwFiltering(this);
        }
    };
    // @Override
    KwFilteringContext.prototype.accept = function (visitor) {
        if (visitor.visitKwFiltering) {
            return visitor.visitKwFiltering(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwFilteringContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwFilteringContext = KwFilteringContext;
var KwFinalfuncContext = /** @class */ (function (_super) {
    __extends(KwFinalfuncContext, _super);
    function KwFinalfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwFinalfuncContext.prototype.K_FINALFUNC = function () { return this.getToken(CqlParser.K_FINALFUNC, 0); };
    Object.defineProperty(KwFinalfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwFinalfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwFinalfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterKwFinalfunc) {
            listener.enterKwFinalfunc(this);
        }
    };
    // @Override
    KwFinalfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitKwFinalfunc) {
            listener.exitKwFinalfunc(this);
        }
    };
    // @Override
    KwFinalfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitKwFinalfunc) {
            return visitor.visitKwFinalfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwFinalfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwFinalfuncContext = KwFinalfuncContext;
var KwFromContext = /** @class */ (function (_super) {
    __extends(KwFromContext, _super);
    function KwFromContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwFromContext.prototype.K_FROM = function () { return this.getToken(CqlParser.K_FROM, 0); };
    Object.defineProperty(KwFromContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwFrom; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwFromContext.prototype.enterRule = function (listener) {
        if (listener.enterKwFrom) {
            listener.enterKwFrom(this);
        }
    };
    // @Override
    KwFromContext.prototype.exitRule = function (listener) {
        if (listener.exitKwFrom) {
            listener.exitKwFrom(this);
        }
    };
    // @Override
    KwFromContext.prototype.accept = function (visitor) {
        if (visitor.visitKwFrom) {
            return visitor.visitKwFrom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwFromContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwFromContext = KwFromContext;
var KwFullContext = /** @class */ (function (_super) {
    __extends(KwFullContext, _super);
    function KwFullContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwFullContext.prototype.K_FULL = function () { return this.getToken(CqlParser.K_FULL, 0); };
    Object.defineProperty(KwFullContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwFull; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwFullContext.prototype.enterRule = function (listener) {
        if (listener.enterKwFull) {
            listener.enterKwFull(this);
        }
    };
    // @Override
    KwFullContext.prototype.exitRule = function (listener) {
        if (listener.exitKwFull) {
            listener.exitKwFull(this);
        }
    };
    // @Override
    KwFullContext.prototype.accept = function (visitor) {
        if (visitor.visitKwFull) {
            return visitor.visitKwFull(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwFullContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwFullContext = KwFullContext;
var KwFunctionContext = /** @class */ (function (_super) {
    __extends(KwFunctionContext, _super);
    function KwFunctionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwFunctionContext.prototype.K_FUNCTION = function () { return this.getToken(CqlParser.K_FUNCTION, 0); };
    Object.defineProperty(KwFunctionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwFunction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwFunctionContext.prototype.enterRule = function (listener) {
        if (listener.enterKwFunction) {
            listener.enterKwFunction(this);
        }
    };
    // @Override
    KwFunctionContext.prototype.exitRule = function (listener) {
        if (listener.exitKwFunction) {
            listener.exitKwFunction(this);
        }
    };
    // @Override
    KwFunctionContext.prototype.accept = function (visitor) {
        if (visitor.visitKwFunction) {
            return visitor.visitKwFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwFunctionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwFunctionContext = KwFunctionContext;
var KwFunctionsContext = /** @class */ (function (_super) {
    __extends(KwFunctionsContext, _super);
    function KwFunctionsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwFunctionsContext.prototype.K_FUNCTIONS = function () { return this.getToken(CqlParser.K_FUNCTIONS, 0); };
    Object.defineProperty(KwFunctionsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwFunctions; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwFunctionsContext.prototype.enterRule = function (listener) {
        if (listener.enterKwFunctions) {
            listener.enterKwFunctions(this);
        }
    };
    // @Override
    KwFunctionsContext.prototype.exitRule = function (listener) {
        if (listener.exitKwFunctions) {
            listener.exitKwFunctions(this);
        }
    };
    // @Override
    KwFunctionsContext.prototype.accept = function (visitor) {
        if (visitor.visitKwFunctions) {
            return visitor.visitKwFunctions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwFunctionsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwFunctionsContext = KwFunctionsContext;
var KwGrantContext = /** @class */ (function (_super) {
    __extends(KwGrantContext, _super);
    function KwGrantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwGrantContext.prototype.K_GRANT = function () { return this.getToken(CqlParser.K_GRANT, 0); };
    Object.defineProperty(KwGrantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwGrant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwGrantContext.prototype.enterRule = function (listener) {
        if (listener.enterKwGrant) {
            listener.enterKwGrant(this);
        }
    };
    // @Override
    KwGrantContext.prototype.exitRule = function (listener) {
        if (listener.exitKwGrant) {
            listener.exitKwGrant(this);
        }
    };
    // @Override
    KwGrantContext.prototype.accept = function (visitor) {
        if (visitor.visitKwGrant) {
            return visitor.visitKwGrant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwGrantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwGrantContext = KwGrantContext;
var KwIfContext = /** @class */ (function (_super) {
    __extends(KwIfContext, _super);
    function KwIfContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwIfContext.prototype.K_IF = function () { return this.getToken(CqlParser.K_IF, 0); };
    Object.defineProperty(KwIfContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwIf; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwIfContext.prototype.enterRule = function (listener) {
        if (listener.enterKwIf) {
            listener.enterKwIf(this);
        }
    };
    // @Override
    KwIfContext.prototype.exitRule = function (listener) {
        if (listener.exitKwIf) {
            listener.exitKwIf(this);
        }
    };
    // @Override
    KwIfContext.prototype.accept = function (visitor) {
        if (visitor.visitKwIf) {
            return visitor.visitKwIf(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwIfContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwIfContext = KwIfContext;
var KwInContext = /** @class */ (function (_super) {
    __extends(KwInContext, _super);
    function KwInContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwInContext.prototype.K_IN = function () { return this.getToken(CqlParser.K_IN, 0); };
    Object.defineProperty(KwInContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwIn; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwInContext.prototype.enterRule = function (listener) {
        if (listener.enterKwIn) {
            listener.enterKwIn(this);
        }
    };
    // @Override
    KwInContext.prototype.exitRule = function (listener) {
        if (listener.exitKwIn) {
            listener.exitKwIn(this);
        }
    };
    // @Override
    KwInContext.prototype.accept = function (visitor) {
        if (visitor.visitKwIn) {
            return visitor.visitKwIn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwInContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwInContext = KwInContext;
var KwIndexContext = /** @class */ (function (_super) {
    __extends(KwIndexContext, _super);
    function KwIndexContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwIndexContext.prototype.K_INDEX = function () { return this.getToken(CqlParser.K_INDEX, 0); };
    Object.defineProperty(KwIndexContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwIndex; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwIndexContext.prototype.enterRule = function (listener) {
        if (listener.enterKwIndex) {
            listener.enterKwIndex(this);
        }
    };
    // @Override
    KwIndexContext.prototype.exitRule = function (listener) {
        if (listener.exitKwIndex) {
            listener.exitKwIndex(this);
        }
    };
    // @Override
    KwIndexContext.prototype.accept = function (visitor) {
        if (visitor.visitKwIndex) {
            return visitor.visitKwIndex(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwIndexContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwIndexContext = KwIndexContext;
var KwInitcondContext = /** @class */ (function (_super) {
    __extends(KwInitcondContext, _super);
    function KwInitcondContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwInitcondContext.prototype.K_INITCOND = function () { return this.getToken(CqlParser.K_INITCOND, 0); };
    Object.defineProperty(KwInitcondContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwInitcond; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwInitcondContext.prototype.enterRule = function (listener) {
        if (listener.enterKwInitcond) {
            listener.enterKwInitcond(this);
        }
    };
    // @Override
    KwInitcondContext.prototype.exitRule = function (listener) {
        if (listener.exitKwInitcond) {
            listener.exitKwInitcond(this);
        }
    };
    // @Override
    KwInitcondContext.prototype.accept = function (visitor) {
        if (visitor.visitKwInitcond) {
            return visitor.visitKwInitcond(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwInitcondContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwInitcondContext = KwInitcondContext;
var KwInputContext = /** @class */ (function (_super) {
    __extends(KwInputContext, _super);
    function KwInputContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwInputContext.prototype.K_INPUT = function () { return this.getToken(CqlParser.K_INPUT, 0); };
    Object.defineProperty(KwInputContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwInput; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwInputContext.prototype.enterRule = function (listener) {
        if (listener.enterKwInput) {
            listener.enterKwInput(this);
        }
    };
    // @Override
    KwInputContext.prototype.exitRule = function (listener) {
        if (listener.exitKwInput) {
            listener.exitKwInput(this);
        }
    };
    // @Override
    KwInputContext.prototype.accept = function (visitor) {
        if (visitor.visitKwInput) {
            return visitor.visitKwInput(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwInputContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwInputContext = KwInputContext;
var KwInsertContext = /** @class */ (function (_super) {
    __extends(KwInsertContext, _super);
    function KwInsertContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwInsertContext.prototype.K_INSERT = function () { return this.getToken(CqlParser.K_INSERT, 0); };
    Object.defineProperty(KwInsertContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwInsert; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwInsertContext.prototype.enterRule = function (listener) {
        if (listener.enterKwInsert) {
            listener.enterKwInsert(this);
        }
    };
    // @Override
    KwInsertContext.prototype.exitRule = function (listener) {
        if (listener.exitKwInsert) {
            listener.exitKwInsert(this);
        }
    };
    // @Override
    KwInsertContext.prototype.accept = function (visitor) {
        if (visitor.visitKwInsert) {
            return visitor.visitKwInsert(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwInsertContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwInsertContext = KwInsertContext;
var KwIntoContext = /** @class */ (function (_super) {
    __extends(KwIntoContext, _super);
    function KwIntoContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwIntoContext.prototype.K_INTO = function () { return this.getToken(CqlParser.K_INTO, 0); };
    Object.defineProperty(KwIntoContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwInto; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwIntoContext.prototype.enterRule = function (listener) {
        if (listener.enterKwInto) {
            listener.enterKwInto(this);
        }
    };
    // @Override
    KwIntoContext.prototype.exitRule = function (listener) {
        if (listener.exitKwInto) {
            listener.exitKwInto(this);
        }
    };
    // @Override
    KwIntoContext.prototype.accept = function (visitor) {
        if (visitor.visitKwInto) {
            return visitor.visitKwInto(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwIntoContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwIntoContext = KwIntoContext;
var KwIsContext = /** @class */ (function (_super) {
    __extends(KwIsContext, _super);
    function KwIsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwIsContext.prototype.K_IS = function () { return this.getToken(CqlParser.K_IS, 0); };
    Object.defineProperty(KwIsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwIs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwIsContext.prototype.enterRule = function (listener) {
        if (listener.enterKwIs) {
            listener.enterKwIs(this);
        }
    };
    // @Override
    KwIsContext.prototype.exitRule = function (listener) {
        if (listener.exitKwIs) {
            listener.exitKwIs(this);
        }
    };
    // @Override
    KwIsContext.prototype.accept = function (visitor) {
        if (visitor.visitKwIs) {
            return visitor.visitKwIs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwIsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwIsContext = KwIsContext;
var KwKeyContext = /** @class */ (function (_super) {
    __extends(KwKeyContext, _super);
    function KwKeyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwKeyContext.prototype.K_KEY = function () { return this.getToken(CqlParser.K_KEY, 0); };
    Object.defineProperty(KwKeyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwKey; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwKeyContext.prototype.enterRule = function (listener) {
        if (listener.enterKwKey) {
            listener.enterKwKey(this);
        }
    };
    // @Override
    KwKeyContext.prototype.exitRule = function (listener) {
        if (listener.exitKwKey) {
            listener.exitKwKey(this);
        }
    };
    // @Override
    KwKeyContext.prototype.accept = function (visitor) {
        if (visitor.visitKwKey) {
            return visitor.visitKwKey(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwKeyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwKeyContext = KwKeyContext;
var KwKeysContext = /** @class */ (function (_super) {
    __extends(KwKeysContext, _super);
    function KwKeysContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwKeysContext.prototype.K_KEYS = function () { return this.getToken(CqlParser.K_KEYS, 0); };
    Object.defineProperty(KwKeysContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwKeys; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwKeysContext.prototype.enterRule = function (listener) {
        if (listener.enterKwKeys) {
            listener.enterKwKeys(this);
        }
    };
    // @Override
    KwKeysContext.prototype.exitRule = function (listener) {
        if (listener.exitKwKeys) {
            listener.exitKwKeys(this);
        }
    };
    // @Override
    KwKeysContext.prototype.accept = function (visitor) {
        if (visitor.visitKwKeys) {
            return visitor.visitKwKeys(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwKeysContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwKeysContext = KwKeysContext;
var KwKeyspaceContext = /** @class */ (function (_super) {
    __extends(KwKeyspaceContext, _super);
    function KwKeyspaceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwKeyspaceContext.prototype.K_KEYSPACE = function () { return this.getToken(CqlParser.K_KEYSPACE, 0); };
    Object.defineProperty(KwKeyspaceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwKeyspace; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwKeyspaceContext.prototype.enterRule = function (listener) {
        if (listener.enterKwKeyspace) {
            listener.enterKwKeyspace(this);
        }
    };
    // @Override
    KwKeyspaceContext.prototype.exitRule = function (listener) {
        if (listener.exitKwKeyspace) {
            listener.exitKwKeyspace(this);
        }
    };
    // @Override
    KwKeyspaceContext.prototype.accept = function (visitor) {
        if (visitor.visitKwKeyspace) {
            return visitor.visitKwKeyspace(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwKeyspaceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwKeyspaceContext = KwKeyspaceContext;
var KwKeyspacesContext = /** @class */ (function (_super) {
    __extends(KwKeyspacesContext, _super);
    function KwKeyspacesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwKeyspacesContext.prototype.K_KEYSPACES = function () { return this.getToken(CqlParser.K_KEYSPACES, 0); };
    Object.defineProperty(KwKeyspacesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwKeyspaces; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwKeyspacesContext.prototype.enterRule = function (listener) {
        if (listener.enterKwKeyspaces) {
            listener.enterKwKeyspaces(this);
        }
    };
    // @Override
    KwKeyspacesContext.prototype.exitRule = function (listener) {
        if (listener.exitKwKeyspaces) {
            listener.exitKwKeyspaces(this);
        }
    };
    // @Override
    KwKeyspacesContext.prototype.accept = function (visitor) {
        if (visitor.visitKwKeyspaces) {
            return visitor.visitKwKeyspaces(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwKeyspacesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwKeyspacesContext = KwKeyspacesContext;
var KwLanguageContext = /** @class */ (function (_super) {
    __extends(KwLanguageContext, _super);
    function KwLanguageContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwLanguageContext.prototype.K_LANGUAGE = function () { return this.getToken(CqlParser.K_LANGUAGE, 0); };
    Object.defineProperty(KwLanguageContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwLanguage; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwLanguageContext.prototype.enterRule = function (listener) {
        if (listener.enterKwLanguage) {
            listener.enterKwLanguage(this);
        }
    };
    // @Override
    KwLanguageContext.prototype.exitRule = function (listener) {
        if (listener.exitKwLanguage) {
            listener.exitKwLanguage(this);
        }
    };
    // @Override
    KwLanguageContext.prototype.accept = function (visitor) {
        if (visitor.visitKwLanguage) {
            return visitor.visitKwLanguage(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwLanguageContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwLanguageContext = KwLanguageContext;
var KwLimitContext = /** @class */ (function (_super) {
    __extends(KwLimitContext, _super);
    function KwLimitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwLimitContext.prototype.K_LIMIT = function () { return this.getToken(CqlParser.K_LIMIT, 0); };
    Object.defineProperty(KwLimitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwLimit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwLimitContext.prototype.enterRule = function (listener) {
        if (listener.enterKwLimit) {
            listener.enterKwLimit(this);
        }
    };
    // @Override
    KwLimitContext.prototype.exitRule = function (listener) {
        if (listener.exitKwLimit) {
            listener.exitKwLimit(this);
        }
    };
    // @Override
    KwLimitContext.prototype.accept = function (visitor) {
        if (visitor.visitKwLimit) {
            return visitor.visitKwLimit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwLimitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwLimitContext = KwLimitContext;
var KwListContext = /** @class */ (function (_super) {
    __extends(KwListContext, _super);
    function KwListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwListContext.prototype.K_LIST = function () { return this.getToken(CqlParser.K_LIST, 0); };
    Object.defineProperty(KwListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwListContext.prototype.enterRule = function (listener) {
        if (listener.enterKwList) {
            listener.enterKwList(this);
        }
    };
    // @Override
    KwListContext.prototype.exitRule = function (listener) {
        if (listener.exitKwList) {
            listener.exitKwList(this);
        }
    };
    // @Override
    KwListContext.prototype.accept = function (visitor) {
        if (visitor.visitKwList) {
            return visitor.visitKwList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwListContext = KwListContext;
var KwLoggedContext = /** @class */ (function (_super) {
    __extends(KwLoggedContext, _super);
    function KwLoggedContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwLoggedContext.prototype.K_LOGGED = function () { return this.getToken(CqlParser.K_LOGGED, 0); };
    Object.defineProperty(KwLoggedContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwLogged; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwLoggedContext.prototype.enterRule = function (listener) {
        if (listener.enterKwLogged) {
            listener.enterKwLogged(this);
        }
    };
    // @Override
    KwLoggedContext.prototype.exitRule = function (listener) {
        if (listener.exitKwLogged) {
            listener.exitKwLogged(this);
        }
    };
    // @Override
    KwLoggedContext.prototype.accept = function (visitor) {
        if (visitor.visitKwLogged) {
            return visitor.visitKwLogged(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwLoggedContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwLoggedContext = KwLoggedContext;
var KwLoginContext = /** @class */ (function (_super) {
    __extends(KwLoginContext, _super);
    function KwLoginContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwLoginContext.prototype.K_LOGIN = function () { return this.getToken(CqlParser.K_LOGIN, 0); };
    Object.defineProperty(KwLoginContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwLogin; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwLoginContext.prototype.enterRule = function (listener) {
        if (listener.enterKwLogin) {
            listener.enterKwLogin(this);
        }
    };
    // @Override
    KwLoginContext.prototype.exitRule = function (listener) {
        if (listener.exitKwLogin) {
            listener.exitKwLogin(this);
        }
    };
    // @Override
    KwLoginContext.prototype.accept = function (visitor) {
        if (visitor.visitKwLogin) {
            return visitor.visitKwLogin(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwLoginContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwLoginContext = KwLoginContext;
var KwMaterializedContext = /** @class */ (function (_super) {
    __extends(KwMaterializedContext, _super);
    function KwMaterializedContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwMaterializedContext.prototype.K_MATERIALIZED = function () { return this.getToken(CqlParser.K_MATERIALIZED, 0); };
    Object.defineProperty(KwMaterializedContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwMaterialized; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwMaterializedContext.prototype.enterRule = function (listener) {
        if (listener.enterKwMaterialized) {
            listener.enterKwMaterialized(this);
        }
    };
    // @Override
    KwMaterializedContext.prototype.exitRule = function (listener) {
        if (listener.exitKwMaterialized) {
            listener.exitKwMaterialized(this);
        }
    };
    // @Override
    KwMaterializedContext.prototype.accept = function (visitor) {
        if (visitor.visitKwMaterialized) {
            return visitor.visitKwMaterialized(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwMaterializedContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwMaterializedContext = KwMaterializedContext;
var KwModifyContext = /** @class */ (function (_super) {
    __extends(KwModifyContext, _super);
    function KwModifyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwModifyContext.prototype.K_MODIFY = function () { return this.getToken(CqlParser.K_MODIFY, 0); };
    Object.defineProperty(KwModifyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwModify; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwModifyContext.prototype.enterRule = function (listener) {
        if (listener.enterKwModify) {
            listener.enterKwModify(this);
        }
    };
    // @Override
    KwModifyContext.prototype.exitRule = function (listener) {
        if (listener.exitKwModify) {
            listener.exitKwModify(this);
        }
    };
    // @Override
    KwModifyContext.prototype.accept = function (visitor) {
        if (visitor.visitKwModify) {
            return visitor.visitKwModify(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwModifyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwModifyContext = KwModifyContext;
var KwNosuperuserContext = /** @class */ (function (_super) {
    __extends(KwNosuperuserContext, _super);
    function KwNosuperuserContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwNosuperuserContext.prototype.K_NOSUPERUSER = function () { return this.getToken(CqlParser.K_NOSUPERUSER, 0); };
    Object.defineProperty(KwNosuperuserContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwNosuperuser; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwNosuperuserContext.prototype.enterRule = function (listener) {
        if (listener.enterKwNosuperuser) {
            listener.enterKwNosuperuser(this);
        }
    };
    // @Override
    KwNosuperuserContext.prototype.exitRule = function (listener) {
        if (listener.exitKwNosuperuser) {
            listener.exitKwNosuperuser(this);
        }
    };
    // @Override
    KwNosuperuserContext.prototype.accept = function (visitor) {
        if (visitor.visitKwNosuperuser) {
            return visitor.visitKwNosuperuser(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwNosuperuserContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwNosuperuserContext = KwNosuperuserContext;
var KwNorecursiveContext = /** @class */ (function (_super) {
    __extends(KwNorecursiveContext, _super);
    function KwNorecursiveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwNorecursiveContext.prototype.K_NORECURSIVE = function () { return this.getToken(CqlParser.K_NORECURSIVE, 0); };
    Object.defineProperty(KwNorecursiveContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwNorecursive; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwNorecursiveContext.prototype.enterRule = function (listener) {
        if (listener.enterKwNorecursive) {
            listener.enterKwNorecursive(this);
        }
    };
    // @Override
    KwNorecursiveContext.prototype.exitRule = function (listener) {
        if (listener.exitKwNorecursive) {
            listener.exitKwNorecursive(this);
        }
    };
    // @Override
    KwNorecursiveContext.prototype.accept = function (visitor) {
        if (visitor.visitKwNorecursive) {
            return visitor.visitKwNorecursive(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwNorecursiveContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwNorecursiveContext = KwNorecursiveContext;
var KwNotContext = /** @class */ (function (_super) {
    __extends(KwNotContext, _super);
    function KwNotContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwNotContext.prototype.K_NOT = function () { return this.getToken(CqlParser.K_NOT, 0); };
    Object.defineProperty(KwNotContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwNot; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwNotContext.prototype.enterRule = function (listener) {
        if (listener.enterKwNot) {
            listener.enterKwNot(this);
        }
    };
    // @Override
    KwNotContext.prototype.exitRule = function (listener) {
        if (listener.exitKwNot) {
            listener.exitKwNot(this);
        }
    };
    // @Override
    KwNotContext.prototype.accept = function (visitor) {
        if (visitor.visitKwNot) {
            return visitor.visitKwNot(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwNotContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwNotContext = KwNotContext;
var KwNullContext = /** @class */ (function (_super) {
    __extends(KwNullContext, _super);
    function KwNullContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwNullContext.prototype.K_NULL = function () { return this.getToken(CqlParser.K_NULL, 0); };
    Object.defineProperty(KwNullContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwNull; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwNullContext.prototype.enterRule = function (listener) {
        if (listener.enterKwNull) {
            listener.enterKwNull(this);
        }
    };
    // @Override
    KwNullContext.prototype.exitRule = function (listener) {
        if (listener.exitKwNull) {
            listener.exitKwNull(this);
        }
    };
    // @Override
    KwNullContext.prototype.accept = function (visitor) {
        if (visitor.visitKwNull) {
            return visitor.visitKwNull(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwNullContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwNullContext = KwNullContext;
var KwOfContext = /** @class */ (function (_super) {
    __extends(KwOfContext, _super);
    function KwOfContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwOfContext.prototype.K_OF = function () { return this.getToken(CqlParser.K_OF, 0); };
    Object.defineProperty(KwOfContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwOf; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwOfContext.prototype.enterRule = function (listener) {
        if (listener.enterKwOf) {
            listener.enterKwOf(this);
        }
    };
    // @Override
    KwOfContext.prototype.exitRule = function (listener) {
        if (listener.exitKwOf) {
            listener.exitKwOf(this);
        }
    };
    // @Override
    KwOfContext.prototype.accept = function (visitor) {
        if (visitor.visitKwOf) {
            return visitor.visitKwOf(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwOfContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwOfContext = KwOfContext;
var KwOnContext = /** @class */ (function (_super) {
    __extends(KwOnContext, _super);
    function KwOnContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwOnContext.prototype.K_ON = function () { return this.getToken(CqlParser.K_ON, 0); };
    Object.defineProperty(KwOnContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwOn; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwOnContext.prototype.enterRule = function (listener) {
        if (listener.enterKwOn) {
            listener.enterKwOn(this);
        }
    };
    // @Override
    KwOnContext.prototype.exitRule = function (listener) {
        if (listener.exitKwOn) {
            listener.exitKwOn(this);
        }
    };
    // @Override
    KwOnContext.prototype.accept = function (visitor) {
        if (visitor.visitKwOn) {
            return visitor.visitKwOn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwOnContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwOnContext = KwOnContext;
var KwOptionsContext = /** @class */ (function (_super) {
    __extends(KwOptionsContext, _super);
    function KwOptionsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwOptionsContext.prototype.K_OPTIONS = function () { return this.getToken(CqlParser.K_OPTIONS, 0); };
    Object.defineProperty(KwOptionsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwOptions; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwOptionsContext.prototype.enterRule = function (listener) {
        if (listener.enterKwOptions) {
            listener.enterKwOptions(this);
        }
    };
    // @Override
    KwOptionsContext.prototype.exitRule = function (listener) {
        if (listener.exitKwOptions) {
            listener.exitKwOptions(this);
        }
    };
    // @Override
    KwOptionsContext.prototype.accept = function (visitor) {
        if (visitor.visitKwOptions) {
            return visitor.visitKwOptions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwOptionsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwOptionsContext = KwOptionsContext;
var KwOrContext = /** @class */ (function (_super) {
    __extends(KwOrContext, _super);
    function KwOrContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwOrContext.prototype.K_OR = function () { return this.getToken(CqlParser.K_OR, 0); };
    Object.defineProperty(KwOrContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwOr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwOrContext.prototype.enterRule = function (listener) {
        if (listener.enterKwOr) {
            listener.enterKwOr(this);
        }
    };
    // @Override
    KwOrContext.prototype.exitRule = function (listener) {
        if (listener.exitKwOr) {
            listener.exitKwOr(this);
        }
    };
    // @Override
    KwOrContext.prototype.accept = function (visitor) {
        if (visitor.visitKwOr) {
            return visitor.visitKwOr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwOrContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwOrContext = KwOrContext;
var KwOrderContext = /** @class */ (function (_super) {
    __extends(KwOrderContext, _super);
    function KwOrderContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwOrderContext.prototype.K_ORDER = function () { return this.getToken(CqlParser.K_ORDER, 0); };
    Object.defineProperty(KwOrderContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwOrder; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwOrderContext.prototype.enterRule = function (listener) {
        if (listener.enterKwOrder) {
            listener.enterKwOrder(this);
        }
    };
    // @Override
    KwOrderContext.prototype.exitRule = function (listener) {
        if (listener.exitKwOrder) {
            listener.exitKwOrder(this);
        }
    };
    // @Override
    KwOrderContext.prototype.accept = function (visitor) {
        if (visitor.visitKwOrder) {
            return visitor.visitKwOrder(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwOrderContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwOrderContext = KwOrderContext;
var KwPasswordContext = /** @class */ (function (_super) {
    __extends(KwPasswordContext, _super);
    function KwPasswordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwPasswordContext.prototype.K_PASSWORD = function () { return this.getToken(CqlParser.K_PASSWORD, 0); };
    Object.defineProperty(KwPasswordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwPassword; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwPasswordContext.prototype.enterRule = function (listener) {
        if (listener.enterKwPassword) {
            listener.enterKwPassword(this);
        }
    };
    // @Override
    KwPasswordContext.prototype.exitRule = function (listener) {
        if (listener.exitKwPassword) {
            listener.exitKwPassword(this);
        }
    };
    // @Override
    KwPasswordContext.prototype.accept = function (visitor) {
        if (visitor.visitKwPassword) {
            return visitor.visitKwPassword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwPasswordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwPasswordContext = KwPasswordContext;
var KwPrimaryContext = /** @class */ (function (_super) {
    __extends(KwPrimaryContext, _super);
    function KwPrimaryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwPrimaryContext.prototype.K_PRIMARY = function () { return this.getToken(CqlParser.K_PRIMARY, 0); };
    Object.defineProperty(KwPrimaryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwPrimary; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwPrimaryContext.prototype.enterRule = function (listener) {
        if (listener.enterKwPrimary) {
            listener.enterKwPrimary(this);
        }
    };
    // @Override
    KwPrimaryContext.prototype.exitRule = function (listener) {
        if (listener.exitKwPrimary) {
            listener.exitKwPrimary(this);
        }
    };
    // @Override
    KwPrimaryContext.prototype.accept = function (visitor) {
        if (visitor.visitKwPrimary) {
            return visitor.visitKwPrimary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwPrimaryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwPrimaryContext = KwPrimaryContext;
var KwRenameContext = /** @class */ (function (_super) {
    __extends(KwRenameContext, _super);
    function KwRenameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwRenameContext.prototype.K_RENAME = function () { return this.getToken(CqlParser.K_RENAME, 0); };
    Object.defineProperty(KwRenameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwRename; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwRenameContext.prototype.enterRule = function (listener) {
        if (listener.enterKwRename) {
            listener.enterKwRename(this);
        }
    };
    // @Override
    KwRenameContext.prototype.exitRule = function (listener) {
        if (listener.exitKwRename) {
            listener.exitKwRename(this);
        }
    };
    // @Override
    KwRenameContext.prototype.accept = function (visitor) {
        if (visitor.visitKwRename) {
            return visitor.visitKwRename(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwRenameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwRenameContext = KwRenameContext;
var KwReplaceContext = /** @class */ (function (_super) {
    __extends(KwReplaceContext, _super);
    function KwReplaceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwReplaceContext.prototype.K_REPLACE = function () { return this.getToken(CqlParser.K_REPLACE, 0); };
    Object.defineProperty(KwReplaceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwReplace; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwReplaceContext.prototype.enterRule = function (listener) {
        if (listener.enterKwReplace) {
            listener.enterKwReplace(this);
        }
    };
    // @Override
    KwReplaceContext.prototype.exitRule = function (listener) {
        if (listener.exitKwReplace) {
            listener.exitKwReplace(this);
        }
    };
    // @Override
    KwReplaceContext.prototype.accept = function (visitor) {
        if (visitor.visitKwReplace) {
            return visitor.visitKwReplace(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwReplaceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwReplaceContext = KwReplaceContext;
var KwReplicationContext = /** @class */ (function (_super) {
    __extends(KwReplicationContext, _super);
    function KwReplicationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwReplicationContext.prototype.K_REPLICATION = function () { return this.getToken(CqlParser.K_REPLICATION, 0); };
    Object.defineProperty(KwReplicationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwReplication; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwReplicationContext.prototype.enterRule = function (listener) {
        if (listener.enterKwReplication) {
            listener.enterKwReplication(this);
        }
    };
    // @Override
    KwReplicationContext.prototype.exitRule = function (listener) {
        if (listener.exitKwReplication) {
            listener.exitKwReplication(this);
        }
    };
    // @Override
    KwReplicationContext.prototype.accept = function (visitor) {
        if (visitor.visitKwReplication) {
            return visitor.visitKwReplication(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwReplicationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwReplicationContext = KwReplicationContext;
var KwReturnsContext = /** @class */ (function (_super) {
    __extends(KwReturnsContext, _super);
    function KwReturnsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwReturnsContext.prototype.K_RETURNS = function () { return this.getToken(CqlParser.K_RETURNS, 0); };
    Object.defineProperty(KwReturnsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwReturns; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwReturnsContext.prototype.enterRule = function (listener) {
        if (listener.enterKwReturns) {
            listener.enterKwReturns(this);
        }
    };
    // @Override
    KwReturnsContext.prototype.exitRule = function (listener) {
        if (listener.exitKwReturns) {
            listener.exitKwReturns(this);
        }
    };
    // @Override
    KwReturnsContext.prototype.accept = function (visitor) {
        if (visitor.visitKwReturns) {
            return visitor.visitKwReturns(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwReturnsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwReturnsContext = KwReturnsContext;
var KwRoleContext = /** @class */ (function (_super) {
    __extends(KwRoleContext, _super);
    function KwRoleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwRoleContext.prototype.K_ROLE = function () { return this.getToken(CqlParser.K_ROLE, 0); };
    Object.defineProperty(KwRoleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwRole; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwRoleContext.prototype.enterRule = function (listener) {
        if (listener.enterKwRole) {
            listener.enterKwRole(this);
        }
    };
    // @Override
    KwRoleContext.prototype.exitRule = function (listener) {
        if (listener.exitKwRole) {
            listener.exitKwRole(this);
        }
    };
    // @Override
    KwRoleContext.prototype.accept = function (visitor) {
        if (visitor.visitKwRole) {
            return visitor.visitKwRole(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwRoleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwRoleContext = KwRoleContext;
var KwRolesContext = /** @class */ (function (_super) {
    __extends(KwRolesContext, _super);
    function KwRolesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwRolesContext.prototype.K_ROLES = function () { return this.getToken(CqlParser.K_ROLES, 0); };
    Object.defineProperty(KwRolesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwRoles; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwRolesContext.prototype.enterRule = function (listener) {
        if (listener.enterKwRoles) {
            listener.enterKwRoles(this);
        }
    };
    // @Override
    KwRolesContext.prototype.exitRule = function (listener) {
        if (listener.exitKwRoles) {
            listener.exitKwRoles(this);
        }
    };
    // @Override
    KwRolesContext.prototype.accept = function (visitor) {
        if (visitor.visitKwRoles) {
            return visitor.visitKwRoles(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwRolesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwRolesContext = KwRolesContext;
var KwSelectContext = /** @class */ (function (_super) {
    __extends(KwSelectContext, _super);
    function KwSelectContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwSelectContext.prototype.K_SELECT = function () { return this.getToken(CqlParser.K_SELECT, 0); };
    Object.defineProperty(KwSelectContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwSelect; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwSelectContext.prototype.enterRule = function (listener) {
        if (listener.enterKwSelect) {
            listener.enterKwSelect(this);
        }
    };
    // @Override
    KwSelectContext.prototype.exitRule = function (listener) {
        if (listener.exitKwSelect) {
            listener.exitKwSelect(this);
        }
    };
    // @Override
    KwSelectContext.prototype.accept = function (visitor) {
        if (visitor.visitKwSelect) {
            return visitor.visitKwSelect(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwSelectContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwSelectContext = KwSelectContext;
var KwSetContext = /** @class */ (function (_super) {
    __extends(KwSetContext, _super);
    function KwSetContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwSetContext.prototype.K_SET = function () { return this.getToken(CqlParser.K_SET, 0); };
    Object.defineProperty(KwSetContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwSet; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwSetContext.prototype.enterRule = function (listener) {
        if (listener.enterKwSet) {
            listener.enterKwSet(this);
        }
    };
    // @Override
    KwSetContext.prototype.exitRule = function (listener) {
        if (listener.exitKwSet) {
            listener.exitKwSet(this);
        }
    };
    // @Override
    KwSetContext.prototype.accept = function (visitor) {
        if (visitor.visitKwSet) {
            return visitor.visitKwSet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwSetContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwSetContext = KwSetContext;
var KwSfuncContext = /** @class */ (function (_super) {
    __extends(KwSfuncContext, _super);
    function KwSfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwSfuncContext.prototype.K_SFUNC = function () { return this.getToken(CqlParser.K_SFUNC, 0); };
    Object.defineProperty(KwSfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwSfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwSfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterKwSfunc) {
            listener.enterKwSfunc(this);
        }
    };
    // @Override
    KwSfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitKwSfunc) {
            listener.exitKwSfunc(this);
        }
    };
    // @Override
    KwSfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitKwSfunc) {
            return visitor.visitKwSfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwSfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwSfuncContext = KwSfuncContext;
var KwStorageContext = /** @class */ (function (_super) {
    __extends(KwStorageContext, _super);
    function KwStorageContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwStorageContext.prototype.K_STORAGE = function () { return this.getToken(CqlParser.K_STORAGE, 0); };
    Object.defineProperty(KwStorageContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwStorage; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwStorageContext.prototype.enterRule = function (listener) {
        if (listener.enterKwStorage) {
            listener.enterKwStorage(this);
        }
    };
    // @Override
    KwStorageContext.prototype.exitRule = function (listener) {
        if (listener.exitKwStorage) {
            listener.exitKwStorage(this);
        }
    };
    // @Override
    KwStorageContext.prototype.accept = function (visitor) {
        if (visitor.visitKwStorage) {
            return visitor.visitKwStorage(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwStorageContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwStorageContext = KwStorageContext;
var KwStypeContext = /** @class */ (function (_super) {
    __extends(KwStypeContext, _super);
    function KwStypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwStypeContext.prototype.K_STYPE = function () { return this.getToken(CqlParser.K_STYPE, 0); };
    Object.defineProperty(KwStypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwStype; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwStypeContext.prototype.enterRule = function (listener) {
        if (listener.enterKwStype) {
            listener.enterKwStype(this);
        }
    };
    // @Override
    KwStypeContext.prototype.exitRule = function (listener) {
        if (listener.exitKwStype) {
            listener.exitKwStype(this);
        }
    };
    // @Override
    KwStypeContext.prototype.accept = function (visitor) {
        if (visitor.visitKwStype) {
            return visitor.visitKwStype(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwStypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwStypeContext = KwStypeContext;
var KwSuperuserContext = /** @class */ (function (_super) {
    __extends(KwSuperuserContext, _super);
    function KwSuperuserContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwSuperuserContext.prototype.K_SUPERUSER = function () { return this.getToken(CqlParser.K_SUPERUSER, 0); };
    Object.defineProperty(KwSuperuserContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwSuperuser; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwSuperuserContext.prototype.enterRule = function (listener) {
        if (listener.enterKwSuperuser) {
            listener.enterKwSuperuser(this);
        }
    };
    // @Override
    KwSuperuserContext.prototype.exitRule = function (listener) {
        if (listener.exitKwSuperuser) {
            listener.exitKwSuperuser(this);
        }
    };
    // @Override
    KwSuperuserContext.prototype.accept = function (visitor) {
        if (visitor.visitKwSuperuser) {
            return visitor.visitKwSuperuser(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwSuperuserContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwSuperuserContext = KwSuperuserContext;
var KwTableContext = /** @class */ (function (_super) {
    __extends(KwTableContext, _super);
    function KwTableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwTableContext.prototype.K_TABLE = function () { return this.getToken(CqlParser.K_TABLE, 0); };
    Object.defineProperty(KwTableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwTable; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwTableContext.prototype.enterRule = function (listener) {
        if (listener.enterKwTable) {
            listener.enterKwTable(this);
        }
    };
    // @Override
    KwTableContext.prototype.exitRule = function (listener) {
        if (listener.exitKwTable) {
            listener.exitKwTable(this);
        }
    };
    // @Override
    KwTableContext.prototype.accept = function (visitor) {
        if (visitor.visitKwTable) {
            return visitor.visitKwTable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwTableContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwTableContext = KwTableContext;
var KwTimestampContext = /** @class */ (function (_super) {
    __extends(KwTimestampContext, _super);
    function KwTimestampContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwTimestampContext.prototype.K_TIMESTAMP = function () { return this.getToken(CqlParser.K_TIMESTAMP, 0); };
    Object.defineProperty(KwTimestampContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwTimestamp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwTimestampContext.prototype.enterRule = function (listener) {
        if (listener.enterKwTimestamp) {
            listener.enterKwTimestamp(this);
        }
    };
    // @Override
    KwTimestampContext.prototype.exitRule = function (listener) {
        if (listener.exitKwTimestamp) {
            listener.exitKwTimestamp(this);
        }
    };
    // @Override
    KwTimestampContext.prototype.accept = function (visitor) {
        if (visitor.visitKwTimestamp) {
            return visitor.visitKwTimestamp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwTimestampContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwTimestampContext = KwTimestampContext;
var KwToContext = /** @class */ (function (_super) {
    __extends(KwToContext, _super);
    function KwToContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwToContext.prototype.K_TO = function () { return this.getToken(CqlParser.K_TO, 0); };
    Object.defineProperty(KwToContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwTo; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwToContext.prototype.enterRule = function (listener) {
        if (listener.enterKwTo) {
            listener.enterKwTo(this);
        }
    };
    // @Override
    KwToContext.prototype.exitRule = function (listener) {
        if (listener.exitKwTo) {
            listener.exitKwTo(this);
        }
    };
    // @Override
    KwToContext.prototype.accept = function (visitor) {
        if (visitor.visitKwTo) {
            return visitor.visitKwTo(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwToContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwToContext = KwToContext;
var KwTriggerContext = /** @class */ (function (_super) {
    __extends(KwTriggerContext, _super);
    function KwTriggerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwTriggerContext.prototype.K_TRIGGER = function () { return this.getToken(CqlParser.K_TRIGGER, 0); };
    Object.defineProperty(KwTriggerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwTrigger; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwTriggerContext.prototype.enterRule = function (listener) {
        if (listener.enterKwTrigger) {
            listener.enterKwTrigger(this);
        }
    };
    // @Override
    KwTriggerContext.prototype.exitRule = function (listener) {
        if (listener.exitKwTrigger) {
            listener.exitKwTrigger(this);
        }
    };
    // @Override
    KwTriggerContext.prototype.accept = function (visitor) {
        if (visitor.visitKwTrigger) {
            return visitor.visitKwTrigger(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwTriggerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwTriggerContext = KwTriggerContext;
var KwTruncateContext = /** @class */ (function (_super) {
    __extends(KwTruncateContext, _super);
    function KwTruncateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwTruncateContext.prototype.K_TRUNCATE = function () { return this.getToken(CqlParser.K_TRUNCATE, 0); };
    Object.defineProperty(KwTruncateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwTruncate; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwTruncateContext.prototype.enterRule = function (listener) {
        if (listener.enterKwTruncate) {
            listener.enterKwTruncate(this);
        }
    };
    // @Override
    KwTruncateContext.prototype.exitRule = function (listener) {
        if (listener.exitKwTruncate) {
            listener.exitKwTruncate(this);
        }
    };
    // @Override
    KwTruncateContext.prototype.accept = function (visitor) {
        if (visitor.visitKwTruncate) {
            return visitor.visitKwTruncate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwTruncateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwTruncateContext = KwTruncateContext;
var KwTtlContext = /** @class */ (function (_super) {
    __extends(KwTtlContext, _super);
    function KwTtlContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwTtlContext.prototype.K_TTL = function () { return this.getToken(CqlParser.K_TTL, 0); };
    Object.defineProperty(KwTtlContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwTtl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwTtlContext.prototype.enterRule = function (listener) {
        if (listener.enterKwTtl) {
            listener.enterKwTtl(this);
        }
    };
    // @Override
    KwTtlContext.prototype.exitRule = function (listener) {
        if (listener.exitKwTtl) {
            listener.exitKwTtl(this);
        }
    };
    // @Override
    KwTtlContext.prototype.accept = function (visitor) {
        if (visitor.visitKwTtl) {
            return visitor.visitKwTtl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwTtlContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwTtlContext = KwTtlContext;
var KwTypeContext = /** @class */ (function (_super) {
    __extends(KwTypeContext, _super);
    function KwTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwTypeContext.prototype.K_TYPE = function () { return this.getToken(CqlParser.K_TYPE, 0); };
    Object.defineProperty(KwTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterKwType) {
            listener.enterKwType(this);
        }
    };
    // @Override
    KwTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitKwType) {
            listener.exitKwType(this);
        }
    };
    // @Override
    KwTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitKwType) {
            return visitor.visitKwType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwTypeContext = KwTypeContext;
var KwUnloggedContext = /** @class */ (function (_super) {
    __extends(KwUnloggedContext, _super);
    function KwUnloggedContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwUnloggedContext.prototype.K_UNLOGGED = function () { return this.getToken(CqlParser.K_UNLOGGED, 0); };
    Object.defineProperty(KwUnloggedContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwUnlogged; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwUnloggedContext.prototype.enterRule = function (listener) {
        if (listener.enterKwUnlogged) {
            listener.enterKwUnlogged(this);
        }
    };
    // @Override
    KwUnloggedContext.prototype.exitRule = function (listener) {
        if (listener.exitKwUnlogged) {
            listener.exitKwUnlogged(this);
        }
    };
    // @Override
    KwUnloggedContext.prototype.accept = function (visitor) {
        if (visitor.visitKwUnlogged) {
            return visitor.visitKwUnlogged(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwUnloggedContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwUnloggedContext = KwUnloggedContext;
var KwUpdateContext = /** @class */ (function (_super) {
    __extends(KwUpdateContext, _super);
    function KwUpdateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwUpdateContext.prototype.K_UPDATE = function () { return this.getToken(CqlParser.K_UPDATE, 0); };
    Object.defineProperty(KwUpdateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwUpdate; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwUpdateContext.prototype.enterRule = function (listener) {
        if (listener.enterKwUpdate) {
            listener.enterKwUpdate(this);
        }
    };
    // @Override
    KwUpdateContext.prototype.exitRule = function (listener) {
        if (listener.exitKwUpdate) {
            listener.exitKwUpdate(this);
        }
    };
    // @Override
    KwUpdateContext.prototype.accept = function (visitor) {
        if (visitor.visitKwUpdate) {
            return visitor.visitKwUpdate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwUpdateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwUpdateContext = KwUpdateContext;
var KwUseContext = /** @class */ (function (_super) {
    __extends(KwUseContext, _super);
    function KwUseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwUseContext.prototype.K_USE = function () { return this.getToken(CqlParser.K_USE, 0); };
    Object.defineProperty(KwUseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwUse; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwUseContext.prototype.enterRule = function (listener) {
        if (listener.enterKwUse) {
            listener.enterKwUse(this);
        }
    };
    // @Override
    KwUseContext.prototype.exitRule = function (listener) {
        if (listener.exitKwUse) {
            listener.exitKwUse(this);
        }
    };
    // @Override
    KwUseContext.prototype.accept = function (visitor) {
        if (visitor.visitKwUse) {
            return visitor.visitKwUse(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwUseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwUseContext = KwUseContext;
var KwUserContext = /** @class */ (function (_super) {
    __extends(KwUserContext, _super);
    function KwUserContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwUserContext.prototype.K_USER = function () { return this.getToken(CqlParser.K_USER, 0); };
    Object.defineProperty(KwUserContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwUser; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwUserContext.prototype.enterRule = function (listener) {
        if (listener.enterKwUser) {
            listener.enterKwUser(this);
        }
    };
    // @Override
    KwUserContext.prototype.exitRule = function (listener) {
        if (listener.exitKwUser) {
            listener.exitKwUser(this);
        }
    };
    // @Override
    KwUserContext.prototype.accept = function (visitor) {
        if (visitor.visitKwUser) {
            return visitor.visitKwUser(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwUserContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwUserContext = KwUserContext;
var KwUsersContext = /** @class */ (function (_super) {
    __extends(KwUsersContext, _super);
    function KwUsersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwUsersContext.prototype.K_USERS = function () { return this.getToken(CqlParser.K_USERS, 0); };
    Object.defineProperty(KwUsersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwUsers; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwUsersContext.prototype.enterRule = function (listener) {
        if (listener.enterKwUsers) {
            listener.enterKwUsers(this);
        }
    };
    // @Override
    KwUsersContext.prototype.exitRule = function (listener) {
        if (listener.exitKwUsers) {
            listener.exitKwUsers(this);
        }
    };
    // @Override
    KwUsersContext.prototype.accept = function (visitor) {
        if (visitor.visitKwUsers) {
            return visitor.visitKwUsers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwUsersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwUsersContext = KwUsersContext;
var KwUsingContext = /** @class */ (function (_super) {
    __extends(KwUsingContext, _super);
    function KwUsingContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwUsingContext.prototype.K_USING = function () { return this.getToken(CqlParser.K_USING, 0); };
    Object.defineProperty(KwUsingContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwUsing; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwUsingContext.prototype.enterRule = function (listener) {
        if (listener.enterKwUsing) {
            listener.enterKwUsing(this);
        }
    };
    // @Override
    KwUsingContext.prototype.exitRule = function (listener) {
        if (listener.exitKwUsing) {
            listener.exitKwUsing(this);
        }
    };
    // @Override
    KwUsingContext.prototype.accept = function (visitor) {
        if (visitor.visitKwUsing) {
            return visitor.visitKwUsing(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwUsingContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwUsingContext = KwUsingContext;
var KwValuesContext = /** @class */ (function (_super) {
    __extends(KwValuesContext, _super);
    function KwValuesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwValuesContext.prototype.K_VALUES = function () { return this.getToken(CqlParser.K_VALUES, 0); };
    Object.defineProperty(KwValuesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwValues; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwValuesContext.prototype.enterRule = function (listener) {
        if (listener.enterKwValues) {
            listener.enterKwValues(this);
        }
    };
    // @Override
    KwValuesContext.prototype.exitRule = function (listener) {
        if (listener.exitKwValues) {
            listener.exitKwValues(this);
        }
    };
    // @Override
    KwValuesContext.prototype.accept = function (visitor) {
        if (visitor.visitKwValues) {
            return visitor.visitKwValues(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwValuesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwValuesContext = KwValuesContext;
var KwViewContext = /** @class */ (function (_super) {
    __extends(KwViewContext, _super);
    function KwViewContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwViewContext.prototype.K_VIEW = function () { return this.getToken(CqlParser.K_VIEW, 0); };
    Object.defineProperty(KwViewContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwView; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwViewContext.prototype.enterRule = function (listener) {
        if (listener.enterKwView) {
            listener.enterKwView(this);
        }
    };
    // @Override
    KwViewContext.prototype.exitRule = function (listener) {
        if (listener.exitKwView) {
            listener.exitKwView(this);
        }
    };
    // @Override
    KwViewContext.prototype.accept = function (visitor) {
        if (visitor.visitKwView) {
            return visitor.visitKwView(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwViewContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwViewContext = KwViewContext;
var KwWhereContext = /** @class */ (function (_super) {
    __extends(KwWhereContext, _super);
    function KwWhereContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwWhereContext.prototype.K_WHERE = function () { return this.getToken(CqlParser.K_WHERE, 0); };
    Object.defineProperty(KwWhereContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwWhere; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwWhereContext.prototype.enterRule = function (listener) {
        if (listener.enterKwWhere) {
            listener.enterKwWhere(this);
        }
    };
    // @Override
    KwWhereContext.prototype.exitRule = function (listener) {
        if (listener.exitKwWhere) {
            listener.exitKwWhere(this);
        }
    };
    // @Override
    KwWhereContext.prototype.accept = function (visitor) {
        if (visitor.visitKwWhere) {
            return visitor.visitKwWhere(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwWhereContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwWhereContext = KwWhereContext;
var KwWithContext = /** @class */ (function (_super) {
    __extends(KwWithContext, _super);
    function KwWithContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwWithContext.prototype.K_WITH = function () { return this.getToken(CqlParser.K_WITH, 0); };
    Object.defineProperty(KwWithContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwWith; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwWithContext.prototype.enterRule = function (listener) {
        if (listener.enterKwWith) {
            listener.enterKwWith(this);
        }
    };
    // @Override
    KwWithContext.prototype.exitRule = function (listener) {
        if (listener.exitKwWith) {
            listener.exitKwWith(this);
        }
    };
    // @Override
    KwWithContext.prototype.accept = function (visitor) {
        if (visitor.visitKwWith) {
            return visitor.visitKwWith(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwWithContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwWithContext = KwWithContext;
var KwRevokeContext = /** @class */ (function (_super) {
    __extends(KwRevokeContext, _super);
    function KwRevokeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KwRevokeContext.prototype.K_REVOKE = function () { return this.getToken(CqlParser.K_REVOKE, 0); };
    Object.defineProperty(KwRevokeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_kwRevoke; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KwRevokeContext.prototype.enterRule = function (listener) {
        if (listener.enterKwRevoke) {
            listener.enterKwRevoke(this);
        }
    };
    // @Override
    KwRevokeContext.prototype.exitRule = function (listener) {
        if (listener.exitKwRevoke) {
            listener.exitKwRevoke(this);
        }
    };
    // @Override
    KwRevokeContext.prototype.accept = function (visitor) {
        if (visitor.visitKwRevoke) {
            return visitor.visitKwRevoke(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KwRevokeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KwRevokeContext = KwRevokeContext;
var EofContext = /** @class */ (function (_super) {
    __extends(EofContext, _super);
    function EofContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EofContext.prototype.EOF = function () { return this.getToken(CqlParser.EOF, 0); };
    Object.defineProperty(EofContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_eof; },
        enumerable: true,
        configurable: true
    });
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
}(ParserRuleContext_1.ParserRuleContext));
exports.EofContext = EofContext;
var SyntaxBracketLrContext = /** @class */ (function (_super) {
    __extends(SyntaxBracketLrContext, _super);
    function SyntaxBracketLrContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SyntaxBracketLrContext.prototype.LR_BRACKET = function () { return this.getToken(CqlParser.LR_BRACKET, 0); };
    Object.defineProperty(SyntaxBracketLrContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_syntaxBracketLr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SyntaxBracketLrContext.prototype.enterRule = function (listener) {
        if (listener.enterSyntaxBracketLr) {
            listener.enterSyntaxBracketLr(this);
        }
    };
    // @Override
    SyntaxBracketLrContext.prototype.exitRule = function (listener) {
        if (listener.exitSyntaxBracketLr) {
            listener.exitSyntaxBracketLr(this);
        }
    };
    // @Override
    SyntaxBracketLrContext.prototype.accept = function (visitor) {
        if (visitor.visitSyntaxBracketLr) {
            return visitor.visitSyntaxBracketLr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SyntaxBracketLrContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SyntaxBracketLrContext = SyntaxBracketLrContext;
var SyntaxBracketRrContext = /** @class */ (function (_super) {
    __extends(SyntaxBracketRrContext, _super);
    function SyntaxBracketRrContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SyntaxBracketRrContext.prototype.RR_BRACKET = function () { return this.getToken(CqlParser.RR_BRACKET, 0); };
    Object.defineProperty(SyntaxBracketRrContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_syntaxBracketRr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SyntaxBracketRrContext.prototype.enterRule = function (listener) {
        if (listener.enterSyntaxBracketRr) {
            listener.enterSyntaxBracketRr(this);
        }
    };
    // @Override
    SyntaxBracketRrContext.prototype.exitRule = function (listener) {
        if (listener.exitSyntaxBracketRr) {
            listener.exitSyntaxBracketRr(this);
        }
    };
    // @Override
    SyntaxBracketRrContext.prototype.accept = function (visitor) {
        if (visitor.visitSyntaxBracketRr) {
            return visitor.visitSyntaxBracketRr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SyntaxBracketRrContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SyntaxBracketRrContext = SyntaxBracketRrContext;
var SyntaxBracketLcContext = /** @class */ (function (_super) {
    __extends(SyntaxBracketLcContext, _super);
    function SyntaxBracketLcContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SyntaxBracketLcContext.prototype.LC_BRACKET = function () { return this.getToken(CqlParser.LC_BRACKET, 0); };
    Object.defineProperty(SyntaxBracketLcContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_syntaxBracketLc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SyntaxBracketLcContext.prototype.enterRule = function (listener) {
        if (listener.enterSyntaxBracketLc) {
            listener.enterSyntaxBracketLc(this);
        }
    };
    // @Override
    SyntaxBracketLcContext.prototype.exitRule = function (listener) {
        if (listener.exitSyntaxBracketLc) {
            listener.exitSyntaxBracketLc(this);
        }
    };
    // @Override
    SyntaxBracketLcContext.prototype.accept = function (visitor) {
        if (visitor.visitSyntaxBracketLc) {
            return visitor.visitSyntaxBracketLc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SyntaxBracketLcContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SyntaxBracketLcContext = SyntaxBracketLcContext;
var SyntaxBracketRcContext = /** @class */ (function (_super) {
    __extends(SyntaxBracketRcContext, _super);
    function SyntaxBracketRcContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SyntaxBracketRcContext.prototype.RC_BRACKET = function () { return this.getToken(CqlParser.RC_BRACKET, 0); };
    Object.defineProperty(SyntaxBracketRcContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_syntaxBracketRc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SyntaxBracketRcContext.prototype.enterRule = function (listener) {
        if (listener.enterSyntaxBracketRc) {
            listener.enterSyntaxBracketRc(this);
        }
    };
    // @Override
    SyntaxBracketRcContext.prototype.exitRule = function (listener) {
        if (listener.exitSyntaxBracketRc) {
            listener.exitSyntaxBracketRc(this);
        }
    };
    // @Override
    SyntaxBracketRcContext.prototype.accept = function (visitor) {
        if (visitor.visitSyntaxBracketRc) {
            return visitor.visitSyntaxBracketRc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SyntaxBracketRcContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SyntaxBracketRcContext = SyntaxBracketRcContext;
var SyntaxBracketLaContext = /** @class */ (function (_super) {
    __extends(SyntaxBracketLaContext, _super);
    function SyntaxBracketLaContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SyntaxBracketLaContext.prototype.OPERATOR_LT = function () { return this.getToken(CqlParser.OPERATOR_LT, 0); };
    Object.defineProperty(SyntaxBracketLaContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_syntaxBracketLa; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SyntaxBracketLaContext.prototype.enterRule = function (listener) {
        if (listener.enterSyntaxBracketLa) {
            listener.enterSyntaxBracketLa(this);
        }
    };
    // @Override
    SyntaxBracketLaContext.prototype.exitRule = function (listener) {
        if (listener.exitSyntaxBracketLa) {
            listener.exitSyntaxBracketLa(this);
        }
    };
    // @Override
    SyntaxBracketLaContext.prototype.accept = function (visitor) {
        if (visitor.visitSyntaxBracketLa) {
            return visitor.visitSyntaxBracketLa(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SyntaxBracketLaContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SyntaxBracketLaContext = SyntaxBracketLaContext;
var SyntaxBracketRaContext = /** @class */ (function (_super) {
    __extends(SyntaxBracketRaContext, _super);
    function SyntaxBracketRaContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SyntaxBracketRaContext.prototype.OPERATOR_GT = function () { return this.getToken(CqlParser.OPERATOR_GT, 0); };
    Object.defineProperty(SyntaxBracketRaContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_syntaxBracketRa; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SyntaxBracketRaContext.prototype.enterRule = function (listener) {
        if (listener.enterSyntaxBracketRa) {
            listener.enterSyntaxBracketRa(this);
        }
    };
    // @Override
    SyntaxBracketRaContext.prototype.exitRule = function (listener) {
        if (listener.exitSyntaxBracketRa) {
            listener.exitSyntaxBracketRa(this);
        }
    };
    // @Override
    SyntaxBracketRaContext.prototype.accept = function (visitor) {
        if (visitor.visitSyntaxBracketRa) {
            return visitor.visitSyntaxBracketRa(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SyntaxBracketRaContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SyntaxBracketRaContext = SyntaxBracketRaContext;
var SyntaxBracketLsContext = /** @class */ (function (_super) {
    __extends(SyntaxBracketLsContext, _super);
    function SyntaxBracketLsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SyntaxBracketLsContext.prototype.LS_BRACKET = function () { return this.getToken(CqlParser.LS_BRACKET, 0); };
    Object.defineProperty(SyntaxBracketLsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_syntaxBracketLs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SyntaxBracketLsContext.prototype.enterRule = function (listener) {
        if (listener.enterSyntaxBracketLs) {
            listener.enterSyntaxBracketLs(this);
        }
    };
    // @Override
    SyntaxBracketLsContext.prototype.exitRule = function (listener) {
        if (listener.exitSyntaxBracketLs) {
            listener.exitSyntaxBracketLs(this);
        }
    };
    // @Override
    SyntaxBracketLsContext.prototype.accept = function (visitor) {
        if (visitor.visitSyntaxBracketLs) {
            return visitor.visitSyntaxBracketLs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SyntaxBracketLsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SyntaxBracketLsContext = SyntaxBracketLsContext;
var SyntaxBracketRsContext = /** @class */ (function (_super) {
    __extends(SyntaxBracketRsContext, _super);
    function SyntaxBracketRsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SyntaxBracketRsContext.prototype.RS_BRACKET = function () { return this.getToken(CqlParser.RS_BRACKET, 0); };
    Object.defineProperty(SyntaxBracketRsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_syntaxBracketRs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SyntaxBracketRsContext.prototype.enterRule = function (listener) {
        if (listener.enterSyntaxBracketRs) {
            listener.enterSyntaxBracketRs(this);
        }
    };
    // @Override
    SyntaxBracketRsContext.prototype.exitRule = function (listener) {
        if (listener.exitSyntaxBracketRs) {
            listener.exitSyntaxBracketRs(this);
        }
    };
    // @Override
    SyntaxBracketRsContext.prototype.accept = function (visitor) {
        if (visitor.visitSyntaxBracketRs) {
            return visitor.visitSyntaxBracketRs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SyntaxBracketRsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SyntaxBracketRsContext = SyntaxBracketRsContext;
var SyntaxCommaContext = /** @class */ (function (_super) {
    __extends(SyntaxCommaContext, _super);
    function SyntaxCommaContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SyntaxCommaContext.prototype.COMMA = function () { return this.getToken(CqlParser.COMMA, 0); };
    Object.defineProperty(SyntaxCommaContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_syntaxComma; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SyntaxCommaContext.prototype.enterRule = function (listener) {
        if (listener.enterSyntaxComma) {
            listener.enterSyntaxComma(this);
        }
    };
    // @Override
    SyntaxCommaContext.prototype.exitRule = function (listener) {
        if (listener.exitSyntaxComma) {
            listener.exitSyntaxComma(this);
        }
    };
    // @Override
    SyntaxCommaContext.prototype.accept = function (visitor) {
        if (visitor.visitSyntaxComma) {
            return visitor.visitSyntaxComma(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SyntaxCommaContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SyntaxCommaContext = SyntaxCommaContext;
var SyntaxColonContext = /** @class */ (function (_super) {
    __extends(SyntaxColonContext, _super);
    function SyntaxColonContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SyntaxColonContext.prototype.COLON = function () { return this.getToken(CqlParser.COLON, 0); };
    Object.defineProperty(SyntaxColonContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CqlParser.RULE_syntaxColon; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SyntaxColonContext.prototype.enterRule = function (listener) {
        if (listener.enterSyntaxColon) {
            listener.enterSyntaxColon(this);
        }
    };
    // @Override
    SyntaxColonContext.prototype.exitRule = function (listener) {
        if (listener.exitSyntaxColon) {
            listener.exitSyntaxColon(this);
        }
    };
    // @Override
    SyntaxColonContext.prototype.accept = function (visitor) {
        if (visitor.visitSyntaxColon) {
            return visitor.visitSyntaxColon(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SyntaxColonContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SyntaxColonContext = SyntaxColonContext;
