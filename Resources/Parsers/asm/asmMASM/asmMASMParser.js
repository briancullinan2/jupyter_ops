"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/asm/asmMASM/asmMASM.g4 by ANTLR 4.7.3-SNAPSHOT
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
var asmMASMParser = /** @class */ (function (_super) {
    __extends(asmMASMParser, _super);
    function asmMASMParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(asmMASMParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(asmMASMParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return asmMASMParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(asmMASMParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "asmMASM.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(asmMASMParser.prototype, "ruleNames", {
        // @Override
        get: function () { return asmMASMParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(asmMASMParser.prototype, "serializedATN", {
        // @Override
        get: function () { return asmMASMParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    asmMASMParser.prototype.prog = function () {
        var _localctx = new ProgContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, asmMASMParser.RULE_prog);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 89;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asmMASMParser.T__2) | (1 << asmMASMParser.T__6) | (1 << asmMASMParser.ORG) | (1 << asmMASMParser.ENDIF) | (1 << asmMASMParser.IF) | (1 << asmMASMParser.EQU) | (1 << asmMASMParser.DW) | (1 << asmMASMParser.DB) | (1 << asmMASMParser.DM) | (1 << asmMASMParser.DS) | (1 << asmMASMParser.PUT) | (1 << asmMASMParser.NOT) | (1 << asmMASMParser.REGISTER) | (1 << asmMASMParser.OPCODE) | (1 << asmMASMParser.REP) | (1 << asmMASMParser.OFFSET) | (1 << asmMASMParser.DOLLAR) | (1 << asmMASMParser.QUES) | (1 << asmMASMParser.BYTE) | (1 << asmMASMParser.SBYTE) | (1 << asmMASMParser.WORD))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (asmMASMParser.DWORD - 32)) | (1 << (asmMASMParser.ASSUME - 32)) | (1 << (asmMASMParser.SIGN - 32)) | (1 << (asmMASMParser.EXTERN - 32)) | (1 << (asmMASMParser.MASMDIRECTIVE - 32)) | (1 << (asmMASMParser.NAME - 32)) | (1 << (asmMASMParser.NUMBER - 32)) | (1 << (asmMASMParser.STRING1 - 32)) | (1 << (asmMASMParser.STRING2 - 32)) | (1 << (asmMASMParser.COMMENT - 32)) | (1 << (asmMASMParser.EOL - 32)))) !== 0)) {
                    {
                        {
                            this.state = 84;
                            this.line();
                            this.state = 85;
                            this.match(asmMASMParser.EOL);
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
    asmMASMParser.prototype.line = function () {
        var _localctx = new LineContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, asmMASMParser.RULE_line);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 93;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                    case 1:
                        {
                            this.state = 92;
                            this.lbl();
                        }
                        break;
                }
                this.state = 98;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                    case 1:
                        {
                            this.state = 95;
                            this.assemblerdirective();
                        }
                        break;
                    case 2:
                        {
                            this.state = 96;
                            this.masmdirectives();
                        }
                        break;
                    case 3:
                        {
                            this.state = 97;
                            this.instruction();
                        }
                        break;
                }
                this.state = 101;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === asmMASMParser.COMMENT) {
                    {
                        this.state = 100;
                        this.comment();
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
    asmMASMParser.prototype.instruction = function () {
        var _localctx = new InstructionContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, asmMASMParser.RULE_instruction);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 104;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === asmMASMParser.REP) {
                    {
                        this.state = 103;
                        this.rep();
                    }
                }
                this.state = 107;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                    case 1:
                        {
                            this.state = 106;
                            this.opcode();
                        }
                        break;
                }
                this.state = 110;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asmMASMParser.T__2) | (1 << asmMASMParser.T__6) | (1 << asmMASMParser.ORG) | (1 << asmMASMParser.ENDIF) | (1 << asmMASMParser.IF) | (1 << asmMASMParser.EQU) | (1 << asmMASMParser.PUT) | (1 << asmMASMParser.NOT) | (1 << asmMASMParser.REGISTER) | (1 << asmMASMParser.OPCODE) | (1 << asmMASMParser.OFFSET) | (1 << asmMASMParser.DOLLAR) | (1 << asmMASMParser.QUES))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (asmMASMParser.SIGN - 39)) | (1 << (asmMASMParser.NAME - 39)) | (1 << (asmMASMParser.NUMBER - 39)) | (1 << (asmMASMParser.STRING1 - 39)) | (1 << (asmMASMParser.STRING2 - 39)))) !== 0)) {
                    {
                        this.state = 109;
                        this.expressionlist();
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
    asmMASMParser.prototype.lbl = function () {
        var _localctx = new LblContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, asmMASMParser.RULE_lbl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 112;
                this.label();
                this.state = 114;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === asmMASMParser.T__0) {
                    {
                        this.state = 113;
                        this.match(asmMASMParser.T__0);
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
    asmMASMParser.prototype.assemblerdirective = function () {
        var _localctx = new AssemblerdirectiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, asmMASMParser.RULE_assemblerdirective);
        var _la;
        try {
            this.state = 138;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 116;
                        this.org();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 117;
                        this.if_();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 118;
                        this.endif();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 119;
                        this.equ();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 120;
                        this.db();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 121;
                        this.dw();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 122;
                        this.dm();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 123;
                        this.ds();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 124;
                        this.put();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 125;
                        this.assign();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 126;
                        this.segment();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 127;
                        this.endsegment();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 128;
                        this.group();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 129;
                        this.label_();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 130;
                        this.assume();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 131;
                        this.extern();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        {
                            this.state = 132;
                            this.type();
                            this.state = 134;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 133;
                                        this.expressionlist();
                                    }
                                }
                                this.state = 136;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asmMASMParser.T__2) | (1 << asmMASMParser.T__6) | (1 << asmMASMParser.ORG) | (1 << asmMASMParser.ENDIF) | (1 << asmMASMParser.IF) | (1 << asmMASMParser.EQU) | (1 << asmMASMParser.PUT) | (1 << asmMASMParser.NOT) | (1 << asmMASMParser.REGISTER) | (1 << asmMASMParser.OPCODE) | (1 << asmMASMParser.OFFSET) | (1 << asmMASMParser.DOLLAR) | (1 << asmMASMParser.QUES))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (asmMASMParser.SIGN - 39)) | (1 << (asmMASMParser.NAME - 39)) | (1 << (asmMASMParser.NUMBER - 39)) | (1 << (asmMASMParser.STRING1 - 39)) | (1 << (asmMASMParser.STRING2 - 39)))) !== 0));
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
    asmMASMParser.prototype.masmdirectives = function () {
        var _localctx = new MasmdirectivesContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, asmMASMParser.RULE_masmdirectives);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 141;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 140;
                            this.masmdirective();
                        }
                    }
                    this.state = 143;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === asmMASMParser.MASMDIRECTIVE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asmMASMParser.prototype.masmdirective = function () {
        var _localctx = new MasmdirectiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, asmMASMParser.RULE_masmdirective);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 145;
                this.match(asmMASMParser.MASMDIRECTIVE);
                this.state = 147;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asmMASMParser.T__2) | (1 << asmMASMParser.T__6) | (1 << asmMASMParser.ORG) | (1 << asmMASMParser.ENDIF) | (1 << asmMASMParser.IF) | (1 << asmMASMParser.EQU) | (1 << asmMASMParser.PUT) | (1 << asmMASMParser.NOT) | (1 << asmMASMParser.REGISTER) | (1 << asmMASMParser.OPCODE) | (1 << asmMASMParser.OFFSET) | (1 << asmMASMParser.DOLLAR) | (1 << asmMASMParser.QUES))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (asmMASMParser.SIGN - 39)) | (1 << (asmMASMParser.NAME - 39)) | (1 << (asmMASMParser.NUMBER - 39)) | (1 << (asmMASMParser.STRING1 - 39)) | (1 << (asmMASMParser.STRING2 - 39)))) !== 0)) {
                    {
                        this.state = 146;
                        this.expressionlist();
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
    asmMASMParser.prototype.assume = function () {
        var _localctx = new AssumeContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, asmMASMParser.RULE_assume);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 149;
                this.match(asmMASMParser.ASSUME);
                this.state = 150;
                this.register_();
                this.state = 151;
                this.match(asmMASMParser.T__0);
                this.state = 152;
                this.name();
                this.state = 160;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === asmMASMParser.T__1) {
                    {
                        {
                            this.state = 153;
                            this.match(asmMASMParser.T__1);
                            this.state = 154;
                            this.register_();
                            this.state = 155;
                            this.match(asmMASMParser.T__0);
                            this.state = 156;
                            this.name();
                        }
                    }
                    this.state = 162;
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
    asmMASMParser.prototype.label_ = function () {
        var _localctx = new Label_Context(this._ctx, this.state);
        this.enterRule(_localctx, 16, asmMASMParser.RULE_label_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 163;
                this.name();
                this.state = 164;
                this.match(asmMASMParser.LABEL);
                this.state = 165;
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
    asmMASMParser.prototype.type = function () {
        var _localctx = new TypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, asmMASMParser.RULE_type);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 167;
                _la = this._input.LA(1);
                if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (asmMASMParser.BYTE - 29)) | (1 << (asmMASMParser.SBYTE - 29)) | (1 << (asmMASMParser.WORD - 29)) | (1 << (asmMASMParser.DWORD - 29)))) !== 0))) {
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
    asmMASMParser.prototype.group = function () {
        var _localctx = new GroupContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, asmMASMParser.RULE_group);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 169;
                this.name();
                this.state = 170;
                this.match(asmMASMParser.GROUP);
                this.state = 171;
                this.name();
                this.state = 176;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === asmMASMParser.T__1) {
                    {
                        {
                            this.state = 172;
                            this.match(asmMASMParser.T__1);
                            this.state = 173;
                            this.name();
                        }
                    }
                    this.state = 178;
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
    asmMASMParser.prototype.segment = function () {
        var _localctx = new SegmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, asmMASMParser.RULE_segment);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 179;
                this.name();
                this.state = 180;
                this.match(asmMASMParser.SEGMENT);
                this.state = 182;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (asmMASMParser.BYTE - 29)) | (1 << (asmMASMParser.WORD - 29)) | (1 << (asmMASMParser.DWORD - 29)) | (1 << (asmMASMParser.PARA - 29)) | (1 << (asmMASMParser.PAGE - 29)) | (1 << (asmMASMParser.ALIGN - 29)))) !== 0)) {
                    {
                        this.state = 181;
                        this.align();
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
    asmMASMParser.prototype.endsegment = function () {
        var _localctx = new EndsegmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, asmMASMParser.RULE_endsegment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 184;
                this.name();
                this.state = 185;
                this.match(asmMASMParser.SEGMENTEND);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asmMASMParser.prototype.align = function () {
        var _localctx = new AlignContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, asmMASMParser.RULE_align);
        var _la;
        try {
            this.state = 193;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case asmMASMParser.BYTE:
                case asmMASMParser.WORD:
                case asmMASMParser.DWORD:
                case asmMASMParser.PARA:
                case asmMASMParser.PAGE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 187;
                        _la = this._input.LA(1);
                        if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (asmMASMParser.BYTE - 29)) | (1 << (asmMASMParser.WORD - 29)) | (1 << (asmMASMParser.DWORD - 29)) | (1 << (asmMASMParser.PARA - 29)) | (1 << (asmMASMParser.PAGE - 29)))) !== 0))) {
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
                case asmMASMParser.ALIGN:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 188;
                            this.match(asmMASMParser.ALIGN);
                            this.state = 189;
                            this.match(asmMASMParser.T__2);
                            this.state = 190;
                            this.number();
                            this.state = 191;
                            this.match(asmMASMParser.T__3);
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
    asmMASMParser.prototype.assign = function () {
        var _localctx = new AssignContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, asmMASMParser.RULE_assign);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 195;
                this.name();
                this.state = 196;
                this.match(asmMASMParser.ASSIGN);
                this.state = 197;
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
    asmMASMParser.prototype.put = function () {
        var _localctx = new PutContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, asmMASMParser.RULE_put);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 199;
                this.match(asmMASMParser.PUT);
                this.state = 200;
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
    asmMASMParser.prototype.ds = function () {
        var _localctx = new DsContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, asmMASMParser.RULE_ds);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 202;
                this.match(asmMASMParser.DS);
                this.state = 203;
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
    asmMASMParser.prototype.dw = function () {
        var _localctx = new DwContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, asmMASMParser.RULE_dw);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 205;
                this.match(asmMASMParser.DW);
                this.state = 206;
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
    asmMASMParser.prototype.db = function () {
        var _localctx = new DbContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, asmMASMParser.RULE_db);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 208;
                this.match(asmMASMParser.DB);
                this.state = 209;
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
    asmMASMParser.prototype.dm = function () {
        var _localctx = new DmContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, asmMASMParser.RULE_dm);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 211;
                this.match(asmMASMParser.DM);
                this.state = 212;
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
    asmMASMParser.prototype.dup = function () {
        var _localctx = new DupContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, asmMASMParser.RULE_dup);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 214;
                this.number();
                this.state = 215;
                this.match(asmMASMParser.DUP);
                this.state = 216;
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
    asmMASMParser.prototype.equ = function () {
        var _localctx = new EquContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, asmMASMParser.RULE_equ);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 218;
                this.match(asmMASMParser.EQU);
                this.state = 219;
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
    asmMASMParser.prototype.extern = function () {
        var _localctx = new ExternContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, asmMASMParser.RULE_extern);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 221;
                this.match(asmMASMParser.EXTERN);
                this.state = 222;
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
    asmMASMParser.prototype.if_ = function () {
        var _localctx = new If_Context(this._ctx, this.state);
        this.enterRule(_localctx, 46, asmMASMParser.RULE_if_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 224;
                this.match(asmMASMParser.IF);
                this.state = 225;
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
    asmMASMParser.prototype.endif = function () {
        var _localctx = new EndifContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, asmMASMParser.RULE_endif);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 227;
                this.match(asmMASMParser.ENDIF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asmMASMParser.prototype.org = function () {
        var _localctx = new OrgContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, asmMASMParser.RULE_org);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 229;
                this.match(asmMASMParser.ORG);
                this.state = 230;
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
    asmMASMParser.prototype.expressionlist = function () {
        var _localctx = new ExpressionlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, asmMASMParser.RULE_expressionlist);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 232;
                this.expression();
                this.state = 237;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === asmMASMParser.T__1) {
                    {
                        {
                            this.state = 233;
                            this.match(asmMASMParser.T__1);
                            this.state = 234;
                            this.expression();
                        }
                    }
                    this.state = 239;
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
    asmMASMParser.prototype.label = function () {
        var _localctx = new LabelContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, asmMASMParser.RULE_label);
        try {
            this.state = 242;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case asmMASMParser.NAME:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 240;
                        this.name();
                    }
                    break;
                case asmMASMParser.ORG:
                case asmMASMParser.ENDIF:
                case asmMASMParser.IF:
                case asmMASMParser.EQU:
                case asmMASMParser.PUT:
                case asmMASMParser.OPCODE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 241;
                        this.gross();
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
    asmMASMParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, asmMASMParser.RULE_expression);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 244;
                this.multiplyingExpression();
                this.state = 249;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 245;
                                this.match(asmMASMParser.SIGN);
                                this.state = 246;
                                this.multiplyingExpression();
                            }
                        }
                    }
                    this.state = 251;
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
    asmMASMParser.prototype.multiplyingExpression = function () {
        var _localctx = new MultiplyingExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, asmMASMParser.RULE_multiplyingExpression);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 252;
                this.argument();
                this.state = 257;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 253;
                                _la = this._input.LA(1);
                                if (!(_la === asmMASMParser.T__4 || _la === asmMASMParser.T__5)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 254;
                                this.argument();
                            }
                        }
                    }
                    this.state = 259;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
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
    asmMASMParser.prototype.argument = function () {
        var _localctx = new ArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, asmMASMParser.RULE_argument);
        try {
            this.state = 285;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 260;
                        this.number();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 261;
                        this.dollar();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 262;
                        this.ques();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 263;
                        this.register_();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 267;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 20, this._ctx)) {
                            case 1:
                                {
                                    this.state = 264;
                                    this.name();
                                    this.state = 265;
                                    this.match(asmMASMParser.T__0);
                                }
                                break;
                        }
                        this.state = 269;
                        this.name();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 270;
                        this.string();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        {
                            this.state = 271;
                            this.match(asmMASMParser.T__2);
                            this.state = 272;
                            this.expression();
                            this.state = 273;
                            this.match(asmMASMParser.T__3);
                        }
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        {
                            this.state = 275;
                            this.match(asmMASMParser.T__6);
                            this.state = 276;
                            this.expression();
                            this.state = 277;
                            this.match(asmMASMParser.T__7);
                        }
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 279;
                        this.match(asmMASMParser.NOT);
                        this.state = 280;
                        this.expression();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 281;
                        this.match(asmMASMParser.OFFSET);
                        this.state = 282;
                        this.expression();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 283;
                        this.gross();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 284;
                        this.dup();
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
    asmMASMParser.prototype.gross = function () {
        var _localctx = new GrossContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, asmMASMParser.RULE_gross);
        try {
            this.state = 289;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case asmMASMParser.OPCODE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 287;
                        this.opcode();
                    }
                    break;
                case asmMASMParser.ORG:
                case asmMASMParser.ENDIF:
                case asmMASMParser.IF:
                case asmMASMParser.EQU:
                case asmMASMParser.PUT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 288;
                        this.grossrawassemblerdirective();
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
    asmMASMParser.prototype.grossrawassemblerdirective = function () {
        var _localctx = new GrossrawassemblerdirectiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, asmMASMParser.RULE_grossrawassemblerdirective);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 291;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asmMASMParser.ORG) | (1 << asmMASMParser.ENDIF) | (1 << asmMASMParser.IF) | (1 << asmMASMParser.EQU) | (1 << asmMASMParser.PUT))) !== 0))) {
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
    asmMASMParser.prototype.dollar = function () {
        var _localctx = new DollarContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, asmMASMParser.RULE_dollar);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 293;
                this.match(asmMASMParser.DOLLAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asmMASMParser.prototype.ques = function () {
        var _localctx = new QuesContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, asmMASMParser.RULE_ques);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 295;
                this.match(asmMASMParser.QUES);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asmMASMParser.prototype.register_ = function () {
        var _localctx = new Register_Context(this._ctx, this.state);
        this.enterRule(_localctx, 70, asmMASMParser.RULE_register_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 297;
                this.match(asmMASMParser.REGISTER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asmMASMParser.prototype.string = function () {
        var _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, asmMASMParser.RULE_string);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 299;
                _la = this._input.LA(1);
                if (!(_la === asmMASMParser.STRING1 || _la === asmMASMParser.STRING2)) {
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
    asmMASMParser.prototype.name = function () {
        var _localctx = new NameContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, asmMASMParser.RULE_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 301;
                this.match(asmMASMParser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asmMASMParser.prototype.number = function () {
        var _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, asmMASMParser.RULE_number);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 304;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === asmMASMParser.SIGN) {
                    {
                        this.state = 303;
                        this.match(asmMASMParser.SIGN);
                    }
                }
                this.state = 306;
                this.match(asmMASMParser.NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asmMASMParser.prototype.opcode = function () {
        var _localctx = new OpcodeContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, asmMASMParser.RULE_opcode);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 308;
                this.match(asmMASMParser.OPCODE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asmMASMParser.prototype.rep = function () {
        var _localctx = new RepContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, asmMASMParser.RULE_rep);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 310;
                this.match(asmMASMParser.REP);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    asmMASMParser.prototype.comment = function () {
        var _localctx = new CommentContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, asmMASMParser.RULE_comment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 312;
                this.match(asmMASMParser.COMMENT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(asmMASMParser, "_ATN", {
        get: function () {
            if (!asmMASMParser.__ATN) {
                asmMASMParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(asmMASMParser._serializedATN));
            }
            return asmMASMParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    asmMASMParser.T__0 = 1;
    asmMASMParser.T__1 = 2;
    asmMASMParser.T__2 = 3;
    asmMASMParser.T__3 = 4;
    asmMASMParser.T__4 = 5;
    asmMASMParser.T__5 = 6;
    asmMASMParser.T__6 = 7;
    asmMASMParser.T__7 = 8;
    asmMASMParser.ORG = 9;
    asmMASMParser.ENDIF = 10;
    asmMASMParser.IF = 11;
    asmMASMParser.EQU = 12;
    asmMASMParser.DW = 13;
    asmMASMParser.DB = 14;
    asmMASMParser.DM = 15;
    asmMASMParser.DS = 16;
    asmMASMParser.PUT = 17;
    asmMASMParser.NOT = 18;
    asmMASMParser.REGISTER = 19;
    asmMASMParser.OPCODE = 20;
    asmMASMParser.REP = 21;
    asmMASMParser.ASSIGN = 22;
    asmMASMParser.OFFSET = 23;
    asmMASMParser.DOLLAR = 24;
    asmMASMParser.QUES = 25;
    asmMASMParser.SEGMENT = 26;
    asmMASMParser.SEGMENTEND = 27;
    asmMASMParser.GROUP = 28;
    asmMASMParser.BYTE = 29;
    asmMASMParser.SBYTE = 30;
    asmMASMParser.WORD = 31;
    asmMASMParser.DWORD = 32;
    asmMASMParser.PARA = 33;
    asmMASMParser.PAGE = 34;
    asmMASMParser.ALIGN = 35;
    asmMASMParser.LABEL = 36;
    asmMASMParser.DUP = 37;
    asmMASMParser.ASSUME = 38;
    asmMASMParser.SIGN = 39;
    asmMASMParser.EXTERN = 40;
    asmMASMParser.MASMDIRECTIVE = 41;
    asmMASMParser.NAME = 42;
    asmMASMParser.NUMBER = 43;
    asmMASMParser.STRING1 = 44;
    asmMASMParser.STRING2 = 45;
    asmMASMParser.COMMENT = 46;
    asmMASMParser.EOL = 47;
    asmMASMParser.WS = 48;
    asmMASMParser.RULE_prog = 0;
    asmMASMParser.RULE_line = 1;
    asmMASMParser.RULE_instruction = 2;
    asmMASMParser.RULE_lbl = 3;
    asmMASMParser.RULE_assemblerdirective = 4;
    asmMASMParser.RULE_masmdirectives = 5;
    asmMASMParser.RULE_masmdirective = 6;
    asmMASMParser.RULE_assume = 7;
    asmMASMParser.RULE_label_ = 8;
    asmMASMParser.RULE_type = 9;
    asmMASMParser.RULE_group = 10;
    asmMASMParser.RULE_segment = 11;
    asmMASMParser.RULE_endsegment = 12;
    asmMASMParser.RULE_align = 13;
    asmMASMParser.RULE_assign = 14;
    asmMASMParser.RULE_put = 15;
    asmMASMParser.RULE_ds = 16;
    asmMASMParser.RULE_dw = 17;
    asmMASMParser.RULE_db = 18;
    asmMASMParser.RULE_dm = 19;
    asmMASMParser.RULE_dup = 20;
    asmMASMParser.RULE_equ = 21;
    asmMASMParser.RULE_extern = 22;
    asmMASMParser.RULE_if_ = 23;
    asmMASMParser.RULE_endif = 24;
    asmMASMParser.RULE_org = 25;
    asmMASMParser.RULE_expressionlist = 26;
    asmMASMParser.RULE_label = 27;
    asmMASMParser.RULE_expression = 28;
    asmMASMParser.RULE_multiplyingExpression = 29;
    asmMASMParser.RULE_argument = 30;
    asmMASMParser.RULE_gross = 31;
    asmMASMParser.RULE_grossrawassemblerdirective = 32;
    asmMASMParser.RULE_dollar = 33;
    asmMASMParser.RULE_ques = 34;
    asmMASMParser.RULE_register_ = 35;
    asmMASMParser.RULE_string = 36;
    asmMASMParser.RULE_name = 37;
    asmMASMParser.RULE_number = 38;
    asmMASMParser.RULE_opcode = 39;
    asmMASMParser.RULE_rep = 40;
    asmMASMParser.RULE_comment = 41;
    // tslint:disable:no-trailing-whitespace
    asmMASMParser.ruleNames = [
        "prog", "line", "instruction", "lbl", "assemblerdirective", "masmdirectives",
        "masmdirective", "assume", "label_", "type", "group", "segment", "endsegment",
        "align", "assign", "put", "ds", "dw", "db", "dm", "dup", "equ", "extern",
        "if_", "endif", "org", "expressionlist", "label", "expression", "multiplyingExpression",
        "argument", "gross", "grossrawassemblerdirective", "dollar", "ques", "register_",
        "string", "name", "number", "opcode", "rep", "comment",
    ];
    asmMASMParser._LITERAL_NAMES = [
        undefined, "':'", "','", "'('", "')'", "'*'", "'/'", "'['", "']'", undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, "'='", undefined,
        "'$'", "'?'",
    ];
    asmMASMParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "ORG", "ENDIF", "IF", "EQU", "DW", "DB", "DM", "DS",
        "PUT", "NOT", "REGISTER", "OPCODE", "REP", "ASSIGN", "OFFSET", "DOLLAR",
        "QUES", "SEGMENT", "SEGMENTEND", "GROUP", "BYTE", "SBYTE", "WORD", "DWORD",
        "PARA", "PAGE", "ALIGN", "LABEL", "DUP", "ASSUME", "SIGN", "EXTERN", "MASMDIRECTIVE",
        "NAME", "NUMBER", "STRING1", "STRING2", "COMMENT", "EOL", "WS",
    ];
    asmMASMParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(asmMASMParser._LITERAL_NAMES, asmMASMParser._SYMBOLIC_NAMES, []);
    asmMASMParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x032\u013D\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
        "\x03\x02\x03\x02\x03\x02\x07\x02Z\n\x02\f\x02\x0E\x02]\v\x02\x03\x03\x05" +
        "\x03`\n\x03\x03\x03\x03\x03\x03\x03\x05\x03e\n\x03\x03\x03\x05\x03h\n" +
        "\x03\x03\x04\x05\x04k\n\x04\x03\x04\x05\x04n\n\x04\x03\x04\x05\x04q\n" +
        "\x04\x03\x05\x03\x05\x05\x05u\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
        "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
        "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06\x89\n\x06\r\x06\x0E\x06\x8A" +
        "\x05\x06\x8D\n\x06\x03\x07\x06\x07\x90\n\x07\r\x07\x0E\x07\x91\x03\b\x03" +
        "\b\x05\b\x96\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
        "\x07\t\xA1\n\t\f\t\x0E\t\xA4\v\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03" +
        "\f\x03\f\x03\f\x03\f\x03\f\x07\f\xB1\n\f\f\f\x0E\f\xB4\v\f\x03\r\x03\r" +
        "\x03\r\x05\r\xB9\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03" +
        "\x0F\x03\x0F\x03\x0F\x05\x0F\xC4\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10" +
        "\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13" +
        "\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16" +
        "\x03\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19" +
        "\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C" +
        "\x07\x1C\xEE\n\x1C\f\x1C\x0E\x1C\xF1\v\x1C\x03\x1D\x03\x1D\x05\x1D\xF5" +
        "\n\x1D\x03\x1E\x03\x1E\x03\x1E\x07\x1E\xFA\n\x1E\f\x1E\x0E\x1E\xFD\v\x1E" +
        "\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u0102\n\x1F\f\x1F\x0E\x1F\u0105\v\x1F" +
        "\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x05 \u010E\n \x03 \x03 \x03 \x03 " +
        "\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x05 \u0120" +
        "\n \x03!\x03!\x05!\u0124\n!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%" +
        "\x03&\x03&\x03\'\x03\'\x03(\x05(\u0133\n(\x03(\x03(\x03)\x03)\x03*\x03" +
        "*\x03+\x03+\x03+\x02\x02\x02,\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
        "\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
        " \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
        "<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02\x02" +
        "\x07\x03\x02\x1F\"\x04\x02\x1F\x1F!$\x03\x02\x07\b\x04\x02\v\x0E\x13\x13" +
        "\x03\x02./\x02\u0145\x02[\x03\x02\x02\x02\x04_\x03\x02\x02\x02\x06j\x03" +
        "\x02\x02\x02\br\x03\x02\x02\x02\n\x8C\x03\x02\x02\x02\f\x8F\x03\x02\x02" +
        "\x02\x0E\x93\x03\x02\x02\x02\x10\x97\x03\x02\x02\x02\x12\xA5\x03\x02\x02" +
        "\x02\x14\xA9\x03\x02\x02\x02\x16\xAB\x03\x02\x02\x02\x18\xB5\x03\x02\x02" +
        "\x02\x1A\xBA\x03\x02\x02\x02\x1C\xC3\x03\x02\x02\x02\x1E\xC5\x03\x02\x02" +
        "\x02 \xC9\x03\x02\x02\x02\"\xCC\x03\x02\x02\x02$\xCF\x03\x02\x02\x02&" +
        "\xD2\x03\x02\x02\x02(\xD5\x03\x02\x02\x02*\xD8\x03\x02\x02\x02,\xDC\x03" +
        "\x02\x02\x02.\xDF\x03\x02\x02\x020\xE2\x03\x02\x02\x022\xE5\x03\x02\x02" +
        "\x024\xE7\x03\x02\x02\x026\xEA\x03\x02\x02\x028\xF4\x03\x02\x02\x02:\xF6" +
        "\x03\x02\x02\x02<\xFE\x03\x02\x02\x02>\u011F\x03\x02\x02\x02@\u0123\x03" +
        "\x02\x02\x02B\u0125\x03\x02\x02\x02D\u0127\x03\x02\x02\x02F\u0129\x03" +
        "\x02\x02\x02H\u012B\x03\x02\x02\x02J\u012D\x03\x02\x02\x02L\u012F\x03" +
        "\x02\x02\x02N\u0132\x03\x02\x02\x02P\u0136\x03\x02\x02\x02R\u0138\x03" +
        "\x02\x02\x02T\u013A\x03\x02\x02\x02VW\x05\x04\x03\x02WX\x071\x02\x02X" +
        "Z\x03\x02\x02\x02YV\x03\x02\x02\x02Z]\x03\x02\x02\x02[Y\x03\x02\x02\x02" +
        "[\\\x03\x02\x02\x02\\\x03\x03\x02\x02\x02][\x03\x02\x02\x02^`\x05\b\x05" +
        "\x02_^\x03\x02\x02\x02_`\x03\x02\x02\x02`d\x03\x02\x02\x02ae\x05\n\x06" +
        "\x02be\x05\f\x07\x02ce\x05\x06\x04\x02da\x03\x02\x02\x02db\x03\x02\x02" +
        "\x02dc\x03\x02\x02\x02de\x03\x02\x02\x02eg\x03\x02\x02\x02fh\x05T+\x02" +
        "gf\x03\x02\x02\x02gh\x03\x02\x02\x02h\x05\x03\x02\x02\x02ik\x05R*\x02" +
        "ji\x03\x02\x02\x02jk\x03\x02\x02\x02km\x03\x02\x02\x02ln\x05P)\x02ml\x03" +
        "\x02\x02\x02mn\x03\x02\x02\x02np\x03\x02\x02\x02oq\x056\x1C\x02po\x03" +
        "\x02\x02\x02pq\x03\x02\x02\x02q\x07\x03\x02\x02\x02rt\x058\x1D\x02su\x07" +
        "\x03\x02\x02ts\x03\x02\x02\x02tu\x03\x02\x02\x02u\t\x03\x02\x02\x02v\x8D" +
        "\x054\x1B\x02w\x8D\x050\x19\x02x\x8D\x052\x1A\x02y\x8D\x05,\x17\x02z\x8D" +
        "\x05&\x14\x02{\x8D\x05$\x13\x02|\x8D\x05(\x15\x02}\x8D\x05\"\x12\x02~" +
        "\x8D\x05 \x11\x02\x7F\x8D\x05\x1E\x10\x02\x80\x8D\x05\x18\r\x02\x81\x8D" +
        "\x05\x1A\x0E\x02\x82\x8D\x05\x16\f\x02\x83\x8D\x05\x12\n\x02\x84\x8D\x05" +
        "\x10\t\x02\x85\x8D\x05.\x18\x02\x86\x88\x05\x14\v\x02\x87\x89\x056\x1C" +
        "\x02\x88\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x88\x03\x02\x02" +
        "\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8D\x03\x02\x02\x02\x8Cv\x03\x02\x02" +
        "\x02\x8Cw\x03\x02\x02\x02\x8Cx\x03\x02\x02\x02\x8Cy\x03\x02\x02\x02\x8C" +
        "z\x03\x02\x02\x02\x8C{\x03\x02\x02\x02\x8C|\x03\x02\x02\x02\x8C}\x03\x02" +
        "\x02\x02\x8C~\x03\x02\x02\x02\x8C\x7F\x03\x02\x02\x02\x8C\x80\x03\x02" +
        "\x02\x02\x8C\x81\x03\x02\x02\x02\x8C\x82\x03\x02\x02\x02\x8C\x83\x03\x02" +
        "\x02\x02\x8C\x84\x03\x02\x02\x02\x8C\x85\x03\x02\x02\x02\x8C\x86\x03\x02" +
        "\x02\x02\x8D\v\x03\x02\x02\x02\x8E\x90\x05\x0E\b\x02\x8F\x8E\x03\x02\x02" +
        "\x02\x90\x91\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x91\x92\x03\x02\x02" +
        "\x02\x92\r\x03\x02\x02\x02\x93\x95\x07+\x02\x02\x94\x96\x056\x1C\x02\x95" +
        "\x94\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x0F\x03\x02\x02\x02\x97" +
        "\x98\x07(\x02\x02\x98\x99\x05H%\x02\x99\x9A\x07\x03\x02\x02\x9A\xA2\x05" +
        "L\'\x02\x9B\x9C\x07\x04\x02\x02\x9C\x9D\x05H%\x02\x9D\x9E\x07\x03\x02" +
        "\x02\x9E\x9F\x05L\'\x02\x9F\xA1\x03\x02\x02\x02\xA0\x9B\x03\x02\x02\x02" +
        "\xA1\xA4\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02" +
        "\xA3\x11\x03\x02\x02\x02\xA4\xA2\x03\x02\x02\x02\xA5\xA6\x05L\'\x02\xA6" +
        "\xA7\x07&\x02\x02\xA7\xA8\x05\x14\v\x02\xA8\x13\x03\x02\x02\x02\xA9\xAA" +
        "\t\x02\x02\x02\xAA\x15\x03\x02\x02\x02\xAB\xAC\x05L\'\x02\xAC\xAD\x07" +
        "\x1E\x02\x02\xAD\xB2\x05L\'\x02\xAE\xAF\x07\x04\x02\x02\xAF\xB1\x05L\'" +
        "\x02\xB0\xAE\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0\x03\x02\x02" +
        "\x02\xB2\xB3\x03\x02\x02\x02\xB3\x17\x03\x02\x02\x02\xB4\xB2\x03\x02\x02" +
        "\x02\xB5\xB6\x05L\'\x02\xB6\xB8\x07\x1C\x02\x02\xB7\xB9\x05\x1C\x0F\x02" +
        "\xB8\xB7\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\x19\x03\x02\x02\x02" +
        "\xBA\xBB\x05L\'\x02\xBB\xBC\x07\x1D\x02\x02\xBC\x1B\x03\x02\x02\x02\xBD" +
        "\xC4\t\x03\x02\x02\xBE\xBF\x07%\x02\x02\xBF\xC0\x07\x05\x02\x02\xC0\xC1" +
        "\x05N(\x02\xC1\xC2\x07\x06\x02\x02\xC2\xC4\x03\x02\x02\x02\xC3\xBD\x03" +
        "\x02\x02\x02\xC3\xBE\x03\x02\x02\x02\xC4\x1D\x03\x02\x02\x02\xC5\xC6\x05" +
        "L\'\x02\xC6\xC7\x07\x18\x02\x02\xC7\xC8\x05:\x1E\x02\xC8\x1F\x03\x02\x02" +
        "\x02\xC9\xCA\x07\x13\x02\x02\xCA\xCB\x056\x1C\x02\xCB!\x03\x02\x02\x02" +
        "\xCC\xCD\x07\x12\x02\x02\xCD\xCE\x056\x1C\x02\xCE#\x03\x02\x02\x02\xCF" +
        "\xD0\x07\x0F\x02\x02\xD0\xD1\x056\x1C\x02\xD1%\x03\x02\x02\x02\xD2\xD3" +
        "\x07\x10\x02\x02\xD3\xD4\x056\x1C\x02\xD4\'\x03\x02\x02\x02\xD5\xD6\x07" +
        "\x11\x02\x02\xD6\xD7\x056\x1C\x02\xD7)\x03\x02\x02\x02\xD8\xD9\x05N(\x02" +
        "\xD9\xDA\x07\'\x02\x02\xDA\xDB\x05:\x1E\x02\xDB+\x03\x02\x02\x02\xDC\xDD" +
        "\x07\x0E\x02\x02\xDD\xDE\x05:\x1E\x02\xDE-\x03\x02\x02\x02\xDF\xE0\x07" +
        "*\x02\x02\xE0\xE1\x05:\x1E\x02\xE1/\x03\x02\x02\x02\xE2\xE3\x07\r\x02" +
        "\x02\xE3\xE4\x05:\x1E\x02\xE41\x03\x02\x02\x02\xE5\xE6\x07\f\x02\x02\xE6" +
        "3\x03\x02\x02\x02\xE7\xE8\x07\v\x02\x02\xE8\xE9\x05:\x1E\x02\xE95\x03" +
        "\x02\x02\x02\xEA\xEF\x05:\x1E\x02\xEB\xEC\x07\x04\x02\x02\xEC\xEE\x05" +
        ":\x1E\x02\xED\xEB\x03\x02\x02\x02\xEE\xF1\x03\x02\x02\x02\xEF\xED\x03" +
        "\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF07\x03\x02\x02\x02\xF1\xEF\x03" +
        "\x02\x02\x02\xF2\xF5\x05L\'\x02\xF3\xF5\x05@!\x02\xF4\xF2\x03\x02\x02" +
        "\x02\xF4\xF3\x03\x02\x02\x02\xF59\x03\x02\x02\x02\xF6\xFB\x05<\x1F\x02" +
        "\xF7\xF8\x07)\x02\x02\xF8\xFA\x05<\x1F\x02\xF9\xF7\x03\x02\x02\x02\xFA" +
        "\xFD\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC" +
        ";\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFE\u0103\x05> \x02\xFF\u0100" +
        "\t\x04\x02\x02\u0100\u0102\x05> \x02\u0101\xFF\x03\x02\x02\x02\u0102\u0105" +
        "\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02" +
        "\u0104=\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02\u0106\u0120\x05N(" +
        "\x02\u0107\u0120\x05D#\x02\u0108\u0120\x05F$\x02\u0109\u0120\x05H%\x02" +
        "\u010A\u010B\x05L\'\x02\u010B\u010C\x07\x03\x02\x02\u010C\u010E\x03\x02" +
        "\x02\x02\u010D\u010A\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E" +
        "\u010F\x03\x02\x02\x02\u010F\u0120\x05L\'\x02\u0110\u0120\x05J&\x02\u0111" +
        "\u0112\x07\x05\x02\x02\u0112\u0113\x05:\x1E\x02\u0113\u0114\x07\x06\x02" +
        "\x02\u0114\u0120\x03\x02\x02\x02\u0115\u0116\x07\t\x02\x02\u0116\u0117" +
        "\x05:\x1E\x02\u0117\u0118\x07\n\x02\x02\u0118\u0120\x03\x02\x02\x02\u0119" +
        "\u011A\x07\x14\x02\x02\u011A\u0120\x05:\x1E\x02\u011B\u011C\x07\x19\x02" +
        "\x02\u011C\u0120\x05:\x1E\x02\u011D\u0120\x05@!\x02\u011E\u0120\x05*\x16" +
        "\x02\u011F\u0106\x03\x02\x02\x02\u011F\u0107\x03\x02\x02\x02\u011F\u0108" +
        "\x03\x02\x02\x02\u011F\u0109\x03\x02\x02\x02\u011F\u010D\x03\x02\x02\x02" +
        "\u011F\u0110\x03\x02\x02\x02\u011F\u0111\x03\x02\x02\x02\u011F\u0115\x03" +
        "\x02\x02\x02\u011F\u0119\x03\x02\x02\x02\u011F\u011B\x03\x02\x02\x02\u011F" +
        "\u011D\x03\x02\x02\x02\u011F\u011E\x03\x02\x02\x02\u0120?\x03\x02\x02" +
        "\x02\u0121\u0124\x05P)\x02\u0122\u0124\x05B\"\x02\u0123\u0121\x03\x02" +
        "\x02\x02\u0123\u0122\x03\x02\x02\x02\u0124A\x03\x02\x02\x02\u0125\u0126" +
        "\t\x05\x02\x02\u0126C\x03\x02\x02\x02\u0127\u0128\x07\x1A\x02\x02\u0128" +
        "E\x03\x02\x02\x02\u0129\u012A\x07\x1B\x02\x02\u012AG\x03\x02\x02\x02\u012B" +
        "\u012C\x07\x15\x02\x02\u012CI\x03\x02\x02\x02\u012D\u012E\t\x06\x02\x02" +
        "\u012EK\x03\x02\x02\x02\u012F\u0130\x07,\x02\x02\u0130M\x03\x02\x02\x02" +
        "\u0131\u0133\x07)\x02\x02\u0132\u0131\x03\x02\x02\x02\u0132\u0133\x03" +
        "\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0135\x07-\x02\x02\u0135" +
        "O\x03\x02\x02\x02\u0136\u0137\x07\x16\x02\x02\u0137Q\x03\x02\x02\x02\u0138" +
        "\u0139\x07\x17\x02\x02\u0139S\x03\x02\x02\x02\u013A\u013B\x070\x02\x02" +
        "\u013BU\x03\x02\x02\x02\x1A[_dgjmpt\x8A\x8C\x91\x95\xA2\xB2\xB8\xC3\xEF" +
        "\xF4\xFB\u0103\u010D\u011F\u0123\u0132";
    return asmMASMParser;
}(Parser_1.Parser));
exports.asmMASMParser = asmMASMParser;
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
            return this.getTokens(asmMASMParser.EOL);
        }
        else {
            return this.getToken(asmMASMParser.EOL, i);
        }
    };
    Object.defineProperty(ProgContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_prog; },
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
    LineContext.prototype.lbl = function () {
        return this.tryGetRuleContext(0, LblContext);
    };
    LineContext.prototype.assemblerdirective = function () {
        return this.tryGetRuleContext(0, AssemblerdirectiveContext);
    };
    LineContext.prototype.masmdirectives = function () {
        return this.tryGetRuleContext(0, MasmdirectivesContext);
    };
    LineContext.prototype.instruction = function () {
        return this.tryGetRuleContext(0, InstructionContext);
    };
    LineContext.prototype.comment = function () {
        return this.tryGetRuleContext(0, CommentContext);
    };
    Object.defineProperty(LineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_line; },
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
var InstructionContext = /** @class */ (function (_super) {
    __extends(InstructionContext, _super);
    function InstructionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InstructionContext.prototype.rep = function () {
        return this.tryGetRuleContext(0, RepContext);
    };
    InstructionContext.prototype.opcode = function () {
        return this.tryGetRuleContext(0, OpcodeContext);
    };
    InstructionContext.prototype.expressionlist = function () {
        return this.tryGetRuleContext(0, ExpressionlistContext);
    };
    Object.defineProperty(InstructionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_instruction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InstructionContext.prototype.enterRule = function (listener) {
        if (listener.enterInstruction) {
            listener.enterInstruction(this);
        }
    };
    // @Override
    InstructionContext.prototype.exitRule = function (listener) {
        if (listener.exitInstruction) {
            listener.exitInstruction(this);
        }
    };
    // @Override
    InstructionContext.prototype.accept = function (visitor) {
        if (visitor.visitInstruction) {
            return visitor.visitInstruction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InstructionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InstructionContext = InstructionContext;
var LblContext = /** @class */ (function (_super) {
    __extends(LblContext, _super);
    function LblContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LblContext.prototype.label = function () {
        return this.getRuleContext(0, LabelContext);
    };
    Object.defineProperty(LblContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_lbl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LblContext.prototype.enterRule = function (listener) {
        if (listener.enterLbl) {
            listener.enterLbl(this);
        }
    };
    // @Override
    LblContext.prototype.exitRule = function (listener) {
        if (listener.exitLbl) {
            listener.exitLbl(this);
        }
    };
    // @Override
    LblContext.prototype.accept = function (visitor) {
        if (visitor.visitLbl) {
            return visitor.visitLbl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LblContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LblContext = LblContext;
var AssemblerdirectiveContext = /** @class */ (function (_super) {
    __extends(AssemblerdirectiveContext, _super);
    function AssemblerdirectiveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssemblerdirectiveContext.prototype.org = function () {
        return this.tryGetRuleContext(0, OrgContext);
    };
    AssemblerdirectiveContext.prototype.if_ = function () {
        return this.tryGetRuleContext(0, If_Context);
    };
    AssemblerdirectiveContext.prototype.endif = function () {
        return this.tryGetRuleContext(0, EndifContext);
    };
    AssemblerdirectiveContext.prototype.equ = function () {
        return this.tryGetRuleContext(0, EquContext);
    };
    AssemblerdirectiveContext.prototype.db = function () {
        return this.tryGetRuleContext(0, DbContext);
    };
    AssemblerdirectiveContext.prototype.dw = function () {
        return this.tryGetRuleContext(0, DwContext);
    };
    AssemblerdirectiveContext.prototype.dm = function () {
        return this.tryGetRuleContext(0, DmContext);
    };
    AssemblerdirectiveContext.prototype.ds = function () {
        return this.tryGetRuleContext(0, DsContext);
    };
    AssemblerdirectiveContext.prototype.put = function () {
        return this.tryGetRuleContext(0, PutContext);
    };
    AssemblerdirectiveContext.prototype.assign = function () {
        return this.tryGetRuleContext(0, AssignContext);
    };
    AssemblerdirectiveContext.prototype.segment = function () {
        return this.tryGetRuleContext(0, SegmentContext);
    };
    AssemblerdirectiveContext.prototype.endsegment = function () {
        return this.tryGetRuleContext(0, EndsegmentContext);
    };
    AssemblerdirectiveContext.prototype.group = function () {
        return this.tryGetRuleContext(0, GroupContext);
    };
    AssemblerdirectiveContext.prototype.label_ = function () {
        return this.tryGetRuleContext(0, Label_Context);
    };
    AssemblerdirectiveContext.prototype.assume = function () {
        return this.tryGetRuleContext(0, AssumeContext);
    };
    AssemblerdirectiveContext.prototype.extern = function () {
        return this.tryGetRuleContext(0, ExternContext);
    };
    AssemblerdirectiveContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    AssemblerdirectiveContext.prototype.expressionlist = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionlistContext);
        }
        else {
            return this.getRuleContext(i, ExpressionlistContext);
        }
    };
    Object.defineProperty(AssemblerdirectiveContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_assemblerdirective; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssemblerdirectiveContext.prototype.enterRule = function (listener) {
        if (listener.enterAssemblerdirective) {
            listener.enterAssemblerdirective(this);
        }
    };
    // @Override
    AssemblerdirectiveContext.prototype.exitRule = function (listener) {
        if (listener.exitAssemblerdirective) {
            listener.exitAssemblerdirective(this);
        }
    };
    // @Override
    AssemblerdirectiveContext.prototype.accept = function (visitor) {
        if (visitor.visitAssemblerdirective) {
            return visitor.visitAssemblerdirective(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssemblerdirectiveContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssemblerdirectiveContext = AssemblerdirectiveContext;
var MasmdirectivesContext = /** @class */ (function (_super) {
    __extends(MasmdirectivesContext, _super);
    function MasmdirectivesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MasmdirectivesContext.prototype.masmdirective = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MasmdirectiveContext);
        }
        else {
            return this.getRuleContext(i, MasmdirectiveContext);
        }
    };
    Object.defineProperty(MasmdirectivesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_masmdirectives; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MasmdirectivesContext.prototype.enterRule = function (listener) {
        if (listener.enterMasmdirectives) {
            listener.enterMasmdirectives(this);
        }
    };
    // @Override
    MasmdirectivesContext.prototype.exitRule = function (listener) {
        if (listener.exitMasmdirectives) {
            listener.exitMasmdirectives(this);
        }
    };
    // @Override
    MasmdirectivesContext.prototype.accept = function (visitor) {
        if (visitor.visitMasmdirectives) {
            return visitor.visitMasmdirectives(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MasmdirectivesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MasmdirectivesContext = MasmdirectivesContext;
var MasmdirectiveContext = /** @class */ (function (_super) {
    __extends(MasmdirectiveContext, _super);
    function MasmdirectiveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MasmdirectiveContext.prototype.MASMDIRECTIVE = function () { return this.getToken(asmMASMParser.MASMDIRECTIVE, 0); };
    MasmdirectiveContext.prototype.expressionlist = function () {
        return this.tryGetRuleContext(0, ExpressionlistContext);
    };
    Object.defineProperty(MasmdirectiveContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_masmdirective; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MasmdirectiveContext.prototype.enterRule = function (listener) {
        if (listener.enterMasmdirective) {
            listener.enterMasmdirective(this);
        }
    };
    // @Override
    MasmdirectiveContext.prototype.exitRule = function (listener) {
        if (listener.exitMasmdirective) {
            listener.exitMasmdirective(this);
        }
    };
    // @Override
    MasmdirectiveContext.prototype.accept = function (visitor) {
        if (visitor.visitMasmdirective) {
            return visitor.visitMasmdirective(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MasmdirectiveContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MasmdirectiveContext = MasmdirectiveContext;
var AssumeContext = /** @class */ (function (_super) {
    __extends(AssumeContext, _super);
    function AssumeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssumeContext.prototype.ASSUME = function () { return this.getToken(asmMASMParser.ASSUME, 0); };
    AssumeContext.prototype.register_ = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Register_Context);
        }
        else {
            return this.getRuleContext(i, Register_Context);
        }
    };
    AssumeContext.prototype.name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NameContext);
        }
        else {
            return this.getRuleContext(i, NameContext);
        }
    };
    Object.defineProperty(AssumeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_assume; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssumeContext.prototype.enterRule = function (listener) {
        if (listener.enterAssume) {
            listener.enterAssume(this);
        }
    };
    // @Override
    AssumeContext.prototype.exitRule = function (listener) {
        if (listener.exitAssume) {
            listener.exitAssume(this);
        }
    };
    // @Override
    AssumeContext.prototype.accept = function (visitor) {
        if (visitor.visitAssume) {
            return visitor.visitAssume(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssumeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssumeContext = AssumeContext;
var Label_Context = /** @class */ (function (_super) {
    __extends(Label_Context, _super);
    function Label_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Label_Context.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    Label_Context.prototype.LABEL = function () { return this.getToken(asmMASMParser.LABEL, 0); };
    Label_Context.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    Object.defineProperty(Label_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_label_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Label_Context.prototype.enterRule = function (listener) {
        if (listener.enterLabel_) {
            listener.enterLabel_(this);
        }
    };
    // @Override
    Label_Context.prototype.exitRule = function (listener) {
        if (listener.exitLabel_) {
            listener.exitLabel_(this);
        }
    };
    // @Override
    Label_Context.prototype.accept = function (visitor) {
        if (visitor.visitLabel_) {
            return visitor.visitLabel_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Label_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Label_Context = Label_Context;
var TypeContext = /** @class */ (function (_super) {
    __extends(TypeContext, _super);
    function TypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeContext.prototype.BYTE = function () { return this.tryGetToken(asmMASMParser.BYTE, 0); };
    TypeContext.prototype.SBYTE = function () { return this.tryGetToken(asmMASMParser.SBYTE, 0); };
    TypeContext.prototype.WORD = function () { return this.tryGetToken(asmMASMParser.WORD, 0); };
    TypeContext.prototype.DWORD = function () { return this.tryGetToken(asmMASMParser.DWORD, 0); };
    Object.defineProperty(TypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_type; },
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
var GroupContext = /** @class */ (function (_super) {
    __extends(GroupContext, _super);
    function GroupContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GroupContext.prototype.name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NameContext);
        }
        else {
            return this.getRuleContext(i, NameContext);
        }
    };
    GroupContext.prototype.GROUP = function () { return this.getToken(asmMASMParser.GROUP, 0); };
    Object.defineProperty(GroupContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_group; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GroupContext.prototype.enterRule = function (listener) {
        if (listener.enterGroup) {
            listener.enterGroup(this);
        }
    };
    // @Override
    GroupContext.prototype.exitRule = function (listener) {
        if (listener.exitGroup) {
            listener.exitGroup(this);
        }
    };
    // @Override
    GroupContext.prototype.accept = function (visitor) {
        if (visitor.visitGroup) {
            return visitor.visitGroup(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GroupContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GroupContext = GroupContext;
var SegmentContext = /** @class */ (function (_super) {
    __extends(SegmentContext, _super);
    function SegmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SegmentContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    SegmentContext.prototype.SEGMENT = function () { return this.getToken(asmMASMParser.SEGMENT, 0); };
    SegmentContext.prototype.align = function () {
        return this.tryGetRuleContext(0, AlignContext);
    };
    Object.defineProperty(SegmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_segment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SegmentContext.prototype.enterRule = function (listener) {
        if (listener.enterSegment) {
            listener.enterSegment(this);
        }
    };
    // @Override
    SegmentContext.prototype.exitRule = function (listener) {
        if (listener.exitSegment) {
            listener.exitSegment(this);
        }
    };
    // @Override
    SegmentContext.prototype.accept = function (visitor) {
        if (visitor.visitSegment) {
            return visitor.visitSegment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SegmentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SegmentContext = SegmentContext;
var EndsegmentContext = /** @class */ (function (_super) {
    __extends(EndsegmentContext, _super);
    function EndsegmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EndsegmentContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    EndsegmentContext.prototype.SEGMENTEND = function () { return this.getToken(asmMASMParser.SEGMENTEND, 0); };
    Object.defineProperty(EndsegmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_endsegment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EndsegmentContext.prototype.enterRule = function (listener) {
        if (listener.enterEndsegment) {
            listener.enterEndsegment(this);
        }
    };
    // @Override
    EndsegmentContext.prototype.exitRule = function (listener) {
        if (listener.exitEndsegment) {
            listener.exitEndsegment(this);
        }
    };
    // @Override
    EndsegmentContext.prototype.accept = function (visitor) {
        if (visitor.visitEndsegment) {
            return visitor.visitEndsegment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EndsegmentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EndsegmentContext = EndsegmentContext;
var AlignContext = /** @class */ (function (_super) {
    __extends(AlignContext, _super);
    function AlignContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlignContext.prototype.BYTE = function () { return this.tryGetToken(asmMASMParser.BYTE, 0); };
    AlignContext.prototype.WORD = function () { return this.tryGetToken(asmMASMParser.WORD, 0); };
    AlignContext.prototype.DWORD = function () { return this.tryGetToken(asmMASMParser.DWORD, 0); };
    AlignContext.prototype.PARA = function () { return this.tryGetToken(asmMASMParser.PARA, 0); };
    AlignContext.prototype.PAGE = function () { return this.tryGetToken(asmMASMParser.PAGE, 0); };
    AlignContext.prototype.ALIGN = function () { return this.tryGetToken(asmMASMParser.ALIGN, 0); };
    AlignContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    Object.defineProperty(AlignContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_align; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlignContext.prototype.enterRule = function (listener) {
        if (listener.enterAlign) {
            listener.enterAlign(this);
        }
    };
    // @Override
    AlignContext.prototype.exitRule = function (listener) {
        if (listener.exitAlign) {
            listener.exitAlign(this);
        }
    };
    // @Override
    AlignContext.prototype.accept = function (visitor) {
        if (visitor.visitAlign) {
            return visitor.visitAlign(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlignContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlignContext = AlignContext;
var AssignContext = /** @class */ (function (_super) {
    __extends(AssignContext, _super);
    function AssignContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    AssignContext.prototype.ASSIGN = function () { return this.getToken(asmMASMParser.ASSIGN, 0); };
    AssignContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(AssignContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_assign; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignContext.prototype.enterRule = function (listener) {
        if (listener.enterAssign) {
            listener.enterAssign(this);
        }
    };
    // @Override
    AssignContext.prototype.exitRule = function (listener) {
        if (listener.exitAssign) {
            listener.exitAssign(this);
        }
    };
    // @Override
    AssignContext.prototype.accept = function (visitor) {
        if (visitor.visitAssign) {
            return visitor.visitAssign(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignContext = AssignContext;
var PutContext = /** @class */ (function (_super) {
    __extends(PutContext, _super);
    function PutContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PutContext.prototype.PUT = function () { return this.getToken(asmMASMParser.PUT, 0); };
    PutContext.prototype.expressionlist = function () {
        return this.getRuleContext(0, ExpressionlistContext);
    };
    Object.defineProperty(PutContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_put; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PutContext.prototype.enterRule = function (listener) {
        if (listener.enterPut) {
            listener.enterPut(this);
        }
    };
    // @Override
    PutContext.prototype.exitRule = function (listener) {
        if (listener.exitPut) {
            listener.exitPut(this);
        }
    };
    // @Override
    PutContext.prototype.accept = function (visitor) {
        if (visitor.visitPut) {
            return visitor.visitPut(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PutContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PutContext = PutContext;
var DsContext = /** @class */ (function (_super) {
    __extends(DsContext, _super);
    function DsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DsContext.prototype.DS = function () { return this.getToken(asmMASMParser.DS, 0); };
    DsContext.prototype.expressionlist = function () {
        return this.getRuleContext(0, ExpressionlistContext);
    };
    Object.defineProperty(DsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_ds; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DsContext.prototype.enterRule = function (listener) {
        if (listener.enterDs) {
            listener.enterDs(this);
        }
    };
    // @Override
    DsContext.prototype.exitRule = function (listener) {
        if (listener.exitDs) {
            listener.exitDs(this);
        }
    };
    // @Override
    DsContext.prototype.accept = function (visitor) {
        if (visitor.visitDs) {
            return visitor.visitDs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DsContext = DsContext;
var DwContext = /** @class */ (function (_super) {
    __extends(DwContext, _super);
    function DwContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DwContext.prototype.DW = function () { return this.getToken(asmMASMParser.DW, 0); };
    DwContext.prototype.expressionlist = function () {
        return this.getRuleContext(0, ExpressionlistContext);
    };
    Object.defineProperty(DwContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_dw; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DwContext.prototype.enterRule = function (listener) {
        if (listener.enterDw) {
            listener.enterDw(this);
        }
    };
    // @Override
    DwContext.prototype.exitRule = function (listener) {
        if (listener.exitDw) {
            listener.exitDw(this);
        }
    };
    // @Override
    DwContext.prototype.accept = function (visitor) {
        if (visitor.visitDw) {
            return visitor.visitDw(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DwContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DwContext = DwContext;
var DbContext = /** @class */ (function (_super) {
    __extends(DbContext, _super);
    function DbContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DbContext.prototype.DB = function () { return this.getToken(asmMASMParser.DB, 0); };
    DbContext.prototype.expressionlist = function () {
        return this.getRuleContext(0, ExpressionlistContext);
    };
    Object.defineProperty(DbContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_db; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DbContext.prototype.enterRule = function (listener) {
        if (listener.enterDb) {
            listener.enterDb(this);
        }
    };
    // @Override
    DbContext.prototype.exitRule = function (listener) {
        if (listener.exitDb) {
            listener.exitDb(this);
        }
    };
    // @Override
    DbContext.prototype.accept = function (visitor) {
        if (visitor.visitDb) {
            return visitor.visitDb(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DbContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DbContext = DbContext;
var DmContext = /** @class */ (function (_super) {
    __extends(DmContext, _super);
    function DmContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DmContext.prototype.DM = function () { return this.getToken(asmMASMParser.DM, 0); };
    DmContext.prototype.expressionlist = function () {
        return this.getRuleContext(0, ExpressionlistContext);
    };
    Object.defineProperty(DmContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_dm; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DmContext.prototype.enterRule = function (listener) {
        if (listener.enterDm) {
            listener.enterDm(this);
        }
    };
    // @Override
    DmContext.prototype.exitRule = function (listener) {
        if (listener.exitDm) {
            listener.exitDm(this);
        }
    };
    // @Override
    DmContext.prototype.accept = function (visitor) {
        if (visitor.visitDm) {
            return visitor.visitDm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DmContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DmContext = DmContext;
var DupContext = /** @class */ (function (_super) {
    __extends(DupContext, _super);
    function DupContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DupContext.prototype.number = function () {
        return this.getRuleContext(0, NumberContext);
    };
    DupContext.prototype.DUP = function () { return this.getToken(asmMASMParser.DUP, 0); };
    DupContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(DupContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_dup; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DupContext.prototype.enterRule = function (listener) {
        if (listener.enterDup) {
            listener.enterDup(this);
        }
    };
    // @Override
    DupContext.prototype.exitRule = function (listener) {
        if (listener.exitDup) {
            listener.exitDup(this);
        }
    };
    // @Override
    DupContext.prototype.accept = function (visitor) {
        if (visitor.visitDup) {
            return visitor.visitDup(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DupContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DupContext = DupContext;
var EquContext = /** @class */ (function (_super) {
    __extends(EquContext, _super);
    function EquContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EquContext.prototype.EQU = function () { return this.getToken(asmMASMParser.EQU, 0); };
    EquContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(EquContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_equ; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EquContext.prototype.enterRule = function (listener) {
        if (listener.enterEqu) {
            listener.enterEqu(this);
        }
    };
    // @Override
    EquContext.prototype.exitRule = function (listener) {
        if (listener.exitEqu) {
            listener.exitEqu(this);
        }
    };
    // @Override
    EquContext.prototype.accept = function (visitor) {
        if (visitor.visitEqu) {
            return visitor.visitEqu(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EquContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EquContext = EquContext;
var ExternContext = /** @class */ (function (_super) {
    __extends(ExternContext, _super);
    function ExternContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExternContext.prototype.EXTERN = function () { return this.getToken(asmMASMParser.EXTERN, 0); };
    ExternContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ExternContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_extern; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExternContext.prototype.enterRule = function (listener) {
        if (listener.enterExtern) {
            listener.enterExtern(this);
        }
    };
    // @Override
    ExternContext.prototype.exitRule = function (listener) {
        if (listener.exitExtern) {
            listener.exitExtern(this);
        }
    };
    // @Override
    ExternContext.prototype.accept = function (visitor) {
        if (visitor.visitExtern) {
            return visitor.visitExtern(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExternContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExternContext = ExternContext;
var If_Context = /** @class */ (function (_super) {
    __extends(If_Context, _super);
    function If_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    If_Context.prototype.IF = function () { return this.getToken(asmMASMParser.IF, 0); };
    If_Context.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(If_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_if_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    If_Context.prototype.enterRule = function (listener) {
        if (listener.enterIf_) {
            listener.enterIf_(this);
        }
    };
    // @Override
    If_Context.prototype.exitRule = function (listener) {
        if (listener.exitIf_) {
            listener.exitIf_(this);
        }
    };
    // @Override
    If_Context.prototype.accept = function (visitor) {
        if (visitor.visitIf_) {
            return visitor.visitIf_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return If_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.If_Context = If_Context;
var EndifContext = /** @class */ (function (_super) {
    __extends(EndifContext, _super);
    function EndifContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EndifContext.prototype.ENDIF = function () { return this.getToken(asmMASMParser.ENDIF, 0); };
    Object.defineProperty(EndifContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_endif; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EndifContext.prototype.enterRule = function (listener) {
        if (listener.enterEndif) {
            listener.enterEndif(this);
        }
    };
    // @Override
    EndifContext.prototype.exitRule = function (listener) {
        if (listener.exitEndif) {
            listener.exitEndif(this);
        }
    };
    // @Override
    EndifContext.prototype.accept = function (visitor) {
        if (visitor.visitEndif) {
            return visitor.visitEndif(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EndifContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EndifContext = EndifContext;
var OrgContext = /** @class */ (function (_super) {
    __extends(OrgContext, _super);
    function OrgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OrgContext.prototype.ORG = function () { return this.getToken(asmMASMParser.ORG, 0); };
    OrgContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(OrgContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_org; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OrgContext.prototype.enterRule = function (listener) {
        if (listener.enterOrg) {
            listener.enterOrg(this);
        }
    };
    // @Override
    OrgContext.prototype.exitRule = function (listener) {
        if (listener.exitOrg) {
            listener.exitOrg(this);
        }
    };
    // @Override
    OrgContext.prototype.accept = function (visitor) {
        if (visitor.visitOrg) {
            return visitor.visitOrg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OrgContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OrgContext = OrgContext;
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
    Object.defineProperty(ExpressionlistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_expressionlist; },
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
var LabelContext = /** @class */ (function (_super) {
    __extends(LabelContext, _super);
    function LabelContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LabelContext.prototype.name = function () {
        return this.tryGetRuleContext(0, NameContext);
    };
    LabelContext.prototype.gross = function () {
        return this.tryGetRuleContext(0, GrossContext);
    };
    Object.defineProperty(LabelContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_label; },
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
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.multiplyingExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MultiplyingExpressionContext);
        }
        else {
            return this.getRuleContext(i, MultiplyingExpressionContext);
        }
    };
    ExpressionContext.prototype.SIGN = function (i) {
        if (i === undefined) {
            return this.getTokens(asmMASMParser.SIGN);
        }
        else {
            return this.getToken(asmMASMParser.SIGN, i);
        }
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_expression; },
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
var MultiplyingExpressionContext = /** @class */ (function (_super) {
    __extends(MultiplyingExpressionContext, _super);
    function MultiplyingExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultiplyingExpressionContext.prototype.argument = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentContext);
        }
        else {
            return this.getRuleContext(i, ArgumentContext);
        }
    };
    Object.defineProperty(MultiplyingExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_multiplyingExpression; },
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
var ArgumentContext = /** @class */ (function (_super) {
    __extends(ArgumentContext, _super);
    function ArgumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    ArgumentContext.prototype.dollar = function () {
        return this.tryGetRuleContext(0, DollarContext);
    };
    ArgumentContext.prototype.ques = function () {
        return this.tryGetRuleContext(0, QuesContext);
    };
    ArgumentContext.prototype.register_ = function () {
        return this.tryGetRuleContext(0, Register_Context);
    };
    ArgumentContext.prototype.name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NameContext);
        }
        else {
            return this.getRuleContext(i, NameContext);
        }
    };
    ArgumentContext.prototype.string = function () {
        return this.tryGetRuleContext(0, StringContext);
    };
    ArgumentContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    ArgumentContext.prototype.NOT = function () { return this.tryGetToken(asmMASMParser.NOT, 0); };
    ArgumentContext.prototype.OFFSET = function () { return this.tryGetToken(asmMASMParser.OFFSET, 0); };
    ArgumentContext.prototype.gross = function () {
        return this.tryGetRuleContext(0, GrossContext);
    };
    ArgumentContext.prototype.dup = function () {
        return this.tryGetRuleContext(0, DupContext);
    };
    Object.defineProperty(ArgumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_argument; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArgumentContext.prototype.enterRule = function (listener) {
        if (listener.enterArgument) {
            listener.enterArgument(this);
        }
    };
    // @Override
    ArgumentContext.prototype.exitRule = function (listener) {
        if (listener.exitArgument) {
            listener.exitArgument(this);
        }
    };
    // @Override
    ArgumentContext.prototype.accept = function (visitor) {
        if (visitor.visitArgument) {
            return visitor.visitArgument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgumentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgumentContext = ArgumentContext;
var GrossContext = /** @class */ (function (_super) {
    __extends(GrossContext, _super);
    function GrossContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GrossContext.prototype.opcode = function () {
        return this.tryGetRuleContext(0, OpcodeContext);
    };
    GrossContext.prototype.grossrawassemblerdirective = function () {
        return this.tryGetRuleContext(0, GrossrawassemblerdirectiveContext);
    };
    Object.defineProperty(GrossContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_gross; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GrossContext.prototype.enterRule = function (listener) {
        if (listener.enterGross) {
            listener.enterGross(this);
        }
    };
    // @Override
    GrossContext.prototype.exitRule = function (listener) {
        if (listener.exitGross) {
            listener.exitGross(this);
        }
    };
    // @Override
    GrossContext.prototype.accept = function (visitor) {
        if (visitor.visitGross) {
            return visitor.visitGross(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GrossContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GrossContext = GrossContext;
var GrossrawassemblerdirectiveContext = /** @class */ (function (_super) {
    __extends(GrossrawassemblerdirectiveContext, _super);
    function GrossrawassemblerdirectiveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GrossrawassemblerdirectiveContext.prototype.PUT = function () { return this.tryGetToken(asmMASMParser.PUT, 0); };
    GrossrawassemblerdirectiveContext.prototype.IF = function () { return this.tryGetToken(asmMASMParser.IF, 0); };
    GrossrawassemblerdirectiveContext.prototype.ENDIF = function () { return this.tryGetToken(asmMASMParser.ENDIF, 0); };
    GrossrawassemblerdirectiveContext.prototype.ORG = function () { return this.tryGetToken(asmMASMParser.ORG, 0); };
    GrossrawassemblerdirectiveContext.prototype.EQU = function () { return this.tryGetToken(asmMASMParser.EQU, 0); };
    Object.defineProperty(GrossrawassemblerdirectiveContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_grossrawassemblerdirective; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GrossrawassemblerdirectiveContext.prototype.enterRule = function (listener) {
        if (listener.enterGrossrawassemblerdirective) {
            listener.enterGrossrawassemblerdirective(this);
        }
    };
    // @Override
    GrossrawassemblerdirectiveContext.prototype.exitRule = function (listener) {
        if (listener.exitGrossrawassemblerdirective) {
            listener.exitGrossrawassemblerdirective(this);
        }
    };
    // @Override
    GrossrawassemblerdirectiveContext.prototype.accept = function (visitor) {
        if (visitor.visitGrossrawassemblerdirective) {
            return visitor.visitGrossrawassemblerdirective(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GrossrawassemblerdirectiveContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GrossrawassemblerdirectiveContext = GrossrawassemblerdirectiveContext;
var DollarContext = /** @class */ (function (_super) {
    __extends(DollarContext, _super);
    function DollarContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DollarContext.prototype.DOLLAR = function () { return this.getToken(asmMASMParser.DOLLAR, 0); };
    Object.defineProperty(DollarContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_dollar; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DollarContext.prototype.enterRule = function (listener) {
        if (listener.enterDollar) {
            listener.enterDollar(this);
        }
    };
    // @Override
    DollarContext.prototype.exitRule = function (listener) {
        if (listener.exitDollar) {
            listener.exitDollar(this);
        }
    };
    // @Override
    DollarContext.prototype.accept = function (visitor) {
        if (visitor.visitDollar) {
            return visitor.visitDollar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DollarContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DollarContext = DollarContext;
var QuesContext = /** @class */ (function (_super) {
    __extends(QuesContext, _super);
    function QuesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QuesContext.prototype.QUES = function () { return this.getToken(asmMASMParser.QUES, 0); };
    Object.defineProperty(QuesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_ques; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QuesContext.prototype.enterRule = function (listener) {
        if (listener.enterQues) {
            listener.enterQues(this);
        }
    };
    // @Override
    QuesContext.prototype.exitRule = function (listener) {
        if (listener.exitQues) {
            listener.exitQues(this);
        }
    };
    // @Override
    QuesContext.prototype.accept = function (visitor) {
        if (visitor.visitQues) {
            return visitor.visitQues(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QuesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QuesContext = QuesContext;
var Register_Context = /** @class */ (function (_super) {
    __extends(Register_Context, _super);
    function Register_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Register_Context.prototype.REGISTER = function () { return this.getToken(asmMASMParser.REGISTER, 0); };
    Object.defineProperty(Register_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_register_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Register_Context.prototype.enterRule = function (listener) {
        if (listener.enterRegister_) {
            listener.enterRegister_(this);
        }
    };
    // @Override
    Register_Context.prototype.exitRule = function (listener) {
        if (listener.exitRegister_) {
            listener.exitRegister_(this);
        }
    };
    // @Override
    Register_Context.prototype.accept = function (visitor) {
        if (visitor.visitRegister_) {
            return visitor.visitRegister_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Register_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Register_Context = Register_Context;
var StringContext = /** @class */ (function (_super) {
    __extends(StringContext, _super);
    function StringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringContext.prototype.STRING1 = function () { return this.tryGetToken(asmMASMParser.STRING1, 0); };
    StringContext.prototype.STRING2 = function () { return this.tryGetToken(asmMASMParser.STRING2, 0); };
    Object.defineProperty(StringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_string; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StringContext.prototype.enterRule = function (listener) {
        if (listener.enterString) {
            listener.enterString(this);
        }
    };
    // @Override
    StringContext.prototype.exitRule = function (listener) {
        if (listener.exitString) {
            listener.exitString(this);
        }
    };
    // @Override
    StringContext.prototype.accept = function (visitor) {
        if (visitor.visitString) {
            return visitor.visitString(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StringContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StringContext = StringContext;
var NameContext = /** @class */ (function (_super) {
    __extends(NameContext, _super);
    function NameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NameContext.prototype.NAME = function () { return this.getToken(asmMASMParser.NAME, 0); };
    Object.defineProperty(NameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_name; },
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
var NumberContext = /** @class */ (function (_super) {
    __extends(NumberContext, _super);
    function NumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumberContext.prototype.NUMBER = function () { return this.getToken(asmMASMParser.NUMBER, 0); };
    NumberContext.prototype.SIGN = function () { return this.tryGetToken(asmMASMParser.SIGN, 0); };
    Object.defineProperty(NumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_number; },
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
var OpcodeContext = /** @class */ (function (_super) {
    __extends(OpcodeContext, _super);
    function OpcodeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OpcodeContext.prototype.OPCODE = function () { return this.getToken(asmMASMParser.OPCODE, 0); };
    Object.defineProperty(OpcodeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_opcode; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OpcodeContext.prototype.enterRule = function (listener) {
        if (listener.enterOpcode) {
            listener.enterOpcode(this);
        }
    };
    // @Override
    OpcodeContext.prototype.exitRule = function (listener) {
        if (listener.exitOpcode) {
            listener.exitOpcode(this);
        }
    };
    // @Override
    OpcodeContext.prototype.accept = function (visitor) {
        if (visitor.visitOpcode) {
            return visitor.visitOpcode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OpcodeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OpcodeContext = OpcodeContext;
var RepContext = /** @class */ (function (_super) {
    __extends(RepContext, _super);
    function RepContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RepContext.prototype.REP = function () { return this.getToken(asmMASMParser.REP, 0); };
    Object.defineProperty(RepContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_rep; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RepContext.prototype.enterRule = function (listener) {
        if (listener.enterRep) {
            listener.enterRep(this);
        }
    };
    // @Override
    RepContext.prototype.exitRule = function (listener) {
        if (listener.exitRep) {
            listener.exitRep(this);
        }
    };
    // @Override
    RepContext.prototype.accept = function (visitor) {
        if (visitor.visitRep) {
            return visitor.visitRep(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RepContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RepContext = RepContext;
var CommentContext = /** @class */ (function (_super) {
    __extends(CommentContext, _super);
    function CommentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommentContext.prototype.COMMENT = function () { return this.getToken(asmMASMParser.COMMENT, 0); };
    Object.defineProperty(CommentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return asmMASMParser.RULE_comment; },
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
