"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tinymud/tinymud.g4 by ANTLR 4.7.3-SNAPSHOT
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
var tinymudParser = /** @class */ (function (_super) {
    __extends(tinymudParser, _super);
    function tinymudParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(tinymudParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(tinymudParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return tinymudParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinymudParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "tinymud.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinymudParser.prototype, "ruleNames", {
        // @Override
        get: function () { return tinymudParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinymudParser.prototype, "serializedATN", {
        // @Override
        get: function () { return tinymudParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    tinymudParser.prototype.prog = function () {
        var _localctx = new ProgContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, tinymudParser.RULE_prog);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 127;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 126;
                            this.line();
                        }
                    }
                    this.state = 129;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tinymudParser.T__0) | (1 << tinymudParser.T__1) | (1 << tinymudParser.T__3) | (1 << tinymudParser.T__4) | (1 << tinymudParser.T__5) | (1 << tinymudParser.T__6) | (1 << tinymudParser.T__7) | (1 << tinymudParser.T__8) | (1 << tinymudParser.T__9) | (1 << tinymudParser.T__10) | (1 << tinymudParser.T__11) | (1 << tinymudParser.T__12) | (1 << tinymudParser.T__13) | (1 << tinymudParser.T__14) | (1 << tinymudParser.T__15) | (1 << tinymudParser.T__16) | (1 << tinymudParser.T__18) | (1 << tinymudParser.T__19) | (1 << tinymudParser.T__20) | (1 << tinymudParser.T__21) | (1 << tinymudParser.T__22) | (1 << tinymudParser.T__24) | (1 << tinymudParser.T__25) | (1 << tinymudParser.T__26) | (1 << tinymudParser.T__27) | (1 << tinymudParser.T__28) | (1 << tinymudParser.T__29) | (1 << tinymudParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (tinymudParser.T__31 - 32)) | (1 << (tinymudParser.T__32 - 32)) | (1 << (tinymudParser.T__33 - 32)) | (1 << (tinymudParser.T__34 - 32)) | (1 << (tinymudParser.T__35 - 32)) | (1 << (tinymudParser.T__36 - 32)) | (1 << (tinymudParser.T__37 - 32)) | (1 << (tinymudParser.T__38 - 32)) | (1 << (tinymudParser.T__39 - 32)) | (1 << (tinymudParser.T__40 - 32)) | (1 << (tinymudParser.T__41 - 32)) | (1 << (tinymudParser.T__42 - 32)) | (1 << (tinymudParser.T__43 - 32)) | (1 << (tinymudParser.T__44 - 32)) | (1 << (tinymudParser.T__45 - 32)) | (1 << (tinymudParser.T__46 - 32)) | (1 << (tinymudParser.T__47 - 32)) | (1 << (tinymudParser.T__48 - 32)) | (1 << (tinymudParser.T__49 - 32)) | (1 << (tinymudParser.T__50 - 32)) | (1 << (tinymudParser.T__51 - 32)) | (1 << (tinymudParser.T__52 - 32)) | (1 << (tinymudParser.T__53 - 32)) | (1 << (tinymudParser.T__54 - 32)) | (1 << (tinymudParser.T__55 - 32)) | (1 << (tinymudParser.T__56 - 32)))) !== 0));
                this.state = 134;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === tinymudParser.EOL) {
                    {
                        {
                            this.state = 131;
                            this.match(tinymudParser.EOL);
                        }
                    }
                    this.state = 136;
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
    tinymudParser.prototype.line = function () {
        var _localctx = new LineContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, tinymudParser.RULE_line);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 139;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case tinymudParser.T__0:
                    case tinymudParser.T__1:
                    case tinymudParser.T__3:
                    case tinymudParser.T__4:
                    case tinymudParser.T__5:
                    case tinymudParser.T__6:
                    case tinymudParser.T__7:
                    case tinymudParser.T__8:
                    case tinymudParser.T__9:
                    case tinymudParser.T__10:
                    case tinymudParser.T__11:
                    case tinymudParser.T__12:
                    case tinymudParser.T__13:
                    case tinymudParser.T__14:
                    case tinymudParser.T__15:
                    case tinymudParser.T__16:
                    case tinymudParser.T__18:
                    case tinymudParser.T__19:
                    case tinymudParser.T__20:
                    case tinymudParser.T__21:
                    case tinymudParser.T__22:
                    case tinymudParser.T__24:
                    case tinymudParser.T__25:
                    case tinymudParser.T__26:
                    case tinymudParser.T__27:
                    case tinymudParser.T__28:
                    case tinymudParser.T__29:
                    case tinymudParser.T__30:
                    case tinymudParser.T__31:
                    case tinymudParser.T__32:
                        {
                            this.state = 137;
                            this.command();
                        }
                        break;
                    case tinymudParser.T__33:
                    case tinymudParser.T__34:
                    case tinymudParser.T__35:
                    case tinymudParser.T__36:
                    case tinymudParser.T__37:
                    case tinymudParser.T__38:
                    case tinymudParser.T__39:
                    case tinymudParser.T__40:
                    case tinymudParser.T__41:
                    case tinymudParser.T__42:
                    case tinymudParser.T__43:
                    case tinymudParser.T__44:
                    case tinymudParser.T__45:
                    case tinymudParser.T__46:
                    case tinymudParser.T__47:
                    case tinymudParser.T__48:
                    case tinymudParser.T__49:
                    case tinymudParser.T__50:
                    case tinymudParser.T__51:
                    case tinymudParser.T__52:
                    case tinymudParser.T__53:
                    case tinymudParser.T__54:
                    case tinymudParser.T__55:
                    case tinymudParser.T__56:
                        {
                            this.state = 138;
                            this.action();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 141;
                this.match(tinymudParser.EOL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.command = function () {
        var _localctx = new CommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, tinymudParser.RULE_command);
        try {
            this.state = 170;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case tinymudParser.T__0:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 143;
                        this.bootcommand();
                    }
                    break;
                case tinymudParser.T__1:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 144;
                        this.chowncommand();
                    }
                    break;
                case tinymudParser.T__3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 145;
                        this.createcommand();
                    }
                    break;
                case tinymudParser.T__4:
                case tinymudParser.T__5:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 146;
                        this.describecommand();
                    }
                    break;
                case tinymudParser.T__6:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 147;
                        this.digcommand();
                    }
                    break;
                case tinymudParser.T__7:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 148;
                        this.dumpcommand();
                    }
                    break;
                case tinymudParser.T__8:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 149;
                        this.failcommand();
                    }
                    break;
                case tinymudParser.T__9:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 150;
                        this.findcommand();
                    }
                    break;
                case tinymudParser.T__10:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 151;
                        this.forcecommand();
                    }
                    break;
                case tinymudParser.T__11:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 152;
                        this.linkcommand();
                    }
                    break;
                case tinymudParser.T__12:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 153;
                        this.lockcommand();
                    }
                    break;
                case tinymudParser.T__13:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 154;
                        this.namecommand();
                    }
                    break;
                case tinymudParser.T__14:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 155;
                        this.newpassswordcommand();
                    }
                    break;
                case tinymudParser.T__15:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 156;
                        this.ofailcommand();
                    }
                    break;
                case tinymudParser.T__16:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 157;
                        this.opencommand();
                    }
                    break;
                case tinymudParser.T__18:
                case tinymudParser.T__19:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 158;
                        this.osuccesscommand();
                    }
                    break;
                case tinymudParser.T__20:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 159;
                        this.passwordcommand();
                    }
                    break;
                case tinymudParser.T__21:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 160;
                        this.pcreatecommand();
                    }
                    break;
                case tinymudParser.T__22:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 161;
                        this.setcommand();
                    }
                    break;
                case tinymudParser.T__24:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 162;
                        this.shutdowncommand();
                    }
                    break;
                case tinymudParser.T__25:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 163;
                        this.statscommand();
                    }
                    break;
                case tinymudParser.T__26:
                case tinymudParser.T__27:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 164;
                        this.successcommand();
                    }
                    break;
                case tinymudParser.T__28:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 165;
                        this.teleportcommand();
                    }
                    break;
                case tinymudParser.T__29:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 166;
                        this.toadcommand();
                    }
                    break;
                case tinymudParser.T__30:
                    this.enterOuterAlt(_localctx, 25);
                    {
                        this.state = 167;
                        this.unlinkcommand();
                    }
                    break;
                case tinymudParser.T__31:
                    this.enterOuterAlt(_localctx, 26);
                    {
                        this.state = 168;
                        this.unlockcommand();
                    }
                    break;
                case tinymudParser.T__32:
                    this.enterOuterAlt(_localctx, 27);
                    {
                        this.state = 169;
                        this.wallcommand();
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
    tinymudParser.prototype.bootcommand = function () {
        var _localctx = new BootcommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, tinymudParser.RULE_bootcommand);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 172;
                this.match(tinymudParser.T__0);
                this.state = 173;
                this.player();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.chowncommand = function () {
        var _localctx = new ChowncommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, tinymudParser.RULE_chowncommand);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 175;
                this.match(tinymudParser.T__1);
                this.state = 176;
                this.object();
                this.state = 177;
                this.match(tinymudParser.T__2);
                this.state = 178;
                this.player();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.createcommand = function () {
        var _localctx = new CreatecommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, tinymudParser.RULE_createcommand);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 180;
                this.match(tinymudParser.T__3);
                this.state = 181;
                this.name();
                this.state = 184;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === tinymudParser.T__2) {
                    {
                        this.state = 182;
                        this.match(tinymudParser.T__2);
                        this.state = 183;
                        this.cost();
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
    tinymudParser.prototype.describecommand = function () {
        var _localctx = new DescribecommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, tinymudParser.RULE_describecommand);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 186;
                _la = this._input.LA(1);
                if (!(_la === tinymudParser.T__4 || _la === tinymudParser.T__5)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 187;
                this.object();
                this.state = 190;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === tinymudParser.T__2) {
                    {
                        this.state = 188;
                        this.match(tinymudParser.T__2);
                        this.state = 189;
                        this.description();
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
    tinymudParser.prototype.digcommand = function () {
        var _localctx = new DigcommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, tinymudParser.RULE_digcommand);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 192;
                this.match(tinymudParser.T__6);
                this.state = 193;
                this.name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.dumpcommand = function () {
        var _localctx = new DumpcommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, tinymudParser.RULE_dumpcommand);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 195;
                this.match(tinymudParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.failcommand = function () {
        var _localctx = new FailcommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, tinymudParser.RULE_failcommand);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 197;
                this.match(tinymudParser.T__8);
                this.state = 198;
                this.name();
                this.state = 201;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === tinymudParser.T__2) {
                    {
                        this.state = 199;
                        this.match(tinymudParser.T__2);
                        this.state = 200;
                        this.description();
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
    tinymudParser.prototype.findcommand = function () {
        var _localctx = new FindcommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, tinymudParser.RULE_findcommand);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 203;
                this.match(tinymudParser.T__9);
                this.state = 205;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === tinymudParser.STRING) {
                    {
                        this.state = 204;
                        this.name();
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
    tinymudParser.prototype.forcecommand = function () {
        var _localctx = new ForcecommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, tinymudParser.RULE_forcecommand);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 207;
                this.match(tinymudParser.T__10);
                this.state = 208;
                this.player();
                this.state = 209;
                this.match(tinymudParser.T__2);
                this.state = 210;
                this.command();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.linkcommand = function () {
        var _localctx = new LinkcommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, tinymudParser.RULE_linkcommand);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 212;
                this.match(tinymudParser.T__11);
                this.state = 213;
                this.object();
                this.state = 214;
                this.match(tinymudParser.T__2);
                this.state = 218;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                    case 1:
                        {
                            this.state = 215;
                            this.number();
                        }
                        break;
                    case 2:
                        {
                            this.state = 216;
                            this.dir();
                        }
                        break;
                    case 3:
                        {
                            this.state = 217;
                            this.room();
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
    tinymudParser.prototype.lockcommand = function () {
        var _localctx = new LockcommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, tinymudParser.RULE_lockcommand);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 220;
                this.match(tinymudParser.T__12);
                this.state = 221;
                this.object();
                this.state = 222;
                this.match(tinymudParser.T__2);
                this.state = 223;
                this.key();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.namecommand = function () {
        var _localctx = new NamecommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, tinymudParser.RULE_namecommand);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 225;
                this.match(tinymudParser.T__13);
                this.state = 226;
                this.object();
                this.state = 227;
                this.match(tinymudParser.T__2);
                this.state = 228;
                this.name();
                this.state = 230;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === tinymudParser.STRING) {
                    {
                        this.state = 229;
                        this.password();
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
    tinymudParser.prototype.newpassswordcommand = function () {
        var _localctx = new NewpassswordcommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, tinymudParser.RULE_newpassswordcommand);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 232;
                this.match(tinymudParser.T__14);
                this.state = 233;
                this.player();
                this.state = 236;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === tinymudParser.T__2) {
                    {
                        this.state = 234;
                        this.match(tinymudParser.T__2);
                        this.state = 235;
                        this.password();
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
    tinymudParser.prototype.ofailcommand = function () {
        var _localctx = new OfailcommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, tinymudParser.RULE_ofailcommand);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 238;
                this.match(tinymudParser.T__15);
                this.state = 239;
                this.object();
                this.state = 242;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === tinymudParser.T__2) {
                    {
                        this.state = 240;
                        this.match(tinymudParser.T__2);
                        this.state = 241;
                        this.message();
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
    tinymudParser.prototype.opencommand = function () {
        var _localctx = new OpencommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, tinymudParser.RULE_opencommand);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 244;
                this.match(tinymudParser.T__16);
                this.state = 245;
                this.dir();
                this.state = 250;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === tinymudParser.T__17) {
                    {
                        {
                            this.state = 246;
                            this.match(tinymudParser.T__17);
                            this.state = 247;
                            this.dir();
                        }
                    }
                    this.state = 252;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 255;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === tinymudParser.T__2) {
                    {
                        this.state = 253;
                        this.match(tinymudParser.T__2);
                        this.state = 254;
                        this.number();
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
    tinymudParser.prototype.osuccesscommand = function () {
        var _localctx = new OsuccesscommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, tinymudParser.RULE_osuccesscommand);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 257;
                _la = this._input.LA(1);
                if (!(_la === tinymudParser.T__18 || _la === tinymudParser.T__19)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 258;
                this.object();
                this.state = 261;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === tinymudParser.T__2) {
                    {
                        this.state = 259;
                        this.match(tinymudParser.T__2);
                        this.state = 260;
                        this.message();
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
    tinymudParser.prototype.passwordcommand = function () {
        var _localctx = new PasswordcommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, tinymudParser.RULE_passwordcommand);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 263;
                this.match(tinymudParser.T__20);
                this.state = 264;
                this.password();
                this.state = 265;
                this.match(tinymudParser.T__2);
                this.state = 266;
                this.password();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.pcreatecommand = function () {
        var _localctx = new PcreatecommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, tinymudParser.RULE_pcreatecommand);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 268;
                this.match(tinymudParser.T__21);
                this.state = 269;
                this.name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.setcommand = function () {
        var _localctx = new SetcommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, tinymudParser.RULE_setcommand);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 271;
                this.match(tinymudParser.T__22);
                this.state = 272;
                this.object();
                this.state = 273;
                this.match(tinymudParser.T__2);
                this.state = 275;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === tinymudParser.T__23) {
                    {
                        this.state = 274;
                        this.match(tinymudParser.T__23);
                    }
                }
                this.state = 277;
                this.flag();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.shutdowncommand = function () {
        var _localctx = new ShutdowncommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, tinymudParser.RULE_shutdowncommand);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 279;
                this.match(tinymudParser.T__24);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.statscommand = function () {
        var _localctx = new StatscommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, tinymudParser.RULE_statscommand);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 281;
                this.match(tinymudParser.T__25);
                this.state = 282;
                this.player();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.successcommand = function () {
        var _localctx = new SuccesscommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, tinymudParser.RULE_successcommand);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 284;
                _la = this._input.LA(1);
                if (!(_la === tinymudParser.T__26 || _la === tinymudParser.T__27)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 285;
                this.object();
                this.state = 288;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === tinymudParser.T__2) {
                    {
                        this.state = 286;
                        this.match(tinymudParser.T__2);
                        this.state = 287;
                        this.message();
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
    tinymudParser.prototype.teleportcommand = function () {
        var _localctx = new TeleportcommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, tinymudParser.RULE_teleportcommand);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 290;
                this.match(tinymudParser.T__28);
                this.state = 294;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                    case 1:
                        {
                            this.state = 291;
                            this.object();
                            this.state = 292;
                            this.match(tinymudParser.T__2);
                        }
                        break;
                }
                this.state = 296;
                this.room();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.toadcommand = function () {
        var _localctx = new ToadcommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, tinymudParser.RULE_toadcommand);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 298;
                this.match(tinymudParser.T__29);
                this.state = 299;
                this.player();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.unlinkcommand = function () {
        var _localctx = new UnlinkcommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, tinymudParser.RULE_unlinkcommand);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 301;
                this.match(tinymudParser.T__30);
                this.state = 302;
                this.dir();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.unlockcommand = function () {
        var _localctx = new UnlockcommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, tinymudParser.RULE_unlockcommand);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 304;
                this.match(tinymudParser.T__31);
                this.state = 305;
                this.object();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.wallcommand = function () {
        var _localctx = new WallcommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, tinymudParser.RULE_wallcommand);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 307;
                this.match(tinymudParser.T__32);
                this.state = 308;
                this.message();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.action = function () {
        var _localctx = new ActionContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, tinymudParser.RULE_action);
        try {
            this.state = 328;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case tinymudParser.T__33:
                case tinymudParser.T__34:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 310;
                        this.dropaction();
                    }
                    break;
                case tinymudParser.T__35:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 311;
                        this.examineaction();
                    }
                    break;
                case tinymudParser.T__36:
                case tinymudParser.T__37:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 312;
                        this.getaction();
                    }
                    break;
                case tinymudParser.T__38:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 313;
                        this.giveaction();
                    }
                    break;
                case tinymudParser.T__39:
                case tinymudParser.T__40:
                case tinymudParser.T__41:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 314;
                        this.gotoaction();
                    }
                    break;
                case tinymudParser.T__42:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 315;
                        this.gripeaction();
                    }
                    break;
                case tinymudParser.T__43:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 316;
                        this.helpaction();
                    }
                    break;
                case tinymudParser.T__44:
                case tinymudParser.T__45:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 317;
                        this.inventoryaction();
                    }
                    break;
                case tinymudParser.T__46:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 318;
                        this.killaction();
                    }
                    break;
                case tinymudParser.T__47:
                case tinymudParser.T__48:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 319;
                        this.lookaction();
                    }
                    break;
                case tinymudParser.T__49:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 320;
                        this.newsaction();
                    }
                    break;
                case tinymudParser.T__50:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 321;
                        this.pageaction();
                    }
                    break;
                case tinymudParser.T__51:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 322;
                        this.quitaction();
                    }
                    break;
                case tinymudParser.T__52:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 323;
                        this.robaction();
                    }
                    break;
                case tinymudParser.T__53:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 324;
                        this.sayaction();
                    }
                    break;
                case tinymudParser.T__54:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 325;
                        this.scoreaction();
                    }
                    break;
                case tinymudParser.T__55:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 326;
                        this.whisperaction();
                    }
                    break;
                case tinymudParser.T__56:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 327;
                        this.whoaction();
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
    tinymudParser.prototype.dropaction = function () {
        var _localctx = new DropactionContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, tinymudParser.RULE_dropaction);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 330;
                _la = this._input.LA(1);
                if (!(_la === tinymudParser.T__33 || _la === tinymudParser.T__34)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 331;
                this.object();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.examineaction = function () {
        var _localctx = new ExamineactionContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, tinymudParser.RULE_examineaction);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 333;
                this.match(tinymudParser.T__35);
                this.state = 334;
                this.object();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.getaction = function () {
        var _localctx = new GetactionContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, tinymudParser.RULE_getaction);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 336;
                _la = this._input.LA(1);
                if (!(_la === tinymudParser.T__36 || _la === tinymudParser.T__37)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 337;
                this.object();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.giveaction = function () {
        var _localctx = new GiveactionContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, tinymudParser.RULE_giveaction);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 339;
                this.match(tinymudParser.T__38);
                this.state = 340;
                this.player();
                this.state = 341;
                this.match(tinymudParser.T__2);
                this.state = 342;
                this.pennies();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.gotoaction = function () {
        var _localctx = new GotoactionContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, tinymudParser.RULE_gotoaction);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 344;
                _la = this._input.LA(1);
                if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (tinymudParser.T__39 - 40)) | (1 << (tinymudParser.T__40 - 40)) | (1 << (tinymudParser.T__41 - 40)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 345;
                this.direction();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.gripeaction = function () {
        var _localctx = new GripeactionContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, tinymudParser.RULE_gripeaction);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 347;
                this.match(tinymudParser.T__42);
                this.state = 348;
                this.message();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.helpaction = function () {
        var _localctx = new HelpactionContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, tinymudParser.RULE_helpaction);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 350;
                this.match(tinymudParser.T__43);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.inventoryaction = function () {
        var _localctx = new InventoryactionContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, tinymudParser.RULE_inventoryaction);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 352;
                _la = this._input.LA(1);
                if (!(_la === tinymudParser.T__44 || _la === tinymudParser.T__45)) {
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
    tinymudParser.prototype.killaction = function () {
        var _localctx = new KillactionContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, tinymudParser.RULE_killaction);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 354;
                this.match(tinymudParser.T__46);
                this.state = 355;
                this.player();
                {
                    this.state = 356;
                    this.match(tinymudParser.T__2);
                    this.state = 357;
                    this.cost();
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
    tinymudParser.prototype.lookaction = function () {
        var _localctx = new LookactionContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, tinymudParser.RULE_lookaction);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 359;
                _la = this._input.LA(1);
                if (!(_la === tinymudParser.T__47 || _la === tinymudParser.T__48)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 360;
                this.object();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.newsaction = function () {
        var _localctx = new NewsactionContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, tinymudParser.RULE_newsaction);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 362;
                this.match(tinymudParser.T__49);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.pageaction = function () {
        var _localctx = new PageactionContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, tinymudParser.RULE_pageaction);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 364;
                this.match(tinymudParser.T__50);
                this.state = 365;
                this.player();
                {
                    this.state = 366;
                    this.match(tinymudParser.T__2);
                    this.state = 367;
                    this.message();
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
    tinymudParser.prototype.quitaction = function () {
        var _localctx = new QuitactionContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, tinymudParser.RULE_quitaction);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 369;
                this.match(tinymudParser.T__51);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.robaction = function () {
        var _localctx = new RobactionContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, tinymudParser.RULE_robaction);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 371;
                this.match(tinymudParser.T__52);
                this.state = 372;
                this.player();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.sayaction = function () {
        var _localctx = new SayactionContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, tinymudParser.RULE_sayaction);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 374;
                this.match(tinymudParser.T__53);
                this.state = 375;
                this.message();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.scoreaction = function () {
        var _localctx = new ScoreactionContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, tinymudParser.RULE_scoreaction);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 377;
                this.match(tinymudParser.T__54);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.whisperaction = function () {
        var _localctx = new WhisperactionContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, tinymudParser.RULE_whisperaction);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 379;
                this.match(tinymudParser.T__55);
                this.state = 380;
                this.player();
                this.state = 381;
                this.match(tinymudParser.T__2);
                this.state = 382;
                this.message();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.whoaction = function () {
        var _localctx = new WhoactionContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, tinymudParser.RULE_whoaction);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 384;
                this.match(tinymudParser.T__56);
                this.state = 386;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === tinymudParser.STRING) {
                    {
                        this.state = 385;
                        this.player();
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
    tinymudParser.prototype.object = function () {
        var _localctx = new ObjectContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, tinymudParser.RULE_object);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 388;
                this.match(tinymudParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.player = function () {
        var _localctx = new PlayerContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, tinymudParser.RULE_player);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 390;
                this.match(tinymudParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.name = function () {
        var _localctx = new NameContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, tinymudParser.RULE_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 392;
                this.match(tinymudParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.description = function () {
        var _localctx = new DescriptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, tinymudParser.RULE_description);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 394;
                this.match(tinymudParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.cost = function () {
        var _localctx = new CostContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, tinymudParser.RULE_cost);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 396;
                this.match(tinymudParser.NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.key = function () {
        var _localctx = new KeyContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, tinymudParser.RULE_key);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 398;
                this.match(tinymudParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.password = function () {
        var _localctx = new PasswordContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, tinymudParser.RULE_password);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 400;
                this.match(tinymudParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.message = function () {
        var _localctx = new MessageContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, tinymudParser.RULE_message);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 402;
                this.match(tinymudParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.dir = function () {
        var _localctx = new DirContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, tinymudParser.RULE_dir);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 404;
                this.match(tinymudParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.number = function () {
        var _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, tinymudParser.RULE_number);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 406;
                this.match(tinymudParser.NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.room = function () {
        var _localctx = new RoomContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, tinymudParser.RULE_room);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 408;
                this.match(tinymudParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.flag = function () {
        var _localctx = new FlagContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, tinymudParser.RULE_flag);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 410;
                this.match(tinymudParser.NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.pennies = function () {
        var _localctx = new PenniesContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, tinymudParser.RULE_pennies);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 412;
                this.match(tinymudParser.NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinymudParser.prototype.direction = function () {
        var _localctx = new DirectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, tinymudParser.RULE_direction);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 414;
                this.match(tinymudParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(tinymudParser, "_ATN", {
        get: function () {
            if (!tinymudParser.__ATN) {
                tinymudParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(tinymudParser._serializedATN));
            }
            return tinymudParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    tinymudParser.T__0 = 1;
    tinymudParser.T__1 = 2;
    tinymudParser.T__2 = 3;
    tinymudParser.T__3 = 4;
    tinymudParser.T__4 = 5;
    tinymudParser.T__5 = 6;
    tinymudParser.T__6 = 7;
    tinymudParser.T__7 = 8;
    tinymudParser.T__8 = 9;
    tinymudParser.T__9 = 10;
    tinymudParser.T__10 = 11;
    tinymudParser.T__11 = 12;
    tinymudParser.T__12 = 13;
    tinymudParser.T__13 = 14;
    tinymudParser.T__14 = 15;
    tinymudParser.T__15 = 16;
    tinymudParser.T__16 = 17;
    tinymudParser.T__17 = 18;
    tinymudParser.T__18 = 19;
    tinymudParser.T__19 = 20;
    tinymudParser.T__20 = 21;
    tinymudParser.T__21 = 22;
    tinymudParser.T__22 = 23;
    tinymudParser.T__23 = 24;
    tinymudParser.T__24 = 25;
    tinymudParser.T__25 = 26;
    tinymudParser.T__26 = 27;
    tinymudParser.T__27 = 28;
    tinymudParser.T__28 = 29;
    tinymudParser.T__29 = 30;
    tinymudParser.T__30 = 31;
    tinymudParser.T__31 = 32;
    tinymudParser.T__32 = 33;
    tinymudParser.T__33 = 34;
    tinymudParser.T__34 = 35;
    tinymudParser.T__35 = 36;
    tinymudParser.T__36 = 37;
    tinymudParser.T__37 = 38;
    tinymudParser.T__38 = 39;
    tinymudParser.T__39 = 40;
    tinymudParser.T__40 = 41;
    tinymudParser.T__41 = 42;
    tinymudParser.T__42 = 43;
    tinymudParser.T__43 = 44;
    tinymudParser.T__44 = 45;
    tinymudParser.T__45 = 46;
    tinymudParser.T__46 = 47;
    tinymudParser.T__47 = 48;
    tinymudParser.T__48 = 49;
    tinymudParser.T__49 = 50;
    tinymudParser.T__50 = 51;
    tinymudParser.T__51 = 52;
    tinymudParser.T__52 = 53;
    tinymudParser.T__53 = 54;
    tinymudParser.T__54 = 55;
    tinymudParser.T__55 = 56;
    tinymudParser.T__56 = 57;
    tinymudParser.STRING = 58;
    tinymudParser.NUMBER = 59;
    tinymudParser.EOL = 60;
    tinymudParser.WS = 61;
    tinymudParser.RULE_prog = 0;
    tinymudParser.RULE_line = 1;
    tinymudParser.RULE_command = 2;
    tinymudParser.RULE_bootcommand = 3;
    tinymudParser.RULE_chowncommand = 4;
    tinymudParser.RULE_createcommand = 5;
    tinymudParser.RULE_describecommand = 6;
    tinymudParser.RULE_digcommand = 7;
    tinymudParser.RULE_dumpcommand = 8;
    tinymudParser.RULE_failcommand = 9;
    tinymudParser.RULE_findcommand = 10;
    tinymudParser.RULE_forcecommand = 11;
    tinymudParser.RULE_linkcommand = 12;
    tinymudParser.RULE_lockcommand = 13;
    tinymudParser.RULE_namecommand = 14;
    tinymudParser.RULE_newpassswordcommand = 15;
    tinymudParser.RULE_ofailcommand = 16;
    tinymudParser.RULE_opencommand = 17;
    tinymudParser.RULE_osuccesscommand = 18;
    tinymudParser.RULE_passwordcommand = 19;
    tinymudParser.RULE_pcreatecommand = 20;
    tinymudParser.RULE_setcommand = 21;
    tinymudParser.RULE_shutdowncommand = 22;
    tinymudParser.RULE_statscommand = 23;
    tinymudParser.RULE_successcommand = 24;
    tinymudParser.RULE_teleportcommand = 25;
    tinymudParser.RULE_toadcommand = 26;
    tinymudParser.RULE_unlinkcommand = 27;
    tinymudParser.RULE_unlockcommand = 28;
    tinymudParser.RULE_wallcommand = 29;
    tinymudParser.RULE_action = 30;
    tinymudParser.RULE_dropaction = 31;
    tinymudParser.RULE_examineaction = 32;
    tinymudParser.RULE_getaction = 33;
    tinymudParser.RULE_giveaction = 34;
    tinymudParser.RULE_gotoaction = 35;
    tinymudParser.RULE_gripeaction = 36;
    tinymudParser.RULE_helpaction = 37;
    tinymudParser.RULE_inventoryaction = 38;
    tinymudParser.RULE_killaction = 39;
    tinymudParser.RULE_lookaction = 40;
    tinymudParser.RULE_newsaction = 41;
    tinymudParser.RULE_pageaction = 42;
    tinymudParser.RULE_quitaction = 43;
    tinymudParser.RULE_robaction = 44;
    tinymudParser.RULE_sayaction = 45;
    tinymudParser.RULE_scoreaction = 46;
    tinymudParser.RULE_whisperaction = 47;
    tinymudParser.RULE_whoaction = 48;
    tinymudParser.RULE_object = 49;
    tinymudParser.RULE_player = 50;
    tinymudParser.RULE_name = 51;
    tinymudParser.RULE_description = 52;
    tinymudParser.RULE_cost = 53;
    tinymudParser.RULE_key = 54;
    tinymudParser.RULE_password = 55;
    tinymudParser.RULE_message = 56;
    tinymudParser.RULE_dir = 57;
    tinymudParser.RULE_number = 58;
    tinymudParser.RULE_room = 59;
    tinymudParser.RULE_flag = 60;
    tinymudParser.RULE_pennies = 61;
    tinymudParser.RULE_direction = 62;
    // tslint:disable:no-trailing-whitespace
    tinymudParser.ruleNames = [
        "prog", "line", "command", "bootcommand", "chowncommand", "createcommand",
        "describecommand", "digcommand", "dumpcommand", "failcommand", "findcommand",
        "forcecommand", "linkcommand", "lockcommand", "namecommand", "newpassswordcommand",
        "ofailcommand", "opencommand", "osuccesscommand", "passwordcommand", "pcreatecommand",
        "setcommand", "shutdowncommand", "statscommand", "successcommand", "teleportcommand",
        "toadcommand", "unlinkcommand", "unlockcommand", "wallcommand", "action",
        "dropaction", "examineaction", "getaction", "giveaction", "gotoaction",
        "gripeaction", "helpaction", "inventoryaction", "killaction", "lookaction",
        "newsaction", "pageaction", "quitaction", "robaction", "sayaction", "scoreaction",
        "whisperaction", "whoaction", "object", "player", "name", "description",
        "cost", "key", "password", "message", "dir", "number", "room", "flag",
        "pennies", "direction",
    ];
    tinymudParser._LITERAL_NAMES = [
        undefined, "'@boot'", "'@chown'", "'='", "'@create'", "'@describe'", "'@desc'",
        "'@dig'", "'@dump'", "'@fail'", "'@find'", "'@force'", "'@link'", "'@lock'",
        "'@name'", "'@newpassword'", "'@ofail'", "'@open'", "';'", "'@osuccess'",
        "'@osucc'", "'@password'", "'@pcreate'", "'@set'", "'!'", "'@shutdown'",
        "'@stats'", "'@success'", "'@succ'", "'@teleport'", "'@toad'", "'@unlink'",
        "'@unlock'", "'@wall'", "'drop'", "'throw'", "'examine'", "'get'", "'take'",
        "'give'", "'go'", "'goto'", "'move'", "'gripe'", "'help'", "'inventory'",
        "'inv'", "'kill'", "'look'", "'read'", "'news'", "'page'", "'quit'", "'rob'",
        "'say'", "'score'", "'whisper'", "'who'",
    ];
    tinymudParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "STRING", "NUMBER", "EOL", "WS",
    ];
    tinymudParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(tinymudParser._LITERAL_NAMES, tinymudParser._SYMBOLIC_NAMES, []);
    tinymudParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03?\u01A3\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
        "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
        "\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
        "=\t=\x04>\t>\x04?\t?\x04@\t@\x03\x02\x06\x02\x82\n\x02\r\x02\x0E\x02\x83" +
        "\x03\x02\x07\x02\x87\n\x02\f\x02\x0E\x02\x8A\v\x02\x03\x03\x03\x03\x05" +
        "\x03\x8E\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xAD\n\x04\x03\x05\x03\x05\x03" +
        "\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03" +
        "\x07\x05\x07\xBB\n\x07\x03\b\x03\b\x03\b\x03\b\x05\b\xC1\n\b\x03\t\x03" +
        "\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x05\v\xCC\n\v\x03\f\x03\f" +
        "\x05\f\xD0\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
        "\x0E\x03\x0E\x03\x0E\x05\x0E\xDD\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
        "\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xE9\n\x10\x03" +
        "\x11\x03\x11\x03\x11\x03\x11\x05\x11\xEF\n\x11\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x05\x12\xF5\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\xFB" +
        "\n\x13\f\x13\x0E\x13\xFE\v\x13\x03\x13\x03\x13\x05\x13\u0102\n\x13\x03" +
        "\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0108\n\x14\x03\x15\x03\x15\x03\x15" +
        "\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17" +
        "\x05\x17\u0116\n\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03" +
        "\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0123\n\x1A\x03\x1B\x03\x1B" +
        "\x03\x1B\x03\x1B\x05\x1B\u0129\n\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03" +
        "\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03" +
        "\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 " +
        "\x03 \x03 \x03 \x03 \x03 \x05 \u014B\n \x03!\x03!\x03!\x03\"\x03\"\x03" +
        "\"\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03&\x03&\x03" +
        "&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03+\x03" +
        "+\x03,\x03,\x03,\x03,\x03,\x03-\x03-\x03.\x03.\x03.\x03/\x03/\x03/\x03" +
        "0\x030\x031\x031\x031\x031\x031\x032\x032\x052\u0185\n2\x033\x033\x03" +
        "4\x034\x035\x035\x036\x036\x037\x037\x038\x038\x039\x039\x03:\x03:\x03" +
        ";\x03;\x03<\x03<\x03=\x03=\x03>\x03>\x03?\x03?\x03@\x03@\x03@\x02\x02" +
        "\x02A\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
        "\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
        "(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02" +
        "D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02" +
        "`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02" +
        "|\x02~\x02\x02\n\x03\x02\x07\b\x03\x02\x15\x16\x03\x02\x1D\x1E\x03\x02" +
        "$%\x03\x02\'(\x03\x02*,\x03\x02/0\x03\x0223\x02\u01A1\x02\x81\x03\x02" +
        "\x02\x02\x04\x8D\x03\x02\x02\x02\x06\xAC\x03\x02\x02\x02\b\xAE\x03\x02" +
        "\x02\x02\n\xB1\x03\x02\x02\x02\f\xB6\x03\x02\x02\x02\x0E\xBC\x03\x02\x02" +
        "\x02\x10\xC2\x03\x02\x02\x02\x12\xC5\x03\x02\x02\x02\x14\xC7\x03\x02\x02" +
        "\x02\x16\xCD\x03\x02\x02\x02\x18\xD1\x03\x02\x02\x02\x1A\xD6\x03\x02\x02" +
        "\x02\x1C\xDE\x03\x02\x02\x02\x1E\xE3\x03\x02\x02\x02 \xEA\x03\x02\x02" +
        "\x02\"\xF0\x03\x02\x02\x02$\xF6\x03\x02\x02\x02&\u0103\x03\x02\x02\x02" +
        "(\u0109\x03\x02\x02\x02*\u010E\x03\x02\x02\x02,\u0111\x03\x02\x02\x02" +
        ".\u0119\x03\x02\x02\x020\u011B\x03\x02\x02\x022\u011E\x03\x02\x02\x02" +
        "4\u0124\x03\x02\x02\x026\u012C\x03\x02\x02\x028\u012F\x03\x02\x02\x02" +
        ":\u0132\x03\x02\x02\x02<\u0135\x03\x02\x02\x02>\u014A\x03\x02\x02\x02" +
        "@\u014C\x03\x02\x02\x02B\u014F\x03\x02\x02\x02D\u0152\x03\x02\x02\x02" +
        "F\u0155\x03\x02\x02\x02H\u015A\x03\x02\x02\x02J\u015D\x03\x02\x02\x02" +
        "L\u0160\x03\x02\x02\x02N\u0162\x03\x02\x02\x02P\u0164\x03\x02\x02\x02" +
        "R\u0169\x03\x02\x02\x02T\u016C\x03\x02\x02\x02V\u016E\x03\x02\x02\x02" +
        "X\u0173\x03\x02\x02\x02Z\u0175\x03\x02\x02\x02\\\u0178\x03\x02\x02\x02" +
        "^\u017B\x03\x02\x02\x02`\u017D\x03\x02\x02\x02b\u0182\x03\x02\x02\x02" +
        "d\u0186\x03\x02\x02\x02f\u0188\x03\x02\x02\x02h\u018A\x03\x02\x02\x02" +
        "j\u018C\x03\x02\x02\x02l\u018E\x03\x02\x02\x02n\u0190\x03\x02\x02\x02" +
        "p\u0192\x03\x02\x02\x02r\u0194\x03\x02\x02\x02t\u0196\x03\x02\x02\x02" +
        "v\u0198\x03\x02\x02\x02x\u019A\x03\x02\x02\x02z\u019C\x03\x02\x02\x02" +
        "|\u019E\x03\x02\x02\x02~\u01A0\x03\x02\x02\x02\x80\x82\x05\x04\x03\x02" +
        "\x81\x80\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02" +
        "\x83\x84\x03\x02\x02\x02\x84\x88\x03\x02\x02\x02\x85\x87\x07>\x02\x02" +
        "\x86\x85\x03\x02\x02\x02\x87\x8A\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02" +
        "\x88\x89\x03\x02\x02\x02\x89\x03\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02" +
        "\x8B\x8E\x05\x06\x04\x02\x8C\x8E\x05> \x02\x8D\x8B\x03\x02\x02\x02\x8D" +
        "\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x90\x07>\x02\x02\x90" +
        "\x05\x03\x02\x02\x02\x91\xAD\x05\b\x05\x02\x92\xAD\x05\n\x06\x02\x93\xAD" +
        "\x05\f\x07\x02\x94\xAD\x05\x0E\b\x02\x95\xAD\x05\x10\t\x02\x96\xAD\x05" +
        "\x12\n\x02\x97\xAD\x05\x14\v\x02\x98\xAD\x05\x16\f\x02\x99\xAD\x05\x18" +
        "\r\x02\x9A\xAD\x05\x1A\x0E\x02\x9B\xAD\x05\x1C\x0F\x02\x9C\xAD\x05\x1E" +
        "\x10\x02\x9D\xAD\x05 \x11\x02\x9E\xAD\x05\"\x12\x02\x9F\xAD\x05$\x13\x02" +
        "\xA0\xAD\x05&\x14\x02\xA1\xAD\x05(\x15\x02\xA2\xAD\x05*\x16\x02\xA3\xAD" +
        "\x05,\x17\x02\xA4\xAD\x05.\x18\x02\xA5\xAD\x050\x19\x02\xA6\xAD\x052\x1A" +
        "\x02\xA7\xAD\x054\x1B\x02\xA8\xAD\x056\x1C\x02\xA9\xAD\x058\x1D\x02\xAA" +
        "\xAD\x05:\x1E\x02\xAB\xAD\x05<\x1F\x02\xAC\x91\x03\x02\x02\x02\xAC\x92" +
        "\x03\x02\x02\x02\xAC\x93\x03\x02\x02\x02\xAC\x94\x03\x02\x02\x02\xAC\x95" +
        "\x03\x02\x02\x02\xAC\x96\x03\x02\x02\x02\xAC\x97\x03\x02\x02\x02\xAC\x98" +
        "\x03\x02\x02\x02\xAC\x99\x03\x02\x02\x02\xAC\x9A\x03\x02\x02\x02\xAC\x9B" +
        "\x03\x02\x02\x02\xAC\x9C\x03\x02\x02\x02\xAC\x9D\x03\x02\x02\x02\xAC\x9E" +
        "\x03\x02\x02\x02\xAC\x9F\x03\x02\x02\x02\xAC\xA0\x03\x02\x02\x02\xAC\xA1" +
        "\x03\x02\x02\x02\xAC\xA2\x03\x02\x02\x02\xAC\xA3\x03\x02\x02\x02\xAC\xA4" +
        "\x03\x02\x02\x02\xAC\xA5\x03\x02\x02\x02\xAC\xA6\x03\x02\x02\x02\xAC\xA7" +
        "\x03\x02\x02\x02\xAC\xA8\x03\x02\x02\x02\xAC\xA9\x03\x02\x02\x02\xAC\xAA" +
        "\x03\x02\x02\x02\xAC\xAB\x03\x02\x02\x02\xAD\x07\x03\x02\x02\x02\xAE\xAF" +
        "\x07\x03\x02\x02\xAF\xB0\x05f4\x02\xB0\t\x03\x02\x02\x02\xB1\xB2\x07\x04" +
        "\x02\x02\xB2\xB3\x05d3\x02\xB3\xB4\x07\x05\x02\x02\xB4\xB5\x05f4\x02\xB5" +
        "\v\x03\x02\x02\x02\xB6\xB7\x07\x06\x02\x02\xB7\xBA\x05h5\x02\xB8\xB9\x07" +
        "\x05\x02\x02\xB9\xBB\x05l7\x02\xBA\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02" +
        "\x02\x02\xBB\r\x03\x02\x02\x02\xBC\xBD\t\x02\x02\x02\xBD\xC0\x05d3\x02" +
        "\xBE\xBF\x07\x05\x02\x02\xBF\xC1\x05j6\x02\xC0\xBE\x03\x02\x02\x02\xC0" +
        "\xC1\x03\x02\x02\x02\xC1\x0F\x03\x02\x02\x02\xC2\xC3\x07\t\x02\x02\xC3" +
        "\xC4\x05h5\x02\xC4\x11\x03\x02\x02\x02\xC5\xC6\x07\n\x02\x02\xC6\x13\x03" +
        "\x02\x02\x02\xC7\xC8\x07\v\x02\x02\xC8\xCB\x05h5\x02\xC9\xCA\x07\x05\x02" +
        "\x02\xCA\xCC\x05j6\x02\xCB\xC9\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02" +
        "\xCC\x15\x03\x02\x02\x02\xCD\xCF\x07\f\x02\x02\xCE\xD0\x05h5\x02\xCF\xCE" +
        "\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\x17\x03\x02\x02\x02\xD1\xD2" +
        "\x07\r\x02\x02\xD2\xD3\x05f4\x02\xD3\xD4\x07\x05\x02\x02\xD4\xD5\x05\x06" +
        "\x04\x02\xD5\x19\x03\x02\x02\x02\xD6\xD7\x07\x0E\x02\x02\xD7\xD8\x05d" +
        "3\x02\xD8\xDC\x07\x05\x02\x02\xD9\xDD\x05v<\x02\xDA\xDD\x05t;\x02\xDB" +
        "\xDD\x05x=\x02\xDC\xD9\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDB" +
        "\x03\x02\x02\x02\xDD\x1B\x03\x02\x02\x02\xDE\xDF\x07\x0F\x02\x02\xDF\xE0" +
        "\x05d3\x02\xE0\xE1\x07\x05\x02\x02\xE1\xE2\x05n8\x02\xE2\x1D\x03\x02\x02" +
        "\x02\xE3\xE4\x07\x10\x02\x02\xE4\xE5\x05d3\x02\xE5\xE6\x07\x05\x02\x02" +
        "\xE6\xE8\x05h5\x02\xE7\xE9\x05p9\x02\xE8\xE7\x03\x02\x02\x02\xE8\xE9\x03" +
        "\x02\x02\x02\xE9\x1F\x03\x02\x02\x02\xEA\xEB\x07\x11\x02\x02\xEB\xEE\x05" +
        "f4\x02\xEC\xED\x07\x05\x02\x02\xED\xEF\x05p9\x02\xEE\xEC\x03\x02\x02\x02" +
        "\xEE\xEF\x03\x02\x02\x02\xEF!\x03\x02\x02\x02\xF0\xF1\x07\x12\x02\x02" +
        "\xF1\xF4\x05d3\x02\xF2\xF3\x07\x05\x02\x02\xF3\xF5\x05r:\x02\xF4\xF2\x03" +
        "\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5#\x03\x02\x02\x02\xF6\xF7\x07" +
        "\x13\x02\x02\xF7\xFC\x05t;\x02\xF8\xF9\x07\x14\x02\x02\xF9\xFB\x05t;\x02" +
        "\xFA\xF8\x03\x02\x02\x02\xFB\xFE\x03\x02\x02\x02\xFC\xFA\x03\x02\x02\x02" +
        "\xFC\xFD\x03\x02\x02\x02\xFD\u0101\x03\x02\x02\x02\xFE\xFC\x03\x02\x02" +
        "\x02\xFF\u0100\x07\x05\x02\x02\u0100\u0102\x05v<\x02\u0101\xFF\x03\x02" +
        "\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102%\x03\x02\x02\x02\u0103\u0104" +
        "\t\x03\x02\x02\u0104\u0107\x05d3\x02\u0105\u0106\x07\x05\x02\x02\u0106" +
        "\u0108\x05r:\x02\u0107\u0105\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02" +
        "\u0108\'\x03\x02\x02\x02\u0109\u010A\x07\x17\x02\x02\u010A\u010B\x05p" +
        "9\x02\u010B\u010C\x07\x05\x02\x02\u010C\u010D\x05p9\x02\u010D)\x03\x02" +
        "\x02\x02\u010E\u010F\x07\x18\x02\x02\u010F\u0110\x05h5\x02\u0110+\x03" +
        "\x02\x02\x02\u0111\u0112\x07\x19\x02\x02\u0112\u0113\x05d3\x02\u0113\u0115" +
        "\x07\x05\x02\x02\u0114\u0116\x07\x1A\x02\x02\u0115\u0114\x03\x02\x02\x02" +
        "\u0115\u0116\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117\u0118\x05" +
        "z>\x02\u0118-\x03\x02\x02\x02\u0119\u011A\x07\x1B\x02\x02\u011A/\x03\x02" +
        "\x02\x02\u011B\u011C\x07\x1C\x02\x02\u011C\u011D\x05f4\x02\u011D1\x03" +
        "\x02\x02\x02\u011E\u011F\t\x04\x02\x02\u011F\u0122\x05d3\x02\u0120\u0121" +
        "\x07\x05\x02\x02\u0121\u0123\x05r:\x02\u0122\u0120\x03\x02\x02\x02\u0122" +
        "\u0123\x03\x02\x02\x02\u01233\x03\x02\x02\x02\u0124\u0128\x07\x1F\x02" +
        "\x02\u0125\u0126\x05d3\x02\u0126\u0127\x07\x05\x02\x02\u0127\u0129\x03" +
        "\x02\x02\x02\u0128\u0125\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129" +
        "\u012A\x03\x02\x02\x02\u012A\u012B\x05x=\x02\u012B5\x03\x02\x02\x02\u012C" +
        "\u012D\x07 \x02\x02\u012D\u012E\x05f4\x02\u012E7\x03\x02\x02\x02\u012F" +
        "\u0130\x07!\x02\x02\u0130\u0131\x05t;\x02\u01319\x03\x02\x02\x02\u0132" +
        "\u0133\x07\"\x02\x02\u0133\u0134\x05d3\x02\u0134;\x03\x02\x02\x02\u0135" +
        "\u0136\x07#\x02\x02\u0136\u0137\x05r:\x02\u0137=\x03\x02\x02\x02\u0138" +
        "\u014B\x05@!\x02\u0139\u014B\x05B\"\x02\u013A\u014B\x05D#\x02\u013B\u014B" +
        "\x05F$\x02\u013C\u014B\x05H%\x02\u013D\u014B\x05J&\x02\u013E\u014B\x05" +
        "L\'\x02\u013F\u014B\x05N(\x02\u0140\u014B\x05P)\x02\u0141\u014B\x05R*" +
        "\x02\u0142\u014B\x05T+\x02\u0143\u014B\x05V,\x02\u0144\u014B\x05X-\x02" +
        "\u0145\u014B\x05Z.\x02\u0146\u014B\x05\\/\x02\u0147\u014B\x05^0\x02\u0148" +
        "\u014B\x05`1\x02\u0149\u014B\x05b2\x02\u014A\u0138\x03\x02\x02\x02\u014A" +
        "\u0139\x03\x02\x02\x02\u014A\u013A\x03\x02\x02\x02\u014A\u013B\x03\x02" +
        "\x02\x02\u014A\u013C\x03\x02\x02\x02\u014A\u013D\x03\x02\x02\x02\u014A" +
        "\u013E\x03\x02\x02\x02\u014A\u013F\x03\x02\x02\x02\u014A\u0140\x03\x02" +
        "\x02\x02\u014A\u0141\x03\x02\x02\x02\u014A\u0142\x03\x02\x02\x02\u014A" +
        "\u0143\x03\x02\x02\x02\u014A\u0144\x03\x02\x02\x02\u014A\u0145\x03\x02" +
        "\x02\x02\u014A\u0146\x03\x02\x02\x02\u014A\u0147\x03\x02\x02\x02\u014A" +
        "\u0148\x03\x02\x02\x02\u014A\u0149\x03\x02\x02\x02\u014B?\x03\x02\x02" +
        "\x02\u014C\u014D\t\x05\x02\x02\u014D\u014E\x05d3\x02\u014EA\x03\x02\x02" +
        "\x02\u014F\u0150\x07&\x02\x02\u0150\u0151\x05d3\x02\u0151C\x03\x02\x02" +
        "\x02\u0152\u0153\t\x06\x02\x02\u0153\u0154\x05d3\x02\u0154E\x03\x02\x02" +
        "\x02\u0155\u0156\x07)\x02\x02\u0156\u0157\x05f4\x02\u0157\u0158\x07\x05" +
        "\x02\x02\u0158\u0159\x05|?\x02\u0159G\x03\x02\x02\x02\u015A\u015B\t\x07" +
        "\x02\x02\u015B\u015C\x05~@\x02\u015CI\x03\x02\x02\x02\u015D\u015E\x07" +
        "-\x02\x02\u015E\u015F\x05r:\x02\u015FK\x03\x02\x02\x02\u0160\u0161\x07" +
        ".\x02\x02\u0161M\x03\x02\x02\x02\u0162\u0163\t\b\x02\x02\u0163O\x03\x02" +
        "\x02\x02\u0164\u0165\x071\x02\x02\u0165\u0166\x05f4\x02\u0166\u0167\x07" +
        "\x05\x02\x02\u0167\u0168\x05l7\x02\u0168Q\x03\x02\x02\x02\u0169\u016A" +
        "\t\t\x02\x02\u016A\u016B\x05d3\x02\u016BS\x03\x02\x02\x02\u016C\u016D" +
        "\x074\x02\x02\u016DU\x03\x02\x02\x02\u016E\u016F\x075\x02\x02\u016F\u0170" +
        "\x05f4\x02\u0170\u0171\x07\x05\x02\x02\u0171\u0172\x05r:\x02\u0172W\x03" +
        "\x02\x02\x02\u0173\u0174\x076\x02\x02\u0174Y\x03\x02\x02\x02\u0175\u0176" +
        "\x077\x02\x02\u0176\u0177\x05f4\x02\u0177[\x03\x02\x02\x02\u0178\u0179" +
        "\x078\x02\x02\u0179\u017A\x05r:\x02\u017A]\x03\x02\x02\x02\u017B\u017C" +
        "\x079\x02\x02\u017C_\x03\x02\x02\x02\u017D\u017E\x07:\x02\x02\u017E\u017F" +
        "\x05f4\x02\u017F\u0180\x07\x05\x02\x02\u0180\u0181\x05r:\x02\u0181a\x03" +
        "\x02\x02\x02\u0182\u0184\x07;\x02\x02\u0183\u0185\x05f4\x02\u0184\u0183" +
        "\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185c\x03\x02\x02\x02\u0186" +
        "\u0187\x07<\x02\x02\u0187e\x03\x02\x02\x02\u0188\u0189\x07<\x02\x02\u0189" +
        "g\x03\x02\x02\x02\u018A\u018B\x07<\x02\x02\u018Bi\x03\x02\x02\x02\u018C" +
        "\u018D\x07<\x02\x02\u018Dk\x03\x02\x02\x02\u018E\u018F\x07=\x02\x02\u018F" +
        "m\x03\x02\x02\x02\u0190\u0191\x07<\x02\x02\u0191o\x03\x02\x02\x02\u0192" +
        "\u0193\x07<\x02\x02\u0193q\x03\x02\x02\x02\u0194\u0195\x07<\x02\x02\u0195" +
        "s\x03\x02\x02\x02\u0196\u0197\x07<\x02\x02\u0197u\x03\x02\x02\x02\u0198" +
        "\u0199\x07=\x02\x02\u0199w\x03\x02\x02\x02\u019A\u019B\x07<\x02\x02\u019B" +
        "y\x03\x02\x02\x02\u019C\u019D\x07=\x02\x02\u019D{\x03\x02\x02\x02\u019E" +
        "\u019F\x07=\x02\x02\u019F}\x03\x02\x02\x02\u01A0\u01A1\x07<\x02\x02\u01A1" +
        "\x7F\x03\x02\x02\x02\x16\x83\x88\x8D\xAC\xBA\xC0\xCB\xCF\xDC\xE8\xEE\xF4" +
        "\xFC\u0101\u0107\u0115\u0122\u0128\u014A\u0184";
    return tinymudParser;
}(Parser_1.Parser));
exports.tinymudParser = tinymudParser;
var ProgContext = /** @class */ (function (_super) {
    __extends(ProgContext, _super);
    function ProgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgContext.prototype.line = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LineContext);
        }
        else {
            return this.getRuleContext(i, LineContext);
        }
    };
    ProgContext.prototype.EOL = function (i) {
        if (i === undefined) {
            return this.getTokens(tinymudParser.EOL);
        }
        else {
            return this.getToken(tinymudParser.EOL, i);
        }
    };
    Object.defineProperty(ProgContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_prog; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProgContext.prototype.enterRule = function (listener) {
        if (listener.enterProg) {
            listener.enterProg(this);
        }
    };
    // @Override
    ProgContext.prototype.exitRule = function (listener) {
        if (listener.exitProg) {
            listener.exitProg(this);
        }
    };
    // @Override
    ProgContext.prototype.accept = function (visitor) {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProgContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProgContext = ProgContext;
var LineContext = /** @class */ (function (_super) {
    __extends(LineContext, _super);
    function LineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LineContext.prototype.EOL = function () { return this.getToken(tinymudParser.EOL, 0); };
    LineContext.prototype.command = function () {
        return this.tryGetRuleContext(0, CommandContext);
    };
    LineContext.prototype.action = function () {
        return this.tryGetRuleContext(0, ActionContext);
    };
    Object.defineProperty(LineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_line; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LineContext.prototype.enterRule = function (listener) {
        if (listener.enterLine) {
            listener.enterLine(this);
        }
    };
    // @Override
    LineContext.prototype.exitRule = function (listener) {
        if (listener.exitLine) {
            listener.exitLine(this);
        }
    };
    // @Override
    LineContext.prototype.accept = function (visitor) {
        if (visitor.visitLine) {
            return visitor.visitLine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LineContext = LineContext;
var CommandContext = /** @class */ (function (_super) {
    __extends(CommandContext, _super);
    function CommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommandContext.prototype.bootcommand = function () {
        return this.tryGetRuleContext(0, BootcommandContext);
    };
    CommandContext.prototype.chowncommand = function () {
        return this.tryGetRuleContext(0, ChowncommandContext);
    };
    CommandContext.prototype.createcommand = function () {
        return this.tryGetRuleContext(0, CreatecommandContext);
    };
    CommandContext.prototype.describecommand = function () {
        return this.tryGetRuleContext(0, DescribecommandContext);
    };
    CommandContext.prototype.digcommand = function () {
        return this.tryGetRuleContext(0, DigcommandContext);
    };
    CommandContext.prototype.dumpcommand = function () {
        return this.tryGetRuleContext(0, DumpcommandContext);
    };
    CommandContext.prototype.failcommand = function () {
        return this.tryGetRuleContext(0, FailcommandContext);
    };
    CommandContext.prototype.findcommand = function () {
        return this.tryGetRuleContext(0, FindcommandContext);
    };
    CommandContext.prototype.forcecommand = function () {
        return this.tryGetRuleContext(0, ForcecommandContext);
    };
    CommandContext.prototype.linkcommand = function () {
        return this.tryGetRuleContext(0, LinkcommandContext);
    };
    CommandContext.prototype.lockcommand = function () {
        return this.tryGetRuleContext(0, LockcommandContext);
    };
    CommandContext.prototype.namecommand = function () {
        return this.tryGetRuleContext(0, NamecommandContext);
    };
    CommandContext.prototype.newpassswordcommand = function () {
        return this.tryGetRuleContext(0, NewpassswordcommandContext);
    };
    CommandContext.prototype.ofailcommand = function () {
        return this.tryGetRuleContext(0, OfailcommandContext);
    };
    CommandContext.prototype.opencommand = function () {
        return this.tryGetRuleContext(0, OpencommandContext);
    };
    CommandContext.prototype.osuccesscommand = function () {
        return this.tryGetRuleContext(0, OsuccesscommandContext);
    };
    CommandContext.prototype.passwordcommand = function () {
        return this.tryGetRuleContext(0, PasswordcommandContext);
    };
    CommandContext.prototype.pcreatecommand = function () {
        return this.tryGetRuleContext(0, PcreatecommandContext);
    };
    CommandContext.prototype.setcommand = function () {
        return this.tryGetRuleContext(0, SetcommandContext);
    };
    CommandContext.prototype.shutdowncommand = function () {
        return this.tryGetRuleContext(0, ShutdowncommandContext);
    };
    CommandContext.prototype.statscommand = function () {
        return this.tryGetRuleContext(0, StatscommandContext);
    };
    CommandContext.prototype.successcommand = function () {
        return this.tryGetRuleContext(0, SuccesscommandContext);
    };
    CommandContext.prototype.teleportcommand = function () {
        return this.tryGetRuleContext(0, TeleportcommandContext);
    };
    CommandContext.prototype.toadcommand = function () {
        return this.tryGetRuleContext(0, ToadcommandContext);
    };
    CommandContext.prototype.unlinkcommand = function () {
        return this.tryGetRuleContext(0, UnlinkcommandContext);
    };
    CommandContext.prototype.unlockcommand = function () {
        return this.tryGetRuleContext(0, UnlockcommandContext);
    };
    CommandContext.prototype.wallcommand = function () {
        return this.tryGetRuleContext(0, WallcommandContext);
    };
    Object.defineProperty(CommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_command; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CommandContext.prototype.enterRule = function (listener) {
        if (listener.enterCommand) {
            listener.enterCommand(this);
        }
    };
    // @Override
    CommandContext.prototype.exitRule = function (listener) {
        if (listener.exitCommand) {
            listener.exitCommand(this);
        }
    };
    // @Override
    CommandContext.prototype.accept = function (visitor) {
        if (visitor.visitCommand) {
            return visitor.visitCommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommandContext = CommandContext;
var BootcommandContext = /** @class */ (function (_super) {
    __extends(BootcommandContext, _super);
    function BootcommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BootcommandContext.prototype.player = function () {
        return this.getRuleContext(0, PlayerContext);
    };
    Object.defineProperty(BootcommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_bootcommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BootcommandContext.prototype.enterRule = function (listener) {
        if (listener.enterBootcommand) {
            listener.enterBootcommand(this);
        }
    };
    // @Override
    BootcommandContext.prototype.exitRule = function (listener) {
        if (listener.exitBootcommand) {
            listener.exitBootcommand(this);
        }
    };
    // @Override
    BootcommandContext.prototype.accept = function (visitor) {
        if (visitor.visitBootcommand) {
            return visitor.visitBootcommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BootcommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BootcommandContext = BootcommandContext;
var ChowncommandContext = /** @class */ (function (_super) {
    __extends(ChowncommandContext, _super);
    function ChowncommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ChowncommandContext.prototype.object = function () {
        return this.getRuleContext(0, ObjectContext);
    };
    ChowncommandContext.prototype.player = function () {
        return this.getRuleContext(0, PlayerContext);
    };
    Object.defineProperty(ChowncommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_chowncommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ChowncommandContext.prototype.enterRule = function (listener) {
        if (listener.enterChowncommand) {
            listener.enterChowncommand(this);
        }
    };
    // @Override
    ChowncommandContext.prototype.exitRule = function (listener) {
        if (listener.exitChowncommand) {
            listener.exitChowncommand(this);
        }
    };
    // @Override
    ChowncommandContext.prototype.accept = function (visitor) {
        if (visitor.visitChowncommand) {
            return visitor.visitChowncommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ChowncommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ChowncommandContext = ChowncommandContext;
var CreatecommandContext = /** @class */ (function (_super) {
    __extends(CreatecommandContext, _super);
    function CreatecommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CreatecommandContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    CreatecommandContext.prototype.cost = function () {
        return this.tryGetRuleContext(0, CostContext);
    };
    Object.defineProperty(CreatecommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_createcommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CreatecommandContext.prototype.enterRule = function (listener) {
        if (listener.enterCreatecommand) {
            listener.enterCreatecommand(this);
        }
    };
    // @Override
    CreatecommandContext.prototype.exitRule = function (listener) {
        if (listener.exitCreatecommand) {
            listener.exitCreatecommand(this);
        }
    };
    // @Override
    CreatecommandContext.prototype.accept = function (visitor) {
        if (visitor.visitCreatecommand) {
            return visitor.visitCreatecommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CreatecommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CreatecommandContext = CreatecommandContext;
var DescribecommandContext = /** @class */ (function (_super) {
    __extends(DescribecommandContext, _super);
    function DescribecommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DescribecommandContext.prototype.object = function () {
        return this.getRuleContext(0, ObjectContext);
    };
    DescribecommandContext.prototype.description = function () {
        return this.tryGetRuleContext(0, DescriptionContext);
    };
    Object.defineProperty(DescribecommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_describecommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DescribecommandContext.prototype.enterRule = function (listener) {
        if (listener.enterDescribecommand) {
            listener.enterDescribecommand(this);
        }
    };
    // @Override
    DescribecommandContext.prototype.exitRule = function (listener) {
        if (listener.exitDescribecommand) {
            listener.exitDescribecommand(this);
        }
    };
    // @Override
    DescribecommandContext.prototype.accept = function (visitor) {
        if (visitor.visitDescribecommand) {
            return visitor.visitDescribecommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DescribecommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DescribecommandContext = DescribecommandContext;
var DigcommandContext = /** @class */ (function (_super) {
    __extends(DigcommandContext, _super);
    function DigcommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DigcommandContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    Object.defineProperty(DigcommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_digcommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DigcommandContext.prototype.enterRule = function (listener) {
        if (listener.enterDigcommand) {
            listener.enterDigcommand(this);
        }
    };
    // @Override
    DigcommandContext.prototype.exitRule = function (listener) {
        if (listener.exitDigcommand) {
            listener.exitDigcommand(this);
        }
    };
    // @Override
    DigcommandContext.prototype.accept = function (visitor) {
        if (visitor.visitDigcommand) {
            return visitor.visitDigcommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DigcommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DigcommandContext = DigcommandContext;
var DumpcommandContext = /** @class */ (function (_super) {
    __extends(DumpcommandContext, _super);
    function DumpcommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(DumpcommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_dumpcommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DumpcommandContext.prototype.enterRule = function (listener) {
        if (listener.enterDumpcommand) {
            listener.enterDumpcommand(this);
        }
    };
    // @Override
    DumpcommandContext.prototype.exitRule = function (listener) {
        if (listener.exitDumpcommand) {
            listener.exitDumpcommand(this);
        }
    };
    // @Override
    DumpcommandContext.prototype.accept = function (visitor) {
        if (visitor.visitDumpcommand) {
            return visitor.visitDumpcommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DumpcommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DumpcommandContext = DumpcommandContext;
var FailcommandContext = /** @class */ (function (_super) {
    __extends(FailcommandContext, _super);
    function FailcommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FailcommandContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    FailcommandContext.prototype.description = function () {
        return this.tryGetRuleContext(0, DescriptionContext);
    };
    Object.defineProperty(FailcommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_failcommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FailcommandContext.prototype.enterRule = function (listener) {
        if (listener.enterFailcommand) {
            listener.enterFailcommand(this);
        }
    };
    // @Override
    FailcommandContext.prototype.exitRule = function (listener) {
        if (listener.exitFailcommand) {
            listener.exitFailcommand(this);
        }
    };
    // @Override
    FailcommandContext.prototype.accept = function (visitor) {
        if (visitor.visitFailcommand) {
            return visitor.visitFailcommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FailcommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FailcommandContext = FailcommandContext;
var FindcommandContext = /** @class */ (function (_super) {
    __extends(FindcommandContext, _super);
    function FindcommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FindcommandContext.prototype.name = function () {
        return this.tryGetRuleContext(0, NameContext);
    };
    Object.defineProperty(FindcommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_findcommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FindcommandContext.prototype.enterRule = function (listener) {
        if (listener.enterFindcommand) {
            listener.enterFindcommand(this);
        }
    };
    // @Override
    FindcommandContext.prototype.exitRule = function (listener) {
        if (listener.exitFindcommand) {
            listener.exitFindcommand(this);
        }
    };
    // @Override
    FindcommandContext.prototype.accept = function (visitor) {
        if (visitor.visitFindcommand) {
            return visitor.visitFindcommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FindcommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FindcommandContext = FindcommandContext;
var ForcecommandContext = /** @class */ (function (_super) {
    __extends(ForcecommandContext, _super);
    function ForcecommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForcecommandContext.prototype.player = function () {
        return this.getRuleContext(0, PlayerContext);
    };
    ForcecommandContext.prototype.command = function () {
        return this.getRuleContext(0, CommandContext);
    };
    Object.defineProperty(ForcecommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_forcecommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ForcecommandContext.prototype.enterRule = function (listener) {
        if (listener.enterForcecommand) {
            listener.enterForcecommand(this);
        }
    };
    // @Override
    ForcecommandContext.prototype.exitRule = function (listener) {
        if (listener.exitForcecommand) {
            listener.exitForcecommand(this);
        }
    };
    // @Override
    ForcecommandContext.prototype.accept = function (visitor) {
        if (visitor.visitForcecommand) {
            return visitor.visitForcecommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForcecommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForcecommandContext = ForcecommandContext;
var LinkcommandContext = /** @class */ (function (_super) {
    __extends(LinkcommandContext, _super);
    function LinkcommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LinkcommandContext.prototype.object = function () {
        return this.getRuleContext(0, ObjectContext);
    };
    LinkcommandContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    LinkcommandContext.prototype.dir = function () {
        return this.tryGetRuleContext(0, DirContext);
    };
    LinkcommandContext.prototype.room = function () {
        return this.tryGetRuleContext(0, RoomContext);
    };
    Object.defineProperty(LinkcommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_linkcommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LinkcommandContext.prototype.enterRule = function (listener) {
        if (listener.enterLinkcommand) {
            listener.enterLinkcommand(this);
        }
    };
    // @Override
    LinkcommandContext.prototype.exitRule = function (listener) {
        if (listener.exitLinkcommand) {
            listener.exitLinkcommand(this);
        }
    };
    // @Override
    LinkcommandContext.prototype.accept = function (visitor) {
        if (visitor.visitLinkcommand) {
            return visitor.visitLinkcommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LinkcommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LinkcommandContext = LinkcommandContext;
var LockcommandContext = /** @class */ (function (_super) {
    __extends(LockcommandContext, _super);
    function LockcommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LockcommandContext.prototype.object = function () {
        return this.getRuleContext(0, ObjectContext);
    };
    LockcommandContext.prototype.key = function () {
        return this.getRuleContext(0, KeyContext);
    };
    Object.defineProperty(LockcommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_lockcommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LockcommandContext.prototype.enterRule = function (listener) {
        if (listener.enterLockcommand) {
            listener.enterLockcommand(this);
        }
    };
    // @Override
    LockcommandContext.prototype.exitRule = function (listener) {
        if (listener.exitLockcommand) {
            listener.exitLockcommand(this);
        }
    };
    // @Override
    LockcommandContext.prototype.accept = function (visitor) {
        if (visitor.visitLockcommand) {
            return visitor.visitLockcommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LockcommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LockcommandContext = LockcommandContext;
var NamecommandContext = /** @class */ (function (_super) {
    __extends(NamecommandContext, _super);
    function NamecommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamecommandContext.prototype.object = function () {
        return this.getRuleContext(0, ObjectContext);
    };
    NamecommandContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    NamecommandContext.prototype.password = function () {
        return this.tryGetRuleContext(0, PasswordContext);
    };
    Object.defineProperty(NamecommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_namecommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NamecommandContext.prototype.enterRule = function (listener) {
        if (listener.enterNamecommand) {
            listener.enterNamecommand(this);
        }
    };
    // @Override
    NamecommandContext.prototype.exitRule = function (listener) {
        if (listener.exitNamecommand) {
            listener.exitNamecommand(this);
        }
    };
    // @Override
    NamecommandContext.prototype.accept = function (visitor) {
        if (visitor.visitNamecommand) {
            return visitor.visitNamecommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NamecommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NamecommandContext = NamecommandContext;
var NewpassswordcommandContext = /** @class */ (function (_super) {
    __extends(NewpassswordcommandContext, _super);
    function NewpassswordcommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NewpassswordcommandContext.prototype.player = function () {
        return this.getRuleContext(0, PlayerContext);
    };
    NewpassswordcommandContext.prototype.password = function () {
        return this.tryGetRuleContext(0, PasswordContext);
    };
    Object.defineProperty(NewpassswordcommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_newpassswordcommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NewpassswordcommandContext.prototype.enterRule = function (listener) {
        if (listener.enterNewpassswordcommand) {
            listener.enterNewpassswordcommand(this);
        }
    };
    // @Override
    NewpassswordcommandContext.prototype.exitRule = function (listener) {
        if (listener.exitNewpassswordcommand) {
            listener.exitNewpassswordcommand(this);
        }
    };
    // @Override
    NewpassswordcommandContext.prototype.accept = function (visitor) {
        if (visitor.visitNewpassswordcommand) {
            return visitor.visitNewpassswordcommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NewpassswordcommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NewpassswordcommandContext = NewpassswordcommandContext;
var OfailcommandContext = /** @class */ (function (_super) {
    __extends(OfailcommandContext, _super);
    function OfailcommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OfailcommandContext.prototype.object = function () {
        return this.getRuleContext(0, ObjectContext);
    };
    OfailcommandContext.prototype.message = function () {
        return this.tryGetRuleContext(0, MessageContext);
    };
    Object.defineProperty(OfailcommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_ofailcommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OfailcommandContext.prototype.enterRule = function (listener) {
        if (listener.enterOfailcommand) {
            listener.enterOfailcommand(this);
        }
    };
    // @Override
    OfailcommandContext.prototype.exitRule = function (listener) {
        if (listener.exitOfailcommand) {
            listener.exitOfailcommand(this);
        }
    };
    // @Override
    OfailcommandContext.prototype.accept = function (visitor) {
        if (visitor.visitOfailcommand) {
            return visitor.visitOfailcommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OfailcommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OfailcommandContext = OfailcommandContext;
var OpencommandContext = /** @class */ (function (_super) {
    __extends(OpencommandContext, _super);
    function OpencommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OpencommandContext.prototype.dir = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DirContext);
        }
        else {
            return this.getRuleContext(i, DirContext);
        }
    };
    OpencommandContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    Object.defineProperty(OpencommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_opencommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OpencommandContext.prototype.enterRule = function (listener) {
        if (listener.enterOpencommand) {
            listener.enterOpencommand(this);
        }
    };
    // @Override
    OpencommandContext.prototype.exitRule = function (listener) {
        if (listener.exitOpencommand) {
            listener.exitOpencommand(this);
        }
    };
    // @Override
    OpencommandContext.prototype.accept = function (visitor) {
        if (visitor.visitOpencommand) {
            return visitor.visitOpencommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OpencommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OpencommandContext = OpencommandContext;
var OsuccesscommandContext = /** @class */ (function (_super) {
    __extends(OsuccesscommandContext, _super);
    function OsuccesscommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OsuccesscommandContext.prototype.object = function () {
        return this.getRuleContext(0, ObjectContext);
    };
    OsuccesscommandContext.prototype.message = function () {
        return this.tryGetRuleContext(0, MessageContext);
    };
    Object.defineProperty(OsuccesscommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_osuccesscommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OsuccesscommandContext.prototype.enterRule = function (listener) {
        if (listener.enterOsuccesscommand) {
            listener.enterOsuccesscommand(this);
        }
    };
    // @Override
    OsuccesscommandContext.prototype.exitRule = function (listener) {
        if (listener.exitOsuccesscommand) {
            listener.exitOsuccesscommand(this);
        }
    };
    // @Override
    OsuccesscommandContext.prototype.accept = function (visitor) {
        if (visitor.visitOsuccesscommand) {
            return visitor.visitOsuccesscommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OsuccesscommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OsuccesscommandContext = OsuccesscommandContext;
var PasswordcommandContext = /** @class */ (function (_super) {
    __extends(PasswordcommandContext, _super);
    function PasswordcommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PasswordcommandContext.prototype.password = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PasswordContext);
        }
        else {
            return this.getRuleContext(i, PasswordContext);
        }
    };
    Object.defineProperty(PasswordcommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_passwordcommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PasswordcommandContext.prototype.enterRule = function (listener) {
        if (listener.enterPasswordcommand) {
            listener.enterPasswordcommand(this);
        }
    };
    // @Override
    PasswordcommandContext.prototype.exitRule = function (listener) {
        if (listener.exitPasswordcommand) {
            listener.exitPasswordcommand(this);
        }
    };
    // @Override
    PasswordcommandContext.prototype.accept = function (visitor) {
        if (visitor.visitPasswordcommand) {
            return visitor.visitPasswordcommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PasswordcommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PasswordcommandContext = PasswordcommandContext;
var PcreatecommandContext = /** @class */ (function (_super) {
    __extends(PcreatecommandContext, _super);
    function PcreatecommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PcreatecommandContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    Object.defineProperty(PcreatecommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_pcreatecommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PcreatecommandContext.prototype.enterRule = function (listener) {
        if (listener.enterPcreatecommand) {
            listener.enterPcreatecommand(this);
        }
    };
    // @Override
    PcreatecommandContext.prototype.exitRule = function (listener) {
        if (listener.exitPcreatecommand) {
            listener.exitPcreatecommand(this);
        }
    };
    // @Override
    PcreatecommandContext.prototype.accept = function (visitor) {
        if (visitor.visitPcreatecommand) {
            return visitor.visitPcreatecommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PcreatecommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PcreatecommandContext = PcreatecommandContext;
var SetcommandContext = /** @class */ (function (_super) {
    __extends(SetcommandContext, _super);
    function SetcommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SetcommandContext.prototype.object = function () {
        return this.getRuleContext(0, ObjectContext);
    };
    SetcommandContext.prototype.flag = function () {
        return this.getRuleContext(0, FlagContext);
    };
    Object.defineProperty(SetcommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_setcommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SetcommandContext.prototype.enterRule = function (listener) {
        if (listener.enterSetcommand) {
            listener.enterSetcommand(this);
        }
    };
    // @Override
    SetcommandContext.prototype.exitRule = function (listener) {
        if (listener.exitSetcommand) {
            listener.exitSetcommand(this);
        }
    };
    // @Override
    SetcommandContext.prototype.accept = function (visitor) {
        if (visitor.visitSetcommand) {
            return visitor.visitSetcommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SetcommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SetcommandContext = SetcommandContext;
var ShutdowncommandContext = /** @class */ (function (_super) {
    __extends(ShutdowncommandContext, _super);
    function ShutdowncommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ShutdowncommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_shutdowncommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ShutdowncommandContext.prototype.enterRule = function (listener) {
        if (listener.enterShutdowncommand) {
            listener.enterShutdowncommand(this);
        }
    };
    // @Override
    ShutdowncommandContext.prototype.exitRule = function (listener) {
        if (listener.exitShutdowncommand) {
            listener.exitShutdowncommand(this);
        }
    };
    // @Override
    ShutdowncommandContext.prototype.accept = function (visitor) {
        if (visitor.visitShutdowncommand) {
            return visitor.visitShutdowncommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ShutdowncommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ShutdowncommandContext = ShutdowncommandContext;
var StatscommandContext = /** @class */ (function (_super) {
    __extends(StatscommandContext, _super);
    function StatscommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatscommandContext.prototype.player = function () {
        return this.getRuleContext(0, PlayerContext);
    };
    Object.defineProperty(StatscommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_statscommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StatscommandContext.prototype.enterRule = function (listener) {
        if (listener.enterStatscommand) {
            listener.enterStatscommand(this);
        }
    };
    // @Override
    StatscommandContext.prototype.exitRule = function (listener) {
        if (listener.exitStatscommand) {
            listener.exitStatscommand(this);
        }
    };
    // @Override
    StatscommandContext.prototype.accept = function (visitor) {
        if (visitor.visitStatscommand) {
            return visitor.visitStatscommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StatscommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StatscommandContext = StatscommandContext;
var SuccesscommandContext = /** @class */ (function (_super) {
    __extends(SuccesscommandContext, _super);
    function SuccesscommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SuccesscommandContext.prototype.object = function () {
        return this.getRuleContext(0, ObjectContext);
    };
    SuccesscommandContext.prototype.message = function () {
        return this.tryGetRuleContext(0, MessageContext);
    };
    Object.defineProperty(SuccesscommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_successcommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SuccesscommandContext.prototype.enterRule = function (listener) {
        if (listener.enterSuccesscommand) {
            listener.enterSuccesscommand(this);
        }
    };
    // @Override
    SuccesscommandContext.prototype.exitRule = function (listener) {
        if (listener.exitSuccesscommand) {
            listener.exitSuccesscommand(this);
        }
    };
    // @Override
    SuccesscommandContext.prototype.accept = function (visitor) {
        if (visitor.visitSuccesscommand) {
            return visitor.visitSuccesscommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SuccesscommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SuccesscommandContext = SuccesscommandContext;
var TeleportcommandContext = /** @class */ (function (_super) {
    __extends(TeleportcommandContext, _super);
    function TeleportcommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TeleportcommandContext.prototype.room = function () {
        return this.getRuleContext(0, RoomContext);
    };
    TeleportcommandContext.prototype.object = function () {
        return this.tryGetRuleContext(0, ObjectContext);
    };
    Object.defineProperty(TeleportcommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_teleportcommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TeleportcommandContext.prototype.enterRule = function (listener) {
        if (listener.enterTeleportcommand) {
            listener.enterTeleportcommand(this);
        }
    };
    // @Override
    TeleportcommandContext.prototype.exitRule = function (listener) {
        if (listener.exitTeleportcommand) {
            listener.exitTeleportcommand(this);
        }
    };
    // @Override
    TeleportcommandContext.prototype.accept = function (visitor) {
        if (visitor.visitTeleportcommand) {
            return visitor.visitTeleportcommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TeleportcommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TeleportcommandContext = TeleportcommandContext;
var ToadcommandContext = /** @class */ (function (_super) {
    __extends(ToadcommandContext, _super);
    function ToadcommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ToadcommandContext.prototype.player = function () {
        return this.getRuleContext(0, PlayerContext);
    };
    Object.defineProperty(ToadcommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_toadcommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ToadcommandContext.prototype.enterRule = function (listener) {
        if (listener.enterToadcommand) {
            listener.enterToadcommand(this);
        }
    };
    // @Override
    ToadcommandContext.prototype.exitRule = function (listener) {
        if (listener.exitToadcommand) {
            listener.exitToadcommand(this);
        }
    };
    // @Override
    ToadcommandContext.prototype.accept = function (visitor) {
        if (visitor.visitToadcommand) {
            return visitor.visitToadcommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ToadcommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ToadcommandContext = ToadcommandContext;
var UnlinkcommandContext = /** @class */ (function (_super) {
    __extends(UnlinkcommandContext, _super);
    function UnlinkcommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnlinkcommandContext.prototype.dir = function () {
        return this.getRuleContext(0, DirContext);
    };
    Object.defineProperty(UnlinkcommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_unlinkcommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnlinkcommandContext.prototype.enterRule = function (listener) {
        if (listener.enterUnlinkcommand) {
            listener.enterUnlinkcommand(this);
        }
    };
    // @Override
    UnlinkcommandContext.prototype.exitRule = function (listener) {
        if (listener.exitUnlinkcommand) {
            listener.exitUnlinkcommand(this);
        }
    };
    // @Override
    UnlinkcommandContext.prototype.accept = function (visitor) {
        if (visitor.visitUnlinkcommand) {
            return visitor.visitUnlinkcommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnlinkcommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnlinkcommandContext = UnlinkcommandContext;
var UnlockcommandContext = /** @class */ (function (_super) {
    __extends(UnlockcommandContext, _super);
    function UnlockcommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnlockcommandContext.prototype.object = function () {
        return this.getRuleContext(0, ObjectContext);
    };
    Object.defineProperty(UnlockcommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_unlockcommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnlockcommandContext.prototype.enterRule = function (listener) {
        if (listener.enterUnlockcommand) {
            listener.enterUnlockcommand(this);
        }
    };
    // @Override
    UnlockcommandContext.prototype.exitRule = function (listener) {
        if (listener.exitUnlockcommand) {
            listener.exitUnlockcommand(this);
        }
    };
    // @Override
    UnlockcommandContext.prototype.accept = function (visitor) {
        if (visitor.visitUnlockcommand) {
            return visitor.visitUnlockcommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnlockcommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnlockcommandContext = UnlockcommandContext;
var WallcommandContext = /** @class */ (function (_super) {
    __extends(WallcommandContext, _super);
    function WallcommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WallcommandContext.prototype.message = function () {
        return this.getRuleContext(0, MessageContext);
    };
    Object.defineProperty(WallcommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_wallcommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WallcommandContext.prototype.enterRule = function (listener) {
        if (listener.enterWallcommand) {
            listener.enterWallcommand(this);
        }
    };
    // @Override
    WallcommandContext.prototype.exitRule = function (listener) {
        if (listener.exitWallcommand) {
            listener.exitWallcommand(this);
        }
    };
    // @Override
    WallcommandContext.prototype.accept = function (visitor) {
        if (visitor.visitWallcommand) {
            return visitor.visitWallcommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WallcommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WallcommandContext = WallcommandContext;
var ActionContext = /** @class */ (function (_super) {
    __extends(ActionContext, _super);
    function ActionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ActionContext.prototype.dropaction = function () {
        return this.tryGetRuleContext(0, DropactionContext);
    };
    ActionContext.prototype.examineaction = function () {
        return this.tryGetRuleContext(0, ExamineactionContext);
    };
    ActionContext.prototype.getaction = function () {
        return this.tryGetRuleContext(0, GetactionContext);
    };
    ActionContext.prototype.giveaction = function () {
        return this.tryGetRuleContext(0, GiveactionContext);
    };
    ActionContext.prototype.gotoaction = function () {
        return this.tryGetRuleContext(0, GotoactionContext);
    };
    ActionContext.prototype.gripeaction = function () {
        return this.tryGetRuleContext(0, GripeactionContext);
    };
    ActionContext.prototype.helpaction = function () {
        return this.tryGetRuleContext(0, HelpactionContext);
    };
    ActionContext.prototype.inventoryaction = function () {
        return this.tryGetRuleContext(0, InventoryactionContext);
    };
    ActionContext.prototype.killaction = function () {
        return this.tryGetRuleContext(0, KillactionContext);
    };
    ActionContext.prototype.lookaction = function () {
        return this.tryGetRuleContext(0, LookactionContext);
    };
    ActionContext.prototype.newsaction = function () {
        return this.tryGetRuleContext(0, NewsactionContext);
    };
    ActionContext.prototype.pageaction = function () {
        return this.tryGetRuleContext(0, PageactionContext);
    };
    ActionContext.prototype.quitaction = function () {
        return this.tryGetRuleContext(0, QuitactionContext);
    };
    ActionContext.prototype.robaction = function () {
        return this.tryGetRuleContext(0, RobactionContext);
    };
    ActionContext.prototype.sayaction = function () {
        return this.tryGetRuleContext(0, SayactionContext);
    };
    ActionContext.prototype.scoreaction = function () {
        return this.tryGetRuleContext(0, ScoreactionContext);
    };
    ActionContext.prototype.whisperaction = function () {
        return this.tryGetRuleContext(0, WhisperactionContext);
    };
    ActionContext.prototype.whoaction = function () {
        return this.tryGetRuleContext(0, WhoactionContext);
    };
    Object.defineProperty(ActionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_action; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ActionContext.prototype.enterRule = function (listener) {
        if (listener.enterAction) {
            listener.enterAction(this);
        }
    };
    // @Override
    ActionContext.prototype.exitRule = function (listener) {
        if (listener.exitAction) {
            listener.exitAction(this);
        }
    };
    // @Override
    ActionContext.prototype.accept = function (visitor) {
        if (visitor.visitAction) {
            return visitor.visitAction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ActionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ActionContext = ActionContext;
var DropactionContext = /** @class */ (function (_super) {
    __extends(DropactionContext, _super);
    function DropactionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DropactionContext.prototype.object = function () {
        return this.getRuleContext(0, ObjectContext);
    };
    Object.defineProperty(DropactionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_dropaction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DropactionContext.prototype.enterRule = function (listener) {
        if (listener.enterDropaction) {
            listener.enterDropaction(this);
        }
    };
    // @Override
    DropactionContext.prototype.exitRule = function (listener) {
        if (listener.exitDropaction) {
            listener.exitDropaction(this);
        }
    };
    // @Override
    DropactionContext.prototype.accept = function (visitor) {
        if (visitor.visitDropaction) {
            return visitor.visitDropaction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DropactionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DropactionContext = DropactionContext;
var ExamineactionContext = /** @class */ (function (_super) {
    __extends(ExamineactionContext, _super);
    function ExamineactionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExamineactionContext.prototype.object = function () {
        return this.getRuleContext(0, ObjectContext);
    };
    Object.defineProperty(ExamineactionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_examineaction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExamineactionContext.prototype.enterRule = function (listener) {
        if (listener.enterExamineaction) {
            listener.enterExamineaction(this);
        }
    };
    // @Override
    ExamineactionContext.prototype.exitRule = function (listener) {
        if (listener.exitExamineaction) {
            listener.exitExamineaction(this);
        }
    };
    // @Override
    ExamineactionContext.prototype.accept = function (visitor) {
        if (visitor.visitExamineaction) {
            return visitor.visitExamineaction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExamineactionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExamineactionContext = ExamineactionContext;
var GetactionContext = /** @class */ (function (_super) {
    __extends(GetactionContext, _super);
    function GetactionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GetactionContext.prototype.object = function () {
        return this.getRuleContext(0, ObjectContext);
    };
    Object.defineProperty(GetactionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_getaction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GetactionContext.prototype.enterRule = function (listener) {
        if (listener.enterGetaction) {
            listener.enterGetaction(this);
        }
    };
    // @Override
    GetactionContext.prototype.exitRule = function (listener) {
        if (listener.exitGetaction) {
            listener.exitGetaction(this);
        }
    };
    // @Override
    GetactionContext.prototype.accept = function (visitor) {
        if (visitor.visitGetaction) {
            return visitor.visitGetaction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GetactionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GetactionContext = GetactionContext;
var GiveactionContext = /** @class */ (function (_super) {
    __extends(GiveactionContext, _super);
    function GiveactionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GiveactionContext.prototype.player = function () {
        return this.getRuleContext(0, PlayerContext);
    };
    GiveactionContext.prototype.pennies = function () {
        return this.getRuleContext(0, PenniesContext);
    };
    Object.defineProperty(GiveactionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_giveaction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GiveactionContext.prototype.enterRule = function (listener) {
        if (listener.enterGiveaction) {
            listener.enterGiveaction(this);
        }
    };
    // @Override
    GiveactionContext.prototype.exitRule = function (listener) {
        if (listener.exitGiveaction) {
            listener.exitGiveaction(this);
        }
    };
    // @Override
    GiveactionContext.prototype.accept = function (visitor) {
        if (visitor.visitGiveaction) {
            return visitor.visitGiveaction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GiveactionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GiveactionContext = GiveactionContext;
var GotoactionContext = /** @class */ (function (_super) {
    __extends(GotoactionContext, _super);
    function GotoactionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GotoactionContext.prototype.direction = function () {
        return this.getRuleContext(0, DirectionContext);
    };
    Object.defineProperty(GotoactionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_gotoaction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GotoactionContext.prototype.enterRule = function (listener) {
        if (listener.enterGotoaction) {
            listener.enterGotoaction(this);
        }
    };
    // @Override
    GotoactionContext.prototype.exitRule = function (listener) {
        if (listener.exitGotoaction) {
            listener.exitGotoaction(this);
        }
    };
    // @Override
    GotoactionContext.prototype.accept = function (visitor) {
        if (visitor.visitGotoaction) {
            return visitor.visitGotoaction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GotoactionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GotoactionContext = GotoactionContext;
var GripeactionContext = /** @class */ (function (_super) {
    __extends(GripeactionContext, _super);
    function GripeactionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GripeactionContext.prototype.message = function () {
        return this.getRuleContext(0, MessageContext);
    };
    Object.defineProperty(GripeactionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_gripeaction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GripeactionContext.prototype.enterRule = function (listener) {
        if (listener.enterGripeaction) {
            listener.enterGripeaction(this);
        }
    };
    // @Override
    GripeactionContext.prototype.exitRule = function (listener) {
        if (listener.exitGripeaction) {
            listener.exitGripeaction(this);
        }
    };
    // @Override
    GripeactionContext.prototype.accept = function (visitor) {
        if (visitor.visitGripeaction) {
            return visitor.visitGripeaction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GripeactionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GripeactionContext = GripeactionContext;
var HelpactionContext = /** @class */ (function (_super) {
    __extends(HelpactionContext, _super);
    function HelpactionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(HelpactionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_helpaction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HelpactionContext.prototype.enterRule = function (listener) {
        if (listener.enterHelpaction) {
            listener.enterHelpaction(this);
        }
    };
    // @Override
    HelpactionContext.prototype.exitRule = function (listener) {
        if (listener.exitHelpaction) {
            listener.exitHelpaction(this);
        }
    };
    // @Override
    HelpactionContext.prototype.accept = function (visitor) {
        if (visitor.visitHelpaction) {
            return visitor.visitHelpaction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HelpactionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HelpactionContext = HelpactionContext;
var InventoryactionContext = /** @class */ (function (_super) {
    __extends(InventoryactionContext, _super);
    function InventoryactionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(InventoryactionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_inventoryaction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InventoryactionContext.prototype.enterRule = function (listener) {
        if (listener.enterInventoryaction) {
            listener.enterInventoryaction(this);
        }
    };
    // @Override
    InventoryactionContext.prototype.exitRule = function (listener) {
        if (listener.exitInventoryaction) {
            listener.exitInventoryaction(this);
        }
    };
    // @Override
    InventoryactionContext.prototype.accept = function (visitor) {
        if (visitor.visitInventoryaction) {
            return visitor.visitInventoryaction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InventoryactionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InventoryactionContext = InventoryactionContext;
var KillactionContext = /** @class */ (function (_super) {
    __extends(KillactionContext, _super);
    function KillactionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KillactionContext.prototype.player = function () {
        return this.getRuleContext(0, PlayerContext);
    };
    KillactionContext.prototype.cost = function () {
        return this.tryGetRuleContext(0, CostContext);
    };
    Object.defineProperty(KillactionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_killaction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KillactionContext.prototype.enterRule = function (listener) {
        if (listener.enterKillaction) {
            listener.enterKillaction(this);
        }
    };
    // @Override
    KillactionContext.prototype.exitRule = function (listener) {
        if (listener.exitKillaction) {
            listener.exitKillaction(this);
        }
    };
    // @Override
    KillactionContext.prototype.accept = function (visitor) {
        if (visitor.visitKillaction) {
            return visitor.visitKillaction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KillactionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KillactionContext = KillactionContext;
var LookactionContext = /** @class */ (function (_super) {
    __extends(LookactionContext, _super);
    function LookactionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LookactionContext.prototype.object = function () {
        return this.getRuleContext(0, ObjectContext);
    };
    Object.defineProperty(LookactionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_lookaction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LookactionContext.prototype.enterRule = function (listener) {
        if (listener.enterLookaction) {
            listener.enterLookaction(this);
        }
    };
    // @Override
    LookactionContext.prototype.exitRule = function (listener) {
        if (listener.exitLookaction) {
            listener.exitLookaction(this);
        }
    };
    // @Override
    LookactionContext.prototype.accept = function (visitor) {
        if (visitor.visitLookaction) {
            return visitor.visitLookaction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LookactionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LookactionContext = LookactionContext;
var NewsactionContext = /** @class */ (function (_super) {
    __extends(NewsactionContext, _super);
    function NewsactionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(NewsactionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_newsaction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NewsactionContext.prototype.enterRule = function (listener) {
        if (listener.enterNewsaction) {
            listener.enterNewsaction(this);
        }
    };
    // @Override
    NewsactionContext.prototype.exitRule = function (listener) {
        if (listener.exitNewsaction) {
            listener.exitNewsaction(this);
        }
    };
    // @Override
    NewsactionContext.prototype.accept = function (visitor) {
        if (visitor.visitNewsaction) {
            return visitor.visitNewsaction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NewsactionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NewsactionContext = NewsactionContext;
var PageactionContext = /** @class */ (function (_super) {
    __extends(PageactionContext, _super);
    function PageactionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PageactionContext.prototype.player = function () {
        return this.getRuleContext(0, PlayerContext);
    };
    PageactionContext.prototype.message = function () {
        return this.tryGetRuleContext(0, MessageContext);
    };
    Object.defineProperty(PageactionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_pageaction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PageactionContext.prototype.enterRule = function (listener) {
        if (listener.enterPageaction) {
            listener.enterPageaction(this);
        }
    };
    // @Override
    PageactionContext.prototype.exitRule = function (listener) {
        if (listener.exitPageaction) {
            listener.exitPageaction(this);
        }
    };
    // @Override
    PageactionContext.prototype.accept = function (visitor) {
        if (visitor.visitPageaction) {
            return visitor.visitPageaction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PageactionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PageactionContext = PageactionContext;
var QuitactionContext = /** @class */ (function (_super) {
    __extends(QuitactionContext, _super);
    function QuitactionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(QuitactionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_quitaction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QuitactionContext.prototype.enterRule = function (listener) {
        if (listener.enterQuitaction) {
            listener.enterQuitaction(this);
        }
    };
    // @Override
    QuitactionContext.prototype.exitRule = function (listener) {
        if (listener.exitQuitaction) {
            listener.exitQuitaction(this);
        }
    };
    // @Override
    QuitactionContext.prototype.accept = function (visitor) {
        if (visitor.visitQuitaction) {
            return visitor.visitQuitaction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QuitactionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QuitactionContext = QuitactionContext;
var RobactionContext = /** @class */ (function (_super) {
    __extends(RobactionContext, _super);
    function RobactionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RobactionContext.prototype.player = function () {
        return this.getRuleContext(0, PlayerContext);
    };
    Object.defineProperty(RobactionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_robaction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RobactionContext.prototype.enterRule = function (listener) {
        if (listener.enterRobaction) {
            listener.enterRobaction(this);
        }
    };
    // @Override
    RobactionContext.prototype.exitRule = function (listener) {
        if (listener.exitRobaction) {
            listener.exitRobaction(this);
        }
    };
    // @Override
    RobactionContext.prototype.accept = function (visitor) {
        if (visitor.visitRobaction) {
            return visitor.visitRobaction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RobactionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RobactionContext = RobactionContext;
var SayactionContext = /** @class */ (function (_super) {
    __extends(SayactionContext, _super);
    function SayactionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SayactionContext.prototype.message = function () {
        return this.getRuleContext(0, MessageContext);
    };
    Object.defineProperty(SayactionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_sayaction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SayactionContext.prototype.enterRule = function (listener) {
        if (listener.enterSayaction) {
            listener.enterSayaction(this);
        }
    };
    // @Override
    SayactionContext.prototype.exitRule = function (listener) {
        if (listener.exitSayaction) {
            listener.exitSayaction(this);
        }
    };
    // @Override
    SayactionContext.prototype.accept = function (visitor) {
        if (visitor.visitSayaction) {
            return visitor.visitSayaction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SayactionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SayactionContext = SayactionContext;
var ScoreactionContext = /** @class */ (function (_super) {
    __extends(ScoreactionContext, _super);
    function ScoreactionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ScoreactionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_scoreaction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ScoreactionContext.prototype.enterRule = function (listener) {
        if (listener.enterScoreaction) {
            listener.enterScoreaction(this);
        }
    };
    // @Override
    ScoreactionContext.prototype.exitRule = function (listener) {
        if (listener.exitScoreaction) {
            listener.exitScoreaction(this);
        }
    };
    // @Override
    ScoreactionContext.prototype.accept = function (visitor) {
        if (visitor.visitScoreaction) {
            return visitor.visitScoreaction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ScoreactionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ScoreactionContext = ScoreactionContext;
var WhisperactionContext = /** @class */ (function (_super) {
    __extends(WhisperactionContext, _super);
    function WhisperactionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WhisperactionContext.prototype.player = function () {
        return this.getRuleContext(0, PlayerContext);
    };
    WhisperactionContext.prototype.message = function () {
        return this.getRuleContext(0, MessageContext);
    };
    Object.defineProperty(WhisperactionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_whisperaction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WhisperactionContext.prototype.enterRule = function (listener) {
        if (listener.enterWhisperaction) {
            listener.enterWhisperaction(this);
        }
    };
    // @Override
    WhisperactionContext.prototype.exitRule = function (listener) {
        if (listener.exitWhisperaction) {
            listener.exitWhisperaction(this);
        }
    };
    // @Override
    WhisperactionContext.prototype.accept = function (visitor) {
        if (visitor.visitWhisperaction) {
            return visitor.visitWhisperaction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WhisperactionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WhisperactionContext = WhisperactionContext;
var WhoactionContext = /** @class */ (function (_super) {
    __extends(WhoactionContext, _super);
    function WhoactionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WhoactionContext.prototype.player = function () {
        return this.tryGetRuleContext(0, PlayerContext);
    };
    Object.defineProperty(WhoactionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_whoaction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WhoactionContext.prototype.enterRule = function (listener) {
        if (listener.enterWhoaction) {
            listener.enterWhoaction(this);
        }
    };
    // @Override
    WhoactionContext.prototype.exitRule = function (listener) {
        if (listener.exitWhoaction) {
            listener.exitWhoaction(this);
        }
    };
    // @Override
    WhoactionContext.prototype.accept = function (visitor) {
        if (visitor.visitWhoaction) {
            return visitor.visitWhoaction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WhoactionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WhoactionContext = WhoactionContext;
var ObjectContext = /** @class */ (function (_super) {
    __extends(ObjectContext, _super);
    function ObjectContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectContext.prototype.STRING = function () { return this.getToken(tinymudParser.STRING, 0); };
    Object.defineProperty(ObjectContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_object; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectContext.prototype.enterRule = function (listener) {
        if (listener.enterObject) {
            listener.enterObject(this);
        }
    };
    // @Override
    ObjectContext.prototype.exitRule = function (listener) {
        if (listener.exitObject) {
            listener.exitObject(this);
        }
    };
    // @Override
    ObjectContext.prototype.accept = function (visitor) {
        if (visitor.visitObject) {
            return visitor.visitObject(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectContext = ObjectContext;
var PlayerContext = /** @class */ (function (_super) {
    __extends(PlayerContext, _super);
    function PlayerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PlayerContext.prototype.STRING = function () { return this.getToken(tinymudParser.STRING, 0); };
    Object.defineProperty(PlayerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_player; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PlayerContext.prototype.enterRule = function (listener) {
        if (listener.enterPlayer) {
            listener.enterPlayer(this);
        }
    };
    // @Override
    PlayerContext.prototype.exitRule = function (listener) {
        if (listener.exitPlayer) {
            listener.exitPlayer(this);
        }
    };
    // @Override
    PlayerContext.prototype.accept = function (visitor) {
        if (visitor.visitPlayer) {
            return visitor.visitPlayer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PlayerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PlayerContext = PlayerContext;
var NameContext = /** @class */ (function (_super) {
    __extends(NameContext, _super);
    function NameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NameContext.prototype.STRING = function () { return this.getToken(tinymudParser.STRING, 0); };
    Object.defineProperty(NameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_name; },
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
var DescriptionContext = /** @class */ (function (_super) {
    __extends(DescriptionContext, _super);
    function DescriptionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DescriptionContext.prototype.STRING = function () { return this.getToken(tinymudParser.STRING, 0); };
    Object.defineProperty(DescriptionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_description; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DescriptionContext.prototype.enterRule = function (listener) {
        if (listener.enterDescription) {
            listener.enterDescription(this);
        }
    };
    // @Override
    DescriptionContext.prototype.exitRule = function (listener) {
        if (listener.exitDescription) {
            listener.exitDescription(this);
        }
    };
    // @Override
    DescriptionContext.prototype.accept = function (visitor) {
        if (visitor.visitDescription) {
            return visitor.visitDescription(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DescriptionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DescriptionContext = DescriptionContext;
var CostContext = /** @class */ (function (_super) {
    __extends(CostContext, _super);
    function CostContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CostContext.prototype.NUMBER = function () { return this.getToken(tinymudParser.NUMBER, 0); };
    Object.defineProperty(CostContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_cost; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CostContext.prototype.enterRule = function (listener) {
        if (listener.enterCost) {
            listener.enterCost(this);
        }
    };
    // @Override
    CostContext.prototype.exitRule = function (listener) {
        if (listener.exitCost) {
            listener.exitCost(this);
        }
    };
    // @Override
    CostContext.prototype.accept = function (visitor) {
        if (visitor.visitCost) {
            return visitor.visitCost(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CostContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CostContext = CostContext;
var KeyContext = /** @class */ (function (_super) {
    __extends(KeyContext, _super);
    function KeyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeyContext.prototype.STRING = function () { return this.getToken(tinymudParser.STRING, 0); };
    Object.defineProperty(KeyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_key; },
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
var PasswordContext = /** @class */ (function (_super) {
    __extends(PasswordContext, _super);
    function PasswordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PasswordContext.prototype.STRING = function () { return this.getToken(tinymudParser.STRING, 0); };
    Object.defineProperty(PasswordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_password; },
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
var MessageContext = /** @class */ (function (_super) {
    __extends(MessageContext, _super);
    function MessageContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MessageContext.prototype.STRING = function () { return this.getToken(tinymudParser.STRING, 0); };
    Object.defineProperty(MessageContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_message; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MessageContext.prototype.enterRule = function (listener) {
        if (listener.enterMessage) {
            listener.enterMessage(this);
        }
    };
    // @Override
    MessageContext.prototype.exitRule = function (listener) {
        if (listener.exitMessage) {
            listener.exitMessage(this);
        }
    };
    // @Override
    MessageContext.prototype.accept = function (visitor) {
        if (visitor.visitMessage) {
            return visitor.visitMessage(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MessageContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MessageContext = MessageContext;
var DirContext = /** @class */ (function (_super) {
    __extends(DirContext, _super);
    function DirContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DirContext.prototype.STRING = function () { return this.getToken(tinymudParser.STRING, 0); };
    Object.defineProperty(DirContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_dir; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DirContext.prototype.enterRule = function (listener) {
        if (listener.enterDir) {
            listener.enterDir(this);
        }
    };
    // @Override
    DirContext.prototype.exitRule = function (listener) {
        if (listener.exitDir) {
            listener.exitDir(this);
        }
    };
    // @Override
    DirContext.prototype.accept = function (visitor) {
        if (visitor.visitDir) {
            return visitor.visitDir(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DirContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DirContext = DirContext;
var NumberContext = /** @class */ (function (_super) {
    __extends(NumberContext, _super);
    function NumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumberContext.prototype.NUMBER = function () { return this.getToken(tinymudParser.NUMBER, 0); };
    Object.defineProperty(NumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_number; },
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
var RoomContext = /** @class */ (function (_super) {
    __extends(RoomContext, _super);
    function RoomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RoomContext.prototype.STRING = function () { return this.getToken(tinymudParser.STRING, 0); };
    Object.defineProperty(RoomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_room; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RoomContext.prototype.enterRule = function (listener) {
        if (listener.enterRoom) {
            listener.enterRoom(this);
        }
    };
    // @Override
    RoomContext.prototype.exitRule = function (listener) {
        if (listener.exitRoom) {
            listener.exitRoom(this);
        }
    };
    // @Override
    RoomContext.prototype.accept = function (visitor) {
        if (visitor.visitRoom) {
            return visitor.visitRoom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RoomContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RoomContext = RoomContext;
var FlagContext = /** @class */ (function (_super) {
    __extends(FlagContext, _super);
    function FlagContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FlagContext.prototype.NUMBER = function () { return this.getToken(tinymudParser.NUMBER, 0); };
    Object.defineProperty(FlagContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_flag; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FlagContext.prototype.enterRule = function (listener) {
        if (listener.enterFlag) {
            listener.enterFlag(this);
        }
    };
    // @Override
    FlagContext.prototype.exitRule = function (listener) {
        if (listener.exitFlag) {
            listener.exitFlag(this);
        }
    };
    // @Override
    FlagContext.prototype.accept = function (visitor) {
        if (visitor.visitFlag) {
            return visitor.visitFlag(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FlagContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FlagContext = FlagContext;
var PenniesContext = /** @class */ (function (_super) {
    __extends(PenniesContext, _super);
    function PenniesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PenniesContext.prototype.NUMBER = function () { return this.getToken(tinymudParser.NUMBER, 0); };
    Object.defineProperty(PenniesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_pennies; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PenniesContext.prototype.enterRule = function (listener) {
        if (listener.enterPennies) {
            listener.enterPennies(this);
        }
    };
    // @Override
    PenniesContext.prototype.exitRule = function (listener) {
        if (listener.exitPennies) {
            listener.exitPennies(this);
        }
    };
    // @Override
    PenniesContext.prototype.accept = function (visitor) {
        if (visitor.visitPennies) {
            return visitor.visitPennies(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PenniesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PenniesContext = PenniesContext;
var DirectionContext = /** @class */ (function (_super) {
    __extends(DirectionContext, _super);
    function DirectionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DirectionContext.prototype.STRING = function () { return this.getToken(tinymudParser.STRING, 0); };
    Object.defineProperty(DirectionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinymudParser.RULE_direction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DirectionContext.prototype.enterRule = function (listener) {
        if (listener.enterDirection) {
            listener.enterDirection(this);
        }
    };
    // @Override
    DirectionContext.prototype.exitRule = function (listener) {
        if (listener.exitDirection) {
            listener.exitDirection(this);
        }
    };
    // @Override
    DirectionContext.prototype.accept = function (visitor) {
        if (visitor.visitDirection) {
            return visitor.visitDirection(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DirectionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DirectionContext = DirectionContext;
