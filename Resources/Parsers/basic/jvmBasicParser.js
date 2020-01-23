"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/basic/jvmBasic.g4 by ANTLR 4.7.3-SNAPSHOT
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
var jvmBasicParser = /** @class */ (function (_super) {
    __extends(jvmBasicParser, _super);
    function jvmBasicParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(jvmBasicParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(jvmBasicParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return jvmBasicParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(jvmBasicParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "jvmBasic.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(jvmBasicParser.prototype, "ruleNames", {
        // @Override
        get: function () { return jvmBasicParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(jvmBasicParser.prototype, "serializedATN", {
        // @Override
        get: function () { return jvmBasicParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    jvmBasicParser.prototype.prog = function () {
        var _localctx = new ProgContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, jvmBasicParser.RULE_prog);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 203;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 202;
                            this.line();
                        }
                    }
                    this.state = 205;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === jvmBasicParser.NUMBER);
                this.state = 207;
                this.match(jvmBasicParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.line = function () {
        var _localctx = new LineContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, jvmBasicParser.RULE_line);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 209;
                    this.linenumber();
                    this.state = 221;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                        case 1:
                            {
                                {
                                    this.state = 210;
                                    this.amprstmt();
                                    this.state = 217;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === jvmBasicParser.COLON) {
                                        {
                                            {
                                                this.state = 211;
                                                this.match(jvmBasicParser.COLON);
                                                this.state = 213;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << jvmBasicParser.RETURN) | (1 << jvmBasicParser.PRINT) | (1 << jvmBasicParser.GOTO) | (1 << jvmBasicParser.GOSUB) | (1 << jvmBasicParser.IF) | (1 << jvmBasicParser.NEXT) | (1 << jvmBasicParser.REM) | (1 << jvmBasicParser.CLEAR) | (1 << jvmBasicParser.LIST) | (1 << jvmBasicParser.RUN) | (1 << jvmBasicParser.END) | (1 << jvmBasicParser.LET))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (jvmBasicParser.FOR - 33)) | (1 << (jvmBasicParser.INPUT - 33)) | (1 << (jvmBasicParser.DIM - 33)) | (1 << (jvmBasicParser.TEXT - 33)) | (1 << (jvmBasicParser.HGR - 33)) | (1 << (jvmBasicParser.HGR2 - 33)) | (1 << (jvmBasicParser.CALL - 33)) | (1 << (jvmBasicParser.HPLOT - 33)) | (1 << (jvmBasicParser.VPLOT - 33)) | (1 << (jvmBasicParser.PRNUMBER - 33)) | (1 << (jvmBasicParser.INNUMBER - 33)) | (1 << (jvmBasicParser.VTAB - 33)) | (1 << (jvmBasicParser.HTAB - 33)) | (1 << (jvmBasicParser.HOME - 33)) | (1 << (jvmBasicParser.ON - 33)) | (1 << (jvmBasicParser.PLOT - 33)) | (1 << (jvmBasicParser.POKE - 33)) | (1 << (jvmBasicParser.STOP - 33)) | (1 << (jvmBasicParser.HIMEM - 33)) | (1 << (jvmBasicParser.LOMEM - 33)) | (1 << (jvmBasicParser.FLASH - 33)) | (1 << (jvmBasicParser.INVERSE - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (jvmBasicParser.NORMAL - 65)) | (1 << (jvmBasicParser.ONERR - 65)) | (1 << (jvmBasicParser.TRACE - 65)) | (1 << (jvmBasicParser.NOTRACE - 65)) | (1 << (jvmBasicParser.DATA - 65)) | (1 << (jvmBasicParser.WAIT - 65)) | (1 << (jvmBasicParser.READ - 65)) | (1 << (jvmBasicParser.XDRAW - 65)) | (1 << (jvmBasicParser.DRAW - 65)) | (1 << (jvmBasicParser.DEF - 65)) | (1 << (jvmBasicParser.TAB - 65)) | (1 << (jvmBasicParser.SPEED - 65)) | (1 << (jvmBasicParser.ROT - 65)) | (1 << (jvmBasicParser.SCALE - 65)) | (1 << (jvmBasicParser.COLOR - 65)) | (1 << (jvmBasicParser.HCOLOR - 65)) | (1 << (jvmBasicParser.HLIN - 65)) | (1 << (jvmBasicParser.VLIN - 65)) | (1 << (jvmBasicParser.POP - 65)) | (1 << (jvmBasicParser.SHLOAD - 65)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (jvmBasicParser.STORE - 104)) | (1 << (jvmBasicParser.RECALL - 104)) | (1 << (jvmBasicParser.GET - 104)) | (1 << (jvmBasicParser.AMPERSAND - 104)) | (1 << (jvmBasicParser.GR - 104)) | (1 << (jvmBasicParser.RESTORE - 104)) | (1 << (jvmBasicParser.SAVE - 104)) | (1 << (jvmBasicParser.LOAD - 104)) | (1 << (jvmBasicParser.QUESTION - 104)) | (1 << (jvmBasicParser.INCLUDE - 104)) | (1 << (jvmBasicParser.CLS - 104)) | (1 << (jvmBasicParser.COMMENT - 104)) | (1 << (jvmBasicParser.LETTERS - 104)))) !== 0)) {
                                                    {
                                                        this.state = 212;
                                                        this.amprstmt();
                                                    }
                                                }
                                            }
                                        }
                                        this.state = 219;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            break;
                        case 2:
                            {
                                this.state = 220;
                                _la = this._input.LA(1);
                                if (!(_la === jvmBasicParser.REM || _la === jvmBasicParser.COMMENT)) {
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
    jvmBasicParser.prototype.amperoper = function () {
        var _localctx = new AmperoperContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, jvmBasicParser.RULE_amperoper);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 223;
                this.match(jvmBasicParser.AMPERSAND);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.linenumber = function () {
        var _localctx = new LinenumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, jvmBasicParser.RULE_linenumber);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 225;
                this.match(jvmBasicParser.NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.amprstmt = function () {
        var _localctx = new AmprstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, jvmBasicParser.RULE_amprstmt);
        var _la;
        try {
            this.state = 232;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case jvmBasicParser.RETURN:
                case jvmBasicParser.PRINT:
                case jvmBasicParser.GOTO:
                case jvmBasicParser.GOSUB:
                case jvmBasicParser.IF:
                case jvmBasicParser.NEXT:
                case jvmBasicParser.CLEAR:
                case jvmBasicParser.LIST:
                case jvmBasicParser.RUN:
                case jvmBasicParser.END:
                case jvmBasicParser.LET:
                case jvmBasicParser.FOR:
                case jvmBasicParser.INPUT:
                case jvmBasicParser.DIM:
                case jvmBasicParser.TEXT:
                case jvmBasicParser.HGR:
                case jvmBasicParser.HGR2:
                case jvmBasicParser.CALL:
                case jvmBasicParser.HPLOT:
                case jvmBasicParser.VPLOT:
                case jvmBasicParser.PRNUMBER:
                case jvmBasicParser.INNUMBER:
                case jvmBasicParser.VTAB:
                case jvmBasicParser.HTAB:
                case jvmBasicParser.HOME:
                case jvmBasicParser.ON:
                case jvmBasicParser.PLOT:
                case jvmBasicParser.POKE:
                case jvmBasicParser.STOP:
                case jvmBasicParser.HIMEM:
                case jvmBasicParser.LOMEM:
                case jvmBasicParser.FLASH:
                case jvmBasicParser.INVERSE:
                case jvmBasicParser.NORMAL:
                case jvmBasicParser.ONERR:
                case jvmBasicParser.TRACE:
                case jvmBasicParser.NOTRACE:
                case jvmBasicParser.DATA:
                case jvmBasicParser.WAIT:
                case jvmBasicParser.READ:
                case jvmBasicParser.XDRAW:
                case jvmBasicParser.DRAW:
                case jvmBasicParser.DEF:
                case jvmBasicParser.TAB:
                case jvmBasicParser.SPEED:
                case jvmBasicParser.ROT:
                case jvmBasicParser.SCALE:
                case jvmBasicParser.COLOR:
                case jvmBasicParser.HCOLOR:
                case jvmBasicParser.HLIN:
                case jvmBasicParser.VLIN:
                case jvmBasicParser.POP:
                case jvmBasicParser.SHLOAD:
                case jvmBasicParser.STORE:
                case jvmBasicParser.RECALL:
                case jvmBasicParser.GET:
                case jvmBasicParser.AMPERSAND:
                case jvmBasicParser.GR:
                case jvmBasicParser.RESTORE:
                case jvmBasicParser.SAVE:
                case jvmBasicParser.LOAD:
                case jvmBasicParser.QUESTION:
                case jvmBasicParser.INCLUDE:
                case jvmBasicParser.CLS:
                case jvmBasicParser.LETTERS:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 228;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 227;
                                        this.amperoper();
                                    }
                                    break;
                            }
                            this.state = 230;
                            this.statement();
                        }
                    }
                    break;
                case jvmBasicParser.REM:
                case jvmBasicParser.COMMENT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 231;
                        _la = this._input.LA(1);
                        if (!(_la === jvmBasicParser.REM || _la === jvmBasicParser.COMMENT)) {
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
    jvmBasicParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, jvmBasicParser.RULE_statement);
        var _la;
        try {
            this.state = 283;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 234;
                        _la = this._input.LA(1);
                        if (!(_la === jvmBasicParser.CLEAR || _la === jvmBasicParser.RUN || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (jvmBasicParser.TEXT - 41)) | (1 << (jvmBasicParser.HGR - 41)) | (1 << (jvmBasicParser.HGR2 - 41)) | (1 << (jvmBasicParser.HOME - 41)) | (1 << (jvmBasicParser.STOP - 41)) | (1 << (jvmBasicParser.FLASH - 41)) | (1 << (jvmBasicParser.INVERSE - 41)) | (1 << (jvmBasicParser.NORMAL - 41)) | (1 << (jvmBasicParser.TRACE - 41)) | (1 << (jvmBasicParser.NOTRACE - 41)))) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (jvmBasicParser.SHLOAD - 94)) | (1 << (jvmBasicParser.GR - 94)) | (1 << (jvmBasicParser.SAVE - 94)) | (1 << (jvmBasicParser.LOAD - 94)) | (1 << (jvmBasicParser.CLS - 94)))) !== 0))) {
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
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 235;
                        this.endstmt();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 236;
                        this.returnstmt();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 237;
                        this.restorestmt();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 238;
                        this.amptstmt();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 239;
                        this.popstmt();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 240;
                        this.liststmt();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 241;
                        this.storestmt();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 242;
                        this.getstmt();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 243;
                        this.recallstmt();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 244;
                        this.nextstmt();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 245;
                        this.instmt();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 246;
                        this.prstmt();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 247;
                        this.onerrstmt();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 248;
                        this.hlinstmt();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 249;
                        this.vlinstmt();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 250;
                        this.colorstmt();
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 251;
                        this.speedstmt();
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 252;
                        this.scalestmt();
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 253;
                        this.rotstmt();
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 254;
                        this.hcolorstmt();
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 255;
                        this.himemstmt();
                    }
                    break;
                case 23:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 256;
                        this.lomemstmt();
                    }
                    break;
                case 24:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 257;
                        this.printstmt1();
                    }
                    break;
                case 25:
                    this.enterOuterAlt(_localctx, 25);
                    {
                        this.state = 258;
                        this.pokestmt();
                    }
                    break;
                case 26:
                    this.enterOuterAlt(_localctx, 26);
                    {
                        this.state = 259;
                        this.plotstmt();
                    }
                    break;
                case 27:
                    this.enterOuterAlt(_localctx, 27);
                    {
                        this.state = 260;
                        this.ongotostmt();
                    }
                    break;
                case 28:
                    this.enterOuterAlt(_localctx, 28);
                    {
                        this.state = 261;
                        this.ongosubstmt();
                    }
                    break;
                case 29:
                    this.enterOuterAlt(_localctx, 29);
                    {
                        this.state = 262;
                        this.ifstmt();
                    }
                    break;
                case 30:
                    this.enterOuterAlt(_localctx, 30);
                    {
                        this.state = 263;
                        this.forstmt1();
                    }
                    break;
                case 31:
                    this.enterOuterAlt(_localctx, 31);
                    {
                        this.state = 264;
                        this.forstmt2();
                    }
                    break;
                case 32:
                    this.enterOuterAlt(_localctx, 32);
                    {
                        this.state = 265;
                        this.inputstmt();
                    }
                    break;
                case 33:
                    this.enterOuterAlt(_localctx, 33);
                    {
                        this.state = 266;
                        this.tabstmt();
                    }
                    break;
                case 34:
                    this.enterOuterAlt(_localctx, 34);
                    {
                        this.state = 267;
                        this.dimstmt();
                    }
                    break;
                case 35:
                    this.enterOuterAlt(_localctx, 35);
                    {
                        this.state = 268;
                        this.gotostmt();
                    }
                    break;
                case 36:
                    this.enterOuterAlt(_localctx, 36);
                    {
                        this.state = 269;
                        this.gosubstmt();
                    }
                    break;
                case 37:
                    this.enterOuterAlt(_localctx, 37);
                    {
                        this.state = 270;
                        this.callstmt();
                    }
                    break;
                case 38:
                    this.enterOuterAlt(_localctx, 38);
                    {
                        this.state = 271;
                        this.readstmt();
                    }
                    break;
                case 39:
                    this.enterOuterAlt(_localctx, 39);
                    {
                        this.state = 272;
                        this.hplotstmt();
                    }
                    break;
                case 40:
                    this.enterOuterAlt(_localctx, 40);
                    {
                        this.state = 273;
                        this.vplotstmt();
                    }
                    break;
                case 41:
                    this.enterOuterAlt(_localctx, 41);
                    {
                        this.state = 274;
                        this.vtabstmnt();
                    }
                    break;
                case 42:
                    this.enterOuterAlt(_localctx, 42);
                    {
                        this.state = 275;
                        this.htabstmnt();
                    }
                    break;
                case 43:
                    this.enterOuterAlt(_localctx, 43);
                    {
                        this.state = 276;
                        this.waitstmt();
                    }
                    break;
                case 44:
                    this.enterOuterAlt(_localctx, 44);
                    {
                        this.state = 277;
                        this.datastmt();
                    }
                    break;
                case 45:
                    this.enterOuterAlt(_localctx, 45);
                    {
                        this.state = 278;
                        this.xdrawstmt();
                    }
                    break;
                case 46:
                    this.enterOuterAlt(_localctx, 46);
                    {
                        this.state = 279;
                        this.drawstmt();
                    }
                    break;
                case 47:
                    this.enterOuterAlt(_localctx, 47);
                    {
                        this.state = 280;
                        this.defstmt();
                    }
                    break;
                case 48:
                    this.enterOuterAlt(_localctx, 48);
                    {
                        this.state = 281;
                        this.letstmt();
                    }
                    break;
                case 49:
                    this.enterOuterAlt(_localctx, 49);
                    {
                        this.state = 282;
                        this.includestmt();
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
    jvmBasicParser.prototype.vardecl = function () {
        var _localctx = new VardeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, jvmBasicParser.RULE_vardecl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 285;
                this.var();
                this.state = 292;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jvmBasicParser.LPAREN) {
                    {
                        {
                            this.state = 286;
                            this.match(jvmBasicParser.LPAREN);
                            this.state = 287;
                            this.exprlist();
                            this.state = 288;
                            this.match(jvmBasicParser.RPAREN);
                        }
                    }
                    this.state = 294;
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
    jvmBasicParser.prototype.printstmt1 = function () {
        var _localctx = new Printstmt1Context(this._ctx, this.state);
        this.enterRule(_localctx, 14, jvmBasicParser.RULE_printstmt1);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 295;
                _la = this._input.LA(1);
                if (!(_la === jvmBasicParser.PRINT || _la === jvmBasicParser.QUESTION)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 297;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                    case 1:
                        {
                            this.state = 296;
                            this.printlist();
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
    jvmBasicParser.prototype.printlist = function () {
        var _localctx = new PrintlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, jvmBasicParser.RULE_printlist);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 299;
                this.expression();
                this.state = 306;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jvmBasicParser.COMMA || _la === jvmBasicParser.SEMICOLON) {
                    {
                        {
                            this.state = 300;
                            _la = this._input.LA(1);
                            if (!(_la === jvmBasicParser.COMMA || _la === jvmBasicParser.SEMICOLON)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 302;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 301;
                                        this.expression();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 308;
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
    jvmBasicParser.prototype.getstmt = function () {
        var _localctx = new GetstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, jvmBasicParser.RULE_getstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 309;
                this.match(jvmBasicParser.GET);
                this.state = 310;
                this.exprlist();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.letstmt = function () {
        var _localctx = new LetstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, jvmBasicParser.RULE_letstmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 313;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jvmBasicParser.LET) {
                    {
                        this.state = 312;
                        this.match(jvmBasicParser.LET);
                    }
                }
                this.state = 315;
                this.variableassignment();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.variableassignment = function () {
        var _localctx = new VariableassignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, jvmBasicParser.RULE_variableassignment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 317;
                this.vardecl();
                this.state = 318;
                this.match(jvmBasicParser.EQ);
                this.state = 319;
                this.exprlist();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.relop = function () {
        var _localctx = new RelopContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, jvmBasicParser.RULE_relop);
        try {
            this.state = 335;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 321;
                            this.match(jvmBasicParser.GTE);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 322;
                            this.match(jvmBasicParser.GT);
                            this.state = 323;
                            this.match(jvmBasicParser.EQ);
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        {
                            this.state = 324;
                            this.match(jvmBasicParser.EQ);
                            this.state = 325;
                            this.match(jvmBasicParser.GT);
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 326;
                        this.match(jvmBasicParser.LTE);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        {
                            this.state = 327;
                            this.match(jvmBasicParser.LT);
                            this.state = 328;
                            this.match(jvmBasicParser.EQ);
                        }
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        {
                            this.state = 329;
                            this.match(jvmBasicParser.EQ);
                            this.state = 330;
                            this.match(jvmBasicParser.LT);
                        }
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 331;
                        this.neq();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 332;
                        this.match(jvmBasicParser.EQ);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 333;
                        this.match(jvmBasicParser.GT);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 334;
                        this.match(jvmBasicParser.LT);
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
    jvmBasicParser.prototype.neq = function () {
        var _localctx = new NeqContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, jvmBasicParser.RULE_neq);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 337;
                this.match(jvmBasicParser.LT);
                this.state = 338;
                this.match(jvmBasicParser.GT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.ifstmt = function () {
        var _localctx = new IfstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, jvmBasicParser.RULE_ifstmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 340;
                this.match(jvmBasicParser.IF);
                this.state = 341;
                this.expression();
                this.state = 343;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jvmBasicParser.THEN) {
                    {
                        this.state = 342;
                        this.match(jvmBasicParser.THEN);
                    }
                }
                this.state = 347;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case jvmBasicParser.RETURN:
                    case jvmBasicParser.PRINT:
                    case jvmBasicParser.GOTO:
                    case jvmBasicParser.GOSUB:
                    case jvmBasicParser.IF:
                    case jvmBasicParser.NEXT:
                    case jvmBasicParser.CLEAR:
                    case jvmBasicParser.LIST:
                    case jvmBasicParser.RUN:
                    case jvmBasicParser.END:
                    case jvmBasicParser.LET:
                    case jvmBasicParser.FOR:
                    case jvmBasicParser.INPUT:
                    case jvmBasicParser.DIM:
                    case jvmBasicParser.TEXT:
                    case jvmBasicParser.HGR:
                    case jvmBasicParser.HGR2:
                    case jvmBasicParser.CALL:
                    case jvmBasicParser.HPLOT:
                    case jvmBasicParser.VPLOT:
                    case jvmBasicParser.PRNUMBER:
                    case jvmBasicParser.INNUMBER:
                    case jvmBasicParser.VTAB:
                    case jvmBasicParser.HTAB:
                    case jvmBasicParser.HOME:
                    case jvmBasicParser.ON:
                    case jvmBasicParser.PLOT:
                    case jvmBasicParser.POKE:
                    case jvmBasicParser.STOP:
                    case jvmBasicParser.HIMEM:
                    case jvmBasicParser.LOMEM:
                    case jvmBasicParser.FLASH:
                    case jvmBasicParser.INVERSE:
                    case jvmBasicParser.NORMAL:
                    case jvmBasicParser.ONERR:
                    case jvmBasicParser.TRACE:
                    case jvmBasicParser.NOTRACE:
                    case jvmBasicParser.DATA:
                    case jvmBasicParser.WAIT:
                    case jvmBasicParser.READ:
                    case jvmBasicParser.XDRAW:
                    case jvmBasicParser.DRAW:
                    case jvmBasicParser.DEF:
                    case jvmBasicParser.TAB:
                    case jvmBasicParser.SPEED:
                    case jvmBasicParser.ROT:
                    case jvmBasicParser.SCALE:
                    case jvmBasicParser.COLOR:
                    case jvmBasicParser.HCOLOR:
                    case jvmBasicParser.HLIN:
                    case jvmBasicParser.VLIN:
                    case jvmBasicParser.POP:
                    case jvmBasicParser.SHLOAD:
                    case jvmBasicParser.STORE:
                    case jvmBasicParser.RECALL:
                    case jvmBasicParser.GET:
                    case jvmBasicParser.AMPERSAND:
                    case jvmBasicParser.GR:
                    case jvmBasicParser.RESTORE:
                    case jvmBasicParser.SAVE:
                    case jvmBasicParser.LOAD:
                    case jvmBasicParser.QUESTION:
                    case jvmBasicParser.INCLUDE:
                    case jvmBasicParser.CLS:
                    case jvmBasicParser.LETTERS:
                        {
                            this.state = 345;
                            this.statement();
                        }
                        break;
                    case jvmBasicParser.NUMBER:
                        {
                            this.state = 346;
                            this.linenumber();
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
    jvmBasicParser.prototype.forstmt1 = function () {
        var _localctx = new Forstmt1Context(this._ctx, this.state);
        this.enterRule(_localctx, 30, jvmBasicParser.RULE_forstmt1);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 349;
                this.match(jvmBasicParser.FOR);
                this.state = 350;
                this.vardecl();
                this.state = 351;
                this.match(jvmBasicParser.EQ);
                this.state = 352;
                this.expression();
                this.state = 353;
                this.match(jvmBasicParser.TO);
                this.state = 354;
                this.expression();
                this.state = 357;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jvmBasicParser.STEP) {
                    {
                        this.state = 355;
                        this.match(jvmBasicParser.STEP);
                        this.state = 356;
                        this.expression();
                    }
                }
                this.state = 364;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                    case 1:
                        {
                            this.state = 359;
                            this.statement();
                            this.state = 360;
                            this.match(jvmBasicParser.NEXT);
                            this.state = 362;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === jvmBasicParser.LETTERS) {
                                {
                                    this.state = 361;
                                    this.vardecl();
                                }
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
    jvmBasicParser.prototype.forstmt2 = function () {
        var _localctx = new Forstmt2Context(this._ctx, this.state);
        this.enterRule(_localctx, 32, jvmBasicParser.RULE_forstmt2);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 366;
                this.match(jvmBasicParser.FOR);
                this.state = 367;
                this.vardecl();
                this.state = 368;
                this.match(jvmBasicParser.EQ);
                this.state = 369;
                this.expression();
                this.state = 370;
                this.match(jvmBasicParser.TO);
                this.state = 371;
                this.expression();
                this.state = 374;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jvmBasicParser.STEP) {
                    {
                        this.state = 372;
                        this.match(jvmBasicParser.STEP);
                        this.state = 373;
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
    jvmBasicParser.prototype.nextstmt = function () {
        var _localctx = new NextstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, jvmBasicParser.RULE_nextstmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 376;
                this.match(jvmBasicParser.NEXT);
                this.state = 385;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jvmBasicParser.LETTERS) {
                    {
                        this.state = 377;
                        this.vardecl();
                        this.state = 382;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === jvmBasicParser.COMMA) {
                            {
                                {
                                    this.state = 378;
                                    this.match(jvmBasicParser.COMMA);
                                    this.state = 379;
                                    this.vardecl();
                                }
                            }
                            this.state = 384;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
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
    jvmBasicParser.prototype.inputstmt = function () {
        var _localctx = new InputstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, jvmBasicParser.RULE_inputstmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 387;
                this.match(jvmBasicParser.INPUT);
                this.state = 390;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jvmBasicParser.STRINGLITERAL) {
                    {
                        this.state = 388;
                        this.match(jvmBasicParser.STRINGLITERAL);
                        this.state = 389;
                        _la = this._input.LA(1);
                        if (!(_la === jvmBasicParser.COMMA || _la === jvmBasicParser.SEMICOLON)) {
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
                this.state = 392;
                this.varlist();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.readstmt = function () {
        var _localctx = new ReadstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, jvmBasicParser.RULE_readstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 394;
                this.match(jvmBasicParser.READ);
                this.state = 395;
                this.varlist();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.dimstmt = function () {
        var _localctx = new DimstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, jvmBasicParser.RULE_dimstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 397;
                this.match(jvmBasicParser.DIM);
                this.state = 398;
                this.varlist();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.gotostmt = function () {
        var _localctx = new GotostmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, jvmBasicParser.RULE_gotostmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 400;
                this.match(jvmBasicParser.GOTO);
                this.state = 401;
                this.linenumber();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.gosubstmt = function () {
        var _localctx = new GosubstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, jvmBasicParser.RULE_gosubstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 403;
                this.match(jvmBasicParser.GOSUB);
                this.state = 404;
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
    jvmBasicParser.prototype.pokestmt = function () {
        var _localctx = new PokestmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, jvmBasicParser.RULE_pokestmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 406;
                this.match(jvmBasicParser.POKE);
                this.state = 407;
                this.expression();
                this.state = 408;
                this.match(jvmBasicParser.COMMA);
                this.state = 409;
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
    jvmBasicParser.prototype.callstmt = function () {
        var _localctx = new CallstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, jvmBasicParser.RULE_callstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 411;
                this.match(jvmBasicParser.CALL);
                this.state = 412;
                this.exprlist();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.hplotstmt = function () {
        var _localctx = new HplotstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, jvmBasicParser.RULE_hplotstmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 414;
                this.match(jvmBasicParser.HPLOT);
                this.state = 419;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
                    case 1:
                        {
                            this.state = 415;
                            this.expression();
                            this.state = 416;
                            this.match(jvmBasicParser.COMMA);
                            this.state = 417;
                            this.expression();
                        }
                        break;
                }
                this.state = 428;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jvmBasicParser.TO) {
                    {
                        {
                            this.state = 421;
                            this.match(jvmBasicParser.TO);
                            this.state = 422;
                            this.expression();
                            this.state = 423;
                            this.match(jvmBasicParser.COMMA);
                            this.state = 424;
                            this.expression();
                        }
                    }
                    this.state = 430;
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
    jvmBasicParser.prototype.vplotstmt = function () {
        var _localctx = new VplotstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, jvmBasicParser.RULE_vplotstmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 431;
                this.match(jvmBasicParser.VPLOT);
                this.state = 436;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
                    case 1:
                        {
                            this.state = 432;
                            this.expression();
                            this.state = 433;
                            this.match(jvmBasicParser.COMMA);
                            this.state = 434;
                            this.expression();
                        }
                        break;
                }
                this.state = 445;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jvmBasicParser.TO) {
                    {
                        {
                            this.state = 438;
                            this.match(jvmBasicParser.TO);
                            this.state = 439;
                            this.expression();
                            this.state = 440;
                            this.match(jvmBasicParser.COMMA);
                            this.state = 441;
                            this.expression();
                        }
                    }
                    this.state = 447;
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
    jvmBasicParser.prototype.plotstmt = function () {
        var _localctx = new PlotstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, jvmBasicParser.RULE_plotstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 448;
                this.match(jvmBasicParser.PLOT);
                this.state = 449;
                this.expression();
                this.state = 450;
                this.match(jvmBasicParser.COMMA);
                this.state = 451;
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
    jvmBasicParser.prototype.ongotostmt = function () {
        var _localctx = new OngotostmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, jvmBasicParser.RULE_ongotostmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 453;
                this.match(jvmBasicParser.ON);
                this.state = 454;
                this.expression();
                this.state = 455;
                this.match(jvmBasicParser.GOTO);
                this.state = 456;
                this.linenumber();
                this.state = 461;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jvmBasicParser.COMMA) {
                    {
                        {
                            this.state = 457;
                            this.match(jvmBasicParser.COMMA);
                            this.state = 458;
                            this.linenumber();
                        }
                    }
                    this.state = 463;
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
    jvmBasicParser.prototype.ongosubstmt = function () {
        var _localctx = new OngosubstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, jvmBasicParser.RULE_ongosubstmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 464;
                this.match(jvmBasicParser.ON);
                this.state = 465;
                this.expression();
                this.state = 466;
                this.match(jvmBasicParser.GOSUB);
                this.state = 467;
                this.linenumber();
                this.state = 472;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jvmBasicParser.COMMA) {
                    {
                        {
                            this.state = 468;
                            this.match(jvmBasicParser.COMMA);
                            this.state = 469;
                            this.linenumber();
                        }
                    }
                    this.state = 474;
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
    jvmBasicParser.prototype.vtabstmnt = function () {
        var _localctx = new VtabstmntContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, jvmBasicParser.RULE_vtabstmnt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 475;
                this.match(jvmBasicParser.VTAB);
                this.state = 476;
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
    jvmBasicParser.prototype.htabstmnt = function () {
        var _localctx = new HtabstmntContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, jvmBasicParser.RULE_htabstmnt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 478;
                this.match(jvmBasicParser.HTAB);
                this.state = 479;
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
    jvmBasicParser.prototype.himemstmt = function () {
        var _localctx = new HimemstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, jvmBasicParser.RULE_himemstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 481;
                this.match(jvmBasicParser.HIMEM);
                this.state = 482;
                this.match(jvmBasicParser.COLON);
                this.state = 483;
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
    jvmBasicParser.prototype.lomemstmt = function () {
        var _localctx = new LomemstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, jvmBasicParser.RULE_lomemstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 485;
                this.match(jvmBasicParser.LOMEM);
                this.state = 486;
                this.match(jvmBasicParser.COLON);
                this.state = 487;
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
    jvmBasicParser.prototype.datastmt = function () {
        var _localctx = new DatastmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, jvmBasicParser.RULE_datastmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 489;
                this.match(jvmBasicParser.DATA);
                this.state = 490;
                this.datum();
                this.state = 497;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jvmBasicParser.COMMA) {
                    {
                        {
                            this.state = 491;
                            this.match(jvmBasicParser.COMMA);
                            this.state = 493;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 492;
                                        this.datum();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 499;
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
    jvmBasicParser.prototype.datum = function () {
        var _localctx = new DatumContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, jvmBasicParser.RULE_datum);
        try {
            this.state = 502;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case jvmBasicParser.PLUS:
                case jvmBasicParser.MINUS:
                case jvmBasicParser.NUMBER:
                case jvmBasicParser.FLOAT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 500;
                        this.number();
                    }
                    break;
                case jvmBasicParser.STRINGLITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 501;
                        this.match(jvmBasicParser.STRINGLITERAL);
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
    jvmBasicParser.prototype.waitstmt = function () {
        var _localctx = new WaitstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, jvmBasicParser.RULE_waitstmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 504;
                this.match(jvmBasicParser.WAIT);
                this.state = 505;
                this.expression();
                this.state = 506;
                this.match(jvmBasicParser.COMMA);
                this.state = 507;
                this.expression();
                this.state = 510;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jvmBasicParser.COMMA) {
                    {
                        this.state = 508;
                        this.match(jvmBasicParser.COMMA);
                        this.state = 509;
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
    jvmBasicParser.prototype.xdrawstmt = function () {
        var _localctx = new XdrawstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, jvmBasicParser.RULE_xdrawstmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 512;
                this.match(jvmBasicParser.XDRAW);
                this.state = 513;
                this.expression();
                this.state = 519;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jvmBasicParser.AT) {
                    {
                        this.state = 514;
                        this.match(jvmBasicParser.AT);
                        this.state = 515;
                        this.expression();
                        this.state = 516;
                        this.match(jvmBasicParser.COMMA);
                        this.state = 517;
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
    jvmBasicParser.prototype.drawstmt = function () {
        var _localctx = new DrawstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, jvmBasicParser.RULE_drawstmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 521;
                this.match(jvmBasicParser.DRAW);
                this.state = 522;
                this.expression();
                this.state = 528;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jvmBasicParser.AT) {
                    {
                        this.state = 523;
                        this.match(jvmBasicParser.AT);
                        this.state = 524;
                        this.expression();
                        this.state = 525;
                        this.match(jvmBasicParser.COMMA);
                        this.state = 526;
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
    jvmBasicParser.prototype.defstmt = function () {
        var _localctx = new DefstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, jvmBasicParser.RULE_defstmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 530;
                this.match(jvmBasicParser.DEF);
                this.state = 532;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jvmBasicParser.FN) {
                    {
                        this.state = 531;
                        this.match(jvmBasicParser.FN);
                    }
                }
                this.state = 534;
                this.var();
                this.state = 535;
                this.match(jvmBasicParser.LPAREN);
                this.state = 536;
                this.var();
                this.state = 537;
                this.match(jvmBasicParser.RPAREN);
                this.state = 538;
                this.match(jvmBasicParser.EQ);
                this.state = 539;
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
    jvmBasicParser.prototype.tabstmt = function () {
        var _localctx = new TabstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, jvmBasicParser.RULE_tabstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 541;
                this.match(jvmBasicParser.TAB);
                this.state = 542;
                this.match(jvmBasicParser.LPAREN);
                this.state = 543;
                this.expression();
                this.state = 544;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.speedstmt = function () {
        var _localctx = new SpeedstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, jvmBasicParser.RULE_speedstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 546;
                this.match(jvmBasicParser.SPEED);
                this.state = 547;
                this.match(jvmBasicParser.EQ);
                this.state = 548;
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
    jvmBasicParser.prototype.rotstmt = function () {
        var _localctx = new RotstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, jvmBasicParser.RULE_rotstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 550;
                this.match(jvmBasicParser.ROT);
                this.state = 551;
                this.match(jvmBasicParser.EQ);
                this.state = 552;
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
    jvmBasicParser.prototype.scalestmt = function () {
        var _localctx = new ScalestmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, jvmBasicParser.RULE_scalestmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 554;
                this.match(jvmBasicParser.SCALE);
                this.state = 555;
                this.match(jvmBasicParser.EQ);
                this.state = 556;
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
    jvmBasicParser.prototype.colorstmt = function () {
        var _localctx = new ColorstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, jvmBasicParser.RULE_colorstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 558;
                this.match(jvmBasicParser.COLOR);
                this.state = 559;
                this.match(jvmBasicParser.EQ);
                this.state = 560;
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
    jvmBasicParser.prototype.hcolorstmt = function () {
        var _localctx = new HcolorstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, jvmBasicParser.RULE_hcolorstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 562;
                this.match(jvmBasicParser.HCOLOR);
                this.state = 563;
                this.match(jvmBasicParser.EQ);
                this.state = 564;
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
    jvmBasicParser.prototype.hlinstmt = function () {
        var _localctx = new HlinstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, jvmBasicParser.RULE_hlinstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 566;
                this.match(jvmBasicParser.HLIN);
                this.state = 567;
                this.expression();
                this.state = 568;
                this.match(jvmBasicParser.COMMA);
                this.state = 569;
                this.expression();
                this.state = 570;
                this.match(jvmBasicParser.AT);
                this.state = 571;
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
    jvmBasicParser.prototype.vlinstmt = function () {
        var _localctx = new VlinstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, jvmBasicParser.RULE_vlinstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 573;
                this.match(jvmBasicParser.VLIN);
                this.state = 574;
                this.expression();
                this.state = 575;
                this.match(jvmBasicParser.COMMA);
                this.state = 576;
                this.expression();
                this.state = 577;
                this.match(jvmBasicParser.AT);
                this.state = 578;
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
    jvmBasicParser.prototype.onerrstmt = function () {
        var _localctx = new OnerrstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, jvmBasicParser.RULE_onerrstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 580;
                this.match(jvmBasicParser.ONERR);
                this.state = 581;
                this.match(jvmBasicParser.GOTO);
                this.state = 582;
                this.linenumber();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.prstmt = function () {
        var _localctx = new PrstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, jvmBasicParser.RULE_prstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 584;
                this.match(jvmBasicParser.PRNUMBER);
                this.state = 585;
                this.match(jvmBasicParser.NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.instmt = function () {
        var _localctx = new InstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, jvmBasicParser.RULE_instmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 587;
                this.match(jvmBasicParser.INNUMBER);
                this.state = 588;
                this.match(jvmBasicParser.NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.storestmt = function () {
        var _localctx = new StorestmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, jvmBasicParser.RULE_storestmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 590;
                this.match(jvmBasicParser.STORE);
                this.state = 591;
                this.vardecl();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.recallstmt = function () {
        var _localctx = new RecallstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, jvmBasicParser.RULE_recallstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 593;
                this.match(jvmBasicParser.RECALL);
                this.state = 594;
                this.vardecl();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.liststmt = function () {
        var _localctx = new ListstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, jvmBasicParser.RULE_liststmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 596;
                this.match(jvmBasicParser.LIST);
                this.state = 598;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
                    case 1:
                        {
                            this.state = 597;
                            this.expression();
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
    jvmBasicParser.prototype.popstmt = function () {
        var _localctx = new PopstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, jvmBasicParser.RULE_popstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 600;
                this.match(jvmBasicParser.POP);
                this.state = 605;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
                    case 1:
                        {
                            this.state = 601;
                            this.expression();
                            this.state = 602;
                            this.match(jvmBasicParser.COMMA);
                            this.state = 603;
                            this.expression();
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
    jvmBasicParser.prototype.amptstmt = function () {
        var _localctx = new AmptstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, jvmBasicParser.RULE_amptstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 607;
                this.match(jvmBasicParser.AMPERSAND);
                this.state = 608;
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
    jvmBasicParser.prototype.includestmt = function () {
        var _localctx = new IncludestmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, jvmBasicParser.RULE_includestmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 610;
                this.match(jvmBasicParser.INCLUDE);
                this.state = 611;
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
    jvmBasicParser.prototype.endstmt = function () {
        var _localctx = new EndstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, jvmBasicParser.RULE_endstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 613;
                this.match(jvmBasicParser.END);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.returnstmt = function () {
        var _localctx = new ReturnstmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, jvmBasicParser.RULE_returnstmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 615;
                this.match(jvmBasicParser.RETURN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.restorestmt = function () {
        var _localctx = new RestorestmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, jvmBasicParser.RULE_restorestmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 617;
                this.match(jvmBasicParser.RESTORE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.number = function () {
        var _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, jvmBasicParser.RULE_number);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 620;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jvmBasicParser.PLUS || _la === jvmBasicParser.MINUS) {
                    {
                        this.state = 619;
                        _la = this._input.LA(1);
                        if (!(_la === jvmBasicParser.PLUS || _la === jvmBasicParser.MINUS)) {
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
                this.state = 622;
                _la = this._input.LA(1);
                if (!(_la === jvmBasicParser.NUMBER || _la === jvmBasicParser.FLOAT)) {
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
    jvmBasicParser.prototype.func = function () {
        var _localctx = new FuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, jvmBasicParser.RULE_func);
        try {
            this.state = 659;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case jvmBasicParser.STRINGLITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 624;
                        this.match(jvmBasicParser.STRINGLITERAL);
                    }
                    break;
                case jvmBasicParser.PLUS:
                case jvmBasicParser.MINUS:
                case jvmBasicParser.NUMBER:
                case jvmBasicParser.FLOAT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 625;
                        this.number();
                    }
                    break;
                case jvmBasicParser.TAB:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 626;
                        this.tabfunc();
                    }
                    break;
                case jvmBasicParser.LETTERS:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 627;
                        this.vardecl();
                    }
                    break;
                case jvmBasicParser.CHR:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 628;
                        this.chrfunc();
                    }
                    break;
                case jvmBasicParser.SQR:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 629;
                        this.sqrfunc();
                    }
                    break;
                case jvmBasicParser.LEN:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 630;
                        this.lenfunc();
                    }
                    break;
                case jvmBasicParser.STR:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 631;
                        this.strfunc();
                    }
                    break;
                case jvmBasicParser.ASC:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 632;
                        this.ascfunc();
                    }
                    break;
                case jvmBasicParser.SCRN:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 633;
                        this.scrnfunc();
                    }
                    break;
                case jvmBasicParser.MID:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 634;
                        this.midfunc();
                    }
                    break;
                case jvmBasicParser.PDL:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 635;
                        this.pdlfunc();
                    }
                    break;
                case jvmBasicParser.PEEK:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 636;
                        this.peekfunc();
                    }
                    break;
                case jvmBasicParser.INTF:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 637;
                        this.intfunc();
                    }
                    break;
                case jvmBasicParser.SPC:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 638;
                        this.spcfunc();
                    }
                    break;
                case jvmBasicParser.FRE:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 639;
                        this.frefunc();
                    }
                    break;
                case jvmBasicParser.POS:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 640;
                        this.posfunc();
                    }
                    break;
                case jvmBasicParser.USR:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 641;
                        this.usrfunc();
                    }
                    break;
                case jvmBasicParser.LEFT:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 642;
                        this.leftfunc();
                    }
                    break;
                case jvmBasicParser.VAL:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 643;
                        this.valfunc();
                    }
                    break;
                case jvmBasicParser.RIGHT:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 644;
                        this.rightfunc();
                    }
                    break;
                case jvmBasicParser.FN:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 645;
                        this.fnfunc();
                    }
                    break;
                case jvmBasicParser.SIN:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 646;
                        this.sinfunc();
                    }
                    break;
                case jvmBasicParser.COS:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 647;
                        this.cosfunc();
                    }
                    break;
                case jvmBasicParser.TAN:
                    this.enterOuterAlt(_localctx, 25);
                    {
                        this.state = 648;
                        this.tanfunc();
                    }
                    break;
                case jvmBasicParser.ATN:
                    this.enterOuterAlt(_localctx, 26);
                    {
                        this.state = 649;
                        this.atnfunc();
                    }
                    break;
                case jvmBasicParser.RND:
                    this.enterOuterAlt(_localctx, 27);
                    {
                        this.state = 650;
                        this.rndfunc();
                    }
                    break;
                case jvmBasicParser.SGN:
                    this.enterOuterAlt(_localctx, 28);
                    {
                        this.state = 651;
                        this.sgnfunc();
                    }
                    break;
                case jvmBasicParser.EXP:
                    this.enterOuterAlt(_localctx, 29);
                    {
                        this.state = 652;
                        this.expfunc();
                    }
                    break;
                case jvmBasicParser.LOG:
                    this.enterOuterAlt(_localctx, 30);
                    {
                        this.state = 653;
                        this.logfunc();
                    }
                    break;
                case jvmBasicParser.ABS:
                    this.enterOuterAlt(_localctx, 31);
                    {
                        this.state = 654;
                        this.absfunc();
                    }
                    break;
                case jvmBasicParser.LPAREN:
                    this.enterOuterAlt(_localctx, 32);
                    {
                        {
                            this.state = 655;
                            this.match(jvmBasicParser.LPAREN);
                            this.state = 656;
                            this.expression();
                            this.state = 657;
                            this.match(jvmBasicParser.RPAREN);
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
    jvmBasicParser.prototype.signExpression = function () {
        var _localctx = new SignExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, jvmBasicParser.RULE_signExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 662;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jvmBasicParser.NOT) {
                    {
                        this.state = 661;
                        this.match(jvmBasicParser.NOT);
                    }
                }
                this.state = 665;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
                    case 1:
                        {
                            this.state = 664;
                            _la = this._input.LA(1);
                            if (!(_la === jvmBasicParser.PLUS || _la === jvmBasicParser.MINUS)) {
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
                this.state = 667;
                this.func();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.exponentExpression = function () {
        var _localctx = new ExponentExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, jvmBasicParser.RULE_exponentExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 669;
                this.signExpression();
                this.state = 674;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jvmBasicParser.EXPONENT) {
                    {
                        {
                            this.state = 670;
                            this.match(jvmBasicParser.EXPONENT);
                            this.state = 671;
                            this.signExpression();
                        }
                    }
                    this.state = 676;
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
    jvmBasicParser.prototype.multiplyingExpression = function () {
        var _localctx = new MultiplyingExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, jvmBasicParser.RULE_multiplyingExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 677;
                this.exponentExpression();
                this.state = 682;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jvmBasicParser.TIMES || _la === jvmBasicParser.DIV) {
                    {
                        {
                            this.state = 678;
                            _la = this._input.LA(1);
                            if (!(_la === jvmBasicParser.TIMES || _la === jvmBasicParser.DIV)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 679;
                            this.exponentExpression();
                        }
                    }
                    this.state = 684;
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
    jvmBasicParser.prototype.addingExpression = function () {
        var _localctx = new AddingExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, jvmBasicParser.RULE_addingExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 685;
                this.multiplyingExpression();
                this.state = 690;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jvmBasicParser.PLUS || _la === jvmBasicParser.MINUS) {
                    {
                        {
                            this.state = 686;
                            _la = this._input.LA(1);
                            if (!(_la === jvmBasicParser.PLUS || _la === jvmBasicParser.MINUS)) {
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
                            this.multiplyingExpression();
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
    jvmBasicParser.prototype.relationalExpression = function () {
        var _localctx = new RelationalExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, jvmBasicParser.RULE_relationalExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 693;
                this.addingExpression();
                this.state = 697;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (jvmBasicParser.GTE - 23)) | (1 << (jvmBasicParser.LTE - 23)) | (1 << (jvmBasicParser.GT - 23)) | (1 << (jvmBasicParser.LT - 23)) | (1 << (jvmBasicParser.EQ - 23)))) !== 0)) {
                    {
                        {
                            this.state = 694;
                            this.relop();
                        }
                        this.state = 695;
                        this.addingExpression();
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
    jvmBasicParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, jvmBasicParser.RULE_expression);
        var _la;
        try {
            this.state = 708;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 46, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 699;
                        this.func();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 700;
                            this.relationalExpression();
                            this.state = 705;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === jvmBasicParser.AND || _la === jvmBasicParser.OR) {
                                {
                                    {
                                        this.state = 701;
                                        _la = this._input.LA(1);
                                        if (!(_la === jvmBasicParser.AND || _la === jvmBasicParser.OR)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 702;
                                        this.relationalExpression();
                                    }
                                }
                                this.state = 707;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
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
    jvmBasicParser.prototype.var = function () {
        var _localctx = new VarContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, jvmBasicParser.RULE_var);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 710;
                this.varname();
                this.state = 712;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jvmBasicParser.DOLLAR || _la === jvmBasicParser.PERCENT) {
                    {
                        this.state = 711;
                        this.varsuffix();
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
    jvmBasicParser.prototype.varname = function () {
        var _localctx = new VarnameContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, jvmBasicParser.RULE_varname);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 714;
                this.match(jvmBasicParser.LETTERS);
                this.state = 718;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 715;
                                _la = this._input.LA(1);
                                if (!(_la === jvmBasicParser.LETTERS || _la === jvmBasicParser.NUMBER)) {
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
                    this.state = 720;
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
    jvmBasicParser.prototype.varsuffix = function () {
        var _localctx = new VarsuffixContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, jvmBasicParser.RULE_varsuffix);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 721;
                _la = this._input.LA(1);
                if (!(_la === jvmBasicParser.DOLLAR || _la === jvmBasicParser.PERCENT)) {
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
    jvmBasicParser.prototype.varlist = function () {
        var _localctx = new VarlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, jvmBasicParser.RULE_varlist);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 723;
                this.vardecl();
                this.state = 728;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jvmBasicParser.COMMA) {
                    {
                        {
                            this.state = 724;
                            this.match(jvmBasicParser.COMMA);
                            this.state = 725;
                            this.vardecl();
                        }
                    }
                    this.state = 730;
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
    jvmBasicParser.prototype.exprlist = function () {
        var _localctx = new ExprlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, jvmBasicParser.RULE_exprlist);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 731;
                this.expression();
                this.state = 736;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jvmBasicParser.COMMA) {
                    {
                        {
                            this.state = 732;
                            this.match(jvmBasicParser.COMMA);
                            this.state = 733;
                            this.expression();
                        }
                    }
                    this.state = 738;
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
    jvmBasicParser.prototype.sqrfunc = function () {
        var _localctx = new SqrfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, jvmBasicParser.RULE_sqrfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 739;
                this.match(jvmBasicParser.SQR);
                this.state = 740;
                this.match(jvmBasicParser.LPAREN);
                this.state = 741;
                this.expression();
                this.state = 742;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.chrfunc = function () {
        var _localctx = new ChrfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, jvmBasicParser.RULE_chrfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 744;
                this.match(jvmBasicParser.CHR);
                this.state = 745;
                this.match(jvmBasicParser.LPAREN);
                this.state = 746;
                this.expression();
                this.state = 747;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.lenfunc = function () {
        var _localctx = new LenfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, jvmBasicParser.RULE_lenfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 749;
                this.match(jvmBasicParser.LEN);
                this.state = 750;
                this.match(jvmBasicParser.LPAREN);
                this.state = 751;
                this.expression();
                this.state = 752;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.ascfunc = function () {
        var _localctx = new AscfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, jvmBasicParser.RULE_ascfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 754;
                this.match(jvmBasicParser.ASC);
                this.state = 755;
                this.match(jvmBasicParser.LPAREN);
                this.state = 756;
                this.expression();
                this.state = 757;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.midfunc = function () {
        var _localctx = new MidfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, jvmBasicParser.RULE_midfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 759;
                this.match(jvmBasicParser.MID);
                this.state = 760;
                this.match(jvmBasicParser.LPAREN);
                this.state = 761;
                this.expression();
                this.state = 762;
                this.match(jvmBasicParser.COMMA);
                this.state = 763;
                this.expression();
                this.state = 764;
                this.match(jvmBasicParser.COMMA);
                this.state = 765;
                this.expression();
                this.state = 766;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.pdlfunc = function () {
        var _localctx = new PdlfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, jvmBasicParser.RULE_pdlfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 768;
                this.match(jvmBasicParser.PDL);
                this.state = 769;
                this.match(jvmBasicParser.LPAREN);
                this.state = 770;
                this.expression();
                this.state = 771;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.peekfunc = function () {
        var _localctx = new PeekfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, jvmBasicParser.RULE_peekfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 773;
                this.match(jvmBasicParser.PEEK);
                this.state = 774;
                this.match(jvmBasicParser.LPAREN);
                this.state = 775;
                this.expression();
                this.state = 776;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.intfunc = function () {
        var _localctx = new IntfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, jvmBasicParser.RULE_intfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 778;
                this.match(jvmBasicParser.INTF);
                this.state = 779;
                this.match(jvmBasicParser.LPAREN);
                this.state = 780;
                this.expression();
                this.state = 781;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.spcfunc = function () {
        var _localctx = new SpcfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, jvmBasicParser.RULE_spcfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 783;
                this.match(jvmBasicParser.SPC);
                this.state = 784;
                this.match(jvmBasicParser.LPAREN);
                this.state = 785;
                this.expression();
                this.state = 786;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.frefunc = function () {
        var _localctx = new FrefuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, jvmBasicParser.RULE_frefunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 788;
                this.match(jvmBasicParser.FRE);
                this.state = 789;
                this.match(jvmBasicParser.LPAREN);
                this.state = 790;
                this.expression();
                this.state = 791;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.posfunc = function () {
        var _localctx = new PosfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, jvmBasicParser.RULE_posfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 793;
                this.match(jvmBasicParser.POS);
                this.state = 794;
                this.match(jvmBasicParser.LPAREN);
                this.state = 795;
                this.expression();
                this.state = 796;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.usrfunc = function () {
        var _localctx = new UsrfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, jvmBasicParser.RULE_usrfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 798;
                this.match(jvmBasicParser.USR);
                this.state = 799;
                this.match(jvmBasicParser.LPAREN);
                this.state = 800;
                this.expression();
                this.state = 801;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.leftfunc = function () {
        var _localctx = new LeftfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, jvmBasicParser.RULE_leftfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 803;
                this.match(jvmBasicParser.LEFT);
                this.state = 804;
                this.match(jvmBasicParser.LPAREN);
                this.state = 805;
                this.expression();
                this.state = 806;
                this.match(jvmBasicParser.COMMA);
                this.state = 807;
                this.expression();
                this.state = 808;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.rightfunc = function () {
        var _localctx = new RightfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, jvmBasicParser.RULE_rightfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 810;
                this.match(jvmBasicParser.RIGHT);
                this.state = 811;
                this.match(jvmBasicParser.LPAREN);
                this.state = 812;
                this.expression();
                this.state = 813;
                this.match(jvmBasicParser.COMMA);
                this.state = 814;
                this.expression();
                this.state = 815;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.strfunc = function () {
        var _localctx = new StrfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, jvmBasicParser.RULE_strfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 817;
                this.match(jvmBasicParser.STR);
                this.state = 818;
                this.match(jvmBasicParser.LPAREN);
                this.state = 819;
                this.expression();
                this.state = 820;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.fnfunc = function () {
        var _localctx = new FnfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, jvmBasicParser.RULE_fnfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 822;
                this.match(jvmBasicParser.FN);
                this.state = 823;
                this.var();
                this.state = 824;
                this.match(jvmBasicParser.LPAREN);
                this.state = 825;
                this.expression();
                this.state = 826;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.valfunc = function () {
        var _localctx = new ValfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, jvmBasicParser.RULE_valfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 828;
                this.match(jvmBasicParser.VAL);
                this.state = 829;
                this.match(jvmBasicParser.LPAREN);
                this.state = 830;
                this.expression();
                this.state = 831;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.scrnfunc = function () {
        var _localctx = new ScrnfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 180, jvmBasicParser.RULE_scrnfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 833;
                this.match(jvmBasicParser.SCRN);
                this.state = 834;
                this.match(jvmBasicParser.LPAREN);
                this.state = 835;
                this.expression();
                this.state = 836;
                this.match(jvmBasicParser.COMMA);
                this.state = 837;
                this.expression();
                this.state = 838;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.sinfunc = function () {
        var _localctx = new SinfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, jvmBasicParser.RULE_sinfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 840;
                this.match(jvmBasicParser.SIN);
                this.state = 841;
                this.match(jvmBasicParser.LPAREN);
                this.state = 842;
                this.expression();
                this.state = 843;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.cosfunc = function () {
        var _localctx = new CosfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 184, jvmBasicParser.RULE_cosfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 845;
                this.match(jvmBasicParser.COS);
                this.state = 846;
                this.match(jvmBasicParser.LPAREN);
                this.state = 847;
                this.expression();
                this.state = 848;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.tanfunc = function () {
        var _localctx = new TanfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 186, jvmBasicParser.RULE_tanfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 850;
                this.match(jvmBasicParser.TAN);
                this.state = 851;
                this.match(jvmBasicParser.LPAREN);
                this.state = 852;
                this.expression();
                this.state = 853;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.atnfunc = function () {
        var _localctx = new AtnfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 188, jvmBasicParser.RULE_atnfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 855;
                this.match(jvmBasicParser.ATN);
                this.state = 856;
                this.match(jvmBasicParser.LPAREN);
                this.state = 857;
                this.expression();
                this.state = 858;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.rndfunc = function () {
        var _localctx = new RndfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 190, jvmBasicParser.RULE_rndfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 860;
                this.match(jvmBasicParser.RND);
                this.state = 861;
                this.match(jvmBasicParser.LPAREN);
                this.state = 862;
                this.expression();
                this.state = 863;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.sgnfunc = function () {
        var _localctx = new SgnfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 192, jvmBasicParser.RULE_sgnfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 865;
                this.match(jvmBasicParser.SGN);
                this.state = 866;
                this.match(jvmBasicParser.LPAREN);
                this.state = 867;
                this.expression();
                this.state = 868;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.expfunc = function () {
        var _localctx = new ExpfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 194, jvmBasicParser.RULE_expfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 870;
                this.match(jvmBasicParser.EXP);
                this.state = 871;
                this.match(jvmBasicParser.LPAREN);
                this.state = 872;
                this.expression();
                this.state = 873;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.logfunc = function () {
        var _localctx = new LogfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 196, jvmBasicParser.RULE_logfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 875;
                this.match(jvmBasicParser.LOG);
                this.state = 876;
                this.match(jvmBasicParser.LPAREN);
                this.state = 877;
                this.expression();
                this.state = 878;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.absfunc = function () {
        var _localctx = new AbsfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 198, jvmBasicParser.RULE_absfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 880;
                this.match(jvmBasicParser.ABS);
                this.state = 881;
                this.match(jvmBasicParser.LPAREN);
                this.state = 882;
                this.expression();
                this.state = 883;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    jvmBasicParser.prototype.tabfunc = function () {
        var _localctx = new TabfuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 200, jvmBasicParser.RULE_tabfunc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 885;
                this.match(jvmBasicParser.TAB);
                this.state = 886;
                this.match(jvmBasicParser.LPAREN);
                this.state = 887;
                this.expression();
                this.state = 888;
                this.match(jvmBasicParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(jvmBasicParser, "_ATN", {
        get: function () {
            if (!jvmBasicParser.__ATN) {
                jvmBasicParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(jvmBasicParser._serializedATN));
            }
            return jvmBasicParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    jvmBasicParser.DOLLAR = 1;
    jvmBasicParser.PERCENT = 2;
    jvmBasicParser.RETURN = 3;
    jvmBasicParser.PRINT = 4;
    jvmBasicParser.GOTO = 5;
    jvmBasicParser.GOSUB = 6;
    jvmBasicParser.IF = 7;
    jvmBasicParser.NEXT = 8;
    jvmBasicParser.THEN = 9;
    jvmBasicParser.REM = 10;
    jvmBasicParser.CHR = 11;
    jvmBasicParser.MID = 12;
    jvmBasicParser.LEFT = 13;
    jvmBasicParser.RIGHT = 14;
    jvmBasicParser.STR = 15;
    jvmBasicParser.LPAREN = 16;
    jvmBasicParser.RPAREN = 17;
    jvmBasicParser.PLUS = 18;
    jvmBasicParser.MINUS = 19;
    jvmBasicParser.TIMES = 20;
    jvmBasicParser.DIV = 21;
    jvmBasicParser.CLEAR = 22;
    jvmBasicParser.GTE = 23;
    jvmBasicParser.LTE = 24;
    jvmBasicParser.GT = 25;
    jvmBasicParser.LT = 26;
    jvmBasicParser.COMMA = 27;
    jvmBasicParser.LIST = 28;
    jvmBasicParser.RUN = 29;
    jvmBasicParser.END = 30;
    jvmBasicParser.LET = 31;
    jvmBasicParser.EQ = 32;
    jvmBasicParser.FOR = 33;
    jvmBasicParser.TO = 34;
    jvmBasicParser.STEP = 35;
    jvmBasicParser.INPUT = 36;
    jvmBasicParser.SEMICOLON = 37;
    jvmBasicParser.DIM = 38;
    jvmBasicParser.SQR = 39;
    jvmBasicParser.COLON = 40;
    jvmBasicParser.TEXT = 41;
    jvmBasicParser.HGR = 42;
    jvmBasicParser.HGR2 = 43;
    jvmBasicParser.LEN = 44;
    jvmBasicParser.CALL = 45;
    jvmBasicParser.ASC = 46;
    jvmBasicParser.HPLOT = 47;
    jvmBasicParser.VPLOT = 48;
    jvmBasicParser.PRNUMBER = 49;
    jvmBasicParser.INNUMBER = 50;
    jvmBasicParser.VTAB = 51;
    jvmBasicParser.HTAB = 52;
    jvmBasicParser.HOME = 53;
    jvmBasicParser.ON = 54;
    jvmBasicParser.PDL = 55;
    jvmBasicParser.PLOT = 56;
    jvmBasicParser.PEEK = 57;
    jvmBasicParser.POKE = 58;
    jvmBasicParser.INTF = 59;
    jvmBasicParser.STOP = 60;
    jvmBasicParser.HIMEM = 61;
    jvmBasicParser.LOMEM = 62;
    jvmBasicParser.FLASH = 63;
    jvmBasicParser.INVERSE = 64;
    jvmBasicParser.NORMAL = 65;
    jvmBasicParser.ONERR = 66;
    jvmBasicParser.SPC = 67;
    jvmBasicParser.FRE = 68;
    jvmBasicParser.POS = 69;
    jvmBasicParser.USR = 70;
    jvmBasicParser.TRACE = 71;
    jvmBasicParser.NOTRACE = 72;
    jvmBasicParser.AND = 73;
    jvmBasicParser.OR = 74;
    jvmBasicParser.DATA = 75;
    jvmBasicParser.WAIT = 76;
    jvmBasicParser.READ = 77;
    jvmBasicParser.XDRAW = 78;
    jvmBasicParser.DRAW = 79;
    jvmBasicParser.AT = 80;
    jvmBasicParser.DEF = 81;
    jvmBasicParser.FN = 82;
    jvmBasicParser.VAL = 83;
    jvmBasicParser.TAB = 84;
    jvmBasicParser.SPEED = 85;
    jvmBasicParser.ROT = 86;
    jvmBasicParser.SCALE = 87;
    jvmBasicParser.COLOR = 88;
    jvmBasicParser.HCOLOR = 89;
    jvmBasicParser.HLIN = 90;
    jvmBasicParser.VLIN = 91;
    jvmBasicParser.SCRN = 92;
    jvmBasicParser.POP = 93;
    jvmBasicParser.SHLOAD = 94;
    jvmBasicParser.SIN = 95;
    jvmBasicParser.COS = 96;
    jvmBasicParser.TAN = 97;
    jvmBasicParser.ATN = 98;
    jvmBasicParser.RND = 99;
    jvmBasicParser.SGN = 100;
    jvmBasicParser.EXP = 101;
    jvmBasicParser.LOG = 102;
    jvmBasicParser.ABS = 103;
    jvmBasicParser.STORE = 104;
    jvmBasicParser.RECALL = 105;
    jvmBasicParser.GET = 106;
    jvmBasicParser.EXPONENT = 107;
    jvmBasicParser.AMPERSAND = 108;
    jvmBasicParser.GR = 109;
    jvmBasicParser.NOT = 110;
    jvmBasicParser.RESTORE = 111;
    jvmBasicParser.SAVE = 112;
    jvmBasicParser.LOAD = 113;
    jvmBasicParser.QUESTION = 114;
    jvmBasicParser.INCLUDE = 115;
    jvmBasicParser.CLS = 116;
    jvmBasicParser.COMMENT = 117;
    jvmBasicParser.STRINGLITERAL = 118;
    jvmBasicParser.LETTERS = 119;
    jvmBasicParser.NUMBER = 120;
    jvmBasicParser.FLOAT = 121;
    jvmBasicParser.WS = 122;
    jvmBasicParser.RULE_prog = 0;
    jvmBasicParser.RULE_line = 1;
    jvmBasicParser.RULE_amperoper = 2;
    jvmBasicParser.RULE_linenumber = 3;
    jvmBasicParser.RULE_amprstmt = 4;
    jvmBasicParser.RULE_statement = 5;
    jvmBasicParser.RULE_vardecl = 6;
    jvmBasicParser.RULE_printstmt1 = 7;
    jvmBasicParser.RULE_printlist = 8;
    jvmBasicParser.RULE_getstmt = 9;
    jvmBasicParser.RULE_letstmt = 10;
    jvmBasicParser.RULE_variableassignment = 11;
    jvmBasicParser.RULE_relop = 12;
    jvmBasicParser.RULE_neq = 13;
    jvmBasicParser.RULE_ifstmt = 14;
    jvmBasicParser.RULE_forstmt1 = 15;
    jvmBasicParser.RULE_forstmt2 = 16;
    jvmBasicParser.RULE_nextstmt = 17;
    jvmBasicParser.RULE_inputstmt = 18;
    jvmBasicParser.RULE_readstmt = 19;
    jvmBasicParser.RULE_dimstmt = 20;
    jvmBasicParser.RULE_gotostmt = 21;
    jvmBasicParser.RULE_gosubstmt = 22;
    jvmBasicParser.RULE_pokestmt = 23;
    jvmBasicParser.RULE_callstmt = 24;
    jvmBasicParser.RULE_hplotstmt = 25;
    jvmBasicParser.RULE_vplotstmt = 26;
    jvmBasicParser.RULE_plotstmt = 27;
    jvmBasicParser.RULE_ongotostmt = 28;
    jvmBasicParser.RULE_ongosubstmt = 29;
    jvmBasicParser.RULE_vtabstmnt = 30;
    jvmBasicParser.RULE_htabstmnt = 31;
    jvmBasicParser.RULE_himemstmt = 32;
    jvmBasicParser.RULE_lomemstmt = 33;
    jvmBasicParser.RULE_datastmt = 34;
    jvmBasicParser.RULE_datum = 35;
    jvmBasicParser.RULE_waitstmt = 36;
    jvmBasicParser.RULE_xdrawstmt = 37;
    jvmBasicParser.RULE_drawstmt = 38;
    jvmBasicParser.RULE_defstmt = 39;
    jvmBasicParser.RULE_tabstmt = 40;
    jvmBasicParser.RULE_speedstmt = 41;
    jvmBasicParser.RULE_rotstmt = 42;
    jvmBasicParser.RULE_scalestmt = 43;
    jvmBasicParser.RULE_colorstmt = 44;
    jvmBasicParser.RULE_hcolorstmt = 45;
    jvmBasicParser.RULE_hlinstmt = 46;
    jvmBasicParser.RULE_vlinstmt = 47;
    jvmBasicParser.RULE_onerrstmt = 48;
    jvmBasicParser.RULE_prstmt = 49;
    jvmBasicParser.RULE_instmt = 50;
    jvmBasicParser.RULE_storestmt = 51;
    jvmBasicParser.RULE_recallstmt = 52;
    jvmBasicParser.RULE_liststmt = 53;
    jvmBasicParser.RULE_popstmt = 54;
    jvmBasicParser.RULE_amptstmt = 55;
    jvmBasicParser.RULE_includestmt = 56;
    jvmBasicParser.RULE_endstmt = 57;
    jvmBasicParser.RULE_returnstmt = 58;
    jvmBasicParser.RULE_restorestmt = 59;
    jvmBasicParser.RULE_number = 60;
    jvmBasicParser.RULE_func = 61;
    jvmBasicParser.RULE_signExpression = 62;
    jvmBasicParser.RULE_exponentExpression = 63;
    jvmBasicParser.RULE_multiplyingExpression = 64;
    jvmBasicParser.RULE_addingExpression = 65;
    jvmBasicParser.RULE_relationalExpression = 66;
    jvmBasicParser.RULE_expression = 67;
    jvmBasicParser.RULE_var = 68;
    jvmBasicParser.RULE_varname = 69;
    jvmBasicParser.RULE_varsuffix = 70;
    jvmBasicParser.RULE_varlist = 71;
    jvmBasicParser.RULE_exprlist = 72;
    jvmBasicParser.RULE_sqrfunc = 73;
    jvmBasicParser.RULE_chrfunc = 74;
    jvmBasicParser.RULE_lenfunc = 75;
    jvmBasicParser.RULE_ascfunc = 76;
    jvmBasicParser.RULE_midfunc = 77;
    jvmBasicParser.RULE_pdlfunc = 78;
    jvmBasicParser.RULE_peekfunc = 79;
    jvmBasicParser.RULE_intfunc = 80;
    jvmBasicParser.RULE_spcfunc = 81;
    jvmBasicParser.RULE_frefunc = 82;
    jvmBasicParser.RULE_posfunc = 83;
    jvmBasicParser.RULE_usrfunc = 84;
    jvmBasicParser.RULE_leftfunc = 85;
    jvmBasicParser.RULE_rightfunc = 86;
    jvmBasicParser.RULE_strfunc = 87;
    jvmBasicParser.RULE_fnfunc = 88;
    jvmBasicParser.RULE_valfunc = 89;
    jvmBasicParser.RULE_scrnfunc = 90;
    jvmBasicParser.RULE_sinfunc = 91;
    jvmBasicParser.RULE_cosfunc = 92;
    jvmBasicParser.RULE_tanfunc = 93;
    jvmBasicParser.RULE_atnfunc = 94;
    jvmBasicParser.RULE_rndfunc = 95;
    jvmBasicParser.RULE_sgnfunc = 96;
    jvmBasicParser.RULE_expfunc = 97;
    jvmBasicParser.RULE_logfunc = 98;
    jvmBasicParser.RULE_absfunc = 99;
    jvmBasicParser.RULE_tabfunc = 100;
    // tslint:disable:no-trailing-whitespace
    jvmBasicParser.ruleNames = [
        "prog", "line", "amperoper", "linenumber", "amprstmt", "statement", "vardecl",
        "printstmt1", "printlist", "getstmt", "letstmt", "variableassignment",
        "relop", "neq", "ifstmt", "forstmt1", "forstmt2", "nextstmt", "inputstmt",
        "readstmt", "dimstmt", "gotostmt", "gosubstmt", "pokestmt", "callstmt",
        "hplotstmt", "vplotstmt", "plotstmt", "ongotostmt", "ongosubstmt", "vtabstmnt",
        "htabstmnt", "himemstmt", "lomemstmt", "datastmt", "datum", "waitstmt",
        "xdrawstmt", "drawstmt", "defstmt", "tabstmt", "speedstmt", "rotstmt",
        "scalestmt", "colorstmt", "hcolorstmt", "hlinstmt", "vlinstmt", "onerrstmt",
        "prstmt", "instmt", "storestmt", "recallstmt", "liststmt", "popstmt",
        "amptstmt", "includestmt", "endstmt", "returnstmt", "restorestmt", "number",
        "func", "signExpression", "exponentExpression", "multiplyingExpression",
        "addingExpression", "relationalExpression", "expression", "var", "varname",
        "varsuffix", "varlist", "exprlist", "sqrfunc", "chrfunc", "lenfunc", "ascfunc",
        "midfunc", "pdlfunc", "peekfunc", "intfunc", "spcfunc", "frefunc", "posfunc",
        "usrfunc", "leftfunc", "rightfunc", "strfunc", "fnfunc", "valfunc", "scrnfunc",
        "sinfunc", "cosfunc", "tanfunc", "atnfunc", "rndfunc", "sgnfunc", "expfunc",
        "logfunc", "absfunc", "tabfunc",
    ];
    jvmBasicParser._LITERAL_NAMES = [
        undefined, "'$'", "'%'", undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "'CHR$'", "'MID$'", "'LEFT$'", "'RIGHT$'",
        "'STR$'", "'('", "')'", "'+'", "'-'", "'*'", "'/'", undefined, "'>: '",
        "'<: '", "'>'", "'<'", "','", undefined, undefined, undefined, undefined,
        "'='", undefined, undefined, undefined, undefined, "';'", undefined, undefined,
        "':'", undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "'PR#'", "'IN#'", undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, "'^'", "'&'", undefined, undefined,
        undefined, undefined, undefined, "'?'",
    ];
    jvmBasicParser._SYMBOLIC_NAMES = [
        undefined, "DOLLAR", "PERCENT", "RETURN", "PRINT", "GOTO", "GOSUB", "IF",
        "NEXT", "THEN", "REM", "CHR", "MID", "LEFT", "RIGHT", "STR", "LPAREN",
        "RPAREN", "PLUS", "MINUS", "TIMES", "DIV", "CLEAR", "GTE", "LTE", "GT",
        "LT", "COMMA", "LIST", "RUN", "END", "LET", "EQ", "FOR", "TO", "STEP",
        "INPUT", "SEMICOLON", "DIM", "SQR", "COLON", "TEXT", "HGR", "HGR2", "LEN",
        "CALL", "ASC", "HPLOT", "VPLOT", "PRNUMBER", "INNUMBER", "VTAB", "HTAB",
        "HOME", "ON", "PDL", "PLOT", "PEEK", "POKE", "INTF", "STOP", "HIMEM",
        "LOMEM", "FLASH", "INVERSE", "NORMAL", "ONERR", "SPC", "FRE", "POS", "USR",
        "TRACE", "NOTRACE", "AND", "OR", "DATA", "WAIT", "READ", "XDRAW", "DRAW",
        "AT", "DEF", "FN", "VAL", "TAB", "SPEED", "ROT", "SCALE", "COLOR", "HCOLOR",
        "HLIN", "VLIN", "SCRN", "POP", "SHLOAD", "SIN", "COS", "TAN", "ATN", "RND",
        "SGN", "EXP", "LOG", "ABS", "STORE", "RECALL", "GET", "EXPONENT", "AMPERSAND",
        "GR", "NOT", "RESTORE", "SAVE", "LOAD", "QUESTION", "INCLUDE", "CLS",
        "COMMENT", "STRINGLITERAL", "LETTERS", "NUMBER", "FLOAT", "WS",
    ];
    jvmBasicParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(jvmBasicParser._LITERAL_NAMES, jvmBasicParser._SYMBOLIC_NAMES, []);
    jvmBasicParser._serializedATNSegments = 2;
    jvmBasicParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03|\u037D\x04\x02" +
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
        "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
        "`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x03\x02\x06\x02\xCE" +
        "\n\x02\r\x02\x0E\x02\xCF\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x05\x03\xD8\n\x03\x07\x03\xDA\n\x03\f\x03\x0E\x03\xDD\v\x03\x03\x03\x05" +
        "\x03\xE0\n\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x05\x06\xE7\n\x06" +
        "\x03\x06\x03\x06\x05\x06\xEB\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
        "\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
        "\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
        "\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
        "\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
        "\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05" +
        "\x07\u011E\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\u0125\n\b\f\b\x0E" +
        "\b\u0128\v\b\x03\t\x03\t\x05\t\u012C\n\t\x03\n\x03\n\x03\n\x05\n\u0131" +
        "\n\n\x07\n\u0133\n\n\f\n\x0E\n\u0136\v\n\x03\v\x03\v\x03\v\x03\f\x05\f" +
        "\u013C\n\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E" +
        "\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
        "\x03\x0E\x03\x0E\x05\x0E\u0152\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03" +
        "\x10\x03\x10\x05\x10\u015A\n\x10\x03\x10\x03\x10\x05\x10\u015E\n\x10\x03" +
        "\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0168" +
        "\n\x11\x03\x11\x03\x11\x03\x11\x05\x11\u016D\n\x11\x05\x11\u016F\n\x11" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12" +
        "\u0179\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u017F\n\x13\f\x13" +
        "\x0E\x13\u0182\v\x13\x05\x13\u0184\n\x13\x03\x14\x03\x14\x03\x14\x05\x14" +
        "\u0189\n\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03" +
        "\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03" +
        "\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03" +
        "\x1B\x03\x1B\x05\x1B\u01A6\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
        "\x07\x1B\u01AD\n\x1B\f\x1B\x0E\x1B\u01B0\v\x1B\x03\x1C\x03\x1C\x03\x1C" +
        "\x03\x1C\x03\x1C\x05\x1C\u01B7\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
        "\x1C\x07\x1C\u01BE\n\x1C\f\x1C\x0E\x1C\u01C1\v\x1C\x03\x1D\x03\x1D\x03" +
        "\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07" +
        "\x1E\u01CE\n\x1E\f\x1E\x0E\x1E\u01D1\v\x1E\x03\x1F\x03\x1F\x03\x1F\x03" +
        "\x1F\x03\x1F\x03\x1F\x07\x1F\u01D9\n\x1F\f\x1F\x0E\x1F\u01DC\v\x1F\x03" +
        " \x03 \x03 \x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03" +
        "#\x03$\x03$\x03$\x03$\x05$\u01F0\n$\x07$\u01F2\n$\f$\x0E$\u01F5\v$\x03" +
        "%\x03%\x05%\u01F9\n%\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u0201\n&\x03\'" +
        "\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u020A\n\'\x03(\x03(\x03(\x03" +
        "(\x03(\x03(\x03(\x05(\u0213\n(\x03)\x03)\x05)\u0217\n)\x03)\x03)\x03)" +
        "\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03" +
        ",\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x03/\x03/\x03" +
        "/\x03/\x030\x030\x030\x030\x030\x030\x030\x031\x031\x031\x031\x031\x03" +
        "1\x031\x032\x032\x032\x032\x033\x033\x033\x034\x034\x034\x035\x035\x03" +
        "5\x036\x036\x036\x037\x037\x057\u0259\n7\x038\x038\x038\x038\x038\x05" +
        "8\u0260\n8\x039\x039\x039\x03:\x03:\x03:\x03;\x03;\x03<\x03<\x03=\x03" +
        "=\x03>\x05>\u026F\n>\x03>\x03>\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03" +
        "?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03" +
        "?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x05" +
        "?\u0296\n?\x03@\x05@\u0299\n@\x03@\x05@\u029C\n@\x03@\x03@\x03A\x03A\x03" +
        "A\x07A\u02A3\nA\fA\x0EA\u02A6\vA\x03B\x03B\x03B\x07B\u02AB\nB\fB\x0EB" +
        "\u02AE\vB\x03C\x03C\x03C\x07C\u02B3\nC\fC\x0EC\u02B6\vC\x03D\x03D\x03" +
        "D\x03D\x05D\u02BC\nD\x03E\x03E\x03E\x03E\x07E\u02C2\nE\fE\x0EE\u02C5\v" +
        "E\x05E\u02C7\nE\x03F\x03F\x05F\u02CB\nF\x03G\x03G\x07G\u02CF\nG\fG\x0E" +
        "G\u02D2\vG\x03H\x03H\x03I\x03I\x03I\x07I\u02D9\nI\fI\x0EI\u02DC\vI\x03" +
        "J\x03J\x03J\x07J\u02E1\nJ\fJ\x0EJ\u02E4\vJ\x03K\x03K\x03K\x03K\x03K\x03" +
        "L\x03L\x03L\x03L\x03L\x03M\x03M\x03M\x03M\x03M\x03N\x03N\x03N\x03N\x03" +
        "N\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03P\x03P\x03P\x03P\x03" +
        "P\x03Q\x03Q\x03Q\x03Q\x03Q\x03R\x03R\x03R\x03R\x03R\x03S\x03S\x03S\x03" +
        "S\x03S\x03T\x03T\x03T\x03T\x03T\x03U\x03U\x03U\x03U\x03U\x03V\x03V\x03" +
        "V\x03V\x03V\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03X\x03X\x03X\x03X\x03" +
        "X\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03" +
        "[\x03[\x03[\x03[\x03[\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03]\x03" +
        "]\x03]\x03]\x03]\x03^\x03^\x03^\x03^\x03^\x03_\x03_\x03_\x03_\x03_\x03" +
        "`\x03`\x03`\x03`\x03`\x03a\x03a\x03a\x03a\x03a\x03b\x03b\x03b\x03b\x03" +
        "b\x03c\x03c\x03c\x03c\x03c\x03d\x03d\x03d\x03d\x03d\x03e\x03e\x03e\x03" +
        "e\x03e\x03f\x03f\x03f\x03f\x03f\x03f\x02\x02\x02g\x02\x02\x04\x02\x06" +
        "\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
        "\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
        "2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
        "N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02" +
        "j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02" +
        "\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02" +
        "\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02" +
        "\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02" +
        "\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02" +
        "\x02\f\x04\x02\f\fww\r\x02\x18\x18\x1F\x1F+-77>>ACIJ``oorsvv\x04\x02\x06" +
        "\x06tt\x04\x02\x1D\x1D\'\'\x03\x02\x14\x15\x03\x02z{\x03\x02\x16\x17\x03" +
        "\x02KL\x03\x02yz\x03\x02\x03\x04\x02\u039F\x02\xCD\x03\x02\x02\x02\x04" +
        "\xD3\x03\x02\x02\x02\x06\xE1\x03\x02\x02\x02\b\xE3\x03\x02\x02\x02\n\xEA" +
        "\x03\x02\x02\x02\f\u011D\x03\x02\x02\x02\x0E\u011F\x03\x02\x02\x02\x10" +
        "\u0129\x03\x02\x02\x02\x12\u012D\x03\x02\x02\x02\x14\u0137\x03\x02\x02" +
        "\x02\x16\u013B\x03\x02\x02\x02\x18\u013F\x03\x02\x02\x02\x1A\u0151\x03" +
        "\x02\x02\x02\x1C\u0153\x03\x02\x02\x02\x1E\u0156\x03\x02\x02\x02 \u015F" +
        "\x03\x02\x02\x02\"\u0170\x03\x02\x02\x02$\u017A\x03\x02\x02\x02&\u0185" +
        "\x03\x02\x02\x02(\u018C\x03\x02\x02\x02*\u018F\x03\x02\x02\x02,\u0192" +
        "\x03\x02\x02\x02.\u0195\x03\x02\x02\x020\u0198\x03\x02\x02\x022\u019D" +
        "\x03\x02\x02\x024\u01A0\x03\x02\x02\x026\u01B1\x03\x02\x02\x028\u01C2" +
        "\x03\x02\x02\x02:\u01C7\x03\x02\x02\x02<\u01D2\x03\x02\x02\x02>\u01DD" +
        "\x03\x02\x02\x02@\u01E0\x03\x02\x02\x02B\u01E3\x03\x02\x02\x02D\u01E7" +
        "\x03\x02\x02\x02F\u01EB\x03\x02\x02\x02H\u01F8\x03\x02\x02\x02J\u01FA" +
        "\x03\x02\x02\x02L\u0202\x03\x02\x02\x02N\u020B\x03\x02\x02\x02P\u0214" +
        "\x03\x02\x02\x02R\u021F\x03\x02\x02\x02T\u0224\x03\x02\x02\x02V\u0228" +
        "\x03\x02\x02\x02X\u022C\x03\x02\x02\x02Z\u0230\x03\x02\x02\x02\\\u0234" +
        "\x03\x02\x02\x02^\u0238\x03\x02\x02\x02`\u023F\x03\x02\x02\x02b\u0246" +
        "\x03\x02\x02\x02d\u024A\x03\x02\x02\x02f\u024D\x03\x02\x02\x02h\u0250" +
        "\x03\x02\x02\x02j\u0253\x03\x02\x02\x02l\u0256\x03\x02\x02\x02n\u025A" +
        "\x03\x02\x02\x02p\u0261\x03\x02\x02\x02r\u0264\x03\x02\x02\x02t\u0267" +
        "\x03\x02\x02\x02v\u0269\x03\x02\x02\x02x\u026B\x03\x02\x02\x02z\u026E" +
        "\x03\x02\x02\x02|\u0295\x03\x02\x02\x02~\u0298\x03\x02\x02\x02\x80\u029F" +
        "\x03\x02\x02\x02\x82\u02A7\x03\x02\x02\x02\x84\u02AF\x03\x02\x02\x02\x86" +
        "\u02B7\x03\x02\x02\x02\x88\u02C6\x03\x02\x02\x02\x8A\u02C8\x03\x02\x02" +
        "\x02\x8C\u02CC\x03\x02\x02\x02\x8E\u02D3\x03\x02\x02\x02\x90\u02D5\x03" +
        "\x02\x02\x02\x92\u02DD\x03\x02\x02\x02\x94\u02E5\x03\x02\x02\x02\x96\u02EA" +
        "\x03\x02\x02\x02\x98\u02EF\x03\x02\x02\x02\x9A\u02F4\x03\x02\x02\x02\x9C" +
        "\u02F9\x03\x02\x02\x02\x9E\u0302\x03\x02\x02\x02\xA0\u0307\x03\x02\x02" +
        "\x02\xA2\u030C\x03\x02\x02\x02\xA4\u0311\x03\x02\x02\x02\xA6\u0316\x03" +
        "\x02\x02\x02\xA8\u031B\x03\x02\x02\x02\xAA\u0320\x03\x02\x02\x02\xAC\u0325" +
        "\x03\x02\x02\x02\xAE\u032C\x03\x02\x02\x02\xB0\u0333\x03\x02\x02\x02\xB2" +
        "\u0338\x03\x02\x02\x02\xB4\u033E\x03\x02\x02\x02\xB6\u0343\x03\x02\x02" +
        "\x02\xB8\u034A\x03\x02\x02\x02\xBA\u034F\x03\x02\x02\x02\xBC\u0354\x03" +
        "\x02\x02\x02\xBE\u0359\x03\x02\x02\x02\xC0\u035E\x03\x02\x02\x02\xC2\u0363" +
        "\x03\x02\x02\x02\xC4\u0368\x03\x02\x02\x02\xC6\u036D\x03\x02\x02\x02\xC8" +
        "\u0372\x03\x02\x02\x02\xCA\u0377\x03\x02\x02\x02\xCC\xCE\x05\x04\x03\x02" +
        "\xCD\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02" +
        "\xCF\xD0\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD2\x07\x02\x02\x03" +
        "\xD2\x03\x03\x02\x02\x02\xD3\xDF\x05\b\x05\x02\xD4\xDB\x05\n\x06\x02\xD5" +
        "\xD7\x07*\x02\x02\xD6\xD8\x05\n\x06\x02\xD7\xD6\x03\x02\x02\x02\xD7\xD8" +
        "\x03\x02\x02\x02\xD8\xDA\x03\x02\x02\x02\xD9\xD5\x03\x02\x02\x02\xDA\xDD" +
        "\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xE0" +
        "\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDE\xE0\t\x02\x02\x02\xDF\xD4" +
        "\x03\x02\x02\x02\xDF\xDE\x03\x02\x02\x02\xE0\x05\x03\x02\x02\x02\xE1\xE2" +
        "\x07n\x02\x02\xE2\x07\x03\x02\x02\x02\xE3\xE4\x07z\x02\x02\xE4\t\x03\x02" +
        "\x02\x02\xE5\xE7\x05\x06\x04\x02\xE6\xE5\x03\x02\x02\x02\xE6\xE7\x03\x02" +
        "\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xEB\x05\f\x07\x02\xE9\xEB\t\x02\x02" +
        "\x02\xEA\xE6\x03\x02\x02\x02\xEA\xE9\x03\x02\x02\x02\xEB\v\x03\x02\x02" +
        "\x02\xEC\u011E\t\x03\x02\x02\xED\u011E\x05t;\x02\xEE\u011E\x05v<\x02\xEF" +
        "\u011E\x05x=\x02\xF0\u011E\x05p9\x02\xF1\u011E\x05n8\x02\xF2\u011E\x05" +
        "l7\x02\xF3\u011E\x05h5\x02\xF4\u011E\x05\x14\v\x02\xF5\u011E\x05j6\x02" +
        "\xF6\u011E\x05$\x13\x02\xF7\u011E\x05f4\x02\xF8\u011E\x05d3\x02\xF9\u011E" +
        "\x05b2\x02\xFA\u011E\x05^0\x02\xFB\u011E\x05`1\x02\xFC\u011E\x05Z.\x02" +
        "\xFD\u011E\x05T+\x02\xFE\u011E\x05X-\x02\xFF\u011E\x05V,\x02\u0100\u011E" +
        "\x05\\/\x02\u0101\u011E\x05B\"\x02\u0102\u011E\x05D#\x02\u0103\u011E\x05" +
        "\x10\t\x02\u0104\u011E\x050\x19\x02\u0105\u011E\x058\x1D\x02\u0106\u011E" +
        "\x05:\x1E\x02\u0107\u011E\x05<\x1F\x02\u0108\u011E\x05\x1E\x10\x02\u0109" +
        "\u011E\x05 \x11\x02\u010A\u011E\x05\"\x12\x02\u010B\u011E\x05&\x14\x02" +
        "\u010C\u011E\x05R*\x02\u010D\u011E\x05*\x16\x02\u010E\u011E\x05,\x17\x02" +
        "\u010F\u011E\x05.\x18\x02\u0110\u011E\x052\x1A\x02\u0111\u011E\x05(\x15" +
        "\x02\u0112\u011E\x054\x1B\x02\u0113\u011E\x056\x1C\x02\u0114\u011E\x05" +
        "> \x02\u0115\u011E\x05@!\x02\u0116\u011E\x05J&\x02\u0117\u011E\x05F$\x02" +
        "\u0118\u011E\x05L\'\x02\u0119\u011E\x05N(\x02\u011A\u011E\x05P)\x02\u011B" +
        "\u011E\x05\x16\f\x02\u011C\u011E\x05r:\x02\u011D\xEC\x03\x02\x02\x02\u011D" +
        "\xED\x03\x02\x02\x02\u011D\xEE\x03\x02\x02\x02\u011D\xEF\x03\x02\x02\x02" +
        "\u011D\xF0\x03\x02\x02\x02\u011D\xF1\x03\x02\x02\x02\u011D\xF2\x03\x02" +
        "\x02\x02\u011D\xF3\x03\x02\x02\x02\u011D\xF4\x03\x02\x02\x02\u011D\xF5" +
        "\x03\x02\x02\x02\u011D\xF6\x03\x02\x02\x02\u011D\xF7\x03\x02\x02\x02\u011D" +
        "\xF8\x03\x02\x02\x02\u011D\xF9\x03\x02\x02\x02\u011D\xFA\x03\x02\x02\x02" +
        "\u011D\xFB\x03\x02\x02\x02\u011D\xFC\x03\x02\x02\x02\u011D\xFD\x03\x02" +
        "\x02\x02\u011D\xFE\x03\x02\x02\x02\u011D\xFF\x03\x02\x02\x02\u011D\u0100" +
        "\x03\x02\x02\x02\u011D\u0101\x03\x02\x02\x02\u011D\u0102\x03\x02\x02\x02" +
        "\u011D\u0103\x03\x02\x02\x02\u011D\u0104\x03\x02\x02\x02\u011D\u0105\x03" +
        "\x02\x02\x02\u011D\u0106\x03\x02\x02\x02\u011D\u0107\x03\x02\x02\x02\u011D" +
        "\u0108\x03\x02\x02\x02\u011D\u0109\x03\x02\x02\x02\u011D\u010A\x03\x02" +
        "\x02\x02\u011D\u010B\x03\x02\x02\x02\u011D\u010C\x03\x02\x02\x02\u011D" +
        "\u010D\x03\x02\x02\x02\u011D\u010E\x03\x02\x02\x02\u011D\u010F\x03\x02" +
        "\x02\x02\u011D\u0110\x03\x02\x02\x02\u011D\u0111\x03\x02\x02\x02\u011D" +
        "\u0112\x03\x02\x02\x02\u011D\u0113\x03\x02\x02\x02\u011D\u0114\x03\x02" +
        "\x02\x02\u011D\u0115\x03\x02\x02\x02\u011D\u0116\x03\x02\x02\x02\u011D" +
        "\u0117\x03\x02\x02\x02\u011D\u0118\x03\x02\x02\x02\u011D\u0119\x03\x02" +
        "\x02\x02\u011D\u011A\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011D" +
        "\u011C\x03\x02\x02\x02\u011E\r\x03\x02\x02\x02\u011F\u0126\x05\x8AF\x02" +
        "\u0120\u0121\x07\x12\x02\x02\u0121\u0122\x05\x92J\x02\u0122\u0123\x07" +
        "\x13\x02\x02\u0123\u0125\x03\x02\x02\x02\u0124\u0120\x03\x02\x02\x02\u0125" +
        "\u0128\x03\x02\x02\x02\u0126\u0124\x03\x02\x02\x02\u0126\u0127\x03\x02" +
        "\x02\x02\u0127\x0F\x03\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0129\u012B" +
        "\t\x04\x02\x02\u012A\u012C\x05\x12\n\x02\u012B\u012A\x03\x02\x02\x02\u012B" +
        "\u012C\x03\x02\x02\x02\u012C\x11\x03\x02\x02\x02\u012D\u0134\x05\x88E" +
        "\x02\u012E\u0130\t\x05\x02\x02\u012F\u0131\x05\x88E\x02\u0130\u012F\x03" +
        "\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0133\x03\x02\x02\x02\u0132" +
        "\u012E\x03\x02\x02\x02\u0133\u0136\x03\x02\x02\x02\u0134\u0132\x03\x02" +
        "\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135\x13\x03\x02\x02\x02\u0136\u0134" +
        "\x03\x02\x02\x02\u0137\u0138\x07l\x02\x02\u0138\u0139\x05\x92J\x02\u0139" +
        "\x15\x03\x02\x02\x02\u013A\u013C\x07!\x02\x02\u013B\u013A\x03\x02\x02" +
        "\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D\u013E" +
        "\x05\x18\r\x02\u013E\x17\x03\x02\x02\x02\u013F\u0140\x05\x0E\b\x02\u0140" +
        "\u0141\x07\"\x02\x02\u0141\u0142\x05\x92J\x02\u0142\x19\x03\x02\x02\x02" +
        "\u0143\u0152\x07\x19\x02\x02\u0144\u0145\x07\x1B\x02\x02\u0145\u0152\x07" +
        "\"\x02\x02\u0146\u0147\x07\"\x02\x02\u0147\u0152\x07\x1B\x02\x02\u0148" +
        "\u0152\x07\x1A\x02\x02\u0149\u014A\x07\x1C\x02\x02\u014A\u0152\x07\"\x02" +
        "\x02\u014B\u014C\x07\"\x02\x02\u014C\u0152\x07\x1C\x02\x02\u014D\u0152" +
        "\x05\x1C\x0F\x02\u014E\u0152\x07\"\x02\x02\u014F\u0152\x07\x1B\x02\x02" +
        "\u0150\u0152\x07\x1C\x02\x02\u0151\u0143\x03\x02\x02\x02\u0151\u0144\x03" +
        "\x02\x02\x02\u0151\u0146\x03\x02\x02\x02\u0151\u0148\x03\x02\x02\x02\u0151" +
        "\u0149\x03\x02\x02\x02\u0151\u014B\x03\x02\x02\x02\u0151\u014D\x03\x02" +
        "\x02\x02\u0151\u014E\x03\x02\x02\x02\u0151\u014F\x03\x02\x02\x02\u0151" +
        "\u0150\x03\x02\x02\x02\u0152\x1B\x03\x02\x02\x02\u0153\u0154\x07\x1C\x02" +
        "\x02\u0154\u0155\x07\x1B\x02\x02\u0155\x1D\x03\x02\x02\x02\u0156\u0157" +
        "\x07\t\x02\x02\u0157\u0159\x05\x88E\x02\u0158\u015A\x07\v\x02\x02\u0159" +
        "\u0158\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015D\x03\x02" +
        "\x02\x02\u015B\u015E\x05\f\x07\x02\u015C\u015E\x05\b\x05\x02\u015D\u015B" +
        "\x03\x02\x02\x02\u015D\u015C\x03\x02\x02\x02\u015E\x1F\x03\x02\x02\x02" +
        "\u015F\u0160\x07#\x02\x02\u0160\u0161\x05\x0E\b\x02\u0161\u0162\x07\"" +
        "\x02\x02\u0162\u0163\x05\x88E\x02\u0163\u0164\x07$\x02\x02\u0164\u0167" +
        "\x05\x88E\x02\u0165\u0166\x07%\x02\x02\u0166\u0168\x05\x88E\x02\u0167" +
        "\u0165\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02\u0168\u016E\x03\x02" +
        "\x02\x02\u0169\u016A\x05\f\x07\x02\u016A\u016C\x07\n\x02\x02\u016B\u016D" +
        "\x05\x0E\b\x02\u016C\u016B\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02" +
        "\u016D\u016F\x03\x02\x02\x02\u016E\u0169\x03\x02\x02\x02\u016E\u016F\x03" +
        "\x02\x02\x02\u016F!\x03\x02\x02\x02\u0170\u0171\x07#\x02\x02\u0171\u0172" +
        "\x05\x0E\b\x02\u0172\u0173\x07\"\x02\x02\u0173\u0174\x05\x88E\x02\u0174" +
        "\u0175\x07$\x02\x02\u0175\u0178\x05\x88E\x02\u0176\u0177\x07%\x02\x02" +
        "\u0177\u0179\x05\x88E\x02\u0178\u0176\x03\x02\x02\x02\u0178\u0179\x03" +
        "\x02\x02\x02\u0179#\x03\x02\x02\x02\u017A\u0183\x07\n\x02\x02\u017B\u0180" +
        "\x05\x0E\b\x02\u017C\u017D\x07\x1D\x02\x02\u017D\u017F\x05\x0E\b\x02\u017E" +
        "\u017C\x03\x02\x02\x02\u017F\u0182\x03\x02\x02\x02\u0180\u017E\x03\x02" +
        "\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\u0184\x03\x02\x02\x02\u0182" +
        "\u0180\x03\x02\x02\x02\u0183\u017B\x03\x02\x02\x02\u0183\u0184\x03\x02" +
        "\x02\x02\u0184%\x03\x02\x02\x02\u0185\u0188\x07&\x02\x02\u0186\u0187\x07" +
        "x\x02\x02\u0187\u0189\t\x05\x02\x02\u0188\u0186\x03\x02\x02\x02\u0188" +
        "\u0189\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018B\x05\x90" +
        "I\x02\u018B\'\x03\x02\x02\x02\u018C\u018D\x07O\x02\x02\u018D\u018E\x05" +
        "\x90I\x02\u018E)\x03\x02\x02\x02\u018F\u0190\x07(\x02\x02\u0190\u0191" +
        "\x05\x90I\x02\u0191+\x03\x02\x02\x02\u0192\u0193\x07\x07\x02\x02\u0193" +
        "\u0194\x05\b\x05\x02\u0194-\x03\x02\x02\x02\u0195\u0196\x07\b\x02\x02" +
        "\u0196\u0197\x05\x88E\x02\u0197/\x03\x02\x02\x02\u0198\u0199\x07<\x02" +
        "\x02\u0199\u019A\x05\x88E\x02\u019A\u019B\x07\x1D\x02\x02\u019B\u019C" +
        "\x05\x88E\x02\u019C1\x03\x02\x02\x02\u019D\u019E\x07/\x02\x02\u019E\u019F" +
        "\x05\x92J\x02\u019F3\x03\x02\x02\x02\u01A0\u01A5\x071\x02\x02\u01A1\u01A2" +
        "\x05\x88E\x02\u01A2\u01A3\x07\x1D\x02\x02\u01A3\u01A4\x05\x88E\x02\u01A4" +
        "\u01A6\x03\x02\x02\x02\u01A5\u01A1\x03\x02\x02\x02\u01A5\u01A6\x03\x02" +
        "\x02\x02\u01A6\u01AE\x03\x02\x02\x02\u01A7\u01A8\x07$\x02\x02\u01A8\u01A9" +
        "\x05\x88E\x02\u01A9\u01AA\x07\x1D\x02\x02\u01AA\u01AB\x05\x88E\x02\u01AB" +
        "\u01AD\x03\x02\x02\x02\u01AC\u01A7\x03\x02\x02\x02\u01AD\u01B0\x03\x02" +
        "\x02\x02\u01AE\u01AC\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF" +
        "5\x03\x02\x02\x02\u01B0\u01AE\x03\x02\x02\x02\u01B1\u01B6\x072\x02\x02" +
        "\u01B2\u01B3\x05\x88E\x02\u01B3\u01B4\x07\x1D\x02\x02\u01B4\u01B5\x05" +
        "\x88E\x02\u01B5\u01B7\x03\x02\x02\x02\u01B6\u01B2\x03\x02\x02\x02\u01B6" +
        "\u01B7\x03\x02\x02\x02\u01B7\u01BF\x03\x02\x02\x02\u01B8\u01B9\x07$\x02" +
        "\x02\u01B9\u01BA\x05\x88E\x02\u01BA\u01BB\x07\x1D\x02\x02\u01BB\u01BC" +
        "\x05\x88E\x02\u01BC\u01BE\x03\x02\x02\x02\u01BD\u01B8\x03\x02\x02\x02" +
        "\u01BE\u01C1\x03\x02\x02\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF\u01C0\x03" +
        "\x02\x02\x02\u01C07\x03\x02\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C2" +
        "\u01C3\x07:\x02\x02\u01C3\u01C4\x05\x88E\x02\u01C4\u01C5\x07\x1D\x02\x02" +
        "\u01C5\u01C6\x05\x88E\x02\u01C69\x03\x02\x02\x02\u01C7\u01C8\x078\x02" +
        "\x02\u01C8\u01C9\x05\x88E\x02\u01C9\u01CA\x07\x07\x02\x02\u01CA\u01CF" +
        "\x05\b\x05\x02\u01CB\u01CC\x07\x1D\x02\x02\u01CC\u01CE\x05\b\x05\x02\u01CD" +
        "\u01CB\x03\x02\x02\x02\u01CE\u01D1\x03\x02\x02\x02\u01CF\u01CD\x03\x02" +
        "\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0;\x03\x02\x02\x02\u01D1\u01CF" +
        "\x03\x02\x02\x02\u01D2\u01D3\x078\x02\x02\u01D3\u01D4\x05\x88E\x02\u01D4" +
        "\u01D5\x07\b\x02\x02\u01D5\u01DA\x05\b\x05\x02\u01D6\u01D7\x07\x1D\x02" +
        "\x02\u01D7\u01D9\x05\b\x05\x02\u01D8\u01D6\x03\x02\x02\x02\u01D9\u01DC" +
        "\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02" +
        "\u01DB=\x03\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DD\u01DE\x075\x02" +
        "\x02\u01DE\u01DF\x05\x88E\x02\u01DF?\x03\x02\x02\x02\u01E0\u01E1\x076" +
        "\x02\x02\u01E1\u01E2\x05\x88E\x02\u01E2A\x03\x02\x02\x02\u01E3\u01E4\x07" +
        "?\x02\x02\u01E4\u01E5\x07*\x02\x02\u01E5\u01E6\x05\x88E\x02\u01E6C\x03" +
        "\x02\x02\x02\u01E7\u01E8\x07@\x02\x02\u01E8\u01E9\x07*\x02\x02\u01E9\u01EA" +
        "\x05\x88E\x02\u01EAE\x03\x02\x02\x02\u01EB\u01EC\x07M\x02\x02\u01EC\u01F3" +
        "\x05H%\x02\u01ED\u01EF\x07\x1D\x02\x02\u01EE\u01F0\x05H%\x02\u01EF\u01EE" +
        "\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02";
    jvmBasicParser._serializedATNSegment1 = "\u01F0\u01F2\x03\x02\x02\x02\u01F1\u01ED\x03\x02\x02\x02\u01F2\u01F5\x03" +
        "\x02\x02\x02\u01F3\u01F1\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4" +
        "G\x03\x02\x02\x02\u01F5\u01F3\x03\x02\x02\x02\u01F6\u01F9\x05z>\x02\u01F7" +
        "\u01F9\x07x\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F8\u01F7\x03\x02\x02" +
        "\x02\u01F9I\x03\x02\x02\x02\u01FA\u01FB\x07N\x02\x02\u01FB\u01FC\x05\x88" +
        "E\x02\u01FC\u01FD\x07\x1D\x02\x02\u01FD\u0200\x05\x88E\x02\u01FE\u01FF" +
        "\x07\x1D\x02\x02\u01FF\u0201\x05\x88E\x02\u0200\u01FE\x03\x02\x02\x02" +
        "\u0200\u0201\x03\x02\x02\x02\u0201K\x03\x02\x02\x02\u0202\u0203\x07P\x02" +
        "\x02\u0203\u0209\x05\x88E\x02\u0204\u0205\x07R\x02\x02\u0205\u0206\x05" +
        "\x88E\x02\u0206\u0207\x07\x1D\x02\x02\u0207\u0208\x05\x88E\x02\u0208\u020A" +
        "\x03\x02\x02\x02\u0209\u0204\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02" +
        "\u020AM\x03\x02\x02\x02\u020B\u020C\x07Q\x02\x02\u020C\u0212\x05\x88E" +
        "\x02\u020D\u020E\x07R\x02\x02\u020E\u020F\x05\x88E\x02\u020F\u0210\x07" +
        "\x1D\x02\x02\u0210\u0211\x05\x88E\x02\u0211\u0213\x03\x02\x02\x02\u0212" +
        "\u020D\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213O\x03\x02\x02" +
        "\x02\u0214\u0216\x07S\x02\x02\u0215\u0217\x07T\x02\x02\u0216\u0215\x03" +
        "\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218" +
        "\u0219\x05\x8AF\x02\u0219\u021A\x07\x12\x02\x02\u021A\u021B\x05\x8AF\x02" +
        "\u021B\u021C\x07\x13\x02\x02\u021C\u021D\x07\"\x02\x02\u021D\u021E\x05" +
        "\x88E\x02\u021EQ\x03\x02\x02\x02\u021F\u0220\x07V\x02\x02\u0220\u0221" +
        "\x07\x12\x02\x02\u0221\u0222\x05\x88E\x02\u0222\u0223\x07\x13\x02\x02" +
        "\u0223S\x03\x02\x02\x02\u0224\u0225\x07W\x02\x02\u0225\u0226\x07\"\x02" +
        "\x02\u0226\u0227\x05\x88E\x02\u0227U\x03\x02\x02\x02\u0228\u0229\x07X" +
        "\x02\x02\u0229\u022A\x07\"\x02\x02\u022A\u022B\x05\x88E\x02\u022BW\x03" +
        "\x02\x02\x02\u022C\u022D\x07Y\x02\x02\u022D\u022E\x07\"\x02\x02\u022E" +
        "\u022F\x05\x88E\x02\u022FY\x03\x02\x02\x02\u0230\u0231\x07Z\x02\x02\u0231" +
        "\u0232\x07\"\x02\x02\u0232\u0233\x05\x88E\x02\u0233[\x03\x02\x02\x02\u0234" +
        "\u0235\x07[\x02\x02\u0235\u0236\x07\"\x02\x02\u0236\u0237\x05\x88E\x02" +
        "\u0237]\x03\x02\x02\x02\u0238\u0239\x07\\\x02\x02\u0239\u023A\x05\x88" +
        "E\x02\u023A\u023B\x07\x1D\x02\x02\u023B\u023C\x05\x88E\x02\u023C\u023D" +
        "\x07R\x02\x02\u023D\u023E\x05\x88E\x02\u023E_\x03\x02\x02\x02\u023F\u0240" +
        "\x07]\x02\x02\u0240\u0241\x05\x88E\x02\u0241\u0242\x07\x1D\x02\x02\u0242" +
        "\u0243\x05\x88E\x02\u0243\u0244\x07R\x02\x02\u0244\u0245\x05\x88E\x02" +
        "\u0245a\x03\x02\x02\x02\u0246\u0247\x07D\x02\x02\u0247\u0248\x07\x07\x02" +
        "\x02\u0248\u0249\x05\b\x05\x02\u0249c\x03\x02\x02\x02\u024A\u024B\x07" +
        "3\x02\x02\u024B\u024C\x07z\x02\x02\u024Ce\x03\x02\x02\x02\u024D\u024E" +
        "\x074\x02\x02\u024E\u024F\x07z\x02\x02\u024Fg\x03\x02\x02\x02\u0250\u0251" +
        "\x07j\x02\x02\u0251\u0252\x05\x0E\b\x02\u0252i\x03\x02\x02\x02\u0253\u0254" +
        "\x07k\x02\x02\u0254\u0255\x05\x0E\b\x02\u0255k\x03\x02\x02\x02\u0256\u0258" +
        "\x07\x1E\x02\x02\u0257\u0259\x05\x88E\x02\u0258\u0257\x03\x02\x02\x02" +
        "\u0258\u0259\x03\x02\x02\x02\u0259m\x03\x02\x02\x02\u025A\u025F\x07_\x02" +
        "\x02\u025B\u025C\x05\x88E\x02\u025C\u025D\x07\x1D\x02\x02\u025D\u025E" +
        "\x05\x88E\x02\u025E\u0260\x03\x02\x02\x02\u025F\u025B\x03\x02\x02\x02" +
        "\u025F\u0260\x03\x02\x02\x02\u0260o\x03\x02\x02\x02\u0261\u0262\x07n\x02" +
        "\x02\u0262\u0263\x05\x88E\x02\u0263q\x03\x02\x02\x02\u0264\u0265\x07u" +
        "\x02\x02\u0265\u0266\x05\x88E\x02\u0266s\x03\x02\x02\x02\u0267\u0268\x07" +
        " \x02\x02\u0268u\x03\x02\x02\x02\u0269\u026A\x07\x05\x02\x02\u026Aw\x03" +
        "\x02\x02\x02\u026B\u026C\x07q\x02\x02\u026Cy\x03\x02\x02\x02\u026D\u026F" +
        "\t\x06\x02\x02\u026E\u026D\x03\x02\x02\x02\u026E\u026F\x03\x02\x02\x02" +
        "\u026F\u0270\x03\x02\x02\x02\u0270\u0271\t\x07\x02\x02\u0271{\x03\x02" +
        "\x02\x02\u0272\u0296\x07x\x02\x02\u0273\u0296\x05z>\x02\u0274\u0296\x05" +
        "\xCAf\x02\u0275\u0296\x05\x0E\b\x02\u0276\u0296\x05\x96L\x02\u0277\u0296" +
        "\x05\x94K\x02\u0278\u0296\x05\x98M\x02\u0279\u0296\x05\xB0Y\x02\u027A" +
        "\u0296\x05\x9AN\x02\u027B\u0296\x05\xB6\\\x02\u027C\u0296\x05\x9CO\x02" +
        "\u027D\u0296\x05\x9EP\x02\u027E\u0296\x05\xA0Q\x02\u027F\u0296\x05\xA2" +
        "R\x02\u0280\u0296\x05\xA4S\x02\u0281\u0296\x05\xA6T\x02\u0282\u0296\x05" +
        "\xA8U\x02\u0283\u0296\x05\xAAV\x02\u0284\u0296\x05\xACW\x02\u0285\u0296" +
        "\x05\xB4[\x02\u0286\u0296\x05\xAEX\x02\u0287\u0296\x05\xB2Z\x02\u0288" +
        "\u0296\x05\xB8]\x02\u0289\u0296\x05\xBA^\x02\u028A\u0296\x05\xBC_\x02" +
        "\u028B\u0296\x05\xBE`\x02\u028C\u0296\x05\xC0a\x02\u028D\u0296\x05\xC2" +
        "b\x02\u028E\u0296\x05\xC4c\x02\u028F\u0296\x05\xC6d\x02\u0290\u0296\x05" +
        "\xC8e\x02\u0291\u0292\x07\x12\x02\x02\u0292\u0293\x05\x88E\x02\u0293\u0294" +
        "\x07\x13\x02\x02\u0294\u0296\x03\x02\x02\x02\u0295\u0272\x03\x02\x02\x02" +
        "\u0295\u0273\x03\x02\x02\x02\u0295\u0274\x03\x02\x02\x02\u0295\u0275\x03" +
        "\x02\x02\x02\u0295\u0276\x03\x02\x02\x02\u0295\u0277\x03\x02\x02\x02\u0295" +
        "\u0278\x03\x02\x02\x02\u0295\u0279\x03\x02\x02\x02\u0295\u027A\x03\x02" +
        "\x02\x02\u0295\u027B\x03\x02\x02\x02\u0295\u027C\x03\x02\x02\x02\u0295" +
        "\u027D\x03\x02\x02\x02\u0295\u027E\x03\x02\x02\x02\u0295\u027F\x03\x02" +
        "\x02\x02\u0295\u0280\x03\x02\x02\x02\u0295\u0281\x03\x02\x02\x02\u0295" +
        "\u0282\x03\x02\x02\x02\u0295\u0283\x03\x02\x02\x02\u0295\u0284\x03\x02" +
        "\x02\x02\u0295\u0285\x03\x02\x02\x02\u0295\u0286\x03\x02\x02\x02\u0295" +
        "\u0287\x03\x02\x02\x02\u0295\u0288\x03\x02\x02\x02\u0295\u0289\x03\x02" +
        "\x02\x02\u0295\u028A\x03\x02\x02\x02\u0295\u028B\x03\x02\x02\x02\u0295" +
        "\u028C\x03\x02\x02\x02\u0295\u028D\x03\x02\x02\x02\u0295\u028E\x03\x02" +
        "\x02\x02\u0295\u028F\x03\x02\x02\x02\u0295\u0290\x03\x02\x02\x02\u0295" +
        "\u0291\x03\x02\x02\x02\u0296}\x03\x02\x02\x02\u0297\u0299\x07p\x02\x02" +
        "\u0298\u0297\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299\u029B\x03" +
        "\x02\x02\x02\u029A\u029C\t\x06\x02\x02\u029B\u029A\x03\x02\x02\x02\u029B" +
        "\u029C\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D\u029E\x05|?\x02" +
        "\u029E\x7F\x03\x02\x02\x02\u029F\u02A4\x05~@\x02\u02A0\u02A1\x07m\x02" +
        "\x02\u02A1\u02A3\x05~@\x02\u02A2\u02A0\x03\x02\x02\x02\u02A3\u02A6\x03" +
        "\x02\x02\x02\u02A4\u02A2\x03\x02\x02\x02\u02A4\u02A5\x03\x02\x02\x02\u02A5" +
        "\x81\x03\x02\x02\x02\u02A6\u02A4\x03\x02\x02\x02\u02A7\u02AC\x05\x80A" +
        "\x02\u02A8\u02A9\t\b\x02\x02\u02A9\u02AB\x05\x80A\x02\u02AA\u02A8\x03" +
        "\x02\x02\x02\u02AB\u02AE\x03\x02\x02\x02\u02AC\u02AA\x03\x02\x02\x02\u02AC" +
        "\u02AD\x03\x02\x02\x02\u02AD\x83\x03\x02\x02\x02\u02AE\u02AC\x03\x02\x02" +
        "\x02\u02AF\u02B4\x05\x82B\x02\u02B0\u02B1\t\x06\x02\x02\u02B1\u02B3\x05" +
        "\x82B\x02\u02B2\u02B0\x03\x02\x02\x02\u02B3\u02B6\x03\x02\x02\x02\u02B4" +
        "\u02B2\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\x85\x03\x02\x02" +
        "\x02\u02B6\u02B4\x03\x02\x02\x02\u02B7\u02BB\x05\x84C\x02\u02B8\u02B9" +
        "\x05\x1A\x0E\x02\u02B9\u02BA\x05\x84C\x02\u02BA\u02BC\x03\x02\x02\x02" +
        "\u02BB\u02B8\x03\x02\x02\x02\u02BB\u02BC\x03\x02\x02\x02\u02BC\x87\x03" +
        "\x02\x02\x02\u02BD\u02C7\x05|?\x02\u02BE\u02C3\x05\x86D\x02\u02BF\u02C0" +
        "\t\t\x02\x02\u02C0\u02C2\x05\x86D\x02\u02C1\u02BF\x03\x02\x02\x02\u02C2" +
        "\u02C5\x03\x02\x02\x02\u02C3\u02C1\x03\x02\x02\x02\u02C3\u02C4\x03\x02" +
        "\x02\x02\u02C4\u02C7\x03\x02\x02\x02\u02C5\u02C3\x03\x02\x02\x02\u02C6" +
        "\u02BD\x03\x02\x02\x02\u02C6\u02BE\x03\x02\x02\x02\u02C7\x89\x03\x02\x02" +
        "\x02\u02C8\u02CA\x05\x8CG\x02\u02C9\u02CB\x05\x8EH\x02\u02CA\u02C9\x03" +
        "\x02\x02\x02\u02CA\u02CB\x03\x02\x02\x02\u02CB\x8B\x03\x02\x02\x02\u02CC" +
        "\u02D0\x07y\x02\x02\u02CD\u02CF\t\n\x02\x02\u02CE\u02CD\x03\x02\x02\x02" +
        "\u02CF\u02D2\x03\x02\x02\x02\u02D0\u02CE\x03\x02\x02\x02\u02D0\u02D1\x03" +
        "\x02\x02\x02\u02D1\x8D\x03\x02\x02\x02\u02D2\u02D0\x03\x02\x02\x02\u02D3" +
        "\u02D4\t\v\x02\x02\u02D4\x8F\x03\x02\x02\x02\u02D5\u02DA\x05\x0E\b\x02" +
        "\u02D6\u02D7\x07\x1D\x02\x02\u02D7\u02D9\x05\x0E\b\x02\u02D8\u02D6\x03" +
        "\x02\x02\x02\u02D9\u02DC\x03\x02\x02\x02\u02DA\u02D8\x03\x02\x02\x02\u02DA" +
        "\u02DB\x03\x02\x02\x02\u02DB\x91\x03\x02\x02\x02\u02DC\u02DA\x03\x02\x02" +
        "\x02\u02DD\u02E2\x05\x88E\x02\u02DE\u02DF\x07\x1D\x02\x02\u02DF\u02E1" +
        "\x05\x88E\x02\u02E0\u02DE\x03\x02\x02\x02\u02E1\u02E4\x03\x02\x02\x02" +
        "\u02E2\u02E0\x03\x02\x02\x02\u02E2\u02E3\x03\x02\x02\x02\u02E3\x93\x03" +
        "\x02\x02\x02\u02E4\u02E2\x03\x02\x02\x02\u02E5\u02E6\x07)\x02\x02\u02E6" +
        "\u02E7\x07\x12\x02\x02\u02E7\u02E8\x05\x88E\x02\u02E8\u02E9\x07\x13\x02" +
        "\x02\u02E9\x95\x03\x02\x02\x02\u02EA\u02EB\x07\r\x02\x02\u02EB\u02EC\x07" +
        "\x12\x02\x02\u02EC\u02ED\x05\x88E\x02\u02ED\u02EE\x07\x13\x02\x02\u02EE" +
        "\x97\x03\x02\x02\x02\u02EF\u02F0\x07.\x02\x02\u02F0\u02F1\x07\x12\x02" +
        "\x02\u02F1\u02F2\x05\x88E\x02\u02F2\u02F3\x07\x13\x02\x02\u02F3\x99\x03" +
        "\x02\x02\x02\u02F4\u02F5\x070\x02\x02\u02F5\u02F6\x07\x12\x02\x02\u02F6" +
        "\u02F7\x05\x88E\x02\u02F7\u02F8\x07\x13\x02\x02\u02F8\x9B\x03\x02\x02" +
        "\x02\u02F9\u02FA\x07\x0E\x02\x02\u02FA\u02FB\x07\x12\x02\x02\u02FB\u02FC" +
        "\x05\x88E\x02\u02FC\u02FD\x07\x1D\x02\x02\u02FD\u02FE\x05\x88E\x02\u02FE" +
        "\u02FF\x07\x1D\x02\x02\u02FF\u0300\x05\x88E\x02\u0300\u0301\x07\x13\x02" +
        "\x02\u0301\x9D\x03\x02\x02\x02\u0302\u0303\x079\x02\x02\u0303\u0304\x07" +
        "\x12\x02\x02\u0304\u0305\x05\x88E\x02\u0305\u0306\x07\x13\x02\x02\u0306" +
        "\x9F\x03\x02\x02\x02\u0307\u0308\x07;\x02\x02\u0308\u0309\x07\x12\x02" +
        "\x02\u0309\u030A\x05\x88E\x02\u030A\u030B\x07\x13\x02\x02\u030B\xA1\x03" +
        "\x02\x02\x02\u030C\u030D\x07=\x02\x02\u030D\u030E\x07\x12\x02\x02\u030E" +
        "\u030F\x05\x88E\x02\u030F\u0310\x07\x13\x02\x02\u0310\xA3\x03\x02\x02" +
        "\x02\u0311\u0312\x07E\x02\x02\u0312\u0313\x07\x12\x02\x02\u0313\u0314" +
        "\x05\x88E\x02\u0314\u0315\x07\x13\x02\x02\u0315\xA5\x03\x02\x02\x02\u0316" +
        "\u0317\x07F\x02\x02\u0317\u0318\x07\x12\x02\x02\u0318\u0319\x05\x88E\x02" +
        "\u0319\u031A\x07\x13\x02\x02\u031A\xA7\x03\x02\x02\x02\u031B\u031C\x07" +
        "G\x02\x02\u031C\u031D\x07\x12\x02\x02\u031D\u031E\x05\x88E\x02\u031E\u031F" +
        "\x07\x13\x02\x02\u031F\xA9\x03\x02\x02\x02\u0320\u0321\x07H\x02\x02\u0321" +
        "\u0322\x07\x12\x02\x02\u0322\u0323\x05\x88E\x02\u0323\u0324\x07\x13\x02" +
        "\x02\u0324\xAB\x03\x02\x02\x02\u0325\u0326\x07\x0F\x02\x02\u0326\u0327" +
        "\x07\x12\x02\x02\u0327\u0328\x05\x88E\x02\u0328\u0329\x07\x1D\x02\x02" +
        "\u0329\u032A\x05\x88E\x02\u032A\u032B\x07\x13\x02\x02\u032B\xAD\x03\x02" +
        "\x02\x02\u032C\u032D\x07\x10\x02\x02\u032D\u032E\x07\x12\x02\x02\u032E" +
        "\u032F\x05\x88E\x02\u032F\u0330\x07\x1D\x02\x02\u0330\u0331\x05\x88E\x02" +
        "\u0331\u0332\x07\x13\x02\x02\u0332\xAF\x03\x02\x02\x02\u0333\u0334\x07" +
        "\x11\x02\x02\u0334\u0335\x07\x12\x02\x02\u0335\u0336\x05\x88E\x02\u0336" +
        "\u0337\x07\x13\x02\x02\u0337\xB1\x03\x02\x02\x02\u0338\u0339\x07T\x02" +
        "\x02\u0339\u033A\x05\x8AF\x02\u033A\u033B\x07\x12\x02\x02\u033B\u033C" +
        "\x05\x88E\x02\u033C\u033D\x07\x13\x02\x02\u033D\xB3\x03\x02\x02\x02\u033E" +
        "\u033F\x07U\x02\x02\u033F\u0340\x07\x12\x02\x02\u0340\u0341\x05\x88E\x02" +
        "\u0341\u0342\x07\x13\x02\x02\u0342\xB5\x03\x02\x02\x02\u0343\u0344\x07" +
        "^\x02\x02\u0344\u0345\x07\x12\x02\x02\u0345\u0346\x05\x88E\x02\u0346\u0347" +
        "\x07\x1D\x02\x02\u0347\u0348\x05\x88E\x02\u0348\u0349\x07\x13\x02\x02" +
        "\u0349\xB7\x03\x02\x02\x02\u034A\u034B\x07a\x02\x02\u034B\u034C\x07\x12" +
        "\x02\x02\u034C\u034D\x05\x88E\x02\u034D\u034E\x07\x13\x02\x02\u034E\xB9" +
        "\x03\x02\x02\x02\u034F\u0350\x07b\x02\x02\u0350\u0351\x07\x12\x02\x02" +
        "\u0351\u0352\x05\x88E\x02\u0352\u0353\x07\x13\x02\x02\u0353\xBB\x03\x02" +
        "\x02\x02\u0354\u0355\x07c\x02\x02\u0355\u0356\x07\x12\x02\x02\u0356\u0357" +
        "\x05\x88E\x02\u0357\u0358\x07\x13\x02\x02\u0358\xBD\x03\x02\x02\x02\u0359" +
        "\u035A\x07d\x02\x02\u035A\u035B\x07\x12\x02\x02\u035B\u035C\x05\x88E\x02" +
        "\u035C\u035D\x07\x13\x02\x02\u035D\xBF\x03\x02\x02\x02\u035E\u035F\x07" +
        "e\x02\x02\u035F\u0360\x07\x12\x02\x02\u0360\u0361\x05\x88E\x02\u0361\u0362" +
        "\x07\x13\x02\x02\u0362\xC1\x03\x02\x02\x02\u0363\u0364\x07f\x02\x02\u0364" +
        "\u0365\x07\x12\x02\x02\u0365\u0366\x05\x88E\x02\u0366\u0367\x07\x13\x02" +
        "\x02\u0367\xC3\x03\x02\x02\x02\u0368\u0369\x07g\x02\x02\u0369\u036A\x07" +
        "\x12\x02\x02\u036A\u036B\x05\x88E\x02\u036B\u036C\x07\x13\x02\x02\u036C" +
        "\xC5\x03\x02\x02\x02\u036D\u036E\x07h\x02\x02\u036E\u036F\x07\x12\x02" +
        "\x02\u036F\u0370\x05\x88E\x02\u0370\u0371\x07\x13\x02\x02\u0371\xC7\x03" +
        "\x02\x02\x02\u0372\u0373\x07i\x02\x02\u0373\u0374\x07\x12\x02\x02\u0374" +
        "\u0375\x05\x88E\x02\u0375\u0376\x07\x13\x02\x02\u0376\xC9\x03\x02\x02" +
        "\x02\u0377\u0378\x07V\x02\x02\u0378\u0379\x07\x12\x02\x02\u0379\u037A" +
        "\x05\x88E\x02\u037A\u037B\x07\x13\x02\x02\u037B\xCB\x03\x02\x02\x025\xCF" +
        "\xD7\xDB\xDF\xE6\xEA\u011D\u0126\u012B\u0130\u0134\u013B\u0151\u0159\u015D" +
        "\u0167\u016C\u016E\u0178\u0180\u0183\u0188\u01A5\u01AE\u01B6\u01BF\u01CF" +
        "\u01DA\u01EF\u01F3\u01F8\u0200\u0209\u0212\u0216\u0258\u025F\u026E\u0295" +
        "\u0298\u029B\u02A4\u02AC\u02B4\u02BB\u02C3\u02C6\u02CA\u02D0\u02DA\u02E2";
    jvmBasicParser._serializedATN = Utils.join([
        jvmBasicParser._serializedATNSegment0,
        jvmBasicParser._serializedATNSegment1,
    ], "");
    return jvmBasicParser;
}(Parser_1.Parser));
exports.jvmBasicParser = jvmBasicParser;
var ProgContext = /** @class */ (function (_super) {
    __extends(ProgContext, _super);
    function ProgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgContext.prototype.EOF = function () { return this.getToken(jvmBasicParser.EOF, 0); };
    ProgContext.prototype.line = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LineContext);
        }
        else {
            return this.getRuleContext(i, LineContext);
        }
    };
    Object.defineProperty(ProgContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_prog; },
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
    LineContext.prototype.linenumber = function () {
        return this.tryGetRuleContext(0, LinenumberContext);
    };
    LineContext.prototype.COMMENT = function () { return this.tryGetToken(jvmBasicParser.COMMENT, 0); };
    LineContext.prototype.REM = function () { return this.tryGetToken(jvmBasicParser.REM, 0); };
    LineContext.prototype.amprstmt = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AmprstmtContext);
        }
        else {
            return this.getRuleContext(i, AmprstmtContext);
        }
    };
    LineContext.prototype.COLON = function (i) {
        if (i === undefined) {
            return this.getTokens(jvmBasicParser.COLON);
        }
        else {
            return this.getToken(jvmBasicParser.COLON, i);
        }
    };
    Object.defineProperty(LineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_line; },
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
var AmperoperContext = /** @class */ (function (_super) {
    __extends(AmperoperContext, _super);
    function AmperoperContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AmperoperContext.prototype.AMPERSAND = function () { return this.getToken(jvmBasicParser.AMPERSAND, 0); };
    Object.defineProperty(AmperoperContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_amperoper; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AmperoperContext.prototype.enterRule = function (listener) {
        if (listener.enterAmperoper) {
            listener.enterAmperoper(this);
        }
    };
    // @Override
    AmperoperContext.prototype.exitRule = function (listener) {
        if (listener.exitAmperoper) {
            listener.exitAmperoper(this);
        }
    };
    // @Override
    AmperoperContext.prototype.accept = function (visitor) {
        if (visitor.visitAmperoper) {
            return visitor.visitAmperoper(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AmperoperContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AmperoperContext = AmperoperContext;
var LinenumberContext = /** @class */ (function (_super) {
    __extends(LinenumberContext, _super);
    function LinenumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LinenumberContext.prototype.NUMBER = function () { return this.getToken(jvmBasicParser.NUMBER, 0); };
    Object.defineProperty(LinenumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_linenumber; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LinenumberContext.prototype.enterRule = function (listener) {
        if (listener.enterLinenumber) {
            listener.enterLinenumber(this);
        }
    };
    // @Override
    LinenumberContext.prototype.exitRule = function (listener) {
        if (listener.exitLinenumber) {
            listener.exitLinenumber(this);
        }
    };
    // @Override
    LinenumberContext.prototype.accept = function (visitor) {
        if (visitor.visitLinenumber) {
            return visitor.visitLinenumber(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LinenumberContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LinenumberContext = LinenumberContext;
var AmprstmtContext = /** @class */ (function (_super) {
    __extends(AmprstmtContext, _super);
    function AmprstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AmprstmtContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    AmprstmtContext.prototype.amperoper = function () {
        return this.tryGetRuleContext(0, AmperoperContext);
    };
    AmprstmtContext.prototype.COMMENT = function () { return this.tryGetToken(jvmBasicParser.COMMENT, 0); };
    AmprstmtContext.prototype.REM = function () { return this.tryGetToken(jvmBasicParser.REM, 0); };
    Object.defineProperty(AmprstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_amprstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AmprstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterAmprstmt) {
            listener.enterAmprstmt(this);
        }
    };
    // @Override
    AmprstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitAmprstmt) {
            listener.exitAmprstmt(this);
        }
    };
    // @Override
    AmprstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitAmprstmt) {
            return visitor.visitAmprstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AmprstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AmprstmtContext = AmprstmtContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.CLS = function () { return this.tryGetToken(jvmBasicParser.CLS, 0); };
    StatementContext.prototype.LOAD = function () { return this.tryGetToken(jvmBasicParser.LOAD, 0); };
    StatementContext.prototype.SAVE = function () { return this.tryGetToken(jvmBasicParser.SAVE, 0); };
    StatementContext.prototype.TRACE = function () { return this.tryGetToken(jvmBasicParser.TRACE, 0); };
    StatementContext.prototype.NOTRACE = function () { return this.tryGetToken(jvmBasicParser.NOTRACE, 0); };
    StatementContext.prototype.FLASH = function () { return this.tryGetToken(jvmBasicParser.FLASH, 0); };
    StatementContext.prototype.INVERSE = function () { return this.tryGetToken(jvmBasicParser.INVERSE, 0); };
    StatementContext.prototype.GR = function () { return this.tryGetToken(jvmBasicParser.GR, 0); };
    StatementContext.prototype.NORMAL = function () { return this.tryGetToken(jvmBasicParser.NORMAL, 0); };
    StatementContext.prototype.SHLOAD = function () { return this.tryGetToken(jvmBasicParser.SHLOAD, 0); };
    StatementContext.prototype.CLEAR = function () { return this.tryGetToken(jvmBasicParser.CLEAR, 0); };
    StatementContext.prototype.RUN = function () { return this.tryGetToken(jvmBasicParser.RUN, 0); };
    StatementContext.prototype.STOP = function () { return this.tryGetToken(jvmBasicParser.STOP, 0); };
    StatementContext.prototype.TEXT = function () { return this.tryGetToken(jvmBasicParser.TEXT, 0); };
    StatementContext.prototype.HOME = function () { return this.tryGetToken(jvmBasicParser.HOME, 0); };
    StatementContext.prototype.HGR = function () { return this.tryGetToken(jvmBasicParser.HGR, 0); };
    StatementContext.prototype.HGR2 = function () { return this.tryGetToken(jvmBasicParser.HGR2, 0); };
    StatementContext.prototype.endstmt = function () {
        return this.tryGetRuleContext(0, EndstmtContext);
    };
    StatementContext.prototype.returnstmt = function () {
        return this.tryGetRuleContext(0, ReturnstmtContext);
    };
    StatementContext.prototype.restorestmt = function () {
        return this.tryGetRuleContext(0, RestorestmtContext);
    };
    StatementContext.prototype.amptstmt = function () {
        return this.tryGetRuleContext(0, AmptstmtContext);
    };
    StatementContext.prototype.popstmt = function () {
        return this.tryGetRuleContext(0, PopstmtContext);
    };
    StatementContext.prototype.liststmt = function () {
        return this.tryGetRuleContext(0, ListstmtContext);
    };
    StatementContext.prototype.storestmt = function () {
        return this.tryGetRuleContext(0, StorestmtContext);
    };
    StatementContext.prototype.getstmt = function () {
        return this.tryGetRuleContext(0, GetstmtContext);
    };
    StatementContext.prototype.recallstmt = function () {
        return this.tryGetRuleContext(0, RecallstmtContext);
    };
    StatementContext.prototype.nextstmt = function () {
        return this.tryGetRuleContext(0, NextstmtContext);
    };
    StatementContext.prototype.instmt = function () {
        return this.tryGetRuleContext(0, InstmtContext);
    };
    StatementContext.prototype.prstmt = function () {
        return this.tryGetRuleContext(0, PrstmtContext);
    };
    StatementContext.prototype.onerrstmt = function () {
        return this.tryGetRuleContext(0, OnerrstmtContext);
    };
    StatementContext.prototype.hlinstmt = function () {
        return this.tryGetRuleContext(0, HlinstmtContext);
    };
    StatementContext.prototype.vlinstmt = function () {
        return this.tryGetRuleContext(0, VlinstmtContext);
    };
    StatementContext.prototype.colorstmt = function () {
        return this.tryGetRuleContext(0, ColorstmtContext);
    };
    StatementContext.prototype.speedstmt = function () {
        return this.tryGetRuleContext(0, SpeedstmtContext);
    };
    StatementContext.prototype.scalestmt = function () {
        return this.tryGetRuleContext(0, ScalestmtContext);
    };
    StatementContext.prototype.rotstmt = function () {
        return this.tryGetRuleContext(0, RotstmtContext);
    };
    StatementContext.prototype.hcolorstmt = function () {
        return this.tryGetRuleContext(0, HcolorstmtContext);
    };
    StatementContext.prototype.himemstmt = function () {
        return this.tryGetRuleContext(0, HimemstmtContext);
    };
    StatementContext.prototype.lomemstmt = function () {
        return this.tryGetRuleContext(0, LomemstmtContext);
    };
    StatementContext.prototype.printstmt1 = function () {
        return this.tryGetRuleContext(0, Printstmt1Context);
    };
    StatementContext.prototype.pokestmt = function () {
        return this.tryGetRuleContext(0, PokestmtContext);
    };
    StatementContext.prototype.plotstmt = function () {
        return this.tryGetRuleContext(0, PlotstmtContext);
    };
    StatementContext.prototype.ongotostmt = function () {
        return this.tryGetRuleContext(0, OngotostmtContext);
    };
    StatementContext.prototype.ongosubstmt = function () {
        return this.tryGetRuleContext(0, OngosubstmtContext);
    };
    StatementContext.prototype.ifstmt = function () {
        return this.tryGetRuleContext(0, IfstmtContext);
    };
    StatementContext.prototype.forstmt1 = function () {
        return this.tryGetRuleContext(0, Forstmt1Context);
    };
    StatementContext.prototype.forstmt2 = function () {
        return this.tryGetRuleContext(0, Forstmt2Context);
    };
    StatementContext.prototype.inputstmt = function () {
        return this.tryGetRuleContext(0, InputstmtContext);
    };
    StatementContext.prototype.tabstmt = function () {
        return this.tryGetRuleContext(0, TabstmtContext);
    };
    StatementContext.prototype.dimstmt = function () {
        return this.tryGetRuleContext(0, DimstmtContext);
    };
    StatementContext.prototype.gotostmt = function () {
        return this.tryGetRuleContext(0, GotostmtContext);
    };
    StatementContext.prototype.gosubstmt = function () {
        return this.tryGetRuleContext(0, GosubstmtContext);
    };
    StatementContext.prototype.callstmt = function () {
        return this.tryGetRuleContext(0, CallstmtContext);
    };
    StatementContext.prototype.readstmt = function () {
        return this.tryGetRuleContext(0, ReadstmtContext);
    };
    StatementContext.prototype.hplotstmt = function () {
        return this.tryGetRuleContext(0, HplotstmtContext);
    };
    StatementContext.prototype.vplotstmt = function () {
        return this.tryGetRuleContext(0, VplotstmtContext);
    };
    StatementContext.prototype.vtabstmnt = function () {
        return this.tryGetRuleContext(0, VtabstmntContext);
    };
    StatementContext.prototype.htabstmnt = function () {
        return this.tryGetRuleContext(0, HtabstmntContext);
    };
    StatementContext.prototype.waitstmt = function () {
        return this.tryGetRuleContext(0, WaitstmtContext);
    };
    StatementContext.prototype.datastmt = function () {
        return this.tryGetRuleContext(0, DatastmtContext);
    };
    StatementContext.prototype.xdrawstmt = function () {
        return this.tryGetRuleContext(0, XdrawstmtContext);
    };
    StatementContext.prototype.drawstmt = function () {
        return this.tryGetRuleContext(0, DrawstmtContext);
    };
    StatementContext.prototype.defstmt = function () {
        return this.tryGetRuleContext(0, DefstmtContext);
    };
    StatementContext.prototype.letstmt = function () {
        return this.tryGetRuleContext(0, LetstmtContext);
    };
    StatementContext.prototype.includestmt = function () {
        return this.tryGetRuleContext(0, IncludestmtContext);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_statement; },
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
var VardeclContext = /** @class */ (function (_super) {
    __extends(VardeclContext, _super);
    function VardeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VardeclContext.prototype.var = function () {
        return this.getRuleContext(0, VarContext);
    };
    VardeclContext.prototype.LPAREN = function (i) {
        if (i === undefined) {
            return this.getTokens(jvmBasicParser.LPAREN);
        }
        else {
            return this.getToken(jvmBasicParser.LPAREN, i);
        }
    };
    VardeclContext.prototype.exprlist = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprlistContext);
        }
        else {
            return this.getRuleContext(i, ExprlistContext);
        }
    };
    VardeclContext.prototype.RPAREN = function (i) {
        if (i === undefined) {
            return this.getTokens(jvmBasicParser.RPAREN);
        }
        else {
            return this.getToken(jvmBasicParser.RPAREN, i);
        }
    };
    Object.defineProperty(VardeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_vardecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VardeclContext.prototype.enterRule = function (listener) {
        if (listener.enterVardecl) {
            listener.enterVardecl(this);
        }
    };
    // @Override
    VardeclContext.prototype.exitRule = function (listener) {
        if (listener.exitVardecl) {
            listener.exitVardecl(this);
        }
    };
    // @Override
    VardeclContext.prototype.accept = function (visitor) {
        if (visitor.visitVardecl) {
            return visitor.visitVardecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VardeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VardeclContext = VardeclContext;
var Printstmt1Context = /** @class */ (function (_super) {
    __extends(Printstmt1Context, _super);
    function Printstmt1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Printstmt1Context.prototype.PRINT = function () { return this.tryGetToken(jvmBasicParser.PRINT, 0); };
    Printstmt1Context.prototype.QUESTION = function () { return this.tryGetToken(jvmBasicParser.QUESTION, 0); };
    Printstmt1Context.prototype.printlist = function () {
        return this.tryGetRuleContext(0, PrintlistContext);
    };
    Object.defineProperty(Printstmt1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_printstmt1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Printstmt1Context.prototype.enterRule = function (listener) {
        if (listener.enterPrintstmt1) {
            listener.enterPrintstmt1(this);
        }
    };
    // @Override
    Printstmt1Context.prototype.exitRule = function (listener) {
        if (listener.exitPrintstmt1) {
            listener.exitPrintstmt1(this);
        }
    };
    // @Override
    Printstmt1Context.prototype.accept = function (visitor) {
        if (visitor.visitPrintstmt1) {
            return visitor.visitPrintstmt1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Printstmt1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Printstmt1Context = Printstmt1Context;
var PrintlistContext = /** @class */ (function (_super) {
    __extends(PrintlistContext, _super);
    function PrintlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrintlistContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    PrintlistContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(jvmBasicParser.COMMA);
        }
        else {
            return this.getToken(jvmBasicParser.COMMA, i);
        }
    };
    PrintlistContext.prototype.SEMICOLON = function (i) {
        if (i === undefined) {
            return this.getTokens(jvmBasicParser.SEMICOLON);
        }
        else {
            return this.getToken(jvmBasicParser.SEMICOLON, i);
        }
    };
    Object.defineProperty(PrintlistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_printlist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrintlistContext.prototype.enterRule = function (listener) {
        if (listener.enterPrintlist) {
            listener.enterPrintlist(this);
        }
    };
    // @Override
    PrintlistContext.prototype.exitRule = function (listener) {
        if (listener.exitPrintlist) {
            listener.exitPrintlist(this);
        }
    };
    // @Override
    PrintlistContext.prototype.accept = function (visitor) {
        if (visitor.visitPrintlist) {
            return visitor.visitPrintlist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrintlistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrintlistContext = PrintlistContext;
var GetstmtContext = /** @class */ (function (_super) {
    __extends(GetstmtContext, _super);
    function GetstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GetstmtContext.prototype.GET = function () { return this.getToken(jvmBasicParser.GET, 0); };
    GetstmtContext.prototype.exprlist = function () {
        return this.getRuleContext(0, ExprlistContext);
    };
    Object.defineProperty(GetstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_getstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GetstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterGetstmt) {
            listener.enterGetstmt(this);
        }
    };
    // @Override
    GetstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitGetstmt) {
            listener.exitGetstmt(this);
        }
    };
    // @Override
    GetstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitGetstmt) {
            return visitor.visitGetstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GetstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GetstmtContext = GetstmtContext;
var LetstmtContext = /** @class */ (function (_super) {
    __extends(LetstmtContext, _super);
    function LetstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LetstmtContext.prototype.variableassignment = function () {
        return this.getRuleContext(0, VariableassignmentContext);
    };
    LetstmtContext.prototype.LET = function () { return this.tryGetToken(jvmBasicParser.LET, 0); };
    Object.defineProperty(LetstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_letstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LetstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterLetstmt) {
            listener.enterLetstmt(this);
        }
    };
    // @Override
    LetstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitLetstmt) {
            listener.exitLetstmt(this);
        }
    };
    // @Override
    LetstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitLetstmt) {
            return visitor.visitLetstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LetstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LetstmtContext = LetstmtContext;
var VariableassignmentContext = /** @class */ (function (_super) {
    __extends(VariableassignmentContext, _super);
    function VariableassignmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableassignmentContext.prototype.vardecl = function () {
        return this.getRuleContext(0, VardeclContext);
    };
    VariableassignmentContext.prototype.EQ = function () { return this.getToken(jvmBasicParser.EQ, 0); };
    VariableassignmentContext.prototype.exprlist = function () {
        return this.getRuleContext(0, ExprlistContext);
    };
    Object.defineProperty(VariableassignmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_variableassignment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableassignmentContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableassignment) {
            listener.enterVariableassignment(this);
        }
    };
    // @Override
    VariableassignmentContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableassignment) {
            listener.exitVariableassignment(this);
        }
    };
    // @Override
    VariableassignmentContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableassignment) {
            return visitor.visitVariableassignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableassignmentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableassignmentContext = VariableassignmentContext;
var RelopContext = /** @class */ (function (_super) {
    __extends(RelopContext, _super);
    function RelopContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RelopContext.prototype.GTE = function () { return this.tryGetToken(jvmBasicParser.GTE, 0); };
    RelopContext.prototype.GT = function () { return this.tryGetToken(jvmBasicParser.GT, 0); };
    RelopContext.prototype.EQ = function () { return this.tryGetToken(jvmBasicParser.EQ, 0); };
    RelopContext.prototype.LTE = function () { return this.tryGetToken(jvmBasicParser.LTE, 0); };
    RelopContext.prototype.LT = function () { return this.tryGetToken(jvmBasicParser.LT, 0); };
    RelopContext.prototype.neq = function () {
        return this.tryGetRuleContext(0, NeqContext);
    };
    Object.defineProperty(RelopContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_relop; },
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
var NeqContext = /** @class */ (function (_super) {
    __extends(NeqContext, _super);
    function NeqContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NeqContext.prototype.LT = function () { return this.getToken(jvmBasicParser.LT, 0); };
    NeqContext.prototype.GT = function () { return this.getToken(jvmBasicParser.GT, 0); };
    Object.defineProperty(NeqContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_neq; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NeqContext.prototype.enterRule = function (listener) {
        if (listener.enterNeq) {
            listener.enterNeq(this);
        }
    };
    // @Override
    NeqContext.prototype.exitRule = function (listener) {
        if (listener.exitNeq) {
            listener.exitNeq(this);
        }
    };
    // @Override
    NeqContext.prototype.accept = function (visitor) {
        if (visitor.visitNeq) {
            return visitor.visitNeq(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NeqContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NeqContext = NeqContext;
var IfstmtContext = /** @class */ (function (_super) {
    __extends(IfstmtContext, _super);
    function IfstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfstmtContext.prototype.IF = function () { return this.getToken(jvmBasicParser.IF, 0); };
    IfstmtContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    IfstmtContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    IfstmtContext.prototype.linenumber = function () {
        return this.tryGetRuleContext(0, LinenumberContext);
    };
    IfstmtContext.prototype.THEN = function () { return this.tryGetToken(jvmBasicParser.THEN, 0); };
    Object.defineProperty(IfstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_ifstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IfstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterIfstmt) {
            listener.enterIfstmt(this);
        }
    };
    // @Override
    IfstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitIfstmt) {
            listener.exitIfstmt(this);
        }
    };
    // @Override
    IfstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitIfstmt) {
            return visitor.visitIfstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IfstmtContext = IfstmtContext;
var Forstmt1Context = /** @class */ (function (_super) {
    __extends(Forstmt1Context, _super);
    function Forstmt1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Forstmt1Context.prototype.FOR = function () { return this.getToken(jvmBasicParser.FOR, 0); };
    Forstmt1Context.prototype.vardecl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VardeclContext);
        }
        else {
            return this.getRuleContext(i, VardeclContext);
        }
    };
    Forstmt1Context.prototype.EQ = function () { return this.getToken(jvmBasicParser.EQ, 0); };
    Forstmt1Context.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Forstmt1Context.prototype.TO = function () { return this.getToken(jvmBasicParser.TO, 0); };
    Forstmt1Context.prototype.STEP = function () { return this.tryGetToken(jvmBasicParser.STEP, 0); };
    Forstmt1Context.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    Forstmt1Context.prototype.NEXT = function () { return this.tryGetToken(jvmBasicParser.NEXT, 0); };
    Object.defineProperty(Forstmt1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_forstmt1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Forstmt1Context.prototype.enterRule = function (listener) {
        if (listener.enterForstmt1) {
            listener.enterForstmt1(this);
        }
    };
    // @Override
    Forstmt1Context.prototype.exitRule = function (listener) {
        if (listener.exitForstmt1) {
            listener.exitForstmt1(this);
        }
    };
    // @Override
    Forstmt1Context.prototype.accept = function (visitor) {
        if (visitor.visitForstmt1) {
            return visitor.visitForstmt1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Forstmt1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Forstmt1Context = Forstmt1Context;
var Forstmt2Context = /** @class */ (function (_super) {
    __extends(Forstmt2Context, _super);
    function Forstmt2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Forstmt2Context.prototype.FOR = function () { return this.getToken(jvmBasicParser.FOR, 0); };
    Forstmt2Context.prototype.vardecl = function () {
        return this.getRuleContext(0, VardeclContext);
    };
    Forstmt2Context.prototype.EQ = function () { return this.getToken(jvmBasicParser.EQ, 0); };
    Forstmt2Context.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Forstmt2Context.prototype.TO = function () { return this.getToken(jvmBasicParser.TO, 0); };
    Forstmt2Context.prototype.STEP = function () { return this.tryGetToken(jvmBasicParser.STEP, 0); };
    Object.defineProperty(Forstmt2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_forstmt2; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Forstmt2Context.prototype.enterRule = function (listener) {
        if (listener.enterForstmt2) {
            listener.enterForstmt2(this);
        }
    };
    // @Override
    Forstmt2Context.prototype.exitRule = function (listener) {
        if (listener.exitForstmt2) {
            listener.exitForstmt2(this);
        }
    };
    // @Override
    Forstmt2Context.prototype.accept = function (visitor) {
        if (visitor.visitForstmt2) {
            return visitor.visitForstmt2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Forstmt2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Forstmt2Context = Forstmt2Context;
var NextstmtContext = /** @class */ (function (_super) {
    __extends(NextstmtContext, _super);
    function NextstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NextstmtContext.prototype.NEXT = function () { return this.getToken(jvmBasicParser.NEXT, 0); };
    NextstmtContext.prototype.vardecl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VardeclContext);
        }
        else {
            return this.getRuleContext(i, VardeclContext);
        }
    };
    NextstmtContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(jvmBasicParser.COMMA);
        }
        else {
            return this.getToken(jvmBasicParser.COMMA, i);
        }
    };
    Object.defineProperty(NextstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_nextstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NextstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterNextstmt) {
            listener.enterNextstmt(this);
        }
    };
    // @Override
    NextstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitNextstmt) {
            listener.exitNextstmt(this);
        }
    };
    // @Override
    NextstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitNextstmt) {
            return visitor.visitNextstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NextstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NextstmtContext = NextstmtContext;
var InputstmtContext = /** @class */ (function (_super) {
    __extends(InputstmtContext, _super);
    function InputstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InputstmtContext.prototype.INPUT = function () { return this.getToken(jvmBasicParser.INPUT, 0); };
    InputstmtContext.prototype.varlist = function () {
        return this.getRuleContext(0, VarlistContext);
    };
    InputstmtContext.prototype.STRINGLITERAL = function () { return this.tryGetToken(jvmBasicParser.STRINGLITERAL, 0); };
    InputstmtContext.prototype.COMMA = function () { return this.tryGetToken(jvmBasicParser.COMMA, 0); };
    InputstmtContext.prototype.SEMICOLON = function () { return this.tryGetToken(jvmBasicParser.SEMICOLON, 0); };
    Object.defineProperty(InputstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_inputstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InputstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterInputstmt) {
            listener.enterInputstmt(this);
        }
    };
    // @Override
    InputstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitInputstmt) {
            listener.exitInputstmt(this);
        }
    };
    // @Override
    InputstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitInputstmt) {
            return visitor.visitInputstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InputstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InputstmtContext = InputstmtContext;
var ReadstmtContext = /** @class */ (function (_super) {
    __extends(ReadstmtContext, _super);
    function ReadstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReadstmtContext.prototype.READ = function () { return this.getToken(jvmBasicParser.READ, 0); };
    ReadstmtContext.prototype.varlist = function () {
        return this.getRuleContext(0, VarlistContext);
    };
    Object.defineProperty(ReadstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_readstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReadstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterReadstmt) {
            listener.enterReadstmt(this);
        }
    };
    // @Override
    ReadstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitReadstmt) {
            listener.exitReadstmt(this);
        }
    };
    // @Override
    ReadstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitReadstmt) {
            return visitor.visitReadstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReadstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReadstmtContext = ReadstmtContext;
var DimstmtContext = /** @class */ (function (_super) {
    __extends(DimstmtContext, _super);
    function DimstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DimstmtContext.prototype.DIM = function () { return this.getToken(jvmBasicParser.DIM, 0); };
    DimstmtContext.prototype.varlist = function () {
        return this.getRuleContext(0, VarlistContext);
    };
    Object.defineProperty(DimstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_dimstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DimstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterDimstmt) {
            listener.enterDimstmt(this);
        }
    };
    // @Override
    DimstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitDimstmt) {
            listener.exitDimstmt(this);
        }
    };
    // @Override
    DimstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitDimstmt) {
            return visitor.visitDimstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DimstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DimstmtContext = DimstmtContext;
var GotostmtContext = /** @class */ (function (_super) {
    __extends(GotostmtContext, _super);
    function GotostmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GotostmtContext.prototype.GOTO = function () { return this.getToken(jvmBasicParser.GOTO, 0); };
    GotostmtContext.prototype.linenumber = function () {
        return this.getRuleContext(0, LinenumberContext);
    };
    Object.defineProperty(GotostmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_gotostmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GotostmtContext.prototype.enterRule = function (listener) {
        if (listener.enterGotostmt) {
            listener.enterGotostmt(this);
        }
    };
    // @Override
    GotostmtContext.prototype.exitRule = function (listener) {
        if (listener.exitGotostmt) {
            listener.exitGotostmt(this);
        }
    };
    // @Override
    GotostmtContext.prototype.accept = function (visitor) {
        if (visitor.visitGotostmt) {
            return visitor.visitGotostmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GotostmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GotostmtContext = GotostmtContext;
var GosubstmtContext = /** @class */ (function (_super) {
    __extends(GosubstmtContext, _super);
    function GosubstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GosubstmtContext.prototype.GOSUB = function () { return this.getToken(jvmBasicParser.GOSUB, 0); };
    GosubstmtContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(GosubstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_gosubstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GosubstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterGosubstmt) {
            listener.enterGosubstmt(this);
        }
    };
    // @Override
    GosubstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitGosubstmt) {
            listener.exitGosubstmt(this);
        }
    };
    // @Override
    GosubstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitGosubstmt) {
            return visitor.visitGosubstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GosubstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GosubstmtContext = GosubstmtContext;
var PokestmtContext = /** @class */ (function (_super) {
    __extends(PokestmtContext, _super);
    function PokestmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PokestmtContext.prototype.POKE = function () { return this.getToken(jvmBasicParser.POKE, 0); };
    PokestmtContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    PokestmtContext.prototype.COMMA = function () { return this.getToken(jvmBasicParser.COMMA, 0); };
    Object.defineProperty(PokestmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_pokestmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PokestmtContext.prototype.enterRule = function (listener) {
        if (listener.enterPokestmt) {
            listener.enterPokestmt(this);
        }
    };
    // @Override
    PokestmtContext.prototype.exitRule = function (listener) {
        if (listener.exitPokestmt) {
            listener.exitPokestmt(this);
        }
    };
    // @Override
    PokestmtContext.prototype.accept = function (visitor) {
        if (visitor.visitPokestmt) {
            return visitor.visitPokestmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PokestmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PokestmtContext = PokestmtContext;
var CallstmtContext = /** @class */ (function (_super) {
    __extends(CallstmtContext, _super);
    function CallstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CallstmtContext.prototype.CALL = function () { return this.getToken(jvmBasicParser.CALL, 0); };
    CallstmtContext.prototype.exprlist = function () {
        return this.getRuleContext(0, ExprlistContext);
    };
    Object.defineProperty(CallstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_callstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CallstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterCallstmt) {
            listener.enterCallstmt(this);
        }
    };
    // @Override
    CallstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitCallstmt) {
            listener.exitCallstmt(this);
        }
    };
    // @Override
    CallstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitCallstmt) {
            return visitor.visitCallstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CallstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CallstmtContext = CallstmtContext;
var HplotstmtContext = /** @class */ (function (_super) {
    __extends(HplotstmtContext, _super);
    function HplotstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HplotstmtContext.prototype.HPLOT = function () { return this.getToken(jvmBasicParser.HPLOT, 0); };
    HplotstmtContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    HplotstmtContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(jvmBasicParser.COMMA);
        }
        else {
            return this.getToken(jvmBasicParser.COMMA, i);
        }
    };
    HplotstmtContext.prototype.TO = function (i) {
        if (i === undefined) {
            return this.getTokens(jvmBasicParser.TO);
        }
        else {
            return this.getToken(jvmBasicParser.TO, i);
        }
    };
    Object.defineProperty(HplotstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_hplotstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HplotstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterHplotstmt) {
            listener.enterHplotstmt(this);
        }
    };
    // @Override
    HplotstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitHplotstmt) {
            listener.exitHplotstmt(this);
        }
    };
    // @Override
    HplotstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitHplotstmt) {
            return visitor.visitHplotstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HplotstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HplotstmtContext = HplotstmtContext;
var VplotstmtContext = /** @class */ (function (_super) {
    __extends(VplotstmtContext, _super);
    function VplotstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VplotstmtContext.prototype.VPLOT = function () { return this.getToken(jvmBasicParser.VPLOT, 0); };
    VplotstmtContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    VplotstmtContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(jvmBasicParser.COMMA);
        }
        else {
            return this.getToken(jvmBasicParser.COMMA, i);
        }
    };
    VplotstmtContext.prototype.TO = function (i) {
        if (i === undefined) {
            return this.getTokens(jvmBasicParser.TO);
        }
        else {
            return this.getToken(jvmBasicParser.TO, i);
        }
    };
    Object.defineProperty(VplotstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_vplotstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VplotstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterVplotstmt) {
            listener.enterVplotstmt(this);
        }
    };
    // @Override
    VplotstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitVplotstmt) {
            listener.exitVplotstmt(this);
        }
    };
    // @Override
    VplotstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitVplotstmt) {
            return visitor.visitVplotstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VplotstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VplotstmtContext = VplotstmtContext;
var PlotstmtContext = /** @class */ (function (_super) {
    __extends(PlotstmtContext, _super);
    function PlotstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PlotstmtContext.prototype.PLOT = function () { return this.getToken(jvmBasicParser.PLOT, 0); };
    PlotstmtContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    PlotstmtContext.prototype.COMMA = function () { return this.getToken(jvmBasicParser.COMMA, 0); };
    Object.defineProperty(PlotstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_plotstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PlotstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterPlotstmt) {
            listener.enterPlotstmt(this);
        }
    };
    // @Override
    PlotstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitPlotstmt) {
            listener.exitPlotstmt(this);
        }
    };
    // @Override
    PlotstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitPlotstmt) {
            return visitor.visitPlotstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PlotstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PlotstmtContext = PlotstmtContext;
var OngotostmtContext = /** @class */ (function (_super) {
    __extends(OngotostmtContext, _super);
    function OngotostmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OngotostmtContext.prototype.ON = function () { return this.getToken(jvmBasicParser.ON, 0); };
    OngotostmtContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    OngotostmtContext.prototype.GOTO = function () { return this.getToken(jvmBasicParser.GOTO, 0); };
    OngotostmtContext.prototype.linenumber = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LinenumberContext);
        }
        else {
            return this.getRuleContext(i, LinenumberContext);
        }
    };
    OngotostmtContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(jvmBasicParser.COMMA);
        }
        else {
            return this.getToken(jvmBasicParser.COMMA, i);
        }
    };
    Object.defineProperty(OngotostmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_ongotostmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OngotostmtContext.prototype.enterRule = function (listener) {
        if (listener.enterOngotostmt) {
            listener.enterOngotostmt(this);
        }
    };
    // @Override
    OngotostmtContext.prototype.exitRule = function (listener) {
        if (listener.exitOngotostmt) {
            listener.exitOngotostmt(this);
        }
    };
    // @Override
    OngotostmtContext.prototype.accept = function (visitor) {
        if (visitor.visitOngotostmt) {
            return visitor.visitOngotostmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OngotostmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OngotostmtContext = OngotostmtContext;
var OngosubstmtContext = /** @class */ (function (_super) {
    __extends(OngosubstmtContext, _super);
    function OngosubstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OngosubstmtContext.prototype.ON = function () { return this.getToken(jvmBasicParser.ON, 0); };
    OngosubstmtContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    OngosubstmtContext.prototype.GOSUB = function () { return this.getToken(jvmBasicParser.GOSUB, 0); };
    OngosubstmtContext.prototype.linenumber = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LinenumberContext);
        }
        else {
            return this.getRuleContext(i, LinenumberContext);
        }
    };
    OngosubstmtContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(jvmBasicParser.COMMA);
        }
        else {
            return this.getToken(jvmBasicParser.COMMA, i);
        }
    };
    Object.defineProperty(OngosubstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_ongosubstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OngosubstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterOngosubstmt) {
            listener.enterOngosubstmt(this);
        }
    };
    // @Override
    OngosubstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitOngosubstmt) {
            listener.exitOngosubstmt(this);
        }
    };
    // @Override
    OngosubstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitOngosubstmt) {
            return visitor.visitOngosubstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OngosubstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OngosubstmtContext = OngosubstmtContext;
var VtabstmntContext = /** @class */ (function (_super) {
    __extends(VtabstmntContext, _super);
    function VtabstmntContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VtabstmntContext.prototype.VTAB = function () { return this.getToken(jvmBasicParser.VTAB, 0); };
    VtabstmntContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(VtabstmntContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_vtabstmnt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VtabstmntContext.prototype.enterRule = function (listener) {
        if (listener.enterVtabstmnt) {
            listener.enterVtabstmnt(this);
        }
    };
    // @Override
    VtabstmntContext.prototype.exitRule = function (listener) {
        if (listener.exitVtabstmnt) {
            listener.exitVtabstmnt(this);
        }
    };
    // @Override
    VtabstmntContext.prototype.accept = function (visitor) {
        if (visitor.visitVtabstmnt) {
            return visitor.visitVtabstmnt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VtabstmntContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VtabstmntContext = VtabstmntContext;
var HtabstmntContext = /** @class */ (function (_super) {
    __extends(HtabstmntContext, _super);
    function HtabstmntContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HtabstmntContext.prototype.HTAB = function () { return this.getToken(jvmBasicParser.HTAB, 0); };
    HtabstmntContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(HtabstmntContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_htabstmnt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HtabstmntContext.prototype.enterRule = function (listener) {
        if (listener.enterHtabstmnt) {
            listener.enterHtabstmnt(this);
        }
    };
    // @Override
    HtabstmntContext.prototype.exitRule = function (listener) {
        if (listener.exitHtabstmnt) {
            listener.exitHtabstmnt(this);
        }
    };
    // @Override
    HtabstmntContext.prototype.accept = function (visitor) {
        if (visitor.visitHtabstmnt) {
            return visitor.visitHtabstmnt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HtabstmntContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HtabstmntContext = HtabstmntContext;
var HimemstmtContext = /** @class */ (function (_super) {
    __extends(HimemstmtContext, _super);
    function HimemstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HimemstmtContext.prototype.HIMEM = function () { return this.getToken(jvmBasicParser.HIMEM, 0); };
    HimemstmtContext.prototype.COLON = function () { return this.getToken(jvmBasicParser.COLON, 0); };
    HimemstmtContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(HimemstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_himemstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HimemstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterHimemstmt) {
            listener.enterHimemstmt(this);
        }
    };
    // @Override
    HimemstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitHimemstmt) {
            listener.exitHimemstmt(this);
        }
    };
    // @Override
    HimemstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitHimemstmt) {
            return visitor.visitHimemstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HimemstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HimemstmtContext = HimemstmtContext;
var LomemstmtContext = /** @class */ (function (_super) {
    __extends(LomemstmtContext, _super);
    function LomemstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LomemstmtContext.prototype.LOMEM = function () { return this.getToken(jvmBasicParser.LOMEM, 0); };
    LomemstmtContext.prototype.COLON = function () { return this.getToken(jvmBasicParser.COLON, 0); };
    LomemstmtContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(LomemstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_lomemstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LomemstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterLomemstmt) {
            listener.enterLomemstmt(this);
        }
    };
    // @Override
    LomemstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitLomemstmt) {
            listener.exitLomemstmt(this);
        }
    };
    // @Override
    LomemstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitLomemstmt) {
            return visitor.visitLomemstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LomemstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LomemstmtContext = LomemstmtContext;
var DatastmtContext = /** @class */ (function (_super) {
    __extends(DatastmtContext, _super);
    function DatastmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DatastmtContext.prototype.DATA = function () { return this.getToken(jvmBasicParser.DATA, 0); };
    DatastmtContext.prototype.datum = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DatumContext);
        }
        else {
            return this.getRuleContext(i, DatumContext);
        }
    };
    DatastmtContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(jvmBasicParser.COMMA);
        }
        else {
            return this.getToken(jvmBasicParser.COMMA, i);
        }
    };
    Object.defineProperty(DatastmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_datastmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DatastmtContext.prototype.enterRule = function (listener) {
        if (listener.enterDatastmt) {
            listener.enterDatastmt(this);
        }
    };
    // @Override
    DatastmtContext.prototype.exitRule = function (listener) {
        if (listener.exitDatastmt) {
            listener.exitDatastmt(this);
        }
    };
    // @Override
    DatastmtContext.prototype.accept = function (visitor) {
        if (visitor.visitDatastmt) {
            return visitor.visitDatastmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DatastmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DatastmtContext = DatastmtContext;
var DatumContext = /** @class */ (function (_super) {
    __extends(DatumContext, _super);
    function DatumContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DatumContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    DatumContext.prototype.STRINGLITERAL = function () { return this.tryGetToken(jvmBasicParser.STRINGLITERAL, 0); };
    Object.defineProperty(DatumContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_datum; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DatumContext.prototype.enterRule = function (listener) {
        if (listener.enterDatum) {
            listener.enterDatum(this);
        }
    };
    // @Override
    DatumContext.prototype.exitRule = function (listener) {
        if (listener.exitDatum) {
            listener.exitDatum(this);
        }
    };
    // @Override
    DatumContext.prototype.accept = function (visitor) {
        if (visitor.visitDatum) {
            return visitor.visitDatum(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DatumContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DatumContext = DatumContext;
var WaitstmtContext = /** @class */ (function (_super) {
    __extends(WaitstmtContext, _super);
    function WaitstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WaitstmtContext.prototype.WAIT = function () { return this.getToken(jvmBasicParser.WAIT, 0); };
    WaitstmtContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    WaitstmtContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(jvmBasicParser.COMMA);
        }
        else {
            return this.getToken(jvmBasicParser.COMMA, i);
        }
    };
    Object.defineProperty(WaitstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_waitstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WaitstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterWaitstmt) {
            listener.enterWaitstmt(this);
        }
    };
    // @Override
    WaitstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitWaitstmt) {
            listener.exitWaitstmt(this);
        }
    };
    // @Override
    WaitstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitWaitstmt) {
            return visitor.visitWaitstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WaitstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WaitstmtContext = WaitstmtContext;
var XdrawstmtContext = /** @class */ (function (_super) {
    __extends(XdrawstmtContext, _super);
    function XdrawstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    XdrawstmtContext.prototype.XDRAW = function () { return this.getToken(jvmBasicParser.XDRAW, 0); };
    XdrawstmtContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    XdrawstmtContext.prototype.AT = function () { return this.tryGetToken(jvmBasicParser.AT, 0); };
    XdrawstmtContext.prototype.COMMA = function () { return this.tryGetToken(jvmBasicParser.COMMA, 0); };
    Object.defineProperty(XdrawstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_xdrawstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    XdrawstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterXdrawstmt) {
            listener.enterXdrawstmt(this);
        }
    };
    // @Override
    XdrawstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitXdrawstmt) {
            listener.exitXdrawstmt(this);
        }
    };
    // @Override
    XdrawstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitXdrawstmt) {
            return visitor.visitXdrawstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return XdrawstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.XdrawstmtContext = XdrawstmtContext;
var DrawstmtContext = /** @class */ (function (_super) {
    __extends(DrawstmtContext, _super);
    function DrawstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DrawstmtContext.prototype.DRAW = function () { return this.getToken(jvmBasicParser.DRAW, 0); };
    DrawstmtContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    DrawstmtContext.prototype.AT = function () { return this.tryGetToken(jvmBasicParser.AT, 0); };
    DrawstmtContext.prototype.COMMA = function () { return this.tryGetToken(jvmBasicParser.COMMA, 0); };
    Object.defineProperty(DrawstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_drawstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DrawstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterDrawstmt) {
            listener.enterDrawstmt(this);
        }
    };
    // @Override
    DrawstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitDrawstmt) {
            listener.exitDrawstmt(this);
        }
    };
    // @Override
    DrawstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitDrawstmt) {
            return visitor.visitDrawstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DrawstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DrawstmtContext = DrawstmtContext;
var DefstmtContext = /** @class */ (function (_super) {
    __extends(DefstmtContext, _super);
    function DefstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefstmtContext.prototype.DEF = function () { return this.getToken(jvmBasicParser.DEF, 0); };
    DefstmtContext.prototype.var = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VarContext);
        }
        else {
            return this.getRuleContext(i, VarContext);
        }
    };
    DefstmtContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    DefstmtContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    DefstmtContext.prototype.EQ = function () { return this.getToken(jvmBasicParser.EQ, 0); };
    DefstmtContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    DefstmtContext.prototype.FN = function () { return this.tryGetToken(jvmBasicParser.FN, 0); };
    Object.defineProperty(DefstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_defstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterDefstmt) {
            listener.enterDefstmt(this);
        }
    };
    // @Override
    DefstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitDefstmt) {
            listener.exitDefstmt(this);
        }
    };
    // @Override
    DefstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitDefstmt) {
            return visitor.visitDefstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefstmtContext = DefstmtContext;
var TabstmtContext = /** @class */ (function (_super) {
    __extends(TabstmtContext, _super);
    function TabstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TabstmtContext.prototype.TAB = function () { return this.getToken(jvmBasicParser.TAB, 0); };
    TabstmtContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    TabstmtContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    TabstmtContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(TabstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_tabstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TabstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterTabstmt) {
            listener.enterTabstmt(this);
        }
    };
    // @Override
    TabstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitTabstmt) {
            listener.exitTabstmt(this);
        }
    };
    // @Override
    TabstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitTabstmt) {
            return visitor.visitTabstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TabstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TabstmtContext = TabstmtContext;
var SpeedstmtContext = /** @class */ (function (_super) {
    __extends(SpeedstmtContext, _super);
    function SpeedstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SpeedstmtContext.prototype.SPEED = function () { return this.getToken(jvmBasicParser.SPEED, 0); };
    SpeedstmtContext.prototype.EQ = function () { return this.getToken(jvmBasicParser.EQ, 0); };
    SpeedstmtContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(SpeedstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_speedstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SpeedstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterSpeedstmt) {
            listener.enterSpeedstmt(this);
        }
    };
    // @Override
    SpeedstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitSpeedstmt) {
            listener.exitSpeedstmt(this);
        }
    };
    // @Override
    SpeedstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitSpeedstmt) {
            return visitor.visitSpeedstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SpeedstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SpeedstmtContext = SpeedstmtContext;
var RotstmtContext = /** @class */ (function (_super) {
    __extends(RotstmtContext, _super);
    function RotstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RotstmtContext.prototype.ROT = function () { return this.getToken(jvmBasicParser.ROT, 0); };
    RotstmtContext.prototype.EQ = function () { return this.getToken(jvmBasicParser.EQ, 0); };
    RotstmtContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(RotstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_rotstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RotstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterRotstmt) {
            listener.enterRotstmt(this);
        }
    };
    // @Override
    RotstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitRotstmt) {
            listener.exitRotstmt(this);
        }
    };
    // @Override
    RotstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitRotstmt) {
            return visitor.visitRotstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RotstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RotstmtContext = RotstmtContext;
var ScalestmtContext = /** @class */ (function (_super) {
    __extends(ScalestmtContext, _super);
    function ScalestmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ScalestmtContext.prototype.SCALE = function () { return this.getToken(jvmBasicParser.SCALE, 0); };
    ScalestmtContext.prototype.EQ = function () { return this.getToken(jvmBasicParser.EQ, 0); };
    ScalestmtContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ScalestmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_scalestmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ScalestmtContext.prototype.enterRule = function (listener) {
        if (listener.enterScalestmt) {
            listener.enterScalestmt(this);
        }
    };
    // @Override
    ScalestmtContext.prototype.exitRule = function (listener) {
        if (listener.exitScalestmt) {
            listener.exitScalestmt(this);
        }
    };
    // @Override
    ScalestmtContext.prototype.accept = function (visitor) {
        if (visitor.visitScalestmt) {
            return visitor.visitScalestmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ScalestmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ScalestmtContext = ScalestmtContext;
var ColorstmtContext = /** @class */ (function (_super) {
    __extends(ColorstmtContext, _super);
    function ColorstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ColorstmtContext.prototype.COLOR = function () { return this.getToken(jvmBasicParser.COLOR, 0); };
    ColorstmtContext.prototype.EQ = function () { return this.getToken(jvmBasicParser.EQ, 0); };
    ColorstmtContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ColorstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_colorstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ColorstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterColorstmt) {
            listener.enterColorstmt(this);
        }
    };
    // @Override
    ColorstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitColorstmt) {
            listener.exitColorstmt(this);
        }
    };
    // @Override
    ColorstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitColorstmt) {
            return visitor.visitColorstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ColorstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ColorstmtContext = ColorstmtContext;
var HcolorstmtContext = /** @class */ (function (_super) {
    __extends(HcolorstmtContext, _super);
    function HcolorstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HcolorstmtContext.prototype.HCOLOR = function () { return this.getToken(jvmBasicParser.HCOLOR, 0); };
    HcolorstmtContext.prototype.EQ = function () { return this.getToken(jvmBasicParser.EQ, 0); };
    HcolorstmtContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(HcolorstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_hcolorstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HcolorstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterHcolorstmt) {
            listener.enterHcolorstmt(this);
        }
    };
    // @Override
    HcolorstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitHcolorstmt) {
            listener.exitHcolorstmt(this);
        }
    };
    // @Override
    HcolorstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitHcolorstmt) {
            return visitor.visitHcolorstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HcolorstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HcolorstmtContext = HcolorstmtContext;
var HlinstmtContext = /** @class */ (function (_super) {
    __extends(HlinstmtContext, _super);
    function HlinstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HlinstmtContext.prototype.HLIN = function () { return this.getToken(jvmBasicParser.HLIN, 0); };
    HlinstmtContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    HlinstmtContext.prototype.COMMA = function () { return this.getToken(jvmBasicParser.COMMA, 0); };
    HlinstmtContext.prototype.AT = function () { return this.getToken(jvmBasicParser.AT, 0); };
    Object.defineProperty(HlinstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_hlinstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HlinstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterHlinstmt) {
            listener.enterHlinstmt(this);
        }
    };
    // @Override
    HlinstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitHlinstmt) {
            listener.exitHlinstmt(this);
        }
    };
    // @Override
    HlinstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitHlinstmt) {
            return visitor.visitHlinstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HlinstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HlinstmtContext = HlinstmtContext;
var VlinstmtContext = /** @class */ (function (_super) {
    __extends(VlinstmtContext, _super);
    function VlinstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VlinstmtContext.prototype.VLIN = function () { return this.getToken(jvmBasicParser.VLIN, 0); };
    VlinstmtContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    VlinstmtContext.prototype.COMMA = function () { return this.getToken(jvmBasicParser.COMMA, 0); };
    VlinstmtContext.prototype.AT = function () { return this.getToken(jvmBasicParser.AT, 0); };
    Object.defineProperty(VlinstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_vlinstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VlinstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterVlinstmt) {
            listener.enterVlinstmt(this);
        }
    };
    // @Override
    VlinstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitVlinstmt) {
            listener.exitVlinstmt(this);
        }
    };
    // @Override
    VlinstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitVlinstmt) {
            return visitor.visitVlinstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VlinstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VlinstmtContext = VlinstmtContext;
var OnerrstmtContext = /** @class */ (function (_super) {
    __extends(OnerrstmtContext, _super);
    function OnerrstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OnerrstmtContext.prototype.ONERR = function () { return this.getToken(jvmBasicParser.ONERR, 0); };
    OnerrstmtContext.prototype.GOTO = function () { return this.getToken(jvmBasicParser.GOTO, 0); };
    OnerrstmtContext.prototype.linenumber = function () {
        return this.getRuleContext(0, LinenumberContext);
    };
    Object.defineProperty(OnerrstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_onerrstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OnerrstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterOnerrstmt) {
            listener.enterOnerrstmt(this);
        }
    };
    // @Override
    OnerrstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitOnerrstmt) {
            listener.exitOnerrstmt(this);
        }
    };
    // @Override
    OnerrstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitOnerrstmt) {
            return visitor.visitOnerrstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OnerrstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OnerrstmtContext = OnerrstmtContext;
var PrstmtContext = /** @class */ (function (_super) {
    __extends(PrstmtContext, _super);
    function PrstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrstmtContext.prototype.PRNUMBER = function () { return this.getToken(jvmBasicParser.PRNUMBER, 0); };
    PrstmtContext.prototype.NUMBER = function () { return this.getToken(jvmBasicParser.NUMBER, 0); };
    Object.defineProperty(PrstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_prstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterPrstmt) {
            listener.enterPrstmt(this);
        }
    };
    // @Override
    PrstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitPrstmt) {
            listener.exitPrstmt(this);
        }
    };
    // @Override
    PrstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitPrstmt) {
            return visitor.visitPrstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrstmtContext = PrstmtContext;
var InstmtContext = /** @class */ (function (_super) {
    __extends(InstmtContext, _super);
    function InstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InstmtContext.prototype.INNUMBER = function () { return this.getToken(jvmBasicParser.INNUMBER, 0); };
    InstmtContext.prototype.NUMBER = function () { return this.getToken(jvmBasicParser.NUMBER, 0); };
    Object.defineProperty(InstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_instmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterInstmt) {
            listener.enterInstmt(this);
        }
    };
    // @Override
    InstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitInstmt) {
            listener.exitInstmt(this);
        }
    };
    // @Override
    InstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitInstmt) {
            return visitor.visitInstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InstmtContext = InstmtContext;
var StorestmtContext = /** @class */ (function (_super) {
    __extends(StorestmtContext, _super);
    function StorestmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StorestmtContext.prototype.STORE = function () { return this.getToken(jvmBasicParser.STORE, 0); };
    StorestmtContext.prototype.vardecl = function () {
        return this.getRuleContext(0, VardeclContext);
    };
    Object.defineProperty(StorestmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_storestmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StorestmtContext.prototype.enterRule = function (listener) {
        if (listener.enterStorestmt) {
            listener.enterStorestmt(this);
        }
    };
    // @Override
    StorestmtContext.prototype.exitRule = function (listener) {
        if (listener.exitStorestmt) {
            listener.exitStorestmt(this);
        }
    };
    // @Override
    StorestmtContext.prototype.accept = function (visitor) {
        if (visitor.visitStorestmt) {
            return visitor.visitStorestmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StorestmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StorestmtContext = StorestmtContext;
var RecallstmtContext = /** @class */ (function (_super) {
    __extends(RecallstmtContext, _super);
    function RecallstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RecallstmtContext.prototype.RECALL = function () { return this.getToken(jvmBasicParser.RECALL, 0); };
    RecallstmtContext.prototype.vardecl = function () {
        return this.getRuleContext(0, VardeclContext);
    };
    Object.defineProperty(RecallstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_recallstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RecallstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterRecallstmt) {
            listener.enterRecallstmt(this);
        }
    };
    // @Override
    RecallstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitRecallstmt) {
            listener.exitRecallstmt(this);
        }
    };
    // @Override
    RecallstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitRecallstmt) {
            return visitor.visitRecallstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RecallstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RecallstmtContext = RecallstmtContext;
var ListstmtContext = /** @class */ (function (_super) {
    __extends(ListstmtContext, _super);
    function ListstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ListstmtContext.prototype.LIST = function () { return this.getToken(jvmBasicParser.LIST, 0); };
    ListstmtContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ListstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_liststmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ListstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterListstmt) {
            listener.enterListstmt(this);
        }
    };
    // @Override
    ListstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitListstmt) {
            listener.exitListstmt(this);
        }
    };
    // @Override
    ListstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitListstmt) {
            return visitor.visitListstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ListstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ListstmtContext = ListstmtContext;
var PopstmtContext = /** @class */ (function (_super) {
    __extends(PopstmtContext, _super);
    function PopstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PopstmtContext.prototype.POP = function () { return this.getToken(jvmBasicParser.POP, 0); };
    PopstmtContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    PopstmtContext.prototype.COMMA = function () { return this.tryGetToken(jvmBasicParser.COMMA, 0); };
    Object.defineProperty(PopstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_popstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PopstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterPopstmt) {
            listener.enterPopstmt(this);
        }
    };
    // @Override
    PopstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitPopstmt) {
            listener.exitPopstmt(this);
        }
    };
    // @Override
    PopstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitPopstmt) {
            return visitor.visitPopstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PopstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PopstmtContext = PopstmtContext;
var AmptstmtContext = /** @class */ (function (_super) {
    __extends(AmptstmtContext, _super);
    function AmptstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AmptstmtContext.prototype.AMPERSAND = function () { return this.getToken(jvmBasicParser.AMPERSAND, 0); };
    AmptstmtContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(AmptstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_amptstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AmptstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterAmptstmt) {
            listener.enterAmptstmt(this);
        }
    };
    // @Override
    AmptstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitAmptstmt) {
            listener.exitAmptstmt(this);
        }
    };
    // @Override
    AmptstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitAmptstmt) {
            return visitor.visitAmptstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AmptstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AmptstmtContext = AmptstmtContext;
var IncludestmtContext = /** @class */ (function (_super) {
    __extends(IncludestmtContext, _super);
    function IncludestmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IncludestmtContext.prototype.INCLUDE = function () { return this.getToken(jvmBasicParser.INCLUDE, 0); };
    IncludestmtContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(IncludestmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_includestmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IncludestmtContext.prototype.enterRule = function (listener) {
        if (listener.enterIncludestmt) {
            listener.enterIncludestmt(this);
        }
    };
    // @Override
    IncludestmtContext.prototype.exitRule = function (listener) {
        if (listener.exitIncludestmt) {
            listener.exitIncludestmt(this);
        }
    };
    // @Override
    IncludestmtContext.prototype.accept = function (visitor) {
        if (visitor.visitIncludestmt) {
            return visitor.visitIncludestmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IncludestmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IncludestmtContext = IncludestmtContext;
var EndstmtContext = /** @class */ (function (_super) {
    __extends(EndstmtContext, _super);
    function EndstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EndstmtContext.prototype.END = function () { return this.getToken(jvmBasicParser.END, 0); };
    Object.defineProperty(EndstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_endstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EndstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterEndstmt) {
            listener.enterEndstmt(this);
        }
    };
    // @Override
    EndstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitEndstmt) {
            listener.exitEndstmt(this);
        }
    };
    // @Override
    EndstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitEndstmt) {
            return visitor.visitEndstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EndstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EndstmtContext = EndstmtContext;
var ReturnstmtContext = /** @class */ (function (_super) {
    __extends(ReturnstmtContext, _super);
    function ReturnstmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReturnstmtContext.prototype.RETURN = function () { return this.getToken(jvmBasicParser.RETURN, 0); };
    Object.defineProperty(ReturnstmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_returnstmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReturnstmtContext.prototype.enterRule = function (listener) {
        if (listener.enterReturnstmt) {
            listener.enterReturnstmt(this);
        }
    };
    // @Override
    ReturnstmtContext.prototype.exitRule = function (listener) {
        if (listener.exitReturnstmt) {
            listener.exitReturnstmt(this);
        }
    };
    // @Override
    ReturnstmtContext.prototype.accept = function (visitor) {
        if (visitor.visitReturnstmt) {
            return visitor.visitReturnstmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReturnstmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReturnstmtContext = ReturnstmtContext;
var RestorestmtContext = /** @class */ (function (_super) {
    __extends(RestorestmtContext, _super);
    function RestorestmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RestorestmtContext.prototype.RESTORE = function () { return this.getToken(jvmBasicParser.RESTORE, 0); };
    Object.defineProperty(RestorestmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_restorestmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RestorestmtContext.prototype.enterRule = function (listener) {
        if (listener.enterRestorestmt) {
            listener.enterRestorestmt(this);
        }
    };
    // @Override
    RestorestmtContext.prototype.exitRule = function (listener) {
        if (listener.exitRestorestmt) {
            listener.exitRestorestmt(this);
        }
    };
    // @Override
    RestorestmtContext.prototype.accept = function (visitor) {
        if (visitor.visitRestorestmt) {
            return visitor.visitRestorestmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RestorestmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RestorestmtContext = RestorestmtContext;
var NumberContext = /** @class */ (function (_super) {
    __extends(NumberContext, _super);
    function NumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumberContext.prototype.NUMBER = function () { return this.tryGetToken(jvmBasicParser.NUMBER, 0); };
    NumberContext.prototype.FLOAT = function () { return this.tryGetToken(jvmBasicParser.FLOAT, 0); };
    NumberContext.prototype.PLUS = function () { return this.tryGetToken(jvmBasicParser.PLUS, 0); };
    NumberContext.prototype.MINUS = function () { return this.tryGetToken(jvmBasicParser.MINUS, 0); };
    Object.defineProperty(NumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_number; },
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
var FuncContext = /** @class */ (function (_super) {
    __extends(FuncContext, _super);
    function FuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FuncContext.prototype.STRINGLITERAL = function () { return this.tryGetToken(jvmBasicParser.STRINGLITERAL, 0); };
    FuncContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    FuncContext.prototype.tabfunc = function () {
        return this.tryGetRuleContext(0, TabfuncContext);
    };
    FuncContext.prototype.vardecl = function () {
        return this.tryGetRuleContext(0, VardeclContext);
    };
    FuncContext.prototype.chrfunc = function () {
        return this.tryGetRuleContext(0, ChrfuncContext);
    };
    FuncContext.prototype.sqrfunc = function () {
        return this.tryGetRuleContext(0, SqrfuncContext);
    };
    FuncContext.prototype.lenfunc = function () {
        return this.tryGetRuleContext(0, LenfuncContext);
    };
    FuncContext.prototype.strfunc = function () {
        return this.tryGetRuleContext(0, StrfuncContext);
    };
    FuncContext.prototype.ascfunc = function () {
        return this.tryGetRuleContext(0, AscfuncContext);
    };
    FuncContext.prototype.scrnfunc = function () {
        return this.tryGetRuleContext(0, ScrnfuncContext);
    };
    FuncContext.prototype.midfunc = function () {
        return this.tryGetRuleContext(0, MidfuncContext);
    };
    FuncContext.prototype.pdlfunc = function () {
        return this.tryGetRuleContext(0, PdlfuncContext);
    };
    FuncContext.prototype.peekfunc = function () {
        return this.tryGetRuleContext(0, PeekfuncContext);
    };
    FuncContext.prototype.intfunc = function () {
        return this.tryGetRuleContext(0, IntfuncContext);
    };
    FuncContext.prototype.spcfunc = function () {
        return this.tryGetRuleContext(0, SpcfuncContext);
    };
    FuncContext.prototype.frefunc = function () {
        return this.tryGetRuleContext(0, FrefuncContext);
    };
    FuncContext.prototype.posfunc = function () {
        return this.tryGetRuleContext(0, PosfuncContext);
    };
    FuncContext.prototype.usrfunc = function () {
        return this.tryGetRuleContext(0, UsrfuncContext);
    };
    FuncContext.prototype.leftfunc = function () {
        return this.tryGetRuleContext(0, LeftfuncContext);
    };
    FuncContext.prototype.valfunc = function () {
        return this.tryGetRuleContext(0, ValfuncContext);
    };
    FuncContext.prototype.rightfunc = function () {
        return this.tryGetRuleContext(0, RightfuncContext);
    };
    FuncContext.prototype.fnfunc = function () {
        return this.tryGetRuleContext(0, FnfuncContext);
    };
    FuncContext.prototype.sinfunc = function () {
        return this.tryGetRuleContext(0, SinfuncContext);
    };
    FuncContext.prototype.cosfunc = function () {
        return this.tryGetRuleContext(0, CosfuncContext);
    };
    FuncContext.prototype.tanfunc = function () {
        return this.tryGetRuleContext(0, TanfuncContext);
    };
    FuncContext.prototype.atnfunc = function () {
        return this.tryGetRuleContext(0, AtnfuncContext);
    };
    FuncContext.prototype.rndfunc = function () {
        return this.tryGetRuleContext(0, RndfuncContext);
    };
    FuncContext.prototype.sgnfunc = function () {
        return this.tryGetRuleContext(0, SgnfuncContext);
    };
    FuncContext.prototype.expfunc = function () {
        return this.tryGetRuleContext(0, ExpfuncContext);
    };
    FuncContext.prototype.logfunc = function () {
        return this.tryGetRuleContext(0, LogfuncContext);
    };
    FuncContext.prototype.absfunc = function () {
        return this.tryGetRuleContext(0, AbsfuncContext);
    };
    FuncContext.prototype.LPAREN = function () { return this.tryGetToken(jvmBasicParser.LPAREN, 0); };
    FuncContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    FuncContext.prototype.RPAREN = function () { return this.tryGetToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(FuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_func; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FuncContext.prototype.enterRule = function (listener) {
        if (listener.enterFunc) {
            listener.enterFunc(this);
        }
    };
    // @Override
    FuncContext.prototype.exitRule = function (listener) {
        if (listener.exitFunc) {
            listener.exitFunc(this);
        }
    };
    // @Override
    FuncContext.prototype.accept = function (visitor) {
        if (visitor.visitFunc) {
            return visitor.visitFunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FuncContext = FuncContext;
var SignExpressionContext = /** @class */ (function (_super) {
    __extends(SignExpressionContext, _super);
    function SignExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SignExpressionContext.prototype.func = function () {
        return this.getRuleContext(0, FuncContext);
    };
    SignExpressionContext.prototype.NOT = function () { return this.tryGetToken(jvmBasicParser.NOT, 0); };
    SignExpressionContext.prototype.PLUS = function () { return this.tryGetToken(jvmBasicParser.PLUS, 0); };
    SignExpressionContext.prototype.MINUS = function () { return this.tryGetToken(jvmBasicParser.MINUS, 0); };
    Object.defineProperty(SignExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_signExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SignExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterSignExpression) {
            listener.enterSignExpression(this);
        }
    };
    // @Override
    SignExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitSignExpression) {
            listener.exitSignExpression(this);
        }
    };
    // @Override
    SignExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitSignExpression) {
            return visitor.visitSignExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SignExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SignExpressionContext = SignExpressionContext;
var ExponentExpressionContext = /** @class */ (function (_super) {
    __extends(ExponentExpressionContext, _super);
    function ExponentExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExponentExpressionContext.prototype.signExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SignExpressionContext);
        }
        else {
            return this.getRuleContext(i, SignExpressionContext);
        }
    };
    ExponentExpressionContext.prototype.EXPONENT = function (i) {
        if (i === undefined) {
            return this.getTokens(jvmBasicParser.EXPONENT);
        }
        else {
            return this.getToken(jvmBasicParser.EXPONENT, i);
        }
    };
    Object.defineProperty(ExponentExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_exponentExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExponentExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterExponentExpression) {
            listener.enterExponentExpression(this);
        }
    };
    // @Override
    ExponentExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitExponentExpression) {
            listener.exitExponentExpression(this);
        }
    };
    // @Override
    ExponentExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitExponentExpression) {
            return visitor.visitExponentExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExponentExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExponentExpressionContext = ExponentExpressionContext;
var MultiplyingExpressionContext = /** @class */ (function (_super) {
    __extends(MultiplyingExpressionContext, _super);
    function MultiplyingExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultiplyingExpressionContext.prototype.exponentExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExponentExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExponentExpressionContext);
        }
    };
    MultiplyingExpressionContext.prototype.TIMES = function (i) {
        if (i === undefined) {
            return this.getTokens(jvmBasicParser.TIMES);
        }
        else {
            return this.getToken(jvmBasicParser.TIMES, i);
        }
    };
    MultiplyingExpressionContext.prototype.DIV = function (i) {
        if (i === undefined) {
            return this.getTokens(jvmBasicParser.DIV);
        }
        else {
            return this.getToken(jvmBasicParser.DIV, i);
        }
    };
    Object.defineProperty(MultiplyingExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_multiplyingExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MultiplyingExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiplyingExpression) {
            listener.enterMultiplyingExpression(this);
        }
    };
    // @Override
    MultiplyingExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiplyingExpression) {
            listener.exitMultiplyingExpression(this);
        }
    };
    // @Override
    MultiplyingExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiplyingExpression) {
            return visitor.visitMultiplyingExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiplyingExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MultiplyingExpressionContext = MultiplyingExpressionContext;
var AddingExpressionContext = /** @class */ (function (_super) {
    __extends(AddingExpressionContext, _super);
    function AddingExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AddingExpressionContext.prototype.multiplyingExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MultiplyingExpressionContext);
        }
        else {
            return this.getRuleContext(i, MultiplyingExpressionContext);
        }
    };
    AddingExpressionContext.prototype.PLUS = function (i) {
        if (i === undefined) {
            return this.getTokens(jvmBasicParser.PLUS);
        }
        else {
            return this.getToken(jvmBasicParser.PLUS, i);
        }
    };
    AddingExpressionContext.prototype.MINUS = function (i) {
        if (i === undefined) {
            return this.getTokens(jvmBasicParser.MINUS);
        }
        else {
            return this.getToken(jvmBasicParser.MINUS, i);
        }
    };
    Object.defineProperty(AddingExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_addingExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AddingExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAddingExpression) {
            listener.enterAddingExpression(this);
        }
    };
    // @Override
    AddingExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAddingExpression) {
            listener.exitAddingExpression(this);
        }
    };
    // @Override
    AddingExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAddingExpression) {
            return visitor.visitAddingExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AddingExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AddingExpressionContext = AddingExpressionContext;
var RelationalExpressionContext = /** @class */ (function (_super) {
    __extends(RelationalExpressionContext, _super);
    function RelationalExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RelationalExpressionContext.prototype.addingExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AddingExpressionContext);
        }
        else {
            return this.getRuleContext(i, AddingExpressionContext);
        }
    };
    RelationalExpressionContext.prototype.relop = function () {
        return this.tryGetRuleContext(0, RelopContext);
    };
    Object.defineProperty(RelationalExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_relationalExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RelationalExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterRelationalExpression) {
            listener.enterRelationalExpression(this);
        }
    };
    // @Override
    RelationalExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitRelationalExpression) {
            listener.exitRelationalExpression(this);
        }
    };
    // @Override
    RelationalExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitRelationalExpression) {
            return visitor.visitRelationalExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RelationalExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RelationalExpressionContext = RelationalExpressionContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.func = function () {
        return this.tryGetRuleContext(0, FuncContext);
    };
    ExpressionContext.prototype.relationalExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RelationalExpressionContext);
        }
        else {
            return this.getRuleContext(i, RelationalExpressionContext);
        }
    };
    ExpressionContext.prototype.AND = function (i) {
        if (i === undefined) {
            return this.getTokens(jvmBasicParser.AND);
        }
        else {
            return this.getToken(jvmBasicParser.AND, i);
        }
    };
    ExpressionContext.prototype.OR = function (i) {
        if (i === undefined) {
            return this.getTokens(jvmBasicParser.OR);
        }
        else {
            return this.getToken(jvmBasicParser.OR, i);
        }
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_expression; },
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
var VarContext = /** @class */ (function (_super) {
    __extends(VarContext, _super);
    function VarContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VarContext.prototype.varname = function () {
        return this.getRuleContext(0, VarnameContext);
    };
    VarContext.prototype.varsuffix = function () {
        return this.tryGetRuleContext(0, VarsuffixContext);
    };
    Object.defineProperty(VarContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_var; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VarContext.prototype.enterRule = function (listener) {
        if (listener.enterVar) {
            listener.enterVar(this);
        }
    };
    // @Override
    VarContext.prototype.exitRule = function (listener) {
        if (listener.exitVar) {
            listener.exitVar(this);
        }
    };
    // @Override
    VarContext.prototype.accept = function (visitor) {
        if (visitor.visitVar) {
            return visitor.visitVar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VarContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VarContext = VarContext;
var VarnameContext = /** @class */ (function (_super) {
    __extends(VarnameContext, _super);
    function VarnameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VarnameContext.prototype.LETTERS = function (i) {
        if (i === undefined) {
            return this.getTokens(jvmBasicParser.LETTERS);
        }
        else {
            return this.getToken(jvmBasicParser.LETTERS, i);
        }
    };
    VarnameContext.prototype.NUMBER = function (i) {
        if (i === undefined) {
            return this.getTokens(jvmBasicParser.NUMBER);
        }
        else {
            return this.getToken(jvmBasicParser.NUMBER, i);
        }
    };
    Object.defineProperty(VarnameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_varname; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VarnameContext.prototype.enterRule = function (listener) {
        if (listener.enterVarname) {
            listener.enterVarname(this);
        }
    };
    // @Override
    VarnameContext.prototype.exitRule = function (listener) {
        if (listener.exitVarname) {
            listener.exitVarname(this);
        }
    };
    // @Override
    VarnameContext.prototype.accept = function (visitor) {
        if (visitor.visitVarname) {
            return visitor.visitVarname(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VarnameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VarnameContext = VarnameContext;
var VarsuffixContext = /** @class */ (function (_super) {
    __extends(VarsuffixContext, _super);
    function VarsuffixContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VarsuffixContext.prototype.DOLLAR = function () { return this.tryGetToken(jvmBasicParser.DOLLAR, 0); };
    VarsuffixContext.prototype.PERCENT = function () { return this.tryGetToken(jvmBasicParser.PERCENT, 0); };
    Object.defineProperty(VarsuffixContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_varsuffix; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VarsuffixContext.prototype.enterRule = function (listener) {
        if (listener.enterVarsuffix) {
            listener.enterVarsuffix(this);
        }
    };
    // @Override
    VarsuffixContext.prototype.exitRule = function (listener) {
        if (listener.exitVarsuffix) {
            listener.exitVarsuffix(this);
        }
    };
    // @Override
    VarsuffixContext.prototype.accept = function (visitor) {
        if (visitor.visitVarsuffix) {
            return visitor.visitVarsuffix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VarsuffixContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VarsuffixContext = VarsuffixContext;
var VarlistContext = /** @class */ (function (_super) {
    __extends(VarlistContext, _super);
    function VarlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VarlistContext.prototype.vardecl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VardeclContext);
        }
        else {
            return this.getRuleContext(i, VardeclContext);
        }
    };
    VarlistContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(jvmBasicParser.COMMA);
        }
        else {
            return this.getToken(jvmBasicParser.COMMA, i);
        }
    };
    Object.defineProperty(VarlistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_varlist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VarlistContext.prototype.enterRule = function (listener) {
        if (listener.enterVarlist) {
            listener.enterVarlist(this);
        }
    };
    // @Override
    VarlistContext.prototype.exitRule = function (listener) {
        if (listener.exitVarlist) {
            listener.exitVarlist(this);
        }
    };
    // @Override
    VarlistContext.prototype.accept = function (visitor) {
        if (visitor.visitVarlist) {
            return visitor.visitVarlist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VarlistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VarlistContext = VarlistContext;
var ExprlistContext = /** @class */ (function (_super) {
    __extends(ExprlistContext, _super);
    function ExprlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExprlistContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    ExprlistContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(jvmBasicParser.COMMA);
        }
        else {
            return this.getToken(jvmBasicParser.COMMA, i);
        }
    };
    Object.defineProperty(ExprlistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_exprlist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExprlistContext.prototype.enterRule = function (listener) {
        if (listener.enterExprlist) {
            listener.enterExprlist(this);
        }
    };
    // @Override
    ExprlistContext.prototype.exitRule = function (listener) {
        if (listener.exitExprlist) {
            listener.exitExprlist(this);
        }
    };
    // @Override
    ExprlistContext.prototype.accept = function (visitor) {
        if (visitor.visitExprlist) {
            return visitor.visitExprlist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprlistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExprlistContext = ExprlistContext;
var SqrfuncContext = /** @class */ (function (_super) {
    __extends(SqrfuncContext, _super);
    function SqrfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SqrfuncContext.prototype.SQR = function () { return this.getToken(jvmBasicParser.SQR, 0); };
    SqrfuncContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    SqrfuncContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    SqrfuncContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(SqrfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_sqrfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SqrfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterSqrfunc) {
            listener.enterSqrfunc(this);
        }
    };
    // @Override
    SqrfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitSqrfunc) {
            listener.exitSqrfunc(this);
        }
    };
    // @Override
    SqrfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitSqrfunc) {
            return visitor.visitSqrfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SqrfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SqrfuncContext = SqrfuncContext;
var ChrfuncContext = /** @class */ (function (_super) {
    __extends(ChrfuncContext, _super);
    function ChrfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ChrfuncContext.prototype.CHR = function () { return this.getToken(jvmBasicParser.CHR, 0); };
    ChrfuncContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    ChrfuncContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    ChrfuncContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(ChrfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_chrfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ChrfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterChrfunc) {
            listener.enterChrfunc(this);
        }
    };
    // @Override
    ChrfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitChrfunc) {
            listener.exitChrfunc(this);
        }
    };
    // @Override
    ChrfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitChrfunc) {
            return visitor.visitChrfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ChrfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ChrfuncContext = ChrfuncContext;
var LenfuncContext = /** @class */ (function (_super) {
    __extends(LenfuncContext, _super);
    function LenfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LenfuncContext.prototype.LEN = function () { return this.getToken(jvmBasicParser.LEN, 0); };
    LenfuncContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    LenfuncContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    LenfuncContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(LenfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_lenfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LenfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterLenfunc) {
            listener.enterLenfunc(this);
        }
    };
    // @Override
    LenfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitLenfunc) {
            listener.exitLenfunc(this);
        }
    };
    // @Override
    LenfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitLenfunc) {
            return visitor.visitLenfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LenfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LenfuncContext = LenfuncContext;
var AscfuncContext = /** @class */ (function (_super) {
    __extends(AscfuncContext, _super);
    function AscfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AscfuncContext.prototype.ASC = function () { return this.getToken(jvmBasicParser.ASC, 0); };
    AscfuncContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    AscfuncContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    AscfuncContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(AscfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_ascfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AscfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterAscfunc) {
            listener.enterAscfunc(this);
        }
    };
    // @Override
    AscfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitAscfunc) {
            listener.exitAscfunc(this);
        }
    };
    // @Override
    AscfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitAscfunc) {
            return visitor.visitAscfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AscfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AscfuncContext = AscfuncContext;
var MidfuncContext = /** @class */ (function (_super) {
    __extends(MidfuncContext, _super);
    function MidfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MidfuncContext.prototype.MID = function () { return this.getToken(jvmBasicParser.MID, 0); };
    MidfuncContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    MidfuncContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    MidfuncContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(jvmBasicParser.COMMA);
        }
        else {
            return this.getToken(jvmBasicParser.COMMA, i);
        }
    };
    MidfuncContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(MidfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_midfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MidfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterMidfunc) {
            listener.enterMidfunc(this);
        }
    };
    // @Override
    MidfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitMidfunc) {
            listener.exitMidfunc(this);
        }
    };
    // @Override
    MidfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitMidfunc) {
            return visitor.visitMidfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MidfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MidfuncContext = MidfuncContext;
var PdlfuncContext = /** @class */ (function (_super) {
    __extends(PdlfuncContext, _super);
    function PdlfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PdlfuncContext.prototype.PDL = function () { return this.getToken(jvmBasicParser.PDL, 0); };
    PdlfuncContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    PdlfuncContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    PdlfuncContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(PdlfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_pdlfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PdlfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterPdlfunc) {
            listener.enterPdlfunc(this);
        }
    };
    // @Override
    PdlfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitPdlfunc) {
            listener.exitPdlfunc(this);
        }
    };
    // @Override
    PdlfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitPdlfunc) {
            return visitor.visitPdlfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PdlfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PdlfuncContext = PdlfuncContext;
var PeekfuncContext = /** @class */ (function (_super) {
    __extends(PeekfuncContext, _super);
    function PeekfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PeekfuncContext.prototype.PEEK = function () { return this.getToken(jvmBasicParser.PEEK, 0); };
    PeekfuncContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    PeekfuncContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    PeekfuncContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(PeekfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_peekfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PeekfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterPeekfunc) {
            listener.enterPeekfunc(this);
        }
    };
    // @Override
    PeekfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitPeekfunc) {
            listener.exitPeekfunc(this);
        }
    };
    // @Override
    PeekfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitPeekfunc) {
            return visitor.visitPeekfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PeekfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PeekfuncContext = PeekfuncContext;
var IntfuncContext = /** @class */ (function (_super) {
    __extends(IntfuncContext, _super);
    function IntfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntfuncContext.prototype.INTF = function () { return this.getToken(jvmBasicParser.INTF, 0); };
    IntfuncContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    IntfuncContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    IntfuncContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(IntfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_intfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IntfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterIntfunc) {
            listener.enterIntfunc(this);
        }
    };
    // @Override
    IntfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitIntfunc) {
            listener.exitIntfunc(this);
        }
    };
    // @Override
    IntfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitIntfunc) {
            return visitor.visitIntfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IntfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IntfuncContext = IntfuncContext;
var SpcfuncContext = /** @class */ (function (_super) {
    __extends(SpcfuncContext, _super);
    function SpcfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SpcfuncContext.prototype.SPC = function () { return this.getToken(jvmBasicParser.SPC, 0); };
    SpcfuncContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    SpcfuncContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    SpcfuncContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(SpcfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_spcfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SpcfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterSpcfunc) {
            listener.enterSpcfunc(this);
        }
    };
    // @Override
    SpcfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitSpcfunc) {
            listener.exitSpcfunc(this);
        }
    };
    // @Override
    SpcfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitSpcfunc) {
            return visitor.visitSpcfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SpcfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SpcfuncContext = SpcfuncContext;
var FrefuncContext = /** @class */ (function (_super) {
    __extends(FrefuncContext, _super);
    function FrefuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FrefuncContext.prototype.FRE = function () { return this.getToken(jvmBasicParser.FRE, 0); };
    FrefuncContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    FrefuncContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    FrefuncContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(FrefuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_frefunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FrefuncContext.prototype.enterRule = function (listener) {
        if (listener.enterFrefunc) {
            listener.enterFrefunc(this);
        }
    };
    // @Override
    FrefuncContext.prototype.exitRule = function (listener) {
        if (listener.exitFrefunc) {
            listener.exitFrefunc(this);
        }
    };
    // @Override
    FrefuncContext.prototype.accept = function (visitor) {
        if (visitor.visitFrefunc) {
            return visitor.visitFrefunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FrefuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FrefuncContext = FrefuncContext;
var PosfuncContext = /** @class */ (function (_super) {
    __extends(PosfuncContext, _super);
    function PosfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PosfuncContext.prototype.POS = function () { return this.getToken(jvmBasicParser.POS, 0); };
    PosfuncContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    PosfuncContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    PosfuncContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(PosfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_posfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PosfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterPosfunc) {
            listener.enterPosfunc(this);
        }
    };
    // @Override
    PosfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitPosfunc) {
            listener.exitPosfunc(this);
        }
    };
    // @Override
    PosfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitPosfunc) {
            return visitor.visitPosfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PosfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PosfuncContext = PosfuncContext;
var UsrfuncContext = /** @class */ (function (_super) {
    __extends(UsrfuncContext, _super);
    function UsrfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UsrfuncContext.prototype.USR = function () { return this.getToken(jvmBasicParser.USR, 0); };
    UsrfuncContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    UsrfuncContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    UsrfuncContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(UsrfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_usrfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UsrfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterUsrfunc) {
            listener.enterUsrfunc(this);
        }
    };
    // @Override
    UsrfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitUsrfunc) {
            listener.exitUsrfunc(this);
        }
    };
    // @Override
    UsrfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitUsrfunc) {
            return visitor.visitUsrfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UsrfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UsrfuncContext = UsrfuncContext;
var LeftfuncContext = /** @class */ (function (_super) {
    __extends(LeftfuncContext, _super);
    function LeftfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LeftfuncContext.prototype.LEFT = function () { return this.getToken(jvmBasicParser.LEFT, 0); };
    LeftfuncContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    LeftfuncContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    LeftfuncContext.prototype.COMMA = function () { return this.getToken(jvmBasicParser.COMMA, 0); };
    LeftfuncContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(LeftfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_leftfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LeftfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterLeftfunc) {
            listener.enterLeftfunc(this);
        }
    };
    // @Override
    LeftfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitLeftfunc) {
            listener.exitLeftfunc(this);
        }
    };
    // @Override
    LeftfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitLeftfunc) {
            return visitor.visitLeftfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LeftfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LeftfuncContext = LeftfuncContext;
var RightfuncContext = /** @class */ (function (_super) {
    __extends(RightfuncContext, _super);
    function RightfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RightfuncContext.prototype.RIGHT = function () { return this.getToken(jvmBasicParser.RIGHT, 0); };
    RightfuncContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    RightfuncContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    RightfuncContext.prototype.COMMA = function () { return this.getToken(jvmBasicParser.COMMA, 0); };
    RightfuncContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(RightfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_rightfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RightfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterRightfunc) {
            listener.enterRightfunc(this);
        }
    };
    // @Override
    RightfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitRightfunc) {
            listener.exitRightfunc(this);
        }
    };
    // @Override
    RightfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitRightfunc) {
            return visitor.visitRightfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RightfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RightfuncContext = RightfuncContext;
var StrfuncContext = /** @class */ (function (_super) {
    __extends(StrfuncContext, _super);
    function StrfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StrfuncContext.prototype.STR = function () { return this.getToken(jvmBasicParser.STR, 0); };
    StrfuncContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    StrfuncContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    StrfuncContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(StrfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_strfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StrfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterStrfunc) {
            listener.enterStrfunc(this);
        }
    };
    // @Override
    StrfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitStrfunc) {
            listener.exitStrfunc(this);
        }
    };
    // @Override
    StrfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitStrfunc) {
            return visitor.visitStrfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StrfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StrfuncContext = StrfuncContext;
var FnfuncContext = /** @class */ (function (_super) {
    __extends(FnfuncContext, _super);
    function FnfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FnfuncContext.prototype.FN = function () { return this.getToken(jvmBasicParser.FN, 0); };
    FnfuncContext.prototype.var = function () {
        return this.getRuleContext(0, VarContext);
    };
    FnfuncContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    FnfuncContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    FnfuncContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(FnfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_fnfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FnfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterFnfunc) {
            listener.enterFnfunc(this);
        }
    };
    // @Override
    FnfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitFnfunc) {
            listener.exitFnfunc(this);
        }
    };
    // @Override
    FnfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitFnfunc) {
            return visitor.visitFnfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FnfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FnfuncContext = FnfuncContext;
var ValfuncContext = /** @class */ (function (_super) {
    __extends(ValfuncContext, _super);
    function ValfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ValfuncContext.prototype.VAL = function () { return this.getToken(jvmBasicParser.VAL, 0); };
    ValfuncContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    ValfuncContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    ValfuncContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(ValfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_valfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ValfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterValfunc) {
            listener.enterValfunc(this);
        }
    };
    // @Override
    ValfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitValfunc) {
            listener.exitValfunc(this);
        }
    };
    // @Override
    ValfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitValfunc) {
            return visitor.visitValfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ValfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ValfuncContext = ValfuncContext;
var ScrnfuncContext = /** @class */ (function (_super) {
    __extends(ScrnfuncContext, _super);
    function ScrnfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ScrnfuncContext.prototype.SCRN = function () { return this.getToken(jvmBasicParser.SCRN, 0); };
    ScrnfuncContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    ScrnfuncContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    ScrnfuncContext.prototype.COMMA = function () { return this.getToken(jvmBasicParser.COMMA, 0); };
    ScrnfuncContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(ScrnfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_scrnfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ScrnfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterScrnfunc) {
            listener.enterScrnfunc(this);
        }
    };
    // @Override
    ScrnfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitScrnfunc) {
            listener.exitScrnfunc(this);
        }
    };
    // @Override
    ScrnfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitScrnfunc) {
            return visitor.visitScrnfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ScrnfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ScrnfuncContext = ScrnfuncContext;
var SinfuncContext = /** @class */ (function (_super) {
    __extends(SinfuncContext, _super);
    function SinfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SinfuncContext.prototype.SIN = function () { return this.getToken(jvmBasicParser.SIN, 0); };
    SinfuncContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    SinfuncContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    SinfuncContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(SinfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_sinfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SinfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterSinfunc) {
            listener.enterSinfunc(this);
        }
    };
    // @Override
    SinfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitSinfunc) {
            listener.exitSinfunc(this);
        }
    };
    // @Override
    SinfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitSinfunc) {
            return visitor.visitSinfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SinfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SinfuncContext = SinfuncContext;
var CosfuncContext = /** @class */ (function (_super) {
    __extends(CosfuncContext, _super);
    function CosfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CosfuncContext.prototype.COS = function () { return this.getToken(jvmBasicParser.COS, 0); };
    CosfuncContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    CosfuncContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    CosfuncContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(CosfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_cosfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CosfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterCosfunc) {
            listener.enterCosfunc(this);
        }
    };
    // @Override
    CosfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitCosfunc) {
            listener.exitCosfunc(this);
        }
    };
    // @Override
    CosfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitCosfunc) {
            return visitor.visitCosfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CosfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CosfuncContext = CosfuncContext;
var TanfuncContext = /** @class */ (function (_super) {
    __extends(TanfuncContext, _super);
    function TanfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TanfuncContext.prototype.TAN = function () { return this.getToken(jvmBasicParser.TAN, 0); };
    TanfuncContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    TanfuncContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    TanfuncContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(TanfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_tanfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TanfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterTanfunc) {
            listener.enterTanfunc(this);
        }
    };
    // @Override
    TanfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitTanfunc) {
            listener.exitTanfunc(this);
        }
    };
    // @Override
    TanfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitTanfunc) {
            return visitor.visitTanfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TanfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TanfuncContext = TanfuncContext;
var AtnfuncContext = /** @class */ (function (_super) {
    __extends(AtnfuncContext, _super);
    function AtnfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtnfuncContext.prototype.ATN = function () { return this.getToken(jvmBasicParser.ATN, 0); };
    AtnfuncContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    AtnfuncContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    AtnfuncContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(AtnfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_atnfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AtnfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterAtnfunc) {
            listener.enterAtnfunc(this);
        }
    };
    // @Override
    AtnfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitAtnfunc) {
            listener.exitAtnfunc(this);
        }
    };
    // @Override
    AtnfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitAtnfunc) {
            return visitor.visitAtnfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtnfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AtnfuncContext = AtnfuncContext;
var RndfuncContext = /** @class */ (function (_super) {
    __extends(RndfuncContext, _super);
    function RndfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RndfuncContext.prototype.RND = function () { return this.getToken(jvmBasicParser.RND, 0); };
    RndfuncContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    RndfuncContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    RndfuncContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(RndfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_rndfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RndfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterRndfunc) {
            listener.enterRndfunc(this);
        }
    };
    // @Override
    RndfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitRndfunc) {
            listener.exitRndfunc(this);
        }
    };
    // @Override
    RndfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitRndfunc) {
            return visitor.visitRndfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RndfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RndfuncContext = RndfuncContext;
var SgnfuncContext = /** @class */ (function (_super) {
    __extends(SgnfuncContext, _super);
    function SgnfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SgnfuncContext.prototype.SGN = function () { return this.getToken(jvmBasicParser.SGN, 0); };
    SgnfuncContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    SgnfuncContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    SgnfuncContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(SgnfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_sgnfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SgnfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterSgnfunc) {
            listener.enterSgnfunc(this);
        }
    };
    // @Override
    SgnfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitSgnfunc) {
            listener.exitSgnfunc(this);
        }
    };
    // @Override
    SgnfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitSgnfunc) {
            return visitor.visitSgnfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SgnfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SgnfuncContext = SgnfuncContext;
var ExpfuncContext = /** @class */ (function (_super) {
    __extends(ExpfuncContext, _super);
    function ExpfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpfuncContext.prototype.EXP = function () { return this.getToken(jvmBasicParser.EXP, 0); };
    ExpfuncContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    ExpfuncContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    ExpfuncContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(ExpfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_expfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterExpfunc) {
            listener.enterExpfunc(this);
        }
    };
    // @Override
    ExpfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitExpfunc) {
            listener.exitExpfunc(this);
        }
    };
    // @Override
    ExpfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitExpfunc) {
            return visitor.visitExpfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpfuncContext = ExpfuncContext;
var LogfuncContext = /** @class */ (function (_super) {
    __extends(LogfuncContext, _super);
    function LogfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LogfuncContext.prototype.LOG = function () { return this.getToken(jvmBasicParser.LOG, 0); };
    LogfuncContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    LogfuncContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    LogfuncContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(LogfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_logfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LogfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterLogfunc) {
            listener.enterLogfunc(this);
        }
    };
    // @Override
    LogfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitLogfunc) {
            listener.exitLogfunc(this);
        }
    };
    // @Override
    LogfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitLogfunc) {
            return visitor.visitLogfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LogfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LogfuncContext = LogfuncContext;
var AbsfuncContext = /** @class */ (function (_super) {
    __extends(AbsfuncContext, _super);
    function AbsfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AbsfuncContext.prototype.ABS = function () { return this.getToken(jvmBasicParser.ABS, 0); };
    AbsfuncContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    AbsfuncContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    AbsfuncContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(AbsfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_absfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AbsfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterAbsfunc) {
            listener.enterAbsfunc(this);
        }
    };
    // @Override
    AbsfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitAbsfunc) {
            listener.exitAbsfunc(this);
        }
    };
    // @Override
    AbsfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitAbsfunc) {
            return visitor.visitAbsfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AbsfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AbsfuncContext = AbsfuncContext;
var TabfuncContext = /** @class */ (function (_super) {
    __extends(TabfuncContext, _super);
    function TabfuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TabfuncContext.prototype.TAB = function () { return this.getToken(jvmBasicParser.TAB, 0); };
    TabfuncContext.prototype.LPAREN = function () { return this.getToken(jvmBasicParser.LPAREN, 0); };
    TabfuncContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    TabfuncContext.prototype.RPAREN = function () { return this.getToken(jvmBasicParser.RPAREN, 0); };
    Object.defineProperty(TabfuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return jvmBasicParser.RULE_tabfunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TabfuncContext.prototype.enterRule = function (listener) {
        if (listener.enterTabfunc) {
            listener.enterTabfunc(this);
        }
    };
    // @Override
    TabfuncContext.prototype.exitRule = function (listener) {
        if (listener.exitTabfunc) {
            listener.exitTabfunc(this);
        }
    };
    // @Override
    TabfuncContext.prototype.accept = function (visitor) {
        if (visitor.visitTabfunc) {
            return visitor.visitTabfunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TabfuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TabfuncContext = TabfuncContext;
