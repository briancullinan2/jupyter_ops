"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/logo/logo/logo.g4 by ANTLR 4.7.3-SNAPSHOT
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
var logoParser = /** @class */ (function (_super) {
    __extends(logoParser, _super);
    function logoParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(logoParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(logoParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return logoParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(logoParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "logo.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(logoParser.prototype, "ruleNames", {
        // @Override
        get: function () { return logoParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(logoParser.prototype, "serializedATN", {
        // @Override
        get: function () { return logoParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    logoParser.prototype.prog = function () {
        var _localctx = new ProgContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, logoParser.RULE_prog);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 80;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 77;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << logoParser.T__0) | (1 << logoParser.T__4) | (1 << logoParser.T__7) | (1 << logoParser.T__11) | (1 << logoParser.T__12) | (1 << logoParser.T__17) | (1 << logoParser.T__18) | (1 << logoParser.T__19) | (1 << logoParser.T__20) | (1 << logoParser.T__21) | (1 << logoParser.T__22) | (1 << logoParser.T__23) | (1 << logoParser.T__24) | (1 << logoParser.T__25) | (1 << logoParser.T__26) | (1 << logoParser.T__27) | (1 << logoParser.T__28) | (1 << logoParser.T__29) | (1 << logoParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (logoParser.T__31 - 32)) | (1 << (logoParser.T__32 - 32)) | (1 << (logoParser.T__33 - 32)) | (1 << (logoParser.T__34 - 32)) | (1 << (logoParser.T__35 - 32)) | (1 << (logoParser.T__36 - 32)) | (1 << (logoParser.T__37 - 32)) | (1 << (logoParser.T__38 - 32)) | (1 << (logoParser.T__40 - 32)) | (1 << (logoParser.STRING - 32)) | (1 << (logoParser.COMMENT - 32)))) !== 0)) {
                                        {
                                            this.state = 76;
                                            this.line();
                                        }
                                    }
                                    this.state = 79;
                                    this.match(logoParser.EOL);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 82;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 85;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << logoParser.T__0) | (1 << logoParser.T__4) | (1 << logoParser.T__7) | (1 << logoParser.T__11) | (1 << logoParser.T__12) | (1 << logoParser.T__17) | (1 << logoParser.T__18) | (1 << logoParser.T__19) | (1 << logoParser.T__20) | (1 << logoParser.T__21) | (1 << logoParser.T__22) | (1 << logoParser.T__23) | (1 << logoParser.T__24) | (1 << logoParser.T__25) | (1 << logoParser.T__26) | (1 << logoParser.T__27) | (1 << logoParser.T__28) | (1 << logoParser.T__29) | (1 << logoParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (logoParser.T__31 - 32)) | (1 << (logoParser.T__32 - 32)) | (1 << (logoParser.T__33 - 32)) | (1 << (logoParser.T__34 - 32)) | (1 << (logoParser.T__35 - 32)) | (1 << (logoParser.T__36 - 32)) | (1 << (logoParser.T__37 - 32)) | (1 << (logoParser.T__38 - 32)) | (1 << (logoParser.T__40 - 32)) | (1 << (logoParser.STRING - 32)) | (1 << (logoParser.COMMENT - 32)))) !== 0)) {
                    {
                        this.state = 84;
                        this.line();
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
    logoParser.prototype.line = function () {
        var _localctx = new LineContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, logoParser.RULE_line);
        var _la;
        try {
            this.state = 101;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case logoParser.T__4:
                case logoParser.T__7:
                case logoParser.T__11:
                case logoParser.T__17:
                case logoParser.T__18:
                case logoParser.T__19:
                case logoParser.T__20:
                case logoParser.T__21:
                case logoParser.T__22:
                case logoParser.T__23:
                case logoParser.T__24:
                case logoParser.T__25:
                case logoParser.T__26:
                case logoParser.T__27:
                case logoParser.T__28:
                case logoParser.T__29:
                case logoParser.T__30:
                case logoParser.T__31:
                case logoParser.T__32:
                case logoParser.T__33:
                case logoParser.T__34:
                case logoParser.T__35:
                case logoParser.T__36:
                case logoParser.T__37:
                case logoParser.T__38:
                case logoParser.T__40:
                case logoParser.STRING:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 88;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 87;
                                    this.cmd();
                                }
                            }
                            this.state = 90;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << logoParser.T__4) | (1 << logoParser.T__7) | (1 << logoParser.T__11) | (1 << logoParser.T__17) | (1 << logoParser.T__18) | (1 << logoParser.T__19) | (1 << logoParser.T__20) | (1 << logoParser.T__21) | (1 << logoParser.T__22) | (1 << logoParser.T__23) | (1 << logoParser.T__24) | (1 << logoParser.T__25) | (1 << logoParser.T__26) | (1 << logoParser.T__27) | (1 << logoParser.T__28) | (1 << logoParser.T__29) | (1 << logoParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (logoParser.T__31 - 32)) | (1 << (logoParser.T__32 - 32)) | (1 << (logoParser.T__33 - 32)) | (1 << (logoParser.T__34 - 32)) | (1 << (logoParser.T__35 - 32)) | (1 << (logoParser.T__36 - 32)) | (1 << (logoParser.T__37 - 32)) | (1 << (logoParser.T__38 - 32)) | (1 << (logoParser.T__40 - 32)) | (1 << (logoParser.STRING - 32)))) !== 0));
                        this.state = 93;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === logoParser.COMMENT) {
                            {
                                this.state = 92;
                                this.comment();
                            }
                        }
                    }
                    break;
                case logoParser.COMMENT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 95;
                        this.comment();
                    }
                    break;
                case logoParser.T__12:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 96;
                        this.print();
                        this.state = 98;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === logoParser.COMMENT) {
                            {
                                this.state = 97;
                                this.comment();
                            }
                        }
                    }
                    break;
                case logoParser.T__0:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 100;
                        this.procedureDeclaration();
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
    logoParser.prototype.cmd = function () {
        var _localctx = new CmdContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, logoParser.RULE_cmd);
        try {
            this.state = 121;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case logoParser.T__4:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 103;
                        this.repeat();
                    }
                    break;
                case logoParser.T__17:
                case logoParser.T__18:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 104;
                        this.fd();
                    }
                    break;
                case logoParser.T__19:
                case logoParser.T__20:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 105;
                        this.bk();
                    }
                    break;
                case logoParser.T__21:
                case logoParser.T__22:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 106;
                        this.rt();
                    }
                    break;
                case logoParser.T__23:
                case logoParser.T__24:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 107;
                        this.lt();
                    }
                    break;
                case logoParser.T__25:
                case logoParser.T__26:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 108;
                        this.cs();
                    }
                    break;
                case logoParser.T__27:
                case logoParser.T__28:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 109;
                        this.pu();
                    }
                    break;
                case logoParser.T__29:
                case logoParser.T__30:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 110;
                        this.pd();
                    }
                    break;
                case logoParser.T__31:
                case logoParser.T__32:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 111;
                        this.ht();
                    }
                    break;
                case logoParser.T__33:
                case logoParser.T__34:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 112;
                        this.st();
                    }
                    break;
                case logoParser.T__35:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 113;
                        this.home();
                    }
                    break;
                case logoParser.T__37:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 114;
                        this.label();
                    }
                    break;
                case logoParser.T__38:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 115;
                        this.setxy();
                    }
                    break;
                case logoParser.T__11:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 116;
                        this.make();
                    }
                    break;
                case logoParser.STRING:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 117;
                        this.procedureInvocation();
                    }
                    break;
                case logoParser.T__7:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 118;
                        this.ife();
                    }
                    break;
                case logoParser.T__36:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 119;
                        this.stop();
                    }
                    break;
                case logoParser.T__40:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 120;
                        this.fore();
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
    logoParser.prototype.procedureInvocation = function () {
        var _localctx = new ProcedureInvocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, logoParser.RULE_procedureInvocation);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 123;
                this.name();
                this.state = 127;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << logoParser.T__2) | (1 << logoParser.T__13) | (1 << logoParser.T__14))) !== 0) || _la === logoParser.T__39 || _la === logoParser.NUMBER) {
                    {
                        {
                            this.state = 124;
                            this.expression();
                        }
                    }
                    this.state = 129;
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
    logoParser.prototype.procedureDeclaration = function () {
        var _localctx = new ProcedureDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, logoParser.RULE_procedureDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 130;
                this.match(logoParser.T__0);
                this.state = 131;
                this.name();
                this.state = 135;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === logoParser.T__2) {
                    {
                        {
                            this.state = 132;
                            this.parameterDeclarations();
                        }
                    }
                    this.state = 137;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 139;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                    case 1:
                        {
                            this.state = 138;
                            this.match(logoParser.EOL);
                        }
                        break;
                }
                this.state = 145;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 142;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << logoParser.T__0) | (1 << logoParser.T__4) | (1 << logoParser.T__7) | (1 << logoParser.T__11) | (1 << logoParser.T__12) | (1 << logoParser.T__17) | (1 << logoParser.T__18) | (1 << logoParser.T__19) | (1 << logoParser.T__20) | (1 << logoParser.T__21) | (1 << logoParser.T__22) | (1 << logoParser.T__23) | (1 << logoParser.T__24) | (1 << logoParser.T__25) | (1 << logoParser.T__26) | (1 << logoParser.T__27) | (1 << logoParser.T__28) | (1 << logoParser.T__29) | (1 << logoParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (logoParser.T__31 - 32)) | (1 << (logoParser.T__32 - 32)) | (1 << (logoParser.T__33 - 32)) | (1 << (logoParser.T__34 - 32)) | (1 << (logoParser.T__35 - 32)) | (1 << (logoParser.T__36 - 32)) | (1 << (logoParser.T__37 - 32)) | (1 << (logoParser.T__38 - 32)) | (1 << (logoParser.T__40 - 32)) | (1 << (logoParser.STRING - 32)) | (1 << (logoParser.COMMENT - 32)))) !== 0)) {
                                {
                                    this.state = 141;
                                    this.line();
                                }
                            }
                            this.state = 144;
                            this.match(logoParser.EOL);
                        }
                    }
                    this.state = 147;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << logoParser.T__0) | (1 << logoParser.T__4) | (1 << logoParser.T__7) | (1 << logoParser.T__11) | (1 << logoParser.T__12) | (1 << logoParser.T__17) | (1 << logoParser.T__18) | (1 << logoParser.T__19) | (1 << logoParser.T__20) | (1 << logoParser.T__21) | (1 << logoParser.T__22) | (1 << logoParser.T__23) | (1 << logoParser.T__24) | (1 << logoParser.T__25) | (1 << logoParser.T__26) | (1 << logoParser.T__27) | (1 << logoParser.T__28) | (1 << logoParser.T__29) | (1 << logoParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (logoParser.T__31 - 32)) | (1 << (logoParser.T__32 - 32)) | (1 << (logoParser.T__33 - 32)) | (1 << (logoParser.T__34 - 32)) | (1 << (logoParser.T__35 - 32)) | (1 << (logoParser.T__36 - 32)) | (1 << (logoParser.T__37 - 32)) | (1 << (logoParser.T__38 - 32)) | (1 << (logoParser.T__40 - 32)) | (1 << (logoParser.STRING - 32)) | (1 << (logoParser.COMMENT - 32)) | (1 << (logoParser.EOL - 32)))) !== 0));
                this.state = 149;
                this.match(logoParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    logoParser.prototype.parameterDeclarations = function () {
        var _localctx = new ParameterDeclarationsContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, logoParser.RULE_parameterDeclarations);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 151;
                this.match(logoParser.T__2);
                this.state = 152;
                this.name();
                this.state = 157;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 153;
                                this.match(logoParser.T__3);
                                this.state = 154;
                                this.parameterDeclarations();
                            }
                        }
                    }
                    this.state = 159;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
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
    logoParser.prototype.func = function () {
        var _localctx = new FuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, logoParser.RULE_func);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 160;
                this.random();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    logoParser.prototype.repeat = function () {
        var _localctx = new RepeatContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, logoParser.RULE_repeat);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 162;
                this.match(logoParser.T__4);
                this.state = 163;
                this.number();
                this.state = 164;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    logoParser.prototype.block = function () {
        var _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, logoParser.RULE_block);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 166;
                this.match(logoParser.T__5);
                this.state = 168;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 167;
                            this.cmd();
                        }
                    }
                    this.state = 170;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << logoParser.T__4) | (1 << logoParser.T__7) | (1 << logoParser.T__11) | (1 << logoParser.T__17) | (1 << logoParser.T__18) | (1 << logoParser.T__19) | (1 << logoParser.T__20) | (1 << logoParser.T__21) | (1 << logoParser.T__22) | (1 << logoParser.T__23) | (1 << logoParser.T__24) | (1 << logoParser.T__25) | (1 << logoParser.T__26) | (1 << logoParser.T__27) | (1 << logoParser.T__28) | (1 << logoParser.T__29) | (1 << logoParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (logoParser.T__31 - 32)) | (1 << (logoParser.T__32 - 32)) | (1 << (logoParser.T__33 - 32)) | (1 << (logoParser.T__34 - 32)) | (1 << (logoParser.T__35 - 32)) | (1 << (logoParser.T__36 - 32)) | (1 << (logoParser.T__37 - 32)) | (1 << (logoParser.T__38 - 32)) | (1 << (logoParser.T__40 - 32)) | (1 << (logoParser.STRING - 32)))) !== 0));
                this.state = 172;
                this.match(logoParser.T__6);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    logoParser.prototype.ife = function () {
        var _localctx = new IfeContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, logoParser.RULE_ife);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 174;
                this.match(logoParser.T__7);
                this.state = 175;
                this.comparison();
                this.state = 176;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    logoParser.prototype.comparison = function () {
        var _localctx = new ComparisonContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, logoParser.RULE_comparison);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 178;
                this.expression();
                this.state = 179;
                this.comparisonOperator();
                this.state = 180;
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
    logoParser.prototype.comparisonOperator = function () {
        var _localctx = new ComparisonOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, logoParser.RULE_comparisonOperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 182;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << logoParser.T__8) | (1 << logoParser.T__9) | (1 << logoParser.T__10))) !== 0))) {
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
    logoParser.prototype.make = function () {
        var _localctx = new MakeContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, logoParser.RULE_make);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 184;
                this.match(logoParser.T__11);
                this.state = 185;
                this.match(logoParser.STRINGLITERAL);
                this.state = 186;
                this.value();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    logoParser.prototype.print = function () {
        var _localctx = new PrintContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, logoParser.RULE_print);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 188;
                this.match(logoParser.T__12);
                this.state = 191;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case logoParser.T__2:
                    case logoParser.T__13:
                    case logoParser.T__14:
                    case logoParser.T__39:
                    case logoParser.STRINGLITERAL:
                    case logoParser.NUMBER:
                        {
                            this.state = 189;
                            this.value();
                        }
                        break;
                    case logoParser.T__5:
                        {
                            this.state = 190;
                            this.quotedstring();
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
    logoParser.prototype.quotedstring = function () {
        var _localctx = new QuotedstringContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, logoParser.RULE_quotedstring);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 193;
                this.match(logoParser.T__5);
                this.state = 198;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << logoParser.T__0) | (1 << logoParser.T__1) | (1 << logoParser.T__2) | (1 << logoParser.T__3) | (1 << logoParser.T__4) | (1 << logoParser.T__5) | (1 << logoParser.T__7) | (1 << logoParser.T__8) | (1 << logoParser.T__9) | (1 << logoParser.T__10) | (1 << logoParser.T__11) | (1 << logoParser.T__12) | (1 << logoParser.T__13) | (1 << logoParser.T__14) | (1 << logoParser.T__15) | (1 << logoParser.T__16) | (1 << logoParser.T__17) | (1 << logoParser.T__18) | (1 << logoParser.T__19) | (1 << logoParser.T__20) | (1 << logoParser.T__21) | (1 << logoParser.T__22) | (1 << logoParser.T__23) | (1 << logoParser.T__24) | (1 << logoParser.T__25) | (1 << logoParser.T__26) | (1 << logoParser.T__27) | (1 << logoParser.T__28) | (1 << logoParser.T__29) | (1 << logoParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (logoParser.T__31 - 32)) | (1 << (logoParser.T__32 - 32)) | (1 << (logoParser.T__33 - 32)) | (1 << (logoParser.T__34 - 32)) | (1 << (logoParser.T__35 - 32)) | (1 << (logoParser.T__36 - 32)) | (1 << (logoParser.T__37 - 32)) | (1 << (logoParser.T__38 - 32)) | (1 << (logoParser.T__39 - 32)) | (1 << (logoParser.T__40 - 32)) | (1 << (logoParser.STRINGLITERAL - 32)) | (1 << (logoParser.STRING - 32)) | (1 << (logoParser.NUMBER - 32)) | (1 << (logoParser.COMMENT - 32)) | (1 << (logoParser.EOL - 32)) | (1 << (logoParser.WS - 32)))) !== 0)) {
                    {
                        this.state = 196;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
                            case 1:
                                {
                                    this.state = 194;
                                    this.quotedstring();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 195;
                                    _la = this._input.LA(1);
                                    if (_la <= 0 || (_la === logoParser.T__6)) {
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
                    this.state = 200;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 201;
                this.match(logoParser.T__6);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    logoParser.prototype.name = function () {
        var _localctx = new NameContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, logoParser.RULE_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 203;
                this.match(logoParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    logoParser.prototype.value = function () {
        var _localctx = new ValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, logoParser.RULE_value);
        try {
            this.state = 208;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 205;
                        this.match(logoParser.STRINGLITERAL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 206;
                        this.expression();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 207;
                        this.deref();
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
    logoParser.prototype.signExpression = function () {
        var _localctx = new SignExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, logoParser.RULE_signExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 213;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === logoParser.T__13 || _la === logoParser.T__14) {
                    {
                        {
                            this.state = 210;
                            _la = this._input.LA(1);
                            if (!(_la === logoParser.T__13 || _la === logoParser.T__14)) {
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
                    this.state = 215;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 219;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case logoParser.NUMBER:
                        {
                            this.state = 216;
                            this.number();
                        }
                        break;
                    case logoParser.T__2:
                        {
                            this.state = 217;
                            this.deref();
                        }
                        break;
                    case logoParser.T__39:
                        {
                            this.state = 218;
                            this.func();
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
    logoParser.prototype.multiplyingExpression = function () {
        var _localctx = new MultiplyingExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, logoParser.RULE_multiplyingExpression);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 221;
                this.signExpression();
                this.state = 226;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 222;
                                _la = this._input.LA(1);
                                if (!(_la === logoParser.T__15 || _la === logoParser.T__16)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 223;
                                this.signExpression();
                            }
                        }
                    }
                    this.state = 228;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
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
    logoParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, logoParser.RULE_expression);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 229;
                this.multiplyingExpression();
                this.state = 234;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 230;
                                _la = this._input.LA(1);
                                if (!(_la === logoParser.T__13 || _la === logoParser.T__14)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 231;
                                this.multiplyingExpression();
                            }
                        }
                    }
                    this.state = 236;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
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
    logoParser.prototype.deref = function () {
        var _localctx = new DerefContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, logoParser.RULE_deref);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 237;
                this.match(logoParser.T__2);
                this.state = 238;
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
    logoParser.prototype.fd = function () {
        var _localctx = new FdContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, logoParser.RULE_fd);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 240;
                _la = this._input.LA(1);
                if (!(_la === logoParser.T__17 || _la === logoParser.T__18)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 241;
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
    logoParser.prototype.bk = function () {
        var _localctx = new BkContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, logoParser.RULE_bk);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 243;
                _la = this._input.LA(1);
                if (!(_la === logoParser.T__19 || _la === logoParser.T__20)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 244;
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
    logoParser.prototype.rt = function () {
        var _localctx = new RtContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, logoParser.RULE_rt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 246;
                _la = this._input.LA(1);
                if (!(_la === logoParser.T__21 || _la === logoParser.T__22)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 247;
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
    logoParser.prototype.lt = function () {
        var _localctx = new LtContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, logoParser.RULE_lt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 249;
                _la = this._input.LA(1);
                if (!(_la === logoParser.T__23 || _la === logoParser.T__24)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 250;
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
    logoParser.prototype.cs = function () {
        var _localctx = new CsContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, logoParser.RULE_cs);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 252;
                _la = this._input.LA(1);
                if (!(_la === logoParser.T__25 || _la === logoParser.T__26)) {
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
    logoParser.prototype.pu = function () {
        var _localctx = new PuContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, logoParser.RULE_pu);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 254;
                _la = this._input.LA(1);
                if (!(_la === logoParser.T__27 || _la === logoParser.T__28)) {
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
    logoParser.prototype.pd = function () {
        var _localctx = new PdContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, logoParser.RULE_pd);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 256;
                _la = this._input.LA(1);
                if (!(_la === logoParser.T__29 || _la === logoParser.T__30)) {
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
    logoParser.prototype.ht = function () {
        var _localctx = new HtContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, logoParser.RULE_ht);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 258;
                _la = this._input.LA(1);
                if (!(_la === logoParser.T__31 || _la === logoParser.T__32)) {
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
    logoParser.prototype.st = function () {
        var _localctx = new StContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, logoParser.RULE_st);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 260;
                _la = this._input.LA(1);
                if (!(_la === logoParser.T__33 || _la === logoParser.T__34)) {
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
    logoParser.prototype.home = function () {
        var _localctx = new HomeContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, logoParser.RULE_home);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 262;
                this.match(logoParser.T__35);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    logoParser.prototype.stop = function () {
        var _localctx = new StopContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, logoParser.RULE_stop);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 264;
                this.match(logoParser.T__36);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    logoParser.prototype.label = function () {
        var _localctx = new LabelContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, logoParser.RULE_label);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 266;
                this.match(logoParser.T__37);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    logoParser.prototype.setxy = function () {
        var _localctx = new SetxyContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, logoParser.RULE_setxy);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 268;
                this.match(logoParser.T__38);
                this.state = 269;
                this.expression();
                this.state = 270;
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
    logoParser.prototype.random = function () {
        var _localctx = new RandomContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, logoParser.RULE_random);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 272;
                this.match(logoParser.T__39);
                this.state = 273;
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
    logoParser.prototype.fore = function () {
        var _localctx = new ForeContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, logoParser.RULE_fore);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 275;
                this.match(logoParser.T__40);
                this.state = 276;
                this.match(logoParser.T__5);
                this.state = 277;
                this.name();
                this.state = 278;
                this.expression();
                this.state = 279;
                this.expression();
                this.state = 280;
                this.expression();
                this.state = 281;
                this.match(logoParser.T__6);
                this.state = 282;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    logoParser.prototype.number = function () {
        var _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, logoParser.RULE_number);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 284;
                this.match(logoParser.NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    logoParser.prototype.comment = function () {
        var _localctx = new CommentContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, logoParser.RULE_comment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 286;
                this.match(logoParser.COMMENT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(logoParser, "_ATN", {
        get: function () {
            if (!logoParser.__ATN) {
                logoParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(logoParser._serializedATN));
            }
            return logoParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    logoParser.T__0 = 1;
    logoParser.T__1 = 2;
    logoParser.T__2 = 3;
    logoParser.T__3 = 4;
    logoParser.T__4 = 5;
    logoParser.T__5 = 6;
    logoParser.T__6 = 7;
    logoParser.T__7 = 8;
    logoParser.T__8 = 9;
    logoParser.T__9 = 10;
    logoParser.T__10 = 11;
    logoParser.T__11 = 12;
    logoParser.T__12 = 13;
    logoParser.T__13 = 14;
    logoParser.T__14 = 15;
    logoParser.T__15 = 16;
    logoParser.T__16 = 17;
    logoParser.T__17 = 18;
    logoParser.T__18 = 19;
    logoParser.T__19 = 20;
    logoParser.T__20 = 21;
    logoParser.T__21 = 22;
    logoParser.T__22 = 23;
    logoParser.T__23 = 24;
    logoParser.T__24 = 25;
    logoParser.T__25 = 26;
    logoParser.T__26 = 27;
    logoParser.T__27 = 28;
    logoParser.T__28 = 29;
    logoParser.T__29 = 30;
    logoParser.T__30 = 31;
    logoParser.T__31 = 32;
    logoParser.T__32 = 33;
    logoParser.T__33 = 34;
    logoParser.T__34 = 35;
    logoParser.T__35 = 36;
    logoParser.T__36 = 37;
    logoParser.T__37 = 38;
    logoParser.T__38 = 39;
    logoParser.T__39 = 40;
    logoParser.T__40 = 41;
    logoParser.STRINGLITERAL = 42;
    logoParser.STRING = 43;
    logoParser.NUMBER = 44;
    logoParser.COMMENT = 45;
    logoParser.EOL = 46;
    logoParser.WS = 47;
    logoParser.RULE_prog = 0;
    logoParser.RULE_line = 1;
    logoParser.RULE_cmd = 2;
    logoParser.RULE_procedureInvocation = 3;
    logoParser.RULE_procedureDeclaration = 4;
    logoParser.RULE_parameterDeclarations = 5;
    logoParser.RULE_func = 6;
    logoParser.RULE_repeat = 7;
    logoParser.RULE_block = 8;
    logoParser.RULE_ife = 9;
    logoParser.RULE_comparison = 10;
    logoParser.RULE_comparisonOperator = 11;
    logoParser.RULE_make = 12;
    logoParser.RULE_print = 13;
    logoParser.RULE_quotedstring = 14;
    logoParser.RULE_name = 15;
    logoParser.RULE_value = 16;
    logoParser.RULE_signExpression = 17;
    logoParser.RULE_multiplyingExpression = 18;
    logoParser.RULE_expression = 19;
    logoParser.RULE_deref = 20;
    logoParser.RULE_fd = 21;
    logoParser.RULE_bk = 22;
    logoParser.RULE_rt = 23;
    logoParser.RULE_lt = 24;
    logoParser.RULE_cs = 25;
    logoParser.RULE_pu = 26;
    logoParser.RULE_pd = 27;
    logoParser.RULE_ht = 28;
    logoParser.RULE_st = 29;
    logoParser.RULE_home = 30;
    logoParser.RULE_stop = 31;
    logoParser.RULE_label = 32;
    logoParser.RULE_setxy = 33;
    logoParser.RULE_random = 34;
    logoParser.RULE_fore = 35;
    logoParser.RULE_number = 36;
    logoParser.RULE_comment = 37;
    // tslint:disable:no-trailing-whitespace
    logoParser.ruleNames = [
        "prog", "line", "cmd", "procedureInvocation", "procedureDeclaration",
        "parameterDeclarations", "func", "repeat", "block", "ife", "comparison",
        "comparisonOperator", "make", "print", "quotedstring", "name", "value",
        "signExpression", "multiplyingExpression", "expression", "deref", "fd",
        "bk", "rt", "lt", "cs", "pu", "pd", "ht", "st", "home", "stop", "label",
        "setxy", "random", "fore", "number", "comment",
    ];
    logoParser._LITERAL_NAMES = [
        undefined, "'to'", "'end'", "':'", "','", "'repeat'", "'['", "']'", "'if'",
        "'<'", "'>'", "'='", "'make'", "'print'", "'+'", "'-'", "'*'", "'/'",
        "'fd'", "'forward'", "'bk'", "'backward'", "'rt'", "'right'", "'lt'",
        "'left'", "'cs'", "'clearscreen'", "'pu'", "'penup'", "'pd'", "'pendown'",
        "'ht'", "'hideturtle'", "'st'", "'showturtle'", "'home'", "'stop'", "'label'",
        "'setxy'", "'random'", "'for'",
    ];
    logoParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        "STRINGLITERAL", "STRING", "NUMBER", "COMMENT", "EOL", "WS",
    ];
    logoParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(logoParser._LITERAL_NAMES, logoParser._SYMBOLIC_NAMES, []);
    logoParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x031\u0123\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x03\x02\x05\x02P\n\x02\x03\x02\x06" +
        "\x02S\n\x02\r\x02\x0E\x02T\x03\x02\x05\x02X\n\x02\x03\x03\x06\x03[\n\x03" +
        "\r\x03\x0E\x03\\\x03\x03\x05\x03`\n\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
        "e\n\x03\x03\x03\x05\x03h\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04|\n\x04\x03\x05\x03\x05\x07\x05" +
        "\x80\n\x05\f\x05\x0E\x05\x83\v\x05\x03\x06\x03\x06\x03\x06\x07\x06\x88" +
        "\n\x06\f\x06\x0E\x06\x8B\v\x06\x03\x06\x05\x06\x8E\n\x06\x03\x06\x05\x06" +
        "\x91\n\x06\x03\x06\x06\x06\x94\n\x06\r\x06\x0E\x06\x95\x03\x06\x03\x06" +
        "\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\x9E\n\x07\f\x07\x0E\x07\xA1\v" +
        "\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x06\n\xAB\n\n\r\n" +
        "\x0E\n\xAC\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f" +
        "\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x05" +
        "\x0F\xC2\n\x0F\x03\x10\x03\x10\x03\x10\x07\x10\xC7\n\x10\f\x10\x0E\x10" +
        "\xCA\v\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x05" +
        "\x12\xD3\n\x12\x03\x13\x07\x13\xD6\n\x13\f\x13\x0E\x13\xD9\v\x13\x03\x13" +
        "\x03\x13\x03\x13\x05\x13\xDE\n\x13\x03\x14\x03\x14\x03\x14\x07\x14\xE3" +
        "\n\x14\f\x14\x0E\x14\xE6\v\x14\x03\x15\x03\x15\x03\x15\x07\x15\xEB\n\x15" +
        "\f\x15\x0E\x15\xEE\v\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17" +
        "\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A" +
        "\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F" +
        "\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03#\x03#\x03$\x03" +
        "$\x03$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03&\x03&\x03\'\x03" +
        "\'\x03\'\x02\x02\x02(\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
        "\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
        "\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
        ">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02\x02\x0F\x03\x02\v\r\x03\x02\t" +
        "\t\x03\x02\x10\x11\x03\x02\x12\x13\x03\x02\x14\x15\x03\x02\x16\x17\x03" +
        "\x02\x18\x19\x03\x02\x1A\x1B\x03\x02\x1C\x1D\x03\x02\x1E\x1F\x03\x02 " +
        "!\x03\x02\"#\x03\x02$%\x02\u0127\x02R\x03\x02\x02\x02\x04g\x03\x02\x02" +
        "\x02\x06{\x03\x02\x02\x02\b}\x03\x02\x02\x02\n\x84\x03\x02\x02\x02\f\x99" +
        "\x03\x02\x02\x02\x0E\xA2\x03\x02\x02\x02\x10\xA4\x03\x02\x02\x02\x12\xA8" +
        "\x03\x02\x02\x02\x14\xB0\x03\x02\x02\x02\x16\xB4\x03\x02\x02\x02\x18\xB8" +
        "\x03\x02\x02\x02\x1A\xBA\x03\x02\x02\x02\x1C\xBE\x03\x02\x02\x02\x1E\xC3" +
        "\x03\x02\x02\x02 \xCD\x03\x02\x02\x02\"\xD2\x03\x02\x02\x02$\xD7\x03\x02" +
        "\x02\x02&\xDF\x03\x02\x02\x02(\xE7\x03\x02\x02\x02*\xEF\x03\x02\x02\x02" +
        ",\xF2\x03\x02\x02\x02.\xF5\x03\x02\x02\x020\xF8\x03\x02\x02\x022\xFB\x03" +
        "\x02\x02\x024\xFE\x03\x02\x02\x026\u0100\x03\x02\x02\x028\u0102\x03\x02" +
        "\x02\x02:\u0104\x03\x02\x02\x02<\u0106\x03\x02\x02\x02>\u0108\x03\x02" +
        "\x02\x02@\u010A\x03\x02\x02\x02B\u010C\x03\x02\x02\x02D\u010E\x03\x02" +
        "\x02\x02F\u0112\x03\x02\x02\x02H\u0115\x03\x02\x02\x02J\u011E\x03\x02" +
        "\x02\x02L\u0120\x03\x02\x02\x02NP\x05\x04\x03\x02ON\x03\x02\x02\x02OP" +
        "\x03\x02\x02\x02PQ\x03\x02\x02\x02QS\x070\x02\x02RO\x03\x02\x02\x02ST" +
        "\x03\x02\x02\x02TR\x03\x02\x02\x02TU\x03\x02\x02\x02UW\x03\x02\x02\x02" +
        "VX\x05\x04\x03\x02WV\x03\x02\x02\x02WX\x03\x02\x02\x02X\x03\x03\x02\x02" +
        "\x02Y[\x05\x06\x04\x02ZY\x03\x02\x02\x02[\\\x03\x02\x02\x02\\Z\x03\x02" +
        "\x02\x02\\]\x03\x02\x02\x02]_\x03\x02\x02\x02^`\x05L\'\x02_^\x03\x02\x02" +
        "\x02_`\x03\x02\x02\x02`h\x03\x02\x02\x02ah\x05L\'\x02bd\x05\x1C\x0F\x02" +
        "ce\x05L\'\x02dc\x03\x02\x02\x02de\x03\x02\x02\x02eh\x03\x02\x02\x02fh" +
        "\x05\n\x06\x02gZ\x03\x02\x02\x02ga\x03\x02\x02\x02gb\x03\x02\x02\x02g" +
        "f\x03\x02\x02\x02h\x05\x03\x02\x02\x02i|\x05\x10\t\x02j|\x05,\x17\x02" +
        "k|\x05.\x18\x02l|\x050\x19\x02m|\x052\x1A\x02n|\x054\x1B\x02o|\x056\x1C" +
        "\x02p|\x058\x1D\x02q|\x05:\x1E\x02r|\x05<\x1F\x02s|\x05> \x02t|\x05B\"" +
        "\x02u|\x05D#\x02v|\x05\x1A\x0E\x02w|\x05\b\x05\x02x|\x05\x14\v\x02y|\x05" +
        "@!\x02z|\x05H%\x02{i\x03\x02\x02\x02{j\x03\x02\x02\x02{k\x03\x02\x02\x02" +
        "{l\x03\x02\x02\x02{m\x03\x02\x02\x02{n\x03\x02\x02\x02{o\x03\x02\x02\x02" +
        "{p\x03\x02\x02\x02{q\x03\x02\x02\x02{r\x03\x02\x02\x02{s\x03\x02\x02\x02" +
        "{t\x03\x02\x02\x02{u\x03\x02\x02\x02{v\x03\x02\x02\x02{w\x03\x02\x02\x02" +
        "{x\x03\x02\x02\x02{y\x03\x02\x02\x02{z\x03\x02\x02\x02|\x07\x03\x02\x02" +
        "\x02}\x81\x05 \x11\x02~\x80\x05(\x15\x02\x7F~\x03\x02\x02\x02\x80\x83" +
        "\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\t" +
        "\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x84\x85\x07\x03\x02\x02\x85\x89" +
        "\x05 \x11\x02\x86\x88\x05\f\x07\x02\x87\x86\x03\x02\x02\x02\x88\x8B\x03" +
        "\x02\x02\x02\x89\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x8D\x03" +
        "\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8C\x8E\x070\x02\x02\x8D\x8C\x03" +
        "\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x93\x03\x02\x02\x02\x8F\x91\x05" +
        "\x04\x03\x02\x90\x8F\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x92\x03" +
        "\x02\x02\x02\x92\x94\x070\x02\x02\x93\x90\x03\x02\x02\x02\x94\x95\x03" +
        "\x02\x02\x02\x95\x93\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x97\x03" +
        "\x02\x02\x02\x97\x98\x07\x04\x02\x02\x98\v\x03\x02\x02\x02\x99\x9A\x07" +
        "\x05\x02\x02\x9A\x9F\x05 \x11\x02\x9B\x9C\x07\x06\x02\x02\x9C\x9E\x05" +
        "\f\x07\x02\x9D\x9B\x03\x02\x02\x02\x9E\xA1\x03\x02\x02\x02\x9F\x9D\x03" +
        "\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\r\x03\x02\x02\x02\xA1\x9F\x03" +
        "\x02\x02\x02\xA2\xA3\x05F$\x02\xA3\x0F\x03\x02\x02\x02\xA4\xA5\x07\x07" +
        "\x02\x02\xA5\xA6\x05J&\x02\xA6\xA7\x05\x12\n\x02\xA7\x11\x03\x02\x02\x02" +
        "\xA8\xAA\x07\b\x02\x02\xA9\xAB\x05\x06\x04\x02\xAA\xA9\x03\x02\x02\x02" +
        "\xAB\xAC\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02" +
        "\xAD\xAE\x03\x02\x02\x02\xAE\xAF\x07\t\x02\x02\xAF\x13\x03\x02\x02\x02" +
        "\xB0\xB1\x07\n\x02\x02\xB1\xB2\x05\x16\f\x02\xB2\xB3\x05\x12\n\x02\xB3" +
        "\x15\x03\x02\x02\x02\xB4\xB5\x05(\x15\x02\xB5\xB6\x05\x18\r\x02\xB6\xB7" +
        "\x05(\x15\x02\xB7\x17\x03\x02\x02\x02\xB8\xB9\t\x02\x02\x02\xB9\x19\x03" +
        "\x02\x02\x02\xBA\xBB\x07\x0E\x02\x02\xBB\xBC\x07,\x02\x02\xBC\xBD\x05" +
        "\"\x12\x02\xBD\x1B\x03\x02\x02\x02\xBE\xC1\x07\x0F\x02\x02\xBF\xC2\x05" +
        "\"\x12\x02\xC0\xC2\x05\x1E\x10\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC0\x03" +
        "\x02\x02\x02\xC2\x1D\x03\x02\x02\x02\xC3\xC8\x07\b\x02\x02\xC4\xC7\x05" +
        "\x1E\x10\x02\xC5\xC7\n\x03\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC5\x03" +
        "\x02\x02\x02\xC7\xCA\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC9\x03" +
        "\x02\x02\x02\xC9\xCB\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCB\xCC\x07" +
        "\t\x02\x02\xCC\x1F\x03\x02\x02\x02\xCD\xCE\x07-\x02\x02\xCE!\x03\x02\x02" +
        "\x02\xCF\xD3\x07,\x02\x02\xD0\xD3\x05(\x15\x02\xD1\xD3\x05*\x16\x02\xD2" +
        "\xCF\x03\x02\x02\x02\xD2\xD0\x03\x02\x02\x02\xD2\xD1\x03\x02\x02\x02\xD3" +
        "#\x03\x02\x02\x02\xD4\xD6\t\x04\x02\x02\xD5\xD4\x03\x02\x02\x02\xD6\xD9" +
        "\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xDD" +
        "\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xDA\xDE\x05J&\x02\xDB\xDE\x05" +
        "*\x16\x02\xDC\xDE\x05\x0E\b\x02\xDD\xDA\x03\x02\x02\x02\xDD\xDB\x03\x02" +
        "\x02\x02\xDD\xDC\x03\x02\x02\x02\xDE%\x03\x02\x02\x02\xDF\xE4\x05$\x13" +
        "\x02\xE0\xE1\t\x05\x02\x02\xE1\xE3\x05$\x13\x02\xE2\xE0\x03\x02\x02\x02" +
        "\xE3\xE6\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02" +
        "\xE5\'\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE7\xEC\x05&\x14\x02\xE8" +
        "\xE9\t\x04\x02\x02\xE9\xEB\x05&\x14\x02\xEA\xE8\x03\x02\x02\x02\xEB\xEE" +
        "\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED)" +
        "\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEF\xF0\x07\x05\x02\x02\xF0\xF1" +
        "\x05 \x11\x02\xF1+\x03\x02\x02\x02\xF2\xF3\t\x06\x02\x02\xF3\xF4\x05(" +
        "\x15\x02\xF4-\x03\x02\x02\x02\xF5\xF6\t\x07\x02\x02\xF6\xF7\x05(\x15\x02" +
        "\xF7/\x03\x02\x02\x02\xF8\xF9\t\b\x02\x02\xF9\xFA\x05(\x15\x02\xFA1\x03" +
        "\x02\x02\x02\xFB\xFC\t\t\x02\x02\xFC\xFD\x05(\x15\x02\xFD3\x03\x02\x02" +
        "\x02\xFE\xFF\t\n\x02\x02\xFF5\x03\x02\x02\x02\u0100\u0101\t\v\x02\x02" +
        "\u01017\x03\x02\x02\x02\u0102\u0103\t\f\x02\x02\u01039\x03\x02\x02\x02" +
        "\u0104\u0105\t\r\x02\x02\u0105;\x03\x02\x02\x02\u0106\u0107\t\x0E\x02" +
        "\x02\u0107=\x03\x02\x02\x02\u0108\u0109\x07&\x02\x02\u0109?\x03\x02\x02" +
        "\x02\u010A\u010B\x07\'\x02\x02\u010BA\x03\x02\x02\x02\u010C\u010D\x07" +
        "(\x02\x02\u010DC\x03\x02\x02\x02\u010E\u010F\x07)\x02\x02\u010F\u0110" +
        "\x05(\x15\x02\u0110\u0111\x05(\x15\x02\u0111E\x03\x02\x02\x02\u0112\u0113" +
        "\x07*\x02\x02\u0113\u0114\x05(\x15\x02\u0114G\x03\x02\x02\x02\u0115\u0116" +
        "\x07+\x02\x02\u0116\u0117\x07\b\x02\x02\u0117\u0118\x05 \x11\x02\u0118" +
        "\u0119\x05(\x15\x02\u0119\u011A\x05(\x15\x02\u011A\u011B\x05(\x15\x02" +
        "\u011B\u011C\x07\t\x02\x02\u011C\u011D\x05\x12\n\x02\u011DI\x03\x02\x02" +
        "\x02\u011E\u011F\x07.\x02\x02\u011FK\x03\x02\x02\x02\u0120\u0121\x07/" +
        "\x02\x02\u0121M\x03\x02\x02\x02\x19OTW\\_dg{\x81\x89\x8D\x90\x95\x9F\xAC" +
        "\xC1\xC6\xC8\xD2\xD7\xDD\xE4\xEC";
    return logoParser;
}(Parser_1.Parser));
exports.logoParser = logoParser;
var ProgContext = /** @class */ (function (_super) {
    __extends(ProgContext, _super);
    function ProgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgContext.prototype.EOL = function (i) {
        if (i === undefined) {
            return this.getTokens(logoParser.EOL);
        }
        else {
            return this.getToken(logoParser.EOL, i);
        }
    };
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
        get: function () { return logoParser.RULE_prog; },
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
    LineContext.prototype.cmd = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CmdContext);
        }
        else {
            return this.getRuleContext(i, CmdContext);
        }
    };
    LineContext.prototype.comment = function () {
        return this.tryGetRuleContext(0, CommentContext);
    };
    LineContext.prototype.print = function () {
        return this.tryGetRuleContext(0, PrintContext);
    };
    LineContext.prototype.procedureDeclaration = function () {
        return this.tryGetRuleContext(0, ProcedureDeclarationContext);
    };
    Object.defineProperty(LineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_line; },
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
var CmdContext = /** @class */ (function (_super) {
    __extends(CmdContext, _super);
    function CmdContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CmdContext.prototype.repeat = function () {
        return this.tryGetRuleContext(0, RepeatContext);
    };
    CmdContext.prototype.fd = function () {
        return this.tryGetRuleContext(0, FdContext);
    };
    CmdContext.prototype.bk = function () {
        return this.tryGetRuleContext(0, BkContext);
    };
    CmdContext.prototype.rt = function () {
        return this.tryGetRuleContext(0, RtContext);
    };
    CmdContext.prototype.lt = function () {
        return this.tryGetRuleContext(0, LtContext);
    };
    CmdContext.prototype.cs = function () {
        return this.tryGetRuleContext(0, CsContext);
    };
    CmdContext.prototype.pu = function () {
        return this.tryGetRuleContext(0, PuContext);
    };
    CmdContext.prototype.pd = function () {
        return this.tryGetRuleContext(0, PdContext);
    };
    CmdContext.prototype.ht = function () {
        return this.tryGetRuleContext(0, HtContext);
    };
    CmdContext.prototype.st = function () {
        return this.tryGetRuleContext(0, StContext);
    };
    CmdContext.prototype.home = function () {
        return this.tryGetRuleContext(0, HomeContext);
    };
    CmdContext.prototype.label = function () {
        return this.tryGetRuleContext(0, LabelContext);
    };
    CmdContext.prototype.setxy = function () {
        return this.tryGetRuleContext(0, SetxyContext);
    };
    CmdContext.prototype.make = function () {
        return this.tryGetRuleContext(0, MakeContext);
    };
    CmdContext.prototype.procedureInvocation = function () {
        return this.tryGetRuleContext(0, ProcedureInvocationContext);
    };
    CmdContext.prototype.ife = function () {
        return this.tryGetRuleContext(0, IfeContext);
    };
    CmdContext.prototype.stop = function () {
        return this.tryGetRuleContext(0, StopContext);
    };
    CmdContext.prototype.fore = function () {
        return this.tryGetRuleContext(0, ForeContext);
    };
    Object.defineProperty(CmdContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_cmd; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CmdContext.prototype.enterRule = function (listener) {
        if (listener.enterCmd) {
            listener.enterCmd(this);
        }
    };
    // @Override
    CmdContext.prototype.exitRule = function (listener) {
        if (listener.exitCmd) {
            listener.exitCmd(this);
        }
    };
    // @Override
    CmdContext.prototype.accept = function (visitor) {
        if (visitor.visitCmd) {
            return visitor.visitCmd(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CmdContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CmdContext = CmdContext;
var ProcedureInvocationContext = /** @class */ (function (_super) {
    __extends(ProcedureInvocationContext, _super);
    function ProcedureInvocationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProcedureInvocationContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    ProcedureInvocationContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(ProcedureInvocationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_procedureInvocation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProcedureInvocationContext.prototype.enterRule = function (listener) {
        if (listener.enterProcedureInvocation) {
            listener.enterProcedureInvocation(this);
        }
    };
    // @Override
    ProcedureInvocationContext.prototype.exitRule = function (listener) {
        if (listener.exitProcedureInvocation) {
            listener.exitProcedureInvocation(this);
        }
    };
    // @Override
    ProcedureInvocationContext.prototype.accept = function (visitor) {
        if (visitor.visitProcedureInvocation) {
            return visitor.visitProcedureInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProcedureInvocationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProcedureInvocationContext = ProcedureInvocationContext;
var ProcedureDeclarationContext = /** @class */ (function (_super) {
    __extends(ProcedureDeclarationContext, _super);
    function ProcedureDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProcedureDeclarationContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    ProcedureDeclarationContext.prototype.parameterDeclarations = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ParameterDeclarationsContext);
        }
        else {
            return this.getRuleContext(i, ParameterDeclarationsContext);
        }
    };
    ProcedureDeclarationContext.prototype.EOL = function (i) {
        if (i === undefined) {
            return this.getTokens(logoParser.EOL);
        }
        else {
            return this.getToken(logoParser.EOL, i);
        }
    };
    ProcedureDeclarationContext.prototype.line = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LineContext);
        }
        else {
            return this.getRuleContext(i, LineContext);
        }
    };
    Object.defineProperty(ProcedureDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_procedureDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProcedureDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterProcedureDeclaration) {
            listener.enterProcedureDeclaration(this);
        }
    };
    // @Override
    ProcedureDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitProcedureDeclaration) {
            listener.exitProcedureDeclaration(this);
        }
    };
    // @Override
    ProcedureDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitProcedureDeclaration) {
            return visitor.visitProcedureDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProcedureDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProcedureDeclarationContext = ProcedureDeclarationContext;
var ParameterDeclarationsContext = /** @class */ (function (_super) {
    __extends(ParameterDeclarationsContext, _super);
    function ParameterDeclarationsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterDeclarationsContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    ParameterDeclarationsContext.prototype.parameterDeclarations = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ParameterDeclarationsContext);
        }
        else {
            return this.getRuleContext(i, ParameterDeclarationsContext);
        }
    };
    Object.defineProperty(ParameterDeclarationsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_parameterDeclarations; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParameterDeclarationsContext.prototype.enterRule = function (listener) {
        if (listener.enterParameterDeclarations) {
            listener.enterParameterDeclarations(this);
        }
    };
    // @Override
    ParameterDeclarationsContext.prototype.exitRule = function (listener) {
        if (listener.exitParameterDeclarations) {
            listener.exitParameterDeclarations(this);
        }
    };
    // @Override
    ParameterDeclarationsContext.prototype.accept = function (visitor) {
        if (visitor.visitParameterDeclarations) {
            return visitor.visitParameterDeclarations(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParameterDeclarationsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParameterDeclarationsContext = ParameterDeclarationsContext;
var FuncContext = /** @class */ (function (_super) {
    __extends(FuncContext, _super);
    function FuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FuncContext.prototype.random = function () {
        return this.getRuleContext(0, RandomContext);
    };
    Object.defineProperty(FuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_func; },
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
var RepeatContext = /** @class */ (function (_super) {
    __extends(RepeatContext, _super);
    function RepeatContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RepeatContext.prototype.number = function () {
        return this.getRuleContext(0, NumberContext);
    };
    RepeatContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    Object.defineProperty(RepeatContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_repeat; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RepeatContext.prototype.enterRule = function (listener) {
        if (listener.enterRepeat) {
            listener.enterRepeat(this);
        }
    };
    // @Override
    RepeatContext.prototype.exitRule = function (listener) {
        if (listener.exitRepeat) {
            listener.exitRepeat(this);
        }
    };
    // @Override
    RepeatContext.prototype.accept = function (visitor) {
        if (visitor.visitRepeat) {
            return visitor.visitRepeat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RepeatContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RepeatContext = RepeatContext;
var BlockContext = /** @class */ (function (_super) {
    __extends(BlockContext, _super);
    function BlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockContext.prototype.cmd = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CmdContext);
        }
        else {
            return this.getRuleContext(i, CmdContext);
        }
    };
    Object.defineProperty(BlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_block; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlockContext.prototype.enterRule = function (listener) {
        if (listener.enterBlock) {
            listener.enterBlock(this);
        }
    };
    // @Override
    BlockContext.prototype.exitRule = function (listener) {
        if (listener.exitBlock) {
            listener.exitBlock(this);
        }
    };
    // @Override
    BlockContext.prototype.accept = function (visitor) {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockContext = BlockContext;
var IfeContext = /** @class */ (function (_super) {
    __extends(IfeContext, _super);
    function IfeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfeContext.prototype.comparison = function () {
        return this.getRuleContext(0, ComparisonContext);
    };
    IfeContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    Object.defineProperty(IfeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_ife; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IfeContext.prototype.enterRule = function (listener) {
        if (listener.enterIfe) {
            listener.enterIfe(this);
        }
    };
    // @Override
    IfeContext.prototype.exitRule = function (listener) {
        if (listener.exitIfe) {
            listener.exitIfe(this);
        }
    };
    // @Override
    IfeContext.prototype.accept = function (visitor) {
        if (visitor.visitIfe) {
            return visitor.visitIfe(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IfeContext = IfeContext;
var ComparisonContext = /** @class */ (function (_super) {
    __extends(ComparisonContext, _super);
    function ComparisonContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ComparisonContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    ComparisonContext.prototype.comparisonOperator = function () {
        return this.getRuleContext(0, ComparisonOperatorContext);
    };
    Object.defineProperty(ComparisonContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_comparison; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ComparisonContext.prototype.enterRule = function (listener) {
        if (listener.enterComparison) {
            listener.enterComparison(this);
        }
    };
    // @Override
    ComparisonContext.prototype.exitRule = function (listener) {
        if (listener.exitComparison) {
            listener.exitComparison(this);
        }
    };
    // @Override
    ComparisonContext.prototype.accept = function (visitor) {
        if (visitor.visitComparison) {
            return visitor.visitComparison(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ComparisonContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ComparisonContext = ComparisonContext;
var ComparisonOperatorContext = /** @class */ (function (_super) {
    __extends(ComparisonOperatorContext, _super);
    function ComparisonOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ComparisonOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_comparisonOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ComparisonOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterComparisonOperator) {
            listener.enterComparisonOperator(this);
        }
    };
    // @Override
    ComparisonOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitComparisonOperator) {
            listener.exitComparisonOperator(this);
        }
    };
    // @Override
    ComparisonOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitComparisonOperator) {
            return visitor.visitComparisonOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ComparisonOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ComparisonOperatorContext = ComparisonOperatorContext;
var MakeContext = /** @class */ (function (_super) {
    __extends(MakeContext, _super);
    function MakeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MakeContext.prototype.STRINGLITERAL = function () { return this.getToken(logoParser.STRINGLITERAL, 0); };
    MakeContext.prototype.value = function () {
        return this.getRuleContext(0, ValueContext);
    };
    Object.defineProperty(MakeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_make; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MakeContext.prototype.enterRule = function (listener) {
        if (listener.enterMake) {
            listener.enterMake(this);
        }
    };
    // @Override
    MakeContext.prototype.exitRule = function (listener) {
        if (listener.exitMake) {
            listener.exitMake(this);
        }
    };
    // @Override
    MakeContext.prototype.accept = function (visitor) {
        if (visitor.visitMake) {
            return visitor.visitMake(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MakeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MakeContext = MakeContext;
var PrintContext = /** @class */ (function (_super) {
    __extends(PrintContext, _super);
    function PrintContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrintContext.prototype.value = function () {
        return this.tryGetRuleContext(0, ValueContext);
    };
    PrintContext.prototype.quotedstring = function () {
        return this.tryGetRuleContext(0, QuotedstringContext);
    };
    Object.defineProperty(PrintContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_print; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrintContext.prototype.enterRule = function (listener) {
        if (listener.enterPrint) {
            listener.enterPrint(this);
        }
    };
    // @Override
    PrintContext.prototype.exitRule = function (listener) {
        if (listener.exitPrint) {
            listener.exitPrint(this);
        }
    };
    // @Override
    PrintContext.prototype.accept = function (visitor) {
        if (visitor.visitPrint) {
            return visitor.visitPrint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrintContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrintContext = PrintContext;
var QuotedstringContext = /** @class */ (function (_super) {
    __extends(QuotedstringContext, _super);
    function QuotedstringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QuotedstringContext.prototype.quotedstring = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(QuotedstringContext);
        }
        else {
            return this.getRuleContext(i, QuotedstringContext);
        }
    };
    Object.defineProperty(QuotedstringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_quotedstring; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QuotedstringContext.prototype.enterRule = function (listener) {
        if (listener.enterQuotedstring) {
            listener.enterQuotedstring(this);
        }
    };
    // @Override
    QuotedstringContext.prototype.exitRule = function (listener) {
        if (listener.exitQuotedstring) {
            listener.exitQuotedstring(this);
        }
    };
    // @Override
    QuotedstringContext.prototype.accept = function (visitor) {
        if (visitor.visitQuotedstring) {
            return visitor.visitQuotedstring(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QuotedstringContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QuotedstringContext = QuotedstringContext;
var NameContext = /** @class */ (function (_super) {
    __extends(NameContext, _super);
    function NameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NameContext.prototype.STRING = function () { return this.getToken(logoParser.STRING, 0); };
    Object.defineProperty(NameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_name; },
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
var ValueContext = /** @class */ (function (_super) {
    __extends(ValueContext, _super);
    function ValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ValueContext.prototype.STRINGLITERAL = function () { return this.tryGetToken(logoParser.STRINGLITERAL, 0); };
    ValueContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    ValueContext.prototype.deref = function () {
        return this.tryGetRuleContext(0, DerefContext);
    };
    Object.defineProperty(ValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_value; },
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
var SignExpressionContext = /** @class */ (function (_super) {
    __extends(SignExpressionContext, _super);
    function SignExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SignExpressionContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    SignExpressionContext.prototype.deref = function () {
        return this.tryGetRuleContext(0, DerefContext);
    };
    SignExpressionContext.prototype.func = function () {
        return this.tryGetRuleContext(0, FuncContext);
    };
    Object.defineProperty(SignExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_signExpression; },
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
var MultiplyingExpressionContext = /** @class */ (function (_super) {
    __extends(MultiplyingExpressionContext, _super);
    function MultiplyingExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultiplyingExpressionContext.prototype.signExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SignExpressionContext);
        }
        else {
            return this.getRuleContext(i, SignExpressionContext);
        }
    };
    Object.defineProperty(MultiplyingExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_multiplyingExpression; },
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
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_expression; },
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
var DerefContext = /** @class */ (function (_super) {
    __extends(DerefContext, _super);
    function DerefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DerefContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    Object.defineProperty(DerefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_deref; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DerefContext.prototype.enterRule = function (listener) {
        if (listener.enterDeref) {
            listener.enterDeref(this);
        }
    };
    // @Override
    DerefContext.prototype.exitRule = function (listener) {
        if (listener.exitDeref) {
            listener.exitDeref(this);
        }
    };
    // @Override
    DerefContext.prototype.accept = function (visitor) {
        if (visitor.visitDeref) {
            return visitor.visitDeref(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DerefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DerefContext = DerefContext;
var FdContext = /** @class */ (function (_super) {
    __extends(FdContext, _super);
    function FdContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FdContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(FdContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_fd; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FdContext.prototype.enterRule = function (listener) {
        if (listener.enterFd) {
            listener.enterFd(this);
        }
    };
    // @Override
    FdContext.prototype.exitRule = function (listener) {
        if (listener.exitFd) {
            listener.exitFd(this);
        }
    };
    // @Override
    FdContext.prototype.accept = function (visitor) {
        if (visitor.visitFd) {
            return visitor.visitFd(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FdContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FdContext = FdContext;
var BkContext = /** @class */ (function (_super) {
    __extends(BkContext, _super);
    function BkContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BkContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(BkContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_bk; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BkContext.prototype.enterRule = function (listener) {
        if (listener.enterBk) {
            listener.enterBk(this);
        }
    };
    // @Override
    BkContext.prototype.exitRule = function (listener) {
        if (listener.exitBk) {
            listener.exitBk(this);
        }
    };
    // @Override
    BkContext.prototype.accept = function (visitor) {
        if (visitor.visitBk) {
            return visitor.visitBk(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BkContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BkContext = BkContext;
var RtContext = /** @class */ (function (_super) {
    __extends(RtContext, _super);
    function RtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RtContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(RtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_rt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RtContext.prototype.enterRule = function (listener) {
        if (listener.enterRt) {
            listener.enterRt(this);
        }
    };
    // @Override
    RtContext.prototype.exitRule = function (listener) {
        if (listener.exitRt) {
            listener.exitRt(this);
        }
    };
    // @Override
    RtContext.prototype.accept = function (visitor) {
        if (visitor.visitRt) {
            return visitor.visitRt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RtContext = RtContext;
var LtContext = /** @class */ (function (_super) {
    __extends(LtContext, _super);
    function LtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LtContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(LtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_lt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LtContext.prototype.enterRule = function (listener) {
        if (listener.enterLt) {
            listener.enterLt(this);
        }
    };
    // @Override
    LtContext.prototype.exitRule = function (listener) {
        if (listener.exitLt) {
            listener.exitLt(this);
        }
    };
    // @Override
    LtContext.prototype.accept = function (visitor) {
        if (visitor.visitLt) {
            return visitor.visitLt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LtContext = LtContext;
var CsContext = /** @class */ (function (_super) {
    __extends(CsContext, _super);
    function CsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(CsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_cs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CsContext.prototype.enterRule = function (listener) {
        if (listener.enterCs) {
            listener.enterCs(this);
        }
    };
    // @Override
    CsContext.prototype.exitRule = function (listener) {
        if (listener.exitCs) {
            listener.exitCs(this);
        }
    };
    // @Override
    CsContext.prototype.accept = function (visitor) {
        if (visitor.visitCs) {
            return visitor.visitCs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CsContext = CsContext;
var PuContext = /** @class */ (function (_super) {
    __extends(PuContext, _super);
    function PuContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(PuContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_pu; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PuContext.prototype.enterRule = function (listener) {
        if (listener.enterPu) {
            listener.enterPu(this);
        }
    };
    // @Override
    PuContext.prototype.exitRule = function (listener) {
        if (listener.exitPu) {
            listener.exitPu(this);
        }
    };
    // @Override
    PuContext.prototype.accept = function (visitor) {
        if (visitor.visitPu) {
            return visitor.visitPu(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PuContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PuContext = PuContext;
var PdContext = /** @class */ (function (_super) {
    __extends(PdContext, _super);
    function PdContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(PdContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_pd; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PdContext.prototype.enterRule = function (listener) {
        if (listener.enterPd) {
            listener.enterPd(this);
        }
    };
    // @Override
    PdContext.prototype.exitRule = function (listener) {
        if (listener.exitPd) {
            listener.exitPd(this);
        }
    };
    // @Override
    PdContext.prototype.accept = function (visitor) {
        if (visitor.visitPd) {
            return visitor.visitPd(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PdContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PdContext = PdContext;
var HtContext = /** @class */ (function (_super) {
    __extends(HtContext, _super);
    function HtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(HtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_ht; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HtContext.prototype.enterRule = function (listener) {
        if (listener.enterHt) {
            listener.enterHt(this);
        }
    };
    // @Override
    HtContext.prototype.exitRule = function (listener) {
        if (listener.exitHt) {
            listener.exitHt(this);
        }
    };
    // @Override
    HtContext.prototype.accept = function (visitor) {
        if (visitor.visitHt) {
            return visitor.visitHt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HtContext = HtContext;
var StContext = /** @class */ (function (_super) {
    __extends(StContext, _super);
    function StContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(StContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_st; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StContext.prototype.enterRule = function (listener) {
        if (listener.enterSt) {
            listener.enterSt(this);
        }
    };
    // @Override
    StContext.prototype.exitRule = function (listener) {
        if (listener.exitSt) {
            listener.exitSt(this);
        }
    };
    // @Override
    StContext.prototype.accept = function (visitor) {
        if (visitor.visitSt) {
            return visitor.visitSt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StContext = StContext;
var HomeContext = /** @class */ (function (_super) {
    __extends(HomeContext, _super);
    function HomeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(HomeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_home; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HomeContext.prototype.enterRule = function (listener) {
        if (listener.enterHome) {
            listener.enterHome(this);
        }
    };
    // @Override
    HomeContext.prototype.exitRule = function (listener) {
        if (listener.exitHome) {
            listener.exitHome(this);
        }
    };
    // @Override
    HomeContext.prototype.accept = function (visitor) {
        if (visitor.visitHome) {
            return visitor.visitHome(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HomeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HomeContext = HomeContext;
var StopContext = /** @class */ (function (_super) {
    __extends(StopContext, _super);
    function StopContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(StopContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_stop; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StopContext.prototype.enterRule = function (listener) {
        if (listener.enterStop) {
            listener.enterStop(this);
        }
    };
    // @Override
    StopContext.prototype.exitRule = function (listener) {
        if (listener.exitStop) {
            listener.exitStop(this);
        }
    };
    // @Override
    StopContext.prototype.accept = function (visitor) {
        if (visitor.visitStop) {
            return visitor.visitStop(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StopContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StopContext = StopContext;
var LabelContext = /** @class */ (function (_super) {
    __extends(LabelContext, _super);
    function LabelContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(LabelContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_label; },
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
var SetxyContext = /** @class */ (function (_super) {
    __extends(SetxyContext, _super);
    function SetxyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SetxyContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(SetxyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_setxy; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SetxyContext.prototype.enterRule = function (listener) {
        if (listener.enterSetxy) {
            listener.enterSetxy(this);
        }
    };
    // @Override
    SetxyContext.prototype.exitRule = function (listener) {
        if (listener.exitSetxy) {
            listener.exitSetxy(this);
        }
    };
    // @Override
    SetxyContext.prototype.accept = function (visitor) {
        if (visitor.visitSetxy) {
            return visitor.visitSetxy(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SetxyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SetxyContext = SetxyContext;
var RandomContext = /** @class */ (function (_super) {
    __extends(RandomContext, _super);
    function RandomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RandomContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(RandomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_random; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RandomContext.prototype.enterRule = function (listener) {
        if (listener.enterRandom) {
            listener.enterRandom(this);
        }
    };
    // @Override
    RandomContext.prototype.exitRule = function (listener) {
        if (listener.exitRandom) {
            listener.exitRandom(this);
        }
    };
    // @Override
    RandomContext.prototype.accept = function (visitor) {
        if (visitor.visitRandom) {
            return visitor.visitRandom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RandomContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RandomContext = RandomContext;
var ForeContext = /** @class */ (function (_super) {
    __extends(ForeContext, _super);
    function ForeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForeContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    ForeContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    ForeContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    Object.defineProperty(ForeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_fore; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ForeContext.prototype.enterRule = function (listener) {
        if (listener.enterFore) {
            listener.enterFore(this);
        }
    };
    // @Override
    ForeContext.prototype.exitRule = function (listener) {
        if (listener.exitFore) {
            listener.exitFore(this);
        }
    };
    // @Override
    ForeContext.prototype.accept = function (visitor) {
        if (visitor.visitFore) {
            return visitor.visitFore(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForeContext = ForeContext;
var NumberContext = /** @class */ (function (_super) {
    __extends(NumberContext, _super);
    function NumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumberContext.prototype.NUMBER = function () { return this.getToken(logoParser.NUMBER, 0); };
    Object.defineProperty(NumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_number; },
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
var CommentContext = /** @class */ (function (_super) {
    __extends(CommentContext, _super);
    function CommentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommentContext.prototype.COMMENT = function () { return this.getToken(logoParser.COMMENT, 0); };
    Object.defineProperty(CommentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return logoParser.RULE_comment; },
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
