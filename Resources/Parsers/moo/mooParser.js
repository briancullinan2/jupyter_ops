"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/moo/moo.g4 by ANTLR 4.7.3-SNAPSHOT
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
var mooParser = /** @class */ (function (_super) {
    __extends(mooParser, _super);
    function mooParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(mooParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(mooParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return mooParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(mooParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "moo.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(mooParser.prototype, "ruleNames", {
        // @Override
        get: function () { return mooParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(mooParser.prototype, "serializedATN", {
        // @Override
        get: function () { return mooParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    mooParser.prototype.prog = function () {
        var _localctx = new ProgContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, mooParser.RULE_prog);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 99;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 98;
                            this.declaration();
                        }
                    }
                    this.state = 101;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mooParser.T__0) | (1 << mooParser.T__3) | (1 << mooParser.T__4) | (1 << mooParser.T__5) | (1 << mooParser.T__6) | (1 << mooParser.T__7) | (1 << mooParser.T__8) | (1 << mooParser.T__10) | (1 << mooParser.T__11) | (1 << mooParser.T__12) | (1 << mooParser.T__13) | (1 << mooParser.T__14) | (1 << mooParser.T__16) | (1 << mooParser.T__17) | (1 << mooParser.T__18) | (1 << mooParser.T__20) | (1 << mooParser.T__21))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mooParser.prototype.declaration = function () {
        var _localctx = new DeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, mooParser.RULE_declaration);
        try {
            this.state = 117;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case mooParser.T__0:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 103;
                        this.programdecl();
                    }
                    break;
                case mooParser.T__3:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 104;
                        this.verbdecl();
                    }
                    break;
                case mooParser.T__4:
                case mooParser.T__5:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 105;
                        this.propertydecl();
                    }
                    break;
                case mooParser.T__6:
                case mooParser.T__7:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 106;
                        this.rmpropertydecl();
                    }
                    break;
                case mooParser.T__8:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 107;
                        this.setpropertydecl();
                    }
                    break;
                case mooParser.T__10:
                case mooParser.T__11:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 108;
                        this.displaypropertydecl();
                    }
                    break;
                case mooParser.T__12:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 109;
                        this.kidsdecl();
                    }
                    break;
                case mooParser.T__13:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 110;
                        this.parentdecl();
                    }
                    break;
                case mooParser.T__14:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 111;
                        this.describedecl();
                    }
                    break;
                case mooParser.T__16:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 112;
                        this.contentsdecl();
                    }
                    break;
                case mooParser.T__17:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 113;
                        this.noteditdecl();
                    }
                    break;
                case mooParser.T__18:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 114;
                        this.createdecl();
                    }
                    break;
                case mooParser.T__20:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 115;
                        this.editdecl();
                    }
                    break;
                case mooParser.T__21:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 116;
                        this.addaliasdecl();
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
    mooParser.prototype.programdecl = function () {
        var _localctx = new ProgramdeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, mooParser.RULE_programdecl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 119;
                this.match(mooParser.T__0);
                this.state = 120;
                this.programname();
                this.state = 121;
                this.match(mooParser.T__1);
                this.state = 122;
                this.name();
                this.state = 124;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 123;
                            this.statement();
                        }
                    }
                    this.state = 126;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (mooParser.T__22 - 23)) | (1 << (mooParser.T__26 - 23)) | (1 << (mooParser.T__27 - 23)) | (1 << (mooParser.T__28 - 23)) | (1 << (mooParser.T__31 - 23)) | (1 << (mooParser.T__35 - 23)))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (mooParser.DOLLAR - 60)) | (1 << (mooParser.STRING - 60)) | (1 << (mooParser.STRINGLITERAL - 60)))) !== 0));
                this.state = 128;
                this.match(mooParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mooParser.prototype.programname = function () {
        var _localctx = new ProgramnameContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, mooParser.RULE_programname);
        try {
            this.state = 132;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case mooParser.DOLLAR:
                case mooParser.STRING:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 130;
                        this.name();
                    }
                    break;
                case mooParser.STRINGLITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 131;
                        this.stringliteral();
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
    mooParser.prototype.verbdecl = function () {
        var _localctx = new VerbdeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, mooParser.RULE_verbdecl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 134;
                this.match(mooParser.T__3);
                {
                    this.state = 135;
                    this.verbname();
                    this.state = 136;
                    this.match(mooParser.T__1);
                    this.state = 137;
                    this.name();
                }
                this.state = 140;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 139;
                            this.name();
                        }
                    }
                    this.state = 142;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === mooParser.DOLLAR || _la === mooParser.STRING);
                this.state = 145;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === mooParser.PERMISSIONS) {
                    {
                        this.state = 144;
                        this.permissions();
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
    mooParser.prototype.verbname = function () {
        var _localctx = new VerbnameContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, mooParser.RULE_verbname);
        try {
            this.state = 149;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case mooParser.DOLLAR:
                case mooParser.STRING:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 147;
                        this.name();
                    }
                    break;
                case mooParser.STRINGLITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 148;
                        this.stringliteral();
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
    mooParser.prototype.propertydecl = function () {
        var _localctx = new PropertydeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, mooParser.RULE_propertydecl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 151;
                _la = this._input.LA(1);
                if (!(_la === mooParser.T__4 || _la === mooParser.T__5)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 152;
                this.property();
                this.state = 154;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === mooParser.ASSIGN) {
                    {
                        this.state = 153;
                        this.match(mooParser.ASSIGN);
                    }
                }
                this.state = 157;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (mooParser.T__34 - 35)) | (1 << (mooParser.T__38 - 35)) | (1 << (mooParser.LPAREN - 35)) | (1 << (mooParser.PLUS - 35)) | (1 << (mooParser.MINUS - 35)) | (1 << (mooParser.DOLLAR - 35)) | (1 << (mooParser.OBJREF - 35)) | (1 << (mooParser.STRING - 35)) | (1 << (mooParser.STRINGLITERAL - 35)) | (1 << (mooParser.INTEGER - 35)) | (1 << (mooParser.REAL - 35)))) !== 0)) {
                    {
                        this.state = 156;
                        this.expression();
                    }
                }
                this.state = 160;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === mooParser.PERMISSIONS) {
                    {
                        this.state = 159;
                        this.permissions();
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
    mooParser.prototype.rmpropertydecl = function () {
        var _localctx = new RmpropertydeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, mooParser.RULE_rmpropertydecl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 162;
                _la = this._input.LA(1);
                if (!(_la === mooParser.T__6 || _la === mooParser.T__7)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 163;
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
    mooParser.prototype.setpropertydecl = function () {
        var _localctx = new SetpropertydeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, mooParser.RULE_setpropertydecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 165;
                this.match(mooParser.T__8);
                this.state = 166;
                this.property();
                this.state = 167;
                this.match(mooParser.T__9);
                this.state = 168;
                this.expression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mooParser.prototype.displaypropertydecl = function () {
        var _localctx = new DisplaypropertydeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, mooParser.RULE_displaypropertydecl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 170;
                _la = this._input.LA(1);
                if (!(_la === mooParser.T__10 || _la === mooParser.T__11)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 171;
                this.property();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mooParser.prototype.kidsdecl = function () {
        var _localctx = new KidsdeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, mooParser.RULE_kidsdecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 173;
                this.match(mooParser.T__12);
                this.state = 174;
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
    mooParser.prototype.parentdecl = function () {
        var _localctx = new ParentdeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, mooParser.RULE_parentdecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 176;
                this.match(mooParser.T__13);
                this.state = 177;
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
    mooParser.prototype.describedecl = function () {
        var _localctx = new DescribedeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, mooParser.RULE_describedecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 179;
                this.match(mooParser.T__14);
                this.state = 180;
                this.property();
                this.state = 181;
                this.match(mooParser.T__15);
                this.state = 182;
                this.expression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mooParser.prototype.contentsdecl = function () {
        var _localctx = new ContentsdeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, mooParser.RULE_contentsdecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 184;
                this.match(mooParser.T__16);
                this.state = 185;
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
    mooParser.prototype.noteditdecl = function () {
        var _localctx = new NoteditdeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, mooParser.RULE_noteditdecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 187;
                this.match(mooParser.T__17);
                this.state = 188;
                this.property();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mooParser.prototype.createdecl = function () {
        var _localctx = new CreatedeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, mooParser.RULE_createdecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 190;
                this.match(mooParser.T__18);
                this.state = 191;
                this.sysname();
                this.state = 192;
                this.match(mooParser.T__19);
                this.state = 193;
                this.expressionlist();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mooParser.prototype.editdecl = function () {
        var _localctx = new EditdeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, mooParser.RULE_editdecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 195;
                this.match(mooParser.T__20);
                this.state = 196;
                this.property();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mooParser.prototype.addaliasdecl = function () {
        var _localctx = new AddaliasdeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, mooParser.RULE_addaliasdecl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 198;
                this.match(mooParser.T__21);
                this.state = 199;
                this.name();
                this.state = 204;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === mooParser.COMMA) {
                    {
                        {
                            this.state = 200;
                            this.match(mooParser.COMMA);
                            this.state = 201;
                            this.name();
                        }
                    }
                    this.state = 206;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 207;
                this.match(mooParser.T__9);
                this.state = 208;
                this.expression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mooParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, mooParser.RULE_statement);
        try {
            this.state = 219;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 210;
                        this.ifblock();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 211;
                        this.whileblock();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 212;
                        this.doblock();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 213;
                        this.forblock();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 214;
                        this.assignblock();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 215;
                        this.tryblock();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 216;
                        this.command();
                        this.state = 217;
                        this.match(mooParser.SEMICOLON);
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
    mooParser.prototype.ifblock = function () {
        var _localctx = new IfblockContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, mooParser.RULE_ifblock);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 221;
                this.match(mooParser.T__22);
                this.state = 222;
                this.condition();
                this.state = 224;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 223;
                            this.statement();
                        }
                    }
                    this.state = 226;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (mooParser.T__22 - 23)) | (1 << (mooParser.T__26 - 23)) | (1 << (mooParser.T__27 - 23)) | (1 << (mooParser.T__28 - 23)) | (1 << (mooParser.T__31 - 23)) | (1 << (mooParser.T__35 - 23)))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (mooParser.DOLLAR - 60)) | (1 << (mooParser.STRING - 60)) | (1 << (mooParser.STRINGLITERAL - 60)))) !== 0));
                this.state = 235;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === mooParser.T__23) {
                    {
                        this.state = 228;
                        this.match(mooParser.T__23);
                        this.state = 229;
                        this.condition();
                        this.state = 231;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 230;
                                    this.statement();
                                }
                            }
                            this.state = 233;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (mooParser.T__22 - 23)) | (1 << (mooParser.T__26 - 23)) | (1 << (mooParser.T__27 - 23)) | (1 << (mooParser.T__28 - 23)) | (1 << (mooParser.T__31 - 23)) | (1 << (mooParser.T__35 - 23)))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (mooParser.DOLLAR - 60)) | (1 << (mooParser.STRING - 60)) | (1 << (mooParser.STRINGLITERAL - 60)))) !== 0));
                    }
                }
                this.state = 243;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === mooParser.T__24) {
                    {
                        this.state = 237;
                        this.match(mooParser.T__24);
                        this.state = 239;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 238;
                                    this.statement();
                                }
                            }
                            this.state = 241;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (mooParser.T__22 - 23)) | (1 << (mooParser.T__26 - 23)) | (1 << (mooParser.T__27 - 23)) | (1 << (mooParser.T__28 - 23)) | (1 << (mooParser.T__31 - 23)) | (1 << (mooParser.T__35 - 23)))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (mooParser.DOLLAR - 60)) | (1 << (mooParser.STRING - 60)) | (1 << (mooParser.STRINGLITERAL - 60)))) !== 0));
                    }
                }
                this.state = 245;
                this.match(mooParser.T__25);
                this.state = 247;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === mooParser.SEMICOLON) {
                    {
                        this.state = 246;
                        this.match(mooParser.SEMICOLON);
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
    mooParser.prototype.whileblock = function () {
        var _localctx = new WhileblockContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, mooParser.RULE_whileblock);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 249;
                this.match(mooParser.T__26);
                this.state = 250;
                this.condition();
                this.state = 252;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 251;
                                    this.statement();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 254;
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
    mooParser.prototype.doblock = function () {
        var _localctx = new DoblockContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, mooParser.RULE_doblock);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 256;
                this.match(mooParser.T__27);
                this.state = 258;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 257;
                                    this.statement();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 260;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 262;
                this.match(mooParser.T__26);
                this.state = 263;
                this.condition();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mooParser.prototype.forblock = function () {
        var _localctx = new ForblockContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, mooParser.RULE_forblock);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 265;
                this.match(mooParser.T__28);
                this.state = 266;
                this.name();
                this.state = 267;
                this.match(mooParser.T__29);
                this.state = 268;
                this.expression();
                this.state = 270;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 269;
                            this.statement();
                        }
                    }
                    this.state = 272;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (mooParser.T__22 - 23)) | (1 << (mooParser.T__26 - 23)) | (1 << (mooParser.T__27 - 23)) | (1 << (mooParser.T__28 - 23)) | (1 << (mooParser.T__31 - 23)) | (1 << (mooParser.T__35 - 23)))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (mooParser.DOLLAR - 60)) | (1 << (mooParser.STRING - 60)) | (1 << (mooParser.STRINGLITERAL - 60)))) !== 0));
                this.state = 274;
                this.match(mooParser.T__30);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mooParser.prototype.tryblock = function () {
        var _localctx = new TryblockContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, mooParser.RULE_tryblock);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 276;
                this.match(mooParser.T__31);
                this.state = 278;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 277;
                            this.statement();
                        }
                    }
                    this.state = 280;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (mooParser.T__22 - 23)) | (1 << (mooParser.T__26 - 23)) | (1 << (mooParser.T__27 - 23)) | (1 << (mooParser.T__28 - 23)) | (1 << (mooParser.T__31 - 23)) | (1 << (mooParser.T__35 - 23)))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (mooParser.DOLLAR - 60)) | (1 << (mooParser.STRING - 60)) | (1 << (mooParser.STRINGLITERAL - 60)))) !== 0));
                this.state = 282;
                this.match(mooParser.T__32);
                this.state = 283;
                this.property();
                this.state = 285;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 284;
                            this.statement();
                        }
                    }
                    this.state = 287;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (mooParser.T__22 - 23)) | (1 << (mooParser.T__26 - 23)) | (1 << (mooParser.T__27 - 23)) | (1 << (mooParser.T__28 - 23)) | (1 << (mooParser.T__31 - 23)) | (1 << (mooParser.T__35 - 23)))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (mooParser.DOLLAR - 60)) | (1 << (mooParser.STRING - 60)) | (1 << (mooParser.STRINGLITERAL - 60)))) !== 0));
                this.state = 289;
                this.match(mooParser.T__33);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mooParser.prototype.assignblock = function () {
        var _localctx = new AssignblockContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, mooParser.RULE_assignblock);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 291;
                this.property();
                this.state = 292;
                this.match(mooParser.ASSIGN);
                this.state = 293;
                this.expression();
                this.state = 294;
                this.match(mooParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mooParser.prototype.condition = function () {
        var _localctx = new ConditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, mooParser.RULE_condition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 296;
                this.match(mooParser.LPAREN);
                this.state = 297;
                this.expression();
                this.state = 303;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (mooParser.GT - 48)) | (1 << (mooParser.LT - 48)) | (1 << (mooParser.GTE - 48)) | (1 << (mooParser.LTE - 48)) | (1 << (mooParser.EQ - 48)) | (1 << (mooParser.AND - 48)) | (1 << (mooParser.OR - 48)) | (1 << (mooParser.NEQ - 48)))) !== 0)) {
                    {
                        {
                            this.state = 298;
                            this.relop();
                            this.state = 299;
                            this.expression();
                        }
                    }
                    this.state = 305;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 306;
                this.match(mooParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mooParser.prototype.relop = function () {
        var _localctx = new RelopContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, mooParser.RULE_relop);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 308;
                _la = this._input.LA(1);
                if (!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (mooParser.GT - 48)) | (1 << (mooParser.LT - 48)) | (1 << (mooParser.GTE - 48)) | (1 << (mooParser.LTE - 48)) | (1 << (mooParser.EQ - 48)) | (1 << (mooParser.AND - 48)) | (1 << (mooParser.OR - 48)) | (1 << (mooParser.NEQ - 48)))) !== 0))) {
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
    mooParser.prototype.expressionlist = function () {
        var _localctx = new ExpressionlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, mooParser.RULE_expressionlist);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 310;
                this.expression();
                this.state = 315;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === mooParser.COMMA) {
                    {
                        {
                            this.state = 311;
                            this.match(mooParser.COMMA);
                            this.state = 312;
                            this.expression();
                        }
                    }
                    this.state = 317;
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
    mooParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, mooParser.RULE_expression);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 318;
                this.term();
                this.state = 323;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 319;
                                _la = this._input.LA(1);
                                if (!(_la === mooParser.PLUS || _la === mooParser.MINUS)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 320;
                                this.term();
                            }
                        }
                    }
                    this.state = 325;
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
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mooParser.prototype.term = function () {
        var _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, mooParser.RULE_term);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 326;
                this.factor();
                this.state = 331;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 327;
                                _la = this._input.LA(1);
                                if (!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (mooParser.TIMES - 45)) | (1 << (mooParser.MOD - 45)) | (1 << (mooParser.DIV - 45)))) !== 0))) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 328;
                                this.factor();
                            }
                        }
                    }
                    this.state = 333;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
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
    mooParser.prototype.factor = function () {
        var _localctx = new FactorContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, mooParser.RULE_factor);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 334;
                this.signedAtom();
                this.state = 339;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 335;
                                this.match(mooParser.POW);
                                this.state = 336;
                                this.signedAtom();
                            }
                        }
                    }
                    this.state = 341;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
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
    mooParser.prototype.signedAtom = function () {
        var _localctx = new SignedAtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, mooParser.RULE_signedAtom);
        try {
            this.state = 347;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case mooParser.PLUS:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 342;
                        this.match(mooParser.PLUS);
                        this.state = 343;
                        this.signedAtom();
                    }
                    break;
                case mooParser.MINUS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 344;
                        this.match(mooParser.MINUS);
                        this.state = 345;
                        this.signedAtom();
                    }
                    break;
                case mooParser.T__34:
                case mooParser.T__38:
                case mooParser.LPAREN:
                case mooParser.DOLLAR:
                case mooParser.OBJREF:
                case mooParser.STRING:
                case mooParser.STRINGLITERAL:
                case mooParser.INTEGER:
                case mooParser.REAL:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 346;
                        this.atom();
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
    mooParser.prototype.atom = function () {
        var _localctx = new AtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, mooParser.RULE_atom);
        try {
            this.state = 363;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 349;
                        this.stringliteral();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 350;
                        this.functioninvocation();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 351;
                        this.verbinvocation();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 352;
                        this.property();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 353;
                        this.integer();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 354;
                        this.real();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 355;
                        this.list();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 356;
                        this.objref();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 357;
                        this.match(mooParser.LPAREN);
                        this.state = 358;
                        this.expression();
                        this.state = 359;
                        this.match(mooParser.RPAREN);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        {
                            this.state = 361;
                            this.match(mooParser.T__34);
                            this.state = 362;
                            this.expression();
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
    mooParser.prototype.objref = function () {
        var _localctx = new ObjrefContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, mooParser.RULE_objref);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 365;
                this.match(mooParser.OBJREF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mooParser.prototype.functioninvocation = function () {
        var _localctx = new FunctioninvocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, mooParser.RULE_functioninvocation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 367;
                this.name();
                this.state = 368;
                this.match(mooParser.LPAREN);
                this.state = 369;
                this.expressionlist();
                this.state = 370;
                this.match(mooParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mooParser.prototype.command = function () {
        var _localctx = new CommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, mooParser.RULE_command);
        try {
            this.state = 374;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case mooParser.DOLLAR:
                case mooParser.STRING:
                case mooParser.STRINGLITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 372;
                        this.verbinvocation();
                    }
                    break;
                case mooParser.T__35:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 373;
                        this.returncommand();
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
    mooParser.prototype.returncommand = function () {
        var _localctx = new ReturncommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, mooParser.RULE_returncommand);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 376;
                this.match(mooParser.T__35);
                this.state = 378;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (mooParser.T__34 - 35)) | (1 << (mooParser.T__38 - 35)) | (1 << (mooParser.LPAREN - 35)) | (1 << (mooParser.PLUS - 35)) | (1 << (mooParser.MINUS - 35)) | (1 << (mooParser.DOLLAR - 35)) | (1 << (mooParser.OBJREF - 35)) | (1 << (mooParser.STRING - 35)) | (1 << (mooParser.STRINGLITERAL - 35)) | (1 << (mooParser.INTEGER - 35)) | (1 << (mooParser.REAL - 35)))) !== 0)) {
                    {
                        this.state = 377;
                        this.expression();
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
    mooParser.prototype.verbinvocation = function () {
        var _localctx = new VerbinvocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, mooParser.RULE_verbinvocation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 380;
                this.property();
                this.state = 381;
                this.match(mooParser.T__1);
                this.state = 382;
                this.verb();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mooParser.prototype.verb = function () {
        var _localctx = new VerbContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, mooParser.RULE_verb);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 384;
                this.name();
                this.state = 390;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === mooParser.LPAREN) {
                    {
                        this.state = 385;
                        this.match(mooParser.LPAREN);
                        this.state = 387;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (mooParser.T__34 - 35)) | (1 << (mooParser.T__38 - 35)) | (1 << (mooParser.LPAREN - 35)) | (1 << (mooParser.PLUS - 35)) | (1 << (mooParser.MINUS - 35)) | (1 << (mooParser.DOLLAR - 35)) | (1 << (mooParser.OBJREF - 35)) | (1 << (mooParser.STRING - 35)) | (1 << (mooParser.STRINGLITERAL - 35)) | (1 << (mooParser.INTEGER - 35)) | (1 << (mooParser.REAL - 35)))) !== 0)) {
                            {
                                this.state = 386;
                                this.expressionlist();
                            }
                        }
                        this.state = 389;
                        this.match(mooParser.RPAREN);
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
    mooParser.prototype.property = function () {
        var _localctx = new PropertyContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, mooParser.RULE_property);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 392;
                this.propertyname();
                this.state = 401;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === mooParser.T__2 || _la === mooParser.T__36) {
                    {
                        this.state = 399;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case mooParser.T__2:
                                {
                                    {
                                        this.state = 393;
                                        this.match(mooParser.T__2);
                                        this.state = 394;
                                        this.name();
                                    }
                                }
                                break;
                            case mooParser.T__36:
                                {
                                    this.state = 395;
                                    this.match(mooParser.T__36);
                                    this.state = 396;
                                    this.expression();
                                    this.state = 397;
                                    this.match(mooParser.T__37);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 403;
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
    mooParser.prototype.propertyname = function () {
        var _localctx = new PropertynameContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, mooParser.RULE_propertyname);
        try {
            this.state = 406;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case mooParser.DOLLAR:
                case mooParser.STRING:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 404;
                        this.name();
                    }
                    break;
                case mooParser.STRINGLITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 405;
                        this.stringliteral();
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
    mooParser.prototype.list = function () {
        var _localctx = new ListContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, mooParser.RULE_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 408;
                this.match(mooParser.T__38);
                this.state = 410;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (mooParser.T__34 - 35)) | (1 << (mooParser.T__38 - 35)) | (1 << (mooParser.LPAREN - 35)) | (1 << (mooParser.PLUS - 35)) | (1 << (mooParser.MINUS - 35)) | (1 << (mooParser.DOLLAR - 35)) | (1 << (mooParser.OBJREF - 35)) | (1 << (mooParser.STRING - 35)) | (1 << (mooParser.STRINGLITERAL - 35)) | (1 << (mooParser.INTEGER - 35)) | (1 << (mooParser.REAL - 35)))) !== 0)) {
                    {
                        this.state = 409;
                        this.expressionlist();
                    }
                }
                this.state = 412;
                this.match(mooParser.T__39);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mooParser.prototype.stringliteral = function () {
        var _localctx = new StringliteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, mooParser.RULE_stringliteral);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 414;
                this.match(mooParser.STRINGLITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mooParser.prototype.integer = function () {
        var _localctx = new IntegerContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, mooParser.RULE_integer);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 416;
                this.match(mooParser.INTEGER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mooParser.prototype.real = function () {
        var _localctx = new RealContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, mooParser.RULE_real);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 418;
                this.match(mooParser.REAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mooParser.prototype.name = function () {
        var _localctx = new NameContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, mooParser.RULE_name);
        try {
            this.state = 422;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case mooParser.STRING:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 420;
                        this.username();
                    }
                    break;
                case mooParser.DOLLAR:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 421;
                        this.sysname();
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
    mooParser.prototype.sysname = function () {
        var _localctx = new SysnameContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, mooParser.RULE_sysname);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 424;
                this.match(mooParser.DOLLAR);
                this.state = 426;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                    case 1:
                        {
                            this.state = 425;
                            this.match(mooParser.STRING);
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
    mooParser.prototype.username = function () {
        var _localctx = new UsernameContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, mooParser.RULE_username);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 428;
                this.match(mooParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    mooParser.prototype.permissions = function () {
        var _localctx = new PermissionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, mooParser.RULE_permissions);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 430;
                this.match(mooParser.PERMISSIONS);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(mooParser, "_ATN", {
        get: function () {
            if (!mooParser.__ATN) {
                mooParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(mooParser._serializedATN));
            }
            return mooParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    mooParser.T__0 = 1;
    mooParser.T__1 = 2;
    mooParser.T__2 = 3;
    mooParser.T__3 = 4;
    mooParser.T__4 = 5;
    mooParser.T__5 = 6;
    mooParser.T__6 = 7;
    mooParser.T__7 = 8;
    mooParser.T__8 = 9;
    mooParser.T__9 = 10;
    mooParser.T__10 = 11;
    mooParser.T__11 = 12;
    mooParser.T__12 = 13;
    mooParser.T__13 = 14;
    mooParser.T__14 = 15;
    mooParser.T__15 = 16;
    mooParser.T__16 = 17;
    mooParser.T__17 = 18;
    mooParser.T__18 = 19;
    mooParser.T__19 = 20;
    mooParser.T__20 = 21;
    mooParser.T__21 = 22;
    mooParser.T__22 = 23;
    mooParser.T__23 = 24;
    mooParser.T__24 = 25;
    mooParser.T__25 = 26;
    mooParser.T__26 = 27;
    mooParser.T__27 = 28;
    mooParser.T__28 = 29;
    mooParser.T__29 = 30;
    mooParser.T__30 = 31;
    mooParser.T__31 = 32;
    mooParser.T__32 = 33;
    mooParser.T__33 = 34;
    mooParser.T__34 = 35;
    mooParser.T__35 = 36;
    mooParser.T__36 = 37;
    mooParser.T__37 = 38;
    mooParser.T__38 = 39;
    mooParser.T__39 = 40;
    mooParser.LPAREN = 41;
    mooParser.RPAREN = 42;
    mooParser.PLUS = 43;
    mooParser.MINUS = 44;
    mooParser.TIMES = 45;
    mooParser.MOD = 46;
    mooParser.DIV = 47;
    mooParser.GT = 48;
    mooParser.LT = 49;
    mooParser.GTE = 50;
    mooParser.LTE = 51;
    mooParser.EQ = 52;
    mooParser.AND = 53;
    mooParser.OR = 54;
    mooParser.NEQ = 55;
    mooParser.POW = 56;
    mooParser.COMMA = 57;
    mooParser.ASSIGN = 58;
    mooParser.SEMICOLON = 59;
    mooParser.DOLLAR = 60;
    mooParser.OBJREF = 61;
    mooParser.PERMISSIONS = 62;
    mooParser.STRING = 63;
    mooParser.STRINGLITERAL = 64;
    mooParser.INTEGER = 65;
    mooParser.REAL = 66;
    mooParser.COMMENT = 67;
    mooParser.WS = 68;
    mooParser.RULE_prog = 0;
    mooParser.RULE_declaration = 1;
    mooParser.RULE_programdecl = 2;
    mooParser.RULE_programname = 3;
    mooParser.RULE_verbdecl = 4;
    mooParser.RULE_verbname = 5;
    mooParser.RULE_propertydecl = 6;
    mooParser.RULE_rmpropertydecl = 7;
    mooParser.RULE_setpropertydecl = 8;
    mooParser.RULE_displaypropertydecl = 9;
    mooParser.RULE_kidsdecl = 10;
    mooParser.RULE_parentdecl = 11;
    mooParser.RULE_describedecl = 12;
    mooParser.RULE_contentsdecl = 13;
    mooParser.RULE_noteditdecl = 14;
    mooParser.RULE_createdecl = 15;
    mooParser.RULE_editdecl = 16;
    mooParser.RULE_addaliasdecl = 17;
    mooParser.RULE_statement = 18;
    mooParser.RULE_ifblock = 19;
    mooParser.RULE_whileblock = 20;
    mooParser.RULE_doblock = 21;
    mooParser.RULE_forblock = 22;
    mooParser.RULE_tryblock = 23;
    mooParser.RULE_assignblock = 24;
    mooParser.RULE_condition = 25;
    mooParser.RULE_relop = 26;
    mooParser.RULE_expressionlist = 27;
    mooParser.RULE_expression = 28;
    mooParser.RULE_term = 29;
    mooParser.RULE_factor = 30;
    mooParser.RULE_signedAtom = 31;
    mooParser.RULE_atom = 32;
    mooParser.RULE_objref = 33;
    mooParser.RULE_functioninvocation = 34;
    mooParser.RULE_command = 35;
    mooParser.RULE_returncommand = 36;
    mooParser.RULE_verbinvocation = 37;
    mooParser.RULE_verb = 38;
    mooParser.RULE_property = 39;
    mooParser.RULE_propertyname = 40;
    mooParser.RULE_list = 41;
    mooParser.RULE_stringliteral = 42;
    mooParser.RULE_integer = 43;
    mooParser.RULE_real = 44;
    mooParser.RULE_name = 45;
    mooParser.RULE_sysname = 46;
    mooParser.RULE_username = 47;
    mooParser.RULE_permissions = 48;
    // tslint:disable:no-trailing-whitespace
    mooParser.ruleNames = [
        "prog", "declaration", "programdecl", "programname", "verbdecl", "verbname",
        "propertydecl", "rmpropertydecl", "setpropertydecl", "displaypropertydecl",
        "kidsdecl", "parentdecl", "describedecl", "contentsdecl", "noteditdecl",
        "createdecl", "editdecl", "addaliasdecl", "statement", "ifblock", "whileblock",
        "doblock", "forblock", "tryblock", "assignblock", "condition", "relop",
        "expressionlist", "expression", "term", "factor", "signedAtom", "atom",
        "objref", "functioninvocation", "command", "returncommand", "verbinvocation",
        "verb", "property", "propertyname", "list", "stringliteral", "integer",
        "real", "name", "sysname", "username", "permissions",
    ];
    mooParser._LITERAL_NAMES = [
        undefined, "'@program'", "':'", "'.'", "'@verb'", "'@property'", "'@prop'",
        "'@rmproperty'", "'@rmprop'", "'@set'", "'to'", "'@display'", "'@disp'",
        "'@kids'", "'@parent'", "'@describe'", "'as'", "'@contents'", "'@notedit'",
        "'@create'", "'called'", "'@edit'", "'@addalias'", "'if'", "'elseif'",
        "'else'", "'endif'", "'while'", "'do'", "'for'", "'in'", "'endfor'", "'try'",
        "'except'", "'endtry'", "'!'", "'return'", "'['", "']'", "'{'", "'}'",
        "'('", "')'", "'+'", "'-'", "'*'", "'%'", "'/'", "'>'", "'<'", "'>='",
        "'<='", "'=='", "'&&'", "'||'", "'!='", "'^'", "','", "'='", "';'", "'$'",
    ];
    mooParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, "LPAREN",
        "RPAREN", "PLUS", "MINUS", "TIMES", "MOD", "DIV", "GT", "LT", "GTE", "LTE",
        "EQ", "AND", "OR", "NEQ", "POW", "COMMA", "ASSIGN", "SEMICOLON", "DOLLAR",
        "OBJREF", "PERMISSIONS", "STRING", "STRINGLITERAL", "INTEGER", "REAL",
        "COMMENT", "WS",
    ];
    mooParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(mooParser._LITERAL_NAMES, mooParser._SYMBOLIC_NAMES, []);
    mooParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03F\u01B3\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
        "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x03\x02\x06\x02" +
        "f\n\x02\r\x02\x0E\x02g\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
        "x\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x06\x04\x7F\n\x04\r\x04" +
        "\x0E\x04\x80\x03\x04\x03\x04\x03\x05\x03\x05\x05\x05\x87\n\x05\x03\x06" +
        "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06\x8F\n\x06\r\x06\x0E\x06" +
        "\x90\x03\x06\x05\x06\x94\n\x06\x03\x07\x03\x07\x05\x07\x98\n\x07\x03\b" +
        "\x03\b\x03\b\x05\b\x9D\n\b\x03\b\x05\b\xA0\n\b\x03\b\x05\b\xA3\n\b\x03" +
        "\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03" +
        "\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
        "\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03" +
        "\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x07" +
        "\x13\xCD\n\x13\f\x13\x0E\x13\xD0\v\x13\x03\x13\x03\x13\x03\x13\x03\x14" +
        "\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14" +
        "\xDE\n\x14\x03\x15\x03\x15\x03\x15\x06\x15\xE3\n\x15\r\x15\x0E\x15\xE4" +
        "\x03\x15\x03\x15\x03\x15\x06\x15\xEA\n\x15\r\x15\x0E\x15\xEB\x05\x15\xEE" +
        "\n\x15\x03\x15\x03\x15\x06\x15\xF2\n\x15\r\x15\x0E\x15\xF3\x05\x15\xF6" +
        "\n\x15\x03\x15\x03\x15\x05\x15\xFA\n\x15\x03\x16\x03\x16\x03\x16\x06\x16" +
        "\xFF\n\x16\r\x16\x0E\x16\u0100\x03\x17\x03\x17\x06\x17\u0105\n\x17\r\x17" +
        "\x0E\x17\u0106\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18" +
        "\x03\x18\x06\x18\u0111\n\x18\r\x18\x0E\x18\u0112\x03\x18\x03\x18\x03\x19" +
        "\x03\x19\x06\x19\u0119\n\x19\r\x19\x0E\x19\u011A\x03\x19\x03\x19\x03\x19" +
        "\x06\x19\u0120\n\x19\r\x19\x0E\x19\u0121\x03\x19\x03\x19\x03\x1A\x03\x1A" +
        "\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B" +
        "\u0130\n\x1B\f\x1B\x0E\x1B\u0133\v\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C" +
        "\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u013C\n\x1D\f\x1D\x0E\x1D\u013F\v\x1D" +
        "\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u0144\n\x1E\f\x1E\x0E\x1E\u0147\v\x1E" +
        "\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u014C\n\x1F\f\x1F\x0E\x1F\u014F\v\x1F" +
        "\x03 \x03 \x03 \x07 \u0154\n \f \x0E \u0157\v \x03!\x03!\x03!\x03!\x03" +
        "!\x05!\u015E\n!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"" +
        "\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u016E\n\"\x03#\x03#\x03$\x03$\x03" +
        "$\x03$\x03$\x03%\x03%\x05%\u0179\n%\x03&\x03&\x05&\u017D\n&\x03\'\x03" +
        "\'\x03\'\x03\'\x03(\x03(\x03(\x05(\u0186\n(\x03(\x05(\u0189\n(\x03)\x03" +
        ")\x03)\x03)\x03)\x03)\x03)\x07)\u0192\n)\f)\x0E)\u0195\v)\x03*\x03*\x05" +
        "*\u0199\n*\x03+\x03+\x05+\u019D\n+\x03+\x03+\x03,\x03,\x03-\x03-\x03." +
        "\x03.\x03/\x03/\x05/\u01A9\n/\x030\x030\x050\u01AD\n0\x031\x031\x032\x03" +
        "2\x032\x02\x02\x023\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
        "\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
        "\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
        ">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02" +
        "Z\x02\\\x02^\x02`\x02b\x02\x02\b\x03\x02\x07\b\x03\x02\t\n\x03\x02\r\x0E" +
        "\x03\x0229\x03\x02-.\x03\x02/1\x02\u01C3\x02e\x03\x02\x02\x02\x04w\x03" +
        "\x02\x02\x02\x06y\x03\x02\x02\x02\b\x86\x03\x02\x02\x02\n\x88\x03\x02" +
        "\x02\x02\f\x97\x03\x02\x02\x02\x0E\x99\x03\x02\x02\x02\x10\xA4\x03\x02" +
        "\x02\x02\x12\xA7\x03\x02\x02\x02\x14\xAC\x03\x02\x02\x02\x16\xAF\x03\x02" +
        "\x02\x02\x18\xB2\x03\x02\x02\x02\x1A\xB5\x03\x02\x02\x02\x1C\xBA\x03\x02" +
        "\x02\x02\x1E\xBD\x03\x02\x02\x02 \xC0\x03\x02\x02\x02\"\xC5\x03\x02\x02" +
        "\x02$\xC8\x03\x02\x02\x02&\xDD\x03\x02\x02\x02(\xDF\x03\x02\x02\x02*\xFB" +
        "\x03\x02\x02\x02,\u0102\x03\x02\x02\x02.\u010B\x03\x02\x02\x020\u0116" +
        "\x03\x02\x02\x022\u0125\x03\x02\x02\x024\u012A\x03\x02\x02\x026\u0136" +
        "\x03\x02\x02\x028\u0138\x03\x02\x02\x02:\u0140\x03\x02\x02\x02<\u0148" +
        "\x03\x02\x02\x02>\u0150\x03\x02\x02\x02@\u015D\x03\x02\x02\x02B\u016D" +
        "\x03\x02\x02\x02D\u016F\x03\x02\x02\x02F\u0171\x03\x02\x02\x02H\u0178" +
        "\x03\x02\x02\x02J\u017A\x03\x02\x02\x02L\u017E\x03\x02\x02\x02N\u0182" +
        "\x03\x02\x02\x02P\u018A\x03\x02\x02\x02R\u0198\x03\x02\x02\x02T\u019A" +
        "\x03\x02\x02\x02V\u01A0\x03\x02\x02\x02X\u01A2\x03\x02\x02\x02Z\u01A4" +
        "\x03\x02\x02\x02\\\u01A8\x03\x02\x02\x02^\u01AA\x03\x02\x02\x02`\u01AE" +
        "\x03\x02\x02\x02b\u01B0\x03\x02\x02\x02df\x05\x04\x03\x02ed\x03\x02\x02" +
        "\x02fg\x03\x02\x02\x02ge\x03\x02\x02\x02gh\x03\x02\x02\x02h\x03\x03\x02" +
        "\x02\x02ix\x05\x06\x04\x02jx\x05\n\x06\x02kx\x05\x0E\b\x02lx\x05\x10\t" +
        "\x02mx\x05\x12\n\x02nx\x05\x14\v\x02ox\x05\x16\f\x02px\x05\x18\r\x02q" +
        "x\x05\x1A\x0E\x02rx\x05\x1C\x0F\x02sx\x05\x1E\x10\x02tx\x05 \x11\x02u" +
        "x\x05\"\x12\x02vx\x05$\x13\x02wi\x03\x02\x02\x02wj\x03\x02\x02\x02wk\x03" +
        "\x02\x02\x02wl\x03\x02\x02\x02wm\x03\x02\x02\x02wn\x03\x02\x02\x02wo\x03" +
        "\x02\x02\x02wp\x03\x02\x02\x02wq\x03\x02\x02\x02wr\x03\x02\x02\x02ws\x03" +
        "\x02\x02\x02wt\x03\x02\x02\x02wu\x03\x02\x02\x02wv\x03\x02\x02\x02x\x05" +
        "\x03\x02\x02\x02yz\x07\x03\x02\x02z{\x05\b\x05\x02{|\x07\x04\x02\x02|" +
        "~\x05\\/\x02}\x7F\x05&\x14\x02~}\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02" +
        "\x80~\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02" +
        "\x82\x83\x07\x05\x02\x02\x83\x07\x03\x02\x02\x02\x84\x87\x05\\/\x02\x85" +
        "\x87\x05V,\x02\x86\x84\x03\x02\x02\x02\x86\x85\x03\x02\x02\x02\x87\t\x03" +
        "\x02\x02\x02\x88\x89\x07\x06\x02\x02\x89\x8A\x05\f\x07\x02\x8A\x8B\x07" +
        "\x04\x02\x02\x8B\x8C\x05\\/\x02\x8C\x8E\x03\x02\x02\x02\x8D\x8F\x05\\" +
        "/\x02\x8E\x8D\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x8E\x03\x02" +
        "\x02\x02\x90\x91\x03\x02\x02\x02\x91\x93\x03\x02\x02\x02\x92\x94\x05b" +
        "2\x02\x93\x92\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\v\x03\x02\x02" +
        "\x02\x95\x98\x05\\/\x02\x96\x98\x05V,\x02\x97\x95\x03\x02\x02\x02\x97" +
        "\x96\x03\x02\x02\x02\x98\r\x03\x02\x02\x02\x99\x9A\t\x02\x02\x02\x9A\x9C" +
        "\x05P)\x02\x9B\x9D\x07<\x02\x02\x9C\x9B\x03\x02\x02\x02\x9C\x9D\x03\x02" +
        "\x02\x02\x9D\x9F\x03\x02\x02\x02\x9E\xA0\x05:\x1E\x02\x9F\x9E\x03\x02" +
        "\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA2\x03\x02\x02\x02\xA1\xA3\x05b" +
        "2\x02\xA2\xA1\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\x0F\x03\x02" +
        "\x02\x02\xA4\xA5\t\x03\x02\x02\xA5\xA6\x05\\/\x02\xA6\x11\x03\x02\x02" +
        "\x02\xA7\xA8\x07\v\x02\x02\xA8\xA9\x05P)\x02\xA9\xAA\x07\f\x02\x02\xAA" +
        "\xAB\x05:\x1E\x02\xAB\x13\x03\x02\x02\x02\xAC\xAD\t\x04\x02\x02\xAD\xAE" +
        "\x05P)\x02\xAE\x15\x03\x02\x02\x02\xAF\xB0\x07\x0F\x02\x02\xB0\xB1\x05" +
        "\\/\x02\xB1\x17\x03\x02\x02\x02\xB2\xB3\x07\x10\x02\x02\xB3\xB4\x05\\" +
        "/\x02\xB4\x19\x03\x02\x02\x02\xB5\xB6\x07\x11\x02\x02\xB6\xB7\x05P)\x02" +
        "\xB7\xB8\x07\x12\x02\x02\xB8\xB9\x05:\x1E\x02\xB9\x1B\x03\x02\x02\x02" +
        "\xBA\xBB\x07\x13\x02\x02\xBB\xBC\x05\\/\x02\xBC\x1D\x03\x02\x02\x02\xBD" +
        "\xBE\x07\x14\x02\x02\xBE\xBF\x05P)\x02\xBF\x1F\x03\x02\x02\x02\xC0\xC1" +
        "\x07\x15\x02\x02\xC1\xC2\x05^0\x02\xC2\xC3\x07\x16\x02\x02\xC3\xC4\x05" +
        "8\x1D\x02\xC4!\x03\x02\x02\x02\xC5\xC6\x07\x17\x02\x02\xC6\xC7\x05P)\x02" +
        "\xC7#\x03\x02\x02\x02\xC8\xC9\x07\x18\x02\x02\xC9\xCE\x05\\/\x02\xCA\xCB" +
        "\x07;\x02\x02\xCB\xCD\x05\\/\x02\xCC\xCA\x03\x02\x02\x02\xCD\xD0\x03\x02" +
        "\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD1\x03\x02" +
        "\x02\x02\xD0\xCE\x03\x02\x02\x02\xD1\xD2\x07\f\x02\x02\xD2\xD3\x05:\x1E" +
        "\x02\xD3%\x03\x02\x02\x02\xD4\xDE\x05(\x15\x02\xD5\xDE\x05*\x16\x02\xD6" +
        "\xDE\x05,\x17\x02\xD7\xDE\x05.\x18\x02\xD8\xDE\x052\x1A\x02\xD9\xDE\x05" +
        "0\x19\x02\xDA\xDB\x05H%\x02\xDB\xDC\x07=\x02\x02\xDC\xDE\x03\x02\x02\x02" +
        "\xDD\xD4\x03\x02\x02\x02\xDD\xD5\x03\x02\x02\x02\xDD\xD6\x03\x02\x02\x02" +
        "\xDD\xD7\x03\x02\x02\x02\xDD\xD8\x03\x02\x02\x02\xDD\xD9\x03\x02\x02\x02" +
        "\xDD\xDA\x03\x02\x02\x02\xDE\'\x03\x02\x02\x02\xDF\xE0\x07\x19\x02\x02" +
        "\xE0\xE2\x054\x1B\x02\xE1\xE3\x05&\x14\x02\xE2\xE1\x03\x02\x02\x02\xE3" +
        "\xE4\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5" +
        "\xED\x03\x02\x02\x02\xE6\xE7\x07\x1A\x02\x02\xE7\xE9\x054\x1B\x02\xE8" +
        "\xEA\x05&\x14\x02\xE9\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB" +
        "\xE9\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xEE\x03\x02\x02\x02\xED" +
        "\xE6\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xF5\x03\x02\x02\x02\xEF" +
        "\xF1\x07\x1B\x02\x02\xF0\xF2\x05&\x14\x02\xF1\xF0\x03\x02\x02\x02\xF2" +
        "\xF3\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4" +
        "\xF6\x03\x02\x02\x02\xF5\xEF\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6" +
        "\xF7\x03\x02\x02\x02\xF7\xF9\x07\x1C\x02\x02\xF8\xFA\x07=\x02\x02\xF9" +
        "\xF8\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA)\x03\x02\x02\x02\xFB" +
        "\xFC\x07\x1D\x02\x02\xFC\xFE\x054\x1B\x02\xFD\xFF\x05&\x14\x02\xFE\xFD" +
        "\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0100" +
        "\u0101\x03\x02\x02\x02\u0101+\x03\x02\x02\x02\u0102\u0104\x07\x1E\x02" +
        "\x02\u0103\u0105\x05&\x14\x02\u0104\u0103\x03\x02\x02\x02\u0105\u0106" +
        "\x03\x02\x02\x02\u0106\u0104\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02" +
        "\u0107\u0108\x03\x02\x02\x02\u0108\u0109\x07\x1D\x02\x02\u0109\u010A\x05" +
        "4\x1B\x02\u010A-\x03\x02\x02\x02\u010B\u010C\x07\x1F\x02\x02\u010C\u010D" +
        "\x05\\/\x02\u010D\u010E\x07 \x02\x02\u010E\u0110\x05:\x1E\x02\u010F\u0111" +
        "\x05&\x14\x02\u0110\u010F\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02" +
        "\u0112\u0110\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u0114\x03" +
        "\x02\x02\x02\u0114\u0115\x07!\x02\x02\u0115/\x03\x02\x02\x02\u0116\u0118" +
        "\x07\"\x02\x02\u0117\u0119\x05&\x14\x02\u0118\u0117\x03\x02\x02\x02\u0119" +
        "\u011A\x03\x02\x02\x02\u011A\u0118\x03\x02\x02\x02\u011A\u011B\x03\x02" +
        "\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C\u011D\x07#\x02\x02\u011D\u011F" +
        "\x05P)\x02\u011E\u0120\x05&\x14\x02\u011F\u011E\x03\x02\x02\x02\u0120" +
        "\u0121\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121\u0122\x03\x02" +
        "\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0124\x07$\x02\x02\u01241\x03" +
        "\x02\x02\x02\u0125\u0126\x05P)\x02\u0126\u0127\x07<\x02\x02\u0127\u0128" +
        "\x05:\x1E\x02\u0128\u0129\x07=\x02\x02\u01293\x03\x02\x02\x02\u012A\u012B" +
        "\x07+\x02\x02\u012B\u0131\x05:\x1E\x02\u012C\u012D\x056\x1C\x02\u012D" +
        "\u012E\x05:\x1E\x02\u012E\u0130\x03\x02\x02\x02\u012F\u012C\x03\x02\x02" +
        "\x02\u0130\u0133\x03\x02\x02\x02\u0131\u012F\x03\x02\x02\x02\u0131\u0132" +
        "\x03\x02\x02\x02\u0132\u0134\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02" +
        "\u0134\u0135\x07,\x02\x02\u01355\x03\x02\x02\x02\u0136\u0137\t\x05\x02" +
        "\x02\u01377\x03\x02\x02\x02\u0138\u013D\x05:\x1E\x02\u0139\u013A\x07;" +
        "\x02\x02\u013A\u013C\x05:\x1E\x02\u013B\u0139\x03\x02\x02\x02\u013C\u013F" +
        "\x03\x02\x02\x02\u013D\u013B\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02" +
        "\u013E9\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u0140\u0145\x05<\x1F" +
        "\x02\u0141\u0142\t\x06\x02\x02\u0142\u0144\x05<\x1F\x02\u0143\u0141\x03" +
        "\x02\x02\x02\u0144\u0147\x03\x02\x02\x02\u0145\u0143\x03\x02\x02\x02\u0145" +
        "\u0146\x03\x02\x02\x02\u0146;\x03\x02\x02\x02\u0147\u0145\x03\x02\x02" +
        "\x02\u0148\u014D\x05> \x02\u0149\u014A\t\x07\x02\x02\u014A\u014C\x05>" +
        " \x02\u014B\u0149\x03\x02\x02\x02\u014C\u014F\x03\x02\x02\x02\u014D\u014B" +
        "\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E=\x03\x02\x02\x02\u014F" +
        "\u014D\x03\x02\x02\x02\u0150\u0155\x05@!\x02\u0151\u0152\x07:\x02\x02" +
        "\u0152\u0154\x05@!\x02\u0153\u0151\x03\x02\x02\x02\u0154\u0157\x03\x02" +
        "\x02\x02\u0155\u0153\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156" +
        "?\x03\x02\x02\x02\u0157\u0155\x03\x02\x02\x02\u0158\u0159\x07-\x02\x02" +
        "\u0159\u015E\x05@!\x02\u015A\u015B\x07.\x02\x02\u015B\u015E\x05@!\x02" +
        "\u015C\u015E\x05B\"\x02\u015D\u0158\x03\x02\x02\x02\u015D\u015A\x03\x02" +
        "\x02\x02\u015D\u015C\x03\x02\x02\x02\u015EA\x03\x02\x02\x02\u015F\u016E" +
        "\x05V,\x02\u0160\u016E\x05F$\x02\u0161\u016E\x05L\'\x02\u0162\u016E\x05" +
        "P)\x02\u0163\u016E\x05X-\x02\u0164\u016E\x05Z.\x02\u0165\u016E\x05T+\x02" +
        "\u0166\u016E\x05D#\x02\u0167\u0168\x07+\x02\x02\u0168\u0169\x05:\x1E\x02" +
        "\u0169\u016A\x07,\x02\x02\u016A\u016E\x03\x02\x02\x02\u016B\u016C\x07" +
        "%\x02\x02\u016C\u016E\x05:\x1E\x02\u016D\u015F\x03\x02\x02\x02\u016D\u0160" +
        "\x03\x02\x02\x02\u016D\u0161\x03\x02\x02\x02\u016D\u0162\x03\x02\x02\x02" +
        "\u016D\u0163\x03\x02\x02\x02\u016D\u0164\x03\x02\x02\x02\u016D\u0165\x03" +
        "\x02\x02\x02\u016D\u0166\x03\x02\x02\x02\u016D\u0167\x03\x02\x02\x02\u016D" +
        "\u016B\x03\x02\x02\x02\u016EC\x03\x02\x02\x02\u016F\u0170\x07?\x02\x02" +
        "\u0170E\x03\x02\x02\x02\u0171\u0172\x05\\/\x02\u0172\u0173\x07+\x02\x02" +
        "\u0173\u0174\x058\x1D\x02\u0174\u0175\x07,\x02\x02\u0175G\x03\x02\x02" +
        "\x02\u0176\u0179\x05L\'\x02\u0177\u0179\x05J&\x02\u0178\u0176\x03\x02" +
        "\x02\x02\u0178\u0177\x03\x02\x02\x02\u0179I\x03\x02\x02\x02\u017A\u017C" +
        "\x07&\x02\x02\u017B\u017D\x05:\x1E\x02\u017C\u017B\x03\x02\x02\x02\u017C" +
        "\u017D\x03\x02\x02\x02\u017DK\x03\x02\x02\x02\u017E\u017F\x05P)\x02\u017F" +
        "\u0180\x07\x04\x02\x02\u0180\u0181\x05N(\x02\u0181M\x03\x02\x02\x02\u0182" +
        "\u0188\x05\\/\x02\u0183\u0185\x07+\x02\x02\u0184\u0186\x058\x1D\x02\u0185" +
        "\u0184\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0187\x03\x02" +
        "\x02\x02\u0187\u0189\x07,\x02\x02\u0188\u0183\x03\x02\x02\x02\u0188\u0189" +
        "\x03\x02\x02\x02\u0189O\x03\x02\x02\x02\u018A\u0193\x05R*\x02\u018B\u018C" +
        "\x07\x05\x02\x02\u018C\u0192\x05\\/\x02\u018D\u018E\x07\'\x02\x02\u018E" +
        "\u018F\x05:\x1E\x02\u018F\u0190\x07(\x02\x02\u0190\u0192\x03\x02\x02\x02" +
        "\u0191\u018B\x03\x02\x02\x02\u0191\u018D\x03\x02\x02\x02\u0192\u0195\x03" +
        "\x02\x02\x02\u0193\u0191\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194" +
        "Q\x03\x02\x02\x02\u0195\u0193\x03\x02\x02\x02\u0196\u0199\x05\\/\x02\u0197" +
        "\u0199\x05V,\x02\u0198\u0196\x03\x02\x02\x02\u0198\u0197\x03\x02\x02\x02" +
        "\u0199S\x03\x02\x02\x02\u019A\u019C\x07)\x02\x02\u019B\u019D\x058\x1D" +
        "\x02\u019C\u019B\x03\x02\x02\x02\u019C\u019D\x03\x02\x02\x02\u019D\u019E" +
        "\x03\x02\x02\x02\u019E\u019F\x07*\x02\x02\u019FU\x03\x02\x02\x02\u01A0" +
        "\u01A1\x07B\x02\x02\u01A1W\x03\x02\x02\x02\u01A2\u01A3\x07C\x02\x02\u01A3" +
        "Y\x03\x02\x02\x02\u01A4\u01A5\x07D\x02\x02\u01A5[\x03\x02\x02\x02\u01A6" +
        "\u01A9\x05`1\x02\u01A7\u01A9\x05^0\x02\u01A8\u01A6\x03\x02\x02\x02\u01A8" +
        "\u01A7\x03\x02\x02\x02\u01A9]\x03\x02\x02\x02\u01AA\u01AC\x07>\x02\x02" +
        "\u01AB\u01AD\x07A\x02\x02\u01AC\u01AB\x03\x02\x02\x02\u01AC\u01AD\x03" +
        "\x02\x02\x02\u01AD_\x03\x02\x02\x02\u01AE\u01AF\x07A\x02\x02\u01AFa\x03" +
        "\x02\x02\x02\u01B0\u01B1\x07@\x02\x02\u01B1c\x03\x02\x02\x02*gw\x80\x86" +
        "\x90\x93\x97\x9C\x9F\xA2\xCE\xDD\xE4\xEB\xED\xF3\xF5\xF9\u0100\u0106\u0112" +
        "\u011A\u0121\u0131\u013D\u0145\u014D\u0155\u015D\u016D\u0178\u017C\u0185" +
        "\u0188\u0191\u0193\u0198\u019C\u01A8\u01AC";
    return mooParser;
}(Parser_1.Parser));
exports.mooParser = mooParser;
var ProgContext = /** @class */ (function (_super) {
    __extends(ProgContext, _super);
    function ProgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgContext.prototype.declaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DeclarationContext);
        }
        else {
            return this.getRuleContext(i, DeclarationContext);
        }
    };
    Object.defineProperty(ProgContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_prog; },
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
var DeclarationContext = /** @class */ (function (_super) {
    __extends(DeclarationContext, _super);
    function DeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationContext.prototype.programdecl = function () {
        return this.tryGetRuleContext(0, ProgramdeclContext);
    };
    DeclarationContext.prototype.verbdecl = function () {
        return this.tryGetRuleContext(0, VerbdeclContext);
    };
    DeclarationContext.prototype.propertydecl = function () {
        return this.tryGetRuleContext(0, PropertydeclContext);
    };
    DeclarationContext.prototype.rmpropertydecl = function () {
        return this.tryGetRuleContext(0, RmpropertydeclContext);
    };
    DeclarationContext.prototype.setpropertydecl = function () {
        return this.tryGetRuleContext(0, SetpropertydeclContext);
    };
    DeclarationContext.prototype.displaypropertydecl = function () {
        return this.tryGetRuleContext(0, DisplaypropertydeclContext);
    };
    DeclarationContext.prototype.kidsdecl = function () {
        return this.tryGetRuleContext(0, KidsdeclContext);
    };
    DeclarationContext.prototype.parentdecl = function () {
        return this.tryGetRuleContext(0, ParentdeclContext);
    };
    DeclarationContext.prototype.describedecl = function () {
        return this.tryGetRuleContext(0, DescribedeclContext);
    };
    DeclarationContext.prototype.contentsdecl = function () {
        return this.tryGetRuleContext(0, ContentsdeclContext);
    };
    DeclarationContext.prototype.noteditdecl = function () {
        return this.tryGetRuleContext(0, NoteditdeclContext);
    };
    DeclarationContext.prototype.createdecl = function () {
        return this.tryGetRuleContext(0, CreatedeclContext);
    };
    DeclarationContext.prototype.editdecl = function () {
        return this.tryGetRuleContext(0, EditdeclContext);
    };
    DeclarationContext.prototype.addaliasdecl = function () {
        return this.tryGetRuleContext(0, AddaliasdeclContext);
    };
    Object.defineProperty(DeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_declaration; },
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
var ProgramdeclContext = /** @class */ (function (_super) {
    __extends(ProgramdeclContext, _super);
    function ProgramdeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgramdeclContext.prototype.programname = function () {
        return this.getRuleContext(0, ProgramnameContext);
    };
    ProgramdeclContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    ProgramdeclContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(ProgramdeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_programdecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProgramdeclContext.prototype.enterRule = function (listener) {
        if (listener.enterProgramdecl) {
            listener.enterProgramdecl(this);
        }
    };
    // @Override
    ProgramdeclContext.prototype.exitRule = function (listener) {
        if (listener.exitProgramdecl) {
            listener.exitProgramdecl(this);
        }
    };
    // @Override
    ProgramdeclContext.prototype.accept = function (visitor) {
        if (visitor.visitProgramdecl) {
            return visitor.visitProgramdecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProgramdeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProgramdeclContext = ProgramdeclContext;
var ProgramnameContext = /** @class */ (function (_super) {
    __extends(ProgramnameContext, _super);
    function ProgramnameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgramnameContext.prototype.name = function () {
        return this.tryGetRuleContext(0, NameContext);
    };
    ProgramnameContext.prototype.stringliteral = function () {
        return this.tryGetRuleContext(0, StringliteralContext);
    };
    Object.defineProperty(ProgramnameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_programname; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProgramnameContext.prototype.enterRule = function (listener) {
        if (listener.enterProgramname) {
            listener.enterProgramname(this);
        }
    };
    // @Override
    ProgramnameContext.prototype.exitRule = function (listener) {
        if (listener.exitProgramname) {
            listener.exitProgramname(this);
        }
    };
    // @Override
    ProgramnameContext.prototype.accept = function (visitor) {
        if (visitor.visitProgramname) {
            return visitor.visitProgramname(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProgramnameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProgramnameContext = ProgramnameContext;
var VerbdeclContext = /** @class */ (function (_super) {
    __extends(VerbdeclContext, _super);
    function VerbdeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VerbdeclContext.prototype.verbname = function () {
        return this.tryGetRuleContext(0, VerbnameContext);
    };
    VerbdeclContext.prototype.name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NameContext);
        }
        else {
            return this.getRuleContext(i, NameContext);
        }
    };
    VerbdeclContext.prototype.permissions = function () {
        return this.tryGetRuleContext(0, PermissionsContext);
    };
    Object.defineProperty(VerbdeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_verbdecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VerbdeclContext.prototype.enterRule = function (listener) {
        if (listener.enterVerbdecl) {
            listener.enterVerbdecl(this);
        }
    };
    // @Override
    VerbdeclContext.prototype.exitRule = function (listener) {
        if (listener.exitVerbdecl) {
            listener.exitVerbdecl(this);
        }
    };
    // @Override
    VerbdeclContext.prototype.accept = function (visitor) {
        if (visitor.visitVerbdecl) {
            return visitor.visitVerbdecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VerbdeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VerbdeclContext = VerbdeclContext;
var VerbnameContext = /** @class */ (function (_super) {
    __extends(VerbnameContext, _super);
    function VerbnameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VerbnameContext.prototype.name = function () {
        return this.tryGetRuleContext(0, NameContext);
    };
    VerbnameContext.prototype.stringliteral = function () {
        return this.tryGetRuleContext(0, StringliteralContext);
    };
    Object.defineProperty(VerbnameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_verbname; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VerbnameContext.prototype.enterRule = function (listener) {
        if (listener.enterVerbname) {
            listener.enterVerbname(this);
        }
    };
    // @Override
    VerbnameContext.prototype.exitRule = function (listener) {
        if (listener.exitVerbname) {
            listener.exitVerbname(this);
        }
    };
    // @Override
    VerbnameContext.prototype.accept = function (visitor) {
        if (visitor.visitVerbname) {
            return visitor.visitVerbname(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VerbnameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VerbnameContext = VerbnameContext;
var PropertydeclContext = /** @class */ (function (_super) {
    __extends(PropertydeclContext, _super);
    function PropertydeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropertydeclContext.prototype.property = function () {
        return this.getRuleContext(0, PropertyContext);
    };
    PropertydeclContext.prototype.ASSIGN = function () { return this.tryGetToken(mooParser.ASSIGN, 0); };
    PropertydeclContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    PropertydeclContext.prototype.permissions = function () {
        return this.tryGetRuleContext(0, PermissionsContext);
    };
    Object.defineProperty(PropertydeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_propertydecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PropertydeclContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertydecl) {
            listener.enterPropertydecl(this);
        }
    };
    // @Override
    PropertydeclContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertydecl) {
            listener.exitPropertydecl(this);
        }
    };
    // @Override
    PropertydeclContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertydecl) {
            return visitor.visitPropertydecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertydeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertydeclContext = PropertydeclContext;
var RmpropertydeclContext = /** @class */ (function (_super) {
    __extends(RmpropertydeclContext, _super);
    function RmpropertydeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RmpropertydeclContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    Object.defineProperty(RmpropertydeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_rmpropertydecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RmpropertydeclContext.prototype.enterRule = function (listener) {
        if (listener.enterRmpropertydecl) {
            listener.enterRmpropertydecl(this);
        }
    };
    // @Override
    RmpropertydeclContext.prototype.exitRule = function (listener) {
        if (listener.exitRmpropertydecl) {
            listener.exitRmpropertydecl(this);
        }
    };
    // @Override
    RmpropertydeclContext.prototype.accept = function (visitor) {
        if (visitor.visitRmpropertydecl) {
            return visitor.visitRmpropertydecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RmpropertydeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RmpropertydeclContext = RmpropertydeclContext;
var SetpropertydeclContext = /** @class */ (function (_super) {
    __extends(SetpropertydeclContext, _super);
    function SetpropertydeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SetpropertydeclContext.prototype.property = function () {
        return this.getRuleContext(0, PropertyContext);
    };
    SetpropertydeclContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(SetpropertydeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_setpropertydecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SetpropertydeclContext.prototype.enterRule = function (listener) {
        if (listener.enterSetpropertydecl) {
            listener.enterSetpropertydecl(this);
        }
    };
    // @Override
    SetpropertydeclContext.prototype.exitRule = function (listener) {
        if (listener.exitSetpropertydecl) {
            listener.exitSetpropertydecl(this);
        }
    };
    // @Override
    SetpropertydeclContext.prototype.accept = function (visitor) {
        if (visitor.visitSetpropertydecl) {
            return visitor.visitSetpropertydecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SetpropertydeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SetpropertydeclContext = SetpropertydeclContext;
var DisplaypropertydeclContext = /** @class */ (function (_super) {
    __extends(DisplaypropertydeclContext, _super);
    function DisplaypropertydeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DisplaypropertydeclContext.prototype.property = function () {
        return this.getRuleContext(0, PropertyContext);
    };
    Object.defineProperty(DisplaypropertydeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_displaypropertydecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DisplaypropertydeclContext.prototype.enterRule = function (listener) {
        if (listener.enterDisplaypropertydecl) {
            listener.enterDisplaypropertydecl(this);
        }
    };
    // @Override
    DisplaypropertydeclContext.prototype.exitRule = function (listener) {
        if (listener.exitDisplaypropertydecl) {
            listener.exitDisplaypropertydecl(this);
        }
    };
    // @Override
    DisplaypropertydeclContext.prototype.accept = function (visitor) {
        if (visitor.visitDisplaypropertydecl) {
            return visitor.visitDisplaypropertydecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DisplaypropertydeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DisplaypropertydeclContext = DisplaypropertydeclContext;
var KidsdeclContext = /** @class */ (function (_super) {
    __extends(KidsdeclContext, _super);
    function KidsdeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KidsdeclContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    Object.defineProperty(KidsdeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_kidsdecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KidsdeclContext.prototype.enterRule = function (listener) {
        if (listener.enterKidsdecl) {
            listener.enterKidsdecl(this);
        }
    };
    // @Override
    KidsdeclContext.prototype.exitRule = function (listener) {
        if (listener.exitKidsdecl) {
            listener.exitKidsdecl(this);
        }
    };
    // @Override
    KidsdeclContext.prototype.accept = function (visitor) {
        if (visitor.visitKidsdecl) {
            return visitor.visitKidsdecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KidsdeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KidsdeclContext = KidsdeclContext;
var ParentdeclContext = /** @class */ (function (_super) {
    __extends(ParentdeclContext, _super);
    function ParentdeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParentdeclContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    Object.defineProperty(ParentdeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_parentdecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParentdeclContext.prototype.enterRule = function (listener) {
        if (listener.enterParentdecl) {
            listener.enterParentdecl(this);
        }
    };
    // @Override
    ParentdeclContext.prototype.exitRule = function (listener) {
        if (listener.exitParentdecl) {
            listener.exitParentdecl(this);
        }
    };
    // @Override
    ParentdeclContext.prototype.accept = function (visitor) {
        if (visitor.visitParentdecl) {
            return visitor.visitParentdecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParentdeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParentdeclContext = ParentdeclContext;
var DescribedeclContext = /** @class */ (function (_super) {
    __extends(DescribedeclContext, _super);
    function DescribedeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DescribedeclContext.prototype.property = function () {
        return this.getRuleContext(0, PropertyContext);
    };
    DescribedeclContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(DescribedeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_describedecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DescribedeclContext.prototype.enterRule = function (listener) {
        if (listener.enterDescribedecl) {
            listener.enterDescribedecl(this);
        }
    };
    // @Override
    DescribedeclContext.prototype.exitRule = function (listener) {
        if (listener.exitDescribedecl) {
            listener.exitDescribedecl(this);
        }
    };
    // @Override
    DescribedeclContext.prototype.accept = function (visitor) {
        if (visitor.visitDescribedecl) {
            return visitor.visitDescribedecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DescribedeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DescribedeclContext = DescribedeclContext;
var ContentsdeclContext = /** @class */ (function (_super) {
    __extends(ContentsdeclContext, _super);
    function ContentsdeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ContentsdeclContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    Object.defineProperty(ContentsdeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_contentsdecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ContentsdeclContext.prototype.enterRule = function (listener) {
        if (listener.enterContentsdecl) {
            listener.enterContentsdecl(this);
        }
    };
    // @Override
    ContentsdeclContext.prototype.exitRule = function (listener) {
        if (listener.exitContentsdecl) {
            listener.exitContentsdecl(this);
        }
    };
    // @Override
    ContentsdeclContext.prototype.accept = function (visitor) {
        if (visitor.visitContentsdecl) {
            return visitor.visitContentsdecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ContentsdeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ContentsdeclContext = ContentsdeclContext;
var NoteditdeclContext = /** @class */ (function (_super) {
    __extends(NoteditdeclContext, _super);
    function NoteditdeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NoteditdeclContext.prototype.property = function () {
        return this.getRuleContext(0, PropertyContext);
    };
    Object.defineProperty(NoteditdeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_noteditdecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NoteditdeclContext.prototype.enterRule = function (listener) {
        if (listener.enterNoteditdecl) {
            listener.enterNoteditdecl(this);
        }
    };
    // @Override
    NoteditdeclContext.prototype.exitRule = function (listener) {
        if (listener.exitNoteditdecl) {
            listener.exitNoteditdecl(this);
        }
    };
    // @Override
    NoteditdeclContext.prototype.accept = function (visitor) {
        if (visitor.visitNoteditdecl) {
            return visitor.visitNoteditdecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NoteditdeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NoteditdeclContext = NoteditdeclContext;
var CreatedeclContext = /** @class */ (function (_super) {
    __extends(CreatedeclContext, _super);
    function CreatedeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CreatedeclContext.prototype.sysname = function () {
        return this.getRuleContext(0, SysnameContext);
    };
    CreatedeclContext.prototype.expressionlist = function () {
        return this.getRuleContext(0, ExpressionlistContext);
    };
    Object.defineProperty(CreatedeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_createdecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CreatedeclContext.prototype.enterRule = function (listener) {
        if (listener.enterCreatedecl) {
            listener.enterCreatedecl(this);
        }
    };
    // @Override
    CreatedeclContext.prototype.exitRule = function (listener) {
        if (listener.exitCreatedecl) {
            listener.exitCreatedecl(this);
        }
    };
    // @Override
    CreatedeclContext.prototype.accept = function (visitor) {
        if (visitor.visitCreatedecl) {
            return visitor.visitCreatedecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CreatedeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CreatedeclContext = CreatedeclContext;
var EditdeclContext = /** @class */ (function (_super) {
    __extends(EditdeclContext, _super);
    function EditdeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EditdeclContext.prototype.property = function () {
        return this.getRuleContext(0, PropertyContext);
    };
    Object.defineProperty(EditdeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_editdecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EditdeclContext.prototype.enterRule = function (listener) {
        if (listener.enterEditdecl) {
            listener.enterEditdecl(this);
        }
    };
    // @Override
    EditdeclContext.prototype.exitRule = function (listener) {
        if (listener.exitEditdecl) {
            listener.exitEditdecl(this);
        }
    };
    // @Override
    EditdeclContext.prototype.accept = function (visitor) {
        if (visitor.visitEditdecl) {
            return visitor.visitEditdecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EditdeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EditdeclContext = EditdeclContext;
var AddaliasdeclContext = /** @class */ (function (_super) {
    __extends(AddaliasdeclContext, _super);
    function AddaliasdeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AddaliasdeclContext.prototype.name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NameContext);
        }
        else {
            return this.getRuleContext(i, NameContext);
        }
    };
    AddaliasdeclContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    AddaliasdeclContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(mooParser.COMMA);
        }
        else {
            return this.getToken(mooParser.COMMA, i);
        }
    };
    Object.defineProperty(AddaliasdeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_addaliasdecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AddaliasdeclContext.prototype.enterRule = function (listener) {
        if (listener.enterAddaliasdecl) {
            listener.enterAddaliasdecl(this);
        }
    };
    // @Override
    AddaliasdeclContext.prototype.exitRule = function (listener) {
        if (listener.exitAddaliasdecl) {
            listener.exitAddaliasdecl(this);
        }
    };
    // @Override
    AddaliasdeclContext.prototype.accept = function (visitor) {
        if (visitor.visitAddaliasdecl) {
            return visitor.visitAddaliasdecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AddaliasdeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AddaliasdeclContext = AddaliasdeclContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.ifblock = function () {
        return this.tryGetRuleContext(0, IfblockContext);
    };
    StatementContext.prototype.whileblock = function () {
        return this.tryGetRuleContext(0, WhileblockContext);
    };
    StatementContext.prototype.doblock = function () {
        return this.tryGetRuleContext(0, DoblockContext);
    };
    StatementContext.prototype.forblock = function () {
        return this.tryGetRuleContext(0, ForblockContext);
    };
    StatementContext.prototype.assignblock = function () {
        return this.tryGetRuleContext(0, AssignblockContext);
    };
    StatementContext.prototype.tryblock = function () {
        return this.tryGetRuleContext(0, TryblockContext);
    };
    StatementContext.prototype.command = function () {
        return this.tryGetRuleContext(0, CommandContext);
    };
    StatementContext.prototype.SEMICOLON = function () { return this.tryGetToken(mooParser.SEMICOLON, 0); };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_statement; },
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
var IfblockContext = /** @class */ (function (_super) {
    __extends(IfblockContext, _super);
    function IfblockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfblockContext.prototype.condition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConditionContext);
        }
        else {
            return this.getRuleContext(i, ConditionContext);
        }
    };
    IfblockContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    IfblockContext.prototype.SEMICOLON = function () { return this.tryGetToken(mooParser.SEMICOLON, 0); };
    Object.defineProperty(IfblockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_ifblock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IfblockContext.prototype.enterRule = function (listener) {
        if (listener.enterIfblock) {
            listener.enterIfblock(this);
        }
    };
    // @Override
    IfblockContext.prototype.exitRule = function (listener) {
        if (listener.exitIfblock) {
            listener.exitIfblock(this);
        }
    };
    // @Override
    IfblockContext.prototype.accept = function (visitor) {
        if (visitor.visitIfblock) {
            return visitor.visitIfblock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfblockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IfblockContext = IfblockContext;
var WhileblockContext = /** @class */ (function (_super) {
    __extends(WhileblockContext, _super);
    function WhileblockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WhileblockContext.prototype.condition = function () {
        return this.getRuleContext(0, ConditionContext);
    };
    WhileblockContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(WhileblockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_whileblock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WhileblockContext.prototype.enterRule = function (listener) {
        if (listener.enterWhileblock) {
            listener.enterWhileblock(this);
        }
    };
    // @Override
    WhileblockContext.prototype.exitRule = function (listener) {
        if (listener.exitWhileblock) {
            listener.exitWhileblock(this);
        }
    };
    // @Override
    WhileblockContext.prototype.accept = function (visitor) {
        if (visitor.visitWhileblock) {
            return visitor.visitWhileblock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WhileblockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WhileblockContext = WhileblockContext;
var DoblockContext = /** @class */ (function (_super) {
    __extends(DoblockContext, _super);
    function DoblockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DoblockContext.prototype.condition = function () {
        return this.getRuleContext(0, ConditionContext);
    };
    DoblockContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(DoblockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_doblock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DoblockContext.prototype.enterRule = function (listener) {
        if (listener.enterDoblock) {
            listener.enterDoblock(this);
        }
    };
    // @Override
    DoblockContext.prototype.exitRule = function (listener) {
        if (listener.exitDoblock) {
            listener.exitDoblock(this);
        }
    };
    // @Override
    DoblockContext.prototype.accept = function (visitor) {
        if (visitor.visitDoblock) {
            return visitor.visitDoblock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DoblockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DoblockContext = DoblockContext;
var ForblockContext = /** @class */ (function (_super) {
    __extends(ForblockContext, _super);
    function ForblockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForblockContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    ForblockContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    ForblockContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(ForblockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_forblock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ForblockContext.prototype.enterRule = function (listener) {
        if (listener.enterForblock) {
            listener.enterForblock(this);
        }
    };
    // @Override
    ForblockContext.prototype.exitRule = function (listener) {
        if (listener.exitForblock) {
            listener.exitForblock(this);
        }
    };
    // @Override
    ForblockContext.prototype.accept = function (visitor) {
        if (visitor.visitForblock) {
            return visitor.visitForblock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForblockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForblockContext = ForblockContext;
var TryblockContext = /** @class */ (function (_super) {
    __extends(TryblockContext, _super);
    function TryblockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TryblockContext.prototype.property = function () {
        return this.getRuleContext(0, PropertyContext);
    };
    TryblockContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(TryblockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_tryblock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TryblockContext.prototype.enterRule = function (listener) {
        if (listener.enterTryblock) {
            listener.enterTryblock(this);
        }
    };
    // @Override
    TryblockContext.prototype.exitRule = function (listener) {
        if (listener.exitTryblock) {
            listener.exitTryblock(this);
        }
    };
    // @Override
    TryblockContext.prototype.accept = function (visitor) {
        if (visitor.visitTryblock) {
            return visitor.visitTryblock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TryblockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TryblockContext = TryblockContext;
var AssignblockContext = /** @class */ (function (_super) {
    __extends(AssignblockContext, _super);
    function AssignblockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignblockContext.prototype.property = function () {
        return this.getRuleContext(0, PropertyContext);
    };
    AssignblockContext.prototype.ASSIGN = function () { return this.getToken(mooParser.ASSIGN, 0); };
    AssignblockContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    AssignblockContext.prototype.SEMICOLON = function () { return this.getToken(mooParser.SEMICOLON, 0); };
    Object.defineProperty(AssignblockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_assignblock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignblockContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignblock) {
            listener.enterAssignblock(this);
        }
    };
    // @Override
    AssignblockContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignblock) {
            listener.exitAssignblock(this);
        }
    };
    // @Override
    AssignblockContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignblock) {
            return visitor.visitAssignblock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignblockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignblockContext = AssignblockContext;
var ConditionContext = /** @class */ (function (_super) {
    __extends(ConditionContext, _super);
    function ConditionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConditionContext.prototype.LPAREN = function () { return this.getToken(mooParser.LPAREN, 0); };
    ConditionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    ConditionContext.prototype.RPAREN = function () { return this.getToken(mooParser.RPAREN, 0); };
    ConditionContext.prototype.relop = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RelopContext);
        }
        else {
            return this.getRuleContext(i, RelopContext);
        }
    };
    Object.defineProperty(ConditionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_condition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConditionContext.prototype.enterRule = function (listener) {
        if (listener.enterCondition) {
            listener.enterCondition(this);
        }
    };
    // @Override
    ConditionContext.prototype.exitRule = function (listener) {
        if (listener.exitCondition) {
            listener.exitCondition(this);
        }
    };
    // @Override
    ConditionContext.prototype.accept = function (visitor) {
        if (visitor.visitCondition) {
            return visitor.visitCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConditionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConditionContext = ConditionContext;
var RelopContext = /** @class */ (function (_super) {
    __extends(RelopContext, _super);
    function RelopContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RelopContext.prototype.EQ = function () { return this.tryGetToken(mooParser.EQ, 0); };
    RelopContext.prototype.NEQ = function () { return this.tryGetToken(mooParser.NEQ, 0); };
    RelopContext.prototype.GT = function () { return this.tryGetToken(mooParser.GT, 0); };
    RelopContext.prototype.GTE = function () { return this.tryGetToken(mooParser.GTE, 0); };
    RelopContext.prototype.LT = function () { return this.tryGetToken(mooParser.LT, 0); };
    RelopContext.prototype.LTE = function () { return this.tryGetToken(mooParser.LTE, 0); };
    RelopContext.prototype.AND = function () { return this.tryGetToken(mooParser.AND, 0); };
    RelopContext.prototype.OR = function () { return this.tryGetToken(mooParser.OR, 0); };
    Object.defineProperty(RelopContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_relop; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RelopContext.prototype.enterRule = function (listener) {
        if (listener.enterRelop) {
            listener.enterRelop(this);
        }
    };
    // @Override
    RelopContext.prototype.exitRule = function (listener) {
        if (listener.exitRelop) {
            listener.exitRelop(this);
        }
    };
    // @Override
    RelopContext.prototype.accept = function (visitor) {
        if (visitor.visitRelop) {
            return visitor.visitRelop(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RelopContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RelopContext = RelopContext;
var ExpressionlistContext = /** @class */ (function (_super) {
    __extends(ExpressionlistContext, _super);
    function ExpressionlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionlistContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    ExpressionlistContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(mooParser.COMMA);
        }
        else {
            return this.getToken(mooParser.COMMA, i);
        }
    };
    Object.defineProperty(ExpressionlistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_expressionlist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpressionlistContext.prototype.enterRule = function (listener) {
        if (listener.enterExpressionlist) {
            listener.enterExpressionlist(this);
        }
    };
    // @Override
    ExpressionlistContext.prototype.exitRule = function (listener) {
        if (listener.exitExpressionlist) {
            listener.exitExpressionlist(this);
        }
    };
    // @Override
    ExpressionlistContext.prototype.accept = function (visitor) {
        if (visitor.visitExpressionlist) {
            return visitor.visitExpressionlist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpressionlistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionlistContext = ExpressionlistContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    ExpressionContext.prototype.PLUS = function (i) {
        if (i === undefined) {
            return this.getTokens(mooParser.PLUS);
        }
        else {
            return this.getToken(mooParser.PLUS, i);
        }
    };
    ExpressionContext.prototype.MINUS = function (i) {
        if (i === undefined) {
            return this.getTokens(mooParser.MINUS);
        }
        else {
            return this.getToken(mooParser.MINUS, i);
        }
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_expression; },
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
    TermContext.prototype.TIMES = function (i) {
        if (i === undefined) {
            return this.getTokens(mooParser.TIMES);
        }
        else {
            return this.getToken(mooParser.TIMES, i);
        }
    };
    TermContext.prototype.DIV = function (i) {
        if (i === undefined) {
            return this.getTokens(mooParser.DIV);
        }
        else {
            return this.getToken(mooParser.DIV, i);
        }
    };
    TermContext.prototype.MOD = function (i) {
        if (i === undefined) {
            return this.getTokens(mooParser.MOD);
        }
        else {
            return this.getToken(mooParser.MOD, i);
        }
    };
    Object.defineProperty(TermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_term; },
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
var FactorContext = /** @class */ (function (_super) {
    __extends(FactorContext, _super);
    function FactorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FactorContext.prototype.signedAtom = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SignedAtomContext);
        }
        else {
            return this.getRuleContext(i, SignedAtomContext);
        }
    };
    FactorContext.prototype.POW = function (i) {
        if (i === undefined) {
            return this.getTokens(mooParser.POW);
        }
        else {
            return this.getToken(mooParser.POW, i);
        }
    };
    Object.defineProperty(FactorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_factor; },
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
var SignedAtomContext = /** @class */ (function (_super) {
    __extends(SignedAtomContext, _super);
    function SignedAtomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SignedAtomContext.prototype.PLUS = function () { return this.tryGetToken(mooParser.PLUS, 0); };
    SignedAtomContext.prototype.signedAtom = function () {
        return this.tryGetRuleContext(0, SignedAtomContext);
    };
    SignedAtomContext.prototype.MINUS = function () { return this.tryGetToken(mooParser.MINUS, 0); };
    SignedAtomContext.prototype.atom = function () {
        return this.tryGetRuleContext(0, AtomContext);
    };
    Object.defineProperty(SignedAtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_signedAtom; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SignedAtomContext.prototype.enterRule = function (listener) {
        if (listener.enterSignedAtom) {
            listener.enterSignedAtom(this);
        }
    };
    // @Override
    SignedAtomContext.prototype.exitRule = function (listener) {
        if (listener.exitSignedAtom) {
            listener.exitSignedAtom(this);
        }
    };
    // @Override
    SignedAtomContext.prototype.accept = function (visitor) {
        if (visitor.visitSignedAtom) {
            return visitor.visitSignedAtom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SignedAtomContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SignedAtomContext = SignedAtomContext;
var AtomContext = /** @class */ (function (_super) {
    __extends(AtomContext, _super);
    function AtomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtomContext.prototype.stringliteral = function () {
        return this.tryGetRuleContext(0, StringliteralContext);
    };
    AtomContext.prototype.functioninvocation = function () {
        return this.tryGetRuleContext(0, FunctioninvocationContext);
    };
    AtomContext.prototype.verbinvocation = function () {
        return this.tryGetRuleContext(0, VerbinvocationContext);
    };
    AtomContext.prototype.property = function () {
        return this.tryGetRuleContext(0, PropertyContext);
    };
    AtomContext.prototype.integer = function () {
        return this.tryGetRuleContext(0, IntegerContext);
    };
    AtomContext.prototype.real = function () {
        return this.tryGetRuleContext(0, RealContext);
    };
    AtomContext.prototype.list = function () {
        return this.tryGetRuleContext(0, ListContext);
    };
    AtomContext.prototype.objref = function () {
        return this.tryGetRuleContext(0, ObjrefContext);
    };
    AtomContext.prototype.LPAREN = function () { return this.tryGetToken(mooParser.LPAREN, 0); };
    AtomContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    AtomContext.prototype.RPAREN = function () { return this.tryGetToken(mooParser.RPAREN, 0); };
    Object.defineProperty(AtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_atom; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AtomContext.prototype.enterRule = function (listener) {
        if (listener.enterAtom) {
            listener.enterAtom(this);
        }
    };
    // @Override
    AtomContext.prototype.exitRule = function (listener) {
        if (listener.exitAtom) {
            listener.exitAtom(this);
        }
    };
    // @Override
    AtomContext.prototype.accept = function (visitor) {
        if (visitor.visitAtom) {
            return visitor.visitAtom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtomContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AtomContext = AtomContext;
var ObjrefContext = /** @class */ (function (_super) {
    __extends(ObjrefContext, _super);
    function ObjrefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjrefContext.prototype.OBJREF = function () { return this.getToken(mooParser.OBJREF, 0); };
    Object.defineProperty(ObjrefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_objref; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjrefContext.prototype.enterRule = function (listener) {
        if (listener.enterObjref) {
            listener.enterObjref(this);
        }
    };
    // @Override
    ObjrefContext.prototype.exitRule = function (listener) {
        if (listener.exitObjref) {
            listener.exitObjref(this);
        }
    };
    // @Override
    ObjrefContext.prototype.accept = function (visitor) {
        if (visitor.visitObjref) {
            return visitor.visitObjref(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjrefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjrefContext = ObjrefContext;
var FunctioninvocationContext = /** @class */ (function (_super) {
    __extends(FunctioninvocationContext, _super);
    function FunctioninvocationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctioninvocationContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    FunctioninvocationContext.prototype.LPAREN = function () { return this.getToken(mooParser.LPAREN, 0); };
    FunctioninvocationContext.prototype.expressionlist = function () {
        return this.getRuleContext(0, ExpressionlistContext);
    };
    FunctioninvocationContext.prototype.RPAREN = function () { return this.getToken(mooParser.RPAREN, 0); };
    Object.defineProperty(FunctioninvocationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_functioninvocation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctioninvocationContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctioninvocation) {
            listener.enterFunctioninvocation(this);
        }
    };
    // @Override
    FunctioninvocationContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctioninvocation) {
            listener.exitFunctioninvocation(this);
        }
    };
    // @Override
    FunctioninvocationContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctioninvocation) {
            return visitor.visitFunctioninvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctioninvocationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctioninvocationContext = FunctioninvocationContext;
var CommandContext = /** @class */ (function (_super) {
    __extends(CommandContext, _super);
    function CommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommandContext.prototype.verbinvocation = function () {
        return this.tryGetRuleContext(0, VerbinvocationContext);
    };
    CommandContext.prototype.returncommand = function () {
        return this.tryGetRuleContext(0, ReturncommandContext);
    };
    Object.defineProperty(CommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_command; },
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
var ReturncommandContext = /** @class */ (function (_super) {
    __extends(ReturncommandContext, _super);
    function ReturncommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReturncommandContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ReturncommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_returncommand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReturncommandContext.prototype.enterRule = function (listener) {
        if (listener.enterReturncommand) {
            listener.enterReturncommand(this);
        }
    };
    // @Override
    ReturncommandContext.prototype.exitRule = function (listener) {
        if (listener.exitReturncommand) {
            listener.exitReturncommand(this);
        }
    };
    // @Override
    ReturncommandContext.prototype.accept = function (visitor) {
        if (visitor.visitReturncommand) {
            return visitor.visitReturncommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReturncommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReturncommandContext = ReturncommandContext;
var VerbinvocationContext = /** @class */ (function (_super) {
    __extends(VerbinvocationContext, _super);
    function VerbinvocationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VerbinvocationContext.prototype.property = function () {
        return this.getRuleContext(0, PropertyContext);
    };
    VerbinvocationContext.prototype.verb = function () {
        return this.getRuleContext(0, VerbContext);
    };
    Object.defineProperty(VerbinvocationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_verbinvocation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VerbinvocationContext.prototype.enterRule = function (listener) {
        if (listener.enterVerbinvocation) {
            listener.enterVerbinvocation(this);
        }
    };
    // @Override
    VerbinvocationContext.prototype.exitRule = function (listener) {
        if (listener.exitVerbinvocation) {
            listener.exitVerbinvocation(this);
        }
    };
    // @Override
    VerbinvocationContext.prototype.accept = function (visitor) {
        if (visitor.visitVerbinvocation) {
            return visitor.visitVerbinvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VerbinvocationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VerbinvocationContext = VerbinvocationContext;
var VerbContext = /** @class */ (function (_super) {
    __extends(VerbContext, _super);
    function VerbContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VerbContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    VerbContext.prototype.LPAREN = function () { return this.tryGetToken(mooParser.LPAREN, 0); };
    VerbContext.prototype.RPAREN = function () { return this.tryGetToken(mooParser.RPAREN, 0); };
    VerbContext.prototype.expressionlist = function () {
        return this.tryGetRuleContext(0, ExpressionlistContext);
    };
    Object.defineProperty(VerbContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_verb; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VerbContext.prototype.enterRule = function (listener) {
        if (listener.enterVerb) {
            listener.enterVerb(this);
        }
    };
    // @Override
    VerbContext.prototype.exitRule = function (listener) {
        if (listener.exitVerb) {
            listener.exitVerb(this);
        }
    };
    // @Override
    VerbContext.prototype.accept = function (visitor) {
        if (visitor.visitVerb) {
            return visitor.visitVerb(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VerbContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VerbContext = VerbContext;
var PropertyContext = /** @class */ (function (_super) {
    __extends(PropertyContext, _super);
    function PropertyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropertyContext.prototype.propertyname = function () {
        return this.getRuleContext(0, PropertynameContext);
    };
    PropertyContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    PropertyContext.prototype.name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NameContext);
        }
        else {
            return this.getRuleContext(i, NameContext);
        }
    };
    Object.defineProperty(PropertyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_property; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PropertyContext.prototype.enterRule = function (listener) {
        if (listener.enterProperty) {
            listener.enterProperty(this);
        }
    };
    // @Override
    PropertyContext.prototype.exitRule = function (listener) {
        if (listener.exitProperty) {
            listener.exitProperty(this);
        }
    };
    // @Override
    PropertyContext.prototype.accept = function (visitor) {
        if (visitor.visitProperty) {
            return visitor.visitProperty(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertyContext = PropertyContext;
var PropertynameContext = /** @class */ (function (_super) {
    __extends(PropertynameContext, _super);
    function PropertynameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropertynameContext.prototype.name = function () {
        return this.tryGetRuleContext(0, NameContext);
    };
    PropertynameContext.prototype.stringliteral = function () {
        return this.tryGetRuleContext(0, StringliteralContext);
    };
    Object.defineProperty(PropertynameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_propertyname; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PropertynameContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertyname) {
            listener.enterPropertyname(this);
        }
    };
    // @Override
    PropertynameContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertyname) {
            listener.exitPropertyname(this);
        }
    };
    // @Override
    PropertynameContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertyname) {
            return visitor.visitPropertyname(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertynameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertynameContext = PropertynameContext;
var ListContext = /** @class */ (function (_super) {
    __extends(ListContext, _super);
    function ListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ListContext.prototype.expressionlist = function () {
        return this.tryGetRuleContext(0, ExpressionlistContext);
    };
    Object.defineProperty(ListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ListContext.prototype.enterRule = function (listener) {
        if (listener.enterList) {
            listener.enterList(this);
        }
    };
    // @Override
    ListContext.prototype.exitRule = function (listener) {
        if (listener.exitList) {
            listener.exitList(this);
        }
    };
    // @Override
    ListContext.prototype.accept = function (visitor) {
        if (visitor.visitList) {
            return visitor.visitList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ListContext = ListContext;
var StringliteralContext = /** @class */ (function (_super) {
    __extends(StringliteralContext, _super);
    function StringliteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringliteralContext.prototype.STRINGLITERAL = function () { return this.getToken(mooParser.STRINGLITERAL, 0); };
    Object.defineProperty(StringliteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_stringliteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StringliteralContext.prototype.enterRule = function (listener) {
        if (listener.enterStringliteral) {
            listener.enterStringliteral(this);
        }
    };
    // @Override
    StringliteralContext.prototype.exitRule = function (listener) {
        if (listener.exitStringliteral) {
            listener.exitStringliteral(this);
        }
    };
    // @Override
    StringliteralContext.prototype.accept = function (visitor) {
        if (visitor.visitStringliteral) {
            return visitor.visitStringliteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StringliteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StringliteralContext = StringliteralContext;
var IntegerContext = /** @class */ (function (_super) {
    __extends(IntegerContext, _super);
    function IntegerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntegerContext.prototype.INTEGER = function () { return this.getToken(mooParser.INTEGER, 0); };
    Object.defineProperty(IntegerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_integer; },
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
var RealContext = /** @class */ (function (_super) {
    __extends(RealContext, _super);
    function RealContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RealContext.prototype.REAL = function () { return this.getToken(mooParser.REAL, 0); };
    Object.defineProperty(RealContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_real; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RealContext.prototype.enterRule = function (listener) {
        if (listener.enterReal) {
            listener.enterReal(this);
        }
    };
    // @Override
    RealContext.prototype.exitRule = function (listener) {
        if (listener.exitReal) {
            listener.exitReal(this);
        }
    };
    // @Override
    RealContext.prototype.accept = function (visitor) {
        if (visitor.visitReal) {
            return visitor.visitReal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RealContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RealContext = RealContext;
var NameContext = /** @class */ (function (_super) {
    __extends(NameContext, _super);
    function NameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NameContext.prototype.username = function () {
        return this.tryGetRuleContext(0, UsernameContext);
    };
    NameContext.prototype.sysname = function () {
        return this.tryGetRuleContext(0, SysnameContext);
    };
    Object.defineProperty(NameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_name; },
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
var SysnameContext = /** @class */ (function (_super) {
    __extends(SysnameContext, _super);
    function SysnameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SysnameContext.prototype.DOLLAR = function () { return this.getToken(mooParser.DOLLAR, 0); };
    SysnameContext.prototype.STRING = function () { return this.tryGetToken(mooParser.STRING, 0); };
    Object.defineProperty(SysnameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_sysname; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SysnameContext.prototype.enterRule = function (listener) {
        if (listener.enterSysname) {
            listener.enterSysname(this);
        }
    };
    // @Override
    SysnameContext.prototype.exitRule = function (listener) {
        if (listener.exitSysname) {
            listener.exitSysname(this);
        }
    };
    // @Override
    SysnameContext.prototype.accept = function (visitor) {
        if (visitor.visitSysname) {
            return visitor.visitSysname(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SysnameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SysnameContext = SysnameContext;
var UsernameContext = /** @class */ (function (_super) {
    __extends(UsernameContext, _super);
    function UsernameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UsernameContext.prototype.STRING = function () { return this.getToken(mooParser.STRING, 0); };
    Object.defineProperty(UsernameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_username; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UsernameContext.prototype.enterRule = function (listener) {
        if (listener.enterUsername) {
            listener.enterUsername(this);
        }
    };
    // @Override
    UsernameContext.prototype.exitRule = function (listener) {
        if (listener.exitUsername) {
            listener.exitUsername(this);
        }
    };
    // @Override
    UsernameContext.prototype.accept = function (visitor) {
        if (visitor.visitUsername) {
            return visitor.visitUsername(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UsernameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UsernameContext = UsernameContext;
var PermissionsContext = /** @class */ (function (_super) {
    __extends(PermissionsContext, _super);
    function PermissionsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PermissionsContext.prototype.PERMISSIONS = function () { return this.getToken(mooParser.PERMISSIONS, 0); };
    Object.defineProperty(PermissionsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mooParser.RULE_permissions; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PermissionsContext.prototype.enterRule = function (listener) {
        if (listener.enterPermissions) {
            listener.enterPermissions(this);
        }
    };
    // @Override
    PermissionsContext.prototype.exitRule = function (listener) {
        if (listener.exitPermissions) {
            listener.exitPermissions(this);
        }
    };
    // @Override
    PermissionsContext.prototype.accept = function (visitor) {
        if (visitor.visitPermissions) {
            return visitor.visitPermissions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PermissionsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PermissionsContext = PermissionsContext;
