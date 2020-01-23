"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/python/python3alt/AltPython3.g4 by ANTLR 4.7.3-SNAPSHOT
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
//import { RuleVersion } from "antlr4ts/RuleVersion";
var TerminalNode_1 = require("antlr4ts/tree/TerminalNode");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var AltPython3Parser = /** @class */ (function (_super) {
    __extends(AltPython3Parser, _super);
    function AltPython3Parser(input) {
        var _this = _super.call(this, input) || this;
        _this.ALREADY_THROWN_TOKEN_TYPE = Integer.MIN_VALUE + 23;
        _this.likelyIsPython2 = false;
        _this.throwNoViableAltExceptionOnLegalPython2ButIllegalPython3 = true;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(AltPython3Parser._ATN, _this);
        return _this;
    }
    Object.defineProperty(AltPython3Parser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return AltPython3Parser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AltPython3Parser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "AltPython3.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AltPython3Parser.prototype, "ruleNames", {
        // @Override
        get: function () { return AltPython3Parser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AltPython3Parser.prototype, "serializedATN", {
        // @Override
        get: function () { return AltPython3Parser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    AltPython3Parser.prototype.parsedCodeWasPython2 = function () {
        return this.likelyIsPython2;
    };
    AltPython3Parser.prototype.getStrictPython3Parsing = function () {
        return this.throwNoViableAltExceptionOnLegalPython2ButIllegalPython3;
    };
    AltPython3Parser.prototype.setStrictPython3Parsing = function (boolean, flag) {
        this.throwNoViableAltExceptionOnLegalPython2ButIllegalPython3 = flag;
    };
    // @RuleVersion(0)
    AltPython3Parser.prototype.single_input = function () {
        var _localctx = new Single_inputContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, AltPython3Parser.RULE_single_input);
        try {
            this.state = 175;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AltPython3Parser.NEWLINE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 170;
                        this.match(AltPython3Parser.NEWLINE);
                    }
                    break;
                case AltPython3Parser.PRINT:
                case AltPython3Parser.RETURN:
                case AltPython3Parser.RAISE:
                case AltPython3Parser.FROM:
                case AltPython3Parser.IMPORT:
                case AltPython3Parser.GLOBAL:
                case AltPython3Parser.NONLOCAL:
                case AltPython3Parser.ASSERT:
                case AltPython3Parser.LAMBDA:
                case AltPython3Parser.NOT:
                case AltPython3Parser.NONE:
                case AltPython3Parser.TRUE:
                case AltPython3Parser.FALSE:
                case AltPython3Parser.YIELD:
                case AltPython3Parser.DEL:
                case AltPython3Parser.PASS:
                case AltPython3Parser.CONTINUE:
                case AltPython3Parser.BREAK:
                case AltPython3Parser.NAME:
                case AltPython3Parser.STRING_LITERAL:
                case AltPython3Parser.BYTES_LITERAL:
                case AltPython3Parser.DECIMAL_INTEGER:
                case AltPython3Parser.OCT_INTEGER:
                case AltPython3Parser.HEX_INTEGER:
                case AltPython3Parser.BIN_INTEGER:
                case AltPython3Parser.FLOAT_NUMBER:
                case AltPython3Parser.IMAG_NUMBER:
                case AltPython3Parser.ELLIPSIS:
                case AltPython3Parser.STAR:
                case AltPython3Parser.OPEN_PAREN:
                case AltPython3Parser.OPEN_BRACK:
                case AltPython3Parser.ADD:
                case AltPython3Parser.MINUS:
                case AltPython3Parser.NOT_OP:
                case AltPython3Parser.OPEN_BRACE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 171;
                        this.simple_stmt();
                    }
                    break;
                case AltPython3Parser.DEF:
                case AltPython3Parser.IF:
                case AltPython3Parser.WHILE:
                case AltPython3Parser.FOR:
                case AltPython3Parser.TRY:
                case AltPython3Parser.WITH:
                case AltPython3Parser.CLASS:
                case AltPython3Parser.AT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 172;
                        this.compound_stmt();
                        this.state = 173;
                        this.match(AltPython3Parser.NEWLINE);
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
    AltPython3Parser.prototype.file_input = function () {
        var _localctx = new File_inputContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, AltPython3Parser.RULE_file_input);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 181;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AltPython3Parser.PRINT) | (1 << AltPython3Parser.DEF) | (1 << AltPython3Parser.RETURN) | (1 << AltPython3Parser.RAISE) | (1 << AltPython3Parser.FROM) | (1 << AltPython3Parser.IMPORT) | (1 << AltPython3Parser.GLOBAL) | (1 << AltPython3Parser.NONLOCAL) | (1 << AltPython3Parser.ASSERT) | (1 << AltPython3Parser.IF) | (1 << AltPython3Parser.WHILE) | (1 << AltPython3Parser.FOR) | (1 << AltPython3Parser.TRY) | (1 << AltPython3Parser.WITH) | (1 << AltPython3Parser.LAMBDA) | (1 << AltPython3Parser.NOT) | (1 << AltPython3Parser.NONE) | (1 << AltPython3Parser.TRUE) | (1 << AltPython3Parser.FALSE) | (1 << AltPython3Parser.CLASS) | (1 << AltPython3Parser.YIELD) | (1 << AltPython3Parser.DEL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AltPython3Parser.PASS - 32)) | (1 << (AltPython3Parser.CONTINUE - 32)) | (1 << (AltPython3Parser.BREAK - 32)) | (1 << (AltPython3Parser.NEWLINE - 32)) | (1 << (AltPython3Parser.NAME - 32)) | (1 << (AltPython3Parser.STRING_LITERAL - 32)) | (1 << (AltPython3Parser.BYTES_LITERAL - 32)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 32)) | (1 << (AltPython3Parser.OCT_INTEGER - 32)) | (1 << (AltPython3Parser.HEX_INTEGER - 32)) | (1 << (AltPython3Parser.BIN_INTEGER - 32)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 32)) | (1 << (AltPython3Parser.IMAG_NUMBER - 32)) | (1 << (AltPython3Parser.ELLIPSIS - 32)) | (1 << (AltPython3Parser.STAR - 32)) | (1 << (AltPython3Parser.OPEN_PAREN - 32)) | (1 << (AltPython3Parser.OPEN_BRACK - 32)) | (1 << (AltPython3Parser.ADD - 32)) | (1 << (AltPython3Parser.MINUS - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (AltPython3Parser.NOT_OP - 67)) | (1 << (AltPython3Parser.OPEN_BRACE - 67)) | (1 << (AltPython3Parser.AT - 67)))) !== 0)) {
                    {
                        this.state = 179;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case AltPython3Parser.NEWLINE:
                                {
                                    this.state = 177;
                                    this.match(AltPython3Parser.NEWLINE);
                                }
                                break;
                            case AltPython3Parser.PRINT:
                            case AltPython3Parser.DEF:
                            case AltPython3Parser.RETURN:
                            case AltPython3Parser.RAISE:
                            case AltPython3Parser.FROM:
                            case AltPython3Parser.IMPORT:
                            case AltPython3Parser.GLOBAL:
                            case AltPython3Parser.NONLOCAL:
                            case AltPython3Parser.ASSERT:
                            case AltPython3Parser.IF:
                            case AltPython3Parser.WHILE:
                            case AltPython3Parser.FOR:
                            case AltPython3Parser.TRY:
                            case AltPython3Parser.WITH:
                            case AltPython3Parser.LAMBDA:
                            case AltPython3Parser.NOT:
                            case AltPython3Parser.NONE:
                            case AltPython3Parser.TRUE:
                            case AltPython3Parser.FALSE:
                            case AltPython3Parser.CLASS:
                            case AltPython3Parser.YIELD:
                            case AltPython3Parser.DEL:
                            case AltPython3Parser.PASS:
                            case AltPython3Parser.CONTINUE:
                            case AltPython3Parser.BREAK:
                            case AltPython3Parser.NAME:
                            case AltPython3Parser.STRING_LITERAL:
                            case AltPython3Parser.BYTES_LITERAL:
                            case AltPython3Parser.DECIMAL_INTEGER:
                            case AltPython3Parser.OCT_INTEGER:
                            case AltPython3Parser.HEX_INTEGER:
                            case AltPython3Parser.BIN_INTEGER:
                            case AltPython3Parser.FLOAT_NUMBER:
                            case AltPython3Parser.IMAG_NUMBER:
                            case AltPython3Parser.ELLIPSIS:
                            case AltPython3Parser.STAR:
                            case AltPython3Parser.OPEN_PAREN:
                            case AltPython3Parser.OPEN_BRACK:
                            case AltPython3Parser.ADD:
                            case AltPython3Parser.MINUS:
                            case AltPython3Parser.NOT_OP:
                            case AltPython3Parser.OPEN_BRACE:
                            case AltPython3Parser.AT:
                                {
                                    this.state = 178;
                                    this.stmt();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 183;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 184;
                this.match(AltPython3Parser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    AltPython3Parser.prototype.eval_input = function () {
        var _localctx = new Eval_inputContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, AltPython3Parser.RULE_eval_input);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 186;
                this.testlist();
                this.state = 190;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === AltPython3Parser.NEWLINE) {
                    {
                        {
                            this.state = 187;
                            this.match(AltPython3Parser.NEWLINE);
                        }
                    }
                    this.state = 192;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 193;
                this.match(AltPython3Parser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    AltPython3Parser.prototype.decorator = function () {
        var _localctx = new DecoratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, AltPython3Parser.RULE_decorator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 195;
                this.match(AltPython3Parser.AT);
                this.state = 196;
                this.dotted_name();
                this.state = 202;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AltPython3Parser.OPEN_PAREN) {
                    {
                        this.state = 197;
                        this.match(AltPython3Parser.OPEN_PAREN);
                        this.state = 199;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (AltPython3Parser.LAMBDA - 21)) | (1 << (AltPython3Parser.NOT - 21)) | (1 << (AltPython3Parser.NONE - 21)) | (1 << (AltPython3Parser.TRUE - 21)) | (1 << (AltPython3Parser.FALSE - 21)) | (1 << (AltPython3Parser.NAME - 21)) | (1 << (AltPython3Parser.STRING_LITERAL - 21)) | (1 << (AltPython3Parser.BYTES_LITERAL - 21)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 21)) | (1 << (AltPython3Parser.OCT_INTEGER - 21)) | (1 << (AltPython3Parser.HEX_INTEGER - 21)) | (1 << (AltPython3Parser.BIN_INTEGER - 21)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 21)) | (1 << (AltPython3Parser.IMAG_NUMBER - 21)) | (1 << (AltPython3Parser.ELLIPSIS - 21)) | (1 << (AltPython3Parser.STAR - 21)) | (1 << (AltPython3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (AltPython3Parser.POWER - 53)) | (1 << (AltPython3Parser.OPEN_BRACK - 53)) | (1 << (AltPython3Parser.ADD - 53)) | (1 << (AltPython3Parser.MINUS - 53)) | (1 << (AltPython3Parser.NOT_OP - 53)) | (1 << (AltPython3Parser.OPEN_BRACE - 53)))) !== 0)) {
                            {
                                this.state = 198;
                                this.arglist();
                            }
                        }
                        this.state = 201;
                        this.match(AltPython3Parser.CLOSE_PAREN);
                    }
                }
                this.state = 204;
                this.match(AltPython3Parser.NEWLINE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    AltPython3Parser.prototype.decorators = function () {
        var _localctx = new DecoratorsContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, AltPython3Parser.RULE_decorators);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 207;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 206;
                            this.decorator();
                        }
                    }
                    this.state = 209;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === AltPython3Parser.AT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    AltPython3Parser.prototype.decorated = function () {
        var _localctx = new DecoratedContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, AltPython3Parser.RULE_decorated);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 211;
                this.decorators();
                this.state = 214;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case AltPython3Parser.CLASS:
                        {
                            this.state = 212;
                            this.classdef();
                        }
                        break;
                    case AltPython3Parser.DEF:
                        {
                            this.state = 213;
                            this.funcdef();
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
    AltPython3Parser.prototype.funcdef = function () {
        var _localctx = new FuncdefContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, AltPython3Parser.RULE_funcdef);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 216;
                this.match(AltPython3Parser.DEF);
                this.state = 217;
                this.match(AltPython3Parser.NAME);
                this.state = 218;
                this.parameters();
                this.state = 221;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AltPython3Parser.ARROW) {
                    {
                        this.state = 219;
                        this.match(AltPython3Parser.ARROW);
                        this.state = 220;
                        this.test();
                    }
                }
                this.state = 223;
                this.match(AltPython3Parser.COLON);
                this.state = 224;
                this.suite();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    AltPython3Parser.prototype.parameters = function () {
        var _localctx = new ParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, AltPython3Parser.RULE_parameters);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 226;
                this.match(AltPython3Parser.OPEN_PAREN);
                this.state = 228;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (AltPython3Parser.NAME - 36)) | (1 << (AltPython3Parser.STAR - 36)) | (1 << (AltPython3Parser.POWER - 36)))) !== 0)) {
                    {
                        this.state = 227;
                        this.typedargslist();
                    }
                }
                this.state = 230;
                this.match(AltPython3Parser.CLOSE_PAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    AltPython3Parser.prototype.typedargslist = function () {
        var _localctx = new TypedargslistContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, AltPython3Parser.RULE_typedargslist);
        var _la;
        try {
            var _alt = void 0;
            this.state = 297;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AltPython3Parser.NAME:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 232;
                        this.tfpdef();
                        this.state = 235;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AltPython3Parser.ASSIGN) {
                            {
                                this.state = 233;
                                this.match(AltPython3Parser.ASSIGN);
                                this.state = 234;
                                this.test();
                            }
                        }
                        this.state = 245;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 237;
                                        this.match(AltPython3Parser.COMMA);
                                        this.state = 238;
                                        this.tfpdef();
                                        this.state = 241;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === AltPython3Parser.ASSIGN) {
                                            {
                                                this.state = 239;
                                                this.match(AltPython3Parser.ASSIGN);
                                                this.state = 240;
                                                this.test();
                                            }
                                        }
                                    }
                                }
                            }
                            this.state = 247;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                        }
                        this.state = 273;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AltPython3Parser.COMMA) {
                            {
                                this.state = 248;
                                this.match(AltPython3Parser.COMMA);
                                this.state = 271;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case AltPython3Parser.STAR:
                                        {
                                            this.state = 249;
                                            this.match(AltPython3Parser.STAR);
                                            this.state = 251;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            if (_la === AltPython3Parser.NAME) {
                                                {
                                                    this.state = 250;
                                                    this.tfpdef();
                                                }
                                            }
                                            this.state = 261;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                if (_alt === 1) {
                                                    {
                                                        {
                                                            this.state = 253;
                                                            this.match(AltPython3Parser.COMMA);
                                                            this.state = 254;
                                                            this.tfpdef();
                                                            this.state = 257;
                                                            this._errHandler.sync(this);
                                                            _la = this._input.LA(1);
                                                            if (_la === AltPython3Parser.ASSIGN) {
                                                                {
                                                                    this.state = 255;
                                                                    this.match(AltPython3Parser.ASSIGN);
                                                                    this.state = 256;
                                                                    this.test();
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                this.state = 263;
                                                this._errHandler.sync(this);
                                                _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                                            }
                                            this.state = 267;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            if (_la === AltPython3Parser.COMMA) {
                                                {
                                                    this.state = 264;
                                                    this.match(AltPython3Parser.COMMA);
                                                    this.state = 265;
                                                    this.match(AltPython3Parser.POWER);
                                                    this.state = 266;
                                                    this.tfpdef();
                                                }
                                            }
                                        }
                                        break;
                                    case AltPython3Parser.POWER:
                                        {
                                            this.state = 269;
                                            this.match(AltPython3Parser.POWER);
                                            this.state = 270;
                                            this.tfpdef();
                                        }
                                        break;
                                    case AltPython3Parser.CLOSE_PAREN:
                                        break;
                                    default:
                                        break;
                                }
                            }
                        }
                    }
                    break;
                case AltPython3Parser.STAR:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 275;
                        this.match(AltPython3Parser.STAR);
                        this.state = 277;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AltPython3Parser.NAME) {
                            {
                                this.state = 276;
                                this.tfpdef();
                            }
                        }
                        this.state = 287;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 279;
                                        this.match(AltPython3Parser.COMMA);
                                        this.state = 280;
                                        this.tfpdef();
                                        this.state = 283;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === AltPython3Parser.ASSIGN) {
                                            {
                                                this.state = 281;
                                                this.match(AltPython3Parser.ASSIGN);
                                                this.state = 282;
                                                this.test();
                                            }
                                        }
                                    }
                                }
                            }
                            this.state = 289;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                        }
                        this.state = 293;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AltPython3Parser.COMMA) {
                            {
                                this.state = 290;
                                this.match(AltPython3Parser.COMMA);
                                this.state = 291;
                                this.match(AltPython3Parser.POWER);
                                this.state = 292;
                                this.tfpdef();
                            }
                        }
                    }
                    break;
                case AltPython3Parser.POWER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 295;
                        this.match(AltPython3Parser.POWER);
                        this.state = 296;
                        this.tfpdef();
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
    AltPython3Parser.prototype.tfpdef = function () {
        var _localctx = new TfpdefContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, AltPython3Parser.RULE_tfpdef);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 299;
                this.match(AltPython3Parser.NAME);
                this.state = 302;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AltPython3Parser.COLON) {
                    {
                        this.state = 300;
                        this.match(AltPython3Parser.COLON);
                        this.state = 301;
                        this.test();
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
    AltPython3Parser.prototype.varargslist = function () {
        var _localctx = new VarargslistContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, AltPython3Parser.RULE_varargslist);
        var _la;
        try {
            var _alt = void 0;
            this.state = 369;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AltPython3Parser.NAME:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 304;
                        this.vfpdef();
                        this.state = 307;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AltPython3Parser.ASSIGN) {
                            {
                                this.state = 305;
                                this.match(AltPython3Parser.ASSIGN);
                                this.state = 306;
                                this.test();
                            }
                        }
                        this.state = 317;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 309;
                                        this.match(AltPython3Parser.COMMA);
                                        this.state = 310;
                                        this.vfpdef();
                                        this.state = 313;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === AltPython3Parser.ASSIGN) {
                                            {
                                                this.state = 311;
                                                this.match(AltPython3Parser.ASSIGN);
                                                this.state = 312;
                                                this.test();
                                            }
                                        }
                                    }
                                }
                            }
                            this.state = 319;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                        }
                        this.state = 345;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AltPython3Parser.COMMA) {
                            {
                                this.state = 320;
                                this.match(AltPython3Parser.COMMA);
                                this.state = 343;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case AltPython3Parser.STAR:
                                        {
                                            this.state = 321;
                                            this.match(AltPython3Parser.STAR);
                                            this.state = 323;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            if (_la === AltPython3Parser.NAME) {
                                                {
                                                    this.state = 322;
                                                    this.vfpdef();
                                                }
                                            }
                                            this.state = 333;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                if (_alt === 1) {
                                                    {
                                                        {
                                                            this.state = 325;
                                                            this.match(AltPython3Parser.COMMA);
                                                            this.state = 326;
                                                            this.vfpdef();
                                                            this.state = 329;
                                                            this._errHandler.sync(this);
                                                            _la = this._input.LA(1);
                                                            if (_la === AltPython3Parser.ASSIGN) {
                                                                {
                                                                    this.state = 327;
                                                                    this.match(AltPython3Parser.ASSIGN);
                                                                    this.state = 328;
                                                                    this.test();
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                this.state = 335;
                                                this._errHandler.sync(this);
                                                _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                                            }
                                            this.state = 339;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            if (_la === AltPython3Parser.COMMA) {
                                                {
                                                    this.state = 336;
                                                    this.match(AltPython3Parser.COMMA);
                                                    this.state = 337;
                                                    this.match(AltPython3Parser.POWER);
                                                    this.state = 338;
                                                    this.vfpdef();
                                                }
                                            }
                                        }
                                        break;
                                    case AltPython3Parser.POWER:
                                        {
                                            this.state = 341;
                                            this.match(AltPython3Parser.POWER);
                                            this.state = 342;
                                            this.vfpdef();
                                        }
                                        break;
                                    case AltPython3Parser.COLON:
                                        break;
                                    default:
                                        break;
                                }
                            }
                        }
                    }
                    break;
                case AltPython3Parser.STAR:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 347;
                        this.match(AltPython3Parser.STAR);
                        this.state = 349;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AltPython3Parser.NAME) {
                            {
                                this.state = 348;
                                this.vfpdef();
                            }
                        }
                        this.state = 359;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 351;
                                        this.match(AltPython3Parser.COMMA);
                                        this.state = 352;
                                        this.vfpdef();
                                        this.state = 355;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === AltPython3Parser.ASSIGN) {
                                            {
                                                this.state = 353;
                                                this.match(AltPython3Parser.ASSIGN);
                                                this.state = 354;
                                                this.test();
                                            }
                                        }
                                    }
                                }
                            }
                            this.state = 361;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
                        }
                        this.state = 365;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AltPython3Parser.COMMA) {
                            {
                                this.state = 362;
                                this.match(AltPython3Parser.COMMA);
                                this.state = 363;
                                this.match(AltPython3Parser.POWER);
                                this.state = 364;
                                this.vfpdef();
                            }
                        }
                    }
                    break;
                case AltPython3Parser.POWER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 367;
                        this.match(AltPython3Parser.POWER);
                        this.state = 368;
                        this.vfpdef();
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
    AltPython3Parser.prototype.vfpdef = function () {
        var _localctx = new VfpdefContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, AltPython3Parser.RULE_vfpdef);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 371;
                this.match(AltPython3Parser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    AltPython3Parser.prototype.stmt = function () {
        var _localctx = new StmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, AltPython3Parser.RULE_stmt);
        try {
            this.state = 375;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AltPython3Parser.PRINT:
                case AltPython3Parser.RETURN:
                case AltPython3Parser.RAISE:
                case AltPython3Parser.FROM:
                case AltPython3Parser.IMPORT:
                case AltPython3Parser.GLOBAL:
                case AltPython3Parser.NONLOCAL:
                case AltPython3Parser.ASSERT:
                case AltPython3Parser.LAMBDA:
                case AltPython3Parser.NOT:
                case AltPython3Parser.NONE:
                case AltPython3Parser.TRUE:
                case AltPython3Parser.FALSE:
                case AltPython3Parser.YIELD:
                case AltPython3Parser.DEL:
                case AltPython3Parser.PASS:
                case AltPython3Parser.CONTINUE:
                case AltPython3Parser.BREAK:
                case AltPython3Parser.NAME:
                case AltPython3Parser.STRING_LITERAL:
                case AltPython3Parser.BYTES_LITERAL:
                case AltPython3Parser.DECIMAL_INTEGER:
                case AltPython3Parser.OCT_INTEGER:
                case AltPython3Parser.HEX_INTEGER:
                case AltPython3Parser.BIN_INTEGER:
                case AltPython3Parser.FLOAT_NUMBER:
                case AltPython3Parser.IMAG_NUMBER:
                case AltPython3Parser.ELLIPSIS:
                case AltPython3Parser.STAR:
                case AltPython3Parser.OPEN_PAREN:
                case AltPython3Parser.OPEN_BRACK:
                case AltPython3Parser.ADD:
                case AltPython3Parser.MINUS:
                case AltPython3Parser.NOT_OP:
                case AltPython3Parser.OPEN_BRACE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 373;
                        this.simple_stmt();
                    }
                    break;
                case AltPython3Parser.DEF:
                case AltPython3Parser.IF:
                case AltPython3Parser.WHILE:
                case AltPython3Parser.FOR:
                case AltPython3Parser.TRY:
                case AltPython3Parser.WITH:
                case AltPython3Parser.CLASS:
                case AltPython3Parser.AT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 374;
                        this.compound_stmt();
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
    AltPython3Parser.prototype.simple_stmt = function () {
        var _localctx = new Simple_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, AltPython3Parser.RULE_simple_stmt);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 377;
                this.small_stmt();
                this.state = 382;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 378;
                                this.match(AltPython3Parser.SEMI_COLON);
                                this.state = 379;
                                this.small_stmt();
                            }
                        }
                    }
                    this.state = 384;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
                }
                this.state = 386;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AltPython3Parser.SEMI_COLON) {
                    {
                        this.state = 385;
                        this.match(AltPython3Parser.SEMI_COLON);
                    }
                }
                this.state = 388;
                this.match(AltPython3Parser.NEWLINE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    AltPython3Parser.prototype.small_stmt = function () {
        var _localctx = new Small_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, AltPython3Parser.RULE_small_stmt);
        try {
            this.state = 399;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AltPython3Parser.PRINT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 390;
                        this.print_stmt();
                    }
                    break;
                case AltPython3Parser.LAMBDA:
                case AltPython3Parser.NOT:
                case AltPython3Parser.NONE:
                case AltPython3Parser.TRUE:
                case AltPython3Parser.FALSE:
                case AltPython3Parser.NAME:
                case AltPython3Parser.STRING_LITERAL:
                case AltPython3Parser.BYTES_LITERAL:
                case AltPython3Parser.DECIMAL_INTEGER:
                case AltPython3Parser.OCT_INTEGER:
                case AltPython3Parser.HEX_INTEGER:
                case AltPython3Parser.BIN_INTEGER:
                case AltPython3Parser.FLOAT_NUMBER:
                case AltPython3Parser.IMAG_NUMBER:
                case AltPython3Parser.ELLIPSIS:
                case AltPython3Parser.STAR:
                case AltPython3Parser.OPEN_PAREN:
                case AltPython3Parser.OPEN_BRACK:
                case AltPython3Parser.ADD:
                case AltPython3Parser.MINUS:
                case AltPython3Parser.NOT_OP:
                case AltPython3Parser.OPEN_BRACE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 391;
                        this.expr_stmt();
                    }
                    break;
                case AltPython3Parser.DEL:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 392;
                        this.del_stmt();
                    }
                    break;
                case AltPython3Parser.PASS:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 393;
                        this.pass_stmt();
                    }
                    break;
                case AltPython3Parser.RETURN:
                case AltPython3Parser.RAISE:
                case AltPython3Parser.YIELD:
                case AltPython3Parser.CONTINUE:
                case AltPython3Parser.BREAK:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 394;
                        this.flow_stmt();
                    }
                    break;
                case AltPython3Parser.FROM:
                case AltPython3Parser.IMPORT:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 395;
                        this.import_stmt();
                    }
                    break;
                case AltPython3Parser.GLOBAL:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 396;
                        this.global_stmt();
                    }
                    break;
                case AltPython3Parser.NONLOCAL:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 397;
                        this.nonlocal_stmt();
                    }
                    break;
                case AltPython3Parser.ASSERT:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 398;
                        this.assert_stmt();
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
    AltPython3Parser.prototype.print_stmt = function () {
        var _localctx = new Print_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, AltPython3Parser.RULE_print_stmt);
        var _la;
        try {
            var _alt = void 0;
            this.state = 462;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 57, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 401;
                        this.match(AltPython3Parser.PRINT);
                        this.state = 402;
                        this.match(AltPython3Parser.OPEN_PAREN);
                        this.state = 429;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case AltPython3Parser.LAMBDA:
                            case AltPython3Parser.NOT:
                            case AltPython3Parser.NONE:
                            case AltPython3Parser.TRUE:
                            case AltPython3Parser.FALSE:
                            case AltPython3Parser.NAME:
                            case AltPython3Parser.STRING_LITERAL:
                            case AltPython3Parser.BYTES_LITERAL:
                            case AltPython3Parser.DECIMAL_INTEGER:
                            case AltPython3Parser.OCT_INTEGER:
                            case AltPython3Parser.HEX_INTEGER:
                            case AltPython3Parser.BIN_INTEGER:
                            case AltPython3Parser.FLOAT_NUMBER:
                            case AltPython3Parser.IMAG_NUMBER:
                            case AltPython3Parser.ELLIPSIS:
                            case AltPython3Parser.STAR:
                            case AltPython3Parser.OPEN_PAREN:
                            case AltPython3Parser.CLOSE_PAREN:
                            case AltPython3Parser.OPEN_BRACK:
                            case AltPython3Parser.ADD:
                            case AltPython3Parser.MINUS:
                            case AltPython3Parser.NOT_OP:
                            case AltPython3Parser.OPEN_BRACE:
                                {
                                    this.state = 414;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (AltPython3Parser.LAMBDA - 21)) | (1 << (AltPython3Parser.NOT - 21)) | (1 << (AltPython3Parser.NONE - 21)) | (1 << (AltPython3Parser.TRUE - 21)) | (1 << (AltPython3Parser.FALSE - 21)) | (1 << (AltPython3Parser.NAME - 21)) | (1 << (AltPython3Parser.STRING_LITERAL - 21)) | (1 << (AltPython3Parser.BYTES_LITERAL - 21)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 21)) | (1 << (AltPython3Parser.OCT_INTEGER - 21)) | (1 << (AltPython3Parser.HEX_INTEGER - 21)) | (1 << (AltPython3Parser.BIN_INTEGER - 21)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 21)) | (1 << (AltPython3Parser.IMAG_NUMBER - 21)) | (1 << (AltPython3Parser.ELLIPSIS - 21)) | (1 << (AltPython3Parser.STAR - 21)) | (1 << (AltPython3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (AltPython3Parser.OPEN_BRACK - 55)) | (1 << (AltPython3Parser.ADD - 55)) | (1 << (AltPython3Parser.MINUS - 55)) | (1 << (AltPython3Parser.NOT_OP - 55)) | (1 << (AltPython3Parser.OPEN_BRACE - 55)))) !== 0)) {
                                        {
                                            this.state = 403;
                                            this.test();
                                            this.state = 408;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
                                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                if (_alt === 1) {
                                                    {
                                                        {
                                                            this.state = 404;
                                                            this.match(AltPython3Parser.COMMA);
                                                            this.state = 405;
                                                            this.test();
                                                        }
                                                    }
                                                }
                                                this.state = 410;
                                                this._errHandler.sync(this);
                                                _alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
                                            }
                                            this.state = 412;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            if (_la === AltPython3Parser.COMMA) {
                                                {
                                                    this.state = 411;
                                                    this.match(AltPython3Parser.COMMA);
                                                }
                                            }
                                        }
                                    }
                                }
                                break;
                            case AltPython3Parser.RIGHT_SHIFT:
                                {
                                    this.state = 416;
                                    this.match(AltPython3Parser.RIGHT_SHIFT);
                                    this.state = 417;
                                    this.test();
                                    this.state = 427;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === AltPython3Parser.COMMA) {
                                        {
                                            this.state = 420;
                                            this._errHandler.sync(this);
                                            _alt = 1;
                                            do {
                                                switch (_alt) {
                                                    case 1:
                                                        {
                                                            {
                                                                this.state = 418;
                                                                this.match(AltPython3Parser.COMMA);
                                                                this.state = 419;
                                                                this.test();
                                                            }
                                                        }
                                                        break;
                                                    default:
                                                        throw new NoViableAltException_1.NoViableAltException(this);
                                                }
                                                this.state = 422;
                                                this._errHandler.sync(this);
                                                _alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
                                            } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                                            this.state = 425;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            if (_la === AltPython3Parser.COMMA) {
                                                {
                                                    this.state = 424;
                                                    this.match(AltPython3Parser.COMMA);
                                                }
                                            }
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 431;
                        this.match(AltPython3Parser.CLOSE_PAREN);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 432;
                        this.match(AltPython3Parser.PRINT);
                        this.state = 459;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case AltPython3Parser.LAMBDA:
                            case AltPython3Parser.NOT:
                            case AltPython3Parser.NONE:
                            case AltPython3Parser.TRUE:
                            case AltPython3Parser.FALSE:
                            case AltPython3Parser.NEWLINE:
                            case AltPython3Parser.NAME:
                            case AltPython3Parser.STRING_LITERAL:
                            case AltPython3Parser.BYTES_LITERAL:
                            case AltPython3Parser.DECIMAL_INTEGER:
                            case AltPython3Parser.OCT_INTEGER:
                            case AltPython3Parser.HEX_INTEGER:
                            case AltPython3Parser.BIN_INTEGER:
                            case AltPython3Parser.FLOAT_NUMBER:
                            case AltPython3Parser.IMAG_NUMBER:
                            case AltPython3Parser.ELLIPSIS:
                            case AltPython3Parser.STAR:
                            case AltPython3Parser.OPEN_PAREN:
                            case AltPython3Parser.SEMI_COLON:
                            case AltPython3Parser.OPEN_BRACK:
                            case AltPython3Parser.ADD:
                            case AltPython3Parser.MINUS:
                            case AltPython3Parser.NOT_OP:
                            case AltPython3Parser.OPEN_BRACE:
                                {
                                    this.state = 444;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (AltPython3Parser.LAMBDA - 21)) | (1 << (AltPython3Parser.NOT - 21)) | (1 << (AltPython3Parser.NONE - 21)) | (1 << (AltPython3Parser.TRUE - 21)) | (1 << (AltPython3Parser.FALSE - 21)) | (1 << (AltPython3Parser.NAME - 21)) | (1 << (AltPython3Parser.STRING_LITERAL - 21)) | (1 << (AltPython3Parser.BYTES_LITERAL - 21)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 21)) | (1 << (AltPython3Parser.OCT_INTEGER - 21)) | (1 << (AltPython3Parser.HEX_INTEGER - 21)) | (1 << (AltPython3Parser.BIN_INTEGER - 21)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 21)) | (1 << (AltPython3Parser.IMAG_NUMBER - 21)) | (1 << (AltPython3Parser.ELLIPSIS - 21)) | (1 << (AltPython3Parser.STAR - 21)) | (1 << (AltPython3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (AltPython3Parser.OPEN_BRACK - 55)) | (1 << (AltPython3Parser.ADD - 55)) | (1 << (AltPython3Parser.MINUS - 55)) | (1 << (AltPython3Parser.NOT_OP - 55)) | (1 << (AltPython3Parser.OPEN_BRACE - 55)))) !== 0)) {
                                        {
                                            this.state = 433;
                                            this.test();
                                            this.state = 438;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
                                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                if (_alt === 1) {
                                                    {
                                                        {
                                                            this.state = 434;
                                                            this.match(AltPython3Parser.COMMA);
                                                            this.state = 435;
                                                            this.test();
                                                        }
                                                    }
                                                }
                                                this.state = 440;
                                                this._errHandler.sync(this);
                                                _alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
                                            }
                                            this.state = 442;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            if (_la === AltPython3Parser.COMMA) {
                                                {
                                                    this.state = 441;
                                                    this.match(AltPython3Parser.COMMA);
                                                }
                                            }
                                        }
                                    }
                                }
                                break;
                            case AltPython3Parser.RIGHT_SHIFT:
                                {
                                    this.state = 446;
                                    this.match(AltPython3Parser.RIGHT_SHIFT);
                                    this.state = 447;
                                    this.test();
                                    this.state = 457;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === AltPython3Parser.COMMA) {
                                        {
                                            this.state = 450;
                                            this._errHandler.sync(this);
                                            _alt = 1;
                                            do {
                                                switch (_alt) {
                                                    case 1:
                                                        {
                                                            {
                                                                this.state = 448;
                                                                this.match(AltPython3Parser.COMMA);
                                                                this.state = 449;
                                                                this.test();
                                                            }
                                                        }
                                                        break;
                                                    default:
                                                        throw new NoViableAltException_1.NoViableAltException(this);
                                                }
                                                this.state = 452;
                                                this._errHandler.sync(this);
                                                _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                                            } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                                            this.state = 455;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            if (_la === AltPython3Parser.COMMA) {
                                                {
                                                    this.state = 454;
                                                    this.match(AltPython3Parser.COMMA);
                                                }
                                            }
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        if (this.getStrictPython3Parsing()) {
                            Token_1.Token;
                            printToken = ((org.antlr.v4.runtime.tree.TerminalNodeImpl));
                            this._ctx.children.get(0);
                            getSymbol();
                            Token_1.Token;
                            startingOffender = ((org.antlr.v4.runtime.ParserRuleContext));
                            this._ctx.children.get(1);
                            getStart();
                            throw new NoViableAltException_1.NoViableAltException(this, this.getInputStream(), printToken, startingOffender, null, this._ctx);
                        }
                        else {
                            this.likelyIsPython2 = true;
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
    AltPython3Parser.prototype.expr_stmt = function () {
        var _localctx = new Expr_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, AltPython3Parser.RULE_expr_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 464;
                this.testlist_star_expr();
                this.state = 480;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case AltPython3Parser.ADD_ASSIGN:
                    case AltPython3Parser.SUB_ASSIGN:
                    case AltPython3Parser.MULT_ASSIGN:
                    case AltPython3Parser.AT_ASSIGN:
                    case AltPython3Parser.DIV_ASSIGN:
                    case AltPython3Parser.MOD_ASSIGN:
                    case AltPython3Parser.AND_ASSIGN:
                    case AltPython3Parser.OR_ASSIGN:
                    case AltPython3Parser.XOR_ASSIGN:
                    case AltPython3Parser.LEFT_SHIFT_ASSIGN:
                    case AltPython3Parser.RIGHT_SHIFT_ASSIGN:
                    case AltPython3Parser.POWER_ASSIGN:
                    case AltPython3Parser.IDIV_ASSIGN:
                        {
                            this.state = 465;
                            this.augassign();
                            this.state = 468;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case AltPython3Parser.YIELD:
                                    {
                                        this.state = 466;
                                        this.yield_expr();
                                    }
                                    break;
                                case AltPython3Parser.LAMBDA:
                                case AltPython3Parser.NOT:
                                case AltPython3Parser.NONE:
                                case AltPython3Parser.TRUE:
                                case AltPython3Parser.FALSE:
                                case AltPython3Parser.NAME:
                                case AltPython3Parser.STRING_LITERAL:
                                case AltPython3Parser.BYTES_LITERAL:
                                case AltPython3Parser.DECIMAL_INTEGER:
                                case AltPython3Parser.OCT_INTEGER:
                                case AltPython3Parser.HEX_INTEGER:
                                case AltPython3Parser.BIN_INTEGER:
                                case AltPython3Parser.FLOAT_NUMBER:
                                case AltPython3Parser.IMAG_NUMBER:
                                case AltPython3Parser.ELLIPSIS:
                                case AltPython3Parser.STAR:
                                case AltPython3Parser.OPEN_PAREN:
                                case AltPython3Parser.OPEN_BRACK:
                                case AltPython3Parser.ADD:
                                case AltPython3Parser.MINUS:
                                case AltPython3Parser.NOT_OP:
                                case AltPython3Parser.OPEN_BRACE:
                                    {
                                        this.state = 467;
                                        this.testlist();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                        break;
                    case AltPython3Parser.NEWLINE:
                    case AltPython3Parser.SEMI_COLON:
                    case AltPython3Parser.ASSIGN:
                        {
                            this.state = 477;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === AltPython3Parser.ASSIGN) {
                                {
                                    {
                                        this.state = 470;
                                        this.match(AltPython3Parser.ASSIGN);
                                        this.state = 473;
                                        this._errHandler.sync(this);
                                        switch (this._input.LA(1)) {
                                            case AltPython3Parser.YIELD:
                                                {
                                                    this.state = 471;
                                                    this.yield_expr();
                                                }
                                                break;
                                            case AltPython3Parser.LAMBDA:
                                            case AltPython3Parser.NOT:
                                            case AltPython3Parser.NONE:
                                            case AltPython3Parser.TRUE:
                                            case AltPython3Parser.FALSE:
                                            case AltPython3Parser.NAME:
                                            case AltPython3Parser.STRING_LITERAL:
                                            case AltPython3Parser.BYTES_LITERAL:
                                            case AltPython3Parser.DECIMAL_INTEGER:
                                            case AltPython3Parser.OCT_INTEGER:
                                            case AltPython3Parser.HEX_INTEGER:
                                            case AltPython3Parser.BIN_INTEGER:
                                            case AltPython3Parser.FLOAT_NUMBER:
                                            case AltPython3Parser.IMAG_NUMBER:
                                            case AltPython3Parser.ELLIPSIS:
                                            case AltPython3Parser.STAR:
                                            case AltPython3Parser.OPEN_PAREN:
                                            case AltPython3Parser.OPEN_BRACK:
                                            case AltPython3Parser.ADD:
                                            case AltPython3Parser.MINUS:
                                            case AltPython3Parser.NOT_OP:
                                            case AltPython3Parser.OPEN_BRACE:
                                                {
                                                    this.state = 472;
                                                    this.testlist_star_expr();
                                                }
                                                break;
                                            default:
                                                throw new NoViableAltException_1.NoViableAltException(this);
                                        }
                                    }
                                }
                                this.state = 479;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
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
    AltPython3Parser.prototype.testlist_star_expr = function () {
        var _localctx = new Testlist_star_exprContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, AltPython3Parser.RULE_testlist_star_expr);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 484;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 62, this._ctx)) {
                    case 1:
                        {
                            this.state = 482;
                            this.test();
                        }
                        break;
                    case 2:
                        {
                            this.state = 483;
                            this.star_expr();
                        }
                        break;
                }
                this.state = 493;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 486;
                                this.match(AltPython3Parser.COMMA);
                                this.state = 489;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 487;
                                            this.test();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 488;
                                            this.star_expr();
                                        }
                                        break;
                                }
                            }
                        }
                    }
                    this.state = 495;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
                }
                this.state = 497;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AltPython3Parser.COMMA) {
                    {
                        this.state = 496;
                        this.match(AltPython3Parser.COMMA);
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
    AltPython3Parser.prototype.augassign = function () {
        var _localctx = new AugassignContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, AltPython3Parser.RULE_augassign);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 499;
                _la = this._input.LA(1);
                if (!(((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (AltPython3Parser.ADD_ASSIGN - 79)) | (1 << (AltPython3Parser.SUB_ASSIGN - 79)) | (1 << (AltPython3Parser.MULT_ASSIGN - 79)) | (1 << (AltPython3Parser.AT_ASSIGN - 79)) | (1 << (AltPython3Parser.DIV_ASSIGN - 79)) | (1 << (AltPython3Parser.MOD_ASSIGN - 79)) | (1 << (AltPython3Parser.AND_ASSIGN - 79)) | (1 << (AltPython3Parser.OR_ASSIGN - 79)) | (1 << (AltPython3Parser.XOR_ASSIGN - 79)) | (1 << (AltPython3Parser.LEFT_SHIFT_ASSIGN - 79)) | (1 << (AltPython3Parser.RIGHT_SHIFT_ASSIGN - 79)) | (1 << (AltPython3Parser.POWER_ASSIGN - 79)) | (1 << (AltPython3Parser.IDIV_ASSIGN - 79)))) !== 0))) {
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
    AltPython3Parser.prototype.del_stmt = function () {
        var _localctx = new Del_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, AltPython3Parser.RULE_del_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 501;
                this.match(AltPython3Parser.DEL);
                this.state = 502;
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
    AltPython3Parser.prototype.pass_stmt = function () {
        var _localctx = new Pass_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, AltPython3Parser.RULE_pass_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 504;
                this.match(AltPython3Parser.PASS);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    AltPython3Parser.prototype.flow_stmt = function () {
        var _localctx = new Flow_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, AltPython3Parser.RULE_flow_stmt);
        try {
            this.state = 511;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AltPython3Parser.BREAK:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 506;
                        this.break_stmt();
                    }
                    break;
                case AltPython3Parser.CONTINUE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 507;
                        this.continue_stmt();
                    }
                    break;
                case AltPython3Parser.RETURN:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 508;
                        this.return_stmt();
                    }
                    break;
                case AltPython3Parser.RAISE:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 509;
                        this.raise_stmt();
                    }
                    break;
                case AltPython3Parser.YIELD:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 510;
                        this.yield_stmt();
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
    AltPython3Parser.prototype.break_stmt = function () {
        var _localctx = new Break_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, AltPython3Parser.RULE_break_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 513;
                this.match(AltPython3Parser.BREAK);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    AltPython3Parser.prototype.continue_stmt = function () {
        var _localctx = new Continue_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, AltPython3Parser.RULE_continue_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 515;
                this.match(AltPython3Parser.CONTINUE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    AltPython3Parser.prototype.return_stmt = function () {
        var _localctx = new Return_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, AltPython3Parser.RULE_return_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 517;
                this.match(AltPython3Parser.RETURN);
                this.state = 519;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (AltPython3Parser.LAMBDA - 21)) | (1 << (AltPython3Parser.NOT - 21)) | (1 << (AltPython3Parser.NONE - 21)) | (1 << (AltPython3Parser.TRUE - 21)) | (1 << (AltPython3Parser.FALSE - 21)) | (1 << (AltPython3Parser.NAME - 21)) | (1 << (AltPython3Parser.STRING_LITERAL - 21)) | (1 << (AltPython3Parser.BYTES_LITERAL - 21)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 21)) | (1 << (AltPython3Parser.OCT_INTEGER - 21)) | (1 << (AltPython3Parser.HEX_INTEGER - 21)) | (1 << (AltPython3Parser.BIN_INTEGER - 21)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 21)) | (1 << (AltPython3Parser.IMAG_NUMBER - 21)) | (1 << (AltPython3Parser.ELLIPSIS - 21)) | (1 << (AltPython3Parser.STAR - 21)) | (1 << (AltPython3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (AltPython3Parser.OPEN_BRACK - 55)) | (1 << (AltPython3Parser.ADD - 55)) | (1 << (AltPython3Parser.MINUS - 55)) | (1 << (AltPython3Parser.NOT_OP - 55)) | (1 << (AltPython3Parser.OPEN_BRACE - 55)))) !== 0)) {
                    {
                        this.state = 518;
                        this.testlist();
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
    AltPython3Parser.prototype.yield_stmt = function () {
        var _localctx = new Yield_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, AltPython3Parser.RULE_yield_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 521;
                this.yield_expr();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    AltPython3Parser.prototype.raise_stmt = function () {
        var _localctx = new Raise_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, AltPython3Parser.RULE_raise_stmt);
        var _la;
        try {
            this.state = 537;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 70, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 523;
                        this.match(AltPython3Parser.RAISE);
                        this.state = 529;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (AltPython3Parser.LAMBDA - 21)) | (1 << (AltPython3Parser.NOT - 21)) | (1 << (AltPython3Parser.NONE - 21)) | (1 << (AltPython3Parser.TRUE - 21)) | (1 << (AltPython3Parser.FALSE - 21)) | (1 << (AltPython3Parser.NAME - 21)) | (1 << (AltPython3Parser.STRING_LITERAL - 21)) | (1 << (AltPython3Parser.BYTES_LITERAL - 21)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 21)) | (1 << (AltPython3Parser.OCT_INTEGER - 21)) | (1 << (AltPython3Parser.HEX_INTEGER - 21)) | (1 << (AltPython3Parser.BIN_INTEGER - 21)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 21)) | (1 << (AltPython3Parser.IMAG_NUMBER - 21)) | (1 << (AltPython3Parser.ELLIPSIS - 21)) | (1 << (AltPython3Parser.STAR - 21)) | (1 << (AltPython3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (AltPython3Parser.OPEN_BRACK - 55)) | (1 << (AltPython3Parser.ADD - 55)) | (1 << (AltPython3Parser.MINUS - 55)) | (1 << (AltPython3Parser.NOT_OP - 55)) | (1 << (AltPython3Parser.OPEN_BRACE - 55)))) !== 0)) {
                            {
                                this.state = 524;
                                this.test();
                                this.state = 527;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === AltPython3Parser.FROM) {
                                    {
                                        this.state = 525;
                                        this.match(AltPython3Parser.FROM);
                                        this.state = 526;
                                        this.test();
                                    }
                                }
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 531;
                        this.match(AltPython3Parser.RAISE);
                        this.state = 532;
                        this.match(AltPython3Parser.NAME);
                        this.state = 533;
                        this.match(AltPython3Parser.COMMA);
                        this.state = 534;
                        this.str();
                        if (this.getStrictPython3Parsing()) {
                            Token_1.Token;
                            raiseToken = ((org.antlr.v4.runtime.tree.TerminalNodeImpl));
                            this._ctx.children.get(0);
                            getSymbol();
                            Token_1.Token;
                            startingOffender = ((org.antlr.v4.runtime.tree.TerminalNodeImpl));
                            this._ctx.children.get(1);
                            getSymbol();
                            throw new NoViableAltException_1.NoViableAltException(this, this.getInputStream(), raiseToken, startingOffender, null, this._ctx);
                        }
                        else {
                            this.likelyIsPython2 = true;
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
    AltPython3Parser.prototype.import_stmt = function () {
        var _localctx = new Import_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, AltPython3Parser.RULE_import_stmt);
        try {
            this.state = 541;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AltPython3Parser.IMPORT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 539;
                        this.import_name();
                    }
                    break;
                case AltPython3Parser.FROM:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 540;
                        this.import_from();
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
    AltPython3Parser.prototype.import_name = function () {
        var _localctx = new Import_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, AltPython3Parser.RULE_import_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 543;
                this.match(AltPython3Parser.IMPORT);
                this.state = 544;
                this.dotted_as_names();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    AltPython3Parser.prototype.import_from = function () {
        var _localctx = new Import_fromContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, AltPython3Parser.RULE_import_from);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 546;
                this.match(AltPython3Parser.FROM);
                this.state = 559;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 74, this._ctx)) {
                    case 1:
                        {
                            this.state = 550;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === AltPython3Parser.DOT || _la === AltPython3Parser.ELLIPSIS) {
                                {
                                    {
                                        this.state = 547;
                                        _la = this._input.LA(1);
                                        if (!(_la === AltPython3Parser.DOT || _la === AltPython3Parser.ELLIPSIS)) {
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
                                this.state = 552;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 553;
                            this.dotted_name();
                        }
                        break;
                    case 2:
                        {
                            this.state = 555;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 554;
                                        _la = this._input.LA(1);
                                        if (!(_la === AltPython3Parser.DOT || _la === AltPython3Parser.ELLIPSIS)) {
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
                                this.state = 557;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === AltPython3Parser.DOT || _la === AltPython3Parser.ELLIPSIS);
                        }
                        break;
                }
                this.state = 561;
                this.match(AltPython3Parser.IMPORT);
                this.state = 568;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case AltPython3Parser.STAR:
                        {
                            this.state = 562;
                            this.match(AltPython3Parser.STAR);
                        }
                        break;
                    case AltPython3Parser.OPEN_PAREN:
                        {
                            this.state = 563;
                            this.match(AltPython3Parser.OPEN_PAREN);
                            this.state = 564;
                            this.import_as_names();
                            this.state = 565;
                            this.match(AltPython3Parser.CLOSE_PAREN);
                        }
                        break;
                    case AltPython3Parser.NAME:
                        {
                            this.state = 567;
                            this.import_as_names();
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
    AltPython3Parser.prototype.import_as_name = function () {
        var _localctx = new Import_as_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, AltPython3Parser.RULE_import_as_name);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 570;
                this.match(AltPython3Parser.NAME);
                this.state = 573;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AltPython3Parser.AS) {
                    {
                        this.state = 571;
                        this.match(AltPython3Parser.AS);
                        this.state = 572;
                        this.match(AltPython3Parser.NAME);
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
    AltPython3Parser.prototype.dotted_as_name = function () {
        var _localctx = new Dotted_as_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, AltPython3Parser.RULE_dotted_as_name);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 575;
                this.dotted_name();
                this.state = 578;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AltPython3Parser.AS) {
                    {
                        this.state = 576;
                        this.match(AltPython3Parser.AS);
                        this.state = 577;
                        this.match(AltPython3Parser.NAME);
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
    AltPython3Parser.prototype.import_as_names = function () {
        var _localctx = new Import_as_namesContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, AltPython3Parser.RULE_import_as_names);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 580;
                this.import_as_name();
                this.state = 585;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 581;
                                this.match(AltPython3Parser.COMMA);
                                this.state = 582;
                                this.import_as_name();
                            }
                        }
                    }
                    this.state = 587;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
                }
                this.state = 589;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AltPython3Parser.COMMA) {
                    {
                        this.state = 588;
                        this.match(AltPython3Parser.COMMA);
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
    AltPython3Parser.prototype.dotted_as_names = function () {
        var _localctx = new Dotted_as_namesContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, AltPython3Parser.RULE_dotted_as_names);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 591;
                this.dotted_as_name();
                this.state = 596;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === AltPython3Parser.COMMA) {
                    {
                        {
                            this.state = 592;
                            this.match(AltPython3Parser.COMMA);
                            this.state = 593;
                            this.dotted_as_name();
                        }
                    }
                    this.state = 598;
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
    AltPython3Parser.prototype.dotted_name = function () {
        var _localctx = new Dotted_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, AltPython3Parser.RULE_dotted_name);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 599;
                this.match(AltPython3Parser.NAME);
                this.state = 604;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === AltPython3Parser.DOT) {
                    {
                        {
                            this.state = 600;
                            this.match(AltPython3Parser.DOT);
                            this.state = 601;
                            this.match(AltPython3Parser.NAME);
                        }
                    }
                    this.state = 606;
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
    AltPython3Parser.prototype.global_stmt = function () {
        var _localctx = new Global_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, AltPython3Parser.RULE_global_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 607;
                this.match(AltPython3Parser.GLOBAL);
                this.state = 608;
                this.match(AltPython3Parser.NAME);
                this.state = 613;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === AltPython3Parser.COMMA) {
                    {
                        {
                            this.state = 609;
                            this.match(AltPython3Parser.COMMA);
                            this.state = 610;
                            this.match(AltPython3Parser.NAME);
                        }
                    }
                    this.state = 615;
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
    AltPython3Parser.prototype.nonlocal_stmt = function () {
        var _localctx = new Nonlocal_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, AltPython3Parser.RULE_nonlocal_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 616;
                this.match(AltPython3Parser.NONLOCAL);
                this.state = 617;
                this.match(AltPython3Parser.NAME);
                this.state = 622;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === AltPython3Parser.COMMA) {
                    {
                        {
                            this.state = 618;
                            this.match(AltPython3Parser.COMMA);
                            this.state = 619;
                            this.match(AltPython3Parser.NAME);
                        }
                    }
                    this.state = 624;
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
    AltPython3Parser.prototype.assert_stmt = function () {
        var _localctx = new Assert_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, AltPython3Parser.RULE_assert_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 625;
                this.match(AltPython3Parser.ASSERT);
                this.state = 626;
                this.test();
                this.state = 629;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AltPython3Parser.COMMA) {
                    {
                        this.state = 627;
                        this.match(AltPython3Parser.COMMA);
                        this.state = 628;
                        this.test();
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
    AltPython3Parser.prototype.compound_stmt = function () {
        var _localctx = new Compound_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, AltPython3Parser.RULE_compound_stmt);
        try {
            this.state = 639;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AltPython3Parser.IF:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 631;
                        this.if_stmt();
                    }
                    break;
                case AltPython3Parser.WHILE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 632;
                        this.while_stmt();
                    }
                    break;
                case AltPython3Parser.FOR:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 633;
                        this.for_stmt();
                    }
                    break;
                case AltPython3Parser.TRY:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 634;
                        this.try_stmt();
                    }
                    break;
                case AltPython3Parser.WITH:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 635;
                        this.with_stmt();
                    }
                    break;
                case AltPython3Parser.DEF:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 636;
                        this.funcdef();
                    }
                    break;
                case AltPython3Parser.CLASS:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 637;
                        this.classdef();
                    }
                    break;
                case AltPython3Parser.AT:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 638;
                        this.decorated();
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
    AltPython3Parser.prototype.if_stmt = function () {
        var _localctx = new If_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, AltPython3Parser.RULE_if_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 641;
                this.match(AltPython3Parser.IF);
                this.state = 642;
                this.test();
                this.state = 643;
                this.match(AltPython3Parser.COLON);
                this.state = 644;
                this.suite();
                this.state = 652;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === AltPython3Parser.ELIF) {
                    {
                        {
                            this.state = 645;
                            this.match(AltPython3Parser.ELIF);
                            this.state = 646;
                            this.test();
                            this.state = 647;
                            this.match(AltPython3Parser.COLON);
                            this.state = 648;
                            this.suite();
                        }
                    }
                    this.state = 654;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 658;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AltPython3Parser.ELSE) {
                    {
                        this.state = 655;
                        this.match(AltPython3Parser.ELSE);
                        this.state = 656;
                        this.match(AltPython3Parser.COLON);
                        this.state = 657;
                        this.suite();
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
    AltPython3Parser.prototype.while_stmt = function () {
        var _localctx = new While_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, AltPython3Parser.RULE_while_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 660;
                this.match(AltPython3Parser.WHILE);
                this.state = 661;
                this.test();
                this.state = 662;
                this.match(AltPython3Parser.COLON);
                this.state = 663;
                this.suite();
                this.state = 667;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AltPython3Parser.ELSE) {
                    {
                        this.state = 664;
                        this.match(AltPython3Parser.ELSE);
                        this.state = 665;
                        this.match(AltPython3Parser.COLON);
                        this.state = 666;
                        this.suite();
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
    AltPython3Parser.prototype.for_stmt = function () {
        var _localctx = new For_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, AltPython3Parser.RULE_for_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 669;
                this.match(AltPython3Parser.FOR);
                this.state = 670;
                this.exprlist();
                this.state = 671;
                this.match(AltPython3Parser.IN);
                this.state = 672;
                this.testlist();
                this.state = 673;
                this.match(AltPython3Parser.COLON);
                this.state = 674;
                this.suite();
                this.state = 678;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AltPython3Parser.ELSE) {
                    {
                        this.state = 675;
                        this.match(AltPython3Parser.ELSE);
                        this.state = 676;
                        this.match(AltPython3Parser.COLON);
                        this.state = 677;
                        this.suite();
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
    AltPython3Parser.prototype.try_stmt = function () {
        var _localctx = new Try_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, AltPython3Parser.RULE_try_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 680;
                this.match(AltPython3Parser.TRY);
                this.state = 681;
                this.match(AltPython3Parser.COLON);
                this.state = 682;
                this.suite();
                this.state = 704;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case AltPython3Parser.EXCEPT:
                        {
                            this.state = 687;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 683;
                                        this.except_clause();
                                        this.state = 684;
                                        this.match(AltPython3Parser.COLON);
                                        this.state = 685;
                                        this.suite();
                                    }
                                }
                                this.state = 689;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === AltPython3Parser.EXCEPT);
                            this.state = 694;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === AltPython3Parser.ELSE) {
                                {
                                    this.state = 691;
                                    this.match(AltPython3Parser.ELSE);
                                    this.state = 692;
                                    this.match(AltPython3Parser.COLON);
                                    this.state = 693;
                                    this.suite();
                                }
                            }
                            this.state = 699;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === AltPython3Parser.FINALLY) {
                                {
                                    this.state = 696;
                                    this.match(AltPython3Parser.FINALLY);
                                    this.state = 697;
                                    this.match(AltPython3Parser.COLON);
                                    this.state = 698;
                                    this.suite();
                                }
                            }
                        }
                        break;
                    case AltPython3Parser.FINALLY:
                        {
                            this.state = 701;
                            this.match(AltPython3Parser.FINALLY);
                            this.state = 702;
                            this.match(AltPython3Parser.COLON);
                            this.state = 703;
                            this.suite();
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
    AltPython3Parser.prototype.with_stmt = function () {
        var _localctx = new With_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, AltPython3Parser.RULE_with_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 706;
                this.match(AltPython3Parser.WITH);
                this.state = 707;
                this.with_item();
                this.state = 712;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === AltPython3Parser.COMMA) {
                    {
                        {
                            this.state = 708;
                            this.match(AltPython3Parser.COMMA);
                            this.state = 709;
                            this.with_item();
                        }
                    }
                    this.state = 714;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 715;
                this.match(AltPython3Parser.COLON);
                this.state = 716;
                this.suite();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    AltPython3Parser.prototype.with_item = function () {
        var _localctx = new With_itemContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, AltPython3Parser.RULE_with_item);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 718;
                this.test();
                this.state = 721;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AltPython3Parser.AS) {
                    {
                        this.state = 719;
                        this.match(AltPython3Parser.AS);
                        this.state = 720;
                        this.expr();
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
    AltPython3Parser.prototype.except_clause = function () {
        var _localctx = new Except_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, AltPython3Parser.RULE_except_clause);
        var _la;
        try {
            this.state = 736;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 98, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 723;
                        this.match(AltPython3Parser.EXCEPT);
                        this.state = 729;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (AltPython3Parser.LAMBDA - 21)) | (1 << (AltPython3Parser.NOT - 21)) | (1 << (AltPython3Parser.NONE - 21)) | (1 << (AltPython3Parser.TRUE - 21)) | (1 << (AltPython3Parser.FALSE - 21)) | (1 << (AltPython3Parser.NAME - 21)) | (1 << (AltPython3Parser.STRING_LITERAL - 21)) | (1 << (AltPython3Parser.BYTES_LITERAL - 21)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 21)) | (1 << (AltPython3Parser.OCT_INTEGER - 21)) | (1 << (AltPython3Parser.HEX_INTEGER - 21)) | (1 << (AltPython3Parser.BIN_INTEGER - 21)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 21)) | (1 << (AltPython3Parser.IMAG_NUMBER - 21)) | (1 << (AltPython3Parser.ELLIPSIS - 21)) | (1 << (AltPython3Parser.STAR - 21)) | (1 << (AltPython3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (AltPython3Parser.OPEN_BRACK - 55)) | (1 << (AltPython3Parser.ADD - 55)) | (1 << (AltPython3Parser.MINUS - 55)) | (1 << (AltPython3Parser.NOT_OP - 55)) | (1 << (AltPython3Parser.OPEN_BRACE - 55)))) !== 0)) {
                            {
                                this.state = 724;
                                this.test();
                                this.state = 727;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === AltPython3Parser.AS) {
                                    {
                                        this.state = 725;
                                        this.match(AltPython3Parser.AS);
                                        this.state = 726;
                                        this.match(AltPython3Parser.NAME);
                                    }
                                }
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 731;
                        this.match(AltPython3Parser.EXCEPT);
                        this.state = 732;
                        this.match(AltPython3Parser.NAME);
                        this.state = 733;
                        this.match(AltPython3Parser.COMMA);
                        this.state = 734;
                        this.match(AltPython3Parser.NAME);
                        if (this.getStrictPython3Parsing()) {
                            Token_1.Token;
                            exceptToken = ((org.antlr.v4.runtime.tree.TerminalNodeImpl));
                            this._ctx.children.get(0);
                            getSymbol();
                            Token_1.Token;
                            startingOffender = ((org.antlr.v4.runtime.tree.TerminalNodeImpl));
                            this._ctx.children.get(1);
                            getSymbol();
                            throw new NoViableAltException_1.NoViableAltException(this, this.getInputStream(), exceptToken, startingOffender, null, this._ctx);
                        }
                        else {
                            this.likelyIsPython2 = true;
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
    AltPython3Parser.prototype.suite = function () {
        var _localctx = new SuiteContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, AltPython3Parser.RULE_suite);
        var _la;
        try {
            this.state = 748;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AltPython3Parser.PRINT:
                case AltPython3Parser.RETURN:
                case AltPython3Parser.RAISE:
                case AltPython3Parser.FROM:
                case AltPython3Parser.IMPORT:
                case AltPython3Parser.GLOBAL:
                case AltPython3Parser.NONLOCAL:
                case AltPython3Parser.ASSERT:
                case AltPython3Parser.LAMBDA:
                case AltPython3Parser.NOT:
                case AltPython3Parser.NONE:
                case AltPython3Parser.TRUE:
                case AltPython3Parser.FALSE:
                case AltPython3Parser.YIELD:
                case AltPython3Parser.DEL:
                case AltPython3Parser.PASS:
                case AltPython3Parser.CONTINUE:
                case AltPython3Parser.BREAK:
                case AltPython3Parser.NAME:
                case AltPython3Parser.STRING_LITERAL:
                case AltPython3Parser.BYTES_LITERAL:
                case AltPython3Parser.DECIMAL_INTEGER:
                case AltPython3Parser.OCT_INTEGER:
                case AltPython3Parser.HEX_INTEGER:
                case AltPython3Parser.BIN_INTEGER:
                case AltPython3Parser.FLOAT_NUMBER:
                case AltPython3Parser.IMAG_NUMBER:
                case AltPython3Parser.ELLIPSIS:
                case AltPython3Parser.STAR:
                case AltPython3Parser.OPEN_PAREN:
                case AltPython3Parser.OPEN_BRACK:
                case AltPython3Parser.ADD:
                case AltPython3Parser.MINUS:
                case AltPython3Parser.NOT_OP:
                case AltPython3Parser.OPEN_BRACE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 738;
                        this.simple_stmt();
                    }
                    break;
                case AltPython3Parser.NEWLINE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 739;
                        this.match(AltPython3Parser.NEWLINE);
                        this.state = 740;
                        this.match(AltPython3Parser.INDENT);
                        this.state = 742;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 741;
                                    this.stmt();
                                }
                            }
                            this.state = 744;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AltPython3Parser.PRINT) | (1 << AltPython3Parser.DEF) | (1 << AltPython3Parser.RETURN) | (1 << AltPython3Parser.RAISE) | (1 << AltPython3Parser.FROM) | (1 << AltPython3Parser.IMPORT) | (1 << AltPython3Parser.GLOBAL) | (1 << AltPython3Parser.NONLOCAL) | (1 << AltPython3Parser.ASSERT) | (1 << AltPython3Parser.IF) | (1 << AltPython3Parser.WHILE) | (1 << AltPython3Parser.FOR) | (1 << AltPython3Parser.TRY) | (1 << AltPython3Parser.WITH) | (1 << AltPython3Parser.LAMBDA) | (1 << AltPython3Parser.NOT) | (1 << AltPython3Parser.NONE) | (1 << AltPython3Parser.TRUE) | (1 << AltPython3Parser.FALSE) | (1 << AltPython3Parser.CLASS) | (1 << AltPython3Parser.YIELD) | (1 << AltPython3Parser.DEL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AltPython3Parser.PASS - 32)) | (1 << (AltPython3Parser.CONTINUE - 32)) | (1 << (AltPython3Parser.BREAK - 32)) | (1 << (AltPython3Parser.NAME - 32)) | (1 << (AltPython3Parser.STRING_LITERAL - 32)) | (1 << (AltPython3Parser.BYTES_LITERAL - 32)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 32)) | (1 << (AltPython3Parser.OCT_INTEGER - 32)) | (1 << (AltPython3Parser.HEX_INTEGER - 32)) | (1 << (AltPython3Parser.BIN_INTEGER - 32)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 32)) | (1 << (AltPython3Parser.IMAG_NUMBER - 32)) | (1 << (AltPython3Parser.ELLIPSIS - 32)) | (1 << (AltPython3Parser.STAR - 32)) | (1 << (AltPython3Parser.OPEN_PAREN - 32)) | (1 << (AltPython3Parser.OPEN_BRACK - 32)) | (1 << (AltPython3Parser.ADD - 32)) | (1 << (AltPython3Parser.MINUS - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (AltPython3Parser.NOT_OP - 67)) | (1 << (AltPython3Parser.OPEN_BRACE - 67)) | (1 << (AltPython3Parser.AT - 67)))) !== 0));
                        this.state = 746;
                        this.match(AltPython3Parser.DEDENT);
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
    AltPython3Parser.prototype.test = function () {
        var _localctx = new TestContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, AltPython3Parser.RULE_test);
        var _la;
        try {
            this.state = 759;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AltPython3Parser.NOT:
                case AltPython3Parser.NONE:
                case AltPython3Parser.TRUE:
                case AltPython3Parser.FALSE:
                case AltPython3Parser.NAME:
                case AltPython3Parser.STRING_LITERAL:
                case AltPython3Parser.BYTES_LITERAL:
                case AltPython3Parser.DECIMAL_INTEGER:
                case AltPython3Parser.OCT_INTEGER:
                case AltPython3Parser.HEX_INTEGER:
                case AltPython3Parser.BIN_INTEGER:
                case AltPython3Parser.FLOAT_NUMBER:
                case AltPython3Parser.IMAG_NUMBER:
                case AltPython3Parser.ELLIPSIS:
                case AltPython3Parser.STAR:
                case AltPython3Parser.OPEN_PAREN:
                case AltPython3Parser.OPEN_BRACK:
                case AltPython3Parser.ADD:
                case AltPython3Parser.MINUS:
                case AltPython3Parser.NOT_OP:
                case AltPython3Parser.OPEN_BRACE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 750;
                        this.or_test();
                        this.state = 756;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AltPython3Parser.IF) {
                            {
                                this.state = 751;
                                this.match(AltPython3Parser.IF);
                                this.state = 752;
                                this.or_test();
                                this.state = 753;
                                this.match(AltPython3Parser.ELSE);
                                this.state = 754;
                                this.test();
                            }
                        }
                    }
                    break;
                case AltPython3Parser.LAMBDA:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 758;
                        this.lambdef();
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
    AltPython3Parser.prototype.test_nocond = function () {
        var _localctx = new Test_nocondContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, AltPython3Parser.RULE_test_nocond);
        try {
            this.state = 763;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AltPython3Parser.NOT:
                case AltPython3Parser.NONE:
                case AltPython3Parser.TRUE:
                case AltPython3Parser.FALSE:
                case AltPython3Parser.NAME:
                case AltPython3Parser.STRING_LITERAL:
                case AltPython3Parser.BYTES_LITERAL:
                case AltPython3Parser.DECIMAL_INTEGER:
                case AltPython3Parser.OCT_INTEGER:
                case AltPython3Parser.HEX_INTEGER:
                case AltPython3Parser.BIN_INTEGER:
                case AltPython3Parser.FLOAT_NUMBER:
                case AltPython3Parser.IMAG_NUMBER:
                case AltPython3Parser.ELLIPSIS:
                case AltPython3Parser.STAR:
                case AltPython3Parser.OPEN_PAREN:
                case AltPython3Parser.OPEN_BRACK:
                case AltPython3Parser.ADD:
                case AltPython3Parser.MINUS:
                case AltPython3Parser.NOT_OP:
                case AltPython3Parser.OPEN_BRACE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 761;
                        this.or_test();
                    }
                    break;
                case AltPython3Parser.LAMBDA:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 762;
                        this.lambdef_nocond();
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
    AltPython3Parser.prototype.lambdef = function () {
        var _localctx = new LambdefContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, AltPython3Parser.RULE_lambdef);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 765;
                this.match(AltPython3Parser.LAMBDA);
                this.state = 767;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (AltPython3Parser.NAME - 36)) | (1 << (AltPython3Parser.STAR - 36)) | (1 << (AltPython3Parser.POWER - 36)))) !== 0)) {
                    {
                        this.state = 766;
                        this.varargslist();
                    }
                }
                this.state = 769;
                this.match(AltPython3Parser.COLON);
                this.state = 770;
                this.test();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    AltPython3Parser.prototype.lambdef_nocond = function () {
        var _localctx = new Lambdef_nocondContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, AltPython3Parser.RULE_lambdef_nocond);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 772;
                this.match(AltPython3Parser.LAMBDA);
                this.state = 774;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (AltPython3Parser.NAME - 36)) | (1 << (AltPython3Parser.STAR - 36)) | (1 << (AltPython3Parser.POWER - 36)))) !== 0)) {
                    {
                        this.state = 773;
                        this.varargslist();
                    }
                }
                this.state = 776;
                this.match(AltPython3Parser.COLON);
                this.state = 777;
                this.test_nocond();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    AltPython3Parser.prototype.or_test = function () {
        var _localctx = new Or_testContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, AltPython3Parser.RULE_or_test);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 779;
                this.and_test();
                this.state = 784;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === AltPython3Parser.OR) {
                    {
                        {
                            this.state = 780;
                            this.match(AltPython3Parser.OR);
                            this.state = 781;
                            this.and_test();
                        }
                    }
                    this.state = 786;
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
    AltPython3Parser.prototype.and_test = function () {
        var _localctx = new And_testContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, AltPython3Parser.RULE_and_test);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 787;
                this.not_test();
                this.state = 792;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === AltPython3Parser.AND) {
                    {
                        {
                            this.state = 788;
                            this.match(AltPython3Parser.AND);
                            this.state = 789;
                            this.not_test();
                        }
                    }
                    this.state = 794;
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
    AltPython3Parser.prototype.not_test = function () {
        var _localctx = new Not_testContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, AltPython3Parser.RULE_not_test);
        try {
            this.state = 798;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AltPython3Parser.NOT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 795;
                        this.match(AltPython3Parser.NOT);
                        this.state = 796;
                        this.not_test();
                    }
                    break;
                case AltPython3Parser.NONE:
                case AltPython3Parser.TRUE:
                case AltPython3Parser.FALSE:
                case AltPython3Parser.NAME:
                case AltPython3Parser.STRING_LITERAL:
                case AltPython3Parser.BYTES_LITERAL:
                case AltPython3Parser.DECIMAL_INTEGER:
                case AltPython3Parser.OCT_INTEGER:
                case AltPython3Parser.HEX_INTEGER:
                case AltPython3Parser.BIN_INTEGER:
                case AltPython3Parser.FLOAT_NUMBER:
                case AltPython3Parser.IMAG_NUMBER:
                case AltPython3Parser.ELLIPSIS:
                case AltPython3Parser.STAR:
                case AltPython3Parser.OPEN_PAREN:
                case AltPython3Parser.OPEN_BRACK:
                case AltPython3Parser.ADD:
                case AltPython3Parser.MINUS:
                case AltPython3Parser.NOT_OP:
                case AltPython3Parser.OPEN_BRACE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 797;
                        this.comparison();
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
    AltPython3Parser.prototype.comparison = function () {
        var _localctx = new ComparisonContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, AltPython3Parser.RULE_comparison);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 800;
                this.star_expr();
                this.state = 806;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AltPython3Parser.IN) | (1 << AltPython3Parser.NOT) | (1 << AltPython3Parser.IS))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (AltPython3Parser.LESS_THAN - 70)) | (1 << (AltPython3Parser.GREATER_THAN - 70)) | (1 << (AltPython3Parser.EQUALS - 70)) | (1 << (AltPython3Parser.GT_EQ - 70)) | (1 << (AltPython3Parser.LT_EQ - 70)) | (1 << (AltPython3Parser.NOT_EQ_1 - 70)) | (1 << (AltPython3Parser.NOT_EQ_2 - 70)))) !== 0)) {
                    {
                        {
                            this.state = 801;
                            this.comp_op();
                            this.state = 802;
                            this.star_expr();
                        }
                    }
                    this.state = 808;
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
    AltPython3Parser.prototype.comp_op = function () {
        var _localctx = new Comp_opContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, AltPython3Parser.RULE_comp_op);
        try {
            this.state = 822;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 110, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 809;
                        this.match(AltPython3Parser.LESS_THAN);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 810;
                        this.match(AltPython3Parser.GREATER_THAN);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 811;
                        this.match(AltPython3Parser.EQUALS);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 812;
                        this.match(AltPython3Parser.GT_EQ);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 813;
                        this.match(AltPython3Parser.LT_EQ);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 814;
                        this.match(AltPython3Parser.NOT_EQ_1);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 815;
                        this.match(AltPython3Parser.NOT_EQ_2);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 816;
                        this.match(AltPython3Parser.IN);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 817;
                        this.match(AltPython3Parser.NOT);
                        this.state = 818;
                        this.match(AltPython3Parser.IN);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 819;
                        this.match(AltPython3Parser.IS);
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 820;
                        this.match(AltPython3Parser.IS);
                        this.state = 821;
                        this.match(AltPython3Parser.NOT);
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
    AltPython3Parser.prototype.star_expr = function () {
        var _localctx = new Star_exprContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, AltPython3Parser.RULE_star_expr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 825;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AltPython3Parser.STAR) {
                    {
                        this.state = 824;
                        this.match(AltPython3Parser.STAR);
                    }
                }
                this.state = 827;
                this.expr();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    AltPython3Parser.prototype.expr = function () {
        var _localctx = new ExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, AltPython3Parser.RULE_expr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 829;
                this.xor_expr();
                this.state = 834;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === AltPython3Parser.OR_OP) {
                    {
                        {
                            this.state = 830;
                            this.match(AltPython3Parser.OR_OP);
                            this.state = 831;
                            this.xor_expr();
                        }
                    }
                    this.state = 836;
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
    AltPython3Parser.prototype.xor_expr = function () {
        var _localctx = new Xor_exprContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, AltPython3Parser.RULE_xor_expr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 837;
                this.and_expr();
                this.state = 842;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === AltPython3Parser.XOR) {
                    {
                        {
                            this.state = 838;
                            this.match(AltPython3Parser.XOR);
                            this.state = 839;
                            this.and_expr();
                        }
                    }
                    this.state = 844;
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
    AltPython3Parser.prototype.and_expr = function () {
        var _localctx = new And_exprContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, AltPython3Parser.RULE_and_expr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 845;
                this.shift_expr();
                this.state = 850;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === AltPython3Parser.AND_OP) {
                    {
                        {
                            this.state = 846;
                            this.match(AltPython3Parser.AND_OP);
                            this.state = 847;
                            this.shift_expr();
                        }
                    }
                    this.state = 852;
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
    AltPython3Parser.prototype.shift_expr = function () {
        var _localctx = new Shift_exprContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, AltPython3Parser.RULE_shift_expr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 853;
                this.arith_expr();
                this.state = 860;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === AltPython3Parser.LEFT_SHIFT || _la === AltPython3Parser.RIGHT_SHIFT) {
                    {
                        this.state = 858;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case AltPython3Parser.LEFT_SHIFT:
                                {
                                    this.state = 854;
                                    this.match(AltPython3Parser.LEFT_SHIFT);
                                    this.state = 855;
                                    this.arith_expr();
                                }
                                break;
                            case AltPython3Parser.RIGHT_SHIFT:
                                {
                                    this.state = 856;
                                    this.match(AltPython3Parser.RIGHT_SHIFT);
                                    this.state = 857;
                                    this.arith_expr();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 862;
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
    AltPython3Parser.prototype.arith_expr = function () {
        var _localctx = new Arith_exprContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, AltPython3Parser.RULE_arith_expr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 863;
                this.term();
                this.state = 870;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === AltPython3Parser.ADD || _la === AltPython3Parser.MINUS) {
                    {
                        this.state = 868;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case AltPython3Parser.ADD:
                                {
                                    this.state = 864;
                                    this.match(AltPython3Parser.ADD);
                                    this.state = 865;
                                    this.term();
                                }
                                break;
                            case AltPython3Parser.MINUS:
                                {
                                    this.state = 866;
                                    this.match(AltPython3Parser.MINUS);
                                    this.state = 867;
                                    this.term();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 872;
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
    AltPython3Parser.prototype.term = function () {
        var _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, AltPython3Parser.RULE_term);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 873;
                this.factor();
                this.state = 886;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (AltPython3Parser.STAR - 47)) | (1 << (AltPython3Parser.DIV - 47)) | (1 << (AltPython3Parser.MOD - 47)) | (1 << (AltPython3Parser.IDIV - 47)) | (1 << (AltPython3Parser.AT - 47)))) !== 0)) {
                    {
                        this.state = 884;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case AltPython3Parser.STAR:
                                {
                                    this.state = 874;
                                    this.match(AltPython3Parser.STAR);
                                    this.state = 875;
                                    this.factor();
                                }
                                break;
                            case AltPython3Parser.DIV:
                                {
                                    this.state = 876;
                                    this.match(AltPython3Parser.DIV);
                                    this.state = 877;
                                    this.factor();
                                }
                                break;
                            case AltPython3Parser.MOD:
                                {
                                    this.state = 878;
                                    this.match(AltPython3Parser.MOD);
                                    this.state = 879;
                                    this.factor();
                                }
                                break;
                            case AltPython3Parser.IDIV:
                                {
                                    this.state = 880;
                                    this.match(AltPython3Parser.IDIV);
                                    this.state = 881;
                                    this.factor();
                                }
                                break;
                            case AltPython3Parser.AT:
                                {
                                    this.state = 882;
                                    this.match(AltPython3Parser.AT);
                                    this.state = 883;
                                    this.factor();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 888;
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
    AltPython3Parser.prototype.factor = function () {
        var _localctx = new FactorContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, AltPython3Parser.RULE_factor);
        try {
            this.state = 896;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AltPython3Parser.ADD:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 889;
                        this.match(AltPython3Parser.ADD);
                        this.state = 890;
                        this.factor();
                    }
                    break;
                case AltPython3Parser.MINUS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 891;
                        this.match(AltPython3Parser.MINUS);
                        this.state = 892;
                        this.factor();
                    }
                    break;
                case AltPython3Parser.NOT_OP:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 893;
                        this.match(AltPython3Parser.NOT_OP);
                        this.state = 894;
                        this.factor();
                    }
                    break;
                case AltPython3Parser.NONE:
                case AltPython3Parser.TRUE:
                case AltPython3Parser.FALSE:
                case AltPython3Parser.NAME:
                case AltPython3Parser.STRING_LITERAL:
                case AltPython3Parser.BYTES_LITERAL:
                case AltPython3Parser.DECIMAL_INTEGER:
                case AltPython3Parser.OCT_INTEGER:
                case AltPython3Parser.HEX_INTEGER:
                case AltPython3Parser.BIN_INTEGER:
                case AltPython3Parser.FLOAT_NUMBER:
                case AltPython3Parser.IMAG_NUMBER:
                case AltPython3Parser.ELLIPSIS:
                case AltPython3Parser.OPEN_PAREN:
                case AltPython3Parser.OPEN_BRACK:
                case AltPython3Parser.OPEN_BRACE:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 895;
                        this.power();
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
    AltPython3Parser.prototype.power = function () {
        var _localctx = new PowerContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, AltPython3Parser.RULE_power);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 898;
                this.atom();
                this.state = 902;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (AltPython3Parser.DOT - 45)) | (1 << (AltPython3Parser.OPEN_PAREN - 45)) | (1 << (AltPython3Parser.OPEN_BRACK - 45)))) !== 0)) {
                    {
                        {
                            this.state = 899;
                            this.trailer();
                        }
                    }
                    this.state = 904;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 907;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AltPython3Parser.POWER) {
                    {
                        this.state = 905;
                        this.match(AltPython3Parser.POWER);
                        this.state = 906;
                        this.factor();
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
    AltPython3Parser.prototype.atom = function () {
        var _localctx = new AtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, AltPython3Parser.RULE_atom);
        var _la;
        try {
            this.state = 937;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AltPython3Parser.OPEN_PAREN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 909;
                        this.match(AltPython3Parser.OPEN_PAREN);
                        this.state = 912;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case AltPython3Parser.YIELD:
                                {
                                    this.state = 910;
                                    this.yield_expr();
                                }
                                break;
                            case AltPython3Parser.LAMBDA:
                            case AltPython3Parser.NOT:
                            case AltPython3Parser.NONE:
                            case AltPython3Parser.TRUE:
                            case AltPython3Parser.FALSE:
                            case AltPython3Parser.NAME:
                            case AltPython3Parser.STRING_LITERAL:
                            case AltPython3Parser.BYTES_LITERAL:
                            case AltPython3Parser.DECIMAL_INTEGER:
                            case AltPython3Parser.OCT_INTEGER:
                            case AltPython3Parser.HEX_INTEGER:
                            case AltPython3Parser.BIN_INTEGER:
                            case AltPython3Parser.FLOAT_NUMBER:
                            case AltPython3Parser.IMAG_NUMBER:
                            case AltPython3Parser.ELLIPSIS:
                            case AltPython3Parser.STAR:
                            case AltPython3Parser.OPEN_PAREN:
                            case AltPython3Parser.OPEN_BRACK:
                            case AltPython3Parser.ADD:
                            case AltPython3Parser.MINUS:
                            case AltPython3Parser.NOT_OP:
                            case AltPython3Parser.OPEN_BRACE:
                                {
                                    this.state = 911;
                                    this.testlist_comp();
                                }
                                break;
                            case AltPython3Parser.CLOSE_PAREN:
                                break;
                            default:
                                break;
                        }
                        this.state = 914;
                        this.match(AltPython3Parser.CLOSE_PAREN);
                    }
                    break;
                case AltPython3Parser.OPEN_BRACK:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 915;
                        this.match(AltPython3Parser.OPEN_BRACK);
                        this.state = 917;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (AltPython3Parser.LAMBDA - 21)) | (1 << (AltPython3Parser.NOT - 21)) | (1 << (AltPython3Parser.NONE - 21)) | (1 << (AltPython3Parser.TRUE - 21)) | (1 << (AltPython3Parser.FALSE - 21)) | (1 << (AltPython3Parser.NAME - 21)) | (1 << (AltPython3Parser.STRING_LITERAL - 21)) | (1 << (AltPython3Parser.BYTES_LITERAL - 21)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 21)) | (1 << (AltPython3Parser.OCT_INTEGER - 21)) | (1 << (AltPython3Parser.HEX_INTEGER - 21)) | (1 << (AltPython3Parser.BIN_INTEGER - 21)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 21)) | (1 << (AltPython3Parser.IMAG_NUMBER - 21)) | (1 << (AltPython3Parser.ELLIPSIS - 21)) | (1 << (AltPython3Parser.STAR - 21)) | (1 << (AltPython3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (AltPython3Parser.OPEN_BRACK - 55)) | (1 << (AltPython3Parser.ADD - 55)) | (1 << (AltPython3Parser.MINUS - 55)) | (1 << (AltPython3Parser.NOT_OP - 55)) | (1 << (AltPython3Parser.OPEN_BRACE - 55)))) !== 0)) {
                            {
                                this.state = 916;
                                this.testlist_comp();
                            }
                        }
                        this.state = 919;
                        this.match(AltPython3Parser.CLOSE_BRACK);
                    }
                    break;
                case AltPython3Parser.OPEN_BRACE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 920;
                        this.match(AltPython3Parser.OPEN_BRACE);
                        this.state = 922;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (AltPython3Parser.LAMBDA - 21)) | (1 << (AltPython3Parser.NOT - 21)) | (1 << (AltPython3Parser.NONE - 21)) | (1 << (AltPython3Parser.TRUE - 21)) | (1 << (AltPython3Parser.FALSE - 21)) | (1 << (AltPython3Parser.NAME - 21)) | (1 << (AltPython3Parser.STRING_LITERAL - 21)) | (1 << (AltPython3Parser.BYTES_LITERAL - 21)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 21)) | (1 << (AltPython3Parser.OCT_INTEGER - 21)) | (1 << (AltPython3Parser.HEX_INTEGER - 21)) | (1 << (AltPython3Parser.BIN_INTEGER - 21)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 21)) | (1 << (AltPython3Parser.IMAG_NUMBER - 21)) | (1 << (AltPython3Parser.ELLIPSIS - 21)) | (1 << (AltPython3Parser.STAR - 21)) | (1 << (AltPython3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (AltPython3Parser.OPEN_BRACK - 55)) | (1 << (AltPython3Parser.ADD - 55)) | (1 << (AltPython3Parser.MINUS - 55)) | (1 << (AltPython3Parser.NOT_OP - 55)) | (1 << (AltPython3Parser.OPEN_BRACE - 55)))) !== 0)) {
                            {
                                this.state = 921;
                                this.dictorsetmaker();
                            }
                        }
                        this.state = 924;
                        this.match(AltPython3Parser.CLOSE_BRACE);
                    }
                    break;
                case AltPython3Parser.NAME:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        org.antlr.v4.runtime.CommonToken;
                        token = null;
                        String;
                        tokenName = null;
                        if (this._ctx.start instanceof org.antlr.v4.runtime.CommonToken) {
                            token = (org.antlr.v4.runtime.CommonToken);
                            this._ctx.start;
                            if (token.getType() != AltPython3Parser.ALREADY_THROWN_TOKEN_TYPE) {
                                tokenName = token.getText();
                            }
                        }
                        if ("xrange".equals(tokenName) || "raw_input".equals(tokenName)) {
                            if (this.getStrictPython3Parsing()) {
                                // This throws twice - the second time on parenthesis close.
                                token.setType(AltPython3Parser.ALREADY_THROWN_TOKEN_TYPE);
                                throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            else {
                                this.likelyIsPython2 = true;
                            }
                        }
                        this.state = 926;
                        this.match(AltPython3Parser.NAME);
                    }
                    break;
                case AltPython3Parser.DECIMAL_INTEGER:
                case AltPython3Parser.OCT_INTEGER:
                case AltPython3Parser.HEX_INTEGER:
                case AltPython3Parser.BIN_INTEGER:
                case AltPython3Parser.FLOAT_NUMBER:
                case AltPython3Parser.IMAG_NUMBER:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 927;
                        this.number();
                    }
                    break;
                case AltPython3Parser.STRING_LITERAL:
                case AltPython3Parser.BYTES_LITERAL:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 929;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 928;
                                    this.str();
                                }
                            }
                            this.state = 931;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === AltPython3Parser.STRING_LITERAL || _la === AltPython3Parser.BYTES_LITERAL);
                    }
                    break;
                case AltPython3Parser.ELLIPSIS:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 933;
                        this.match(AltPython3Parser.ELLIPSIS);
                    }
                    break;
                case AltPython3Parser.NONE:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 934;
                        this.match(AltPython3Parser.NONE);
                    }
                    break;
                case AltPython3Parser.TRUE:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 935;
                        this.match(AltPython3Parser.TRUE);
                    }
                    break;
                case AltPython3Parser.FALSE:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 936;
                        this.match(AltPython3Parser.FALSE);
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
    AltPython3Parser.prototype.testlist_comp = function () {
        var _localctx = new Testlist_compContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, AltPython3Parser.RULE_testlist_comp);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 939;
                this.test();
                this.state = 951;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case AltPython3Parser.FOR:
                        {
                            this.state = 940;
                            this.comp_for();
                        }
                        break;
                    case AltPython3Parser.CLOSE_PAREN:
                    case AltPython3Parser.COMMA:
                    case AltPython3Parser.CLOSE_BRACK:
                        {
                            this.state = 945;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 941;
                                            this.match(AltPython3Parser.COMMA);
                                            this.state = 942;
                                            this.test();
                                        }
                                    }
                                }
                                this.state = 947;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
                            }
                            this.state = 949;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === AltPython3Parser.COMMA) {
                                {
                                    this.state = 948;
                                    this.match(AltPython3Parser.COMMA);
                                }
                            }
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
    AltPython3Parser.prototype.trailer = function () {
        var _localctx = new TrailerContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, AltPython3Parser.RULE_trailer);
        var _la;
        try {
            this.state = 965;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AltPython3Parser.OPEN_PAREN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 953;
                        this.match(AltPython3Parser.OPEN_PAREN);
                        this.state = 955;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (AltPython3Parser.LAMBDA - 21)) | (1 << (AltPython3Parser.NOT - 21)) | (1 << (AltPython3Parser.NONE - 21)) | (1 << (AltPython3Parser.TRUE - 21)) | (1 << (AltPython3Parser.FALSE - 21)) | (1 << (AltPython3Parser.NAME - 21)) | (1 << (AltPython3Parser.STRING_LITERAL - 21)) | (1 << (AltPython3Parser.BYTES_LITERAL - 21)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 21)) | (1 << (AltPython3Parser.OCT_INTEGER - 21)) | (1 << (AltPython3Parser.HEX_INTEGER - 21)) | (1 << (AltPython3Parser.BIN_INTEGER - 21)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 21)) | (1 << (AltPython3Parser.IMAG_NUMBER - 21)) | (1 << (AltPython3Parser.ELLIPSIS - 21)) | (1 << (AltPython3Parser.STAR - 21)) | (1 << (AltPython3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (AltPython3Parser.POWER - 53)) | (1 << (AltPython3Parser.OPEN_BRACK - 53)) | (1 << (AltPython3Parser.ADD - 53)) | (1 << (AltPython3Parser.MINUS - 53)) | (1 << (AltPython3Parser.NOT_OP - 53)) | (1 << (AltPython3Parser.OPEN_BRACE - 53)))) !== 0)) {
                            {
                                this.state = 954;
                                this.arglist();
                            }
                        }
                        this.state = 957;
                        this.match(AltPython3Parser.CLOSE_PAREN);
                    }
                    break;
                case AltPython3Parser.OPEN_BRACK:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 958;
                        this.match(AltPython3Parser.OPEN_BRACK);
                        this.state = 959;
                        this.subscriptlist();
                        this.state = 960;
                        this.match(AltPython3Parser.CLOSE_BRACK);
                    }
                    break;
                case AltPython3Parser.DOT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 962;
                        this.match(AltPython3Parser.DOT);
                        this.state = 963;
                        this.match(AltPython3Parser.NAME);
                        if ("next".equals(this._ctx.children.get(1).getText())) {
                            if (this.getStrictPython3Parsing()) {
                                TerminalNode_1.TerminalNode;
                                tn = ((org.antlr.v4.runtime.tree.TerminalNodeImpl));
                                this._ctx.children.get(0);
                                ;
                                Token_1.Token;
                                parentObject = ((PowerContext));
                                tn.getParent().getParent();
                                start;
                                Token_1.Token;
                                offendingToken = ((org.antlr.v4.runtime.tree.TerminalNodeImpl));
                                this._ctx.children.get(1);
                                getSymbol();
                                throw new NoViableAltException_1.NoViableAltException(this, this.getInputStream(), parentObject, offendingToken, null, this._ctx);
                            }
                            else {
                                this.likelyIsPython2 = true;
                            }
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
    AltPython3Parser.prototype.subscriptlist = function () {
        var _localctx = new SubscriptlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, AltPython3Parser.RULE_subscriptlist);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 967;
                this.subscript();
                this.state = 972;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 968;
                                this.match(AltPython3Parser.COMMA);
                                this.state = 969;
                                this.subscript();
                            }
                        }
                    }
                    this.state = 974;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
                }
                this.state = 976;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AltPython3Parser.COMMA) {
                    {
                        this.state = 975;
                        this.match(AltPython3Parser.COMMA);
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
    AltPython3Parser.prototype.subscript = function () {
        var _localctx = new SubscriptContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, AltPython3Parser.RULE_subscript);
        var _la;
        try {
            this.state = 989;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 139, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 978;
                        this.test();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 980;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (AltPython3Parser.LAMBDA - 21)) | (1 << (AltPython3Parser.NOT - 21)) | (1 << (AltPython3Parser.NONE - 21)) | (1 << (AltPython3Parser.TRUE - 21)) | (1 << (AltPython3Parser.FALSE - 21)) | (1 << (AltPython3Parser.NAME - 21)) | (1 << (AltPython3Parser.STRING_LITERAL - 21)) | (1 << (AltPython3Parser.BYTES_LITERAL - 21)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 21)) | (1 << (AltPython3Parser.OCT_INTEGER - 21)) | (1 << (AltPython3Parser.HEX_INTEGER - 21)) | (1 << (AltPython3Parser.BIN_INTEGER - 21)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 21)) | (1 << (AltPython3Parser.IMAG_NUMBER - 21)) | (1 << (AltPython3Parser.ELLIPSIS - 21)) | (1 << (AltPython3Parser.STAR - 21)) | (1 << (AltPython3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (AltPython3Parser.OPEN_BRACK - 55)) | (1 << (AltPython3Parser.ADD - 55)) | (1 << (AltPython3Parser.MINUS - 55)) | (1 << (AltPython3Parser.NOT_OP - 55)) | (1 << (AltPython3Parser.OPEN_BRACE - 55)))) !== 0)) {
                            {
                                this.state = 979;
                                this.test();
                            }
                        }
                        this.state = 982;
                        this.match(AltPython3Parser.COLON);
                        this.state = 984;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (AltPython3Parser.LAMBDA - 21)) | (1 << (AltPython3Parser.NOT - 21)) | (1 << (AltPython3Parser.NONE - 21)) | (1 << (AltPython3Parser.TRUE - 21)) | (1 << (AltPython3Parser.FALSE - 21)) | (1 << (AltPython3Parser.NAME - 21)) | (1 << (AltPython3Parser.STRING_LITERAL - 21)) | (1 << (AltPython3Parser.BYTES_LITERAL - 21)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 21)) | (1 << (AltPython3Parser.OCT_INTEGER - 21)) | (1 << (AltPython3Parser.HEX_INTEGER - 21)) | (1 << (AltPython3Parser.BIN_INTEGER - 21)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 21)) | (1 << (AltPython3Parser.IMAG_NUMBER - 21)) | (1 << (AltPython3Parser.ELLIPSIS - 21)) | (1 << (AltPython3Parser.STAR - 21)) | (1 << (AltPython3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (AltPython3Parser.OPEN_BRACK - 55)) | (1 << (AltPython3Parser.ADD - 55)) | (1 << (AltPython3Parser.MINUS - 55)) | (1 << (AltPython3Parser.NOT_OP - 55)) | (1 << (AltPython3Parser.OPEN_BRACE - 55)))) !== 0)) {
                            {
                                this.state = 983;
                                this.test();
                            }
                        }
                        this.state = 987;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AltPython3Parser.COLON) {
                            {
                                this.state = 986;
                                this.sliceop();
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
    AltPython3Parser.prototype.sliceop = function () {
        var _localctx = new SliceopContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, AltPython3Parser.RULE_sliceop);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 991;
                this.match(AltPython3Parser.COLON);
                this.state = 993;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (AltPython3Parser.LAMBDA - 21)) | (1 << (AltPython3Parser.NOT - 21)) | (1 << (AltPython3Parser.NONE - 21)) | (1 << (AltPython3Parser.TRUE - 21)) | (1 << (AltPython3Parser.FALSE - 21)) | (1 << (AltPython3Parser.NAME - 21)) | (1 << (AltPython3Parser.STRING_LITERAL - 21)) | (1 << (AltPython3Parser.BYTES_LITERAL - 21)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 21)) | (1 << (AltPython3Parser.OCT_INTEGER - 21)) | (1 << (AltPython3Parser.HEX_INTEGER - 21)) | (1 << (AltPython3Parser.BIN_INTEGER - 21)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 21)) | (1 << (AltPython3Parser.IMAG_NUMBER - 21)) | (1 << (AltPython3Parser.ELLIPSIS - 21)) | (1 << (AltPython3Parser.STAR - 21)) | (1 << (AltPython3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (AltPython3Parser.OPEN_BRACK - 55)) | (1 << (AltPython3Parser.ADD - 55)) | (1 << (AltPython3Parser.MINUS - 55)) | (1 << (AltPython3Parser.NOT_OP - 55)) | (1 << (AltPython3Parser.OPEN_BRACE - 55)))) !== 0)) {
                    {
                        this.state = 992;
                        this.test();
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
    AltPython3Parser.prototype.exprlist = function () {
        var _localctx = new ExprlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, AltPython3Parser.RULE_exprlist);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 995;
                this.star_expr();
                this.state = 1000;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 996;
                                this.match(AltPython3Parser.COMMA);
                                this.state = 997;
                                this.star_expr();
                            }
                        }
                    }
                    this.state = 1002;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
                }
                this.state = 1004;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AltPython3Parser.COMMA) {
                    {
                        this.state = 1003;
                        this.match(AltPython3Parser.COMMA);
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
    AltPython3Parser.prototype.testlist = function () {
        var _localctx = new TestlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, AltPython3Parser.RULE_testlist);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1006;
                this.test();
                this.state = 1011;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1007;
                                this.match(AltPython3Parser.COMMA);
                                this.state = 1008;
                                this.test();
                            }
                        }
                    }
                    this.state = 1013;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
                }
                this.state = 1015;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AltPython3Parser.COMMA) {
                    {
                        this.state = 1014;
                        this.match(AltPython3Parser.COMMA);
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
    AltPython3Parser.prototype.dictorsetmaker = function () {
        var _localctx = new DictorsetmakerContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, AltPython3Parser.RULE_dictorsetmaker);
        var _la;
        try {
            var _alt = void 0;
            this.state = 1050;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 151, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1017;
                        this.test();
                        this.state = 1018;
                        this.match(AltPython3Parser.COLON);
                        this.state = 1019;
                        this.test();
                        this.state = 1034;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case AltPython3Parser.FOR:
                                {
                                    this.state = 1020;
                                    this.comp_for();
                                }
                                break;
                            case AltPython3Parser.COMMA:
                            case AltPython3Parser.CLOSE_BRACE:
                                {
                                    this.state = 1028;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1021;
                                                    this.match(AltPython3Parser.COMMA);
                                                    this.state = 1022;
                                                    this.test();
                                                    this.state = 1023;
                                                    this.match(AltPython3Parser.COLON);
                                                    this.state = 1024;
                                                    this.test();
                                                }
                                            }
                                        }
                                        this.state = 1030;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
                                    }
                                    this.state = 1032;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === AltPython3Parser.COMMA) {
                                        {
                                            this.state = 1031;
                                            this.match(AltPython3Parser.COMMA);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1036;
                        this.test();
                        this.state = 1048;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case AltPython3Parser.FOR:
                                {
                                    this.state = 1037;
                                    this.comp_for();
                                }
                                break;
                            case AltPython3Parser.COMMA:
                            case AltPython3Parser.CLOSE_BRACE:
                                {
                                    this.state = 1042;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1038;
                                                    this.match(AltPython3Parser.COMMA);
                                                    this.state = 1039;
                                                    this.test();
                                                }
                                            }
                                        }
                                        this.state = 1044;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
                                    }
                                    this.state = 1046;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === AltPython3Parser.COMMA) {
                                        {
                                            this.state = 1045;
                                            this.match(AltPython3Parser.COMMA);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
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
    AltPython3Parser.prototype.classdef = function () {
        var _localctx = new ClassdefContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, AltPython3Parser.RULE_classdef);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1052;
                this.match(AltPython3Parser.CLASS);
                this.state = 1053;
                this.match(AltPython3Parser.NAME);
                this.state = 1059;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AltPython3Parser.OPEN_PAREN) {
                    {
                        this.state = 1054;
                        this.match(AltPython3Parser.OPEN_PAREN);
                        this.state = 1056;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (AltPython3Parser.LAMBDA - 21)) | (1 << (AltPython3Parser.NOT - 21)) | (1 << (AltPython3Parser.NONE - 21)) | (1 << (AltPython3Parser.TRUE - 21)) | (1 << (AltPython3Parser.FALSE - 21)) | (1 << (AltPython3Parser.NAME - 21)) | (1 << (AltPython3Parser.STRING_LITERAL - 21)) | (1 << (AltPython3Parser.BYTES_LITERAL - 21)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 21)) | (1 << (AltPython3Parser.OCT_INTEGER - 21)) | (1 << (AltPython3Parser.HEX_INTEGER - 21)) | (1 << (AltPython3Parser.BIN_INTEGER - 21)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 21)) | (1 << (AltPython3Parser.IMAG_NUMBER - 21)) | (1 << (AltPython3Parser.ELLIPSIS - 21)) | (1 << (AltPython3Parser.STAR - 21)) | (1 << (AltPython3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (AltPython3Parser.POWER - 53)) | (1 << (AltPython3Parser.OPEN_BRACK - 53)) | (1 << (AltPython3Parser.ADD - 53)) | (1 << (AltPython3Parser.MINUS - 53)) | (1 << (AltPython3Parser.NOT_OP - 53)) | (1 << (AltPython3Parser.OPEN_BRACE - 53)))) !== 0)) {
                            {
                                this.state = 1055;
                                this.arglist();
                            }
                        }
                        this.state = 1058;
                        this.match(AltPython3Parser.CLOSE_PAREN);
                    }
                }
                this.state = 1061;
                this.match(AltPython3Parser.COLON);
                this.state = 1062;
                this.suite();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    AltPython3Parser.prototype.arglist = function () {
        var _localctx = new ArglistContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, AltPython3Parser.RULE_arglist);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1069;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1064;
                                this.argument();
                                this.state = 1065;
                                this.match(AltPython3Parser.COMMA);
                            }
                        }
                    }
                    this.state = 1071;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
                }
                this.state = 1092;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 158, this._ctx)) {
                    case 1:
                        {
                            this.state = 1072;
                            this.argument();
                            this.state = 1074;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === AltPython3Parser.COMMA) {
                                {
                                    this.state = 1073;
                                    this.match(AltPython3Parser.COMMA);
                                }
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 1076;
                            this.match(AltPython3Parser.STAR);
                            this.state = 1077;
                            this.test();
                            this.state = 1082;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1078;
                                            this.match(AltPython3Parser.COMMA);
                                            this.state = 1079;
                                            this.argument();
                                        }
                                    }
                                }
                                this.state = 1084;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
                            }
                            this.state = 1088;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === AltPython3Parser.COMMA) {
                                {
                                    this.state = 1085;
                                    this.match(AltPython3Parser.COMMA);
                                    this.state = 1086;
                                    this.match(AltPython3Parser.POWER);
                                    this.state = 1087;
                                    this.test();
                                }
                            }
                        }
                        break;
                    case 3:
                        {
                            this.state = 1090;
                            this.match(AltPython3Parser.POWER);
                            this.state = 1091;
                            this.test();
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
    AltPython3Parser.prototype.argument = function () {
        var _localctx = new ArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, AltPython3Parser.RULE_argument);
        var _la;
        try {
            this.state = 1102;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 160, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1094;
                        this.test();
                        this.state = 1096;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AltPython3Parser.FOR) {
                            {
                                this.state = 1095;
                                this.comp_for();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1098;
                        this.test();
                        this.state = 1099;
                        this.match(AltPython3Parser.ASSIGN);
                        this.state = 1100;
                        this.test();
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
    AltPython3Parser.prototype.comp_iter = function () {
        var _localctx = new Comp_iterContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, AltPython3Parser.RULE_comp_iter);
        try {
            this.state = 1106;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AltPython3Parser.FOR:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1104;
                        this.comp_for();
                    }
                    break;
                case AltPython3Parser.IF:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1105;
                        this.comp_if();
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
    AltPython3Parser.prototype.comp_for = function () {
        var _localctx = new Comp_forContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, AltPython3Parser.RULE_comp_for);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1108;
                this.match(AltPython3Parser.FOR);
                this.state = 1109;
                this.exprlist();
                this.state = 1110;
                this.match(AltPython3Parser.IN);
                this.state = 1111;
                this.or_test();
                this.state = 1113;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AltPython3Parser.IF || _la === AltPython3Parser.FOR) {
                    {
                        this.state = 1112;
                        this.comp_iter();
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
    AltPython3Parser.prototype.comp_if = function () {
        var _localctx = new Comp_ifContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, AltPython3Parser.RULE_comp_if);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1115;
                this.match(AltPython3Parser.IF);
                this.state = 1116;
                this.test_nocond();
                this.state = 1118;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AltPython3Parser.IF || _la === AltPython3Parser.FOR) {
                    {
                        this.state = 1117;
                        this.comp_iter();
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
    AltPython3Parser.prototype.yield_expr = function () {
        var _localctx = new Yield_exprContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, AltPython3Parser.RULE_yield_expr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1120;
                this.match(AltPython3Parser.YIELD);
                this.state = 1122;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & ((1 << (AltPython3Parser.FROM - 5)) | (1 << (AltPython3Parser.LAMBDA - 5)) | (1 << (AltPython3Parser.NOT - 5)) | (1 << (AltPython3Parser.NONE - 5)) | (1 << (AltPython3Parser.TRUE - 5)) | (1 << (AltPython3Parser.FALSE - 5)) | (1 << (AltPython3Parser.NAME - 5)))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (AltPython3Parser.STRING_LITERAL - 37)) | (1 << (AltPython3Parser.BYTES_LITERAL - 37)) | (1 << (AltPython3Parser.DECIMAL_INTEGER - 37)) | (1 << (AltPython3Parser.OCT_INTEGER - 37)) | (1 << (AltPython3Parser.HEX_INTEGER - 37)) | (1 << (AltPython3Parser.BIN_INTEGER - 37)) | (1 << (AltPython3Parser.FLOAT_NUMBER - 37)) | (1 << (AltPython3Parser.IMAG_NUMBER - 37)) | (1 << (AltPython3Parser.ELLIPSIS - 37)) | (1 << (AltPython3Parser.STAR - 37)) | (1 << (AltPython3Parser.OPEN_PAREN - 37)) | (1 << (AltPython3Parser.OPEN_BRACK - 37)) | (1 << (AltPython3Parser.ADD - 37)) | (1 << (AltPython3Parser.MINUS - 37)) | (1 << (AltPython3Parser.NOT_OP - 37)) | (1 << (AltPython3Parser.OPEN_BRACE - 37)))) !== 0)) {
                    {
                        this.state = 1121;
                        this.yield_arg();
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
    AltPython3Parser.prototype.yield_arg = function () {
        var _localctx = new Yield_argContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, AltPython3Parser.RULE_yield_arg);
        try {
            this.state = 1127;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AltPython3Parser.FROM:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1124;
                        this.match(AltPython3Parser.FROM);
                        this.state = 1125;
                        this.test();
                    }
                    break;
                case AltPython3Parser.LAMBDA:
                case AltPython3Parser.NOT:
                case AltPython3Parser.NONE:
                case AltPython3Parser.TRUE:
                case AltPython3Parser.FALSE:
                case AltPython3Parser.NAME:
                case AltPython3Parser.STRING_LITERAL:
                case AltPython3Parser.BYTES_LITERAL:
                case AltPython3Parser.DECIMAL_INTEGER:
                case AltPython3Parser.OCT_INTEGER:
                case AltPython3Parser.HEX_INTEGER:
                case AltPython3Parser.BIN_INTEGER:
                case AltPython3Parser.FLOAT_NUMBER:
                case AltPython3Parser.IMAG_NUMBER:
                case AltPython3Parser.ELLIPSIS:
                case AltPython3Parser.STAR:
                case AltPython3Parser.OPEN_PAREN:
                case AltPython3Parser.OPEN_BRACK:
                case AltPython3Parser.ADD:
                case AltPython3Parser.MINUS:
                case AltPython3Parser.NOT_OP:
                case AltPython3Parser.OPEN_BRACE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1126;
                        this.testlist();
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
    AltPython3Parser.prototype.str = function () {
        var _localctx = new StrContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, AltPython3Parser.RULE_str);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1129;
                _la = this._input.LA(1);
                if (!(_la === AltPython3Parser.STRING_LITERAL || _la === AltPython3Parser.BYTES_LITERAL)) {
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
    AltPython3Parser.prototype.number = function () {
        var _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, AltPython3Parser.RULE_number);
        try {
            this.state = 1134;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AltPython3Parser.DECIMAL_INTEGER:
                case AltPython3Parser.OCT_INTEGER:
                case AltPython3Parser.HEX_INTEGER:
                case AltPython3Parser.BIN_INTEGER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1131;
                        this.integer();
                    }
                    break;
                case AltPython3Parser.FLOAT_NUMBER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1132;
                        this.match(AltPython3Parser.FLOAT_NUMBER);
                    }
                    break;
                case AltPython3Parser.IMAG_NUMBER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1133;
                        this.match(AltPython3Parser.IMAG_NUMBER);
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
    AltPython3Parser.prototype.integer = function () {
        var _localctx = new IntegerContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, AltPython3Parser.RULE_integer);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1136;
                _la = this._input.LA(1);
                if (!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (AltPython3Parser.DECIMAL_INTEGER - 39)) | (1 << (AltPython3Parser.OCT_INTEGER - 39)) | (1 << (AltPython3Parser.HEX_INTEGER - 39)) | (1 << (AltPython3Parser.BIN_INTEGER - 39)))) !== 0))) {
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
    Object.defineProperty(AltPython3Parser, "_ATN", {
        get: function () {
            if (!AltPython3Parser.__ATN) {
                AltPython3Parser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(AltPython3Parser._serializedATN));
            }
            return AltPython3Parser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    AltPython3Parser.PRINT = 1;
    AltPython3Parser.DEF = 2;
    AltPython3Parser.RETURN = 3;
    AltPython3Parser.RAISE = 4;
    AltPython3Parser.FROM = 5;
    AltPython3Parser.IMPORT = 6;
    AltPython3Parser.AS = 7;
    AltPython3Parser.GLOBAL = 8;
    AltPython3Parser.NONLOCAL = 9;
    AltPython3Parser.ASSERT = 10;
    AltPython3Parser.IF = 11;
    AltPython3Parser.ELIF = 12;
    AltPython3Parser.ELSE = 13;
    AltPython3Parser.WHILE = 14;
    AltPython3Parser.FOR = 15;
    AltPython3Parser.IN = 16;
    AltPython3Parser.TRY = 17;
    AltPython3Parser.FINALLY = 18;
    AltPython3Parser.WITH = 19;
    AltPython3Parser.EXCEPT = 20;
    AltPython3Parser.LAMBDA = 21;
    AltPython3Parser.OR = 22;
    AltPython3Parser.AND = 23;
    AltPython3Parser.NOT = 24;
    AltPython3Parser.IS = 25;
    AltPython3Parser.NONE = 26;
    AltPython3Parser.TRUE = 27;
    AltPython3Parser.FALSE = 28;
    AltPython3Parser.CLASS = 29;
    AltPython3Parser.YIELD = 30;
    AltPython3Parser.DEL = 31;
    AltPython3Parser.PASS = 32;
    AltPython3Parser.CONTINUE = 33;
    AltPython3Parser.BREAK = 34;
    AltPython3Parser.NEWLINE = 35;
    AltPython3Parser.NAME = 36;
    AltPython3Parser.STRING_LITERAL = 37;
    AltPython3Parser.BYTES_LITERAL = 38;
    AltPython3Parser.DECIMAL_INTEGER = 39;
    AltPython3Parser.OCT_INTEGER = 40;
    AltPython3Parser.HEX_INTEGER = 41;
    AltPython3Parser.BIN_INTEGER = 42;
    AltPython3Parser.FLOAT_NUMBER = 43;
    AltPython3Parser.IMAG_NUMBER = 44;
    AltPython3Parser.DOT = 45;
    AltPython3Parser.ELLIPSIS = 46;
    AltPython3Parser.STAR = 47;
    AltPython3Parser.OPEN_PAREN = 48;
    AltPython3Parser.CLOSE_PAREN = 49;
    AltPython3Parser.COMMA = 50;
    AltPython3Parser.COLON = 51;
    AltPython3Parser.SEMI_COLON = 52;
    AltPython3Parser.POWER = 53;
    AltPython3Parser.ASSIGN = 54;
    AltPython3Parser.OPEN_BRACK = 55;
    AltPython3Parser.CLOSE_BRACK = 56;
    AltPython3Parser.OR_OP = 57;
    AltPython3Parser.XOR = 58;
    AltPython3Parser.AND_OP = 59;
    AltPython3Parser.LEFT_SHIFT = 60;
    AltPython3Parser.RIGHT_SHIFT = 61;
    AltPython3Parser.ADD = 62;
    AltPython3Parser.MINUS = 63;
    AltPython3Parser.DIV = 64;
    AltPython3Parser.MOD = 65;
    AltPython3Parser.IDIV = 66;
    AltPython3Parser.NOT_OP = 67;
    AltPython3Parser.OPEN_BRACE = 68;
    AltPython3Parser.CLOSE_BRACE = 69;
    AltPython3Parser.LESS_THAN = 70;
    AltPython3Parser.GREATER_THAN = 71;
    AltPython3Parser.EQUALS = 72;
    AltPython3Parser.GT_EQ = 73;
    AltPython3Parser.LT_EQ = 74;
    AltPython3Parser.NOT_EQ_1 = 75;
    AltPython3Parser.NOT_EQ_2 = 76;
    AltPython3Parser.AT = 77;
    AltPython3Parser.ARROW = 78;
    AltPython3Parser.ADD_ASSIGN = 79;
    AltPython3Parser.SUB_ASSIGN = 80;
    AltPython3Parser.MULT_ASSIGN = 81;
    AltPython3Parser.AT_ASSIGN = 82;
    AltPython3Parser.DIV_ASSIGN = 83;
    AltPython3Parser.MOD_ASSIGN = 84;
    AltPython3Parser.AND_ASSIGN = 85;
    AltPython3Parser.OR_ASSIGN = 86;
    AltPython3Parser.XOR_ASSIGN = 87;
    AltPython3Parser.LEFT_SHIFT_ASSIGN = 88;
    AltPython3Parser.RIGHT_SHIFT_ASSIGN = 89;
    AltPython3Parser.POWER_ASSIGN = 90;
    AltPython3Parser.IDIV_ASSIGN = 91;
    AltPython3Parser.SKIP_ = 92;
    AltPython3Parser.UNKNOWN_CHAR = 93;
    AltPython3Parser.INDENT = 94;
    AltPython3Parser.DEDENT = 95;
    AltPython3Parser.RULE_single_input = 0;
    AltPython3Parser.RULE_file_input = 1;
    AltPython3Parser.RULE_eval_input = 2;
    AltPython3Parser.RULE_decorator = 3;
    AltPython3Parser.RULE_decorators = 4;
    AltPython3Parser.RULE_decorated = 5;
    AltPython3Parser.RULE_funcdef = 6;
    AltPython3Parser.RULE_parameters = 7;
    AltPython3Parser.RULE_typedargslist = 8;
    AltPython3Parser.RULE_tfpdef = 9;
    AltPython3Parser.RULE_varargslist = 10;
    AltPython3Parser.RULE_vfpdef = 11;
    AltPython3Parser.RULE_stmt = 12;
    AltPython3Parser.RULE_simple_stmt = 13;
    AltPython3Parser.RULE_small_stmt = 14;
    AltPython3Parser.RULE_print_stmt = 15;
    AltPython3Parser.RULE_expr_stmt = 16;
    AltPython3Parser.RULE_testlist_star_expr = 17;
    AltPython3Parser.RULE_augassign = 18;
    AltPython3Parser.RULE_del_stmt = 19;
    AltPython3Parser.RULE_pass_stmt = 20;
    AltPython3Parser.RULE_flow_stmt = 21;
    AltPython3Parser.RULE_break_stmt = 22;
    AltPython3Parser.RULE_continue_stmt = 23;
    AltPython3Parser.RULE_return_stmt = 24;
    AltPython3Parser.RULE_yield_stmt = 25;
    AltPython3Parser.RULE_raise_stmt = 26;
    AltPython3Parser.RULE_import_stmt = 27;
    AltPython3Parser.RULE_import_name = 28;
    AltPython3Parser.RULE_import_from = 29;
    AltPython3Parser.RULE_import_as_name = 30;
    AltPython3Parser.RULE_dotted_as_name = 31;
    AltPython3Parser.RULE_import_as_names = 32;
    AltPython3Parser.RULE_dotted_as_names = 33;
    AltPython3Parser.RULE_dotted_name = 34;
    AltPython3Parser.RULE_global_stmt = 35;
    AltPython3Parser.RULE_nonlocal_stmt = 36;
    AltPython3Parser.RULE_assert_stmt = 37;
    AltPython3Parser.RULE_compound_stmt = 38;
    AltPython3Parser.RULE_if_stmt = 39;
    AltPython3Parser.RULE_while_stmt = 40;
    AltPython3Parser.RULE_for_stmt = 41;
    AltPython3Parser.RULE_try_stmt = 42;
    AltPython3Parser.RULE_with_stmt = 43;
    AltPython3Parser.RULE_with_item = 44;
    AltPython3Parser.RULE_except_clause = 45;
    AltPython3Parser.RULE_suite = 46;
    AltPython3Parser.RULE_test = 47;
    AltPython3Parser.RULE_test_nocond = 48;
    AltPython3Parser.RULE_lambdef = 49;
    AltPython3Parser.RULE_lambdef_nocond = 50;
    AltPython3Parser.RULE_or_test = 51;
    AltPython3Parser.RULE_and_test = 52;
    AltPython3Parser.RULE_not_test = 53;
    AltPython3Parser.RULE_comparison = 54;
    AltPython3Parser.RULE_comp_op = 55;
    AltPython3Parser.RULE_star_expr = 56;
    AltPython3Parser.RULE_expr = 57;
    AltPython3Parser.RULE_xor_expr = 58;
    AltPython3Parser.RULE_and_expr = 59;
    AltPython3Parser.RULE_shift_expr = 60;
    AltPython3Parser.RULE_arith_expr = 61;
    AltPython3Parser.RULE_term = 62;
    AltPython3Parser.RULE_factor = 63;
    AltPython3Parser.RULE_power = 64;
    AltPython3Parser.RULE_atom = 65;
    AltPython3Parser.RULE_testlist_comp = 66;
    AltPython3Parser.RULE_trailer = 67;
    AltPython3Parser.RULE_subscriptlist = 68;
    AltPython3Parser.RULE_subscript = 69;
    AltPython3Parser.RULE_sliceop = 70;
    AltPython3Parser.RULE_exprlist = 71;
    AltPython3Parser.RULE_testlist = 72;
    AltPython3Parser.RULE_dictorsetmaker = 73;
    AltPython3Parser.RULE_classdef = 74;
    AltPython3Parser.RULE_arglist = 75;
    AltPython3Parser.RULE_argument = 76;
    AltPython3Parser.RULE_comp_iter = 77;
    AltPython3Parser.RULE_comp_for = 78;
    AltPython3Parser.RULE_comp_if = 79;
    AltPython3Parser.RULE_yield_expr = 80;
    AltPython3Parser.RULE_yield_arg = 81;
    AltPython3Parser.RULE_str = 82;
    AltPython3Parser.RULE_number = 83;
    AltPython3Parser.RULE_integer = 84;
    // tslint:disable:no-trailing-whitespace
    AltPython3Parser.ruleNames = [
        "single_input", "file_input", "eval_input", "decorator", "decorators",
        "decorated", "funcdef", "parameters", "typedargslist", "tfpdef", "varargslist",
        "vfpdef", "stmt", "simple_stmt", "small_stmt", "print_stmt", "expr_stmt",
        "testlist_star_expr", "augassign", "del_stmt", "pass_stmt", "flow_stmt",
        "break_stmt", "continue_stmt", "return_stmt", "yield_stmt", "raise_stmt",
        "import_stmt", "import_name", "import_from", "import_as_name", "dotted_as_name",
        "import_as_names", "dotted_as_names", "dotted_name", "global_stmt", "nonlocal_stmt",
        "assert_stmt", "compound_stmt", "if_stmt", "while_stmt", "for_stmt", "try_stmt",
        "with_stmt", "with_item", "except_clause", "suite", "test", "test_nocond",
        "lambdef", "lambdef_nocond", "or_test", "and_test", "not_test", "comparison",
        "comp_op", "star_expr", "expr", "xor_expr", "and_expr", "shift_expr",
        "arith_expr", "term", "factor", "power", "atom", "testlist_comp", "trailer",
        "subscriptlist", "subscript", "sliceop", "exprlist", "testlist", "dictorsetmaker",
        "classdef", "arglist", "argument", "comp_iter", "comp_for", "comp_if",
        "yield_expr", "yield_arg", "str", "number", "integer",
    ];
    AltPython3Parser._LITERAL_NAMES = [
        undefined, "'print'", "'def'", "'return'", "'raise'", "'from'", "'import'",
        "'as'", "'global'", "'nonlocal'", "'assert'", "'if'", "'elif'", "'else'",
        "'while'", "'for'", "'in'", "'try'", "'finally'", "'with'", "'except'",
        "'lambda'", "'or'", "'and'", "'not'", "'is'", "'None'", "'True'", "'False'",
        "'class'", "'yield'", "'del'", "'pass'", "'continue'", "'break'", undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "'.'", "'...'", "'*'", "'('", "')'", "','", "':'",
        "';'", "'**'", "'='", "'['", "']'", "'|'", "'^'", "'&'", "'<<'", "'>>'",
        "'+'", "'-'", "'/'", "'%'", "'//'", "'~'", "'{'", "'}'", "'<'", "'>'",
        "'=='", "'>='", "'<='", "'<>'", "'!='", "'@'", "'->'", "'+='", "'-='",
        "'*='", "'@='", "'/='", "'%='", "'&='", "'|='", "'^='", "'<<='", "'>>='",
        "'**='", "'//='",
    ];
    AltPython3Parser._SYMBOLIC_NAMES = [
        undefined, "PRINT", "DEF", "RETURN", "RAISE", "FROM", "IMPORT", "AS",
        "GLOBAL", "NONLOCAL", "ASSERT", "IF", "ELIF", "ELSE", "WHILE", "FOR",
        "IN", "TRY", "FINALLY", "WITH", "EXCEPT", "LAMBDA", "OR", "AND", "NOT",
        "IS", "NONE", "TRUE", "FALSE", "CLASS", "YIELD", "DEL", "PASS", "CONTINUE",
        "BREAK", "NEWLINE", "NAME", "STRING_LITERAL", "BYTES_LITERAL", "DECIMAL_INTEGER",
        "OCT_INTEGER", "HEX_INTEGER", "BIN_INTEGER", "FLOAT_NUMBER", "IMAG_NUMBER",
        "DOT", "ELLIPSIS", "STAR", "OPEN_PAREN", "CLOSE_PAREN", "COMMA", "COLON",
        "SEMI_COLON", "POWER", "ASSIGN", "OPEN_BRACK", "CLOSE_BRACK", "OR_OP",
        "XOR", "AND_OP", "LEFT_SHIFT", "RIGHT_SHIFT", "ADD", "MINUS", "DIV", "MOD",
        "IDIV", "NOT_OP", "OPEN_BRACE", "CLOSE_BRACE", "LESS_THAN", "GREATER_THAN",
        "EQUALS", "GT_EQ", "LT_EQ", "NOT_EQ_1", "NOT_EQ_2", "AT", "ARROW", "ADD_ASSIGN",
        "SUB_ASSIGN", "MULT_ASSIGN", "AT_ASSIGN", "DIV_ASSIGN", "MOD_ASSIGN",
        "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "LEFT_SHIFT_ASSIGN", "RIGHT_SHIFT_ASSIGN",
        "POWER_ASSIGN", "IDIV_ASSIGN", "SKIP_", "UNKNOWN_CHAR", "INDENT", "DEDENT",
    ];
    AltPython3Parser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(AltPython3Parser._LITERAL_NAMES, AltPython3Parser._SYMBOLIC_NAMES, []);
    AltPython3Parser._serializedATNSegments = 3;
    AltPython3Parser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03a\u0475\x04\x02" +
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
        "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x03\x02\x05\x02\xB2\n\x02\x03\x03\x03\x03\x07\x03" +
        "\xB6\n\x03\f\x03\x0E\x03\xB9\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x07" +
        "\x04\xBF\n\x04\f\x04\x0E\x04\xC2\v\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x05\x05\xCA\n\x05\x03\x05\x05\x05\xCD\n\x05\x03\x05\x03" +
        "\x05\x03\x06\x06\x06\xD2\n\x06\r\x06\x0E\x06\xD3\x03\x07\x03\x07\x03\x07" +
        "\x05\x07\xD9\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\xE0\n\b\x03\b\x03" +
        "\b\x03\b\x03\t\x03\t\x05\t\xE7\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x05\n" +
        "\xEE\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\xF4\n\n\x07\n\xF6\n\n\f\n\x0E\n" +
        "\xF9\v\n\x03\n\x03\n\x03\n\x05\n\xFE\n\n\x03\n\x03\n\x03\n\x03\n\x05\n" +
        "\u0104\n\n\x07\n\u0106\n\n\f\n\x0E\n\u0109\v\n\x03\n\x03\n\x03\n\x05\n" +
        "\u010E\n\n\x03\n\x03\n\x05\n\u0112\n\n\x05\n\u0114\n\n\x03\n\x03\n\x05" +
        "\n\u0118\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u011E\n\n\x07\n\u0120\n\n\f" +
        "\n\x0E\n\u0123\v\n\x03\n\x03\n\x03\n\x05\n\u0128\n\n\x03\n\x03\n\x05\n" +
        "\u012C\n\n\x03\v\x03\v\x03\v\x05\v\u0131\n\v\x03\f\x03\f\x03\f\x05\f\u0136" +
        "\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u013C\n\f\x07\f\u013E\n\f\f\f\x0E\f" +
        "\u0141\v\f\x03\f\x03\f\x03\f\x05\f\u0146\n\f\x03\f\x03\f\x03\f\x03\f\x05" +
        "\f\u014C\n\f\x07\f\u014E\n\f\f\f\x0E\f\u0151\v\f\x03\f\x03\f\x03\f\x05" +
        "\f\u0156\n\f\x03\f\x03\f\x05\f\u015A\n\f\x05\f\u015C\n\f\x03\f\x03\f\x05" +
        "\f\u0160\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0166\n\f\x07\f\u0168\n\f\f" +
        "\f\x0E\f\u016B\v\f\x03\f\x03\f\x03\f\x05\f\u0170\n\f\x03\f\x03\f\x05\f" +
        "\u0174\n\f\x03\r\x03\r\x03\x0E\x03\x0E\x05\x0E\u017A\n\x0E\x03\x0F\x03" +
        "\x0F\x03\x0F\x07\x0F\u017F\n\x0F\f\x0F\x0E\x0F\u0182\v\x0F\x03\x0F\x05" +
        "\x0F\u0185\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
        "\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0192\n\x10\x03\x11\x03\x11\x03" +
        "\x11\x03\x11\x03\x11\x07\x11\u0199\n\x11\f\x11\x0E\x11\u019C\v\x11\x03" +
        "\x11\x05\x11\u019F\n\x11\x05\x11\u01A1\n\x11\x03\x11\x03\x11\x03\x11\x03" +
        "\x11\x06\x11\u01A7\n\x11\r\x11\x0E\x11\u01A8\x03\x11\x05\x11\u01AC\n\x11" +
        "\x05\x11\u01AE\n\x11\x05\x11\u01B0\n\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
        "\x03\x11\x07\x11\u01B7\n\x11\f\x11\x0E\x11\u01BA\v\x11\x03\x11\x05\x11" +
        "\u01BD\n\x11\x05\x11\u01BF\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x06\x11" +
        "\u01C5\n\x11\r\x11\x0E\x11\u01C6\x03\x11\x05\x11\u01CA\n\x11\x05\x11\u01CC" +
        "\n\x11\x05\x11\u01CE\n\x11\x03\x11\x05\x11\u01D1\n\x11\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x05\x12\u01D7\n\x12\x03\x12\x03\x12\x03\x12\x05\x12\u01DC" +
        "\n\x12\x07\x12\u01DE\n\x12\f\x12\x0E\x12\u01E1\v\x12\x05\x12\u01E3\n\x12" +
        "\x03\x13\x03\x13\x05\x13\u01E7\n\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01EC" +
        "\n\x13\x07\x13\u01EE\n\x13\f\x13\x0E\x13\u01F1\v\x13\x03\x13\x05\x13\u01F4" +
        "\n\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17" +
        "\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0202\n\x17\x03\x18\x03\x18\x03" +
        "\x19\x03\x19\x03\x1A\x03\x1A\x05\x1A\u020A\n\x1A\x03\x1B\x03\x1B\x03\x1C" +
        "\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0212\n\x1C\x05\x1C\u0214\n\x1C\x03\x1C" +
        "\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u021C\n\x1C\x03\x1D\x03" +
        "\x1D\x05\x1D\u0220\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x07\x1F" +
        "\u0227\n\x1F\f\x1F\x0E\x1F\u022A\v\x1F\x03\x1F\x03\x1F\x06\x1F\u022E\n" +
        "\x1F\r\x1F\x0E\x1F\u022F\x05\x1F\u0232\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
        "\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u023B\n\x1F\x03 \x03 \x03 \x05 \u0240" +
        "\n \x03!\x03!\x03!\x05!\u0245\n!\x03\"\x03\"\x03\"\x07\"\u024A\n\"\f\"" +
        "\x0E\"\u024D\v\"\x03\"\x05\"\u0250\n\"\x03#\x03#\x03#\x07#\u0255\n#\f" +
        "#\x0E#\u0258\v#\x03$\x03$\x03$\x07$\u025D\n$\f$\x0E$\u0260\v$\x03%\x03" +
        "%\x03%\x03%\x07%\u0266\n%\f%\x0E%\u0269\v%\x03&\x03&\x03&\x03&\x07&\u026F" +
        "\n&\f&\x0E&\u0272\v&\x03\'\x03\'\x03\'\x03\'\x05\'\u0278\n\'\x03(\x03" +
        "(\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u0282\n(\x03)\x03)\x03)\x03)\x03" +
        ")\x03)\x03)\x03)\x03)\x07)\u028D\n)\f)\x0E)\u0290\v)\x03)\x03)\x03)\x05" +
        ")\u0295\n)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u029E\n*\x03+\x03+" +
        "\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u02A9\n+\x03,\x03,\x03,\x03," +
        "\x03,\x03,\x03,\x06,\u02B2\n,\r,\x0E,\u02B3\x03,\x03,\x03,\x05,\u02B9" +
        "\n,\x03,\x03,\x03,\x05,\u02BE\n,\x03,\x03,\x03,\x05,\u02C3\n,\x03-\x03" +
        "-\x03-\x03-\x07-\u02C9\n-\f-\x0E-\u02CC\v-\x03-\x03-\x03-\x03.\x03.\x03" +
        ".\x05.\u02D4\n.\x03/\x03/\x03/\x03/\x05/\u02DA\n/\x05/\u02DC\n/\x03/\x03" +
        "/\x03/\x03/\x03/\x05/\u02E3\n/\x030\x030\x030\x030\x060\u02E9\n0\r0\x0E" +
        "0\u02EA\x030\x030\x050\u02EF\n0\x031\x031\x031\x031\x031\x031\x051\u02F7" +
        "\n1\x031\x051\u02FA\n1\x032\x032\x052\u02FE\n2\x033\x033\x053\u0302\n" +
        "3\x033\x033\x033\x034\x034\x054\u0309\n4\x034\x034\x034\x035\x035\x03" +
        "5\x075\u0311\n5\f5\x0E5\u0314\v5\x036\x036\x036\x076\u0319\n6\f6\x0E6" +
        "\u031C\v6\x037\x037\x037\x057\u0321\n7\x038\x038\x038\x038\x078\u0327" +
        "\n8\f8\x0E8\u032A\v8\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03" +
        "9\x039\x039\x039\x059\u0339\n9\x03:\x05:\u033C\n:\x03:\x03:\x03;\x03;" +
        "\x03;\x07;\u0343\n;\f;\x0E;\u0346\v;\x03<\x03<\x03<\x07<\u034B\n<\f<\x0E" +
        "<\u034E\v<\x03=\x03=\x03=\x07=\u0353\n=\f=\x0E=\u0356\v=\x03>\x03>\x03" +
        ">\x03>\x03>\x07>\u035D\n>\f>\x0E>\u0360\v>\x03?\x03?\x03?\x03?\x03?\x07" +
        "?\u0367\n?\f?\x0E?\u036A\v?\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
        "@\x03@\x03@\x07@\u0377\n@\f@\x0E@\u037A\v@\x03A\x03A\x03A\x03A\x03A\x03" +
        "A\x03A\x05A\u0383\nA\x03B\x03B\x07B\u0387\nB\fB\x0EB\u038A\vB\x03B\x03" +
        "B\x05B\u038E\nB\x03C\x03C\x03C\x05C\u0393\nC\x03C\x03C\x03C\x05C\u0398" +
        "\nC\x03C\x03C\x03C\x05C\u039D\nC\x03C\x03C\x03C\x03C\x03C\x06C\u03A4\n" +
        "C\rC\x0EC\u03A5\x03C\x03C\x03C\x03C\x05C\u03AC\nC\x03D\x03D\x03D\x03D" +
        "\x07D\u03B2\nD\fD\x0ED\u03B5\vD\x03D\x05D\u03B8\nD\x05D\u03BA\nD\x03E" +
        "\x03E\x05E\u03BE\nE\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u03C8" +
        "\nE\x03F\x03F\x03F\x07F\u03CD\nF\fF\x0EF\u03D0\vF\x03F\x05F\u03D3\nF\x03" +
        "G\x03G\x05G\u03D7\nG\x03G\x03G\x05G\u03DB\nG\x03G\x05G\u03DE\nG\x05G\u03E0" +
        "\nG\x03H\x03H\x05H\u03E4\nH\x03I\x03I\x03I\x07I\u03E9\nI\fI\x0EI\u03EC" +
        "\vI\x03I\x05I\u03EF\nI\x03J\x03J\x03J\x07J\u03F4\nJ\fJ\x0EJ\u03F7\vJ\x03" +
        "J\x05J\u03FA\nJ\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x07K\u0405" +
        "\nK\fK\x0EK\u0408\vK\x03K\x05K\u040B\nK\x05K\u040D\nK\x03K\x03K\x03K\x03" +
        "K\x07K\u0413\nK\fK\x0EK\u0416\vK\x03K\x05K\u0419\nK\x05K\u041B\nK\x05" +
        "K\u041D\nK\x03L\x03L\x03L\x03L\x05L\u0423\nL\x03L\x05L\u0426\nL\x03L\x03" +
        "L\x03L\x03M\x03M\x03M\x07M\u042E\nM\fM\x0EM\u0431\vM\x03M\x03M\x05M\u0435" +
        "\nM\x03M\x03M\x03M\x03M\x07M\u043B\nM\fM\x0EM\u043E\vM\x03M\x03M\x03M" +
        "\x05M\u0443\nM\x03M\x03M\x05M\u0447\nM\x03N\x03N\x05N\u044B\nN\x03N\x03" +
        "N\x03N\x03N\x05N\u0451\nN\x03O\x03O\x05O\u0455\nO\x03P\x03P\x03P\x03P" +
        "\x03P\x05P\u045C\nP\x03Q\x03Q\x03Q\x05Q\u0461\nQ\x03R\x03R\x05R\u0465" +
        "\nR\x03S\x03S\x03S\x05S\u046A\nS\x03T\x03T\x03U\x03U\x03U\x05U\u0471\n" +
        "U\x03V\x03V\x03V\x02\x02\x02W\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
        "\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
        " \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
        "<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
        "X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
        "t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
        "\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
        "\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\x02\x06" +
        "\x03\x02Q]\x03\x02/0\x03\x02\'(\x03\x02),\x02\u04F6\x02\xB1\x03\x02\x02" +
        "\x02\x04\xB7\x03\x02\x02\x02\x06\xBC\x03\x02\x02\x02\b\xC5\x03\x02\x02" +
        "\x02\n\xD1\x03\x02\x02\x02\f\xD5\x03\x02\x02\x02\x0E\xDA\x03\x02\x02\x02" +
        "\x10\xE4\x03\x02\x02\x02\x12\u012B\x03\x02\x02\x02\x14\u012D\x03\x02\x02" +
        "\x02\x16\u0173\x03\x02\x02\x02\x18\u0175\x03\x02\x02\x02\x1A\u0179\x03" +
        "\x02\x02\x02\x1C\u017B\x03\x02\x02\x02\x1E\u0191\x03\x02\x02\x02 \u01D0" +
        "\x03\x02\x02\x02\"\u01D2\x03\x02\x02\x02$\u01E6\x03\x02\x02\x02&\u01F5" +
        "\x03\x02\x02\x02(\u01F7\x03\x02\x02\x02*\u01FA\x03\x02\x02\x02,\u0201" +
        "\x03\x02\x02\x02.\u0203\x03\x02\x02\x020\u0205\x03\x02\x02\x022\u0207" +
        "\x03\x02\x02\x024\u020B\x03\x02\x02\x026\u021B\x03\x02\x02\x028\u021F" +
        "\x03\x02\x02\x02:\u0221\x03\x02\x02\x02<\u0224\x03\x02\x02\x02>\u023C" +
        "\x03\x02\x02\x02@\u0241\x03\x02\x02\x02B\u0246\x03\x02\x02\x02D\u0251" +
        "\x03\x02\x02\x02F\u0259\x03\x02\x02\x02H\u0261\x03\x02\x02\x02J\u026A" +
        "\x03\x02\x02\x02L\u0273\x03\x02\x02\x02N\u0281\x03\x02\x02\x02P\u0283" +
        "\x03\x02\x02\x02R\u0296\x03\x02\x02\x02T\u029F\x03\x02\x02\x02V\u02AA" +
        "\x03\x02\x02\x02X\u02C4\x03\x02\x02\x02Z\u02D0\x03\x02\x02\x02\\\u02E2" +
        "\x03\x02\x02\x02^\u02EE\x03\x02\x02\x02`\u02F9\x03\x02\x02\x02b\u02FD" +
        "\x03\x02\x02\x02d\u02FF\x03\x02\x02\x02f\u0306\x03\x02\x02\x02h\u030D" +
        "\x03\x02\x02\x02j\u0315\x03\x02\x02\x02l\u0320\x03\x02\x02\x02n\u0322" +
        "\x03\x02\x02\x02p\u0338\x03\x02\x02\x02r\u033B\x03\x02\x02\x02t\u033F" +
        "\x03\x02\x02\x02v\u0347\x03\x02\x02\x02x\u034F\x03\x02\x02\x02z\u0357" +
        "\x03\x02\x02\x02|\u0361\x03\x02\x02\x02~\u036B\x03\x02\x02\x02\x80\u0382" +
        "\x03\x02\x02\x02\x82\u0384\x03\x02\x02\x02\x84\u03AB\x03\x02\x02\x02\x86" +
        "\u03AD\x03\x02\x02\x02\x88\u03C7\x03\x02\x02\x02\x8A\u03C9\x03\x02\x02" +
        "\x02\x8C\u03DF\x03\x02\x02\x02\x8E\u03E1\x03\x02\x02\x02\x90\u03E5\x03" +
        "\x02\x02\x02\x92\u03F0\x03\x02\x02\x02\x94\u041C\x03\x02\x02\x02\x96\u041E" +
        "\x03\x02\x02\x02\x98\u042F\x03\x02\x02\x02\x9A\u0450\x03\x02\x02\x02\x9C" +
        "\u0454\x03\x02\x02\x02\x9E\u0456\x03\x02\x02\x02\xA0\u045D\x03\x02\x02" +
        "\x02\xA2\u0462\x03\x02\x02\x02\xA4\u0469\x03\x02\x02\x02\xA6\u046B\x03" +
        "\x02\x02\x02\xA8\u0470\x03\x02\x02\x02\xAA\u0472\x03\x02\x02\x02\xAC\xB2" +
        "\x07%\x02\x02\xAD\xB2\x05\x1C\x0F\x02\xAE\xAF\x05N(\x02\xAF\xB0\x07%\x02" +
        "\x02\xB0\xB2\x03\x02\x02\x02\xB1\xAC\x03\x02\x02\x02\xB1\xAD\x03\x02\x02" +
        "\x02\xB1\xAE\x03\x02\x02\x02\xB2\x03\x03\x02\x02\x02\xB3\xB6\x07%\x02" +
        "\x02\xB4\xB6\x05\x1A\x0E\x02\xB5\xB3\x03\x02\x02\x02\xB5\xB4\x03\x02\x02" +
        "\x02\xB6\xB9\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB7\xB8\x03\x02\x02" +
        "\x02\xB8\xBA\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xBA\xBB\x07\x02\x02" +
        "\x03\xBB\x05\x03\x02\x02\x02\xBC\xC0\x05\x92J\x02\xBD\xBF\x07%\x02\x02" +
        "\xBE\xBD\x03\x02\x02\x02\xBF\xC2\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02" +
        "\xC0\xC1\x03\x02\x02\x02\xC1\xC3\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02" +
        "\xC3\xC4\x07\x02\x02\x03\xC4\x07\x03\x02\x02\x02\xC5\xC6\x07O\x02\x02" +
        "\xC6\xCC\x05F$\x02\xC7\xC9\x072\x02\x02\xC8\xCA\x05\x98M\x02\xC9\xC8\x03" +
        "\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCD\x07" +
        "3\x02\x02\xCC\xC7\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCE\x03" +
        "\x02\x02\x02\xCE\xCF\x07%\x02\x02\xCF\t\x03\x02\x02\x02\xD0\xD2\x05\b" +
        "\x05\x02\xD1\xD0\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD1\x03\x02" +
        "\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\v\x03\x02\x02\x02\xD5\xD8\x05\n\x06" +
        "\x02\xD6\xD9\x05\x96L\x02\xD7\xD9\x05\x0E\b\x02\xD8\xD6\x03\x02\x02\x02" +
        "\xD8\xD7\x03\x02\x02\x02\xD9\r\x03\x02\x02\x02\xDA\xDB\x07\x04\x02\x02" +
        "\xDB\xDC\x07&\x02\x02\xDC\xDF\x05\x10\t\x02\xDD\xDE\x07P\x02\x02\xDE\xE0" +
        "\x05`1\x02\xDF\xDD\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE1\x03" +
        "\x02\x02\x02\xE1\xE2\x075\x02\x02\xE2\xE3\x05^0\x02\xE3\x0F\x03\x02\x02" +
        "\x02\xE4\xE6\x072\x02\x02\xE5\xE7\x05\x12\n\x02\xE6\xE5\x03\x02\x02\x02" +
        "\xE6\xE7\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xE9\x073\x02\x02" +
        "\xE9\x11\x03\x02\x02\x02\xEA\xED\x05\x14\v\x02\xEB\xEC\x078\x02\x02\xEC" +
        "\xEE\x05`1\x02\xED\xEB\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xF7" +
        "\x03\x02\x02\x02\xEF\xF0\x074\x02\x02\xF0\xF3\x05\x14\v\x02\xF1\xF2\x07" +
        "8\x02\x02\xF2\xF4\x05`1\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4\x03\x02\x02" +
        "\x02\xF4\xF6\x03\x02\x02\x02\xF5\xEF\x03\x02\x02\x02\xF6\xF9\x03\x02\x02" +
        "\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\u0113\x03\x02" +
        "\x02\x02\xF9\xF7\x03\x02\x02\x02\xFA\u0111\x074\x02\x02\xFB\xFD\x071\x02" +
        "\x02\xFC\xFE\x05\x14\v\x02\xFD\xFC\x03\x02\x02\x02\xFD\xFE\x03\x02\x02" +
        "\x02\xFE\u0107\x03\x02\x02\x02\xFF\u0100\x074\x02\x02\u0100\u0103\x05" +
        "\x14\v\x02\u0101\u0102\x078\x02\x02\u0102\u0104\x05`1\x02\u0103\u0101" +
        "\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104\u0106\x03\x02\x02\x02" +
        "\u0105\xFF\x03\x02\x02\x02\u0106\u0109\x03\x02\x02\x02\u0107\u0105\x03" +
        "\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\u010D\x03\x02\x02\x02\u0109" +
        "\u0107\x03\x02\x02\x02\u010A\u010B\x074\x02\x02\u010B\u010C\x077\x02\x02" +
        "\u010C\u010E\x05\x14\v\x02\u010D\u010A\x03\x02\x02\x02\u010D\u010E\x03" +
        "\x02\x02\x02\u010E\u0112\x03\x02\x02\x02\u010F\u0110\x077\x02\x02\u0110" +
        "\u0112\x05\x14\v\x02\u0111\xFB\x03\x02\x02\x02\u0111\u010F\x03\x02\x02" +
        "\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0114\x03\x02\x02\x02\u0113\xFA" +
        "\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114\u012C\x03\x02\x02\x02" +
        "\u0115\u0117\x071\x02\x02\u0116\u0118\x05\x14\v\x02\u0117\u0116\x03\x02" +
        "\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u0121\x03\x02\x02\x02\u0119" +
        "\u011A\x074\x02\x02\u011A\u011D\x05\x14\v\x02\u011B\u011C\x078\x02\x02" +
        "\u011C\u011E\x05`1\x02\u011D\u011B\x03\x02\x02\x02\u011D\u011E\x03\x02" +
        "\x02\x02\u011E\u0120\x03\x02\x02\x02\u011F\u0119\x03\x02\x02\x02\u0120" +
        "\u0123\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121\u0122\x03\x02" +
        "\x02\x02\u0122\u0127\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0124" +
        "\u0125\x074\x02\x02\u0125\u0126\x077\x02\x02\u0126\u0128\x05\x14\v\x02" +
        "\u0127\u0124\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u012C\x03" +
        "\x02\x02\x02\u0129\u012A\x077\x02\x02\u012A\u012C\x05\x14\v\x02\u012B" +
        "\xEA\x03\x02\x02\x02\u012B\u0115\x03\x02\x02\x02\u012B\u0129\x03\x02\x02" +
        "\x02\u012C\x13\x03\x02\x02\x02\u012D\u0130\x07&\x02\x02\u012E\u012F\x07" +
        "5\x02\x02\u012F\u0131\x05`1\x02\u0130\u012E\x03\x02\x02\x02\u0130\u0131" +
        "\x03\x02\x02\x02\u0131\x15\x03\x02\x02\x02\u0132\u0135\x05\x18\r\x02\u0133" +
        "\u0134\x078\x02\x02\u0134\u0136\x05`1\x02\u0135\u0133\x03\x02\x02\x02" +
        "\u0135\u0136\x03\x02\x02\x02\u0136\u013F\x03\x02\x02\x02\u0137\u0138\x07" +
        "4\x02\x02\u0138\u013B\x05\x18\r\x02\u0139\u013A\x078\x02\x02\u013A\u013C" +
        "\x05`1\x02\u013B\u0139\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C" +
        "\u013E\x03\x02\x02\x02\u013D\u0137\x03\x02\x02\x02\u013E\u0141\x03\x02" +
        "\x02\x02\u013F\u013D\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140" +
        "\u015B\x03\x02\x02\x02\u0141\u013F\x03\x02\x02\x02\u0142\u0159\x074\x02" +
        "\x02\u0143\u0145\x071\x02\x02\u0144\u0146\x05\x18\r\x02\u0145\u0144\x03" +
        "\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146\u014F\x03\x02\x02\x02\u0147" +
        "\u0148\x074\x02\x02\u0148\u014B\x05\x18\r\x02\u0149\u014A\x078\x02\x02" +
        "\u014A\u014C\x05`1\x02\u014B\u0149\x03\x02\x02\x02\u014B\u014C\x03\x02" +
        "\x02\x02\u014C\u014E\x03\x02\x02\x02\u014D\u0147\x03\x02\x02\x02\u014E" +
        "\u0151\x03\x02\x02\x02\u014F\u014D\x03\x02\x02\x02\u014F\u0150\x03\x02" +
        "\x02\x02\u0150\u0155\x03\x02\x02\x02\u0151\u014F\x03\x02\x02\x02\u0152" +
        "\u0153\x074\x02\x02\u0153\u0154\x077\x02\x02\u0154\u0156\x05\x18\r\x02" +
        "\u0155\u0152\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u015A\x03" +
        "\x02\x02\x02\u0157\u0158\x077\x02\x02\u0158\u015A\x05\x18\r\x02\u0159" +
        "\u0143\x03\x02\x02\x02\u0159\u0157\x03\x02\x02\x02\u0159\u015A\x03\x02" +
        "\x02\x02\u015A\u015C\x03\x02\x02\x02\u015B\u0142\x03\x02\x02\x02\u015B" +
        "\u015C\x03\x02\x02\x02\u015C\u0174\x03\x02\x02\x02\u015D\u015F\x071\x02" +
        "\x02\u015E\u0160\x05\x18\r\x02\u015F\u015E\x03\x02\x02\x02\u015F\u0160" +
        "\x03\x02\x02\x02\u0160\u0169\x03\x02\x02\x02\u0161\u0162\x074\x02\x02" +
        "\u0162\u0165\x05\x18\r\x02\u0163\u0164\x078\x02\x02\u0164\u0166\x05`1" +
        "\x02\u0165\u0163\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166\u0168" +
        "\x03\x02\x02\x02\u0167\u0161\x03\x02\x02\x02\u0168\u016B\x03\x02\x02\x02" +
        "\u0169\u0167\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A\u016F\x03" +
        "\x02\x02\x02\u016B\u0169\x03\x02\x02\x02\u016C\u016D\x074\x02\x02\u016D" +
        "\u016E\x077\x02\x02\u016E\u0170\x05\x18\r\x02\u016F\u016C\x03\x02\x02" +
        "\x02\u016F\u0170\x03\x02\x02\x02\u0170\u0174\x03\x02\x02\x02\u0171\u0172" +
        "\x077\x02\x02\u0172\u0174\x05\x18\r\x02\u0173\u0132\x03\x02\x02\x02\u0173" +
        "\u015D\x03\x02\x02\x02\u0173\u0171\x03\x02\x02\x02\u0174\x17\x03\x02\x02" +
        "\x02\u0175\u0176\x07&\x02\x02\u0176\x19\x03\x02\x02\x02\u0177\u017A\x05" +
        "\x1C\x0F\x02\u0178\u017A\x05N(\x02\u0179\u0177\x03\x02\x02\x02\u0179\u0178" +
        "\x03\x02\x02\x02\u017A\x1B\x03\x02\x02\x02\u017B\u0180\x05\x1E\x10\x02" +
        "\u017C\u017D\x076\x02\x02\u017D\u017F\x05\x1E\x10\x02\u017E\u017C\x03" +
        "\x02\x02\x02\u017F\u0182\x03\x02\x02\x02\u0180\u017E\x03\x02\x02\x02\u0180" +
        "\u0181\x03\x02\x02\x02\u0181\u0184\x03\x02\x02\x02\u0182\u0180\x03\x02" +
        "\x02\x02\u0183\u0185\x076\x02\x02\u0184\u0183\x03\x02\x02\x02\u0184\u0185" +
        "\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0187\x07%\x02\x02" +
        "\u0187\x1D\x03\x02\x02\x02\u0188\u0192\x05 \x11\x02\u0189\u0192\x05\"" +
        "\x12\x02\u018A\u0192\x05(\x15\x02\u018B\u0192\x05*\x16\x02\u018C\u0192" +
        "\x05,\x17\x02\u018D\u0192\x058\x1D\x02\u018E\u0192\x05H%\x02\u018F\u0192" +
        "\x05J&\x02\u0190\u0192\x05L\'\x02\u0191\u0188\x03\x02\x02\x02\u0191\u0189" +
        "\x03\x02\x02\x02\u0191\u018A\x03\x02\x02\x02\u0191\u018B\x03\x02\x02\x02" +
        "\u0191\u018C\x03\x02\x02\x02\u0191\u018D\x03\x02\x02\x02\u0191\u018E\x03" +
        "\x02\x02\x02\u0191\u018F\x03\x02\x02\x02\u0191\u0190\x03\x02\x02\x02\u0192" +
        "\x1F\x03\x02\x02\x02\u0193\u0194\x07\x03\x02\x02\u0194\u01AF\x072\x02" +
        "\x02\u0195\u019A\x05`1\x02\u0196\u0197\x074\x02\x02\u0197\u0199\x05`1" +
        "\x02\u0198\u0196\x03\x02\x02\x02\u0199\u019C\x03\x02\x02\x02\u019A\u0198" +
        "\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B\u019E\x03\x02\x02\x02" +
        "\u019C\u019A\x03\x02\x02\x02\u019D\u019F\x074\x02\x02\u019E\u019D\x03" +
        "\x02\x02\x02\u019E\u019F\x03";
    AltPython3Parser._serializedATNSegment1 = "\x02\x02\x02\u019F\u01A1\x03\x02\x02\x02\u01A0\u0195\x03\x02\x02\x02\u01A0" +
        "\u01A1\x03\x02\x02\x02\u01A1\u01B0\x03\x02\x02\x02\u01A2\u01A3\x07?\x02" +
        "\x02\u01A3\u01AD\x05`1\x02\u01A4\u01A5\x074\x02\x02\u01A5\u01A7\x05`1" +
        "\x02\u01A6\u01A4\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01A6" +
        "\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AB\x03\x02\x02\x02" +
        "\u01AA\u01AC\x074\x02\x02\u01AB\u01AA\x03\x02\x02\x02\u01AB\u01AC\x03" +
        "\x02\x02\x02\u01AC\u01AE\x03\x02\x02\x02\u01AD\u01A6\x03\x02\x02\x02\u01AD" +
        "\u01AE\x03\x02\x02\x02\u01AE\u01B0\x03\x02\x02\x02\u01AF\u01A0\x03\x02" +
        "\x02\x02\u01AF\u01A2\x03\x02\x02\x02\u01B0\u01B1\x03\x02\x02\x02\u01B1" +
        "\u01D1\x073\x02\x02\u01B2\u01CD\x07\x03\x02\x02\u01B3\u01B8\x05`1\x02" +
        "\u01B4\u01B5\x074\x02\x02\u01B5\u01B7\x05`1\x02\u01B6\u01B4\x03\x02\x02" +
        "\x02\u01B7\u01BA\x03\x02\x02\x02\u01B8\u01B6\x03\x02\x02\x02\u01B8\u01B9" +
        "\x03\x02\x02\x02\u01B9\u01BC\x03\x02\x02\x02\u01BA\u01B8\x03\x02\x02\x02" +
        "\u01BB\u01BD\x074\x02\x02\u01BC\u01BB\x03\x02\x02\x02\u01BC\u01BD\x03" +
        "\x02\x02\x02\u01BD\u01BF\x03\x02\x02\x02\u01BE\u01B3\x03\x02\x02\x02\u01BE" +
        "\u01BF\x03\x02\x02\x02\u01BF\u01CE\x03\x02\x02\x02\u01C0\u01C1\x07?\x02" +
        "\x02\u01C1\u01CB\x05`1\x02\u01C2\u01C3\x074\x02\x02\u01C3\u01C5\x05`1" +
        "\x02\u01C4\u01C2\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C4" +
        "\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7\u01C9\x03\x02\x02\x02" +
        "\u01C8\u01CA\x074\x02\x02\u01C9\u01C8\x03\x02\x02\x02\u01C9\u01CA\x03" +
        "\x02\x02\x02\u01CA\u01CC\x03\x02\x02\x02\u01CB\u01C4\x03\x02\x02\x02\u01CB" +
        "\u01CC\x03\x02\x02\x02\u01CC\u01CE\x03\x02\x02\x02\u01CD\u01BE\x03\x02" +
        "\x02\x02\u01CD\u01C0\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF" +
        "\u01D1\b\x11\x01\x02\u01D0\u0193\x03\x02\x02\x02\u01D0\u01B2\x03\x02\x02" +
        "\x02\u01D1!\x03\x02\x02\x02\u01D2\u01E2\x05$\x13\x02\u01D3\u01D6\x05&" +
        "\x14\x02\u01D4\u01D7\x05\xA2R\x02\u01D5\u01D7\x05\x92J\x02\u01D6\u01D4" +
        "\x03\x02\x02\x02\u01D6\u01D5\x03\x02\x02\x02\u01D7\u01E3\x03\x02\x02\x02" +
        "\u01D8\u01DB\x078\x02\x02\u01D9\u01DC\x05\xA2R\x02\u01DA\u01DC\x05$\x13" +
        "\x02\u01DB\u01D9\x03\x02\x02\x02\u01DB\u01DA\x03\x02\x02\x02\u01DC\u01DE" +
        "\x03\x02\x02\x02\u01DD\u01D8\x03\x02\x02\x02\u01DE\u01E1\x03\x02\x02\x02" +
        "\u01DF\u01DD\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0\u01E3\x03" +
        "\x02\x02\x02\u01E1\u01DF\x03\x02\x02\x02\u01E2\u01D3\x03\x02\x02\x02\u01E2" +
        "\u01DF\x03\x02\x02\x02\u01E3#\x03\x02\x02\x02\u01E4\u01E7\x05`1\x02\u01E5" +
        "\u01E7\x05r:\x02\u01E6\u01E4\x03\x02\x02\x02\u01E6\u01E5\x03\x02\x02\x02" +
        "\u01E7\u01EF\x03\x02\x02\x02\u01E8\u01EB\x074\x02\x02\u01E9\u01EC\x05" +
        "`1\x02\u01EA\u01EC\x05r:\x02\u01EB\u01E9\x03\x02\x02\x02\u01EB\u01EA\x03" +
        "\x02\x02\x02\u01EC\u01EE\x03\x02\x02\x02\u01ED\u01E8\x03\x02\x02\x02\u01EE" +
        "\u01F1\x03\x02\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01EF\u01F0\x03\x02" +
        "\x02\x02\u01F0\u01F3\x03\x02\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F2" +
        "\u01F4\x074\x02\x02\u01F3\u01F2\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02" +
        "\x02\u01F4%\x03\x02\x02\x02\u01F5\u01F6\t\x02\x02\x02\u01F6\'\x03\x02" +
        "\x02\x02\u01F7\u01F8\x07!\x02\x02\u01F8\u01F9\x05\x90I\x02\u01F9)\x03" +
        "\x02\x02\x02\u01FA\u01FB\x07\"\x02\x02\u01FB+\x03\x02\x02\x02\u01FC\u0202" +
        "\x05.\x18\x02\u01FD\u0202\x050\x19\x02\u01FE\u0202\x052\x1A\x02\u01FF" +
        "\u0202\x056\x1C\x02\u0200\u0202\x054\x1B\x02\u0201\u01FC\x03\x02\x02\x02" +
        "\u0201\u01FD\x03\x02\x02\x02\u0201\u01FE\x03\x02\x02\x02\u0201\u01FF\x03" +
        "\x02\x02\x02\u0201\u0200\x03\x02\x02\x02\u0202-\x03\x02\x02\x02\u0203" +
        "\u0204\x07$\x02\x02\u0204/\x03\x02\x02\x02\u0205\u0206\x07#\x02\x02\u0206" +
        "1\x03\x02\x02\x02\u0207\u0209\x07\x05\x02\x02\u0208\u020A\x05\x92J\x02" +
        "\u0209\u0208\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A3\x03\x02" +
        "\x02\x02\u020B\u020C\x05\xA2R\x02\u020C5\x03\x02\x02\x02\u020D\u0213\x07" +
        "\x06\x02\x02\u020E\u0211\x05`1\x02\u020F\u0210\x07\x07\x02\x02\u0210\u0212" +
        "\x05`1\x02\u0211\u020F\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212" +
        "\u0214\x03\x02\x02\x02\u0213\u020E\x03\x02\x02\x02\u0213\u0214\x03\x02" +
        "\x02\x02\u0214\u021C\x03\x02\x02\x02\u0215\u0216\x07\x06\x02\x02\u0216" +
        "\u0217\x07&\x02\x02\u0217\u0218\x074\x02\x02\u0218\u0219\x05\xA6T\x02" +
        "\u0219\u021A\b\x1C\x01\x02\u021A\u021C\x03\x02\x02\x02\u021B\u020D\x03" +
        "\x02\x02\x02\u021B\u0215\x03\x02\x02\x02\u021C7\x03\x02\x02\x02\u021D" +
        "\u0220\x05:\x1E\x02\u021E\u0220\x05<\x1F\x02\u021F\u021D\x03\x02\x02\x02" +
        "\u021F\u021E\x03\x02\x02\x02\u02209\x03\x02\x02\x02\u0221\u0222\x07\b" +
        "\x02\x02\u0222\u0223\x05D#\x02\u0223;\x03\x02\x02\x02\u0224\u0231\x07" +
        "\x07\x02\x02\u0225\u0227\t\x03\x02\x02\u0226\u0225\x03\x02\x02\x02\u0227" +
        "\u022A\x03\x02\x02\x02\u0228\u0226\x03\x02\x02\x02\u0228\u0229\x03\x02" +
        "\x02\x02\u0229\u022B\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022B" +
        "\u0232\x05F$\x02\u022C\u022E\t\x03\x02\x02\u022D\u022C\x03\x02\x02\x02" +
        "\u022E\u022F\x03\x02\x02\x02\u022F\u022D\x03\x02\x02\x02\u022F\u0230\x03" +
        "\x02\x02\x02\u0230\u0232\x03\x02\x02\x02\u0231\u0228\x03\x02\x02\x02\u0231" +
        "\u022D\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233\u023A\x07\b\x02" +
        "\x02\u0234\u023B\x071\x02\x02\u0235\u0236\x072\x02\x02\u0236\u0237\x05" +
        "B\"\x02\u0237\u0238\x073\x02\x02\u0238\u023B\x03\x02\x02\x02\u0239\u023B" +
        "\x05B\"\x02\u023A\u0234\x03\x02\x02\x02\u023A\u0235\x03\x02\x02\x02\u023A" +
        "\u0239\x03\x02\x02\x02\u023B=\x03\x02\x02\x02\u023C\u023F\x07&\x02\x02" +
        "\u023D\u023E\x07\t\x02\x02\u023E\u0240\x07&\x02\x02\u023F\u023D\x03\x02" +
        "\x02\x02\u023F\u0240\x03\x02\x02\x02\u0240?\x03\x02\x02\x02\u0241\u0244" +
        "\x05F$\x02\u0242\u0243\x07\t\x02\x02\u0243\u0245\x07&\x02\x02\u0244\u0242" +
        "\x03\x02\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245A\x03\x02\x02\x02\u0246" +
        "\u024B\x05> \x02\u0247\u0248\x074\x02\x02\u0248\u024A\x05> \x02\u0249" +
        "\u0247\x03\x02\x02\x02\u024A\u024D\x03\x02\x02\x02\u024B\u0249\x03\x02" +
        "\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C\u024F\x03\x02\x02\x02\u024D" +
        "\u024B\x03\x02\x02\x02\u024E\u0250\x074\x02\x02\u024F\u024E\x03\x02\x02" +
        "\x02\u024F\u0250\x03\x02\x02\x02\u0250C\x03\x02\x02\x02\u0251\u0256\x05" +
        "@!\x02\u0252\u0253\x074\x02\x02\u0253\u0255\x05@!\x02\u0254\u0252\x03" +
        "\x02\x02\x02\u0255\u0258\x03\x02\x02\x02\u0256\u0254\x03\x02\x02\x02\u0256" +
        "\u0257\x03\x02\x02\x02\u0257E\x03\x02\x02\x02\u0258\u0256\x03\x02\x02" +
        "\x02\u0259\u025E\x07&\x02\x02\u025A\u025B\x07/\x02\x02\u025B\u025D\x07" +
        "&\x02\x02\u025C\u025A\x03\x02\x02\x02\u025D\u0260\x03\x02\x02\x02\u025E" +
        "\u025C\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02\u025FG\x03\x02\x02" +
        "\x02\u0260\u025E\x03\x02\x02\x02\u0261\u0262\x07\n\x02\x02\u0262\u0267" +
        "\x07&\x02\x02\u0263\u0264\x074\x02\x02\u0264\u0266\x07&\x02\x02\u0265" +
        "\u0263\x03\x02\x02\x02\u0266\u0269\x03\x02\x02\x02\u0267\u0265\x03\x02" +
        "\x02\x02\u0267\u0268\x03\x02\x02\x02\u0268I\x03\x02\x02\x02\u0269\u0267" +
        "\x03\x02\x02\x02\u026A\u026B\x07\v\x02\x02\u026B\u0270\x07&\x02\x02\u026C" +
        "\u026D\x074\x02\x02\u026D\u026F\x07&\x02\x02\u026E\u026C\x03\x02\x02\x02" +
        "\u026F\u0272\x03\x02\x02\x02\u0270\u026E\x03\x02\x02\x02\u0270\u0271\x03" +
        "\x02\x02\x02\u0271K\x03\x02\x02\x02\u0272\u0270\x03\x02\x02\x02\u0273" +
        "\u0274\x07\f\x02\x02\u0274\u0277\x05`1\x02\u0275\u0276\x074\x02\x02\u0276" +
        "\u0278\x05`1\x02\u0277\u0275\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02" +
        "\u0278M\x03\x02\x02\x02\u0279\u0282\x05P)\x02\u027A\u0282\x05R*\x02\u027B" +
        "\u0282\x05T+\x02\u027C\u0282\x05V,\x02\u027D\u0282\x05X-\x02\u027E\u0282" +
        "\x05\x0E\b\x02\u027F\u0282\x05\x96L\x02\u0280\u0282\x05\f\x07\x02\u0281" +
        "\u0279\x03\x02\x02\x02\u0281\u027A\x03\x02\x02\x02\u0281\u027B\x03\x02" +
        "\x02\x02\u0281\u027C\x03\x02\x02\x02\u0281\u027D\x03\x02\x02\x02\u0281" +
        "\u027E\x03\x02\x02\x02\u0281\u027F\x03\x02\x02\x02\u0281\u0280\x03\x02" +
        "\x02\x02\u0282O\x03\x02\x02\x02\u0283\u0284\x07\r\x02\x02\u0284\u0285" +
        "\x05`1\x02\u0285\u0286\x075\x02\x02\u0286\u028E\x05^0\x02\u0287\u0288" +
        "\x07\x0E\x02\x02\u0288\u0289\x05`1\x02\u0289\u028A\x075\x02\x02\u028A" +
        "\u028B\x05^0\x02\u028B\u028D\x03\x02\x02\x02\u028C\u0287\x03\x02\x02\x02" +
        "\u028D\u0290\x03\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028E\u028F\x03" +
        "\x02\x02\x02\u028F\u0294\x03\x02\x02\x02\u0290\u028E\x03\x02\x02\x02\u0291" +
        "\u0292\x07\x0F\x02\x02\u0292\u0293\x075\x02\x02\u0293\u0295\x05^0\x02" +
        "\u0294\u0291\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295Q\x03\x02" +
        "\x02\x02\u0296\u0297\x07\x10\x02\x02\u0297\u0298\x05`1\x02\u0298\u0299" +
        "\x075\x02\x02\u0299\u029D\x05^0\x02\u029A\u029B\x07\x0F\x02\x02\u029B" +
        "\u029C\x075\x02\x02\u029C\u029E\x05^0\x02\u029D\u029A\x03\x02\x02\x02" +
        "\u029D\u029E\x03\x02\x02\x02\u029ES\x03\x02\x02\x02\u029F\u02A0\x07\x11" +
        "\x02\x02\u02A0\u02A1\x05\x90I\x02\u02A1\u02A2\x07\x12\x02\x02\u02A2\u02A3" +
        "\x05\x92J\x02\u02A3\u02A4\x075\x02\x02\u02A4\u02A8\x05^0\x02\u02A5\u02A6" +
        "\x07\x0F\x02\x02\u02A6\u02A7\x075\x02\x02\u02A7\u02A9\x05^0\x02\u02A8" +
        "\u02A5\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9U\x03\x02\x02" +
        "\x02\u02AA\u02AB\x07\x13\x02\x02\u02AB\u02AC\x075\x02\x02\u02AC\u02C2" +
        "\x05^0\x02\u02AD\u02AE\x05\\/\x02\u02AE\u02AF\x075\x02\x02\u02AF\u02B0" +
        "\x05^0\x02\u02B0\u02B2\x03\x02\x02\x02\u02B1\u02AD\x03\x02\x02\x02\u02B2" +
        "\u02B3\x03\x02\x02\x02\u02B3\u02B1\x03\x02\x02\x02\u02B3\u02B4\x03\x02" +
        "\x02\x02\u02B4\u02B8\x03\x02\x02\x02\u02B5\u02B6\x07\x0F\x02\x02\u02B6" +
        "\u02B7\x075\x02\x02\u02B7\u02B9\x05^0\x02\u02B8\u02B5\x03\x02\x02\x02" +
        "\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02BD\x03\x02\x02\x02\u02BA\u02BB\x07" +
        "\x14\x02\x02\u02BB\u02BC\x075\x02\x02\u02BC\u02BE\x05^0\x02\u02BD\u02BA" +
        "\x03\x02\x02\x02\u02BD\u02BE\x03\x02\x02\x02\u02BE\u02C3\x03\x02\x02\x02" +
        "\u02BF\u02C0\x07\x14\x02\x02\u02C0\u02C1\x075\x02\x02\u02C1\u02C3\x05" +
        "^0\x02\u02C2\u02B1\x03\x02\x02\x02\u02C2\u02BF\x03\x02\x02\x02\u02C3W" +
        "\x03\x02\x02\x02\u02C4\u02C5\x07\x15\x02\x02\u02C5\u02CA\x05Z.\x02\u02C6" +
        "\u02C7\x074\x02\x02\u02C7\u02C9\x05Z.\x02\u02C8\u02C6\x03\x02\x02\x02" +
        "\u02C9\u02CC\x03\x02\x02\x02\u02CA\u02C8\x03\x02\x02\x02\u02CA\u02CB\x03" +
        "\x02\x02\x02\u02CB\u02CD\x03\x02\x02\x02\u02CC\u02CA\x03\x02\x02\x02\u02CD" +
        "\u02CE\x075\x02\x02\u02CE\u02CF\x05^0\x02\u02CFY\x03\x02\x02\x02\u02D0" +
        "\u02D3\x05`1\x02\u02D1\u02D2\x07\t\x02\x02\u02D2\u02D4\x05t;\x02\u02D3" +
        "\u02D1\x03\x02\x02\x02\u02D3\u02D4\x03\x02\x02\x02\u02D4[\x03\x02\x02" +
        "\x02\u02D5\u02DB\x07\x16\x02\x02\u02D6\u02D9\x05`1\x02\u02D7\u02D8\x07" +
        "\t\x02\x02\u02D8\u02DA\x07&\x02\x02\u02D9\u02D7\x03\x02\x02\x02\u02D9" +
        "\u02DA\x03\x02\x02\x02\u02DA\u02DC\x03\x02\x02\x02\u02DB\u02D6\x03\x02" +
        "\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02E3\x03\x02\x02\x02\u02DD" +
        "\u02DE\x07\x16\x02\x02\u02DE\u02DF\x07&\x02\x02\u02DF\u02E0\x074\x02\x02" +
        "\u02E0\u02E1\x07&\x02\x02\u02E1\u02E3\b/\x01\x02\u02E2\u02D5\x03\x02\x02" +
        "\x02\u02E2\u02DD\x03\x02\x02\x02\u02E3]\x03\x02\x02\x02\u02E4\u02EF\x05" +
        "\x1C\x0F\x02\u02E5\u02E6\x07%\x02\x02\u02E6\u02E8\x07`\x02\x02\u02E7\u02E9" +
        "\x05\x1A\x0E\x02\u02E8\u02E7\x03\x02\x02\x02\u02E9\u02EA\x03\x02\x02\x02" +
        "\u02EA\u02E8\x03\x02\x02\x02\u02EA\u02EB\x03\x02\x02\x02\u02EB\u02EC\x03" +
        "\x02\x02\x02\u02EC\u02ED\x07a\x02\x02\u02ED\u02EF\x03\x02\x02\x02\u02EE" +
        "\u02E4\x03\x02\x02\x02\u02EE\u02E5\x03\x02\x02\x02\u02EF_\x03\x02\x02" +
        "\x02\u02F0\u02F6\x05h5\x02\u02F1\u02F2\x07\r\x02\x02\u02F2\u02F3\x05h" +
        "5\x02\u02F3\u02F4\x07\x0F\x02\x02\u02F4\u02F5\x05`1\x02\u02F5\u02F7\x03" +
        "\x02\x02\x02\u02F6\u02F1\x03\x02\x02\x02\u02F6\u02F7\x03\x02\x02\x02\u02F7" +
        "\u02FA\x03\x02\x02\x02\u02F8\u02FA\x05d3\x02\u02F9\u02F0\x03\x02\x02\x02" +
        "\u02F9\u02F8\x03\x02\x02\x02\u02FAa\x03\x02\x02\x02\u02FB\u02FE\x05h5" +
        "\x02\u02FC\u02FE\x05f4\x02\u02FD\u02FB\x03\x02\x02\x02\u02FD\u02FC\x03" +
        "\x02\x02\x02\u02FEc\x03\x02\x02\x02\u02FF\u0301\x07\x17\x02\x02\u0300" +
        "\u0302\x05\x16\f\x02\u0301\u0300\x03\x02\x02\x02\u0301\u0302\x03\x02\x02" +
        "\x02\u0302\u0303\x03\x02\x02\x02\u0303\u0304\x075\x02\x02\u0304\u0305" +
        "\x05`1\x02\u0305e\x03\x02\x02\x02\u0306\u0308\x07\x17\x02\x02\u0307\u0309" +
        "\x05\x16\f\x02\u0308\u0307\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02" +
        "\u0309\u030A\x03\x02\x02\x02\u030A\u030B\x075\x02\x02\u030B\u030C\x05" +
        "b2\x02\u030Cg\x03\x02\x02\x02\u030D\u0312\x05j6\x02\u030E\u030F\x07\x18" +
        "\x02\x02\u030F\u0311\x05j6\x02\u0310\u030E\x03\x02\x02\x02\u0311\u0314" +
        "\x03\x02\x02\x02\u0312\u0310\x03\x02\x02\x02\u0312\u0313\x03\x02\x02\x02" +
        "\u0313i\x03\x02\x02\x02\u0314\u0312\x03\x02\x02\x02\u0315\u031A\x05l7" +
        "\x02\u0316\u0317\x07\x19\x02\x02\u0317\u0319\x05l7\x02\u0318\u0316\x03" +
        "\x02\x02\x02\u0319\u031C\x03\x02\x02\x02\u031A\u0318\x03\x02\x02\x02\u031A" +
        "\u031B\x03\x02\x02\x02\u031Bk\x03\x02\x02\x02\u031C\u031A\x03\x02\x02" +
        "\x02\u031D\u031E\x07\x1A\x02\x02\u031E\u0321\x05l7\x02\u031F\u0321\x05" +
        "n8\x02\u0320\u031D\x03\x02\x02\x02\u0320\u031F\x03\x02\x02\x02\u0321m" +
        "\x03\x02\x02\x02\u0322\u0328\x05r:\x02\u0323\u0324\x05p9\x02\u0324\u0325" +
        "\x05r:\x02\u0325\u0327\x03\x02\x02\x02\u0326\u0323\x03\x02\x02\x02\u0327" +
        "\u032A\x03\x02\x02\x02\u0328\u0326\x03\x02\x02\x02\u0328\u0329\x03\x02" +
        "\x02\x02\u0329o\x03\x02\x02\x02\u032A\u0328\x03\x02\x02\x02\u032B\u0339" +
        "\x07H\x02\x02\u032C\u0339\x07I\x02\x02\u032D\u0339\x07J\x02\x02\u032E" +
        "\u0339\x07K\x02\x02\u032F\u0339\x07L\x02\x02\u0330\u0339\x07M\x02\x02" +
        "\u0331\u0339\x07N\x02\x02\u0332\u0339\x07\x12\x02\x02\u0333\u0334\x07" +
        "\x1A\x02\x02\u0334\u0339\x07\x12\x02\x02\u0335\u0339\x07\x1B\x02\x02\u0336" +
        "\u0337\x07\x1B\x02\x02\u0337\u0339\x07\x1A\x02\x02\u0338\u032B\x03\x02" +
        "\x02\x02\u0338\u032C\x03\x02\x02\x02\u0338\u032D\x03\x02\x02\x02\u0338" +
        "\u032E\x03\x02\x02\x02\u0338\u032F\x03\x02\x02\x02\u0338\u0330\x03\x02" +
        "\x02\x02\u0338\u0331\x03\x02\x02\x02\u0338\u0332\x03\x02\x02\x02\u0338" +
        "\u0333\x03\x02\x02\x02\u0338\u0335\x03\x02\x02\x02\u0338\u0336\x03\x02" +
        "\x02\x02\u0339q\x03\x02\x02\x02\u033A\u033C\x071\x02\x02\u033B\u033A\x03" +
        "\x02\x02\x02\u033B\u033C\x03\x02\x02\x02\u033C\u033D\x03\x02\x02\x02\u033D" +
        "\u033E\x05t;\x02\u033Es\x03\x02\x02\x02\u033F\u0344\x05v<\x02\u0340\u0341" +
        "\x07;\x02\x02\u0341\u0343\x05v<\x02\u0342\u0340\x03\x02\x02\x02\u0343" +
        "\u0346\x03\x02\x02\x02\u0344\u0342\x03\x02\x02\x02\u0344\u0345\x03\x02" +
        "\x02\x02\u0345u\x03\x02\x02\x02\u0346\u0344\x03\x02\x02\x02\u0347\u034C" +
        "\x05x=\x02\u0348\u0349\x07<\x02\x02\u0349\u034B\x05x=\x02\u034A\u0348" +
        "\x03\x02\x02\x02\u034B\u034E\x03\x02\x02\x02\u034C\u034A\x03\x02\x02\x02" +
        "\u034C\u034D\x03\x02\x02\x02\u034Dw\x03\x02\x02\x02\u034E\u034C\x03\x02" +
        "\x02\x02\u034F\u0354\x05z>\x02\u0350\u0351\x07=\x02\x02\u0351\u0353\x05" +
        "z>\x02\u0352\u0350\x03\x02\x02\x02\u0353\u0356\x03\x02\x02\x02\u0354\u0352" +
        "\x03\x02\x02\x02\u0354\u0355\x03\x02\x02\x02\u0355y\x03\x02\x02\x02\u0356" +
        "\u0354\x03\x02\x02\x02\u0357\u035E\x05|?\x02\u0358\u0359\x07>\x02\x02" +
        "\u0359\u035D\x05|?\x02\u035A\u035B\x07?\x02\x02\u035B\u035D\x05|?\x02" +
        "\u035C\u0358\x03\x02\x02\x02\u035C\u035A\x03\x02\x02\x02\u035D\u0360\x03" +
        "\x02\x02\x02\u035E\u035C\x03\x02\x02\x02\u035E\u035F\x03\x02\x02\x02\u035F" +
        "{\x03\x02\x02\x02\u0360\u035E\x03\x02\x02\x02\u0361\u0368\x05~@\x02\u0362" +
        "\u0363\x07@\x02\x02\u0363\u0367\x05~@\x02\u0364\u0365\x07A\x02\x02\u0365" +
        "\u0367\x05~@\x02\u0366\u0362\x03\x02\x02\x02\u0366\u0364\x03\x02\x02\x02" +
        "\u0367\u036A\x03\x02\x02\x02\u0368\u0366\x03\x02\x02\x02\u0368\u0369\x03" +
        "\x02\x02\x02\u0369}\x03\x02\x02\x02\u036A\u0368\x03\x02\x02\x02\u036B" +
        "\u0378\x05\x80A\x02\u036C\u036D\x071\x02\x02\u036D\u0377\x05\x80A\x02" +
        "\u036E\u036F\x07B\x02\x02\u036F\u0377\x05\x80A\x02\u0370\u0371\x07C\x02" +
        "\x02\u0371\u0377\x05\x80A\x02\u0372\u0373\x07D\x02\x02\u0373\u0377\x05" +
        "\x80A\x02\u0374\u0375\x07O\x02\x02\u0375\u0377\x05\x80A\x02\u0376\u036C" +
        "\x03\x02\x02\x02\u0376\u036E\x03\x02\x02\x02\u0376\u0370\x03\x02\x02\x02" +
        "\u0376\u0372\x03\x02\x02\x02\u0376\u0374\x03\x02\x02\x02\u0377\u037A\x03" +
        "\x02\x02\x02\u0378\u0376\x03\x02\x02\x02\u0378\u0379\x03\x02\x02\x02\u0379" +
        "\x7F\x03\x02\x02\x02\u037A\u0378\x03\x02\x02\x02\u037B\u037C\x07@\x02" +
        "\x02\u037C\u0383\x05\x80A\x02\u037D\u037E\x07A\x02\x02\u037E\u0383\x05" +
        "\x80A\x02\u037F\u0380\x07E\x02\x02\u0380\u0383\x05\x80A\x02\u0381\u0383" +
        "\x05\x82B\x02\u0382\u037B\x03\x02\x02\x02\u0382\u037D\x03\x02\x02\x02" +
        "\u0382\u037F\x03\x02\x02\x02\u0382\u0381\x03\x02\x02\x02\u0383\x81\x03" +
        "\x02\x02\x02\u0384\u0388\x05\x84C\x02\u0385\u0387\x05\x88E\x02\u0386\u0385" +
        "\x03\x02\x02\x02\u0387\u038A\x03\x02\x02\x02\u0388\u0386\x03\x02\x02\x02" +
        "\u0388\u0389\x03\x02\x02\x02\u0389\u038D\x03\x02\x02\x02\u038A\u0388\x03" +
        "\x02\x02\x02\u038B\u038C\x077\x02\x02\u038C\u038E\x05\x80A\x02\u038D\u038B" +
        "\x03\x02\x02\x02\u038D\u038E\x03\x02\x02\x02\u038E\x83\x03\x02\x02\x02" +
        "\u038F\u0392\x072\x02\x02\u0390\u0393\x05\xA2R\x02\u0391\u0393\x05\x86" +
        "D\x02\u0392\u0390\x03\x02\x02\x02\u0392\u0391\x03\x02\x02\x02\u0392\u0393" +
        "\x03\x02\x02\x02\u0393\u0394\x03\x02\x02\x02\u0394\u03AC\x073\x02\x02" +
        "\u0395\u0397\x079\x02\x02\u0396\u0398\x05\x86D\x02\u0397\u0396\x03\x02" +
        "\x02\x02\u0397\u0398\x03\x02\x02\x02\u0398\u0399\x03\x02\x02\x02\u0399" +
        "\u03AC\x07:\x02\x02\u039A\u039C\x07F\x02\x02\u039B\u039D\x05\x94K\x02" +
        "\u039C\u039B\x03\x02\x02\x02\u039C\u039D\x03\x02\x02\x02\u039D\u039E\x03" +
        "\x02\x02\x02\u039E\u03AC\x07G\x02\x02\u039F\u03A0\bC\x01\x02\u03A0\u03AC" +
        "\x07&\x02\x02\u03A1\u03AC\x05\xA8U\x02\u03A2\u03A4\x05\xA6T\x02\u03A3" +
        "\u03A2\x03\x02\x02\x02\u03A4\u03A5\x03\x02\x02\x02\u03A5\u03A3\x03\x02" +
        "\x02\x02\u03A5\u03A6\x03\x02\x02\x02\u03A6\u03AC\x03\x02\x02\x02\u03A7" +
        "\u03AC\x070\x02\x02\u03A8\u03AC\x07\x1C\x02\x02\u03A9\u03AC\x07\x1D\x02" +
        "\x02\u03AA\u03AC\x07\x1E\x02\x02\u03AB\u038F\x03\x02\x02\x02\u03AB\u0395" +
        "\x03\x02\x02\x02\u03AB\u039A\x03\x02\x02\x02\u03AB\u039F\x03\x02\x02\x02" +
        "\u03AB\u03A1\x03\x02\x02\x02\u03AB\u03A3\x03\x02\x02\x02\u03AB\u03A7\x03" +
        "\x02\x02\x02\u03AB\u03A8\x03\x02\x02\x02\u03AB\u03A9\x03\x02\x02\x02\u03AB" +
        "\u03AA\x03\x02\x02\x02\u03AC\x85\x03\x02\x02\x02\u03AD\u03B9\x05`1\x02" +
        "\u03AE\u03BA\x05\x9EP\x02\u03AF\u03B0\x074\x02\x02\u03B0\u03B2\x05`1\x02" +
        "\u03B1\u03AF\x03\x02\x02\x02\u03B2\u03B5\x03\x02\x02\x02\u03B3\u03B1\x03" +
        "\x02\x02\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4\u03B7\x03\x02\x02\x02\u03B5" +
        "\u03B3\x03\x02\x02\x02\u03B6\u03B8\x074\x02\x02\u03B7\u03B6\x03\x02\x02" +
        "\x02\u03B7\u03B8\x03\x02\x02\x02\u03B8\u03BA\x03\x02\x02\x02\u03B9\u03AE" +
        "\x03\x02\x02\x02\u03B9\u03B3\x03\x02\x02\x02\u03BA\x87\x03\x02\x02\x02" +
        "\u03BB\u03BD\x072\x02\x02\u03BC\u03BE\x05\x98M\x02\u03BD\u03BC\x03\x02" +
        "\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE\u03BF\x03\x02\x02\x02\u03BF" +
        "\u03C8\x073\x02\x02\u03C0\u03C1\x079\x02\x02\u03C1\u03C2\x05\x8AF\x02" +
        "\u03C2\u03C3\x07:\x02\x02\u03C3\u03C8\x03\x02\x02\x02\u03C4\u03C5\x07" +
        "/\x02\x02\u03C5\u03C6\x07&\x02\x02\u03C6\u03C8\bE\x01\x02\u03C7\u03BB" +
        "\x03\x02\x02\x02\u03C7\u03C0\x03\x02\x02\x02\u03C7\u03C4\x03\x02\x02\x02" +
        "\u03C8\x89\x03\x02\x02\x02\u03C9\u03CE\x05\x8CG\x02\u03CA\u03CB\x074\x02" +
        "\x02\u03CB\u03CD\x05\x8CG\x02\u03CC\u03CA\x03\x02\x02\x02\u03CD\u03D0" +
        "\x03\x02\x02\x02\u03CE\u03CC\x03\x02\x02\x02\u03CE\u03CF\x03\x02\x02\x02" +
        "\u03CF\u03D2\x03\x02\x02\x02\u03D0\u03CE\x03\x02\x02\x02\u03D1\u03D3\x07" +
        "4\x02\x02\u03D2\u03D1\x03\x02\x02\x02\u03D2\u03D3\x03\x02\x02\x02\u03D3" +
        "\x8B\x03\x02\x02\x02\u03D4\u03E0\x05`1\x02\u03D5\u03D7\x05`1\x02\u03D6" +
        "\u03D5\x03\x02\x02\x02\u03D6\u03D7\x03\x02\x02\x02\u03D7\u03D8\x03\x02" +
        "\x02\x02\u03D8\u03DA\x075\x02\x02\u03D9\u03DB\x05`1\x02\u03DA\u03D9\x03" +
        "\x02\x02\x02\u03DA\u03DB\x03\x02\x02\x02\u03DB\u03DD\x03\x02\x02\x02\u03DC" +
        "\u03DE\x05\x8EH\x02\u03DD\u03DC\x03\x02\x02\x02\u03DD\u03DE\x03\x02\x02" +
        "\x02\u03DE\u03E0\x03\x02\x02\x02\u03DF\u03D4\x03\x02\x02\x02\u03DF\u03D6" +
        "\x03\x02\x02\x02\u03E0\x8D\x03\x02\x02\x02\u03E1\u03E3\x075\x02\x02\u03E2" +
        "\u03E4\x05`1\x02\u03E3\u03E2\x03\x02\x02\x02\u03E3\u03E4\x03\x02\x02\x02" +
        "\u03E4\x8F\x03\x02\x02\x02\u03E5\u03EA\x05r:\x02\u03E6\u03E7\x074\x02" +
        "\x02\u03E7\u03E9\x05r:\x02\u03E8\u03E6\x03\x02\x02\x02\u03E9\u03EC\x03" +
        "\x02\x02\x02\u03EA\u03E8\x03\x02\x02\x02\u03EA\u03EB\x03\x02\x02\x02\u03EB" +
        "\u03EE\x03\x02\x02\x02\u03EC\u03EA\x03\x02\x02\x02\u03ED\u03EF\x074\x02" +
        "\x02\u03EE\u03ED\x03\x02\x02\x02\u03EE\u03EF\x03\x02\x02\x02\u03EF\x91" +
        "\x03\x02\x02\x02\u03F0\u03F5\x05`1\x02\u03F1\u03F2\x074\x02\x02\u03F2" +
        "\u03F4\x05`1\x02\u03F3\u03F1\x03\x02\x02\x02\u03F4\u03F7\x03\x02\x02\x02" +
        "\u03F5\u03F3\x03\x02\x02\x02\u03F5\u03F6\x03\x02\x02\x02\u03F6\u03F9\x03" +
        "\x02\x02\x02\u03F7\u03F5\x03\x02\x02\x02\u03F8\u03FA\x074\x02\x02\u03F9" +
        "\u03F8\x03\x02\x02\x02\u03F9\u03FA\x03\x02\x02\x02\u03FA\x93\x03\x02\x02" +
        "\x02\u03FB\u03FC\x05`1\x02\u03FC\u03FD\x075\x02\x02\u03FD\u040C\x05`1" +
        "\x02\u03FE\u040D\x05\x9EP\x02\u03FF\u0400\x074\x02\x02\u0400\u0401\x05" +
        "`1\x02\u0401\u0402\x075\x02\x02\u0402\u0403\x05`1\x02\u0403\u0405\x03" +
        "\x02\x02\x02\u0404\u03FF\x03\x02\x02\x02\u0405\u0408\x03\x02\x02\x02\u0406" +
        "\u0404\x03\x02\x02\x02\u0406\u0407\x03\x02\x02\x02\u0407\u040A\x03\x02" +
        "\x02\x02\u0408\u0406\x03\x02\x02\x02\u0409\u040B\x074\x02\x02\u040A\u0409" +
        "\x03\x02\x02\x02\u040A\u040B\x03\x02\x02\x02\u040B\u040D\x03\x02\x02\x02" +
        "\u040C\u03FE\x03\x02\x02\x02\u040C\u0406\x03\x02\x02\x02\u040D\u041D\x03" +
        "\x02\x02\x02\u040E\u041A\x05`1\x02\u040F\u041B\x05\x9EP\x02\u0410\u0411" +
        "\x074\x02\x02\u0411\u0413\x05`1\x02\u0412\u0410\x03\x02\x02\x02\u0413" +
        "\u0416\x03\x02\x02\x02\u0414\u0412\x03\x02\x02\x02\u0414\u0415\x03\x02" +
        "\x02\x02\u0415\u0418\x03\x02\x02\x02\u0416\u0414\x03\x02\x02\x02\u0417" +
        "\u0419\x074\x02\x02\u0418\u0417\x03\x02\x02\x02\u0418\u0419\x03\x02\x02" +
        "\x02\u0419\u041B\x03\x02\x02\x02\u041A\u040F\x03\x02\x02\x02\u041A\u0414" +
        "\x03\x02\x02\x02\u041B\u041D\x03\x02\x02\x02\u041C\u03FB\x03\x02\x02\x02" +
        "\u041C\u040E\x03\x02\x02\x02\u041D\x95\x03\x02\x02\x02\u041E\u041F\x07" +
        "\x1F\x02\x02\u041F\u0425\x07&\x02\x02\u0420\u0422\x072\x02\x02\u0421\u0423" +
        "\x05\x98M\x02\u0422\u0421\x03\x02\x02\x02\u0422\u0423\x03\x02\x02\x02" +
        "\u0423\u0424\x03\x02\x02\x02\u0424\u0426\x073\x02\x02\u0425\u0420\x03" +
        "\x02\x02\x02\u0425\u0426\x03\x02\x02\x02\u0426\u0427\x03\x02\x02\x02\u0427" +
        "\u0428\x075\x02\x02\u0428\u0429\x05^0\x02\u0429\x97\x03\x02\x02\x02\u042A" +
        "\u042B\x05\x9AN\x02\u042B\u042C\x074\x02\x02\u042C\u042E\x03\x02\x02\x02" +
        "\u042D\u042A\x03\x02\x02\x02\u042E\u0431\x03\x02\x02\x02\u042F\u042D\x03" +
        "\x02\x02\x02\u042F\u0430\x03\x02\x02\x02\u0430\u0446\x03\x02\x02\x02\u0431" +
        "\u042F\x03\x02\x02\x02\u0432\u0434\x05\x9AN\x02\u0433\u0435\x074\x02\x02" +
        "\u0434\u0433\x03\x02\x02\x02\u0434\u0435\x03\x02\x02\x02\u0435\u0447\x03" +
        "\x02\x02\x02\u0436\u0437\x071\x02\x02\u0437\u043C\x05`1\x02\u0438\u0439" +
        "\x074\x02\x02\u0439\u043B\x05\x9AN\x02\u043A\u0438\x03\x02\x02\x02\u043B" +
        "\u043E\x03\x02\x02\x02\u043C\u043A\x03\x02\x02\x02\u043C\u043D\x03\x02" +
        "\x02\x02\u043D\u0442\x03\x02\x02\x02\u043E\u043C\x03\x02\x02\x02\u043F" +
        "\u0440\x074\x02\x02\u0440\u0441\x077\x02\x02\u0441\u0443\x05`1\x02\u0442" +
        "\u043F\x03\x02\x02\x02\u0442\u0443\x03\x02\x02\x02\u0443\u0447\x03\x02" +
        "\x02\x02\u0444\u0445\x077\x02\x02\u0445\u0447\x05`1\x02\u0446\u0432\x03" +
        "\x02\x02\x02\u0446\u0436\x03\x02\x02\x02\u0446\u0444\x03\x02\x02\x02\u0447" +
        "\x99\x03\x02\x02\x02\u0448\u044A\x05`1\x02\u0449\u044B\x05\x9EP\x02\u044A" +
        "\u0449\x03\x02\x02";
    AltPython3Parser._serializedATNSegment2 = "\x02\u044A\u044B\x03\x02\x02\x02\u044B\u0451\x03\x02\x02\x02\u044C\u044D" +
        "\x05`1\x02\u044D\u044E\x078\x02\x02\u044E\u044F\x05`1\x02\u044F\u0451" +
        "\x03\x02\x02\x02\u0450\u0448\x03\x02\x02\x02\u0450\u044C\x03\x02\x02\x02" +
        "\u0451\x9B\x03\x02\x02\x02\u0452\u0455\x05\x9EP\x02\u0453\u0455\x05\xA0" +
        "Q\x02\u0454\u0452\x03\x02\x02\x02\u0454\u0453\x03\x02\x02\x02\u0455\x9D" +
        "\x03\x02\x02\x02\u0456\u0457\x07\x11\x02\x02\u0457\u0458\x05\x90I\x02" +
        "\u0458\u0459\x07\x12\x02\x02\u0459\u045B\x05h5\x02\u045A\u045C\x05\x9C" +
        "O\x02\u045B\u045A\x03\x02\x02\x02\u045B\u045C\x03\x02\x02\x02\u045C\x9F" +
        "\x03\x02\x02\x02\u045D\u045E\x07\r\x02\x02\u045E\u0460\x05b2\x02\u045F" +
        "\u0461\x05\x9CO\x02\u0460\u045F\x03\x02\x02\x02\u0460\u0461\x03\x02\x02" +
        "\x02\u0461\xA1\x03\x02\x02\x02\u0462\u0464\x07 \x02\x02\u0463\u0465\x05" +
        "\xA4S\x02\u0464\u0463\x03\x02\x02\x02\u0464\u0465\x03\x02\x02\x02\u0465" +
        "\xA3\x03\x02\x02\x02\u0466\u0467\x07\x07\x02\x02\u0467\u046A\x05`1\x02" +
        "\u0468\u046A\x05\x92J\x02\u0469\u0466\x03\x02\x02\x02\u0469\u0468\x03" +
        "\x02\x02\x02\u046A\xA5\x03\x02\x02\x02\u046B\u046C\t\x04\x02\x02\u046C" +
        "\xA7\x03\x02\x02\x02\u046D\u0471\x05\xAAV\x02\u046E\u0471\x07-\x02\x02" +
        "\u046F\u0471\x07.\x02\x02\u0470\u046D\x03\x02\x02\x02\u0470\u046E\x03" +
        "\x02\x02\x02\u0470\u046F\x03\x02\x02\x02\u0471\xA9\x03\x02\x02\x02\u0472" +
        "\u0473\t\x05\x02\x02\u0473\xAB\x03\x02\x02\x02\xA9\xB1\xB5\xB7\xC0\xC9" +
        "\xCC\xD3\xD8\xDF\xE6\xED\xF3\xF7\xFD\u0103\u0107\u010D\u0111\u0113\u0117" +
        "\u011D\u0121\u0127\u012B\u0130\u0135\u013B\u013F\u0145\u014B\u014F\u0155" +
        "\u0159\u015B\u015F\u0165\u0169\u016F\u0173\u0179\u0180\u0184\u0191\u019A" +
        "\u019E\u01A0\u01A8\u01AB\u01AD\u01AF\u01B8\u01BC\u01BE\u01C6\u01C9\u01CB" +
        "\u01CD\u01D0\u01D6\u01DB\u01DF\u01E2\u01E6\u01EB\u01EF\u01F3\u0201\u0209" +
        "\u0211\u0213\u021B\u021F\u0228\u022F\u0231\u023A\u023F\u0244\u024B\u024F" +
        "\u0256\u025E\u0267\u0270\u0277\u0281\u028E\u0294\u029D\u02A8\u02B3\u02B8" +
        "\u02BD\u02C2\u02CA\u02D3\u02D9\u02DB\u02E2\u02EA\u02EE\u02F6\u02F9\u02FD" +
        "\u0301\u0308\u0312\u031A\u0320\u0328\u0338\u033B\u0344\u034C\u0354\u035C" +
        "\u035E\u0366\u0368\u0376\u0378\u0382\u0388\u038D\u0392\u0397\u039C\u03A5" +
        "\u03AB\u03B3\u03B7\u03B9\u03BD\u03C7\u03CE\u03D2\u03D6\u03DA\u03DD\u03DF" +
        "\u03E3\u03EA\u03EE\u03F5\u03F9\u0406\u040A\u040C\u0414\u0418\u041A\u041C" +
        "\u0422\u0425\u042F\u0434\u043C\u0442\u0446\u044A\u0450\u0454\u045B\u0460" +
        "\u0464\u0469\u0470";
    AltPython3Parser._serializedATN = Utils.join([
        AltPython3Parser._serializedATNSegment0,
        AltPython3Parser._serializedATNSegment1,
        AltPython3Parser._serializedATNSegment2,
    ], "");
    return AltPython3Parser;
}(Parser_1.Parser));
exports.AltPython3Parser = AltPython3Parser;
var Single_inputContext = /** @class */ (function (_super) {
    __extends(Single_inputContext, _super);
    function Single_inputContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Single_inputContext.prototype.NEWLINE = function () { return this.tryGetToken(AltPython3Parser.NEWLINE, 0); };
    Single_inputContext.prototype.simple_stmt = function () {
        return this.tryGetRuleContext(0, Simple_stmtContext);
    };
    Single_inputContext.prototype.compound_stmt = function () {
        return this.tryGetRuleContext(0, Compound_stmtContext);
    };
    Object.defineProperty(Single_inputContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_single_input; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Single_inputContext.prototype.enterRule = function (listener) {
        if (listener.enterSingle_input) {
            listener.enterSingle_input(this);
        }
    };
    // @Override
    Single_inputContext.prototype.exitRule = function (listener) {
        if (listener.exitSingle_input) {
            listener.exitSingle_input(this);
        }
    };
    // @Override
    Single_inputContext.prototype.accept = function (visitor) {
        if (visitor.visitSingle_input) {
            return visitor.visitSingle_input(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Single_inputContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Single_inputContext = Single_inputContext;
var File_inputContext = /** @class */ (function (_super) {
    __extends(File_inputContext, _super);
    function File_inputContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    File_inputContext.prototype.EOF = function () { return this.getToken(AltPython3Parser.EOF, 0); };
    File_inputContext.prototype.NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.NEWLINE);
        }
        else {
            return this.getToken(AltPython3Parser.NEWLINE, i);
        }
    };
    File_inputContext.prototype.stmt = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }
        else {
            return this.getRuleContext(i, StmtContext);
        }
    };
    Object.defineProperty(File_inputContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_file_input; },
        enumerable: true,
        configurable: true
    });
    // @Override
    File_inputContext.prototype.enterRule = function (listener) {
        if (listener.enterFile_input) {
            listener.enterFile_input(this);
        }
    };
    // @Override
    File_inputContext.prototype.exitRule = function (listener) {
        if (listener.exitFile_input) {
            listener.exitFile_input(this);
        }
    };
    // @Override
    File_inputContext.prototype.accept = function (visitor) {
        if (visitor.visitFile_input) {
            return visitor.visitFile_input(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return File_inputContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.File_inputContext = File_inputContext;
var Eval_inputContext = /** @class */ (function (_super) {
    __extends(Eval_inputContext, _super);
    function Eval_inputContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Eval_inputContext.prototype.testlist = function () {
        return this.getRuleContext(0, TestlistContext);
    };
    Eval_inputContext.prototype.EOF = function () { return this.getToken(AltPython3Parser.EOF, 0); };
    Eval_inputContext.prototype.NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.NEWLINE);
        }
        else {
            return this.getToken(AltPython3Parser.NEWLINE, i);
        }
    };
    Object.defineProperty(Eval_inputContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_eval_input; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Eval_inputContext.prototype.enterRule = function (listener) {
        if (listener.enterEval_input) {
            listener.enterEval_input(this);
        }
    };
    // @Override
    Eval_inputContext.prototype.exitRule = function (listener) {
        if (listener.exitEval_input) {
            listener.exitEval_input(this);
        }
    };
    // @Override
    Eval_inputContext.prototype.accept = function (visitor) {
        if (visitor.visitEval_input) {
            return visitor.visitEval_input(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Eval_inputContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Eval_inputContext = Eval_inputContext;
var DecoratorContext = /** @class */ (function (_super) {
    __extends(DecoratorContext, _super);
    function DecoratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DecoratorContext.prototype.AT = function () { return this.getToken(AltPython3Parser.AT, 0); };
    DecoratorContext.prototype.dotted_name = function () {
        return this.getRuleContext(0, Dotted_nameContext);
    };
    DecoratorContext.prototype.NEWLINE = function () { return this.getToken(AltPython3Parser.NEWLINE, 0); };
    DecoratorContext.prototype.OPEN_PAREN = function () { return this.tryGetToken(AltPython3Parser.OPEN_PAREN, 0); };
    DecoratorContext.prototype.CLOSE_PAREN = function () { return this.tryGetToken(AltPython3Parser.CLOSE_PAREN, 0); };
    DecoratorContext.prototype.arglist = function () {
        return this.tryGetRuleContext(0, ArglistContext);
    };
    Object.defineProperty(DecoratorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_decorator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DecoratorContext.prototype.enterRule = function (listener) {
        if (listener.enterDecorator) {
            listener.enterDecorator(this);
        }
    };
    // @Override
    DecoratorContext.prototype.exitRule = function (listener) {
        if (listener.exitDecorator) {
            listener.exitDecorator(this);
        }
    };
    // @Override
    DecoratorContext.prototype.accept = function (visitor) {
        if (visitor.visitDecorator) {
            return visitor.visitDecorator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DecoratorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DecoratorContext = DecoratorContext;
var DecoratorsContext = /** @class */ (function (_super) {
    __extends(DecoratorsContext, _super);
    function DecoratorsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DecoratorsContext.prototype.decorator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DecoratorContext);
        }
        else {
            return this.getRuleContext(i, DecoratorContext);
        }
    };
    Object.defineProperty(DecoratorsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_decorators; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DecoratorsContext.prototype.enterRule = function (listener) {
        if (listener.enterDecorators) {
            listener.enterDecorators(this);
        }
    };
    // @Override
    DecoratorsContext.prototype.exitRule = function (listener) {
        if (listener.exitDecorators) {
            listener.exitDecorators(this);
        }
    };
    // @Override
    DecoratorsContext.prototype.accept = function (visitor) {
        if (visitor.visitDecorators) {
            return visitor.visitDecorators(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DecoratorsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DecoratorsContext = DecoratorsContext;
var DecoratedContext = /** @class */ (function (_super) {
    __extends(DecoratedContext, _super);
    function DecoratedContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DecoratedContext.prototype.decorators = function () {
        return this.getRuleContext(0, DecoratorsContext);
    };
    DecoratedContext.prototype.classdef = function () {
        return this.tryGetRuleContext(0, ClassdefContext);
    };
    DecoratedContext.prototype.funcdef = function () {
        return this.tryGetRuleContext(0, FuncdefContext);
    };
    Object.defineProperty(DecoratedContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_decorated; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DecoratedContext.prototype.enterRule = function (listener) {
        if (listener.enterDecorated) {
            listener.enterDecorated(this);
        }
    };
    // @Override
    DecoratedContext.prototype.exitRule = function (listener) {
        if (listener.exitDecorated) {
            listener.exitDecorated(this);
        }
    };
    // @Override
    DecoratedContext.prototype.accept = function (visitor) {
        if (visitor.visitDecorated) {
            return visitor.visitDecorated(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DecoratedContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DecoratedContext = DecoratedContext;
var FuncdefContext = /** @class */ (function (_super) {
    __extends(FuncdefContext, _super);
    function FuncdefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FuncdefContext.prototype.DEF = function () { return this.getToken(AltPython3Parser.DEF, 0); };
    FuncdefContext.prototype.NAME = function () { return this.getToken(AltPython3Parser.NAME, 0); };
    FuncdefContext.prototype.parameters = function () {
        return this.getRuleContext(0, ParametersContext);
    };
    FuncdefContext.prototype.COLON = function () { return this.getToken(AltPython3Parser.COLON, 0); };
    FuncdefContext.prototype.suite = function () {
        return this.getRuleContext(0, SuiteContext);
    };
    FuncdefContext.prototype.ARROW = function () { return this.tryGetToken(AltPython3Parser.ARROW, 0); };
    FuncdefContext.prototype.test = function () {
        return this.tryGetRuleContext(0, TestContext);
    };
    Object.defineProperty(FuncdefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_funcdef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FuncdefContext.prototype.enterRule = function (listener) {
        if (listener.enterFuncdef) {
            listener.enterFuncdef(this);
        }
    };
    // @Override
    FuncdefContext.prototype.exitRule = function (listener) {
        if (listener.exitFuncdef) {
            listener.exitFuncdef(this);
        }
    };
    // @Override
    FuncdefContext.prototype.accept = function (visitor) {
        if (visitor.visitFuncdef) {
            return visitor.visitFuncdef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FuncdefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FuncdefContext = FuncdefContext;
var ParametersContext = /** @class */ (function (_super) {
    __extends(ParametersContext, _super);
    function ParametersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParametersContext.prototype.OPEN_PAREN = function () { return this.getToken(AltPython3Parser.OPEN_PAREN, 0); };
    ParametersContext.prototype.CLOSE_PAREN = function () { return this.getToken(AltPython3Parser.CLOSE_PAREN, 0); };
    ParametersContext.prototype.typedargslist = function () {
        return this.tryGetRuleContext(0, TypedargslistContext);
    };
    Object.defineProperty(ParametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_parameters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParametersContext.prototype.enterRule = function (listener) {
        if (listener.enterParameters) {
            listener.enterParameters(this);
        }
    };
    // @Override
    ParametersContext.prototype.exitRule = function (listener) {
        if (listener.exitParameters) {
            listener.exitParameters(this);
        }
    };
    // @Override
    ParametersContext.prototype.accept = function (visitor) {
        if (visitor.visitParameters) {
            return visitor.visitParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParametersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParametersContext = ParametersContext;
var TypedargslistContext = /** @class */ (function (_super) {
    __extends(TypedargslistContext, _super);
    function TypedargslistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypedargslistContext.prototype.tfpdef = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TfpdefContext);
        }
        else {
            return this.getRuleContext(i, TfpdefContext);
        }
    };
    TypedargslistContext.prototype.ASSIGN = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.ASSIGN);
        }
        else {
            return this.getToken(AltPython3Parser.ASSIGN, i);
        }
    };
    TypedargslistContext.prototype.test = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TestContext);
        }
        else {
            return this.getRuleContext(i, TestContext);
        }
    };
    TypedargslistContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.COMMA);
        }
        else {
            return this.getToken(AltPython3Parser.COMMA, i);
        }
    };
    TypedargslistContext.prototype.STAR = function () { return this.tryGetToken(AltPython3Parser.STAR, 0); };
    TypedargslistContext.prototype.POWER = function () { return this.tryGetToken(AltPython3Parser.POWER, 0); };
    Object.defineProperty(TypedargslistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_typedargslist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypedargslistContext.prototype.enterRule = function (listener) {
        if (listener.enterTypedargslist) {
            listener.enterTypedargslist(this);
        }
    };
    // @Override
    TypedargslistContext.prototype.exitRule = function (listener) {
        if (listener.exitTypedargslist) {
            listener.exitTypedargslist(this);
        }
    };
    // @Override
    TypedargslistContext.prototype.accept = function (visitor) {
        if (visitor.visitTypedargslist) {
            return visitor.visitTypedargslist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypedargslistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypedargslistContext = TypedargslistContext;
var TfpdefContext = /** @class */ (function (_super) {
    __extends(TfpdefContext, _super);
    function TfpdefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TfpdefContext.prototype.NAME = function () { return this.getToken(AltPython3Parser.NAME, 0); };
    TfpdefContext.prototype.COLON = function () { return this.tryGetToken(AltPython3Parser.COLON, 0); };
    TfpdefContext.prototype.test = function () {
        return this.tryGetRuleContext(0, TestContext);
    };
    Object.defineProperty(TfpdefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_tfpdef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TfpdefContext.prototype.enterRule = function (listener) {
        if (listener.enterTfpdef) {
            listener.enterTfpdef(this);
        }
    };
    // @Override
    TfpdefContext.prototype.exitRule = function (listener) {
        if (listener.exitTfpdef) {
            listener.exitTfpdef(this);
        }
    };
    // @Override
    TfpdefContext.prototype.accept = function (visitor) {
        if (visitor.visitTfpdef) {
            return visitor.visitTfpdef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TfpdefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TfpdefContext = TfpdefContext;
var VarargslistContext = /** @class */ (function (_super) {
    __extends(VarargslistContext, _super);
    function VarargslistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VarargslistContext.prototype.vfpdef = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VfpdefContext);
        }
        else {
            return this.getRuleContext(i, VfpdefContext);
        }
    };
    VarargslistContext.prototype.ASSIGN = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.ASSIGN);
        }
        else {
            return this.getToken(AltPython3Parser.ASSIGN, i);
        }
    };
    VarargslistContext.prototype.test = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TestContext);
        }
        else {
            return this.getRuleContext(i, TestContext);
        }
    };
    VarargslistContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.COMMA);
        }
        else {
            return this.getToken(AltPython3Parser.COMMA, i);
        }
    };
    VarargslistContext.prototype.STAR = function () { return this.tryGetToken(AltPython3Parser.STAR, 0); };
    VarargslistContext.prototype.POWER = function () { return this.tryGetToken(AltPython3Parser.POWER, 0); };
    Object.defineProperty(VarargslistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_varargslist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VarargslistContext.prototype.enterRule = function (listener) {
        if (listener.enterVarargslist) {
            listener.enterVarargslist(this);
        }
    };
    // @Override
    VarargslistContext.prototype.exitRule = function (listener) {
        if (listener.exitVarargslist) {
            listener.exitVarargslist(this);
        }
    };
    // @Override
    VarargslistContext.prototype.accept = function (visitor) {
        if (visitor.visitVarargslist) {
            return visitor.visitVarargslist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VarargslistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VarargslistContext = VarargslistContext;
var VfpdefContext = /** @class */ (function (_super) {
    __extends(VfpdefContext, _super);
    function VfpdefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VfpdefContext.prototype.NAME = function () { return this.getToken(AltPython3Parser.NAME, 0); };
    Object.defineProperty(VfpdefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_vfpdef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VfpdefContext.prototype.enterRule = function (listener) {
        if (listener.enterVfpdef) {
            listener.enterVfpdef(this);
        }
    };
    // @Override
    VfpdefContext.prototype.exitRule = function (listener) {
        if (listener.exitVfpdef) {
            listener.exitVfpdef(this);
        }
    };
    // @Override
    VfpdefContext.prototype.accept = function (visitor) {
        if (visitor.visitVfpdef) {
            return visitor.visitVfpdef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VfpdefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VfpdefContext = VfpdefContext;
var StmtContext = /** @class */ (function (_super) {
    __extends(StmtContext, _super);
    function StmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StmtContext.prototype.simple_stmt = function () {
        return this.tryGetRuleContext(0, Simple_stmtContext);
    };
    StmtContext.prototype.compound_stmt = function () {
        return this.tryGetRuleContext(0, Compound_stmtContext);
    };
    Object.defineProperty(StmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StmtContext.prototype.enterRule = function (listener) {
        if (listener.enterStmt) {
            listener.enterStmt(this);
        }
    };
    // @Override
    StmtContext.prototype.exitRule = function (listener) {
        if (listener.exitStmt) {
            listener.exitStmt(this);
        }
    };
    // @Override
    StmtContext.prototype.accept = function (visitor) {
        if (visitor.visitStmt) {
            return visitor.visitStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StmtContext = StmtContext;
var Simple_stmtContext = /** @class */ (function (_super) {
    __extends(Simple_stmtContext, _super);
    function Simple_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Simple_stmtContext.prototype.small_stmt = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Small_stmtContext);
        }
        else {
            return this.getRuleContext(i, Small_stmtContext);
        }
    };
    Simple_stmtContext.prototype.NEWLINE = function () { return this.getToken(AltPython3Parser.NEWLINE, 0); };
    Simple_stmtContext.prototype.SEMI_COLON = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.SEMI_COLON);
        }
        else {
            return this.getToken(AltPython3Parser.SEMI_COLON, i);
        }
    };
    Object.defineProperty(Simple_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_simple_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Simple_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterSimple_stmt) {
            listener.enterSimple_stmt(this);
        }
    };
    // @Override
    Simple_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitSimple_stmt) {
            listener.exitSimple_stmt(this);
        }
    };
    // @Override
    Simple_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitSimple_stmt) {
            return visitor.visitSimple_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Simple_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Simple_stmtContext = Simple_stmtContext;
var Small_stmtContext = /** @class */ (function (_super) {
    __extends(Small_stmtContext, _super);
    function Small_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Small_stmtContext.prototype.print_stmt = function () {
        return this.tryGetRuleContext(0, Print_stmtContext);
    };
    Small_stmtContext.prototype.expr_stmt = function () {
        return this.tryGetRuleContext(0, Expr_stmtContext);
    };
    Small_stmtContext.prototype.del_stmt = function () {
        return this.tryGetRuleContext(0, Del_stmtContext);
    };
    Small_stmtContext.prototype.pass_stmt = function () {
        return this.tryGetRuleContext(0, Pass_stmtContext);
    };
    Small_stmtContext.prototype.flow_stmt = function () {
        return this.tryGetRuleContext(0, Flow_stmtContext);
    };
    Small_stmtContext.prototype.import_stmt = function () {
        return this.tryGetRuleContext(0, Import_stmtContext);
    };
    Small_stmtContext.prototype.global_stmt = function () {
        return this.tryGetRuleContext(0, Global_stmtContext);
    };
    Small_stmtContext.prototype.nonlocal_stmt = function () {
        return this.tryGetRuleContext(0, Nonlocal_stmtContext);
    };
    Small_stmtContext.prototype.assert_stmt = function () {
        return this.tryGetRuleContext(0, Assert_stmtContext);
    };
    Object.defineProperty(Small_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_small_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Small_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterSmall_stmt) {
            listener.enterSmall_stmt(this);
        }
    };
    // @Override
    Small_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitSmall_stmt) {
            listener.exitSmall_stmt(this);
        }
    };
    // @Override
    Small_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitSmall_stmt) {
            return visitor.visitSmall_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Small_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Small_stmtContext = Small_stmtContext;
var Print_stmtContext = /** @class */ (function (_super) {
    __extends(Print_stmtContext, _super);
    function Print_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Print_stmtContext.prototype.PRINT = function () { return this.getToken(AltPython3Parser.PRINT, 0); };
    Print_stmtContext.prototype.OPEN_PAREN = function () { return this.tryGetToken(AltPython3Parser.OPEN_PAREN, 0); };
    Print_stmtContext.prototype.CLOSE_PAREN = function () { return this.tryGetToken(AltPython3Parser.CLOSE_PAREN, 0); };
    Print_stmtContext.prototype.RIGHT_SHIFT = function () { return this.tryGetToken(AltPython3Parser.RIGHT_SHIFT, 0); };
    Print_stmtContext.prototype.test = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TestContext);
        }
        else {
            return this.getRuleContext(i, TestContext);
        }
    };
    Print_stmtContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.COMMA);
        }
        else {
            return this.getToken(AltPython3Parser.COMMA, i);
        }
    };
    Object.defineProperty(Print_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_print_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Print_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterPrint_stmt) {
            listener.enterPrint_stmt(this);
        }
    };
    // @Override
    Print_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitPrint_stmt) {
            listener.exitPrint_stmt(this);
        }
    };
    // @Override
    Print_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitPrint_stmt) {
            return visitor.visitPrint_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Print_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Print_stmtContext = Print_stmtContext;
var Expr_stmtContext = /** @class */ (function (_super) {
    __extends(Expr_stmtContext, _super);
    function Expr_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Expr_stmtContext.prototype.testlist_star_expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Testlist_star_exprContext);
        }
        else {
            return this.getRuleContext(i, Testlist_star_exprContext);
        }
    };
    Expr_stmtContext.prototype.augassign = function () {
        return this.tryGetRuleContext(0, AugassignContext);
    };
    Expr_stmtContext.prototype.yield_expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Yield_exprContext);
        }
        else {
            return this.getRuleContext(i, Yield_exprContext);
        }
    };
    Expr_stmtContext.prototype.testlist = function () {
        return this.tryGetRuleContext(0, TestlistContext);
    };
    Expr_stmtContext.prototype.ASSIGN = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.ASSIGN);
        }
        else {
            return this.getToken(AltPython3Parser.ASSIGN, i);
        }
    };
    Object.defineProperty(Expr_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_expr_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Expr_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterExpr_stmt) {
            listener.enterExpr_stmt(this);
        }
    };
    // @Override
    Expr_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitExpr_stmt) {
            listener.exitExpr_stmt(this);
        }
    };
    // @Override
    Expr_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitExpr_stmt) {
            return visitor.visitExpr_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Expr_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Expr_stmtContext = Expr_stmtContext;
var Testlist_star_exprContext = /** @class */ (function (_super) {
    __extends(Testlist_star_exprContext, _super);
    function Testlist_star_exprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Testlist_star_exprContext.prototype.test = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TestContext);
        }
        else {
            return this.getRuleContext(i, TestContext);
        }
    };
    Testlist_star_exprContext.prototype.star_expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Star_exprContext);
        }
        else {
            return this.getRuleContext(i, Star_exprContext);
        }
    };
    Testlist_star_exprContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.COMMA);
        }
        else {
            return this.getToken(AltPython3Parser.COMMA, i);
        }
    };
    Object.defineProperty(Testlist_star_exprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_testlist_star_expr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Testlist_star_exprContext.prototype.enterRule = function (listener) {
        if (listener.enterTestlist_star_expr) {
            listener.enterTestlist_star_expr(this);
        }
    };
    // @Override
    Testlist_star_exprContext.prototype.exitRule = function (listener) {
        if (listener.exitTestlist_star_expr) {
            listener.exitTestlist_star_expr(this);
        }
    };
    // @Override
    Testlist_star_exprContext.prototype.accept = function (visitor) {
        if (visitor.visitTestlist_star_expr) {
            return visitor.visitTestlist_star_expr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Testlist_star_exprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Testlist_star_exprContext = Testlist_star_exprContext;
var AugassignContext = /** @class */ (function (_super) {
    __extends(AugassignContext, _super);
    function AugassignContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AugassignContext.prototype.ADD_ASSIGN = function () { return this.tryGetToken(AltPython3Parser.ADD_ASSIGN, 0); };
    AugassignContext.prototype.SUB_ASSIGN = function () { return this.tryGetToken(AltPython3Parser.SUB_ASSIGN, 0); };
    AugassignContext.prototype.MULT_ASSIGN = function () { return this.tryGetToken(AltPython3Parser.MULT_ASSIGN, 0); };
    AugassignContext.prototype.AT_ASSIGN = function () { return this.tryGetToken(AltPython3Parser.AT_ASSIGN, 0); };
    AugassignContext.prototype.DIV_ASSIGN = function () { return this.tryGetToken(AltPython3Parser.DIV_ASSIGN, 0); };
    AugassignContext.prototype.MOD_ASSIGN = function () { return this.tryGetToken(AltPython3Parser.MOD_ASSIGN, 0); };
    AugassignContext.prototype.AND_ASSIGN = function () { return this.tryGetToken(AltPython3Parser.AND_ASSIGN, 0); };
    AugassignContext.prototype.OR_ASSIGN = function () { return this.tryGetToken(AltPython3Parser.OR_ASSIGN, 0); };
    AugassignContext.prototype.XOR_ASSIGN = function () { return this.tryGetToken(AltPython3Parser.XOR_ASSIGN, 0); };
    AugassignContext.prototype.LEFT_SHIFT_ASSIGN = function () { return this.tryGetToken(AltPython3Parser.LEFT_SHIFT_ASSIGN, 0); };
    AugassignContext.prototype.RIGHT_SHIFT_ASSIGN = function () { return this.tryGetToken(AltPython3Parser.RIGHT_SHIFT_ASSIGN, 0); };
    AugassignContext.prototype.POWER_ASSIGN = function () { return this.tryGetToken(AltPython3Parser.POWER_ASSIGN, 0); };
    AugassignContext.prototype.IDIV_ASSIGN = function () { return this.tryGetToken(AltPython3Parser.IDIV_ASSIGN, 0); };
    Object.defineProperty(AugassignContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_augassign; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AugassignContext.prototype.enterRule = function (listener) {
        if (listener.enterAugassign) {
            listener.enterAugassign(this);
        }
    };
    // @Override
    AugassignContext.prototype.exitRule = function (listener) {
        if (listener.exitAugassign) {
            listener.exitAugassign(this);
        }
    };
    // @Override
    AugassignContext.prototype.accept = function (visitor) {
        if (visitor.visitAugassign) {
            return visitor.visitAugassign(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AugassignContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AugassignContext = AugassignContext;
var Del_stmtContext = /** @class */ (function (_super) {
    __extends(Del_stmtContext, _super);
    function Del_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Del_stmtContext.prototype.DEL = function () { return this.getToken(AltPython3Parser.DEL, 0); };
    Del_stmtContext.prototype.exprlist = function () {
        return this.getRuleContext(0, ExprlistContext);
    };
    Object.defineProperty(Del_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_del_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Del_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterDel_stmt) {
            listener.enterDel_stmt(this);
        }
    };
    // @Override
    Del_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitDel_stmt) {
            listener.exitDel_stmt(this);
        }
    };
    // @Override
    Del_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitDel_stmt) {
            return visitor.visitDel_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Del_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Del_stmtContext = Del_stmtContext;
var Pass_stmtContext = /** @class */ (function (_super) {
    __extends(Pass_stmtContext, _super);
    function Pass_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Pass_stmtContext.prototype.PASS = function () { return this.getToken(AltPython3Parser.PASS, 0); };
    Object.defineProperty(Pass_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_pass_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Pass_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterPass_stmt) {
            listener.enterPass_stmt(this);
        }
    };
    // @Override
    Pass_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitPass_stmt) {
            listener.exitPass_stmt(this);
        }
    };
    // @Override
    Pass_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitPass_stmt) {
            return visitor.visitPass_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Pass_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Pass_stmtContext = Pass_stmtContext;
var Flow_stmtContext = /** @class */ (function (_super) {
    __extends(Flow_stmtContext, _super);
    function Flow_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Flow_stmtContext.prototype.break_stmt = function () {
        return this.tryGetRuleContext(0, Break_stmtContext);
    };
    Flow_stmtContext.prototype.continue_stmt = function () {
        return this.tryGetRuleContext(0, Continue_stmtContext);
    };
    Flow_stmtContext.prototype.return_stmt = function () {
        return this.tryGetRuleContext(0, Return_stmtContext);
    };
    Flow_stmtContext.prototype.raise_stmt = function () {
        return this.tryGetRuleContext(0, Raise_stmtContext);
    };
    Flow_stmtContext.prototype.yield_stmt = function () {
        return this.tryGetRuleContext(0, Yield_stmtContext);
    };
    Object.defineProperty(Flow_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_flow_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Flow_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterFlow_stmt) {
            listener.enterFlow_stmt(this);
        }
    };
    // @Override
    Flow_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitFlow_stmt) {
            listener.exitFlow_stmt(this);
        }
    };
    // @Override
    Flow_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitFlow_stmt) {
            return visitor.visitFlow_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Flow_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Flow_stmtContext = Flow_stmtContext;
var Break_stmtContext = /** @class */ (function (_super) {
    __extends(Break_stmtContext, _super);
    function Break_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Break_stmtContext.prototype.BREAK = function () { return this.getToken(AltPython3Parser.BREAK, 0); };
    Object.defineProperty(Break_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_break_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Break_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterBreak_stmt) {
            listener.enterBreak_stmt(this);
        }
    };
    // @Override
    Break_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitBreak_stmt) {
            listener.exitBreak_stmt(this);
        }
    };
    // @Override
    Break_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitBreak_stmt) {
            return visitor.visitBreak_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Break_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Break_stmtContext = Break_stmtContext;
var Continue_stmtContext = /** @class */ (function (_super) {
    __extends(Continue_stmtContext, _super);
    function Continue_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Continue_stmtContext.prototype.CONTINUE = function () { return this.getToken(AltPython3Parser.CONTINUE, 0); };
    Object.defineProperty(Continue_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_continue_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Continue_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterContinue_stmt) {
            listener.enterContinue_stmt(this);
        }
    };
    // @Override
    Continue_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitContinue_stmt) {
            listener.exitContinue_stmt(this);
        }
    };
    // @Override
    Continue_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitContinue_stmt) {
            return visitor.visitContinue_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Continue_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Continue_stmtContext = Continue_stmtContext;
var Return_stmtContext = /** @class */ (function (_super) {
    __extends(Return_stmtContext, _super);
    function Return_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Return_stmtContext.prototype.RETURN = function () { return this.getToken(AltPython3Parser.RETURN, 0); };
    Return_stmtContext.prototype.testlist = function () {
        return this.tryGetRuleContext(0, TestlistContext);
    };
    Object.defineProperty(Return_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_return_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Return_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterReturn_stmt) {
            listener.enterReturn_stmt(this);
        }
    };
    // @Override
    Return_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitReturn_stmt) {
            listener.exitReturn_stmt(this);
        }
    };
    // @Override
    Return_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitReturn_stmt) {
            return visitor.visitReturn_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Return_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Return_stmtContext = Return_stmtContext;
var Yield_stmtContext = /** @class */ (function (_super) {
    __extends(Yield_stmtContext, _super);
    function Yield_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Yield_stmtContext.prototype.yield_expr = function () {
        return this.getRuleContext(0, Yield_exprContext);
    };
    Object.defineProperty(Yield_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_yield_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Yield_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterYield_stmt) {
            listener.enterYield_stmt(this);
        }
    };
    // @Override
    Yield_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitYield_stmt) {
            listener.exitYield_stmt(this);
        }
    };
    // @Override
    Yield_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitYield_stmt) {
            return visitor.visitYield_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Yield_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Yield_stmtContext = Yield_stmtContext;
var Raise_stmtContext = /** @class */ (function (_super) {
    __extends(Raise_stmtContext, _super);
    function Raise_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Raise_stmtContext.prototype.RAISE = function () { return this.getToken(AltPython3Parser.RAISE, 0); };
    Raise_stmtContext.prototype.test = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TestContext);
        }
        else {
            return this.getRuleContext(i, TestContext);
        }
    };
    Raise_stmtContext.prototype.FROM = function () { return this.tryGetToken(AltPython3Parser.FROM, 0); };
    Raise_stmtContext.prototype.NAME = function () { return this.tryGetToken(AltPython3Parser.NAME, 0); };
    Raise_stmtContext.prototype.COMMA = function () { return this.tryGetToken(AltPython3Parser.COMMA, 0); };
    Raise_stmtContext.prototype.str = function () {
        return this.tryGetRuleContext(0, StrContext);
    };
    Object.defineProperty(Raise_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_raise_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Raise_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterRaise_stmt) {
            listener.enterRaise_stmt(this);
        }
    };
    // @Override
    Raise_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitRaise_stmt) {
            listener.exitRaise_stmt(this);
        }
    };
    // @Override
    Raise_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitRaise_stmt) {
            return visitor.visitRaise_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Raise_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Raise_stmtContext = Raise_stmtContext;
var Import_stmtContext = /** @class */ (function (_super) {
    __extends(Import_stmtContext, _super);
    function Import_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Import_stmtContext.prototype.import_name = function () {
        return this.tryGetRuleContext(0, Import_nameContext);
    };
    Import_stmtContext.prototype.import_from = function () {
        return this.tryGetRuleContext(0, Import_fromContext);
    };
    Object.defineProperty(Import_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_import_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Import_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterImport_stmt) {
            listener.enterImport_stmt(this);
        }
    };
    // @Override
    Import_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitImport_stmt) {
            listener.exitImport_stmt(this);
        }
    };
    // @Override
    Import_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitImport_stmt) {
            return visitor.visitImport_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Import_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Import_stmtContext = Import_stmtContext;
var Import_nameContext = /** @class */ (function (_super) {
    __extends(Import_nameContext, _super);
    function Import_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Import_nameContext.prototype.IMPORT = function () { return this.getToken(AltPython3Parser.IMPORT, 0); };
    Import_nameContext.prototype.dotted_as_names = function () {
        return this.getRuleContext(0, Dotted_as_namesContext);
    };
    Object.defineProperty(Import_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_import_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Import_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterImport_name) {
            listener.enterImport_name(this);
        }
    };
    // @Override
    Import_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitImport_name) {
            listener.exitImport_name(this);
        }
    };
    // @Override
    Import_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitImport_name) {
            return visitor.visitImport_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Import_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Import_nameContext = Import_nameContext;
var Import_fromContext = /** @class */ (function (_super) {
    __extends(Import_fromContext, _super);
    function Import_fromContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Import_fromContext.prototype.FROM = function () { return this.getToken(AltPython3Parser.FROM, 0); };
    Import_fromContext.prototype.IMPORT = function () { return this.getToken(AltPython3Parser.IMPORT, 0); };
    Import_fromContext.prototype.dotted_name = function () {
        return this.tryGetRuleContext(0, Dotted_nameContext);
    };
    Import_fromContext.prototype.STAR = function () { return this.tryGetToken(AltPython3Parser.STAR, 0); };
    Import_fromContext.prototype.OPEN_PAREN = function () { return this.tryGetToken(AltPython3Parser.OPEN_PAREN, 0); };
    Import_fromContext.prototype.import_as_names = function () {
        return this.tryGetRuleContext(0, Import_as_namesContext);
    };
    Import_fromContext.prototype.CLOSE_PAREN = function () { return this.tryGetToken(AltPython3Parser.CLOSE_PAREN, 0); };
    Import_fromContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.DOT);
        }
        else {
            return this.getToken(AltPython3Parser.DOT, i);
        }
    };
    Import_fromContext.prototype.ELLIPSIS = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.ELLIPSIS);
        }
        else {
            return this.getToken(AltPython3Parser.ELLIPSIS, i);
        }
    };
    Object.defineProperty(Import_fromContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_import_from; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Import_fromContext.prototype.enterRule = function (listener) {
        if (listener.enterImport_from) {
            listener.enterImport_from(this);
        }
    };
    // @Override
    Import_fromContext.prototype.exitRule = function (listener) {
        if (listener.exitImport_from) {
            listener.exitImport_from(this);
        }
    };
    // @Override
    Import_fromContext.prototype.accept = function (visitor) {
        if (visitor.visitImport_from) {
            return visitor.visitImport_from(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Import_fromContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Import_fromContext = Import_fromContext;
var Import_as_nameContext = /** @class */ (function (_super) {
    __extends(Import_as_nameContext, _super);
    function Import_as_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Import_as_nameContext.prototype.NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.NAME);
        }
        else {
            return this.getToken(AltPython3Parser.NAME, i);
        }
    };
    Import_as_nameContext.prototype.AS = function () { return this.tryGetToken(AltPython3Parser.AS, 0); };
    Object.defineProperty(Import_as_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_import_as_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Import_as_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterImport_as_name) {
            listener.enterImport_as_name(this);
        }
    };
    // @Override
    Import_as_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitImport_as_name) {
            listener.exitImport_as_name(this);
        }
    };
    // @Override
    Import_as_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitImport_as_name) {
            return visitor.visitImport_as_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Import_as_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Import_as_nameContext = Import_as_nameContext;
var Dotted_as_nameContext = /** @class */ (function (_super) {
    __extends(Dotted_as_nameContext, _super);
    function Dotted_as_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Dotted_as_nameContext.prototype.dotted_name = function () {
        return this.getRuleContext(0, Dotted_nameContext);
    };
    Dotted_as_nameContext.prototype.AS = function () { return this.tryGetToken(AltPython3Parser.AS, 0); };
    Dotted_as_nameContext.prototype.NAME = function () { return this.tryGetToken(AltPython3Parser.NAME, 0); };
    Object.defineProperty(Dotted_as_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_dotted_as_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Dotted_as_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterDotted_as_name) {
            listener.enterDotted_as_name(this);
        }
    };
    // @Override
    Dotted_as_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitDotted_as_name) {
            listener.exitDotted_as_name(this);
        }
    };
    // @Override
    Dotted_as_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitDotted_as_name) {
            return visitor.visitDotted_as_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Dotted_as_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Dotted_as_nameContext = Dotted_as_nameContext;
var Import_as_namesContext = /** @class */ (function (_super) {
    __extends(Import_as_namesContext, _super);
    function Import_as_namesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Import_as_namesContext.prototype.import_as_name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Import_as_nameContext);
        }
        else {
            return this.getRuleContext(i, Import_as_nameContext);
        }
    };
    Import_as_namesContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.COMMA);
        }
        else {
            return this.getToken(AltPython3Parser.COMMA, i);
        }
    };
    Object.defineProperty(Import_as_namesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_import_as_names; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Import_as_namesContext.prototype.enterRule = function (listener) {
        if (listener.enterImport_as_names) {
            listener.enterImport_as_names(this);
        }
    };
    // @Override
    Import_as_namesContext.prototype.exitRule = function (listener) {
        if (listener.exitImport_as_names) {
            listener.exitImport_as_names(this);
        }
    };
    // @Override
    Import_as_namesContext.prototype.accept = function (visitor) {
        if (visitor.visitImport_as_names) {
            return visitor.visitImport_as_names(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Import_as_namesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Import_as_namesContext = Import_as_namesContext;
var Dotted_as_namesContext = /** @class */ (function (_super) {
    __extends(Dotted_as_namesContext, _super);
    function Dotted_as_namesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Dotted_as_namesContext.prototype.dotted_as_name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Dotted_as_nameContext);
        }
        else {
            return this.getRuleContext(i, Dotted_as_nameContext);
        }
    };
    Dotted_as_namesContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.COMMA);
        }
        else {
            return this.getToken(AltPython3Parser.COMMA, i);
        }
    };
    Object.defineProperty(Dotted_as_namesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_dotted_as_names; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Dotted_as_namesContext.prototype.enterRule = function (listener) {
        if (listener.enterDotted_as_names) {
            listener.enterDotted_as_names(this);
        }
    };
    // @Override
    Dotted_as_namesContext.prototype.exitRule = function (listener) {
        if (listener.exitDotted_as_names) {
            listener.exitDotted_as_names(this);
        }
    };
    // @Override
    Dotted_as_namesContext.prototype.accept = function (visitor) {
        if (visitor.visitDotted_as_names) {
            return visitor.visitDotted_as_names(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Dotted_as_namesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Dotted_as_namesContext = Dotted_as_namesContext;
var Dotted_nameContext = /** @class */ (function (_super) {
    __extends(Dotted_nameContext, _super);
    function Dotted_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Dotted_nameContext.prototype.NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.NAME);
        }
        else {
            return this.getToken(AltPython3Parser.NAME, i);
        }
    };
    Dotted_nameContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.DOT);
        }
        else {
            return this.getToken(AltPython3Parser.DOT, i);
        }
    };
    Object.defineProperty(Dotted_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_dotted_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Dotted_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterDotted_name) {
            listener.enterDotted_name(this);
        }
    };
    // @Override
    Dotted_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitDotted_name) {
            listener.exitDotted_name(this);
        }
    };
    // @Override
    Dotted_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitDotted_name) {
            return visitor.visitDotted_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Dotted_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Dotted_nameContext = Dotted_nameContext;
var Global_stmtContext = /** @class */ (function (_super) {
    __extends(Global_stmtContext, _super);
    function Global_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Global_stmtContext.prototype.GLOBAL = function () { return this.getToken(AltPython3Parser.GLOBAL, 0); };
    Global_stmtContext.prototype.NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.NAME);
        }
        else {
            return this.getToken(AltPython3Parser.NAME, i);
        }
    };
    Global_stmtContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.COMMA);
        }
        else {
            return this.getToken(AltPython3Parser.COMMA, i);
        }
    };
    Object.defineProperty(Global_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_global_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Global_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterGlobal_stmt) {
            listener.enterGlobal_stmt(this);
        }
    };
    // @Override
    Global_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitGlobal_stmt) {
            listener.exitGlobal_stmt(this);
        }
    };
    // @Override
    Global_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitGlobal_stmt) {
            return visitor.visitGlobal_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Global_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Global_stmtContext = Global_stmtContext;
var Nonlocal_stmtContext = /** @class */ (function (_super) {
    __extends(Nonlocal_stmtContext, _super);
    function Nonlocal_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Nonlocal_stmtContext.prototype.NONLOCAL = function () { return this.getToken(AltPython3Parser.NONLOCAL, 0); };
    Nonlocal_stmtContext.prototype.NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.NAME);
        }
        else {
            return this.getToken(AltPython3Parser.NAME, i);
        }
    };
    Nonlocal_stmtContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.COMMA);
        }
        else {
            return this.getToken(AltPython3Parser.COMMA, i);
        }
    };
    Object.defineProperty(Nonlocal_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_nonlocal_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Nonlocal_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterNonlocal_stmt) {
            listener.enterNonlocal_stmt(this);
        }
    };
    // @Override
    Nonlocal_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitNonlocal_stmt) {
            listener.exitNonlocal_stmt(this);
        }
    };
    // @Override
    Nonlocal_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitNonlocal_stmt) {
            return visitor.visitNonlocal_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Nonlocal_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Nonlocal_stmtContext = Nonlocal_stmtContext;
var Assert_stmtContext = /** @class */ (function (_super) {
    __extends(Assert_stmtContext, _super);
    function Assert_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Assert_stmtContext.prototype.ASSERT = function () { return this.getToken(AltPython3Parser.ASSERT, 0); };
    Assert_stmtContext.prototype.test = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TestContext);
        }
        else {
            return this.getRuleContext(i, TestContext);
        }
    };
    Assert_stmtContext.prototype.COMMA = function () { return this.tryGetToken(AltPython3Parser.COMMA, 0); };
    Object.defineProperty(Assert_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_assert_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Assert_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterAssert_stmt) {
            listener.enterAssert_stmt(this);
        }
    };
    // @Override
    Assert_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitAssert_stmt) {
            listener.exitAssert_stmt(this);
        }
    };
    // @Override
    Assert_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitAssert_stmt) {
            return visitor.visitAssert_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Assert_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Assert_stmtContext = Assert_stmtContext;
var Compound_stmtContext = /** @class */ (function (_super) {
    __extends(Compound_stmtContext, _super);
    function Compound_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Compound_stmtContext.prototype.if_stmt = function () {
        return this.tryGetRuleContext(0, If_stmtContext);
    };
    Compound_stmtContext.prototype.while_stmt = function () {
        return this.tryGetRuleContext(0, While_stmtContext);
    };
    Compound_stmtContext.prototype.for_stmt = function () {
        return this.tryGetRuleContext(0, For_stmtContext);
    };
    Compound_stmtContext.prototype.try_stmt = function () {
        return this.tryGetRuleContext(0, Try_stmtContext);
    };
    Compound_stmtContext.prototype.with_stmt = function () {
        return this.tryGetRuleContext(0, With_stmtContext);
    };
    Compound_stmtContext.prototype.funcdef = function () {
        return this.tryGetRuleContext(0, FuncdefContext);
    };
    Compound_stmtContext.prototype.classdef = function () {
        return this.tryGetRuleContext(0, ClassdefContext);
    };
    Compound_stmtContext.prototype.decorated = function () {
        return this.tryGetRuleContext(0, DecoratedContext);
    };
    Object.defineProperty(Compound_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_compound_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Compound_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterCompound_stmt) {
            listener.enterCompound_stmt(this);
        }
    };
    // @Override
    Compound_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitCompound_stmt) {
            listener.exitCompound_stmt(this);
        }
    };
    // @Override
    Compound_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitCompound_stmt) {
            return visitor.visitCompound_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Compound_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Compound_stmtContext = Compound_stmtContext;
var If_stmtContext = /** @class */ (function (_super) {
    __extends(If_stmtContext, _super);
    function If_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    If_stmtContext.prototype.IF = function () { return this.getToken(AltPython3Parser.IF, 0); };
    If_stmtContext.prototype.test = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TestContext);
        }
        else {
            return this.getRuleContext(i, TestContext);
        }
    };
    If_stmtContext.prototype.COLON = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.COLON);
        }
        else {
            return this.getToken(AltPython3Parser.COLON, i);
        }
    };
    If_stmtContext.prototype.suite = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SuiteContext);
        }
        else {
            return this.getRuleContext(i, SuiteContext);
        }
    };
    If_stmtContext.prototype.ELIF = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.ELIF);
        }
        else {
            return this.getToken(AltPython3Parser.ELIF, i);
        }
    };
    If_stmtContext.prototype.ELSE = function () { return this.tryGetToken(AltPython3Parser.ELSE, 0); };
    Object.defineProperty(If_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_if_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    If_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterIf_stmt) {
            listener.enterIf_stmt(this);
        }
    };
    // @Override
    If_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitIf_stmt) {
            listener.exitIf_stmt(this);
        }
    };
    // @Override
    If_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitIf_stmt) {
            return visitor.visitIf_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return If_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.If_stmtContext = If_stmtContext;
var While_stmtContext = /** @class */ (function (_super) {
    __extends(While_stmtContext, _super);
    function While_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    While_stmtContext.prototype.WHILE = function () { return this.getToken(AltPython3Parser.WHILE, 0); };
    While_stmtContext.prototype.test = function () {
        return this.getRuleContext(0, TestContext);
    };
    While_stmtContext.prototype.COLON = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.COLON);
        }
        else {
            return this.getToken(AltPython3Parser.COLON, i);
        }
    };
    While_stmtContext.prototype.suite = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SuiteContext);
        }
        else {
            return this.getRuleContext(i, SuiteContext);
        }
    };
    While_stmtContext.prototype.ELSE = function () { return this.tryGetToken(AltPython3Parser.ELSE, 0); };
    Object.defineProperty(While_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_while_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    While_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterWhile_stmt) {
            listener.enterWhile_stmt(this);
        }
    };
    // @Override
    While_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitWhile_stmt) {
            listener.exitWhile_stmt(this);
        }
    };
    // @Override
    While_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitWhile_stmt) {
            return visitor.visitWhile_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return While_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.While_stmtContext = While_stmtContext;
var For_stmtContext = /** @class */ (function (_super) {
    __extends(For_stmtContext, _super);
    function For_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    For_stmtContext.prototype.FOR = function () { return this.getToken(AltPython3Parser.FOR, 0); };
    For_stmtContext.prototype.exprlist = function () {
        return this.getRuleContext(0, ExprlistContext);
    };
    For_stmtContext.prototype.IN = function () { return this.getToken(AltPython3Parser.IN, 0); };
    For_stmtContext.prototype.testlist = function () {
        return this.getRuleContext(0, TestlistContext);
    };
    For_stmtContext.prototype.COLON = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.COLON);
        }
        else {
            return this.getToken(AltPython3Parser.COLON, i);
        }
    };
    For_stmtContext.prototype.suite = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SuiteContext);
        }
        else {
            return this.getRuleContext(i, SuiteContext);
        }
    };
    For_stmtContext.prototype.ELSE = function () { return this.tryGetToken(AltPython3Parser.ELSE, 0); };
    Object.defineProperty(For_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_for_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    For_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterFor_stmt) {
            listener.enterFor_stmt(this);
        }
    };
    // @Override
    For_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitFor_stmt) {
            listener.exitFor_stmt(this);
        }
    };
    // @Override
    For_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitFor_stmt) {
            return visitor.visitFor_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return For_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.For_stmtContext = For_stmtContext;
var Try_stmtContext = /** @class */ (function (_super) {
    __extends(Try_stmtContext, _super);
    function Try_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Try_stmtContext.prototype.TRY = function () { return this.getToken(AltPython3Parser.TRY, 0); };
    Try_stmtContext.prototype.COLON = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.COLON);
        }
        else {
            return this.getToken(AltPython3Parser.COLON, i);
        }
    };
    Try_stmtContext.prototype.suite = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SuiteContext);
        }
        else {
            return this.getRuleContext(i, SuiteContext);
        }
    };
    Try_stmtContext.prototype.FINALLY = function () { return this.tryGetToken(AltPython3Parser.FINALLY, 0); };
    Try_stmtContext.prototype.except_clause = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Except_clauseContext);
        }
        else {
            return this.getRuleContext(i, Except_clauseContext);
        }
    };
    Try_stmtContext.prototype.ELSE = function () { return this.tryGetToken(AltPython3Parser.ELSE, 0); };
    Object.defineProperty(Try_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_try_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Try_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterTry_stmt) {
            listener.enterTry_stmt(this);
        }
    };
    // @Override
    Try_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitTry_stmt) {
            listener.exitTry_stmt(this);
        }
    };
    // @Override
    Try_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitTry_stmt) {
            return visitor.visitTry_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Try_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Try_stmtContext = Try_stmtContext;
var With_stmtContext = /** @class */ (function (_super) {
    __extends(With_stmtContext, _super);
    function With_stmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    With_stmtContext.prototype.WITH = function () { return this.getToken(AltPython3Parser.WITH, 0); };
    With_stmtContext.prototype.with_item = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(With_itemContext);
        }
        else {
            return this.getRuleContext(i, With_itemContext);
        }
    };
    With_stmtContext.prototype.COLON = function () { return this.getToken(AltPython3Parser.COLON, 0); };
    With_stmtContext.prototype.suite = function () {
        return this.getRuleContext(0, SuiteContext);
    };
    With_stmtContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.COMMA);
        }
        else {
            return this.getToken(AltPython3Parser.COMMA, i);
        }
    };
    Object.defineProperty(With_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_with_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    With_stmtContext.prototype.enterRule = function (listener) {
        if (listener.enterWith_stmt) {
            listener.enterWith_stmt(this);
        }
    };
    // @Override
    With_stmtContext.prototype.exitRule = function (listener) {
        if (listener.exitWith_stmt) {
            listener.exitWith_stmt(this);
        }
    };
    // @Override
    With_stmtContext.prototype.accept = function (visitor) {
        if (visitor.visitWith_stmt) {
            return visitor.visitWith_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return With_stmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.With_stmtContext = With_stmtContext;
var With_itemContext = /** @class */ (function (_super) {
    __extends(With_itemContext, _super);
    function With_itemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    With_itemContext.prototype.test = function () {
        return this.getRuleContext(0, TestContext);
    };
    With_itemContext.prototype.AS = function () { return this.tryGetToken(AltPython3Parser.AS, 0); };
    With_itemContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    Object.defineProperty(With_itemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_with_item; },
        enumerable: true,
        configurable: true
    });
    // @Override
    With_itemContext.prototype.enterRule = function (listener) {
        if (listener.enterWith_item) {
            listener.enterWith_item(this);
        }
    };
    // @Override
    With_itemContext.prototype.exitRule = function (listener) {
        if (listener.exitWith_item) {
            listener.exitWith_item(this);
        }
    };
    // @Override
    With_itemContext.prototype.accept = function (visitor) {
        if (visitor.visitWith_item) {
            return visitor.visitWith_item(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return With_itemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.With_itemContext = With_itemContext;
var Except_clauseContext = /** @class */ (function (_super) {
    __extends(Except_clauseContext, _super);
    function Except_clauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Except_clauseContext.prototype.EXCEPT = function () { return this.getToken(AltPython3Parser.EXCEPT, 0); };
    Except_clauseContext.prototype.test = function () {
        return this.tryGetRuleContext(0, TestContext);
    };
    Except_clauseContext.prototype.AS = function () { return this.tryGetToken(AltPython3Parser.AS, 0); };
    Except_clauseContext.prototype.NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.NAME);
        }
        else {
            return this.getToken(AltPython3Parser.NAME, i);
        }
    };
    Except_clauseContext.prototype.COMMA = function () { return this.tryGetToken(AltPython3Parser.COMMA, 0); };
    Object.defineProperty(Except_clauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_except_clause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Except_clauseContext.prototype.enterRule = function (listener) {
        if (listener.enterExcept_clause) {
            listener.enterExcept_clause(this);
        }
    };
    // @Override
    Except_clauseContext.prototype.exitRule = function (listener) {
        if (listener.exitExcept_clause) {
            listener.exitExcept_clause(this);
        }
    };
    // @Override
    Except_clauseContext.prototype.accept = function (visitor) {
        if (visitor.visitExcept_clause) {
            return visitor.visitExcept_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Except_clauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Except_clauseContext = Except_clauseContext;
var SuiteContext = /** @class */ (function (_super) {
    __extends(SuiteContext, _super);
    function SuiteContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SuiteContext.prototype.simple_stmt = function () {
        return this.tryGetRuleContext(0, Simple_stmtContext);
    };
    SuiteContext.prototype.NEWLINE = function () { return this.tryGetToken(AltPython3Parser.NEWLINE, 0); };
    SuiteContext.prototype.INDENT = function () { return this.tryGetToken(AltPython3Parser.INDENT, 0); };
    SuiteContext.prototype.DEDENT = function () { return this.tryGetToken(AltPython3Parser.DEDENT, 0); };
    SuiteContext.prototype.stmt = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }
        else {
            return this.getRuleContext(i, StmtContext);
        }
    };
    Object.defineProperty(SuiteContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_suite; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SuiteContext.prototype.enterRule = function (listener) {
        if (listener.enterSuite) {
            listener.enterSuite(this);
        }
    };
    // @Override
    SuiteContext.prototype.exitRule = function (listener) {
        if (listener.exitSuite) {
            listener.exitSuite(this);
        }
    };
    // @Override
    SuiteContext.prototype.accept = function (visitor) {
        if (visitor.visitSuite) {
            return visitor.visitSuite(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SuiteContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SuiteContext = SuiteContext;
var TestContext = /** @class */ (function (_super) {
    __extends(TestContext, _super);
    function TestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TestContext.prototype.or_test = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Or_testContext);
        }
        else {
            return this.getRuleContext(i, Or_testContext);
        }
    };
    TestContext.prototype.IF = function () { return this.tryGetToken(AltPython3Parser.IF, 0); };
    TestContext.prototype.ELSE = function () { return this.tryGetToken(AltPython3Parser.ELSE, 0); };
    TestContext.prototype.test = function () {
        return this.tryGetRuleContext(0, TestContext);
    };
    TestContext.prototype.lambdef = function () {
        return this.tryGetRuleContext(0, LambdefContext);
    };
    Object.defineProperty(TestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_test; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TestContext.prototype.enterRule = function (listener) {
        if (listener.enterTest) {
            listener.enterTest(this);
        }
    };
    // @Override
    TestContext.prototype.exitRule = function (listener) {
        if (listener.exitTest) {
            listener.exitTest(this);
        }
    };
    // @Override
    TestContext.prototype.accept = function (visitor) {
        if (visitor.visitTest) {
            return visitor.visitTest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TestContext = TestContext;
var Test_nocondContext = /** @class */ (function (_super) {
    __extends(Test_nocondContext, _super);
    function Test_nocondContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Test_nocondContext.prototype.or_test = function () {
        return this.tryGetRuleContext(0, Or_testContext);
    };
    Test_nocondContext.prototype.lambdef_nocond = function () {
        return this.tryGetRuleContext(0, Lambdef_nocondContext);
    };
    Object.defineProperty(Test_nocondContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_test_nocond; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Test_nocondContext.prototype.enterRule = function (listener) {
        if (listener.enterTest_nocond) {
            listener.enterTest_nocond(this);
        }
    };
    // @Override
    Test_nocondContext.prototype.exitRule = function (listener) {
        if (listener.exitTest_nocond) {
            listener.exitTest_nocond(this);
        }
    };
    // @Override
    Test_nocondContext.prototype.accept = function (visitor) {
        if (visitor.visitTest_nocond) {
            return visitor.visitTest_nocond(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Test_nocondContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Test_nocondContext = Test_nocondContext;
var LambdefContext = /** @class */ (function (_super) {
    __extends(LambdefContext, _super);
    function LambdefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LambdefContext.prototype.LAMBDA = function () { return this.getToken(AltPython3Parser.LAMBDA, 0); };
    LambdefContext.prototype.COLON = function () { return this.getToken(AltPython3Parser.COLON, 0); };
    LambdefContext.prototype.test = function () {
        return this.getRuleContext(0, TestContext);
    };
    LambdefContext.prototype.varargslist = function () {
        return this.tryGetRuleContext(0, VarargslistContext);
    };
    Object.defineProperty(LambdefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_lambdef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LambdefContext.prototype.enterRule = function (listener) {
        if (listener.enterLambdef) {
            listener.enterLambdef(this);
        }
    };
    // @Override
    LambdefContext.prototype.exitRule = function (listener) {
        if (listener.exitLambdef) {
            listener.exitLambdef(this);
        }
    };
    // @Override
    LambdefContext.prototype.accept = function (visitor) {
        if (visitor.visitLambdef) {
            return visitor.visitLambdef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LambdefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LambdefContext = LambdefContext;
var Lambdef_nocondContext = /** @class */ (function (_super) {
    __extends(Lambdef_nocondContext, _super);
    function Lambdef_nocondContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Lambdef_nocondContext.prototype.LAMBDA = function () { return this.getToken(AltPython3Parser.LAMBDA, 0); };
    Lambdef_nocondContext.prototype.COLON = function () { return this.getToken(AltPython3Parser.COLON, 0); };
    Lambdef_nocondContext.prototype.test_nocond = function () {
        return this.getRuleContext(0, Test_nocondContext);
    };
    Lambdef_nocondContext.prototype.varargslist = function () {
        return this.tryGetRuleContext(0, VarargslistContext);
    };
    Object.defineProperty(Lambdef_nocondContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_lambdef_nocond; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Lambdef_nocondContext.prototype.enterRule = function (listener) {
        if (listener.enterLambdef_nocond) {
            listener.enterLambdef_nocond(this);
        }
    };
    // @Override
    Lambdef_nocondContext.prototype.exitRule = function (listener) {
        if (listener.exitLambdef_nocond) {
            listener.exitLambdef_nocond(this);
        }
    };
    // @Override
    Lambdef_nocondContext.prototype.accept = function (visitor) {
        if (visitor.visitLambdef_nocond) {
            return visitor.visitLambdef_nocond(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Lambdef_nocondContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Lambdef_nocondContext = Lambdef_nocondContext;
var Or_testContext = /** @class */ (function (_super) {
    __extends(Or_testContext, _super);
    function Or_testContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Or_testContext.prototype.and_test = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(And_testContext);
        }
        else {
            return this.getRuleContext(i, And_testContext);
        }
    };
    Or_testContext.prototype.OR = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.OR);
        }
        else {
            return this.getToken(AltPython3Parser.OR, i);
        }
    };
    Object.defineProperty(Or_testContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_or_test; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Or_testContext.prototype.enterRule = function (listener) {
        if (listener.enterOr_test) {
            listener.enterOr_test(this);
        }
    };
    // @Override
    Or_testContext.prototype.exitRule = function (listener) {
        if (listener.exitOr_test) {
            listener.exitOr_test(this);
        }
    };
    // @Override
    Or_testContext.prototype.accept = function (visitor) {
        if (visitor.visitOr_test) {
            return visitor.visitOr_test(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Or_testContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Or_testContext = Or_testContext;
var And_testContext = /** @class */ (function (_super) {
    __extends(And_testContext, _super);
    function And_testContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    And_testContext.prototype.not_test = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Not_testContext);
        }
        else {
            return this.getRuleContext(i, Not_testContext);
        }
    };
    And_testContext.prototype.AND = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.AND);
        }
        else {
            return this.getToken(AltPython3Parser.AND, i);
        }
    };
    Object.defineProperty(And_testContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_and_test; },
        enumerable: true,
        configurable: true
    });
    // @Override
    And_testContext.prototype.enterRule = function (listener) {
        if (listener.enterAnd_test) {
            listener.enterAnd_test(this);
        }
    };
    // @Override
    And_testContext.prototype.exitRule = function (listener) {
        if (listener.exitAnd_test) {
            listener.exitAnd_test(this);
        }
    };
    // @Override
    And_testContext.prototype.accept = function (visitor) {
        if (visitor.visitAnd_test) {
            return visitor.visitAnd_test(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return And_testContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.And_testContext = And_testContext;
var Not_testContext = /** @class */ (function (_super) {
    __extends(Not_testContext, _super);
    function Not_testContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Not_testContext.prototype.NOT = function () { return this.tryGetToken(AltPython3Parser.NOT, 0); };
    Not_testContext.prototype.not_test = function () {
        return this.tryGetRuleContext(0, Not_testContext);
    };
    Not_testContext.prototype.comparison = function () {
        return this.tryGetRuleContext(0, ComparisonContext);
    };
    Object.defineProperty(Not_testContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_not_test; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Not_testContext.prototype.enterRule = function (listener) {
        if (listener.enterNot_test) {
            listener.enterNot_test(this);
        }
    };
    // @Override
    Not_testContext.prototype.exitRule = function (listener) {
        if (listener.exitNot_test) {
            listener.exitNot_test(this);
        }
    };
    // @Override
    Not_testContext.prototype.accept = function (visitor) {
        if (visitor.visitNot_test) {
            return visitor.visitNot_test(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Not_testContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Not_testContext = Not_testContext;
var ComparisonContext = /** @class */ (function (_super) {
    __extends(ComparisonContext, _super);
    function ComparisonContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ComparisonContext.prototype.star_expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Star_exprContext);
        }
        else {
            return this.getRuleContext(i, Star_exprContext);
        }
    };
    ComparisonContext.prototype.comp_op = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Comp_opContext);
        }
        else {
            return this.getRuleContext(i, Comp_opContext);
        }
    };
    Object.defineProperty(ComparisonContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_comparison; },
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
var Comp_opContext = /** @class */ (function (_super) {
    __extends(Comp_opContext, _super);
    function Comp_opContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Comp_opContext.prototype.LESS_THAN = function () { return this.tryGetToken(AltPython3Parser.LESS_THAN, 0); };
    Comp_opContext.prototype.GREATER_THAN = function () { return this.tryGetToken(AltPython3Parser.GREATER_THAN, 0); };
    Comp_opContext.prototype.EQUALS = function () { return this.tryGetToken(AltPython3Parser.EQUALS, 0); };
    Comp_opContext.prototype.GT_EQ = function () { return this.tryGetToken(AltPython3Parser.GT_EQ, 0); };
    Comp_opContext.prototype.LT_EQ = function () { return this.tryGetToken(AltPython3Parser.LT_EQ, 0); };
    Comp_opContext.prototype.NOT_EQ_1 = function () { return this.tryGetToken(AltPython3Parser.NOT_EQ_1, 0); };
    Comp_opContext.prototype.NOT_EQ_2 = function () { return this.tryGetToken(AltPython3Parser.NOT_EQ_2, 0); };
    Comp_opContext.prototype.IN = function () { return this.tryGetToken(AltPython3Parser.IN, 0); };
    Comp_opContext.prototype.NOT = function () { return this.tryGetToken(AltPython3Parser.NOT, 0); };
    Comp_opContext.prototype.IS = function () { return this.tryGetToken(AltPython3Parser.IS, 0); };
    Object.defineProperty(Comp_opContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_comp_op; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Comp_opContext.prototype.enterRule = function (listener) {
        if (listener.enterComp_op) {
            listener.enterComp_op(this);
        }
    };
    // @Override
    Comp_opContext.prototype.exitRule = function (listener) {
        if (listener.exitComp_op) {
            listener.exitComp_op(this);
        }
    };
    // @Override
    Comp_opContext.prototype.accept = function (visitor) {
        if (visitor.visitComp_op) {
            return visitor.visitComp_op(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Comp_opContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Comp_opContext = Comp_opContext;
var Star_exprContext = /** @class */ (function (_super) {
    __extends(Star_exprContext, _super);
    function Star_exprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Star_exprContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    Star_exprContext.prototype.STAR = function () { return this.tryGetToken(AltPython3Parser.STAR, 0); };
    Object.defineProperty(Star_exprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_star_expr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Star_exprContext.prototype.enterRule = function (listener) {
        if (listener.enterStar_expr) {
            listener.enterStar_expr(this);
        }
    };
    // @Override
    Star_exprContext.prototype.exitRule = function (listener) {
        if (listener.exitStar_expr) {
            listener.exitStar_expr(this);
        }
    };
    // @Override
    Star_exprContext.prototype.accept = function (visitor) {
        if (visitor.visitStar_expr) {
            return visitor.visitStar_expr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Star_exprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Star_exprContext = Star_exprContext;
var ExprContext = /** @class */ (function (_super) {
    __extends(ExprContext, _super);
    function ExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExprContext.prototype.xor_expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Xor_exprContext);
        }
        else {
            return this.getRuleContext(i, Xor_exprContext);
        }
    };
    ExprContext.prototype.OR_OP = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.OR_OP);
        }
        else {
            return this.getToken(AltPython3Parser.OR_OP, i);
        }
    };
    Object.defineProperty(ExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_expr; },
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
var Xor_exprContext = /** @class */ (function (_super) {
    __extends(Xor_exprContext, _super);
    function Xor_exprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Xor_exprContext.prototype.and_expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(And_exprContext);
        }
        else {
            return this.getRuleContext(i, And_exprContext);
        }
    };
    Xor_exprContext.prototype.XOR = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.XOR);
        }
        else {
            return this.getToken(AltPython3Parser.XOR, i);
        }
    };
    Object.defineProperty(Xor_exprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_xor_expr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Xor_exprContext.prototype.enterRule = function (listener) {
        if (listener.enterXor_expr) {
            listener.enterXor_expr(this);
        }
    };
    // @Override
    Xor_exprContext.prototype.exitRule = function (listener) {
        if (listener.exitXor_expr) {
            listener.exitXor_expr(this);
        }
    };
    // @Override
    Xor_exprContext.prototype.accept = function (visitor) {
        if (visitor.visitXor_expr) {
            return visitor.visitXor_expr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Xor_exprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Xor_exprContext = Xor_exprContext;
var And_exprContext = /** @class */ (function (_super) {
    __extends(And_exprContext, _super);
    function And_exprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    And_exprContext.prototype.shift_expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Shift_exprContext);
        }
        else {
            return this.getRuleContext(i, Shift_exprContext);
        }
    };
    And_exprContext.prototype.AND_OP = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.AND_OP);
        }
        else {
            return this.getToken(AltPython3Parser.AND_OP, i);
        }
    };
    Object.defineProperty(And_exprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_and_expr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    And_exprContext.prototype.enterRule = function (listener) {
        if (listener.enterAnd_expr) {
            listener.enterAnd_expr(this);
        }
    };
    // @Override
    And_exprContext.prototype.exitRule = function (listener) {
        if (listener.exitAnd_expr) {
            listener.exitAnd_expr(this);
        }
    };
    // @Override
    And_exprContext.prototype.accept = function (visitor) {
        if (visitor.visitAnd_expr) {
            return visitor.visitAnd_expr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return And_exprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.And_exprContext = And_exprContext;
var Shift_exprContext = /** @class */ (function (_super) {
    __extends(Shift_exprContext, _super);
    function Shift_exprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Shift_exprContext.prototype.arith_expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Arith_exprContext);
        }
        else {
            return this.getRuleContext(i, Arith_exprContext);
        }
    };
    Shift_exprContext.prototype.LEFT_SHIFT = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.LEFT_SHIFT);
        }
        else {
            return this.getToken(AltPython3Parser.LEFT_SHIFT, i);
        }
    };
    Shift_exprContext.prototype.RIGHT_SHIFT = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.RIGHT_SHIFT);
        }
        else {
            return this.getToken(AltPython3Parser.RIGHT_SHIFT, i);
        }
    };
    Object.defineProperty(Shift_exprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_shift_expr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Shift_exprContext.prototype.enterRule = function (listener) {
        if (listener.enterShift_expr) {
            listener.enterShift_expr(this);
        }
    };
    // @Override
    Shift_exprContext.prototype.exitRule = function (listener) {
        if (listener.exitShift_expr) {
            listener.exitShift_expr(this);
        }
    };
    // @Override
    Shift_exprContext.prototype.accept = function (visitor) {
        if (visitor.visitShift_expr) {
            return visitor.visitShift_expr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Shift_exprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Shift_exprContext = Shift_exprContext;
var Arith_exprContext = /** @class */ (function (_super) {
    __extends(Arith_exprContext, _super);
    function Arith_exprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Arith_exprContext.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    Arith_exprContext.prototype.ADD = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.ADD);
        }
        else {
            return this.getToken(AltPython3Parser.ADD, i);
        }
    };
    Arith_exprContext.prototype.MINUS = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.MINUS);
        }
        else {
            return this.getToken(AltPython3Parser.MINUS, i);
        }
    };
    Object.defineProperty(Arith_exprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_arith_expr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Arith_exprContext.prototype.enterRule = function (listener) {
        if (listener.enterArith_expr) {
            listener.enterArith_expr(this);
        }
    };
    // @Override
    Arith_exprContext.prototype.exitRule = function (listener) {
        if (listener.exitArith_expr) {
            listener.exitArith_expr(this);
        }
    };
    // @Override
    Arith_exprContext.prototype.accept = function (visitor) {
        if (visitor.visitArith_expr) {
            return visitor.visitArith_expr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Arith_exprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Arith_exprContext = Arith_exprContext;
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
    TermContext.prototype.STAR = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.STAR);
        }
        else {
            return this.getToken(AltPython3Parser.STAR, i);
        }
    };
    TermContext.prototype.DIV = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.DIV);
        }
        else {
            return this.getToken(AltPython3Parser.DIV, i);
        }
    };
    TermContext.prototype.MOD = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.MOD);
        }
        else {
            return this.getToken(AltPython3Parser.MOD, i);
        }
    };
    TermContext.prototype.IDIV = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.IDIV);
        }
        else {
            return this.getToken(AltPython3Parser.IDIV, i);
        }
    };
    TermContext.prototype.AT = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.AT);
        }
        else {
            return this.getToken(AltPython3Parser.AT, i);
        }
    };
    Object.defineProperty(TermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_term; },
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
    FactorContext.prototype.ADD = function () { return this.tryGetToken(AltPython3Parser.ADD, 0); };
    FactorContext.prototype.factor = function () {
        return this.tryGetRuleContext(0, FactorContext);
    };
    FactorContext.prototype.MINUS = function () { return this.tryGetToken(AltPython3Parser.MINUS, 0); };
    FactorContext.prototype.NOT_OP = function () { return this.tryGetToken(AltPython3Parser.NOT_OP, 0); };
    FactorContext.prototype.power = function () {
        return this.tryGetRuleContext(0, PowerContext);
    };
    Object.defineProperty(FactorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_factor; },
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
var PowerContext = /** @class */ (function (_super) {
    __extends(PowerContext, _super);
    function PowerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PowerContext.prototype.atom = function () {
        return this.getRuleContext(0, AtomContext);
    };
    PowerContext.prototype.trailer = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TrailerContext);
        }
        else {
            return this.getRuleContext(i, TrailerContext);
        }
    };
    PowerContext.prototype.POWER = function () { return this.tryGetToken(AltPython3Parser.POWER, 0); };
    PowerContext.prototype.factor = function () {
        return this.tryGetRuleContext(0, FactorContext);
    };
    Object.defineProperty(PowerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_power; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PowerContext.prototype.enterRule = function (listener) {
        if (listener.enterPower) {
            listener.enterPower(this);
        }
    };
    // @Override
    PowerContext.prototype.exitRule = function (listener) {
        if (listener.exitPower) {
            listener.exitPower(this);
        }
    };
    // @Override
    PowerContext.prototype.accept = function (visitor) {
        if (visitor.visitPower) {
            return visitor.visitPower(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PowerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PowerContext = PowerContext;
var AtomContext = /** @class */ (function (_super) {
    __extends(AtomContext, _super);
    function AtomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtomContext.prototype.OPEN_PAREN = function () { return this.tryGetToken(AltPython3Parser.OPEN_PAREN, 0); };
    AtomContext.prototype.CLOSE_PAREN = function () { return this.tryGetToken(AltPython3Parser.CLOSE_PAREN, 0); };
    AtomContext.prototype.yield_expr = function () {
        return this.tryGetRuleContext(0, Yield_exprContext);
    };
    AtomContext.prototype.testlist_comp = function () {
        return this.tryGetRuleContext(0, Testlist_compContext);
    };
    AtomContext.prototype.OPEN_BRACK = function () { return this.tryGetToken(AltPython3Parser.OPEN_BRACK, 0); };
    AtomContext.prototype.CLOSE_BRACK = function () { return this.tryGetToken(AltPython3Parser.CLOSE_BRACK, 0); };
    AtomContext.prototype.OPEN_BRACE = function () { return this.tryGetToken(AltPython3Parser.OPEN_BRACE, 0); };
    AtomContext.prototype.CLOSE_BRACE = function () { return this.tryGetToken(AltPython3Parser.CLOSE_BRACE, 0); };
    AtomContext.prototype.dictorsetmaker = function () {
        return this.tryGetRuleContext(0, DictorsetmakerContext);
    };
    AtomContext.prototype.NAME = function () { return this.tryGetToken(AltPython3Parser.NAME, 0); };
    AtomContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    AtomContext.prototype.str = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StrContext);
        }
        else {
            return this.getRuleContext(i, StrContext);
        }
    };
    AtomContext.prototype.ELLIPSIS = function () { return this.tryGetToken(AltPython3Parser.ELLIPSIS, 0); };
    AtomContext.prototype.NONE = function () { return this.tryGetToken(AltPython3Parser.NONE, 0); };
    AtomContext.prototype.TRUE = function () { return this.tryGetToken(AltPython3Parser.TRUE, 0); };
    AtomContext.prototype.FALSE = function () { return this.tryGetToken(AltPython3Parser.FALSE, 0); };
    Object.defineProperty(AtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_atom; },
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
var Testlist_compContext = /** @class */ (function (_super) {
    __extends(Testlist_compContext, _super);
    function Testlist_compContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Testlist_compContext.prototype.test = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TestContext);
        }
        else {
            return this.getRuleContext(i, TestContext);
        }
    };
    Testlist_compContext.prototype.comp_for = function () {
        return this.tryGetRuleContext(0, Comp_forContext);
    };
    Testlist_compContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.COMMA);
        }
        else {
            return this.getToken(AltPython3Parser.COMMA, i);
        }
    };
    Object.defineProperty(Testlist_compContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_testlist_comp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Testlist_compContext.prototype.enterRule = function (listener) {
        if (listener.enterTestlist_comp) {
            listener.enterTestlist_comp(this);
        }
    };
    // @Override
    Testlist_compContext.prototype.exitRule = function (listener) {
        if (listener.exitTestlist_comp) {
            listener.exitTestlist_comp(this);
        }
    };
    // @Override
    Testlist_compContext.prototype.accept = function (visitor) {
        if (visitor.visitTestlist_comp) {
            return visitor.visitTestlist_comp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Testlist_compContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Testlist_compContext = Testlist_compContext;
var TrailerContext = /** @class */ (function (_super) {
    __extends(TrailerContext, _super);
    function TrailerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TrailerContext.prototype.OPEN_PAREN = function () { return this.tryGetToken(AltPython3Parser.OPEN_PAREN, 0); };
    TrailerContext.prototype.CLOSE_PAREN = function () { return this.tryGetToken(AltPython3Parser.CLOSE_PAREN, 0); };
    TrailerContext.prototype.arglist = function () {
        return this.tryGetRuleContext(0, ArglistContext);
    };
    TrailerContext.prototype.OPEN_BRACK = function () { return this.tryGetToken(AltPython3Parser.OPEN_BRACK, 0); };
    TrailerContext.prototype.subscriptlist = function () {
        return this.tryGetRuleContext(0, SubscriptlistContext);
    };
    TrailerContext.prototype.CLOSE_BRACK = function () { return this.tryGetToken(AltPython3Parser.CLOSE_BRACK, 0); };
    TrailerContext.prototype.DOT = function () { return this.tryGetToken(AltPython3Parser.DOT, 0); };
    TrailerContext.prototype.NAME = function () { return this.tryGetToken(AltPython3Parser.NAME, 0); };
    Object.defineProperty(TrailerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_trailer; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TrailerContext.prototype.enterRule = function (listener) {
        if (listener.enterTrailer) {
            listener.enterTrailer(this);
        }
    };
    // @Override
    TrailerContext.prototype.exitRule = function (listener) {
        if (listener.exitTrailer) {
            listener.exitTrailer(this);
        }
    };
    // @Override
    TrailerContext.prototype.accept = function (visitor) {
        if (visitor.visitTrailer) {
            return visitor.visitTrailer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TrailerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TrailerContext = TrailerContext;
var SubscriptlistContext = /** @class */ (function (_super) {
    __extends(SubscriptlistContext, _super);
    function SubscriptlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubscriptlistContext.prototype.subscript = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SubscriptContext);
        }
        else {
            return this.getRuleContext(i, SubscriptContext);
        }
    };
    SubscriptlistContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.COMMA);
        }
        else {
            return this.getToken(AltPython3Parser.COMMA, i);
        }
    };
    Object.defineProperty(SubscriptlistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_subscriptlist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubscriptlistContext.prototype.enterRule = function (listener) {
        if (listener.enterSubscriptlist) {
            listener.enterSubscriptlist(this);
        }
    };
    // @Override
    SubscriptlistContext.prototype.exitRule = function (listener) {
        if (listener.exitSubscriptlist) {
            listener.exitSubscriptlist(this);
        }
    };
    // @Override
    SubscriptlistContext.prototype.accept = function (visitor) {
        if (visitor.visitSubscriptlist) {
            return visitor.visitSubscriptlist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubscriptlistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubscriptlistContext = SubscriptlistContext;
var SubscriptContext = /** @class */ (function (_super) {
    __extends(SubscriptContext, _super);
    function SubscriptContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubscriptContext.prototype.test = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TestContext);
        }
        else {
            return this.getRuleContext(i, TestContext);
        }
    };
    SubscriptContext.prototype.COLON = function () { return this.tryGetToken(AltPython3Parser.COLON, 0); };
    SubscriptContext.prototype.sliceop = function () {
        return this.tryGetRuleContext(0, SliceopContext);
    };
    Object.defineProperty(SubscriptContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_subscript; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubscriptContext.prototype.enterRule = function (listener) {
        if (listener.enterSubscript) {
            listener.enterSubscript(this);
        }
    };
    // @Override
    SubscriptContext.prototype.exitRule = function (listener) {
        if (listener.exitSubscript) {
            listener.exitSubscript(this);
        }
    };
    // @Override
    SubscriptContext.prototype.accept = function (visitor) {
        if (visitor.visitSubscript) {
            return visitor.visitSubscript(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubscriptContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubscriptContext = SubscriptContext;
var SliceopContext = /** @class */ (function (_super) {
    __extends(SliceopContext, _super);
    function SliceopContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SliceopContext.prototype.COLON = function () { return this.getToken(AltPython3Parser.COLON, 0); };
    SliceopContext.prototype.test = function () {
        return this.tryGetRuleContext(0, TestContext);
    };
    Object.defineProperty(SliceopContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_sliceop; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SliceopContext.prototype.enterRule = function (listener) {
        if (listener.enterSliceop) {
            listener.enterSliceop(this);
        }
    };
    // @Override
    SliceopContext.prototype.exitRule = function (listener) {
        if (listener.exitSliceop) {
            listener.exitSliceop(this);
        }
    };
    // @Override
    SliceopContext.prototype.accept = function (visitor) {
        if (visitor.visitSliceop) {
            return visitor.visitSliceop(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SliceopContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SliceopContext = SliceopContext;
var ExprlistContext = /** @class */ (function (_super) {
    __extends(ExprlistContext, _super);
    function ExprlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExprlistContext.prototype.star_expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Star_exprContext);
        }
        else {
            return this.getRuleContext(i, Star_exprContext);
        }
    };
    ExprlistContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.COMMA);
        }
        else {
            return this.getToken(AltPython3Parser.COMMA, i);
        }
    };
    Object.defineProperty(ExprlistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_exprlist; },
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
var TestlistContext = /** @class */ (function (_super) {
    __extends(TestlistContext, _super);
    function TestlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TestlistContext.prototype.test = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TestContext);
        }
        else {
            return this.getRuleContext(i, TestContext);
        }
    };
    TestlistContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.COMMA);
        }
        else {
            return this.getToken(AltPython3Parser.COMMA, i);
        }
    };
    Object.defineProperty(TestlistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_testlist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TestlistContext.prototype.enterRule = function (listener) {
        if (listener.enterTestlist) {
            listener.enterTestlist(this);
        }
    };
    // @Override
    TestlistContext.prototype.exitRule = function (listener) {
        if (listener.exitTestlist) {
            listener.exitTestlist(this);
        }
    };
    // @Override
    TestlistContext.prototype.accept = function (visitor) {
        if (visitor.visitTestlist) {
            return visitor.visitTestlist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TestlistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TestlistContext = TestlistContext;
var DictorsetmakerContext = /** @class */ (function (_super) {
    __extends(DictorsetmakerContext, _super);
    function DictorsetmakerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DictorsetmakerContext.prototype.test = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TestContext);
        }
        else {
            return this.getRuleContext(i, TestContext);
        }
    };
    DictorsetmakerContext.prototype.COLON = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.COLON);
        }
        else {
            return this.getToken(AltPython3Parser.COLON, i);
        }
    };
    DictorsetmakerContext.prototype.comp_for = function () {
        return this.tryGetRuleContext(0, Comp_forContext);
    };
    DictorsetmakerContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.COMMA);
        }
        else {
            return this.getToken(AltPython3Parser.COMMA, i);
        }
    };
    Object.defineProperty(DictorsetmakerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_dictorsetmaker; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DictorsetmakerContext.prototype.enterRule = function (listener) {
        if (listener.enterDictorsetmaker) {
            listener.enterDictorsetmaker(this);
        }
    };
    // @Override
    DictorsetmakerContext.prototype.exitRule = function (listener) {
        if (listener.exitDictorsetmaker) {
            listener.exitDictorsetmaker(this);
        }
    };
    // @Override
    DictorsetmakerContext.prototype.accept = function (visitor) {
        if (visitor.visitDictorsetmaker) {
            return visitor.visitDictorsetmaker(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DictorsetmakerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DictorsetmakerContext = DictorsetmakerContext;
var ClassdefContext = /** @class */ (function (_super) {
    __extends(ClassdefContext, _super);
    function ClassdefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassdefContext.prototype.CLASS = function () { return this.getToken(AltPython3Parser.CLASS, 0); };
    ClassdefContext.prototype.NAME = function () { return this.getToken(AltPython3Parser.NAME, 0); };
    ClassdefContext.prototype.COLON = function () { return this.getToken(AltPython3Parser.COLON, 0); };
    ClassdefContext.prototype.suite = function () {
        return this.getRuleContext(0, SuiteContext);
    };
    ClassdefContext.prototype.OPEN_PAREN = function () { return this.tryGetToken(AltPython3Parser.OPEN_PAREN, 0); };
    ClassdefContext.prototype.CLOSE_PAREN = function () { return this.tryGetToken(AltPython3Parser.CLOSE_PAREN, 0); };
    ClassdefContext.prototype.arglist = function () {
        return this.tryGetRuleContext(0, ArglistContext);
    };
    Object.defineProperty(ClassdefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_classdef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassdefContext.prototype.enterRule = function (listener) {
        if (listener.enterClassdef) {
            listener.enterClassdef(this);
        }
    };
    // @Override
    ClassdefContext.prototype.exitRule = function (listener) {
        if (listener.exitClassdef) {
            listener.exitClassdef(this);
        }
    };
    // @Override
    ClassdefContext.prototype.accept = function (visitor) {
        if (visitor.visitClassdef) {
            return visitor.visitClassdef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassdefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassdefContext = ClassdefContext;
var ArglistContext = /** @class */ (function (_super) {
    __extends(ArglistContext, _super);
    function ArglistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArglistContext.prototype.argument = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentContext);
        }
        else {
            return this.getRuleContext(i, ArgumentContext);
        }
    };
    ArglistContext.prototype.STAR = function () { return this.tryGetToken(AltPython3Parser.STAR, 0); };
    ArglistContext.prototype.test = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TestContext);
        }
        else {
            return this.getRuleContext(i, TestContext);
        }
    };
    ArglistContext.prototype.POWER = function () { return this.tryGetToken(AltPython3Parser.POWER, 0); };
    ArglistContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(AltPython3Parser.COMMA);
        }
        else {
            return this.getToken(AltPython3Parser.COMMA, i);
        }
    };
    Object.defineProperty(ArglistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_arglist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArglistContext.prototype.enterRule = function (listener) {
        if (listener.enterArglist) {
            listener.enterArglist(this);
        }
    };
    // @Override
    ArglistContext.prototype.exitRule = function (listener) {
        if (listener.exitArglist) {
            listener.exitArglist(this);
        }
    };
    // @Override
    ArglistContext.prototype.accept = function (visitor) {
        if (visitor.visitArglist) {
            return visitor.visitArglist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArglistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArglistContext = ArglistContext;
var ArgumentContext = /** @class */ (function (_super) {
    __extends(ArgumentContext, _super);
    function ArgumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentContext.prototype.test = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TestContext);
        }
        else {
            return this.getRuleContext(i, TestContext);
        }
    };
    ArgumentContext.prototype.comp_for = function () {
        return this.tryGetRuleContext(0, Comp_forContext);
    };
    ArgumentContext.prototype.ASSIGN = function () { return this.tryGetToken(AltPython3Parser.ASSIGN, 0); };
    Object.defineProperty(ArgumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_argument; },
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
var Comp_iterContext = /** @class */ (function (_super) {
    __extends(Comp_iterContext, _super);
    function Comp_iterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Comp_iterContext.prototype.comp_for = function () {
        return this.tryGetRuleContext(0, Comp_forContext);
    };
    Comp_iterContext.prototype.comp_if = function () {
        return this.tryGetRuleContext(0, Comp_ifContext);
    };
    Object.defineProperty(Comp_iterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_comp_iter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Comp_iterContext.prototype.enterRule = function (listener) {
        if (listener.enterComp_iter) {
            listener.enterComp_iter(this);
        }
    };
    // @Override
    Comp_iterContext.prototype.exitRule = function (listener) {
        if (listener.exitComp_iter) {
            listener.exitComp_iter(this);
        }
    };
    // @Override
    Comp_iterContext.prototype.accept = function (visitor) {
        if (visitor.visitComp_iter) {
            return visitor.visitComp_iter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Comp_iterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Comp_iterContext = Comp_iterContext;
var Comp_forContext = /** @class */ (function (_super) {
    __extends(Comp_forContext, _super);
    function Comp_forContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Comp_forContext.prototype.FOR = function () { return this.getToken(AltPython3Parser.FOR, 0); };
    Comp_forContext.prototype.exprlist = function () {
        return this.getRuleContext(0, ExprlistContext);
    };
    Comp_forContext.prototype.IN = function () { return this.getToken(AltPython3Parser.IN, 0); };
    Comp_forContext.prototype.or_test = function () {
        return this.getRuleContext(0, Or_testContext);
    };
    Comp_forContext.prototype.comp_iter = function () {
        return this.tryGetRuleContext(0, Comp_iterContext);
    };
    Object.defineProperty(Comp_forContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_comp_for; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Comp_forContext.prototype.enterRule = function (listener) {
        if (listener.enterComp_for) {
            listener.enterComp_for(this);
        }
    };
    // @Override
    Comp_forContext.prototype.exitRule = function (listener) {
        if (listener.exitComp_for) {
            listener.exitComp_for(this);
        }
    };
    // @Override
    Comp_forContext.prototype.accept = function (visitor) {
        if (visitor.visitComp_for) {
            return visitor.visitComp_for(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Comp_forContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Comp_forContext = Comp_forContext;
var Comp_ifContext = /** @class */ (function (_super) {
    __extends(Comp_ifContext, _super);
    function Comp_ifContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Comp_ifContext.prototype.IF = function () { return this.getToken(AltPython3Parser.IF, 0); };
    Comp_ifContext.prototype.test_nocond = function () {
        return this.getRuleContext(0, Test_nocondContext);
    };
    Comp_ifContext.prototype.comp_iter = function () {
        return this.tryGetRuleContext(0, Comp_iterContext);
    };
    Object.defineProperty(Comp_ifContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_comp_if; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Comp_ifContext.prototype.enterRule = function (listener) {
        if (listener.enterComp_if) {
            listener.enterComp_if(this);
        }
    };
    // @Override
    Comp_ifContext.prototype.exitRule = function (listener) {
        if (listener.exitComp_if) {
            listener.exitComp_if(this);
        }
    };
    // @Override
    Comp_ifContext.prototype.accept = function (visitor) {
        if (visitor.visitComp_if) {
            return visitor.visitComp_if(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Comp_ifContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Comp_ifContext = Comp_ifContext;
var Yield_exprContext = /** @class */ (function (_super) {
    __extends(Yield_exprContext, _super);
    function Yield_exprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Yield_exprContext.prototype.YIELD = function () { return this.getToken(AltPython3Parser.YIELD, 0); };
    Yield_exprContext.prototype.yield_arg = function () {
        return this.tryGetRuleContext(0, Yield_argContext);
    };
    Object.defineProperty(Yield_exprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_yield_expr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Yield_exprContext.prototype.enterRule = function (listener) {
        if (listener.enterYield_expr) {
            listener.enterYield_expr(this);
        }
    };
    // @Override
    Yield_exprContext.prototype.exitRule = function (listener) {
        if (listener.exitYield_expr) {
            listener.exitYield_expr(this);
        }
    };
    // @Override
    Yield_exprContext.prototype.accept = function (visitor) {
        if (visitor.visitYield_expr) {
            return visitor.visitYield_expr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Yield_exprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Yield_exprContext = Yield_exprContext;
var Yield_argContext = /** @class */ (function (_super) {
    __extends(Yield_argContext, _super);
    function Yield_argContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Yield_argContext.prototype.FROM = function () { return this.tryGetToken(AltPython3Parser.FROM, 0); };
    Yield_argContext.prototype.test = function () {
        return this.tryGetRuleContext(0, TestContext);
    };
    Yield_argContext.prototype.testlist = function () {
        return this.tryGetRuleContext(0, TestlistContext);
    };
    Object.defineProperty(Yield_argContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_yield_arg; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Yield_argContext.prototype.enterRule = function (listener) {
        if (listener.enterYield_arg) {
            listener.enterYield_arg(this);
        }
    };
    // @Override
    Yield_argContext.prototype.exitRule = function (listener) {
        if (listener.exitYield_arg) {
            listener.exitYield_arg(this);
        }
    };
    // @Override
    Yield_argContext.prototype.accept = function (visitor) {
        if (visitor.visitYield_arg) {
            return visitor.visitYield_arg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Yield_argContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Yield_argContext = Yield_argContext;
var StrContext = /** @class */ (function (_super) {
    __extends(StrContext, _super);
    function StrContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StrContext.prototype.STRING_LITERAL = function () { return this.tryGetToken(AltPython3Parser.STRING_LITERAL, 0); };
    StrContext.prototype.BYTES_LITERAL = function () { return this.tryGetToken(AltPython3Parser.BYTES_LITERAL, 0); };
    Object.defineProperty(StrContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_str; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StrContext.prototype.enterRule = function (listener) {
        if (listener.enterStr) {
            listener.enterStr(this);
        }
    };
    // @Override
    StrContext.prototype.exitRule = function (listener) {
        if (listener.exitStr) {
            listener.exitStr(this);
        }
    };
    // @Override
    StrContext.prototype.accept = function (visitor) {
        if (visitor.visitStr) {
            return visitor.visitStr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StrContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StrContext = StrContext;
var NumberContext = /** @class */ (function (_super) {
    __extends(NumberContext, _super);
    function NumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumberContext.prototype.integer = function () {
        return this.tryGetRuleContext(0, IntegerContext);
    };
    NumberContext.prototype.FLOAT_NUMBER = function () { return this.tryGetToken(AltPython3Parser.FLOAT_NUMBER, 0); };
    NumberContext.prototype.IMAG_NUMBER = function () { return this.tryGetToken(AltPython3Parser.IMAG_NUMBER, 0); };
    Object.defineProperty(NumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_number; },
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
var IntegerContext = /** @class */ (function (_super) {
    __extends(IntegerContext, _super);
    function IntegerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntegerContext.prototype.DECIMAL_INTEGER = function () { return this.tryGetToken(AltPython3Parser.DECIMAL_INTEGER, 0); };
    IntegerContext.prototype.OCT_INTEGER = function () { return this.tryGetToken(AltPython3Parser.OCT_INTEGER, 0); };
    IntegerContext.prototype.HEX_INTEGER = function () { return this.tryGetToken(AltPython3Parser.HEX_INTEGER, 0); };
    IntegerContext.prototype.BIN_INTEGER = function () { return this.tryGetToken(AltPython3Parser.BIN_INTEGER, 0); };
    Object.defineProperty(IntegerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AltPython3Parser.RULE_integer; },
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
